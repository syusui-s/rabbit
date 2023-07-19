import{v as Rg,w as vu,x as I4,y as Ap,z as Ip,A as R4,B as O4,C as L4,D as Rp,E as P4,G as Og,H as M4,m as rs,I as Lg,J as Sa,n as jr,o as hr,K as zs,L as nl,N as Op,s as Xe,t as j,i as R,a as T,S as fe,c as ke,l as Fe,O as B4,M as Ke,P as j4,b as Dn,k as di,d as mt,u as Rt,Q as N4,e as De,R as D4,g as dr,F as Ht,h as Ge,T as Pg,U as U4,V as z4,f as _a}from"./index-105c766d.js";import{c as Vi,a as Ui,b as H4,d as F4,r as Zu}from"./resolveAsset-db51a2b9.js";class q4 extends Rg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Lp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return mu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return mu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),vu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Pp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(I4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Ap||this.currentResult.isStale||!Ip(this.options.staleTime))return;const n=R4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Ap||this.options.enabled===!1||!Ip(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||O4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,f=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:m,error:_,errorUpdatedAt:w,fetchStatus:$,status:x}=g,C=!1,A=!1,k;if(n._optimisticResults){const U=this.hasListeners(),ne=!U&&Lp(t,n),W=U&&Pp(t,i,n,o);(ne||W)&&($=L4(t.options.networkMode)?"fetching":"paused",m||(x="loading")),n._optimisticResults==="isRestoring"&&($="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&x!=="error")k=p.data,m=p.dataUpdatedAt,x=p.status,C=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)k=this.selectResult;else try{this.selectFn=n.select,k=n.select(g.data),k=Rp(a?.data,k,n),this.selectResult=k,this.selectError=null}catch(U){this.selectError=U}else k=g.data;if(typeof n.placeholderData<"u"&&typeof k>"u"&&x==="loading"){let U;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)U=a.data;else if(U=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof U<"u")try{U=n.select(U),this.selectError=null}catch(ne){this.selectError=ne}typeof U<"u"&&(x="success",k=Rp(a?.data,U,n),A=!0)}this.selectError&&(_=this.selectError,k=this.selectResult,w=Date.now(),x="error");const E=$==="fetching",I=x==="loading",L=x==="error";return{status:x,fetchStatus:$,isLoading:I,isSuccess:x==="success",isError:L,isInitialLoading:I&&E,data:k,dataUpdatedAt:m,error:_,errorUpdatedAt:w,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:E,isRefetching:E&&!I,isLoadingError:L&&g.dataUpdatedAt===0,isPaused:$==="paused",isPlaceholderData:A,isPreviousData:C,isRefetchError:L&&g.dataUpdatedAt!==0,isStale:Vu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,vu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const f=d;return this.currentResult[f]!==n[f]&&u.has(f)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!P4(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Og.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function W4(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Lp(e,t){return W4(e,t)||e.state.dataUpdatedAt>0&&mu(e,t,t.refetchOnMount)}function mu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Vu(e,t)}return!1}function Pp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Vu(e,n)}function Vu(e,t){return e.isStaleByTime(t.staleTime)}class Z4 extends Rg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),vu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:M4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Og.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function V4(e){return typeof e=="function"}function Mp(e,t,n){if(!V4(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Mg(e,t){return typeof e=="function"?e(...t):!!e}function K4(e,t){const n=rs({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=Vi(a.getOptimisticResult(o)),[d,{refetch:f,mutate:p}]=Lg(()=>new Promise(w=>{l.isFetching&&l.isLoading||(Ui(l.data)===i&&w(void 0),w(Ui(l.data)))}));Sa(()=>{p(()=>Ui(l.data)),f()});let g=[];const m=a.subscribe(w=>{g.push(()=>{Sa(()=>{const $={...Ui(w)};$.data===void 0&&($.data=i),u(Ui($)),p(()=>Ui(w.data)),f()})}),queueMicrotask(()=>{const $=g.pop();$&&$(),g=[]})});jr(()=>m()),hr(()=>{a.setOptions(o,{listeners:!1})}),zs(()=>{const w=n.defaultQueryOptions(e);a.setOptions(w)}),zs(nl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Mg(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const _={get(w,$){return $==="data"?d():Reflect.get(w,$)}};return new Proxy(l,_)}function is(e,t,n){const[i,o]=Vi(Mp(e,t,n));return zs(()=>{const a=Mp(e,t,n);o(a)}),K4(i,q4)}function fi(e,t,n){const[i,o]=Vi(Op(e,t,n)),a=rs({context:i.context}),l=new Z4(a,i),u=(g,m)=>{l.mutate(g,m).catch(G4)},[d,f]=Vi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});zs(()=>{const g=Op(e,t,n);o(g),l.setOptions(g)}),zs(nl(()=>d.status,()=>{if(d.isError&&Mg(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return jr(p),d}function G4(){}const Q4=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Bg=(e={})=>(()=>{const t=Q4();return Xe(t,e,!0,!0),t})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function oo(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Y4=typeof xt=="object"&&xt&&xt.Object===Object&&xt,jg=Y4,J4=jg,X4=typeof self=="object"&&self&&self.Object===Object&&self,e5=J4||X4||Function("return this")(),Wn=e5,t5=Wn,n5=t5.Symbol,ss=n5,Bp=ss,Ng=Object.prototype,r5=Ng.hasOwnProperty,i5=Ng.toString,Bs=Bp?Bp.toStringTag:void 0;function s5(e){var t=r5.call(e,Bs),n=e[Bs];try{e[Bs]=void 0;var i=!0}catch{}var o=i5.call(e);return i&&(t?e[Bs]=n:delete e[Bs]),o}var o5=s5,a5=Object.prototype,l5=a5.toString;function c5(e){return l5.call(e)}var u5=c5,jp=ss,d5=o5,f5=u5,h5="[object Null]",p5="[object Undefined]",Np=jp?jp.toStringTag:void 0;function g5(e){return e==null?e===void 0?p5:h5:Np&&Np in Object(e)?d5(e):f5(e)}var os=g5;function v5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var bi=v5,m5=os,b5=bi,y5="[object AsyncFunction]",_5="[object Function]",w5="[object GeneratorFunction]",x5="[object Proxy]";function $5(e){if(!b5(e))return!1;var t=m5(e);return t==_5||t==w5||t==y5||t==x5}var Dg=$5,E5=Wn,k5=E5["__core-js_shared__"],C5=k5,Jc=C5,Dp=function(){var e=/[^.]+$/.exec(Jc&&Jc.keys&&Jc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function S5(e){return!!Dp&&Dp in e}var T5=S5,A5=Function.prototype,I5=A5.toString;function R5(e){if(e!=null){try{return I5.call(e)}catch{}try{return e+""}catch{}}return""}var Ug=R5,O5=Dg,L5=T5,P5=bi,M5=Ug,B5=/[\\^$.*+?()[\]{}|]/g,j5=/^\[object .+?Constructor\]$/,N5=Function.prototype,D5=Object.prototype,U5=N5.toString,z5=D5.hasOwnProperty,H5=RegExp("^"+U5.call(z5).replace(B5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function F5(e){if(!P5(e)||L5(e))return!1;var t=O5(e)?H5:j5;return t.test(M5(e))}var q5=F5;function W5(e,t){return e?.[t]}var Z5=W5,V5=q5,K5=Z5;function G5(e,t){var n=K5(e,t);return V5(n)?n:void 0}var yi=G5,Q5=yi,Y5=Q5(Object,"create"),il=Y5,Up=il;function J5(){this.__data__=Up?Up(null):{},this.size=0}var X5=J5;function e$(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var t$=e$,n$=il,r$="__lodash_hash_undefined__",i$=Object.prototype,s$=i$.hasOwnProperty;function o$(e){var t=this.__data__;if(n$){var n=t[e];return n===r$?void 0:n}return s$.call(t,e)?t[e]:void 0}var a$=o$,l$=il,c$=Object.prototype,u$=c$.hasOwnProperty;function d$(e){var t=this.__data__;return l$?t[e]!==void 0:u$.call(t,e)}var f$=d$,h$=il,p$="__lodash_hash_undefined__";function g$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=h$&&t===void 0?p$:t,this}var v$=g$,m$=X5,b$=t$,y$=a$,_$=f$,w$=v$;function as(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}as.prototype.clear=m$;as.prototype.delete=b$;as.prototype.get=y$;as.prototype.has=_$;as.prototype.set=w$;var x$=as;function $$(){this.__data__=[],this.size=0}var E$=$$;function k$(e,t){return e===t||e!==e&&t!==t}var Ku=k$,C$=Ku;function S$(e,t){for(var n=e.length;n--;)if(C$(e[n][0],t))return n;return-1}var sl=S$,T$=sl,A$=Array.prototype,I$=A$.splice;function R$(e){var t=this.__data__,n=T$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():I$.call(t,n,1),--this.size,!0}var O$=R$,L$=sl;function P$(e){var t=this.__data__,n=L$(t,e);return n<0?void 0:t[n][1]}var M$=P$,B$=sl;function j$(e){return B$(this.__data__,e)>-1}var N$=j$,D$=sl;function U$(e,t){var n=this.__data__,i=D$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var z$=U$,H$=E$,F$=O$,q$=M$,W$=N$,Z$=z$;function ls(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ls.prototype.clear=H$;ls.prototype.delete=F$;ls.prototype.get=q$;ls.prototype.has=W$;ls.prototype.set=Z$;var ol=ls,V$=yi,K$=Wn,G$=V$(K$,"Map"),Gu=G$,zp=x$,Q$=ol,Y$=Gu;function J$(){this.size=0,this.__data__={hash:new zp,map:new(Y$||Q$),string:new zp}}var X$=J$;function e8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var t8=e8,n8=t8;function r8(e,t){var n=e.__data__;return n8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var al=r8,i8=al;function s8(e){var t=i8(this,e).delete(e);return this.size-=t?1:0,t}var o8=s8,a8=al;function l8(e){return a8(this,e).get(e)}var c8=l8,u8=al;function d8(e){return u8(this,e).has(e)}var f8=d8,h8=al;function p8(e,t){var n=h8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var g8=p8,v8=X$,m8=o8,b8=c8,y8=f8,_8=g8;function cs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}cs.prototype.clear=v8;cs.prototype.delete=m8;cs.prototype.get=b8;cs.prototype.has=y8;cs.prototype.set=_8;var Qu=cs,w8="__lodash_hash_undefined__";function x8(e){return this.__data__.set(e,w8),this}var $8=x8;function E8(e){return this.__data__.has(e)}var k8=E8,C8=Qu,S8=$8,T8=k8;function Ta(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new C8;++t<n;)this.add(e[t])}Ta.prototype.add=Ta.prototype.push=S8;Ta.prototype.has=T8;var zg=Ta;function A8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var I8=A8;function R8(e){return e!==e}var O8=R8;function L8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var P8=L8,M8=I8,B8=O8,j8=P8;function N8(e,t,n){return t===t?j8(e,t,n):M8(e,B8,n)}var D8=N8,U8=D8;function z8(e,t){var n=e==null?0:e.length;return!!n&&U8(e,t,0)>-1}var H8=z8;function F8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var q8=F8;function W8(e,t){return e.has(t)}var Hg=W8,Z8=yi,V8=Wn,K8=Z8(V8,"Set"),Fg=K8;function G8(){}var Q8=G8;function Y8(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Yu=Y8,Xc=Fg,J8=Q8,X8=Yu,e6=1/0,t6=Xc&&1/X8(new Xc([,-0]))[1]==e6?function(e){return new Xc(e)}:J8,n6=t6,r6=zg,i6=H8,s6=q8,o6=Hg,a6=n6,l6=Yu,c6=200;function u6(e,t,n){var i=-1,o=i6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=s6;else if(a>=c6){var f=t?null:a6(e);if(f)return l6(f);l=!1,o=o6,d=new r6}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var m=d.length;m--;)if(d[m]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var qg=u6,d6=qg;function f6(e){return e&&e.length?d6(e):[]}var h6=f6;const Pr=rl(h6),p6=j('<div class="block shrink-0 overflow-hidden border-b p-1">'),g6=e=>(()=>{const t=p6();return R(t,()=>e.children),t})();function bu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function v6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Wg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function m6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");bu(e.outputLen),bu(e.blockLen)}function b6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function y6(e,t){Wg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const ai={number:bu,bool:v6,bytes:Wg,hash:m6,exists:b6,output:y6},wa=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,_6=Object.freeze(Object.defineProperty({__proto__:null,crypto:wa},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const w6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),x6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),hi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Cn=(e,t)=>e<<32-t|e>>>t,Zg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Zg)throw new Error("Non little-endian hardware is not supported");const $6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function sn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=$6[e[n]];return t}function Nr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Vg=async()=>{};async function E6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Vg(),i+=a)}}function Ju(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function ao(e){if(typeof e=="string"&&(e=Ju(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function li(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class Xu{clone(){return this._cloneInto()}}const k6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function C6(e,t){if(t!==void 0&&(typeof t!="object"||!k6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function ll(e){const t=i=>e().update(ao(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function S6(e){const t=(i,o)=>e(o).update(ao(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function cl(e=32){if(wa&&typeof wa.getRandomValues=="function")return wa.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const T6=Object.freeze(Object.defineProperty({__proto__:null,Hash:Xu,asyncLoop:E6,bytesToHex:sn,checkOpts:C6,concatBytes:li,createView:hi,hexToBytes:Nr,isLE:Zg,nextTick:Vg,randomBytes:cl,rotr:Cn,toBytes:ao,u32:x6,u8:w6,utf8ToBytes:Ju,wrapConstructor:ll,wrapConstructorWithOpts:S6},Symbol.toStringTag,{value:"Module"}));function A6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}let Kg=class extends Xu{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=hi(this.buffer)}update(t){ai.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=ao(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=hi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){ai.exists(this),ai.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;A6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=hi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const I6=(e,t,n)=>e&t^~e&n,R6=(e,t,n)=>e&t^e&n^t&n,O6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Cr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Sr=new Uint32Array(64);class Gg extends Kg{constructor(){super(64,32,8,!1),this.A=Cr[0]|0,this.B=Cr[1]|0,this.C=Cr[2]|0,this.D=Cr[3]|0,this.E=Cr[4]|0,this.F=Cr[5]|0,this.G=Cr[6]|0,this.H=Cr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Sr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const m=Sr[g-15],_=Sr[g-2],w=Cn(m,7)^Cn(m,18)^m>>>3,$=Cn(_,17)^Cn(_,19)^_>>>10;Sr[g]=$+Sr[g-7]+w+Sr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:p}=this;for(let g=0;g<64;g++){const m=Cn(u,6)^Cn(u,11)^Cn(u,25),_=p+m+I6(u,d,f)+O6[g]+Sr[g]|0,$=(Cn(i,2)^Cn(i,13)^Cn(i,22))+R6(i,o,a)|0;p=f,f=d,d=u,u=l+_|0,l=a,a=o,o=i,i=_+$|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,f,p)}roundClean(){Sr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class L6 extends Gg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const zn=ll(()=>new Gg),P6=ll(()=>new L6),M6=Object.freeze(Object.defineProperty({__proto__:null,sha224:P6,sha256:zn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Qg=BigInt(0),ul=BigInt(1),B6=BigInt(2),dl=e=>e instanceof Uint8Array,j6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ki(e){if(!dl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=j6[e[n]];return t}function Yg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function ed(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function Gi(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function zt(e){return ed(Ki(e))}function td(e){if(!dl(e))throw new Error("Uint8Array expected");return ed(Ki(Uint8Array.from(e).reverse()))}const Mr=(e,t)=>Gi(e.toString(16).padStart(t*2,"0")),Jg=(e,t)=>Mr(e,t).reverse(),N6=e=>Gi(Yg(e));function It(e,t,n){let i;if(typeof t=="string")try{i=Gi(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(dl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function on(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!dl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function D6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function fl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function U6(e){let t;for(t=0;e>Qg;e>>=ul,t+=1);return t}const z6=(e,t)=>e>>BigInt(t)&ul,H6=(e,t,n)=>e|(n?ul:Qg)<<BigInt(t),nd=e=>(B6<<BigInt(e-1))-ul,eu=e=>new Uint8Array(e),Hp=e=>Uint8Array.from(e);function Xg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=eu(e),o=eu(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=eu())=>{o=u(Hp([0]),g),i=u(),g.length!==0&&(o=u(Hp([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const m=[];for(;g<t;){i=u();const _=i.slice();m.push(_),g+=i.length}return on(...m)};return(g,m)=>{l(),d(g);let _;for(;!(_=m(f()));)d();return l(),_}}const F6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function us(e,t,n={}){const i=(o,a,l)=>{const u=F6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const q6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:z6,bitLen:U6,bitMask:nd,bitSet:H6,bytesToHex:Ki,bytesToNumberBE:zt,bytesToNumberLE:td,concatBytes:on,createHmacDrbg:Xg,ensureBytes:It,equalBytes:D6,hexToBytes:Gi,hexToNumber:ed,numberToBytesBE:Mr,numberToBytesLE:Jg,numberToHexUnpadded:Yg,numberToVarBytesBE:N6,utf8ToBytes:fl,validateObject:us},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),ft=BigInt(1),si=BigInt(2),W6=BigInt(3),yu=BigInt(4),Fp=BigInt(5),qp=BigInt(8);BigInt(9);BigInt(16);function wt(e,t){const n=e%t;return n>=kt?n:t+n}function Z6(e,t,n){if(n<=kt||t<kt)throw new Error("Expected power/modulo > 0");if(n===ft)return kt;let i=ft;for(;t>kt;)t&ft&&(i=i*e%n),e=e*e%n,t>>=ft;return i}function vn(e,t,n){let i=e;for(;t-- >kt;)i*=i,i%=n;return i}function _u(e,t){if(e===kt||t<=kt)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=wt(e,t),i=t,o=kt,a=ft;for(;n!==kt;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==ft)throw new Error("invert: does not exist");return wt(o,t)}function V6(e){const t=(e-ft)/si;let n,i,o;for(n=e-ft,i=0;n%si===kt;n/=si,i++);for(o=si;o<e&&Z6(o,t,e)!==e-ft;o++);if(i===1){const l=(e+ft)/yu;return function(d,f){const p=d.pow(f,l);if(!d.eql(d.sqr(p),f))throw new Error("Cannot find square root");return p}}const a=(n+ft)/si;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),m=u.pow(d,n);for(;!u.eql(m,u.ONE);){if(u.eql(m,u.ZERO))return u.ZERO;let _=1;for(let $=u.sqr(m);_<f&&!u.eql($,u.ONE);_++)$=u.sqr($);const w=u.pow(p,ft<<BigInt(f-_-1));p=u.sqr(w),g=u.mul(g,w),m=u.mul(m,p),f=_}return g}}function K6(e){if(e%yu===W6){const t=(e+ft)/yu;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%qp===Fp){const t=(e-Fp)/qp;return function(i,o){const a=i.mul(o,si),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,si),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return V6(e)}const G6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function e1(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=G6.reduce((i,o)=>(i[o]="function",i),t);return us(e,n)}function Q6(e,t,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return e.ONE;if(n===ft)return t;let i=e.ONE,o=t;for(;n>kt;)n&ft&&(i=e.mul(i,o)),o=e.sqr(o),n>>=ft;return i}function Y6(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function rd(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function J6(e,t,n=!1,i={}){if(e<=kt)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=rd(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=K6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:nd(o),ZERO:kt,ONE:ft,create:d=>wt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<e},is0:d=>d===kt,isOdd:d=>(d&ft)===ft,neg:d=>wt(-d,e),eql:(d,f)=>d===f,sqr:d=>wt(d*d,e),add:(d,f)=>wt(d+f,e),sub:(d,f)=>wt(d-f,e),mul:(d,f)=>wt(d*f,e),pow:(d,f)=>Q6(u,d,f),div:(d,f)=>wt(d*_u(f,e),e),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>_u(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>Y6(u,d),cmov:(d,f,p)=>p?f:d,toBytes:d=>n?Jg(d,a):Mr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?td(d):zt(d)}});return Object.freeze(u)}function X6(e,t,n=!1){e=It("privateHash",e);const i=e.length,o=rd(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?td(e):zt(e);return wt(a,t-ft)+ft}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const e7=BigInt(0),tu=BigInt(1);function t7(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>e7;)a&tu&&(l=l.add(u)),u=u.double(),a>>=tu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,p=f;for(let g=0;g<l;g++){p=f,d.push(p);for(let m=1;m<u;m++)p=p.add(f),d.push(p);f=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),m=2**o,_=BigInt(o);for(let w=0;w<u;w++){const $=w*d;let x=Number(l&g);l>>=_,x>d&&(x-=m,l+=tu);const C=$,A=$+Math.abs(x)-1,k=w%2!==0,E=x<0;x===0?p=p.add(n(k,a[C])):f=f.add(n(E,a[A]))}return{p:f,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function t1(e){return e1(e.Fp),us(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...rd(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function n7(e){const t=t1(e);us(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:r7,hexToBytes:i7}=q6,ci={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=ci;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:r7(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=ci,n=typeof e=="string"?i7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=ci._parseInt(n.subarray(2)),{d:l,l:u}=ci._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const p=f.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},Tn=BigInt(0),pt=BigInt(1),ar=BigInt(2),Aa=BigInt(3),Wp=BigInt(4);function s7(e){const t=n7(e),{Fp:n}=t,i=t.toBytes||((w,$,x)=>{const C=$.toAffine();return on(Uint8Array.from([4]),n.toBytes(C.x),n.toBytes(C.y))}),o=t.fromBytes||(w=>{const $=w.subarray(1),x=n.fromBytes($.subarray(0,n.BYTES)),C=n.fromBytes($.subarray(n.BYTES,2*n.BYTES));return{x,y:C}});function a(w){const{a:$,b:x}=t,C=n.sqr(w),A=n.mul(C,w);return n.add(n.add(A,n.mul(w,$)),x)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l(w){return typeof w=="bigint"&&Tn<w&&w<t.n}function u(w){if(!l(w))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(w){const{allowedPrivateKeyLengths:$,nByteLength:x,wrapPrivateKey:C,n:A}=t;if($&&typeof w!="bigint"){if(w instanceof Uint8Array&&(w=Ki(w)),typeof w!="string"||!$.includes(w.length))throw new Error("Invalid key");w=w.padStart(x*2,"0")}let k;try{k=typeof w=="bigint"?w:zt(It("private key",w,x))}catch{throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof w}`)}return C&&(k=wt(k,A)),u(k),k}const f=new Map;function p(w){if(!(w instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor($,x,C){if(this.px=$,this.py=x,this.pz=C,$==null||!n.isValid($))throw new Error("x required");if(x==null||!n.isValid(x))throw new Error("y required");if(C==null||!n.isValid(C))throw new Error("z required")}static fromAffine($){const{x,y:C}=$||{};if(!$||!n.isValid(x)||!n.isValid(C))throw new Error("invalid affine point");if($ instanceof g)throw new Error("projective point not allowed");const A=k=>n.eql(k,n.ZERO);return A(x)&&A(C)?g.ZERO:new g(x,C,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ($){const x=n.invertBatch($.map(C=>C.pz));return $.map((C,A)=>C.toAffine(x[A])).map(g.fromAffine)}static fromHex($){const x=g.fromAffine(o(It("pointHex",$)));return x.assertValidity(),x}static fromPrivateKey($){return g.BASE.multiply(d($))}_setWindowSize($){this._WINDOW_SIZE=$,f.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:$,y:x}=this.toAffine();if(!n.isValid($)||!n.isValid(x))throw new Error("bad point: x or y not FE");const C=n.sqr(x),A=a($);if(!n.eql(C,A))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:$}=this.toAffine();if(n.isOdd)return!n.isOdd($);throw new Error("Field doesn't support isOdd")}equals($){p($);const{px:x,py:C,pz:A}=this,{px:k,py:E,pz:I}=$,L=n.eql(n.mul(x,I),n.mul(k,A)),B=n.eql(n.mul(C,I),n.mul(E,A));return L&&B}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:$,b:x}=t,C=n.mul(x,Aa),{px:A,py:k,pz:E}=this;let I=n.ZERO,L=n.ZERO,B=n.ZERO,U=n.mul(A,A),ne=n.mul(k,k),W=n.mul(E,E),J=n.mul(A,k);return J=n.add(J,J),B=n.mul(A,E),B=n.add(B,B),I=n.mul($,B),L=n.mul(C,W),L=n.add(I,L),I=n.sub(ne,L),L=n.add(ne,L),L=n.mul(I,L),I=n.mul(J,I),B=n.mul(C,B),W=n.mul($,W),J=n.sub(U,W),J=n.mul($,J),J=n.add(J,B),B=n.add(U,U),U=n.add(B,U),U=n.add(U,W),U=n.mul(U,J),L=n.add(L,U),W=n.mul(k,E),W=n.add(W,W),U=n.mul(W,J),I=n.sub(I,U),B=n.mul(W,ne),B=n.add(B,B),B=n.add(B,B),new g(I,L,B)}add($){p($);const{px:x,py:C,pz:A}=this,{px:k,py:E,pz:I}=$;let L=n.ZERO,B=n.ZERO,U=n.ZERO;const ne=t.a,W=n.mul(t.b,Aa);let J=n.mul(x,k),V=n.mul(C,E),Y=n.mul(A,I),re=n.add(x,C),q=n.add(k,E);re=n.mul(re,q),q=n.add(J,V),re=n.sub(re,q),q=n.add(x,A);let ee=n.add(k,I);return q=n.mul(q,ee),ee=n.add(J,Y),q=n.sub(q,ee),ee=n.add(C,A),L=n.add(E,I),ee=n.mul(ee,L),L=n.add(V,Y),ee=n.sub(ee,L),U=n.mul(ne,q),L=n.mul(W,Y),U=n.add(L,U),L=n.sub(V,U),U=n.add(V,U),B=n.mul(L,U),V=n.add(J,J),V=n.add(V,J),Y=n.mul(ne,Y),q=n.mul(W,q),V=n.add(V,Y),Y=n.sub(J,Y),Y=n.mul(ne,Y),q=n.add(q,Y),J=n.mul(V,q),B=n.add(B,J),J=n.mul(ee,q),L=n.mul(re,L),L=n.sub(L,J),J=n.mul(re,V),U=n.mul(ee,U),U=n.add(U,J),new g(L,B,U)}subtract($){return this.add($.negate())}is0(){return this.equals(g.ZERO)}wNAF($){return _.wNAFCached(this,f,$,x=>{const C=n.invertBatch(x.map(A=>A.pz));return x.map((A,k)=>A.toAffine(C[k])).map(g.fromAffine)})}multiplyUnsafe($){const x=g.ZERO;if($===Tn)return x;if(u($),$===pt)return this;const{endo:C}=t;if(!C)return _.unsafeLadder(this,$);let{k1neg:A,k1:k,k2neg:E,k2:I}=C.splitScalar($),L=x,B=x,U=this;for(;k>Tn||I>Tn;)k&pt&&(L=L.add(U)),I&pt&&(B=B.add(U)),U=U.double(),k>>=pt,I>>=pt;return A&&(L=L.negate()),E&&(B=B.negate()),B=new g(n.mul(B.px,C.beta),B.py,B.pz),L.add(B)}multiply($){u($);let x=$,C,A;const{endo:k}=t;if(k){const{k1neg:E,k1:I,k2neg:L,k2:B}=k.splitScalar(x);let{p:U,f:ne}=this.wNAF(I),{p:W,f:J}=this.wNAF(B);U=_.constTimeNegate(E,U),W=_.constTimeNegate(L,W),W=new g(n.mul(W.px,k.beta),W.py,W.pz),C=U.add(W),A=ne.add(J)}else{const{p:E,f:I}=this.wNAF(x);C=E,A=I}return g.normalizeZ([C,A])[0]}multiplyAndAddUnsafe($,x,C){const A=g.BASE,k=(I,L)=>L===Tn||L===pt||!I.equals(A)?I.multiplyUnsafe(L):I.multiply(L),E=k(this,x).add(k($,C));return E.is0()?void 0:E}toAffine($){const{px:x,py:C,pz:A}=this,k=this.is0();$==null&&($=k?n.ONE:n.inv(A));const E=n.mul(x,$),I=n.mul(C,$),L=n.mul(A,$);if(k)return{x:n.ZERO,y:n.ZERO};if(!n.eql(L,n.ONE))throw new Error("invZ was invalid");return{x:E,y:I}}isTorsionFree(){const{h:$,isTorsionFree:x}=t;if($===pt)return!0;if(x)return x(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:$,clearCofactor:x}=t;return $===pt?this:x?x(g,this):this.multiplyUnsafe(t.h)}toRawBytes($=!0){return this.assertValidity(),i(g,this,$)}toHex($=!0){return Ki(this.toRawBytes($))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const m=t.nBitLength,_=t7(g,t.endo?Math.ceil(m/2):m);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function o7(e){const t=t1(e);return us(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function a7(e){const t=o7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(q){return Tn<q&&q<n.ORDER}function u(q){return wt(q,i)}function d(q){return _u(q,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:m}=s7({...t,toBytes(q,ee,ce){const ge=ee.toAffine(),te=n.toBytes(ge.x),he=on;return ce?he(Uint8Array.from([ee.hasEvenY()?2:3]),te):he(Uint8Array.from([4]),te,n.toBytes(ge.y))},fromBytes(q){const ee=q.length,ce=q[0],ge=q.subarray(1);if(ee===o&&(ce===2||ce===3)){const te=zt(ge);if(!l(te))throw new Error("Point is not on curve");const he=g(te);let pe=n.sqrt(he);const Le=(pe&pt)===pt;return(ce&1)===1!==Le&&(pe=n.neg(pe)),{x:te,y:pe}}else if(ee===a&&ce===4){const te=n.fromBytes(ge.subarray(0,n.BYTES)),he=n.fromBytes(ge.subarray(n.BYTES,2*n.BYTES));return{x:te,y:he}}else throw new Error(`Point of length ${ee} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),_=q=>Ki(Mr(q,t.nByteLength));function w(q){const ee=i>>pt;return q>ee}function $(q){return w(q)?u(-q):q}const x=(q,ee,ce)=>zt(q.slice(ee,ce));class C{constructor(ee,ce,ge){this.r=ee,this.s=ce,this.recovery=ge,this.assertValidity()}static fromCompact(ee){const ce=t.nByteLength;return ee=It("compactSignature",ee,ce*2),new C(x(ee,0,ce),x(ee,ce,2*ce))}static fromDER(ee){const{r:ce,s:ge}=ci.toSig(It("DER",ee));return new C(ce,ge)}assertValidity(){if(!m(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!m(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(ee){return new C(this.r,this.s,ee)}recoverPublicKey(ee){const{r:ce,s:ge,recovery:te}=this,he=B(It("msgHash",ee));if(te==null||![0,1,2,3].includes(te))throw new Error("recovery id invalid");const pe=te===2||te===3?ce+t.n:ce;if(pe>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Le=te&1?"03":"02",Q=f.fromHex(Le+_(pe)),de=d(pe),G=u(-he*de),oe=u(ge*de),ve=f.BASE.multiplyAndAddUnsafe(Q,G,oe);if(!ve)throw new Error("point at infinify");return ve.assertValidity(),ve}hasHighS(){return w(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Gi(this.toDERHex())}toDERHex(){return ci.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Gi(this.toCompactHex())}toCompactHex(){return _(this.r)+_(this.s)}}const A={isValidPrivateKey(q){try{return p(q),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const q=t.randomBytes(n.BYTES+8),ee=X6(q,i);return Mr(ee,t.nByteLength)},precompute(q=8,ee=f.BASE){return ee._setWindowSize(q),ee.multiply(BigInt(3)),ee}};function k(q,ee=!0){return f.fromPrivateKey(q).toRawBytes(ee)}function E(q){const ee=q instanceof Uint8Array,ce=typeof q=="string",ge=(ee||ce)&&q.length;return ee?ge===o||ge===a:ce?ge===2*o||ge===2*a:q instanceof f}function I(q,ee,ce=!0){if(E(q))throw new Error("first arg must be private key");if(!E(ee))throw new Error("second arg must be public key");return f.fromHex(ee).multiply(p(q)).toRawBytes(ce)}const L=t.bits2int||function(q){const ee=zt(q),ce=q.length*8-t.nBitLength;return ce>0?ee>>BigInt(ce):ee},B=t.bits2int_modN||function(q){return u(L(q))},U=nd(t.nBitLength);function ne(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(Tn<=q&&q<U))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Mr(q,t.nByteLength)}function W(q,ee,ce=J){if(["recovered","canonical"].some(Ee=>Ee in ce))throw new Error("sign() legacy options not supported");const{hash:ge,randomBytes:te}=t;let{lowS:he,prehash:pe,extraEntropy:Le}=ce;he==null&&(he=!0),q=It("msgHash",q),pe&&(q=It("prehashed msgHash",ge(q)));const Q=B(q),de=p(ee),G=[ne(de),ne(Q)];if(Le!=null){const Ee=Le===!0?te(n.BYTES):Le;G.push(It("extraEntropy",Ee,n.BYTES))}const oe=on(...G),ve=Q;function N(Ee){const tt=L(Ee);if(!m(tt))return;const ht=d(tt),it=f.BASE.multiply(tt).toAffine(),Pe=u(it.x);if(Pe===Tn)return;const ze=u(ht*u(ve+Pe*de));if(ze===Tn)return;let Ct=(it.x===Pe?0:2)|Number(it.y&pt),yn=ze;return he&&w(ze)&&(yn=$(ze),Ct^=1),new C(Pe,yn,Ct)}return{seed:oe,k2sig:N}}const J={lowS:t.lowS,prehash:!1},V={lowS:t.lowS,prehash:!1};function Y(q,ee,ce=J){const{seed:ge,k2sig:te}=W(q,ee,ce);return Xg(t.hash.outputLen,t.nByteLength,t.hmac)(ge,te)}f.BASE._setWindowSize(8);function re(q,ee,ce,ge=V){const te=q;if(ee=It("msgHash",ee),ce=It("publicKey",ce),"strict"in ge)throw new Error("options.strict was renamed to lowS");const{lowS:he,prehash:pe}=ge;let Le,Q;try{if(typeof te=="string"||te instanceof Uint8Array)try{Le=C.fromDER(te)}catch(it){if(!(it instanceof ci.Err))throw it;Le=C.fromCompact(te)}else if(typeof te=="object"&&typeof te.r=="bigint"&&typeof te.s=="bigint"){const{r:it,s:Pe}=te;Le=new C(it,Pe)}else throw new Error("PARSE");Q=f.fromHex(ce)}catch(it){if(it.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(he&&Le.hasHighS())return!1;pe&&(ee=t.hash(ee));const{r:de,s:G}=Le,oe=B(ee),ve=d(G),N=u(oe*ve),Ee=u(de*ve),tt=f.BASE.multiplyAndAddUnsafe(Q,N,Ee)?.toAffine();return tt?u(tt.x)===de:!1}return{CURVE:t,getPublicKey:k,getSharedSecret:I,sign:Y,verify:re,ProjectivePoint:f,Signature:C,utils:A}}function l7(e,t){const n=e.ORDER;let i=Tn;for(let m=n-pt;m%ar===Tn;m/=ar)i+=pt;const o=i,a=(n-pt)/ar**o,l=(a-pt)/ar,u=ar**o-pt,d=ar**(o-pt),f=e.pow(t,a),p=e.pow(t,(a+pt)/ar);let g=(m,_)=>{let w=f,$=e.pow(_,u),x=e.sqr($);x=e.mul(x,_);let C=e.mul(m,x);C=e.pow(C,l),C=e.mul(C,$),$=e.mul(C,_),x=e.mul(C,m);let A=e.mul(x,$);C=e.pow(A,d);let k=e.eql(C,e.ONE);$=e.mul(x,p),C=e.mul(A,w),x=e.cmov($,x,k),A=e.cmov(C,A,k);for(let E=o;E>pt;E--){let I=ar**(E-ar),L=e.pow(A,I);const B=e.eql(L,e.ONE);$=e.mul(x,w),w=e.mul(w,w),L=e.mul(A,w),x=e.cmov($,x,B),A=e.cmov(L,A,B)}return{isValid:k,value:x}};if(e.ORDER%Wp===Aa){const m=(e.ORDER-Aa)/Wp,_=e.sqrt(e.neg(t));g=(w,$)=>{let x=e.sqr($);const C=e.mul(w,$);x=e.mul(x,C);let A=e.pow(x,m);A=e.mul(A,C);const k=e.mul(A,_),E=e.mul(e.sqr(A),$),I=e.eql(E,w);let L=e.cmov(k,A,I);return{isValid:I,value:L}}}return g}function c7(e,t){if(e1(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=l7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,f,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),f=e.sqr(u),d=e.mul(f,t.A),a=e.add(a,d),a=e.mul(a,l),f=e.mul(f,u),d=e.mul(f,t.B),a=e.add(a,d),p=e.mul(o,l);const{isValid:m,value:_}=n(a,f);g=e.mul(o,i),g=e.mul(g,_),p=e.cmov(p,l,m),g=e.cmov(g,_,m);const w=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,w),p=e.div(p,u),{x:p,y:g}}}function u7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return fl(e);throw new Error("DST must be Uint8Array or string")}const d7=zt;function Ir(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function f7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Hs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function id(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function h7(e,t,n,i){Hs(e),Hs(t),id(n),t.length>255&&(t=i(on(fl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=on(t,Ir(t.length,1)),d=Ir(0,a),f=Ir(n,2),p=new Array(l),g=i(on(d,e,f,Ir(0,1),u));p[0]=i(on(g,Ir(1,1),u));for(let _=1;_<=l;_++){const w=[f7(g,p[_-1]),Ir(_+1,1),u];p[_]=i(on(...w))}return on(...p).slice(0,n)}function p7(e,t,n,i,o){if(Hs(e),Hs(t),id(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(fl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Ir(n,2)).update(t).update(Ir(t.length,1)).digest()}function Zp(e,t,n){us(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Hs(e),id(t);const f=u7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),m=t*a*g;let _;if(u==="xmd")_=h7(e,f,m,l);else if(u==="xof")_=p7(e,f,m,o,l);else if(u==="_internal_pass")_=e;else throw new Error('expand must be "xmd" or "xof"');const w=new Array(t);for(let $=0;$<t;$++){const x=new Array(a);for(let C=0;C<a;C++){const A=g*(C+$*a),k=_.subarray(A,A+g);x[C]=wt(d7(k),i)}w[$]=x}return w}function g7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(f=>f.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function v7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=Zp(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=Zp(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class n1 extends Xu{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,ai.hash(t);const i=ao(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return ai.exists(this),this.iHash.update(t),this}digestInto(t){ai.exists(this),ai.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ia=(e,t,n)=>new n1(e,t).update(n).digest();Ia.create=(e,t)=>new n1(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function m7(e){return{hash:e,hmac:(t,...n)=>Ia(e,t,li(...n)),randomBytes:cl}}function b7(e,t){const n=i=>a7({...e,...m7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const hl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ra=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),r1=BigInt(1),Oa=BigInt(2),Vp=(e,t)=>(e+t/Oa)/t;function i1(e){const t=hl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=e*e*e%t,p=f*f*e%t,g=vn(p,n,t)*p%t,m=vn(g,n,t)*p%t,_=vn(m,Oa,t)*f%t,w=vn(_,o,t)*_%t,$=vn(w,a,t)*w%t,x=vn($,u,t)*$%t,C=vn(x,d,t)*x%t,A=vn(C,u,t)*$%t,k=vn(A,n,t)*p%t,E=vn(k,l,t)*w%t,I=vn(E,i,t)*f%t,L=vn(I,Oa,t);if(!Dr.eql(Dr.sqr(L),e))throw new Error("Cannot find square root");return L}const Dr=J6(hl,void 0,void 0,{sqrt:i1}),Ut=b7({a:BigInt(0),b:BigInt(7),Fp:Dr,n:Ra,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Ra,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-r1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Vp(a*e,t),d=Vp(-i*e,t);let f=wt(e-u*n-d*o,t),p=wt(-u*i-d*a,t);const g=f>l,m=p>l;if(g&&(f=t-f),m&&(p=t-p),f>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:f,k2neg:m,k2:p}}}},zn),pl=BigInt(0),s1=e=>typeof e=="bigint"&&pl<e&&e<hl,y7=e=>typeof e=="bigint"&&pl<e&&e<Ra,Kp={};function La(e,...t){let n=Kp[e];if(n===void 0){const i=zn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=on(i,i),Kp[e]=n}return zn(on(n,...t))}const sd=e=>e.toRawBytes(!0).slice(1),wu=e=>Mr(e,32),nu=e=>wt(e,hl),Fs=e=>wt(e,Ra),od=Ut.ProjectivePoint,_7=(e,t,n)=>od.BASE.multiplyAndAddUnsafe(e,t,n);function xu(e){let t=Ut.utils.normPrivateKeyToScalar(e),n=od.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Fs(-t),bytes:sd(n)}}function o1(e){if(!s1(e))throw new Error("bad x: need 0 < x < p");const t=nu(e*e),n=nu(t*e+BigInt(7));let i=i1(n);i%Oa!==pl&&(i=nu(-i));const o=new od(e,i,r1);return o.assertValidity(),o}function a1(...e){return Fs(zt(La("BIP0340/challenge",...e)))}function w7(e){return xu(e).bytes}function x7(e,t,n=cl(32)){const i=It("message",e),{bytes:o,scalar:a}=xu(t),l=It("auxRand",n,32),u=wu(a^zt(La("BIP0340/aux",l))),d=La("BIP0340/nonce",u,o,i),f=Fs(zt(d));if(f===pl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=xu(f),m=a1(p,o,i),_=new Uint8Array(64);if(_.set(p,0),_.set(wu(Fs(g+m*a)),32),!l1(_,i,o))throw new Error("sign: Invalid signature produced");return _}function l1(e,t,n){const i=It("signature",e,64),o=It("message",t),a=It("publicKey",n,32);try{const l=o1(zt(a)),u=zt(i.subarray(0,32));if(!s1(u))return!1;const d=zt(i.subarray(32,64));if(!y7(d))return!1;const f=a1(wu(u),sd(l),o),p=_7(l,d,Fs(-f));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const lo={getPublicKey:w7,sign:x7,verify:l1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:o1,pointToBytes:sd,numberToBytesBE:Mr,bytesToNumberBE:zt,taggedHash:La,mod:wt}},$7=g7(Dr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),E7=c7(Dr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Dr.create(BigInt("-11"))});v7(Ut.ProjectivePoint,e=>{const{x:t,y:n}=E7(Dr.create(e[0]));return $7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Dr.ORDER,m:1,k:128,expand:"xmd",hash:zn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Fr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Ln(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Zn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Fr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Vn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function co(e,t="="){if(Fr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function c1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Gp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Fr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],p=t*l+f;if(!Number.isSafeInteger(p)||t*l/t!==l||p-f!==t*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const u1=(e,t)=>t?u1(t,e%t):e,Pa=(e,t)=>e+(t-u1(e,t));function $u(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Pa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Pa(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Fr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function d1(e){return Fr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Gp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Gp(t,e,2**8))}}}function pr(e,t=!1){if(Fr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Pa(8,e)>32||Pa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return $u(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from($u(n,e,8,t))}}}function Qp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function f1(e,t){if(Fr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const k7={alphabet:Zn,chain:Ln,checksum:f1,radix:d1,radix2:pr,join:Vn,padding:co},h1=Ln(pr(4),Zn("0123456789ABCDEF"),Vn("")),p1=Ln(pr(5),Zn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),co(5),Vn("")),C7=Ln(pr(5),Zn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),co(5),Vn("")),S7=Ln(pr(5),Zn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Vn(""),c1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Qi=Ln(pr(6),Zn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),co(6),Vn("")),g1=Ln(pr(6),Zn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),co(6),Vn("")),ad=e=>Ln(d1(58),Zn(e),Vn("")),qs=ad("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),T7=ad("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),A7=ad("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Yp=[0,2,3,5,6,7,9,10,11],v1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=qs.encode(i).padStart(Yp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Yp.indexOf(i.length),a=qs.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},m1=e=>Ln(f1(4,t=>e(e(t))),qs),Eu=Ln(Zn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Vn("")),Jp=[996825010,642813549,513874426,1027748829,705979059];function js(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Jp.length;i++)(t>>i&1)===1&&(n^=Jp[i]);return n}function Xp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=js(o)^l>>5}o=js(o);for(let a=0;a<i;a++)o=js(o)^e.charCodeAt(a)&31;for(let a of t)o=js(o)^a;for(let a=0;a<6;a++)o=js(o);return o^=n,Eu.encode($u([o%2**30],30,5,!1))}function b1(e){const t=e==="bech32"?1:734539939,n=pr(5),i=n.decode,o=n.encode,a=Qp(i);function l(p,g,m=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const _=p.length+7+g.length;if(m!==!1&&_>m)throw new TypeError(`Length ${_} exceeds limit ${m}`);return p=p.toLowerCase(),`${p}1${Eu.encode(g)}${Xp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const m=p.toLowerCase();if(p!==m&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=m;const _=p.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=p.slice(0,_),$=p.slice(_+1);if($.length<6)throw new Error("Data must be at least 6 characters long");const x=Eu.decode($).slice(0,-6),C=Xp(w,x,t);if(!$.endsWith(C))throw new Error(`Invalid checksum in ${p}: expected "${C}"`);return{prefix:w,words:x}}const d=Qp(u);function f(p){const{prefix:g,words:m}=u(p,!1);return{prefix:g,words:m,bytes:i(m)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Ft=b1("bech32"),I7=b1("bech32m"),y1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},_1=Ln(pr(4),Zn("0123456789abcdef"),Vn(""),c1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Ws={utf8:y1,hex:_1,base16:h1,base32:p1,base64:Qi,base64url:g1,base58:qs,base58xmr:v1},w1=`Invalid encoding type. Available types: ${Object.keys(Ws).join(", ")}`,x1=(e,t)=>{if(typeof e!="string"||!Ws.hasOwnProperty(e))throw new TypeError(w1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Ws[e].encode(t)},R7=x1,$1=(e,t)=>{if(!Ws.hasOwnProperty(e))throw new TypeError(w1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Ws[e].decode(t)},O7=$1,L7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Fr,base16:h1,base32:p1,base32crockford:S7,base32hex:C7,base58:qs,base58check:m1,base58flickr:T7,base58xmr:v1,base58xrp:A7,base64:Qi,base64url:g1,bech32:Ft,bech32m:I7,bytes:O7,bytesToString:x1,hex:_1,str:R7,stringToBytes:$1,utf8:y1,utils:k7},Symbol.toStringTag,{value:"Module"}));var ld={};Object.defineProperty(ld,"__esModule",{value:!0});var cd=ld.wordlist=void 0;cd=ld.wordlist=`abandon
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
`);var an={},Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.output=Et.exists=Et.hash=Hi=Et.bytes=Et.bool=Et.number=void 0;function Ma(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Et.number=Ma;function E1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Et.bool=E1;function ud(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Hi=Et.bytes=ud;function k1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ma(e.outputLen),Ma(e.blockLen)}Et.hash=k1;function C1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Et.exists=C1;function S1(e,t){ud(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Et.output=S1;const P7={number:Ma,bool:E1,bytes:ud,hash:k1,exists:C1,output:S1};Et.default=P7;var Yi={},T1={},uo={};const M7=oo(_6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=M7,n=E=>new Uint8Array(E.buffer,E.byteOffset,E.byteLength);e.u8=n;const i=E=>new Uint32Array(E.buffer,E.byteOffset,Math.floor(E.byteLength/4));e.u32=i;const o=E=>new DataView(E.buffer,E.byteOffset,E.byteLength);e.createView=o;const a=(E,I)=>E<<32-I|E>>>I;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(E,I)=>I.toString(16).padStart(2,"0"));function u(E){if(!(E instanceof Uint8Array))throw new Error("Uint8Array expected");let I="";for(let L=0;L<E.length;L++)I+=l[E[L]];return I}e.bytesToHex=u;function d(E){if(typeof E!="string")throw new TypeError("hexToBytes: expected string, got "+typeof E);if(E.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const I=new Uint8Array(E.length/2);for(let L=0;L<I.length;L++){const B=L*2,U=E.slice(B,B+2),ne=Number.parseInt(U,16);if(Number.isNaN(ne)||ne<0)throw new Error("Invalid byte sequence");I[L]=ne}return I}e.hexToBytes=d;const f=async()=>{};e.nextTick=f;async function p(E,I,L){let B=Date.now();for(let U=0;U<E;U++){L(U);const ne=Date.now()-B;ne>=0&&ne<I||(await(0,e.nextTick)(),B+=ne)}}e.asyncLoop=p;function g(E){if(typeof E!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof E}`);return new TextEncoder().encode(E)}e.utf8ToBytes=g;function m(E){if(typeof E=="string"&&(E=g(E)),!(E instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof E})`);return E}e.toBytes=m;function _(...E){if(!E.every(B=>B instanceof Uint8Array))throw new Error("Uint8Array list expected");if(E.length===1)return E[0];const I=E.reduce((B,U)=>B+U.length,0),L=new Uint8Array(I);for(let B=0,U=0;B<E.length;B++){const ne=E[B];L.set(ne,U),U+=ne.length}return L}e.concatBytes=_;class w{clone(){return this._cloneInto()}}e.Hash=w;const $=E=>Object.prototype.toString.call(E)==="[object Object]"&&E.constructor===Object;function x(E,I){if(I!==void 0&&(typeof I!="object"||!$(I)))throw new TypeError("Options should be object or undefined");return Object.assign(E,I)}e.checkOpts=x;function C(E){const I=B=>E().update(m(B)).digest(),L=E();return I.outputLen=L.outputLen,I.blockLen=L.blockLen,I.create=()=>E(),I}e.wrapConstructor=C;function A(E){const I=(B,U)=>E(U).update(m(B)).digest(),L=E({});return I.outputLen=L.outputLen,I.blockLen=L.blockLen,I.create=B=>E(B),I}e.wrapConstructorWithOpts=A;function k(E=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(E));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=k})(uo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Et,n=uo;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const f=this.blockLen,p=new Uint8Array(f);p.set(d.length>f?l.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=l.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:f,destroyed:p,blockLen:g,outputLen:m}=this;return l=l,l.finished=f,l.destroyed=p,l.blockLen=g,l.outputLen=m,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(T1);Object.defineProperty(Yi,"__esModule",{value:!0});Yi.pbkdf2Async=Yi.pbkdf2=void 0;const la=Et,B7=T1,qi=uo;function A1(e,t,n,i){la.default.hash(e);const o=(0,qi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(la.default.number(a),la.default.number(l),la.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,qi.toBytes)(t),f=(0,qi.toBytes)(n),p=new Uint8Array(l),g=B7.hmac.create(e,d),m=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:m}}function I1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function j7(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=A1(e,t,n,i);let f;const p=new Uint8Array(4),g=(0,qi.createView)(p),m=new Uint8Array(u.outputLen);for(let _=1,w=0;w<a;_++,w+=u.outputLen){const $=l.subarray(w,w+u.outputLen);g.setInt32(0,_,!1),(f=d._cloneInto(f)).update(p).digestInto(m),$.set(m.subarray(0,$.length));for(let x=1;x<o;x++){u._cloneInto(f).update(m).digestInto(m);for(let C=0;C<$.length;C++)$[C]^=m[C]}}return I1(u,d,l,f,m)}Yi.pbkdf2=j7;async function N7(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:f}=A1(e,t,n,i);let p;const g=new Uint8Array(4),m=(0,qi.createView)(g),_=new Uint8Array(d.outputLen);for(let w=1,$=0;$<a;w++,$+=d.outputLen){const x=u.subarray($,$+d.outputLen);m.setInt32(0,w,!1),(p=f._cloneInto(p)).update(g).digestInto(_),x.set(_.subarray(0,x.length)),await(0,qi.asyncLoop)(o-1,l,C=>{d._cloneInto(p).update(_).digestInto(_);for(let A=0;A<x.length;A++)x[A]^=_[A]})}return I1(d,f,u,p,_)}Yi.pbkdf2Async=N7;const D7=oo(M6);var mn={},gl={};Object.defineProperty(gl,"__esModule",{value:!0});gl.SHA2=void 0;const ru=Et,Ns=uo;function U7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}class z7 extends Ns.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Ns.createView)(this.buffer)}update(t){ru.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Ns.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,Ns.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){ru.default.exists(this),ru.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;U7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Ns.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}gl.SHA2=z7;var R1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(W,J=!1){return J?{h:Number(W&t),l:Number(W>>n&t)}:{h:Number(W>>n&t)|0,l:Number(W&t)|0}}e.fromBig=i;function o(W,J=!1){let V=new Uint32Array(W.length),Y=new Uint32Array(W.length);for(let re=0;re<W.length;re++){const{h:q,l:ee}=i(W[re],J);[V[re],Y[re]]=[q,ee]}return[V,Y]}e.split=o;const a=(W,J)=>BigInt(W>>>0)<<n|BigInt(J>>>0);e.toBig=a;const l=(W,J,V)=>W>>>V,u=(W,J,V)=>W<<32-V|J>>>V,d=(W,J,V)=>W>>>V|J<<32-V,f=(W,J,V)=>W<<32-V|J>>>V,p=(W,J,V)=>W<<64-V|J>>>V-32,g=(W,J,V)=>W>>>V-32|J<<64-V,m=(W,J)=>J,_=(W,J)=>W,w=(W,J,V)=>W<<V|J>>>32-V,$=(W,J,V)=>J<<V|W>>>32-V,x=(W,J,V)=>J<<V-32|W>>>64-V,C=(W,J,V)=>W<<V-32|J>>>64-V;function A(W,J,V,Y){const re=(J>>>0)+(Y>>>0);return{h:W+V+(re/2**32|0)|0,l:re|0}}e.add=A;const k=(W,J,V)=>(W>>>0)+(J>>>0)+(V>>>0),E=(W,J,V,Y)=>J+V+Y+(W/2**32|0)|0,I=(W,J,V,Y)=>(W>>>0)+(J>>>0)+(V>>>0)+(Y>>>0),L=(W,J,V,Y,re)=>J+V+Y+re+(W/2**32|0)|0,B=(W,J,V,Y,re)=>(W>>>0)+(J>>>0)+(V>>>0)+(Y>>>0)+(re>>>0),U=(W,J,V,Y,re,q)=>J+V+Y+re+q+(W/2**32|0)|0,ne={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:f,rotrBH:p,rotrBL:g,rotr32H:m,rotr32L:_,rotlSH:w,rotlSL:$,rotlBH:x,rotlBL:C,add:A,add3L:k,add3H:E,add4L:I,add4H:L,add5H:U,add5L:B};e.default=ne})(R1);Object.defineProperty(mn,"__esModule",{value:!0});mn.sha384=mn.sha512_256=mn.sha512_224=ku=mn.sha512=mn.SHA512=void 0;const H7=gl,Oe=R1,vl=uo,[F7,q7]=Oe.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Tr=new Uint32Array(80),Ar=new Uint32Array(80);class fo extends H7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:p,Fh:g,Fl:m,Gh:_,Gl:w,Hh:$,Hl:x}=this;return[t,n,i,o,a,l,u,d,f,p,g,m,_,w,$,x]}set(t,n,i,o,a,l,u,d,f,p,g,m,_,w,$,x){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=p|0,this.Fh=g|0,this.Fl=m|0,this.Gh=_|0,this.Gl=w|0,this.Hh=$|0,this.Hl=x|0}process(t,n){for(let k=0;k<16;k++,n+=4)Tr[k]=t.getUint32(n),Ar[k]=t.getUint32(n+=4);for(let k=16;k<80;k++){const E=Tr[k-15]|0,I=Ar[k-15]|0,L=Oe.default.rotrSH(E,I,1)^Oe.default.rotrSH(E,I,8)^Oe.default.shrSH(E,I,7),B=Oe.default.rotrSL(E,I,1)^Oe.default.rotrSL(E,I,8)^Oe.default.shrSL(E,I,7),U=Tr[k-2]|0,ne=Ar[k-2]|0,W=Oe.default.rotrSH(U,ne,19)^Oe.default.rotrBH(U,ne,61)^Oe.default.shrSH(U,ne,6),J=Oe.default.rotrSL(U,ne,19)^Oe.default.rotrBL(U,ne,61)^Oe.default.shrSL(U,ne,6),V=Oe.default.add4L(B,J,Ar[k-7],Ar[k-16]),Y=Oe.default.add4H(V,L,W,Tr[k-7],Tr[k-16]);Tr[k]=Y|0,Ar[k]=V|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:p,Eh:g,El:m,Fh:_,Fl:w,Gh:$,Gl:x,Hh:C,Hl:A}=this;for(let k=0;k<80;k++){const E=Oe.default.rotrSH(g,m,14)^Oe.default.rotrSH(g,m,18)^Oe.default.rotrBH(g,m,41),I=Oe.default.rotrSL(g,m,14)^Oe.default.rotrSL(g,m,18)^Oe.default.rotrBL(g,m,41),L=g&_^~g&$,B=m&w^~m&x,U=Oe.default.add5L(A,I,B,q7[k],Ar[k]),ne=Oe.default.add5H(U,C,E,L,F7[k],Tr[k]),W=U|0,J=Oe.default.rotrSH(i,o,28)^Oe.default.rotrBH(i,o,34)^Oe.default.rotrBH(i,o,39),V=Oe.default.rotrSL(i,o,28)^Oe.default.rotrBL(i,o,34)^Oe.default.rotrBL(i,o,39),Y=i&a^i&u^a&u,re=o&l^o&d^l&d;C=$|0,A=x|0,$=_|0,x=w|0,_=g|0,w=m|0,{h:g,l:m}=Oe.default.add(f|0,p|0,ne|0,W|0),f=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const q=Oe.default.add3L(W,V,re);i=Oe.default.add3H(q,ne,J,Y),o=q|0}({h:i,l:o}=Oe.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Oe.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Oe.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:p}=Oe.default.add(this.Dh|0,this.Dl|0,f|0,p|0),{h:g,l:m}=Oe.default.add(this.Eh|0,this.El|0,g|0,m|0),{h:_,l:w}=Oe.default.add(this.Fh|0,this.Fl|0,_|0,w|0),{h:$,l:x}=Oe.default.add(this.Gh|0,this.Gl|0,$|0,x|0),{h:C,l:A}=Oe.default.add(this.Hh|0,this.Hl|0,C|0,A|0),this.set(i,o,a,l,u,d,f,p,g,m,_,w,$,x,C,A)}roundClean(){Tr.fill(0),Ar.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}mn.SHA512=fo;class W7 extends fo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Z7 extends fo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class V7 extends fo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var ku=mn.sha512=(0,vl.wrapConstructor)(()=>new fo);mn.sha512_224=(0,vl.wrapConstructor)(()=>new W7);mn.sha512_256=(0,vl.wrapConstructor)(()=>new Z7);mn.sha384=(0,vl.wrapConstructor)(()=>new V7);const K7=oo(T6),G7=oo(L7);Object.defineProperty(an,"__esModule",{value:!0});var O1=an.mnemonicToSeedSync=an.mnemonicToSeed=H1=an.validateMnemonic=an.entropyToMnemonic=an.mnemonicToEntropy=N1=an.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const L1=Et,P1=Yi,Q7=D7,M1=mn,Y7=K7,ca=G7,J7=e=>e[0]==="あいこくしん";function B1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function dd(e){const t=B1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function j1(e){L1.default.bytes(e,16,20,24,28,32)}function X7(e,t=128){if(L1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return z1((0,Y7.randomBytes)(t/8),e)}var N1=an.generateMnemonic=X7;const e9=e=>{const t=8-e.length/4;return new Uint8Array([(0,Q7.sha256)(e)[0]>>t<<t])};function D1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),ca.utils.chain(ca.utils.checksum(1,e9),ca.utils.radix2(11,!0),ca.utils.alphabet(e))}function U1(e,t){const{words:n}=dd(e),i=D1(t).decode(n);return j1(i),i}an.mnemonicToEntropy=U1;function z1(e,t){return j1(e),D1(t).encode(e).join(J7(t)?"　":" ")}an.entropyToMnemonic=z1;function t9(e,t){try{U1(e,t)}catch{return!1}return!0}var H1=an.validateMnemonic=t9;const F1=e=>B1(`mnemonic${e}`);function n9(e,t=""){return(0,P1.pbkdf2Async)(M1.sha512,dd(e).nfkd,F1(t),{c:2048,dkLen:64})}an.mnemonicToSeed=n9;function r9(e,t=""){return(0,P1.pbkdf2)(M1.sha512,dd(e).nfkd,F1(t),{c:2048,dkLen:64})}O1=an.mnemonicToSeedSync=r9;const i9=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),q1=Uint8Array.from({length:16},(e,t)=>t),s9=q1.map(e=>(9*e+5)%16);let fd=[q1],hd=[s9];for(let e=0;e<4;e++)for(let t of[fd,hd])t.push(t[e].map(n=>i9[n]));const W1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),o9=fd.map((e,t)=>e.map(n=>W1[t][n])),a9=hd.map((e,t)=>e.map(n=>W1[t][n])),l9=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),c9=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ua=(e,t)=>e<<t|e>>>32-t;function e0(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const da=new Uint32Array(16);class u9 extends Kg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let _=0;_<16;_++,n+=4)da[_]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,p=f,g=this.h4|0,m=g;for(let _=0;_<5;_++){const w=4-_,$=l9[_],x=c9[_],C=fd[_],A=hd[_],k=o9[_],E=a9[_];for(let I=0;I<16;I++){const L=ua(i+e0(_,a,u,f)+da[C[I]]+$,k[I])+g|0;i=g,g=f,f=ua(u,10)|0,u=a,a=L}for(let I=0;I<16;I++){const L=ua(o+e0(w,l,d,p)+da[A[I]]+x,E[I])+m|0;o=m,m=p,p=ua(d,10)|0,d=l,l=L}}this.set(this.h1+u+p|0,this.h2+f+m|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){da.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const d9=ll(()=>new u9),fa=Ut.ProjectivePoint,iu=m1(zn);function t0(e){return BigInt(`0x${sn(e)}`)}function f9(e){return Nr(e.toString(16).padStart(64,"0"))}const h9=Ju("Bitcoin seed"),su={private:76066276,public:76067358},ou=2147483648,p9=e=>d9(zn(e)),g9=e=>hi(e).getUint32(0,!1),ha=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return hi(t).setUint32(0,e,!1),t};class oi{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return g9(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return iu.encode(this.serialize(this.versions.private,li(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return iu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=su){if(Hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Ia(ku,h9,t);return new oi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=su){const i=iu.decode(t),o=hi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new oi({...l,privateKey:u.slice(1)}):new oi({...l,publicKey:u})}static fromJSON(t){return oi.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||su,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ut.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:t0(t.privateKey),this.privKeyBytes=f9(this.privKey),this.pubKey=Ut.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=fa.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=p9(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=ou)throw new Error("Invalid index");a[2]==="'"&&(l+=ou),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ha(t);if(t>=ou){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=li(new Uint8Array([0]),u,n)}else n=li(this.pubKey,n);const i=Ia(ku,this.chainCode,n),o=t0(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=wt(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=fa.fromHex(this.pubKey).add(fa.fromPrivateKey(o));if(u.equals(fa.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new oi(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Hi(t,32),Ut.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Hi(t,32),Hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Hi(n,33),li(ha(t),new Uint8Array([this.depth]),ha(this.parentFingerprint),ha(this.index),this.chainCode,n)}}var v9=Object.defineProperty,Bt=(e,t)=>{for(var n in t)v9(e,n,{get:t[n],enumerable:!0})};function Z1(e){return sn(lo.getPublicKey(e))}var V1={};Bt(V1,{MessageNode:()=>K1,MessageQueue:()=>G1,insertEventIntoAscendingList:()=>b9,insertEventIntoDescendingList:()=>m9,normalizeURL:()=>Cu,utf8Decoder:()=>Rr,utf8Encoder:()=>Hn});var Rr=new TextDecoder("utf-8"),Hn=new TextEncoder;function Cu(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function m9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function b9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var K1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},G1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new K1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},vt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.ProfileBadge=30008]="ProfileBadge",e[e.BadgeDefinition=30009]="BadgeDefinition",e[e.Article=30023]="Article",e))(vt||{});function Q1(e,t){let n=e;return n.pubkey=Z1(t),n.id=ml(n),n.sig=w9(n,t),n}function y9(e){if(!pd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function ml(e){let t=zn(Hn.encode(y9(e)));return sn(t)}var _9=e=>e instanceof Object;function pd(e){if(!_9(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function gd(e){try{return lo.verify(e.sig,ml(e),e.pubkey)}catch{return!1}}function w9(e,t){return sn(lo.sign(ml(e),t))}function x9(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function $9(e,t){for(let n=0;n<e.length;n++)if(x9(e[n],t))return!0;return!1}var E9={};Bt(E9,{getHex64:()=>bl,getInt:()=>Y1,getSubscriptionId:()=>J1,matchEventId:()=>k9,matchEventKind:()=>S9,matchEventPubkey:()=>C9});function bl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function Y1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function J1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function k9(e,t){return t===bl(e,"id")}function C9(e,t){return t===bl(e,"pubkey")}function S9(e,t){return t===Y1(e,"kind")}var n0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function T9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=n0(),d={},f={},p;async function g(){return p||(p=new Promise((C,A)=>{try{a=new WebSocket(e)}catch(L){A(L)}a.onopen=()=>{u.connect.forEach(L=>L()),C()},a.onerror=()=>{p=void 0,u.error.forEach(L=>L()),A()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(L=>L())};let k=new G1,E;a.onmessage=L=>{k.enqueue(L.data),E||(E=setInterval(I,0))};function I(){if(k.size===0){clearInterval(E),E=null;return}var L=k.dequeue();if(!L)return;let B=J1(L);if(B){let U=l[B];if(U&&U.alreadyHaveEvent&&U.alreadyHaveEvent(bl(L,"id"),e))return}try{let U=JSON.parse(L);switch(U[0]){case"EVENT":{let V=U[1],Y=U[2];pd(Y)&&l[V]&&(l[V].skipVerification||gd(Y))&&$9(l[V].filters,Y)&&(l[V],(d[V]?.event||[]).forEach(re=>re(Y)));return}case"COUNT":let ne=U[1],W=U[2];l[ne]&&(d[ne]?.count||[]).forEach(V=>V(W));return;case"EOSE":{let V=U[1];V in d&&(d[V].eose.forEach(Y=>Y()),d[V].eose=[]);return}case"OK":{let V=U[1],Y=U[2],re=U[3]||"";V in f&&(Y?f[V].ok.forEach(q=>q()):f[V].failed.forEach(q=>q(re)),f[V].ok=[],f[V].failed=[]);return}case"NOTICE":let J=U[1];u.notice.forEach(V=>V(J));return;case"AUTH":{let V=U[1];u.auth?.forEach(Y=>Y(V));return}}}catch{return}}}),p)}function m(){return a?.readyState===1}async function _(){m()||await g()}async function w(C){let A=JSON.stringify(C);if(!(!m()&&(await new Promise(k=>setTimeout(k,1e3)),!m())))try{a.send(A)}catch(k){console.log(k)}}const $=(C,{verb:A="REQ",skipVerification:k=!1,alreadyHaveEvent:E=null,id:I=Math.random().toString().slice(2)}={})=>{let L=I;return l[L]={id:L,filters:C,skipVerification:k,alreadyHaveEvent:E},w([A,L,...C]),{sub:(B,U={})=>$(B||C,{skipVerification:U.skipVerification||k,alreadyHaveEvent:U.alreadyHaveEvent||E,id:L}),unsub:()=>{delete l[L],delete d[L],w(["CLOSE",L])},on:(B,U)=>{d[L]=d[L]||{event:[],count:[],eose:[]},d[L][B].push(U)},off:(B,U)=>{let ne=d[L],W=ne[B].indexOf(U);W>=0&&ne[B].splice(W,1)}}};function x(C,A){if(!C.id)throw new Error(`event ${C} has no id`);let k=C.id;return w([A,C]),{on:(E,I)=>{f[k]=f[k]||{ok:[],failed:[]},f[k][E].push(I)},off:(E,I)=>{let L=f[k];if(!L)return;let B=L[E].indexOf(I);B>=0&&L[E].splice(B,1)}}}return{url:e,sub:$,on:(C,A)=>{u[C].push(A),C==="connect"&&a?.readyState===1&&A()},off:(C,A)=>{let k=u[C].indexOf(A);k!==-1&&u[C].splice(k,1)},list:(C,A)=>new Promise(k=>{let E=$(C,A),I=[],L=setTimeout(()=>{E.unsub(),k(I)},n);E.on("eose",()=>{E.unsub(),clearTimeout(L),k(I)}),E.on("event",B=>{I.push(B)})}),get:(C,A)=>new Promise(k=>{let E=$([C],A),I=setTimeout(()=>{E.unsub(),k(null)},i);E.on("event",L=>{E.unsub(),clearTimeout(I),k(L)})}),count:C=>new Promise(A=>{let k=$(C,{...$,verb:"COUNT"}),E=setTimeout(()=>{k.unsub(),A(null)},o);k.on("count",I=>{k.unsub(),clearTimeout(E),A(I)})}),publish(C){return x(C,"EVENT")},auth(C){return x(C,"AUTH")},connect:_,close(){u=n0(),d={},f={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var A9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Cu(t)];n&&n.close()})}async ensureRelay(e){const t=Cu(e);this._conn[t]||(this._conn[t]=T9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(m,_)=>{if(n?.alreadyHaveEvent?.(m,_))return!0;let w=this._seenOn[m]||new Set;return w.add(_),this._seenOn[m]=w,i.has(m)};let a=[],l=new Set,u=new Set,d=e.length,f=!1,p=setTimeout(()=>{f=!0;for(let m of u.values())m()},this.eoseSubTimeout);e.forEach(async m=>{let _;try{_=await this.ensureRelay(m)}catch{$();return}if(!_)return;let w=_.sub(t,o);w.on("event",x=>{i.add(x.id);for(let C of l.values())C(x)}),w.on("eose",()=>{f||$()}),a.push(w);function $(){if(d--,d===0){clearTimeout(p);for(let x of u.values())x()}}});let g={sub(m,_){return a.forEach(w=>w.sub(m,_)),g},unsub(){a.forEach(m=>m.unsub())},on(m,_){m==="event"?l.add(_):m==="eose"&&u.add(_)},off(m,_){m==="event"?l.delete(_):m==="eose"&&u.delete(_)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],f=()=>a(l);i.set(a,f),d.on(o,f)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},ho={};Bt(ho,{BECH32_REGEX:()=>X1,decode:()=>yl,naddrEncode:()=>M9,neventEncode:()=>P9,noteEncode:()=>O9,nprofileEncode:()=>L9,npubEncode:()=>R9,nrelayEncode:()=>B9,nsecEncode:()=>I9});var ds=5e3,X1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function yl(e){let{prefix:t,words:n}=Ft.decode(e,ds),i=new Uint8Array(Ft.fromWords(n));switch(t){case"nprofile":{let o=pa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:sn(o[0][0]),relays:o[1]?o[1].map(a=>Rr.decode(a)):[]}}}case"nevent":{let o=pa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:sn(o[0][0]),relays:o[1]?o[1].map(a=>Rr.decode(a)):[],author:o[2]?.[0]?sn(o[2][0]):void 0}}}case"naddr":{let o=pa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Rr.decode(o[0][0]),pubkey:sn(o[2][0]),kind:parseInt(sn(o[3][0]),16),relays:o[1]?o[1].map(a=>Rr.decode(a)):[]}}}case"nrelay":{let o=pa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Rr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:sn(i)};default:throw new Error(`unknown prefix ${t}`)}}function pa(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function I9(e){return vd("nsec",e)}function R9(e){return vd("npub",e)}function O9(e){return vd("note",e)}function vd(e,t){let n=Nr(t),i=Ft.toWords(n);return Ft.encode(e,i,ds)}function L9(e){let t=_l({0:[Nr(e.pubkey)],1:(e.relays||[]).map(i=>Hn.encode(i))}),n=Ft.toWords(t);return Ft.encode("nprofile",n,ds)}function P9(e){let t=_l({0:[Nr(e.id)],1:(e.relays||[]).map(i=>Hn.encode(i)),2:e.author?[Nr(e.author)]:[]}),n=Ft.toWords(t);return Ft.encode("nevent",n,ds)}function M9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=_l({0:[Hn.encode(e.identifier)],1:(e.relays||[]).map(o=>Hn.encode(o)),2:[Nr(e.pubkey)],3:[new Uint8Array(t)]}),i=Ft.toWords(n);return Ft.encode("naddr",i,ds)}function B9(e){let t=_l({0:[Hn.encode(e)]}),n=Ft.toWords(t);return Ft.encode("nrelay",n,ds)}function _l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),li(...t)}var j9={};Bt(j9,{decrypt:()=>D9,encrypt:()=>N9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function N9(e,t,n){const i=Ut.getSharedSecret(e,"02"+t),o=ev(i);let a=Uint8Array.from(cl(16)),l=Hn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=Qi.encode(new Uint8Array(d)),p=Qi.encode(new Uint8Array(a.buffer));return`${f}?iv=${p}`}async function D9(e,t,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(e,"02"+t),l=ev(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=Qi.decode(i),f=Qi.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return Rr.decode(p)}function ev(e){return e.slice(1,33)}var tv={};Bt(tv,{NIP05_REGEX:()=>nv,queryProfile:()=>H9,searchDomain:()=>z9,useFetchImplementation:()=>U9});var nv=/^(?:([\w.+-]+)@)?([\w.-]+)$/,wl;try{wl=fetch}catch{}function U9(e){wl=e}async function z9(e,t=""){try{return(await(await wl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function H9(e){const t=e.match(nv);if(!t)return null;const[n,i="_",o]=t;try{const a=await wl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=F9(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function F9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var q9={};Bt(q9,{generateSeedWords:()=>Z9,privateKeyFromSeedWords:()=>W9,validateWords:()=>V9});function W9(e,t){let i=oi.fromMasterSeed(O1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return sn(i)}function Z9(){return N1(cd)}function V9(e){return H1(e,cd)}var K9={};Bt(K9,{parse:()=>G9});function G9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=f;continue}if(d==="reply"){t.reply=f;continue}if(d==="mention"){t.mentions.push(f);continue}if(p){t.root=f;continue}if(g){t.reply=f;continue}t.mentions.push(f)}return t}var Q9={};Bt(Q9,{getPow:()=>Y9});function Y9(e){return J9(Nr(e))}function J9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=X9(e[n]),t+=i,i===8);n++);return t}function X9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var eE={};Bt(eE,{finishRepostEvent:()=>tE,getRepostedEvent:()=>nE,getRepostedEventPointer:()=>rv});function tE(e,t,n,i){return Q1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function rv(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function nE(e,{skipVerification:t}={}){const n=rv(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!gd(i)))return i}var rE={};Bt(rE,{NOSTR_URI_REGEX:()=>xl,parse:()=>sE,test:()=>iE});var xl=new RegExp(`nostr:(${X1.source})`);function iE(e){return typeof e=="string"&&new RegExp(`^${xl.source}$`).test(e)}function sE(e){const t=e.match(new RegExp(`^${xl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:yl(t[1])}}var oE={};Bt(oE,{finishReactionEvent:()=>aE,getReactedEventPointer:()=>lE});function aE(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Q1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function lE(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var cE={};Bt(cE,{createDelegation:()=>uE,getDelegator:()=>dE});function uE(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=zn(Hn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=sn(lo.sign(o,e));return{from:Z1(e),to:t.pubkey,cond:i,sig:a}}function dE(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,p]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&e.kind===parseInt(p))){if(d==="created_at"&&f==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&f===">"&&e.created_at>parseInt(p))continue;return null}}let l=zn(Hn.encode(`nostr:delegation:${e.pubkey}:${i}`));return lo.verify(o,l,n)?n:null}var fE={};Bt(fE,{matchAll:()=>hE,regex:()=>md,replaceAll:()=>pE});var md=()=>new RegExp(`\\b${xl.source}\\b`,"g");function*hE(e){const t=e.matchAll(md());for(const n of t)try{const[i,o]=n;yield{uri:i,value:o,decoded:yl(o),start:n.index,end:n.index+i.length}}catch{}}function pE(e,t){return e.replaceAll(md(),(n,i)=>t({uri:n,value:i,decoded:yl(i)}))}var gE={};Bt(gE,{useFetchImplementation:()=>vE,validateGithub:()=>mE});var bd;try{bd=fetch}catch{}function vE(e){bd=e}async function mE(e,t,n){try{return await(await bd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var bE={};Bt(bE,{authenticate:()=>yE});var yE=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},_E={};Bt(_E,{getZapEndpoint:()=>xE,makeZapReceipt:()=>kE,makeZapRequest:()=>$E,useFetchImplementation:()=>wE,validateZapRequest:()=>EE});var yd;try{yd=fetch}catch{}function wE(e){yd=e}async function xE(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=Ft.decode(n,1e3),u=Ft.fromWords(l);t=Rr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await yd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function $E({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function EE(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!pd(t))return"Zap request is not a valid Nostr event.";if(!gd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function kE({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const CE=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),iv=(e={})=>(()=>{const t=CE();return Xe(t,e,!0,!0),t})(),SE=j('<button class="text-blue-500 underline">'),{noteEncode:TE,neventEncode:AE}=ho,IE=e=>{try{return TE(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},RE=e=>{try{return AE({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Zs=e=>(()=>{const t=SE();return R(t,T(fe,{get when(){return e.kind==null||e.kind===vt.Text},get fallback(){return RE(e.eventId)},get children(){return IE(e.eventId)}})),t})();var Ba={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ba.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,m=2,_=4,w=1,$=2,x=1,C=2,A=4,k=8,E=16,I=32,L=64,B=128,U=256,ne=512,W=30,J="...",V=800,Y=16,re=1,q=2,ee=3,ce=1/0,ge=9007199254740991,te=17976931348623157e292,he=0/0,pe=4294967295,Le=pe-1,Q=pe>>>1,de=[["ary",B],["bind",x],["bindKey",C],["curry",k],["curryRight",E],["flip",ne],["partial",I],["partialRight",L],["rearg",U]],G="[object Arguments]",oe="[object Array]",ve="[object AsyncFunction]",N="[object Boolean]",Ee="[object Date]",tt="[object DOMException]",ht="[object Error]",it="[object Function]",Pe="[object GeneratorFunction]",ze="[object Map]",Ct="[object Number]",yn="[object Null]",ct="[object Object]",gr="[object Promise]",wi="[object Proxy]",Pn="[object RegExp]",bt="[object Set]",_n="[object String]",Mn="[object Symbol]",xi="[object Undefined]",xe="[object WeakMap]",Gn="[object WeakSet]",Yt="[object ArrayBuffer]",Wt="[object DataView]",wn="[object Float32Array]",Qn="[object Float64Array]",Yn="[object Int8Array]",vr="[object Int16Array]",$i="[object Int32Array]",Ei="[object Uint8Array]",ki="[object Uint8ClampedArray]",Nl="[object Uint16Array]",Dl="[object Uint32Array]",Ym=/\b__p \+= '';/g,Jm=/\b(__p \+=) '' \+/g,Xm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xd=/&(?:amp|lt|gt|quot|#39);/g,ef=/[&<>"']/g,e2=RegExp(Xd.source),t2=RegExp(ef.source),n2=/<%-([\s\S]+?)%>/g,r2=/<%([\s\S]+?)%>/g,tf=/<%=([\s\S]+?)%>/g,i2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s2=/^\w*$/,o2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ul=/[\\^$.*+?()[\]{}|]/g,a2=RegExp(Ul.source),zl=/^\s+/,l2=/\s/,c2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,u2=/\{\n\/\* \[wrapped with (.+)\] \*/,d2=/,? & /,f2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,h2=/[()=,{}\[\]\/\s]/,p2=/\\(\\)?/g,g2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,nf=/\w*$/,v2=/^[-+]0x[0-9a-f]+$/i,m2=/^0b[01]+$/i,b2=/^\[object .+?Constructor\]$/,y2=/^0o[0-7]+$/i,_2=/^(?:0|[1-9]\d*)$/,w2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_o=/($^)/,x2=/['\n\r\u2028\u2029\\]/g,wo="\\ud800-\\udfff",$2="\\u0300-\\u036f",E2="\\ufe20-\\ufe2f",k2="\\u20d0-\\u20ff",rf=$2+E2+k2,sf="\\u2700-\\u27bf",of="a-z\\xdf-\\xf6\\xf8-\\xff",C2="\\xac\\xb1\\xd7\\xf7",S2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",T2="\\u2000-\\u206f",A2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",af="A-Z\\xc0-\\xd6\\xd8-\\xde",lf="\\ufe0e\\ufe0f",cf=C2+S2+T2+A2,Hl="['’]",I2="["+wo+"]",uf="["+cf+"]",xo="["+rf+"]",df="\\d+",R2="["+sf+"]",ff="["+of+"]",hf="[^"+wo+cf+df+sf+of+af+"]",Fl="\\ud83c[\\udffb-\\udfff]",O2="(?:"+xo+"|"+Fl+")",pf="[^"+wo+"]",ql="(?:\\ud83c[\\udde6-\\uddff]){2}",Wl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+af+"]",gf="\\u200d",vf="(?:"+ff+"|"+hf+")",L2="(?:"+Ci+"|"+hf+")",mf="(?:"+Hl+"(?:d|ll|m|re|s|t|ve))?",bf="(?:"+Hl+"(?:D|LL|M|RE|S|T|VE))?",yf=O2+"?",_f="["+lf+"]?",P2="(?:"+gf+"(?:"+[pf,ql,Wl].join("|")+")"+_f+yf+")*",M2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",B2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wf=_f+yf+P2,j2="(?:"+[R2,ql,Wl].join("|")+")"+wf,N2="(?:"+[pf+xo+"?",xo,ql,Wl,I2].join("|")+")",D2=RegExp(Hl,"g"),U2=RegExp(xo,"g"),Zl=RegExp(Fl+"(?="+Fl+")|"+N2+wf,"g"),z2=RegExp([Ci+"?"+ff+"+"+mf+"(?="+[uf,Ci,"$"].join("|")+")",L2+"+"+bf+"(?="+[uf,Ci+vf,"$"].join("|")+")",Ci+"?"+vf+"+"+mf,Ci+"+"+bf,B2,M2,df,j2].join("|"),"g"),H2=RegExp("["+gf+wo+rf+lf+"]"),F2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,q2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],W2=-1,nt={};nt[wn]=nt[Qn]=nt[Yn]=nt[vr]=nt[$i]=nt[Ei]=nt[ki]=nt[Nl]=nt[Dl]=!0,nt[G]=nt[oe]=nt[Yt]=nt[N]=nt[Wt]=nt[Ee]=nt[ht]=nt[it]=nt[ze]=nt[Ct]=nt[ct]=nt[Pn]=nt[bt]=nt[_n]=nt[xe]=!1;var Ye={};Ye[G]=Ye[oe]=Ye[Yt]=Ye[Wt]=Ye[N]=Ye[Ee]=Ye[wn]=Ye[Qn]=Ye[Yn]=Ye[vr]=Ye[$i]=Ye[ze]=Ye[Ct]=Ye[ct]=Ye[Pn]=Ye[bt]=Ye[_n]=Ye[Mn]=Ye[Ei]=Ye[ki]=Ye[Nl]=Ye[Dl]=!0,Ye[ht]=Ye[it]=Ye[xe]=!1;var Z2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},V2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},K2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},G2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Q2=parseFloat,Y2=parseInt,xf=typeof xt=="object"&&xt&&xt.Object===Object&&xt,J2=typeof self=="object"&&self&&self.Object===Object&&self,St=xf||J2||Function("return this")(),Vl=t&&!t.nodeType&&t,Vr=Vl&&!0&&e&&!e.nodeType&&e,$f=Vr&&Vr.exports===Vl,Kl=$f&&xf.process,ln=function(){try{var P=Vr&&Vr.require&&Vr.require("util").types;return P||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),Ef=ln&&ln.isArrayBuffer,kf=ln&&ln.isDate,Cf=ln&&ln.isMap,Sf=ln&&ln.isRegExp,Tf=ln&&ln.isSet,Af=ln&&ln.isTypedArray;function Jt(P,z,D){switch(D.length){case 0:return P.call(z);case 1:return P.call(z,D[0]);case 2:return P.call(z,D[0],D[1]);case 3:return P.call(z,D[0],D[1],D[2])}return P.apply(z,D)}function X2(P,z,D,ae){for(var Ce=-1,We=P==null?0:P.length;++Ce<We;){var yt=P[Ce];z(ae,yt,D(yt),P)}return ae}function cn(P,z){for(var D=-1,ae=P==null?0:P.length;++D<ae&&z(P[D],D,P)!==!1;);return P}function eb(P,z){for(var D=P==null?0:P.length;D--&&z(P[D],D,P)!==!1;);return P}function If(P,z){for(var D=-1,ae=P==null?0:P.length;++D<ae;)if(!z(P[D],D,P))return!1;return!0}function mr(P,z){for(var D=-1,ae=P==null?0:P.length,Ce=0,We=[];++D<ae;){var yt=P[D];z(yt,D,P)&&(We[Ce++]=yt)}return We}function $o(P,z){var D=P==null?0:P.length;return!!D&&Si(P,z,0)>-1}function Gl(P,z,D){for(var ae=-1,Ce=P==null?0:P.length;++ae<Ce;)if(D(z,P[ae]))return!0;return!1}function st(P,z){for(var D=-1,ae=P==null?0:P.length,Ce=Array(ae);++D<ae;)Ce[D]=z(P[D],D,P);return Ce}function br(P,z){for(var D=-1,ae=z.length,Ce=P.length;++D<ae;)P[Ce+D]=z[D];return P}function Ql(P,z,D,ae){var Ce=-1,We=P==null?0:P.length;for(ae&&We&&(D=P[++Ce]);++Ce<We;)D=z(D,P[Ce],Ce,P);return D}function tb(P,z,D,ae){var Ce=P==null?0:P.length;for(ae&&Ce&&(D=P[--Ce]);Ce--;)D=z(D,P[Ce],Ce,P);return D}function Yl(P,z){for(var D=-1,ae=P==null?0:P.length;++D<ae;)if(z(P[D],D,P))return!0;return!1}var nb=Jl("length");function rb(P){return P.split("")}function ib(P){return P.match(f2)||[]}function Rf(P,z,D){var ae;return D(P,function(Ce,We,yt){if(z(Ce,We,yt))return ae=We,!1}),ae}function Eo(P,z,D,ae){for(var Ce=P.length,We=D+(ae?1:-1);ae?We--:++We<Ce;)if(z(P[We],We,P))return We;return-1}function Si(P,z,D){return z===z?vb(P,z,D):Eo(P,Of,D)}function sb(P,z,D,ae){for(var Ce=D-1,We=P.length;++Ce<We;)if(ae(P[Ce],z))return Ce;return-1}function Of(P){return P!==P}function Lf(P,z){var D=P==null?0:P.length;return D?ec(P,z)/D:he}function Jl(P){return function(z){return z==null?n:z[P]}}function Xl(P){return function(z){return P==null?n:P[z]}}function Pf(P,z,D,ae,Ce){return Ce(P,function(We,yt,Qe){D=ae?(ae=!1,We):z(D,We,yt,Qe)}),D}function ob(P,z){var D=P.length;for(P.sort(z);D--;)P[D]=P[D].value;return P}function ec(P,z){for(var D,ae=-1,Ce=P.length;++ae<Ce;){var We=z(P[ae]);We!==n&&(D=D===n?We:D+We)}return D}function tc(P,z){for(var D=-1,ae=Array(P);++D<P;)ae[D]=z(D);return ae}function ab(P,z){return st(z,function(D){return[D,P[D]]})}function Mf(P){return P&&P.slice(0,Df(P)+1).replace(zl,"")}function Xt(P){return function(z){return P(z)}}function nc(P,z){return st(z,function(D){return P[D]})}function ws(P,z){return P.has(z)}function Bf(P,z){for(var D=-1,ae=P.length;++D<ae&&Si(z,P[D],0)>-1;);return D}function jf(P,z){for(var D=P.length;D--&&Si(z,P[D],0)>-1;);return D}function lb(P,z){for(var D=P.length,ae=0;D--;)P[D]===z&&++ae;return ae}var cb=Xl(Z2),ub=Xl(V2);function db(P){return"\\"+G2[P]}function fb(P,z){return P==null?n:P[z]}function Ti(P){return H2.test(P)}function hb(P){return F2.test(P)}function pb(P){for(var z,D=[];!(z=P.next()).done;)D.push(z.value);return D}function rc(P){var z=-1,D=Array(P.size);return P.forEach(function(ae,Ce){D[++z]=[Ce,ae]}),D}function Nf(P,z){return function(D){return P(z(D))}}function yr(P,z){for(var D=-1,ae=P.length,Ce=0,We=[];++D<ae;){var yt=P[D];(yt===z||yt===p)&&(P[D]=p,We[Ce++]=D)}return We}function ko(P){var z=-1,D=Array(P.size);return P.forEach(function(ae){D[++z]=ae}),D}function gb(P){var z=-1,D=Array(P.size);return P.forEach(function(ae){D[++z]=[ae,ae]}),D}function vb(P,z,D){for(var ae=D-1,Ce=P.length;++ae<Ce;)if(P[ae]===z)return ae;return-1}function mb(P,z,D){for(var ae=D+1;ae--;)if(P[ae]===z)return ae;return ae}function Ai(P){return Ti(P)?yb(P):nb(P)}function xn(P){return Ti(P)?_b(P):rb(P)}function Df(P){for(var z=P.length;z--&&l2.test(P.charAt(z)););return z}var bb=Xl(K2);function yb(P){for(var z=Zl.lastIndex=0;Zl.test(P);)++z;return z}function _b(P){return P.match(Zl)||[]}function wb(P){return P.match(z2)||[]}var xb=function P(z){z=z==null?St:Ii.defaults(St.Object(),z,Ii.pick(St,q2));var D=z.Array,ae=z.Date,Ce=z.Error,We=z.Function,yt=z.Math,Qe=z.Object,ic=z.RegExp,$b=z.String,un=z.TypeError,Co=D.prototype,Eb=We.prototype,Ri=Qe.prototype,So=z["__core-js_shared__"],To=Eb.toString,Ve=Ri.hasOwnProperty,kb=0,Uf=function(){var r=/[^.]+$/.exec(So&&So.keys&&So.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Ao=Ri.toString,Cb=To.call(Qe),Sb=St._,Tb=ic("^"+To.call(Ve).replace(Ul,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Io=$f?z.Buffer:n,_r=z.Symbol,Ro=z.Uint8Array,zf=Io?Io.allocUnsafe:n,Oo=Nf(Qe.getPrototypeOf,Qe),Hf=Qe.create,Ff=Ri.propertyIsEnumerable,Lo=Co.splice,qf=_r?_r.isConcatSpreadable:n,xs=_r?_r.iterator:n,Kr=_r?_r.toStringTag:n,Po=function(){try{var r=Xr(Qe,"defineProperty");return r({},"",{}),r}catch{}}(),Ab=z.clearTimeout!==St.clearTimeout&&z.clearTimeout,Ib=ae&&ae.now!==St.Date.now&&ae.now,Rb=z.setTimeout!==St.setTimeout&&z.setTimeout,Mo=yt.ceil,Bo=yt.floor,sc=Qe.getOwnPropertySymbols,Ob=Io?Io.isBuffer:n,Wf=z.isFinite,Lb=Co.join,Pb=Nf(Qe.keys,Qe),_t=yt.max,Ot=yt.min,Mb=ae.now,Bb=z.parseInt,Zf=yt.random,jb=Co.reverse,oc=Xr(z,"DataView"),$s=Xr(z,"Map"),ac=Xr(z,"Promise"),Oi=Xr(z,"Set"),Es=Xr(z,"WeakMap"),ks=Xr(Qe,"create"),jo=Es&&new Es,Li={},Nb=ei(oc),Db=ei($s),Ub=ei(ac),zb=ei(Oi),Hb=ei(Es),No=_r?_r.prototype:n,Cs=No?No.valueOf:n,Vf=No?No.toString:n;function b(r){if(lt(r)&&!Te(r)&&!(r instanceof Ue)){if(r instanceof dn)return r;if(Ve.call(r,"__wrapped__"))return Kh(r)}return new dn(r)}var Pi=function(){function r(){}return function(s){if(!ot(s))return{};if(Hf)return Hf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Do(){}function dn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:n2,evaluate:r2,interpolate:tf,variable:"",imports:{_:b}},b.prototype=Do.prototype,b.prototype.constructor=b,dn.prototype=Pi(Do.prototype),dn.prototype.constructor=dn;function Ue(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function Fb(){var r=new Ue(this.__wrapped__);return r.__actions__=Zt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Zt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Zt(this.__views__),r}function qb(){if(this.__filtered__){var r=new Ue(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Wb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Te(r),h=s<0,v=c?r.length:0,y=r_(0,v,this.__views__),S=y.start,O=y.end,M=O-S,H=h?O:S-1,F=this.__iteratees__,K=F.length,ie=0,ue=Ot(M,this.__takeCount__);if(!c||!h&&v==M&&ue==M)return mh(r,this.__actions__);var _e=[];e:for(;M--&&ie<ue;){H+=s;for(var Re=-1,we=r[H];++Re<K;){var je=F[Re],He=je.iteratee,nn=je.type,Dt=He(we);if(nn==q)we=Dt;else if(!Dt){if(nn==re)continue e;break e}}_e[ie++]=we}return _e}Ue.prototype=Pi(Do.prototype),Ue.prototype.constructor=Ue;function Gr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Zb(){this.__data__=ks?ks(null):{},this.size=0}function Vb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Kb(r){var s=this.__data__;if(ks){var c=s[r];return c===d?n:c}return Ve.call(s,r)?s[r]:n}function Gb(r){var s=this.__data__;return ks?s[r]!==n:Ve.call(s,r)}function Qb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=ks&&s===n?d:s,this}Gr.prototype.clear=Zb,Gr.prototype.delete=Vb,Gr.prototype.get=Kb,Gr.prototype.has=Gb,Gr.prototype.set=Qb;function Jn(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Yb(){this.__data__=[],this.size=0}function Jb(r){var s=this.__data__,c=Uo(s,r);if(c<0)return!1;var h=s.length-1;return c==h?s.pop():Lo.call(s,c,1),--this.size,!0}function Xb(r){var s=this.__data__,c=Uo(s,r);return c<0?n:s[c][1]}function ey(r){return Uo(this.__data__,r)>-1}function ty(r,s){var c=this.__data__,h=Uo(c,r);return h<0?(++this.size,c.push([r,s])):c[h][1]=s,this}Jn.prototype.clear=Yb,Jn.prototype.delete=Jb,Jn.prototype.get=Xb,Jn.prototype.has=ey,Jn.prototype.set=ty;function Xn(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function ny(){this.size=0,this.__data__={hash:new Gr,map:new($s||Jn),string:new Gr}}function ry(r){var s=Jo(this,r).delete(r);return this.size-=s?1:0,s}function iy(r){return Jo(this,r).get(r)}function sy(r){return Jo(this,r).has(r)}function oy(r,s){var c=Jo(this,r),h=c.size;return c.set(r,s),this.size+=c.size==h?0:1,this}Xn.prototype.clear=ny,Xn.prototype.delete=ry,Xn.prototype.get=iy,Xn.prototype.has=sy,Xn.prototype.set=oy;function Qr(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new Xn;++s<c;)this.add(r[s])}function ay(r){return this.__data__.set(r,d),this}function ly(r){return this.__data__.has(r)}Qr.prototype.add=Qr.prototype.push=ay,Qr.prototype.has=ly;function $n(r){var s=this.__data__=new Jn(r);this.size=s.size}function cy(){this.__data__=new Jn,this.size=0}function uy(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function dy(r){return this.__data__.get(r)}function fy(r){return this.__data__.has(r)}function hy(r,s){var c=this.__data__;if(c instanceof Jn){var h=c.__data__;if(!$s||h.length<o-1)return h.push([r,s]),this.size=++c.size,this;c=this.__data__=new Xn(h)}return c.set(r,s),this.size=c.size,this}$n.prototype.clear=cy,$n.prototype.delete=uy,$n.prototype.get=dy,$n.prototype.has=fy,$n.prototype.set=hy;function Kf(r,s){var c=Te(r),h=!c&&ti(r),v=!c&&!h&&kr(r),y=!c&&!h&&!v&&Ni(r),S=c||h||v||y,O=S?tc(r.length,$b):[],M=O.length;for(var H in r)(s||Ve.call(r,H))&&!(S&&(H=="length"||v&&(H=="offset"||H=="parent")||y&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||rr(H,M)))&&O.push(H);return O}function Gf(r){var s=r.length;return s?r[bc(0,s-1)]:n}function py(r,s){return Xo(Zt(r),Yr(s,0,r.length))}function gy(r){return Xo(Zt(r))}function lc(r,s,c){(c!==n&&!En(r[s],c)||c===n&&!(s in r))&&er(r,s,c)}function Ss(r,s,c){var h=r[s];(!(Ve.call(r,s)&&En(h,c))||c===n&&!(s in r))&&er(r,s,c)}function Uo(r,s){for(var c=r.length;c--;)if(En(r[c][0],s))return c;return-1}function vy(r,s,c,h){return wr(r,function(v,y,S){s(h,v,c(v),S)}),h}function Qf(r,s){return r&&jn(s,$t(s),r)}function my(r,s){return r&&jn(s,Kt(s),r)}function er(r,s,c){s=="__proto__"&&Po?Po(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function cc(r,s){for(var c=-1,h=s.length,v=D(h),y=r==null;++c<h;)v[c]=y?n:Fc(r,s[c]);return v}function Yr(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function fn(r,s,c,h,v,y){var S,O=s&g,M=s&m,H=s&_;if(c&&(S=v?c(r,h,v,y):c(r)),S!==n)return S;if(!ot(r))return r;var F=Te(r);if(F){if(S=s_(r),!O)return Zt(r,S)}else{var K=Lt(r),ie=K==it||K==Pe;if(kr(r))return _h(r,O);if(K==ct||K==G||ie&&!v){if(S=M||ie?{}:Dh(r),!O)return M?Ky(r,my(S,r)):Vy(r,Qf(S,r))}else{if(!Ye[K])return v?r:{};S=o_(r,K,O)}}y||(y=new $n);var ue=y.get(r);if(ue)return ue;y.set(r,S),pp(r)?r.forEach(function(we){S.add(fn(we,s,c,we,r,y))}):fp(r)&&r.forEach(function(we,je){S.set(je,fn(we,s,c,je,r,y))});var _e=H?M?Ac:Tc:M?Kt:$t,Re=F?n:_e(r);return cn(Re||r,function(we,je){Re&&(je=we,we=r[je]),Ss(S,je,fn(we,s,c,je,r,y))}),S}function by(r){var s=$t(r);return function(c){return Yf(c,r,s)}}function Yf(r,s,c){var h=c.length;if(r==null)return!h;for(r=Qe(r);h--;){var v=c[h],y=s[v],S=r[v];if(S===n&&!(v in r)||!y(S))return!1}return!0}function Jf(r,s,c){if(typeof r!="function")throw new un(l);return Ps(function(){r.apply(n,c)},s)}function Ts(r,s,c,h){var v=-1,y=$o,S=!0,O=r.length,M=[],H=s.length;if(!O)return M;c&&(s=st(s,Xt(c))),h?(y=Gl,S=!1):s.length>=o&&(y=ws,S=!1,s=new Qr(s));e:for(;++v<O;){var F=r[v],K=c==null?F:c(F);if(F=h||F!==0?F:0,S&&K===K){for(var ie=H;ie--;)if(s[ie]===K)continue e;M.push(F)}else y(s,K,h)||M.push(F)}return M}var wr=kh(Bn),Xf=kh(dc,!0);function yy(r,s){var c=!0;return wr(r,function(h,v,y){return c=!!s(h,v,y),c}),c}function zo(r,s,c){for(var h=-1,v=r.length;++h<v;){var y=r[h],S=s(y);if(S!=null&&(O===n?S===S&&!tn(S):c(S,O)))var O=S,M=y}return M}function _y(r,s,c,h){var v=r.length;for(c=Ae(c),c<0&&(c=-c>v?0:v+c),h=h===n||h>v?v:Ae(h),h<0&&(h+=v),h=c>h?0:vp(h);c<h;)r[c++]=s;return r}function eh(r,s){var c=[];return wr(r,function(h,v,y){s(h,v,y)&&c.push(h)}),c}function Tt(r,s,c,h,v){var y=-1,S=r.length;for(c||(c=l_),v||(v=[]);++y<S;){var O=r[y];s>0&&c(O)?s>1?Tt(O,s-1,c,h,v):br(v,O):h||(v[v.length]=O)}return v}var uc=Ch(),th=Ch(!0);function Bn(r,s){return r&&uc(r,s,$t)}function dc(r,s){return r&&th(r,s,$t)}function Ho(r,s){return mr(s,function(c){return ir(r[c])})}function Jr(r,s){s=$r(s,r);for(var c=0,h=s.length;r!=null&&c<h;)r=r[Nn(s[c++])];return c&&c==h?r:n}function nh(r,s,c){var h=s(r);return Te(r)?h:br(h,c(r))}function jt(r){return r==null?r===n?xi:yn:Kr&&Kr in Qe(r)?n_(r):g_(r)}function fc(r,s){return r>s}function wy(r,s){return r!=null&&Ve.call(r,s)}function xy(r,s){return r!=null&&s in Qe(r)}function $y(r,s,c){return r>=Ot(s,c)&&r<_t(s,c)}function hc(r,s,c){for(var h=c?Gl:$o,v=r[0].length,y=r.length,S=y,O=D(y),M=1/0,H=[];S--;){var F=r[S];S&&s&&(F=st(F,Xt(s))),M=Ot(F.length,M),O[S]=!c&&(s||v>=120&&F.length>=120)?new Qr(S&&F):n}F=r[0];var K=-1,ie=O[0];e:for(;++K<v&&H.length<M;){var ue=F[K],_e=s?s(ue):ue;if(ue=c||ue!==0?ue:0,!(ie?ws(ie,_e):h(H,_e,c))){for(S=y;--S;){var Re=O[S];if(!(Re?ws(Re,_e):h(r[S],_e,c)))continue e}ie&&ie.push(_e),H.push(ue)}}return H}function Ey(r,s,c,h){return Bn(r,function(v,y,S){s(h,c(v),y,S)}),h}function As(r,s,c){s=$r(s,r),r=Fh(r,s);var h=r==null?r:r[Nn(pn(s))];return h==null?n:Jt(h,r,c)}function rh(r){return lt(r)&&jt(r)==G}function ky(r){return lt(r)&&jt(r)==Yt}function Cy(r){return lt(r)&&jt(r)==Ee}function Is(r,s,c,h,v){return r===s?!0:r==null||s==null||!lt(r)&&!lt(s)?r!==r&&s!==s:Sy(r,s,c,h,Is,v)}function Sy(r,s,c,h,v,y){var S=Te(r),O=Te(s),M=S?oe:Lt(r),H=O?oe:Lt(s);M=M==G?ct:M,H=H==G?ct:H;var F=M==ct,K=H==ct,ie=M==H;if(ie&&kr(r)){if(!kr(s))return!1;S=!0,F=!1}if(ie&&!F)return y||(y=new $n),S||Ni(r)?Bh(r,s,c,h,v,y):e_(r,s,M,c,h,v,y);if(!(c&w)){var ue=F&&Ve.call(r,"__wrapped__"),_e=K&&Ve.call(s,"__wrapped__");if(ue||_e){var Re=ue?r.value():r,we=_e?s.value():s;return y||(y=new $n),v(Re,we,c,h,y)}}return ie?(y||(y=new $n),t_(r,s,c,h,v,y)):!1}function Ty(r){return lt(r)&&Lt(r)==ze}function pc(r,s,c,h){var v=c.length,y=v,S=!h;if(r==null)return!y;for(r=Qe(r);v--;){var O=c[v];if(S&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++v<y;){O=c[v];var M=O[0],H=r[M],F=O[1];if(S&&O[2]){if(H===n&&!(M in r))return!1}else{var K=new $n;if(h)var ie=h(H,F,M,r,s,K);if(!(ie===n?Is(F,H,w|$,h,K):ie))return!1}}return!0}function ih(r){if(!ot(r)||u_(r))return!1;var s=ir(r)?Tb:b2;return s.test(ei(r))}function Ay(r){return lt(r)&&jt(r)==Pn}function Iy(r){return lt(r)&&Lt(r)==bt}function Ry(r){return lt(r)&&sa(r.length)&&!!nt[jt(r)]}function sh(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?Te(r)?lh(r[0],r[1]):ah(r):Sp(r)}function gc(r){if(!Ls(r))return Pb(r);var s=[];for(var c in Qe(r))Ve.call(r,c)&&c!="constructor"&&s.push(c);return s}function Oy(r){if(!ot(r))return p_(r);var s=Ls(r),c=[];for(var h in r)h=="constructor"&&(s||!Ve.call(r,h))||c.push(h);return c}function vc(r,s){return r<s}function oh(r,s){var c=-1,h=Vt(r)?D(r.length):[];return wr(r,function(v,y,S){h[++c]=s(v,y,S)}),h}function ah(r){var s=Rc(r);return s.length==1&&s[0][2]?zh(s[0][0],s[0][1]):function(c){return c===r||pc(c,r,s)}}function lh(r,s){return Lc(r)&&Uh(s)?zh(Nn(r),s):function(c){var h=Fc(c,r);return h===n&&h===s?qc(c,r):Is(s,h,w|$)}}function Fo(r,s,c,h,v){r!==s&&uc(s,function(y,S){if(v||(v=new $n),ot(y))Ly(r,s,S,c,Fo,h,v);else{var O=h?h(Mc(r,S),y,S+"",r,s,v):n;O===n&&(O=y),lc(r,S,O)}},Kt)}function Ly(r,s,c,h,v,y,S){var O=Mc(r,c),M=Mc(s,c),H=S.get(M);if(H){lc(r,c,H);return}var F=y?y(O,M,c+"",r,s,S):n,K=F===n;if(K){var ie=Te(M),ue=!ie&&kr(M),_e=!ie&&!ue&&Ni(M);F=M,ie||ue||_e?Te(O)?F=O:ut(O)?F=Zt(O):ue?(K=!1,F=_h(M,!0)):_e?(K=!1,F=wh(M,!0)):F=[]:Ms(M)||ti(M)?(F=O,ti(O)?F=mp(O):(!ot(O)||ir(O))&&(F=Dh(M))):K=!1}K&&(S.set(M,F),v(F,M,h,y,S),S.delete(M)),lc(r,c,F)}function ch(r,s){var c=r.length;if(c)return s+=s<0?c:0,rr(s,c)?r[s]:n}function uh(r,s,c){s.length?s=st(s,function(y){return Te(y)?function(S){return Jr(S,y.length===1?y[0]:y)}:y}):s=[Gt];var h=-1;s=st(s,Xt(be()));var v=oh(r,function(y,S,O){var M=st(s,function(H){return H(y)});return{criteria:M,index:++h,value:y}});return ob(v,function(y,S){return Zy(y,S,c)})}function Py(r,s){return dh(r,s,function(c,h){return qc(r,h)})}function dh(r,s,c){for(var h=-1,v=s.length,y={};++h<v;){var S=s[h],O=Jr(r,S);c(O,S)&&Rs(y,$r(S,r),O)}return y}function My(r){return function(s){return Jr(s,r)}}function mc(r,s,c,h){var v=h?sb:Si,y=-1,S=s.length,O=r;for(r===s&&(s=Zt(s)),c&&(O=st(r,Xt(c)));++y<S;)for(var M=0,H=s[y],F=c?c(H):H;(M=v(O,F,M,h))>-1;)O!==r&&Lo.call(O,M,1),Lo.call(r,M,1);return r}function fh(r,s){for(var c=r?s.length:0,h=c-1;c--;){var v=s[c];if(c==h||v!==y){var y=v;rr(v)?Lo.call(r,v,1):wc(r,v)}}return r}function bc(r,s){return r+Bo(Zf()*(s-r+1))}function By(r,s,c,h){for(var v=-1,y=_t(Mo((s-r)/(c||1)),0),S=D(y);y--;)S[h?y:++v]=r,r+=c;return S}function yc(r,s){var c="";if(!r||s<1||s>ge)return c;do s%2&&(c+=r),s=Bo(s/2),s&&(r+=r);while(s);return c}function Me(r,s){return Bc(Hh(r,s,Gt),r+"")}function jy(r){return Gf(Di(r))}function Ny(r,s){var c=Di(r);return Xo(c,Yr(s,0,c.length))}function Rs(r,s,c,h){if(!ot(r))return r;s=$r(s,r);for(var v=-1,y=s.length,S=y-1,O=r;O!=null&&++v<y;){var M=Nn(s[v]),H=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(v!=S){var F=O[M];H=h?h(F,M,O):n,H===n&&(H=ot(F)?F:rr(s[v+1])?[]:{})}Ss(O,M,H),O=O[M]}return r}var hh=jo?function(r,s){return jo.set(r,s),r}:Gt,Dy=Po?function(r,s){return Po(r,"toString",{configurable:!0,enumerable:!1,value:Zc(s),writable:!0})}:Gt;function Uy(r){return Xo(Di(r))}function hn(r,s,c){var h=-1,v=r.length;s<0&&(s=-s>v?0:v+s),c=c>v?v:c,c<0&&(c+=v),v=s>c?0:c-s>>>0,s>>>=0;for(var y=D(v);++h<v;)y[h]=r[h+s];return y}function zy(r,s){var c;return wr(r,function(h,v,y){return c=s(h,v,y),!c}),!!c}function qo(r,s,c){var h=0,v=r==null?h:r.length;if(typeof s=="number"&&s===s&&v<=Q){for(;h<v;){var y=h+v>>>1,S=r[y];S!==null&&!tn(S)&&(c?S<=s:S<s)?h=y+1:v=y}return v}return _c(r,s,Gt,c)}function _c(r,s,c,h){var v=0,y=r==null?0:r.length;if(y===0)return 0;s=c(s);for(var S=s!==s,O=s===null,M=tn(s),H=s===n;v<y;){var F=Bo((v+y)/2),K=c(r[F]),ie=K!==n,ue=K===null,_e=K===K,Re=tn(K);if(S)var we=h||_e;else H?we=_e&&(h||ie):O?we=_e&&ie&&(h||!ue):M?we=_e&&ie&&!ue&&(h||!Re):ue||Re?we=!1:we=h?K<=s:K<s;we?v=F+1:y=F}return Ot(y,Le)}function ph(r,s){for(var c=-1,h=r.length,v=0,y=[];++c<h;){var S=r[c],O=s?s(S):S;if(!c||!En(O,M)){var M=O;y[v++]=S===0?0:S}}return y}function gh(r){return typeof r=="number"?r:tn(r)?he:+r}function en(r){if(typeof r=="string")return r;if(Te(r))return st(r,en)+"";if(tn(r))return Vf?Vf.call(r):"";var s=r+"";return s=="0"&&1/r==-ce?"-0":s}function xr(r,s,c){var h=-1,v=$o,y=r.length,S=!0,O=[],M=O;if(c)S=!1,v=Gl;else if(y>=o){var H=s?null:Jy(r);if(H)return ko(H);S=!1,v=ws,M=new Qr}else M=s?[]:O;e:for(;++h<y;){var F=r[h],K=s?s(F):F;if(F=c||F!==0?F:0,S&&K===K){for(var ie=M.length;ie--;)if(M[ie]===K)continue e;s&&M.push(K),O.push(F)}else v(M,K,c)||(M!==O&&M.push(K),O.push(F))}return O}function wc(r,s){return s=$r(s,r),r=Fh(r,s),r==null||delete r[Nn(pn(s))]}function vh(r,s,c,h){return Rs(r,s,c(Jr(r,s)),h)}function Wo(r,s,c,h){for(var v=r.length,y=h?v:-1;(h?y--:++y<v)&&s(r[y],y,r););return c?hn(r,h?0:y,h?y+1:v):hn(r,h?y+1:0,h?v:y)}function mh(r,s){var c=r;return c instanceof Ue&&(c=c.value()),Ql(s,function(h,v){return v.func.apply(v.thisArg,br([h],v.args))},c)}function xc(r,s,c){var h=r.length;if(h<2)return h?xr(r[0]):[];for(var v=-1,y=D(h);++v<h;)for(var S=r[v],O=-1;++O<h;)O!=v&&(y[v]=Ts(y[v]||S,r[O],s,c));return xr(Tt(y,1),s,c)}function bh(r,s,c){for(var h=-1,v=r.length,y=s.length,S={};++h<v;){var O=h<y?s[h]:n;c(S,r[h],O)}return S}function $c(r){return ut(r)?r:[]}function Ec(r){return typeof r=="function"?r:Gt}function $r(r,s){return Te(r)?r:Lc(r,s)?[r]:Vh(Ze(r))}var Hy=Me;function Er(r,s,c){var h=r.length;return c=c===n?h:c,!s&&c>=h?r:hn(r,s,c)}var yh=Ab||function(r){return St.clearTimeout(r)};function _h(r,s){if(s)return r.slice();var c=r.length,h=zf?zf(c):new r.constructor(c);return r.copy(h),h}function kc(r){var s=new r.constructor(r.byteLength);return new Ro(s).set(new Ro(r)),s}function Fy(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function qy(r){var s=new r.constructor(r.source,nf.exec(r));return s.lastIndex=r.lastIndex,s}function Wy(r){return Cs?Qe(Cs.call(r)):{}}function wh(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function xh(r,s){if(r!==s){var c=r!==n,h=r===null,v=r===r,y=tn(r),S=s!==n,O=s===null,M=s===s,H=tn(s);if(!O&&!H&&!y&&r>s||y&&S&&M&&!O&&!H||h&&S&&M||!c&&M||!v)return 1;if(!h&&!y&&!H&&r<s||H&&c&&v&&!h&&!y||O&&c&&v||!S&&v||!M)return-1}return 0}function Zy(r,s,c){for(var h=-1,v=r.criteria,y=s.criteria,S=v.length,O=c.length;++h<S;){var M=xh(v[h],y[h]);if(M){if(h>=O)return M;var H=c[h];return M*(H=="desc"?-1:1)}}return r.index-s.index}function $h(r,s,c,h){for(var v=-1,y=r.length,S=c.length,O=-1,M=s.length,H=_t(y-S,0),F=D(M+H),K=!h;++O<M;)F[O]=s[O];for(;++v<S;)(K||v<y)&&(F[c[v]]=r[v]);for(;H--;)F[O++]=r[v++];return F}function Eh(r,s,c,h){for(var v=-1,y=r.length,S=-1,O=c.length,M=-1,H=s.length,F=_t(y-O,0),K=D(F+H),ie=!h;++v<F;)K[v]=r[v];for(var ue=v;++M<H;)K[ue+M]=s[M];for(;++S<O;)(ie||v<y)&&(K[ue+c[S]]=r[v++]);return K}function Zt(r,s){var c=-1,h=r.length;for(s||(s=D(h));++c<h;)s[c]=r[c];return s}function jn(r,s,c,h){var v=!c;c||(c={});for(var y=-1,S=s.length;++y<S;){var O=s[y],M=h?h(c[O],r[O],O,c,r):n;M===n&&(M=r[O]),v?er(c,O,M):Ss(c,O,M)}return c}function Vy(r,s){return jn(r,Oc(r),s)}function Ky(r,s){return jn(r,jh(r),s)}function Zo(r,s){return function(c,h){var v=Te(c)?X2:vy,y=s?s():{};return v(c,r,be(h,2),y)}}function Mi(r){return Me(function(s,c){var h=-1,v=c.length,y=v>1?c[v-1]:n,S=v>2?c[2]:n;for(y=r.length>3&&typeof y=="function"?(v--,y):n,S&&Nt(c[0],c[1],S)&&(y=v<3?n:y,v=1),s=Qe(s);++h<v;){var O=c[h];O&&r(s,O,h,y)}return s})}function kh(r,s){return function(c,h){if(c==null)return c;if(!Vt(c))return r(c,h);for(var v=c.length,y=s?v:-1,S=Qe(c);(s?y--:++y<v)&&h(S[y],y,S)!==!1;);return c}}function Ch(r){return function(s,c,h){for(var v=-1,y=Qe(s),S=h(s),O=S.length;O--;){var M=S[r?O:++v];if(c(y[M],M,y)===!1)break}return s}}function Gy(r,s,c){var h=s&x,v=Os(r);function y(){var S=this&&this!==St&&this instanceof y?v:r;return S.apply(h?c:this,arguments)}return y}function Sh(r){return function(s){s=Ze(s);var c=Ti(s)?xn(s):n,h=c?c[0]:s.charAt(0),v=c?Er(c,1).join(""):s.slice(1);return h[r]()+v}}function Bi(r){return function(s){return Ql(kp(Ep(s).replace(D2,"")),r,"")}}function Os(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Pi(r.prototype),h=r.apply(c,s);return ot(h)?h:c}}function Qy(r,s,c){var h=Os(r);function v(){for(var y=arguments.length,S=D(y),O=y,M=ji(v);O--;)S[O]=arguments[O];var H=y<3&&S[0]!==M&&S[y-1]!==M?[]:yr(S,M);if(y-=H.length,y<c)return Oh(r,s,Vo,v.placeholder,n,S,H,n,n,c-y);var F=this&&this!==St&&this instanceof v?h:r;return Jt(F,this,S)}return v}function Th(r){return function(s,c,h){var v=Qe(s);if(!Vt(s)){var y=be(c,3);s=$t(s),c=function(O){return y(v[O],O,v)}}var S=r(s,c,h);return S>-1?v[y?s[S]:S]:n}}function Ah(r){return nr(function(s){var c=s.length,h=c,v=dn.prototype.thru;for(r&&s.reverse();h--;){var y=s[h];if(typeof y!="function")throw new un(l);if(v&&!S&&Yo(y)=="wrapper")var S=new dn([],!0)}for(h=S?h:c;++h<c;){y=s[h];var O=Yo(y),M=O=="wrapper"?Ic(y):n;M&&Pc(M[0])&&M[1]==(B|k|I|U)&&!M[4].length&&M[9]==1?S=S[Yo(M[0])].apply(S,M[3]):S=y.length==1&&Pc(y)?S[O]():S.thru(y)}return function(){var H=arguments,F=H[0];if(S&&H.length==1&&Te(F))return S.plant(F).value();for(var K=0,ie=c?s[K].apply(this,H):F;++K<c;)ie=s[K].call(this,ie);return ie}})}function Vo(r,s,c,h,v,y,S,O,M,H){var F=s&B,K=s&x,ie=s&C,ue=s&(k|E),_e=s&ne,Re=ie?n:Os(r);function we(){for(var je=arguments.length,He=D(je),nn=je;nn--;)He[nn]=arguments[nn];if(ue)var Dt=ji(we),rn=lb(He,Dt);if(h&&(He=$h(He,h,v,ue)),y&&(He=Eh(He,y,S,ue)),je-=rn,ue&&je<H){var dt=yr(He,Dt);return Oh(r,s,Vo,we.placeholder,c,He,dt,O,M,H-je)}var kn=K?c:this,or=ie?kn[r]:r;return je=He.length,O?He=v_(He,O):_e&&je>1&&He.reverse(),F&&M<je&&(He.length=M),this&&this!==St&&this instanceof we&&(or=Re||Os(or)),or.apply(kn,He)}return we}function Ih(r,s){return function(c,h){return Ey(c,r,s(h),{})}}function Ko(r,s){return function(c,h){var v;if(c===n&&h===n)return s;if(c!==n&&(v=c),h!==n){if(v===n)return h;typeof c=="string"||typeof h=="string"?(c=en(c),h=en(h)):(c=gh(c),h=gh(h)),v=r(c,h)}return v}}function Cc(r){return nr(function(s){return s=st(s,Xt(be())),Me(function(c){var h=this;return r(s,function(v){return Jt(v,h,c)})})})}function Go(r,s){s=s===n?" ":en(s);var c=s.length;if(c<2)return c?yc(s,r):s;var h=yc(s,Mo(r/Ai(s)));return Ti(s)?Er(xn(h),0,r).join(""):h.slice(0,r)}function Yy(r,s,c,h){var v=s&x,y=Os(r);function S(){for(var O=-1,M=arguments.length,H=-1,F=h.length,K=D(F+M),ie=this&&this!==St&&this instanceof S?y:r;++H<F;)K[H]=h[H];for(;M--;)K[H++]=arguments[++O];return Jt(ie,v?c:this,K)}return S}function Rh(r){return function(s,c,h){return h&&typeof h!="number"&&Nt(s,c,h)&&(c=h=n),s=sr(s),c===n?(c=s,s=0):c=sr(c),h=h===n?s<c?1:-1:sr(h),By(s,c,h,r)}}function Qo(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=gn(s),c=gn(c)),r(s,c)}}function Oh(r,s,c,h,v,y,S,O,M,H){var F=s&k,K=F?S:n,ie=F?n:S,ue=F?y:n,_e=F?n:y;s|=F?I:L,s&=~(F?L:I),s&A||(s&=~(x|C));var Re=[r,s,v,ue,K,_e,ie,O,M,H],we=c.apply(n,Re);return Pc(r)&&qh(we,Re),we.placeholder=h,Wh(we,r,s)}function Sc(r){var s=yt[r];return function(c,h){if(c=gn(c),h=h==null?0:Ot(Ae(h),292),h&&Wf(c)){var v=(Ze(c)+"e").split("e"),y=s(v[0]+"e"+(+v[1]+h));return v=(Ze(y)+"e").split("e"),+(v[0]+"e"+(+v[1]-h))}return s(c)}}var Jy=Oi&&1/ko(new Oi([,-0]))[1]==ce?function(r){return new Oi(r)}:Gc;function Lh(r){return function(s){var c=Lt(s);return c==ze?rc(s):c==bt?gb(s):ab(s,r(s))}}function tr(r,s,c,h,v,y,S,O){var M=s&C;if(!M&&typeof r!="function")throw new un(l);var H=h?h.length:0;if(H||(s&=~(I|L),h=v=n),S=S===n?S:_t(Ae(S),0),O=O===n?O:Ae(O),H-=v?v.length:0,s&L){var F=h,K=v;h=v=n}var ie=M?n:Ic(r),ue=[r,s,c,h,v,F,K,y,S,O];if(ie&&h_(ue,ie),r=ue[0],s=ue[1],c=ue[2],h=ue[3],v=ue[4],O=ue[9]=ue[9]===n?M?0:r.length:_t(ue[9]-H,0),!O&&s&(k|E)&&(s&=~(k|E)),!s||s==x)var _e=Gy(r,s,c);else s==k||s==E?_e=Qy(r,s,O):(s==I||s==(x|I))&&!v.length?_e=Yy(r,s,c,h):_e=Vo.apply(n,ue);var Re=ie?hh:qh;return Wh(Re(_e,ue),r,s)}function Ph(r,s,c,h){return r===n||En(r,Ri[c])&&!Ve.call(h,c)?s:r}function Mh(r,s,c,h,v,y){return ot(r)&&ot(s)&&(y.set(s,r),Fo(r,s,n,Mh,y),y.delete(s)),r}function Xy(r){return Ms(r)?n:r}function Bh(r,s,c,h,v,y){var S=c&w,O=r.length,M=s.length;if(O!=M&&!(S&&M>O))return!1;var H=y.get(r),F=y.get(s);if(H&&F)return H==s&&F==r;var K=-1,ie=!0,ue=c&$?new Qr:n;for(y.set(r,s),y.set(s,r);++K<O;){var _e=r[K],Re=s[K];if(h)var we=S?h(Re,_e,K,s,r,y):h(_e,Re,K,r,s,y);if(we!==n){if(we)continue;ie=!1;break}if(ue){if(!Yl(s,function(je,He){if(!ws(ue,He)&&(_e===je||v(_e,je,c,h,y)))return ue.push(He)})){ie=!1;break}}else if(!(_e===Re||v(_e,Re,c,h,y))){ie=!1;break}}return y.delete(r),y.delete(s),ie}function e_(r,s,c,h,v,y,S){switch(c){case Wt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Yt:return!(r.byteLength!=s.byteLength||!y(new Ro(r),new Ro(s)));case N:case Ee:case Ct:return En(+r,+s);case ht:return r.name==s.name&&r.message==s.message;case Pn:case _n:return r==s+"";case ze:var O=rc;case bt:var M=h&w;if(O||(O=ko),r.size!=s.size&&!M)return!1;var H=S.get(r);if(H)return H==s;h|=$,S.set(r,s);var F=Bh(O(r),O(s),h,v,y,S);return S.delete(r),F;case Mn:if(Cs)return Cs.call(r)==Cs.call(s)}return!1}function t_(r,s,c,h,v,y){var S=c&w,O=Tc(r),M=O.length,H=Tc(s),F=H.length;if(M!=F&&!S)return!1;for(var K=M;K--;){var ie=O[K];if(!(S?ie in s:Ve.call(s,ie)))return!1}var ue=y.get(r),_e=y.get(s);if(ue&&_e)return ue==s&&_e==r;var Re=!0;y.set(r,s),y.set(s,r);for(var we=S;++K<M;){ie=O[K];var je=r[ie],He=s[ie];if(h)var nn=S?h(He,je,ie,s,r,y):h(je,He,ie,r,s,y);if(!(nn===n?je===He||v(je,He,c,h,y):nn)){Re=!1;break}we||(we=ie=="constructor")}if(Re&&!we){var Dt=r.constructor,rn=s.constructor;Dt!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof rn=="function"&&rn instanceof rn)&&(Re=!1)}return y.delete(r),y.delete(s),Re}function nr(r){return Bc(Hh(r,n,Yh),r+"")}function Tc(r){return nh(r,$t,Oc)}function Ac(r){return nh(r,Kt,jh)}var Ic=jo?function(r){return jo.get(r)}:Gc;function Yo(r){for(var s=r.name+"",c=Li[s],h=Ve.call(Li,s)?c.length:0;h--;){var v=c[h],y=v.func;if(y==null||y==r)return v.name}return s}function ji(r){var s=Ve.call(b,"placeholder")?b:r;return s.placeholder}function be(){var r=b.iteratee||Vc;return r=r===Vc?sh:r,arguments.length?r(arguments[0],arguments[1]):r}function Jo(r,s){var c=r.__data__;return c_(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Rc(r){for(var s=$t(r),c=s.length;c--;){var h=s[c],v=r[h];s[c]=[h,v,Uh(v)]}return s}function Xr(r,s){var c=fb(r,s);return ih(c)?c:n}function n_(r){var s=Ve.call(r,Kr),c=r[Kr];try{r[Kr]=n;var h=!0}catch{}var v=Ao.call(r);return h&&(s?r[Kr]=c:delete r[Kr]),v}var Oc=sc?function(r){return r==null?[]:(r=Qe(r),mr(sc(r),function(s){return Ff.call(r,s)}))}:Qc,jh=sc?function(r){for(var s=[];r;)br(s,Oc(r)),r=Oo(r);return s}:Qc,Lt=jt;(oc&&Lt(new oc(new ArrayBuffer(1)))!=Wt||$s&&Lt(new $s)!=ze||ac&&Lt(ac.resolve())!=gr||Oi&&Lt(new Oi)!=bt||Es&&Lt(new Es)!=xe)&&(Lt=function(r){var s=jt(r),c=s==ct?r.constructor:n,h=c?ei(c):"";if(h)switch(h){case Nb:return Wt;case Db:return ze;case Ub:return gr;case zb:return bt;case Hb:return xe}return s});function r_(r,s,c){for(var h=-1,v=c.length;++h<v;){var y=c[h],S=y.size;switch(y.type){case"drop":r+=S;break;case"dropRight":s-=S;break;case"take":s=Ot(s,r+S);break;case"takeRight":r=_t(r,s-S);break}}return{start:r,end:s}}function i_(r){var s=r.match(u2);return s?s[1].split(d2):[]}function Nh(r,s,c){s=$r(s,r);for(var h=-1,v=s.length,y=!1;++h<v;){var S=Nn(s[h]);if(!(y=r!=null&&c(r,S)))break;r=r[S]}return y||++h!=v?y:(v=r==null?0:r.length,!!v&&sa(v)&&rr(S,v)&&(Te(r)||ti(r)))}function s_(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ve.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Dh(r){return typeof r.constructor=="function"&&!Ls(r)?Pi(Oo(r)):{}}function o_(r,s,c){var h=r.constructor;switch(s){case Yt:return kc(r);case N:case Ee:return new h(+r);case Wt:return Fy(r,c);case wn:case Qn:case Yn:case vr:case $i:case Ei:case ki:case Nl:case Dl:return wh(r,c);case ze:return new h;case Ct:case _n:return new h(r);case Pn:return qy(r);case bt:return new h;case Mn:return Wy(r)}}function a_(r,s){var c=s.length;if(!c)return r;var h=c-1;return s[h]=(c>1?"& ":"")+s[h],s=s.join(c>2?", ":" "),r.replace(c2,`{
/* [wrapped with `+s+`] */
`)}function l_(r){return Te(r)||ti(r)||!!(qf&&r&&r[qf])}function rr(r,s){var c=typeof r;return s=s??ge,!!s&&(c=="number"||c!="symbol"&&_2.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,c){if(!ot(c))return!1;var h=typeof s;return(h=="number"?Vt(c)&&rr(s,c.length):h=="string"&&s in c)?En(c[s],r):!1}function Lc(r,s){if(Te(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||tn(r)?!0:s2.test(r)||!i2.test(r)||s!=null&&r in Qe(s)}function c_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Pc(r){var s=Yo(r),c=b[s];if(typeof c!="function"||!(s in Ue.prototype))return!1;if(r===c)return!0;var h=Ic(c);return!!h&&r===h[0]}function u_(r){return!!Uf&&Uf in r}var d_=So?ir:Yc;function Ls(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Ri;return r===c}function Uh(r){return r===r&&!ot(r)}function zh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Qe(c))}}function f_(r){var s=ra(r,function(h){return c.size===f&&c.clear(),h}),c=s.cache;return s}function h_(r,s){var c=r[1],h=s[1],v=c|h,y=v<(x|C|B),S=h==B&&c==k||h==B&&c==U&&r[7].length<=s[8]||h==(B|U)&&s[7].length<=s[8]&&c==k;if(!(y||S))return r;h&x&&(r[2]=s[2],v|=c&x?0:A);var O=s[3];if(O){var M=r[3];r[3]=M?$h(M,O,s[4]):O,r[4]=M?yr(r[3],p):s[4]}return O=s[5],O&&(M=r[5],r[5]=M?Eh(M,O,s[6]):O,r[6]=M?yr(r[5],p):s[6]),O=s[7],O&&(r[7]=O),h&B&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=v,r}function p_(r){var s=[];if(r!=null)for(var c in Qe(r))s.push(c);return s}function g_(r){return Ao.call(r)}function Hh(r,s,c){return s=_t(s===n?r.length-1:s,0),function(){for(var h=arguments,v=-1,y=_t(h.length-s,0),S=D(y);++v<y;)S[v]=h[s+v];v=-1;for(var O=D(s+1);++v<s;)O[v]=h[v];return O[s]=c(S),Jt(r,this,O)}}function Fh(r,s){return s.length<2?r:Jr(r,hn(s,0,-1))}function v_(r,s){for(var c=r.length,h=Ot(s.length,c),v=Zt(r);h--;){var y=s[h];r[h]=rr(y,c)?v[y]:n}return r}function Mc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var qh=Zh(hh),Ps=Rb||function(r,s){return St.setTimeout(r,s)},Bc=Zh(Dy);function Wh(r,s,c){var h=s+"";return Bc(r,a_(h,m_(i_(h),c)))}function Zh(r){var s=0,c=0;return function(){var h=Mb(),v=Y-(h-c);if(c=h,v>0){if(++s>=V)return arguments[0]}else s=0;return r.apply(n,arguments)}}function Xo(r,s){var c=-1,h=r.length,v=h-1;for(s=s===n?h:s;++c<s;){var y=bc(c,v),S=r[y];r[y]=r[c],r[c]=S}return r.length=s,r}var Vh=f_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(o2,function(c,h,v,y){s.push(v?y.replace(p2,"$1"):h||c)}),s});function Nn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-ce?"-0":s}function ei(r){if(r!=null){try{return To.call(r)}catch{}try{return r+""}catch{}}return""}function m_(r,s){return cn(de,function(c){var h="_."+c[0];s&c[1]&&!$o(r,h)&&r.push(h)}),r.sort()}function Kh(r){if(r instanceof Ue)return r.clone();var s=new dn(r.__wrapped__,r.__chain__);return s.__actions__=Zt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function b_(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=_t(Ae(s),0);var h=r==null?0:r.length;if(!h||s<1)return[];for(var v=0,y=0,S=D(Mo(h/s));v<h;)S[y++]=hn(r,v,v+=s);return S}function y_(r){for(var s=-1,c=r==null?0:r.length,h=0,v=[];++s<c;){var y=r[s];y&&(v[h++]=y)}return v}function __(){var r=arguments.length;if(!r)return[];for(var s=D(r-1),c=arguments[0],h=r;h--;)s[h-1]=arguments[h];return br(Te(c)?Zt(c):[c],Tt(s,1))}var w_=Me(function(r,s){return ut(r)?Ts(r,Tt(s,1,ut,!0)):[]}),x_=Me(function(r,s){var c=pn(s);return ut(c)&&(c=n),ut(r)?Ts(r,Tt(s,1,ut,!0),be(c,2)):[]}),$_=Me(function(r,s){var c=pn(s);return ut(c)&&(c=n),ut(r)?Ts(r,Tt(s,1,ut,!0),n,c):[]});function E_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Ae(s),hn(r,s<0?0:s,h)):[]}function k_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Ae(s),s=h-s,hn(r,0,s<0?0:s)):[]}function C_(r,s){return r&&r.length?Wo(r,be(s,3),!0,!0):[]}function S_(r,s){return r&&r.length?Wo(r,be(s,3),!0):[]}function T_(r,s,c,h){var v=r==null?0:r.length;return v?(c&&typeof c!="number"&&Nt(r,s,c)&&(c=0,h=v),_y(r,s,c,h)):[]}function Gh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Ae(c);return v<0&&(v=_t(h+v,0)),Eo(r,be(s,3),v)}function Qh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h-1;return c!==n&&(v=Ae(c),v=c<0?_t(h+v,0):Ot(v,h-1)),Eo(r,be(s,3),v,!0)}function Yh(r){var s=r==null?0:r.length;return s?Tt(r,1):[]}function A_(r){var s=r==null?0:r.length;return s?Tt(r,ce):[]}function I_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Ae(s),Tt(r,s)):[]}function R_(r){for(var s=-1,c=r==null?0:r.length,h={};++s<c;){var v=r[s];h[v[0]]=v[1]}return h}function Jh(r){return r&&r.length?r[0]:n}function O_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Ae(c);return v<0&&(v=_t(h+v,0)),Si(r,s,v)}function L_(r){var s=r==null?0:r.length;return s?hn(r,0,-1):[]}var P_=Me(function(r){var s=st(r,$c);return s.length&&s[0]===r[0]?hc(s):[]}),M_=Me(function(r){var s=pn(r),c=st(r,$c);return s===pn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?hc(c,be(s,2)):[]}),B_=Me(function(r){var s=pn(r),c=st(r,$c);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?hc(c,n,s):[]});function j_(r,s){return r==null?"":Lb.call(r,s)}function pn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function N_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h;return c!==n&&(v=Ae(c),v=v<0?_t(h+v,0):Ot(v,h-1)),s===s?mb(r,s,v):Eo(r,Of,v,!0)}function D_(r,s){return r&&r.length?ch(r,Ae(s)):n}var U_=Me(Xh);function Xh(r,s){return r&&r.length&&s&&s.length?mc(r,s):r}function z_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,be(c,2)):r}function H_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,n,c):r}var F_=nr(function(r,s){var c=r==null?0:r.length,h=cc(r,s);return fh(r,st(s,function(v){return rr(v,c)?+v:v}).sort(xh)),h});function q_(r,s){var c=[];if(!(r&&r.length))return c;var h=-1,v=[],y=r.length;for(s=be(s,3);++h<y;){var S=r[h];s(S,h,r)&&(c.push(S),v.push(h))}return fh(r,v),c}function jc(r){return r==null?r:jb.call(r)}function W_(r,s,c){var h=r==null?0:r.length;return h?(c&&typeof c!="number"&&Nt(r,s,c)?(s=0,c=h):(s=s==null?0:Ae(s),c=c===n?h:Ae(c)),hn(r,s,c)):[]}function Z_(r,s){return qo(r,s)}function V_(r,s,c){return _c(r,s,be(c,2))}function K_(r,s){var c=r==null?0:r.length;if(c){var h=qo(r,s);if(h<c&&En(r[h],s))return h}return-1}function G_(r,s){return qo(r,s,!0)}function Q_(r,s,c){return _c(r,s,be(c,2),!0)}function Y_(r,s){var c=r==null?0:r.length;if(c){var h=qo(r,s,!0)-1;if(En(r[h],s))return h}return-1}function J_(r){return r&&r.length?ph(r):[]}function X_(r,s){return r&&r.length?ph(r,be(s,2)):[]}function ew(r){var s=r==null?0:r.length;return s?hn(r,1,s):[]}function tw(r,s,c){return r&&r.length?(s=c||s===n?1:Ae(s),hn(r,0,s<0?0:s)):[]}function nw(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Ae(s),s=h-s,hn(r,s<0?0:s,h)):[]}function rw(r,s){return r&&r.length?Wo(r,be(s,3),!1,!0):[]}function iw(r,s){return r&&r.length?Wo(r,be(s,3)):[]}var sw=Me(function(r){return xr(Tt(r,1,ut,!0))}),ow=Me(function(r){var s=pn(r);return ut(s)&&(s=n),xr(Tt(r,1,ut,!0),be(s,2))}),aw=Me(function(r){var s=pn(r);return s=typeof s=="function"?s:n,xr(Tt(r,1,ut,!0),n,s)});function lw(r){return r&&r.length?xr(r):[]}function cw(r,s){return r&&r.length?xr(r,be(s,2)):[]}function uw(r,s){return s=typeof s=="function"?s:n,r&&r.length?xr(r,n,s):[]}function Nc(r){if(!(r&&r.length))return[];var s=0;return r=mr(r,function(c){if(ut(c))return s=_t(c.length,s),!0}),tc(s,function(c){return st(r,Jl(c))})}function ep(r,s){if(!(r&&r.length))return[];var c=Nc(r);return s==null?c:st(c,function(h){return Jt(s,n,h)})}var dw=Me(function(r,s){return ut(r)?Ts(r,s):[]}),fw=Me(function(r){return xc(mr(r,ut))}),hw=Me(function(r){var s=pn(r);return ut(s)&&(s=n),xc(mr(r,ut),be(s,2))}),pw=Me(function(r){var s=pn(r);return s=typeof s=="function"?s:n,xc(mr(r,ut),n,s)}),gw=Me(Nc);function vw(r,s){return bh(r||[],s||[],Ss)}function mw(r,s){return bh(r||[],s||[],Rs)}var bw=Me(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,ep(r,c)});function tp(r){var s=b(r);return s.__chain__=!0,s}function yw(r,s){return s(r),r}function ea(r,s){return s(r)}var _w=nr(function(r){var s=r.length,c=s?r[0]:0,h=this.__wrapped__,v=function(y){return cc(y,r)};return s>1||this.__actions__.length||!(h instanceof Ue)||!rr(c)?this.thru(v):(h=h.slice(c,+c+(s?1:0)),h.__actions__.push({func:ea,args:[v],thisArg:n}),new dn(h,this.__chain__).thru(function(y){return s&&!y.length&&y.push(n),y}))});function ww(){return tp(this)}function xw(){return new dn(this.value(),this.__chain__)}function $w(){this.__values__===n&&(this.__values__=gp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function Ew(){return this}function kw(r){for(var s,c=this;c instanceof Do;){var h=Kh(c);h.__index__=0,h.__values__=n,s?v.__wrapped__=h:s=h;var v=h;c=c.__wrapped__}return v.__wrapped__=r,s}function Cw(){var r=this.__wrapped__;if(r instanceof Ue){var s=r;return this.__actions__.length&&(s=new Ue(this)),s=s.reverse(),s.__actions__.push({func:ea,args:[jc],thisArg:n}),new dn(s,this.__chain__)}return this.thru(jc)}function Sw(){return mh(this.__wrapped__,this.__actions__)}var Tw=Zo(function(r,s,c){Ve.call(r,c)?++r[c]:er(r,c,1)});function Aw(r,s,c){var h=Te(r)?If:yy;return c&&Nt(r,s,c)&&(s=n),h(r,be(s,3))}function Iw(r,s){var c=Te(r)?mr:eh;return c(r,be(s,3))}var Rw=Th(Gh),Ow=Th(Qh);function Lw(r,s){return Tt(ta(r,s),1)}function Pw(r,s){return Tt(ta(r,s),ce)}function Mw(r,s,c){return c=c===n?1:Ae(c),Tt(ta(r,s),c)}function np(r,s){var c=Te(r)?cn:wr;return c(r,be(s,3))}function rp(r,s){var c=Te(r)?eb:Xf;return c(r,be(s,3))}var Bw=Zo(function(r,s,c){Ve.call(r,c)?r[c].push(s):er(r,c,[s])});function jw(r,s,c,h){r=Vt(r)?r:Di(r),c=c&&!h?Ae(c):0;var v=r.length;return c<0&&(c=_t(v+c,0)),oa(r)?c<=v&&r.indexOf(s,c)>-1:!!v&&Si(r,s,c)>-1}var Nw=Me(function(r,s,c){var h=-1,v=typeof s=="function",y=Vt(r)?D(r.length):[];return wr(r,function(S){y[++h]=v?Jt(s,S,c):As(S,s,c)}),y}),Dw=Zo(function(r,s,c){er(r,c,s)});function ta(r,s){var c=Te(r)?st:oh;return c(r,be(s,3))}function Uw(r,s,c,h){return r==null?[]:(Te(s)||(s=s==null?[]:[s]),c=h?n:c,Te(c)||(c=c==null?[]:[c]),uh(r,s,c))}var zw=Zo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function Hw(r,s,c){var h=Te(r)?Ql:Pf,v=arguments.length<3;return h(r,be(s,4),c,v,wr)}function Fw(r,s,c){var h=Te(r)?tb:Pf,v=arguments.length<3;return h(r,be(s,4),c,v,Xf)}function qw(r,s){var c=Te(r)?mr:eh;return c(r,ia(be(s,3)))}function Ww(r){var s=Te(r)?Gf:jy;return s(r)}function Zw(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=Ae(s);var h=Te(r)?py:Ny;return h(r,s)}function Vw(r){var s=Te(r)?gy:Uy;return s(r)}function Kw(r){if(r==null)return 0;if(Vt(r))return oa(r)?Ai(r):r.length;var s=Lt(r);return s==ze||s==bt?r.size:gc(r).length}function Gw(r,s,c){var h=Te(r)?Yl:zy;return c&&Nt(r,s,c)&&(s=n),h(r,be(s,3))}var Qw=Me(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Nt(r,s[0],s[1])?s=[]:c>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),uh(r,Tt(s,1),[])}),na=Ib||function(){return St.Date.now()};function Yw(r,s){if(typeof s!="function")throw new un(l);return r=Ae(r),function(){if(--r<1)return s.apply(this,arguments)}}function ip(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,tr(r,B,n,n,n,n,s)}function sp(r,s){var c;if(typeof s!="function")throw new un(l);return r=Ae(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Dc=Me(function(r,s,c){var h=x;if(c.length){var v=yr(c,ji(Dc));h|=I}return tr(r,h,s,c,v)}),op=Me(function(r,s,c){var h=x|C;if(c.length){var v=yr(c,ji(op));h|=I}return tr(s,h,r,c,v)});function ap(r,s,c){s=c?n:s;var h=tr(r,k,n,n,n,n,n,s);return h.placeholder=ap.placeholder,h}function lp(r,s,c){s=c?n:s;var h=tr(r,E,n,n,n,n,n,s);return h.placeholder=lp.placeholder,h}function cp(r,s,c){var h,v,y,S,O,M,H=0,F=!1,K=!1,ie=!0;if(typeof r!="function")throw new un(l);s=gn(s)||0,ot(c)&&(F=!!c.leading,K="maxWait"in c,y=K?_t(gn(c.maxWait)||0,s):y,ie="trailing"in c?!!c.trailing:ie);function ue(dt){var kn=h,or=v;return h=v=n,H=dt,S=r.apply(or,kn),S}function _e(dt){return H=dt,O=Ps(je,s),F?ue(dt):S}function Re(dt){var kn=dt-M,or=dt-H,Tp=s-kn;return K?Ot(Tp,y-or):Tp}function we(dt){var kn=dt-M,or=dt-H;return M===n||kn>=s||kn<0||K&&or>=y}function je(){var dt=na();if(we(dt))return He(dt);O=Ps(je,Re(dt))}function He(dt){return O=n,ie&&h?ue(dt):(h=v=n,S)}function nn(){O!==n&&yh(O),H=0,h=M=v=O=n}function Dt(){return O===n?S:He(na())}function rn(){var dt=na(),kn=we(dt);if(h=arguments,v=this,M=dt,kn){if(O===n)return _e(M);if(K)return yh(O),O=Ps(je,s),ue(M)}return O===n&&(O=Ps(je,s)),S}return rn.cancel=nn,rn.flush=Dt,rn}var Jw=Me(function(r,s){return Jf(r,1,s)}),Xw=Me(function(r,s,c){return Jf(r,gn(s)||0,c)});function e3(r){return tr(r,ne)}function ra(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new un(l);var c=function(){var h=arguments,v=s?s.apply(this,h):h[0],y=c.cache;if(y.has(v))return y.get(v);var S=r.apply(this,h);return c.cache=y.set(v,S)||y,S};return c.cache=new(ra.Cache||Xn),c}ra.Cache=Xn;function ia(r){if(typeof r!="function")throw new un(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function t3(r){return sp(2,r)}var n3=Hy(function(r,s){s=s.length==1&&Te(s[0])?st(s[0],Xt(be())):st(Tt(s,1),Xt(be()));var c=s.length;return Me(function(h){for(var v=-1,y=Ot(h.length,c);++v<y;)h[v]=s[v].call(this,h[v]);return Jt(r,this,h)})}),Uc=Me(function(r,s){var c=yr(s,ji(Uc));return tr(r,I,n,s,c)}),up=Me(function(r,s){var c=yr(s,ji(up));return tr(r,L,n,s,c)}),r3=nr(function(r,s){return tr(r,U,n,n,n,s)});function i3(r,s){if(typeof r!="function")throw new un(l);return s=s===n?s:Ae(s),Me(r,s)}function s3(r,s){if(typeof r!="function")throw new un(l);return s=s==null?0:_t(Ae(s),0),Me(function(c){var h=c[s],v=Er(c,0,s);return h&&br(v,h),Jt(r,this,v)})}function o3(r,s,c){var h=!0,v=!0;if(typeof r!="function")throw new un(l);return ot(c)&&(h="leading"in c?!!c.leading:h,v="trailing"in c?!!c.trailing:v),cp(r,s,{leading:h,maxWait:s,trailing:v})}function a3(r){return ip(r,1)}function l3(r,s){return Uc(Ec(s),r)}function c3(){if(!arguments.length)return[];var r=arguments[0];return Te(r)?r:[r]}function u3(r){return fn(r,_)}function d3(r,s){return s=typeof s=="function"?s:n,fn(r,_,s)}function f3(r){return fn(r,g|_)}function h3(r,s){return s=typeof s=="function"?s:n,fn(r,g|_,s)}function p3(r,s){return s==null||Yf(r,s,$t(s))}function En(r,s){return r===s||r!==r&&s!==s}var g3=Qo(fc),v3=Qo(function(r,s){return r>=s}),ti=rh(function(){return arguments}())?rh:function(r){return lt(r)&&Ve.call(r,"callee")&&!Ff.call(r,"callee")},Te=D.isArray,m3=Ef?Xt(Ef):ky;function Vt(r){return r!=null&&sa(r.length)&&!ir(r)}function ut(r){return lt(r)&&Vt(r)}function b3(r){return r===!0||r===!1||lt(r)&&jt(r)==N}var kr=Ob||Yc,y3=kf?Xt(kf):Cy;function _3(r){return lt(r)&&r.nodeType===1&&!Ms(r)}function w3(r){if(r==null)return!0;if(Vt(r)&&(Te(r)||typeof r=="string"||typeof r.splice=="function"||kr(r)||Ni(r)||ti(r)))return!r.length;var s=Lt(r);if(s==ze||s==bt)return!r.size;if(Ls(r))return!gc(r).length;for(var c in r)if(Ve.call(r,c))return!1;return!0}function x3(r,s){return Is(r,s)}function $3(r,s,c){c=typeof c=="function"?c:n;var h=c?c(r,s):n;return h===n?Is(r,s,n,c):!!h}function zc(r){if(!lt(r))return!1;var s=jt(r);return s==ht||s==tt||typeof r.message=="string"&&typeof r.name=="string"&&!Ms(r)}function E3(r){return typeof r=="number"&&Wf(r)}function ir(r){if(!ot(r))return!1;var s=jt(r);return s==it||s==Pe||s==ve||s==wi}function dp(r){return typeof r=="number"&&r==Ae(r)}function sa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ge}function ot(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function lt(r){return r!=null&&typeof r=="object"}var fp=Cf?Xt(Cf):Ty;function k3(r,s){return r===s||pc(r,s,Rc(s))}function C3(r,s,c){return c=typeof c=="function"?c:n,pc(r,s,Rc(s),c)}function S3(r){return hp(r)&&r!=+r}function T3(r){if(d_(r))throw new Ce(a);return ih(r)}function A3(r){return r===null}function I3(r){return r==null}function hp(r){return typeof r=="number"||lt(r)&&jt(r)==Ct}function Ms(r){if(!lt(r)||jt(r)!=ct)return!1;var s=Oo(r);if(s===null)return!0;var c=Ve.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&To.call(c)==Cb}var Hc=Sf?Xt(Sf):Ay;function R3(r){return dp(r)&&r>=-ge&&r<=ge}var pp=Tf?Xt(Tf):Iy;function oa(r){return typeof r=="string"||!Te(r)&&lt(r)&&jt(r)==_n}function tn(r){return typeof r=="symbol"||lt(r)&&jt(r)==Mn}var Ni=Af?Xt(Af):Ry;function O3(r){return r===n}function L3(r){return lt(r)&&Lt(r)==xe}function P3(r){return lt(r)&&jt(r)==Gn}var M3=Qo(vc),B3=Qo(function(r,s){return r<=s});function gp(r){if(!r)return[];if(Vt(r))return oa(r)?xn(r):Zt(r);if(xs&&r[xs])return pb(r[xs]());var s=Lt(r),c=s==ze?rc:s==bt?ko:Di;return c(r)}function sr(r){if(!r)return r===0?r:0;if(r=gn(r),r===ce||r===-ce){var s=r<0?-1:1;return s*te}return r===r?r:0}function Ae(r){var s=sr(r),c=s%1;return s===s?c?s-c:s:0}function vp(r){return r?Yr(Ae(r),0,pe):0}function gn(r){if(typeof r=="number")return r;if(tn(r))return he;if(ot(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ot(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Mf(r);var c=m2.test(r);return c||y2.test(r)?Y2(r.slice(2),c?2:8):v2.test(r)?he:+r}function mp(r){return jn(r,Kt(r))}function j3(r){return r?Yr(Ae(r),-ge,ge):r===0?r:0}function Ze(r){return r==null?"":en(r)}var N3=Mi(function(r,s){if(Ls(s)||Vt(s)){jn(s,$t(s),r);return}for(var c in s)Ve.call(s,c)&&Ss(r,c,s[c])}),bp=Mi(function(r,s){jn(s,Kt(s),r)}),aa=Mi(function(r,s,c,h){jn(s,Kt(s),r,h)}),D3=Mi(function(r,s,c,h){jn(s,$t(s),r,h)}),U3=nr(cc);function z3(r,s){var c=Pi(r);return s==null?c:Qf(c,s)}var H3=Me(function(r,s){r=Qe(r);var c=-1,h=s.length,v=h>2?s[2]:n;for(v&&Nt(s[0],s[1],v)&&(h=1);++c<h;)for(var y=s[c],S=Kt(y),O=-1,M=S.length;++O<M;){var H=S[O],F=r[H];(F===n||En(F,Ri[H])&&!Ve.call(r,H))&&(r[H]=y[H])}return r}),F3=Me(function(r){return r.push(n,Mh),Jt(yp,n,r)});function q3(r,s){return Rf(r,be(s,3),Bn)}function W3(r,s){return Rf(r,be(s,3),dc)}function Z3(r,s){return r==null?r:uc(r,be(s,3),Kt)}function V3(r,s){return r==null?r:th(r,be(s,3),Kt)}function K3(r,s){return r&&Bn(r,be(s,3))}function G3(r,s){return r&&dc(r,be(s,3))}function Q3(r){return r==null?[]:Ho(r,$t(r))}function Y3(r){return r==null?[]:Ho(r,Kt(r))}function Fc(r,s,c){var h=r==null?n:Jr(r,s);return h===n?c:h}function J3(r,s){return r!=null&&Nh(r,s,wy)}function qc(r,s){return r!=null&&Nh(r,s,xy)}var X3=Ih(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Ao.call(s)),r[s]=c},Zc(Gt)),ex=Ih(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Ao.call(s)),Ve.call(r,s)?r[s].push(c):r[s]=[c]},be),tx=Me(As);function $t(r){return Vt(r)?Kf(r):gc(r)}function Kt(r){return Vt(r)?Kf(r,!0):Oy(r)}function nx(r,s){var c={};return s=be(s,3),Bn(r,function(h,v,y){er(c,s(h,v,y),h)}),c}function rx(r,s){var c={};return s=be(s,3),Bn(r,function(h,v,y){er(c,v,s(h,v,y))}),c}var ix=Mi(function(r,s,c){Fo(r,s,c)}),yp=Mi(function(r,s,c,h){Fo(r,s,c,h)}),sx=nr(function(r,s){var c={};if(r==null)return c;var h=!1;s=st(s,function(y){return y=$r(y,r),h||(h=y.length>1),y}),jn(r,Ac(r),c),h&&(c=fn(c,g|m|_,Xy));for(var v=s.length;v--;)wc(c,s[v]);return c});function ox(r,s){return _p(r,ia(be(s)))}var ax=nr(function(r,s){return r==null?{}:Py(r,s)});function _p(r,s){if(r==null)return{};var c=st(Ac(r),function(h){return[h]});return s=be(s),dh(r,c,function(h,v){return s(h,v[0])})}function lx(r,s,c){s=$r(s,r);var h=-1,v=s.length;for(v||(v=1,r=n);++h<v;){var y=r==null?n:r[Nn(s[h])];y===n&&(h=v,y=c),r=ir(y)?y.call(r):y}return r}function cx(r,s,c){return r==null?r:Rs(r,s,c)}function ux(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:Rs(r,s,c,h)}var wp=Lh($t),xp=Lh(Kt);function dx(r,s,c){var h=Te(r),v=h||kr(r)||Ni(r);if(s=be(s,4),c==null){var y=r&&r.constructor;v?c=h?new y:[]:ot(r)?c=ir(y)?Pi(Oo(r)):{}:c={}}return(v?cn:Bn)(r,function(S,O,M){return s(c,S,O,M)}),c}function fx(r,s){return r==null?!0:wc(r,s)}function hx(r,s,c){return r==null?r:vh(r,s,Ec(c))}function px(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:vh(r,s,Ec(c),h)}function Di(r){return r==null?[]:nc(r,$t(r))}function gx(r){return r==null?[]:nc(r,Kt(r))}function vx(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=gn(c),c=c===c?c:0),s!==n&&(s=gn(s),s=s===s?s:0),Yr(gn(r),s,c)}function mx(r,s,c){return s=sr(s),c===n?(c=s,s=0):c=sr(c),r=gn(r),$y(r,s,c)}function bx(r,s,c){if(c&&typeof c!="boolean"&&Nt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=sr(r),s===n?(s=r,r=0):s=sr(s)),r>s){var h=r;r=s,s=h}if(c||r%1||s%1){var v=Zf();return Ot(r+v*(s-r+Q2("1e-"+((v+"").length-1))),s)}return bc(r,s)}var yx=Bi(function(r,s,c){return s=s.toLowerCase(),r+(c?$p(s):s)});function $p(r){return Wc(Ze(r).toLowerCase())}function Ep(r){return r=Ze(r),r&&r.replace(w2,cb).replace(U2,"")}function _x(r,s,c){r=Ze(r),s=en(s);var h=r.length;c=c===n?h:Yr(Ae(c),0,h);var v=c;return c-=s.length,c>=0&&r.slice(c,v)==s}function wx(r){return r=Ze(r),r&&t2.test(r)?r.replace(ef,ub):r}function xx(r){return r=Ze(r),r&&a2.test(r)?r.replace(Ul,"\\$&"):r}var $x=Bi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),Ex=Bi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),kx=Sh("toLowerCase");function Cx(r,s,c){r=Ze(r),s=Ae(s);var h=s?Ai(r):0;if(!s||h>=s)return r;var v=(s-h)/2;return Go(Bo(v),c)+r+Go(Mo(v),c)}function Sx(r,s,c){r=Ze(r),s=Ae(s);var h=s?Ai(r):0;return s&&h<s?r+Go(s-h,c):r}function Tx(r,s,c){r=Ze(r),s=Ae(s);var h=s?Ai(r):0;return s&&h<s?Go(s-h,c)+r:r}function Ax(r,s,c){return c||s==null?s=0:s&&(s=+s),Bb(Ze(r).replace(zl,""),s||0)}function Ix(r,s,c){return(c?Nt(r,s,c):s===n)?s=1:s=Ae(s),yc(Ze(r),s)}function Rx(){var r=arguments,s=Ze(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var Ox=Bi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function Lx(r,s,c){return c&&typeof c!="number"&&Nt(r,s,c)&&(s=c=n),c=c===n?pe:c>>>0,c?(r=Ze(r),r&&(typeof s=="string"||s!=null&&!Hc(s))&&(s=en(s),!s&&Ti(r))?Er(xn(r),0,c):r.split(s,c)):[]}var Px=Bi(function(r,s,c){return r+(c?" ":"")+Wc(s)});function Mx(r,s,c){return r=Ze(r),c=c==null?0:Yr(Ae(c),0,r.length),s=en(s),r.slice(c,c+s.length)==s}function Bx(r,s,c){var h=b.templateSettings;c&&Nt(r,s,c)&&(s=n),r=Ze(r),s=aa({},s,h,Ph);var v=aa({},s.imports,h.imports,Ph),y=$t(v),S=nc(v,y),O,M,H=0,F=s.interpolate||_o,K="__p += '",ie=ic((s.escape||_o).source+"|"+F.source+"|"+(F===tf?g2:_o).source+"|"+(s.evaluate||_o).source+"|$","g"),ue="//# sourceURL="+(Ve.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++W2+"]")+`
`;r.replace(ie,function(we,je,He,nn,Dt,rn){return He||(He=nn),K+=r.slice(H,rn).replace(x2,db),je&&(O=!0,K+=`' +
__e(`+je+`) +
'`),Dt&&(M=!0,K+=`';
`+Dt+`;
__p += '`),He&&(K+=`' +
((__t = (`+He+`)) == null ? '' : __t) +
'`),H=rn+we.length,we}),K+=`';
`;var _e=Ve.call(s,"variable")&&s.variable;if(!_e)K=`with (obj) {
`+K+`
}
`;else if(h2.test(_e))throw new Ce(u);K=(M?K.replace(Ym,""):K).replace(Jm,"$1").replace(Xm,"$1;"),K="function("+(_e||"obj")+`) {
`+(_e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var Re=Cp(function(){return We(y,ue+"return "+K).apply(n,S)});if(Re.source=K,zc(Re))throw Re;return Re}function jx(r){return Ze(r).toLowerCase()}function Nx(r){return Ze(r).toUpperCase()}function Dx(r,s,c){if(r=Ze(r),r&&(c||s===n))return Mf(r);if(!r||!(s=en(s)))return r;var h=xn(r),v=xn(s),y=Bf(h,v),S=jf(h,v)+1;return Er(h,y,S).join("")}function Ux(r,s,c){if(r=Ze(r),r&&(c||s===n))return r.slice(0,Df(r)+1);if(!r||!(s=en(s)))return r;var h=xn(r),v=jf(h,xn(s))+1;return Er(h,0,v).join("")}function zx(r,s,c){if(r=Ze(r),r&&(c||s===n))return r.replace(zl,"");if(!r||!(s=en(s)))return r;var h=xn(r),v=Bf(h,xn(s));return Er(h,v).join("")}function Hx(r,s){var c=W,h=J;if(ot(s)){var v="separator"in s?s.separator:v;c="length"in s?Ae(s.length):c,h="omission"in s?en(s.omission):h}r=Ze(r);var y=r.length;if(Ti(r)){var S=xn(r);y=S.length}if(c>=y)return r;var O=c-Ai(h);if(O<1)return h;var M=S?Er(S,0,O).join(""):r.slice(0,O);if(v===n)return M+h;if(S&&(O+=M.length-O),Hc(v)){if(r.slice(O).search(v)){var H,F=M;for(v.global||(v=ic(v.source,Ze(nf.exec(v))+"g")),v.lastIndex=0;H=v.exec(F);)var K=H.index;M=M.slice(0,K===n?O:K)}}else if(r.indexOf(en(v),O)!=O){var ie=M.lastIndexOf(v);ie>-1&&(M=M.slice(0,ie))}return M+h}function Fx(r){return r=Ze(r),r&&e2.test(r)?r.replace(Xd,bb):r}var qx=Bi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Wc=Sh("toUpperCase");function kp(r,s,c){return r=Ze(r),s=c?n:s,s===n?hb(r)?wb(r):ib(r):r.match(s)||[]}var Cp=Me(function(r,s){try{return Jt(r,n,s)}catch(c){return zc(c)?c:new Ce(c)}}),Wx=nr(function(r,s){return cn(s,function(c){c=Nn(c),er(r,c,Dc(r[c],r))}),r});function Zx(r){var s=r==null?0:r.length,c=be();return r=s?st(r,function(h){if(typeof h[1]!="function")throw new un(l);return[c(h[0]),h[1]]}):[],Me(function(h){for(var v=-1;++v<s;){var y=r[v];if(Jt(y[0],this,h))return Jt(y[1],this,h)}})}function Vx(r){return by(fn(r,g))}function Zc(r){return function(){return r}}function Kx(r,s){return r==null||r!==r?s:r}var Gx=Ah(),Qx=Ah(!0);function Gt(r){return r}function Vc(r){return sh(typeof r=="function"?r:fn(r,g))}function Yx(r){return ah(fn(r,g))}function Jx(r,s){return lh(r,fn(s,g))}var Xx=Me(function(r,s){return function(c){return As(c,r,s)}}),e4=Me(function(r,s){return function(c){return As(r,c,s)}});function Kc(r,s,c){var h=$t(s),v=Ho(s,h);c==null&&!(ot(s)&&(v.length||!h.length))&&(c=s,s=r,r=this,v=Ho(s,$t(s)));var y=!(ot(c)&&"chain"in c)||!!c.chain,S=ir(r);return cn(v,function(O){var M=s[O];r[O]=M,S&&(r.prototype[O]=function(){var H=this.__chain__;if(y||H){var F=r(this.__wrapped__),K=F.__actions__=Zt(this.__actions__);return K.push({func:M,args:arguments,thisArg:r}),F.__chain__=H,F}return M.apply(r,br([this.value()],arguments))})}),r}function t4(){return St._===this&&(St._=Sb),this}function Gc(){}function n4(r){return r=Ae(r),Me(function(s){return ch(s,r)})}var r4=Cc(st),i4=Cc(If),s4=Cc(Yl);function Sp(r){return Lc(r)?Jl(Nn(r)):My(r)}function o4(r){return function(s){return r==null?n:Jr(r,s)}}var a4=Rh(),l4=Rh(!0);function Qc(){return[]}function Yc(){return!1}function c4(){return{}}function u4(){return""}function d4(){return!0}function f4(r,s){if(r=Ae(r),r<1||r>ge)return[];var c=pe,h=Ot(r,pe);s=be(s),r-=pe;for(var v=tc(h,s);++c<r;)s(c);return v}function h4(r){return Te(r)?st(r,Nn):tn(r)?[r]:Zt(Vh(Ze(r)))}function p4(r){var s=++kb;return Ze(r)+s}var g4=Ko(function(r,s){return r+s},0),v4=Sc("ceil"),m4=Ko(function(r,s){return r/s},1),b4=Sc("floor");function y4(r){return r&&r.length?zo(r,Gt,fc):n}function _4(r,s){return r&&r.length?zo(r,be(s,2),fc):n}function w4(r){return Lf(r,Gt)}function x4(r,s){return Lf(r,be(s,2))}function $4(r){return r&&r.length?zo(r,Gt,vc):n}function E4(r,s){return r&&r.length?zo(r,be(s,2),vc):n}var k4=Ko(function(r,s){return r*s},1),C4=Sc("round"),S4=Ko(function(r,s){return r-s},0);function T4(r){return r&&r.length?ec(r,Gt):0}function A4(r,s){return r&&r.length?ec(r,be(s,2)):0}return b.after=Yw,b.ary=ip,b.assign=N3,b.assignIn=bp,b.assignInWith=aa,b.assignWith=D3,b.at=U3,b.before=sp,b.bind=Dc,b.bindAll=Wx,b.bindKey=op,b.castArray=c3,b.chain=tp,b.chunk=b_,b.compact=y_,b.concat=__,b.cond=Zx,b.conforms=Vx,b.constant=Zc,b.countBy=Tw,b.create=z3,b.curry=ap,b.curryRight=lp,b.debounce=cp,b.defaults=H3,b.defaultsDeep=F3,b.defer=Jw,b.delay=Xw,b.difference=w_,b.differenceBy=x_,b.differenceWith=$_,b.drop=E_,b.dropRight=k_,b.dropRightWhile=C_,b.dropWhile=S_,b.fill=T_,b.filter=Iw,b.flatMap=Lw,b.flatMapDeep=Pw,b.flatMapDepth=Mw,b.flatten=Yh,b.flattenDeep=A_,b.flattenDepth=I_,b.flip=e3,b.flow=Gx,b.flowRight=Qx,b.fromPairs=R_,b.functions=Q3,b.functionsIn=Y3,b.groupBy=Bw,b.initial=L_,b.intersection=P_,b.intersectionBy=M_,b.intersectionWith=B_,b.invert=X3,b.invertBy=ex,b.invokeMap=Nw,b.iteratee=Vc,b.keyBy=Dw,b.keys=$t,b.keysIn=Kt,b.map=ta,b.mapKeys=nx,b.mapValues=rx,b.matches=Yx,b.matchesProperty=Jx,b.memoize=ra,b.merge=ix,b.mergeWith=yp,b.method=Xx,b.methodOf=e4,b.mixin=Kc,b.negate=ia,b.nthArg=n4,b.omit=sx,b.omitBy=ox,b.once=t3,b.orderBy=Uw,b.over=r4,b.overArgs=n3,b.overEvery=i4,b.overSome=s4,b.partial=Uc,b.partialRight=up,b.partition=zw,b.pick=ax,b.pickBy=_p,b.property=Sp,b.propertyOf=o4,b.pull=U_,b.pullAll=Xh,b.pullAllBy=z_,b.pullAllWith=H_,b.pullAt=F_,b.range=a4,b.rangeRight=l4,b.rearg=r3,b.reject=qw,b.remove=q_,b.rest=i3,b.reverse=jc,b.sampleSize=Zw,b.set=cx,b.setWith=ux,b.shuffle=Vw,b.slice=W_,b.sortBy=Qw,b.sortedUniq=J_,b.sortedUniqBy=X_,b.split=Lx,b.spread=s3,b.tail=ew,b.take=tw,b.takeRight=nw,b.takeRightWhile=rw,b.takeWhile=iw,b.tap=yw,b.throttle=o3,b.thru=ea,b.toArray=gp,b.toPairs=wp,b.toPairsIn=xp,b.toPath=h4,b.toPlainObject=mp,b.transform=dx,b.unary=a3,b.union=sw,b.unionBy=ow,b.unionWith=aw,b.uniq=lw,b.uniqBy=cw,b.uniqWith=uw,b.unset=fx,b.unzip=Nc,b.unzipWith=ep,b.update=hx,b.updateWith=px,b.values=Di,b.valuesIn=gx,b.without=dw,b.words=kp,b.wrap=l3,b.xor=fw,b.xorBy=hw,b.xorWith=pw,b.zip=gw,b.zipObject=vw,b.zipObjectDeep=mw,b.zipWith=bw,b.entries=wp,b.entriesIn=xp,b.extend=bp,b.extendWith=aa,Kc(b,b),b.add=g4,b.attempt=Cp,b.camelCase=yx,b.capitalize=$p,b.ceil=v4,b.clamp=vx,b.clone=u3,b.cloneDeep=f3,b.cloneDeepWith=h3,b.cloneWith=d3,b.conformsTo=p3,b.deburr=Ep,b.defaultTo=Kx,b.divide=m4,b.endsWith=_x,b.eq=En,b.escape=wx,b.escapeRegExp=xx,b.every=Aw,b.find=Rw,b.findIndex=Gh,b.findKey=q3,b.findLast=Ow,b.findLastIndex=Qh,b.findLastKey=W3,b.floor=b4,b.forEach=np,b.forEachRight=rp,b.forIn=Z3,b.forInRight=V3,b.forOwn=K3,b.forOwnRight=G3,b.get=Fc,b.gt=g3,b.gte=v3,b.has=J3,b.hasIn=qc,b.head=Jh,b.identity=Gt,b.includes=jw,b.indexOf=O_,b.inRange=mx,b.invoke=tx,b.isArguments=ti,b.isArray=Te,b.isArrayBuffer=m3,b.isArrayLike=Vt,b.isArrayLikeObject=ut,b.isBoolean=b3,b.isBuffer=kr,b.isDate=y3,b.isElement=_3,b.isEmpty=w3,b.isEqual=x3,b.isEqualWith=$3,b.isError=zc,b.isFinite=E3,b.isFunction=ir,b.isInteger=dp,b.isLength=sa,b.isMap=fp,b.isMatch=k3,b.isMatchWith=C3,b.isNaN=S3,b.isNative=T3,b.isNil=I3,b.isNull=A3,b.isNumber=hp,b.isObject=ot,b.isObjectLike=lt,b.isPlainObject=Ms,b.isRegExp=Hc,b.isSafeInteger=R3,b.isSet=pp,b.isString=oa,b.isSymbol=tn,b.isTypedArray=Ni,b.isUndefined=O3,b.isWeakMap=L3,b.isWeakSet=P3,b.join=j_,b.kebabCase=$x,b.last=pn,b.lastIndexOf=N_,b.lowerCase=Ex,b.lowerFirst=kx,b.lt=M3,b.lte=B3,b.max=y4,b.maxBy=_4,b.mean=w4,b.meanBy=x4,b.min=$4,b.minBy=E4,b.stubArray=Qc,b.stubFalse=Yc,b.stubObject=c4,b.stubString=u4,b.stubTrue=d4,b.multiply=k4,b.nth=D_,b.noConflict=t4,b.noop=Gc,b.now=na,b.pad=Cx,b.padEnd=Sx,b.padStart=Tx,b.parseInt=Ax,b.random=bx,b.reduce=Hw,b.reduceRight=Fw,b.repeat=Ix,b.replace=Rx,b.result=lx,b.round=C4,b.runInContext=P,b.sample=Ww,b.size=Kw,b.snakeCase=Ox,b.some=Gw,b.sortedIndex=Z_,b.sortedIndexBy=V_,b.sortedIndexOf=K_,b.sortedLastIndex=G_,b.sortedLastIndexBy=Q_,b.sortedLastIndexOf=Y_,b.startCase=Px,b.startsWith=Mx,b.subtract=S4,b.sum=T4,b.sumBy=A4,b.template=Bx,b.times=f4,b.toFinite=sr,b.toInteger=Ae,b.toLength=vp,b.toLower=jx,b.toNumber=gn,b.toSafeInteger=j3,b.toString=Ze,b.toUpper=Nx,b.trim=Dx,b.trimEnd=Ux,b.trimStart=zx,b.truncate=Hx,b.unescape=Fx,b.uniqueId=p4,b.upperCase=qx,b.upperFirst=Wc,b.each=np,b.eachRight=rp,b.first=Jh,Kc(b,function(){var r={};return Bn(b,function(s,c){Ve.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),cn(["drop","take"],function(r,s){Ue.prototype[r]=function(c){c=c===n?1:_t(Ae(c),0);var h=this.__filtered__&&!s?new Ue(this):this.clone();return h.__filtered__?h.__takeCount__=Ot(c,h.__takeCount__):h.__views__.push({size:Ot(c,pe),type:r+(h.__dir__<0?"Right":"")}),h},Ue.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),cn(["filter","map","takeWhile"],function(r,s){var c=s+1,h=c==re||c==ee;Ue.prototype[r]=function(v){var y=this.clone();return y.__iteratees__.push({iteratee:be(v,3),type:c}),y.__filtered__=y.__filtered__||h,y}}),cn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Ue.prototype[r]=function(){return this[c](1).value()[0]}}),cn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Ue.prototype[r]=function(){return this.__filtered__?new Ue(this):this[c](1)}}),Ue.prototype.compact=function(){return this.filter(Gt)},Ue.prototype.find=function(r){return this.filter(r).head()},Ue.prototype.findLast=function(r){return this.reverse().find(r)},Ue.prototype.invokeMap=Me(function(r,s){return typeof r=="function"?new Ue(this):this.map(function(c){return As(c,r,s)})}),Ue.prototype.reject=function(r){return this.filter(ia(be(r)))},Ue.prototype.slice=function(r,s){r=Ae(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Ue(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Ae(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Ue.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ue.prototype.toArray=function(){return this.take(pe)},Bn(Ue.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),v=b[h?"take"+(s=="last"?"Right":""):s],y=h||/^find/.test(s);v&&(b.prototype[s]=function(){var S=this.__wrapped__,O=h?[1]:arguments,M=S instanceof Ue,H=O[0],F=M||Te(S),K=function(je){var He=v.apply(b,br([je],O));return h&&ie?He[0]:He};F&&c&&typeof H=="function"&&H.length!=1&&(M=F=!1);var ie=this.__chain__,ue=!!this.__actions__.length,_e=y&&!ie,Re=M&&!ue;if(!y&&F){S=Re?S:new Ue(this);var we=r.apply(S,O);return we.__actions__.push({func:ea,args:[K],thisArg:n}),new dn(we,ie)}return _e&&Re?r.apply(this,O):(we=this.thru(K),_e?h?we.value()[0]:we.value():we)})}),cn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Co[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",h=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var v=arguments;if(h&&!this.__chain__){var y=this.value();return s.apply(Te(y)?y:[],v)}return this[c](function(S){return s.apply(Te(S)?S:[],v)})}}),Bn(Ue.prototype,function(r,s){var c=b[s];if(c){var h=c.name+"";Ve.call(Li,h)||(Li[h]=[]),Li[h].push({name:s,func:c})}}),Li[Vo(n,C).name]=[{name:"wrapper",func:n}],Ue.prototype.clone=Fb,Ue.prototype.reverse=qb,Ue.prototype.value=Wb,b.prototype.at=_w,b.prototype.chain=ww,b.prototype.commit=xw,b.prototype.next=$w,b.prototype.plant=kw,b.prototype.reverse=Cw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=Sw,b.prototype.first=b.prototype.head,xs&&(b.prototype[xs]=Ew),b},Ii=xb();Vr?((Vr.exports=Ii)._=Ii,Vl._=Ii):St._=Ii}).call(xt)})(Ba,Ba.exports);var OE=Ba.exports;const LE=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],sv=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.h3z.jp","wss://nostr.holybea.com","wss://yabu.me"],PE=[...sv,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],CH=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],ME=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},fs=()=>({id:ME(),width:"medium"}),ov=e=>({...fs(),columnType:"Following",...e}),av=e=>({...fs(),columnType:"Notification",...e}),BE=e=>({...fs(),columnType:"Relays",...e}),lv=()=>BE({name:"日本語",relayUrls:sv,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),cv=e=>({...fs(),columnType:"Posts",...e}),uv=e=>({...fs(),columnType:"Reactions",...e}),_d=e=>({...fs(),columnType:"Search",...e});var qe;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(qe||(qe={}));var Su;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Su||(Su={}));const se=qe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Or=e=>{switch(typeof e){case"undefined":return se.undefined;case"string":return se.string;case"number":return isNaN(e)?se.nan:se.number;case"boolean":return se.boolean;case"function":return se.function;case"bigint":return se.bigint;case"symbol":return se.symbol;case"object":return Array.isArray(e)?se.array:e===null?se.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?se.promise:typeof Map<"u"&&e instanceof Map?se.map:typeof Set<"u"&&e instanceof Set?se.set:typeof Date<"u"&&e instanceof Date?se.date:se.object;default:return se.unknown}},X=qe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),jE=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class In extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,qe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}In.create=e=>new In(e);const Vs=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===se.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,qe.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${qe.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${qe.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${qe.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:qe.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,qe.assertNever(e)}return{message:n}};let dv=Vs;function NE(e){dv=e}function ja(){return dv}const Na=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},DE=[];function le(e,t){const n=Na({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,ja(),Vs].filter(i=>!!i)});e.common.issues.push(n)}class Mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Se;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Mt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Se;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Se=Object.freeze({status:"aborted"}),fv=e=>({status:"dirty",value:e}),qt=e=>({status:"valid",value:e}),Tu=e=>e.status==="aborted",Au=e=>e.status==="dirty",Da=e=>e.status==="valid",Ua=e=>typeof Promise<"u"&&e instanceof Promise;var me;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(me||(me={}));class Fn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const r0=(e,t)=>{if(Da(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new In(e.common.issues);return this._error=n,this._error}}};function Ie(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Be{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Or(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Or(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Mt,ctx:{common:t.parent.common,data:t.data,parsedType:Or(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Ua(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Or(t)},a=this._parseSync({data:t,path:o.path,parent:o});return r0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Or(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Ua(o)?o:Promise.resolve(o));return r0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new On({schema:this,typeName:$e.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return ur.create(this,this._def)}nullable(){return mi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Rn.create(this,this._def)}promise(){return Xi.create(this,this._def)}or(t){return Ys.create([this,t],this._def)}and(t){return Js.create(this,t,this._def)}transform(t){return new On({...Ie(this._def),schema:this,typeName:$e.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new ro({...Ie(this._def),innerType:this,defaultValue:n,typeName:$e.ZodDefault})}brand(){return new pv({typeName:$e.ZodBranded,type:this,...Ie(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new qa({...Ie(this._def),innerType:this,catchValue:n,typeName:$e.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return po.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const UE=/^c[^\s-]{8,}$/i,zE=/^[a-z][a-z0-9]*$/,HE=/[0-9A-HJKMNP-TV-Z]{26}/,FE=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,qE=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,WE=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,ZE=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,VE=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,KE=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function GE(e,t){return!!((t==="v4"||!t)&&ZE.test(e)||(t==="v6"||!t)&&VE.test(e))}class An extends Be{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...me.errToObj(i)}),this.nonempty=t=>this.min(1,me.errToObj(t)),this.trim=()=>new An({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new An({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new An({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==se.string){const a=this._getOrReturnCtx(t);return le(a,{code:X.invalid_type,expected:se.string,received:a.parsedType}),Se}const i=new Mt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?le(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&le(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")qE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")WE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")FE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")UE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")zE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")HE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),le(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),le(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),le(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),le(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?KE(a).test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?GE(t.data,a.version)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):qe.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new An({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...me.errToObj(t)})}url(t){return this._addCheck({kind:"url",...me.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...me.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...me.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...me.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...me.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...me.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...me.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...me.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...me.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...me.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...me.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...me.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...me.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...me.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...me.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}An.create=e=>{var t;return new An({checks:[],typeName:$e.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ie(e)})};function QE(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Ur extends Be{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==se.number){const a=this._getOrReturnCtx(t);return le(a,{code:X.invalid_type,expected:se.number,received:a.parsedType}),Se}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="int"?qe.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),le(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?QE(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),le(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),le(i,{code:X.not_finite,message:a.message}),o.dirty()):qe.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new Ur({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new Ur({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:me.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:me.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:me.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:me.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&qe.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Ur.create=e=>new Ur({checks:[],typeName:$e.ZodNumber,coerce:e?.coerce||!1,...Ie(e)});class zr extends Be{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==se.bigint){const a=this._getOrReturnCtx(t);return le(a,{code:X.invalid_type,expected:se.bigint,received:a.parsedType}),Se}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),le(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):qe.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new zr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new zr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}zr.create=e=>{var t;return new zr({checks:[],typeName:$e.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ie(e)})};class Ks extends Be{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==se.boolean){const i=this._getOrReturnCtx(t);return le(i,{code:X.invalid_type,expected:se.boolean,received:i.parsedType}),Se}return qt(t.data)}}Ks.create=e=>new Ks({typeName:$e.ZodBoolean,coerce:e?.coerce||!1,...Ie(e)});class gi extends Be{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==se.date){const a=this._getOrReturnCtx(t);return le(a,{code:X.invalid_type,expected:se.date,received:a.parsedType}),Se}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return le(a,{code:X.invalid_date}),Se}const i=new Mt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):qe.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new gi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:me.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:me.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}gi.create=e=>new gi({checks:[],coerce:e?.coerce||!1,typeName:$e.ZodDate,...Ie(e)});class za extends Be{_parse(t){if(this._getType(t)!==se.symbol){const i=this._getOrReturnCtx(t);return le(i,{code:X.invalid_type,expected:se.symbol,received:i.parsedType}),Se}return qt(t.data)}}za.create=e=>new za({typeName:$e.ZodSymbol,...Ie(e)});class Gs extends Be{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return le(i,{code:X.invalid_type,expected:se.undefined,received:i.parsedType}),Se}return qt(t.data)}}Gs.create=e=>new Gs({typeName:$e.ZodUndefined,...Ie(e)});class Qs extends Be{_parse(t){if(this._getType(t)!==se.null){const i=this._getOrReturnCtx(t);return le(i,{code:X.invalid_type,expected:se.null,received:i.parsedType}),Se}return qt(t.data)}}Qs.create=e=>new Qs({typeName:$e.ZodNull,...Ie(e)});class Ji extends Be{constructor(){super(...arguments),this._any=!0}_parse(t){return qt(t.data)}}Ji.create=e=>new Ji({typeName:$e.ZodAny,...Ie(e)});class pi extends Be{constructor(){super(...arguments),this._unknown=!0}_parse(t){return qt(t.data)}}pi.create=e=>new pi({typeName:$e.ZodUnknown,...Ie(e)});class fr extends Be{_parse(t){const n=this._getOrReturnCtx(t);return le(n,{code:X.invalid_type,expected:se.never,received:n.parsedType}),Se}}fr.create=e=>new fr({typeName:$e.ZodNever,...Ie(e)});class Ha extends Be{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return le(i,{code:X.invalid_type,expected:se.void,received:i.parsedType}),Se}return qt(t.data)}}Ha.create=e=>new Ha({typeName:$e.ZodVoid,...Ie(e)});class Rn extends Be{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==se.array)return le(n,{code:X.invalid_type,expected:se.array,received:n.parsedType}),Se;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(le(n,{code:l?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(le(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(le(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Fn(n,l,n.path,u)))).then(l=>Mt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Fn(n,l,n.path,u)));return Mt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Rn({...this._def,minLength:{value:t,message:me.toString(n)}})}max(t,n){return new Rn({...this._def,maxLength:{value:t,message:me.toString(n)}})}length(t,n){return new Rn({...this._def,exactLength:{value:t,message:me.toString(n)}})}nonempty(t){return this.min(1,t)}}Rn.create=(e,t)=>new Rn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:$e.ZodArray,...Ie(t)});function Fi(e){if(e instanceof at){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=ur.create(Fi(i))}return new at({...e._def,shape:()=>t})}else return e instanceof Rn?new Rn({...e._def,type:Fi(e.element)}):e instanceof ur?ur.create(Fi(e.unwrap())):e instanceof mi?mi.create(Fi(e.unwrap())):e instanceof qn?qn.create(e.items.map(t=>Fi(t))):e}class at extends Be{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=qe.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==se.object){const f=this._getOrReturnCtx(t);return le(f,{code:X.invalid_type,expected:se.object,received:f.parsedType}),Se}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof fr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const p=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:p._parse(new Fn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof fr){const f=this._def.unknownKeys;if(f==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(f==="strict")u.length>0&&(le(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:f._parse(new Fn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const p of d){const g=await p.key;f.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return f}).then(f=>Mt.mergeObjectSync(i,f)):Mt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return me.errToObj,new at({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=me.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new at({...this._def,unknownKeys:"strip"})}passthrough(){return new at({...this._def,unknownKeys:"passthrough"})}extend(t){return new at({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new at({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:$e.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new at({...this._def,catchall:t})}pick(t){const n={};return qe.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new at({...this._def,shape:()=>n})}omit(t){const n={};return qe.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new at({...this._def,shape:()=>n})}deepPartial(){return Fi(this)}partial(t){const n={};return qe.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new at({...this._def,shape:()=>n})}required(t){const n={};return qe.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof ur;)a=a._def.innerType;n[i]=a}}),new at({...this._def,shape:()=>n})}keyof(){return hv(qe.objectKeys(this.shape))}}at.create=(e,t)=>new at({shape:()=>e,unknownKeys:"strip",catchall:fr.create(),typeName:$e.ZodObject,...Ie(t)});at.strictCreate=(e,t)=>new at({shape:()=>e,unknownKeys:"strict",catchall:fr.create(),typeName:$e.ZodObject,...Ie(t)});at.lazycreate=(e,t)=>new at({shape:e,unknownKeys:"strip",catchall:fr.create(),typeName:$e.ZodObject,...Ie(t)});class Ys extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new In(u.ctx.common.issues));return le(n,{code:X.invalid_union,unionErrors:l}),Se}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:f});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new In(d));return le(n,{code:X.invalid_union,unionErrors:u}),Se}}get options(){return this._def.options}}Ys.create=(e,t)=>new Ys({options:e,typeName:$e.ZodUnion,...Ie(t)});const xa=e=>e instanceof eo?xa(e.schema):e instanceof On?xa(e.innerType()):e instanceof to?[e.value]:e instanceof Hr?e.options:e instanceof no?Object.keys(e.enum):e instanceof ro?xa(e._def.innerType):e instanceof Gs?[void 0]:e instanceof Qs?[null]:null;class $l extends Be{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.object)return le(n,{code:X.invalid_type,expected:se.object,received:n.parsedType}),Se;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(le(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Se)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=xa(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new $l({typeName:$e.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Ie(i)})}}function Iu(e,t){const n=Or(e),i=Or(t);if(e===t)return{valid:!0,data:e};if(n===se.object&&i===se.object){const o=qe.objectKeys(t),a=qe.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Iu(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===se.array&&i===se.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Iu(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===se.date&&i===se.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Js extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(Tu(a)||Tu(l))return Se;const u=Iu(a.value,l.value);return u.valid?((Au(a)||Au(l))&&n.dirty(),{status:n.value,value:u.data}):(le(i,{code:X.invalid_intersection_types}),Se)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Js.create=(e,t,n)=>new Js({left:e,right:t,typeName:$e.ZodIntersection,...Ie(n)});class qn extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.array)return le(i,{code:X.invalid_type,expected:se.array,received:i.parsedType}),Se;if(i.data.length<this._def.items.length)return le(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Se;!this._def.rest&&i.data.length>this._def.items.length&&(le(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Fn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Mt.mergeArray(n,l)):Mt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new qn({...this._def,rest:t})}}qn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new qn({items:e,typeName:$e.ZodTuple,rest:null,...Ie(t)})};class Xs extends Be{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.object)return le(i,{code:X.invalid_type,expected:se.object,received:i.parsedType}),Se;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Fn(i,u,i.path,u)),value:l._parse(new Fn(i,i.data[u],i.path,u))});return i.common.async?Mt.mergeObjectAsync(n,o):Mt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Be?new Xs({keyType:t,valueType:n,typeName:$e.ZodRecord,...Ie(i)}):new Xs({keyType:An.create(),valueType:t,typeName:$e.ZodRecord,...Ie(n)})}}class Fa extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.map)return le(i,{code:X.invalid_type,expected:se.map,received:i.parsedType}),Se;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Fn(i,u,i.path,[f,"key"])),value:a._parse(new Fn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,p=await d.value;if(f.status==="aborted"||p.status==="aborted")return Se;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,p=d.value;if(f.status==="aborted"||p.status==="aborted")return Se;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}}}}Fa.create=(e,t,n)=>new Fa({valueType:t,keyType:e,typeName:$e.ZodMap,...Ie(n)});class vi extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.set)return le(i,{code:X.invalid_type,expected:se.set,received:i.parsedType}),Se;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(le(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(le(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const p of d){if(p.status==="aborted")return Se;p.status==="dirty"&&n.dirty(),f.add(p.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Fn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new vi({...this._def,minSize:{value:t,message:me.toString(n)}})}max(t,n){return new vi({...this._def,maxSize:{value:t,message:me.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}vi.create=(e,t)=>new vi({valueType:e,minSize:null,maxSize:null,typeName:$e.ZodSet,...Ie(t)});class Wi extends Be{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.function)return le(n,{code:X.invalid_type,expected:se.function,received:n.parsedType}),Se;function i(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ja(),Vs].filter(f=>!!f),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ja(),Vs].filter(f=>!!f),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof Xi?qt(async(...u)=>{const d=new In([]),f=await this._def.args.parseAsync(u,a).catch(m=>{throw d.addIssue(i(u,m)),d}),p=await l(...f);return await this._def.returns._def.type.parseAsync(p,a).catch(m=>{throw d.addIssue(o(p,m)),d})}):qt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new In([i(u,d.error)]);const f=l(...d.data),p=this._def.returns.safeParse(f,a);if(!p.success)throw new In([o(f,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Wi({...this._def,args:qn.create(t).rest(pi.create())})}returns(t){return new Wi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Wi({args:t||qn.create([]).rest(pi.create()),returns:n||pi.create(),typeName:$e.ZodFunction,...Ie(i)})}}class eo extends Be{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}eo.create=(e,t)=>new eo({getter:e,typeName:$e.ZodLazy,...Ie(t)});class to extends Be{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return le(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Se}return{status:"valid",value:t.data}}get value(){return this._def.value}}to.create=(e,t)=>new to({value:e,typeName:$e.ZodLiteral,...Ie(t)});function hv(e,t){return new Hr({values:e,typeName:$e.ZodEnum,...Ie(t)})}class Hr extends Be{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return le(n,{expected:qe.joinValues(i),received:n.parsedType,code:X.invalid_type}),Se}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return le(n,{received:n.data,code:X.invalid_enum_value,options:i}),Se}return qt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Hr.create(t)}exclude(t){return Hr.create(this.options.filter(n=>!t.includes(n)))}}Hr.create=hv;class no extends Be{_parse(t){const n=qe.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==se.string&&i.parsedType!==se.number){const o=qe.objectValues(n);return le(i,{expected:qe.joinValues(o),received:i.parsedType,code:X.invalid_type}),Se}if(n.indexOf(t.data)===-1){const o=qe.objectValues(n);return le(i,{received:i.data,code:X.invalid_enum_value,options:o}),Se}return qt(t.data)}get enum(){return this._def.values}}no.create=(e,t)=>new no({values:e,typeName:$e.ZodNativeEnum,...Ie(t)});class Xi extends Be{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.promise&&n.common.async===!1)return le(n,{code:X.invalid_type,expected:se.promise,received:n.parsedType}),Se;const i=n.parsedType===se.promise?n.data:Promise.resolve(n.data);return qt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Xi.create=(e,t)=>new Xi({type:e,typeName:$e.ZodPromise,...Ie(t)});class On extends Be{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===$e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{le(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Se:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Se:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Da(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Da(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);qe.assertNever(o)}}On.create=(e,t,n)=>new On({schema:e,typeName:$e.ZodEffects,effect:t,...Ie(n)});On.createWithPreprocess=(e,t,n)=>new On({schema:t,effect:{type:"preprocess",transform:e},typeName:$e.ZodEffects,...Ie(n)});class ur extends Be{_parse(t){return this._getType(t)===se.undefined?qt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}ur.create=(e,t)=>new ur({innerType:e,typeName:$e.ZodOptional,...Ie(t)});class mi extends Be{_parse(t){return this._getType(t)===se.null?qt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}mi.create=(e,t)=>new mi({innerType:e,typeName:$e.ZodNullable,...Ie(t)});class ro extends Be{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===se.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ro.create=(e,t)=>new ro({innerType:e,typeName:$e.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ie(t)});class qa extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ua(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new In(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new In(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}qa.create=(e,t)=>new qa({innerType:e,typeName:$e.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ie(t)});class Wa extends Be{_parse(t){if(this._getType(t)!==se.nan){const i=this._getOrReturnCtx(t);return le(i,{code:X.invalid_type,expected:se.nan,received:i.parsedType}),Se}return{status:"valid",value:t.data}}}Wa.create=e=>new Wa({typeName:$e.ZodNaN,...Ie(e)});const YE=Symbol("zod_brand");class pv extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class po extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Se:a.status==="dirty"?(n.dirty(),fv(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Se:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new po({in:t,out:n,typeName:$e.ZodPipeline})}}const gv=(e,t={},n)=>e?Ji.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):Ji.create(),JE={object:at.lazycreate};var $e;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})($e||($e={}));const XE=(e,t={message:`Input not instance of ${e.name}`})=>gv(n=>n instanceof e,t),vv=An.create,mv=Ur.create,ek=Wa.create,tk=zr.create,bv=Ks.create,nk=gi.create,rk=za.create,ik=Gs.create,sk=Qs.create,ok=Ji.create,ak=pi.create,lk=fr.create,ck=Ha.create,uk=Rn.create,dk=at.create,fk=at.strictCreate,hk=Ys.create,pk=$l.create,gk=Js.create,vk=qn.create,mk=Xs.create,bk=Fa.create,yk=vi.create,_k=Wi.create,wk=eo.create,xk=to.create,$k=Hr.create,Ek=no.create,kk=Xi.create,i0=On.create,Ck=ur.create,Sk=mi.create,Tk=On.createWithPreprocess,Ak=po.create,Ik=()=>vv().optional(),Rk=()=>mv().optional(),Ok=()=>bv().optional(),Lk={string:e=>An.create({...e,coerce:!0}),number:e=>Ur.create({...e,coerce:!0}),boolean:e=>Ks.create({...e,coerce:!0}),bigint:e=>zr.create({...e,coerce:!0}),date:e=>gi.create({...e,coerce:!0})},Pk=Se;var gt=Object.freeze({__proto__:null,defaultErrorMap:Vs,setErrorMap:NE,getErrorMap:ja,makeIssue:Na,EMPTY_PATH:DE,addIssueToContext:le,ParseStatus:Mt,INVALID:Se,DIRTY:fv,OK:qt,isAborted:Tu,isDirty:Au,isValid:Da,isAsync:Ua,get util(){return qe},get objectUtil(){return Su},ZodParsedType:se,getParsedType:Or,ZodType:Be,ZodString:An,ZodNumber:Ur,ZodBigInt:zr,ZodBoolean:Ks,ZodDate:gi,ZodSymbol:za,ZodUndefined:Gs,ZodNull:Qs,ZodAny:Ji,ZodUnknown:pi,ZodNever:fr,ZodVoid:Ha,ZodArray:Rn,ZodObject:at,ZodUnion:Ys,ZodDiscriminatedUnion:$l,ZodIntersection:Js,ZodTuple:qn,ZodRecord:Xs,ZodMap:Fa,ZodSet:vi,ZodFunction:Wi,ZodLazy:eo,ZodLiteral:to,ZodEnum:Hr,ZodNativeEnum:no,ZodPromise:Xi,ZodEffects:On,ZodTransformer:On,ZodOptional:ur,ZodNullable:mi,ZodDefault:ro,ZodCatch:qa,ZodNaN:Wa,BRAND:YE,ZodBranded:pv,ZodPipeline:po,custom:gv,Schema:Be,ZodSchema:Be,late:JE,get ZodFirstPartyTypeKind(){return $e},coerce:Lk,any:ok,array:uk,bigint:tk,boolean:bv,date:nk,discriminatedUnion:pk,effect:i0,enum:$k,function:_k,instanceof:XE,intersection:gk,lazy:wk,literal:xk,map:bk,nan:ek,nativeEnum:Ek,never:lk,null:sk,nullable:Sk,number:mv,object:dk,oboolean:Ok,onumber:Rk,optional:Ck,ostring:Ik,pipeline:Ak,preprocess:Tk,promise:kk,record:mk,set:yk,strictObject:fk,string:vv,symbol:rk,transformer:i0,tuple:vk,undefined:ik,union:hk,unknown:ak,void:ck,NEVER:Pk,ZodIssueCode:X,quotelessJson:jE,ZodError:In});const Mk=/^[0-9a-f]{64}$/,io=e=>{const t=typeof e=="string"&&e.length===64&&Mk.test(e);return t||console.warn("invalid id is ignored: ",e),t},Bk=e=>t=>e.safeParse(t).success,jk=gt.tuple([gt.literal("emoji"),gt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),gt.string().url()]);class Nk{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&io(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&io(n))}emojiTags(){return this.tags.filter(Bk(jk))}taggedPubkeys(){return Pr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return;const[,,i]=n;return i}}class wd extends Nk{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const Dk=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,s0=/^:(\w+):$/,Uk=e=>{if(e.isLikeOrDislike())return{type:"LikeDislike",content:e.content};if(e.isEmoji())return{type:"Emoji",content:e.content};if(e.isCustomEmoji()){const t=e.getShortcode(),n=e.getUrl();if(t!=null&&n!=null)return{type:"CustomEmoji",content:e.content,shortcode:t,url:n}}return{type:"Unknown",content:e.content}};class zk extends wd{constructor(t){if(t.kind!==vt.Reaction)throw new TypeError("kind should be 7");super(t)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return Dk.test(this.content)}isCustomEmoji(){return s0.test(this.content)}getShortcode(){return this.content.match(s0)?.[1]}getUrl(){const t=this.getShortcode();if(t!=null)return this.getEmojiUrl(t)}toReactionTypes(){return Uk(this)}}const{decode:Hk}=ho,Fk=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,qk=/(?:#\[(?<idx>\d+)\])/g,Wk=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,Zk=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,Vk=/:(?<emoji>\w+):/gu,yv=e=>{const t=[...e.matchAll(Fk),...e.matchAll(qk),...e.matchAll(Wk),...e.matchAll(Zk),...e.matchAll(Vk)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=Hk(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},Kk=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&io(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let Gk=class extends wd{#e;#t;constructor(t){if(t.kind!==vt.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=yv(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&io(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&io(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=Kk(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}};const ui=e=>new wd(e),xd=e=>new Gk(e),Za=e=>new zk(e),Qk=()=>{const e=[...LE];return window.navigator.language.includes("ja")&&e.push(...PE),e},_v=()=>({relayUrls:Qk(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),Yk=e=>JSON.stringify(e),Jk=e=>({..._v(),...JSON.parse(e)}),Xk=H4(()=>window.localStorage,Yk,Jk),[zi,Qt]=F4("RabbitConfig",_v(),Xk),et=()=>{const e=A=>{Qt("relayUrls",k=>Pr([...k,A]))},t=A=>{Qt("relayUrls",k=>k.filter(E=>E!==A))},n=A=>{Qt("mutedPubkeys",k=>Pr([...k,A]))},i=A=>{Qt("mutedPubkeys",k=>k.filter(E=>E!==A))},o=A=>{Qt("mutedKeywords",k=>Pr([...k,A]))},a=A=>{Qt("mutedKeywords",k=>k.filter(E=>E!==A))},l=A=>{Qt("columns",k=>{const E=k.findIndex(I=>I.id===A.id);if(E>=0){const I=[...k];return I.splice(E,1,A),I}return[...k,A]})},u=(A,k)=>{Qt("columns",E=>{const I=k-1,L=Math.max(Math.min(I,E.length),0),B=E.findIndex(W=>W.id===A);if(B<0||L===B)return E;console.log(B,L);const U=[...E],[ne]=U.splice(B,1);return U.splice(L,0,ne),U})},d=A=>{Qt("columns",k=>k.filter(E=>E.id!==A))},f=A=>{Qt("customEmojis",k=>({...k,[A.shortcode]:A}))},p=A=>{Qt("customEmojis",k=>{const E=Object.fromEntries(A.map(I=>[I.shortcode,I]));return{...k,...E}})},g=A=>{Qt("customEmojis",k=>({...k,[A]:void 0}))},m=A=>zi.customEmojis[A],_=A=>OE.sortBy(Object.values(zi.customEmojis).filter(({shortcode:k})=>k.includes(A)),[k=>k.shortcode.length]),w=A=>zi.mutedPubkeys.includes(A),$=A=>A.kind===vt.Text?zi.mutedKeywords.some(k=>A.content.includes(k)):!1;return{config:()=>zi,setConfig:Qt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:A})=>{if((zi.columns?.length??0)>0)return;const k=[ov({width:"widest",pubkey:A}),av({pubkey:A}),cv({name:"自分の投稿",pubkey:A}),uv({name:"自分のリアクション",pubkey:A})];navigator.language.includes("ja")&&k.splice(2,0,lv()),Qt("columns",()=>[...k])},saveEmoji:f,saveEmojis:p,removeEmoji:g,getEmoji:m,searchEmojis:_,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:w,shouldMuteEvent:A=>{const k=ui(A);return w(A.pubkey)||k.taggedPubkeys().some(w)||A.kind===vt.Text&&$(A)}}},[eC]=ke(new A9({eoseSubTimeout:7500})),$d=()=>eC,[wv,o0]=Vi({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...wv})},1e3);const xv=()=>({stats:wv,setActiveSubscriptions:n=>o0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>o0("activeBatchSubscriptions",n)});let a0=0;const tC=()=>{const e=a0;return a0+=1,e};class nC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=tC(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const rC=e=>{const t=Fe(e),n=Fe(()=>t().batchSize??100),i=Fe(()=>t().interval??2e3),[o,a]=ke([]);let l;const u=()=>{const{executor:g}=t(),m=o();m.length>0&&(a([]),g(m)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(m=>[...m,g]):(u(),a([g])),d()},removeTask:g=>{a(m=>m.filter(_=>_!==g))}}},$v=e=>e.length===0?null:e.reduce((t,n)=>{const i=t.created_at-n.created_at;return i>0?t:i<0?n:t.id<n.id?t:n});class hs extends nC{addEvent(t){this.updateWith(n=>[...n??[],t])}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}latestEventPromise(){return this.toCompletePromise().then(t=>{const n=$v(t);if(n==null)throw new Error("event not found");return n})}}let Ru=0;const{setActiveBatchSubscriptions:iC}=xv();setInterval(()=>{iC(Ru)},1e3);const sC=e=>e.kind>=3e4&&e.kind<4e4,oC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{addTask:aC,removeTask:lC}=rC(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(E=>{if(E.req.type==="Event"){const I=n.get(E.req.eventId)??[];n.set(E.req.eventId,[...I,E])}else if(E.req.type==="Profile"){const I=t.get(E.req.pubkey)??[];t.set(E.req.pubkey,[...I,E])}else if(E.req.type==="Reactions"){const I=i.get(E.req.mentionedEventId)??[];i.set(E.req.mentionedEventId,[...I,E])}else if(E.req.type==="Reposts"){const I=o.get(E.req.mentionedEventId)??[];o.set(E.req.mentionedEventId,[...I,E])}else if(E.req.type==="ZapReceipts"){const I=a.get(E.req.mentionedEventId)??[];o.set(E.req.mentionedEventId,[...I,E])}else if(E.req.type==="ParameterizedReplaceableEvent"){const I=oC(E.req),L=l.get(I)??[];l.set(I,[...L,E])}else if(E.req.type==="Followings"){const I=u.get(E.req.pubkey)??[];u.set(E.req.pubkey,[...I,E])}});const d=[...n.keys()],f=[...t.keys()],p=[...i.keys()],g=[...o.keys()],m=[...a.keys()],_=[...u.keys()],w=[];if(d.length>0&&w.push({ids:d}),f.length>0&&w.push({kinds:[vt.Metadata],authors:f}),p.length>0&&w.push({kinds:[vt.Reaction],"#e":p}),g.length>0&&w.push({kinds:[6],"#e":g}),m.length>0&&w.push({kinds:[9735],"#e":m}),_.length>0&&w.push({kinds:[vt.Contacts],authors:_}),l.size>0&&Array.from(l.values()).forEach(([E])=>{if(E.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:I,author:L,identifier:B}}=E;w.push({kinds:[I],authors:[L],"#d":[B]})}),w.length===0)return;const $=(E,I)=>{E.forEach(L=>{L.addEvent(I)})},x=()=>{e.forEach(E=>{E.complete()})},{config:C}=et(),k=$d()().sub(C().relayUrls,w,{});Ru+=1,k.on("event",E=>{if(E.kind===vt.Metadata){const I=t.get(E.pubkey)??[];$(I,E);return}if(E.kind===vt.Reaction){const I=ui(E).lastTaggedEventId();if(I!=null){const L=i.get(I)??[];$(L,E)}}else if(E.kind===6){const I=ui(E).lastTaggedEventId();if(I!=null){const L=o.get(I)??[];$(L,E)}}else if(E.kind===vt.Zap)ui(E).eTags().forEach(([,L])=>{const B=o.get(L)??[];$(B,E)});else if(E.kind===vt.Contacts){const I=u.get(E.pubkey)??[];$(I,E)}else if(sC(E)){const I=ui(E).findFirstTagByName("d")?.[1];if(I!=null){const L=`${E.kind}:${E.pubkey}:${I}`,B=l.get(L)??[];$(B,E)}else console.warn("identifier is undefined")}else{const I=n.get(E.id)??[];I.length>0?$(I,E):console.warn("unknown event received")}}),k.on("eose",()=>{x(),k.unsub(),Ru-=1})}})),El=({task:e,signal:t})=>{aC(e),t?.addEventListener("abort",()=>lC(e))};class cC extends Error{}const ps=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new cC(l))},e)});return Promise.race([n,i])},uC=e=>{const t=Fe(e),n=is(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new hs({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return El({task:d,signal:a}),ps(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},bn=e=>t=>e.some(n=>n==null)?null:t(e),dC=j("<span>投稿が見つかりません"),fC=j('<div class="truncate">読み込み中 '),so=e=>{const[t,n]=B4(e,["eventId"]),{shouldMuteEvent:i}=et(),{event:o,query:a}=uC(()=>bn([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return T(Dn,{get fallback(){return(()=>{const u=dC();return u.firstChild,R(u,()=>e.eventId,null),u})()},get children(){return[T(Ke,{get when(){return l()},children:null}),T(Ke,{get when(){return o()},keyed:!0,children:u=>T(vm,j4({event:u},n))}),T(Ke,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=fC();return d.firstChild,R(d,T(Zs,{eventId:u}),null),d})()})]}})},hC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},pC=e=>{try{return hC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},Ev=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve(null);const a=o.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return o.onUpdate(l=>{const u=$v(l);t.setQueryData(n,u)}),El({task:o,signal:i}),ps(15e3,`${JSON.stringify(n)}`)(a)},kv=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve([]);const a=o.toUpdatePromise().catch(()=>[]);return o.onUpdate(l=>{t.setQueryData(n,l)}),El({task:o,signal:i}),ps(15e3,`${JSON.stringify(n)}`)(a)},gs=e=>{const t=rs(),n=Fe(e),i=Fe(()=>["useProfile",n()]),o=is(i,Ev({taskProvider:([,u])=>{if(u==null)return null;const{pubkey:d}=u;return new hs({type:"Profile",pubkey:d})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:Fe(()=>{if(o.data==null)return null;const{content:u}=o.data;return pC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:gC}=ho,go=e=>{try{return gC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Ed=e=>{const{profile:t}=gs(()=>({pubkey:e.pubkey}));return T(Dn,{get fallback(){return go(e.pubkey)},get children(){return[T(Ke,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),T(Ke,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Fe(()=>t()?.name)]}})]}})},Cv=e=>{const[t,n]=ke(new Date);return di(()=>{const i=setInterval(()=>{n(new Date)},e().interval);jr(()=>clearInterval(i))}),t},vC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},l0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,mC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},bC=e=>{switch(e.kind){case"today":return l0(e.value);case"yesterday":return`昨日 ${l0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},yC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,_C=(e,t)=>{const n=yC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},c0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),wC=e=>new Date(+e-24*60*60*1e3),Sv=(e,t,n)=>c0(e,t)?n({kind:"today",value:e}):c0(e,wC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),xC=(e,t=new Date)=>Sv(e,t,mC),$C=(e,t=new Date)=>Sv(e,t,bC),u0=(e,t=new Date,n=vC)=>n(_C(e,t)),d0=Cv(()=>({interval:7e3})),f0=Cv(()=>({interval:60*1e3})),Tv=()=>{const{config:e}=et();return t=>{switch(e().dateFormat){case"absolute-long":return xC(t,f0());case"absolute-short":return $C(t,f0());case"relative":return u0(t,d0());default:return u0(t,d0())}}},[EC,ni]=ke({type:"Closed"}),qr=()=>({modalState:EC,setModalState:ni,showLogin:()=>{ni({type:"Login"})},showProfile:l=>{ni({type:"Profile",pubkey:l})},showProfileEdit:()=>{ni({type:"ProfileEdit"})},showAddColumn:()=>{ni({type:"AddColumn"})},showAbout:()=>{ni({type:"About"})},closeModal:()=>{ni({type:"Closed"})}}),kC=j('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),CC=e=>{const t=Rt(),{showProfile:n}=qr(),i=Tv(),o=Fe(()=>ui(e.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=kC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,m=u.nextSibling;return R(d,T(iv,{})),p.$$click=()=>n(e.event.pubkey),R(p,T(Ed,{get pubkey(){return e.event.pubkey}})),R(f,()=>t()("notification.reposted"),null),R(g,()=>i(o().createdAtAsDate())),R(m,T(so,{get eventId(){return a()}})),l})()};mt(["click"]);const SC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),TC=(e={})=>(()=>{const t=SC();return Xe(t,e,!0,!0),t})(),AC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Av=(e={})=>(()=>{const t=AC();return Xe(t,e,!0,!0),t})(),IC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Iv=(e={})=>(()=>{const t=IC();return Xe(t,e,!0,!0),t})(),RC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Rv=(e={})=>(()=>{const t=RC();return Xe(t,e,!0,!0),t})(),OC=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Ov=(e={})=>(()=>{const t=OC();return Xe(t,e,!0,!0),t})(),LC=j('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),kd=e=>{let t,n;const[i,o]=ke(!1),[a,l]=ke({}),u=N4(()=>e.children),d=()=>o(!1),f=()=>o(w=>!w),p=w=>{const $=w.target;$!=null&&!n?.contains($)&&d()},g=()=>{document.addEventListener("mousedown",p)},m=()=>{document.removeEventListener("mousedown",p)},_=()=>{if(t==null||n==null)return;const w=t?.getBoundingClientRect(),$=n?.getBoundingClientRect();let{top:x,left:C}=w;e.position==="left"?C-=w.width:e.position==="right"?C+=w.width:e.position==="top"?(x-=w.height,C-=w.left+w.width/2):(x+=w.height,C+=w.width/2),x=Math.min(x,window.innerHeight-$.height),C=Math.min(C,window.innerWidth-$.width),l({left:`${C}px`,top:`${x}px`})};return di(()=>{i()?(g(),e.onOpen?.()):(m(),e.onClose?.())}),di(nl(u,()=>{_()})),di(()=>{i()&&_()}),hr(()=>{e.ref?.({close:d})}),jr(()=>m()),(()=>{const w=LC(),$=w.firstChild,x=$.nextSibling;$.$$click=()=>{f(),_()};const C=t;typeof C=="function"?dr(C,$):t=$,R($,()=>e.button);const A=n;return typeof A=="function"?dr(A,x):n=x,R(x,u),De(k=>{const E=!i(),I=!!i(),L=a();return E!==k._v$&&x.classList.toggle("hidden",k._v$=E),I!==k._v$2&&x.classList.toggle("block",k._v$2=I),k._v$3=D4(x,L,k._v$3),k},{_v$:void 0,_v$2:void 0,_v$3:void 0}),w})()};mt(["click"]);const PC=j('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),MC=j('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),BC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=PC(),i=n.firstChild;return i.$$click=t,R(i,()=>e.item.content()),n})()},Lv=e=>{let t;const n=()=>t?.close();return T(kd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=MC();return R(i,T(Ht,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>T(BC,{item:o,onClose:n})})),i}})};mt(["click"]);const jC=j('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),h0=j('<span class="truncate">'),NC=j('<img class="h-4 max-w-[3rem]">'),DC=e=>e.type==="LikeDislike"&&e.content==="+",Pv=e=>T(Dn,{get fallback(){return(()=>{const t=h0();return R(t,()=>e.reactionTypes.content),t})()},get children(){return[T(Ke,{get when(){return DC(e.reactionTypes)},get children(){const t=jC();return R(t,T(Ov,{})),t}}),T(Ke,{get when(){return e.reactionTypes.type==="Emoji"&&e.reactionTypes},keyed:!0,children:({content:t})=>(()=>{const n=h0();return R(n,t),n})()}),T(Ke,{get when(){return e.reactionTypes.type==="CustomEmoji"&&e.reactionTypes},keyed:!0,children:({shortcode:t,url:n})=>(()=>{const i=NC();return Ge(i,"src",n),Ge(i,"alt",`:${t}:`),i})()})]}});function Mv(e){return e&&e.__esModule?e.default:e}function Sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var kl,ye,Bv,Ds,jv,p0,Va={},Nv=[],UC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Lr(e,t){for(var n in t)e[n]=t[n];return e}function Dv(e){var t=e.parentNode;t&&t.removeChild(e)}function Ou(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?kl.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return $a(e,l,i,o,null)}function $a(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Bv};return o==null&&ye.vnode!=null&&ye.vnode(a),a}function lr(){return{current:null}}function es(e){return e.children}function Un(e,t){this.props=e,this.context=t}function ts(e,t){if(t==null)return e.__?ts(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ts(e):null}function Uv(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Uv(e)}}function g0(e){(!e.__d&&(e.__d=!0)&&Ds.push(e)&&!Ka.__r++||p0!==ye.debounceRendering)&&((p0=ye.debounceRendering)||jv)(Ka)}function Ka(){for(var e;Ka.__r=Ds.length;)e=Ds.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ds=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Lr({},a)).__v=a.__v+1,Cd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??ts(a),a.__h),qv(i,a),a.__e!=l&&Uv(a)))})}function zv(e,t,n,i,o,a,l,u,d,f){var p,g,m,_,w,$,x,C=i&&i.__k||Nv,A=C.length;for(n.__k=[],p=0;p<t.length;p++)if((_=n.__k[p]=(_=t[p])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?$a(null,_,null,null,_):Array.isArray(_)?$a(es,{children:_},null,null,null):_.__b>0?$a(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(m=C[p])===null||m&&_.key==m.key&&_.type===m.type)C[p]=void 0;else for(g=0;g<A;g++){if((m=C[g])&&_.key==m.key&&_.type===m.type){C[g]=void 0;break}m=null}Cd(e,_,m=m||Va,o,a,l,u,d,f),w=_.__e,(g=_.ref)&&m.ref!=g&&(x||(x=[]),m.ref&&x.push(m.ref,null,_),x.push(g,_.__c||w,_)),w!=null?($==null&&($=w),typeof _.type=="function"&&_.__k===m.__k?_.__d=d=Hv(_,d,e):d=Fv(e,_,m,C,w,d),typeof n.type=="function"&&(n.__d=d)):d&&m.__e==d&&d.parentNode!=e&&(d=ts(m))}for(n.__e=$,p=A;p--;)C[p]!=null&&(typeof n.type=="function"&&C[p].__e!=null&&C[p].__e==n.__d&&(n.__d=ts(i,p+1)),Zv(C[p],C[p]));if(x)for(p=0;p<x.length;p++)Wv(x[p],x[++p],x[++p])}function Hv(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Hv(i,t,n):Fv(n,i,i,o,i.__e,t));return t}function Ga(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ga(n,t)}):t.push(e)),t}function Fv(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function zC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Qa(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Qa(e,a,t[a],n[a],i)}function v0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||UC.test(t)?n:n+"px"}function Qa(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||v0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||v0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?b0:m0,a):e.removeEventListener(t,a?b0:m0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function m0(e){this.l[e.type+!1](ye.event?ye.event(e):e)}function b0(e){this.l[e.type+!0](ye.event?ye.event(e):e)}function Cd(e,t,n,i,o,a,l,u,d){var f,p,g,m,_,w,$,x,C,A,k,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(f=ye.__b)&&f(t);try{e:if(typeof E=="function"){if(x=t.props,C=(f=E.contextType)&&i[f.__c],A=f?C?C.props.value:f.__:i,n.__c?$=(p=t.__c=n.__c).__=p.__E:("prototype"in E&&E.prototype.render?t.__c=p=new E(x,A):(t.__c=p=new Un(x,A),p.constructor=E,p.render=FC),C&&C.sub(p),p.props=x,p.state||(p.state={}),p.context=A,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),E.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Lr({},p.__s)),Lr(p.__s,E.getDerivedStateFromProps(x,p.__s))),m=p.props,_=p.state,g)E.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(E.getDerivedStateFromProps==null&&x!==m&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,A),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,A)===!1||t.__v===n.__v){p.props=x,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(I){I&&(I.__=t)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,A),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(m,_,w)})}p.context=A,p.props=x,p.state=p.__s,(f=ye.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Lr(Lr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(w=p.getSnapshotBeforeUpdate(m,_)),k=f!=null&&f.type===es&&f.key==null?f.props.children:f,zv(e,Array.isArray(k)?k:[k],t,n,i,o,a,l,u,d),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),$&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=HC(n.__e,t,n,i,o,a,l,d);(f=ye.diffed)&&f(t)}catch(I){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),ye.__e(I,t,n)}}function qv(e,t){ye.__c&&ye.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){ye.__e(i,n.__v)}})}function HC(e,t,n,i,o,a,l,u){var d,f,p,g=n.props,m=t.props,_=t.type,w=0;if(_==="svg"&&(o=!0),a!=null){for(;w<a.length;w++)if((d=a[w])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,a[w]=null;break}}if(e==null){if(_===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,m.is&&m),a=null,u=!1}if(_===null)g===m||u&&e.data===m||(e.data=m);else{if(a=a&&kl.call(e.childNodes),f=(g=n.props||Va).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},w=0;w<e.attributes.length;w++)g[e.attributes[w].name]=e.attributes[w].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(zC(e,m,g,o,u),p)t.__k=[];else if(w=t.props.children,zv(e,Array.isArray(w)?w:[w],t,n,i,o&&_!=="foreignObject",a,l,a?a[0]:n.__k&&ts(n,0),u),a!=null)for(w=a.length;w--;)a[w]!=null&&Dv(a[w]);u||("value"in m&&(w=m.value)!==void 0&&(w!==g.value||w!==e.value||_==="progress"&&!w)&&Qa(e,"value",w,g.value,!1),"checked"in m&&(w=m.checked)!==void 0&&w!==e.checked&&Qa(e,"checked",w,g.checked,!1))}return e}function Wv(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){ye.__e(i,n)}}function Zv(e,t,n){var i,o;if(ye.unmount&&ye.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Wv(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){ye.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Zv(i[o],t,typeof e.type!="function");n||e.__e==null||Dv(e.__e),e.__e=e.__d=void 0}function FC(e,t,n){return this.constructor(e,n)}function Vv(e,t,n){var i,o,a;ye.__&&ye.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Cd(t,e=(!i&&n||t).__k=Ou(es,null,[e]),o||Va,Va,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?kl.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),qv(a,e)}kl=Nv.slice,ye={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Bv=0,Un.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Lr({},this.state),typeof e=="function"&&(e=e(Lr({},n),this.props)),e&&Lr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),g0(this))},Un.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g0(this))},Un.prototype.render=es,Ds=[],jv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ka.__r=0;var qC=0;function Z(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--qC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return ye.vnode&&ye.vnode(d),d}function WC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function ZC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Br={set:WC,get:ZC};const au=new Map,VC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function KC(){for(const{v:e,emoji:t}of VC)if(Kv(t))return e}function GC(){return!Kv("🇨🇦")}function Kv(e){if(au.has(e))return au.get(e);const t=QC(e);return au.set(e,t),t}const QC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),p=e.getImageData(d,f,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var y0={latestVersion:KC,noCountryFlags:GC};const Lu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let At=null;function YC(e){At||(At=Br.get("frequently")||{});const t=e.id||e;t&&(At[t]||(At[t]=0),At[t]+=1,Br.set("last",t),Br.set("frequently",At))}function JC({maxFrequentRows:e,perLine:t}){if(!e)return[];At||(At=Br.get("frequently"));let n=[];if(!At){At={};for(let a in Lu.slice(0,t)){const l=Lu[a];At[l]=t-a,n.push(l)}return n}const i=e*t,o=Br.get("last");for(let a in At)n.push(a);if(n.sort((a,l)=>{const u=At[l],d=At[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete At[l];o&&n.indexOf(o)==-1&&(delete At[n[n.length-1]],n.splice(-1,1,o)),Br.set("frequently",At)}return n}var Gv={add:YC,get:JC,DEFAULTS:Lu},Qv={};Qv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var cr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,Ne=null;const lu={};async function _0(e){if(lu[e])return lu[e];const n=await(await fetch(e)).json();return lu[e]=n,n}let cu=null,Yv=null,Jv=!1;function Cl(e,{caller:t}={}){return cu||(cu=new Promise(n=>{Yv=n})),e?XC(e):t&&!Jv&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),cu}async function XC(e){Jv=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=cr.emojiVersion.value),n||(n=cr.set.value),i||(i=cr.locale.value),Ne)Ne.categories=Ne.categories.filter(d=>!d.name);else{Ne=(typeof e.data=="function"?await e.data():e.data)||await _0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Ne.emoticons={},Ne.natives={},Ne.categories.unshift({id:"frequent",emojis:[]});for(const d in Ne.aliases){const f=Ne.aliases[d],p=Ne.emojis[f];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}Ne.originalCategories=Ne.categories}if(Pt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Mv(Qv):await _0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const f=e.custom[d],p=e.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Pt.categories.custom),p&&!f.icon&&(f.target=p.target||p),Ne.categories.push(f);for(const g of f.emojis)Ne.emojis[g.id]=g}}e.categories&&(Ne.categories=Ne.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,f)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(f.id);return p-g}));let o=null,a=null;n=="native"&&(o=y0.latestVersion(),a=e.noCountryFlags||y0.noCountryFlags());let l=Ne.categories.length,u=!1;for(;l--;){const d=Ne.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:m}=e;g=g>=0?g:cr.maxFrequentRows.value,m||(m=cr.perLine.value),d.emojis=Gv.get({maxFrequentRows:g,perLine:m})}if(!d.emojis||!d.emojis.length){Ne.categories.splice(l,1);continue}const{categoryIcons:f}=e;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],m=g.id?g:Ne.emojis[g],_=()=>{d.emojis.splice(p,1)};if(!m||e.exceptEmojis&&e.exceptEmojis.includes(m.id)){_();continue}if(o&&m.version>o){_();continue}if(a&&d.id=="flags"&&!iS.includes(m.id)){_();continue}if(!m.search){if(u=!0,m.search=","+[[m.id,!1],[m.name,!0],[m.keywords,!1],[m.emoticons,!1]].map(([$,x])=>{if($)return(Array.isArray($)?$:[$]).map(C=>(x?C.split(/[-|_|\s]+/):[C]).map(A=>A.toLowerCase())).flat()}).flat().filter($=>$&&$.trim()).join(","),m.emoticons)for(const $ of m.emoticons)Ne.emoticons[$]||(Ne.emoticons[$]=m.id);let w=0;for(const $ of m.skins){if(!$)continue;w++;const{native:x}=$;x&&(Ne.natives[x]=m.id,m.search+=`,${x}`);const C=w==1?"":`:skin-tone-${w}:`;$.shortcodes=`:${m.id}:${C}`}}}}u&&Zi.reset(),Yv()}function Xv(e,t,n){e||(e={});const i={};for(let o in t)i[o]=em(o,e,t,n);return i}function em(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const eS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Pu=null;function tS(e){return e.id?e:Ne.emojis[e]||Ne.emojis[Ne.aliases[e]]||Ne.emojis[Ne.natives[e]]}function nS(){Pu=null}async function rS(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Cl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Pu||(Pu=Object.values(Ne.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],p=l[d.id];return f==p?u.id.localeCompare(d.id):f-p}),a.length>t&&(a=a.slice(0,t))),a}var Zi={search:rS,get:tS,reset:nS,SHORTCODES_REGEX:eS};const iS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function sS(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function oS(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function aS(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const lS={activity:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),Z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),Z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),Z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),Z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},cS={loupe:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ya={categories:lS,search:cS};function Mu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Zi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Zi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return Z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?Z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?Z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):Z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*Ne.sheet.cols}% ${100*Ne.sheet.rows}%`,backgroundPosition:`${100/(Ne.sheet.cols-1)*o.x}% ${100/(Ne.sheet.rows-1)*o.y}%`}})})}const uS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class tm extends uS{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=em(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class dS extends tm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var nm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:cr.set,skin:cr.skin};class rm extends tm{async connectedCallback(){const t=Xv(this.props,nm,this);t.element=this,t.ref=n=>{this.component=n},await Cl(),!this.disconnected&&Vv(Z(Mu,{...t}),this)}constructor(t){super(t)}}Sn(rm,"Props",nm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",rm);var w0,Bu=[],x0=ye.__b,$0=ye.__r,E0=ye.diffed,k0=ye.__c,C0=ye.unmount;function fS(){var e;for(Bu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Bu.pop();)if(e.__P)try{e.__H.__h.forEach(Ea),e.__H.__h.forEach(ju),e.__H.__h=[]}catch(t){e.__H.__h=[],ye.__e(t,e.__v)}}ye.__b=function(e){x0&&x0(e)},ye.__r=function(e){$0&&$0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ea),t.__h.forEach(ju),t.__h=[])},ye.diffed=function(e){E0&&E0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Bu.push(t)!==1&&w0===ye.requestAnimationFrame||((w0=ye.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),S0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);S0&&(i=requestAnimationFrame(o))})(fS))},ye.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ea),n.__h=n.__h.filter(function(i){return!i.__||ju(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ye.__e(i,n.__v)}}),k0&&k0(e,t)},ye.unmount=function(e){C0&&C0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ea(i)}catch(o){t=o}}),t&&ye.__e(t,n.__v))};var S0=typeof requestAnimationFrame=="function";function Ea(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function ju(e){e.__c=e.__()}function hS(e,t){for(var n in t)e[n]=t[n];return e}function T0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ja(e){this.props=e}(Ja.prototype=new Un).isPureReactComponent=!0,Ja.prototype.shouldComponentUpdate=function(e,t){return T0(this.props,e)||T0(this.state,t)};var A0=ye.__b;ye.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),A0&&A0(e)};var pS=ye.__e;ye.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}pS(e,t,n)};var I0=ye.unmount;function uu(){this.__u=0,this.t=null,this.__b=null}function im(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ga(){this.u=null,this.o=null}ye.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),I0&&I0(e)},(uu.prototype=new Un).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=im(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(m,_,w){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function($){return g($,_,w)}),m.__c&&m.__c.__P===_&&(m.__e&&w.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=w)),m}(f,f.__c.__P,f.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},uu.prototype.componentWillUnmount=function(){this.t=[]},uu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=hS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Ou(es,null,e.fallback);return o&&(o.__h=null),[Ou(es,null,t.__e?null:e.children),o]};var R0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ga.prototype=new Un).__e=function(e){var t=this,n=im(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),R0(t,e,i)):o()};n?n(a):a()}},ga.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ga(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ga.prototype.componentDidUpdate=ga.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){R0(e,n,t)})};var gS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,vS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,mS=typeof document<"u",bS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Un.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Un.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var O0=ye.event;function yS(){}function _S(){return this.cancelBubble}function wS(){return this.defaultPrevented}ye.event=function(e){return O0&&(e=O0(e)),e.persist=yS,e.isPropagationStopped=_S,e.isDefaultPrevented=wS,e.nativeEvent=e};var L0={configurable:!0,get:function(){return this.class}},P0=ye.vnode;ye.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];mS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!bS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&vS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(L0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",L0))}e.$$typeof=gS,P0&&P0(e)};var M0=ye.__r;ye.__r=function(e){M0&&M0(e),e.__c};const xS={light:"outline",dark:"solid"};class $S extends Ja{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return Z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return Z("img",{src:n.src})}const i=Ya.categories[t.id]||Ya.categories.custom,o=this.props.icons=="auto"?xS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return Z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:Z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),Z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),Z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Ne.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class ES extends Ja{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const va={rowsPerRender:10};class kS extends Un{getInitialState(t=this.props){return{skin:Br.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:lr(),navigation:lr(),scroll:lr(),search:lr(),searchInput:lr(),skinToneButton:lr(),skinToneRadio:lr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Cl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Ne;this.refs.categories=new Map;const n=Ne.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%va.rowsPerRender?{}:lr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:lr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Zi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(va.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*va.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const p=(()=>{if(d==0&&f==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const m=i?-1:1;if(f+=m,!g[f]){if(d+=m,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=aS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Gv.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Br.set("skin",t)}renderNav(){return Z($S,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return Z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[Z("div",{class:"flex flex-middle flex-grow",children:[Z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:Z(Mu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),Z("div",{class:`margin-${this.dir[0]}`,children:t||n?Z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[Z("div",{class:"preview-title ellipsis",children:t?t.name:Pt.search_no_results_1}),Z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Pt.search_no_results_2})]}):Z("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,f=sS(this.state.pos,n),p=n.concat(t.id).join("");return Z(ES,{selected:f,skin:l,size:a,children:Z("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[Z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),Z(Mu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return Z("div",{children:[Z("div",{class:"spacer"}),Z("div",{class:"flex flex-middle",children:[Z("div",{class:"search relative flex-grow",children:[Z("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),Z("span",{class:"icon loupe flex",children:Ya.search.loupe}),this.state.searchResults&&Z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ya.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?Z("div",{class:"category",ref:this.refs.search,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),Z("div",{children:t.length?t.map((n,i)=>Z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):Z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&Z("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Ne,n=!!this.state.searchResults,i=this.getPerLine();return Z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return Z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),Z("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%va.rowsPerRender,p=this.state.visibleRows[f],g="current"in u?u:void 0;if(!p&&!g)return null;const m=d*i,_=m+i,w=o.emojis.slice(m,_);return w.length<i&&w.push(...new Array(i-w.length)),Z("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&w.map(($,x)=>{if(!$)return Z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=Zi.get($);return this.renderEmojiButton(C,{pos:[u.index,x],posinset:u.posinset+x,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:Z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:Z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:Z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return Z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),Z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return Z("div",{children:[Z("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Pt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),Z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[Z("span",{class:`skin-tone skin-tone-${l}`}),Z("span",{class:"margin-small-lr",children:Pt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return Z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&Z("div",{class:"padding-lr",children:this.renderSearch()}),Z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:Z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Sn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Sn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Sn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Sn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Sn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Zi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),Sn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Sn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Sn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Sn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await oS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Sd extends dS{async connectedCallback(){const t=Xv(this.props,cr,this);t.element=this,t.ref=n=>{this.component=n},await Cl(t),!this.disconnected&&Vv(Z(kS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Mv(sm)})}}Sn(Sd,"Props",cr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Sd);var sm={};sm=`:host {
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

`;const om=e=>{let t;const[n,i]=ke(void 0);return T(kd,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new Sd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},CS=j("<div>"),SS=j('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),TS=j("<br>"),AS=j("<span>: "),IS=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),RS=e=>{const t=Rt(),[n,i]=ke(!1);return T(fe,{get when(){return!e.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=IS();return o.$$click=()=>i(!0),R(o,()=>t()("post.contentWarning.show"),null),R(o,T(fe,{get when(){return e.contentWarning.reason!=null},get children(){return[TS(),(()=>{const a=AS(),l=a.firstChild;return R(a,()=>t()("post.contentWarning.reason"),l),R(a,()=>e.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=CS();return R(o,()=>e.children),o})(),T(fe,{get when(){return e.contentWarning.contentWarning},get children(){const o=SS();return o.$$click=()=>i(!1),o}})]}})};mt(["click"]);const am=e=>{const{profile:t}=gs(()=>({pubkey:e.pubkey}));return T(fe,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${go(e.pubkey)}`},get children(){return["@",Fe(()=>t()?.name??e.pubkey)]}})},OS=j('<a target="_blank" rel="noreferrer noopener">'),vo=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return T(fe,{get when(){return t()},get fallback(){return e.href},get children(){const n=OS();return R(n,()=>e.children??e.href),De(i=>{const o=e.class,a=e.href;return o!==i._v$&&Pg(n,i._v$=o),a!==i._v$2&&Ge(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},LS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},PS=e=>{try{const t=new URL(e);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(t.pathname)}catch{return!1}},MS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},BS=j('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),jS=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),NS=e=>{let t;const n=Rt(),[i,o]=ke(e.initialHidden);return T(fe,{get when(){return!i()},get fallback(){return(()=>{const a=jS();return a.$$click=()=>o(!1),R(a,()=>n()("post.showImage")),a})()},get children(){return T(vo,{class:"my-2 block",get href(){return e.url},get children(){const a=BS(),l=t;return typeof l=="function"?dr(l,a):t=a,De(u=>{const d=MS(e.url),f=e.url;return d!==u._v$&&Ge(a,"src",u._v$=d),f!==u._v$2&&Ge(a,"alt",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),a}})}})};mt(["click"]);const DS=j('<div class="my-1 rounded border p-1">'),US=e=>T(fe,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return T(Zs,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=DS();return R(t,T(so,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[vt.Text]}})),t}}),zS=j('<button class="inline text-blue-500 underline">'),du=e=>{const{showProfile:t}=qr(),n=()=>{t(e.pubkey)};return(()=>{const i=zS();return i.$$click=n,R(i,T(am,{get pubkey(){return e.pubkey}})),i})()};mt(["click"]);const HS=j('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),FS=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),qS=e=>{let t;const n=Rt(),[i,o]=ke(e.initialHidden);return T(fe,{get when(){return!i()},get fallback(){return(()=>{const a=FS();return a.$$click=()=>o(!1),R(a,()=>n()("post.showVideo")),a})()},get children(){return T(vo,{class:"my-2 block",get href(){return e.url},get children(){const a=HS(),l=a.firstChild,u=t;return typeof u=="function"?dr(u,a):t=a,R(l,()=>n()("post.download")),De(d=>{const f=e.url,p=e.url;return f!==d._v$&&Ge(a,"src",d._v$=f),p!==d._v$2&&Ge(l,"href",d._v$2=p),d},{_v$:void 0,_v$2:void 0}),a}})}})};mt(["click"]);const[Td,WS]=ke({}),lm=e=>{Td()[e]==null&&WS(t=>({...t,[e]:new MessageChannel}))},ZS=e=>{const t=()=>Td()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",f,!1),t().port1.start()});return hr(()=>{const{id:o}=e();lm(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},VS=e=>{const t=Fe(e),n=()=>Td()[t().id];hr(()=>{const{id:i}=t();lm(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=t().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const m={requestId:u,ok:!0,response:g};o.postMessage(m)}).catch(g=>{const m={requestId:u,ok:!1,error:g};o.postMessage(m)})};o.addEventListener("message",a),o.start(),jr(()=>{o.removeEventListener("message",a)})})},Ad=()=>ZS(()=>({id:"CommandChannel"})),KS=e=>{VS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},fu=j("<span>"),B0=j('<div class="my-1 rounded border p-1">'),GS=j('<span class="text-blue-500 underline">'),QS=j('<button class="text-blue-500 underline">'),YS=j('<img class="inline-block h-8 max-w-[128px] align-middle">'),JS=e=>{const{config:t,saveColumn:n}=et(),i=Ad(),o=()=>xd(e.event),a=l=>{n(_d({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return T(Ht,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=fu();return R(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!t().showMedia||o().contentWarning().contentWarning||!e.embedding;return LS(l.content)?T(NS,{get url(){return l.content},get initialHidden(){return u()}}):PS(l.content)?T(qS,{get url(){return l.content},get initialHidden(){return u()}}):T(vo,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=fu();return R(d,()=>l.content),d})();if(u.type==="MentionedUser")return T(du,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?T(US,{mentionedEvent:u}):T(Zs,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=B0();return R(u,T(so,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[vt.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=B0();return R(u,T(so,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?T(du,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?T(du,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=GS();return R(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=QS();return u.$$click=()=>a(l.content),R(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=fu();return R(d,()=>l.content),d})():(()=>{const d=YS();return Ge(d,"src",u),De(f=>{const p=l.content,g=l.shortcode;return p!==f._v$&&Ge(d,"alt",f._v$=p),g!==f._v$2&&Ge(d,"title",f._v$2=g),f},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};mt(["click"]);const XS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ns=(e={})=>(()=>{const t=XS();return Xe(t,e,!0,!0),t})(),eT=j('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),tT=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=eT();i.$$click=n;const o=t;return typeof o=="function"?dr(o,i):t=i,R(i,()=>e.children),i})()};mt(["click"]);const nT=j('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-4em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),_i=e=>T(tT,{onClose:()=>e.onClose?.(),get children(){const t=nT(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),R(i,T(fe,{get when(){return e?.closeButton},get fallback(){return T(ns,{})},keyed:!0,children:a=>a()})),R(o,()=>e.children),t}});mt(["click"]);const rT=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),iT=(e={})=>(()=>{const t=rT();return Xe(t,e,!0,!0),t})(),sT=j('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),oT=j('<div class="relative inline-block"><button type="button">'),aT=e=>{const[t,n]=ke(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=oT(),a=o.firstChild;return a.$$click=i,R(a,T(iT,{})),R(o,T(fe,{get when(){return t()},get children(){return sT()}}),null),De(()=>Pg(a,e.class)),o})()};mt(["click"]);const lT=j('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),cT=e=>{const t=Fe(()=>JSON.stringify(e.event,null,2));return T(_i,{get onClose(){return e.onClose},get children(){const n=lT(),i=n.firstChild,o=i.nextSibling;return R(i,t),R(o,T(aT,{class:"h-4 w-4",get text(){return t()}})),n}})},uT=j('<div class="profile-name truncate pr-1 font-bold hover:underline">'),dT=j('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),fT=j('<img alt="icon" class="h-full w-full rounded object-cover">'),hT=e=>{const{profile:t,query:n}=gs(()=>({pubkey:e.pubkey}));return(()=>{const i=dT(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.firstChild,d=u.firstChild,f=d.firstChild;return o.$$click=p=>{p.preventDefault(),e.onShowProfile?.()},R(o,T(fe,{get when(){return t()?.picture},keyed:!0,children:p=>(()=>{const g=fT();return Ge(g,"src",p),g})()})),u.$$click=p=>{p.preventDefault(),e?.onShowProfile?.()},R(d,T(fe,{get when(){return(t()?.display_name?.length??0)>0},get children(){const p=uT();return R(p,()=>t()?.display_name),p}}),f),R(f,T(fe,{get when(){return t()?.name},get fallback(){return`@${go(e.pubkey)}`},keyed:!0,children:p=>`@${p}`})),i})()};mt(["click"]);const pT=j('<div class="px-4 py-2"><div> 件</div><div>'),gT=j('<div class="flex border-t py-1">'),Nu=e=>{const{showProfile:t}=qr();return T(_i,{get onClose(){return e.onClose},get children(){const n=pT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return R(i,()=>e.data.length,o),R(a,T(Ht,{get each(){return e.data},children:l=>{const u=()=>e.pubkeyExtractor(l);return(()=>{const d=gT();return R(d,T(fe,{get when(){return e.renderInfo},keyed:!0,children:f=>f(l)}),null),R(d,T(hT,{get pubkey(){return u()},onShowProfile:()=>t(u())}),null),d})()}})),n}})},vT=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),cm=(e={})=>(()=>{const t=vT();return Xe(t,e,!0,!0),t})(),mT=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),bT=(e={})=>(()=>{const t=mT();return Xe(t,e,!0,!0),t})(),yT=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),_T=(e={})=>(()=>{const t=yT();return Xe(t,e,!0,!0),t})();var Id={},mo={},um={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,p){this.fn=d,this.context=f,this.once=p||!1}function a(d,f,p,g,m){if(typeof p!="function")throw new TypeError("The listener must be a function");var _=new o(p,g||d,m),w=n?n+f:f;return d._events[w]?d._events[w].fn?d._events[w]=[d._events[w],_]:d._events[w].push(_):(d._events[w]=_,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],p,g;if(this._eventsCount===0)return f;for(g in p=this._events)t.call(p,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(p)):f},u.prototype.listeners=function(f){var p=n?n+f:f,g=this._events[p];if(!g)return[];if(g.fn)return[g.fn];for(var m=0,_=g.length,w=new Array(_);m<_;m++)w[m]=g[m].fn;return w},u.prototype.listenerCount=function(f){var p=n?n+f:f,g=this._events[p];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,p,g,m,_,w){var $=n?n+f:f;if(!this._events[$])return!1;var x=this._events[$],C=arguments.length,A,k;if(x.fn){switch(x.once&&this.removeListener(f,x.fn,void 0,!0),C){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,p),!0;case 3:return x.fn.call(x.context,p,g),!0;case 4:return x.fn.call(x.context,p,g,m),!0;case 5:return x.fn.call(x.context,p,g,m,_),!0;case 6:return x.fn.call(x.context,p,g,m,_,w),!0}for(k=1,A=new Array(C-1);k<C;k++)A[k-1]=arguments[k];x.fn.apply(x.context,A)}else{var E=x.length,I;for(k=0;k<E;k++)switch(x[k].once&&this.removeListener(f,x[k].fn,void 0,!0),C){case 1:x[k].fn.call(x[k].context);break;case 2:x[k].fn.call(x[k].context,p);break;case 3:x[k].fn.call(x[k].context,p,g);break;case 4:x[k].fn.call(x[k].context,p,g,m);break;default:if(!A)for(I=1,A=new Array(C-1);I<C;I++)A[I-1]=arguments[I];x[k].fn.apply(x[k].context,A)}}return!0},u.prototype.on=function(f,p,g){return a(this,f,p,g,!1)},u.prototype.once=function(f,p,g){return a(this,f,p,g,!0)},u.prototype.removeListener=function(f,p,g,m){var _=n?n+f:f;if(!this._events[_])return this;if(!p)return l(this,_),this;var w=this._events[_];if(w.fn)w.fn===p&&(!m||w.once)&&(!g||w.context===g)&&l(this,_);else{for(var $=0,x=[],C=w.length;$<C;$++)(w[$].fn!==p||m&&!w[$].once||g&&w[$].context!==g)&&x.push(w[$]);x.length?this._events[_]=x.length===1?x[0]:x:l(this,_)}return this},u.prototype.removeAllListeners=function(f){var p;return f?(p=n?n+f:f,this._events[p]&&l(this,p)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u})(um);var Sl=um.exports,Rd={},bo={};Object.defineProperty(bo,"__esModule",{value:!0});bo.SearchResult=void 0;const wT=/\$&/g,xT=/\$(\d)/g;class $T{constructor(t,n,i){this.data=t,this.term=n,this.strategy=i}getReplacementData(t){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(t);if(o==null||o.index==null)return null;const a=n.replace(wT,o[0]).replace(xT,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(t,n){const i=this.getReplacementData(t);if(i!==null)return n=i.afterCursor+n,[[t.slice(0,i.start),i.beforeCursor,t.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}bo.SearchResult=$T;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Strategy=e.DEFAULT_INDEX=void 0;const t=bo;e.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:e.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(p=>new t.SearchResult(p,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}e.Strategy=n})(Rd);Object.defineProperty(mo,"__esModule",{value:!0});mo.Completer=void 0;const ET=Sl,kT=Rd;class CT extends ET.EventEmitter{constructor(t){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=t.map(n=>new kT.Strategy(n))}destroy(){return this.strategies.forEach(t=>t.destroy()),this}run(t){for(const n of this.strategies)if(n.execute(t,this.handleQueryResult))return;this.handleQueryResult([])}}mo.Completer=CT;var Od={},vs={};Object.defineProperty(vs,"__esModule",{value:!0});vs.createCustomEvent=void 0;const ST=typeof window<"u"&&!!window.CustomEvent,TT=(e,t)=>{if(ST)return new CustomEvent(e,t);const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,t?.cancelable||!1,t?.detail||void 0),n};vs.createCustomEvent=TT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Dropdown=e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=e.DEFAULT_DROPDOWN_CLASS_NAME=e.DEFAULT_DROPDOWN_PLACEMENT=e.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const t=Sl,n=vs;e.DEFAULT_DROPDOWN_MAX_COUNT=10,e.DEFAULT_DROPDOWN_PLACEMENT="auto",e.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends t.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||e.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||e.DEFAULT_DROPDOWN_MAX_COUNT).map((f,p)=>{var g;return new o(this,p,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const p=this.option.placement||e.DEFAULT_DROPDOWN_PLACEMENT;if(p==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}p==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(p=>p.data)):d||"",this.el.appendChild(f),this}}e.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=m=>{m.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const p=document.createElement("li");p.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),p.appendChild(g),p.addEventListener("click",this.onClick),this.el=p}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Od);var Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.Editor=void 0;const AT=Sl,ma=vs;class IT extends AT.EventEmitter{destroy(){return this}applySearchResult(t){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(t){const n=(0,ma.createCustomEvent)("move",{cancelable:!0,detail:{code:t}});return this.emit("move",n),n}emitEnterEvent(){const t=(0,ma.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",t),t}emitChangeEvent(){const t=(0,ma.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",t),t}emitEscEvent(){const t=(0,ma.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",t),t}getCode(t){return t.keyCode===9||t.keyCode===13?"ENTER":t.keyCode===27?"ESC":t.keyCode===38?"UP":t.keyCode===40||t.keyCode===78&&t.ctrlKey?"DOWN":t.keyCode===80&&t.ctrlKey?"UP":"OTHER"}}Tl.Editor=IT;var Al={};Object.defineProperty(Al,"__esModule",{value:!0});Al.Textcomplete=void 0;const RT=Sl,OT=Od,LT=mo,PT=["show","shown","render","rendered","selected","hidden","hide"];class MT extends RT.EventEmitter{constructor(t,n,i){super(),this.editor=t,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new LT.Completer(n),this.dropdown=OT.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(t=!0){return this.completer.destroy(),this.dropdown.destroy(),t&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(t){return this.isQueryInFlight?this.nextPendingQuery=t:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(t)),this}startListening(){var t;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of PT)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.addEventListener("resize",this.handleResize)}stopListening(){var t;(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Al.Textcomplete=MT;(function(e){var t=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(mo,e),n(Od,e),n(Tl,e),n(bo,e),n(Rd,e),n(Al,e),n(vs,e)})(Id);var dm={},Il={};function fm(e,t,n){const i=e.value,o=t+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),e.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(e.focus(),!document.execCommand("insertText",!1,d)){e.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),e.dispatchEvent(f)}return e.setSelectionRange(t.length,t.length),a.focus(),e}function BT(e,t,n){const i=e.selectionEnd,o=e.value.substr(0,e.selectionStart)+t,a=e.value.substring(e.selectionStart,i)+(n||"")+e.value.substr(i);return fm(e,o,a),e.selectionEnd=i+t.length,e}const jT=Object.freeze(Object.defineProperty({__proto__:null,update:fm,wrapCursor:BT},Symbol.toStringTag,{value:"Module"})),NT=oo(jT);var hm={exports:{}};(function(e){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var p=document.createElement("div");p.id="input-textarea-caret-position-mirror-div",document.body.appendChild(p);var g=p.style,m=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,_=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",_||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),t.forEach(function(x){_&&x==="lineHeight"?g.lineHeight=m.height:g[x]=m[x]}),i?a.scrollHeight>parseInt(m.height)&&(g.overflowY="scroll"):g.overflow="hidden",p.textContent=a.value.substring(0,l),_&&(p.textContent=p.textContent.replace(/\s/g," "));var w=document.createElement("span");w.textContent=a.value.substring(l)||".",p.appendChild(w);var $={top:w.offsetTop+parseInt(m.borderTopWidth),left:w.offsetLeft+parseInt(m.borderLeftWidth),height:parseInt(m.lineHeight)};return d?w.style.backgroundColor="#aaa":document.body.removeChild(p),$}e.exports=o})()})(hm);var DT=hm.exports,pm={},Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.calculateElementOffset=void 0;const UT=e=>{const t=e.getBoundingClientRect(),n=e.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:t.top+i.pageYOffset,left:t.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Rl.calculateElementOffset=UT;var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.getLineHeightPx=void 0;const zT="0".charCodeAt(0),HT="9".charCodeAt(0),j0=e=>zT<=e&&e<=HT,FT=e=>{const t=getComputedStyle(e),n=t.lineHeight;if(j0(n.charCodeAt(0))){const i=parseFloat(n);return j0(n.charCodeAt(n.length-1))?i*parseFloat(t.fontSize):i}return qT(e.nodeName,t)};Ol.getLineHeightPx=FT;const qT=(e,t)=>{const n=document.body;if(!n)return 0;const i=document.createElement(e);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:t.fontSize,fontFamily:t.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Ll={};Object.defineProperty(Ll,"__esModule",{value:!0});Ll.isSafari=void 0;const WT=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Ll.isSafari=WT;(function(e){var t=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(Rl,e),n(Ol,e),n(Ll,e)})(pm);var ZT=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Il,"__esModule",{value:!0});Il.TextareaEditor=void 0;const VT=NT,KT=ZT(DT),N0=Id,D0=pm;class GT extends N0.Editor{constructor(t){super(),this.el=t,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(t){const n=this.getBeforeCursor();if(n!=null){const i=t.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,VT.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,N0.createCustomEvent)("input")))}}getCursorOffset(){const t=(0,D0.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,D0.getLineHeightPx)(this.el),a=t.top-n.top+i.top+o,l=t.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,KT.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}Il.TextareaEditor=GT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.TextareaEditor=void 0;var t=Il;Object.defineProperty(e,"TextareaEditor",{enumerable:!0,get:function(){return t.TextareaEditor}})})(dm);const QT=j('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),YT=()=>{const{searchEmojis:e}=et(),[t,n]=ke();return di(()=>{const i=t();if(i==null)return;const o=new dm.TextareaEditor(i),a=new Id.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(e(l))},template:l=>(()=>{const d=QT(),f=d.firstChild,p=f.nextSibling;return R(p,()=>l.shortcode),De(g=>{const m=l.url,_=l.shortcode;return m!==g._v$&&Ge(f,"src",g._v$=m),_!==g._v$2&&Ge(f,"alt",g._v$2=_),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});jr(()=>{a.destroy()})}),{elementRef:n}},JT=e=>Math.floor(+e/1e3),ri=()=>JT(new Date),XT=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),eA=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...f,...p]},Pl=()=>{const e=$d(),t=async(d,f)=>{const p={...f};if(p.id=ml(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async m=>{const w=(await e().ensureRelay(m)).publish(g);return XT(w,m)})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:p,content:g}=d,m=eA(d),_={kind:1,pubkey:p,created_at:ri(),tags:m,content:g};return t(f,_)},publishReaction:async({relayUrls:d,pubkey:f,eventId:p,reactionTypes:g,notifyPubkey:m})=>{const _=[["e",p,""],["p",m]];g.type==="CustomEmoji"&&_.push(["emoji",g.shortcode,g.url]);const w={kind:7,pubkey:f,created_at:ri(),tags:_,content:g.content};return t(d,w)},publishRepost:async({relayUrls:d,pubkey:f,eventId:p,notifyPubkey:g})=>{const m={kind:6,pubkey:f,created_at:ri(),tags:[["e",p,""],["p",g]],content:""};return t(d,m)},updateProfile:async({relayUrls:d,pubkey:f,profile:p,otherProperties:g})=>{const m={...p,...g},_={kind:vt.Metadata,pubkey:f,created_at:ri(),tags:[],content:JSON.stringify(m)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:f,followingPubkeys:p,content:g})=>{const m=p.map(w=>["p",w]),_={kind:vt.Contacts,pubkey:f,created_at:ri(),tags:m,content:g};return t(d,_)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:p})=>{const g={kind:vt.EventDeletion,pubkey:f,created_at:ri(),tags:[["e",p,""]],content:""};return t(d,g)}}};let hu=!1;const[ba,tA]=ke(void 0),Wr=()=>(hr(()=>{if(ba()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),ba()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&ba()==null&&!hu&&(hu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),tA(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{hu=!1})),e+=1},200)}),ba),nA=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json(),o=new URL(i);return o.protocol="https:",{imageUrl:o.toString()}},rA=e=>t=>Promise.allSettled(t.map(n=>e(n))),iA=j("<div>に返信"),sA=j('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),oA=j('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),aA=j('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),lA=j('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),cA=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},uA=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},dA=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},gm=e=>{let t,n;const{elementRef:i}=YT(),[o,a]=ke(""),[l,u]=ke(!1),[d,f]=ke(""),p=te=>a(he=>`${he} ${te}`),g=()=>{a(""),f(""),u(!1)},m=()=>{t?.blur(),g(),e.onClose()},{config:_,getEmoji:w}=et(),$=Wr(),x=Pl(),C=()=>e.replyTo&&xd(e.replyTo),A=()=>e.mode??"normal",k=fi({mutationKey:["publishTextNote"],mutationFn:x.publishTextNote.bind(x),onSuccess:()=>{console.log("succeeded to post"),g(),e.onPost?.()},onError:te=>{console.error("error",te)}}),E=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},I=fi({mutationKey:["uploadFiles"],mutationFn:async te=>{const he=await rA(nA)(te),pe=[];if(he.forEach((Le,Q)=>{Le.status==="fulfilled"?(p(Le.value.imageUrl),E()):pe.push(te[Q])}),pe.length>0){const Le=pe.map(Q=>Q.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${Le}`)}}}),L=Fe(()=>{const te=$();return C()?.taggedPubkeys()?.filter(he=>he!==te)??[]}),B=Fe(()=>e.replyTo==null?[]:Pr([e.replyTo.pubkey,...L()])),U=te=>{const he=[];return te.forEach(pe=>{const Le=w(pe);Le!=null&&he.push(["emoji",pe,Le.url])}),he},ne=()=>{if(o().length===0||k.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(o())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const te=$();if(te==null){console.error("pubkey is not available");return}const he=yv(o()),{hashtags:pe,urlReferences:Le,pubkeyReferences:Q,eventReferences:de,emojis:G}=uA(he),oe=dA(he),ve=U(G);let N={relayUrls:_().relayUrls,pubkey:te,content:oe,notifyPubkeys:Q,mentionEventIds:de,hashtags:pe,urls:Le,tags:ve};C()!=null&&(N={...N,notifyPubkeys:Pr([...B(),...Q]),rootEventId:C()?.rootEvent()?.id??C()?.replyingToEvent()?.id,replyEventId:C()?.id}),l()&&(N={...N,contentWarning:d()}),k.mutate(N),m()},W=te=>{a(te.currentTarget.value),E()},J=te=>{te.preventDefault(),ne()},V=te=>{te.key==="Enter"&&(te.ctrlKey||te.metaKey)?ne():te.key==="Escape"&&(t?.blur(),m())},Y=te=>{if(te.preventDefault(),I.isLoading)return;const he=[...te.currentTarget.files??[]];I.mutate(he),te.currentTarget.value=""},re=te=>{if(te.preventDefault(),I.isLoading)return;const he=[...te?.dataTransfer?.files??[]];I.mutate(he)},q=te=>{if(I.isLoading)return;const he=[...te?.clipboardData?.items??[]],pe=[];he.forEach(Le=>{if(Le.kind==="file"){te.preventDefault();const Q=Le.getAsFile();if(Q==null)return;pe.push(Q)}}),pe.length!==0&&I.mutate(pe)},ee=te=>{te.preventDefault()},ce=()=>o().trim().length===0||k.isLoading||I.isLoading,ge=()=>I.isLoading;return hr(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const te=lA(),he=te.firstChild,pe=he.firstChild,Le=pe.nextSibling,Q=Le.firstChild,de=Q.nextSibling,G=de.nextSibling,oe=Le.nextSibling;R(te,T(fe,{get when(){return e.replyTo!=null},get children(){const N=iA(),Ee=N.firstChild;return R(N,T(Ht,{get each(){return B()},children:(tt,ht)=>[T(Ed,{pubkey:tt}),T(fe,{get when(){return ht()!==B().length-1},children:" と "})]}),Ee),N}}),he),he.addEventListener("submit",J),R(he,T(fe,{get when(){return l()},get children(){const N=sA();return N.$$input=Ee=>f(Ee.currentTarget.value),De(()=>N.value=d()),N}}),pe),pe.addEventListener("paste",q),pe.addEventListener("drop",re),pe.addEventListener("dragover",ee),pe.$$keydown=V,pe.$$input=W,dr(N=>{t=N,e.textAreaRef?.(N),i(N)},pe),R(Le,T(fe,{get when(){return A()==="reply"},get children(){const N=oA(),Ee=N.firstChild;return Ee.$$click=()=>m(),R(Ee,T(ns,{})),N}}),Q),R(Le,T(om,{customEmojis:!0,onEmojiSelect:N=>p(N),get children(){const N=aA();return R(N,T(cm,{})),N}}),Q),Q.$$click=()=>u(N=>!N),de.$$click=()=>n?.click(),R(de,T(bT,{})),R(G,T(_T,{})),oe.addEventListener("change",Y);const ve=n;return typeof ve=="function"?dr(ve,oe):n=oe,De(N=>{const Ee=cA(A()),tt=!l(),ht=!!l(),it=A()==="normal",Pe=A()==="normal",ze=A()==="reply",Ct=A()==="reply",yn=!!ge(),ct=!ge(),gr=A()==="normal",wi=A()==="normal",Pn=A()==="reply",bt=A()==="reply",_n=ge(),Mn=!!ce(),xi=!ce(),xe=A()==="normal",Gn=A()==="normal",Yt=A()==="reply",Wt=A()==="reply",wn=ce();return Ee!==N._v$&&Ge(pe,"placeholder",N._v$=Ee),tt!==N._v$2&&Q.classList.toggle("bg-rose-300",N._v$2=tt),ht!==N._v$3&&Q.classList.toggle("bg-rose-400",N._v$3=ht),it!==N._v$4&&Q.classList.toggle("h-8",N._v$4=it),Pe!==N._v$5&&Q.classList.toggle("w-8",N._v$5=Pe),ze!==N._v$6&&Q.classList.toggle("h-7",N._v$6=ze),Ct!==N._v$7&&Q.classList.toggle("w-7",N._v$7=Ct),yn!==N._v$8&&de.classList.toggle("bg-primary-disabled",N._v$8=yn),ct!==N._v$9&&de.classList.toggle("bg-primary",N._v$9=ct),gr!==N._v$10&&de.classList.toggle("h-8",N._v$10=gr),wi!==N._v$11&&de.classList.toggle("w-8",N._v$11=wi),Pn!==N._v$12&&de.classList.toggle("h-7",N._v$12=Pn),bt!==N._v$13&&de.classList.toggle("w-7",N._v$13=bt),_n!==N._v$14&&(de.disabled=N._v$14=_n),Mn!==N._v$15&&G.classList.toggle("bg-primary-disabled",N._v$15=Mn),xi!==N._v$16&&G.classList.toggle("bg-primary",N._v$16=xi),xe!==N._v$17&&G.classList.toggle("h-8",N._v$17=xe),Gn!==N._v$18&&G.classList.toggle("w-8",N._v$18=Gn),Yt!==N._v$19&&G.classList.toggle("h-7",N._v$19=Yt),Wt!==N._v$20&&G.classList.toggle("w-7",N._v$20=Wt),wn!==N._v$21&&(G.disabled=N._v$21=wn),N},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),De(()=>pe.value=o()),te})()};mt(["input","keydown","click"]);const fA=2,hA=()=>{let e;const[t,n]=ke(!1),i=o=>{e=o};return hr(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+fA)}),{overflow:t,elementRef:i}},pA=j('<div class="author-name truncate pr-1 font-bold hover:underline">'),gA=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),vA=j('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),mA=j('<img alt="icon" class="h-full w-full rounded object-cover">'),bA=e=>{const t=Rt(),{overflow:n,elementRef:i}=hA(),o=Tv(),[a,l]=ke(),u=()=>o(e.createdAt),d=()=>e.createdAt.toLocaleString(),{profile:f}=gs(()=>({pubkey:e.authorPubkey}));return(()=>{const p=vA(),g=p.firstChild,m=g.firstChild,_=m.nextSibling,w=_.firstChild,$=w.firstChild,x=$.firstChild,C=x.firstChild,A=$.nextSibling,k=A.firstChild,E=w.nextSibling,I=E.nextSibling;return m.$$click=L=>{L.preventDefault(),e.onShowProfile?.()},R(m,T(fe,{get when(){return f()?.picture},keyed:!0,children:L=>(()=>{const B=mA();return Ge(B,"src",L),B})()})),$.$$click=L=>{L.preventDefault(),e?.onShowProfile?.()},R(x,T(fe,{get when(){return(f()?.display_name?.length??0)>0},get children(){const L=pA();return R(L,()=>f()?.display_name),L}}),C),R(C,T(fe,{get when(){return f()?.name!=null},get fallback(){return`@${go(e.authorPubkey)}`},get children(){return["@",Fe(()=>f()?.name)]}})),k.$$click=L=>{L.preventDefault(),e.onShowEvent?.()},R(k,u),dr(i,E),R(E,()=>e.content),R(_,T(fe,{get when(){return n()},get children(){const L=gA();return L.$$click=B=>{B.stopPropagation(),l(U=>!U)},R(L,T(fe,{get when(){return!a()},get fallback(){return t()("post.hideOverflow")},get children(){return t()("post.showOverflow")}})),L}}),I),R(I,()=>e.actions),R(p,T(fe,{get when(){return e.footer},get children(){return e.footer}}),null),De(L=>{const B=d(),U=!a();return B!==L._v$&&Ge(k,"title",L._v$=B),U!==L._v$2&&E.classList.toggle("max-h-screen",L._v$2=U),L},{_v$:void 0,_v$2:void 0}),p})()};mt(["click"]);const yA=U4(),_A=()=>z4(yA),TH=()=>{const[e,t]=Vi({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},wA=/\p{Emoji_Presentation}/u,xA=e=>{const{shouldMuteEvent:t}=et(),n=rs(),i=Fe(e),o=Fe(()=>["useReactions",i()]),a=is(o,kv({taskProvider:([,g])=>{if(g==null)return null;const{eventId:m}=g;return new hs({type:"Reactions",mentionedEventId:m})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(m=>!t(m));return{reactions:l,reactionsGrouped:()=>{const g=new Map;return l().forEach(m=>{const _=Za(m).isCustomEmoji()?`${m.content}${Za(m).getUrl()??""}`:m.content,w=g.get(_)??[];w.push(m),g.set(_,w)}),g},isReactedBy:g=>l().findIndex(m=>m.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(m=>m.pubkey===g&&wA.test(m.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},$A=e=>{const{shouldMuteEvent:t}=et(),n=rs(),i=Fe(e),o=Fe(()=>["useReposts",i()]),a=is(o,kv({taskProvider:([,f])=>{if(f==null)return null;const{eventId:p}=f;return new hs({type:"Reposts",mentionedEventId:p})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!t(p));return{reposts:l,isRepostedBy:f=>l().findIndex(p=>p.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},EA=j('<div class="flex gap-2 overflow-x-auto py-1">'),kA=j('<span class="ml-1 text-sm">'),CA=j('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),SA=j('<span class="text-red-500">'),TA=j('<div class="nostr-textnote">'),AA=j('<div class="text-xs">'),IA=j('<div class="content whitespace-pre-wrap break-all">'),RA=j('<div class="textnote-content">'),OA=j('<div class="mt-1 rounded border p-1">'),LA=j('<button class="pr-1 text-blue-500 hover:underline">'),U0=j('<div class="text-sm text-zinc-400">'),PA=j('<span class="inline-block h-4 w-4">'),MA=j('<div class="flex shrink-0 items-center gap-1">'),BA=j('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),jA=j('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),NA=j('<div class="w-6">'),{noteEncode:DA}=ho,UA=e=>{const{config:t}=et(),n=Wr();return(()=>{const i=EA();return R(i,T(Ht,{get each(){return[...e.reactionsGrouped.entries()]},children:([,o])=>{const a=o.findIndex(u=>u.pubkey===n())>=0,l=Za(o[0]).toReactionTypes();return(()=>{const u=CA();return u.$$click=()=>e.onReaction(l),R(u,T(Pv,{reactionTypes:l}),null),R(u,T(fe,{get when(){return!t().hideCount},get children(){const d=kA();return R(d,()=>o.length),d}}),null),De(d=>_a(u,{"text-zinc-400":!a,"hover:bg-zinc-50":!a,"bg-rose-50":a,"border-rose-200":a,"text-rose-400":a},d)),u})()}})),i})()},zA=e=>{const t=Rt(),{config:n}=et(),i=Wr(),{showProfile:o}=qr(),a=_A(),[l,u]=ke(!1),[d,f]=ke(!1),[p,g]=ke(!1),[m,_]=ke(null),w=()=>g(!1),$=()=>_(null),x=Fe(()=>xd(e.event)),C=()=>e.embedding??!0,A=()=>e.actions??!0,{reactions:k,reactionsGrouped:E,isReactedBy:I,isReactedByWithEmoji:L,invalidateReactions:B,query:U}=xA(()=>({eventId:e.event.id})),{reposts:ne,isRepostedBy:W,invalidateReposts:J,query:V}=$A(()=>({eventId:e.event.id})),Y=Pl(),re=fi({mutationKey:["publishReaction",x().id],mutationFn:Y.publishReaction.bind(Y),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:G=>{console.error("failed to publish reaction: ",G)},onSettled:()=>{B().then(()=>U.refetch()).catch(G=>console.error("failed to refetch reactions",G))}}),q=fi({mutationKey:["publishRepost",x().id],mutationFn:Y.publishRepost.bind(Y),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:G=>{console.error("failed to publish repost: ",G)},onSettled:()=>{J().then(()=>V.refetch()).catch(G=>console.error("failed to refetch reposts",G))}}),ee=fi({mutationKey:["deleteEvent",x().id],mutationFn:(...G)=>Y.deleteEvent(...G).then(oe=>Promise.allSettled(oe.map(ps(1e4)))),onSuccess:G=>{const oe=G.filter(N=>N.status==="fulfilled").length,ve=G.length-oe;oe===G.length?window.alert(t()("post.deletedSuccessfully")):oe>0?window.alert(t()("post.failedToDeletePartially",{count:ve})):window.alert(t()("post.failedToDelete"))},onError:G=>{console.error("failed to delete",G)}}),ce=[{content:()=>t()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(DA(e.event.id)).catch(G=>window.alert(G))}},{content:()=>t()("post.showJSON"),onSelect:()=>{_("EventDebugModal")}},{content:()=>t()("post.showReposts"),onSelect:()=>{_("Reposts")}},{content:()=>t()("post.showReactions"),onSelect:()=>{_("Reactions")}},{when:()=>x().pubkey===i(),content:()=>(()=>{const G=SA();return R(G,()=>t()("post.deletePost")),G})(),onSelect:()=>{const G=i();G!=null&&window.confirm(t()("post.confirmDelete"))&&ee.mutate({relayUrls:n().relayUrls,pubkey:G,eventId:x().id})}}],ge=Fe(()=>{const G=i();return G!=null&&I(G)||l()}),te=Fe(()=>{const G=i();return G!=null&&L(G)}),he=Fe(()=>{const G=i();return G!=null&&W(G)||d()}),pe=()=>{if(C()){const G=x().replyingToEvent();if(G!=null&&!x().containsEventMention(G.id))return G.id;const oe=x().rootEvent();if(G==null&&oe!=null&&!x().containsEventMention(oe.id))return oe.id}},Le=G=>{G.stopPropagation(),!he()&&bn([i(),e.event.id])(([oe,ve])=>{q.mutate({relayUrls:n().relayUrls,pubkey:oe,eventId:ve,notifyPubkey:e.event.pubkey}),f(!0)})},Q=G=>{ge()||bn([i(),e.event.id])(([oe,ve])=>{re.mutate({relayUrls:n().relayUrls,pubkey:oe,reactionTypes:G??{type:"LikeDislike",content:"+"},eventId:ve,notifyPubkey:e.event.pubkey}),u(!0)})},de=G=>{G.stopPropagation(),Q()};return(()=>{const G=TA();return R(G,T(bA,{get authorPubkey(){return x().pubkey},get createdAt(){return x().createdAtAsDate()},get content(){return(()=>{const oe=RA();return R(oe,T(fe,{get when(){return pe()},keyed:!0,children:ve=>(()=>{const N=OA();return R(N,T(so,{eventId:ve,actions:!1,embedding:!1})),N})()}),null),R(oe,T(fe,{get when(){return x().taggedPubkeys().length>0},get children(){const ve=AA();return R(ve,()=>t()("post.replyToPre"),null),R(ve,T(Ht,{get each(){return x().taggedPubkeys()},children:N=>(()=>{const Ee=LA();return Ee.$$click=tt=>{tt.stopPropagation(),o(N)},R(Ee,T(am,{pubkey:N})),Ee})()}),null),R(ve,()=>t()("post.replyToPost"),null),ve}}),null),R(oe,T(RS,{get contentWarning(){return x().contentWarning()},get children(){const ve=IA();return R(ve,T(JS,{get event(){return e.event},get embedding(){return C()}})),ve}}),null),oe})()},get actions(){return T(fe,{get when(){return A()},get children(){return[T(fe,{get when(){return Fe(()=>!!n().showEmojiReaction)()&&k().length>0},get children(){return T(UA,{get reactionsGrouped(){return E()},onReaction:Q})}}),(()=>{const oe=jA(),ve=oe.firstChild,N=ve.nextSibling,Ee=N.firstChild,tt=N.nextSibling,ht=tt.firstChild,it=tt.nextSibling;return ve.$$click=Pe=>{Pe.stopPropagation(),g(ze=>!ze)},R(ve,T(TC,{})),Ee.$$click=Le,R(Ee,T(iv,{})),R(N,T(fe,{get when(){return Fe(()=>!n().hideCount)()&&ne().length>0},get children(){const Pe=U0();return R(Pe,()=>ne().length),Pe}}),null),ht.$$click=de,R(ht,T(fe,{get when(){return Fe(()=>!!ge())()&&!te()},get fallback(){return T(Iv,{})},get children(){return T(Ov,{})}})),R(tt,T(fe,{get when(){return Fe(()=>!n().hideCount&&!n().showEmojiReaction)()&&k().length>0},get children(){const Pe=U0();return R(Pe,()=>k().length),Pe}}),null),R(oe,T(fe,{get when(){return n().useEmojiReaction},get children(){const Pe=MA();return R(Pe,T(om,{onEmojiSelect:ze=>Q({type:"Emoji",content:ze}),get children(){const ze=PA();return R(ze,T(Rv,{})),ze}})),De(ze=>_a(Pe,{"text-zinc-400":!ge()||!te(),"hover:text-rose-400":!ge()||!te(),"text-rose-400":ge()&&te()||re.isLoading},ze)),Pe}}),it),R(it,T(Lv,{menu:ce,get children(){const Pe=BA();return R(Pe,T(Av,{})),Pe}})),De(Pe=>{const ze={"text-zinc-400":!he(),"hover:text-green-400":!he(),"text-green-400":he()||q.isLoading},Ct=q.isLoading,yn={"text-zinc-400":!ge()||te(),"hover:text-rose-400":!ge()||te(),"text-rose-400":ge()&&!te()||re.isLoading},ct=re.isLoading;return Pe._v$=_a(N,ze,Pe._v$),Ct!==Pe._v$2&&(Ee.disabled=Pe._v$2=Ct),Pe._v$3=_a(tt,yn,Pe._v$3),ct!==Pe._v$4&&(ht.disabled=Pe._v$4=ct),Pe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),oe})()]}})},get footer(){return T(fe,{get when(){return p()},get children(){return T(gm,{mode:"reply",get replyTo(){return e.event},onClose:w,onPost:w})}})},onShowProfile:()=>{o(x().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:e.event})}}),null),R(G,T(Dn,{get children(){return[T(Ke,{get when(){return m()==="EventDebugModal"},get children(){return T(cT,{get event(){return e.event},onClose:$})}}),T(Ke,{get when(){return m()==="Reactions"},get children(){return T(Nu,{get data(){return k()},pubkeyExtractor:oe=>oe.pubkey,renderInfo:oe=>(()=>{const ve=NA();return R(ve,T(Pv,{get reactionTypes(){return Za(oe).toReactionTypes()}})),ve})(),onClose:$})}}),T(Ke,{get when(){return m()==="Reposts"},get children(){return T(Nu,{get data(){return ne()},pubkeyExtractor:oe=>oe.pubkey,onClose:$})}})]}}),null),G})()};mt(["click"]);const HA=e=>{const{shouldMuteEvent:t}=et();return T(fe,{get when(){return!t(e.event)},get children(){return T(zA,e)}})},FA=j("<span>予期しないイベント種別（<!>）"),qA=j("<span><span>未対応のイベント種別（<!>）"),vm=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return T(Dn,{get fallback(){return(()=>{const n=qA(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,R(i,()=>e.event.kind,a),R(n,T(Zs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[T(Ke,{get when(){return!t()},keyed:!0,get children(){const n=FA(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,R(n,()=>e.event.kind,o),R(n,T(Zs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),T(Ke,{get when(){return e.event.kind===vt.Text},get children(){return T(HA,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),T(Ke,{get when(){return e.event.kind===6},get children(){return T(CC,{get event(){return e.event}})}})]}})},WA=e=>{const{shouldMuteEvent:t}=et();return T(Ht,{get each(){return e.events},children:n=>T(fe,{get when(){return!t(n)},get children(){return T(g6,{get children(){return T(vm,{event:n})}})}})})};var ZA=ol;function VA(){this.__data__=new ZA,this.size=0}var KA=VA;function GA(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var QA=GA;function YA(e){return this.__data__.get(e)}var JA=YA;function XA(e){return this.__data__.has(e)}var eI=XA,tI=ol,nI=Gu,rI=Qu,iI=200;function sI(e,t){var n=this.__data__;if(n instanceof tI){var i=n.__data__;if(!nI||i.length<iI-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new rI(i)}return n.set(e,t),this.size=n.size,this}var oI=sI,aI=ol,lI=KA,cI=QA,uI=JA,dI=eI,fI=oI;function ms(e){var t=this.__data__=new aI(e);this.size=t.size}ms.prototype.clear=lI;ms.prototype.delete=cI;ms.prototype.get=uI;ms.prototype.has=dI;ms.prototype.set=fI;var Ld=ms;function hI(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var pI=hI,gI=zg,vI=pI,mI=Hg,bI=1,yI=2;function _I(e,t,n,i,o,a){var l=n&bI,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(e),p=a.get(t);if(f&&p)return f==t&&p==e;var g=-1,m=!0,_=n&yI?new gI:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var w=e[g],$=t[g];if(i)var x=l?i($,w,g,t,e,a):i(w,$,g,e,t,a);if(x!==void 0){if(x)continue;m=!1;break}if(_){if(!vI(t,function(C,A){if(!mI(_,A)&&(w===C||o(w,C,n,i,a)))return _.push(A)})){m=!1;break}}else if(!(w===$||o(w,$,n,i,a))){m=!1;break}}return a.delete(e),a.delete(t),m}var mm=_I,wI=Wn,xI=wI.Uint8Array,bm=xI;function $I(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var EI=$I,z0=ss,H0=bm,kI=Ku,CI=mm,SI=EI,TI=Yu,AI=1,II=2,RI="[object Boolean]",OI="[object Date]",LI="[object Error]",PI="[object Map]",MI="[object Number]",BI="[object RegExp]",jI="[object Set]",NI="[object String]",DI="[object Symbol]",UI="[object ArrayBuffer]",zI="[object DataView]",F0=z0?z0.prototype:void 0,pu=F0?F0.valueOf:void 0;function HI(e,t,n,i,o,a,l){switch(n){case zI:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case UI:return!(e.byteLength!=t.byteLength||!a(new H0(e),new H0(t)));case RI:case OI:case MI:return kI(+e,+t);case LI:return e.name==t.name&&e.message==t.message;case BI:case NI:return e==t+"";case PI:var u=SI;case jI:var d=i&AI;if(u||(u=TI),e.size!=t.size&&!d)return!1;var f=l.get(e);if(f)return f==t;i|=II,l.set(e,t);var p=CI(u(e),u(t),i,o,a,l);return l.delete(e),p;case DI:if(pu)return pu.call(e)==pu.call(t)}return!1}var FI=HI;function qI(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Pd=qI,WI=Array.isArray,Kn=WI,ZI=Pd,VI=Kn;function KI(e,t,n){var i=t(e);return VI(e)?i:ZI(i,n(e))}var ym=KI;function GI(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var QI=GI;function YI(){return[]}var _m=YI,JI=QI,XI=_m,eR=Object.prototype,tR=eR.propertyIsEnumerable,q0=Object.getOwnPropertySymbols,nR=q0?function(e){return e==null?[]:(e=Object(e),JI(q0(e),function(t){return tR.call(e,t)}))}:XI,Md=nR;function rR(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var iR=rR;function sR(e){return e!=null&&typeof e=="object"}var Zr=sR,oR=os,aR=Zr,lR="[object Arguments]";function cR(e){return aR(e)&&oR(e)==lR}var uR=cR,W0=uR,dR=Zr,wm=Object.prototype,fR=wm.hasOwnProperty,hR=wm.propertyIsEnumerable,pR=W0(function(){return arguments}())?W0:function(e){return dR(e)&&fR.call(e,"callee")&&!hR.call(e,"callee")},Bd=pR,Xa={exports:{}};function gR(){return!1}var vR=gR;Xa.exports;(function(e,t){var n=Wn,i=vR,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;e.exports=f})(Xa,Xa.exports);var jd=Xa.exports,mR=9007199254740991,bR=/^(?:0|[1-9]\d*)$/;function yR(e,t){var n=typeof e;return t=t??mR,!!t&&(n=="number"||n!="symbol"&&bR.test(e))&&e>-1&&e%1==0&&e<t}var Nd=yR,_R=9007199254740991;function wR(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_R}var Dd=wR,xR=os,$R=Dd,ER=Zr,kR="[object Arguments]",CR="[object Array]",SR="[object Boolean]",TR="[object Date]",AR="[object Error]",IR="[object Function]",RR="[object Map]",OR="[object Number]",LR="[object Object]",PR="[object RegExp]",MR="[object Set]",BR="[object String]",jR="[object WeakMap]",NR="[object ArrayBuffer]",DR="[object DataView]",UR="[object Float32Array]",zR="[object Float64Array]",HR="[object Int8Array]",FR="[object Int16Array]",qR="[object Int32Array]",WR="[object Uint8Array]",ZR="[object Uint8ClampedArray]",VR="[object Uint16Array]",KR="[object Uint32Array]",rt={};rt[UR]=rt[zR]=rt[HR]=rt[FR]=rt[qR]=rt[WR]=rt[ZR]=rt[VR]=rt[KR]=!0;rt[kR]=rt[CR]=rt[NR]=rt[SR]=rt[DR]=rt[TR]=rt[AR]=rt[IR]=rt[RR]=rt[OR]=rt[LR]=rt[PR]=rt[MR]=rt[BR]=rt[jR]=!1;function GR(e){return ER(e)&&$R(e.length)&&!!rt[xR(e)]}var QR=GR;function YR(e){return function(t){return e(t)}}var Ud=YR,el={exports:{}};el.exports;(function(e,t){var n=jg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(el,el.exports);var zd=el.exports,JR=QR,XR=Ud,Z0=zd,V0=Z0&&Z0.isTypedArray,eO=V0?XR(V0):JR,xm=eO,tO=iR,nO=Bd,rO=Kn,iO=jd,sO=Nd,oO=xm,aO=Object.prototype,lO=aO.hasOwnProperty;function cO(e,t){var n=rO(e),i=!n&&nO(e),o=!n&&!i&&iO(e),a=!n&&!i&&!o&&oO(e),l=n||i||o||a,u=l?tO(e.length,String):[],d=u.length;for(var f in e)(t||lO.call(e,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||sO(f,d)))&&u.push(f);return u}var $m=cO,uO=Object.prototype;function dO(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||uO;return e===n}var Hd=dO;function fO(e,t){return function(n){return e(t(n))}}var Em=fO,hO=Em,pO=hO(Object.keys,Object),gO=pO,vO=Hd,mO=gO,bO=Object.prototype,yO=bO.hasOwnProperty;function _O(e){if(!vO(e))return mO(e);var t=[];for(var n in Object(e))yO.call(e,n)&&n!="constructor"&&t.push(n);return t}var wO=_O,xO=Dg,$O=Dd;function EO(e){return e!=null&&$O(e.length)&&!xO(e)}var km=EO,kO=$m,CO=wO,SO=km;function TO(e){return SO(e)?kO(e):CO(e)}var Ml=TO,AO=ym,IO=Md,RO=Ml;function OO(e){return AO(e,RO,IO)}var Cm=OO,K0=Cm,LO=1,PO=Object.prototype,MO=PO.hasOwnProperty;function BO(e,t,n,i,o,a){var l=n&LO,u=K0(e),d=u.length,f=K0(t),p=f.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var m=u[g];if(!(l?m in t:MO.call(t,m)))return!1}var _=a.get(e),w=a.get(t);if(_&&w)return _==t&&w==e;var $=!0;a.set(e,t),a.set(t,e);for(var x=l;++g<d;){m=u[g];var C=e[m],A=t[m];if(i)var k=l?i(A,C,m,t,e,a):i(C,A,m,e,t,a);if(!(k===void 0?C===A||o(C,A,n,i,a):k)){$=!1;break}x||(x=m=="constructor")}if($&&!x){var E=e.constructor,I=t.constructor;E!=I&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof I=="function"&&I instanceof I)&&($=!1)}return a.delete(e),a.delete(t),$}var jO=BO,NO=yi,DO=Wn,UO=NO(DO,"DataView"),zO=UO,HO=yi,FO=Wn,qO=HO(FO,"Promise"),WO=qO,ZO=yi,VO=Wn,KO=ZO(VO,"WeakMap"),GO=KO,Du=zO,Uu=Gu,zu=WO,Hu=Fg,Fu=GO,Sm=os,bs=Ug,G0="[object Map]",QO="[object Object]",Q0="[object Promise]",Y0="[object Set]",J0="[object WeakMap]",X0="[object DataView]",YO=bs(Du),JO=bs(Uu),XO=bs(zu),eL=bs(Hu),tL=bs(Fu),ii=Sm;(Du&&ii(new Du(new ArrayBuffer(1)))!=X0||Uu&&ii(new Uu)!=G0||zu&&ii(zu.resolve())!=Q0||Hu&&ii(new Hu)!=Y0||Fu&&ii(new Fu)!=J0)&&(ii=function(e){var t=Sm(e),n=t==QO?e.constructor:void 0,i=n?bs(n):"";if(i)switch(i){case YO:return X0;case JO:return G0;case XO:return Q0;case eL:return Y0;case tL:return J0}return t});var Bl=ii,gu=Ld,nL=mm,rL=FI,iL=jO,eg=Bl,tg=Kn,ng=jd,sL=xm,oL=1,rg="[object Arguments]",ig="[object Array]",ya="[object Object]",aL=Object.prototype,sg=aL.hasOwnProperty;function lL(e,t,n,i,o,a){var l=tg(e),u=tg(t),d=l?ig:eg(e),f=u?ig:eg(t);d=d==rg?ya:d,f=f==rg?ya:f;var p=d==ya,g=f==ya,m=d==f;if(m&&ng(e)){if(!ng(t))return!1;l=!0,p=!1}if(m&&!p)return a||(a=new gu),l||sL(e)?nL(e,t,n,i,o,a):rL(e,t,d,n,i,o,a);if(!(n&oL)){var _=p&&sg.call(e,"__wrapped__"),w=g&&sg.call(t,"__wrapped__");if(_||w){var $=_?e.value():e,x=w?t.value():t;return a||(a=new gu),o($,x,n,i,a)}}return m?(a||(a=new gu),iL(e,t,n,i,o,a)):!1}var cL=lL,uL=cL,og=Zr;function Tm(e,t,n,i,o){return e===t?!0:e==null||t==null||!og(e)&&!og(t)?e!==e&&t!==t:uL(e,t,n,i,Tm,o)}var Am=Tm,dL=Ld,fL=Am,hL=1,pL=2;function gL(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],f=e[d],p=u[1];if(l&&u[2]){if(f===void 0&&!(d in e))return!1}else{var g=new dL;if(i)var m=i(f,p,d,e,t,g);if(!(m===void 0?fL(p,f,hL|pL,i,g):m))return!1}}return!0}var vL=gL,mL=bi;function bL(e){return e===e&&!mL(e)}var Im=bL,yL=Im,_L=Ml;function wL(e){for(var t=_L(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,yL(o)]}return t}var xL=wL;function $L(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var Rm=$L,EL=vL,kL=xL,CL=Rm;function SL(e){var t=kL(e);return t.length==1&&t[0][2]?CL(t[0][0],t[0][1]):function(n){return n===e||EL(n,e,t)}}var TL=SL,AL=os,IL=Zr,RL="[object Symbol]";function OL(e){return typeof e=="symbol"||IL(e)&&AL(e)==RL}var Fd=OL,LL=Kn,PL=Fd,ML=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,BL=/^\w*$/;function jL(e,t){if(LL(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||PL(e)?!0:BL.test(e)||!ML.test(e)||t!=null&&e in Object(t)}var qd=jL,Om=Qu,NL="Expected a function";function Wd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(NL);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Wd.Cache||Om),n}Wd.Cache=Om;var DL=Wd,UL=DL,zL=500;function HL(e){var t=UL(e,function(i){return n.size===zL&&n.clear(),i}),n=t.cache;return t}var FL=HL,qL=FL,WL=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ZL=/\\(\\)?/g,VL=qL(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(WL,function(n,i,o,a){t.push(o?a.replace(ZL,"$1"):i||n)}),t}),KL=VL;function GL(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Zd=GL,ag=ss,QL=Zd,YL=Kn,JL=Fd,XL=1/0,lg=ag?ag.prototype:void 0,cg=lg?lg.toString:void 0;function Lm(e){if(typeof e=="string")return e;if(YL(e))return QL(e,Lm)+"";if(JL(e))return cg?cg.call(e):"";var t=e+"";return t=="0"&&1/e==-XL?"-0":t}var eP=Lm,tP=eP;function nP(e){return e==null?"":tP(e)}var rP=nP,iP=Kn,sP=qd,oP=KL,aP=rP;function lP(e,t){return iP(e)?e:sP(e,t)?[e]:oP(aP(e))}var ys=lP,cP=Fd,uP=1/0;function dP(e){if(typeof e=="string"||cP(e))return e;var t=e+"";return t=="0"&&1/e==-uP?"-0":t}var _s=dP,fP=ys,hP=_s;function pP(e,t){t=fP(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[hP(t[n++])];return n&&n==i?e:void 0}var jl=pP,gP=jl;function vP(e,t,n){var i=e==null?void 0:gP(e,t);return i===void 0?n:i}var mP=vP;function bP(e,t){return e!=null&&t in Object(e)}var yP=bP,_P=ys,wP=Bd,xP=Kn,$P=Nd,EP=Dd,kP=_s;function CP(e,t,n){t=_P(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=kP(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&EP(o)&&$P(l,o)&&(xP(e)||wP(e)))}var SP=CP,TP=yP,AP=SP;function IP(e,t){return e!=null&&AP(e,t,TP)}var RP=IP,OP=Am,LP=mP,PP=RP,MP=qd,BP=Im,jP=Rm,NP=_s,DP=1,UP=2;function zP(e,t){return MP(e)&&BP(t)?jP(NP(e),t):function(n){var i=LP(n,e);return i===void 0&&i===t?PP(n,e):OP(t,i,DP|UP)}}var HP=zP;function FP(e){return e}var Pm=FP;function qP(e){return function(t){return t?.[e]}}var WP=qP,ZP=jl;function VP(e){return function(t){return ZP(t,e)}}var KP=VP,GP=WP,QP=KP,YP=qd,JP=_s;function XP(e){return YP(e)?GP(JP(e)):QP(e)}var eM=XP,tM=TL,nM=HP,rM=Pm,iM=Kn,sM=eM;function oM(e){return typeof e=="function"?e:e==null?rM:typeof e=="object"?iM(e)?nM(e[0],e[1]):tM(e):sM(e)}var Vd=oM,aM=Vd,lM=qg;function cM(e,t){return e&&e.length?lM(e,aM(t)):[]}var uM=cM;const Mm=rl(uM),ug=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let ka=0;const{setActiveSubscriptions:dM}=xv();setInterval(()=>{dM(ka)},1e3);const Bm=e=>{const{config:t,shouldMuteEvent:n}=et(),i=$d(),[o,a]=ke([]);di(nl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),hr(()=>{console.debug("subscription mounted",e()?.debugId,e()),jr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const f=e()?.limit??50;a(p=>{const g=V1.insertEventIntoDescendingList(p,d).slice(0,f),m=Mm(g,_=>_.id);return m.length!==g.length&&console.warn("duplicated event",d),m})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:f,filters:p,options:g,onEvent:m,onEOSE:_,continuous:w=!0}=d,$=i().sub(f,p,g);let x=!0;ka+=1;let C=!1,A=!1;const k=[];$.on("event",L=>{m?.(L),!(d.clientEventFilter!=null&&!d.clientEventFilter(L))&&(A?l(L):(C=!0,k.push(L)))}),$.on("eose",()=>{_?.(),A=!0,a(ug(k)),w||($.unsub(),x&&(x=!1,ka-=1))});let E=!1;const I=setInterval(()=>{if(!E){if(E=!0,A){clearInterval(I),E=!1;return}C&&(C=!1,a(ug(k))),E=!1}},100);jr(()=>{console.debug("startSubscription: end"),$.unsub(),x&&(x=!1,ka-=1),clearInterval(I)})};return di(()=>{u()}),{events:o}},fM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),hM=(e={})=>(()=>{const t=fM();return Xe(t,e,!0,!0),t})(),jm=e=>{const t=()=>{const i=e();if(i==null)return[];const o=[];return ui(i).pTags().forEach(l=>{const[,u,d,f]=l,p={pubkey:u,petname:f};d!=null&&d.length>0&&(p.mainRelayUrl=d),o.push(p)}),o};return{followings:t,followingPubkeys:()=>t().map(i=>i.pubkey),data:e}},pM=async({pubkey:e},t)=>{const n=new hs({type:"Followings",pubkey:e});El({task:n,signal:t});const i=await n.latestEventPromise();return jm(()=>i)},dg=e=>{const t=rs(),n=Fe(e),i=()=>["useFollowings",n()],o=is(i,Ev({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new hs({type:"Followings",pubkey:u})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>t.invalidateQueries(i());return{...jm(()=>o.data),invalidateFollowings:a,query:o}},gM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),vM=(e={})=>(()=>{const t=gM();return Xe(t,e,!0,!0),t})(),mM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Nm=(e={})=>(()=>{const t=mM();return Xe(t,e,!0,!0),t})(),bM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Dm=(e={})=>(()=>{const t=bM();return Xe(t,e,!0,!0),t})(),yM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),_M=(e={})=>(()=>{const t=yM();return Xe(t,e,!0,!0),t})(),wM=j('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),xM=j('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),$M=j('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),EM=async()=>{const t=await(await fetch(Zu("packageInfo.json"))).text();return JSON.parse(t)},kM=e=>{const[t]=Lg(EM);return T(_i,{get onClose(){return e.onClose},get children(){const n=wM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,_=m.nextSibling;_.nextSibling;const w=g.nextSibling,$=w.nextSibling,x=$.nextSibling,C=x.nextSibling,A=C.nextSibling,k=A.nextSibling,E=k.nextSibling;return E.nextSibling,R(u,()=>t()?.self?.version,null),R(g,T(vo,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),_),R(E,()=>t()?.self.licenseText),R(n,T(Ht,{get each(){return t()?.packages??[]},fallback:"取得中",children:I=>[(()=>{const L=xM(),B=L.firstChild,U=B.nextSibling,ne=U.nextSibling,W=ne.nextSibling;return W.nextSibling,R(L,()=>I.name,B),R(L,()=>I.version,U),R(L,()=>I.licenseSpdx,W),L})(),(()=>{const L=$M();return R(L,()=>I.licenseText),L})()]}),null),De(()=>Ge(o,"src",Zu("images/rabbit_app_256.png"))),n}})},CM=j('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),SM=e=>{const t=Rt(),n=Wr(),{saveColumn:i}=et(),o=Ad(),a=()=>{e.onClose(),o({command:"moveToLastColumn"}).catch(m=>console.error(m))},l=()=>{bn([n()])(([m])=>{i(ov({pubkey:m}))}),a()},u=()=>{bn([n()])(([m])=>{i(av({pubkey:m}))}),a()},d=()=>{i(lv()),a()},f=()=>{i(_d({query:""})),a()},p=()=>{bn([n()])(([m])=>{i(cv({pubkey:m}))}),a()},g=()=>{bn([n()])(([m])=>{i(uv({pubkey:m}))}),a()};return T(_i,{get onClose(){return e.onClose},get children(){const m=CM(),_=m.firstChild,w=_.firstChild,$=_.nextSibling,x=$.firstChild,C=$.nextSibling,A=C.firstChild,k=C.nextSibling,E=k.firstChild,I=k.nextSibling,L=I.firstChild,B=I.nextSibling,U=B.firstChild;return _.$$click=()=>l(),R(w,T(hM,{})),R(_,()=>t()("column.home"),null),$.$$click=()=>u(),R(x,T(vM,{})),R($,()=>t()("column.notification"),null),C.$$click=()=>d(),R(A,T(Dm,{})),R(C,()=>t()("column.japanese"),null),k.$$click=()=>f(),R(E,T(_M,{})),R(k,()=>t()("column.search"),null),I.$$click=()=>p(),R(L,T(Nm,{})),R(I,()=>t()("column.myPosts"),null),B.$$click=()=>g(),R(U,T(Iv,{})),R(B,()=>t()("column.myReactions"),null),m}})};mt(["click"]);const TM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),AM=(e={})=>(()=>{const t=TM();return Xe(t,e,!0,!0),t})(),IM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),RM=(e={})=>(()=>{const t=IM();return Xe(t,e,!0,!0),t})(),OM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),LM=(e={})=>(()=>{const t=OM();return Xe(t,e,!0,!0),t})();function PM(e){const{config:t}=et(),n=Fe(e),{events:i}=Bm(()=>({relayUrls:t().relayUrls,filters:[{kinds:[vt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>Pr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const MM=e=>{const t=Fe(e),n=is(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return tv.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},BM=(e,...t)=>{const n=String.raw(e,t),i=[],o=n.split(`
`);for(let a=0;a<o.length;a+=1){const u=o[a].trimStart();(i.length>0||u.length>0)&&i.push(u)}for(;i.length>0&&!(i[i.length-1].length>0);)i.pop();return i.join(`
`)},jM=j('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),fg=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),NM=j('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),DM=j('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),UM=j('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),hg=j('<div class="shrink-0 text-xs">'),zM=j('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),HM=j('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),FM=j('<div class="truncate text-xl font-bold">'),qM=j('<div class="truncate text-xs">@'),WM=j('<span class="inline-block h-3 w-3">'),ZM=j('<span class="inline-block h-4 w-4 text-blue-400">'),VM=j('<div class="flex items-center text-xs">'),KM=j('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),GM=j('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),QM=j('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),YM=j('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),JM=j('<ul class="border-t px-5 py-2 text-xs">'),XM=j('<ul class="border-t p-1">'),eB=j('<div class="h-12 shrink-0">'),tB=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),nB=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),rB=j('<span class="inline-block h-4 w-4 text-rose-500">'),iB=j('<span class="text-sm">読み込み中'),sB=j('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),oB=j('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),aB=e=>{const{count:t}=PM(()=>({pubkey:e.pubkey}));return Fe(t)},lB=e=>{const t=Rt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=et(),l=Pl(),u=Wr(),{showProfileEdit:d}=qr(),f=Fe(()=>go(e.pubkey)),[p,g]=ke(!1),[m,_]=ke(!1),[w,$]=ke(!1),[x,C]=ke(null),A=()=>C(null),{profile:k,query:E}=gs(()=>({pubkey:e.pubkey})),{verification:I,query:L}=MM(()=>bn([k()?.nip05])(([Q])=>({nip05:Q}))),B=()=>{const Q=k()?.nip05;if(Q==null)return null;const[de,G]=Q.split("@");return G==null?null:de==="_"?{domain:G,ident:G}:{user:de,domain:G,ident:Q}},U=()=>I()?.pubkey===e.pubkey,ne=()=>a(e.pubkey),{followingPubkeys:W,invalidateFollowings:J,query:V}=dg(()=>bn([u()])(([Q])=>({pubkey:Q}))),Y=()=>W().includes(e.pubkey),{followingPubkeys:re,query:q}=dg(()=>({pubkey:e.pubkey})),ee=()=>{const Q=u();return Q!=null&&re().includes(Q)},ce=fi({mutationKey:["updateContacts"],mutationFn:(...Q)=>l.updateContacts(...Q).then(de=>Promise.allSettled(de.map(ps(5e3)))),onSuccess:Q=>{const de=Q.filter(oe=>oe.status==="fulfilled").length,G=Q.length-de;de===Q.length?console.log("succeeded to update contacts"):de>0?console.log(`succeeded to update contacts for ${de} relays but failed for ${G} relays`):console.error("failed to update contacts")},onError:Q=>{console.error("failed to update contacts: ",Q)},onSettled:()=>{J().then(()=>V.refetch()).catch(Q=>console.error("failed to refetch contacts",Q))}}),ge=async Q=>{try{const de=u();if(de==null)return;g(!0);const G=W(),oe=await pM({pubkey:de}),ve=BM`
        フォローリストが空のようです。初めてのフォローであれば問題ありません。
        そうでなければ、リレーとの接続がうまくいっていない可能性があります。ページを再読み込みしてリレーと再接続してください。
        また、他のクライアントと同じリレーを設定できているどうかご確認ください。

        続行しますか？
      `;if((oe.data()==null||oe.followingPubkeys().length===0)&&!window.confirm(ve))return;if((oe?.data()?.created_at??0)<(V.data?.created_at??0)){window.alert("最新のフォローリストを取得できませんでした。リレーの接続状況が悪い可能性があります。");return}await ce.mutateAsync({relayUrls:n().relayUrls,pubkey:de,content:oe.data()?.content??"",followingPubkeys:Pr(Q(oe.followingPubkeys()))})}catch(de){console.error("failed to update contact list",de),window.alert("フォローリストの更新に失敗しました。")}finally{g(!1)}},te=()=>{ge(Q=>[...Q,e.pubkey]).catch(Q=>{console.log("failed to follow",Q)})},he=()=>{window.confirm("本当にフォロー解除しますか？")&&ge(Q=>Q.filter(de=>de!==e.pubkey)).catch(Q=>{console.log("failed to unfollow",Q)})},pe=[{content:()=>t()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(f()).catch(Q=>window.alert(Q))}},{content:()=>ne()?t()("profile.unmute"):t()("profile.mute"),onSelect:()=>{ne()?o(e.pubkey):i(e.pubkey)}},{when:()=>e.pubkey===u(),content:()=>Y()?t()("profile.unfollowMyself"):t()("profile.followMyself"),onSelect:()=>{Y()?he():te()}}],{events:Le}=Bm(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:ri()}],continuous:!1}));return T(_i,{onClose:()=>e.onClose?.(),get children(){return[T(fe,{get when(){return Fe(()=>!!E.isFetched)()&&k()?.banner},get fallback(){return eB()},keyed:!0,children:Q=>(()=>{const de=tB(),G=de.firstChild;return Ge(G,"src",Q),de})()}),(()=>{const Q=HM(),de=Q.firstChild,G=de.firstChild;return R(G,T(fe,{get when(){return Fe(()=>!!E.isFetched)()&&k()?.picture},keyed:!0,children:oe=>(()=>{const ve=nB();return Ge(ve,"src",oe),ve})()})),R(Q,T(fe,{get when(){return u()!=null},get children(){const oe=zM(),ve=oe.firstChild;return R(ve,T(Dn,{get children(){return[T(Ke,{get when(){return e.pubkey===u()},get children(){const N=jM();return N.$$click=()=>d(),R(N,()=>t()("profile.editProfile")),N}}),T(Ke,{get when(){return ce.isLoading||p()},get children(){const N=fg();return R(N,()=>t()("general.updating")),N}}),T(Ke,{get when(){return V.isLoading||V.isFetching},get children(){const N=fg();return R(N,()=>t()("general.loading")),N}}),T(Ke,{get when(){return Y()},get children(){const N=NM();return N.$$click=()=>he(),N.addEventListener("mouseleave",()=>_(!1)),N.addEventListener("mouseenter",()=>_(!0)),R(N,T(fe,{get when(){return!m()},get fallback(){return t()("profile.unfollow")},get children(){return t()("profile.followingCurrently")}})),De(()=>N.disabled=ce.isLoading),N}}),T(Ke,{get when(){return!Y()},get children(){const N=DM();return N.$$click=()=>te(),R(N,()=>t()("profile.follow")),De(()=>N.disabled=ce.isLoading),N}})]}}),null),R(ve,T(Lv,{menu:pe,get children(){const N=UM();return R(N,T(Av,{})),N}}),null),R(oe,T(Dn,{get children(){return[T(Ke,{get when(){return q.isLoading},get children(){const N=hg();return R(N,()=>t()("general.loading")),N}}),T(Ke,{get when(){return ee()},get children(){const N=hg();return R(N,()=>t()("profile.followsYou")),N}})]}}),null),oe}}),null),Q})(),(()=>{const Q=KM(),de=Q.firstChild,G=de.firstChild,oe=G.nextSibling,ve=oe.firstChild;return R(de,T(fe,{get when(){return E.isLoading},get children(){return t()("general.loading")}}),G),R(de,T(fe,{get when(){return(k()?.display_name?.length??0)>0},get children(){const N=FM();return R(N,()=>k()?.display_name),N}}),G),R(G,T(fe,{get when(){return(k()?.name?.length??0)>0},get children(){const N=qM();return N.firstChild,R(N,()=>k()?.name,null),N}}),null),R(G,T(fe,{get when(){return(k()?.nip05?.length??0)>0},get children(){const N=VM();return R(N,()=>B()?.ident,null),R(N,T(Dn,{get fallback(){return(()=>{const Ee=rB();return R(Ee,T(LM,{})),Ee})()},get children(){return[T(Ke,{get when(){return L.isLoading},get children(){const Ee=WM();return R(Ee,T(AM,{})),Ee}}),T(Ke,{get when(){return U()},get children(){const Ee=ZM();return R(Ee,T(RM,{})),Ee}})]}}),null),N}}),null),R(ve,f),Q})(),T(fe,{get when(){return(k()?.about??"").length>0},get children(){const Q=GM();return R(Q,()=>k()?.about),Q}}),(()=>{const Q=YM(),de=Q.firstChild,G=de.firstChild,oe=G.nextSibling;return de.$$click=()=>C("Following"),R(oe,T(fe,{get when(){return q.isFetched},get fallback(){return iB()},get children(){return re().length}})),R(Q,T(fe,{get when(){return!n().hideCount},get children(){const ve=QM(),N=ve.firstChild,Ee=N.nextSibling;return R(Ee,T(fe,{get when(){return w()},get fallback(){return(()=>{const tt=sB();return tt.$$click=()=>$(!0),tt})()},keyed:!0,get children(){return T(aB,{get pubkey(){return e.pubkey}})}})),ve}}),null),Q})(),T(fe,{get when(){return(k()?.website??"").length>0},get children(){const Q=JM();return R(Q,T(fe,{get when(){return k()?.website},keyed:!0,children:de=>(()=>{const G=oB(),oe=G.firstChild;return R(oe,T(Dm,{})),R(G,T(vo,{class:"text-blue-500 underline",href:de}),null),G})()})),Q}}),T(Dn,{get children(){return T(Ke,{get when(){return x()==="Following"},get children(){return T(Nu,{get data(){return re()},pubkeyExtractor:Q=>Q,onClose:A})}})}}),(()=>{const Q=XM();return R(Q,T(WA,{get events(){return Le()}})),Q})()]}})};mt(["click"]);function cB(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var uB=cB,dB=yi,fB=function(){try{var e=dB(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Um=fB,pg=Um;function hB(e,t,n){t=="__proto__"&&pg?pg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var zm=hB,pB=zm,gB=Ku,vB=Object.prototype,mB=vB.hasOwnProperty;function bB(e,t,n){var i=e[t];(!(mB.call(e,t)&&gB(i,n))||n===void 0&&!(t in e))&&pB(e,t,n)}var Kd=bB,yB=Kd,_B=zm;function wB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?_B(n,u,d):yB(n,u,d)}return n}var yo=wB,xB=yo,$B=Ml;function EB(e,t){return e&&xB(t,$B(t),e)}var kB=EB;function CB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var SB=CB,TB=bi,AB=Hd,IB=SB,RB=Object.prototype,OB=RB.hasOwnProperty;function LB(e){if(!TB(e))return IB(e);var t=AB(e),n=[];for(var i in e)i=="constructor"&&(t||!OB.call(e,i))||n.push(i);return n}var PB=LB,MB=$m,BB=PB,jB=km;function NB(e){return jB(e)?MB(e,!0):BB(e)}var Gd=NB,DB=yo,UB=Gd;function zB(e,t){return e&&DB(t,UB(t),e)}var HB=zB,tl={exports:{}};tl.exports;(function(e,t){var n=Wn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,p){if(p)return f.slice();var g=f.length,m=u?u(g):new f.constructor(g);return f.copy(m),m}e.exports=d})(tl,tl.exports);var FB=tl.exports;function qB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var WB=qB,ZB=yo,VB=Md;function KB(e,t){return ZB(e,VB(e),t)}var GB=KB,QB=Em,YB=QB(Object.getPrototypeOf,Object),Qd=YB,JB=Pd,XB=Qd,ej=Md,tj=_m,nj=Object.getOwnPropertySymbols,rj=nj?function(e){for(var t=[];e;)JB(t,ej(e)),e=XB(e);return t}:tj,Hm=rj,ij=yo,sj=Hm;function oj(e,t){return ij(e,sj(e),t)}var aj=oj,lj=ym,cj=Hm,uj=Gd;function dj(e){return lj(e,uj,cj)}var Yd=dj,fj=Object.prototype,hj=fj.hasOwnProperty;function pj(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&hj.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var gj=pj,gg=bm;function vj(e){var t=new e.constructor(e.byteLength);return new gg(t).set(new gg(e)),t}var Jd=vj,mj=Jd;function bj(e,t){var n=t?mj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var yj=bj,_j=/\w*$/;function wj(e){var t=new e.constructor(e.source,_j.exec(e));return t.lastIndex=e.lastIndex,t}var xj=wj,vg=ss,mg=vg?vg.prototype:void 0,bg=mg?mg.valueOf:void 0;function $j(e){return bg?Object(bg.call(e)):{}}var Ej=$j,kj=Jd;function Cj(e,t){var n=t?kj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Sj=Cj,Tj=Jd,Aj=yj,Ij=xj,Rj=Ej,Oj=Sj,Lj="[object Boolean]",Pj="[object Date]",Mj="[object Map]",Bj="[object Number]",jj="[object RegExp]",Nj="[object Set]",Dj="[object String]",Uj="[object Symbol]",zj="[object ArrayBuffer]",Hj="[object DataView]",Fj="[object Float32Array]",qj="[object Float64Array]",Wj="[object Int8Array]",Zj="[object Int16Array]",Vj="[object Int32Array]",Kj="[object Uint8Array]",Gj="[object Uint8ClampedArray]",Qj="[object Uint16Array]",Yj="[object Uint32Array]";function Jj(e,t,n){var i=e.constructor;switch(t){case zj:return Tj(e);case Lj:case Pj:return new i(+e);case Hj:return Aj(e,n);case Fj:case qj:case Wj:case Zj:case Vj:case Kj:case Gj:case Qj:case Yj:return Oj(e,n);case Mj:return new i;case Bj:case Dj:return new i(e);case jj:return Ij(e);case Nj:return new i;case Uj:return Rj(e)}}var Xj=Jj,eN=bi,yg=Object.create,tN=function(){function e(){}return function(t){if(!eN(t))return{};if(yg)return yg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),nN=tN,rN=nN,iN=Qd,sN=Hd;function oN(e){return typeof e.constructor=="function"&&!sN(e)?rN(iN(e)):{}}var aN=oN,lN=Bl,cN=Zr,uN="[object Map]";function dN(e){return cN(e)&&lN(e)==uN}var fN=dN,hN=fN,pN=Ud,_g=zd,wg=_g&&_g.isMap,gN=wg?pN(wg):hN,vN=gN,mN=Bl,bN=Zr,yN="[object Set]";function _N(e){return bN(e)&&mN(e)==yN}var wN=_N,xN=wN,$N=Ud,xg=zd,$g=xg&&xg.isSet,EN=$g?$N($g):xN,kN=EN,CN=Ld,SN=uB,TN=Kd,AN=kB,IN=HB,RN=FB,ON=WB,LN=GB,PN=aj,MN=Cm,BN=Yd,jN=Bl,NN=gj,DN=Xj,UN=aN,zN=Kn,HN=jd,FN=vN,qN=bi,WN=kN,ZN=Ml,VN=Gd,KN=1,GN=2,QN=4,Fm="[object Arguments]",YN="[object Array]",JN="[object Boolean]",XN="[object Date]",eD="[object Error]",qm="[object Function]",tD="[object GeneratorFunction]",nD="[object Map]",rD="[object Number]",Wm="[object Object]",iD="[object RegExp]",sD="[object Set]",oD="[object String]",aD="[object Symbol]",lD="[object WeakMap]",cD="[object ArrayBuffer]",uD="[object DataView]",dD="[object Float32Array]",fD="[object Float64Array]",hD="[object Int8Array]",pD="[object Int16Array]",gD="[object Int32Array]",vD="[object Uint8Array]",mD="[object Uint8ClampedArray]",bD="[object Uint16Array]",yD="[object Uint32Array]",Je={};Je[Fm]=Je[YN]=Je[cD]=Je[uD]=Je[JN]=Je[XN]=Je[dD]=Je[fD]=Je[hD]=Je[pD]=Je[gD]=Je[nD]=Je[rD]=Je[Wm]=Je[iD]=Je[sD]=Je[oD]=Je[aD]=Je[vD]=Je[mD]=Je[bD]=Je[yD]=!0;Je[eD]=Je[qm]=Je[lD]=!1;function Ca(e,t,n,i,o,a){var l,u=t&KN,d=t&GN,f=t&QN;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!qN(e))return e;var p=zN(e);if(p){if(l=NN(e),!u)return ON(e,l)}else{var g=jN(e),m=g==qm||g==tD;if(HN(e))return RN(e,u);if(g==Wm||g==Fm||m&&!o){if(l=d||m?{}:UN(e),!u)return d?PN(e,IN(l,e)):LN(e,AN(l,e))}else{if(!Je[g])return o?e:{};l=DN(e,g,u)}}a||(a=new CN);var _=a.get(e);if(_)return _;a.set(e,l),WN(e)?e.forEach(function(x){l.add(Ca(x,t,n,x,e,a))}):FN(e)&&e.forEach(function(x,C){l.set(C,Ca(x,t,n,C,e,a))});var w=f?d?BN:MN:d?VN:ZN,$=p?void 0:w(e);return SN($||e,function(x,C){$&&(C=x,x=e[C]),TN(l,C,Ca(x,t,n,C,e,a))}),l}var _D=Ca;function wD(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var xD=wD;function $D(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var ED=$D,kD=jl,CD=ED;function SD(e,t){return t.length<2?e:kD(e,CD(t,0,-1))}var TD=SD,AD=ys,ID=xD,RD=TD,OD=_s;function LD(e,t){return t=AD(t,e),e=RD(e,t),e==null||delete e[OD(ID(t))]}var PD=LD,MD=os,BD=Qd,jD=Zr,ND="[object Object]",DD=Function.prototype,UD=Object.prototype,Zm=DD.toString,zD=UD.hasOwnProperty,HD=Zm.call(Object);function FD(e){if(!jD(e)||MD(e)!=ND)return!1;var t=BD(e);if(t===null)return!0;var n=zD.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Zm.call(n)==HD}var qD=FD,WD=qD;function ZD(e){return WD(e)?void 0:e}var VD=ZD,Eg=ss,KD=Bd,GD=Kn,kg=Eg?Eg.isConcatSpreadable:void 0;function QD(e){return GD(e)||KD(e)||!!(kg&&e&&e[kg])}var YD=QD,JD=Pd,XD=YD;function Vm(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=XD),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?Vm(u,t-1,n,i,o):JD(o,u):i||(o[o.length]=u)}return o}var eU=Vm,tU=eU;function nU(e){var t=e==null?0:e.length;return t?tU(e,1):[]}var rU=nU;function iU(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var sU=iU,oU=sU,Cg=Math.max;function aU(e,t,n){return t=Cg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=Cg(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),oU(e,this,u)}}var lU=aU;function cU(e){return function(){return e}}var uU=cU,dU=uU,Sg=Um,fU=Pm,hU=Sg?function(e,t){return Sg(e,"toString",{configurable:!0,enumerable:!1,value:dU(t),writable:!0})}:fU,pU=hU,gU=800,vU=16,mU=Date.now;function bU(e){var t=0,n=0;return function(){var i=mU(),o=vU-(i-n);if(n=i,o>0){if(++t>=gU)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var yU=bU,_U=pU,wU=yU,xU=wU(_U),$U=xU,EU=rU,kU=lU,CU=$U;function SU(e){return CU(kU(e,void 0,EU),e+"")}var TU=SU,AU=Zd,IU=_D,RU=PD,OU=ys,LU=yo,PU=VD,MU=TU,BU=Yd,jU=1,NU=2,DU=4,UU=MU(function(e,t){var n={};if(e==null)return n;var i=!1;t=AU(t,function(a){return a=OU(a,e),i||(i=a.length>1),a}),LU(e,BU(e),n),i&&(n=IU(n,jU|NU|DU,PU));for(var o=t.length;o--;)RU(n,t[o]);return n}),zU=UU;const HU=rl(zU);var FU="Expected a function";function qU(e){if(typeof e!="function")throw new TypeError(FU);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var WU=qU,ZU=Kd,VU=ys,KU=Nd,Tg=bi,GU=_s;function QU(e,t,n,i){if(!Tg(e))return e;t=VU(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=GU(t[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var p=u[d];f=i?i(p,d,u):void 0,f===void 0&&(f=Tg(p)?p:KU(t[o+1])?[]:{})}ZU(u,d,f),u=u[d]}return e}var YU=QU,JU=jl,XU=YU,ez=ys;function tz(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=JU(e,l);n(u,l)&&XU(a,ez(l,e),u)}return a}var nz=tz,rz=Zd,iz=Vd,sz=nz,oz=Yd;function az(e,t){if(e==null)return{};var n=rz(oz(e),function(i){return[i]});return t=iz(t),sz(e,n,function(i,o){return t(i,o[0])})}var lz=az,cz=Vd,uz=WU,dz=lz;function fz(e,t){return dz(e,uz(cz(t)))}var hz=fz;const pz=rl(hz),gz=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),vz=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),mz=j('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),bz=j('<div class="px-4 pt-4">読み込み中...'),yz=j('<div><span class="font-bold">その他の項目</span><div>'),_z=j('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),wz=j('<div class="h-24 shrink-0">'),xz=j('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),$z="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",Ez="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",kz=new RegExp(`^${$z}$`),Km=new RegExp(`^${Ez}$`),Cz=e=>kz.test(e),Sz=e=>Km.test(e),Tz=e=>{const t=Wr(),{config:n}=et(),[i,o]=ke(""),[a,l]=ke(""),[u,d]=ke(""),[f,p]=ke(""),[g,m]=ke(""),[_,w]=ke(""),[$,x]=ke(""),[C,A]=ke(""),{profile:k,invalidateProfile:E,query:I}=gs(()=>bn([t()])(([Y])=>({pubkey:Y}))),{updateProfile:L}=Pl(),B=fi({mutationKey:["updateProfile"],mutationFn:(...Y)=>L(...Y).then(re=>Promise.allSettled(re.map(ps(1e4)))),onSuccess:Y=>{const re=Y.filter(ee=>ee.status==="fulfilled").length,q=Y.length-re;re===Y.length?window.alert("更新しました"):re>0?window.alert(`${q}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),E().then(()=>I.refetch()).catch(ee=>console.error(ee)),e.onClose()},onError:Y=>{console.error("failed to delete",Y)}}),U=()=>I.isLoading||B.isLoading,ne=()=>U();setInterval(()=>console.log(I.isLoading,B.isLoading),1e3);const W=()=>HU(k(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),J=Y=>{Y.preventDefault();const re=t();if(re==null)return;const q=pz({picture:i(),banner:a(),name:u(),display_name:f(),about:g(),website:_(),nip05:$(),lud06:Cz(C())?C():null,lud16:Sz(C())?C():null},ee=>ee==null||ee.length===0);B.mutate({relayUrls:n().relayUrls,pubkey:re,profile:q,otherProperties:W()})},V=Y=>Y.key==="Enter"&&Y.preventDefault();return hr(()=>{const Y=k();Y!=null&&(I.refetch().catch(re=>console.error(re)),Sa(()=>{o(re=>Y.picture??re),l(re=>Y.banner??re),d(re=>Y.name??re),p(re=>Y.display_name??re),m(re=>Y.about??re),w(re=>Y.website??re),x(re=>Y.nip05??re),Y.lud16!=null?A(Y.lud16):Y.lud06!=null&&A(Y.lud06)}))}),T(_i,{closeButton:()=>T(Bg,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Y=mz(),re=Y.firstChild;return R(Y,T(fe,{get when(){return a().length>0},get fallback(){return wz()},keyed:!0,get children(){const q=gz(),ee=q.firstChild;return De(()=>Ge(ee,"src",a())),q}}),re),R(re,T(fe,{get when(){return i().length>0},get children(){const q=vz();return De(()=>Ge(q,"src",i())),q}})),Y})(),T(fe,{get when(){return U()},get children(){return bz()}}),(()=>{const Y=_z(),re=Y.firstChild,q=re.firstChild,ee=q.firstChild,ce=ee.nextSibling,ge=q.nextSibling,te=ge.firstChild,he=te.nextSibling,pe=ge.nextSibling,Le=pe.firstChild,Q=Le.nextSibling,de=Q.firstChild,G=de.nextSibling,oe=pe.nextSibling,ve=oe.firstChild,N=ve.nextSibling,Ee=oe.nextSibling,tt=Ee.firstChild,ht=tt.nextSibling,it=Ee.nextSibling,Pe=it.firstChild,ze=Pe.nextSibling,Ct=it.nextSibling,yn=Ct.firstChild,ct=yn.nextSibling,gr=Ct.nextSibling,wi=gr.firstChild,Pn=wi.nextSibling,bt=Pn.nextSibling,_n=gr.nextSibling,Mn=_n.firstChild,xi=Mn.nextSibling;return re.addEventListener("submit",J),ce.$$keydown=V,ce.addEventListener("blur",xe=>o(xe.currentTarget.value)),he.$$keydown=V,he.addEventListener("blur",xe=>l(xe.currentTarget.value)),G.$$keydown=V,G.addEventListener("change",xe=>d(xe.currentTarget.value)),N.$$keydown=V,N.addEventListener("change",xe=>p(xe.currentTarget.value)),ht.addEventListener("change",xe=>m(xe.currentTarget.value)),ze.$$keydown=V,ze.addEventListener("change",xe=>w(xe.currentTarget.value)),ct.$$keydown=V,ct.addEventListener("change",xe=>x(xe.currentTarget.value)),bt.$$keydown=V,bt.addEventListener("change",xe=>A(xe.currentTarget.value)),R(re,T(fe,{get when(){return Object.entries(W()).length>0},get children(){const xe=yz(),Gn=xe.firstChild,Yt=Gn.nextSibling;return R(Yt,T(Ht,{get each(){return Object.entries(W())},children:([Wt,wn])=>(()=>{const Qn=xz(),Yn=Qn.firstChild,vr=Yn.nextSibling;return R(Yn,Wt),R(vr,wn),Qn})()})),xe}}),_n),xi.$$click=()=>e.onClose(),R(re,T(fe,{get when(){return B.isLoading},children:"保存中..."}),null),De(xe=>{const Gn=ne(),Yt=ne(),Wt=ne(),wn=ne(),Qn=ne(),Yn=ne(),vr=Km.source,$i=ne(),Ei=ne(),ki=B.isLoading;return Gn!==xe._v$&&(ce.disabled=xe._v$=Gn),Yt!==xe._v$2&&(he.disabled=xe._v$2=Yt),Wt!==xe._v$3&&(G.disabled=xe._v$3=Wt),wn!==xe._v$4&&(N.disabled=xe._v$4=wn),Qn!==xe._v$5&&(ht.disabled=xe._v$5=Qn),Yn!==xe._v$6&&(ze.disabled=xe._v$6=Yn),vr!==xe._v$7&&Ge(ct,"pattern",xe._v$7=vr),$i!==xe._v$8&&(ct.disabled=xe._v$8=$i),Ei!==xe._v$9&&(bt.disabled=xe._v$9=Ei),ki!==xe._v$10&&(Mn.disabled=xe._v$10=ki),xe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),De(()=>ce.value=i()),De(()=>he.value=a()),De(()=>G.value=u()),De(()=>N.value=f()),De(()=>ht.value=g()),De(()=>ze.value=_()),De(()=>ct.value=$()),De(()=>bt.value=C()),Y})()]}})};mt(["keydown","click"]);const AH=()=>{const e=Wr(),{modalState:t,showProfile:n,closeModal:i}=qr();return T(fe,{get when(){return t()},keyed:!0,children:o=>T(Dn,{get children(){return[T(Ke,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>T(lB,{pubkey:a,onClose:i})}),T(Ke,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return T(Tz,{onClose:()=>bn([e()])(([a])=>{n(a)})})}}),T(Ke,{get when(){return o.type==="AddColumn"},get children(){return T(SM,{onClose:i})}}),T(Ke,{get when(){return o.type==="About"},get children(){return T(kM,{onClose:i})}})]}})})},Az=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),Iz=(e={})=>(()=>{const t=Az();return Xe(t,e,!0,!0),t})(),Rz=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),Ag=(e={})=>(()=>{const t=Rz();return Xe(t,e,!0,!0),t})(),Oz=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),Lz=(e={})=>(()=>{const t=Oz();return Xe(t,e,!0,!0),t})(),Pz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),Mz=(e={})=>(()=>{const t=Pz();return Xe(t,e,!0,!0),t})(),Bz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),jz=(e={})=>(()=>{const t=Bz();return Xe(t,e,!0,!0),t})(),Nz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),Dz=(e={})=>(()=>{const t=Nz();return Xe(t,e,!0,!0),t})(),Ig=gt.string().length(64).regex(/^[0-9a-f]{64}$/),qu=gt.string().regex(/^\w+$/),Uz=gt.object({shortcode:qu,url:gt.string().url(),keywords:gt.optional(gt.array(qu))}),zz=gt.object({manifest:gt.literal("emojipack_v1"),name:gt.string(),emojis:gt.array(Uz),description:gt.optional(gt.string()),author:gt.optional(Ig),publisher:gt.optional(Ig)}).refine(e=>Mm(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Gm=gt.record(qu,gt.string().url());zz.or(Gm);const Hz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),Fz=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),qz=j('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Wz=j('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),Wu=j('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Zz=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Vz=j('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Kz=j('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Gz=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),Qz=j('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Yz=j('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Jz=j('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Xz=j('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),eH=j('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),tH=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),nH=j('<div class="p-4">'),rH=j('<h2 class="flex-1 text-center text-lg font-bold">'),iH=j('<ul class="flex flex-col">'),sH=j('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),oH=j('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Qm=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,aH=Qm("https?"),lH=Qm("wss?"),cH=()=>{const e=Rt(),t=Wr(),{showProfile:n,showProfileEdit:i}=qr();return(()=>{const o=Fz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return R(a,()=>e()("config.profile.profile")),u.$$click=()=>bn([t()])(([f])=>{n(f)}),R(u,()=>e()("config.profile.openProfile")),d.$$click=()=>i(),R(d,()=>e()("config.profile.editProfile")),o})()},uH=()=>{const e=Rt(),{config:t,addRelay:n,removeRelay:i}=et(),[o,a]=ke(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([_])=>_).join(`
`);if(d.length===0){window.alert(e()("config.relays.notConfigured"));return}if(!window.confirm(`${e()("config.relays.askImport")}

${f}`))return;const p=t().relayUrls.length;Sa(()=>{d.forEach(([_])=>{n(_)})});const m=t().relayUrls.length-p;window.alert(e()("config.relays.imported",{count:m}))};return[(()=>{const d=qz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.nextSibling,_=m.firstChild,w=_.nextSibling;return R(f,()=>e()("config.relays.relays")),R(p,()=>e()("config.relays.numOfRelays",{count:t().relayUrls.length})),R(g,T(Ht,{get each(){return t().relayUrls},children:$=>(()=>{const x=Wu(),C=x.firstChild,A=C.nextSibling;return R(C,$),A.$$click=()=>i($),R(A,T(ns,{})),x})()})),m.addEventListener("submit",l),_.addEventListener("change",$=>a($.currentTarget.value)),Ge(_,"pattern",lH),R(w,()=>e()("config.relays.addRelay")),De(()=>_.value=o()),d})(),(()=>{const d=Wz(),f=d.firstChild,p=f.nextSibling;return R(f,()=>e()("config.relays.importRelays")),p.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(e()("config.relays.failedToImport"))})},R(p,()=>e()("config.relays.importFromExtension")),d})()]},dH=()=>{const e=Rt(),{config:t,setConfig:n}=et(),i=[{id:"relative",name:e()("config.display.relativeTimeNotation"),example:e()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:e()("config.display.absoluteTimeNotationShort"),example:e()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:e()("config.display.absoluteTimeNotationLong"),example:e()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=Zz(),l=a.firstChild,u=l.nextSibling;return R(l,()=>e()("config.display.timeNotation")),R(u,T(Ht,{each:i,children:({id:d,name:f,example:p})=>(()=>{const g=Vz(),m=g.firstChild,_=m.nextSibling;return m.$$click=()=>o(d),R(m,f),R(_,p),De(w=>{const $=t().dateFormat===d,x=t().dateFormat===d,C=t().dateFormat!==d,A=t().dateFormat!==d;return $!==w._v$&&m.classList.toggle("bg-rose-300",w._v$=$),x!==w._v$2&&m.classList.toggle("text-white",w._v$2=x),C!==w._v$3&&m.classList.toggle("bg-white",w._v$3=C),A!==w._v$4&&m.classList.toggle("text-rose-300",w._v$4=A),w},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Us=e=>(()=>{const t=Kz();return t.$$click=n=>e.onClick(n),De(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Ge(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),fH=()=>{const e=Rt(),{config:t,setConfig:n}=et(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=Gz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,p=d.nextSibling,g=p.firstChild;return R(l,()=>e()("config.display.reaction")),R(f,()=>e()("config.display.enableEmojiReaction")),R(d,T(Us,{get value(){return t().useEmojiReaction},onClick:()=>i()}),null),R(g,()=>e()("config.display.showEmojiReaction")),R(p,T(Us,{get value(){return t().showEmojiReaction},onClick:()=>o()}),null),a})()},hH=()=>{const e=Rt(),{config:t,saveEmoji:n,removeEmoji:i}=et(),[o,a]=ke(""),[l,u]=ke(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=Qz(),p=f.firstChild,g=p.nextSibling,m=g.nextSibling,_=m.firstChild,w=_.firstChild,$=w.nextSibling,x=_.nextSibling,C=x.firstChild,A=C.nextSibling,k=x.nextSibling;return R(p,()=>e()("config.customEmoji.customEmoji")),R(g,T(Ht,{get each(){return Object.values(t().customEmojis)},children:({shortcode:E,url:I})=>(()=>{const L=Yz(),B=L.firstChild,U=B.nextSibling,ne=U.nextSibling;return Ge(B,"src",I),Ge(B,"alt",E),R(U,E),ne.$$click=()=>i(E),R(ne,T(ns,{})),L})()})),m.addEventListener("submit",d),R(w,()=>e()("config.customEmoji.shortcode")),$.addEventListener("change",E=>a(E.currentTarget.value)),R(C,()=>e()("config.customEmoji.url")),A.addEventListener("change",E=>u(E.currentTarget.value)),Ge(A,"pattern",aH),R(k,()=>e()("config.customEmoji.addEmoji")),De(()=>$.value=o()),De(()=>A.value=l()),f})()},pH=()=>{const e=Rt(),{saveEmojis:t}=et(),[n,i]=ke(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Gm.parse(JSON.parse(n())),u=Hz(l);t(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=Jz(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,p=f.nextSibling;return R(l,()=>e()("config.customEmoji.emojiImport")),R(u,()=>e()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),R(p,()=>e()("config.customEmoji.importEmoji")),De(()=>f.value=n()),a})()},gH=()=>{const e=Rt(),{config:t,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=et(),[a,l]=ke(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=Xz(),f=d.firstChild,p=f.nextSibling;return R(f,()=>e()("config.mute.mutedUsers")),R(p,T(Ht,{get each(){return t().mutedPubkeys},children:g=>(()=>{const m=Wu(),_=m.firstChild,w=_.nextSibling;return R(_,T(Ed,{pubkey:g})),w.$$click=()=>n(g),R(w,T(ns,{})),m})()})),d})(),(()=>{const d=eH(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,_=m.nextSibling;return R(f,()=>e()("config.mute.mutedKeywords")),R(p,T(Ht,{get each(){return t().mutedKeywords},children:w=>(()=>{const $=Wu(),x=$.firstChild,C=x.nextSibling;return R(x,w),C.$$click=()=>o(w),R(C,T(ns,{})),$})()})),g.addEventListener("submit",u),m.addEventListener("change",w=>l(w.currentTarget.value)),R(_,()=>e()("config.mute.add")),De(()=>m.value=a()),d})()]},vH=()=>{const e=Rt(),{config:t,setConfig:n}=et(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=tH(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,p=f.firstChild,g=f.nextSibling,m=g.firstChild,_=g.nextSibling,w=_.firstChild;return R(u,()=>e()("config.display.others")),R(p,()=>e()("config.display.keepOpenPostForm")),R(f,T(Us,{get value(){return t().keepOpenPostForm},onClick:()=>i()}),null),R(m,()=>e()("config.display.showMediaByDefault")),R(g,T(Us,{get value(){return t().showMedia},onClick:()=>o()}),null),R(w,()=>e()("config.display.hideNumbers")),R(_,T(Us,{get value(){return t().hideCount},onClick:()=>a()}),null),l})()},mH=e=>{const t=Rt(),[n,i]=ke(null),o=[{name:()=>t()("config.profile.profile"),icon:()=>T(Nm,{}),render:()=>T(cH,{})},{name:()=>t()("config.relays.relays"),icon:()=>T(Dz,{}),render:()=>T(uH,{})},{name:()=>t()("config.display.display"),icon:()=>T(jz,{}),render:()=>[T(dH,{}),T(fH,{}),T(vH,{})]},{name:()=>t()("config.customEmoji.customEmoji"),icon:()=>T(cm,{}),render:()=>[T(hH,{}),T(pH,{})]},{name:()=>t()("config.mute.mute"),icon:()=>T(Mz,{}),render:()=>T(gH,{})}],a=()=>{const l=n();return l==null?null:o[l]};return T(_i,{get onClose(){return e.onClose},get children(){const l=nH();return R(l,T(fe,{get when(){return a()},get fallback(){return[(()=>{const u=rH();return R(u,()=>t()("config.config")),u})(),(()=>{const u=iH();return R(u,T(Ht,{each:o,children:(d,f)=>(()=>{const p=sH(),g=p.firstChild,m=g.firstChild;return g.$$click=()=>i(f),R(m,()=>d.icon()),R(g,()=>d.name(),null),p})()})),u})()]},keyed:!0,children:u=>(()=>{const d=oH(),f=d.firstChild,p=f.nextSibling;return f.$$click=()=>i(null),R(f,T(Bg,{})),R(p,()=>u.render()),d})()})),l}})};mt(["click"]);const bH=j('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),yH=j('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),_H=j('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),wH=()=>{let e,t;const{saveColumn:n}=et(),i=Ad(),[o,a]=ke(""),l=u=>{u.preventDefault(),n(_d({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return T(kd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=yH();return R(u,T(Ag,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=bH(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?dr(p,d):t=d,R(f,T(Ag,{})),De(()=>d.value=o()),u}})},IH=()=>{let e;const{showAddColumn:t,showAbout:n}=qr(),{config:i}=et(),[o,a]=ke(!1),[l,u]=ke(!1),d=()=>{e?.focus(),e?.click()},f=()=>a(!0),p=()=>a(!1),g=()=>a(m=>!m);return KS(()=>({commandType:"openPostForm",handler:()=>{f(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const m=_H(),_=m.firstChild,w=_.firstChild,$=w.firstChild,x=w.nextSibling,C=x.nextSibling,A=C.firstChild,k=A.nextSibling,E=k.nextSibling,I=E.firstChild,L=_.nextSibling;return $.$$click=()=>g(),R($,T(Lz,{})),R(w,T(wH,{}),null),A.$$click=()=>t(),R(A,T(Rv,{})),k.$$click=()=>u(B=>!B),R(k,T(Iz,{})),E.$$click=()=>n(),R(L,T(gm,{textAreaRef:B=>{e=B},onClose:p})),R(m,T(fe,{get when(){return l()},get children(){return T(mH,{onClose:()=>u(!1)})}}),null),De(B=>{const U=Zu("images/rabbit_app_256.png"),ne=!!(o()||i().keepOpenPostForm),W=!(o()||i().keepOpenPostForm);return U!==B._v$&&Ge(I,"src",B._v$=U),ne!==B._v$2&&L.classList.toggle("static",B._v$2=ne),W!==B._v$3&&L.classList.toggle("hidden",B._v$3=W),B},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()};mt(["click"]);export{Bg as A,hs as B,g6 as C,HA as D,so as E,vM as F,Nm as G,hM as H,Iv as I,Dm as J,vt as K,CH as L,_M as M,bi as N,Fd as O,rl as P,AH as Q,CC as R,IH as S,WA as T,Ed as U,$d as V,ho as W,Wn as _,Pr as a,et as b,TH as c,KS as d,yA as e,Ad as f,Nk as g,Wr as h,ui as i,is as j,ps as k,dg as l,OE as m,ri as n,gs as o,$v as p,uC as q,El as r,Pv as s,xd as t,Bm as u,zA as v,qr as w,Za as x,bn as y,gt as z};
//# sourceMappingURL=SideBar-c9166a77.js.map
