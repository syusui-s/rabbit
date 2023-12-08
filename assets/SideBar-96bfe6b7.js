import{v as M0,w as Ra,x as h4,y as Ap,z as Rp,A as p4,B as g4,C as v4,D as Ip,E as m4,G as B0,H as y4,m as us,I as j0,J as Ia,n as br,o as xr,K as zs,L as il,N as Op,s as st,t as B,i as k,a as S,S as ye,u as ht,c as Re,j as b4,k as mr,l as He,O as _4,M as Ye,P as w4,b as Pn,d as mt,Q as x4,g as Vn,e as Be,R as $4,T as E4,F as Ft,h as ze,f as Ea,U as Ku,V as k4,W as C4}from"./index-b83a6748.js";import{c as es,a as Ki,b as S4,d as T4,r as Vu}from"./usePersistStatus-e40ed896.js";class A4 extends M0{constructor(e,n){super(),this.client=e,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Lp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return hu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return hu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),Ra(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Pp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const n=this.client.getQueryCache().build(this.client,e),i=this.createResult(n,e);return I4(this,i,e)&&(this.currentResult=i,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),i}getCurrentResult(){return this.currentResult}trackResult(e){const n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),e[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...n}={}){return this.fetch({...n,meta:{refetchPage:e}})}fetchOptimistic(e){const n=this.client.defaultQueryOptions(e),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(e){var n;return this.executeFetch({...e,cancelRefetch:(n=e.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let n=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(h4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Ap||this.currentResult.isStale||!Rp(this.options.staleTime))return;const n=p4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(Ap||this.options.enabled===!1||!Rp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||g4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=e!==i,f=d?e.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=e;let{dataUpdatedAt:m,error:_,errorUpdatedAt:w,fetchStatus:$,status:x}=g,C=!1,M=!1,E;if(n._optimisticResults){const N=this.hasListeners(),K=!N&&Lp(e,n),ee=N&&Pp(e,i,n,o);(K||ee)&&($=v4(e.options.networkMode)?"fetching":"paused",m||(x="loading")),n._optimisticResults==="isRestoring"&&($="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&x!=="error")E=p.data,m=p.dataUpdatedAt,x=p.status,C=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)E=this.selectResult;else try{this.selectFn=n.select,E=n.select(g.data),E=Ip(a?.data,E,n),this.selectResult=E,this.selectError=null}catch(N){this.selectError=N}else E=g.data;if(typeof n.placeholderData<"u"&&typeof E>"u"&&x==="loading"){let N;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)N=a.data;else if(N=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof N<"u")try{N=n.select(N),this.selectError=null}catch(K){this.selectError=K}typeof N<"u"&&(x="success",E=Ip(a?.data,N,n),M=!0)}this.selectError&&(_=this.selectError,E=this.selectResult,w=Date.now(),x="error");const I=$==="fetching",O=x==="loading",A=x==="error";return{status:x,fetchStatus:$,isLoading:O,isSuccess:x==="success",isError:A,isInitialLoading:O&&I,data:E,dataUpdatedAt:m,error:_,errorUpdatedAt:w,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:I,isRefetching:I&&!O,isLoadingError:A&&g.dataUpdatedAt===0,isPaused:$==="paused",isPlaceholderData:M,isPreviousData:C,isRefetchError:A&&g.dataUpdatedAt!==0,isStale:Gu(e,n),refetch:this.refetch,remove:this.remove}}updateResult(e){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Ra(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options,u=typeof l=="function"?l():l;if(u==="all"||!u&&!this.trackedProps.size)return!0;const d=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(f=>{const p=f;return this.currentResult[p]!==n[p]&&d.has(p)})};e?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const n={};e.type==="success"?n.onSuccess=!e.manual:e.type==="error"&&!m4(e.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(e){B0.batch(()=>{if(e.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(e.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function R4(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Lp(t,e){return R4(t,e)||t.state.dataUpdatedAt>0&&hu(t,e,e.refetchOnMount)}function hu(t,e,n){if(e.enabled!==!1){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Gu(t,e)}return!1}function Pp(t,e,n,i){return n.enabled!==!1&&(t!==e||i.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&Gu(t,n)}function Gu(t,e){return t.isStaleByTime(e.staleTime)}function I4(t,e,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?e.isPlaceholderData:!Ra(t.getCurrentResult(),e)}class O4 extends M0{constructor(e,n){super(),this.client=e,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const i=this.options;this.options=this.client.defaultMutationOptions(e),Ra(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const n={listeners:!0};e.type==="success"?n.onSuccess=!0:e.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:y4(),n={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(e){B0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function L4(t){return typeof t=="function"}function Mp(t,e,n){if(!L4(t)){const{queryKey:i,...o}=t;return i?{...o,queryKey:i()}:t}return typeof e=="function"?{...n,queryKey:t(),queryFn:e}:{...e,queryKey:t()}}function N0(t,e){return typeof t=="function"?t(...e):!!t}function P4(t,e){const n=us({context:t.context}),i=Symbol("empty"),o=n.defaultQueryOptions(t);o._optimisticResults="optimistic";const a=new e(n,o),[l,u]=es(a.getOptimisticResult(o)),[d,{refetch:f,mutate:p}]=j0(()=>new Promise(w=>{l.isFetching&&l.isLoading||(Ki(l.data)===i&&w(void 0),w(Ki(l.data)))}));Ia(()=>{p(()=>Ki(l.data)),f()});let g=[];const m=a.subscribe(w=>{g.push(()=>{Ia(()=>{const $={...Ki(w)};$.data===void 0&&($.data=i),u(Ki($)),p(()=>Ki(w.data)),f()})}),queueMicrotask(()=>{const $=g.pop();$&&$(),g=[]})});br(()=>m()),xr(()=>{a.setOptions(o,{listeners:!1})}),zs(()=>{const w=n.defaultQueryOptions(t);a.setOptions(w)}),zs(il(()=>l.status,()=>{if(l.isError&&!l.isFetching&&N0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const _={get(w,$){return $==="data"?d():Reflect.get(w,$)}};return new Proxy(l,_)}function Ci(t,e,n){const[i,o]=es(Mp(t,e,n));return zs(()=>{const a=Mp(t,e,n);o(a)}),P4(i,A4)}function mi(t,e,n){const[i,o]=es(Op(t,e,n)),a=us({context:i.context}),l=new O4(a,i),u=(g,m)=>{l.mutate(g,m).catch(M4)},[d,f]=es({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});zs(()=>{const g=Op(t,e,n);o(g),l.setOptions(g)}),zs(il(()=>d.status,()=>{if(d.isError&&N0(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return br(p),d}function M4(){}const B4=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),D0=(t={})=>(()=>{const e=B4();return st(e,t,!0,!0),e})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function j4(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),n}var N4=typeof xt=="object"&&xt&&xt.Object===Object&&xt,U0=N4,D4=U0,U4=typeof self=="object"&&self&&self.Object===Object&&self,F4=D4||U4||Function("return this")(),Jn=F4,z4=Jn,H4=z4.Symbol,ds=H4,Bp=ds,F0=Object.prototype,W4=F0.hasOwnProperty,q4=F0.toString,Ds=Bp?Bp.toStringTag:void 0;function Z4(t){var e=W4.call(t,Ds),n=t[Ds];try{t[Ds]=void 0;var i=!0}catch{}var o=q4.call(t);return i&&(e?t[Ds]=n:delete t[Ds]),o}var K4=Z4,V4=Object.prototype,G4=V4.toString;function Q4(t){return G4.call(t)}var Y4=Q4,jp=ds,J4=K4,X4=Y4,e5="[object Null]",t5="[object Undefined]",Np=jp?jp.toStringTag:void 0;function n5(t){return t==null?t===void 0?t5:e5:Np&&Np in Object(t)?J4(t):X4(t)}var fs=n5;function r5(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Si=r5,i5=fs,s5=Si,o5="[object AsyncFunction]",a5="[object Function]",l5="[object GeneratorFunction]",c5="[object Proxy]";function u5(t){if(!s5(t))return!1;var e=i5(t);return e==a5||e==l5||e==o5||e==c5}var z0=u5,d5=Jn,f5=d5["__core-js_shared__"],h5=f5,Vc=h5,Dp=function(){var t=/[^.]+$/.exec(Vc&&Vc.keys&&Vc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function p5(t){return!!Dp&&Dp in t}var g5=p5,v5=Function.prototype,m5=v5.toString;function y5(t){if(t!=null){try{return m5.call(t)}catch{}try{return t+""}catch{}}return""}var H0=y5,b5=z0,_5=g5,w5=Si,x5=H0,$5=/[\\^$.*+?()[\]{}|]/g,E5=/^\[object .+?Constructor\]$/,k5=Function.prototype,C5=Object.prototype,S5=k5.toString,T5=C5.hasOwnProperty,A5=RegExp("^"+S5.call(T5).replace($5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function R5(t){if(!w5(t)||_5(t))return!1;var e=b5(t)?A5:E5;return e.test(x5(t))}var I5=R5;function O5(t,e){return t?.[e]}var L5=O5,P5=I5,M5=L5;function B5(t,e){var n=M5(t,e);return P5(n)?n:void 0}var Ti=B5,j5=Ti,N5=j5(Object,"create"),ol=N5,Up=ol;function D5(){this.__data__=Up?Up(null):{},this.size=0}var U5=D5;function F5(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var z5=F5,H5=ol,W5="__lodash_hash_undefined__",q5=Object.prototype,Z5=q5.hasOwnProperty;function K5(t){var e=this.__data__;if(H5){var n=e[t];return n===W5?void 0:n}return Z5.call(e,t)?e[t]:void 0}var V5=K5,G5=ol,Q5=Object.prototype,Y5=Q5.hasOwnProperty;function J5(t){var e=this.__data__;return G5?e[t]!==void 0:Y5.call(e,t)}var X5=J5,e$=ol,t$="__lodash_hash_undefined__";function n$(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=e$&&e===void 0?t$:e,this}var r$=n$,i$=U5,s$=z5,o$=V5,a$=X5,l$=r$;function hs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}hs.prototype.clear=i$;hs.prototype.delete=s$;hs.prototype.get=o$;hs.prototype.has=a$;hs.prototype.set=l$;var c$=hs;function u$(){this.__data__=[],this.size=0}var d$=u$;function f$(t,e){return t===e||t!==t&&e!==e}var Qu=f$,h$=Qu;function p$(t,e){for(var n=t.length;n--;)if(h$(t[n][0],e))return n;return-1}var al=p$,g$=al,v$=Array.prototype,m$=v$.splice;function y$(t){var e=this.__data__,n=g$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():m$.call(e,n,1),--this.size,!0}var b$=y$,_$=al;function w$(t){var e=this.__data__,n=_$(e,t);return n<0?void 0:e[n][1]}var x$=w$,$$=al;function E$(t){return $$(this.__data__,t)>-1}var k$=E$,C$=al;function S$(t,e){var n=this.__data__,i=C$(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}var T$=S$,A$=d$,R$=b$,I$=x$,O$=k$,L$=T$;function ps(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ps.prototype.clear=A$;ps.prototype.delete=R$;ps.prototype.get=I$;ps.prototype.has=O$;ps.prototype.set=L$;var ll=ps,P$=Ti,M$=Jn,B$=P$(M$,"Map"),Yu=B$,Fp=c$,j$=ll,N$=Yu;function D$(){this.size=0,this.__data__={hash:new Fp,map:new(N$||j$),string:new Fp}}var U$=D$;function F$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var z$=F$,H$=z$;function W$(t,e){var n=t.__data__;return H$(e)?n[typeof e=="string"?"string":"hash"]:n.map}var cl=W$,q$=cl;function Z$(t){var e=q$(this,t).delete(t);return this.size-=e?1:0,e}var K$=Z$,V$=cl;function G$(t){return V$(this,t).get(t)}var Q$=G$,Y$=cl;function J$(t){return Y$(this,t).has(t)}var X$=J$,e6=cl;function t6(t,e){var n=e6(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}var n6=t6,r6=U$,i6=K$,s6=Q$,o6=X$,a6=n6;function gs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}gs.prototype.clear=r6;gs.prototype.delete=i6;gs.prototype.get=s6;gs.prototype.has=o6;gs.prototype.set=a6;var Ju=gs,l6="__lodash_hash_undefined__";function c6(t){return this.__data__.set(t,l6),this}var u6=c6;function d6(t){return this.__data__.has(t)}var f6=d6,h6=Ju,p6=u6,g6=f6;function Oa(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new h6;++e<n;)this.add(t[e])}Oa.prototype.add=Oa.prototype.push=p6;Oa.prototype.has=g6;var W0=Oa;function v6(t,e,n,i){for(var o=t.length,a=n+(i?1:-1);i?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var m6=v6;function y6(t){return t!==t}var b6=y6;function _6(t,e,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===e)return i;return-1}var w6=_6,x6=m6,$6=b6,E6=w6;function k6(t,e,n){return e===e?E6(t,e,n):x6(t,$6,n)}var C6=k6,S6=C6;function T6(t,e){var n=t==null?0:t.length;return!!n&&S6(t,e,0)>-1}var A6=T6;function R6(t,e,n){for(var i=-1,o=t==null?0:t.length;++i<o;)if(n(e,t[i]))return!0;return!1}var I6=R6;function O6(t,e){return t.has(e)}var q0=O6,L6=Ti,P6=Jn,M6=L6(P6,"Set"),Z0=M6;function B6(){}var j6=B6;function N6(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var Xu=N6,Gc=Z0,D6=j6,U6=Xu,F6=1/0,z6=Gc&&1/U6(new Gc([,-0]))[1]==F6?function(t){return new Gc(t)}:D6,H6=z6,W6=W0,q6=A6,Z6=I6,K6=q0,V6=H6,G6=Xu,Q6=200;function Y6(t,e,n){var i=-1,o=q6,a=t.length,l=!0,u=[],d=u;if(n)l=!1,o=Z6;else if(a>=Q6){var f=e?null:V6(t);if(f)return G6(f);l=!1,o=K6,d=new W6}else d=e?[]:u;e:for(;++i<a;){var p=t[i],g=e?e(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var m=d.length;m--;)if(d[m]===g)continue e;e&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var K0=Y6,J6=K0;function X6(t){return t&&t.length?J6(t):[]}var e8=X6;const yi=sl(e8),t8=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),n8=t=>(()=>{const e=t8();return k(e,()=>t.children),e})();function pu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function r8(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function hi(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function i8(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");pu(t.outputLen),pu(t.blockLen)}function s8(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function o8(t,e){hi(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const cn={number:pu,bool:r8,bytes:hi,hash:i8,exists:s8,output:o8},Qc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ed=t=>t instanceof Uint8Array,bi=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Wn=(t,e)=>t<<32-e|t>>>e,a8=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!a8)throw new Error("Non little-endian hardware is not supported");const l8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ln(t){if(!ed(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=l8[t[n]];return e}function ts(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function V0(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Hs(t){if(typeof t=="string"&&(t=V0(t)),!ed(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Yi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!ed(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}class G0{clone(){return this._cloneInto()}}const c8=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function u8(t,e){if(e!==void 0&&(typeof e!="object"||!c8(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function Ai(t){const e=i=>t().update(Hs(i)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function ao(t=32){if(Qc&&typeof Qc.getRandomValues=="function")return Qc.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}function d8(t,e,n,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;t.setUint32(e+d,l,i),t.setUint32(e+f,u,i)}class td extends G0{constructor(e,n,i,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=bi(this.buffer)}update(e){cn.exists(this);const{view:n,buffer:i,blockLen:o}=this;e=Hs(e);const a=e.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=bi(e);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(e.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){cn.exists(this),cn.output(e,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;d8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=bi(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return e.length=o,e.pos=u,e.finished=a,e.destroyed=l,o%n&&e.buffer.set(i),e}}const f8=(t,e,n)=>t&e^~t&n,h8=(t,e,n)=>t&e^t&n^e&n,p8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Pr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mr=new Uint32Array(64);class Q0 extends td{constructor(){super(64,32,8,!1),this.A=Pr[0]|0,this.B=Pr[1]|0,this.C=Pr[2]|0,this.D=Pr[3]|0,this.E=Pr[4]|0,this.F=Pr[5]|0,this.G=Pr[6]|0,this.H=Pr[7]|0}get(){const{A:e,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[e,n,i,o,a,l,u,d]}set(e,n,i,o,a,l,u,d){this.A=e|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(e,n){for(let g=0;g<16;g++,n+=4)Mr[g]=e.getUint32(n,!1);for(let g=16;g<64;g++){const m=Mr[g-15],_=Mr[g-2],w=Wn(m,7)^Wn(m,18)^m>>>3,$=Wn(_,17)^Wn(_,19)^_>>>10;Mr[g]=$+Mr[g-7]+w+Mr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:p}=this;for(let g=0;g<64;g++){const m=Wn(u,6)^Wn(u,11)^Wn(u,25),_=p+m+f8(u,d,f)+p8[g]+Mr[g]|0,$=(Wn(i,2)^Wn(i,13)^Wn(i,22))+h8(i,o,a)|0;p=f,f=d,d=u,u=l+_|0,l=a,a=o,o=i,i=_+$|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,f,p)}roundClean(){Mr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class g8 extends Q0{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Gn=Ai(()=>new Q0);Ai(()=>new g8);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Y0=BigInt(0),ul=BigInt(1),v8=BigInt(2),dl=t=>t instanceof Uint8Array,m8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ns(t){if(!dl(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=m8[t[n]];return e}function J0(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function nd(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function rs(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Yt(t){return nd(ns(t))}function rd(t){if(!dl(t))throw new Error("Uint8Array expected");return nd(ns(Uint8Array.from(t).reverse()))}function zr(t,e){return rs(t.toString(16).padStart(e*2,"0"))}function X0(t,e){return zr(t,e).reverse()}function y8(t){return rs(J0(t))}function Ot(t,e,n){let i;if(typeof e=="string")try{i=rs(e)}catch(a){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${a}`)}else if(dl(e))i=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${t} expected ${n} bytes, got ${o}`);return i}function wi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!dl(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}function b8(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function _8(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function w8(t){let e;for(e=0;t>Y0;t>>=ul,e+=1);return e}function x8(t,e){return t>>BigInt(e)&ul}const $8=(t,e,n)=>t|(n?ul:Y0)<<BigInt(e),id=t=>(v8<<BigInt(t-1))-ul,Yc=t=>new Uint8Array(t),zp=t=>Uint8Array.from(t);function e1(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Yc(t),o=Yc(t),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Yc())=>{o=u(zp([0]),g),i=u(),g.length!==0&&(o=u(zp([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const m=[];for(;g<e;){i=u();const _=i.slice();m.push(_),g+=i.length}return wi(...m)};return(g,m)=>{l(),d(g);let _;for(;!(_=m(f()));)d();return l(),_}}const E8={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function lo(t,e,n={}){const i=(o,a,l)=>{const u=E8[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=t[o];if(!(l&&d===void 0)&&!u(d,t))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(e))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return t}const k8=Object.freeze(Object.defineProperty({__proto__:null,bitGet:x8,bitLen:w8,bitMask:id,bitSet:$8,bytesToHex:ns,bytesToNumberBE:Yt,bytesToNumberLE:rd,concatBytes:wi,createHmacDrbg:e1,ensureBytes:Ot,equalBytes:b8,hexToBytes:rs,hexToNumber:nd,numberToBytesBE:zr,numberToBytesLE:X0,numberToHexUnpadded:J0,numberToVarBytesBE:y8,utf8ToBytes:_8,validateObject:lo},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),vt=BigInt(1),pi=BigInt(2),C8=BigInt(3),gu=BigInt(4),Hp=BigInt(5),Wp=BigInt(8);BigInt(9);BigInt(16);function Et(t,e){const n=t%e;return n>=kt?n:e+n}function S8(t,e,n){if(n<=kt||e<kt)throw new Error("Expected power/modulo > 0");if(n===vt)return kt;let i=vt;for(;e>kt;)e&vt&&(i=i*t%n),t=t*t%n,e>>=vt;return i}function _n(t,e,n){let i=t;for(;e-- >kt;)i*=i,i%=n;return i}function vu(t,e){if(t===kt||e<=kt)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=Et(t,e),i=e,o=kt,a=vt;for(;n!==kt;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==vt)throw new Error("invert: does not exist");return Et(o,e)}function T8(t){const e=(t-vt)/pi;let n,i,o;for(n=t-vt,i=0;n%pi===kt;n/=pi,i++);for(o=pi;o<t&&S8(o,e,t)!==t-vt;o++);if(i===1){const l=(t+vt)/gu;return function(d,f){const p=d.pow(f,l);if(!d.eql(d.sqr(p),f))throw new Error("Cannot find square root");return p}}const a=(n+vt)/pi;return function(u,d){if(u.pow(d,e)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),m=u.pow(d,n);for(;!u.eql(m,u.ONE);){if(u.eql(m,u.ZERO))return u.ZERO;let _=1;for(let $=u.sqr(m);_<f&&!u.eql($,u.ONE);_++)$=u.sqr($);const w=u.pow(p,vt<<BigInt(f-_-1));p=u.sqr(w),g=u.mul(g,w),m=u.mul(m,p),f=_}return g}}function A8(t){if(t%gu===C8){const e=(t+vt)/gu;return function(i,o){const a=i.pow(o,e);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(t%Wp===Hp){const e=(t-Hp)/Wp;return function(i,o){const a=i.mul(o,pi),l=i.pow(a,e),u=i.mul(o,l),d=i.mul(i.mul(u,pi),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return T8(t)}const R8=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function I8(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=R8.reduce((i,o)=>(i[o]="function",i),e);return lo(t,n)}function O8(t,e,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return t.ONE;if(n===vt)return e;let i=t.ONE,o=e;for(;n>kt;)n&vt&&(i=t.mul(i,o)),o=t.sqr(o),n>>=vt;return i}function L8(t,e){const n=new Array(e.length),i=e.reduce((a,l,u)=>t.is0(l)?a:(n[u]=a,t.mul(a,l)),t.ONE),o=t.inv(i);return e.reduceRight((a,l,u)=>t.is0(l)?a:(n[u]=t.mul(a,n[u]),t.mul(a,l)),o),n}function sd(t,e){const n=e!==void 0?e:t.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function P8(t,e,n=!1,i={}){if(t<=kt)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:o,nByteLength:a}=sd(t,e);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=A8(t),u=Object.freeze({ORDER:t,BITS:o,BYTES:a,MASK:id(o),ZERO:kt,ONE:vt,create:d=>Et(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<t},is0:d=>d===kt,isOdd:d=>(d&vt)===vt,neg:d=>Et(-d,t),eql:(d,f)=>d===f,sqr:d=>Et(d*d,t),add:(d,f)=>Et(d+f,t),sub:(d,f)=>Et(d-f,t),mul:(d,f)=>Et(d*f,t),pow:(d,f)=>O8(u,d,f),div:(d,f)=>Et(d*vu(f,t),t),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>vu(d,t),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>L8(u,d),cmov:(d,f,p)=>p?f:d,toBytes:d=>n?X0(d,a):zr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?rd(d):Yt(d)}});return Object.freeze(u)}function M8(t,e,n=!1){t=Ot("privateHash",t);const i=t.length,o=sd(e).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?rd(t):Yt(t);return Et(a,e-vt)+vt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const B8=BigInt(0),Jc=BigInt(1);function j8(t,e){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(e/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=t.ZERO,u=o;for(;a>B8;)a&Jc&&(l=l.add(u)),u=u.double(),a>>=Jc;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,p=f;for(let g=0;g<l;g++){p=f,d.push(p);for(let m=1;m<u;m++)p=p.add(f),d.push(p);f=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=t.ZERO,p=t.BASE;const g=BigInt(2**o-1),m=2**o,_=BigInt(o);for(let w=0;w<u;w++){const $=w*d;let x=Number(l&g);l>>=_,x>d&&(x-=m,l+=Jc);const C=$,M=$+Math.abs(x)-1,E=w%2!==0,I=x<0;x===0?p=p.add(n(E,a[C])):f=f.add(n(I,a[M]))}return{p:f,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function t1(t){return I8(t.Fp),lo(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...sd(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function N8(t){const e=t1(t);lo(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=e;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:D8,hexToBytes:U8}=k8,vi={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=vi;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],i=t.subarray(2,n+2);if(!n||i.length!==n)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:D8(i),l:t.subarray(n+2)}},toSig(t){const{Err:e}=vi,n=typeof t=="string"?U8(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==i-2)throw new e("Invalid signature: incorrect length");const{d:o,l:a}=vi._parseInt(n.subarray(2)),{d:l,l:u}=vi._parseInt(a);if(u.length)throw new e("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(t){const e=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const p=f.toString(16);return p.length&1?`0${p}`:p},i=e(n(t.s)),o=e(n(t.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},gr=BigInt(0),wn=BigInt(1);BigInt(2);const qp=BigInt(3);BigInt(4);function F8(t){const e=N8(t),{Fp:n}=e,i=e.toBytes||((w,$,x)=>{const C=$.toAffine();return wi(Uint8Array.from([4]),n.toBytes(C.x),n.toBytes(C.y))}),o=e.fromBytes||(w=>{const $=w.subarray(1),x=n.fromBytes($.subarray(0,n.BYTES)),C=n.fromBytes($.subarray(n.BYTES,2*n.BYTES));return{x,y:C}});function a(w){const{a:$,b:x}=e,C=n.sqr(w),M=n.mul(C,w);return n.add(n.add(M,n.mul(w,$)),x)}if(!n.eql(n.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function l(w){return typeof w=="bigint"&&gr<w&&w<e.n}function u(w){if(!l(w))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(w){const{allowedPrivateKeyLengths:$,nByteLength:x,wrapPrivateKey:C,n:M}=e;if($&&typeof w!="bigint"){if(w instanceof Uint8Array&&(w=ns(w)),typeof w!="string"||!$.includes(w.length))throw new Error("Invalid key");w=w.padStart(x*2,"0")}let E;try{E=typeof w=="bigint"?w:Yt(Ot("private key",w,x))}catch{throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof w}`)}return C&&(E=Et(E,M)),u(E),E}const f=new Map;function p(w){if(!(w instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor($,x,C){if(this.px=$,this.py=x,this.pz=C,$==null||!n.isValid($))throw new Error("x required");if(x==null||!n.isValid(x))throw new Error("y required");if(C==null||!n.isValid(C))throw new Error("z required")}static fromAffine($){const{x,y:C}=$||{};if(!$||!n.isValid(x)||!n.isValid(C))throw new Error("invalid affine point");if($ instanceof g)throw new Error("projective point not allowed");const M=E=>n.eql(E,n.ZERO);return M(x)&&M(C)?g.ZERO:new g(x,C,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ($){const x=n.invertBatch($.map(C=>C.pz));return $.map((C,M)=>C.toAffine(x[M])).map(g.fromAffine)}static fromHex($){const x=g.fromAffine(o(Ot("pointHex",$)));return x.assertValidity(),x}static fromPrivateKey($){return g.BASE.multiply(d($))}_setWindowSize($){this._WINDOW_SIZE=$,f.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:$,y:x}=this.toAffine();if(!n.isValid($)||!n.isValid(x))throw new Error("bad point: x or y not FE");const C=n.sqr(x),M=a($);if(!n.eql(C,M))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:$}=this.toAffine();if(n.isOdd)return!n.isOdd($);throw new Error("Field doesn't support isOdd")}equals($){p($);const{px:x,py:C,pz:M}=this,{px:E,py:I,pz:O}=$,A=n.eql(n.mul(x,O),n.mul(E,M)),F=n.eql(n.mul(C,O),n.mul(I,M));return A&&F}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:$,b:x}=e,C=n.mul(x,qp),{px:M,py:E,pz:I}=this;let O=n.ZERO,A=n.ZERO,F=n.ZERO,N=n.mul(M,M),K=n.mul(E,E),ee=n.mul(I,I),ie=n.mul(M,E);return ie=n.add(ie,ie),F=n.mul(M,I),F=n.add(F,F),O=n.mul($,F),A=n.mul(C,ee),A=n.add(O,A),O=n.sub(K,A),A=n.add(K,A),A=n.mul(O,A),O=n.mul(ie,O),F=n.mul(C,F),ee=n.mul($,ee),ie=n.sub(N,ee),ie=n.mul($,ie),ie=n.add(ie,F),F=n.add(N,N),N=n.add(F,N),N=n.add(N,ee),N=n.mul(N,ie),A=n.add(A,N),ee=n.mul(E,I),ee=n.add(ee,ee),N=n.mul(ee,ie),O=n.sub(O,N),F=n.mul(ee,K),F=n.add(F,F),F=n.add(F,F),new g(O,A,F)}add($){p($);const{px:x,py:C,pz:M}=this,{px:E,py:I,pz:O}=$;let A=n.ZERO,F=n.ZERO,N=n.ZERO;const K=e.a,ee=n.mul(e.b,qp);let ie=n.mul(x,E),se=n.mul(C,I),ae=n.mul(M,O),te=n.add(x,C),j=n.add(E,I);te=n.mul(te,j),j=n.add(ie,se),te=n.sub(te,j),j=n.add(x,M);let q=n.add(E,O);return j=n.mul(j,q),q=n.add(ie,ae),j=n.sub(j,q),q=n.add(C,M),A=n.add(I,O),q=n.mul(q,A),A=n.add(se,ae),q=n.sub(q,A),N=n.mul(K,j),A=n.mul(ee,ae),N=n.add(A,N),A=n.sub(se,N),N=n.add(se,N),F=n.mul(A,N),se=n.add(ie,ie),se=n.add(se,ie),ae=n.mul(K,ae),j=n.mul(ee,j),se=n.add(se,ae),ae=n.sub(ie,ae),ae=n.mul(K,ae),j=n.add(j,ae),ie=n.mul(se,j),F=n.add(F,ie),ie=n.mul(q,j),A=n.mul(te,A),A=n.sub(A,ie),ie=n.mul(te,se),N=n.mul(q,N),N=n.add(N,ie),new g(A,F,N)}subtract($){return this.add($.negate())}is0(){return this.equals(g.ZERO)}wNAF($){return _.wNAFCached(this,f,$,x=>{const C=n.invertBatch(x.map(M=>M.pz));return x.map((M,E)=>M.toAffine(C[E])).map(g.fromAffine)})}multiplyUnsafe($){const x=g.ZERO;if($===gr)return x;if(u($),$===wn)return this;const{endo:C}=e;if(!C)return _.unsafeLadder(this,$);let{k1neg:M,k1:E,k2neg:I,k2:O}=C.splitScalar($),A=x,F=x,N=this;for(;E>gr||O>gr;)E&wn&&(A=A.add(N)),O&wn&&(F=F.add(N)),N=N.double(),E>>=wn,O>>=wn;return M&&(A=A.negate()),I&&(F=F.negate()),F=new g(n.mul(F.px,C.beta),F.py,F.pz),A.add(F)}multiply($){u($);let x=$,C,M;const{endo:E}=e;if(E){const{k1neg:I,k1:O,k2neg:A,k2:F}=E.splitScalar(x);let{p:N,f:K}=this.wNAF(O),{p:ee,f:ie}=this.wNAF(F);N=_.constTimeNegate(I,N),ee=_.constTimeNegate(A,ee),ee=new g(n.mul(ee.px,E.beta),ee.py,ee.pz),C=N.add(ee),M=K.add(ie)}else{const{p:I,f:O}=this.wNAF(x);C=I,M=O}return g.normalizeZ([C,M])[0]}multiplyAndAddUnsafe($,x,C){const M=g.BASE,E=(O,A)=>A===gr||A===wn||!O.equals(M)?O.multiplyUnsafe(A):O.multiply(A),I=E(this,x).add(E($,C));return I.is0()?void 0:I}toAffine($){const{px:x,py:C,pz:M}=this,E=this.is0();$==null&&($=E?n.ONE:n.inv(M));const I=n.mul(x,$),O=n.mul(C,$),A=n.mul(M,$);if(E)return{x:n.ZERO,y:n.ZERO};if(!n.eql(A,n.ONE))throw new Error("invZ was invalid");return{x:I,y:O}}isTorsionFree(){const{h:$,isTorsionFree:x}=e;if($===wn)return!0;if(x)return x(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:$,clearCofactor:x}=e;return $===wn?this:x?x(g,this):this.multiplyUnsafe(e.h)}toRawBytes($=!0){return this.assertValidity(),i(g,this,$)}toHex($=!0){return ns(this.toRawBytes($))}}g.BASE=new g(e.Gx,e.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const m=e.nBitLength,_=j8(g,e.endo?Math.ceil(m/2):m);return{CURVE:e,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function z8(t){const e=t1(t);return lo(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function H8(t){const e=z8(t),{Fp:n,n:i}=e,o=n.BYTES+1,a=2*n.BYTES+1;function l(j){return gr<j&&j<n.ORDER}function u(j){return Et(j,i)}function d(j){return vu(j,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:m}=F8({...e,toBytes(j,q,X){const oe=q.toAffine(),J=n.toBytes(oe.x),be=wi;return X?be(Uint8Array.from([q.hasEvenY()?2:3]),J):be(Uint8Array.from([4]),J,n.toBytes(oe.y))},fromBytes(j){const q=j.length,X=j[0],oe=j.subarray(1);if(q===o&&(X===2||X===3)){const J=Yt(oe);if(!l(J))throw new Error("Point is not on curve");const be=g(J);let ge=n.sqrt(be);const xe=(ge&wn)===wn;return(X&1)===1!==xe&&(ge=n.neg(ge)),{x:J,y:ge}}else if(q===a&&X===4){const J=n.fromBytes(oe.subarray(0,n.BYTES)),be=n.fromBytes(oe.subarray(n.BYTES,2*n.BYTES));return{x:J,y:be}}else throw new Error(`Point of length ${q} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),_=j=>ns(zr(j,e.nByteLength));function w(j){const q=i>>wn;return j>q}function $(j){return w(j)?u(-j):j}const x=(j,q,X)=>Yt(j.slice(q,X));class C{constructor(q,X,oe){this.r=q,this.s=X,this.recovery=oe,this.assertValidity()}static fromCompact(q){const X=e.nByteLength;return q=Ot("compactSignature",q,X*2),new C(x(q,0,X),x(q,X,2*X))}static fromDER(q){const{r:X,s:oe}=vi.toSig(Ot("DER",q));return new C(X,oe)}assertValidity(){if(!m(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!m(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(q){return new C(this.r,this.s,q)}recoverPublicKey(q){const{r:X,s:oe,recovery:J}=this,be=F(Ot("msgHash",q));if(J==null||![0,1,2,3].includes(J))throw new Error("recovery id invalid");const ge=J===2||J===3?X+e.n:X;if(ge>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const xe=J&1?"03":"02",Ve=f.fromHex(xe+_(ge)),ue=d(ge),Se=u(-be*ue),V=u(oe*ue),U=f.BASE.multiplyAndAddUnsafe(Ve,Se,V);if(!U)throw new Error("point at infinify");return U.assertValidity(),U}hasHighS(){return w(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return rs(this.toDERHex())}toDERHex(){return vi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return rs(this.toCompactHex())}toCompactHex(){return _(this.r)+_(this.s)}}const M={isValidPrivateKey(j){try{return p(j),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const j=e.randomBytes(n.BYTES+8),q=M8(j,i);return zr(q,e.nByteLength)},precompute(j=8,q=f.BASE){return q._setWindowSize(j),q.multiply(BigInt(3)),q}};function E(j,q=!0){return f.fromPrivateKey(j).toRawBytes(q)}function I(j){const q=j instanceof Uint8Array,X=typeof j=="string",oe=(q||X)&&j.length;return q?oe===o||oe===a:X?oe===2*o||oe===2*a:j instanceof f}function O(j,q,X=!0){if(I(j))throw new Error("first arg must be private key");if(!I(q))throw new Error("second arg must be public key");return f.fromHex(q).multiply(p(j)).toRawBytes(X)}const A=e.bits2int||function(j){const q=Yt(j),X=j.length*8-e.nBitLength;return X>0?q>>BigInt(X):q},F=e.bits2int_modN||function(j){return u(A(j))},N=id(e.nBitLength);function K(j){if(typeof j!="bigint")throw new Error("bigint expected");if(!(gr<=j&&j<N))throw new Error(`bigint expected < 2^${e.nBitLength}`);return zr(j,e.nByteLength)}function ee(j,q,X=ie){if(["recovered","canonical"].some(ne=>ne in X))throw new Error("sign() legacy options not supported");const{hash:oe,randomBytes:J}=e;let{lowS:be,prehash:ge,extraEntropy:xe}=X;be==null&&(be=!0),j=Ot("msgHash",j),ge&&(j=Ot("prehashed msgHash",oe(j)));const Ve=F(j),ue=p(q),Se=[K(ue),K(Ve)];if(xe!=null){const ne=xe===!0?J(n.BYTES):xe;Se.push(Ot("extraEntropy",ne,n.BYTES))}const V=wi(...Se),U=Ve;function G(ne){const _e=A(ne);if(!m(_e))return;const je=d(_e),le=f.BASE.multiply(_e).toAffine(),Z=u(le.x);if(Z===gr)return;const ve=u(je*u(U+Z*ue));if(ve===gr)return;let tt=(le.x===Z?0:2)|Number(le.y&wn),Jt=ve;return be&&w(ve)&&(Jt=$(ve),tt^=1),new C(Z,Jt,tt)}return{seed:V,k2sig:G}}const ie={lowS:e.lowS,prehash:!1},se={lowS:e.lowS,prehash:!1};function ae(j,q,X=ie){const{seed:oe,k2sig:J}=ee(j,q,X),be=e;return e1(be.hash.outputLen,be.nByteLength,be.hmac)(oe,J)}f.BASE._setWindowSize(8);function te(j,q,X,oe=se){const J=j;if(q=Ot("msgHash",q),X=Ot("publicKey",X),"strict"in oe)throw new Error("options.strict was renamed to lowS");const{lowS:be,prehash:ge}=oe;let xe,Ve;try{if(typeof J=="string"||J instanceof Uint8Array)try{xe=C.fromDER(J)}catch(le){if(!(le instanceof vi.Err))throw le;xe=C.fromCompact(J)}else if(typeof J=="object"&&typeof J.r=="bigint"&&typeof J.s=="bigint"){const{r:le,s:Z}=J;xe=new C(le,Z)}else throw new Error("PARSE");Ve=f.fromHex(X)}catch(le){if(le.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(be&&xe.hasHighS())return!1;ge&&(q=e.hash(q));const{r:ue,s:Se}=xe,V=F(q),U=d(Se),G=u(V*U),ne=u(ue*U),_e=f.BASE.multiplyAndAddUnsafe(Ve,G,ne)?.toAffine();return _e?u(_e.x)===ue:!1}return{CURVE:e,getPublicKey:E,getSharedSecret:O,sign:ae,verify:te,ProjectivePoint:f,Signature:C,utils:M}}class n1 extends G0{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,cn.hash(e);const i=Hs(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?e.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=e.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(e){return cn.exists(this),this.iHash.update(e),this}digestInto(e){cn.exists(this),cn.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return e=e,e.finished=o,e.destroyed=a,e.blockLen=l,e.outputLen=u,e.oHash=n._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ws=(t,e,n)=>new n1(t,e).update(n).digest();Ws.create=(t,e)=>new n1(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function W8(t){return{hash:t,hmac:(e,...n)=>Ws(t,e,Yi(...n)),randomBytes:ao}}function q8(t,e){const n=i=>H8({...t,...W8(i)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const fl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),La=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),r1=BigInt(1),Pa=BigInt(2),Zp=(t,e)=>(t+e/Pa)/e;function i1(t){const e=fl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=t*t*t%e,p=f*f*t%e,g=_n(p,n,e)*p%e,m=_n(g,n,e)*p%e,_=_n(m,Pa,e)*f%e,w=_n(_,o,e)*_%e,$=_n(w,a,e)*w%e,x=_n($,u,e)*$%e,C=_n(x,d,e)*x%e,M=_n(C,u,e)*$%e,E=_n(M,n,e)*p%e,I=_n(E,l,e)*w%e,O=_n(I,i,e)*f%e,A=_n(O,Pa,e);if(!mu.eql(mu.sqr(A),t))throw new Error("Cannot find square root");return A}const mu=P8(fl,void 0,void 0,{sqrt:i1}),Ut=q8({a:BigInt(0),b:BigInt(7),Fp:mu,n:La,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=La,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-r1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Zp(a*t,e),d=Zp(-i*t,e);let f=Et(t-u*n-d*o,e),p=Et(-u*i-d*a,e);const g=f>l,m=p>l;if(g&&(f=e-f),m&&(p=e-p),f>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:g,k1:f,k2neg:m,k2:p}}}},Gn),hl=BigInt(0),s1=t=>typeof t=="bigint"&&hl<t&&t<fl,Z8=t=>typeof t=="bigint"&&hl<t&&t<La,Kp={};function Ma(t,...e){let n=Kp[t];if(n===void 0){const i=Gn(Uint8Array.from(t,o=>o.charCodeAt(0)));n=wi(i,i),Kp[t]=n}return Gn(wi(n,...e))}const od=t=>t.toRawBytes(!0).slice(1),yu=t=>zr(t,32),Xc=t=>Et(t,fl),qs=t=>Et(t,La),ad=Ut.ProjectivePoint,K8=(t,e,n)=>ad.BASE.multiplyAndAddUnsafe(t,e,n);function bu(t){let e=Ut.utils.normPrivateKeyToScalar(t),n=ad.fromPrivateKey(e);return{scalar:n.hasEvenY()?e:qs(-e),bytes:od(n)}}function o1(t){if(!s1(t))throw new Error("bad x: need 0 < x < p");const e=Xc(t*t),n=Xc(e*t+BigInt(7));let i=i1(n);i%Pa!==hl&&(i=Xc(-i));const o=new ad(t,i,r1);return o.assertValidity(),o}function a1(...t){return qs(Yt(Ma("BIP0340/challenge",...t)))}function V8(t){return bu(t).bytes}function G8(t,e,n=ao(32)){const i=Ot("message",t),{bytes:o,scalar:a}=bu(e),l=Ot("auxRand",n,32),u=yu(a^Yt(Ma("BIP0340/aux",l))),d=Ma("BIP0340/nonce",u,o,i),f=qs(Yt(d));if(f===hl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=bu(f),m=a1(p,o,i),_=new Uint8Array(64);if(_.set(p,0),_.set(yu(qs(g+m*a)),32),!l1(_,i,o))throw new Error("sign: Invalid signature produced");return _}function l1(t,e,n){const i=Ot("signature",t,64),o=Ot("message",e),a=Ot("publicKey",n,32);try{const l=o1(Yt(a)),u=Yt(i.subarray(0,32));if(!s1(u))return!1;const d=Yt(i.subarray(32,64));if(!Z8(d))return!1;const f=a1(yu(u),od(l),o),p=K8(l,d,qs(-f));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const co=(()=>({getPublicKey:V8,sign:G8,verify:l1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:o1,pointToBytes:od,numberToBytesBE:zr,bytesToNumberBE:Yt,taggedHash:Ma,mod:Et}}))();/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ri(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Dn(...t){const e=(o,a)=>l=>o(a(l)),n=Array.from(t).reverse().reduce((o,a)=>o?e(o,a.encode):a.encode,void 0),i=t.reduce((o,a)=>o?e(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Xn(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(Ri(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=t.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return i})}}}function er(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function uo(t,e="="){if(Ri(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===e;i--)if(!((i-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function c1(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Vp(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let i=0;const o=[],a=Array.from(t);for(a.forEach(l=>{if(Ri(l),l<0||l>=e)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],p=e*l+f;if(!Number.isSafeInteger(p)||e*l/e!==l||p-f!==e*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<t.length-1&&t[l]===0;l++)o.push(0);return o.reverse()}const u1=(t,e)=>e?u1(e,t%e):t,Ba=(t,e)=>t+(e-u1(t,e));function _u(t,e,n,i){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ba(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Ba(e,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of t){if(Ri(d),d>=2**e)throw new Error(`convertRadix2: invalid data word=${d} from=${e}`);if(o=o<<e|d,a+e>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${e}`);for(a+=e;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=e)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function d1(t){return Ri(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Vp(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Vp(e,t,2**8))}}}function $r(t,e=!1){if(Ri(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(Ba(8,t)>32||Ba(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return _u(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(_u(n,t,8,e))}}}function Gp(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function f1(t,e){if(Ri(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-t),o=e(i).slice(0,t),a=n.slice(-t);for(let l=0;l<t;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const fa={alphabet:Xn,chain:Dn,checksum:f1,radix:d1,radix2:$r,join:er,padding:uo},Q8=Dn($r(4),Xn("0123456789ABCDEF"),er("")),Y8=Dn($r(5),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),uo(5),er(""));Dn($r(5),Xn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),uo(5),er(""));Dn($r(5),Xn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),er(""),c1(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const _r=Dn($r(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),uo(6),er("")),J8=Dn($r(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),uo(6),er("")),ld=t=>Dn(d1(58),Xn(t),er("")),ja=ld("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");ld("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");ld("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const Qp=[0,2,3,5,6,7,9,10,11],X8={encode(t){let e="";for(let n=0;n<t.length;n+=8){const i=t.subarray(n,n+8);e+=ja.encode(i).padStart(Qp[i.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const i=t.slice(n,n+11),o=Qp.indexOf(i.length),a=ja.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(e)}},e7=t=>Dn(f1(4,e=>t(t(e))),ja),wu=Dn(Xn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),er("")),Yp=[996825010,642813549,513874426,1027748829,705979059];function Us(t){const e=t>>25;let n=(t&33554431)<<5;for(let i=0;i<Yp.length;i++)(e>>i&1)===1&&(n^=Yp[i]);return n}function Jp(t,e,n=1){const i=t.length;let o=1;for(let a=0;a<i;a++){const l=t.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${t})`);o=Us(o)^l>>5}o=Us(o);for(let a=0;a<i;a++)o=Us(o)^t.charCodeAt(a)&31;for(let a of e)o=Us(o)^a;for(let a=0;a<6;a++)o=Us(o);return o^=n,wu.encode(_u([o%2**30],30,5,!1))}function h1(t){const e=t==="bech32"?1:734539939,n=$r(5),i=n.decode,o=n.encode,a=Gp(i);function l(p,g,m=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const _=p.length+7+g.length;if(m!==!1&&_>m)throw new TypeError(`Length ${_} exceeds limit ${m}`);return p=p.toLowerCase(),`${p}1${wu.encode(g)}${Jp(p,g,e)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const m=p.toLowerCase();if(p!==m&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=m;const _=p.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=p.slice(0,_),$=p.slice(_+1);if($.length<6)throw new Error("Data must be at least 6 characters long");const x=wu.decode($).slice(0,-6),C=Jp(w,x,e);if(!$.endsWith(C))throw new Error(`Invalid checksum in ${p}: expected "${C}"`);return{prefix:w,words:x}}const d=Gp(u);function f(p){const{prefix:g,words:m}=u(p,!1);return{prefix:g,words:m,bytes:i(m)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const is=h1("bech32");h1("bech32m");const t7={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},n7=Dn($r(4),Xn("0123456789abcdef"),er(""),c1(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),r7={utf8:t7,hex:n7,base16:Q8,base32:Y8,base64:_r,base64url:J8,base58:ja,base58xmr:X8};`${Object.keys(r7).join(", ")}`;const p1=`abandon
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
`);function i7(t,e,n,i){cn.hash(t);const o=u8({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(cn.number(a),cn.number(l),cn.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=Hs(e),f=Hs(n),p=new Uint8Array(l),g=Ws.create(t,d),m=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:m}}function s7(t,e,n,i,o){return t.destroy(),e.destroy(),i&&i.destroy(),o.fill(0),n}function o7(t,e,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=i7(t,e,n,i);let f;const p=new Uint8Array(4),g=bi(p),m=new Uint8Array(u.outputLen);for(let _=1,w=0;w<a;_++,w+=u.outputLen){const $=l.subarray(w,w+u.outputLen);g.setInt32(0,_,!1),(f=d._cloneInto(f)).update(p).digestInto(m),$.set(m.subarray(0,$.length));for(let x=1;x<o;x++){u._cloneInto(f).update(m).digestInto(m);for(let C=0;C<$.length;C++)$[C]^=m[C]}}return s7(u,d,l,f,m)}const ha=BigInt(2**32-1),xu=BigInt(32);function g1(t,e=!1){return e?{h:Number(t&ha),l:Number(t>>xu&ha)}:{h:Number(t>>xu&ha)|0,l:Number(t&ha)|0}}function a7(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:a,l}=g1(t[o],e);[n[o],i[o]]=[a,l]}return[n,i]}const l7=(t,e)=>BigInt(t>>>0)<<xu|BigInt(e>>>0),c7=(t,e,n)=>t>>>n,u7=(t,e,n)=>t<<32-n|e>>>n,d7=(t,e,n)=>t>>>n|e<<32-n,f7=(t,e,n)=>t<<32-n|e>>>n,h7=(t,e,n)=>t<<64-n|e>>>n-32,p7=(t,e,n)=>t>>>n-32|e<<64-n,g7=(t,e)=>e,v7=(t,e)=>t,m7=(t,e,n)=>t<<n|e>>>32-n,y7=(t,e,n)=>e<<n|t>>>32-n,b7=(t,e,n)=>e<<n-32|t>>>64-n,_7=(t,e,n)=>t<<n-32|e>>>64-n;function w7(t,e,n,i){const o=(e>>>0)+(i>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const x7=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),$7=(t,e,n,i)=>e+n+i+(t/2**32|0)|0,E7=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0),k7=(t,e,n,i,o)=>e+n+i+o+(t/2**32|0)|0,C7=(t,e,n,i,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(o>>>0),S7=(t,e,n,i,o,a)=>e+n+i+o+a+(t/2**32|0)|0,De={fromBig:g1,split:a7,toBig:l7,shrSH:c7,shrSL:u7,rotrSH:d7,rotrSL:f7,rotrBH:h7,rotrBL:p7,rotr32H:g7,rotr32L:v7,rotlSH:m7,rotlSL:y7,rotlBH:b7,rotlBL:_7,add:w7,add3L:x7,add3H:$7,add4L:E7,add4H:k7,add5H:S7,add5L:C7},[T7,A7]=De.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Br=new Uint32Array(80),jr=new Uint32Array(80);class pl extends td{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:p,Fh:g,Fl:m,Gh:_,Gl:w,Hh:$,Hl:x}=this;return[e,n,i,o,a,l,u,d,f,p,g,m,_,w,$,x]}set(e,n,i,o,a,l,u,d,f,p,g,m,_,w,$,x){this.Ah=e|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=p|0,this.Fh=g|0,this.Fl=m|0,this.Gh=_|0,this.Gl=w|0,this.Hh=$|0,this.Hl=x|0}process(e,n){for(let E=0;E<16;E++,n+=4)Br[E]=e.getUint32(n),jr[E]=e.getUint32(n+=4);for(let E=16;E<80;E++){const I=Br[E-15]|0,O=jr[E-15]|0,A=De.rotrSH(I,O,1)^De.rotrSH(I,O,8)^De.shrSH(I,O,7),F=De.rotrSL(I,O,1)^De.rotrSL(I,O,8)^De.shrSL(I,O,7),N=Br[E-2]|0,K=jr[E-2]|0,ee=De.rotrSH(N,K,19)^De.rotrBH(N,K,61)^De.shrSH(N,K,6),ie=De.rotrSL(N,K,19)^De.rotrBL(N,K,61)^De.shrSL(N,K,6),se=De.add4L(F,ie,jr[E-7],jr[E-16]),ae=De.add4H(se,A,ee,Br[E-7],Br[E-16]);Br[E]=ae|0,jr[E]=se|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:p,Eh:g,El:m,Fh:_,Fl:w,Gh:$,Gl:x,Hh:C,Hl:M}=this;for(let E=0;E<80;E++){const I=De.rotrSH(g,m,14)^De.rotrSH(g,m,18)^De.rotrBH(g,m,41),O=De.rotrSL(g,m,14)^De.rotrSL(g,m,18)^De.rotrBL(g,m,41),A=g&_^~g&$,F=m&w^~m&x,N=De.add5L(M,O,F,A7[E],jr[E]),K=De.add5H(N,C,I,A,T7[E],Br[E]),ee=N|0,ie=De.rotrSH(i,o,28)^De.rotrBH(i,o,34)^De.rotrBH(i,o,39),se=De.rotrSL(i,o,28)^De.rotrBL(i,o,34)^De.rotrBL(i,o,39),ae=i&a^i&u^a&u,te=o&l^o&d^l&d;C=$|0,M=x|0,$=_|0,x=w|0,_=g|0,w=m|0,{h:g,l:m}=De.add(f|0,p|0,K|0,ee|0),f=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const j=De.add3L(ee,se,te);i=De.add3H(j,K,ie,ae),o=j|0}({h:i,l:o}=De.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=De.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=De.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:p}=De.add(this.Dh|0,this.Dl|0,f|0,p|0),{h:g,l:m}=De.add(this.Eh|0,this.El|0,g|0,m|0),{h:_,l:w}=De.add(this.Fh|0,this.Fl|0,_|0,w|0),{h:$,l:x}=De.add(this.Gh|0,this.Gl|0,$|0,x|0),{h:C,l:M}=De.add(this.Hh|0,this.Hl|0,C|0,M|0),this.set(i,o,a,l,u,d,f,p,g,m,_,w,$,x,C,M)}roundClean(){Br.fill(0),jr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class R7 extends pl{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class I7 extends pl{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class O7 extends pl{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const $u=Ai(()=>new pl);Ai(()=>new R7);Ai(()=>new I7);Ai(()=>new O7);const L7=t=>t[0]==="あいこくしん";function v1(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function m1(t){const e=v1(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function y1(t){cn.bytes(t,16,20,24,28,32)}function P7(t,e=128){if(cn.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return j7(ao(e/8),t)}const M7=t=>{const e=8-t.length/4;return new Uint8Array([Gn(t)[0]>>e<<e])};function b1(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),fa.chain(fa.checksum(1,M7),fa.radix2(11,!0),fa.alphabet(t))}function B7(t,e){const{words:n}=m1(t),i=b1(e).decode(n);return y1(i),i}function j7(t,e){return y1(t),b1(e).encode(t).join(L7(e)?"　":" ")}function N7(t,e){try{B7(t,e)}catch{return!1}return!0}const D7=t=>v1(`mnemonic${t}`);function U7(t,e=""){return o7($u,m1(t).nfkd,D7(e),{c:2048,dkLen:64})}const F7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),_1=Uint8Array.from({length:16},(t,e)=>e),z7=_1.map(t=>(9*t+5)%16);let cd=[_1],ud=[z7];for(let t=0;t<4;t++)for(let e of[cd,ud])e.push(e[t].map(n=>F7[n]));const w1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),H7=cd.map((t,e)=>t.map(n=>w1[e][n])),W7=ud.map((t,e)=>t.map(n=>w1[e][n])),q7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Z7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),pa=(t,e)=>t<<e|t>>>32-e;function Xp(t,e,n,i){return t===0?e^n^i:t===1?e&n|~e&i:t===2?(e|~n)^i:t===3?e&i|n&~i:e^(n|~i)}const ga=new Uint32Array(16);class K7 extends td{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:i,h3:o,h4:a}=this;return[e,n,i,o,a]}set(e,n,i,o,a){this.h0=e|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(e,n){for(let _=0;_<16;_++,n+=4)ga[_]=e.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,p=f,g=this.h4|0,m=g;for(let _=0;_<5;_++){const w=4-_,$=q7[_],x=Z7[_],C=cd[_],M=ud[_],E=H7[_],I=W7[_];for(let O=0;O<16;O++){const A=pa(i+Xp(_,a,u,f)+ga[C[O]]+$,E[O])+g|0;i=g,g=f,f=pa(u,10)|0,u=a,a=A}for(let O=0;O<16;O++){const A=pa(o+Xp(w,l,d,p)+ga[M[O]]+x,I[O])+m|0;o=m,m=p,p=pa(d,10)|0,d=l,l=A}}this.set(this.h1+u+p|0,this.h2+f+m|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ga.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const V7=Ai(()=>new K7),va=Ut.ProjectivePoint,eu=e7(Gn);function eg(t){return BigInt(`0x${ln(t)}`)}function G7(t){return ts(t.toString(16).padStart(64,"0"))}const Q7=V0("Bitcoin seed"),tu={private:76066276,public:76067358},nu=2147483648,Y7=t=>V7(Gn(t)),J7=t=>bi(t).getUint32(0,!1),ma=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return bi(e).setUint32(0,t,!1),e};class gi{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return J7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return eu.encode(this.serialize(this.versions.private,Yi(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return eu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=tu){if(hi(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Ws($u,Q7,e);return new gi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(e,n=tu){const i=eu.decode(e),o=bi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new gi({...l,privateKey:u.slice(1)}):new gi({...l,publicKey:u})}static fromJSON(e){return gi.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||tu,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Ut.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:eg(e.privateKey),this.privKeyBytes=G7(this.privKey),this.pubKey=Ut.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=va.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Y7(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=nu)throw new Error("Invalid index");a[2]==="'"&&(l+=nu),i=i.deriveChild(l)}return i}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ma(e);if(e>=nu){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Yi(new Uint8Array([0]),u,n)}else n=Yi(this.pubKey,n);const i=Ws($u,this.chainCode,n),o=eg(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const u=Et(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=va.fromHex(this.pubKey).add(va.fromPrivateKey(o));if(u.equals(va.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new gi(l)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return hi(e,32),Ut.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(hi(e,32),hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return hi(n,33),Yi(ma(e),new Uint8Array([this.depth]),ma(this.parentFingerprint),ma(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const X7=t=>t instanceof Uint8Array,qn=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),eE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!eE)throw new Error("Non little-endian hardware is not supported");function dd(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Eu(t){if(typeof t=="string"&&(t=dd(t)),!X7(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}const tE=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function nE(t,e){if(e!==void 0&&(typeof e!="object"||!tE(e)))throw new Error("options must be object or undefined");return Object.assign(t,e)}function rE(t,e){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof e=="number"&&t.length!==e)throw new Error(`Uint8Array length ${e} expected`)}function ku(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function iE(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function x1(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function sE(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");ku(t.outputLen),ku(t.blockLen)}function oE(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function aE(t,e){x1(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const an={number:ku,bool:iE,bytes:x1,hash:sE,exists:oE,output:aE},Rt=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class lE{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=Eu(e),rE(e,32);const n=Rt(e,0),i=Rt(e,2),o=Rt(e,4),a=Rt(e,6),l=Rt(e,8),u=Rt(e,10),d=Rt(e,12),f=Rt(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|i<<3)&8191,this.r[2]=(i>>>10|o<<6)&7939,this.r[3]=(o>>>7|a<<9)&8191,this.r[4]=(a>>>4|l<<12)&255,this.r[5]=l>>>1&8190,this.r[6]=(l>>>14|u<<2)&8191,this.r[7]=(u>>>11|d<<5)&8065,this.r[8]=(d>>>8|f<<8)&8191,this.r[9]=f>>>5&127;for(let p=0;p<8;p++)this.pad[p]=Rt(e,16+2*p)}process(e,n,i=!1){const o=i?0:2048,{h:a,r:l}=this,u=l[0],d=l[1],f=l[2],p=l[3],g=l[4],m=l[5],_=l[6],w=l[7],$=l[8],x=l[9],C=Rt(e,n+0),M=Rt(e,n+2),E=Rt(e,n+4),I=Rt(e,n+6),O=Rt(e,n+8),A=Rt(e,n+10),F=Rt(e,n+12),N=Rt(e,n+14);let K=a[0]+(C&8191),ee=a[1]+((C>>>13|M<<3)&8191),ie=a[2]+((M>>>10|E<<6)&8191),se=a[3]+((E>>>7|I<<9)&8191),ae=a[4]+((I>>>4|O<<12)&8191),te=a[5]+(O>>>1&8191),j=a[6]+((O>>>14|A<<2)&8191),q=a[7]+((A>>>11|F<<5)&8191),X=a[8]+((F>>>8|N<<8)&8191),oe=a[9]+(N>>>5|o),J=0,be=J+K*u+ee*(5*x)+ie*(5*$)+se*(5*w)+ae*(5*_);J=be>>>13,be&=8191,be+=te*(5*m)+j*(5*g)+q*(5*p)+X*(5*f)+oe*(5*d),J+=be>>>13,be&=8191;let ge=J+K*d+ee*u+ie*(5*x)+se*(5*$)+ae*(5*w);J=ge>>>13,ge&=8191,ge+=te*(5*_)+j*(5*m)+q*(5*g)+X*(5*p)+oe*(5*f),J+=ge>>>13,ge&=8191;let xe=J+K*f+ee*d+ie*u+se*(5*x)+ae*(5*$);J=xe>>>13,xe&=8191,xe+=te*(5*w)+j*(5*_)+q*(5*m)+X*(5*g)+oe*(5*p),J+=xe>>>13,xe&=8191;let Ve=J+K*p+ee*f+ie*d+se*u+ae*(5*x);J=Ve>>>13,Ve&=8191,Ve+=te*(5*$)+j*(5*w)+q*(5*_)+X*(5*m)+oe*(5*g),J+=Ve>>>13,Ve&=8191;let ue=J+K*g+ee*p+ie*f+se*d+ae*u;J=ue>>>13,ue&=8191,ue+=te*(5*x)+j*(5*$)+q*(5*w)+X*(5*_)+oe*(5*m),J+=ue>>>13,ue&=8191;let Se=J+K*m+ee*g+ie*p+se*f+ae*d;J=Se>>>13,Se&=8191,Se+=te*u+j*(5*x)+q*(5*$)+X*(5*w)+oe*(5*_),J+=Se>>>13,Se&=8191;let V=J+K*_+ee*m+ie*g+se*p+ae*f;J=V>>>13,V&=8191,V+=te*d+j*u+q*(5*x)+X*(5*$)+oe*(5*w),J+=V>>>13,V&=8191;let U=J+K*w+ee*_+ie*m+se*g+ae*p;J=U>>>13,U&=8191,U+=te*f+j*d+q*u+X*(5*x)+oe*(5*$),J+=U>>>13,U&=8191;let G=J+K*$+ee*w+ie*_+se*m+ae*g;J=G>>>13,G&=8191,G+=te*p+j*f+q*d+X*u+oe*(5*x),J+=G>>>13,G&=8191;let ne=J+K*x+ee*$+ie*w+se*_+ae*m;J=ne>>>13,ne&=8191,ne+=te*g+j*p+q*f+X*d+oe*u,J+=ne>>>13,ne&=8191,J=(J<<2)+J|0,J=J+be|0,be=J&8191,J=J>>>13,ge+=J,a[0]=be,a[1]=ge,a[2]=xe,a[3]=Ve,a[4]=ue,a[5]=Se,a[6]=V,a[7]=U,a[8]=G,a[9]=ne}finalize(){const{h:e,pad:n}=this,i=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let u=2;u<10;u++)e[u]+=o,o=e[u]>>>13,e[u]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,i[0]=e[0]+5,o=i[0]>>>13,i[0]&=8191;for(let u=1;u<10;u++)i[u]=e[u]+o,o=i[u]>>>13,i[u]&=8191;i[9]-=8192;let a=(o^1)-1;for(let u=0;u<10;u++)i[u]&=a;a=~a;for(let u=0;u<10;u++)e[u]=e[u]&a|i[u];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let l=e[0]+n[0];e[0]=l&65535;for(let u=1;u<8;u++)l=(e[u]+n[u]|0)+(l>>>16)|0,e[u]=l&65535}update(e){an.exists(this);const{buffer:n,blockLen:i}=this;e=Eu(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){for(;i<=o-a;a+=i)this.process(e,a);continue}n.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){an.exists(this),an.output(e,this),this.finished=!0;const{buffer:n,h:i}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let a=0;for(let l=0;l<8;l++)e[a++]=i[l]>>>0,e[a++]=i[l]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}}function cE(t){const e=(i,o)=>t(o).update(Eu(i)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=i=>t(i),e}cE(t=>new lE(t));const uE=dd("expand 16-byte k"),dE=dd("expand 32-byte k"),fE=qn(uE),hE=qn(dE),tg=t=>!(t.byteOffset%4),pE=t=>{const{core:e,rounds:n,counterRight:i,counterLen:o,allow128bitKeys:a,extendNonceFn:l,blockLen:u}=nE({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},t);an.number(o),an.number(n),an.number(u),an.bool(i),an.bool(a);const d=u/4;if(u%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(f,p,g,m,_=0)=>{if(an.bytes(f),an.bytes(p),an.bytes(g),m||(m=new Uint8Array(g.length)),an.bytes(m),an.number(_),_<0||_>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(m.length<g.length)throw new Error(`Salsa/ChaCha: output (${m.length}) is shorter than data (${g.length})`);const w=[];let $,x;if(f.length===32)$=f,x=hE;else if(f.length===16&&a)$=new Uint8Array(32),$.set(f),$.set(f,16),x=fE,w.push($);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${f.length}`);if(l){if(p.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");$=l(x,$,p.subarray(0,16),new Uint8Array(32)),w.push($),p=p.subarray(16)}const C=16-o;if(p.length!==C)throw new Error(`Salsa/ChaCha: nonce must be ${C} or 16 bytes`);if(C!==12){const K=new Uint8Array(12);K.set(p,i?0:12-p.length),w.push(p=K)}const M=new Uint8Array(u),E=qn(M),I=qn($),O=qn(p),A=tg(g)&&qn(g),F=tg(m)&&qn(m);w.push(E);const N=g.length;for(let K=0,ee=_;K<N;ee++){if(e(x,I,O,E,ee,n),ee>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const ie=Math.min(u,N-K);if(ie===u&&F&&A){const se=K/4;if(K%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let ae=0;ae<d;ae++)F[se+ae]=A[se+ae]^E[ae];K+=u;continue}for(let se=0;se<ie;se++)m[K+se]=g[K+se]^M[se];K+=ie}for(let K=0;K<w.length;K++)w[K].fill(0);return m}},pe=(t,e)=>t<<e|t>>>32-e;function gE(t,e,n,i,o,a=20){let l=t[0],u=t[1],d=t[2],f=t[3],p=e[0],g=e[1],m=e[2],_=e[3],w=e[4],$=e[5],x=e[6],C=e[7],M=o,E=n[0],I=n[1],O=n[2],A=l,F=u,N=d,K=f,ee=p,ie=g,se=m,ae=_,te=w,j=$,q=x,X=C,oe=M,J=E,be=I,ge=O;for(let Ve=0;Ve<a;Ve+=2)A=A+ee|0,oe=pe(oe^A,16),te=te+oe|0,ee=pe(ee^te,12),A=A+ee|0,oe=pe(oe^A,8),te=te+oe|0,ee=pe(ee^te,7),F=F+ie|0,J=pe(J^F,16),j=j+J|0,ie=pe(ie^j,12),F=F+ie|0,J=pe(J^F,8),j=j+J|0,ie=pe(ie^j,7),N=N+se|0,be=pe(be^N,16),q=q+be|0,se=pe(se^q,12),N=N+se|0,be=pe(be^N,8),q=q+be|0,se=pe(se^q,7),K=K+ae|0,ge=pe(ge^K,16),X=X+ge|0,ae=pe(ae^X,12),K=K+ae|0,ge=pe(ge^K,8),X=X+ge|0,ae=pe(ae^X,7),A=A+ie|0,ge=pe(ge^A,16),q=q+ge|0,ie=pe(ie^q,12),A=A+ie|0,ge=pe(ge^A,8),q=q+ge|0,ie=pe(ie^q,7),F=F+se|0,oe=pe(oe^F,16),X=X+oe|0,se=pe(se^X,12),F=F+se|0,oe=pe(oe^F,8),X=X+oe|0,se=pe(se^X,7),N=N+ae|0,J=pe(J^N,16),te=te+J|0,ae=pe(ae^te,12),N=N+ae|0,J=pe(J^N,8),te=te+J|0,ae=pe(ae^te,7),K=K+ee|0,be=pe(be^K,16),j=j+be|0,ee=pe(ee^j,12),K=K+ee|0,be=pe(be^K,8),j=j+be|0,ee=pe(ee^j,7);let xe=0;i[xe++]=l+A|0,i[xe++]=u+F|0,i[xe++]=d+N|0,i[xe++]=f+K|0,i[xe++]=p+ee|0,i[xe++]=g+ie|0,i[xe++]=m+se|0,i[xe++]=_+ae|0,i[xe++]=w+te|0,i[xe++]=$+j|0,i[xe++]=x+q|0,i[xe++]=C+X|0,i[xe++]=M+oe|0,i[xe++]=E+J|0,i[xe++]=I+be|0,i[xe++]=O+ge|0}function vE(t,e,n,i){const o=qn(e),a=qn(n),l=qn(i);let u=t[0],d=t[1],f=t[2],p=t[3],g=o[0],m=o[1],_=o[2],w=o[3],$=o[4],x=o[5],C=o[6],M=o[7],E=a[0],I=a[1],O=a[2],A=a[3];for(let F=0;F<20;F+=2)u=u+g|0,E=pe(E^u,16),$=$+E|0,g=pe(g^$,12),u=u+g|0,E=pe(E^u,8),$=$+E|0,g=pe(g^$,7),d=d+m|0,I=pe(I^d,16),x=x+I|0,m=pe(m^x,12),d=d+m|0,I=pe(I^d,8),x=x+I|0,m=pe(m^x,7),f=f+_|0,O=pe(O^f,16),C=C+O|0,_=pe(_^C,12),f=f+_|0,O=pe(O^f,8),C=C+O|0,_=pe(_^C,7),p=p+w|0,A=pe(A^p,16),M=M+A|0,w=pe(w^M,12),p=p+w|0,A=pe(A^p,8),M=M+A|0,w=pe(w^M,7),u=u+m|0,A=pe(A^u,16),C=C+A|0,m=pe(m^C,12),u=u+m|0,A=pe(A^u,8),C=C+A|0,m=pe(m^C,7),d=d+_|0,E=pe(E^d,16),M=M+E|0,_=pe(_^M,12),d=d+_|0,E=pe(E^d,8),M=M+E|0,_=pe(_^M,7),f=f+w|0,I=pe(I^f,16),$=$+I|0,w=pe(w^$,12),f=f+w|0,I=pe(I^f,8),$=$+I|0,w=pe(w^$,7),p=p+g|0,O=pe(O^p,16),x=x+O|0,g=pe(g^x,12),p=p+g|0,O=pe(O^p,8),x=x+O|0,g=pe(g^x,7);return l[0]=u,l[1]=d,l[2]=f,l[3]=p,l[4]=E,l[5]=I,l[6]=O,l[7]=A,i}const $1=pE({core:gE,counterRight:!1,counterLen:8,extendNonceFn:vE,allow128bitKeys:!1});var mE=Object.defineProperty,bt=(t,e)=>{for(var n in e)mE(t,n,{get:e[n],enumerable:!0})};function E1(t){return ln(co.getPublicKey(t))}var fd={};bt(fd,{MessageNode:()=>k1,MessageQueue:()=>C1,insertEventIntoAscendingList:()=>bE,insertEventIntoDescendingList:()=>yE,normalizeURL:()=>Cu,utf8Decoder:()=>Zn,utf8Encoder:()=>$n});var Zn=new TextDecoder("utf-8"),$n=new TextEncoder;function Cu(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function yE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at<t[i].created_at)a=i+1;else if(e.created_at>=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}function bE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at>t[i].created_at)a=i+1;else if(e.created_at<=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}var k1=class{_value;_next;get value(){return this._value}set value(t){this._value=t}get next(){return this._next}set next(t){this._next=t}constructor(t){this._value=t,this._next=null}},C1=class{_first;_last;get first(){return this._first}set first(t){this._first=t}get last(){return this._last}set last(t){this._last=t}_size;get size(){return this._size}set size(t){this._size=t}constructor(){this._first=null,this._last=null,this._size=0}enqueue(t){const e=new k1(t);return this._size===0||!this._last?(this._first=e,this._last=e):(this._last.next=e,this._last=e),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let t=this._first;return this._first=t.next,t.next=null,this._size--,t.value}},Gi=Symbol("verified"),ct=(t=>(t[t.Metadata=0]="Metadata",t[t.Text=1]="Text",t[t.RecommendRelay=2]="RecommendRelay",t[t.Contacts=3]="Contacts",t[t.EncryptedDirectMessage=4]="EncryptedDirectMessage",t[t.EventDeletion=5]="EventDeletion",t[t.Repost=6]="Repost",t[t.Reaction=7]="Reaction",t[t.BadgeAward=8]="BadgeAward",t[t.ChannelCreation=40]="ChannelCreation",t[t.ChannelMetadata=41]="ChannelMetadata",t[t.ChannelMessage=42]="ChannelMessage",t[t.ChannelHideMessage=43]="ChannelHideMessage",t[t.ChannelMuteUser=44]="ChannelMuteUser",t[t.Blank=255]="Blank",t[t.Report=1984]="Report",t[t.ZapRequest=9734]="ZapRequest",t[t.Zap=9735]="Zap",t[t.RelayList=10002]="RelayList",t[t.ClientAuth=22242]="ClientAuth",t[t.NwcRequest=23194]="NwcRequest",t[t.HttpAuth=27235]="HttpAuth",t[t.ProfileBadge=30008]="ProfileBadge",t[t.BadgeDefinition=30009]="BadgeDefinition",t[t.Article=30023]="Article",t[t.FileMetadata=1063]="FileMetadata",t))(ct||{});function _E(t=255){return{kind:t,content:"",tags:[],created_at:0}}function Gr(t,e){const n=t;return n.pubkey=E1(e),n.id=fo(n),n.sig=$E(n,e),n[Gi]=!0,n}function wE(t){if(!hd(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function fo(t){let e=Gn($n.encode(wE(t)));return ln(e)}var xE=t=>t instanceof Object;function hd(t){if(!xE(t)||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function ho(t){if(typeof t[Gi]=="boolean")return t[Gi];const e=fo(t);if(e!==t.id)return t[Gi]=!1;try{return t[Gi]=co.verify(t.sig,e,t.pubkey)}catch{return t[Gi]=!1}}function $E(t,e){return ln(co.sign(fo(t),e))}function EE(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1&&!t.ids.some(n=>e.id.startsWith(n))||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1&&!t.authors.some(n=>e.pubkey.startsWith(n)))return!1;for(let n in t)if(n[0]==="#"){let i=n.slice(1),o=t[`#${i}`];if(o&&!e.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>t.until)}function S1(t,e){for(let n=0;n<t.length;n++)if(EE(t[n],e))return!0;return!1}function kE(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];Object.entries(i).forEach(([o,a])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){e[o]=e[o]||[];for(let l=0;l<a.length;l++){let u=a[l];e[o].includes(u)||e[o].push(u)}}}),i.limit&&(!e.limit||i.limit>e.limit)&&(e.limit=i.limit),i.until&&(!e.until||i.until>e.until)&&(e.until=i.until),i.since&&(!e.since||i.since<e.since)&&(e.since=i.since)}return e}var CE={};bt(CE,{getHex64:()=>gl,getInt:()=>T1,getSubscriptionId:()=>A1,matchEventId:()=>SE,matchEventKind:()=>AE,matchEventPubkey:()=>TE});function gl(t,e){let n=e.length+3,i=t.indexOf(`"${e}":`)+n,o=t.slice(i).indexOf('"')+i+1;return t.slice(o,o+64)}function T1(t,e){let n=e.length,i=t.indexOf(`"${e}":`)+n+3,o=t.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function A1(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let i=e+7+1+n,o=t.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return t.slice(i+1,a)}function SE(t,e){return e===gl(t,"id")}function TE(t,e){return e===gl(t,"pubkey")}function AE(t,e){return e===T1(t,"kind")}var ng=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function RE(t,e={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=e;var a,l={},u=ng(),d={},f={},p;async function g(){return p||(p=new Promise((C,M)=>{try{a=new WebSocket(t)}catch(A){M(A)}a.onopen=()=>{u.connect.forEach(A=>A()),C()},a.onerror=()=>{p=void 0,u.error.forEach(A=>A()),M()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(A=>A())};let E=new C1,I;a.onmessage=A=>{E.enqueue(A.data),I||(I=setInterval(O,0))};function O(){if(E.size===0){clearInterval(I),I=null;return}var A=E.dequeue();if(!A)return;let F=A1(A);if(F){let N=l[F];if(N&&N.alreadyHaveEvent&&N.alreadyHaveEvent(gl(A,"id"),t))return}try{let N=JSON.parse(A);switch(N[0]){case"EVENT":{let se=N[1],ae=N[2];hd(ae)&&l[se]&&(l[se].skipVerification||ho(ae))&&S1(l[se].filters,ae)&&(l[se],(d[se]?.event||[]).forEach(te=>te(ae)));return}case"COUNT":let K=N[1],ee=N[2];l[K]&&(d[K]?.count||[]).forEach(se=>se(ee));return;case"EOSE":{let se=N[1];se in d&&(d[se].eose.forEach(ae=>ae()),d[se].eose=[]);return}case"OK":{let se=N[1],ae=N[2],te=N[3]||"";if(se in f){let{resolve:j,reject:q}=f[se];ae?j(null):q(new Error(te))}return}case"NOTICE":let ie=N[1];u.notice.forEach(se=>se(ie));return;case"AUTH":{let se=N[1];u.auth?.forEach(ae=>ae(se));return}}}catch{return}}}),p)}function m(){return a?.readyState===1}async function _(){m()||await g()}async function w(C){let M=JSON.stringify(C);if(!(!m()&&(await new Promise(E=>setTimeout(E,1e3)),!m())))try{a.send(M)}catch(E){console.log(E)}}const $=(C,{verb:M="REQ",skipVerification:E=!1,alreadyHaveEvent:I=null,id:O=Math.random().toString().slice(2)}={})=>{let A=O;l[A]={id:A,filters:C,skipVerification:E,alreadyHaveEvent:I},w([M,A,...C]);let F={sub:(N,K={})=>$(N||C,{skipVerification:K.skipVerification||E,alreadyHaveEvent:K.alreadyHaveEvent||I,id:A}),unsub:()=>{delete l[A],delete d[A],w(["CLOSE",A])},on:(N,K)=>{d[A]=d[A]||{event:[],count:[],eose:[]},d[A][N].push(K)},off:(N,K)=>{let ee=d[A],ie=ee[N].indexOf(K);ie>=0&&ee[N].splice(ie,1)},get events(){return R1(F)}};return F};function x(C,M){return new Promise((E,I)=>{if(!C.id){I(new Error(`event ${C} has no id`));return}let O=C.id;w([M,C]),f[O]={resolve:E,reject:I}})}return{url:t,sub:$,on:(C,M)=>{u[C].push(M),C==="connect"&&a?.readyState===1&&M()},off:(C,M)=>{let E=u[C].indexOf(M);E!==-1&&u[C].splice(E,1)},list:(C,M)=>new Promise(E=>{let I=$(C,M),O=[],A=setTimeout(()=>{I.unsub(),E(O)},n);I.on("eose",()=>{I.unsub(),clearTimeout(A),E(O)}),I.on("event",F=>{O.push(F)})}),get:(C,M)=>new Promise(E=>{let I=$([C],M),O=setTimeout(()=>{I.unsub(),E(null)},i);I.on("event",A=>{I.unsub(),clearTimeout(O),E(A)})}),count:C=>new Promise(M=>{let E=$(C,{...$,verb:"COUNT"}),I=setTimeout(()=>{E.unsub(),M(null)},o);E.on("count",O=>{E.unsub(),clearTimeout(I),M(O)})}),async publish(C){await x(C,"EVENT")},async auth(C){await x(C,"AUTH")},connect:_,close(){u=ng(),d={},f={},a?.readyState===WebSocket.OPEN&&a.close()},get status(){return a?.readyState??3}}}async function*R1(t){let e;const n=[],i=o=>{e?(e(o),e=void 0):n.push(o)};t.on("event",i);try{for(;;)n.length>0?yield n.shift():yield await new Promise(a=>{e=a})}finally{t.off("event",i)}}var IE=class{_conn;_seenOn={};batchedByKey={};eoseSubTimeout;getTimeout;seenOnEnabled=!0;batchInterval=100;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400,this.seenOnEnabled=t.seenOnEnabled!==!1,this.batchInterval=t.batchInterval||100}close(t){t.forEach(e=>{let n=this._conn[Cu(e)];n&&n.close()})}async ensureRelay(t){const e=Cu(t);this._conn[e]||(this._conn[e]=RE(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[e];return await n.connect(),n}sub(t,e,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(m,_)=>{if(n?.alreadyHaveEvent?.(m,_))return!0;if(this.seenOnEnabled){let w=this._seenOn[m]||new Set;w.add(_),this._seenOn[m]=w}return i.has(m)};let a=[],l=new Set,u=new Set,d=t.length,f=!1,p=setTimeout(()=>{f=!0;for(let m of u.values())m()},n?.eoseSubTimeout||this.eoseSubTimeout);t.filter((m,_,w)=>w.indexOf(m)===_).forEach(async m=>{let _;try{_=await this.ensureRelay(m)}catch{$();return}if(!_)return;let w=_.sub(e,o);w.on("event",x=>{i.add(x.id);for(let C of l.values())C(x)}),w.on("eose",()=>{f||$()}),a.push(w);function $(){if(d--,d===0){clearTimeout(p);for(let x of u.values())x()}}});let g={sub(m,_){return a.forEach(w=>w.sub(m,_)),g},unsub(){a.forEach(m=>m.unsub())},on(m,_){m==="event"?l.add(_):m==="eose"&&u.add(_)},off(m,_){m==="event"?l.delete(_):m==="eose"&&u.delete(_)},get events(){return R1(g)}};return g}get(t,e,n){return new Promise(i=>{let o=this.sub(t,[e],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(t,e,n){return new Promise(i=>{let o=[],a=this.sub(t,e,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}batchedList(t,e,n){return new Promise(i=>{this.batchedByKey[t]?this.batchedByKey[t].push({filters:n,relays:e,resolve:i,events:[]}):(this.batchedByKey[t]=[{filters:n,relays:e,resolve:i,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const a=this.batchedByKey[o],l=[],u=[];a.forEach(f=>{l.push(...f.filters),u.push(...f.relays)});const d=this.sub(u,[kE(...l)]);d.on("event",f=>{a.forEach(p=>S1(p.filters,f)&&p.events.push(f))}),d.on("eose",()=>{d.unsub(),a.forEach(f=>f.resolve(f.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(t,e){return t.map(async n=>(await this.ensureRelay(n)).publish(e))}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}},po={};bt(po,{BECH32_REGEX:()=>O1,decode:()=>vl,naddrEncode:()=>NE,neventEncode:()=>jE,noteEncode:()=>ME,nprofileEncode:()=>BE,npubEncode:()=>PE,nrelayEncode:()=>DE,nsecEncode:()=>LE});var I1=5e3,O1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function OE(t){const e=new Uint8Array(4);return e[0]=t>>24&255,e[1]=t>>16&255,e[2]=t>>8&255,e[3]=t&255,e}function vl(t){let{prefix:e,words:n}=is.decode(t,I1),i=new Uint8Array(is.fromWords(n));switch(e){case"nprofile":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ln(o[0][0]),relays:o[1]?o[1].map(a=>Zn.decode(a)):[]}}}case"nevent":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(o[3]&&o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:ln(o[0][0]),relays:o[1]?o[1].map(a=>Zn.decode(a)):[],author:o[2]?.[0]?ln(o[2][0]):void 0,kind:o[3]?.[0]?parseInt(ln(o[3][0]),16):void 0}}}case"naddr":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Zn.decode(o[0][0]),pubkey:ln(o[2][0]),kind:parseInt(ln(o[3][0]),16),relays:o[1]?o[1].map(a=>Zn.decode(a)):[]}}}case"nrelay":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Zn.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:e,data:ln(i)};default:throw new Error(`unknown prefix ${e}`)}}function ya(t){let e={},n=t;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);e[i]=e[i]||[],e[i].push(a)}return e}function LE(t){return pd("nsec",t)}function PE(t){return pd("npub",t)}function ME(t){return pd("note",t)}function go(t,e){let n=is.toWords(e);return is.encode(t,n,I1)}function pd(t,e){let n=ts(e);return go(t,n)}function BE(t){let e=ml({0:[ts(t.pubkey)],1:(t.relays||[]).map(n=>$n.encode(n))});return go("nprofile",e)}function jE(t){let e;t.kind!=null&&(e=OE(t.kind));let n=ml({0:[ts(t.id)],1:(t.relays||[]).map(i=>$n.encode(i)),2:t.author?[ts(t.author)]:[],3:e?[new Uint8Array(e)]:[]});return go("nevent",n)}function NE(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=ml({0:[$n.encode(t.identifier)],1:(t.relays||[]).map(i=>$n.encode(i)),2:[ts(t.pubkey)],3:[new Uint8Array(e)]});return go("naddr",n)}function DE(t){let e=ml({0:[$n.encode(t)]});return go("nrelay",e)}function ml(t){let e=[];return Object.entries(t).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),e.push(a)})}),Yi(...e)}var UE={};bt(UE,{decrypt:()=>FE,encrypt:()=>L1});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function L1(t,e,n){const i=Ut.getSharedSecret(t,"02"+e),o=P1(i);let a=Uint8Array.from(ao(16)),l=$n.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=_r.encode(new Uint8Array(d)),p=_r.encode(new Uint8Array(a.buffer));return`${f}?iv=${p}`}async function FE(t,e,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(t,"02"+e),l=P1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=_r.decode(i),f=_r.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return Zn.decode(p)}function P1(t){return t.slice(1,33)}var M1={};bt(M1,{NIP05_REGEX:()=>B1,queryProfile:()=>WE,searchDomain:()=>HE,useFetchImplementation:()=>zE});var B1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,yl;try{yl=fetch}catch{}function zE(t){yl=t}async function HE(t,e=""){try{return(await(await yl(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function WE(t){const e=t.match(B1);if(!e)return null;const[n,i="_",o]=e;try{const a=await yl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=qE(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function qE(t){const e={names:{}};for(const[n,i]of Object.entries(t.names))typeof n=="string"&&typeof i=="string"&&(e.names[n]=i);if(t.relays){e.relays={};for(const[n,i]of Object.entries(t.relays))typeof n=="string"&&Array.isArray(i)&&(e.relays[n]=i.filter(o=>typeof o=="string"))}return e}var ZE={};bt(ZE,{generateSeedWords:()=>VE,privateKeyFromSeedWords:()=>KE,validateWords:()=>GE});function KE(t,e){let i=gi.fromMasterSeed(U7(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return ln(i)}function VE(){return P7(p1)}function GE(t){return N7(t,p1)}var QE={};bt(QE,{parse:()=>YE});function YE(t){const e={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of t.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&e.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){e.root=f;continue}if(d==="reply"){e.reply=f;continue}if(d==="mention"){e.mentions.push(f);continue}if(p){e.root=f;continue}if(g){e.reply=f;continue}e.mentions.push(f)}return e}var JE={};bt(JE,{getPow:()=>j1,minePow:()=>XE});function j1(t){let e=0;for(let n=0;n<t.length;n++){const i=parseInt(t[n],16);if(i===0)e+=4;else{e+=Math.clz32(i)-28;break}}return e}function XE(t,e){let n=0;const i=t,o=["nonce",n.toString(),e.toString()];for(i.tags.push(o);;){const a=Math.floor(new Date().getTime()/1e3);if(a!==i.created_at&&(n=0,i.created_at=a),o[1]=(++n).toString(),i.id=fo(i),j1(i.id)>=e)break}return i}var e9={};bt(e9,{finishRepostEvent:()=>t9,getRepostedEvent:()=>n9,getRepostedEventPointer:()=>N1});function t9(t,e,n,i){return Gr({kind:6,tags:[...t.tags??[],["e",e.id,n],["p",e.pubkey]],content:t.content===""?"":JSON.stringify(e),created_at:t.created_at},i)}function N1(t){if(t.kind!==6)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(e!==void 0)return{id:e[1],relays:[e[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function n9(t,{skipVerification:e}={}){const n=N1(t);if(n===void 0||t.content==="")return;let i;try{i=JSON.parse(t.content)}catch{return}if(i.id===n.id&&!(!e&&!ho(i)))return i}var r9={};bt(r9,{NOSTR_URI_REGEX:()=>bl,parse:()=>s9,test:()=>i9});var bl=new RegExp(`nostr:(${O1.source})`);function i9(t){return typeof t=="string"&&new RegExp(`^${bl.source}$`).test(t)}function s9(t){const e=t.match(new RegExp(`^${bl.source}$`));if(!e)throw new Error(`Invalid Nostr URI: ${t}`);return{uri:e[0],value:e[1],decoded:vl(e[1])}}var o9={};bt(o9,{finishReactionEvent:()=>a9,getReactedEventPointer:()=>l9});function a9(t,e,n){const i=e.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Gr({...t,kind:7,tags:[...t.tags??[],...i,["e",e.id],["p",e.pubkey]],content:t.content??"+"},n)}function l9(t){if(t.kind!==7)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(e===void 0||n===void 0))return{id:e[1],relays:[e[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var c9={};bt(c9,{createDelegation:()=>u9,getDelegator:()=>d9});function u9(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Gn($n.encode(`nostr:delegation:${e.pubkey}:${i}`)),a=ln(co.sign(o,t));return{from:E1(t),to:e.pubkey,cond:i,sig:a}}function d9(t){let e=t.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!e)return null;let n=e[1],i=e[2],o=e[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,p]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&t.kind===parseInt(p))){if(d==="created_at"&&f==="<"&&t.created_at<parseInt(p))continue;if(d==="created_at"&&f===">"&&t.created_at>parseInt(p))continue;return null}}let l=Gn($n.encode(`nostr:delegation:${t.pubkey}:${i}`));return co.verify(o,l,n)?n:null}var f9={};bt(f9,{matchAll:()=>h9,regex:()=>gd,replaceAll:()=>p9});var gd=()=>new RegExp(`\\b${bl.source}\\b`,"g");function*h9(t){const e=t.matchAll(gd());for(const n of e)try{const[i,o]=n;yield{uri:i,value:o,decoded:vl(o),start:n.index,end:n.index+i.length}}catch{}}function p9(t,e){return t.replaceAll(gd(),(n,i)=>e({uri:n,value:i,decoded:vl(i)}))}var g9={};bt(g9,{channelCreateEvent:()=>v9,channelHideMessageEvent:()=>b9,channelMessageEvent:()=>y9,channelMetadataEvent:()=>m9,channelMuteUserEvent:()=>_9});var v9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Gr({kind:40,tags:[...t.tags??[]],content:n,created_at:t.created_at},e)},m9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Gr({kind:41,tags:[["e",t.channel_create_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},y9=(t,e)=>{const n=[["e",t.channel_create_event_id,t.relay_url,"root"]];return t.reply_to_channel_message_event_id&&n.push(["e",t.reply_to_channel_message_event_id,t.relay_url,"reply"]),Gr({kind:42,tags:[...n,...t.tags??[]],content:t.content,created_at:t.created_at},e)},b9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Gr({kind:43,tags:[["e",t.channel_message_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},_9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Gr({kind:44,tags:[["p",t.pubkey_to_mute],...t.tags??[]],content:n,created_at:t.created_at},e)},w9={};bt(w9,{useFetchImplementation:()=>x9,validateGithub:()=>$9});var vd;try{vd=fetch}catch{}function x9(t){vd=t}async function $9(t,e,n){try{return await(await vd(`https://gist.github.com/${e}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${t}`}catch{return!1}}var E9={};bt(E9,{authenticate:()=>k9});var k9=async({challenge:t,relay:e,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",e.url],["challenge",t]],content:""};return e.auth(await n(i))},C9={};bt(C9,{decrypt:()=>A9,encrypt:()=>T9,getSharedSecret:()=>S9});var S9=(t,e)=>Gn(Ut.getSharedSecret(t,"02"+e).subarray(1,33));function T9(t,e,n=1){if(n!==1)throw new Error("NIP44: unknown encryption version");const i=ao(24),o=$n.encode(e),a=$1(t,i,o),l=new Uint8Array(25+a.length);return l.set([n],0),l.set(i,1),l.set(a,25),_r.encode(l)}function A9(t,e){let n=_r.decode(e);if(n[0]!==1)throw new Error(`NIP44: unknown encryption version: ${n[0]}`);const i=n.slice(1,25),o=n.slice(25),a=$1(t,i,o);return Zn.decode(a)}var R9={};bt(R9,{makeNwcRequestEvent:()=>O9,parseConnectionString:()=>I9});function I9(t){const{pathname:e,searchParams:n}=new URL(t),i=e,o=n.get("relay"),a=n.get("secret");if(!i||!o||!a)throw new Error("invalid connection string");return{pubkey:i,relay:o,secret:a}}async function O9({pubkey:t,secret:e,invoice:n}){const o=await L1(e,t,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),a={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t]]};return Gr(a,e)}var L9={};bt(L9,{getZapEndpoint:()=>M9,makeZapReceipt:()=>N9,makeZapRequest:()=>B9,useFetchImplementation:()=>P9,validateZapRequest:()=>j9});var md;try{md=fetch}catch{}function P9(t){md=t}async function M9(t){try{let e="",{lud06:n,lud16:i}=JSON.parse(t.content);if(n){let{words:l}=is.decode(n,1e3),u=is.fromWords(l);e=Zn.decode(u)}else if(i){let[l,u]=i.split("@");e=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await md(e)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function B9({profile:t,event:e,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...i]]};return e&&a.tags.push(["e",e]),a}function j9(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!hd(e))return"Zap request is not a valid Nostr event.";if(!ho(e))return"Invalid signature on zap request.";let n=e.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=e.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function N9({zapRequest:t,preimage:e,bolt11:n,paidAt:i}){let a=JSON.parse(t).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",t]]};return e&&l.tags.push(["preimage",e]),l}var D9={};bt(D9,{getToken:()=>U9,unpackEventFromToken:()=>U1,validateEvent:()=>F1,validateToken:()=>F9});var D1="Nostr ";async function U9(t,e,n,i=!1){if(!t||!e)throw new Error("Missing loginUrl or httpMethod");const o=_E(27235);o.tags=[["u",t],["method",e]],o.created_at=Math.round(new Date().getTime()/1e3);const a=await n(o);return(i?D1:"")+_r.encode($n.encode(JSON.stringify(a)))}async function F9(t,e,n){const i=await U1(t).catch(a=>{throw a});return await F1(i,e,n).catch(a=>{throw a})}async function U1(t){if(!t)throw new Error("Missing token");t=t.replace(D1,"");const e=Zn.decode(_r.decode(t));if(!e||e.length===0||!e.startsWith("{"))throw new Error("Invalid token");return JSON.parse(e)}async function F1(t,e,n){if(!t)throw new Error("Invalid nostr event");if(!ho(t))throw new Error("Invalid nostr event, signature invalid");if(t.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!t.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-t.created_at>60)throw new Error("Invalid nostr event, expired");const i=t.tags.find(a=>a[0]==="u");if(i?.length!==1&&i?.[1]!==e)throw new Error("Invalid nostr event, url tag invalid");const o=t.tags.find(a=>a[0]==="method");if(o?.length!==1&&o?.[1].toLowerCase()!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const z9=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),z1=(t={})=>(()=>{const e=z9();return st(e,t,!0,!0),e})(),H9=B('<button class="text-blue-500 underline">'),{noteEncode:W9,neventEncode:q9}=po,Z9=t=>{try{return W9(t)}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},K9=t=>{try{return q9({id:t})}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},Zs=t=>(()=>{const e=H9();return k(e,S(ye,{get when(){return t.kind==null||t.kind===ct.Text},get fallback(){return K9(t.eventId)},get children(){return Z9(t.eventId)}})),e})();var Na={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Na.exports;(function(t,e){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,m=2,_=4,w=1,$=2,x=1,C=2,M=4,E=8,I=16,O=32,A=64,F=128,N=256,K=512,ee=30,ie="...",se=800,ae=16,te=1,j=2,q=3,X=1/0,oe=9007199254740991,J=17976931348623157e292,be=0/0,ge=4294967295,xe=ge-1,Ve=ge>>>1,ue=[["ary",F],["bind",x],["bindKey",C],["curry",E],["curryRight",I],["flip",K],["partial",O],["partialRight",A],["rearg",N]],Se="[object Arguments]",V="[object Array]",U="[object AsyncFunction]",G="[object Boolean]",ne="[object Date]",_e="[object DOMException]",je="[object Error]",le="[object Function]",Z="[object GeneratorFunction]",ve="[object Map]",tt="[object Number]",Jt="[object Null]",Ct="[object Object]",Ht="[object Promise]",Xr="[object Proxy]",En="[object RegExp]",St="[object Set]",Xt="[object String]",Un="[object Symbol]",Er="[object Undefined]",kn="[object WeakMap]",Ae="[object WeakSet]",Wt="[object ArrayBuffer]",qt="[object DataView]",Cn="[object Float32Array]",Sn="[object Float64Array]",un="[object Int8Array]",dn="[object Int16Array]",Tn="[object Int32Array]",nr="[object Uint8Array]",rr="[object Uint8ClampedArray]",ir="[object Uint16Array]",Oi="[object Uint32Array]",wo=/\b__p \+= '';/g,xo=/\b(__p \+=) '' \+/g,$o=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xd=/&(?:amp|lt|gt|quot|#39);/g,ef=/[&<>"']/g,jm=RegExp(Xd.source),Nm=RegExp(ef.source),Dm=/<%-([\s\S]+?)%>/g,Um=/<%([\s\S]+?)%>/g,tf=/<%=([\s\S]+?)%>/g,Fm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zm=/^\w*$/,Hm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bl=/[\\^$.*+?()[\]{}|]/g,Wm=RegExp(Bl.source),jl=/^\s+/,qm=/\s/,Zm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Km=/\{\n\/\* \[wrapped with (.+)\] \*/,Vm=/,? & /,Gm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Qm=/[()=,{}\[\]\/\s]/,Ym=/\\(\\)?/g,Jm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,nf=/\w*$/,Xm=/^[-+]0x[0-9a-f]+$/i,e2=/^0b[01]+$/i,t2=/^\[object .+?Constructor\]$/,n2=/^0o[0-7]+$/i,r2=/^(?:0|[1-9]\d*)$/,i2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Eo=/($^)/,s2=/['\n\r\u2028\u2029\\]/g,ko="\\ud800-\\udfff",o2="\\u0300-\\u036f",a2="\\ufe20-\\ufe2f",l2="\\u20d0-\\u20ff",rf=o2+a2+l2,sf="\\u2700-\\u27bf",of="a-z\\xdf-\\xf6\\xf8-\\xff",c2="\\xac\\xb1\\xd7\\xf7",u2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",d2="\\u2000-\\u206f",f2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",af="A-Z\\xc0-\\xd6\\xd8-\\xde",lf="\\ufe0e\\ufe0f",cf=c2+u2+d2+f2,Nl="['’]",h2="["+ko+"]",uf="["+cf+"]",Co="["+rf+"]",df="\\d+",p2="["+sf+"]",ff="["+of+"]",hf="[^"+ko+cf+df+sf+of+af+"]",Dl="\\ud83c[\\udffb-\\udfff]",g2="(?:"+Co+"|"+Dl+")",pf="[^"+ko+"]",Ul="(?:\\ud83c[\\udde6-\\uddff]){2}",Fl="[\\ud800-\\udbff][\\udc00-\\udfff]",Li="["+af+"]",gf="\\u200d",vf="(?:"+ff+"|"+hf+")",v2="(?:"+Li+"|"+hf+")",mf="(?:"+Nl+"(?:d|ll|m|re|s|t|ve))?",yf="(?:"+Nl+"(?:D|LL|M|RE|S|T|VE))?",bf=g2+"?",_f="["+lf+"]?",m2="(?:"+gf+"(?:"+[pf,Ul,Fl].join("|")+")"+_f+bf+")*",y2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",b2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wf=_f+bf+m2,_2="(?:"+[p2,Ul,Fl].join("|")+")"+wf,w2="(?:"+[pf+Co+"?",Co,Ul,Fl,h2].join("|")+")",x2=RegExp(Nl,"g"),$2=RegExp(Co,"g"),zl=RegExp(Dl+"(?="+Dl+")|"+w2+wf,"g"),E2=RegExp([Li+"?"+ff+"+"+mf+"(?="+[uf,Li,"$"].join("|")+")",v2+"+"+yf+"(?="+[uf,Li+vf,"$"].join("|")+")",Li+"?"+vf+"+"+mf,Li+"+"+yf,b2,y2,df,_2].join("|"),"g"),k2=RegExp("["+gf+ko+rf+lf+"]"),C2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],T2=-1,ot={};ot[Cn]=ot[Sn]=ot[un]=ot[dn]=ot[Tn]=ot[nr]=ot[rr]=ot[ir]=ot[Oi]=!0,ot[Se]=ot[V]=ot[Wt]=ot[G]=ot[qt]=ot[ne]=ot[je]=ot[le]=ot[ve]=ot[tt]=ot[Ct]=ot[En]=ot[St]=ot[Xt]=ot[kn]=!1;var rt={};rt[Se]=rt[V]=rt[Wt]=rt[qt]=rt[G]=rt[ne]=rt[Cn]=rt[Sn]=rt[un]=rt[dn]=rt[Tn]=rt[ve]=rt[tt]=rt[Ct]=rt[En]=rt[St]=rt[Xt]=rt[Un]=rt[nr]=rt[rr]=rt[ir]=rt[Oi]=!0,rt[je]=rt[le]=rt[kn]=!1;var A2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},R2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},O2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},L2=parseFloat,P2=parseInt,xf=typeof xt=="object"&&xt&&xt.Object===Object&&xt,M2=typeof self=="object"&&self&&self.Object===Object&&self,Tt=xf||M2||Function("return this")(),Hl=e&&!e.nodeType&&e,ei=Hl&&!0&&t&&!t.nodeType&&t,$f=ei&&ei.exports===Hl,Wl=$f&&xf.process,fn=function(){try{var L=ei&&ei.require&&ei.require("util").types;return L||Wl&&Wl.binding&&Wl.binding("util")}catch{}}(),Ef=fn&&fn.isArrayBuffer,kf=fn&&fn.isDate,Cf=fn&&fn.isMap,Sf=fn&&fn.isRegExp,Tf=fn&&fn.isSet,Af=fn&&fn.isTypedArray;function en(L,z,D){switch(D.length){case 0:return L.call(z);case 1:return L.call(z,D[0]);case 2:return L.call(z,D[0],D[1]);case 3:return L.call(z,D[0],D[1],D[2])}return L.apply(z,D)}function B2(L,z,D,fe){for(var Ie=-1,Qe=L==null?0:L.length;++Ie<Qe;){var _t=L[Ie];z(fe,_t,D(_t),L)}return fe}function hn(L,z){for(var D=-1,fe=L==null?0:L.length;++D<fe&&z(L[D],D,L)!==!1;);return L}function j2(L,z){for(var D=L==null?0:L.length;D--&&z(L[D],D,L)!==!1;);return L}function Rf(L,z){for(var D=-1,fe=L==null?0:L.length;++D<fe;)if(!z(L[D],D,L))return!1;return!0}function kr(L,z){for(var D=-1,fe=L==null?0:L.length,Ie=0,Qe=[];++D<fe;){var _t=L[D];z(_t,D,L)&&(Qe[Ie++]=_t)}return Qe}function So(L,z){var D=L==null?0:L.length;return!!D&&Pi(L,z,0)>-1}function ql(L,z,D){for(var fe=-1,Ie=L==null?0:L.length;++fe<Ie;)if(D(z,L[fe]))return!0;return!1}function lt(L,z){for(var D=-1,fe=L==null?0:L.length,Ie=Array(fe);++D<fe;)Ie[D]=z(L[D],D,L);return Ie}function Cr(L,z){for(var D=-1,fe=z.length,Ie=L.length;++D<fe;)L[Ie+D]=z[D];return L}function Zl(L,z,D,fe){var Ie=-1,Qe=L==null?0:L.length;for(fe&&Qe&&(D=L[++Ie]);++Ie<Qe;)D=z(D,L[Ie],Ie,L);return D}function N2(L,z,D,fe){var Ie=L==null?0:L.length;for(fe&&Ie&&(D=L[--Ie]);Ie--;)D=z(D,L[Ie],Ie,L);return D}function Kl(L,z){for(var D=-1,fe=L==null?0:L.length;++D<fe;)if(z(L[D],D,L))return!0;return!1}var D2=Vl("length");function U2(L){return L.split("")}function F2(L){return L.match(Gm)||[]}function If(L,z,D){var fe;return D(L,function(Ie,Qe,_t){if(z(Ie,Qe,_t))return fe=Qe,!1}),fe}function To(L,z,D,fe){for(var Ie=L.length,Qe=D+(fe?1:-1);fe?Qe--:++Qe<Ie;)if(z(L[Qe],Qe,L))return Qe;return-1}function Pi(L,z,D){return z===z?X2(L,z,D):To(L,Of,D)}function z2(L,z,D,fe){for(var Ie=D-1,Qe=L.length;++Ie<Qe;)if(fe(L[Ie],z))return Ie;return-1}function Of(L){return L!==L}function Lf(L,z){var D=L==null?0:L.length;return D?Ql(L,z)/D:be}function Vl(L){return function(z){return z==null?n:z[L]}}function Gl(L){return function(z){return L==null?n:L[z]}}function Pf(L,z,D,fe,Ie){return Ie(L,function(Qe,_t,nt){D=fe?(fe=!1,Qe):z(D,Qe,_t,nt)}),D}function H2(L,z){var D=L.length;for(L.sort(z);D--;)L[D]=L[D].value;return L}function Ql(L,z){for(var D,fe=-1,Ie=L.length;++fe<Ie;){var Qe=z(L[fe]);Qe!==n&&(D=D===n?Qe:D+Qe)}return D}function Yl(L,z){for(var D=-1,fe=Array(L);++D<L;)fe[D]=z(D);return fe}function W2(L,z){return lt(z,function(D){return[D,L[D]]})}function Mf(L){return L&&L.slice(0,Df(L)+1).replace(jl,"")}function tn(L){return function(z){return L(z)}}function Jl(L,z){return lt(z,function(D){return L[D]})}function Es(L,z){return L.has(z)}function Bf(L,z){for(var D=-1,fe=L.length;++D<fe&&Pi(z,L[D],0)>-1;);return D}function jf(L,z){for(var D=L.length;D--&&Pi(z,L[D],0)>-1;);return D}function q2(L,z){for(var D=L.length,fe=0;D--;)L[D]===z&&++fe;return fe}var Z2=Gl(A2),K2=Gl(R2);function V2(L){return"\\"+O2[L]}function G2(L,z){return L==null?n:L[z]}function Mi(L){return k2.test(L)}function Q2(L){return C2.test(L)}function Y2(L){for(var z,D=[];!(z=L.next()).done;)D.push(z.value);return D}function Xl(L){var z=-1,D=Array(L.size);return L.forEach(function(fe,Ie){D[++z]=[Ie,fe]}),D}function Nf(L,z){return function(D){return L(z(D))}}function Sr(L,z){for(var D=-1,fe=L.length,Ie=0,Qe=[];++D<fe;){var _t=L[D];(_t===z||_t===p)&&(L[D]=p,Qe[Ie++]=D)}return Qe}function Ao(L){var z=-1,D=Array(L.size);return L.forEach(function(fe){D[++z]=fe}),D}function J2(L){var z=-1,D=Array(L.size);return L.forEach(function(fe){D[++z]=[fe,fe]}),D}function X2(L,z,D){for(var fe=D-1,Ie=L.length;++fe<Ie;)if(L[fe]===z)return fe;return-1}function ey(L,z,D){for(var fe=D+1;fe--;)if(L[fe]===z)return fe;return fe}function Bi(L){return Mi(L)?ny(L):D2(L)}function An(L){return Mi(L)?ry(L):U2(L)}function Df(L){for(var z=L.length;z--&&qm.test(L.charAt(z)););return z}var ty=Gl(I2);function ny(L){for(var z=zl.lastIndex=0;zl.test(L);)++z;return z}function ry(L){return L.match(zl)||[]}function iy(L){return L.match(E2)||[]}var sy=function L(z){z=z==null?Tt:ji.defaults(Tt.Object(),z,ji.pick(Tt,S2));var D=z.Array,fe=z.Date,Ie=z.Error,Qe=z.Function,_t=z.Math,nt=z.Object,ec=z.RegExp,oy=z.String,pn=z.TypeError,Ro=D.prototype,ay=Qe.prototype,Ni=nt.prototype,Io=z["__core-js_shared__"],Oo=ay.toString,Xe=Ni.hasOwnProperty,ly=0,Uf=function(){var r=/[^.]+$/.exec(Io&&Io.keys&&Io.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Lo=Ni.toString,cy=Oo.call(nt),uy=Tt._,dy=ec("^"+Oo.call(Xe).replace(Bl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=$f?z.Buffer:n,Tr=z.Symbol,Mo=z.Uint8Array,Ff=Po?Po.allocUnsafe:n,Bo=Nf(nt.getPrototypeOf,nt),zf=nt.create,Hf=Ni.propertyIsEnumerable,jo=Ro.splice,Wf=Tr?Tr.isConcatSpreadable:n,ks=Tr?Tr.iterator:n,ti=Tr?Tr.toStringTag:n,No=function(){try{var r=oi(nt,"defineProperty");return r({},"",{}),r}catch{}}(),fy=z.clearTimeout!==Tt.clearTimeout&&z.clearTimeout,hy=fe&&fe.now!==Tt.Date.now&&fe.now,py=z.setTimeout!==Tt.setTimeout&&z.setTimeout,Do=_t.ceil,Uo=_t.floor,tc=nt.getOwnPropertySymbols,gy=Po?Po.isBuffer:n,qf=z.isFinite,vy=Ro.join,my=Nf(nt.keys,nt),wt=_t.max,Lt=_t.min,yy=fe.now,by=z.parseInt,Zf=_t.random,_y=Ro.reverse,nc=oi(z,"DataView"),Cs=oi(z,"Map"),rc=oi(z,"Promise"),Di=oi(z,"Set"),Ss=oi(z,"WeakMap"),Ts=oi(nt,"create"),Fo=Ss&&new Ss,Ui={},wy=ai(nc),xy=ai(Cs),$y=ai(rc),Ey=ai(Di),ky=ai(Ss),zo=Tr?Tr.prototype:n,As=zo?zo.valueOf:n,Kf=zo?zo.toString:n;function y(r){if(ft(r)&&!Le(r)&&!(r instanceof Ze)){if(r instanceof gn)return r;if(Xe.call(r,"__wrapped__"))return Vh(r)}return new gn(r)}var Fi=function(){function r(){}return function(s){if(!ut(s))return{};if(zf)return zf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Ho(){}function gn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Dm,evaluate:Um,interpolate:tf,variable:"",imports:{_:y}},y.prototype=Ho.prototype,y.prototype.constructor=y,gn.prototype=Fi(Ho.prototype),gn.prototype.constructor=gn;function Ze(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function Cy(){var r=new Ze(this.__wrapped__);return r.__actions__=Zt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Zt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Zt(this.__views__),r}function Sy(){if(this.__filtered__){var r=new Ze(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Ty(){var r=this.__wrapped__.value(),s=this.__dir__,c=Le(r),h=s<0,v=c?r.length:0,b=Ub(0,v,this.__views__),T=b.start,R=b.end,P=R-T,H=h?R:T-1,W=this.__iteratees__,Y=W.length,ce=0,me=Lt(P,this.__takeCount__);if(!c||!h&&v==P&&me==P)return mh(r,this.__actions__);var ke=[];e:for(;P--&&ce<me;){H+=s;for(var Ne=-1,Ce=r[H];++Ne<Y;){var We=W[Ne],Ke=We.iteratee,sn=We.type,Dt=Ke(Ce);if(sn==j)Ce=Dt;else if(!Dt){if(sn==te)continue e;break e}}ke[ce++]=Ce}return ke}Ze.prototype=Fi(Ho.prototype),Ze.prototype.constructor=Ze;function ni(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Ay(){this.__data__=Ts?Ts(null):{},this.size=0}function Ry(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Iy(r){var s=this.__data__;if(Ts){var c=s[r];return c===d?n:c}return Xe.call(s,r)?s[r]:n}function Oy(r){var s=this.__data__;return Ts?s[r]!==n:Xe.call(s,r)}function Ly(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Ts&&s===n?d:s,this}ni.prototype.clear=Ay,ni.prototype.delete=Ry,ni.prototype.get=Iy,ni.prototype.has=Oy,ni.prototype.set=Ly;function sr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Py(){this.__data__=[],this.size=0}function My(r){var s=this.__data__,c=Wo(s,r);if(c<0)return!1;var h=s.length-1;return c==h?s.pop():jo.call(s,c,1),--this.size,!0}function By(r){var s=this.__data__,c=Wo(s,r);return c<0?n:s[c][1]}function jy(r){return Wo(this.__data__,r)>-1}function Ny(r,s){var c=this.__data__,h=Wo(c,r);return h<0?(++this.size,c.push([r,s])):c[h][1]=s,this}sr.prototype.clear=Py,sr.prototype.delete=My,sr.prototype.get=By,sr.prototype.has=jy,sr.prototype.set=Ny;function or(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Dy(){this.size=0,this.__data__={hash:new ni,map:new(Cs||sr),string:new ni}}function Uy(r){var s=na(this,r).delete(r);return this.size-=s?1:0,s}function Fy(r){return na(this,r).get(r)}function zy(r){return na(this,r).has(r)}function Hy(r,s){var c=na(this,r),h=c.size;return c.set(r,s),this.size+=c.size==h?0:1,this}or.prototype.clear=Dy,or.prototype.delete=Uy,or.prototype.get=Fy,or.prototype.has=zy,or.prototype.set=Hy;function ri(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new or;++s<c;)this.add(r[s])}function Wy(r){return this.__data__.set(r,d),this}function qy(r){return this.__data__.has(r)}ri.prototype.add=ri.prototype.push=Wy,ri.prototype.has=qy;function Rn(r){var s=this.__data__=new sr(r);this.size=s.size}function Zy(){this.__data__=new sr,this.size=0}function Ky(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function Vy(r){return this.__data__.get(r)}function Gy(r){return this.__data__.has(r)}function Qy(r,s){var c=this.__data__;if(c instanceof sr){var h=c.__data__;if(!Cs||h.length<o-1)return h.push([r,s]),this.size=++c.size,this;c=this.__data__=new or(h)}return c.set(r,s),this.size=c.size,this}Rn.prototype.clear=Zy,Rn.prototype.delete=Ky,Rn.prototype.get=Vy,Rn.prototype.has=Gy,Rn.prototype.set=Qy;function Vf(r,s){var c=Le(r),h=!c&&li(r),v=!c&&!h&&Lr(r),b=!c&&!h&&!v&&qi(r),T=c||h||v||b,R=T?Yl(r.length,oy):[],P=R.length;for(var H in r)(s||Xe.call(r,H))&&!(T&&(H=="length"||v&&(H=="offset"||H=="parent")||b&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||ur(H,P)))&&R.push(H);return R}function Gf(r){var s=r.length;return s?r[pc(0,s-1)]:n}function Yy(r,s){return ra(Zt(r),ii(s,0,r.length))}function Jy(r){return ra(Zt(r))}function ic(r,s,c){(c!==n&&!In(r[s],c)||c===n&&!(s in r))&&ar(r,s,c)}function Rs(r,s,c){var h=r[s];(!(Xe.call(r,s)&&In(h,c))||c===n&&!(s in r))&&ar(r,s,c)}function Wo(r,s){for(var c=r.length;c--;)if(In(r[c][0],s))return c;return-1}function Xy(r,s,c,h){return Ar(r,function(v,b,T){s(h,v,c(v),T)}),h}function Qf(r,s){return r&&zn(s,$t(s),r)}function eb(r,s){return r&&zn(s,Vt(s),r)}function ar(r,s,c){s=="__proto__"&&No?No(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function sc(r,s){for(var c=-1,h=s.length,v=D(h),b=r==null;++c<h;)v[c]=b?n:Dc(r,s[c]);return v}function ii(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function vn(r,s,c,h,v,b){var T,R=s&g,P=s&m,H=s&_;if(c&&(T=v?c(r,h,v,b):c(r)),T!==n)return T;if(!ut(r))return r;var W=Le(r);if(W){if(T=zb(r),!R)return Zt(r,T)}else{var Y=Pt(r),ce=Y==le||Y==Z;if(Lr(r))return _h(r,R);if(Y==Ct||Y==Se||ce&&!v){if(T=P||ce?{}:Dh(r),!R)return P?Ib(r,eb(T,r)):Rb(r,Qf(T,r))}else{if(!rt[Y])return v?r:{};T=Hb(r,Y,R)}}b||(b=new Rn);var me=b.get(r);if(me)return me;b.set(r,T),pp(r)?r.forEach(function(Ce){T.add(vn(Ce,s,c,Ce,r,b))}):fp(r)&&r.forEach(function(Ce,We){T.set(We,vn(Ce,s,c,We,r,b))});var ke=H?P?kc:Ec:P?Vt:$t,Ne=W?n:ke(r);return hn(Ne||r,function(Ce,We){Ne&&(We=Ce,Ce=r[We]),Rs(T,We,vn(Ce,s,c,We,r,b))}),T}function tb(r){var s=$t(r);return function(c){return Yf(c,r,s)}}function Yf(r,s,c){var h=c.length;if(r==null)return!h;for(r=nt(r);h--;){var v=c[h],b=s[v],T=r[v];if(T===n&&!(v in r)||!b(T))return!1}return!0}function Jf(r,s,c){if(typeof r!="function")throw new pn(l);return js(function(){r.apply(n,c)},s)}function Is(r,s,c,h){var v=-1,b=So,T=!0,R=r.length,P=[],H=s.length;if(!R)return P;c&&(s=lt(s,tn(c))),h?(b=ql,T=!1):s.length>=o&&(b=Es,T=!1,s=new ri(s));e:for(;++v<R;){var W=r[v],Y=c==null?W:c(W);if(W=h||W!==0?W:0,T&&Y===Y){for(var ce=H;ce--;)if(s[ce]===Y)continue e;P.push(W)}else b(s,Y,h)||P.push(W)}return P}var Ar=kh(Fn),Xf=kh(ac,!0);function nb(r,s){var c=!0;return Ar(r,function(h,v,b){return c=!!s(h,v,b),c}),c}function qo(r,s,c){for(var h=-1,v=r.length;++h<v;){var b=r[h],T=s(b);if(T!=null&&(R===n?T===T&&!rn(T):c(T,R)))var R=T,P=b}return P}function rb(r,s,c,h){var v=r.length;for(c=Me(c),c<0&&(c=-c>v?0:v+c),h=h===n||h>v?v:Me(h),h<0&&(h+=v),h=c>h?0:vp(h);c<h;)r[c++]=s;return r}function eh(r,s){var c=[];return Ar(r,function(h,v,b){s(h,v,b)&&c.push(h)}),c}function At(r,s,c,h,v){var b=-1,T=r.length;for(c||(c=qb),v||(v=[]);++b<T;){var R=r[b];s>0&&c(R)?s>1?At(R,s-1,c,h,v):Cr(v,R):h||(v[v.length]=R)}return v}var oc=Ch(),th=Ch(!0);function Fn(r,s){return r&&oc(r,s,$t)}function ac(r,s){return r&&th(r,s,$t)}function Zo(r,s){return kr(s,function(c){return dr(r[c])})}function si(r,s){s=Ir(s,r);for(var c=0,h=s.length;r!=null&&c<h;)r=r[Hn(s[c++])];return c&&c==h?r:n}function nh(r,s,c){var h=s(r);return Le(r)?h:Cr(h,c(r))}function jt(r){return r==null?r===n?Er:Jt:ti&&ti in nt(r)?Db(r):Jb(r)}function lc(r,s){return r>s}function ib(r,s){return r!=null&&Xe.call(r,s)}function sb(r,s){return r!=null&&s in nt(r)}function ob(r,s,c){return r>=Lt(s,c)&&r<wt(s,c)}function cc(r,s,c){for(var h=c?ql:So,v=r[0].length,b=r.length,T=b,R=D(b),P=1/0,H=[];T--;){var W=r[T];T&&s&&(W=lt(W,tn(s))),P=Lt(W.length,P),R[T]=!c&&(s||v>=120&&W.length>=120)?new ri(T&&W):n}W=r[0];var Y=-1,ce=R[0];e:for(;++Y<v&&H.length<P;){var me=W[Y],ke=s?s(me):me;if(me=c||me!==0?me:0,!(ce?Es(ce,ke):h(H,ke,c))){for(T=b;--T;){var Ne=R[T];if(!(Ne?Es(Ne,ke):h(r[T],ke,c)))continue e}ce&&ce.push(ke),H.push(me)}}return H}function ab(r,s,c,h){return Fn(r,function(v,b,T){s(h,c(v),b,T)}),h}function Os(r,s,c){s=Ir(s,r),r=Hh(r,s);var h=r==null?r:r[Hn(yn(s))];return h==null?n:en(h,r,c)}function rh(r){return ft(r)&&jt(r)==Se}function lb(r){return ft(r)&&jt(r)==Wt}function cb(r){return ft(r)&&jt(r)==ne}function Ls(r,s,c,h,v){return r===s?!0:r==null||s==null||!ft(r)&&!ft(s)?r!==r&&s!==s:ub(r,s,c,h,Ls,v)}function ub(r,s,c,h,v,b){var T=Le(r),R=Le(s),P=T?V:Pt(r),H=R?V:Pt(s);P=P==Se?Ct:P,H=H==Se?Ct:H;var W=P==Ct,Y=H==Ct,ce=P==H;if(ce&&Lr(r)){if(!Lr(s))return!1;T=!0,W=!1}if(ce&&!W)return b||(b=new Rn),T||qi(r)?Bh(r,s,c,h,v,b):jb(r,s,P,c,h,v,b);if(!(c&w)){var me=W&&Xe.call(r,"__wrapped__"),ke=Y&&Xe.call(s,"__wrapped__");if(me||ke){var Ne=me?r.value():r,Ce=ke?s.value():s;return b||(b=new Rn),v(Ne,Ce,c,h,b)}}return ce?(b||(b=new Rn),Nb(r,s,c,h,v,b)):!1}function db(r){return ft(r)&&Pt(r)==ve}function uc(r,s,c,h){var v=c.length,b=v,T=!h;if(r==null)return!b;for(r=nt(r);v--;){var R=c[v];if(T&&R[2]?R[1]!==r[R[0]]:!(R[0]in r))return!1}for(;++v<b;){R=c[v];var P=R[0],H=r[P],W=R[1];if(T&&R[2]){if(H===n&&!(P in r))return!1}else{var Y=new Rn;if(h)var ce=h(H,W,P,r,s,Y);if(!(ce===n?Ls(W,H,w|$,h,Y):ce))return!1}}return!0}function ih(r){if(!ut(r)||Kb(r))return!1;var s=dr(r)?dy:t2;return s.test(ai(r))}function fb(r){return ft(r)&&jt(r)==En}function hb(r){return ft(r)&&Pt(r)==St}function pb(r){return ft(r)&&ca(r.length)&&!!ot[jt(r)]}function sh(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?Le(r)?lh(r[0],r[1]):ah(r):Sp(r)}function dc(r){if(!Bs(r))return my(r);var s=[];for(var c in nt(r))Xe.call(r,c)&&c!="constructor"&&s.push(c);return s}function gb(r){if(!ut(r))return Yb(r);var s=Bs(r),c=[];for(var h in r)h=="constructor"&&(s||!Xe.call(r,h))||c.push(h);return c}function fc(r,s){return r<s}function oh(r,s){var c=-1,h=Kt(r)?D(r.length):[];return Ar(r,function(v,b,T){h[++c]=s(v,b,T)}),h}function ah(r){var s=Sc(r);return s.length==1&&s[0][2]?Fh(s[0][0],s[0][1]):function(c){return c===r||uc(c,r,s)}}function lh(r,s){return Ac(r)&&Uh(s)?Fh(Hn(r),s):function(c){var h=Dc(c,r);return h===n&&h===s?Uc(c,r):Ls(s,h,w|$)}}function Ko(r,s,c,h,v){r!==s&&oc(s,function(b,T){if(v||(v=new Rn),ut(b))vb(r,s,T,c,Ko,h,v);else{var R=h?h(Ic(r,T),b,T+"",r,s,v):n;R===n&&(R=b),ic(r,T,R)}},Vt)}function vb(r,s,c,h,v,b,T){var R=Ic(r,c),P=Ic(s,c),H=T.get(P);if(H){ic(r,c,H);return}var W=b?b(R,P,c+"",r,s,T):n,Y=W===n;if(Y){var ce=Le(P),me=!ce&&Lr(P),ke=!ce&&!me&&qi(P);W=P,ce||me||ke?Le(R)?W=R:pt(R)?W=Zt(R):me?(Y=!1,W=_h(P,!0)):ke?(Y=!1,W=wh(P,!0)):W=[]:Ns(P)||li(P)?(W=R,li(R)?W=mp(R):(!ut(R)||dr(R))&&(W=Dh(P))):Y=!1}Y&&(T.set(P,W),v(W,P,h,b,T),T.delete(P)),ic(r,c,W)}function ch(r,s){var c=r.length;if(c)return s+=s<0?c:0,ur(s,c)?r[s]:n}function uh(r,s,c){s.length?s=lt(s,function(b){return Le(b)?function(T){return si(T,b.length===1?b[0]:b)}:b}):s=[Gt];var h=-1;s=lt(s,tn($e()));var v=oh(r,function(b,T,R){var P=lt(s,function(H){return H(b)});return{criteria:P,index:++h,value:b}});return H2(v,function(b,T){return Ab(b,T,c)})}function mb(r,s){return dh(r,s,function(c,h){return Uc(r,h)})}function dh(r,s,c){for(var h=-1,v=s.length,b={};++h<v;){var T=s[h],R=si(r,T);c(R,T)&&Ps(b,Ir(T,r),R)}return b}function yb(r){return function(s){return si(s,r)}}function hc(r,s,c,h){var v=h?z2:Pi,b=-1,T=s.length,R=r;for(r===s&&(s=Zt(s)),c&&(R=lt(r,tn(c)));++b<T;)for(var P=0,H=s[b],W=c?c(H):H;(P=v(R,W,P,h))>-1;)R!==r&&jo.call(R,P,1),jo.call(r,P,1);return r}function fh(r,s){for(var c=r?s.length:0,h=c-1;c--;){var v=s[c];if(c==h||v!==b){var b=v;ur(v)?jo.call(r,v,1):mc(r,v)}}return r}function pc(r,s){return r+Uo(Zf()*(s-r+1))}function bb(r,s,c,h){for(var v=-1,b=wt(Do((s-r)/(c||1)),0),T=D(b);b--;)T[h?b:++v]=r,r+=c;return T}function gc(r,s){var c="";if(!r||s<1||s>oe)return c;do s%2&&(c+=r),s=Uo(s/2),s&&(r+=r);while(s);return c}function Fe(r,s){return Oc(zh(r,s,Gt),r+"")}function _b(r){return Gf(Zi(r))}function wb(r,s){var c=Zi(r);return ra(c,ii(s,0,c.length))}function Ps(r,s,c,h){if(!ut(r))return r;s=Ir(s,r);for(var v=-1,b=s.length,T=b-1,R=r;R!=null&&++v<b;){var P=Hn(s[v]),H=c;if(P==="__proto__"||P==="constructor"||P==="prototype")return r;if(v!=T){var W=R[P];H=h?h(W,P,R):n,H===n&&(H=ut(W)?W:ur(s[v+1])?[]:{})}Rs(R,P,H),R=R[P]}return r}var hh=Fo?function(r,s){return Fo.set(r,s),r}:Gt,xb=No?function(r,s){return No(r,"toString",{configurable:!0,enumerable:!1,value:zc(s),writable:!0})}:Gt;function $b(r){return ra(Zi(r))}function mn(r,s,c){var h=-1,v=r.length;s<0&&(s=-s>v?0:v+s),c=c>v?v:c,c<0&&(c+=v),v=s>c?0:c-s>>>0,s>>>=0;for(var b=D(v);++h<v;)b[h]=r[h+s];return b}function Eb(r,s){var c;return Ar(r,function(h,v,b){return c=s(h,v,b),!c}),!!c}function Vo(r,s,c){var h=0,v=r==null?h:r.length;if(typeof s=="number"&&s===s&&v<=Ve){for(;h<v;){var b=h+v>>>1,T=r[b];T!==null&&!rn(T)&&(c?T<=s:T<s)?h=b+1:v=b}return v}return vc(r,s,Gt,c)}function vc(r,s,c,h){var v=0,b=r==null?0:r.length;if(b===0)return 0;s=c(s);for(var T=s!==s,R=s===null,P=rn(s),H=s===n;v<b;){var W=Uo((v+b)/2),Y=c(r[W]),ce=Y!==n,me=Y===null,ke=Y===Y,Ne=rn(Y);if(T)var Ce=h||ke;else H?Ce=ke&&(h||ce):R?Ce=ke&&ce&&(h||!me):P?Ce=ke&&ce&&!me&&(h||!Ne):me||Ne?Ce=!1:Ce=h?Y<=s:Y<s;Ce?v=W+1:b=W}return Lt(b,xe)}function ph(r,s){for(var c=-1,h=r.length,v=0,b=[];++c<h;){var T=r[c],R=s?s(T):T;if(!c||!In(R,P)){var P=R;b[v++]=T===0?0:T}}return b}function gh(r){return typeof r=="number"?r:rn(r)?be:+r}function nn(r){if(typeof r=="string")return r;if(Le(r))return lt(r,nn)+"";if(rn(r))return Kf?Kf.call(r):"";var s=r+"";return s=="0"&&1/r==-X?"-0":s}function Rr(r,s,c){var h=-1,v=So,b=r.length,T=!0,R=[],P=R;if(c)T=!1,v=ql;else if(b>=o){var H=s?null:Mb(r);if(H)return Ao(H);T=!1,v=Es,P=new ri}else P=s?[]:R;e:for(;++h<b;){var W=r[h],Y=s?s(W):W;if(W=c||W!==0?W:0,T&&Y===Y){for(var ce=P.length;ce--;)if(P[ce]===Y)continue e;s&&P.push(Y),R.push(W)}else v(P,Y,c)||(P!==R&&P.push(Y),R.push(W))}return R}function mc(r,s){return s=Ir(s,r),r=Hh(r,s),r==null||delete r[Hn(yn(s))]}function vh(r,s,c,h){return Ps(r,s,c(si(r,s)),h)}function Go(r,s,c,h){for(var v=r.length,b=h?v:-1;(h?b--:++b<v)&&s(r[b],b,r););return c?mn(r,h?0:b,h?b+1:v):mn(r,h?b+1:0,h?v:b)}function mh(r,s){var c=r;return c instanceof Ze&&(c=c.value()),Zl(s,function(h,v){return v.func.apply(v.thisArg,Cr([h],v.args))},c)}function yc(r,s,c){var h=r.length;if(h<2)return h?Rr(r[0]):[];for(var v=-1,b=D(h);++v<h;)for(var T=r[v],R=-1;++R<h;)R!=v&&(b[v]=Is(b[v]||T,r[R],s,c));return Rr(At(b,1),s,c)}function yh(r,s,c){for(var h=-1,v=r.length,b=s.length,T={};++h<v;){var R=h<b?s[h]:n;c(T,r[h],R)}return T}function bc(r){return pt(r)?r:[]}function _c(r){return typeof r=="function"?r:Gt}function Ir(r,s){return Le(r)?r:Ac(r,s)?[r]:Kh(Je(r))}var kb=Fe;function Or(r,s,c){var h=r.length;return c=c===n?h:c,!s&&c>=h?r:mn(r,s,c)}var bh=fy||function(r){return Tt.clearTimeout(r)};function _h(r,s){if(s)return r.slice();var c=r.length,h=Ff?Ff(c):new r.constructor(c);return r.copy(h),h}function wc(r){var s=new r.constructor(r.byteLength);return new Mo(s).set(new Mo(r)),s}function Cb(r,s){var c=s?wc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function Sb(r){var s=new r.constructor(r.source,nf.exec(r));return s.lastIndex=r.lastIndex,s}function Tb(r){return As?nt(As.call(r)):{}}function wh(r,s){var c=s?wc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function xh(r,s){if(r!==s){var c=r!==n,h=r===null,v=r===r,b=rn(r),T=s!==n,R=s===null,P=s===s,H=rn(s);if(!R&&!H&&!b&&r>s||b&&T&&P&&!R&&!H||h&&T&&P||!c&&P||!v)return 1;if(!h&&!b&&!H&&r<s||H&&c&&v&&!h&&!b||R&&c&&v||!T&&v||!P)return-1}return 0}function Ab(r,s,c){for(var h=-1,v=r.criteria,b=s.criteria,T=v.length,R=c.length;++h<T;){var P=xh(v[h],b[h]);if(P){if(h>=R)return P;var H=c[h];return P*(H=="desc"?-1:1)}}return r.index-s.index}function $h(r,s,c,h){for(var v=-1,b=r.length,T=c.length,R=-1,P=s.length,H=wt(b-T,0),W=D(P+H),Y=!h;++R<P;)W[R]=s[R];for(;++v<T;)(Y||v<b)&&(W[c[v]]=r[v]);for(;H--;)W[R++]=r[v++];return W}function Eh(r,s,c,h){for(var v=-1,b=r.length,T=-1,R=c.length,P=-1,H=s.length,W=wt(b-R,0),Y=D(W+H),ce=!h;++v<W;)Y[v]=r[v];for(var me=v;++P<H;)Y[me+P]=s[P];for(;++T<R;)(ce||v<b)&&(Y[me+c[T]]=r[v++]);return Y}function Zt(r,s){var c=-1,h=r.length;for(s||(s=D(h));++c<h;)s[c]=r[c];return s}function zn(r,s,c,h){var v=!c;c||(c={});for(var b=-1,T=s.length;++b<T;){var R=s[b],P=h?h(c[R],r[R],R,c,r):n;P===n&&(P=r[R]),v?ar(c,R,P):Rs(c,R,P)}return c}function Rb(r,s){return zn(r,Tc(r),s)}function Ib(r,s){return zn(r,jh(r),s)}function Qo(r,s){return function(c,h){var v=Le(c)?B2:Xy,b=s?s():{};return v(c,r,$e(h,2),b)}}function zi(r){return Fe(function(s,c){var h=-1,v=c.length,b=v>1?c[v-1]:n,T=v>2?c[2]:n;for(b=r.length>3&&typeof b=="function"?(v--,b):n,T&&Nt(c[0],c[1],T)&&(b=v<3?n:b,v=1),s=nt(s);++h<v;){var R=c[h];R&&r(s,R,h,b)}return s})}function kh(r,s){return function(c,h){if(c==null)return c;if(!Kt(c))return r(c,h);for(var v=c.length,b=s?v:-1,T=nt(c);(s?b--:++b<v)&&h(T[b],b,T)!==!1;);return c}}function Ch(r){return function(s,c,h){for(var v=-1,b=nt(s),T=h(s),R=T.length;R--;){var P=T[r?R:++v];if(c(b[P],P,b)===!1)break}return s}}function Ob(r,s,c){var h=s&x,v=Ms(r);function b(){var T=this&&this!==Tt&&this instanceof b?v:r;return T.apply(h?c:this,arguments)}return b}function Sh(r){return function(s){s=Je(s);var c=Mi(s)?An(s):n,h=c?c[0]:s.charAt(0),v=c?Or(c,1).join(""):s.slice(1);return h[r]()+v}}function Hi(r){return function(s){return Zl(kp(Ep(s).replace(x2,"")),r,"")}}function Ms(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Fi(r.prototype),h=r.apply(c,s);return ut(h)?h:c}}function Lb(r,s,c){var h=Ms(r);function v(){for(var b=arguments.length,T=D(b),R=b,P=Wi(v);R--;)T[R]=arguments[R];var H=b<3&&T[0]!==P&&T[b-1]!==P?[]:Sr(T,P);if(b-=H.length,b<c)return Oh(r,s,Yo,v.placeholder,n,T,H,n,n,c-b);var W=this&&this!==Tt&&this instanceof v?h:r;return en(W,this,T)}return v}function Th(r){return function(s,c,h){var v=nt(s);if(!Kt(s)){var b=$e(c,3);s=$t(s),c=function(R){return b(v[R],R,v)}}var T=r(s,c,h);return T>-1?v[b?s[T]:T]:n}}function Ah(r){return cr(function(s){var c=s.length,h=c,v=gn.prototype.thru;for(r&&s.reverse();h--;){var b=s[h];if(typeof b!="function")throw new pn(l);if(v&&!T&&ta(b)=="wrapper")var T=new gn([],!0)}for(h=T?h:c;++h<c;){b=s[h];var R=ta(b),P=R=="wrapper"?Cc(b):n;P&&Rc(P[0])&&P[1]==(F|E|O|N)&&!P[4].length&&P[9]==1?T=T[ta(P[0])].apply(T,P[3]):T=b.length==1&&Rc(b)?T[R]():T.thru(b)}return function(){var H=arguments,W=H[0];if(T&&H.length==1&&Le(W))return T.plant(W).value();for(var Y=0,ce=c?s[Y].apply(this,H):W;++Y<c;)ce=s[Y].call(this,ce);return ce}})}function Yo(r,s,c,h,v,b,T,R,P,H){var W=s&F,Y=s&x,ce=s&C,me=s&(E|I),ke=s&K,Ne=ce?n:Ms(r);function Ce(){for(var We=arguments.length,Ke=D(We),sn=We;sn--;)Ke[sn]=arguments[sn];if(me)var Dt=Wi(Ce),on=q2(Ke,Dt);if(h&&(Ke=$h(Ke,h,v,me)),b&&(Ke=Eh(Ke,b,T,me)),We-=on,me&&We<H){var gt=Sr(Ke,Dt);return Oh(r,s,Yo,Ce.placeholder,c,Ke,gt,R,P,H-We)}var On=Y?c:this,hr=ce?On[r]:r;return We=Ke.length,R?Ke=Xb(Ke,R):ke&&We>1&&Ke.reverse(),W&&P<We&&(Ke.length=P),this&&this!==Tt&&this instanceof Ce&&(hr=Ne||Ms(hr)),hr.apply(On,Ke)}return Ce}function Rh(r,s){return function(c,h){return ab(c,r,s(h),{})}}function Jo(r,s){return function(c,h){var v;if(c===n&&h===n)return s;if(c!==n&&(v=c),h!==n){if(v===n)return h;typeof c=="string"||typeof h=="string"?(c=nn(c),h=nn(h)):(c=gh(c),h=gh(h)),v=r(c,h)}return v}}function xc(r){return cr(function(s){return s=lt(s,tn($e())),Fe(function(c){var h=this;return r(s,function(v){return en(v,h,c)})})})}function Xo(r,s){s=s===n?" ":nn(s);var c=s.length;if(c<2)return c?gc(s,r):s;var h=gc(s,Do(r/Bi(s)));return Mi(s)?Or(An(h),0,r).join(""):h.slice(0,r)}function Pb(r,s,c,h){var v=s&x,b=Ms(r);function T(){for(var R=-1,P=arguments.length,H=-1,W=h.length,Y=D(W+P),ce=this&&this!==Tt&&this instanceof T?b:r;++H<W;)Y[H]=h[H];for(;P--;)Y[H++]=arguments[++R];return en(ce,v?c:this,Y)}return T}function Ih(r){return function(s,c,h){return h&&typeof h!="number"&&Nt(s,c,h)&&(c=h=n),s=fr(s),c===n?(c=s,s=0):c=fr(c),h=h===n?s<c?1:-1:fr(h),bb(s,c,h,r)}}function ea(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=bn(s),c=bn(c)),r(s,c)}}function Oh(r,s,c,h,v,b,T,R,P,H){var W=s&E,Y=W?T:n,ce=W?n:T,me=W?b:n,ke=W?n:b;s|=W?O:A,s&=~(W?A:O),s&M||(s&=~(x|C));var Ne=[r,s,v,me,Y,ke,ce,R,P,H],Ce=c.apply(n,Ne);return Rc(r)&&Wh(Ce,Ne),Ce.placeholder=h,qh(Ce,r,s)}function $c(r){var s=_t[r];return function(c,h){if(c=bn(c),h=h==null?0:Lt(Me(h),292),h&&qf(c)){var v=(Je(c)+"e").split("e"),b=s(v[0]+"e"+(+v[1]+h));return v=(Je(b)+"e").split("e"),+(v[0]+"e"+(+v[1]-h))}return s(c)}}var Mb=Di&&1/Ao(new Di([,-0]))[1]==X?function(r){return new Di(r)}:qc;function Lh(r){return function(s){var c=Pt(s);return c==ve?Xl(s):c==St?J2(s):W2(s,r(s))}}function lr(r,s,c,h,v,b,T,R){var P=s&C;if(!P&&typeof r!="function")throw new pn(l);var H=h?h.length:0;if(H||(s&=~(O|A),h=v=n),T=T===n?T:wt(Me(T),0),R=R===n?R:Me(R),H-=v?v.length:0,s&A){var W=h,Y=v;h=v=n}var ce=P?n:Cc(r),me=[r,s,c,h,v,W,Y,b,T,R];if(ce&&Qb(me,ce),r=me[0],s=me[1],c=me[2],h=me[3],v=me[4],R=me[9]=me[9]===n?P?0:r.length:wt(me[9]-H,0),!R&&s&(E|I)&&(s&=~(E|I)),!s||s==x)var ke=Ob(r,s,c);else s==E||s==I?ke=Lb(r,s,R):(s==O||s==(x|O))&&!v.length?ke=Pb(r,s,c,h):ke=Yo.apply(n,me);var Ne=ce?hh:Wh;return qh(Ne(ke,me),r,s)}function Ph(r,s,c,h){return r===n||In(r,Ni[c])&&!Xe.call(h,c)?s:r}function Mh(r,s,c,h,v,b){return ut(r)&&ut(s)&&(b.set(s,r),Ko(r,s,n,Mh,b),b.delete(s)),r}function Bb(r){return Ns(r)?n:r}function Bh(r,s,c,h,v,b){var T=c&w,R=r.length,P=s.length;if(R!=P&&!(T&&P>R))return!1;var H=b.get(r),W=b.get(s);if(H&&W)return H==s&&W==r;var Y=-1,ce=!0,me=c&$?new ri:n;for(b.set(r,s),b.set(s,r);++Y<R;){var ke=r[Y],Ne=s[Y];if(h)var Ce=T?h(Ne,ke,Y,s,r,b):h(ke,Ne,Y,r,s,b);if(Ce!==n){if(Ce)continue;ce=!1;break}if(me){if(!Kl(s,function(We,Ke){if(!Es(me,Ke)&&(ke===We||v(ke,We,c,h,b)))return me.push(Ke)})){ce=!1;break}}else if(!(ke===Ne||v(ke,Ne,c,h,b))){ce=!1;break}}return b.delete(r),b.delete(s),ce}function jb(r,s,c,h,v,b,T){switch(c){case qt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Wt:return!(r.byteLength!=s.byteLength||!b(new Mo(r),new Mo(s)));case G:case ne:case tt:return In(+r,+s);case je:return r.name==s.name&&r.message==s.message;case En:case Xt:return r==s+"";case ve:var R=Xl;case St:var P=h&w;if(R||(R=Ao),r.size!=s.size&&!P)return!1;var H=T.get(r);if(H)return H==s;h|=$,T.set(r,s);var W=Bh(R(r),R(s),h,v,b,T);return T.delete(r),W;case Un:if(As)return As.call(r)==As.call(s)}return!1}function Nb(r,s,c,h,v,b){var T=c&w,R=Ec(r),P=R.length,H=Ec(s),W=H.length;if(P!=W&&!T)return!1;for(var Y=P;Y--;){var ce=R[Y];if(!(T?ce in s:Xe.call(s,ce)))return!1}var me=b.get(r),ke=b.get(s);if(me&&ke)return me==s&&ke==r;var Ne=!0;b.set(r,s),b.set(s,r);for(var Ce=T;++Y<P;){ce=R[Y];var We=r[ce],Ke=s[ce];if(h)var sn=T?h(Ke,We,ce,s,r,b):h(We,Ke,ce,r,s,b);if(!(sn===n?We===Ke||v(We,Ke,c,h,b):sn)){Ne=!1;break}Ce||(Ce=ce=="constructor")}if(Ne&&!Ce){var Dt=r.constructor,on=s.constructor;Dt!=on&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof on=="function"&&on instanceof on)&&(Ne=!1)}return b.delete(r),b.delete(s),Ne}function cr(r){return Oc(zh(r,n,Yh),r+"")}function Ec(r){return nh(r,$t,Tc)}function kc(r){return nh(r,Vt,jh)}var Cc=Fo?function(r){return Fo.get(r)}:qc;function ta(r){for(var s=r.name+"",c=Ui[s],h=Xe.call(Ui,s)?c.length:0;h--;){var v=c[h],b=v.func;if(b==null||b==r)return v.name}return s}function Wi(r){var s=Xe.call(y,"placeholder")?y:r;return s.placeholder}function $e(){var r=y.iteratee||Hc;return r=r===Hc?sh:r,arguments.length?r(arguments[0],arguments[1]):r}function na(r,s){var c=r.__data__;return Zb(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Sc(r){for(var s=$t(r),c=s.length;c--;){var h=s[c],v=r[h];s[c]=[h,v,Uh(v)]}return s}function oi(r,s){var c=G2(r,s);return ih(c)?c:n}function Db(r){var s=Xe.call(r,ti),c=r[ti];try{r[ti]=n;var h=!0}catch{}var v=Lo.call(r);return h&&(s?r[ti]=c:delete r[ti]),v}var Tc=tc?function(r){return r==null?[]:(r=nt(r),kr(tc(r),function(s){return Hf.call(r,s)}))}:Zc,jh=tc?function(r){for(var s=[];r;)Cr(s,Tc(r)),r=Bo(r);return s}:Zc,Pt=jt;(nc&&Pt(new nc(new ArrayBuffer(1)))!=qt||Cs&&Pt(new Cs)!=ve||rc&&Pt(rc.resolve())!=Ht||Di&&Pt(new Di)!=St||Ss&&Pt(new Ss)!=kn)&&(Pt=function(r){var s=jt(r),c=s==Ct?r.constructor:n,h=c?ai(c):"";if(h)switch(h){case wy:return qt;case xy:return ve;case $y:return Ht;case Ey:return St;case ky:return kn}return s});function Ub(r,s,c){for(var h=-1,v=c.length;++h<v;){var b=c[h],T=b.size;switch(b.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Lt(s,r+T);break;case"takeRight":r=wt(r,s-T);break}}return{start:r,end:s}}function Fb(r){var s=r.match(Km);return s?s[1].split(Vm):[]}function Nh(r,s,c){s=Ir(s,r);for(var h=-1,v=s.length,b=!1;++h<v;){var T=Hn(s[h]);if(!(b=r!=null&&c(r,T)))break;r=r[T]}return b||++h!=v?b:(v=r==null?0:r.length,!!v&&ca(v)&&ur(T,v)&&(Le(r)||li(r)))}function zb(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Xe.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Dh(r){return typeof r.constructor=="function"&&!Bs(r)?Fi(Bo(r)):{}}function Hb(r,s,c){var h=r.constructor;switch(s){case Wt:return wc(r);case G:case ne:return new h(+r);case qt:return Cb(r,c);case Cn:case Sn:case un:case dn:case Tn:case nr:case rr:case ir:case Oi:return wh(r,c);case ve:return new h;case tt:case Xt:return new h(r);case En:return Sb(r);case St:return new h;case Un:return Tb(r)}}function Wb(r,s){var c=s.length;if(!c)return r;var h=c-1;return s[h]=(c>1?"& ":"")+s[h],s=s.join(c>2?", ":" "),r.replace(Zm,`{
/* [wrapped with `+s+`] */
`)}function qb(r){return Le(r)||li(r)||!!(Wf&&r&&r[Wf])}function ur(r,s){var c=typeof r;return s=s??oe,!!s&&(c=="number"||c!="symbol"&&r2.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,c){if(!ut(c))return!1;var h=typeof s;return(h=="number"?Kt(c)&&ur(s,c.length):h=="string"&&s in c)?In(c[s],r):!1}function Ac(r,s){if(Le(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||rn(r)?!0:zm.test(r)||!Fm.test(r)||s!=null&&r in nt(s)}function Zb(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Rc(r){var s=ta(r),c=y[s];if(typeof c!="function"||!(s in Ze.prototype))return!1;if(r===c)return!0;var h=Cc(c);return!!h&&r===h[0]}function Kb(r){return!!Uf&&Uf in r}var Vb=Io?dr:Kc;function Bs(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Ni;return r===c}function Uh(r){return r===r&&!ut(r)}function Fh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in nt(c))}}function Gb(r){var s=aa(r,function(h){return c.size===f&&c.clear(),h}),c=s.cache;return s}function Qb(r,s){var c=r[1],h=s[1],v=c|h,b=v<(x|C|F),T=h==F&&c==E||h==F&&c==N&&r[7].length<=s[8]||h==(F|N)&&s[7].length<=s[8]&&c==E;if(!(b||T))return r;h&x&&(r[2]=s[2],v|=c&x?0:M);var R=s[3];if(R){var P=r[3];r[3]=P?$h(P,R,s[4]):R,r[4]=P?Sr(r[3],p):s[4]}return R=s[5],R&&(P=r[5],r[5]=P?Eh(P,R,s[6]):R,r[6]=P?Sr(r[5],p):s[6]),R=s[7],R&&(r[7]=R),h&F&&(r[8]=r[8]==null?s[8]:Lt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=v,r}function Yb(r){var s=[];if(r!=null)for(var c in nt(r))s.push(c);return s}function Jb(r){return Lo.call(r)}function zh(r,s,c){return s=wt(s===n?r.length-1:s,0),function(){for(var h=arguments,v=-1,b=wt(h.length-s,0),T=D(b);++v<b;)T[v]=h[s+v];v=-1;for(var R=D(s+1);++v<s;)R[v]=h[v];return R[s]=c(T),en(r,this,R)}}function Hh(r,s){return s.length<2?r:si(r,mn(s,0,-1))}function Xb(r,s){for(var c=r.length,h=Lt(s.length,c),v=Zt(r);h--;){var b=s[h];r[h]=ur(b,c)?v[b]:n}return r}function Ic(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Wh=Zh(hh),js=py||function(r,s){return Tt.setTimeout(r,s)},Oc=Zh(xb);function qh(r,s,c){var h=s+"";return Oc(r,Wb(h,e_(Fb(h),c)))}function Zh(r){var s=0,c=0;return function(){var h=yy(),v=ae-(h-c);if(c=h,v>0){if(++s>=se)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ra(r,s){var c=-1,h=r.length,v=h-1;for(s=s===n?h:s;++c<s;){var b=pc(c,v),T=r[b];r[b]=r[c],r[c]=T}return r.length=s,r}var Kh=Gb(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Hm,function(c,h,v,b){s.push(v?b.replace(Ym,"$1"):h||c)}),s});function Hn(r){if(typeof r=="string"||rn(r))return r;var s=r+"";return s=="0"&&1/r==-X?"-0":s}function ai(r){if(r!=null){try{return Oo.call(r)}catch{}try{return r+""}catch{}}return""}function e_(r,s){return hn(ue,function(c){var h="_."+c[0];s&c[1]&&!So(r,h)&&r.push(h)}),r.sort()}function Vh(r){if(r instanceof Ze)return r.clone();var s=new gn(r.__wrapped__,r.__chain__);return s.__actions__=Zt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function t_(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=wt(Me(s),0);var h=r==null?0:r.length;if(!h||s<1)return[];for(var v=0,b=0,T=D(Do(h/s));v<h;)T[b++]=mn(r,v,v+=s);return T}function n_(r){for(var s=-1,c=r==null?0:r.length,h=0,v=[];++s<c;){var b=r[s];b&&(v[h++]=b)}return v}function r_(){var r=arguments.length;if(!r)return[];for(var s=D(r-1),c=arguments[0],h=r;h--;)s[h-1]=arguments[h];return Cr(Le(c)?Zt(c):[c],At(s,1))}var i_=Fe(function(r,s){return pt(r)?Is(r,At(s,1,pt,!0)):[]}),s_=Fe(function(r,s){var c=yn(s);return pt(c)&&(c=n),pt(r)?Is(r,At(s,1,pt,!0),$e(c,2)):[]}),o_=Fe(function(r,s){var c=yn(s);return pt(c)&&(c=n),pt(r)?Is(r,At(s,1,pt,!0),n,c):[]});function a_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Me(s),mn(r,s<0?0:s,h)):[]}function l_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Me(s),s=h-s,mn(r,0,s<0?0:s)):[]}function c_(r,s){return r&&r.length?Go(r,$e(s,3),!0,!0):[]}function u_(r,s){return r&&r.length?Go(r,$e(s,3),!0):[]}function d_(r,s,c,h){var v=r==null?0:r.length;return v?(c&&typeof c!="number"&&Nt(r,s,c)&&(c=0,h=v),rb(r,s,c,h)):[]}function Gh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Me(c);return v<0&&(v=wt(h+v,0)),To(r,$e(s,3),v)}function Qh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h-1;return c!==n&&(v=Me(c),v=c<0?wt(h+v,0):Lt(v,h-1)),To(r,$e(s,3),v,!0)}function Yh(r){var s=r==null?0:r.length;return s?At(r,1):[]}function f_(r){var s=r==null?0:r.length;return s?At(r,X):[]}function h_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Me(s),At(r,s)):[]}function p_(r){for(var s=-1,c=r==null?0:r.length,h={};++s<c;){var v=r[s];h[v[0]]=v[1]}return h}function Jh(r){return r&&r.length?r[0]:n}function g_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Me(c);return v<0&&(v=wt(h+v,0)),Pi(r,s,v)}function v_(r){var s=r==null?0:r.length;return s?mn(r,0,-1):[]}var m_=Fe(function(r){var s=lt(r,bc);return s.length&&s[0]===r[0]?cc(s):[]}),y_=Fe(function(r){var s=yn(r),c=lt(r,bc);return s===yn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?cc(c,$e(s,2)):[]}),b_=Fe(function(r){var s=yn(r),c=lt(r,bc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?cc(c,n,s):[]});function __(r,s){return r==null?"":vy.call(r,s)}function yn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function w_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h;return c!==n&&(v=Me(c),v=v<0?wt(h+v,0):Lt(v,h-1)),s===s?ey(r,s,v):To(r,Of,v,!0)}function x_(r,s){return r&&r.length?ch(r,Me(s)):n}var $_=Fe(Xh);function Xh(r,s){return r&&r.length&&s&&s.length?hc(r,s):r}function E_(r,s,c){return r&&r.length&&s&&s.length?hc(r,s,$e(c,2)):r}function k_(r,s,c){return r&&r.length&&s&&s.length?hc(r,s,n,c):r}var C_=cr(function(r,s){var c=r==null?0:r.length,h=sc(r,s);return fh(r,lt(s,function(v){return ur(v,c)?+v:v}).sort(xh)),h});function S_(r,s){var c=[];if(!(r&&r.length))return c;var h=-1,v=[],b=r.length;for(s=$e(s,3);++h<b;){var T=r[h];s(T,h,r)&&(c.push(T),v.push(h))}return fh(r,v),c}function Lc(r){return r==null?r:_y.call(r)}function T_(r,s,c){var h=r==null?0:r.length;return h?(c&&typeof c!="number"&&Nt(r,s,c)?(s=0,c=h):(s=s==null?0:Me(s),c=c===n?h:Me(c)),mn(r,s,c)):[]}function A_(r,s){return Vo(r,s)}function R_(r,s,c){return vc(r,s,$e(c,2))}function I_(r,s){var c=r==null?0:r.length;if(c){var h=Vo(r,s);if(h<c&&In(r[h],s))return h}return-1}function O_(r,s){return Vo(r,s,!0)}function L_(r,s,c){return vc(r,s,$e(c,2),!0)}function P_(r,s){var c=r==null?0:r.length;if(c){var h=Vo(r,s,!0)-1;if(In(r[h],s))return h}return-1}function M_(r){return r&&r.length?ph(r):[]}function B_(r,s){return r&&r.length?ph(r,$e(s,2)):[]}function j_(r){var s=r==null?0:r.length;return s?mn(r,1,s):[]}function N_(r,s,c){return r&&r.length?(s=c||s===n?1:Me(s),mn(r,0,s<0?0:s)):[]}function D_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Me(s),s=h-s,mn(r,s<0?0:s,h)):[]}function U_(r,s){return r&&r.length?Go(r,$e(s,3),!1,!0):[]}function F_(r,s){return r&&r.length?Go(r,$e(s,3)):[]}var z_=Fe(function(r){return Rr(At(r,1,pt,!0))}),H_=Fe(function(r){var s=yn(r);return pt(s)&&(s=n),Rr(At(r,1,pt,!0),$e(s,2))}),W_=Fe(function(r){var s=yn(r);return s=typeof s=="function"?s:n,Rr(At(r,1,pt,!0),n,s)});function q_(r){return r&&r.length?Rr(r):[]}function Z_(r,s){return r&&r.length?Rr(r,$e(s,2)):[]}function K_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Rr(r,n,s):[]}function Pc(r){if(!(r&&r.length))return[];var s=0;return r=kr(r,function(c){if(pt(c))return s=wt(c.length,s),!0}),Yl(s,function(c){return lt(r,Vl(c))})}function ep(r,s){if(!(r&&r.length))return[];var c=Pc(r);return s==null?c:lt(c,function(h){return en(s,n,h)})}var V_=Fe(function(r,s){return pt(r)?Is(r,s):[]}),G_=Fe(function(r){return yc(kr(r,pt))}),Q_=Fe(function(r){var s=yn(r);return pt(s)&&(s=n),yc(kr(r,pt),$e(s,2))}),Y_=Fe(function(r){var s=yn(r);return s=typeof s=="function"?s:n,yc(kr(r,pt),n,s)}),J_=Fe(Pc);function X_(r,s){return yh(r||[],s||[],Rs)}function ew(r,s){return yh(r||[],s||[],Ps)}var tw=Fe(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,ep(r,c)});function tp(r){var s=y(r);return s.__chain__=!0,s}function nw(r,s){return s(r),r}function ia(r,s){return s(r)}var rw=cr(function(r){var s=r.length,c=s?r[0]:0,h=this.__wrapped__,v=function(b){return sc(b,r)};return s>1||this.__actions__.length||!(h instanceof Ze)||!ur(c)?this.thru(v):(h=h.slice(c,+c+(s?1:0)),h.__actions__.push({func:ia,args:[v],thisArg:n}),new gn(h,this.__chain__).thru(function(b){return s&&!b.length&&b.push(n),b}))});function iw(){return tp(this)}function sw(){return new gn(this.value(),this.__chain__)}function ow(){this.__values__===n&&(this.__values__=gp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function aw(){return this}function lw(r){for(var s,c=this;c instanceof Ho;){var h=Vh(c);h.__index__=0,h.__values__=n,s?v.__wrapped__=h:s=h;var v=h;c=c.__wrapped__}return v.__wrapped__=r,s}function cw(){var r=this.__wrapped__;if(r instanceof Ze){var s=r;return this.__actions__.length&&(s=new Ze(this)),s=s.reverse(),s.__actions__.push({func:ia,args:[Lc],thisArg:n}),new gn(s,this.__chain__)}return this.thru(Lc)}function uw(){return mh(this.__wrapped__,this.__actions__)}var dw=Qo(function(r,s,c){Xe.call(r,c)?++r[c]:ar(r,c,1)});function fw(r,s,c){var h=Le(r)?Rf:nb;return c&&Nt(r,s,c)&&(s=n),h(r,$e(s,3))}function hw(r,s){var c=Le(r)?kr:eh;return c(r,$e(s,3))}var pw=Th(Gh),gw=Th(Qh);function vw(r,s){return At(sa(r,s),1)}function mw(r,s){return At(sa(r,s),X)}function yw(r,s,c){return c=c===n?1:Me(c),At(sa(r,s),c)}function np(r,s){var c=Le(r)?hn:Ar;return c(r,$e(s,3))}function rp(r,s){var c=Le(r)?j2:Xf;return c(r,$e(s,3))}var bw=Qo(function(r,s,c){Xe.call(r,c)?r[c].push(s):ar(r,c,[s])});function _w(r,s,c,h){r=Kt(r)?r:Zi(r),c=c&&!h?Me(c):0;var v=r.length;return c<0&&(c=wt(v+c,0)),ua(r)?c<=v&&r.indexOf(s,c)>-1:!!v&&Pi(r,s,c)>-1}var ww=Fe(function(r,s,c){var h=-1,v=typeof s=="function",b=Kt(r)?D(r.length):[];return Ar(r,function(T){b[++h]=v?en(s,T,c):Os(T,s,c)}),b}),xw=Qo(function(r,s,c){ar(r,c,s)});function sa(r,s){var c=Le(r)?lt:oh;return c(r,$e(s,3))}function $w(r,s,c,h){return r==null?[]:(Le(s)||(s=s==null?[]:[s]),c=h?n:c,Le(c)||(c=c==null?[]:[c]),uh(r,s,c))}var Ew=Qo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function kw(r,s,c){var h=Le(r)?Zl:Pf,v=arguments.length<3;return h(r,$e(s,4),c,v,Ar)}function Cw(r,s,c){var h=Le(r)?N2:Pf,v=arguments.length<3;return h(r,$e(s,4),c,v,Xf)}function Sw(r,s){var c=Le(r)?kr:eh;return c(r,la($e(s,3)))}function Tw(r){var s=Le(r)?Gf:_b;return s(r)}function Aw(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=Me(s);var h=Le(r)?Yy:wb;return h(r,s)}function Rw(r){var s=Le(r)?Jy:$b;return s(r)}function Iw(r){if(r==null)return 0;if(Kt(r))return ua(r)?Bi(r):r.length;var s=Pt(r);return s==ve||s==St?r.size:dc(r).length}function Ow(r,s,c){var h=Le(r)?Kl:Eb;return c&&Nt(r,s,c)&&(s=n),h(r,$e(s,3))}var Lw=Fe(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Nt(r,s[0],s[1])?s=[]:c>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),uh(r,At(s,1),[])}),oa=hy||function(){return Tt.Date.now()};function Pw(r,s){if(typeof s!="function")throw new pn(l);return r=Me(r),function(){if(--r<1)return s.apply(this,arguments)}}function ip(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,lr(r,F,n,n,n,n,s)}function sp(r,s){var c;if(typeof s!="function")throw new pn(l);return r=Me(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Mc=Fe(function(r,s,c){var h=x;if(c.length){var v=Sr(c,Wi(Mc));h|=O}return lr(r,h,s,c,v)}),op=Fe(function(r,s,c){var h=x|C;if(c.length){var v=Sr(c,Wi(op));h|=O}return lr(s,h,r,c,v)});function ap(r,s,c){s=c?n:s;var h=lr(r,E,n,n,n,n,n,s);return h.placeholder=ap.placeholder,h}function lp(r,s,c){s=c?n:s;var h=lr(r,I,n,n,n,n,n,s);return h.placeholder=lp.placeholder,h}function cp(r,s,c){var h,v,b,T,R,P,H=0,W=!1,Y=!1,ce=!0;if(typeof r!="function")throw new pn(l);s=bn(s)||0,ut(c)&&(W=!!c.leading,Y="maxWait"in c,b=Y?wt(bn(c.maxWait)||0,s):b,ce="trailing"in c?!!c.trailing:ce);function me(gt){var On=h,hr=v;return h=v=n,H=gt,T=r.apply(hr,On),T}function ke(gt){return H=gt,R=js(We,s),W?me(gt):T}function Ne(gt){var On=gt-P,hr=gt-H,Tp=s-On;return Y?Lt(Tp,b-hr):Tp}function Ce(gt){var On=gt-P,hr=gt-H;return P===n||On>=s||On<0||Y&&hr>=b}function We(){var gt=oa();if(Ce(gt))return Ke(gt);R=js(We,Ne(gt))}function Ke(gt){return R=n,ce&&h?me(gt):(h=v=n,T)}function sn(){R!==n&&bh(R),H=0,h=P=v=R=n}function Dt(){return R===n?T:Ke(oa())}function on(){var gt=oa(),On=Ce(gt);if(h=arguments,v=this,P=gt,On){if(R===n)return ke(P);if(Y)return bh(R),R=js(We,s),me(P)}return R===n&&(R=js(We,s)),T}return on.cancel=sn,on.flush=Dt,on}var Mw=Fe(function(r,s){return Jf(r,1,s)}),Bw=Fe(function(r,s,c){return Jf(r,bn(s)||0,c)});function jw(r){return lr(r,K)}function aa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new pn(l);var c=function(){var h=arguments,v=s?s.apply(this,h):h[0],b=c.cache;if(b.has(v))return b.get(v);var T=r.apply(this,h);return c.cache=b.set(v,T)||b,T};return c.cache=new(aa.Cache||or),c}aa.Cache=or;function la(r){if(typeof r!="function")throw new pn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Nw(r){return sp(2,r)}var Dw=kb(function(r,s){s=s.length==1&&Le(s[0])?lt(s[0],tn($e())):lt(At(s,1),tn($e()));var c=s.length;return Fe(function(h){for(var v=-1,b=Lt(h.length,c);++v<b;)h[v]=s[v].call(this,h[v]);return en(r,this,h)})}),Bc=Fe(function(r,s){var c=Sr(s,Wi(Bc));return lr(r,O,n,s,c)}),up=Fe(function(r,s){var c=Sr(s,Wi(up));return lr(r,A,n,s,c)}),Uw=cr(function(r,s){return lr(r,N,n,n,n,s)});function Fw(r,s){if(typeof r!="function")throw new pn(l);return s=s===n?s:Me(s),Fe(r,s)}function zw(r,s){if(typeof r!="function")throw new pn(l);return s=s==null?0:wt(Me(s),0),Fe(function(c){var h=c[s],v=Or(c,0,s);return h&&Cr(v,h),en(r,this,v)})}function Hw(r,s,c){var h=!0,v=!0;if(typeof r!="function")throw new pn(l);return ut(c)&&(h="leading"in c?!!c.leading:h,v="trailing"in c?!!c.trailing:v),cp(r,s,{leading:h,maxWait:s,trailing:v})}function Ww(r){return ip(r,1)}function qw(r,s){return Bc(_c(s),r)}function Zw(){if(!arguments.length)return[];var r=arguments[0];return Le(r)?r:[r]}function Kw(r){return vn(r,_)}function Vw(r,s){return s=typeof s=="function"?s:n,vn(r,_,s)}function Gw(r){return vn(r,g|_)}function Qw(r,s){return s=typeof s=="function"?s:n,vn(r,g|_,s)}function Yw(r,s){return s==null||Yf(r,s,$t(s))}function In(r,s){return r===s||r!==r&&s!==s}var Jw=ea(lc),Xw=ea(function(r,s){return r>=s}),li=rh(function(){return arguments}())?rh:function(r){return ft(r)&&Xe.call(r,"callee")&&!Hf.call(r,"callee")},Le=D.isArray,e3=Ef?tn(Ef):lb;function Kt(r){return r!=null&&ca(r.length)&&!dr(r)}function pt(r){return ft(r)&&Kt(r)}function t3(r){return r===!0||r===!1||ft(r)&&jt(r)==G}var Lr=gy||Kc,n3=kf?tn(kf):cb;function r3(r){return ft(r)&&r.nodeType===1&&!Ns(r)}function i3(r){if(r==null)return!0;if(Kt(r)&&(Le(r)||typeof r=="string"||typeof r.splice=="function"||Lr(r)||qi(r)||li(r)))return!r.length;var s=Pt(r);if(s==ve||s==St)return!r.size;if(Bs(r))return!dc(r).length;for(var c in r)if(Xe.call(r,c))return!1;return!0}function s3(r,s){return Ls(r,s)}function o3(r,s,c){c=typeof c=="function"?c:n;var h=c?c(r,s):n;return h===n?Ls(r,s,n,c):!!h}function jc(r){if(!ft(r))return!1;var s=jt(r);return s==je||s==_e||typeof r.message=="string"&&typeof r.name=="string"&&!Ns(r)}function a3(r){return typeof r=="number"&&qf(r)}function dr(r){if(!ut(r))return!1;var s=jt(r);return s==le||s==Z||s==U||s==Xr}function dp(r){return typeof r=="number"&&r==Me(r)}function ca(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=oe}function ut(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ft(r){return r!=null&&typeof r=="object"}var fp=Cf?tn(Cf):db;function l3(r,s){return r===s||uc(r,s,Sc(s))}function c3(r,s,c){return c=typeof c=="function"?c:n,uc(r,s,Sc(s),c)}function u3(r){return hp(r)&&r!=+r}function d3(r){if(Vb(r))throw new Ie(a);return ih(r)}function f3(r){return r===null}function h3(r){return r==null}function hp(r){return typeof r=="number"||ft(r)&&jt(r)==tt}function Ns(r){if(!ft(r)||jt(r)!=Ct)return!1;var s=Bo(r);if(s===null)return!0;var c=Xe.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Oo.call(c)==cy}var Nc=Sf?tn(Sf):fb;function p3(r){return dp(r)&&r>=-oe&&r<=oe}var pp=Tf?tn(Tf):hb;function ua(r){return typeof r=="string"||!Le(r)&&ft(r)&&jt(r)==Xt}function rn(r){return typeof r=="symbol"||ft(r)&&jt(r)==Un}var qi=Af?tn(Af):pb;function g3(r){return r===n}function v3(r){return ft(r)&&Pt(r)==kn}function m3(r){return ft(r)&&jt(r)==Ae}var y3=ea(fc),b3=ea(function(r,s){return r<=s});function gp(r){if(!r)return[];if(Kt(r))return ua(r)?An(r):Zt(r);if(ks&&r[ks])return Y2(r[ks]());var s=Pt(r),c=s==ve?Xl:s==St?Ao:Zi;return c(r)}function fr(r){if(!r)return r===0?r:0;if(r=bn(r),r===X||r===-X){var s=r<0?-1:1;return s*J}return r===r?r:0}function Me(r){var s=fr(r),c=s%1;return s===s?c?s-c:s:0}function vp(r){return r?ii(Me(r),0,ge):0}function bn(r){if(typeof r=="number")return r;if(rn(r))return be;if(ut(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ut(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Mf(r);var c=e2.test(r);return c||n2.test(r)?P2(r.slice(2),c?2:8):Xm.test(r)?be:+r}function mp(r){return zn(r,Vt(r))}function _3(r){return r?ii(Me(r),-oe,oe):r===0?r:0}function Je(r){return r==null?"":nn(r)}var w3=zi(function(r,s){if(Bs(s)||Kt(s)){zn(s,$t(s),r);return}for(var c in s)Xe.call(s,c)&&Rs(r,c,s[c])}),yp=zi(function(r,s){zn(s,Vt(s),r)}),da=zi(function(r,s,c,h){zn(s,Vt(s),r,h)}),x3=zi(function(r,s,c,h){zn(s,$t(s),r,h)}),$3=cr(sc);function E3(r,s){var c=Fi(r);return s==null?c:Qf(c,s)}var k3=Fe(function(r,s){r=nt(r);var c=-1,h=s.length,v=h>2?s[2]:n;for(v&&Nt(s[0],s[1],v)&&(h=1);++c<h;)for(var b=s[c],T=Vt(b),R=-1,P=T.length;++R<P;){var H=T[R],W=r[H];(W===n||In(W,Ni[H])&&!Xe.call(r,H))&&(r[H]=b[H])}return r}),C3=Fe(function(r){return r.push(n,Mh),en(bp,n,r)});function S3(r,s){return If(r,$e(s,3),Fn)}function T3(r,s){return If(r,$e(s,3),ac)}function A3(r,s){return r==null?r:oc(r,$e(s,3),Vt)}function R3(r,s){return r==null?r:th(r,$e(s,3),Vt)}function I3(r,s){return r&&Fn(r,$e(s,3))}function O3(r,s){return r&&ac(r,$e(s,3))}function L3(r){return r==null?[]:Zo(r,$t(r))}function P3(r){return r==null?[]:Zo(r,Vt(r))}function Dc(r,s,c){var h=r==null?n:si(r,s);return h===n?c:h}function M3(r,s){return r!=null&&Nh(r,s,ib)}function Uc(r,s){return r!=null&&Nh(r,s,sb)}var B3=Rh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),r[s]=c},zc(Gt)),j3=Rh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),Xe.call(r,s)?r[s].push(c):r[s]=[c]},$e),N3=Fe(Os);function $t(r){return Kt(r)?Vf(r):dc(r)}function Vt(r){return Kt(r)?Vf(r,!0):gb(r)}function D3(r,s){var c={};return s=$e(s,3),Fn(r,function(h,v,b){ar(c,s(h,v,b),h)}),c}function U3(r,s){var c={};return s=$e(s,3),Fn(r,function(h,v,b){ar(c,v,s(h,v,b))}),c}var F3=zi(function(r,s,c){Ko(r,s,c)}),bp=zi(function(r,s,c,h){Ko(r,s,c,h)}),z3=cr(function(r,s){var c={};if(r==null)return c;var h=!1;s=lt(s,function(b){return b=Ir(b,r),h||(h=b.length>1),b}),zn(r,kc(r),c),h&&(c=vn(c,g|m|_,Bb));for(var v=s.length;v--;)mc(c,s[v]);return c});function H3(r,s){return _p(r,la($e(s)))}var W3=cr(function(r,s){return r==null?{}:mb(r,s)});function _p(r,s){if(r==null)return{};var c=lt(kc(r),function(h){return[h]});return s=$e(s),dh(r,c,function(h,v){return s(h,v[0])})}function q3(r,s,c){s=Ir(s,r);var h=-1,v=s.length;for(v||(v=1,r=n);++h<v;){var b=r==null?n:r[Hn(s[h])];b===n&&(h=v,b=c),r=dr(b)?b.call(r):b}return r}function Z3(r,s,c){return r==null?r:Ps(r,s,c)}function K3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:Ps(r,s,c,h)}var wp=Lh($t),xp=Lh(Vt);function V3(r,s,c){var h=Le(r),v=h||Lr(r)||qi(r);if(s=$e(s,4),c==null){var b=r&&r.constructor;v?c=h?new b:[]:ut(r)?c=dr(b)?Fi(Bo(r)):{}:c={}}return(v?hn:Fn)(r,function(T,R,P){return s(c,T,R,P)}),c}function G3(r,s){return r==null?!0:mc(r,s)}function Q3(r,s,c){return r==null?r:vh(r,s,_c(c))}function Y3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:vh(r,s,_c(c),h)}function Zi(r){return r==null?[]:Jl(r,$t(r))}function J3(r){return r==null?[]:Jl(r,Vt(r))}function X3(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=bn(c),c=c===c?c:0),s!==n&&(s=bn(s),s=s===s?s:0),ii(bn(r),s,c)}function ex(r,s,c){return s=fr(s),c===n?(c=s,s=0):c=fr(c),r=bn(r),ob(r,s,c)}function tx(r,s,c){if(c&&typeof c!="boolean"&&Nt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=fr(r),s===n?(s=r,r=0):s=fr(s)),r>s){var h=r;r=s,s=h}if(c||r%1||s%1){var v=Zf();return Lt(r+v*(s-r+L2("1e-"+((v+"").length-1))),s)}return pc(r,s)}var nx=Hi(function(r,s,c){return s=s.toLowerCase(),r+(c?$p(s):s)});function $p(r){return Fc(Je(r).toLowerCase())}function Ep(r){return r=Je(r),r&&r.replace(i2,Z2).replace($2,"")}function rx(r,s,c){r=Je(r),s=nn(s);var h=r.length;c=c===n?h:ii(Me(c),0,h);var v=c;return c-=s.length,c>=0&&r.slice(c,v)==s}function ix(r){return r=Je(r),r&&Nm.test(r)?r.replace(ef,K2):r}function sx(r){return r=Je(r),r&&Wm.test(r)?r.replace(Bl,"\\$&"):r}var ox=Hi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),ax=Hi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),lx=Sh("toLowerCase");function cx(r,s,c){r=Je(r),s=Me(s);var h=s?Bi(r):0;if(!s||h>=s)return r;var v=(s-h)/2;return Xo(Uo(v),c)+r+Xo(Do(v),c)}function ux(r,s,c){r=Je(r),s=Me(s);var h=s?Bi(r):0;return s&&h<s?r+Xo(s-h,c):r}function dx(r,s,c){r=Je(r),s=Me(s);var h=s?Bi(r):0;return s&&h<s?Xo(s-h,c)+r:r}function fx(r,s,c){return c||s==null?s=0:s&&(s=+s),by(Je(r).replace(jl,""),s||0)}function hx(r,s,c){return(c?Nt(r,s,c):s===n)?s=1:s=Me(s),gc(Je(r),s)}function px(){var r=arguments,s=Je(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var gx=Hi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function vx(r,s,c){return c&&typeof c!="number"&&Nt(r,s,c)&&(s=c=n),c=c===n?ge:c>>>0,c?(r=Je(r),r&&(typeof s=="string"||s!=null&&!Nc(s))&&(s=nn(s),!s&&Mi(r))?Or(An(r),0,c):r.split(s,c)):[]}var mx=Hi(function(r,s,c){return r+(c?" ":"")+Fc(s)});function yx(r,s,c){return r=Je(r),c=c==null?0:ii(Me(c),0,r.length),s=nn(s),r.slice(c,c+s.length)==s}function bx(r,s,c){var h=y.templateSettings;c&&Nt(r,s,c)&&(s=n),r=Je(r),s=da({},s,h,Ph);var v=da({},s.imports,h.imports,Ph),b=$t(v),T=Jl(v,b),R,P,H=0,W=s.interpolate||Eo,Y="__p += '",ce=ec((s.escape||Eo).source+"|"+W.source+"|"+(W===tf?Jm:Eo).source+"|"+(s.evaluate||Eo).source+"|$","g"),me="//# sourceURL="+(Xe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++T2+"]")+`
`;r.replace(ce,function(Ce,We,Ke,sn,Dt,on){return Ke||(Ke=sn),Y+=r.slice(H,on).replace(s2,V2),We&&(R=!0,Y+=`' +
__e(`+We+`) +
'`),Dt&&(P=!0,Y+=`';
`+Dt+`;
__p += '`),Ke&&(Y+=`' +
((__t = (`+Ke+`)) == null ? '' : __t) +
'`),H=on+Ce.length,Ce}),Y+=`';
`;var ke=Xe.call(s,"variable")&&s.variable;if(!ke)Y=`with (obj) {
`+Y+`
}
`;else if(Qm.test(ke))throw new Ie(u);Y=(P?Y.replace(wo,""):Y).replace(xo,"$1").replace($o,"$1;"),Y="function("+(ke||"obj")+`) {
`+(ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(P?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Y+`return __p
}`;var Ne=Cp(function(){return Qe(b,me+"return "+Y).apply(n,T)});if(Ne.source=Y,jc(Ne))throw Ne;return Ne}function _x(r){return Je(r).toLowerCase()}function wx(r){return Je(r).toUpperCase()}function xx(r,s,c){if(r=Je(r),r&&(c||s===n))return Mf(r);if(!r||!(s=nn(s)))return r;var h=An(r),v=An(s),b=Bf(h,v),T=jf(h,v)+1;return Or(h,b,T).join("")}function $x(r,s,c){if(r=Je(r),r&&(c||s===n))return r.slice(0,Df(r)+1);if(!r||!(s=nn(s)))return r;var h=An(r),v=jf(h,An(s))+1;return Or(h,0,v).join("")}function Ex(r,s,c){if(r=Je(r),r&&(c||s===n))return r.replace(jl,"");if(!r||!(s=nn(s)))return r;var h=An(r),v=Bf(h,An(s));return Or(h,v).join("")}function kx(r,s){var c=ee,h=ie;if(ut(s)){var v="separator"in s?s.separator:v;c="length"in s?Me(s.length):c,h="omission"in s?nn(s.omission):h}r=Je(r);var b=r.length;if(Mi(r)){var T=An(r);b=T.length}if(c>=b)return r;var R=c-Bi(h);if(R<1)return h;var P=T?Or(T,0,R).join(""):r.slice(0,R);if(v===n)return P+h;if(T&&(R+=P.length-R),Nc(v)){if(r.slice(R).search(v)){var H,W=P;for(v.global||(v=ec(v.source,Je(nf.exec(v))+"g")),v.lastIndex=0;H=v.exec(W);)var Y=H.index;P=P.slice(0,Y===n?R:Y)}}else if(r.indexOf(nn(v),R)!=R){var ce=P.lastIndexOf(v);ce>-1&&(P=P.slice(0,ce))}return P+h}function Cx(r){return r=Je(r),r&&jm.test(r)?r.replace(Xd,ty):r}var Sx=Hi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Fc=Sh("toUpperCase");function kp(r,s,c){return r=Je(r),s=c?n:s,s===n?Q2(r)?iy(r):F2(r):r.match(s)||[]}var Cp=Fe(function(r,s){try{return en(r,n,s)}catch(c){return jc(c)?c:new Ie(c)}}),Tx=cr(function(r,s){return hn(s,function(c){c=Hn(c),ar(r,c,Mc(r[c],r))}),r});function Ax(r){var s=r==null?0:r.length,c=$e();return r=s?lt(r,function(h){if(typeof h[1]!="function")throw new pn(l);return[c(h[0]),h[1]]}):[],Fe(function(h){for(var v=-1;++v<s;){var b=r[v];if(en(b[0],this,h))return en(b[1],this,h)}})}function Rx(r){return tb(vn(r,g))}function zc(r){return function(){return r}}function Ix(r,s){return r==null||r!==r?s:r}var Ox=Ah(),Lx=Ah(!0);function Gt(r){return r}function Hc(r){return sh(typeof r=="function"?r:vn(r,g))}function Px(r){return ah(vn(r,g))}function Mx(r,s){return lh(r,vn(s,g))}var Bx=Fe(function(r,s){return function(c){return Os(c,r,s)}}),jx=Fe(function(r,s){return function(c){return Os(r,c,s)}});function Wc(r,s,c){var h=$t(s),v=Zo(s,h);c==null&&!(ut(s)&&(v.length||!h.length))&&(c=s,s=r,r=this,v=Zo(s,$t(s)));var b=!(ut(c)&&"chain"in c)||!!c.chain,T=dr(r);return hn(v,function(R){var P=s[R];r[R]=P,T&&(r.prototype[R]=function(){var H=this.__chain__;if(b||H){var W=r(this.__wrapped__),Y=W.__actions__=Zt(this.__actions__);return Y.push({func:P,args:arguments,thisArg:r}),W.__chain__=H,W}return P.apply(r,Cr([this.value()],arguments))})}),r}function Nx(){return Tt._===this&&(Tt._=uy),this}function qc(){}function Dx(r){return r=Me(r),Fe(function(s){return ch(s,r)})}var Ux=xc(lt),Fx=xc(Rf),zx=xc(Kl);function Sp(r){return Ac(r)?Vl(Hn(r)):yb(r)}function Hx(r){return function(s){return r==null?n:si(r,s)}}var Wx=Ih(),qx=Ih(!0);function Zc(){return[]}function Kc(){return!1}function Zx(){return{}}function Kx(){return""}function Vx(){return!0}function Gx(r,s){if(r=Me(r),r<1||r>oe)return[];var c=ge,h=Lt(r,ge);s=$e(s),r-=ge;for(var v=Yl(h,s);++c<r;)s(c);return v}function Qx(r){return Le(r)?lt(r,Hn):rn(r)?[r]:Zt(Kh(Je(r)))}function Yx(r){var s=++ly;return Je(r)+s}var Jx=Jo(function(r,s){return r+s},0),Xx=$c("ceil"),e4=Jo(function(r,s){return r/s},1),t4=$c("floor");function n4(r){return r&&r.length?qo(r,Gt,lc):n}function r4(r,s){return r&&r.length?qo(r,$e(s,2),lc):n}function i4(r){return Lf(r,Gt)}function s4(r,s){return Lf(r,$e(s,2))}function o4(r){return r&&r.length?qo(r,Gt,fc):n}function a4(r,s){return r&&r.length?qo(r,$e(s,2),fc):n}var l4=Jo(function(r,s){return r*s},1),c4=$c("round"),u4=Jo(function(r,s){return r-s},0);function d4(r){return r&&r.length?Ql(r,Gt):0}function f4(r,s){return r&&r.length?Ql(r,$e(s,2)):0}return y.after=Pw,y.ary=ip,y.assign=w3,y.assignIn=yp,y.assignInWith=da,y.assignWith=x3,y.at=$3,y.before=sp,y.bind=Mc,y.bindAll=Tx,y.bindKey=op,y.castArray=Zw,y.chain=tp,y.chunk=t_,y.compact=n_,y.concat=r_,y.cond=Ax,y.conforms=Rx,y.constant=zc,y.countBy=dw,y.create=E3,y.curry=ap,y.curryRight=lp,y.debounce=cp,y.defaults=k3,y.defaultsDeep=C3,y.defer=Mw,y.delay=Bw,y.difference=i_,y.differenceBy=s_,y.differenceWith=o_,y.drop=a_,y.dropRight=l_,y.dropRightWhile=c_,y.dropWhile=u_,y.fill=d_,y.filter=hw,y.flatMap=vw,y.flatMapDeep=mw,y.flatMapDepth=yw,y.flatten=Yh,y.flattenDeep=f_,y.flattenDepth=h_,y.flip=jw,y.flow=Ox,y.flowRight=Lx,y.fromPairs=p_,y.functions=L3,y.functionsIn=P3,y.groupBy=bw,y.initial=v_,y.intersection=m_,y.intersectionBy=y_,y.intersectionWith=b_,y.invert=B3,y.invertBy=j3,y.invokeMap=ww,y.iteratee=Hc,y.keyBy=xw,y.keys=$t,y.keysIn=Vt,y.map=sa,y.mapKeys=D3,y.mapValues=U3,y.matches=Px,y.matchesProperty=Mx,y.memoize=aa,y.merge=F3,y.mergeWith=bp,y.method=Bx,y.methodOf=jx,y.mixin=Wc,y.negate=la,y.nthArg=Dx,y.omit=z3,y.omitBy=H3,y.once=Nw,y.orderBy=$w,y.over=Ux,y.overArgs=Dw,y.overEvery=Fx,y.overSome=zx,y.partial=Bc,y.partialRight=up,y.partition=Ew,y.pick=W3,y.pickBy=_p,y.property=Sp,y.propertyOf=Hx,y.pull=$_,y.pullAll=Xh,y.pullAllBy=E_,y.pullAllWith=k_,y.pullAt=C_,y.range=Wx,y.rangeRight=qx,y.rearg=Uw,y.reject=Sw,y.remove=S_,y.rest=Fw,y.reverse=Lc,y.sampleSize=Aw,y.set=Z3,y.setWith=K3,y.shuffle=Rw,y.slice=T_,y.sortBy=Lw,y.sortedUniq=M_,y.sortedUniqBy=B_,y.split=vx,y.spread=zw,y.tail=j_,y.take=N_,y.takeRight=D_,y.takeRightWhile=U_,y.takeWhile=F_,y.tap=nw,y.throttle=Hw,y.thru=ia,y.toArray=gp,y.toPairs=wp,y.toPairsIn=xp,y.toPath=Qx,y.toPlainObject=mp,y.transform=V3,y.unary=Ww,y.union=z_,y.unionBy=H_,y.unionWith=W_,y.uniq=q_,y.uniqBy=Z_,y.uniqWith=K_,y.unset=G3,y.unzip=Pc,y.unzipWith=ep,y.update=Q3,y.updateWith=Y3,y.values=Zi,y.valuesIn=J3,y.without=V_,y.words=kp,y.wrap=qw,y.xor=G_,y.xorBy=Q_,y.xorWith=Y_,y.zip=J_,y.zipObject=X_,y.zipObjectDeep=ew,y.zipWith=tw,y.entries=wp,y.entriesIn=xp,y.extend=yp,y.extendWith=da,Wc(y,y),y.add=Jx,y.attempt=Cp,y.camelCase=nx,y.capitalize=$p,y.ceil=Xx,y.clamp=X3,y.clone=Kw,y.cloneDeep=Gw,y.cloneDeepWith=Qw,y.cloneWith=Vw,y.conformsTo=Yw,y.deburr=Ep,y.defaultTo=Ix,y.divide=e4,y.endsWith=rx,y.eq=In,y.escape=ix,y.escapeRegExp=sx,y.every=fw,y.find=pw,y.findIndex=Gh,y.findKey=S3,y.findLast=gw,y.findLastIndex=Qh,y.findLastKey=T3,y.floor=t4,y.forEach=np,y.forEachRight=rp,y.forIn=A3,y.forInRight=R3,y.forOwn=I3,y.forOwnRight=O3,y.get=Dc,y.gt=Jw,y.gte=Xw,y.has=M3,y.hasIn=Uc,y.head=Jh,y.identity=Gt,y.includes=_w,y.indexOf=g_,y.inRange=ex,y.invoke=N3,y.isArguments=li,y.isArray=Le,y.isArrayBuffer=e3,y.isArrayLike=Kt,y.isArrayLikeObject=pt,y.isBoolean=t3,y.isBuffer=Lr,y.isDate=n3,y.isElement=r3,y.isEmpty=i3,y.isEqual=s3,y.isEqualWith=o3,y.isError=jc,y.isFinite=a3,y.isFunction=dr,y.isInteger=dp,y.isLength=ca,y.isMap=fp,y.isMatch=l3,y.isMatchWith=c3,y.isNaN=u3,y.isNative=d3,y.isNil=h3,y.isNull=f3,y.isNumber=hp,y.isObject=ut,y.isObjectLike=ft,y.isPlainObject=Ns,y.isRegExp=Nc,y.isSafeInteger=p3,y.isSet=pp,y.isString=ua,y.isSymbol=rn,y.isTypedArray=qi,y.isUndefined=g3,y.isWeakMap=v3,y.isWeakSet=m3,y.join=__,y.kebabCase=ox,y.last=yn,y.lastIndexOf=w_,y.lowerCase=ax,y.lowerFirst=lx,y.lt=y3,y.lte=b3,y.max=n4,y.maxBy=r4,y.mean=i4,y.meanBy=s4,y.min=o4,y.minBy=a4,y.stubArray=Zc,y.stubFalse=Kc,y.stubObject=Zx,y.stubString=Kx,y.stubTrue=Vx,y.multiply=l4,y.nth=x_,y.noConflict=Nx,y.noop=qc,y.now=oa,y.pad=cx,y.padEnd=ux,y.padStart=dx,y.parseInt=fx,y.random=tx,y.reduce=kw,y.reduceRight=Cw,y.repeat=hx,y.replace=px,y.result=q3,y.round=c4,y.runInContext=L,y.sample=Tw,y.size=Iw,y.snakeCase=gx,y.some=Ow,y.sortedIndex=A_,y.sortedIndexBy=R_,y.sortedIndexOf=I_,y.sortedLastIndex=O_,y.sortedLastIndexBy=L_,y.sortedLastIndexOf=P_,y.startCase=mx,y.startsWith=yx,y.subtract=u4,y.sum=d4,y.sumBy=f4,y.template=bx,y.times=Gx,y.toFinite=fr,y.toInteger=Me,y.toLength=vp,y.toLower=_x,y.toNumber=bn,y.toSafeInteger=_3,y.toString=Je,y.toUpper=wx,y.trim=xx,y.trimEnd=$x,y.trimStart=Ex,y.truncate=kx,y.unescape=Cx,y.uniqueId=Yx,y.upperCase=Sx,y.upperFirst=Fc,y.each=np,y.eachRight=rp,y.first=Jh,Wc(y,function(){var r={};return Fn(y,function(s,c){Xe.call(y.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),y.VERSION=i,hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),hn(["drop","take"],function(r,s){Ze.prototype[r]=function(c){c=c===n?1:wt(Me(c),0);var h=this.__filtered__&&!s?new Ze(this):this.clone();return h.__filtered__?h.__takeCount__=Lt(c,h.__takeCount__):h.__views__.push({size:Lt(c,ge),type:r+(h.__dir__<0?"Right":"")}),h},Ze.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),hn(["filter","map","takeWhile"],function(r,s){var c=s+1,h=c==te||c==q;Ze.prototype[r]=function(v){var b=this.clone();return b.__iteratees__.push({iteratee:$e(v,3),type:c}),b.__filtered__=b.__filtered__||h,b}}),hn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Ze.prototype[r]=function(){return this[c](1).value()[0]}}),hn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Ze.prototype[r]=function(){return this.__filtered__?new Ze(this):this[c](1)}}),Ze.prototype.compact=function(){return this.filter(Gt)},Ze.prototype.find=function(r){return this.filter(r).head()},Ze.prototype.findLast=function(r){return this.reverse().find(r)},Ze.prototype.invokeMap=Fe(function(r,s){return typeof r=="function"?new Ze(this):this.map(function(c){return Os(c,r,s)})}),Ze.prototype.reject=function(r){return this.filter(la($e(r)))},Ze.prototype.slice=function(r,s){r=Me(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Ze(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Me(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Ze.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ze.prototype.toArray=function(){return this.take(ge)},Fn(Ze.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),v=y[h?"take"+(s=="last"?"Right":""):s],b=h||/^find/.test(s);v&&(y.prototype[s]=function(){var T=this.__wrapped__,R=h?[1]:arguments,P=T instanceof Ze,H=R[0],W=P||Le(T),Y=function(We){var Ke=v.apply(y,Cr([We],R));return h&&ce?Ke[0]:Ke};W&&c&&typeof H=="function"&&H.length!=1&&(P=W=!1);var ce=this.__chain__,me=!!this.__actions__.length,ke=b&&!ce,Ne=P&&!me;if(!b&&W){T=Ne?T:new Ze(this);var Ce=r.apply(T,R);return Ce.__actions__.push({func:ia,args:[Y],thisArg:n}),new gn(Ce,ce)}return ke&&Ne?r.apply(this,R):(Ce=this.thru(Y),ke?h?Ce.value()[0]:Ce.value():Ce)})}),hn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Ro[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",h=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var v=arguments;if(h&&!this.__chain__){var b=this.value();return s.apply(Le(b)?b:[],v)}return this[c](function(T){return s.apply(Le(T)?T:[],v)})}}),Fn(Ze.prototype,function(r,s){var c=y[s];if(c){var h=c.name+"";Xe.call(Ui,h)||(Ui[h]=[]),Ui[h].push({name:s,func:c})}}),Ui[Yo(n,C).name]=[{name:"wrapper",func:n}],Ze.prototype.clone=Cy,Ze.prototype.reverse=Sy,Ze.prototype.value=Ty,y.prototype.at=rw,y.prototype.chain=iw,y.prototype.commit=sw,y.prototype.next=ow,y.prototype.plant=lw,y.prototype.reverse=cw,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=uw,y.prototype.first=y.prototype.head,ks&&(y.prototype[ks]=aw),y},ji=sy();ei?((ei.exports=ji)._=ji,Hl._=ji):Tt._=ji}).call(xt)})(Na,Na.exports);var H1=Na.exports;const V9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],W1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],G9=[...W1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],eH=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Q9=()=>{const t=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));t.push(...o)}else for(let o=0;o<16;o+=1)t[o]=Math.round(Math.random()*65535)>>8;t[6]=t[6]&15|64,t[8]=t[8]&63|128;const e=String.fromCharCode(...t);return btoa(e).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},vs=()=>({id:Q9(),width:"medium"}),yd=t=>({...vs(),columnType:"Following",...t}),q1=t=>({...vs(),columnType:"Notification",...t}),Z1=t=>({...vs(),columnType:"Relays",...t}),K1=()=>Z1({name:"日本語",relayUrls:W1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),bd=t=>({...vs(),columnType:"Posts",...t}),V1=t=>({...vs(),columnType:"Reactions",...t}),_d=t=>({...vs(),columnType:"Search",...t});var Ge;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},t.getValidEnumValues=o=>{const a=t.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return t.objectValues(l)},t.objectValues=o=>t.objectKeys(o).map(function(a){return o[a]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},t.find=(o,a)=>{for(const l of o)if(a(l))return l},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}t.joinValues=i,t.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ge||(Ge={}));var Su;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Su||(Su={}));const de=Ge.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Dr=t=>{switch(typeof t){case"undefined":return de.undefined;case"string":return de.string;case"number":return isNaN(t)?de.nan:de.number;case"boolean":return de.boolean;case"function":return de.function;case"bigint":return de.bigint;case"symbol":return de.symbol;case"object":return Array.isArray(t)?de.array:t===null?de.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?de.promise:typeof Map<"u"&&t instanceof Map?de.map:typeof Set<"u"&&t instanceof Set?de.set:typeof Date<"u"&&t instanceof Date?de.date:de.object;default:return de.unknown}},re=Ge.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Y9=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Bn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ge.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Bn.create=t=>new Bn(t);const Ks=(t,e)=>{let n;switch(t.code){case re.invalid_type:t.received===de.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case re.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ge.jsonStringifyReplacer)}`;break;case re.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ge.joinValues(t.keys,", ")}`;break;case re.invalid_union:n="Invalid input";break;case re.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ge.joinValues(t.options)}`;break;case re.invalid_enum_value:n=`Invalid enum value. Expected ${Ge.joinValues(t.options)}, received '${t.received}'`;break;case re.invalid_arguments:n="Invalid function arguments";break;case re.invalid_return_type:n="Invalid function return type";break;case re.invalid_date:n="Invalid date";break;case re.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ge.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case re.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case re.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case re.custom:n="Invalid input";break;case re.invalid_intersection_types:n="Intersection results could not be merged";break;case re.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case re.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ge.assertNever(t)}return{message:n}};let G1=Ks;function J9(t){G1=t}function Da(){return G1}const Ua=t=>{const{data:e,path:n,errorMaps:i,issueData:o}=t,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:e,defaultError:u}).message;return{...o,path:a,message:o.message||u}},X9=[];function he(t,e){const n=Ua({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Da(),Ks].filter(i=>!!i)});t.common.issues.push(n)}class Bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const i=[];for(const o of n){if(o.status==="aborted")return Oe;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Bt.mergeObjectSync(e,i)}static mergeObjectSync(e,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Oe;a.status==="dirty"&&e.dirty(),l.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:e.value,value:i}}}const Oe=Object.freeze({status:"aborted"}),Q1=t=>({status:"dirty",value:t}),zt=t=>({status:"valid",value:t}),Tu=t=>t.status==="aborted",Au=t=>t.status==="dirty",Vs=t=>t.status==="valid",Fa=t=>typeof Promise<"u"&&t instanceof Promise;var we;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(we||(we={}));class Qn{constructor(e,n,i,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const rg=(t,e)=>{if(Vs(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Bn(t.common.issues);return this._error=n,this._error}}};function Pe(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:i,description:o}=t;if(e&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ue{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Dr(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Dr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Bt,ctx:{common:e.parent.common,data:e.data,parsedType:Dr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Fa(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const i=this.safeParse(e,n);if(i.success)return i.data;throw i.error}safeParse(e,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dr(e)},a=this._parseSync({data:e,path:o.path,parent:o});return rg(o,a)}async parseAsync(e,n){const i=await this.safeParseAsync(e,n);if(i.success)return i.data;throw i.error}async safeParseAsync(e,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dr(e)},o=this._parse({data:e,path:i.path,parent:i}),a=await(Fa(o)?o:Promise.resolve(o));return rg(i,a)}refine(e,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=e(o),u=()=>a.addIssue({code:re.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(e,n){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(e){return new Nn({schema:this,typeName:Te.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return yr.create(this,this._def)}nullable(){return Ei.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return jn.create(this,this._def)}promise(){return os.create(this,this._def)}or(e){return Js.create([this,e],this._def)}and(e){return Xs.create(this,e,this._def)}transform(e){return new Nn({...Pe(this._def),schema:this,typeName:Te.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new io({...Pe(this._def),innerType:this,defaultValue:n,typeName:Te.ZodDefault})}brand(){return new J1({typeName:Te.ZodBranded,type:this,...Pe(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new qa({...Pe(this._def),innerType:this,catchValue:n,typeName:Te.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return vo.create(this,e)}readonly(){return Ka.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ek=/^c[^\s-]{8,}$/i,tk=/^[a-z][a-z0-9]*$/,nk=/^[0-9A-HJKMNP-TV-Z]{26}$/,rk=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,ik=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,sk="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ru;const ok=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,ak=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,lk=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function ck(t,e){return!!((e==="v4"||!e)&&ok.test(t)||(e==="v6"||!e)&&ak.test(t))}class Mn extends Ue{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==de.string){const a=this._getOrReturnCtx(e);return he(a,{code:re.invalid_type,expected:de.string,received:a.parsedType}),Oe}const i=new Bt;let o;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(o=this._getOrReturnCtx(e,o),he(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")e.data.length>a.value&&(o=this._getOrReturnCtx(e,o),he(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=e.data.length>a.value,u=e.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(e,o),l?he(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&he(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")ik.test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"email",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")ru||(ru=new RegExp(sk,"u")),ru.test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"emoji",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")rk.test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"uuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")ek.test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"cuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")tk.test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"cuid2",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")nk.test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"ulid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),he(o,{validation:"url",code:re.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"regex",code:re.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(e,o),he(o,{code:re.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(o=this._getOrReturnCtx(e,o),he(o,{code:re.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(o=this._getOrReturnCtx(e,o),he(o,{code:re.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?lk(a).test(e.data)||(o=this._getOrReturnCtx(e,o),he(o,{code:re.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?ck(e.data,a.version)||(o=this._getOrReturnCtx(e,o),he(o,{validation:"ip",code:re.invalid_string,message:a.message}),i.dirty()):Ge.assertNever(a);return{status:i.value,value:e.data}}_regex(e,n,i){return this.refinement(o=>e.test(o),{validation:n,code:re.invalid_string,...we.errToObj(i)})}_addCheck(e){return new Mn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...we.errToObj(e)})}url(e){return this._addCheck({kind:"url",...we.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...we.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...we.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...we.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...we.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...we.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...we.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(n=e?.offset)!==null&&n!==void 0?n:!1,...we.errToObj(e?.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...we.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...we.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...we.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...we.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...we.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...we.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...we.errToObj(n)})}nonempty(e){return this.min(1,we.errToObj(e))}trim(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Mn.create=t=>{var e;return new Mn({checks:[],typeName:Te.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Pe(t)})};function uk(t,e){const n=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(t.toFixed(o).replace(".","")),l=parseInt(e.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Zr extends Ue{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==de.number){const a=this._getOrReturnCtx(e);return he(a,{code:re.invalid_type,expected:de.number,received:a.parsedType}),Oe}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="int"?Ge.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),he(i,{code:re.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),he(i,{code:re.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),he(i,{code:re.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?uk(e.data,a.value)!==0&&(i=this._getOrReturnCtx(e,i),he(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),he(i,{code:re.not_finite,message:a.message}),o.dirty()):Ge.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Zr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Zr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:we.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:we.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:we.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:we.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ge.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Zr.create=t=>new Zr({checks:[],typeName:Te.ZodNumber,coerce:t?.coerce||!1,...Pe(t)});class Kr extends Ue{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==de.bigint){const a=this._getOrReturnCtx(e);return he(a,{code:re.invalid_type,expected:de.bigint,received:a.parsedType}),Oe}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),he(i,{code:re.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),he(i,{code:re.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),he(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ge.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Kr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Kr.create=t=>{var e;return new Kr({checks:[],typeName:Te.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Pe(t)})};class Gs extends Ue{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==de.boolean){const i=this._getOrReturnCtx(e);return he(i,{code:re.invalid_type,expected:de.boolean,received:i.parsedType}),Oe}return zt(e.data)}}Gs.create=t=>new Gs({typeName:Te.ZodBoolean,coerce:t?.coerce||!1,...Pe(t)});class xi extends Ue{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==de.date){const a=this._getOrReturnCtx(e);return he(a,{code:re.invalid_type,expected:de.date,received:a.parsedType}),Oe}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return he(a,{code:re.invalid_date}),Oe}const i=new Bt;let o;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(o=this._getOrReturnCtx(e,o),he(o,{code:re.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(o=this._getOrReturnCtx(e,o),he(o,{code:re.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ge.assertNever(a);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new xi({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:we.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:we.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}xi.create=t=>new xi({checks:[],coerce:t?.coerce||!1,typeName:Te.ZodDate,...Pe(t)});class za extends Ue{_parse(e){if(this._getType(e)!==de.symbol){const i=this._getOrReturnCtx(e);return he(i,{code:re.invalid_type,expected:de.symbol,received:i.parsedType}),Oe}return zt(e.data)}}za.create=t=>new za({typeName:Te.ZodSymbol,...Pe(t)});class Qs extends Ue{_parse(e){if(this._getType(e)!==de.undefined){const i=this._getOrReturnCtx(e);return he(i,{code:re.invalid_type,expected:de.undefined,received:i.parsedType}),Oe}return zt(e.data)}}Qs.create=t=>new Qs({typeName:Te.ZodUndefined,...Pe(t)});class Ys extends Ue{_parse(e){if(this._getType(e)!==de.null){const i=this._getOrReturnCtx(e);return he(i,{code:re.invalid_type,expected:de.null,received:i.parsedType}),Oe}return zt(e.data)}}Ys.create=t=>new Ys({typeName:Te.ZodNull,...Pe(t)});class ss extends Ue{constructor(){super(...arguments),this._any=!0}_parse(e){return zt(e.data)}}ss.create=t=>new ss({typeName:Te.ZodAny,...Pe(t)});class _i extends Ue{constructor(){super(...arguments),this._unknown=!0}_parse(e){return zt(e.data)}}_i.create=t=>new _i({typeName:Te.ZodUnknown,...Pe(t)});class wr extends Ue{_parse(e){const n=this._getOrReturnCtx(e);return he(n,{code:re.invalid_type,expected:de.never,received:n.parsedType}),Oe}}wr.create=t=>new wr({typeName:Te.ZodNever,...Pe(t)});class Ha extends Ue{_parse(e){if(this._getType(e)!==de.undefined){const i=this._getOrReturnCtx(e);return he(i,{code:re.invalid_type,expected:de.void,received:i.parsedType}),Oe}return zt(e.data)}}Ha.create=t=>new Ha({typeName:Te.ZodVoid,...Pe(t)});class jn extends Ue{_parse(e){const{ctx:n,status:i}=this._processInputParams(e),o=this._def;if(n.parsedType!==de.array)return he(n,{code:re.invalid_type,expected:de.array,received:n.parsedType}),Oe;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(he(n,{code:l?re.too_big:re.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(he(n,{code:re.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(he(n,{code:re.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Qn(n,l,n.path,u)))).then(l=>Bt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Qn(n,l,n.path,u)));return Bt.mergeArray(i,a)}get element(){return this._def.type}min(e,n){return new jn({...this._def,minLength:{value:e,message:we.toString(n)}})}max(e,n){return new jn({...this._def,maxLength:{value:e,message:we.toString(n)}})}length(e,n){return new jn({...this._def,exactLength:{value:e,message:we.toString(n)}})}nonempty(e){return this.min(1,e)}}jn.create=(t,e)=>new jn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:Te.ZodArray,...Pe(e)});function Qi(t){if(t instanceof dt){const e={};for(const n in t.shape){const i=t.shape[n];e[n]=yr.create(Qi(i))}return new dt({...t._def,shape:()=>e})}else return t instanceof jn?new jn({...t._def,type:Qi(t.element)}):t instanceof yr?yr.create(Qi(t.unwrap())):t instanceof Ei?Ei.create(Qi(t.unwrap())):t instanceof Yn?Yn.create(t.items.map(e=>Qi(e))):t}class dt extends Ue{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ge.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==de.object){const f=this._getOrReturnCtx(e);return he(f,{code:re.invalid_type,expected:de.object,received:f.parsedType}),Oe}const{status:i,ctx:o}=this._processInputParams(e),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof wr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const p=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:p._parse(new Qn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof wr){const f=this._def.unknownKeys;if(f==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(f==="strict")u.length>0&&(he(o,{code:re.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:f._parse(new Qn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const p of d){const g=await p.key;f.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return f}).then(f=>Bt.mergeObjectSync(i,f)):Bt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(e){return we.errToObj,new dt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=we.errToObj(e).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new dt({...this._def,unknownKeys:"strip"})}passthrough(){return new dt({...this._def,unknownKeys:"passthrough"})}extend(e){return new dt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new dt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Te.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new dt({...this._def,catchall:e})}pick(e){const n={};return Ge.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new dt({...this._def,shape:()=>n})}omit(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{e[i]||(n[i]=this.shape[i])}),new dt({...this._def,shape:()=>n})}deepPartial(){return Qi(this)}partial(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?n[i]=o:n[i]=o.optional()}),new dt({...this._def,shape:()=>n})}required(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof yr;)a=a._def.innerType;n[i]=a}}),new dt({...this._def,shape:()=>n})}keyof(){return Y1(Ge.objectKeys(this.shape))}}dt.create=(t,e)=>new dt({shape:()=>t,unknownKeys:"strip",catchall:wr.create(),typeName:Te.ZodObject,...Pe(e)});dt.strictCreate=(t,e)=>new dt({shape:()=>t,unknownKeys:"strict",catchall:wr.create(),typeName:Te.ZodObject,...Pe(e)});dt.lazycreate=(t,e)=>new dt({shape:t,unknownKeys:"strip",catchall:wr.create(),typeName:Te.ZodObject,...Pe(e)});class Js extends Ue{_parse(e){const{ctx:n}=this._processInputParams(e),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Bn(u.ctx.common.issues));return he(n,{code:re.invalid_union,unionErrors:l}),Oe}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:f});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Bn(d));return he(n,{code:re.invalid_union,unionErrors:u}),Oe}}get options(){return this._def.options}}Js.create=(t,e)=>new Js({options:t,typeName:Te.ZodUnion,...Pe(e)});const ka=t=>t instanceof to?ka(t.schema):t instanceof Nn?ka(t.innerType()):t instanceof no?[t.value]:t instanceof Vr?t.options:t instanceof ro?Object.keys(t.enum):t instanceof io?ka(t._def.innerType):t instanceof Qs?[void 0]:t instanceof Ys?[null]:null;class _l extends Ue{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==de.object)return he(n,{code:re.invalid_type,expected:de.object,received:n.parsedType}),Oe;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(he(n,{code:re.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Oe)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,i){const o=new Map;for(const a of n){const l=ka(a.shape[e]);if(!l)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(u)}`);o.set(u,a)}}return new _l({typeName:Te.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Pe(i)})}}function Ru(t,e){const n=Dr(t),i=Dr(e);if(t===e)return{valid:!0,data:t};if(n===de.object&&i===de.object){const o=Ge.objectKeys(e),a=Ge.objectKeys(t).filter(u=>o.indexOf(u)!==-1),l={...t,...e};for(const u of a){const d=Ru(t[u],e[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===de.array&&i===de.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let a=0;a<t.length;a++){const l=t[a],u=e[a],d=Ru(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===de.date&&i===de.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Xs extends Ue{_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=(a,l)=>{if(Tu(a)||Tu(l))return Oe;const u=Ru(a.value,l.value);return u.valid?((Au(a)||Au(l))&&n.dirty(),{status:n.value,value:u.data}):(he(i,{code:re.invalid_intersection_types}),Oe)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Xs.create=(t,e,n)=>new Xs({left:t,right:e,typeName:Te.ZodIntersection,...Pe(n)});class Yn extends Ue{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.array)return he(i,{code:re.invalid_type,expected:de.array,received:i.parsedType}),Oe;if(i.data.length<this._def.items.length)return he(i,{code:re.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Oe;!this._def.rest&&i.data.length>this._def.items.length&&(he(i,{code:re.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Qn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Bt.mergeArray(n,l)):Bt.mergeArray(n,a)}get items(){return this._def.items}rest(e){return new Yn({...this._def,rest:e})}}Yn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Yn({items:t,typeName:Te.ZodTuple,rest:null,...Pe(e)})};class eo extends Ue{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.object)return he(i,{code:re.invalid_type,expected:de.object,received:i.parsedType}),Oe;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Qn(i,u,i.path,u)),value:l._parse(new Qn(i,i.data[u],i.path,u))});return i.common.async?Bt.mergeObjectAsync(n,o):Bt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,i){return n instanceof Ue?new eo({keyType:e,valueType:n,typeName:Te.ZodRecord,...Pe(i)}):new eo({keyType:Mn.create(),valueType:e,typeName:Te.ZodRecord,...Pe(n)})}}class Wa extends Ue{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.map)return he(i,{code:re.invalid_type,expected:de.map,received:i.parsedType}),Oe;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Qn(i,u,i.path,[f,"key"])),value:a._parse(new Qn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,p=await d.value;if(f.status==="aborted"||p.status==="aborted")return Oe;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,p=d.value;if(f.status==="aborted"||p.status==="aborted")return Oe;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}}}}Wa.create=(t,e,n)=>new Wa({valueType:e,keyType:t,typeName:Te.ZodMap,...Pe(n)});class $i extends Ue{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.set)return he(i,{code:re.invalid_type,expected:de.set,received:i.parsedType}),Oe;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(he(i,{code:re.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(he(i,{code:re.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const p of d){if(p.status==="aborted")return Oe;p.status==="dirty"&&n.dirty(),f.add(p.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Qn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(e,n){return new $i({...this._def,minSize:{value:e,message:we.toString(n)}})}max(e,n){return new $i({...this._def,maxSize:{value:e,message:we.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}$i.create=(t,e)=>new $i({valueType:t,minSize:null,maxSize:null,typeName:Te.ZodSet,...Pe(e)});class Ji extends Ue{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==de.function)return he(n,{code:re.invalid_type,expected:de.function,received:n.parsedType}),Oe;function i(u,d){return Ua({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Da(),Ks].filter(f=>!!f),issueData:{code:re.invalid_arguments,argumentsError:d}})}function o(u,d){return Ua({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Da(),Ks].filter(f=>!!f),issueData:{code:re.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;if(this._def.returns instanceof os){const u=this;return zt(async function(...d){const f=new Bn([]),p=await u._def.args.parseAsync(d,a).catch(_=>{throw f.addIssue(i(d,_)),f}),g=await Reflect.apply(l,this,p);return await u._def.returns._def.type.parseAsync(g,a).catch(_=>{throw f.addIssue(o(g,_)),f})})}else{const u=this;return zt(function(...d){const f=u._def.args.safeParse(d,a);if(!f.success)throw new Bn([i(d,f.error)]);const p=Reflect.apply(l,this,f.data),g=u._def.returns.safeParse(p,a);if(!g.success)throw new Bn([o(p,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ji({...this._def,args:Yn.create(e).rest(_i.create())})}returns(e){return new Ji({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,i){return new Ji({args:e||Yn.create([]).rest(_i.create()),returns:n||_i.create(),typeName:Te.ZodFunction,...Pe(i)})}}class to extends Ue{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}to.create=(t,e)=>new to({getter:t,typeName:Te.ZodLazy,...Pe(e)});class no extends Ue{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return he(n,{received:n.data,code:re.invalid_literal,expected:this._def.value}),Oe}return{status:"valid",value:e.data}}get value(){return this._def.value}}no.create=(t,e)=>new no({value:t,typeName:Te.ZodLiteral,...Pe(e)});function Y1(t,e){return new Vr({values:t,typeName:Te.ZodEnum,...Pe(e)})}class Vr extends Ue{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),i=this._def.values;return he(n,{expected:Ge.joinValues(i),received:n.parsedType,code:re.invalid_type}),Oe}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),i=this._def.values;return he(n,{received:n.data,code:re.invalid_enum_value,options:i}),Oe}return zt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Vr.create(e)}exclude(e){return Vr.create(this.options.filter(n=>!e.includes(n)))}}Vr.create=Y1;class ro extends Ue{_parse(e){const n=Ge.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==de.string&&i.parsedType!==de.number){const o=Ge.objectValues(n);return he(i,{expected:Ge.joinValues(o),received:i.parsedType,code:re.invalid_type}),Oe}if(n.indexOf(e.data)===-1){const o=Ge.objectValues(n);return he(i,{received:i.data,code:re.invalid_enum_value,options:o}),Oe}return zt(e.data)}get enum(){return this._def.values}}ro.create=(t,e)=>new ro({values:t,typeName:Te.ZodNativeEnum,...Pe(e)});class os extends Ue{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==de.promise&&n.common.async===!1)return he(n,{code:re.invalid_type,expected:de.promise,received:n.parsedType}),Oe;const i=n.parsedType===de.promise?n.data:Promise.resolve(n.data);return zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}os.create=(t,e)=>new os({type:t,typeName:Te.ZodPromise,...Pe(e)});class Nn extends Ue{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Te.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=this._def.effect||null,a={addIssue:l=>{he(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const l=o.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}if(o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Oe:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Oe:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Vs(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Vs(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ge.assertNever(o)}}Nn.create=(t,e,n)=>new Nn({schema:t,typeName:Te.ZodEffects,effect:e,...Pe(n)});Nn.createWithPreprocess=(t,e,n)=>new Nn({schema:e,effect:{type:"preprocess",transform:t},typeName:Te.ZodEffects,...Pe(n)});class yr extends Ue{_parse(e){return this._getType(e)===de.undefined?zt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}yr.create=(t,e)=>new yr({innerType:t,typeName:Te.ZodOptional,...Pe(e)});class Ei extends Ue{_parse(e){return this._getType(e)===de.null?zt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ei.create=(t,e)=>new Ei({innerType:t,typeName:Te.ZodNullable,...Pe(e)});class io extends Ue{_parse(e){const{ctx:n}=this._processInputParams(e);let i=n.data;return n.parsedType===de.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}io.create=(t,e)=>new io({innerType:t,typeName:Te.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Pe(e)});class qa extends Ue{_parse(e){const{ctx:n}=this._processInputParams(e),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Fa(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}qa.create=(t,e)=>new qa({innerType:t,typeName:Te.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Pe(e)});class Za extends Ue{_parse(e){if(this._getType(e)!==de.nan){const i=this._getOrReturnCtx(e);return he(i,{code:re.invalid_type,expected:de.nan,received:i.parsedType}),Oe}return{status:"valid",value:e.data}}}Za.create=t=>new Za({typeName:Te.ZodNaN,...Pe(t)});const dk=Symbol("zod_brand");class J1 extends Ue{_parse(e){const{ctx:n}=this._processInputParams(e),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class vo extends Ue{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Oe:a.status==="dirty"?(n.dirty(),Q1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Oe:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,n){return new vo({in:e,out:n,typeName:Te.ZodPipeline})}}class Ka extends Ue{_parse(e){const n=this._def.innerType._parse(e);return Vs(n)&&(n.value=Object.freeze(n.value)),n}}Ka.create=(t,e)=>new Ka({innerType:t,typeName:Te.ZodReadonly,...Pe(e)});const X1=(t,e={},n)=>t?ss.create().superRefine((i,o)=>{var a,l;if(!t(i)){const u=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):ss.create(),fk={object:dt.lazycreate};var Te;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(Te||(Te={}));const hk=(t,e={message:`Input not instance of ${t.name}`})=>X1(n=>n instanceof t,e),ev=Mn.create,tv=Zr.create,pk=Za.create,gk=Kr.create,nv=Gs.create,vk=xi.create,mk=za.create,yk=Qs.create,bk=Ys.create,_k=ss.create,wk=_i.create,xk=wr.create,$k=Ha.create,Ek=jn.create,kk=dt.create,Ck=dt.strictCreate,Sk=Js.create,Tk=_l.create,Ak=Xs.create,Rk=Yn.create,Ik=eo.create,Ok=Wa.create,Lk=$i.create,Pk=Ji.create,Mk=to.create,Bk=no.create,jk=Vr.create,Nk=ro.create,Dk=os.create,ig=Nn.create,Uk=yr.create,Fk=Ei.create,zk=Nn.createWithPreprocess,Hk=vo.create,Wk=()=>ev().optional(),qk=()=>tv().optional(),Zk=()=>nv().optional(),Kk={string:t=>Mn.create({...t,coerce:!0}),number:t=>Zr.create({...t,coerce:!0}),boolean:t=>Gs.create({...t,coerce:!0}),bigint:t=>Kr.create({...t,coerce:!0}),date:t=>xi.create({...t,coerce:!0})},Vk=Oe;var yt=Object.freeze({__proto__:null,defaultErrorMap:Ks,setErrorMap:J9,getErrorMap:Da,makeIssue:Ua,EMPTY_PATH:X9,addIssueToContext:he,ParseStatus:Bt,INVALID:Oe,DIRTY:Q1,OK:zt,isAborted:Tu,isDirty:Au,isValid:Vs,isAsync:Fa,get util(){return Ge},get objectUtil(){return Su},ZodParsedType:de,getParsedType:Dr,ZodType:Ue,ZodString:Mn,ZodNumber:Zr,ZodBigInt:Kr,ZodBoolean:Gs,ZodDate:xi,ZodSymbol:za,ZodUndefined:Qs,ZodNull:Ys,ZodAny:ss,ZodUnknown:_i,ZodNever:wr,ZodVoid:Ha,ZodArray:jn,ZodObject:dt,ZodUnion:Js,ZodDiscriminatedUnion:_l,ZodIntersection:Xs,ZodTuple:Yn,ZodRecord:eo,ZodMap:Wa,ZodSet:$i,ZodFunction:Ji,ZodLazy:to,ZodLiteral:no,ZodEnum:Vr,ZodNativeEnum:ro,ZodPromise:os,ZodEffects:Nn,ZodTransformer:Nn,ZodOptional:yr,ZodNullable:Ei,ZodDefault:io,ZodCatch:qa,ZodNaN:Za,BRAND:dk,ZodBranded:J1,ZodPipeline:vo,ZodReadonly:Ka,custom:X1,Schema:Ue,ZodSchema:Ue,late:fk,get ZodFirstPartyTypeKind(){return Te},coerce:Kk,any:_k,array:Ek,bigint:gk,boolean:nv,date:vk,discriminatedUnion:Tk,effect:ig,enum:jk,function:Pk,instanceof:hk,intersection:Ak,lazy:Mk,literal:Bk,map:Ok,nan:pk,nativeEnum:Nk,never:xk,null:bk,nullable:Fk,number:tv,object:kk,oboolean:Zk,onumber:qk,optional:Uk,ostring:Wk,pipeline:Hk,preprocess:zk,promise:Dk,record:Ik,set:Lk,strictObject:Ck,string:ev,symbol:mk,transformer:ig,tuple:Rk,undefined:yk,union:Sk,unknown:wk,void:$k,NEVER:Vk,ZodIssueCode:re,quotelessJson:Y9,ZodError:Bn});const Gk=/^[0-9a-f]{64}$/,so=t=>{const e=typeof t=="string"&&t.length===64&&Gk.test(t);return e||console.warn("invalid id is ignored: ",t),e},Qk=t=>e=>t.safeParse(e).success,Yk=yt.tuple([yt.literal("emoji"),yt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),yt.string().url()]);class Jk{findTagsByName(e){return this.tags.filter(([n])=>n===e)}findFirstTagByName(e){return this.tags.find(([n])=>n===e)}findLastTagByName(e){return this.tags.findLast(([n])=>n===e)}pTags(){return this.tags.filter(([e,n])=>e==="p"&&so(n))}eTags(){return this.tags.filter(([e,n])=>e==="e"&&so(n))}emojiTags(){return this.tags.filter(Qk(Yk))}taggedPubkeys(){return yi(this.pTags().map(([,e])=>e))}taggedEventIds(){return this.eTags().map(([,e])=>e)}lastTaggedEventId(){const e=this.taggedEventIds();if(e.length!==0)return e[e.length-1]}getEmojiUrl(e){const n=this.emojiTags().find(([,o])=>o===e);if(n==null)return;const[,,i]=n;return i}}class wd extends Jk{constructor(e){super(),this.rawEvent=e}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const Xk=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,sg=/^:(\w+):$/,eC=t=>{if(t.isLikeOrDislike())return{type:"LikeDislike",content:t.content};if(t.isEmoji())return{type:"Emoji",content:t.content};if(t.isCustomEmoji()){const e=t.getShortcode(),n=t.getUrl();if(e!=null&&n!=null)return{type:"CustomEmoji",content:t.content,shortcode:e,url:n}}return{type:"Unknown",content:t.content}};class tC extends wd{constructor(e){if(e.kind!==ct.Reaction)throw new TypeError("kind should be 7");super(e)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return Xk.test(this.content)}isCustomEmoji(){return sg.test(this.content)}getShortcode(){return this.content.match(sg)?.[1]}getUrl(){const e=this.getShortcode();if(e!=null)return this.getEmojiUrl(e)}toReactionTypes(){return eC(this)}}const{decode:nC}=po,rC=["reply","root","mention"],iC=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,sC=/(?:#\[(?<idx>\d+)\])/g,oC=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,aC=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,lC=/:(?<emoji>\w+):/gu,xd=t=>{const e=[...t.matchAll(iC),...t.matchAll(sC),...t.matchAll(oC),...t.matchAll(aC),...t.matchAll(lC)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=t.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return e.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=nC(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<t.length&&o(t.length),i},cC=t=>t==null?!1:rC.includes(t),uC=(t,{tagIndex:e,content:n})=>{const i=t.tags[e];if(i==null)return;const o=i[0];if(o==="p"&&so(i[1]))return{type:"MentionedUser",tagIndex:e,content:n,pubkey:i[1]};if(o==="e"&&so(i[1])){const a=cC(i[3])?i[3]:void 0;return{type:"MentionedEvent",tagIndex:e,content:n,eventId:i[1],marker:a}}},rv=(t,e)=>t.map(n=>{if(n.type==="TagReference"){const i=uC(e,n);return{...n,type:"TagReferenceResolved",reference:i}}if(n.type==="CustomEmoji"){const i=e.getEmojiUrl(n.shortcode);return{...n,type:"CustomEmojiResolved",url:i}}return n}),dC=t=>{const e=t.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&so(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:e.length===1?"reply":o===0?"root":e.length===2||o===e.length-1?"reply":"mention";return e.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};class fC extends wd{#e;#t;parsed(){if(this.#t!=null)return this.#t;const e=xd(this.content),n=rv(e,this);return this.#t=n,n}markedEventTags(){return this.#e!=null?this.#e:(this.#e=dC(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:e})=>e==="reply")}rootEvent(){return this.markedEventTags().find(({marker:e})=>e==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:e})=>e==="mention")}contentWarning(){const e=this.findLastTagByName("content-warning");return e==null?{contentWarning:!1}:{contentWarning:!0,reason:(e[1]?.length??0)>0?e[1]:void 0}}containsEventMention(e){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===e);return this.containsEventNote(e)||this.containsEventMentionIndex(n)}containsEventMentionIndex(e){return e<0||e>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReferenceResolved"&&n.tagIndex===e)}containsEventNote(e){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===e||n.data.type==="note"&&n.data.data===e))}}let hC=class extends fC{constructor(e){if(e.kind!==ct.Text)throw new TypeError("kind should be 1");super(e)}};const Ur=t=>new wd(t),iv=t=>new hC(t),Va=t=>new tC(t),pC=()=>{const t=[...V9];return window.navigator.language.includes("ja")&&t.push(...G9),t},sv=()=>({relayUrls:pC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,embedding:{twitter:!0,youtube:!0,ogp:!0},hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),gC=t=>JSON.stringify(t),vC=t=>({...sv(),...JSON.parse(t)}),mC=S4(()=>window.localStorage,gC,vC),[Vi,Qt]=T4("RabbitConfig",sv(),mC),et=()=>{const t=ht(),e=E=>{Qt("relayUrls",I=>yi([...I,E]))},n=E=>{Qt("relayUrls",I=>I.filter(O=>O!==E))},i=E=>{Qt("mutedPubkeys",I=>yi([...I,E]))},o=E=>{Qt("mutedPubkeys",I=>I.filter(O=>O!==E))},a=E=>{Qt("mutedKeywords",I=>yi([...I,E]))},l=E=>{Qt("mutedKeywords",I=>I.filter(O=>O!==E))},u=E=>{Qt("columns",I=>{const O=I.findIndex(A=>A.id===E.id);if(O>=0){const A=[...I];return A.splice(O,1,E),A}return[...I,E]})},d=(E,I)=>{Qt("columns",O=>{const A=I-1,F=Math.max(Math.min(A,O.length),0),N=O.findIndex(ie=>ie.id===E);if(N<0||F===N)return O;console.log(N,F);const K=[...O],[ee]=K.splice(N,1);return K.splice(F,0,ee),K})},f=E=>{Qt("columns",I=>I.filter(O=>O.id!==E))},p=E=>{Qt("customEmojis",I=>({...I,[E.shortcode]:E}))},g=E=>{Qt("customEmojis",I=>{const O=Object.fromEntries(E.map(A=>[A.shortcode,A]));return{...I,...O}})},m=E=>{Qt("customEmojis",I=>({...I,[E]:void 0}))},_=E=>Vi.customEmojis[E],w=E=>H1.sortBy(Object.values(Vi.customEmojis).filter(({shortcode:I})=>I.includes(E)),[I=>I.shortcode.length]),$=E=>Vi.mutedPubkeys.includes(E),x=E=>E.kind===ct.Text?Vi.mutedKeywords.some(I=>E.content.includes(I)):!1;return{config:()=>Vi,setConfig:Qt,addRelay:e,removeRelay:n,saveColumn:u,moveColumn:d,removeColumn:f,initializeColumns:({pubkey:E})=>{if((Vi.columns?.length??0)>0)return;const I=[yd({width:"widest",pubkey:E}),q1({pubkey:E}),bd({name:t()("column.myPosts"),pubkey:E}),V1({name:t()("column.myReactions"),pubkey:E})];navigator.language.includes("ja")&&I.splice(2,0,K1()),Qt("columns",()=>[...I])},saveEmoji:p,saveEmojis:g,removeEmoji:m,getEmoji:_,searchEmojis:w,addMutedPubkey:i,removeMutedPubkey:o,addMutedKeyword:a,removeMutedKeyword:l,isPubkeyMuted:$,shouldMuteEvent:E=>{const I=Ur(E);return $(E.pubkey)||I.taggedPubkeys().some($)||E.kind===ct.Text&&x(E)}}},$d=(t,e)=>{const n=t.created_at-e.created_at;return n!==0?n:t.id===e.id?0:t.id>e.id?1:-1},ov=t=>{if(t.length!==0)return t.length===1?t[0]:t.reduce((e,n)=>$d(e,n)>0?e:n)},Iu=t=>Array.from(t).sort((e,n)=>-$d(e,n)),[yC]=Re(new IE({eoseSubTimeout:12e3})),Ed=()=>yC,[av,og]=es({activeSubscriptions:0,activeBatchSubscriptions:0});b4(()=>{mr(()=>{console.debug("stats",{...av})})});const lv=()=>({stats:av,setActiveSubscriptions:n=>og("activeSubscriptions",n),setActiveBatchSubscriptions:n=>og("activeBatchSubscriptions",n)});let ag=0;const bC=()=>{const t=ag;return ag+=1,t};class _C{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(e){this.id=bC(),this.req=e}#n(e){this.#e.forEach(n=>{n(e)})}#r(){this.#t.forEach(e=>{e()})}update(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=e,this.#n(e)}updateWith(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(e(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(e){this.#e.push(e)}subscribe(e){this.onUpdate(e)}onComplete(e){this.#t.push(e)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const e=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([e,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((e,n)=>{this.onComplete(()=>{this.res!=null?e(this.res):n(new Error("result was not set"))})})}}const wC=t=>{const e=He(t),n=He(()=>e().batchSize??100),i=He(()=>e().interval??2e3),[o,a]=Re([]);let l;const u=()=>{const{executor:g}=e(),m=o();m.length>0&&(a([]),g(m)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(m=>[...m,g]):(u(),a([g])),d()},removeTask:g=>{a(m=>m.filter(_=>_!==g))}}};class ms extends _C{addEvent(e){this.updateWith(n=>fd.insertEventIntoDescendingList(n??[],e))}firstEventPromise(){return this.toUpdatePromise().then(e=>e[0])}latestEventPromise(){return this.toCompletePromise().then(e=>{const n=ov(e);if(n==null)throw new Error("event not found");return n})}}const ci=t=>e=>e.req.type===t;let Ou=0;const{setActiveBatchSubscriptions:xC}=lv();setInterval(()=>{xC(Ou)},1e3);const $C=t=>t.kind>=3e4&&t.kind<4e4,lg=({kind:t,author:e,identifier:n})=>`${t}:${e}:${n}`,ui=({keyExtractor:t,filtersBuilder:e,eventKeyExtractor:n})=>{const i=new Map;return{tasks:i,add:u=>{const d=t(u.req),f=i.get(d)??[];i.set(d,[...f,u])},buildFilter:()=>{const u=Array.from(i.keys());return u.length===0?[]:e(u)},resolve:u=>{const d=n(u);if(d==null)return!1;const f=i.get(d)??[];return f.length===0?!1:(f.forEach(p=>{p.addEvent(u)}),!0)}}},EC=t=>{const e=ui({keyExtractor:g=>g.eventId,filtersBuilder:g=>[{ids:g}],eventKeyExtractor:g=>g.id}),n=ui({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[ct.Metadata],authors:g}],eventKeyExtractor:g=>g.pubkey}),i=ui({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[ct.Contacts],authors:g}],eventKeyExtractor:g=>g.pubkey}),o=ui({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[ct.Repost],"#e":g}],eventKeyExtractor:g=>Ur(g).lastTaggedEventId()}),a=ui({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[ct.Reaction],"#e":g}],eventKeyExtractor:g=>Ur(g).lastTaggedEventId()}),l=ui({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[ct.Zap],"#e":g}],eventKeyExtractor:g=>Ur(g).lastTaggedEventId()}),u=ui({keyExtractor:lg,filtersBuilder:g=>{const m=[];return g.forEach(_=>{const w=u.tasks.get(_)?.[0];if(w==null)return;const{kind:$,author:x,identifier:C}=w.req;m.push({kinds:[$],authors:[x],"#d":[C]})}),m},eventKeyExtractor:g=>{const m=Ur(g).findFirstTagByName("d")?.[1];if(m!=null)return lg({kind:g.kind,author:g.pubkey,identifier:m})}}),d=g=>{if(ci("Event")(g))e.add(g);else if(ci("Profile")(g))n.add(g);else if(ci("Followings")(g))i.add(g);else if(ci("Reposts")(g))o.add(g);else if(ci("Reactions")(g))a.add(g);else if(ci("ZapReceipts")(g))l.add(g);else if(ci("ParameterizedReplaceableEvent")(g))u.add(g);else throw new Error(`unknown task: ${g.req.type}`)},f=()=>[...e.buildFilter(),...n.buildFilter(),...i.buildFilter(),...o.buildFilter(),...a.buildFilter(),...l.buildFilter(),...u.buildFilter()],p=g=>{g.kind===ct.Metadata&&n.resolve(g)||g.kind===ct.Contacts&&i.resolve(g)||g.kind===ct.Repost&&o.resolve(g)||g.kind===ct.Reaction&&a.resolve(g)||g.kind===ct.Zap&&l.resolve(g)||$C(g)&&u.resolve(g)||e.resolve(g)};return t.forEach(g=>{d(g)}),{tasks:{eventTasks:e,profileTasks:n,followingsTasks:i,repostsTasks:o,reactionsTasks:a,zapReceiptsTasks:l,parameterizedReplaceableEventsTasks:u},add:d,buildFilters:f,resolve:p}},{addTask:kC,removeTask:CC}=wC(()=>({interval:2e3,batchSize:150,executor:t=>{const e=EC(t),n=e.buildFilters();if(n.length===0)return;const i=()=>{t.forEach(u=>{u.complete()})},{config:o}=et(),l=Ed()().sub(o().relayUrls,n,{});Ou+=1,l.on("event",u=>{e.resolve(u)}),l.on("eose",()=>{i(),l.unsub(),Ou-=1})}})),wl=({task:t,signal:e})=>{kC(t),e?.addEventListener("abort",()=>CC(t))};class SC extends Error{}const Hr=(t,e)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=e!=null?`TimeoutError: ${e}`:"TimeoutError";a(new SC(l))},t)});return Promise.race([n,i])},TC=t=>{const e=He(t),n=Ci(()=>["useEvent",e()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new ms({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return wl({task:d,signal:a}),Hr(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},xn=t=>e=>t.some(n=>n==null)?null:e(t),AC=B("<span>"),RC=B('<div class="truncate"> '),oo=t=>{const e=ht(),[n,i]=_4(t,["eventId"]),{shouldMuteEvent:o}=et(),{event:a,query:l}=TC(()=>xn([n.eventId])(([d])=>({eventId:d}))),u=()=>{const d=a();return d!=null&&o(d)};return S(Pn,{get fallback(){return(()=>{const d=AC();return k(d,()=>e()("post.failedToFetchEvent"),null),k(d,()=>t.eventId,null),d})()},get children(){return[S(Ye,{get when(){return u()},children:null}),S(Ye,{get when(){return a()},keyed:!0,children:d=>S(nm,w4({event:d},i))}),S(Ye,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=RC(),p=f.firstChild;return k(f,()=>e()("general.loading"),p),k(f,S(Zs,{eventId:d}),null),f})()})]}})},IC=t=>{if(t==null||t.length===0)throw new TypeError("content is empty or null");return JSON.parse(t)},OC=t=>{try{return IC(t)}catch(e){return console.warn("failed to parse profile (kind 0): ",e,t),null}},cv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve(null);const l=a.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return a.onUpdate(u=>{const d=ov(u);(o==null||d!=null&&$d(d,o)>=0)&&e.setQueryData(n,d)}),wl({task:a,signal:i}),Hr(15e3,`${JSON.stringify(n)}`)(l)},uv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve([]);const l=a.toUpdatePromise().catch(()=>[]);return a.onUpdate(u=>{e.setQueryData(n,()=>{if(o==null)return u;const d=H1.uniqBy([...o,...u],f=>f.id);return Iu(d)})}),wl({task:a,signal:i}),Hr(15e3,`${JSON.stringify(n)}`)(l)},ys=t=>{const e=us(),n=He(t),i=He(()=>["useProfile",n()]),o=Ci(i,cv({taskProvider:([,d])=>{if(d==null)return null;const{pubkey:f}=d;return new ms({type:"Profile",pubkey:f})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1}),a=()=>o.data;return{profile:He(()=>{if(o.data==null)return null;const{content:d}=o.data;return OC(d)}),event:a,invalidateProfile:()=>e.invalidateQueries(i()),query:o}},{npubEncode:LC}=po,mo=t=>{try{return LC(t)}catch{return console.error("failed to encode pubkey into npub",t),t}},kd=t=>{const{profile:e}=ys(()=>({pubkey:t.pubkey}));return S(Pn,{get fallback(){return mo(t.pubkey)},get children(){return[S(Ye,{get when(){return(e()?.display_name?.length??0)>0},get children(){return e()?.display_name}}),S(Ye,{get when(){return(e()?.name?.length??0)>0},get children(){return["@",He(()=>e()?.name)]}})]}})},dv=t=>{const[e,n]=Re(new Date);return mr(()=>{const i=setInterval(()=>{n(new Date)},t().interval);br(()=>clearInterval(i))}),e},PC=t=>{switch(t.kind){case"now":return"now";case"seconds":return`${t.value}s`;case"minutes":return`${t.value}m`;case"hours":return`${t.value}h`;case"days":return`${t.value}d`;case"abs":default:return t.value.toLocaleDateString()}},cg=t=>`${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`,MC=t=>{switch(t.kind){case"today":return t.value.toLocaleTimeString();case"yesterday":case"abs":default:return t.value.toLocaleString()}},BC=t=>{switch(t.kind){case"today":return cg(t.value);case"yesterday":return`昨日 ${cg(t.value)}`;case"abs":default:return t.value.toLocaleString()}},jC=(t,e)=>Math.round(Number(e)-Number(t))/1e3,NC=(t,e)=>{const n=jC(t,e);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:t}},ug=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),DC=t=>new Date(+t-24*60*60*1e3),fv=(t,e,n)=>ug(t,e)?n({kind:"today",value:t}):ug(t,DC(e))?n({kind:"yesterday",value:t}):n({kind:"abs",value:t}),UC=(t,e=new Date)=>fv(t,e,MC),FC=(t,e=new Date)=>fv(t,e,BC),dg=(t,e=new Date,n=PC)=>n(NC(t,e)),fg=dv(()=>({interval:7e3})),hg=dv(()=>({interval:60*1e3})),hv=()=>{const{config:t}=et();return e=>{switch(t().dateFormat){case"absolute-long":return UC(e,hg());case"absolute-short":return FC(e,hg());case"relative":return dg(e,fg());default:return dg(e,fg())}}},[zC,di]=Re({type:"Closed"}),Qr=()=>({modalState:zC,setModalState:di,showLogin:()=>{di({type:"Login"})},showProfile:l=>{di({type:"Profile",pubkey:l})},showProfileEdit:()=>{di({type:"ProfileEdit"})},showAddColumn:()=>{di({type:"AddColumn"})},showAbout:()=>{di({type:"About"})},closeModal:()=>{di({type:"Closed"})}}),HC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="select-text hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),WC=t=>{const e=ht(),{showProfile:n}=Qr(),i=hv(),o=He(()=>Ur(t.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=HC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,m=u.nextSibling;return k(d,S(z1,{})),p.$$click=()=>n(t.event.pubkey),k(p,S(kd,{get pubkey(){return t.event.pubkey}})),k(f,()=>e()("notification.reposted"),null),k(g,()=>i(o().createdAtAsDate())),k(m,S(oo,{get eventId(){return a()}})),l})()};mt(["click"]);const qC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),ZC=(t={})=>(()=>{const e=qC();return st(e,t,!0,!0),e})(),KC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),pv=(t={})=>(()=>{const e=KC();return st(e,t,!0,!0),e})(),VC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),gv=(t={})=>(()=>{const e=VC();return st(e,t,!0,!0),e})(),GC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),vv=(t={})=>(()=>{const e=GC();return st(e,t,!0,!0),e})(),QC=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),mv=(t={})=>(()=>{const e=QC();return st(e,t,!0,!0),e})(),YC=B('<div class="absolute z-20">'),JC=B('<div><button type="button" class="flex items-center">'),Cd=t=>{let e,n;const[i,o]=Re(!1),[a,l]=Re({}),u=x4(()=>t.children),d=()=>o(!1),f=()=>o(w=>!w),p=w=>{const $=w.target;$!=null&&!n?.contains($)&&d()},g=()=>{document.addEventListener("mousedown",p)},m=()=>{document.removeEventListener("mousedown",p)},_=()=>{if(e==null||n==null)return;const w=e?.getBoundingClientRect(),$=n?.getBoundingClientRect();let{top:x,left:C}=w;t.position==="left"?C-=w.width:t.position==="right"?C+=w.width:t.position==="top"?(x-=w.height,C-=w.left+w.width/2):(x+=w.height,C+=w.width/2),x=Math.min(x,window.innerHeight-$.height),C=Math.min(C,window.innerWidth-$.width),l({left:`${C}px`,top:`${x}px`})};return mr(()=>{i()?(g(),t.onOpen?.()):(m(),t.onClose?.())}),mr(il(u,()=>{_()})),mr(()=>{i()&&_()}),xr(()=>{t.ref?.({close:d,elem:n})}),br(()=>m()),(()=>{const w=JC(),$=w.firstChild;$.$$click=()=>{f(),_()};const x=e;return typeof x=="function"?Vn(x,$):e=$,k($,()=>t.button),k(w,S(E4,{get children(){const C=YC(),M=n;return typeof M=="function"?Vn(M,C):n=C,k(C,u),Be(E=>{const I=!i(),O=!!i(),A=a();return I!==E._v$&&C.classList.toggle("hidden",E._v$=I),O!==E._v$2&&C.classList.toggle("block",E._v$2=O),E._v$3=$4(C,A,E._v$3),E},{_v$:void 0,_v$2:void 0,_v$3:void 0}),C}}),null),w})()};mt(["click"]);const XC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),eS=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),tS=t=>{const e=()=>{t.item?.onSelect?.(),t.onClose()};return(()=>{const n=XC(),i=n.firstChild;return i.$$click=e,k(i,()=>t.item.content()),n})()},yv=t=>{let e;const n=()=>e?.close();return S(Cd,{ref:i=>{e=i},get button(){return t.children},position:"bottom",get children(){const i=eS();return k(i,S(Ft,{get each(){return t.menu.filter(o=>o.when==null||o.when())},children:o=>S(tS,{item:o,onClose:n})})),i}})};mt(["click"]);const nS=B('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),pg=B('<span class="truncate">'),rS=B('<img class="h-4 max-w-[3rem]">'),iS=t=>t.type==="LikeDislike"&&t.content==="+",bv=t=>S(Pn,{get fallback(){return(()=>{const e=pg();return k(e,()=>t.reactionTypes.content),e})()},get children(){return[S(Ye,{get when(){return iS(t.reactionTypes)},get children(){const e=nS();return k(e,S(mv,{})),e}}),S(Ye,{get when(){return t.reactionTypes.type==="Emoji"&&t.reactionTypes},keyed:!0,children:({content:e})=>(()=>{const n=pg();return k(n,e),n})()}),S(Ye,{get when(){return t.reactionTypes.type==="CustomEmoji"&&t.reactionTypes},keyed:!0,children:({shortcode:e,url:n})=>(()=>{const i=rS();return ze(i,"src",n),ze(i,"alt",`:${e}:`),i})()})]}});function _v(t){return t&&t.__esModule?t.default:t}function Ln(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var xl,Ee,wv,Fs,xv,gg,Ga={},$v=[],sS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fr(t,e){for(var n in e)t[n]=e[n];return t}function Ev(t){var e=t.parentNode;e&&e.removeChild(t)}function Lu(t,e,n){var i,o,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?o=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?xl.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return Ca(t,l,i,o,null)}function Ca(t,e,n,i,o){var a={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++wv};return o==null&&Ee.vnode!=null&&Ee.vnode(a),a}function pr(){return{current:null}}function as(t){return t.children}function Kn(t,e){this.props=t,this.context=e}function ls(t,e){if(e==null)return t.__?ls(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?ls(t):null}function kv(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return kv(t)}}function vg(t){(!t.__d&&(t.__d=!0)&&Fs.push(t)&&!Qa.__r++||gg!==Ee.debounceRendering)&&((gg=Ee.debounceRendering)||xv)(Qa)}function Qa(){for(var t;Qa.__r=Fs.length;)t=Fs.sort(function(e,n){return e.__v.__b-n.__v.__b}),Fs=[],t.some(function(e){var n,i,o,a,l,u;e.__d&&(l=(a=(n=e).__v).__e,(u=n.__P)&&(i=[],(o=Fr({},a)).__v=a.__v+1,Sd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??ls(a),a.__h),Av(i,a),a.__e!=l&&kv(a)))})}function Cv(t,e,n,i,o,a,l,u,d,f){var p,g,m,_,w,$,x,C=i&&i.__k||$v,M=C.length;for(n.__k=[],p=0;p<e.length;p++)if((_=n.__k[p]=(_=e[p])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Ca(null,_,null,null,_):Array.isArray(_)?Ca(as,{children:_},null,null,null):_.__b>0?Ca(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(m=C[p])===null||m&&_.key==m.key&&_.type===m.type)C[p]=void 0;else for(g=0;g<M;g++){if((m=C[g])&&_.key==m.key&&_.type===m.type){C[g]=void 0;break}m=null}Sd(t,_,m=m||Ga,o,a,l,u,d,f),w=_.__e,(g=_.ref)&&m.ref!=g&&(x||(x=[]),m.ref&&x.push(m.ref,null,_),x.push(g,_.__c||w,_)),w!=null?($==null&&($=w),typeof _.type=="function"&&_.__k===m.__k?_.__d=d=Sv(_,d,t):d=Tv(t,_,m,C,w,d),typeof n.type=="function"&&(n.__d=d)):d&&m.__e==d&&d.parentNode!=t&&(d=ls(m))}for(n.__e=$,p=M;p--;)C[p]!=null&&(typeof n.type=="function"&&C[p].__e!=null&&C[p].__e==n.__d&&(n.__d=ls(i,p+1)),Iv(C[p],C[p]));if(x)for(p=0;p<x.length;p++)Rv(x[p],x[++p],x[++p])}function Sv(t,e,n){for(var i,o=t.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=t,e=typeof i.type=="function"?Sv(i,e,n):Tv(n,i,i,o,i.__e,e));return e}function Ya(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Ya(n,e)}):e.push(t)),e}function Tv(t,e,n,i,o,a){var l,u,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;t.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function oS(t,e,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in e||Ja(t,a,null,n[a],i);for(a in e)o&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||Ja(t,a,e[a],n[a],i)}function mg(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||sS.test(e)?n:n+"px"}function Ja(t,e,n,i,o){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||mg(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||mg(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?i||t.addEventListener(e,a?bg:yg,a):t.removeEventListener(e,a?bg:yg,a);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function yg(t){this.l[t.type+!1](Ee.event?Ee.event(t):t)}function bg(t){this.l[t.type+!0](Ee.event?Ee.event(t):t)}function Sd(t,e,n,i,o,a,l,u,d){var f,p,g,m,_,w,$,x,C,M,E,I=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,a=[u]),(f=Ee.__b)&&f(e);try{e:if(typeof I=="function"){if(x=e.props,C=(f=I.contextType)&&i[f.__c],M=f?C?C.props.value:f.__:i,n.__c?$=(p=e.__c=n.__c).__=p.__E:("prototype"in I&&I.prototype.render?e.__c=p=new I(x,M):(e.__c=p=new Kn(x,M),p.constructor=I,p.render=lS),C&&C.sub(p),p.props=x,p.state||(p.state={}),p.context=M,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),I.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Fr({},p.__s)),Fr(p.__s,I.getDerivedStateFromProps(x,p.__s))),m=p.props,_=p.state,g)I.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(I.getDerivedStateFromProps==null&&x!==m&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,M),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,M)===!1||e.__v===n.__v){p.props=x,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,M),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(m,_,w)})}p.context=M,p.props=x,p.state=p.__s,(f=Ee.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Fr(Fr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(w=p.getSnapshotBeforeUpdate(m,_)),E=f!=null&&f.type===as&&f.key==null?f.props.children:f,Cv(t,Array.isArray(E)?E:[E],e,n,i,o,a,l,u,d),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),$&&(p.__E=p.__=null),p.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=aS(n.__e,e,n,i,o,a,l,d);(f=Ee.diffed)&&f(e)}catch(O){e.__v=null,(d||a!=null)&&(e.__e=u,e.__h=!!d,a[a.indexOf(u)]=null),Ee.__e(O,e,n)}}function Av(t,e){Ee.__c&&Ee.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){Ee.__e(i,n.__v)}})}function aS(t,e,n,i,o,a,l,u){var d,f,p,g=n.props,m=e.props,_=e.type,w=0;if(_==="svg"&&(o=!0),a!=null){for(;w<a.length;w++)if((d=a[w])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){t=d,a[w]=null;break}}if(t==null){if(_===null)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,m.is&&m),a=null,u=!1}if(_===null)g===m||u&&t.data===m||(t.data=m);else{if(a=a&&xl.call(t.childNodes),f=(g=n.props||Ga).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},w=0;w<t.attributes.length;w++)g[t.attributes[w].name]=t.attributes[w].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(oS(t,m,g,o,u),p)e.__k=[];else if(w=e.props.children,Cv(t,Array.isArray(w)?w:[w],e,n,i,o&&_!=="foreignObject",a,l,a?a[0]:n.__k&&ls(n,0),u),a!=null)for(w=a.length;w--;)a[w]!=null&&Ev(a[w]);u||("value"in m&&(w=m.value)!==void 0&&(w!==g.value||w!==t.value||_==="progress"&&!w)&&Ja(t,"value",w,g.value,!1),"checked"in m&&(w=m.checked)!==void 0&&w!==t.checked&&Ja(t,"checked",w,g.checked,!1))}return t}function Rv(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){Ee.__e(i,n)}}function Iv(t,e,n){var i,o;if(Ee.unmount&&Ee.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||Rv(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){Ee.__e(a,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&Iv(i[o],e,typeof t.type!="function");n||t.__e==null||Ev(t.__e),t.__e=t.__d=void 0}function lS(t,e,n){return this.constructor(t,n)}function Ov(t,e,n){var i,o,a;Ee.__&&Ee.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,a=[],Sd(e,t=(!i&&n||e).__k=Lu(as,null,[t]),o||Ga,Ga,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?xl.call(e.childNodes):null,a,!i&&n?n:o?o.__e:e.firstChild,i),Av(a,t)}xl=$v.slice,Ee={__e:function(t,e){for(var n,i,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(a){t=a}throw t}},wv=0,Kn.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fr({},this.state),typeof t=="function"&&(t=t(Fr({},n),this.props)),t&&Fr(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),vg(this))},Kn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),vg(this))},Kn.prototype.render=as,Fs=[],xv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Qa.__r=0;var cS=0;function Q(t,e,n,i,o){var a,l,u={};for(l in e)l=="ref"?a=e[l]:u[l]=e[l];var d={type:t,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--cS,__source:i,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return Ee.vnode&&Ee.vnode(d),d}function uS(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function dS(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var Wr={set:uS,get:dS};const iu=new Map,fS=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function hS(){for(const{v:t,emoji:e}of fS)if(Lv(e))return t}function pS(){return!Lv("🇨🇦")}function Lv(t){if(iu.has(t))return iu.get(t);const e=gS(t);return iu.set(t,e),e}const gS=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,i=Math.floor(e/2);return t.font=i+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,o=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(o,0,22),t.fillStyle="#0000FF",t.fillText(o,n,22);const a=t.getImageData(0,0,n,e).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),p=t.getImageData(d,f,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||t.measureText(o).width>=n)}})();var _g={latestVersion:hS,noCountryFlags:pS};const Pu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function vS(t){It||(It=Wr.get("frequently")||{});const e=t.id||t;e&&(It[e]||(It[e]=0),It[e]+=1,Wr.set("last",e),Wr.set("frequently",It))}function mS({maxFrequentRows:t,perLine:e}){if(!t)return[];It||(It=Wr.get("frequently"));let n=[];if(!It){It={};for(let a in Pu.slice(0,e)){const l=Pu[a];It[l]=e-a,n.push(l)}return n}const i=t*e,o=Wr.get("last");for(let a in It)n.push(a);if(n.sort((a,l)=>{const u=It[l],d=It[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete It[l];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),Wr.set("frequently",It)}return n}var Pv={add:vS,get:mS,DEFAULTS:Pu},Mv={};Mv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var vr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Mt=null,qe=null;const su={};async function wg(t){if(su[t])return su[t];const n=await(await fetch(t)).json();return su[t]=n,n}let ou=null,Bv=null,jv=!1;function $l(t,{caller:e}={}){return ou||(ou=new Promise(n=>{Bv=n})),t?yS(t):e&&!jv&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ou}async function yS(t){jv=!0;let{emojiVersion:e,set:n,locale:i}=t;if(e||(e=vr.emojiVersion.value),n||(n=vr.set.value),i||(i=vr.locale.value),qe)qe.categories=qe.categories.filter(d=>!d.name);else{qe=(typeof t.data=="function"?await t.data():t.data)||await wg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),qe.emoticons={},qe.natives={},qe.categories.unshift({id:"frequent",emojis:[]});for(const d in qe.aliases){const f=qe.aliases[d],p=qe.emojis[f];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}qe.originalCategories=qe.categories}if(Mt=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(i=="en"?_v(Mv):await wg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),t.custom)for(let d in t.custom){d=parseInt(d);const f=t.custom[d],p=t.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Mt.categories.custom),p&&!f.icon&&(f.target=p.target||p),qe.categories.push(f);for(const g of f.emojis)qe.emojis[g.id]=g}}t.categories&&(qe.categories=qe.originalCategories.filter(d=>t.categories.indexOf(d.id)!=-1).sort((d,f)=>{const p=t.categories.indexOf(d.id),g=t.categories.indexOf(f.id);return p-g}));let o=null,a=null;n=="native"&&(o=_g.latestVersion(),a=t.noCountryFlags||_g.noCountryFlags());let l=qe.categories.length,u=!1;for(;l--;){const d=qe.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:m}=t;g=g>=0?g:vr.maxFrequentRows.value,m||(m=vr.perLine.value),d.emojis=Pv.get({maxFrequentRows:g,perLine:m})}if(!d.emojis||!d.emojis.length){qe.categories.splice(l,1);continue}const{categoryIcons:f}=t;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],m=g.id?g:qe.emojis[g],_=()=>{d.emojis.splice(p,1)};if(!m||t.exceptEmojis&&t.exceptEmojis.includes(m.id)){_();continue}if(o&&m.version>o){_();continue}if(a&&d.id=="flags"&&!$S.includes(m.id)){_();continue}if(!m.search){if(u=!0,m.search=","+[[m.id,!1],[m.name,!0],[m.keywords,!1],[m.emoticons,!1]].map(([$,x])=>{if($)return(Array.isArray($)?$:[$]).map(C=>(x?C.split(/[-|_|\s]+/):[C]).map(M=>M.toLowerCase())).flat()}).flat().filter($=>$&&$.trim()).join(","),m.emoticons)for(const $ of m.emoticons)qe.emoticons[$]||(qe.emoticons[$]=m.id);let w=0;for(const $ of m.skins){if(!$)continue;w++;const{native:x}=$;x&&(qe.natives[x]=m.id,m.search+=`,${x}`);const C=w==1?"":`:skin-tone-${w}:`;$.shortcodes=`:${m.id}:${C}`}}}}u&&Xi.reset(),Bv()}function Nv(t,e,n){t||(t={});const i={};for(let o in e)i[o]=Dv(o,t,e,n);return i}function Dv(t,e,n,i){const o=n[t];let a=i&&i.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const bS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Mu=null;function _S(t){return t.id?t:qe.emojis[t]||qe.emojis[qe.aliases[t]]||qe.emojis[qe.natives[t]]}function wS(){Mu=null}async function xS(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await $l(null,{caller:n||"SearchIndex.search"});const i=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Mu||(Mu=Object.values(qe.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],p=l[d.id];return f==p?u.id.localeCompare(d.id):f-p}),a.length>e&&(a=a.slice(0,e))),a}var Xi={search:xS,get:_S,reset:wS,SHORTCODES_REGEX:bS};const $S=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function ES(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,i)=>n==e[i])}async function kS(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function CS(t,{skinIndex:e=0}={}){const n=t.skins[e]||(()=>(e=0,t.skins[e]))(),i={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(i.skin=e+1),n.src&&(i.src=n.src),t.aliases&&t.aliases.length&&(i.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(i.emoticons=t.emoticons),i}const SS={activity:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Q("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Q("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Q("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Q("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Q("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Q("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Q("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Q("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),Q("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Q("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Q("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),Q("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Q("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Q("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),Q("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Q("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Q("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),Q("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Q("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Q("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),Q("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Q("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Q("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Q("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},TS={loupe:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Q("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:Q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Q("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Xa={categories:SS,search:TS};function Bu(t){let{id:e,skin:n,emoji:i}=t;if(t.shortcodes){const u=t.shortcodes.match(Xi.SHORTCODES_REGEX);u&&(e=u[1],u[2]&&(n=u[2]))}if(i||(i=Xi.get(e||t.native)),!i)return t.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/64/${o.unified}.png`:void 0),l=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/sheets-256/64.png`;return Q("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:a?Q("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):t.set=="native"?Q("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):Q("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${l})`,backgroundSize:`${100*qe.sheet.cols}% ${100*qe.sheet.rows}%`,backgroundPosition:`${100/(qe.sheet.cols-1)*o.x}% ${100/(qe.sheet.rows-1)*o.y}%`}})})}const AS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Uv extends AS{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,i){if(!this.component)return;const o=Dv(e,{[e]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:o}):(this.component.props[e]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const i=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class RS extends Uv{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var Fv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:vr.set,skin:vr.skin};class zv extends Uv{async connectedCallback(){const e=Nv(this.props,Fv,this);e.element=this,e.ref=n=>{this.component=n},await $l(),!this.disconnected&&Ov(Q(Bu,{...e}),this)}constructor(e){super(e)}}Ln(zv,"Props",Fv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",zv);var xg,ju=[],$g=Ee.__b,Eg=Ee.__r,kg=Ee.diffed,Cg=Ee.__c,Sg=Ee.unmount;function IS(){var t;for(ju.sort(function(e,n){return e.__v.__b-n.__v.__b});t=ju.pop();)if(t.__P)try{t.__H.__h.forEach(Sa),t.__H.__h.forEach(Nu),t.__H.__h=[]}catch(e){t.__H.__h=[],Ee.__e(e,t.__v)}}Ee.__b=function(t){$g&&$g(t)},Ee.__r=function(t){Eg&&Eg(t);var e=t.__c.__H;e&&(e.__h.forEach(Sa),e.__h.forEach(Nu),e.__h=[])},Ee.diffed=function(t){kg&&kg(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(ju.push(e)!==1&&xg===Ee.requestAnimationFrame||((xg=Ee.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),Tg&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);Tg&&(i=requestAnimationFrame(o))})(IS))},Ee.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Sa),n.__h=n.__h.filter(function(i){return!i.__||Nu(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],Ee.__e(i,n.__v)}}),Cg&&Cg(t,e)},Ee.unmount=function(t){Sg&&Sg(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Sa(i)}catch(o){e=o}}),e&&Ee.__e(e,n.__v))};var Tg=typeof requestAnimationFrame=="function";function Sa(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function Nu(t){t.__c=t.__()}function OS(t,e){for(var n in e)t[n]=e[n];return t}function Ag(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function el(t){this.props=t}(el.prototype=new Kn).isPureReactComponent=!0,el.prototype.shouldComponentUpdate=function(t,e){return Ag(this.props,t)||Ag(this.state,e)};var Rg=Ee.__b;Ee.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Rg&&Rg(t)};var LS=Ee.__e;Ee.__e=function(t,e,n){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}LS(t,e,n)};var Ig=Ee.unmount;function au(){this.__u=0,this.t=null,this.__b=null}function Hv(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function ba(){this.u=null,this.o=null}Ee.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Ig&&Ig(t)},(au.prototype=new Kn).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Hv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(m,_,w){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function($){return g($,_,w)}),m.__c&&m.__c.__P===_&&(m.__e&&w.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=w)),m}(f,f.__c.__P,f.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=e.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),t.then(l,l)},au.prototype.componentWillUnmount=function(){this.t=[]},au.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=OS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=e.__e&&Lu(as,null,t.fallback);return o&&(o.__h=null),[Lu(as,null,e.__e?null:t.children),o]};var Og=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(ba.prototype=new Kn).__e=function(t){var e=this,n=Hv(e.__v),i=e.o.get(t);return i[0]++,function(o){var a=function(){e.props.revealOrder?(i.push(o),Og(e,t,i)):o()};n?n(a):a()}},ba.prototype.render=function(t){this.u=null,this.o=new Map;var e=Ya(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},ba.prototype.componentDidUpdate=ba.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Og(t,n,e)})};var PS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,MS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,BS=typeof document<"u",jS=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};Kn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Kn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Lg=Ee.event;function NS(){}function DS(){return this.cancelBubble}function US(){return this.defaultPrevented}Ee.event=function(t){return Lg&&(t=Lg(t)),t.persist=NS,t.isPropagationStopped=DS,t.isDefaultPrevented=US,t.nativeEvent=t};var Pg={configurable:!0,get:function(){return this.class}},Mg=Ee.vnode;Ee.vnode=function(t){var e=t.type,n=t.props,i=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var a in i={},n){var l=n[a];BS&&a==="children"&&e==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+e)&&!jS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&MS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}e=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ya(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),e=="select"&&i.defaultValue!=null&&(i.value=Ya(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),t.props=i,n.class!=n.className&&(Pg.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Pg))}t.$$typeof=PS,Mg&&Mg(t)};var Bg=Ee.__r;Ee.__r=function(t){Bg&&Bg(t),t.__c};const FS={light:"outline",dark:"solid"};class zS extends el{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return Q("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return Q("img",{src:n.src})}const i=Xa.categories[e.id]||Xa.categories.custom,o=this.props.icons=="auto"?FS[this.props.theme]:this.props.icons;return i[o]||i}render(){let e=null;return Q("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:Q("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Mt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(e=i),Q("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),Q("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=qe.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class HS extends el{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const _a={rowsPerRender:10};class WS extends Kn{getInitialState(e=this.props){return{skin:Wr.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Mt.rtl?"rtl":"ltr",this.refs={menu:pr(),navigation:pr(),scroll:pr(),search:pr(),searchInput:pr(),skinToneButton:pr(),skinToneRadio:pr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(e={}){await $l(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=qe;this.refs.categories=new Map;const n=qe.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%_a.rowsPerRender?{}:pr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of e){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:pr(),rows:a})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:i}=e,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const i=this.state.searchResults||this.grid,o=i[e]&&i[e][n];if(o)return Xi.get(o)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,i=l=>{l!=e.state.categoryId&&e.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?e[a]=!0:delete e[a]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(_a.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*_a.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const p=(()=>{if(d==0&&f==0&&!e.repeat&&(i||a))return null;if(d==-1)return!e.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const m=i?-1:1;if(f+=m,!g[f]){if(d+=m,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(p)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:e,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(e=i[n].__categoryId),e&&(l=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=CS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Pv.add(o,this.props),this.props.onEmojiSelect(o,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),Wr.set("skin",e)}renderNav(){return Q(zS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return Q("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[Q("div",{class:"flex flex-middle flex-grow",children:[Q("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:Q(Bu,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),Q("div",{class:`margin-${this.dir[0]}`,children:e||n?Q("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[Q("div",{class:"preview-title ellipsis",children:e?e.name:Mt.search_no_results_1}),Q("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Mt.search_no_results_2})]}):Q("div",{class:"preview-placeholder color-c",children:Mt.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(e.skins[l-1]||e.skins[0]).native,f=ES(this.state.pos,n),p=n.concat(e.id).join("");return Q(HS,{selected:f,skin:l,size:a,children:Q("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[Q("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),Q(Bu,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return Q("div",{children:[Q("div",{class:"spacer"}),Q("div",{class:"flex flex-middle",children:[Q("div",{class:"search relative flex-grow",children:[Q("input",{type:"search",ref:this.refs.searchInput,placeholder:Mt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),Q("span",{class:"icon loupe flex",children:Xa.search.loupe}),this.state.searchResults&&Q("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Xa.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?Q("div",{class:"category",ref:this.refs.search,children:[Q("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Mt.categories.search}),Q("div",{children:e.length?e.map((n,i)=>Q("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:e}))})):Q("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&Q("a",{onClick:this.props.onAddCustomEmoji,children:Mt.add_custom})})})]}):null}renderCategories(){const{categories:e}=qe,n=!!this.state.searchResults,i=this.getPerLine();return Q("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return Q("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[Q("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Mt.categories[o.id]}),Q("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%_a.rowsPerRender,p=this.state.visibleRows[f],g="current"in u?u:void 0;if(!p&&!g)return null;const m=d*i,_=m+i,w=o.emojis.slice(m,_);return w.length<i&&w.push(...new Array(i-w.length)),Q("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&w.map(($,x)=>{if(!$)return Q("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=Xi.get($);return this.renderEmojiButton(C,{pos:[u.index,x],posinset:u.posinset+x,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:Q("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:Q("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Mt.skins.choose,title:Mt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:Q("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return Q("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),Q("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Mt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return Q("div",{children:[Q("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Mt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),Q("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[Q("span",{class:`skin-tone skin-tone-${l}`}),Q("span",{class:"margin-small-lr",children:Mt.skins[l]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return Q("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&Q("div",{class:"padding-lr",children:this.renderSearch()}),Q("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:Q("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),Ln(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Ln(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Ln(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Ln(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Ln(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Xi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),Ln(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Ln(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Ln(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Ln(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await kS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class Td extends RS{async connectedCallback(){const e=Nv(this.props,vr,this);e.element=this,e.ref=n=>{this.component=n},await $l(e),!this.disconnected&&Ov(Q(WS,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:_v(Wv)})}}Ln(Td,"Props",vr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Td);var Wv={};Wv=`:host {
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

`;const qv=t=>{let e,n;const{config:i}=et(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new Td({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),t.onEmojiSelect?.(d),e?.close()}}),e?.elem?.appendChild(n)};return br(()=>{o()}),S(Cd,{ref:l=>{e=l},position:"bottom",get button(){return t.children},onOpen:a,onClose:o})},qS=B("<div>"),ZS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),KS=B("<br>"),VS=B("<span>: "),GS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),QS=t=>{const e=ht(),[n,i]=Re(!1);return S(ye,{get when(){return!t.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=GS();return o.$$click=()=>i(!0),k(o,()=>e()("post.contentWarning.show"),null),k(o,S(ye,{get when(){return t.contentWarning.reason!=null},get children(){return[KS(),(()=>{const a=VS(),l=a.firstChild;return k(a,()=>e()("post.contentWarning.reason"),l),k(a,()=>t.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=qS();return k(o,()=>t.children),o})(),S(ye,{get when(){return t.contentWarning.contentWarning},get children(){const o=ZS();return o.$$click=()=>i(!1),o}})]}})};mt(["click"]);let lu=!1;const[wa,YS]=Re(void 0),Yr=()=>(xr(()=>{if(wa()!=null)return;let t=0;const e=setInterval(()=>{if(t>=20){if(clearInterval(e),wa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&wa()==null&&!lu&&(lu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(e),YS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{lu=!1})),t+=1},200)}),wa),JS=B('<div class="flex gap-2 overflow-x-auto py-1">'),XS=B('<span class="ml-1 text-sm">'),eT=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),tT=t=>{const{config:e}=et(),n=Yr();return(()=>{const i=JS();return k(i,S(Ft,{get each(){return[...t.reactionsGrouped.entries()]},children:([,o])=>{const a=o.findIndex(u=>u.pubkey===n())>=0,l=Va(o[0]).toReactionTypes();return(()=>{const u=eT();return u.$$click=()=>t.onReaction(l),k(u,S(bv,{reactionTypes:l}),null),k(u,S(ye,{get when(){return!e().hideCount},get children(){const d=XS();return k(d,()=>o.length),d}}),null),Be(d=>Ea(u,{"text-zinc-400":!a,"hover:bg-zinc-50":!a,"bg-rose-50":a,"border-rose-200":a,"text-rose-400":a},d)),u})()}})),i})()};mt(["click"]);const Zv=t=>{const{profile:e}=ys(()=>({pubkey:t.pubkey}));return S(ye,{get when(){return(e()?.name?.length??0)>0},get fallback(){return`@${mo(t.pubkey)}`},get children(){return["@",He(()=>e()?.name??t.pubkey)]}})},nT=B('<a target="_blank" rel="noreferrer noopener">'),ki=t=>{const e=()=>{try{const n=new URL(t.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return S(ye,{get when(){return e()},get fallback(){return t.href},get children(){const n=nT();return k(n,()=>t.children??t.href),Be(i=>{const o=t.class,a=t.href;return o!==i._v$&&Ku(n,i._v$=o),a!==i._v$2&&ze(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},rT=t=>{try{const e=new URL(t);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(e.pathname)}catch{return!1}},iT=t=>{try{const e=new URL(t);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(e.pathname)}catch{return!1}},sT=t=>{try{const e=new URL(t);return/^wss?:$/.test(e.protocol)}catch{return!1}},oT=t=>{try{const e=new URL(t);if(e.host==="i.imgur.com"||e.host==="imgur.com"){const n=e.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(e),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return e.toString()}if(e.host==="i.gyazo.com"){const n=new URL(e);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640${e.pathname}`,n.toString()}return e.toString()}catch{return t}},jg=t=>{try{const e=new URL(t);return e.protocol==="https:"&&(e.host==="twitter.com"||e.host==="x.com")}catch{return!1}},aT=["www.youtube.com","m.youtube.com","youtube.com"],lT=t=>{try{const e=new URL(t);if(e.protocol!=="https:")return null;if(aT.includes(e.host)){if(e.pathname==="/watch"){const n=e.searchParams.get("v");if(n!=null)return{videoId:n}}if(e.pathname.startsWith("/shorts/")){const n=e.pathname.match(/^\/shorts\/([0-9a-zA-Z_-]*)$/);if(n)return{videoId:n[1]}}}return e.host==="youtu.be"&&e.pathname.lastIndexOf("/")===0?{videoId:e.pathname}:null}catch{return null}},cT=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),uT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),dT=t=>{let e;const n=ht(),[i,o]=Re(t.initialHidden);return S(ye,{get when(){return!i()},get fallback(){return(()=>{const a=uT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showImage")),a})()},get children(){return S(ki,{class:"my-2 block",get href(){return t.url},get children(){const a=cT(),l=e;return typeof l=="function"?Vn(l,a):e=a,Be(u=>{const d=oT(t.url),f=t.url;return d!==u._v$&&ze(a,"src",u._v$=d),f!==u._v$2&&ze(a,"alt",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),a}})}})};mt(["click"]);const fT=B('<div class="my-1 rounded border p-1">'),hT=t=>S(ye,{get when(){return t.mentionedEvent.marker!=null&&t.mentionedEvent.marker.length>0},get fallback(){return S(Zs,{get eventId(){return t.mentionedEvent.eventId}})},get children(){const e=fT();return k(e,S(oo,{get eventId(){return t.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ct.Text]}})),e}}),pT=B('<button class="inline select-text text-blue-500 underline">'),cu=t=>{const{showProfile:e}=Qr(),n=()=>{e(t.pubkey)};return(()=>{const i=pT();return i.$$click=n,k(i,S(Zv,{get pubkey(){return t.pubkey}})),i})()};mt(["click"]);const gT=t=>{const e={};return Array.from(t.head.querySelectorAll("meta")).forEach(n=>{const i=n.getAttribute("property"),o=n.getAttribute("content");i!=null&&o!=null&&(e[i]=o)}),e["og:image"]!=null&&e["og:title"]!=null&&e["og:description"]!=null&&e["og:url"]?{title:e["og:title"],description:e["og:description"],image:e["og:image"],url:e["og:url"]}:null},vT=t=>{const e=new DOMParser().parseFromString(t,"text/html");return gT(e)},mT=async t=>{const e=["www3.nhk.or.jp"],n=new URL(t);if(!e.includes(n.host))return null;const o=await(await fetch(n,{headers:{Accept:"text/html"}})).text();return vT(o)},yT=t=>{const n=Ci(()=>["useOgp",t().url],({queryKey:[,o]})=>mT(o),{staleTime:144e5,cacheTime:144e5,refetchOnWindowFocus:!1,refetchOnMount:!1});return{query:n,ogp:()=>n.data}},bT=B('<blockquote class="twitter-tweet"><a target="_blank" rel="noreferrer noopener">'),_T=B('<div class="my-2 aspect-video w-full"><iframe loading="lazy" title="YouTube" class="my-2 h-full w-full" allowfullscreen>'),wT=B('<div class="my-2 rounded-lg border transition-colors hover:bg-slate-100"><img class="max-w-full rounded-t-lg object-contain shadow"><div class="mb-1 p-1"><div class="text-xs text-slate-500"></div><div class="text-sm"></div><div class="text-xs text-slate-500">'),Ng=t=>{try{const e=new URL(t);return e.host="twitter.com",e.href}catch{return t}},xT=t=>{const e=new URL("https://www.youtube.com/embed/");return e.pathname+=t,e.searchParams.set("origin",window.location.origin),e.href},$T=t=>{let e;const{config:n}=et(),{ogp:i}=yT(()=>({url:t.href}));return mr(()=>{jg(t.href)&&window.twttr?.widgets?.load(e)}),S(Pn,{get fallback(){return S(ki,{get class(){return t.class},get href(){return t.href}})},get children(){return[S(Ye,{get when(){return He(()=>!!n().embedding.twitter)()&&jg(t.href)},get children(){const o=bT(),a=o.firstChild,l=e;return typeof l=="function"?Vn(l,o):e=o,k(a,()=>Ng(t.href)),Be(u=>{const d=t.class,f=Ng(t.href);return d!==u._v$&&Ku(a,u._v$=d),f!==u._v$2&&ze(a,"href",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),o}}),S(Ye,{get when(){return He(()=>!!n().embedding.youtube)()&&lT(t.href)},keyed:!0,children:({videoId:o})=>(()=>{const a=_T(),l=a.firstChild;return Be(()=>ze(l,"src",xT(o))),a})()}),S(Ye,{get when(){return He(()=>!!n().embedding.ogp)()&&i()},keyed:!0,children:o=>S(ki,{get href(){return t.href},get children(){const a=wT(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.nextSibling,p=f.nextSibling;return k(d,()=>new URL(o.url).host),k(f,()=>o.title),k(p,()=>o.description),Be(g=>{const m=o.title,_=o.image;return m!==g._v$3&&ze(l,"alt",g._v$3=m),_!==g._v$4&&ze(l,"src",g._v$4=_),g},{_v$3:void 0,_v$4:void 0}),a}})})]}})},ET=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),kT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),CT=t=>{let e;const n=ht(),[i,o]=Re(t.initialHidden);return S(ye,{get when(){return!i()},get fallback(){return(()=>{const a=kT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showVideo")),a})()},get children(){return S(ki,{class:"my-2 block",get href(){return t.url},get children(){const a=ET(),l=a.firstChild,u=e;return typeof u=="function"?Vn(u,a):e=a,k(l,()=>n()("post.download")),Be(d=>{const f=t.url,p=t.url;return f!==d._v$&&ze(a,"src",d._v$=f),p!==d._v$2&&ze(l,"href",d._v$2=p),d},{_v$:void 0,_v$2:void 0}),a}})}})};mt(["click"]);const[Ad,ST]=Re({}),Kv=t=>{Ad()[t]==null&&ST(e=>({...e,[t]:new MessageChannel}))},TT=t=>{const e=()=>Ad()[t().id],n=(o,a)=>{const l={requestId:o,request:a};e().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=p=>{const g=p.data;g.requestId===o&&(e().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{e().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),e().port1.addEventListener("message",f,!1),e().port1.start()});return xr(()=>{const{id:o}=t();Kv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},AT=t=>{const e=He(t),n=()=>Ad()[e().id];xr(()=>{const{id:i}=e();Kv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=e().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const m={requestId:u,ok:!0,response:g};o.postMessage(m)}).catch(g=>{const m={requestId:u,ok:!1,error:g};o.postMessage(m)})};o.addEventListener("message",a),o.start(),br(()=>{o.removeEventListener("message",a)})})},El=()=>TT(()=>({id:"CommandChannel"})),RT=t=>{AT(()=>({id:"CommandChannel",handler:e=>{const{commandType:n,handler:i}=t();e.command===n&&i(e)}}))},uu=B("<span>"),Dg=B('<button class="select-text text-blue-500 underline">'),Ug=B('<div class="my-1 rounded border p-1">'),IT=B('<button class="select-text text-blue-500 underline"> (<!>)'),OT=B('<span class="text-blue-500 underline">'),LT=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),Vv=t=>{const{config:e,saveColumn:n}=et(),i=El(),o=l=>{n(_d({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))},a=l=>{n(Z1({name:l,relayUrls:[l]})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return S(Ft,{get each(){return t.parsed},children:l=>{if(l.type==="PlainText")return(()=>{const u=uu();return k(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!e().showMedia||!t.embedding||(t.initialHidden??!1);return rT(l.content)?S(dT,{get url(){return l.content},get initialHidden(){return u()}}):iT(l.content)?S(CT,{get url(){return l.content},get initialHidden(){return u()}}):sT(l.content)?(()=>{const d=Dg();return d.$$click=()=>a(l.content),k(d,()=>l.content),d})():S($T,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReferenceResolved"){if(l.reference==null)return(()=>{const u=uu();return k(u,()=>l.content),u})();if(l.reference.type==="MentionedUser")return S(cu,{get pubkey(){return l.reference.pubkey}});if(l.reference.type==="MentionedEvent")return t.embedding?S(hT,{get mentionedEvent(){return l.reference}}):S(Zs,{get eventId(){return l.reference.eventId}})}if(l.type==="Bech32Entity"){if(l.data.type==="note"&&t.embedding)return(()=>{const u=Ug();return k(u,S(oo,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ct.Text]}})),u})();if(l.data.type==="nevent"&&t.embedding)return(()=>{const u=Ug();return k(u,S(oo,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})();if(l.data.type==="npub")return S(cu,{get pubkey(){return l.data.data}});if(l.data.type==="nprofile")return S(cu,{get pubkey(){return l.data.data.pubkey}});if(l.data.type==="nrelay"){const u=l.data.data;return(()=>{const d=IT(),f=d.firstChild,p=f.nextSibling;return p.nextSibling,d.$$click=()=>a(u),k(d,u,f),k(d,()=>l.content,p),d})()}return(()=>{const u=OT();return k(u,()=>l.content),u})()}return l.type==="HashTag"?(()=>{const u=Dg();return u.$$click=()=>o(l.content),k(u,()=>l.content),u})():l.type==="CustomEmojiResolved"?l.url==null?(()=>{const u=uu();return k(u,()=>l.content),u})():(()=>{const u=LT();return Be(d=>{const f=l.url,p=l.content,g=l.shortcode;return f!==d._v$&&ze(u,"src",d._v$=f),p!==d._v$2&&ze(u,"alt",d._v$2=p),g!==d._v$3&&ze(u,"title",d._v$3=g),d},{_v$:void 0,_v$2:void 0,_v$3:void 0}),u})():(console.error("Not all ParsedTextNoteNodes are covered",l),null)}})};mt(["click"]);const PT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),cs=(t={})=>(()=>{const e=PT();return st(e,t,!0,!0),e})(),MT=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),BT=t=>{let e;const n=i=>{i.target===e&&t.onClose?.()};return(()=>{const i=MT();i.$$click=n;const o=e;return typeof o=="function"?Vn(o,i):e=i,k(i,()=>t.children),i})()};mt(["click"]);const jT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Ii=t=>S(BT,{onClose:()=>t.onClose?.(),get children(){const e=jT(),n=e.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>t.onClose?.(),k(i,S(ye,{get when(){return t?.closeButton},get fallback(){return S(cs,{})},keyed:!0,children:a=>a()})),k(o,()=>t.children),e}});mt(["click"]);const NT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),DT=(t={})=>(()=>{const e=NT();return st(e,t,!0,!0),e})(),UT=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),FT=B('<div class="relative inline-block"><button type="button">'),zT=t=>{const[e,n]=Re(!1),i=()=>{navigator.clipboard.writeText(t.text).then(()=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=FT(),a=o.firstChild;return a.$$click=i,k(a,S(DT,{})),k(o,S(ye,{get when(){return e()},get children(){return UT()}}),null),Be(()=>Ku(a,t.class)),o})()};mt(["click"]);const HT=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),WT=t=>{const e=He(()=>JSON.stringify(t.event,null,2));return S(Ii,{get onClose(){return t.onClose},get children(){const n=HT(),i=n.firstChild,o=i.nextSibling;return k(i,e),k(o,S(zT,{class:"h-4 w-4",get text(){return e()}})),n}})},qT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),ZT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 select-text truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),KT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),VT=t=>{const{profile:e}=ys(()=>({pubkey:t.pubkey}));return(()=>{const n=ZT(),i=n.firstChild,o=i.nextSibling,a=o.firstChild,l=a.firstChild,u=l.firstChild,d=u.firstChild;return i.$$click=f=>{f.preventDefault(),t.onShowProfile?.()},k(i,S(ye,{get when(){return e()?.picture},keyed:!0,children:f=>(()=>{const p=KT();return ze(p,"src",f),p})()})),l.$$click=f=>{f.preventDefault(),t?.onShowProfile?.()},k(u,S(ye,{get when(){return(e()?.display_name?.length??0)>0},get children(){const f=qT();return k(f,()=>e()?.display_name),f}}),d),k(d,S(ye,{get when(){return e()?.name},get fallback(){return`@${mo(t.pubkey)}`},keyed:!0,children:f=>`@${f}`})),n})()};mt(["click"]);const GT=B('<div class="px-4 py-2"><div> 件</div><div>'),QT=B('<div class="flex border-t py-1">'),Du=t=>{const{showProfile:e}=Qr();return S(Ii,{get onClose(){return t.onClose},get children(){const n=GT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return k(i,()=>t.data.length,o),k(a,S(Ft,{get each(){return t.data},children:l=>{const u=()=>t.pubkeyExtractor(l);return(()=>{const d=QT();return k(d,S(ye,{get when(){return t.renderInfo},keyed:!0,children:f=>f(l)}),null),k(d,S(VT,{get pubkey(){return u()},onShowProfile:()=>e(u())}),null),d})()}})),n}})},YT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Gv=(t={})=>(()=>{const e=YT();return st(e,t,!0,!0),e})(),JT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),XT=(t={})=>(()=>{const e=JT();return st(e,t,!0,!0),e})(),eA=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),tA=(t={})=>(()=>{const e=eA();return st(e,t,!0,!0),e})();var Rd={},yo={},Qv={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,p){this.fn=d,this.context=f,this.once=p||!1}function a(d,f,p,g,m){if(typeof p!="function")throw new TypeError("The listener must be a function");var _=new o(p,g||d,m),w=n?n+f:f;return d._events[w]?d._events[w].fn?d._events[w]=[d._events[w],_]:d._events[w].push(_):(d._events[w]=_,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],p,g;if(this._eventsCount===0)return f;for(g in p=this._events)e.call(p,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(p)):f},u.prototype.listeners=function(f){var p=n?n+f:f,g=this._events[p];if(!g)return[];if(g.fn)return[g.fn];for(var m=0,_=g.length,w=new Array(_);m<_;m++)w[m]=g[m].fn;return w},u.prototype.listenerCount=function(f){var p=n?n+f:f,g=this._events[p];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,p,g,m,_,w){var $=n?n+f:f;if(!this._events[$])return!1;var x=this._events[$],C=arguments.length,M,E;if(x.fn){switch(x.once&&this.removeListener(f,x.fn,void 0,!0),C){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,p),!0;case 3:return x.fn.call(x.context,p,g),!0;case 4:return x.fn.call(x.context,p,g,m),!0;case 5:return x.fn.call(x.context,p,g,m,_),!0;case 6:return x.fn.call(x.context,p,g,m,_,w),!0}for(E=1,M=new Array(C-1);E<C;E++)M[E-1]=arguments[E];x.fn.apply(x.context,M)}else{var I=x.length,O;for(E=0;E<I;E++)switch(x[E].once&&this.removeListener(f,x[E].fn,void 0,!0),C){case 1:x[E].fn.call(x[E].context);break;case 2:x[E].fn.call(x[E].context,p);break;case 3:x[E].fn.call(x[E].context,p,g);break;case 4:x[E].fn.call(x[E].context,p,g,m);break;default:if(!M)for(O=1,M=new Array(C-1);O<C;O++)M[O-1]=arguments[O];x[E].fn.apply(x[E].context,M)}}return!0},u.prototype.on=function(f,p,g){return a(this,f,p,g,!1)},u.prototype.once=function(f,p,g){return a(this,f,p,g,!0)},u.prototype.removeListener=function(f,p,g,m){var _=n?n+f:f;if(!this._events[_])return this;if(!p)return l(this,_),this;var w=this._events[_];if(w.fn)w.fn===p&&(!m||w.once)&&(!g||w.context===g)&&l(this,_);else{for(var $=0,x=[],C=w.length;$<C;$++)(w[$].fn!==p||m&&!w[$].once||g&&w[$].context!==g)&&x.push(w[$]);x.length?this._events[_]=x.length===1?x[0]:x:l(this,_)}return this},u.prototype.removeAllListeners=function(f){var p;return f?(p=n?n+f:f,this._events[p]&&l(this,p)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,t.exports=u})(Qv);var kl=Qv.exports,Id={},bo={};Object.defineProperty(bo,"__esModule",{value:!0});bo.SearchResult=void 0;const nA=/\$&/g,rA=/\$(\d)/g;class iA{constructor(e,n,i){this.data=e,this.term=n,this.strategy=i}getReplacementData(e){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(e);if(o==null||o.index==null)return null;const a=n.replace(nA,o[0]).replace(rA,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(e,n){const i=this.getReplacementData(e);if(i!==null)return n=i.afterCursor+n,[[e.slice(0,i.start),i.beforeCursor,e.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}bo.SearchResult=iA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Strategy=t.DEFAULT_INDEX=void 0;const e=bo;t.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:t.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(p=>new e.SearchResult(p,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}t.Strategy=n})(Id);Object.defineProperty(yo,"__esModule",{value:!0});yo.Completer=void 0;const sA=kl,oA=Id;class aA extends sA.EventEmitter{constructor(e){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=e.map(n=>new oA.Strategy(n))}destroy(){return this.strategies.forEach(e=>e.destroy()),this}run(e){for(const n of this.strategies)if(n.execute(e,this.handleQueryResult))return;this.handleQueryResult([])}}yo.Completer=aA;var Od={},bs={};Object.defineProperty(bs,"__esModule",{value:!0});bs.createCustomEvent=void 0;const lA=typeof window<"u"&&!!window.CustomEvent,cA=(t,e)=>{if(lA)return new CustomEvent(t,e);const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,e?.cancelable||!1,e?.detail||void 0),n};bs.createCustomEvent=cA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=t.DEFAULT_DROPDOWN_CLASS_NAME=t.DEFAULT_DROPDOWN_PLACEMENT=t.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const e=kl,n=bs;t.DEFAULT_DROPDOWN_MAX_COUNT=10,t.DEFAULT_DROPDOWN_PLACEMENT="auto",t.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends e.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||t.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||t.DEFAULT_DROPDOWN_MAX_COUNT).map((f,p)=>{var g;return new o(this,p,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const p=this.option.placement||t.DEFAULT_DROPDOWN_PLACEMENT;if(p==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}p==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(p=>p.data)):d||"",this.el.appendChild(f),this}}t.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=m=>{m.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const p=document.createElement("li");p.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),p.appendChild(g),p.addEventListener("click",this.onClick),this.el=p}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Od);var Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.Editor=void 0;const uA=kl,xa=bs;class dA extends uA.EventEmitter{destroy(){return this}applySearchResult(e){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(e){const n=(0,xa.createCustomEvent)("move",{cancelable:!0,detail:{code:e}});return this.emit("move",n),n}emitEnterEvent(){const e=(0,xa.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",e),e}emitChangeEvent(){const e=(0,xa.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",e),e}emitEscEvent(){const e=(0,xa.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",e),e}getCode(e){return e.keyCode===9||e.keyCode===13?"ENTER":e.keyCode===27?"ESC":e.keyCode===38?"UP":e.keyCode===40||e.keyCode===78&&e.ctrlKey?"DOWN":e.keyCode===80&&e.ctrlKey?"UP":"OTHER"}}Cl.Editor=dA;var Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.Textcomplete=void 0;const fA=kl,hA=Od,pA=yo,gA=["show","shown","render","rendered","selected","hidden","hide"];class vA extends fA.EventEmitter{constructor(e,n,i){super(),this.editor=e,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new pA.Completer(n),this.dropdown=hA.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(e=!0){return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}startListening(){var e;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of gA)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.addEventListener("resize",this.handleResize)}stopListening(){var e;(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Sl.Textcomplete=vA;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(yo,t),n(Od,t),n(Cl,t),n(bo,t),n(Id,t),n(Sl,t),n(bs,t)})(Rd);var Yv={},Tl={};function Jv(t,e,n){const i=t.value,o=e+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),t.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(t.focus(),!document.execCommand("insertText",!1,d)){t.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),t.dispatchEvent(f)}return t.setSelectionRange(e.length,e.length),a.focus(),t}function mA(t,e,n){const i=t.selectionEnd,o=t.value.substr(0,t.selectionStart)+e,a=t.value.substring(t.selectionStart,i)+(n||"")+t.value.substr(i);return Jv(t,o,a),t.selectionEnd=i+e.length,t}const yA=Object.freeze(Object.defineProperty({__proto__:null,update:Jv,wrapCursor:mA},Symbol.toStringTag,{value:"Module"})),bA=j4(yA);var Xv={exports:{}};(function(t){(function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var p=document.createElement("div");p.id="input-textarea-caret-position-mirror-div",document.body.appendChild(p);var g=p.style,m=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,_=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",_||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),e.forEach(function(x){_&&x==="lineHeight"?g.lineHeight=m.height:g[x]=m[x]}),i?a.scrollHeight>parseInt(m.height)&&(g.overflowY="scroll"):g.overflow="hidden",p.textContent=a.value.substring(0,l),_&&(p.textContent=p.textContent.replace(/\s/g," "));var w=document.createElement("span");w.textContent=a.value.substring(l)||".",p.appendChild(w);var $={top:w.offsetTop+parseInt(m.borderTopWidth),left:w.offsetLeft+parseInt(m.borderLeftWidth),height:parseInt(m.lineHeight)};return d?w.style.backgroundColor="#aaa":document.body.removeChild(p),$}t.exports=o})()})(Xv);var _A=Xv.exports,em={},Al={};Object.defineProperty(Al,"__esModule",{value:!0});Al.calculateElementOffset=void 0;const wA=t=>{const e=t.getBoundingClientRect(),n=t.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:e.top+i.pageYOffset,left:e.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Al.calculateElementOffset=wA;var Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.getLineHeightPx=void 0;const xA="0".charCodeAt(0),$A="9".charCodeAt(0),Fg=t=>xA<=t&&t<=$A,EA=t=>{const e=getComputedStyle(t),n=e.lineHeight;if(Fg(n.charCodeAt(0))){const i=parseFloat(n);return Fg(n.charCodeAt(n.length-1))?i*parseFloat(e.fontSize):i}return kA(t.nodeName,e)};Rl.getLineHeightPx=EA;const kA=(t,e)=>{const n=document.body;if(!n)return 0;const i=document.createElement(t);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:e.fontSize,fontFamily:e.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.isSafari=void 0;const CA=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Il.isSafari=CA;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(Al,t),n(Rl,t),n(Il,t)})(em);var SA=xt&&xt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.TextareaEditor=void 0;const TA=bA,AA=SA(_A),zg=Rd,Hg=em;class RA extends zg.Editor{constructor(e){super(),this.el=e,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(e){const n=this.getBeforeCursor();if(n!=null){const i=e.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,TA.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,zg.createCustomEvent)("input")))}}getCursorOffset(){const e=(0,Hg.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Hg.getLineHeightPx)(this.el),a=e.top-n.top+i.top+o,l=e.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,AA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}Tl.TextareaEditor=RA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaEditor=void 0;var e=Tl;Object.defineProperty(t,"TextareaEditor",{enumerable:!0,get:function(){return e.TextareaEditor}})})(Yv);const IA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),OA=()=>{const{searchEmojis:t}=et(),[e,n]=Re();return mr(()=>{const i=e();if(i==null)return;const o=new Yv.TextareaEditor(i),a=new Rd.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(t(l))},template:l=>(()=>{const d=IA(),f=d.firstChild,p=f.nextSibling;return k(p,()=>l.shortcode),Be(g=>{const m=l.url,_=l.shortcode;return m!==g._v$&&ze(f,"src",g._v$=m),_!==g._v$2&&ze(f,"alt",g._v$2=_),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});br(()=>{a.destroy()})}),{elementRef:n}},LA=t=>Math.floor(+t/1e3),Nr=()=>LA(new Date),PA=({notifyPubkeys:t,rootEventId:e,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=t?.map(g=>["p",g])??[],p=[];return e!=null&&d.push(["e",e,"","root"]),e==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),e!=null&&i!=null&&e!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...f,...p]},Ol=()=>{const t=Ed(),e=async(d,f)=>{const p={...f},g=fo(p);if(p.id=g,window.nostr==null)throw new Error("NIP-07 implementation not found");const m=await window.nostr.signEvent(p);if(!ho({...m,id:g}))throw new Error("nostr.signEvent returned invalid data");return d.map(async _=>{const w=await t().ensureRelay(_);try{await w.publish(m),console.log(`${_} has accepted our event`)}catch($){const x=$ instanceof Error?$.message:JSON.stringify($);console.warn(`failed to publish to ${_}: ${x}`)}})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:p,content:g}=d,m=PA(d),_={kind:1,pubkey:p,created_at:Nr(),tags:m,content:g};return e(f,_)},publishReaction:async({relayUrls:d,pubkey:f,eventId:p,reactionTypes:g,notifyPubkey:m})=>{const _=[["e",p,""],["p",m]];g.type==="CustomEmoji"&&_.push(["emoji",g.shortcode,g.url]);const w={kind:7,pubkey:f,created_at:Nr(),tags:_,content:g.content};return e(d,w)},publishRepost:async({relayUrls:d,pubkey:f,eventId:p,notifyPubkey:g})=>{const m={kind:6,pubkey:f,created_at:Nr(),tags:[["e",p,""],["p",g]],content:""};return e(d,m)},updateProfile:async({relayUrls:d,pubkey:f,profile:p,otherProperties:g})=>{const m={...p,...g},_={kind:ct.Metadata,pubkey:f,created_at:Nr(),tags:[],content:JSON.stringify(m)};return e(d,_)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:p,content:g})=>{const m={kind:ct.Contacts,pubkey:f,created_at:Nr(),tags:p,content:g};return e(d,m)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:p})=>{const g={kind:ct.EventDeletion,pubkey:f,created_at:Nr(),tags:[["e",p,""]],content:""};return e(d,g)}}},MA=async t=>{const e=new FormData;e.set("file",t);const n=await fetch("https://nostr.build/api/v2/upload/files",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:e});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json();if(i.status!=="success")throw new Error(`failed to post image: ${i.message}`);return{imageUrl:i.data[0].url}},BA=t=>e=>Promise.allSettled(e.map(n=>t(n))),jA=B("<div>"),NA=B('<input type="text" class="rounded" maxlength="32">'),DA=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),UA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),FA=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),zA=t=>{const e=[],n=[],i=[],o=[],a=[];return t.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?e.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:e,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},HA=t=>{const e=[];return t.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?e.push(`nostr:${n.content}`):e.push(n.content)}),e.join("")},tm=t=>{const e=ht();let n,i;const{elementRef:o}=OA(),[a,l]=Re(""),[u,d]=Re(!1),[f,p]=Re(""),[g,m]=Re([]),_=ue=>l(Se=>`${Se} ${ue}`),w=()=>{l(g().map(ue=>` #${ue}`).join("")),p(""),d(!1)},$=()=>{n?.blur(),w(),t.onClose()},x=ue=>{switch(ue){case"reply":return e()("posting.placeholderReply");case"normal":default:return e()("posting.placeholder")}},{config:C,getEmoji:M}=et(),E=Yr(),I=Ol(),O=()=>t.replyTo&&iv(t.replyTo),A=()=>t.mode??"normal",F=mi({mutationKey:["publishTextNote"],mutationFn:I.publishTextNote.bind(I),onSuccess:()=>{console.log("succeeded to post"),w(),t.onPost?.()},onError:ue=>{console.error("error",ue)}}),N=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},K=mi({mutationKey:["uploadFiles"],mutationFn:async ue=>{const Se=await BA(MA)(ue),V=[];if(Se.forEach((U,G)=>{U.status==="fulfilled"?(_(U.value.imageUrl),N()):V.push(ue[G])}),V.length>0){const U=V.map(G=>G.name).join(", ");window.alert(e()("posting.failedToUploadFile",{filenames:U}))}}}),ee=He(()=>{const ue=E();return O()?.taggedPubkeys()?.filter(Se=>Se!==ue)??[]}),ie=He(()=>t.replyTo==null?[]:yi([t.replyTo.pubkey,...ee()])),se=ue=>{const Se=[];return ue.forEach(V=>{const U=M(V);U!=null&&Se.push(["emoji",V,U.url])}),Se},ae=()=>{if(a().length===0||F.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(e()("posting.forbiddenToIncludeNsec"));return}const ue=E();if(ue==null){console.error("pubkey is not available");return}const Se=xd(a()),{hashtags:V,urlReferences:U,pubkeyReferences:G,eventReferences:ne,emojis:_e}=zA(Se),je=HA(Se),le=se(_e);m(V);let Z={relayUrls:C().relayUrls,pubkey:ue,content:je,notifyPubkeys:G,mentionEventIds:ne,hashtags:V,urls:U,tags:le};O()!=null&&(Z={...Z,notifyPubkeys:yi([...ie(),...G]),rootEventId:O()?.rootEvent()?.id??O()?.replyingToEvent()?.id,replyEventId:O()?.id}),u()&&(Z={...Z,contentWarning:f()}),F.mutate(Z),$()},te=ue=>{l(ue.currentTarget.value),N()},j=ue=>{_(ue.native??`:${ue.id}:`)},q=ue=>{ue.preventDefault(),ae()},X=ue=>{ue.key==="Enter"&&(ue.ctrlKey||ue.metaKey)?ae():ue.key==="Escape"&&(n?.blur(),$())},oe=ue=>{if(ue.preventDefault(),K.isLoading)return;const Se=[...ue.currentTarget.files??[]];K.mutate(Se),ue.currentTarget.value=""},J=ue=>{if(ue.preventDefault(),K.isLoading)return;const Se=[...ue?.dataTransfer?.files??[]];K.mutate(Se)},be=ue=>{if(K.isLoading)return;const Se=[...ue?.clipboardData?.items??[]],V=[];Se.forEach(U=>{if(U.kind==="file"){ue.preventDefault();const G=U.getAsFile();if(G==null)return;V.push(G)}}),V.length!==0&&K.mutate(V)},ge=ue=>{ue.preventDefault()},xe=()=>a().trim().length===0||F.isLoading||K.isLoading,Ve=()=>K.isLoading;return xr(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const ue=FA(),Se=ue.firstChild,V=Se.firstChild,U=V.nextSibling,G=U.firstChild,ne=G.nextSibling,_e=ne.nextSibling,je=U.nextSibling;k(ue,S(ye,{get when(){return t.replyTo!=null},get children(){const Z=jA();return k(Z,()=>e()("posting.replyToPre"),null),k(Z,S(Ft,{get each(){return ie()},children:(ve,tt)=>[S(kd,{pubkey:ve}),S(ye,{get when(){return tt()!==ie().length-1},children:" と "})]}),null),k(Z,()=>e()("posting.replyToPost"),null),Z}}),Se),Se.addEventListener("submit",q),k(Se,S(ye,{get when(){return u()},get children(){const Z=NA();return Z.$$input=ve=>p(ve.currentTarget.value),Be(()=>ze(Z,"placeholder",e()("posting.contentWarningReason"))),Be(()=>Z.value=f()),Z}}),V),V.addEventListener("paste",be),V.addEventListener("drop",J),V.addEventListener("dragover",ge),V.$$keydown=X,V.$$input=te,Vn(Z=>{n=Z,t.textAreaRef?.(Z),o(Z)},V),k(U,S(ye,{get when(){return A()==="reply"},get children(){const Z=DA(),ve=Z.firstChild;return ve.$$click=()=>$(),k(ve,S(cs,{})),Z}}),G),k(U,S(qv,{customEmojis:!0,onEmojiSelect:j,get children(){const Z=UA();return k(Z,S(Gv,{})),Z}}),G),G.$$click=()=>d(Z=>!Z),ne.$$click=()=>i?.click(),k(ne,S(XT,{})),k(_e,S(tA,{})),je.addEventListener("change",oe);const le=i;return typeof le=="function"?Vn(le,je):i=je,Be(Z=>{const ve=x(A()),tt=!u(),Jt=!!u(),Ct=A()==="normal",Ht=A()==="normal",Xr=A()==="reply",En=A()==="reply",St=e()("posting.contentWarning"),Xt=e()("posting.contentWarning"),Un=!!Ve(),Er=!Ve(),kn=A()==="normal",Ae=A()==="normal",Wt=A()==="reply",qt=A()==="reply",Cn=e()("posting.uploadImage"),Sn=e()("posting.uploadImage"),un=Ve(),dn=!!xe(),Tn=!xe(),nr=A()==="normal",rr=A()==="normal",ir=A()==="reply",Oi=A()==="reply",wo=e()("posting.submit"),xo=e()("posting.submit"),$o=xe();return ve!==Z._v$&&ze(V,"placeholder",Z._v$=ve),tt!==Z._v$2&&G.classList.toggle("bg-rose-300",Z._v$2=tt),Jt!==Z._v$3&&G.classList.toggle("bg-rose-400",Z._v$3=Jt),Ct!==Z._v$4&&G.classList.toggle("h-8",Z._v$4=Ct),Ht!==Z._v$5&&G.classList.toggle("w-8",Z._v$5=Ht),Xr!==Z._v$6&&G.classList.toggle("h-7",Z._v$6=Xr),En!==Z._v$7&&G.classList.toggle("w-7",Z._v$7=En),St!==Z._v$8&&ze(G,"aria-label",Z._v$8=St),Xt!==Z._v$9&&ze(G,"title",Z._v$9=Xt),Un!==Z._v$10&&ne.classList.toggle("bg-primary-disabled",Z._v$10=Un),Er!==Z._v$11&&ne.classList.toggle("bg-primary",Z._v$11=Er),kn!==Z._v$12&&ne.classList.toggle("h-8",Z._v$12=kn),Ae!==Z._v$13&&ne.classList.toggle("w-8",Z._v$13=Ae),Wt!==Z._v$14&&ne.classList.toggle("h-7",Z._v$14=Wt),qt!==Z._v$15&&ne.classList.toggle("w-7",Z._v$15=qt),Cn!==Z._v$16&&ze(ne,"title",Z._v$16=Cn),Sn!==Z._v$17&&ze(ne,"aria-label",Z._v$17=Sn),un!==Z._v$18&&(ne.disabled=Z._v$18=un),dn!==Z._v$19&&_e.classList.toggle("bg-primary-disabled",Z._v$19=dn),Tn!==Z._v$20&&_e.classList.toggle("bg-primary",Z._v$20=Tn),nr!==Z._v$21&&_e.classList.toggle("h-8",Z._v$21=nr),rr!==Z._v$22&&_e.classList.toggle("w-8",Z._v$22=rr),ir!==Z._v$23&&_e.classList.toggle("h-7",Z._v$23=ir),Oi!==Z._v$24&&_e.classList.toggle("w-7",Z._v$24=Oi),wo!==Z._v$25&&ze(_e,"aria-label",Z._v$25=wo),xo!==Z._v$26&&ze(_e,"title",Z._v$26=xo),$o!==Z._v$27&&(_e.disabled=Z._v$27=$o),Z},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),Be(()=>V.value=a()),ue})()};mt(["input","keydown","click"]);const WA=2,qA=()=>{let t;const[e,n]=Re(!1),i=o=>{t=o};return xr(()=>{t!=null&&n(t.scrollHeight>t.clientHeight+WA)}),{overflow:e,elementRef:i}},ZA=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),KA=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),VA=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 select-text truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="select-text hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),GA=B('<img alt="icon" class="h-full w-full rounded object-cover">'),QA=t=>{const e=ht(),{overflow:n,elementRef:i}=qA(),o=hv(),[a,l]=Re(),u=()=>o(t.createdAt),d=()=>t.createdAt.toLocaleString(),{profile:f}=ys(()=>({pubkey:t.authorPubkey}));return(()=>{const p=VA(),g=p.firstChild,m=g.firstChild,_=m.nextSibling,w=_.firstChild,$=w.firstChild,x=$.firstChild,C=x.firstChild,M=$.nextSibling,E=M.firstChild,I=w.nextSibling,O=I.nextSibling;return m.$$click=A=>{A.preventDefault(),t.onShowProfile?.()},k(m,S(ye,{get when(){return f()?.picture},keyed:!0,children:A=>(()=>{const F=GA();return ze(F,"src",A),F})()})),$.$$click=A=>{A.preventDefault(),t?.onShowProfile?.()},k(x,S(ye,{get when(){return(f()?.display_name?.length??0)>0},get children(){const A=ZA();return k(A,()=>f()?.display_name),A}}),C),k(C,S(ye,{get when(){return f()?.name!=null},get fallback(){return`@${mo(t.authorPubkey)}`},get children(){return["@",He(()=>f()?.name)]}})),E.$$click=A=>{A.preventDefault(),t.onShowEvent?.()},k(E,u),Vn(i,I),k(I,()=>t.content),k(_,S(ye,{get when(){return n()},get children(){const A=KA();return A.$$click=F=>{F.stopPropagation(),l(N=>!N)},k(A,S(ye,{get when(){return!a()},get fallback(){return e()("post.hideOverflow")},get children(){return e()("post.showOverflow")}})),A}}),O),k(O,()=>t.actions),k(p,S(ye,{get when(){return t.footer},get children(){return t.footer}}),null),Be(A=>{const F=d(),N=!a();return F!==A._v$&&ze(E,"title",A._v$=F),N!==A._v$2&&I.classList.toggle("max-h-screen",A._v$2=N),A},{_v$:void 0,_v$2:void 0}),p})()};mt(["click"]);const YA=k4(),JA=()=>C4(YA),nH=()=>{const[t,e]=es({});return{timelineState:t,setTimeline:n=>e("content",n),clearTimeline:()=>e("content",void 0)}},XA=/\p{Emoji_Presentation}/u,eR=t=>{const{shouldMuteEvent:e}=et(),n=us(),i=He(t),o=He(()=>["useReactions",i()]),a=Ci(o,uv({taskProvider:([,g])=>{if(g==null)return null;const{eventId:m}=g;return new ms({type:"Reactions",mentionedEventId:m})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(m=>!e(m));return{reactions:l,reactionsGrouped:()=>{const g=new Map;return l().forEach(m=>{const _=Va(m).isCustomEmoji()?`${m.content}${Va(m).getUrl()??""}`:m.content,w=g.get(_)??[];w.push(m),g.set(_,w)}),g},isReactedBy:g=>l().findIndex(m=>m.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(m=>m.pubkey===g&&XA.test(m.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},tR=t=>{const{shouldMuteEvent:e}=et(),n=us(),i=He(t),o=He(()=>["useReposts",i()]),a=Ci(o,uv({taskProvider:([,f])=>{if(f==null)return null;const{eventId:p}=f;return new ms({type:"Reposts",mentionedEventId:p})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!e(p));return{reposts:l,isRepostedBy:f=>l().findIndex(p=>p.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},nR=B('<span class="text-red-500">'),rR=B('<div class="nostr-textnote">'),iR=B('<div class="text-xs">'),sR=B('<div class="content whitespace-pre-wrap break-all">'),oR=B('<div class="textnote-content">'),aR=B('<div class="mt-1 rounded border p-1">'),lR=B('<button class="select-text pr-1 text-blue-500 hover:underline">'),Wg=B('<div class="text-sm text-zinc-400">'),cR=B('<span class="inline-block h-4 w-4">'),uR=B('<div class="flex shrink-0 items-center gap-1">'),dR=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),fR=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),hR=B('<div class="w-6">'),{noteEncode:pR}=po,gR=t=>{if(t.native!=null)return{type:"Emoji",content:t.native};if(t.src!=null)return{type:"CustomEmoji",content:`:${t.id}:`,shortcode:t.id,url:t.src};throw new Error("unknown emoji")},vR=t=>{const e=ht(),{config:n}=et(),i=Yr(),{showProfile:o}=Qr(),a=JA(),[l,u]=Re(!1),[d,f]=Re(!1),[p,g]=Re(!1),[m,_]=Re(null),w=()=>g(!1),$=()=>_(null),x=He(()=>iv(t.event)),C=()=>t.embedding??!0,M=()=>t.actions??!0,{reactions:E,reactionsGrouped:I,isReactedBy:O,isReactedByWithEmoji:A,invalidateReactions:F,query:N}=eR(()=>({eventId:t.event.id})),{reposts:K,isRepostedBy:ee,invalidateReposts:ie,query:se}=tR(()=>({eventId:t.event.id})),ae=Ol(),te=mi({mutationKey:["publishReaction",x().id],mutationFn:(...V)=>ae.publishReaction(...V).then(U=>Promise.allSettled(U.map(Hr(5e3)))),onSuccess:V=>{const U=V.filter(ne=>ne.status==="fulfilled").length,G=V.length-U;U===V.length?console.log("Succeeded to publish a reaction"):U>0?console.warn(`failed to publish a reaction on ${G} relays`):console.error("failed to publish reaction on all relays")},onError:V=>{console.error("failed to publish reaction: ",V)},onSettled:()=>{F().then(()=>N.refetch()).catch(V=>console.error("failed to refetch reactions",V))}}),j=mi({mutationKey:["publishRepost",x().id],mutationFn:(...V)=>ae.publishRepost(...V).then(U=>Promise.allSettled(U.map(Hr(1e4)))),onSuccess:V=>{const U=V.filter(ne=>ne.status==="fulfilled").length,G=V.length-U;U===V.length?console.log("Succeeded to publish a repost"):U>0?console.warn(`Failed to publish a repost on ${G} relays`):console.error("Failed to publish a repost on all relays")},onError:V=>{console.error("failed to publish repost: ",V)},onSettled:()=>{ie().then(()=>se.refetch()).catch(V=>console.error("failed to refetch reposts",V))}}),q=mi({mutationKey:["deleteEvent",x().id],mutationFn:(...V)=>ae.deleteEvent(...V).then(U=>Promise.allSettled(U.map(Hr(1e4)))),onSuccess:V=>{const U=V.filter(ne=>ne.status==="fulfilled").length,G=V.length-U;U===V.length?window.alert(e()("post.deletedSuccessfully")):U>0?window.alert(e()("post.failedToDeletePartially",{count:G})):window.alert(e()("post.failedToDelete"))},onError:V=>{console.error("failed to delete",V)}}),X=[{content:()=>e()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(pR(t.event.id)).catch(V=>window.alert(V))}},{content:()=>e()("post.showJSON"),onSelect:()=>{_("EventDebugModal")}},{content:()=>e()("post.showReposts"),onSelect:()=>{_("Reposts")}},{content:()=>e()("post.showReactions"),onSelect:()=>{_("Reactions")}},{when:()=>x().pubkey===i(),content:()=>(()=>{const V=nR();return k(V,()=>e()("post.deletePost")),V})(),onSelect:()=>{const V=i();V!=null&&window.confirm(e()("post.confirmDelete"))&&q.mutate({relayUrls:n().relayUrls,pubkey:V,eventId:x().id})}}],oe=He(()=>{const V=i();return V!=null&&O(V)||l()}),J=He(()=>{const V=i();return V!=null&&A(V)}),be=He(()=>{const V=i();return V!=null&&ee(V)||d()}),ge=()=>{if(C()){const V=x().replyingToEvent();if(V!=null&&!x().containsEventMention(V.id))return V.id;const U=x().rootEvent();if(V==null&&U!=null&&!x().containsEventMention(U.id))return U.id}},xe=V=>{V.stopPropagation(),!be()&&xn([i(),t.event.id])(([U,G])=>{j.mutate({relayUrls:n().relayUrls,pubkey:U,eventId:G,notifyPubkey:t.event.pubkey}),f(!0)})},Ve=V=>{oe()||xn([i(),t.event.id])(([U,G])=>{te.mutate({relayUrls:n().relayUrls,pubkey:U,reactionTypes:V??{type:"LikeDislike",content:"+"},eventId:G,notifyPubkey:t.event.pubkey}),u(!0)})},ue=V=>{V.stopPropagation(),Ve()},Se=V=>{Ve(gR(V))};return(()=>{const V=rR();return k(V,S(QA,{get authorPubkey(){return x().pubkey},get createdAt(){return x().createdAtAsDate()},get content(){return(()=>{const U=oR();return k(U,S(ye,{get when(){return ge()},keyed:!0,children:G=>(()=>{const ne=aR();return k(ne,S(oo,{eventId:G,actions:!1,embedding:!1})),ne})()}),null),k(U,S(ye,{get when(){return x().taggedPubkeys().length>0},get children(){const G=iR();return k(G,()=>e()("post.replyToPre"),null),k(G,S(Ft,{get each(){return x().taggedPubkeys()},children:ne=>(()=>{const _e=lR();return _e.$$click=je=>{je.stopPropagation(),o(ne)},k(_e,S(Zv,{pubkey:ne})),_e})()}),null),k(G,()=>e()("post.replyToPost"),null),G}}),null),k(U,S(QS,{get contentWarning(){return x().contentWarning()},get children(){const G=sR();return k(G,S(Vv,{get parsed(){return x().parsed()},get embedding(){return C()},get initialHidden(){return x().contentWarning().contentWarning}})),G}}),null),U})()},get actions(){return S(ye,{get when(){return M()},get children(){return[S(ye,{get when(){return He(()=>!!n().showEmojiReaction)()&&E().length>0},get children(){return S(tT,{get reactionsGrouped(){return I()},onReaction:Ve})}}),(()=>{const U=fR(),G=U.firstChild,ne=G.nextSibling,_e=ne.firstChild,je=ne.nextSibling,le=je.firstChild,Z=je.nextSibling;return G.$$click=ve=>{ve.stopPropagation(),g(tt=>!tt)},k(G,S(ZC,{})),_e.$$click=xe,k(_e,S(z1,{})),k(ne,S(ye,{get when(){return He(()=>!n().hideCount)()&&K().length>0},get children(){const ve=Wg();return k(ve,()=>K().length),ve}}),null),le.$$click=ue,k(le,S(ye,{get when(){return He(()=>!!oe())()&&!J()},get fallback(){return S(gv,{})},get children(){return S(mv,{})}})),k(je,S(ye,{get when(){return He(()=>!n().hideCount&&!n().showEmojiReaction)()&&E().length>0},get children(){const ve=Wg();return k(ve,()=>E().length),ve}}),null),k(U,S(ye,{get when(){return n().useEmojiReaction},get children(){const ve=uR();return k(ve,S(qv,{onEmojiSelect:Se,get children(){const tt=cR();return k(tt,S(vv,{})),tt}})),Be(tt=>Ea(ve,{"text-zinc-400":!oe()||!J(),"hover:text-rose-400":!oe()||!J(),"text-rose-400":oe()&&J()||te.isLoading},tt)),ve}}),Z),k(Z,S(yv,{menu:X,get children(){const ve=dR();return k(ve,S(pv,{})),ve}})),Be(ve=>{const tt={"text-zinc-400":!be(),"hover:text-green-400":!be(),"text-green-400":be()||j.isLoading},Jt=j.isLoading,Ct={"text-zinc-400":!oe()||J(),"hover:text-rose-400":!oe()||J(),"text-rose-400":oe()&&!J()||te.isLoading},Ht=te.isLoading;return ve._v$=Ea(ne,tt,ve._v$),Jt!==ve._v$2&&(_e.disabled=ve._v$2=Jt),ve._v$3=Ea(je,Ct,ve._v$3),Ht!==ve._v$4&&(le.disabled=ve._v$4=Ht),ve},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),U})()]}})},get footer(){return S(ye,{get when(){return p()},get children(){return S(tm,{mode:"reply",get replyTo(){return t.event},onClose:w,onPost:w})}})},onShowProfile:()=>{o(x().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:t.event})}}),null),k(V,S(Pn,{get children(){return[S(Ye,{get when(){return m()==="EventDebugModal"},get children(){return S(WT,{get event(){return t.event},onClose:$})}}),S(Ye,{get when(){return m()==="Reactions"},get children(){return S(Du,{get data(){return E()},pubkeyExtractor:U=>U.pubkey,renderInfo:U=>(()=>{const G=hR();return k(G,S(bv,{get reactionTypes(){return Va(U).toReactionTypes()}})),G})(),onClose:$})}}),S(Ye,{get when(){return m()==="Reposts"},get children(){return S(Du,{get data(){return K()},pubkeyExtractor:U=>U.pubkey,onClose:$})}})]}}),null),V})()};mt(["click"]);const mR=B("<span>予期しないイベント種別（<!>）"),yR=B("<span><span>未対応のイベント種別（<!>）"),nm=t=>{const e=()=>t.ensureKinds==null||t.ensureKinds.length===0||t.ensureKinds.includes(t.event.kind);return S(Pn,{get fallback(){return(()=>{const n=yR(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,k(i,()=>t.event.kind,a),k(n,S(Zs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n})()},get children(){return[S(Ye,{get when(){return!e()},keyed:!0,get children(){const n=mR(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,k(n,()=>t.event.kind,o),k(n,S(Zs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n}}),S(Ye,{get when(){return t.event.kind===ct.Text},get children(){return S(vR,{get event(){return t.event},get embedding(){return t.actions},get actions(){return t.actions}})}}),S(Ye,{get when(){return t.event.kind===ct.Repost},get children(){return S(WC,{get event(){return t.event}})}})]}})},bR=t=>{const{shouldMuteEvent:e}=et();return S(Ft,{get each(){return t.events},children:n=>S(ye,{get when(){return!e(n)},get children(){return S(n8,{get children(){return S(nm,{event:n})}})}})})};var _R=ll;function wR(){this.__data__=new _R,this.size=0}var xR=wR;function $R(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var ER=$R;function kR(t){return this.__data__.get(t)}var CR=kR;function SR(t){return this.__data__.has(t)}var TR=SR,AR=ll,RR=Yu,IR=Ju,OR=200;function LR(t,e){var n=this.__data__;if(n instanceof AR){var i=n.__data__;if(!RR||i.length<OR-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new IR(i)}return n.set(t,e),this.size=n.size,this}var PR=LR,MR=ll,BR=xR,jR=ER,NR=CR,DR=TR,UR=PR;function _s(t){var e=this.__data__=new MR(t);this.size=e.size}_s.prototype.clear=BR;_s.prototype.delete=jR;_s.prototype.get=NR;_s.prototype.has=DR;_s.prototype.set=UR;var Ld=_s;function FR(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}var zR=FR,HR=W0,WR=zR,qR=q0,ZR=1,KR=2;function VR(t,e,n,i,o,a){var l=n&ZR,u=t.length,d=e.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(t),p=a.get(e);if(f&&p)return f==e&&p==t;var g=-1,m=!0,_=n&KR?new HR:void 0;for(a.set(t,e),a.set(e,t);++g<u;){var w=t[g],$=e[g];if(i)var x=l?i($,w,g,e,t,a):i(w,$,g,t,e,a);if(x!==void 0){if(x)continue;m=!1;break}if(_){if(!WR(e,function(C,M){if(!qR(_,M)&&(w===C||o(w,C,n,i,a)))return _.push(M)})){m=!1;break}}else if(!(w===$||o(w,$,n,i,a))){m=!1;break}}return a.delete(t),a.delete(e),m}var rm=VR,GR=Jn,QR=GR.Uint8Array,im=QR;function YR(t){var e=-1,n=Array(t.size);return t.forEach(function(i,o){n[++e]=[o,i]}),n}var JR=YR,qg=ds,Zg=im,XR=Qu,eI=rm,tI=JR,nI=Xu,rI=1,iI=2,sI="[object Boolean]",oI="[object Date]",aI="[object Error]",lI="[object Map]",cI="[object Number]",uI="[object RegExp]",dI="[object Set]",fI="[object String]",hI="[object Symbol]",pI="[object ArrayBuffer]",gI="[object DataView]",Kg=qg?qg.prototype:void 0,du=Kg?Kg.valueOf:void 0;function vI(t,e,n,i,o,a,l){switch(n){case gI:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case pI:return!(t.byteLength!=e.byteLength||!a(new Zg(t),new Zg(e)));case sI:case oI:case cI:return XR(+t,+e);case aI:return t.name==e.name&&t.message==e.message;case uI:case fI:return t==e+"";case lI:var u=tI;case dI:var d=i&rI;if(u||(u=nI),t.size!=e.size&&!d)return!1;var f=l.get(t);if(f)return f==e;i|=iI,l.set(t,e);var p=eI(u(t),u(e),i,o,a,l);return l.delete(t),p;case hI:if(du)return du.call(t)==du.call(e)}return!1}var mI=vI;function yI(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}var Pd=yI,bI=Array.isArray,tr=bI,_I=Pd,wI=tr;function xI(t,e,n){var i=e(t);return wI(t)?i:_I(i,n(t))}var sm=xI;function $I(t,e){for(var n=-1,i=t==null?0:t.length,o=0,a=[];++n<i;){var l=t[n];e(l,n,t)&&(a[o++]=l)}return a}var EI=$I;function kI(){return[]}var om=kI,CI=EI,SI=om,TI=Object.prototype,AI=TI.propertyIsEnumerable,Vg=Object.getOwnPropertySymbols,RI=Vg?function(t){return t==null?[]:(t=Object(t),CI(Vg(t),function(e){return AI.call(t,e)}))}:SI,Md=RI;function II(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var OI=II;function LI(t){return t!=null&&typeof t=="object"}var Jr=LI,PI=fs,MI=Jr,BI="[object Arguments]";function jI(t){return MI(t)&&PI(t)==BI}var NI=jI,Gg=NI,DI=Jr,am=Object.prototype,UI=am.hasOwnProperty,FI=am.propertyIsEnumerable,zI=Gg(function(){return arguments}())?Gg:function(t){return DI(t)&&UI.call(t,"callee")&&!FI.call(t,"callee")},Bd=zI,tl={exports:{}};function HI(){return!1}var WI=HI;tl.exports;(function(t,e){var n=Jn,i=WI,o=e&&!e.nodeType&&e,a=o&&!0&&t&&!t.nodeType&&t,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;t.exports=f})(tl,tl.exports);var jd=tl.exports,qI=9007199254740991,ZI=/^(?:0|[1-9]\d*)$/;function KI(t,e){var n=typeof t;return e=e??qI,!!e&&(n=="number"||n!="symbol"&&ZI.test(t))&&t>-1&&t%1==0&&t<e}var Nd=KI,VI=9007199254740991;function GI(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=VI}var Dd=GI,QI=fs,YI=Dd,JI=Jr,XI="[object Arguments]",eO="[object Array]",tO="[object Boolean]",nO="[object Date]",rO="[object Error]",iO="[object Function]",sO="[object Map]",oO="[object Number]",aO="[object Object]",lO="[object RegExp]",cO="[object Set]",uO="[object String]",dO="[object WeakMap]",fO="[object ArrayBuffer]",hO="[object DataView]",pO="[object Float32Array]",gO="[object Float64Array]",vO="[object Int8Array]",mO="[object Int16Array]",yO="[object Int32Array]",bO="[object Uint8Array]",_O="[object Uint8ClampedArray]",wO="[object Uint16Array]",xO="[object Uint32Array]",at={};at[pO]=at[gO]=at[vO]=at[mO]=at[yO]=at[bO]=at[_O]=at[wO]=at[xO]=!0;at[XI]=at[eO]=at[fO]=at[tO]=at[hO]=at[nO]=at[rO]=at[iO]=at[sO]=at[oO]=at[aO]=at[lO]=at[cO]=at[uO]=at[dO]=!1;function $O(t){return JI(t)&&YI(t.length)&&!!at[QI(t)]}var EO=$O;function kO(t){return function(e){return t(e)}}var Ud=kO,nl={exports:{}};nl.exports;(function(t,e){var n=U0,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();t.exports=u})(nl,nl.exports);var Fd=nl.exports,CO=EO,SO=Ud,Qg=Fd,Yg=Qg&&Qg.isTypedArray,TO=Yg?SO(Yg):CO,lm=TO,AO=OI,RO=Bd,IO=tr,OO=jd,LO=Nd,PO=lm,MO=Object.prototype,BO=MO.hasOwnProperty;function jO(t,e){var n=IO(t),i=!n&&RO(t),o=!n&&!i&&OO(t),a=!n&&!i&&!o&&PO(t),l=n||i||o||a,u=l?AO(t.length,String):[],d=u.length;for(var f in t)(e||BO.call(t,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||LO(f,d)))&&u.push(f);return u}var cm=jO,NO=Object.prototype;function DO(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||NO;return t===n}var zd=DO;function UO(t,e){return function(n){return t(e(n))}}var um=UO,FO=um,zO=FO(Object.keys,Object),HO=zO,WO=zd,qO=HO,ZO=Object.prototype,KO=ZO.hasOwnProperty;function VO(t){if(!WO(t))return qO(t);var e=[];for(var n in Object(t))KO.call(t,n)&&n!="constructor"&&e.push(n);return e}var GO=VO,QO=z0,YO=Dd;function JO(t){return t!=null&&YO(t.length)&&!QO(t)}var dm=JO,XO=cm,eL=GO,tL=dm;function nL(t){return tL(t)?XO(t):eL(t)}var Ll=nL,rL=sm,iL=Md,sL=Ll;function oL(t){return rL(t,sL,iL)}var fm=oL,Jg=fm,aL=1,lL=Object.prototype,cL=lL.hasOwnProperty;function uL(t,e,n,i,o,a){var l=n&aL,u=Jg(t),d=u.length,f=Jg(e),p=f.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var m=u[g];if(!(l?m in e:cL.call(e,m)))return!1}var _=a.get(t),w=a.get(e);if(_&&w)return _==e&&w==t;var $=!0;a.set(t,e),a.set(e,t);for(var x=l;++g<d;){m=u[g];var C=t[m],M=e[m];if(i)var E=l?i(M,C,m,e,t,a):i(C,M,m,t,e,a);if(!(E===void 0?C===M||o(C,M,n,i,a):E)){$=!1;break}x||(x=m=="constructor")}if($&&!x){var I=t.constructor,O=e.constructor;I!=O&&"constructor"in t&&"constructor"in e&&!(typeof I=="function"&&I instanceof I&&typeof O=="function"&&O instanceof O)&&($=!1)}return a.delete(t),a.delete(e),$}var dL=uL,fL=Ti,hL=Jn,pL=fL(hL,"DataView"),gL=pL,vL=Ti,mL=Jn,yL=vL(mL,"Promise"),bL=yL,_L=Ti,wL=Jn,xL=_L(wL,"WeakMap"),$L=xL,Uu=gL,Fu=Yu,zu=bL,Hu=Z0,Wu=$L,hm=fs,ws=H0,Xg="[object Map]",EL="[object Object]",e0="[object Promise]",t0="[object Set]",n0="[object WeakMap]",r0="[object DataView]",kL=ws(Uu),CL=ws(Fu),SL=ws(zu),TL=ws(Hu),AL=ws(Wu),fi=hm;(Uu&&fi(new Uu(new ArrayBuffer(1)))!=r0||Fu&&fi(new Fu)!=Xg||zu&&fi(zu.resolve())!=e0||Hu&&fi(new Hu)!=t0||Wu&&fi(new Wu)!=n0)&&(fi=function(t){var e=hm(t),n=e==EL?t.constructor:void 0,i=n?ws(n):"";if(i)switch(i){case kL:return r0;case CL:return Xg;case SL:return e0;case TL:return t0;case AL:return n0}return e});var Pl=fi,fu=Ld,RL=rm,IL=mI,OL=dL,i0=Pl,s0=tr,o0=jd,LL=lm,PL=1,a0="[object Arguments]",l0="[object Array]",$a="[object Object]",ML=Object.prototype,c0=ML.hasOwnProperty;function BL(t,e,n,i,o,a){var l=s0(t),u=s0(e),d=l?l0:i0(t),f=u?l0:i0(e);d=d==a0?$a:d,f=f==a0?$a:f;var p=d==$a,g=f==$a,m=d==f;if(m&&o0(t)){if(!o0(e))return!1;l=!0,p=!1}if(m&&!p)return a||(a=new fu),l||LL(t)?RL(t,e,n,i,o,a):IL(t,e,d,n,i,o,a);if(!(n&PL)){var _=p&&c0.call(t,"__wrapped__"),w=g&&c0.call(e,"__wrapped__");if(_||w){var $=_?t.value():t,x=w?e.value():e;return a||(a=new fu),o($,x,n,i,a)}}return m?(a||(a=new fu),OL(t,e,n,i,o,a)):!1}var jL=BL,NL=jL,u0=Jr;function pm(t,e,n,i,o){return t===e?!0:t==null||e==null||!u0(t)&&!u0(e)?t!==t&&e!==e:NL(t,e,n,i,pm,o)}var gm=pm,DL=Ld,UL=gm,FL=1,zL=2;function HL(t,e,n,i){var o=n.length,a=o,l=!i;if(t==null)return!a;for(t=Object(t);o--;){var u=n[o];if(l&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){u=n[o];var d=u[0],f=t[d],p=u[1];if(l&&u[2]){if(f===void 0&&!(d in t))return!1}else{var g=new DL;if(i)var m=i(f,p,d,t,e,g);if(!(m===void 0?UL(p,f,FL|zL,i,g):m))return!1}}return!0}var WL=HL,qL=Si;function ZL(t){return t===t&&!qL(t)}var vm=ZL,KL=vm,VL=Ll;function GL(t){for(var e=VL(t),n=e.length;n--;){var i=e[n],o=t[i];e[n]=[i,o,KL(o)]}return e}var QL=GL;function YL(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var mm=YL,JL=WL,XL=QL,eP=mm;function tP(t){var e=XL(t);return e.length==1&&e[0][2]?eP(e[0][0],e[0][1]):function(n){return n===t||JL(n,t,e)}}var nP=tP,rP=fs,iP=Jr,sP="[object Symbol]";function oP(t){return typeof t=="symbol"||iP(t)&&rP(t)==sP}var Hd=oP,aP=tr,lP=Hd,cP=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,uP=/^\w*$/;function dP(t,e){if(aP(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||lP(t)?!0:uP.test(t)||!cP.test(t)||e!=null&&t in Object(e)}var Wd=dP,ym=Ju,fP="Expected a function";function qd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(fP);var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=t.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(qd.Cache||ym),n}qd.Cache=ym;var hP=qd,pP=hP,gP=500;function vP(t){var e=pP(t,function(i){return n.size===gP&&n.clear(),i}),n=e.cache;return e}var mP=vP,yP=mP,bP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_P=/\\(\\)?/g,wP=yP(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(bP,function(n,i,o,a){e.push(o?a.replace(_P,"$1"):i||n)}),e}),xP=wP;function $P(t,e){for(var n=-1,i=t==null?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o}var Zd=$P,d0=ds,EP=Zd,kP=tr,CP=Hd,SP=1/0,f0=d0?d0.prototype:void 0,h0=f0?f0.toString:void 0;function bm(t){if(typeof t=="string")return t;if(kP(t))return EP(t,bm)+"";if(CP(t))return h0?h0.call(t):"";var e=t+"";return e=="0"&&1/t==-SP?"-0":e}var TP=bm,AP=TP;function RP(t){return t==null?"":AP(t)}var IP=RP,OP=tr,LP=Wd,PP=xP,MP=IP;function BP(t,e){return OP(t)?t:LP(t,e)?[t]:PP(MP(t))}var xs=BP,jP=Hd,NP=1/0;function DP(t){if(typeof t=="string"||jP(t))return t;var e=t+"";return e=="0"&&1/t==-NP?"-0":e}var $s=DP,UP=xs,FP=$s;function zP(t,e){e=UP(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[FP(e[n++])];return n&&n==i?t:void 0}var Ml=zP,HP=Ml;function WP(t,e,n){var i=t==null?void 0:HP(t,e);return i===void 0?n:i}var qP=WP;function ZP(t,e){return t!=null&&e in Object(t)}var KP=ZP,VP=xs,GP=Bd,QP=tr,YP=Nd,JP=Dd,XP=$s;function eM(t,e,n){e=VP(e,t);for(var i=-1,o=e.length,a=!1;++i<o;){var l=XP(e[i]);if(!(a=t!=null&&n(t,l)))break;t=t[l]}return a||++i!=o?a:(o=t==null?0:t.length,!!o&&JP(o)&&YP(l,o)&&(QP(t)||GP(t)))}var tM=eM,nM=KP,rM=tM;function iM(t,e){return t!=null&&rM(t,e,nM)}var sM=iM,oM=gm,aM=qP,lM=sM,cM=Wd,uM=vm,dM=mm,fM=$s,hM=1,pM=2;function gM(t,e){return cM(t)&&uM(e)?dM(fM(t),e):function(n){var i=aM(n,t);return i===void 0&&i===e?lM(n,t):oM(e,i,hM|pM)}}var vM=gM;function mM(t){return t}var _m=mM;function yM(t){return function(e){return e?.[t]}}var bM=yM,_M=Ml;function wM(t){return function(e){return _M(e,t)}}var xM=wM,$M=bM,EM=xM,kM=Wd,CM=$s;function SM(t){return kM(t)?$M(CM(t)):EM(t)}var TM=SM,AM=nP,RM=vM,IM=_m,OM=tr,LM=TM;function PM(t){return typeof t=="function"?t:t==null?IM:typeof t=="object"?OM(t)?RM(t[0],t[1]):AM(t):LM(t)}var Kd=PM,MM=Kd,BM=K0;function jM(t,e){return t&&t.length?BM(t,MM(e)):[]}var NM=jM;const wm=sl(NM);let Ta=0;const{setActiveSubscriptions:DM}=lv();setInterval(()=>{DM(Ta)},1e3);const xm=t=>{const{config:e,shouldMuteEvent:n}=et(),i=Ed(),[o,a]=Re([]);mr(il(()=>[e().mutedPubkeys,e().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),xr(()=>{console.debug("subscription mounted",t()?.debugId,t()),br(()=>{console.debug("subscription unmount",t()?.debugId,t())})});const l=d=>{const p=t()?.limit??50,g=d.created_at-Nr();if(!(g>300)){if(g>0){setTimeout(()=>l(d),g*1e3);return}a(m=>{const _=fd.insertEventIntoDescendingList(m,d).slice(0,p),w=wm(_,$=>$.id);return w.length!==_.length&&console.warn("duplicated event",d),w})}},u=()=>{console.debug("startSubscription: start");const d=t();if(d==null)return;const{relayUrls:f,filters:p,options:g,onEvent:m,onEOSE:_,continuous:w=!0}=d,$=i().sub(f,p,g);let x=!0;Ta+=1;let C=!1,M=!1;const E=[];$.on("event",A=>{m?.(A),!(d.clientEventFilter!=null&&!d.clientEventFilter(A))&&(M?l(A):(C=!0,E.push(A)))}),$.on("eose",()=>{_?.(),M=!0,a(Iu(E)),w||($.unsub(),x&&(x=!1,Ta-=1))});let I=!1;const O=setInterval(()=>{if(!I){if(I=!0,M){clearInterval(O),I=!1;return}C&&(C=!1,a(Iu(E))),I=!1}},100);br(()=>{console.debug("startSubscription: end"),$.unsub(),x&&(x=!1,Ta-=1),clearInterval(O)})};return mr(()=>{u()}),{events:o}},UM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),FM=(t={})=>(()=>{const e=UM();return st(e,t,!0,!0),e})(),$m=t=>{const e=()=>{const i=t();if(i==null)return[];const o=[];return Ur(i).pTags().forEach(l=>{const[,u,d,f]=l,p={pubkey:u,petname:f};d!=null&&d.length>0&&(p.mainRelayUrl=d),o.push(p)}),o};return{followings:e,followingPubkeys:()=>e().map(i=>i.pubkey),data:t}},zM=async({pubkey:t},e)=>{const n=new ms({type:"Followings",pubkey:t});wl({task:n,signal:e});const i=await n.latestEventPromise();return $m(()=>i)},p0=t=>{const e=us(),n=He(t),i=()=>["useFollowings",n()],o=Ci(i,cv({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new ms({type:"Followings",pubkey:u})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>e.invalidateQueries(i());return{...$m(()=>o.data),invalidateFollowings:a,query:o}},HM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),WM=(t={})=>(()=>{const e=HM();return st(e,t,!0,!0),e})(),qM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Em=(t={})=>(()=>{const e=qM();return st(e,t,!0,!0),e})(),ZM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),km=(t={})=>(()=>{const e=ZM();return st(e,t,!0,!0),e})(),KM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),VM=(t={})=>(()=>{const e=KM();return st(e,t,!0,!0),e})(),GM=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani and </p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),QM=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),YM=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),JM=async()=>{const e=await(await fetch(Vu("packageInfo.json"))).text();return JSON.parse(e)},g0="de223c9",XM=t=>{const[e]=j0(JM);return S(Ii,{get onClose(){return t.onClose},get children(){const n=GM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,_=m.nextSibling;_.nextSibling;const w=g.nextSibling,$=w.nextSibling;$.firstChild;const x=$.nextSibling,C=x.nextSibling,M=C.nextSibling,E=M.nextSibling,I=E.nextSibling;return I.nextSibling,k(u,()=>e()?.self?.version,null),k(u,S(ye,{when:g0,get children(){return[" (",g0,")"]}}),null),k(g,S(ki,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),_),k($,S(ki,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit/graphs/contributors",children:"Rabbit contributors"}),null),k(I,()=>e()?.self.licenseText),k(n,S(Ft,{get each(){return e()?.packages??[]},fallback:"取得中",children:O=>[(()=>{const A=QM(),F=A.firstChild,N=F.nextSibling,K=N.nextSibling,ee=K.nextSibling;return ee.nextSibling,k(A,()=>O.name,F),k(A,()=>O.version,N),k(A,()=>O.licenseSpdx,ee),A})(),(()=>{const A=YM();return k(A,()=>O.licenseText),A})()]}),null),Be(()=>ze(o,"src",Vu("images/rabbit_app_256.png"))),n}})},eB=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),tB=t=>{const e=ht(),n=Yr(),{saveColumn:i}=et(),o=El(),a=()=>{t.onClose(),o({command:"moveToLastColumn"}).catch(m=>console.error(m))},l=()=>{xn([n()])(([m])=>{i(yd({pubkey:m}))}),a()},u=()=>{xn([n()])(([m])=>{i(q1({pubkey:m}))}),a()},d=()=>{i(K1()),a()},f=()=>{i(_d({query:""})),a()},p=()=>{xn([n()])(([m])=>{i(bd({pubkey:m}))}),a()},g=()=>{xn([n()])(([m])=>{i(V1({pubkey:m}))}),a()};return S(Ii,{get onClose(){return t.onClose},get children(){const m=eB(),_=m.firstChild,w=_.firstChild,$=_.nextSibling,x=$.firstChild,C=$.nextSibling,M=C.firstChild,E=C.nextSibling,I=E.firstChild,O=E.nextSibling,A=O.firstChild,F=O.nextSibling,N=F.firstChild;return _.$$click=()=>l(),k(w,S(FM,{})),k(_,()=>e()("column.home"),null),$.$$click=()=>u(),k(x,S(WM,{})),k($,()=>e()("column.notification"),null),C.$$click=()=>d(),k(M,S(km,{})),k(C,()=>e()("column.japanese"),null),E.$$click=()=>f(),k(I,S(VM,{})),k(E,()=>e()("column.search"),null),O.$$click=()=>p(),k(A,S(Em,{})),k(O,()=>e()("column.myPosts"),null),F.$$click=()=>g(),k(N,S(gv,{})),k(F,()=>e()("column.myReactions"),null),m}})};mt(["click"]);const nB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),rB=(t={})=>(()=>{const e=nB();return st(e,t,!0,!0),e})(),iB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),sB=(t={})=>(()=>{const e=iB();return st(e,t,!0,!0),e})(),oB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),aB=(t={})=>(()=>{const e=oB();return st(e,t,!0,!0),e})();function lB(t){const{config:e}=et(),n=He(t),{events:i}=xm(()=>({relayUrls:e().relayUrls,filters:[{kinds:[ct.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>yi(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const cB=t=>{const e=He(t),n=Ci(()=>["useVerification",e()],({queryKey:o})=>{const[,a]=o;if(a==null)return Promise.resolve(null);const{nip05:l}=a;return M1.queryProfile(l)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},uB=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),v0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),dB=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),fB=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),hB=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),m0=B('<div class="shrink-0 text-xs">'),pB=B('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),gB=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),vB=B('<div class="truncate text-xl font-bold">'),mB=B('<div class="truncate text-xs">@'),yB=B('<span class="inline-block h-3 w-3">'),bB=B('<span class="inline-block h-4 w-4 text-blue-400">'),_B=B('<div class="flex items-center text-xs">'),wB=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),xB=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),$B=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),EB=B('<ul class="border-t px-5 py-2 text-xs">'),kB=B('<ul class="border-t p-1">'),CB=B('<div class="h-12 shrink-0">'),SB=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),TB=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),AB=B('<span class="inline-block h-4 w-4 text-rose-500">'),RB=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),IB=B('<span class="text-sm">'),OB=B('<button class="text-sm hover:text-stone-800 hover:underline">'),LB=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),PB=t=>{const{count:e}=lB(()=>({pubkey:t.pubkey}));return He(e)},MB=t=>{const e=ht(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a,saveColumn:l}=et(),u=El(),d=Ol(),f=Yr(),{showProfileEdit:p}=Qr(),g=He(()=>mo(t.pubkey)),[m,_]=Re(!1),[w,$]=Re(!1),[x,C]=Re(!1),[M,E]=Re(null),I=()=>E(null),{profile:O,event:A,query:F}=ys(()=>({pubkey:t.pubkey})),{verification:N,query:K}=cB(()=>xn([O()?.nip05])(([U])=>({nip05:U}))),ee=()=>{const U=O()?.nip05;if(U==null)return null;const[G,ne]=U.split("@");return ne==null?null:G==="_"?{domain:ne,ident:ne}:{user:G,domain:ne,ident:U}},ie=()=>N()?.pubkey===t.pubkey,se=()=>a(t.pubkey),ae=He(()=>{const U=A(),G=O()?.about;if(U==null||G==null)return;const ne=xd(G);return rv(ne,Ur(U))}),{followingPubkeys:te,invalidateFollowings:j,query:q}=p0(()=>xn([f()])(([U])=>({pubkey:U}))),X=()=>te().includes(t.pubkey),{followingPubkeys:oe,query:J}=p0(()=>({pubkey:t.pubkey})),be=()=>{const U=f();return U!=null&&oe().includes(U)},ge=mi({mutationKey:["updateContacts"],mutationFn:(...U)=>d.updateContacts(...U).then(G=>Promise.allSettled(G.map(Hr(5e3)))),onSuccess:U=>{const G=U.filter(_e=>_e.status==="fulfilled").length,ne=U.length-G;G===U.length?console.log("succeeded to update contacts"):G>0?console.log(`succeeded to update contacts for ${G} relays but failed for ${ne} relays`):console.error("failed to update contacts")},onError:U=>{console.error("failed to update contacts: ",U)},onSettled:()=>{j().then(()=>q.refetch()).catch(U=>console.error("failed to refetch contacts",U))}}),xe=async(U,G)=>{try{const ne=f();if(ne==null)return;_(!0);const _e=await zM({pubkey:ne});if((_e.data()==null||_e.followingPubkeys().length===0)&&!window.confirm(e()("profile.confirmUpdateEvenIfEmpty")))return;if((_e?.data()?.created_at??0)<(q.data?.created_at??0)){window.alert(e()("profile.failedToFetchLatestFollowList"));return}const je=_e.data()?.tags??[];let le;switch(U){case"follow":le=[...je,["p",G]];break;case"unfollow":le=je.filter(([Z,ve])=>!(Z==="p"&&ve===G));break;default:console.error("updateContacts: invalid operation",U);return}await ge.mutateAsync({relayUrls:n().relayUrls,pubkey:ne,updatedTags:le,content:_e.data()?.content??""})}catch(ne){console.error("failed to update contact list",ne),window.alert(e()("profile.failedToUpdateFollowList"))}finally{_(!1)}},Ve=()=>{xe("follow",t.pubkey).catch(U=>{console.log("failed to follow",U)})},ue=()=>{window.confirm(e()("profile.confirmUnfollow"))&&xe("unfollow",t.pubkey).catch(U=>{console.log("failed to unfollow",U)})},Se=[{content:()=>e()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(g()).catch(U=>window.alert(U))}},{content:()=>e()("profile.addUserColumn"),onSelect:()=>{const U=O()?.name??g();l(bd({name:U,pubkey:t.pubkey})),u({command:"moveToLastColumn"}).catch(G=>console.error(G)),t.onClose?.()}},{content:()=>e()("profile.addUserHomeColumn"),onSelect:()=>{const U=`${e()("column.home")} / ${O()?.name??g()}`;l(yd({name:U,pubkey:t.pubkey})),u({command:"moveToLastColumn"}).catch(G=>console.error(G)),t.onClose?.()}},{content:()=>se()?e()("profile.unmute"):e()("profile.mute"),onSelect:()=>{se()?o(t.pubkey):i(t.pubkey)}},{when:()=>t.pubkey===f(),content:()=>X()?e()("profile.unfollowMyself"):e()("profile.followMyself"),onSelect:()=>{X()?ue():Ve()}}],{events:V}=xm(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[t.pubkey],limit:10,until:Nr()}],continuous:!1}));return S(Ii,{onClose:()=>t.onClose?.(),get children(){return[S(ye,{get when(){return He(()=>!!F.isFetched)()&&O()?.banner},get fallback(){return CB()},keyed:!0,children:U=>(()=>{const G=SB(),ne=G.firstChild;return ze(ne,"src",U),G})()}),(()=>{const U=gB(),G=U.firstChild,ne=G.firstChild;return k(ne,S(ye,{get when(){return He(()=>!!F.isFetched)()&&O()?.picture},keyed:!0,children:_e=>(()=>{const je=TB();return ze(je,"src",_e),je})()})),k(U,S(ye,{get when(){return f()!=null},get children(){const _e=pB(),je=_e.firstChild;return k(je,S(Pn,{get children(){return[S(Ye,{get when(){return t.pubkey===f()},get children(){const le=uB();return le.$$click=()=>p(),k(le,()=>e()("profile.editProfile")),le}}),S(Ye,{get when(){return ge.isLoading||m()},get children(){const le=v0();return k(le,()=>e()("general.updating")),le}}),S(Ye,{get when(){return q.isLoading||q.isFetching},get children(){const le=v0();return k(le,()=>e()("general.loading")),le}}),S(Ye,{get when(){return X()},get children(){const le=dB();return le.$$click=()=>ue(),le.addEventListener("mouseleave",()=>$(!1)),le.addEventListener("mouseenter",()=>$(!0)),k(le,S(ye,{get when(){return!w()},get fallback(){return e()("profile.unfollow")},get children(){return e()("profile.followingCurrently")}})),Be(()=>le.disabled=ge.isLoading),le}}),S(Ye,{get when(){return!X()},get children(){const le=fB();return le.$$click=()=>Ve(),k(le,()=>e()("profile.follow")),Be(()=>le.disabled=ge.isLoading),le}})]}}),null),k(je,S(yv,{menu:Se,get children(){const le=hB();return k(le,S(pv,{})),le}}),null),k(_e,S(Pn,{get children(){return[S(Ye,{get when(){return J.isLoading},get children(){const le=m0();return k(le,()=>e()("general.loading")),le}}),S(Ye,{get when(){return be()},get children(){const le=m0();return k(le,()=>e()("profile.followsYou")),le}})]}}),null),_e}}),null),U})(),(()=>{const U=wB(),G=U.firstChild,ne=G.firstChild,_e=ne.nextSibling,je=_e.firstChild;return k(G,S(ye,{get when(){return F.isLoading},get children(){return e()("general.loading")}}),ne),k(G,S(ye,{get when(){return(O()?.display_name?.length??0)>0},get children(){const le=vB();return k(le,()=>O()?.display_name),le}}),ne),k(ne,S(ye,{get when(){return(O()?.name?.length??0)>0},get children(){const le=mB();return le.firstChild,k(le,()=>O()?.name,null),le}}),null),k(ne,S(ye,{get when(){return(O()?.nip05?.length??0)>0},get children(){const le=_B();return k(le,()=>ee()?.ident,null),k(le,S(Pn,{get fallback(){return(()=>{const Z=AB();return k(Z,S(aB,{})),Z})()},get children(){return[S(Ye,{get when(){return K.isLoading},get children(){const Z=yB();return k(Z,S(rB,{})),Z}}),S(Ye,{get when(){return ie()},get children(){const Z=bB();return k(Z,S(sB,{})),Z}})]}}),null),le}}),null),k(je,g),U})(),S(ye,{get when(){return ae()},keyed:!0,children:U=>(()=>{const G=RB();return k(G,S(Vv,{parsed:U,embedding:!1,initialHidden:!0})),G})()}),(()=>{const U=$B(),G=U.firstChild,ne=G.firstChild,_e=ne.nextSibling;return G.$$click=()=>E("Following"),k(ne,()=>e()("profile.following")),k(_e,S(ye,{get when(){return J.isFetched},get fallback(){return(()=>{const je=IB();return k(je,()=>e()("general.loading")),je})()},get children(){return oe().length}})),k(U,S(ye,{get when(){return!n().hideCount},get children(){const je=xB(),le=je.firstChild,Z=le.nextSibling;return k(le,()=>e()("profile.followers")),k(Z,S(ye,{get when(){return x()},get fallback(){return(()=>{const ve=OB();return ve.$$click=()=>C(!0),k(ve,()=>e()("profile.loadFollowers")),ve})()},keyed:!0,get children(){return S(PB,{get pubkey(){return t.pubkey}})}})),je}}),null),U})(),S(ye,{get when(){return(O()?.website??"").length>0},get children(){const U=EB();return k(U,S(ye,{get when(){return O()?.website},keyed:!0,children:G=>(()=>{const ne=LB(),_e=ne.firstChild;return k(_e,S(km,{})),k(ne,S(ki,{class:"text-blue-500 underline",href:G}),null),ne})()})),U}}),S(Pn,{get children(){return S(Ye,{get when(){return M()==="Following"},get children(){return S(Du,{get data(){return oe()},pubkeyExtractor:U=>U,onClose:I})}})}}),(()=>{const U=kB();return k(U,S(bR,{get events(){return V()}})),U})()]}})};mt(["click"]);function BB(t,e){for(var n=-1,i=t==null?0:t.length;++n<i&&e(t[n],n,t)!==!1;);return t}var jB=BB,NB=Ti,DB=function(){try{var t=NB(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Cm=DB,y0=Cm;function UB(t,e,n){e=="__proto__"&&y0?y0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Sm=UB,FB=Sm,zB=Qu,HB=Object.prototype,WB=HB.hasOwnProperty;function qB(t,e,n){var i=t[e];(!(WB.call(t,e)&&zB(i,n))||n===void 0&&!(e in t))&&FB(t,e,n)}var Vd=qB,ZB=Vd,KB=Sm;function VB(t,e,n,i){var o=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var u=e[a],d=i?i(n[u],t[u],u,n,t):void 0;d===void 0&&(d=t[u]),o?KB(n,u,d):ZB(n,u,d)}return n}var _o=VB,GB=_o,QB=Ll;function YB(t,e){return t&&GB(e,QB(e),t)}var JB=YB;function XB(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var ej=XB,tj=Si,nj=zd,rj=ej,ij=Object.prototype,sj=ij.hasOwnProperty;function oj(t){if(!tj(t))return rj(t);var e=nj(t),n=[];for(var i in t)i=="constructor"&&(e||!sj.call(t,i))||n.push(i);return n}var aj=oj,lj=cm,cj=aj,uj=dm;function dj(t){return uj(t)?lj(t,!0):cj(t)}var Gd=dj,fj=_o,hj=Gd;function pj(t,e){return t&&fj(e,hj(e),t)}var gj=pj,rl={exports:{}};rl.exports;(function(t,e){var n=Jn,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,p){if(p)return f.slice();var g=f.length,m=u?u(g):new f.constructor(g);return f.copy(m),m}t.exports=d})(rl,rl.exports);var vj=rl.exports;function mj(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}var yj=mj,bj=_o,_j=Md;function wj(t,e){return bj(t,_j(t),e)}var xj=wj,$j=um,Ej=$j(Object.getPrototypeOf,Object),Qd=Ej,kj=Pd,Cj=Qd,Sj=Md,Tj=om,Aj=Object.getOwnPropertySymbols,Rj=Aj?function(t){for(var e=[];t;)kj(e,Sj(t)),t=Cj(t);return e}:Tj,Tm=Rj,Ij=_o,Oj=Tm;function Lj(t,e){return Ij(t,Oj(t),e)}var Pj=Lj,Mj=sm,Bj=Tm,jj=Gd;function Nj(t){return Mj(t,jj,Bj)}var Yd=Nj,Dj=Object.prototype,Uj=Dj.hasOwnProperty;function Fj(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&Uj.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var zj=Fj,b0=im;function Hj(t){var e=new t.constructor(t.byteLength);return new b0(e).set(new b0(t)),e}var Jd=Hj,Wj=Jd;function qj(t,e){var n=e?Wj(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Zj=qj,Kj=/\w*$/;function Vj(t){var e=new t.constructor(t.source,Kj.exec(t));return e.lastIndex=t.lastIndex,e}var Gj=Vj,_0=ds,w0=_0?_0.prototype:void 0,x0=w0?w0.valueOf:void 0;function Qj(t){return x0?Object(x0.call(t)):{}}var Yj=Qj,Jj=Jd;function Xj(t,e){var n=e?Jj(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var eN=Xj,tN=Jd,nN=Zj,rN=Gj,iN=Yj,sN=eN,oN="[object Boolean]",aN="[object Date]",lN="[object Map]",cN="[object Number]",uN="[object RegExp]",dN="[object Set]",fN="[object String]",hN="[object Symbol]",pN="[object ArrayBuffer]",gN="[object DataView]",vN="[object Float32Array]",mN="[object Float64Array]",yN="[object Int8Array]",bN="[object Int16Array]",_N="[object Int32Array]",wN="[object Uint8Array]",xN="[object Uint8ClampedArray]",$N="[object Uint16Array]",EN="[object Uint32Array]";function kN(t,e,n){var i=t.constructor;switch(e){case pN:return tN(t);case oN:case aN:return new i(+t);case gN:return nN(t,n);case vN:case mN:case yN:case bN:case _N:case wN:case xN:case $N:case EN:return sN(t,n);case lN:return new i;case cN:case fN:return new i(t);case uN:return rN(t);case dN:return new i;case hN:return iN(t)}}var CN=kN,SN=Si,$0=Object.create,TN=function(){function t(){}return function(e){if(!SN(e))return{};if($0)return $0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),AN=TN,RN=AN,IN=Qd,ON=zd;function LN(t){return typeof t.constructor=="function"&&!ON(t)?RN(IN(t)):{}}var PN=LN,MN=Pl,BN=Jr,jN="[object Map]";function NN(t){return BN(t)&&MN(t)==jN}var DN=NN,UN=DN,FN=Ud,E0=Fd,k0=E0&&E0.isMap,zN=k0?FN(k0):UN,HN=zN,WN=Pl,qN=Jr,ZN="[object Set]";function KN(t){return qN(t)&&WN(t)==ZN}var VN=KN,GN=VN,QN=Ud,C0=Fd,S0=C0&&C0.isSet,YN=S0?QN(S0):GN,JN=YN,XN=Ld,eD=jB,tD=Vd,nD=JB,rD=gj,iD=vj,sD=yj,oD=xj,aD=Pj,lD=fm,cD=Yd,uD=Pl,dD=zj,fD=CN,hD=PN,pD=tr,gD=jd,vD=HN,mD=Si,yD=JN,bD=Ll,_D=Gd,wD=1,xD=2,$D=4,Am="[object Arguments]",ED="[object Array]",kD="[object Boolean]",CD="[object Date]",SD="[object Error]",Rm="[object Function]",TD="[object GeneratorFunction]",AD="[object Map]",RD="[object Number]",Im="[object Object]",ID="[object RegExp]",OD="[object Set]",LD="[object String]",PD="[object Symbol]",MD="[object WeakMap]",BD="[object ArrayBuffer]",jD="[object DataView]",ND="[object Float32Array]",DD="[object Float64Array]",UD="[object Int8Array]",FD="[object Int16Array]",zD="[object Int32Array]",HD="[object Uint8Array]",WD="[object Uint8ClampedArray]",qD="[object Uint16Array]",ZD="[object Uint32Array]",it={};it[Am]=it[ED]=it[BD]=it[jD]=it[kD]=it[CD]=it[ND]=it[DD]=it[UD]=it[FD]=it[zD]=it[AD]=it[RD]=it[Im]=it[ID]=it[OD]=it[LD]=it[PD]=it[HD]=it[WD]=it[qD]=it[ZD]=!0;it[SD]=it[Rm]=it[MD]=!1;function Aa(t,e,n,i,o,a){var l,u=e&wD,d=e&xD,f=e&$D;if(n&&(l=o?n(t,i,o,a):n(t)),l!==void 0)return l;if(!mD(t))return t;var p=pD(t);if(p){if(l=dD(t),!u)return sD(t,l)}else{var g=uD(t),m=g==Rm||g==TD;if(gD(t))return iD(t,u);if(g==Im||g==Am||m&&!o){if(l=d||m?{}:hD(t),!u)return d?aD(t,rD(l,t)):oD(t,nD(l,t))}else{if(!it[g])return o?t:{};l=fD(t,g,u)}}a||(a=new XN);var _=a.get(t);if(_)return _;a.set(t,l),yD(t)?t.forEach(function(x){l.add(Aa(x,e,n,x,t,a))}):vD(t)&&t.forEach(function(x,C){l.set(C,Aa(x,e,n,C,t,a))});var w=f?d?cD:lD:d?_D:bD,$=p?void 0:w(t);return eD($||t,function(x,C){$&&(C=x,x=t[C]),tD(l,C,Aa(x,e,n,C,t,a))}),l}var KD=Aa;function VD(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var GD=VD;function QD(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++i<o;)a[i]=t[i+e];return a}var YD=QD,JD=Ml,XD=YD;function eU(t,e){return e.length<2?t:JD(t,XD(e,0,-1))}var tU=eU,nU=xs,rU=GD,iU=tU,sU=$s;function oU(t,e){return e=nU(e,t),t=iU(t,e),t==null||delete t[sU(rU(e))]}var aU=oU,lU=fs,cU=Qd,uU=Jr,dU="[object Object]",fU=Function.prototype,hU=Object.prototype,Om=fU.toString,pU=hU.hasOwnProperty,gU=Om.call(Object);function vU(t){if(!uU(t)||lU(t)!=dU)return!1;var e=cU(t);if(e===null)return!0;var n=pU.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Om.call(n)==gU}var mU=vU,yU=mU;function bU(t){return yU(t)?void 0:t}var _U=bU,T0=ds,wU=Bd,xU=tr,A0=T0?T0.isConcatSpreadable:void 0;function $U(t){return xU(t)||wU(t)||!!(A0&&t&&t[A0])}var EU=$U,kU=Pd,CU=EU;function Lm(t,e,n,i,o){var a=-1,l=t.length;for(n||(n=CU),o||(o=[]);++a<l;){var u=t[a];e>0&&n(u)?e>1?Lm(u,e-1,n,i,o):kU(o,u):i||(o[o.length]=u)}return o}var SU=Lm,TU=SU;function AU(t){var e=t==null?0:t.length;return e?TU(t,1):[]}var RU=AU;function IU(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var OU=IU,LU=OU,R0=Math.max;function PU(t,e,n){return e=R0(e===void 0?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=R0(i.length-e,0),l=Array(a);++o<a;)l[o]=i[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=i[o];return u[e]=n(l),LU(t,this,u)}}var MU=PU;function BU(t){return function(){return t}}var jU=BU,NU=jU,I0=Cm,DU=_m,UU=I0?function(t,e){return I0(t,"toString",{configurable:!0,enumerable:!1,value:NU(e),writable:!0})}:DU,FU=UU,zU=800,HU=16,WU=Date.now;function qU(t){var e=0,n=0;return function(){var i=WU(),o=HU-(i-n);if(n=i,o>0){if(++e>=zU)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var ZU=qU,KU=FU,VU=ZU,GU=VU(KU),QU=GU,YU=RU,JU=MU,XU=QU;function eF(t){return XU(JU(t,void 0,YU),t+"")}var tF=eF,nF=Zd,rF=KD,iF=aU,sF=xs,oF=_o,aF=_U,lF=tF,cF=Yd,uF=1,dF=2,fF=4,hF=lF(function(t,e){var n={};if(t==null)return n;var i=!1;e=nF(e,function(a){return a=sF(a,t),i||(i=a.length>1),a}),oF(t,cF(t),n),i&&(n=rF(n,uF|dF|fF,aF));for(var o=e.length;o--;)iF(n,e[o]);return n}),pF=hF;const gF=sl(pF);var vF="Expected a function";function mF(t){if(typeof t!="function")throw new TypeError(vF);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var yF=mF,bF=Vd,_F=xs,wF=Nd,O0=Si,xF=$s;function $F(t,e,n,i){if(!O0(t))return t;e=_F(e,t);for(var o=-1,a=e.length,l=a-1,u=t;u!=null&&++o<a;){var d=xF(e[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return t;if(o!=l){var p=u[d];f=i?i(p,d,u):void 0,f===void 0&&(f=O0(p)?p:wF(e[o+1])?[]:{})}bF(u,d,f),u=u[d]}return t}var EF=$F,kF=Ml,CF=EF,SF=xs;function TF(t,e,n){for(var i=-1,o=e.length,a={};++i<o;){var l=e[i],u=kF(t,l);n(u,l)&&CF(a,SF(l,t),u)}return a}var AF=TF,RF=Zd,IF=Kd,OF=AF,LF=Yd;function PF(t,e){if(t==null)return{};var n=RF(LF(t),function(i){return[i]});return e=IF(e),OF(t,n,function(i,o){return e(i,o[0])})}var MF=PF,BF=Kd,jF=yF,NF=MF;function DF(t,e){return NF(t,jF(BF(e)))}var UF=DF;const FF=sl(UF),zF=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),HF=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),WF=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),qF=B('<div class="px-4 pt-4">'),ZF=B('<div><span class="font-bold"></span><div>'),KF=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><span class="text-xs"></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),VF=B('<div class="h-24 shrink-0">'),GF=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),QF="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",YF="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",JF=new RegExp(`^${QF}$`),Pm=new RegExp(`^${YF}$`),XF=t=>JF.test(t),ez=t=>Pm.test(t),tz=t=>{const e=ht(),n=Yr(),{config:i}=et(),[o,a]=Re(""),[l,u]=Re(""),[d,f]=Re(""),[p,g]=Re(""),[m,_]=Re(""),[w,$]=Re(""),[x,C]=Re(""),[M,E]=Re(""),{profile:I,invalidateProfile:O,query:A}=ys(()=>xn([n()])(([te])=>({pubkey:te}))),{updateProfile:F}=Ol(),N=mi({mutationKey:["updateProfile"],mutationFn:(...te)=>F(...te).then(j=>Promise.allSettled(j.map(Hr(1e4)))),onSuccess:te=>{const j=te.filter(X=>X.status==="fulfilled").length,q=te.length-j;j===te.length?window.alert(e()("profile.edit.updateSucceeded")):j>0?window.alert(e()("profile.edit.failedToUpdatePartially",{count:q})):window.alert(e()("profile.edit.failedToUpdate")),O().then(()=>A.refetch()).catch(X=>console.error(X)),t.onClose()},onError:te=>{console.error("failed to delete",te)}}),K=()=>A.isLoading||N.isLoading,ee=()=>K();setInterval(()=>console.log(A.isLoading,N.isLoading),1e3);const ie=()=>gF(I(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),se=te=>{te.preventDefault();const j=n();if(j==null)return;const q=FF({picture:o(),banner:l(),name:d(),display_name:p(),about:m(),website:w(),nip05:x(),lud06:XF(M())?M():null,lud16:ez(M())?M():null},X=>X==null||X.length===0);N.mutate({relayUrls:i().relayUrls,pubkey:j,profile:q,otherProperties:ie()})},ae=te=>te.key==="Enter"&&te.preventDefault();return xr(()=>{const te=I();te!=null&&(A.refetch().catch(j=>console.error(j)),Ia(()=>{a(j=>te.picture??j),u(j=>te.banner??j),f(j=>te.name??j),g(j=>te.display_name??j),_(j=>te.about??j),$(j=>te.website??j),C(j=>te.nip05??j),te.lud16!=null?E(te.lud16):te.lud06!=null&&E(te.lud06)}))}),S(Ii,{closeButton:()=>S(D0,{}),get onClose(){return t.onClose},get children(){return[(()=>{const te=WF(),j=te.firstChild;return k(te,S(ye,{get when(){return l().length>0},get fallback(){return VF()},keyed:!0,get children(){const q=zF(),X=q.firstChild;return Be(()=>ze(X,"src",l())),q}}),j),k(j,S(ye,{get when(){return o().length>0},get children(){const q=HF();return Be(()=>ze(q,"src",o())),q}})),te})(),S(ye,{get when(){return K()},get children(){const te=qF();return k(te,()=>e()("general.loading")),te}}),(()=>{const te=KF(),j=te.firstChild,q=j.firstChild,X=q.firstChild,oe=X.nextSibling,J=q.nextSibling,be=J.firstChild,ge=be.nextSibling,xe=J.nextSibling,Ve=xe.firstChild,ue=Ve.nextSibling,Se=ue.firstChild,V=Se.nextSibling,U=xe.nextSibling,G=U.firstChild,ne=G.nextSibling,_e=U.nextSibling,je=_e.firstChild,le=je.nextSibling,Z=_e.nextSibling,ve=Z.firstChild,tt=ve.nextSibling,Jt=Z.nextSibling,Ct=Jt.firstChild,Ht=Ct.nextSibling,Xr=Jt.nextSibling,En=Xr.firstChild,St=En.nextSibling,Xt=St.nextSibling,Un=Xr.nextSibling,Er=Un.firstChild,kn=Er.nextSibling;return j.addEventListener("submit",se),k(X,()=>e()("profile.edit.icon")),oe.$$keydown=ae,oe.addEventListener("blur",Ae=>a(Ae.currentTarget.value)),k(be,()=>e()("profile.edit.banner")),ge.$$keydown=ae,ge.addEventListener("blur",Ae=>u(Ae.currentTarget.value)),k(Ve,()=>e()("profile.edit.name")),V.$$keydown=ae,V.addEventListener("change",Ae=>f(Ae.currentTarget.value)),k(G,()=>e()("profile.edit.displayName")),ne.$$keydown=ae,ne.addEventListener("change",Ae=>g(Ae.currentTarget.value)),k(je,()=>e()("profile.edit.about")),le.addEventListener("change",Ae=>_(Ae.currentTarget.value)),k(ve,()=>e()("profile.edit.website")),tt.$$keydown=ae,tt.addEventListener("change",Ae=>$(Ae.currentTarget.value)),k(Ct,()=>e()("profile.edit.nip05")),Ht.$$keydown=ae,Ht.addEventListener("change",Ae=>C(Ae.currentTarget.value)),k(En,()=>e()("profile.edit.lightningAddress")),k(St,()=>e()("profile.edit.lightningAddressDescription")),Xt.$$keydown=ae,Xt.addEventListener("change",Ae=>E(Ae.currentTarget.value)),k(j,S(ye,{get when(){return Object.entries(ie()).length>0},get children(){const Ae=ZF(),Wt=Ae.firstChild,qt=Wt.nextSibling;return k(Wt,()=>e()("profile.edit.otherProperties")),k(qt,S(Ft,{get each(){return Object.entries(ie())},children:([Cn,Sn])=>(()=>{const un=GF(),dn=un.firstChild,Tn=dn.nextSibling;return k(dn,Cn),k(Tn,Sn),un})()})),Ae}}),Un),k(Er,()=>e()("profile.edit.save")),kn.$$click=()=>t.onClose(),k(kn,()=>e()("profile.edit.cancel")),k(j,S(ye,{get when(){return N.isLoading},get children(){return e()("profile.edit.updating")}}),null),Be(Ae=>{const Wt=ee(),qt=ee(),Cn=ee(),Sn=ee(),un=ee(),dn=ee(),Tn=Pm.source,nr=ee(),rr=ee(),ir=N.isLoading;return Wt!==Ae._v$&&(oe.disabled=Ae._v$=Wt),qt!==Ae._v$2&&(ge.disabled=Ae._v$2=qt),Cn!==Ae._v$3&&(V.disabled=Ae._v$3=Cn),Sn!==Ae._v$4&&(ne.disabled=Ae._v$4=Sn),un!==Ae._v$5&&(le.disabled=Ae._v$5=un),dn!==Ae._v$6&&(tt.disabled=Ae._v$6=dn),Tn!==Ae._v$7&&ze(Ht,"pattern",Ae._v$7=Tn),nr!==Ae._v$8&&(Ht.disabled=Ae._v$8=nr),rr!==Ae._v$9&&(Xt.disabled=Ae._v$9=rr),ir!==Ae._v$10&&(Er.disabled=Ae._v$10=ir),Ae},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Be(()=>oe.value=o()),Be(()=>ge.value=l()),Be(()=>V.value=d()),Be(()=>ne.value=p()),Be(()=>le.value=m()),Be(()=>tt.value=w()),Be(()=>Ht.value=x()),Be(()=>Xt.value=M()),te})()]}})};mt(["keydown","click"]);const rH=()=>{const t=Yr(),{modalState:e,showProfile:n,closeModal:i}=Qr();return S(ye,{get when(){return e()},keyed:!0,children:o=>S(Pn,{get children(){return[S(Ye,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>S(MB,{pubkey:a,onClose:i})}),S(Ye,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return S(tz,{onClose:()=>xn([t()])(([a])=>{n(a)})})}}),S(Ye,{get when(){return o.type==="AddColumn"},get children(){return S(tB,{onClose:i})}}),S(Ye,{get when(){return o.type==="About"},get children(){return S(XM,{onClose:i})}})]}})})},nz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),rz=(t={})=>(()=>{const e=nz();return st(e,t,!0,!0),e})(),iz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),L0=(t={})=>(()=>{const e=iz();return st(e,t,!0,!0),e})(),sz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),oz=(t={})=>(()=>{const e=sz();return st(e,t,!0,!0),e})(),az=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),lz=(t={})=>(()=>{const e=az();return st(e,t,!0,!0),e})(),cz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),uz=(t={})=>(()=>{const e=cz();return st(e,t,!0,!0),e})(),dz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),fz=(t={})=>(()=>{const e=dz();return st(e,t,!0,!0),e})(),P0=yt.string().length(64).regex(/^[0-9a-f]{64}$/),qu=yt.string().regex(/^\w+$/),hz=yt.object({shortcode:qu,url:yt.string().url(),keywords:yt.optional(yt.array(qu))}),pz=yt.object({manifest:yt.literal("emojipack_v1"),name:yt.string(),emojis:yt.array(hz),description:yt.optional(yt.string()),author:yt.optional(P0),publisher:yt.optional(P0)}).refine(t=>wm(t.emojis,n=>n.shortcode).length===t.emojis.length,{message:"shortcodes should be unique"}),Mm=yt.record(qu,yt.string().url());pz.or(Mm);const gz=t=>Object.entries(t).map(([e,n])=>({shortcode:e,url:n})),vz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),mz=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),yz=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),Zu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),bz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),_z=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),wz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),xz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),$z=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Ez=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),kz=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Cz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),Sz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Tz=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">YouTube</div></div><div class="flex w-full"><div class="flex-1">X (Twitter)</div></div><div class="flex w-full"><div class="flex-1">OGP'),Az=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),Rz=B('<div class="p-4">'),Iz=B('<h2 class="flex-1 text-center text-lg font-bold">'),Oz=B('<ul class="flex flex-col">'),Lz=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),Pz=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Bm=t=>`^(?:${t})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Mz=Bm("https?"),Bz=Bm("wss?"),jz=()=>{const t=ht(),e=Yr(),{showProfile:n,showProfileEdit:i}=Qr();return(()=>{const o=vz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return k(a,()=>t()("config.profile.profile")),u.$$click=()=>xn([e()])(([f])=>{n(f)}),k(u,()=>t()("config.profile.openProfile")),d.$$click=()=>i(),k(d,()=>t()("config.profile.editProfile")),o})()},Nz=()=>{const t=ht(),{config:e,addRelay:n,removeRelay:i}=et(),[o,a]=Re(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([_])=>_).join(`
`);if(d.length===0){window.alert(t()("config.relays.notConfigured"));return}if(!window.confirm(`${t()("config.relays.askImport")}

${f}`))return;const p=e().relayUrls.length;Ia(()=>{d.forEach(([_])=>{n(_)})});const m=e().relayUrls.length-p;window.alert(t()("config.relays.imported",{count:m}))};return[(()=>{const d=mz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.nextSibling,_=m.firstChild,w=_.nextSibling;return k(f,()=>t()("config.relays.relays")),k(p,()=>t()("config.relays.numOfRelays",{count:e().relayUrls.length})),k(g,S(Ft,{get each(){return e().relayUrls},children:$=>(()=>{const x=Zu(),C=x.firstChild,M=C.nextSibling;return k(C,$),M.$$click=()=>i($),k(M,S(cs,{})),x})()})),m.addEventListener("submit",l),_.addEventListener("change",$=>a($.currentTarget.value)),ze(_,"pattern",Bz),k(w,()=>t()("config.relays.addRelay")),Be(()=>_.value=o()),d})(),(()=>{const d=yz(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.relays.importRelays")),p.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(t()("config.relays.failedToImport"))})},k(p,()=>t()("config.relays.importFromExtension")),d})()]},Dz=()=>{const t=ht(),{config:e,setConfig:n}=et(),i=[{id:"relative",name:t()("config.display.relativeTimeNotation"),example:t()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:t()("config.display.absoluteTimeNotationShort"),example:t()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:t()("config.display.absoluteTimeNotationLong"),example:t()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=bz(),l=a.firstChild,u=l.nextSibling;return k(l,()=>t()("config.display.timeNotation")),k(u,S(Ft,{each:i,children:({id:d,name:f,example:p})=>(()=>{const g=_z(),m=g.firstChild,_=m.nextSibling;return m.$$click=()=>o(d),k(m,f),k(_,p),Be(w=>{const $=e().dateFormat===d,x=e().dateFormat===d,C=e().dateFormat!==d,M=e().dateFormat!==d;return $!==w._v$&&m.classList.toggle("bg-rose-300",w._v$=$),x!==w._v$2&&m.classList.toggle("text-white",w._v$2=x),C!==w._v$3&&m.classList.toggle("bg-white",w._v$3=C),M!==w._v$4&&m.classList.toggle("text-rose-300",w._v$4=M),w},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},qr=t=>(()=>{const e=wz();return e.$$click=n=>t.onClick(n),Be(n=>{const i=!t.value,o=!t.value,a=!!t.value,l=!!t.value,u=t.value;return i!==n._v$5&&e.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&e.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&e.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&e.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&ze(e,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})(),Uz=()=>{const t=ht(),{config:e,setConfig:n}=et(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=xz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,p=d.nextSibling,g=p.firstChild;return k(l,()=>t()("config.display.reaction")),k(f,()=>t()("config.display.enableEmojiReaction")),k(d,S(qr,{get value(){return e().useEmojiReaction},onClick:()=>i()}),null),k(g,()=>t()("config.display.showEmojiReaction")),k(p,S(qr,{get value(){return e().showEmojiReaction},onClick:()=>o()}),null),a})()},Fz=()=>{const t=ht(),{config:e,saveEmoji:n,removeEmoji:i}=et(),[o,a]=Re(""),[l,u]=Re(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=$z(),p=f.firstChild,g=p.nextSibling,m=g.nextSibling,_=m.firstChild,w=_.firstChild,$=w.nextSibling,x=_.nextSibling,C=x.firstChild,M=C.nextSibling,E=x.nextSibling;return k(p,()=>t()("config.customEmoji.customEmoji")),k(g,S(Ft,{get each(){return Object.values(e().customEmojis)},children:({shortcode:I,url:O})=>(()=>{const A=Ez(),F=A.firstChild,N=F.nextSibling,K=N.nextSibling;return ze(F,"src",O),ze(F,"alt",I),k(N,I),K.$$click=()=>i(I),k(K,S(cs,{})),A})()})),m.addEventListener("submit",d),k(w,()=>t()("config.customEmoji.shortcode")),$.addEventListener("change",I=>a(I.currentTarget.value)),k(C,()=>t()("config.customEmoji.url")),M.addEventListener("change",I=>u(I.currentTarget.value)),ze(M,"pattern",Mz),k(E,()=>t()("config.customEmoji.addEmoji")),Be(()=>$.value=o()),Be(()=>M.value=l()),f})()},zz=()=>{const t=ht(),{saveEmojis:e}=et(),[n,i]=Re(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Mm.parse(JSON.parse(n())),u=gz(l);e(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=kz(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,p=f.nextSibling;return k(l,()=>t()("config.customEmoji.emojiImport")),k(u,()=>t()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),k(p,()=>t()("config.customEmoji.importEmoji")),Be(()=>f.value=n()),a})()},Hz=()=>{const t=ht(),{config:e,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=et(),[a,l]=Re(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=Cz(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.mute.mutedUsers")),k(p,S(Ft,{get each(){return e().mutedPubkeys},children:g=>(()=>{const m=Zu(),_=m.firstChild,w=_.nextSibling;return k(_,S(kd,{pubkey:g})),w.$$click=()=>n(g),k(w,S(cs,{})),m})()})),d})(),(()=>{const d=Sz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,_=m.nextSibling;return k(f,()=>t()("config.mute.mutedKeywords")),k(p,S(Ft,{get each(){return e().mutedKeywords},children:w=>(()=>{const $=Zu(),x=$.firstChild,C=x.nextSibling;return k(x,w),C.$$click=()=>o(w),k(C,S(cs,{})),$})()})),g.addEventListener("submit",u),m.addEventListener("change",w=>l(w.currentTarget.value)),k(_,()=>t()("config.mute.add")),Be(()=>m.value=a()),d})()]},Wz=()=>{const t=ht(),{config:e,setConfig:n}=et(),i=o=>{n(a=>({...a,embedding:{...a.embedding,[o]:!a.embedding[o]}}))};return(()=>{const o=Tz(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling,d=u.firstChild;d.firstChild;const f=d.nextSibling;f.firstChild;const p=f.nextSibling;return p.firstChild,k(a,()=>t()("config.display.embedding")),k(l,()=>t()("config.display.embeddingDescription")),k(d,S(qr,{get value(){return e().embedding.youtube},onClick:()=>i("youtube")}),null),k(f,S(qr,{get value(){return e().embedding.twitter},onClick:()=>i("twitter")}),null),k(p,S(qr,{get value(){return e().embedding.ogp},onClick:()=>i("ogp")}),null),o})()},qz=()=>{const t=ht(),{config:e,setConfig:n}=et(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=Az(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,p=f.firstChild,g=f.nextSibling,m=g.firstChild,_=g.nextSibling,w=_.firstChild;return k(u,()=>t()("config.display.others")),k(p,()=>t()("config.display.keepOpenPostForm")),k(f,S(qr,{get value(){return e().keepOpenPostForm},onClick:()=>i()}),null),k(m,()=>t()("config.display.showMediaByDefault")),k(g,S(qr,{get value(){return e().showMedia},onClick:()=>o()}),null),k(w,()=>t()("config.display.hideNumbers")),k(_,S(qr,{get value(){return e().hideCount},onClick:()=>a()}),null),l})()},Zz=t=>{const e=ht(),[n,i]=Re(null),o=[{name:()=>e()("config.profile.profile"),icon:()=>S(Em,{}),render:()=>S(jz,{})},{name:()=>e()("config.relays.relays"),icon:()=>S(fz,{}),render:()=>S(Nz,{})},{name:()=>e()("config.display.display"),icon:()=>S(uz,{}),render:()=>[S(Dz,{}),S(Uz,{}),S(Wz,{}),S(qz,{})]},{name:()=>e()("config.customEmoji.customEmoji"),icon:()=>S(Gv,{}),render:()=>[S(Fz,{}),S(zz,{})]},{name:()=>e()("config.mute.mute"),icon:()=>S(lz,{}),render:()=>S(Hz,{})}],a=()=>{const l=n();return l==null?null:o[l]};return S(Ii,{get onClose(){return t.onClose},get children(){const l=Rz();return k(l,S(ye,{get when(){return a()},get fallback(){return[(()=>{const u=Iz();return k(u,()=>e()("config.config")),u})(),(()=>{const u=Oz();return k(u,S(Ft,{each:o,children:(d,f)=>(()=>{const p=Lz(),g=p.firstChild,m=g.firstChild;return g.$$click=()=>i(f),k(m,()=>d.icon()),k(g,()=>d.name(),null),p})()})),u})()]},keyed:!0,children:u=>(()=>{const d=Pz(),f=d.firstChild,p=f.nextSibling;return f.$$click=()=>i(null),k(f,S(D0,{})),k(p,()=>u.render()),d})()})),l}})};mt(["click"]);const Kz=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),Vz=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),Gz=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),Qz=()=>{let t,e;const{saveColumn:n}=et(),i=El(),[o,a]=Re(""),l=u=>{u.preventDefault(),n(_d({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),t?.close(),a("")};return S(Cd,{ref:u=>{t=u},position:"right",get button(){return(()=>{const u=Vz();return k(u,S(L0,{})),u})()},onOpen:()=>e?.focus(),get children(){const u=Kz(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=e;return typeof p=="function"?Vn(p,d):e=d,k(f,S(L0,{})),Be(()=>d.value=o()),u}})},iH=()=>{let t;const{showAddColumn:e,showAbout:n}=Qr(),{config:i}=et(),[o,a]=Re(!1),[l,u]=Re(!1),d=()=>{t?.focus(),t?.click(),t?.setSelectionRange(0,0)},f=()=>a(!0),p=()=>a(!1),g=()=>a(m=>!m);return RT(()=>({commandType:"openPostForm",handler:()=>{f(),t!=null&&setTimeout(()=>d(),100)}})),(()=>{const m=Gz(),_=m.firstChild,w=_.firstChild,$=w.firstChild,x=w.nextSibling,C=x.nextSibling,M=C.firstChild,E=M.nextSibling,I=E.nextSibling,O=I.firstChild,A=_.nextSibling;return $.$$click=()=>g(),k($,S(oz,{})),k(w,S(Qz,{}),null),M.$$click=()=>e(),k(M,S(vv,{})),E.$$click=()=>u(F=>!F),k(E,S(rz,{})),I.$$click=()=>n(),k(A,S(tm,{textAreaRef:F=>{t=F},onClose:p})),k(m,S(ye,{get when(){return l()},get children(){return S(Zz,{onClose:()=>u(!1)})}}),null),Be(F=>{const N=Vu("images/rabbit_app_256.png"),K=!!(o()||i().keepOpenPostForm),ee=!(o()||i().keepOpenPostForm);return N!==F._v$&&ze(O,"src",F._v$=N),K!==F._v$2&&A.classList.toggle("static",F._v$2=K),ee!==F._v$3&&A.classList.toggle("hidden",F._v$3=ee),F},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()};mt(["click"]);export{D0 as A,ms as B,n8 as C,WM as D,oo as E,Em as F,gv as G,FM as H,km as I,eH as J,ct as K,Si as L,VM as M,Hd as N,sl as O,rH as P,Ed as Q,WC as R,iH as S,bR as T,kd as U,po as V,Jn as _,xm as a,yi as b,nH as c,RT as d,YA as e,El as f,Jk as g,Yr as h,Ur as i,Ci as j,Hr as k,p0 as l,H1 as m,Nr as n,ys as o,ov as p,TC as q,wl as r,bv as s,iv as t,et as u,vR as v,Qr as w,Va as x,xn as y,yt as z};
//# sourceMappingURL=SideBar-96bfe6b7.js.map
