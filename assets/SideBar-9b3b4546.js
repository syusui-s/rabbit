import{v as L0,w as Aa,x as h4,y as Sp,z as Tp,A as p4,B as g4,C as v4,D as Ap,E as m4,G as P0,H as y4,m as ls,I as M0,J as Ra,n as _r,o as Jn,K as zs,L as rl,N as Rp,s as it,t as B,i as k,a as S,S as me,c as Te,j as b4,k as yr,l as Ze,u as yt,O as _4,M as Ye,P as w4,b as Pn,d as vt,Q as x4,g as Vn,e as Me,R as $4,T as E4,F as Ft,h as Ue,f as $a,U as Zu,V as k4,W as C4}from"./index-b25ba38d.js";import{c as Yi,a as Wi,b as S4,d as T4,r as Ku}from"./usePersistStatus-7e83fd9a.js";class A4 extends L0{constructor(e,n){super(),this.client=e,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Ip(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return fu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return fu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),Aa(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Op(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const n=this.client.getQueryCache().build(this.client,e),i=this.createResult(n,e);return I4(this,i,e)&&(this.currentResult=i,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),i}getCurrentResult(){return this.currentResult}trackResult(e){const n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),e[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...n}={}){return this.fetch({...n,meta:{refetchPage:e}})}fetchOptimistic(e){const n=this.client.defaultQueryOptions(e),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(e){var n;return this.executeFetch({...e,cancelRefetch:(n=e.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let n=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(h4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Sp||this.currentResult.isStale||!Tp(this.options.staleTime))return;const n=p4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(Sp||this.options.enabled===!1||!Tp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||g4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,c=this.currentResultOptions,d=e!==i,f=d?e.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=e;let{dataUpdatedAt:m,error:w,errorUpdatedAt:b,fetchStatus:$,status:x}=g,C=!1,A=!1,E;if(n._optimisticResults){const N=this.hasListeners(),K=!N&&Ip(e,n),ee=N&&Op(e,i,n,o);(K||ee)&&($=v4(e.options.networkMode)?"fetching":"paused",m||(x="loading")),n._optimisticResults==="isRestoring"&&($="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&x!=="error")E=p.data,m=p.dataUpdatedAt,x=p.status,C=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)E=this.selectResult;else try{this.selectFn=n.select,E=n.select(g.data),E=Ap(a?.data,E,n),this.selectResult=E,this.selectError=null}catch(N){this.selectError=N}else E=g.data;if(typeof n.placeholderData<"u"&&typeof E>"u"&&x==="loading"){let N;if(a!=null&&a.isPlaceholderData&&n.placeholderData===c?.placeholderData)N=a.data;else if(N=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof N<"u")try{N=n.select(N),this.selectError=null}catch(K){this.selectError=K}typeof N<"u"&&(x="success",E=Ap(a?.data,N,n),A=!0)}this.selectError&&(w=this.selectError,E=this.selectResult,b=Date.now(),x="error");const P=$==="fetching",M=x==="loading",I=x==="error";return{status:x,fetchStatus:$,isLoading:M,isSuccess:x==="success",isError:I,isInitialLoading:M&&P,data:E,dataUpdatedAt:m,error:w,errorUpdatedAt:b,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:P,isRefetching:P&&!M,isLoadingError:I&&g.dataUpdatedAt===0,isPaused:$==="paused",isPlaceholderData:A,isPreviousData:C,isRefetchError:I&&g.dataUpdatedAt!==0,isStale:Vu(e,n),refetch:this.refetch,remove:this.remove}}updateResult(e){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Aa(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options,c=typeof l=="function"?l():l;if(c==="all"||!c&&!this.trackedProps.size)return!0;const d=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(f=>{const p=f;return this.currentResult[p]!==n[p]&&d.has(p)})};e?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const n={};e.type==="success"?n.onSuccess=!e.manual:e.type==="error"&&!m4(e.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(e){P0.batch(()=>{if(e.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(e.onError){var l,c,d,f;(l=(c=this.options).onError)==null||l.call(c,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function R4(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Ip(t,e){return R4(t,e)||t.state.dataUpdatedAt>0&&fu(t,e,e.refetchOnMount)}function fu(t,e,n){if(e.enabled!==!1){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Vu(t,e)}return!1}function Op(t,e,n,i){return n.enabled!==!1&&(t!==e||i.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&Vu(t,n)}function Vu(t,e){return t.isStaleByTime(e.staleTime)}function I4(t,e,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?e.isPlaceholderData:!Aa(t.getCurrentResult(),e)}class O4 extends L0{constructor(e,n){super(),this.client=e,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const i=this.options;this.options=this.client.defaultMutationOptions(e),Aa(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const n={listeners:!0};e.type==="success"?n.onSuccess=!0:e.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:y4(),n={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(e){P0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var l,c,d,f;(l=(c=this.mutateOptions).onError)==null||l.call(c,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function L4(t){return typeof t=="function"}function Lp(t,e,n){if(!L4(t)){const{queryKey:i,...o}=t;return i?{...o,queryKey:i()}:t}return typeof e=="function"?{...n,queryKey:t(),queryFn:e}:{...e,queryKey:t()}}function B0(t,e){return typeof t=="function"?t(...e):!!t}function P4(t,e){const n=ls({context:t.context}),i=Symbol("empty"),o=n.defaultQueryOptions(t);o._optimisticResults="optimistic";const a=new e(n,o),[l,c]=Yi(a.getOptimisticResult(o)),[d,{refetch:f,mutate:p}]=M0(()=>new Promise(b=>{l.isFetching&&l.isLoading||(Wi(l.data)===i&&b(void 0),b(Wi(l.data)))}));Ra(()=>{p(()=>Wi(l.data)),f()});let g=[];const m=a.subscribe(b=>{g.push(()=>{Ra(()=>{const $={...Wi(b)};$.data===void 0&&($.data=i),c(Wi($)),p(()=>Wi(b.data)),f()})}),queueMicrotask(()=>{const $=g.pop();$&&$(),g=[]})});_r(()=>m()),Jn(()=>{a.setOptions(o,{listeners:!1})}),zs(()=>{const b=n.defaultQueryOptions(t);a.setOptions(b)}),zs(rl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&B0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const w={get(b,$){return $==="data"?d():Reflect.get(b,$)}};return new Proxy(l,w)}function cs(t,e,n){const[i,o]=Yi(Lp(t,e,n));return zs(()=>{const a=Lp(t,e,n);o(a)}),P4(i,A4)}function vi(t,e,n){const[i,o]=Yi(Rp(t,e,n)),a=ls({context:i.context}),l=new O4(a,i),c=(g,m)=>{l.mutate(g,m).catch(M4)},[d,f]=Yi({...l.getCurrentResult(),mutate:c,mutateAsync:l.getCurrentResult().mutate});zs(()=>{const g=Rp(t,e,n);o(g),l.setOptions(g)}),zs(rl(()=>d.status,()=>{if(d.isError&&B0(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{f({...g,mutate:c,mutateAsync:g.mutate})});return _r(p),d}function M4(){}const B4=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),j0=(t={})=>(()=>{const e=B4();return it(e,t,!0,!0),e})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function il(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function j4(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),n}var N4=typeof xt=="object"&&xt&&xt.Object===Object&&xt,N0=N4,D4=N0,U4=typeof self=="object"&&self&&self.Object===Object&&self,F4=D4||U4||Function("return this")(),Xn=F4,z4=Xn,H4=z4.Symbol,us=H4,Pp=us,D0=Object.prototype,W4=D0.hasOwnProperty,q4=D0.toString,Ns=Pp?Pp.toStringTag:void 0;function Z4(t){var e=W4.call(t,Ns),n=t[Ns];try{t[Ns]=void 0;var i=!0}catch{}var o=q4.call(t);return i&&(e?t[Ns]=n:delete t[Ns]),o}var K4=Z4,V4=Object.prototype,G4=V4.toString;function Q4(t){return G4.call(t)}var Y4=Q4,Mp=us,J4=K4,X4=Y4,e5="[object Null]",t5="[object Undefined]",Bp=Mp?Mp.toStringTag:void 0;function n5(t){return t==null?t===void 0?t5:e5:Bp&&Bp in Object(t)?J4(t):X4(t)}var ds=n5;function r5(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Ei=r5,i5=ds,s5=Ei,o5="[object AsyncFunction]",a5="[object Function]",l5="[object GeneratorFunction]",c5="[object Proxy]";function u5(t){if(!s5(t))return!1;var e=i5(t);return e==a5||e==l5||e==o5||e==c5}var U0=u5,d5=Xn,f5=d5["__core-js_shared__"],h5=f5,Kc=h5,jp=function(){var t=/[^.]+$/.exec(Kc&&Kc.keys&&Kc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function p5(t){return!!jp&&jp in t}var g5=p5,v5=Function.prototype,m5=v5.toString;function y5(t){if(t!=null){try{return m5.call(t)}catch{}try{return t+""}catch{}}return""}var F0=y5,b5=U0,_5=g5,w5=Ei,x5=F0,$5=/[\\^$.*+?()[\]{}|]/g,E5=/^\[object .+?Constructor\]$/,k5=Function.prototype,C5=Object.prototype,S5=k5.toString,T5=C5.hasOwnProperty,A5=RegExp("^"+S5.call(T5).replace($5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function R5(t){if(!w5(t)||_5(t))return!1;var e=b5(t)?A5:E5;return e.test(x5(t))}var I5=R5;function O5(t,e){return t?.[e]}var L5=O5,P5=I5,M5=L5;function B5(t,e){var n=M5(t,e);return P5(n)?n:void 0}var ki=B5,j5=ki,N5=j5(Object,"create"),sl=N5,Np=sl;function D5(){this.__data__=Np?Np(null):{},this.size=0}var U5=D5;function F5(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var z5=F5,H5=sl,W5="__lodash_hash_undefined__",q5=Object.prototype,Z5=q5.hasOwnProperty;function K5(t){var e=this.__data__;if(H5){var n=e[t];return n===W5?void 0:n}return Z5.call(e,t)?e[t]:void 0}var V5=K5,G5=sl,Q5=Object.prototype,Y5=Q5.hasOwnProperty;function J5(t){var e=this.__data__;return G5?e[t]!==void 0:Y5.call(e,t)}var X5=J5,e$=sl,t$="__lodash_hash_undefined__";function n$(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=e$&&e===void 0?t$:e,this}var r$=n$,i$=U5,s$=z5,o$=V5,a$=X5,l$=r$;function fs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}fs.prototype.clear=i$;fs.prototype.delete=s$;fs.prototype.get=o$;fs.prototype.has=a$;fs.prototype.set=l$;var c$=fs;function u$(){this.__data__=[],this.size=0}var d$=u$;function f$(t,e){return t===e||t!==t&&e!==e}var Gu=f$,h$=Gu;function p$(t,e){for(var n=t.length;n--;)if(h$(t[n][0],e))return n;return-1}var ol=p$,g$=ol,v$=Array.prototype,m$=v$.splice;function y$(t){var e=this.__data__,n=g$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():m$.call(e,n,1),--this.size,!0}var b$=y$,_$=ol;function w$(t){var e=this.__data__,n=_$(e,t);return n<0?void 0:e[n][1]}var x$=w$,$$=ol;function E$(t){return $$(this.__data__,t)>-1}var k$=E$,C$=ol;function S$(t,e){var n=this.__data__,i=C$(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}var T$=S$,A$=d$,R$=b$,I$=x$,O$=k$,L$=T$;function hs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}hs.prototype.clear=A$;hs.prototype.delete=R$;hs.prototype.get=I$;hs.prototype.has=O$;hs.prototype.set=L$;var al=hs,P$=ki,M$=Xn,B$=P$(M$,"Map"),Qu=B$,Dp=c$,j$=al,N$=Qu;function D$(){this.size=0,this.__data__={hash:new Dp,map:new(N$||j$),string:new Dp}}var U$=D$;function F$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var z$=F$,H$=z$;function W$(t,e){var n=t.__data__;return H$(e)?n[typeof e=="string"?"string":"hash"]:n.map}var ll=W$,q$=ll;function Z$(t){var e=q$(this,t).delete(t);return this.size-=e?1:0,e}var K$=Z$,V$=ll;function G$(t){return V$(this,t).get(t)}var Q$=G$,Y$=ll;function J$(t){return Y$(this,t).has(t)}var X$=J$,e6=ll;function t6(t,e){var n=e6(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}var n6=t6,r6=U$,i6=K$,s6=Q$,o6=X$,a6=n6;function ps(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ps.prototype.clear=r6;ps.prototype.delete=i6;ps.prototype.get=s6;ps.prototype.has=o6;ps.prototype.set=a6;var Yu=ps,l6="__lodash_hash_undefined__";function c6(t){return this.__data__.set(t,l6),this}var u6=c6;function d6(t){return this.__data__.has(t)}var f6=d6,h6=Yu,p6=u6,g6=f6;function Ia(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new h6;++e<n;)this.add(t[e])}Ia.prototype.add=Ia.prototype.push=p6;Ia.prototype.has=g6;var z0=Ia;function v6(t,e,n,i){for(var o=t.length,a=n+(i?1:-1);i?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var m6=v6;function y6(t){return t!==t}var b6=y6;function _6(t,e,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===e)return i;return-1}var w6=_6,x6=m6,$6=b6,E6=w6;function k6(t,e,n){return e===e?E6(t,e,n):x6(t,$6,n)}var C6=k6,S6=C6;function T6(t,e){var n=t==null?0:t.length;return!!n&&S6(t,e,0)>-1}var A6=T6;function R6(t,e,n){for(var i=-1,o=t==null?0:t.length;++i<o;)if(n(e,t[i]))return!0;return!1}var I6=R6;function O6(t,e){return t.has(e)}var H0=O6,L6=ki,P6=Xn,M6=L6(P6,"Set"),W0=M6;function B6(){}var j6=B6;function N6(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var Ju=N6,Vc=W0,D6=j6,U6=Ju,F6=1/0,z6=Vc&&1/U6(new Vc([,-0]))[1]==F6?function(t){return new Vc(t)}:D6,H6=z6,W6=z0,q6=A6,Z6=I6,K6=H0,V6=H6,G6=Ju,Q6=200;function Y6(t,e,n){var i=-1,o=q6,a=t.length,l=!0,c=[],d=c;if(n)l=!1,o=Z6;else if(a>=Q6){var f=e?null:V6(t);if(f)return G6(f);l=!1,o=K6,d=new W6}else d=e?[]:c;e:for(;++i<a;){var p=t[i],g=e?e(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var m=d.length;m--;)if(d[m]===g)continue e;e&&d.push(g),c.push(p)}else o(d,g,n)||(d!==c&&d.push(g),c.push(p))}return c}var q0=Y6,J6=q0;function X6(t){return t&&t.length?J6(t):[]}var e8=X6;const mi=il(e8),t8=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),n8=t=>(()=>{const e=t8();return k(e,()=>t.children),e})();function hu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function r8(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function fi(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function i8(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");hu(t.outputLen),hu(t.blockLen)}function s8(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function o8(t,e){fi(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const cn={number:hu,bool:r8,bytes:fi,hash:i8,exists:s8,output:o8},Gc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Xu=t=>t instanceof Uint8Array,yi=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Wn=(t,e)=>t<<32-e|t>>>e,a8=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!a8)throw new Error("Non little-endian hardware is not supported");const l8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ln(t){if(!Xu(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=l8[t[n]];return e}function Ji(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Z0(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Hs(t){if(typeof t=="string"&&(t=Z0(t)),!Xu(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Vi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!Xu(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}class K0{clone(){return this._cloneInto()}}const c8=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function u8(t,e){if(e!==void 0&&(typeof e!="object"||!c8(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function Ci(t){const e=i=>t().update(Hs(i)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function ao(t=32){if(Gc&&typeof Gc.getRandomValues=="function")return Gc.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}function d8(t,e,n,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),c=Number(n&a),d=i?4:0,f=i?0:4;t.setUint32(e+d,l,i),t.setUint32(e+f,c,i)}class ed extends K0{constructor(e,n,i,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=yi(this.buffer)}update(e){cn.exists(this);const{view:n,buffer:i,blockLen:o}=this;e=Hs(e);const a=e.length;for(let l=0;l<a;){const c=Math.min(o-this.pos,a-l);if(c===o){const d=yi(e);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(e.subarray(l,l+c),this.pos),this.pos+=c,l+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){cn.exists(this),cn.output(e,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;d8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const c=yi(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)c.setUint32(4*g,p[g],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:c}=this;return e.length=o,e.pos=c,e.finished=a,e.destroyed=l,o%n&&e.buffer.set(i),e}}const f8=(t,e,n)=>t&e^~t&n,h8=(t,e,n)=>t&e^t&n^e&n,p8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Pr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mr=new Uint32Array(64);class V0 extends ed{constructor(){super(64,32,8,!1),this.A=Pr[0]|0,this.B=Pr[1]|0,this.C=Pr[2]|0,this.D=Pr[3]|0,this.E=Pr[4]|0,this.F=Pr[5]|0,this.G=Pr[6]|0,this.H=Pr[7]|0}get(){const{A:e,B:n,C:i,D:o,E:a,F:l,G:c,H:d}=this;return[e,n,i,o,a,l,c,d]}set(e,n,i,o,a,l,c,d){this.A=e|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=c|0,this.H=d|0}process(e,n){for(let g=0;g<16;g++,n+=4)Mr[g]=e.getUint32(n,!1);for(let g=16;g<64;g++){const m=Mr[g-15],w=Mr[g-2],b=Wn(m,7)^Wn(m,18)^m>>>3,$=Wn(w,17)^Wn(w,19)^w>>>10;Mr[g]=$+Mr[g-7]+b+Mr[g-16]|0}let{A:i,B:o,C:a,D:l,E:c,F:d,G:f,H:p}=this;for(let g=0;g<64;g++){const m=Wn(c,6)^Wn(c,11)^Wn(c,25),w=p+m+f8(c,d,f)+p8[g]+Mr[g]|0,$=(Wn(i,2)^Wn(i,13)^Wn(i,22))+h8(i,o,a)|0;p=f,f=d,d=c,c=l+w|0,l=a,a=o,o=i,i=w+$|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,c=c+this.E|0,d=d+this.F|0,f=f+this.G|0,p=p+this.H|0,this.set(i,o,a,l,c,d,f,p)}roundClean(){Mr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class g8 extends V0{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Gn=Ci(()=>new V0);Ci(()=>new g8);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const G0=BigInt(0),cl=BigInt(1),v8=BigInt(2),ul=t=>t instanceof Uint8Array,m8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Xi(t){if(!ul(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=m8[t[n]];return e}function Q0(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function td(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function es(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Yt(t){return td(Xi(t))}function nd(t){if(!ul(t))throw new Error("Uint8Array expected");return td(Xi(Uint8Array.from(t).reverse()))}function zr(t,e){return es(t.toString(16).padStart(e*2,"0"))}function Y0(t,e){return zr(t,e).reverse()}function y8(t){return es(Q0(t))}function Ot(t,e,n){let i;if(typeof e=="string")try{i=es(e)}catch(a){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${a}`)}else if(ul(e))i=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${t} expected ${n} bytes, got ${o}`);return i}function _i(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!ul(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}function b8(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function _8(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function w8(t){let e;for(e=0;t>G0;t>>=cl,e+=1);return e}function x8(t,e){return t>>BigInt(e)&cl}const $8=(t,e,n)=>t|(n?cl:G0)<<BigInt(e),rd=t=>(v8<<BigInt(t-1))-cl,Qc=t=>new Uint8Array(t),Up=t=>Uint8Array.from(t);function J0(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Qc(t),o=Qc(t),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},c=(...g)=>n(o,i,...g),d=(g=Qc())=>{o=c(Up([0]),g),i=c(),g.length!==0&&(o=c(Up([1]),g),i=c())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const m=[];for(;g<e;){i=c();const w=i.slice();m.push(w),g+=i.length}return _i(...m)};return(g,m)=>{l(),d(g);let w;for(;!(w=m(f()));)d();return l(),w}}const E8={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function lo(t,e,n={}){const i=(o,a,l)=>{const c=E8[a];if(typeof c!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=t[o];if(!(l&&d===void 0)&&!c(d,t))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(e))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return t}const k8=Object.freeze(Object.defineProperty({__proto__:null,bitGet:x8,bitLen:w8,bitMask:rd,bitSet:$8,bytesToHex:Xi,bytesToNumberBE:Yt,bytesToNumberLE:nd,concatBytes:_i,createHmacDrbg:J0,ensureBytes:Ot,equalBytes:b8,hexToBytes:es,hexToNumber:td,numberToBytesBE:zr,numberToBytesLE:Y0,numberToHexUnpadded:Q0,numberToVarBytesBE:y8,utf8ToBytes:_8,validateObject:lo},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),gt=BigInt(1),hi=BigInt(2),C8=BigInt(3),pu=BigInt(4),Fp=BigInt(5),zp=BigInt(8);BigInt(9);BigInt(16);function Et(t,e){const n=t%e;return n>=kt?n:e+n}function S8(t,e,n){if(n<=kt||e<kt)throw new Error("Expected power/modulo > 0");if(n===gt)return kt;let i=gt;for(;e>kt;)e&gt&&(i=i*t%n),t=t*t%n,e>>=gt;return i}function _n(t,e,n){let i=t;for(;e-- >kt;)i*=i,i%=n;return i}function gu(t,e){if(t===kt||e<=kt)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=Et(t,e),i=e,o=kt,a=gt;for(;n!==kt;){const c=i/n,d=i%n,f=o-a*c;i=n,n=d,o=a,a=f}if(i!==gt)throw new Error("invert: does not exist");return Et(o,e)}function T8(t){const e=(t-gt)/hi;let n,i,o;for(n=t-gt,i=0;n%hi===kt;n/=hi,i++);for(o=hi;o<t&&S8(o,e,t)!==t-gt;o++);if(i===1){const l=(t+gt)/pu;return function(d,f){const p=d.pow(f,l);if(!d.eql(d.sqr(p),f))throw new Error("Cannot find square root");return p}}const a=(n+gt)/hi;return function(c,d){if(c.pow(d,e)===c.neg(c.ONE))throw new Error("Cannot find square root");let f=i,p=c.pow(c.mul(c.ONE,o),n),g=c.pow(d,a),m=c.pow(d,n);for(;!c.eql(m,c.ONE);){if(c.eql(m,c.ZERO))return c.ZERO;let w=1;for(let $=c.sqr(m);w<f&&!c.eql($,c.ONE);w++)$=c.sqr($);const b=c.pow(p,gt<<BigInt(f-w-1));p=c.sqr(b),g=c.mul(g,b),m=c.mul(m,p),f=w}return g}}function A8(t){if(t%pu===C8){const e=(t+gt)/pu;return function(i,o){const a=i.pow(o,e);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(t%zp===Fp){const e=(t-Fp)/zp;return function(i,o){const a=i.mul(o,hi),l=i.pow(a,e),c=i.mul(o,l),d=i.mul(i.mul(c,hi),l),f=i.mul(c,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return T8(t)}const R8=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function I8(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=R8.reduce((i,o)=>(i[o]="function",i),e);return lo(t,n)}function O8(t,e,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return t.ONE;if(n===gt)return e;let i=t.ONE,o=e;for(;n>kt;)n&gt&&(i=t.mul(i,o)),o=t.sqr(o),n>>=gt;return i}function L8(t,e){const n=new Array(e.length),i=e.reduce((a,l,c)=>t.is0(l)?a:(n[c]=a,t.mul(a,l)),t.ONE),o=t.inv(i);return e.reduceRight((a,l,c)=>t.is0(l)?a:(n[c]=t.mul(a,n[c]),t.mul(a,l)),o),n}function id(t,e){const n=e!==void 0?e:t.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function P8(t,e,n=!1,i={}){if(t<=kt)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:o,nByteLength:a}=id(t,e);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=A8(t),c=Object.freeze({ORDER:t,BITS:o,BYTES:a,MASK:rd(o),ZERO:kt,ONE:gt,create:d=>Et(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<t},is0:d=>d===kt,isOdd:d=>(d&gt)===gt,neg:d=>Et(-d,t),eql:(d,f)=>d===f,sqr:d=>Et(d*d,t),add:(d,f)=>Et(d+f,t),sub:(d,f)=>Et(d-f,t),mul:(d,f)=>Et(d*f,t),pow:(d,f)=>O8(c,d,f),div:(d,f)=>Et(d*gu(f,t),t),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>gu(d,t),sqrt:i.sqrt||(d=>l(c,d)),invertBatch:d=>L8(c,d),cmov:(d,f,p)=>p?f:d,toBytes:d=>n?Y0(d,a):zr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?nd(d):Yt(d)}});return Object.freeze(c)}function M8(t,e,n=!1){t=Ot("privateHash",t);const i=t.length,o=id(e).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?nd(t):Yt(t);return Et(a,e-gt)+gt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const B8=BigInt(0),Yc=BigInt(1);function j8(t,e){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(e/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=t.ZERO,c=o;for(;a>B8;)a&Yc&&(l=l.add(c)),c=c.double(),a>>=Yc;return l},precomputeWindow(o,a){const{windows:l,windowSize:c}=i(a),d=[];let f=o,p=f;for(let g=0;g<l;g++){p=f,d.push(p);for(let m=1;m<c;m++)p=p.add(f),d.push(p);f=p.double()}return d},wNAF(o,a,l){const{windows:c,windowSize:d}=i(o);let f=t.ZERO,p=t.BASE;const g=BigInt(2**o-1),m=2**o,w=BigInt(o);for(let b=0;b<c;b++){const $=b*d;let x=Number(l&g);l>>=w,x>d&&(x-=m,l+=Yc);const C=$,A=$+Math.abs(x)-1,E=b%2!==0,P=x<0;x===0?p=p.add(n(E,a[C])):f=f.add(n(P,a[A]))}return{p:f,f:p}},wNAFCached(o,a,l,c){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,c(f))),this.wNAF(d,f,l)}}}function X0(t){return I8(t.Fp),lo(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...id(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function N8(t){const e=X0(t);lo(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=e;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:D8,hexToBytes:U8}=k8,gi={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=gi;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],i=t.subarray(2,n+2);if(!n||i.length!==n)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:D8(i),l:t.subarray(n+2)}},toSig(t){const{Err:e}=gi,n=typeof t=="string"?U8(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==i-2)throw new e("Invalid signature: incorrect length");const{d:o,l:a}=gi._parseInt(n.subarray(2)),{d:l,l:c}=gi._parseInt(a);if(c.length)throw new e("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(t){const e=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const p=f.toString(16);return p.length&1?`0${p}`:p},i=e(n(t.s)),o=e(n(t.r)),a=i.length/2,l=o.length/2,c=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${c}${i}`}},vr=BigInt(0),wn=BigInt(1);BigInt(2);const Hp=BigInt(3);BigInt(4);function F8(t){const e=N8(t),{Fp:n}=e,i=e.toBytes||((b,$,x)=>{const C=$.toAffine();return _i(Uint8Array.from([4]),n.toBytes(C.x),n.toBytes(C.y))}),o=e.fromBytes||(b=>{const $=b.subarray(1),x=n.fromBytes($.subarray(0,n.BYTES)),C=n.fromBytes($.subarray(n.BYTES,2*n.BYTES));return{x,y:C}});function a(b){const{a:$,b:x}=e,C=n.sqr(b),A=n.mul(C,b);return n.add(n.add(A,n.mul(b,$)),x)}if(!n.eql(n.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function l(b){return typeof b=="bigint"&&vr<b&&b<e.n}function c(b){if(!l(b))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(b){const{allowedPrivateKeyLengths:$,nByteLength:x,wrapPrivateKey:C,n:A}=e;if($&&typeof b!="bigint"){if(b instanceof Uint8Array&&(b=Xi(b)),typeof b!="string"||!$.includes(b.length))throw new Error("Invalid key");b=b.padStart(x*2,"0")}let E;try{E=typeof b=="bigint"?b:Yt(Ot("private key",b,x))}catch{throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof b}`)}return C&&(E=Et(E,A)),c(E),E}const f=new Map;function p(b){if(!(b instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor($,x,C){if(this.px=$,this.py=x,this.pz=C,$==null||!n.isValid($))throw new Error("x required");if(x==null||!n.isValid(x))throw new Error("y required");if(C==null||!n.isValid(C))throw new Error("z required")}static fromAffine($){const{x,y:C}=$||{};if(!$||!n.isValid(x)||!n.isValid(C))throw new Error("invalid affine point");if($ instanceof g)throw new Error("projective point not allowed");const A=E=>n.eql(E,n.ZERO);return A(x)&&A(C)?g.ZERO:new g(x,C,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ($){const x=n.invertBatch($.map(C=>C.pz));return $.map((C,A)=>C.toAffine(x[A])).map(g.fromAffine)}static fromHex($){const x=g.fromAffine(o(Ot("pointHex",$)));return x.assertValidity(),x}static fromPrivateKey($){return g.BASE.multiply(d($))}_setWindowSize($){this._WINDOW_SIZE=$,f.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:$,y:x}=this.toAffine();if(!n.isValid($)||!n.isValid(x))throw new Error("bad point: x or y not FE");const C=n.sqr(x),A=a($);if(!n.eql(C,A))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:$}=this.toAffine();if(n.isOdd)return!n.isOdd($);throw new Error("Field doesn't support isOdd")}equals($){p($);const{px:x,py:C,pz:A}=this,{px:E,py:P,pz:M}=$,I=n.eql(n.mul(x,M),n.mul(E,A)),F=n.eql(n.mul(C,M),n.mul(P,A));return I&&F}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:$,b:x}=e,C=n.mul(x,Hp),{px:A,py:E,pz:P}=this;let M=n.ZERO,I=n.ZERO,F=n.ZERO,N=n.mul(A,A),K=n.mul(E,E),ee=n.mul(P,P),ie=n.mul(A,E);return ie=n.add(ie,ie),F=n.mul(A,P),F=n.add(F,F),M=n.mul($,F),I=n.mul(C,ee),I=n.add(M,I),M=n.sub(K,I),I=n.add(K,I),I=n.mul(M,I),M=n.mul(ie,M),F=n.mul(C,F),ee=n.mul($,ee),ie=n.sub(N,ee),ie=n.mul($,ie),ie=n.add(ie,F),F=n.add(N,N),N=n.add(F,N),N=n.add(N,ee),N=n.mul(N,ie),I=n.add(I,N),ee=n.mul(E,P),ee=n.add(ee,ee),N=n.mul(ee,ie),M=n.sub(M,N),F=n.mul(ee,K),F=n.add(F,F),F=n.add(F,F),new g(M,I,F)}add($){p($);const{px:x,py:C,pz:A}=this,{px:E,py:P,pz:M}=$;let I=n.ZERO,F=n.ZERO,N=n.ZERO;const K=e.a,ee=n.mul(e.b,Hp);let ie=n.mul(x,E),se=n.mul(C,P),ae=n.mul(A,M),X=n.add(x,C),j=n.add(E,P);X=n.mul(X,j),j=n.add(ie,se),X=n.sub(X,j),j=n.add(x,A);let q=n.add(E,M);return j=n.mul(j,q),q=n.add(ie,ae),j=n.sub(j,q),q=n.add(C,A),I=n.add(P,M),q=n.mul(q,I),I=n.add(se,ae),q=n.sub(q,I),N=n.mul(K,j),I=n.mul(ee,ae),N=n.add(I,N),I=n.sub(se,N),N=n.add(se,N),F=n.mul(I,N),se=n.add(ie,ie),se=n.add(se,ie),ae=n.mul(K,ae),j=n.mul(ee,j),se=n.add(se,ae),ae=n.sub(ie,ae),ae=n.mul(K,ae),j=n.add(j,ae),ie=n.mul(se,j),F=n.add(F,ie),ie=n.mul(q,j),I=n.mul(X,I),I=n.sub(I,ie),ie=n.mul(X,se),N=n.mul(q,N),N=n.add(N,ie),new g(I,F,N)}subtract($){return this.add($.negate())}is0(){return this.equals(g.ZERO)}wNAF($){return w.wNAFCached(this,f,$,x=>{const C=n.invertBatch(x.map(A=>A.pz));return x.map((A,E)=>A.toAffine(C[E])).map(g.fromAffine)})}multiplyUnsafe($){const x=g.ZERO;if($===vr)return x;if(c($),$===wn)return this;const{endo:C}=e;if(!C)return w.unsafeLadder(this,$);let{k1neg:A,k1:E,k2neg:P,k2:M}=C.splitScalar($),I=x,F=x,N=this;for(;E>vr||M>vr;)E&wn&&(I=I.add(N)),M&wn&&(F=F.add(N)),N=N.double(),E>>=wn,M>>=wn;return A&&(I=I.negate()),P&&(F=F.negate()),F=new g(n.mul(F.px,C.beta),F.py,F.pz),I.add(F)}multiply($){c($);let x=$,C,A;const{endo:E}=e;if(E){const{k1neg:P,k1:M,k2neg:I,k2:F}=E.splitScalar(x);let{p:N,f:K}=this.wNAF(M),{p:ee,f:ie}=this.wNAF(F);N=w.constTimeNegate(P,N),ee=w.constTimeNegate(I,ee),ee=new g(n.mul(ee.px,E.beta),ee.py,ee.pz),C=N.add(ee),A=K.add(ie)}else{const{p:P,f:M}=this.wNAF(x);C=P,A=M}return g.normalizeZ([C,A])[0]}multiplyAndAddUnsafe($,x,C){const A=g.BASE,E=(M,I)=>I===vr||I===wn||!M.equals(A)?M.multiplyUnsafe(I):M.multiply(I),P=E(this,x).add(E($,C));return P.is0()?void 0:P}toAffine($){const{px:x,py:C,pz:A}=this,E=this.is0();$==null&&($=E?n.ONE:n.inv(A));const P=n.mul(x,$),M=n.mul(C,$),I=n.mul(A,$);if(E)return{x:n.ZERO,y:n.ZERO};if(!n.eql(I,n.ONE))throw new Error("invZ was invalid");return{x:P,y:M}}isTorsionFree(){const{h:$,isTorsionFree:x}=e;if($===wn)return!0;if(x)return x(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:$,clearCofactor:x}=e;return $===wn?this:x?x(g,this):this.multiplyUnsafe(e.h)}toRawBytes($=!0){return this.assertValidity(),i(g,this,$)}toHex($=!0){return Xi(this.toRawBytes($))}}g.BASE=new g(e.Gx,e.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const m=e.nBitLength,w=j8(g,e.endo?Math.ceil(m/2):m);return{CURVE:e,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function z8(t){const e=X0(t);return lo(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function H8(t){const e=z8(t),{Fp:n,n:i}=e,o=n.BYTES+1,a=2*n.BYTES+1;function l(j){return vr<j&&j<n.ORDER}function c(j){return Et(j,i)}function d(j){return gu(j,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:m}=F8({...e,toBytes(j,q,ne){const le=q.toAffine(),Y=n.toBytes(le.x),ye=_i;return ne?ye(Uint8Array.from([q.hasEvenY()?2:3]),Y):ye(Uint8Array.from([4]),Y,n.toBytes(le.y))},fromBytes(j){const q=j.length,ne=j[0],le=j.subarray(1);if(q===o&&(ne===2||ne===3)){const Y=Yt(le);if(!l(Y))throw new Error("Point is not on curve");const ye=g(Y);let be=n.sqrt(ye);const xe=(be&wn)===wn;return(ne&1)===1!==xe&&(be=n.neg(be)),{x:Y,y:be}}else if(q===a&&ne===4){const Y=n.fromBytes(le.subarray(0,n.BYTES)),ye=n.fromBytes(le.subarray(n.BYTES,2*n.BYTES));return{x:Y,y:ye}}else throw new Error(`Point of length ${q} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),w=j=>Xi(zr(j,e.nByteLength));function b(j){const q=i>>wn;return j>q}function $(j){return b(j)?c(-j):j}const x=(j,q,ne)=>Yt(j.slice(q,ne));class C{constructor(q,ne,le){this.r=q,this.s=ne,this.recovery=le,this.assertValidity()}static fromCompact(q){const ne=e.nByteLength;return q=Ot("compactSignature",q,ne*2),new C(x(q,0,ne),x(q,ne,2*ne))}static fromDER(q){const{r:ne,s:le}=gi.toSig(Ot("DER",q));return new C(ne,le)}assertValidity(){if(!m(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!m(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(q){return new C(this.r,this.s,q)}recoverPublicKey(q){const{r:ne,s:le,recovery:Y}=this,ye=F(Ot("msgHash",q));if(Y==null||![0,1,2,3].includes(Y))throw new Error("recovery id invalid");const be=Y===2||Y===3?ne+e.n:ne;if(be>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const xe=Y&1?"03":"02",Ve=f.fromHex(xe+w(be)),de=d(be),G=c(-ye*de),D=c(le*de),Z=f.BASE.multiplyAndAddUnsafe(Ve,G,D);if(!Z)throw new Error("point at infinify");return Z.assertValidity(),Z}hasHighS(){return b(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return es(this.toDERHex())}toDERHex(){return gi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return es(this.toCompactHex())}toCompactHex(){return w(this.r)+w(this.s)}}const A={isValidPrivateKey(j){try{return p(j),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const j=e.randomBytes(n.BYTES+8),q=M8(j,i);return zr(q,e.nByteLength)},precompute(j=8,q=f.BASE){return q._setWindowSize(j),q.multiply(BigInt(3)),q}};function E(j,q=!0){return f.fromPrivateKey(j).toRawBytes(q)}function P(j){const q=j instanceof Uint8Array,ne=typeof j=="string",le=(q||ne)&&j.length;return q?le===o||le===a:ne?le===2*o||le===2*a:j instanceof f}function M(j,q,ne=!0){if(P(j))throw new Error("first arg must be private key");if(!P(q))throw new Error("second arg must be public key");return f.fromHex(q).multiply(p(j)).toRawBytes(ne)}const I=e.bits2int||function(j){const q=Yt(j),ne=j.length*8-e.nBitLength;return ne>0?q>>BigInt(ne):q},F=e.bits2int_modN||function(j){return c(I(j))},N=rd(e.nBitLength);function K(j){if(typeof j!="bigint")throw new Error("bigint expected");if(!(vr<=j&&j<N))throw new Error(`bigint expected < 2^${e.nBitLength}`);return zr(j,e.nByteLength)}function ee(j,q,ne=ie){if(["recovered","canonical"].some(ue=>ue in ne))throw new Error("sign() legacy options not supported");const{hash:le,randomBytes:Y}=e;let{lowS:ye,prehash:be,extraEntropy:xe}=ne;ye==null&&(ye=!0),j=Ot("msgHash",j),be&&(j=Ot("prehashed msgHash",le(j)));const Ve=F(j),de=p(q),G=[K(de),K(Ve)];if(xe!=null){const ue=xe===!0?Y(n.BYTES):xe;G.push(Ot("extraEntropy",ue,n.BYTES))}const D=_i(...G),Z=Ve;function te(ue){const oe=I(ue);if(!m(oe))return;const He=d(oe),Ke=f.BASE.multiply(oe).toAffine(),J=c(Ke.x);if(J===vr)return;const _e=c(He*c(Z+J*de));if(_e===vr)return;let et=(Ke.x===J?0:2)|Number(Ke.y&wn),Jt=_e;return ye&&b(_e)&&(Jt=$(_e),et^=1),new C(J,Jt,et)}return{seed:D,k2sig:te}}const ie={lowS:e.lowS,prehash:!1},se={lowS:e.lowS,prehash:!1};function ae(j,q,ne=ie){const{seed:le,k2sig:Y}=ee(j,q,ne),ye=e;return J0(ye.hash.outputLen,ye.nByteLength,ye.hmac)(le,Y)}f.BASE._setWindowSize(8);function X(j,q,ne,le=se){const Y=j;if(q=Ot("msgHash",q),ne=Ot("publicKey",ne),"strict"in le)throw new Error("options.strict was renamed to lowS");const{lowS:ye,prehash:be}=le;let xe,Ve;try{if(typeof Y=="string"||Y instanceof Uint8Array)try{xe=C.fromDER(Y)}catch(Ke){if(!(Ke instanceof gi.Err))throw Ke;xe=C.fromCompact(Y)}else if(typeof Y=="object"&&typeof Y.r=="bigint"&&typeof Y.s=="bigint"){const{r:Ke,s:J}=Y;xe=new C(Ke,J)}else throw new Error("PARSE");Ve=f.fromHex(ne)}catch(Ke){if(Ke.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ye&&xe.hasHighS())return!1;be&&(q=e.hash(q));const{r:de,s:G}=xe,D=F(q),Z=d(G),te=c(D*Z),ue=c(de*Z),oe=f.BASE.multiplyAndAddUnsafe(Ve,te,ue)?.toAffine();return oe?c(oe.x)===de:!1}return{CURVE:e,getPublicKey:E,getSharedSecret:M,sign:ae,verify:X,ProjectivePoint:f,Signature:C,utils:A}}class e1 extends K0{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,cn.hash(e);const i=Hs(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?e.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=e.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(e){return cn.exists(this),this.iHash.update(e),this}digestInto(e){cn.exists(this),cn.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:c}=this;return e=e,e.finished=o,e.destroyed=a,e.blockLen=l,e.outputLen=c,e.oHash=n._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ws=(t,e,n)=>new e1(t,e).update(n).digest();Ws.create=(t,e)=>new e1(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function W8(t){return{hash:t,hmac:(e,...n)=>Ws(t,e,Vi(...n)),randomBytes:ao}}function q8(t,e){const n=i=>H8({...t,...W8(i)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const dl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Oa=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),t1=BigInt(1),La=BigInt(2),Wp=(t,e)=>(t+e/La)/e;function n1(t){const e=dl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),c=BigInt(44),d=BigInt(88),f=t*t*t%e,p=f*f*t%e,g=_n(p,n,e)*p%e,m=_n(g,n,e)*p%e,w=_n(m,La,e)*f%e,b=_n(w,o,e)*w%e,$=_n(b,a,e)*b%e,x=_n($,c,e)*$%e,C=_n(x,d,e)*x%e,A=_n(C,c,e)*$%e,E=_n(A,n,e)*p%e,P=_n(E,l,e)*b%e,M=_n(P,i,e)*f%e,I=_n(M,La,e);if(!vu.eql(vu.sqr(I),t))throw new Error("Cannot find square root");return I}const vu=P8(dl,void 0,void 0,{sqrt:n1}),Ut=q8({a:BigInt(0),b:BigInt(7),Fp:vu,n:Oa,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Oa,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-t1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),c=Wp(a*t,e),d=Wp(-i*t,e);let f=Et(t-c*n-d*o,e),p=Et(-c*i-d*a,e);const g=f>l,m=p>l;if(g&&(f=e-f),m&&(p=e-p),f>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:g,k1:f,k2neg:m,k2:p}}}},Gn),fl=BigInt(0),r1=t=>typeof t=="bigint"&&fl<t&&t<dl,Z8=t=>typeof t=="bigint"&&fl<t&&t<Oa,qp={};function Pa(t,...e){let n=qp[t];if(n===void 0){const i=Gn(Uint8Array.from(t,o=>o.charCodeAt(0)));n=_i(i,i),qp[t]=n}return Gn(_i(n,...e))}const sd=t=>t.toRawBytes(!0).slice(1),mu=t=>zr(t,32),Jc=t=>Et(t,dl),qs=t=>Et(t,Oa),od=Ut.ProjectivePoint,K8=(t,e,n)=>od.BASE.multiplyAndAddUnsafe(t,e,n);function yu(t){let e=Ut.utils.normPrivateKeyToScalar(t),n=od.fromPrivateKey(e);return{scalar:n.hasEvenY()?e:qs(-e),bytes:sd(n)}}function i1(t){if(!r1(t))throw new Error("bad x: need 0 < x < p");const e=Jc(t*t),n=Jc(e*t+BigInt(7));let i=n1(n);i%La!==fl&&(i=Jc(-i));const o=new od(t,i,t1);return o.assertValidity(),o}function s1(...t){return qs(Yt(Pa("BIP0340/challenge",...t)))}function V8(t){return yu(t).bytes}function G8(t,e,n=ao(32)){const i=Ot("message",t),{bytes:o,scalar:a}=yu(e),l=Ot("auxRand",n,32),c=mu(a^Yt(Pa("BIP0340/aux",l))),d=Pa("BIP0340/nonce",c,o,i),f=qs(Yt(d));if(f===fl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=yu(f),m=s1(p,o,i),w=new Uint8Array(64);if(w.set(p,0),w.set(mu(qs(g+m*a)),32),!o1(w,i,o))throw new Error("sign: Invalid signature produced");return w}function o1(t,e,n){const i=Ot("signature",t,64),o=Ot("message",e),a=Ot("publicKey",n,32);try{const l=i1(Yt(a)),c=Yt(i.subarray(0,32));if(!r1(c))return!1;const d=Yt(i.subarray(32,64));if(!Z8(d))return!1;const f=s1(mu(c),sd(l),o),p=K8(l,d,qs(-f));return!(!p||!p.hasEvenY()||p.toAffine().x!==c)}catch{return!1}}const co=(()=>({getPublicKey:V8,sign:G8,verify:o1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:i1,pointToBytes:sd,numberToBytesBE:zr,bytesToNumberBE:Yt,taggedHash:Pa,mod:Et}}))();/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Si(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Dn(...t){const e=(o,a)=>l=>o(a(l)),n=Array.from(t).reverse().reduce((o,a)=>o?e(o,a.encode):a.encode,void 0),i=t.reduce((o,a)=>o?e(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function er(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(Si(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=t.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return i})}}}function tr(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function uo(t,e="="){if(Si(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===e;i--)if(!((i-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function a1(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Zp(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let i=0;const o=[],a=Array.from(t);for(a.forEach(l=>{if(Si(l),l<0||l>=e)throw new Error(`Wrong integer: ${l}`)});;){let l=0,c=!0;for(let d=i;d<a.length;d++){const f=a[d],p=e*l+f;if(!Number.isSafeInteger(p)||e*l/e!==l||p-f!==e*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(c)a[d]?c=!1:i=d;else continue}if(o.push(l),c)break}for(let l=0;l<t.length-1&&t[l]===0;l++)o.push(0);return o.reverse()}const l1=(t,e)=>e?l1(e,t%e):t,Ma=(t,e)=>t+(e-l1(t,e));function bu(t,e,n,i){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ma(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Ma(e,n)}`);let o=0,a=0;const l=2**n-1,c=[];for(const d of t){if(Si(d),d>=2**e)throw new Error(`convertRadix2: invalid data word=${d} from=${e}`);if(o=o<<e|d,a+e>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${e}`);for(a+=e;a>=n;a-=n)c.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=e)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&c.push(o>>>0),c}function c1(t){return Si(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Zp(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Zp(e,t,2**8))}}}function $r(t,e=!1){if(Si(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(Ma(8,t)>32||Ma(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return bu(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(bu(n,t,8,e))}}}function Kp(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function u1(t,e){if(Si(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-t),o=e(i).slice(0,t),a=n.slice(-t);for(let l=0;l<t;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const da={alphabet:er,chain:Dn,checksum:u1,radix:c1,radix2:$r,join:tr,padding:uo},Q8=Dn($r(4),er("0123456789ABCDEF"),tr("")),Y8=Dn($r(5),er("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),uo(5),tr(""));Dn($r(5),er("0123456789ABCDEFGHIJKLMNOPQRSTUV"),uo(5),tr(""));Dn($r(5),er("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),tr(""),a1(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const wr=Dn($r(6),er("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),uo(6),tr("")),J8=Dn($r(6),er("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),uo(6),tr("")),ad=t=>Dn(c1(58),er(t),tr("")),Ba=ad("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");ad("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");ad("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const Vp=[0,2,3,5,6,7,9,10,11],X8={encode(t){let e="";for(let n=0;n<t.length;n+=8){const i=t.subarray(n,n+8);e+=Ba.encode(i).padStart(Vp[i.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const i=t.slice(n,n+11),o=Vp.indexOf(i.length),a=Ba.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(e)}},e7=t=>Dn(u1(4,e=>t(t(e))),Ba),_u=Dn(er("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),tr("")),Gp=[996825010,642813549,513874426,1027748829,705979059];function Ds(t){const e=t>>25;let n=(t&33554431)<<5;for(let i=0;i<Gp.length;i++)(e>>i&1)===1&&(n^=Gp[i]);return n}function Qp(t,e,n=1){const i=t.length;let o=1;for(let a=0;a<i;a++){const l=t.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${t})`);o=Ds(o)^l>>5}o=Ds(o);for(let a=0;a<i;a++)o=Ds(o)^t.charCodeAt(a)&31;for(let a of e)o=Ds(o)^a;for(let a=0;a<6;a++)o=Ds(o);return o^=n,_u.encode(bu([o%2**30],30,5,!1))}function d1(t){const e=t==="bech32"?1:734539939,n=$r(5),i=n.decode,o=n.encode,a=Kp(i);function l(p,g,m=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const w=p.length+7+g.length;if(m!==!1&&w>m)throw new TypeError(`Length ${w} exceeds limit ${m}`);return p=p.toLowerCase(),`${p}1${_u.encode(g)}${Qp(p,g,e)}`}function c(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const m=p.toLowerCase();if(p!==m&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=m;const w=p.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const b=p.slice(0,w),$=p.slice(w+1);if($.length<6)throw new Error("Data must be at least 6 characters long");const x=_u.decode($).slice(0,-6),C=Qp(b,x,e);if(!$.endsWith(C))throw new Error(`Invalid checksum in ${p}: expected "${C}"`);return{prefix:b,words:x}}const d=Kp(c);function f(p){const{prefix:g,words:m}=c(p,!1);return{prefix:g,words:m,bytes:i(m)}}return{encode:l,decode:c,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const ts=d1("bech32");d1("bech32m");const t7={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},n7=Dn($r(4),er("0123456789abcdef"),tr(""),a1(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),r7={utf8:t7,hex:n7,base16:Q8,base32:Y8,base64:wr,base64url:J8,base58:Ba,base58xmr:X8};`${Object.keys(r7).join(", ")}`;const f1=`abandon
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
`);function i7(t,e,n,i){cn.hash(t);const o=u8({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:c}=o;if(cn.number(a),cn.number(l),cn.number(c),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=Hs(e),f=Hs(n),p=new Uint8Array(l),g=Ws.create(t,d),m=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:c,DK:p,PRF:g,PRFSalt:m}}function s7(t,e,n,i,o){return t.destroy(),e.destroy(),i&&i.destroy(),o.fill(0),n}function o7(t,e,n,i){const{c:o,dkLen:a,DK:l,PRF:c,PRFSalt:d}=i7(t,e,n,i);let f;const p=new Uint8Array(4),g=yi(p),m=new Uint8Array(c.outputLen);for(let w=1,b=0;b<a;w++,b+=c.outputLen){const $=l.subarray(b,b+c.outputLen);g.setInt32(0,w,!1),(f=d._cloneInto(f)).update(p).digestInto(m),$.set(m.subarray(0,$.length));for(let x=1;x<o;x++){c._cloneInto(f).update(m).digestInto(m);for(let C=0;C<$.length;C++)$[C]^=m[C]}}return s7(c,d,l,f,m)}const fa=BigInt(2**32-1),wu=BigInt(32);function h1(t,e=!1){return e?{h:Number(t&fa),l:Number(t>>wu&fa)}:{h:Number(t>>wu&fa)|0,l:Number(t&fa)|0}}function a7(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:a,l}=h1(t[o],e);[n[o],i[o]]=[a,l]}return[n,i]}const l7=(t,e)=>BigInt(t>>>0)<<wu|BigInt(e>>>0),c7=(t,e,n)=>t>>>n,u7=(t,e,n)=>t<<32-n|e>>>n,d7=(t,e,n)=>t>>>n|e<<32-n,f7=(t,e,n)=>t<<32-n|e>>>n,h7=(t,e,n)=>t<<64-n|e>>>n-32,p7=(t,e,n)=>t>>>n-32|e<<64-n,g7=(t,e)=>e,v7=(t,e)=>t,m7=(t,e,n)=>t<<n|e>>>32-n,y7=(t,e,n)=>e<<n|t>>>32-n,b7=(t,e,n)=>e<<n-32|t>>>64-n,_7=(t,e,n)=>t<<n-32|e>>>64-n;function w7(t,e,n,i){const o=(e>>>0)+(i>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const x7=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),$7=(t,e,n,i)=>e+n+i+(t/2**32|0)|0,E7=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0),k7=(t,e,n,i,o)=>e+n+i+o+(t/2**32|0)|0,C7=(t,e,n,i,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(o>>>0),S7=(t,e,n,i,o,a)=>e+n+i+o+a+(t/2**32|0)|0,je={fromBig:h1,split:a7,toBig:l7,shrSH:c7,shrSL:u7,rotrSH:d7,rotrSL:f7,rotrBH:h7,rotrBL:p7,rotr32H:g7,rotr32L:v7,rotlSH:m7,rotlSL:y7,rotlBH:b7,rotlBL:_7,add:w7,add3L:x7,add3H:$7,add4L:E7,add4H:k7,add5H:S7,add5L:C7},[T7,A7]=je.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Br=new Uint32Array(80),jr=new Uint32Array(80);class hl extends ed{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:c,Dl:d,Eh:f,El:p,Fh:g,Fl:m,Gh:w,Gl:b,Hh:$,Hl:x}=this;return[e,n,i,o,a,l,c,d,f,p,g,m,w,b,$,x]}set(e,n,i,o,a,l,c,d,f,p,g,m,w,b,$,x){this.Ah=e|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=c|0,this.Dl=d|0,this.Eh=f|0,this.El=p|0,this.Fh=g|0,this.Fl=m|0,this.Gh=w|0,this.Gl=b|0,this.Hh=$|0,this.Hl=x|0}process(e,n){for(let E=0;E<16;E++,n+=4)Br[E]=e.getUint32(n),jr[E]=e.getUint32(n+=4);for(let E=16;E<80;E++){const P=Br[E-15]|0,M=jr[E-15]|0,I=je.rotrSH(P,M,1)^je.rotrSH(P,M,8)^je.shrSH(P,M,7),F=je.rotrSL(P,M,1)^je.rotrSL(P,M,8)^je.shrSL(P,M,7),N=Br[E-2]|0,K=jr[E-2]|0,ee=je.rotrSH(N,K,19)^je.rotrBH(N,K,61)^je.shrSH(N,K,6),ie=je.rotrSL(N,K,19)^je.rotrBL(N,K,61)^je.shrSL(N,K,6),se=je.add4L(F,ie,jr[E-7],jr[E-16]),ae=je.add4H(se,I,ee,Br[E-7],Br[E-16]);Br[E]=ae|0,jr[E]=se|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:c,Cl:d,Dh:f,Dl:p,Eh:g,El:m,Fh:w,Fl:b,Gh:$,Gl:x,Hh:C,Hl:A}=this;for(let E=0;E<80;E++){const P=je.rotrSH(g,m,14)^je.rotrSH(g,m,18)^je.rotrBH(g,m,41),M=je.rotrSL(g,m,14)^je.rotrSL(g,m,18)^je.rotrBL(g,m,41),I=g&w^~g&$,F=m&b^~m&x,N=je.add5L(A,M,F,A7[E],jr[E]),K=je.add5H(N,C,P,I,T7[E],Br[E]),ee=N|0,ie=je.rotrSH(i,o,28)^je.rotrBH(i,o,34)^je.rotrBH(i,o,39),se=je.rotrSL(i,o,28)^je.rotrBL(i,o,34)^je.rotrBL(i,o,39),ae=i&a^i&c^a&c,X=o&l^o&d^l&d;C=$|0,A=x|0,$=w|0,x=b|0,w=g|0,b=m|0,{h:g,l:m}=je.add(f|0,p|0,K|0,ee|0),f=c|0,p=d|0,c=a|0,d=l|0,a=i|0,l=o|0;const j=je.add3L(ee,se,X);i=je.add3H(j,K,ie,ae),o=j|0}({h:i,l:o}=je.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=je.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:c,l:d}=je.add(this.Ch|0,this.Cl|0,c|0,d|0),{h:f,l:p}=je.add(this.Dh|0,this.Dl|0,f|0,p|0),{h:g,l:m}=je.add(this.Eh|0,this.El|0,g|0,m|0),{h:w,l:b}=je.add(this.Fh|0,this.Fl|0,w|0,b|0),{h:$,l:x}=je.add(this.Gh|0,this.Gl|0,$|0,x|0),{h:C,l:A}=je.add(this.Hh|0,this.Hl|0,C|0,A|0),this.set(i,o,a,l,c,d,f,p,g,m,w,b,$,x,C,A)}roundClean(){Br.fill(0),jr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class R7 extends hl{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class I7 extends hl{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class O7 extends hl{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const xu=Ci(()=>new hl);Ci(()=>new R7);Ci(()=>new I7);Ci(()=>new O7);const L7=t=>t[0]==="あいこくしん";function p1(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function g1(t){const e=p1(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function v1(t){cn.bytes(t,16,20,24,28,32)}function P7(t,e=128){if(cn.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return j7(ao(e/8),t)}const M7=t=>{const e=8-t.length/4;return new Uint8Array([Gn(t)[0]>>e<<e])};function m1(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),da.chain(da.checksum(1,M7),da.radix2(11,!0),da.alphabet(t))}function B7(t,e){const{words:n}=g1(t),i=m1(e).decode(n);return v1(i),i}function j7(t,e){return v1(t),m1(e).encode(t).join(L7(e)?"　":" ")}function N7(t,e){try{B7(t,e)}catch{return!1}return!0}const D7=t=>p1(`mnemonic${t}`);function U7(t,e=""){return o7(xu,g1(t).nfkd,D7(e),{c:2048,dkLen:64})}const F7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),y1=Uint8Array.from({length:16},(t,e)=>e),z7=y1.map(t=>(9*t+5)%16);let ld=[y1],cd=[z7];for(let t=0;t<4;t++)for(let e of[ld,cd])e.push(e[t].map(n=>F7[n]));const b1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),H7=ld.map((t,e)=>t.map(n=>b1[e][n])),W7=cd.map((t,e)=>t.map(n=>b1[e][n])),q7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Z7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ha=(t,e)=>t<<e|t>>>32-e;function Yp(t,e,n,i){return t===0?e^n^i:t===1?e&n|~e&i:t===2?(e|~n)^i:t===3?e&i|n&~i:e^(n|~i)}const pa=new Uint32Array(16);class K7 extends ed{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:i,h3:o,h4:a}=this;return[e,n,i,o,a]}set(e,n,i,o,a){this.h0=e|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(e,n){for(let w=0;w<16;w++,n+=4)pa[w]=e.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,c=this.h2|0,d=c,f=this.h3|0,p=f,g=this.h4|0,m=g;for(let w=0;w<5;w++){const b=4-w,$=q7[w],x=Z7[w],C=ld[w],A=cd[w],E=H7[w],P=W7[w];for(let M=0;M<16;M++){const I=ha(i+Yp(w,a,c,f)+pa[C[M]]+$,E[M])+g|0;i=g,g=f,f=ha(c,10)|0,c=a,a=I}for(let M=0;M<16;M++){const I=ha(o+Yp(b,l,d,p)+pa[A[M]]+x,P[M])+m|0;o=m,m=p,p=ha(d,10)|0,d=l,l=I}}this.set(this.h1+c+p|0,this.h2+f+m|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){pa.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const V7=Ci(()=>new K7),ga=Ut.ProjectivePoint,Xc=e7(Gn);function Jp(t){return BigInt(`0x${ln(t)}`)}function G7(t){return Ji(t.toString(16).padStart(64,"0"))}const Q7=Z0("Bitcoin seed"),eu={private:76066276,public:76067358},tu=2147483648,Y7=t=>V7(Gn(t)),J7=t=>yi(t).getUint32(0,!1),va=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return yi(e).setUint32(0,t,!1),e};class pi{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return J7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return Xc.encode(this.serialize(this.versions.private,Vi(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Xc.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=eu){if(fi(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Ws(xu,Q7,e);return new pi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(e,n=eu){const i=Xc.decode(e),o=yi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},c=i.slice(45),d=c[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new pi({...l,privateKey:c.slice(1)}):new pi({...l,publicKey:c})}static fromJSON(e){return pi.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||eu,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Ut.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:Jp(e.privateKey),this.privKeyBytes=G7(this.privKey),this.pubKey=Ut.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=ga.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Y7(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=tu)throw new Error("Invalid index");a[2]==="'"&&(l+=tu),i=i.deriveChild(l)}return i}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=va(e);if(e>=tu){const c=this.privateKey;if(!c)throw new Error("Could not derive hardened child key");n=Vi(new Uint8Array([0]),c,n)}else n=Vi(this.pubKey,n);const i=Ws(xu,this.chainCode,n),o=Jp(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const c=Et(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(c))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=c}else{const c=ga.fromHex(this.pubKey).add(ga.fromPrivateKey(o));if(c.equals(ga.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=c.toRawBytes(!0)}return new pi(l)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return fi(e,32),Ut.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(fi(e,32),fi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return fi(n,33),Vi(va(e),new Uint8Array([this.depth]),va(this.parentFingerprint),va(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const X7=t=>t instanceof Uint8Array,qn=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),eE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!eE)throw new Error("Non little-endian hardware is not supported");function ud(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function $u(t){if(typeof t=="string"&&(t=ud(t)),!X7(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}const tE=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function nE(t,e){if(e!==void 0&&(typeof e!="object"||!tE(e)))throw new Error("options must be object or undefined");return Object.assign(t,e)}function rE(t,e){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof e=="number"&&t.length!==e)throw new Error(`Uint8Array length ${e} expected`)}function Eu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function iE(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function _1(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function sE(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");Eu(t.outputLen),Eu(t.blockLen)}function oE(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function aE(t,e){_1(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const an={number:Eu,bool:iE,bytes:_1,hash:sE,exists:oE,output:aE},Rt=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class lE{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=$u(e),rE(e,32);const n=Rt(e,0),i=Rt(e,2),o=Rt(e,4),a=Rt(e,6),l=Rt(e,8),c=Rt(e,10),d=Rt(e,12),f=Rt(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|i<<3)&8191,this.r[2]=(i>>>10|o<<6)&7939,this.r[3]=(o>>>7|a<<9)&8191,this.r[4]=(a>>>4|l<<12)&255,this.r[5]=l>>>1&8190,this.r[6]=(l>>>14|c<<2)&8191,this.r[7]=(c>>>11|d<<5)&8065,this.r[8]=(d>>>8|f<<8)&8191,this.r[9]=f>>>5&127;for(let p=0;p<8;p++)this.pad[p]=Rt(e,16+2*p)}process(e,n,i=!1){const o=i?0:2048,{h:a,r:l}=this,c=l[0],d=l[1],f=l[2],p=l[3],g=l[4],m=l[5],w=l[6],b=l[7],$=l[8],x=l[9],C=Rt(e,n+0),A=Rt(e,n+2),E=Rt(e,n+4),P=Rt(e,n+6),M=Rt(e,n+8),I=Rt(e,n+10),F=Rt(e,n+12),N=Rt(e,n+14);let K=a[0]+(C&8191),ee=a[1]+((C>>>13|A<<3)&8191),ie=a[2]+((A>>>10|E<<6)&8191),se=a[3]+((E>>>7|P<<9)&8191),ae=a[4]+((P>>>4|M<<12)&8191),X=a[5]+(M>>>1&8191),j=a[6]+((M>>>14|I<<2)&8191),q=a[7]+((I>>>11|F<<5)&8191),ne=a[8]+((F>>>8|N<<8)&8191),le=a[9]+(N>>>5|o),Y=0,ye=Y+K*c+ee*(5*x)+ie*(5*$)+se*(5*b)+ae*(5*w);Y=ye>>>13,ye&=8191,ye+=X*(5*m)+j*(5*g)+q*(5*p)+ne*(5*f)+le*(5*d),Y+=ye>>>13,ye&=8191;let be=Y+K*d+ee*c+ie*(5*x)+se*(5*$)+ae*(5*b);Y=be>>>13,be&=8191,be+=X*(5*w)+j*(5*m)+q*(5*g)+ne*(5*p)+le*(5*f),Y+=be>>>13,be&=8191;let xe=Y+K*f+ee*d+ie*c+se*(5*x)+ae*(5*$);Y=xe>>>13,xe&=8191,xe+=X*(5*b)+j*(5*w)+q*(5*m)+ne*(5*g)+le*(5*p),Y+=xe>>>13,xe&=8191;let Ve=Y+K*p+ee*f+ie*d+se*c+ae*(5*x);Y=Ve>>>13,Ve&=8191,Ve+=X*(5*$)+j*(5*b)+q*(5*w)+ne*(5*m)+le*(5*g),Y+=Ve>>>13,Ve&=8191;let de=Y+K*g+ee*p+ie*f+se*d+ae*c;Y=de>>>13,de&=8191,de+=X*(5*x)+j*(5*$)+q*(5*b)+ne*(5*w)+le*(5*m),Y+=de>>>13,de&=8191;let G=Y+K*m+ee*g+ie*p+se*f+ae*d;Y=G>>>13,G&=8191,G+=X*c+j*(5*x)+q*(5*$)+ne*(5*b)+le*(5*w),Y+=G>>>13,G&=8191;let D=Y+K*w+ee*m+ie*g+se*p+ae*f;Y=D>>>13,D&=8191,D+=X*d+j*c+q*(5*x)+ne*(5*$)+le*(5*b),Y+=D>>>13,D&=8191;let Z=Y+K*b+ee*w+ie*m+se*g+ae*p;Y=Z>>>13,Z&=8191,Z+=X*f+j*d+q*c+ne*(5*x)+le*(5*$),Y+=Z>>>13,Z&=8191;let te=Y+K*$+ee*b+ie*w+se*m+ae*g;Y=te>>>13,te&=8191,te+=X*p+j*f+q*d+ne*c+le*(5*x),Y+=te>>>13,te&=8191;let ue=Y+K*x+ee*$+ie*b+se*w+ae*m;Y=ue>>>13,ue&=8191,ue+=X*g+j*p+q*f+ne*d+le*c,Y+=ue>>>13,ue&=8191,Y=(Y<<2)+Y|0,Y=Y+ye|0,ye=Y&8191,Y=Y>>>13,be+=Y,a[0]=ye,a[1]=be,a[2]=xe,a[3]=Ve,a[4]=de,a[5]=G,a[6]=D,a[7]=Z,a[8]=te,a[9]=ue}finalize(){const{h:e,pad:n}=this,i=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let c=2;c<10;c++)e[c]+=o,o=e[c]>>>13,e[c]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,i[0]=e[0]+5,o=i[0]>>>13,i[0]&=8191;for(let c=1;c<10;c++)i[c]=e[c]+o,o=i[c]>>>13,i[c]&=8191;i[9]-=8192;let a=(o^1)-1;for(let c=0;c<10;c++)i[c]&=a;a=~a;for(let c=0;c<10;c++)e[c]=e[c]&a|i[c];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let l=e[0]+n[0];e[0]=l&65535;for(let c=1;c<8;c++)l=(e[c]+n[c]|0)+(l>>>16)|0,e[c]=l&65535}update(e){an.exists(this);const{buffer:n,blockLen:i}=this;e=$u(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){for(;i<=o-a;a+=i)this.process(e,a);continue}n.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){an.exists(this),an.output(e,this),this.finished=!0;const{buffer:n,h:i}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let a=0;for(let l=0;l<8;l++)e[a++]=i[l]>>>0,e[a++]=i[l]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}}function cE(t){const e=(i,o)=>t(o).update($u(i)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=i=>t(i),e}cE(t=>new lE(t));const uE=ud("expand 16-byte k"),dE=ud("expand 32-byte k"),fE=qn(uE),hE=qn(dE),Xp=t=>!(t.byteOffset%4),pE=t=>{const{core:e,rounds:n,counterRight:i,counterLen:o,allow128bitKeys:a,extendNonceFn:l,blockLen:c}=nE({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},t);an.number(o),an.number(n),an.number(c),an.bool(i),an.bool(a);const d=c/4;if(c%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(f,p,g,m,w=0)=>{if(an.bytes(f),an.bytes(p),an.bytes(g),m||(m=new Uint8Array(g.length)),an.bytes(m),an.number(w),w<0||w>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(m.length<g.length)throw new Error(`Salsa/ChaCha: output (${m.length}) is shorter than data (${g.length})`);const b=[];let $,x;if(f.length===32)$=f,x=hE;else if(f.length===16&&a)$=new Uint8Array(32),$.set(f),$.set(f,16),x=fE,b.push($);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${f.length}`);if(l){if(p.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");$=l(x,$,p.subarray(0,16),new Uint8Array(32)),b.push($),p=p.subarray(16)}const C=16-o;if(p.length!==C)throw new Error(`Salsa/ChaCha: nonce must be ${C} or 16 bytes`);if(C!==12){const K=new Uint8Array(12);K.set(p,i?0:12-p.length),b.push(p=K)}const A=new Uint8Array(c),E=qn(A),P=qn($),M=qn(p),I=Xp(g)&&qn(g),F=Xp(m)&&qn(m);b.push(E);const N=g.length;for(let K=0,ee=w;K<N;ee++){if(e(x,P,M,E,ee,n),ee>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const ie=Math.min(c,N-K);if(ie===c&&F&&I){const se=K/4;if(K%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let ae=0;ae<d;ae++)F[se+ae]=I[se+ae]^E[ae];K+=c;continue}for(let se=0;se<ie;se++)m[K+se]=g[K+se]^A[se];K+=ie}for(let K=0;K<b.length;K++)b[K].fill(0);return m}},ge=(t,e)=>t<<e|t>>>32-e;function gE(t,e,n,i,o,a=20){let l=t[0],c=t[1],d=t[2],f=t[3],p=e[0],g=e[1],m=e[2],w=e[3],b=e[4],$=e[5],x=e[6],C=e[7],A=o,E=n[0],P=n[1],M=n[2],I=l,F=c,N=d,K=f,ee=p,ie=g,se=m,ae=w,X=b,j=$,q=x,ne=C,le=A,Y=E,ye=P,be=M;for(let Ve=0;Ve<a;Ve+=2)I=I+ee|0,le=ge(le^I,16),X=X+le|0,ee=ge(ee^X,12),I=I+ee|0,le=ge(le^I,8),X=X+le|0,ee=ge(ee^X,7),F=F+ie|0,Y=ge(Y^F,16),j=j+Y|0,ie=ge(ie^j,12),F=F+ie|0,Y=ge(Y^F,8),j=j+Y|0,ie=ge(ie^j,7),N=N+se|0,ye=ge(ye^N,16),q=q+ye|0,se=ge(se^q,12),N=N+se|0,ye=ge(ye^N,8),q=q+ye|0,se=ge(se^q,7),K=K+ae|0,be=ge(be^K,16),ne=ne+be|0,ae=ge(ae^ne,12),K=K+ae|0,be=ge(be^K,8),ne=ne+be|0,ae=ge(ae^ne,7),I=I+ie|0,be=ge(be^I,16),q=q+be|0,ie=ge(ie^q,12),I=I+ie|0,be=ge(be^I,8),q=q+be|0,ie=ge(ie^q,7),F=F+se|0,le=ge(le^F,16),ne=ne+le|0,se=ge(se^ne,12),F=F+se|0,le=ge(le^F,8),ne=ne+le|0,se=ge(se^ne,7),N=N+ae|0,Y=ge(Y^N,16),X=X+Y|0,ae=ge(ae^X,12),N=N+ae|0,Y=ge(Y^N,8),X=X+Y|0,ae=ge(ae^X,7),K=K+ee|0,ye=ge(ye^K,16),j=j+ye|0,ee=ge(ee^j,12),K=K+ee|0,ye=ge(ye^K,8),j=j+ye|0,ee=ge(ee^j,7);let xe=0;i[xe++]=l+I|0,i[xe++]=c+F|0,i[xe++]=d+N|0,i[xe++]=f+K|0,i[xe++]=p+ee|0,i[xe++]=g+ie|0,i[xe++]=m+se|0,i[xe++]=w+ae|0,i[xe++]=b+X|0,i[xe++]=$+j|0,i[xe++]=x+q|0,i[xe++]=C+ne|0,i[xe++]=A+le|0,i[xe++]=E+Y|0,i[xe++]=P+ye|0,i[xe++]=M+be|0}function vE(t,e,n,i){const o=qn(e),a=qn(n),l=qn(i);let c=t[0],d=t[1],f=t[2],p=t[3],g=o[0],m=o[1],w=o[2],b=o[3],$=o[4],x=o[5],C=o[6],A=o[7],E=a[0],P=a[1],M=a[2],I=a[3];for(let F=0;F<20;F+=2)c=c+g|0,E=ge(E^c,16),$=$+E|0,g=ge(g^$,12),c=c+g|0,E=ge(E^c,8),$=$+E|0,g=ge(g^$,7),d=d+m|0,P=ge(P^d,16),x=x+P|0,m=ge(m^x,12),d=d+m|0,P=ge(P^d,8),x=x+P|0,m=ge(m^x,7),f=f+w|0,M=ge(M^f,16),C=C+M|0,w=ge(w^C,12),f=f+w|0,M=ge(M^f,8),C=C+M|0,w=ge(w^C,7),p=p+b|0,I=ge(I^p,16),A=A+I|0,b=ge(b^A,12),p=p+b|0,I=ge(I^p,8),A=A+I|0,b=ge(b^A,7),c=c+m|0,I=ge(I^c,16),C=C+I|0,m=ge(m^C,12),c=c+m|0,I=ge(I^c,8),C=C+I|0,m=ge(m^C,7),d=d+w|0,E=ge(E^d,16),A=A+E|0,w=ge(w^A,12),d=d+w|0,E=ge(E^d,8),A=A+E|0,w=ge(w^A,7),f=f+b|0,P=ge(P^f,16),$=$+P|0,b=ge(b^$,12),f=f+b|0,P=ge(P^f,8),$=$+P|0,b=ge(b^$,7),p=p+g|0,M=ge(M^p,16),x=x+M|0,g=ge(g^x,12),p=p+g|0,M=ge(M^p,8),x=x+M|0,g=ge(g^x,7);return l[0]=c,l[1]=d,l[2]=f,l[3]=p,l[4]=E,l[5]=P,l[6]=M,l[7]=I,i}const w1=pE({core:gE,counterRight:!1,counterLen:8,extendNonceFn:vE,allow128bitKeys:!1});var mE=Object.defineProperty,bt=(t,e)=>{for(var n in e)mE(t,n,{get:e[n],enumerable:!0})};function x1(t){return ln(co.getPublicKey(t))}var dd={};bt(dd,{MessageNode:()=>$1,MessageQueue:()=>E1,insertEventIntoAscendingList:()=>bE,insertEventIntoDescendingList:()=>yE,normalizeURL:()=>ku,utf8Decoder:()=>Zn,utf8Encoder:()=>$n});var Zn=new TextDecoder("utf-8"),$n=new TextEncoder;function ku(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function yE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at<t[i].created_at)a=i+1;else if(e.created_at>=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}function bE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at>t[i].created_at)a=i+1;else if(e.created_at<=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}var $1=class{_value;_next;get value(){return this._value}set value(t){this._value=t}get next(){return this._next}set next(t){this._next=t}constructor(t){this._value=t,this._next=null}},E1=class{_first;_last;get first(){return this._first}set first(t){this._first=t}get last(){return this._last}set last(t){this._last=t}_size;get size(){return this._size}set size(t){this._size=t}constructor(){this._first=null,this._last=null,this._size=0}enqueue(t){const e=new $1(t);return this._size===0||!this._last?(this._first=e,this._last=e):(this._last.next=e,this._last=e),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let t=this._first;return this._first=t.next,t.next=null,this._size--,t.value}},Zi=Symbol("verified"),ct=(t=>(t[t.Metadata=0]="Metadata",t[t.Text=1]="Text",t[t.RecommendRelay=2]="RecommendRelay",t[t.Contacts=3]="Contacts",t[t.EncryptedDirectMessage=4]="EncryptedDirectMessage",t[t.EventDeletion=5]="EventDeletion",t[t.Repost=6]="Repost",t[t.Reaction=7]="Reaction",t[t.BadgeAward=8]="BadgeAward",t[t.ChannelCreation=40]="ChannelCreation",t[t.ChannelMetadata=41]="ChannelMetadata",t[t.ChannelMessage=42]="ChannelMessage",t[t.ChannelHideMessage=43]="ChannelHideMessage",t[t.ChannelMuteUser=44]="ChannelMuteUser",t[t.Blank=255]="Blank",t[t.Report=1984]="Report",t[t.ZapRequest=9734]="ZapRequest",t[t.Zap=9735]="Zap",t[t.RelayList=10002]="RelayList",t[t.ClientAuth=22242]="ClientAuth",t[t.NwcRequest=23194]="NwcRequest",t[t.HttpAuth=27235]="HttpAuth",t[t.ProfileBadge=30008]="ProfileBadge",t[t.BadgeDefinition=30009]="BadgeDefinition",t[t.Article=30023]="Article",t[t.FileMetadata=1063]="FileMetadata",t))(ct||{});function _E(t=255){return{kind:t,content:"",tags:[],created_at:0}}function Vr(t,e){const n=t;return n.pubkey=x1(e),n.id=fo(n),n.sig=$E(n,e),n[Zi]=!0,n}function wE(t){if(!fd(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function fo(t){let e=Gn($n.encode(wE(t)));return ln(e)}var xE=t=>t instanceof Object;function fd(t){if(!xE(t)||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function pl(t){if(typeof t[Zi]=="boolean")return t[Zi];const e=fo(t);if(e!==t.id)return t[Zi]=!1;try{return t[Zi]=co.verify(t.sig,e,t.pubkey)}catch{return t[Zi]=!1}}function $E(t,e){return ln(co.sign(fo(t),e))}function EE(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1&&!t.ids.some(n=>e.id.startsWith(n))||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1&&!t.authors.some(n=>e.pubkey.startsWith(n)))return!1;for(let n in t)if(n[0]==="#"){let i=n.slice(1),o=t[`#${i}`];if(o&&!e.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>t.until)}function k1(t,e){for(let n=0;n<t.length;n++)if(EE(t[n],e))return!0;return!1}function kE(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];Object.entries(i).forEach(([o,a])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){e[o]=e[o]||[];for(let l=0;l<a.length;l++){let c=a[l];e[o].includes(c)||e[o].push(c)}}}),i.limit&&(!e.limit||i.limit>e.limit)&&(e.limit=i.limit),i.until&&(!e.until||i.until>e.until)&&(e.until=i.until),i.since&&(!e.since||i.since<e.since)&&(e.since=i.since)}return e}var CE={};bt(CE,{getHex64:()=>gl,getInt:()=>C1,getSubscriptionId:()=>S1,matchEventId:()=>SE,matchEventKind:()=>AE,matchEventPubkey:()=>TE});function gl(t,e){let n=e.length+3,i=t.indexOf(`"${e}":`)+n,o=t.slice(i).indexOf('"')+i+1;return t.slice(o,o+64)}function C1(t,e){let n=e.length,i=t.indexOf(`"${e}":`)+n+3,o=t.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function S1(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let i=e+7+1+n,o=t.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return t.slice(i+1,a)}function SE(t,e){return e===gl(t,"id")}function TE(t,e){return e===gl(t,"pubkey")}function AE(t,e){return e===C1(t,"kind")}var eg=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function RE(t,e={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=e;var a,l={},c=eg(),d={},f={},p;async function g(){return p||(p=new Promise((C,A)=>{try{a=new WebSocket(t)}catch(I){A(I)}a.onopen=()=>{c.connect.forEach(I=>I()),C()},a.onerror=()=>{p=void 0,c.error.forEach(I=>I()),A()},a.onclose=async()=>{p=void 0,c.disconnect.forEach(I=>I())};let E=new E1,P;a.onmessage=I=>{E.enqueue(I.data),P||(P=setInterval(M,0))};function M(){if(E.size===0){clearInterval(P),P=null;return}var I=E.dequeue();if(!I)return;let F=S1(I);if(F){let N=l[F];if(N&&N.alreadyHaveEvent&&N.alreadyHaveEvent(gl(I,"id"),t))return}try{let N=JSON.parse(I);switch(N[0]){case"EVENT":{let se=N[1],ae=N[2];fd(ae)&&l[se]&&(l[se].skipVerification||pl(ae))&&k1(l[se].filters,ae)&&(l[se],(d[se]?.event||[]).forEach(X=>X(ae)));return}case"COUNT":let K=N[1],ee=N[2];l[K]&&(d[K]?.count||[]).forEach(se=>se(ee));return;case"EOSE":{let se=N[1];se in d&&(d[se].eose.forEach(ae=>ae()),d[se].eose=[]);return}case"OK":{let se=N[1],ae=N[2],X=N[3]||"";if(se in f){let{resolve:j,reject:q}=f[se];ae?j(null):q(new Error(X))}return}case"NOTICE":let ie=N[1];c.notice.forEach(se=>se(ie));return;case"AUTH":{let se=N[1];c.auth?.forEach(ae=>ae(se));return}}}catch{return}}}),p)}function m(){return a?.readyState===1}async function w(){m()||await g()}async function b(C){let A=JSON.stringify(C);if(!(!m()&&(await new Promise(E=>setTimeout(E,1e3)),!m())))try{a.send(A)}catch(E){console.log(E)}}const $=(C,{verb:A="REQ",skipVerification:E=!1,alreadyHaveEvent:P=null,id:M=Math.random().toString().slice(2)}={})=>{let I=M;l[I]={id:I,filters:C,skipVerification:E,alreadyHaveEvent:P},b([A,I,...C]);let F={sub:(N,K={})=>$(N||C,{skipVerification:K.skipVerification||E,alreadyHaveEvent:K.alreadyHaveEvent||P,id:I}),unsub:()=>{delete l[I],delete d[I],b(["CLOSE",I])},on:(N,K)=>{d[I]=d[I]||{event:[],count:[],eose:[]},d[I][N].push(K)},off:(N,K)=>{let ee=d[I],ie=ee[N].indexOf(K);ie>=0&&ee[N].splice(ie,1)},get events(){return T1(F)}};return F};function x(C,A){return new Promise((E,P)=>{if(!C.id){P(new Error(`event ${C} has no id`));return}let M=C.id;b([A,C]),f[M]={resolve:E,reject:P}})}return{url:t,sub:$,on:(C,A)=>{c[C].push(A),C==="connect"&&a?.readyState===1&&A()},off:(C,A)=>{let E=c[C].indexOf(A);E!==-1&&c[C].splice(E,1)},list:(C,A)=>new Promise(E=>{let P=$(C,A),M=[],I=setTimeout(()=>{P.unsub(),E(M)},n);P.on("eose",()=>{P.unsub(),clearTimeout(I),E(M)}),P.on("event",F=>{M.push(F)})}),get:(C,A)=>new Promise(E=>{let P=$([C],A),M=setTimeout(()=>{P.unsub(),E(null)},i);P.on("event",I=>{P.unsub(),clearTimeout(M),E(I)})}),count:C=>new Promise(A=>{let E=$(C,{...$,verb:"COUNT"}),P=setTimeout(()=>{E.unsub(),A(null)},o);E.on("count",M=>{E.unsub(),clearTimeout(P),A(M)})}),async publish(C){await x(C,"EVENT")},async auth(C){await x(C,"AUTH")},connect:w,close(){c=eg(),d={},f={},a?.readyState===WebSocket.OPEN&&a.close()},get status(){return a?.readyState??3}}}async function*T1(t){let e;const n=[],i=o=>{e?(e(o),e=void 0):n.push(o)};t.on("event",i);try{for(;;)n.length>0?yield n.shift():yield await new Promise(a=>{e=a})}finally{t.off("event",i)}}var IE=class{_conn;_seenOn={};batchedByKey={};eoseSubTimeout;getTimeout;seenOnEnabled=!0;batchInterval=100;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400,this.seenOnEnabled=t.seenOnEnabled!==!1,this.batchInterval=t.batchInterval||100}close(t){t.forEach(e=>{let n=this._conn[ku(e)];n&&n.close()})}async ensureRelay(t){const e=ku(t);this._conn[e]||(this._conn[e]=RE(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[e];return await n.connect(),n}sub(t,e,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(m,w)=>{if(n?.alreadyHaveEvent?.(m,w))return!0;if(this.seenOnEnabled){let b=this._seenOn[m]||new Set;b.add(w),this._seenOn[m]=b}return i.has(m)};let a=[],l=new Set,c=new Set,d=t.length,f=!1,p=setTimeout(()=>{f=!0;for(let m of c.values())m()},n?.eoseSubTimeout||this.eoseSubTimeout);t.filter((m,w,b)=>b.indexOf(m)===w).forEach(async m=>{let w;try{w=await this.ensureRelay(m)}catch{$();return}if(!w)return;let b=w.sub(e,o);b.on("event",x=>{i.add(x.id);for(let C of l.values())C(x)}),b.on("eose",()=>{f||$()}),a.push(b);function $(){if(d--,d===0){clearTimeout(p);for(let x of c.values())x()}}});let g={sub(m,w){return a.forEach(b=>b.sub(m,w)),g},unsub(){a.forEach(m=>m.unsub())},on(m,w){m==="event"?l.add(w):m==="eose"&&c.add(w)},off(m,w){m==="event"?l.delete(w):m==="eose"&&c.delete(w)},get events(){return T1(g)}};return g}get(t,e,n){return new Promise(i=>{let o=this.sub(t,[e],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(t,e,n){return new Promise(i=>{let o=[],a=this.sub(t,e,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}batchedList(t,e,n){return new Promise(i=>{this.batchedByKey[t]?this.batchedByKey[t].push({filters:n,relays:e,resolve:i,events:[]}):(this.batchedByKey[t]=[{filters:n,relays:e,resolve:i,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const a=this.batchedByKey[o],l=[],c=[];a.forEach(f=>{l.push(...f.filters),c.push(...f.relays)});const d=this.sub(c,[kE(...l)]);d.on("event",f=>{a.forEach(p=>k1(p.filters,f)&&p.events.push(f))}),d.on("eose",()=>{d.unsub(),a.forEach(f=>f.resolve(f.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(t,e){return t.map(async n=>(await this.ensureRelay(n)).publish(e))}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}},ho={};bt(ho,{BECH32_REGEX:()=>R1,decode:()=>vl,naddrEncode:()=>NE,neventEncode:()=>jE,noteEncode:()=>ME,nprofileEncode:()=>BE,npubEncode:()=>PE,nrelayEncode:()=>DE,nsecEncode:()=>LE});var A1=5e3,R1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function OE(t){const e=new Uint8Array(4);return e[0]=t>>24&255,e[1]=t>>16&255,e[2]=t>>8&255,e[3]=t&255,e}function vl(t){let{prefix:e,words:n}=ts.decode(t,A1),i=new Uint8Array(ts.fromWords(n));switch(e){case"nprofile":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ln(o[0][0]),relays:o[1]?o[1].map(a=>Zn.decode(a)):[]}}}case"nevent":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(o[3]&&o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:ln(o[0][0]),relays:o[1]?o[1].map(a=>Zn.decode(a)):[],author:o[2]?.[0]?ln(o[2][0]):void 0,kind:o[3]?.[0]?parseInt(ln(o[3][0]),16):void 0}}}case"naddr":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Zn.decode(o[0][0]),pubkey:ln(o[2][0]),kind:parseInt(ln(o[3][0]),16),relays:o[1]?o[1].map(a=>Zn.decode(a)):[]}}}case"nrelay":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Zn.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:e,data:ln(i)};default:throw new Error(`unknown prefix ${e}`)}}function ma(t){let e={},n=t;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);e[i]=e[i]||[],e[i].push(a)}return e}function LE(t){return hd("nsec",t)}function PE(t){return hd("npub",t)}function ME(t){return hd("note",t)}function po(t,e){let n=ts.toWords(e);return ts.encode(t,n,A1)}function hd(t,e){let n=Ji(e);return po(t,n)}function BE(t){let e=ml({0:[Ji(t.pubkey)],1:(t.relays||[]).map(n=>$n.encode(n))});return po("nprofile",e)}function jE(t){let e;t.kind!=null&&(e=OE(t.kind));let n=ml({0:[Ji(t.id)],1:(t.relays||[]).map(i=>$n.encode(i)),2:t.author?[Ji(t.author)]:[],3:e?[new Uint8Array(e)]:[]});return po("nevent",n)}function NE(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=ml({0:[$n.encode(t.identifier)],1:(t.relays||[]).map(i=>$n.encode(i)),2:[Ji(t.pubkey)],3:[new Uint8Array(e)]});return po("naddr",n)}function DE(t){let e=ml({0:[$n.encode(t)]});return po("nrelay",e)}function ml(t){let e=[];return Object.entries(t).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),e.push(a)})}),Vi(...e)}var UE={};bt(UE,{decrypt:()=>FE,encrypt:()=>I1});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function I1(t,e,n){const i=Ut.getSharedSecret(t,"02"+e),o=O1(i);let a=Uint8Array.from(ao(16)),l=$n.encode(n),c=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},c,l),f=wr.encode(new Uint8Array(d)),p=wr.encode(new Uint8Array(a.buffer));return`${f}?iv=${p}`}async function FE(t,e,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(t,"02"+e),l=O1(a),c=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=wr.decode(i),f=wr.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},c,d);return Zn.decode(p)}function O1(t){return t.slice(1,33)}var L1={};bt(L1,{NIP05_REGEX:()=>P1,queryProfile:()=>WE,searchDomain:()=>HE,useFetchImplementation:()=>zE});var P1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,yl;try{yl=fetch}catch{}function zE(t){yl=t}async function HE(t,e=""){try{return(await(await yl(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function WE(t){const e=t.match(P1);if(!e)return null;const[n,i="_",o]=e;try{const a=await yl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:c}=qE(await a.json()),d=l[i];return d?{pubkey:d,relays:c?.[d]}:null}catch{return null}}function qE(t){const e={names:{}};for(const[n,i]of Object.entries(t.names))typeof n=="string"&&typeof i=="string"&&(e.names[n]=i);if(t.relays){e.relays={};for(const[n,i]of Object.entries(t.relays))typeof n=="string"&&Array.isArray(i)&&(e.relays[n]=i.filter(o=>typeof o=="string"))}return e}var ZE={};bt(ZE,{generateSeedWords:()=>VE,privateKeyFromSeedWords:()=>KE,validateWords:()=>GE});function KE(t,e){let i=pi.fromMasterSeed(U7(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return ln(i)}function VE(){return P7(f1)}function GE(t){return N7(t,f1)}var QE={};bt(QE,{parse:()=>YE});function YE(t){const e={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of t.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&e.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,c,d]=o,f={id:l,relays:c?[c]:[]},p=i===0,g=i===n.length-1;if(d==="root"){e.root=f;continue}if(d==="reply"){e.reply=f;continue}if(d==="mention"){e.mentions.push(f);continue}if(p){e.root=f;continue}if(g){e.reply=f;continue}e.mentions.push(f)}return e}var JE={};bt(JE,{getPow:()=>M1,minePow:()=>XE});function M1(t){let e=0;for(let n=0;n<t.length;n++){const i=parseInt(t[n],16);if(i===0)e+=4;else{e+=Math.clz32(i)-28;break}}return e}function XE(t,e){let n=0;const i=t,o=["nonce",n.toString(),e.toString()];for(i.tags.push(o);;){const a=Math.floor(new Date().getTime()/1e3);if(a!==i.created_at&&(n=0,i.created_at=a),o[1]=(++n).toString(),i.id=fo(i),M1(i.id)>=e)break}return i}var e9={};bt(e9,{finishRepostEvent:()=>t9,getRepostedEvent:()=>n9,getRepostedEventPointer:()=>B1});function t9(t,e,n,i){return Vr({kind:6,tags:[...t.tags??[],["e",e.id,n],["p",e.pubkey]],content:t.content===""?"":JSON.stringify(e),created_at:t.created_at},i)}function B1(t){if(t.kind!==6)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(e!==void 0)return{id:e[1],relays:[e[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function n9(t,{skipVerification:e}={}){const n=B1(t);if(n===void 0||t.content==="")return;let i;try{i=JSON.parse(t.content)}catch{return}if(i.id===n.id&&!(!e&&!pl(i)))return i}var r9={};bt(r9,{NOSTR_URI_REGEX:()=>bl,parse:()=>s9,test:()=>i9});var bl=new RegExp(`nostr:(${R1.source})`);function i9(t){return typeof t=="string"&&new RegExp(`^${bl.source}$`).test(t)}function s9(t){const e=t.match(new RegExp(`^${bl.source}$`));if(!e)throw new Error(`Invalid Nostr URI: ${t}`);return{uri:e[0],value:e[1],decoded:vl(e[1])}}var o9={};bt(o9,{finishReactionEvent:()=>a9,getReactedEventPointer:()=>l9});function a9(t,e,n){const i=e.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Vr({...t,kind:7,tags:[...t.tags??[],...i,["e",e.id],["p",e.pubkey]],content:t.content??"+"},n)}function l9(t){if(t.kind!==7)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(e===void 0||n===void 0))return{id:e[1],relays:[e[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var c9={};bt(c9,{createDelegation:()=>u9,getDelegator:()=>d9});function u9(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Gn($n.encode(`nostr:delegation:${e.pubkey}:${i}`)),a=ln(co.sign(o,t));return{from:x1(t),to:e.pubkey,cond:i,sig:a}}function d9(t){let e=t.tags.find(c=>c[0]==="delegation"&&c.length>=4);if(!e)return null;let n=e[1],i=e[2],o=e[3],a=i.split("&");for(let c=0;c<a.length;c++){let[d,f,p]=a[c].split(/\b/);if(!(d==="kind"&&f==="="&&t.kind===parseInt(p))){if(d==="created_at"&&f==="<"&&t.created_at<parseInt(p))continue;if(d==="created_at"&&f===">"&&t.created_at>parseInt(p))continue;return null}}let l=Gn($n.encode(`nostr:delegation:${t.pubkey}:${i}`));return co.verify(o,l,n)?n:null}var f9={};bt(f9,{matchAll:()=>h9,regex:()=>pd,replaceAll:()=>p9});var pd=()=>new RegExp(`\\b${bl.source}\\b`,"g");function*h9(t){const e=t.matchAll(pd());for(const n of e)try{const[i,o]=n;yield{uri:i,value:o,decoded:vl(o),start:n.index,end:n.index+i.length}}catch{}}function p9(t,e){return t.replaceAll(pd(),(n,i)=>e({uri:n,value:i,decoded:vl(i)}))}var g9={};bt(g9,{channelCreateEvent:()=>v9,channelHideMessageEvent:()=>b9,channelMessageEvent:()=>y9,channelMetadataEvent:()=>m9,channelMuteUserEvent:()=>_9});var v9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Vr({kind:40,tags:[...t.tags??[]],content:n,created_at:t.created_at},e)},m9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Vr({kind:41,tags:[["e",t.channel_create_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},y9=(t,e)=>{const n=[["e",t.channel_create_event_id,t.relay_url,"root"]];return t.reply_to_channel_message_event_id&&n.push(["e",t.reply_to_channel_message_event_id,t.relay_url,"reply"]),Vr({kind:42,tags:[...n,...t.tags??[]],content:t.content,created_at:t.created_at},e)},b9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Vr({kind:43,tags:[["e",t.channel_message_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},_9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Vr({kind:44,tags:[["p",t.pubkey_to_mute],...t.tags??[]],content:n,created_at:t.created_at},e)},w9={};bt(w9,{useFetchImplementation:()=>x9,validateGithub:()=>$9});var gd;try{gd=fetch}catch{}function x9(t){gd=t}async function $9(t,e,n){try{return await(await gd(`https://gist.github.com/${e}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${t}`}catch{return!1}}var E9={};bt(E9,{authenticate:()=>k9});var k9=async({challenge:t,relay:e,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",e.url],["challenge",t]],content:""};return e.auth(await n(i))},C9={};bt(C9,{decrypt:()=>A9,encrypt:()=>T9,getSharedSecret:()=>S9});var S9=(t,e)=>Gn(Ut.getSharedSecret(t,"02"+e).subarray(1,33));function T9(t,e,n=1){if(n!==1)throw new Error("NIP44: unknown encryption version");const i=ao(24),o=$n.encode(e),a=w1(t,i,o),l=new Uint8Array(25+a.length);return l.set([n],0),l.set(i,1),l.set(a,25),wr.encode(l)}function A9(t,e){let n=wr.decode(e);if(n[0]!==1)throw new Error(`NIP44: unknown encryption version: ${n[0]}`);const i=n.slice(1,25),o=n.slice(25),a=w1(t,i,o);return Zn.decode(a)}var R9={};bt(R9,{makeNwcRequestEvent:()=>O9,parseConnectionString:()=>I9});function I9(t){const{pathname:e,searchParams:n}=new URL(t),i=e,o=n.get("relay"),a=n.get("secret");if(!i||!o||!a)throw new Error("invalid connection string");return{pubkey:i,relay:o,secret:a}}async function O9({pubkey:t,secret:e,invoice:n}){const o=await I1(e,t,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),a={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t]]};return Vr(a,e)}var L9={};bt(L9,{getZapEndpoint:()=>M9,makeZapReceipt:()=>N9,makeZapRequest:()=>B9,useFetchImplementation:()=>P9,validateZapRequest:()=>j9});var vd;try{vd=fetch}catch{}function P9(t){vd=t}async function M9(t){try{let e="",{lud06:n,lud16:i}=JSON.parse(t.content);if(n){let{words:l}=ts.decode(n,1e3),c=ts.fromWords(l);e=Zn.decode(c)}else if(i){let[l,c]=i.split("@");e=`https://${c}/.well-known/lnurlp/${l}`}else return null;let a=await(await vd(e)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function B9({profile:t,event:e,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...i]]};return e&&a.tags.push(["e",e]),a}function j9(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!fd(e))return"Zap request is not a valid Nostr event.";if(!pl(e))return"Invalid signature on zap request.";let n=e.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=e.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function N9({zapRequest:t,preimage:e,bolt11:n,paidAt:i}){let a=JSON.parse(t).tags.filter(([c])=>c==="e"||c==="p"||c==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",t]]};return e&&l.tags.push(["preimage",e]),l}var D9={};bt(D9,{getToken:()=>U9,unpackEventFromToken:()=>N1,validateEvent:()=>D1,validateToken:()=>F9});var j1="Nostr ";async function U9(t,e,n,i=!1){if(!t||!e)throw new Error("Missing loginUrl or httpMethod");const o=_E(27235);o.tags=[["u",t],["method",e]],o.created_at=Math.round(new Date().getTime()/1e3);const a=await n(o);return(i?j1:"")+wr.encode($n.encode(JSON.stringify(a)))}async function F9(t,e,n){const i=await N1(t).catch(a=>{throw a});return await D1(i,e,n).catch(a=>{throw a})}async function N1(t){if(!t)throw new Error("Missing token");t=t.replace(j1,"");const e=Zn.decode(wr.decode(t));if(!e||e.length===0||!e.startsWith("{"))throw new Error("Invalid token");return JSON.parse(e)}async function D1(t,e,n){if(!t)throw new Error("Invalid nostr event");if(!pl(t))throw new Error("Invalid nostr event, signature invalid");if(t.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!t.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-t.created_at>60)throw new Error("Invalid nostr event, expired");const i=t.tags.find(a=>a[0]==="u");if(i?.length!==1&&i?.[1]!==e)throw new Error("Invalid nostr event, url tag invalid");const o=t.tags.find(a=>a[0]==="method");if(o?.length!==1&&o?.[1].toLowerCase()!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const z9=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),U1=(t={})=>(()=>{const e=z9();return it(e,t,!0,!0),e})(),H9=B('<button class="text-blue-500 underline">'),{noteEncode:W9,neventEncode:q9}=ho,Z9=t=>{try{return W9(t)}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},K9=t=>{try{return q9({id:t})}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},Zs=t=>(()=>{const e=H9();return k(e,S(me,{get when(){return t.kind==null||t.kind===ct.Text},get fallback(){return K9(t.eventId)},get children(){return Z9(t.eventId)}})),e})();var ja={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ja.exports;(function(t,e){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,m=2,w=4,b=1,$=2,x=1,C=2,A=4,E=8,P=16,M=32,I=64,F=128,N=256,K=512,ee=30,ie="...",se=800,ae=16,X=1,j=2,q=3,ne=1/0,le=9007199254740991,Y=17976931348623157e292,ye=0/0,be=4294967295,xe=be-1,Ve=be>>>1,de=[["ary",F],["bind",x],["bindKey",C],["curry",E],["curryRight",P],["flip",K],["partial",M],["partialRight",I],["rearg",N]],G="[object Arguments]",D="[object Array]",Z="[object AsyncFunction]",te="[object Boolean]",ue="[object Date]",oe="[object DOMException]",He="[object Error]",Ke="[object Function]",J="[object GeneratorFunction]",_e="[object Map]",et="[object Number]",Jt="[object Null]",Ct="[object Object]",Ht="[object Promise]",Jr="[object Proxy]",En="[object RegExp]",St="[object Set]",Xt="[object String]",Un="[object Symbol]",Er="[object Undefined]",kn="[object WeakMap]",Ae="[object WeakSet]",Wt="[object ArrayBuffer]",qt="[object DataView]",Cn="[object Float32Array]",Sn="[object Float64Array]",un="[object Int8Array]",dn="[object Int16Array]",Tn="[object Int32Array]",rr="[object Uint8Array]",ir="[object Uint8ClampedArray]",sr="[object Uint16Array]",Ai="[object Uint32Array]",_o=/\b__p \+= '';/g,wo=/\b(__p \+=) '' \+/g,xo=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yd=/&(?:amp|lt|gt|quot|#39);/g,Jd=/[&<>"']/g,jm=RegExp(Yd.source),Nm=RegExp(Jd.source),Dm=/<%-([\s\S]+?)%>/g,Um=/<%([\s\S]+?)%>/g,Xd=/<%=([\s\S]+?)%>/g,Fm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zm=/^\w*$/,Hm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ml=/[\\^$.*+?()[\]{}|]/g,Wm=RegExp(Ml.source),Bl=/^\s+/,qm=/\s/,Zm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Km=/\{\n\/\* \[wrapped with (.+)\] \*/,Vm=/,? & /,Gm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Qm=/[()=,{}\[\]\/\s]/,Ym=/\\(\\)?/g,Jm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ef=/\w*$/,Xm=/^[-+]0x[0-9a-f]+$/i,e2=/^0b[01]+$/i,t2=/^\[object .+?Constructor\]$/,n2=/^0o[0-7]+$/i,r2=/^(?:0|[1-9]\d*)$/,i2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$o=/($^)/,s2=/['\n\r\u2028\u2029\\]/g,Eo="\\ud800-\\udfff",o2="\\u0300-\\u036f",a2="\\ufe20-\\ufe2f",l2="\\u20d0-\\u20ff",tf=o2+a2+l2,nf="\\u2700-\\u27bf",rf="a-z\\xdf-\\xf6\\xf8-\\xff",c2="\\xac\\xb1\\xd7\\xf7",u2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",d2="\\u2000-\\u206f",f2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sf="A-Z\\xc0-\\xd6\\xd8-\\xde",of="\\ufe0e\\ufe0f",af=c2+u2+d2+f2,jl="['’]",h2="["+Eo+"]",lf="["+af+"]",ko="["+tf+"]",cf="\\d+",p2="["+nf+"]",uf="["+rf+"]",df="[^"+Eo+af+cf+nf+rf+sf+"]",Nl="\\ud83c[\\udffb-\\udfff]",g2="(?:"+ko+"|"+Nl+")",ff="[^"+Eo+"]",Dl="(?:\\ud83c[\\udde6-\\uddff]){2}",Ul="[\\ud800-\\udbff][\\udc00-\\udfff]",Ri="["+sf+"]",hf="\\u200d",pf="(?:"+uf+"|"+df+")",v2="(?:"+Ri+"|"+df+")",gf="(?:"+jl+"(?:d|ll|m|re|s|t|ve))?",vf="(?:"+jl+"(?:D|LL|M|RE|S|T|VE))?",mf=g2+"?",yf="["+of+"]?",m2="(?:"+hf+"(?:"+[ff,Dl,Ul].join("|")+")"+yf+mf+")*",y2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",b2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",bf=yf+mf+m2,_2="(?:"+[p2,Dl,Ul].join("|")+")"+bf,w2="(?:"+[ff+ko+"?",ko,Dl,Ul,h2].join("|")+")",x2=RegExp(jl,"g"),$2=RegExp(ko,"g"),Fl=RegExp(Nl+"(?="+Nl+")|"+w2+bf,"g"),E2=RegExp([Ri+"?"+uf+"+"+gf+"(?="+[lf,Ri,"$"].join("|")+")",v2+"+"+vf+"(?="+[lf,Ri+pf,"$"].join("|")+")",Ri+"?"+pf+"+"+gf,Ri+"+"+vf,b2,y2,cf,_2].join("|"),"g"),k2=RegExp("["+hf+Eo+tf+of+"]"),C2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],T2=-1,ot={};ot[Cn]=ot[Sn]=ot[un]=ot[dn]=ot[Tn]=ot[rr]=ot[ir]=ot[sr]=ot[Ai]=!0,ot[G]=ot[D]=ot[Wt]=ot[te]=ot[qt]=ot[ue]=ot[He]=ot[Ke]=ot[_e]=ot[et]=ot[Ct]=ot[En]=ot[St]=ot[Xt]=ot[kn]=!1;var nt={};nt[G]=nt[D]=nt[Wt]=nt[qt]=nt[te]=nt[ue]=nt[Cn]=nt[Sn]=nt[un]=nt[dn]=nt[Tn]=nt[_e]=nt[et]=nt[Ct]=nt[En]=nt[St]=nt[Xt]=nt[Un]=nt[rr]=nt[ir]=nt[sr]=nt[Ai]=!0,nt[He]=nt[Ke]=nt[kn]=!1;var A2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},R2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},I2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},O2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},L2=parseFloat,P2=parseInt,_f=typeof xt=="object"&&xt&&xt.Object===Object&&xt,M2=typeof self=="object"&&self&&self.Object===Object&&self,Tt=_f||M2||Function("return this")(),zl=e&&!e.nodeType&&e,Xr=zl&&!0&&t&&!t.nodeType&&t,wf=Xr&&Xr.exports===zl,Hl=wf&&_f.process,fn=function(){try{var O=Xr&&Xr.require&&Xr.require("util").types;return O||Hl&&Hl.binding&&Hl.binding("util")}catch{}}(),xf=fn&&fn.isArrayBuffer,$f=fn&&fn.isDate,Ef=fn&&fn.isMap,kf=fn&&fn.isRegExp,Cf=fn&&fn.isSet,Sf=fn&&fn.isTypedArray;function en(O,z,U){switch(U.length){case 0:return O.call(z);case 1:return O.call(z,U[0]);case 2:return O.call(z,U[0],U[1]);case 3:return O.call(z,U[0],U[1],U[2])}return O.apply(z,U)}function B2(O,z,U,he){for(var Re=-1,Qe=O==null?0:O.length;++Re<Qe;){var _t=O[Re];z(he,_t,U(_t),O)}return he}function hn(O,z){for(var U=-1,he=O==null?0:O.length;++U<he&&z(O[U],U,O)!==!1;);return O}function j2(O,z){for(var U=O==null?0:O.length;U--&&z(O[U],U,O)!==!1;);return O}function Tf(O,z){for(var U=-1,he=O==null?0:O.length;++U<he;)if(!z(O[U],U,O))return!1;return!0}function kr(O,z){for(var U=-1,he=O==null?0:O.length,Re=0,Qe=[];++U<he;){var _t=O[U];z(_t,U,O)&&(Qe[Re++]=_t)}return Qe}function Co(O,z){var U=O==null?0:O.length;return!!U&&Ii(O,z,0)>-1}function Wl(O,z,U){for(var he=-1,Re=O==null?0:O.length;++he<Re;)if(U(z,O[he]))return!0;return!1}function lt(O,z){for(var U=-1,he=O==null?0:O.length,Re=Array(he);++U<he;)Re[U]=z(O[U],U,O);return Re}function Cr(O,z){for(var U=-1,he=z.length,Re=O.length;++U<he;)O[Re+U]=z[U];return O}function ql(O,z,U,he){var Re=-1,Qe=O==null?0:O.length;for(he&&Qe&&(U=O[++Re]);++Re<Qe;)U=z(U,O[Re],Re,O);return U}function N2(O,z,U,he){var Re=O==null?0:O.length;for(he&&Re&&(U=O[--Re]);Re--;)U=z(U,O[Re],Re,O);return U}function Zl(O,z){for(var U=-1,he=O==null?0:O.length;++U<he;)if(z(O[U],U,O))return!0;return!1}var D2=Kl("length");function U2(O){return O.split("")}function F2(O){return O.match(Gm)||[]}function Af(O,z,U){var he;return U(O,function(Re,Qe,_t){if(z(Re,Qe,_t))return he=Qe,!1}),he}function So(O,z,U,he){for(var Re=O.length,Qe=U+(he?1:-1);he?Qe--:++Qe<Re;)if(z(O[Qe],Qe,O))return Qe;return-1}function Ii(O,z,U){return z===z?X2(O,z,U):So(O,Rf,U)}function z2(O,z,U,he){for(var Re=U-1,Qe=O.length;++Re<Qe;)if(he(O[Re],z))return Re;return-1}function Rf(O){return O!==O}function If(O,z){var U=O==null?0:O.length;return U?Gl(O,z)/U:ye}function Kl(O){return function(z){return z==null?n:z[O]}}function Vl(O){return function(z){return O==null?n:O[z]}}function Of(O,z,U,he,Re){return Re(O,function(Qe,_t,tt){U=he?(he=!1,Qe):z(U,Qe,_t,tt)}),U}function H2(O,z){var U=O.length;for(O.sort(z);U--;)O[U]=O[U].value;return O}function Gl(O,z){for(var U,he=-1,Re=O.length;++he<Re;){var Qe=z(O[he]);Qe!==n&&(U=U===n?Qe:U+Qe)}return U}function Ql(O,z){for(var U=-1,he=Array(O);++U<O;)he[U]=z(U);return he}function W2(O,z){return lt(z,function(U){return[U,O[U]]})}function Lf(O){return O&&O.slice(0,jf(O)+1).replace(Bl,"")}function tn(O){return function(z){return O(z)}}function Yl(O,z){return lt(z,function(U){return O[U]})}function $s(O,z){return O.has(z)}function Pf(O,z){for(var U=-1,he=O.length;++U<he&&Ii(z,O[U],0)>-1;);return U}function Mf(O,z){for(var U=O.length;U--&&Ii(z,O[U],0)>-1;);return U}function q2(O,z){for(var U=O.length,he=0;U--;)O[U]===z&&++he;return he}var Z2=Vl(A2),K2=Vl(R2);function V2(O){return"\\"+O2[O]}function G2(O,z){return O==null?n:O[z]}function Oi(O){return k2.test(O)}function Q2(O){return C2.test(O)}function Y2(O){for(var z,U=[];!(z=O.next()).done;)U.push(z.value);return U}function Jl(O){var z=-1,U=Array(O.size);return O.forEach(function(he,Re){U[++z]=[Re,he]}),U}function Bf(O,z){return function(U){return O(z(U))}}function Sr(O,z){for(var U=-1,he=O.length,Re=0,Qe=[];++U<he;){var _t=O[U];(_t===z||_t===p)&&(O[U]=p,Qe[Re++]=U)}return Qe}function To(O){var z=-1,U=Array(O.size);return O.forEach(function(he){U[++z]=he}),U}function J2(O){var z=-1,U=Array(O.size);return O.forEach(function(he){U[++z]=[he,he]}),U}function X2(O,z,U){for(var he=U-1,Re=O.length;++he<Re;)if(O[he]===z)return he;return-1}function ey(O,z,U){for(var he=U+1;he--;)if(O[he]===z)return he;return he}function Li(O){return Oi(O)?ny(O):D2(O)}function An(O){return Oi(O)?ry(O):U2(O)}function jf(O){for(var z=O.length;z--&&qm.test(O.charAt(z)););return z}var ty=Vl(I2);function ny(O){for(var z=Fl.lastIndex=0;Fl.test(O);)++z;return z}function ry(O){return O.match(Fl)||[]}function iy(O){return O.match(E2)||[]}var sy=function O(z){z=z==null?Tt:Pi.defaults(Tt.Object(),z,Pi.pick(Tt,S2));var U=z.Array,he=z.Date,Re=z.Error,Qe=z.Function,_t=z.Math,tt=z.Object,Xl=z.RegExp,oy=z.String,pn=z.TypeError,Ao=U.prototype,ay=Qe.prototype,Mi=tt.prototype,Ro=z["__core-js_shared__"],Io=ay.toString,Xe=Mi.hasOwnProperty,ly=0,Nf=function(){var r=/[^.]+$/.exec(Ro&&Ro.keys&&Ro.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Oo=Mi.toString,cy=Io.call(tt),uy=Tt._,dy=Xl("^"+Io.call(Xe).replace(Ml,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lo=wf?z.Buffer:n,Tr=z.Symbol,Po=z.Uint8Array,Df=Lo?Lo.allocUnsafe:n,Mo=Bf(tt.getPrototypeOf,tt),Uf=tt.create,Ff=Mi.propertyIsEnumerable,Bo=Ao.splice,zf=Tr?Tr.isConcatSpreadable:n,Es=Tr?Tr.iterator:n,ei=Tr?Tr.toStringTag:n,jo=function(){try{var r=si(tt,"defineProperty");return r({},"",{}),r}catch{}}(),fy=z.clearTimeout!==Tt.clearTimeout&&z.clearTimeout,hy=he&&he.now!==Tt.Date.now&&he.now,py=z.setTimeout!==Tt.setTimeout&&z.setTimeout,No=_t.ceil,Do=_t.floor,ec=tt.getOwnPropertySymbols,gy=Lo?Lo.isBuffer:n,Hf=z.isFinite,vy=Ao.join,my=Bf(tt.keys,tt),wt=_t.max,Lt=_t.min,yy=he.now,by=z.parseInt,Wf=_t.random,_y=Ao.reverse,tc=si(z,"DataView"),ks=si(z,"Map"),nc=si(z,"Promise"),Bi=si(z,"Set"),Cs=si(z,"WeakMap"),Ss=si(tt,"create"),Uo=Cs&&new Cs,ji={},wy=oi(tc),xy=oi(ks),$y=oi(nc),Ey=oi(Bi),ky=oi(Cs),Fo=Tr?Tr.prototype:n,Ts=Fo?Fo.valueOf:n,qf=Fo?Fo.toString:n;function y(r){if(ft(r)&&!Oe(r)&&!(r instanceof We)){if(r instanceof gn)return r;if(Xe.call(r,"__wrapped__"))return Zh(r)}return new gn(r)}var Ni=function(){function r(){}return function(s){if(!ut(s))return{};if(Uf)return Uf(s);r.prototype=s;var u=new r;return r.prototype=n,u}}();function zo(){}function gn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Dm,evaluate:Um,interpolate:Xd,variable:"",imports:{_:y}},y.prototype=zo.prototype,y.prototype.constructor=y,gn.prototype=Ni(zo.prototype),gn.prototype.constructor=gn;function We(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=be,this.__views__=[]}function Cy(){var r=new We(this.__wrapped__);return r.__actions__=Zt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Zt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Zt(this.__views__),r}function Sy(){if(this.__filtered__){var r=new We(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Ty(){var r=this.__wrapped__.value(),s=this.__dir__,u=Oe(r),h=s<0,v=u?r.length:0,_=Ub(0,v,this.__views__),T=_.start,R=_.end,L=R-T,H=h?R:T-1,W=this.__iteratees__,Q=W.length,ce=0,ve=Lt(L,this.__takeCount__);if(!u||!h&&v==L&&ve==L)return gh(r,this.__actions__);var ke=[];e:for(;L--&&ce<ve;){H+=s;for(var Be=-1,Ce=r[H];++Be<Q;){var Fe=W[Be],qe=Fe.iteratee,sn=Fe.type,Dt=qe(Ce);if(sn==j)Ce=Dt;else if(!Dt){if(sn==X)continue e;break e}}ke[ce++]=Ce}return ke}We.prototype=Ni(zo.prototype),We.prototype.constructor=We;function ti(r){var s=-1,u=r==null?0:r.length;for(this.clear();++s<u;){var h=r[s];this.set(h[0],h[1])}}function Ay(){this.__data__=Ss?Ss(null):{},this.size=0}function Ry(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Iy(r){var s=this.__data__;if(Ss){var u=s[r];return u===d?n:u}return Xe.call(s,r)?s[r]:n}function Oy(r){var s=this.__data__;return Ss?s[r]!==n:Xe.call(s,r)}function Ly(r,s){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=Ss&&s===n?d:s,this}ti.prototype.clear=Ay,ti.prototype.delete=Ry,ti.prototype.get=Iy,ti.prototype.has=Oy,ti.prototype.set=Ly;function or(r){var s=-1,u=r==null?0:r.length;for(this.clear();++s<u;){var h=r[s];this.set(h[0],h[1])}}function Py(){this.__data__=[],this.size=0}function My(r){var s=this.__data__,u=Ho(s,r);if(u<0)return!1;var h=s.length-1;return u==h?s.pop():Bo.call(s,u,1),--this.size,!0}function By(r){var s=this.__data__,u=Ho(s,r);return u<0?n:s[u][1]}function jy(r){return Ho(this.__data__,r)>-1}function Ny(r,s){var u=this.__data__,h=Ho(u,r);return h<0?(++this.size,u.push([r,s])):u[h][1]=s,this}or.prototype.clear=Py,or.prototype.delete=My,or.prototype.get=By,or.prototype.has=jy,or.prototype.set=Ny;function ar(r){var s=-1,u=r==null?0:r.length;for(this.clear();++s<u;){var h=r[s];this.set(h[0],h[1])}}function Dy(){this.size=0,this.__data__={hash:new ti,map:new(ks||or),string:new ti}}function Uy(r){var s=ta(this,r).delete(r);return this.size-=s?1:0,s}function Fy(r){return ta(this,r).get(r)}function zy(r){return ta(this,r).has(r)}function Hy(r,s){var u=ta(this,r),h=u.size;return u.set(r,s),this.size+=u.size==h?0:1,this}ar.prototype.clear=Dy,ar.prototype.delete=Uy,ar.prototype.get=Fy,ar.prototype.has=zy,ar.prototype.set=Hy;function ni(r){var s=-1,u=r==null?0:r.length;for(this.__data__=new ar;++s<u;)this.add(r[s])}function Wy(r){return this.__data__.set(r,d),this}function qy(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=Wy,ni.prototype.has=qy;function Rn(r){var s=this.__data__=new or(r);this.size=s.size}function Zy(){this.__data__=new or,this.size=0}function Ky(r){var s=this.__data__,u=s.delete(r);return this.size=s.size,u}function Vy(r){return this.__data__.get(r)}function Gy(r){return this.__data__.has(r)}function Qy(r,s){var u=this.__data__;if(u instanceof or){var h=u.__data__;if(!ks||h.length<o-1)return h.push([r,s]),this.size=++u.size,this;u=this.__data__=new ar(h)}return u.set(r,s),this.size=u.size,this}Rn.prototype.clear=Zy,Rn.prototype.delete=Ky,Rn.prototype.get=Vy,Rn.prototype.has=Gy,Rn.prototype.set=Qy;function Zf(r,s){var u=Oe(r),h=!u&&ai(r),v=!u&&!h&&Lr(r),_=!u&&!h&&!v&&zi(r),T=u||h||v||_,R=T?Ql(r.length,oy):[],L=R.length;for(var H in r)(s||Xe.call(r,H))&&!(T&&(H=="length"||v&&(H=="offset"||H=="parent")||_&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||dr(H,L)))&&R.push(H);return R}function Kf(r){var s=r.length;return s?r[hc(0,s-1)]:n}function Yy(r,s){return na(Zt(r),ri(s,0,r.length))}function Jy(r){return na(Zt(r))}function rc(r,s,u){(u!==n&&!In(r[s],u)||u===n&&!(s in r))&&lr(r,s,u)}function As(r,s,u){var h=r[s];(!(Xe.call(r,s)&&In(h,u))||u===n&&!(s in r))&&lr(r,s,u)}function Ho(r,s){for(var u=r.length;u--;)if(In(r[u][0],s))return u;return-1}function Xy(r,s,u,h){return Ar(r,function(v,_,T){s(h,v,u(v),T)}),h}function Vf(r,s){return r&&zn(s,$t(s),r)}function eb(r,s){return r&&zn(s,Vt(s),r)}function lr(r,s,u){s=="__proto__"&&jo?jo(r,s,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[s]=u}function ic(r,s){for(var u=-1,h=s.length,v=U(h),_=r==null;++u<h;)v[u]=_?n:Nc(r,s[u]);return v}function ri(r,s,u){return r===r&&(u!==n&&(r=r<=u?r:u),s!==n&&(r=r>=s?r:s)),r}function vn(r,s,u,h,v,_){var T,R=s&g,L=s&m,H=s&w;if(u&&(T=v?u(r,h,v,_):u(r)),T!==n)return T;if(!ut(r))return r;var W=Oe(r);if(W){if(T=zb(r),!R)return Zt(r,T)}else{var Q=Pt(r),ce=Q==Ke||Q==J;if(Lr(r))return yh(r,R);if(Q==Ct||Q==G||ce&&!v){if(T=L||ce?{}:jh(r),!R)return L?Ib(r,eb(T,r)):Rb(r,Vf(T,r))}else{if(!nt[Q])return v?r:{};T=Hb(r,Q,R)}}_||(_=new Rn);var ve=_.get(r);if(ve)return ve;_.set(r,T),fp(r)?r.forEach(function(Ce){T.add(vn(Ce,s,u,Ce,r,_))}):up(r)&&r.forEach(function(Ce,Fe){T.set(Fe,vn(Ce,s,u,Fe,r,_))});var ke=H?L?Ec:$c:L?Vt:$t,Be=W?n:ke(r);return hn(Be||r,function(Ce,Fe){Be&&(Fe=Ce,Ce=r[Fe]),As(T,Fe,vn(Ce,s,u,Fe,r,_))}),T}function tb(r){var s=$t(r);return function(u){return Gf(u,r,s)}}function Gf(r,s,u){var h=u.length;if(r==null)return!h;for(r=tt(r);h--;){var v=u[h],_=s[v],T=r[v];if(T===n&&!(v in r)||!_(T))return!1}return!0}function Qf(r,s,u){if(typeof r!="function")throw new pn(l);return Bs(function(){r.apply(n,u)},s)}function Rs(r,s,u,h){var v=-1,_=Co,T=!0,R=r.length,L=[],H=s.length;if(!R)return L;u&&(s=lt(s,tn(u))),h?(_=Wl,T=!1):s.length>=o&&(_=$s,T=!1,s=new ni(s));e:for(;++v<R;){var W=r[v],Q=u==null?W:u(W);if(W=h||W!==0?W:0,T&&Q===Q){for(var ce=H;ce--;)if(s[ce]===Q)continue e;L.push(W)}else _(s,Q,h)||L.push(W)}return L}var Ar=$h(Fn),Yf=$h(oc,!0);function nb(r,s){var u=!0;return Ar(r,function(h,v,_){return u=!!s(h,v,_),u}),u}function Wo(r,s,u){for(var h=-1,v=r.length;++h<v;){var _=r[h],T=s(_);if(T!=null&&(R===n?T===T&&!rn(T):u(T,R)))var R=T,L=_}return L}function rb(r,s,u,h){var v=r.length;for(u=Pe(u),u<0&&(u=-u>v?0:v+u),h=h===n||h>v?v:Pe(h),h<0&&(h+=v),h=u>h?0:pp(h);u<h;)r[u++]=s;return r}function Jf(r,s){var u=[];return Ar(r,function(h,v,_){s(h,v,_)&&u.push(h)}),u}function At(r,s,u,h,v){var _=-1,T=r.length;for(u||(u=qb),v||(v=[]);++_<T;){var R=r[_];s>0&&u(R)?s>1?At(R,s-1,u,h,v):Cr(v,R):h||(v[v.length]=R)}return v}var sc=Eh(),Xf=Eh(!0);function Fn(r,s){return r&&sc(r,s,$t)}function oc(r,s){return r&&Xf(r,s,$t)}function qo(r,s){return kr(s,function(u){return fr(r[u])})}function ii(r,s){s=Ir(s,r);for(var u=0,h=s.length;r!=null&&u<h;)r=r[Hn(s[u++])];return u&&u==h?r:n}function eh(r,s,u){var h=s(r);return Oe(r)?h:Cr(h,u(r))}function jt(r){return r==null?r===n?Er:Jt:ei&&ei in tt(r)?Db(r):Jb(r)}function ac(r,s){return r>s}function ib(r,s){return r!=null&&Xe.call(r,s)}function sb(r,s){return r!=null&&s in tt(r)}function ob(r,s,u){return r>=Lt(s,u)&&r<wt(s,u)}function lc(r,s,u){for(var h=u?Wl:Co,v=r[0].length,_=r.length,T=_,R=U(_),L=1/0,H=[];T--;){var W=r[T];T&&s&&(W=lt(W,tn(s))),L=Lt(W.length,L),R[T]=!u&&(s||v>=120&&W.length>=120)?new ni(T&&W):n}W=r[0];var Q=-1,ce=R[0];e:for(;++Q<v&&H.length<L;){var ve=W[Q],ke=s?s(ve):ve;if(ve=u||ve!==0?ve:0,!(ce?$s(ce,ke):h(H,ke,u))){for(T=_;--T;){var Be=R[T];if(!(Be?$s(Be,ke):h(r[T],ke,u)))continue e}ce&&ce.push(ke),H.push(ve)}}return H}function ab(r,s,u,h){return Fn(r,function(v,_,T){s(h,u(v),_,T)}),h}function Is(r,s,u){s=Ir(s,r),r=Fh(r,s);var h=r==null?r:r[Hn(yn(s))];return h==null?n:en(h,r,u)}function th(r){return ft(r)&&jt(r)==G}function lb(r){return ft(r)&&jt(r)==Wt}function cb(r){return ft(r)&&jt(r)==ue}function Os(r,s,u,h,v){return r===s?!0:r==null||s==null||!ft(r)&&!ft(s)?r!==r&&s!==s:ub(r,s,u,h,Os,v)}function ub(r,s,u,h,v,_){var T=Oe(r),R=Oe(s),L=T?D:Pt(r),H=R?D:Pt(s);L=L==G?Ct:L,H=H==G?Ct:H;var W=L==Ct,Q=H==Ct,ce=L==H;if(ce&&Lr(r)){if(!Lr(s))return!1;T=!0,W=!1}if(ce&&!W)return _||(_=new Rn),T||zi(r)?Ph(r,s,u,h,v,_):jb(r,s,L,u,h,v,_);if(!(u&b)){var ve=W&&Xe.call(r,"__wrapped__"),ke=Q&&Xe.call(s,"__wrapped__");if(ve||ke){var Be=ve?r.value():r,Ce=ke?s.value():s;return _||(_=new Rn),v(Be,Ce,u,h,_)}}return ce?(_||(_=new Rn),Nb(r,s,u,h,v,_)):!1}function db(r){return ft(r)&&Pt(r)==_e}function cc(r,s,u,h){var v=u.length,_=v,T=!h;if(r==null)return!_;for(r=tt(r);v--;){var R=u[v];if(T&&R[2]?R[1]!==r[R[0]]:!(R[0]in r))return!1}for(;++v<_;){R=u[v];var L=R[0],H=r[L],W=R[1];if(T&&R[2]){if(H===n&&!(L in r))return!1}else{var Q=new Rn;if(h)var ce=h(H,W,L,r,s,Q);if(!(ce===n?Os(W,H,b|$,h,Q):ce))return!1}}return!0}function nh(r){if(!ut(r)||Kb(r))return!1;var s=fr(r)?dy:t2;return s.test(oi(r))}function fb(r){return ft(r)&&jt(r)==En}function hb(r){return ft(r)&&Pt(r)==St}function pb(r){return ft(r)&&la(r.length)&&!!ot[jt(r)]}function rh(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?Oe(r)?oh(r[0],r[1]):sh(r):kp(r)}function uc(r){if(!Ms(r))return my(r);var s=[];for(var u in tt(r))Xe.call(r,u)&&u!="constructor"&&s.push(u);return s}function gb(r){if(!ut(r))return Yb(r);var s=Ms(r),u=[];for(var h in r)h=="constructor"&&(s||!Xe.call(r,h))||u.push(h);return u}function dc(r,s){return r<s}function ih(r,s){var u=-1,h=Kt(r)?U(r.length):[];return Ar(r,function(v,_,T){h[++u]=s(v,_,T)}),h}function sh(r){var s=Cc(r);return s.length==1&&s[0][2]?Dh(s[0][0],s[0][1]):function(u){return u===r||cc(u,r,s)}}function oh(r,s){return Tc(r)&&Nh(s)?Dh(Hn(r),s):function(u){var h=Nc(u,r);return h===n&&h===s?Dc(u,r):Os(s,h,b|$)}}function Zo(r,s,u,h,v){r!==s&&sc(s,function(_,T){if(v||(v=new Rn),ut(_))vb(r,s,T,u,Zo,h,v);else{var R=h?h(Rc(r,T),_,T+"",r,s,v):n;R===n&&(R=_),rc(r,T,R)}},Vt)}function vb(r,s,u,h,v,_,T){var R=Rc(r,u),L=Rc(s,u),H=T.get(L);if(H){rc(r,u,H);return}var W=_?_(R,L,u+"",r,s,T):n,Q=W===n;if(Q){var ce=Oe(L),ve=!ce&&Lr(L),ke=!ce&&!ve&&zi(L);W=L,ce||ve||ke?Oe(R)?W=R:ht(R)?W=Zt(R):ve?(Q=!1,W=yh(L,!0)):ke?(Q=!1,W=bh(L,!0)):W=[]:js(L)||ai(L)?(W=R,ai(R)?W=gp(R):(!ut(R)||fr(R))&&(W=jh(L))):Q=!1}Q&&(T.set(L,W),v(W,L,h,_,T),T.delete(L)),rc(r,u,W)}function ah(r,s){var u=r.length;if(u)return s+=s<0?u:0,dr(s,u)?r[s]:n}function lh(r,s,u){s.length?s=lt(s,function(_){return Oe(_)?function(T){return ii(T,_.length===1?_[0]:_)}:_}):s=[Gt];var h=-1;s=lt(s,tn($e()));var v=ih(r,function(_,T,R){var L=lt(s,function(H){return H(_)});return{criteria:L,index:++h,value:_}});return H2(v,function(_,T){return Ab(_,T,u)})}function mb(r,s){return ch(r,s,function(u,h){return Dc(r,h)})}function ch(r,s,u){for(var h=-1,v=s.length,_={};++h<v;){var T=s[h],R=ii(r,T);u(R,T)&&Ls(_,Ir(T,r),R)}return _}function yb(r){return function(s){return ii(s,r)}}function fc(r,s,u,h){var v=h?z2:Ii,_=-1,T=s.length,R=r;for(r===s&&(s=Zt(s)),u&&(R=lt(r,tn(u)));++_<T;)for(var L=0,H=s[_],W=u?u(H):H;(L=v(R,W,L,h))>-1;)R!==r&&Bo.call(R,L,1),Bo.call(r,L,1);return r}function uh(r,s){for(var u=r?s.length:0,h=u-1;u--;){var v=s[u];if(u==h||v!==_){var _=v;dr(v)?Bo.call(r,v,1):vc(r,v)}}return r}function hc(r,s){return r+Do(Wf()*(s-r+1))}function bb(r,s,u,h){for(var v=-1,_=wt(No((s-r)/(u||1)),0),T=U(_);_--;)T[h?_:++v]=r,r+=u;return T}function pc(r,s){var u="";if(!r||s<1||s>le)return u;do s%2&&(u+=r),s=Do(s/2),s&&(r+=r);while(s);return u}function De(r,s){return Ic(Uh(r,s,Gt),r+"")}function _b(r){return Kf(Hi(r))}function wb(r,s){var u=Hi(r);return na(u,ri(s,0,u.length))}function Ls(r,s,u,h){if(!ut(r))return r;s=Ir(s,r);for(var v=-1,_=s.length,T=_-1,R=r;R!=null&&++v<_;){var L=Hn(s[v]),H=u;if(L==="__proto__"||L==="constructor"||L==="prototype")return r;if(v!=T){var W=R[L];H=h?h(W,L,R):n,H===n&&(H=ut(W)?W:dr(s[v+1])?[]:{})}As(R,L,H),R=R[L]}return r}var dh=Uo?function(r,s){return Uo.set(r,s),r}:Gt,xb=jo?function(r,s){return jo(r,"toString",{configurable:!0,enumerable:!1,value:Fc(s),writable:!0})}:Gt;function $b(r){return na(Hi(r))}function mn(r,s,u){var h=-1,v=r.length;s<0&&(s=-s>v?0:v+s),u=u>v?v:u,u<0&&(u+=v),v=s>u?0:u-s>>>0,s>>>=0;for(var _=U(v);++h<v;)_[h]=r[h+s];return _}function Eb(r,s){var u;return Ar(r,function(h,v,_){return u=s(h,v,_),!u}),!!u}function Ko(r,s,u){var h=0,v=r==null?h:r.length;if(typeof s=="number"&&s===s&&v<=Ve){for(;h<v;){var _=h+v>>>1,T=r[_];T!==null&&!rn(T)&&(u?T<=s:T<s)?h=_+1:v=_}return v}return gc(r,s,Gt,u)}function gc(r,s,u,h){var v=0,_=r==null?0:r.length;if(_===0)return 0;s=u(s);for(var T=s!==s,R=s===null,L=rn(s),H=s===n;v<_;){var W=Do((v+_)/2),Q=u(r[W]),ce=Q!==n,ve=Q===null,ke=Q===Q,Be=rn(Q);if(T)var Ce=h||ke;else H?Ce=ke&&(h||ce):R?Ce=ke&&ce&&(h||!ve):L?Ce=ke&&ce&&!ve&&(h||!Be):ve||Be?Ce=!1:Ce=h?Q<=s:Q<s;Ce?v=W+1:_=W}return Lt(_,xe)}function fh(r,s){for(var u=-1,h=r.length,v=0,_=[];++u<h;){var T=r[u],R=s?s(T):T;if(!u||!In(R,L)){var L=R;_[v++]=T===0?0:T}}return _}function hh(r){return typeof r=="number"?r:rn(r)?ye:+r}function nn(r){if(typeof r=="string")return r;if(Oe(r))return lt(r,nn)+"";if(rn(r))return qf?qf.call(r):"";var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function Rr(r,s,u){var h=-1,v=Co,_=r.length,T=!0,R=[],L=R;if(u)T=!1,v=Wl;else if(_>=o){var H=s?null:Mb(r);if(H)return To(H);T=!1,v=$s,L=new ni}else L=s?[]:R;e:for(;++h<_;){var W=r[h],Q=s?s(W):W;if(W=u||W!==0?W:0,T&&Q===Q){for(var ce=L.length;ce--;)if(L[ce]===Q)continue e;s&&L.push(Q),R.push(W)}else v(L,Q,u)||(L!==R&&L.push(Q),R.push(W))}return R}function vc(r,s){return s=Ir(s,r),r=Fh(r,s),r==null||delete r[Hn(yn(s))]}function ph(r,s,u,h){return Ls(r,s,u(ii(r,s)),h)}function Vo(r,s,u,h){for(var v=r.length,_=h?v:-1;(h?_--:++_<v)&&s(r[_],_,r););return u?mn(r,h?0:_,h?_+1:v):mn(r,h?_+1:0,h?v:_)}function gh(r,s){var u=r;return u instanceof We&&(u=u.value()),ql(s,function(h,v){return v.func.apply(v.thisArg,Cr([h],v.args))},u)}function mc(r,s,u){var h=r.length;if(h<2)return h?Rr(r[0]):[];for(var v=-1,_=U(h);++v<h;)for(var T=r[v],R=-1;++R<h;)R!=v&&(_[v]=Rs(_[v]||T,r[R],s,u));return Rr(At(_,1),s,u)}function vh(r,s,u){for(var h=-1,v=r.length,_=s.length,T={};++h<v;){var R=h<_?s[h]:n;u(T,r[h],R)}return T}function yc(r){return ht(r)?r:[]}function bc(r){return typeof r=="function"?r:Gt}function Ir(r,s){return Oe(r)?r:Tc(r,s)?[r]:qh(Je(r))}var kb=De;function Or(r,s,u){var h=r.length;return u=u===n?h:u,!s&&u>=h?r:mn(r,s,u)}var mh=fy||function(r){return Tt.clearTimeout(r)};function yh(r,s){if(s)return r.slice();var u=r.length,h=Df?Df(u):new r.constructor(u);return r.copy(h),h}function _c(r){var s=new r.constructor(r.byteLength);return new Po(s).set(new Po(r)),s}function Cb(r,s){var u=s?_c(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function Sb(r){var s=new r.constructor(r.source,ef.exec(r));return s.lastIndex=r.lastIndex,s}function Tb(r){return Ts?tt(Ts.call(r)):{}}function bh(r,s){var u=s?_c(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function _h(r,s){if(r!==s){var u=r!==n,h=r===null,v=r===r,_=rn(r),T=s!==n,R=s===null,L=s===s,H=rn(s);if(!R&&!H&&!_&&r>s||_&&T&&L&&!R&&!H||h&&T&&L||!u&&L||!v)return 1;if(!h&&!_&&!H&&r<s||H&&u&&v&&!h&&!_||R&&u&&v||!T&&v||!L)return-1}return 0}function Ab(r,s,u){for(var h=-1,v=r.criteria,_=s.criteria,T=v.length,R=u.length;++h<T;){var L=_h(v[h],_[h]);if(L){if(h>=R)return L;var H=u[h];return L*(H=="desc"?-1:1)}}return r.index-s.index}function wh(r,s,u,h){for(var v=-1,_=r.length,T=u.length,R=-1,L=s.length,H=wt(_-T,0),W=U(L+H),Q=!h;++R<L;)W[R]=s[R];for(;++v<T;)(Q||v<_)&&(W[u[v]]=r[v]);for(;H--;)W[R++]=r[v++];return W}function xh(r,s,u,h){for(var v=-1,_=r.length,T=-1,R=u.length,L=-1,H=s.length,W=wt(_-R,0),Q=U(W+H),ce=!h;++v<W;)Q[v]=r[v];for(var ve=v;++L<H;)Q[ve+L]=s[L];for(;++T<R;)(ce||v<_)&&(Q[ve+u[T]]=r[v++]);return Q}function Zt(r,s){var u=-1,h=r.length;for(s||(s=U(h));++u<h;)s[u]=r[u];return s}function zn(r,s,u,h){var v=!u;u||(u={});for(var _=-1,T=s.length;++_<T;){var R=s[_],L=h?h(u[R],r[R],R,u,r):n;L===n&&(L=r[R]),v?lr(u,R,L):As(u,R,L)}return u}function Rb(r,s){return zn(r,Sc(r),s)}function Ib(r,s){return zn(r,Mh(r),s)}function Go(r,s){return function(u,h){var v=Oe(u)?B2:Xy,_=s?s():{};return v(u,r,$e(h,2),_)}}function Di(r){return De(function(s,u){var h=-1,v=u.length,_=v>1?u[v-1]:n,T=v>2?u[2]:n;for(_=r.length>3&&typeof _=="function"?(v--,_):n,T&&Nt(u[0],u[1],T)&&(_=v<3?n:_,v=1),s=tt(s);++h<v;){var R=u[h];R&&r(s,R,h,_)}return s})}function $h(r,s){return function(u,h){if(u==null)return u;if(!Kt(u))return r(u,h);for(var v=u.length,_=s?v:-1,T=tt(u);(s?_--:++_<v)&&h(T[_],_,T)!==!1;);return u}}function Eh(r){return function(s,u,h){for(var v=-1,_=tt(s),T=h(s),R=T.length;R--;){var L=T[r?R:++v];if(u(_[L],L,_)===!1)break}return s}}function Ob(r,s,u){var h=s&x,v=Ps(r);function _(){var T=this&&this!==Tt&&this instanceof _?v:r;return T.apply(h?u:this,arguments)}return _}function kh(r){return function(s){s=Je(s);var u=Oi(s)?An(s):n,h=u?u[0]:s.charAt(0),v=u?Or(u,1).join(""):s.slice(1);return h[r]()+v}}function Ui(r){return function(s){return ql($p(xp(s).replace(x2,"")),r,"")}}function Ps(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var u=Ni(r.prototype),h=r.apply(u,s);return ut(h)?h:u}}function Lb(r,s,u){var h=Ps(r);function v(){for(var _=arguments.length,T=U(_),R=_,L=Fi(v);R--;)T[R]=arguments[R];var H=_<3&&T[0]!==L&&T[_-1]!==L?[]:Sr(T,L);if(_-=H.length,_<u)return Rh(r,s,Qo,v.placeholder,n,T,H,n,n,u-_);var W=this&&this!==Tt&&this instanceof v?h:r;return en(W,this,T)}return v}function Ch(r){return function(s,u,h){var v=tt(s);if(!Kt(s)){var _=$e(u,3);s=$t(s),u=function(R){return _(v[R],R,v)}}var T=r(s,u,h);return T>-1?v[_?s[T]:T]:n}}function Sh(r){return ur(function(s){var u=s.length,h=u,v=gn.prototype.thru;for(r&&s.reverse();h--;){var _=s[h];if(typeof _!="function")throw new pn(l);if(v&&!T&&ea(_)=="wrapper")var T=new gn([],!0)}for(h=T?h:u;++h<u;){_=s[h];var R=ea(_),L=R=="wrapper"?kc(_):n;L&&Ac(L[0])&&L[1]==(F|E|M|N)&&!L[4].length&&L[9]==1?T=T[ea(L[0])].apply(T,L[3]):T=_.length==1&&Ac(_)?T[R]():T.thru(_)}return function(){var H=arguments,W=H[0];if(T&&H.length==1&&Oe(W))return T.plant(W).value();for(var Q=0,ce=u?s[Q].apply(this,H):W;++Q<u;)ce=s[Q].call(this,ce);return ce}})}function Qo(r,s,u,h,v,_,T,R,L,H){var W=s&F,Q=s&x,ce=s&C,ve=s&(E|P),ke=s&K,Be=ce?n:Ps(r);function Ce(){for(var Fe=arguments.length,qe=U(Fe),sn=Fe;sn--;)qe[sn]=arguments[sn];if(ve)var Dt=Fi(Ce),on=q2(qe,Dt);if(h&&(qe=wh(qe,h,v,ve)),_&&(qe=xh(qe,_,T,ve)),Fe-=on,ve&&Fe<H){var pt=Sr(qe,Dt);return Rh(r,s,Qo,Ce.placeholder,u,qe,pt,R,L,H-Fe)}var On=Q?u:this,pr=ce?On[r]:r;return Fe=qe.length,R?qe=Xb(qe,R):ke&&Fe>1&&qe.reverse(),W&&L<Fe&&(qe.length=L),this&&this!==Tt&&this instanceof Ce&&(pr=Be||Ps(pr)),pr.apply(On,qe)}return Ce}function Th(r,s){return function(u,h){return ab(u,r,s(h),{})}}function Yo(r,s){return function(u,h){var v;if(u===n&&h===n)return s;if(u!==n&&(v=u),h!==n){if(v===n)return h;typeof u=="string"||typeof h=="string"?(u=nn(u),h=nn(h)):(u=hh(u),h=hh(h)),v=r(u,h)}return v}}function wc(r){return ur(function(s){return s=lt(s,tn($e())),De(function(u){var h=this;return r(s,function(v){return en(v,h,u)})})})}function Jo(r,s){s=s===n?" ":nn(s);var u=s.length;if(u<2)return u?pc(s,r):s;var h=pc(s,No(r/Li(s)));return Oi(s)?Or(An(h),0,r).join(""):h.slice(0,r)}function Pb(r,s,u,h){var v=s&x,_=Ps(r);function T(){for(var R=-1,L=arguments.length,H=-1,W=h.length,Q=U(W+L),ce=this&&this!==Tt&&this instanceof T?_:r;++H<W;)Q[H]=h[H];for(;L--;)Q[H++]=arguments[++R];return en(ce,v?u:this,Q)}return T}function Ah(r){return function(s,u,h){return h&&typeof h!="number"&&Nt(s,u,h)&&(u=h=n),s=hr(s),u===n?(u=s,s=0):u=hr(u),h=h===n?s<u?1:-1:hr(h),bb(s,u,h,r)}}function Xo(r){return function(s,u){return typeof s=="string"&&typeof u=="string"||(s=bn(s),u=bn(u)),r(s,u)}}function Rh(r,s,u,h,v,_,T,R,L,H){var W=s&E,Q=W?T:n,ce=W?n:T,ve=W?_:n,ke=W?n:_;s|=W?M:I,s&=~(W?I:M),s&A||(s&=~(x|C));var Be=[r,s,v,ve,Q,ke,ce,R,L,H],Ce=u.apply(n,Be);return Ac(r)&&zh(Ce,Be),Ce.placeholder=h,Hh(Ce,r,s)}function xc(r){var s=_t[r];return function(u,h){if(u=bn(u),h=h==null?0:Lt(Pe(h),292),h&&Hf(u)){var v=(Je(u)+"e").split("e"),_=s(v[0]+"e"+(+v[1]+h));return v=(Je(_)+"e").split("e"),+(v[0]+"e"+(+v[1]-h))}return s(u)}}var Mb=Bi&&1/To(new Bi([,-0]))[1]==ne?function(r){return new Bi(r)}:Wc;function Ih(r){return function(s){var u=Pt(s);return u==_e?Jl(s):u==St?J2(s):W2(s,r(s))}}function cr(r,s,u,h,v,_,T,R){var L=s&C;if(!L&&typeof r!="function")throw new pn(l);var H=h?h.length:0;if(H||(s&=~(M|I),h=v=n),T=T===n?T:wt(Pe(T),0),R=R===n?R:Pe(R),H-=v?v.length:0,s&I){var W=h,Q=v;h=v=n}var ce=L?n:kc(r),ve=[r,s,u,h,v,W,Q,_,T,R];if(ce&&Qb(ve,ce),r=ve[0],s=ve[1],u=ve[2],h=ve[3],v=ve[4],R=ve[9]=ve[9]===n?L?0:r.length:wt(ve[9]-H,0),!R&&s&(E|P)&&(s&=~(E|P)),!s||s==x)var ke=Ob(r,s,u);else s==E||s==P?ke=Lb(r,s,R):(s==M||s==(x|M))&&!v.length?ke=Pb(r,s,u,h):ke=Qo.apply(n,ve);var Be=ce?dh:zh;return Hh(Be(ke,ve),r,s)}function Oh(r,s,u,h){return r===n||In(r,Mi[u])&&!Xe.call(h,u)?s:r}function Lh(r,s,u,h,v,_){return ut(r)&&ut(s)&&(_.set(s,r),Zo(r,s,n,Lh,_),_.delete(s)),r}function Bb(r){return js(r)?n:r}function Ph(r,s,u,h,v,_){var T=u&b,R=r.length,L=s.length;if(R!=L&&!(T&&L>R))return!1;var H=_.get(r),W=_.get(s);if(H&&W)return H==s&&W==r;var Q=-1,ce=!0,ve=u&$?new ni:n;for(_.set(r,s),_.set(s,r);++Q<R;){var ke=r[Q],Be=s[Q];if(h)var Ce=T?h(Be,ke,Q,s,r,_):h(ke,Be,Q,r,s,_);if(Ce!==n){if(Ce)continue;ce=!1;break}if(ve){if(!Zl(s,function(Fe,qe){if(!$s(ve,qe)&&(ke===Fe||v(ke,Fe,u,h,_)))return ve.push(qe)})){ce=!1;break}}else if(!(ke===Be||v(ke,Be,u,h,_))){ce=!1;break}}return _.delete(r),_.delete(s),ce}function jb(r,s,u,h,v,_,T){switch(u){case qt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Wt:return!(r.byteLength!=s.byteLength||!_(new Po(r),new Po(s)));case te:case ue:case et:return In(+r,+s);case He:return r.name==s.name&&r.message==s.message;case En:case Xt:return r==s+"";case _e:var R=Jl;case St:var L=h&b;if(R||(R=To),r.size!=s.size&&!L)return!1;var H=T.get(r);if(H)return H==s;h|=$,T.set(r,s);var W=Ph(R(r),R(s),h,v,_,T);return T.delete(r),W;case Un:if(Ts)return Ts.call(r)==Ts.call(s)}return!1}function Nb(r,s,u,h,v,_){var T=u&b,R=$c(r),L=R.length,H=$c(s),W=H.length;if(L!=W&&!T)return!1;for(var Q=L;Q--;){var ce=R[Q];if(!(T?ce in s:Xe.call(s,ce)))return!1}var ve=_.get(r),ke=_.get(s);if(ve&&ke)return ve==s&&ke==r;var Be=!0;_.set(r,s),_.set(s,r);for(var Ce=T;++Q<L;){ce=R[Q];var Fe=r[ce],qe=s[ce];if(h)var sn=T?h(qe,Fe,ce,s,r,_):h(Fe,qe,ce,r,s,_);if(!(sn===n?Fe===qe||v(Fe,qe,u,h,_):sn)){Be=!1;break}Ce||(Ce=ce=="constructor")}if(Be&&!Ce){var Dt=r.constructor,on=s.constructor;Dt!=on&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof on=="function"&&on instanceof on)&&(Be=!1)}return _.delete(r),_.delete(s),Be}function ur(r){return Ic(Uh(r,n,Gh),r+"")}function $c(r){return eh(r,$t,Sc)}function Ec(r){return eh(r,Vt,Mh)}var kc=Uo?function(r){return Uo.get(r)}:Wc;function ea(r){for(var s=r.name+"",u=ji[s],h=Xe.call(ji,s)?u.length:0;h--;){var v=u[h],_=v.func;if(_==null||_==r)return v.name}return s}function Fi(r){var s=Xe.call(y,"placeholder")?y:r;return s.placeholder}function $e(){var r=y.iteratee||zc;return r=r===zc?rh:r,arguments.length?r(arguments[0],arguments[1]):r}function ta(r,s){var u=r.__data__;return Zb(s)?u[typeof s=="string"?"string":"hash"]:u.map}function Cc(r){for(var s=$t(r),u=s.length;u--;){var h=s[u],v=r[h];s[u]=[h,v,Nh(v)]}return s}function si(r,s){var u=G2(r,s);return nh(u)?u:n}function Db(r){var s=Xe.call(r,ei),u=r[ei];try{r[ei]=n;var h=!0}catch{}var v=Oo.call(r);return h&&(s?r[ei]=u:delete r[ei]),v}var Sc=ec?function(r){return r==null?[]:(r=tt(r),kr(ec(r),function(s){return Ff.call(r,s)}))}:qc,Mh=ec?function(r){for(var s=[];r;)Cr(s,Sc(r)),r=Mo(r);return s}:qc,Pt=jt;(tc&&Pt(new tc(new ArrayBuffer(1)))!=qt||ks&&Pt(new ks)!=_e||nc&&Pt(nc.resolve())!=Ht||Bi&&Pt(new Bi)!=St||Cs&&Pt(new Cs)!=kn)&&(Pt=function(r){var s=jt(r),u=s==Ct?r.constructor:n,h=u?oi(u):"";if(h)switch(h){case wy:return qt;case xy:return _e;case $y:return Ht;case Ey:return St;case ky:return kn}return s});function Ub(r,s,u){for(var h=-1,v=u.length;++h<v;){var _=u[h],T=_.size;switch(_.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Lt(s,r+T);break;case"takeRight":r=wt(r,s-T);break}}return{start:r,end:s}}function Fb(r){var s=r.match(Km);return s?s[1].split(Vm):[]}function Bh(r,s,u){s=Ir(s,r);for(var h=-1,v=s.length,_=!1;++h<v;){var T=Hn(s[h]);if(!(_=r!=null&&u(r,T)))break;r=r[T]}return _||++h!=v?_:(v=r==null?0:r.length,!!v&&la(v)&&dr(T,v)&&(Oe(r)||ai(r)))}function zb(r){var s=r.length,u=new r.constructor(s);return s&&typeof r[0]=="string"&&Xe.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function jh(r){return typeof r.constructor=="function"&&!Ms(r)?Ni(Mo(r)):{}}function Hb(r,s,u){var h=r.constructor;switch(s){case Wt:return _c(r);case te:case ue:return new h(+r);case qt:return Cb(r,u);case Cn:case Sn:case un:case dn:case Tn:case rr:case ir:case sr:case Ai:return bh(r,u);case _e:return new h;case et:case Xt:return new h(r);case En:return Sb(r);case St:return new h;case Un:return Tb(r)}}function Wb(r,s){var u=s.length;if(!u)return r;var h=u-1;return s[h]=(u>1?"& ":"")+s[h],s=s.join(u>2?", ":" "),r.replace(Zm,`{
/* [wrapped with `+s+`] */
`)}function qb(r){return Oe(r)||ai(r)||!!(zf&&r&&r[zf])}function dr(r,s){var u=typeof r;return s=s??le,!!s&&(u=="number"||u!="symbol"&&r2.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,u){if(!ut(u))return!1;var h=typeof s;return(h=="number"?Kt(u)&&dr(s,u.length):h=="string"&&s in u)?In(u[s],r):!1}function Tc(r,s){if(Oe(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||rn(r)?!0:zm.test(r)||!Fm.test(r)||s!=null&&r in tt(s)}function Zb(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Ac(r){var s=ea(r),u=y[s];if(typeof u!="function"||!(s in We.prototype))return!1;if(r===u)return!0;var h=kc(u);return!!h&&r===h[0]}function Kb(r){return!!Nf&&Nf in r}var Vb=Ro?fr:Zc;function Ms(r){var s=r&&r.constructor,u=typeof s=="function"&&s.prototype||Mi;return r===u}function Nh(r){return r===r&&!ut(r)}function Dh(r,s){return function(u){return u==null?!1:u[r]===s&&(s!==n||r in tt(u))}}function Gb(r){var s=oa(r,function(h){return u.size===f&&u.clear(),h}),u=s.cache;return s}function Qb(r,s){var u=r[1],h=s[1],v=u|h,_=v<(x|C|F),T=h==F&&u==E||h==F&&u==N&&r[7].length<=s[8]||h==(F|N)&&s[7].length<=s[8]&&u==E;if(!(_||T))return r;h&x&&(r[2]=s[2],v|=u&x?0:A);var R=s[3];if(R){var L=r[3];r[3]=L?wh(L,R,s[4]):R,r[4]=L?Sr(r[3],p):s[4]}return R=s[5],R&&(L=r[5],r[5]=L?xh(L,R,s[6]):R,r[6]=L?Sr(r[5],p):s[6]),R=s[7],R&&(r[7]=R),h&F&&(r[8]=r[8]==null?s[8]:Lt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=v,r}function Yb(r){var s=[];if(r!=null)for(var u in tt(r))s.push(u);return s}function Jb(r){return Oo.call(r)}function Uh(r,s,u){return s=wt(s===n?r.length-1:s,0),function(){for(var h=arguments,v=-1,_=wt(h.length-s,0),T=U(_);++v<_;)T[v]=h[s+v];v=-1;for(var R=U(s+1);++v<s;)R[v]=h[v];return R[s]=u(T),en(r,this,R)}}function Fh(r,s){return s.length<2?r:ii(r,mn(s,0,-1))}function Xb(r,s){for(var u=r.length,h=Lt(s.length,u),v=Zt(r);h--;){var _=s[h];r[h]=dr(_,u)?v[_]:n}return r}function Rc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var zh=Wh(dh),Bs=py||function(r,s){return Tt.setTimeout(r,s)},Ic=Wh(xb);function Hh(r,s,u){var h=s+"";return Ic(r,Wb(h,e_(Fb(h),u)))}function Wh(r){var s=0,u=0;return function(){var h=yy(),v=ae-(h-u);if(u=h,v>0){if(++s>=se)return arguments[0]}else s=0;return r.apply(n,arguments)}}function na(r,s){var u=-1,h=r.length,v=h-1;for(s=s===n?h:s;++u<s;){var _=hc(u,v),T=r[_];r[_]=r[u],r[u]=T}return r.length=s,r}var qh=Gb(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Hm,function(u,h,v,_){s.push(v?_.replace(Ym,"$1"):h||u)}),s});function Hn(r){if(typeof r=="string"||rn(r))return r;var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function oi(r){if(r!=null){try{return Io.call(r)}catch{}try{return r+""}catch{}}return""}function e_(r,s){return hn(de,function(u){var h="_."+u[0];s&u[1]&&!Co(r,h)&&r.push(h)}),r.sort()}function Zh(r){if(r instanceof We)return r.clone();var s=new gn(r.__wrapped__,r.__chain__);return s.__actions__=Zt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function t_(r,s,u){(u?Nt(r,s,u):s===n)?s=1:s=wt(Pe(s),0);var h=r==null?0:r.length;if(!h||s<1)return[];for(var v=0,_=0,T=U(No(h/s));v<h;)T[_++]=mn(r,v,v+=s);return T}function n_(r){for(var s=-1,u=r==null?0:r.length,h=0,v=[];++s<u;){var _=r[s];_&&(v[h++]=_)}return v}function r_(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),u=arguments[0],h=r;h--;)s[h-1]=arguments[h];return Cr(Oe(u)?Zt(u):[u],At(s,1))}var i_=De(function(r,s){return ht(r)?Rs(r,At(s,1,ht,!0)):[]}),s_=De(function(r,s){var u=yn(s);return ht(u)&&(u=n),ht(r)?Rs(r,At(s,1,ht,!0),$e(u,2)):[]}),o_=De(function(r,s){var u=yn(s);return ht(u)&&(u=n),ht(r)?Rs(r,At(s,1,ht,!0),n,u):[]});function a_(r,s,u){var h=r==null?0:r.length;return h?(s=u||s===n?1:Pe(s),mn(r,s<0?0:s,h)):[]}function l_(r,s,u){var h=r==null?0:r.length;return h?(s=u||s===n?1:Pe(s),s=h-s,mn(r,0,s<0?0:s)):[]}function c_(r,s){return r&&r.length?Vo(r,$e(s,3),!0,!0):[]}function u_(r,s){return r&&r.length?Vo(r,$e(s,3),!0):[]}function d_(r,s,u,h){var v=r==null?0:r.length;return v?(u&&typeof u!="number"&&Nt(r,s,u)&&(u=0,h=v),rb(r,s,u,h)):[]}function Kh(r,s,u){var h=r==null?0:r.length;if(!h)return-1;var v=u==null?0:Pe(u);return v<0&&(v=wt(h+v,0)),So(r,$e(s,3),v)}function Vh(r,s,u){var h=r==null?0:r.length;if(!h)return-1;var v=h-1;return u!==n&&(v=Pe(u),v=u<0?wt(h+v,0):Lt(v,h-1)),So(r,$e(s,3),v,!0)}function Gh(r){var s=r==null?0:r.length;return s?At(r,1):[]}function f_(r){var s=r==null?0:r.length;return s?At(r,ne):[]}function h_(r,s){var u=r==null?0:r.length;return u?(s=s===n?1:Pe(s),At(r,s)):[]}function p_(r){for(var s=-1,u=r==null?0:r.length,h={};++s<u;){var v=r[s];h[v[0]]=v[1]}return h}function Qh(r){return r&&r.length?r[0]:n}function g_(r,s,u){var h=r==null?0:r.length;if(!h)return-1;var v=u==null?0:Pe(u);return v<0&&(v=wt(h+v,0)),Ii(r,s,v)}function v_(r){var s=r==null?0:r.length;return s?mn(r,0,-1):[]}var m_=De(function(r){var s=lt(r,yc);return s.length&&s[0]===r[0]?lc(s):[]}),y_=De(function(r){var s=yn(r),u=lt(r,yc);return s===yn(u)?s=n:u.pop(),u.length&&u[0]===r[0]?lc(u,$e(s,2)):[]}),b_=De(function(r){var s=yn(r),u=lt(r,yc);return s=typeof s=="function"?s:n,s&&u.pop(),u.length&&u[0]===r[0]?lc(u,n,s):[]});function __(r,s){return r==null?"":vy.call(r,s)}function yn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function w_(r,s,u){var h=r==null?0:r.length;if(!h)return-1;var v=h;return u!==n&&(v=Pe(u),v=v<0?wt(h+v,0):Lt(v,h-1)),s===s?ey(r,s,v):So(r,Rf,v,!0)}function x_(r,s){return r&&r.length?ah(r,Pe(s)):n}var $_=De(Yh);function Yh(r,s){return r&&r.length&&s&&s.length?fc(r,s):r}function E_(r,s,u){return r&&r.length&&s&&s.length?fc(r,s,$e(u,2)):r}function k_(r,s,u){return r&&r.length&&s&&s.length?fc(r,s,n,u):r}var C_=ur(function(r,s){var u=r==null?0:r.length,h=ic(r,s);return uh(r,lt(s,function(v){return dr(v,u)?+v:v}).sort(_h)),h});function S_(r,s){var u=[];if(!(r&&r.length))return u;var h=-1,v=[],_=r.length;for(s=$e(s,3);++h<_;){var T=r[h];s(T,h,r)&&(u.push(T),v.push(h))}return uh(r,v),u}function Oc(r){return r==null?r:_y.call(r)}function T_(r,s,u){var h=r==null?0:r.length;return h?(u&&typeof u!="number"&&Nt(r,s,u)?(s=0,u=h):(s=s==null?0:Pe(s),u=u===n?h:Pe(u)),mn(r,s,u)):[]}function A_(r,s){return Ko(r,s)}function R_(r,s,u){return gc(r,s,$e(u,2))}function I_(r,s){var u=r==null?0:r.length;if(u){var h=Ko(r,s);if(h<u&&In(r[h],s))return h}return-1}function O_(r,s){return Ko(r,s,!0)}function L_(r,s,u){return gc(r,s,$e(u,2),!0)}function P_(r,s){var u=r==null?0:r.length;if(u){var h=Ko(r,s,!0)-1;if(In(r[h],s))return h}return-1}function M_(r){return r&&r.length?fh(r):[]}function B_(r,s){return r&&r.length?fh(r,$e(s,2)):[]}function j_(r){var s=r==null?0:r.length;return s?mn(r,1,s):[]}function N_(r,s,u){return r&&r.length?(s=u||s===n?1:Pe(s),mn(r,0,s<0?0:s)):[]}function D_(r,s,u){var h=r==null?0:r.length;return h?(s=u||s===n?1:Pe(s),s=h-s,mn(r,s<0?0:s,h)):[]}function U_(r,s){return r&&r.length?Vo(r,$e(s,3),!1,!0):[]}function F_(r,s){return r&&r.length?Vo(r,$e(s,3)):[]}var z_=De(function(r){return Rr(At(r,1,ht,!0))}),H_=De(function(r){var s=yn(r);return ht(s)&&(s=n),Rr(At(r,1,ht,!0),$e(s,2))}),W_=De(function(r){var s=yn(r);return s=typeof s=="function"?s:n,Rr(At(r,1,ht,!0),n,s)});function q_(r){return r&&r.length?Rr(r):[]}function Z_(r,s){return r&&r.length?Rr(r,$e(s,2)):[]}function K_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Rr(r,n,s):[]}function Lc(r){if(!(r&&r.length))return[];var s=0;return r=kr(r,function(u){if(ht(u))return s=wt(u.length,s),!0}),Ql(s,function(u){return lt(r,Kl(u))})}function Jh(r,s){if(!(r&&r.length))return[];var u=Lc(r);return s==null?u:lt(u,function(h){return en(s,n,h)})}var V_=De(function(r,s){return ht(r)?Rs(r,s):[]}),G_=De(function(r){return mc(kr(r,ht))}),Q_=De(function(r){var s=yn(r);return ht(s)&&(s=n),mc(kr(r,ht),$e(s,2))}),Y_=De(function(r){var s=yn(r);return s=typeof s=="function"?s:n,mc(kr(r,ht),n,s)}),J_=De(Lc);function X_(r,s){return vh(r||[],s||[],As)}function ew(r,s){return vh(r||[],s||[],Ls)}var tw=De(function(r){var s=r.length,u=s>1?r[s-1]:n;return u=typeof u=="function"?(r.pop(),u):n,Jh(r,u)});function Xh(r){var s=y(r);return s.__chain__=!0,s}function nw(r,s){return s(r),r}function ra(r,s){return s(r)}var rw=ur(function(r){var s=r.length,u=s?r[0]:0,h=this.__wrapped__,v=function(_){return ic(_,r)};return s>1||this.__actions__.length||!(h instanceof We)||!dr(u)?this.thru(v):(h=h.slice(u,+u+(s?1:0)),h.__actions__.push({func:ra,args:[v],thisArg:n}),new gn(h,this.__chain__).thru(function(_){return s&&!_.length&&_.push(n),_}))});function iw(){return Xh(this)}function sw(){return new gn(this.value(),this.__chain__)}function ow(){this.__values__===n&&(this.__values__=hp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function aw(){return this}function lw(r){for(var s,u=this;u instanceof zo;){var h=Zh(u);h.__index__=0,h.__values__=n,s?v.__wrapped__=h:s=h;var v=h;u=u.__wrapped__}return v.__wrapped__=r,s}function cw(){var r=this.__wrapped__;if(r instanceof We){var s=r;return this.__actions__.length&&(s=new We(this)),s=s.reverse(),s.__actions__.push({func:ra,args:[Oc],thisArg:n}),new gn(s,this.__chain__)}return this.thru(Oc)}function uw(){return gh(this.__wrapped__,this.__actions__)}var dw=Go(function(r,s,u){Xe.call(r,u)?++r[u]:lr(r,u,1)});function fw(r,s,u){var h=Oe(r)?Tf:nb;return u&&Nt(r,s,u)&&(s=n),h(r,$e(s,3))}function hw(r,s){var u=Oe(r)?kr:Jf;return u(r,$e(s,3))}var pw=Ch(Kh),gw=Ch(Vh);function vw(r,s){return At(ia(r,s),1)}function mw(r,s){return At(ia(r,s),ne)}function yw(r,s,u){return u=u===n?1:Pe(u),At(ia(r,s),u)}function ep(r,s){var u=Oe(r)?hn:Ar;return u(r,$e(s,3))}function tp(r,s){var u=Oe(r)?j2:Yf;return u(r,$e(s,3))}var bw=Go(function(r,s,u){Xe.call(r,u)?r[u].push(s):lr(r,u,[s])});function _w(r,s,u,h){r=Kt(r)?r:Hi(r),u=u&&!h?Pe(u):0;var v=r.length;return u<0&&(u=wt(v+u,0)),ca(r)?u<=v&&r.indexOf(s,u)>-1:!!v&&Ii(r,s,u)>-1}var ww=De(function(r,s,u){var h=-1,v=typeof s=="function",_=Kt(r)?U(r.length):[];return Ar(r,function(T){_[++h]=v?en(s,T,u):Is(T,s,u)}),_}),xw=Go(function(r,s,u){lr(r,u,s)});function ia(r,s){var u=Oe(r)?lt:ih;return u(r,$e(s,3))}function $w(r,s,u,h){return r==null?[]:(Oe(s)||(s=s==null?[]:[s]),u=h?n:u,Oe(u)||(u=u==null?[]:[u]),lh(r,s,u))}var Ew=Go(function(r,s,u){r[u?0:1].push(s)},function(){return[[],[]]});function kw(r,s,u){var h=Oe(r)?ql:Of,v=arguments.length<3;return h(r,$e(s,4),u,v,Ar)}function Cw(r,s,u){var h=Oe(r)?N2:Of,v=arguments.length<3;return h(r,$e(s,4),u,v,Yf)}function Sw(r,s){var u=Oe(r)?kr:Jf;return u(r,aa($e(s,3)))}function Tw(r){var s=Oe(r)?Kf:_b;return s(r)}function Aw(r,s,u){(u?Nt(r,s,u):s===n)?s=1:s=Pe(s);var h=Oe(r)?Yy:wb;return h(r,s)}function Rw(r){var s=Oe(r)?Jy:$b;return s(r)}function Iw(r){if(r==null)return 0;if(Kt(r))return ca(r)?Li(r):r.length;var s=Pt(r);return s==_e||s==St?r.size:uc(r).length}function Ow(r,s,u){var h=Oe(r)?Zl:Eb;return u&&Nt(r,s,u)&&(s=n),h(r,$e(s,3))}var Lw=De(function(r,s){if(r==null)return[];var u=s.length;return u>1&&Nt(r,s[0],s[1])?s=[]:u>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),lh(r,At(s,1),[])}),sa=hy||function(){return Tt.Date.now()};function Pw(r,s){if(typeof s!="function")throw new pn(l);return r=Pe(r),function(){if(--r<1)return s.apply(this,arguments)}}function np(r,s,u){return s=u?n:s,s=r&&s==null?r.length:s,cr(r,F,n,n,n,n,s)}function rp(r,s){var u;if(typeof s!="function")throw new pn(l);return r=Pe(r),function(){return--r>0&&(u=s.apply(this,arguments)),r<=1&&(s=n),u}}var Pc=De(function(r,s,u){var h=x;if(u.length){var v=Sr(u,Fi(Pc));h|=M}return cr(r,h,s,u,v)}),ip=De(function(r,s,u){var h=x|C;if(u.length){var v=Sr(u,Fi(ip));h|=M}return cr(s,h,r,u,v)});function sp(r,s,u){s=u?n:s;var h=cr(r,E,n,n,n,n,n,s);return h.placeholder=sp.placeholder,h}function op(r,s,u){s=u?n:s;var h=cr(r,P,n,n,n,n,n,s);return h.placeholder=op.placeholder,h}function ap(r,s,u){var h,v,_,T,R,L,H=0,W=!1,Q=!1,ce=!0;if(typeof r!="function")throw new pn(l);s=bn(s)||0,ut(u)&&(W=!!u.leading,Q="maxWait"in u,_=Q?wt(bn(u.maxWait)||0,s):_,ce="trailing"in u?!!u.trailing:ce);function ve(pt){var On=h,pr=v;return h=v=n,H=pt,T=r.apply(pr,On),T}function ke(pt){return H=pt,R=Bs(Fe,s),W?ve(pt):T}function Be(pt){var On=pt-L,pr=pt-H,Cp=s-On;return Q?Lt(Cp,_-pr):Cp}function Ce(pt){var On=pt-L,pr=pt-H;return L===n||On>=s||On<0||Q&&pr>=_}function Fe(){var pt=sa();if(Ce(pt))return qe(pt);R=Bs(Fe,Be(pt))}function qe(pt){return R=n,ce&&h?ve(pt):(h=v=n,T)}function sn(){R!==n&&mh(R),H=0,h=L=v=R=n}function Dt(){return R===n?T:qe(sa())}function on(){var pt=sa(),On=Ce(pt);if(h=arguments,v=this,L=pt,On){if(R===n)return ke(L);if(Q)return mh(R),R=Bs(Fe,s),ve(L)}return R===n&&(R=Bs(Fe,s)),T}return on.cancel=sn,on.flush=Dt,on}var Mw=De(function(r,s){return Qf(r,1,s)}),Bw=De(function(r,s,u){return Qf(r,bn(s)||0,u)});function jw(r){return cr(r,K)}function oa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new pn(l);var u=function(){var h=arguments,v=s?s.apply(this,h):h[0],_=u.cache;if(_.has(v))return _.get(v);var T=r.apply(this,h);return u.cache=_.set(v,T)||_,T};return u.cache=new(oa.Cache||ar),u}oa.Cache=ar;function aa(r){if(typeof r!="function")throw new pn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Nw(r){return rp(2,r)}var Dw=kb(function(r,s){s=s.length==1&&Oe(s[0])?lt(s[0],tn($e())):lt(At(s,1),tn($e()));var u=s.length;return De(function(h){for(var v=-1,_=Lt(h.length,u);++v<_;)h[v]=s[v].call(this,h[v]);return en(r,this,h)})}),Mc=De(function(r,s){var u=Sr(s,Fi(Mc));return cr(r,M,n,s,u)}),lp=De(function(r,s){var u=Sr(s,Fi(lp));return cr(r,I,n,s,u)}),Uw=ur(function(r,s){return cr(r,N,n,n,n,s)});function Fw(r,s){if(typeof r!="function")throw new pn(l);return s=s===n?s:Pe(s),De(r,s)}function zw(r,s){if(typeof r!="function")throw new pn(l);return s=s==null?0:wt(Pe(s),0),De(function(u){var h=u[s],v=Or(u,0,s);return h&&Cr(v,h),en(r,this,v)})}function Hw(r,s,u){var h=!0,v=!0;if(typeof r!="function")throw new pn(l);return ut(u)&&(h="leading"in u?!!u.leading:h,v="trailing"in u?!!u.trailing:v),ap(r,s,{leading:h,maxWait:s,trailing:v})}function Ww(r){return np(r,1)}function qw(r,s){return Mc(bc(s),r)}function Zw(){if(!arguments.length)return[];var r=arguments[0];return Oe(r)?r:[r]}function Kw(r){return vn(r,w)}function Vw(r,s){return s=typeof s=="function"?s:n,vn(r,w,s)}function Gw(r){return vn(r,g|w)}function Qw(r,s){return s=typeof s=="function"?s:n,vn(r,g|w,s)}function Yw(r,s){return s==null||Gf(r,s,$t(s))}function In(r,s){return r===s||r!==r&&s!==s}var Jw=Xo(ac),Xw=Xo(function(r,s){return r>=s}),ai=th(function(){return arguments}())?th:function(r){return ft(r)&&Xe.call(r,"callee")&&!Ff.call(r,"callee")},Oe=U.isArray,e3=xf?tn(xf):lb;function Kt(r){return r!=null&&la(r.length)&&!fr(r)}function ht(r){return ft(r)&&Kt(r)}function t3(r){return r===!0||r===!1||ft(r)&&jt(r)==te}var Lr=gy||Zc,n3=$f?tn($f):cb;function r3(r){return ft(r)&&r.nodeType===1&&!js(r)}function i3(r){if(r==null)return!0;if(Kt(r)&&(Oe(r)||typeof r=="string"||typeof r.splice=="function"||Lr(r)||zi(r)||ai(r)))return!r.length;var s=Pt(r);if(s==_e||s==St)return!r.size;if(Ms(r))return!uc(r).length;for(var u in r)if(Xe.call(r,u))return!1;return!0}function s3(r,s){return Os(r,s)}function o3(r,s,u){u=typeof u=="function"?u:n;var h=u?u(r,s):n;return h===n?Os(r,s,n,u):!!h}function Bc(r){if(!ft(r))return!1;var s=jt(r);return s==He||s==oe||typeof r.message=="string"&&typeof r.name=="string"&&!js(r)}function a3(r){return typeof r=="number"&&Hf(r)}function fr(r){if(!ut(r))return!1;var s=jt(r);return s==Ke||s==J||s==Z||s==Jr}function cp(r){return typeof r=="number"&&r==Pe(r)}function la(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=le}function ut(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ft(r){return r!=null&&typeof r=="object"}var up=Ef?tn(Ef):db;function l3(r,s){return r===s||cc(r,s,Cc(s))}function c3(r,s,u){return u=typeof u=="function"?u:n,cc(r,s,Cc(s),u)}function u3(r){return dp(r)&&r!=+r}function d3(r){if(Vb(r))throw new Re(a);return nh(r)}function f3(r){return r===null}function h3(r){return r==null}function dp(r){return typeof r=="number"||ft(r)&&jt(r)==et}function js(r){if(!ft(r)||jt(r)!=Ct)return!1;var s=Mo(r);if(s===null)return!0;var u=Xe.call(s,"constructor")&&s.constructor;return typeof u=="function"&&u instanceof u&&Io.call(u)==cy}var jc=kf?tn(kf):fb;function p3(r){return cp(r)&&r>=-le&&r<=le}var fp=Cf?tn(Cf):hb;function ca(r){return typeof r=="string"||!Oe(r)&&ft(r)&&jt(r)==Xt}function rn(r){return typeof r=="symbol"||ft(r)&&jt(r)==Un}var zi=Sf?tn(Sf):pb;function g3(r){return r===n}function v3(r){return ft(r)&&Pt(r)==kn}function m3(r){return ft(r)&&jt(r)==Ae}var y3=Xo(dc),b3=Xo(function(r,s){return r<=s});function hp(r){if(!r)return[];if(Kt(r))return ca(r)?An(r):Zt(r);if(Es&&r[Es])return Y2(r[Es]());var s=Pt(r),u=s==_e?Jl:s==St?To:Hi;return u(r)}function hr(r){if(!r)return r===0?r:0;if(r=bn(r),r===ne||r===-ne){var s=r<0?-1:1;return s*Y}return r===r?r:0}function Pe(r){var s=hr(r),u=s%1;return s===s?u?s-u:s:0}function pp(r){return r?ri(Pe(r),0,be):0}function bn(r){if(typeof r=="number")return r;if(rn(r))return ye;if(ut(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ut(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Lf(r);var u=e2.test(r);return u||n2.test(r)?P2(r.slice(2),u?2:8):Xm.test(r)?ye:+r}function gp(r){return zn(r,Vt(r))}function _3(r){return r?ri(Pe(r),-le,le):r===0?r:0}function Je(r){return r==null?"":nn(r)}var w3=Di(function(r,s){if(Ms(s)||Kt(s)){zn(s,$t(s),r);return}for(var u in s)Xe.call(s,u)&&As(r,u,s[u])}),vp=Di(function(r,s){zn(s,Vt(s),r)}),ua=Di(function(r,s,u,h){zn(s,Vt(s),r,h)}),x3=Di(function(r,s,u,h){zn(s,$t(s),r,h)}),$3=ur(ic);function E3(r,s){var u=Ni(r);return s==null?u:Vf(u,s)}var k3=De(function(r,s){r=tt(r);var u=-1,h=s.length,v=h>2?s[2]:n;for(v&&Nt(s[0],s[1],v)&&(h=1);++u<h;)for(var _=s[u],T=Vt(_),R=-1,L=T.length;++R<L;){var H=T[R],W=r[H];(W===n||In(W,Mi[H])&&!Xe.call(r,H))&&(r[H]=_[H])}return r}),C3=De(function(r){return r.push(n,Lh),en(mp,n,r)});function S3(r,s){return Af(r,$e(s,3),Fn)}function T3(r,s){return Af(r,$e(s,3),oc)}function A3(r,s){return r==null?r:sc(r,$e(s,3),Vt)}function R3(r,s){return r==null?r:Xf(r,$e(s,3),Vt)}function I3(r,s){return r&&Fn(r,$e(s,3))}function O3(r,s){return r&&oc(r,$e(s,3))}function L3(r){return r==null?[]:qo(r,$t(r))}function P3(r){return r==null?[]:qo(r,Vt(r))}function Nc(r,s,u){var h=r==null?n:ii(r,s);return h===n?u:h}function M3(r,s){return r!=null&&Bh(r,s,ib)}function Dc(r,s){return r!=null&&Bh(r,s,sb)}var B3=Th(function(r,s,u){s!=null&&typeof s.toString!="function"&&(s=Oo.call(s)),r[s]=u},Fc(Gt)),j3=Th(function(r,s,u){s!=null&&typeof s.toString!="function"&&(s=Oo.call(s)),Xe.call(r,s)?r[s].push(u):r[s]=[u]},$e),N3=De(Is);function $t(r){return Kt(r)?Zf(r):uc(r)}function Vt(r){return Kt(r)?Zf(r,!0):gb(r)}function D3(r,s){var u={};return s=$e(s,3),Fn(r,function(h,v,_){lr(u,s(h,v,_),h)}),u}function U3(r,s){var u={};return s=$e(s,3),Fn(r,function(h,v,_){lr(u,v,s(h,v,_))}),u}var F3=Di(function(r,s,u){Zo(r,s,u)}),mp=Di(function(r,s,u,h){Zo(r,s,u,h)}),z3=ur(function(r,s){var u={};if(r==null)return u;var h=!1;s=lt(s,function(_){return _=Ir(_,r),h||(h=_.length>1),_}),zn(r,Ec(r),u),h&&(u=vn(u,g|m|w,Bb));for(var v=s.length;v--;)vc(u,s[v]);return u});function H3(r,s){return yp(r,aa($e(s)))}var W3=ur(function(r,s){return r==null?{}:mb(r,s)});function yp(r,s){if(r==null)return{};var u=lt(Ec(r),function(h){return[h]});return s=$e(s),ch(r,u,function(h,v){return s(h,v[0])})}function q3(r,s,u){s=Ir(s,r);var h=-1,v=s.length;for(v||(v=1,r=n);++h<v;){var _=r==null?n:r[Hn(s[h])];_===n&&(h=v,_=u),r=fr(_)?_.call(r):_}return r}function Z3(r,s,u){return r==null?r:Ls(r,s,u)}function K3(r,s,u,h){return h=typeof h=="function"?h:n,r==null?r:Ls(r,s,u,h)}var bp=Ih($t),_p=Ih(Vt);function V3(r,s,u){var h=Oe(r),v=h||Lr(r)||zi(r);if(s=$e(s,4),u==null){var _=r&&r.constructor;v?u=h?new _:[]:ut(r)?u=fr(_)?Ni(Mo(r)):{}:u={}}return(v?hn:Fn)(r,function(T,R,L){return s(u,T,R,L)}),u}function G3(r,s){return r==null?!0:vc(r,s)}function Q3(r,s,u){return r==null?r:ph(r,s,bc(u))}function Y3(r,s,u,h){return h=typeof h=="function"?h:n,r==null?r:ph(r,s,bc(u),h)}function Hi(r){return r==null?[]:Yl(r,$t(r))}function J3(r){return r==null?[]:Yl(r,Vt(r))}function X3(r,s,u){return u===n&&(u=s,s=n),u!==n&&(u=bn(u),u=u===u?u:0),s!==n&&(s=bn(s),s=s===s?s:0),ri(bn(r),s,u)}function ex(r,s,u){return s=hr(s),u===n?(u=s,s=0):u=hr(u),r=bn(r),ob(r,s,u)}function tx(r,s,u){if(u&&typeof u!="boolean"&&Nt(r,s,u)&&(s=u=n),u===n&&(typeof s=="boolean"?(u=s,s=n):typeof r=="boolean"&&(u=r,r=n)),r===n&&s===n?(r=0,s=1):(r=hr(r),s===n?(s=r,r=0):s=hr(s)),r>s){var h=r;r=s,s=h}if(u||r%1||s%1){var v=Wf();return Lt(r+v*(s-r+L2("1e-"+((v+"").length-1))),s)}return hc(r,s)}var nx=Ui(function(r,s,u){return s=s.toLowerCase(),r+(u?wp(s):s)});function wp(r){return Uc(Je(r).toLowerCase())}function xp(r){return r=Je(r),r&&r.replace(i2,Z2).replace($2,"")}function rx(r,s,u){r=Je(r),s=nn(s);var h=r.length;u=u===n?h:ri(Pe(u),0,h);var v=u;return u-=s.length,u>=0&&r.slice(u,v)==s}function ix(r){return r=Je(r),r&&Nm.test(r)?r.replace(Jd,K2):r}function sx(r){return r=Je(r),r&&Wm.test(r)?r.replace(Ml,"\\$&"):r}var ox=Ui(function(r,s,u){return r+(u?"-":"")+s.toLowerCase()}),ax=Ui(function(r,s,u){return r+(u?" ":"")+s.toLowerCase()}),lx=kh("toLowerCase");function cx(r,s,u){r=Je(r),s=Pe(s);var h=s?Li(r):0;if(!s||h>=s)return r;var v=(s-h)/2;return Jo(Do(v),u)+r+Jo(No(v),u)}function ux(r,s,u){r=Je(r),s=Pe(s);var h=s?Li(r):0;return s&&h<s?r+Jo(s-h,u):r}function dx(r,s,u){r=Je(r),s=Pe(s);var h=s?Li(r):0;return s&&h<s?Jo(s-h,u)+r:r}function fx(r,s,u){return u||s==null?s=0:s&&(s=+s),by(Je(r).replace(Bl,""),s||0)}function hx(r,s,u){return(u?Nt(r,s,u):s===n)?s=1:s=Pe(s),pc(Je(r),s)}function px(){var r=arguments,s=Je(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var gx=Ui(function(r,s,u){return r+(u?"_":"")+s.toLowerCase()});function vx(r,s,u){return u&&typeof u!="number"&&Nt(r,s,u)&&(s=u=n),u=u===n?be:u>>>0,u?(r=Je(r),r&&(typeof s=="string"||s!=null&&!jc(s))&&(s=nn(s),!s&&Oi(r))?Or(An(r),0,u):r.split(s,u)):[]}var mx=Ui(function(r,s,u){return r+(u?" ":"")+Uc(s)});function yx(r,s,u){return r=Je(r),u=u==null?0:ri(Pe(u),0,r.length),s=nn(s),r.slice(u,u+s.length)==s}function bx(r,s,u){var h=y.templateSettings;u&&Nt(r,s,u)&&(s=n),r=Je(r),s=ua({},s,h,Oh);var v=ua({},s.imports,h.imports,Oh),_=$t(v),T=Yl(v,_),R,L,H=0,W=s.interpolate||$o,Q="__p += '",ce=Xl((s.escape||$o).source+"|"+W.source+"|"+(W===Xd?Jm:$o).source+"|"+(s.evaluate||$o).source+"|$","g"),ve="//# sourceURL="+(Xe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++T2+"]")+`
`;r.replace(ce,function(Ce,Fe,qe,sn,Dt,on){return qe||(qe=sn),Q+=r.slice(H,on).replace(s2,V2),Fe&&(R=!0,Q+=`' +
__e(`+Fe+`) +
'`),Dt&&(L=!0,Q+=`';
`+Dt+`;
__p += '`),qe&&(Q+=`' +
((__t = (`+qe+`)) == null ? '' : __t) +
'`),H=on+Ce.length,Ce}),Q+=`';
`;var ke=Xe.call(s,"variable")&&s.variable;if(!ke)Q=`with (obj) {
`+Q+`
}
`;else if(Qm.test(ke))throw new Re(c);Q=(L?Q.replace(_o,""):Q).replace(wo,"$1").replace(xo,"$1;"),Q="function("+(ke||"obj")+`) {
`+(ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(L?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Q+`return __p
}`;var Be=Ep(function(){return Qe(_,ve+"return "+Q).apply(n,T)});if(Be.source=Q,Bc(Be))throw Be;return Be}function _x(r){return Je(r).toLowerCase()}function wx(r){return Je(r).toUpperCase()}function xx(r,s,u){if(r=Je(r),r&&(u||s===n))return Lf(r);if(!r||!(s=nn(s)))return r;var h=An(r),v=An(s),_=Pf(h,v),T=Mf(h,v)+1;return Or(h,_,T).join("")}function $x(r,s,u){if(r=Je(r),r&&(u||s===n))return r.slice(0,jf(r)+1);if(!r||!(s=nn(s)))return r;var h=An(r),v=Mf(h,An(s))+1;return Or(h,0,v).join("")}function Ex(r,s,u){if(r=Je(r),r&&(u||s===n))return r.replace(Bl,"");if(!r||!(s=nn(s)))return r;var h=An(r),v=Pf(h,An(s));return Or(h,v).join("")}function kx(r,s){var u=ee,h=ie;if(ut(s)){var v="separator"in s?s.separator:v;u="length"in s?Pe(s.length):u,h="omission"in s?nn(s.omission):h}r=Je(r);var _=r.length;if(Oi(r)){var T=An(r);_=T.length}if(u>=_)return r;var R=u-Li(h);if(R<1)return h;var L=T?Or(T,0,R).join(""):r.slice(0,R);if(v===n)return L+h;if(T&&(R+=L.length-R),jc(v)){if(r.slice(R).search(v)){var H,W=L;for(v.global||(v=Xl(v.source,Je(ef.exec(v))+"g")),v.lastIndex=0;H=v.exec(W);)var Q=H.index;L=L.slice(0,Q===n?R:Q)}}else if(r.indexOf(nn(v),R)!=R){var ce=L.lastIndexOf(v);ce>-1&&(L=L.slice(0,ce))}return L+h}function Cx(r){return r=Je(r),r&&jm.test(r)?r.replace(Yd,ty):r}var Sx=Ui(function(r,s,u){return r+(u?" ":"")+s.toUpperCase()}),Uc=kh("toUpperCase");function $p(r,s,u){return r=Je(r),s=u?n:s,s===n?Q2(r)?iy(r):F2(r):r.match(s)||[]}var Ep=De(function(r,s){try{return en(r,n,s)}catch(u){return Bc(u)?u:new Re(u)}}),Tx=ur(function(r,s){return hn(s,function(u){u=Hn(u),lr(r,u,Pc(r[u],r))}),r});function Ax(r){var s=r==null?0:r.length,u=$e();return r=s?lt(r,function(h){if(typeof h[1]!="function")throw new pn(l);return[u(h[0]),h[1]]}):[],De(function(h){for(var v=-1;++v<s;){var _=r[v];if(en(_[0],this,h))return en(_[1],this,h)}})}function Rx(r){return tb(vn(r,g))}function Fc(r){return function(){return r}}function Ix(r,s){return r==null||r!==r?s:r}var Ox=Sh(),Lx=Sh(!0);function Gt(r){return r}function zc(r){return rh(typeof r=="function"?r:vn(r,g))}function Px(r){return sh(vn(r,g))}function Mx(r,s){return oh(r,vn(s,g))}var Bx=De(function(r,s){return function(u){return Is(u,r,s)}}),jx=De(function(r,s){return function(u){return Is(r,u,s)}});function Hc(r,s,u){var h=$t(s),v=qo(s,h);u==null&&!(ut(s)&&(v.length||!h.length))&&(u=s,s=r,r=this,v=qo(s,$t(s)));var _=!(ut(u)&&"chain"in u)||!!u.chain,T=fr(r);return hn(v,function(R){var L=s[R];r[R]=L,T&&(r.prototype[R]=function(){var H=this.__chain__;if(_||H){var W=r(this.__wrapped__),Q=W.__actions__=Zt(this.__actions__);return Q.push({func:L,args:arguments,thisArg:r}),W.__chain__=H,W}return L.apply(r,Cr([this.value()],arguments))})}),r}function Nx(){return Tt._===this&&(Tt._=uy),this}function Wc(){}function Dx(r){return r=Pe(r),De(function(s){return ah(s,r)})}var Ux=wc(lt),Fx=wc(Tf),zx=wc(Zl);function kp(r){return Tc(r)?Kl(Hn(r)):yb(r)}function Hx(r){return function(s){return r==null?n:ii(r,s)}}var Wx=Ah(),qx=Ah(!0);function qc(){return[]}function Zc(){return!1}function Zx(){return{}}function Kx(){return""}function Vx(){return!0}function Gx(r,s){if(r=Pe(r),r<1||r>le)return[];var u=be,h=Lt(r,be);s=$e(s),r-=be;for(var v=Ql(h,s);++u<r;)s(u);return v}function Qx(r){return Oe(r)?lt(r,Hn):rn(r)?[r]:Zt(qh(Je(r)))}function Yx(r){var s=++ly;return Je(r)+s}var Jx=Yo(function(r,s){return r+s},0),Xx=xc("ceil"),e4=Yo(function(r,s){return r/s},1),t4=xc("floor");function n4(r){return r&&r.length?Wo(r,Gt,ac):n}function r4(r,s){return r&&r.length?Wo(r,$e(s,2),ac):n}function i4(r){return If(r,Gt)}function s4(r,s){return If(r,$e(s,2))}function o4(r){return r&&r.length?Wo(r,Gt,dc):n}function a4(r,s){return r&&r.length?Wo(r,$e(s,2),dc):n}var l4=Yo(function(r,s){return r*s},1),c4=xc("round"),u4=Yo(function(r,s){return r-s},0);function d4(r){return r&&r.length?Gl(r,Gt):0}function f4(r,s){return r&&r.length?Gl(r,$e(s,2)):0}return y.after=Pw,y.ary=np,y.assign=w3,y.assignIn=vp,y.assignInWith=ua,y.assignWith=x3,y.at=$3,y.before=rp,y.bind=Pc,y.bindAll=Tx,y.bindKey=ip,y.castArray=Zw,y.chain=Xh,y.chunk=t_,y.compact=n_,y.concat=r_,y.cond=Ax,y.conforms=Rx,y.constant=Fc,y.countBy=dw,y.create=E3,y.curry=sp,y.curryRight=op,y.debounce=ap,y.defaults=k3,y.defaultsDeep=C3,y.defer=Mw,y.delay=Bw,y.difference=i_,y.differenceBy=s_,y.differenceWith=o_,y.drop=a_,y.dropRight=l_,y.dropRightWhile=c_,y.dropWhile=u_,y.fill=d_,y.filter=hw,y.flatMap=vw,y.flatMapDeep=mw,y.flatMapDepth=yw,y.flatten=Gh,y.flattenDeep=f_,y.flattenDepth=h_,y.flip=jw,y.flow=Ox,y.flowRight=Lx,y.fromPairs=p_,y.functions=L3,y.functionsIn=P3,y.groupBy=bw,y.initial=v_,y.intersection=m_,y.intersectionBy=y_,y.intersectionWith=b_,y.invert=B3,y.invertBy=j3,y.invokeMap=ww,y.iteratee=zc,y.keyBy=xw,y.keys=$t,y.keysIn=Vt,y.map=ia,y.mapKeys=D3,y.mapValues=U3,y.matches=Px,y.matchesProperty=Mx,y.memoize=oa,y.merge=F3,y.mergeWith=mp,y.method=Bx,y.methodOf=jx,y.mixin=Hc,y.negate=aa,y.nthArg=Dx,y.omit=z3,y.omitBy=H3,y.once=Nw,y.orderBy=$w,y.over=Ux,y.overArgs=Dw,y.overEvery=Fx,y.overSome=zx,y.partial=Mc,y.partialRight=lp,y.partition=Ew,y.pick=W3,y.pickBy=yp,y.property=kp,y.propertyOf=Hx,y.pull=$_,y.pullAll=Yh,y.pullAllBy=E_,y.pullAllWith=k_,y.pullAt=C_,y.range=Wx,y.rangeRight=qx,y.rearg=Uw,y.reject=Sw,y.remove=S_,y.rest=Fw,y.reverse=Oc,y.sampleSize=Aw,y.set=Z3,y.setWith=K3,y.shuffle=Rw,y.slice=T_,y.sortBy=Lw,y.sortedUniq=M_,y.sortedUniqBy=B_,y.split=vx,y.spread=zw,y.tail=j_,y.take=N_,y.takeRight=D_,y.takeRightWhile=U_,y.takeWhile=F_,y.tap=nw,y.throttle=Hw,y.thru=ra,y.toArray=hp,y.toPairs=bp,y.toPairsIn=_p,y.toPath=Qx,y.toPlainObject=gp,y.transform=V3,y.unary=Ww,y.union=z_,y.unionBy=H_,y.unionWith=W_,y.uniq=q_,y.uniqBy=Z_,y.uniqWith=K_,y.unset=G3,y.unzip=Lc,y.unzipWith=Jh,y.update=Q3,y.updateWith=Y3,y.values=Hi,y.valuesIn=J3,y.without=V_,y.words=$p,y.wrap=qw,y.xor=G_,y.xorBy=Q_,y.xorWith=Y_,y.zip=J_,y.zipObject=X_,y.zipObjectDeep=ew,y.zipWith=tw,y.entries=bp,y.entriesIn=_p,y.extend=vp,y.extendWith=ua,Hc(y,y),y.add=Jx,y.attempt=Ep,y.camelCase=nx,y.capitalize=wp,y.ceil=Xx,y.clamp=X3,y.clone=Kw,y.cloneDeep=Gw,y.cloneDeepWith=Qw,y.cloneWith=Vw,y.conformsTo=Yw,y.deburr=xp,y.defaultTo=Ix,y.divide=e4,y.endsWith=rx,y.eq=In,y.escape=ix,y.escapeRegExp=sx,y.every=fw,y.find=pw,y.findIndex=Kh,y.findKey=S3,y.findLast=gw,y.findLastIndex=Vh,y.findLastKey=T3,y.floor=t4,y.forEach=ep,y.forEachRight=tp,y.forIn=A3,y.forInRight=R3,y.forOwn=I3,y.forOwnRight=O3,y.get=Nc,y.gt=Jw,y.gte=Xw,y.has=M3,y.hasIn=Dc,y.head=Qh,y.identity=Gt,y.includes=_w,y.indexOf=g_,y.inRange=ex,y.invoke=N3,y.isArguments=ai,y.isArray=Oe,y.isArrayBuffer=e3,y.isArrayLike=Kt,y.isArrayLikeObject=ht,y.isBoolean=t3,y.isBuffer=Lr,y.isDate=n3,y.isElement=r3,y.isEmpty=i3,y.isEqual=s3,y.isEqualWith=o3,y.isError=Bc,y.isFinite=a3,y.isFunction=fr,y.isInteger=cp,y.isLength=la,y.isMap=up,y.isMatch=l3,y.isMatchWith=c3,y.isNaN=u3,y.isNative=d3,y.isNil=h3,y.isNull=f3,y.isNumber=dp,y.isObject=ut,y.isObjectLike=ft,y.isPlainObject=js,y.isRegExp=jc,y.isSafeInteger=p3,y.isSet=fp,y.isString=ca,y.isSymbol=rn,y.isTypedArray=zi,y.isUndefined=g3,y.isWeakMap=v3,y.isWeakSet=m3,y.join=__,y.kebabCase=ox,y.last=yn,y.lastIndexOf=w_,y.lowerCase=ax,y.lowerFirst=lx,y.lt=y3,y.lte=b3,y.max=n4,y.maxBy=r4,y.mean=i4,y.meanBy=s4,y.min=o4,y.minBy=a4,y.stubArray=qc,y.stubFalse=Zc,y.stubObject=Zx,y.stubString=Kx,y.stubTrue=Vx,y.multiply=l4,y.nth=x_,y.noConflict=Nx,y.noop=Wc,y.now=sa,y.pad=cx,y.padEnd=ux,y.padStart=dx,y.parseInt=fx,y.random=tx,y.reduce=kw,y.reduceRight=Cw,y.repeat=hx,y.replace=px,y.result=q3,y.round=c4,y.runInContext=O,y.sample=Tw,y.size=Iw,y.snakeCase=gx,y.some=Ow,y.sortedIndex=A_,y.sortedIndexBy=R_,y.sortedIndexOf=I_,y.sortedLastIndex=O_,y.sortedLastIndexBy=L_,y.sortedLastIndexOf=P_,y.startCase=mx,y.startsWith=yx,y.subtract=u4,y.sum=d4,y.sumBy=f4,y.template=bx,y.times=Gx,y.toFinite=hr,y.toInteger=Pe,y.toLength=pp,y.toLower=_x,y.toNumber=bn,y.toSafeInteger=_3,y.toString=Je,y.toUpper=wx,y.trim=xx,y.trimEnd=$x,y.trimStart=Ex,y.truncate=kx,y.unescape=Cx,y.uniqueId=Yx,y.upperCase=Sx,y.upperFirst=Uc,y.each=ep,y.eachRight=tp,y.first=Qh,Hc(y,function(){var r={};return Fn(y,function(s,u){Xe.call(y.prototype,u)||(r[u]=s)}),r}(),{chain:!1}),y.VERSION=i,hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),hn(["drop","take"],function(r,s){We.prototype[r]=function(u){u=u===n?1:wt(Pe(u),0);var h=this.__filtered__&&!s?new We(this):this.clone();return h.__filtered__?h.__takeCount__=Lt(u,h.__takeCount__):h.__views__.push({size:Lt(u,be),type:r+(h.__dir__<0?"Right":"")}),h},We.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),hn(["filter","map","takeWhile"],function(r,s){var u=s+1,h=u==X||u==q;We.prototype[r]=function(v){var _=this.clone();return _.__iteratees__.push({iteratee:$e(v,3),type:u}),_.__filtered__=_.__filtered__||h,_}}),hn(["head","last"],function(r,s){var u="take"+(s?"Right":"");We.prototype[r]=function(){return this[u](1).value()[0]}}),hn(["initial","tail"],function(r,s){var u="drop"+(s?"":"Right");We.prototype[r]=function(){return this.__filtered__?new We(this):this[u](1)}}),We.prototype.compact=function(){return this.filter(Gt)},We.prototype.find=function(r){return this.filter(r).head()},We.prototype.findLast=function(r){return this.reverse().find(r)},We.prototype.invokeMap=De(function(r,s){return typeof r=="function"?new We(this):this.map(function(u){return Is(u,r,s)})}),We.prototype.reject=function(r){return this.filter(aa($e(r)))},We.prototype.slice=function(r,s){r=Pe(r);var u=this;return u.__filtered__&&(r>0||s<0)?new We(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),s!==n&&(s=Pe(s),u=s<0?u.dropRight(-s):u.take(s-r)),u)},We.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},We.prototype.toArray=function(){return this.take(be)},Fn(We.prototype,function(r,s){var u=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),v=y[h?"take"+(s=="last"?"Right":""):s],_=h||/^find/.test(s);v&&(y.prototype[s]=function(){var T=this.__wrapped__,R=h?[1]:arguments,L=T instanceof We,H=R[0],W=L||Oe(T),Q=function(Fe){var qe=v.apply(y,Cr([Fe],R));return h&&ce?qe[0]:qe};W&&u&&typeof H=="function"&&H.length!=1&&(L=W=!1);var ce=this.__chain__,ve=!!this.__actions__.length,ke=_&&!ce,Be=L&&!ve;if(!_&&W){T=Be?T:new We(this);var Ce=r.apply(T,R);return Ce.__actions__.push({func:ra,args:[Q],thisArg:n}),new gn(Ce,ce)}return ke&&Be?r.apply(this,R):(Ce=this.thru(Q),ke?h?Ce.value()[0]:Ce.value():Ce)})}),hn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Ao[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",h=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var v=arguments;if(h&&!this.__chain__){var _=this.value();return s.apply(Oe(_)?_:[],v)}return this[u](function(T){return s.apply(Oe(T)?T:[],v)})}}),Fn(We.prototype,function(r,s){var u=y[s];if(u){var h=u.name+"";Xe.call(ji,h)||(ji[h]=[]),ji[h].push({name:s,func:u})}}),ji[Qo(n,C).name]=[{name:"wrapper",func:n}],We.prototype.clone=Cy,We.prototype.reverse=Sy,We.prototype.value=Ty,y.prototype.at=rw,y.prototype.chain=iw,y.prototype.commit=sw,y.prototype.next=ow,y.prototype.plant=lw,y.prototype.reverse=cw,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=uw,y.prototype.first=y.prototype.head,Es&&(y.prototype[Es]=aw),y},Pi=sy();Xr?((Xr.exports=Pi)._=Pi,zl._=Pi):Tt._=Pi}).call(xt)})(ja,ja.exports);var F1=ja.exports;const V9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],z1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],G9=[...z1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],Vz=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Q9=()=>{const t=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));t.push(...o)}else for(let o=0;o<16;o+=1)t[o]=Math.round(Math.random()*65535)>>8;t[6]=t[6]&15|64,t[8]=t[8]&63|128;const e=String.fromCharCode(...t);return btoa(e).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},gs=()=>({id:Q9(),width:"medium"}),H1=t=>({...gs(),columnType:"Following",...t}),W1=t=>({...gs(),columnType:"Notification",...t}),q1=t=>({...gs(),columnType:"Relays",...t}),Z1=()=>q1({name:"日本語",relayUrls:z1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),K1=t=>({...gs(),columnType:"Posts",...t}),V1=t=>({...gs(),columnType:"Reactions",...t}),md=t=>({...gs(),columnType:"Search",...t});var Ge;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},t.getValidEnumValues=o=>{const a=t.objectKeys(o).filter(c=>typeof o[o[c]]!="number"),l={};for(const c of a)l[c]=o[c];return t.objectValues(l)},t.objectValues=o=>t.objectKeys(o).map(function(a){return o[a]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},t.find=(o,a)=>{for(const l of o)if(a(l))return l},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}t.joinValues=i,t.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ge||(Ge={}));var Cu;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Cu||(Cu={}));const fe=Ge.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Dr=t=>{switch(typeof t){case"undefined":return fe.undefined;case"string":return fe.string;case"number":return isNaN(t)?fe.nan:fe.number;case"boolean":return fe.boolean;case"function":return fe.function;case"bigint":return fe.bigint;case"symbol":return fe.symbol;case"object":return Array.isArray(t)?fe.array:t===null?fe.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?fe.promise:typeof Map<"u"&&t instanceof Map?fe.map:typeof Set<"u"&&t instanceof Set?fe.set:typeof Date<"u"&&t instanceof Date?fe.date:fe.object;default:return fe.unknown}},re=Ge.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Y9=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Bn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let c=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(c[f]=c[f]||{_errors:[]},c[f]._errors.push(n(l))):c[f]=c[f]||{_errors:[]},c=c[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ge.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Bn.create=t=>new Bn(t);const Ks=(t,e)=>{let n;switch(t.code){case re.invalid_type:t.received===fe.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case re.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ge.jsonStringifyReplacer)}`;break;case re.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ge.joinValues(t.keys,", ")}`;break;case re.invalid_union:n="Invalid input";break;case re.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ge.joinValues(t.options)}`;break;case re.invalid_enum_value:n=`Invalid enum value. Expected ${Ge.joinValues(t.options)}, received '${t.received}'`;break;case re.invalid_arguments:n="Invalid function arguments";break;case re.invalid_return_type:n="Invalid function return type";break;case re.invalid_date:n="Invalid date";break;case re.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ge.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case re.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case re.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case re.custom:n="Invalid input";break;case re.invalid_intersection_types:n="Intersection results could not be merged";break;case re.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case re.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ge.assertNever(t)}return{message:n}};let G1=Ks;function J9(t){G1=t}function Na(){return G1}const Da=t=>{const{data:e,path:n,errorMaps:i,issueData:o}=t,a=[...n,...o.path||[]],l={...o,path:a};let c="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)c=f(l,{data:e,defaultError:c}).message;return{...o,path:a,message:o.message||c}},X9=[];function pe(t,e){const n=Da({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Na(),Ks].filter(i=>!!i)});t.common.issues.push(n)}class Bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const i=[];for(const o of n){if(o.status==="aborted")return Ie;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Bt.mergeObjectSync(e,i)}static mergeObjectSync(e,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ie;a.status==="dirty"&&e.dirty(),l.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:e.value,value:i}}}const Ie=Object.freeze({status:"aborted"}),Q1=t=>({status:"dirty",value:t}),zt=t=>({status:"valid",value:t}),Su=t=>t.status==="aborted",Tu=t=>t.status==="dirty",Vs=t=>t.status==="valid",Ua=t=>typeof Promise<"u"&&t instanceof Promise;var we;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(we||(we={}));class Qn{constructor(e,n,i,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const tg=(t,e)=>{if(Vs(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Bn(t.common.issues);return this._error=n,this._error}}};function Le(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:i,description:o}=t;if(e&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(l,c)=>l.code!=="invalid_type"?{message:c.defaultError}:typeof c.data>"u"?{message:i??c.defaultError}:{message:n??c.defaultError},description:o}}class Ne{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Dr(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Dr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Bt,ctx:{common:e.parent.common,data:e.data,parsedType:Dr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Ua(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const i=this.safeParse(e,n);if(i.success)return i.data;throw i.error}safeParse(e,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dr(e)},a=this._parseSync({data:e,path:o.path,parent:o});return tg(o,a)}async parseAsync(e,n){const i=await this.safeParseAsync(e,n);if(i.success)return i.data;throw i.error}async safeParseAsync(e,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dr(e)},o=this._parse({data:e,path:i.path,parent:i}),a=await(Ua(o)?o:Promise.resolve(o));return tg(i,a)}refine(e,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=e(o),c=()=>a.addIssue({code:re.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(c(),!1)):l?!0:(c(),!1)})}refinement(e,n){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(e){return new Nn({schema:this,typeName:Se.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return br.create(this,this._def)}nullable(){return $i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return jn.create(this,this._def)}promise(){return rs.create(this,this._def)}or(e){return Js.create([this,e],this._def)}and(e){return Xs.create(this,e,this._def)}transform(e){return new Nn({...Le(this._def),schema:this,typeName:Se.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new io({...Le(this._def),innerType:this,defaultValue:n,typeName:Se.ZodDefault})}brand(){return new J1({typeName:Se.ZodBranded,type:this,...Le(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Wa({...Le(this._def),innerType:this,catchValue:n,typeName:Se.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return go.create(this,e)}readonly(){return Za.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ek=/^c[^\s-]{8,}$/i,tk=/^[a-z][a-z0-9]*$/,nk=/^[0-9A-HJKMNP-TV-Z]{26}$/,rk=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,ik=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,sk="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let nu;const ok=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,ak=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,lk=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function ck(t,e){return!!((e==="v4"||!e)&&ok.test(t)||(e==="v6"||!e)&&ak.test(t))}class Mn extends Ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==fe.string){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.string,received:a.parsedType}),Ie}const i=new Bt;let o;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")e.data.length>a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=e.data.length>a.value,c=e.data.length<a.value;(l||c)&&(o=this._getOrReturnCtx(e,o),l?pe(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):c&&pe(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")ik.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"email",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")nu||(nu=new RegExp(sk,"u")),nu.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"emoji",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")rk.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"uuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")ek.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"cuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")tk.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"cuid2",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")nk.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"ulid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),pe(o,{validation:"url",code:re.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"regex",code:re.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?lk(a).test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?ck(e.data,a.version)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"ip",code:re.invalid_string,message:a.message}),i.dirty()):Ge.assertNever(a);return{status:i.value,value:e.data}}_regex(e,n,i){return this.refinement(o=>e.test(o),{validation:n,code:re.invalid_string,...we.errToObj(i)})}_addCheck(e){return new Mn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...we.errToObj(e)})}url(e){return this._addCheck({kind:"url",...we.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...we.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...we.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...we.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...we.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...we.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...we.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(n=e?.offset)!==null&&n!==void 0?n:!1,...we.errToObj(e?.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...we.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...we.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...we.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...we.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...we.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...we.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...we.errToObj(n)})}nonempty(e){return this.min(1,we.errToObj(e))}trim(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Mn.create=t=>{var e;return new Mn({checks:[],typeName:Se.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};function uk(t,e){const n=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(t.toFixed(o).replace(".","")),l=parseInt(e.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class qr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==fe.number){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.number,received:a.parsedType}),Ie}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="int"?Ge.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),pe(i,{code:re.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?uk(e.data,a.value)!==0&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_finite,message:a.message}),o.dirty()):Ge.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new qr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new qr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:we.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:we.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:we.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:we.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ge.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(n)&&Number.isFinite(e)}}qr.create=t=>new qr({checks:[],typeName:Se.ZodNumber,coerce:t?.coerce||!1,...Le(t)});class Zr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==fe.bigint){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.bigint,received:a.parsedType}),Ie}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ge.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Zr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Zr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Zr.create=t=>{var e;return new Zr({checks:[],typeName:Se.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};class Gs extends Ne{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==fe.boolean){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.boolean,received:i.parsedType}),Ie}return zt(e.data)}}Gs.create=t=>new Gs({typeName:Se.ZodBoolean,coerce:t?.coerce||!1,...Le(t)});class wi extends Ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==fe.date){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.date,received:a.parsedType}),Ie}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_date}),Ie}const i=new Bt;let o;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ge.assertNever(a);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new wi({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:we.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:we.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}wi.create=t=>new wi({checks:[],coerce:t?.coerce||!1,typeName:Se.ZodDate,...Le(t)});class Fa extends Ne{_parse(e){if(this._getType(e)!==fe.symbol){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.symbol,received:i.parsedType}),Ie}return zt(e.data)}}Fa.create=t=>new Fa({typeName:Se.ZodSymbol,...Le(t)});class Qs extends Ne{_parse(e){if(this._getType(e)!==fe.undefined){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.undefined,received:i.parsedType}),Ie}return zt(e.data)}}Qs.create=t=>new Qs({typeName:Se.ZodUndefined,...Le(t)});class Ys extends Ne{_parse(e){if(this._getType(e)!==fe.null){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.null,received:i.parsedType}),Ie}return zt(e.data)}}Ys.create=t=>new Ys({typeName:Se.ZodNull,...Le(t)});class ns extends Ne{constructor(){super(...arguments),this._any=!0}_parse(e){return zt(e.data)}}ns.create=t=>new ns({typeName:Se.ZodAny,...Le(t)});class bi extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(e){return zt(e.data)}}bi.create=t=>new bi({typeName:Se.ZodUnknown,...Le(t)});class xr extends Ne{_parse(e){const n=this._getOrReturnCtx(e);return pe(n,{code:re.invalid_type,expected:fe.never,received:n.parsedType}),Ie}}xr.create=t=>new xr({typeName:Se.ZodNever,...Le(t)});class za extends Ne{_parse(e){if(this._getType(e)!==fe.undefined){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.void,received:i.parsedType}),Ie}return zt(e.data)}}za.create=t=>new za({typeName:Se.ZodVoid,...Le(t)});class jn extends Ne{_parse(e){const{ctx:n,status:i}=this._processInputParams(e),o=this._def;if(n.parsedType!==fe.array)return pe(n,{code:re.invalid_type,expected:fe.array,received:n.parsedType}),Ie;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,c=n.data.length<o.exactLength.value;(l||c)&&(pe(n,{code:l?re.too_big:re.too_small,minimum:c?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(pe(n,{code:re.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(pe(n,{code:re.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,c)=>o.type._parseAsync(new Qn(n,l,n.path,c)))).then(l=>Bt.mergeArray(i,l));const a=[...n.data].map((l,c)=>o.type._parseSync(new Qn(n,l,n.path,c)));return Bt.mergeArray(i,a)}get element(){return this._def.type}min(e,n){return new jn({...this._def,minLength:{value:e,message:we.toString(n)}})}max(e,n){return new jn({...this._def,maxLength:{value:e,message:we.toString(n)}})}length(e,n){return new jn({...this._def,exactLength:{value:e,message:we.toString(n)}})}nonempty(e){return this.min(1,e)}}jn.create=(t,e)=>new jn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:Se.ZodArray,...Le(e)});function Ki(t){if(t instanceof dt){const e={};for(const n in t.shape){const i=t.shape[n];e[n]=br.create(Ki(i))}return new dt({...t._def,shape:()=>e})}else return t instanceof jn?new jn({...t._def,type:Ki(t.element)}):t instanceof br?br.create(Ki(t.unwrap())):t instanceof $i?$i.create(Ki(t.unwrap())):t instanceof Yn?Yn.create(t.items.map(e=>Ki(e))):t}class dt extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ge.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==fe.object){const f=this._getOrReturnCtx(e);return pe(f,{code:re.invalid_type,expected:fe.object,received:f.parsedType}),Ie}const{status:i,ctx:o}=this._processInputParams(e),{shape:a,keys:l}=this._getCached(),c=[];if(!(this._def.catchall instanceof xr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||c.push(f);const d=[];for(const f of l){const p=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:p._parse(new Qn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof xr){const f=this._def.unknownKeys;if(f==="passthrough")for(const p of c)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(f==="strict")c.length>0&&(pe(o,{code:re.unrecognized_keys,keys:c}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const p of c){const g=o.data[p];d.push({key:{status:"valid",value:p},value:f._parse(new Qn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const p of d){const g=await p.key;f.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return f}).then(f=>Bt.mergeObjectSync(i,f)):Bt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(e){return we.errToObj,new dt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,i)=>{var o,a,l,c;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(c=we.errToObj(e).message)!==null&&c!==void 0?c:d}:{message:d}}}:{}})}strip(){return new dt({...this._def,unknownKeys:"strip"})}passthrough(){return new dt({...this._def,unknownKeys:"passthrough"})}extend(e){return new dt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new dt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Se.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new dt({...this._def,catchall:e})}pick(e){const n={};return Ge.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new dt({...this._def,shape:()=>n})}omit(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{e[i]||(n[i]=this.shape[i])}),new dt({...this._def,shape:()=>n})}deepPartial(){return Ki(this)}partial(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?n[i]=o:n[i]=o.optional()}),new dt({...this._def,shape:()=>n})}required(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof br;)a=a._def.innerType;n[i]=a}}),new dt({...this._def,shape:()=>n})}keyof(){return Y1(Ge.objectKeys(this.shape))}}dt.create=(t,e)=>new dt({shape:()=>t,unknownKeys:"strip",catchall:xr.create(),typeName:Se.ZodObject,...Le(e)});dt.strictCreate=(t,e)=>new dt({shape:()=>t,unknownKeys:"strict",catchall:xr.create(),typeName:Se.ZodObject,...Le(e)});dt.lazycreate=(t,e)=>new dt({shape:t,unknownKeys:"strip",catchall:xr.create(),typeName:Se.ZodObject,...Le(e)});class Js extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=this._def.options;function o(a){for(const c of a)if(c.result.status==="valid")return c.result;for(const c of a)if(c.result.status==="dirty")return n.common.issues.push(...c.ctx.common.issues),c.result;const l=a.map(c=>new Bn(c.ctx.common.issues));return pe(n,{code:re.invalid_union,unionErrors:l}),Ie}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:f});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const c=l.map(d=>new Bn(d));return pe(n,{code:re.invalid_union,unionErrors:c}),Ie}}get options(){return this._def.options}}Js.create=(t,e)=>new Js({options:t,typeName:Se.ZodUnion,...Le(e)});const Ea=t=>t instanceof to?Ea(t.schema):t instanceof Nn?Ea(t.innerType()):t instanceof no?[t.value]:t instanceof Kr?t.options:t instanceof ro?Object.keys(t.enum):t instanceof io?Ea(t._def.innerType):t instanceof Qs?[void 0]:t instanceof Ys?[null]:null;class _l extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.object)return pe(n,{code:re.invalid_type,expected:fe.object,received:n.parsedType}),Ie;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(pe(n,{code:re.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ie)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,i){const o=new Map;for(const a of n){const l=Ea(a.shape[e]);if(!l)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const c of l){if(o.has(c))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);o.set(c,a)}}return new _l({typeName:Se.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Le(i)})}}function Au(t,e){const n=Dr(t),i=Dr(e);if(t===e)return{valid:!0,data:t};if(n===fe.object&&i===fe.object){const o=Ge.objectKeys(e),a=Ge.objectKeys(t).filter(c=>o.indexOf(c)!==-1),l={...t,...e};for(const c of a){const d=Au(t[c],e[c]);if(!d.valid)return{valid:!1};l[c]=d.data}return{valid:!0,data:l}}else if(n===fe.array&&i===fe.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let a=0;a<t.length;a++){const l=t[a],c=e[a],d=Au(l,c);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===fe.date&&i===fe.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Xs extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=(a,l)=>{if(Su(a)||Su(l))return Ie;const c=Au(a.value,l.value);return c.valid?((Tu(a)||Tu(l))&&n.dirty(),{status:n.value,value:c.data}):(pe(i,{code:re.invalid_intersection_types}),Ie)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Xs.create=(t,e,n)=>new Xs({left:t,right:e,typeName:Se.ZodIntersection,...Le(n)});class Yn extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.array)return pe(i,{code:re.invalid_type,expected:fe.array,received:i.parsedType}),Ie;if(i.data.length<this._def.items.length)return pe(i,{code:re.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ie;!this._def.rest&&i.data.length>this._def.items.length&&(pe(i,{code:re.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,c)=>{const d=this._def.items[c]||this._def.rest;return d?d._parse(new Qn(i,l,i.path,c)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Bt.mergeArray(n,l)):Bt.mergeArray(n,a)}get items(){return this._def.items}rest(e){return new Yn({...this._def,rest:e})}}Yn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Yn({items:t,typeName:Se.ZodTuple,rest:null,...Le(e)})};class eo extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.object)return pe(i,{code:re.invalid_type,expected:fe.object,received:i.parsedType}),Ie;const o=[],a=this._def.keyType,l=this._def.valueType;for(const c in i.data)o.push({key:a._parse(new Qn(i,c,i.path,c)),value:l._parse(new Qn(i,i.data[c],i.path,c))});return i.common.async?Bt.mergeObjectAsync(n,o):Bt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,i){return n instanceof Ne?new eo({keyType:e,valueType:n,typeName:Se.ZodRecord,...Le(i)}):new eo({keyType:Mn.create(),valueType:e,typeName:Se.ZodRecord,...Le(n)})}}class Ha extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.map)return pe(i,{code:re.invalid_type,expected:fe.map,received:i.parsedType}),Ie;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([c,d],f)=>({key:o._parse(new Qn(i,c,i.path,[f,"key"])),value:a._parse(new Qn(i,d,i.path,[f,"value"]))}));if(i.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,p=await d.value;if(f.status==="aborted"||p.status==="aborted")return Ie;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),c.set(f.value,p.value)}return{status:n.value,value:c}})}else{const c=new Map;for(const d of l){const f=d.key,p=d.value;if(f.status==="aborted"||p.status==="aborted")return Ie;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),c.set(f.value,p.value)}return{status:n.value,value:c}}}}Ha.create=(t,e,n)=>new Ha({valueType:e,keyType:t,typeName:Se.ZodMap,...Le(n)});class xi extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.set)return pe(i,{code:re.invalid_type,expected:fe.set,received:i.parsedType}),Ie;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(pe(i,{code:re.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(pe(i,{code:re.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const p of d){if(p.status==="aborted")return Ie;p.status==="dirty"&&n.dirty(),f.add(p.value)}return{status:n.value,value:f}}const c=[...i.data.values()].map((d,f)=>a._parse(new Qn(i,d,i.path,f)));return i.common.async?Promise.all(c).then(d=>l(d)):l(c)}min(e,n){return new xi({...this._def,minSize:{value:e,message:we.toString(n)}})}max(e,n){return new xi({...this._def,maxSize:{value:e,message:we.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}xi.create=(t,e)=>new xi({valueType:t,minSize:null,maxSize:null,typeName:Se.ZodSet,...Le(e)});class Gi extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.function)return pe(n,{code:re.invalid_type,expected:fe.function,received:n.parsedType}),Ie;function i(c,d){return Da({data:c,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Na(),Ks].filter(f=>!!f),issueData:{code:re.invalid_arguments,argumentsError:d}})}function o(c,d){return Da({data:c,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Na(),Ks].filter(f=>!!f),issueData:{code:re.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;if(this._def.returns instanceof rs){const c=this;return zt(async function(...d){const f=new Bn([]),p=await c._def.args.parseAsync(d,a).catch(w=>{throw f.addIssue(i(d,w)),f}),g=await Reflect.apply(l,this,p);return await c._def.returns._def.type.parseAsync(g,a).catch(w=>{throw f.addIssue(o(g,w)),f})})}else{const c=this;return zt(function(...d){const f=c._def.args.safeParse(d,a);if(!f.success)throw new Bn([i(d,f.error)]);const p=Reflect.apply(l,this,f.data),g=c._def.returns.safeParse(p,a);if(!g.success)throw new Bn([o(p,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Gi({...this._def,args:Yn.create(e).rest(bi.create())})}returns(e){return new Gi({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,i){return new Gi({args:e||Yn.create([]).rest(bi.create()),returns:n||bi.create(),typeName:Se.ZodFunction,...Le(i)})}}class to extends Ne{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}to.create=(t,e)=>new to({getter:t,typeName:Se.ZodLazy,...Le(e)});class no extends Ne{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return pe(n,{received:n.data,code:re.invalid_literal,expected:this._def.value}),Ie}return{status:"valid",value:e.data}}get value(){return this._def.value}}no.create=(t,e)=>new no({value:t,typeName:Se.ZodLiteral,...Le(e)});function Y1(t,e){return new Kr({values:t,typeName:Se.ZodEnum,...Le(e)})}class Kr extends Ne{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),i=this._def.values;return pe(n,{expected:Ge.joinValues(i),received:n.parsedType,code:re.invalid_type}),Ie}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),i=this._def.values;return pe(n,{received:n.data,code:re.invalid_enum_value,options:i}),Ie}return zt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Kr.create(e)}exclude(e){return Kr.create(this.options.filter(n=>!e.includes(n)))}}Kr.create=Y1;class ro extends Ne{_parse(e){const n=Ge.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==fe.string&&i.parsedType!==fe.number){const o=Ge.objectValues(n);return pe(i,{expected:Ge.joinValues(o),received:i.parsedType,code:re.invalid_type}),Ie}if(n.indexOf(e.data)===-1){const o=Ge.objectValues(n);return pe(i,{received:i.data,code:re.invalid_enum_value,options:o}),Ie}return zt(e.data)}get enum(){return this._def.values}}ro.create=(t,e)=>new ro({values:t,typeName:Se.ZodNativeEnum,...Le(e)});class rs extends Ne{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.promise&&n.common.async===!1)return pe(n,{code:re.invalid_type,expected:fe.promise,received:n.parsedType}),Ie;const i=n.parsedType===fe.promise?n.data:Promise.resolve(n.data);return zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}rs.create=(t,e)=>new rs({type:t,typeName:Se.ZodPromise,...Le(e)});class Nn extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Se.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=this._def.effect||null,a={addIssue:l=>{pe(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const l=o.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(l).then(c=>this._def.schema._parseAsync({data:c,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}if(o.type==="refinement"){const l=c=>{const d=o.refinement(c,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return c.status==="aborted"?Ie:(c.status==="dirty"&&n.dirty(),l(c.value),{status:n.value,value:c.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>c.status==="aborted"?Ie:(c.status==="dirty"&&n.dirty(),l(c.value).then(()=>({status:n.value,value:c.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Vs(l))return l;const c=o.transform(l.value,a);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:c}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Vs(l)?Promise.resolve(o.transform(l.value,a)).then(c=>({status:n.value,value:c})):l);Ge.assertNever(o)}}Nn.create=(t,e,n)=>new Nn({schema:t,typeName:Se.ZodEffects,effect:e,...Le(n)});Nn.createWithPreprocess=(t,e,n)=>new Nn({schema:e,effect:{type:"preprocess",transform:t},typeName:Se.ZodEffects,...Le(n)});class br extends Ne{_parse(e){return this._getType(e)===fe.undefined?zt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}br.create=(t,e)=>new br({innerType:t,typeName:Se.ZodOptional,...Le(e)});class $i extends Ne{_parse(e){return this._getType(e)===fe.null?zt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}$i.create=(t,e)=>new $i({innerType:t,typeName:Se.ZodNullable,...Le(e)});class io extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);let i=n.data;return n.parsedType===fe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}io.create=(t,e)=>new io({innerType:t,typeName:Se.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Le(e)});class Wa extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ua(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Wa.create=(t,e)=>new Wa({innerType:t,typeName:Se.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Le(e)});class qa extends Ne{_parse(e){if(this._getType(e)!==fe.nan){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.nan,received:i.parsedType}),Ie}return{status:"valid",value:e.data}}}qa.create=t=>new qa({typeName:Se.ZodNaN,...Le(t)});const dk=Symbol("zod_brand");class J1 extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class go extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ie:a.status==="dirty"?(n.dirty(),Q1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ie:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,n){return new go({in:e,out:n,typeName:Se.ZodPipeline})}}class Za extends Ne{_parse(e){const n=this._def.innerType._parse(e);return Vs(n)&&(n.value=Object.freeze(n.value)),n}}Za.create=(t,e)=>new Za({innerType:t,typeName:Se.ZodReadonly,...Le(e)});const X1=(t,e={},n)=>t?ns.create().superRefine((i,o)=>{var a,l;if(!t(i)){const c=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,d=(l=(a=c.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof c=="string"?{message:c}:c;o.addIssue({code:"custom",...f,fatal:d})}}):ns.create(),fk={object:dt.lazycreate};var Se;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(Se||(Se={}));const hk=(t,e={message:`Input not instance of ${t.name}`})=>X1(n=>n instanceof t,e),ev=Mn.create,tv=qr.create,pk=qa.create,gk=Zr.create,nv=Gs.create,vk=wi.create,mk=Fa.create,yk=Qs.create,bk=Ys.create,_k=ns.create,wk=bi.create,xk=xr.create,$k=za.create,Ek=jn.create,kk=dt.create,Ck=dt.strictCreate,Sk=Js.create,Tk=_l.create,Ak=Xs.create,Rk=Yn.create,Ik=eo.create,Ok=Ha.create,Lk=xi.create,Pk=Gi.create,Mk=to.create,Bk=no.create,jk=Kr.create,Nk=ro.create,Dk=rs.create,ng=Nn.create,Uk=br.create,Fk=$i.create,zk=Nn.createWithPreprocess,Hk=go.create,Wk=()=>ev().optional(),qk=()=>tv().optional(),Zk=()=>nv().optional(),Kk={string:t=>Mn.create({...t,coerce:!0}),number:t=>qr.create({...t,coerce:!0}),boolean:t=>Gs.create({...t,coerce:!0}),bigint:t=>Zr.create({...t,coerce:!0}),date:t=>wi.create({...t,coerce:!0})},Vk=Ie;var mt=Object.freeze({__proto__:null,defaultErrorMap:Ks,setErrorMap:J9,getErrorMap:Na,makeIssue:Da,EMPTY_PATH:X9,addIssueToContext:pe,ParseStatus:Bt,INVALID:Ie,DIRTY:Q1,OK:zt,isAborted:Su,isDirty:Tu,isValid:Vs,isAsync:Ua,get util(){return Ge},get objectUtil(){return Cu},ZodParsedType:fe,getParsedType:Dr,ZodType:Ne,ZodString:Mn,ZodNumber:qr,ZodBigInt:Zr,ZodBoolean:Gs,ZodDate:wi,ZodSymbol:Fa,ZodUndefined:Qs,ZodNull:Ys,ZodAny:ns,ZodUnknown:bi,ZodNever:xr,ZodVoid:za,ZodArray:jn,ZodObject:dt,ZodUnion:Js,ZodDiscriminatedUnion:_l,ZodIntersection:Xs,ZodTuple:Yn,ZodRecord:eo,ZodMap:Ha,ZodSet:xi,ZodFunction:Gi,ZodLazy:to,ZodLiteral:no,ZodEnum:Kr,ZodNativeEnum:ro,ZodPromise:rs,ZodEffects:Nn,ZodTransformer:Nn,ZodOptional:br,ZodNullable:$i,ZodDefault:io,ZodCatch:Wa,ZodNaN:qa,BRAND:dk,ZodBranded:J1,ZodPipeline:go,ZodReadonly:Za,custom:X1,Schema:Ne,ZodSchema:Ne,late:fk,get ZodFirstPartyTypeKind(){return Se},coerce:Kk,any:_k,array:Ek,bigint:gk,boolean:nv,date:vk,discriminatedUnion:Tk,effect:ng,enum:jk,function:Pk,instanceof:hk,intersection:Ak,lazy:Mk,literal:Bk,map:Ok,nan:pk,nativeEnum:Nk,never:xk,null:bk,nullable:Fk,number:tv,object:kk,oboolean:Zk,onumber:qk,optional:Uk,ostring:Wk,pipeline:Hk,preprocess:zk,promise:Dk,record:Ik,set:Lk,strictObject:Ck,string:ev,symbol:mk,transformer:ng,tuple:Rk,undefined:yk,union:Sk,unknown:wk,void:$k,NEVER:Vk,ZodIssueCode:re,quotelessJson:Y9,ZodError:Bn});const Gk=/^[0-9a-f]{64}$/,so=t=>{const e=typeof t=="string"&&t.length===64&&Gk.test(t);return e||console.warn("invalid id is ignored: ",t),e},Qk=t=>e=>t.safeParse(e).success,Yk=mt.tuple([mt.literal("emoji"),mt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),mt.string().url()]);class Jk{findTagsByName(e){return this.tags.filter(([n])=>n===e)}findFirstTagByName(e){return this.tags.find(([n])=>n===e)}findLastTagByName(e){return this.tags.findLast(([n])=>n===e)}pTags(){return this.tags.filter(([e,n])=>e==="p"&&so(n))}eTags(){return this.tags.filter(([e,n])=>e==="e"&&so(n))}emojiTags(){return this.tags.filter(Qk(Yk))}taggedPubkeys(){return mi(this.pTags().map(([,e])=>e))}taggedEventIds(){return this.eTags().map(([,e])=>e)}lastTaggedEventId(){const e=this.taggedEventIds();if(e.length!==0)return e[e.length-1]}getEmojiUrl(e){const n=this.emojiTags().find(([,o])=>o===e);if(n==null)return;const[,,i]=n;return i}}class yd extends Jk{constructor(e){super(),this.rawEvent=e}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const Xk=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,rg=/^:(\w+):$/,eC=t=>{if(t.isLikeOrDislike())return{type:"LikeDislike",content:t.content};if(t.isEmoji())return{type:"Emoji",content:t.content};if(t.isCustomEmoji()){const e=t.getShortcode(),n=t.getUrl();if(e!=null&&n!=null)return{type:"CustomEmoji",content:t.content,shortcode:e,url:n}}return{type:"Unknown",content:t.content}};class tC extends yd{constructor(e){if(e.kind!==ct.Reaction)throw new TypeError("kind should be 7");super(e)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return Xk.test(this.content)}isCustomEmoji(){return rg.test(this.content)}getShortcode(){return this.content.match(rg)?.[1]}getUrl(){const e=this.getShortcode();if(e!=null)return this.getEmojiUrl(e)}toReactionTypes(){return eC(this)}}const{decode:nC}=ho,rC=["reply","root","mention"],iC=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,sC=/(?:#\[(?<idx>\d+)\])/g,oC=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,aC=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,lC=/:(?<emoji>\w+):/gu,bd=t=>{const e=[...t.matchAll(iC),...t.matchAll(sC),...t.matchAll(oC),...t.matchAll(aC),...t.matchAll(lC)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=t.slice(n,a),c=i[i.length-1];if(c?.type==="PlainText")c.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return e.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const c={type:"URL",content:a.groups?.url};i.push(c)}else if(a.groups?.idx){const c=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:c,content:a[0]})}else if(a.groups?.mention){o(l);try{const c=nC(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:c,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const c=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:c};i.push(d)}else if(a.groups?.emoji){o(l);const c=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:c};i.push(d)}n=l+a[0].length}}),n<t.length&&o(t.length),i},cC=t=>t==null?!1:rC.includes(t),uC=(t,{tagIndex:e,content:n})=>{const i=t.tags[e];if(i==null)return;const o=i[0];if(o==="p"&&so(i[1]))return{type:"MentionedUser",tagIndex:e,content:n,pubkey:i[1]};if(o==="e"&&so(i[1])){const a=cC(i[3])?i[3]:void 0;return{type:"MentionedEvent",tagIndex:e,content:n,eventId:i[1],marker:a}}},rv=(t,e)=>t.map(n=>{if(n.type==="TagReference"){const i=uC(e,n);return{...n,type:"TagReferenceResolved",reference:i}}if(n.type==="CustomEmoji"){const i=e.getEmojiUrl(n.shortcode);return{...n,type:"CustomEmojiResolved",url:i}}return n}),dC=t=>{const e=t.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&so(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:e.length===1?"reply":o===0?"root":e.length===2||o===e.length-1?"reply":"mention";return e.map(([[,i,o,a],l],c)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,c),index:l}))};class fC extends yd{#e;#t;parsed(){if(this.#t!=null)return this.#t;const e=bd(this.content),n=rv(e,this);return this.#t=n,n}markedEventTags(){return this.#e!=null?this.#e:(this.#e=dC(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:e})=>e==="reply")}rootEvent(){return this.markedEventTags().find(({marker:e})=>e==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:e})=>e==="mention")}contentWarning(){const e=this.findLastTagByName("content-warning");return e==null?{contentWarning:!1}:{contentWarning:!0,reason:(e[1]?.length??0)>0?e[1]:void 0}}containsEventMention(e){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===e);return this.containsEventNote(e)||this.containsEventMentionIndex(n)}containsEventMentionIndex(e){return e<0||e>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReferenceResolved"&&n.tagIndex===e)}containsEventNote(e){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===e||n.data.type==="note"&&n.data.data===e))}}let hC=class extends fC{constructor(e){if(e.kind!==ct.Text)throw new TypeError("kind should be 1");super(e)}};const Ur=t=>new yd(t),iv=t=>new hC(t),Ka=t=>new tC(t),pC=()=>{const t=[...V9];return window.navigator.language.includes("ja")&&t.push(...G9),t},sv=()=>({relayUrls:pC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),gC=t=>JSON.stringify(t),vC=t=>({...sv(),...JSON.parse(t)}),mC=S4(()=>window.localStorage,gC,vC),[qi,Qt]=T4("RabbitConfig",sv(),mC),st=()=>{const t=A=>{Qt("relayUrls",E=>mi([...E,A]))},e=A=>{Qt("relayUrls",E=>E.filter(P=>P!==A))},n=A=>{Qt("mutedPubkeys",E=>mi([...E,A]))},i=A=>{Qt("mutedPubkeys",E=>E.filter(P=>P!==A))},o=A=>{Qt("mutedKeywords",E=>mi([...E,A]))},a=A=>{Qt("mutedKeywords",E=>E.filter(P=>P!==A))},l=A=>{Qt("columns",E=>{const P=E.findIndex(M=>M.id===A.id);if(P>=0){const M=[...E];return M.splice(P,1,A),M}return[...E,A]})},c=(A,E)=>{Qt("columns",P=>{const M=E-1,I=Math.max(Math.min(M,P.length),0),F=P.findIndex(ee=>ee.id===A);if(F<0||I===F)return P;console.log(F,I);const N=[...P],[K]=N.splice(F,1);return N.splice(I,0,K),N})},d=A=>{Qt("columns",E=>E.filter(P=>P.id!==A))},f=A=>{Qt("customEmojis",E=>({...E,[A.shortcode]:A}))},p=A=>{Qt("customEmojis",E=>{const P=Object.fromEntries(A.map(M=>[M.shortcode,M]));return{...E,...P}})},g=A=>{Qt("customEmojis",E=>({...E,[A]:void 0}))},m=A=>qi.customEmojis[A],w=A=>F1.sortBy(Object.values(qi.customEmojis).filter(({shortcode:E})=>E.includes(A)),[E=>E.shortcode.length]),b=A=>qi.mutedPubkeys.includes(A),$=A=>A.kind===ct.Text?qi.mutedKeywords.some(E=>A.content.includes(E)):!1;return{config:()=>qi,setConfig:Qt,addRelay:t,removeRelay:e,saveColumn:l,moveColumn:c,removeColumn:d,initializeColumns:({pubkey:A})=>{if((qi.columns?.length??0)>0)return;const E=[H1({width:"widest",pubkey:A}),W1({pubkey:A}),K1({name:"自分の投稿",pubkey:A}),V1({name:"自分のリアクション",pubkey:A})];navigator.language.includes("ja")&&E.splice(2,0,Z1()),Qt("columns",()=>[...E])},saveEmoji:f,saveEmojis:p,removeEmoji:g,getEmoji:m,searchEmojis:w,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:b,shouldMuteEvent:A=>{const E=Ur(A);return b(A.pubkey)||E.taggedPubkeys().some(b)||A.kind===ct.Text&&$(A)}}},_d=(t,e)=>{const n=t.created_at-e.created_at;return n!==0?n:t.id===e.id?0:t.id>e.id?1:-1},ov=t=>{if(t.length!==0)return t.length===1?t[0]:t.reduce((e,n)=>_d(e,n)>0?e:n)},Ru=t=>Array.from(t).sort((e,n)=>-_d(e,n)),[yC]=Te(new IE({eoseSubTimeout:12e3})),wd=()=>yC,[av,ig]=Yi({activeSubscriptions:0,activeBatchSubscriptions:0});b4(()=>{yr(()=>{console.debug("stats",{...av})})});const lv=()=>({stats:av,setActiveSubscriptions:n=>ig("activeSubscriptions",n),setActiveBatchSubscriptions:n=>ig("activeBatchSubscriptions",n)});let sg=0;const bC=()=>{const t=sg;return sg+=1,t};class _C{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(e){this.id=bC(),this.req=e}#n(e){this.#e.forEach(n=>{n(e)})}#r(){this.#t.forEach(e=>{e()})}update(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=e,this.#n(e)}updateWith(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(e(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(e){this.#e.push(e)}subscribe(e){this.onUpdate(e)}onComplete(e){this.#t.push(e)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const e=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([e,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((e,n)=>{this.onComplete(()=>{this.res!=null?e(this.res):n(new Error("result was not set"))})})}}const wC=t=>{const e=Ze(t),n=Ze(()=>e().batchSize??100),i=Ze(()=>e().interval??2e3),[o,a]=Te([]);let l;const c=()=>{const{executor:g}=e(),m=o();m.length>0&&(a([]),g(m)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{c()},i()))};return{addTask:g=>{o().length<n()?a(m=>[...m,g]):(c(),a([g])),d()},removeTask:g=>{a(m=>m.filter(w=>w!==g))}}};class vs extends _C{addEvent(e){this.updateWith(n=>dd.insertEventIntoDescendingList(n??[],e))}firstEventPromise(){return this.toUpdatePromise().then(e=>e[0])}latestEventPromise(){return this.toCompletePromise().then(e=>{const n=ov(e);if(n==null)throw new Error("event not found");return n})}}const li=t=>e=>e.req.type===t;let Iu=0;const{setActiveBatchSubscriptions:xC}=lv();setInterval(()=>{xC(Iu)},1e3);const $C=t=>t.kind>=3e4&&t.kind<4e4,og=({kind:t,author:e,identifier:n})=>`${t}:${e}:${n}`,ci=({keyExtractor:t,filtersBuilder:e,eventKeyExtractor:n})=>{const i=new Map;return{tasks:i,add:c=>{const d=t(c.req),f=i.get(d)??[];i.set(d,[...f,c])},buildFilter:()=>{const c=Array.from(i.keys());return c.length===0?[]:e(c)},resolve:c=>{const d=n(c);if(d==null)return!1;const f=i.get(d)??[];return f.length===0?!1:(f.forEach(p=>{p.addEvent(c)}),!0)}}},EC=t=>{const e=ci({keyExtractor:g=>g.eventId,filtersBuilder:g=>[{ids:g}],eventKeyExtractor:g=>g.id}),n=ci({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[ct.Metadata],authors:g}],eventKeyExtractor:g=>g.pubkey}),i=ci({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[ct.Contacts],authors:g}],eventKeyExtractor:g=>g.pubkey}),o=ci({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[ct.Repost],"#e":g}],eventKeyExtractor:g=>Ur(g).lastTaggedEventId()}),a=ci({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[ct.Reaction],"#e":g}],eventKeyExtractor:g=>Ur(g).lastTaggedEventId()}),l=ci({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[ct.Zap],"#e":g}],eventKeyExtractor:g=>Ur(g).lastTaggedEventId()}),c=ci({keyExtractor:og,filtersBuilder:g=>{const m=[];return g.forEach(w=>{const b=c.tasks.get(w)?.[0];if(b==null)return;const{kind:$,author:x,identifier:C}=b.req;m.push({kinds:[$],authors:[x],"#d":[C]})}),m},eventKeyExtractor:g=>{const m=Ur(g).findFirstTagByName("d")?.[1];if(m!=null)return og({kind:g.kind,author:g.pubkey,identifier:m})}}),d=g=>{if(li("Event")(g))e.add(g);else if(li("Profile")(g))n.add(g);else if(li("Followings")(g))i.add(g);else if(li("Reposts")(g))o.add(g);else if(li("Reactions")(g))a.add(g);else if(li("ZapReceipts")(g))l.add(g);else if(li("ParameterizedReplaceableEvent")(g))c.add(g);else throw new Error(`unknown task: ${g.req.type}`)},f=()=>[...e.buildFilter(),...n.buildFilter(),...i.buildFilter(),...o.buildFilter(),...a.buildFilter(),...l.buildFilter(),...c.buildFilter()],p=g=>{g.kind===ct.Metadata&&n.resolve(g)||g.kind===ct.Contacts&&i.resolve(g)||g.kind===ct.Repost&&o.resolve(g)||g.kind===ct.Reaction&&a.resolve(g)||g.kind===ct.Zap&&l.resolve(g)||$C(g)&&c.resolve(g)||e.resolve(g)};return t.forEach(g=>{d(g)}),{tasks:{eventTasks:e,profileTasks:n,followingsTasks:i,repostsTasks:o,reactionsTasks:a,zapReceiptsTasks:l,parameterizedReplaceableEventsTasks:c},add:d,buildFilters:f,resolve:p}},{addTask:kC,removeTask:CC}=wC(()=>({interval:2e3,batchSize:150,executor:t=>{const e=EC(t),n=e.buildFilters();if(n.length===0)return;const i=()=>{t.forEach(c=>{c.complete()})},{config:o}=st(),l=wd()().sub(o().relayUrls,n,{});Iu+=1,l.on("event",c=>{e.resolve(c)}),l.on("eose",()=>{i(),l.unsub(),Iu-=1})}})),wl=({task:t,signal:e})=>{kC(t),e?.addEventListener("abort",()=>CC(t))};class SC extends Error{}const Hr=(t,e)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=e!=null?`TimeoutError: ${e}`:"TimeoutError";a(new SC(l))},t)});return Promise.race([n,i])},TC=t=>{const e=Ze(t),n=cs(()=>["useEvent",e()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:c}=l,d=new vs({type:"Event",eventId:c}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${c}`)});return wl({task:d,signal:a}),Hr(15e3,`useEvent: ${c}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},xn=t=>e=>t.some(n=>n==null)?null:e(t),AC=B("<span>"),RC=B('<div class="truncate"> '),oo=t=>{const e=yt(),[n,i]=_4(t,["eventId"]),{shouldMuteEvent:o}=st(),{event:a,query:l}=TC(()=>xn([n.eventId])(([d])=>({eventId:d}))),c=()=>{const d=a();return d!=null&&o(d)};return S(Pn,{get fallback(){return(()=>{const d=AC();return k(d,()=>e()("post.failedToFetchEvent"),null),k(d,()=>t.eventId,null),d})()},get children(){return[S(Ye,{get when(){return c()},children:null}),S(Ye,{get when(){return a()},keyed:!0,children:d=>S(nm,w4({event:d},i))}),S(Ye,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=RC(),p=f.firstChild;return k(f,()=>e()("general.loading"),p),k(f,S(Zs,{eventId:d}),null),f})()})]}})},IC=t=>{if(t==null||t.length===0)throw new TypeError("content is empty or null");return JSON.parse(t)},OC=t=>{try{return IC(t)}catch(e){return console.warn("failed to parse profile (kind 0): ",e,t),null}},cv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve(null);const l=a.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return a.onUpdate(c=>{const d=ov(c);o==null||d!=null&&_d(d,o)>=0?e.setQueryData(n,d):console.log("old event",o,d)}),wl({task:a,signal:i}),Hr(15e3,`${JSON.stringify(n)}`)(l)},uv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve([]);const l=a.toUpdatePromise().catch(()=>[]);return a.onUpdate(c=>{e.setQueryData(n,()=>{if(o==null)return c;const d=F1.uniqBy([...o,...c],f=>f.id);return Ru(d)})}),wl({task:a,signal:i}),Hr(15e3,`${JSON.stringify(n)}`)(l)},ms=t=>{const e=ls(),n=Ze(t),i=Ze(()=>["useProfile",n()]),o=cs(i,cv({taskProvider:([,d])=>{if(d==null)return null;const{pubkey:f}=d;return new vs({type:"Profile",pubkey:f})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1}),a=()=>o.data;return{profile:Ze(()=>{if(o.data==null)return null;const{content:d}=o.data;return OC(d)}),event:a,invalidateProfile:()=>e.invalidateQueries(i()),query:o}},{npubEncode:LC}=ho,vo=t=>{try{return LC(t)}catch{return console.error("failed to encode pubkey into npub",t),t}},xd=t=>{const{profile:e}=ms(()=>({pubkey:t.pubkey}));return S(Pn,{get fallback(){return vo(t.pubkey)},get children(){return[S(Ye,{get when(){return(e()?.display_name?.length??0)>0},get children(){return e()?.display_name}}),S(Ye,{get when(){return(e()?.name?.length??0)>0},get children(){return["@",Ze(()=>e()?.name)]}})]}})},dv=t=>{const[e,n]=Te(new Date);return yr(()=>{const i=setInterval(()=>{n(new Date)},t().interval);_r(()=>clearInterval(i))}),e},PC=t=>{switch(t.kind){case"now":return"now";case"seconds":return`${t.value}s`;case"minutes":return`${t.value}m`;case"hours":return`${t.value}h`;case"days":return`${t.value}d`;case"abs":default:return t.value.toLocaleDateString()}},ag=t=>`${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`,MC=t=>{switch(t.kind){case"today":return t.value.toLocaleTimeString();case"yesterday":case"abs":default:return t.value.toLocaleString()}},BC=t=>{switch(t.kind){case"today":return ag(t.value);case"yesterday":return`昨日 ${ag(t.value)}`;case"abs":default:return t.value.toLocaleString()}},jC=(t,e)=>Math.round(Number(e)-Number(t))/1e3,NC=(t,e)=>{const n=jC(t,e);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:t}},lg=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),DC=t=>new Date(+t-24*60*60*1e3),fv=(t,e,n)=>lg(t,e)?n({kind:"today",value:t}):lg(t,DC(e))?n({kind:"yesterday",value:t}):n({kind:"abs",value:t}),UC=(t,e=new Date)=>fv(t,e,MC),FC=(t,e=new Date)=>fv(t,e,BC),cg=(t,e=new Date,n=PC)=>n(NC(t,e)),ug=dv(()=>({interval:7e3})),dg=dv(()=>({interval:60*1e3})),hv=()=>{const{config:t}=st();return e=>{switch(t().dateFormat){case"absolute-long":return UC(e,dg());case"absolute-short":return FC(e,dg());case"relative":return cg(e,ug());default:return cg(e,ug())}}},[zC,ui]=Te({type:"Closed"}),Gr=()=>({modalState:zC,setModalState:ui,showLogin:()=>{ui({type:"Login"})},showProfile:l=>{ui({type:"Profile",pubkey:l})},showProfileEdit:()=>{ui({type:"ProfileEdit"})},showAddColumn:()=>{ui({type:"AddColumn"})},showAbout:()=>{ui({type:"About"})},closeModal:()=>{ui({type:"Closed"})}}),HC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="select-text hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),WC=t=>{const e=yt(),{showProfile:n}=Gr(),i=hv(),o=Ze(()=>Ur(t.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=HC(),c=l.firstChild,d=c.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,m=c.nextSibling;return k(d,S(U1,{})),p.$$click=()=>n(t.event.pubkey),k(p,S(xd,{get pubkey(){return t.event.pubkey}})),k(f,()=>e()("notification.reposted"),null),k(g,()=>i(o().createdAtAsDate())),k(m,S(oo,{get eventId(){return a()}})),l})()};vt(["click"]);const qC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),ZC=(t={})=>(()=>{const e=qC();return it(e,t,!0,!0),e})(),KC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),pv=(t={})=>(()=>{const e=KC();return it(e,t,!0,!0),e})(),VC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),gv=(t={})=>(()=>{const e=VC();return it(e,t,!0,!0),e})(),GC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),vv=(t={})=>(()=>{const e=GC();return it(e,t,!0,!0),e})(),QC=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),mv=(t={})=>(()=>{const e=QC();return it(e,t,!0,!0),e})(),YC=B('<div class="absolute z-20">'),JC=B('<div><button type="button" class="flex items-center">'),$d=t=>{let e,n;const[i,o]=Te(!1),[a,l]=Te({}),c=x4(()=>t.children),d=()=>o(!1),f=()=>o(b=>!b),p=b=>{const $=b.target;$!=null&&!n?.contains($)&&d()},g=()=>{document.addEventListener("mousedown",p)},m=()=>{document.removeEventListener("mousedown",p)},w=()=>{if(e==null||n==null)return;const b=e?.getBoundingClientRect(),$=n?.getBoundingClientRect();let{top:x,left:C}=b;t.position==="left"?C-=b.width:t.position==="right"?C+=b.width:t.position==="top"?(x-=b.height,C-=b.left+b.width/2):(x+=b.height,C+=b.width/2),x=Math.min(x,window.innerHeight-$.height),C=Math.min(C,window.innerWidth-$.width),l({left:`${C}px`,top:`${x}px`})};return yr(()=>{i()?(g(),t.onOpen?.()):(m(),t.onClose?.())}),yr(rl(c,()=>{w()})),yr(()=>{i()&&w()}),Jn(()=>{t.ref?.({close:d,elem:n})}),_r(()=>m()),(()=>{const b=JC(),$=b.firstChild;$.$$click=()=>{f(),w()};const x=e;return typeof x=="function"?Vn(x,$):e=$,k($,()=>t.button),k(b,S(E4,{get children(){const C=YC(),A=n;return typeof A=="function"?Vn(A,C):n=C,k(C,c),Me(E=>{const P=!i(),M=!!i(),I=a();return P!==E._v$&&C.classList.toggle("hidden",E._v$=P),M!==E._v$2&&C.classList.toggle("block",E._v$2=M),E._v$3=$4(C,I,E._v$3),E},{_v$:void 0,_v$2:void 0,_v$3:void 0}),C}}),null),b})()};vt(["click"]);const XC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),eS=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),tS=t=>{const e=()=>{t.item?.onSelect?.(),t.onClose()};return(()=>{const n=XC(),i=n.firstChild;return i.$$click=e,k(i,()=>t.item.content()),n})()},yv=t=>{let e;const n=()=>e?.close();return S($d,{ref:i=>{e=i},get button(){return t.children},position:"bottom",get children(){const i=eS();return k(i,S(Ft,{get each(){return t.menu.filter(o=>o.when==null||o.when())},children:o=>S(tS,{item:o,onClose:n})})),i}})};vt(["click"]);const nS=B('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),fg=B('<span class="truncate">'),rS=B('<img class="h-4 max-w-[3rem]">'),iS=t=>t.type==="LikeDislike"&&t.content==="+",bv=t=>S(Pn,{get fallback(){return(()=>{const e=fg();return k(e,()=>t.reactionTypes.content),e})()},get children(){return[S(Ye,{get when(){return iS(t.reactionTypes)},get children(){const e=nS();return k(e,S(mv,{})),e}}),S(Ye,{get when(){return t.reactionTypes.type==="Emoji"&&t.reactionTypes},keyed:!0,children:({content:e})=>(()=>{const n=fg();return k(n,e),n})()}),S(Ye,{get when(){return t.reactionTypes.type==="CustomEmoji"&&t.reactionTypes},keyed:!0,children:({shortcode:e,url:n})=>(()=>{const i=rS();return Ue(i,"src",n),Ue(i,"alt",`:${e}:`),i})()})]}});function _v(t){return t&&t.__esModule?t.default:t}function Ln(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var xl,Ee,wv,Us,xv,hg,Va={},$v=[],sS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fr(t,e){for(var n in e)t[n]=e[n];return t}function Ev(t){var e=t.parentNode;e&&e.removeChild(t)}function Ou(t,e,n){var i,o,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?o=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?xl.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return ka(t,l,i,o,null)}function ka(t,e,n,i,o){var a={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++wv};return o==null&&Ee.vnode!=null&&Ee.vnode(a),a}function gr(){return{current:null}}function is(t){return t.children}function Kn(t,e){this.props=t,this.context=e}function ss(t,e){if(e==null)return t.__?ss(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?ss(t):null}function kv(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return kv(t)}}function pg(t){(!t.__d&&(t.__d=!0)&&Us.push(t)&&!Ga.__r++||hg!==Ee.debounceRendering)&&((hg=Ee.debounceRendering)||xv)(Ga)}function Ga(){for(var t;Ga.__r=Us.length;)t=Us.sort(function(e,n){return e.__v.__b-n.__v.__b}),Us=[],t.some(function(e){var n,i,o,a,l,c;e.__d&&(l=(a=(n=e).__v).__e,(c=n.__P)&&(i=[],(o=Fr({},a)).__v=a.__v+1,Ed(c,a,o,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??ss(a),a.__h),Av(i,a),a.__e!=l&&kv(a)))})}function Cv(t,e,n,i,o,a,l,c,d,f){var p,g,m,w,b,$,x,C=i&&i.__k||$v,A=C.length;for(n.__k=[],p=0;p<e.length;p++)if((w=n.__k[p]=(w=e[p])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?ka(null,w,null,null,w):Array.isArray(w)?ka(is,{children:w},null,null,null):w.__b>0?ka(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(m=C[p])===null||m&&w.key==m.key&&w.type===m.type)C[p]=void 0;else for(g=0;g<A;g++){if((m=C[g])&&w.key==m.key&&w.type===m.type){C[g]=void 0;break}m=null}Ed(t,w,m=m||Va,o,a,l,c,d,f),b=w.__e,(g=w.ref)&&m.ref!=g&&(x||(x=[]),m.ref&&x.push(m.ref,null,w),x.push(g,w.__c||b,w)),b!=null?($==null&&($=b),typeof w.type=="function"&&w.__k===m.__k?w.__d=d=Sv(w,d,t):d=Tv(t,w,m,C,b,d),typeof n.type=="function"&&(n.__d=d)):d&&m.__e==d&&d.parentNode!=t&&(d=ss(m))}for(n.__e=$,p=A;p--;)C[p]!=null&&(typeof n.type=="function"&&C[p].__e!=null&&C[p].__e==n.__d&&(n.__d=ss(i,p+1)),Iv(C[p],C[p]));if(x)for(p=0;p<x.length;p++)Rv(x[p],x[++p],x[++p])}function Sv(t,e,n){for(var i,o=t.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=t,e=typeof i.type=="function"?Sv(i,e,n):Tv(n,i,i,o,i.__e,e));return e}function Qa(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Qa(n,e)}):e.push(t)),e}function Tv(t,e,n,i,o,a){var l,c,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(o),l=null;else{for(c=a,d=0;(c=c.nextSibling)&&d<i.length;d+=2)if(c==o)break e;t.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function oS(t,e,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in e||Ya(t,a,null,n[a],i);for(a in e)o&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||Ya(t,a,e[a],n[a],i)}function gg(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||sS.test(e)?n:n+"px"}function Ya(t,e,n,i,o){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||gg(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||gg(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?i||t.addEventListener(e,a?mg:vg,a):t.removeEventListener(e,a?mg:vg,a);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function vg(t){this.l[t.type+!1](Ee.event?Ee.event(t):t)}function mg(t){this.l[t.type+!0](Ee.event?Ee.event(t):t)}function Ed(t,e,n,i,o,a,l,c,d){var f,p,g,m,w,b,$,x,C,A,E,P=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,c=e.__e=n.__e,e.__h=null,a=[c]),(f=Ee.__b)&&f(e);try{e:if(typeof P=="function"){if(x=e.props,C=(f=P.contextType)&&i[f.__c],A=f?C?C.props.value:f.__:i,n.__c?$=(p=e.__c=n.__c).__=p.__E:("prototype"in P&&P.prototype.render?e.__c=p=new P(x,A):(e.__c=p=new Kn(x,A),p.constructor=P,p.render=lS),C&&C.sub(p),p.props=x,p.state||(p.state={}),p.context=A,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),P.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Fr({},p.__s)),Fr(p.__s,P.getDerivedStateFromProps(x,p.__s))),m=p.props,w=p.state,g)P.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(P.getDerivedStateFromProps==null&&x!==m&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,A),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,A)===!1||e.__v===n.__v){p.props=x,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(M){M&&(M.__=e)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,A),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(m,w,b)})}p.context=A,p.props=x,p.state=p.__s,(f=Ee.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Fr(Fr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(b=p.getSnapshotBeforeUpdate(m,w)),E=f!=null&&f.type===is&&f.key==null?f.props.children:f,Cv(t,Array.isArray(E)?E:[E],e,n,i,o,a,l,c,d),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),$&&(p.__E=p.__=null),p.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=aS(n.__e,e,n,i,o,a,l,d);(f=Ee.diffed)&&f(e)}catch(M){e.__v=null,(d||a!=null)&&(e.__e=c,e.__h=!!d,a[a.indexOf(c)]=null),Ee.__e(M,e,n)}}function Av(t,e){Ee.__c&&Ee.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){Ee.__e(i,n.__v)}})}function aS(t,e,n,i,o,a,l,c){var d,f,p,g=n.props,m=e.props,w=e.type,b=0;if(w==="svg"&&(o=!0),a!=null){for(;b<a.length;b++)if((d=a[b])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){t=d,a[b]=null;break}}if(t==null){if(w===null)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,m.is&&m),a=null,c=!1}if(w===null)g===m||c&&t.data===m||(t.data=m);else{if(a=a&&xl.call(t.childNodes),f=(g=n.props||Va).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(a!=null)for(g={},b=0;b<t.attributes.length;b++)g[t.attributes[b].name]=t.attributes[b].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(oS(t,m,g,o,c),p)e.__k=[];else if(b=e.props.children,Cv(t,Array.isArray(b)?b:[b],e,n,i,o&&w!=="foreignObject",a,l,a?a[0]:n.__k&&ss(n,0),c),a!=null)for(b=a.length;b--;)a[b]!=null&&Ev(a[b]);c||("value"in m&&(b=m.value)!==void 0&&(b!==g.value||b!==t.value||w==="progress"&&!b)&&Ya(t,"value",b,g.value,!1),"checked"in m&&(b=m.checked)!==void 0&&b!==t.checked&&Ya(t,"checked",b,g.checked,!1))}return t}function Rv(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){Ee.__e(i,n)}}function Iv(t,e,n){var i,o;if(Ee.unmount&&Ee.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||Rv(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){Ee.__e(a,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&Iv(i[o],e,typeof t.type!="function");n||t.__e==null||Ev(t.__e),t.__e=t.__d=void 0}function lS(t,e,n){return this.constructor(t,n)}function Ov(t,e,n){var i,o,a;Ee.__&&Ee.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,a=[],Ed(e,t=(!i&&n||e).__k=Ou(is,null,[t]),o||Va,Va,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?xl.call(e.childNodes):null,a,!i&&n?n:o?o.__e:e.firstChild,i),Av(a,t)}xl=$v.slice,Ee={__e:function(t,e){for(var n,i,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(a){t=a}throw t}},wv=0,Kn.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fr({},this.state),typeof t=="function"&&(t=t(Fr({},n),this.props)),t&&Fr(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),pg(this))},Kn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),pg(this))},Kn.prototype.render=is,Us=[],xv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ga.__r=0;var cS=0;function V(t,e,n,i,o){var a,l,c={};for(l in e)l=="ref"?a=e[l]:c[l]=e[l];var d={type:t,props:c,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--cS,__source:i,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)c[l]===void 0&&(c[l]=a[l]);return Ee.vnode&&Ee.vnode(d),d}function uS(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function dS(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var Wr={set:uS,get:dS};const ru=new Map,fS=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function hS(){for(const{v:t,emoji:e}of fS)if(Lv(e))return t}function pS(){return!Lv("🇨🇦")}function Lv(t){if(ru.has(t))return ru.get(t);const e=gS(t);return ru.set(t,e),e}const gS=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,i=Math.floor(e/2);return t.font=i+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,o=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(o,0,22),t.fillStyle="#0000FF",t.fillText(o,n,22);const a=t.getImageData(0,0,n,e).data,l=a.length;let c=0;for(;c<l&&!a[c+3];c+=4);if(c>=l)return!1;const d=n+c/4%n,f=Math.floor(c/4/n),p=t.getImageData(d,f,1,1).data;return!(a[c]!==p[0]||a[c+2]!==p[2]||t.measureText(o).width>=n)}})();var yg={latestVersion:hS,noCountryFlags:pS};const Lu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function vS(t){It||(It=Wr.get("frequently")||{});const e=t.id||t;e&&(It[e]||(It[e]=0),It[e]+=1,Wr.set("last",e),Wr.set("frequently",It))}function mS({maxFrequentRows:t,perLine:e}){if(!t)return[];It||(It=Wr.get("frequently"));let n=[];if(!It){It={};for(let a in Lu.slice(0,e)){const l=Lu[a];It[l]=e-a,n.push(l)}return n}const i=t*e,o=Wr.get("last");for(let a in It)n.push(a);if(n.sort((a,l)=>{const c=It[l],d=It[a];return c==d?a.localeCompare(l):c-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete It[l];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),Wr.set("frequently",It)}return n}var Pv={add:vS,get:mS,DEFAULTS:Lu},Mv={};Mv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var mr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Mt=null,ze=null;const iu={};async function bg(t){if(iu[t])return iu[t];const n=await(await fetch(t)).json();return iu[t]=n,n}let su=null,Bv=null,jv=!1;function $l(t,{caller:e}={}){return su||(su=new Promise(n=>{Bv=n})),t?yS(t):e&&!jv&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),su}async function yS(t){jv=!0;let{emojiVersion:e,set:n,locale:i}=t;if(e||(e=mr.emojiVersion.value),n||(n=mr.set.value),i||(i=mr.locale.value),ze)ze.categories=ze.categories.filter(d=>!d.name);else{ze=(typeof t.data=="function"?await t.data():t.data)||await bg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),ze.emoticons={},ze.natives={},ze.categories.unshift({id:"frequent",emojis:[]});for(const d in ze.aliases){const f=ze.aliases[d],p=ze.emojis[f];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}ze.originalCategories=ze.categories}if(Mt=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(i=="en"?_v(Mv):await bg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),t.custom)for(let d in t.custom){d=parseInt(d);const f=t.custom[d],p=t.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Mt.categories.custom),p&&!f.icon&&(f.target=p.target||p),ze.categories.push(f);for(const g of f.emojis)ze.emojis[g.id]=g}}t.categories&&(ze.categories=ze.originalCategories.filter(d=>t.categories.indexOf(d.id)!=-1).sort((d,f)=>{const p=t.categories.indexOf(d.id),g=t.categories.indexOf(f.id);return p-g}));let o=null,a=null;n=="native"&&(o=yg.latestVersion(),a=t.noCountryFlags||yg.noCountryFlags());let l=ze.categories.length,c=!1;for(;l--;){const d=ze.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:m}=t;g=g>=0?g:mr.maxFrequentRows.value,m||(m=mr.perLine.value),d.emojis=Pv.get({maxFrequentRows:g,perLine:m})}if(!d.emojis||!d.emojis.length){ze.categories.splice(l,1);continue}const{categoryIcons:f}=t;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],m=g.id?g:ze.emojis[g],w=()=>{d.emojis.splice(p,1)};if(!m||t.exceptEmojis&&t.exceptEmojis.includes(m.id)){w();continue}if(o&&m.version>o){w();continue}if(a&&d.id=="flags"&&!$S.includes(m.id)){w();continue}if(!m.search){if(c=!0,m.search=","+[[m.id,!1],[m.name,!0],[m.keywords,!1],[m.emoticons,!1]].map(([$,x])=>{if($)return(Array.isArray($)?$:[$]).map(C=>(x?C.split(/[-|_|\s]+/):[C]).map(A=>A.toLowerCase())).flat()}).flat().filter($=>$&&$.trim()).join(","),m.emoticons)for(const $ of m.emoticons)ze.emoticons[$]||(ze.emoticons[$]=m.id);let b=0;for(const $ of m.skins){if(!$)continue;b++;const{native:x}=$;x&&(ze.natives[x]=m.id,m.search+=`,${x}`);const C=b==1?"":`:skin-tone-${b}:`;$.shortcodes=`:${m.id}:${C}`}}}}c&&Qi.reset(),Bv()}function Nv(t,e,n){t||(t={});const i={};for(let o in e)i[o]=Dv(o,t,e,n);return i}function Dv(t,e,n,i){const o=n[t];let a=i&&i.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const bS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Pu=null;function _S(t){return t.id?t:ze.emojis[t]||ze.emojis[ze.aliases[t]]||ze.emojis[ze.natives[t]]}function wS(){Pu=null}async function xS(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await $l(null,{caller:n||"SearchIndex.search"});const i=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((c,d,f)=>c.trim()&&f.indexOf(c)==d);if(!i.length)return;let o=Pu||(Pu=Object.values(ze.emojis)),a,l;for(const c of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${c}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==c?0:f+1)}o=a}return a.length<2||(a.sort((c,d)=>{const f=l[c.id],p=l[d.id];return f==p?c.id.localeCompare(d.id):f-p}),a.length>e&&(a=a.slice(0,e))),a}var Qi={search:xS,get:_S,reset:wS,SHORTCODES_REGEX:bS};const $S=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function ES(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,i)=>n==e[i])}async function kS(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function CS(t,{skinIndex:e=0}={}){const n=t.skins[e]||(()=>(e=0,t.skins[e]))(),i={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(i.skin=e+1),n.src&&(i.src=n.src),t.aliases&&t.aliases.length&&(i.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(i.emoticons=t.emoticons),i}const SS={activity:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:V("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),V("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),V("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:V("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),V("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:V("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),V("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),V("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},TS={loupe:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:V("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:V("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ja={categories:SS,search:TS};function Mu(t){let{id:e,skin:n,emoji:i}=t;if(t.shortcodes){const c=t.shortcodes.match(Qi.SHORTCODES_REGEX);c&&(e=c[1],c[2]&&(n=c[2]))}if(i||(i=Qi.get(e||t.native)),!i)return t.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/64/${o.unified}.png`:void 0),l=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/sheets-256/64.png`;return V("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:a?V("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):t.set=="native"?V("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):V("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${l})`,backgroundSize:`${100*ze.sheet.cols}% ${100*ze.sheet.rows}%`,backgroundPosition:`${100/(ze.sheet.cols-1)*o.x}% ${100/(ze.sheet.rows-1)*o.y}%`}})})}const AS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Uv extends AS{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,i){if(!this.component)return;const o=Dv(e,{[e]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:o}):(this.component.props[e]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const i=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class RS extends Uv{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var Fv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:mr.set,skin:mr.skin};class zv extends Uv{async connectedCallback(){const e=Nv(this.props,Fv,this);e.element=this,e.ref=n=>{this.component=n},await $l(),!this.disconnected&&Ov(V(Mu,{...e}),this)}constructor(e){super(e)}}Ln(zv,"Props",Fv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",zv);var _g,Bu=[],wg=Ee.__b,xg=Ee.__r,$g=Ee.diffed,Eg=Ee.__c,kg=Ee.unmount;function IS(){var t;for(Bu.sort(function(e,n){return e.__v.__b-n.__v.__b});t=Bu.pop();)if(t.__P)try{t.__H.__h.forEach(Ca),t.__H.__h.forEach(ju),t.__H.__h=[]}catch(e){t.__H.__h=[],Ee.__e(e,t.__v)}}Ee.__b=function(t){wg&&wg(t)},Ee.__r=function(t){xg&&xg(t);var e=t.__c.__H;e&&(e.__h.forEach(Ca),e.__h.forEach(ju),e.__h=[])},Ee.diffed=function(t){$g&&$g(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Bu.push(e)!==1&&_g===Ee.requestAnimationFrame||((_g=Ee.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),Cg&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);Cg&&(i=requestAnimationFrame(o))})(IS))},Ee.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Ca),n.__h=n.__h.filter(function(i){return!i.__||ju(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],Ee.__e(i,n.__v)}}),Eg&&Eg(t,e)},Ee.unmount=function(t){kg&&kg(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ca(i)}catch(o){e=o}}),e&&Ee.__e(e,n.__v))};var Cg=typeof requestAnimationFrame=="function";function Ca(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function ju(t){t.__c=t.__()}function OS(t,e){for(var n in e)t[n]=e[n];return t}function Sg(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function Xa(t){this.props=t}(Xa.prototype=new Kn).isPureReactComponent=!0,Xa.prototype.shouldComponentUpdate=function(t,e){return Sg(this.props,t)||Sg(this.state,e)};var Tg=Ee.__b;Ee.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Tg&&Tg(t)};var LS=Ee.__e;Ee.__e=function(t,e,n){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}LS(t,e,n)};var Ag=Ee.unmount;function ou(){this.__u=0,this.t=null,this.__b=null}function Hv(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function ya(){this.u=null,this.o=null}Ee.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Ag&&Ag(t)},(ou.prototype=new Kn).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Hv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(c):c())};n.__R=l;var c=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(m,w,b){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function($){return g($,w,b)}),m.__c&&m.__c.__P===w&&(m.__e&&b.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=b)),m}(f,f.__c.__P,f.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=e.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),t.then(l,l)},ou.prototype.componentWillUnmount=function(){this.t=[]},ou.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,c,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=OS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=c),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,c,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=e.__e&&Ou(is,null,t.fallback);return o&&(o.__h=null),[Ou(is,null,e.__e?null:t.children),o]};var Rg=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(ya.prototype=new Kn).__e=function(t){var e=this,n=Hv(e.__v),i=e.o.get(t);return i[0]++,function(o){var a=function(){e.props.revealOrder?(i.push(o),Rg(e,t,i)):o()};n?n(a):a()}},ya.prototype.render=function(t){this.u=null,this.o=new Map;var e=Qa(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},ya.prototype.componentDidUpdate=ya.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Rg(t,n,e)})};var PS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,MS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,BS=typeof document<"u",jS=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};Kn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Kn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Ig=Ee.event;function NS(){}function DS(){return this.cancelBubble}function US(){return this.defaultPrevented}Ee.event=function(t){return Ig&&(t=Ig(t)),t.persist=NS,t.isPropagationStopped=DS,t.isDefaultPrevented=US,t.nativeEvent=t};var Og={configurable:!0,get:function(){return this.class}},Lg=Ee.vnode;Ee.vnode=function(t){var e=t.type,n=t.props,i=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var a in i={},n){var l=n[a];BS&&a==="children"&&e==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+e)&&!jS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&MS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}e=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Qa(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),e=="select"&&i.defaultValue!=null&&(i.value=Qa(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),t.props=i,n.class!=n.className&&(Og.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Og))}t.$$typeof=PS,Lg&&Lg(t)};var Pg=Ee.__r;Ee.__r=function(t){Pg&&Pg(t),t.__c};const FS={light:"outline",dark:"solid"};class zS extends Xa{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return V("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return V("img",{src:n.src})}const i=Ja.categories[e.id]||Ja.categories.custom,o=this.props.icons=="auto"?FS[this.props.theme]:this.props.icons;return i[o]||i}render(){let e=null;return V("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:V("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Mt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(e=i),V("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),V("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=ze.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class HS extends Xa{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const ba={rowsPerRender:10};class WS extends Kn{getInitialState(e=this.props){return{skin:Wr.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Mt.rtl?"rtl":"ltr",this.refs={menu:gr(),navigation:gr(),scroll:gr(),search:gr(),searchInput:gr(),skinToneButton:gr(),skinToneRadio:gr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(e={}){await $l(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=ze;this.refs.categories=new Map;const n=ze.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const c=this.grid.length-1,d=c%ba.rowsPerRender?{}:gr();return d.index=c,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of e){const a=[];let l=i(a,o);for(let c of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(c);this.refs.categories.set(o.id,{root:gr(),rows:a})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:i}=e,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const i=this.state.searchResults||this.grid,o=i[e]&&i[e][n];if(o)return Qi.get(o)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,i=l=>{l!=e.state.categoryId&&e.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const c=[...n];for(const[d,f]of c)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?e[a]=!0:delete e[a]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(ba.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*ba.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:i,right:o,up:a,down:l}){const c=this.state.searchResults||this.grid;if(!c.length)return;let[d,f]=this.state.pos;const p=(()=>{if(d==0&&f==0&&!e.repeat&&(i||a))return null;if(d==-1)return!e.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=c[d];const m=i?-1:1;if(f+=m,!g[f]){if(d+=m,g=c[d],!g)return d=i?0:c.length-1,f=i?0:c[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=c[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:c.length-1,f=a?0:c[d].length-1,[d,f])}})();if(p)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:e,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(e=i[n].__categoryId),e&&(l=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const c=i[n].__index,d=l+c*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=CS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Pv.add(o,this.props),this.props.onEmojiSelect(o,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),Wr.set("skin",e)}renderNav(){return V(zS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return V("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[V("div",{class:"flex flex-middle flex-grow",children:[V("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:V(Mu,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),V("div",{class:`margin-${this.dir[0]}`,children:e||n?V("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[V("div",{class:"preview-title ellipsis",children:e?e.name:Mt.search_no_results_1}),V("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Mt.search_no_results_2})]}):V("div",{class:"preview-placeholder color-c",children:Mt.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(e.skins[l-1]||e.skins[0]).native,f=ES(this.state.pos,n),p=n.concat(e.id).join("");return V(HS,{selected:f,skin:l,size:a,children:V("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[V("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),V(Mu,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return V("div",{children:[V("div",{class:"spacer"}),V("div",{class:"flex flex-middle",children:[V("div",{class:"search relative flex-grow",children:[V("input",{type:"search",ref:this.refs.searchInput,placeholder:Mt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),V("span",{class:"icon loupe flex",children:Ja.search.loupe}),this.state.searchResults&&V("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ja.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?V("div",{class:"category",ref:this.refs.search,children:[V("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Mt.categories.search}),V("div",{children:e.length?e.map((n,i)=>V("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:e}))})):V("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&V("a",{onClick:this.props.onAddCustomEmoji,children:Mt.add_custom})})})]}):null}renderCategories(){const{categories:e}=ze,n=!!this.state.searchResults,i=this.getPerLine();return V("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return V("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[V("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Mt.categories[o.id]}),V("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((c,d)=>{const f=c.index-c.index%ba.rowsPerRender,p=this.state.visibleRows[f],g="current"in c?c:void 0;if(!p&&!g)return null;const m=d*i,w=m+i,b=o.emojis.slice(m,w);return b.length<i&&b.push(...new Array(i-b.length)),V("div",{"data-index":c.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&b.map(($,x)=>{if(!$)return V("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=Qi.get($);return this.renderEmojiButton(C,{pos:[c.index,x],posinset:c.posinset+x,grid:this.grid})})},c.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:V("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:V("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Mt.skins.choose,title:Mt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:V("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return V("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),V("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Mt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,c=this.state.skin==l;return V("div",{children:[V("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Mt.skins[l],ref:c?this.refs.skinToneRadio:null,defaultChecked:c,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),V("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[V("span",{class:`skin-tone skin-tone-${l}`}),V("span",{class:"margin-small-lr",children:Mt.skins[l]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return V("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&V("div",{class:"padding-lr",children:this.renderSearch()}),V("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:V("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),Ln(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Ln(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Ln(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Ln(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Ln(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],c=[];c.setsize=o.length;let d=null;for(let f of o)(!c.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=c.length,c.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:c,pos:l},a)}),Ln(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Ln(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Ln(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Ln(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await kS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class kd extends RS{async connectedCallback(){const e=Nv(this.props,mr,this);e.element=this,e.ref=n=>{this.component=n},await $l(e),!this.disconnected&&Ov(V(WS,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:_v(Wv)})}}Ln(kd,"Props",mr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",kd);var Wv={};Wv=`:host {
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

`;const qv=t=>{let e,n;const{config:i}=st(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new kd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),t.onEmojiSelect?.(d),e?.close()}}),e?.elem?.appendChild(n)};return _r(()=>{o()}),S($d,{ref:l=>{e=l},position:"bottom",get button(){return t.children},onOpen:a,onClose:o})},qS=B("<div>"),ZS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),KS=B("<br>"),VS=B("<span>: "),GS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),QS=t=>{const e=yt(),[n,i]=Te(!1);return S(me,{get when(){return!t.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=GS();return o.$$click=()=>i(!0),k(o,()=>e()("post.contentWarning.show"),null),k(o,S(me,{get when(){return t.contentWarning.reason!=null},get children(){return[KS(),(()=>{const a=VS(),l=a.firstChild;return k(a,()=>e()("post.contentWarning.reason"),l),k(a,()=>t.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=qS();return k(o,()=>t.children),o})(),S(me,{get when(){return t.contentWarning.contentWarning},get children(){const o=ZS();return o.$$click=()=>i(!1),o}})]}})};vt(["click"]);let au=!1;const[_a,YS]=Te(void 0),Qr=()=>(Jn(()=>{if(_a()!=null)return;let t=0;const e=setInterval(()=>{if(t>=20){if(clearInterval(e),_a()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&_a()==null&&!au&&(au=!0,window.nostr.getPublicKey().then(n=>{clearInterval(e),YS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{au=!1})),t+=1},200)}),_a),JS=B('<div class="flex gap-2 overflow-x-auto py-1">'),XS=B('<span class="ml-1 text-sm">'),eT=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),tT=t=>{const{config:e}=st(),n=Qr();return(()=>{const i=JS();return k(i,S(Ft,{get each(){return[...t.reactionsGrouped.entries()]},children:([,o])=>{const a=o.findIndex(c=>c.pubkey===n())>=0,l=Ka(o[0]).toReactionTypes();return(()=>{const c=eT();return c.$$click=()=>t.onReaction(l),k(c,S(bv,{reactionTypes:l}),null),k(c,S(me,{get when(){return!e().hideCount},get children(){const d=XS();return k(d,()=>o.length),d}}),null),Me(d=>$a(c,{"text-zinc-400":!a,"hover:bg-zinc-50":!a,"bg-rose-50":a,"border-rose-200":a,"text-rose-400":a},d)),c})()}})),i})()};vt(["click"]);const Zv=t=>{const{profile:e}=ms(()=>({pubkey:t.pubkey}));return S(me,{get when(){return(e()?.name?.length??0)>0},get fallback(){return`@${vo(t.pubkey)}`},get children(){return["@",Ze(()=>e()?.name??t.pubkey)]}})},nT=B('<a target="_blank" rel="noreferrer noopener">'),os=t=>{const e=()=>{try{const n=new URL(t.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return S(me,{get when(){return e()},get fallback(){return t.href},get children(){const n=nT();return k(n,()=>t.children??t.href),Me(i=>{const o=t.class,a=t.href;return o!==i._v$&&Zu(n,i._v$=o),a!==i._v$2&&Ue(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},rT=t=>{try{const e=new URL(t);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(e.pathname)}catch{return!1}},iT=t=>{try{const e=new URL(t);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(e.pathname)}catch{return!1}},sT=t=>{try{const e=new URL(t);return/^wss?:$/.test(e.protocol)}catch{return!1}},oT=t=>{try{const e=new URL(t);if(e.host==="i.imgur.com"||e.host==="imgur.com"){const n=e.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(e),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return e.toString()}if(e.host==="i.gyazo.com"){const n=new URL(e);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${e.pathname}`,n.toString()}return e.toString()}catch{return t}},Mg=t=>{try{const e=new URL(t);return e.protocol==="https:"&&(e.host==="twitter.com"||e.host==="x.com")}catch{return!1}},aT=t=>{try{const e=new URL(t);return e.protocol==="https:"&&e.host==="www.youtube.com"&&e.pathname==="/watch"&&e.searchParams.get("v")!=null||e.protocol==="https:"&&e.host==="youtu.be"&&e.pathname.lastIndexOf("/")===0}catch{return!1}},lT=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),cT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),uT=t=>{let e;const n=yt(),[i,o]=Te(t.initialHidden);return S(me,{get when(){return!i()},get fallback(){return(()=>{const a=cT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showImage")),a})()},get children(){return S(os,{class:"my-2 block",get href(){return t.url},get children(){const a=lT(),l=e;return typeof l=="function"?Vn(l,a):e=a,Me(c=>{const d=oT(t.url),f=t.url;return d!==c._v$&&Ue(a,"src",c._v$=d),f!==c._v$2&&Ue(a,"alt",c._v$2=f),c},{_v$:void 0,_v$2:void 0}),a}})}})};vt(["click"]);const dT=B('<div class="my-1 rounded border p-1">'),fT=t=>S(me,{get when(){return t.mentionedEvent.marker!=null&&t.mentionedEvent.marker.length>0},get fallback(){return S(Zs,{get eventId(){return t.mentionedEvent.eventId}})},get children(){const e=dT();return k(e,S(oo,{get eventId(){return t.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ct.Text]}})),e}}),hT=B('<button class="inline select-text text-blue-500 underline">'),lu=t=>{const{showProfile:e}=Gr(),n=()=>{e(t.pubkey)};return(()=>{const i=hT();return i.$$click=n,k(i,S(Zv,{get pubkey(){return t.pubkey}})),i})()};vt(["click"]);const pT=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),gT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),vT=t=>{let e;const n=yt(),[i,o]=Te(t.initialHidden);return S(me,{get when(){return!i()},get fallback(){return(()=>{const a=gT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showVideo")),a})()},get children(){return S(os,{class:"my-2 block",get href(){return t.url},get children(){const a=pT(),l=a.firstChild,c=e;return typeof c=="function"?Vn(c,a):e=a,k(l,()=>n()("post.download")),Me(d=>{const f=t.url,p=t.url;return f!==d._v$&&Ue(a,"src",d._v$=f),p!==d._v$2&&Ue(l,"href",d._v$2=p),d},{_v$:void 0,_v$2:void 0}),a}})}})};vt(["click"]);const mT=B('<blockquote class="twitter-tweet"><a target="_blank" rel="noreferrer noopener">'),yT=B('<div class="my-2 aspect-video w-full"><iframe title="YouTube" class="h-full w-full">'),bT=B('<a target="_blank" rel="noreferrer noopener"><div class="rounded-lg border transition-colors hover:bg-slate-100"><img alt="" class="max-w-full rounded-t-lg object-contain shadow"><div class="mb-1 p-1"><div class="text-xs text-slate-500"></div><div class="text-sm"></div><div class="text-xs text-slate-500">'),Bg=t=>{try{const e=new URL(t);return e.host="twitter.com",e.href}catch{return""}},_T=t=>{try{const e=new URL(t),n=new URL("https://www.youtube.com/embed");return e.host==="youtu.be"?n.pathname+=e.pathname:n.pathname+=`/${e.searchParams.get("v")}`,n.searchParams.set("origin",window.location.origin),n.href}catch{return""}},wT=async t=>{if(["www3.nhk.or.jp"].includes(t.host)){const i=await(await fetch(t,{headers:{Accept:"text/html"}})).text(),o=new DOMParser().parseFromString(i,"text/html"),a={};if(Array.from(o.head.querySelectorAll("meta")).filter(l=>l.getAttribute("property")!=null&&l.getAttribute("content")!=null).forEach(l=>{const c=l.getAttribute("property"),d=l.getAttribute("content");c!=null&&d!=null&&(a[c]=d)}),a["og:image"]&&a["og:title"]&&a["og:description"])return{title:a["og:title"],description:a["og:description"],image:new URL(a["og:image"]),url:t}}return null},xT=t=>{let e;const n={title:"",description:"",image:null,url:null},[i,o]=Te(n),a=()=>{try{const c=new URL(t.href);return c.protocol==="https:"||c.protocol==="http:"}catch{return!1}},l=async()=>{const c=await wT(new URL(t.href));c!=null&&o(c)};return yr(()=>{Mg(t.href)&&window.twttr?.widgets?.load(e)}),Jn(()=>{l().then(()=>{}).catch(()=>{})}),S(me,{get when(){return a()},get fallback(){return t.href},get children(){return S(Pn,{get fallback(){return S(os,{get class(){return t.class},get href(){return t.href}})},get children(){return[S(Ye,{get when(){return Mg(t.href)},get children(){const c=mT(),d=c.firstChild,f=e;return typeof f=="function"?Vn(f,c):e=c,k(d,()=>Bg(t.href)),Me(p=>{const g=t.class,m=Bg(t.href);return g!==p._v$&&Zu(d,p._v$=g),m!==p._v$2&&Ue(d,"href",p._v$2=m),p},{_v$:void 0,_v$2:void 0}),c}}),S(Ye,{get when(){return aT(t.href)},get children(){const c=yT(),d=c.firstChild;return Me(()=>Ue(d,"src",_T(t.href))),c}}),S(Ye,{get when(){return i().url},keyed:!0,get children(){const c=bT(),d=c.firstChild,f=d.firstChild,p=f.nextSibling,g=p.firstChild,m=g.nextSibling,w=m.nextSibling;return k(g,()=>i().url?.host),k(m,()=>i().title),k(w,()=>i().description),Me(b=>{const $=t.href,x=i().image?.href;return $!==b._v$3&&Ue(c,"href",b._v$3=$),x!==b._v$4&&Ue(f,"src",b._v$4=x),b},{_v$3:void 0,_v$4:void 0}),c}})]}})}})},[Cd,$T]=Te({}),Kv=t=>{Cd()[t]==null&&$T(e=>({...e,[t]:new MessageChannel}))},ET=t=>{const e=()=>Cd()[t().id],n=(o,a)=>{const l={requestId:o,request:a};e().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,c)=>{let d;const f=p=>{const g=p.data;g.requestId===o&&(e().port1.removeEventListener("message",f),g.ok?l(g.response):c(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{e().port1.removeEventListener("message",f),c(new Error(`TimeoutError: ${o}`))},a),e().port1.addEventListener("message",f,!1),e().port1.start()});return Jn(()=>{const{id:o}=t();Kv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},kT=t=>{const e=Ze(t),n=()=>Cd()[e().id];Jn(()=>{const{id:i}=e();Kv(i);const o=n().port2,a=l=>{const{requestId:c,request:d}=l.data,f=e().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const m={requestId:c,ok:!0,response:g};o.postMessage(m)}).catch(g=>{const m={requestId:c,ok:!1,error:g};o.postMessage(m)})};o.addEventListener("message",a),o.start(),_r(()=>{o.removeEventListener("message",a)})})},Sd=()=>ET(()=>({id:"CommandChannel"})),CT=t=>{kT(()=>({id:"CommandChannel",handler:e=>{const{commandType:n,handler:i}=t();e.command===n&&i(e)}}))},cu=B("<span>"),jg=B('<button class="select-text text-blue-500 underline">'),Ng=B('<div class="my-1 rounded border p-1">'),ST=B('<button class="select-text text-blue-500 underline"> (<!>)'),TT=B('<span class="text-blue-500 underline">'),AT=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),Vv=t=>{const{config:e,saveColumn:n}=st(),i=Sd(),o=l=>{n(md({query:l})),i({command:"moveToLastColumn"}).catch(c=>console.error(c))},a=l=>{n(q1({name:l,relayUrls:[l]})),i({command:"moveToLastColumn"}).catch(c=>console.error(c))};return S(Ft,{get each(){return t.parsed},children:l=>{if(l.type==="PlainText")return(()=>{const c=cu();return k(c,()=>l.content),c})();if(l.type==="URL"){const c=()=>!e().showMedia||!t.embedding||(t.initialHidden??!1);return rT(l.content)?S(uT,{get url(){return l.content},get initialHidden(){return c()}}):iT(l.content)?S(vT,{get url(){return l.content},get initialHidden(){return c()}}):sT(l.content)?(()=>{const d=jg();return d.$$click=()=>a(l.content),k(d,()=>l.content),d})():S(xT,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReferenceResolved"){if(l.reference==null)return(()=>{const c=cu();return k(c,()=>l.content),c})();if(l.reference.type==="MentionedUser")return S(lu,{get pubkey(){return l.reference.pubkey}});if(l.reference.type==="MentionedEvent")return t.embedding?S(fT,{get mentionedEvent(){return l.reference}}):S(Zs,{get eventId(){return l.reference.eventId}})}if(l.type==="Bech32Entity"){if(l.data.type==="note"&&t.embedding)return(()=>{const c=Ng();return k(c,S(oo,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ct.Text]}})),c})();if(l.data.type==="nevent"&&t.embedding)return(()=>{const c=Ng();return k(c,S(oo,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),c})();if(l.data.type==="npub")return S(lu,{get pubkey(){return l.data.data}});if(l.data.type==="nprofile")return S(lu,{get pubkey(){return l.data.data.pubkey}});if(l.data.type==="nrelay"){const c=l.data.data;return(()=>{const d=ST(),f=d.firstChild,p=f.nextSibling;return p.nextSibling,d.$$click=()=>a(c),k(d,c,f),k(d,()=>l.content,p),d})()}return(()=>{const c=TT();return k(c,()=>l.content),c})()}return l.type==="HashTag"?(()=>{const c=jg();return c.$$click=()=>o(l.content),k(c,()=>l.content),c})():l.type==="CustomEmojiResolved"?l.url==null?(()=>{const c=cu();return k(c,()=>l.content),c})():(()=>{const c=AT();return Me(d=>{const f=l.url,p=l.content,g=l.shortcode;return f!==d._v$&&Ue(c,"src",d._v$=f),p!==d._v$2&&Ue(c,"alt",d._v$2=p),g!==d._v$3&&Ue(c,"title",d._v$3=g),d},{_v$:void 0,_v$2:void 0,_v$3:void 0}),c})():(console.error("Not all ParsedTextNoteNodes are covered",l),null)}})};vt(["click"]);const RT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),as=(t={})=>(()=>{const e=RT();return it(e,t,!0,!0),e})(),IT=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),OT=t=>{let e;const n=i=>{i.target===e&&t.onClose?.()};return(()=>{const i=IT();i.$$click=n;const o=e;return typeof o=="function"?Vn(o,i):e=i,k(i,()=>t.children),i})()};vt(["click"]);const LT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Ti=t=>S(OT,{onClose:()=>t.onClose?.(),get children(){const e=LT(),n=e.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>t.onClose?.(),k(i,S(me,{get when(){return t?.closeButton},get fallback(){return S(as,{})},keyed:!0,children:a=>a()})),k(o,()=>t.children),e}});vt(["click"]);const PT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),MT=(t={})=>(()=>{const e=PT();return it(e,t,!0,!0),e})(),BT=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),jT=B('<div class="relative inline-block"><button type="button">'),NT=t=>{const[e,n]=Te(!1),i=()=>{navigator.clipboard.writeText(t.text).then(()=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=jT(),a=o.firstChild;return a.$$click=i,k(a,S(MT,{})),k(o,S(me,{get when(){return e()},get children(){return BT()}}),null),Me(()=>Zu(a,t.class)),o})()};vt(["click"]);const DT=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),UT=t=>{const e=Ze(()=>JSON.stringify(t.event,null,2));return S(Ti,{get onClose(){return t.onClose},get children(){const n=DT(),i=n.firstChild,o=i.nextSibling;return k(i,e),k(o,S(NT,{class:"h-4 w-4",get text(){return e()}})),n}})},FT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),zT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 select-text truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),HT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),WT=t=>{const{profile:e}=ms(()=>({pubkey:t.pubkey}));return(()=>{const n=zT(),i=n.firstChild,o=i.nextSibling,a=o.firstChild,l=a.firstChild,c=l.firstChild,d=c.firstChild;return i.$$click=f=>{f.preventDefault(),t.onShowProfile?.()},k(i,S(me,{get when(){return e()?.picture},keyed:!0,children:f=>(()=>{const p=HT();return Ue(p,"src",f),p})()})),l.$$click=f=>{f.preventDefault(),t?.onShowProfile?.()},k(c,S(me,{get when(){return(e()?.display_name?.length??0)>0},get children(){const f=FT();return k(f,()=>e()?.display_name),f}}),d),k(d,S(me,{get when(){return e()?.name},get fallback(){return`@${vo(t.pubkey)}`},keyed:!0,children:f=>`@${f}`})),n})()};vt(["click"]);const qT=B('<div class="px-4 py-2"><div> 件</div><div>'),ZT=B('<div class="flex border-t py-1">'),Nu=t=>{const{showProfile:e}=Gr();return S(Ti,{get onClose(){return t.onClose},get children(){const n=qT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return k(i,()=>t.data.length,o),k(a,S(Ft,{get each(){return t.data},children:l=>{const c=()=>t.pubkeyExtractor(l);return(()=>{const d=ZT();return k(d,S(me,{get when(){return t.renderInfo},keyed:!0,children:f=>f(l)}),null),k(d,S(WT,{get pubkey(){return c()},onShowProfile:()=>e(c())}),null),d})()}})),n}})},KT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Gv=(t={})=>(()=>{const e=KT();return it(e,t,!0,!0),e})(),VT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),GT=(t={})=>(()=>{const e=VT();return it(e,t,!0,!0),e})(),QT=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),YT=(t={})=>(()=>{const e=QT();return it(e,t,!0,!0),e})();var Td={},mo={},Qv={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,p){this.fn=d,this.context=f,this.once=p||!1}function a(d,f,p,g,m){if(typeof p!="function")throw new TypeError("The listener must be a function");var w=new o(p,g||d,m),b=n?n+f:f;return d._events[b]?d._events[b].fn?d._events[b]=[d._events[b],w]:d._events[b].push(w):(d._events[b]=w,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function c(){this._events=new i,this._eventsCount=0}c.prototype.eventNames=function(){var f=[],p,g;if(this._eventsCount===0)return f;for(g in p=this._events)e.call(p,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(p)):f},c.prototype.listeners=function(f){var p=n?n+f:f,g=this._events[p];if(!g)return[];if(g.fn)return[g.fn];for(var m=0,w=g.length,b=new Array(w);m<w;m++)b[m]=g[m].fn;return b},c.prototype.listenerCount=function(f){var p=n?n+f:f,g=this._events[p];return g?g.fn?1:g.length:0},c.prototype.emit=function(f,p,g,m,w,b){var $=n?n+f:f;if(!this._events[$])return!1;var x=this._events[$],C=arguments.length,A,E;if(x.fn){switch(x.once&&this.removeListener(f,x.fn,void 0,!0),C){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,p),!0;case 3:return x.fn.call(x.context,p,g),!0;case 4:return x.fn.call(x.context,p,g,m),!0;case 5:return x.fn.call(x.context,p,g,m,w),!0;case 6:return x.fn.call(x.context,p,g,m,w,b),!0}for(E=1,A=new Array(C-1);E<C;E++)A[E-1]=arguments[E];x.fn.apply(x.context,A)}else{var P=x.length,M;for(E=0;E<P;E++)switch(x[E].once&&this.removeListener(f,x[E].fn,void 0,!0),C){case 1:x[E].fn.call(x[E].context);break;case 2:x[E].fn.call(x[E].context,p);break;case 3:x[E].fn.call(x[E].context,p,g);break;case 4:x[E].fn.call(x[E].context,p,g,m);break;default:if(!A)for(M=1,A=new Array(C-1);M<C;M++)A[M-1]=arguments[M];x[E].fn.apply(x[E].context,A)}}return!0},c.prototype.on=function(f,p,g){return a(this,f,p,g,!1)},c.prototype.once=function(f,p,g){return a(this,f,p,g,!0)},c.prototype.removeListener=function(f,p,g,m){var w=n?n+f:f;if(!this._events[w])return this;if(!p)return l(this,w),this;var b=this._events[w];if(b.fn)b.fn===p&&(!m||b.once)&&(!g||b.context===g)&&l(this,w);else{for(var $=0,x=[],C=b.length;$<C;$++)(b[$].fn!==p||m&&!b[$].once||g&&b[$].context!==g)&&x.push(b[$]);x.length?this._events[w]=x.length===1?x[0]:x:l(this,w)}return this},c.prototype.removeAllListeners=function(f){var p;return f?(p=n?n+f:f,this._events[p]&&l(this,p)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,t.exports=c})(Qv);var El=Qv.exports,Ad={},yo={};Object.defineProperty(yo,"__esModule",{value:!0});yo.SearchResult=void 0;const JT=/\$&/g,XT=/\$(\d)/g;class eA{constructor(e,n,i){this.data=e,this.term=n,this.strategy=i}getReplacementData(e){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(e);if(o==null||o.index==null)return null;const a=n.replace(JT,o[0]).replace(XT,(l,c)=>o[parseInt(c)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(e,n){const i=this.getReplacementData(e);if(i!==null)return n=i.afterCursor+n,[[e.slice(0,i.start),i.beforeCursor,e.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}yo.SearchResult=eA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Strategy=t.DEFAULT_INDEX=void 0;const e=yo;t.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const c=this.matchWithContext(o);if(!c)return!1;const d=c[(l=this.props.index)!==null&&l!==void 0?l:t.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(p=>new e.SearchResult(p,d,this)))},c),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,c=>{this.cache[o]=c,a(c)},l)}}t.Strategy=n})(Ad);Object.defineProperty(mo,"__esModule",{value:!0});mo.Completer=void 0;const tA=El,nA=Ad;class rA extends tA.EventEmitter{constructor(e){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=e.map(n=>new nA.Strategy(n))}destroy(){return this.strategies.forEach(e=>e.destroy()),this}run(e){for(const n of this.strategies)if(n.execute(e,this.handleQueryResult))return;this.handleQueryResult([])}}mo.Completer=rA;var Rd={},ys={};Object.defineProperty(ys,"__esModule",{value:!0});ys.createCustomEvent=void 0;const iA=typeof window<"u"&&!!window.CustomEvent,sA=(t,e)=>{if(iA)return new CustomEvent(t,e);const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,e?.cancelable||!1,e?.detail||void 0),n};ys.createCustomEvent=sA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=t.DEFAULT_DROPDOWN_CLASS_NAME=t.DEFAULT_DROPDOWN_PLACEMENT=t.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const e=El,n=ys;t.DEFAULT_DROPDOWN_MAX_COUNT=10,t.DEFAULT_DROPDOWN_PLACEMENT="auto",t.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends e.EventEmitter{constructor(l,c){super(),this.el=l,this.option=c,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const c=document.createElement("ul");c.className=l.className||t.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(c.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(c),new i(c,l)}render(l,c){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||t.DEFAULT_DROPDOWN_MAX_COUNT).map((f,p)=>{var g;return new o(this,p,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(c).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const c={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:c});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:c})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,c){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),c.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const c=document.documentElement;if(c){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?c.scrollWidth:c.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const p=this.option.placement||t.DEFAULT_DROPDOWN_PLACEMENT;if(p==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>c.clientHeight}p==="top"||f?(this.el.style.bottom=`${c.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const c of this.items)l.appendChild(c.el);return this.el.appendChild(l),this}setStrategyId(l){const c=l.getStrategyId();return c&&(this.el.dataset.strategy=c),this}renderEdge(l,c){const d=this.option[c],f=document.createElement("li");return f.className=`textcomplete-${c}`,f.innerHTML=typeof d=="function"?d(l.map(p=>p.data)):d||"",this.el.appendChild(f),this}}t.Dropdown=i;class o{constructor(l,c,d,f){this.dropdown=l,this.index=c,this.searchResult=d,this.props=f,this.active=!1,this.onClick=m=>{m.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const p=document.createElement("li");p.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),p.appendChild(g),p.addEventListener("click",this.onClick),this.el=p}destroy(){var l;const c=this.el;return(l=c.parentNode)===null||l===void 0||l.removeChild(c),c.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Rd);var kl={};Object.defineProperty(kl,"__esModule",{value:!0});kl.Editor=void 0;const oA=El,wa=ys;class aA extends oA.EventEmitter{destroy(){return this}applySearchResult(e){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(e){const n=(0,wa.createCustomEvent)("move",{cancelable:!0,detail:{code:e}});return this.emit("move",n),n}emitEnterEvent(){const e=(0,wa.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",e),e}emitChangeEvent(){const e=(0,wa.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",e),e}emitEscEvent(){const e=(0,wa.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",e),e}getCode(e){return e.keyCode===9||e.keyCode===13?"ENTER":e.keyCode===27?"ESC":e.keyCode===38?"UP":e.keyCode===40||e.keyCode===78&&e.ctrlKey?"DOWN":e.keyCode===80&&e.ctrlKey?"UP":"OTHER"}}kl.Editor=aA;var Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.Textcomplete=void 0;const lA=El,cA=Rd,uA=mo,dA=["show","shown","render","rendered","selected","hidden","hide"];class fA extends lA.EventEmitter{constructor(e,n,i){super(),this.editor=e,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new uA.Completer(n),this.dropdown=cA.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(e=!0){return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}startListening(){var e;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of dA)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.addEventListener("resize",this.handleResize)}stopListening(){var e;(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Cl.Textcomplete=fA;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,c)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(mo,t),n(Rd,t),n(kl,t),n(yo,t),n(Ad,t),n(Cl,t),n(ys,t)})(Td);var Yv={},Sl={};function Jv(t,e,n){const i=t.value,o=e+(n||""),a=document.activeElement;let l=0,c=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-c-1>=0&&o.length-c-1>=0&&i[i.length-c-1]===o[o.length-c-1];)c++;l=Math.min(l,Math.min(i.length,o.length)-c),t.setSelectionRange(l,i.length-c);const d=o.substring(l,o.length-c);if(t.focus(),!document.execCommand("insertText",!1,d)){t.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),t.dispatchEvent(f)}return t.setSelectionRange(e.length,e.length),a.focus(),t}function hA(t,e,n){const i=t.selectionEnd,o=t.value.substr(0,t.selectionStart)+e,a=t.value.substring(t.selectionStart,i)+(n||"")+t.value.substr(i);return Jv(t,o,a),t.selectionEnd=i+e.length,t}const pA=Object.freeze(Object.defineProperty({__proto__:null,update:Jv,wrapCursor:hA},Symbol.toStringTag,{value:"Module"})),gA=j4(pA);var Xv={exports:{}};(function(t){(function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,c){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=c&&c.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var p=document.createElement("div");p.id="input-textarea-caret-position-mirror-div",document.body.appendChild(p);var g=p.style,m=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,w=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",w||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),e.forEach(function(x){w&&x==="lineHeight"?g.lineHeight=m.height:g[x]=m[x]}),i?a.scrollHeight>parseInt(m.height)&&(g.overflowY="scroll"):g.overflow="hidden",p.textContent=a.value.substring(0,l),w&&(p.textContent=p.textContent.replace(/\s/g," "));var b=document.createElement("span");b.textContent=a.value.substring(l)||".",p.appendChild(b);var $={top:b.offsetTop+parseInt(m.borderTopWidth),left:b.offsetLeft+parseInt(m.borderLeftWidth),height:parseInt(m.lineHeight)};return d?b.style.backgroundColor="#aaa":document.body.removeChild(p),$}t.exports=o})()})(Xv);var vA=Xv.exports,em={},Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.calculateElementOffset=void 0;const mA=t=>{const e=t.getBoundingClientRect(),n=t.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:e.top+i.pageYOffset,left:e.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Tl.calculateElementOffset=mA;var Al={};Object.defineProperty(Al,"__esModule",{value:!0});Al.getLineHeightPx=void 0;const yA="0".charCodeAt(0),bA="9".charCodeAt(0),Dg=t=>yA<=t&&t<=bA,_A=t=>{const e=getComputedStyle(t),n=e.lineHeight;if(Dg(n.charCodeAt(0))){const i=parseFloat(n);return Dg(n.charCodeAt(n.length-1))?i*parseFloat(e.fontSize):i}return wA(t.nodeName,e)};Al.getLineHeightPx=_A;const wA=(t,e)=>{const n=document.body;if(!n)return 0;const i=document.createElement(t);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:e.fontSize,fontFamily:e.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.isSafari=void 0;const xA=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Rl.isSafari=xA;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,c)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(Tl,t),n(Al,t),n(Rl,t)})(em);var $A=xt&&xt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.TextareaEditor=void 0;const EA=gA,kA=$A(vA),Ug=Td,Fg=em;class CA extends Ug.Editor{constructor(e){super(),this.el=e,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(e){const n=this.getBeforeCursor();if(n!=null){const i=e.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,EA.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,Ug.createCustomEvent)("input")))}}getCursorOffset(){const e=(0,Fg.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Fg.getLineHeightPx)(this.el),a=e.top-n.top+i.top+o,l=e.left-n.left+i.left,c=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:c};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:c}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,kA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}Sl.TextareaEditor=CA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaEditor=void 0;var e=Sl;Object.defineProperty(t,"TextareaEditor",{enumerable:!0,get:function(){return e.TextareaEditor}})})(Yv);const SA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),TA=()=>{const{searchEmojis:t}=st(),[e,n]=Te();return yr(()=>{const i=e();if(i==null)return;const o=new Yv.TextareaEditor(i),a=new Td.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,c)=>{c(t(l))},template:l=>(()=>{const d=SA(),f=d.firstChild,p=f.nextSibling;return k(p,()=>l.shortcode),Me(g=>{const m=l.url,w=l.shortcode;return m!==g._v$&&Ue(f,"src",g._v$=m),w!==g._v$2&&Ue(f,"alt",g._v$2=w),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});_r(()=>{a.destroy()})}),{elementRef:n}},AA=t=>Math.floor(+t/1e3),Nr=()=>AA(new Date),RA=({notifyPubkeys:t,rootEventId:e,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:c})=>{const d=[],f=t?.map(g=>["p",g])??[],p=[];return e!=null&&d.push(["e",e,"","root"]),e==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),e!=null&&i!=null&&e!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),c!=null&&c.length>0&&p.push(...c),[...d,...f,...p]},Il=()=>{const t=wd(),e=async(d,f)=>{const p={...f};if(p.id=fo(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async m=>{const w=await t().ensureRelay(m);try{await w.publish(g),console.log(`${m} has accepted our event`)}catch(b){const $=b instanceof Error?b.message:JSON.stringify(b);console.warn(`failed to publish to ${m}: ${$}`)}})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:p,content:g}=d,m=RA(d),w={kind:1,pubkey:p,created_at:Nr(),tags:m,content:g};return e(f,w)},publishReaction:async({relayUrls:d,pubkey:f,eventId:p,reactionTypes:g,notifyPubkey:m})=>{const w=[["e",p,""],["p",m]];g.type==="CustomEmoji"&&w.push(["emoji",g.shortcode,g.url]);const b={kind:7,pubkey:f,created_at:Nr(),tags:w,content:g.content};return e(d,b)},publishRepost:async({relayUrls:d,pubkey:f,eventId:p,notifyPubkey:g})=>{const m={kind:6,pubkey:f,created_at:Nr(),tags:[["e",p,""],["p",g]],content:""};return e(d,m)},updateProfile:async({relayUrls:d,pubkey:f,profile:p,otherProperties:g})=>{const m={...p,...g},w={kind:ct.Metadata,pubkey:f,created_at:Nr(),tags:[],content:JSON.stringify(m)};return e(d,w)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:p,content:g})=>{const m={kind:ct.Contacts,pubkey:f,created_at:Nr(),tags:p,content:g};return e(d,m)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:p})=>{const g={kind:ct.EventDeletion,pubkey:f,created_at:Nr(),tags:[["e",p,""]],content:""};return e(d,g)}}},IA=async t=>{const e=new FormData;e.set("file",t);const n=await fetch("https://nostr.build/api/v2/upload/files",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:e});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json();if(i.status!=="success")throw new Error(`failed to post image: ${i.message}`);return{imageUrl:i.data[0].url}},OA=t=>e=>Promise.allSettled(e.map(n=>t(n))),LA=B("<div>"),PA=B('<input type="text" class="rounded" maxlength="32">'),MA=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),BA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),jA=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),NA=t=>{const e=[],n=[],i=[],o=[],a=[];return t.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?e.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:e,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},DA=t=>{const e=[];return t.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?e.push(`nostr:${n.content}`):e.push(n.content)}),e.join("")},tm=t=>{const e=yt();let n,i;const{elementRef:o}=TA(),[a,l]=Te(""),[c,d]=Te(!1),[f,p]=Te(""),[g,m]=Te([]),w=de=>l(G=>`${G} ${de}`),b=()=>{l(g().map(de=>` #${de}`).join("")),p(""),d(!1)},$=()=>{n?.blur(),b(),t.onClose()},x=de=>{switch(de){case"reply":return e()("posting.placeholderReply");case"normal":default:return e()("posting.placeholder")}},{config:C,getEmoji:A}=st(),E=Qr(),P=Il(),M=()=>t.replyTo&&iv(t.replyTo),I=()=>t.mode??"normal",F=vi({mutationKey:["publishTextNote"],mutationFn:P.publishTextNote.bind(P),onSuccess:()=>{console.log("succeeded to post"),b(),t.onPost?.()},onError:de=>{console.error("error",de)}}),N=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},K=vi({mutationKey:["uploadFiles"],mutationFn:async de=>{const G=await OA(IA)(de),D=[];if(G.forEach((Z,te)=>{Z.status==="fulfilled"?(w(Z.value.imageUrl),N()):D.push(de[te])}),D.length>0){const Z=D.map(te=>te.name).join(", ");window.alert(e()("posting.failedToUploadFile",{filenames:Z}))}}}),ee=Ze(()=>{const de=E();return M()?.taggedPubkeys()?.filter(G=>G!==de)??[]}),ie=Ze(()=>t.replyTo==null?[]:mi([t.replyTo.pubkey,...ee()])),se=de=>{const G=[];return de.forEach(D=>{const Z=A(D);Z!=null&&G.push(["emoji",D,Z.url])}),G},ae=()=>{if(a().length===0||F.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(e()("posting.forbiddenToIncludeNsec"));return}const de=E();if(de==null){console.error("pubkey is not available");return}const G=bd(a()),{hashtags:D,urlReferences:Z,pubkeyReferences:te,eventReferences:ue,emojis:oe}=NA(G),He=DA(G),Ke=se(oe);m(D);let J={relayUrls:C().relayUrls,pubkey:de,content:He,notifyPubkeys:te,mentionEventIds:ue,hashtags:D,urls:Z,tags:Ke};M()!=null&&(J={...J,notifyPubkeys:mi([...ie(),...te]),rootEventId:M()?.rootEvent()?.id??M()?.replyingToEvent()?.id,replyEventId:M()?.id}),c()&&(J={...J,contentWarning:f()}),F.mutate(J),$()},X=de=>{l(de.currentTarget.value),N()},j=de=>{w(de.native??`:${de.id}:`)},q=de=>{de.preventDefault(),ae()},ne=de=>{de.key==="Enter"&&(de.ctrlKey||de.metaKey)?ae():de.key==="Escape"&&(n?.blur(),$())},le=de=>{if(de.preventDefault(),K.isLoading)return;const G=[...de.currentTarget.files??[]];K.mutate(G),de.currentTarget.value=""},Y=de=>{if(de.preventDefault(),K.isLoading)return;const G=[...de?.dataTransfer?.files??[]];K.mutate(G)},ye=de=>{if(K.isLoading)return;const G=[...de?.clipboardData?.items??[]],D=[];G.forEach(Z=>{if(Z.kind==="file"){de.preventDefault();const te=Z.getAsFile();if(te==null)return;D.push(te)}}),D.length!==0&&K.mutate(D)},be=de=>{de.preventDefault()},xe=()=>a().trim().length===0||F.isLoading||K.isLoading,Ve=()=>K.isLoading;return Jn(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const de=jA(),G=de.firstChild,D=G.firstChild,Z=D.nextSibling,te=Z.firstChild,ue=te.nextSibling,oe=ue.nextSibling,He=Z.nextSibling;k(de,S(me,{get when(){return t.replyTo!=null},get children(){const J=LA();return k(J,()=>e()("posting.replyToPre"),null),k(J,S(Ft,{get each(){return ie()},children:(_e,et)=>[S(xd,{pubkey:_e}),S(me,{get when(){return et()!==ie().length-1},children:" と "})]}),null),k(J,()=>e()("posting.replyToPost"),null),J}}),G),G.addEventListener("submit",q),k(G,S(me,{get when(){return c()},get children(){const J=PA();return J.$$input=_e=>p(_e.currentTarget.value),Me(()=>Ue(J,"placeholder",e()("posting.contentWarningReason"))),Me(()=>J.value=f()),J}}),D),D.addEventListener("paste",ye),D.addEventListener("drop",Y),D.addEventListener("dragover",be),D.$$keydown=ne,D.$$input=X,Vn(J=>{n=J,t.textAreaRef?.(J),o(J)},D),k(Z,S(me,{get when(){return I()==="reply"},get children(){const J=MA(),_e=J.firstChild;return _e.$$click=()=>$(),k(_e,S(as,{})),J}}),te),k(Z,S(qv,{customEmojis:!0,onEmojiSelect:j,get children(){const J=BA();return k(J,S(Gv,{})),J}}),te),te.$$click=()=>d(J=>!J),ue.$$click=()=>i?.click(),k(ue,S(GT,{})),k(oe,S(YT,{})),He.addEventListener("change",le);const Ke=i;return typeof Ke=="function"?Vn(Ke,He):i=He,Me(J=>{const _e=x(I()),et=!c(),Jt=!!c(),Ct=I()==="normal",Ht=I()==="normal",Jr=I()==="reply",En=I()==="reply",St=e()("posting.contentWarning"),Xt=e()("posting.contentWarning"),Un=!!Ve(),Er=!Ve(),kn=I()==="normal",Ae=I()==="normal",Wt=I()==="reply",qt=I()==="reply",Cn=e()("posting.uploadImage"),Sn=e()("posting.uploadImage"),un=Ve(),dn=!!xe(),Tn=!xe(),rr=I()==="normal",ir=I()==="normal",sr=I()==="reply",Ai=I()==="reply",_o=e()("posting.submit"),wo=e()("posting.submit"),xo=xe();return _e!==J._v$&&Ue(D,"placeholder",J._v$=_e),et!==J._v$2&&te.classList.toggle("bg-rose-300",J._v$2=et),Jt!==J._v$3&&te.classList.toggle("bg-rose-400",J._v$3=Jt),Ct!==J._v$4&&te.classList.toggle("h-8",J._v$4=Ct),Ht!==J._v$5&&te.classList.toggle("w-8",J._v$5=Ht),Jr!==J._v$6&&te.classList.toggle("h-7",J._v$6=Jr),En!==J._v$7&&te.classList.toggle("w-7",J._v$7=En),St!==J._v$8&&Ue(te,"aria-label",J._v$8=St),Xt!==J._v$9&&Ue(te,"title",J._v$9=Xt),Un!==J._v$10&&ue.classList.toggle("bg-primary-disabled",J._v$10=Un),Er!==J._v$11&&ue.classList.toggle("bg-primary",J._v$11=Er),kn!==J._v$12&&ue.classList.toggle("h-8",J._v$12=kn),Ae!==J._v$13&&ue.classList.toggle("w-8",J._v$13=Ae),Wt!==J._v$14&&ue.classList.toggle("h-7",J._v$14=Wt),qt!==J._v$15&&ue.classList.toggle("w-7",J._v$15=qt),Cn!==J._v$16&&Ue(ue,"title",J._v$16=Cn),Sn!==J._v$17&&Ue(ue,"aria-label",J._v$17=Sn),un!==J._v$18&&(ue.disabled=J._v$18=un),dn!==J._v$19&&oe.classList.toggle("bg-primary-disabled",J._v$19=dn),Tn!==J._v$20&&oe.classList.toggle("bg-primary",J._v$20=Tn),rr!==J._v$21&&oe.classList.toggle("h-8",J._v$21=rr),ir!==J._v$22&&oe.classList.toggle("w-8",J._v$22=ir),sr!==J._v$23&&oe.classList.toggle("h-7",J._v$23=sr),Ai!==J._v$24&&oe.classList.toggle("w-7",J._v$24=Ai),_o!==J._v$25&&Ue(oe,"aria-label",J._v$25=_o),wo!==J._v$26&&Ue(oe,"title",J._v$26=wo),xo!==J._v$27&&(oe.disabled=J._v$27=xo),J},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),Me(()=>D.value=a()),de})()};vt(["input","keydown","click"]);const UA=2,FA=()=>{let t;const[e,n]=Te(!1),i=o=>{t=o};return Jn(()=>{t!=null&&n(t.scrollHeight>t.clientHeight+UA)}),{overflow:e,elementRef:i}},zA=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),HA=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),WA=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 select-text truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="select-text hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),qA=B('<img alt="icon" class="h-full w-full rounded object-cover">'),ZA=t=>{const e=yt(),{overflow:n,elementRef:i}=FA(),o=hv(),[a,l]=Te(),c=()=>o(t.createdAt),d=()=>t.createdAt.toLocaleString(),{profile:f}=ms(()=>({pubkey:t.authorPubkey}));return(()=>{const p=WA(),g=p.firstChild,m=g.firstChild,w=m.nextSibling,b=w.firstChild,$=b.firstChild,x=$.firstChild,C=x.firstChild,A=$.nextSibling,E=A.firstChild,P=b.nextSibling,M=P.nextSibling;return m.$$click=I=>{I.preventDefault(),t.onShowProfile?.()},k(m,S(me,{get when(){return f()?.picture},keyed:!0,children:I=>(()=>{const F=qA();return Ue(F,"src",I),F})()})),$.$$click=I=>{I.preventDefault(),t?.onShowProfile?.()},k(x,S(me,{get when(){return(f()?.display_name?.length??0)>0},get children(){const I=zA();return k(I,()=>f()?.display_name),I}}),C),k(C,S(me,{get when(){return f()?.name!=null},get fallback(){return`@${vo(t.authorPubkey)}`},get children(){return["@",Ze(()=>f()?.name)]}})),E.$$click=I=>{I.preventDefault(),t.onShowEvent?.()},k(E,c),Vn(i,P),k(P,()=>t.content),k(w,S(me,{get when(){return n()},get children(){const I=HA();return I.$$click=F=>{F.stopPropagation(),l(N=>!N)},k(I,S(me,{get when(){return!a()},get fallback(){return e()("post.hideOverflow")},get children(){return e()("post.showOverflow")}})),I}}),M),k(M,()=>t.actions),k(p,S(me,{get when(){return t.footer},get children(){return t.footer}}),null),Me(I=>{const F=d(),N=!a();return F!==I._v$&&Ue(E,"title",I._v$=F),N!==I._v$2&&P.classList.toggle("max-h-screen",I._v$2=N),I},{_v$:void 0,_v$2:void 0}),p})()};vt(["click"]);const KA=k4(),VA=()=>C4(KA),Qz=()=>{const[t,e]=Yi({});return{timelineState:t,setTimeline:n=>e("content",n),clearTimeline:()=>e("content",void 0)}},GA=/\p{Emoji_Presentation}/u,QA=t=>{const{shouldMuteEvent:e}=st(),n=ls(),i=Ze(t),o=Ze(()=>["useReactions",i()]),a=cs(o,uv({taskProvider:([,g])=>{if(g==null)return null;const{eventId:m}=g;return new vs({type:"Reactions",mentionedEventId:m})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(m=>!e(m));return{reactions:l,reactionsGrouped:()=>{const g=new Map;return l().forEach(m=>{const w=Ka(m).isCustomEmoji()?`${m.content}${Ka(m).getUrl()??""}`:m.content,b=g.get(w)??[];b.push(m),g.set(w,b)}),g},isReactedBy:g=>l().findIndex(m=>m.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(m=>m.pubkey===g&&GA.test(m.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},YA=t=>{const{shouldMuteEvent:e}=st(),n=ls(),i=Ze(t),o=Ze(()=>["useReposts",i()]),a=cs(o,uv({taskProvider:([,f])=>{if(f==null)return null;const{eventId:p}=f;return new vs({type:"Reposts",mentionedEventId:p})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!e(p));return{reposts:l,isRepostedBy:f=>l().findIndex(p=>p.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},JA=B('<span class="text-red-500">'),XA=B('<div class="nostr-textnote">'),eR=B('<div class="text-xs">'),tR=B('<div class="content whitespace-pre-wrap break-all">'),nR=B('<div class="textnote-content">'),rR=B('<div class="mt-1 rounded border p-1">'),iR=B('<button class="select-text pr-1 text-blue-500 hover:underline">'),zg=B('<div class="text-sm text-zinc-400">'),sR=B('<span class="inline-block h-4 w-4">'),oR=B('<div class="flex shrink-0 items-center gap-1">'),aR=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),lR=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),cR=B('<div class="w-6">'),{noteEncode:uR}=ho,dR=t=>{if(t.native!=null)return{type:"Emoji",content:t.native};if(t.src!=null)return{type:"CustomEmoji",content:`:${t.id}:`,shortcode:t.id,url:t.src};throw new Error("unknown emoji")},fR=t=>{const e=yt(),{config:n}=st(),i=Qr(),{showProfile:o}=Gr(),a=VA(),[l,c]=Te(!1),[d,f]=Te(!1),[p,g]=Te(!1),[m,w]=Te(null),b=()=>g(!1),$=()=>w(null),x=Ze(()=>iv(t.event)),C=()=>t.embedding??!0,A=()=>t.actions??!0,{reactions:E,reactionsGrouped:P,isReactedBy:M,isReactedByWithEmoji:I,invalidateReactions:F,query:N}=QA(()=>({eventId:t.event.id})),{reposts:K,isRepostedBy:ee,invalidateReposts:ie,query:se}=YA(()=>({eventId:t.event.id})),ae=Il(),X=vi({mutationKey:["publishReaction",x().id],mutationFn:(...D)=>ae.publishReaction(...D).then(Z=>Promise.allSettled(Z.map(Hr(5e3)))),onSuccess:D=>{const Z=D.filter(ue=>ue.status==="fulfilled").length,te=D.length-Z;Z===D.length?console.log("Succeeded to publish a reaction"):Z>0?console.warn(`failed to publish a reaction on ${te} relays`):console.error("failed to publish reaction on all relays")},onError:D=>{console.error("failed to publish reaction: ",D)},onSettled:()=>{F().then(()=>N.refetch()).catch(D=>console.error("failed to refetch reactions",D))}}),j=vi({mutationKey:["publishRepost",x().id],mutationFn:(...D)=>ae.publishRepost(...D).then(Z=>Promise.allSettled(Z.map(Hr(1e4)))),onSuccess:D=>{const Z=D.filter(ue=>ue.status==="fulfilled").length,te=D.length-Z;Z===D.length?console.log("Succeeded to publish a repost"):Z>0?console.warn(`Failed to publish a repost on ${te} relays`):console.error("Failed to publish a repost on all relays")},onError:D=>{console.error("failed to publish repost: ",D)},onSettled:()=>{ie().then(()=>se.refetch()).catch(D=>console.error("failed to refetch reposts",D))}}),q=vi({mutationKey:["deleteEvent",x().id],mutationFn:(...D)=>ae.deleteEvent(...D).then(Z=>Promise.allSettled(Z.map(Hr(1e4)))),onSuccess:D=>{const Z=D.filter(ue=>ue.status==="fulfilled").length,te=D.length-Z;Z===D.length?window.alert(e()("post.deletedSuccessfully")):Z>0?window.alert(e()("post.failedToDeletePartially",{count:te})):window.alert(e()("post.failedToDelete"))},onError:D=>{console.error("failed to delete",D)}}),ne=[{content:()=>e()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(uR(t.event.id)).catch(D=>window.alert(D))}},{content:()=>e()("post.showJSON"),onSelect:()=>{w("EventDebugModal")}},{content:()=>e()("post.showReposts"),onSelect:()=>{w("Reposts")}},{content:()=>e()("post.showReactions"),onSelect:()=>{w("Reactions")}},{when:()=>x().pubkey===i(),content:()=>(()=>{const D=JA();return k(D,()=>e()("post.deletePost")),D})(),onSelect:()=>{const D=i();D!=null&&window.confirm(e()("post.confirmDelete"))&&q.mutate({relayUrls:n().relayUrls,pubkey:D,eventId:x().id})}}],le=Ze(()=>{const D=i();return D!=null&&M(D)||l()}),Y=Ze(()=>{const D=i();return D!=null&&I(D)}),ye=Ze(()=>{const D=i();return D!=null&&ee(D)||d()}),be=()=>{if(C()){const D=x().replyingToEvent();if(D!=null&&!x().containsEventMention(D.id))return D.id;const Z=x().rootEvent();if(D==null&&Z!=null&&!x().containsEventMention(Z.id))return Z.id}},xe=D=>{D.stopPropagation(),!ye()&&xn([i(),t.event.id])(([Z,te])=>{j.mutate({relayUrls:n().relayUrls,pubkey:Z,eventId:te,notifyPubkey:t.event.pubkey}),f(!0)})},Ve=D=>{le()||xn([i(),t.event.id])(([Z,te])=>{X.mutate({relayUrls:n().relayUrls,pubkey:Z,reactionTypes:D??{type:"LikeDislike",content:"+"},eventId:te,notifyPubkey:t.event.pubkey}),c(!0)})},de=D=>{D.stopPropagation(),Ve()},G=D=>{Ve(dR(D))};return(()=>{const D=XA();return k(D,S(ZA,{get authorPubkey(){return x().pubkey},get createdAt(){return x().createdAtAsDate()},get content(){return(()=>{const Z=nR();return k(Z,S(me,{get when(){return be()},keyed:!0,children:te=>(()=>{const ue=rR();return k(ue,S(oo,{eventId:te,actions:!1,embedding:!1})),ue})()}),null),k(Z,S(me,{get when(){return x().taggedPubkeys().length>0},get children(){const te=eR();return k(te,()=>e()("post.replyToPre"),null),k(te,S(Ft,{get each(){return x().taggedPubkeys()},children:ue=>(()=>{const oe=iR();return oe.$$click=He=>{He.stopPropagation(),o(ue)},k(oe,S(Zv,{pubkey:ue})),oe})()}),null),k(te,()=>e()("post.replyToPost"),null),te}}),null),k(Z,S(QS,{get contentWarning(){return x().contentWarning()},get children(){const te=tR();return k(te,S(Vv,{get parsed(){return x().parsed()},get embedding(){return C()},get initialHidden(){return x().contentWarning().contentWarning}})),te}}),null),Z})()},get actions(){return S(me,{get when(){return A()},get children(){return[S(me,{get when(){return Ze(()=>!!n().showEmojiReaction)()&&E().length>0},get children(){return S(tT,{get reactionsGrouped(){return P()},onReaction:Ve})}}),(()=>{const Z=lR(),te=Z.firstChild,ue=te.nextSibling,oe=ue.firstChild,He=ue.nextSibling,Ke=He.firstChild,J=He.nextSibling;return te.$$click=_e=>{_e.stopPropagation(),g(et=>!et)},k(te,S(ZC,{})),oe.$$click=xe,k(oe,S(U1,{})),k(ue,S(me,{get when(){return Ze(()=>!n().hideCount)()&&K().length>0},get children(){const _e=zg();return k(_e,()=>K().length),_e}}),null),Ke.$$click=de,k(Ke,S(me,{get when(){return Ze(()=>!!le())()&&!Y()},get fallback(){return S(gv,{})},get children(){return S(mv,{})}})),k(He,S(me,{get when(){return Ze(()=>!n().hideCount&&!n().showEmojiReaction)()&&E().length>0},get children(){const _e=zg();return k(_e,()=>E().length),_e}}),null),k(Z,S(me,{get when(){return n().useEmojiReaction},get children(){const _e=oR();return k(_e,S(qv,{onEmojiSelect:G,get children(){const et=sR();return k(et,S(vv,{})),et}})),Me(et=>$a(_e,{"text-zinc-400":!le()||!Y(),"hover:text-rose-400":!le()||!Y(),"text-rose-400":le()&&Y()||X.isLoading},et)),_e}}),J),k(J,S(yv,{menu:ne,get children(){const _e=aR();return k(_e,S(pv,{})),_e}})),Me(_e=>{const et={"text-zinc-400":!ye(),"hover:text-green-400":!ye(),"text-green-400":ye()||j.isLoading},Jt=j.isLoading,Ct={"text-zinc-400":!le()||Y(),"hover:text-rose-400":!le()||Y(),"text-rose-400":le()&&!Y()||X.isLoading},Ht=X.isLoading;return _e._v$=$a(ue,et,_e._v$),Jt!==_e._v$2&&(oe.disabled=_e._v$2=Jt),_e._v$3=$a(He,Ct,_e._v$3),Ht!==_e._v$4&&(Ke.disabled=_e._v$4=Ht),_e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),Z})()]}})},get footer(){return S(me,{get when(){return p()},get children(){return S(tm,{mode:"reply",get replyTo(){return t.event},onClose:b,onPost:b})}})},onShowProfile:()=>{o(x().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:t.event})}}),null),k(D,S(Pn,{get children(){return[S(Ye,{get when(){return m()==="EventDebugModal"},get children(){return S(UT,{get event(){return t.event},onClose:$})}}),S(Ye,{get when(){return m()==="Reactions"},get children(){return S(Nu,{get data(){return E()},pubkeyExtractor:Z=>Z.pubkey,renderInfo:Z=>(()=>{const te=cR();return k(te,S(bv,{get reactionTypes(){return Ka(Z).toReactionTypes()}})),te})(),onClose:$})}}),S(Ye,{get when(){return m()==="Reposts"},get children(){return S(Nu,{get data(){return K()},pubkeyExtractor:Z=>Z.pubkey,onClose:$})}})]}}),null),D})()};vt(["click"]);const hR=B("<span>予期しないイベント種別（<!>）"),pR=B("<span><span>未対応のイベント種別（<!>）"),nm=t=>{const e=()=>t.ensureKinds==null||t.ensureKinds.length===0||t.ensureKinds.includes(t.event.kind);return S(Pn,{get fallback(){return(()=>{const n=pR(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,k(i,()=>t.event.kind,a),k(n,S(Zs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n})()},get children(){return[S(Ye,{get when(){return!e()},keyed:!0,get children(){const n=hR(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,k(n,()=>t.event.kind,o),k(n,S(Zs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n}}),S(Ye,{get when(){return t.event.kind===ct.Text},get children(){return S(fR,{get event(){return t.event},get embedding(){return t.actions},get actions(){return t.actions}})}}),S(Ye,{get when(){return t.event.kind===ct.Repost},get children(){return S(WC,{get event(){return t.event}})}})]}})},gR=t=>{const{shouldMuteEvent:e}=st();return S(Ft,{get each(){return t.events},children:n=>S(me,{get when(){return!e(n)},get children(){return S(n8,{get children(){return S(nm,{event:n})}})}})})};var vR=al;function mR(){this.__data__=new vR,this.size=0}var yR=mR;function bR(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var _R=bR;function wR(t){return this.__data__.get(t)}var xR=wR;function $R(t){return this.__data__.has(t)}var ER=$R,kR=al,CR=Qu,SR=Yu,TR=200;function AR(t,e){var n=this.__data__;if(n instanceof kR){var i=n.__data__;if(!CR||i.length<TR-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new SR(i)}return n.set(t,e),this.size=n.size,this}var RR=AR,IR=al,OR=yR,LR=_R,PR=xR,MR=ER,BR=RR;function bs(t){var e=this.__data__=new IR(t);this.size=e.size}bs.prototype.clear=OR;bs.prototype.delete=LR;bs.prototype.get=PR;bs.prototype.has=MR;bs.prototype.set=BR;var Id=bs;function jR(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}var NR=jR,DR=z0,UR=NR,FR=H0,zR=1,HR=2;function WR(t,e,n,i,o,a){var l=n&zR,c=t.length,d=e.length;if(c!=d&&!(l&&d>c))return!1;var f=a.get(t),p=a.get(e);if(f&&p)return f==e&&p==t;var g=-1,m=!0,w=n&HR?new DR:void 0;for(a.set(t,e),a.set(e,t);++g<c;){var b=t[g],$=e[g];if(i)var x=l?i($,b,g,e,t,a):i(b,$,g,t,e,a);if(x!==void 0){if(x)continue;m=!1;break}if(w){if(!UR(e,function(C,A){if(!FR(w,A)&&(b===C||o(b,C,n,i,a)))return w.push(A)})){m=!1;break}}else if(!(b===$||o(b,$,n,i,a))){m=!1;break}}return a.delete(t),a.delete(e),m}var rm=WR,qR=Xn,ZR=qR.Uint8Array,im=ZR;function KR(t){var e=-1,n=Array(t.size);return t.forEach(function(i,o){n[++e]=[o,i]}),n}var VR=KR,Hg=us,Wg=im,GR=Gu,QR=rm,YR=VR,JR=Ju,XR=1,eI=2,tI="[object Boolean]",nI="[object Date]",rI="[object Error]",iI="[object Map]",sI="[object Number]",oI="[object RegExp]",aI="[object Set]",lI="[object String]",cI="[object Symbol]",uI="[object ArrayBuffer]",dI="[object DataView]",qg=Hg?Hg.prototype:void 0,uu=qg?qg.valueOf:void 0;function fI(t,e,n,i,o,a,l){switch(n){case dI:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case uI:return!(t.byteLength!=e.byteLength||!a(new Wg(t),new Wg(e)));case tI:case nI:case sI:return GR(+t,+e);case rI:return t.name==e.name&&t.message==e.message;case oI:case lI:return t==e+"";case iI:var c=YR;case aI:var d=i&XR;if(c||(c=JR),t.size!=e.size&&!d)return!1;var f=l.get(t);if(f)return f==e;i|=eI,l.set(t,e);var p=QR(c(t),c(e),i,o,a,l);return l.delete(t),p;case cI:if(uu)return uu.call(t)==uu.call(e)}return!1}var hI=fI;function pI(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}var Od=pI,gI=Array.isArray,nr=gI,vI=Od,mI=nr;function yI(t,e,n){var i=e(t);return mI(t)?i:vI(i,n(t))}var sm=yI;function bI(t,e){for(var n=-1,i=t==null?0:t.length,o=0,a=[];++n<i;){var l=t[n];e(l,n,t)&&(a[o++]=l)}return a}var _I=bI;function wI(){return[]}var om=wI,xI=_I,$I=om,EI=Object.prototype,kI=EI.propertyIsEnumerable,Zg=Object.getOwnPropertySymbols,CI=Zg?function(t){return t==null?[]:(t=Object(t),xI(Zg(t),function(e){return kI.call(t,e)}))}:$I,Ld=CI;function SI(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var TI=SI;function AI(t){return t!=null&&typeof t=="object"}var Yr=AI,RI=ds,II=Yr,OI="[object Arguments]";function LI(t){return II(t)&&RI(t)==OI}var PI=LI,Kg=PI,MI=Yr,am=Object.prototype,BI=am.hasOwnProperty,jI=am.propertyIsEnumerable,NI=Kg(function(){return arguments}())?Kg:function(t){return MI(t)&&BI.call(t,"callee")&&!jI.call(t,"callee")},Pd=NI,el={exports:{}};function DI(){return!1}var UI=DI;el.exports;(function(t,e){var n=Xn,i=UI,o=e&&!e.nodeType&&e,a=o&&!0&&t&&!t.nodeType&&t,l=a&&a.exports===o,c=l?n.Buffer:void 0,d=c?c.isBuffer:void 0,f=d||i;t.exports=f})(el,el.exports);var Md=el.exports,FI=9007199254740991,zI=/^(?:0|[1-9]\d*)$/;function HI(t,e){var n=typeof t;return e=e??FI,!!e&&(n=="number"||n!="symbol"&&zI.test(t))&&t>-1&&t%1==0&&t<e}var Bd=HI,WI=9007199254740991;function qI(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=WI}var jd=qI,ZI=ds,KI=jd,VI=Yr,GI="[object Arguments]",QI="[object Array]",YI="[object Boolean]",JI="[object Date]",XI="[object Error]",eO="[object Function]",tO="[object Map]",nO="[object Number]",rO="[object Object]",iO="[object RegExp]",sO="[object Set]",oO="[object String]",aO="[object WeakMap]",lO="[object ArrayBuffer]",cO="[object DataView]",uO="[object Float32Array]",dO="[object Float64Array]",fO="[object Int8Array]",hO="[object Int16Array]",pO="[object Int32Array]",gO="[object Uint8Array]",vO="[object Uint8ClampedArray]",mO="[object Uint16Array]",yO="[object Uint32Array]",at={};at[uO]=at[dO]=at[fO]=at[hO]=at[pO]=at[gO]=at[vO]=at[mO]=at[yO]=!0;at[GI]=at[QI]=at[lO]=at[YI]=at[cO]=at[JI]=at[XI]=at[eO]=at[tO]=at[nO]=at[rO]=at[iO]=at[sO]=at[oO]=at[aO]=!1;function bO(t){return VI(t)&&KI(t.length)&&!!at[ZI(t)]}var _O=bO;function wO(t){return function(e){return t(e)}}var Nd=wO,tl={exports:{}};tl.exports;(function(t,e){var n=N0,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a&&n.process,c=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();t.exports=c})(tl,tl.exports);var Dd=tl.exports,xO=_O,$O=Nd,Vg=Dd,Gg=Vg&&Vg.isTypedArray,EO=Gg?$O(Gg):xO,lm=EO,kO=TI,CO=Pd,SO=nr,TO=Md,AO=Bd,RO=lm,IO=Object.prototype,OO=IO.hasOwnProperty;function LO(t,e){var n=SO(t),i=!n&&CO(t),o=!n&&!i&&TO(t),a=!n&&!i&&!o&&RO(t),l=n||i||o||a,c=l?kO(t.length,String):[],d=c.length;for(var f in t)(e||OO.call(t,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||AO(f,d)))&&c.push(f);return c}var cm=LO,PO=Object.prototype;function MO(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||PO;return t===n}var Ud=MO;function BO(t,e){return function(n){return t(e(n))}}var um=BO,jO=um,NO=jO(Object.keys,Object),DO=NO,UO=Ud,FO=DO,zO=Object.prototype,HO=zO.hasOwnProperty;function WO(t){if(!UO(t))return FO(t);var e=[];for(var n in Object(t))HO.call(t,n)&&n!="constructor"&&e.push(n);return e}var qO=WO,ZO=U0,KO=jd;function VO(t){return t!=null&&KO(t.length)&&!ZO(t)}var dm=VO,GO=cm,QO=qO,YO=dm;function JO(t){return YO(t)?GO(t):QO(t)}var Ol=JO,XO=sm,eL=Ld,tL=Ol;function nL(t){return XO(t,tL,eL)}var fm=nL,Qg=fm,rL=1,iL=Object.prototype,sL=iL.hasOwnProperty;function oL(t,e,n,i,o,a){var l=n&rL,c=Qg(t),d=c.length,f=Qg(e),p=f.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var m=c[g];if(!(l?m in e:sL.call(e,m)))return!1}var w=a.get(t),b=a.get(e);if(w&&b)return w==e&&b==t;var $=!0;a.set(t,e),a.set(e,t);for(var x=l;++g<d;){m=c[g];var C=t[m],A=e[m];if(i)var E=l?i(A,C,m,e,t,a):i(C,A,m,t,e,a);if(!(E===void 0?C===A||o(C,A,n,i,a):E)){$=!1;break}x||(x=m=="constructor")}if($&&!x){var P=t.constructor,M=e.constructor;P!=M&&"constructor"in t&&"constructor"in e&&!(typeof P=="function"&&P instanceof P&&typeof M=="function"&&M instanceof M)&&($=!1)}return a.delete(t),a.delete(e),$}var aL=oL,lL=ki,cL=Xn,uL=lL(cL,"DataView"),dL=uL,fL=ki,hL=Xn,pL=fL(hL,"Promise"),gL=pL,vL=ki,mL=Xn,yL=vL(mL,"WeakMap"),bL=yL,Du=dL,Uu=Qu,Fu=gL,zu=W0,Hu=bL,hm=ds,_s=F0,Yg="[object Map]",_L="[object Object]",Jg="[object Promise]",Xg="[object Set]",e0="[object WeakMap]",t0="[object DataView]",wL=_s(Du),xL=_s(Uu),$L=_s(Fu),EL=_s(zu),kL=_s(Hu),di=hm;(Du&&di(new Du(new ArrayBuffer(1)))!=t0||Uu&&di(new Uu)!=Yg||Fu&&di(Fu.resolve())!=Jg||zu&&di(new zu)!=Xg||Hu&&di(new Hu)!=e0)&&(di=function(t){var e=hm(t),n=e==_L?t.constructor:void 0,i=n?_s(n):"";if(i)switch(i){case wL:return t0;case xL:return Yg;case $L:return Jg;case EL:return Xg;case kL:return e0}return e});var Ll=di,du=Id,CL=rm,SL=hI,TL=aL,n0=Ll,r0=nr,i0=Md,AL=lm,RL=1,s0="[object Arguments]",o0="[object Array]",xa="[object Object]",IL=Object.prototype,a0=IL.hasOwnProperty;function OL(t,e,n,i,o,a){var l=r0(t),c=r0(e),d=l?o0:n0(t),f=c?o0:n0(e);d=d==s0?xa:d,f=f==s0?xa:f;var p=d==xa,g=f==xa,m=d==f;if(m&&i0(t)){if(!i0(e))return!1;l=!0,p=!1}if(m&&!p)return a||(a=new du),l||AL(t)?CL(t,e,n,i,o,a):SL(t,e,d,n,i,o,a);if(!(n&RL)){var w=p&&a0.call(t,"__wrapped__"),b=g&&a0.call(e,"__wrapped__");if(w||b){var $=w?t.value():t,x=b?e.value():e;return a||(a=new du),o($,x,n,i,a)}}return m?(a||(a=new du),TL(t,e,n,i,o,a)):!1}var LL=OL,PL=LL,l0=Yr;function pm(t,e,n,i,o){return t===e?!0:t==null||e==null||!l0(t)&&!l0(e)?t!==t&&e!==e:PL(t,e,n,i,pm,o)}var gm=pm,ML=Id,BL=gm,jL=1,NL=2;function DL(t,e,n,i){var o=n.length,a=o,l=!i;if(t==null)return!a;for(t=Object(t);o--;){var c=n[o];if(l&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<a;){c=n[o];var d=c[0],f=t[d],p=c[1];if(l&&c[2]){if(f===void 0&&!(d in t))return!1}else{var g=new ML;if(i)var m=i(f,p,d,t,e,g);if(!(m===void 0?BL(p,f,jL|NL,i,g):m))return!1}}return!0}var UL=DL,FL=Ei;function zL(t){return t===t&&!FL(t)}var vm=zL,HL=vm,WL=Ol;function qL(t){for(var e=WL(t),n=e.length;n--;){var i=e[n],o=t[i];e[n]=[i,o,HL(o)]}return e}var ZL=qL;function KL(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var mm=KL,VL=UL,GL=ZL,QL=mm;function YL(t){var e=GL(t);return e.length==1&&e[0][2]?QL(e[0][0],e[0][1]):function(n){return n===t||VL(n,t,e)}}var JL=YL,XL=ds,eP=Yr,tP="[object Symbol]";function nP(t){return typeof t=="symbol"||eP(t)&&XL(t)==tP}var Fd=nP,rP=nr,iP=Fd,sP=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oP=/^\w*$/;function aP(t,e){if(rP(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||iP(t)?!0:oP.test(t)||!sP.test(t)||e!=null&&t in Object(e)}var zd=aP,ym=Yu,lP="Expected a function";function Hd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(lP);var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=t.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Hd.Cache||ym),n}Hd.Cache=ym;var cP=Hd,uP=cP,dP=500;function fP(t){var e=uP(t,function(i){return n.size===dP&&n.clear(),i}),n=e.cache;return e}var hP=fP,pP=hP,gP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vP=/\\(\\)?/g,mP=pP(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(gP,function(n,i,o,a){e.push(o?a.replace(vP,"$1"):i||n)}),e}),yP=mP;function bP(t,e){for(var n=-1,i=t==null?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o}var Wd=bP,c0=us,_P=Wd,wP=nr,xP=Fd,$P=1/0,u0=c0?c0.prototype:void 0,d0=u0?u0.toString:void 0;function bm(t){if(typeof t=="string")return t;if(wP(t))return _P(t,bm)+"";if(xP(t))return d0?d0.call(t):"";var e=t+"";return e=="0"&&1/t==-$P?"-0":e}var EP=bm,kP=EP;function CP(t){return t==null?"":kP(t)}var SP=CP,TP=nr,AP=zd,RP=yP,IP=SP;function OP(t,e){return TP(t)?t:AP(t,e)?[t]:RP(IP(t))}var ws=OP,LP=Fd,PP=1/0;function MP(t){if(typeof t=="string"||LP(t))return t;var e=t+"";return e=="0"&&1/t==-PP?"-0":e}var xs=MP,BP=ws,jP=xs;function NP(t,e){e=BP(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[jP(e[n++])];return n&&n==i?t:void 0}var Pl=NP,DP=Pl;function UP(t,e,n){var i=t==null?void 0:DP(t,e);return i===void 0?n:i}var FP=UP;function zP(t,e){return t!=null&&e in Object(t)}var HP=zP,WP=ws,qP=Pd,ZP=nr,KP=Bd,VP=jd,GP=xs;function QP(t,e,n){e=WP(e,t);for(var i=-1,o=e.length,a=!1;++i<o;){var l=GP(e[i]);if(!(a=t!=null&&n(t,l)))break;t=t[l]}return a||++i!=o?a:(o=t==null?0:t.length,!!o&&VP(o)&&KP(l,o)&&(ZP(t)||qP(t)))}var YP=QP,JP=HP,XP=YP;function eM(t,e){return t!=null&&XP(t,e,JP)}var tM=eM,nM=gm,rM=FP,iM=tM,sM=zd,oM=vm,aM=mm,lM=xs,cM=1,uM=2;function dM(t,e){return sM(t)&&oM(e)?aM(lM(t),e):function(n){var i=rM(n,t);return i===void 0&&i===e?iM(n,t):nM(e,i,cM|uM)}}var fM=dM;function hM(t){return t}var _m=hM;function pM(t){return function(e){return e?.[t]}}var gM=pM,vM=Pl;function mM(t){return function(e){return vM(e,t)}}var yM=mM,bM=gM,_M=yM,wM=zd,xM=xs;function $M(t){return wM(t)?bM(xM(t)):_M(t)}var EM=$M,kM=JL,CM=fM,SM=_m,TM=nr,AM=EM;function RM(t){return typeof t=="function"?t:t==null?SM:typeof t=="object"?TM(t)?CM(t[0],t[1]):kM(t):AM(t)}var qd=RM,IM=qd,OM=q0;function LM(t,e){return t&&t.length?OM(t,IM(e)):[]}var PM=LM;const wm=il(PM);let Sa=0;const{setActiveSubscriptions:MM}=lv();setInterval(()=>{MM(Sa)},1e3);const xm=t=>{const{config:e,shouldMuteEvent:n}=st(),i=wd(),[o,a]=Te([]);yr(rl(()=>[e().mutedPubkeys,e().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),Jn(()=>{console.debug("subscription mounted",t()?.debugId,t()),_r(()=>{console.debug("subscription unmount",t()?.debugId,t())})});const l=d=>{const p=t()?.limit??50,g=d.created_at-Nr();if(!(g>300)){if(g>0){setTimeout(()=>l(d),g*1e3);return}a(m=>{const w=dd.insertEventIntoDescendingList(m,d).slice(0,p),b=wm(w,$=>$.id);return b.length!==w.length&&console.warn("duplicated event",d),b})}},c=()=>{console.debug("startSubscription: start");const d=t();if(d==null)return;const{relayUrls:f,filters:p,options:g,onEvent:m,onEOSE:w,continuous:b=!0}=d,$=i().sub(f,p,g);let x=!0;Sa+=1;let C=!1,A=!1;const E=[];$.on("event",I=>{m?.(I),!(d.clientEventFilter!=null&&!d.clientEventFilter(I))&&(A?l(I):(C=!0,E.push(I)))}),$.on("eose",()=>{w?.(),A=!0,a(Ru(E)),b||($.unsub(),x&&(x=!1,Sa-=1))});let P=!1;const M=setInterval(()=>{if(!P){if(P=!0,A){clearInterval(M),P=!1;return}C&&(C=!1,a(Ru(E))),P=!1}},100);_r(()=>{console.debug("startSubscription: end"),$.unsub(),x&&(x=!1,Sa-=1),clearInterval(M)})};return yr(()=>{c()}),{events:o}},BM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),jM=(t={})=>(()=>{const e=BM();return it(e,t,!0,!0),e})(),$m=t=>{const e=()=>{const i=t();if(i==null)return[];const o=[];return Ur(i).pTags().forEach(l=>{const[,c,d,f]=l,p={pubkey:c,petname:f};d!=null&&d.length>0&&(p.mainRelayUrl=d),o.push(p)}),o};return{followings:e,followingPubkeys:()=>e().map(i=>i.pubkey),data:t}},NM=async({pubkey:t},e)=>{const n=new vs({type:"Followings",pubkey:t});wl({task:n,signal:e});const i=await n.latestEventPromise();return $m(()=>i)},f0=t=>{const e=ls(),n=Ze(t),i=()=>["useFollowings",n()],o=cs(i,cv({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:c}=l;return new vs({type:"Followings",pubkey:c})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>e.invalidateQueries(i());return{...$m(()=>o.data),invalidateFollowings:a,query:o}},DM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),UM=(t={})=>(()=>{const e=DM();return it(e,t,!0,!0),e})(),FM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Em=(t={})=>(()=>{const e=FM();return it(e,t,!0,!0),e})(),zM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),km=(t={})=>(()=>{const e=zM();return it(e,t,!0,!0),e})(),HM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),WM=(t={})=>(()=>{const e=HM();return it(e,t,!0,!0),e})(),qM=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani and </p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),ZM=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),KM=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),VM=async()=>{const e=await(await fetch(Ku("packageInfo.json"))).text();return JSON.parse(e)},h0="946e012",GM=t=>{const[e]=M0(VM);return S(Ti,{get onClose(){return t.onClose},get children(){const n=qM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,c=l.nextSibling;c.firstChild;const d=i.nextSibling,f=d.nextSibling,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,w=m.nextSibling;w.nextSibling;const b=g.nextSibling,$=b.nextSibling;$.firstChild;const x=$.nextSibling,C=x.nextSibling,A=C.nextSibling,E=A.nextSibling,P=E.nextSibling;return P.nextSibling,k(c,()=>e()?.self?.version,null),k(c,S(me,{when:h0,get children(){return[" (",h0,")"]}}),null),k(g,S(os,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),k($,S(os,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit/graphs/contributors",children:"Rabbit contributors"}),null),k(P,()=>e()?.self.licenseText),k(n,S(Ft,{get each(){return e()?.packages??[]},fallback:"取得中",children:M=>[(()=>{const I=ZM(),F=I.firstChild,N=F.nextSibling,K=N.nextSibling,ee=K.nextSibling;return ee.nextSibling,k(I,()=>M.name,F),k(I,()=>M.version,N),k(I,()=>M.licenseSpdx,ee),I})(),(()=>{const I=KM();return k(I,()=>M.licenseText),I})()]}),null),Me(()=>Ue(o,"src",Ku("images/rabbit_app_256.png"))),n}})},QM=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),YM=t=>{const e=yt(),n=Qr(),{saveColumn:i}=st(),o=Sd(),a=()=>{t.onClose(),o({command:"moveToLastColumn"}).catch(m=>console.error(m))},l=()=>{xn([n()])(([m])=>{i(H1({pubkey:m}))}),a()},c=()=>{xn([n()])(([m])=>{i(W1({pubkey:m}))}),a()},d=()=>{i(Z1()),a()},f=()=>{i(md({query:""})),a()},p=()=>{xn([n()])(([m])=>{i(K1({pubkey:m}))}),a()},g=()=>{xn([n()])(([m])=>{i(V1({pubkey:m}))}),a()};return S(Ti,{get onClose(){return t.onClose},get children(){const m=QM(),w=m.firstChild,b=w.firstChild,$=w.nextSibling,x=$.firstChild,C=$.nextSibling,A=C.firstChild,E=C.nextSibling,P=E.firstChild,M=E.nextSibling,I=M.firstChild,F=M.nextSibling,N=F.firstChild;return w.$$click=()=>l(),k(b,S(jM,{})),k(w,()=>e()("column.home"),null),$.$$click=()=>c(),k(x,S(UM,{})),k($,()=>e()("column.notification"),null),C.$$click=()=>d(),k(A,S(km,{})),k(C,()=>e()("column.japanese"),null),E.$$click=()=>f(),k(P,S(WM,{})),k(E,()=>e()("column.search"),null),M.$$click=()=>p(),k(I,S(Em,{})),k(M,()=>e()("column.myPosts"),null),F.$$click=()=>g(),k(N,S(gv,{})),k(F,()=>e()("column.myReactions"),null),m}})};vt(["click"]);const JM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),XM=(t={})=>(()=>{const e=JM();return it(e,t,!0,!0),e})(),eB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),tB=(t={})=>(()=>{const e=eB();return it(e,t,!0,!0),e})(),nB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),rB=(t={})=>(()=>{const e=nB();return it(e,t,!0,!0),e})();function iB(t){const{config:e}=st(),n=Ze(t),{events:i}=xm(()=>({relayUrls:e().relayUrls,filters:[{kinds:[ct.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>mi(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const sB=t=>{const e=Ze(t),n=cs(()=>["useVerification",e()],({queryKey:o})=>{const[,a]=o;if(a==null)return Promise.resolve(null);const{nip05:l}=a;return L1.queryProfile(l)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},oB=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),p0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),aB=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),lB=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),cB=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),g0=B('<div class="shrink-0 text-xs">'),uB=B('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),dB=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),fB=B('<div class="truncate text-xl font-bold">'),hB=B('<div class="truncate text-xs">@'),pB=B('<span class="inline-block h-3 w-3">'),gB=B('<span class="inline-block h-4 w-4 text-blue-400">'),vB=B('<div class="flex items-center text-xs">'),mB=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),yB=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),bB=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),_B=B('<ul class="border-t px-5 py-2 text-xs">'),wB=B('<ul class="border-t p-1">'),xB=B('<div class="h-12 shrink-0">'),$B=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),EB=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),kB=B('<span class="inline-block h-4 w-4 text-rose-500">'),CB=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),SB=B('<span class="text-sm">'),TB=B('<button class="text-sm hover:text-stone-800 hover:underline">'),AB=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),RB=t=>{const{count:e}=iB(()=>({pubkey:t.pubkey}));return Ze(e)},IB=t=>{const e=yt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=st(),l=Il(),c=Qr(),{showProfileEdit:d}=Gr(),f=Ze(()=>vo(t.pubkey)),[p,g]=Te(!1),[m,w]=Te(!1),[b,$]=Te(!1),[x,C]=Te(null),A=()=>C(null),{profile:E,event:P,query:M}=ms(()=>({pubkey:t.pubkey})),{verification:I,query:F}=sB(()=>xn([E()?.nip05])(([G])=>({nip05:G}))),N=()=>{const G=E()?.nip05;if(G==null)return null;const[D,Z]=G.split("@");return Z==null?null:D==="_"?{domain:Z,ident:Z}:{user:D,domain:Z,ident:G}},K=()=>I()?.pubkey===t.pubkey,ee=()=>a(t.pubkey),ie=Ze(()=>{const G=P(),D=E()?.about;if(G==null||D==null)return;const Z=bd(D);return rv(Z,Ur(G))}),{followingPubkeys:se,invalidateFollowings:ae,query:X}=f0(()=>xn([c()])(([G])=>({pubkey:G}))),j=()=>se().includes(t.pubkey),{followingPubkeys:q,query:ne}=f0(()=>({pubkey:t.pubkey})),le=()=>{const G=c();return G!=null&&q().includes(G)},Y=vi({mutationKey:["updateContacts"],mutationFn:(...G)=>l.updateContacts(...G).then(D=>Promise.allSettled(D.map(Hr(5e3)))),onSuccess:G=>{const D=G.filter(te=>te.status==="fulfilled").length,Z=G.length-D;D===G.length?console.log("succeeded to update contacts"):D>0?console.log(`succeeded to update contacts for ${D} relays but failed for ${Z} relays`):console.error("failed to update contacts")},onError:G=>{console.error("failed to update contacts: ",G)},onSettled:()=>{ae().then(()=>X.refetch()).catch(G=>console.error("failed to refetch contacts",G))}}),ye=async(G,D)=>{try{const Z=c();if(Z==null)return;g(!0);const te=await NM({pubkey:Z});if((te.data()==null||te.followingPubkeys().length===0)&&!window.confirm(e()("profile.confirmUpdateEvenIfEmpty")))return;if((te?.data()?.created_at??0)<(X.data?.created_at??0)){window.alert(e()("profile.failedToFetchLatestFollowList"));return}const ue=te.data()?.tags??[];let oe;switch(G){case"follow":oe=[...ue,["p",D]];break;case"unfollow":oe=ue.filter(([He,Ke])=>!(He==="p"&&Ke===D));break;default:console.error("updateContacts: invalid operation",G);return}await Y.mutateAsync({relayUrls:n().relayUrls,pubkey:Z,updatedTags:oe,content:te.data()?.content??""})}catch(Z){console.error("failed to update contact list",Z),window.alert(e()("profile.failedToUpdateFollowList"))}finally{g(!1)}},be=()=>{ye("follow",t.pubkey).catch(G=>{console.log("failed to follow",G)})},xe=()=>{window.confirm(e()("profile.confirmUnfollow"))&&ye("unfollow",t.pubkey).catch(G=>{console.log("failed to unfollow",G)})},Ve=[{content:()=>e()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(f()).catch(G=>window.alert(G))}},{content:()=>ee()?e()("profile.unmute"):e()("profile.mute"),onSelect:()=>{ee()?o(t.pubkey):i(t.pubkey)}},{when:()=>t.pubkey===c(),content:()=>j()?e()("profile.unfollowMyself"):e()("profile.followMyself"),onSelect:()=>{j()?xe():be()}}],{events:de}=xm(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[t.pubkey],limit:10,until:Nr()}],continuous:!1}));return S(Ti,{onClose:()=>t.onClose?.(),get children(){return[S(me,{get when(){return Ze(()=>!!M.isFetched)()&&E()?.banner},get fallback(){return xB()},keyed:!0,children:G=>(()=>{const D=$B(),Z=D.firstChild;return Ue(Z,"src",G),D})()}),(()=>{const G=dB(),D=G.firstChild,Z=D.firstChild;return k(Z,S(me,{get when(){return Ze(()=>!!M.isFetched)()&&E()?.picture},keyed:!0,children:te=>(()=>{const ue=EB();return Ue(ue,"src",te),ue})()})),k(G,S(me,{get when(){return c()!=null},get children(){const te=uB(),ue=te.firstChild;return k(ue,S(Pn,{get children(){return[S(Ye,{get when(){return t.pubkey===c()},get children(){const oe=oB();return oe.$$click=()=>d(),k(oe,()=>e()("profile.editProfile")),oe}}),S(Ye,{get when(){return Y.isLoading||p()},get children(){const oe=p0();return k(oe,()=>e()("general.updating")),oe}}),S(Ye,{get when(){return X.isLoading||X.isFetching},get children(){const oe=p0();return k(oe,()=>e()("general.loading")),oe}}),S(Ye,{get when(){return j()},get children(){const oe=aB();return oe.$$click=()=>xe(),oe.addEventListener("mouseleave",()=>w(!1)),oe.addEventListener("mouseenter",()=>w(!0)),k(oe,S(me,{get when(){return!m()},get fallback(){return e()("profile.unfollow")},get children(){return e()("profile.followingCurrently")}})),Me(()=>oe.disabled=Y.isLoading),oe}}),S(Ye,{get when(){return!j()},get children(){const oe=lB();return oe.$$click=()=>be(),k(oe,()=>e()("profile.follow")),Me(()=>oe.disabled=Y.isLoading),oe}})]}}),null),k(ue,S(yv,{menu:Ve,get children(){const oe=cB();return k(oe,S(pv,{})),oe}}),null),k(te,S(Pn,{get children(){return[S(Ye,{get when(){return ne.isLoading},get children(){const oe=g0();return k(oe,()=>e()("general.loading")),oe}}),S(Ye,{get when(){return le()},get children(){const oe=g0();return k(oe,()=>e()("profile.followsYou")),oe}})]}}),null),te}}),null),G})(),(()=>{const G=mB(),D=G.firstChild,Z=D.firstChild,te=Z.nextSibling,ue=te.firstChild;return k(D,S(me,{get when(){return M.isLoading},get children(){return e()("general.loading")}}),Z),k(D,S(me,{get when(){return(E()?.display_name?.length??0)>0},get children(){const oe=fB();return k(oe,()=>E()?.display_name),oe}}),Z),k(Z,S(me,{get when(){return(E()?.name?.length??0)>0},get children(){const oe=hB();return oe.firstChild,k(oe,()=>E()?.name,null),oe}}),null),k(Z,S(me,{get when(){return(E()?.nip05?.length??0)>0},get children(){const oe=vB();return k(oe,()=>N()?.ident,null),k(oe,S(Pn,{get fallback(){return(()=>{const He=kB();return k(He,S(rB,{})),He})()},get children(){return[S(Ye,{get when(){return F.isLoading},get children(){const He=pB();return k(He,S(XM,{})),He}}),S(Ye,{get when(){return K()},get children(){const He=gB();return k(He,S(tB,{})),He}})]}}),null),oe}}),null),k(ue,f),G})(),S(me,{get when(){return ie()},keyed:!0,children:G=>(()=>{const D=CB();return k(D,S(Vv,{parsed:G,embedding:!1,initialHidden:!0})),D})()}),(()=>{const G=bB(),D=G.firstChild,Z=D.firstChild,te=Z.nextSibling;return D.$$click=()=>C("Following"),k(Z,()=>e()("profile.following")),k(te,S(me,{get when(){return ne.isFetched},get fallback(){return(()=>{const ue=SB();return k(ue,()=>e()("general.loading")),ue})()},get children(){return q().length}})),k(G,S(me,{get when(){return!n().hideCount},get children(){const ue=yB(),oe=ue.firstChild,He=oe.nextSibling;return k(oe,()=>e()("profile.followers")),k(He,S(me,{get when(){return b()},get fallback(){return(()=>{const Ke=TB();return Ke.$$click=()=>$(!0),k(Ke,()=>e()("profile.loadFollowers")),Ke})()},keyed:!0,get children(){return S(RB,{get pubkey(){return t.pubkey}})}})),ue}}),null),G})(),S(me,{get when(){return(E()?.website??"").length>0},get children(){const G=_B();return k(G,S(me,{get when(){return E()?.website},keyed:!0,children:D=>(()=>{const Z=AB(),te=Z.firstChild;return k(te,S(km,{})),k(Z,S(os,{class:"text-blue-500 underline",href:D}),null),Z})()})),G}}),S(Pn,{get children(){return S(Ye,{get when(){return x()==="Following"},get children(){return S(Nu,{get data(){return q()},pubkeyExtractor:G=>G,onClose:A})}})}}),(()=>{const G=wB();return k(G,S(gR,{get events(){return de()}})),G})()]}})};vt(["click"]);function OB(t,e){for(var n=-1,i=t==null?0:t.length;++n<i&&e(t[n],n,t)!==!1;);return t}var LB=OB,PB=ki,MB=function(){try{var t=PB(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Cm=MB,v0=Cm;function BB(t,e,n){e=="__proto__"&&v0?v0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Sm=BB,jB=Sm,NB=Gu,DB=Object.prototype,UB=DB.hasOwnProperty;function FB(t,e,n){var i=t[e];(!(UB.call(t,e)&&NB(i,n))||n===void 0&&!(e in t))&&jB(t,e,n)}var Zd=FB,zB=Zd,HB=Sm;function WB(t,e,n,i){var o=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var c=e[a],d=i?i(n[c],t[c],c,n,t):void 0;d===void 0&&(d=t[c]),o?HB(n,c,d):zB(n,c,d)}return n}var bo=WB,qB=bo,ZB=Ol;function KB(t,e){return t&&qB(e,ZB(e),t)}var VB=KB;function GB(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var QB=GB,YB=Ei,JB=Ud,XB=QB,ej=Object.prototype,tj=ej.hasOwnProperty;function nj(t){if(!YB(t))return XB(t);var e=JB(t),n=[];for(var i in t)i=="constructor"&&(e||!tj.call(t,i))||n.push(i);return n}var rj=nj,ij=cm,sj=rj,oj=dm;function aj(t){return oj(t)?ij(t,!0):sj(t)}var Kd=aj,lj=bo,cj=Kd;function uj(t,e){return t&&lj(e,cj(e),t)}var dj=uj,nl={exports:{}};nl.exports;(function(t,e){var n=Xn,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a?n.Buffer:void 0,c=l?l.allocUnsafe:void 0;function d(f,p){if(p)return f.slice();var g=f.length,m=c?c(g):new f.constructor(g);return f.copy(m),m}t.exports=d})(nl,nl.exports);var fj=nl.exports;function hj(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}var pj=hj,gj=bo,vj=Ld;function mj(t,e){return gj(t,vj(t),e)}var yj=mj,bj=um,_j=bj(Object.getPrototypeOf,Object),Vd=_j,wj=Od,xj=Vd,$j=Ld,Ej=om,kj=Object.getOwnPropertySymbols,Cj=kj?function(t){for(var e=[];t;)wj(e,$j(t)),t=xj(t);return e}:Ej,Tm=Cj,Sj=bo,Tj=Tm;function Aj(t,e){return Sj(t,Tj(t),e)}var Rj=Aj,Ij=sm,Oj=Tm,Lj=Kd;function Pj(t){return Ij(t,Lj,Oj)}var Gd=Pj,Mj=Object.prototype,Bj=Mj.hasOwnProperty;function jj(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&Bj.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Nj=jj,m0=im;function Dj(t){var e=new t.constructor(t.byteLength);return new m0(e).set(new m0(t)),e}var Qd=Dj,Uj=Qd;function Fj(t,e){var n=e?Uj(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var zj=Fj,Hj=/\w*$/;function Wj(t){var e=new t.constructor(t.source,Hj.exec(t));return e.lastIndex=t.lastIndex,e}var qj=Wj,y0=us,b0=y0?y0.prototype:void 0,_0=b0?b0.valueOf:void 0;function Zj(t){return _0?Object(_0.call(t)):{}}var Kj=Zj,Vj=Qd;function Gj(t,e){var n=e?Vj(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var Qj=Gj,Yj=Qd,Jj=zj,Xj=qj,eN=Kj,tN=Qj,nN="[object Boolean]",rN="[object Date]",iN="[object Map]",sN="[object Number]",oN="[object RegExp]",aN="[object Set]",lN="[object String]",cN="[object Symbol]",uN="[object ArrayBuffer]",dN="[object DataView]",fN="[object Float32Array]",hN="[object Float64Array]",pN="[object Int8Array]",gN="[object Int16Array]",vN="[object Int32Array]",mN="[object Uint8Array]",yN="[object Uint8ClampedArray]",bN="[object Uint16Array]",_N="[object Uint32Array]";function wN(t,e,n){var i=t.constructor;switch(e){case uN:return Yj(t);case nN:case rN:return new i(+t);case dN:return Jj(t,n);case fN:case hN:case pN:case gN:case vN:case mN:case yN:case bN:case _N:return tN(t,n);case iN:return new i;case sN:case lN:return new i(t);case oN:return Xj(t);case aN:return new i;case cN:return eN(t)}}var xN=wN,$N=Ei,w0=Object.create,EN=function(){function t(){}return function(e){if(!$N(e))return{};if(w0)return w0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),kN=EN,CN=kN,SN=Vd,TN=Ud;function AN(t){return typeof t.constructor=="function"&&!TN(t)?CN(SN(t)):{}}var RN=AN,IN=Ll,ON=Yr,LN="[object Map]";function PN(t){return ON(t)&&IN(t)==LN}var MN=PN,BN=MN,jN=Nd,x0=Dd,$0=x0&&x0.isMap,NN=$0?jN($0):BN,DN=NN,UN=Ll,FN=Yr,zN="[object Set]";function HN(t){return FN(t)&&UN(t)==zN}var WN=HN,qN=WN,ZN=Nd,E0=Dd,k0=E0&&E0.isSet,KN=k0?ZN(k0):qN,VN=KN,GN=Id,QN=LB,YN=Zd,JN=VB,XN=dj,eD=fj,tD=pj,nD=yj,rD=Rj,iD=fm,sD=Gd,oD=Ll,aD=Nj,lD=xN,cD=RN,uD=nr,dD=Md,fD=DN,hD=Ei,pD=VN,gD=Ol,vD=Kd,mD=1,yD=2,bD=4,Am="[object Arguments]",_D="[object Array]",wD="[object Boolean]",xD="[object Date]",$D="[object Error]",Rm="[object Function]",ED="[object GeneratorFunction]",kD="[object Map]",CD="[object Number]",Im="[object Object]",SD="[object RegExp]",TD="[object Set]",AD="[object String]",RD="[object Symbol]",ID="[object WeakMap]",OD="[object ArrayBuffer]",LD="[object DataView]",PD="[object Float32Array]",MD="[object Float64Array]",BD="[object Int8Array]",jD="[object Int16Array]",ND="[object Int32Array]",DD="[object Uint8Array]",UD="[object Uint8ClampedArray]",FD="[object Uint16Array]",zD="[object Uint32Array]",rt={};rt[Am]=rt[_D]=rt[OD]=rt[LD]=rt[wD]=rt[xD]=rt[PD]=rt[MD]=rt[BD]=rt[jD]=rt[ND]=rt[kD]=rt[CD]=rt[Im]=rt[SD]=rt[TD]=rt[AD]=rt[RD]=rt[DD]=rt[UD]=rt[FD]=rt[zD]=!0;rt[$D]=rt[Rm]=rt[ID]=!1;function Ta(t,e,n,i,o,a){var l,c=e&mD,d=e&yD,f=e&bD;if(n&&(l=o?n(t,i,o,a):n(t)),l!==void 0)return l;if(!hD(t))return t;var p=uD(t);if(p){if(l=aD(t),!c)return tD(t,l)}else{var g=oD(t),m=g==Rm||g==ED;if(dD(t))return eD(t,c);if(g==Im||g==Am||m&&!o){if(l=d||m?{}:cD(t),!c)return d?rD(t,XN(l,t)):nD(t,JN(l,t))}else{if(!rt[g])return o?t:{};l=lD(t,g,c)}}a||(a=new GN);var w=a.get(t);if(w)return w;a.set(t,l),pD(t)?t.forEach(function(x){l.add(Ta(x,e,n,x,t,a))}):fD(t)&&t.forEach(function(x,C){l.set(C,Ta(x,e,n,C,t,a))});var b=f?d?sD:iD:d?vD:gD,$=p?void 0:b(t);return QN($||t,function(x,C){$&&(C=x,x=t[C]),YN(l,C,Ta(x,e,n,C,t,a))}),l}var HD=Ta;function WD(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var qD=WD;function ZD(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++i<o;)a[i]=t[i+e];return a}var KD=ZD,VD=Pl,GD=KD;function QD(t,e){return e.length<2?t:VD(t,GD(e,0,-1))}var YD=QD,JD=ws,XD=qD,eU=YD,tU=xs;function nU(t,e){return e=JD(e,t),t=eU(t,e),t==null||delete t[tU(XD(e))]}var rU=nU,iU=ds,sU=Vd,oU=Yr,aU="[object Object]",lU=Function.prototype,cU=Object.prototype,Om=lU.toString,uU=cU.hasOwnProperty,dU=Om.call(Object);function fU(t){if(!oU(t)||iU(t)!=aU)return!1;var e=sU(t);if(e===null)return!0;var n=uU.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Om.call(n)==dU}var hU=fU,pU=hU;function gU(t){return pU(t)?void 0:t}var vU=gU,C0=us,mU=Pd,yU=nr,S0=C0?C0.isConcatSpreadable:void 0;function bU(t){return yU(t)||mU(t)||!!(S0&&t&&t[S0])}var _U=bU,wU=Od,xU=_U;function Lm(t,e,n,i,o){var a=-1,l=t.length;for(n||(n=xU),o||(o=[]);++a<l;){var c=t[a];e>0&&n(c)?e>1?Lm(c,e-1,n,i,o):wU(o,c):i||(o[o.length]=c)}return o}var $U=Lm,EU=$U;function kU(t){var e=t==null?0:t.length;return e?EU(t,1):[]}var CU=kU;function SU(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var TU=SU,AU=TU,T0=Math.max;function RU(t,e,n){return e=T0(e===void 0?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=T0(i.length-e,0),l=Array(a);++o<a;)l[o]=i[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=i[o];return c[e]=n(l),AU(t,this,c)}}var IU=RU;function OU(t){return function(){return t}}var LU=OU,PU=LU,A0=Cm,MU=_m,BU=A0?function(t,e){return A0(t,"toString",{configurable:!0,enumerable:!1,value:PU(e),writable:!0})}:MU,jU=BU,NU=800,DU=16,UU=Date.now;function FU(t){var e=0,n=0;return function(){var i=UU(),o=DU-(i-n);if(n=i,o>0){if(++e>=NU)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var zU=FU,HU=jU,WU=zU,qU=WU(HU),ZU=qU,KU=CU,VU=IU,GU=ZU;function QU(t){return GU(VU(t,void 0,KU),t+"")}var YU=QU,JU=Wd,XU=HD,eF=rU,tF=ws,nF=bo,rF=vU,iF=YU,sF=Gd,oF=1,aF=2,lF=4,cF=iF(function(t,e){var n={};if(t==null)return n;var i=!1;e=JU(e,function(a){return a=tF(a,t),i||(i=a.length>1),a}),nF(t,sF(t),n),i&&(n=XU(n,oF|aF|lF,rF));for(var o=e.length;o--;)eF(n,e[o]);return n}),uF=cF;const dF=il(uF);var fF="Expected a function";function hF(t){if(typeof t!="function")throw new TypeError(fF);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var pF=hF,gF=Zd,vF=ws,mF=Bd,R0=Ei,yF=xs;function bF(t,e,n,i){if(!R0(t))return t;e=vF(e,t);for(var o=-1,a=e.length,l=a-1,c=t;c!=null&&++o<a;){var d=yF(e[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return t;if(o!=l){var p=c[d];f=i?i(p,d,c):void 0,f===void 0&&(f=R0(p)?p:mF(e[o+1])?[]:{})}gF(c,d,f),c=c[d]}return t}var _F=bF,wF=Pl,xF=_F,$F=ws;function EF(t,e,n){for(var i=-1,o=e.length,a={};++i<o;){var l=e[i],c=wF(t,l);n(c,l)&&xF(a,$F(l,t),c)}return a}var kF=EF,CF=Wd,SF=qd,TF=kF,AF=Gd;function RF(t,e){if(t==null)return{};var n=CF(AF(t),function(i){return[i]});return e=SF(e),TF(t,n,function(i,o){return e(i,o[0])})}var IF=RF,OF=qd,LF=pF,PF=IF;function MF(t,e){return PF(t,LF(OF(e)))}var BF=MF;const jF=il(BF),NF=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),DF=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),UF=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),FF=B('<div class="px-4 pt-4">'),zF=B('<div><span class="font-bold"></span><div>'),HF=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><span class="text-xs"></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),WF=B('<div class="h-24 shrink-0">'),qF=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),ZF="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",KF="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",VF=new RegExp(`^${ZF}$`),Pm=new RegExp(`^${KF}$`),GF=t=>VF.test(t),QF=t=>Pm.test(t),YF=t=>{const e=yt(),n=Qr(),{config:i}=st(),[o,a]=Te(""),[l,c]=Te(""),[d,f]=Te(""),[p,g]=Te(""),[m,w]=Te(""),[b,$]=Te(""),[x,C]=Te(""),[A,E]=Te(""),{profile:P,invalidateProfile:M,query:I}=ms(()=>xn([n()])(([X])=>({pubkey:X}))),{updateProfile:F}=Il(),N=vi({mutationKey:["updateProfile"],mutationFn:(...X)=>F(...X).then(j=>Promise.allSettled(j.map(Hr(1e4)))),onSuccess:X=>{const j=X.filter(ne=>ne.status==="fulfilled").length,q=X.length-j;j===X.length?window.alert(e()("profile.edit.updateSucceeded")):j>0?window.alert(e()("profile.edit.failedToUpdatePartially",{count:q})):window.alert(e()("profile.edit.failedToUpdate")),M().then(()=>I.refetch()).catch(ne=>console.error(ne)),t.onClose()},onError:X=>{console.error("failed to delete",X)}}),K=()=>I.isLoading||N.isLoading,ee=()=>K();setInterval(()=>console.log(I.isLoading,N.isLoading),1e3);const ie=()=>dF(P(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),se=X=>{X.preventDefault();const j=n();if(j==null)return;const q=jF({picture:o(),banner:l(),name:d(),display_name:p(),about:m(),website:b(),nip05:x(),lud06:GF(A())?A():null,lud16:QF(A())?A():null},ne=>ne==null||ne.length===0);N.mutate({relayUrls:i().relayUrls,pubkey:j,profile:q,otherProperties:ie()})},ae=X=>X.key==="Enter"&&X.preventDefault();return Jn(()=>{const X=P();X!=null&&(I.refetch().catch(j=>console.error(j)),Ra(()=>{a(j=>X.picture??j),c(j=>X.banner??j),f(j=>X.name??j),g(j=>X.display_name??j),w(j=>X.about??j),$(j=>X.website??j),C(j=>X.nip05??j),X.lud16!=null?E(X.lud16):X.lud06!=null&&E(X.lud06)}))}),S(Ti,{closeButton:()=>S(j0,{}),get onClose(){return t.onClose},get children(){return[(()=>{const X=UF(),j=X.firstChild;return k(X,S(me,{get when(){return l().length>0},get fallback(){return WF()},keyed:!0,get children(){const q=NF(),ne=q.firstChild;return Me(()=>Ue(ne,"src",l())),q}}),j),k(j,S(me,{get when(){return o().length>0},get children(){const q=DF();return Me(()=>Ue(q,"src",o())),q}})),X})(),S(me,{get when(){return K()},get children(){const X=FF();return k(X,()=>e()("general.loading")),X}}),(()=>{const X=HF(),j=X.firstChild,q=j.firstChild,ne=q.firstChild,le=ne.nextSibling,Y=q.nextSibling,ye=Y.firstChild,be=ye.nextSibling,xe=Y.nextSibling,Ve=xe.firstChild,de=Ve.nextSibling,G=de.firstChild,D=G.nextSibling,Z=xe.nextSibling,te=Z.firstChild,ue=te.nextSibling,oe=Z.nextSibling,He=oe.firstChild,Ke=He.nextSibling,J=oe.nextSibling,_e=J.firstChild,et=_e.nextSibling,Jt=J.nextSibling,Ct=Jt.firstChild,Ht=Ct.nextSibling,Jr=Jt.nextSibling,En=Jr.firstChild,St=En.nextSibling,Xt=St.nextSibling,Un=Jr.nextSibling,Er=Un.firstChild,kn=Er.nextSibling;return j.addEventListener("submit",se),k(ne,()=>e()("profile.edit.icon")),le.$$keydown=ae,le.addEventListener("blur",Ae=>a(Ae.currentTarget.value)),k(ye,()=>e()("profile.edit.banner")),be.$$keydown=ae,be.addEventListener("blur",Ae=>c(Ae.currentTarget.value)),k(Ve,()=>e()("profile.edit.name")),D.$$keydown=ae,D.addEventListener("change",Ae=>f(Ae.currentTarget.value)),k(te,()=>e()("profile.edit.displayName")),ue.$$keydown=ae,ue.addEventListener("change",Ae=>g(Ae.currentTarget.value)),k(He,()=>e()("profile.edit.about")),Ke.addEventListener("change",Ae=>w(Ae.currentTarget.value)),k(_e,()=>e()("profile.edit.website")),et.$$keydown=ae,et.addEventListener("change",Ae=>$(Ae.currentTarget.value)),k(Ct,()=>e()("profile.edit.nip05")),Ht.$$keydown=ae,Ht.addEventListener("change",Ae=>C(Ae.currentTarget.value)),k(En,()=>e()("profile.edit.lightningAddress")),k(St,()=>e()("profile.edit.lightningAddressDescription")),Xt.$$keydown=ae,Xt.addEventListener("change",Ae=>E(Ae.currentTarget.value)),k(j,S(me,{get when(){return Object.entries(ie()).length>0},get children(){const Ae=zF(),Wt=Ae.firstChild,qt=Wt.nextSibling;return k(Wt,()=>e()("profile.edit.otherProperties")),k(qt,S(Ft,{get each(){return Object.entries(ie())},children:([Cn,Sn])=>(()=>{const un=qF(),dn=un.firstChild,Tn=dn.nextSibling;return k(dn,Cn),k(Tn,Sn),un})()})),Ae}}),Un),k(Er,()=>e()("profile.edit.save")),kn.$$click=()=>t.onClose(),k(kn,()=>e()("profile.edit.cancel")),k(j,S(me,{get when(){return N.isLoading},get children(){return e()("profile.edit.updating")}}),null),Me(Ae=>{const Wt=ee(),qt=ee(),Cn=ee(),Sn=ee(),un=ee(),dn=ee(),Tn=Pm.source,rr=ee(),ir=ee(),sr=N.isLoading;return Wt!==Ae._v$&&(le.disabled=Ae._v$=Wt),qt!==Ae._v$2&&(be.disabled=Ae._v$2=qt),Cn!==Ae._v$3&&(D.disabled=Ae._v$3=Cn),Sn!==Ae._v$4&&(ue.disabled=Ae._v$4=Sn),un!==Ae._v$5&&(Ke.disabled=Ae._v$5=un),dn!==Ae._v$6&&(et.disabled=Ae._v$6=dn),Tn!==Ae._v$7&&Ue(Ht,"pattern",Ae._v$7=Tn),rr!==Ae._v$8&&(Ht.disabled=Ae._v$8=rr),ir!==Ae._v$9&&(Xt.disabled=Ae._v$9=ir),sr!==Ae._v$10&&(Er.disabled=Ae._v$10=sr),Ae},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Me(()=>le.value=o()),Me(()=>be.value=l()),Me(()=>D.value=d()),Me(()=>ue.value=p()),Me(()=>Ke.value=m()),Me(()=>et.value=b()),Me(()=>Ht.value=x()),Me(()=>Xt.value=A()),X})()]}})};vt(["keydown","click"]);const Yz=()=>{const t=Qr(),{modalState:e,showProfile:n,closeModal:i}=Gr();return S(me,{get when(){return e()},keyed:!0,children:o=>S(Pn,{get children(){return[S(Ye,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>S(IB,{pubkey:a,onClose:i})}),S(Ye,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return S(YF,{onClose:()=>xn([t()])(([a])=>{n(a)})})}}),S(Ye,{get when(){return o.type==="AddColumn"},get children(){return S(YM,{onClose:i})}}),S(Ye,{get when(){return o.type==="About"},get children(){return S(GM,{onClose:i})}})]}})})},JF=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),XF=(t={})=>(()=>{const e=JF();return it(e,t,!0,!0),e})(),ez=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),I0=(t={})=>(()=>{const e=ez();return it(e,t,!0,!0),e})(),tz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),nz=(t={})=>(()=>{const e=tz();return it(e,t,!0,!0),e})(),rz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),iz=(t={})=>(()=>{const e=rz();return it(e,t,!0,!0),e})(),sz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),oz=(t={})=>(()=>{const e=sz();return it(e,t,!0,!0),e})(),az=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),lz=(t={})=>(()=>{const e=az();return it(e,t,!0,!0),e})(),O0=mt.string().length(64).regex(/^[0-9a-f]{64}$/),Wu=mt.string().regex(/^\w+$/),cz=mt.object({shortcode:Wu,url:mt.string().url(),keywords:mt.optional(mt.array(Wu))}),uz=mt.object({manifest:mt.literal("emojipack_v1"),name:mt.string(),emojis:mt.array(cz),description:mt.optional(mt.string()),author:mt.optional(O0),publisher:mt.optional(O0)}).refine(t=>wm(t.emojis,n=>n.shortcode).length===t.emojis.length,{message:"shortcodes should be unique"}),Mm=mt.record(Wu,mt.string().url());uz.or(Mm);const dz=t=>Object.entries(t).map(([e,n])=>({shortcode:e,url:n})),fz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),hz=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),pz=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),qu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),gz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),vz=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),mz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),yz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),bz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),_z=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),wz=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),xz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),$z=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Ez=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),kz=B('<div class="p-4">'),Cz=B('<h2 class="flex-1 text-center text-lg font-bold">'),Sz=B('<ul class="flex flex-col">'),Tz=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),Az=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Bm=t=>`^(?:${t})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Rz=Bm("https?"),Iz=Bm("wss?"),Oz=()=>{const t=yt(),e=Qr(),{showProfile:n,showProfileEdit:i}=Gr();return(()=>{const o=fz(),a=o.firstChild,l=a.nextSibling,c=l.firstChild,d=c.nextSibling;return k(a,()=>t()("config.profile.profile")),c.$$click=()=>xn([e()])(([f])=>{n(f)}),k(c,()=>t()("config.profile.openProfile")),d.$$click=()=>i(),k(d,()=>t()("config.profile.editProfile")),o})()},Lz=()=>{const t=yt(),{config:e,addRelay:n,removeRelay:i}=st(),[o,a]=Te(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},c=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([w])=>w).join(`
`);if(d.length===0){window.alert(t()("config.relays.notConfigured"));return}if(!window.confirm(`${t()("config.relays.askImport")}

${f}`))return;const p=e().relayUrls.length;Ra(()=>{d.forEach(([w])=>{n(w)})});const m=e().relayUrls.length-p;window.alert(t()("config.relays.imported",{count:m}))};return[(()=>{const d=hz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.nextSibling,w=m.firstChild,b=w.nextSibling;return k(f,()=>t()("config.relays.relays")),k(p,()=>t()("config.relays.numOfRelays",{count:e().relayUrls.length})),k(g,S(Ft,{get each(){return e().relayUrls},children:$=>(()=>{const x=qu(),C=x.firstChild,A=C.nextSibling;return k(C,$),A.$$click=()=>i($),k(A,S(as,{})),x})()})),m.addEventListener("submit",l),w.addEventListener("change",$=>a($.currentTarget.value)),Ue(w,"pattern",Iz),k(b,()=>t()("config.relays.addRelay")),Me(()=>w.value=o()),d})(),(()=>{const d=pz(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.relays.importRelays")),p.$$click=()=>{c().catch(g=>{console.error("failed to import relays",g),window.alert(t()("config.relays.failedToImport"))})},k(p,()=>t()("config.relays.importFromExtension")),d})()]},Pz=()=>{const t=yt(),{config:e,setConfig:n}=st(),i=[{id:"relative",name:t()("config.display.relativeTimeNotation"),example:t()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:t()("config.display.absoluteTimeNotationShort"),example:t()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:t()("config.display.absoluteTimeNotationLong"),example:t()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=gz(),l=a.firstChild,c=l.nextSibling;return k(l,()=>t()("config.display.timeNotation")),k(c,S(Ft,{each:i,children:({id:d,name:f,example:p})=>(()=>{const g=vz(),m=g.firstChild,w=m.nextSibling;return m.$$click=()=>o(d),k(m,f),k(w,p),Me(b=>{const $=e().dateFormat===d,x=e().dateFormat===d,C=e().dateFormat!==d,A=e().dateFormat!==d;return $!==b._v$&&m.classList.toggle("bg-rose-300",b._v$=$),x!==b._v$2&&m.classList.toggle("text-white",b._v$2=x),C!==b._v$3&&m.classList.toggle("bg-white",b._v$3=C),A!==b._v$4&&m.classList.toggle("text-rose-300",b._v$4=A),b},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Fs=t=>(()=>{const e=mz();return e.$$click=n=>t.onClick(n),Me(n=>{const i=!t.value,o=!t.value,a=!!t.value,l=!!t.value,c=t.value;return i!==n._v$5&&e.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&e.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&e.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&e.classList.toggle("justify-end",n._v$8=l),c!==n._v$9&&Ue(e,"area-label",n._v$9=c),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})(),Mz=()=>{const t=yt(),{config:e,setConfig:n}=st(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=yz(),l=a.firstChild,c=l.nextSibling,d=c.firstChild,f=d.firstChild,p=d.nextSibling,g=p.firstChild;return k(l,()=>t()("config.display.reaction")),k(f,()=>t()("config.display.enableEmojiReaction")),k(d,S(Fs,{get value(){return e().useEmojiReaction},onClick:()=>i()}),null),k(g,()=>t()("config.display.showEmojiReaction")),k(p,S(Fs,{get value(){return e().showEmojiReaction},onClick:()=>o()}),null),a})()},Bz=()=>{const t=yt(),{config:e,saveEmoji:n,removeEmoji:i}=st(),[o,a]=Te(""),[l,c]=Te(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),c(""))};return(()=>{const f=bz(),p=f.firstChild,g=p.nextSibling,m=g.nextSibling,w=m.firstChild,b=w.firstChild,$=b.nextSibling,x=w.nextSibling,C=x.firstChild,A=C.nextSibling,E=x.nextSibling;return k(p,()=>t()("config.customEmoji.customEmoji")),k(g,S(Ft,{get each(){return Object.values(e().customEmojis)},children:({shortcode:P,url:M})=>(()=>{const I=_z(),F=I.firstChild,N=F.nextSibling,K=N.nextSibling;return Ue(F,"src",M),Ue(F,"alt",P),k(N,P),K.$$click=()=>i(P),k(K,S(as,{})),I})()})),m.addEventListener("submit",d),k(b,()=>t()("config.customEmoji.shortcode")),$.addEventListener("change",P=>a(P.currentTarget.value)),k(C,()=>t()("config.customEmoji.url")),A.addEventListener("change",P=>c(P.currentTarget.value)),Ue(A,"pattern",Rz),k(E,()=>t()("config.customEmoji.addEmoji")),Me(()=>$.value=o()),Me(()=>A.value=l()),f})()},jz=()=>{const t=yt(),{saveEmojis:e}=st(),[n,i]=Te(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Mm.parse(JSON.parse(n())),c=dz(l);e(c),i("")}catch(l){const c=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${c}`)}};return(()=>{const a=wz(),l=a.firstChild,c=l.nextSibling,d=c.nextSibling,f=d.firstChild,p=f.nextSibling;return k(l,()=>t()("config.customEmoji.emojiImport")),k(c,()=>t()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),k(p,()=>t()("config.customEmoji.importEmoji")),Me(()=>f.value=n()),a})()},Nz=()=>{const t=yt(),{config:e,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=st(),[a,l]=Te(""),c=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=xz(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.mute.mutedUsers")),k(p,S(Ft,{get each(){return e().mutedPubkeys},children:g=>(()=>{const m=qu(),w=m.firstChild,b=w.nextSibling;return k(w,S(xd,{pubkey:g})),b.$$click=()=>n(g),k(b,S(as,{})),m})()})),d})(),(()=>{const d=$z(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,w=m.nextSibling;return k(f,()=>t()("config.mute.mutedKeywords")),k(p,S(Ft,{get each(){return e().mutedKeywords},children:b=>(()=>{const $=qu(),x=$.firstChild,C=x.nextSibling;return k(x,b),C.$$click=()=>o(b),k(C,S(as,{})),$})()})),g.addEventListener("submit",c),m.addEventListener("change",b=>l(b.currentTarget.value)),k(w,()=>t()("config.mute.add")),Me(()=>m.value=a()),d})()]},Dz=()=>{const t=yt(),{config:e,setConfig:n}=st(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=Ez(),c=l.firstChild,d=c.nextSibling,f=d.firstChild,p=f.firstChild,g=f.nextSibling,m=g.firstChild,w=g.nextSibling,b=w.firstChild;return k(c,()=>t()("config.display.others")),k(p,()=>t()("config.display.keepOpenPostForm")),k(f,S(Fs,{get value(){return e().keepOpenPostForm},onClick:()=>i()}),null),k(m,()=>t()("config.display.showMediaByDefault")),k(g,S(Fs,{get value(){return e().showMedia},onClick:()=>o()}),null),k(b,()=>t()("config.display.hideNumbers")),k(w,S(Fs,{get value(){return e().hideCount},onClick:()=>a()}),null),l})()},Uz=t=>{const e=yt(),[n,i]=Te(null),o=[{name:()=>e()("config.profile.profile"),icon:()=>S(Em,{}),render:()=>S(Oz,{})},{name:()=>e()("config.relays.relays"),icon:()=>S(lz,{}),render:()=>S(Lz,{})},{name:()=>e()("config.display.display"),icon:()=>S(oz,{}),render:()=>[S(Pz,{}),S(Mz,{}),S(Dz,{})]},{name:()=>e()("config.customEmoji.customEmoji"),icon:()=>S(Gv,{}),render:()=>[S(Bz,{}),S(jz,{})]},{name:()=>e()("config.mute.mute"),icon:()=>S(iz,{}),render:()=>S(Nz,{})}],a=()=>{const l=n();return l==null?null:o[l]};return S(Ti,{get onClose(){return t.onClose},get children(){const l=kz();return k(l,S(me,{get when(){return a()},get fallback(){return[(()=>{const c=Cz();return k(c,()=>e()("config.config")),c})(),(()=>{const c=Sz();return k(c,S(Ft,{each:o,children:(d,f)=>(()=>{const p=Tz(),g=p.firstChild,m=g.firstChild;return g.$$click=()=>i(f),k(m,()=>d.icon()),k(g,()=>d.name(),null),p})()})),c})()]},keyed:!0,children:c=>(()=>{const d=Az(),f=d.firstChild,p=f.nextSibling;return f.$$click=()=>i(null),k(f,S(j0,{})),k(p,()=>c.render()),d})()})),l}})};vt(["click"]);const Fz=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),zz=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),Hz=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),Wz=()=>{let t,e;const{saveColumn:n}=st(),i=Sd(),[o,a]=Te(""),l=c=>{c.preventDefault(),n(md({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),t?.close(),a("")};return S($d,{ref:c=>{t=c},position:"right",get button(){return(()=>{const c=zz();return k(c,S(I0,{})),c})()},onOpen:()=>e?.focus(),get children(){const c=Fz(),d=c.firstChild,f=d.nextSibling;c.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=e;return typeof p=="function"?Vn(p,d):e=d,k(f,S(I0,{})),Me(()=>d.value=o()),c}})},Jz=()=>{let t;const{showAddColumn:e,showAbout:n}=Gr(),{config:i}=st(),[o,a]=Te(!1),[l,c]=Te(!1),d=()=>{t?.focus(),t?.click(),t?.setSelectionRange(0,0)},f=()=>a(!0),p=()=>a(!1),g=()=>a(m=>!m);return CT(()=>({commandType:"openPostForm",handler:()=>{f(),t!=null&&setTimeout(()=>d(),100)}})),(()=>{const m=Hz(),w=m.firstChild,b=w.firstChild,$=b.firstChild,x=b.nextSibling,C=x.nextSibling,A=C.firstChild,E=A.nextSibling,P=E.nextSibling,M=P.firstChild,I=w.nextSibling;return $.$$click=()=>g(),k($,S(nz,{})),k(b,S(Wz,{}),null),A.$$click=()=>e(),k(A,S(vv,{})),E.$$click=()=>c(F=>!F),k(E,S(XF,{})),P.$$click=()=>n(),k(I,S(tm,{textAreaRef:F=>{t=F},onClose:p})),k(m,S(me,{get when(){return l()},get children(){return S(Uz,{onClose:()=>c(!1)})}}),null),Me(F=>{const N=Ku("images/rabbit_app_256.png"),K=!!(o()||i().keepOpenPostForm),ee=!(o()||i().keepOpenPostForm);return N!==F._v$&&Ue(M,"src",F._v$=N),K!==F._v$2&&I.classList.toggle("static",F._v$2=K),ee!==F._v$3&&I.classList.toggle("hidden",F._v$3=ee),F},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()};vt(["click"]);export{j0 as A,vs as B,n8 as C,UM as D,oo as E,Em as F,gv as G,jM as H,km as I,Vz as J,ct as K,Ei as L,WM as M,Fd as N,il as O,Yz as P,wd as Q,WC as R,Jz as S,gR as T,xd as U,ho as V,Xn as _,mi as a,st as b,Qz as c,CT as d,KA as e,Sd as f,Jk as g,Qr as h,Ur as i,cs as j,Hr as k,f0 as l,F1 as m,Nr as n,ms as o,ov as p,TC as q,wl as r,bv as s,iv as t,xm as u,fR as v,Gr as w,Ka as x,xn as y,mt as z};
//# sourceMappingURL=SideBar-9b3b4546.js.map
