import{v as F0,w as Oa,x as k4,y as Lp,z as Pp,A as C4,B as S4,C as T4,D as Mp,E as A4,G as z0,H as I4,m as Jr,I as H0,J as La,n as jn,o as tr,K as Ws,L as al,N as Bp,s as it,t as B,i as k,a as E,S as pe,u as dt,c as Ce,j as R4,k as xr,l as Fe,O as O4,M as Qe,P as L4,b as Ln,d as vt,Q as P4,R as M4,g as Nn,e as Le,T as B4,F as Ft,h as Ue,U as Gu,f as Pa,V as j4,W as N4}from"./index-597b9b57.js";import{c as ns,a as Gi,b as D4,d as U4,r as Qu}from"./usePersistStatus-ff0eab71.js";class F4 extends F0{constructor(e,n){super(),this.client=e,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),jp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return vu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return vu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),Oa(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Np(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const n=this.client.getQueryCache().build(this.client,e),i=this.createResult(n,e);return H4(this,i,e)&&(this.currentResult=i,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),i}getCurrentResult(){return this.currentResult}trackResult(e){const n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),e[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...n}={}){return this.fetch({...n,meta:{refetchPage:e}})}fetchOptimistic(e){const n=this.client.defaultQueryOptions(e),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(e){var n;return this.executeFetch({...e,cancelRefetch:(n=e.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let n=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(k4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Lp||this.currentResult.isStale||!Pp(this.options.staleTime))return;const n=C4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(Lp||this.options.enabled===!1||!Pp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||S4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,c=this.currentResultOptions,d=e!==i,f=d?e.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:p}=e;let{dataUpdatedAt:v,error:b,errorUpdatedAt:_,fetchStatus:w,status:x}=p,S=!1,L=!1,C;if(n._optimisticResults){const j=this.hasListeners(),W=!j&&jp(e,n),J=j&&Np(e,i,n,o);(W||J)&&(w=T4(e.options.networkMode)?"fetching":"paused",v||(x="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!p.dataUpdatedAt&&h!=null&&h.isSuccess&&x!=="error")C=h.data,v=h.dataUpdatedAt,x=h.status,S=!0;else if(n.select&&typeof p.data<"u")if(a&&p.data===l?.data&&n.select===this.selectFn)C=this.selectResult;else try{this.selectFn=n.select,C=n.select(p.data),C=Mp(a?.data,C,n),this.selectResult=C,this.selectError=null}catch(j){this.selectError=j}else C=p.data;if(typeof n.placeholderData<"u"&&typeof C>"u"&&x==="loading"){let j;if(a!=null&&a.isPlaceholderData&&n.placeholderData===c?.placeholderData)j=a.data;else if(j=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof j<"u")try{j=n.select(j),this.selectError=null}catch(W){this.selectError=W}typeof j<"u"&&(x="success",C=Mp(a?.data,j,n),L=!0)}this.selectError&&(b=this.selectError,C=this.selectResult,_=Date.now(),x="error");const R=w==="fetching",O=x==="loading",A=x==="error";return{status:x,fetchStatus:w,isLoading:O,isSuccess:x==="success",isError:A,isInitialLoading:O&&R,data:C,dataUpdatedAt:v,error:b,errorUpdatedAt:_,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>f.dataUpdateCount||p.errorUpdateCount>f.errorUpdateCount,isFetching:R,isRefetching:R&&!O,isLoadingError:A&&p.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:L,isPreviousData:S,isRefetchError:A&&p.dataUpdatedAt!==0,isStale:Yu(e,n),refetch:this.refetch,remove:this.remove}}updateResult(e){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Oa(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options,c=typeof l=="function"?l():l;if(c==="all"||!c&&!this.trackedProps.size)return!0;const d=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(f=>{const h=f;return this.currentResult[h]!==n[h]&&d.has(h)})};e?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const n={};e.type==="success"?n.onSuccess=!e.manual:e.type==="error"&&!A4(e.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(e){z0.batch(()=>{if(e.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(e.onError){var l,c,d,f;(l=(c=this.options).onError)==null||l.call(c,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function z4(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function jp(t,e){return z4(t,e)||t.state.dataUpdatedAt>0&&vu(t,e,e.refetchOnMount)}function vu(t,e,n){if(e.enabled!==!1){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Yu(t,e)}return!1}function Np(t,e,n,i){return n.enabled!==!1&&(t!==e||i.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&Yu(t,n)}function Yu(t,e){return t.isStaleByTime(e.staleTime)}function H4(t,e,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?e.isPlaceholderData:!Oa(t.getCurrentResult(),e)}class W4 extends F0{constructor(e,n){super(),this.client=e,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const i=this.options;this.options=this.client.defaultMutationOptions(e),Oa(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const n={listeners:!0};e.type==="success"?n.onSuccess=!0:e.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:I4(),n={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(e){z0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var l,c,d,f;(l=(c=this.mutateOptions).onError)==null||l.call(c,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)})})}}function q4(t){return typeof t=="function"}function Dp(t,e,n){if(!q4(t)){const{queryKey:i,...o}=t;return i?{...o,queryKey:i()}:t}return typeof e=="function"?{...n,queryKey:t(),queryFn:e}:{...e,queryKey:t()}}function W0(t,e){return typeof t=="function"?t(...e):!!t}function Z4(t,e){const n=Jr({context:t.context}),i=Symbol("empty"),o=n.defaultQueryOptions(t);o._optimisticResults="optimistic";const a=new e(n,o),[l,c]=ns(a.getOptimisticResult(o)),[d,{refetch:f,mutate:h}]=H0(()=>new Promise(_=>{l.isFetching&&l.isLoading||(Gi(l.data)===i&&_(void 0),_(Gi(l.data)))}));La(()=>{h(()=>Gi(l.data)),f()});let p=[];const v=a.subscribe(_=>{p.push(()=>{La(()=>{const w={...Gi(_)};w.data===void 0&&(w.data=i),c(Gi(w)),h(()=>Gi(_.data)),f()})}),queueMicrotask(()=>{const w=p.pop();w&&w(),p=[]})});jn(()=>v()),tr(()=>{a.setOptions(o,{listeners:!1})}),Ws(()=>{const _=n.defaultQueryOptions(t);a.setOptions(_)}),Ws(al(()=>l.status,()=>{if(l.isError&&!l.isFetching&&W0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const b={get(_,w){return w==="data"?d():Reflect.get(_,w)}};return new Proxy(l,b)}function Ai(t,e,n){const[i,o]=ns(Dp(t,e,n));return Ws(()=>{const a=Dp(t,e,n);o(a)}),Z4(i,F4)}function Ei(t,e,n){const[i,o]=ns(Bp(t,e,n)),a=Jr({context:i.context}),l=new W4(a,i),c=(p,v)=>{l.mutate(p,v).catch(K4)},[d,f]=ns({...l.getCurrentResult(),mutate:c,mutateAsync:l.getCurrentResult().mutate});Ws(()=>{const p=Bp(t,e,n);o(p),l.setOptions(p)}),Ws(al(()=>d.status,()=>{if(d.isError&&W0(l.options.useErrorBoundary,[d.error]))throw d.error}));const h=l.subscribe(p=>{f({...p,mutate:c,mutateAsync:p.mutate})});return jn(h),d}function K4(){}const V4=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),q0=(t={})=>(()=>{const e=V4();return it(e,t,!0,!0),e})();var wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function co(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function G4(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),n}var Q4=typeof wt=="object"&&wt&&wt.Object===Object&&wt,Z0=Q4,Y4=Z0,J4=typeof self=="object"&&self&&self.Object===Object&&self,X4=Y4||J4||Function("return this")(),Un=X4,e5=Un,t5=e5.Symbol,fs=t5,Up=fs,K0=Object.prototype,n5=K0.hasOwnProperty,r5=K0.toString,Fs=Up?Up.toStringTag:void 0;function i5(t){var e=n5.call(t,Fs),n=t[Fs];try{t[Fs]=void 0;var i=!0}catch{}var o=r5.call(t);return i&&(e?t[Fs]=n:delete t[Fs]),o}var s5=i5,o5=Object.prototype,a5=o5.toString;function l5(t){return a5.call(t)}var c5=l5,Fp=fs,u5=s5,d5=c5,f5="[object Null]",h5="[object Undefined]",zp=Fp?Fp.toStringTag:void 0;function p5(t){return t==null?t===void 0?h5:f5:zp&&zp in Object(t)?u5(t):d5(t)}var hs=p5;function g5(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var nr=g5,v5=hs,m5=nr,y5="[object AsyncFunction]",b5="[object Function]",_5="[object GeneratorFunction]",w5="[object Proxy]";function x5(t){if(!m5(t))return!1;var e=v5(t);return e==b5||e==_5||e==y5||e==w5}var V0=x5,$5=Un,E5=$5["__core-js_shared__"],k5=E5,Qc=k5,Hp=function(){var t=/[^.]+$/.exec(Qc&&Qc.keys&&Qc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function C5(t){return!!Hp&&Hp in t}var S5=C5,T5=Function.prototype,A5=T5.toString;function I5(t){if(t!=null){try{return A5.call(t)}catch{}try{return t+""}catch{}}return""}var G0=I5,R5=V0,O5=S5,L5=nr,P5=G0,M5=/[\\^$.*+?()[\]{}|]/g,B5=/^\[object .+?Constructor\]$/,j5=Function.prototype,N5=Object.prototype,D5=j5.toString,U5=N5.hasOwnProperty,F5=RegExp("^"+D5.call(U5).replace(M5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function z5(t){if(!L5(t)||O5(t))return!1;var e=R5(t)?F5:B5;return e.test(P5(t))}var H5=z5;function W5(t,e){return t?.[e]}var q5=W5,Z5=H5,K5=q5;function V5(t,e){var n=K5(t,e);return Z5(n)?n:void 0}var Ii=V5,G5=Ii,Q5=G5(Object,"create"),ll=Q5,Wp=ll;function Y5(){this.__data__=Wp?Wp(null):{},this.size=0}var J5=Y5;function X5(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var e$=X5,t$=ll,n$="__lodash_hash_undefined__",r$=Object.prototype,i$=r$.hasOwnProperty;function s$(t){var e=this.__data__;if(t$){var n=e[t];return n===n$?void 0:n}return i$.call(e,t)?e[t]:void 0}var o$=s$,a$=ll,l$=Object.prototype,c$=l$.hasOwnProperty;function u$(t){var e=this.__data__;return a$?e[t]!==void 0:c$.call(e,t)}var d$=u$,f$=ll,h$="__lodash_hash_undefined__";function p$(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=f$&&e===void 0?h$:e,this}var g$=p$,v$=J5,m$=e$,y$=o$,b$=d$,_$=g$;function ps(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ps.prototype.clear=v$;ps.prototype.delete=m$;ps.prototype.get=y$;ps.prototype.has=b$;ps.prototype.set=_$;var w$=ps;function x$(){this.__data__=[],this.size=0}var $$=x$;function E$(t,e){return t===e||t!==t&&e!==e}var Ju=E$,k$=Ju;function C$(t,e){for(var n=t.length;n--;)if(k$(t[n][0],e))return n;return-1}var cl=C$,S$=cl,T$=Array.prototype,A$=T$.splice;function I$(t){var e=this.__data__,n=S$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():A$.call(e,n,1),--this.size,!0}var R$=I$,O$=cl;function L$(t){var e=this.__data__,n=O$(e,t);return n<0?void 0:e[n][1]}var P$=L$,M$=cl;function B$(t){return M$(this.__data__,t)>-1}var j$=B$,N$=cl;function D$(t,e){var n=this.__data__,i=N$(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}var U$=D$,F$=$$,z$=R$,H$=P$,W$=j$,q$=U$;function gs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}gs.prototype.clear=F$;gs.prototype.delete=z$;gs.prototype.get=H$;gs.prototype.has=W$;gs.prototype.set=q$;var ul=gs,Z$=Ii,K$=Un,V$=Z$(K$,"Map"),Xu=V$,qp=w$,G$=ul,Q$=Xu;function Y$(){this.size=0,this.__data__={hash:new qp,map:new(Q$||G$),string:new qp}}var J$=Y$;function X$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var e6=X$,t6=e6;function n6(t,e){var n=t.__data__;return t6(e)?n[typeof e=="string"?"string":"hash"]:n.map}var dl=n6,r6=dl;function i6(t){var e=r6(this,t).delete(t);return this.size-=e?1:0,e}var s6=i6,o6=dl;function a6(t){return o6(this,t).get(t)}var l6=a6,c6=dl;function u6(t){return c6(this,t).has(t)}var d6=u6,f6=dl;function h6(t,e){var n=f6(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}var p6=h6,g6=J$,v6=s6,m6=l6,y6=d6,b6=p6;function vs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}vs.prototype.clear=g6;vs.prototype.delete=v6;vs.prototype.get=m6;vs.prototype.has=y6;vs.prototype.set=b6;var ed=vs,_6="__lodash_hash_undefined__";function w6(t){return this.__data__.set(t,_6),this}var x6=w6;function $6(t){return this.__data__.has(t)}var E6=$6,k6=ed,C6=x6,S6=E6;function Ma(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new k6;++e<n;)this.add(t[e])}Ma.prototype.add=Ma.prototype.push=C6;Ma.prototype.has=S6;var Q0=Ma;function T6(t,e,n,i){for(var o=t.length,a=n+(i?1:-1);i?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var A6=T6;function I6(t){return t!==t}var R6=I6;function O6(t,e,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===e)return i;return-1}var L6=O6,P6=A6,M6=R6,B6=L6;function j6(t,e,n){return e===e?B6(t,e,n):P6(t,M6,n)}var N6=j6,D6=N6;function U6(t,e){var n=t==null?0:t.length;return!!n&&D6(t,e,0)>-1}var F6=U6;function z6(t,e,n){for(var i=-1,o=t==null?0:t.length;++i<o;)if(n(e,t[i]))return!0;return!1}var H6=z6;function W6(t,e){return t.has(e)}var Y0=W6,q6=Ii,Z6=Un,K6=q6(Z6,"Set"),J0=K6;function V6(){}var G6=V6;function Q6(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var td=Q6,Yc=J0,Y6=G6,J6=td,X6=1/0,e8=Yc&&1/J6(new Yc([,-0]))[1]==X6?function(t){return new Yc(t)}:Y6,t8=e8,n8=Q0,r8=F6,i8=H6,s8=Y0,o8=t8,a8=td,l8=200;function c8(t,e,n){var i=-1,o=r8,a=t.length,l=!0,c=[],d=c;if(n)l=!1,o=i8;else if(a>=l8){var f=e?null:o8(t);if(f)return a8(f);l=!1,o=s8,d=new n8}else d=e?[]:c;e:for(;++i<a;){var h=t[i],p=e?e(h):h;if(h=n||h!==0?h:0,l&&p===p){for(var v=d.length;v--;)if(d[v]===p)continue e;e&&d.push(p),c.push(h)}else o(d,p,n)||(d!==c&&d.push(p),c.push(h))}return c}var X0=c8,u8=X0;function d8(t){return t&&t.length?u8(t):[]}var f8=d8;const wi=co(f8),h8=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),p8=t=>(()=>{const e=h8();return k(e,()=>t.children),e})();function mu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function g8(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function mi(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function v8(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");mu(t.outputLen),mu(t.blockLen)}function m8(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function y8(t,e){mi(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const an={number:mu,bool:g8,bytes:mi,hash:v8,exists:m8,output:y8},Jc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const nd=t=>t instanceof Uint8Array,xi=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Kn=(t,e)=>t<<32-e|t>>>e,b8=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!b8)throw new Error("Non little-endian hardware is not supported");const _8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function on(t){if(!nd(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=_8[t[n]];return e}function rs(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function e1(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function qs(t){if(typeof t=="string"&&(t=e1(t)),!nd(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Xi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!nd(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}class t1{clone(){return this._cloneInto()}}const w8=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function x8(t,e){if(e!==void 0&&(typeof e!="object"||!w8(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function Ri(t){const e=i=>t().update(qs(i)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function uo(t=32){if(Jc&&typeof Jc.getRandomValues=="function")return Jc.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}function $8(t,e,n,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),c=Number(n&a),d=i?4:0,f=i?0:4;t.setUint32(e+d,l,i),t.setUint32(e+f,c,i)}class rd extends t1{constructor(e,n,i,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=xi(this.buffer)}update(e){an.exists(this);const{view:n,buffer:i,blockLen:o}=this;e=qs(e);const a=e.length;for(let l=0;l<a;){const c=Math.min(o-this.pos,a-l);if(c===o){const d=xi(e);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(e.subarray(l,l+c),this.pos),this.pos+=c,l+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){an.exists(this),an.output(e,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let p=l;p<o;p++)n[p]=0;$8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const c=xi(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,h=this.get();if(f>h.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<f;p++)c.setUint32(4*p,h[p],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:c}=this;return e.length=o,e.pos=c,e.finished=a,e.destroyed=l,o%n&&e.buffer.set(i),e}}const E8=(t,e,n)=>t&e^~t&n,k8=(t,e,n)=>t&e^t&n^e&n,C8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Nr=new Uint32Array(64);class n1 extends rd{constructor(){super(64,32,8,!1),this.A=jr[0]|0,this.B=jr[1]|0,this.C=jr[2]|0,this.D=jr[3]|0,this.E=jr[4]|0,this.F=jr[5]|0,this.G=jr[6]|0,this.H=jr[7]|0}get(){const{A:e,B:n,C:i,D:o,E:a,F:l,G:c,H:d}=this;return[e,n,i,o,a,l,c,d]}set(e,n,i,o,a,l,c,d){this.A=e|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=c|0,this.H=d|0}process(e,n){for(let p=0;p<16;p++,n+=4)Nr[p]=e.getUint32(n,!1);for(let p=16;p<64;p++){const v=Nr[p-15],b=Nr[p-2],_=Kn(v,7)^Kn(v,18)^v>>>3,w=Kn(b,17)^Kn(b,19)^b>>>10;Nr[p]=w+Nr[p-7]+_+Nr[p-16]|0}let{A:i,B:o,C:a,D:l,E:c,F:d,G:f,H:h}=this;for(let p=0;p<64;p++){const v=Kn(c,6)^Kn(c,11)^Kn(c,25),b=h+v+E8(c,d,f)+C8[p]+Nr[p]|0,w=(Kn(i,2)^Kn(i,13)^Kn(i,22))+k8(i,o,a)|0;h=f,f=d,d=c,c=l+b|0,l=a,a=o,o=i,i=b+w|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,c=c+this.E|0,d=d+this.F|0,f=f+this.G|0,h=h+this.H|0,this.set(i,o,a,l,c,d,f,h)}roundClean(){Nr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class S8 extends n1{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Yn=Ri(()=>new n1);Ri(()=>new S8);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const r1=BigInt(0),fl=BigInt(1),T8=BigInt(2),hl=t=>t instanceof Uint8Array,A8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function is(t){if(!hl(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=A8[t[n]];return e}function i1(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function id(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function ss(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Qt(t){return id(is(t))}function sd(t){if(!hl(t))throw new Error("Uint8Array expected");return id(is(Uint8Array.from(t).reverse()))}function qr(t,e){return ss(t.toString(16).padStart(e*2,"0"))}function s1(t,e){return qr(t,e).reverse()}function I8(t){return ss(i1(t))}function Rt(t,e,n){let i;if(typeof e=="string")try{i=ss(e)}catch(a){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${a}`)}else if(hl(e))i=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${t} expected ${n} bytes, got ${o}`);return i}function ki(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!hl(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}function R8(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function O8(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function L8(t){let e;for(e=0;t>r1;t>>=fl,e+=1);return e}function P8(t,e){return t>>BigInt(e)&fl}const M8=(t,e,n)=>t|(n?fl:r1)<<BigInt(e),od=t=>(T8<<BigInt(t-1))-fl,Xc=t=>new Uint8Array(t),Zp=t=>Uint8Array.from(t);function o1(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Xc(t),o=Xc(t),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},c=(...p)=>n(o,i,...p),d=(p=Xc())=>{o=c(Zp([0]),p),i=c(),p.length!==0&&(o=c(Zp([1]),p),i=c())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let p=0;const v=[];for(;p<e;){i=c();const b=i.slice();v.push(b),p+=i.length}return ki(...v)};return(p,v)=>{l(),d(p);let b;for(;!(b=v(f()));)d();return l(),b}}const B8={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function fo(t,e,n={}){const i=(o,a,l)=>{const c=B8[a];if(typeof c!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=t[o];if(!(l&&d===void 0)&&!c(d,t))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(e))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return t}const j8=Object.freeze(Object.defineProperty({__proto__:null,bitGet:P8,bitLen:L8,bitMask:od,bitSet:M8,bytesToHex:is,bytesToNumberBE:Qt,bytesToNumberLE:sd,concatBytes:ki,createHmacDrbg:o1,ensureBytes:Rt,equalBytes:R8,hexToBytes:ss,hexToNumber:id,numberToBytesBE:qr,numberToBytesLE:s1,numberToHexUnpadded:i1,numberToVarBytesBE:I8,utf8ToBytes:O8,validateObject:fo},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),gt=BigInt(1),yi=BigInt(2),N8=BigInt(3),yu=BigInt(4),Kp=BigInt(5),Vp=BigInt(8);BigInt(9);BigInt(16);function Et(t,e){const n=t%e;return n>=kt?n:e+n}function D8(t,e,n){if(n<=kt||e<kt)throw new Error("Expected power/modulo > 0");if(n===gt)return kt;let i=gt;for(;e>kt;)e&gt&&(i=i*t%n),t=t*t%n,e>>=gt;return i}function bn(t,e,n){let i=t;for(;e-- >kt;)i*=i,i%=n;return i}function bu(t,e){if(t===kt||e<=kt)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=Et(t,e),i=e,o=kt,a=gt;for(;n!==kt;){const c=i/n,d=i%n,f=o-a*c;i=n,n=d,o=a,a=f}if(i!==gt)throw new Error("invert: does not exist");return Et(o,e)}function U8(t){const e=(t-gt)/yi;let n,i,o;for(n=t-gt,i=0;n%yi===kt;n/=yi,i++);for(o=yi;o<t&&D8(o,e,t)!==t-gt;o++);if(i===1){const l=(t+gt)/yu;return function(d,f){const h=d.pow(f,l);if(!d.eql(d.sqr(h),f))throw new Error("Cannot find square root");return h}}const a=(n+gt)/yi;return function(c,d){if(c.pow(d,e)===c.neg(c.ONE))throw new Error("Cannot find square root");let f=i,h=c.pow(c.mul(c.ONE,o),n),p=c.pow(d,a),v=c.pow(d,n);for(;!c.eql(v,c.ONE);){if(c.eql(v,c.ZERO))return c.ZERO;let b=1;for(let w=c.sqr(v);b<f&&!c.eql(w,c.ONE);b++)w=c.sqr(w);const _=c.pow(h,gt<<BigInt(f-b-1));h=c.sqr(_),p=c.mul(p,_),v=c.mul(v,h),f=b}return p}}function F8(t){if(t%yu===N8){const e=(t+gt)/yu;return function(i,o){const a=i.pow(o,e);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(t%Vp===Kp){const e=(t-Kp)/Vp;return function(i,o){const a=i.mul(o,yi),l=i.pow(a,e),c=i.mul(o,l),d=i.mul(i.mul(c,yi),l),f=i.mul(c,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return U8(t)}const z8=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function H8(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=z8.reduce((i,o)=>(i[o]="function",i),e);return fo(t,n)}function W8(t,e,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return t.ONE;if(n===gt)return e;let i=t.ONE,o=e;for(;n>kt;)n&gt&&(i=t.mul(i,o)),o=t.sqr(o),n>>=gt;return i}function q8(t,e){const n=new Array(e.length),i=e.reduce((a,l,c)=>t.is0(l)?a:(n[c]=a,t.mul(a,l)),t.ONE),o=t.inv(i);return e.reduceRight((a,l,c)=>t.is0(l)?a:(n[c]=t.mul(a,n[c]),t.mul(a,l)),o),n}function ad(t,e){const n=e!==void 0?e:t.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function Z8(t,e,n=!1,i={}){if(t<=kt)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:o,nByteLength:a}=ad(t,e);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=F8(t),c=Object.freeze({ORDER:t,BITS:o,BYTES:a,MASK:od(o),ZERO:kt,ONE:gt,create:d=>Et(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<t},is0:d=>d===kt,isOdd:d=>(d&gt)===gt,neg:d=>Et(-d,t),eql:(d,f)=>d===f,sqr:d=>Et(d*d,t),add:(d,f)=>Et(d+f,t),sub:(d,f)=>Et(d-f,t),mul:(d,f)=>Et(d*f,t),pow:(d,f)=>W8(c,d,f),div:(d,f)=>Et(d*bu(f,t),t),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>bu(d,t),sqrt:i.sqrt||(d=>l(c,d)),invertBatch:d=>q8(c,d),cmov:(d,f,h)=>h?f:d,toBytes:d=>n?s1(d,a):qr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?sd(d):Qt(d)}});return Object.freeze(c)}function K8(t,e,n=!1){t=Rt("privateHash",t);const i=t.length,o=ad(e).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?sd(t):Qt(t);return Et(a,e-gt)+gt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const V8=BigInt(0),eu=BigInt(1);function G8(t,e){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(e/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=t.ZERO,c=o;for(;a>V8;)a&eu&&(l=l.add(c)),c=c.double(),a>>=eu;return l},precomputeWindow(o,a){const{windows:l,windowSize:c}=i(a),d=[];let f=o,h=f;for(let p=0;p<l;p++){h=f,d.push(h);for(let v=1;v<c;v++)h=h.add(f),d.push(h);f=h.double()}return d},wNAF(o,a,l){const{windows:c,windowSize:d}=i(o);let f=t.ZERO,h=t.BASE;const p=BigInt(2**o-1),v=2**o,b=BigInt(o);for(let _=0;_<c;_++){const w=_*d;let x=Number(l&p);l>>=b,x>d&&(x-=v,l+=eu);const S=w,L=w+Math.abs(x)-1,C=_%2!==0,R=x<0;x===0?h=h.add(n(C,a[S])):f=f.add(n(R,a[L]))}return{p:f,f:h}},wNAFCached(o,a,l,c){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,c(f))),this.wNAF(d,f,l)}}}function a1(t){return H8(t.Fp),fo(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ad(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Q8(t){const e=a1(t);fo(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=e;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:Y8,hexToBytes:J8}=j8,_i={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=_i;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],i=t.subarray(2,n+2);if(!n||i.length!==n)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:Y8(i),l:t.subarray(n+2)}},toSig(t){const{Err:e}=_i,n=typeof t=="string"?J8(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==i-2)throw new e("Invalid signature: incorrect length");const{d:o,l:a}=_i._parseInt(n.subarray(2)),{d:l,l:c}=_i._parseInt(a);if(c.length)throw new e("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(t){const e=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const h=f.toString(16);return h.length&1?`0${h}`:h},i=e(n(t.s)),o=e(n(t.r)),a=i.length/2,l=o.length/2,c=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${c}${i}`}},_r=BigInt(0),_n=BigInt(1);BigInt(2);const Gp=BigInt(3);BigInt(4);function X8(t){const e=Q8(t),{Fp:n}=e,i=e.toBytes||((_,w,x)=>{const S=w.toAffine();return ki(Uint8Array.from([4]),n.toBytes(S.x),n.toBytes(S.y))}),o=e.fromBytes||(_=>{const w=_.subarray(1),x=n.fromBytes(w.subarray(0,n.BYTES)),S=n.fromBytes(w.subarray(n.BYTES,2*n.BYTES));return{x,y:S}});function a(_){const{a:w,b:x}=e,S=n.sqr(_),L=n.mul(S,_);return n.add(n.add(L,n.mul(_,w)),x)}if(!n.eql(n.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function l(_){return typeof _=="bigint"&&_r<_&&_<e.n}function c(_){if(!l(_))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(_){const{allowedPrivateKeyLengths:w,nByteLength:x,wrapPrivateKey:S,n:L}=e;if(w&&typeof _!="bigint"){if(_ instanceof Uint8Array&&(_=is(_)),typeof _!="string"||!w.includes(_.length))throw new Error("Invalid key");_=_.padStart(x*2,"0")}let C;try{C=typeof _=="bigint"?_:Qt(Rt("private key",_,x))}catch{throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof _}`)}return S&&(C=Et(C,L)),c(C),C}const f=new Map;function h(_){if(!(_ instanceof p))throw new Error("ProjectivePoint expected")}class p{constructor(w,x,S){if(this.px=w,this.py=x,this.pz=S,w==null||!n.isValid(w))throw new Error("x required");if(x==null||!n.isValid(x))throw new Error("y required");if(S==null||!n.isValid(S))throw new Error("z required")}static fromAffine(w){const{x,y:S}=w||{};if(!w||!n.isValid(x)||!n.isValid(S))throw new Error("invalid affine point");if(w instanceof p)throw new Error("projective point not allowed");const L=C=>n.eql(C,n.ZERO);return L(x)&&L(S)?p.ZERO:new p(x,S,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(w){const x=n.invertBatch(w.map(S=>S.pz));return w.map((S,L)=>S.toAffine(x[L])).map(p.fromAffine)}static fromHex(w){const x=p.fromAffine(o(Rt("pointHex",w)));return x.assertValidity(),x}static fromPrivateKey(w){return p.BASE.multiply(d(w))}_setWindowSize(w){this._WINDOW_SIZE=w,f.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:w,y:x}=this.toAffine();if(!n.isValid(w)||!n.isValid(x))throw new Error("bad point: x or y not FE");const S=n.sqr(x),L=a(w);if(!n.eql(S,L))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:w}=this.toAffine();if(n.isOdd)return!n.isOdd(w);throw new Error("Field doesn't support isOdd")}equals(w){h(w);const{px:x,py:S,pz:L}=this,{px:C,py:R,pz:O}=w,A=n.eql(n.mul(x,O),n.mul(C,L)),D=n.eql(n.mul(S,O),n.mul(R,L));return A&&D}negate(){return new p(this.px,n.neg(this.py),this.pz)}double(){const{a:w,b:x}=e,S=n.mul(x,Gp),{px:L,py:C,pz:R}=this;let O=n.ZERO,A=n.ZERO,D=n.ZERO,j=n.mul(L,L),W=n.mul(C,C),J=n.mul(R,R),te=n.mul(L,C);return te=n.add(te,te),D=n.mul(L,R),D=n.add(D,D),O=n.mul(w,D),A=n.mul(S,J),A=n.add(O,A),O=n.sub(W,A),A=n.add(W,A),A=n.mul(O,A),O=n.mul(te,O),D=n.mul(S,D),J=n.mul(w,J),te=n.sub(j,J),te=n.mul(w,te),te=n.add(te,D),D=n.add(j,j),j=n.add(D,j),j=n.add(j,J),j=n.mul(j,te),A=n.add(A,j),J=n.mul(C,R),J=n.add(J,J),j=n.mul(J,te),O=n.sub(O,j),D=n.mul(J,W),D=n.add(D,D),D=n.add(D,D),new p(O,A,D)}add(w){h(w);const{px:x,py:S,pz:L}=this,{px:C,py:R,pz:O}=w;let A=n.ZERO,D=n.ZERO,j=n.ZERO;const W=e.a,J=n.mul(e.b,Gp);let te=n.mul(x,C),ne=n.mul(S,R),se=n.mul(L,O),ee=n.add(x,S),N=n.add(C,R);ee=n.mul(ee,N),N=n.add(te,ne),ee=n.sub(ee,N),N=n.add(x,L);let q=n.add(C,O);return N=n.mul(N,q),q=n.add(te,se),N=n.sub(N,q),q=n.add(S,L),A=n.add(R,O),q=n.mul(q,A),A=n.add(ne,se),q=n.sub(q,A),j=n.mul(W,N),A=n.mul(J,se),j=n.add(A,j),A=n.sub(ne,j),j=n.add(ne,j),D=n.mul(A,j),ne=n.add(te,te),ne=n.add(ne,te),se=n.mul(W,se),N=n.mul(J,N),ne=n.add(ne,se),se=n.sub(te,se),se=n.mul(W,se),N=n.add(N,se),te=n.mul(ne,N),D=n.add(D,te),te=n.mul(q,N),A=n.mul(ee,A),A=n.sub(A,te),te=n.mul(ee,ne),j=n.mul(q,j),j=n.add(j,te),new p(A,D,j)}subtract(w){return this.add(w.negate())}is0(){return this.equals(p.ZERO)}wNAF(w){return b.wNAFCached(this,f,w,x=>{const S=n.invertBatch(x.map(L=>L.pz));return x.map((L,C)=>L.toAffine(S[C])).map(p.fromAffine)})}multiplyUnsafe(w){const x=p.ZERO;if(w===_r)return x;if(c(w),w===_n)return this;const{endo:S}=e;if(!S)return b.unsafeLadder(this,w);let{k1neg:L,k1:C,k2neg:R,k2:O}=S.splitScalar(w),A=x,D=x,j=this;for(;C>_r||O>_r;)C&_n&&(A=A.add(j)),O&_n&&(D=D.add(j)),j=j.double(),C>>=_n,O>>=_n;return L&&(A=A.negate()),R&&(D=D.negate()),D=new p(n.mul(D.px,S.beta),D.py,D.pz),A.add(D)}multiply(w){c(w);let x=w,S,L;const{endo:C}=e;if(C){const{k1neg:R,k1:O,k2neg:A,k2:D}=C.splitScalar(x);let{p:j,f:W}=this.wNAF(O),{p:J,f:te}=this.wNAF(D);j=b.constTimeNegate(R,j),J=b.constTimeNegate(A,J),J=new p(n.mul(J.px,C.beta),J.py,J.pz),S=j.add(J),L=W.add(te)}else{const{p:R,f:O}=this.wNAF(x);S=R,L=O}return p.normalizeZ([S,L])[0]}multiplyAndAddUnsafe(w,x,S){const L=p.BASE,C=(O,A)=>A===_r||A===_n||!O.equals(L)?O.multiplyUnsafe(A):O.multiply(A),R=C(this,x).add(C(w,S));return R.is0()?void 0:R}toAffine(w){const{px:x,py:S,pz:L}=this,C=this.is0();w==null&&(w=C?n.ONE:n.inv(L));const R=n.mul(x,w),O=n.mul(S,w),A=n.mul(L,w);if(C)return{x:n.ZERO,y:n.ZERO};if(!n.eql(A,n.ONE))throw new Error("invZ was invalid");return{x:R,y:O}}isTorsionFree(){const{h:w,isTorsionFree:x}=e;if(w===_n)return!0;if(x)return x(p,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:w,clearCofactor:x}=e;return w===_n?this:x?x(p,this):this.multiplyUnsafe(e.h)}toRawBytes(w=!0){return this.assertValidity(),i(p,this,w)}toHex(w=!0){return is(this.toRawBytes(w))}}p.BASE=new p(e.Gx,e.Gy,n.ONE),p.ZERO=new p(n.ZERO,n.ONE,n.ZERO);const v=e.nBitLength,b=G8(p,e.endo?Math.ceil(v/2):v);return{CURVE:e,ProjectivePoint:p,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function e7(t){const e=a1(t);return fo(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function t7(t){const e=e7(t),{Fp:n,n:i}=e,o=n.BYTES+1,a=2*n.BYTES+1;function l(N){return _r<N&&N<n.ORDER}function c(N){return Et(N,i)}function d(N){return bu(N,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:h,weierstrassEquation:p,isWithinCurveOrder:v}=X8({...e,toBytes(N,q,Y){const le=q.toAffine(),Q=n.toBytes(le.x),me=ki;return Y?me(Uint8Array.from([q.hasEvenY()?2:3]),Q):me(Uint8Array.from([4]),Q,n.toBytes(le.y))},fromBytes(N){const q=N.length,Y=N[0],le=N.subarray(1);if(q===o&&(Y===2||Y===3)){const Q=Qt(le);if(!l(Q))throw new Error("Point is not on curve");const me=p(Q);let ve=n.sqrt(me);const $e=(ve&_n)===_n;return(Y&1)===1!==$e&&(ve=n.neg(ve)),{x:Q,y:ve}}else if(q===a&&Y===4){const Q=n.fromBytes(le.subarray(0,n.BYTES)),me=n.fromBytes(le.subarray(n.BYTES,2*n.BYTES));return{x:Q,y:me}}else throw new Error(`Point of length ${q} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),b=N=>is(qr(N,e.nByteLength));function _(N){const q=i>>_n;return N>q}function w(N){return _(N)?c(-N):N}const x=(N,q,Y)=>Qt(N.slice(q,Y));class S{constructor(q,Y,le){this.r=q,this.s=Y,this.recovery=le,this.assertValidity()}static fromCompact(q){const Y=e.nByteLength;return q=Rt("compactSignature",q,Y*2),new S(x(q,0,Y),x(q,Y,2*Y))}static fromDER(q){const{r:Y,s:le}=_i.toSig(Rt("DER",q));return new S(Y,le)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(q){return new S(this.r,this.s,q)}recoverPublicKey(q){const{r:Y,s:le,recovery:Q}=this,me=D(Rt("msgHash",q));if(Q==null||![0,1,2,3].includes(Q))throw new Error("recovery id invalid");const ve=Q===2||Q===3?Y+e.n:Y;if(ve>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const $e=Q&1?"03":"02",Ye=f.fromHex($e+b(ve)),ue=d(ve),Se=c(-me*ue),Ee=c(le*ue),G=f.BASE.multiplyAndAddUnsafe(Ye,Se,Ee);if(!G)throw new Error("point at infinify");return G.assertValidity(),G}hasHighS(){return _(this.s)}normalizeS(){return this.hasHighS()?new S(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return ss(this.toDERHex())}toDERHex(){return _i.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ss(this.toCompactHex())}toCompactHex(){return b(this.r)+b(this.s)}}const L={isValidPrivateKey(N){try{return h(N),!0}catch{return!1}},normPrivateKeyToScalar:h,randomPrivateKey:()=>{const N=e.randomBytes(n.BYTES+8),q=K8(N,i);return qr(q,e.nByteLength)},precompute(N=8,q=f.BASE){return q._setWindowSize(N),q.multiply(BigInt(3)),q}};function C(N,q=!0){return f.fromPrivateKey(N).toRawBytes(q)}function R(N){const q=N instanceof Uint8Array,Y=typeof N=="string",le=(q||Y)&&N.length;return q?le===o||le===a:Y?le===2*o||le===2*a:N instanceof f}function O(N,q,Y=!0){if(R(N))throw new Error("first arg must be private key");if(!R(q))throw new Error("second arg must be public key");return f.fromHex(q).multiply(h(N)).toRawBytes(Y)}const A=e.bits2int||function(N){const q=Qt(N),Y=N.length*8-e.nBitLength;return Y>0?q>>BigInt(Y):q},D=e.bits2int_modN||function(N){return c(A(N))},j=od(e.nBitLength);function W(N){if(typeof N!="bigint")throw new Error("bigint expected");if(!(_r<=N&&N<j))throw new Error(`bigint expected < 2^${e.nBitLength}`);return qr(N,e.nByteLength)}function J(N,q,Y=te){if(["recovered","canonical"].some(ae=>ae in Y))throw new Error("sign() legacy options not supported");const{hash:le,randomBytes:Q}=e;let{lowS:me,prehash:ve,extraEntropy:$e}=Y;me==null&&(me=!0),N=Rt("msgHash",N),ve&&(N=Rt("prehashed msgHash",le(N)));const Ye=D(N),ue=h(q),Se=[W(ue),W(Ye)];if($e!=null){const ae=$e===!0?Q(n.BYTES):$e;Se.push(Rt("extraEntropy",ae,n.BYTES))}const Ee=ki(...Se),G=Ye;function re(ae){const Te=A(ae);if(!v(Te))return;const Ke=d(Te),oe=f.BASE.multiply(Te).toAffine(),Z=c(oe.x);if(Z===_r)return;const qe=c(Ke*c(G+Z*ue));if(qe===_r)return;let xt=(oe.x===Z?0:2)|Number(oe.y&_n),zn=qe;return me&&_(qe)&&(zn=w(qe),xt^=1),new S(Z,zn,xt)}return{seed:Ee,k2sig:re}}const te={lowS:e.lowS,prehash:!1},ne={lowS:e.lowS,prehash:!1};function se(N,q,Y=te){const{seed:le,k2sig:Q}=J(N,q,Y),me=e;return o1(me.hash.outputLen,me.nByteLength,me.hmac)(le,Q)}f.BASE._setWindowSize(8);function ee(N,q,Y,le=ne){const Q=N;if(q=Rt("msgHash",q),Y=Rt("publicKey",Y),"strict"in le)throw new Error("options.strict was renamed to lowS");const{lowS:me,prehash:ve}=le;let $e,Ye;try{if(typeof Q=="string"||Q instanceof Uint8Array)try{$e=S.fromDER(Q)}catch(oe){if(!(oe instanceof _i.Err))throw oe;$e=S.fromCompact(Q)}else if(typeof Q=="object"&&typeof Q.r=="bigint"&&typeof Q.s=="bigint"){const{r:oe,s:Z}=Q;$e=new S(oe,Z)}else throw new Error("PARSE");Ye=f.fromHex(Y)}catch(oe){if(oe.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(me&&$e.hasHighS())return!1;ve&&(q=e.hash(q));const{r:ue,s:Se}=$e,Ee=D(q),G=d(Se),re=c(Ee*G),ae=c(ue*G),Te=f.BASE.multiplyAndAddUnsafe(Ye,re,ae)?.toAffine();return Te?c(Te.x)===ue:!1}return{CURVE:e,getPublicKey:C,getSharedSecret:O,sign:se,verify:ee,ProjectivePoint:f,Signature:S,utils:L}}class l1 extends t1{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,an.hash(e);const i=qs(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?e.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=e.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(e){return an.exists(this),this.iHash.update(e),this}digestInto(e){an.exists(this),an.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:c}=this;return e=e,e.finished=o,e.destroyed=a,e.blockLen=l,e.outputLen=c,e.oHash=n._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Zs=(t,e,n)=>new l1(t,e).update(n).digest();Zs.create=(t,e)=>new l1(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function n7(t){return{hash:t,hmac:(e,...n)=>Zs(t,e,Xi(...n)),randomBytes:uo}}function r7(t,e){const n=i=>t7({...t,...n7(i)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ba=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),c1=BigInt(1),ja=BigInt(2),Qp=(t,e)=>(t+e/ja)/e;function u1(t){const e=pl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),c=BigInt(44),d=BigInt(88),f=t*t*t%e,h=f*f*t%e,p=bn(h,n,e)*h%e,v=bn(p,n,e)*h%e,b=bn(v,ja,e)*f%e,_=bn(b,o,e)*b%e,w=bn(_,a,e)*_%e,x=bn(w,c,e)*w%e,S=bn(x,d,e)*x%e,L=bn(S,c,e)*w%e,C=bn(L,n,e)*h%e,R=bn(C,l,e)*_%e,O=bn(R,i,e)*f%e,A=bn(O,ja,e);if(!_u.eql(_u.sqr(A),t))throw new Error("Cannot find square root");return A}const _u=Z8(pl,void 0,void 0,{sqrt:u1}),Ut=r7({a:BigInt(0),b:BigInt(7),Fp:_u,n:Ba,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Ba,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-c1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),c=Qp(a*t,e),d=Qp(-i*t,e);let f=Et(t-c*n-d*o,e),h=Et(-c*i-d*a,e);const p=f>l,v=h>l;if(p&&(f=e-f),v&&(h=e-h),f>l||h>l)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:p,k1:f,k2neg:v,k2:h}}}},Yn),gl=BigInt(0),d1=t=>typeof t=="bigint"&&gl<t&&t<pl,i7=t=>typeof t=="bigint"&&gl<t&&t<Ba,Yp={};function Na(t,...e){let n=Yp[t];if(n===void 0){const i=Yn(Uint8Array.from(t,o=>o.charCodeAt(0)));n=ki(i,i),Yp[t]=n}return Yn(ki(n,...e))}const ld=t=>t.toRawBytes(!0).slice(1),wu=t=>qr(t,32),tu=t=>Et(t,pl),Ks=t=>Et(t,Ba),cd=Ut.ProjectivePoint,s7=(t,e,n)=>cd.BASE.multiplyAndAddUnsafe(t,e,n);function xu(t){let e=Ut.utils.normPrivateKeyToScalar(t),n=cd.fromPrivateKey(e);return{scalar:n.hasEvenY()?e:Ks(-e),bytes:ld(n)}}function f1(t){if(!d1(t))throw new Error("bad x: need 0 < x < p");const e=tu(t*t),n=tu(e*t+BigInt(7));let i=u1(n);i%ja!==gl&&(i=tu(-i));const o=new cd(t,i,c1);return o.assertValidity(),o}function h1(...t){return Ks(Qt(Na("BIP0340/challenge",...t)))}function o7(t){return xu(t).bytes}function a7(t,e,n=uo(32)){const i=Rt("message",t),{bytes:o,scalar:a}=xu(e),l=Rt("auxRand",n,32),c=wu(a^Qt(Na("BIP0340/aux",l))),d=Na("BIP0340/nonce",c,o,i),f=Ks(Qt(d));if(f===gl)throw new Error("sign failed: k is zero");const{bytes:h,scalar:p}=xu(f),v=h1(h,o,i),b=new Uint8Array(64);if(b.set(h,0),b.set(wu(Ks(p+v*a)),32),!p1(b,i,o))throw new Error("sign: Invalid signature produced");return b}function p1(t,e,n){const i=Rt("signature",t,64),o=Rt("message",e),a=Rt("publicKey",n,32);try{const l=f1(Qt(a)),c=Qt(i.subarray(0,32));if(!d1(c))return!1;const d=Qt(i.subarray(32,64));if(!i7(d))return!1;const f=h1(wu(c),ld(l),o),h=s7(l,d,Ks(-f));return!(!h||!h.hasEvenY()||h.toAffine().x!==c)}catch{return!1}}const ho=(()=>({getPublicKey:o7,sign:a7,verify:p1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:f1,pointToBytes:ld,numberToBytesBE:qr,bytesToNumberBE:Qt,taggedHash:Na,mod:Et}}))();/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Oi(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Fn(...t){const e=(o,a)=>l=>o(a(l)),n=Array.from(t).reverse().reduce((o,a)=>o?e(o,a.encode):a.encode,void 0),i=t.reduce((o,a)=>o?e(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function rr(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(Oi(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=t.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return i})}}}function ir(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function po(t,e="="){if(Oi(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===e;i--)if(!((i-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function g1(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Jp(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let i=0;const o=[],a=Array.from(t);for(a.forEach(l=>{if(Oi(l),l<0||l>=e)throw new Error(`Wrong integer: ${l}`)});;){let l=0,c=!0;for(let d=i;d<a.length;d++){const f=a[d],h=e*l+f;if(!Number.isSafeInteger(h)||e*l/e!==l||h-f!==e*l)throw new Error("convertRadix: carry overflow");if(l=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==h)throw new Error("convertRadix: carry overflow");if(c)a[d]?c=!1:i=d;else continue}if(o.push(l),c)break}for(let l=0;l<t.length-1&&t[l]===0;l++)o.push(0);return o.reverse()}const v1=(t,e)=>e?v1(e,t%e):t,Da=(t,e)=>t+(e-v1(t,e));function $u(t,e,n,i){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Da(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Da(e,n)}`);let o=0,a=0;const l=2**n-1,c=[];for(const d of t){if(Oi(d),d>=2**e)throw new Error(`convertRadix2: invalid data word=${d} from=${e}`);if(o=o<<e|d,a+e>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${e}`);for(a+=e;a>=n;a-=n)c.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=e)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&c.push(o>>>0),c}function m1(t){return Oi(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Jp(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Jp(e,t,2**8))}}}function Cr(t,e=!1){if(Oi(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(Da(8,t)>32||Da(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return $u(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from($u(n,t,8,e))}}}function Xp(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function y1(t,e){if(Oi(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-t),o=e(i).slice(0,t),a=n.slice(-t);for(let l=0;l<t;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const ga={alphabet:rr,chain:Fn,checksum:y1,radix:m1,radix2:Cr,join:ir,padding:po},l7=Fn(Cr(4),rr("0123456789ABCDEF"),ir("")),c7=Fn(Cr(5),rr("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),po(5),ir(""));Fn(Cr(5),rr("0123456789ABCDEFGHIJKLMNOPQRSTUV"),po(5),ir(""));Fn(Cr(5),rr("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),ir(""),g1(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const Er=Fn(Cr(6),rr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),po(6),ir("")),u7=Fn(Cr(6),rr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),po(6),ir("")),ud=t=>Fn(m1(58),rr(t),ir("")),Ua=ud("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");ud("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");ud("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const eg=[0,2,3,5,6,7,9,10,11],d7={encode(t){let e="";for(let n=0;n<t.length;n+=8){const i=t.subarray(n,n+8);e+=Ua.encode(i).padStart(eg[i.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const i=t.slice(n,n+11),o=eg.indexOf(i.length),a=Ua.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(e)}},f7=t=>Fn(y1(4,e=>t(t(e))),Ua),Eu=Fn(rr("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),ir("")),tg=[996825010,642813549,513874426,1027748829,705979059];function zs(t){const e=t>>25;let n=(t&33554431)<<5;for(let i=0;i<tg.length;i++)(e>>i&1)===1&&(n^=tg[i]);return n}function ng(t,e,n=1){const i=t.length;let o=1;for(let a=0;a<i;a++){const l=t.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${t})`);o=zs(o)^l>>5}o=zs(o);for(let a=0;a<i;a++)o=zs(o)^t.charCodeAt(a)&31;for(let a of e)o=zs(o)^a;for(let a=0;a<6;a++)o=zs(o);return o^=n,Eu.encode($u([o%2**30],30,5,!1))}function b1(t){const e=t==="bech32"?1:734539939,n=Cr(5),i=n.decode,o=n.encode,a=Xp(i);function l(h,p,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(p)||p.length&&typeof p[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof p}`);const b=h.length+7+p.length;if(v!==!1&&b>v)throw new TypeError(`Length ${b} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${Eu.encode(p)}${ng(h,p,e)}`}function c(h,p=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||p!==!1&&h.length>p)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${p})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const b=h.lastIndexOf("1");if(b===0||b===-1)throw new Error('Letter "1" must be present between prefix and data only');const _=h.slice(0,b),w=h.slice(b+1);if(w.length<6)throw new Error("Data must be at least 6 characters long");const x=Eu.decode(w).slice(0,-6),S=ng(_,x,e);if(!w.endsWith(S))throw new Error(`Invalid checksum in ${h}: expected "${S}"`);return{prefix:_,words:x}}const d=Xp(c);function f(h){const{prefix:p,words:v}=c(h,!1);return{prefix:p,words:v,bytes:i(v)}}return{encode:l,decode:c,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const os=b1("bech32");b1("bech32m");const h7={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},p7=Fn(Cr(4),rr("0123456789abcdef"),ir(""),g1(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),g7={utf8:h7,hex:p7,base16:l7,base32:c7,base64:Er,base64url:u7,base58:Ua,base58xmr:d7};`${Object.keys(g7).join(", ")}`;const _1=`abandon
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
`);function v7(t,e,n,i){an.hash(t);const o=x8({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:c}=o;if(an.number(a),an.number(l),an.number(c),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=qs(e),f=qs(n),h=new Uint8Array(l),p=Zs.create(t,d),v=p._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:c,DK:h,PRF:p,PRFSalt:v}}function m7(t,e,n,i,o){return t.destroy(),e.destroy(),i&&i.destroy(),o.fill(0),n}function y7(t,e,n,i){const{c:o,dkLen:a,DK:l,PRF:c,PRFSalt:d}=v7(t,e,n,i);let f;const h=new Uint8Array(4),p=xi(h),v=new Uint8Array(c.outputLen);for(let b=1,_=0;_<a;b++,_+=c.outputLen){const w=l.subarray(_,_+c.outputLen);p.setInt32(0,b,!1),(f=d._cloneInto(f)).update(h).digestInto(v),w.set(v.subarray(0,w.length));for(let x=1;x<o;x++){c._cloneInto(f).update(v).digestInto(v);for(let S=0;S<w.length;S++)w[S]^=v[S]}}return m7(c,d,l,f,v)}const va=BigInt(2**32-1),ku=BigInt(32);function w1(t,e=!1){return e?{h:Number(t&va),l:Number(t>>ku&va)}:{h:Number(t>>ku&va)|0,l:Number(t&va)|0}}function b7(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:a,l}=w1(t[o],e);[n[o],i[o]]=[a,l]}return[n,i]}const _7=(t,e)=>BigInt(t>>>0)<<ku|BigInt(e>>>0),w7=(t,e,n)=>t>>>n,x7=(t,e,n)=>t<<32-n|e>>>n,$7=(t,e,n)=>t>>>n|e<<32-n,E7=(t,e,n)=>t<<32-n|e>>>n,k7=(t,e,n)=>t<<64-n|e>>>n-32,C7=(t,e,n)=>t>>>n-32|e<<64-n,S7=(t,e)=>e,T7=(t,e)=>t,A7=(t,e,n)=>t<<n|e>>>32-n,I7=(t,e,n)=>e<<n|t>>>32-n,R7=(t,e,n)=>e<<n-32|t>>>64-n,O7=(t,e,n)=>t<<n-32|e>>>64-n;function L7(t,e,n,i){const o=(e>>>0)+(i>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const P7=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),M7=(t,e,n,i)=>e+n+i+(t/2**32|0)|0,B7=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0),j7=(t,e,n,i,o)=>e+n+i+o+(t/2**32|0)|0,N7=(t,e,n,i,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(o>>>0),D7=(t,e,n,i,o,a)=>e+n+i+o+a+(t/2**32|0)|0,je={fromBig:w1,split:b7,toBig:_7,shrSH:w7,shrSL:x7,rotrSH:$7,rotrSL:E7,rotrBH:k7,rotrBL:C7,rotr32H:S7,rotr32L:T7,rotlSH:A7,rotlSL:I7,rotlBH:R7,rotlBL:O7,add:L7,add3L:P7,add3H:M7,add4L:B7,add4H:j7,add5H:D7,add5L:N7},[U7,F7]=je.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Dr=new Uint32Array(80),Ur=new Uint32Array(80);class vl extends rd{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:c,Dl:d,Eh:f,El:h,Fh:p,Fl:v,Gh:b,Gl:_,Hh:w,Hl:x}=this;return[e,n,i,o,a,l,c,d,f,h,p,v,b,_,w,x]}set(e,n,i,o,a,l,c,d,f,h,p,v,b,_,w,x){this.Ah=e|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=c|0,this.Dl=d|0,this.Eh=f|0,this.El=h|0,this.Fh=p|0,this.Fl=v|0,this.Gh=b|0,this.Gl=_|0,this.Hh=w|0,this.Hl=x|0}process(e,n){for(let C=0;C<16;C++,n+=4)Dr[C]=e.getUint32(n),Ur[C]=e.getUint32(n+=4);for(let C=16;C<80;C++){const R=Dr[C-15]|0,O=Ur[C-15]|0,A=je.rotrSH(R,O,1)^je.rotrSH(R,O,8)^je.shrSH(R,O,7),D=je.rotrSL(R,O,1)^je.rotrSL(R,O,8)^je.shrSL(R,O,7),j=Dr[C-2]|0,W=Ur[C-2]|0,J=je.rotrSH(j,W,19)^je.rotrBH(j,W,61)^je.shrSH(j,W,6),te=je.rotrSL(j,W,19)^je.rotrBL(j,W,61)^je.shrSL(j,W,6),ne=je.add4L(D,te,Ur[C-7],Ur[C-16]),se=je.add4H(ne,A,J,Dr[C-7],Dr[C-16]);Dr[C]=se|0,Ur[C]=ne|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:c,Cl:d,Dh:f,Dl:h,Eh:p,El:v,Fh:b,Fl:_,Gh:w,Gl:x,Hh:S,Hl:L}=this;for(let C=0;C<80;C++){const R=je.rotrSH(p,v,14)^je.rotrSH(p,v,18)^je.rotrBH(p,v,41),O=je.rotrSL(p,v,14)^je.rotrSL(p,v,18)^je.rotrBL(p,v,41),A=p&b^~p&w,D=v&_^~v&x,j=je.add5L(L,O,D,F7[C],Ur[C]),W=je.add5H(j,S,R,A,U7[C],Dr[C]),J=j|0,te=je.rotrSH(i,o,28)^je.rotrBH(i,o,34)^je.rotrBH(i,o,39),ne=je.rotrSL(i,o,28)^je.rotrBL(i,o,34)^je.rotrBL(i,o,39),se=i&a^i&c^a&c,ee=o&l^o&d^l&d;S=w|0,L=x|0,w=b|0,x=_|0,b=p|0,_=v|0,{h:p,l:v}=je.add(f|0,h|0,W|0,J|0),f=c|0,h=d|0,c=a|0,d=l|0,a=i|0,l=o|0;const N=je.add3L(J,ne,ee);i=je.add3H(N,W,te,se),o=N|0}({h:i,l:o}=je.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=je.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:c,l:d}=je.add(this.Ch|0,this.Cl|0,c|0,d|0),{h:f,l:h}=je.add(this.Dh|0,this.Dl|0,f|0,h|0),{h:p,l:v}=je.add(this.Eh|0,this.El|0,p|0,v|0),{h:b,l:_}=je.add(this.Fh|0,this.Fl|0,b|0,_|0),{h:w,l:x}=je.add(this.Gh|0,this.Gl|0,w|0,x|0),{h:S,l:L}=je.add(this.Hh|0,this.Hl|0,S|0,L|0),this.set(i,o,a,l,c,d,f,h,p,v,b,_,w,x,S,L)}roundClean(){Dr.fill(0),Ur.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class z7 extends vl{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class H7 extends vl{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class W7 extends vl{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const Cu=Ri(()=>new vl);Ri(()=>new z7);Ri(()=>new H7);Ri(()=>new W7);const q7=t=>t[0]==="あいこくしん";function x1(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function $1(t){const e=x1(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function E1(t){an.bytes(t,16,20,24,28,32)}function Z7(t,e=128){if(an.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return G7(uo(e/8),t)}const K7=t=>{const e=8-t.length/4;return new Uint8Array([Yn(t)[0]>>e<<e])};function k1(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),ga.chain(ga.checksum(1,K7),ga.radix2(11,!0),ga.alphabet(t))}function V7(t,e){const{words:n}=$1(t),i=k1(e).decode(n);return E1(i),i}function G7(t,e){return E1(t),k1(e).encode(t).join(q7(e)?"　":" ")}function Q7(t,e){try{V7(t,e)}catch{return!1}return!0}const Y7=t=>x1(`mnemonic${t}`);function J7(t,e=""){return y7(Cu,$1(t).nfkd,Y7(e),{c:2048,dkLen:64})}const X7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),C1=Uint8Array.from({length:16},(t,e)=>e),eE=C1.map(t=>(9*t+5)%16);let dd=[C1],fd=[eE];for(let t=0;t<4;t++)for(let e of[dd,fd])e.push(e[t].map(n=>X7[n]));const S1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),tE=dd.map((t,e)=>t.map(n=>S1[e][n])),nE=fd.map((t,e)=>t.map(n=>S1[e][n])),rE=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),iE=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ma=(t,e)=>t<<e|t>>>32-e;function rg(t,e,n,i){return t===0?e^n^i:t===1?e&n|~e&i:t===2?(e|~n)^i:t===3?e&i|n&~i:e^(n|~i)}const ya=new Uint32Array(16);class sE extends rd{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:i,h3:o,h4:a}=this;return[e,n,i,o,a]}set(e,n,i,o,a){this.h0=e|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(e,n){for(let b=0;b<16;b++,n+=4)ya[b]=e.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,c=this.h2|0,d=c,f=this.h3|0,h=f,p=this.h4|0,v=p;for(let b=0;b<5;b++){const _=4-b,w=rE[b],x=iE[b],S=dd[b],L=fd[b],C=tE[b],R=nE[b];for(let O=0;O<16;O++){const A=ma(i+rg(b,a,c,f)+ya[S[O]]+w,C[O])+p|0;i=p,p=f,f=ma(c,10)|0,c=a,a=A}for(let O=0;O<16;O++){const A=ma(o+rg(_,l,d,h)+ya[L[O]]+x,R[O])+v|0;o=v,v=h,h=ma(d,10)|0,d=l,l=A}}this.set(this.h1+c+h|0,this.h2+f+v|0,this.h3+p+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ya.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const oE=Ri(()=>new sE),ba=Ut.ProjectivePoint,nu=f7(Yn);function ig(t){return BigInt(`0x${on(t)}`)}function aE(t){return rs(t.toString(16).padStart(64,"0"))}const lE=e1("Bitcoin seed"),ru={private:76066276,public:76067358},iu=2147483648,cE=t=>oE(Yn(t)),uE=t=>xi(t).getUint32(0,!1),_a=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return xi(e).setUint32(0,t,!1),e};class bi{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return uE(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return nu.encode(this.serialize(this.versions.private,Xi(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return nu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=ru){if(mi(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Zs(Cu,lE,e);return new bi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(e,n=ru){const i=nu.decode(e),o=xi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},c=i.slice(45),d=c[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new bi({...l,privateKey:c.slice(1)}):new bi({...l,publicKey:c})}static fromJSON(e){return bi.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||ru,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Ut.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:ig(e.privateKey),this.privKeyBytes=aE(this.privKey),this.pubKey=Ut.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=ba.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=cE(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=iu)throw new Error("Invalid index");a[2]==="'"&&(l+=iu),i=i.deriveChild(l)}return i}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=_a(e);if(e>=iu){const c=this.privateKey;if(!c)throw new Error("Could not derive hardened child key");n=Xi(new Uint8Array([0]),c,n)}else n=Xi(this.pubKey,n);const i=Zs(Cu,this.chainCode,n),o=ig(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const c=Et(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(c))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=c}else{const c=ba.fromHex(this.pubKey).add(ba.fromPrivateKey(o));if(c.equals(ba.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=c.toRawBytes(!0)}return new bi(l)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return mi(e,32),Ut.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(mi(e,32),mi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return mi(n,33),Xi(_a(e),new Uint8Array([this.depth]),_a(this.parentFingerprint),_a(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const dE=t=>t instanceof Uint8Array,Vn=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),fE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!fE)throw new Error("Non little-endian hardware is not supported");function hd(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Su(t){if(typeof t=="string"&&(t=hd(t)),!dE(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}const hE=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function pE(t,e){if(e!==void 0&&(typeof e!="object"||!hE(e)))throw new Error("options must be object or undefined");return Object.assign(t,e)}function gE(t,e){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof e=="number"&&t.length!==e)throw new Error(`Uint8Array length ${e} expected`)}function Tu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function vE(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function T1(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function mE(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");Tu(t.outputLen),Tu(t.blockLen)}function yE(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function bE(t,e){T1(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const sn={number:Tu,bool:vE,bytes:T1,hash:mE,exists:yE,output:bE},At=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class _E{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=Su(e),gE(e,32);const n=At(e,0),i=At(e,2),o=At(e,4),a=At(e,6),l=At(e,8),c=At(e,10),d=At(e,12),f=At(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|i<<3)&8191,this.r[2]=(i>>>10|o<<6)&7939,this.r[3]=(o>>>7|a<<9)&8191,this.r[4]=(a>>>4|l<<12)&255,this.r[5]=l>>>1&8190,this.r[6]=(l>>>14|c<<2)&8191,this.r[7]=(c>>>11|d<<5)&8065,this.r[8]=(d>>>8|f<<8)&8191,this.r[9]=f>>>5&127;for(let h=0;h<8;h++)this.pad[h]=At(e,16+2*h)}process(e,n,i=!1){const o=i?0:2048,{h:a,r:l}=this,c=l[0],d=l[1],f=l[2],h=l[3],p=l[4],v=l[5],b=l[6],_=l[7],w=l[8],x=l[9],S=At(e,n+0),L=At(e,n+2),C=At(e,n+4),R=At(e,n+6),O=At(e,n+8),A=At(e,n+10),D=At(e,n+12),j=At(e,n+14);let W=a[0]+(S&8191),J=a[1]+((S>>>13|L<<3)&8191),te=a[2]+((L>>>10|C<<6)&8191),ne=a[3]+((C>>>7|R<<9)&8191),se=a[4]+((R>>>4|O<<12)&8191),ee=a[5]+(O>>>1&8191),N=a[6]+((O>>>14|A<<2)&8191),q=a[7]+((A>>>11|D<<5)&8191),Y=a[8]+((D>>>8|j<<8)&8191),le=a[9]+(j>>>5|o),Q=0,me=Q+W*c+J*(5*x)+te*(5*w)+ne*(5*_)+se*(5*b);Q=me>>>13,me&=8191,me+=ee*(5*v)+N*(5*p)+q*(5*h)+Y*(5*f)+le*(5*d),Q+=me>>>13,me&=8191;let ve=Q+W*d+J*c+te*(5*x)+ne*(5*w)+se*(5*_);Q=ve>>>13,ve&=8191,ve+=ee*(5*b)+N*(5*v)+q*(5*p)+Y*(5*h)+le*(5*f),Q+=ve>>>13,ve&=8191;let $e=Q+W*f+J*d+te*c+ne*(5*x)+se*(5*w);Q=$e>>>13,$e&=8191,$e+=ee*(5*_)+N*(5*b)+q*(5*v)+Y*(5*p)+le*(5*h),Q+=$e>>>13,$e&=8191;let Ye=Q+W*h+J*f+te*d+ne*c+se*(5*x);Q=Ye>>>13,Ye&=8191,Ye+=ee*(5*w)+N*(5*_)+q*(5*b)+Y*(5*v)+le*(5*p),Q+=Ye>>>13,Ye&=8191;let ue=Q+W*p+J*h+te*f+ne*d+se*c;Q=ue>>>13,ue&=8191,ue+=ee*(5*x)+N*(5*w)+q*(5*_)+Y*(5*b)+le*(5*v),Q+=ue>>>13,ue&=8191;let Se=Q+W*v+J*p+te*h+ne*f+se*d;Q=Se>>>13,Se&=8191,Se+=ee*c+N*(5*x)+q*(5*w)+Y*(5*_)+le*(5*b),Q+=Se>>>13,Se&=8191;let Ee=Q+W*b+J*v+te*p+ne*h+se*f;Q=Ee>>>13,Ee&=8191,Ee+=ee*d+N*c+q*(5*x)+Y*(5*w)+le*(5*_),Q+=Ee>>>13,Ee&=8191;let G=Q+W*_+J*b+te*v+ne*p+se*h;Q=G>>>13,G&=8191,G+=ee*f+N*d+q*c+Y*(5*x)+le*(5*w),Q+=G>>>13,G&=8191;let re=Q+W*w+J*_+te*b+ne*v+se*p;Q=re>>>13,re&=8191,re+=ee*h+N*f+q*d+Y*c+le*(5*x),Q+=re>>>13,re&=8191;let ae=Q+W*x+J*w+te*_+ne*b+se*v;Q=ae>>>13,ae&=8191,ae+=ee*p+N*h+q*f+Y*d+le*c,Q+=ae>>>13,ae&=8191,Q=(Q<<2)+Q|0,Q=Q+me|0,me=Q&8191,Q=Q>>>13,ve+=Q,a[0]=me,a[1]=ve,a[2]=$e,a[3]=Ye,a[4]=ue,a[5]=Se,a[6]=Ee,a[7]=G,a[8]=re,a[9]=ae}finalize(){const{h:e,pad:n}=this,i=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let c=2;c<10;c++)e[c]+=o,o=e[c]>>>13,e[c]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,i[0]=e[0]+5,o=i[0]>>>13,i[0]&=8191;for(let c=1;c<10;c++)i[c]=e[c]+o,o=i[c]>>>13,i[c]&=8191;i[9]-=8192;let a=(o^1)-1;for(let c=0;c<10;c++)i[c]&=a;a=~a;for(let c=0;c<10;c++)e[c]=e[c]&a|i[c];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let l=e[0]+n[0];e[0]=l&65535;for(let c=1;c<8;c++)l=(e[c]+n[c]|0)+(l>>>16)|0,e[c]=l&65535}update(e){sn.exists(this);const{buffer:n,blockLen:i}=this;e=Su(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){for(;i<=o-a;a+=i)this.process(e,a);continue}n.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){sn.exists(this),sn.output(e,this),this.finished=!0;const{buffer:n,h:i}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let a=0;for(let l=0;l<8;l++)e[a++]=i[l]>>>0,e[a++]=i[l]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}}function wE(t){const e=(i,o)=>t(o).update(Su(i)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=i=>t(i),e}wE(t=>new _E(t));const xE=hd("expand 16-byte k"),$E=hd("expand 32-byte k"),EE=Vn(xE),kE=Vn($E),sg=t=>!(t.byteOffset%4),CE=t=>{const{core:e,rounds:n,counterRight:i,counterLen:o,allow128bitKeys:a,extendNonceFn:l,blockLen:c}=pE({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},t);sn.number(o),sn.number(n),sn.number(c),sn.bool(i),sn.bool(a);const d=c/4;if(c%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(f,h,p,v,b=0)=>{if(sn.bytes(f),sn.bytes(h),sn.bytes(p),v||(v=new Uint8Array(p.length)),sn.bytes(v),sn.number(b),b<0||b>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(v.length<p.length)throw new Error(`Salsa/ChaCha: output (${v.length}) is shorter than data (${p.length})`);const _=[];let w,x;if(f.length===32)w=f,x=kE;else if(f.length===16&&a)w=new Uint8Array(32),w.set(f),w.set(f,16),x=EE,_.push(w);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${f.length}`);if(l){if(h.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");w=l(x,w,h.subarray(0,16),new Uint8Array(32)),_.push(w),h=h.subarray(16)}const S=16-o;if(h.length!==S)throw new Error(`Salsa/ChaCha: nonce must be ${S} or 16 bytes`);if(S!==12){const W=new Uint8Array(12);W.set(h,i?0:12-h.length),_.push(h=W)}const L=new Uint8Array(c),C=Vn(L),R=Vn(w),O=Vn(h),A=sg(p)&&Vn(p),D=sg(v)&&Vn(v);_.push(C);const j=p.length;for(let W=0,J=b;W<j;J++){if(e(x,R,O,C,J,n),J>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const te=Math.min(c,j-W);if(te===c&&D&&A){const ne=W/4;if(W%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let se=0;se<d;se++)D[ne+se]=A[ne+se]^C[se];W+=c;continue}for(let ne=0;ne<te;ne++)v[W+ne]=p[W+ne]^L[ne];W+=te}for(let W=0;W<_.length;W++)_[W].fill(0);return v}},he=(t,e)=>t<<e|t>>>32-e;function SE(t,e,n,i,o,a=20){let l=t[0],c=t[1],d=t[2],f=t[3],h=e[0],p=e[1],v=e[2],b=e[3],_=e[4],w=e[5],x=e[6],S=e[7],L=o,C=n[0],R=n[1],O=n[2],A=l,D=c,j=d,W=f,J=h,te=p,ne=v,se=b,ee=_,N=w,q=x,Y=S,le=L,Q=C,me=R,ve=O;for(let Ye=0;Ye<a;Ye+=2)A=A+J|0,le=he(le^A,16),ee=ee+le|0,J=he(J^ee,12),A=A+J|0,le=he(le^A,8),ee=ee+le|0,J=he(J^ee,7),D=D+te|0,Q=he(Q^D,16),N=N+Q|0,te=he(te^N,12),D=D+te|0,Q=he(Q^D,8),N=N+Q|0,te=he(te^N,7),j=j+ne|0,me=he(me^j,16),q=q+me|0,ne=he(ne^q,12),j=j+ne|0,me=he(me^j,8),q=q+me|0,ne=he(ne^q,7),W=W+se|0,ve=he(ve^W,16),Y=Y+ve|0,se=he(se^Y,12),W=W+se|0,ve=he(ve^W,8),Y=Y+ve|0,se=he(se^Y,7),A=A+te|0,ve=he(ve^A,16),q=q+ve|0,te=he(te^q,12),A=A+te|0,ve=he(ve^A,8),q=q+ve|0,te=he(te^q,7),D=D+ne|0,le=he(le^D,16),Y=Y+le|0,ne=he(ne^Y,12),D=D+ne|0,le=he(le^D,8),Y=Y+le|0,ne=he(ne^Y,7),j=j+se|0,Q=he(Q^j,16),ee=ee+Q|0,se=he(se^ee,12),j=j+se|0,Q=he(Q^j,8),ee=ee+Q|0,se=he(se^ee,7),W=W+J|0,me=he(me^W,16),N=N+me|0,J=he(J^N,12),W=W+J|0,me=he(me^W,8),N=N+me|0,J=he(J^N,7);let $e=0;i[$e++]=l+A|0,i[$e++]=c+D|0,i[$e++]=d+j|0,i[$e++]=f+W|0,i[$e++]=h+J|0,i[$e++]=p+te|0,i[$e++]=v+ne|0,i[$e++]=b+se|0,i[$e++]=_+ee|0,i[$e++]=w+N|0,i[$e++]=x+q|0,i[$e++]=S+Y|0,i[$e++]=L+le|0,i[$e++]=C+Q|0,i[$e++]=R+me|0,i[$e++]=O+ve|0}function TE(t,e,n,i){const o=Vn(e),a=Vn(n),l=Vn(i);let c=t[0],d=t[1],f=t[2],h=t[3],p=o[0],v=o[1],b=o[2],_=o[3],w=o[4],x=o[5],S=o[6],L=o[7],C=a[0],R=a[1],O=a[2],A=a[3];for(let D=0;D<20;D+=2)c=c+p|0,C=he(C^c,16),w=w+C|0,p=he(p^w,12),c=c+p|0,C=he(C^c,8),w=w+C|0,p=he(p^w,7),d=d+v|0,R=he(R^d,16),x=x+R|0,v=he(v^x,12),d=d+v|0,R=he(R^d,8),x=x+R|0,v=he(v^x,7),f=f+b|0,O=he(O^f,16),S=S+O|0,b=he(b^S,12),f=f+b|0,O=he(O^f,8),S=S+O|0,b=he(b^S,7),h=h+_|0,A=he(A^h,16),L=L+A|0,_=he(_^L,12),h=h+_|0,A=he(A^h,8),L=L+A|0,_=he(_^L,7),c=c+v|0,A=he(A^c,16),S=S+A|0,v=he(v^S,12),c=c+v|0,A=he(A^c,8),S=S+A|0,v=he(v^S,7),d=d+b|0,C=he(C^d,16),L=L+C|0,b=he(b^L,12),d=d+b|0,C=he(C^d,8),L=L+C|0,b=he(b^L,7),f=f+_|0,R=he(R^f,16),w=w+R|0,_=he(_^w,12),f=f+_|0,R=he(R^f,8),w=w+R|0,_=he(_^w,7),h=h+p|0,O=he(O^h,16),x=x+O|0,p=he(p^x,12),h=h+p|0,O=he(O^h,8),x=x+O|0,p=he(p^x,7);return l[0]=c,l[1]=d,l[2]=f,l[3]=h,l[4]=C,l[5]=R,l[6]=O,l[7]=A,i}const A1=CE({core:SE,counterRight:!1,counterLen:8,extendNonceFn:TE,allow128bitKeys:!1});var AE=Object.defineProperty,yt=(t,e)=>{for(var n in e)AE(t,n,{get:e[n],enumerable:!0})};function I1(t){return on(ho.getPublicKey(t))}var pd={};yt(pd,{MessageNode:()=>R1,MessageQueue:()=>O1,insertEventIntoAscendingList:()=>RE,insertEventIntoDescendingList:()=>IE,normalizeURL:()=>Au,utf8Decoder:()=>Gn,utf8Encoder:()=>wn});var Gn=new TextDecoder("utf-8"),wn=new TextEncoder;function Au(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function IE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at<t[i].created_at)a=i+1;else if(e.created_at>=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}function RE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at>t[i].created_at)a=i+1;else if(e.created_at<=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}var R1=class{_value;_next;get value(){return this._value}set value(t){this._value=t}get next(){return this._next}set next(t){this._next=t}constructor(t){this._value=t,this._next=null}},O1=class{_first;_last;get first(){return this._first}set first(t){this._first=t}get last(){return this._last}set last(t){this._last=t}_size;get size(){return this._size}set size(t){this._size=t}constructor(){this._first=null,this._last=null,this._size=0}enqueue(t){const e=new R1(t);return this._size===0||!this._last?(this._first=e,this._last=e):(this._last.next=e,this._last=e),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let t=this._first;return this._first=t.next,t.next=null,this._size--,t.value}},Yi=Symbol("verified"),lt=(t=>(t[t.Metadata=0]="Metadata",t[t.Text=1]="Text",t[t.RecommendRelay=2]="RecommendRelay",t[t.Contacts=3]="Contacts",t[t.EncryptedDirectMessage=4]="EncryptedDirectMessage",t[t.EventDeletion=5]="EventDeletion",t[t.Repost=6]="Repost",t[t.Reaction=7]="Reaction",t[t.BadgeAward=8]="BadgeAward",t[t.ChannelCreation=40]="ChannelCreation",t[t.ChannelMetadata=41]="ChannelMetadata",t[t.ChannelMessage=42]="ChannelMessage",t[t.ChannelHideMessage=43]="ChannelHideMessage",t[t.ChannelMuteUser=44]="ChannelMuteUser",t[t.Blank=255]="Blank",t[t.Report=1984]="Report",t[t.ZapRequest=9734]="ZapRequest",t[t.Zap=9735]="Zap",t[t.RelayList=10002]="RelayList",t[t.ClientAuth=22242]="ClientAuth",t[t.NwcRequest=23194]="NwcRequest",t[t.HttpAuth=27235]="HttpAuth",t[t.ProfileBadge=30008]="ProfileBadge",t[t.BadgeDefinition=30009]="BadgeDefinition",t[t.Article=30023]="Article",t[t.FileMetadata=1063]="FileMetadata",t))(lt||{});function OE(t=255){return{kind:t,content:"",tags:[],created_at:0}}function Xr(t,e){const n=t;return n.pubkey=I1(e),n.id=go(n),n.sig=ME(n,e),n[Yi]=!0,n}function LE(t){if(!gd(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function go(t){let e=Yn(wn.encode(LE(t)));return on(e)}var PE=t=>t instanceof Object;function gd(t){if(!PE(t)||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function vo(t){if(typeof t[Yi]=="boolean")return t[Yi];const e=go(t);if(e!==t.id)return t[Yi]=!1;try{return t[Yi]=ho.verify(t.sig,e,t.pubkey)}catch{return t[Yi]=!1}}function ME(t,e){return on(ho.sign(go(t),e))}function BE(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1&&!t.ids.some(n=>e.id.startsWith(n))||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1&&!t.authors.some(n=>e.pubkey.startsWith(n)))return!1;for(let n in t)if(n[0]==="#"){let i=n.slice(1),o=t[`#${i}`];if(o&&!e.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>t.until)}function L1(t,e){for(let n=0;n<t.length;n++)if(BE(t[n],e))return!0;return!1}function jE(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];Object.entries(i).forEach(([o,a])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){e[o]=e[o]||[];for(let l=0;l<a.length;l++){let c=a[l];e[o].includes(c)||e[o].push(c)}}}),i.limit&&(!e.limit||i.limit>e.limit)&&(e.limit=i.limit),i.until&&(!e.until||i.until>e.until)&&(e.until=i.until),i.since&&(!e.since||i.since<e.since)&&(e.since=i.since)}return e}var NE={};yt(NE,{getHex64:()=>ml,getInt:()=>P1,getSubscriptionId:()=>M1,matchEventId:()=>DE,matchEventKind:()=>FE,matchEventPubkey:()=>UE});function ml(t,e){let n=e.length+3,i=t.indexOf(`"${e}":`)+n,o=t.slice(i).indexOf('"')+i+1;return t.slice(o,o+64)}function P1(t,e){let n=e.length,i=t.indexOf(`"${e}":`)+n+3,o=t.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function M1(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let i=e+7+1+n,o=t.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return t.slice(i+1,a)}function DE(t,e){return e===ml(t,"id")}function UE(t,e){return e===ml(t,"pubkey")}function FE(t,e){return e===P1(t,"kind")}var og=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function zE(t,e={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=e;var a,l={},c=og(),d={},f={},h;async function p(){return h||(h=new Promise((S,L)=>{try{a=new WebSocket(t)}catch(A){L(A)}a.onopen=()=>{c.connect.forEach(A=>A()),S()},a.onerror=()=>{h=void 0,c.error.forEach(A=>A()),L()},a.onclose=async()=>{h=void 0,c.disconnect.forEach(A=>A())};let C=new O1,R;a.onmessage=A=>{C.enqueue(A.data),R||(R=setInterval(O,0))};function O(){if(C.size===0){clearInterval(R),R=null;return}var A=C.dequeue();if(!A)return;let D=M1(A);if(D){let j=l[D];if(j&&j.alreadyHaveEvent&&j.alreadyHaveEvent(ml(A,"id"),t))return}try{let j=JSON.parse(A);switch(j[0]){case"EVENT":{let ne=j[1],se=j[2];gd(se)&&l[ne]&&(l[ne].skipVerification||vo(se))&&L1(l[ne].filters,se)&&(l[ne],(d[ne]?.event||[]).forEach(ee=>ee(se)));return}case"COUNT":let W=j[1],J=j[2];l[W]&&(d[W]?.count||[]).forEach(ne=>ne(J));return;case"EOSE":{let ne=j[1];ne in d&&(d[ne].eose.forEach(se=>se()),d[ne].eose=[]);return}case"OK":{let ne=j[1],se=j[2],ee=j[3]||"";if(ne in f){let{resolve:N,reject:q}=f[ne];se?N(null):q(new Error(ee))}return}case"NOTICE":let te=j[1];c.notice.forEach(ne=>ne(te));return;case"AUTH":{let ne=j[1];c.auth?.forEach(se=>se(ne));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function b(){v()||await p()}async function _(S){let L=JSON.stringify(S);if(!(!v()&&(await new Promise(C=>setTimeout(C,1e3)),!v())))try{a.send(L)}catch(C){console.log(C)}}const w=(S,{verb:L="REQ",skipVerification:C=!1,alreadyHaveEvent:R=null,id:O=Math.random().toString().slice(2)}={})=>{let A=O;l[A]={id:A,filters:S,skipVerification:C,alreadyHaveEvent:R},_([L,A,...S]);let D={sub:(j,W={})=>w(j||S,{skipVerification:W.skipVerification||C,alreadyHaveEvent:W.alreadyHaveEvent||R,id:A}),unsub:()=>{delete l[A],delete d[A],_(["CLOSE",A])},on:(j,W)=>{d[A]=d[A]||{event:[],count:[],eose:[]},d[A][j].push(W)},off:(j,W)=>{let J=d[A],te=J[j].indexOf(W);te>=0&&J[j].splice(te,1)},get events(){return B1(D)}};return D};function x(S,L){return new Promise((C,R)=>{if(!S.id){R(new Error(`event ${S} has no id`));return}let O=S.id;_([L,S]),f[O]={resolve:C,reject:R}})}return{url:t,sub:w,on:(S,L)=>{c[S].push(L),S==="connect"&&a?.readyState===1&&L()},off:(S,L)=>{let C=c[S].indexOf(L);C!==-1&&c[S].splice(C,1)},list:(S,L)=>new Promise(C=>{let R=w(S,L),O=[],A=setTimeout(()=>{R.unsub(),C(O)},n);R.on("eose",()=>{R.unsub(),clearTimeout(A),C(O)}),R.on("event",D=>{O.push(D)})}),get:(S,L)=>new Promise(C=>{let R=w([S],L),O=setTimeout(()=>{R.unsub(),C(null)},i);R.on("event",A=>{R.unsub(),clearTimeout(O),C(A)})}),count:S=>new Promise(L=>{let C=w(S,{...w,verb:"COUNT"}),R=setTimeout(()=>{C.unsub(),L(null)},o);C.on("count",O=>{C.unsub(),clearTimeout(R),L(O)})}),async publish(S){await x(S,"EVENT")},async auth(S){await x(S,"AUTH")},connect:b,close(){c=og(),d={},f={},a?.readyState===WebSocket.OPEN&&a.close()},get status(){return a?.readyState??3}}}async function*B1(t){let e;const n=[],i=o=>{e?(e(o),e=void 0):n.push(o)};t.on("event",i);try{for(;;)n.length>0?yield n.shift():yield await new Promise(a=>{e=a})}finally{t.off("event",i)}}var HE=class{_conn;_seenOn={};batchedByKey={};eoseSubTimeout;getTimeout;seenOnEnabled=!0;batchInterval=100;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400,this.seenOnEnabled=t.seenOnEnabled!==!1,this.batchInterval=t.batchInterval||100}close(t){t.forEach(e=>{let n=this._conn[Au(e)];n&&n.close()})}async ensureRelay(t){const e=Au(t);this._conn[e]||(this._conn[e]=zE(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[e];return await n.connect(),n}sub(t,e,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,b)=>{if(n?.alreadyHaveEvent?.(v,b))return!0;if(this.seenOnEnabled){let _=this._seenOn[v]||new Set;_.add(b),this._seenOn[v]=_}return i.has(v)};let a=[],l=new Set,c=new Set,d=t.length,f=!1,h=setTimeout(()=>{f=!0;for(let v of c.values())v()},n?.eoseSubTimeout||this.eoseSubTimeout);t.filter((v,b,_)=>_.indexOf(v)===b).forEach(async v=>{let b;try{b=await this.ensureRelay(v)}catch{w();return}if(!b)return;let _=b.sub(e,o);_.on("event",x=>{i.add(x.id);for(let S of l.values())S(x)}),_.on("eose",()=>{f||w()}),a.push(_);function w(){if(d--,d===0){clearTimeout(h);for(let x of c.values())x()}}});let p={sub(v,b){return a.forEach(_=>_.sub(v,b)),p},unsub(){a.forEach(v=>v.unsub())},on(v,b){v==="event"?l.add(b):v==="eose"&&c.add(b)},off(v,b){v==="event"?l.delete(b):v==="eose"&&c.delete(b)},get events(){return B1(p)}};return p}get(t,e,n){return new Promise(i=>{let o=this.sub(t,[e],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(t,e,n){return new Promise(i=>{let o=[],a=this.sub(t,e,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}batchedList(t,e,n){return new Promise(i=>{this.batchedByKey[t]?this.batchedByKey[t].push({filters:n,relays:e,resolve:i,events:[]}):(this.batchedByKey[t]=[{filters:n,relays:e,resolve:i,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const a=this.batchedByKey[o],l=[],c=[];a.forEach(f=>{l.push(...f.filters),c.push(...f.relays)});const d=this.sub(c,[jE(...l)]);d.on("event",f=>{a.forEach(h=>L1(h.filters,f)&&h.events.push(f))}),d.on("eose",()=>{d.unsub(),a.forEach(f=>f.resolve(f.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(t,e){return t.map(async n=>(await this.ensureRelay(n)).publish(e))}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}},mo={};yt(mo,{BECH32_REGEX:()=>N1,decode:()=>yl,naddrEncode:()=>QE,neventEncode:()=>GE,noteEncode:()=>KE,nprofileEncode:()=>VE,npubEncode:()=>ZE,nrelayEncode:()=>YE,nsecEncode:()=>qE});var j1=5e3,N1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function WE(t){const e=new Uint8Array(4);return e[0]=t>>24&255,e[1]=t>>16&255,e[2]=t>>8&255,e[3]=t&255,e}function yl(t){let{prefix:e,words:n}=os.decode(t,j1),i=new Uint8Array(os.fromWords(n));switch(e){case"nprofile":{let o=wa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:on(o[0][0]),relays:o[1]?o[1].map(a=>Gn.decode(a)):[]}}}case"nevent":{let o=wa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(o[3]&&o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:on(o[0][0]),relays:o[1]?o[1].map(a=>Gn.decode(a)):[],author:o[2]?.[0]?on(o[2][0]):void 0,kind:o[3]?.[0]?parseInt(on(o[3][0]),16):void 0}}}case"naddr":{let o=wa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Gn.decode(o[0][0]),pubkey:on(o[2][0]),kind:parseInt(on(o[3][0]),16),relays:o[1]?o[1].map(a=>Gn.decode(a)):[]}}}case"nrelay":{let o=wa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Gn.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:e,data:on(i)};default:throw new Error(`unknown prefix ${e}`)}}function wa(t){let e={},n=t;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);e[i]=e[i]||[],e[i].push(a)}return e}function qE(t){return vd("nsec",t)}function ZE(t){return vd("npub",t)}function KE(t){return vd("note",t)}function yo(t,e){let n=os.toWords(e);return os.encode(t,n,j1)}function vd(t,e){let n=rs(e);return yo(t,n)}function VE(t){let e=bl({0:[rs(t.pubkey)],1:(t.relays||[]).map(n=>wn.encode(n))});return yo("nprofile",e)}function GE(t){let e;t.kind!=null&&(e=WE(t.kind));let n=bl({0:[rs(t.id)],1:(t.relays||[]).map(i=>wn.encode(i)),2:t.author?[rs(t.author)]:[],3:e?[new Uint8Array(e)]:[]});return yo("nevent",n)}function QE(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=bl({0:[wn.encode(t.identifier)],1:(t.relays||[]).map(i=>wn.encode(i)),2:[rs(t.pubkey)],3:[new Uint8Array(e)]});return yo("naddr",n)}function YE(t){let e=bl({0:[wn.encode(t)]});return yo("nrelay",e)}function bl(t){let e=[];return Object.entries(t).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),e.push(a)})}),Xi(...e)}var JE={};yt(JE,{decrypt:()=>XE,encrypt:()=>D1});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function D1(t,e,n){const i=Ut.getSharedSecret(t,"02"+e),o=U1(i);let a=Uint8Array.from(uo(16)),l=wn.encode(n),c=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},c,l),f=Er.encode(new Uint8Array(d)),h=Er.encode(new Uint8Array(a.buffer));return`${f}?iv=${h}`}async function XE(t,e,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(t,"02"+e),l=U1(a),c=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=Er.decode(i),f=Er.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},c,d);return Gn.decode(h)}function U1(t){return t.slice(1,33)}var F1={};yt(F1,{NIP05_REGEX:()=>z1,queryProfile:()=>n9,searchDomain:()=>t9,useFetchImplementation:()=>e9});var z1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,_l;try{_l=fetch}catch{}function e9(t){_l=t}async function t9(t,e=""){try{return(await(await _l(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function n9(t){const e=t.match(z1);if(!e)return null;const[n,i="_",o]=e;try{const a=await _l(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:c}=r9(await a.json()),d=l[i];return d?{pubkey:d,relays:c?.[d]}:null}catch{return null}}function r9(t){const e={names:{}};for(const[n,i]of Object.entries(t.names))typeof n=="string"&&typeof i=="string"&&(e.names[n]=i);if(t.relays){e.relays={};for(const[n,i]of Object.entries(t.relays))typeof n=="string"&&Array.isArray(i)&&(e.relays[n]=i.filter(o=>typeof o=="string"))}return e}var i9={};yt(i9,{generateSeedWords:()=>o9,privateKeyFromSeedWords:()=>s9,validateWords:()=>a9});function s9(t,e){let i=bi.fromMasterSeed(J7(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return on(i)}function o9(){return Z7(_1)}function a9(t){return Q7(t,_1)}var l9={};yt(l9,{parse:()=>c9});function c9(t){const e={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of t.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&e.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,c,d]=o,f={id:l,relays:c?[c]:[]},h=i===0,p=i===n.length-1;if(d==="root"){e.root=f;continue}if(d==="reply"){e.reply=f;continue}if(d==="mention"){e.mentions.push(f);continue}if(h){e.root=f;continue}if(p){e.reply=f;continue}e.mentions.push(f)}return e}var u9={};yt(u9,{getPow:()=>H1,minePow:()=>d9});function H1(t){let e=0;for(let n=0;n<t.length;n++){const i=parseInt(t[n],16);if(i===0)e+=4;else{e+=Math.clz32(i)-28;break}}return e}function d9(t,e){let n=0;const i=t,o=["nonce",n.toString(),e.toString()];for(i.tags.push(o);;){const a=Math.floor(new Date().getTime()/1e3);if(a!==i.created_at&&(n=0,i.created_at=a),o[1]=(++n).toString(),i.id=go(i),H1(i.id)>=e)break}return i}var f9={};yt(f9,{finishRepostEvent:()=>h9,getRepostedEvent:()=>p9,getRepostedEventPointer:()=>W1});function h9(t,e,n,i){return Xr({kind:6,tags:[...t.tags??[],["e",e.id,n],["p",e.pubkey]],content:t.content===""?"":JSON.stringify(e),created_at:t.created_at},i)}function W1(t){if(t.kind!==6)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(e!==void 0)return{id:e[1],relays:[e[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function p9(t,{skipVerification:e}={}){const n=W1(t);if(n===void 0||t.content==="")return;let i;try{i=JSON.parse(t.content)}catch{return}if(i.id===n.id&&!(!e&&!vo(i)))return i}var g9={};yt(g9,{NOSTR_URI_REGEX:()=>wl,parse:()=>m9,test:()=>v9});var wl=new RegExp(`nostr:(${N1.source})`);function v9(t){return typeof t=="string"&&new RegExp(`^${wl.source}$`).test(t)}function m9(t){const e=t.match(new RegExp(`^${wl.source}$`));if(!e)throw new Error(`Invalid Nostr URI: ${t}`);return{uri:e[0],value:e[1],decoded:yl(e[1])}}var y9={};yt(y9,{finishReactionEvent:()=>b9,getReactedEventPointer:()=>_9});function b9(t,e,n){const i=e.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Xr({...t,kind:7,tags:[...t.tags??[],...i,["e",e.id],["p",e.pubkey]],content:t.content??"+"},n)}function _9(t){if(t.kind!==7)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(e===void 0||n===void 0))return{id:e[1],relays:[e[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var w9={};yt(w9,{createDelegation:()=>x9,getDelegator:()=>$9});function x9(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Yn(wn.encode(`nostr:delegation:${e.pubkey}:${i}`)),a=on(ho.sign(o,t));return{from:I1(t),to:e.pubkey,cond:i,sig:a}}function $9(t){let e=t.tags.find(c=>c[0]==="delegation"&&c.length>=4);if(!e)return null;let n=e[1],i=e[2],o=e[3],a=i.split("&");for(let c=0;c<a.length;c++){let[d,f,h]=a[c].split(/\b/);if(!(d==="kind"&&f==="="&&t.kind===parseInt(h))){if(d==="created_at"&&f==="<"&&t.created_at<parseInt(h))continue;if(d==="created_at"&&f===">"&&t.created_at>parseInt(h))continue;return null}}let l=Yn(wn.encode(`nostr:delegation:${t.pubkey}:${i}`));return ho.verify(o,l,n)?n:null}var E9={};yt(E9,{matchAll:()=>k9,regex:()=>md,replaceAll:()=>C9});var md=()=>new RegExp(`\\b${wl.source}\\b`,"g");function*k9(t){const e=t.matchAll(md());for(const n of e)try{const[i,o]=n;yield{uri:i,value:o,decoded:yl(o),start:n.index,end:n.index+i.length}}catch{}}function C9(t,e){return t.replaceAll(md(),(n,i)=>e({uri:n,value:i,decoded:yl(i)}))}var S9={};yt(S9,{channelCreateEvent:()=>T9,channelHideMessageEvent:()=>R9,channelMessageEvent:()=>I9,channelMetadataEvent:()=>A9,channelMuteUserEvent:()=>O9});var T9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Xr({kind:40,tags:[...t.tags??[]],content:n,created_at:t.created_at},e)},A9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Xr({kind:41,tags:[["e",t.channel_create_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},I9=(t,e)=>{const n=[["e",t.channel_create_event_id,t.relay_url,"root"]];return t.reply_to_channel_message_event_id&&n.push(["e",t.reply_to_channel_message_event_id,t.relay_url,"reply"]),Xr({kind:42,tags:[...n,...t.tags??[]],content:t.content,created_at:t.created_at},e)},R9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Xr({kind:43,tags:[["e",t.channel_message_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},O9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Xr({kind:44,tags:[["p",t.pubkey_to_mute],...t.tags??[]],content:n,created_at:t.created_at},e)},L9={};yt(L9,{useFetchImplementation:()=>P9,validateGithub:()=>M9});var yd;try{yd=fetch}catch{}function P9(t){yd=t}async function M9(t,e,n){try{return await(await yd(`https://gist.github.com/${e}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${t}`}catch{return!1}}var B9={};yt(B9,{authenticate:()=>j9});var j9=async({challenge:t,relay:e,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",e.url],["challenge",t]],content:""};return e.auth(await n(i))},N9={};yt(N9,{decrypt:()=>F9,encrypt:()=>U9,getSharedSecret:()=>D9});var D9=(t,e)=>Yn(Ut.getSharedSecret(t,"02"+e).subarray(1,33));function U9(t,e,n=1){if(n!==1)throw new Error("NIP44: unknown encryption version");const i=uo(24),o=wn.encode(e),a=A1(t,i,o),l=new Uint8Array(25+a.length);return l.set([n],0),l.set(i,1),l.set(a,25),Er.encode(l)}function F9(t,e){let n=Er.decode(e);if(n[0]!==1)throw new Error(`NIP44: unknown encryption version: ${n[0]}`);const i=n.slice(1,25),o=n.slice(25),a=A1(t,i,o);return Gn.decode(a)}var z9={};yt(z9,{makeNwcRequestEvent:()=>W9,parseConnectionString:()=>H9});function H9(t){const{pathname:e,searchParams:n}=new URL(t),i=e,o=n.get("relay"),a=n.get("secret");if(!i||!o||!a)throw new Error("invalid connection string");return{pubkey:i,relay:o,secret:a}}async function W9({pubkey:t,secret:e,invoice:n}){const o=await D1(e,t,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),a={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t]]};return Xr(a,e)}var q9={};yt(q9,{getZapEndpoint:()=>K9,makeZapReceipt:()=>Q9,makeZapRequest:()=>V9,useFetchImplementation:()=>Z9,validateZapRequest:()=>G9});var bd;try{bd=fetch}catch{}function Z9(t){bd=t}async function K9(t){try{let e="",{lud06:n,lud16:i}=JSON.parse(t.content);if(n){let{words:l}=os.decode(n,1e3),c=os.fromWords(l);e=Gn.decode(c)}else if(i){let[l,c]=i.split("@");e=`https://${c}/.well-known/lnurlp/${l}`}else return null;let a=await(await bd(e)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function V9({profile:t,event:e,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...i]]};return e&&a.tags.push(["e",e]),a}function G9(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!gd(e))return"Zap request is not a valid Nostr event.";if(!vo(e))return"Invalid signature on zap request.";let n=e.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=e.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function Q9({zapRequest:t,preimage:e,bolt11:n,paidAt:i}){let a=JSON.parse(t).tags.filter(([c])=>c==="e"||c==="p"||c==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",t]]};return e&&l.tags.push(["preimage",e]),l}var Y9={};yt(Y9,{getToken:()=>J9,unpackEventFromToken:()=>Z1,validateEvent:()=>K1,validateToken:()=>X9});var q1="Nostr ";async function J9(t,e,n,i=!1){if(!t||!e)throw new Error("Missing loginUrl or httpMethod");const o=OE(27235);o.tags=[["u",t],["method",e]],o.created_at=Math.round(new Date().getTime()/1e3);const a=await n(o);return(i?q1:"")+Er.encode(wn.encode(JSON.stringify(a)))}async function X9(t,e,n){const i=await Z1(t).catch(a=>{throw a});return await K1(i,e,n).catch(a=>{throw a})}async function Z1(t){if(!t)throw new Error("Missing token");t=t.replace(q1,"");const e=Gn.decode(Er.decode(t));if(!e||e.length===0||!e.startsWith("{"))throw new Error("Invalid token");return JSON.parse(e)}async function K1(t,e,n){if(!t)throw new Error("Invalid nostr event");if(!vo(t))throw new Error("Invalid nostr event, signature invalid");if(t.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!t.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-t.created_at>60)throw new Error("Invalid nostr event, expired");const i=t.tags.find(a=>a[0]==="u");if(i?.length!==1&&i?.[1]!==e)throw new Error("Invalid nostr event, url tag invalid");const o=t.tags.find(a=>a[0]==="method");if(o?.length!==1&&o?.[1].toLowerCase()!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const ek=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),V1=(t={})=>(()=>{const e=ek();return it(e,t,!0,!0),e})(),tk=B('<button class="text-blue-500 underline">'),{noteEncode:nk,neventEncode:rk}=mo,ik=t=>{try{return nk(t)}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},sk=t=>{try{return rk({id:t})}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},Vs=t=>(()=>{const e=tk();return k(e,E(pe,{get when(){return t.kind==null||t.kind===lt.Text},get fallback(){return sk(t.eventId)},get children(){return ik(t.eventId)}})),e})();var Fa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Fa.exports;(function(t,e){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",p=1,v=2,b=4,_=1,w=2,x=1,S=2,L=4,C=8,R=16,O=32,A=64,D=128,j=256,W=512,J=30,te="...",ne=800,se=16,ee=1,N=2,q=3,Y=1/0,le=9007199254740991,Q=17976931348623157e292,me=0/0,ve=4294967295,$e=ve-1,Ye=ve>>>1,ue=[["ary",D],["bind",x],["bindKey",S],["curry",C],["curryRight",R],["flip",W],["partial",O],["partialRight",A],["rearg",j]],Se="[object Arguments]",Ee="[object Array]",G="[object AsyncFunction]",re="[object Boolean]",ae="[object Date]",Te="[object DOMException]",Ke="[object Error]",oe="[object Function]",Z="[object GeneratorFunction]",qe="[object Map]",xt="[object Number]",zn="[object Null]",Bt="[object Object]",xn="[object Promise]",ri="[object Proxy]",$n="[object RegExp]",Ct="[object Set]",Yt="[object String]",Hn="[object Symbol]",Sr="[object Undefined]",En="[object WeakMap]",Ae="[object WeakSet]",Ht="[object ArrayBuffer]",Wt="[object DataView]",kn="[object Float32Array]",Cn="[object Float64Array]",cn="[object Int8Array]",un="[object Int16Array]",Sn="[object Int32Array]",ar="[object Uint8Array]",lr="[object Uint8ClampedArray]",cr="[object Uint16Array]",Pi="[object Uint32Array]",Eo=/\b__p \+= '';/g,ko=/\b(__p \+=) '' \+/g,Co=/(__e\(.*?\)|\b__t\)) \+\n'';/g,rf=/&(?:amp|lt|gt|quot|#39);/g,sf=/[&<>"']/g,Gm=RegExp(rf.source),Qm=RegExp(sf.source),Ym=/<%-([\s\S]+?)%>/g,Jm=/<%([\s\S]+?)%>/g,of=/<%=([\s\S]+?)%>/g,Xm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,e2=/^\w*$/,t2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,n2=RegExp(Nl.source),Dl=/^\s+/,r2=/\s/,i2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,s2=/\{\n\/\* \[wrapped with (.+)\] \*/,o2=/,? & /,a2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,l2=/[()=,{}\[\]\/\s]/,c2=/\\(\\)?/g,u2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,af=/\w*$/,d2=/^[-+]0x[0-9a-f]+$/i,f2=/^0b[01]+$/i,h2=/^\[object .+?Constructor\]$/,p2=/^0o[0-7]+$/i,g2=/^(?:0|[1-9]\d*)$/,v2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,So=/($^)/,m2=/['\n\r\u2028\u2029\\]/g,To="\\ud800-\\udfff",y2="\\u0300-\\u036f",b2="\\ufe20-\\ufe2f",_2="\\u20d0-\\u20ff",lf=y2+b2+_2,cf="\\u2700-\\u27bf",uf="a-z\\xdf-\\xf6\\xf8-\\xff",w2="\\xac\\xb1\\xd7\\xf7",x2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",$2="\\u2000-\\u206f",E2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",df="A-Z\\xc0-\\xd6\\xd8-\\xde",ff="\\ufe0e\\ufe0f",hf=w2+x2+$2+E2,Ul="['’]",k2="["+To+"]",pf="["+hf+"]",Ao="["+lf+"]",gf="\\d+",C2="["+cf+"]",vf="["+uf+"]",mf="[^"+To+hf+gf+cf+uf+df+"]",Fl="\\ud83c[\\udffb-\\udfff]",S2="(?:"+Ao+"|"+Fl+")",yf="[^"+To+"]",zl="(?:\\ud83c[\\udde6-\\uddff]){2}",Hl="[\\ud800-\\udbff][\\udc00-\\udfff]",Mi="["+df+"]",bf="\\u200d",_f="(?:"+vf+"|"+mf+")",T2="(?:"+Mi+"|"+mf+")",wf="(?:"+Ul+"(?:d|ll|m|re|s|t|ve))?",xf="(?:"+Ul+"(?:D|LL|M|RE|S|T|VE))?",$f=S2+"?",Ef="["+ff+"]?",A2="(?:"+bf+"(?:"+[yf,zl,Hl].join("|")+")"+Ef+$f+")*",I2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",R2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kf=Ef+$f+A2,O2="(?:"+[C2,zl,Hl].join("|")+")"+kf,L2="(?:"+[yf+Ao+"?",Ao,zl,Hl,k2].join("|")+")",P2=RegExp(Ul,"g"),M2=RegExp(Ao,"g"),Wl=RegExp(Fl+"(?="+Fl+")|"+L2+kf,"g"),B2=RegExp([Mi+"?"+vf+"+"+wf+"(?="+[pf,Mi,"$"].join("|")+")",T2+"+"+xf+"(?="+[pf,Mi+_f,"$"].join("|")+")",Mi+"?"+_f+"+"+wf,Mi+"+"+xf,R2,I2,gf,O2].join("|"),"g"),j2=RegExp("["+bf+To+lf+ff+"]"),N2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,D2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],U2=-1,st={};st[kn]=st[Cn]=st[cn]=st[un]=st[Sn]=st[ar]=st[lr]=st[cr]=st[Pi]=!0,st[Se]=st[Ee]=st[Ht]=st[re]=st[Wt]=st[ae]=st[Ke]=st[oe]=st[qe]=st[xt]=st[Bt]=st[$n]=st[Ct]=st[Yt]=st[En]=!1;var nt={};nt[Se]=nt[Ee]=nt[Ht]=nt[Wt]=nt[re]=nt[ae]=nt[kn]=nt[Cn]=nt[cn]=nt[un]=nt[Sn]=nt[qe]=nt[xt]=nt[Bt]=nt[$n]=nt[Ct]=nt[Yt]=nt[Hn]=nt[ar]=nt[lr]=nt[cr]=nt[Pi]=!0,nt[Ke]=nt[oe]=nt[En]=!1;var F2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},z2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},H2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},W2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},q2=parseFloat,Z2=parseInt,Cf=typeof wt=="object"&&wt&&wt.Object===Object&&wt,K2=typeof self=="object"&&self&&self.Object===Object&&self,St=Cf||K2||Function("return this")(),ql=e&&!e.nodeType&&e,ii=ql&&!0&&t&&!t.nodeType&&t,Sf=ii&&ii.exports===ql,Zl=Sf&&Cf.process,dn=function(){try{var P=ii&&ii.require&&ii.require("util").types;return P||Zl&&Zl.binding&&Zl.binding("util")}catch{}}(),Tf=dn&&dn.isArrayBuffer,Af=dn&&dn.isDate,If=dn&&dn.isMap,Rf=dn&&dn.isRegExp,Of=dn&&dn.isSet,Lf=dn&&dn.isTypedArray;function Jt(P,F,U){switch(U.length){case 0:return P.call(F);case 1:return P.call(F,U[0]);case 2:return P.call(F,U[0],U[1]);case 3:return P.call(F,U[0],U[1],U[2])}return P.apply(F,U)}function V2(P,F,U,de){for(var Ie=-1,Ge=P==null?0:P.length;++Ie<Ge;){var bt=P[Ie];F(de,bt,U(bt),P)}return de}function fn(P,F){for(var U=-1,de=P==null?0:P.length;++U<de&&F(P[U],U,P)!==!1;);return P}function G2(P,F){for(var U=P==null?0:P.length;U--&&F(P[U],U,P)!==!1;);return P}function Pf(P,F){for(var U=-1,de=P==null?0:P.length;++U<de;)if(!F(P[U],U,P))return!1;return!0}function Tr(P,F){for(var U=-1,de=P==null?0:P.length,Ie=0,Ge=[];++U<de;){var bt=P[U];F(bt,U,P)&&(Ge[Ie++]=bt)}return Ge}function Io(P,F){var U=P==null?0:P.length;return!!U&&Bi(P,F,0)>-1}function Kl(P,F,U){for(var de=-1,Ie=P==null?0:P.length;++de<Ie;)if(U(F,P[de]))return!0;return!1}function at(P,F){for(var U=-1,de=P==null?0:P.length,Ie=Array(de);++U<de;)Ie[U]=F(P[U],U,P);return Ie}function Ar(P,F){for(var U=-1,de=F.length,Ie=P.length;++U<de;)P[Ie+U]=F[U];return P}function Vl(P,F,U,de){var Ie=-1,Ge=P==null?0:P.length;for(de&&Ge&&(U=P[++Ie]);++Ie<Ge;)U=F(U,P[Ie],Ie,P);return U}function Q2(P,F,U,de){var Ie=P==null?0:P.length;for(de&&Ie&&(U=P[--Ie]);Ie--;)U=F(U,P[Ie],Ie,P);return U}function Gl(P,F){for(var U=-1,de=P==null?0:P.length;++U<de;)if(F(P[U],U,P))return!0;return!1}var Y2=Ql("length");function J2(P){return P.split("")}function X2(P){return P.match(a2)||[]}function Mf(P,F,U){var de;return U(P,function(Ie,Ge,bt){if(F(Ie,Ge,bt))return de=Ge,!1}),de}function Ro(P,F,U,de){for(var Ie=P.length,Ge=U+(de?1:-1);de?Ge--:++Ge<Ie;)if(F(P[Ge],Ge,P))return Ge;return-1}function Bi(P,F,U){return F===F?dy(P,F,U):Ro(P,Bf,U)}function ey(P,F,U,de){for(var Ie=U-1,Ge=P.length;++Ie<Ge;)if(de(P[Ie],F))return Ie;return-1}function Bf(P){return P!==P}function jf(P,F){var U=P==null?0:P.length;return U?Jl(P,F)/U:me}function Ql(P){return function(F){return F==null?n:F[P]}}function Yl(P){return function(F){return P==null?n:P[F]}}function Nf(P,F,U,de,Ie){return Ie(P,function(Ge,bt,tt){U=de?(de=!1,Ge):F(U,Ge,bt,tt)}),U}function ty(P,F){var U=P.length;for(P.sort(F);U--;)P[U]=P[U].value;return P}function Jl(P,F){for(var U,de=-1,Ie=P.length;++de<Ie;){var Ge=F(P[de]);Ge!==n&&(U=U===n?Ge:U+Ge)}return U}function Xl(P,F){for(var U=-1,de=Array(P);++U<P;)de[U]=F(U);return de}function ny(P,F){return at(F,function(U){return[U,P[U]]})}function Df(P){return P&&P.slice(0,Hf(P)+1).replace(Dl,"")}function Xt(P){return function(F){return P(F)}}function ec(P,F){return at(F,function(U){return P[U]})}function Cs(P,F){return P.has(F)}function Uf(P,F){for(var U=-1,de=P.length;++U<de&&Bi(F,P[U],0)>-1;);return U}function Ff(P,F){for(var U=P.length;U--&&Bi(F,P[U],0)>-1;);return U}function ry(P,F){for(var U=P.length,de=0;U--;)P[U]===F&&++de;return de}var iy=Yl(F2),sy=Yl(z2);function oy(P){return"\\"+W2[P]}function ay(P,F){return P==null?n:P[F]}function ji(P){return j2.test(P)}function ly(P){return N2.test(P)}function cy(P){for(var F,U=[];!(F=P.next()).done;)U.push(F.value);return U}function tc(P){var F=-1,U=Array(P.size);return P.forEach(function(de,Ie){U[++F]=[Ie,de]}),U}function zf(P,F){return function(U){return P(F(U))}}function Ir(P,F){for(var U=-1,de=P.length,Ie=0,Ge=[];++U<de;){var bt=P[U];(bt===F||bt===h)&&(P[U]=h,Ge[Ie++]=U)}return Ge}function Oo(P){var F=-1,U=Array(P.size);return P.forEach(function(de){U[++F]=de}),U}function uy(P){var F=-1,U=Array(P.size);return P.forEach(function(de){U[++F]=[de,de]}),U}function dy(P,F,U){for(var de=U-1,Ie=P.length;++de<Ie;)if(P[de]===F)return de;return-1}function fy(P,F,U){for(var de=U+1;de--;)if(P[de]===F)return de;return de}function Ni(P){return ji(P)?py(P):Y2(P)}function Tn(P){return ji(P)?gy(P):J2(P)}function Hf(P){for(var F=P.length;F--&&r2.test(P.charAt(F)););return F}var hy=Yl(H2);function py(P){for(var F=Wl.lastIndex=0;Wl.test(P);)++F;return F}function gy(P){return P.match(Wl)||[]}function vy(P){return P.match(B2)||[]}var my=function P(F){F=F==null?St:Di.defaults(St.Object(),F,Di.pick(St,D2));var U=F.Array,de=F.Date,Ie=F.Error,Ge=F.Function,bt=F.Math,tt=F.Object,nc=F.RegExp,yy=F.String,hn=F.TypeError,Lo=U.prototype,by=Ge.prototype,Ui=tt.prototype,Po=F["__core-js_shared__"],Mo=by.toString,et=Ui.hasOwnProperty,_y=0,Wf=function(){var r=/[^.]+$/.exec(Po&&Po.keys&&Po.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Bo=Ui.toString,wy=Mo.call(tt),xy=St._,$y=nc("^"+Mo.call(et).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jo=Sf?F.Buffer:n,Rr=F.Symbol,No=F.Uint8Array,qf=jo?jo.allocUnsafe:n,Do=zf(tt.getPrototypeOf,tt),Zf=tt.create,Kf=Ui.propertyIsEnumerable,Uo=Lo.splice,Vf=Rr?Rr.isConcatSpreadable:n,Ss=Rr?Rr.iterator:n,si=Rr?Rr.toStringTag:n,Fo=function(){try{var r=ui(tt,"defineProperty");return r({},"",{}),r}catch{}}(),Ey=F.clearTimeout!==St.clearTimeout&&F.clearTimeout,ky=de&&de.now!==St.Date.now&&de.now,Cy=F.setTimeout!==St.setTimeout&&F.setTimeout,zo=bt.ceil,Ho=bt.floor,rc=tt.getOwnPropertySymbols,Sy=jo?jo.isBuffer:n,Gf=F.isFinite,Ty=Lo.join,Ay=zf(tt.keys,tt),_t=bt.max,Ot=bt.min,Iy=de.now,Ry=F.parseInt,Qf=bt.random,Oy=Lo.reverse,ic=ui(F,"DataView"),Ts=ui(F,"Map"),sc=ui(F,"Promise"),Fi=ui(F,"Set"),As=ui(F,"WeakMap"),Is=ui(tt,"create"),Wo=As&&new As,zi={},Ly=di(ic),Py=di(Ts),My=di(sc),By=di(Fi),jy=di(As),qo=Rr?Rr.prototype:n,Rs=qo?qo.valueOf:n,Yf=qo?qo.toString:n;function y(r){if(ft(r)&&!Oe(r)&&!(r instanceof We)){if(r instanceof pn)return r;if(et.call(r,"__wrapped__"))return Jh(r)}return new pn(r)}var Hi=function(){function r(){}return function(s){if(!ct(s))return{};if(Zf)return Zf(s);r.prototype=s;var u=new r;return r.prototype=n,u}}();function Zo(){}function pn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Ym,evaluate:Jm,interpolate:of,variable:"",imports:{_:y}},y.prototype=Zo.prototype,y.prototype.constructor=y,pn.prototype=Hi(Zo.prototype),pn.prototype.constructor=pn;function We(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ve,this.__views__=[]}function Ny(){var r=new We(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function Dy(){if(this.__filtered__){var r=new We(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Uy(){var r=this.__wrapped__.value(),s=this.__dir__,u=Oe(r),g=s<0,m=u?r.length:0,$=Jb(0,m,this.__views__),T=$.start,I=$.end,M=I-T,z=g?I:T-1,H=this.__iteratees__,V=H.length,ie=0,ge=Ot(M,this.__takeCount__);if(!u||!g&&m==M&&ge==M)return wh(r,this.__actions__);var we=[];e:for(;M--&&ie<ge;){z+=s;for(var Be=-1,xe=r[z];++Be<V;){var ze=H[Be],Ze=ze.iteratee,nn=ze.type,Dt=Ze(xe);if(nn==N)xe=Dt;else if(!Dt){if(nn==ee)continue e;break e}}we[ie++]=xe}return we}We.prototype=Hi(Zo.prototype),We.prototype.constructor=We;function oi(r){var s=-1,u=r==null?0:r.length;for(this.clear();++s<u;){var g=r[s];this.set(g[0],g[1])}}function Fy(){this.__data__=Is?Is(null):{},this.size=0}function zy(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Hy(r){var s=this.__data__;if(Is){var u=s[r];return u===d?n:u}return et.call(s,r)?s[r]:n}function Wy(r){var s=this.__data__;return Is?s[r]!==n:et.call(s,r)}function qy(r,s){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=Is&&s===n?d:s,this}oi.prototype.clear=Fy,oi.prototype.delete=zy,oi.prototype.get=Hy,oi.prototype.has=Wy,oi.prototype.set=qy;function ur(r){var s=-1,u=r==null?0:r.length;for(this.clear();++s<u;){var g=r[s];this.set(g[0],g[1])}}function Zy(){this.__data__=[],this.size=0}function Ky(r){var s=this.__data__,u=Ko(s,r);if(u<0)return!1;var g=s.length-1;return u==g?s.pop():Uo.call(s,u,1),--this.size,!0}function Vy(r){var s=this.__data__,u=Ko(s,r);return u<0?n:s[u][1]}function Gy(r){return Ko(this.__data__,r)>-1}function Qy(r,s){var u=this.__data__,g=Ko(u,r);return g<0?(++this.size,u.push([r,s])):u[g][1]=s,this}ur.prototype.clear=Zy,ur.prototype.delete=Ky,ur.prototype.get=Vy,ur.prototype.has=Gy,ur.prototype.set=Qy;function dr(r){var s=-1,u=r==null?0:r.length;for(this.clear();++s<u;){var g=r[s];this.set(g[0],g[1])}}function Yy(){this.size=0,this.__data__={hash:new oi,map:new(Ts||ur),string:new oi}}function Jy(r){var s=sa(this,r).delete(r);return this.size-=s?1:0,s}function Xy(r){return sa(this,r).get(r)}function eb(r){return sa(this,r).has(r)}function tb(r,s){var u=sa(this,r),g=u.size;return u.set(r,s),this.size+=u.size==g?0:1,this}dr.prototype.clear=Yy,dr.prototype.delete=Jy,dr.prototype.get=Xy,dr.prototype.has=eb,dr.prototype.set=tb;function ai(r){var s=-1,u=r==null?0:r.length;for(this.__data__=new dr;++s<u;)this.add(r[s])}function nb(r){return this.__data__.set(r,d),this}function rb(r){return this.__data__.has(r)}ai.prototype.add=ai.prototype.push=nb,ai.prototype.has=rb;function An(r){var s=this.__data__=new ur(r);this.size=s.size}function ib(){this.__data__=new ur,this.size=0}function sb(r){var s=this.__data__,u=s.delete(r);return this.size=s.size,u}function ob(r){return this.__data__.get(r)}function ab(r){return this.__data__.has(r)}function lb(r,s){var u=this.__data__;if(u instanceof ur){var g=u.__data__;if(!Ts||g.length<o-1)return g.push([r,s]),this.size=++u.size,this;u=this.__data__=new dr(g)}return u.set(r,s),this.size=u.size,this}An.prototype.clear=ib,An.prototype.delete=sb,An.prototype.get=ob,An.prototype.has=ab,An.prototype.set=lb;function Jf(r,s){var u=Oe(r),g=!u&&fi(r),m=!u&&!g&&Br(r),$=!u&&!g&&!m&&Ki(r),T=u||g||m||$,I=T?Xl(r.length,yy):[],M=I.length;for(var z in r)(s||et.call(r,z))&&!(T&&(z=="length"||m&&(z=="offset"||z=="parent")||$&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||gr(z,M)))&&I.push(z);return I}function Xf(r){var s=r.length;return s?r[vc(0,s-1)]:n}function cb(r,s){return oa(qt(r),li(s,0,r.length))}function ub(r){return oa(qt(r))}function oc(r,s,u){(u!==n&&!In(r[s],u)||u===n&&!(s in r))&&fr(r,s,u)}function Os(r,s,u){var g=r[s];(!(et.call(r,s)&&In(g,u))||u===n&&!(s in r))&&fr(r,s,u)}function Ko(r,s){for(var u=r.length;u--;)if(In(r[u][0],s))return u;return-1}function db(r,s,u,g){return Or(r,function(m,$,T){s(g,m,u(m),T)}),g}function eh(r,s){return r&&qn(s,$t(s),r)}function fb(r,s){return r&&qn(s,Kt(s),r)}function fr(r,s,u){s=="__proto__"&&Fo?Fo(r,s,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[s]=u}function ac(r,s){for(var u=-1,g=s.length,m=U(g),$=r==null;++u<g;)m[u]=$?n:Fc(r,s[u]);return m}function li(r,s,u){return r===r&&(u!==n&&(r=r<=u?r:u),s!==n&&(r=r>=s?r:s)),r}function gn(r,s,u,g,m,$){var T,I=s&p,M=s&v,z=s&b;if(u&&(T=m?u(r,g,m,$):u(r)),T!==n)return T;if(!ct(r))return r;var H=Oe(r);if(H){if(T=e_(r),!I)return qt(r,T)}else{var V=Lt(r),ie=V==oe||V==Z;if(Br(r))return Eh(r,I);if(V==Bt||V==Se||ie&&!m){if(T=M||ie?{}:Hh(r),!I)return M?Hb(r,fb(T,r)):zb(r,eh(T,r))}else{if(!nt[V])return m?r:{};T=t_(r,V,I)}}$||($=new An);var ge=$.get(r);if(ge)return ge;$.set(r,T),yp(r)?r.forEach(function(xe){T.add(gn(xe,s,u,xe,r,$))}):vp(r)&&r.forEach(function(xe,ze){T.set(ze,gn(xe,s,u,ze,r,$))});var we=z?M?Sc:Cc:M?Kt:$t,Be=H?n:we(r);return fn(Be||r,function(xe,ze){Be&&(ze=xe,xe=r[ze]),Os(T,ze,gn(xe,s,u,ze,r,$))}),T}function hb(r){var s=$t(r);return function(u){return th(u,r,s)}}function th(r,s,u){var g=u.length;if(r==null)return!g;for(r=tt(r);g--;){var m=u[g],$=s[m],T=r[m];if(T===n&&!(m in r)||!$(T))return!1}return!0}function nh(r,s,u){if(typeof r!="function")throw new hn(l);return Ds(function(){r.apply(n,u)},s)}function Ls(r,s,u,g){var m=-1,$=Io,T=!0,I=r.length,M=[],z=s.length;if(!I)return M;u&&(s=at(s,Xt(u))),g?($=Kl,T=!1):s.length>=o&&($=Cs,T=!1,s=new ai(s));e:for(;++m<I;){var H=r[m],V=u==null?H:u(H);if(H=g||H!==0?H:0,T&&V===V){for(var ie=z;ie--;)if(s[ie]===V)continue e;M.push(H)}else $(s,V,g)||M.push(H)}return M}var Or=Ah(Wn),rh=Ah(cc,!0);function pb(r,s){var u=!0;return Or(r,function(g,m,$){return u=!!s(g,m,$),u}),u}function Vo(r,s,u){for(var g=-1,m=r.length;++g<m;){var $=r[g],T=s($);if(T!=null&&(I===n?T===T&&!tn(T):u(T,I)))var I=T,M=$}return M}function gb(r,s,u,g){var m=r.length;for(u=Me(u),u<0&&(u=-u>m?0:m+u),g=g===n||g>m?m:Me(g),g<0&&(g+=m),g=u>g?0:_p(g);u<g;)r[u++]=s;return r}function ih(r,s){var u=[];return Or(r,function(g,m,$){s(g,m,$)&&u.push(g)}),u}function Tt(r,s,u,g,m){var $=-1,T=r.length;for(u||(u=r_),m||(m=[]);++$<T;){var I=r[$];s>0&&u(I)?s>1?Tt(I,s-1,u,g,m):Ar(m,I):g||(m[m.length]=I)}return m}var lc=Ih(),sh=Ih(!0);function Wn(r,s){return r&&lc(r,s,$t)}function cc(r,s){return r&&sh(r,s,$t)}function Go(r,s){return Tr(s,function(u){return vr(r[u])})}function ci(r,s){s=Pr(s,r);for(var u=0,g=s.length;r!=null&&u<g;)r=r[Zn(s[u++])];return u&&u==g?r:n}function oh(r,s,u){var g=s(r);return Oe(r)?g:Ar(g,u(r))}function jt(r){return r==null?r===n?Sr:zn:si&&si in tt(r)?Yb(r):u_(r)}function uc(r,s){return r>s}function vb(r,s){return r!=null&&et.call(r,s)}function mb(r,s){return r!=null&&s in tt(r)}function yb(r,s,u){return r>=Ot(s,u)&&r<_t(s,u)}function dc(r,s,u){for(var g=u?Kl:Io,m=r[0].length,$=r.length,T=$,I=U($),M=1/0,z=[];T--;){var H=r[T];T&&s&&(H=at(H,Xt(s))),M=Ot(H.length,M),I[T]=!u&&(s||m>=120&&H.length>=120)?new ai(T&&H):n}H=r[0];var V=-1,ie=I[0];e:for(;++V<m&&z.length<M;){var ge=H[V],we=s?s(ge):ge;if(ge=u||ge!==0?ge:0,!(ie?Cs(ie,we):g(z,we,u))){for(T=$;--T;){var Be=I[T];if(!(Be?Cs(Be,we):g(r[T],we,u)))continue e}ie&&ie.push(we),z.push(ge)}}return z}function bb(r,s,u,g){return Wn(r,function(m,$,T){s(g,u(m),$,T)}),g}function Ps(r,s,u){s=Pr(s,r),r=Kh(r,s);var g=r==null?r:r[Zn(mn(s))];return g==null?n:Jt(g,r,u)}function ah(r){return ft(r)&&jt(r)==Se}function _b(r){return ft(r)&&jt(r)==Ht}function wb(r){return ft(r)&&jt(r)==ae}function Ms(r,s,u,g,m){return r===s?!0:r==null||s==null||!ft(r)&&!ft(s)?r!==r&&s!==s:xb(r,s,u,g,Ms,m)}function xb(r,s,u,g,m,$){var T=Oe(r),I=Oe(s),M=T?Ee:Lt(r),z=I?Ee:Lt(s);M=M==Se?Bt:M,z=z==Se?Bt:z;var H=M==Bt,V=z==Bt,ie=M==z;if(ie&&Br(r)){if(!Br(s))return!1;T=!0,H=!1}if(ie&&!H)return $||($=new An),T||Ki(r)?Uh(r,s,u,g,m,$):Gb(r,s,M,u,g,m,$);if(!(u&_)){var ge=H&&et.call(r,"__wrapped__"),we=V&&et.call(s,"__wrapped__");if(ge||we){var Be=ge?r.value():r,xe=we?s.value():s;return $||($=new An),m(Be,xe,u,g,$)}}return ie?($||($=new An),Qb(r,s,u,g,m,$)):!1}function $b(r){return ft(r)&&Lt(r)==qe}function fc(r,s,u,g){var m=u.length,$=m,T=!g;if(r==null)return!$;for(r=tt(r);m--;){var I=u[m];if(T&&I[2]?I[1]!==r[I[0]]:!(I[0]in r))return!1}for(;++m<$;){I=u[m];var M=I[0],z=r[M],H=I[1];if(T&&I[2]){if(z===n&&!(M in r))return!1}else{var V=new An;if(g)var ie=g(z,H,M,r,s,V);if(!(ie===n?Ms(H,z,_|w,g,V):ie))return!1}}return!0}function lh(r){if(!ct(r)||s_(r))return!1;var s=vr(r)?$y:h2;return s.test(di(r))}function Eb(r){return ft(r)&&jt(r)==$n}function kb(r){return ft(r)&&Lt(r)==Ct}function Cb(r){return ft(r)&&fa(r.length)&&!!st[jt(r)]}function ch(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?Oe(r)?fh(r[0],r[1]):dh(r):Rp(r)}function hc(r){if(!Ns(r))return Ay(r);var s=[];for(var u in tt(r))et.call(r,u)&&u!="constructor"&&s.push(u);return s}function Sb(r){if(!ct(r))return c_(r);var s=Ns(r),u=[];for(var g in r)g=="constructor"&&(s||!et.call(r,g))||u.push(g);return u}function pc(r,s){return r<s}function uh(r,s){var u=-1,g=Zt(r)?U(r.length):[];return Or(r,function(m,$,T){g[++u]=s(m,$,T)}),g}function dh(r){var s=Ac(r);return s.length==1&&s[0][2]?qh(s[0][0],s[0][1]):function(u){return u===r||fc(u,r,s)}}function fh(r,s){return Rc(r)&&Wh(s)?qh(Zn(r),s):function(u){var g=Fc(u,r);return g===n&&g===s?zc(u,r):Ms(s,g,_|w)}}function Qo(r,s,u,g,m){r!==s&&lc(s,function($,T){if(m||(m=new An),ct($))Tb(r,s,T,u,Qo,g,m);else{var I=g?g(Lc(r,T),$,T+"",r,s,m):n;I===n&&(I=$),oc(r,T,I)}},Kt)}function Tb(r,s,u,g,m,$,T){var I=Lc(r,u),M=Lc(s,u),z=T.get(M);if(z){oc(r,u,z);return}var H=$?$(I,M,u+"",r,s,T):n,V=H===n;if(V){var ie=Oe(M),ge=!ie&&Br(M),we=!ie&&!ge&&Ki(M);H=M,ie||ge||we?Oe(I)?H=I:ht(I)?H=qt(I):ge?(V=!1,H=Eh(M,!0)):we?(V=!1,H=kh(M,!0)):H=[]:Us(M)||fi(M)?(H=I,fi(I)?H=wp(I):(!ct(I)||vr(I))&&(H=Hh(M))):V=!1}V&&(T.set(M,H),m(H,M,g,$,T),T.delete(M)),oc(r,u,H)}function hh(r,s){var u=r.length;if(u)return s+=s<0?u:0,gr(s,u)?r[s]:n}function ph(r,s,u){s.length?s=at(s,function($){return Oe($)?function(T){return ci(T,$.length===1?$[0]:$)}:$}):s=[Vt];var g=-1;s=at(s,Xt(be()));var m=uh(r,function($,T,I){var M=at(s,function(z){return z($)});return{criteria:M,index:++g,value:$}});return ty(m,function($,T){return Fb($,T,u)})}function Ab(r,s){return gh(r,s,function(u,g){return zc(r,g)})}function gh(r,s,u){for(var g=-1,m=s.length,$={};++g<m;){var T=s[g],I=ci(r,T);u(I,T)&&Bs($,Pr(T,r),I)}return $}function Ib(r){return function(s){return ci(s,r)}}function gc(r,s,u,g){var m=g?ey:Bi,$=-1,T=s.length,I=r;for(r===s&&(s=qt(s)),u&&(I=at(r,Xt(u)));++$<T;)for(var M=0,z=s[$],H=u?u(z):z;(M=m(I,H,M,g))>-1;)I!==r&&Uo.call(I,M,1),Uo.call(r,M,1);return r}function vh(r,s){for(var u=r?s.length:0,g=u-1;u--;){var m=s[u];if(u==g||m!==$){var $=m;gr(m)?Uo.call(r,m,1):bc(r,m)}}return r}function vc(r,s){return r+Ho(Qf()*(s-r+1))}function Rb(r,s,u,g){for(var m=-1,$=_t(zo((s-r)/(u||1)),0),T=U($);$--;)T[g?$:++m]=r,r+=u;return T}function mc(r,s){var u="";if(!r||s<1||s>le)return u;do s%2&&(u+=r),s=Ho(s/2),s&&(r+=r);while(s);return u}function De(r,s){return Pc(Zh(r,s,Vt),r+"")}function Ob(r){return Xf(Vi(r))}function Lb(r,s){var u=Vi(r);return oa(u,li(s,0,u.length))}function Bs(r,s,u,g){if(!ct(r))return r;s=Pr(s,r);for(var m=-1,$=s.length,T=$-1,I=r;I!=null&&++m<$;){var M=Zn(s[m]),z=u;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=T){var H=I[M];z=g?g(H,M,I):n,z===n&&(z=ct(H)?H:gr(s[m+1])?[]:{})}Os(I,M,z),I=I[M]}return r}var mh=Wo?function(r,s){return Wo.set(r,s),r}:Vt,Pb=Fo?function(r,s){return Fo(r,"toString",{configurable:!0,enumerable:!1,value:Wc(s),writable:!0})}:Vt;function Mb(r){return oa(Vi(r))}function vn(r,s,u){var g=-1,m=r.length;s<0&&(s=-s>m?0:m+s),u=u>m?m:u,u<0&&(u+=m),m=s>u?0:u-s>>>0,s>>>=0;for(var $=U(m);++g<m;)$[g]=r[g+s];return $}function Bb(r,s){var u;return Or(r,function(g,m,$){return u=s(g,m,$),!u}),!!u}function Yo(r,s,u){var g=0,m=r==null?g:r.length;if(typeof s=="number"&&s===s&&m<=Ye){for(;g<m;){var $=g+m>>>1,T=r[$];T!==null&&!tn(T)&&(u?T<=s:T<s)?g=$+1:m=$}return m}return yc(r,s,Vt,u)}function yc(r,s,u,g){var m=0,$=r==null?0:r.length;if($===0)return 0;s=u(s);for(var T=s!==s,I=s===null,M=tn(s),z=s===n;m<$;){var H=Ho((m+$)/2),V=u(r[H]),ie=V!==n,ge=V===null,we=V===V,Be=tn(V);if(T)var xe=g||we;else z?xe=we&&(g||ie):I?xe=we&&ie&&(g||!ge):M?xe=we&&ie&&!ge&&(g||!Be):ge||Be?xe=!1:xe=g?V<=s:V<s;xe?m=H+1:$=H}return Ot($,$e)}function yh(r,s){for(var u=-1,g=r.length,m=0,$=[];++u<g;){var T=r[u],I=s?s(T):T;if(!u||!In(I,M)){var M=I;$[m++]=T===0?0:T}}return $}function bh(r){return typeof r=="number"?r:tn(r)?me:+r}function en(r){if(typeof r=="string")return r;if(Oe(r))return at(r,en)+"";if(tn(r))return Yf?Yf.call(r):"";var s=r+"";return s=="0"&&1/r==-Y?"-0":s}function Lr(r,s,u){var g=-1,m=Io,$=r.length,T=!0,I=[],M=I;if(u)T=!1,m=Kl;else if($>=o){var z=s?null:Kb(r);if(z)return Oo(z);T=!1,m=Cs,M=new ai}else M=s?[]:I;e:for(;++g<$;){var H=r[g],V=s?s(H):H;if(H=u||H!==0?H:0,T&&V===V){for(var ie=M.length;ie--;)if(M[ie]===V)continue e;s&&M.push(V),I.push(H)}else m(M,V,u)||(M!==I&&M.push(V),I.push(H))}return I}function bc(r,s){return s=Pr(s,r),r=Kh(r,s),r==null||delete r[Zn(mn(s))]}function _h(r,s,u,g){return Bs(r,s,u(ci(r,s)),g)}function Jo(r,s,u,g){for(var m=r.length,$=g?m:-1;(g?$--:++$<m)&&s(r[$],$,r););return u?vn(r,g?0:$,g?$+1:m):vn(r,g?$+1:0,g?m:$)}function wh(r,s){var u=r;return u instanceof We&&(u=u.value()),Vl(s,function(g,m){return m.func.apply(m.thisArg,Ar([g],m.args))},u)}function _c(r,s,u){var g=r.length;if(g<2)return g?Lr(r[0]):[];for(var m=-1,$=U(g);++m<g;)for(var T=r[m],I=-1;++I<g;)I!=m&&($[m]=Ls($[m]||T,r[I],s,u));return Lr(Tt($,1),s,u)}function xh(r,s,u){for(var g=-1,m=r.length,$=s.length,T={};++g<m;){var I=g<$?s[g]:n;u(T,r[g],I)}return T}function wc(r){return ht(r)?r:[]}function xc(r){return typeof r=="function"?r:Vt}function Pr(r,s){return Oe(r)?r:Rc(r,s)?[r]:Yh(Je(r))}var jb=De;function Mr(r,s,u){var g=r.length;return u=u===n?g:u,!s&&u>=g?r:vn(r,s,u)}var $h=Ey||function(r){return St.clearTimeout(r)};function Eh(r,s){if(s)return r.slice();var u=r.length,g=qf?qf(u):new r.constructor(u);return r.copy(g),g}function $c(r){var s=new r.constructor(r.byteLength);return new No(s).set(new No(r)),s}function Nb(r,s){var u=s?$c(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function Db(r){var s=new r.constructor(r.source,af.exec(r));return s.lastIndex=r.lastIndex,s}function Ub(r){return Rs?tt(Rs.call(r)):{}}function kh(r,s){var u=s?$c(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function Ch(r,s){if(r!==s){var u=r!==n,g=r===null,m=r===r,$=tn(r),T=s!==n,I=s===null,M=s===s,z=tn(s);if(!I&&!z&&!$&&r>s||$&&T&&M&&!I&&!z||g&&T&&M||!u&&M||!m)return 1;if(!g&&!$&&!z&&r<s||z&&u&&m&&!g&&!$||I&&u&&m||!T&&m||!M)return-1}return 0}function Fb(r,s,u){for(var g=-1,m=r.criteria,$=s.criteria,T=m.length,I=u.length;++g<T;){var M=Ch(m[g],$[g]);if(M){if(g>=I)return M;var z=u[g];return M*(z=="desc"?-1:1)}}return r.index-s.index}function Sh(r,s,u,g){for(var m=-1,$=r.length,T=u.length,I=-1,M=s.length,z=_t($-T,0),H=U(M+z),V=!g;++I<M;)H[I]=s[I];for(;++m<T;)(V||m<$)&&(H[u[m]]=r[m]);for(;z--;)H[I++]=r[m++];return H}function Th(r,s,u,g){for(var m=-1,$=r.length,T=-1,I=u.length,M=-1,z=s.length,H=_t($-I,0),V=U(H+z),ie=!g;++m<H;)V[m]=r[m];for(var ge=m;++M<z;)V[ge+M]=s[M];for(;++T<I;)(ie||m<$)&&(V[ge+u[T]]=r[m++]);return V}function qt(r,s){var u=-1,g=r.length;for(s||(s=U(g));++u<g;)s[u]=r[u];return s}function qn(r,s,u,g){var m=!u;u||(u={});for(var $=-1,T=s.length;++$<T;){var I=s[$],M=g?g(u[I],r[I],I,u,r):n;M===n&&(M=r[I]),m?fr(u,I,M):Os(u,I,M)}return u}function zb(r,s){return qn(r,Ic(r),s)}function Hb(r,s){return qn(r,Fh(r),s)}function Xo(r,s){return function(u,g){var m=Oe(u)?V2:db,$=s?s():{};return m(u,r,be(g,2),$)}}function Wi(r){return De(function(s,u){var g=-1,m=u.length,$=m>1?u[m-1]:n,T=m>2?u[2]:n;for($=r.length>3&&typeof $=="function"?(m--,$):n,T&&Nt(u[0],u[1],T)&&($=m<3?n:$,m=1),s=tt(s);++g<m;){var I=u[g];I&&r(s,I,g,$)}return s})}function Ah(r,s){return function(u,g){if(u==null)return u;if(!Zt(u))return r(u,g);for(var m=u.length,$=s?m:-1,T=tt(u);(s?$--:++$<m)&&g(T[$],$,T)!==!1;);return u}}function Ih(r){return function(s,u,g){for(var m=-1,$=tt(s),T=g(s),I=T.length;I--;){var M=T[r?I:++m];if(u($[M],M,$)===!1)break}return s}}function Wb(r,s,u){var g=s&x,m=js(r);function $(){var T=this&&this!==St&&this instanceof $?m:r;return T.apply(g?u:this,arguments)}return $}function Rh(r){return function(s){s=Je(s);var u=ji(s)?Tn(s):n,g=u?u[0]:s.charAt(0),m=u?Mr(u,1).join(""):s.slice(1);return g[r]()+m}}function qi(r){return function(s){return Vl(Ap(Tp(s).replace(P2,"")),r,"")}}function js(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var u=Hi(r.prototype),g=r.apply(u,s);return ct(g)?g:u}}function qb(r,s,u){var g=js(r);function m(){for(var $=arguments.length,T=U($),I=$,M=Zi(m);I--;)T[I]=arguments[I];var z=$<3&&T[0]!==M&&T[$-1]!==M?[]:Ir(T,M);if($-=z.length,$<u)return Bh(r,s,ea,m.placeholder,n,T,z,n,n,u-$);var H=this&&this!==St&&this instanceof m?g:r;return Jt(H,this,T)}return m}function Oh(r){return function(s,u,g){var m=tt(s);if(!Zt(s)){var $=be(u,3);s=$t(s),u=function(I){return $(m[I],I,m)}}var T=r(s,u,g);return T>-1?m[$?s[T]:T]:n}}function Lh(r){return pr(function(s){var u=s.length,g=u,m=pn.prototype.thru;for(r&&s.reverse();g--;){var $=s[g];if(typeof $!="function")throw new hn(l);if(m&&!T&&ia($)=="wrapper")var T=new pn([],!0)}for(g=T?g:u;++g<u;){$=s[g];var I=ia($),M=I=="wrapper"?Tc($):n;M&&Oc(M[0])&&M[1]==(D|C|O|j)&&!M[4].length&&M[9]==1?T=T[ia(M[0])].apply(T,M[3]):T=$.length==1&&Oc($)?T[I]():T.thru($)}return function(){var z=arguments,H=z[0];if(T&&z.length==1&&Oe(H))return T.plant(H).value();for(var V=0,ie=u?s[V].apply(this,z):H;++V<u;)ie=s[V].call(this,ie);return ie}})}function ea(r,s,u,g,m,$,T,I,M,z){var H=s&D,V=s&x,ie=s&S,ge=s&(C|R),we=s&W,Be=ie?n:js(r);function xe(){for(var ze=arguments.length,Ze=U(ze),nn=ze;nn--;)Ze[nn]=arguments[nn];if(ge)var Dt=Zi(xe),rn=ry(Ze,Dt);if(g&&(Ze=Sh(Ze,g,m,ge)),$&&(Ze=Th(Ze,$,T,ge)),ze-=rn,ge&&ze<z){var pt=Ir(Ze,Dt);return Bh(r,s,ea,xe.placeholder,u,Ze,pt,I,M,z-ze)}var Rn=V?u:this,yr=ie?Rn[r]:r;return ze=Ze.length,I?Ze=d_(Ze,I):we&&ze>1&&Ze.reverse(),H&&M<ze&&(Ze.length=M),this&&this!==St&&this instanceof xe&&(yr=Be||js(yr)),yr.apply(Rn,Ze)}return xe}function Ph(r,s){return function(u,g){return bb(u,r,s(g),{})}}function ta(r,s){return function(u,g){var m;if(u===n&&g===n)return s;if(u!==n&&(m=u),g!==n){if(m===n)return g;typeof u=="string"||typeof g=="string"?(u=en(u),g=en(g)):(u=bh(u),g=bh(g)),m=r(u,g)}return m}}function Ec(r){return pr(function(s){return s=at(s,Xt(be())),De(function(u){var g=this;return r(s,function(m){return Jt(m,g,u)})})})}function na(r,s){s=s===n?" ":en(s);var u=s.length;if(u<2)return u?mc(s,r):s;var g=mc(s,zo(r/Ni(s)));return ji(s)?Mr(Tn(g),0,r).join(""):g.slice(0,r)}function Zb(r,s,u,g){var m=s&x,$=js(r);function T(){for(var I=-1,M=arguments.length,z=-1,H=g.length,V=U(H+M),ie=this&&this!==St&&this instanceof T?$:r;++z<H;)V[z]=g[z];for(;M--;)V[z++]=arguments[++I];return Jt(ie,m?u:this,V)}return T}function Mh(r){return function(s,u,g){return g&&typeof g!="number"&&Nt(s,u,g)&&(u=g=n),s=mr(s),u===n?(u=s,s=0):u=mr(u),g=g===n?s<u?1:-1:mr(g),Rb(s,u,g,r)}}function ra(r){return function(s,u){return typeof s=="string"&&typeof u=="string"||(s=yn(s),u=yn(u)),r(s,u)}}function Bh(r,s,u,g,m,$,T,I,M,z){var H=s&C,V=H?T:n,ie=H?n:T,ge=H?$:n,we=H?n:$;s|=H?O:A,s&=~(H?A:O),s&L||(s&=~(x|S));var Be=[r,s,m,ge,V,we,ie,I,M,z],xe=u.apply(n,Be);return Oc(r)&&Vh(xe,Be),xe.placeholder=g,Gh(xe,r,s)}function kc(r){var s=bt[r];return function(u,g){if(u=yn(u),g=g==null?0:Ot(Me(g),292),g&&Gf(u)){var m=(Je(u)+"e").split("e"),$=s(m[0]+"e"+(+m[1]+g));return m=(Je($)+"e").split("e"),+(m[0]+"e"+(+m[1]-g))}return s(u)}}var Kb=Fi&&1/Oo(new Fi([,-0]))[1]==Y?function(r){return new Fi(r)}:Kc;function jh(r){return function(s){var u=Lt(s);return u==qe?tc(s):u==Ct?uy(s):ny(s,r(s))}}function hr(r,s,u,g,m,$,T,I){var M=s&S;if(!M&&typeof r!="function")throw new hn(l);var z=g?g.length:0;if(z||(s&=~(O|A),g=m=n),T=T===n?T:_t(Me(T),0),I=I===n?I:Me(I),z-=m?m.length:0,s&A){var H=g,V=m;g=m=n}var ie=M?n:Tc(r),ge=[r,s,u,g,m,H,V,$,T,I];if(ie&&l_(ge,ie),r=ge[0],s=ge[1],u=ge[2],g=ge[3],m=ge[4],I=ge[9]=ge[9]===n?M?0:r.length:_t(ge[9]-z,0),!I&&s&(C|R)&&(s&=~(C|R)),!s||s==x)var we=Wb(r,s,u);else s==C||s==R?we=qb(r,s,I):(s==O||s==(x|O))&&!m.length?we=Zb(r,s,u,g):we=ea.apply(n,ge);var Be=ie?mh:Vh;return Gh(Be(we,ge),r,s)}function Nh(r,s,u,g){return r===n||In(r,Ui[u])&&!et.call(g,u)?s:r}function Dh(r,s,u,g,m,$){return ct(r)&&ct(s)&&($.set(s,r),Qo(r,s,n,Dh,$),$.delete(s)),r}function Vb(r){return Us(r)?n:r}function Uh(r,s,u,g,m,$){var T=u&_,I=r.length,M=s.length;if(I!=M&&!(T&&M>I))return!1;var z=$.get(r),H=$.get(s);if(z&&H)return z==s&&H==r;var V=-1,ie=!0,ge=u&w?new ai:n;for($.set(r,s),$.set(s,r);++V<I;){var we=r[V],Be=s[V];if(g)var xe=T?g(Be,we,V,s,r,$):g(we,Be,V,r,s,$);if(xe!==n){if(xe)continue;ie=!1;break}if(ge){if(!Gl(s,function(ze,Ze){if(!Cs(ge,Ze)&&(we===ze||m(we,ze,u,g,$)))return ge.push(Ze)})){ie=!1;break}}else if(!(we===Be||m(we,Be,u,g,$))){ie=!1;break}}return $.delete(r),$.delete(s),ie}function Gb(r,s,u,g,m,$,T){switch(u){case Wt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Ht:return!(r.byteLength!=s.byteLength||!$(new No(r),new No(s)));case re:case ae:case xt:return In(+r,+s);case Ke:return r.name==s.name&&r.message==s.message;case $n:case Yt:return r==s+"";case qe:var I=tc;case Ct:var M=g&_;if(I||(I=Oo),r.size!=s.size&&!M)return!1;var z=T.get(r);if(z)return z==s;g|=w,T.set(r,s);var H=Uh(I(r),I(s),g,m,$,T);return T.delete(r),H;case Hn:if(Rs)return Rs.call(r)==Rs.call(s)}return!1}function Qb(r,s,u,g,m,$){var T=u&_,I=Cc(r),M=I.length,z=Cc(s),H=z.length;if(M!=H&&!T)return!1;for(var V=M;V--;){var ie=I[V];if(!(T?ie in s:et.call(s,ie)))return!1}var ge=$.get(r),we=$.get(s);if(ge&&we)return ge==s&&we==r;var Be=!0;$.set(r,s),$.set(s,r);for(var xe=T;++V<M;){ie=I[V];var ze=r[ie],Ze=s[ie];if(g)var nn=T?g(Ze,ze,ie,s,r,$):g(ze,Ze,ie,r,s,$);if(!(nn===n?ze===Ze||m(ze,Ze,u,g,$):nn)){Be=!1;break}xe||(xe=ie=="constructor")}if(Be&&!xe){var Dt=r.constructor,rn=s.constructor;Dt!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof rn=="function"&&rn instanceof rn)&&(Be=!1)}return $.delete(r),$.delete(s),Be}function pr(r){return Pc(Zh(r,n,tp),r+"")}function Cc(r){return oh(r,$t,Ic)}function Sc(r){return oh(r,Kt,Fh)}var Tc=Wo?function(r){return Wo.get(r)}:Kc;function ia(r){for(var s=r.name+"",u=zi[s],g=et.call(zi,s)?u.length:0;g--;){var m=u[g],$=m.func;if($==null||$==r)return m.name}return s}function Zi(r){var s=et.call(y,"placeholder")?y:r;return s.placeholder}function be(){var r=y.iteratee||qc;return r=r===qc?ch:r,arguments.length?r(arguments[0],arguments[1]):r}function sa(r,s){var u=r.__data__;return i_(s)?u[typeof s=="string"?"string":"hash"]:u.map}function Ac(r){for(var s=$t(r),u=s.length;u--;){var g=s[u],m=r[g];s[u]=[g,m,Wh(m)]}return s}function ui(r,s){var u=ay(r,s);return lh(u)?u:n}function Yb(r){var s=et.call(r,si),u=r[si];try{r[si]=n;var g=!0}catch{}var m=Bo.call(r);return g&&(s?r[si]=u:delete r[si]),m}var Ic=rc?function(r){return r==null?[]:(r=tt(r),Tr(rc(r),function(s){return Kf.call(r,s)}))}:Vc,Fh=rc?function(r){for(var s=[];r;)Ar(s,Ic(r)),r=Do(r);return s}:Vc,Lt=jt;(ic&&Lt(new ic(new ArrayBuffer(1)))!=Wt||Ts&&Lt(new Ts)!=qe||sc&&Lt(sc.resolve())!=xn||Fi&&Lt(new Fi)!=Ct||As&&Lt(new As)!=En)&&(Lt=function(r){var s=jt(r),u=s==Bt?r.constructor:n,g=u?di(u):"";if(g)switch(g){case Ly:return Wt;case Py:return qe;case My:return xn;case By:return Ct;case jy:return En}return s});function Jb(r,s,u){for(var g=-1,m=u.length;++g<m;){var $=u[g],T=$.size;switch($.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Ot(s,r+T);break;case"takeRight":r=_t(r,s-T);break}}return{start:r,end:s}}function Xb(r){var s=r.match(s2);return s?s[1].split(o2):[]}function zh(r,s,u){s=Pr(s,r);for(var g=-1,m=s.length,$=!1;++g<m;){var T=Zn(s[g]);if(!($=r!=null&&u(r,T)))break;r=r[T]}return $||++g!=m?$:(m=r==null?0:r.length,!!m&&fa(m)&&gr(T,m)&&(Oe(r)||fi(r)))}function e_(r){var s=r.length,u=new r.constructor(s);return s&&typeof r[0]=="string"&&et.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Hh(r){return typeof r.constructor=="function"&&!Ns(r)?Hi(Do(r)):{}}function t_(r,s,u){var g=r.constructor;switch(s){case Ht:return $c(r);case re:case ae:return new g(+r);case Wt:return Nb(r,u);case kn:case Cn:case cn:case un:case Sn:case ar:case lr:case cr:case Pi:return kh(r,u);case qe:return new g;case xt:case Yt:return new g(r);case $n:return Db(r);case Ct:return new g;case Hn:return Ub(r)}}function n_(r,s){var u=s.length;if(!u)return r;var g=u-1;return s[g]=(u>1?"& ":"")+s[g],s=s.join(u>2?", ":" "),r.replace(i2,`{
/* [wrapped with `+s+`] */
`)}function r_(r){return Oe(r)||fi(r)||!!(Vf&&r&&r[Vf])}function gr(r,s){var u=typeof r;return s=s??le,!!s&&(u=="number"||u!="symbol"&&g2.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,u){if(!ct(u))return!1;var g=typeof s;return(g=="number"?Zt(u)&&gr(s,u.length):g=="string"&&s in u)?In(u[s],r):!1}function Rc(r,s){if(Oe(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||tn(r)?!0:e2.test(r)||!Xm.test(r)||s!=null&&r in tt(s)}function i_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Oc(r){var s=ia(r),u=y[s];if(typeof u!="function"||!(s in We.prototype))return!1;if(r===u)return!0;var g=Tc(u);return!!g&&r===g[0]}function s_(r){return!!Wf&&Wf in r}var o_=Po?vr:Gc;function Ns(r){var s=r&&r.constructor,u=typeof s=="function"&&s.prototype||Ui;return r===u}function Wh(r){return r===r&&!ct(r)}function qh(r,s){return function(u){return u==null?!1:u[r]===s&&(s!==n||r in tt(u))}}function a_(r){var s=ua(r,function(g){return u.size===f&&u.clear(),g}),u=s.cache;return s}function l_(r,s){var u=r[1],g=s[1],m=u|g,$=m<(x|S|D),T=g==D&&u==C||g==D&&u==j&&r[7].length<=s[8]||g==(D|j)&&s[7].length<=s[8]&&u==C;if(!($||T))return r;g&x&&(r[2]=s[2],m|=u&x?0:L);var I=s[3];if(I){var M=r[3];r[3]=M?Sh(M,I,s[4]):I,r[4]=M?Ir(r[3],h):s[4]}return I=s[5],I&&(M=r[5],r[5]=M?Th(M,I,s[6]):I,r[6]=M?Ir(r[5],h):s[6]),I=s[7],I&&(r[7]=I),g&D&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function c_(r){var s=[];if(r!=null)for(var u in tt(r))s.push(u);return s}function u_(r){return Bo.call(r)}function Zh(r,s,u){return s=_t(s===n?r.length-1:s,0),function(){for(var g=arguments,m=-1,$=_t(g.length-s,0),T=U($);++m<$;)T[m]=g[s+m];m=-1;for(var I=U(s+1);++m<s;)I[m]=g[m];return I[s]=u(T),Jt(r,this,I)}}function Kh(r,s){return s.length<2?r:ci(r,vn(s,0,-1))}function d_(r,s){for(var u=r.length,g=Ot(s.length,u),m=qt(r);g--;){var $=s[g];r[g]=gr($,u)?m[$]:n}return r}function Lc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Vh=Qh(mh),Ds=Cy||function(r,s){return St.setTimeout(r,s)},Pc=Qh(Pb);function Gh(r,s,u){var g=s+"";return Pc(r,n_(g,f_(Xb(g),u)))}function Qh(r){var s=0,u=0;return function(){var g=Iy(),m=se-(g-u);if(u=g,m>0){if(++s>=ne)return arguments[0]}else s=0;return r.apply(n,arguments)}}function oa(r,s){var u=-1,g=r.length,m=g-1;for(s=s===n?g:s;++u<s;){var $=vc(u,m),T=r[$];r[$]=r[u],r[u]=T}return r.length=s,r}var Yh=a_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(t2,function(u,g,m,$){s.push(m?$.replace(c2,"$1"):g||u)}),s});function Zn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-Y?"-0":s}function di(r){if(r!=null){try{return Mo.call(r)}catch{}try{return r+""}catch{}}return""}function f_(r,s){return fn(ue,function(u){var g="_."+u[0];s&u[1]&&!Io(r,g)&&r.push(g)}),r.sort()}function Jh(r){if(r instanceof We)return r.clone();var s=new pn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function h_(r,s,u){(u?Nt(r,s,u):s===n)?s=1:s=_t(Me(s),0);var g=r==null?0:r.length;if(!g||s<1)return[];for(var m=0,$=0,T=U(zo(g/s));m<g;)T[$++]=vn(r,m,m+=s);return T}function p_(r){for(var s=-1,u=r==null?0:r.length,g=0,m=[];++s<u;){var $=r[s];$&&(m[g++]=$)}return m}function g_(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),u=arguments[0],g=r;g--;)s[g-1]=arguments[g];return Ar(Oe(u)?qt(u):[u],Tt(s,1))}var v_=De(function(r,s){return ht(r)?Ls(r,Tt(s,1,ht,!0)):[]}),m_=De(function(r,s){var u=mn(s);return ht(u)&&(u=n),ht(r)?Ls(r,Tt(s,1,ht,!0),be(u,2)):[]}),y_=De(function(r,s){var u=mn(s);return ht(u)&&(u=n),ht(r)?Ls(r,Tt(s,1,ht,!0),n,u):[]});function b_(r,s,u){var g=r==null?0:r.length;return g?(s=u||s===n?1:Me(s),vn(r,s<0?0:s,g)):[]}function __(r,s,u){var g=r==null?0:r.length;return g?(s=u||s===n?1:Me(s),s=g-s,vn(r,0,s<0?0:s)):[]}function w_(r,s){return r&&r.length?Jo(r,be(s,3),!0,!0):[]}function x_(r,s){return r&&r.length?Jo(r,be(s,3),!0):[]}function $_(r,s,u,g){var m=r==null?0:r.length;return m?(u&&typeof u!="number"&&Nt(r,s,u)&&(u=0,g=m),gb(r,s,u,g)):[]}function Xh(r,s,u){var g=r==null?0:r.length;if(!g)return-1;var m=u==null?0:Me(u);return m<0&&(m=_t(g+m,0)),Ro(r,be(s,3),m)}function ep(r,s,u){var g=r==null?0:r.length;if(!g)return-1;var m=g-1;return u!==n&&(m=Me(u),m=u<0?_t(g+m,0):Ot(m,g-1)),Ro(r,be(s,3),m,!0)}function tp(r){var s=r==null?0:r.length;return s?Tt(r,1):[]}function E_(r){var s=r==null?0:r.length;return s?Tt(r,Y):[]}function k_(r,s){var u=r==null?0:r.length;return u?(s=s===n?1:Me(s),Tt(r,s)):[]}function C_(r){for(var s=-1,u=r==null?0:r.length,g={};++s<u;){var m=r[s];g[m[0]]=m[1]}return g}function np(r){return r&&r.length?r[0]:n}function S_(r,s,u){var g=r==null?0:r.length;if(!g)return-1;var m=u==null?0:Me(u);return m<0&&(m=_t(g+m,0)),Bi(r,s,m)}function T_(r){var s=r==null?0:r.length;return s?vn(r,0,-1):[]}var A_=De(function(r){var s=at(r,wc);return s.length&&s[0]===r[0]?dc(s):[]}),I_=De(function(r){var s=mn(r),u=at(r,wc);return s===mn(u)?s=n:u.pop(),u.length&&u[0]===r[0]?dc(u,be(s,2)):[]}),R_=De(function(r){var s=mn(r),u=at(r,wc);return s=typeof s=="function"?s:n,s&&u.pop(),u.length&&u[0]===r[0]?dc(u,n,s):[]});function O_(r,s){return r==null?"":Ty.call(r,s)}function mn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function L_(r,s,u){var g=r==null?0:r.length;if(!g)return-1;var m=g;return u!==n&&(m=Me(u),m=m<0?_t(g+m,0):Ot(m,g-1)),s===s?fy(r,s,m):Ro(r,Bf,m,!0)}function P_(r,s){return r&&r.length?hh(r,Me(s)):n}var M_=De(rp);function rp(r,s){return r&&r.length&&s&&s.length?gc(r,s):r}function B_(r,s,u){return r&&r.length&&s&&s.length?gc(r,s,be(u,2)):r}function j_(r,s,u){return r&&r.length&&s&&s.length?gc(r,s,n,u):r}var N_=pr(function(r,s){var u=r==null?0:r.length,g=ac(r,s);return vh(r,at(s,function(m){return gr(m,u)?+m:m}).sort(Ch)),g});function D_(r,s){var u=[];if(!(r&&r.length))return u;var g=-1,m=[],$=r.length;for(s=be(s,3);++g<$;){var T=r[g];s(T,g,r)&&(u.push(T),m.push(g))}return vh(r,m),u}function Mc(r){return r==null?r:Oy.call(r)}function U_(r,s,u){var g=r==null?0:r.length;return g?(u&&typeof u!="number"&&Nt(r,s,u)?(s=0,u=g):(s=s==null?0:Me(s),u=u===n?g:Me(u)),vn(r,s,u)):[]}function F_(r,s){return Yo(r,s)}function z_(r,s,u){return yc(r,s,be(u,2))}function H_(r,s){var u=r==null?0:r.length;if(u){var g=Yo(r,s);if(g<u&&In(r[g],s))return g}return-1}function W_(r,s){return Yo(r,s,!0)}function q_(r,s,u){return yc(r,s,be(u,2),!0)}function Z_(r,s){var u=r==null?0:r.length;if(u){var g=Yo(r,s,!0)-1;if(In(r[g],s))return g}return-1}function K_(r){return r&&r.length?yh(r):[]}function V_(r,s){return r&&r.length?yh(r,be(s,2)):[]}function G_(r){var s=r==null?0:r.length;return s?vn(r,1,s):[]}function Q_(r,s,u){return r&&r.length?(s=u||s===n?1:Me(s),vn(r,0,s<0?0:s)):[]}function Y_(r,s,u){var g=r==null?0:r.length;return g?(s=u||s===n?1:Me(s),s=g-s,vn(r,s<0?0:s,g)):[]}function J_(r,s){return r&&r.length?Jo(r,be(s,3),!1,!0):[]}function X_(r,s){return r&&r.length?Jo(r,be(s,3)):[]}var ew=De(function(r){return Lr(Tt(r,1,ht,!0))}),tw=De(function(r){var s=mn(r);return ht(s)&&(s=n),Lr(Tt(r,1,ht,!0),be(s,2))}),nw=De(function(r){var s=mn(r);return s=typeof s=="function"?s:n,Lr(Tt(r,1,ht,!0),n,s)});function rw(r){return r&&r.length?Lr(r):[]}function iw(r,s){return r&&r.length?Lr(r,be(s,2)):[]}function sw(r,s){return s=typeof s=="function"?s:n,r&&r.length?Lr(r,n,s):[]}function Bc(r){if(!(r&&r.length))return[];var s=0;return r=Tr(r,function(u){if(ht(u))return s=_t(u.length,s),!0}),Xl(s,function(u){return at(r,Ql(u))})}function ip(r,s){if(!(r&&r.length))return[];var u=Bc(r);return s==null?u:at(u,function(g){return Jt(s,n,g)})}var ow=De(function(r,s){return ht(r)?Ls(r,s):[]}),aw=De(function(r){return _c(Tr(r,ht))}),lw=De(function(r){var s=mn(r);return ht(s)&&(s=n),_c(Tr(r,ht),be(s,2))}),cw=De(function(r){var s=mn(r);return s=typeof s=="function"?s:n,_c(Tr(r,ht),n,s)}),uw=De(Bc);function dw(r,s){return xh(r||[],s||[],Os)}function fw(r,s){return xh(r||[],s||[],Bs)}var hw=De(function(r){var s=r.length,u=s>1?r[s-1]:n;return u=typeof u=="function"?(r.pop(),u):n,ip(r,u)});function sp(r){var s=y(r);return s.__chain__=!0,s}function pw(r,s){return s(r),r}function aa(r,s){return s(r)}var gw=pr(function(r){var s=r.length,u=s?r[0]:0,g=this.__wrapped__,m=function($){return ac($,r)};return s>1||this.__actions__.length||!(g instanceof We)||!gr(u)?this.thru(m):(g=g.slice(u,+u+(s?1:0)),g.__actions__.push({func:aa,args:[m],thisArg:n}),new pn(g,this.__chain__).thru(function($){return s&&!$.length&&$.push(n),$}))});function vw(){return sp(this)}function mw(){return new pn(this.value(),this.__chain__)}function yw(){this.__values__===n&&(this.__values__=bp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function bw(){return this}function _w(r){for(var s,u=this;u instanceof Zo;){var g=Jh(u);g.__index__=0,g.__values__=n,s?m.__wrapped__=g:s=g;var m=g;u=u.__wrapped__}return m.__wrapped__=r,s}function ww(){var r=this.__wrapped__;if(r instanceof We){var s=r;return this.__actions__.length&&(s=new We(this)),s=s.reverse(),s.__actions__.push({func:aa,args:[Mc],thisArg:n}),new pn(s,this.__chain__)}return this.thru(Mc)}function xw(){return wh(this.__wrapped__,this.__actions__)}var $w=Xo(function(r,s,u){et.call(r,u)?++r[u]:fr(r,u,1)});function Ew(r,s,u){var g=Oe(r)?Pf:pb;return u&&Nt(r,s,u)&&(s=n),g(r,be(s,3))}function kw(r,s){var u=Oe(r)?Tr:ih;return u(r,be(s,3))}var Cw=Oh(Xh),Sw=Oh(ep);function Tw(r,s){return Tt(la(r,s),1)}function Aw(r,s){return Tt(la(r,s),Y)}function Iw(r,s,u){return u=u===n?1:Me(u),Tt(la(r,s),u)}function op(r,s){var u=Oe(r)?fn:Or;return u(r,be(s,3))}function ap(r,s){var u=Oe(r)?G2:rh;return u(r,be(s,3))}var Rw=Xo(function(r,s,u){et.call(r,u)?r[u].push(s):fr(r,u,[s])});function Ow(r,s,u,g){r=Zt(r)?r:Vi(r),u=u&&!g?Me(u):0;var m=r.length;return u<0&&(u=_t(m+u,0)),ha(r)?u<=m&&r.indexOf(s,u)>-1:!!m&&Bi(r,s,u)>-1}var Lw=De(function(r,s,u){var g=-1,m=typeof s=="function",$=Zt(r)?U(r.length):[];return Or(r,function(T){$[++g]=m?Jt(s,T,u):Ps(T,s,u)}),$}),Pw=Xo(function(r,s,u){fr(r,u,s)});function la(r,s){var u=Oe(r)?at:uh;return u(r,be(s,3))}function Mw(r,s,u,g){return r==null?[]:(Oe(s)||(s=s==null?[]:[s]),u=g?n:u,Oe(u)||(u=u==null?[]:[u]),ph(r,s,u))}var Bw=Xo(function(r,s,u){r[u?0:1].push(s)},function(){return[[],[]]});function jw(r,s,u){var g=Oe(r)?Vl:Nf,m=arguments.length<3;return g(r,be(s,4),u,m,Or)}function Nw(r,s,u){var g=Oe(r)?Q2:Nf,m=arguments.length<3;return g(r,be(s,4),u,m,rh)}function Dw(r,s){var u=Oe(r)?Tr:ih;return u(r,da(be(s,3)))}function Uw(r){var s=Oe(r)?Xf:Ob;return s(r)}function Fw(r,s,u){(u?Nt(r,s,u):s===n)?s=1:s=Me(s);var g=Oe(r)?cb:Lb;return g(r,s)}function zw(r){var s=Oe(r)?ub:Mb;return s(r)}function Hw(r){if(r==null)return 0;if(Zt(r))return ha(r)?Ni(r):r.length;var s=Lt(r);return s==qe||s==Ct?r.size:hc(r).length}function Ww(r,s,u){var g=Oe(r)?Gl:Bb;return u&&Nt(r,s,u)&&(s=n),g(r,be(s,3))}var qw=De(function(r,s){if(r==null)return[];var u=s.length;return u>1&&Nt(r,s[0],s[1])?s=[]:u>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),ph(r,Tt(s,1),[])}),ca=ky||function(){return St.Date.now()};function Zw(r,s){if(typeof s!="function")throw new hn(l);return r=Me(r),function(){if(--r<1)return s.apply(this,arguments)}}function lp(r,s,u){return s=u?n:s,s=r&&s==null?r.length:s,hr(r,D,n,n,n,n,s)}function cp(r,s){var u;if(typeof s!="function")throw new hn(l);return r=Me(r),function(){return--r>0&&(u=s.apply(this,arguments)),r<=1&&(s=n),u}}var jc=De(function(r,s,u){var g=x;if(u.length){var m=Ir(u,Zi(jc));g|=O}return hr(r,g,s,u,m)}),up=De(function(r,s,u){var g=x|S;if(u.length){var m=Ir(u,Zi(up));g|=O}return hr(s,g,r,u,m)});function dp(r,s,u){s=u?n:s;var g=hr(r,C,n,n,n,n,n,s);return g.placeholder=dp.placeholder,g}function fp(r,s,u){s=u?n:s;var g=hr(r,R,n,n,n,n,n,s);return g.placeholder=fp.placeholder,g}function hp(r,s,u){var g,m,$,T,I,M,z=0,H=!1,V=!1,ie=!0;if(typeof r!="function")throw new hn(l);s=yn(s)||0,ct(u)&&(H=!!u.leading,V="maxWait"in u,$=V?_t(yn(u.maxWait)||0,s):$,ie="trailing"in u?!!u.trailing:ie);function ge(pt){var Rn=g,yr=m;return g=m=n,z=pt,T=r.apply(yr,Rn),T}function we(pt){return z=pt,I=Ds(ze,s),H?ge(pt):T}function Be(pt){var Rn=pt-M,yr=pt-z,Op=s-Rn;return V?Ot(Op,$-yr):Op}function xe(pt){var Rn=pt-M,yr=pt-z;return M===n||Rn>=s||Rn<0||V&&yr>=$}function ze(){var pt=ca();if(xe(pt))return Ze(pt);I=Ds(ze,Be(pt))}function Ze(pt){return I=n,ie&&g?ge(pt):(g=m=n,T)}function nn(){I!==n&&$h(I),z=0,g=M=m=I=n}function Dt(){return I===n?T:Ze(ca())}function rn(){var pt=ca(),Rn=xe(pt);if(g=arguments,m=this,M=pt,Rn){if(I===n)return we(M);if(V)return $h(I),I=Ds(ze,s),ge(M)}return I===n&&(I=Ds(ze,s)),T}return rn.cancel=nn,rn.flush=Dt,rn}var Kw=De(function(r,s){return nh(r,1,s)}),Vw=De(function(r,s,u){return nh(r,yn(s)||0,u)});function Gw(r){return hr(r,W)}function ua(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new hn(l);var u=function(){var g=arguments,m=s?s.apply(this,g):g[0],$=u.cache;if($.has(m))return $.get(m);var T=r.apply(this,g);return u.cache=$.set(m,T)||$,T};return u.cache=new(ua.Cache||dr),u}ua.Cache=dr;function da(r){if(typeof r!="function")throw new hn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Qw(r){return cp(2,r)}var Yw=jb(function(r,s){s=s.length==1&&Oe(s[0])?at(s[0],Xt(be())):at(Tt(s,1),Xt(be()));var u=s.length;return De(function(g){for(var m=-1,$=Ot(g.length,u);++m<$;)g[m]=s[m].call(this,g[m]);return Jt(r,this,g)})}),Nc=De(function(r,s){var u=Ir(s,Zi(Nc));return hr(r,O,n,s,u)}),pp=De(function(r,s){var u=Ir(s,Zi(pp));return hr(r,A,n,s,u)}),Jw=pr(function(r,s){return hr(r,j,n,n,n,s)});function Xw(r,s){if(typeof r!="function")throw new hn(l);return s=s===n?s:Me(s),De(r,s)}function e3(r,s){if(typeof r!="function")throw new hn(l);return s=s==null?0:_t(Me(s),0),De(function(u){var g=u[s],m=Mr(u,0,s);return g&&Ar(m,g),Jt(r,this,m)})}function t3(r,s,u){var g=!0,m=!0;if(typeof r!="function")throw new hn(l);return ct(u)&&(g="leading"in u?!!u.leading:g,m="trailing"in u?!!u.trailing:m),hp(r,s,{leading:g,maxWait:s,trailing:m})}function n3(r){return lp(r,1)}function r3(r,s){return Nc(xc(s),r)}function i3(){if(!arguments.length)return[];var r=arguments[0];return Oe(r)?r:[r]}function s3(r){return gn(r,b)}function o3(r,s){return s=typeof s=="function"?s:n,gn(r,b,s)}function a3(r){return gn(r,p|b)}function l3(r,s){return s=typeof s=="function"?s:n,gn(r,p|b,s)}function c3(r,s){return s==null||th(r,s,$t(s))}function In(r,s){return r===s||r!==r&&s!==s}var u3=ra(uc),d3=ra(function(r,s){return r>=s}),fi=ah(function(){return arguments}())?ah:function(r){return ft(r)&&et.call(r,"callee")&&!Kf.call(r,"callee")},Oe=U.isArray,f3=Tf?Xt(Tf):_b;function Zt(r){return r!=null&&fa(r.length)&&!vr(r)}function ht(r){return ft(r)&&Zt(r)}function h3(r){return r===!0||r===!1||ft(r)&&jt(r)==re}var Br=Sy||Gc,p3=Af?Xt(Af):wb;function g3(r){return ft(r)&&r.nodeType===1&&!Us(r)}function v3(r){if(r==null)return!0;if(Zt(r)&&(Oe(r)||typeof r=="string"||typeof r.splice=="function"||Br(r)||Ki(r)||fi(r)))return!r.length;var s=Lt(r);if(s==qe||s==Ct)return!r.size;if(Ns(r))return!hc(r).length;for(var u in r)if(et.call(r,u))return!1;return!0}function m3(r,s){return Ms(r,s)}function y3(r,s,u){u=typeof u=="function"?u:n;var g=u?u(r,s):n;return g===n?Ms(r,s,n,u):!!g}function Dc(r){if(!ft(r))return!1;var s=jt(r);return s==Ke||s==Te||typeof r.message=="string"&&typeof r.name=="string"&&!Us(r)}function b3(r){return typeof r=="number"&&Gf(r)}function vr(r){if(!ct(r))return!1;var s=jt(r);return s==oe||s==Z||s==G||s==ri}function gp(r){return typeof r=="number"&&r==Me(r)}function fa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=le}function ct(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ft(r){return r!=null&&typeof r=="object"}var vp=If?Xt(If):$b;function _3(r,s){return r===s||fc(r,s,Ac(s))}function w3(r,s,u){return u=typeof u=="function"?u:n,fc(r,s,Ac(s),u)}function x3(r){return mp(r)&&r!=+r}function $3(r){if(o_(r))throw new Ie(a);return lh(r)}function E3(r){return r===null}function k3(r){return r==null}function mp(r){return typeof r=="number"||ft(r)&&jt(r)==xt}function Us(r){if(!ft(r)||jt(r)!=Bt)return!1;var s=Do(r);if(s===null)return!0;var u=et.call(s,"constructor")&&s.constructor;return typeof u=="function"&&u instanceof u&&Mo.call(u)==wy}var Uc=Rf?Xt(Rf):Eb;function C3(r){return gp(r)&&r>=-le&&r<=le}var yp=Of?Xt(Of):kb;function ha(r){return typeof r=="string"||!Oe(r)&&ft(r)&&jt(r)==Yt}function tn(r){return typeof r=="symbol"||ft(r)&&jt(r)==Hn}var Ki=Lf?Xt(Lf):Cb;function S3(r){return r===n}function T3(r){return ft(r)&&Lt(r)==En}function A3(r){return ft(r)&&jt(r)==Ae}var I3=ra(pc),R3=ra(function(r,s){return r<=s});function bp(r){if(!r)return[];if(Zt(r))return ha(r)?Tn(r):qt(r);if(Ss&&r[Ss])return cy(r[Ss]());var s=Lt(r),u=s==qe?tc:s==Ct?Oo:Vi;return u(r)}function mr(r){if(!r)return r===0?r:0;if(r=yn(r),r===Y||r===-Y){var s=r<0?-1:1;return s*Q}return r===r?r:0}function Me(r){var s=mr(r),u=s%1;return s===s?u?s-u:s:0}function _p(r){return r?li(Me(r),0,ve):0}function yn(r){if(typeof r=="number")return r;if(tn(r))return me;if(ct(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ct(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Df(r);var u=f2.test(r);return u||p2.test(r)?Z2(r.slice(2),u?2:8):d2.test(r)?me:+r}function wp(r){return qn(r,Kt(r))}function O3(r){return r?li(Me(r),-le,le):r===0?r:0}function Je(r){return r==null?"":en(r)}var L3=Wi(function(r,s){if(Ns(s)||Zt(s)){qn(s,$t(s),r);return}for(var u in s)et.call(s,u)&&Os(r,u,s[u])}),xp=Wi(function(r,s){qn(s,Kt(s),r)}),pa=Wi(function(r,s,u,g){qn(s,Kt(s),r,g)}),P3=Wi(function(r,s,u,g){qn(s,$t(s),r,g)}),M3=pr(ac);function B3(r,s){var u=Hi(r);return s==null?u:eh(u,s)}var j3=De(function(r,s){r=tt(r);var u=-1,g=s.length,m=g>2?s[2]:n;for(m&&Nt(s[0],s[1],m)&&(g=1);++u<g;)for(var $=s[u],T=Kt($),I=-1,M=T.length;++I<M;){var z=T[I],H=r[z];(H===n||In(H,Ui[z])&&!et.call(r,z))&&(r[z]=$[z])}return r}),N3=De(function(r){return r.push(n,Dh),Jt($p,n,r)});function D3(r,s){return Mf(r,be(s,3),Wn)}function U3(r,s){return Mf(r,be(s,3),cc)}function F3(r,s){return r==null?r:lc(r,be(s,3),Kt)}function z3(r,s){return r==null?r:sh(r,be(s,3),Kt)}function H3(r,s){return r&&Wn(r,be(s,3))}function W3(r,s){return r&&cc(r,be(s,3))}function q3(r){return r==null?[]:Go(r,$t(r))}function Z3(r){return r==null?[]:Go(r,Kt(r))}function Fc(r,s,u){var g=r==null?n:ci(r,s);return g===n?u:g}function K3(r,s){return r!=null&&zh(r,s,vb)}function zc(r,s){return r!=null&&zh(r,s,mb)}var V3=Ph(function(r,s,u){s!=null&&typeof s.toString!="function"&&(s=Bo.call(s)),r[s]=u},Wc(Vt)),G3=Ph(function(r,s,u){s!=null&&typeof s.toString!="function"&&(s=Bo.call(s)),et.call(r,s)?r[s].push(u):r[s]=[u]},be),Q3=De(Ps);function $t(r){return Zt(r)?Jf(r):hc(r)}function Kt(r){return Zt(r)?Jf(r,!0):Sb(r)}function Y3(r,s){var u={};return s=be(s,3),Wn(r,function(g,m,$){fr(u,s(g,m,$),g)}),u}function J3(r,s){var u={};return s=be(s,3),Wn(r,function(g,m,$){fr(u,m,s(g,m,$))}),u}var X3=Wi(function(r,s,u){Qo(r,s,u)}),$p=Wi(function(r,s,u,g){Qo(r,s,u,g)}),ex=pr(function(r,s){var u={};if(r==null)return u;var g=!1;s=at(s,function($){return $=Pr($,r),g||(g=$.length>1),$}),qn(r,Sc(r),u),g&&(u=gn(u,p|v|b,Vb));for(var m=s.length;m--;)bc(u,s[m]);return u});function tx(r,s){return Ep(r,da(be(s)))}var nx=pr(function(r,s){return r==null?{}:Ab(r,s)});function Ep(r,s){if(r==null)return{};var u=at(Sc(r),function(g){return[g]});return s=be(s),gh(r,u,function(g,m){return s(g,m[0])})}function rx(r,s,u){s=Pr(s,r);var g=-1,m=s.length;for(m||(m=1,r=n);++g<m;){var $=r==null?n:r[Zn(s[g])];$===n&&(g=m,$=u),r=vr($)?$.call(r):$}return r}function ix(r,s,u){return r==null?r:Bs(r,s,u)}function sx(r,s,u,g){return g=typeof g=="function"?g:n,r==null?r:Bs(r,s,u,g)}var kp=jh($t),Cp=jh(Kt);function ox(r,s,u){var g=Oe(r),m=g||Br(r)||Ki(r);if(s=be(s,4),u==null){var $=r&&r.constructor;m?u=g?new $:[]:ct(r)?u=vr($)?Hi(Do(r)):{}:u={}}return(m?fn:Wn)(r,function(T,I,M){return s(u,T,I,M)}),u}function ax(r,s){return r==null?!0:bc(r,s)}function lx(r,s,u){return r==null?r:_h(r,s,xc(u))}function cx(r,s,u,g){return g=typeof g=="function"?g:n,r==null?r:_h(r,s,xc(u),g)}function Vi(r){return r==null?[]:ec(r,$t(r))}function ux(r){return r==null?[]:ec(r,Kt(r))}function dx(r,s,u){return u===n&&(u=s,s=n),u!==n&&(u=yn(u),u=u===u?u:0),s!==n&&(s=yn(s),s=s===s?s:0),li(yn(r),s,u)}function fx(r,s,u){return s=mr(s),u===n?(u=s,s=0):u=mr(u),r=yn(r),yb(r,s,u)}function hx(r,s,u){if(u&&typeof u!="boolean"&&Nt(r,s,u)&&(s=u=n),u===n&&(typeof s=="boolean"?(u=s,s=n):typeof r=="boolean"&&(u=r,r=n)),r===n&&s===n?(r=0,s=1):(r=mr(r),s===n?(s=r,r=0):s=mr(s)),r>s){var g=r;r=s,s=g}if(u||r%1||s%1){var m=Qf();return Ot(r+m*(s-r+q2("1e-"+((m+"").length-1))),s)}return vc(r,s)}var px=qi(function(r,s,u){return s=s.toLowerCase(),r+(u?Sp(s):s)});function Sp(r){return Hc(Je(r).toLowerCase())}function Tp(r){return r=Je(r),r&&r.replace(v2,iy).replace(M2,"")}function gx(r,s,u){r=Je(r),s=en(s);var g=r.length;u=u===n?g:li(Me(u),0,g);var m=u;return u-=s.length,u>=0&&r.slice(u,m)==s}function vx(r){return r=Je(r),r&&Qm.test(r)?r.replace(sf,sy):r}function mx(r){return r=Je(r),r&&n2.test(r)?r.replace(Nl,"\\$&"):r}var yx=qi(function(r,s,u){return r+(u?"-":"")+s.toLowerCase()}),bx=qi(function(r,s,u){return r+(u?" ":"")+s.toLowerCase()}),_x=Rh("toLowerCase");function wx(r,s,u){r=Je(r),s=Me(s);var g=s?Ni(r):0;if(!s||g>=s)return r;var m=(s-g)/2;return na(Ho(m),u)+r+na(zo(m),u)}function xx(r,s,u){r=Je(r),s=Me(s);var g=s?Ni(r):0;return s&&g<s?r+na(s-g,u):r}function $x(r,s,u){r=Je(r),s=Me(s);var g=s?Ni(r):0;return s&&g<s?na(s-g,u)+r:r}function Ex(r,s,u){return u||s==null?s=0:s&&(s=+s),Ry(Je(r).replace(Dl,""),s||0)}function kx(r,s,u){return(u?Nt(r,s,u):s===n)?s=1:s=Me(s),mc(Je(r),s)}function Cx(){var r=arguments,s=Je(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var Sx=qi(function(r,s,u){return r+(u?"_":"")+s.toLowerCase()});function Tx(r,s,u){return u&&typeof u!="number"&&Nt(r,s,u)&&(s=u=n),u=u===n?ve:u>>>0,u?(r=Je(r),r&&(typeof s=="string"||s!=null&&!Uc(s))&&(s=en(s),!s&&ji(r))?Mr(Tn(r),0,u):r.split(s,u)):[]}var Ax=qi(function(r,s,u){return r+(u?" ":"")+Hc(s)});function Ix(r,s,u){return r=Je(r),u=u==null?0:li(Me(u),0,r.length),s=en(s),r.slice(u,u+s.length)==s}function Rx(r,s,u){var g=y.templateSettings;u&&Nt(r,s,u)&&(s=n),r=Je(r),s=pa({},s,g,Nh);var m=pa({},s.imports,g.imports,Nh),$=$t(m),T=ec(m,$),I,M,z=0,H=s.interpolate||So,V="__p += '",ie=nc((s.escape||So).source+"|"+H.source+"|"+(H===of?u2:So).source+"|"+(s.evaluate||So).source+"|$","g"),ge="//# sourceURL="+(et.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++U2+"]")+`
`;r.replace(ie,function(xe,ze,Ze,nn,Dt,rn){return Ze||(Ze=nn),V+=r.slice(z,rn).replace(m2,oy),ze&&(I=!0,V+=`' +
__e(`+ze+`) +
'`),Dt&&(M=!0,V+=`';
`+Dt+`;
__p += '`),Ze&&(V+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),z=rn+xe.length,xe}),V+=`';
`;var we=et.call(s,"variable")&&s.variable;if(!we)V=`with (obj) {
`+V+`
}
`;else if(l2.test(we))throw new Ie(c);V=(M?V.replace(Eo,""):V).replace(ko,"$1").replace(Co,"$1;"),V="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var Be=Ip(function(){return Ge($,ge+"return "+V).apply(n,T)});if(Be.source=V,Dc(Be))throw Be;return Be}function Ox(r){return Je(r).toLowerCase()}function Lx(r){return Je(r).toUpperCase()}function Px(r,s,u){if(r=Je(r),r&&(u||s===n))return Df(r);if(!r||!(s=en(s)))return r;var g=Tn(r),m=Tn(s),$=Uf(g,m),T=Ff(g,m)+1;return Mr(g,$,T).join("")}function Mx(r,s,u){if(r=Je(r),r&&(u||s===n))return r.slice(0,Hf(r)+1);if(!r||!(s=en(s)))return r;var g=Tn(r),m=Ff(g,Tn(s))+1;return Mr(g,0,m).join("")}function Bx(r,s,u){if(r=Je(r),r&&(u||s===n))return r.replace(Dl,"");if(!r||!(s=en(s)))return r;var g=Tn(r),m=Uf(g,Tn(s));return Mr(g,m).join("")}function jx(r,s){var u=J,g=te;if(ct(s)){var m="separator"in s?s.separator:m;u="length"in s?Me(s.length):u,g="omission"in s?en(s.omission):g}r=Je(r);var $=r.length;if(ji(r)){var T=Tn(r);$=T.length}if(u>=$)return r;var I=u-Ni(g);if(I<1)return g;var M=T?Mr(T,0,I).join(""):r.slice(0,I);if(m===n)return M+g;if(T&&(I+=M.length-I),Uc(m)){if(r.slice(I).search(m)){var z,H=M;for(m.global||(m=nc(m.source,Je(af.exec(m))+"g")),m.lastIndex=0;z=m.exec(H);)var V=z.index;M=M.slice(0,V===n?I:V)}}else if(r.indexOf(en(m),I)!=I){var ie=M.lastIndexOf(m);ie>-1&&(M=M.slice(0,ie))}return M+g}function Nx(r){return r=Je(r),r&&Gm.test(r)?r.replace(rf,hy):r}var Dx=qi(function(r,s,u){return r+(u?" ":"")+s.toUpperCase()}),Hc=Rh("toUpperCase");function Ap(r,s,u){return r=Je(r),s=u?n:s,s===n?ly(r)?vy(r):X2(r):r.match(s)||[]}var Ip=De(function(r,s){try{return Jt(r,n,s)}catch(u){return Dc(u)?u:new Ie(u)}}),Ux=pr(function(r,s){return fn(s,function(u){u=Zn(u),fr(r,u,jc(r[u],r))}),r});function Fx(r){var s=r==null?0:r.length,u=be();return r=s?at(r,function(g){if(typeof g[1]!="function")throw new hn(l);return[u(g[0]),g[1]]}):[],De(function(g){for(var m=-1;++m<s;){var $=r[m];if(Jt($[0],this,g))return Jt($[1],this,g)}})}function zx(r){return hb(gn(r,p))}function Wc(r){return function(){return r}}function Hx(r,s){return r==null||r!==r?s:r}var Wx=Lh(),qx=Lh(!0);function Vt(r){return r}function qc(r){return ch(typeof r=="function"?r:gn(r,p))}function Zx(r){return dh(gn(r,p))}function Kx(r,s){return fh(r,gn(s,p))}var Vx=De(function(r,s){return function(u){return Ps(u,r,s)}}),Gx=De(function(r,s){return function(u){return Ps(r,u,s)}});function Zc(r,s,u){var g=$t(s),m=Go(s,g);u==null&&!(ct(s)&&(m.length||!g.length))&&(u=s,s=r,r=this,m=Go(s,$t(s)));var $=!(ct(u)&&"chain"in u)||!!u.chain,T=vr(r);return fn(m,function(I){var M=s[I];r[I]=M,T&&(r.prototype[I]=function(){var z=this.__chain__;if($||z){var H=r(this.__wrapped__),V=H.__actions__=qt(this.__actions__);return V.push({func:M,args:arguments,thisArg:r}),H.__chain__=z,H}return M.apply(r,Ar([this.value()],arguments))})}),r}function Qx(){return St._===this&&(St._=xy),this}function Kc(){}function Yx(r){return r=Me(r),De(function(s){return hh(s,r)})}var Jx=Ec(at),Xx=Ec(Pf),e4=Ec(Gl);function Rp(r){return Rc(r)?Ql(Zn(r)):Ib(r)}function t4(r){return function(s){return r==null?n:ci(r,s)}}var n4=Mh(),r4=Mh(!0);function Vc(){return[]}function Gc(){return!1}function i4(){return{}}function s4(){return""}function o4(){return!0}function a4(r,s){if(r=Me(r),r<1||r>le)return[];var u=ve,g=Ot(r,ve);s=be(s),r-=ve;for(var m=Xl(g,s);++u<r;)s(u);return m}function l4(r){return Oe(r)?at(r,Zn):tn(r)?[r]:qt(Yh(Je(r)))}function c4(r){var s=++_y;return Je(r)+s}var u4=ta(function(r,s){return r+s},0),d4=kc("ceil"),f4=ta(function(r,s){return r/s},1),h4=kc("floor");function p4(r){return r&&r.length?Vo(r,Vt,uc):n}function g4(r,s){return r&&r.length?Vo(r,be(s,2),uc):n}function v4(r){return jf(r,Vt)}function m4(r,s){return jf(r,be(s,2))}function y4(r){return r&&r.length?Vo(r,Vt,pc):n}function b4(r,s){return r&&r.length?Vo(r,be(s,2),pc):n}var _4=ta(function(r,s){return r*s},1),w4=kc("round"),x4=ta(function(r,s){return r-s},0);function $4(r){return r&&r.length?Jl(r,Vt):0}function E4(r,s){return r&&r.length?Jl(r,be(s,2)):0}return y.after=Zw,y.ary=lp,y.assign=L3,y.assignIn=xp,y.assignInWith=pa,y.assignWith=P3,y.at=M3,y.before=cp,y.bind=jc,y.bindAll=Ux,y.bindKey=up,y.castArray=i3,y.chain=sp,y.chunk=h_,y.compact=p_,y.concat=g_,y.cond=Fx,y.conforms=zx,y.constant=Wc,y.countBy=$w,y.create=B3,y.curry=dp,y.curryRight=fp,y.debounce=hp,y.defaults=j3,y.defaultsDeep=N3,y.defer=Kw,y.delay=Vw,y.difference=v_,y.differenceBy=m_,y.differenceWith=y_,y.drop=b_,y.dropRight=__,y.dropRightWhile=w_,y.dropWhile=x_,y.fill=$_,y.filter=kw,y.flatMap=Tw,y.flatMapDeep=Aw,y.flatMapDepth=Iw,y.flatten=tp,y.flattenDeep=E_,y.flattenDepth=k_,y.flip=Gw,y.flow=Wx,y.flowRight=qx,y.fromPairs=C_,y.functions=q3,y.functionsIn=Z3,y.groupBy=Rw,y.initial=T_,y.intersection=A_,y.intersectionBy=I_,y.intersectionWith=R_,y.invert=V3,y.invertBy=G3,y.invokeMap=Lw,y.iteratee=qc,y.keyBy=Pw,y.keys=$t,y.keysIn=Kt,y.map=la,y.mapKeys=Y3,y.mapValues=J3,y.matches=Zx,y.matchesProperty=Kx,y.memoize=ua,y.merge=X3,y.mergeWith=$p,y.method=Vx,y.methodOf=Gx,y.mixin=Zc,y.negate=da,y.nthArg=Yx,y.omit=ex,y.omitBy=tx,y.once=Qw,y.orderBy=Mw,y.over=Jx,y.overArgs=Yw,y.overEvery=Xx,y.overSome=e4,y.partial=Nc,y.partialRight=pp,y.partition=Bw,y.pick=nx,y.pickBy=Ep,y.property=Rp,y.propertyOf=t4,y.pull=M_,y.pullAll=rp,y.pullAllBy=B_,y.pullAllWith=j_,y.pullAt=N_,y.range=n4,y.rangeRight=r4,y.rearg=Jw,y.reject=Dw,y.remove=D_,y.rest=Xw,y.reverse=Mc,y.sampleSize=Fw,y.set=ix,y.setWith=sx,y.shuffle=zw,y.slice=U_,y.sortBy=qw,y.sortedUniq=K_,y.sortedUniqBy=V_,y.split=Tx,y.spread=e3,y.tail=G_,y.take=Q_,y.takeRight=Y_,y.takeRightWhile=J_,y.takeWhile=X_,y.tap=pw,y.throttle=t3,y.thru=aa,y.toArray=bp,y.toPairs=kp,y.toPairsIn=Cp,y.toPath=l4,y.toPlainObject=wp,y.transform=ox,y.unary=n3,y.union=ew,y.unionBy=tw,y.unionWith=nw,y.uniq=rw,y.uniqBy=iw,y.uniqWith=sw,y.unset=ax,y.unzip=Bc,y.unzipWith=ip,y.update=lx,y.updateWith=cx,y.values=Vi,y.valuesIn=ux,y.without=ow,y.words=Ap,y.wrap=r3,y.xor=aw,y.xorBy=lw,y.xorWith=cw,y.zip=uw,y.zipObject=dw,y.zipObjectDeep=fw,y.zipWith=hw,y.entries=kp,y.entriesIn=Cp,y.extend=xp,y.extendWith=pa,Zc(y,y),y.add=u4,y.attempt=Ip,y.camelCase=px,y.capitalize=Sp,y.ceil=d4,y.clamp=dx,y.clone=s3,y.cloneDeep=a3,y.cloneDeepWith=l3,y.cloneWith=o3,y.conformsTo=c3,y.deburr=Tp,y.defaultTo=Hx,y.divide=f4,y.endsWith=gx,y.eq=In,y.escape=vx,y.escapeRegExp=mx,y.every=Ew,y.find=Cw,y.findIndex=Xh,y.findKey=D3,y.findLast=Sw,y.findLastIndex=ep,y.findLastKey=U3,y.floor=h4,y.forEach=op,y.forEachRight=ap,y.forIn=F3,y.forInRight=z3,y.forOwn=H3,y.forOwnRight=W3,y.get=Fc,y.gt=u3,y.gte=d3,y.has=K3,y.hasIn=zc,y.head=np,y.identity=Vt,y.includes=Ow,y.indexOf=S_,y.inRange=fx,y.invoke=Q3,y.isArguments=fi,y.isArray=Oe,y.isArrayBuffer=f3,y.isArrayLike=Zt,y.isArrayLikeObject=ht,y.isBoolean=h3,y.isBuffer=Br,y.isDate=p3,y.isElement=g3,y.isEmpty=v3,y.isEqual=m3,y.isEqualWith=y3,y.isError=Dc,y.isFinite=b3,y.isFunction=vr,y.isInteger=gp,y.isLength=fa,y.isMap=vp,y.isMatch=_3,y.isMatchWith=w3,y.isNaN=x3,y.isNative=$3,y.isNil=k3,y.isNull=E3,y.isNumber=mp,y.isObject=ct,y.isObjectLike=ft,y.isPlainObject=Us,y.isRegExp=Uc,y.isSafeInteger=C3,y.isSet=yp,y.isString=ha,y.isSymbol=tn,y.isTypedArray=Ki,y.isUndefined=S3,y.isWeakMap=T3,y.isWeakSet=A3,y.join=O_,y.kebabCase=yx,y.last=mn,y.lastIndexOf=L_,y.lowerCase=bx,y.lowerFirst=_x,y.lt=I3,y.lte=R3,y.max=p4,y.maxBy=g4,y.mean=v4,y.meanBy=m4,y.min=y4,y.minBy=b4,y.stubArray=Vc,y.stubFalse=Gc,y.stubObject=i4,y.stubString=s4,y.stubTrue=o4,y.multiply=_4,y.nth=P_,y.noConflict=Qx,y.noop=Kc,y.now=ca,y.pad=wx,y.padEnd=xx,y.padStart=$x,y.parseInt=Ex,y.random=hx,y.reduce=jw,y.reduceRight=Nw,y.repeat=kx,y.replace=Cx,y.result=rx,y.round=w4,y.runInContext=P,y.sample=Uw,y.size=Hw,y.snakeCase=Sx,y.some=Ww,y.sortedIndex=F_,y.sortedIndexBy=z_,y.sortedIndexOf=H_,y.sortedLastIndex=W_,y.sortedLastIndexBy=q_,y.sortedLastIndexOf=Z_,y.startCase=Ax,y.startsWith=Ix,y.subtract=x4,y.sum=$4,y.sumBy=E4,y.template=Rx,y.times=a4,y.toFinite=mr,y.toInteger=Me,y.toLength=_p,y.toLower=Ox,y.toNumber=yn,y.toSafeInteger=O3,y.toString=Je,y.toUpper=Lx,y.trim=Px,y.trimEnd=Mx,y.trimStart=Bx,y.truncate=jx,y.unescape=Nx,y.uniqueId=c4,y.upperCase=Dx,y.upperFirst=Hc,y.each=op,y.eachRight=ap,y.first=np,Zc(y,function(){var r={};return Wn(y,function(s,u){et.call(y.prototype,u)||(r[u]=s)}),r}(),{chain:!1}),y.VERSION=i,fn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),fn(["drop","take"],function(r,s){We.prototype[r]=function(u){u=u===n?1:_t(Me(u),0);var g=this.__filtered__&&!s?new We(this):this.clone();return g.__filtered__?g.__takeCount__=Ot(u,g.__takeCount__):g.__views__.push({size:Ot(u,ve),type:r+(g.__dir__<0?"Right":"")}),g},We.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),fn(["filter","map","takeWhile"],function(r,s){var u=s+1,g=u==ee||u==q;We.prototype[r]=function(m){var $=this.clone();return $.__iteratees__.push({iteratee:be(m,3),type:u}),$.__filtered__=$.__filtered__||g,$}}),fn(["head","last"],function(r,s){var u="take"+(s?"Right":"");We.prototype[r]=function(){return this[u](1).value()[0]}}),fn(["initial","tail"],function(r,s){var u="drop"+(s?"":"Right");We.prototype[r]=function(){return this.__filtered__?new We(this):this[u](1)}}),We.prototype.compact=function(){return this.filter(Vt)},We.prototype.find=function(r){return this.filter(r).head()},We.prototype.findLast=function(r){return this.reverse().find(r)},We.prototype.invokeMap=De(function(r,s){return typeof r=="function"?new We(this):this.map(function(u){return Ps(u,r,s)})}),We.prototype.reject=function(r){return this.filter(da(be(r)))},We.prototype.slice=function(r,s){r=Me(r);var u=this;return u.__filtered__&&(r>0||s<0)?new We(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),s!==n&&(s=Me(s),u=s<0?u.dropRight(-s):u.take(s-r)),u)},We.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},We.prototype.toArray=function(){return this.take(ve)},Wn(We.prototype,function(r,s){var u=/^(?:filter|find|map|reject)|While$/.test(s),g=/^(?:head|last)$/.test(s),m=y[g?"take"+(s=="last"?"Right":""):s],$=g||/^find/.test(s);m&&(y.prototype[s]=function(){var T=this.__wrapped__,I=g?[1]:arguments,M=T instanceof We,z=I[0],H=M||Oe(T),V=function(ze){var Ze=m.apply(y,Ar([ze],I));return g&&ie?Ze[0]:Ze};H&&u&&typeof z=="function"&&z.length!=1&&(M=H=!1);var ie=this.__chain__,ge=!!this.__actions__.length,we=$&&!ie,Be=M&&!ge;if(!$&&H){T=Be?T:new We(this);var xe=r.apply(T,I);return xe.__actions__.push({func:aa,args:[V],thisArg:n}),new pn(xe,ie)}return we&&Be?r.apply(this,I):(xe=this.thru(V),we?g?xe.value()[0]:xe.value():xe)})}),fn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Lo[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",g=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var m=arguments;if(g&&!this.__chain__){var $=this.value();return s.apply(Oe($)?$:[],m)}return this[u](function(T){return s.apply(Oe(T)?T:[],m)})}}),Wn(We.prototype,function(r,s){var u=y[s];if(u){var g=u.name+"";et.call(zi,g)||(zi[g]=[]),zi[g].push({name:s,func:u})}}),zi[ea(n,S).name]=[{name:"wrapper",func:n}],We.prototype.clone=Ny,We.prototype.reverse=Dy,We.prototype.value=Uy,y.prototype.at=gw,y.prototype.chain=vw,y.prototype.commit=mw,y.prototype.next=yw,y.prototype.plant=_w,y.prototype.reverse=ww,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=xw,y.prototype.first=y.prototype.head,Ss&&(y.prototype[Ss]=bw),y},Di=my();ii?((ii.exports=Di)._=Di,ql._=Di):St._=Di}).call(wt)})(Fa,Fa.exports);var G1=Fa.exports;const ok=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],Q1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],ak=[...Q1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],tW=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],lk=()=>{const t=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));t.push(...o)}else for(let o=0;o<16;o+=1)t[o]=Math.round(Math.random()*65535)>>8;t[6]=t[6]&15|64,t[8]=t[8]&63|128;const e=String.fromCharCode(...t);return btoa(e).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ms=()=>({id:lk(),width:"medium"}),_d=t=>({...ms(),columnType:"Following",...t}),Y1=t=>({...ms(),columnType:"Notification",...t}),J1=t=>({...ms(),columnType:"Relays",...t}),X1=()=>J1({name:"日本語",relayUrls:Q1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),wd=t=>({...ms(),columnType:"Posts",...t}),ev=t=>({...ms(),columnType:"Reactions",...t}),xd=t=>({...ms(),columnType:"Search",...t});var Ve;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},t.getValidEnumValues=o=>{const a=t.objectKeys(o).filter(c=>typeof o[o[c]]!="number"),l={};for(const c of a)l[c]=o[c];return t.objectValues(l)},t.objectValues=o=>t.objectKeys(o).map(function(a){return o[a]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},t.find=(o,a)=>{for(const l of o)if(a(l))return l},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}t.joinValues=i,t.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ve||(Ve={}));var Iu;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Iu||(Iu={}));const ce=Ve.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=t=>{switch(typeof t){case"undefined":return ce.undefined;case"string":return ce.string;case"number":return isNaN(t)?ce.nan:ce.number;case"boolean":return ce.boolean;case"function":return ce.function;case"bigint":return ce.bigint;case"symbol":return ce.symbol;case"object":return Array.isArray(t)?ce.array:t===null?ce.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?ce.promise:typeof Map<"u"&&t instanceof Map?ce.map:typeof Set<"u"&&t instanceof Set?ce.set:typeof Date<"u"&&t instanceof Date?ce.date:ce.object;default:return ce.unknown}},X=Ve.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),ck=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Mn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let c=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(c[f]=c[f]||{_errors:[]},c[f]._errors.push(n(l))):c[f]=c[f]||{_errors:[]},c=c[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ve.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Mn.create=t=>new Mn(t);const Gs=(t,e)=>{let n;switch(t.code){case X.invalid_type:t.received===ce.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ve.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ve.joinValues(t.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ve.joinValues(t.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${Ve.joinValues(t.options)}, received '${t.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ve.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case X.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case X.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ve.assertNever(t)}return{message:n}};let tv=Gs;function uk(t){tv=t}function za(){return tv}const Ha=t=>{const{data:e,path:n,errorMaps:i,issueData:o}=t,a=[...n,...o.path||[]],l={...o,path:a};let c="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)c=f(l,{data:e,defaultError:c}).message;return{...o,path:a,message:o.message||c}},dk=[];function fe(t,e){const n=Ha({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,za(),Gs].filter(i=>!!i)});t.common.issues.push(n)}class Mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const i=[];for(const o of n){if(o.status==="aborted")return Re;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Mt.mergeObjectSync(e,i)}static mergeObjectSync(e,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Re;a.status==="dirty"&&e.dirty(),l.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:e.value,value:i}}}const Re=Object.freeze({status:"aborted"}),nv=t=>({status:"dirty",value:t}),zt=t=>({status:"valid",value:t}),Ru=t=>t.status==="aborted",Ou=t=>t.status==="dirty",Qs=t=>t.status==="valid",Wa=t=>typeof Promise<"u"&&t instanceof Promise;var ye;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(ye||(ye={}));class Jn{constructor(e,n,i,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const ag=(t,e)=>{if(Qs(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Mn(t.common.issues);return this._error=n,this._error}}};function Pe(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:i,description:o}=t;if(e&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(l,c)=>l.code!=="invalid_type"?{message:c.defaultError}:typeof c.data>"u"?{message:i??c.defaultError}:{message:n??c.defaultError},description:o}}class Ne{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return zr(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:zr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Mt,ctx:{common:e.parent.common,data:e.data,parsedType:zr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Wa(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const i=this.safeParse(e,n);if(i.success)return i.data;throw i.error}safeParse(e,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:zr(e)},a=this._parseSync({data:e,path:o.path,parent:o});return ag(o,a)}async parseAsync(e,n){const i=await this.safeParseAsync(e,n);if(i.success)return i.data;throw i.error}async safeParseAsync(e,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:zr(e)},o=this._parse({data:e,path:i.path,parent:i}),a=await(Wa(o)?o:Promise.resolve(o));return ag(i,a)}refine(e,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=e(o),c=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(c(),!1)):l?!0:(c(),!1)})}refinement(e,n){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(e){return new Dn({schema:this,typeName:ke.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return $r.create(this,this._def)}nullable(){return Ti.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Bn.create(this,this._def)}promise(){return ls.create(this,this._def)}or(e){return eo.create([this,e],this._def)}and(e){return to.create(this,e,this._def)}transform(e){return new Dn({...Pe(this._def),schema:this,typeName:ke.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new oo({...Pe(this._def),innerType:this,defaultValue:n,typeName:ke.ZodDefault})}brand(){return new iv({typeName:ke.ZodBranded,type:this,...Pe(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Va({...Pe(this._def),innerType:this,catchValue:n,typeName:ke.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return bo.create(this,e)}readonly(){return Qa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const fk=/^c[^\s-]{8,}$/i,hk=/^[a-z][a-z0-9]*$/,pk=/^[0-9A-HJKMNP-TV-Z]{26}$/,gk=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,vk=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,mk="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let su;const yk=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,bk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,_k=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function wk(t,e){return!!((e==="v4"||!e)&&yk.test(t)||(e==="v6"||!e)&&bk.test(t))}class Pn extends Ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==ce.string){const a=this._getOrReturnCtx(e);return fe(a,{code:X.invalid_type,expected:ce.string,received:a.parsedType}),Re}const i=new Mt;let o;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(o=this._getOrReturnCtx(e,o),fe(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")e.data.length>a.value&&(o=this._getOrReturnCtx(e,o),fe(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=e.data.length>a.value,c=e.data.length<a.value;(l||c)&&(o=this._getOrReturnCtx(e,o),l?fe(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):c&&fe(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")vk.test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")su||(su=new RegExp(mk,"u")),su.test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")gk.test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")fk.test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")hk.test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")pk.test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),fe(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(e,o),fe(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(o=this._getOrReturnCtx(e,o),fe(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(o=this._getOrReturnCtx(e,o),fe(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?_k(a).test(e.data)||(o=this._getOrReturnCtx(e,o),fe(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?wk(e.data,a.version)||(o=this._getOrReturnCtx(e,o),fe(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):Ve.assertNever(a);return{status:i.value,value:e.data}}_regex(e,n,i){return this.refinement(o=>e.test(o),{validation:n,code:X.invalid_string,...ye.errToObj(i)})}_addCheck(e){return new Pn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ye.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ye.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ye.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ye.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ye.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ye.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ye.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ye.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(n=e?.offset)!==null&&n!==void 0?n:!1,...ye.errToObj(e?.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...ye.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...ye.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...ye.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...ye.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...ye.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...ye.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...ye.errToObj(n)})}nonempty(e){return this.min(1,ye.errToObj(e))}trim(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Pn.create=t=>{var e;return new Pn({checks:[],typeName:ke.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Pe(t)})};function xk(t,e){const n=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(t.toFixed(o).replace(".","")),l=parseInt(e.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Vr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==ce.number){const a=this._getOrReturnCtx(e);return fe(a,{code:X.invalid_type,expected:ce.number,received:a.parsedType}),Re}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="int"?Ve.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),fe(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?xk(e.data,a.value)!==0&&(i=this._getOrReturnCtx(e,i),fe(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),fe(i,{code:X.not_finite,message:a.message}),o.dirty()):Ve.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ye.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ye.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ye.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ye.toString(n))}setLimit(e,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:ye.toString(o)}]})}_addCheck(e){return new Vr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ye.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ye.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ye.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ye.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ye.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ye.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:ye.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ye.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ye.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ve.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Vr.create=t=>new Vr({checks:[],typeName:ke.ZodNumber,coerce:t?.coerce||!1,...Pe(t)});class Gr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==ce.bigint){const a=this._getOrReturnCtx(e);return fe(a,{code:X.invalid_type,expected:ce.bigint,received:a.parsedType}),Re}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ve.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,ye.toString(n))}gt(e,n){return this.setLimit("min",e,!1,ye.toString(n))}lte(e,n){return this.setLimit("max",e,!0,ye.toString(n))}lt(e,n){return this.setLimit("max",e,!1,ye.toString(n))}setLimit(e,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:ye.toString(o)}]})}_addCheck(e){return new Gr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ye.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ye.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ye.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ye.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:ye.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Gr.create=t=>{var e;return new Gr({checks:[],typeName:ke.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Pe(t)})};class Ys extends Ne{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==ce.boolean){const i=this._getOrReturnCtx(e);return fe(i,{code:X.invalid_type,expected:ce.boolean,received:i.parsedType}),Re}return zt(e.data)}}Ys.create=t=>new Ys({typeName:ke.ZodBoolean,coerce:t?.coerce||!1,...Pe(t)});class Ci extends Ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==ce.date){const a=this._getOrReturnCtx(e);return fe(a,{code:X.invalid_type,expected:ce.date,received:a.parsedType}),Re}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return fe(a,{code:X.invalid_date}),Re}const i=new Mt;let o;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(o=this._getOrReturnCtx(e,o),fe(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(o=this._getOrReturnCtx(e,o),fe(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ve.assertNever(a);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ci({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:ye.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:ye.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Ci.create=t=>new Ci({checks:[],coerce:t?.coerce||!1,typeName:ke.ZodDate,...Pe(t)});class qa extends Ne{_parse(e){if(this._getType(e)!==ce.symbol){const i=this._getOrReturnCtx(e);return fe(i,{code:X.invalid_type,expected:ce.symbol,received:i.parsedType}),Re}return zt(e.data)}}qa.create=t=>new qa({typeName:ke.ZodSymbol,...Pe(t)});class Js extends Ne{_parse(e){if(this._getType(e)!==ce.undefined){const i=this._getOrReturnCtx(e);return fe(i,{code:X.invalid_type,expected:ce.undefined,received:i.parsedType}),Re}return zt(e.data)}}Js.create=t=>new Js({typeName:ke.ZodUndefined,...Pe(t)});class Xs extends Ne{_parse(e){if(this._getType(e)!==ce.null){const i=this._getOrReturnCtx(e);return fe(i,{code:X.invalid_type,expected:ce.null,received:i.parsedType}),Re}return zt(e.data)}}Xs.create=t=>new Xs({typeName:ke.ZodNull,...Pe(t)});class as extends Ne{constructor(){super(...arguments),this._any=!0}_parse(e){return zt(e.data)}}as.create=t=>new as({typeName:ke.ZodAny,...Pe(t)});class $i extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(e){return zt(e.data)}}$i.create=t=>new $i({typeName:ke.ZodUnknown,...Pe(t)});class kr extends Ne{_parse(e){const n=this._getOrReturnCtx(e);return fe(n,{code:X.invalid_type,expected:ce.never,received:n.parsedType}),Re}}kr.create=t=>new kr({typeName:ke.ZodNever,...Pe(t)});class Za extends Ne{_parse(e){if(this._getType(e)!==ce.undefined){const i=this._getOrReturnCtx(e);return fe(i,{code:X.invalid_type,expected:ce.void,received:i.parsedType}),Re}return zt(e.data)}}Za.create=t=>new Za({typeName:ke.ZodVoid,...Pe(t)});class Bn extends Ne{_parse(e){const{ctx:n,status:i}=this._processInputParams(e),o=this._def;if(n.parsedType!==ce.array)return fe(n,{code:X.invalid_type,expected:ce.array,received:n.parsedType}),Re;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,c=n.data.length<o.exactLength.value;(l||c)&&(fe(n,{code:l?X.too_big:X.too_small,minimum:c?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(fe(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(fe(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,c)=>o.type._parseAsync(new Jn(n,l,n.path,c)))).then(l=>Mt.mergeArray(i,l));const a=[...n.data].map((l,c)=>o.type._parseSync(new Jn(n,l,n.path,c)));return Mt.mergeArray(i,a)}get element(){return this._def.type}min(e,n){return new Bn({...this._def,minLength:{value:e,message:ye.toString(n)}})}max(e,n){return new Bn({...this._def,maxLength:{value:e,message:ye.toString(n)}})}length(e,n){return new Bn({...this._def,exactLength:{value:e,message:ye.toString(n)}})}nonempty(e){return this.min(1,e)}}Bn.create=(t,e)=>new Bn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ke.ZodArray,...Pe(e)});function Ji(t){if(t instanceof ut){const e={};for(const n in t.shape){const i=t.shape[n];e[n]=$r.create(Ji(i))}return new ut({...t._def,shape:()=>e})}else return t instanceof Bn?new Bn({...t._def,type:Ji(t.element)}):t instanceof $r?$r.create(Ji(t.unwrap())):t instanceof Ti?Ti.create(Ji(t.unwrap())):t instanceof Xn?Xn.create(t.items.map(e=>Ji(e))):t}class ut extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ve.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==ce.object){const f=this._getOrReturnCtx(e);return fe(f,{code:X.invalid_type,expected:ce.object,received:f.parsedType}),Re}const{status:i,ctx:o}=this._processInputParams(e),{shape:a,keys:l}=this._getCached(),c=[];if(!(this._def.catchall instanceof kr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||c.push(f);const d=[];for(const f of l){const h=a[f],p=o.data[f];d.push({key:{status:"valid",value:f},value:h._parse(new Jn(o,p,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof kr){const f=this._def.unknownKeys;if(f==="passthrough")for(const h of c)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(f==="strict")c.length>0&&(fe(o,{code:X.unrecognized_keys,keys:c}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const h of c){const p=o.data[h];d.push({key:{status:"valid",value:h},value:f._parse(new Jn(o,p,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const h of d){const p=await h.key;f.push({key:p,value:await h.value,alwaysSet:h.alwaysSet})}return f}).then(f=>Mt.mergeObjectSync(i,f)):Mt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(e){return ye.errToObj,new ut({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,i)=>{var o,a,l,c;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(c=ye.errToObj(e).message)!==null&&c!==void 0?c:d}:{message:d}}}:{}})}strip(){return new ut({...this._def,unknownKeys:"strip"})}passthrough(){return new ut({...this._def,unknownKeys:"passthrough"})}extend(e){return new ut({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ut({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ke.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ut({...this._def,catchall:e})}pick(e){const n={};return Ve.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}omit(e){const n={};return Ve.objectKeys(this.shape).forEach(i=>{e[i]||(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}deepPartial(){return Ji(this)}partial(e){const n={};return Ve.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?n[i]=o:n[i]=o.optional()}),new ut({...this._def,shape:()=>n})}required(e){const n={};return Ve.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof $r;)a=a._def.innerType;n[i]=a}}),new ut({...this._def,shape:()=>n})}keyof(){return rv(Ve.objectKeys(this.shape))}}ut.create=(t,e)=>new ut({shape:()=>t,unknownKeys:"strip",catchall:kr.create(),typeName:ke.ZodObject,...Pe(e)});ut.strictCreate=(t,e)=>new ut({shape:()=>t,unknownKeys:"strict",catchall:kr.create(),typeName:ke.ZodObject,...Pe(e)});ut.lazycreate=(t,e)=>new ut({shape:t,unknownKeys:"strip",catchall:kr.create(),typeName:ke.ZodObject,...Pe(e)});class eo extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=this._def.options;function o(a){for(const c of a)if(c.result.status==="valid")return c.result;for(const c of a)if(c.result.status==="dirty")return n.common.issues.push(...c.ctx.common.issues),c.result;const l=a.map(c=>new Mn(c.ctx.common.issues));return fe(n,{code:X.invalid_union,unionErrors:l}),Re}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:f});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const c=l.map(d=>new Mn(d));return fe(n,{code:X.invalid_union,unionErrors:c}),Re}}get options(){return this._def.options}}eo.create=(t,e)=>new eo({options:t,typeName:ke.ZodUnion,...Pe(e)});const Sa=t=>t instanceof ro?Sa(t.schema):t instanceof Dn?Sa(t.innerType()):t instanceof io?[t.value]:t instanceof Qr?t.options:t instanceof so?Object.keys(t.enum):t instanceof oo?Sa(t._def.innerType):t instanceof Js?[void 0]:t instanceof Xs?[null]:null;class xl extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ce.object)return fe(n,{code:X.invalid_type,expected:ce.object,received:n.parsedType}),Re;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(fe(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Re)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,i){const o=new Map;for(const a of n){const l=Sa(a.shape[e]);if(!l)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const c of l){if(o.has(c))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);o.set(c,a)}}return new xl({typeName:ke.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Pe(i)})}}function Lu(t,e){const n=zr(t),i=zr(e);if(t===e)return{valid:!0,data:t};if(n===ce.object&&i===ce.object){const o=Ve.objectKeys(e),a=Ve.objectKeys(t).filter(c=>o.indexOf(c)!==-1),l={...t,...e};for(const c of a){const d=Lu(t[c],e[c]);if(!d.valid)return{valid:!1};l[c]=d.data}return{valid:!0,data:l}}else if(n===ce.array&&i===ce.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let a=0;a<t.length;a++){const l=t[a],c=e[a],d=Lu(l,c);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===ce.date&&i===ce.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class to extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=(a,l)=>{if(Ru(a)||Ru(l))return Re;const c=Lu(a.value,l.value);return c.valid?((Ou(a)||Ou(l))&&n.dirty(),{status:n.value,value:c.data}):(fe(i,{code:X.invalid_intersection_types}),Re)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}to.create=(t,e,n)=>new to({left:t,right:e,typeName:ke.ZodIntersection,...Pe(n)});class Xn extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.array)return fe(i,{code:X.invalid_type,expected:ce.array,received:i.parsedType}),Re;if(i.data.length<this._def.items.length)return fe(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Re;!this._def.rest&&i.data.length>this._def.items.length&&(fe(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,c)=>{const d=this._def.items[c]||this._def.rest;return d?d._parse(new Jn(i,l,i.path,c)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Mt.mergeArray(n,l)):Mt.mergeArray(n,a)}get items(){return this._def.items}rest(e){return new Xn({...this._def,rest:e})}}Xn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Xn({items:t,typeName:ke.ZodTuple,rest:null,...Pe(e)})};class no extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.object)return fe(i,{code:X.invalid_type,expected:ce.object,received:i.parsedType}),Re;const o=[],a=this._def.keyType,l=this._def.valueType;for(const c in i.data)o.push({key:a._parse(new Jn(i,c,i.path,c)),value:l._parse(new Jn(i,i.data[c],i.path,c))});return i.common.async?Mt.mergeObjectAsync(n,o):Mt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,i){return n instanceof Ne?new no({keyType:e,valueType:n,typeName:ke.ZodRecord,...Pe(i)}):new no({keyType:Pn.create(),valueType:e,typeName:ke.ZodRecord,...Pe(n)})}}class Ka extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.map)return fe(i,{code:X.invalid_type,expected:ce.map,received:i.parsedType}),Re;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([c,d],f)=>({key:o._parse(new Jn(i,c,i.path,[f,"key"])),value:a._parse(new Jn(i,d,i.path,[f,"value"]))}));if(i.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,h=await d.value;if(f.status==="aborted"||h.status==="aborted")return Re;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),c.set(f.value,h.value)}return{status:n.value,value:c}})}else{const c=new Map;for(const d of l){const f=d.key,h=d.value;if(f.status==="aborted"||h.status==="aborted")return Re;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),c.set(f.value,h.value)}return{status:n.value,value:c}}}}Ka.create=(t,e,n)=>new Ka({valueType:e,keyType:t,typeName:ke.ZodMap,...Pe(n)});class Si extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ce.set)return fe(i,{code:X.invalid_type,expected:ce.set,received:i.parsedType}),Re;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(fe(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(fe(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const h of d){if(h.status==="aborted")return Re;h.status==="dirty"&&n.dirty(),f.add(h.value)}return{status:n.value,value:f}}const c=[...i.data.values()].map((d,f)=>a._parse(new Jn(i,d,i.path,f)));return i.common.async?Promise.all(c).then(d=>l(d)):l(c)}min(e,n){return new Si({...this._def,minSize:{value:e,message:ye.toString(n)}})}max(e,n){return new Si({...this._def,maxSize:{value:e,message:ye.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}Si.create=(t,e)=>new Si({valueType:t,minSize:null,maxSize:null,typeName:ke.ZodSet,...Pe(e)});class es extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ce.function)return fe(n,{code:X.invalid_type,expected:ce.function,received:n.parsedType}),Re;function i(c,d){return Ha({data:c,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,za(),Gs].filter(f=>!!f),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(c,d){return Ha({data:c,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,za(),Gs].filter(f=>!!f),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;if(this._def.returns instanceof ls){const c=this;return zt(async function(...d){const f=new Mn([]),h=await c._def.args.parseAsync(d,a).catch(b=>{throw f.addIssue(i(d,b)),f}),p=await Reflect.apply(l,this,h);return await c._def.returns._def.type.parseAsync(p,a).catch(b=>{throw f.addIssue(o(p,b)),f})})}else{const c=this;return zt(function(...d){const f=c._def.args.safeParse(d,a);if(!f.success)throw new Mn([i(d,f.error)]);const h=Reflect.apply(l,this,f.data),p=c._def.returns.safeParse(h,a);if(!p.success)throw new Mn([o(h,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new es({...this._def,args:Xn.create(e).rest($i.create())})}returns(e){return new es({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,i){return new es({args:e||Xn.create([]).rest($i.create()),returns:n||$i.create(),typeName:ke.ZodFunction,...Pe(i)})}}class ro extends Ne{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}ro.create=(t,e)=>new ro({getter:t,typeName:ke.ZodLazy,...Pe(e)});class io extends Ne{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return fe(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Re}return{status:"valid",value:e.data}}get value(){return this._def.value}}io.create=(t,e)=>new io({value:t,typeName:ke.ZodLiteral,...Pe(e)});function rv(t,e){return new Qr({values:t,typeName:ke.ZodEnum,...Pe(e)})}class Qr extends Ne{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),i=this._def.values;return fe(n,{expected:Ve.joinValues(i),received:n.parsedType,code:X.invalid_type}),Re}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),i=this._def.values;return fe(n,{received:n.data,code:X.invalid_enum_value,options:i}),Re}return zt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Qr.create(e)}exclude(e){return Qr.create(this.options.filter(n=>!e.includes(n)))}}Qr.create=rv;class so extends Ne{_parse(e){const n=Ve.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==ce.string&&i.parsedType!==ce.number){const o=Ve.objectValues(n);return fe(i,{expected:Ve.joinValues(o),received:i.parsedType,code:X.invalid_type}),Re}if(n.indexOf(e.data)===-1){const o=Ve.objectValues(n);return fe(i,{received:i.data,code:X.invalid_enum_value,options:o}),Re}return zt(e.data)}get enum(){return this._def.values}}so.create=(t,e)=>new so({values:t,typeName:ke.ZodNativeEnum,...Pe(e)});class ls extends Ne{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ce.promise&&n.common.async===!1)return fe(n,{code:X.invalid_type,expected:ce.promise,received:n.parsedType}),Re;const i=n.parsedType===ce.promise?n.data:Promise.resolve(n.data);return zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ls.create=(t,e)=>new ls({type:t,typeName:ke.ZodPromise,...Pe(e)});class Dn extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ke.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=this._def.effect||null,a={addIssue:l=>{fe(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const l=o.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(l).then(c=>this._def.schema._parseAsync({data:c,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}if(o.type==="refinement"){const l=c=>{const d=o.refinement(c,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return c.status==="aborted"?Re:(c.status==="dirty"&&n.dirty(),l(c.value),{status:n.value,value:c.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>c.status==="aborted"?Re:(c.status==="dirty"&&n.dirty(),l(c.value).then(()=>({status:n.value,value:c.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Qs(l))return l;const c=o.transform(l.value,a);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:c}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Qs(l)?Promise.resolve(o.transform(l.value,a)).then(c=>({status:n.value,value:c})):l);Ve.assertNever(o)}}Dn.create=(t,e,n)=>new Dn({schema:t,typeName:ke.ZodEffects,effect:e,...Pe(n)});Dn.createWithPreprocess=(t,e,n)=>new Dn({schema:e,effect:{type:"preprocess",transform:t},typeName:ke.ZodEffects,...Pe(n)});class $r extends Ne{_parse(e){return this._getType(e)===ce.undefined?zt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}$r.create=(t,e)=>new $r({innerType:t,typeName:ke.ZodOptional,...Pe(e)});class Ti extends Ne{_parse(e){return this._getType(e)===ce.null?zt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ti.create=(t,e)=>new Ti({innerType:t,typeName:ke.ZodNullable,...Pe(e)});class oo extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);let i=n.data;return n.parsedType===ce.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}oo.create=(t,e)=>new oo({innerType:t,typeName:ke.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Pe(e)});class Va extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Wa(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Va.create=(t,e)=>new Va({innerType:t,typeName:ke.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Pe(e)});class Ga extends Ne{_parse(e){if(this._getType(e)!==ce.nan){const i=this._getOrReturnCtx(e);return fe(i,{code:X.invalid_type,expected:ce.nan,received:i.parsedType}),Re}return{status:"valid",value:e.data}}}Ga.create=t=>new Ga({typeName:ke.ZodNaN,...Pe(t)});const $k=Symbol("zod_brand");class iv extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class bo extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Re:a.status==="dirty"?(n.dirty(),nv(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Re:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,n){return new bo({in:e,out:n,typeName:ke.ZodPipeline})}}class Qa extends Ne{_parse(e){const n=this._def.innerType._parse(e);return Qs(n)&&(n.value=Object.freeze(n.value)),n}}Qa.create=(t,e)=>new Qa({innerType:t,typeName:ke.ZodReadonly,...Pe(e)});const sv=(t,e={},n)=>t?as.create().superRefine((i,o)=>{var a,l;if(!t(i)){const c=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,d=(l=(a=c.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof c=="string"?{message:c}:c;o.addIssue({code:"custom",...f,fatal:d})}}):as.create(),Ek={object:ut.lazycreate};var ke;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(ke||(ke={}));const kk=(t,e={message:`Input not instance of ${t.name}`})=>sv(n=>n instanceof t,e),ov=Pn.create,av=Vr.create,Ck=Ga.create,Sk=Gr.create,lv=Ys.create,Tk=Ci.create,Ak=qa.create,Ik=Js.create,Rk=Xs.create,Ok=as.create,Lk=$i.create,Pk=kr.create,Mk=Za.create,Bk=Bn.create,jk=ut.create,Nk=ut.strictCreate,Dk=eo.create,Uk=xl.create,Fk=to.create,zk=Xn.create,Hk=no.create,Wk=Ka.create,qk=Si.create,Zk=es.create,Kk=ro.create,Vk=io.create,Gk=Qr.create,Qk=so.create,Yk=ls.create,lg=Dn.create,Jk=$r.create,Xk=Ti.create,eC=Dn.createWithPreprocess,tC=bo.create,nC=()=>ov().optional(),rC=()=>av().optional(),iC=()=>lv().optional(),sC={string:t=>Pn.create({...t,coerce:!0}),number:t=>Vr.create({...t,coerce:!0}),boolean:t=>Ys.create({...t,coerce:!0}),bigint:t=>Gr.create({...t,coerce:!0}),date:t=>Ci.create({...t,coerce:!0})},oC=Re;var mt=Object.freeze({__proto__:null,defaultErrorMap:Gs,setErrorMap:uk,getErrorMap:za,makeIssue:Ha,EMPTY_PATH:dk,addIssueToContext:fe,ParseStatus:Mt,INVALID:Re,DIRTY:nv,OK:zt,isAborted:Ru,isDirty:Ou,isValid:Qs,isAsync:Wa,get util(){return Ve},get objectUtil(){return Iu},ZodParsedType:ce,getParsedType:zr,ZodType:Ne,ZodString:Pn,ZodNumber:Vr,ZodBigInt:Gr,ZodBoolean:Ys,ZodDate:Ci,ZodSymbol:qa,ZodUndefined:Js,ZodNull:Xs,ZodAny:as,ZodUnknown:$i,ZodNever:kr,ZodVoid:Za,ZodArray:Bn,ZodObject:ut,ZodUnion:eo,ZodDiscriminatedUnion:xl,ZodIntersection:to,ZodTuple:Xn,ZodRecord:no,ZodMap:Ka,ZodSet:Si,ZodFunction:es,ZodLazy:ro,ZodLiteral:io,ZodEnum:Qr,ZodNativeEnum:so,ZodPromise:ls,ZodEffects:Dn,ZodTransformer:Dn,ZodOptional:$r,ZodNullable:Ti,ZodDefault:oo,ZodCatch:Va,ZodNaN:Ga,BRAND:$k,ZodBranded:iv,ZodPipeline:bo,ZodReadonly:Qa,custom:sv,Schema:Ne,ZodSchema:Ne,late:Ek,get ZodFirstPartyTypeKind(){return ke},coerce:sC,any:Ok,array:Bk,bigint:Sk,boolean:lv,date:Tk,discriminatedUnion:Uk,effect:lg,enum:Gk,function:Zk,instanceof:kk,intersection:Fk,lazy:Kk,literal:Vk,map:Wk,nan:Ck,nativeEnum:Qk,never:Pk,null:Rk,nullable:Xk,number:av,object:jk,oboolean:iC,onumber:rC,optional:Jk,ostring:nC,pipeline:tC,preprocess:eC,promise:Yk,record:Hk,set:qk,strictObject:Nk,string:ov,symbol:Ak,transformer:lg,tuple:zk,undefined:Ik,union:Dk,unknown:Lk,void:Mk,NEVER:oC,ZodIssueCode:X,quotelessJson:ck,ZodError:Mn});const aC=/^[0-9a-f]{64}$/,ao=t=>{const e=typeof t=="string"&&t.length===64&&aC.test(t);return e||console.warn("invalid id is ignored: ",t),e},lC=t=>e=>t.safeParse(e).success,cC=mt.tuple([mt.literal("emoji"),mt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),mt.string().url()]);class uC{findTagsByName(e){return this.tags.filter(([n])=>n===e)}findFirstTagByName(e){return this.tags.find(([n])=>n===e)}findLastTagByName(e){return this.tags.findLast(([n])=>n===e)}pTags(){return this.tags.filter(([e,n])=>e==="p"&&ao(n))}eTags(){return this.tags.filter(([e,n])=>e==="e"&&ao(n))}emojiTags(){return this.tags.filter(lC(cC))}taggedPubkeys(){return wi(this.pTags().map(([,e])=>e))}taggedEventIds(){return this.eTags().map(([,e])=>e)}lastTaggedEventId(){const e=this.taggedEventIds();if(e.length!==0)return e[e.length-1]}getEmojiUrl(e){const n=this.emojiTags().find(([,o])=>o===e);if(n==null)return;const[,,i]=n;return i}}class $d extends uC{constructor(e){super(),this.rawEvent=e}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const dC=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,cg=/^:(\w+):$/,fC=t=>{if(t.isLikeOrDislike())return{type:"LikeDislike",content:t.content};if(t.isEmoji())return{type:"Emoji",content:t.content};if(t.isCustomEmoji()){const e=t.getShortcode(),n=t.getUrl();if(e!=null&&n!=null)return{type:"CustomEmoji",content:t.content,shortcode:e,url:n}}return{type:"Unknown",content:t.content}};class hC extends $d{constructor(e){if(e.kind!==lt.Reaction)throw new TypeError("kind should be 7");super(e)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return dC.test(this.content)}isCustomEmoji(){return cg.test(this.content)}getShortcode(){return this.content.match(cg)?.[1]}getUrl(){const e=this.getShortcode();if(e!=null)return this.getEmojiUrl(e)}toReactionTypes(){return fC(this)}}const{decode:pC}=mo,gC=["reply","root","mention"],vC=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,mC=/(?:#\[(?<idx>\d+)\])/g,yC=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,bC=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,_C=/:(?<emoji>\w+):/gu,Ed=t=>{const e=[...t.matchAll(vC),...t.matchAll(mC),...t.matchAll(yC),...t.matchAll(bC),...t.matchAll(_C)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=t.slice(n,a),c=i[i.length-1];if(c?.type==="PlainText")c.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return e.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const c={type:"URL",content:a.groups?.url};i.push(c)}else if(a.groups?.idx){const c=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:c,content:a[0]})}else if(a.groups?.mention){o(l);try{const c=pC(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:c,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const c=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:c};i.push(d)}else if(a.groups?.emoji){o(l);const c=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:c};i.push(d)}n=l+a[0].length}}),n<t.length&&o(t.length),i},wC=t=>t==null?!1:gC.includes(t),xC=(t,{tagIndex:e,content:n})=>{const i=t.tags[e];if(i==null)return;const o=i[0];if(o==="p"&&ao(i[1]))return{type:"MentionedUser",tagIndex:e,content:n,pubkey:i[1]};if(o==="e"&&ao(i[1])){const a=wC(i[3])?i[3]:void 0;return{type:"MentionedEvent",tagIndex:e,content:n,eventId:i[1],marker:a}}},cv=(t,e)=>t.map(n=>{if(n.type==="TagReference"){const i=xC(e,n);return{...n,type:"TagReferenceResolved",reference:i}}if(n.type==="CustomEmoji"){const i=e.getEmojiUrl(n.shortcode);return{...n,type:"CustomEmojiResolved",url:i}}return n}),$C=t=>{const e=t.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&ao(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:e.length===1?"reply":o===0?"root":e.length===2||o===e.length-1?"reply":"mention";return e.map(([[,i,o,a],l],c)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,c),index:l}))};class EC extends $d{#e;#t;parsed(){if(this.#t!=null)return this.#t;const e=Ed(this.content),n=cv(e,this);return this.#t=n,n}markedEventTags(){return this.#e!=null?this.#e:(this.#e=$C(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:e})=>e==="reply")}rootEvent(){return this.markedEventTags().find(({marker:e})=>e==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:e})=>e==="mention")}contentWarning(){const e=this.findLastTagByName("content-warning");return e==null?{contentWarning:!1}:{contentWarning:!0,reason:(e[1]?.length??0)>0?e[1]:void 0}}containsEventMention(e){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===e);return this.containsEventNote(e)||this.containsEventMentionIndex(n)}containsEventMentionIndex(e){return e<0||e>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReferenceResolved"&&n.tagIndex===e)}containsEventNote(e){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===e||n.data.type==="note"&&n.data.data===e))}}let kC=class extends EC{constructor(e){if(e.kind!==lt.Text)throw new TypeError("kind should be 1");super(e)}};const Hr=t=>new $d(t),kd=t=>new kC(t),Ya=t=>new hC(t),CC=()=>{const t=[...ok];return window.navigator.language.includes("ja")&&t.push(...ak),t},uv=()=>({relayUrls:CC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,embedding:{twitter:!0,youtube:!0,ogp:!0},hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),SC=t=>JSON.stringify(t),TC=t=>({...uv(),...JSON.parse(t)}),AC=D4(()=>window.localStorage,SC,TC),[Qi,Gt]=U4("RabbitConfig",uv(),AC),Xe=()=>{const t=dt(),e=C=>{Gt("relayUrls",R=>wi([...R,C]))},n=C=>{Gt("relayUrls",R=>R.filter(O=>O!==C))},i=C=>{Gt("mutedPubkeys",R=>wi([...R,C]))},o=C=>{Gt("mutedPubkeys",R=>R.filter(O=>O!==C))},a=C=>{Gt("mutedKeywords",R=>wi([...R,C]))},l=C=>{Gt("mutedKeywords",R=>R.filter(O=>O!==C))},c=C=>{Gt("columns",R=>{const O=R.findIndex(A=>A.id===C.id);if(O>=0){const A=[...R];return A.splice(O,1,C),A}return[...R,C]})},d=(C,R)=>{Gt("columns",O=>{const A=R-1,D=Math.max(Math.min(A,O.length),0),j=O.findIndex(te=>te.id===C);if(j<0||D===j)return O;console.log(j,D);const W=[...O],[J]=W.splice(j,1);return W.splice(D,0,J),W})},f=C=>{Gt("columns",R=>R.filter(O=>O.id!==C))},h=C=>{Gt("customEmojis",R=>({...R,[C.shortcode]:C}))},p=C=>{Gt("customEmojis",R=>{const O=Object.fromEntries(C.map(A=>[A.shortcode,A]));return{...R,...O}})},v=C=>{Gt("customEmojis",R=>({...R,[C]:void 0}))},b=C=>Qi.customEmojis[C],_=C=>G1.sortBy(Object.values(Qi.customEmojis).filter(({shortcode:R})=>R.includes(C)),[R=>R.shortcode.length]),w=C=>Qi.mutedPubkeys.includes(C),x=C=>C.kind===lt.Text?Qi.mutedKeywords.some(R=>C.content.includes(R)):!1;return{config:()=>Qi,setConfig:Gt,addRelay:e,removeRelay:n,saveColumn:c,moveColumn:d,removeColumn:f,initializeColumns:({pubkey:C})=>{if((Qi.columns?.length??0)>0)return;const R=[_d({width:"widest",pubkey:C}),Y1({pubkey:C}),wd({name:t()("column.myPosts"),pubkey:C}),ev({name:t()("column.myReactions"),pubkey:C})];navigator.language.includes("ja")&&R.splice(2,0,X1()),Gt("columns",()=>[...R])},saveEmoji:h,saveEmojis:p,removeEmoji:v,getEmoji:b,searchEmojis:_,addMutedPubkey:i,removeMutedPubkey:o,addMutedKeyword:a,removeMutedKeyword:l,isPubkeyMuted:w,shouldMuteEvent:C=>{const R=Hr(C);return w(C.pubkey)||R.taggedPubkeys().some(w)||C.kind===lt.Text&&x(C)}}},Cd=(t,e)=>{const n=t.created_at-e.created_at;return n!==0?n:t.id===e.id?0:t.id>e.id?1:-1},dv=t=>{if(t.length!==0)return t.length===1?t[0]:t.reduce((e,n)=>Cd(e,n)>0?e:n)},Pu=t=>Array.from(t).sort((e,n)=>-Cd(e,n)),[IC]=Ce(new HE({eoseSubTimeout:12e3})),Sd=()=>IC,[fv,ug]=ns({activeSubscriptions:0,activeBatchSubscriptions:0});R4(()=>{xr(()=>{console.debug("stats",{...fv})})});const hv=()=>({stats:fv,setActiveSubscriptions:n=>ug("activeSubscriptions",n),setActiveBatchSubscriptions:n=>ug("activeBatchSubscriptions",n)});let dg=0;const RC=()=>{const t=dg;return dg+=1,t};class OC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(e){this.id=RC(),this.req=e}#n(e){this.#e.forEach(n=>{n(e)})}#r(){this.#t.forEach(e=>{e()})}update(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=e,this.#n(e)}updateWith(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(e(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(e){this.#e.push(e)}subscribe(e){this.onUpdate(e)}onComplete(e){this.#t.push(e)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const e=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([e,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((e,n)=>{this.onComplete(()=>{this.res!=null?e(this.res):n(new Error("result was not set"))})})}}const LC=t=>{const e=Fe(t),n=Fe(()=>e().batchSize??100),i=Fe(()=>e().interval??2e3),[o,a]=Ce([]);let l;const c=()=>{const{executor:p}=e(),v=o();v.length>0&&(a([]),p(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{c()},i()))};return{addTask:p=>{o().length<n()?a(v=>[...v,p]):(c(),a([p])),d()},removeTask:p=>{a(v=>v.filter(b=>b!==p))}}};class ys extends OC{addEvent(e){this.updateWith(n=>pd.insertEventIntoDescendingList(n??[],e))}firstEventPromise(){return this.toUpdatePromise().then(e=>e[0])}latestEventPromise(){return this.toCompletePromise().then(e=>{const n=dv(e);if(n==null)throw new Error("event not found");return n})}}const hi=t=>e=>e.req.type===t;let Mu=0;const{setActiveBatchSubscriptions:PC}=hv();setInterval(()=>{PC(Mu)},1e3);const MC=t=>t.kind>=3e4&&t.kind<4e4,fg=({kind:t,author:e,identifier:n})=>`${t}:${e}:${n}`,pi=({keyExtractor:t,filtersBuilder:e,eventKeyExtractor:n})=>{const i=new Map;return{tasks:i,add:c=>{const d=t(c.req),f=i.get(d)??[];i.set(d,[...f,c])},buildFilter:()=>{const c=Array.from(i.keys());return c.length===0?[]:e(c)},resolve:c=>{const d=n(c);if(d==null)return!1;const f=i.get(d)??[];return f.length===0?!1:(f.forEach(h=>{h.addEvent(c)}),!0)}}},BC=t=>{const e=pi({keyExtractor:p=>p.eventId,filtersBuilder:p=>[{ids:p}],eventKeyExtractor:p=>p.id}),n=pi({keyExtractor:p=>p.pubkey,filtersBuilder:p=>[{kinds:[lt.Metadata],authors:p}],eventKeyExtractor:p=>p.pubkey}),i=pi({keyExtractor:p=>p.pubkey,filtersBuilder:p=>[{kinds:[lt.Contacts],authors:p}],eventKeyExtractor:p=>p.pubkey}),o=pi({keyExtractor:p=>p.mentionedEventId,filtersBuilder:p=>[{kinds:[lt.Repost],"#e":p}],eventKeyExtractor:p=>Hr(p).lastTaggedEventId()}),a=pi({keyExtractor:p=>p.mentionedEventId,filtersBuilder:p=>[{kinds:[lt.Reaction],"#e":p}],eventKeyExtractor:p=>Hr(p).lastTaggedEventId()}),l=pi({keyExtractor:p=>p.mentionedEventId,filtersBuilder:p=>[{kinds:[lt.Zap],"#e":p}],eventKeyExtractor:p=>Hr(p).lastTaggedEventId()}),c=pi({keyExtractor:fg,filtersBuilder:p=>{const v=[];return p.forEach(b=>{const _=c.tasks.get(b)?.[0];if(_==null)return;const{kind:w,author:x,identifier:S}=_.req;v.push({kinds:[w],authors:[x],"#d":[S]})}),v},eventKeyExtractor:p=>{const v=Hr(p).findFirstTagByName("d")?.[1];if(v!=null)return fg({kind:p.kind,author:p.pubkey,identifier:v})}}),d=p=>{if(hi("Event")(p))e.add(p);else if(hi("Profile")(p))n.add(p);else if(hi("Followings")(p))i.add(p);else if(hi("Reposts")(p))o.add(p);else if(hi("Reactions")(p))a.add(p);else if(hi("ZapReceipts")(p))l.add(p);else if(hi("ParameterizedReplaceableEvent")(p))c.add(p);else throw new Error(`unknown task: ${p.req.type}`)},f=()=>[...e.buildFilter(),...n.buildFilter(),...i.buildFilter(),...o.buildFilter(),...a.buildFilter(),...l.buildFilter(),...c.buildFilter()],h=p=>{p.kind===lt.Metadata&&n.resolve(p)||p.kind===lt.Contacts&&i.resolve(p)||p.kind===lt.Repost&&o.resolve(p)||p.kind===lt.Reaction&&a.resolve(p)||p.kind===lt.Zap&&l.resolve(p)||MC(p)&&c.resolve(p)||e.resolve(p)};return t.forEach(p=>{d(p)}),{tasks:{eventTasks:e,profileTasks:n,followingsTasks:i,repostsTasks:o,reactionsTasks:a,zapReceiptsTasks:l,parameterizedReplaceableEventsTasks:c},add:d,buildFilters:f,resolve:h}},{addTask:jC,removeTask:NC}=LC(()=>({interval:2e3,batchSize:150,executor:t=>{const e=BC(t),n=e.buildFilters();if(n.length===0)return;const i=()=>{t.forEach(c=>{c.complete()})},{config:o}=Xe(),l=Sd()().sub(o().relayUrls,n,{});Mu+=1,l.on("event",c=>{e.resolve(c)}),l.on("eose",()=>{i(),l.unsub(),Mu-=1})}})),$l=({task:t,signal:e})=>{jC(t),e?.addEventListener("abort",()=>NC(t))};class DC extends Error{}const ei=(t,e)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=e!=null?`TimeoutError: ${e}`:"TimeoutError";a(new DC(l))},t)});return Promise.race([n,i])},UC=t=>{const e=Fe(t),n=Ai(()=>["useEvent",e()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:c}=l,d=new ys({type:"Event",eventId:c}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${c}`)});return $l({task:d,signal:a}),ei(15e3,`useEvent: ${c}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},ln=t=>e=>t.some(n=>n==null)?null:e(t),FC=B("<span>"),zC=B('<div class="truncate"> '),lo=t=>{const e=dt(),[n,i]=O4(t,["eventId"]),{shouldMuteEvent:o}=Xe(),{event:a,query:l}=UC(()=>ln([n.eventId])(([d])=>({eventId:d}))),c=()=>{const d=a();return d!=null&&o(d)};return E(Ln,{get fallback(){return(()=>{const d=FC();return k(d,()=>e()("post.failedToFetchEvent"),null),k(d,()=>t.eventId,null),d})()},get children(){return[E(Qe,{get when(){return c()},children:null}),E(Qe,{get when(){return a()},keyed:!0,children:d=>E(pm,L4({event:d},i))}),E(Qe,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=zC(),h=f.firstChild;return k(f,()=>e()("general.loading"),h),k(f,E(Vs,{eventId:d}),null),f})()})]}})},HC=t=>{if(t==null||t.length===0)throw new TypeError("content is empty or null");return JSON.parse(t)},WC=t=>{try{return HC(t)}catch(e){return console.warn("failed to parse profile (kind 0): ",e,t),null}},pv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve(null);const l=a.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return a.onUpdate(c=>{const d=dv(c);(o==null||d!=null&&Cd(d,o)>=0)&&e.setQueryData(n,d)}),$l({task:a,signal:i}),ei(15e3,`${JSON.stringify(n)}`)(l)},gv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve([]);const l=a.toUpdatePromise().catch(()=>[]);return a.onUpdate(c=>{e.setQueryData(n,()=>{if(o==null)return c;const d=G1.uniqBy([...o,...c],f=>f.id);return Pu(d)})}),$l({task:a,signal:i}),ei(15e3,`${JSON.stringify(n)}`)(l)},bs=t=>{const e=Jr(),n=Fe(t),i=Fe(()=>["useProfile",n()]),o=Ai(i,pv({taskProvider:([,d])=>{if(d==null)return null;const{pubkey:f}=d;return new ys({type:"Profile",pubkey:f})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1}),a=()=>o.data;return{profile:Fe(()=>{if(o.data==null)return null;const{content:d}=o.data;return WC(d)}),event:a,invalidateProfile:()=>e.invalidateQueries(i()),query:o}},{npubEncode:qC}=mo,_o=t=>{try{return qC(t)}catch{return console.error("failed to encode pubkey into npub",t),t}},Td=t=>{const{profile:e}=bs(()=>({pubkey:t.pubkey}));return E(Ln,{get fallback(){return _o(t.pubkey)},get children(){return[E(Qe,{get when(){return(e()?.display_name?.length??0)>0},get children(){return e()?.display_name}}),E(Qe,{get when(){return(e()?.name?.length??0)>0},get children(){return["@",Fe(()=>e()?.name)]}})]}})},vv=t=>{const[e,n]=Ce(new Date);return xr(()=>{const i=setInterval(()=>{n(new Date)},t().interval);jn(()=>clearInterval(i))}),e},ZC=t=>{switch(t.kind){case"now":return"now";case"seconds":return`${t.value}s`;case"minutes":return`${t.value}m`;case"hours":return`${t.value}h`;case"days":return`${t.value}d`;case"abs":default:return t.value.toLocaleDateString()}},hg=t=>`${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`,KC=t=>{switch(t.kind){case"today":return t.value.toLocaleTimeString();case"yesterday":case"abs":default:return t.value.toLocaleString()}},VC=t=>{switch(t.kind){case"today":return hg(t.value);case"yesterday":return`昨日 ${hg(t.value)}`;case"abs":default:return t.value.toLocaleString()}},GC=(t,e)=>Math.round(Number(e)-Number(t))/1e3,QC=(t,e)=>{const n=GC(t,e);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:t}},pg=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),YC=t=>new Date(+t-24*60*60*1e3),mv=(t,e,n)=>pg(t,e)?n({kind:"today",value:t}):pg(t,YC(e))?n({kind:"yesterday",value:t}):n({kind:"abs",value:t}),JC=(t,e=new Date)=>mv(t,e,KC),XC=(t,e=new Date)=>mv(t,e,VC),gg=(t,e=new Date,n=ZC)=>n(QC(t,e)),vg=vv(()=>({interval:7e3})),mg=vv(()=>({interval:60*1e3})),yv=()=>{const{config:t}=Xe();return e=>{switch(t().dateFormat){case"absolute-long":return JC(e,mg());case"absolute-short":return XC(e,mg());case"relative":return gg(e,vg());default:return gg(e,vg())}}},[eS,gi]=Ce({type:"Closed"}),ti=()=>({modalState:eS,setModalState:gi,showLogin:()=>{gi({type:"Login"})},showProfile:l=>{gi({type:"Profile",pubkey:l})},showProfileEdit:()=>{gi({type:"ProfileEdit"})},showAddColumn:()=>{gi({type:"AddColumn"})},showAbout:()=>{gi({type:"About"})},closeModal:()=>{gi({type:"Closed"})}}),tS=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="select-text hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),nS=t=>{const e=dt(),{showProfile:n}=ti(),i=yv(),o=Fe(()=>Hr(t.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=tS(),c=l.firstChild,d=c.firstChild,f=d.nextSibling,h=f.firstChild,p=f.nextSibling,v=c.nextSibling;return k(d,E(V1,{})),h.$$click=()=>n(t.event.pubkey),k(h,E(Td,{get pubkey(){return t.event.pubkey}})),k(f,()=>e()("notification.reposted"),null),k(p,()=>i(o().createdAtAsDate())),k(v,E(lo,{get eventId(){return a()}})),l})()};vt(["click"]);const rS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),iS=(t={})=>(()=>{const e=rS();return it(e,t,!0,!0),e})(),sS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),bv=(t={})=>(()=>{const e=sS();return it(e,t,!0,!0),e})(),oS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),_v=(t={})=>(()=>{const e=oS();return it(e,t,!0,!0),e})(),aS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),wv=(t={})=>(()=>{const e=aS();return it(e,t,!0,!0),e})(),lS=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),xv=(t={})=>(()=>{const e=lS();return it(e,t,!0,!0),e})(),cS=B('<div class="absolute z-20">'),uS=B('<div><button type="button" class="flex items-center">'),Ad=t=>{let e;const[n,i]=Ce(),[o,a]=Ce(!1),[l,c]=Ce({}),d=P4(()=>t.children),f=()=>a(!1),h=()=>a(w=>!w),p=w=>{const x=w.target;x!=null&&!n()?.contains(x)&&f()},v=()=>{document.addEventListener("mousedown",p)},b=()=>{document.removeEventListener("mousedown",p)},_=()=>{const w=n();if(e==null||w==null)return;const x=e?.getBoundingClientRect(),S=w.getBoundingClientRect();let{top:L,left:C}=x;t.position==="left"?C-=x.width:t.position==="right"?C+=x.width:t.position==="top"?(L-=x.height,C-=x.left+x.width/2):(L+=x.height,C+=x.width/2),L=Math.min(L,window.innerHeight-S.height),C=Math.min(C,window.innerWidth-S.width),c({left:`${C}px`,top:`${L}px`})};return xr(()=>{o()?(v(),t.onOpen?.()):(b(),t.onClose?.())}),xr(al(d,()=>{_()})),xr(()=>{o()&&_()}),tr(()=>{t.ref?.({close:f,elem:n})}),jn(()=>b()),(()=>{const w=uS(),x=w.firstChild;x.$$click=()=>{h(),_()};const S=e;return typeof S=="function"?Nn(S,x):e=x,k(x,()=>t.button),k(w,E(pe,{get when(){return o()},get children(){return E(M4,{get children(){const L=cS();return Nn(i,L),k(L,d),Le(C=>B4(L,l(),C)),L}})}}),null),w})()};vt(["click"]);const dS=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),fS=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),hS=t=>{const e=()=>{t.item?.onSelect?.(),t.onClose()};return(()=>{const n=dS(),i=n.firstChild;return i.$$click=e,k(i,()=>t.item.content()),n})()},$v=t=>{let e;const n=()=>e?.close();return E(Ad,{ref:i=>{e=i},get button(){return t.children},position:"bottom",get children(){const i=fS();return k(i,E(Ft,{get each(){return t.menu.filter(o=>o.when==null||o.when())},children:o=>E(hS,{item:o,onClose:n})})),i}})};vt(["click"]);const pS=B('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),yg=B('<span class="truncate">'),gS=B('<img class="h-4 max-w-[3rem]">'),vS=t=>t.type==="LikeDislike"&&t.content==="+",Ev=t=>E(Ln,{get fallback(){return(()=>{const e=yg();return k(e,()=>t.reactionTypes.content),e})()},get children(){return[E(Qe,{get when(){return vS(t.reactionTypes)},get children(){const e=pS();return k(e,E(xv,{})),e}}),E(Qe,{get when(){return t.reactionTypes.type==="Emoji"&&t.reactionTypes},keyed:!0,children:({content:e})=>(()=>{const n=yg();return k(n,e),n})()}),E(Qe,{get when(){return t.reactionTypes.type==="CustomEmoji"&&t.reactionTypes},keyed:!0,children:({shortcode:e,url:n})=>(()=>{const i=gS();return Ue(i,"src",n),Ue(i,"alt",`:${e}:`),i})()})]}});function kv(t){return t&&t.__esModule?t.default:t}function On(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var El,_e,Cv,Hs,Sv,bg,Ja={},Tv=[],mS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Wr(t,e){for(var n in e)t[n]=e[n];return t}function Av(t){var e=t.parentNode;e&&e.removeChild(t)}function Bu(t,e,n){var i,o,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?o=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?El.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return Ta(t,l,i,o,null)}function Ta(t,e,n,i,o){var a={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Cv};return o==null&&_e.vnode!=null&&_e.vnode(a),a}function br(){return{current:null}}function cs(t){return t.children}function Qn(t,e){this.props=t,this.context=e}function us(t,e){if(e==null)return t.__?us(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?us(t):null}function Iv(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Iv(t)}}function _g(t){(!t.__d&&(t.__d=!0)&&Hs.push(t)&&!Xa.__r++||bg!==_e.debounceRendering)&&((bg=_e.debounceRendering)||Sv)(Xa)}function Xa(){for(var t;Xa.__r=Hs.length;)t=Hs.sort(function(e,n){return e.__v.__b-n.__v.__b}),Hs=[],t.some(function(e){var n,i,o,a,l,c;e.__d&&(l=(a=(n=e).__v).__e,(c=n.__P)&&(i=[],(o=Wr({},a)).__v=a.__v+1,Id(c,a,o,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??us(a),a.__h),Pv(i,a),a.__e!=l&&Iv(a)))})}function Rv(t,e,n,i,o,a,l,c,d,f){var h,p,v,b,_,w,x,S=i&&i.__k||Tv,L=S.length;for(n.__k=[],h=0;h<e.length;h++)if((b=n.__k[h]=(b=e[h])==null||typeof b=="boolean"?null:typeof b=="string"||typeof b=="number"||typeof b=="bigint"?Ta(null,b,null,null,b):Array.isArray(b)?Ta(cs,{children:b},null,null,null):b.__b>0?Ta(b.type,b.props,b.key,null,b.__v):b)!=null){if(b.__=n,b.__b=n.__b+1,(v=S[h])===null||v&&b.key==v.key&&b.type===v.type)S[h]=void 0;else for(p=0;p<L;p++){if((v=S[p])&&b.key==v.key&&b.type===v.type){S[p]=void 0;break}v=null}Id(t,b,v=v||Ja,o,a,l,c,d,f),_=b.__e,(p=b.ref)&&v.ref!=p&&(x||(x=[]),v.ref&&x.push(v.ref,null,b),x.push(p,b.__c||_,b)),_!=null?(w==null&&(w=_),typeof b.type=="function"&&b.__k===v.__k?b.__d=d=Ov(b,d,t):d=Lv(t,b,v,S,_,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=t&&(d=us(v))}for(n.__e=w,h=L;h--;)S[h]!=null&&(typeof n.type=="function"&&S[h].__e!=null&&S[h].__e==n.__d&&(n.__d=us(i,h+1)),Bv(S[h],S[h]));if(x)for(h=0;h<x.length;h++)Mv(x[h],x[++h],x[++h])}function Ov(t,e,n){for(var i,o=t.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=t,e=typeof i.type=="function"?Ov(i,e,n):Lv(n,i,i,o,i.__e,e));return e}function el(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){el(n,e)}):e.push(t)),e}function Lv(t,e,n,i,o,a){var l,c,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(o),l=null;else{for(c=a,d=0;(c=c.nextSibling)&&d<i.length;d+=2)if(c==o)break e;t.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function yS(t,e,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in e||tl(t,a,null,n[a],i);for(a in e)o&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||tl(t,a,e[a],n[a],i)}function wg(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||mS.test(e)?n:n+"px"}function tl(t,e,n,i,o){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||wg(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||wg(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?i||t.addEventListener(e,a?$g:xg,a):t.removeEventListener(e,a?$g:xg,a);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function xg(t){this.l[t.type+!1](_e.event?_e.event(t):t)}function $g(t){this.l[t.type+!0](_e.event?_e.event(t):t)}function Id(t,e,n,i,o,a,l,c,d){var f,h,p,v,b,_,w,x,S,L,C,R=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,c=e.__e=n.__e,e.__h=null,a=[c]),(f=_e.__b)&&f(e);try{e:if(typeof R=="function"){if(x=e.props,S=(f=R.contextType)&&i[f.__c],L=f?S?S.props.value:f.__:i,n.__c?w=(h=e.__c=n.__c).__=h.__E:("prototype"in R&&R.prototype.render?e.__c=h=new R(x,L):(e.__c=h=new Qn(x,L),h.constructor=R,h.render=_S),S&&S.sub(h),h.props=x,h.state||(h.state={}),h.context=L,h.__n=i,p=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Wr({},h.__s)),Wr(h.__s,R.getDerivedStateFromProps(x,h.__s))),v=h.props,b=h.state,p)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&x!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(x,L),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(x,h.__s,L)===!1||e.__v===n.__v){h.props=x,h.state=h.__s,e.__v!==n.__v&&(h.__d=!1),h.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),h.__h.length&&l.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(x,h.__s,L),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,b,_)})}h.context=L,h.props=x,h.state=h.__s,(f=_e.__r)&&f(e),h.__d=!1,h.__v=e,h.__P=t,f=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=Wr(Wr({},i),h.getChildContext())),p||h.getSnapshotBeforeUpdate==null||(_=h.getSnapshotBeforeUpdate(v,b)),C=f!=null&&f.type===cs&&f.key==null?f.props.children:f,Rv(t,Array.isArray(C)?C:[C],e,n,i,o,a,l,c,d),h.base=e.__e,e.__h=null,h.__h.length&&l.push(h),w&&(h.__E=h.__=null),h.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=bS(n.__e,e,n,i,o,a,l,d);(f=_e.diffed)&&f(e)}catch(O){e.__v=null,(d||a!=null)&&(e.__e=c,e.__h=!!d,a[a.indexOf(c)]=null),_e.__e(O,e,n)}}function Pv(t,e){_e.__c&&_e.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){_e.__e(i,n.__v)}})}function bS(t,e,n,i,o,a,l,c){var d,f,h,p=n.props,v=e.props,b=e.type,_=0;if(b==="svg"&&(o=!0),a!=null){for(;_<a.length;_++)if((d=a[_])&&"setAttribute"in d==!!b&&(b?d.localName===b:d.nodeType===3)){t=d,a[_]=null;break}}if(t==null){if(b===null)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,v.is&&v),a=null,c=!1}if(b===null)p===v||c&&t.data===v||(t.data=v);else{if(a=a&&El.call(t.childNodes),f=(p=n.props||Ja).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!c){if(a!=null)for(p={},_=0;_<t.attributes.length;_++)p[t.attributes[_].name]=t.attributes[_].value;(h||f)&&(h&&(f&&h.__html==f.__html||h.__html===t.innerHTML)||(t.innerHTML=h&&h.__html||""))}if(yS(t,v,p,o,c),h)e.__k=[];else if(_=e.props.children,Rv(t,Array.isArray(_)?_:[_],e,n,i,o&&b!=="foreignObject",a,l,a?a[0]:n.__k&&us(n,0),c),a!=null)for(_=a.length;_--;)a[_]!=null&&Av(a[_]);c||("value"in v&&(_=v.value)!==void 0&&(_!==p.value||_!==t.value||b==="progress"&&!_)&&tl(t,"value",_,p.value,!1),"checked"in v&&(_=v.checked)!==void 0&&_!==t.checked&&tl(t,"checked",_,p.checked,!1))}return t}function Mv(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){_e.__e(i,n)}}function Bv(t,e,n){var i,o;if(_e.unmount&&_e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||Mv(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){_e.__e(a,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&Bv(i[o],e,typeof t.type!="function");n||t.__e==null||Av(t.__e),t.__e=t.__d=void 0}function _S(t,e,n){return this.constructor(t,n)}function jv(t,e,n){var i,o,a;_e.__&&_e.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,a=[],Id(e,t=(!i&&n||e).__k=Bu(cs,null,[t]),o||Ja,Ja,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?El.call(e.childNodes):null,a,!i&&n?n:o?o.__e:e.firstChild,i),Pv(a,t)}El=Tv.slice,_e={__e:function(t,e){for(var n,i,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(a){t=a}throw t}},Cv=0,Qn.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Wr({},this.state),typeof t=="function"&&(t=t(Wr({},n),this.props)),t&&Wr(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),_g(this))},Qn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_g(this))},Qn.prototype.render=cs,Hs=[],Sv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Xa.__r=0;var wS=0;function K(t,e,n,i,o){var a,l,c={};for(l in e)l=="ref"?a=e[l]:c[l]=e[l];var d={type:t,props:c,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--wS,__source:i,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)c[l]===void 0&&(c[l]=a[l]);return _e.vnode&&_e.vnode(d),d}function xS(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function $S(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var Zr={set:xS,get:$S};const ou=new Map,ES=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function kS(){for(const{v:t,emoji:e}of ES)if(Nv(e))return t}function CS(){return!Nv("🇨🇦")}function Nv(t){if(ou.has(t))return ou.get(t);const e=SS(t);return ou.set(t,e),e}const SS=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,i=Math.floor(e/2);return t.font=i+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,o=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(o,0,22),t.fillStyle="#0000FF",t.fillText(o,n,22);const a=t.getImageData(0,0,n,e).data,l=a.length;let c=0;for(;c<l&&!a[c+3];c+=4);if(c>=l)return!1;const d=n+c/4%n,f=Math.floor(c/4/n),h=t.getImageData(d,f,1,1).data;return!(a[c]!==h[0]||a[c+2]!==h[2]||t.measureText(o).width>=n)}})();var Eg={latestVersion:kS,noCountryFlags:CS};const ju=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function TS(t){It||(It=Zr.get("frequently")||{});const e=t.id||t;e&&(It[e]||(It[e]=0),It[e]+=1,Zr.set("last",e),Zr.set("frequently",It))}function AS({maxFrequentRows:t,perLine:e}){if(!t)return[];It||(It=Zr.get("frequently"));let n=[];if(!It){It={};for(let a in ju.slice(0,e)){const l=ju[a];It[l]=e-a,n.push(l)}return n}const i=t*e,o=Zr.get("last");for(let a in It)n.push(a);if(n.sort((a,l)=>{const c=It[l],d=It[a];return c==d?a.localeCompare(l):c-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete It[l];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),Zr.set("frequently",It)}return n}var Dv={add:TS,get:AS,DEFAULTS:ju},Uv={};Uv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var wr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,He=null;const au={};async function kg(t){if(au[t])return au[t];const n=await(await fetch(t)).json();return au[t]=n,n}let lu=null,Fv=null,zv=!1;function kl(t,{caller:e}={}){return lu||(lu=new Promise(n=>{Fv=n})),t?IS(t):e&&!zv&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),lu}async function IS(t){zv=!0;let{emojiVersion:e,set:n,locale:i}=t;if(e||(e=wr.emojiVersion.value),n||(n=wr.set.value),i||(i=wr.locale.value),He)He.categories=He.categories.filter(d=>!d.name);else{He=(typeof t.data=="function"?await t.data():t.data)||await kg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),He.emoticons={},He.natives={},He.categories.unshift({id:"frequent",emojis:[]});for(const d in He.aliases){const f=He.aliases[d],h=He.emojis[f];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}He.originalCategories=He.categories}if(Pt=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(i=="en"?kv(Uv):await kg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),t.custom)for(let d in t.custom){d=parseInt(d);const f=t.custom[d],h=t.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Pt.categories.custom),h&&!f.icon&&(f.target=h.target||h),He.categories.push(f);for(const p of f.emojis)He.emojis[p.id]=p}}t.categories&&(He.categories=He.originalCategories.filter(d=>t.categories.indexOf(d.id)!=-1).sort((d,f)=>{const h=t.categories.indexOf(d.id),p=t.categories.indexOf(f.id);return h-p}));let o=null,a=null;n=="native"&&(o=Eg.latestVersion(),a=t.noCountryFlags||Eg.noCountryFlags());let l=He.categories.length,c=!1;for(;l--;){const d=He.categories[l];if(d.id=="frequent"){let{maxFrequentRows:p,perLine:v}=t;p=p>=0?p:wr.maxFrequentRows.value,v||(v=wr.perLine.value),d.emojis=Dv.get({maxFrequentRows:p,perLine:v})}if(!d.emojis||!d.emojis.length){He.categories.splice(l,1);continue}const{categoryIcons:f}=t;if(f){const p=f[d.id];p&&!d.icon&&(d.icon=p)}let h=d.emojis.length;for(;h--;){const p=d.emojis[h],v=p.id?p:He.emojis[p],b=()=>{d.emojis.splice(h,1)};if(!v||t.exceptEmojis&&t.exceptEmojis.includes(v.id)){b();continue}if(o&&v.version>o){b();continue}if(a&&d.id=="flags"&&!MS.includes(v.id)){b();continue}if(!v.search){if(c=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([w,x])=>{if(w)return(Array.isArray(w)?w:[w]).map(S=>(x?S.split(/[-|_|\s]+/):[S]).map(L=>L.toLowerCase())).flat()}).flat().filter(w=>w&&w.trim()).join(","),v.emoticons)for(const w of v.emoticons)He.emoticons[w]||(He.emoticons[w]=v.id);let _=0;for(const w of v.skins){if(!w)continue;_++;const{native:x}=w;x&&(He.natives[x]=v.id,v.search+=`,${x}`);const S=_==1?"":`:skin-tone-${_}:`;w.shortcodes=`:${v.id}:${S}`}}}}c&&ts.reset(),Fv()}function Hv(t,e,n){t||(t={});const i={};for(let o in e)i[o]=Wv(o,t,e,n);return i}function Wv(t,e,n,i){const o=n[t];let a=i&&i.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const RS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Nu=null;function OS(t){return t.id?t:He.emojis[t]||He.emojis[He.aliases[t]]||He.emojis[He.natives[t]]}function LS(){Nu=null}async function PS(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await kl(null,{caller:n||"SearchIndex.search"});const i=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((c,d,f)=>c.trim()&&f.indexOf(c)==d);if(!i.length)return;let o=Nu||(Nu=Object.values(He.emojis)),a,l;for(const c of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${c}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==c?0:f+1)}o=a}return a.length<2||(a.sort((c,d)=>{const f=l[c.id],h=l[d.id];return f==h?c.id.localeCompare(d.id):f-h}),a.length>e&&(a=a.slice(0,e))),a}var ts={search:PS,get:OS,reset:LS,SHORTCODES_REGEX:RS};const MS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function BS(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,i)=>n==e[i])}async function jS(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function NS(t,{skinIndex:e=0}={}){const n=t.skins[e]||(()=>(e=0,t.skins[e]))(),i={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(i.skin=e+1),n.src&&(i.src=n.src),t.aliases&&t.aliases.length&&(i.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(i.emoticons=t.emoticons),i}const DS={activity:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:K("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),K("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:K("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),K("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:K("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),K("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),K("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},US={loupe:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var nl={categories:DS,search:US};function Du(t){let{id:e,skin:n,emoji:i}=t;if(t.shortcodes){const c=t.shortcodes.match(ts.SHORTCODES_REGEX);c&&(e=c[1],c[2]&&(n=c[2]))}if(i||(i=ts.get(e||t.native)),!i)return t.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/64/${o.unified}.png`:void 0),l=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/sheets-256/64.png`;return K("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:a?K("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):t.set=="native"?K("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):K("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${l})`,backgroundSize:`${100*He.sheet.cols}% ${100*He.sheet.rows}%`,backgroundPosition:`${100/(He.sheet.cols-1)*o.x}% ${100/(He.sheet.rows-1)*o.y}%`}})})}const FS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class qv extends FS{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,i){if(!this.component)return;const o=Wv(e,{[e]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:o}):(this.component.props[e]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const i=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class zS extends qv{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var Zv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:wr.set,skin:wr.skin};class Kv extends qv{async connectedCallback(){const e=Hv(this.props,Zv,this);e.element=this,e.ref=n=>{this.component=n},await kl(),!this.disconnected&&jv(K(Du,{...e}),this)}constructor(e){super(e)}}On(Kv,"Props",Zv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Kv);var Cg,Uu=[],Sg=_e.__b,Tg=_e.__r,Ag=_e.diffed,Ig=_e.__c,Rg=_e.unmount;function HS(){var t;for(Uu.sort(function(e,n){return e.__v.__b-n.__v.__b});t=Uu.pop();)if(t.__P)try{t.__H.__h.forEach(Aa),t.__H.__h.forEach(Fu),t.__H.__h=[]}catch(e){t.__H.__h=[],_e.__e(e,t.__v)}}_e.__b=function(t){Sg&&Sg(t)},_e.__r=function(t){Tg&&Tg(t);var e=t.__c.__H;e&&(e.__h.forEach(Aa),e.__h.forEach(Fu),e.__h=[])},_e.diffed=function(t){Ag&&Ag(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Uu.push(e)!==1&&Cg===_e.requestAnimationFrame||((Cg=_e.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),Og&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);Og&&(i=requestAnimationFrame(o))})(HS))},_e.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Aa),n.__h=n.__h.filter(function(i){return!i.__||Fu(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],_e.__e(i,n.__v)}}),Ig&&Ig(t,e)},_e.unmount=function(t){Rg&&Rg(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Aa(i)}catch(o){e=o}}),e&&_e.__e(e,n.__v))};var Og=typeof requestAnimationFrame=="function";function Aa(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function Fu(t){t.__c=t.__()}function WS(t,e){for(var n in e)t[n]=e[n];return t}function Lg(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function rl(t){this.props=t}(rl.prototype=new Qn).isPureReactComponent=!0,rl.prototype.shouldComponentUpdate=function(t,e){return Lg(this.props,t)||Lg(this.state,e)};var Pg=_e.__b;_e.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Pg&&Pg(t)};var qS=_e.__e;_e.__e=function(t,e,n){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}qS(t,e,n)};var Mg=_e.unmount;function cu(){this.__u=0,this.t=null,this.__b=null}function Vv(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function xa(){this.u=null,this.o=null}_e.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Mg&&Mg(t)},(cu.prototype=new Qn).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Vv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(c):c())};n.__R=l;var c=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function p(v,b,_){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(w){return p(w,b,_)}),v.__c&&v.__c.__P===b&&(v.__e&&_.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=_)),v}(f,f.__c.__P,f.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=e.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),t.then(l,l)},cu.prototype.componentWillUnmount=function(){this.t=[]},cu.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,c,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=WS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=c),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,c,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=e.__e&&Bu(cs,null,t.fallback);return o&&(o.__h=null),[Bu(cs,null,e.__e?null:t.children),o]};var Bg=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(xa.prototype=new Qn).__e=function(t){var e=this,n=Vv(e.__v),i=e.o.get(t);return i[0]++,function(o){var a=function(){e.props.revealOrder?(i.push(o),Bg(e,t,i)):o()};n?n(a):a()}},xa.prototype.render=function(t){this.u=null,this.o=new Map;var e=el(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},xa.prototype.componentDidUpdate=xa.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Bg(t,n,e)})};var ZS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,KS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,VS=typeof document<"u",GS=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};Qn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Qn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var jg=_e.event;function QS(){}function YS(){return this.cancelBubble}function JS(){return this.defaultPrevented}_e.event=function(t){return jg&&(t=jg(t)),t.persist=QS,t.isPropagationStopped=YS,t.isDefaultPrevented=JS,t.nativeEvent=t};var Ng={configurable:!0,get:function(){return this.class}},Dg=_e.vnode;_e.vnode=function(t){var e=t.type,n=t.props,i=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var a in i={},n){var l=n[a];VS&&a==="children"&&e==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+e)&&!GS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&KS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}e=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=el(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),e=="select"&&i.defaultValue!=null&&(i.value=el(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),t.props=i,n.class!=n.className&&(Ng.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Ng))}t.$$typeof=ZS,Dg&&Dg(t)};var Ug=_e.__r;_e.__r=function(t){Ug&&Ug(t),t.__c};const XS={light:"outline",dark:"solid"};class eT extends rl{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return K("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return K("img",{src:n.src})}const i=nl.categories[e.id]||nl.categories.custom,o=this.props.icons=="auto"?XS[this.props.theme]:this.props.icons;return i[o]||i}render(){let e=null;return K("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:K("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(e=i),K("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),K("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=He.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class tT extends rl{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const $a={rowsPerRender:10};class nT extends Qn{getInitialState(e=this.props){return{skin:Zr.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:br(),navigation:br(),scroll:br(),search:br(),searchInput:br(),skinToneButton:br(),skinToneRadio:br()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(e={}){await kl(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=He;this.refs.categories=new Map;const n=He.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const c=this.grid.length-1,d=c%$a.rowsPerRender?{}:br();return d.index=c,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of e){const a=[];let l=i(a,o);for(let c of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(c);this.refs.categories.set(o.id,{root:br(),rows:a})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:i}=e,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const i=this.state.searchResults||this.grid,o=i[e]&&i[e][n];if(o)return ts.get(o)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,i=l=>{l!=e.state.categoryId&&e.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const c=[...n];for(const[d,f]of c)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?e[a]=!0:delete e[a]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*($a.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*$a.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:i,right:o,up:a,down:l}){const c=this.state.searchResults||this.grid;if(!c.length)return;let[d,f]=this.state.pos;const h=(()=>{if(d==0&&f==0&&!e.repeat&&(i||a))return null;if(d==-1)return!e.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let p=c[d];const v=i?-1:1;if(f+=v,!p[f]){if(d+=v,p=c[d],!p)return d=i?0:c.length-1,f=i?0:c[d].length-1,[d,f];f=i?p.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const p=c[d];return p?(p[f]||(f=p.length-1),[d,f]):(d=a?0:c.length-1,f=a?0:c[d].length-1,[d,f])}})();if(h)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:e,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(e=i[n].__categoryId),e&&(l=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const c=i[n].__index,d=l+c*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=NS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Dv.add(o,this.props),this.props.onEmojiSelect(o,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),Zr.set("skin",e)}renderNav(){return K(eT,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return K("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[K("div",{class:"flex flex-middle flex-grow",children:[K("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:K(Du,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),K("div",{class:`margin-${this.dir[0]}`,children:e||n?K("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[K("div",{class:"preview-title ellipsis",children:e?e.name:Pt.search_no_results_1}),K("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Pt.search_no_results_2})]}):K("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(e.skins[l-1]||e.skins[0]).native,f=BS(this.state.pos,n),h=n.concat(e.id).join("");return K(tT,{selected:f,skin:l,size:a,children:K("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:p=>this.handleEmojiClick({e:p,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[K("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),K(Du,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return K("div",{children:[K("div",{class:"spacer"}),K("div",{class:"flex flex-middle",children:[K("div",{class:"search relative flex-grow",children:[K("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),K("span",{class:"icon loupe flex",children:nl.search.loupe}),this.state.searchResults&&K("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:nl.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?K("div",{class:"category",ref:this.refs.search,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),K("div",{children:e.length?e.map((n,i)=>K("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:e}))})):K("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&K("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:e}=He,n=!!this.state.searchResults,i=this.getPerLine();return K("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return K("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),K("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((c,d)=>{const f=c.index-c.index%$a.rowsPerRender,h=this.state.visibleRows[f],p="current"in c?c:void 0;if(!h&&!p)return null;const v=d*i,b=v+i,_=o.emojis.slice(v,b);return _.length<i&&_.push(...new Array(i-_.length)),K("div",{"data-index":c.index,ref:p,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&_.map((w,x)=>{if(!w)return K("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const S=ts.get(w);return this.renderEmojiButton(S,{pos:[c.index,x],posinset:c.posinset+x,grid:this.grid})})},c.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:K("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:K("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:K("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return K("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),K("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,c=this.state.skin==l;return K("div",{children:[K("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Pt.skins[l],ref:c?this.refs.skinToneRadio:null,defaultChecked:c,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),K("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[K("span",{class:`skin-tone skin-tone-${l}`}),K("span",{class:"margin-small-lr",children:Pt.skins[l]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return K("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&K("div",{class:"padding-lr",children:this.renderSearch()}),K("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:K("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),On(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),On(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),On(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),On(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),On(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await ts.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],c=[];c.setsize=o.length;let d=null;for(let f of o)(!c.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=c.length,c.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:c,pos:l},a)}),On(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),On(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),On(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),On(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await jS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class Rd extends zS{async connectedCallback(){const e=Hv(this.props,wr,this);e.element=this,e.ref=n=>{this.component=n},await kl(e),!this.disconnected&&jv(K(nT,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:kv(Gv)})}}On(Rd,"Props",wr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Rd);var Gv={};Gv=`:host {
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

`;const Qv=t=>{let e,n;const{config:i}=Xe(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new Rd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),t.onEmojiSelect?.(d),e?.close()}}),e?.elem()?.appendChild(n)};return jn(()=>{o()}),E(Ad,{ref:l=>{e=l},position:"bottom",get button(){return t.children},onOpen:a,onClose:o})},rT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ds=(t={})=>(()=>{const e=rT();return it(e,t,!0,!0),e})(),iT=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),sT=t=>{let e;const n=i=>{i.target===e&&t.onClose?.()};return(()=>{const i=iT();i.$$click=n;const o=e;return typeof o=="function"?Nn(o,i):e=i,k(i,()=>t.children),i})()};vt(["click"]);const oT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Li=t=>E(sT,{onClose:()=>t.onClose?.(),get children(){const e=oT(),n=e.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>t.onClose?.(),k(i,E(pe,{get when(){return t?.closeButton},get fallback(){return E(ds,{})},keyed:!0,children:a=>a()})),k(o,()=>t.children),e}});vt(["click"]);const aT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),lT=(t={})=>(()=>{const e=aT();return it(e,t,!0,!0),e})(),cT=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),uT=B('<div class="relative inline-block"><button type="button">'),dT=t=>{const[e,n]=Ce(!1),i=()=>{navigator.clipboard.writeText(t.text).then(()=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=uT(),a=o.firstChild;return a.$$click=i,k(a,E(lT,{})),k(o,E(pe,{get when(){return e()},get children(){return cT()}}),null),Le(()=>Gu(a,t.class)),o})()};vt(["click"]);const fT=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),hT=t=>{const e=Fe(()=>JSON.stringify(t.event,null,2));return E(Li,{get onClose(){return t.onClose},get children(){const n=fT(),i=n.firstChild,o=i.nextSibling;return k(i,e),k(o,E(dT,{class:"h-4 w-4",get text(){return e()}})),n}})},pT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),gT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 select-text truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),vT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),mT=t=>{const{profile:e}=bs(()=>({pubkey:t.pubkey}));return(()=>{const n=gT(),i=n.firstChild,o=i.nextSibling,a=o.firstChild,l=a.firstChild,c=l.firstChild,d=c.firstChild;return i.$$click=f=>{f.preventDefault(),t.onShowProfile?.()},k(i,E(pe,{get when(){return e()?.picture},keyed:!0,children:f=>(()=>{const h=vT();return Ue(h,"src",f),h})()})),l.$$click=f=>{f.preventDefault(),t?.onShowProfile?.()},k(c,E(pe,{get when(){return(e()?.display_name?.length??0)>0},get children(){const f=pT();return k(f,()=>e()?.display_name),f}}),d),k(d,E(pe,{get when(){return e()?.name},get fallback(){return`@${_o(t.pubkey)}`},keyed:!0,children:f=>`@${f}`})),n})()};vt(["click"]);const yT=B("<div>"),Yr=t=>{let e;const[n,i]=Ce(!1);return tr(()=>{const o=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&i(!0)})},{threshold:t.threshold??0});e!=null&&o.observe(e),jn(()=>{o.disconnect()})}),[(()=>{const o=yT(),a=e;return typeof a=="function"?Nn(a,o):e=o,o})(),E(pe,{get when(){return n()},get fallback(){return t.fallback},keyed:!0,children:o=>t.children()})]},bT=B('<div class="px-4 py-2"><div> 件</div><div>'),_T=B('<div class="flex border-t py-1">'),wT=B('<div class="h-6">'),Od=t=>{const{showProfile:e}=ti();return E(Li,{get onClose(){return t.onClose},get children(){const n=bT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return k(i,()=>t.data.length,o),k(a,E(Ft,{get each(){return t.data},children:l=>{const c=()=>t.pubkeyExtractor(l);return(()=>{const d=_T();return k(d,E(pe,{get when(){return t.renderInfo},keyed:!0,children:f=>f(l)}),null),k(d,E(Yr,{get fallback(){return wT()},children:()=>E(mT,{get pubkey(){return c()},onShowProfile:()=>e(c())})}),null),d})()}})),n}})},xT=t=>Math.floor(+t/1e3),Fr=()=>xT(new Date),$T=({notifyPubkeys:t,rootEventId:e,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:c})=>{const d=[],f=t?.map(p=>["p",p])??[],h=[];return e!=null&&d.push(["e",e,"","root"]),e==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(p=>d.push(["e",p,"","mention"])),e!=null&&i!=null&&e!==i&&d.push(["e",i,"","reply"]),a?.forEach(p=>h.push(["t",p])),l?.forEach(p=>h.push(["r",p])),o!=null&&h.push(["content-warning",o]),c!=null&&c.length>0&&h.push(...c),[...d,...f,...h]},_s=()=>{const t=Sd(),e=async(d,f)=>{const h={...f},p=go(h);if(h.id=p,window.nostr==null)throw new Error("NIP-07 implementation not found");const v=await window.nostr.signEvent(h);if(!vo({...v,id:p}))throw new Error("nostr.signEvent returned invalid data");return d.map(async b=>{const _=await t().ensureRelay(b);try{await _.publish(v),console.log(`${b} has accepted our event`)}catch(w){const x=w instanceof Error?w.message:JSON.stringify(w);console.warn(`failed to publish to ${b}: ${x}`)}})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:h,content:p}=d,v=$T(d),b={kind:1,pubkey:h,created_at:Fr(),tags:v,content:p};return e(f,b)},publishReaction:async({relayUrls:d,pubkey:f,eventId:h,reactionTypes:p,notifyPubkey:v})=>{const b=[["e",h,""],["p",v]];p.type==="CustomEmoji"&&b.push(["emoji",p.shortcode,p.url]);const _={kind:7,pubkey:f,created_at:Fr(),tags:b,content:p.content};return e(d,_)},publishRepost:async({relayUrls:d,pubkey:f,eventId:h,notifyPubkey:p})=>{const v={kind:6,pubkey:f,created_at:Fr(),tags:[["e",h,""],["p",p]],content:""};return e(d,v)},updateProfile:async({relayUrls:d,pubkey:f,profile:h,otherProperties:p})=>{const v={...h,...p},b={kind:lt.Metadata,pubkey:f,created_at:Fr(),tags:[],content:JSON.stringify(v)};return e(d,b)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:h,content:p})=>{const v={kind:lt.Contacts,pubkey:f,created_at:Fr(),tags:h,content:p};return e(d,v)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:h})=>{const p={kind:lt.EventDeletion,pubkey:f,created_at:Fr(),tags:[["e",h,""]],content:""};return e(d,p)}}},ET=/\p{Emoji_Presentation}/u,Yv=t=>["useReactions",t],Ld=t=>{const{shouldMuteEvent:e}=Xe(),n=Jr(),i=Fe(()=>Yv(t())),o=Ai(i,gv({taskProvider:([,f])=>{if(f==null)return null;const{eventId:h}=f;return new ys({type:"Reactions",mentionedEventId:h})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>(o.data??[]).filter(h=>!e(h));return{reactions:a,reactionsGrouped:()=>{const f=new Map;return a().forEach(h=>{const p=Ya(h).isCustomEmoji()?`${h.content}${Ya(h).getUrl()??""}`:h.content,v=f.get(p)??[];v.push(h),f.set(p,v)}),f},isReactedBy:f=>a().findIndex(h=>h.pubkey===f)!==-1,isReactedByWithEmoji:f=>a().findIndex(h=>h.pubkey===f&&ET.test(h.content))!==-1,query:o}},Jv=t=>{const e=Jr(),n=Fe(t),i=_s();return Ei({mutationKey:["useReactionMutation",n().eventId],mutationFn:(...a)=>i.publishReaction(...a).then(l=>Promise.allSettled(l.map(ei(5e3)))),onSuccess:a=>{const l=a.filter(d=>d.status==="fulfilled").length,c=a.length-l;l===a.length?console.log("Succeeded to publish a reaction"):l>0?console.warn(`failed to publish a reaction on ${c} relays`):console.error("failed to publish reaction on all relays")},onError:a=>{console.error("failed to publish reaction: ",a)},onSettled:()=>{const a=Yv({eventId:n().eventId});e.refetchQueries({queryKey:a}).then(()=>e.invalidateQueries({queryKey:a})).catch(l=>console.error("failed to refetch reactions",l))}})},Xv=t=>["useReposts",t],em=t=>{const{shouldMuteEvent:e}=Xe(),n=Jr(),i=Fe(t),o=Fe(()=>Xv(i())),a=Ai(o,gv({taskProvider:([,d])=>{if(d==null)return null;const{eventId:f}=d;return new ys({type:"Reposts",mentionedEventId:f})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(f=>!e(f));return{reposts:l,isRepostedBy:d=>l().findIndex(f=>f.pubkey===d)!==-1,query:a}},kT=t=>{const e=Jr(),n=Fe(t),i=_s();return Ei({mutationKey:["useRepostMutation",n().eventId],mutationFn:(...a)=>i.publishRepost(...a).then(l=>Promise.allSettled(l.map(ei(1e4)))),onSuccess:a=>{const l=a.filter(d=>d.status==="fulfilled").length,c=a.length-l;l===a.length?console.log("Succeeded to publish a repost"):l>0?console.warn(`Failed to publish a repost on ${c} relays`):console.error("Failed to publish a repost on all relays")},onError:a=>{console.error("failed to publish repost: ",a)},onSettled:()=>{const a=Xv({eventId:n().eventId});e.refetchQueries({queryKey:a}).then(()=>e.invalidateQueries({queryKey:a})).catch(l=>console.error("failed to refetch repost",l))}})};let uu=!1;const[Ea,CT]=Ce(void 0),sr=()=>(tr(()=>{if(Ea()!=null)return;let t=0;const e=setInterval(()=>{if(t>=20){if(clearInterval(e),Ea()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Ea()==null&&!uu&&(uu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(e),CT(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{uu=!1})),t+=1},200)}),Ea),tm=B('<div class="text-sm text-zinc-400">'),nm=B('<div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4">'),ST=B('<span class="inline-block h-4 w-4">'),TT=B('<div class="flex shrink-0 items-center gap-1">'),AT=B('<div class="w-6">'),IT=B('<div class="flex gap-2 overflow-x-auto py-1">'),RT=B('<span class="ml-1 text-sm">'),OT=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),LT=B('<span class="text-red-500">'),PT=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),MT=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500">'),{noteEncode:BT}=mo,jT=t=>{if(t.native!=null)return{type:"Emoji",content:t.native};if(t.src!=null)return{type:"CustomEmoji",content:`:${t.id}:`,shortcode:t.id,url:t.src};throw new Error("unknown emoji")},NT=t=>{const{config:e}=Xe(),n=sr(),[i,o]=Ce(!1),{reactions:a,isReactedByWithEmoji:l,isReactedBy:c}=Ld(()=>({eventId:t.event.id})),d=Fe(()=>{const _=n();return _!=null&&c(_)||i()}),f=Fe(()=>{const _=n();return _!=null&&l(_)}),h=Jv(()=>({eventId:t.event.id})),p=_=>{d()||ln([n(),t.event.id])(([w,x])=>{h.mutate({relayUrls:e().relayUrls,pubkey:w,reactionTypes:_??{type:"LikeDislike",content:"+"},eventId:x,notifyPubkey:t.event.pubkey}),o(!0)})},v=_=>{_.stopPropagation(),p()},b=_=>{p(jT(_))};return[(()=>{const _=nm(),w=_.firstChild;return w.$$click=v,k(w,E(pe,{get when(){return Fe(()=>!!d())()&&!f()},get fallback(){return E(_v,{})},get children(){return E(xv,{})}})),k(_,E(pe,{get when(){return Fe(()=>!e().hideCount&&!e().showEmojiReaction)()&&a().length>0},get children(){const x=tm();return k(x,()=>a().length),x}}),null),Le(x=>{const S={"text-zinc-400":!d()||f(),"hover:text-rose-400":!d()||f(),"text-rose-400":d()&&!f()||h.isLoading},L=h.isLoading;return x._v$=Pa(_,S,x._v$),L!==x._v$2&&(w.disabled=x._v$2=L),x},{_v$:void 0,_v$2:void 0}),_})(),E(pe,{get when(){return e().useEmojiReaction},get children(){const _=TT();return k(_,E(Qv,{onEmojiSelect:b,get children(){const w=ST();return k(w,E(wv,{})),w}})),Le(w=>Pa(_,{"text-zinc-400":!d()||!f(),"hover:text-rose-400":!d()||!f(),"text-rose-400":d()&&f()||h.isLoading},w)),_}})]},DT=t=>{const{config:e}=Xe(),n=sr(),[i,o]=Ce(!1),{reposts:a,isRepostedBy:l}=em(()=>({eventId:t.event.id})),c=Fe(()=>{const h=n();return h!=null&&l(h)||i()}),d=kT(()=>({eventId:t.event.id})),f=h=>{h.stopPropagation(),!c()&&ln([n(),t.event.id])(([p,v])=>{d.mutate({relayUrls:e().relayUrls,pubkey:p,eventId:v,notifyPubkey:t.event.pubkey}),o(!0)})};return(()=>{const h=nm(),p=h.firstChild;return p.$$click=f,k(p,E(V1,{})),k(h,E(pe,{get when(){return Fe(()=>!e().hideCount)()&&a().length>0},get children(){const v=tm();return k(v,()=>a().length),v}}),null),Le(v=>{const b={"text-zinc-400":!c(),"hover:text-green-400":!c(),"text-green-400":c()||d.isLoading},_=d.isLoading;return v._v$3=Pa(h,b,v._v$3),_!==v._v$4&&(p.disabled=v._v$4=_),v},{_v$3:void 0,_v$4:void 0}),h})()},UT=t=>{const{reactions:e}=Ld(()=>({eventId:t.event.id}));return E(Od,{get data(){return e()},pubkeyExtractor:n=>n.pubkey,renderInfo:n=>(()=>{const i=AT();return k(i,E(Ev,{get reactionTypes(){return Ya(n).toReactionTypes()}})),i})(),get onClose(){return t.onClose}})},FT=t=>{const{reposts:e}=em(()=>({eventId:t.event.id}));return E(Od,{get data(){return e()},pubkeyExtractor:n=>n.pubkey,get onClose(){return t.onClose}})},zT=t=>{const{config:e}=Xe(),n=sr(),[i,o]=Ce(!1),{reactions:a,reactionsGrouped:l,isReactedBy:c}=Ld(()=>({eventId:t.event.id})),d=Jv(()=>({eventId:t.event.id})),f=()=>{const p=n();return p==null?i():i()||c(p)},h=p=>{f()||ln([n(),t.event.id])(([v,b])=>{d.mutate({relayUrls:e().relayUrls,pubkey:v,reactionTypes:p??{type:"LikeDislike",content:"+"},eventId:b,notifyPubkey:t.event.pubkey}),o(!0)})};return E(pe,{get when(){return Fe(()=>!!e().showEmojiReaction)()&&a().length>0},get children(){const p=IT();return k(p,E(Ft,{get each(){return[...l().entries()]},children:([,v])=>{const b=v.findIndex(w=>w.pubkey===n())>=0,_=Ya(v[0]).toReactionTypes();return(()=>{const w=OT();return w.$$click=x=>{x.stopPropagation(),h(_)},k(w,E(Ev,{reactionTypes:_}),null),k(w,E(pe,{get when(){return!e().hideCount},get children(){const x=RT();return k(x,()=>v.length),x}}),null),Le(x=>{const S={"text-zinc-400":!b,"hover:bg-zinc-50":!b,"bg-rose-50":b,"border-rose-200":b,"text-rose-400":b},L=f();return x._v$5=Pa(w,S,x._v$5),L!==x._v$6&&(w.disabled=x._v$6=L),x},{_v$5:void 0,_v$6:void 0}),w})()}})),p}})},HT=t=>{const e=dt(),{config:n}=Xe(),i=sr(),o=_s(),[a,l]=Ce(null),c=Fe(()=>kd(t.event)),d=()=>l(null),f=Ei({mutationKey:["deleteEvent",c().id],mutationFn:(...p)=>o.deleteEvent(...p).then(v=>Promise.allSettled(v.map(ei(1e4)))),onSuccess:p=>{const v=p.filter(_=>_.status==="fulfilled").length,b=p.length-v;v===p.length?window.alert(e()("post.deletedSuccessfully")):v>0?window.alert(e()("post.failedToDeletePartially",{count:b})):window.alert(e()("post.failedToDelete"))},onError:p=>{console.error("failed to delete",p)}}),h=[{content:()=>e()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(BT(t.event.id)).catch(p=>window.alert(p))}},{content:()=>e()("post.showJSON"),onSelect:()=>{l("EventDebugModal")}},{content:()=>e()("post.showReposts"),onSelect:()=>{l("Reposts")}},{content:()=>e()("post.showReactions"),onSelect:()=>{l("Reactions")}},{when:()=>c().pubkey===i(),content:()=>(()=>{const p=LT();return k(p,()=>e()("post.deletePost")),p})(),onSelect:()=>{const p=i();p!=null&&window.confirm(e()("post.confirmDelete"))&&f.mutate({relayUrls:n().relayUrls,pubkey:p,eventId:c().id})}}];return[E(zT,{get event(){return t.event}}),(()=>{const p=MT(),v=p.firstChild;return v.$$click=b=>{b.stopPropagation(),t.onClickReply()},k(v,E(iS,{})),k(p,E(DT,{get event(){return t.event}}),null),k(p,E(NT,{get event(){return t.event}}),null),k(p,E($v,{menu:h,get children(){const b=PT();return k(b,E(bv,{})),b}}),null),p})(),E(Ln,{get children(){return[E(Qe,{get when(){return a()==="EventDebugModal"},get children(){return E(hT,{get event(){return t.event},onClose:d})}}),E(Qe,{get when(){return a()==="Reactions"},get children(){return E(UT,{get event(){return t.event},onClose:d})}}),E(Qe,{get when(){return a()==="Reposts"},get children(){return E(FT,{get event(){return t.event},onClose:d})}})]}})]};vt(["click"]);const WT=B("<div>"),qT=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),ZT=B("<br>"),KT=B("<span>: "),VT=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),GT=t=>{const e=dt(),[n,i]=Ce(!1);return E(pe,{get when(){return!t.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=VT();return o.$$click=()=>i(!0),k(o,()=>e()("post.contentWarning.show"),null),k(o,E(pe,{get when(){return t.contentWarning.reason!=null},get children(){return[ZT(),(()=>{const a=KT(),l=a.firstChild;return k(a,()=>e()("post.contentWarning.reason"),l),k(a,()=>t.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=WT();return k(o,()=>t.children),o})(),E(pe,{get when(){return t.contentWarning.contentWarning},get children(){const o=qT();return o.$$click=()=>i(!1),o}})]}})};vt(["click"]);const rm=t=>{const{profile:e}=bs(()=>({pubkey:t.pubkey}));return E(pe,{get when(){return(e()?.name?.length??0)>0},get fallback(){return`@${_o(t.pubkey)}`},get children(){return["@",Fe(()=>e()?.name??t.pubkey)]}})},QT=B('<a target="_blank" rel="noreferrer noopener">'),er=t=>{const e=()=>{try{const n=new URL(t.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return E(pe,{get when(){return e()},get fallback(){return t.href},get children(){const n=QT();return k(n,()=>t.children??t.href),Le(i=>{const o=t.class,a=t.href;return o!==i._v$&&Gu(n,i._v$=o),a!==i._v$2&&Ue(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},YT=t=>{try{const e=new URL(t);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(e.pathname)}catch{return!1}},JT=t=>{try{const e=new URL(t);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(e.pathname)}catch{return!1}},XT=t=>{try{const e=new URL(t);return/^wss?:$/.test(e.protocol)}catch{return!1}},eA=t=>{try{const e=new URL(t);if(e.host==="i.imgur.com"||e.host==="imgur.com"){const n=e.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(e),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return e.toString()}if(e.host==="i.gyazo.com"){const n=new URL(e);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640${e.pathname}`,n.toString()}return e.toString()}catch{return t}},im=t=>{try{const e=new URL(t);return e.protocol==="https:"&&(e.host==="twitter.com"||e.host==="x.com")}catch{return!1}},tA=["www.youtube.com","m.youtube.com","youtube.com"],nA=t=>{try{const e=new URL(t);if(e.protocol!=="https:")return null;if(tA.includes(e.host)){if(e.pathname==="/watch"){const n=e.searchParams.get("v");if(n!=null)return{videoId:n}}if(e.pathname.startsWith("/shorts/")){const n=e.pathname.match(/^\/shorts\/([0-9a-zA-Z_-]*)$/);if(n)return{videoId:n[1]}}}return e.host==="youtu.be"&&e.pathname.lastIndexOf("/")===0?{videoId:e.pathname}:null}catch{return null}},rA=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),iA=B('<div class="aspect-video max-w-full">'),sA=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),oA=t=>{let e;const n=dt(),[i,o]=Ce(t.initialHidden);return E(pe,{get when(){return!i()},get fallback(){return(()=>{const a=rA();return a.$$click=()=>o(!1),k(a,()=>n()("post.showImage")),a})()},get children(){return E(Yr,{get fallback(){return(()=>{const a=iA();return k(a,E(er,{get href(){return t.url}})),a})()},children:()=>E(er,{class:"my-2 block",get href(){return t.url},get children(){const a=sA(),l=e;return typeof l=="function"?Nn(l,a):e=a,Le(c=>{const d=eA(t.url),f=t.url;return d!==c._v$&&Ue(a,"src",c._v$=d),f!==c._v$2&&Ue(a,"alt",c._v$2=f),c},{_v$:void 0,_v$2:void 0}),a}})})}})};vt(["click"]);const aA=B('<div class="my-1 rounded border p-1">'),lA=t=>E(pe,{get when(){return t.mentionedEvent.marker!=null&&t.mentionedEvent.marker.length>0},get fallback(){return E(Vs,{get eventId(){return t.mentionedEvent.eventId}})},get children(){const e=aA();return k(e,E(Yr,{children:()=>E(lo,{get eventId(){return t.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[lt.Text]}})})),e}}),cA=B('<button class="inline select-text text-blue-500 underline">'),du=t=>{const{showProfile:e}=ti(),n=()=>{e(t.pubkey)};return(()=>{const i=cA();return i.$$click=n,k(i,E(rm,{get pubkey(){return t.pubkey}})),i})()};vt(["click"]);const uA=t=>{const e={};return Array.from(t.head.querySelectorAll("meta")).forEach(n=>{const i=n.getAttribute("property"),o=n.getAttribute("content");i!=null&&o!=null&&(e[i]=o)}),e["og:image"]!=null&&e["og:title"]!=null&&e["og:description"]!=null&&e["og:url"]?{title:e["og:title"],description:e["og:description"],image:e["og:image"],url:e["og:url"]}:null},dA=t=>{const e=new DOMParser().parseFromString(t,"text/html");return uA(e)},fA=async t=>{const e=["www3.nhk.or.jp"],n=new URL(t);if(!e.includes(n.host))return null;const o=await(await fetch(n,{headers:{Accept:"text/html"}})).text();return dA(o)},hA=t=>{const n=Ai(()=>["useOgp",t().url],({queryKey:[,o]})=>fA(o),{staleTime:144e5,cacheTime:144e5,refetchOnWindowFocus:!1,refetchOnMount:!1});return{query:n,ogp:()=>n.data}},pA=B('<blockquote class="twitter-tweet"><a target="_blank" rel="noreferrer noopener">'),gA=B('<div class="my-2 rounded-lg border transition-colors hover:bg-slate-100"><img class="max-w-full rounded-t-lg object-contain shadow"><div class="mb-1 p-1"><div class="text-xs text-slate-500"></div><div class="text-sm"></div><div class="text-xs text-slate-500">'),vA=B('<div class="aspect-video max-w-full">'),mA=B('<div class="my-2 aspect-video w-full"><iframe loading="lazy" title="YouTube" class="my-2 h-full w-full" allowfullscreen>'),Fg=t=>{try{const e=new URL(t);return e.host="twitter.com",e.href}catch{return t}},yA=t=>{const e=new URL("https://www.youtube.com/embed/");return e.pathname+=t,e.searchParams.set("origin",window.location.origin),e.href},bA=t=>{let e;return xr(()=>{im(t.href)&&window.twttr?.widgets?.load(e)}),(()=>{const n=pA(),i=n.firstChild,o=e;return typeof o=="function"?Nn(o,n):e=n,k(i,()=>Fg(t.href)),Le(a=>{const l=t.class,c=Fg(t.href);return l!==a._v$&&Gu(i,a._v$=l),c!==a._v$2&&Ue(i,"href",a._v$2=c),a},{_v$:void 0,_v$2:void 0}),n})()},_A=t=>{const{ogp:e}=hA(()=>({url:t.url}));return E(pe,{get when(){return e()},get fallback(){return E(er,{get class(){return t.class},get href(){return t.url}})},keyed:!0,children:n=>E(er,{get href(){return t.url},get children(){const i=gA(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,c=l.nextSibling,d=c.nextSibling;return k(l,()=>new URL(n.url).host),k(c,()=>n.title),k(d,()=>n.description),Le(f=>{const h=n.title,p=n.image;return h!==f._v$3&&Ue(o,"alt",f._v$3=h),p!==f._v$4&&Ue(o,"src",f._v$4=p),f},{_v$3:void 0,_v$4:void 0}),i}})})},wA=t=>{const{config:e}=Xe();return E(Ln,{get fallback(){return E(er,{get class(){return t.class},get href(){return t.href}})},get children(){return[E(Qe,{get when(){return Fe(()=>!!e().embedding.twitter)()&&im(t.href)},get children(){return E(bA,{get class(){return t.class},get href(){return t.href}})}}),E(Qe,{get when(){return Fe(()=>!!e().embedding.youtube)()&&nA(t.href)},keyed:!0,children:({videoId:n})=>E(Yr,{get fallback(){return(()=>{const i=vA();return k(i,E(er,{get href(){return t.href}})),i})()},children:()=>(()=>{const i=mA(),o=i.firstChild;return Le(()=>Ue(o,"src",yA(n))),i})()})}),E(Qe,{get when(){return e().embedding.ogp},get children(){return E(Yr,{children:()=>E(_A,{get class(){return t.class},get url(){return t.href}})})}})]}})},xA=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),$A=B('<div class="aspect-video max-w-full">'),EA=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),kA=t=>{let e;const n=dt(),[i,o]=Ce(t.initialHidden);return E(pe,{get when(){return!i()},get fallback(){return(()=>{const a=xA();return a.$$click=()=>o(!1),k(a,()=>n()("post.showVideo")),a})()},get children(){return E(Yr,{get fallback(){return $A()},children:()=>E(er,{class:"my-2 block",get href(){return t.url},get children(){const a=EA(),l=a.firstChild,c=e;return typeof c=="function"?Nn(c,a):e=a,k(l,()=>n()("post.download")),Le(d=>{const f=t.url,h=t.url;return f!==d._v$&&Ue(a,"src",d._v$=f),h!==d._v$2&&Ue(l,"href",d._v$2=h),d},{_v$:void 0,_v$2:void 0}),a}})})}})};vt(["click"]);const[Pd,CA]=Ce({}),sm=t=>{Pd()[t]==null&&CA(e=>({...e,[t]:new MessageChannel}))},SA=t=>{const e=()=>Pd()[t().id],n=(o,a)=>{const l={requestId:o,request:a};e().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,c)=>{let d;const f=h=>{const p=h.data;p.requestId===o&&(e().port1.removeEventListener("message",f),p.ok?l(p.response):c(p.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{e().port1.removeEventListener("message",f),c(new Error(`TimeoutError: ${o}`))},a),e().port1.addEventListener("message",f,!1),e().port1.start()});return tr(()=>{const{id:o}=t();sm(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},TA=t=>{const e=Fe(t),n=()=>Pd()[e().id];tr(()=>{const{id:i}=e();sm(i);const o=n().port2,a=l=>{const{requestId:c,request:d}=l.data,f=e().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(p=>{const v={requestId:c,ok:!0,response:p};o.postMessage(v)}).catch(p=>{const v={requestId:c,ok:!1,error:p};o.postMessage(v)})};o.addEventListener("message",a),o.start(),jn(()=>{o.removeEventListener("message",a)})})},Cl=()=>SA(()=>({id:"CommandChannel"})),AA=t=>{TA(()=>({id:"CommandChannel",handler:e=>{const{commandType:n,handler:i}=t();e.command===n&&i(e)}}))},fu=B("<span>"),zg=B('<button class="select-text text-blue-500 underline">'),Hg=B('<div class="my-1 rounded border p-1">'),IA=B('<button class="select-text text-blue-500 underline"> (<!>)'),RA=B('<span class="text-blue-500 underline">'),OA=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),om=t=>{const{config:e,saveColumn:n}=Xe(),i=Cl(),o=l=>{n(xd({query:l})),i({command:"moveToLastColumn"}).catch(c=>console.error(c))},a=l=>{n(J1({name:l,relayUrls:[l]})),i({command:"moveToLastColumn"}).catch(c=>console.error(c))};return E(Ft,{get each(){return t.parsed},children:l=>{if(l.type==="PlainText")return(()=>{const c=fu();return k(c,()=>l.content),c})();if(l.type==="URL"){const c=()=>!e().showMedia||!t.embedding||(t.initialHidden??!1);return YT(l.content)?E(oA,{get url(){return l.content},get initialHidden(){return c()}}):JT(l.content)?E(kA,{get url(){return l.content},get initialHidden(){return c()}}):XT(l.content)?(()=>{const d=zg();return d.$$click=()=>a(l.content),k(d,()=>l.content),d})():E(wA,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReferenceResolved"){if(l.reference==null)return(()=>{const c=fu();return k(c,()=>l.content),c})();if(l.reference.type==="MentionedUser")return E(du,{get pubkey(){return l.reference.pubkey}});if(l.reference.type==="MentionedEvent")return t.embedding?E(lA,{get mentionedEvent(){return l.reference}}):E(Vs,{get eventId(){return l.reference.eventId}})}if(l.type==="Bech32Entity"){if(l.data.type==="note"&&t.embedding)return(()=>{const c=Hg();return k(c,E(lo,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[lt.Text]}})),c})();if(l.data.type==="nevent"&&t.embedding)return(()=>{const c=Hg();return k(c,E(lo,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),c})();if(l.data.type==="npub")return E(du,{get pubkey(){return l.data.data}});if(l.data.type==="nprofile")return E(du,{get pubkey(){return l.data.data.pubkey}});if(l.data.type==="nrelay"){const c=l.data.data;return(()=>{const d=IA(),f=d.firstChild,h=f.nextSibling;return h.nextSibling,d.$$click=()=>a(c),k(d,c,f),k(d,()=>l.content,h),d})()}return(()=>{const c=RA();return k(c,()=>l.content),c})()}return l.type==="HashTag"?(()=>{const c=zg();return c.$$click=()=>o(l.content),k(c,()=>l.content),c})():l.type==="CustomEmojiResolved"?l.url==null?(()=>{const c=fu();return k(c,()=>l.content),c})():(()=>{const c=OA();return Le(d=>{const f=l.url,h=l.content,p=l.shortcode;return f!==d._v$&&Ue(c,"src",d._v$=f),h!==d._v$2&&Ue(c,"alt",d._v$2=h),p!==d._v$3&&Ue(c,"title",d._v$3=p),d},{_v$:void 0,_v$2:void 0,_v$3:void 0}),c})():(console.error("Not all ParsedTextNoteNodes are covered",l),null)}})};vt(["click"]);const LA=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),am=(t={})=>(()=>{const e=LA();return it(e,t,!0,!0),e})(),PA=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),MA=(t={})=>(()=>{const e=PA();return it(e,t,!0,!0),e})(),BA=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),jA=(t={})=>(()=>{const e=BA();return it(e,t,!0,!0),e})();var Md={},wo={},lm={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,h){this.fn=d,this.context=f,this.once=h||!1}function a(d,f,h,p,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var b=new o(h,p||d,v),_=n?n+f:f;return d._events[_]?d._events[_].fn?d._events[_]=[d._events[_],b]:d._events[_].push(b):(d._events[_]=b,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function c(){this._events=new i,this._eventsCount=0}c.prototype.eventNames=function(){var f=[],h,p;if(this._eventsCount===0)return f;for(p in h=this._events)e.call(h,p)&&f.push(n?p.slice(1):p);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(h)):f},c.prototype.listeners=function(f){var h=n?n+f:f,p=this._events[h];if(!p)return[];if(p.fn)return[p.fn];for(var v=0,b=p.length,_=new Array(b);v<b;v++)_[v]=p[v].fn;return _},c.prototype.listenerCount=function(f){var h=n?n+f:f,p=this._events[h];return p?p.fn?1:p.length:0},c.prototype.emit=function(f,h,p,v,b,_){var w=n?n+f:f;if(!this._events[w])return!1;var x=this._events[w],S=arguments.length,L,C;if(x.fn){switch(x.once&&this.removeListener(f,x.fn,void 0,!0),S){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,h),!0;case 3:return x.fn.call(x.context,h,p),!0;case 4:return x.fn.call(x.context,h,p,v),!0;case 5:return x.fn.call(x.context,h,p,v,b),!0;case 6:return x.fn.call(x.context,h,p,v,b,_),!0}for(C=1,L=new Array(S-1);C<S;C++)L[C-1]=arguments[C];x.fn.apply(x.context,L)}else{var R=x.length,O;for(C=0;C<R;C++)switch(x[C].once&&this.removeListener(f,x[C].fn,void 0,!0),S){case 1:x[C].fn.call(x[C].context);break;case 2:x[C].fn.call(x[C].context,h);break;case 3:x[C].fn.call(x[C].context,h,p);break;case 4:x[C].fn.call(x[C].context,h,p,v);break;default:if(!L)for(O=1,L=new Array(S-1);O<S;O++)L[O-1]=arguments[O];x[C].fn.apply(x[C].context,L)}}return!0},c.prototype.on=function(f,h,p){return a(this,f,h,p,!1)},c.prototype.once=function(f,h,p){return a(this,f,h,p,!0)},c.prototype.removeListener=function(f,h,p,v){var b=n?n+f:f;if(!this._events[b])return this;if(!h)return l(this,b),this;var _=this._events[b];if(_.fn)_.fn===h&&(!v||_.once)&&(!p||_.context===p)&&l(this,b);else{for(var w=0,x=[],S=_.length;w<S;w++)(_[w].fn!==h||v&&!_[w].once||p&&_[w].context!==p)&&x.push(_[w]);x.length?this._events[b]=x.length===1?x[0]:x:l(this,b)}return this},c.prototype.removeAllListeners=function(f){var h;return f?(h=n?n+f:f,this._events[h]&&l(this,h)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,t.exports=c})(lm);var Sl=lm.exports,Bd={},xo={};Object.defineProperty(xo,"__esModule",{value:!0});xo.SearchResult=void 0;const NA=/\$&/g,DA=/\$(\d)/g;class UA{constructor(e,n,i){this.data=e,this.term=n,this.strategy=i}getReplacementData(e){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(e);if(o==null||o.index==null)return null;const a=n.replace(NA,o[0]).replace(DA,(l,c)=>o[parseInt(c)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(e,n){const i=this.getReplacementData(e);if(i!==null)return n=i.afterCursor+n,[[e.slice(0,i.start),i.beforeCursor,e.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}xo.SearchResult=UA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Strategy=t.DEFAULT_INDEX=void 0;const e=xo;t.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const c=this.matchWithContext(o);if(!c)return!1;const d=c[(l=this.props.index)!==null&&l!==void 0?l:t.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(h=>new e.SearchResult(h,d,this)))},c),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,c=>{this.cache[o]=c,a(c)},l)}}t.Strategy=n})(Bd);Object.defineProperty(wo,"__esModule",{value:!0});wo.Completer=void 0;const FA=Sl,zA=Bd;class HA extends FA.EventEmitter{constructor(e){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=e.map(n=>new zA.Strategy(n))}destroy(){return this.strategies.forEach(e=>e.destroy()),this}run(e){for(const n of this.strategies)if(n.execute(e,this.handleQueryResult))return;this.handleQueryResult([])}}wo.Completer=HA;var jd={},ws={};Object.defineProperty(ws,"__esModule",{value:!0});ws.createCustomEvent=void 0;const WA=typeof window<"u"&&!!window.CustomEvent,qA=(t,e)=>{if(WA)return new CustomEvent(t,e);const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,e?.cancelable||!1,e?.detail||void 0),n};ws.createCustomEvent=qA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=t.DEFAULT_DROPDOWN_CLASS_NAME=t.DEFAULT_DROPDOWN_PLACEMENT=t.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const e=Sl,n=ws;t.DEFAULT_DROPDOWN_MAX_COUNT=10,t.DEFAULT_DROPDOWN_PLACEMENT="auto",t.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends e.EventEmitter{constructor(l,c){super(),this.el=l,this.option=c,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const c=document.createElement("ul");c.className=l.className||t.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(c.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(c),new i(c,l)}render(l,c){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||t.DEFAULT_DROPDOWN_MAX_COUNT).map((f,h)=>{var p;return new o(this,h,f,((p=this.option)===null||p===void 0?void 0:p.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(c).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const c={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:c});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:c})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,c){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),c.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const c=document.documentElement;if(c){const d=this.el.offsetWidth;if(l.left){const p=this.option.dynamicWidth?c.scrollWidth:c.clientWidth;l.left+d>p&&(l.left=p-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const h=this.option.placement||t.DEFAULT_DROPDOWN_PLACEMENT;if(h==="auto"){const p=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+p>c.clientHeight}h==="top"||f?(this.el.style.bottom=`${c.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const c of this.items)l.appendChild(c.el);return this.el.appendChild(l),this}setStrategyId(l){const c=l.getStrategyId();return c&&(this.el.dataset.strategy=c),this}renderEdge(l,c){const d=this.option[c],f=document.createElement("li");return f.className=`textcomplete-${c}`,f.innerHTML=typeof d=="function"?d(l.map(h=>h.data)):d||"",this.el.appendChild(f),this}}t.Dropdown=i;class o{constructor(l,c,d,f){this.dropdown=l,this.index=c,this.searchResult=d,this.props=f,this.active=!1,this.onClick=v=>{v.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const h=document.createElement("li");h.className=this.active?this.activeClassName:this.className;const p=document.createElement("span");p.tabIndex=-1,p.innerHTML=this.searchResult.render(),h.appendChild(p),h.addEventListener("click",this.onClick),this.el=h}destroy(){var l;const c=this.el;return(l=c.parentNode)===null||l===void 0||l.removeChild(c),c.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(jd);var Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.Editor=void 0;const ZA=Sl,ka=ws;class KA extends ZA.EventEmitter{destroy(){return this}applySearchResult(e){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(e){const n=(0,ka.createCustomEvent)("move",{cancelable:!0,detail:{code:e}});return this.emit("move",n),n}emitEnterEvent(){const e=(0,ka.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",e),e}emitChangeEvent(){const e=(0,ka.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",e),e}emitEscEvent(){const e=(0,ka.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",e),e}getCode(e){return e.keyCode===9||e.keyCode===13?"ENTER":e.keyCode===27?"ESC":e.keyCode===38?"UP":e.keyCode===40||e.keyCode===78&&e.ctrlKey?"DOWN":e.keyCode===80&&e.ctrlKey?"UP":"OTHER"}}Tl.Editor=KA;var Al={};Object.defineProperty(Al,"__esModule",{value:!0});Al.Textcomplete=void 0;const VA=Sl,GA=jd,QA=wo,YA=["show","shown","render","rendered","selected","hidden","hide"];class JA extends VA.EventEmitter{constructor(e,n,i){super(),this.editor=e,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new QA.Completer(n),this.dropdown=GA.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(e=!0){return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}startListening(){var e;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of YA)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.addEventListener("resize",this.handleResize)}stopListening(){var e;(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Al.Textcomplete=JA;(function(t){var e=wt&&wt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,c)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=wt&&wt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(wo,t),n(jd,t),n(Tl,t),n(xo,t),n(Bd,t),n(Al,t),n(ws,t)})(Md);var cm={},Il={};function um(t,e,n){const i=t.value,o=e+(n||""),a=document.activeElement;let l=0,c=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-c-1>=0&&o.length-c-1>=0&&i[i.length-c-1]===o[o.length-c-1];)c++;l=Math.min(l,Math.min(i.length,o.length)-c),t.setSelectionRange(l,i.length-c);const d=o.substring(l,o.length-c);if(t.focus(),!document.execCommand("insertText",!1,d)){t.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),t.dispatchEvent(f)}return t.setSelectionRange(e.length,e.length),a.focus(),t}function XA(t,e,n){const i=t.selectionEnd,o=t.value.substr(0,t.selectionStart)+e,a=t.value.substring(t.selectionStart,i)+(n||"")+t.value.substr(i);return um(t,o,a),t.selectionEnd=i+e.length,t}const eI=Object.freeze(Object.defineProperty({__proto__:null,update:um,wrapCursor:XA},Symbol.toStringTag,{value:"Module"})),tI=G4(eI);var dm={exports:{}};(function(t){(function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,c){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=c&&c.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var h=document.createElement("div");h.id="input-textarea-caret-position-mirror-div",document.body.appendChild(h);var p=h.style,v=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,b=a.nodeName==="INPUT";p.whiteSpace="pre-wrap",b||(p.wordWrap="break-word"),p.position="absolute",d||(p.visibility="hidden"),e.forEach(function(x){b&&x==="lineHeight"?p.lineHeight=v.height:p[x]=v[x]}),i?a.scrollHeight>parseInt(v.height)&&(p.overflowY="scroll"):p.overflow="hidden",h.textContent=a.value.substring(0,l),b&&(h.textContent=h.textContent.replace(/\s/g," "));var _=document.createElement("span");_.textContent=a.value.substring(l)||".",h.appendChild(_);var w={top:_.offsetTop+parseInt(v.borderTopWidth),left:_.offsetLeft+parseInt(v.borderLeftWidth),height:parseInt(v.lineHeight)};return d?_.style.backgroundColor="#aaa":document.body.removeChild(h),w}t.exports=o})()})(dm);var nI=dm.exports,fm={},Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.calculateElementOffset=void 0;const rI=t=>{const e=t.getBoundingClientRect(),n=t.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:e.top+i.pageYOffset,left:e.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Rl.calculateElementOffset=rI;var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.getLineHeightPx=void 0;const iI="0".charCodeAt(0),sI="9".charCodeAt(0),Wg=t=>iI<=t&&t<=sI,oI=t=>{const e=getComputedStyle(t),n=e.lineHeight;if(Wg(n.charCodeAt(0))){const i=parseFloat(n);return Wg(n.charCodeAt(n.length-1))?i*parseFloat(e.fontSize):i}return aI(t.nodeName,e)};Ol.getLineHeightPx=oI;const aI=(t,e)=>{const n=document.body;if(!n)return 0;const i=document.createElement(t);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:e.fontSize,fontFamily:e.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Ll={};Object.defineProperty(Ll,"__esModule",{value:!0});Ll.isSafari=void 0;const lI=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Ll.isSafari=lI;(function(t){var e=wt&&wt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,c)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=wt&&wt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(Rl,t),n(Ol,t),n(Ll,t)})(fm);var cI=wt&&wt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Il,"__esModule",{value:!0});Il.TextareaEditor=void 0;const uI=tI,dI=cI(nI),qg=Md,Zg=fm;class fI extends qg.Editor{constructor(e){super(),this.el=e,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(e){const n=this.getBeforeCursor();if(n!=null){const i=e.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,uI.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,qg.createCustomEvent)("input")))}}getCursorOffset(){const e=(0,Zg.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Zg.getLineHeightPx)(this.el),a=e.top-n.top+i.top+o,l=e.left-n.left+i.left,c=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:c};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:c}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,dI.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}Il.TextareaEditor=fI;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaEditor=void 0;var e=Il;Object.defineProperty(t,"TextareaEditor",{enumerable:!0,get:function(){return e.TextareaEditor}})})(cm);const hI=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),pI=()=>{const{searchEmojis:t}=Xe(),[e,n]=Ce();return xr(()=>{const i=e();if(i==null)return;const o=new cm.TextareaEditor(i),a=new Md.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,c)=>{c(t(l))},template:l=>(()=>{const d=hI(),f=d.firstChild,h=f.nextSibling;return k(h,()=>l.shortcode),Le(p=>{const v=l.url,b=l.shortcode;return v!==p._v$&&Ue(f,"src",p._v$=v),b!==p._v$2&&Ue(f,"alt",p._v$2=b),p},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});jn(()=>{a.destroy()})}),{elementRef:n}},gI=async t=>{const e=new FormData;e.set("file",t);const n=await fetch("https://nostr.build/api/v2/upload/files",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:e});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json();if(i.status!=="success")throw new Error(`failed to post image: ${i.message}`);return{imageUrl:i.data[0].url}},vI=t=>e=>Promise.allSettled(e.map(n=>t(n))),mI=B("<div>"),yI=B('<input type="text" class="rounded" maxlength="32">'),bI=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),_I=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),wI=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),xI=t=>{const e=[],n=[],i=[],o=[],a=[];return t.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?e.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:e,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},$I=t=>{const e=[];return t.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?e.push(`nostr:${n.content}`):e.push(n.content)}),e.join("")},hm=t=>{const e=dt();let n,i;const{elementRef:o}=pI(),[a,l]=Ce(""),[c,d]=Ce(!1),[f,h]=Ce(""),[p,v]=Ce([]),b=ue=>l(Se=>`${Se} ${ue}`),_=()=>{l(p().map(ue=>` #${ue}`).join("")),h(""),d(!1)},w=()=>{n?.blur(),_(),t.onClose()},x=ue=>{switch(ue){case"reply":return e()("posting.placeholderReply");case"normal":default:return e()("posting.placeholder")}},{config:S,getEmoji:L}=Xe(),C=sr(),R=_s(),O=()=>t.replyTo&&kd(t.replyTo),A=()=>t.mode??"normal",D=Ei({mutationKey:["publishTextNote"],mutationFn:R.publishTextNote.bind(R),onSuccess:()=>{console.log("succeeded to post"),_(),t.onPost?.()},onError:ue=>{console.error("error",ue)}}),j=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},W=Ei({mutationKey:["uploadFiles"],mutationFn:async ue=>{const Se=await vI(gI)(ue),Ee=[];if(Se.forEach((G,re)=>{G.status==="fulfilled"?(b(G.value.imageUrl),j()):Ee.push(ue[re])}),Ee.length>0){const G=Ee.map(re=>re.name).join(", ");window.alert(e()("posting.failedToUploadFile",{filenames:G}))}}}),J=Fe(()=>{const ue=C();return O()?.taggedPubkeys()?.filter(Se=>Se!==ue)??[]}),te=Fe(()=>t.replyTo==null?[]:wi([t.replyTo.pubkey,...J()])),ne=ue=>{const Se=[];return ue.forEach(Ee=>{const G=L(Ee);G!=null&&Se.push(["emoji",Ee,G.url])}),Se},se=()=>{if(a().length===0||D.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(e()("posting.forbiddenToIncludeNsec"));return}const ue=C();if(ue==null){console.error("pubkey is not available");return}const Se=Ed(a()),{hashtags:Ee,urlReferences:G,pubkeyReferences:re,eventReferences:ae,emojis:Te}=xI(Se),Ke=$I(Se),oe=ne(Te);v(Ee);let Z={relayUrls:S().relayUrls,pubkey:ue,content:Ke,notifyPubkeys:re,mentionEventIds:ae,hashtags:Ee,urls:G,tags:oe};O()!=null&&(Z={...Z,notifyPubkeys:wi([...te(),...re]),rootEventId:O()?.rootEvent()?.id??O()?.replyingToEvent()?.id,replyEventId:O()?.id}),c()&&(Z={...Z,contentWarning:f()}),D.mutate(Z),w()},ee=ue=>{l(ue.currentTarget.value),j()},N=ue=>{b(ue.native??`:${ue.id}:`)},q=ue=>{ue.preventDefault(),se()},Y=ue=>{ue.key==="Enter"&&(ue.ctrlKey||ue.metaKey)?se():ue.key==="Escape"&&(n?.blur(),w())},le=ue=>{if(ue.preventDefault(),W.isLoading)return;const Se=[...ue.currentTarget.files??[]];W.mutate(Se),ue.currentTarget.value=""},Q=ue=>{if(ue.preventDefault(),W.isLoading)return;const Se=[...ue?.dataTransfer?.files??[]];W.mutate(Se)},me=ue=>{if(W.isLoading)return;const Se=[...ue?.clipboardData?.items??[]],Ee=[];Se.forEach(G=>{if(G.kind==="file"){ue.preventDefault();const re=G.getAsFile();if(re==null)return;Ee.push(re)}}),Ee.length!==0&&W.mutate(Ee)},ve=ue=>{ue.preventDefault()},$e=()=>a().trim().length===0||D.isLoading||W.isLoading,Ye=()=>W.isLoading;return tr(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const ue=wI(),Se=ue.firstChild,Ee=Se.firstChild,G=Ee.nextSibling,re=G.firstChild,ae=re.nextSibling,Te=ae.nextSibling,Ke=G.nextSibling;k(ue,E(pe,{get when(){return t.replyTo!=null},get children(){const Z=mI();return k(Z,()=>e()("posting.replyToPre"),null),k(Z,E(Ft,{get each(){return te()},children:(qe,xt)=>[E(Td,{pubkey:qe}),E(pe,{get when(){return xt()!==te().length-1},children:" と "})]}),null),k(Z,()=>e()("posting.replyToPost"),null),Z}}),Se),Se.addEventListener("submit",q),k(Se,E(pe,{get when(){return c()},get children(){const Z=yI();return Z.$$input=qe=>h(qe.currentTarget.value),Le(()=>Ue(Z,"placeholder",e()("posting.contentWarningReason"))),Le(()=>Z.value=f()),Z}}),Ee),Ee.addEventListener("paste",me),Ee.addEventListener("drop",Q),Ee.addEventListener("dragover",ve),Ee.$$keydown=Y,Ee.$$input=ee,Nn(Z=>{n=Z,t.textAreaRef?.(Z),o(Z)},Ee),k(G,E(pe,{get when(){return A()==="reply"},get children(){const Z=bI(),qe=Z.firstChild;return qe.$$click=()=>w(),k(qe,E(ds,{})),Z}}),re),k(G,E(Qv,{customEmojis:!0,onEmojiSelect:N,get children(){const Z=_I();return k(Z,E(am,{})),Z}}),re),re.$$click=()=>d(Z=>!Z),ae.$$click=()=>i?.click(),k(ae,E(MA,{})),k(Te,E(jA,{})),Ke.addEventListener("change",le);const oe=i;return typeof oe=="function"?Nn(oe,Ke):i=Ke,Le(Z=>{const qe=x(A()),xt=!c(),zn=!!c(),Bt=A()==="normal",xn=A()==="normal",ri=A()==="reply",$n=A()==="reply",Ct=e()("posting.contentWarning"),Yt=e()("posting.contentWarning"),Hn=!!Ye(),Sr=!Ye(),En=A()==="normal",Ae=A()==="normal",Ht=A()==="reply",Wt=A()==="reply",kn=e()("posting.uploadImage"),Cn=e()("posting.uploadImage"),cn=Ye(),un=!!$e(),Sn=!$e(),ar=A()==="normal",lr=A()==="normal",cr=A()==="reply",Pi=A()==="reply",Eo=e()("posting.submit"),ko=e()("posting.submit"),Co=$e();return qe!==Z._v$&&Ue(Ee,"placeholder",Z._v$=qe),xt!==Z._v$2&&re.classList.toggle("bg-rose-300",Z._v$2=xt),zn!==Z._v$3&&re.classList.toggle("bg-rose-400",Z._v$3=zn),Bt!==Z._v$4&&re.classList.toggle("h-8",Z._v$4=Bt),xn!==Z._v$5&&re.classList.toggle("w-8",Z._v$5=xn),ri!==Z._v$6&&re.classList.toggle("h-7",Z._v$6=ri),$n!==Z._v$7&&re.classList.toggle("w-7",Z._v$7=$n),Ct!==Z._v$8&&Ue(re,"aria-label",Z._v$8=Ct),Yt!==Z._v$9&&Ue(re,"title",Z._v$9=Yt),Hn!==Z._v$10&&ae.classList.toggle("bg-primary-disabled",Z._v$10=Hn),Sr!==Z._v$11&&ae.classList.toggle("bg-primary",Z._v$11=Sr),En!==Z._v$12&&ae.classList.toggle("h-8",Z._v$12=En),Ae!==Z._v$13&&ae.classList.toggle("w-8",Z._v$13=Ae),Ht!==Z._v$14&&ae.classList.toggle("h-7",Z._v$14=Ht),Wt!==Z._v$15&&ae.classList.toggle("w-7",Z._v$15=Wt),kn!==Z._v$16&&Ue(ae,"title",Z._v$16=kn),Cn!==Z._v$17&&Ue(ae,"aria-label",Z._v$17=Cn),cn!==Z._v$18&&(ae.disabled=Z._v$18=cn),un!==Z._v$19&&Te.classList.toggle("bg-primary-disabled",Z._v$19=un),Sn!==Z._v$20&&Te.classList.toggle("bg-primary",Z._v$20=Sn),ar!==Z._v$21&&Te.classList.toggle("h-8",Z._v$21=ar),lr!==Z._v$22&&Te.classList.toggle("w-8",Z._v$22=lr),cr!==Z._v$23&&Te.classList.toggle("h-7",Z._v$23=cr),Pi!==Z._v$24&&Te.classList.toggle("w-7",Z._v$24=Pi),Eo!==Z._v$25&&Ue(Te,"aria-label",Z._v$25=Eo),ko!==Z._v$26&&Ue(Te,"title",Z._v$26=ko),Co!==Z._v$27&&(Te.disabled=Z._v$27=Co),Z},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),Le(()=>Ee.value=a()),ue})()};vt(["input","keydown","click"]);var EI=Un,kI=function(){return EI.Date.now()},CI=kI,SI=/\s/;function TI(t){for(var e=t.length;e--&&SI.test(t.charAt(e)););return e}var AI=TI,II=AI,RI=/^\s+/;function OI(t){return t&&t.slice(0,II(t)+1).replace(RI,"")}var LI=OI;function PI(t){return t!=null&&typeof t=="object"}var ni=PI,MI=hs,BI=ni,jI="[object Symbol]";function NI(t){return typeof t=="symbol"||BI(t)&&MI(t)==jI}var Pl=NI,DI=LI,Kg=nr,UI=Pl,Vg=0/0,FI=/^[-+]0x[0-9a-f]+$/i,zI=/^0b[01]+$/i,HI=/^0o[0-7]+$/i,WI=parseInt;function qI(t){if(typeof t=="number")return t;if(UI(t))return Vg;if(Kg(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Kg(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=DI(t);var n=zI.test(t);return n||HI.test(t)?WI(t.slice(2),n?2:8):FI.test(t)?Vg:+t}var ZI=qI,KI=nr,hu=CI,Gg=ZI,VI="Expected a function",GI=Math.max,QI=Math.min;function YI(t,e,n){var i,o,a,l,c,d,f=0,h=!1,p=!1,v=!0;if(typeof t!="function")throw new TypeError(VI);e=Gg(e)||0,KI(n)&&(h=!!n.leading,p="maxWait"in n,a=p?GI(Gg(n.maxWait)||0,e):a,v="trailing"in n?!!n.trailing:v);function b(A){var D=i,j=o;return i=o=void 0,f=A,l=t.apply(j,D),l}function _(A){return f=A,c=setTimeout(S,e),h?b(A):l}function w(A){var D=A-d,j=A-f,W=e-D;return p?QI(W,a-j):W}function x(A){var D=A-d,j=A-f;return d===void 0||D>=e||D<0||p&&j>=a}function S(){var A=hu();if(x(A))return L(A);c=setTimeout(S,w(A))}function L(A){return c=void 0,v&&i?b(A):(i=o=void 0,l)}function C(){c!==void 0&&clearTimeout(c),f=0,i=d=o=c=void 0}function R(){return c===void 0?l:L(hu())}function O(){var A=hu(),D=x(A);if(i=arguments,o=this,d=A,D){if(c===void 0)return _(d);if(p)return clearTimeout(c),c=setTimeout(S,e),b(d)}return c===void 0&&(c=setTimeout(S,e)),l}return O.cancel=C,O.flush=R,O}var JI=YI,XI=JI,eR=nr,tR="Expected a function";function nR(t,e,n){var i=!0,o=!0;if(typeof t!="function")throw new TypeError(tR);return eR(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),XI(t,e,{leading:i,maxWait:e,trailing:o})}var rR=nR;const iR=co(rR),Qg=2,sR=200,oR=()=>{let t;const[e,n]=Ce(!1),i=a=>{t=a},o=iR(()=>{t!=null&&n(t.scrollHeight>t.clientHeight+Qg||t.scrollHeight>document.documentElement.clientHeight+Qg)},sR);return tr(()=>{if(t!=null){o();const a=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&o()})},{threshold:0});a.observe(t);const l=()=>o();window.addEventListener("resize",l),jn(()=>{a.disconnect(),window.removeEventListener("resize",l)})}}),{overflow:e,elementRef:i}},aR=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),lR=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),cR=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 select-text truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="select-text hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),uR=B('<img alt="icon" class="h-full w-full rounded object-cover">'),dR=t=>{const e=dt(),{overflow:n,elementRef:i}=oR(),o=yv(),[a,l]=Ce(!1),c=()=>o(t.createdAt),d=()=>t.createdAt.toLocaleString(),{profile:f}=bs(()=>({pubkey:t.authorPubkey}));return(()=>{const h=cR(),p=h.firstChild,v=p.firstChild,b=v.nextSibling,_=b.firstChild,w=_.firstChild,x=w.firstChild,S=x.firstChild,L=w.nextSibling,C=L.firstChild,R=_.nextSibling,O=R.nextSibling;return v.$$click=A=>{A.preventDefault(),t.onShowProfile?.()},k(v,E(pe,{get when(){return f()?.picture},keyed:!0,children:A=>(()=>{const D=uR();return Ue(D,"src",A),D})()})),w.$$click=A=>{A.preventDefault(),t?.onShowProfile?.()},k(x,E(pe,{get when(){return(f()?.display_name?.length??0)>0},get children(){const A=aR();return k(A,()=>f()?.display_name),A}}),S),k(S,E(pe,{get when(){return f()?.name!=null},get fallback(){return`@${_o(t.authorPubkey)}`},get children(){return["@",Fe(()=>f()?.name)]}})),C.$$click=A=>{A.preventDefault(),t.onShowEvent?.()},k(C,c),Nn(i,R),k(R,()=>t.content),k(b,E(pe,{get when(){return n()},get children(){const A=lR();return A.$$click=D=>{D.stopPropagation(),l(j=>!j)},k(A,E(pe,{get when(){return!a()},get fallback(){return e()("post.hideOverflow")},get children(){return e()("post.showOverflow")}})),A}}),O),k(O,()=>t.actions),k(h,E(pe,{get when(){return t.footer},get children(){return t.footer}}),null),Le(A=>{const D=d(),j=!a(),W=!!a();return D!==A._v$&&Ue(C,"title",A._v$=D),j!==A._v$2&&R.classList.toggle("max-h-screen",A._v$2=j),W!==A._v$3&&R.classList.toggle("max-h-none",A._v$3=W),A},{_v$:void 0,_v$2:void 0,_v$3:void 0}),h})()};vt(["click"]);const fR=j4(),hR=()=>N4(fR),rW=()=>{const[t,e]=ns({});return{timelineState:t,setTimeline:n=>e("content",n),clearTimeline:()=>e("content",void 0)}},pR=B('<div class="nostr-textnote">'),gR=B('<div class="text-xs">'),vR=B('<div class="content whitespace-pre-wrap break-all">'),mR=B('<div class="textnote-content">'),yR=B('<div class="mt-1 rounded border p-1">'),bR=B('<div class="h-12">'),_R=B('<button class="select-text pr-1 text-blue-500 hover:underline">'),wR=B('<div class="h-5">'),xR=t=>{const e=dt(),{showProfile:n}=ti(),i=hR(),[o,a]=Ce(!1),l=()=>a(!1),c=()=>a(v=>!v),d=Fe(()=>kd(t.event)),f=()=>t.embedding??!0,h=()=>t.actions??!0,p=()=>{if(f()){const v=d().replyingToEvent();if(v!=null&&!d().containsEventMention(v.id))return v.id;const b=d().rootEvent();if(v==null&&b!=null&&!d().containsEventMention(b.id))return b.id}};return(()=>{const v=pR();return k(v,E(dR,{get authorPubkey(){return d().pubkey},get createdAt(){return d().createdAtAsDate()},get content(){return(()=>{const b=mR();return k(b,E(pe,{get when(){return p()},keyed:!0,children:_=>(()=>{const w=yR();return k(w,E(Yr,{get fallback(){return bR()},children:()=>E(lo,{eventId:_,actions:!1,embedding:!1})})),w})()}),null),k(b,E(pe,{get when(){return d().taggedPubkeys().length>0},get children(){const _=gR();return k(_,()=>e()("post.replyToPre"),null),k(_,E(Ft,{get each(){return d().taggedPubkeys()},children:w=>(()=>{const x=_R();return x.$$click=S=>{S.stopPropagation(),n(w)},k(x,E(rm,{pubkey:w})),x})()}),null),k(_,()=>e()("post.replyToPost"),null),_}}),null),k(b,E(GT,{get contentWarning(){return d().contentWarning()},get children(){const _=vR();return k(_,E(om,{get parsed(){return d().parsed()},get embedding(){return f()},get initialHidden(){return d().contentWarning().contentWarning}})),_}}),null),b})()},get actions(){return E(pe,{get when(){return h()},get children(){return E(Yr,{get fallback(){return wR()},children:()=>E(HT,{get event(){return t.event},onClickReply:c})})}})},get footer(){return E(pe,{get when(){return o()},get children(){return E(hm,{mode:"reply",get replyTo(){return t.event},onClose:l,onPost:l})}})},onShowProfile:()=>{n(d().pubkey)},onShowEvent:()=>{i?.setTimeline({type:"Replies",event:t.event})}})),v})()};vt(["click"]);const $R=B("<span>予期しないイベント種別（<!>）"),ER=B("<span><span>未対応のイベント種別（<!>）"),pm=t=>{const e=()=>t.ensureKinds==null||t.ensureKinds.length===0||t.ensureKinds.includes(t.event.kind);return E(Ln,{get fallback(){return(()=>{const n=ER(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,k(i,()=>t.event.kind,a),k(n,E(Vs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n})()},get children(){return[E(Qe,{get when(){return!e()},keyed:!0,get children(){const n=$R(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,k(n,()=>t.event.kind,o),k(n,E(Vs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n}}),E(Qe,{get when(){return t.event.kind===lt.Text},get children(){return E(xR,{get event(){return t.event},get embedding(){return t.actions},get actions(){return t.actions}})}}),E(Qe,{get when(){return t.event.kind===lt.Repost},get children(){return E(nS,{get event(){return t.event}})}})]}})},kR=t=>{const{shouldMuteEvent:e}=Xe();return E(Ft,{get each(){return t.events},children:n=>E(pe,{get when(){return!e(n)},get children(){return E(p8,{get children(){return E(pm,{event:n})}})}})})};var CR=ul;function SR(){this.__data__=new CR,this.size=0}var TR=SR;function AR(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var IR=AR;function RR(t){return this.__data__.get(t)}var OR=RR;function LR(t){return this.__data__.has(t)}var PR=LR,MR=ul,BR=Xu,jR=ed,NR=200;function DR(t,e){var n=this.__data__;if(n instanceof MR){var i=n.__data__;if(!BR||i.length<NR-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new jR(i)}return n.set(t,e),this.size=n.size,this}var UR=DR,FR=ul,zR=TR,HR=IR,WR=OR,qR=PR,ZR=UR;function xs(t){var e=this.__data__=new FR(t);this.size=e.size}xs.prototype.clear=zR;xs.prototype.delete=HR;xs.prototype.get=WR;xs.prototype.has=qR;xs.prototype.set=ZR;var Nd=xs;function KR(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}var VR=KR,GR=Q0,QR=VR,YR=Y0,JR=1,XR=2;function eO(t,e,n,i,o,a){var l=n&JR,c=t.length,d=e.length;if(c!=d&&!(l&&d>c))return!1;var f=a.get(t),h=a.get(e);if(f&&h)return f==e&&h==t;var p=-1,v=!0,b=n&XR?new GR:void 0;for(a.set(t,e),a.set(e,t);++p<c;){var _=t[p],w=e[p];if(i)var x=l?i(w,_,p,e,t,a):i(_,w,p,t,e,a);if(x!==void 0){if(x)continue;v=!1;break}if(b){if(!QR(e,function(S,L){if(!YR(b,L)&&(_===S||o(_,S,n,i,a)))return b.push(L)})){v=!1;break}}else if(!(_===w||o(_,w,n,i,a))){v=!1;break}}return a.delete(t),a.delete(e),v}var gm=eO,tO=Un,nO=tO.Uint8Array,vm=nO;function rO(t){var e=-1,n=Array(t.size);return t.forEach(function(i,o){n[++e]=[o,i]}),n}var iO=rO,Yg=fs,Jg=vm,sO=Ju,oO=gm,aO=iO,lO=td,cO=1,uO=2,dO="[object Boolean]",fO="[object Date]",hO="[object Error]",pO="[object Map]",gO="[object Number]",vO="[object RegExp]",mO="[object Set]",yO="[object String]",bO="[object Symbol]",_O="[object ArrayBuffer]",wO="[object DataView]",Xg=Yg?Yg.prototype:void 0,pu=Xg?Xg.valueOf:void 0;function xO(t,e,n,i,o,a,l){switch(n){case wO:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _O:return!(t.byteLength!=e.byteLength||!a(new Jg(t),new Jg(e)));case dO:case fO:case gO:return sO(+t,+e);case hO:return t.name==e.name&&t.message==e.message;case vO:case yO:return t==e+"";case pO:var c=aO;case mO:var d=i&cO;if(c||(c=lO),t.size!=e.size&&!d)return!1;var f=l.get(t);if(f)return f==e;i|=uO,l.set(t,e);var h=oO(c(t),c(e),i,o,a,l);return l.delete(t),h;case bO:if(pu)return pu.call(t)==pu.call(e)}return!1}var $O=xO;function EO(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}var Dd=EO,kO=Array.isArray,or=kO,CO=Dd,SO=or;function TO(t,e,n){var i=e(t);return SO(t)?i:CO(i,n(t))}var mm=TO;function AO(t,e){for(var n=-1,i=t==null?0:t.length,o=0,a=[];++n<i;){var l=t[n];e(l,n,t)&&(a[o++]=l)}return a}var IO=AO;function RO(){return[]}var ym=RO,OO=IO,LO=ym,PO=Object.prototype,MO=PO.propertyIsEnumerable,e0=Object.getOwnPropertySymbols,BO=e0?function(t){return t==null?[]:(t=Object(t),OO(e0(t),function(e){return MO.call(t,e)}))}:LO,Ud=BO;function jO(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var NO=jO,DO=hs,UO=ni,FO="[object Arguments]";function zO(t){return UO(t)&&DO(t)==FO}var HO=zO,t0=HO,WO=ni,bm=Object.prototype,qO=bm.hasOwnProperty,ZO=bm.propertyIsEnumerable,KO=t0(function(){return arguments}())?t0:function(t){return WO(t)&&qO.call(t,"callee")&&!ZO.call(t,"callee")},Fd=KO,il={exports:{}};function VO(){return!1}var GO=VO;il.exports;(function(t,e){var n=Un,i=GO,o=e&&!e.nodeType&&e,a=o&&!0&&t&&!t.nodeType&&t,l=a&&a.exports===o,c=l?n.Buffer:void 0,d=c?c.isBuffer:void 0,f=d||i;t.exports=f})(il,il.exports);var zd=il.exports,QO=9007199254740991,YO=/^(?:0|[1-9]\d*)$/;function JO(t,e){var n=typeof t;return e=e??QO,!!e&&(n=="number"||n!="symbol"&&YO.test(t))&&t>-1&&t%1==0&&t<e}var Hd=JO,XO=9007199254740991;function eL(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=XO}var Wd=eL,tL=hs,nL=Wd,rL=ni,iL="[object Arguments]",sL="[object Array]",oL="[object Boolean]",aL="[object Date]",lL="[object Error]",cL="[object Function]",uL="[object Map]",dL="[object Number]",fL="[object Object]",hL="[object RegExp]",pL="[object Set]",gL="[object String]",vL="[object WeakMap]",mL="[object ArrayBuffer]",yL="[object DataView]",bL="[object Float32Array]",_L="[object Float64Array]",wL="[object Int8Array]",xL="[object Int16Array]",$L="[object Int32Array]",EL="[object Uint8Array]",kL="[object Uint8ClampedArray]",CL="[object Uint16Array]",SL="[object Uint32Array]",ot={};ot[bL]=ot[_L]=ot[wL]=ot[xL]=ot[$L]=ot[EL]=ot[kL]=ot[CL]=ot[SL]=!0;ot[iL]=ot[sL]=ot[mL]=ot[oL]=ot[yL]=ot[aL]=ot[lL]=ot[cL]=ot[uL]=ot[dL]=ot[fL]=ot[hL]=ot[pL]=ot[gL]=ot[vL]=!1;function TL(t){return rL(t)&&nL(t.length)&&!!ot[tL(t)]}var AL=TL;function IL(t){return function(e){return t(e)}}var qd=IL,sl={exports:{}};sl.exports;(function(t,e){var n=Z0,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a&&n.process,c=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();t.exports=c})(sl,sl.exports);var Zd=sl.exports,RL=AL,OL=qd,n0=Zd,r0=n0&&n0.isTypedArray,LL=r0?OL(r0):RL,_m=LL,PL=NO,ML=Fd,BL=or,jL=zd,NL=Hd,DL=_m,UL=Object.prototype,FL=UL.hasOwnProperty;function zL(t,e){var n=BL(t),i=!n&&ML(t),o=!n&&!i&&jL(t),a=!n&&!i&&!o&&DL(t),l=n||i||o||a,c=l?PL(t.length,String):[],d=c.length;for(var f in t)(e||FL.call(t,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||NL(f,d)))&&c.push(f);return c}var wm=zL,HL=Object.prototype;function WL(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||HL;return t===n}var Kd=WL;function qL(t,e){return function(n){return t(e(n))}}var xm=qL,ZL=xm,KL=ZL(Object.keys,Object),VL=KL,GL=Kd,QL=VL,YL=Object.prototype,JL=YL.hasOwnProperty;function XL(t){if(!GL(t))return QL(t);var e=[];for(var n in Object(t))JL.call(t,n)&&n!="constructor"&&e.push(n);return e}var eP=XL,tP=V0,nP=Wd;function rP(t){return t!=null&&nP(t.length)&&!tP(t)}var $m=rP,iP=wm,sP=eP,oP=$m;function aP(t){return oP(t)?iP(t):sP(t)}var Ml=aP,lP=mm,cP=Ud,uP=Ml;function dP(t){return lP(t,uP,cP)}var Em=dP,i0=Em,fP=1,hP=Object.prototype,pP=hP.hasOwnProperty;function gP(t,e,n,i,o,a){var l=n&fP,c=i0(t),d=c.length,f=i0(e),h=f.length;if(d!=h&&!l)return!1;for(var p=d;p--;){var v=c[p];if(!(l?v in e:pP.call(e,v)))return!1}var b=a.get(t),_=a.get(e);if(b&&_)return b==e&&_==t;var w=!0;a.set(t,e),a.set(e,t);for(var x=l;++p<d;){v=c[p];var S=t[v],L=e[v];if(i)var C=l?i(L,S,v,e,t,a):i(S,L,v,t,e,a);if(!(C===void 0?S===L||o(S,L,n,i,a):C)){w=!1;break}x||(x=v=="constructor")}if(w&&!x){var R=t.constructor,O=e.constructor;R!=O&&"constructor"in t&&"constructor"in e&&!(typeof R=="function"&&R instanceof R&&typeof O=="function"&&O instanceof O)&&(w=!1)}return a.delete(t),a.delete(e),w}var vP=gP,mP=Ii,yP=Un,bP=mP(yP,"DataView"),_P=bP,wP=Ii,xP=Un,$P=wP(xP,"Promise"),EP=$P,kP=Ii,CP=Un,SP=kP(CP,"WeakMap"),TP=SP,zu=_P,Hu=Xu,Wu=EP,qu=J0,Zu=TP,km=hs,$s=G0,s0="[object Map]",AP="[object Object]",o0="[object Promise]",a0="[object Set]",l0="[object WeakMap]",c0="[object DataView]",IP=$s(zu),RP=$s(Hu),OP=$s(Wu),LP=$s(qu),PP=$s(Zu),vi=km;(zu&&vi(new zu(new ArrayBuffer(1)))!=c0||Hu&&vi(new Hu)!=s0||Wu&&vi(Wu.resolve())!=o0||qu&&vi(new qu)!=a0||Zu&&vi(new Zu)!=l0)&&(vi=function(t){var e=km(t),n=e==AP?t.constructor:void 0,i=n?$s(n):"";if(i)switch(i){case IP:return c0;case RP:return s0;case OP:return o0;case LP:return a0;case PP:return l0}return e});var Bl=vi,gu=Nd,MP=gm,BP=$O,jP=vP,u0=Bl,d0=or,f0=zd,NP=_m,DP=1,h0="[object Arguments]",p0="[object Array]",Ca="[object Object]",UP=Object.prototype,g0=UP.hasOwnProperty;function FP(t,e,n,i,o,a){var l=d0(t),c=d0(e),d=l?p0:u0(t),f=c?p0:u0(e);d=d==h0?Ca:d,f=f==h0?Ca:f;var h=d==Ca,p=f==Ca,v=d==f;if(v&&f0(t)){if(!f0(e))return!1;l=!0,h=!1}if(v&&!h)return a||(a=new gu),l||NP(t)?MP(t,e,n,i,o,a):BP(t,e,d,n,i,o,a);if(!(n&DP)){var b=h&&g0.call(t,"__wrapped__"),_=p&&g0.call(e,"__wrapped__");if(b||_){var w=b?t.value():t,x=_?e.value():e;return a||(a=new gu),o(w,x,n,i,a)}}return v?(a||(a=new gu),jP(t,e,n,i,o,a)):!1}var zP=FP,HP=zP,v0=ni;function Cm(t,e,n,i,o){return t===e?!0:t==null||e==null||!v0(t)&&!v0(e)?t!==t&&e!==e:HP(t,e,n,i,Cm,o)}var Sm=Cm,WP=Nd,qP=Sm,ZP=1,KP=2;function VP(t,e,n,i){var o=n.length,a=o,l=!i;if(t==null)return!a;for(t=Object(t);o--;){var c=n[o];if(l&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<a;){c=n[o];var d=c[0],f=t[d],h=c[1];if(l&&c[2]){if(f===void 0&&!(d in t))return!1}else{var p=new WP;if(i)var v=i(f,h,d,t,e,p);if(!(v===void 0?qP(h,f,ZP|KP,i,p):v))return!1}}return!0}var GP=VP,QP=nr;function YP(t){return t===t&&!QP(t)}var Tm=YP,JP=Tm,XP=Ml;function eM(t){for(var e=XP(t),n=e.length;n--;){var i=e[n],o=t[i];e[n]=[i,o,JP(o)]}return e}var tM=eM;function nM(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var Am=nM,rM=GP,iM=tM,sM=Am;function oM(t){var e=iM(t);return e.length==1&&e[0][2]?sM(e[0][0],e[0][1]):function(n){return n===t||rM(n,t,e)}}var aM=oM,lM=or,cM=Pl,uM=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dM=/^\w*$/;function fM(t,e){if(lM(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||cM(t)?!0:dM.test(t)||!uM.test(t)||e!=null&&t in Object(e)}var Vd=fM,Im=ed,hM="Expected a function";function Gd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(hM);var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=t.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Gd.Cache||Im),n}Gd.Cache=Im;var pM=Gd,gM=pM,vM=500;function mM(t){var e=gM(t,function(i){return n.size===vM&&n.clear(),i}),n=e.cache;return e}var yM=mM,bM=yM,_M=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wM=/\\(\\)?/g,xM=bM(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(_M,function(n,i,o,a){e.push(o?a.replace(wM,"$1"):i||n)}),e}),$M=xM;function EM(t,e){for(var n=-1,i=t==null?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o}var Qd=EM,m0=fs,kM=Qd,CM=or,SM=Pl,TM=1/0,y0=m0?m0.prototype:void 0,b0=y0?y0.toString:void 0;function Rm(t){if(typeof t=="string")return t;if(CM(t))return kM(t,Rm)+"";if(SM(t))return b0?b0.call(t):"";var e=t+"";return e=="0"&&1/t==-TM?"-0":e}var AM=Rm,IM=AM;function RM(t){return t==null?"":IM(t)}var OM=RM,LM=or,PM=Vd,MM=$M,BM=OM;function jM(t,e){return LM(t)?t:PM(t,e)?[t]:MM(BM(t))}var Es=jM,NM=Pl,DM=1/0;function UM(t){if(typeof t=="string"||NM(t))return t;var e=t+"";return e=="0"&&1/t==-DM?"-0":e}var ks=UM,FM=Es,zM=ks;function HM(t,e){e=FM(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[zM(e[n++])];return n&&n==i?t:void 0}var jl=HM,WM=jl;function qM(t,e,n){var i=t==null?void 0:WM(t,e);return i===void 0?n:i}var ZM=qM;function KM(t,e){return t!=null&&e in Object(t)}var VM=KM,GM=Es,QM=Fd,YM=or,JM=Hd,XM=Wd,eB=ks;function tB(t,e,n){e=GM(e,t);for(var i=-1,o=e.length,a=!1;++i<o;){var l=eB(e[i]);if(!(a=t!=null&&n(t,l)))break;t=t[l]}return a||++i!=o?a:(o=t==null?0:t.length,!!o&&XM(o)&&JM(l,o)&&(YM(t)||QM(t)))}var nB=tB,rB=VM,iB=nB;function sB(t,e){return t!=null&&iB(t,e,rB)}var oB=sB,aB=Sm,lB=ZM,cB=oB,uB=Vd,dB=Tm,fB=Am,hB=ks,pB=1,gB=2;function vB(t,e){return uB(t)&&dB(e)?fB(hB(t),e):function(n){var i=lB(n,t);return i===void 0&&i===e?cB(n,t):aB(e,i,pB|gB)}}var mB=vB;function yB(t){return t}var Om=yB;function bB(t){return function(e){return e?.[t]}}var _B=bB,wB=jl;function xB(t){return function(e){return wB(e,t)}}var $B=xB,EB=_B,kB=$B,CB=Vd,SB=ks;function TB(t){return CB(t)?EB(SB(t)):kB(t)}var AB=TB,IB=aM,RB=mB,OB=Om,LB=or,PB=AB;function MB(t){return typeof t=="function"?t:t==null?OB:typeof t=="object"?LB(t)?RB(t[0],t[1]):IB(t):PB(t)}var Yd=MB,BB=Yd,jB=X0;function NB(t,e){return t&&t.length?jB(t,BB(e)):[]}var DB=NB;const Lm=co(DB);let Ia=0;const{setActiveSubscriptions:UB}=hv();setInterval(()=>{UB(Ia)},1e3);const Pm=t=>{const{config:e,shouldMuteEvent:n}=Xe(),i=Sd(),[o,a]=Ce([]);xr(al(()=>[e().mutedPubkeys,e().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),tr(()=>{console.debug("subscription mounted",t()?.debugId,t()),jn(()=>{console.debug("subscription unmount",t()?.debugId,t())})});const l=d=>{const h=t()?.limit??50,p=d.created_at-Fr();if(!(p>300)){if(p>0){setTimeout(()=>l(d),p*1e3);return}a(v=>{const b=pd.insertEventIntoDescendingList(v,d).slice(0,h),_=Lm(b,w=>w.id);return _.length!==b.length&&console.warn("duplicated event",d),_})}},c=()=>{console.debug("startSubscription: start");const d=t();if(d==null)return;const{relayUrls:f,filters:h,options:p,onEvent:v,onEOSE:b,continuous:_=!0}=d,w=i().sub(f,h,p);let x=!0;Ia+=1;let S=!1,L=!1;const C=[];w.on("event",A=>{v?.(A),!(d.clientEventFilter!=null&&!d.clientEventFilter(A))&&(L?l(A):(S=!0,C.push(A)))}),w.on("eose",()=>{b?.(),L=!0,a(Pu(C)),_||(w.unsub(),x&&(x=!1,Ia-=1))});let R=!1;const O=setInterval(()=>{if(!R){if(R=!0,L){clearInterval(O),R=!1;return}S&&(S=!1,a(Pu(C))),R=!1}},100);jn(()=>{console.debug("startSubscription: end"),w.unsub(),x&&(x=!1,Ia-=1),clearInterval(O)})};return xr(()=>{c()}),{events:o}},FB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),zB=(t={})=>(()=>{const e=FB();return it(e,t,!0,!0),e})(),Mm=t=>{const e=()=>{const i=t();if(i==null)return[];const o=[];return Hr(i).pTags().forEach(l=>{const[,c,d,f]=l,h={pubkey:c,petname:f};d!=null&&d.length>0&&(h.mainRelayUrl=d),o.push(h)}),o};return{followings:e,followingPubkeys:()=>e().map(i=>i.pubkey),data:t}},HB=async({pubkey:t},e)=>{const n=new ys({type:"Followings",pubkey:t});$l({task:n,signal:e});const i=await n.latestEventPromise();return Mm(()=>i)},_0=t=>{const e=Jr(),n=Fe(t),i=()=>["useFollowings",n()],o=Ai(i,pv({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:c}=l;return new ys({type:"Followings",pubkey:c})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>e.invalidateQueries(i());return{...Mm(()=>o.data),invalidateFollowings:a,query:o}},WB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),qB=(t={})=>(()=>{const e=WB();return it(e,t,!0,!0),e})(),ZB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Bm=(t={})=>(()=>{const e=ZB();return it(e,t,!0,!0),e})(),KB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),jm=(t={})=>(()=>{const e=KB();return it(e,t,!0,!0),e})(),VB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),GB=(t={})=>(()=>{const e=VB();return it(e,t,!0,!0),e})(),QB=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani and </p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),YB=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),JB=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),XB=async()=>{const e=await(await fetch(Qu("packageInfo.json"))).text();return JSON.parse(e)},w0="750fd3c",ej=t=>{const[e]=H0(XB);return E(Li,{get onClose(){return t.onClose},get children(){const n=QB(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,c=l.nextSibling;c.firstChild;const d=i.nextSibling,f=d.nextSibling,h=f.nextSibling,p=h.nextSibling,v=p.firstChild,b=v.nextSibling;b.nextSibling;const _=p.nextSibling,w=_.nextSibling;w.firstChild;const x=w.nextSibling,S=x.nextSibling,L=S.nextSibling,C=L.nextSibling,R=C.nextSibling;return R.nextSibling,k(c,()=>e()?.self?.version,null),k(c,E(pe,{when:w0,get children(){return[" (",w0,")"]}}),null),k(p,E(er,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),b),k(w,E(er,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit/graphs/contributors",children:"Rabbit contributors"}),null),k(R,()=>e()?.self.licenseText),k(n,E(Ft,{get each(){return e()?.packages??[]},fallback:"取得中",children:O=>[(()=>{const A=YB(),D=A.firstChild,j=D.nextSibling,W=j.nextSibling,J=W.nextSibling;return J.nextSibling,k(A,()=>O.name,D),k(A,()=>O.version,j),k(A,()=>O.licenseSpdx,J),A})(),(()=>{const A=JB();return k(A,()=>O.licenseText),A})()]}),null),Le(()=>Ue(o,"src",Qu("images/rabbit_app_256.png"))),n}})},tj=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),nj=t=>{const e=dt(),n=sr(),{saveColumn:i}=Xe(),o=Cl(),a=()=>{t.onClose(),o({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{ln([n()])(([v])=>{i(_d({pubkey:v}))}),a()},c=()=>{ln([n()])(([v])=>{i(Y1({pubkey:v}))}),a()},d=()=>{i(X1()),a()},f=()=>{i(xd({query:""})),a()},h=()=>{ln([n()])(([v])=>{i(wd({pubkey:v}))}),a()},p=()=>{ln([n()])(([v])=>{i(ev({pubkey:v}))}),a()};return E(Li,{get onClose(){return t.onClose},get children(){const v=tj(),b=v.firstChild,_=b.firstChild,w=b.nextSibling,x=w.firstChild,S=w.nextSibling,L=S.firstChild,C=S.nextSibling,R=C.firstChild,O=C.nextSibling,A=O.firstChild,D=O.nextSibling,j=D.firstChild;return b.$$click=()=>l(),k(_,E(zB,{})),k(b,()=>e()("column.home"),null),w.$$click=()=>c(),k(x,E(qB,{})),k(w,()=>e()("column.notification"),null),S.$$click=()=>d(),k(L,E(jm,{})),k(S,()=>e()("column.japanese"),null),C.$$click=()=>f(),k(R,E(GB,{})),k(C,()=>e()("column.search"),null),O.$$click=()=>h(),k(A,E(Bm,{})),k(O,()=>e()("column.myPosts"),null),D.$$click=()=>p(),k(j,E(_v,{})),k(D,()=>e()("column.myReactions"),null),v}})};vt(["click"]);const rj=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),ij=(t={})=>(()=>{const e=rj();return it(e,t,!0,!0),e})(),sj=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),oj=(t={})=>(()=>{const e=sj();return it(e,t,!0,!0),e})(),aj=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),lj=(t={})=>(()=>{const e=aj();return it(e,t,!0,!0),e})();function cj(t){const{config:e}=Xe(),n=Fe(t),{events:i}=Pm(()=>({relayUrls:e().relayUrls,filters:[{kinds:[lt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>wi(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const uj=t=>{const e=Fe(t),n=Ai(()=>["useVerification",e()],({queryKey:o})=>{const[,a]=o;if(a==null)return Promise.resolve(null);const{nip05:l}=a;return F1.queryProfile(l)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},dj=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),x0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),fj=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),hj=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),pj=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),$0=B('<div class="shrink-0 text-xs">'),gj=B('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),vj=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),mj=B('<div class="truncate text-xl font-bold">'),yj=B('<div class="truncate text-xs">@'),bj=B('<span class="inline-block h-3 w-3">'),_j=B('<span class="inline-block h-4 w-4 text-blue-400">'),wj=B('<div class="flex items-center text-xs">'),xj=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),$j=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),Ej=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),kj=B('<ul class="border-t px-5 py-2 text-xs">'),Cj=B('<ul class="border-t p-1">'),Sj=B('<div class="h-12 shrink-0">'),Tj=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),Aj=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),Ij=B('<span class="inline-block h-4 w-4 text-rose-500">'),Rj=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),Oj=B('<span class="text-sm">'),Lj=B('<button class="text-sm hover:text-stone-800 hover:underline">'),Pj=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),Mj=t=>{const{count:e}=cj(()=>({pubkey:t.pubkey}));return Fe(e)},Bj=t=>{const e=dt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a,saveColumn:l}=Xe(),c=Cl(),d=_s(),f=sr(),{showProfileEdit:h}=ti(),p=Fe(()=>_o(t.pubkey)),[v,b]=Ce(!1),[_,w]=Ce(!1),[x,S]=Ce(!1),[L,C]=Ce(null),R=()=>C(null),{profile:O,event:A,query:D}=bs(()=>({pubkey:t.pubkey})),{verification:j,query:W}=uj(()=>ln([O()?.nip05])(([G])=>({nip05:G}))),J=()=>{const G=O()?.nip05;if(G==null)return null;const[re,ae]=G.split("@");return ae==null?null:re==="_"?{domain:ae,ident:ae}:{user:re,domain:ae,ident:G}},te=()=>j()?.pubkey===t.pubkey,ne=()=>a(t.pubkey),se=Fe(()=>{const G=A(),re=O()?.about;if(G==null||re==null)return;const ae=Ed(re);return cv(ae,Hr(G))}),{followingPubkeys:ee,invalidateFollowings:N,query:q}=_0(()=>ln([f()])(([G])=>({pubkey:G}))),Y=()=>ee().includes(t.pubkey),{followingPubkeys:le,query:Q}=_0(()=>({pubkey:t.pubkey})),me=()=>{const G=f();return G!=null&&le().includes(G)},ve=Ei({mutationKey:["updateContacts"],mutationFn:(...G)=>d.updateContacts(...G).then(re=>Promise.allSettled(re.map(ei(5e3)))),onSuccess:G=>{const re=G.filter(Te=>Te.status==="fulfilled").length,ae=G.length-re;re===G.length?console.log("succeeded to update contacts"):re>0?console.log(`succeeded to update contacts for ${re} relays but failed for ${ae} relays`):console.error("failed to update contacts")},onError:G=>{console.error("failed to update contacts: ",G)},onSettled:()=>{N().then(()=>q.refetch()).catch(G=>console.error("failed to refetch contacts",G))}}),$e=async(G,re)=>{try{const ae=f();if(ae==null)return;b(!0);const Te=await HB({pubkey:ae});if((Te.data()==null||Te.followingPubkeys().length===0)&&!window.confirm(e()("profile.confirmUpdateEvenIfEmpty")))return;if((Te?.data()?.created_at??0)<(q.data?.created_at??0)){window.alert(e()("profile.failedToFetchLatestFollowList"));return}const Ke=Te.data()?.tags??[];let oe;switch(G){case"follow":oe=[...Ke,["p",re]];break;case"unfollow":oe=Ke.filter(([Z,qe])=>!(Z==="p"&&qe===re));break;default:console.error("updateContacts: invalid operation",G);return}await ve.mutateAsync({relayUrls:n().relayUrls,pubkey:ae,updatedTags:oe,content:Te.data()?.content??""})}catch(ae){console.error("failed to update contact list",ae),window.alert(e()("profile.failedToUpdateFollowList"))}finally{b(!1)}},Ye=()=>{$e("follow",t.pubkey).catch(G=>{console.log("failed to follow",G)})},ue=()=>{window.confirm(e()("profile.confirmUnfollow"))&&$e("unfollow",t.pubkey).catch(G=>{console.log("failed to unfollow",G)})},Se=[{content:()=>e()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(p()).catch(G=>window.alert(G))}},{content:()=>e()("profile.addUserColumn"),onSelect:()=>{const G=O()?.name??p();l(wd({name:G,pubkey:t.pubkey})),c({command:"moveToLastColumn"}).catch(re=>console.error(re)),t.onClose?.()}},{content:()=>e()("profile.addUserHomeColumn"),onSelect:()=>{const G=`${e()("column.home")} / ${O()?.name??p()}`;l(_d({name:G,pubkey:t.pubkey})),c({command:"moveToLastColumn"}).catch(re=>console.error(re)),t.onClose?.()}},{content:()=>ne()?e()("profile.unmute"):e()("profile.mute"),onSelect:()=>{ne()?o(t.pubkey):i(t.pubkey)}},{when:()=>t.pubkey===f(),content:()=>Y()?e()("profile.unfollowMyself"):e()("profile.followMyself"),onSelect:()=>{Y()?ue():Ye()}}],{events:Ee}=Pm(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[t.pubkey],limit:10,until:Fr()}],continuous:!1}));return E(Li,{onClose:()=>t.onClose?.(),get children(){return[E(pe,{get when(){return Fe(()=>!!D.isFetched)()&&O()?.banner},get fallback(){return Sj()},keyed:!0,children:G=>(()=>{const re=Tj(),ae=re.firstChild;return Ue(ae,"src",G),re})()}),(()=>{const G=vj(),re=G.firstChild,ae=re.firstChild;return k(ae,E(pe,{get when(){return Fe(()=>!!D.isFetched)()&&O()?.picture},keyed:!0,children:Te=>(()=>{const Ke=Aj();return Ue(Ke,"src",Te),Ke})()})),k(G,E(pe,{get when(){return f()!=null},get children(){const Te=gj(),Ke=Te.firstChild;return k(Ke,E(Ln,{get children(){return[E(Qe,{get when(){return t.pubkey===f()},get children(){const oe=dj();return oe.$$click=()=>h(),k(oe,()=>e()("profile.editProfile")),oe}}),E(Qe,{get when(){return ve.isLoading||v()},get children(){const oe=x0();return k(oe,()=>e()("general.updating")),oe}}),E(Qe,{get when(){return q.isLoading||q.isFetching},get children(){const oe=x0();return k(oe,()=>e()("general.loading")),oe}}),E(Qe,{get when(){return Y()},get children(){const oe=fj();return oe.$$click=()=>ue(),oe.addEventListener("mouseleave",()=>w(!1)),oe.addEventListener("mouseenter",()=>w(!0)),k(oe,E(pe,{get when(){return!_()},get fallback(){return e()("profile.unfollow")},get children(){return e()("profile.followingCurrently")}})),Le(()=>oe.disabled=ve.isLoading),oe}}),E(Qe,{get when(){return!Y()},get children(){const oe=hj();return oe.$$click=()=>Ye(),k(oe,()=>e()("profile.follow")),Le(()=>oe.disabled=ve.isLoading),oe}})]}}),null),k(Ke,E($v,{menu:Se,get children(){const oe=pj();return k(oe,E(bv,{})),oe}}),null),k(Te,E(Ln,{get children(){return[E(Qe,{get when(){return Q.isLoading},get children(){const oe=$0();return k(oe,()=>e()("general.loading")),oe}}),E(Qe,{get when(){return me()},get children(){const oe=$0();return k(oe,()=>e()("profile.followsYou")),oe}})]}}),null),Te}}),null),G})(),(()=>{const G=xj(),re=G.firstChild,ae=re.firstChild,Te=ae.nextSibling,Ke=Te.firstChild;return k(re,E(pe,{get when(){return D.isLoading},get children(){return e()("general.loading")}}),ae),k(re,E(pe,{get when(){return(O()?.display_name?.length??0)>0},get children(){const oe=mj();return k(oe,()=>O()?.display_name),oe}}),ae),k(ae,E(pe,{get when(){return(O()?.name?.length??0)>0},get children(){const oe=yj();return oe.firstChild,k(oe,()=>O()?.name,null),oe}}),null),k(ae,E(pe,{get when(){return(O()?.nip05?.length??0)>0},get children(){const oe=wj();return k(oe,()=>J()?.ident,null),k(oe,E(Ln,{get fallback(){return(()=>{const Z=Ij();return k(Z,E(lj,{})),Z})()},get children(){return[E(Qe,{get when(){return W.isLoading},get children(){const Z=bj();return k(Z,E(ij,{})),Z}}),E(Qe,{get when(){return te()},get children(){const Z=_j();return k(Z,E(oj,{})),Z}})]}}),null),oe}}),null),k(Ke,p),G})(),E(pe,{get when(){return se()},keyed:!0,children:G=>(()=>{const re=Rj();return k(re,E(om,{parsed:G,embedding:!1,initialHidden:!0})),re})()}),(()=>{const G=Ej(),re=G.firstChild,ae=re.firstChild,Te=ae.nextSibling;return re.$$click=()=>C("Following"),k(ae,()=>e()("profile.following")),k(Te,E(pe,{get when(){return Q.isFetched},get fallback(){return(()=>{const Ke=Oj();return k(Ke,()=>e()("general.loading")),Ke})()},get children(){return le().length}})),k(G,E(pe,{get when(){return!n().hideCount},get children(){const Ke=$j(),oe=Ke.firstChild,Z=oe.nextSibling;return k(oe,()=>e()("profile.followers")),k(Z,E(pe,{get when(){return x()},get fallback(){return(()=>{const qe=Lj();return qe.$$click=()=>S(!0),k(qe,()=>e()("profile.loadFollowers")),qe})()},keyed:!0,get children(){return E(Mj,{get pubkey(){return t.pubkey}})}})),Ke}}),null),G})(),E(pe,{get when(){return(O()?.website??"").length>0},get children(){const G=kj();return k(G,E(pe,{get when(){return O()?.website},keyed:!0,children:re=>(()=>{const ae=Pj(),Te=ae.firstChild;return k(Te,E(jm,{})),k(ae,E(er,{class:"text-blue-500 underline",href:re}),null),ae})()})),G}}),E(Ln,{get children(){return E(Qe,{get when(){return L()==="Following"},get children(){return E(Od,{get data(){return le()},pubkeyExtractor:G=>G,onClose:R})}})}}),(()=>{const G=Cj();return k(G,E(kR,{get events(){return Ee()}})),G})()]}})};vt(["click"]);function jj(t,e){for(var n=-1,i=t==null?0:t.length;++n<i&&e(t[n],n,t)!==!1;);return t}var Nj=jj,Dj=Ii,Uj=function(){try{var t=Dj(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Nm=Uj,E0=Nm;function Fj(t,e,n){e=="__proto__"&&E0?E0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Dm=Fj,zj=Dm,Hj=Ju,Wj=Object.prototype,qj=Wj.hasOwnProperty;function Zj(t,e,n){var i=t[e];(!(qj.call(t,e)&&Hj(i,n))||n===void 0&&!(e in t))&&zj(t,e,n)}var Jd=Zj,Kj=Jd,Vj=Dm;function Gj(t,e,n,i){var o=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var c=e[a],d=i?i(n[c],t[c],c,n,t):void 0;d===void 0&&(d=t[c]),o?Vj(n,c,d):Kj(n,c,d)}return n}var $o=Gj,Qj=$o,Yj=Ml;function Jj(t,e){return t&&Qj(e,Yj(e),t)}var Xj=Jj;function eN(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var tN=eN,nN=nr,rN=Kd,iN=tN,sN=Object.prototype,oN=sN.hasOwnProperty;function aN(t){if(!nN(t))return iN(t);var e=rN(t),n=[];for(var i in t)i=="constructor"&&(e||!oN.call(t,i))||n.push(i);return n}var lN=aN,cN=wm,uN=lN,dN=$m;function fN(t){return dN(t)?cN(t,!0):uN(t)}var Xd=fN,hN=$o,pN=Xd;function gN(t,e){return t&&hN(e,pN(e),t)}var vN=gN,ol={exports:{}};ol.exports;(function(t,e){var n=Un,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a?n.Buffer:void 0,c=l?l.allocUnsafe:void 0;function d(f,h){if(h)return f.slice();var p=f.length,v=c?c(p):new f.constructor(p);return f.copy(v),v}t.exports=d})(ol,ol.exports);var mN=ol.exports;function yN(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}var bN=yN,_N=$o,wN=Ud;function xN(t,e){return _N(t,wN(t),e)}var $N=xN,EN=xm,kN=EN(Object.getPrototypeOf,Object),ef=kN,CN=Dd,SN=ef,TN=Ud,AN=ym,IN=Object.getOwnPropertySymbols,RN=IN?function(t){for(var e=[];t;)CN(e,TN(t)),t=SN(t);return e}:AN,Um=RN,ON=$o,LN=Um;function PN(t,e){return ON(t,LN(t),e)}var MN=PN,BN=mm,jN=Um,NN=Xd;function DN(t){return BN(t,NN,jN)}var tf=DN,UN=Object.prototype,FN=UN.hasOwnProperty;function zN(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&FN.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var HN=zN,k0=vm;function WN(t){var e=new t.constructor(t.byteLength);return new k0(e).set(new k0(t)),e}var nf=WN,qN=nf;function ZN(t,e){var n=e?qN(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var KN=ZN,VN=/\w*$/;function GN(t){var e=new t.constructor(t.source,VN.exec(t));return e.lastIndex=t.lastIndex,e}var QN=GN,C0=fs,S0=C0?C0.prototype:void 0,T0=S0?S0.valueOf:void 0;function YN(t){return T0?Object(T0.call(t)):{}}var JN=YN,XN=nf;function eD(t,e){var n=e?XN(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var tD=eD,nD=nf,rD=KN,iD=QN,sD=JN,oD=tD,aD="[object Boolean]",lD="[object Date]",cD="[object Map]",uD="[object Number]",dD="[object RegExp]",fD="[object Set]",hD="[object String]",pD="[object Symbol]",gD="[object ArrayBuffer]",vD="[object DataView]",mD="[object Float32Array]",yD="[object Float64Array]",bD="[object Int8Array]",_D="[object Int16Array]",wD="[object Int32Array]",xD="[object Uint8Array]",$D="[object Uint8ClampedArray]",ED="[object Uint16Array]",kD="[object Uint32Array]";function CD(t,e,n){var i=t.constructor;switch(e){case gD:return nD(t);case aD:case lD:return new i(+t);case vD:return rD(t,n);case mD:case yD:case bD:case _D:case wD:case xD:case $D:case ED:case kD:return oD(t,n);case cD:return new i;case uD:case hD:return new i(t);case dD:return iD(t);case fD:return new i;case pD:return sD(t)}}var SD=CD,TD=nr,A0=Object.create,AD=function(){function t(){}return function(e){if(!TD(e))return{};if(A0)return A0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),ID=AD,RD=ID,OD=ef,LD=Kd;function PD(t){return typeof t.constructor=="function"&&!LD(t)?RD(OD(t)):{}}var MD=PD,BD=Bl,jD=ni,ND="[object Map]";function DD(t){return jD(t)&&BD(t)==ND}var UD=DD,FD=UD,zD=qd,I0=Zd,R0=I0&&I0.isMap,HD=R0?zD(R0):FD,WD=HD,qD=Bl,ZD=ni,KD="[object Set]";function VD(t){return ZD(t)&&qD(t)==KD}var GD=VD,QD=GD,YD=qd,O0=Zd,L0=O0&&O0.isSet,JD=L0?YD(L0):QD,XD=JD,eU=Nd,tU=Nj,nU=Jd,rU=Xj,iU=vN,sU=mN,oU=bN,aU=$N,lU=MN,cU=Em,uU=tf,dU=Bl,fU=HN,hU=SD,pU=MD,gU=or,vU=zd,mU=WD,yU=nr,bU=XD,_U=Ml,wU=Xd,xU=1,$U=2,EU=4,Fm="[object Arguments]",kU="[object Array]",CU="[object Boolean]",SU="[object Date]",TU="[object Error]",zm="[object Function]",AU="[object GeneratorFunction]",IU="[object Map]",RU="[object Number]",Hm="[object Object]",OU="[object RegExp]",LU="[object Set]",PU="[object String]",MU="[object Symbol]",BU="[object WeakMap]",jU="[object ArrayBuffer]",NU="[object DataView]",DU="[object Float32Array]",UU="[object Float64Array]",FU="[object Int8Array]",zU="[object Int16Array]",HU="[object Int32Array]",WU="[object Uint8Array]",qU="[object Uint8ClampedArray]",ZU="[object Uint16Array]",KU="[object Uint32Array]",rt={};rt[Fm]=rt[kU]=rt[jU]=rt[NU]=rt[CU]=rt[SU]=rt[DU]=rt[UU]=rt[FU]=rt[zU]=rt[HU]=rt[IU]=rt[RU]=rt[Hm]=rt[OU]=rt[LU]=rt[PU]=rt[MU]=rt[WU]=rt[qU]=rt[ZU]=rt[KU]=!0;rt[TU]=rt[zm]=rt[BU]=!1;function Ra(t,e,n,i,o,a){var l,c=e&xU,d=e&$U,f=e&EU;if(n&&(l=o?n(t,i,o,a):n(t)),l!==void 0)return l;if(!yU(t))return t;var h=gU(t);if(h){if(l=fU(t),!c)return oU(t,l)}else{var p=dU(t),v=p==zm||p==AU;if(vU(t))return sU(t,c);if(p==Hm||p==Fm||v&&!o){if(l=d||v?{}:pU(t),!c)return d?lU(t,iU(l,t)):aU(t,rU(l,t))}else{if(!rt[p])return o?t:{};l=hU(t,p,c)}}a||(a=new eU);var b=a.get(t);if(b)return b;a.set(t,l),bU(t)?t.forEach(function(x){l.add(Ra(x,e,n,x,t,a))}):mU(t)&&t.forEach(function(x,S){l.set(S,Ra(x,e,n,S,t,a))});var _=f?d?uU:cU:d?wU:_U,w=h?void 0:_(t);return tU(w||t,function(x,S){w&&(S=x,x=t[S]),nU(l,S,Ra(x,e,n,S,t,a))}),l}var VU=Ra;function GU(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var QU=GU;function YU(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++i<o;)a[i]=t[i+e];return a}var JU=YU,XU=jl,eF=JU;function tF(t,e){return e.length<2?t:XU(t,eF(e,0,-1))}var nF=tF,rF=Es,iF=QU,sF=nF,oF=ks;function aF(t,e){return e=rF(e,t),t=sF(t,e),t==null||delete t[oF(iF(e))]}var lF=aF,cF=hs,uF=ef,dF=ni,fF="[object Object]",hF=Function.prototype,pF=Object.prototype,Wm=hF.toString,gF=pF.hasOwnProperty,vF=Wm.call(Object);function mF(t){if(!dF(t)||cF(t)!=fF)return!1;var e=uF(t);if(e===null)return!0;var n=gF.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Wm.call(n)==vF}var yF=mF,bF=yF;function _F(t){return bF(t)?void 0:t}var wF=_F,P0=fs,xF=Fd,$F=or,M0=P0?P0.isConcatSpreadable:void 0;function EF(t){return $F(t)||xF(t)||!!(M0&&t&&t[M0])}var kF=EF,CF=Dd,SF=kF;function qm(t,e,n,i,o){var a=-1,l=t.length;for(n||(n=SF),o||(o=[]);++a<l;){var c=t[a];e>0&&n(c)?e>1?qm(c,e-1,n,i,o):CF(o,c):i||(o[o.length]=c)}return o}var TF=qm,AF=TF;function IF(t){var e=t==null?0:t.length;return e?AF(t,1):[]}var RF=IF;function OF(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var LF=OF,PF=LF,B0=Math.max;function MF(t,e,n){return e=B0(e===void 0?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=B0(i.length-e,0),l=Array(a);++o<a;)l[o]=i[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=i[o];return c[e]=n(l),PF(t,this,c)}}var BF=MF;function jF(t){return function(){return t}}var NF=jF,DF=NF,j0=Nm,UF=Om,FF=j0?function(t,e){return j0(t,"toString",{configurable:!0,enumerable:!1,value:DF(e),writable:!0})}:UF,zF=FF,HF=800,WF=16,qF=Date.now;function ZF(t){var e=0,n=0;return function(){var i=qF(),o=WF-(i-n);if(n=i,o>0){if(++e>=HF)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var KF=ZF,VF=zF,GF=KF,QF=GF(VF),YF=QF,JF=RF,XF=BF,ez=YF;function tz(t){return ez(XF(t,void 0,JF),t+"")}var nz=tz,rz=Qd,iz=VU,sz=lF,oz=Es,az=$o,lz=wF,cz=nz,uz=tf,dz=1,fz=2,hz=4,pz=cz(function(t,e){var n={};if(t==null)return n;var i=!1;e=rz(e,function(a){return a=oz(a,t),i||(i=a.length>1),a}),az(t,uz(t),n),i&&(n=iz(n,dz|fz|hz,lz));for(var o=e.length;o--;)sz(n,e[o]);return n}),gz=pz;const vz=co(gz);var mz="Expected a function";function yz(t){if(typeof t!="function")throw new TypeError(mz);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var bz=yz,_z=Jd,wz=Es,xz=Hd,N0=nr,$z=ks;function Ez(t,e,n,i){if(!N0(t))return t;e=wz(e,t);for(var o=-1,a=e.length,l=a-1,c=t;c!=null&&++o<a;){var d=$z(e[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return t;if(o!=l){var h=c[d];f=i?i(h,d,c):void 0,f===void 0&&(f=N0(h)?h:xz(e[o+1])?[]:{})}_z(c,d,f),c=c[d]}return t}var kz=Ez,Cz=jl,Sz=kz,Tz=Es;function Az(t,e,n){for(var i=-1,o=e.length,a={};++i<o;){var l=e[i],c=Cz(t,l);n(c,l)&&Sz(a,Tz(l,t),c)}return a}var Iz=Az,Rz=Qd,Oz=Yd,Lz=Iz,Pz=tf;function Mz(t,e){if(t==null)return{};var n=Rz(Pz(t),function(i){return[i]});return e=Oz(e),Lz(t,n,function(i,o){return e(i,o[0])})}var Bz=Mz,jz=Yd,Nz=bz,Dz=Bz;function Uz(t,e){return Dz(t,Nz(jz(e)))}var Fz=Uz;const zz=co(Fz),Hz=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),Wz=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),qz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),Zz=B('<div class="px-4 pt-4">'),Kz=B('<div><span class="font-bold"></span><div>'),Vz=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><span class="text-xs"></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),Gz=B('<div class="h-24 shrink-0">'),Qz=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),Yz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",Jz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",Xz=new RegExp(`^${Yz}$`),Zm=new RegExp(`^${Jz}$`),eH=t=>Xz.test(t),tH=t=>Zm.test(t),nH=t=>{const e=dt(),n=sr(),{config:i}=Xe(),[o,a]=Ce(""),[l,c]=Ce(""),[d,f]=Ce(""),[h,p]=Ce(""),[v,b]=Ce(""),[_,w]=Ce(""),[x,S]=Ce(""),[L,C]=Ce(""),{profile:R,invalidateProfile:O,query:A}=bs(()=>ln([n()])(([ee])=>({pubkey:ee}))),{updateProfile:D}=_s(),j=Ei({mutationKey:["updateProfile"],mutationFn:(...ee)=>D(...ee).then(N=>Promise.allSettled(N.map(ei(1e4)))),onSuccess:ee=>{const N=ee.filter(Y=>Y.status==="fulfilled").length,q=ee.length-N;N===ee.length?window.alert(e()("profile.edit.updateSucceeded")):N>0?window.alert(e()("profile.edit.failedToUpdatePartially",{count:q})):window.alert(e()("profile.edit.failedToUpdate")),O().then(()=>A.refetch()).catch(Y=>console.error(Y)),t.onClose()},onError:ee=>{console.error("failed to delete",ee)}}),W=()=>A.isLoading||j.isLoading,J=()=>W();setInterval(()=>console.log(A.isLoading,j.isLoading),1e3);const te=()=>vz(R(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),ne=ee=>{ee.preventDefault();const N=n();if(N==null)return;const q=zz({picture:o(),banner:l(),name:d(),display_name:h(),about:v(),website:_(),nip05:x(),lud06:eH(L())?L():null,lud16:tH(L())?L():null},Y=>Y==null||Y.length===0);j.mutate({relayUrls:i().relayUrls,pubkey:N,profile:q,otherProperties:te()})},se=ee=>ee.key==="Enter"&&ee.preventDefault();return tr(()=>{const ee=R();ee!=null&&(A.refetch().catch(N=>console.error(N)),La(()=>{a(N=>ee.picture??N),c(N=>ee.banner??N),f(N=>ee.name??N),p(N=>ee.display_name??N),b(N=>ee.about??N),w(N=>ee.website??N),S(N=>ee.nip05??N),ee.lud16!=null?C(ee.lud16):ee.lud06!=null&&C(ee.lud06)}))}),E(Li,{closeButton:()=>E(q0,{}),get onClose(){return t.onClose},get children(){return[(()=>{const ee=qz(),N=ee.firstChild;return k(ee,E(pe,{get when(){return l().length>0},get fallback(){return Gz()},keyed:!0,get children(){const q=Hz(),Y=q.firstChild;return Le(()=>Ue(Y,"src",l())),q}}),N),k(N,E(pe,{get when(){return o().length>0},get children(){const q=Wz();return Le(()=>Ue(q,"src",o())),q}})),ee})(),E(pe,{get when(){return W()},get children(){const ee=Zz();return k(ee,()=>e()("general.loading")),ee}}),(()=>{const ee=Vz(),N=ee.firstChild,q=N.firstChild,Y=q.firstChild,le=Y.nextSibling,Q=q.nextSibling,me=Q.firstChild,ve=me.nextSibling,$e=Q.nextSibling,Ye=$e.firstChild,ue=Ye.nextSibling,Se=ue.firstChild,Ee=Se.nextSibling,G=$e.nextSibling,re=G.firstChild,ae=re.nextSibling,Te=G.nextSibling,Ke=Te.firstChild,oe=Ke.nextSibling,Z=Te.nextSibling,qe=Z.firstChild,xt=qe.nextSibling,zn=Z.nextSibling,Bt=zn.firstChild,xn=Bt.nextSibling,ri=zn.nextSibling,$n=ri.firstChild,Ct=$n.nextSibling,Yt=Ct.nextSibling,Hn=ri.nextSibling,Sr=Hn.firstChild,En=Sr.nextSibling;return N.addEventListener("submit",ne),k(Y,()=>e()("profile.edit.icon")),le.$$keydown=se,le.addEventListener("blur",Ae=>a(Ae.currentTarget.value)),k(me,()=>e()("profile.edit.banner")),ve.$$keydown=se,ve.addEventListener("blur",Ae=>c(Ae.currentTarget.value)),k(Ye,()=>e()("profile.edit.name")),Ee.$$keydown=se,Ee.addEventListener("change",Ae=>f(Ae.currentTarget.value)),k(re,()=>e()("profile.edit.displayName")),ae.$$keydown=se,ae.addEventListener("change",Ae=>p(Ae.currentTarget.value)),k(Ke,()=>e()("profile.edit.about")),oe.addEventListener("change",Ae=>b(Ae.currentTarget.value)),k(qe,()=>e()("profile.edit.website")),xt.$$keydown=se,xt.addEventListener("change",Ae=>w(Ae.currentTarget.value)),k(Bt,()=>e()("profile.edit.nip05")),xn.$$keydown=se,xn.addEventListener("change",Ae=>S(Ae.currentTarget.value)),k($n,()=>e()("profile.edit.lightningAddress")),k(Ct,()=>e()("profile.edit.lightningAddressDescription")),Yt.$$keydown=se,Yt.addEventListener("change",Ae=>C(Ae.currentTarget.value)),k(N,E(pe,{get when(){return Object.entries(te()).length>0},get children(){const Ae=Kz(),Ht=Ae.firstChild,Wt=Ht.nextSibling;return k(Ht,()=>e()("profile.edit.otherProperties")),k(Wt,E(Ft,{get each(){return Object.entries(te())},children:([kn,Cn])=>(()=>{const cn=Qz(),un=cn.firstChild,Sn=un.nextSibling;return k(un,kn),k(Sn,Cn),cn})()})),Ae}}),Hn),k(Sr,()=>e()("profile.edit.save")),En.$$click=()=>t.onClose(),k(En,()=>e()("profile.edit.cancel")),k(N,E(pe,{get when(){return j.isLoading},get children(){return e()("profile.edit.updating")}}),null),Le(Ae=>{const Ht=J(),Wt=J(),kn=J(),Cn=J(),cn=J(),un=J(),Sn=Zm.source,ar=J(),lr=J(),cr=j.isLoading;return Ht!==Ae._v$&&(le.disabled=Ae._v$=Ht),Wt!==Ae._v$2&&(ve.disabled=Ae._v$2=Wt),kn!==Ae._v$3&&(Ee.disabled=Ae._v$3=kn),Cn!==Ae._v$4&&(ae.disabled=Ae._v$4=Cn),cn!==Ae._v$5&&(oe.disabled=Ae._v$5=cn),un!==Ae._v$6&&(xt.disabled=Ae._v$6=un),Sn!==Ae._v$7&&Ue(xn,"pattern",Ae._v$7=Sn),ar!==Ae._v$8&&(xn.disabled=Ae._v$8=ar),lr!==Ae._v$9&&(Yt.disabled=Ae._v$9=lr),cr!==Ae._v$10&&(Sr.disabled=Ae._v$10=cr),Ae},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Le(()=>le.value=o()),Le(()=>ve.value=l()),Le(()=>Ee.value=d()),Le(()=>ae.value=h()),Le(()=>oe.value=v()),Le(()=>xt.value=_()),Le(()=>xn.value=x()),Le(()=>Yt.value=L()),ee})()]}})};vt(["keydown","click"]);const iW=()=>{const t=sr(),{modalState:e,showProfile:n,closeModal:i}=ti();return E(pe,{get when(){return e()},keyed:!0,children:o=>E(Ln,{get children(){return[E(Qe,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>E(Bj,{pubkey:a,onClose:i})}),E(Qe,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return E(nH,{onClose:()=>ln([t()])(([a])=>{n(a)})})}}),E(Qe,{get when(){return o.type==="AddColumn"},get children(){return E(nj,{onClose:i})}}),E(Qe,{get when(){return o.type==="About"},get children(){return E(ej,{onClose:i})}})]}})})},rH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),iH=(t={})=>(()=>{const e=rH();return it(e,t,!0,!0),e})(),sH=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),D0=(t={})=>(()=>{const e=sH();return it(e,t,!0,!0),e})(),oH=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),aH=(t={})=>(()=>{const e=oH();return it(e,t,!0,!0),e})(),lH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),cH=(t={})=>(()=>{const e=lH();return it(e,t,!0,!0),e})(),uH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),dH=(t={})=>(()=>{const e=uH();return it(e,t,!0,!0),e})(),fH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),hH=(t={})=>(()=>{const e=fH();return it(e,t,!0,!0),e})(),U0=mt.string().length(64).regex(/^[0-9a-f]{64}$/),Ku=mt.string().regex(/^\w+$/),pH=mt.object({shortcode:Ku,url:mt.string().url(),keywords:mt.optional(mt.array(Ku))}),gH=mt.object({manifest:mt.literal("emojipack_v1"),name:mt.string(),emojis:mt.array(pH),description:mt.optional(mt.string()),author:mt.optional(U0),publisher:mt.optional(U0)}).refine(t=>Lm(t.emojis,n=>n.shortcode).length===t.emojis.length,{message:"shortcodes should be unique"}),Km=mt.record(Ku,mt.string().url());gH.or(Km);const vH=t=>Object.entries(t).map(([e,n])=>({shortcode:e,url:n})),mH=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),yH=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),bH=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),Vu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),_H=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),wH=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),xH=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),$H=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),EH=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),kH=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),CH=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),SH=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),TH=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),AH=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">YouTube</div></div><div class="flex w-full"><div class="flex-1">X (Twitter)</div></div><div class="flex w-full"><div class="flex-1">OGP'),IH=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),RH=B('<div class="p-4">'),OH=B('<h2 class="flex-1 text-center text-lg font-bold">'),LH=B('<ul class="flex flex-col">'),PH=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),MH=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Vm=t=>`^(?:${t})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,BH=Vm("https?"),jH=Vm("wss?"),NH=()=>{const t=dt(),e=sr(),{showProfile:n,showProfileEdit:i}=ti();return(()=>{const o=mH(),a=o.firstChild,l=a.nextSibling,c=l.firstChild,d=c.nextSibling;return k(a,()=>t()("config.profile.profile")),c.$$click=()=>ln([e()])(([f])=>{n(f)}),k(c,()=>t()("config.profile.openProfile")),d.$$click=()=>i(),k(d,()=>t()("config.profile.editProfile")),o})()},DH=()=>{const t=dt(),{config:e,addRelay:n,removeRelay:i}=Xe(),[o,a]=Ce(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},c=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([b])=>b).join(`
`);if(d.length===0){window.alert(t()("config.relays.notConfigured"));return}if(!window.confirm(`${t()("config.relays.askImport")}

${f}`))return;const h=e().relayUrls.length;La(()=>{d.forEach(([b])=>{n(b)})});const v=e().relayUrls.length-h;window.alert(t()("config.relays.imported",{count:v}))};return[(()=>{const d=yH(),f=d.firstChild,h=f.nextSibling,p=h.nextSibling,v=p.nextSibling,b=v.firstChild,_=b.nextSibling;return k(f,()=>t()("config.relays.relays")),k(h,()=>t()("config.relays.numOfRelays",{count:e().relayUrls.length})),k(p,E(Ft,{get each(){return e().relayUrls},children:w=>(()=>{const x=Vu(),S=x.firstChild,L=S.nextSibling;return k(S,w),L.$$click=()=>i(w),k(L,E(ds,{})),x})()})),v.addEventListener("submit",l),b.addEventListener("change",w=>a(w.currentTarget.value)),Ue(b,"pattern",jH),k(_,()=>t()("config.relays.addRelay")),Le(()=>b.value=o()),d})(),(()=>{const d=bH(),f=d.firstChild,h=f.nextSibling;return k(f,()=>t()("config.relays.importRelays")),h.$$click=()=>{c().catch(p=>{console.error("failed to import relays",p),window.alert(t()("config.relays.failedToImport"))})},k(h,()=>t()("config.relays.importFromExtension")),d})()]},UH=()=>{const t=dt(),{config:e,setConfig:n}=Xe(),i=[{id:"relative",name:t()("config.display.relativeTimeNotation"),example:t()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:t()("config.display.absoluteTimeNotationShort"),example:t()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:t()("config.display.absoluteTimeNotationLong"),example:t()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=_H(),l=a.firstChild,c=l.nextSibling;return k(l,()=>t()("config.display.timeNotation")),k(c,E(Ft,{each:i,children:({id:d,name:f,example:h})=>(()=>{const p=wH(),v=p.firstChild,b=v.nextSibling;return v.$$click=()=>o(d),k(v,f),k(b,h),Le(_=>{const w=e().dateFormat===d,x=e().dateFormat===d,S=e().dateFormat!==d,L=e().dateFormat!==d;return w!==_._v$&&v.classList.toggle("bg-rose-300",_._v$=w),x!==_._v$2&&v.classList.toggle("text-white",_._v$2=x),S!==_._v$3&&v.classList.toggle("bg-white",_._v$3=S),L!==_._v$4&&v.classList.toggle("text-rose-300",_._v$4=L),_},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),a})()},Kr=t=>(()=>{const e=xH();return e.$$click=n=>t.onClick(n),Le(n=>{const i=!t.value,o=!t.value,a=!!t.value,l=!!t.value,c=t.value;return i!==n._v$5&&e.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&e.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&e.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&e.classList.toggle("justify-end",n._v$8=l),c!==n._v$9&&Ue(e,"area-label",n._v$9=c),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})(),FH=()=>{const t=dt(),{config:e,setConfig:n}=Xe(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=$H(),l=a.firstChild,c=l.nextSibling,d=c.firstChild,f=d.firstChild,h=d.nextSibling,p=h.firstChild;return k(l,()=>t()("config.display.reaction")),k(f,()=>t()("config.display.enableEmojiReaction")),k(d,E(Kr,{get value(){return e().useEmojiReaction},onClick:()=>i()}),null),k(p,()=>t()("config.display.showEmojiReaction")),k(h,E(Kr,{get value(){return e().showEmojiReaction},onClick:()=>o()}),null),a})()},zH=()=>{const t=dt(),{config:e,saveEmoji:n,removeEmoji:i}=Xe(),[o,a]=Ce(""),[l,c]=Ce(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),c(""))};return(()=>{const f=EH(),h=f.firstChild,p=h.nextSibling,v=p.nextSibling,b=v.firstChild,_=b.firstChild,w=_.nextSibling,x=b.nextSibling,S=x.firstChild,L=S.nextSibling,C=x.nextSibling;return k(h,()=>t()("config.customEmoji.customEmoji")),k(p,E(Ft,{get each(){return Object.values(e().customEmojis)},children:({shortcode:R,url:O})=>(()=>{const A=kH(),D=A.firstChild,j=D.nextSibling,W=j.nextSibling;return Ue(D,"src",O),Ue(D,"alt",R),k(j,R),W.$$click=()=>i(R),k(W,E(ds,{})),A})()})),v.addEventListener("submit",d),k(_,()=>t()("config.customEmoji.shortcode")),w.addEventListener("change",R=>a(R.currentTarget.value)),k(S,()=>t()("config.customEmoji.url")),L.addEventListener("change",R=>c(R.currentTarget.value)),Ue(L,"pattern",BH),k(C,()=>t()("config.customEmoji.addEmoji")),Le(()=>w.value=o()),Le(()=>L.value=l()),f})()},HH=()=>{const t=dt(),{saveEmojis:e}=Xe(),[n,i]=Ce(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Km.parse(JSON.parse(n())),c=vH(l);e(c),i("")}catch(l){const c=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${c}`)}};return(()=>{const a=CH(),l=a.firstChild,c=l.nextSibling,d=c.nextSibling,f=d.firstChild,h=f.nextSibling;return k(l,()=>t()("config.customEmoji.emojiImport")),k(c,()=>t()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",p=>i(p.currentTarget.value)),k(h,()=>t()("config.customEmoji.importEmoji")),Le(()=>f.value=n()),a})()},WH=()=>{const t=dt(),{config:e,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=Xe(),[a,l]=Ce(""),c=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=SH(),f=d.firstChild,h=f.nextSibling;return k(f,()=>t()("config.mute.mutedUsers")),k(h,E(Ft,{get each(){return e().mutedPubkeys},children:p=>(()=>{const v=Vu(),b=v.firstChild,_=b.nextSibling;return k(b,E(Td,{pubkey:p})),_.$$click=()=>n(p),k(_,E(ds,{})),v})()})),d})(),(()=>{const d=TH(),f=d.firstChild,h=f.nextSibling,p=h.nextSibling,v=p.firstChild,b=v.nextSibling;return k(f,()=>t()("config.mute.mutedKeywords")),k(h,E(Ft,{get each(){return e().mutedKeywords},children:_=>(()=>{const w=Vu(),x=w.firstChild,S=x.nextSibling;return k(x,_),S.$$click=()=>o(_),k(S,E(ds,{})),w})()})),p.addEventListener("submit",c),v.addEventListener("change",_=>l(_.currentTarget.value)),k(b,()=>t()("config.mute.add")),Le(()=>v.value=a()),d})()]},qH=()=>{const t=dt(),{config:e,setConfig:n}=Xe(),i=o=>{n(a=>({...a,embedding:{...a.embedding,[o]:!a.embedding[o]}}))};return(()=>{const o=AH(),a=o.firstChild,l=a.nextSibling,c=l.nextSibling,d=c.firstChild;d.firstChild;const f=d.nextSibling;f.firstChild;const h=f.nextSibling;return h.firstChild,k(a,()=>t()("config.display.embedding")),k(l,()=>t()("config.display.embeddingDescription")),k(d,E(Kr,{get value(){return e().embedding.youtube},onClick:()=>i("youtube")}),null),k(f,E(Kr,{get value(){return e().embedding.twitter},onClick:()=>i("twitter")}),null),k(h,E(Kr,{get value(){return e().embedding.ogp},onClick:()=>i("ogp")}),null),o})()},ZH=()=>{const t=dt(),{config:e,setConfig:n}=Xe(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=IH(),c=l.firstChild,d=c.nextSibling,f=d.firstChild,h=f.firstChild,p=f.nextSibling,v=p.firstChild,b=p.nextSibling,_=b.firstChild;return k(c,()=>t()("config.display.others")),k(h,()=>t()("config.display.keepOpenPostForm")),k(f,E(Kr,{get value(){return e().keepOpenPostForm},onClick:()=>i()}),null),k(v,()=>t()("config.display.showMediaByDefault")),k(p,E(Kr,{get value(){return e().showMedia},onClick:()=>o()}),null),k(_,()=>t()("config.display.hideNumbers")),k(b,E(Kr,{get value(){return e().hideCount},onClick:()=>a()}),null),l})()},KH=t=>{const e=dt(),[n,i]=Ce(null),o=[{name:()=>e()("config.profile.profile"),icon:()=>E(Bm,{}),render:()=>E(NH,{})},{name:()=>e()("config.relays.relays"),icon:()=>E(hH,{}),render:()=>E(DH,{})},{name:()=>e()("config.display.display"),icon:()=>E(dH,{}),render:()=>[E(UH,{}),E(FH,{}),E(qH,{}),E(ZH,{})]},{name:()=>e()("config.customEmoji.customEmoji"),icon:()=>E(am,{}),render:()=>[E(zH,{}),E(HH,{})]},{name:()=>e()("config.mute.mute"),icon:()=>E(cH,{}),render:()=>E(WH,{})}],a=()=>{const l=n();return l==null?null:o[l]};return E(Li,{get onClose(){return t.onClose},get children(){const l=RH();return k(l,E(pe,{get when(){return a()},get fallback(){return[(()=>{const c=OH();return k(c,()=>e()("config.config")),c})(),(()=>{const c=LH();return k(c,E(Ft,{each:o,children:(d,f)=>(()=>{const h=PH(),p=h.firstChild,v=p.firstChild;return p.$$click=()=>i(f),k(v,()=>d.icon()),k(p,()=>d.name(),null),h})()})),c})()]},keyed:!0,children:c=>(()=>{const d=MH(),f=d.firstChild,h=f.nextSibling;return f.$$click=()=>i(null),k(f,E(q0,{})),k(h,()=>c.render()),d})()})),l}})};vt(["click"]);const VH=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),GH=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),QH=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),YH=()=>{let t,e;const{saveColumn:n}=Xe(),i=Cl(),[o,a]=Ce(""),l=c=>{c.preventDefault(),n(xd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),t?.close(),a("")};return E(Ad,{ref:c=>{t=c},position:"right",get button(){return(()=>{const c=GH();return k(c,E(D0,{})),c})()},onOpen:()=>e?.focus(),get children(){const c=VH(),d=c.firstChild,f=d.nextSibling;c.addEventListener("submit",l),d.addEventListener("change",p=>a(p.currentTarget.value));const h=e;return typeof h=="function"?Nn(h,d):e=d,k(f,E(D0,{})),Le(()=>d.value=o()),c}})},sW=()=>{let t;const{showAddColumn:e,showAbout:n}=ti(),{config:i}=Xe(),[o,a]=Ce(!1),[l,c]=Ce(!1),d=()=>{t?.focus(),t?.click(),t?.setSelectionRange(0,0)},f=()=>a(!0),h=()=>a(!1),p=()=>a(v=>!v);return AA(()=>({commandType:"openPostForm",handler:()=>{f(),t!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=QH(),b=v.firstChild,_=b.firstChild,w=_.firstChild,x=_.nextSibling,S=x.nextSibling,L=S.firstChild,C=L.nextSibling,R=C.nextSibling,O=R.firstChild,A=b.nextSibling;return w.$$click=()=>p(),k(w,E(aH,{})),k(_,E(YH,{}),null),L.$$click=()=>e(),k(L,E(wv,{})),C.$$click=()=>c(D=>!D),k(C,E(iH,{})),R.$$click=()=>n(),k(A,E(hm,{textAreaRef:D=>{t=D},onClose:h})),k(v,E(pe,{get when(){return l()},get children(){return E(KH,{onClose:()=>c(!1)})}}),null),Le(D=>{const j=Qu("images/rabbit_app_256.png"),W=!!(o()||i().keepOpenPostForm),J=!(o()||i().keepOpenPostForm);return j!==D._v$&&Ue(O,"src",D._v$=j),W!==D._v$2&&A.classList.toggle("static",D._v$2=W),J!==D._v$3&&A.classList.toggle("hidden",D._v$3=J),D},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};vt(["click"]);export{q0 as A,ys as B,p8 as C,qB as D,lo as E,Bm as F,_v as G,zB as H,jm as I,tW as J,lt as K,iR as L,GB as M,iW as N,Sd as O,mo as P,nS as R,sW as S,kR as T,Td as U,Pm as a,wi as b,rW as c,AA as d,fR as e,Cl as f,uC as g,sr as h,Hr as i,Ai as j,ei as k,_0 as l,G1 as m,Fr as n,bs as o,dv as p,UC as q,$l as r,Ev as s,kd as t,Xe as u,xR as v,ti as w,Ya as x,ln as y,mt as z};
//# sourceMappingURL=SideBar-52e2bef6.js.map
