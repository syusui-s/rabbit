import{S as kg,s as vu,n as bx,i as Tp,a as Ap,t as yx,f as _x,c as wx,r as Ip,b as xx,d as Eg,g as $x,u as _i,e as Cg,h as Aa,o as vr,j as an,k as Ks,l as rl,p as Rp,m as Ze,q as j,v as ut,w as we,x as O,y as $,z as ue,A as De,B as kx,M as ze,C as Ex,D as Sn,E as fo,F as Un,G as Cx,H as je,I as Sx,J as br,K as Tt,L as Tx,N as pt,O as Ax,P as Ix,Q as Fs,R as Sg,T as Rx,U as Ox}from"./index-07aee889.js";import{c as Yi,u as qi,a as Lx,b as Px,r as Vu,d as Mx}from"./resolveAsset-e3cc0846.js";class Bx extends kg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Op(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),vu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Lp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(bx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Tp||this.currentResult.isStale||!Ap(this.options.staleTime))return;const n=yx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Tp||this.options.enabled===!1||!Ap(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||_x.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,h=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:x,errorUpdatedAt:k,fetchStatus:w,status:E}=g,_=!1,A=!1,R;if(n._optimisticResults){const U=this.hasListeners(),te=!U&&Op(t,n),W=U&&Lp(t,i,n,o);(te||W)&&(w=wx(t.options.networkMode)?"fetching":"paused",v||(E="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&E!=="error")R=p.data,v=p.dataUpdatedAt,E=p.status,_=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)R=this.selectResult;else try{this.selectFn=n.select,R=n.select(g.data),R=Ip(a?.data,R,n),this.selectResult=R,this.selectError=null}catch(U){this.selectError=U}else R=g.data;if(typeof n.placeholderData<"u"&&typeof R>"u"&&E==="loading"){let U;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)U=a.data;else if(U=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof U<"u")try{U=n.select(U),this.selectError=null}catch(te){this.selectError=te}typeof U<"u"&&(E="success",R=Ip(a?.data,U,n),A=!0)}this.selectError&&(x=this.selectError,R=this.selectResult,k=Date.now(),E="error");const T=w==="fetching",B=E==="loading",C=E==="error";return{status:E,fetchStatus:w,isLoading:B,isSuccess:E==="success",isError:C,isInitialLoading:B&&T,data:R,dataUpdatedAt:v,error:x,errorUpdatedAt:k,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:T,isRefetching:T&&!B,isLoadingError:C&&g.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:A,isPreviousData:_,isRefetchError:C&&g.dataUpdatedAt!==0,isStale:Gu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,vu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==n[h]&&u.has(h)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!xx(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Eg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,h;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(h=this.options).onSettled)==null||d.call(h,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function jx(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Op(e,t){return jx(e,t)||e.state.dataUpdatedAt>0&&bu(e,t,t.refetchOnMount)}function bu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Gu(e,t)}return!1}function Lp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Gu(e,n)}function Gu(e,t){return e.isStaleByTime(t.staleTime)}class Ux extends kg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),vu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:$x(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Eg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,h;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(h=this.mutateOptions).onSettled)==null||d.call(h,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function Nx(e){return typeof e=="function"}function Pp(e,t,n){if(!Nx(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Tg(e,t){return typeof e=="function"?e(...t):!!e}function Dx(e,t){const n=_i({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=Yi(a.getOptimisticResult(o)),[d,{refetch:h,mutate:p}]=Cg(()=>new Promise(k=>{l.isFetching&&l.isLoading||(qi(l.data)===i&&k(void 0),k(qi(l.data)))}));Aa(()=>{p(()=>qi(l.data)),h()});let g=[];const v=a.subscribe(k=>{g.push(()=>{Aa(()=>{const w={...qi(k)};w.data===void 0&&(w.data=i),u(qi(w)),p(()=>qi(k.data)),h()})}),queueMicrotask(()=>{const w=g.pop();w&&w(),g=[]})});vr(()=>v()),an(()=>{a.setOptions(o,{listeners:!1})}),Ks(()=>{const k=n.defaultQueryOptions(e);a.setOptions(k)}),Ks(rl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Tg(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const x={get(k,w){return w==="data"?d():Reflect.get(k,w)}};return new Proxy(l,x)}function wi(e,t,n){const[i,o]=Yi(Pp(e,t,n));return Ks(()=>{const a=Pp(e,t,n);o(a)}),Dx(i,Bx)}function pi(e,t,n){const[i,o]=Yi(Rp(e,t,n)),a=_i({context:i.context}),l=new Ux(a,i),u=(g,v)=>{l.mutate(g,v).catch(zx)},[d,h]=Yi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Ks(()=>{const g=Rp(e,t,n);o(g),l.setOptions(g)}),Ks(rl(()=>d.status,()=>{if(d.isError&&Tg(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{h({...g,mutate:u,mutateAsync:g.mutate})});return vr(p),d}function zx(){}const Hx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),Fx=(e={})=>(()=>{const t=Hx();return Ze(t,e,!0,!0),t})(),qx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),Ag=(e={})=>(()=>{const t=qx();return Ze(t,e,!0,!0),t})(),Wx=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),Zx=j('<span class="inline-block h-4 w-4 text-gray-700">'),ls=e=>{const[t,n]=we(!1),i=()=>n(o=>!o);return(()=>{const o=Wx(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=l.nextSibling;return O(l,$(ue,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const p=Zx();return O(p,h),p})()}),u),O(u,()=>e.name),d.$$click=()=>i(),O(d,$(Ag,{})),O(o,$(ue,{get when(){return t()},get children(){return e.settings()}}),null),o})()};ut(["click"]);const Kx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Qu=(e={})=>(()=>{const t=Kx();return Ze(t,e,!0,!0),t})();var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ho(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function il(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Vx=typeof dr=="object"&&dr&&dr.Object===Object&&dr,Ig=Vx,Gx=Ig,Qx=typeof self=="object"&&self&&self.Object===Object&&self,Yx=Gx||Qx||Function("return this")(),Rn=Yx,Jx=Rn,Xx=Jx.Symbol,cs=Xx,Mp=cs,Rg=Object.prototype,e5=Rg.hasOwnProperty,t5=Rg.toString,Ns=Mp?Mp.toStringTag:void 0;function n5(e){var t=e5.call(e,Ns),n=e[Ns];try{e[Ns]=void 0;var i=!0}catch{}var o=t5.call(e);return i&&(t?e[Ns]=n:delete e[Ns]),o}var r5=n5,i5=Object.prototype,s5=i5.toString;function o5(e){return s5.call(e)}var a5=o5,Bp=cs,l5=r5,c5=a5,u5="[object Null]",d5="[object Undefined]",jp=Bp?Bp.toStringTag:void 0;function f5(e){return e==null?e===void 0?d5:u5:jp&&jp in Object(e)?l5(e):c5(e)}var us=f5;function h5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var qn=h5,p5=us,g5=qn,m5="[object AsyncFunction]",v5="[object Function]",b5="[object GeneratorFunction]",y5="[object Proxy]";function _5(e){if(!g5(e))return!1;var t=p5(e);return t==v5||t==b5||t==m5||t==y5}var Og=_5,w5=Rn,x5=w5["__core-js_shared__"],$5=x5,Yc=$5,Up=function(){var e=/[^.]+$/.exec(Yc&&Yc.keys&&Yc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function k5(e){return!!Up&&Up in e}var E5=k5,C5=Function.prototype,S5=C5.toString;function T5(e){if(e!=null){try{return S5.call(e)}catch{}try{return e+""}catch{}}return""}var Lg=T5,A5=Og,I5=E5,R5=qn,O5=Lg,L5=/[\\^$.*+?()[\]{}|]/g,P5=/^\[object .+?Constructor\]$/,M5=Function.prototype,B5=Object.prototype,j5=M5.toString,U5=B5.hasOwnProperty,N5=RegExp("^"+j5.call(U5).replace(L5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function D5(e){if(!R5(e)||I5(e))return!1;var t=A5(e)?N5:P5;return t.test(O5(e))}var z5=D5;function H5(e,t){return e?.[t]}var F5=H5,q5=z5,W5=F5;function Z5(e,t){var n=W5(e,t);return q5(n)?n:void 0}var xi=Z5,K5=xi,V5=K5(Object,"create"),sl=V5,Np=sl;function G5(){this.__data__=Np?Np(null):{},this.size=0}var Q5=G5;function Y5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var J5=Y5,X5=sl,e$="__lodash_hash_undefined__",t$=Object.prototype,n$=t$.hasOwnProperty;function r$(e){var t=this.__data__;if(X5){var n=t[e];return n===e$?void 0:n}return n$.call(t,e)?t[e]:void 0}var i$=r$,s$=sl,o$=Object.prototype,a$=o$.hasOwnProperty;function l$(e){var t=this.__data__;return s$?t[e]!==void 0:a$.call(t,e)}var c$=l$,u$=sl,d$="__lodash_hash_undefined__";function f$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=u$&&t===void 0?d$:t,this}var h$=f$,p$=Q5,g$=J5,m$=i$,v$=c$,b$=h$;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=p$;ds.prototype.delete=g$;ds.prototype.get=m$;ds.prototype.has=v$;ds.prototype.set=b$;var y$=ds;function _$(){this.__data__=[],this.size=0}var w$=_$;function x$(e,t){return e===t||e!==e&&t!==t}var Yu=x$,$$=Yu;function k$(e,t){for(var n=e.length;n--;)if($$(e[n][0],t))return n;return-1}var ol=k$,E$=ol,C$=Array.prototype,S$=C$.splice;function T$(e){var t=this.__data__,n=E$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():S$.call(t,n,1),--this.size,!0}var A$=T$,I$=ol;function R$(e){var t=this.__data__,n=I$(t,e);return n<0?void 0:t[n][1]}var O$=R$,L$=ol;function P$(e){return L$(this.__data__,e)>-1}var M$=P$,B$=ol;function j$(e,t){var n=this.__data__,i=B$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var U$=j$,N$=w$,D$=A$,z$=O$,H$=M$,F$=U$;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=N$;fs.prototype.delete=D$;fs.prototype.get=z$;fs.prototype.has=H$;fs.prototype.set=F$;var al=fs,q$=xi,W$=Rn,Z$=q$(W$,"Map"),Ju=Z$,Dp=y$,K$=al,V$=Ju;function G$(){this.size=0,this.__data__={hash:new Dp,map:new(V$||K$),string:new Dp}}var Q$=G$;function Y$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var J$=Y$,X$=J$;function e8(e,t){var n=e.__data__;return X$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ll=e8,t8=ll;function n8(e){var t=t8(this,e).delete(e);return this.size-=t?1:0,t}var r8=n8,i8=ll;function s8(e){return i8(this,e).get(e)}var o8=s8,a8=ll;function l8(e){return a8(this,e).has(e)}var c8=l8,u8=ll;function d8(e,t){var n=u8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var f8=d8,h8=Q$,p8=r8,g8=o8,m8=c8,v8=f8;function hs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}hs.prototype.clear=h8;hs.prototype.delete=p8;hs.prototype.get=g8;hs.prototype.has=m8;hs.prototype.set=v8;var Xu=hs,b8="__lodash_hash_undefined__";function y8(e){return this.__data__.set(e,b8),this}var _8=y8;function w8(e){return this.__data__.has(e)}var x8=w8,$8=Xu,k8=_8,E8=x8;function Ia(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new $8;++t<n;)this.add(e[t])}Ia.prototype.add=Ia.prototype.push=k8;Ia.prototype.has=E8;var Pg=Ia;function C8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var S8=C8;function T8(e){return e!==e}var A8=T8;function I8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var R8=I8,O8=S8,L8=A8,P8=R8;function M8(e,t,n){return t===t?P8(e,t,n):O8(e,L8,n)}var B8=M8,j8=B8;function U8(e,t){var n=e==null?0:e.length;return!!n&&j8(e,t,0)>-1}var N8=U8;function D8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var z8=D8;function H8(e,t){return e.has(t)}var Mg=H8,F8=xi,q8=Rn,W8=F8(q8,"Set"),Bg=W8;function Z8(){}var K8=Z8;function V8(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var ed=V8,Jc=Bg,G8=K8,Q8=ed,Y8=1/0,J8=Jc&&1/Q8(new Jc([,-0]))[1]==Y8?function(e){return new Jc(e)}:G8,X8=J8,e6=Pg,t6=N8,n6=z8,r6=Mg,i6=X8,s6=ed,o6=200;function a6(e,t,n){var i=-1,o=t6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=n6;else if(a>=o6){var h=t?null:i6(e);if(h)return s6(h);l=!1,o=r6,d=new e6}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var jg=a6,l6=jg;function c6(e){return e&&e.length?l6(e):[]}var u6=c6;const pr=ho(u6),d6=j('<div class="block shrink-0 overflow-hidden border-b p-1">'),qs=e=>(()=>{const t=d6();return O(t,()=>e.children),t})();function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function f6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Ug(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function h6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function p6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function g6(e,t){Ug(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const di={number:yu,bool:f6,bytes:Ug,hash:h6,exists:p6,output:g6},$a=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,m6=Object.freeze(Object.defineProperty({__proto__:null,crypto:$a},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const v6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),b6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),$n=(e,t)=>e<<32-t|e>>>t,Ng=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Ng)throw new Error("Non little-endian hardware is not supported");const y6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function nn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=y6[e[n]];return t}function Wr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Dg=async()=>{};async function _6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Dg(),i+=a)}}function td(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function po(e){if(typeof e=="string"&&(e=td(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class nd{clone(){return this._cloneInto()}}const w6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function x6(e,t){if(t!==void 0&&(typeof t!="object"||!w6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function cl(e){const t=i=>e().update(po(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function $6(e){const t=(i,o)=>e(o).update(po(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function ul(e=32){if($a&&typeof $a.getRandomValues=="function")return $a.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const k6=Object.freeze(Object.defineProperty({__proto__:null,Hash:nd,asyncLoop:_6,bytesToHex:nn,checkOpts:x6,concatBytes:fi,createView:gi,hexToBytes:Wr,isLE:Ng,nextTick:Dg,randomBytes:ul,rotr:$n,toBytes:po,u32:b6,u8:v6,utf8ToBytes:td,wrapConstructor:cl,wrapConstructorWithOpts:$6},Symbol.toStringTag,{value:"Module"}));function E6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}let zg=class extends nd{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){di.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=po(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=gi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){di.exists(this),di.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;E6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const C6=(e,t,n)=>e&t^~e&n,S6=(e,t,n)=>e&t^e&n^t&n,T6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Mr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Br=new Uint32Array(64);class Hg extends zg{constructor(){super(64,32,8,!1),this.A=Mr[0]|0,this.B=Mr[1]|0,this.C=Mr[2]|0,this.D=Mr[3]|0,this.E=Mr[4]|0,this.F=Mr[5]|0,this.G=Mr[6]|0,this.H=Mr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Br[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=Br[g-15],x=Br[g-2],k=$n(v,7)^$n(v,18)^v>>>3,w=$n(x,17)^$n(x,19)^x>>>10;Br[g]=w+Br[g-7]+k+Br[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:h,H:p}=this;for(let g=0;g<64;g++){const v=$n(u,6)^$n(u,11)^$n(u,25),x=p+v+C6(u,d,h)+T6[g]+Br[g]|0,w=($n(i,2)^$n(i,13)^$n(i,22))+S6(i,o,a)|0;p=h,h=d,d=u,u=l+x|0,l=a,a=o,o=i,i=x+w|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,h=h+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,h,p)}roundClean(){Br.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class A6 extends Hg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Dn=cl(()=>new Hg),I6=cl(()=>new A6),R6=Object.freeze(Object.defineProperty({__proto__:null,sha224:I6,sha256:Dn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Fg=BigInt(0),dl=BigInt(1),O6=BigInt(2),fl=e=>e instanceof Uint8Array,L6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ji(e){if(!fl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=L6[e[n]];return t}function qg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function rd(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function Xi(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Nt(e){return rd(Ji(e))}function id(e){if(!fl(e))throw new Error("Uint8Array expected");return rd(Ji(Uint8Array.from(e).reverse()))}const Fr=(e,t)=>Xi(e.toString(16).padStart(t*2,"0")),Wg=(e,t)=>Fr(e,t).reverse(),P6=e=>Xi(qg(e));function St(e,t,n){let i;if(typeof t=="string")try{i=Xi(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(fl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function rn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!fl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function M6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function hl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function B6(e){let t;for(t=0;e>Fg;e>>=dl,t+=1);return t}const j6=(e,t)=>e>>BigInt(t)&dl,U6=(e,t,n)=>e|(n?dl:Fg)<<BigInt(t),sd=e=>(O6<<BigInt(e-1))-dl,Xc=e=>new Uint8Array(e),zp=e=>Uint8Array.from(e);function Zg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Xc(e),o=Xc(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Xc())=>{o=u(zp([0]),g),i=u(),g.length!==0&&(o=u(zp([1]),g),i=u())},h=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const x=i.slice();v.push(x),g+=i.length}return rn(...v)};return(g,v)=>{l(),d(g);let x;for(;!(x=v(h()));)d();return l(),x}}const N6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function ps(e,t,n={}){const i=(o,a,l)=>{const u=N6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const D6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:j6,bitLen:B6,bitMask:sd,bitSet:U6,bytesToHex:Ji,bytesToNumberBE:Nt,bytesToNumberLE:id,concatBytes:rn,createHmacDrbg:Zg,ensureBytes:St,equalBytes:M6,hexToBytes:Xi,hexToNumber:rd,numberToBytesBE:Fr,numberToBytesLE:Wg,numberToHexUnpadded:qg,numberToVarBytesBE:P6,utf8ToBytes:hl,validateObject:ps},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $t=BigInt(0),ht=BigInt(1),ci=BigInt(2),z6=BigInt(3),_u=BigInt(4),Hp=BigInt(5),Fp=BigInt(8);BigInt(9);BigInt(16);function yt(e,t){const n=e%t;return n>=$t?n:t+n}function H6(e,t,n){if(n<=$t||t<$t)throw new Error("Expected power/modulo > 0");if(n===ht)return $t;let i=ht;for(;t>$t;)t&ht&&(i=i*e%n),e=e*e%n,t>>=ht;return i}function mn(e,t,n){let i=e;for(;t-- >$t;)i*=i,i%=n;return i}function wu(e,t){if(e===$t||t<=$t)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=yt(e,t),i=t,o=$t,a=ht;for(;n!==$t;){const u=i/n,d=i%n,h=o-a*u;i=n,n=d,o=a,a=h}if(i!==ht)throw new Error("invert: does not exist");return yt(o,t)}function F6(e){const t=(e-ht)/ci;let n,i,o;for(n=e-ht,i=0;n%ci===$t;n/=ci,i++);for(o=ci;o<e&&H6(o,t,e)!==e-ht;o++);if(i===1){const l=(e+ht)/_u;return function(d,h){const p=d.pow(h,l);if(!d.eql(d.sqr(p),h))throw new Error("Cannot find square root");return p}}const a=(n+ht)/ci;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let h=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let x=1;for(let w=u.sqr(v);x<h&&!u.eql(w,u.ONE);x++)w=u.sqr(w);const k=u.pow(p,ht<<BigInt(h-x-1));p=u.sqr(k),g=u.mul(g,k),v=u.mul(v,p),h=x}return g}}function q6(e){if(e%_u===z6){const t=(e+ht)/_u;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Fp===Hp){const t=(e-Hp)/Fp;return function(i,o){const a=i.mul(o,ci),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ci),l),h=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(h),o))throw new Error("Cannot find square root");return h}}return F6(e)}const W6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Kg(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=W6.reduce((i,o)=>(i[o]="function",i),t);return ps(e,n)}function Z6(e,t,n){if(n<$t)throw new Error("Expected power > 0");if(n===$t)return e.ONE;if(n===ht)return t;let i=e.ONE,o=t;for(;n>$t;)n&ht&&(i=e.mul(i,o)),o=e.sqr(o),n>>=ht;return i}function K6(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function od(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function V6(e,t,n=!1,i={}){if(e<=$t)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=od(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=q6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:sd(o),ZERO:$t,ONE:ht,create:d=>yt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return $t<=d&&d<e},is0:d=>d===$t,isOdd:d=>(d&ht)===ht,neg:d=>yt(-d,e),eql:(d,h)=>d===h,sqr:d=>yt(d*d,e),add:(d,h)=>yt(d+h,e),sub:(d,h)=>yt(d-h,e),mul:(d,h)=>yt(d*h,e),pow:(d,h)=>Z6(u,d,h),div:(d,h)=>yt(d*wu(h,e),e),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>wu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>K6(u,d),cmov:(d,h,p)=>p?h:d,toBytes:d=>n?Wg(d,a):Fr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?id(d):Nt(d)}});return Object.freeze(u)}function G6(e,t,n=!1){e=St("privateHash",e);const i=e.length,o=od(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?id(e):Nt(e);return yt(a,t-ht)+ht}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Q6=BigInt(0),eu=BigInt(1);function Y6(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>Q6;)a&eu&&(l=l.add(u)),u=u.double(),a>>=eu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let h=o,p=h;for(let g=0;g<l;g++){p=h,d.push(p);for(let v=1;v<u;v++)p=p.add(h),d.push(p);h=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let h=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),v=2**o,x=BigInt(o);for(let k=0;k<u;k++){const w=k*d;let E=Number(l&g);l>>=x,E>d&&(E-=v,l+=eu);const _=w,A=w+Math.abs(E)-1,R=k%2!==0,T=E<0;E===0?p=p.add(n(R,a[_])):h=h.add(n(T,a[A]))}return{p:h,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let h=a.get(o);return h||(h=this.precomputeWindow(o,d),d!==1&&a.set(o,u(h))),this.wNAF(d,h,l)}}}function Vg(e){return Kg(e.Fp),ps(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...od(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function J6(e){const t=Vg(e);ps(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:X6,hexToBytes:e7}=D6,hi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=hi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:X6(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=hi,n=typeof e=="string"?e7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=hi._parseInt(n.subarray(2)),{d:l,l:u}=hi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=h=>Number.parseInt(h[0],16)&8?"00"+h:h,n=h=>{const p=h.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},En=BigInt(0),gt=BigInt(1),lr=BigInt(2),Ra=BigInt(3),qp=BigInt(4);function t7(e){const t=J6(e),{Fp:n}=t,i=t.toBytes||((k,w,E)=>{const _=w.toAffine();return rn(Uint8Array.from([4]),n.toBytes(_.x),n.toBytes(_.y))}),o=t.fromBytes||(k=>{const w=k.subarray(1),E=n.fromBytes(w.subarray(0,n.BYTES)),_=n.fromBytes(w.subarray(n.BYTES,2*n.BYTES));return{x:E,y:_}});function a(k){const{a:w,b:E}=t,_=n.sqr(k),A=n.mul(_,k);return n.add(n.add(A,n.mul(k,w)),E)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l(k){return typeof k=="bigint"&&En<k&&k<t.n}function u(k){if(!l(k))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(k){const{allowedPrivateKeyLengths:w,nByteLength:E,wrapPrivateKey:_,n:A}=t;if(w&&typeof k!="bigint"){if(k instanceof Uint8Array&&(k=Ji(k)),typeof k!="string"||!w.includes(k.length))throw new Error("Invalid key");k=k.padStart(E*2,"0")}let R;try{R=typeof k=="bigint"?k:Nt(St("private key",k,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof k}`)}return _&&(R=yt(R,A)),u(R),R}const h=new Map;function p(k){if(!(k instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(w,E,_){if(this.px=w,this.py=E,this.pz=_,w==null||!n.isValid(w))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if(_==null||!n.isValid(_))throw new Error("z required")}static fromAffine(w){const{x:E,y:_}=w||{};if(!w||!n.isValid(E)||!n.isValid(_))throw new Error("invalid affine point");if(w instanceof g)throw new Error("projective point not allowed");const A=R=>n.eql(R,n.ZERO);return A(E)&&A(_)?g.ZERO:new g(E,_,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(w){const E=n.invertBatch(w.map(_=>_.pz));return w.map((_,A)=>_.toAffine(E[A])).map(g.fromAffine)}static fromHex(w){const E=g.fromAffine(o(St("pointHex",w)));return E.assertValidity(),E}static fromPrivateKey(w){return g.BASE.multiply(d(w))}_setWindowSize(w){this._WINDOW_SIZE=w,h.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:w,y:E}=this.toAffine();if(!n.isValid(w)||!n.isValid(E))throw new Error("bad point: x or y not FE");const _=n.sqr(E),A=a(w);if(!n.eql(_,A))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:w}=this.toAffine();if(n.isOdd)return!n.isOdd(w);throw new Error("Field doesn't support isOdd")}equals(w){p(w);const{px:E,py:_,pz:A}=this,{px:R,py:T,pz:B}=w,C=n.eql(n.mul(E,B),n.mul(R,A)),P=n.eql(n.mul(_,B),n.mul(T,A));return C&&P}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:w,b:E}=t,_=n.mul(E,Ra),{px:A,py:R,pz:T}=this;let B=n.ZERO,C=n.ZERO,P=n.ZERO,U=n.mul(A,A),te=n.mul(R,R),W=n.mul(T,T),Y=n.mul(A,R);return Y=n.add(Y,Y),P=n.mul(A,T),P=n.add(P,P),B=n.mul(w,P),C=n.mul(_,W),C=n.add(B,C),B=n.sub(te,C),C=n.add(te,C),C=n.mul(B,C),B=n.mul(Y,B),P=n.mul(_,P),W=n.mul(w,W),Y=n.sub(U,W),Y=n.mul(w,Y),Y=n.add(Y,P),P=n.add(U,U),U=n.add(P,U),U=n.add(U,W),U=n.mul(U,Y),C=n.add(C,U),W=n.mul(R,T),W=n.add(W,W),U=n.mul(W,Y),B=n.sub(B,U),P=n.mul(W,te),P=n.add(P,P),P=n.add(P,P),new g(B,C,P)}add(w){p(w);const{px:E,py:_,pz:A}=this,{px:R,py:T,pz:B}=w;let C=n.ZERO,P=n.ZERO,U=n.ZERO;const te=t.a,W=n.mul(t.b,Ra);let Y=n.mul(E,R),Z=n.mul(_,T),X=n.mul(A,B),se=n.add(E,_),q=n.add(R,T);se=n.mul(se,q),q=n.add(Y,Z),se=n.sub(se,q),q=n.add(E,A);let D=n.add(R,B);return q=n.mul(q,D),D=n.add(Y,X),q=n.sub(q,D),D=n.add(_,A),C=n.add(T,B),D=n.mul(D,C),C=n.add(Z,X),D=n.sub(D,C),U=n.mul(te,q),C=n.mul(W,X),U=n.add(C,U),C=n.sub(Z,U),U=n.add(Z,U),P=n.mul(C,U),Z=n.add(Y,Y),Z=n.add(Z,Y),X=n.mul(te,X),q=n.mul(W,q),Z=n.add(Z,X),X=n.sub(Y,X),X=n.mul(te,X),q=n.add(q,X),Y=n.mul(Z,q),P=n.add(P,Y),Y=n.mul(D,q),C=n.mul(se,C),C=n.sub(C,Y),Y=n.mul(se,Z),U=n.mul(D,U),U=n.add(U,Y),new g(C,P,U)}subtract(w){return this.add(w.negate())}is0(){return this.equals(g.ZERO)}wNAF(w){return x.wNAFCached(this,h,w,E=>{const _=n.invertBatch(E.map(A=>A.pz));return E.map((A,R)=>A.toAffine(_[R])).map(g.fromAffine)})}multiplyUnsafe(w){const E=g.ZERO;if(w===En)return E;if(u(w),w===gt)return this;const{endo:_}=t;if(!_)return x.unsafeLadder(this,w);let{k1neg:A,k1:R,k2neg:T,k2:B}=_.splitScalar(w),C=E,P=E,U=this;for(;R>En||B>En;)R&gt&&(C=C.add(U)),B&gt&&(P=P.add(U)),U=U.double(),R>>=gt,B>>=gt;return A&&(C=C.negate()),T&&(P=P.negate()),P=new g(n.mul(P.px,_.beta),P.py,P.pz),C.add(P)}multiply(w){u(w);let E=w,_,A;const{endo:R}=t;if(R){const{k1neg:T,k1:B,k2neg:C,k2:P}=R.splitScalar(E);let{p:U,f:te}=this.wNAF(B),{p:W,f:Y}=this.wNAF(P);U=x.constTimeNegate(T,U),W=x.constTimeNegate(C,W),W=new g(n.mul(W.px,R.beta),W.py,W.pz),_=U.add(W),A=te.add(Y)}else{const{p:T,f:B}=this.wNAF(E);_=T,A=B}return g.normalizeZ([_,A])[0]}multiplyAndAddUnsafe(w,E,_){const A=g.BASE,R=(B,C)=>C===En||C===gt||!B.equals(A)?B.multiplyUnsafe(C):B.multiply(C),T=R(this,E).add(R(w,_));return T.is0()?void 0:T}toAffine(w){const{px:E,py:_,pz:A}=this,R=this.is0();w==null&&(w=R?n.ONE:n.inv(A));const T=n.mul(E,w),B=n.mul(_,w),C=n.mul(A,w);if(R)return{x:n.ZERO,y:n.ZERO};if(!n.eql(C,n.ONE))throw new Error("invZ was invalid");return{x:T,y:B}}isTorsionFree(){const{h:w,isTorsionFree:E}=t;if(w===gt)return!0;if(E)return E(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:w,clearCofactor:E}=t;return w===gt?this:E?E(g,this):this.multiplyUnsafe(t.h)}toRawBytes(w=!0){return this.assertValidity(),i(g,this,w)}toHex(w=!0){return Ji(this.toRawBytes(w))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,x=Y6(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function n7(e){const t=Vg(e);return ps(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function r7(e){const t=n7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(q){return En<q&&q<n.ORDER}function u(q){return yt(q,i)}function d(q){return wu(q,i)}const{ProjectivePoint:h,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=t7({...t,toBytes(q,D,ne){const G=D.toAffine(),ae=n.toBytes(G.x),de=rn;return ne?de(Uint8Array.from([D.hasEvenY()?2:3]),ae):de(Uint8Array.from([4]),ae,n.toBytes(G.y))},fromBytes(q){const D=q.length,ne=q[0],G=q.subarray(1);if(D===o&&(ne===2||ne===3)){const ae=Nt(G);if(!l(ae))throw new Error("Point is not on curve");const de=g(ae);let re=n.sqrt(de);const Q=(re&gt)===gt;return(ne&1)===1!==Q&&(re=n.neg(re)),{x:ae,y:re}}else if(D===a&&ne===4){const ae=n.fromBytes(G.subarray(0,n.BYTES)),de=n.fromBytes(G.subarray(n.BYTES,2*n.BYTES));return{x:ae,y:de}}else throw new Error(`Point of length ${D} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),x=q=>Ji(Fr(q,t.nByteLength));function k(q){const D=i>>gt;return q>D}function w(q){return k(q)?u(-q):q}const E=(q,D,ne)=>Nt(q.slice(D,ne));class _{constructor(D,ne,G){this.r=D,this.s=ne,this.recovery=G,this.assertValidity()}static fromCompact(D){const ne=t.nByteLength;return D=St("compactSignature",D,ne*2),new _(E(D,0,ne),E(D,ne,2*ne))}static fromDER(D){const{r:ne,s:G}=hi.toSig(St("DER",D));return new _(ne,G)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(D){return new _(this.r,this.s,D)}recoverPublicKey(D){const{r:ne,s:G,recovery:ae}=this,de=P(St("msgHash",D));if(ae==null||![0,1,2,3].includes(ae))throw new Error("recovery id invalid");const re=ae===2||ae===3?ne+t.n:ne;if(re>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Q=ae&1?"03":"02",he=h.fromHex(Q+x(re)),xe=d(re),Re=u(-de*xe),Je=u(G*xe),J=h.BASE.multiplyAndAddUnsafe(he,Re,Je);if(!J)throw new Error("point at infinify");return J.assertValidity(),J}hasHighS(){return k(this.s)}normalizeS(){return this.hasHighS()?new _(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Xi(this.toDERHex())}toDERHex(){return hi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Xi(this.toCompactHex())}toCompactHex(){return x(this.r)+x(this.s)}}const A={isValidPrivateKey(q){try{return p(q),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const q=t.randomBytes(n.BYTES+8),D=G6(q,i);return Fr(D,t.nByteLength)},precompute(q=8,D=h.BASE){return D._setWindowSize(q),D.multiply(BigInt(3)),D}};function R(q,D=!0){return h.fromPrivateKey(q).toRawBytes(D)}function T(q){const D=q instanceof Uint8Array,ne=typeof q=="string",G=(D||ne)&&q.length;return D?G===o||G===a:ne?G===2*o||G===2*a:q instanceof h}function B(q,D,ne=!0){if(T(q))throw new Error("first arg must be private key");if(!T(D))throw new Error("second arg must be public key");return h.fromHex(D).multiply(p(q)).toRawBytes(ne)}const C=t.bits2int||function(q){const D=Nt(q),ne=q.length*8-t.nBitLength;return ne>0?D>>BigInt(ne):D},P=t.bits2int_modN||function(q){return u(C(q))},U=sd(t.nBitLength);function te(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(En<=q&&q<U))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Fr(q,t.nByteLength)}function W(q,D,ne=Y){if(["recovered","canonical"].some(nt=>nt in ne))throw new Error("sign() legacy options not supported");const{hash:G,randomBytes:ae}=t;let{lowS:de,prehash:re,extraEntropy:Q}=ne;de==null&&(de=!0),q=St("msgHash",q),re&&(q=St("prehashed msgHash",G(q)));const he=P(q),xe=p(D),Re=[te(xe),te(he)];if(Q!=null){const nt=Q===!0?ae(n.BYTES):Q;Re.push(St("extraEntropy",nt,n.BYTES))}const Je=rn(...Re),J=he;function qe(nt){const Te=C(nt);if(!v(Te))return;const Xe=d(Te),rt=h.BASE.multiply(Te).toAffine(),At=u(rt.x);if(At===En)return;const Ve=u(Xe*u(J+At*xe));if(Ve===En)return;let Ht=(rt.x===At?0:2)|Number(rt.y&gt),Gn=Ve;return de&&k(Ve)&&(Gn=w(Ve),Ht^=1),new _(At,Gn,Ht)}return{seed:Je,k2sig:qe}}const Y={lowS:t.lowS,prehash:!1},Z={lowS:t.lowS,prehash:!1};function X(q,D,ne=Y){const{seed:G,k2sig:ae}=W(q,D,ne);return Zg(t.hash.outputLen,t.nByteLength,t.hmac)(G,ae)}h.BASE._setWindowSize(8);function se(q,D,ne,G=Z){const ae=q;if(D=St("msgHash",D),ne=St("publicKey",ne),"strict"in G)throw new Error("options.strict was renamed to lowS");const{lowS:de,prehash:re}=G;let Q,he;try{if(typeof ae=="string"||ae instanceof Uint8Array)try{Q=_.fromDER(ae)}catch(rt){if(!(rt instanceof hi.Err))throw rt;Q=_.fromCompact(ae)}else if(typeof ae=="object"&&typeof ae.r=="bigint"&&typeof ae.s=="bigint"){const{r:rt,s:At}=ae;Q=new _(rt,At)}else throw new Error("PARSE");he=h.fromHex(ne)}catch(rt){if(rt.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(de&&Q.hasHighS())return!1;re&&(D=t.hash(D));const{r:xe,s:Re}=Q,Je=P(D),J=d(Re),qe=u(Je*J),nt=u(xe*J),Te=h.BASE.multiplyAndAddUnsafe(he,qe,nt)?.toAffine();return Te?u(Te.x)===xe:!1}return{CURVE:t,getPublicKey:R,getSharedSecret:B,sign:X,verify:se,ProjectivePoint:h,Signature:_,utils:A}}function i7(e,t){const n=e.ORDER;let i=En;for(let v=n-gt;v%lr===En;v/=lr)i+=gt;const o=i,a=(n-gt)/lr**o,l=(a-gt)/lr,u=lr**o-gt,d=lr**(o-gt),h=e.pow(t,a),p=e.pow(t,(a+gt)/lr);let g=(v,x)=>{let k=h,w=e.pow(x,u),E=e.sqr(w);E=e.mul(E,x);let _=e.mul(v,E);_=e.pow(_,l),_=e.mul(_,w),w=e.mul(_,x),E=e.mul(_,v);let A=e.mul(E,w);_=e.pow(A,d);let R=e.eql(_,e.ONE);w=e.mul(E,p),_=e.mul(A,k),E=e.cmov(w,E,R),A=e.cmov(_,A,R);for(let T=o;T>gt;T--){let B=lr**(T-lr),C=e.pow(A,B);const P=e.eql(C,e.ONE);w=e.mul(E,k),k=e.mul(k,k),C=e.mul(A,k),E=e.cmov(w,E,P),A=e.cmov(C,A,P)}return{isValid:R,value:E}};if(e.ORDER%qp===Ra){const v=(e.ORDER-Ra)/qp,x=e.sqrt(e.neg(t));g=(k,w)=>{let E=e.sqr(w);const _=e.mul(k,w);E=e.mul(E,_);let A=e.pow(E,v);A=e.mul(A,_);const R=e.mul(A,x),T=e.mul(e.sqr(A),w),B=e.eql(T,k);let C=e.cmov(R,A,B);return{isValid:B,value:C}}}return g}function s7(e,t){if(Kg(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=i7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,h,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),h=e.sqr(u),d=e.mul(h,t.A),a=e.add(a,d),a=e.mul(a,l),h=e.mul(h,u),d=e.mul(h,t.B),a=e.add(a,d),p=e.mul(o,l);const{isValid:v,value:x}=n(a,h);g=e.mul(o,i),g=e.mul(g,x),p=e.cmov(p,l,v),g=e.cmov(g,x,v);const k=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,k),p=e.div(p,u),{x:p,y:g}}}function o7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return hl(e);throw new Error("DST must be Uint8Array or string")}const a7=Nt;function Nr(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function l7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Vs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function ad(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function c7(e,t,n,i){Vs(e),Vs(t),ad(n),t.length>255&&(t=i(rn(hl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=rn(t,Nr(t.length,1)),d=Nr(0,a),h=Nr(n,2),p=new Array(l),g=i(rn(d,e,h,Nr(0,1),u));p[0]=i(rn(g,Nr(1,1),u));for(let x=1;x<=l;x++){const k=[l7(g,p[x-1]),Nr(x+1,1),u];p[x]=i(rn(...k))}return rn(...p).slice(0,n)}function u7(e,t,n,i,o){if(Vs(e),Vs(t),ad(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(hl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Nr(n,2)).update(t).update(Nr(t.length,1)).digest()}function Wp(e,t,n){ps(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Vs(e),ad(t);const h=o7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),v=t*a*g;let x;if(u==="xmd")x=c7(e,h,v,l);else if(u==="xof")x=u7(e,h,v,o,l);else if(u==="_internal_pass")x=e;else throw new Error('expand must be "xmd" or "xof"');const k=new Array(t);for(let w=0;w<t;w++){const E=new Array(a);for(let _=0;_<a;_++){const A=g*(_+w*a),R=x.subarray(A,A+g);E[_]=yt(a7(R),i)}k[w]=E}return k}function d7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(h=>h.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function f7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=Wp(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=Wp(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class Gg extends nd{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,di.hash(t);const i=po(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return di.exists(this),this.iHash.update(t),this}digestInto(t){di.exists(this),di.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Oa=(e,t,n)=>new Gg(e,t).update(n).digest();Oa.create=(e,t)=>new Gg(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function h7(e){return{hash:e,hmac:(t,...n)=>Oa(e,t,fi(...n)),randomBytes:ul}}function p7(e,t){const n=i=>r7({...e,...h7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),La=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Qg=BigInt(1),Pa=BigInt(2),Zp=(e,t)=>(e+t/Pa)/t;function Yg(e){const t=pl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),h=e*e*e%t,p=h*h*e%t,g=mn(p,n,t)*p%t,v=mn(g,n,t)*p%t,x=mn(v,Pa,t)*h%t,k=mn(x,o,t)*x%t,w=mn(k,a,t)*k%t,E=mn(w,u,t)*w%t,_=mn(E,d,t)*E%t,A=mn(_,u,t)*w%t,R=mn(A,n,t)*p%t,T=mn(R,l,t)*k%t,B=mn(T,i,t)*h%t,C=mn(B,Pa,t);if(!Zr.eql(Zr.sqr(C),e))throw new Error("Cannot find square root");return C}const Zr=V6(pl,void 0,void 0,{sqrt:Yg}),Ut=p7({a:BigInt(0),b:BigInt(7),Fp:Zr,n:La,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=La,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Qg*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Zp(a*e,t),d=Zp(-i*e,t);let h=yt(e-u*n-d*o,t),p=yt(-u*i-d*a,t);const g=h>l,v=p>l;if(g&&(h=t-h),v&&(p=t-p),h>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:h,k2neg:v,k2:p}}}},Dn),gl=BigInt(0),Jg=e=>typeof e=="bigint"&&gl<e&&e<pl,g7=e=>typeof e=="bigint"&&gl<e&&e<La,Kp={};function Ma(e,...t){let n=Kp[e];if(n===void 0){const i=Dn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=rn(i,i),Kp[e]=n}return Dn(rn(n,...t))}const ld=e=>e.toRawBytes(!0).slice(1),xu=e=>Fr(e,32),tu=e=>yt(e,pl),Gs=e=>yt(e,La),cd=Ut.ProjectivePoint,m7=(e,t,n)=>cd.BASE.multiplyAndAddUnsafe(e,t,n);function $u(e){let t=Ut.utils.normPrivateKeyToScalar(e),n=cd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Gs(-t),bytes:ld(n)}}function Xg(e){if(!Jg(e))throw new Error("bad x: need 0 < x < p");const t=tu(e*e),n=tu(t*e+BigInt(7));let i=Yg(n);i%Pa!==gl&&(i=tu(-i));const o=new cd(e,i,Qg);return o.assertValidity(),o}function e1(...e){return Gs(Nt(Ma("BIP0340/challenge",...e)))}function v7(e){return $u(e).bytes}function b7(e,t,n=ul(32)){const i=St("message",e),{bytes:o,scalar:a}=$u(t),l=St("auxRand",n,32),u=xu(a^Nt(Ma("BIP0340/aux",l))),d=Ma("BIP0340/nonce",u,o,i),h=Gs(Nt(d));if(h===gl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=$u(h),v=e1(p,o,i),x=new Uint8Array(64);if(x.set(p,0),x.set(xu(Gs(g+v*a)),32),!t1(x,i,o))throw new Error("sign: Invalid signature produced");return x}function t1(e,t,n){const i=St("signature",e,64),o=St("message",t),a=St("publicKey",n,32);try{const l=Xg(Nt(a)),u=Nt(i.subarray(0,32));if(!Jg(u))return!1;const d=Nt(i.subarray(32,64));if(!g7(d))return!1;const h=e1(xu(u),ld(l),o),p=m7(l,d,Gs(-h));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const go={getPublicKey:v7,sign:b7,verify:t1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:Xg,pointToBytes:ld,numberToBytesBE:Fr,bytesToNumberBE:Nt,taggedHash:Ma,mod:yt}},y7=d7(Zr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),_7=s7(Zr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Zr.create(BigInt("-11"))});f7(Ut.ProjectivePoint,e=>{const{x:t,y:n}=_7(Zr.create(e[0]));return y7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Zr.ORDER,m:1,k:128,expand:"xmd",hash:Dn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Qr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function On(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Wn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Qr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Zn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function mo(e,t="="){if(Qr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function n1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Vp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Qr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const h=a[d],p=t*l+h;if(!Number.isSafeInteger(p)||t*l/t!==l||p-h!==t*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const r1=(e,t)=>t?r1(t,e%t):e,Ba=(e,t)=>e+(t-r1(e,t));function ku(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ba(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Ba(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Qr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function i1(e){return Qr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Vp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Vp(t,e,2**8))}}}function _r(e,t=!1){if(Qr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Ba(8,e)>32||Ba(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return ku(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(ku(n,e,8,t))}}}function Gp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function s1(e,t){if(Qr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const w7={alphabet:Wn,chain:On,checksum:s1,radix:i1,radix2:_r,join:Zn,padding:mo},o1=On(_r(4),Wn("0123456789ABCDEF"),Zn("")),a1=On(_r(5),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),mo(5),Zn("")),x7=On(_r(5),Wn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),mo(5),Zn("")),$7=On(_r(5),Wn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Zn(""),n1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),es=On(_r(6),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),mo(6),Zn("")),l1=On(_r(6),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),mo(6),Zn("")),ud=e=>On(i1(58),Wn(e),Zn("")),Qs=ud("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),k7=ud("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),E7=ud("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Qp=[0,2,3,5,6,7,9,10,11],c1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Qs.encode(i).padStart(Qp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Qp.indexOf(i.length),a=Qs.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},u1=e=>On(s1(4,t=>e(e(t))),Qs),Eu=On(Wn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Zn("")),Yp=[996825010,642813549,513874426,1027748829,705979059];function Ds(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Yp.length;i++)(t>>i&1)===1&&(n^=Yp[i]);return n}function Jp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=Ds(o)^l>>5}o=Ds(o);for(let a=0;a<i;a++)o=Ds(o)^e.charCodeAt(a)&31;for(let a of t)o=Ds(o)^a;for(let a=0;a<6;a++)o=Ds(o);return o^=n,Eu.encode(ku([o%2**30],30,5,!1))}function d1(e){const t=e==="bech32"?1:734539939,n=_r(5),i=n.decode,o=n.encode,a=Gp(i);function l(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const x=p.length+7+g.length;if(v!==!1&&x>v)throw new TypeError(`Length ${x} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${Eu.encode(g)}${Jp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const x=p.lastIndexOf("1");if(x===0||x===-1)throw new Error('Letter "1" must be present between prefix and data only');const k=p.slice(0,x),w=p.slice(x+1);if(w.length<6)throw new Error("Data must be at least 6 characters long");const E=Eu.decode(w).slice(0,-6),_=Jp(k,E,t);if(!w.endsWith(_))throw new Error(`Invalid checksum in ${p}: expected "${_}"`);return{prefix:k,words:E}}const d=Gp(u);function h(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:h,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Dt=d1("bech32"),C7=d1("bech32m"),f1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},h1=On(_r(4),Wn("0123456789abcdef"),Zn(""),n1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Ys={utf8:f1,hex:h1,base16:o1,base32:a1,base64:es,base64url:l1,base58:Qs,base58xmr:c1},p1=`Invalid encoding type. Available types: ${Object.keys(Ys).join(", ")}`,g1=(e,t)=>{if(typeof e!="string"||!Ys.hasOwnProperty(e))throw new TypeError(p1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Ys[e].encode(t)},S7=g1,m1=(e,t)=>{if(!Ys.hasOwnProperty(e))throw new TypeError(p1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Ys[e].decode(t)},T7=m1,A7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Qr,base16:o1,base32:a1,base32crockford:$7,base32hex:x7,base58:Qs,base58check:u1,base58flickr:k7,base58xmr:c1,base58xrp:E7,base64:es,base64url:l1,bech32:Dt,bech32m:C7,bytes:T7,bytesToString:g1,hex:h1,str:S7,stringToBytes:m1,utf8:f1,utils:w7},Symbol.toStringTag,{value:"Module"}));var dd={};Object.defineProperty(dd,"__esModule",{value:!0});var fd=dd.wordlist=void 0;fd=dd.wordlist=`abandon
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
`);var sn={},xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.output=xt.exists=xt.hash=Zi=xt.bytes=xt.bool=xt.number=void 0;function ja(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}xt.number=ja;function v1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}xt.bool=v1;function hd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Zi=xt.bytes=hd;function b1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ja(e.outputLen),ja(e.blockLen)}xt.hash=b1;function y1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}xt.exists=y1;function _1(e,t){hd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}xt.output=_1;const I7={number:ja,bool:v1,bytes:hd,hash:b1,exists:y1,output:_1};xt.default=I7;var ts={},w1={},vo={};const R7=il(m6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=R7,n=T=>new Uint8Array(T.buffer,T.byteOffset,T.byteLength);e.u8=n;const i=T=>new Uint32Array(T.buffer,T.byteOffset,Math.floor(T.byteLength/4));e.u32=i;const o=T=>new DataView(T.buffer,T.byteOffset,T.byteLength);e.createView=o;const a=(T,B)=>T<<32-B|T>>>B;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(T,B)=>B.toString(16).padStart(2,"0"));function u(T){if(!(T instanceof Uint8Array))throw new Error("Uint8Array expected");let B="";for(let C=0;C<T.length;C++)B+=l[T[C]];return B}e.bytesToHex=u;function d(T){if(typeof T!="string")throw new TypeError("hexToBytes: expected string, got "+typeof T);if(T.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const B=new Uint8Array(T.length/2);for(let C=0;C<B.length;C++){const P=C*2,U=T.slice(P,P+2),te=Number.parseInt(U,16);if(Number.isNaN(te)||te<0)throw new Error("Invalid byte sequence");B[C]=te}return B}e.hexToBytes=d;const h=async()=>{};e.nextTick=h;async function p(T,B,C){let P=Date.now();for(let U=0;U<T;U++){C(U);const te=Date.now()-P;te>=0&&te<B||(await(0,e.nextTick)(),P+=te)}}e.asyncLoop=p;function g(T){if(typeof T!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof T}`);return new TextEncoder().encode(T)}e.utf8ToBytes=g;function v(T){if(typeof T=="string"&&(T=g(T)),!(T instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof T})`);return T}e.toBytes=v;function x(...T){if(!T.every(P=>P instanceof Uint8Array))throw new Error("Uint8Array list expected");if(T.length===1)return T[0];const B=T.reduce((P,U)=>P+U.length,0),C=new Uint8Array(B);for(let P=0,U=0;P<T.length;P++){const te=T[P];C.set(te,U),U+=te.length}return C}e.concatBytes=x;class k{clone(){return this._cloneInto()}}e.Hash=k;const w=T=>Object.prototype.toString.call(T)==="[object Object]"&&T.constructor===Object;function E(T,B){if(B!==void 0&&(typeof B!="object"||!w(B)))throw new TypeError("Options should be object or undefined");return Object.assign(T,B)}e.checkOpts=E;function _(T){const B=P=>T().update(v(P)).digest(),C=T();return B.outputLen=C.outputLen,B.blockLen=C.blockLen,B.create=()=>T(),B}e.wrapConstructor=_;function A(T){const B=(P,U)=>T(U).update(v(P)).digest(),C=T({});return B.outputLen=C.outputLen,B.blockLen=C.blockLen,B.create=P=>T(P),B}e.wrapConstructorWithOpts=A;function R(T=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(T));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=R})(vo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=xt,n=vo;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const h=this.blockLen,p=new Uint8Array(h);p.set(d.length>h?l.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=l.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:h,destroyed:p,blockLen:g,outputLen:v}=this;return l=l,l.finished=h,l.destroyed=p,l.blockLen=g,l.outputLen=v,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(w1);Object.defineProperty(ts,"__esModule",{value:!0});ts.pbkdf2Async=ts.pbkdf2=void 0;const fa=xt,O7=w1,Vi=vo;function x1(e,t,n,i){fa.default.hash(e);const o=(0,Vi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(fa.default.number(a),fa.default.number(l),fa.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Vi.toBytes)(t),h=(0,Vi.toBytes)(n),p=new Uint8Array(l),g=O7.hmac.create(e,d),v=g._cloneInto().update(h);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function $1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function L7(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=x1(e,t,n,i);let h;const p=new Uint8Array(4),g=(0,Vi.createView)(p),v=new Uint8Array(u.outputLen);for(let x=1,k=0;k<a;x++,k+=u.outputLen){const w=l.subarray(k,k+u.outputLen);g.setInt32(0,x,!1),(h=d._cloneInto(h)).update(p).digestInto(v),w.set(v.subarray(0,w.length));for(let E=1;E<o;E++){u._cloneInto(h).update(v).digestInto(v);for(let _=0;_<w.length;_++)w[_]^=v[_]}}return $1(u,d,l,h,v)}ts.pbkdf2=L7;async function P7(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:h}=x1(e,t,n,i);let p;const g=new Uint8Array(4),v=(0,Vi.createView)(g),x=new Uint8Array(d.outputLen);for(let k=1,w=0;w<a;k++,w+=d.outputLen){const E=u.subarray(w,w+d.outputLen);v.setInt32(0,k,!1),(p=h._cloneInto(p)).update(g).digestInto(x),E.set(x.subarray(0,E.length)),await(0,Vi.asyncLoop)(o-1,l,_=>{d._cloneInto(p).update(x).digestInto(x);for(let A=0;A<E.length;A++)E[A]^=x[A]})}return $1(d,h,u,p,x)}ts.pbkdf2Async=P7;const M7=il(R6);var vn={},ml={};Object.defineProperty(ml,"__esModule",{value:!0});ml.SHA2=void 0;const nu=xt,zs=vo;function B7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}class j7 extends zs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,zs.createView)(this.buffer)}update(t){nu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,zs.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,zs.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){nu.default.exists(this),nu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;B7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,zs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}ml.SHA2=j7;var k1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(W,Y=!1){return Y?{h:Number(W&t),l:Number(W>>n&t)}:{h:Number(W>>n&t)|0,l:Number(W&t)|0}}e.fromBig=i;function o(W,Y=!1){let Z=new Uint32Array(W.length),X=new Uint32Array(W.length);for(let se=0;se<W.length;se++){const{h:q,l:D}=i(W[se],Y);[Z[se],X[se]]=[q,D]}return[Z,X]}e.split=o;const a=(W,Y)=>BigInt(W>>>0)<<n|BigInt(Y>>>0);e.toBig=a;const l=(W,Y,Z)=>W>>>Z,u=(W,Y,Z)=>W<<32-Z|Y>>>Z,d=(W,Y,Z)=>W>>>Z|Y<<32-Z,h=(W,Y,Z)=>W<<32-Z|Y>>>Z,p=(W,Y,Z)=>W<<64-Z|Y>>>Z-32,g=(W,Y,Z)=>W>>>Z-32|Y<<64-Z,v=(W,Y)=>Y,x=(W,Y)=>W,k=(W,Y,Z)=>W<<Z|Y>>>32-Z,w=(W,Y,Z)=>Y<<Z|W>>>32-Z,E=(W,Y,Z)=>Y<<Z-32|W>>>64-Z,_=(W,Y,Z)=>W<<Z-32|Y>>>64-Z;function A(W,Y,Z,X){const se=(Y>>>0)+(X>>>0);return{h:W+Z+(se/2**32|0)|0,l:se|0}}e.add=A;const R=(W,Y,Z)=>(W>>>0)+(Y>>>0)+(Z>>>0),T=(W,Y,Z,X)=>Y+Z+X+(W/2**32|0)|0,B=(W,Y,Z,X)=>(W>>>0)+(Y>>>0)+(Z>>>0)+(X>>>0),C=(W,Y,Z,X,se)=>Y+Z+X+se+(W/2**32|0)|0,P=(W,Y,Z,X,se)=>(W>>>0)+(Y>>>0)+(Z>>>0)+(X>>>0)+(se>>>0),U=(W,Y,Z,X,se,q)=>Y+Z+X+se+q+(W/2**32|0)|0,te={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:h,rotrBH:p,rotrBL:g,rotr32H:v,rotr32L:x,rotlSH:k,rotlSL:w,rotlBH:E,rotlBL:_,add:A,add3L:R,add3H:T,add4L:B,add4H:C,add5H:U,add5L:P};e.default=te})(k1);Object.defineProperty(vn,"__esModule",{value:!0});vn.sha384=vn.sha512_256=vn.sha512_224=Cu=vn.sha512=vn.SHA512=void 0;const U7=ml,Ie=k1,vl=vo,[N7,D7]=Ie.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),jr=new Uint32Array(80),Ur=new Uint32Array(80);class bo extends U7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:h,El:p,Fh:g,Fl:v,Gh:x,Gl:k,Hh:w,Hl:E}=this;return[t,n,i,o,a,l,u,d,h,p,g,v,x,k,w,E]}set(t,n,i,o,a,l,u,d,h,p,g,v,x,k,w,E){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=h|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=x|0,this.Gl=k|0,this.Hh=w|0,this.Hl=E|0}process(t,n){for(let R=0;R<16;R++,n+=4)jr[R]=t.getUint32(n),Ur[R]=t.getUint32(n+=4);for(let R=16;R<80;R++){const T=jr[R-15]|0,B=Ur[R-15]|0,C=Ie.default.rotrSH(T,B,1)^Ie.default.rotrSH(T,B,8)^Ie.default.shrSH(T,B,7),P=Ie.default.rotrSL(T,B,1)^Ie.default.rotrSL(T,B,8)^Ie.default.shrSL(T,B,7),U=jr[R-2]|0,te=Ur[R-2]|0,W=Ie.default.rotrSH(U,te,19)^Ie.default.rotrBH(U,te,61)^Ie.default.shrSH(U,te,6),Y=Ie.default.rotrSL(U,te,19)^Ie.default.rotrBL(U,te,61)^Ie.default.shrSL(U,te,6),Z=Ie.default.add4L(P,Y,Ur[R-7],Ur[R-16]),X=Ie.default.add4H(Z,C,W,jr[R-7],jr[R-16]);jr[R]=X|0,Ur[R]=Z|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:h,Dl:p,Eh:g,El:v,Fh:x,Fl:k,Gh:w,Gl:E,Hh:_,Hl:A}=this;for(let R=0;R<80;R++){const T=Ie.default.rotrSH(g,v,14)^Ie.default.rotrSH(g,v,18)^Ie.default.rotrBH(g,v,41),B=Ie.default.rotrSL(g,v,14)^Ie.default.rotrSL(g,v,18)^Ie.default.rotrBL(g,v,41),C=g&x^~g&w,P=v&k^~v&E,U=Ie.default.add5L(A,B,P,D7[R],Ur[R]),te=Ie.default.add5H(U,_,T,C,N7[R],jr[R]),W=U|0,Y=Ie.default.rotrSH(i,o,28)^Ie.default.rotrBH(i,o,34)^Ie.default.rotrBH(i,o,39),Z=Ie.default.rotrSL(i,o,28)^Ie.default.rotrBL(i,o,34)^Ie.default.rotrBL(i,o,39),X=i&a^i&u^a&u,se=o&l^o&d^l&d;_=w|0,A=E|0,w=x|0,E=k|0,x=g|0,k=v|0,{h:g,l:v}=Ie.default.add(h|0,p|0,te|0,W|0),h=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const q=Ie.default.add3L(W,Z,se);i=Ie.default.add3H(q,te,Y,X),o=q|0}({h:i,l:o}=Ie.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Ie.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Ie.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h,l:p}=Ie.default.add(this.Dh|0,this.Dl|0,h|0,p|0),{h:g,l:v}=Ie.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:x,l:k}=Ie.default.add(this.Fh|0,this.Fl|0,x|0,k|0),{h:w,l:E}=Ie.default.add(this.Gh|0,this.Gl|0,w|0,E|0),{h:_,l:A}=Ie.default.add(this.Hh|0,this.Hl|0,_|0,A|0),this.set(i,o,a,l,u,d,h,p,g,v,x,k,w,E,_,A)}roundClean(){jr.fill(0),Ur.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}vn.SHA512=bo;class z7 extends bo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class H7 extends bo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class F7 extends bo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Cu=vn.sha512=(0,vl.wrapConstructor)(()=>new bo);vn.sha512_224=(0,vl.wrapConstructor)(()=>new z7);vn.sha512_256=(0,vl.wrapConstructor)(()=>new H7);vn.sha384=(0,vl.wrapConstructor)(()=>new F7);const q7=il(k6),W7=il(A7);Object.defineProperty(sn,"__esModule",{value:!0});var E1=sn.mnemonicToSeedSync=sn.mnemonicToSeed=M1=sn.validateMnemonic=sn.entropyToMnemonic=sn.mnemonicToEntropy=R1=sn.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const C1=xt,S1=ts,Z7=M7,T1=vn,K7=q7,ha=W7,V7=e=>e[0]==="あいこくしん";function A1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function pd(e){const t=A1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function I1(e){C1.default.bytes(e,16,20,24,28,32)}function G7(e,t=128){if(C1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return P1((0,K7.randomBytes)(t/8),e)}var R1=sn.generateMnemonic=G7;const Q7=e=>{const t=8-e.length/4;return new Uint8Array([(0,Z7.sha256)(e)[0]>>t<<t])};function O1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),ha.utils.chain(ha.utils.checksum(1,Q7),ha.utils.radix2(11,!0),ha.utils.alphabet(e))}function L1(e,t){const{words:n}=pd(e),i=O1(t).decode(n);return I1(i),i}sn.mnemonicToEntropy=L1;function P1(e,t){return I1(e),O1(t).encode(e).join(V7(t)?"　":" ")}sn.entropyToMnemonic=P1;function Y7(e,t){try{L1(e,t)}catch{return!1}return!0}var M1=sn.validateMnemonic=Y7;const B1=e=>A1(`mnemonic${e}`);function J7(e,t=""){return(0,S1.pbkdf2Async)(T1.sha512,pd(e).nfkd,B1(t),{c:2048,dkLen:64})}sn.mnemonicToSeed=J7;function X7(e,t=""){return(0,S1.pbkdf2)(T1.sha512,pd(e).nfkd,B1(t),{c:2048,dkLen:64})}E1=sn.mnemonicToSeedSync=X7;const e9=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),j1=Uint8Array.from({length:16},(e,t)=>t),t9=j1.map(e=>(9*e+5)%16);let gd=[j1],md=[t9];for(let e=0;e<4;e++)for(let t of[gd,md])t.push(t[e].map(n=>e9[n]));const U1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),n9=gd.map((e,t)=>e.map(n=>U1[t][n])),r9=md.map((e,t)=>e.map(n=>U1[t][n])),i9=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),s9=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),pa=(e,t)=>e<<t|e>>>32-t;function Xp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ga=new Uint32Array(16);class o9 extends zg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let x=0;x<16;x++,n+=4)ga[x]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,h=this.h3|0,p=h,g=this.h4|0,v=g;for(let x=0;x<5;x++){const k=4-x,w=i9[x],E=s9[x],_=gd[x],A=md[x],R=n9[x],T=r9[x];for(let B=0;B<16;B++){const C=pa(i+Xp(x,a,u,h)+ga[_[B]]+w,R[B])+g|0;i=g,g=h,h=pa(u,10)|0,u=a,a=C}for(let B=0;B<16;B++){const C=pa(o+Xp(k,l,d,p)+ga[A[B]]+E,T[B])+v|0;o=v,v=p,p=pa(d,10)|0,d=l,l=C}}this.set(this.h1+u+p|0,this.h2+h+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ga.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const a9=cl(()=>new o9),ma=Ut.ProjectivePoint,ru=u1(Dn);function e0(e){return BigInt(`0x${nn(e)}`)}function l9(e){return Wr(e.toString(16).padStart(64,"0"))}const c9=td("Bitcoin seed"),iu={private:76066276,public:76067358},su=2147483648,u9=e=>a9(Dn(e)),d9=e=>gi(e).getUint32(0,!1),va=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return d9(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return ru.encode(this.serialize(this.versions.private,fi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return ru.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=iu){if(Zi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Oa(Cu,c9,t);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=iu){const i=ru.decode(t),o=gi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...l,privateKey:u.slice(1)}):new ui({...l,publicKey:u})}static fromJSON(t){return ui.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||iu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ut.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:e0(t.privateKey),this.privKeyBytes=l9(this.privKey),this.pubKey=Ut.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ma.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=u9(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=su)throw new Error("Invalid index");a[2]==="'"&&(l+=su),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=va(t);if(t>=su){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=fi(new Uint8Array([0]),u,n)}else n=fi(this.pubKey,n);const i=Oa(Cu,this.chainCode,n),o=e0(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=yt(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=ma.fromHex(this.pubKey).add(ma.fromPrivateKey(o));if(u.equals(ma.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new ui(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Zi(t,32),Ut.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Zi(t,32),Zi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Zi(n,33),fi(va(t),new Uint8Array([this.depth]),va(this.parentFingerprint),va(this.index),this.chainCode,n)}}var f9=Object.defineProperty,Pt=(e,t)=>{for(var n in t)f9(e,n,{get:t[n],enumerable:!0})};function N1(e){return nn(go.getPublicKey(e))}var h9={};Pt(h9,{MessageNode:()=>D1,MessageQueue:()=>z1,insertEventIntoAscendingList:()=>g9,insertEventIntoDescendingList:()=>p9,normalizeURL:()=>Su,utf8Decoder:()=>Dr,utf8Encoder:()=>zn});var Dr=new TextDecoder("utf-8"),zn=new TextEncoder;function Su(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function p9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function g9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var D1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},z1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new D1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},ct=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(ct||{});function H1(e,t){let n=e;return n.pubkey=N1(t),n.id=bl(n),n.sig=b9(n,t),n}function m9(e){if(!vd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function bl(e){let t=Dn(zn.encode(m9(e)));return nn(t)}var v9=e=>e instanceof Object;function vd(e){if(!v9(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function bd(e){try{return go.verify(e.sig,bl(e),e.pubkey)}catch{return!1}}function b9(e,t){return nn(go.sign(bl(e),t))}function y9(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function _9(e,t){for(let n=0;n<e.length;n++)if(y9(e[n],t))return!0;return!1}var w9={};Pt(w9,{getHex64:()=>yl,getInt:()=>F1,getSubscriptionId:()=>q1,matchEventId:()=>x9,matchEventKind:()=>k9,matchEventPubkey:()=>$9});function yl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function F1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function q1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function x9(e,t){return t===yl(e,"id")}function $9(e,t){return t===yl(e,"pubkey")}function k9(e,t){return t===F1(e,"kind")}var t0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function E9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=t0(),d={},h={},p;async function g(){return p||(p=new Promise((_,A)=>{try{a=new WebSocket(e)}catch(C){A(C)}a.onopen=()=>{u.connect.forEach(C=>C()),_()},a.onerror=()=>{p=void 0,u.error.forEach(C=>C()),A()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(C=>C())};let R=new z1,T;a.onmessage=C=>{R.enqueue(C.data),T||(T=setInterval(B,0))};function B(){if(R.size===0){clearInterval(T),T=null;return}var C=R.dequeue();if(!C)return;let P=q1(C);if(P){let U=l[P];if(U&&U.alreadyHaveEvent&&U.alreadyHaveEvent(yl(C,"id"),e))return}try{let U=JSON.parse(C);switch(U[0]){case"EVENT":{let Z=U[1],X=U[2];vd(X)&&l[Z]&&(l[Z].skipVerification||bd(X))&&_9(l[Z].filters,X)&&(l[Z],(d[Z]?.event||[]).forEach(se=>se(X)));return}case"COUNT":let te=U[1],W=U[2];l[te]&&(d[te]?.count||[]).forEach(Z=>Z(W));return;case"EOSE":{let Z=U[1];Z in d&&(d[Z].eose.forEach(X=>X()),d[Z].eose=[]);return}case"OK":{let Z=U[1],X=U[2],se=U[3]||"";Z in h&&(X?h[Z].ok.forEach(q=>q()):h[Z].failed.forEach(q=>q(se)),h[Z].ok=[],h[Z].failed=[]);return}case"NOTICE":let Y=U[1];u.notice.forEach(Z=>Z(Y));return;case"AUTH":{let Z=U[1];u.auth?.forEach(X=>X(Z));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function x(){v()||await g()}async function k(_){let A=JSON.stringify(_);if(!(!v()&&(await new Promise(R=>setTimeout(R,1e3)),!v())))try{a.send(A)}catch(R){console.log(R)}}const w=(_,{verb:A="REQ",skipVerification:R=!1,alreadyHaveEvent:T=null,id:B=Math.random().toString().slice(2)}={})=>{let C=B;return l[C]={id:C,filters:_,skipVerification:R,alreadyHaveEvent:T},k([A,C,..._]),{sub:(P,U={})=>w(P||_,{skipVerification:U.skipVerification||R,alreadyHaveEvent:U.alreadyHaveEvent||T,id:C}),unsub:()=>{delete l[C],delete d[C],k(["CLOSE",C])},on:(P,U)=>{d[C]=d[C]||{event:[],count:[],eose:[]},d[C][P].push(U)},off:(P,U)=>{let te=d[C],W=te[P].indexOf(U);W>=0&&te[P].splice(W,1)}}};function E(_,A){if(!_.id)throw new Error(`event ${_} has no id`);let R=_.id;return k([A,_]),{on:(T,B)=>{h[R]=h[R]||{ok:[],failed:[]},h[R][T].push(B)},off:(T,B)=>{let C=h[R];if(!C)return;let P=C[T].indexOf(B);P>=0&&C[T].splice(P,1)}}}return{url:e,sub:w,on:(_,A)=>{u[_].push(A),_==="connect"&&a?.readyState===1&&A()},off:(_,A)=>{let R=u[_].indexOf(A);R!==-1&&u[_].splice(R,1)},list:(_,A)=>new Promise(R=>{let T=w(_,A),B=[],C=setTimeout(()=>{T.unsub(),R(B)},n);T.on("eose",()=>{T.unsub(),clearTimeout(C),R(B)}),T.on("event",P=>{B.push(P)})}),get:(_,A)=>new Promise(R=>{let T=w([_],A),B=setTimeout(()=>{T.unsub(),R(null)},i);T.on("event",C=>{T.unsub(),clearTimeout(B),R(C)})}),count:_=>new Promise(A=>{let R=w(_,{...w,verb:"COUNT"}),T=setTimeout(()=>{R.unsub(),A(null)},o);R.on("count",B=>{R.unsub(),clearTimeout(T),A(B)})}),publish(_){return E(_,"EVENT")},auth(_){return E(_,"AUTH")},connect:x,close(){u=t0(),d={},h={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var C9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Su(t)];n&&n.close()})}async ensureRelay(e){const t=Su(e);this._conn[t]||(this._conn[t]=E9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,x)=>{if(n?.alreadyHaveEvent?.(v,x))return!0;let k=this._seenOn[v]||new Set;return k.add(x),this._seenOn[v]=k,i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,h=!1,p=setTimeout(()=>{h=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let x;try{x=await this.ensureRelay(v)}catch{w();return}if(!x)return;let k=x.sub(t,o);k.on("event",E=>{i.add(E.id);for(let _ of l.values())_(E)}),k.on("eose",()=>{h||w()}),a.push(k);function w(){if(d--,d===0){clearTimeout(p);for(let E of u.values())E()}}});let g={sub(v,x){return a.forEach(k=>k.sub(v,x)),g},unsub(){a.forEach(v=>v.unsub())},on(v,x){v==="event"?l.add(x):v==="eose"&&u.add(x)},off(v,x){v==="event"?l.delete(x):v==="eose"&&u.delete(x)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],h=()=>a(l);i.set(a,h),d.on(o,h)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},yo={};Pt(yo,{BECH32_REGEX:()=>W1,decode:()=>_l,naddrEncode:()=>O9,neventEncode:()=>R9,noteEncode:()=>A9,nprofileEncode:()=>I9,npubEncode:()=>T9,nrelayEncode:()=>L9,nsecEncode:()=>S9});var gs=5e3,W1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function _l(e){let{prefix:t,words:n}=Dt.decode(e,gs),i=new Uint8Array(Dt.fromWords(n));switch(t){case"nprofile":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:nn(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nevent":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:nn(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[],author:o[2]?.[0]?nn(o[2][0]):void 0}}}case"naddr":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dr.decode(o[0][0]),pubkey:nn(o[2][0]),kind:parseInt(nn(o[3][0]),16),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nrelay":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Dr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:nn(i)};default:throw new Error(`unknown prefix ${t}`)}}function ba(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function S9(e){return yd("nsec",e)}function T9(e){return yd("npub",e)}function A9(e){return yd("note",e)}function yd(e,t){let n=Wr(t),i=Dt.toWords(n);return Dt.encode(e,i,gs)}function I9(e){let t=wl({0:[Wr(e.pubkey)],1:(e.relays||[]).map(i=>zn.encode(i))}),n=Dt.toWords(t);return Dt.encode("nprofile",n,gs)}function R9(e){let t=wl({0:[Wr(e.id)],1:(e.relays||[]).map(i=>zn.encode(i)),2:e.author?[Wr(e.author)]:[]}),n=Dt.toWords(t);return Dt.encode("nevent",n,gs)}function O9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=wl({0:[zn.encode(e.identifier)],1:(e.relays||[]).map(o=>zn.encode(o)),2:[Wr(e.pubkey)],3:[new Uint8Array(t)]}),i=Dt.toWords(n);return Dt.encode("naddr",i,gs)}function L9(e){let t=wl({0:[zn.encode(e)]}),n=Dt.toWords(t);return Dt.encode("nrelay",n,gs)}function wl(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),fi(...t)}var P9={};Pt(P9,{decrypt:()=>B9,encrypt:()=>M9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function M9(e,t,n){const i=Ut.getSharedSecret(e,"02"+t),o=Z1(i);let a=Uint8Array.from(ul(16)),l=zn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),h=es.encode(new Uint8Array(d)),p=es.encode(new Uint8Array(a.buffer));return`${h}?iv=${p}`}async function B9(e,t,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(e,"02"+t),l=Z1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=es.decode(i),h=es.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:h},u,d);return Dr.decode(p)}function Z1(e){return e.slice(1,33)}var K1={};Pt(K1,{NIP05_REGEX:()=>V1,queryProfile:()=>N9,searchDomain:()=>U9,useFetchImplementation:()=>j9});var V1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,xl;try{xl=fetch}catch{}function j9(e){xl=e}async function U9(e,t=""){try{return(await(await xl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function N9(e){const t=e.match(V1);if(!t)return null;const[n,i="_",o]=t;try{const a=await xl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=D9(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function D9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var z9={};Pt(z9,{generateSeedWords:()=>F9,privateKeyFromSeedWords:()=>H9,validateWords:()=>q9});function H9(e,t){let i=ui.fromMasterSeed(E1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return nn(i)}function F9(){return R1(fd)}function q9(e){return M1(e,fd)}var W9={};Pt(W9,{parse:()=>Z9});function Z9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,h={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=h;continue}if(d==="reply"){t.reply=h;continue}if(d==="mention"){t.mentions.push(h);continue}if(p){t.root=h;continue}if(g){t.reply=h;continue}t.mentions.push(h)}return t}var K9={};Pt(K9,{getPow:()=>V9});function V9(e){return G9(Wr(e))}function G9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=Q9(e[n]),t+=i,i===8);n++);return t}function Q9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var Y9={};Pt(Y9,{finishRepostEvent:()=>J9,getRepostedEvent:()=>X9,getRepostedEventPointer:()=>G1});function J9(e,t,n,i){return H1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function G1(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function X9(e,{skipVerification:t}={}){const n=G1(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!bd(i)))return i}var ek={};Pt(ek,{NOSTR_URI_REGEX:()=>$l,parse:()=>nk,test:()=>tk});var $l=new RegExp(`nostr:(${W1.source})`);function tk(e){return typeof e=="string"&&new RegExp(`^${$l.source}$`).test(e)}function nk(e){const t=e.match(new RegExp(`^${$l.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:_l(t[1])}}var rk={};Pt(rk,{finishReactionEvent:()=>ik,getReactedEventPointer:()=>sk});function ik(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return H1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function sk(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var ok={};Pt(ok,{createDelegation:()=>ak,getDelegator:()=>lk});function ak(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Dn(zn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=nn(go.sign(o,e));return{from:N1(e),to:t.pubkey,cond:i,sig:a}}function lk(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,h,p]=a[u].split(/\b/);if(!(d==="kind"&&h==="="&&e.kind===parseInt(p))){if(d==="created_at"&&h==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&h===">"&&e.created_at>parseInt(p))continue;return null}}let l=Dn(zn.encode(`nostr:delegation:${e.pubkey}:${i}`));return go.verify(o,l,n)?n:null}var ck={};Pt(ck,{matchAll:()=>uk,regex:()=>_d,replaceAll:()=>dk});var _d=()=>new RegExp(`\\b${$l.source}\\b`,"g");function*uk(e){const t=e.matchAll(_d());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:_l(o),start:n.index,end:n.index+i.length}}}function dk(e,t){return e.replaceAll(_d(),(n,i)=>t({uri:n,value:i,decoded:_l(i)}))}var fk={};Pt(fk,{useFetchImplementation:()=>hk,validateGithub:()=>pk});var wd;try{wd=fetch}catch{}function hk(e){wd=e}async function pk(e,t,n){try{return await(await wd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var gk={};Pt(gk,{authenticate:()=>mk});var mk=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},vk={};Pt(vk,{getZapEndpoint:()=>yk,makeZapReceipt:()=>xk,makeZapRequest:()=>_k,useFetchImplementation:()=>bk,validateZapRequest:()=>wk});var xd;try{xd=fetch}catch{}function bk(e){xd=e}async function yk(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=Dt.decode(n,1e3),u=Dt.fromWords(l);t=Dr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await xd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function _k({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function wk(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!vd(t))return"Zap request is not a valid Nostr event.";if(!bd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function xk({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const $k=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),Q1=(e={})=>(()=>{const t=$k();return Ze(t,e,!0,!0),t})(),kk=j('<button class="text-blue-500 underline">'),{noteEncode:Ek,neventEncode:Ck}=yo,Sk=e=>{try{return Ek(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Tk=e=>{try{return Ck({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Js=e=>(()=>{const t=kk();return O(t,$(ue,{get when(){return e.kind==null||e.kind===ct.Text},get fallback(){return Tk(e.eventId)},get children(){return Sk(e.eventId)}})),t})(),Ak=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],Y1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],Ik=[...Y1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],Rk=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Ok=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ms=()=>({id:Ok(),width:"medium"}),J1=e=>({...ms(),columnType:"Following",...e}),X1=e=>({...ms(),columnType:"Notification",...e}),Lk=e=>({...ms(),columnType:"Relays",...e}),em=()=>Lk({name:"日本語",relayUrls:Y1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),tm=e=>({...ms(),columnType:"Posts",...e}),nm=e=>({...ms(),columnType:"Reactions",...e}),$d=e=>({...ms(),columnType:"Search",...e}),Pk=/^[0-9a-f]{64}$/,Xs=e=>{const t=typeof e=="string"&&e.length===64&&Pk.test(e);return t||console.warn("invalid id is ignored: ",e),t};class rm{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&Xs(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&Xs(n))}taggedPubkeys(){return pr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}class im extends rm{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}var He;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(He||(He={}));var Tu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Tu||(Tu={}));const oe=He.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=e=>{switch(typeof e){case"undefined":return oe.undefined;case"string":return oe.string;case"number":return isNaN(e)?oe.nan:oe.number;case"boolean":return oe.boolean;case"function":return oe.function;case"bigint":return oe.bigint;case"symbol":return oe.symbol;case"object":return Array.isArray(e)?oe.array:e===null?oe.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?oe.promise:typeof Map<"u"&&e instanceof Map?oe.map:typeof Set<"u"&&e instanceof Set?oe.set:typeof Date<"u"&&e instanceof Date?oe.date:oe.object;default:return oe.unknown}},ee=He.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Mk=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Tn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const h=l.path[d];d===l.path.length-1?(u[h]=u[h]||{_errors:[]},u[h]._errors.push(n(l))):u[h]=u[h]||{_errors:[]},u=u[h],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,He.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Tn.create=e=>new Tn(e);const eo=(e,t)=>{let n;switch(e.code){case ee.invalid_type:e.received===oe.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case ee.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,He.jsonStringifyReplacer)}`;break;case ee.unrecognized_keys:n=`Unrecognized key(s) in object: ${He.joinValues(e.keys,", ")}`;break;case ee.invalid_union:n="Invalid input";break;case ee.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${He.joinValues(e.options)}`;break;case ee.invalid_enum_value:n=`Invalid enum value. Expected ${He.joinValues(e.options)}, received '${e.received}'`;break;case ee.invalid_arguments:n="Invalid function arguments";break;case ee.invalid_return_type:n="Invalid function return type";break;case ee.invalid_date:n="Invalid date";break;case ee.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:He.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case ee.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case ee.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case ee.custom:n="Invalid input";break;case ee.invalid_intersection_types:n="Intersection results could not be merged";break;case ee.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case ee.not_finite:n="Number must be finite";break;default:n=t.defaultError,He.assertNever(e)}return{message:n}};let sm=eo;function Bk(e){sm=e}function Ua(){return sm}const Na=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(h=>!!h).slice().reverse();for(const h of d)u=h(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},jk=[];function ce(e,t){const n=Na({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Ua(),eo].filter(i=>!!i)});e.common.issues.push(n)}class Lt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return ke;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Lt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return ke;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const ke=Object.freeze({status:"aborted"}),om=e=>({status:"dirty",value:e}),zt=e=>({status:"valid",value:e}),Au=e=>e.status==="aborted",Iu=e=>e.status==="dirty",Da=e=>e.status==="valid",za=e=>typeof Promise<"u"&&e instanceof Promise;var pe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(pe||(pe={}));class Hn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const n0=(e,t)=>{if(Da(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Tn(e.common.issues);return this._error=n,this._error}}};function Se(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Le{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return zr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Lt,ctx:{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(za(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return n0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(za(o)?o:Promise.resolve(o));return n0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:ee.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new In({schema:this,typeName:_e.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return gr.create(this,this._def)}nullable(){return yi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return An.create(this,this._def)}promise(){return rs.create(this,this._def)}or(t){return io.create([this,t],this._def)}and(t){return so.create(this,t,this._def)}transform(t){return new In({...Se(this._def),schema:this,typeName:_e.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new uo({...Se(this._def),innerType:this,defaultValue:n,typeName:_e.ZodDefault})}brand(){return new lm({typeName:_e.ZodBranded,type:this,...Se(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Wa({...Se(this._def),innerType:this,catchValue:n,typeName:_e.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return _o.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Uk=/^c[^\s-]{8,}$/i,Nk=/^[a-z][a-z0-9]*$/,Dk=/[0-9A-HJKMNP-TV-Z]{26}/,zk=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Hk=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Fk=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,qk=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Wk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Zk=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Kk(e,t){return!!((t==="v4"||!t)&&qk.test(e)||(t==="v6"||!t)&&Wk.test(e))}class Cn extends Le{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:ee.invalid_string,...pe.errToObj(i)}),this.nonempty=t=>this.min(1,pe.errToObj(t)),this.trim=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==oe.string){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.string,received:a.parsedType}),ke}const i=new Lt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?ce(o,{code:ee.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ce(o,{code:ee.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Hk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"email",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Fk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"emoji",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")zk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"uuid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")Uk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Nk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid2",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")Dk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ulid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ce(o,{validation:"url",code:ee.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"regex",code:ee.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Zk(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?Kk(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ip",code:ee.invalid_string,message:a.message}),i.dirty()):He.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Cn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...pe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...pe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...pe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...pe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...pe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...pe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...pe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...pe.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...pe.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...pe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...pe.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...pe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...pe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...pe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...pe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...pe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Cn.create=e=>{var t;return new Cn({checks:[],typeName:_e.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};function Vk(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Kr extends Le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==oe.number){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.number,received:a.parsedType}),ke}let i;const o=new Lt;for(const a of this._def.checks)a.kind==="int"?He.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?Vk(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.not_finite,message:a.message}),o.dirty()):He.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:pe.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:pe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:pe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:pe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:pe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&He.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:_e.ZodNumber,coerce:e?.coerce||!1,...Se(e)});class Vr extends Le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==oe.bigint){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.bigint,received:a.parsedType}),ke}let i;const o=new Lt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):He.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:pe.toString(o)}]})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Vr.create=e=>{var t;return new Vr({checks:[],typeName:_e.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};class to extends Le{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==oe.boolean){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.boolean,received:i.parsedType}),ke}return zt(t.data)}}to.create=e=>new to({typeName:_e.ZodBoolean,coerce:e?.coerce||!1,...Se(e)});class vi extends Le{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==oe.date){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.date,received:a.parsedType}),ke}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_date}),ke}const i=new Lt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):He.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:pe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:pe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}vi.create=e=>new vi({checks:[],coerce:e?.coerce||!1,typeName:_e.ZodDate,...Se(e)});class Ha extends Le{_parse(t){if(this._getType(t)!==oe.symbol){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.symbol,received:i.parsedType}),ke}return zt(t.data)}}Ha.create=e=>new Ha({typeName:_e.ZodSymbol,...Se(e)});class no extends Le{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.undefined,received:i.parsedType}),ke}return zt(t.data)}}no.create=e=>new no({typeName:_e.ZodUndefined,...Se(e)});class ro extends Le{_parse(t){if(this._getType(t)!==oe.null){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.null,received:i.parsedType}),ke}return zt(t.data)}}ro.create=e=>new ro({typeName:_e.ZodNull,...Se(e)});class ns extends Le{constructor(){super(...arguments),this._any=!0}_parse(t){return zt(t.data)}}ns.create=e=>new ns({typeName:_e.ZodAny,...Se(e)});class mi extends Le{constructor(){super(...arguments),this._unknown=!0}_parse(t){return zt(t.data)}}mi.create=e=>new mi({typeName:_e.ZodUnknown,...Se(e)});class yr extends Le{_parse(t){const n=this._getOrReturnCtx(t);return ce(n,{code:ee.invalid_type,expected:oe.never,received:n.parsedType}),ke}}yr.create=e=>new yr({typeName:_e.ZodNever,...Se(e)});class Fa extends Le{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.void,received:i.parsedType}),ke}return zt(t.data)}}Fa.create=e=>new Fa({typeName:_e.ZodVoid,...Se(e)});class An extends Le{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==oe.array)return ce(n,{code:ee.invalid_type,expected:oe.array,received:n.parsedType}),ke;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(ce(n,{code:l?ee.too_big:ee.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ce(n,{code:ee.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ce(n,{code:ee.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Hn(n,l,n.path,u)))).then(l=>Lt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Hn(n,l,n.path,u)));return Lt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new An({...this._def,minLength:{value:t,message:pe.toString(n)}})}max(t,n){return new An({...this._def,maxLength:{value:t,message:pe.toString(n)}})}length(t,n){return new An({...this._def,exactLength:{value:t,message:pe.toString(n)}})}nonempty(t){return this.min(1,t)}}An.create=(e,t)=>new An({type:e,minLength:null,maxLength:null,exactLength:null,typeName:_e.ZodArray,...Se(t)});function Ki(e){if(e instanceof ot){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=gr.create(Ki(i))}return new ot({...e._def,shape:()=>t})}else return e instanceof An?new An({...e._def,type:Ki(e.element)}):e instanceof gr?gr.create(Ki(e.unwrap())):e instanceof yi?yi.create(Ki(e.unwrap())):e instanceof Fn?Fn.create(e.items.map(t=>Ki(t))):e}class ot extends Le{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=He.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==oe.object){const h=this._getOrReturnCtx(t);return ce(h,{code:ee.invalid_type,expected:oe.object,received:h.parsedType}),ke}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof yr&&this._def.unknownKeys==="strip"))for(const h in o.data)l.includes(h)||u.push(h);const d=[];for(const h of l){const p=a[h],g=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Hn(o,g,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof yr){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")u.length>0&&(ce(o,{code:ee.unrecognized_keys,keys:u}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Hn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of d){const g=await p.key;h.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Lt.mergeObjectSync(i,h)):Lt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return pe.errToObj,new ot({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=pe.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ot({...this._def,unknownKeys:"strip"})}passthrough(){return new ot({...this._def,unknownKeys:"passthrough"})}extend(t){return new ot({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ot({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:_e.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ot({...this._def,catchall:t})}pick(t){const n={};return He.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ot({...this._def,shape:()=>n})}omit(t){const n={};return He.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ot({...this._def,shape:()=>n})}deepPartial(){return Ki(this)}partial(t){const n={};return He.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ot({...this._def,shape:()=>n})}required(t){const n={};return He.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof gr;)a=a._def.innerType;n[i]=a}}),new ot({...this._def,shape:()=>n})}keyof(){return am(He.objectKeys(this.shape))}}ot.create=(e,t)=>new ot({shape:()=>e,unknownKeys:"strip",catchall:yr.create(),typeName:_e.ZodObject,...Se(t)});ot.strictCreate=(e,t)=>new ot({shape:()=>e,unknownKeys:"strict",catchall:yr.create(),typeName:_e.ZodObject,...Se(t)});ot.lazycreate=(e,t)=>new ot({shape:e,unknownKeys:"strip",catchall:yr.create(),typeName:_e.ZodObject,...Se(t)});class io extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Tn(u.ctx.common.issues));return ce(n,{code:ee.invalid_union,unionErrors:l}),ke}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const h={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:h}),h.common.issues.length&&l.push(h.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Tn(d));return ce(n,{code:ee.invalid_union,unionErrors:u}),ke}}get options(){return this._def.options}}io.create=(e,t)=>new io({options:e,typeName:_e.ZodUnion,...Se(t)});const ka=e=>e instanceof ao?ka(e.schema):e instanceof In?ka(e.innerType()):e instanceof lo?[e.value]:e instanceof Gr?e.options:e instanceof co?Object.keys(e.enum):e instanceof uo?ka(e._def.innerType):e instanceof no?[void 0]:e instanceof ro?[null]:null;class kl extends Le{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.object)return ce(n,{code:ee.invalid_type,expected:oe.object,received:n.parsedType}),ke;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ce(n,{code:ee.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ke)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=ka(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new kl({typeName:_e.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Se(i)})}}function Ru(e,t){const n=zr(e),i=zr(t);if(e===t)return{valid:!0,data:e};if(n===oe.object&&i===oe.object){const o=He.objectKeys(t),a=He.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Ru(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===oe.array&&i===oe.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Ru(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===oe.date&&i===oe.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class so extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(Au(a)||Au(l))return ke;const u=Ru(a.value,l.value);return u.valid?((Iu(a)||Iu(l))&&n.dirty(),{status:n.value,value:u.data}):(ce(i,{code:ee.invalid_intersection_types}),ke)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}so.create=(e,t,n)=>new so({left:e,right:t,typeName:_e.ZodIntersection,...Se(n)});class Fn extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.array)return ce(i,{code:ee.invalid_type,expected:oe.array,received:i.parsedType}),ke;if(i.data.length<this._def.items.length)return ce(i,{code:ee.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ke;!this._def.rest&&i.data.length>this._def.items.length&&(ce(i,{code:ee.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Hn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Lt.mergeArray(n,l)):Lt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Fn({...this._def,rest:t})}}Fn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Fn({items:e,typeName:_e.ZodTuple,rest:null,...Se(t)})};class oo extends Le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.object)return ce(i,{code:ee.invalid_type,expected:oe.object,received:i.parsedType}),ke;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Hn(i,u,i.path,u)),value:l._parse(new Hn(i,i.data[u],i.path,u))});return i.common.async?Lt.mergeObjectAsync(n,o):Lt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Le?new oo({keyType:t,valueType:n,typeName:_e.ZodRecord,...Se(i)}):new oo({keyType:Cn.create(),valueType:t,typeName:_e.ZodRecord,...Se(n)})}}class qa extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.map)return ce(i,{code:ee.invalid_type,expected:oe.map,received:i.parsedType}),ke;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],h)=>({key:o._parse(new Hn(i,u,i.path,[h,"key"])),value:a._parse(new Hn(i,d,i.path,[h,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const h=await d.key,p=await d.value;if(h.status==="aborted"||p.status==="aborted")return ke;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const h=d.key,p=d.value;if(h.status==="aborted"||p.status==="aborted")return ke;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}}}}qa.create=(e,t,n)=>new qa({valueType:t,keyType:e,typeName:_e.ZodMap,...Se(n)});class bi extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.set)return ce(i,{code:ee.invalid_type,expected:oe.set,received:i.parsedType}),ke;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ce(i,{code:ee.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ce(i,{code:ee.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const h=new Set;for(const p of d){if(p.status==="aborted")return ke;p.status==="dirty"&&n.dirty(),h.add(p.value)}return{status:n.value,value:h}}const u=[...i.data.values()].map((d,h)=>a._parse(new Hn(i,d,i.path,h)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:pe.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:pe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:_e.ZodSet,...Se(t)});class Gi extends Le{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.function)return ce(n,{code:ee.invalid_type,expected:oe.function,received:n.parsedType}),ke;function i(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),eo].filter(h=>!!h),issueData:{code:ee.invalid_arguments,argumentsError:d}})}function o(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),eo].filter(h=>!!h),issueData:{code:ee.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof rs?zt(async(...u)=>{const d=new Tn([]),h=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),p=await l(...h);return await this._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})}):zt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Tn([i(u,d.error)]);const h=l(...d.data),p=this._def.returns.safeParse(h,a);if(!p.success)throw new Tn([o(h,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Gi({...this._def,args:Fn.create(t).rest(mi.create())})}returns(t){return new Gi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Gi({args:t||Fn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:_e.ZodFunction,...Se(i)})}}class ao extends Le{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}ao.create=(e,t)=>new ao({getter:e,typeName:_e.ZodLazy,...Se(t)});class lo extends Le{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ce(n,{received:n.data,code:ee.invalid_literal,expected:this._def.value}),ke}return{status:"valid",value:t.data}}get value(){return this._def.value}}lo.create=(e,t)=>new lo({value:e,typeName:_e.ZodLiteral,...Se(t)});function am(e,t){return new Gr({values:e,typeName:_e.ZodEnum,...Se(t)})}class Gr extends Le{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{expected:He.joinValues(i),received:n.parsedType,code:ee.invalid_type}),ke}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{received:n.data,code:ee.invalid_enum_value,options:i}),ke}return zt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Gr.create(t)}exclude(t){return Gr.create(this.options.filter(n=>!t.includes(n)))}}Gr.create=am;class co extends Le{_parse(t){const n=He.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==oe.string&&i.parsedType!==oe.number){const o=He.objectValues(n);return ce(i,{expected:He.joinValues(o),received:i.parsedType,code:ee.invalid_type}),ke}if(n.indexOf(t.data)===-1){const o=He.objectValues(n);return ce(i,{received:i.data,code:ee.invalid_enum_value,options:o}),ke}return zt(t.data)}get enum(){return this._def.values}}co.create=(e,t)=>new co({values:e,typeName:_e.ZodNativeEnum,...Se(t)});class rs extends Le{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.promise&&n.common.async===!1)return ce(n,{code:ee.invalid_type,expected:oe.promise,received:n.parsedType}),ke;const i=n.parsedType===oe.promise?n.data:Promise.resolve(n.data);return zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}rs.create=(e,t)=>new rs({type:e,typeName:_e.ZodPromise,...Se(t)});class In extends Le{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{ce(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?ke:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?ke:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Da(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Da(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);He.assertNever(o)}}In.create=(e,t,n)=>new In({schema:e,typeName:_e.ZodEffects,effect:t,...Se(n)});In.createWithPreprocess=(e,t,n)=>new In({schema:t,effect:{type:"preprocess",transform:e},typeName:_e.ZodEffects,...Se(n)});class gr extends Le{_parse(t){return this._getType(t)===oe.undefined?zt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}gr.create=(e,t)=>new gr({innerType:e,typeName:_e.ZodOptional,...Se(t)});class yi extends Le{_parse(t){return this._getType(t)===oe.null?zt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}yi.create=(e,t)=>new yi({innerType:e,typeName:_e.ZodNullable,...Se(t)});class uo extends Le{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===oe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}uo.create=(e,t)=>new uo({innerType:e,typeName:_e.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Se(t)});class Wa extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return za(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Wa.create=(e,t)=>new Wa({innerType:e,typeName:_e.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Se(t)});class Za extends Le{_parse(t){if(this._getType(t)!==oe.nan){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.nan,received:i.parsedType}),ke}return{status:"valid",value:t.data}}}Za.create=e=>new Za({typeName:_e.ZodNaN,...Se(e)});const Gk=Symbol("zod_brand");class lm extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class _o extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?ke:a.status==="dirty"?(n.dirty(),om(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?ke:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new _o({in:t,out:n,typeName:_e.ZodPipeline})}}const cm=(e,t={},n)=>e?ns.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,h=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...h,fatal:d})}}):ns.create(),Qk={object:ot.lazycreate};var _e;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(_e||(_e={}));const Yk=(e,t={message:`Input not instance of ${e.name}`})=>cm(n=>n instanceof e,t),um=Cn.create,dm=Kr.create,Jk=Za.create,Xk=Vr.create,fm=to.create,eE=vi.create,tE=Ha.create,nE=no.create,rE=ro.create,iE=ns.create,sE=mi.create,oE=yr.create,aE=Fa.create,lE=An.create,cE=ot.create,uE=ot.strictCreate,dE=io.create,fE=kl.create,hE=so.create,pE=Fn.create,gE=oo.create,mE=qa.create,vE=bi.create,bE=Gi.create,yE=ao.create,_E=lo.create,wE=Gr.create,xE=co.create,$E=rs.create,r0=In.create,kE=gr.create,EE=yi.create,CE=In.createWithPreprocess,SE=_o.create,TE=()=>um().optional(),AE=()=>dm().optional(),IE=()=>fm().optional(),RE={string:e=>Cn.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>to.create({...e,coerce:!0}),bigint:e=>Vr.create({...e,coerce:!0}),date:e=>vi.create({...e,coerce:!0})},OE=ke;var at=Object.freeze({__proto__:null,defaultErrorMap:eo,setErrorMap:Bk,getErrorMap:Ua,makeIssue:Na,EMPTY_PATH:jk,addIssueToContext:ce,ParseStatus:Lt,INVALID:ke,DIRTY:om,OK:zt,isAborted:Au,isDirty:Iu,isValid:Da,isAsync:za,get util(){return He},get objectUtil(){return Tu},ZodParsedType:oe,getParsedType:zr,ZodType:Le,ZodString:Cn,ZodNumber:Kr,ZodBigInt:Vr,ZodBoolean:to,ZodDate:vi,ZodSymbol:Ha,ZodUndefined:no,ZodNull:ro,ZodAny:ns,ZodUnknown:mi,ZodNever:yr,ZodVoid:Fa,ZodArray:An,ZodObject:ot,ZodUnion:io,ZodDiscriminatedUnion:kl,ZodIntersection:so,ZodTuple:Fn,ZodRecord:oo,ZodMap:qa,ZodSet:bi,ZodFunction:Gi,ZodLazy:ao,ZodLiteral:lo,ZodEnum:Gr,ZodNativeEnum:co,ZodPromise:rs,ZodEffects:In,ZodTransformer:In,ZodOptional:gr,ZodNullable:yi,ZodDefault:uo,ZodCatch:Wa,ZodNaN:Za,BRAND:Gk,ZodBranded:lm,ZodPipeline:_o,custom:cm,Schema:Le,ZodSchema:Le,late:Qk,get ZodFirstPartyTypeKind(){return _e},coerce:RE,any:iE,array:lE,bigint:Xk,boolean:fm,date:eE,discriminatedUnion:fE,effect:r0,enum:wE,function:bE,instanceof:Yk,intersection:hE,lazy:yE,literal:_E,map:mE,nan:Jk,nativeEnum:xE,never:oE,null:rE,nullable:EE,number:dm,object:cE,oboolean:IE,onumber:AE,optional:kE,ostring:TE,pipeline:SE,preprocess:CE,promise:$E,record:gE,set:vE,strictObject:uE,string:um,symbol:tE,transformer:r0,tuple:pE,undefined:nE,union:dE,unknown:sE,void:aE,NEVER:OE,ZodIssueCode:ee,quotelessJson:Mk,ZodError:Tn});const{decode:LE}=yo,PE=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,ME=/(?:#\[(?<idx>\d+)\])/g,BE=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,jE=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,UE=/:(?<emoji>\w+):/gu,hm=e=>{const t=[...e.matchAll(PE),...e.matchAll(ME),...e.matchAll(BE),...e.matchAll(jE),...e.matchAll(UE)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=LE(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},NE=e=>t=>e.safeParse(t).success,DE=at.tuple([at.literal("emoji"),at.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),at.string().url()]),zE=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&Xs(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let HE=class extends im{#e;#t;constructor(t){if(t.kind!==ct.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=hm(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&Xs(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&Xs(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=zE(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(NE(DE))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const hr=e=>new im(e),El=e=>new HE(e),FE=()=>{const e=[...Ak];return window.navigator.language.includes("ja")&&e.push(...Ik),e},pm=()=>({relayUrls:FE(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),qE=e=>JSON.stringify(e),WE=e=>({...pm(),...JSON.parse(e)}),ZE=Lx(()=>window.localStorage,qE,WE),[Hs,Vt]=Px("RabbitConfig",pm(),ZE),Pe=()=>{const e=_=>{Vt("relayUrls",A=>pr([...A,_]))},t=_=>{Vt("relayUrls",A=>A.filter(R=>R!==_))},n=_=>{Vt("mutedPubkeys",A=>pr([...A,_]))},i=_=>{Vt("mutedPubkeys",A=>A.filter(R=>R!==_))},o=_=>{Vt("mutedKeywords",A=>pr([...A,_]))},a=_=>{Vt("mutedKeywords",A=>A.filter(R=>R!==_))},l=_=>{Vt("columns",A=>{const R=A.findIndex(T=>T.id===_.id);if(R>=0){const T=[...A];return T.splice(R,1,_),T}return[...A,_]})},u=(_,A)=>{Vt("columns",R=>{const T=A-1,B=Math.max(Math.min(T,R.length),0),C=R.findIndex(te=>te.id===_);if(C<0||B===C)return R;console.log(C,B);const P=[...R],[U]=P.splice(C,1);return P.splice(B,0,U),P})},d=_=>{Vt("columns",A=>A.filter(R=>R.id!==_))},h=_=>{Vt("customEmojis",A=>({...A,[_.shortcode]:_}))},p=_=>{Vt("customEmojis",A=>{const R=Object.fromEntries(_.map(T=>[T.shortcode,T]));return{...A,...R}})},g=_=>{Vt("customEmojis",A=>({...A,[_]:void 0}))},v=_=>Hs.customEmojis[_],x=_=>Hs.mutedPubkeys.includes(_),k=_=>_.kind===ct.Text?Hs.mutedKeywords.some(A=>_.content.includes(A)):!1;return{config:()=>Hs,setConfig:Vt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:_})=>{if((Hs.columns?.length??0)>0)return;const A=[J1({width:"widest",pubkey:_}),X1({pubkey:_}),tm({name:"自分の投稿",pubkey:_}),nm({name:"自分のリアクション",pubkey:_})];navigator.language.includes("ja")&&A.splice(2,0,em()),Vt("columns",()=>[...A])},saveEmoji:h,saveEmojis:p,removeEmoji:g,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:x,shouldMuteEvent:_=>{const A=hr(_);return x(_.pubkey)||A.taggedPubkeys().some(x)||_.kind===ct.Text&&k(_)}}},KE=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},VE=e=>{const t=De(e),n=De(()=>t().batchSize??100),i=De(()=>t().interval??2e3),[o,a]=we(0),[l,u]=we([]);let d;const h=()=>{const{executor:w}=t(),E=l();E.length>0&&(u([]),w(E)),d!=null&&clearTimeout(d),d=void 0},p=()=>{const w=o();return a(E=>E+1),w},g=()=>{d==null&&(d=setTimeout(()=>{h()},i()))},v=w=>{l().length<n()?u(E=>[...E,w]):(h(),u([w]))},x=w=>{u(E=>E.filter(_=>_.id!==w))};return{exec:async(w,E)=>{const{promise:_,resolve:A,reject:R}=KE(),T=p();return v({id:T,args:w,resolve:A,reject:R}),g(),E?.addEventListener("abort",()=>{x(T),R(new Error("AbortError"))}),_}}},[GE]=we(new C9),Cl=()=>GE,[gm,i0]=Yi({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...gm})},1e3);const mm=()=>({stats:gm,setActiveSubscriptions:n=>i0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>i0("activeBatchSubscriptions",n)});let Ou=0;const{setActiveBatchSubscriptions:QE}=mm();setInterval(()=>{QE(Ou)},1e3);const YE={events:[],completed:!0},JE=()=>YE,XE=e=>e.kind>=3e4&&e.kind<4e4,eC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{exec:vs}=VE(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(C=>{if(C.args.type==="Event"){const P=n.get(C.args.eventId)??[];n.set(C.args.eventId,[...P,C])}else if(C.args.type==="Profile"){const P=t.get(C.args.pubkey)??[];t.set(C.args.pubkey,[...P,C])}else if(C.args.type==="Reactions"){const P=i.get(C.args.mentionedEventId)??[];i.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="Reposts"){const P=o.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="ZapReceipts"){const P=a.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="ParameterizedReplaceableEvent"){const P=eC(C.args),U=l.get(P)??[];l.set(P,[...U,C])}else if(C.args.type==="Followings"){const P=u.get(C.args.pubkey)??[];u.set(C.args.pubkey,[...P,C])}});const d=[...n.keys()],h=[...t.keys()],p=[...i.keys()],g=[...o.keys()],v=[...a.keys()],x=[...u.keys()],k=[];if(d.length>0&&k.push({ids:d}),h.length>0&&k.push({kinds:[ct.Metadata],authors:h}),p.length>0&&k.push({kinds:[ct.Reaction],"#e":p}),g.length>0&&k.push({kinds:[6],"#e":g}),v.length>0&&k.push({kinds:[9735],"#e":v}),x.length>0&&k.push({kinds:[ct.Contacts],authors:x}),l.size>0&&Array.from(l.values()).forEach(([C])=>{if(C.args.type!=="ParameterizedReplaceableEvent")return;const{args:{kind:P,author:U,identifier:te}}=C;k.push({kinds:[P],authors:[U],"#d":[te]})}),k.length===0)return;const w=new Map,E=(C,P)=>{C.forEach(U=>{const te=w.get(U.id)??we({events:[],completed:!1});w.set(U.id,te);const[W,Y]=te;Y(Z=>({...Z,events:[...Z.events,P]})),U.resolve(W)})},_=()=>{e.forEach(C=>{const P=w.get(C.id);if(P!=null){const U=P[1];U(te=>({...te,completed:!0}))}else C.resolve(JE)})},{config:A,shouldMuteEvent:R}=Pe(),B=Cl()().sub(A().relayUrls,k,{});Ou+=1,B.on("event",C=>{if(C.kind===ct.Metadata){const P=t.get(C.pubkey)??[];E(P,C);return}if(C.kind===ct.Reaction){const P=hr(C).lastTaggedEventId();if(P!=null){const U=i.get(P)??[];E(U,C)}}else if(C.kind===6){const P=hr(C).lastTaggedEventId();if(P!=null){const U=o.get(P)??[];E(U,C)}}else if(C.kind===ct.Zap)hr(C).eTags().forEach(([,U])=>{const te=o.get(U)??[];E(te,C)});else if(C.kind===ct.Contacts){const P=u.get(C.pubkey)??[];E(P,C)}else if(XE(C)){const P=hr(C).findFirstTagByName("d")?.[1];if(P!=null){const U=`${C.kind}:${C.pubkey}:${P}`,te=l.get(U)??[];E(te,C)}else console.warn("identifier is undefined")}else{const P=n.get(C.id)??[];P.length>0?E(P,C):console.warn("unknown event received")}}),B.on("eose",()=>{_(),B.unsub(),Ou-=1})}})),kd=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),wr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(l))},e)});return Promise.race([n,i])},vm=e=>{const t=De(e),n=wi(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=vs({type:"Event",eventId:u},a).then(h=>{const p=h().events[0];if(p==null)throw new Error(`event not found: ${u}`);return p});return wr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},on=e=>t=>e.some(n=>n==null)?null:t(e),tC=j("<span>投稿が見つかりません"),nC=j('<div class="truncate">読み込み中 '),is=e=>{const[t,n]=kx(e,["eventId"]),{shouldMuteEvent:i}=Pe(),{event:o,query:a}=vm(()=>on([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return $(Sn,{get fallback(){return(()=>{const u=tC();return u.firstChild,O(u,()=>e.eventId,null),u})()},get children(){return[$(ze,{get when(){return l()},children:null}),$(ze,{get when(){return o()},keyed:!0,children:u=>$(iv,Ex({event:u},n))}),$(ze,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=nC();return d.firstChild,O(d,$(Js,{eventId:u}),null),d})()})]}})},rC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},iC=e=>{try{return rC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},sC={staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3},oC=({queryKey:e,signal:t,queryClient:n})=>{const[,i]=e;if(i==null)return Promise.resolve(null);const{pubkey:o}=i,a=vs({type:"Profile",pubkey:o},t).then(l=>{const u=()=>{const d=kd(l().events);if(d==null)throw new Error(`profile not found: ${o}`);return d};return fo(l).subscribe(()=>{try{n.setQueryData(e,u())}catch(d){console.error("error occurred while updating profile cache: ",d)}}),u()});return wr(15e3,`useProfile: ${o}`)(a)},bs=e=>{const t=_i(),n=De(e),i=De(()=>["useProfile",n()]),o=wi(i,({queryKey:u,signal:d})=>oC({queryKey:u,signal:d,queryClient:t}),sC);return{profile:De(()=>{if(o.data==null)return null;const{content:u}=o.data;return iC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:aC}=yo,Sl=e=>{try{return aC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Tl=e=>{const{profile:t}=bs(()=>({pubkey:e.pubkey}));return $(Sn,{get fallback(){return Sl(e.pubkey)},get children(){return[$(ze,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),$(ze,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",De(()=>t()?.name)]}})]}})},bm=e=>{const[t,n]=we(new Date);return Un(()=>{const i=setInterval(()=>{n(new Date)},e().interval);vr(()=>clearInterval(i))}),t},lC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},s0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,cC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},uC=e=>{switch(e.kind){case"today":return s0(e.value);case"yesterday":return`昨日 ${s0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},dC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,fC=(e,t)=>{const n=dC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},o0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),hC=e=>new Date(+e-24*60*60*1e3),ym=(e,t,n)=>o0(e,t)?n({kind:"today",value:e}):o0(e,hC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),pC=(e,t=new Date)=>ym(e,t,cC),gC=(e,t=new Date)=>ym(e,t,uC),a0=(e,t=new Date,n=lC)=>n(fC(e,t)),l0=bm(()=>({interval:7e3})),c0=bm(()=>({interval:60*1e3})),_m=()=>{const{config:e}=Pe();return t=>{switch(e().dateFormat){case"absolute-long":return pC(t,c0());case"absolute-short":return gC(t,c0());case"relative":return a0(t,l0());default:return a0(t,l0())}}},[mC,Wi]=we({type:"Closed"}),Yr=()=>({modalState:mC,setModalState:Wi,showProfile:a=>{Wi({type:"Profile",pubkey:a})},showProfileEdit:()=>{Wi({type:"ProfileEdit"})},showAddColumn:()=>{Wi({type:"AddColumn"})},showAbout:()=>{Wi({type:"About"})},closeModal:()=>{Wi({type:"Closed"})}}),vC=j('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),wm=e=>{const{showProfile:t}=Yr(),n=_m(),i=De(()=>hr(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=vC(),l=a.firstChild,u=l.firstChild,d=u.nextSibling,h=d.firstChild,p=d.nextSibling,g=l.nextSibling;return O(u,$(Q1,{})),h.$$click=()=>t(e.event.pubkey),O(h,$(Tl,{get pubkey(){return e.event.pubkey}})),O(p,()=>n(i().createdAtAsDate())),O(g,$(is,{get eventId(){return o()}})),a})()};ut(["click"]);const bC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),yC=(e={})=>(()=>{const t=bC();return Ze(t,e,!0,!0),t})(),_C=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),xm=(e={})=>(()=>{const t=_C();return Ze(t,e,!0,!0),t})(),wC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Ed=(e={})=>(()=>{const t=wC();return Ze(t,e,!0,!0),t})(),xC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),$m=(e={})=>(()=>{const t=xC();return Ze(t,e,!0,!0),t})(),$C=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Cd=(e={})=>(()=>{const t=$C();return Ze(t,e,!0,!0),t})(),kC=j('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Sd=e=>{let t,n;const[i,o]=we(!1),[a,l]=we({}),u=Cx(()=>e.children),d=()=>o(!1),h=()=>o(k=>!k),p=k=>{const w=k.target;w!=null&&!n?.contains(w)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},x=()=>{if(t==null||n==null)return;const k=t?.getBoundingClientRect(),w=n?.getBoundingClientRect();let{top:E,left:_}=k;e.position==="left"?_-=k.width:e.position==="right"?_+=k.width:e.position==="top"?(E-=k.height,_-=k.left+k.width/2):(E+=k.height,_+=k.width/2),E=Math.min(E,window.innerHeight-w.height),_=Math.min(_,window.innerWidth-w.width),l({left:`${_}px`,top:`${E}px`})};return Un(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),Un(rl(u,()=>{x()})),Un(()=>{i()&&x()}),an(()=>{e.ref?.({close:d})}),vr(()=>v()),(()=>{const k=kC(),w=k.firstChild,E=w.nextSibling;w.$$click=()=>{h(),x()};const _=t;typeof _=="function"?br(_,w):t=w,O(w,()=>e.button);const A=n;return typeof A=="function"?br(A,E):n=E,O(E,u),je(R=>{const T=!i(),B=!!i(),C=a();return T!==R._v$&&E.classList.toggle("hidden",R._v$=T),B!==R._v$2&&E.classList.toggle("block",R._v$2=B),R._v$3=Sx(E,C,R._v$3),R},{_v$:void 0,_v$2:void 0,_v$3:void 0}),k})()};ut(["click"]);const EC=j('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),CC=j('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),SC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=EC(),i=n.firstChild;return i.$$click=t,O(i,()=>e.item.content()),n})()},km=e=>{let t;const n=()=>t?.close();return $(Sd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=CC();return O(i,$(Tt,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>$(SC,{item:o,onClose:n})})),i}})};ut(["click"]);function Em(e){return e&&e.__esModule?e.default:e}function kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Al,me,Cm,Ws,Sm,u0,Ka={},Tm=[],TC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Hr(e,t){for(var n in t)e[n]=t[n];return e}function Am(e){var t=e.parentNode;t&&t.removeChild(e)}function Lu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Al.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Ea(e,l,i,o,null)}function Ea(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Cm};return o==null&&me.vnode!=null&&me.vnode(a),a}function cr(){return{current:null}}function ss(e){return e.children}function Nn(e,t){this.props=e,this.context=t}function os(e,t){if(t==null)return e.__?os(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?os(e):null}function Im(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Im(e)}}function d0(e){(!e.__d&&(e.__d=!0)&&Ws.push(e)&&!Va.__r++||u0!==me.debounceRendering)&&((u0=me.debounceRendering)||Sm)(Va)}function Va(){for(var e;Va.__r=Ws.length;)e=Ws.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ws=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Hr({},a)).__v=a.__v+1,Td(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??os(a),a.__h),Pm(i,a),a.__e!=l&&Im(a)))})}function Rm(e,t,n,i,o,a,l,u,d,h){var p,g,v,x,k,w,E,_=i&&i.__k||Tm,A=_.length;for(n.__k=[],p=0;p<t.length;p++)if((x=n.__k[p]=(x=t[p])==null||typeof x=="boolean"?null:typeof x=="string"||typeof x=="number"||typeof x=="bigint"?Ea(null,x,null,null,x):Array.isArray(x)?Ea(ss,{children:x},null,null,null):x.__b>0?Ea(x.type,x.props,x.key,null,x.__v):x)!=null){if(x.__=n,x.__b=n.__b+1,(v=_[p])===null||v&&x.key==v.key&&x.type===v.type)_[p]=void 0;else for(g=0;g<A;g++){if((v=_[g])&&x.key==v.key&&x.type===v.type){_[g]=void 0;break}v=null}Td(e,x,v=v||Ka,o,a,l,u,d,h),k=x.__e,(g=x.ref)&&v.ref!=g&&(E||(E=[]),v.ref&&E.push(v.ref,null,x),E.push(g,x.__c||k,x)),k!=null?(w==null&&(w=k),typeof x.type=="function"&&x.__k===v.__k?x.__d=d=Om(x,d,e):d=Lm(e,x,v,_,k,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=os(v))}for(n.__e=w,p=A;p--;)_[p]!=null&&(typeof n.type=="function"&&_[p].__e!=null&&_[p].__e==n.__d&&(n.__d=os(i,p+1)),Bm(_[p],_[p]));if(E)for(p=0;p<E.length;p++)Mm(E[p],E[++p],E[++p])}function Om(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Om(i,t,n):Lm(n,i,i,o,i.__e,t));return t}function Ga(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ga(n,t)}):t.push(e)),t}function Lm(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function AC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Qa(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Qa(e,a,t[a],n[a],i)}function f0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||TC.test(t)?n:n+"px"}function Qa(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||f0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||f0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?p0:h0,a):e.removeEventListener(t,a?p0:h0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function h0(e){this.l[e.type+!1](me.event?me.event(e):e)}function p0(e){this.l[e.type+!0](me.event?me.event(e):e)}function Td(e,t,n,i,o,a,l,u,d){var h,p,g,v,x,k,w,E,_,A,R,T=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(h=me.__b)&&h(t);try{e:if(typeof T=="function"){if(E=t.props,_=(h=T.contextType)&&i[h.__c],A=h?_?_.props.value:h.__:i,n.__c?w=(p=t.__c=n.__c).__=p.__E:("prototype"in T&&T.prototype.render?t.__c=p=new T(E,A):(t.__c=p=new Nn(E,A),p.constructor=T,p.render=RC),_&&_.sub(p),p.props=E,p.state||(p.state={}),p.context=A,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),T.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Hr({},p.__s)),Hr(p.__s,T.getDerivedStateFromProps(E,p.__s))),v=p.props,x=p.state,g)T.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(T.getDerivedStateFromProps==null&&E!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,A),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(E,p.__s,A)===!1||t.__v===n.__v){p.props=E,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(B){B&&(B.__=t)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,A),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,x,k)})}p.context=A,p.props=E,p.state=p.__s,(h=me.__r)&&h(t),p.__d=!1,p.__v=t,p.__P=e,h=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Hr(Hr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(k=p.getSnapshotBeforeUpdate(v,x)),R=h!=null&&h.type===ss&&h.key==null?h.props.children:h,Rm(e,Array.isArray(R)?R:[R],t,n,i,o,a,l,u,d),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),w&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=IC(n.__e,t,n,i,o,a,l,d);(h=me.diffed)&&h(t)}catch(B){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),me.__e(B,t,n)}}function Pm(e,t){me.__c&&me.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){me.__e(i,n.__v)}})}function IC(e,t,n,i,o,a,l,u){var d,h,p,g=n.props,v=t.props,x=t.type,k=0;if(x==="svg"&&(o=!0),a!=null){for(;k<a.length;k++)if((d=a[k])&&"setAttribute"in d==!!x&&(x?d.localName===x:d.nodeType===3)){e=d,a[k]=null;break}}if(e==null){if(x===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,v.is&&v),a=null,u=!1}if(x===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Al.call(e.childNodes),h=(g=n.props||Ka).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},k=0;k<e.attributes.length;k++)g[e.attributes[k].name]=e.attributes[k].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(AC(e,v,g,o,u),p)t.__k=[];else if(k=t.props.children,Rm(e,Array.isArray(k)?k:[k],t,n,i,o&&x!=="foreignObject",a,l,a?a[0]:n.__k&&os(n,0),u),a!=null)for(k=a.length;k--;)a[k]!=null&&Am(a[k]);u||("value"in v&&(k=v.value)!==void 0&&(k!==g.value||k!==e.value||x==="progress"&&!k)&&Qa(e,"value",k,g.value,!1),"checked"in v&&(k=v.checked)!==void 0&&k!==e.checked&&Qa(e,"checked",k,g.checked,!1))}return e}function Mm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){me.__e(i,n)}}function Bm(e,t,n){var i,o;if(me.unmount&&me.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Mm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){me.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Bm(i[o],t,typeof e.type!="function");n||e.__e==null||Am(e.__e),e.__e=e.__d=void 0}function RC(e,t,n){return this.constructor(e,n)}function jm(e,t,n){var i,o,a;me.__&&me.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Td(t,e=(!i&&n||t).__k=Lu(ss,null,[e]),o||Ka,Ka,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Al.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),Pm(a,e)}Al=Tm.slice,me={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Cm=0,Nn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Hr({},this.state),typeof e=="function"&&(e=e(Hr({},n),this.props)),e&&Hr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),d0(this))},Nn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),d0(this))},Nn.prototype.render=ss,Ws=[],Sm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Va.__r=0;var OC=0;function K(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--OC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return me.vnode&&me.vnode(d),d}function LC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function PC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var qr={set:LC,get:PC};const ou=new Map,MC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function BC(){for(const{v:e,emoji:t}of MC)if(Um(t))return e}function jC(){return!Um("🇨🇦")}function Um(e){if(ou.has(e))return ou.get(e);const t=UC(e);return ou.set(e,t),t}const UC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,h=Math.floor(u/4/n),p=e.getImageData(d,h,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var g0={latestVersion:BC,noCountryFlags:jC};const Pu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Ct=null;function NC(e){Ct||(Ct=qr.get("frequently")||{});const t=e.id||e;t&&(Ct[t]||(Ct[t]=0),Ct[t]+=1,qr.set("last",t),qr.set("frequently",Ct))}function DC({maxFrequentRows:e,perLine:t}){if(!e)return[];Ct||(Ct=qr.get("frequently"));let n=[];if(!Ct){Ct={};for(let a in Pu.slice(0,t)){const l=Pu[a];Ct[l]=t-a,n.push(l)}return n}const i=e*t,o=qr.get("last");for(let a in Ct)n.push(a);if(n.sort((a,l)=>{const u=Ct[l],d=Ct[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Ct[l];o&&n.indexOf(o)==-1&&(delete Ct[n[n.length-1]],n.splice(-1,1,o)),qr.set("frequently",Ct)}return n}var Nm={add:NC,get:DC,DEFAULTS:Pu},Dm={};Dm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var fr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Ot=null,Be=null;const au={};async function m0(e){if(au[e])return au[e];const n=await(await fetch(e)).json();return au[e]=n,n}let lu=null,zm=null,Hm=!1;function Il(e,{caller:t}={}){return lu||(lu=new Promise(n=>{zm=n})),e?zC(e):t&&!Hm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),lu}async function zC(e){Hm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=fr.emojiVersion.value),n||(n=fr.set.value),i||(i=fr.locale.value),Be)Be.categories=Be.categories.filter(d=>!d.name);else{Be=(typeof e.data=="function"?await e.data():e.data)||await m0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Be.emoticons={},Be.natives={},Be.categories.unshift({id:"frequent",emojis:[]});for(const d in Be.aliases){const h=Be.aliases[d],p=Be.emojis[h];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}Be.originalCategories=Be.categories}if(Ot=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Em(Dm):await m0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const h=e.custom[d],p=e.custom[d-1];if(!(!h.emojis||!h.emojis.length)){h.id||(h.id=`custom_${d+1}`),h.name||(h.name=Ot.categories.custom),p&&!h.icon&&(h.target=p.target||p),Be.categories.push(h);for(const g of h.emojis)Be.emojis[g.id]=g}}e.categories&&(Be.categories=Be.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,h)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(h.id);return p-g}));let o=null,a=null;n=="native"&&(o=g0.latestVersion(),a=e.noCountryFlags||g0.noCountryFlags());let l=Be.categories.length,u=!1;for(;l--;){const d=Be.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:fr.maxFrequentRows.value,v||(v=fr.perLine.value),d.emojis=Nm.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){Be.categories.splice(l,1);continue}const{categoryIcons:h}=e;if(h){const g=h[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:Be.emojis[g],x=()=>{d.emojis.splice(p,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){x();continue}if(o&&v.version>o){x();continue}if(a&&d.id=="flags"&&!ZC.includes(v.id)){x();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([w,E])=>{if(w)return(Array.isArray(w)?w:[w]).map(_=>(E?_.split(/[-|_|\s]+/):[_]).map(A=>A.toLowerCase())).flat()}).flat().filter(w=>w&&w.trim()).join(","),v.emoticons)for(const w of v.emoticons)Be.emoticons[w]||(Be.emoticons[w]=v.id);let k=0;for(const w of v.skins){if(!w)continue;k++;const{native:E}=w;E&&(Be.natives[E]=v.id,v.search+=`,${E}`);const _=k==1?"":`:skin-tone-${k}:`;w.shortcodes=`:${v.id}:${_}`}}}}u&&Qi.reset(),zm()}function Fm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=qm(o,e,t,n);return i}function qm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const HC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Mu=null;function FC(e){return e.id?e:Be.emojis[e]||Be.emojis[Be.aliases[e]]||Be.emojis[Be.natives[e]]}function qC(){Mu=null}async function WC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Il(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,h)=>u.trim()&&h.indexOf(u)==d);if(!i.length)return;let o=Mu||(Mu=Object.values(Be.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const h=d.search.indexOf(`,${u}`);h!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:h+1)}o=a}return a.length<2||(a.sort((u,d)=>{const h=l[u.id],p=l[d.id];return h==p?u.id.localeCompare(d.id):h-p}),a.length>t&&(a=a.slice(0,t))),a}var Qi={search:WC,get:FC,reset:qC,SHORTCODES_REGEX:HC};const ZC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function KC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function VC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function GC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const QC={activity:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:K("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),K("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:K("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),K("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:K("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),K("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),K("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},YC={loupe:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ya={categories:QC,search:YC};function Bu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return K("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?K("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?K("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):K("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*Be.sheet.cols}% ${100*Be.sheet.rows}%`,backgroundPosition:`${100/(Be.sheet.cols-1)*o.x}% ${100/(Be.sheet.rows-1)*o.y}%`}})})}const JC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Wm extends JC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=qm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class XC extends Wm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Zm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:fr.set,skin:fr.skin};class Km extends Wm{async connectedCallback(){const t=Fm(this.props,Zm,this);t.element=this,t.ref=n=>{this.component=n},await Il(),!this.disconnected&&jm(K(Bu,{...t}),this)}constructor(t){super(t)}}kn(Km,"Props",Zm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Km);var v0,ju=[],b0=me.__b,y0=me.__r,_0=me.diffed,w0=me.__c,x0=me.unmount;function eS(){var e;for(ju.sort(function(t,n){return t.__v.__b-n.__v.__b});e=ju.pop();)if(e.__P)try{e.__H.__h.forEach(Ca),e.__H.__h.forEach(Uu),e.__H.__h=[]}catch(t){e.__H.__h=[],me.__e(t,e.__v)}}me.__b=function(e){b0&&b0(e)},me.__r=function(e){y0&&y0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ca),t.__h.forEach(Uu),t.__h=[])},me.diffed=function(e){_0&&_0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ju.push(t)!==1&&v0===me.requestAnimationFrame||((v0=me.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),$0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);$0&&(i=requestAnimationFrame(o))})(eS))},me.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ca),n.__h=n.__h.filter(function(i){return!i.__||Uu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],me.__e(i,n.__v)}}),w0&&w0(e,t)},me.unmount=function(e){x0&&x0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ca(i)}catch(o){t=o}}),t&&me.__e(t,n.__v))};var $0=typeof requestAnimationFrame=="function";function Ca(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Uu(e){e.__c=e.__()}function tS(e,t){for(var n in t)e[n]=t[n];return e}function k0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ja(e){this.props=e}(Ja.prototype=new Nn).isPureReactComponent=!0,Ja.prototype.shouldComponentUpdate=function(e,t){return k0(this.props,e)||k0(this.state,t)};var E0=me.__b;me.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),E0&&E0(e)};var nS=me.__e;me.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}nS(e,t,n)};var C0=me.unmount;function cu(){this.__u=0,this.t=null,this.__b=null}function Vm(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ya(){this.u=null,this.o=null}me.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),C0&&C0(e)},(cu.prototype=new Nn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Vm(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var h=i.state.__e;i.__v.__k[0]=function g(v,x,k){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(w){return g(w,x,k)}),v.__c&&v.__c.__P===x&&(v.__e&&k.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=k)),v}(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},cu.prototype.componentWillUnmount=function(){this.t=[]},cu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),l.__c.__H=null),(l=tS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(h){return a(h,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Lu(ss,null,e.fallback);return o&&(o.__h=null),[Lu(ss,null,t.__e?null:e.children),o]};var S0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ya.prototype=new Nn).__e=function(e){var t=this,n=Vm(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),S0(t,e,i)):o()};n?n(a):a()}},ya.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ga(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ya.prototype.componentDidUpdate=ya.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){S0(e,n,t)})};var rS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,iS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,sS=typeof document<"u",oS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Nn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Nn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var T0=me.event;function aS(){}function lS(){return this.cancelBubble}function cS(){return this.defaultPrevented}me.event=function(e){return T0&&(e=T0(e)),e.persist=aS,e.isPropagationStopped=lS,e.isDefaultPrevented=cS,e.nativeEvent=e};var A0={configurable:!0,get:function(){return this.class}},I0=me.vnode;me.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];sS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!oS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&iS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(A0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",A0))}e.$$typeof=rS,I0&&I0(e)};var R0=me.__r;me.__r=function(e){R0&&R0(e),e.__c};const uS={light:"outline",dark:"solid"};class dS extends Ja{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return K("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return K("img",{src:n.src})}const i=Ya.categories[t.id]||Ya.categories.custom,o=this.props.icons=="auto"?uS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return K("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:K("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Ot.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),K("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),K("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Be.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class fS extends Ja{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const _a={rowsPerRender:10};class hS extends Nn{getInitialState(t=this.props){return{skin:qr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Ot.rtl?"rtl":"ltr",this.refs={menu:cr(),navigation:cr(),scroll:cr(),search:cr(),searchInput:cr(),skinToneButton:cr(),skinToneRadio:cr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Il(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Be;this.refs.categories=new Map;const n=Be.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%_a.rowsPerRender?{}:cr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:cr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const h=d.target.dataset.id;n.set(h,d.intersectionRatio)}const u=[...n];for(const[d,h]of u)if(h){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(_a.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*_a.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,h]=this.state.pos;const p=(()=>{if(d==0&&h==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(h+=v,!g[h]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,h=i?0:u[d].length-1,[d,h];h=i?g.length-1:0}return[d,h]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[h]||(h=g.length-1),[d,h]):(d=a?0:u.length-1,h=a?0:u[d].length-1,[d,h])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,h=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(h>o.scrollTop+a.height)l=h-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=GC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Nm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),qr.set("skin",t)}renderNav(){return K(dS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return K("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[K("div",{class:"flex flex-middle flex-grow",children:[K("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:K(Bu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),K("div",{class:`margin-${this.dir[0]}`,children:t||n?K("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[K("div",{class:"preview-title ellipsis",children:t?t.name:Ot.search_no_results_1}),K("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Ot.search_no_results_2})]}):K("div",{class:"preview-placeholder color-c",children:Ot.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,h=KC(this.state.pos,n),p=n.concat(t.id).join("");return K(fS,{selected:h,skin:l,size:a,children:K("button",{"aria-label":d,"aria-selected":h||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[K("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),K(Bu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return K("div",{children:[K("div",{class:"spacer"}),K("div",{class:"flex flex-middle",children:[K("div",{class:"search relative flex-grow",children:[K("input",{type:"search",ref:this.refs.searchInput,placeholder:Ot.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),K("span",{class:"icon loupe flex",children:Ya.search.loupe}),this.state.searchResults&&K("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ya.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?K("div",{class:"category",ref:this.refs.search,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Ot.categories.search}),K("div",{children:t.length?t.map((n,i)=>K("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):K("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&K("a",{onClick:this.props.onAddCustomEmoji,children:Ot.add_custom})})})]}):null}renderCategories(){const{categories:t}=Be,n=!!this.state.searchResults,i=this.getPerLine();return K("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return K("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Ot.categories[o.id]}),K("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const h=u.index-u.index%_a.rowsPerRender,p=this.state.visibleRows[h],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,x=v+i,k=o.emojis.slice(v,x);return k.length<i&&k.push(...new Array(i-k.length)),K("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&k.map((w,E)=>{if(!w)return K("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const _=Qi.get(w);return this.renderEmojiButton(_,{pos:[u.index,E],posinset:u.posinset+E,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:K("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:K("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Ot.skins.choose,title:Ot.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:K("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return K("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),K("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Ot.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return K("div",{children:[K("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Ot.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),K("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[K("span",{class:`skin-tone skin-tone-${l}`}),K("span",{class:"margin-small-lr",children:Ot.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return K("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&K("div",{class:"padding-lr",children:this.renderSearch()}),K("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:K("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),kn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),kn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),kn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),kn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),kn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let h of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(h);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),kn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),kn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),kn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),kn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await VC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Ad extends XC{async connectedCallback(){const t=Fm(this.props,fr,this);t.element=this,t.ref=n=>{this.component=n},await Il(t),!this.disconnected&&jm(K(hS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Em(Gm)})}}kn(Ad,"Props",fr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Ad);var Gm={};Gm=`:host {
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

`;const Qm=e=>{let t;const[n,i]=we(void 0);return $(Sd,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new Ad({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},pS=j("<div>"),gS=j('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),mS=j("<br>"),vS=j("<span>理由: "),bS=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),yS=e=>{const[t,n]=we(!1);return $(ue,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=bS();return i.firstChild,i.$$click=()=>n(!0),O(i,$(ue,{get when(){return e.contentWarning.reason!=null},get children(){return[mS(),(()=>{const o=vS();return o.firstChild,O(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=pS();return O(i,()=>e.children),i})(),$(ue,{get when(){return e.contentWarning.contentWarning},get children(){const i=gS();return i.$$click=()=>n(!1),i}})]}})};ut(["click"]);const Ym=e=>{const{profile:t}=bs(()=>({pubkey:e.pubkey}));return $(ue,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Sl(e.pubkey)}`},get children(){return["@",De(()=>t()?.name??e.pubkey)]}})},_S=j('<a target="_blank" rel="noreferrer noopener">'),Rl=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return $(ue,{get when(){return t()},get fallback(){return e.href},get children(){const n=_S();return O(n,()=>e.children??e.href),je(i=>{const o=e.class,a=e.href;return o!==i._v$&&Tx(n,i._v$=o),a!==i._v$2&&pt(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},wS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},xS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},$S=j('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),kS=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),ES=e=>{let t;const[n,i]=we(e.initialHidden);return $(ue,{get when(){return!n()},get fallback(){return(()=>{const o=kS();return o.$$click=()=>i(!1),o})()},get children(){return $(Rl,{class:"my-2 block",get href(){return e.url},get children(){const o=$S(),a=t;return typeof a=="function"?br(a,o):t=o,je(l=>{const u=xS(e.url),d=e.url;return u!==l._v$&&pt(o,"src",l._v$=u),d!==l._v$2&&pt(o,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),o}})}})};ut(["click"]);const CS=j('<div class="my-1 rounded border p-1">'),SS=e=>$(ue,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return $(Js,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=CS();return O(t,$(is,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ct.Text]}})),t}}),TS=j('<button class="inline text-blue-500 underline">'),uu=e=>{const{showProfile:t}=Yr(),n=()=>{t(e.pubkey)};return(()=>{const i=TS();return i.$$click=n,O(i,$(Ym,{get pubkey(){return e.pubkey}})),i})()};ut(["click"]);const[Id,AS]=we({}),Jm=e=>{Id()[e]==null&&AS(t=>({...t,[e]:new MessageChannel}))},IS=e=>{const t=()=>Id()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const h=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",h),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",h),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",h,!1),t().port1.start()});return an(()=>{const{id:o}=e();Jm(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},RS=e=>{const t=De(e),n=()=>Id()[t().id];an(()=>{const{id:i}=t();Jm(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,h=t().handler(d);(h instanceof Promise?h:Promise.resolve(h)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),vr(()=>{o.removeEventListener("message",a)})})},wo=()=>IS(()=>({id:"CommandChannel"})),Nu=e=>{RS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},du=j("<span>"),O0=j('<div class="my-1 rounded border p-1">'),OS=j('<span class="text-blue-500 underline">'),LS=j('<button class="text-blue-500 underline">'),PS=j('<img class="inline-block h-8 max-w-[128px] align-middle">'),MS=e=>{const{config:t,saveColumn:n}=Pe(),i=wo(),o=()=>El(e.event),a=l=>{n($d({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return $(Tt,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=du();return O(u,()=>l.content),u})();if(l.type==="URL")return wS(l.content)?$(ES,{get url(){return l.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):$(Rl,{class:"text-blue-500 underline",get href(){return l.content}});if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=du();return O(d,()=>l.content),d})();if(u.type==="MentionedUser")return $(uu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?$(SS,{mentionedEvent:u}):$(Js,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=O0();return O(u,$(is,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ct.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=O0();return O(u,$(is,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?$(uu,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?$(uu,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=OS();return O(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=LS();return u.$$click=()=>a(l.content),O(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=du();return O(d,()=>l.content),d})():(()=>{const d=PS();return pt(d,"src",u),je(h=>{const p=l.content,g=l.shortcode;return p!==h._v$&&pt(d,"alt",h._v$=p),g!==h._v$2&&pt(d,"title",h._v$2=g),h},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};ut(["click"]);const BS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Xm=(e={})=>(()=>{const t=BS();return Ze(t,e,!0,!0),t})(),jS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),US=(e={})=>(()=>{const t=jS();return Ze(t,e,!0,!0),t})(),NS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),as=(e={})=>(()=>{const t=NS();return Ze(t,e,!0,!0),t})(),DS=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),zS=(e={})=>(()=>{const t=DS();return Ze(t,e,!0,!0),t})(),HS=e=>Math.floor(+e/1e3),ur=()=>HS(new Date),FS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),qS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],h=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...h,...p]},Ol=()=>{const e=Cl(),t=async(d,h)=>{const p={...h};if(p.id=bl(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async v=>{const k=(await e().ensureRelay(v)).publish(g);return FS(k,v)})};return{publishTextNote:async d=>{const{relayUrls:h,pubkey:p,content:g}=d,v=qS(d),x={kind:1,pubkey:p,created_at:ur(),tags:v,content:g};return t(h,x)},publishReaction:async({relayUrls:d,pubkey:h,eventId:p,content:g,notifyPubkey:v})=>{const x={kind:7,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",v]],content:g};return t(d,x)},publishRepost:async({relayUrls:d,pubkey:h,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:h,profile:p,otherProperties:g})=>{const v={...p,...g},x={kind:ct.Metadata,pubkey:h,created_at:ur(),tags:[],content:JSON.stringify(v)};return t(d,x)},updateContacts:async({relayUrls:d,pubkey:h,followingPubkeys:p,content:g})=>{const v=p.map(k=>["p",k]),x={kind:ct.Contacts,pubkey:h,created_at:ur(),tags:v,content:g};return t(d,x)},deleteEvent:async({relayUrls:d,pubkey:h,eventId:p})=>{const g={kind:ct.EventDeletion,pubkey:h,created_at:ur(),tags:[["e",p,""]],content:""};return t(d,g)}}};let fu=!1;const[wa,WS]=we(void 0),Kn=()=>(an(()=>{if(wa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),wa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&wa()==null&&!fu&&(fu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),WS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{fu=!1})),e+=1},200)}),wa),ZS=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},KS=e=>t=>Promise.allSettled(t.map(n=>e(n))),VS=j("<div>に返信"),GS=j('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),QS=j('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),YS=j('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),JS=j('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),XS=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},eT=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},tT=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},ev=e=>{let t,n;const[i,o]=we(""),[a,l]=we(!1),[u,d]=we(""),h=G=>o(ae=>`${ae} ${G}`),p=()=>{o(""),d(""),l(!1)},g=()=>{t?.blur(),p(),e.onClose()},{config:v,getEmoji:x}=Pe(),k=Kn(),w=Ol(),E=()=>e.replyTo&&El(e.replyTo),_=()=>e.mode??"normal",A=pi({mutationKey:["publishTextNote"],mutationFn:w.publishTextNote.bind(w),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:G=>{console.error("error",G)}}),R=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},T=pi({mutationKey:["uploadFiles"],mutationFn:async G=>{const ae=await KS(ZS)(G),de=[];if(ae.forEach((re,Q)=>{re.status==="fulfilled"?(h(re.value.imageUrl),R()):de.push(G[Q])}),de.length>0){const re=de.map(Q=>Q.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${re}`)}}}),B=De(()=>{const G=k();return E()?.taggedPubkeys()?.filter(ae=>ae!==G)??[]}),C=De(()=>e.replyTo==null?[]:pr([e.replyTo.pubkey,...B()])),P=G=>{const ae=[];return G.forEach(de=>{const re=x(de);re!=null&&ae.push(["emoji",de,re.url])}),ae},U=()=>{if(i().length===0||A.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(i())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const G=k();if(G==null){console.error("pubkey is not available");return}const ae=hm(i()),{hashtags:de,urlReferences:re,pubkeyReferences:Q,eventReferences:he,emojis:xe}=eT(ae),Re=tT(ae),Je=P(xe);let J={relayUrls:v().relayUrls,pubkey:G,content:Re,notifyPubkeys:Q,mentionEventIds:he,hashtags:de,urls:re,tags:Je};E()!=null&&(J={...J,notifyPubkeys:pr([...C(),...Q]),rootEventId:E()?.rootEvent()?.id??E()?.replyingToEvent()?.id,replyEventId:E()?.id}),a()&&(J={...J,contentWarning:u()}),A.mutate(J),g()},te=G=>{o(G.currentTarget.value),R()},W=G=>{G.preventDefault(),U()},Y=G=>{G.key==="Enter"&&(G.ctrlKey||G.metaKey)?U():G.key==="Escape"&&(t?.blur(),g())},Z=G=>{if(G.preventDefault(),T.isLoading)return;const ae=[...G.currentTarget.files??[]];T.mutate(ae),G.currentTarget.value=""},X=G=>{if(G.preventDefault(),T.isLoading)return;const ae=[...G?.dataTransfer?.files??[]];T.mutate(ae)},se=G=>{if(T.isLoading)return;const ae=[...G?.clipboardData?.items??[]],de=[];ae.forEach(re=>{if(re.kind==="file"){G.preventDefault();const Q=re.getAsFile();if(Q==null)return;de.push(Q)}}),de.length!==0&&T.mutate(de)},q=G=>{G.preventDefault()},D=()=>i().trim().length===0||A.isLoading||T.isLoading,ne=()=>T.isLoading;return an(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const G=JS(),ae=G.firstChild,de=ae.firstChild,re=de.nextSibling,Q=re.firstChild,he=Q.nextSibling,xe=he.nextSibling,Re=re.nextSibling;O(G,$(ue,{get when(){return e.replyTo!=null},get children(){const J=VS(),qe=J.firstChild;return O(J,$(Tt,{get each(){return C()},children:(nt,Te)=>[$(Tl,{pubkey:nt}),$(ue,{get when(){return Te()!==C().length-1},children:" と "})]}),qe),J}}),ae),ae.addEventListener("submit",W),O(ae,$(ue,{get when(){return a()},get children(){const J=GS();return J.$$input=qe=>d(qe.currentTarget.value),je(()=>J.value=u()),J}}),de),de.addEventListener("paste",se),de.addEventListener("drop",X),de.addEventListener("dragover",q),de.$$keydown=Y,de.$$input=te,br(J=>{t=J,e.textAreaRef?.(J)},de),O(re,$(ue,{get when(){return _()==="reply"},get children(){const J=QS(),qe=J.firstChild;return qe.$$click=()=>g(),O(qe,$(as,{})),J}}),Q),O(re,$(Qm,{customEmojis:!0,onEmojiSelect:J=>h(J),get children(){const J=YS();return O(J,$(Xm,{})),J}}),Q),Q.$$click=()=>l(J=>!J),he.$$click=()=>n?.click(),O(he,$(US,{})),O(xe,$(zS,{})),Re.addEventListener("change",Z);const Je=n;return typeof Je=="function"?br(Je,Re):n=Re,je(J=>{const qe=XS(_()),nt=!a(),Te=!!a(),Xe=_()==="normal",rt=_()==="normal",At=_()==="reply",Ve=_()==="reply",Ht=!!ne(),Gn=!ne(),_t=_()==="normal",$r=_()==="normal",Ei=_()==="reply",Ln=_()==="reply",mt=ne(),bn=!!D(),Pn=!D(),Ci=_()==="normal",ye=_()==="normal",Qn=_()==="reply",Gt=_()==="reply",Ft=D();return qe!==J._v$&&pt(de,"placeholder",J._v$=qe),nt!==J._v$2&&Q.classList.toggle("bg-rose-300",J._v$2=nt),Te!==J._v$3&&Q.classList.toggle("bg-rose-400",J._v$3=Te),Xe!==J._v$4&&Q.classList.toggle("h-8",J._v$4=Xe),rt!==J._v$5&&Q.classList.toggle("w-8",J._v$5=rt),At!==J._v$6&&Q.classList.toggle("h-7",J._v$6=At),Ve!==J._v$7&&Q.classList.toggle("w-7",J._v$7=Ve),Ht!==J._v$8&&he.classList.toggle("bg-primary-disabled",J._v$8=Ht),Gn!==J._v$9&&he.classList.toggle("bg-primary",J._v$9=Gn),_t!==J._v$10&&he.classList.toggle("h-8",J._v$10=_t),$r!==J._v$11&&he.classList.toggle("w-8",J._v$11=$r),Ei!==J._v$12&&he.classList.toggle("h-7",J._v$12=Ei),Ln!==J._v$13&&he.classList.toggle("w-7",J._v$13=Ln),mt!==J._v$14&&(he.disabled=J._v$14=mt),bn!==J._v$15&&xe.classList.toggle("bg-primary-disabled",J._v$15=bn),Pn!==J._v$16&&xe.classList.toggle("bg-primary",J._v$16=Pn),Ci!==J._v$17&&xe.classList.toggle("h-8",J._v$17=Ci),ye!==J._v$18&&xe.classList.toggle("w-8",J._v$18=ye),Qn!==J._v$19&&xe.classList.toggle("h-7",J._v$19=Qn),Gt!==J._v$20&&xe.classList.toggle("w-7",J._v$20=Gt),Ft!==J._v$21&&(xe.disabled=J._v$21=Ft),J},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),je(()=>de.value=i()),G})()};ut(["input","keydown","click"]);const nT=()=>{let e;const[t,n]=we(!1),i=o=>{e=o};return an(()=>{e!=null&&n(e.scrollHeight>e.clientHeight)}),{overflow:t,elementRef:i}},rT=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),iT=j('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),sT=j('<img alt="icon" class="h-full w-full rounded object-cover">'),oT=e=>{const{overflow:t,elementRef:n}=nT(),i=_m(),[o,a]=we(),l=()=>i(e.createdAt);return(()=>{const u=iT(),d=u.firstChild,h=d.firstChild,p=h.nextSibling,g=p.firstChild,v=g.firstChild,x=v.nextSibling,k=x.firstChild,w=g.nextSibling,E=w.nextSibling;return h.$$click=_=>{_.preventDefault(),e.onShowProfile?.()},O(h,$(ue,{get when(){return e.authorPictureUrl},keyed:!0,children:_=>(()=>{const A=sT();return pt(A,"src",_),A})()})),v.$$click=_=>{_.preventDefault(),e?.onShowProfile?.()},O(v,()=>e.author),k.$$click=_=>{_.preventDefault(),e.onShowEvent?.()},O(k,l),br(n,w),O(w,()=>e.content),O(p,$(ue,{get when(){return t()},get children(){const _=rT();return _.$$click=A=>{A.stopPropagation(),a(R=>!R)},O(_,$(ue,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),_}}),E),O(E,()=>e.actions),O(u,$(ue,{get when(){return e.footer},get children(){return e.footer}}),null),je(()=>w.classList.toggle("max-h-screen",!o())),u})()};ut(["click"]);const tv=Ax(),aT=()=>Ix(tv),lT=()=>{const[e,t]=Yi({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},cT=/\p{Emoji_Presentation}/u,uT=e=>{const{shouldMuteEvent:t}=Pe(),n=_i(),i=De(e),o=De(()=>["useReactions",i()]),a=wi(o,({queryKey:g,signal:v})=>{const[,x]=g;if(x==null)return[];const{eventId:k}=x,w=vs({type:"Reactions",mentionedEventId:k},v).then(E=>{const _=()=>E().events;return fo(E).subscribe(()=>{n.setQueryData(g,_())}),_()});return wr(15e3,`useReactions: ${k}`)(w)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!t(v));return{reactions:l,reactionsGroupedByContent:()=>{const g=new Map;return l().forEach(v=>{const x=g.get(v.content)??[];x.push(v),g.set(v.content,x)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&cT.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},dT=e=>{const{shouldMuteEvent:t}=Pe(),n=_i(),i=De(e),o=De(()=>["useReposts",i()]),a=wi(o,({queryKey:h,signal:p})=>{const[,g]=h;if(g==null)return[];const{eventId:v}=g,x=vs({type:"Reposts",mentionedEventId:v},p).then(k=>{const w=()=>k().events;return fo(k).subscribe(()=>{n.setQueryData(h,w())}),w()});return wr(15e3,`useReposts: ${v}`)(x)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!t(p));return{reposts:l,isRepostedBy:h=>l().findIndex(p=>p.pubkey===h)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},fT=j('<div class="flex gap-2 py-1">'),hT=j('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),pT=j('<span class="ml-1 text-sm">'),gT=j('<button class="flex h-6 items-center rounded border px-1" type="button">'),mT=j('<span class="text-base">'),vT=j('<span class="text-red-500">削除'),bT=j('<div class="nostr-textnote">'),yT=j('<div class="author-name truncate pr-1 font-bold hover:underline">'),_T=j('<span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600">'),wT=j('<div class="text-xs">への返信'),xT=j('<div class="content whitespace-pre-wrap break-all">'),$T=j('<div class="textnote-content">'),kT=j('<div class="mt-1 rounded border p-1">'),ET=j('<button class="pr-1 text-blue-500 hover:underline">'),L0=j('<div class="text-sm text-zinc-400">'),CT=j('<span class="inline-block h-4 w-4">'),ST=j('<div class="flex shrink-0 items-center gap-1">'),TT=j('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),AT=j('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),{noteEncode:IT}=yo,RT=e=>{const{config:t}=Pe(),n=Kn();return(()=>{const i=fT();return O(i,$(Tt,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const l=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=gT();return u.$$click=()=>e.onReaction(o),O(u,$(ue,{when:o==="+",get fallback(){return(()=>{const d=mT();return O(d,o),d})()},get children(){const d=hT();return O(d,$(Cd,{})),d}}),null),O(u,$(ue,{get when(){return!t().hideCount},get children(){const d=pT();return O(d,()=>a.length),d}}),null),je(d=>Fs(u,{"text-zinc-400":!l,"hover:bg-zinc-50":!l,"bg-rose-50":l,"border-rose-200":l,"text-rose-400":l},d)),u})()}})),i})()},nv=e=>{const{config:t}=Pe(),n=Kn(),{showProfile:i}=Yr(),o=aT(),[a,l]=we(!1),[u,d]=we(!1),[h,p]=we(!1),g=()=>p(!1),v=De(()=>El(e.event)),x=()=>e.embedding??!0,k=()=>e.actions??!0,{profile:w}=bs(()=>({pubkey:e.event.pubkey})),{reactions:E,reactionsGroupedByContent:_,isReactedBy:A,isReactedByWithEmoji:R,invalidateReactions:T,query:B}=uT(()=>({eventId:e.event.id})),{reposts:C,isRepostedBy:P,invalidateReposts:U,query:te}=dT(()=>({eventId:e.event.id})),W=Ol(),Y=pi({mutationKey:["publishReaction",v().id],mutationFn:W.publishReaction.bind(W),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:Q=>{console.error("failed to publish reaction: ",Q)},onSettled:()=>{T().then(()=>B.refetch()).catch(Q=>console.error("failed to refetch reactions",Q))}}),Z=pi({mutationKey:["publishRepost",v().id],mutationFn:W.publishRepost.bind(W),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:Q=>{console.error("failed to publish repost: ",Q)},onSettled:()=>{U().then(()=>te.refetch()).catch(Q=>console.error("failed to refetch reposts",Q))}}),X=pi({mutationKey:["deleteEvent",v().id],mutationFn:(...Q)=>W.deleteEvent(...Q).then(he=>Promise.allSettled(he.map(wr(1e4)))),onSuccess:Q=>{const he=Q.filter(Re=>Re.status==="fulfilled").length,xe=Q.length-he;he===Q.length?window.alert("削除しました（画面の反映にはリロード）"):he>0?window.alert(`${xe}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:Q=>{console.error("failed to delete",Q)}}),se=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(IT(e.event.id)).catch(Q=>window.alert(Q))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event,null,2)).catch(Q=>window.alert(Q))}},{when:()=>v().pubkey===n(),content:()=>vT(),onSelect:()=>{const Q=n();Q!=null&&window.confirm("本当に削除しますか？")&&X.mutate({relayUrls:t().relayUrls,pubkey:Q,eventId:v().id})}}],q=De(()=>{const Q=n();return Q!=null&&A(Q)||a()}),D=De(()=>{const Q=n();return Q!=null&&R(Q)}),ne=De(()=>{const Q=n();return Q!=null&&P(Q)||u()}),G=()=>{if(x()){const Q=v().replyingToEvent();if(Q!=null&&!v().containsEventMention(Q.id))return Q.id;const he=v().rootEvent();if(Q==null&&he!=null&&!v().containsEventMention(he.id))return he.id}},ae=Q=>{Q.stopPropagation(),!ne()&&on([n(),e.event.id])(([he,xe])=>{Z.mutate({relayUrls:t().relayUrls,pubkey:he,eventId:xe,notifyPubkey:e.event.pubkey}),d(!0)})},de=Q=>{q()||on([n(),e.event.id])(([he,xe])=>{Y.mutate({relayUrls:t().relayUrls,pubkey:he,content:Q??"+",eventId:xe,notifyPubkey:e.event.pubkey}),l(!0)})},re=Q=>{Q.stopPropagation(),de()};return(()=>{const Q=bT();return O(Q,$(oT,{get author(){return(()=>{const he=_T(),xe=he.firstChild;return O(he,$(ue,{get when(){return(w()?.display_name?.length??0)>0},get children(){const Re=yT();return O(Re,()=>w()?.display_name),Re}}),xe),O(xe,$(ue,{get when(){return w()?.name!=null},get fallback(){return`@${Sl(v().pubkey)}`},get children(){return["@",De(()=>w()?.name)]}})),he})()},get authorPictureUrl(){return w()?.picture},get createdAt(){return v().createdAtAsDate()},get content(){return(()=>{const he=$T();return O(he,$(ue,{get when(){return G()},keyed:!0,children:xe=>(()=>{const Re=kT();return O(Re,$(is,{eventId:xe,actions:!1,embedding:!1})),Re})()}),null),O(he,$(ue,{get when(){return v().taggedPubkeys().length>0},get children(){const xe=wT(),Re=xe.firstChild;return O(xe,$(Tt,{get each(){return v().taggedPubkeys()},children:Je=>(()=>{const J=ET();return J.$$click=qe=>{qe.stopPropagation(),i(Je)},O(J,$(Ym,{pubkey:Je})),J})()}),Re),xe}}),null),O(he,$(yS,{get contentWarning(){return v().contentWarning()},get children(){const xe=xT();return O(xe,$(MS,{get event(){return e.event},get embedding(){return x()}})),xe}}),null),he})()},get actions(){return $(ue,{get when(){return k()},get children(){return[$(ue,{get when(){return De(()=>!!t().showEmojiReaction)()&&E().length>0},get children(){return $(RT,{get reactionsGroupedByContent(){return _()},onReaction:de})}}),(()=>{const he=AT(),xe=he.firstChild,Re=xe.nextSibling,Je=Re.firstChild,J=Re.nextSibling,qe=J.firstChild,nt=J.nextSibling;return xe.$$click=Te=>{Te.stopPropagation(),p(Xe=>!Xe)},O(xe,$(yC,{})),Je.$$click=ae,O(Je,$(Q1,{})),O(Re,$(ue,{get when(){return De(()=>!t().hideCount)()&&C().length>0},get children(){const Te=L0();return O(Te,()=>C().length),Te}}),null),qe.$$click=re,O(qe,$(ue,{get when(){return De(()=>!!q())()&&!D()},get fallback(){return $(Ed,{})},get children(){return $(Cd,{})}})),O(J,$(ue,{get when(){return De(()=>!t().hideCount&&!t().showEmojiReaction)()&&E().length>0},get children(){const Te=L0();return O(Te,()=>E().length),Te}}),null),O(he,$(ue,{get when(){return t().useEmojiReaction},get children(){const Te=ST();return O(Te,$(Qm,{onEmojiSelect:Xe=>de(Xe),get children(){const Xe=CT();return O(Xe,$($m,{})),Xe}})),je(Xe=>Fs(Te,{"text-zinc-400":!q()||!D(),"hover:text-rose-400":!q()||!D(),"text-rose-400":q()&&D()||Y.isLoading},Xe)),Te}}),nt),O(nt,$(km,{menu:se,get children(){const Te=TT();return O(Te,$(xm,{})),Te}})),je(Te=>{const Xe={"text-zinc-400":!ne(),"hover:text-green-400":!ne(),"text-green-400":ne()||Z.isLoading},rt=Z.isLoading,At={"text-zinc-400":!q()||D(),"hover:text-rose-400":!q()||D(),"text-rose-400":q()&&!D()||Y.isLoading},Ve=Y.isLoading;return Te._v$=Fs(Re,Xe,Te._v$),rt!==Te._v$2&&(Je.disabled=Te._v$2=rt),Te._v$3=Fs(J,At,Te._v$3),Ve!==Te._v$4&&(qe.disabled=Te._v$4=Ve),Te},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),he})()]}})},get footer(){return $(ue,{get when(){return h()},get children(){return $(ev,{mode:"reply",get replyTo(){return e.event},onClose:g,onPost:g})}})},onShowProfile:()=>{i(v().pubkey)},onShowEvent:()=>{o?.setTimeline({type:"Replies",event:e.event})}})),Q})()};ut(["click"]);const rv=e=>{const{shouldMuteEvent:t}=Pe();return $(ue,{get when(){return!t(e.event)},get children(){return $(nv,e)}})},OT=j("<span>予期しないイベント種別（<!>）"),LT=j("<span><span>未対応のイベント種別（<!>）"),iv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return $(Sn,{get fallback(){return(()=>{const n=LT(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,O(i,()=>e.event.kind,a),O(n,$(Js,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[$(ze,{get when(){return!t()},keyed:!0,get children(){const n=OT(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,O(n,()=>e.event.kind,o),O(n,$(Js,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),$(ze,{get when(){return e.event.kind===ct.Text},get children(){return $(rv,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),$(ze,{get when(){return e.event.kind===6},get children(){return $(wm,{get event(){return e.event}})}})]}})},ys=e=>{const{shouldMuteEvent:t}=Pe();return $(Tt,{get each(){return e.events},children:n=>$(ue,{get when(){return!t(n)},get children(){return $(qs,{get children(){return $(iv,{event:n})}})}})})};var PT=al;function MT(){this.__data__=new PT,this.size=0}var BT=MT;function jT(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var UT=jT;function NT(e){return this.__data__.get(e)}var DT=NT;function zT(e){return this.__data__.has(e)}var HT=zT,FT=al,qT=Ju,WT=Xu,ZT=200;function KT(e,t){var n=this.__data__;if(n instanceof FT){var i=n.__data__;if(!qT||i.length<ZT-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new WT(i)}return n.set(e,t),this.size=n.size,this}var VT=KT,GT=al,QT=BT,YT=UT,JT=DT,XT=HT,eA=VT;function _s(e){var t=this.__data__=new GT(e);this.size=t.size}_s.prototype.clear=QT;_s.prototype.delete=YT;_s.prototype.get=JT;_s.prototype.has=XT;_s.prototype.set=eA;var Rd=_s;function tA(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var nA=tA,rA=Pg,iA=nA,sA=Mg,oA=1,aA=2;function lA(e,t,n,i,o,a){var l=n&oA,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var g=-1,v=!0,x=n&aA?new rA:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var k=e[g],w=t[g];if(i)var E=l?i(w,k,g,t,e,a):i(k,w,g,e,t,a);if(E!==void 0){if(E)continue;v=!1;break}if(x){if(!iA(t,function(_,A){if(!sA(x,A)&&(k===_||o(k,_,n,i,a)))return x.push(A)})){v=!1;break}}else if(!(k===w||o(k,w,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var sv=lA,cA=Rn,uA=cA.Uint8Array,ov=uA;function dA(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var fA=dA,P0=cs,M0=ov,hA=Yu,pA=sv,gA=fA,mA=ed,vA=1,bA=2,yA="[object Boolean]",_A="[object Date]",wA="[object Error]",xA="[object Map]",$A="[object Number]",kA="[object RegExp]",EA="[object Set]",CA="[object String]",SA="[object Symbol]",TA="[object ArrayBuffer]",AA="[object DataView]",B0=P0?P0.prototype:void 0,hu=B0?B0.valueOf:void 0;function IA(e,t,n,i,o,a,l){switch(n){case AA:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case TA:return!(e.byteLength!=t.byteLength||!a(new M0(e),new M0(t)));case yA:case _A:case $A:return hA(+e,+t);case wA:return e.name==t.name&&e.message==t.message;case kA:case CA:return e==t+"";case xA:var u=gA;case EA:var d=i&vA;if(u||(u=mA),e.size!=t.size&&!d)return!1;var h=l.get(e);if(h)return h==t;i|=bA,l.set(e,t);var p=pA(u(e),u(t),i,o,a,l);return l.delete(e),p;case SA:if(hu)return hu.call(e)==hu.call(t)}return!1}var RA=IA;function OA(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Od=OA,LA=Array.isArray,Vn=LA,PA=Od,MA=Vn;function BA(e,t,n){var i=t(e);return MA(e)?i:PA(i,n(e))}var av=BA;function jA(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var UA=jA;function NA(){return[]}var lv=NA,DA=UA,zA=lv,HA=Object.prototype,FA=HA.propertyIsEnumerable,j0=Object.getOwnPropertySymbols,qA=j0?function(e){return e==null?[]:(e=Object(e),DA(j0(e),function(t){return FA.call(e,t)}))}:zA,Ld=qA;function WA(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var ZA=WA;function KA(e){return e!=null&&typeof e=="object"}var Jr=KA,VA=us,GA=Jr,QA="[object Arguments]";function YA(e){return GA(e)&&VA(e)==QA}var JA=YA,U0=JA,XA=Jr,cv=Object.prototype,eI=cv.hasOwnProperty,tI=cv.propertyIsEnumerable,nI=U0(function(){return arguments}())?U0:function(e){return XA(e)&&eI.call(e,"callee")&&!tI.call(e,"callee")},Pd=nI,Xa={exports:{}};function rI(){return!1}var iI=rI;Xa.exports;(function(e,t){var n=Rn,i=iI,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,h=d||i;e.exports=h})(Xa,Xa.exports);var Md=Xa.exports,sI=9007199254740991,oI=/^(?:0|[1-9]\d*)$/;function aI(e,t){var n=typeof e;return t=t??sI,!!t&&(n=="number"||n!="symbol"&&oI.test(e))&&e>-1&&e%1==0&&e<t}var Bd=aI,lI=9007199254740991;function cI(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=lI}var jd=cI,uI=us,dI=jd,fI=Jr,hI="[object Arguments]",pI="[object Array]",gI="[object Boolean]",mI="[object Date]",vI="[object Error]",bI="[object Function]",yI="[object Map]",_I="[object Number]",wI="[object Object]",xI="[object RegExp]",$I="[object Set]",kI="[object String]",EI="[object WeakMap]",CI="[object ArrayBuffer]",SI="[object DataView]",TI="[object Float32Array]",AI="[object Float64Array]",II="[object Int8Array]",RI="[object Int16Array]",OI="[object Int32Array]",LI="[object Uint8Array]",PI="[object Uint8ClampedArray]",MI="[object Uint16Array]",BI="[object Uint32Array]",tt={};tt[TI]=tt[AI]=tt[II]=tt[RI]=tt[OI]=tt[LI]=tt[PI]=tt[MI]=tt[BI]=!0;tt[hI]=tt[pI]=tt[CI]=tt[gI]=tt[SI]=tt[mI]=tt[vI]=tt[bI]=tt[yI]=tt[_I]=tt[wI]=tt[xI]=tt[$I]=tt[kI]=tt[EI]=!1;function jI(e){return fI(e)&&dI(e.length)&&!!tt[uI(e)]}var UI=jI;function NI(e){return function(t){return e(t)}}var Ud=NI,el={exports:{}};el.exports;(function(e,t){var n=Ig,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(el,el.exports);var Nd=el.exports,DI=UI,zI=Ud,N0=Nd,D0=N0&&N0.isTypedArray,HI=D0?zI(D0):DI,uv=HI,FI=ZA,qI=Pd,WI=Vn,ZI=Md,KI=Bd,VI=uv,GI=Object.prototype,QI=GI.hasOwnProperty;function YI(e,t){var n=WI(e),i=!n&&qI(e),o=!n&&!i&&ZI(e),a=!n&&!i&&!o&&VI(e),l=n||i||o||a,u=l?FI(e.length,String):[],d=u.length;for(var h in e)(t||QI.call(e,h))&&!(l&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||KI(h,d)))&&u.push(h);return u}var dv=YI,JI=Object.prototype;function XI(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||JI;return e===n}var Dd=XI;function eR(e,t){return function(n){return e(t(n))}}var fv=eR,tR=fv,nR=tR(Object.keys,Object),rR=nR,iR=Dd,sR=rR,oR=Object.prototype,aR=oR.hasOwnProperty;function lR(e){if(!iR(e))return sR(e);var t=[];for(var n in Object(e))aR.call(e,n)&&n!="constructor"&&t.push(n);return t}var cR=lR,uR=Og,dR=jd;function fR(e){return e!=null&&dR(e.length)&&!uR(e)}var hv=fR,hR=dv,pR=cR,gR=hv;function mR(e){return gR(e)?hR(e):pR(e)}var Ll=mR,vR=av,bR=Ld,yR=Ll;function _R(e){return vR(e,yR,bR)}var pv=_R,z0=pv,wR=1,xR=Object.prototype,$R=xR.hasOwnProperty;function kR(e,t,n,i,o,a){var l=n&wR,u=z0(e),d=u.length,h=z0(t),p=h.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:$R.call(t,v)))return!1}var x=a.get(e),k=a.get(t);if(x&&k)return x==t&&k==e;var w=!0;a.set(e,t),a.set(t,e);for(var E=l;++g<d;){v=u[g];var _=e[v],A=t[v];if(i)var R=l?i(A,_,v,t,e,a):i(_,A,v,e,t,a);if(!(R===void 0?_===A||o(_,A,n,i,a):R)){w=!1;break}E||(E=v=="constructor")}if(w&&!E){var T=e.constructor,B=t.constructor;T!=B&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof B=="function"&&B instanceof B)&&(w=!1)}return a.delete(e),a.delete(t),w}var ER=kR,CR=xi,SR=Rn,TR=CR(SR,"DataView"),AR=TR,IR=xi,RR=Rn,OR=IR(RR,"Promise"),LR=OR,PR=xi,MR=Rn,BR=PR(MR,"WeakMap"),jR=BR,Du=AR,zu=Ju,Hu=LR,Fu=Bg,qu=jR,gv=us,ws=Lg,H0="[object Map]",UR="[object Object]",F0="[object Promise]",q0="[object Set]",W0="[object WeakMap]",Z0="[object DataView]",NR=ws(Du),DR=ws(zu),zR=ws(Hu),HR=ws(Fu),FR=ws(qu),li=gv;(Du&&li(new Du(new ArrayBuffer(1)))!=Z0||zu&&li(new zu)!=H0||Hu&&li(Hu.resolve())!=F0||Fu&&li(new Fu)!=q0||qu&&li(new qu)!=W0)&&(li=function(e){var t=gv(e),n=t==UR?e.constructor:void 0,i=n?ws(n):"";if(i)switch(i){case NR:return Z0;case DR:return H0;case zR:return F0;case HR:return q0;case FR:return W0}return t});var Pl=li,pu=Rd,qR=sv,WR=RA,ZR=ER,K0=Pl,V0=Vn,G0=Md,KR=uv,VR=1,Q0="[object Arguments]",Y0="[object Array]",xa="[object Object]",GR=Object.prototype,J0=GR.hasOwnProperty;function QR(e,t,n,i,o,a){var l=V0(e),u=V0(t),d=l?Y0:K0(e),h=u?Y0:K0(t);d=d==Q0?xa:d,h=h==Q0?xa:h;var p=d==xa,g=h==xa,v=d==h;if(v&&G0(e)){if(!G0(t))return!1;l=!0,p=!1}if(v&&!p)return a||(a=new pu),l||KR(e)?qR(e,t,n,i,o,a):WR(e,t,d,n,i,o,a);if(!(n&VR)){var x=p&&J0.call(e,"__wrapped__"),k=g&&J0.call(t,"__wrapped__");if(x||k){var w=x?e.value():e,E=k?t.value():t;return a||(a=new pu),o(w,E,n,i,a)}}return v?(a||(a=new pu),ZR(e,t,n,i,o,a)):!1}var YR=QR,JR=YR,X0=Jr;function mv(e,t,n,i,o){return e===t?!0:e==null||t==null||!X0(e)&&!X0(t)?e!==e&&t!==t:JR(e,t,n,i,mv,o)}var vv=mv,XR=Rd,eO=vv,tO=1,nO=2;function rO(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],h=e[d],p=u[1];if(l&&u[2]){if(h===void 0&&!(d in e))return!1}else{var g=new XR;if(i)var v=i(h,p,d,e,t,g);if(!(v===void 0?eO(p,h,tO|nO,i,g):v))return!1}}return!0}var iO=rO,sO=qn;function oO(e){return e===e&&!sO(e)}var bv=oO,aO=bv,lO=Ll;function cO(e){for(var t=lO(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,aO(o)]}return t}var uO=cO;function dO(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var yv=dO,fO=iO,hO=uO,pO=yv;function gO(e){var t=hO(e);return t.length==1&&t[0][2]?pO(t[0][0],t[0][1]):function(n){return n===e||fO(n,e,t)}}var mO=gO,vO=us,bO=Jr,yO="[object Symbol]";function _O(e){return typeof e=="symbol"||bO(e)&&vO(e)==yO}var Ml=_O,wO=Vn,xO=Ml,$O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kO=/^\w*$/;function EO(e,t){if(wO(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||xO(e)?!0:kO.test(e)||!$O.test(e)||t!=null&&e in Object(t)}var zd=EO,_v=Xu,CO="Expected a function";function Hd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(CO);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Hd.Cache||_v),n}Hd.Cache=_v;var SO=Hd,TO=SO,AO=500;function IO(e){var t=TO(e,function(i){return n.size===AO&&n.clear(),i}),n=t.cache;return t}var RO=IO,OO=RO,LO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,PO=/\\(\\)?/g,MO=OO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(LO,function(n,i,o,a){t.push(o?a.replace(PO,"$1"):i||n)}),t}),BO=MO;function jO(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Fd=jO,eg=cs,UO=Fd,NO=Vn,DO=Ml,zO=1/0,tg=eg?eg.prototype:void 0,ng=tg?tg.toString:void 0;function wv(e){if(typeof e=="string")return e;if(NO(e))return UO(e,wv)+"";if(DO(e))return ng?ng.call(e):"";var t=e+"";return t=="0"&&1/e==-zO?"-0":t}var HO=wv,FO=HO;function qO(e){return e==null?"":FO(e)}var WO=qO,ZO=Vn,KO=zd,VO=BO,GO=WO;function QO(e,t){return ZO(e)?e:KO(e,t)?[e]:VO(GO(e))}var xs=QO,YO=Ml,JO=1/0;function XO(e){if(typeof e=="string"||YO(e))return e;var t=e+"";return t=="0"&&1/e==-JO?"-0":t}var $s=XO,eL=xs,tL=$s;function nL(e,t){t=eL(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[tL(t[n++])];return n&&n==i?e:void 0}var Bl=nL,rL=Bl;function iL(e,t,n){var i=e==null?void 0:rL(e,t);return i===void 0?n:i}var sL=iL;function oL(e,t){return e!=null&&t in Object(e)}var aL=oL,lL=xs,cL=Pd,uL=Vn,dL=Bd,fL=jd,hL=$s;function pL(e,t,n){t=lL(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=hL(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&fL(o)&&dL(l,o)&&(uL(e)||cL(e)))}var gL=pL,mL=aL,vL=gL;function bL(e,t){return e!=null&&vL(e,t,mL)}var yL=bL,_L=vv,wL=sL,xL=yL,$L=zd,kL=bv,EL=yv,CL=$s,SL=1,TL=2;function AL(e,t){return $L(e)&&kL(t)?EL(CL(e),t):function(n){var i=wL(n,e);return i===void 0&&i===t?xL(n,e):_L(t,i,SL|TL)}}var IL=AL;function RL(e){return e}var xv=RL;function OL(e){return function(t){return t?.[e]}}var LL=OL,PL=Bl;function ML(e){return function(t){return PL(t,e)}}var BL=ML,jL=LL,UL=BL,NL=zd,DL=$s;function zL(e){return NL(e)?jL(DL(e)):UL(e)}var HL=zL,FL=mO,qL=IL,WL=xv,ZL=Vn,KL=HL;function VL(e){return typeof e=="function"?e:e==null?WL:typeof e=="object"?ZL(e)?qL(e[0],e[1]):FL(e):KL(e)}var qd=VL,GL=qd,QL=jg;function YL(e,t){return e&&e.length?QL(e,GL(t)):[]}var JL=YL;const $v=ho(JL),gu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Sa=0;const{setActiveSubscriptions:XL}=mm();setInterval(()=>{XL(Sa)},1e3);const xr=e=>{const{config:t,shouldMuteEvent:n}=Pe(),i=Cl(),[o,a]=we([]);Un(rl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(h=>!n(h)))},{defer:!0})),an(()=>{console.debug("subscription mounted",e()?.debugId,e()),vr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const h=e()?.limit??50;a(p=>{const g=gu([d,...p].slice(0,h)),v=$v(g,x=>x.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:h,filters:p,options:g,onEvent:v,onEOSE:x,continuous:k=!0}=d,w=i().sub(h,p,g);let E=!0;Sa+=1;let _=!1,A=!1;const R=[];w.on("event",C=>{v?.(C),!(d.clientEventFilter!=null&&!d.clientEventFilter(C))&&(A?l(C):(_=!0,R.push(C)))}),w.on("eose",()=>{x?.(),A=!0,a(gu(R)),k||(w.unsub(),E&&(E=!1,Sa-=1))});let T=!1;const B=setInterval(()=>{if(!T){if(T=!0,A){clearInterval(B),T=!1;return}_&&(_=!1,a(gu(R))),T=!1}},100);vr(()=>{console.debug("startSubscription: end"),w.unsub(),E&&(E=!1,Sa-=1),clearInterval(B)})};return Un(()=>{u()}),{events:o}},eP=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),pr(t)},tP=e=>{const{config:t}=Pe(),n=()=>El(e.event),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:eP(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return $(ys,{get events(){return[...i()].reverse()}})},nP=e=>$(Sn,{get children(){return $(ze,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>$(tP,{get event(){return t.event}})})}}),rP=j('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),iP=j('<div class="shrink-0 border-b">'),sP=j('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),oP=j('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth">'),$i=e=>{let t;const n=lT(),i=()=>e.width??"medium";return Nu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Nu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),$(tv.Provider,{value:n,get children(){const o=rP(),a=t;return typeof a=="function"?br(a,o):t=o,O(o,$(ue,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const l=iP();return O(l,()=>e.header),l})(),(()=>{const l=sP();return O(l,()=>e.children),l})()]},children:l=>(()=>{const u=oP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=d.nextSibling;return h.$$click=()=>n?.clearTimeline(),O(p,$(Qu,{})),O(g,$(nP,{timelineContent:l})),u})()})),je(l=>Fs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},l)),o}})};ut(["click"]);const aP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),lP=(e={})=>(()=>{const t=aP();return Ze(t,e,!0,!0),t})(),cP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),uP=(e={})=>(()=>{const t=cP();return Ze(t,e,!0,!0),t})(),dP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),fP=(e={})=>(()=>{const t=dP();return Ze(t,e,!0,!0),t})(),hP=j('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),pP=j('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),gP=j('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),mP=e=>(()=>{const t=hP(),n=t.firstChild,i=n.nextSibling;return O(n,()=>e.title),O(i,()=>e.children),t})(),ki=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=Pe(),o=wo(),a=u=>{t({...e.column,width:u})},l=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=gP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=h.nextSibling,v=g.firstChild,x=g.nextSibling,k=x.nextSibling,w=k.firstChild;return O(u,$(mP,{title:"カラム幅",get children(){const E=pP(),_=E.firstChild,A=_.nextSibling,R=A.nextSibling,T=R.nextSibling;return _.$$click=()=>a("widest"),A.$$click=()=>a("wide"),R.$$click=()=>a("medium"),T.$$click=()=>a("narrow"),E}}),d),h.$$click=()=>l(e.columnIndex-1),O(p,$(lP,{})),g.$$click=()=>l(e.columnIndex+1),O(v,$(uP,{})),k.$$click=()=>n(e.column.id),O(w,$(fP,{})),u})()};ut(["click"]);const vP=at.array(at.array(at.string()));class bP extends rm{constructor(t){super(),this.tags=t}}const yP=e=>{try{const t=vP.parse(JSON.parse(e));return new bP(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[rg,_P]=Sg(()=>we({})),[wP,xP]=Sg(()=>we({})),$P=e=>{const t=Kn(),[n,i]=we(null);return Un(()=>{const o=e();if(o==null)return;const{encrypted:a}=o;if(a in rg()){i(rg()[a]);return}const l=t();l!=null&&(wP()[a]||(xP(u=>({...u,[a]:!0})),window.nostr?.nip04?.decrypt?.(l,a)?.then(u=>{_P(d=>({...d,[a]:u})),i(u)}).catch(u=>{console.error(`failed to decrypt "${a}"`,u)})))}),n},kP=e=>{const t=De(()=>hr(e.event)),n=$P(()=>{const{content:a}=t();return a==null||a.length===0?null:{id:t().id,encrypted:a}}),i=()=>{const a=n();if(a==null)return[];console.log(a);try{return yP(a).taggedEventIds()}catch(l){return console.warn(l),[]}},o=()=>t().taggedEventIds();return $(Tt,{get each(){return[...o(),...i()]},children:a=>$(qs,{get children(){return $(is,{eventId:a,get ensureKinds(){return[ct.Text]}})}})})},EP=e=>{const t=_i(),n=De(e),o=wi(()=>["useFollowings",n()],({queryKey:l,signal:u})=>{console.debug("useFollowings");const[,d]=l;if(d==null)return Promise.resolve(null);const{kind:h,author:p,identifier:g}=d,v=vs({type:"ParameterizedReplaceableEvent",kind:h,author:p,identifier:g},u).then(x=>{const k=()=>{const w=kd(x().events);if(w==null)throw new Error(`parameterized replaceable event not found: ${h}:${p}:${g}`);return w};return fo(x).subscribe(()=>{try{t.setQueryData(l,k())}catch(w){console.error("error occurred while updating parameterized replaceable event cache: ",w)}}),k()});return wr(15e3,`useParameterizedReplaceableEvent: ${h}:${p}:${g}`)(v)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},CP=e=>{const{removeColumn:t}=Pe(),{event:n}=EP(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return $($i,{get header(){return $(ls,{get name(){return e.column.name??"ブックマーク"},get icon(){return $(Fx,{})},settings:()=>$(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ue,{get when(){return n()},keyed:!0,children:i=>$(kP,{event:i})})}})},SP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),kv=(e={})=>(()=>{const t=SP();return Ze(t,e,!0,!0),t})();var tl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */tl.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",g=1,v=2,x=4,k=1,w=2,E=1,_=2,A=4,R=8,T=16,B=32,C=64,P=128,U=256,te=512,W=30,Y="...",Z=800,X=16,se=1,q=2,D=3,ne=1/0,G=9007199254740991,ae=17976931348623157e292,de=0/0,re=4294967295,Q=re-1,he=re>>>1,xe=[["ary",P],["bind",E],["bindKey",_],["curry",R],["curryRight",T],["flip",te],["partial",B],["partialRight",C],["rearg",U]],Re="[object Arguments]",Je="[object Array]",J="[object AsyncFunction]",qe="[object Boolean]",nt="[object Date]",Te="[object DOMException]",Xe="[object Error]",rt="[object Function]",At="[object GeneratorFunction]",Ve="[object Map]",Ht="[object Number]",Gn="[object Null]",_t="[object Object]",$r="[object Promise]",Ei="[object Proxy]",Ln="[object RegExp]",mt="[object Set]",bn="[object String]",Pn="[object Symbol]",Ci="[object Undefined]",ye="[object WeakMap]",Qn="[object WeakSet]",Gt="[object ArrayBuffer]",Ft="[object DataView]",kr="[object Float32Array]",Yn="[object Float64Array]",Jn="[object Int8Array]",Er="[object Int16Array]",Si="[object Int32Array]",Ti="[object Uint8Array]",Ai="[object Uint8ClampedArray]",jl="[object Uint16Array]",Ul="[object Uint32Array]",Nv=/\b__p \+= '';/g,Dv=/\b(__p \+=) '' \+/g,zv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Jd=/&(?:amp|lt|gt|quot|#39);/g,Xd=/[&<>"']/g,Hv=RegExp(Jd.source),Fv=RegExp(Xd.source),qv=/<%-([\s\S]+?)%>/g,Wv=/<%([\s\S]+?)%>/g,ef=/<%=([\s\S]+?)%>/g,Zv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kv=/^\w*$/,Vv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,Gv=RegExp(Nl.source),Dl=/^\s+/,Qv=/\s/,Yv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Jv=/\{\n\/\* \[wrapped with (.+)\] \*/,Xv=/,? & /,e2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,t2=/[()=,{}\[\]\/\s]/,n2=/\\(\\)?/g,r2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,tf=/\w*$/,i2=/^[-+]0x[0-9a-f]+$/i,s2=/^0b[01]+$/i,o2=/^\[object .+?Constructor\]$/,a2=/^0o[0-7]+$/i,l2=/^(?:0|[1-9]\d*)$/,c2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ko=/($^)/,u2=/['\n\r\u2028\u2029\\]/g,Eo="\\ud800-\\udfff",d2="\\u0300-\\u036f",f2="\\ufe20-\\ufe2f",h2="\\u20d0-\\u20ff",nf=d2+f2+h2,rf="\\u2700-\\u27bf",sf="a-z\\xdf-\\xf6\\xf8-\\xff",p2="\\xac\\xb1\\xd7\\xf7",g2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",m2="\\u2000-\\u206f",v2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",of="A-Z\\xc0-\\xd6\\xd8-\\xde",af="\\ufe0e\\ufe0f",lf=p2+g2+m2+v2,zl="['’]",b2="["+Eo+"]",cf="["+lf+"]",Co="["+nf+"]",uf="\\d+",y2="["+rf+"]",df="["+sf+"]",ff="[^"+Eo+lf+uf+rf+sf+of+"]",Hl="\\ud83c[\\udffb-\\udfff]",_2="(?:"+Co+"|"+Hl+")",hf="[^"+Eo+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",ql="[\\ud800-\\udbff][\\udc00-\\udfff]",Ii="["+of+"]",pf="\\u200d",gf="(?:"+df+"|"+ff+")",w2="(?:"+Ii+"|"+ff+")",mf="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",vf="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",bf=_2+"?",yf="["+af+"]?",x2="(?:"+pf+"(?:"+[hf,Fl,ql].join("|")+")"+yf+bf+")*",$2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",k2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_f=yf+bf+x2,E2="(?:"+[y2,Fl,ql].join("|")+")"+_f,C2="(?:"+[hf+Co+"?",Co,Fl,ql,b2].join("|")+")",S2=RegExp(zl,"g"),T2=RegExp(Co,"g"),Wl=RegExp(Hl+"(?="+Hl+")|"+C2+_f,"g"),A2=RegExp([Ii+"?"+df+"+"+mf+"(?="+[cf,Ii,"$"].join("|")+")",w2+"+"+vf+"(?="+[cf,Ii+gf,"$"].join("|")+")",Ii+"?"+gf+"+"+mf,Ii+"+"+vf,k2,$2,uf,E2].join("|"),"g"),I2=RegExp("["+pf+Eo+nf+af+"]"),R2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,O2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],L2=-1,et={};et[kr]=et[Yn]=et[Jn]=et[Er]=et[Si]=et[Ti]=et[Ai]=et[jl]=et[Ul]=!0,et[Re]=et[Je]=et[Gt]=et[qe]=et[Ft]=et[nt]=et[Xe]=et[rt]=et[Ve]=et[Ht]=et[_t]=et[Ln]=et[mt]=et[bn]=et[ye]=!1;var Qe={};Qe[Re]=Qe[Je]=Qe[Gt]=Qe[Ft]=Qe[qe]=Qe[nt]=Qe[kr]=Qe[Yn]=Qe[Jn]=Qe[Er]=Qe[Si]=Qe[Ve]=Qe[Ht]=Qe[_t]=Qe[Ln]=Qe[mt]=Qe[bn]=Qe[Pn]=Qe[Ti]=Qe[Ai]=Qe[jl]=Qe[Ul]=!0,Qe[Xe]=Qe[rt]=Qe[ye]=!1;var P2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},M2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},B2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},j2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},U2=parseFloat,N2=parseInt,wf=typeof dr=="object"&&dr&&dr.Object===Object&&dr,D2=typeof self=="object"&&self&&self.Object===Object&&self,kt=wf||D2||Function("return this")(),Zl=t&&!t.nodeType&&t,Xr=Zl&&!0&&e&&!e.nodeType&&e,xf=Xr&&Xr.exports===Zl,Kl=xf&&wf.process,ln=function(){try{var L=Xr&&Xr.require&&Xr.require("util").types;return L||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),$f=ln&&ln.isArrayBuffer,kf=ln&&ln.isDate,Ef=ln&&ln.isMap,Cf=ln&&ln.isRegExp,Sf=ln&&ln.isSet,Tf=ln&&ln.isTypedArray;function Qt(L,z,N){switch(N.length){case 0:return L.call(z);case 1:return L.call(z,N[0]);case 2:return L.call(z,N[0],N[1]);case 3:return L.call(z,N[0],N[1],N[2])}return L.apply(z,N)}function z2(L,z,N,le){for(var $e=-1,Fe=L==null?0:L.length;++$e<Fe;){var vt=L[$e];z(le,vt,N(vt),L)}return le}function cn(L,z){for(var N=-1,le=L==null?0:L.length;++N<le&&z(L[N],N,L)!==!1;);return L}function H2(L,z){for(var N=L==null?0:L.length;N--&&z(L[N],N,L)!==!1;);return L}function Af(L,z){for(var N=-1,le=L==null?0:L.length;++N<le;)if(!z(L[N],N,L))return!1;return!0}function Cr(L,z){for(var N=-1,le=L==null?0:L.length,$e=0,Fe=[];++N<le;){var vt=L[N];z(vt,N,L)&&(Fe[$e++]=vt)}return Fe}function So(L,z){var N=L==null?0:L.length;return!!N&&Ri(L,z,0)>-1}function Vl(L,z,N){for(var le=-1,$e=L==null?0:L.length;++le<$e;)if(N(z,L[le]))return!0;return!1}function it(L,z){for(var N=-1,le=L==null?0:L.length,$e=Array(le);++N<le;)$e[N]=z(L[N],N,L);return $e}function Sr(L,z){for(var N=-1,le=z.length,$e=L.length;++N<le;)L[$e+N]=z[N];return L}function Gl(L,z,N,le){var $e=-1,Fe=L==null?0:L.length;for(le&&Fe&&(N=L[++$e]);++$e<Fe;)N=z(N,L[$e],$e,L);return N}function F2(L,z,N,le){var $e=L==null?0:L.length;for(le&&$e&&(N=L[--$e]);$e--;)N=z(N,L[$e],$e,L);return N}function Ql(L,z){for(var N=-1,le=L==null?0:L.length;++N<le;)if(z(L[N],N,L))return!0;return!1}var q2=Yl("length");function W2(L){return L.split("")}function Z2(L){return L.match(e2)||[]}function If(L,z,N){var le;return N(L,function($e,Fe,vt){if(z($e,Fe,vt))return le=Fe,!1}),le}function To(L,z,N,le){for(var $e=L.length,Fe=N+(le?1:-1);le?Fe--:++Fe<$e;)if(z(L[Fe],Fe,L))return Fe;return-1}function Ri(L,z,N){return z===z?ib(L,z,N):To(L,Rf,N)}function K2(L,z,N,le){for(var $e=N-1,Fe=L.length;++$e<Fe;)if(le(L[$e],z))return $e;return-1}function Rf(L){return L!==L}function Of(L,z){var N=L==null?0:L.length;return N?Xl(L,z)/N:de}function Yl(L){return function(z){return z==null?n:z[L]}}function Jl(L){return function(z){return L==null?n:L[z]}}function Lf(L,z,N,le,$e){return $e(L,function(Fe,vt,Ge){N=le?(le=!1,Fe):z(N,Fe,vt,Ge)}),N}function V2(L,z){var N=L.length;for(L.sort(z);N--;)L[N]=L[N].value;return L}function Xl(L,z){for(var N,le=-1,$e=L.length;++le<$e;){var Fe=z(L[le]);Fe!==n&&(N=N===n?Fe:N+Fe)}return N}function ec(L,z){for(var N=-1,le=Array(L);++N<L;)le[N]=z(N);return le}function G2(L,z){return it(z,function(N){return[N,L[N]]})}function Pf(L){return L&&L.slice(0,Uf(L)+1).replace(Dl,"")}function Yt(L){return function(z){return L(z)}}function tc(L,z){return it(z,function(N){return L[N]})}function ks(L,z){return L.has(z)}function Mf(L,z){for(var N=-1,le=L.length;++N<le&&Ri(z,L[N],0)>-1;);return N}function Bf(L,z){for(var N=L.length;N--&&Ri(z,L[N],0)>-1;);return N}function Q2(L,z){for(var N=L.length,le=0;N--;)L[N]===z&&++le;return le}var Y2=Jl(P2),J2=Jl(M2);function X2(L){return"\\"+j2[L]}function eb(L,z){return L==null?n:L[z]}function Oi(L){return I2.test(L)}function tb(L){return R2.test(L)}function nb(L){for(var z,N=[];!(z=L.next()).done;)N.push(z.value);return N}function nc(L){var z=-1,N=Array(L.size);return L.forEach(function(le,$e){N[++z]=[$e,le]}),N}function jf(L,z){return function(N){return L(z(N))}}function Tr(L,z){for(var N=-1,le=L.length,$e=0,Fe=[];++N<le;){var vt=L[N];(vt===z||vt===p)&&(L[N]=p,Fe[$e++]=N)}return Fe}function Ao(L){var z=-1,N=Array(L.size);return L.forEach(function(le){N[++z]=le}),N}function rb(L){var z=-1,N=Array(L.size);return L.forEach(function(le){N[++z]=[le,le]}),N}function ib(L,z,N){for(var le=N-1,$e=L.length;++le<$e;)if(L[le]===z)return le;return-1}function sb(L,z,N){for(var le=N+1;le--;)if(L[le]===z)return le;return le}function Li(L){return Oi(L)?ab(L):q2(L)}function yn(L){return Oi(L)?lb(L):W2(L)}function Uf(L){for(var z=L.length;z--&&Qv.test(L.charAt(z)););return z}var ob=Jl(B2);function ab(L){for(var z=Wl.lastIndex=0;Wl.test(L);)++z;return z}function lb(L){return L.match(Wl)||[]}function cb(L){return L.match(A2)||[]}var ub=function L(z){z=z==null?kt:Pi.defaults(kt.Object(),z,Pi.pick(kt,O2));var N=z.Array,le=z.Date,$e=z.Error,Fe=z.Function,vt=z.Math,Ge=z.Object,rc=z.RegExp,db=z.String,un=z.TypeError,Io=N.prototype,fb=Fe.prototype,Mi=Ge.prototype,Ro=z["__core-js_shared__"],Oo=fb.toString,Ke=Mi.hasOwnProperty,hb=0,Nf=function(){var r=/[^.]+$/.exec(Ro&&Ro.keys&&Ro.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Lo=Mi.toString,pb=Oo.call(Ge),gb=kt._,mb=rc("^"+Oo.call(Ke).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=xf?z.Buffer:n,Ar=z.Symbol,Mo=z.Uint8Array,Df=Po?Po.allocUnsafe:n,Bo=jf(Ge.getPrototypeOf,Ge),zf=Ge.create,Hf=Mi.propertyIsEnumerable,jo=Io.splice,Ff=Ar?Ar.isConcatSpreadable:n,Es=Ar?Ar.iterator:n,ei=Ar?Ar.toStringTag:n,Uo=function(){try{var r=si(Ge,"defineProperty");return r({},"",{}),r}catch{}}(),vb=z.clearTimeout!==kt.clearTimeout&&z.clearTimeout,bb=le&&le.now!==kt.Date.now&&le.now,yb=z.setTimeout!==kt.setTimeout&&z.setTimeout,No=vt.ceil,Do=vt.floor,ic=Ge.getOwnPropertySymbols,_b=Po?Po.isBuffer:n,qf=z.isFinite,wb=Io.join,xb=jf(Ge.keys,Ge),bt=vt.max,It=vt.min,$b=le.now,kb=z.parseInt,Wf=vt.random,Eb=Io.reverse,sc=si(z,"DataView"),Cs=si(z,"Map"),oc=si(z,"Promise"),Bi=si(z,"Set"),Ss=si(z,"WeakMap"),Ts=si(Ge,"create"),zo=Ss&&new Ss,ji={},Cb=oi(sc),Sb=oi(Cs),Tb=oi(oc),Ab=oi(Bi),Ib=oi(Ss),Ho=Ar?Ar.prototype:n,As=Ho?Ho.valueOf:n,Zf=Ho?Ho.toString:n;function b(r){if(lt(r)&&!Ee(r)&&!(r instanceof Ue)){if(r instanceof dn)return r;if(Ke.call(r,"__wrapped__"))return Kh(r)}return new dn(r)}var Ui=function(){function r(){}return function(s){if(!st(s))return{};if(zf)return zf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Fo(){}function dn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:qv,evaluate:Wv,interpolate:ef,variable:"",imports:{_:b}},b.prototype=Fo.prototype,b.prototype.constructor=b,dn.prototype=Ui(Fo.prototype),dn.prototype.constructor=dn;function Ue(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function Rb(){var r=new Ue(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function Ob(){if(this.__filtered__){var r=new Ue(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Lb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Ee(r),f=s<0,m=c?r.length:0,y=Wy(0,m,this.__views__),S=y.start,I=y.end,M=I-S,H=f?I:S-1,F=this.__iteratees__,V=F.length,ie=0,fe=It(M,this.__takeCount__);if(!c||!f&&m==M&&fe==M)return mh(r,this.__actions__);var ve=[];e:for(;M--&&ie<fe;){H+=s;for(var Ae=-1,be=r[H];++Ae<V;){var Me=F[Ae],Ne=Me.iteratee,en=Me.type,jt=Ne(be);if(en==q)be=jt;else if(!jt){if(en==se)continue e;break e}}ve[ie++]=be}return ve}Ue.prototype=Ui(Fo.prototype),Ue.prototype.constructor=Ue;function ti(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Pb(){this.__data__=Ts?Ts(null):{},this.size=0}function Mb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Bb(r){var s=this.__data__;if(Ts){var c=s[r];return c===d?n:c}return Ke.call(s,r)?s[r]:n}function jb(r){var s=this.__data__;return Ts?s[r]!==n:Ke.call(s,r)}function Ub(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Ts&&s===n?d:s,this}ti.prototype.clear=Pb,ti.prototype.delete=Mb,ti.prototype.get=Bb,ti.prototype.has=jb,ti.prototype.set=Ub;function Xn(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Nb(){this.__data__=[],this.size=0}function Db(r){var s=this.__data__,c=qo(s,r);if(c<0)return!1;var f=s.length-1;return c==f?s.pop():jo.call(s,c,1),--this.size,!0}function zb(r){var s=this.__data__,c=qo(s,r);return c<0?n:s[c][1]}function Hb(r){return qo(this.__data__,r)>-1}function Fb(r,s){var c=this.__data__,f=qo(c,r);return f<0?(++this.size,c.push([r,s])):c[f][1]=s,this}Xn.prototype.clear=Nb,Xn.prototype.delete=Db,Xn.prototype.get=zb,Xn.prototype.has=Hb,Xn.prototype.set=Fb;function er(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function qb(){this.size=0,this.__data__={hash:new ti,map:new(Cs||Xn),string:new ti}}function Wb(r){var s=na(this,r).delete(r);return this.size-=s?1:0,s}function Zb(r){return na(this,r).get(r)}function Kb(r){return na(this,r).has(r)}function Vb(r,s){var c=na(this,r),f=c.size;return c.set(r,s),this.size+=c.size==f?0:1,this}er.prototype.clear=qb,er.prototype.delete=Wb,er.prototype.get=Zb,er.prototype.has=Kb,er.prototype.set=Vb;function ni(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new er;++s<c;)this.add(r[s])}function Gb(r){return this.__data__.set(r,d),this}function Qb(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=Gb,ni.prototype.has=Qb;function _n(r){var s=this.__data__=new Xn(r);this.size=s.size}function Yb(){this.__data__=new Xn,this.size=0}function Jb(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function Xb(r){return this.__data__.get(r)}function ey(r){return this.__data__.has(r)}function ty(r,s){var c=this.__data__;if(c instanceof Xn){var f=c.__data__;if(!Cs||f.length<o-1)return f.push([r,s]),this.size=++c.size,this;c=this.__data__=new er(f)}return c.set(r,s),this.size=c.size,this}_n.prototype.clear=Yb,_n.prototype.delete=Jb,_n.prototype.get=Xb,_n.prototype.has=ey,_n.prototype.set=ty;function Kf(r,s){var c=Ee(r),f=!c&&ai(r),m=!c&&!f&&Pr(r),y=!c&&!f&&!m&&Hi(r),S=c||f||m||y,I=S?ec(r.length,db):[],M=I.length;for(var H in r)(s||Ke.call(r,H))&&!(S&&(H=="length"||m&&(H=="offset"||H=="parent")||y&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||ir(H,M)))&&I.push(H);return I}function Vf(r){var s=r.length;return s?r[vc(0,s-1)]:n}function ny(r,s){return ra(qt(r),ri(s,0,r.length))}function ry(r){return ra(qt(r))}function ac(r,s,c){(c!==n&&!wn(r[s],c)||c===n&&!(s in r))&&tr(r,s,c)}function Is(r,s,c){var f=r[s];(!(Ke.call(r,s)&&wn(f,c))||c===n&&!(s in r))&&tr(r,s,c)}function qo(r,s){for(var c=r.length;c--;)if(wn(r[c][0],s))return c;return-1}function iy(r,s,c,f){return Ir(r,function(m,y,S){s(f,m,c(m),S)}),f}function Gf(r,s){return r&&Bn(s,wt(s),r)}function sy(r,s){return r&&Bn(s,Zt(s),r)}function tr(r,s,c){s=="__proto__"&&Uo?Uo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function lc(r,s){for(var c=-1,f=s.length,m=N(f),y=r==null;++c<f;)m[c]=y?n:Hc(r,s[c]);return m}function ri(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function fn(r,s,c,f,m,y){var S,I=s&g,M=s&v,H=s&x;if(c&&(S=m?c(r,f,m,y):c(r)),S!==n)return S;if(!st(r))return r;var F=Ee(r);if(F){if(S=Ky(r),!I)return qt(r,S)}else{var V=Rt(r),ie=V==rt||V==At;if(Pr(r))return yh(r,I);if(V==_t||V==Re||ie&&!m){if(S=M||ie?{}:Uh(r),!I)return M?By(r,sy(S,r)):My(r,Gf(S,r))}else{if(!Qe[V])return m?r:{};S=Vy(r,V,I)}}y||(y=new _n);var fe=y.get(r);if(fe)return fe;y.set(r,S),hp(r)?r.forEach(function(be){S.add(fn(be,s,c,be,r,y))}):dp(r)&&r.forEach(function(be,Me){S.set(Me,fn(be,s,c,Me,r,y))});var ve=H?M?Tc:Sc:M?Zt:wt,Ae=F?n:ve(r);return cn(Ae||r,function(be,Me){Ae&&(Me=be,be=r[Me]),Is(S,Me,fn(be,s,c,Me,r,y))}),S}function oy(r){var s=wt(r);return function(c){return Qf(c,r,s)}}function Qf(r,s,c){var f=c.length;if(r==null)return!f;for(r=Ge(r);f--;){var m=c[f],y=s[m],S=r[m];if(S===n&&!(m in r)||!y(S))return!1}return!0}function Yf(r,s,c){if(typeof r!="function")throw new un(l);return js(function(){r.apply(n,c)},s)}function Rs(r,s,c,f){var m=-1,y=So,S=!0,I=r.length,M=[],H=s.length;if(!I)return M;c&&(s=it(s,Yt(c))),f?(y=Vl,S=!1):s.length>=o&&(y=ks,S=!1,s=new ni(s));e:for(;++m<I;){var F=r[m],V=c==null?F:c(F);if(F=f||F!==0?F:0,S&&V===V){for(var ie=H;ie--;)if(s[ie]===V)continue e;M.push(F)}else y(s,V,f)||M.push(F)}return M}var Ir=kh(Mn),Jf=kh(uc,!0);function ay(r,s){var c=!0;return Ir(r,function(f,m,y){return c=!!s(f,m,y),c}),c}function Wo(r,s,c){for(var f=-1,m=r.length;++f<m;){var y=r[f],S=s(y);if(S!=null&&(I===n?S===S&&!Xt(S):c(S,I)))var I=S,M=y}return M}function ly(r,s,c,f){var m=r.length;for(c=Ce(c),c<0&&(c=-c>m?0:m+c),f=f===n||f>m?m:Ce(f),f<0&&(f+=m),f=c>f?0:gp(f);c<f;)r[c++]=s;return r}function Xf(r,s){var c=[];return Ir(r,function(f,m,y){s(f,m,y)&&c.push(f)}),c}function Et(r,s,c,f,m){var y=-1,S=r.length;for(c||(c=Qy),m||(m=[]);++y<S;){var I=r[y];s>0&&c(I)?s>1?Et(I,s-1,c,f,m):Sr(m,I):f||(m[m.length]=I)}return m}var cc=Eh(),eh=Eh(!0);function Mn(r,s){return r&&cc(r,s,wt)}function uc(r,s){return r&&eh(r,s,wt)}function Zo(r,s){return Cr(s,function(c){return sr(r[c])})}function ii(r,s){s=Or(s,r);for(var c=0,f=s.length;r!=null&&c<f;)r=r[jn(s[c++])];return c&&c==f?r:n}function th(r,s,c){var f=s(r);return Ee(r)?f:Sr(f,c(r))}function Mt(r){return r==null?r===n?Ci:Gn:ei&&ei in Ge(r)?qy(r):r_(r)}function dc(r,s){return r>s}function cy(r,s){return r!=null&&Ke.call(r,s)}function uy(r,s){return r!=null&&s in Ge(r)}function dy(r,s,c){return r>=It(s,c)&&r<bt(s,c)}function fc(r,s,c){for(var f=c?Vl:So,m=r[0].length,y=r.length,S=y,I=N(y),M=1/0,H=[];S--;){var F=r[S];S&&s&&(F=it(F,Yt(s))),M=It(F.length,M),I[S]=!c&&(s||m>=120&&F.length>=120)?new ni(S&&F):n}F=r[0];var V=-1,ie=I[0];e:for(;++V<m&&H.length<M;){var fe=F[V],ve=s?s(fe):fe;if(fe=c||fe!==0?fe:0,!(ie?ks(ie,ve):f(H,ve,c))){for(S=y;--S;){var Ae=I[S];if(!(Ae?ks(Ae,ve):f(r[S],ve,c)))continue e}ie&&ie.push(ve),H.push(fe)}}return H}function fy(r,s,c,f){return Mn(r,function(m,y,S){s(f,c(m),y,S)}),f}function Os(r,s,c){s=Or(s,r),r=Hh(r,s);var f=r==null?r:r[jn(pn(s))];return f==null?n:Qt(f,r,c)}function nh(r){return lt(r)&&Mt(r)==Re}function hy(r){return lt(r)&&Mt(r)==Gt}function py(r){return lt(r)&&Mt(r)==nt}function Ls(r,s,c,f,m){return r===s?!0:r==null||s==null||!lt(r)&&!lt(s)?r!==r&&s!==s:gy(r,s,c,f,Ls,m)}function gy(r,s,c,f,m,y){var S=Ee(r),I=Ee(s),M=S?Je:Rt(r),H=I?Je:Rt(s);M=M==Re?_t:M,H=H==Re?_t:H;var F=M==_t,V=H==_t,ie=M==H;if(ie&&Pr(r)){if(!Pr(s))return!1;S=!0,F=!1}if(ie&&!F)return y||(y=new _n),S||Hi(r)?Mh(r,s,c,f,m,y):Hy(r,s,M,c,f,m,y);if(!(c&k)){var fe=F&&Ke.call(r,"__wrapped__"),ve=V&&Ke.call(s,"__wrapped__");if(fe||ve){var Ae=fe?r.value():r,be=ve?s.value():s;return y||(y=new _n),m(Ae,be,c,f,y)}}return ie?(y||(y=new _n),Fy(r,s,c,f,m,y)):!1}function my(r){return lt(r)&&Rt(r)==Ve}function hc(r,s,c,f){var m=c.length,y=m,S=!f;if(r==null)return!y;for(r=Ge(r);m--;){var I=c[m];if(S&&I[2]?I[1]!==r[I[0]]:!(I[0]in r))return!1}for(;++m<y;){I=c[m];var M=I[0],H=r[M],F=I[1];if(S&&I[2]){if(H===n&&!(M in r))return!1}else{var V=new _n;if(f)var ie=f(H,F,M,r,s,V);if(!(ie===n?Ls(F,H,k|w,f,V):ie))return!1}}return!0}function rh(r){if(!st(r)||Jy(r))return!1;var s=sr(r)?mb:o2;return s.test(oi(r))}function vy(r){return lt(r)&&Mt(r)==Ln}function by(r){return lt(r)&&Rt(r)==mt}function yy(r){return lt(r)&&ca(r.length)&&!!et[Mt(r)]}function ih(r){return typeof r=="function"?r:r==null?Kt:typeof r=="object"?Ee(r)?ah(r[0],r[1]):oh(r):Cp(r)}function pc(r){if(!Bs(r))return xb(r);var s=[];for(var c in Ge(r))Ke.call(r,c)&&c!="constructor"&&s.push(c);return s}function _y(r){if(!st(r))return n_(r);var s=Bs(r),c=[];for(var f in r)f=="constructor"&&(s||!Ke.call(r,f))||c.push(f);return c}function gc(r,s){return r<s}function sh(r,s){var c=-1,f=Wt(r)?N(r.length):[];return Ir(r,function(m,y,S){f[++c]=s(m,y,S)}),f}function oh(r){var s=Ic(r);return s.length==1&&s[0][2]?Dh(s[0][0],s[0][1]):function(c){return c===r||hc(c,r,s)}}function ah(r,s){return Oc(r)&&Nh(s)?Dh(jn(r),s):function(c){var f=Hc(c,r);return f===n&&f===s?Fc(c,r):Ls(s,f,k|w)}}function Ko(r,s,c,f,m){r!==s&&cc(s,function(y,S){if(m||(m=new _n),st(y))wy(r,s,S,c,Ko,f,m);else{var I=f?f(Pc(r,S),y,S+"",r,s,m):n;I===n&&(I=y),ac(r,S,I)}},Zt)}function wy(r,s,c,f,m,y,S){var I=Pc(r,c),M=Pc(s,c),H=S.get(M);if(H){ac(r,c,H);return}var F=y?y(I,M,c+"",r,s,S):n,V=F===n;if(V){var ie=Ee(M),fe=!ie&&Pr(M),ve=!ie&&!fe&&Hi(M);F=M,ie||fe||ve?Ee(I)?F=I:dt(I)?F=qt(I):fe?(V=!1,F=yh(M,!0)):ve?(V=!1,F=_h(M,!0)):F=[]:Us(M)||ai(M)?(F=I,ai(I)?F=mp(I):(!st(I)||sr(I))&&(F=Uh(M))):V=!1}V&&(S.set(M,F),m(F,M,f,y,S),S.delete(M)),ac(r,c,F)}function lh(r,s){var c=r.length;if(c)return s+=s<0?c:0,ir(s,c)?r[s]:n}function ch(r,s,c){s.length?s=it(s,function(y){return Ee(y)?function(S){return ii(S,y.length===1?y[0]:y)}:y}):s=[Kt];var f=-1;s=it(s,Yt(ge()));var m=sh(r,function(y,S,I){var M=it(s,function(H){return H(y)});return{criteria:M,index:++f,value:y}});return V2(m,function(y,S){return Py(y,S,c)})}function xy(r,s){return uh(r,s,function(c,f){return Fc(r,f)})}function uh(r,s,c){for(var f=-1,m=s.length,y={};++f<m;){var S=s[f],I=ii(r,S);c(I,S)&&Ps(y,Or(S,r),I)}return y}function $y(r){return function(s){return ii(s,r)}}function mc(r,s,c,f){var m=f?K2:Ri,y=-1,S=s.length,I=r;for(r===s&&(s=qt(s)),c&&(I=it(r,Yt(c)));++y<S;)for(var M=0,H=s[y],F=c?c(H):H;(M=m(I,F,M,f))>-1;)I!==r&&jo.call(I,M,1),jo.call(r,M,1);return r}function dh(r,s){for(var c=r?s.length:0,f=c-1;c--;){var m=s[c];if(c==f||m!==y){var y=m;ir(m)?jo.call(r,m,1):_c(r,m)}}return r}function vc(r,s){return r+Do(Wf()*(s-r+1))}function ky(r,s,c,f){for(var m=-1,y=bt(No((s-r)/(c||1)),0),S=N(y);y--;)S[f?y:++m]=r,r+=c;return S}function bc(r,s){var c="";if(!r||s<1||s>G)return c;do s%2&&(c+=r),s=Do(s/2),s&&(r+=r);while(s);return c}function Oe(r,s){return Mc(zh(r,s,Kt),r+"")}function Ey(r){return Vf(Fi(r))}function Cy(r,s){var c=Fi(r);return ra(c,ri(s,0,c.length))}function Ps(r,s,c,f){if(!st(r))return r;s=Or(s,r);for(var m=-1,y=s.length,S=y-1,I=r;I!=null&&++m<y;){var M=jn(s[m]),H=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=S){var F=I[M];H=f?f(F,M,I):n,H===n&&(H=st(F)?F:ir(s[m+1])?[]:{})}Is(I,M,H),I=I[M]}return r}var fh=zo?function(r,s){return zo.set(r,s),r}:Kt,Sy=Uo?function(r,s){return Uo(r,"toString",{configurable:!0,enumerable:!1,value:Wc(s),writable:!0})}:Kt;function Ty(r){return ra(Fi(r))}function hn(r,s,c){var f=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var y=N(m);++f<m;)y[f]=r[f+s];return y}function Ay(r,s){var c;return Ir(r,function(f,m,y){return c=s(f,m,y),!c}),!!c}function Vo(r,s,c){var f=0,m=r==null?f:r.length;if(typeof s=="number"&&s===s&&m<=he){for(;f<m;){var y=f+m>>>1,S=r[y];S!==null&&!Xt(S)&&(c?S<=s:S<s)?f=y+1:m=y}return m}return yc(r,s,Kt,c)}function yc(r,s,c,f){var m=0,y=r==null?0:r.length;if(y===0)return 0;s=c(s);for(var S=s!==s,I=s===null,M=Xt(s),H=s===n;m<y;){var F=Do((m+y)/2),V=c(r[F]),ie=V!==n,fe=V===null,ve=V===V,Ae=Xt(V);if(S)var be=f||ve;else H?be=ve&&(f||ie):I?be=ve&&ie&&(f||!fe):M?be=ve&&ie&&!fe&&(f||!Ae):fe||Ae?be=!1:be=f?V<=s:V<s;be?m=F+1:y=F}return It(y,Q)}function hh(r,s){for(var c=-1,f=r.length,m=0,y=[];++c<f;){var S=r[c],I=s?s(S):S;if(!c||!wn(I,M)){var M=I;y[m++]=S===0?0:S}}return y}function ph(r){return typeof r=="number"?r:Xt(r)?de:+r}function Jt(r){if(typeof r=="string")return r;if(Ee(r))return it(r,Jt)+"";if(Xt(r))return Zf?Zf.call(r):"";var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function Rr(r,s,c){var f=-1,m=So,y=r.length,S=!0,I=[],M=I;if(c)S=!1,m=Vl;else if(y>=o){var H=s?null:Dy(r);if(H)return Ao(H);S=!1,m=ks,M=new ni}else M=s?[]:I;e:for(;++f<y;){var F=r[f],V=s?s(F):F;if(F=c||F!==0?F:0,S&&V===V){for(var ie=M.length;ie--;)if(M[ie]===V)continue e;s&&M.push(V),I.push(F)}else m(M,V,c)||(M!==I&&M.push(V),I.push(F))}return I}function _c(r,s){return s=Or(s,r),r=Hh(r,s),r==null||delete r[jn(pn(s))]}function gh(r,s,c,f){return Ps(r,s,c(ii(r,s)),f)}function Go(r,s,c,f){for(var m=r.length,y=f?m:-1;(f?y--:++y<m)&&s(r[y],y,r););return c?hn(r,f?0:y,f?y+1:m):hn(r,f?y+1:0,f?m:y)}function mh(r,s){var c=r;return c instanceof Ue&&(c=c.value()),Gl(s,function(f,m){return m.func.apply(m.thisArg,Sr([f],m.args))},c)}function wc(r,s,c){var f=r.length;if(f<2)return f?Rr(r[0]):[];for(var m=-1,y=N(f);++m<f;)for(var S=r[m],I=-1;++I<f;)I!=m&&(y[m]=Rs(y[m]||S,r[I],s,c));return Rr(Et(y,1),s,c)}function vh(r,s,c){for(var f=-1,m=r.length,y=s.length,S={};++f<m;){var I=f<y?s[f]:n;c(S,r[f],I)}return S}function xc(r){return dt(r)?r:[]}function $c(r){return typeof r=="function"?r:Kt}function Or(r,s){return Ee(r)?r:Oc(r,s)?[r]:Zh(We(r))}var Iy=Oe;function Lr(r,s,c){var f=r.length;return c=c===n?f:c,!s&&c>=f?r:hn(r,s,c)}var bh=vb||function(r){return kt.clearTimeout(r)};function yh(r,s){if(s)return r.slice();var c=r.length,f=Df?Df(c):new r.constructor(c);return r.copy(f),f}function kc(r){var s=new r.constructor(r.byteLength);return new Mo(s).set(new Mo(r)),s}function Ry(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function Oy(r){var s=new r.constructor(r.source,tf.exec(r));return s.lastIndex=r.lastIndex,s}function Ly(r){return As?Ge(As.call(r)):{}}function _h(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function wh(r,s){if(r!==s){var c=r!==n,f=r===null,m=r===r,y=Xt(r),S=s!==n,I=s===null,M=s===s,H=Xt(s);if(!I&&!H&&!y&&r>s||y&&S&&M&&!I&&!H||f&&S&&M||!c&&M||!m)return 1;if(!f&&!y&&!H&&r<s||H&&c&&m&&!f&&!y||I&&c&&m||!S&&m||!M)return-1}return 0}function Py(r,s,c){for(var f=-1,m=r.criteria,y=s.criteria,S=m.length,I=c.length;++f<S;){var M=wh(m[f],y[f]);if(M){if(f>=I)return M;var H=c[f];return M*(H=="desc"?-1:1)}}return r.index-s.index}function xh(r,s,c,f){for(var m=-1,y=r.length,S=c.length,I=-1,M=s.length,H=bt(y-S,0),F=N(M+H),V=!f;++I<M;)F[I]=s[I];for(;++m<S;)(V||m<y)&&(F[c[m]]=r[m]);for(;H--;)F[I++]=r[m++];return F}function $h(r,s,c,f){for(var m=-1,y=r.length,S=-1,I=c.length,M=-1,H=s.length,F=bt(y-I,0),V=N(F+H),ie=!f;++m<F;)V[m]=r[m];for(var fe=m;++M<H;)V[fe+M]=s[M];for(;++S<I;)(ie||m<y)&&(V[fe+c[S]]=r[m++]);return V}function qt(r,s){var c=-1,f=r.length;for(s||(s=N(f));++c<f;)s[c]=r[c];return s}function Bn(r,s,c,f){var m=!c;c||(c={});for(var y=-1,S=s.length;++y<S;){var I=s[y],M=f?f(c[I],r[I],I,c,r):n;M===n&&(M=r[I]),m?tr(c,I,M):Is(c,I,M)}return c}function My(r,s){return Bn(r,Rc(r),s)}function By(r,s){return Bn(r,Bh(r),s)}function Qo(r,s){return function(c,f){var m=Ee(c)?z2:iy,y=s?s():{};return m(c,r,ge(f,2),y)}}function Ni(r){return Oe(function(s,c){var f=-1,m=c.length,y=m>1?c[m-1]:n,S=m>2?c[2]:n;for(y=r.length>3&&typeof y=="function"?(m--,y):n,S&&Bt(c[0],c[1],S)&&(y=m<3?n:y,m=1),s=Ge(s);++f<m;){var I=c[f];I&&r(s,I,f,y)}return s})}function kh(r,s){return function(c,f){if(c==null)return c;if(!Wt(c))return r(c,f);for(var m=c.length,y=s?m:-1,S=Ge(c);(s?y--:++y<m)&&f(S[y],y,S)!==!1;);return c}}function Eh(r){return function(s,c,f){for(var m=-1,y=Ge(s),S=f(s),I=S.length;I--;){var M=S[r?I:++m];if(c(y[M],M,y)===!1)break}return s}}function jy(r,s,c){var f=s&E,m=Ms(r);function y(){var S=this&&this!==kt&&this instanceof y?m:r;return S.apply(f?c:this,arguments)}return y}function Ch(r){return function(s){s=We(s);var c=Oi(s)?yn(s):n,f=c?c[0]:s.charAt(0),m=c?Lr(c,1).join(""):s.slice(1);return f[r]()+m}}function Di(r){return function(s){return Gl(kp($p(s).replace(S2,"")),r,"")}}function Ms(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Ui(r.prototype),f=r.apply(c,s);return st(f)?f:c}}function Uy(r,s,c){var f=Ms(r);function m(){for(var y=arguments.length,S=N(y),I=y,M=zi(m);I--;)S[I]=arguments[I];var H=y<3&&S[0]!==M&&S[y-1]!==M?[]:Tr(S,M);if(y-=H.length,y<c)return Rh(r,s,Yo,m.placeholder,n,S,H,n,n,c-y);var F=this&&this!==kt&&this instanceof m?f:r;return Qt(F,this,S)}return m}function Sh(r){return function(s,c,f){var m=Ge(s);if(!Wt(s)){var y=ge(c,3);s=wt(s),c=function(I){return y(m[I],I,m)}}var S=r(s,c,f);return S>-1?m[y?s[S]:S]:n}}function Th(r){return rr(function(s){var c=s.length,f=c,m=dn.prototype.thru;for(r&&s.reverse();f--;){var y=s[f];if(typeof y!="function")throw new un(l);if(m&&!S&&ta(y)=="wrapper")var S=new dn([],!0)}for(f=S?f:c;++f<c;){y=s[f];var I=ta(y),M=I=="wrapper"?Ac(y):n;M&&Lc(M[0])&&M[1]==(P|R|B|U)&&!M[4].length&&M[9]==1?S=S[ta(M[0])].apply(S,M[3]):S=y.length==1&&Lc(y)?S[I]():S.thru(y)}return function(){var H=arguments,F=H[0];if(S&&H.length==1&&Ee(F))return S.plant(F).value();for(var V=0,ie=c?s[V].apply(this,H):F;++V<c;)ie=s[V].call(this,ie);return ie}})}function Yo(r,s,c,f,m,y,S,I,M,H){var F=s&P,V=s&E,ie=s&_,fe=s&(R|T),ve=s&te,Ae=ie?n:Ms(r);function be(){for(var Me=arguments.length,Ne=N(Me),en=Me;en--;)Ne[en]=arguments[en];if(fe)var jt=zi(be),tn=Q2(Ne,jt);if(f&&(Ne=xh(Ne,f,m,fe)),y&&(Ne=$h(Ne,y,S,fe)),Me-=tn,fe&&Me<H){var ft=Tr(Ne,jt);return Rh(r,s,Yo,be.placeholder,c,Ne,ft,I,M,H-Me)}var xn=V?c:this,ar=ie?xn[r]:r;return Me=Ne.length,I?Ne=i_(Ne,I):ve&&Me>1&&Ne.reverse(),F&&M<Me&&(Ne.length=M),this&&this!==kt&&this instanceof be&&(ar=Ae||Ms(ar)),ar.apply(xn,Ne)}return be}function Ah(r,s){return function(c,f){return fy(c,r,s(f),{})}}function Jo(r,s){return function(c,f){var m;if(c===n&&f===n)return s;if(c!==n&&(m=c),f!==n){if(m===n)return f;typeof c=="string"||typeof f=="string"?(c=Jt(c),f=Jt(f)):(c=ph(c),f=ph(f)),m=r(c,f)}return m}}function Ec(r){return rr(function(s){return s=it(s,Yt(ge())),Oe(function(c){var f=this;return r(s,function(m){return Qt(m,f,c)})})})}function Xo(r,s){s=s===n?" ":Jt(s);var c=s.length;if(c<2)return c?bc(s,r):s;var f=bc(s,No(r/Li(s)));return Oi(s)?Lr(yn(f),0,r).join(""):f.slice(0,r)}function Ny(r,s,c,f){var m=s&E,y=Ms(r);function S(){for(var I=-1,M=arguments.length,H=-1,F=f.length,V=N(F+M),ie=this&&this!==kt&&this instanceof S?y:r;++H<F;)V[H]=f[H];for(;M--;)V[H++]=arguments[++I];return Qt(ie,m?c:this,V)}return S}function Ih(r){return function(s,c,f){return f&&typeof f!="number"&&Bt(s,c,f)&&(c=f=n),s=or(s),c===n?(c=s,s=0):c=or(c),f=f===n?s<c?1:-1:or(f),ky(s,c,f,r)}}function ea(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=gn(s),c=gn(c)),r(s,c)}}function Rh(r,s,c,f,m,y,S,I,M,H){var F=s&R,V=F?S:n,ie=F?n:S,fe=F?y:n,ve=F?n:y;s|=F?B:C,s&=~(F?C:B),s&A||(s&=~(E|_));var Ae=[r,s,m,fe,V,ve,ie,I,M,H],be=c.apply(n,Ae);return Lc(r)&&Fh(be,Ae),be.placeholder=f,qh(be,r,s)}function Cc(r){var s=vt[r];return function(c,f){if(c=gn(c),f=f==null?0:It(Ce(f),292),f&&qf(c)){var m=(We(c)+"e").split("e"),y=s(m[0]+"e"+(+m[1]+f));return m=(We(y)+"e").split("e"),+(m[0]+"e"+(+m[1]-f))}return s(c)}}var Dy=Bi&&1/Ao(new Bi([,-0]))[1]==ne?function(r){return new Bi(r)}:Vc;function Oh(r){return function(s){var c=Rt(s);return c==Ve?nc(s):c==mt?rb(s):G2(s,r(s))}}function nr(r,s,c,f,m,y,S,I){var M=s&_;if(!M&&typeof r!="function")throw new un(l);var H=f?f.length:0;if(H||(s&=~(B|C),f=m=n),S=S===n?S:bt(Ce(S),0),I=I===n?I:Ce(I),H-=m?m.length:0,s&C){var F=f,V=m;f=m=n}var ie=M?n:Ac(r),fe=[r,s,c,f,m,F,V,y,S,I];if(ie&&t_(fe,ie),r=fe[0],s=fe[1],c=fe[2],f=fe[3],m=fe[4],I=fe[9]=fe[9]===n?M?0:r.length:bt(fe[9]-H,0),!I&&s&(R|T)&&(s&=~(R|T)),!s||s==E)var ve=jy(r,s,c);else s==R||s==T?ve=Uy(r,s,I):(s==B||s==(E|B))&&!m.length?ve=Ny(r,s,c,f):ve=Yo.apply(n,fe);var Ae=ie?fh:Fh;return qh(Ae(ve,fe),r,s)}function Lh(r,s,c,f){return r===n||wn(r,Mi[c])&&!Ke.call(f,c)?s:r}function Ph(r,s,c,f,m,y){return st(r)&&st(s)&&(y.set(s,r),Ko(r,s,n,Ph,y),y.delete(s)),r}function zy(r){return Us(r)?n:r}function Mh(r,s,c,f,m,y){var S=c&k,I=r.length,M=s.length;if(I!=M&&!(S&&M>I))return!1;var H=y.get(r),F=y.get(s);if(H&&F)return H==s&&F==r;var V=-1,ie=!0,fe=c&w?new ni:n;for(y.set(r,s),y.set(s,r);++V<I;){var ve=r[V],Ae=s[V];if(f)var be=S?f(Ae,ve,V,s,r,y):f(ve,Ae,V,r,s,y);if(be!==n){if(be)continue;ie=!1;break}if(fe){if(!Ql(s,function(Me,Ne){if(!ks(fe,Ne)&&(ve===Me||m(ve,Me,c,f,y)))return fe.push(Ne)})){ie=!1;break}}else if(!(ve===Ae||m(ve,Ae,c,f,y))){ie=!1;break}}return y.delete(r),y.delete(s),ie}function Hy(r,s,c,f,m,y,S){switch(c){case Ft:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Gt:return!(r.byteLength!=s.byteLength||!y(new Mo(r),new Mo(s)));case qe:case nt:case Ht:return wn(+r,+s);case Xe:return r.name==s.name&&r.message==s.message;case Ln:case bn:return r==s+"";case Ve:var I=nc;case mt:var M=f&k;if(I||(I=Ao),r.size!=s.size&&!M)return!1;var H=S.get(r);if(H)return H==s;f|=w,S.set(r,s);var F=Mh(I(r),I(s),f,m,y,S);return S.delete(r),F;case Pn:if(As)return As.call(r)==As.call(s)}return!1}function Fy(r,s,c,f,m,y){var S=c&k,I=Sc(r),M=I.length,H=Sc(s),F=H.length;if(M!=F&&!S)return!1;for(var V=M;V--;){var ie=I[V];if(!(S?ie in s:Ke.call(s,ie)))return!1}var fe=y.get(r),ve=y.get(s);if(fe&&ve)return fe==s&&ve==r;var Ae=!0;y.set(r,s),y.set(s,r);for(var be=S;++V<M;){ie=I[V];var Me=r[ie],Ne=s[ie];if(f)var en=S?f(Ne,Me,ie,s,r,y):f(Me,Ne,ie,r,s,y);if(!(en===n?Me===Ne||m(Me,Ne,c,f,y):en)){Ae=!1;break}be||(be=ie=="constructor")}if(Ae&&!be){var jt=r.constructor,tn=s.constructor;jt!=tn&&"constructor"in r&&"constructor"in s&&!(typeof jt=="function"&&jt instanceof jt&&typeof tn=="function"&&tn instanceof tn)&&(Ae=!1)}return y.delete(r),y.delete(s),Ae}function rr(r){return Mc(zh(r,n,Qh),r+"")}function Sc(r){return th(r,wt,Rc)}function Tc(r){return th(r,Zt,Bh)}var Ac=zo?function(r){return zo.get(r)}:Vc;function ta(r){for(var s=r.name+"",c=ji[s],f=Ke.call(ji,s)?c.length:0;f--;){var m=c[f],y=m.func;if(y==null||y==r)return m.name}return s}function zi(r){var s=Ke.call(b,"placeholder")?b:r;return s.placeholder}function ge(){var r=b.iteratee||Zc;return r=r===Zc?ih:r,arguments.length?r(arguments[0],arguments[1]):r}function na(r,s){var c=r.__data__;return Yy(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Ic(r){for(var s=wt(r),c=s.length;c--;){var f=s[c],m=r[f];s[c]=[f,m,Nh(m)]}return s}function si(r,s){var c=eb(r,s);return rh(c)?c:n}function qy(r){var s=Ke.call(r,ei),c=r[ei];try{r[ei]=n;var f=!0}catch{}var m=Lo.call(r);return f&&(s?r[ei]=c:delete r[ei]),m}var Rc=ic?function(r){return r==null?[]:(r=Ge(r),Cr(ic(r),function(s){return Hf.call(r,s)}))}:Gc,Bh=ic?function(r){for(var s=[];r;)Sr(s,Rc(r)),r=Bo(r);return s}:Gc,Rt=Mt;(sc&&Rt(new sc(new ArrayBuffer(1)))!=Ft||Cs&&Rt(new Cs)!=Ve||oc&&Rt(oc.resolve())!=$r||Bi&&Rt(new Bi)!=mt||Ss&&Rt(new Ss)!=ye)&&(Rt=function(r){var s=Mt(r),c=s==_t?r.constructor:n,f=c?oi(c):"";if(f)switch(f){case Cb:return Ft;case Sb:return Ve;case Tb:return $r;case Ab:return mt;case Ib:return ye}return s});function Wy(r,s,c){for(var f=-1,m=c.length;++f<m;){var y=c[f],S=y.size;switch(y.type){case"drop":r+=S;break;case"dropRight":s-=S;break;case"take":s=It(s,r+S);break;case"takeRight":r=bt(r,s-S);break}}return{start:r,end:s}}function Zy(r){var s=r.match(Jv);return s?s[1].split(Xv):[]}function jh(r,s,c){s=Or(s,r);for(var f=-1,m=s.length,y=!1;++f<m;){var S=jn(s[f]);if(!(y=r!=null&&c(r,S)))break;r=r[S]}return y||++f!=m?y:(m=r==null?0:r.length,!!m&&ca(m)&&ir(S,m)&&(Ee(r)||ai(r)))}function Ky(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ke.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Uh(r){return typeof r.constructor=="function"&&!Bs(r)?Ui(Bo(r)):{}}function Vy(r,s,c){var f=r.constructor;switch(s){case Gt:return kc(r);case qe:case nt:return new f(+r);case Ft:return Ry(r,c);case kr:case Yn:case Jn:case Er:case Si:case Ti:case Ai:case jl:case Ul:return _h(r,c);case Ve:return new f;case Ht:case bn:return new f(r);case Ln:return Oy(r);case mt:return new f;case Pn:return Ly(r)}}function Gy(r,s){var c=s.length;if(!c)return r;var f=c-1;return s[f]=(c>1?"& ":"")+s[f],s=s.join(c>2?", ":" "),r.replace(Yv,`{
/* [wrapped with `+s+`] */
`)}function Qy(r){return Ee(r)||ai(r)||!!(Ff&&r&&r[Ff])}function ir(r,s){var c=typeof r;return s=s??G,!!s&&(c=="number"||c!="symbol"&&l2.test(r))&&r>-1&&r%1==0&&r<s}function Bt(r,s,c){if(!st(c))return!1;var f=typeof s;return(f=="number"?Wt(c)&&ir(s,c.length):f=="string"&&s in c)?wn(c[s],r):!1}function Oc(r,s){if(Ee(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||Xt(r)?!0:Kv.test(r)||!Zv.test(r)||s!=null&&r in Ge(s)}function Yy(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Lc(r){var s=ta(r),c=b[s];if(typeof c!="function"||!(s in Ue.prototype))return!1;if(r===c)return!0;var f=Ac(c);return!!f&&r===f[0]}function Jy(r){return!!Nf&&Nf in r}var Xy=Ro?sr:Qc;function Bs(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Mi;return r===c}function Nh(r){return r===r&&!st(r)}function Dh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Ge(c))}}function e_(r){var s=aa(r,function(f){return c.size===h&&c.clear(),f}),c=s.cache;return s}function t_(r,s){var c=r[1],f=s[1],m=c|f,y=m<(E|_|P),S=f==P&&c==R||f==P&&c==U&&r[7].length<=s[8]||f==(P|U)&&s[7].length<=s[8]&&c==R;if(!(y||S))return r;f&E&&(r[2]=s[2],m|=c&E?0:A);var I=s[3];if(I){var M=r[3];r[3]=M?xh(M,I,s[4]):I,r[4]=M?Tr(r[3],p):s[4]}return I=s[5],I&&(M=r[5],r[5]=M?$h(M,I,s[6]):I,r[6]=M?Tr(r[5],p):s[6]),I=s[7],I&&(r[7]=I),f&P&&(r[8]=r[8]==null?s[8]:It(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function n_(r){var s=[];if(r!=null)for(var c in Ge(r))s.push(c);return s}function r_(r){return Lo.call(r)}function zh(r,s,c){return s=bt(s===n?r.length-1:s,0),function(){for(var f=arguments,m=-1,y=bt(f.length-s,0),S=N(y);++m<y;)S[m]=f[s+m];m=-1;for(var I=N(s+1);++m<s;)I[m]=f[m];return I[s]=c(S),Qt(r,this,I)}}function Hh(r,s){return s.length<2?r:ii(r,hn(s,0,-1))}function i_(r,s){for(var c=r.length,f=It(s.length,c),m=qt(r);f--;){var y=s[f];r[f]=ir(y,c)?m[y]:n}return r}function Pc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Fh=Wh(fh),js=yb||function(r,s){return kt.setTimeout(r,s)},Mc=Wh(Sy);function qh(r,s,c){var f=s+"";return Mc(r,Gy(f,s_(Zy(f),c)))}function Wh(r){var s=0,c=0;return function(){var f=$b(),m=X-(f-c);if(c=f,m>0){if(++s>=Z)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ra(r,s){var c=-1,f=r.length,m=f-1;for(s=s===n?f:s;++c<s;){var y=vc(c,m),S=r[y];r[y]=r[c],r[c]=S}return r.length=s,r}var Zh=e_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Vv,function(c,f,m,y){s.push(m?y.replace(n2,"$1"):f||c)}),s});function jn(r){if(typeof r=="string"||Xt(r))return r;var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function oi(r){if(r!=null){try{return Oo.call(r)}catch{}try{return r+""}catch{}}return""}function s_(r,s){return cn(xe,function(c){var f="_."+c[0];s&c[1]&&!So(r,f)&&r.push(f)}),r.sort()}function Kh(r){if(r instanceof Ue)return r.clone();var s=new dn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function o_(r,s,c){(c?Bt(r,s,c):s===n)?s=1:s=bt(Ce(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var m=0,y=0,S=N(No(f/s));m<f;)S[y++]=hn(r,m,m+=s);return S}function a_(r){for(var s=-1,c=r==null?0:r.length,f=0,m=[];++s<c;){var y=r[s];y&&(m[f++]=y)}return m}function l_(){var r=arguments.length;if(!r)return[];for(var s=N(r-1),c=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Sr(Ee(c)?qt(c):[c],Et(s,1))}var c_=Oe(function(r,s){return dt(r)?Rs(r,Et(s,1,dt,!0)):[]}),u_=Oe(function(r,s){var c=pn(s);return dt(c)&&(c=n),dt(r)?Rs(r,Et(s,1,dt,!0),ge(c,2)):[]}),d_=Oe(function(r,s){var c=pn(s);return dt(c)&&(c=n),dt(r)?Rs(r,Et(s,1,dt,!0),n,c):[]});function f_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Ce(s),hn(r,s<0?0:s,f)):[]}function h_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Ce(s),s=f-s,hn(r,0,s<0?0:s)):[]}function p_(r,s){return r&&r.length?Go(r,ge(s,3),!0,!0):[]}function g_(r,s){return r&&r.length?Go(r,ge(s,3),!0):[]}function m_(r,s,c,f){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Bt(r,s,c)&&(c=0,f=m),ly(r,s,c,f)):[]}function Vh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Ce(c);return m<0&&(m=bt(f+m,0)),To(r,ge(s,3),m)}function Gh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f-1;return c!==n&&(m=Ce(c),m=c<0?bt(f+m,0):It(m,f-1)),To(r,ge(s,3),m,!0)}function Qh(r){var s=r==null?0:r.length;return s?Et(r,1):[]}function v_(r){var s=r==null?0:r.length;return s?Et(r,ne):[]}function b_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Ce(s),Et(r,s)):[]}function y_(r){for(var s=-1,c=r==null?0:r.length,f={};++s<c;){var m=r[s];f[m[0]]=m[1]}return f}function Yh(r){return r&&r.length?r[0]:n}function __(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Ce(c);return m<0&&(m=bt(f+m,0)),Ri(r,s,m)}function w_(r){var s=r==null?0:r.length;return s?hn(r,0,-1):[]}var x_=Oe(function(r){var s=it(r,xc);return s.length&&s[0]===r[0]?fc(s):[]}),$_=Oe(function(r){var s=pn(r),c=it(r,xc);return s===pn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?fc(c,ge(s,2)):[]}),k_=Oe(function(r){var s=pn(r),c=it(r,xc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?fc(c,n,s):[]});function E_(r,s){return r==null?"":wb.call(r,s)}function pn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function C_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f;return c!==n&&(m=Ce(c),m=m<0?bt(f+m,0):It(m,f-1)),s===s?sb(r,s,m):To(r,Rf,m,!0)}function S_(r,s){return r&&r.length?lh(r,Ce(s)):n}var T_=Oe(Jh);function Jh(r,s){return r&&r.length&&s&&s.length?mc(r,s):r}function A_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,ge(c,2)):r}function I_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,n,c):r}var R_=rr(function(r,s){var c=r==null?0:r.length,f=lc(r,s);return dh(r,it(s,function(m){return ir(m,c)?+m:m}).sort(wh)),f});function O_(r,s){var c=[];if(!(r&&r.length))return c;var f=-1,m=[],y=r.length;for(s=ge(s,3);++f<y;){var S=r[f];s(S,f,r)&&(c.push(S),m.push(f))}return dh(r,m),c}function Bc(r){return r==null?r:Eb.call(r)}function L_(r,s,c){var f=r==null?0:r.length;return f?(c&&typeof c!="number"&&Bt(r,s,c)?(s=0,c=f):(s=s==null?0:Ce(s),c=c===n?f:Ce(c)),hn(r,s,c)):[]}function P_(r,s){return Vo(r,s)}function M_(r,s,c){return yc(r,s,ge(c,2))}function B_(r,s){var c=r==null?0:r.length;if(c){var f=Vo(r,s);if(f<c&&wn(r[f],s))return f}return-1}function j_(r,s){return Vo(r,s,!0)}function U_(r,s,c){return yc(r,s,ge(c,2),!0)}function N_(r,s){var c=r==null?0:r.length;if(c){var f=Vo(r,s,!0)-1;if(wn(r[f],s))return f}return-1}function D_(r){return r&&r.length?hh(r):[]}function z_(r,s){return r&&r.length?hh(r,ge(s,2)):[]}function H_(r){var s=r==null?0:r.length;return s?hn(r,1,s):[]}function F_(r,s,c){return r&&r.length?(s=c||s===n?1:Ce(s),hn(r,0,s<0?0:s)):[]}function q_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Ce(s),s=f-s,hn(r,s<0?0:s,f)):[]}function W_(r,s){return r&&r.length?Go(r,ge(s,3),!1,!0):[]}function Z_(r,s){return r&&r.length?Go(r,ge(s,3)):[]}var K_=Oe(function(r){return Rr(Et(r,1,dt,!0))}),V_=Oe(function(r){var s=pn(r);return dt(s)&&(s=n),Rr(Et(r,1,dt,!0),ge(s,2))}),G_=Oe(function(r){var s=pn(r);return s=typeof s=="function"?s:n,Rr(Et(r,1,dt,!0),n,s)});function Q_(r){return r&&r.length?Rr(r):[]}function Y_(r,s){return r&&r.length?Rr(r,ge(s,2)):[]}function J_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Rr(r,n,s):[]}function jc(r){if(!(r&&r.length))return[];var s=0;return r=Cr(r,function(c){if(dt(c))return s=bt(c.length,s),!0}),ec(s,function(c){return it(r,Yl(c))})}function Xh(r,s){if(!(r&&r.length))return[];var c=jc(r);return s==null?c:it(c,function(f){return Qt(s,n,f)})}var X_=Oe(function(r,s){return dt(r)?Rs(r,s):[]}),ew=Oe(function(r){return wc(Cr(r,dt))}),tw=Oe(function(r){var s=pn(r);return dt(s)&&(s=n),wc(Cr(r,dt),ge(s,2))}),nw=Oe(function(r){var s=pn(r);return s=typeof s=="function"?s:n,wc(Cr(r,dt),n,s)}),rw=Oe(jc);function iw(r,s){return vh(r||[],s||[],Is)}function sw(r,s){return vh(r||[],s||[],Ps)}var ow=Oe(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Xh(r,c)});function ep(r){var s=b(r);return s.__chain__=!0,s}function aw(r,s){return s(r),r}function ia(r,s){return s(r)}var lw=rr(function(r){var s=r.length,c=s?r[0]:0,f=this.__wrapped__,m=function(y){return lc(y,r)};return s>1||this.__actions__.length||!(f instanceof Ue)||!ir(c)?this.thru(m):(f=f.slice(c,+c+(s?1:0)),f.__actions__.push({func:ia,args:[m],thisArg:n}),new dn(f,this.__chain__).thru(function(y){return s&&!y.length&&y.push(n),y}))});function cw(){return ep(this)}function uw(){return new dn(this.value(),this.__chain__)}function dw(){this.__values__===n&&(this.__values__=pp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function fw(){return this}function hw(r){for(var s,c=this;c instanceof Fo;){var f=Kh(c);f.__index__=0,f.__values__=n,s?m.__wrapped__=f:s=f;var m=f;c=c.__wrapped__}return m.__wrapped__=r,s}function pw(){var r=this.__wrapped__;if(r instanceof Ue){var s=r;return this.__actions__.length&&(s=new Ue(this)),s=s.reverse(),s.__actions__.push({func:ia,args:[Bc],thisArg:n}),new dn(s,this.__chain__)}return this.thru(Bc)}function gw(){return mh(this.__wrapped__,this.__actions__)}var mw=Qo(function(r,s,c){Ke.call(r,c)?++r[c]:tr(r,c,1)});function vw(r,s,c){var f=Ee(r)?Af:ay;return c&&Bt(r,s,c)&&(s=n),f(r,ge(s,3))}function bw(r,s){var c=Ee(r)?Cr:Xf;return c(r,ge(s,3))}var yw=Sh(Vh),_w=Sh(Gh);function ww(r,s){return Et(sa(r,s),1)}function xw(r,s){return Et(sa(r,s),ne)}function $w(r,s,c){return c=c===n?1:Ce(c),Et(sa(r,s),c)}function tp(r,s){var c=Ee(r)?cn:Ir;return c(r,ge(s,3))}function np(r,s){var c=Ee(r)?H2:Jf;return c(r,ge(s,3))}var kw=Qo(function(r,s,c){Ke.call(r,c)?r[c].push(s):tr(r,c,[s])});function Ew(r,s,c,f){r=Wt(r)?r:Fi(r),c=c&&!f?Ce(c):0;var m=r.length;return c<0&&(c=bt(m+c,0)),ua(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Ri(r,s,c)>-1}var Cw=Oe(function(r,s,c){var f=-1,m=typeof s=="function",y=Wt(r)?N(r.length):[];return Ir(r,function(S){y[++f]=m?Qt(s,S,c):Os(S,s,c)}),y}),Sw=Qo(function(r,s,c){tr(r,c,s)});function sa(r,s){var c=Ee(r)?it:sh;return c(r,ge(s,3))}function Tw(r,s,c,f){return r==null?[]:(Ee(s)||(s=s==null?[]:[s]),c=f?n:c,Ee(c)||(c=c==null?[]:[c]),ch(r,s,c))}var Aw=Qo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function Iw(r,s,c){var f=Ee(r)?Gl:Lf,m=arguments.length<3;return f(r,ge(s,4),c,m,Ir)}function Rw(r,s,c){var f=Ee(r)?F2:Lf,m=arguments.length<3;return f(r,ge(s,4),c,m,Jf)}function Ow(r,s){var c=Ee(r)?Cr:Xf;return c(r,la(ge(s,3)))}function Lw(r){var s=Ee(r)?Vf:Ey;return s(r)}function Pw(r,s,c){(c?Bt(r,s,c):s===n)?s=1:s=Ce(s);var f=Ee(r)?ny:Cy;return f(r,s)}function Mw(r){var s=Ee(r)?ry:Ty;return s(r)}function Bw(r){if(r==null)return 0;if(Wt(r))return ua(r)?Li(r):r.length;var s=Rt(r);return s==Ve||s==mt?r.size:pc(r).length}function jw(r,s,c){var f=Ee(r)?Ql:Ay;return c&&Bt(r,s,c)&&(s=n),f(r,ge(s,3))}var Uw=Oe(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Bt(r,s[0],s[1])?s=[]:c>2&&Bt(s[0],s[1],s[2])&&(s=[s[0]]),ch(r,Et(s,1),[])}),oa=bb||function(){return kt.Date.now()};function Nw(r,s){if(typeof s!="function")throw new un(l);return r=Ce(r),function(){if(--r<1)return s.apply(this,arguments)}}function rp(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,nr(r,P,n,n,n,n,s)}function ip(r,s){var c;if(typeof s!="function")throw new un(l);return r=Ce(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Uc=Oe(function(r,s,c){var f=E;if(c.length){var m=Tr(c,zi(Uc));f|=B}return nr(r,f,s,c,m)}),sp=Oe(function(r,s,c){var f=E|_;if(c.length){var m=Tr(c,zi(sp));f|=B}return nr(s,f,r,c,m)});function op(r,s,c){s=c?n:s;var f=nr(r,R,n,n,n,n,n,s);return f.placeholder=op.placeholder,f}function ap(r,s,c){s=c?n:s;var f=nr(r,T,n,n,n,n,n,s);return f.placeholder=ap.placeholder,f}function lp(r,s,c){var f,m,y,S,I,M,H=0,F=!1,V=!1,ie=!0;if(typeof r!="function")throw new un(l);s=gn(s)||0,st(c)&&(F=!!c.leading,V="maxWait"in c,y=V?bt(gn(c.maxWait)||0,s):y,ie="trailing"in c?!!c.trailing:ie);function fe(ft){var xn=f,ar=m;return f=m=n,H=ft,S=r.apply(ar,xn),S}function ve(ft){return H=ft,I=js(Me,s),F?fe(ft):S}function Ae(ft){var xn=ft-M,ar=ft-H,Sp=s-xn;return V?It(Sp,y-ar):Sp}function be(ft){var xn=ft-M,ar=ft-H;return M===n||xn>=s||xn<0||V&&ar>=y}function Me(){var ft=oa();if(be(ft))return Ne(ft);I=js(Me,Ae(ft))}function Ne(ft){return I=n,ie&&f?fe(ft):(f=m=n,S)}function en(){I!==n&&bh(I),H=0,f=M=m=I=n}function jt(){return I===n?S:Ne(oa())}function tn(){var ft=oa(),xn=be(ft);if(f=arguments,m=this,M=ft,xn){if(I===n)return ve(M);if(V)return bh(I),I=js(Me,s),fe(M)}return I===n&&(I=js(Me,s)),S}return tn.cancel=en,tn.flush=jt,tn}var Dw=Oe(function(r,s){return Yf(r,1,s)}),zw=Oe(function(r,s,c){return Yf(r,gn(s)||0,c)});function Hw(r){return nr(r,te)}function aa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new un(l);var c=function(){var f=arguments,m=s?s.apply(this,f):f[0],y=c.cache;if(y.has(m))return y.get(m);var S=r.apply(this,f);return c.cache=y.set(m,S)||y,S};return c.cache=new(aa.Cache||er),c}aa.Cache=er;function la(r){if(typeof r!="function")throw new un(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Fw(r){return ip(2,r)}var qw=Iy(function(r,s){s=s.length==1&&Ee(s[0])?it(s[0],Yt(ge())):it(Et(s,1),Yt(ge()));var c=s.length;return Oe(function(f){for(var m=-1,y=It(f.length,c);++m<y;)f[m]=s[m].call(this,f[m]);return Qt(r,this,f)})}),Nc=Oe(function(r,s){var c=Tr(s,zi(Nc));return nr(r,B,n,s,c)}),cp=Oe(function(r,s){var c=Tr(s,zi(cp));return nr(r,C,n,s,c)}),Ww=rr(function(r,s){return nr(r,U,n,n,n,s)});function Zw(r,s){if(typeof r!="function")throw new un(l);return s=s===n?s:Ce(s),Oe(r,s)}function Kw(r,s){if(typeof r!="function")throw new un(l);return s=s==null?0:bt(Ce(s),0),Oe(function(c){var f=c[s],m=Lr(c,0,s);return f&&Sr(m,f),Qt(r,this,m)})}function Vw(r,s,c){var f=!0,m=!0;if(typeof r!="function")throw new un(l);return st(c)&&(f="leading"in c?!!c.leading:f,m="trailing"in c?!!c.trailing:m),lp(r,s,{leading:f,maxWait:s,trailing:m})}function Gw(r){return rp(r,1)}function Qw(r,s){return Nc($c(s),r)}function Yw(){if(!arguments.length)return[];var r=arguments[0];return Ee(r)?r:[r]}function Jw(r){return fn(r,x)}function Xw(r,s){return s=typeof s=="function"?s:n,fn(r,x,s)}function e3(r){return fn(r,g|x)}function t3(r,s){return s=typeof s=="function"?s:n,fn(r,g|x,s)}function n3(r,s){return s==null||Qf(r,s,wt(s))}function wn(r,s){return r===s||r!==r&&s!==s}var r3=ea(dc),i3=ea(function(r,s){return r>=s}),ai=nh(function(){return arguments}())?nh:function(r){return lt(r)&&Ke.call(r,"callee")&&!Hf.call(r,"callee")},Ee=N.isArray,s3=$f?Yt($f):hy;function Wt(r){return r!=null&&ca(r.length)&&!sr(r)}function dt(r){return lt(r)&&Wt(r)}function o3(r){return r===!0||r===!1||lt(r)&&Mt(r)==qe}var Pr=_b||Qc,a3=kf?Yt(kf):py;function l3(r){return lt(r)&&r.nodeType===1&&!Us(r)}function c3(r){if(r==null)return!0;if(Wt(r)&&(Ee(r)||typeof r=="string"||typeof r.splice=="function"||Pr(r)||Hi(r)||ai(r)))return!r.length;var s=Rt(r);if(s==Ve||s==mt)return!r.size;if(Bs(r))return!pc(r).length;for(var c in r)if(Ke.call(r,c))return!1;return!0}function u3(r,s){return Ls(r,s)}function d3(r,s,c){c=typeof c=="function"?c:n;var f=c?c(r,s):n;return f===n?Ls(r,s,n,c):!!f}function Dc(r){if(!lt(r))return!1;var s=Mt(r);return s==Xe||s==Te||typeof r.message=="string"&&typeof r.name=="string"&&!Us(r)}function f3(r){return typeof r=="number"&&qf(r)}function sr(r){if(!st(r))return!1;var s=Mt(r);return s==rt||s==At||s==J||s==Ei}function up(r){return typeof r=="number"&&r==Ce(r)}function ca(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=G}function st(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function lt(r){return r!=null&&typeof r=="object"}var dp=Ef?Yt(Ef):my;function h3(r,s){return r===s||hc(r,s,Ic(s))}function p3(r,s,c){return c=typeof c=="function"?c:n,hc(r,s,Ic(s),c)}function g3(r){return fp(r)&&r!=+r}function m3(r){if(Xy(r))throw new $e(a);return rh(r)}function v3(r){return r===null}function b3(r){return r==null}function fp(r){return typeof r=="number"||lt(r)&&Mt(r)==Ht}function Us(r){if(!lt(r)||Mt(r)!=_t)return!1;var s=Bo(r);if(s===null)return!0;var c=Ke.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Oo.call(c)==pb}var zc=Cf?Yt(Cf):vy;function y3(r){return up(r)&&r>=-G&&r<=G}var hp=Sf?Yt(Sf):by;function ua(r){return typeof r=="string"||!Ee(r)&&lt(r)&&Mt(r)==bn}function Xt(r){return typeof r=="symbol"||lt(r)&&Mt(r)==Pn}var Hi=Tf?Yt(Tf):yy;function _3(r){return r===n}function w3(r){return lt(r)&&Rt(r)==ye}function x3(r){return lt(r)&&Mt(r)==Qn}var $3=ea(gc),k3=ea(function(r,s){return r<=s});function pp(r){if(!r)return[];if(Wt(r))return ua(r)?yn(r):qt(r);if(Es&&r[Es])return nb(r[Es]());var s=Rt(r),c=s==Ve?nc:s==mt?Ao:Fi;return c(r)}function or(r){if(!r)return r===0?r:0;if(r=gn(r),r===ne||r===-ne){var s=r<0?-1:1;return s*ae}return r===r?r:0}function Ce(r){var s=or(r),c=s%1;return s===s?c?s-c:s:0}function gp(r){return r?ri(Ce(r),0,re):0}function gn(r){if(typeof r=="number")return r;if(Xt(r))return de;if(st(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=st(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Pf(r);var c=s2.test(r);return c||a2.test(r)?N2(r.slice(2),c?2:8):i2.test(r)?de:+r}function mp(r){return Bn(r,Zt(r))}function E3(r){return r?ri(Ce(r),-G,G):r===0?r:0}function We(r){return r==null?"":Jt(r)}var C3=Ni(function(r,s){if(Bs(s)||Wt(s)){Bn(s,wt(s),r);return}for(var c in s)Ke.call(s,c)&&Is(r,c,s[c])}),vp=Ni(function(r,s){Bn(s,Zt(s),r)}),da=Ni(function(r,s,c,f){Bn(s,Zt(s),r,f)}),S3=Ni(function(r,s,c,f){Bn(s,wt(s),r,f)}),T3=rr(lc);function A3(r,s){var c=Ui(r);return s==null?c:Gf(c,s)}var I3=Oe(function(r,s){r=Ge(r);var c=-1,f=s.length,m=f>2?s[2]:n;for(m&&Bt(s[0],s[1],m)&&(f=1);++c<f;)for(var y=s[c],S=Zt(y),I=-1,M=S.length;++I<M;){var H=S[I],F=r[H];(F===n||wn(F,Mi[H])&&!Ke.call(r,H))&&(r[H]=y[H])}return r}),R3=Oe(function(r){return r.push(n,Ph),Qt(bp,n,r)});function O3(r,s){return If(r,ge(s,3),Mn)}function L3(r,s){return If(r,ge(s,3),uc)}function P3(r,s){return r==null?r:cc(r,ge(s,3),Zt)}function M3(r,s){return r==null?r:eh(r,ge(s,3),Zt)}function B3(r,s){return r&&Mn(r,ge(s,3))}function j3(r,s){return r&&uc(r,ge(s,3))}function U3(r){return r==null?[]:Zo(r,wt(r))}function N3(r){return r==null?[]:Zo(r,Zt(r))}function Hc(r,s,c){var f=r==null?n:ii(r,s);return f===n?c:f}function D3(r,s){return r!=null&&jh(r,s,cy)}function Fc(r,s){return r!=null&&jh(r,s,uy)}var z3=Ah(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),r[s]=c},Wc(Kt)),H3=Ah(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),Ke.call(r,s)?r[s].push(c):r[s]=[c]},ge),F3=Oe(Os);function wt(r){return Wt(r)?Kf(r):pc(r)}function Zt(r){return Wt(r)?Kf(r,!0):_y(r)}function q3(r,s){var c={};return s=ge(s,3),Mn(r,function(f,m,y){tr(c,s(f,m,y),f)}),c}function W3(r,s){var c={};return s=ge(s,3),Mn(r,function(f,m,y){tr(c,m,s(f,m,y))}),c}var Z3=Ni(function(r,s,c){Ko(r,s,c)}),bp=Ni(function(r,s,c,f){Ko(r,s,c,f)}),K3=rr(function(r,s){var c={};if(r==null)return c;var f=!1;s=it(s,function(y){return y=Or(y,r),f||(f=y.length>1),y}),Bn(r,Tc(r),c),f&&(c=fn(c,g|v|x,zy));for(var m=s.length;m--;)_c(c,s[m]);return c});function V3(r,s){return yp(r,la(ge(s)))}var G3=rr(function(r,s){return r==null?{}:xy(r,s)});function yp(r,s){if(r==null)return{};var c=it(Tc(r),function(f){return[f]});return s=ge(s),uh(r,c,function(f,m){return s(f,m[0])})}function Q3(r,s,c){s=Or(s,r);var f=-1,m=s.length;for(m||(m=1,r=n);++f<m;){var y=r==null?n:r[jn(s[f])];y===n&&(f=m,y=c),r=sr(y)?y.call(r):y}return r}function Y3(r,s,c){return r==null?r:Ps(r,s,c)}function J3(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:Ps(r,s,c,f)}var _p=Oh(wt),wp=Oh(Zt);function X3(r,s,c){var f=Ee(r),m=f||Pr(r)||Hi(r);if(s=ge(s,4),c==null){var y=r&&r.constructor;m?c=f?new y:[]:st(r)?c=sr(y)?Ui(Bo(r)):{}:c={}}return(m?cn:Mn)(r,function(S,I,M){return s(c,S,I,M)}),c}function e4(r,s){return r==null?!0:_c(r,s)}function t4(r,s,c){return r==null?r:gh(r,s,$c(c))}function n4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:gh(r,s,$c(c),f)}function Fi(r){return r==null?[]:tc(r,wt(r))}function r4(r){return r==null?[]:tc(r,Zt(r))}function i4(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=gn(c),c=c===c?c:0),s!==n&&(s=gn(s),s=s===s?s:0),ri(gn(r),s,c)}function s4(r,s,c){return s=or(s),c===n?(c=s,s=0):c=or(c),r=gn(r),dy(r,s,c)}function o4(r,s,c){if(c&&typeof c!="boolean"&&Bt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=or(r),s===n?(s=r,r=0):s=or(s)),r>s){var f=r;r=s,s=f}if(c||r%1||s%1){var m=Wf();return It(r+m*(s-r+U2("1e-"+((m+"").length-1))),s)}return vc(r,s)}var a4=Di(function(r,s,c){return s=s.toLowerCase(),r+(c?xp(s):s)});function xp(r){return qc(We(r).toLowerCase())}function $p(r){return r=We(r),r&&r.replace(c2,Y2).replace(T2,"")}function l4(r,s,c){r=We(r),s=Jt(s);var f=r.length;c=c===n?f:ri(Ce(c),0,f);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function c4(r){return r=We(r),r&&Fv.test(r)?r.replace(Xd,J2):r}function u4(r){return r=We(r),r&&Gv.test(r)?r.replace(Nl,"\\$&"):r}var d4=Di(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),f4=Di(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),h4=Ch("toLowerCase");function p4(r,s,c){r=We(r),s=Ce(s);var f=s?Li(r):0;if(!s||f>=s)return r;var m=(s-f)/2;return Xo(Do(m),c)+r+Xo(No(m),c)}function g4(r,s,c){r=We(r),s=Ce(s);var f=s?Li(r):0;return s&&f<s?r+Xo(s-f,c):r}function m4(r,s,c){r=We(r),s=Ce(s);var f=s?Li(r):0;return s&&f<s?Xo(s-f,c)+r:r}function v4(r,s,c){return c||s==null?s=0:s&&(s=+s),kb(We(r).replace(Dl,""),s||0)}function b4(r,s,c){return(c?Bt(r,s,c):s===n)?s=1:s=Ce(s),bc(We(r),s)}function y4(){var r=arguments,s=We(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var _4=Di(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function w4(r,s,c){return c&&typeof c!="number"&&Bt(r,s,c)&&(s=c=n),c=c===n?re:c>>>0,c?(r=We(r),r&&(typeof s=="string"||s!=null&&!zc(s))&&(s=Jt(s),!s&&Oi(r))?Lr(yn(r),0,c):r.split(s,c)):[]}var x4=Di(function(r,s,c){return r+(c?" ":"")+qc(s)});function $4(r,s,c){return r=We(r),c=c==null?0:ri(Ce(c),0,r.length),s=Jt(s),r.slice(c,c+s.length)==s}function k4(r,s,c){var f=b.templateSettings;c&&Bt(r,s,c)&&(s=n),r=We(r),s=da({},s,f,Lh);var m=da({},s.imports,f.imports,Lh),y=wt(m),S=tc(m,y),I,M,H=0,F=s.interpolate||ko,V="__p += '",ie=rc((s.escape||ko).source+"|"+F.source+"|"+(F===ef?r2:ko).source+"|"+(s.evaluate||ko).source+"|$","g"),fe="//# sourceURL="+(Ke.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++L2+"]")+`
`;r.replace(ie,function(be,Me,Ne,en,jt,tn){return Ne||(Ne=en),V+=r.slice(H,tn).replace(u2,X2),Me&&(I=!0,V+=`' +
__e(`+Me+`) +
'`),jt&&(M=!0,V+=`';
`+jt+`;
__p += '`),Ne&&(V+=`' +
((__t = (`+Ne+`)) == null ? '' : __t) +
'`),H=tn+be.length,be}),V+=`';
`;var ve=Ke.call(s,"variable")&&s.variable;if(!ve)V=`with (obj) {
`+V+`
}
`;else if(t2.test(ve))throw new $e(u);V=(M?V.replace(Nv,""):V).replace(Dv,"$1").replace(zv,"$1;"),V="function("+(ve||"obj")+`) {
`+(ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var Ae=Ep(function(){return Fe(y,fe+"return "+V).apply(n,S)});if(Ae.source=V,Dc(Ae))throw Ae;return Ae}function E4(r){return We(r).toLowerCase()}function C4(r){return We(r).toUpperCase()}function S4(r,s,c){if(r=We(r),r&&(c||s===n))return Pf(r);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=yn(s),y=Mf(f,m),S=Bf(f,m)+1;return Lr(f,y,S).join("")}function T4(r,s,c){if(r=We(r),r&&(c||s===n))return r.slice(0,Uf(r)+1);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Bf(f,yn(s))+1;return Lr(f,0,m).join("")}function A4(r,s,c){if(r=We(r),r&&(c||s===n))return r.replace(Dl,"");if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Mf(f,yn(s));return Lr(f,m).join("")}function I4(r,s){var c=W,f=Y;if(st(s)){var m="separator"in s?s.separator:m;c="length"in s?Ce(s.length):c,f="omission"in s?Jt(s.omission):f}r=We(r);var y=r.length;if(Oi(r)){var S=yn(r);y=S.length}if(c>=y)return r;var I=c-Li(f);if(I<1)return f;var M=S?Lr(S,0,I).join(""):r.slice(0,I);if(m===n)return M+f;if(S&&(I+=M.length-I),zc(m)){if(r.slice(I).search(m)){var H,F=M;for(m.global||(m=rc(m.source,We(tf.exec(m))+"g")),m.lastIndex=0;H=m.exec(F);)var V=H.index;M=M.slice(0,V===n?I:V)}}else if(r.indexOf(Jt(m),I)!=I){var ie=M.lastIndexOf(m);ie>-1&&(M=M.slice(0,ie))}return M+f}function R4(r){return r=We(r),r&&Hv.test(r)?r.replace(Jd,ob):r}var O4=Di(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),qc=Ch("toUpperCase");function kp(r,s,c){return r=We(r),s=c?n:s,s===n?tb(r)?cb(r):Z2(r):r.match(s)||[]}var Ep=Oe(function(r,s){try{return Qt(r,n,s)}catch(c){return Dc(c)?c:new $e(c)}}),L4=rr(function(r,s){return cn(s,function(c){c=jn(c),tr(r,c,Uc(r[c],r))}),r});function P4(r){var s=r==null?0:r.length,c=ge();return r=s?it(r,function(f){if(typeof f[1]!="function")throw new un(l);return[c(f[0]),f[1]]}):[],Oe(function(f){for(var m=-1;++m<s;){var y=r[m];if(Qt(y[0],this,f))return Qt(y[1],this,f)}})}function M4(r){return oy(fn(r,g))}function Wc(r){return function(){return r}}function B4(r,s){return r==null||r!==r?s:r}var j4=Th(),U4=Th(!0);function Kt(r){return r}function Zc(r){return ih(typeof r=="function"?r:fn(r,g))}function N4(r){return oh(fn(r,g))}function D4(r,s){return ah(r,fn(s,g))}var z4=Oe(function(r,s){return function(c){return Os(c,r,s)}}),H4=Oe(function(r,s){return function(c){return Os(r,c,s)}});function Kc(r,s,c){var f=wt(s),m=Zo(s,f);c==null&&!(st(s)&&(m.length||!f.length))&&(c=s,s=r,r=this,m=Zo(s,wt(s)));var y=!(st(c)&&"chain"in c)||!!c.chain,S=sr(r);return cn(m,function(I){var M=s[I];r[I]=M,S&&(r.prototype[I]=function(){var H=this.__chain__;if(y||H){var F=r(this.__wrapped__),V=F.__actions__=qt(this.__actions__);return V.push({func:M,args:arguments,thisArg:r}),F.__chain__=H,F}return M.apply(r,Sr([this.value()],arguments))})}),r}function F4(){return kt._===this&&(kt._=gb),this}function Vc(){}function q4(r){return r=Ce(r),Oe(function(s){return lh(s,r)})}var W4=Ec(it),Z4=Ec(Af),K4=Ec(Ql);function Cp(r){return Oc(r)?Yl(jn(r)):$y(r)}function V4(r){return function(s){return r==null?n:ii(r,s)}}var G4=Ih(),Q4=Ih(!0);function Gc(){return[]}function Qc(){return!1}function Y4(){return{}}function J4(){return""}function X4(){return!0}function ex(r,s){if(r=Ce(r),r<1||r>G)return[];var c=re,f=It(r,re);s=ge(s),r-=re;for(var m=ec(f,s);++c<r;)s(c);return m}function tx(r){return Ee(r)?it(r,jn):Xt(r)?[r]:qt(Zh(We(r)))}function nx(r){var s=++hb;return We(r)+s}var rx=Jo(function(r,s){return r+s},0),ix=Cc("ceil"),sx=Jo(function(r,s){return r/s},1),ox=Cc("floor");function ax(r){return r&&r.length?Wo(r,Kt,dc):n}function lx(r,s){return r&&r.length?Wo(r,ge(s,2),dc):n}function cx(r){return Of(r,Kt)}function ux(r,s){return Of(r,ge(s,2))}function dx(r){return r&&r.length?Wo(r,Kt,gc):n}function fx(r,s){return r&&r.length?Wo(r,ge(s,2),gc):n}var hx=Jo(function(r,s){return r*s},1),px=Cc("round"),gx=Jo(function(r,s){return r-s},0);function mx(r){return r&&r.length?Xl(r,Kt):0}function vx(r,s){return r&&r.length?Xl(r,ge(s,2)):0}return b.after=Nw,b.ary=rp,b.assign=C3,b.assignIn=vp,b.assignInWith=da,b.assignWith=S3,b.at=T3,b.before=ip,b.bind=Uc,b.bindAll=L4,b.bindKey=sp,b.castArray=Yw,b.chain=ep,b.chunk=o_,b.compact=a_,b.concat=l_,b.cond=P4,b.conforms=M4,b.constant=Wc,b.countBy=mw,b.create=A3,b.curry=op,b.curryRight=ap,b.debounce=lp,b.defaults=I3,b.defaultsDeep=R3,b.defer=Dw,b.delay=zw,b.difference=c_,b.differenceBy=u_,b.differenceWith=d_,b.drop=f_,b.dropRight=h_,b.dropRightWhile=p_,b.dropWhile=g_,b.fill=m_,b.filter=bw,b.flatMap=ww,b.flatMapDeep=xw,b.flatMapDepth=$w,b.flatten=Qh,b.flattenDeep=v_,b.flattenDepth=b_,b.flip=Hw,b.flow=j4,b.flowRight=U4,b.fromPairs=y_,b.functions=U3,b.functionsIn=N3,b.groupBy=kw,b.initial=w_,b.intersection=x_,b.intersectionBy=$_,b.intersectionWith=k_,b.invert=z3,b.invertBy=H3,b.invokeMap=Cw,b.iteratee=Zc,b.keyBy=Sw,b.keys=wt,b.keysIn=Zt,b.map=sa,b.mapKeys=q3,b.mapValues=W3,b.matches=N4,b.matchesProperty=D4,b.memoize=aa,b.merge=Z3,b.mergeWith=bp,b.method=z4,b.methodOf=H4,b.mixin=Kc,b.negate=la,b.nthArg=q4,b.omit=K3,b.omitBy=V3,b.once=Fw,b.orderBy=Tw,b.over=W4,b.overArgs=qw,b.overEvery=Z4,b.overSome=K4,b.partial=Nc,b.partialRight=cp,b.partition=Aw,b.pick=G3,b.pickBy=yp,b.property=Cp,b.propertyOf=V4,b.pull=T_,b.pullAll=Jh,b.pullAllBy=A_,b.pullAllWith=I_,b.pullAt=R_,b.range=G4,b.rangeRight=Q4,b.rearg=Ww,b.reject=Ow,b.remove=O_,b.rest=Zw,b.reverse=Bc,b.sampleSize=Pw,b.set=Y3,b.setWith=J3,b.shuffle=Mw,b.slice=L_,b.sortBy=Uw,b.sortedUniq=D_,b.sortedUniqBy=z_,b.split=w4,b.spread=Kw,b.tail=H_,b.take=F_,b.takeRight=q_,b.takeRightWhile=W_,b.takeWhile=Z_,b.tap=aw,b.throttle=Vw,b.thru=ia,b.toArray=pp,b.toPairs=_p,b.toPairsIn=wp,b.toPath=tx,b.toPlainObject=mp,b.transform=X3,b.unary=Gw,b.union=K_,b.unionBy=V_,b.unionWith=G_,b.uniq=Q_,b.uniqBy=Y_,b.uniqWith=J_,b.unset=e4,b.unzip=jc,b.unzipWith=Xh,b.update=t4,b.updateWith=n4,b.values=Fi,b.valuesIn=r4,b.without=X_,b.words=kp,b.wrap=Qw,b.xor=ew,b.xorBy=tw,b.xorWith=nw,b.zip=rw,b.zipObject=iw,b.zipObjectDeep=sw,b.zipWith=ow,b.entries=_p,b.entriesIn=wp,b.extend=vp,b.extendWith=da,Kc(b,b),b.add=rx,b.attempt=Ep,b.camelCase=a4,b.capitalize=xp,b.ceil=ix,b.clamp=i4,b.clone=Jw,b.cloneDeep=e3,b.cloneDeepWith=t3,b.cloneWith=Xw,b.conformsTo=n3,b.deburr=$p,b.defaultTo=B4,b.divide=sx,b.endsWith=l4,b.eq=wn,b.escape=c4,b.escapeRegExp=u4,b.every=vw,b.find=yw,b.findIndex=Vh,b.findKey=O3,b.findLast=_w,b.findLastIndex=Gh,b.findLastKey=L3,b.floor=ox,b.forEach=tp,b.forEachRight=np,b.forIn=P3,b.forInRight=M3,b.forOwn=B3,b.forOwnRight=j3,b.get=Hc,b.gt=r3,b.gte=i3,b.has=D3,b.hasIn=Fc,b.head=Yh,b.identity=Kt,b.includes=Ew,b.indexOf=__,b.inRange=s4,b.invoke=F3,b.isArguments=ai,b.isArray=Ee,b.isArrayBuffer=s3,b.isArrayLike=Wt,b.isArrayLikeObject=dt,b.isBoolean=o3,b.isBuffer=Pr,b.isDate=a3,b.isElement=l3,b.isEmpty=c3,b.isEqual=u3,b.isEqualWith=d3,b.isError=Dc,b.isFinite=f3,b.isFunction=sr,b.isInteger=up,b.isLength=ca,b.isMap=dp,b.isMatch=h3,b.isMatchWith=p3,b.isNaN=g3,b.isNative=m3,b.isNil=b3,b.isNull=v3,b.isNumber=fp,b.isObject=st,b.isObjectLike=lt,b.isPlainObject=Us,b.isRegExp=zc,b.isSafeInteger=y3,b.isSet=hp,b.isString=ua,b.isSymbol=Xt,b.isTypedArray=Hi,b.isUndefined=_3,b.isWeakMap=w3,b.isWeakSet=x3,b.join=E_,b.kebabCase=d4,b.last=pn,b.lastIndexOf=C_,b.lowerCase=f4,b.lowerFirst=h4,b.lt=$3,b.lte=k3,b.max=ax,b.maxBy=lx,b.mean=cx,b.meanBy=ux,b.min=dx,b.minBy=fx,b.stubArray=Gc,b.stubFalse=Qc,b.stubObject=Y4,b.stubString=J4,b.stubTrue=X4,b.multiply=hx,b.nth=S_,b.noConflict=F4,b.noop=Vc,b.now=oa,b.pad=p4,b.padEnd=g4,b.padStart=m4,b.parseInt=v4,b.random=o4,b.reduce=Iw,b.reduceRight=Rw,b.repeat=b4,b.replace=y4,b.result=Q3,b.round=px,b.runInContext=L,b.sample=Lw,b.size=Bw,b.snakeCase=_4,b.some=jw,b.sortedIndex=P_,b.sortedIndexBy=M_,b.sortedIndexOf=B_,b.sortedLastIndex=j_,b.sortedLastIndexBy=U_,b.sortedLastIndexOf=N_,b.startCase=x4,b.startsWith=$4,b.subtract=gx,b.sum=mx,b.sumBy=vx,b.template=k4,b.times=ex,b.toFinite=or,b.toInteger=Ce,b.toLength=gp,b.toLower=E4,b.toNumber=gn,b.toSafeInteger=E3,b.toString=We,b.toUpper=C4,b.trim=S4,b.trimEnd=T4,b.trimStart=A4,b.truncate=I4,b.unescape=R4,b.uniqueId=nx,b.upperCase=O4,b.upperFirst=qc,b.each=tp,b.eachRight=np,b.first=Yh,Kc(b,function(){var r={};return Mn(b,function(s,c){Ke.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),cn(["drop","take"],function(r,s){Ue.prototype[r]=function(c){c=c===n?1:bt(Ce(c),0);var f=this.__filtered__&&!s?new Ue(this):this.clone();return f.__filtered__?f.__takeCount__=It(c,f.__takeCount__):f.__views__.push({size:It(c,re),type:r+(f.__dir__<0?"Right":"")}),f},Ue.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),cn(["filter","map","takeWhile"],function(r,s){var c=s+1,f=c==se||c==D;Ue.prototype[r]=function(m){var y=this.clone();return y.__iteratees__.push({iteratee:ge(m,3),type:c}),y.__filtered__=y.__filtered__||f,y}}),cn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Ue.prototype[r]=function(){return this[c](1).value()[0]}}),cn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Ue.prototype[r]=function(){return this.__filtered__?new Ue(this):this[c](1)}}),Ue.prototype.compact=function(){return this.filter(Kt)},Ue.prototype.find=function(r){return this.filter(r).head()},Ue.prototype.findLast=function(r){return this.reverse().find(r)},Ue.prototype.invokeMap=Oe(function(r,s){return typeof r=="function"?new Ue(this):this.map(function(c){return Os(c,r,s)})}),Ue.prototype.reject=function(r){return this.filter(la(ge(r)))},Ue.prototype.slice=function(r,s){r=Ce(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Ue(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Ce(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Ue.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ue.prototype.toArray=function(){return this.take(re)},Mn(Ue.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),m=b[f?"take"+(s=="last"?"Right":""):s],y=f||/^find/.test(s);m&&(b.prototype[s]=function(){var S=this.__wrapped__,I=f?[1]:arguments,M=S instanceof Ue,H=I[0],F=M||Ee(S),V=function(Me){var Ne=m.apply(b,Sr([Me],I));return f&&ie?Ne[0]:Ne};F&&c&&typeof H=="function"&&H.length!=1&&(M=F=!1);var ie=this.__chain__,fe=!!this.__actions__.length,ve=y&&!ie,Ae=M&&!fe;if(!y&&F){S=Ae?S:new Ue(this);var be=r.apply(S,I);return be.__actions__.push({func:ia,args:[V],thisArg:n}),new dn(be,ie)}return ve&&Ae?r.apply(this,I):(be=this.thru(V),ve?f?be.value()[0]:be.value():be)})}),cn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Io[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(f&&!this.__chain__){var y=this.value();return s.apply(Ee(y)?y:[],m)}return this[c](function(S){return s.apply(Ee(S)?S:[],m)})}}),Mn(Ue.prototype,function(r,s){var c=b[s];if(c){var f=c.name+"";Ke.call(ji,f)||(ji[f]=[]),ji[f].push({name:s,func:c})}}),ji[Yo(n,_).name]=[{name:"wrapper",func:n}],Ue.prototype.clone=Rb,Ue.prototype.reverse=Ob,Ue.prototype.value=Lb,b.prototype.at=lw,b.prototype.chain=cw,b.prototype.commit=uw,b.prototype.next=dw,b.prototype.plant=hw,b.prototype.reverse=pw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=gw,b.prototype.first=b.prototype.head,Es&&(b.prototype[Es]=fw),b},Pi=ub();Xr?((Xr.exports=Pi)._=Pi,Zl._=Pi):kt._=Pi}).call(dr)})(tl,tl.exports);var TP=tl.exports;const mr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>mr(n)(t));case"OR":return e.children.some(n=>mr(n)(t));case"NOT":return!mr(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Wu=e=>{const t=_i(),n=De(e),i=()=>["useFollowings",n()],o=wi(i,({queryKey:d,signal:h})=>{console.debug("useFollowings");const[,p]=d;if(p==null)return Promise.resolve(null);const{pubkey:g}=p,v=vs({type:"Followings",pubkey:g},h).then(x=>{const k=()=>{const w=kd(x().events);if(w==null)throw new Error(`followings not found: ${g}`);return w};return fo(x).subscribe(()=>{try{t.setQueryData(d,k())}catch(w){console.error("error occurred while updating followings cache: ",w)}}),k()});return wr(15e3,`useFollowings: ${g}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return hr(o.data).pTags().forEach(p=>{const[,g,v,x]=p,k={pubkey:g,petname:x};v!=null&&v.length>0&&(k.mainRelayUrl=v),d.push(k)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},AP=e=>{const{config:t,removeColumn:n}=Pe(),{followingPubkeys:i}=Wu(()=>({pubkey:e.column.pubkey})),{events:o}=xr(()=>{const a=TP.uniq([...i()]);return a.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:ur()-4*60*60}],clientEventFilter:l=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(l.content)}});return Un(()=>{console.log("home",o())}),an(()=>console.log("home timeline mounted")),vr(()=>console.log("home timeline unmounted")),$($i,{get header(){return $(ls,{get name(){return e.column.name??"ホーム"},get icon(){return $(kv,{})},settings:()=>$(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ys,{get events(){return o()}})}})},IP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Ev=(e={})=>(()=>{const t=IP();return Ze(t,e,!0,!0),t})(),RP=j('<span class="h-4 w-4 pt-[1px] text-rose-400">'),OP=j('<img alt="icon" class="rounded">'),LP=j('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),PP=j('<div class="notification-event py-1">'),MP=j('<div class="truncate">読み込み中 '),BP=e=>{const{shouldMuteEvent:t}=Pe(),{showProfile:n}=Yr(),i=()=>hr(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=bs(()=>({pubkey:e.event.pubkey})),{event:l,query:u}=vm(()=>on([o()])(([h])=>({eventId:h}))),d=()=>u.isSuccess&&l()==null;return $(ue,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const h=LP(),p=h.firstChild,g=p.nextSibling,v=g.firstChild,x=v.nextSibling,k=x.firstChild;return O(p,$(Sn,{get fallback(){return e.event.content},get children(){return $(ze,{get when(){return e.event.content==="+"},get children(){const w=RP();return O(w,$(Cd,{})),w}})}})),O(v,$(ue,{get when(){return a()?.picture!=null},get children(){const w=OP();return je(()=>pt(w,"src",a()?.picture)),w}})),k.$$click=()=>n(e.event.pubkey),O(k,$(Tl,{get pubkey(){return e.event.pubkey}})),h})(),(()=>{const h=PP();return O(h,$(ue,{get when(){return l()},get fallback(){return(()=>{const p=MP();return p.firstChild,O(p,o,null),p})()},keyed:!0,children:p=>$(nv,{event:p})})),h})()]}})};ut(["click"]);const jP=j("<div>unknown event"),Cv=e=>{const{shouldMuteEvent:t}=Pe();return $(Tt,{get each(){return e.events},children:n=>$(ue,{get when(){return!t(n)},get children(){return $(Sn,{get fallback(){return jP()},get children(){return[$(ze,{get when(){return n.kind===ct.Text},get children(){return $(qs,{get children(){return $(rv,{event:n})}})}}),$(ze,{get when(){return n.kind===ct.Reaction},get children(){return $(qs,{get children(){return $(BP,{event:n})}})}}),$(ze,{get when(){return n.kind===6},get children(){return $(qs,{get children(){return $(wm,{event:n})}})}})]}})}})})},UP=e=>{const{config:t,removeColumn:n}=Pe(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return $($i,{get header(){return $(ls,{get name(){return e.column.name??"通知"},get icon(){return $(Ev,{})},settings:()=>$(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Cv,{get events(){return i()}})}})},NP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Wd=(e={})=>(()=>{const t=NP();return Ze(t,e,!0,!0),t})(),DP=e=>{const{config:t,removeColumn:n}=Pe(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return $($i,{get header(){return $(ls,{get name(){return e.column.name??"投稿"},get icon(){return $(Wd,{})},settings:()=>$(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ys,{get events(){return i()}})}})},zP=e=>{const{config:t,removeColumn:n}=Pe(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return $($i,{get header(){return $(ls,{get name(){return e.column.name??"リアクション"},get icon(){return $(Ed,{})},settings:()=>$(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Cv,{get events(){return i()}})}})},HP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Zd=(e={})=>(()=>{const t=HP();return Ze(t,e,!0,!0),t})(),FP=e=>{const{removeColumn:t}=Pe(),{events:n}=xr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:ur()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(i.content)}));return $($i,{get header(){return $(ls,{get name(){return e.column.name??"リレー"},get icon(){return $(Zd,{})},settings:()=>$(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ys,{get events(){return n()}})}})},qP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),Sv=(e={})=>(()=>{const t=qP();return Ze(t,e,!0,!0),t})(),WP=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),ZP=e=>{const[t,n]=we(!1),[i,o]=we(""),{saveColumn:a}=Pe(),l=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},h=g=>{o(g.currentTarget.value)},p=g=>{g.preventDefault(),u()};return an(()=>{o(e.column.query)}),(()=>{const g=WP(),v=g.firstChild,x=v.firstChild,k=x.firstChild,w=x.nextSibling,E=w.firstChild,_=w.nextSibling;return O(k,$(Sv,{})),w.addEventListener("submit",p),E.addEventListener("blur",d),E.addEventListener("change",h),_.$$click=()=>l(),O(_,$(Ag,{})),O(g,$(ue,{get when(){return t()},get children(){return e.settings()}}),null),je(()=>E.value=i()),g})()},KP=e=>{const{removeColumn:t}=Pe(),{events:n}=xr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:Rk,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}});return $($i,{get header(){return $(ZP,{get column(){return e.column},settings:()=>$(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ys,{get events(){return n()}})}})};ut(["click"]);const VP=j('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),GP=()=>{const{config:e}=Pe();return(()=>{const t=VP();return O(t,$(Tt,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return $(Sn,{get children(){return[$(ze,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:l=>$(AP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:l=>$(UP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:l=>$(DP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:l=>$(zP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:l=>$(FP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Bookmark"&&n},keyed:!0,children:l=>$(CP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:l=>$(KP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},QP=j('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),YP=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=QP();i.$$click=n;const o=t;return typeof o=="function"?br(o,i):t=i,O(i,()=>e.children),i})()};ut(["click"]);const JP=j('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),xo=e=>$(YP,{onClose:()=>e.onClose?.(),get children(){const t=JP(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),O(i,$(ue,{get when(){return e?.closeButton},get fallback(){return $(as,{})},keyed:!0,children:a=>a()})),O(o,()=>e.children),t}});ut(["click"]);const XP=j('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),eM=j('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),tM=j('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),nM=async()=>{const t=await(await fetch(Vu("packageInfo.json"))).text();return JSON.parse(t)},rM=e=>{const[t]=Cg(nM);return $(xo,{get onClose(){return e.onClose},get children(){const n=XP(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,h=d.nextSibling,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,x=v.nextSibling;x.nextSibling;const k=g.nextSibling,w=k.nextSibling,E=w.nextSibling,_=E.nextSibling,A=_.nextSibling,R=A.nextSibling,T=R.nextSibling;return T.nextSibling,O(u,()=>t()?.self?.version,null),O(g,$(Rl,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),x),O(T,()=>t()?.self.licenseText),O(n,$(Tt,{get each(){return t()?.packages??[]},fallback:"取得中",children:B=>[(()=>{const C=eM(),P=C.firstChild,U=P.nextSibling,te=U.nextSibling,W=te.nextSibling;return W.nextSibling,O(C,()=>B.name,P),O(C,()=>B.version,U),O(C,()=>B.licenseSpdx,W),C})(),(()=>{const C=tM();return O(C,()=>B.licenseText),C})()]}),null),je(()=>pt(o,"src",Vu("images/rabbit_app_256.png"))),n}})},iM=j('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),sM=e=>{const t=Kn(),{saveColumn:n}=Pe(),i=wo(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(g=>console.error(g))},a=()=>{on([t()])(([g])=>{n(J1({pubkey:g}))}),o()},l=()=>{on([t()])(([g])=>{n(X1({pubkey:g}))}),o()},u=()=>{n(em()),o()},d=()=>{n($d({query:""})),o()},h=()=>{on([t()])(([g])=>{n(tm({pubkey:g}))}),o()},p=()=>{on([t()])(([g])=>{n(nm({pubkey:g}))}),o()};return $(xo,{get onClose(){return e.onClose},get children(){const g=iM(),v=g.firstChild,x=v.firstChild,k=v.nextSibling,w=k.firstChild,E=k.nextSibling,_=E.firstChild,A=E.nextSibling,R=A.firstChild,T=A.nextSibling,B=T.firstChild,C=T.nextSibling,P=C.firstChild;return v.$$click=()=>a(),O(x,$(kv,{})),k.$$click=()=>l(),O(w,$(Ev,{})),E.$$click=()=>u(),O(_,$(Zd,{})),A.$$click=()=>d(),O(R,$(Sv,{})),T.$$click=()=>h(),O(B,$(Wd,{})),C.$$click=()=>p(),O(P,$(Ed,{})),g}})};ut(["click"]);const oM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),aM=(e={})=>(()=>{const t=oM();return Ze(t,e,!0,!0),t})(),lM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),cM=(e={})=>(()=>{const t=lM();return Ze(t,e,!0,!0),t})(),uM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),dM=(e={})=>(()=>{const t=uM();return Ze(t,e,!0,!0),t})();function fM(e){const{config:t}=Pe(),n=De(e),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[ct.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>pr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const hM=e=>{const t=De(e),n=wi(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return K1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},pM=j('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),gM=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),mM=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),vM=j('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),bM=j('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),yM=j('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),_M=j('<div class="shrink-0 text-xs">読み込み中'),wM=j('<div class="shrink-0 text-xs">フォローされています'),xM=j('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),$M=j('<div class="truncate text-xl font-bold">'),kM=j('<div class="truncate text-xs">@'),EM=j('<span class="inline-block h-3 w-3">'),CM=j('<span class="inline-block h-4 w-4 text-blue-400">'),SM=j('<div class="flex items-center text-xs">'),TM=j('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),AM=j('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),IM=j('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),RM=j('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),OM=j('<ul class="border-t px-5 py-2 text-xs">'),LM=j('<ul class="border-t p-1">'),PM=j('<div class="h-12 shrink-0">'),MM=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),BM=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),jM=j('<span class="inline-block h-4 w-4 text-rose-500">'),UM=j('<span class="text-sm">読み込み中'),NM=j('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),DM=j('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),zM=e=>{const{count:t}=fM(()=>({pubkey:e.pubkey}));return De(t)},HM=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=Pe(),a=Ol(),l=Kn(),{showProfileEdit:u}=Yr(),d=De(()=>Sl(e.pubkey)),[h,p]=we(!1),[g,v]=we(!1),{profile:x,query:k}=bs(()=>({pubkey:e.pubkey})),{verification:w,query:E}=hM(()=>on([x()?.nip05])(([D])=>({nip05:D}))),_=()=>{const D=x()?.nip05;if(D==null)return null;const[ne,G]=D.split("@");return G==null?null:ne==="_"?{domain:G,ident:G}:{user:ne,domain:G,ident:D}},A=()=>w()?.pubkey===e.pubkey,R=()=>o(e.pubkey),{followingPubkeys:T,invalidateFollowings:B,query:C}=Wu(()=>on([l()])(([D])=>({pubkey:D}))),P=()=>T().includes(e.pubkey),{followingPubkeys:U,query:te}=Wu(()=>({pubkey:e.pubkey})),W=()=>{const D=l();return D!=null&&U().includes(D)},Y=pi({mutationKey:["updateContacts"],mutationFn:(...D)=>a.updateContacts(...D).then(ne=>Promise.allSettled(ne.map(wr(5e3)))),onSuccess:D=>{const ne=D.filter(ae=>ae.status==="fulfilled").length,G=D.length-ne;ne===D.length?console.log("succeeded to update contacts"):ne>0?console.log(`succeeded to update contacts for ${ne} relays but failed for ${G} relays`):console.error("failed to update contacts")},onError:D=>{console.error("failed to update contacts: ",D)},onSettled:()=>{B().then(()=>C.refetch()).catch(D=>console.error("failed to refetch contacts",D))}}),Z=()=>{const D=l();D!=null&&C.isFetched&&Y.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:pr([...T(),e.pubkey])})},X=()=>{const D=l();D!=null&&C.isFetched&&window.confirm("本当にフォロー解除しますか？")&&Y.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:T().filter(ne=>ne!==e.pubkey)})},se=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(D=>window.alert(D))}},{content:()=>R()?"ミュート解除":"ミュート",onSelect:()=>{R()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===l(),content:()=>P()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{P()?X():Z()}}],{events:q}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:ur()}],continuous:!1}));return $(xo,{onClose:()=>e.onClose?.(),get children(){return[$(ue,{get when(){return k.isFetched},get fallback(){return"loading"},get children(){return[$(ue,{get when(){return x()?.banner},get fallback(){return PM()},keyed:!0,children:D=>(()=>{const ne=MM(),G=ne.firstChild;return pt(G,"src",D),ne})()}),(()=>{const D=xM(),ne=D.firstChild,G=ne.firstChild,ae=ne.nextSibling,de=ae.firstChild;return O(G,$(ue,{get when(){return x()?.picture},keyed:!0,children:re=>(()=>{const Q=BM();return pt(Q,"src",re),Q})()})),O(de,$(Sn,{get children(){return[$(ze,{get when(){return e.pubkey===l()},get children(){const re=pM();return re.$$click=()=>u(),re}}),$(ze,{get when(){return C.isLoading||C.isFetching},get children(){return gM()}}),$(ze,{get when(){return Y.isLoading},get children(){return mM()}}),$(ze,{get when(){return P()},get children(){const re=vM();return re.$$click=()=>X(),re.addEventListener("mouseleave",()=>p(!1)),re.addEventListener("mouseenter",()=>p(!0)),O(re,$(ue,{get when(){return!h()},fallback:"フォロー解除",children:"フォロー中"})),je(()=>re.disabled=Y.isLoading),re}}),$(ze,{get when(){return!P()},get children(){const re=bM();return re.$$click=()=>Z(),je(()=>re.disabled=Y.isLoading),re}})]}}),null),O(de,$(km,{menu:se,get children(){const re=yM();return O(re,$(xm,{})),re}}),null),O(ae,$(Sn,{get children(){return[$(ze,{get when(){return te.isLoading},get children(){return _M()}}),$(ze,{get when(){return W()},get children(){return wM()}})]}}),null),D})(),(()=>{const D=TM(),ne=D.firstChild,G=ne.firstChild,ae=G.nextSibling,de=ae.firstChild;return O(ne,$(ue,{get when(){return(x()?.display_name?.length??0)>0},get children(){const re=$M();return O(re,()=>x()?.display_name),re}}),G),O(G,$(ue,{get when(){return(x()?.name?.length??0)>0},get children(){const re=kM();return re.firstChild,O(re,()=>x()?.name,null),re}}),null),O(G,$(ue,{get when(){return(x()?.nip05?.length??0)>0},get children(){const re=SM();return O(re,()=>_()?.ident,null),O(re,$(Sn,{get fallback(){return(()=>{const Q=jM();return O(Q,$(dM,{})),Q})()},get children(){return[$(ze,{get when(){return E.isLoading},get children(){const Q=EM();return O(Q,$(aM,{})),Q}}),$(ze,{get when(){return A()},get children(){const Q=CM();return O(Q,$(cM,{})),Q}})]}}),null),re}}),null),O(de,d),D})(),$(ue,{get when(){return(x()?.about??"").length>0},get children(){const D=AM();return O(D,()=>x()?.about),D}}),(()=>{const D=RM(),ne=D.firstChild,G=ne.firstChild,ae=G.nextSibling;return O(ae,$(ue,{get when(){return te.isFetched},get fallback(){return UM()},get children(){return U().length}})),O(D,$(ue,{get when(){return!t().hideCount},get children(){const de=IM(),re=de.firstChild,Q=re.nextSibling;return O(Q,$(ue,{get when(){return g()},get fallback(){return(()=>{const he=NM();return he.$$click=()=>v(!0),he})()},keyed:!0,get children(){return $(zM,{get pubkey(){return e.pubkey}})}})),de}}),null),D})(),$(ue,{get when(){return(x()?.website??"").length>0},get children(){const D=OM();return O(D,$(ue,{get when(){return x()?.website},keyed:!0,children:ne=>(()=>{const G=DM(),ae=G.firstChild;return O(ae,$(Zd,{})),O(G,$(Rl,{class:"text-blue-500 underline",href:ne}),null),G})()})),D}})]}}),(()=>{const D=LM();return O(D,$(ys,{get events(){return q()}})),D})()]}})};ut(["click"]);function FM(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var qM=FM,WM=xi,ZM=function(){try{var e=WM(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Tv=ZM,ig=Tv;function KM(e,t,n){t=="__proto__"&&ig?ig(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Av=KM,VM=Av,GM=Yu,QM=Object.prototype,YM=QM.hasOwnProperty;function JM(e,t,n){var i=e[t];(!(YM.call(e,t)&&GM(i,n))||n===void 0&&!(t in e))&&VM(e,t,n)}var Kd=JM,XM=Kd,eB=Av;function tB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?eB(n,u,d):XM(n,u,d)}return n}var $o=tB,nB=$o,rB=Ll;function iB(e,t){return e&&nB(t,rB(t),e)}var sB=iB;function oB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var aB=oB,lB=qn,cB=Dd,uB=aB,dB=Object.prototype,fB=dB.hasOwnProperty;function hB(e){if(!lB(e))return uB(e);var t=cB(e),n=[];for(var i in e)i=="constructor"&&(t||!fB.call(e,i))||n.push(i);return n}var pB=hB,gB=dv,mB=pB,vB=hv;function bB(e){return vB(e)?gB(e,!0):mB(e)}var Vd=bB,yB=$o,_B=Vd;function wB(e,t){return e&&yB(t,_B(t),e)}var xB=wB,nl={exports:{}};nl.exports;(function(e,t){var n=Rn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(h,p){if(p)return h.slice();var g=h.length,v=u?u(g):new h.constructor(g);return h.copy(v),v}e.exports=d})(nl,nl.exports);var $B=nl.exports;function kB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var EB=kB,CB=$o,SB=Ld;function TB(e,t){return CB(e,SB(e),t)}var AB=TB,IB=fv,RB=IB(Object.getPrototypeOf,Object),Gd=RB,OB=Od,LB=Gd,PB=Ld,MB=lv,BB=Object.getOwnPropertySymbols,jB=BB?function(e){for(var t=[];e;)OB(t,PB(e)),e=LB(e);return t}:MB,Iv=jB,UB=$o,NB=Iv;function DB(e,t){return UB(e,NB(e),t)}var zB=DB,HB=av,FB=Iv,qB=Vd;function WB(e){return HB(e,qB,FB)}var Qd=WB,ZB=Object.prototype,KB=ZB.hasOwnProperty;function VB(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&KB.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var GB=VB,sg=ov;function QB(e){var t=new e.constructor(e.byteLength);return new sg(t).set(new sg(e)),t}var Yd=QB,YB=Yd;function JB(e,t){var n=t?YB(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var XB=JB,ej=/\w*$/;function tj(e){var t=new e.constructor(e.source,ej.exec(e));return t.lastIndex=e.lastIndex,t}var nj=tj,og=cs,ag=og?og.prototype:void 0,lg=ag?ag.valueOf:void 0;function rj(e){return lg?Object(lg.call(e)):{}}var ij=rj,sj=Yd;function oj(e,t){var n=t?sj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var aj=oj,lj=Yd,cj=XB,uj=nj,dj=ij,fj=aj,hj="[object Boolean]",pj="[object Date]",gj="[object Map]",mj="[object Number]",vj="[object RegExp]",bj="[object Set]",yj="[object String]",_j="[object Symbol]",wj="[object ArrayBuffer]",xj="[object DataView]",$j="[object Float32Array]",kj="[object Float64Array]",Ej="[object Int8Array]",Cj="[object Int16Array]",Sj="[object Int32Array]",Tj="[object Uint8Array]",Aj="[object Uint8ClampedArray]",Ij="[object Uint16Array]",Rj="[object Uint32Array]";function Oj(e,t,n){var i=e.constructor;switch(t){case wj:return lj(e);case hj:case pj:return new i(+e);case xj:return cj(e,n);case $j:case kj:case Ej:case Cj:case Sj:case Tj:case Aj:case Ij:case Rj:return fj(e,n);case gj:return new i;case mj:case yj:return new i(e);case vj:return uj(e);case bj:return new i;case _j:return dj(e)}}var Lj=Oj,Pj=qn,cg=Object.create,Mj=function(){function e(){}return function(t){if(!Pj(t))return{};if(cg)return cg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),Bj=Mj,jj=Bj,Uj=Gd,Nj=Dd;function Dj(e){return typeof e.constructor=="function"&&!Nj(e)?jj(Uj(e)):{}}var zj=Dj,Hj=Pl,Fj=Jr,qj="[object Map]";function Wj(e){return Fj(e)&&Hj(e)==qj}var Zj=Wj,Kj=Zj,Vj=Ud,ug=Nd,dg=ug&&ug.isMap,Gj=dg?Vj(dg):Kj,Qj=Gj,Yj=Pl,Jj=Jr,Xj="[object Set]";function eU(e){return Jj(e)&&Yj(e)==Xj}var tU=eU,nU=tU,rU=Ud,fg=Nd,hg=fg&&fg.isSet,iU=hg?rU(hg):nU,sU=iU,oU=Rd,aU=qM,lU=Kd,cU=sB,uU=xB,dU=$B,fU=EB,hU=AB,pU=zB,gU=pv,mU=Qd,vU=Pl,bU=GB,yU=Lj,_U=zj,wU=Vn,xU=Md,$U=Qj,kU=qn,EU=sU,CU=Ll,SU=Vd,TU=1,AU=2,IU=4,Rv="[object Arguments]",RU="[object Array]",OU="[object Boolean]",LU="[object Date]",PU="[object Error]",Ov="[object Function]",MU="[object GeneratorFunction]",BU="[object Map]",jU="[object Number]",Lv="[object Object]",UU="[object RegExp]",NU="[object Set]",DU="[object String]",zU="[object Symbol]",HU="[object WeakMap]",FU="[object ArrayBuffer]",qU="[object DataView]",WU="[object Float32Array]",ZU="[object Float64Array]",KU="[object Int8Array]",VU="[object Int16Array]",GU="[object Int32Array]",QU="[object Uint8Array]",YU="[object Uint8ClampedArray]",JU="[object Uint16Array]",XU="[object Uint32Array]",Ye={};Ye[Rv]=Ye[RU]=Ye[FU]=Ye[qU]=Ye[OU]=Ye[LU]=Ye[WU]=Ye[ZU]=Ye[KU]=Ye[VU]=Ye[GU]=Ye[BU]=Ye[jU]=Ye[Lv]=Ye[UU]=Ye[NU]=Ye[DU]=Ye[zU]=Ye[QU]=Ye[YU]=Ye[JU]=Ye[XU]=!0;Ye[PU]=Ye[Ov]=Ye[HU]=!1;function Ta(e,t,n,i,o,a){var l,u=t&TU,d=t&AU,h=t&IU;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!kU(e))return e;var p=wU(e);if(p){if(l=bU(e),!u)return fU(e,l)}else{var g=vU(e),v=g==Ov||g==MU;if(xU(e))return dU(e,u);if(g==Lv||g==Rv||v&&!o){if(l=d||v?{}:_U(e),!u)return d?pU(e,uU(l,e)):hU(e,cU(l,e))}else{if(!Ye[g])return o?e:{};l=yU(e,g,u)}}a||(a=new oU);var x=a.get(e);if(x)return x;a.set(e,l),EU(e)?e.forEach(function(E){l.add(Ta(E,t,n,E,e,a))}):$U(e)&&e.forEach(function(E,_){l.set(_,Ta(E,t,n,_,e,a))});var k=h?d?mU:gU:d?SU:CU,w=p?void 0:k(e);return aU(w||e,function(E,_){w&&(_=E,E=e[_]),lU(l,_,Ta(E,t,n,_,e,a))}),l}var eN=Ta;function tN(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var nN=tN;function rN(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var iN=rN,sN=Bl,oN=iN;function aN(e,t){return t.length<2?e:sN(e,oN(t,0,-1))}var lN=aN,cN=xs,uN=nN,dN=lN,fN=$s;function hN(e,t){return t=cN(t,e),e=dN(e,t),e==null||delete e[fN(uN(t))]}var pN=hN,gN=us,mN=Gd,vN=Jr,bN="[object Object]",yN=Function.prototype,_N=Object.prototype,Pv=yN.toString,wN=_N.hasOwnProperty,xN=Pv.call(Object);function $N(e){if(!vN(e)||gN(e)!=bN)return!1;var t=mN(e);if(t===null)return!0;var n=wN.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Pv.call(n)==xN}var kN=$N,EN=kN;function CN(e){return EN(e)?void 0:e}var SN=CN,pg=cs,TN=Pd,AN=Vn,gg=pg?pg.isConcatSpreadable:void 0;function IN(e){return AN(e)||TN(e)||!!(gg&&e&&e[gg])}var RN=IN,ON=Od,LN=RN;function Mv(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=LN),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?Mv(u,t-1,n,i,o):ON(o,u):i||(o[o.length]=u)}return o}var PN=Mv,MN=PN;function BN(e){var t=e==null?0:e.length;return t?MN(e,1):[]}var jN=BN;function UN(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var NN=UN,DN=NN,mg=Math.max;function zN(e,t,n){return t=mg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=mg(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),DN(e,this,u)}}var HN=zN;function FN(e){return function(){return e}}var qN=FN,WN=qN,vg=Tv,ZN=xv,KN=vg?function(e,t){return vg(e,"toString",{configurable:!0,enumerable:!1,value:WN(t),writable:!0})}:ZN,VN=KN,GN=800,QN=16,YN=Date.now;function JN(e){var t=0,n=0;return function(){var i=YN(),o=QN-(i-n);if(n=i,o>0){if(++t>=GN)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var XN=JN,eD=VN,tD=XN,nD=tD(eD),rD=nD,iD=jN,sD=HN,oD=rD;function aD(e){return oD(sD(e,void 0,iD),e+"")}var lD=aD,cD=Fd,uD=eN,dD=pN,fD=xs,hD=$o,pD=SN,gD=lD,mD=Qd,vD=1,bD=2,yD=4,_D=gD(function(e,t){var n={};if(e==null)return n;var i=!1;t=cD(t,function(a){return a=fD(a,e),i||(i=a.length>1),a}),hD(e,mD(e),n),i&&(n=uD(n,vD|bD|yD,pD));for(var o=t.length;o--;)dD(n,t[o]);return n}),wD=_D;const xD=ho(wD);var $D="Expected a function";function kD(e){if(typeof e!="function")throw new TypeError($D);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var ED=kD,CD=Kd,SD=xs,TD=Bd,bg=qn,AD=$s;function ID(e,t,n,i){if(!bg(e))return e;t=SD(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=AD(t[o]),h=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var p=u[d];h=i?i(p,d,u):void 0,h===void 0&&(h=bg(p)?p:TD(t[o+1])?[]:{})}CD(u,d,h),u=u[d]}return e}var RD=ID,OD=Bl,LD=RD,PD=xs;function MD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=OD(e,l);n(u,l)&&LD(a,PD(l,e),u)}return a}var BD=MD,jD=Fd,UD=qd,ND=BD,DD=Qd;function zD(e,t){if(e==null)return{};var n=jD(DD(e),function(i){return[i]});return t=UD(t),ND(e,n,function(i,o){return t(i,o[0])})}var HD=zD,FD=qd,qD=ED,WD=HD;function ZD(e,t){return WD(e,qD(FD(t)))}var KD=ZD;const VD=ho(KD),GD=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),QD=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),YD=j('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),JD=j('<div class="px-4 pt-4">読み込み中...'),XD=j('<div><span class="font-bold">その他の項目</span><div>'),ez=j('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),tz=j('<div class="h-24 shrink-0">'),nz=j('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),rz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",iz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",sz=new RegExp(`^${rz}$`),Bv=new RegExp(`^${iz}$`),oz=e=>sz.test(e),az=e=>Bv.test(e),lz=e=>{const t=Kn(),{config:n}=Pe(),[i,o]=we(""),[a,l]=we(""),[u,d]=we(""),[h,p]=we(""),[g,v]=we(""),[x,k]=we(""),[w,E]=we(""),[_,A]=we(""),{profile:R,invalidateProfile:T,query:B}=bs(()=>on([t()])(([X])=>({pubkey:X}))),{updateProfile:C}=Ol(),P=pi({mutationKey:["updateProfile"],mutationFn:(...X)=>C(...X).then(se=>Promise.allSettled(se.map(wr(1e4)))),onSuccess:X=>{const se=X.filter(D=>D.status==="fulfilled").length,q=X.length-se;se===X.length?window.alert("更新しました"):se>0?window.alert(`${q}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),T().then(()=>B.refetch()).catch(D=>console.error(D)),e.onClose()},onError:X=>{console.error("failed to delete",X)}}),U=()=>B.isLoading||P.isLoading,te=()=>U(),W=()=>xD(R(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Y=X=>{X.preventDefault();const se=t();if(se==null)return;const q=VD({picture:i(),banner:a(),name:u(),display_name:h(),about:g(),website:x(),nip05:w(),lud06:oz(_())?_():null,lud16:az(_())?_():null},D=>D==null||D.length===0);P.mutate({relayUrls:n().relayUrls,pubkey:se,profile:q,otherProperties:W()})},Z=X=>X.key==="Enter"&&X.preventDefault();return an(()=>{const X=R();X!=null&&(B.refetch().catch(se=>console.error(se)),Aa(()=>{o(se=>X.picture??se),l(se=>X.banner??se),d(se=>X.name??se),p(se=>X.display_name??se),v(se=>X.about??se),k(se=>X.website??se),E(se=>X.nip05??se),X.lud16!=null?A(X.lud16):X.lud06!=null&&A(X.lud06)}))}),$(xo,{closeButton:()=>$(Qu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const X=YD(),se=X.firstChild;return O(X,$(ue,{get when(){return a().length>0},get fallback(){return tz()},keyed:!0,get children(){const q=GD(),D=q.firstChild;return je(()=>pt(D,"src",a())),q}}),se),O(se,$(ue,{get when(){return i().length>0},get children(){const q=QD();return je(()=>pt(q,"src",i())),q}})),X})(),$(ue,{get when(){return U()},get children(){return JD()}}),(()=>{const X=ez(),se=X.firstChild,q=se.firstChild,D=q.firstChild,ne=D.nextSibling,G=q.nextSibling,ae=G.firstChild,de=ae.nextSibling,re=G.nextSibling,Q=re.firstChild,he=Q.nextSibling,xe=he.firstChild,Re=xe.nextSibling,Je=re.nextSibling,J=Je.firstChild,qe=J.nextSibling,nt=Je.nextSibling,Te=nt.firstChild,Xe=Te.nextSibling,rt=nt.nextSibling,At=rt.firstChild,Ve=At.nextSibling,Ht=rt.nextSibling,Gn=Ht.firstChild,_t=Gn.nextSibling,$r=Ht.nextSibling,Ei=$r.firstChild,Ln=Ei.nextSibling,mt=Ln.nextSibling,bn=$r.nextSibling,Pn=bn.firstChild,Ci=Pn.nextSibling;return se.addEventListener("submit",Y),ne.$$keydown=Z,ne.addEventListener("blur",ye=>o(ye.currentTarget.value)),de.$$keydown=Z,de.addEventListener("blur",ye=>l(ye.currentTarget.value)),Re.$$keydown=Z,Re.addEventListener("change",ye=>d(ye.currentTarget.value)),qe.$$keydown=Z,qe.addEventListener("change",ye=>p(ye.currentTarget.value)),Xe.addEventListener("change",ye=>v(ye.currentTarget.value)),Ve.$$keydown=Z,Ve.addEventListener("change",ye=>k(ye.currentTarget.value)),_t.$$keydown=Z,_t.addEventListener("change",ye=>E(ye.currentTarget.value)),mt.$$keydown=Z,mt.addEventListener("change",ye=>A(ye.currentTarget.value)),O(se,$(ue,{get when(){return Object.entries(W()).length>0},get children(){const ye=XD(),Qn=ye.firstChild,Gt=Qn.nextSibling;return O(Gt,$(Tt,{get each(){return Object.entries(W())},children:([Ft,kr])=>(()=>{const Yn=nz(),Jn=Yn.firstChild,Er=Jn.nextSibling;return O(Jn,Ft),O(Er,kr),Yn})()})),ye}}),bn),Ci.$$click=()=>e.onClose(),O(se,$(ue,{get when(){return P.isLoading},children:"保存中..."}),null),je(ye=>{const Qn=te(),Gt=te(),Ft=te(),kr=te(),Yn=te(),Jn=te(),Er=Bv.source,Si=te(),Ti=te(),Ai=P.isLoading;return Qn!==ye._v$&&(ne.disabled=ye._v$=Qn),Gt!==ye._v$2&&(de.disabled=ye._v$2=Gt),Ft!==ye._v$3&&(Re.disabled=ye._v$3=Ft),kr!==ye._v$4&&(qe.disabled=ye._v$4=kr),Yn!==ye._v$5&&(Xe.disabled=ye._v$5=Yn),Jn!==ye._v$6&&(Ve.disabled=ye._v$6=Jn),Er!==ye._v$7&&pt(_t,"pattern",ye._v$7=Er),Si!==ye._v$8&&(_t.disabled=ye._v$8=Si),Ti!==ye._v$9&&(mt.disabled=ye._v$9=Ti),Ai!==ye._v$10&&(Pn.disabled=ye._v$10=Ai),ye},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),je(()=>ne.value=i()),je(()=>de.value=a()),je(()=>Re.value=u()),je(()=>qe.value=h()),je(()=>Xe.value=g()),je(()=>Ve.value=x()),je(()=>_t.value=w()),je(()=>mt.value=_()),X})()]}})};ut(["keydown","click"]);const cz=()=>{const e=Kn(),{modalState:t,showProfile:n,closeModal:i}=Yr();return $(ue,{get when(){return t()},keyed:!0,children:o=>$(Sn,{get children(){return[$(ze,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>$(HM,{pubkey:a,onClose:i})}),$(ze,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return $(lz,{onClose:()=>on([e()])(([a])=>{n(a)})})}}),$(ze,{get when(){return o.type==="AddColumn"},get children(){return $(sM,{onClose:i})}}),$(ze,{get when(){return o.type==="About"},get children(){return $(rM,{onClose:i})}})]}})})},uz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),dz=(e={})=>(()=>{const t=uz();return Ze(t,e,!0,!0),t})(),fz=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),yg=(e={})=>(()=>{const t=fz();return Ze(t,e,!0,!0),t})(),hz=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),pz=(e={})=>(()=>{const t=hz();return Ze(t,e,!0,!0),t})(),gz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),mz=(e={})=>(()=>{const t=gz();return Ze(t,e,!0,!0),t})(),vz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),bz=(e={})=>(()=>{const t=vz();return Ze(t,e,!0,!0),t})(),yz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),_z=(e={})=>(()=>{const t=yz();return Ze(t,e,!0,!0),t})(),_g=at.string().length(64).regex(/^[0-9a-f]{64}$/),Zu=at.string().regex(/^\w+$/),wz=at.object({shortcode:Zu,url:at.string().url(),keywords:at.optional(at.array(Zu))}),xz=at.object({manifest:at.literal("emojipack_v1"),name:at.string(),emojis:at.array(wz),description:at.optional(at.string()),author:at.optional(_g),publisher:at.optional(_g)}).refine(e=>$v(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),jv=at.record(Zu,at.string().url());xz.or(jv);const $z=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),kz=j('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),Ez=j('<div class="py-2"><h3 class="font-bold">リレー</h3><p class="py-1"> 個のリレーが設定されています</p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Cz=j('<div class="py-2"><h3 class="pb-1 font-bold">インポート</h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">拡張機能からインポート'),Ku=j('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Sz=j('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Tz=j('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Az=j('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Iz=j('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),Rz=j('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),Oz=j('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Lz=j('<div class="py-2"><h3 class="font-bold">絵文字のインポート</h3><p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">インポート'),Pz=j('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),Mz=j('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Bz=j('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),jz=j('<div class="p-4">'),Uz=j('<h2 class="flex-1 text-center text-lg font-bold">設定'),Nz=j('<ul class="flex flex-col">'),Dz=j('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),zz=j('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Uv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Hz=Uv("https?"),Fz=Uv("wss?"),qz=()=>{const e=Kn(),{showProfile:t,showProfileEdit:n}=Yr();return(()=>{const i=kz(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;return l.$$click=()=>on([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},Wz=()=>{const{config:e,addRelay:t,removeRelay:n}=Pe(),[i,o]=we(""),a=u=>{u.preventDefault(),i().length!==0&&(t(i()),o(""))},l=async()=>{if(window.nostr==null)return;const u=Object.entries(await window.nostr?.getRelays?.()??[]),d=u.map(([v])=>v).join(`
`);if(u.length===0){window.alert("リレーが設定されていません");return}if(!window.confirm(`これらのリレーをインポートしますか:
${d}`))return;const h=e().relayUrls.length;Aa(()=>{u.forEach(([v])=>{t(v)})});const g=e().relayUrls.length-h;window.alert(`${g} 個のリレーをインポートしました`)};return[(()=>{const u=Ez(),d=u.firstChild,h=d.nextSibling,p=h.firstChild,g=h.nextSibling,v=g.nextSibling,x=v.firstChild;return O(h,()=>e().relayUrls.length,p),O(g,$(Tt,{get each(){return e().relayUrls},children:k=>(()=>{const w=Ku(),E=w.firstChild,_=E.nextSibling;return O(E,k),_.$$click=()=>n(k),O(_,$(as,{})),w})()})),v.addEventListener("submit",a),x.addEventListener("change",k=>o(k.currentTarget.value)),pt(x,"pattern",Fz),je(()=>x.value=i()),u})(),(()=>{const u=Cz(),d=u.firstChild,h=d.nextSibling;return h.$$click=()=>{l().catch(p=>{console.error("failed to import relays",p),window.alert("インポートに失敗しました")})},u})()]},Zz=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],Kz=()=>{const{config:e,setConfig:t}=Pe(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=Sz(),o=i.firstChild,a=o.nextSibling;return O(a,$(Tt,{each:Zz,children:({id:l,name:u,example:d})=>(()=>{const h=Tz(),p=h.firstChild,g=p.nextSibling;return p.$$click=()=>n(l),O(p,u),O(g,d),je(v=>{const x=e().dateFormat===l,k=e().dateFormat===l,w=e().dateFormat!==l,E=e().dateFormat!==l;return x!==v._v$&&p.classList.toggle("bg-rose-300",v._v$=x),k!==v._v$2&&p.classList.toggle("text-white",v._v$2=k),w!==v._v$3&&p.classList.toggle("bg-white",v._v$3=w),E!==v._v$4&&p.classList.toggle("text-rose-300",v._v$4=E),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),h})()})),i})()},Zs=e=>(()=>{const t=Az();return t.$$click=n=>e.onClick(n),je(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&pt(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),Vz=()=>{const{config:e,setConfig:t}=Pe(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=Iz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,O(u,$(Zs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),O(d,$(Zs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},Gz=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=Pe(),[i,o]=we(""),[a,l]=we(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&(t({shortcode:i(),url:a()}),o(""),l(""))};return(()=>{const d=Rz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,x=v.firstChild,k=x.nextSibling,w=v.nextSibling,E=w.firstChild,_=E.nextSibling;return O(p,$(Tt,{get each(){return Object.values(e().customEmojis)},children:({shortcode:A,url:R})=>(()=>{const T=Oz(),B=T.firstChild,C=B.nextSibling,P=C.nextSibling;return pt(B,"src",R),pt(B,"alt",A),O(C,A),P.$$click=()=>n(A),O(P,$(as,{})),T})()})),g.addEventListener("submit",u),k.addEventListener("change",A=>o(A.currentTarget.value)),_.addEventListener("change",A=>l(A.currentTarget.value)),pt(_,"pattern",Hz),je(()=>k.value=i()),je(()=>_.value=a()),d})()},Qz=()=>{const{saveEmojis:e}=Pe(),[t,n]=we(""),i=o=>{if(o.preventDefault(),t().length!==0)try{const a=jv.parse(JSON.parse(t())),l=$z(a);e(l),n("")}catch(a){const l=a instanceof Error?`:${a.message}`:"";window.alert(`JSONの読み込みに失敗しました${l}`)}};return(()=>{const o=Lz(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling,d=u.firstChild;return u.addEventListener("submit",i),d.addEventListener("change",h=>n(h.currentTarget.value)),je(()=>d.value=t()),o})()},Yz=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=Pe(),[o,a]=we(""),l=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=Pz(),d=u.firstChild,h=d.nextSibling;return O(h,$(Tt,{get each(){return e().mutedPubkeys},children:p=>(()=>{const g=Ku(),v=g.firstChild,x=v.nextSibling;return O(v,$(Tl,{pubkey:p})),x.$$click=()=>t(p),O(x,$(as,{})),g})()})),u})(),(()=>{const u=Mz(),d=u.firstChild,h=d.nextSibling,p=h.nextSibling,g=p.firstChild;return O(h,$(Tt,{get each(){return e().mutedKeywords},children:v=>(()=>{const x=Ku(),k=x.firstChild,w=k.nextSibling;return O(k,v),w.$$click=()=>i(v),O(w,$(as,{})),x})()})),p.addEventListener("submit",l),g.addEventListener("change",v=>a(v.currentTarget.value)),je(()=>g.value=o()),u})()]},Jz=()=>{const{config:e,setConfig:t}=Pe(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=Bz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild;d.firstChild;const h=d.nextSibling;h.firstChild;const p=h.nextSibling;return p.firstChild,O(d,$(Zs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),O(h,$(Zs,{get value(){return e().showImage},onClick:()=>i()}),null),O(p,$(Zs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},Xz=e=>{const[t,n]=we(null),i=[{name:()=>"プロフィール",icon:()=>$(Wd,{}),render:()=>$(qz,{})},{name:()=>"リレー",icon:()=>$(_z,{}),render:()=>$(Wz,{})},{name:()=>"表示",icon:()=>$(bz,{}),render:()=>[$(Kz,{}),$(Vz,{}),$(Jz,{})]},{name:()=>"カスタム絵文字",icon:()=>$(Xm,{}),render:()=>[$(Gz,{}),$(Qz,{})]},{name:()=>"ミュート",icon:()=>$(mz,{}),render:()=>$(Yz,{})}],o=()=>{const a=t();return a==null?null:i[a]};return $(xo,{get onClose(){return e.onClose},get children(){const a=jz();return O(a,$(ue,{get when(){return o()},get fallback(){return[Uz(),(()=>{const l=Nz();return O(l,$(Tt,{each:i,children:(u,d)=>(()=>{const h=Dz(),p=h.firstChild,g=p.firstChild;return p.$$click=()=>n(d),O(g,()=>u.icon()),O(p,()=>u.name(),null),h})()})),l})()]},keyed:!0,children:l=>(()=>{const u=zz(),d=u.firstChild,h=d.nextSibling;return d.$$click=()=>n(null),O(d,$(Qu,{})),O(h,()=>l.render()),u})()})),a}})};ut(["click"]);const eH=j('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),tH=j('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),nH=j('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),rH=()=>{let e,t;const{saveColumn:n}=Pe(),i=wo(),[o,a]=we(""),l=u=>{u.preventDefault(),n($d({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return $(Sd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=tH();return O(u,$(yg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=eH(),d=u.firstChild,h=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?br(p,d):t=d,O(h,$(yg,{})),je(()=>d.value=o()),u}})},iH=()=>{let e;const{showAddColumn:t,showAbout:n}=Yr(),{config:i}=Pe(),[o,a]=we(!1),[l,u]=we(!1),d=()=>{e?.focus(),e?.click()},h=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return Nu(()=>({commandType:"openPostForm",handler:()=>{h(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=nH(),x=v.firstChild,k=x.firstChild,w=k.firstChild,E=k.nextSibling,_=E.nextSibling,A=_.firstChild,R=A.nextSibling,T=R.nextSibling,B=T.firstChild,C=x.nextSibling;return w.$$click=()=>g(),O(w,$(pz,{})),O(k,$(rH,{}),null),A.$$click=()=>t(),O(A,$($m,{})),R.$$click=()=>u(P=>!P),O(R,$(dz,{})),T.$$click=()=>n(),O(C,$(ev,{textAreaRef:P=>{e=P},onClose:p})),O(v,$(ue,{get when(){return l()},get children(){return $(Xz,{onClose:()=>u(!1)})}}),null),je(P=>{const U=Vu("images/rabbit_app_256.png"),te=!!(o()||i().keepOpenPostForm),W=!(o()||i().keepOpenPostForm);return U!==P._v$&&pt(B,"src",P._v$=U),te!==P._v$2&&C.classList.toggle("static",P._v$2=te),W!==P._v$3&&C.classList.toggle("hidden",P._v$3=W),P},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};ut(["click"]);var sH=Rn,oH=function(){return sH.Date.now()},aH=oH,lH=/\s/;function cH(e){for(var t=e.length;t--&&lH.test(e.charAt(t)););return t}var uH=cH,dH=uH,fH=/^\s+/;function hH(e){return e&&e.slice(0,dH(e)+1).replace(fH,"")}var pH=hH,gH=pH,wg=qn,mH=Ml,xg=0/0,vH=/^[-+]0x[0-9a-f]+$/i,bH=/^0b[01]+$/i,yH=/^0o[0-7]+$/i,_H=parseInt;function wH(e){if(typeof e=="number")return e;if(mH(e))return xg;if(wg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=wg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=gH(e);var n=bH.test(e);return n||yH.test(e)?_H(e.slice(2),n?2:8):vH.test(e)?xg:+e}var xH=wH,$H=qn,mu=aH,$g=xH,kH="Expected a function",EH=Math.max,CH=Math.min;function SH(e,t,n){var i,o,a,l,u,d,h=0,p=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(kH);t=$g(t)||0,$H(n)&&(p=!!n.leading,g="maxWait"in n,a=g?EH($g(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function x(C){var P=i,U=o;return i=o=void 0,h=C,l=e.apply(U,P),l}function k(C){return h=C,u=setTimeout(_,t),p?x(C):l}function w(C){var P=C-d,U=C-h,te=t-P;return g?CH(te,a-U):te}function E(C){var P=C-d,U=C-h;return d===void 0||P>=t||P<0||g&&U>=a}function _(){var C=mu();if(E(C))return A(C);u=setTimeout(_,w(C))}function A(C){return u=void 0,v&&i?x(C):(i=o=void 0,l)}function R(){u!==void 0&&clearTimeout(u),h=0,i=d=o=u=void 0}function T(){return u===void 0?l:A(mu())}function B(){var C=mu(),P=E(C);if(i=arguments,o=this,d=C,P){if(u===void 0)return k(d);if(g)return clearTimeout(u),u=setTimeout(_,t),x(d)}return u===void 0&&(u=setTimeout(_,t)),l}return B.cancel=R,B.flush=T,B}var TH=SH,AH=TH,IH=qn,RH="Expected a function";function OH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(RH);return IH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),AH(e,t,{leading:i,maxWait:t,trailing:o})}var LH=OH;const PH=ho(LH),MH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],BH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},jH=({shortcuts:e=MH,onShortcut:t})=>{const n=BH(e);an(()=>{const i=PH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),vr(()=>{window.removeEventListener("keydown",i)})})},UH=()=>{const e=wo();jH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},NH=j('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),WH=()=>{UH();const e=Rx(),{persistStatus:t}=Mx(),n=Cl(),{config:i,initializeColumns:o}=Pe(),a=Kn();return Un(()=>{i().relayUrls.map(async l=>{try{(await n().ensureRelay(l)).on("notice",d=>{console.error(`NOTICE: ${l}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),Un(()=>{const l=a();l!=null&&o({pubkey:l})}),an(()=>{t().loggedIn||e("/hello")}),Ox(l=>{console.error("uncaught error: ",l)}),(()=>{const l=NH();return O(l,$(iH,{}),null),O(l,$(GP,{}),null),O(l,$(cz,{}),null),l})()};export{WH as default};
//# sourceMappingURL=Home-95ba4334.js.map
