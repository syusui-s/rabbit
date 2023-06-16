import{S as kg,s as vu,n as yx,i as Tp,a as Ap,t as _x,f as wx,c as xx,r as Ip,b as $x,d as Eg,g as kx,u as _i,e as Cg,h as Aa,o as vr,j as an,k as Ks,l as rl,p as Rp,m as Ze,q as j,v as at,w as _e,x as O,y as _,z as ue,A as De,B as Ex,M as He,C as Cx,D as Sn,E as ho,F as Un,G as Sx,H as Me,I as Tx,J as br,K as It,L as Sg,N as ht,O as Ax,P as Ix,Q as qs,R as Tg,T as Rx,U as Ox}from"./index-67530d66.js";import{c as Yi,u as qi,a as Lx,b as Px,r as Ku,d as Mx}from"./resolveAsset-3e8e97af.js";class Bx extends kg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Op(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),vu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Lp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(yx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Tp||this.currentResult.isStale||!Ap(this.options.staleTime))return;const n=_x(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Tp||this.options.enabled===!1||!Ap(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||wx.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,h=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:w,errorUpdatedAt:k,fetchStatus:x,status:E}=g,$=!1,A=!1,R;if(n._optimisticResults){const U=this.hasListeners(),te=!U&&Op(t,n),W=U&&Lp(t,i,n,o);(te||W)&&(x=xx(t.options.networkMode)?"fetching":"paused",v||(E="loading")),n._optimisticResults==="isRestoring"&&(x="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&E!=="error")R=p.data,v=p.dataUpdatedAt,E=p.status,$=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)R=this.selectResult;else try{this.selectFn=n.select,R=n.select(g.data),R=Ip(a?.data,R,n),this.selectResult=R,this.selectError=null}catch(U){this.selectError=U}else R=g.data;if(typeof n.placeholderData<"u"&&typeof R>"u"&&E==="loading"){let U;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)U=a.data;else if(U=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof U<"u")try{U=n.select(U),this.selectError=null}catch(te){this.selectError=te}typeof U<"u"&&(E="success",R=Ip(a?.data,U,n),A=!0)}this.selectError&&(w=this.selectError,R=this.selectResult,k=Date.now(),E="error");const T=x==="fetching",M=E==="loading",C=E==="error";return{status:E,fetchStatus:x,isLoading:M,isSuccess:E==="success",isError:C,isInitialLoading:M&&T,data:R,dataUpdatedAt:v,error:w,errorUpdatedAt:k,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:T,isRefetching:T&&!M,isLoadingError:C&&g.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:A,isPreviousData:$,isRefetchError:C&&g.dataUpdatedAt!==0,isStale:Gu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,vu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==n[h]&&u.has(h)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!$x(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Eg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,h;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(h=this.options).onSettled)==null||d.call(h,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function jx(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Op(e,t){return jx(e,t)||e.state.dataUpdatedAt>0&&bu(e,t,t.refetchOnMount)}function bu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Gu(e,t)}return!1}function Lp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Gu(e,n)}function Gu(e,t){return e.isStaleByTime(t.staleTime)}class Ux extends kg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),vu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:kx(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Eg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,h;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(h=this.mutateOptions).onSettled)==null||d.call(h,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function Nx(e){return typeof e=="function"}function Pp(e,t,n){if(!Nx(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Ag(e,t){return typeof e=="function"?e(...t):!!e}function Dx(e,t){const n=_i({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=Yi(a.getOptimisticResult(o)),[d,{refetch:h,mutate:p}]=Cg(()=>new Promise(k=>{l.isFetching&&l.isLoading||(qi(l.data)===i&&k(void 0),k(qi(l.data)))}));Aa(()=>{p(()=>qi(l.data)),h()});let g=[];const v=a.subscribe(k=>{g.push(()=>{Aa(()=>{const x={...qi(k)};x.data===void 0&&(x.data=i),u(qi(x)),p(()=>qi(k.data)),h()})}),queueMicrotask(()=>{const x=g.pop();x&&x(),g=[]})});vr(()=>v()),an(()=>{a.setOptions(o,{listeners:!1})}),Ks(()=>{const k=n.defaultQueryOptions(e);a.setOptions(k)}),Ks(rl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Ag(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const w={get(k,x){return x==="data"?d():Reflect.get(k,x)}};return new Proxy(l,w)}function wi(e,t,n){const[i,o]=Yi(Pp(e,t,n));return Ks(()=>{const a=Pp(e,t,n);o(a)}),Dx(i,Bx)}function pi(e,t,n){const[i,o]=Yi(Rp(e,t,n)),a=_i({context:i.context}),l=new Ux(a,i),u=(g,v)=>{l.mutate(g,v).catch(zx)},[d,h]=Yi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Ks(()=>{const g=Rp(e,t,n);o(g),l.setOptions(g)}),Ks(rl(()=>d.status,()=>{if(d.isError&&Ag(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{h({...g,mutate:u,mutateAsync:g.mutate})});return vr(p),d}function zx(){}const Hx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),Fx=(e={})=>(()=>{const t=Hx();return Ze(t,e,!0,!0),t})(),qx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),Ig=(e={})=>(()=>{const t=qx();return Ze(t,e,!0,!0),t})(),Wx=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),Zx=j('<span class="inline-block h-4 w-4 text-gray-700">'),ls=e=>{const[t,n]=_e(!1),i=()=>n(o=>!o);return(()=>{const o=Wx(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=l.nextSibling;return O(l,_(ue,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const p=Zx();return O(p,h),p})()}),u),O(u,()=>e.name),d.$$click=()=>i(),O(d,_(Ig,{})),O(o,_(ue,{get when(){return t()},get children(){return e.settings()}}),null),o})()};at(["click"]);const Vx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Qu=(e={})=>(()=>{const t=Vx();return Ze(t,e,!0,!0),t})();var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function po(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function il(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Kx=typeof dr=="object"&&dr&&dr.Object===Object&&dr,Rg=Kx,Gx=Rg,Qx=typeof self=="object"&&self&&self.Object===Object&&self,Yx=Gx||Qx||Function("return this")(),Rn=Yx,Jx=Rn,Xx=Jx.Symbol,cs=Xx,Mp=cs,Og=Object.prototype,e5=Og.hasOwnProperty,t5=Og.toString,Ds=Mp?Mp.toStringTag:void 0;function n5(e){var t=e5.call(e,Ds),n=e[Ds];try{e[Ds]=void 0;var i=!0}catch{}var o=t5.call(e);return i&&(t?e[Ds]=n:delete e[Ds]),o}var r5=n5,i5=Object.prototype,s5=i5.toString;function o5(e){return s5.call(e)}var a5=o5,Bp=cs,l5=r5,c5=a5,u5="[object Null]",d5="[object Undefined]",jp=Bp?Bp.toStringTag:void 0;function f5(e){return e==null?e===void 0?d5:u5:jp&&jp in Object(e)?l5(e):c5(e)}var us=f5;function h5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var qn=h5,p5=us,g5=qn,m5="[object AsyncFunction]",v5="[object Function]",b5="[object GeneratorFunction]",y5="[object Proxy]";function _5(e){if(!g5(e))return!1;var t=p5(e);return t==v5||t==b5||t==m5||t==y5}var Lg=_5,w5=Rn,x5=w5["__core-js_shared__"],$5=x5,Yc=$5,Up=function(){var e=/[^.]+$/.exec(Yc&&Yc.keys&&Yc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function k5(e){return!!Up&&Up in e}var E5=k5,C5=Function.prototype,S5=C5.toString;function T5(e){if(e!=null){try{return S5.call(e)}catch{}try{return e+""}catch{}}return""}var Pg=T5,A5=Lg,I5=E5,R5=qn,O5=Pg,L5=/[\\^$.*+?()[\]{}|]/g,P5=/^\[object .+?Constructor\]$/,M5=Function.prototype,B5=Object.prototype,j5=M5.toString,U5=B5.hasOwnProperty,N5=RegExp("^"+j5.call(U5).replace(L5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function D5(e){if(!R5(e)||I5(e))return!1;var t=A5(e)?N5:P5;return t.test(O5(e))}var z5=D5;function H5(e,t){return e?.[t]}var F5=H5,q5=z5,W5=F5;function Z5(e,t){var n=W5(e,t);return q5(n)?n:void 0}var xi=Z5,V5=xi,K5=V5(Object,"create"),sl=K5,Np=sl;function G5(){this.__data__=Np?Np(null):{},this.size=0}var Q5=G5;function Y5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var J5=Y5,X5=sl,e$="__lodash_hash_undefined__",t$=Object.prototype,n$=t$.hasOwnProperty;function r$(e){var t=this.__data__;if(X5){var n=t[e];return n===e$?void 0:n}return n$.call(t,e)?t[e]:void 0}var i$=r$,s$=sl,o$=Object.prototype,a$=o$.hasOwnProperty;function l$(e){var t=this.__data__;return s$?t[e]!==void 0:a$.call(t,e)}var c$=l$,u$=sl,d$="__lodash_hash_undefined__";function f$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=u$&&t===void 0?d$:t,this}var h$=f$,p$=Q5,g$=J5,m$=i$,v$=c$,b$=h$;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=p$;ds.prototype.delete=g$;ds.prototype.get=m$;ds.prototype.has=v$;ds.prototype.set=b$;var y$=ds;function _$(){this.__data__=[],this.size=0}var w$=_$;function x$(e,t){return e===t||e!==e&&t!==t}var Yu=x$,$$=Yu;function k$(e,t){for(var n=e.length;n--;)if($$(e[n][0],t))return n;return-1}var ol=k$,E$=ol,C$=Array.prototype,S$=C$.splice;function T$(e){var t=this.__data__,n=E$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():S$.call(t,n,1),--this.size,!0}var A$=T$,I$=ol;function R$(e){var t=this.__data__,n=I$(t,e);return n<0?void 0:t[n][1]}var O$=R$,L$=ol;function P$(e){return L$(this.__data__,e)>-1}var M$=P$,B$=ol;function j$(e,t){var n=this.__data__,i=B$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var U$=j$,N$=w$,D$=A$,z$=O$,H$=M$,F$=U$;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=N$;fs.prototype.delete=D$;fs.prototype.get=z$;fs.prototype.has=H$;fs.prototype.set=F$;var al=fs,q$=xi,W$=Rn,Z$=q$(W$,"Map"),Ju=Z$,Dp=y$,V$=al,K$=Ju;function G$(){this.size=0,this.__data__={hash:new Dp,map:new(K$||V$),string:new Dp}}var Q$=G$;function Y$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var J$=Y$,X$=J$;function e8(e,t){var n=e.__data__;return X$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ll=e8,t8=ll;function n8(e){var t=t8(this,e).delete(e);return this.size-=t?1:0,t}var r8=n8,i8=ll;function s8(e){return i8(this,e).get(e)}var o8=s8,a8=ll;function l8(e){return a8(this,e).has(e)}var c8=l8,u8=ll;function d8(e,t){var n=u8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var f8=d8,h8=Q$,p8=r8,g8=o8,m8=c8,v8=f8;function hs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}hs.prototype.clear=h8;hs.prototype.delete=p8;hs.prototype.get=g8;hs.prototype.has=m8;hs.prototype.set=v8;var Xu=hs,b8="__lodash_hash_undefined__";function y8(e){return this.__data__.set(e,b8),this}var _8=y8;function w8(e){return this.__data__.has(e)}var x8=w8,$8=Xu,k8=_8,E8=x8;function Ia(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new $8;++t<n;)this.add(e[t])}Ia.prototype.add=Ia.prototype.push=k8;Ia.prototype.has=E8;var Mg=Ia;function C8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var S8=C8;function T8(e){return e!==e}var A8=T8;function I8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var R8=I8,O8=S8,L8=A8,P8=R8;function M8(e,t,n){return t===t?P8(e,t,n):O8(e,L8,n)}var B8=M8,j8=B8;function U8(e,t){var n=e==null?0:e.length;return!!n&&j8(e,t,0)>-1}var N8=U8;function D8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var z8=D8;function H8(e,t){return e.has(t)}var Bg=H8,F8=xi,q8=Rn,W8=F8(q8,"Set"),jg=W8;function Z8(){}var V8=Z8;function K8(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var ed=K8,Jc=jg,G8=V8,Q8=ed,Y8=1/0,J8=Jc&&1/Q8(new Jc([,-0]))[1]==Y8?function(e){return new Jc(e)}:G8,X8=J8,e6=Mg,t6=N8,n6=z8,r6=Bg,i6=X8,s6=ed,o6=200;function a6(e,t,n){var i=-1,o=t6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=n6;else if(a>=o6){var h=t?null:i6(e);if(h)return s6(h);l=!1,o=r6,d=new e6}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var Ug=a6,l6=Ug;function c6(e){return e&&e.length?l6(e):[]}var u6=c6;const pr=po(u6),d6=j('<div class="block shrink-0 overflow-hidden border-b p-1">'),Ws=e=>(()=>{const t=d6();return O(t,()=>e.children),t})();function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function f6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Ng(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function h6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function p6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function g6(e,t){Ng(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const di={number:yu,bool:f6,bytes:Ng,hash:h6,exists:p6,output:g6},$a=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,m6=Object.freeze(Object.defineProperty({__proto__:null,crypto:$a},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const v6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),b6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),$n=(e,t)=>e<<32-t|e>>>t,Dg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Dg)throw new Error("Non little-endian hardware is not supported");const y6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function nn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=y6[e[n]];return t}function Wr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const zg=async()=>{};async function _6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await zg(),i+=a)}}function td(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function go(e){if(typeof e=="string"&&(e=td(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class nd{clone(){return this._cloneInto()}}const w6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function x6(e,t){if(t!==void 0&&(typeof t!="object"||!w6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function cl(e){const t=i=>e().update(go(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function $6(e){const t=(i,o)=>e(o).update(go(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function ul(e=32){if($a&&typeof $a.getRandomValues=="function")return $a.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const k6=Object.freeze(Object.defineProperty({__proto__:null,Hash:nd,asyncLoop:_6,bytesToHex:nn,checkOpts:x6,concatBytes:fi,createView:gi,hexToBytes:Wr,isLE:Dg,nextTick:zg,randomBytes:ul,rotr:$n,toBytes:go,u32:b6,u8:v6,utf8ToBytes:td,wrapConstructor:cl,wrapConstructorWithOpts:$6},Symbol.toStringTag,{value:"Module"}));function E6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}let Hg=class extends nd{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){di.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=go(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=gi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){di.exists(this),di.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;E6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const C6=(e,t,n)=>e&t^~e&n,S6=(e,t,n)=>e&t^e&n^t&n,T6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Mr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Br=new Uint32Array(64);class Fg extends Hg{constructor(){super(64,32,8,!1),this.A=Mr[0]|0,this.B=Mr[1]|0,this.C=Mr[2]|0,this.D=Mr[3]|0,this.E=Mr[4]|0,this.F=Mr[5]|0,this.G=Mr[6]|0,this.H=Mr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Br[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=Br[g-15],w=Br[g-2],k=$n(v,7)^$n(v,18)^v>>>3,x=$n(w,17)^$n(w,19)^w>>>10;Br[g]=x+Br[g-7]+k+Br[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:h,H:p}=this;for(let g=0;g<64;g++){const v=$n(u,6)^$n(u,11)^$n(u,25),w=p+v+C6(u,d,h)+T6[g]+Br[g]|0,x=($n(i,2)^$n(i,13)^$n(i,22))+S6(i,o,a)|0;p=h,h=d,d=u,u=l+w|0,l=a,a=o,o=i,i=w+x|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,h=h+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,h,p)}roundClean(){Br.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class A6 extends Fg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Dn=cl(()=>new Fg),I6=cl(()=>new A6),R6=Object.freeze(Object.defineProperty({__proto__:null,sha224:I6,sha256:Dn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const qg=BigInt(0),dl=BigInt(1),O6=BigInt(2),fl=e=>e instanceof Uint8Array,L6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ji(e){if(!fl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=L6[e[n]];return t}function Wg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function rd(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function Xi(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Dt(e){return rd(Ji(e))}function id(e){if(!fl(e))throw new Error("Uint8Array expected");return rd(Ji(Uint8Array.from(e).reverse()))}const Fr=(e,t)=>Xi(e.toString(16).padStart(t*2,"0")),Zg=(e,t)=>Fr(e,t).reverse(),P6=e=>Xi(Wg(e));function At(e,t,n){let i;if(typeof t=="string")try{i=Xi(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(fl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function rn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!fl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function M6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function hl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function B6(e){let t;for(t=0;e>qg;e>>=dl,t+=1);return t}const j6=(e,t)=>e>>BigInt(t)&dl,U6=(e,t,n)=>e|(n?dl:qg)<<BigInt(t),sd=e=>(O6<<BigInt(e-1))-dl,Xc=e=>new Uint8Array(e),zp=e=>Uint8Array.from(e);function Vg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Xc(e),o=Xc(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Xc())=>{o=u(zp([0]),g),i=u(),g.length!==0&&(o=u(zp([1]),g),i=u())},h=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const w=i.slice();v.push(w),g+=i.length}return rn(...v)};return(g,v)=>{l(),d(g);let w;for(;!(w=v(h()));)d();return l(),w}}const N6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function ps(e,t,n={}){const i=(o,a,l)=>{const u=N6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const D6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:j6,bitLen:B6,bitMask:sd,bitSet:U6,bytesToHex:Ji,bytesToNumberBE:Dt,bytesToNumberLE:id,concatBytes:rn,createHmacDrbg:Vg,ensureBytes:At,equalBytes:M6,hexToBytes:Xi,hexToNumber:rd,numberToBytesBE:Fr,numberToBytesLE:Zg,numberToHexUnpadded:Wg,numberToVarBytesBE:P6,utf8ToBytes:hl,validateObject:ps},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $t=BigInt(0),ft=BigInt(1),ci=BigInt(2),z6=BigInt(3),_u=BigInt(4),Hp=BigInt(5),Fp=BigInt(8);BigInt(9);BigInt(16);function bt(e,t){const n=e%t;return n>=$t?n:t+n}function H6(e,t,n){if(n<=$t||t<$t)throw new Error("Expected power/modulo > 0");if(n===ft)return $t;let i=ft;for(;t>$t;)t&ft&&(i=i*e%n),e=e*e%n,t>>=ft;return i}function mn(e,t,n){let i=e;for(;t-- >$t;)i*=i,i%=n;return i}function wu(e,t){if(e===$t||t<=$t)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=bt(e,t),i=t,o=$t,a=ft;for(;n!==$t;){const u=i/n,d=i%n,h=o-a*u;i=n,n=d,o=a,a=h}if(i!==ft)throw new Error("invert: does not exist");return bt(o,t)}function F6(e){const t=(e-ft)/ci;let n,i,o;for(n=e-ft,i=0;n%ci===$t;n/=ci,i++);for(o=ci;o<e&&H6(o,t,e)!==e-ft;o++);if(i===1){const l=(e+ft)/_u;return function(d,h){const p=d.pow(h,l);if(!d.eql(d.sqr(p),h))throw new Error("Cannot find square root");return p}}const a=(n+ft)/ci;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let h=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let w=1;for(let x=u.sqr(v);w<h&&!u.eql(x,u.ONE);w++)x=u.sqr(x);const k=u.pow(p,ft<<BigInt(h-w-1));p=u.sqr(k),g=u.mul(g,k),v=u.mul(v,p),h=w}return g}}function q6(e){if(e%_u===z6){const t=(e+ft)/_u;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Fp===Hp){const t=(e-Hp)/Fp;return function(i,o){const a=i.mul(o,ci),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ci),l),h=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(h),o))throw new Error("Cannot find square root");return h}}return F6(e)}const W6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Kg(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=W6.reduce((i,o)=>(i[o]="function",i),t);return ps(e,n)}function Z6(e,t,n){if(n<$t)throw new Error("Expected power > 0");if(n===$t)return e.ONE;if(n===ft)return t;let i=e.ONE,o=t;for(;n>$t;)n&ft&&(i=e.mul(i,o)),o=e.sqr(o),n>>=ft;return i}function V6(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function od(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function K6(e,t,n=!1,i={}){if(e<=$t)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=od(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=q6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:sd(o),ZERO:$t,ONE:ft,create:d=>bt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return $t<=d&&d<e},is0:d=>d===$t,isOdd:d=>(d&ft)===ft,neg:d=>bt(-d,e),eql:(d,h)=>d===h,sqr:d=>bt(d*d,e),add:(d,h)=>bt(d+h,e),sub:(d,h)=>bt(d-h,e),mul:(d,h)=>bt(d*h,e),pow:(d,h)=>Z6(u,d,h),div:(d,h)=>bt(d*wu(h,e),e),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>wu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>V6(u,d),cmov:(d,h,p)=>p?h:d,toBytes:d=>n?Zg(d,a):Fr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?id(d):Dt(d)}});return Object.freeze(u)}function G6(e,t,n=!1){e=At("privateHash",e);const i=e.length,o=od(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?id(e):Dt(e);return bt(a,t-ft)+ft}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Q6=BigInt(0),eu=BigInt(1);function Y6(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>Q6;)a&eu&&(l=l.add(u)),u=u.double(),a>>=eu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let h=o,p=h;for(let g=0;g<l;g++){p=h,d.push(p);for(let v=1;v<u;v++)p=p.add(h),d.push(p);h=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let h=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),v=2**o,w=BigInt(o);for(let k=0;k<u;k++){const x=k*d;let E=Number(l&g);l>>=w,E>d&&(E-=v,l+=eu);const $=x,A=x+Math.abs(E)-1,R=k%2!==0,T=E<0;E===0?p=p.add(n(R,a[$])):h=h.add(n(T,a[A]))}return{p:h,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let h=a.get(o);return h||(h=this.precomputeWindow(o,d),d!==1&&a.set(o,u(h))),this.wNAF(d,h,l)}}}function Gg(e){return Kg(e.Fp),ps(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...od(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function J6(e){const t=Gg(e);ps(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:X6,hexToBytes:e7}=D6,hi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=hi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:X6(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=hi,n=typeof e=="string"?e7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=hi._parseInt(n.subarray(2)),{d:l,l:u}=hi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=h=>Number.parseInt(h[0],16)&8?"00"+h:h,n=h=>{const p=h.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},En=BigInt(0),pt=BigInt(1),lr=BigInt(2),Ra=BigInt(3),qp=BigInt(4);function t7(e){const t=J6(e),{Fp:n}=t,i=t.toBytes||((k,x,E)=>{const $=x.toAffine();return rn(Uint8Array.from([4]),n.toBytes($.x),n.toBytes($.y))}),o=t.fromBytes||(k=>{const x=k.subarray(1),E=n.fromBytes(x.subarray(0,n.BYTES)),$=n.fromBytes(x.subarray(n.BYTES,2*n.BYTES));return{x:E,y:$}});function a(k){const{a:x,b:E}=t,$=n.sqr(k),A=n.mul($,k);return n.add(n.add(A,n.mul(k,x)),E)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l(k){return typeof k=="bigint"&&En<k&&k<t.n}function u(k){if(!l(k))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(k){const{allowedPrivateKeyLengths:x,nByteLength:E,wrapPrivateKey:$,n:A}=t;if(x&&typeof k!="bigint"){if(k instanceof Uint8Array&&(k=Ji(k)),typeof k!="string"||!x.includes(k.length))throw new Error("Invalid key");k=k.padStart(E*2,"0")}let R;try{R=typeof k=="bigint"?k:Dt(At("private key",k,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof k}`)}return $&&(R=bt(R,A)),u(R),R}const h=new Map;function p(k){if(!(k instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(x,E,$){if(this.px=x,this.py=E,this.pz=$,x==null||!n.isValid(x))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if($==null||!n.isValid($))throw new Error("z required")}static fromAffine(x){const{x:E,y:$}=x||{};if(!x||!n.isValid(E)||!n.isValid($))throw new Error("invalid affine point");if(x instanceof g)throw new Error("projective point not allowed");const A=R=>n.eql(R,n.ZERO);return A(E)&&A($)?g.ZERO:new g(E,$,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(x){const E=n.invertBatch(x.map($=>$.pz));return x.map(($,A)=>$.toAffine(E[A])).map(g.fromAffine)}static fromHex(x){const E=g.fromAffine(o(At("pointHex",x)));return E.assertValidity(),E}static fromPrivateKey(x){return g.BASE.multiply(d(x))}_setWindowSize(x){this._WINDOW_SIZE=x,h.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x,y:E}=this.toAffine();if(!n.isValid(x)||!n.isValid(E))throw new Error("bad point: x or y not FE");const $=n.sqr(E),A=a(x);if(!n.eql($,A))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:x}=this.toAffine();if(n.isOdd)return!n.isOdd(x);throw new Error("Field doesn't support isOdd")}equals(x){p(x);const{px:E,py:$,pz:A}=this,{px:R,py:T,pz:M}=x,C=n.eql(n.mul(E,M),n.mul(R,A)),L=n.eql(n.mul($,M),n.mul(T,A));return C&&L}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:x,b:E}=t,$=n.mul(E,Ra),{px:A,py:R,pz:T}=this;let M=n.ZERO,C=n.ZERO,L=n.ZERO,U=n.mul(A,A),te=n.mul(R,R),W=n.mul(T,T),Q=n.mul(A,R);return Q=n.add(Q,Q),L=n.mul(A,T),L=n.add(L,L),M=n.mul(x,L),C=n.mul($,W),C=n.add(M,C),M=n.sub(te,C),C=n.add(te,C),C=n.mul(M,C),M=n.mul(Q,M),L=n.mul($,L),W=n.mul(x,W),Q=n.sub(U,W),Q=n.mul(x,Q),Q=n.add(Q,L),L=n.add(U,U),U=n.add(L,U),U=n.add(U,W),U=n.mul(U,Q),C=n.add(C,U),W=n.mul(R,T),W=n.add(W,W),U=n.mul(W,Q),M=n.sub(M,U),L=n.mul(W,te),L=n.add(L,L),L=n.add(L,L),new g(M,C,L)}add(x){p(x);const{px:E,py:$,pz:A}=this,{px:R,py:T,pz:M}=x;let C=n.ZERO,L=n.ZERO,U=n.ZERO;const te=t.a,W=n.mul(t.b,Ra);let Q=n.mul(E,R),q=n.mul($,T),X=n.mul(A,M),se=n.add(E,$),Z=n.add(R,T);se=n.mul(se,Z),Z=n.add(Q,q),se=n.sub(se,Z),Z=n.add(E,A);let Y=n.add(R,M);return Z=n.mul(Z,Y),Y=n.add(Q,X),Z=n.sub(Z,Y),Y=n.add($,A),C=n.add(T,M),Y=n.mul(Y,C),C=n.add(q,X),Y=n.sub(Y,C),U=n.mul(te,Z),C=n.mul(W,X),U=n.add(C,U),C=n.sub(q,U),U=n.add(q,U),L=n.mul(C,U),q=n.add(Q,Q),q=n.add(q,Q),X=n.mul(te,X),Z=n.mul(W,Z),q=n.add(q,X),X=n.sub(Q,X),X=n.mul(te,X),Z=n.add(Z,X),Q=n.mul(q,Z),L=n.add(L,Q),Q=n.mul(Y,Z),C=n.mul(se,C),C=n.sub(C,Q),Q=n.mul(se,q),U=n.mul(Y,U),U=n.add(U,Q),new g(C,L,U)}subtract(x){return this.add(x.negate())}is0(){return this.equals(g.ZERO)}wNAF(x){return w.wNAFCached(this,h,x,E=>{const $=n.invertBatch(E.map(A=>A.pz));return E.map((A,R)=>A.toAffine($[R])).map(g.fromAffine)})}multiplyUnsafe(x){const E=g.ZERO;if(x===En)return E;if(u(x),x===pt)return this;const{endo:$}=t;if(!$)return w.unsafeLadder(this,x);let{k1neg:A,k1:R,k2neg:T,k2:M}=$.splitScalar(x),C=E,L=E,U=this;for(;R>En||M>En;)R&pt&&(C=C.add(U)),M&pt&&(L=L.add(U)),U=U.double(),R>>=pt,M>>=pt;return A&&(C=C.negate()),T&&(L=L.negate()),L=new g(n.mul(L.px,$.beta),L.py,L.pz),C.add(L)}multiply(x){u(x);let E=x,$,A;const{endo:R}=t;if(R){const{k1neg:T,k1:M,k2neg:C,k2:L}=R.splitScalar(E);let{p:U,f:te}=this.wNAF(M),{p:W,f:Q}=this.wNAF(L);U=w.constTimeNegate(T,U),W=w.constTimeNegate(C,W),W=new g(n.mul(W.px,R.beta),W.py,W.pz),$=U.add(W),A=te.add(Q)}else{const{p:T,f:M}=this.wNAF(E);$=T,A=M}return g.normalizeZ([$,A])[0]}multiplyAndAddUnsafe(x,E,$){const A=g.BASE,R=(M,C)=>C===En||C===pt||!M.equals(A)?M.multiplyUnsafe(C):M.multiply(C),T=R(this,E).add(R(x,$));return T.is0()?void 0:T}toAffine(x){const{px:E,py:$,pz:A}=this,R=this.is0();x==null&&(x=R?n.ONE:n.inv(A));const T=n.mul(E,x),M=n.mul($,x),C=n.mul(A,x);if(R)return{x:n.ZERO,y:n.ZERO};if(!n.eql(C,n.ONE))throw new Error("invZ was invalid");return{x:T,y:M}}isTorsionFree(){const{h:x,isTorsionFree:E}=t;if(x===pt)return!0;if(E)return E(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:x,clearCofactor:E}=t;return x===pt?this:E?E(g,this):this.multiplyUnsafe(t.h)}toRawBytes(x=!0){return this.assertValidity(),i(g,this,x)}toHex(x=!0){return Ji(this.toRawBytes(x))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,w=Y6(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function n7(e){const t=Gg(e);return ps(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function r7(e){const t=n7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(Z){return En<Z&&Z<n.ORDER}function u(Z){return bt(Z,i)}function d(Z){return wu(Z,i)}const{ProjectivePoint:h,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=t7({...t,toBytes(Z,Y,ce){const D=Y.toAffine(),ne=n.toBytes(D.x),re=rn;return ce?re(Uint8Array.from([Y.hasEvenY()?2:3]),ne):re(Uint8Array.from([4]),ne,n.toBytes(D.y))},fromBytes(Z){const Y=Z.length,ce=Z[0],D=Z.subarray(1);if(Y===o&&(ce===2||ce===3)){const ne=Dt(D);if(!l(ne))throw new Error("Point is not on curve");const re=g(ne);let de=n.sqrt(re);const we=(de&pt)===pt;return(ce&1)===1!==we&&(de=n.neg(de)),{x:ne,y:de}}else if(Y===a&&ce===4){const ne=n.fromBytes(D.subarray(0,n.BYTES)),re=n.fromBytes(D.subarray(n.BYTES,2*n.BYTES));return{x:ne,y:re}}else throw new Error(`Point of length ${Y} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),w=Z=>Ji(Fr(Z,t.nByteLength));function k(Z){const Y=i>>pt;return Z>Y}function x(Z){return k(Z)?u(-Z):Z}const E=(Z,Y,ce)=>Dt(Z.slice(Y,ce));class ${constructor(Y,ce,D){this.r=Y,this.s=ce,this.recovery=D,this.assertValidity()}static fromCompact(Y){const ce=t.nByteLength;return Y=At("compactSignature",Y,ce*2),new $(E(Y,0,ce),E(Y,ce,2*ce))}static fromDER(Y){const{r:ce,s:D}=hi.toSig(At("DER",Y));return new $(ce,D)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(Y){return new $(this.r,this.s,Y)}recoverPublicKey(Y){const{r:ce,s:D,recovery:ne}=this,re=L(At("msgHash",Y));if(ne==null||![0,1,2,3].includes(ne))throw new Error("recovery id invalid");const de=ne===2||ne===3?ce+t.n:ce;if(de>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const we=ne&1?"03":"02",G=h.fromHex(we+w(de)),fe=d(de),$e=u(-re*fe),Ve=u(D*fe),J=h.BASE.multiplyAndAddUnsafe(G,$e,Ve);if(!J)throw new Error("point at infinify");return J.assertValidity(),J}hasHighS(){return k(this.s)}normalizeS(){return this.hasHighS()?new $(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Xi(this.toDERHex())}toDERHex(){return hi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Xi(this.toCompactHex())}toCompactHex(){return w(this.r)+w(this.s)}}const A={isValidPrivateKey(Z){try{return p(Z),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const Z=t.randomBytes(n.BYTES+8),Y=G6(Z,i);return Fr(Y,t.nByteLength)},precompute(Z=8,Y=h.BASE){return Y._setWindowSize(Z),Y.multiply(BigInt(3)),Y}};function R(Z,Y=!0){return h.fromPrivateKey(Z).toRawBytes(Y)}function T(Z){const Y=Z instanceof Uint8Array,ce=typeof Z=="string",D=(Y||ce)&&Z.length;return Y?D===o||D===a:ce?D===2*o||D===2*a:Z instanceof h}function M(Z,Y,ce=!0){if(T(Z))throw new Error("first arg must be private key");if(!T(Y))throw new Error("second arg must be public key");return h.fromHex(Y).multiply(p(Z)).toRawBytes(ce)}const C=t.bits2int||function(Z){const Y=Dt(Z),ce=Z.length*8-t.nBitLength;return ce>0?Y>>BigInt(ce):Y},L=t.bits2int_modN||function(Z){return u(C(Z))},U=sd(t.nBitLength);function te(Z){if(typeof Z!="bigint")throw new Error("bigint expected");if(!(En<=Z&&Z<U))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Fr(Z,t.nByteLength)}function W(Z,Y,ce=Q){if(["recovered","canonical"].some(Qe=>Qe in ce))throw new Error("sign() legacy options not supported");const{hash:D,randomBytes:ne}=t;let{lowS:re,prehash:de,extraEntropy:we}=ce;re==null&&(re=!0),Z=At("msgHash",Z),de&&(Z=At("prehashed msgHash",D(Z)));const G=L(Z),fe=p(Y),$e=[te(fe),te(G)];if(we!=null){const Qe=we===!0?ne(n.BYTES):we;$e.push(At("extraEntropy",Qe,n.BYTES))}const Ve=rn(...$e),J=G;function ze(Qe){const yt=C(Qe);if(!v(yt))return;const Re=d(yt),Fe=h.BASE.multiply(yt).toAffine(),kt=u(Fe.x);if(kt===En)return;const Je=u(Re*u(J+kt*fe));if(Je===En)return;let Et=(Fe.x===kt?0:2)|Number(Fe.y&pt),Gn=Je;return re&&k(Je)&&(Gn=x(Je),Et^=1),new $(kt,Gn,Et)}return{seed:Ve,k2sig:ze}}const Q={lowS:t.lowS,prehash:!1},q={lowS:t.lowS,prehash:!1};function X(Z,Y,ce=Q){const{seed:D,k2sig:ne}=W(Z,Y,ce);return Vg(t.hash.outputLen,t.nByteLength,t.hmac)(D,ne)}h.BASE._setWindowSize(8);function se(Z,Y,ce,D=q){const ne=Z;if(Y=At("msgHash",Y),ce=At("publicKey",ce),"strict"in D)throw new Error("options.strict was renamed to lowS");const{lowS:re,prehash:de}=D;let we,G;try{if(typeof ne=="string"||ne instanceof Uint8Array)try{we=$.fromDER(ne)}catch(Fe){if(!(Fe instanceof hi.Err))throw Fe;we=$.fromCompact(ne)}else if(typeof ne=="object"&&typeof ne.r=="bigint"&&typeof ne.s=="bigint"){const{r:Fe,s:kt}=ne;we=new $(Fe,kt)}else throw new Error("PARSE");G=h.fromHex(ce)}catch(Fe){if(Fe.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(re&&we.hasHighS())return!1;de&&(Y=t.hash(Y));const{r:fe,s:$e}=we,Ve=L(Y),J=d($e),ze=u(Ve*J),Qe=u(fe*J),yt=h.BASE.multiplyAndAddUnsafe(G,ze,Qe)?.toAffine();return yt?u(yt.x)===fe:!1}return{CURVE:t,getPublicKey:R,getSharedSecret:M,sign:X,verify:se,ProjectivePoint:h,Signature:$,utils:A}}function i7(e,t){const n=e.ORDER;let i=En;for(let v=n-pt;v%lr===En;v/=lr)i+=pt;const o=i,a=(n-pt)/lr**o,l=(a-pt)/lr,u=lr**o-pt,d=lr**(o-pt),h=e.pow(t,a),p=e.pow(t,(a+pt)/lr);let g=(v,w)=>{let k=h,x=e.pow(w,u),E=e.sqr(x);E=e.mul(E,w);let $=e.mul(v,E);$=e.pow($,l),$=e.mul($,x),x=e.mul($,w),E=e.mul($,v);let A=e.mul(E,x);$=e.pow(A,d);let R=e.eql($,e.ONE);x=e.mul(E,p),$=e.mul(A,k),E=e.cmov(x,E,R),A=e.cmov($,A,R);for(let T=o;T>pt;T--){let M=lr**(T-lr),C=e.pow(A,M);const L=e.eql(C,e.ONE);x=e.mul(E,k),k=e.mul(k,k),C=e.mul(A,k),E=e.cmov(x,E,L),A=e.cmov(C,A,L)}return{isValid:R,value:E}};if(e.ORDER%qp===Ra){const v=(e.ORDER-Ra)/qp,w=e.sqrt(e.neg(t));g=(k,x)=>{let E=e.sqr(x);const $=e.mul(k,x);E=e.mul(E,$);let A=e.pow(E,v);A=e.mul(A,$);const R=e.mul(A,w),T=e.mul(e.sqr(A),x),M=e.eql(T,k);let C=e.cmov(R,A,M);return{isValid:M,value:C}}}return g}function s7(e,t){if(Kg(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=i7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,h,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),h=e.sqr(u),d=e.mul(h,t.A),a=e.add(a,d),a=e.mul(a,l),h=e.mul(h,u),d=e.mul(h,t.B),a=e.add(a,d),p=e.mul(o,l);const{isValid:v,value:w}=n(a,h);g=e.mul(o,i),g=e.mul(g,w),p=e.cmov(p,l,v),g=e.cmov(g,w,v);const k=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,k),p=e.div(p,u),{x:p,y:g}}}function o7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return hl(e);throw new Error("DST must be Uint8Array or string")}const a7=Dt;function Nr(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function l7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Gs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function ad(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function c7(e,t,n,i){Gs(e),Gs(t),ad(n),t.length>255&&(t=i(rn(hl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=rn(t,Nr(t.length,1)),d=Nr(0,a),h=Nr(n,2),p=new Array(l),g=i(rn(d,e,h,Nr(0,1),u));p[0]=i(rn(g,Nr(1,1),u));for(let w=1;w<=l;w++){const k=[l7(g,p[w-1]),Nr(w+1,1),u];p[w]=i(rn(...k))}return rn(...p).slice(0,n)}function u7(e,t,n,i,o){if(Gs(e),Gs(t),ad(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(hl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Nr(n,2)).update(t).update(Nr(t.length,1)).digest()}function Wp(e,t,n){ps(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Gs(e),ad(t);const h=o7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),v=t*a*g;let w;if(u==="xmd")w=c7(e,h,v,l);else if(u==="xof")w=u7(e,h,v,o,l);else if(u==="_internal_pass")w=e;else throw new Error('expand must be "xmd" or "xof"');const k=new Array(t);for(let x=0;x<t;x++){const E=new Array(a);for(let $=0;$<a;$++){const A=g*($+x*a),R=w.subarray(A,A+g);E[$]=bt(a7(R),i)}k[x]=E}return k}function d7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(h=>h.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function f7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=Wp(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=Wp(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class Qg extends nd{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,di.hash(t);const i=go(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return di.exists(this),this.iHash.update(t),this}digestInto(t){di.exists(this),di.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Oa=(e,t,n)=>new Qg(e,t).update(n).digest();Oa.create=(e,t)=>new Qg(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function h7(e){return{hash:e,hmac:(t,...n)=>Oa(e,t,fi(...n)),randomBytes:ul}}function p7(e,t){const n=i=>r7({...e,...h7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),La=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Yg=BigInt(1),Pa=BigInt(2),Zp=(e,t)=>(e+t/Pa)/t;function Jg(e){const t=pl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),h=e*e*e%t,p=h*h*e%t,g=mn(p,n,t)*p%t,v=mn(g,n,t)*p%t,w=mn(v,Pa,t)*h%t,k=mn(w,o,t)*w%t,x=mn(k,a,t)*k%t,E=mn(x,u,t)*x%t,$=mn(E,d,t)*E%t,A=mn($,u,t)*x%t,R=mn(A,n,t)*p%t,T=mn(R,l,t)*k%t,M=mn(T,i,t)*h%t,C=mn(M,Pa,t);if(!Zr.eql(Zr.sqr(C),e))throw new Error("Cannot find square root");return C}const Zr=K6(pl,void 0,void 0,{sqrt:Jg}),Nt=p7({a:BigInt(0),b:BigInt(7),Fp:Zr,n:La,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=La,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Yg*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Zp(a*e,t),d=Zp(-i*e,t);let h=bt(e-u*n-d*o,t),p=bt(-u*i-d*a,t);const g=h>l,v=p>l;if(g&&(h=t-h),v&&(p=t-p),h>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:h,k2neg:v,k2:p}}}},Dn),gl=BigInt(0),Xg=e=>typeof e=="bigint"&&gl<e&&e<pl,g7=e=>typeof e=="bigint"&&gl<e&&e<La,Vp={};function Ma(e,...t){let n=Vp[e];if(n===void 0){const i=Dn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=rn(i,i),Vp[e]=n}return Dn(rn(n,...t))}const ld=e=>e.toRawBytes(!0).slice(1),xu=e=>Fr(e,32),tu=e=>bt(e,pl),Qs=e=>bt(e,La),cd=Nt.ProjectivePoint,m7=(e,t,n)=>cd.BASE.multiplyAndAddUnsafe(e,t,n);function $u(e){let t=Nt.utils.normPrivateKeyToScalar(e),n=cd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Qs(-t),bytes:ld(n)}}function e1(e){if(!Xg(e))throw new Error("bad x: need 0 < x < p");const t=tu(e*e),n=tu(t*e+BigInt(7));let i=Jg(n);i%Pa!==gl&&(i=tu(-i));const o=new cd(e,i,Yg);return o.assertValidity(),o}function t1(...e){return Qs(Dt(Ma("BIP0340/challenge",...e)))}function v7(e){return $u(e).bytes}function b7(e,t,n=ul(32)){const i=At("message",e),{bytes:o,scalar:a}=$u(t),l=At("auxRand",n,32),u=xu(a^Dt(Ma("BIP0340/aux",l))),d=Ma("BIP0340/nonce",u,o,i),h=Qs(Dt(d));if(h===gl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=$u(h),v=t1(p,o,i),w=new Uint8Array(64);if(w.set(p,0),w.set(xu(Qs(g+v*a)),32),!n1(w,i,o))throw new Error("sign: Invalid signature produced");return w}function n1(e,t,n){const i=At("signature",e,64),o=At("message",t),a=At("publicKey",n,32);try{const l=e1(Dt(a)),u=Dt(i.subarray(0,32));if(!Xg(u))return!1;const d=Dt(i.subarray(32,64));if(!g7(d))return!1;const h=t1(xu(u),ld(l),o),p=m7(l,d,Qs(-h));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const mo={getPublicKey:v7,sign:b7,verify:n1,utils:{randomPrivateKey:Nt.utils.randomPrivateKey,lift_x:e1,pointToBytes:ld,numberToBytesBE:Fr,bytesToNumberBE:Dt,taggedHash:Ma,mod:bt}},y7=d7(Zr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),_7=s7(Zr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Zr.create(BigInt("-11"))});f7(Nt.ProjectivePoint,e=>{const{x:t,y:n}=_7(Zr.create(e[0]));return y7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Zr.ORDER,m:1,k:128,expand:"xmd",hash:Dn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Qr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function On(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Wn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Qr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Zn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function vo(e,t="="){if(Qr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function r1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Kp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Qr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const h=a[d],p=t*l+h;if(!Number.isSafeInteger(p)||t*l/t!==l||p-h!==t*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const i1=(e,t)=>t?i1(t,e%t):e,Ba=(e,t)=>e+(t-i1(e,t));function ku(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ba(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Ba(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Qr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function s1(e){return Qr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Kp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Kp(t,e,2**8))}}}function _r(e,t=!1){if(Qr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Ba(8,e)>32||Ba(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return ku(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(ku(n,e,8,t))}}}function Gp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function o1(e,t){if(Qr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const w7={alphabet:Wn,chain:On,checksum:o1,radix:s1,radix2:_r,join:Zn,padding:vo},a1=On(_r(4),Wn("0123456789ABCDEF"),Zn("")),l1=On(_r(5),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),vo(5),Zn("")),x7=On(_r(5),Wn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),vo(5),Zn("")),$7=On(_r(5),Wn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Zn(""),r1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),es=On(_r(6),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),vo(6),Zn("")),c1=On(_r(6),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),vo(6),Zn("")),ud=e=>On(s1(58),Wn(e),Zn("")),Ys=ud("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),k7=ud("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),E7=ud("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Qp=[0,2,3,5,6,7,9,10,11],u1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Ys.encode(i).padStart(Qp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Qp.indexOf(i.length),a=Ys.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},d1=e=>On(o1(4,t=>e(e(t))),Ys),Eu=On(Wn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Zn("")),Yp=[996825010,642813549,513874426,1027748829,705979059];function zs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Yp.length;i++)(t>>i&1)===1&&(n^=Yp[i]);return n}function Jp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=zs(o)^l>>5}o=zs(o);for(let a=0;a<i;a++)o=zs(o)^e.charCodeAt(a)&31;for(let a of t)o=zs(o)^a;for(let a=0;a<6;a++)o=zs(o);return o^=n,Eu.encode(ku([o%2**30],30,5,!1))}function f1(e){const t=e==="bech32"?1:734539939,n=_r(5),i=n.decode,o=n.encode,a=Gp(i);function l(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const w=p.length+7+g.length;if(v!==!1&&w>v)throw new TypeError(`Length ${w} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${Eu.encode(g)}${Jp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const w=p.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const k=p.slice(0,w),x=p.slice(w+1);if(x.length<6)throw new Error("Data must be at least 6 characters long");const E=Eu.decode(x).slice(0,-6),$=Jp(k,E,t);if(!x.endsWith($))throw new Error(`Invalid checksum in ${p}: expected "${$}"`);return{prefix:k,words:E}}const d=Gp(u);function h(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:h,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const zt=f1("bech32"),C7=f1("bech32m"),h1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},p1=On(_r(4),Wn("0123456789abcdef"),Zn(""),r1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Js={utf8:h1,hex:p1,base16:a1,base32:l1,base64:es,base64url:c1,base58:Ys,base58xmr:u1},g1=`Invalid encoding type. Available types: ${Object.keys(Js).join(", ")}`,m1=(e,t)=>{if(typeof e!="string"||!Js.hasOwnProperty(e))throw new TypeError(g1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Js[e].encode(t)},S7=m1,v1=(e,t)=>{if(!Js.hasOwnProperty(e))throw new TypeError(g1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Js[e].decode(t)},T7=v1,A7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Qr,base16:a1,base32:l1,base32crockford:$7,base32hex:x7,base58:Ys,base58check:d1,base58flickr:k7,base58xmr:u1,base58xrp:E7,base64:es,base64url:c1,bech32:zt,bech32m:C7,bytes:T7,bytesToString:m1,hex:p1,str:S7,stringToBytes:v1,utf8:h1,utils:w7},Symbol.toStringTag,{value:"Module"}));var dd={};Object.defineProperty(dd,"__esModule",{value:!0});var fd=dd.wordlist=void 0;fd=dd.wordlist=`abandon
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
`);var sn={},xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.output=xt.exists=xt.hash=Zi=xt.bytes=xt.bool=xt.number=void 0;function ja(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}xt.number=ja;function b1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}xt.bool=b1;function hd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Zi=xt.bytes=hd;function y1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ja(e.outputLen),ja(e.blockLen)}xt.hash=y1;function _1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}xt.exists=_1;function w1(e,t){hd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}xt.output=w1;const I7={number:ja,bool:b1,bytes:hd,hash:y1,exists:_1,output:w1};xt.default=I7;var ts={},x1={},bo={};const R7=il(m6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=R7,n=T=>new Uint8Array(T.buffer,T.byteOffset,T.byteLength);e.u8=n;const i=T=>new Uint32Array(T.buffer,T.byteOffset,Math.floor(T.byteLength/4));e.u32=i;const o=T=>new DataView(T.buffer,T.byteOffset,T.byteLength);e.createView=o;const a=(T,M)=>T<<32-M|T>>>M;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(T,M)=>M.toString(16).padStart(2,"0"));function u(T){if(!(T instanceof Uint8Array))throw new Error("Uint8Array expected");let M="";for(let C=0;C<T.length;C++)M+=l[T[C]];return M}e.bytesToHex=u;function d(T){if(typeof T!="string")throw new TypeError("hexToBytes: expected string, got "+typeof T);if(T.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const M=new Uint8Array(T.length/2);for(let C=0;C<M.length;C++){const L=C*2,U=T.slice(L,L+2),te=Number.parseInt(U,16);if(Number.isNaN(te)||te<0)throw new Error("Invalid byte sequence");M[C]=te}return M}e.hexToBytes=d;const h=async()=>{};e.nextTick=h;async function p(T,M,C){let L=Date.now();for(let U=0;U<T;U++){C(U);const te=Date.now()-L;te>=0&&te<M||(await(0,e.nextTick)(),L+=te)}}e.asyncLoop=p;function g(T){if(typeof T!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof T}`);return new TextEncoder().encode(T)}e.utf8ToBytes=g;function v(T){if(typeof T=="string"&&(T=g(T)),!(T instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof T})`);return T}e.toBytes=v;function w(...T){if(!T.every(L=>L instanceof Uint8Array))throw new Error("Uint8Array list expected");if(T.length===1)return T[0];const M=T.reduce((L,U)=>L+U.length,0),C=new Uint8Array(M);for(let L=0,U=0;L<T.length;L++){const te=T[L];C.set(te,U),U+=te.length}return C}e.concatBytes=w;class k{clone(){return this._cloneInto()}}e.Hash=k;const x=T=>Object.prototype.toString.call(T)==="[object Object]"&&T.constructor===Object;function E(T,M){if(M!==void 0&&(typeof M!="object"||!x(M)))throw new TypeError("Options should be object or undefined");return Object.assign(T,M)}e.checkOpts=E;function $(T){const M=L=>T().update(v(L)).digest(),C=T();return M.outputLen=C.outputLen,M.blockLen=C.blockLen,M.create=()=>T(),M}e.wrapConstructor=$;function A(T){const M=(L,U)=>T(U).update(v(L)).digest(),C=T({});return M.outputLen=C.outputLen,M.blockLen=C.blockLen,M.create=L=>T(L),M}e.wrapConstructorWithOpts=A;function R(T=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(T));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=R})(bo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=xt,n=bo;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const h=this.blockLen,p=new Uint8Array(h);p.set(d.length>h?l.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=l.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:h,destroyed:p,blockLen:g,outputLen:v}=this;return l=l,l.finished=h,l.destroyed=p,l.blockLen=g,l.outputLen=v,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(x1);Object.defineProperty(ts,"__esModule",{value:!0});ts.pbkdf2Async=ts.pbkdf2=void 0;const fa=xt,O7=x1,Ki=bo;function $1(e,t,n,i){fa.default.hash(e);const o=(0,Ki.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(fa.default.number(a),fa.default.number(l),fa.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Ki.toBytes)(t),h=(0,Ki.toBytes)(n),p=new Uint8Array(l),g=O7.hmac.create(e,d),v=g._cloneInto().update(h);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function k1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function L7(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=$1(e,t,n,i);let h;const p=new Uint8Array(4),g=(0,Ki.createView)(p),v=new Uint8Array(u.outputLen);for(let w=1,k=0;k<a;w++,k+=u.outputLen){const x=l.subarray(k,k+u.outputLen);g.setInt32(0,w,!1),(h=d._cloneInto(h)).update(p).digestInto(v),x.set(v.subarray(0,x.length));for(let E=1;E<o;E++){u._cloneInto(h).update(v).digestInto(v);for(let $=0;$<x.length;$++)x[$]^=v[$]}}return k1(u,d,l,h,v)}ts.pbkdf2=L7;async function P7(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:h}=$1(e,t,n,i);let p;const g=new Uint8Array(4),v=(0,Ki.createView)(g),w=new Uint8Array(d.outputLen);for(let k=1,x=0;x<a;k++,x+=d.outputLen){const E=u.subarray(x,x+d.outputLen);v.setInt32(0,k,!1),(p=h._cloneInto(p)).update(g).digestInto(w),E.set(w.subarray(0,E.length)),await(0,Ki.asyncLoop)(o-1,l,$=>{d._cloneInto(p).update(w).digestInto(w);for(let A=0;A<E.length;A++)E[A]^=w[A]})}return k1(d,h,u,p,w)}ts.pbkdf2Async=P7;const M7=il(R6);var vn={},ml={};Object.defineProperty(ml,"__esModule",{value:!0});ml.SHA2=void 0;const nu=xt,Hs=bo;function B7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}class j7 extends Hs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Hs.createView)(this.buffer)}update(t){nu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Hs.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,Hs.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){nu.default.exists(this),nu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;B7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Hs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}ml.SHA2=j7;var E1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(W,Q=!1){return Q?{h:Number(W&t),l:Number(W>>n&t)}:{h:Number(W>>n&t)|0,l:Number(W&t)|0}}e.fromBig=i;function o(W,Q=!1){let q=new Uint32Array(W.length),X=new Uint32Array(W.length);for(let se=0;se<W.length;se++){const{h:Z,l:Y}=i(W[se],Q);[q[se],X[se]]=[Z,Y]}return[q,X]}e.split=o;const a=(W,Q)=>BigInt(W>>>0)<<n|BigInt(Q>>>0);e.toBig=a;const l=(W,Q,q)=>W>>>q,u=(W,Q,q)=>W<<32-q|Q>>>q,d=(W,Q,q)=>W>>>q|Q<<32-q,h=(W,Q,q)=>W<<32-q|Q>>>q,p=(W,Q,q)=>W<<64-q|Q>>>q-32,g=(W,Q,q)=>W>>>q-32|Q<<64-q,v=(W,Q)=>Q,w=(W,Q)=>W,k=(W,Q,q)=>W<<q|Q>>>32-q,x=(W,Q,q)=>Q<<q|W>>>32-q,E=(W,Q,q)=>Q<<q-32|W>>>64-q,$=(W,Q,q)=>W<<q-32|Q>>>64-q;function A(W,Q,q,X){const se=(Q>>>0)+(X>>>0);return{h:W+q+(se/2**32|0)|0,l:se|0}}e.add=A;const R=(W,Q,q)=>(W>>>0)+(Q>>>0)+(q>>>0),T=(W,Q,q,X)=>Q+q+X+(W/2**32|0)|0,M=(W,Q,q,X)=>(W>>>0)+(Q>>>0)+(q>>>0)+(X>>>0),C=(W,Q,q,X,se)=>Q+q+X+se+(W/2**32|0)|0,L=(W,Q,q,X,se)=>(W>>>0)+(Q>>>0)+(q>>>0)+(X>>>0)+(se>>>0),U=(W,Q,q,X,se,Z)=>Q+q+X+se+Z+(W/2**32|0)|0,te={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:h,rotrBH:p,rotrBL:g,rotr32H:v,rotr32L:w,rotlSH:k,rotlSL:x,rotlBH:E,rotlBL:$,add:A,add3L:R,add3H:T,add4L:M,add4H:C,add5H:U,add5L:L};e.default=te})(E1);Object.defineProperty(vn,"__esModule",{value:!0});vn.sha384=vn.sha512_256=vn.sha512_224=Cu=vn.sha512=vn.SHA512=void 0;const U7=ml,Ie=E1,vl=bo,[N7,D7]=Ie.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),jr=new Uint32Array(80),Ur=new Uint32Array(80);class yo extends U7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:h,El:p,Fh:g,Fl:v,Gh:w,Gl:k,Hh:x,Hl:E}=this;return[t,n,i,o,a,l,u,d,h,p,g,v,w,k,x,E]}set(t,n,i,o,a,l,u,d,h,p,g,v,w,k,x,E){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=h|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=w|0,this.Gl=k|0,this.Hh=x|0,this.Hl=E|0}process(t,n){for(let R=0;R<16;R++,n+=4)jr[R]=t.getUint32(n),Ur[R]=t.getUint32(n+=4);for(let R=16;R<80;R++){const T=jr[R-15]|0,M=Ur[R-15]|0,C=Ie.default.rotrSH(T,M,1)^Ie.default.rotrSH(T,M,8)^Ie.default.shrSH(T,M,7),L=Ie.default.rotrSL(T,M,1)^Ie.default.rotrSL(T,M,8)^Ie.default.shrSL(T,M,7),U=jr[R-2]|0,te=Ur[R-2]|0,W=Ie.default.rotrSH(U,te,19)^Ie.default.rotrBH(U,te,61)^Ie.default.shrSH(U,te,6),Q=Ie.default.rotrSL(U,te,19)^Ie.default.rotrBL(U,te,61)^Ie.default.shrSL(U,te,6),q=Ie.default.add4L(L,Q,Ur[R-7],Ur[R-16]),X=Ie.default.add4H(q,C,W,jr[R-7],jr[R-16]);jr[R]=X|0,Ur[R]=q|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:h,Dl:p,Eh:g,El:v,Fh:w,Fl:k,Gh:x,Gl:E,Hh:$,Hl:A}=this;for(let R=0;R<80;R++){const T=Ie.default.rotrSH(g,v,14)^Ie.default.rotrSH(g,v,18)^Ie.default.rotrBH(g,v,41),M=Ie.default.rotrSL(g,v,14)^Ie.default.rotrSL(g,v,18)^Ie.default.rotrBL(g,v,41),C=g&w^~g&x,L=v&k^~v&E,U=Ie.default.add5L(A,M,L,D7[R],Ur[R]),te=Ie.default.add5H(U,$,T,C,N7[R],jr[R]),W=U|0,Q=Ie.default.rotrSH(i,o,28)^Ie.default.rotrBH(i,o,34)^Ie.default.rotrBH(i,o,39),q=Ie.default.rotrSL(i,o,28)^Ie.default.rotrBL(i,o,34)^Ie.default.rotrBL(i,o,39),X=i&a^i&u^a&u,se=o&l^o&d^l&d;$=x|0,A=E|0,x=w|0,E=k|0,w=g|0,k=v|0,{h:g,l:v}=Ie.default.add(h|0,p|0,te|0,W|0),h=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const Z=Ie.default.add3L(W,q,se);i=Ie.default.add3H(Z,te,Q,X),o=Z|0}({h:i,l:o}=Ie.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Ie.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Ie.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h,l:p}=Ie.default.add(this.Dh|0,this.Dl|0,h|0,p|0),{h:g,l:v}=Ie.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:w,l:k}=Ie.default.add(this.Fh|0,this.Fl|0,w|0,k|0),{h:x,l:E}=Ie.default.add(this.Gh|0,this.Gl|0,x|0,E|0),{h:$,l:A}=Ie.default.add(this.Hh|0,this.Hl|0,$|0,A|0),this.set(i,o,a,l,u,d,h,p,g,v,w,k,x,E,$,A)}roundClean(){jr.fill(0),Ur.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}vn.SHA512=yo;class z7 extends yo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class H7 extends yo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class F7 extends yo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Cu=vn.sha512=(0,vl.wrapConstructor)(()=>new yo);vn.sha512_224=(0,vl.wrapConstructor)(()=>new z7);vn.sha512_256=(0,vl.wrapConstructor)(()=>new H7);vn.sha384=(0,vl.wrapConstructor)(()=>new F7);const q7=il(k6),W7=il(A7);Object.defineProperty(sn,"__esModule",{value:!0});var C1=sn.mnemonicToSeedSync=sn.mnemonicToSeed=B1=sn.validateMnemonic=sn.entropyToMnemonic=sn.mnemonicToEntropy=O1=sn.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const S1=xt,T1=ts,Z7=M7,A1=vn,V7=q7,ha=W7,K7=e=>e[0]==="あいこくしん";function I1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function pd(e){const t=I1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function R1(e){S1.default.bytes(e,16,20,24,28,32)}function G7(e,t=128){if(S1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return M1((0,V7.randomBytes)(t/8),e)}var O1=sn.generateMnemonic=G7;const Q7=e=>{const t=8-e.length/4;return new Uint8Array([(0,Z7.sha256)(e)[0]>>t<<t])};function L1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),ha.utils.chain(ha.utils.checksum(1,Q7),ha.utils.radix2(11,!0),ha.utils.alphabet(e))}function P1(e,t){const{words:n}=pd(e),i=L1(t).decode(n);return R1(i),i}sn.mnemonicToEntropy=P1;function M1(e,t){return R1(e),L1(t).encode(e).join(K7(t)?"　":" ")}sn.entropyToMnemonic=M1;function Y7(e,t){try{P1(e,t)}catch{return!1}return!0}var B1=sn.validateMnemonic=Y7;const j1=e=>I1(`mnemonic${e}`);function J7(e,t=""){return(0,T1.pbkdf2Async)(A1.sha512,pd(e).nfkd,j1(t),{c:2048,dkLen:64})}sn.mnemonicToSeed=J7;function X7(e,t=""){return(0,T1.pbkdf2)(A1.sha512,pd(e).nfkd,j1(t),{c:2048,dkLen:64})}C1=sn.mnemonicToSeedSync=X7;const e9=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),U1=Uint8Array.from({length:16},(e,t)=>t),t9=U1.map(e=>(9*e+5)%16);let gd=[U1],md=[t9];for(let e=0;e<4;e++)for(let t of[gd,md])t.push(t[e].map(n=>e9[n]));const N1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),n9=gd.map((e,t)=>e.map(n=>N1[t][n])),r9=md.map((e,t)=>e.map(n=>N1[t][n])),i9=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),s9=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),pa=(e,t)=>e<<t|e>>>32-t;function Xp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ga=new Uint32Array(16);class o9 extends Hg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let w=0;w<16;w++,n+=4)ga[w]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,h=this.h3|0,p=h,g=this.h4|0,v=g;for(let w=0;w<5;w++){const k=4-w,x=i9[w],E=s9[w],$=gd[w],A=md[w],R=n9[w],T=r9[w];for(let M=0;M<16;M++){const C=pa(i+Xp(w,a,u,h)+ga[$[M]]+x,R[M])+g|0;i=g,g=h,h=pa(u,10)|0,u=a,a=C}for(let M=0;M<16;M++){const C=pa(o+Xp(k,l,d,p)+ga[A[M]]+E,T[M])+v|0;o=v,v=p,p=pa(d,10)|0,d=l,l=C}}this.set(this.h1+u+p|0,this.h2+h+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ga.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const a9=cl(()=>new o9),ma=Nt.ProjectivePoint,ru=d1(Dn);function e0(e){return BigInt(`0x${nn(e)}`)}function l9(e){return Wr(e.toString(16).padStart(64,"0"))}const c9=td("Bitcoin seed"),iu={private:76066276,public:76067358},su=2147483648,u9=e=>a9(Dn(e)),d9=e=>gi(e).getUint32(0,!1),va=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return d9(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return ru.encode(this.serialize(this.versions.private,fi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return ru.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=iu){if(Zi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Oa(Cu,c9,t);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=iu){const i=ru.decode(t),o=gi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...l,privateKey:u.slice(1)}):new ui({...l,publicKey:u})}static fromJSON(t){return ui.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||iu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Nt.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:e0(t.privateKey),this.privKeyBytes=l9(this.privKey),this.pubKey=Nt.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ma.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=u9(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=su)throw new Error("Invalid index");a[2]==="'"&&(l+=su),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=va(t);if(t>=su){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=fi(new Uint8Array([0]),u,n)}else n=fi(this.pubKey,n);const i=Oa(Cu,this.chainCode,n),o=e0(i.slice(0,32)),a=i.slice(32);if(!Nt.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=bt(this.privKey+o,Nt.CURVE.n);if(!Nt.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=ma.fromHex(this.pubKey).add(ma.fromPrivateKey(o));if(u.equals(ma.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new ui(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Zi(t,32),Nt.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Zi(t,32),Zi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Nt.Signature.fromCompact(n)}catch{return!1}return Nt.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Zi(n,33),fi(va(t),new Uint8Array([this.depth]),va(this.parentFingerprint),va(this.index),this.chainCode,n)}}var f9=Object.defineProperty,Mt=(e,t)=>{for(var n in t)f9(e,n,{get:t[n],enumerable:!0})};function D1(e){return nn(mo.getPublicKey(e))}var h9={};Mt(h9,{MessageNode:()=>z1,MessageQueue:()=>H1,insertEventIntoAscendingList:()=>g9,insertEventIntoDescendingList:()=>p9,normalizeURL:()=>Su,utf8Decoder:()=>Dr,utf8Encoder:()=>zn});var Dr=new TextDecoder("utf-8"),zn=new TextEncoder;function Su(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function p9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function g9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var z1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},H1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new z1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},ct=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(ct||{});function F1(e,t){let n=e;return n.pubkey=D1(t),n.id=bl(n),n.sig=b9(n,t),n}function m9(e){if(!vd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function bl(e){let t=Dn(zn.encode(m9(e)));return nn(t)}var v9=e=>e instanceof Object;function vd(e){if(!v9(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function bd(e){try{return mo.verify(e.sig,bl(e),e.pubkey)}catch{return!1}}function b9(e,t){return nn(mo.sign(bl(e),t))}function y9(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function _9(e,t){for(let n=0;n<e.length;n++)if(y9(e[n],t))return!0;return!1}var w9={};Mt(w9,{getHex64:()=>yl,getInt:()=>q1,getSubscriptionId:()=>W1,matchEventId:()=>x9,matchEventKind:()=>k9,matchEventPubkey:()=>$9});function yl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function q1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function W1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function x9(e,t){return t===yl(e,"id")}function $9(e,t){return t===yl(e,"pubkey")}function k9(e,t){return t===q1(e,"kind")}var t0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function E9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=t0(),d={},h={},p;async function g(){return p||(p=new Promise(($,A)=>{try{a=new WebSocket(e)}catch(C){A(C)}a.onopen=()=>{u.connect.forEach(C=>C()),$()},a.onerror=()=>{p=void 0,u.error.forEach(C=>C()),A()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(C=>C())};let R=new H1,T;a.onmessage=C=>{R.enqueue(C.data),T||(T=setInterval(M,0))};function M(){if(R.size===0){clearInterval(T),T=null;return}var C=R.dequeue();if(!C)return;let L=W1(C);if(L){let U=l[L];if(U&&U.alreadyHaveEvent&&U.alreadyHaveEvent(yl(C,"id"),e))return}try{let U=JSON.parse(C);switch(U[0]){case"EVENT":{let q=U[1],X=U[2];vd(X)&&l[q]&&(l[q].skipVerification||bd(X))&&_9(l[q].filters,X)&&(l[q],(d[q]?.event||[]).forEach(se=>se(X)));return}case"COUNT":let te=U[1],W=U[2];l[te]&&(d[te]?.count||[]).forEach(q=>q(W));return;case"EOSE":{let q=U[1];q in d&&(d[q].eose.forEach(X=>X()),d[q].eose=[]);return}case"OK":{let q=U[1],X=U[2],se=U[3]||"";q in h&&(X?h[q].ok.forEach(Z=>Z()):h[q].failed.forEach(Z=>Z(se)),h[q].ok=[],h[q].failed=[]);return}case"NOTICE":let Q=U[1];u.notice.forEach(q=>q(Q));return;case"AUTH":{let q=U[1];u.auth?.forEach(X=>X(q));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function w(){v()||await g()}async function k($){let A=JSON.stringify($);if(!(!v()&&(await new Promise(R=>setTimeout(R,1e3)),!v())))try{a.send(A)}catch(R){console.log(R)}}const x=($,{verb:A="REQ",skipVerification:R=!1,alreadyHaveEvent:T=null,id:M=Math.random().toString().slice(2)}={})=>{let C=M;return l[C]={id:C,filters:$,skipVerification:R,alreadyHaveEvent:T},k([A,C,...$]),{sub:(L,U={})=>x(L||$,{skipVerification:U.skipVerification||R,alreadyHaveEvent:U.alreadyHaveEvent||T,id:C}),unsub:()=>{delete l[C],delete d[C],k(["CLOSE",C])},on:(L,U)=>{d[C]=d[C]||{event:[],count:[],eose:[]},d[C][L].push(U)},off:(L,U)=>{let te=d[C],W=te[L].indexOf(U);W>=0&&te[L].splice(W,1)}}};function E($,A){if(!$.id)throw new Error(`event ${$} has no id`);let R=$.id;return k([A,$]),{on:(T,M)=>{h[R]=h[R]||{ok:[],failed:[]},h[R][T].push(M)},off:(T,M)=>{let C=h[R];if(!C)return;let L=C[T].indexOf(M);L>=0&&C[T].splice(L,1)}}}return{url:e,sub:x,on:($,A)=>{u[$].push(A),$==="connect"&&a?.readyState===1&&A()},off:($,A)=>{let R=u[$].indexOf(A);R!==-1&&u[$].splice(R,1)},list:($,A)=>new Promise(R=>{let T=x($,A),M=[],C=setTimeout(()=>{T.unsub(),R(M)},n);T.on("eose",()=>{T.unsub(),clearTimeout(C),R(M)}),T.on("event",L=>{M.push(L)})}),get:($,A)=>new Promise(R=>{let T=x([$],A),M=setTimeout(()=>{T.unsub(),R(null)},i);T.on("event",C=>{T.unsub(),clearTimeout(M),R(C)})}),count:$=>new Promise(A=>{let R=x($,{...x,verb:"COUNT"}),T=setTimeout(()=>{R.unsub(),A(null)},o);R.on("count",M=>{R.unsub(),clearTimeout(T),A(M)})}),publish($){return E($,"EVENT")},auth($){return E($,"AUTH")},connect:w,close(){u=t0(),d={},h={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var C9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Su(t)];n&&n.close()})}async ensureRelay(e){const t=Su(e);this._conn[t]||(this._conn[t]=E9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,w)=>{if(n?.alreadyHaveEvent?.(v,w))return!0;let k=this._seenOn[v]||new Set;return k.add(w),this._seenOn[v]=k,i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,h=!1,p=setTimeout(()=>{h=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let w;try{w=await this.ensureRelay(v)}catch{x();return}if(!w)return;let k=w.sub(t,o);k.on("event",E=>{i.add(E.id);for(let $ of l.values())$(E)}),k.on("eose",()=>{h||x()}),a.push(k);function x(){if(d--,d===0){clearTimeout(p);for(let E of u.values())E()}}});let g={sub(v,w){return a.forEach(k=>k.sub(v,w)),g},unsub(){a.forEach(v=>v.unsub())},on(v,w){v==="event"?l.add(w):v==="eose"&&u.add(w)},off(v,w){v==="event"?l.delete(w):v==="eose"&&u.delete(w)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],h=()=>a(l);i.set(a,h),d.on(o,h)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},_o={};Mt(_o,{BECH32_REGEX:()=>Z1,decode:()=>_l,naddrEncode:()=>O9,neventEncode:()=>R9,noteEncode:()=>A9,nprofileEncode:()=>I9,npubEncode:()=>T9,nrelayEncode:()=>L9,nsecEncode:()=>S9});var gs=5e3,Z1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function _l(e){let{prefix:t,words:n}=zt.decode(e,gs),i=new Uint8Array(zt.fromWords(n));switch(t){case"nprofile":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:nn(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nevent":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:nn(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[],author:o[2]?.[0]?nn(o[2][0]):void 0}}}case"naddr":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dr.decode(o[0][0]),pubkey:nn(o[2][0]),kind:parseInt(nn(o[3][0]),16),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nrelay":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Dr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:nn(i)};default:throw new Error(`unknown prefix ${t}`)}}function ba(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function S9(e){return yd("nsec",e)}function T9(e){return yd("npub",e)}function A9(e){return yd("note",e)}function yd(e,t){let n=Wr(t),i=zt.toWords(n);return zt.encode(e,i,gs)}function I9(e){let t=wl({0:[Wr(e.pubkey)],1:(e.relays||[]).map(i=>zn.encode(i))}),n=zt.toWords(t);return zt.encode("nprofile",n,gs)}function R9(e){let t=wl({0:[Wr(e.id)],1:(e.relays||[]).map(i=>zn.encode(i)),2:e.author?[Wr(e.author)]:[]}),n=zt.toWords(t);return zt.encode("nevent",n,gs)}function O9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=wl({0:[zn.encode(e.identifier)],1:(e.relays||[]).map(o=>zn.encode(o)),2:[Wr(e.pubkey)],3:[new Uint8Array(t)]}),i=zt.toWords(n);return zt.encode("naddr",i,gs)}function L9(e){let t=wl({0:[zn.encode(e)]}),n=zt.toWords(t);return zt.encode("nrelay",n,gs)}function wl(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),fi(...t)}var P9={};Mt(P9,{decrypt:()=>B9,encrypt:()=>M9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function M9(e,t,n){const i=Nt.getSharedSecret(e,"02"+t),o=V1(i);let a=Uint8Array.from(ul(16)),l=zn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),h=es.encode(new Uint8Array(d)),p=es.encode(new Uint8Array(a.buffer));return`${h}?iv=${p}`}async function B9(e,t,n){let[i,o]=n.split("?iv="),a=Nt.getSharedSecret(e,"02"+t),l=V1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=es.decode(i),h=es.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:h},u,d);return Dr.decode(p)}function V1(e){return e.slice(1,33)}var K1={};Mt(K1,{NIP05_REGEX:()=>G1,queryProfile:()=>N9,searchDomain:()=>U9,useFetchImplementation:()=>j9});var G1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,xl;try{xl=fetch}catch{}function j9(e){xl=e}async function U9(e,t=""){try{return(await(await xl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function N9(e){const t=e.match(G1);if(!t)return null;const[n,i="_",o]=t;try{const a=await xl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=D9(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function D9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var z9={};Mt(z9,{generateSeedWords:()=>F9,privateKeyFromSeedWords:()=>H9,validateWords:()=>q9});function H9(e,t){let i=ui.fromMasterSeed(C1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return nn(i)}function F9(){return O1(fd)}function q9(e){return B1(e,fd)}var W9={};Mt(W9,{parse:()=>Z9});function Z9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,h={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=h;continue}if(d==="reply"){t.reply=h;continue}if(d==="mention"){t.mentions.push(h);continue}if(p){t.root=h;continue}if(g){t.reply=h;continue}t.mentions.push(h)}return t}var V9={};Mt(V9,{getPow:()=>K9});function K9(e){return G9(Wr(e))}function G9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=Q9(e[n]),t+=i,i===8);n++);return t}function Q9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var Y9={};Mt(Y9,{finishRepostEvent:()=>J9,getRepostedEvent:()=>X9,getRepostedEventPointer:()=>Q1});function J9(e,t,n,i){return F1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function Q1(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function X9(e,{skipVerification:t}={}){const n=Q1(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!bd(i)))return i}var ek={};Mt(ek,{NOSTR_URI_REGEX:()=>$l,parse:()=>nk,test:()=>tk});var $l=new RegExp(`nostr:(${Z1.source})`);function tk(e){return typeof e=="string"&&new RegExp(`^${$l.source}$`).test(e)}function nk(e){const t=e.match(new RegExp(`^${$l.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:_l(t[1])}}var rk={};Mt(rk,{finishReactionEvent:()=>ik,getReactedEventPointer:()=>sk});function ik(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return F1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function sk(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var ok={};Mt(ok,{createDelegation:()=>ak,getDelegator:()=>lk});function ak(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Dn(zn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=nn(mo.sign(o,e));return{from:D1(e),to:t.pubkey,cond:i,sig:a}}function lk(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,h,p]=a[u].split(/\b/);if(!(d==="kind"&&h==="="&&e.kind===parseInt(p))){if(d==="created_at"&&h==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&h===">"&&e.created_at>parseInt(p))continue;return null}}let l=Dn(zn.encode(`nostr:delegation:${e.pubkey}:${i}`));return mo.verify(o,l,n)?n:null}var ck={};Mt(ck,{matchAll:()=>uk,regex:()=>_d,replaceAll:()=>dk});var _d=()=>new RegExp(`\\b${$l.source}\\b`,"g");function*uk(e){const t=e.matchAll(_d());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:_l(o),start:n.index,end:n.index+i.length}}}function dk(e,t){return e.replaceAll(_d(),(n,i)=>t({uri:n,value:i,decoded:_l(i)}))}var fk={};Mt(fk,{useFetchImplementation:()=>hk,validateGithub:()=>pk});var wd;try{wd=fetch}catch{}function hk(e){wd=e}async function pk(e,t,n){try{return await(await wd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var gk={};Mt(gk,{authenticate:()=>mk});var mk=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},vk={};Mt(vk,{getZapEndpoint:()=>yk,makeZapReceipt:()=>xk,makeZapRequest:()=>_k,useFetchImplementation:()=>bk,validateZapRequest:()=>wk});var xd;try{xd=fetch}catch{}function bk(e){xd=e}async function yk(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=zt.decode(n,1e3),u=zt.fromWords(l);t=Dr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await xd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function _k({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function wk(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!vd(t))return"Zap request is not a valid Nostr event.";if(!bd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function xk({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const $k=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),Y1=(e={})=>(()=>{const t=$k();return Ze(t,e,!0,!0),t})(),kk=j('<button class="text-blue-500 underline">'),{noteEncode:Ek,neventEncode:Ck}=_o,Sk=e=>{try{return Ek(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Tk=e=>{try{return Ck({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Xs=e=>(()=>{const t=kk();return O(t,_(ue,{get when(){return e.kind==null||e.kind===ct.Text},get fallback(){return Tk(e.eventId)},get children(){return Sk(e.eventId)}})),t})(),Ak=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],J1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],Ik=[...J1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],Rk=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Ok=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ms=()=>({id:Ok(),width:"medium"}),X1=e=>({...ms(),columnType:"Following",...e}),em=e=>({...ms(),columnType:"Notification",...e}),Lk=e=>({...ms(),columnType:"Relays",...e}),tm=()=>Lk({name:"日本語",relayUrls:J1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),nm=e=>({...ms(),columnType:"Posts",...e}),rm=e=>({...ms(),columnType:"Reactions",...e}),$d=e=>({...ms(),columnType:"Search",...e}),Pk=/^[0-9a-f]{64}$/,eo=e=>{const t=typeof e=="string"&&e.length===64&&Pk.test(e);return t||console.warn("invalid id is ignored: ",e),t};class im{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&eo(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&eo(n))}taggedPubkeys(){return pr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}class sm extends im{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}var qe;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(qe||(qe={}));var Tu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Tu||(Tu={}));const oe=qe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=e=>{switch(typeof e){case"undefined":return oe.undefined;case"string":return oe.string;case"number":return isNaN(e)?oe.nan:oe.number;case"boolean":return oe.boolean;case"function":return oe.function;case"bigint":return oe.bigint;case"symbol":return oe.symbol;case"object":return Array.isArray(e)?oe.array:e===null?oe.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?oe.promise:typeof Map<"u"&&e instanceof Map?oe.map:typeof Set<"u"&&e instanceof Set?oe.set:typeof Date<"u"&&e instanceof Date?oe.date:oe.object;default:return oe.unknown}},ee=qe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Mk=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Tn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const h=l.path[d];d===l.path.length-1?(u[h]=u[h]||{_errors:[]},u[h]._errors.push(n(l))):u[h]=u[h]||{_errors:[]},u=u[h],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,qe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Tn.create=e=>new Tn(e);const to=(e,t)=>{let n;switch(e.code){case ee.invalid_type:e.received===oe.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case ee.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,qe.jsonStringifyReplacer)}`;break;case ee.unrecognized_keys:n=`Unrecognized key(s) in object: ${qe.joinValues(e.keys,", ")}`;break;case ee.invalid_union:n="Invalid input";break;case ee.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${qe.joinValues(e.options)}`;break;case ee.invalid_enum_value:n=`Invalid enum value. Expected ${qe.joinValues(e.options)}, received '${e.received}'`;break;case ee.invalid_arguments:n="Invalid function arguments";break;case ee.invalid_return_type:n="Invalid function return type";break;case ee.invalid_date:n="Invalid date";break;case ee.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:qe.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case ee.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case ee.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case ee.custom:n="Invalid input";break;case ee.invalid_intersection_types:n="Intersection results could not be merged";break;case ee.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case ee.not_finite:n="Number must be finite";break;default:n=t.defaultError,qe.assertNever(e)}return{message:n}};let om=to;function Bk(e){om=e}function Ua(){return om}const Na=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(h=>!!h).slice().reverse();for(const h of d)u=h(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},jk=[];function le(e,t){const n=Na({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Ua(),to].filter(i=>!!i)});e.common.issues.push(n)}class Pt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Ee;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Pt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ee;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Ee=Object.freeze({status:"aborted"}),am=e=>({status:"dirty",value:e}),Ht=e=>({status:"valid",value:e}),Au=e=>e.status==="aborted",Iu=e=>e.status==="dirty",Da=e=>e.status==="valid",za=e=>typeof Promise<"u"&&e instanceof Promise;var pe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(pe||(pe={}));class Hn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const n0=(e,t)=>{if(Da(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Tn(e.common.issues);return this._error=n,this._error}}};function Te(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Le{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return zr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Pt,ctx:{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(za(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return n0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(za(o)?o:Promise.resolve(o));return n0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:ee.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new In({schema:this,typeName:xe.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return gr.create(this,this._def)}nullable(){return yi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return An.create(this,this._def)}promise(){return rs.create(this,this._def)}or(t){return so.create([this,t],this._def)}and(t){return oo.create(this,t,this._def)}transform(t){return new In({...Te(this._def),schema:this,typeName:xe.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new fo({...Te(this._def),innerType:this,defaultValue:n,typeName:xe.ZodDefault})}brand(){return new cm({typeName:xe.ZodBranded,type:this,...Te(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Wa({...Te(this._def),innerType:this,catchValue:n,typeName:xe.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return wo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Uk=/^c[^\s-]{8,}$/i,Nk=/^[a-z][a-z0-9]*$/,Dk=/[0-9A-HJKMNP-TV-Z]{26}/,zk=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Hk=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Fk=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,qk=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Wk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Zk=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Vk(e,t){return!!((t==="v4"||!t)&&qk.test(e)||(t==="v6"||!t)&&Wk.test(e))}class Cn extends Le{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:ee.invalid_string,...pe.errToObj(i)}),this.nonempty=t=>this.min(1,pe.errToObj(t)),this.trim=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==oe.string){const a=this._getOrReturnCtx(t);return le(a,{code:ee.invalid_type,expected:oe.string,received:a.parsedType}),Ee}const i=new Pt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:ee.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:ee.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?le(o,{code:ee.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&le(o,{code:ee.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Hk.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"email",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Fk.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"emoji",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")zk.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"uuid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")Uk.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"cuid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Nk.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"cuid2",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")Dk.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"ulid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),le(o,{validation:"url",code:ee.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"regex",code:ee.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),le(o,{code:ee.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),le(o,{code:ee.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),le(o,{code:ee.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Zk(a).test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{code:ee.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?Vk(t.data,a.version)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"ip",code:ee.invalid_string,message:a.message}),i.dirty()):qe.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Cn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...pe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...pe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...pe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...pe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...pe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...pe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...pe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...pe.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...pe.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...pe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...pe.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...pe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...pe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...pe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...pe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...pe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Cn.create=e=>{var t;return new Cn({checks:[],typeName:xe.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Te(e)})};function Kk(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Vr extends Le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==oe.number){const a=this._getOrReturnCtx(t);return le(a,{code:ee.invalid_type,expected:oe.number,received:a.parsedType}),Ee}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="int"?qe.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),le(i,{code:ee.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:ee.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:ee.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?Kk(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),le(i,{code:ee.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),le(i,{code:ee.not_finite,message:a.message}),o.dirty()):qe.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:pe.toString(o)}]})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:pe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:pe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:pe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:pe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&qe.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Vr.create=e=>new Vr({checks:[],typeName:xe.ZodNumber,coerce:e?.coerce||!1,...Te(e)});class Kr extends Le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==oe.bigint){const a=this._getOrReturnCtx(t);return le(a,{code:ee.invalid_type,expected:oe.bigint,received:a.parsedType}),Ee}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:ee.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:ee.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),le(i,{code:ee.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):qe.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:pe.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Kr.create=e=>{var t;return new Kr({checks:[],typeName:xe.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Te(e)})};class no extends Le{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==oe.boolean){const i=this._getOrReturnCtx(t);return le(i,{code:ee.invalid_type,expected:oe.boolean,received:i.parsedType}),Ee}return Ht(t.data)}}no.create=e=>new no({typeName:xe.ZodBoolean,coerce:e?.coerce||!1,...Te(e)});class vi extends Le{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==oe.date){const a=this._getOrReturnCtx(t);return le(a,{code:ee.invalid_type,expected:oe.date,received:a.parsedType}),Ee}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return le(a,{code:ee.invalid_date}),Ee}const i=new Pt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:ee.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:ee.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):qe.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:pe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:pe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}vi.create=e=>new vi({checks:[],coerce:e?.coerce||!1,typeName:xe.ZodDate,...Te(e)});class Ha extends Le{_parse(t){if(this._getType(t)!==oe.symbol){const i=this._getOrReturnCtx(t);return le(i,{code:ee.invalid_type,expected:oe.symbol,received:i.parsedType}),Ee}return Ht(t.data)}}Ha.create=e=>new Ha({typeName:xe.ZodSymbol,...Te(e)});class ro extends Le{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return le(i,{code:ee.invalid_type,expected:oe.undefined,received:i.parsedType}),Ee}return Ht(t.data)}}ro.create=e=>new ro({typeName:xe.ZodUndefined,...Te(e)});class io extends Le{_parse(t){if(this._getType(t)!==oe.null){const i=this._getOrReturnCtx(t);return le(i,{code:ee.invalid_type,expected:oe.null,received:i.parsedType}),Ee}return Ht(t.data)}}io.create=e=>new io({typeName:xe.ZodNull,...Te(e)});class ns extends Le{constructor(){super(...arguments),this._any=!0}_parse(t){return Ht(t.data)}}ns.create=e=>new ns({typeName:xe.ZodAny,...Te(e)});class mi extends Le{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ht(t.data)}}mi.create=e=>new mi({typeName:xe.ZodUnknown,...Te(e)});class yr extends Le{_parse(t){const n=this._getOrReturnCtx(t);return le(n,{code:ee.invalid_type,expected:oe.never,received:n.parsedType}),Ee}}yr.create=e=>new yr({typeName:xe.ZodNever,...Te(e)});class Fa extends Le{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return le(i,{code:ee.invalid_type,expected:oe.void,received:i.parsedType}),Ee}return Ht(t.data)}}Fa.create=e=>new Fa({typeName:xe.ZodVoid,...Te(e)});class An extends Le{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==oe.array)return le(n,{code:ee.invalid_type,expected:oe.array,received:n.parsedType}),Ee;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(le(n,{code:l?ee.too_big:ee.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(le(n,{code:ee.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(le(n,{code:ee.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Hn(n,l,n.path,u)))).then(l=>Pt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Hn(n,l,n.path,u)));return Pt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new An({...this._def,minLength:{value:t,message:pe.toString(n)}})}max(t,n){return new An({...this._def,maxLength:{value:t,message:pe.toString(n)}})}length(t,n){return new An({...this._def,exactLength:{value:t,message:pe.toString(n)}})}nonempty(t){return this.min(1,t)}}An.create=(e,t)=>new An({type:e,minLength:null,maxLength:null,exactLength:null,typeName:xe.ZodArray,...Te(t)});function Vi(e){if(e instanceof st){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=gr.create(Vi(i))}return new st({...e._def,shape:()=>t})}else return e instanceof An?new An({...e._def,type:Vi(e.element)}):e instanceof gr?gr.create(Vi(e.unwrap())):e instanceof yi?yi.create(Vi(e.unwrap())):e instanceof Fn?Fn.create(e.items.map(t=>Vi(t))):e}class st extends Le{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=qe.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==oe.object){const h=this._getOrReturnCtx(t);return le(h,{code:ee.invalid_type,expected:oe.object,received:h.parsedType}),Ee}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof yr&&this._def.unknownKeys==="strip"))for(const h in o.data)l.includes(h)||u.push(h);const d=[];for(const h of l){const p=a[h],g=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Hn(o,g,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof yr){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")u.length>0&&(le(o,{code:ee.unrecognized_keys,keys:u}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Hn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of d){const g=await p.key;h.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Pt.mergeObjectSync(i,h)):Pt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return pe.errToObj,new st({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=pe.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new st({...this._def,unknownKeys:"strip"})}passthrough(){return new st({...this._def,unknownKeys:"passthrough"})}extend(t){return new st({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new st({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:xe.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new st({...this._def,catchall:t})}pick(t){const n={};return qe.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new st({...this._def,shape:()=>n})}omit(t){const n={};return qe.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new st({...this._def,shape:()=>n})}deepPartial(){return Vi(this)}partial(t){const n={};return qe.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new st({...this._def,shape:()=>n})}required(t){const n={};return qe.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof gr;)a=a._def.innerType;n[i]=a}}),new st({...this._def,shape:()=>n})}keyof(){return lm(qe.objectKeys(this.shape))}}st.create=(e,t)=>new st({shape:()=>e,unknownKeys:"strip",catchall:yr.create(),typeName:xe.ZodObject,...Te(t)});st.strictCreate=(e,t)=>new st({shape:()=>e,unknownKeys:"strict",catchall:yr.create(),typeName:xe.ZodObject,...Te(t)});st.lazycreate=(e,t)=>new st({shape:e,unknownKeys:"strip",catchall:yr.create(),typeName:xe.ZodObject,...Te(t)});class so extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Tn(u.ctx.common.issues));return le(n,{code:ee.invalid_union,unionErrors:l}),Ee}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const h={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:h}),h.common.issues.length&&l.push(h.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Tn(d));return le(n,{code:ee.invalid_union,unionErrors:u}),Ee}}get options(){return this._def.options}}so.create=(e,t)=>new so({options:e,typeName:xe.ZodUnion,...Te(t)});const ka=e=>e instanceof lo?ka(e.schema):e instanceof In?ka(e.innerType()):e instanceof co?[e.value]:e instanceof Gr?e.options:e instanceof uo?Object.keys(e.enum):e instanceof fo?ka(e._def.innerType):e instanceof ro?[void 0]:e instanceof io?[null]:null;class kl extends Le{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.object)return le(n,{code:ee.invalid_type,expected:oe.object,received:n.parsedType}),Ee;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(le(n,{code:ee.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ee)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=ka(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new kl({typeName:xe.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Te(i)})}}function Ru(e,t){const n=zr(e),i=zr(t);if(e===t)return{valid:!0,data:e};if(n===oe.object&&i===oe.object){const o=qe.objectKeys(t),a=qe.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Ru(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===oe.array&&i===oe.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Ru(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===oe.date&&i===oe.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class oo extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(Au(a)||Au(l))return Ee;const u=Ru(a.value,l.value);return u.valid?((Iu(a)||Iu(l))&&n.dirty(),{status:n.value,value:u.data}):(le(i,{code:ee.invalid_intersection_types}),Ee)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}oo.create=(e,t,n)=>new oo({left:e,right:t,typeName:xe.ZodIntersection,...Te(n)});class Fn extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.array)return le(i,{code:ee.invalid_type,expected:oe.array,received:i.parsedType}),Ee;if(i.data.length<this._def.items.length)return le(i,{code:ee.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ee;!this._def.rest&&i.data.length>this._def.items.length&&(le(i,{code:ee.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Hn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Pt.mergeArray(n,l)):Pt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Fn({...this._def,rest:t})}}Fn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Fn({items:e,typeName:xe.ZodTuple,rest:null,...Te(t)})};class ao extends Le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.object)return le(i,{code:ee.invalid_type,expected:oe.object,received:i.parsedType}),Ee;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Hn(i,u,i.path,u)),value:l._parse(new Hn(i,i.data[u],i.path,u))});return i.common.async?Pt.mergeObjectAsync(n,o):Pt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Le?new ao({keyType:t,valueType:n,typeName:xe.ZodRecord,...Te(i)}):new ao({keyType:Cn.create(),valueType:t,typeName:xe.ZodRecord,...Te(n)})}}class qa extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.map)return le(i,{code:ee.invalid_type,expected:oe.map,received:i.parsedType}),Ee;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],h)=>({key:o._parse(new Hn(i,u,i.path,[h,"key"])),value:a._parse(new Hn(i,d,i.path,[h,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const h=await d.key,p=await d.value;if(h.status==="aborted"||p.status==="aborted")return Ee;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const h=d.key,p=d.value;if(h.status==="aborted"||p.status==="aborted")return Ee;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}}}}qa.create=(e,t,n)=>new qa({valueType:t,keyType:e,typeName:xe.ZodMap,...Te(n)});class bi extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.set)return le(i,{code:ee.invalid_type,expected:oe.set,received:i.parsedType}),Ee;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(le(i,{code:ee.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(le(i,{code:ee.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const h=new Set;for(const p of d){if(p.status==="aborted")return Ee;p.status==="dirty"&&n.dirty(),h.add(p.value)}return{status:n.value,value:h}}const u=[...i.data.values()].map((d,h)=>a._parse(new Hn(i,d,i.path,h)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:pe.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:pe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:xe.ZodSet,...Te(t)});class Gi extends Le{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.function)return le(n,{code:ee.invalid_type,expected:oe.function,received:n.parsedType}),Ee;function i(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),to].filter(h=>!!h),issueData:{code:ee.invalid_arguments,argumentsError:d}})}function o(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),to].filter(h=>!!h),issueData:{code:ee.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof rs?Ht(async(...u)=>{const d=new Tn([]),h=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),p=await l(...h);return await this._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})}):Ht((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Tn([i(u,d.error)]);const h=l(...d.data),p=this._def.returns.safeParse(h,a);if(!p.success)throw new Tn([o(h,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Gi({...this._def,args:Fn.create(t).rest(mi.create())})}returns(t){return new Gi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Gi({args:t||Fn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:xe.ZodFunction,...Te(i)})}}class lo extends Le{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}lo.create=(e,t)=>new lo({getter:e,typeName:xe.ZodLazy,...Te(t)});class co extends Le{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return le(n,{received:n.data,code:ee.invalid_literal,expected:this._def.value}),Ee}return{status:"valid",value:t.data}}get value(){return this._def.value}}co.create=(e,t)=>new co({value:e,typeName:xe.ZodLiteral,...Te(t)});function lm(e,t){return new Gr({values:e,typeName:xe.ZodEnum,...Te(t)})}class Gr extends Le{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return le(n,{expected:qe.joinValues(i),received:n.parsedType,code:ee.invalid_type}),Ee}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return le(n,{received:n.data,code:ee.invalid_enum_value,options:i}),Ee}return Ht(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Gr.create(t)}exclude(t){return Gr.create(this.options.filter(n=>!t.includes(n)))}}Gr.create=lm;class uo extends Le{_parse(t){const n=qe.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==oe.string&&i.parsedType!==oe.number){const o=qe.objectValues(n);return le(i,{expected:qe.joinValues(o),received:i.parsedType,code:ee.invalid_type}),Ee}if(n.indexOf(t.data)===-1){const o=qe.objectValues(n);return le(i,{received:i.data,code:ee.invalid_enum_value,options:o}),Ee}return Ht(t.data)}get enum(){return this._def.values}}uo.create=(e,t)=>new uo({values:e,typeName:xe.ZodNativeEnum,...Te(t)});class rs extends Le{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.promise&&n.common.async===!1)return le(n,{code:ee.invalid_type,expected:oe.promise,received:n.parsedType}),Ee;const i=n.parsedType===oe.promise?n.data:Promise.resolve(n.data);return Ht(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}rs.create=(e,t)=>new rs({type:e,typeName:xe.ZodPromise,...Te(t)});class In extends Le{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===xe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{le(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Ee:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Ee:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Da(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Da(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);qe.assertNever(o)}}In.create=(e,t,n)=>new In({schema:e,typeName:xe.ZodEffects,effect:t,...Te(n)});In.createWithPreprocess=(e,t,n)=>new In({schema:t,effect:{type:"preprocess",transform:e},typeName:xe.ZodEffects,...Te(n)});class gr extends Le{_parse(t){return this._getType(t)===oe.undefined?Ht(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}gr.create=(e,t)=>new gr({innerType:e,typeName:xe.ZodOptional,...Te(t)});class yi extends Le{_parse(t){return this._getType(t)===oe.null?Ht(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}yi.create=(e,t)=>new yi({innerType:e,typeName:xe.ZodNullable,...Te(t)});class fo extends Le{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===oe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}fo.create=(e,t)=>new fo({innerType:e,typeName:xe.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Te(t)});class Wa extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return za(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Wa.create=(e,t)=>new Wa({innerType:e,typeName:xe.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Te(t)});class Za extends Le{_parse(t){if(this._getType(t)!==oe.nan){const i=this._getOrReturnCtx(t);return le(i,{code:ee.invalid_type,expected:oe.nan,received:i.parsedType}),Ee}return{status:"valid",value:t.data}}}Za.create=e=>new Za({typeName:xe.ZodNaN,...Te(e)});const Gk=Symbol("zod_brand");class cm extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class wo extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ee:a.status==="dirty"?(n.dirty(),am(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ee:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new wo({in:t,out:n,typeName:xe.ZodPipeline})}}const um=(e,t={},n)=>e?ns.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,h=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...h,fatal:d})}}):ns.create(),Qk={object:st.lazycreate};var xe;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(xe||(xe={}));const Yk=(e,t={message:`Input not instance of ${e.name}`})=>um(n=>n instanceof e,t),dm=Cn.create,fm=Vr.create,Jk=Za.create,Xk=Kr.create,hm=no.create,eE=vi.create,tE=Ha.create,nE=ro.create,rE=io.create,iE=ns.create,sE=mi.create,oE=yr.create,aE=Fa.create,lE=An.create,cE=st.create,uE=st.strictCreate,dE=so.create,fE=kl.create,hE=oo.create,pE=Fn.create,gE=ao.create,mE=qa.create,vE=bi.create,bE=Gi.create,yE=lo.create,_E=co.create,wE=Gr.create,xE=uo.create,$E=rs.create,r0=In.create,kE=gr.create,EE=yi.create,CE=In.createWithPreprocess,SE=wo.create,TE=()=>dm().optional(),AE=()=>fm().optional(),IE=()=>hm().optional(),RE={string:e=>Cn.create({...e,coerce:!0}),number:e=>Vr.create({...e,coerce:!0}),boolean:e=>no.create({...e,coerce:!0}),bigint:e=>Kr.create({...e,coerce:!0}),date:e=>vi.create({...e,coerce:!0})},OE=Ee;var ot=Object.freeze({__proto__:null,defaultErrorMap:to,setErrorMap:Bk,getErrorMap:Ua,makeIssue:Na,EMPTY_PATH:jk,addIssueToContext:le,ParseStatus:Pt,INVALID:Ee,DIRTY:am,OK:Ht,isAborted:Au,isDirty:Iu,isValid:Da,isAsync:za,get util(){return qe},get objectUtil(){return Tu},ZodParsedType:oe,getParsedType:zr,ZodType:Le,ZodString:Cn,ZodNumber:Vr,ZodBigInt:Kr,ZodBoolean:no,ZodDate:vi,ZodSymbol:Ha,ZodUndefined:ro,ZodNull:io,ZodAny:ns,ZodUnknown:mi,ZodNever:yr,ZodVoid:Fa,ZodArray:An,ZodObject:st,ZodUnion:so,ZodDiscriminatedUnion:kl,ZodIntersection:oo,ZodTuple:Fn,ZodRecord:ao,ZodMap:qa,ZodSet:bi,ZodFunction:Gi,ZodLazy:lo,ZodLiteral:co,ZodEnum:Gr,ZodNativeEnum:uo,ZodPromise:rs,ZodEffects:In,ZodTransformer:In,ZodOptional:gr,ZodNullable:yi,ZodDefault:fo,ZodCatch:Wa,ZodNaN:Za,BRAND:Gk,ZodBranded:cm,ZodPipeline:wo,custom:um,Schema:Le,ZodSchema:Le,late:Qk,get ZodFirstPartyTypeKind(){return xe},coerce:RE,any:iE,array:lE,bigint:Xk,boolean:hm,date:eE,discriminatedUnion:fE,effect:r0,enum:wE,function:bE,instanceof:Yk,intersection:hE,lazy:yE,literal:_E,map:mE,nan:Jk,nativeEnum:xE,never:oE,null:rE,nullable:EE,number:fm,object:cE,oboolean:IE,onumber:AE,optional:kE,ostring:TE,pipeline:SE,preprocess:CE,promise:$E,record:gE,set:vE,strictObject:uE,string:dm,symbol:tE,transformer:r0,tuple:pE,undefined:nE,union:dE,unknown:sE,void:aE,NEVER:OE,ZodIssueCode:ee,quotelessJson:Mk,ZodError:Tn});const{decode:LE}=_o,PE=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,ME=/(?:#\[(?<idx>\d+)\])/g,BE=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,jE=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,UE=/:(?<emoji>\w+):/gu,pm=e=>{const t=[...e.matchAll(PE),...e.matchAll(ME),...e.matchAll(BE),...e.matchAll(jE),...e.matchAll(UE)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=LE(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},NE=e=>t=>e.safeParse(t).success,DE=ot.tuple([ot.literal("emoji"),ot.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),ot.string().url()]),zE=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&eo(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let HE=class extends sm{#e;#t;constructor(t){if(t.kind!==ct.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=pm(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&eo(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&eo(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=zE(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(NE(DE))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const hr=e=>new sm(e),El=e=>new HE(e),FE=()=>{const e=[...Ak];return window.navigator.language.includes("ja")&&e.push(...Ik),e},gm=()=>({relayUrls:FE(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),qE=e=>JSON.stringify(e),WE=e=>({...gm(),...JSON.parse(e)}),ZE=Lx(()=>window.localStorage,qE,WE),[Fs,Kt]=Px("RabbitConfig",gm(),ZE),Pe=()=>{const e=$=>{Kt("relayUrls",A=>pr([...A,$]))},t=$=>{Kt("relayUrls",A=>A.filter(R=>R!==$))},n=$=>{Kt("mutedPubkeys",A=>pr([...A,$]))},i=$=>{Kt("mutedPubkeys",A=>A.filter(R=>R!==$))},o=$=>{Kt("mutedKeywords",A=>pr([...A,$]))},a=$=>{Kt("mutedKeywords",A=>A.filter(R=>R!==$))},l=$=>{Kt("columns",A=>{const R=A.findIndex(T=>T.id===$.id);if(R>=0){const T=[...A];return T.splice(R,1,$),T}return[...A,$]})},u=($,A)=>{Kt("columns",R=>{const T=A-1,M=Math.max(Math.min(T,R.length),0),C=R.findIndex(te=>te.id===$);if(C<0||M===C)return R;console.log(C,M);const L=[...R],[U]=L.splice(C,1);return L.splice(M,0,U),L})},d=$=>{Kt("columns",A=>A.filter(R=>R.id!==$))},h=$=>{Kt("customEmojis",A=>({...A,[$.shortcode]:$}))},p=$=>{Kt("customEmojis",A=>{const R=Object.fromEntries($.map(T=>[T.shortcode,T]));return{...A,...R}})},g=$=>{Kt("customEmojis",A=>({...A,[$]:void 0}))},v=$=>Fs.customEmojis[$],w=$=>Fs.mutedPubkeys.includes($),k=$=>$.kind===ct.Text?Fs.mutedKeywords.some(A=>$.content.includes(A)):!1;return{config:()=>Fs,setConfig:Kt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:$})=>{if((Fs.columns?.length??0)>0)return;const A=[X1({width:"widest",pubkey:$}),em({pubkey:$}),nm({name:"自分の投稿",pubkey:$}),rm({name:"自分のリアクション",pubkey:$})];navigator.language.includes("ja")&&A.splice(2,0,tm()),Kt("columns",()=>[...A])},saveEmoji:h,saveEmojis:p,removeEmoji:g,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:w,shouldMuteEvent:$=>{const A=hr($);return w($.pubkey)||A.taggedPubkeys().some(w)||$.kind===ct.Text&&k($)}}},VE=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},KE=e=>{const t=De(e),n=De(()=>t().batchSize??100),i=De(()=>t().interval??2e3),[o,a]=_e(0),[l,u]=_e([]);let d;const h=()=>{const{executor:x}=t(),E=l();E.length>0&&(u([]),x(E)),d!=null&&clearTimeout(d),d=void 0},p=()=>{const x=o();return a(E=>E+1),x},g=()=>{d==null&&(d=setTimeout(()=>{h()},i()))},v=x=>{l().length<n()?u(E=>[...E,x]):(h(),u([x]))},w=x=>{u(E=>E.filter($=>$.id!==x))};return{exec:async(x,E)=>{const{promise:$,resolve:A,reject:R}=VE(),T=p();return v({id:T,args:x,resolve:A,reject:R}),g(),E?.addEventListener("abort",()=>{w(T),R(new Error("AbortError"))}),$}}},[GE]=_e(new C9),Cl=()=>GE,[mm,i0]=Yi({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...mm})},1e3);const vm=()=>({stats:mm,setActiveSubscriptions:n=>i0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>i0("activeBatchSubscriptions",n)});let Ou=0;const{setActiveBatchSubscriptions:QE}=vm();setInterval(()=>{QE(Ou)},1e3);const YE={events:[],completed:!0},JE=()=>YE,XE=e=>e.kind>=3e4&&e.kind<4e4,eC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{exec:vs}=KE(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(C=>{if(C.args.type==="Event"){const L=n.get(C.args.eventId)??[];n.set(C.args.eventId,[...L,C])}else if(C.args.type==="Profile"){const L=t.get(C.args.pubkey)??[];t.set(C.args.pubkey,[...L,C])}else if(C.args.type==="Reactions"){const L=i.get(C.args.mentionedEventId)??[];i.set(C.args.mentionedEventId,[...L,C])}else if(C.args.type==="Reposts"){const L=o.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...L,C])}else if(C.args.type==="ZapReceipts"){const L=a.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...L,C])}else if(C.args.type==="ParameterizedReplaceableEvent"){const L=eC(C.args),U=l.get(L)??[];l.set(L,[...U,C])}else if(C.args.type==="Followings"){const L=u.get(C.args.pubkey)??[];u.set(C.args.pubkey,[...L,C])}});const d=[...n.keys()],h=[...t.keys()],p=[...i.keys()],g=[...o.keys()],v=[...a.keys()],w=[...u.keys()],k=[];if(d.length>0&&k.push({ids:d}),h.length>0&&k.push({kinds:[ct.Metadata],authors:h}),p.length>0&&k.push({kinds:[ct.Reaction],"#e":p}),g.length>0&&k.push({kinds:[6],"#e":g}),v.length>0&&k.push({kinds:[9735],"#e":v}),w.length>0&&k.push({kinds:[ct.Contacts],authors:w}),l.size>0&&Array.from(l.values()).forEach(([C])=>{if(C.args.type!=="ParameterizedReplaceableEvent")return;const{args:{kind:L,author:U,identifier:te}}=C;k.push({kinds:[L],authors:[U],"#d":[te]})}),k.length===0)return;const x=new Map,E=(C,L)=>{C.forEach(U=>{const te=x.get(U.id)??_e({events:[],completed:!1});x.set(U.id,te);const[W,Q]=te;Q(q=>({...q,events:[...q.events,L]})),U.resolve(W)})},$=()=>{e.forEach(C=>{const L=x.get(C.id);if(L!=null){const U=L[1];U(te=>({...te,completed:!0}))}else C.resolve(JE)})},{config:A,shouldMuteEvent:R}=Pe(),M=Cl()().sub(A().relayUrls,k,{});Ou+=1,M.on("event",C=>{if(C.kind===ct.Metadata){const L=t.get(C.pubkey)??[];E(L,C);return}if(C.kind===ct.Reaction){const L=hr(C).lastTaggedEventId();if(L!=null){const U=i.get(L)??[];E(U,C)}}else if(C.kind===6){const L=hr(C).lastTaggedEventId();if(L!=null){const U=o.get(L)??[];E(U,C)}}else if(C.kind===ct.Zap)hr(C).eTags().forEach(([,U])=>{const te=o.get(U)??[];E(te,C)});else if(C.kind===ct.Contacts){const L=u.get(C.pubkey)??[];E(L,C)}else if(XE(C)){const L=hr(C).findFirstTagByName("d")?.[1];if(L!=null){const U=`${C.kind}:${C.pubkey}:${L}`,te=l.get(U)??[];E(te,C)}else console.warn("identifier is undefined")}else{const L=n.get(C.id)??[];L.length>0?E(L,C):console.warn("unknown event received")}}),M.on("eose",()=>{$(),M.unsub(),Ou-=1})}})),kd=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),wr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(l))},e)});return Promise.race([n,i])},bm=e=>{const t=De(e),n=wi(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=vs({type:"Event",eventId:u},a).then(h=>{const p=h().events[0];if(p==null)throw new Error(`event not found: ${u}`);return p});return wr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},on=e=>t=>e.some(n=>n==null)?null:t(e),tC=j("<span>投稿が見つかりません"),nC=j('<div class="truncate">読み込み中 '),is=e=>{const[t,n]=Ex(e,["eventId"]),{shouldMuteEvent:i}=Pe(),{event:o,query:a}=bm(()=>on([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return _(Sn,{get fallback(){return(()=>{const u=tC();return u.firstChild,O(u,()=>e.eventId,null),u})()},get children(){return[_(He,{get when(){return l()},children:null}),_(He,{get when(){return o()},keyed:!0,children:u=>_(sv,Cx({event:u},n))}),_(He,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=nC();return d.firstChild,O(d,_(Xs,{eventId:u}),null),d})()})]}})},rC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},iC=e=>{try{return rC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},sC={staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3},oC=({queryKey:e,signal:t,queryClient:n})=>{const[,i]=e;if(i==null)return Promise.resolve(null);const{pubkey:o}=i,a=vs({type:"Profile",pubkey:o},t).then(l=>{const u=()=>{const d=kd(l().events);if(d==null)throw new Error(`profile not found: ${o}`);return d};return ho(l).subscribe(()=>{try{n.setQueryData(e,u())}catch(d){console.error("error occurred while updating profile cache: ",d)}}),u()});return wr(15e3,`useProfile: ${o}`)(a)},bs=e=>{const t=_i(),n=De(e),i=De(()=>["useProfile",n()]),o=wi(i,({queryKey:u,signal:d})=>oC({queryKey:u,signal:d,queryClient:t}),sC);return{profile:De(()=>{if(o.data==null)return null;const{content:u}=o.data;return iC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:aC}=_o,Sl=e=>{try{return aC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Tl=e=>{const{profile:t}=bs(()=>({pubkey:e.pubkey}));return _(Sn,{get fallback(){return Sl(e.pubkey)},get children(){return[_(He,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),_(He,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",De(()=>t()?.name)]}})]}})},ym=e=>{const[t,n]=_e(new Date);return Un(()=>{const i=setInterval(()=>{n(new Date)},e().interval);vr(()=>clearInterval(i))}),t},lC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},s0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,cC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},uC=e=>{switch(e.kind){case"today":return s0(e.value);case"yesterday":return`昨日 ${s0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},dC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,fC=(e,t)=>{const n=dC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},o0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),hC=e=>new Date(+e-24*60*60*1e3),_m=(e,t,n)=>o0(e,t)?n({kind:"today",value:e}):o0(e,hC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),pC=(e,t=new Date)=>_m(e,t,cC),gC=(e,t=new Date)=>_m(e,t,uC),a0=(e,t=new Date,n=lC)=>n(fC(e,t)),l0=ym(()=>({interval:7e3})),c0=ym(()=>({interval:60*1e3})),wm=()=>{const{config:e}=Pe();return t=>{switch(e().dateFormat){case"absolute-long":return pC(t,c0());case"absolute-short":return gC(t,c0());case"relative":return a0(t,l0());default:return a0(t,l0())}}},[mC,Wi]=_e({type:"Closed"}),Yr=()=>({modalState:mC,setModalState:Wi,showProfile:a=>{Wi({type:"Profile",pubkey:a})},showProfileEdit:()=>{Wi({type:"ProfileEdit"})},showAddColumn:()=>{Wi({type:"AddColumn"})},showAbout:()=>{Wi({type:"About"})},closeModal:()=>{Wi({type:"Closed"})}}),vC=j('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),xm=e=>{const{showProfile:t}=Yr(),n=wm(),i=De(()=>hr(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=vC(),l=a.firstChild,u=l.firstChild,d=u.nextSibling,h=d.firstChild,p=d.nextSibling,g=l.nextSibling;return O(u,_(Y1,{})),h.$$click=()=>t(e.event.pubkey),O(h,_(Tl,{get pubkey(){return e.event.pubkey}})),O(p,()=>n(i().createdAtAsDate())),O(g,_(is,{get eventId(){return o()}})),a})()};at(["click"]);const bC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),yC=(e={})=>(()=>{const t=bC();return Ze(t,e,!0,!0),t})(),_C=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),$m=(e={})=>(()=>{const t=_C();return Ze(t,e,!0,!0),t})(),wC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Ed=(e={})=>(()=>{const t=wC();return Ze(t,e,!0,!0),t})(),xC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),km=(e={})=>(()=>{const t=xC();return Ze(t,e,!0,!0),t})(),$C=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Cd=(e={})=>(()=>{const t=$C();return Ze(t,e,!0,!0),t})(),kC=j('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Sd=e=>{let t,n;const[i,o]=_e(!1),[a,l]=_e({}),u=Sx(()=>e.children),d=()=>o(!1),h=()=>o(k=>!k),p=k=>{const x=k.target;x!=null&&!n?.contains(x)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},w=()=>{if(t==null||n==null)return;const k=t?.getBoundingClientRect(),x=n?.getBoundingClientRect();let{top:E,left:$}=k;e.position==="left"?$-=k.width:e.position==="right"?$+=k.width:e.position==="top"?(E-=k.height,$-=k.left+k.width/2):(E+=k.height,$+=k.width/2),E=Math.min(E,window.innerHeight-x.height),$=Math.min($,window.innerWidth-x.width),l({left:`${$}px`,top:`${E}px`})};return Un(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),Un(rl(u,()=>{w()})),Un(()=>{i()&&w()}),an(()=>{e.ref?.({close:d})}),vr(()=>v()),(()=>{const k=kC(),x=k.firstChild,E=x.nextSibling;x.$$click=()=>{h(),w()};const $=t;typeof $=="function"?br($,x):t=x,O(x,()=>e.button);const A=n;return typeof A=="function"?br(A,E):n=E,O(E,u),Me(R=>{const T=!i(),M=!!i(),C=a();return T!==R._v$&&E.classList.toggle("hidden",R._v$=T),M!==R._v$2&&E.classList.toggle("block",R._v$2=M),R._v$3=Tx(E,C,R._v$3),R},{_v$:void 0,_v$2:void 0,_v$3:void 0}),k})()};at(["click"]);const EC=j('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),CC=j('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),SC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=EC(),i=n.firstChild;return i.$$click=t,O(i,()=>e.item.content()),n})()},Em=e=>{let t;const n=()=>t?.close();return _(Sd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=CC();return O(i,_(It,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>_(SC,{item:o,onClose:n})})),i}})};at(["click"]);function Cm(e){return e&&e.__esModule?e.default:e}function kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Al,me,Sm,Zs,Tm,u0,Va={},Am=[],TC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Hr(e,t){for(var n in t)e[n]=t[n];return e}function Im(e){var t=e.parentNode;t&&t.removeChild(e)}function Lu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Al.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Ea(e,l,i,o,null)}function Ea(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Sm};return o==null&&me.vnode!=null&&me.vnode(a),a}function cr(){return{current:null}}function ss(e){return e.children}function Nn(e,t){this.props=e,this.context=t}function os(e,t){if(t==null)return e.__?os(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?os(e):null}function Rm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Rm(e)}}function d0(e){(!e.__d&&(e.__d=!0)&&Zs.push(e)&&!Ka.__r++||u0!==me.debounceRendering)&&((u0=me.debounceRendering)||Tm)(Ka)}function Ka(){for(var e;Ka.__r=Zs.length;)e=Zs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Zs=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Hr({},a)).__v=a.__v+1,Td(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??os(a),a.__h),Mm(i,a),a.__e!=l&&Rm(a)))})}function Om(e,t,n,i,o,a,l,u,d,h){var p,g,v,w,k,x,E,$=i&&i.__k||Am,A=$.length;for(n.__k=[],p=0;p<t.length;p++)if((w=n.__k[p]=(w=t[p])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?Ea(null,w,null,null,w):Array.isArray(w)?Ea(ss,{children:w},null,null,null):w.__b>0?Ea(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(v=$[p])===null||v&&w.key==v.key&&w.type===v.type)$[p]=void 0;else for(g=0;g<A;g++){if((v=$[g])&&w.key==v.key&&w.type===v.type){$[g]=void 0;break}v=null}Td(e,w,v=v||Va,o,a,l,u,d,h),k=w.__e,(g=w.ref)&&v.ref!=g&&(E||(E=[]),v.ref&&E.push(v.ref,null,w),E.push(g,w.__c||k,w)),k!=null?(x==null&&(x=k),typeof w.type=="function"&&w.__k===v.__k?w.__d=d=Lm(w,d,e):d=Pm(e,w,v,$,k,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=os(v))}for(n.__e=x,p=A;p--;)$[p]!=null&&(typeof n.type=="function"&&$[p].__e!=null&&$[p].__e==n.__d&&(n.__d=os(i,p+1)),jm($[p],$[p]));if(E)for(p=0;p<E.length;p++)Bm(E[p],E[++p],E[++p])}function Lm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Lm(i,t,n):Pm(n,i,i,o,i.__e,t));return t}function Ga(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ga(n,t)}):t.push(e)),t}function Pm(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function AC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Qa(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Qa(e,a,t[a],n[a],i)}function f0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||TC.test(t)?n:n+"px"}function Qa(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||f0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||f0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?p0:h0,a):e.removeEventListener(t,a?p0:h0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function h0(e){this.l[e.type+!1](me.event?me.event(e):e)}function p0(e){this.l[e.type+!0](me.event?me.event(e):e)}function Td(e,t,n,i,o,a,l,u,d){var h,p,g,v,w,k,x,E,$,A,R,T=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(h=me.__b)&&h(t);try{e:if(typeof T=="function"){if(E=t.props,$=(h=T.contextType)&&i[h.__c],A=h?$?$.props.value:h.__:i,n.__c?x=(p=t.__c=n.__c).__=p.__E:("prototype"in T&&T.prototype.render?t.__c=p=new T(E,A):(t.__c=p=new Nn(E,A),p.constructor=T,p.render=RC),$&&$.sub(p),p.props=E,p.state||(p.state={}),p.context=A,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),T.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Hr({},p.__s)),Hr(p.__s,T.getDerivedStateFromProps(E,p.__s))),v=p.props,w=p.state,g)T.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(T.getDerivedStateFromProps==null&&E!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,A),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(E,p.__s,A)===!1||t.__v===n.__v){p.props=E,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,A),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,w,k)})}p.context=A,p.props=E,p.state=p.__s,(h=me.__r)&&h(t),p.__d=!1,p.__v=t,p.__P=e,h=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Hr(Hr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(k=p.getSnapshotBeforeUpdate(v,w)),R=h!=null&&h.type===ss&&h.key==null?h.props.children:h,Om(e,Array.isArray(R)?R:[R],t,n,i,o,a,l,u,d),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),x&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=IC(n.__e,t,n,i,o,a,l,d);(h=me.diffed)&&h(t)}catch(M){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),me.__e(M,t,n)}}function Mm(e,t){me.__c&&me.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){me.__e(i,n.__v)}})}function IC(e,t,n,i,o,a,l,u){var d,h,p,g=n.props,v=t.props,w=t.type,k=0;if(w==="svg"&&(o=!0),a!=null){for(;k<a.length;k++)if((d=a[k])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){e=d,a[k]=null;break}}if(e==null){if(w===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,v.is&&v),a=null,u=!1}if(w===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Al.call(e.childNodes),h=(g=n.props||Va).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},k=0;k<e.attributes.length;k++)g[e.attributes[k].name]=e.attributes[k].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(AC(e,v,g,o,u),p)t.__k=[];else if(k=t.props.children,Om(e,Array.isArray(k)?k:[k],t,n,i,o&&w!=="foreignObject",a,l,a?a[0]:n.__k&&os(n,0),u),a!=null)for(k=a.length;k--;)a[k]!=null&&Im(a[k]);u||("value"in v&&(k=v.value)!==void 0&&(k!==g.value||k!==e.value||w==="progress"&&!k)&&Qa(e,"value",k,g.value,!1),"checked"in v&&(k=v.checked)!==void 0&&k!==e.checked&&Qa(e,"checked",k,g.checked,!1))}return e}function Bm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){me.__e(i,n)}}function jm(e,t,n){var i,o;if(me.unmount&&me.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Bm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){me.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&jm(i[o],t,typeof e.type!="function");n||e.__e==null||Im(e.__e),e.__e=e.__d=void 0}function RC(e,t,n){return this.constructor(e,n)}function Um(e,t,n){var i,o,a;me.__&&me.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Td(t,e=(!i&&n||t).__k=Lu(ss,null,[e]),o||Va,Va,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Al.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),Mm(a,e)}Al=Am.slice,me={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Sm=0,Nn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Hr({},this.state),typeof e=="function"&&(e=e(Hr({},n),this.props)),e&&Hr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),d0(this))},Nn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),d0(this))},Nn.prototype.render=ss,Zs=[],Tm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ka.__r=0;var OC=0;function V(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--OC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return me.vnode&&me.vnode(d),d}function LC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function PC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var qr={set:LC,get:PC};const ou=new Map,MC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function BC(){for(const{v:e,emoji:t}of MC)if(Nm(t))return e}function jC(){return!Nm("🇨🇦")}function Nm(e){if(ou.has(e))return ou.get(e);const t=UC(e);return ou.set(e,t),t}const UC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,h=Math.floor(u/4/n),p=e.getImageData(d,h,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var g0={latestVersion:BC,noCountryFlags:jC};const Pu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Tt=null;function NC(e){Tt||(Tt=qr.get("frequently")||{});const t=e.id||e;t&&(Tt[t]||(Tt[t]=0),Tt[t]+=1,qr.set("last",t),qr.set("frequently",Tt))}function DC({maxFrequentRows:e,perLine:t}){if(!e)return[];Tt||(Tt=qr.get("frequently"));let n=[];if(!Tt){Tt={};for(let a in Pu.slice(0,t)){const l=Pu[a];Tt[l]=t-a,n.push(l)}return n}const i=e*t,o=qr.get("last");for(let a in Tt)n.push(a);if(n.sort((a,l)=>{const u=Tt[l],d=Tt[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Tt[l];o&&n.indexOf(o)==-1&&(delete Tt[n[n.length-1]],n.splice(-1,1,o)),qr.set("frequently",Tt)}return n}var Dm={add:NC,get:DC,DEFAULTS:Pu},zm={};zm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var fr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Lt=null,je=null;const au={};async function m0(e){if(au[e])return au[e];const n=await(await fetch(e)).json();return au[e]=n,n}let lu=null,Hm=null,Fm=!1;function Il(e,{caller:t}={}){return lu||(lu=new Promise(n=>{Hm=n})),e?zC(e):t&&!Fm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),lu}async function zC(e){Fm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=fr.emojiVersion.value),n||(n=fr.set.value),i||(i=fr.locale.value),je)je.categories=je.categories.filter(d=>!d.name);else{je=(typeof e.data=="function"?await e.data():e.data)||await m0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),je.emoticons={},je.natives={},je.categories.unshift({id:"frequent",emojis:[]});for(const d in je.aliases){const h=je.aliases[d],p=je.emojis[h];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}je.originalCategories=je.categories}if(Lt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Cm(zm):await m0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const h=e.custom[d],p=e.custom[d-1];if(!(!h.emojis||!h.emojis.length)){h.id||(h.id=`custom_${d+1}`),h.name||(h.name=Lt.categories.custom),p&&!h.icon&&(h.target=p.target||p),je.categories.push(h);for(const g of h.emojis)je.emojis[g.id]=g}}e.categories&&(je.categories=je.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,h)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(h.id);return p-g}));let o=null,a=null;n=="native"&&(o=g0.latestVersion(),a=e.noCountryFlags||g0.noCountryFlags());let l=je.categories.length,u=!1;for(;l--;){const d=je.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:fr.maxFrequentRows.value,v||(v=fr.perLine.value),d.emojis=Dm.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){je.categories.splice(l,1);continue}const{categoryIcons:h}=e;if(h){const g=h[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:je.emojis[g],w=()=>{d.emojis.splice(p,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){w();continue}if(o&&v.version>o){w();continue}if(a&&d.id=="flags"&&!ZC.includes(v.id)){w();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([x,E])=>{if(x)return(Array.isArray(x)?x:[x]).map($=>(E?$.split(/[-|_|\s]+/):[$]).map(A=>A.toLowerCase())).flat()}).flat().filter(x=>x&&x.trim()).join(","),v.emoticons)for(const x of v.emoticons)je.emoticons[x]||(je.emoticons[x]=v.id);let k=0;for(const x of v.skins){if(!x)continue;k++;const{native:E}=x;E&&(je.natives[E]=v.id,v.search+=`,${E}`);const $=k==1?"":`:skin-tone-${k}:`;x.shortcodes=`:${v.id}:${$}`}}}}u&&Qi.reset(),Hm()}function qm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Wm(o,e,t,n);return i}function Wm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const HC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Mu=null;function FC(e){return e.id?e:je.emojis[e]||je.emojis[je.aliases[e]]||je.emojis[je.natives[e]]}function qC(){Mu=null}async function WC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Il(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,h)=>u.trim()&&h.indexOf(u)==d);if(!i.length)return;let o=Mu||(Mu=Object.values(je.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const h=d.search.indexOf(`,${u}`);h!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:h+1)}o=a}return a.length<2||(a.sort((u,d)=>{const h=l[u.id],p=l[d.id];return h==p?u.id.localeCompare(d.id):h-p}),a.length>t&&(a=a.slice(0,t))),a}var Qi={search:WC,get:FC,reset:qC,SHORTCODES_REGEX:HC};const ZC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function VC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function KC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function GC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const QC={activity:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:V("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),V("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),V("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:V("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),V("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:V("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),V("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),V("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},YC={loupe:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:V("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:V("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ya={categories:QC,search:YC};function Bu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return V("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?V("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?V("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):V("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*je.sheet.cols}% ${100*je.sheet.rows}%`,backgroundPosition:`${100/(je.sheet.cols-1)*o.x}% ${100/(je.sheet.rows-1)*o.y}%`}})})}const JC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Zm extends JC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Wm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class XC extends Zm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Vm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:fr.set,skin:fr.skin};class Km extends Zm{async connectedCallback(){const t=qm(this.props,Vm,this);t.element=this,t.ref=n=>{this.component=n},await Il(),!this.disconnected&&Um(V(Bu,{...t}),this)}constructor(t){super(t)}}kn(Km,"Props",Vm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Km);var v0,ju=[],b0=me.__b,y0=me.__r,_0=me.diffed,w0=me.__c,x0=me.unmount;function eS(){var e;for(ju.sort(function(t,n){return t.__v.__b-n.__v.__b});e=ju.pop();)if(e.__P)try{e.__H.__h.forEach(Ca),e.__H.__h.forEach(Uu),e.__H.__h=[]}catch(t){e.__H.__h=[],me.__e(t,e.__v)}}me.__b=function(e){b0&&b0(e)},me.__r=function(e){y0&&y0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ca),t.__h.forEach(Uu),t.__h=[])},me.diffed=function(e){_0&&_0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ju.push(t)!==1&&v0===me.requestAnimationFrame||((v0=me.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),$0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);$0&&(i=requestAnimationFrame(o))})(eS))},me.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ca),n.__h=n.__h.filter(function(i){return!i.__||Uu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],me.__e(i,n.__v)}}),w0&&w0(e,t)},me.unmount=function(e){x0&&x0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ca(i)}catch(o){t=o}}),t&&me.__e(t,n.__v))};var $0=typeof requestAnimationFrame=="function";function Ca(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Uu(e){e.__c=e.__()}function tS(e,t){for(var n in t)e[n]=t[n];return e}function k0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ja(e){this.props=e}(Ja.prototype=new Nn).isPureReactComponent=!0,Ja.prototype.shouldComponentUpdate=function(e,t){return k0(this.props,e)||k0(this.state,t)};var E0=me.__b;me.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),E0&&E0(e)};var nS=me.__e;me.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}nS(e,t,n)};var C0=me.unmount;function cu(){this.__u=0,this.t=null,this.__b=null}function Gm(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ya(){this.u=null,this.o=null}me.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),C0&&C0(e)},(cu.prototype=new Nn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Gm(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var h=i.state.__e;i.__v.__k[0]=function g(v,w,k){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(x){return g(x,w,k)}),v.__c&&v.__c.__P===w&&(v.__e&&k.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=k)),v}(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},cu.prototype.componentWillUnmount=function(){this.t=[]},cu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),l.__c.__H=null),(l=tS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(h){return a(h,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Lu(ss,null,e.fallback);return o&&(o.__h=null),[Lu(ss,null,t.__e?null:e.children),o]};var S0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ya.prototype=new Nn).__e=function(e){var t=this,n=Gm(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),S0(t,e,i)):o()};n?n(a):a()}},ya.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ga(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ya.prototype.componentDidUpdate=ya.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){S0(e,n,t)})};var rS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,iS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,sS=typeof document<"u",oS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Nn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Nn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var T0=me.event;function aS(){}function lS(){return this.cancelBubble}function cS(){return this.defaultPrevented}me.event=function(e){return T0&&(e=T0(e)),e.persist=aS,e.isPropagationStopped=lS,e.isDefaultPrevented=cS,e.nativeEvent=e};var A0={configurable:!0,get:function(){return this.class}},I0=me.vnode;me.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];sS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!oS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&iS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(A0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",A0))}e.$$typeof=rS,I0&&I0(e)};var R0=me.__r;me.__r=function(e){R0&&R0(e),e.__c};const uS={light:"outline",dark:"solid"};class dS extends Ja{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return V("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return V("img",{src:n.src})}const i=Ya.categories[t.id]||Ya.categories.custom,o=this.props.icons=="auto"?uS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return V("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:V("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Lt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),V("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),V("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=je.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class fS extends Ja{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const _a={rowsPerRender:10};class hS extends Nn{getInitialState(t=this.props){return{skin:qr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Lt.rtl?"rtl":"ltr",this.refs={menu:cr(),navigation:cr(),scroll:cr(),search:cr(),searchInput:cr(),skinToneButton:cr(),skinToneRadio:cr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Il(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=je;this.refs.categories=new Map;const n=je.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%_a.rowsPerRender?{}:cr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:cr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const h=d.target.dataset.id;n.set(h,d.intersectionRatio)}const u=[...n];for(const[d,h]of u)if(h){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(_a.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*_a.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,h]=this.state.pos;const p=(()=>{if(d==0&&h==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(h+=v,!g[h]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,h=i?0:u[d].length-1,[d,h];h=i?g.length-1:0}return[d,h]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[h]||(h=g.length-1),[d,h]):(d=a?0:u.length-1,h=a?0:u[d].length-1,[d,h])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,h=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(h>o.scrollTop+a.height)l=h-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=GC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Dm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),qr.set("skin",t)}renderNav(){return V(dS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return V("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[V("div",{class:"flex flex-middle flex-grow",children:[V("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:V(Bu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),V("div",{class:`margin-${this.dir[0]}`,children:t||n?V("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[V("div",{class:"preview-title ellipsis",children:t?t.name:Lt.search_no_results_1}),V("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Lt.search_no_results_2})]}):V("div",{class:"preview-placeholder color-c",children:Lt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,h=VC(this.state.pos,n),p=n.concat(t.id).join("");return V(fS,{selected:h,skin:l,size:a,children:V("button",{"aria-label":d,"aria-selected":h||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[V("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),V(Bu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return V("div",{children:[V("div",{class:"spacer"}),V("div",{class:"flex flex-middle",children:[V("div",{class:"search relative flex-grow",children:[V("input",{type:"search",ref:this.refs.searchInput,placeholder:Lt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),V("span",{class:"icon loupe flex",children:Ya.search.loupe}),this.state.searchResults&&V("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ya.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?V("div",{class:"category",ref:this.refs.search,children:[V("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Lt.categories.search}),V("div",{children:t.length?t.map((n,i)=>V("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):V("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&V("a",{onClick:this.props.onAddCustomEmoji,children:Lt.add_custom})})})]}):null}renderCategories(){const{categories:t}=je,n=!!this.state.searchResults,i=this.getPerLine();return V("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return V("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[V("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Lt.categories[o.id]}),V("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const h=u.index-u.index%_a.rowsPerRender,p=this.state.visibleRows[h],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,w=v+i,k=o.emojis.slice(v,w);return k.length<i&&k.push(...new Array(i-k.length)),V("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&k.map((x,E)=>{if(!x)return V("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const $=Qi.get(x);return this.renderEmojiButton($,{pos:[u.index,E],posinset:u.posinset+E,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:V("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:V("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Lt.skins.choose,title:Lt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:V("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return V("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),V("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Lt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return V("div",{children:[V("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Lt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),V("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[V("span",{class:`skin-tone skin-tone-${l}`}),V("span",{class:"margin-small-lr",children:Lt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return V("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&V("div",{class:"padding-lr",children:this.renderSearch()}),V("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:V("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),kn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),kn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),kn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),kn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),kn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let h of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(h);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),kn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),kn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),kn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),kn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await KC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Ad extends XC{async connectedCallback(){const t=qm(this.props,fr,this);t.element=this,t.ref=n=>{this.component=n},await Il(t),!this.disconnected&&Um(V(hS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Cm(Qm)})}}kn(Ad,"Props",fr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Ad);var Qm={};Qm=`:host {
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

`;const Ym=e=>{let t;const[n,i]=_e(void 0);return _(Sd,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new Ad({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},pS=j("<div>"),gS=j('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),mS=j("<br>"),vS=j("<span>理由: "),bS=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),yS=e=>{const[t,n]=_e(!1);return _(ue,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=bS();return i.firstChild,i.$$click=()=>n(!0),O(i,_(ue,{get when(){return e.contentWarning.reason!=null},get children(){return[mS(),(()=>{const o=vS();return o.firstChild,O(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=pS();return O(i,()=>e.children),i})(),_(ue,{get when(){return e.contentWarning.contentWarning},get children(){const i=gS();return i.$$click=()=>n(!1),i}})]}})};at(["click"]);const Jm=e=>{const{profile:t}=bs(()=>({pubkey:e.pubkey}));return _(ue,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Sl(e.pubkey)}`},get children(){return["@",De(()=>t()?.name??e.pubkey)]}})},_S=j('<a target="_blank" rel="noreferrer noopener">'),Rl=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return _(ue,{get when(){return t()},get fallback(){return e.href},get children(){const n=_S();return O(n,()=>e.children??e.href),Me(i=>{const o=e.class,a=e.href;return o!==i._v$&&Sg(n,i._v$=o),a!==i._v$2&&ht(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},wS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},xS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},$S=j('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),kS=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),ES=e=>{let t;const[n,i]=_e(e.initialHidden);return _(ue,{get when(){return!n()},get fallback(){return(()=>{const o=kS();return o.$$click=()=>i(!1),o})()},get children(){return _(Rl,{class:"my-2 block",get href(){return e.url},get children(){const o=$S(),a=t;return typeof a=="function"?br(a,o):t=o,Me(l=>{const u=xS(e.url),d=e.url;return u!==l._v$&&ht(o,"src",l._v$=u),d!==l._v$2&&ht(o,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),o}})}})};at(["click"]);const CS=j('<div class="my-1 rounded border p-1">'),SS=e=>_(ue,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return _(Xs,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=CS();return O(t,_(is,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ct.Text]}})),t}}),TS=j('<button class="inline text-blue-500 underline">'),uu=e=>{const{showProfile:t}=Yr(),n=()=>{t(e.pubkey)};return(()=>{const i=TS();return i.$$click=n,O(i,_(Jm,{get pubkey(){return e.pubkey}})),i})()};at(["click"]);const[Id,AS]=_e({}),Xm=e=>{Id()[e]==null&&AS(t=>({...t,[e]:new MessageChannel}))},IS=e=>{const t=()=>Id()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const h=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",h),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",h),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",h,!1),t().port1.start()});return an(()=>{const{id:o}=e();Xm(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},RS=e=>{const t=De(e),n=()=>Id()[t().id];an(()=>{const{id:i}=t();Xm(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,h=t().handler(d);(h instanceof Promise?h:Promise.resolve(h)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),vr(()=>{o.removeEventListener("message",a)})})},xo=()=>IS(()=>({id:"CommandChannel"})),Nu=e=>{RS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},du=j("<span>"),O0=j('<div class="my-1 rounded border p-1">'),OS=j('<span class="text-blue-500 underline">'),LS=j('<button class="text-blue-500 underline">'),PS=j('<img class="inline-block h-8 max-w-[128px] align-middle">'),MS=e=>{const{config:t,saveColumn:n}=Pe(),i=xo(),o=()=>El(e.event),a=l=>{n($d({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return _(It,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=du();return O(u,()=>l.content),u})();if(l.type==="URL")return wS(l.content)?_(ES,{get url(){return l.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):_(Rl,{class:"text-blue-500 underline",get href(){return l.content}});if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=du();return O(d,()=>l.content),d})();if(u.type==="MentionedUser")return _(uu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?_(SS,{mentionedEvent:u}):_(Xs,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=O0();return O(u,_(is,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ct.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=O0();return O(u,_(is,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?_(uu,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?_(uu,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=OS();return O(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=LS();return u.$$click=()=>a(l.content),O(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=du();return O(d,()=>l.content),d})():(()=>{const d=PS();return ht(d,"src",u),Me(h=>{const p=l.content,g=l.shortcode;return p!==h._v$&&ht(d,"alt",h._v$=p),g!==h._v$2&&ht(d,"title",h._v$2=g),h},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};at(["click"]);const BS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),as=(e={})=>(()=>{const t=BS();return Ze(t,e,!0,!0),t})(),jS=j('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),US=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=jS();i.$$click=n;const o=t;return typeof o=="function"?br(o,i):t=i,O(i,()=>e.children),i})()};at(["click"]);const NS=j('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),ys=e=>_(US,{onClose:()=>e.onClose?.(),get children(){const t=NS(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),O(i,_(ue,{get when(){return e?.closeButton},get fallback(){return _(as,{})},keyed:!0,children:a=>a()})),O(o,()=>e.children),t}});at(["click"]);const DS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),zS=(e={})=>(()=>{const t=DS();return Ze(t,e,!0,!0),t})(),HS=j('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),FS=j('<div class="relative inline-block"><button type="button">'),qS=e=>{const[t,n]=_e(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=FS(),a=o.firstChild;return a.$$click=i,O(a,_(zS,{})),O(o,_(ue,{get when(){return t()},get children(){return HS()}}),null),Me(()=>Sg(a,e.class)),o})()};at(["click"]);const WS=j('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),ZS=e=>{const t=De(()=>JSON.stringify(e.event,null,2));return _(ys,{get onClose(){return e.onClose},get children(){const n=WS(),i=n.firstChild,o=i.nextSibling;return O(i,t),O(o,_(qS,{class:"h-4 w-4",get text(){return t()}})),n}})},VS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),ev=(e={})=>(()=>{const t=VS();return Ze(t,e,!0,!0),t})(),KS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),GS=(e={})=>(()=>{const t=KS();return Ze(t,e,!0,!0),t})(),QS=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),YS=(e={})=>(()=>{const t=QS();return Ze(t,e,!0,!0),t})(),JS=e=>Math.floor(+e/1e3),ur=()=>JS(new Date),XS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),eT=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],h=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...h,...p]},Ol=()=>{const e=Cl(),t=async(d,h)=>{const p={...h};if(p.id=bl(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async v=>{const k=(await e().ensureRelay(v)).publish(g);return XS(k,v)})};return{publishTextNote:async d=>{const{relayUrls:h,pubkey:p,content:g}=d,v=eT(d),w={kind:1,pubkey:p,created_at:ur(),tags:v,content:g};return t(h,w)},publishReaction:async({relayUrls:d,pubkey:h,eventId:p,content:g,notifyPubkey:v})=>{const w={kind:7,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",v]],content:g};return t(d,w)},publishRepost:async({relayUrls:d,pubkey:h,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:h,profile:p,otherProperties:g})=>{const v={...p,...g},w={kind:ct.Metadata,pubkey:h,created_at:ur(),tags:[],content:JSON.stringify(v)};return t(d,w)},updateContacts:async({relayUrls:d,pubkey:h,followingPubkeys:p,content:g})=>{const v=p.map(k=>["p",k]),w={kind:ct.Contacts,pubkey:h,created_at:ur(),tags:v,content:g};return t(d,w)},deleteEvent:async({relayUrls:d,pubkey:h,eventId:p})=>{const g={kind:ct.EventDeletion,pubkey:h,created_at:ur(),tags:[["e",p,""]],content:""};return t(d,g)}}};let fu=!1;const[wa,tT]=_e(void 0),Vn=()=>(an(()=>{if(wa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),wa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&wa()==null&&!fu&&(fu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),tT(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{fu=!1})),e+=1},200)}),wa),nT=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},rT=e=>t=>Promise.allSettled(t.map(n=>e(n))),iT=j("<div>に返信"),sT=j('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),oT=j('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),aT=j('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),lT=j('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),cT=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},uT=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},dT=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},tv=e=>{let t,n;const[i,o]=_e(""),[a,l]=_e(!1),[u,d]=_e(""),h=D=>o(ne=>`${ne} ${D}`),p=()=>{o(""),d(""),l(!1)},g=()=>{t?.blur(),p(),e.onClose()},{config:v,getEmoji:w}=Pe(),k=Vn(),x=Ol(),E=()=>e.replyTo&&El(e.replyTo),$=()=>e.mode??"normal",A=pi({mutationKey:["publishTextNote"],mutationFn:x.publishTextNote.bind(x),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:D=>{console.error("error",D)}}),R=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},T=pi({mutationKey:["uploadFiles"],mutationFn:async D=>{const ne=await rT(nT)(D),re=[];if(ne.forEach((de,we)=>{de.status==="fulfilled"?(h(de.value.imageUrl),R()):re.push(D[we])}),re.length>0){const de=re.map(we=>we.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${de}`)}}}),M=De(()=>{const D=k();return E()?.taggedPubkeys()?.filter(ne=>ne!==D)??[]}),C=De(()=>e.replyTo==null?[]:pr([e.replyTo.pubkey,...M()])),L=D=>{const ne=[];return D.forEach(re=>{const de=w(re);de!=null&&ne.push(["emoji",re,de.url])}),ne},U=()=>{if(i().length===0||A.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(i())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const D=k();if(D==null){console.error("pubkey is not available");return}const ne=pm(i()),{hashtags:re,urlReferences:de,pubkeyReferences:we,eventReferences:G,emojis:fe}=uT(ne),$e=dT(ne),Ve=L(fe);let J={relayUrls:v().relayUrls,pubkey:D,content:$e,notifyPubkeys:we,mentionEventIds:G,hashtags:re,urls:de,tags:Ve};E()!=null&&(J={...J,notifyPubkeys:pr([...C(),...we]),rootEventId:E()?.rootEvent()?.id??E()?.replyingToEvent()?.id,replyEventId:E()?.id}),a()&&(J={...J,contentWarning:u()}),A.mutate(J),g()},te=D=>{o(D.currentTarget.value),R()},W=D=>{D.preventDefault(),U()},Q=D=>{D.key==="Enter"&&(D.ctrlKey||D.metaKey)?U():D.key==="Escape"&&(t?.blur(),g())},q=D=>{if(D.preventDefault(),T.isLoading)return;const ne=[...D.currentTarget.files??[]];T.mutate(ne),D.currentTarget.value=""},X=D=>{if(D.preventDefault(),T.isLoading)return;const ne=[...D?.dataTransfer?.files??[]];T.mutate(ne)},se=D=>{if(T.isLoading)return;const ne=[...D?.clipboardData?.items??[]],re=[];ne.forEach(de=>{if(de.kind==="file"){D.preventDefault();const we=de.getAsFile();if(we==null)return;re.push(we)}}),re.length!==0&&T.mutate(re)},Z=D=>{D.preventDefault()},Y=()=>i().trim().length===0||A.isLoading||T.isLoading,ce=()=>T.isLoading;return an(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const D=lT(),ne=D.firstChild,re=ne.firstChild,de=re.nextSibling,we=de.firstChild,G=we.nextSibling,fe=G.nextSibling,$e=de.nextSibling;O(D,_(ue,{get when(){return e.replyTo!=null},get children(){const J=iT(),ze=J.firstChild;return O(J,_(It,{get each(){return C()},children:(Qe,yt)=>[_(Tl,{pubkey:Qe}),_(ue,{get when(){return yt()!==C().length-1},children:" と "})]}),ze),J}}),ne),ne.addEventListener("submit",W),O(ne,_(ue,{get when(){return a()},get children(){const J=sT();return J.$$input=ze=>d(ze.currentTarget.value),Me(()=>J.value=u()),J}}),re),re.addEventListener("paste",se),re.addEventListener("drop",X),re.addEventListener("dragover",Z),re.$$keydown=Q,re.$$input=te,br(J=>{t=J,e.textAreaRef?.(J)},re),O(de,_(ue,{get when(){return $()==="reply"},get children(){const J=oT(),ze=J.firstChild;return ze.$$click=()=>g(),O(ze,_(as,{})),J}}),we),O(de,_(Ym,{customEmojis:!0,onEmojiSelect:J=>h(J),get children(){const J=aT();return O(J,_(ev,{})),J}}),we),we.$$click=()=>l(J=>!J),G.$$click=()=>n?.click(),O(G,_(GS,{})),O(fe,_(YS,{})),$e.addEventListener("change",q);const Ve=n;return typeof Ve=="function"?br(Ve,$e):n=$e,Me(J=>{const ze=cT($()),Qe=!a(),yt=!!a(),Re=$()==="normal",Fe=$()==="normal",kt=$()==="reply",Je=$()==="reply",Et=!!ce(),Gn=!ce(),_t=$()==="normal",$r=$()==="normal",Ei=$()==="reply",Ln=$()==="reply",gt=ce(),bn=!!Y(),Pn=!Y(),Ci=$()==="normal",ye=$()==="normal",Qn=$()==="reply",Gt=$()==="reply",Ft=Y();return ze!==J._v$&&ht(re,"placeholder",J._v$=ze),Qe!==J._v$2&&we.classList.toggle("bg-rose-300",J._v$2=Qe),yt!==J._v$3&&we.classList.toggle("bg-rose-400",J._v$3=yt),Re!==J._v$4&&we.classList.toggle("h-8",J._v$4=Re),Fe!==J._v$5&&we.classList.toggle("w-8",J._v$5=Fe),kt!==J._v$6&&we.classList.toggle("h-7",J._v$6=kt),Je!==J._v$7&&we.classList.toggle("w-7",J._v$7=Je),Et!==J._v$8&&G.classList.toggle("bg-primary-disabled",J._v$8=Et),Gn!==J._v$9&&G.classList.toggle("bg-primary",J._v$9=Gn),_t!==J._v$10&&G.classList.toggle("h-8",J._v$10=_t),$r!==J._v$11&&G.classList.toggle("w-8",J._v$11=$r),Ei!==J._v$12&&G.classList.toggle("h-7",J._v$12=Ei),Ln!==J._v$13&&G.classList.toggle("w-7",J._v$13=Ln),gt!==J._v$14&&(G.disabled=J._v$14=gt),bn!==J._v$15&&fe.classList.toggle("bg-primary-disabled",J._v$15=bn),Pn!==J._v$16&&fe.classList.toggle("bg-primary",J._v$16=Pn),Ci!==J._v$17&&fe.classList.toggle("h-8",J._v$17=Ci),ye!==J._v$18&&fe.classList.toggle("w-8",J._v$18=ye),Qn!==J._v$19&&fe.classList.toggle("h-7",J._v$19=Qn),Gt!==J._v$20&&fe.classList.toggle("w-7",J._v$20=Gt),Ft!==J._v$21&&(fe.disabled=J._v$21=Ft),J},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Me(()=>re.value=i()),D})()};at(["input","keydown","click"]);const fT=2,hT=()=>{let e;const[t,n]=_e(!1),i=o=>{e=o};return an(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+fT)}),{overflow:t,elementRef:i}},pT=j('<div class="author-name truncate pr-1 font-bold hover:underline">'),gT=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),mT=j('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),vT=j('<img alt="icon" class="h-full w-full rounded object-cover">'),bT=e=>{const{overflow:t,elementRef:n}=hT(),i=wm(),[o,a]=_e(),l=()=>i(e.createdAt),{profile:u}=bs(()=>({pubkey:e.authorPubkey}));return(()=>{const d=mT(),h=d.firstChild,p=h.firstChild,g=p.nextSibling,v=g.firstChild,w=v.firstChild,k=w.firstChild,x=k.firstChild,E=w.nextSibling,$=E.firstChild,A=v.nextSibling,R=A.nextSibling;return p.$$click=T=>{T.preventDefault(),e.onShowProfile?.()},O(p,_(ue,{get when(){return u()?.picture},keyed:!0,children:T=>(()=>{const M=vT();return ht(M,"src",T),M})()})),w.$$click=T=>{T.preventDefault(),e?.onShowProfile?.()},O(k,_(ue,{get when(){return(u()?.display_name?.length??0)>0},get children(){const T=pT();return O(T,()=>u()?.display_name),T}}),x),O(x,_(ue,{get when(){return u()?.name!=null},get fallback(){return`@${Sl(e.authorPubkey)}`},get children(){return["@",De(()=>u()?.name)]}})),$.$$click=T=>{T.preventDefault(),e.onShowEvent?.()},O($,l),br(n,A),O(A,()=>e.content),O(g,_(ue,{get when(){return t()},get children(){const T=gT();return T.$$click=M=>{M.stopPropagation(),a(C=>!C)},O(T,_(ue,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),T}}),R),O(R,()=>e.actions),O(d,_(ue,{get when(){return e.footer},get children(){return e.footer}}),null),Me(()=>A.classList.toggle("max-h-screen",!o())),d})()};at(["click"]);const nv=Ax(),yT=()=>Ix(nv),_T=()=>{const[e,t]=Yi({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},wT=/\p{Emoji_Presentation}/u,xT=e=>{const{shouldMuteEvent:t}=Pe(),n=_i(),i=De(e),o=De(()=>["useReactions",i()]),a=wi(o,({queryKey:g,signal:v})=>{const[,w]=g;if(w==null)return[];const{eventId:k}=w,x=vs({type:"Reactions",mentionedEventId:k},v).then(E=>{const $=()=>E().events;return ho(E).subscribe(()=>{n.setQueryData(g,$())}),$()});return wr(15e3,`useReactions: ${k}`)(x)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!t(v));return{reactions:l,reactionsGroupedByContent:()=>{const g=new Map;return l().forEach(v=>{const w=g.get(v.content)??[];w.push(v),g.set(v.content,w)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&wT.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},$T=e=>{const{shouldMuteEvent:t}=Pe(),n=_i(),i=De(e),o=De(()=>["useReposts",i()]),a=wi(o,({queryKey:h,signal:p})=>{const[,g]=h;if(g==null)return[];const{eventId:v}=g,w=vs({type:"Reposts",mentionedEventId:v},p).then(k=>{const x=()=>k().events;return ho(k).subscribe(()=>{n.setQueryData(h,x())}),x()});return wr(15e3,`useReposts: ${v}`)(w)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!t(p));return{reposts:l,isRepostedBy:h=>l().findIndex(p=>p.pubkey===h)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},kT=j('<div class="flex gap-2 overflow-x-auto py-1">'),ET=j('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),CT=j('<span class="ml-1 text-sm">'),ST=j('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),TT=j('<span class="truncate text-base">'),AT=j('<span class="text-red-500">削除'),IT=j('<div class="nostr-textnote">'),RT=j('<div class="text-xs">への返信'),OT=j('<div class="content whitespace-pre-wrap break-all">'),LT=j('<div class="textnote-content">'),PT=j('<div class="mt-1 rounded border p-1">'),MT=j('<button class="pr-1 text-blue-500 hover:underline">'),L0=j('<div class="text-sm text-zinc-400">'),BT=j('<span class="inline-block h-4 w-4">'),jT=j('<div class="flex shrink-0 items-center gap-1">'),UT=j('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),NT=j('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),{noteEncode:DT}=_o,zT=e=>{const{config:t}=Pe(),n=Vn();return(()=>{const i=kT();return O(i,_(It,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const l=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=ST();return u.$$click=()=>e.onReaction(o),O(u,_(ue,{when:o==="+",get fallback(){return(()=>{const d=TT();return O(d,o),d})()},get children(){const d=ET();return O(d,_(Cd,{})),d}}),null),O(u,_(ue,{get when(){return!t().hideCount},get children(){const d=CT();return O(d,()=>a.length),d}}),null),Me(d=>qs(u,{"text-zinc-400":!l,"hover:bg-zinc-50":!l,"bg-rose-50":l,"border-rose-200":l,"text-rose-400":l},d)),u})()}})),i})()},rv=e=>{const{config:t}=Pe(),n=Vn(),{showProfile:i}=Yr(),o=yT(),[a,l]=_e(!1),[u,d]=_e(!1),[h,p]=_e(!1),[g,v]=_e(!1),w=()=>p(!1),k=De(()=>El(e.event)),x=()=>e.embedding??!0,E=()=>e.actions??!0,{reactions:$,reactionsGroupedByContent:A,isReactedBy:R,isReactedByWithEmoji:T,invalidateReactions:M,query:C}=xT(()=>({eventId:e.event.id})),{reposts:L,isRepostedBy:U,invalidateReposts:te,query:W}=$T(()=>({eventId:e.event.id})),Q=Ol(),q=pi({mutationKey:["publishReaction",k().id],mutationFn:Q.publishReaction.bind(Q),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:G=>{console.error("failed to publish reaction: ",G)},onSettled:()=>{M().then(()=>C.refetch()).catch(G=>console.error("failed to refetch reactions",G))}}),X=pi({mutationKey:["publishRepost",k().id],mutationFn:Q.publishRepost.bind(Q),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:G=>{console.error("failed to publish repost: ",G)},onSettled:()=>{te().then(()=>W.refetch()).catch(G=>console.error("failed to refetch reposts",G))}}),se=pi({mutationKey:["deleteEvent",k().id],mutationFn:(...G)=>Q.deleteEvent(...G).then(fe=>Promise.allSettled(fe.map(wr(1e4)))),onSuccess:G=>{const fe=G.filter(Ve=>Ve.status==="fulfilled").length,$e=G.length-fe;fe===G.length?window.alert("削除しました（画面の反映にはリロード）"):fe>0?window.alert(`${$e}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:G=>{console.error("failed to delete",G)}}),Z=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(DT(e.event.id)).catch(G=>window.alert(G))}},{content:()=>"JSONを確認",onSelect:()=>{v(!0)}},{when:()=>k().pubkey===n(),content:()=>AT(),onSelect:()=>{const G=n();G!=null&&window.confirm("本当に削除しますか？")&&se.mutate({relayUrls:t().relayUrls,pubkey:G,eventId:k().id})}}],Y=De(()=>{const G=n();return G!=null&&R(G)||a()}),ce=De(()=>{const G=n();return G!=null&&T(G)}),D=De(()=>{const G=n();return G!=null&&U(G)||u()}),ne=()=>{if(x()){const G=k().replyingToEvent();if(G!=null&&!k().containsEventMention(G.id))return G.id;const fe=k().rootEvent();if(G==null&&fe!=null&&!k().containsEventMention(fe.id))return fe.id}},re=G=>{G.stopPropagation(),!D()&&on([n(),e.event.id])(([fe,$e])=>{X.mutate({relayUrls:t().relayUrls,pubkey:fe,eventId:$e,notifyPubkey:e.event.pubkey}),d(!0)})},de=G=>{Y()||on([n(),e.event.id])(([fe,$e])=>{q.mutate({relayUrls:t().relayUrls,pubkey:fe,content:G??"+",eventId:$e,notifyPubkey:e.event.pubkey}),l(!0)})},we=G=>{G.stopPropagation(),de()};return(()=>{const G=IT();return O(G,_(bT,{get authorPubkey(){return k().pubkey},get createdAt(){return k().createdAtAsDate()},get content(){return(()=>{const fe=LT();return O(fe,_(ue,{get when(){return ne()},keyed:!0,children:$e=>(()=>{const Ve=PT();return O(Ve,_(is,{eventId:$e,actions:!1,embedding:!1})),Ve})()}),null),O(fe,_(ue,{get when(){return k().taggedPubkeys().length>0},get children(){const $e=RT(),Ve=$e.firstChild;return O($e,_(It,{get each(){return k().taggedPubkeys()},children:J=>(()=>{const ze=MT();return ze.$$click=Qe=>{Qe.stopPropagation(),i(J)},O(ze,_(Jm,{pubkey:J})),ze})()}),Ve),$e}}),null),O(fe,_(yS,{get contentWarning(){return k().contentWarning()},get children(){const $e=OT();return O($e,_(MS,{get event(){return e.event},get embedding(){return x()}})),$e}}),null),fe})()},get actions(){return _(ue,{get when(){return E()},get children(){return[_(ue,{get when(){return De(()=>!!t().showEmojiReaction)()&&$().length>0},get children(){return _(zT,{get reactionsGroupedByContent(){return A()},onReaction:de})}}),(()=>{const fe=NT(),$e=fe.firstChild,Ve=$e.nextSibling,J=Ve.firstChild,ze=Ve.nextSibling,Qe=ze.firstChild,yt=ze.nextSibling;return $e.$$click=Re=>{Re.stopPropagation(),p(Fe=>!Fe)},O($e,_(yC,{})),J.$$click=re,O(J,_(Y1,{})),O(Ve,_(ue,{get when(){return De(()=>!t().hideCount)()&&L().length>0},get children(){const Re=L0();return O(Re,()=>L().length),Re}}),null),Qe.$$click=we,O(Qe,_(ue,{get when(){return De(()=>!!Y())()&&!ce()},get fallback(){return _(Ed,{})},get children(){return _(Cd,{})}})),O(ze,_(ue,{get when(){return De(()=>!t().hideCount&&!t().showEmojiReaction)()&&$().length>0},get children(){const Re=L0();return O(Re,()=>$().length),Re}}),null),O(fe,_(ue,{get when(){return t().useEmojiReaction},get children(){const Re=jT();return O(Re,_(Ym,{onEmojiSelect:Fe=>de(Fe),get children(){const Fe=BT();return O(Fe,_(km,{})),Fe}})),Me(Fe=>qs(Re,{"text-zinc-400":!Y()||!ce(),"hover:text-rose-400":!Y()||!ce(),"text-rose-400":Y()&&ce()||q.isLoading},Fe)),Re}}),yt),O(yt,_(Em,{menu:Z,get children(){const Re=UT();return O(Re,_($m,{})),Re}})),Me(Re=>{const Fe={"text-zinc-400":!D(),"hover:text-green-400":!D(),"text-green-400":D()||X.isLoading},kt=X.isLoading,Je={"text-zinc-400":!Y()||ce(),"hover:text-rose-400":!Y()||ce(),"text-rose-400":Y()&&!ce()||q.isLoading},Et=q.isLoading;return Re._v$=qs(Ve,Fe,Re._v$),kt!==Re._v$2&&(J.disabled=Re._v$2=kt),Re._v$3=qs(ze,Je,Re._v$3),Et!==Re._v$4&&(Qe.disabled=Re._v$4=Et),Re},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),fe})()]}})},get footer(){return _(ue,{get when(){return h()},get children(){return _(tv,{mode:"reply",get replyTo(){return e.event},onClose:w,onPost:w})}})},onShowProfile:()=>{i(k().pubkey)},onShowEvent:()=>{o?.setTimeline({type:"Replies",event:e.event})}}),null),O(G,_(ue,{get when(){return g()},get children(){return _(ZS,{get event(){return e.event},onClose:()=>v(!1)})}}),null),G})()};at(["click"]);const iv=e=>{const{shouldMuteEvent:t}=Pe();return _(ue,{get when(){return!t(e.event)},get children(){return _(rv,e)}})},HT=j("<span>予期しないイベント種別（<!>）"),FT=j("<span><span>未対応のイベント種別（<!>）"),sv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return _(Sn,{get fallback(){return(()=>{const n=FT(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,O(i,()=>e.event.kind,a),O(n,_(Xs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[_(He,{get when(){return!t()},keyed:!0,get children(){const n=HT(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,O(n,()=>e.event.kind,o),O(n,_(Xs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),_(He,{get when(){return e.event.kind===ct.Text},get children(){return _(iv,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),_(He,{get when(){return e.event.kind===6},get children(){return _(xm,{get event(){return e.event}})}})]}})},_s=e=>{const{shouldMuteEvent:t}=Pe();return _(It,{get each(){return e.events},children:n=>_(ue,{get when(){return!t(n)},get children(){return _(Ws,{get children(){return _(sv,{event:n})}})}})})};var qT=al;function WT(){this.__data__=new qT,this.size=0}var ZT=WT;function VT(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var KT=VT;function GT(e){return this.__data__.get(e)}var QT=GT;function YT(e){return this.__data__.has(e)}var JT=YT,XT=al,eA=Ju,tA=Xu,nA=200;function rA(e,t){var n=this.__data__;if(n instanceof XT){var i=n.__data__;if(!eA||i.length<nA-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new tA(i)}return n.set(e,t),this.size=n.size,this}var iA=rA,sA=al,oA=ZT,aA=KT,lA=QT,cA=JT,uA=iA;function ws(e){var t=this.__data__=new sA(e);this.size=t.size}ws.prototype.clear=oA;ws.prototype.delete=aA;ws.prototype.get=lA;ws.prototype.has=cA;ws.prototype.set=uA;var Rd=ws;function dA(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var fA=dA,hA=Mg,pA=fA,gA=Bg,mA=1,vA=2;function bA(e,t,n,i,o,a){var l=n&mA,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var g=-1,v=!0,w=n&vA?new hA:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var k=e[g],x=t[g];if(i)var E=l?i(x,k,g,t,e,a):i(k,x,g,e,t,a);if(E!==void 0){if(E)continue;v=!1;break}if(w){if(!pA(t,function($,A){if(!gA(w,A)&&(k===$||o(k,$,n,i,a)))return w.push(A)})){v=!1;break}}else if(!(k===x||o(k,x,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var ov=bA,yA=Rn,_A=yA.Uint8Array,av=_A;function wA(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var xA=wA,P0=cs,M0=av,$A=Yu,kA=ov,EA=xA,CA=ed,SA=1,TA=2,AA="[object Boolean]",IA="[object Date]",RA="[object Error]",OA="[object Map]",LA="[object Number]",PA="[object RegExp]",MA="[object Set]",BA="[object String]",jA="[object Symbol]",UA="[object ArrayBuffer]",NA="[object DataView]",B0=P0?P0.prototype:void 0,hu=B0?B0.valueOf:void 0;function DA(e,t,n,i,o,a,l){switch(n){case NA:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case UA:return!(e.byteLength!=t.byteLength||!a(new M0(e),new M0(t)));case AA:case IA:case LA:return $A(+e,+t);case RA:return e.name==t.name&&e.message==t.message;case PA:case BA:return e==t+"";case OA:var u=EA;case MA:var d=i&SA;if(u||(u=CA),e.size!=t.size&&!d)return!1;var h=l.get(e);if(h)return h==t;i|=TA,l.set(e,t);var p=kA(u(e),u(t),i,o,a,l);return l.delete(e),p;case jA:if(hu)return hu.call(e)==hu.call(t)}return!1}var zA=DA;function HA(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Od=HA,FA=Array.isArray,Kn=FA,qA=Od,WA=Kn;function ZA(e,t,n){var i=t(e);return WA(e)?i:qA(i,n(e))}var lv=ZA;function VA(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var KA=VA;function GA(){return[]}var cv=GA,QA=KA,YA=cv,JA=Object.prototype,XA=JA.propertyIsEnumerable,j0=Object.getOwnPropertySymbols,eI=j0?function(e){return e==null?[]:(e=Object(e),QA(j0(e),function(t){return XA.call(e,t)}))}:YA,Ld=eI;function tI(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var nI=tI;function rI(e){return e!=null&&typeof e=="object"}var Jr=rI,iI=us,sI=Jr,oI="[object Arguments]";function aI(e){return sI(e)&&iI(e)==oI}var lI=aI,U0=lI,cI=Jr,uv=Object.prototype,uI=uv.hasOwnProperty,dI=uv.propertyIsEnumerable,fI=U0(function(){return arguments}())?U0:function(e){return cI(e)&&uI.call(e,"callee")&&!dI.call(e,"callee")},Pd=fI,Xa={exports:{}};function hI(){return!1}var pI=hI;Xa.exports;(function(e,t){var n=Rn,i=pI,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,h=d||i;e.exports=h})(Xa,Xa.exports);var Md=Xa.exports,gI=9007199254740991,mI=/^(?:0|[1-9]\d*)$/;function vI(e,t){var n=typeof e;return t=t??gI,!!t&&(n=="number"||n!="symbol"&&mI.test(e))&&e>-1&&e%1==0&&e<t}var Bd=vI,bI=9007199254740991;function yI(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=bI}var jd=yI,_I=us,wI=jd,xI=Jr,$I="[object Arguments]",kI="[object Array]",EI="[object Boolean]",CI="[object Date]",SI="[object Error]",TI="[object Function]",AI="[object Map]",II="[object Number]",RI="[object Object]",OI="[object RegExp]",LI="[object Set]",PI="[object String]",MI="[object WeakMap]",BI="[object ArrayBuffer]",jI="[object DataView]",UI="[object Float32Array]",NI="[object Float64Array]",DI="[object Int8Array]",zI="[object Int16Array]",HI="[object Int32Array]",FI="[object Uint8Array]",qI="[object Uint8ClampedArray]",WI="[object Uint16Array]",ZI="[object Uint32Array]",nt={};nt[UI]=nt[NI]=nt[DI]=nt[zI]=nt[HI]=nt[FI]=nt[qI]=nt[WI]=nt[ZI]=!0;nt[$I]=nt[kI]=nt[BI]=nt[EI]=nt[jI]=nt[CI]=nt[SI]=nt[TI]=nt[AI]=nt[II]=nt[RI]=nt[OI]=nt[LI]=nt[PI]=nt[MI]=!1;function VI(e){return xI(e)&&wI(e.length)&&!!nt[_I(e)]}var KI=VI;function GI(e){return function(t){return e(t)}}var Ud=GI,el={exports:{}};el.exports;(function(e,t){var n=Rg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(el,el.exports);var Nd=el.exports,QI=KI,YI=Ud,N0=Nd,D0=N0&&N0.isTypedArray,JI=D0?YI(D0):QI,dv=JI,XI=nI,eR=Pd,tR=Kn,nR=Md,rR=Bd,iR=dv,sR=Object.prototype,oR=sR.hasOwnProperty;function aR(e,t){var n=tR(e),i=!n&&eR(e),o=!n&&!i&&nR(e),a=!n&&!i&&!o&&iR(e),l=n||i||o||a,u=l?XI(e.length,String):[],d=u.length;for(var h in e)(t||oR.call(e,h))&&!(l&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||rR(h,d)))&&u.push(h);return u}var fv=aR,lR=Object.prototype;function cR(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||lR;return e===n}var Dd=cR;function uR(e,t){return function(n){return e(t(n))}}var hv=uR,dR=hv,fR=dR(Object.keys,Object),hR=fR,pR=Dd,gR=hR,mR=Object.prototype,vR=mR.hasOwnProperty;function bR(e){if(!pR(e))return gR(e);var t=[];for(var n in Object(e))vR.call(e,n)&&n!="constructor"&&t.push(n);return t}var yR=bR,_R=Lg,wR=jd;function xR(e){return e!=null&&wR(e.length)&&!_R(e)}var pv=xR,$R=fv,kR=yR,ER=pv;function CR(e){return ER(e)?$R(e):kR(e)}var Ll=CR,SR=lv,TR=Ld,AR=Ll;function IR(e){return SR(e,AR,TR)}var gv=IR,z0=gv,RR=1,OR=Object.prototype,LR=OR.hasOwnProperty;function PR(e,t,n,i,o,a){var l=n&RR,u=z0(e),d=u.length,h=z0(t),p=h.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:LR.call(t,v)))return!1}var w=a.get(e),k=a.get(t);if(w&&k)return w==t&&k==e;var x=!0;a.set(e,t),a.set(t,e);for(var E=l;++g<d;){v=u[g];var $=e[v],A=t[v];if(i)var R=l?i(A,$,v,t,e,a):i($,A,v,e,t,a);if(!(R===void 0?$===A||o($,A,n,i,a):R)){x=!1;break}E||(E=v=="constructor")}if(x&&!E){var T=e.constructor,M=t.constructor;T!=M&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof M=="function"&&M instanceof M)&&(x=!1)}return a.delete(e),a.delete(t),x}var MR=PR,BR=xi,jR=Rn,UR=BR(jR,"DataView"),NR=UR,DR=xi,zR=Rn,HR=DR(zR,"Promise"),FR=HR,qR=xi,WR=Rn,ZR=qR(WR,"WeakMap"),VR=ZR,Du=NR,zu=Ju,Hu=FR,Fu=jg,qu=VR,mv=us,xs=Pg,H0="[object Map]",KR="[object Object]",F0="[object Promise]",q0="[object Set]",W0="[object WeakMap]",Z0="[object DataView]",GR=xs(Du),QR=xs(zu),YR=xs(Hu),JR=xs(Fu),XR=xs(qu),li=mv;(Du&&li(new Du(new ArrayBuffer(1)))!=Z0||zu&&li(new zu)!=H0||Hu&&li(Hu.resolve())!=F0||Fu&&li(new Fu)!=q0||qu&&li(new qu)!=W0)&&(li=function(e){var t=mv(e),n=t==KR?e.constructor:void 0,i=n?xs(n):"";if(i)switch(i){case GR:return Z0;case QR:return H0;case YR:return F0;case JR:return q0;case XR:return W0}return t});var Pl=li,pu=Rd,eO=ov,tO=zA,nO=MR,V0=Pl,K0=Kn,G0=Md,rO=dv,iO=1,Q0="[object Arguments]",Y0="[object Array]",xa="[object Object]",sO=Object.prototype,J0=sO.hasOwnProperty;function oO(e,t,n,i,o,a){var l=K0(e),u=K0(t),d=l?Y0:V0(e),h=u?Y0:V0(t);d=d==Q0?xa:d,h=h==Q0?xa:h;var p=d==xa,g=h==xa,v=d==h;if(v&&G0(e)){if(!G0(t))return!1;l=!0,p=!1}if(v&&!p)return a||(a=new pu),l||rO(e)?eO(e,t,n,i,o,a):tO(e,t,d,n,i,o,a);if(!(n&iO)){var w=p&&J0.call(e,"__wrapped__"),k=g&&J0.call(t,"__wrapped__");if(w||k){var x=w?e.value():e,E=k?t.value():t;return a||(a=new pu),o(x,E,n,i,a)}}return v?(a||(a=new pu),nO(e,t,n,i,o,a)):!1}var aO=oO,lO=aO,X0=Jr;function vv(e,t,n,i,o){return e===t?!0:e==null||t==null||!X0(e)&&!X0(t)?e!==e&&t!==t:lO(e,t,n,i,vv,o)}var bv=vv,cO=Rd,uO=bv,dO=1,fO=2;function hO(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],h=e[d],p=u[1];if(l&&u[2]){if(h===void 0&&!(d in e))return!1}else{var g=new cO;if(i)var v=i(h,p,d,e,t,g);if(!(v===void 0?uO(p,h,dO|fO,i,g):v))return!1}}return!0}var pO=hO,gO=qn;function mO(e){return e===e&&!gO(e)}var yv=mO,vO=yv,bO=Ll;function yO(e){for(var t=bO(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,vO(o)]}return t}var _O=yO;function wO(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var _v=wO,xO=pO,$O=_O,kO=_v;function EO(e){var t=$O(e);return t.length==1&&t[0][2]?kO(t[0][0],t[0][1]):function(n){return n===e||xO(n,e,t)}}var CO=EO,SO=us,TO=Jr,AO="[object Symbol]";function IO(e){return typeof e=="symbol"||TO(e)&&SO(e)==AO}var Ml=IO,RO=Kn,OO=Ml,LO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,PO=/^\w*$/;function MO(e,t){if(RO(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||OO(e)?!0:PO.test(e)||!LO.test(e)||t!=null&&e in Object(t)}var zd=MO,wv=Xu,BO="Expected a function";function Hd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(BO);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Hd.Cache||wv),n}Hd.Cache=wv;var jO=Hd,UO=jO,NO=500;function DO(e){var t=UO(e,function(i){return n.size===NO&&n.clear(),i}),n=t.cache;return t}var zO=DO,HO=zO,FO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qO=/\\(\\)?/g,WO=HO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(FO,function(n,i,o,a){t.push(o?a.replace(qO,"$1"):i||n)}),t}),ZO=WO;function VO(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Fd=VO,eg=cs,KO=Fd,GO=Kn,QO=Ml,YO=1/0,tg=eg?eg.prototype:void 0,ng=tg?tg.toString:void 0;function xv(e){if(typeof e=="string")return e;if(GO(e))return KO(e,xv)+"";if(QO(e))return ng?ng.call(e):"";var t=e+"";return t=="0"&&1/e==-YO?"-0":t}var JO=xv,XO=JO;function eL(e){return e==null?"":XO(e)}var tL=eL,nL=Kn,rL=zd,iL=ZO,sL=tL;function oL(e,t){return nL(e)?e:rL(e,t)?[e]:iL(sL(e))}var $s=oL,aL=Ml,lL=1/0;function cL(e){if(typeof e=="string"||aL(e))return e;var t=e+"";return t=="0"&&1/e==-lL?"-0":t}var ks=cL,uL=$s,dL=ks;function fL(e,t){t=uL(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[dL(t[n++])];return n&&n==i?e:void 0}var Bl=fL,hL=Bl;function pL(e,t,n){var i=e==null?void 0:hL(e,t);return i===void 0?n:i}var gL=pL;function mL(e,t){return e!=null&&t in Object(e)}var vL=mL,bL=$s,yL=Pd,_L=Kn,wL=Bd,xL=jd,$L=ks;function kL(e,t,n){t=bL(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=$L(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&xL(o)&&wL(l,o)&&(_L(e)||yL(e)))}var EL=kL,CL=vL,SL=EL;function TL(e,t){return e!=null&&SL(e,t,CL)}var AL=TL,IL=bv,RL=gL,OL=AL,LL=zd,PL=yv,ML=_v,BL=ks,jL=1,UL=2;function NL(e,t){return LL(e)&&PL(t)?ML(BL(e),t):function(n){var i=RL(n,e);return i===void 0&&i===t?OL(n,e):IL(t,i,jL|UL)}}var DL=NL;function zL(e){return e}var $v=zL;function HL(e){return function(t){return t?.[e]}}var FL=HL,qL=Bl;function WL(e){return function(t){return qL(t,e)}}var ZL=WL,VL=FL,KL=ZL,GL=zd,QL=ks;function YL(e){return GL(e)?VL(QL(e)):KL(e)}var JL=YL,XL=CO,eP=DL,tP=$v,nP=Kn,rP=JL;function iP(e){return typeof e=="function"?e:e==null?tP:typeof e=="object"?nP(e)?eP(e[0],e[1]):XL(e):rP(e)}var qd=iP,sP=qd,oP=Ug;function aP(e,t){return e&&e.length?oP(e,sP(t)):[]}var lP=aP;const kv=po(lP),gu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Sa=0;const{setActiveSubscriptions:cP}=vm();setInterval(()=>{cP(Sa)},1e3);const xr=e=>{const{config:t,shouldMuteEvent:n}=Pe(),i=Cl(),[o,a]=_e([]);Un(rl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(h=>!n(h)))},{defer:!0})),an(()=>{console.debug("subscription mounted",e()?.debugId,e()),vr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const h=e()?.limit??50;a(p=>{const g=gu([d,...p].slice(0,h)),v=kv(g,w=>w.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:h,filters:p,options:g,onEvent:v,onEOSE:w,continuous:k=!0}=d,x=i().sub(h,p,g);let E=!0;Sa+=1;let $=!1,A=!1;const R=[];x.on("event",C=>{v?.(C),!(d.clientEventFilter!=null&&!d.clientEventFilter(C))&&(A?l(C):($=!0,R.push(C)))}),x.on("eose",()=>{w?.(),A=!0,a(gu(R)),k||(x.unsub(),E&&(E=!1,Sa-=1))});let T=!1;const M=setInterval(()=>{if(!T){if(T=!0,A){clearInterval(M),T=!1;return}$&&($=!1,a(gu(R))),T=!1}},100);vr(()=>{console.debug("startSubscription: end"),x.unsub(),E&&(E=!1,Sa-=1),clearInterval(M)})};return Un(()=>{u()}),{events:o}},uP=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),pr(t)},dP=e=>{const{config:t}=Pe(),n=()=>El(e.event),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:uP(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return _(_s,{get events(){return[...i()].reverse()}})},fP=e=>_(Sn,{get children(){return _(He,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>_(dP,{get event(){return t.event}})})}}),hP=j('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),pP=j('<div class="shrink-0 border-b">'),gP=j('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),mP=j('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth pb-8">'),$i=e=>{let t;const n=_T(),i=()=>e.width??"medium";return Nu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Nu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),_(nv.Provider,{value:n,get children(){const o=hP(),a=t;return typeof a=="function"?br(a,o):t=o,O(o,_(ue,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const l=pP();return O(l,()=>e.header),l})(),(()=>{const l=gP();return O(l,()=>e.children),l})()]},children:l=>(()=>{const u=mP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=d.nextSibling;return h.$$click=()=>n?.clearTimeline(),O(p,_(Qu,{})),O(g,_(fP,{timelineContent:l})),u})()})),Me(l=>qs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},l)),o}})};at(["click"]);const vP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),bP=(e={})=>(()=>{const t=vP();return Ze(t,e,!0,!0),t})(),yP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),_P=(e={})=>(()=>{const t=yP();return Ze(t,e,!0,!0),t})(),wP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),xP=(e={})=>(()=>{const t=wP();return Ze(t,e,!0,!0),t})(),$P=j('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),kP=j('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),EP=j('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),CP=e=>(()=>{const t=$P(),n=t.firstChild,i=n.nextSibling;return O(n,()=>e.title),O(i,()=>e.children),t})(),ki=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=Pe(),o=xo(),a=u=>{t({...e.column,width:u})},l=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=EP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=h.nextSibling,v=g.firstChild,w=g.nextSibling,k=w.nextSibling,x=k.firstChild;return O(u,_(CP,{title:"カラム幅",get children(){const E=kP(),$=E.firstChild,A=$.nextSibling,R=A.nextSibling,T=R.nextSibling;return $.$$click=()=>a("widest"),A.$$click=()=>a("wide"),R.$$click=()=>a("medium"),T.$$click=()=>a("narrow"),E}}),d),h.$$click=()=>l(e.columnIndex-1),O(p,_(bP,{})),g.$$click=()=>l(e.columnIndex+1),O(v,_(_P,{})),k.$$click=()=>n(e.column.id),O(x,_(xP,{})),u})()};at(["click"]);const SP=ot.array(ot.array(ot.string()));class TP extends im{constructor(t){super(),this.tags=t}}const AP=e=>{try{const t=SP.parse(JSON.parse(e));return new TP(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[rg,IP]=Tg(()=>_e({})),[RP,OP]=Tg(()=>_e({})),LP=e=>{const t=Vn(),[n,i]=_e(null);return Un(()=>{const o=e();if(o==null)return;const{encrypted:a}=o;if(a in rg()){i(rg()[a]);return}const l=t();l!=null&&(RP()[a]||(OP(u=>({...u,[a]:!0})),window.nostr?.nip04?.decrypt?.(l,a)?.then(u=>{IP(d=>({...d,[a]:u})),i(u)}).catch(u=>{console.error(`failed to decrypt "${a}"`,u)})))}),n},PP=e=>{const t=De(()=>hr(e.event)),n=LP(()=>{const{content:a}=t();return a==null||a.length===0?null:{id:t().id,encrypted:a}}),i=()=>{const a=n();if(a==null)return[];console.log(a);try{return AP(a).taggedEventIds()}catch(l){return console.warn(l),[]}},o=()=>t().taggedEventIds();return _(It,{get each(){return[...o(),...i()]},children:a=>_(Ws,{get children(){return _(is,{eventId:a,get ensureKinds(){return[ct.Text]}})}})})},MP=e=>{const t=_i(),n=De(e),o=wi(()=>["useFollowings",n()],({queryKey:l,signal:u})=>{console.debug("useFollowings");const[,d]=l;if(d==null)return Promise.resolve(null);const{kind:h,author:p,identifier:g}=d,v=vs({type:"ParameterizedReplaceableEvent",kind:h,author:p,identifier:g},u).then(w=>{const k=()=>{const x=kd(w().events);if(x==null)throw new Error(`parameterized replaceable event not found: ${h}:${p}:${g}`);return x};return ho(w).subscribe(()=>{try{t.setQueryData(l,k())}catch(x){console.error("error occurred while updating parameterized replaceable event cache: ",x)}}),k()});return wr(15e3,`useParameterizedReplaceableEvent: ${h}:${p}:${g}`)(v)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},BP=e=>{const{removeColumn:t}=Pe(),{event:n}=MP(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"ブックマーク"},get icon(){return _(Fx,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ue,{get when(){return n()},keyed:!0,children:i=>_(PP,{event:i})})}})},jP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),Ev=(e={})=>(()=>{const t=jP();return Ze(t,e,!0,!0),t})();var tl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */tl.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",g=1,v=2,w=4,k=1,x=2,E=1,$=2,A=4,R=8,T=16,M=32,C=64,L=128,U=256,te=512,W=30,Q="...",q=800,X=16,se=1,Z=2,Y=3,ce=1/0,D=9007199254740991,ne=17976931348623157e292,re=0/0,de=4294967295,we=de-1,G=de>>>1,fe=[["ary",L],["bind",E],["bindKey",$],["curry",R],["curryRight",T],["flip",te],["partial",M],["partialRight",C],["rearg",U]],$e="[object Arguments]",Ve="[object Array]",J="[object AsyncFunction]",ze="[object Boolean]",Qe="[object Date]",yt="[object DOMException]",Re="[object Error]",Fe="[object Function]",kt="[object GeneratorFunction]",Je="[object Map]",Et="[object Number]",Gn="[object Null]",_t="[object Object]",$r="[object Promise]",Ei="[object Proxy]",Ln="[object RegExp]",gt="[object Set]",bn="[object String]",Pn="[object Symbol]",Ci="[object Undefined]",ye="[object WeakMap]",Qn="[object WeakSet]",Gt="[object ArrayBuffer]",Ft="[object DataView]",kr="[object Float32Array]",Yn="[object Float64Array]",Jn="[object Int8Array]",Er="[object Int16Array]",Si="[object Int32Array]",Ti="[object Uint8Array]",Ai="[object Uint8ClampedArray]",jl="[object Uint16Array]",Ul="[object Uint32Array]",Dv=/\b__p \+= '';/g,zv=/\b(__p \+=) '' \+/g,Hv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Jd=/&(?:amp|lt|gt|quot|#39);/g,Xd=/[&<>"']/g,Fv=RegExp(Jd.source),qv=RegExp(Xd.source),Wv=/<%-([\s\S]+?)%>/g,Zv=/<%([\s\S]+?)%>/g,ef=/<%=([\s\S]+?)%>/g,Vv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kv=/^\w*$/,Gv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,Qv=RegExp(Nl.source),Dl=/^\s+/,Yv=/\s/,Jv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Xv=/\{\n\/\* \[wrapped with (.+)\] \*/,e2=/,? & /,t2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,n2=/[()=,{}\[\]\/\s]/,r2=/\\(\\)?/g,i2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,tf=/\w*$/,s2=/^[-+]0x[0-9a-f]+$/i,o2=/^0b[01]+$/i,a2=/^\[object .+?Constructor\]$/,l2=/^0o[0-7]+$/i,c2=/^(?:0|[1-9]\d*)$/,u2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ko=/($^)/,d2=/['\n\r\u2028\u2029\\]/g,Eo="\\ud800-\\udfff",f2="\\u0300-\\u036f",h2="\\ufe20-\\ufe2f",p2="\\u20d0-\\u20ff",nf=f2+h2+p2,rf="\\u2700-\\u27bf",sf="a-z\\xdf-\\xf6\\xf8-\\xff",g2="\\xac\\xb1\\xd7\\xf7",m2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",v2="\\u2000-\\u206f",b2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",of="A-Z\\xc0-\\xd6\\xd8-\\xde",af="\\ufe0e\\ufe0f",lf=g2+m2+v2+b2,zl="['’]",y2="["+Eo+"]",cf="["+lf+"]",Co="["+nf+"]",uf="\\d+",_2="["+rf+"]",df="["+sf+"]",ff="[^"+Eo+lf+uf+rf+sf+of+"]",Hl="\\ud83c[\\udffb-\\udfff]",w2="(?:"+Co+"|"+Hl+")",hf="[^"+Eo+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",ql="[\\ud800-\\udbff][\\udc00-\\udfff]",Ii="["+of+"]",pf="\\u200d",gf="(?:"+df+"|"+ff+")",x2="(?:"+Ii+"|"+ff+")",mf="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",vf="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",bf=w2+"?",yf="["+af+"]?",$2="(?:"+pf+"(?:"+[hf,Fl,ql].join("|")+")"+yf+bf+")*",k2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",E2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_f=yf+bf+$2,C2="(?:"+[_2,Fl,ql].join("|")+")"+_f,S2="(?:"+[hf+Co+"?",Co,Fl,ql,y2].join("|")+")",T2=RegExp(zl,"g"),A2=RegExp(Co,"g"),Wl=RegExp(Hl+"(?="+Hl+")|"+S2+_f,"g"),I2=RegExp([Ii+"?"+df+"+"+mf+"(?="+[cf,Ii,"$"].join("|")+")",x2+"+"+vf+"(?="+[cf,Ii+gf,"$"].join("|")+")",Ii+"?"+gf+"+"+mf,Ii+"+"+vf,E2,k2,uf,C2].join("|"),"g"),R2=RegExp("["+pf+Eo+nf+af+"]"),O2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,L2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],P2=-1,tt={};tt[kr]=tt[Yn]=tt[Jn]=tt[Er]=tt[Si]=tt[Ti]=tt[Ai]=tt[jl]=tt[Ul]=!0,tt[$e]=tt[Ve]=tt[Gt]=tt[ze]=tt[Ft]=tt[Qe]=tt[Re]=tt[Fe]=tt[Je]=tt[Et]=tt[_t]=tt[Ln]=tt[gt]=tt[bn]=tt[ye]=!1;var Xe={};Xe[$e]=Xe[Ve]=Xe[Gt]=Xe[Ft]=Xe[ze]=Xe[Qe]=Xe[kr]=Xe[Yn]=Xe[Jn]=Xe[Er]=Xe[Si]=Xe[Je]=Xe[Et]=Xe[_t]=Xe[Ln]=Xe[gt]=Xe[bn]=Xe[Pn]=Xe[Ti]=Xe[Ai]=Xe[jl]=Xe[Ul]=!0,Xe[Re]=Xe[Fe]=Xe[ye]=!1;var M2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},B2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},j2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},U2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},N2=parseFloat,D2=parseInt,wf=typeof dr=="object"&&dr&&dr.Object===Object&&dr,z2=typeof self=="object"&&self&&self.Object===Object&&self,Ct=wf||z2||Function("return this")(),Zl=t&&!t.nodeType&&t,Xr=Zl&&!0&&e&&!e.nodeType&&e,xf=Xr&&Xr.exports===Zl,Vl=xf&&wf.process,ln=function(){try{var P=Xr&&Xr.require&&Xr.require("util").types;return P||Vl&&Vl.binding&&Vl.binding("util")}catch{}}(),$f=ln&&ln.isArrayBuffer,kf=ln&&ln.isDate,Ef=ln&&ln.isMap,Cf=ln&&ln.isRegExp,Sf=ln&&ln.isSet,Tf=ln&&ln.isTypedArray;function Qt(P,z,N){switch(N.length){case 0:return P.call(z);case 1:return P.call(z,N[0]);case 2:return P.call(z,N[0],N[1]);case 3:return P.call(z,N[0],N[1],N[2])}return P.apply(z,N)}function H2(P,z,N,ae){for(var ke=-1,We=P==null?0:P.length;++ke<We;){var mt=P[ke];z(ae,mt,N(mt),P)}return ae}function cn(P,z){for(var N=-1,ae=P==null?0:P.length;++N<ae&&z(P[N],N,P)!==!1;);return P}function F2(P,z){for(var N=P==null?0:P.length;N--&&z(P[N],N,P)!==!1;);return P}function Af(P,z){for(var N=-1,ae=P==null?0:P.length;++N<ae;)if(!z(P[N],N,P))return!1;return!0}function Cr(P,z){for(var N=-1,ae=P==null?0:P.length,ke=0,We=[];++N<ae;){var mt=P[N];z(mt,N,P)&&(We[ke++]=mt)}return We}function So(P,z){var N=P==null?0:P.length;return!!N&&Ri(P,z,0)>-1}function Kl(P,z,N){for(var ae=-1,ke=P==null?0:P.length;++ae<ke;)if(N(z,P[ae]))return!0;return!1}function rt(P,z){for(var N=-1,ae=P==null?0:P.length,ke=Array(ae);++N<ae;)ke[N]=z(P[N],N,P);return ke}function Sr(P,z){for(var N=-1,ae=z.length,ke=P.length;++N<ae;)P[ke+N]=z[N];return P}function Gl(P,z,N,ae){var ke=-1,We=P==null?0:P.length;for(ae&&We&&(N=P[++ke]);++ke<We;)N=z(N,P[ke],ke,P);return N}function q2(P,z,N,ae){var ke=P==null?0:P.length;for(ae&&ke&&(N=P[--ke]);ke--;)N=z(N,P[ke],ke,P);return N}function Ql(P,z){for(var N=-1,ae=P==null?0:P.length;++N<ae;)if(z(P[N],N,P))return!0;return!1}var W2=Yl("length");function Z2(P){return P.split("")}function V2(P){return P.match(t2)||[]}function If(P,z,N){var ae;return N(P,function(ke,We,mt){if(z(ke,We,mt))return ae=We,!1}),ae}function To(P,z,N,ae){for(var ke=P.length,We=N+(ae?1:-1);ae?We--:++We<ke;)if(z(P[We],We,P))return We;return-1}function Ri(P,z,N){return z===z?sb(P,z,N):To(P,Rf,N)}function K2(P,z,N,ae){for(var ke=N-1,We=P.length;++ke<We;)if(ae(P[ke],z))return ke;return-1}function Rf(P){return P!==P}function Of(P,z){var N=P==null?0:P.length;return N?Xl(P,z)/N:re}function Yl(P){return function(z){return z==null?n:z[P]}}function Jl(P){return function(z){return P==null?n:P[z]}}function Lf(P,z,N,ae,ke){return ke(P,function(We,mt,Ye){N=ae?(ae=!1,We):z(N,We,mt,Ye)}),N}function G2(P,z){var N=P.length;for(P.sort(z);N--;)P[N]=P[N].value;return P}function Xl(P,z){for(var N,ae=-1,ke=P.length;++ae<ke;){var We=z(P[ae]);We!==n&&(N=N===n?We:N+We)}return N}function ec(P,z){for(var N=-1,ae=Array(P);++N<P;)ae[N]=z(N);return ae}function Q2(P,z){return rt(z,function(N){return[N,P[N]]})}function Pf(P){return P&&P.slice(0,Uf(P)+1).replace(Dl,"")}function Yt(P){return function(z){return P(z)}}function tc(P,z){return rt(z,function(N){return P[N]})}function Es(P,z){return P.has(z)}function Mf(P,z){for(var N=-1,ae=P.length;++N<ae&&Ri(z,P[N],0)>-1;);return N}function Bf(P,z){for(var N=P.length;N--&&Ri(z,P[N],0)>-1;);return N}function Y2(P,z){for(var N=P.length,ae=0;N--;)P[N]===z&&++ae;return ae}var J2=Jl(M2),X2=Jl(B2);function eb(P){return"\\"+U2[P]}function tb(P,z){return P==null?n:P[z]}function Oi(P){return R2.test(P)}function nb(P){return O2.test(P)}function rb(P){for(var z,N=[];!(z=P.next()).done;)N.push(z.value);return N}function nc(P){var z=-1,N=Array(P.size);return P.forEach(function(ae,ke){N[++z]=[ke,ae]}),N}function jf(P,z){return function(N){return P(z(N))}}function Tr(P,z){for(var N=-1,ae=P.length,ke=0,We=[];++N<ae;){var mt=P[N];(mt===z||mt===p)&&(P[N]=p,We[ke++]=N)}return We}function Ao(P){var z=-1,N=Array(P.size);return P.forEach(function(ae){N[++z]=ae}),N}function ib(P){var z=-1,N=Array(P.size);return P.forEach(function(ae){N[++z]=[ae,ae]}),N}function sb(P,z,N){for(var ae=N-1,ke=P.length;++ae<ke;)if(P[ae]===z)return ae;return-1}function ob(P,z,N){for(var ae=N+1;ae--;)if(P[ae]===z)return ae;return ae}function Li(P){return Oi(P)?lb(P):W2(P)}function yn(P){return Oi(P)?cb(P):Z2(P)}function Uf(P){for(var z=P.length;z--&&Yv.test(P.charAt(z)););return z}var ab=Jl(j2);function lb(P){for(var z=Wl.lastIndex=0;Wl.test(P);)++z;return z}function cb(P){return P.match(Wl)||[]}function ub(P){return P.match(I2)||[]}var db=function P(z){z=z==null?Ct:Pi.defaults(Ct.Object(),z,Pi.pick(Ct,L2));var N=z.Array,ae=z.Date,ke=z.Error,We=z.Function,mt=z.Math,Ye=z.Object,rc=z.RegExp,fb=z.String,un=z.TypeError,Io=N.prototype,hb=We.prototype,Mi=Ye.prototype,Ro=z["__core-js_shared__"],Oo=hb.toString,Ge=Mi.hasOwnProperty,pb=0,Nf=function(){var r=/[^.]+$/.exec(Ro&&Ro.keys&&Ro.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Lo=Mi.toString,gb=Oo.call(Ye),mb=Ct._,vb=rc("^"+Oo.call(Ge).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=xf?z.Buffer:n,Ar=z.Symbol,Mo=z.Uint8Array,Df=Po?Po.allocUnsafe:n,Bo=jf(Ye.getPrototypeOf,Ye),zf=Ye.create,Hf=Mi.propertyIsEnumerable,jo=Io.splice,Ff=Ar?Ar.isConcatSpreadable:n,Cs=Ar?Ar.iterator:n,ei=Ar?Ar.toStringTag:n,Uo=function(){try{var r=si(Ye,"defineProperty");return r({},"",{}),r}catch{}}(),bb=z.clearTimeout!==Ct.clearTimeout&&z.clearTimeout,yb=ae&&ae.now!==Ct.Date.now&&ae.now,_b=z.setTimeout!==Ct.setTimeout&&z.setTimeout,No=mt.ceil,Do=mt.floor,ic=Ye.getOwnPropertySymbols,wb=Po?Po.isBuffer:n,qf=z.isFinite,xb=Io.join,$b=jf(Ye.keys,Ye),vt=mt.max,Rt=mt.min,kb=ae.now,Eb=z.parseInt,Wf=mt.random,Cb=Io.reverse,sc=si(z,"DataView"),Ss=si(z,"Map"),oc=si(z,"Promise"),Bi=si(z,"Set"),Ts=si(z,"WeakMap"),As=si(Ye,"create"),zo=Ts&&new Ts,ji={},Sb=oi(sc),Tb=oi(Ss),Ab=oi(oc),Ib=oi(Bi),Rb=oi(Ts),Ho=Ar?Ar.prototype:n,Is=Ho?Ho.valueOf:n,Zf=Ho?Ho.toString:n;function b(r){if(lt(r)&&!Ce(r)&&!(r instanceof Ue)){if(r instanceof dn)return r;if(Ge.call(r,"__wrapped__"))return Vh(r)}return new dn(r)}var Ui=function(){function r(){}return function(s){if(!it(s))return{};if(zf)return zf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Fo(){}function dn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:Wv,evaluate:Zv,interpolate:ef,variable:"",imports:{_:b}},b.prototype=Fo.prototype,b.prototype.constructor=b,dn.prototype=Ui(Fo.prototype),dn.prototype.constructor=dn;function Ue(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function Ob(){var r=new Ue(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function Lb(){if(this.__filtered__){var r=new Ue(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Pb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Ce(r),f=s<0,m=c?r.length:0,y=Zy(0,m,this.__views__),S=y.start,I=y.end,B=I-S,H=f?I:S-1,F=this.__iteratees__,K=F.length,ie=0,he=Rt(B,this.__takeCount__);if(!c||!f&&m==B&&he==B)return mh(r,this.__actions__);var ve=[];e:for(;B--&&ie<he;){H+=s;for(var Ae=-1,be=r[H];++Ae<K;){var Be=F[Ae],Ne=Be.iteratee,en=Be.type,Ut=Ne(be);if(en==Z)be=Ut;else if(!Ut){if(en==se)continue e;break e}}ve[ie++]=be}return ve}Ue.prototype=Ui(Fo.prototype),Ue.prototype.constructor=Ue;function ti(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Mb(){this.__data__=As?As(null):{},this.size=0}function Bb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function jb(r){var s=this.__data__;if(As){var c=s[r];return c===d?n:c}return Ge.call(s,r)?s[r]:n}function Ub(r){var s=this.__data__;return As?s[r]!==n:Ge.call(s,r)}function Nb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=As&&s===n?d:s,this}ti.prototype.clear=Mb,ti.prototype.delete=Bb,ti.prototype.get=jb,ti.prototype.has=Ub,ti.prototype.set=Nb;function Xn(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Db(){this.__data__=[],this.size=0}function zb(r){var s=this.__data__,c=qo(s,r);if(c<0)return!1;var f=s.length-1;return c==f?s.pop():jo.call(s,c,1),--this.size,!0}function Hb(r){var s=this.__data__,c=qo(s,r);return c<0?n:s[c][1]}function Fb(r){return qo(this.__data__,r)>-1}function qb(r,s){var c=this.__data__,f=qo(c,r);return f<0?(++this.size,c.push([r,s])):c[f][1]=s,this}Xn.prototype.clear=Db,Xn.prototype.delete=zb,Xn.prototype.get=Hb,Xn.prototype.has=Fb,Xn.prototype.set=qb;function er(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Wb(){this.size=0,this.__data__={hash:new ti,map:new(Ss||Xn),string:new ti}}function Zb(r){var s=na(this,r).delete(r);return this.size-=s?1:0,s}function Vb(r){return na(this,r).get(r)}function Kb(r){return na(this,r).has(r)}function Gb(r,s){var c=na(this,r),f=c.size;return c.set(r,s),this.size+=c.size==f?0:1,this}er.prototype.clear=Wb,er.prototype.delete=Zb,er.prototype.get=Vb,er.prototype.has=Kb,er.prototype.set=Gb;function ni(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new er;++s<c;)this.add(r[s])}function Qb(r){return this.__data__.set(r,d),this}function Yb(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=Qb,ni.prototype.has=Yb;function _n(r){var s=this.__data__=new Xn(r);this.size=s.size}function Jb(){this.__data__=new Xn,this.size=0}function Xb(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function ey(r){return this.__data__.get(r)}function ty(r){return this.__data__.has(r)}function ny(r,s){var c=this.__data__;if(c instanceof Xn){var f=c.__data__;if(!Ss||f.length<o-1)return f.push([r,s]),this.size=++c.size,this;c=this.__data__=new er(f)}return c.set(r,s),this.size=c.size,this}_n.prototype.clear=Jb,_n.prototype.delete=Xb,_n.prototype.get=ey,_n.prototype.has=ty,_n.prototype.set=ny;function Vf(r,s){var c=Ce(r),f=!c&&ai(r),m=!c&&!f&&Pr(r),y=!c&&!f&&!m&&Hi(r),S=c||f||m||y,I=S?ec(r.length,fb):[],B=I.length;for(var H in r)(s||Ge.call(r,H))&&!(S&&(H=="length"||m&&(H=="offset"||H=="parent")||y&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||ir(H,B)))&&I.push(H);return I}function Kf(r){var s=r.length;return s?r[vc(0,s-1)]:n}function ry(r,s){return ra(qt(r),ri(s,0,r.length))}function iy(r){return ra(qt(r))}function ac(r,s,c){(c!==n&&!wn(r[s],c)||c===n&&!(s in r))&&tr(r,s,c)}function Rs(r,s,c){var f=r[s];(!(Ge.call(r,s)&&wn(f,c))||c===n&&!(s in r))&&tr(r,s,c)}function qo(r,s){for(var c=r.length;c--;)if(wn(r[c][0],s))return c;return-1}function sy(r,s,c,f){return Ir(r,function(m,y,S){s(f,m,c(m),S)}),f}function Gf(r,s){return r&&Bn(s,wt(s),r)}function oy(r,s){return r&&Bn(s,Zt(s),r)}function tr(r,s,c){s=="__proto__"&&Uo?Uo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function lc(r,s){for(var c=-1,f=s.length,m=N(f),y=r==null;++c<f;)m[c]=y?n:Hc(r,s[c]);return m}function ri(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function fn(r,s,c,f,m,y){var S,I=s&g,B=s&v,H=s&w;if(c&&(S=m?c(r,f,m,y):c(r)),S!==n)return S;if(!it(r))return r;var F=Ce(r);if(F){if(S=Ky(r),!I)return qt(r,S)}else{var K=Ot(r),ie=K==Fe||K==kt;if(Pr(r))return yh(r,I);if(K==_t||K==$e||ie&&!m){if(S=B||ie?{}:Uh(r),!I)return B?jy(r,oy(S,r)):By(r,Gf(S,r))}else{if(!Xe[K])return m?r:{};S=Gy(r,K,I)}}y||(y=new _n);var he=y.get(r);if(he)return he;y.set(r,S),hp(r)?r.forEach(function(be){S.add(fn(be,s,c,be,r,y))}):dp(r)&&r.forEach(function(be,Be){S.set(Be,fn(be,s,c,Be,r,y))});var ve=H?B?Tc:Sc:B?Zt:wt,Ae=F?n:ve(r);return cn(Ae||r,function(be,Be){Ae&&(Be=be,be=r[Be]),Rs(S,Be,fn(be,s,c,Be,r,y))}),S}function ay(r){var s=wt(r);return function(c){return Qf(c,r,s)}}function Qf(r,s,c){var f=c.length;if(r==null)return!f;for(r=Ye(r);f--;){var m=c[f],y=s[m],S=r[m];if(S===n&&!(m in r)||!y(S))return!1}return!0}function Yf(r,s,c){if(typeof r!="function")throw new un(l);return Us(function(){r.apply(n,c)},s)}function Os(r,s,c,f){var m=-1,y=So,S=!0,I=r.length,B=[],H=s.length;if(!I)return B;c&&(s=rt(s,Yt(c))),f?(y=Kl,S=!1):s.length>=o&&(y=Es,S=!1,s=new ni(s));e:for(;++m<I;){var F=r[m],K=c==null?F:c(F);if(F=f||F!==0?F:0,S&&K===K){for(var ie=H;ie--;)if(s[ie]===K)continue e;B.push(F)}else y(s,K,f)||B.push(F)}return B}var Ir=kh(Mn),Jf=kh(uc,!0);function ly(r,s){var c=!0;return Ir(r,function(f,m,y){return c=!!s(f,m,y),c}),c}function Wo(r,s,c){for(var f=-1,m=r.length;++f<m;){var y=r[f],S=s(y);if(S!=null&&(I===n?S===S&&!Xt(S):c(S,I)))var I=S,B=y}return B}function cy(r,s,c,f){var m=r.length;for(c=Se(c),c<0&&(c=-c>m?0:m+c),f=f===n||f>m?m:Se(f),f<0&&(f+=m),f=c>f?0:gp(f);c<f;)r[c++]=s;return r}function Xf(r,s){var c=[];return Ir(r,function(f,m,y){s(f,m,y)&&c.push(f)}),c}function St(r,s,c,f,m){var y=-1,S=r.length;for(c||(c=Yy),m||(m=[]);++y<S;){var I=r[y];s>0&&c(I)?s>1?St(I,s-1,c,f,m):Sr(m,I):f||(m[m.length]=I)}return m}var cc=Eh(),eh=Eh(!0);function Mn(r,s){return r&&cc(r,s,wt)}function uc(r,s){return r&&eh(r,s,wt)}function Zo(r,s){return Cr(s,function(c){return sr(r[c])})}function ii(r,s){s=Or(s,r);for(var c=0,f=s.length;r!=null&&c<f;)r=r[jn(s[c++])];return c&&c==f?r:n}function th(r,s,c){var f=s(r);return Ce(r)?f:Sr(f,c(r))}function Bt(r){return r==null?r===n?Ci:Gn:ei&&ei in Ye(r)?Wy(r):i_(r)}function dc(r,s){return r>s}function uy(r,s){return r!=null&&Ge.call(r,s)}function dy(r,s){return r!=null&&s in Ye(r)}function fy(r,s,c){return r>=Rt(s,c)&&r<vt(s,c)}function fc(r,s,c){for(var f=c?Kl:So,m=r[0].length,y=r.length,S=y,I=N(y),B=1/0,H=[];S--;){var F=r[S];S&&s&&(F=rt(F,Yt(s))),B=Rt(F.length,B),I[S]=!c&&(s||m>=120&&F.length>=120)?new ni(S&&F):n}F=r[0];var K=-1,ie=I[0];e:for(;++K<m&&H.length<B;){var he=F[K],ve=s?s(he):he;if(he=c||he!==0?he:0,!(ie?Es(ie,ve):f(H,ve,c))){for(S=y;--S;){var Ae=I[S];if(!(Ae?Es(Ae,ve):f(r[S],ve,c)))continue e}ie&&ie.push(ve),H.push(he)}}return H}function hy(r,s,c,f){return Mn(r,function(m,y,S){s(f,c(m),y,S)}),f}function Ls(r,s,c){s=Or(s,r),r=Hh(r,s);var f=r==null?r:r[jn(pn(s))];return f==null?n:Qt(f,r,c)}function nh(r){return lt(r)&&Bt(r)==$e}function py(r){return lt(r)&&Bt(r)==Gt}function gy(r){return lt(r)&&Bt(r)==Qe}function Ps(r,s,c,f,m){return r===s?!0:r==null||s==null||!lt(r)&&!lt(s)?r!==r&&s!==s:my(r,s,c,f,Ps,m)}function my(r,s,c,f,m,y){var S=Ce(r),I=Ce(s),B=S?Ve:Ot(r),H=I?Ve:Ot(s);B=B==$e?_t:B,H=H==$e?_t:H;var F=B==_t,K=H==_t,ie=B==H;if(ie&&Pr(r)){if(!Pr(s))return!1;S=!0,F=!1}if(ie&&!F)return y||(y=new _n),S||Hi(r)?Mh(r,s,c,f,m,y):Fy(r,s,B,c,f,m,y);if(!(c&k)){var he=F&&Ge.call(r,"__wrapped__"),ve=K&&Ge.call(s,"__wrapped__");if(he||ve){var Ae=he?r.value():r,be=ve?s.value():s;return y||(y=new _n),m(Ae,be,c,f,y)}}return ie?(y||(y=new _n),qy(r,s,c,f,m,y)):!1}function vy(r){return lt(r)&&Ot(r)==Je}function hc(r,s,c,f){var m=c.length,y=m,S=!f;if(r==null)return!y;for(r=Ye(r);m--;){var I=c[m];if(S&&I[2]?I[1]!==r[I[0]]:!(I[0]in r))return!1}for(;++m<y;){I=c[m];var B=I[0],H=r[B],F=I[1];if(S&&I[2]){if(H===n&&!(B in r))return!1}else{var K=new _n;if(f)var ie=f(H,F,B,r,s,K);if(!(ie===n?Ps(F,H,k|x,f,K):ie))return!1}}return!0}function rh(r){if(!it(r)||Xy(r))return!1;var s=sr(r)?vb:a2;return s.test(oi(r))}function by(r){return lt(r)&&Bt(r)==Ln}function yy(r){return lt(r)&&Ot(r)==gt}function _y(r){return lt(r)&&ca(r.length)&&!!tt[Bt(r)]}function ih(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?Ce(r)?ah(r[0],r[1]):oh(r):Cp(r)}function pc(r){if(!js(r))return $b(r);var s=[];for(var c in Ye(r))Ge.call(r,c)&&c!="constructor"&&s.push(c);return s}function wy(r){if(!it(r))return r_(r);var s=js(r),c=[];for(var f in r)f=="constructor"&&(s||!Ge.call(r,f))||c.push(f);return c}function gc(r,s){return r<s}function sh(r,s){var c=-1,f=Wt(r)?N(r.length):[];return Ir(r,function(m,y,S){f[++c]=s(m,y,S)}),f}function oh(r){var s=Ic(r);return s.length==1&&s[0][2]?Dh(s[0][0],s[0][1]):function(c){return c===r||hc(c,r,s)}}function ah(r,s){return Oc(r)&&Nh(s)?Dh(jn(r),s):function(c){var f=Hc(c,r);return f===n&&f===s?Fc(c,r):Ps(s,f,k|x)}}function Vo(r,s,c,f,m){r!==s&&cc(s,function(y,S){if(m||(m=new _n),it(y))xy(r,s,S,c,Vo,f,m);else{var I=f?f(Pc(r,S),y,S+"",r,s,m):n;I===n&&(I=y),ac(r,S,I)}},Zt)}function xy(r,s,c,f,m,y,S){var I=Pc(r,c),B=Pc(s,c),H=S.get(B);if(H){ac(r,c,H);return}var F=y?y(I,B,c+"",r,s,S):n,K=F===n;if(K){var ie=Ce(B),he=!ie&&Pr(B),ve=!ie&&!he&&Hi(B);F=B,ie||he||ve?Ce(I)?F=I:ut(I)?F=qt(I):he?(K=!1,F=yh(B,!0)):ve?(K=!1,F=_h(B,!0)):F=[]:Ns(B)||ai(B)?(F=I,ai(I)?F=mp(I):(!it(I)||sr(I))&&(F=Uh(B))):K=!1}K&&(S.set(B,F),m(F,B,f,y,S),S.delete(B)),ac(r,c,F)}function lh(r,s){var c=r.length;if(c)return s+=s<0?c:0,ir(s,c)?r[s]:n}function ch(r,s,c){s.length?s=rt(s,function(y){return Ce(y)?function(S){return ii(S,y.length===1?y[0]:y)}:y}):s=[Vt];var f=-1;s=rt(s,Yt(ge()));var m=sh(r,function(y,S,I){var B=rt(s,function(H){return H(y)});return{criteria:B,index:++f,value:y}});return G2(m,function(y,S){return My(y,S,c)})}function $y(r,s){return uh(r,s,function(c,f){return Fc(r,f)})}function uh(r,s,c){for(var f=-1,m=s.length,y={};++f<m;){var S=s[f],I=ii(r,S);c(I,S)&&Ms(y,Or(S,r),I)}return y}function ky(r){return function(s){return ii(s,r)}}function mc(r,s,c,f){var m=f?K2:Ri,y=-1,S=s.length,I=r;for(r===s&&(s=qt(s)),c&&(I=rt(r,Yt(c)));++y<S;)for(var B=0,H=s[y],F=c?c(H):H;(B=m(I,F,B,f))>-1;)I!==r&&jo.call(I,B,1),jo.call(r,B,1);return r}function dh(r,s){for(var c=r?s.length:0,f=c-1;c--;){var m=s[c];if(c==f||m!==y){var y=m;ir(m)?jo.call(r,m,1):_c(r,m)}}return r}function vc(r,s){return r+Do(Wf()*(s-r+1))}function Ey(r,s,c,f){for(var m=-1,y=vt(No((s-r)/(c||1)),0),S=N(y);y--;)S[f?y:++m]=r,r+=c;return S}function bc(r,s){var c="";if(!r||s<1||s>D)return c;do s%2&&(c+=r),s=Do(s/2),s&&(r+=r);while(s);return c}function Oe(r,s){return Mc(zh(r,s,Vt),r+"")}function Cy(r){return Kf(Fi(r))}function Sy(r,s){var c=Fi(r);return ra(c,ri(s,0,c.length))}function Ms(r,s,c,f){if(!it(r))return r;s=Or(s,r);for(var m=-1,y=s.length,S=y-1,I=r;I!=null&&++m<y;){var B=jn(s[m]),H=c;if(B==="__proto__"||B==="constructor"||B==="prototype")return r;if(m!=S){var F=I[B];H=f?f(F,B,I):n,H===n&&(H=it(F)?F:ir(s[m+1])?[]:{})}Rs(I,B,H),I=I[B]}return r}var fh=zo?function(r,s){return zo.set(r,s),r}:Vt,Ty=Uo?function(r,s){return Uo(r,"toString",{configurable:!0,enumerable:!1,value:Wc(s),writable:!0})}:Vt;function Ay(r){return ra(Fi(r))}function hn(r,s,c){var f=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var y=N(m);++f<m;)y[f]=r[f+s];return y}function Iy(r,s){var c;return Ir(r,function(f,m,y){return c=s(f,m,y),!c}),!!c}function Ko(r,s,c){var f=0,m=r==null?f:r.length;if(typeof s=="number"&&s===s&&m<=G){for(;f<m;){var y=f+m>>>1,S=r[y];S!==null&&!Xt(S)&&(c?S<=s:S<s)?f=y+1:m=y}return m}return yc(r,s,Vt,c)}function yc(r,s,c,f){var m=0,y=r==null?0:r.length;if(y===0)return 0;s=c(s);for(var S=s!==s,I=s===null,B=Xt(s),H=s===n;m<y;){var F=Do((m+y)/2),K=c(r[F]),ie=K!==n,he=K===null,ve=K===K,Ae=Xt(K);if(S)var be=f||ve;else H?be=ve&&(f||ie):I?be=ve&&ie&&(f||!he):B?be=ve&&ie&&!he&&(f||!Ae):he||Ae?be=!1:be=f?K<=s:K<s;be?m=F+1:y=F}return Rt(y,we)}function hh(r,s){for(var c=-1,f=r.length,m=0,y=[];++c<f;){var S=r[c],I=s?s(S):S;if(!c||!wn(I,B)){var B=I;y[m++]=S===0?0:S}}return y}function ph(r){return typeof r=="number"?r:Xt(r)?re:+r}function Jt(r){if(typeof r=="string")return r;if(Ce(r))return rt(r,Jt)+"";if(Xt(r))return Zf?Zf.call(r):"";var s=r+"";return s=="0"&&1/r==-ce?"-0":s}function Rr(r,s,c){var f=-1,m=So,y=r.length,S=!0,I=[],B=I;if(c)S=!1,m=Kl;else if(y>=o){var H=s?null:zy(r);if(H)return Ao(H);S=!1,m=Es,B=new ni}else B=s?[]:I;e:for(;++f<y;){var F=r[f],K=s?s(F):F;if(F=c||F!==0?F:0,S&&K===K){for(var ie=B.length;ie--;)if(B[ie]===K)continue e;s&&B.push(K),I.push(F)}else m(B,K,c)||(B!==I&&B.push(K),I.push(F))}return I}function _c(r,s){return s=Or(s,r),r=Hh(r,s),r==null||delete r[jn(pn(s))]}function gh(r,s,c,f){return Ms(r,s,c(ii(r,s)),f)}function Go(r,s,c,f){for(var m=r.length,y=f?m:-1;(f?y--:++y<m)&&s(r[y],y,r););return c?hn(r,f?0:y,f?y+1:m):hn(r,f?y+1:0,f?m:y)}function mh(r,s){var c=r;return c instanceof Ue&&(c=c.value()),Gl(s,function(f,m){return m.func.apply(m.thisArg,Sr([f],m.args))},c)}function wc(r,s,c){var f=r.length;if(f<2)return f?Rr(r[0]):[];for(var m=-1,y=N(f);++m<f;)for(var S=r[m],I=-1;++I<f;)I!=m&&(y[m]=Os(y[m]||S,r[I],s,c));return Rr(St(y,1),s,c)}function vh(r,s,c){for(var f=-1,m=r.length,y=s.length,S={};++f<m;){var I=f<y?s[f]:n;c(S,r[f],I)}return S}function xc(r){return ut(r)?r:[]}function $c(r){return typeof r=="function"?r:Vt}function Or(r,s){return Ce(r)?r:Oc(r,s)?[r]:Zh(Ke(r))}var Ry=Oe;function Lr(r,s,c){var f=r.length;return c=c===n?f:c,!s&&c>=f?r:hn(r,s,c)}var bh=bb||function(r){return Ct.clearTimeout(r)};function yh(r,s){if(s)return r.slice();var c=r.length,f=Df?Df(c):new r.constructor(c);return r.copy(f),f}function kc(r){var s=new r.constructor(r.byteLength);return new Mo(s).set(new Mo(r)),s}function Oy(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function Ly(r){var s=new r.constructor(r.source,tf.exec(r));return s.lastIndex=r.lastIndex,s}function Py(r){return Is?Ye(Is.call(r)):{}}function _h(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function wh(r,s){if(r!==s){var c=r!==n,f=r===null,m=r===r,y=Xt(r),S=s!==n,I=s===null,B=s===s,H=Xt(s);if(!I&&!H&&!y&&r>s||y&&S&&B&&!I&&!H||f&&S&&B||!c&&B||!m)return 1;if(!f&&!y&&!H&&r<s||H&&c&&m&&!f&&!y||I&&c&&m||!S&&m||!B)return-1}return 0}function My(r,s,c){for(var f=-1,m=r.criteria,y=s.criteria,S=m.length,I=c.length;++f<S;){var B=wh(m[f],y[f]);if(B){if(f>=I)return B;var H=c[f];return B*(H=="desc"?-1:1)}}return r.index-s.index}function xh(r,s,c,f){for(var m=-1,y=r.length,S=c.length,I=-1,B=s.length,H=vt(y-S,0),F=N(B+H),K=!f;++I<B;)F[I]=s[I];for(;++m<S;)(K||m<y)&&(F[c[m]]=r[m]);for(;H--;)F[I++]=r[m++];return F}function $h(r,s,c,f){for(var m=-1,y=r.length,S=-1,I=c.length,B=-1,H=s.length,F=vt(y-I,0),K=N(F+H),ie=!f;++m<F;)K[m]=r[m];for(var he=m;++B<H;)K[he+B]=s[B];for(;++S<I;)(ie||m<y)&&(K[he+c[S]]=r[m++]);return K}function qt(r,s){var c=-1,f=r.length;for(s||(s=N(f));++c<f;)s[c]=r[c];return s}function Bn(r,s,c,f){var m=!c;c||(c={});for(var y=-1,S=s.length;++y<S;){var I=s[y],B=f?f(c[I],r[I],I,c,r):n;B===n&&(B=r[I]),m?tr(c,I,B):Rs(c,I,B)}return c}function By(r,s){return Bn(r,Rc(r),s)}function jy(r,s){return Bn(r,Bh(r),s)}function Qo(r,s){return function(c,f){var m=Ce(c)?H2:sy,y=s?s():{};return m(c,r,ge(f,2),y)}}function Ni(r){return Oe(function(s,c){var f=-1,m=c.length,y=m>1?c[m-1]:n,S=m>2?c[2]:n;for(y=r.length>3&&typeof y=="function"?(m--,y):n,S&&jt(c[0],c[1],S)&&(y=m<3?n:y,m=1),s=Ye(s);++f<m;){var I=c[f];I&&r(s,I,f,y)}return s})}function kh(r,s){return function(c,f){if(c==null)return c;if(!Wt(c))return r(c,f);for(var m=c.length,y=s?m:-1,S=Ye(c);(s?y--:++y<m)&&f(S[y],y,S)!==!1;);return c}}function Eh(r){return function(s,c,f){for(var m=-1,y=Ye(s),S=f(s),I=S.length;I--;){var B=S[r?I:++m];if(c(y[B],B,y)===!1)break}return s}}function Uy(r,s,c){var f=s&E,m=Bs(r);function y(){var S=this&&this!==Ct&&this instanceof y?m:r;return S.apply(f?c:this,arguments)}return y}function Ch(r){return function(s){s=Ke(s);var c=Oi(s)?yn(s):n,f=c?c[0]:s.charAt(0),m=c?Lr(c,1).join(""):s.slice(1);return f[r]()+m}}function Di(r){return function(s){return Gl(kp($p(s).replace(T2,"")),r,"")}}function Bs(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Ui(r.prototype),f=r.apply(c,s);return it(f)?f:c}}function Ny(r,s,c){var f=Bs(r);function m(){for(var y=arguments.length,S=N(y),I=y,B=zi(m);I--;)S[I]=arguments[I];var H=y<3&&S[0]!==B&&S[y-1]!==B?[]:Tr(S,B);if(y-=H.length,y<c)return Rh(r,s,Yo,m.placeholder,n,S,H,n,n,c-y);var F=this&&this!==Ct&&this instanceof m?f:r;return Qt(F,this,S)}return m}function Sh(r){return function(s,c,f){var m=Ye(s);if(!Wt(s)){var y=ge(c,3);s=wt(s),c=function(I){return y(m[I],I,m)}}var S=r(s,c,f);return S>-1?m[y?s[S]:S]:n}}function Th(r){return rr(function(s){var c=s.length,f=c,m=dn.prototype.thru;for(r&&s.reverse();f--;){var y=s[f];if(typeof y!="function")throw new un(l);if(m&&!S&&ta(y)=="wrapper")var S=new dn([],!0)}for(f=S?f:c;++f<c;){y=s[f];var I=ta(y),B=I=="wrapper"?Ac(y):n;B&&Lc(B[0])&&B[1]==(L|R|M|U)&&!B[4].length&&B[9]==1?S=S[ta(B[0])].apply(S,B[3]):S=y.length==1&&Lc(y)?S[I]():S.thru(y)}return function(){var H=arguments,F=H[0];if(S&&H.length==1&&Ce(F))return S.plant(F).value();for(var K=0,ie=c?s[K].apply(this,H):F;++K<c;)ie=s[K].call(this,ie);return ie}})}function Yo(r,s,c,f,m,y,S,I,B,H){var F=s&L,K=s&E,ie=s&$,he=s&(R|T),ve=s&te,Ae=ie?n:Bs(r);function be(){for(var Be=arguments.length,Ne=N(Be),en=Be;en--;)Ne[en]=arguments[en];if(he)var Ut=zi(be),tn=Y2(Ne,Ut);if(f&&(Ne=xh(Ne,f,m,he)),y&&(Ne=$h(Ne,y,S,he)),Be-=tn,he&&Be<H){var dt=Tr(Ne,Ut);return Rh(r,s,Yo,be.placeholder,c,Ne,dt,I,B,H-Be)}var xn=K?c:this,ar=ie?xn[r]:r;return Be=Ne.length,I?Ne=s_(Ne,I):ve&&Be>1&&Ne.reverse(),F&&B<Be&&(Ne.length=B),this&&this!==Ct&&this instanceof be&&(ar=Ae||Bs(ar)),ar.apply(xn,Ne)}return be}function Ah(r,s){return function(c,f){return hy(c,r,s(f),{})}}function Jo(r,s){return function(c,f){var m;if(c===n&&f===n)return s;if(c!==n&&(m=c),f!==n){if(m===n)return f;typeof c=="string"||typeof f=="string"?(c=Jt(c),f=Jt(f)):(c=ph(c),f=ph(f)),m=r(c,f)}return m}}function Ec(r){return rr(function(s){return s=rt(s,Yt(ge())),Oe(function(c){var f=this;return r(s,function(m){return Qt(m,f,c)})})})}function Xo(r,s){s=s===n?" ":Jt(s);var c=s.length;if(c<2)return c?bc(s,r):s;var f=bc(s,No(r/Li(s)));return Oi(s)?Lr(yn(f),0,r).join(""):f.slice(0,r)}function Dy(r,s,c,f){var m=s&E,y=Bs(r);function S(){for(var I=-1,B=arguments.length,H=-1,F=f.length,K=N(F+B),ie=this&&this!==Ct&&this instanceof S?y:r;++H<F;)K[H]=f[H];for(;B--;)K[H++]=arguments[++I];return Qt(ie,m?c:this,K)}return S}function Ih(r){return function(s,c,f){return f&&typeof f!="number"&&jt(s,c,f)&&(c=f=n),s=or(s),c===n?(c=s,s=0):c=or(c),f=f===n?s<c?1:-1:or(f),Ey(s,c,f,r)}}function ea(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=gn(s),c=gn(c)),r(s,c)}}function Rh(r,s,c,f,m,y,S,I,B,H){var F=s&R,K=F?S:n,ie=F?n:S,he=F?y:n,ve=F?n:y;s|=F?M:C,s&=~(F?C:M),s&A||(s&=~(E|$));var Ae=[r,s,m,he,K,ve,ie,I,B,H],be=c.apply(n,Ae);return Lc(r)&&Fh(be,Ae),be.placeholder=f,qh(be,r,s)}function Cc(r){var s=mt[r];return function(c,f){if(c=gn(c),f=f==null?0:Rt(Se(f),292),f&&qf(c)){var m=(Ke(c)+"e").split("e"),y=s(m[0]+"e"+(+m[1]+f));return m=(Ke(y)+"e").split("e"),+(m[0]+"e"+(+m[1]-f))}return s(c)}}var zy=Bi&&1/Ao(new Bi([,-0]))[1]==ce?function(r){return new Bi(r)}:Kc;function Oh(r){return function(s){var c=Ot(s);return c==Je?nc(s):c==gt?ib(s):Q2(s,r(s))}}function nr(r,s,c,f,m,y,S,I){var B=s&$;if(!B&&typeof r!="function")throw new un(l);var H=f?f.length:0;if(H||(s&=~(M|C),f=m=n),S=S===n?S:vt(Se(S),0),I=I===n?I:Se(I),H-=m?m.length:0,s&C){var F=f,K=m;f=m=n}var ie=B?n:Ac(r),he=[r,s,c,f,m,F,K,y,S,I];if(ie&&n_(he,ie),r=he[0],s=he[1],c=he[2],f=he[3],m=he[4],I=he[9]=he[9]===n?B?0:r.length:vt(he[9]-H,0),!I&&s&(R|T)&&(s&=~(R|T)),!s||s==E)var ve=Uy(r,s,c);else s==R||s==T?ve=Ny(r,s,I):(s==M||s==(E|M))&&!m.length?ve=Dy(r,s,c,f):ve=Yo.apply(n,he);var Ae=ie?fh:Fh;return qh(Ae(ve,he),r,s)}function Lh(r,s,c,f){return r===n||wn(r,Mi[c])&&!Ge.call(f,c)?s:r}function Ph(r,s,c,f,m,y){return it(r)&&it(s)&&(y.set(s,r),Vo(r,s,n,Ph,y),y.delete(s)),r}function Hy(r){return Ns(r)?n:r}function Mh(r,s,c,f,m,y){var S=c&k,I=r.length,B=s.length;if(I!=B&&!(S&&B>I))return!1;var H=y.get(r),F=y.get(s);if(H&&F)return H==s&&F==r;var K=-1,ie=!0,he=c&x?new ni:n;for(y.set(r,s),y.set(s,r);++K<I;){var ve=r[K],Ae=s[K];if(f)var be=S?f(Ae,ve,K,s,r,y):f(ve,Ae,K,r,s,y);if(be!==n){if(be)continue;ie=!1;break}if(he){if(!Ql(s,function(Be,Ne){if(!Es(he,Ne)&&(ve===Be||m(ve,Be,c,f,y)))return he.push(Ne)})){ie=!1;break}}else if(!(ve===Ae||m(ve,Ae,c,f,y))){ie=!1;break}}return y.delete(r),y.delete(s),ie}function Fy(r,s,c,f,m,y,S){switch(c){case Ft:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Gt:return!(r.byteLength!=s.byteLength||!y(new Mo(r),new Mo(s)));case ze:case Qe:case Et:return wn(+r,+s);case Re:return r.name==s.name&&r.message==s.message;case Ln:case bn:return r==s+"";case Je:var I=nc;case gt:var B=f&k;if(I||(I=Ao),r.size!=s.size&&!B)return!1;var H=S.get(r);if(H)return H==s;f|=x,S.set(r,s);var F=Mh(I(r),I(s),f,m,y,S);return S.delete(r),F;case Pn:if(Is)return Is.call(r)==Is.call(s)}return!1}function qy(r,s,c,f,m,y){var S=c&k,I=Sc(r),B=I.length,H=Sc(s),F=H.length;if(B!=F&&!S)return!1;for(var K=B;K--;){var ie=I[K];if(!(S?ie in s:Ge.call(s,ie)))return!1}var he=y.get(r),ve=y.get(s);if(he&&ve)return he==s&&ve==r;var Ae=!0;y.set(r,s),y.set(s,r);for(var be=S;++K<B;){ie=I[K];var Be=r[ie],Ne=s[ie];if(f)var en=S?f(Ne,Be,ie,s,r,y):f(Be,Ne,ie,r,s,y);if(!(en===n?Be===Ne||m(Be,Ne,c,f,y):en)){Ae=!1;break}be||(be=ie=="constructor")}if(Ae&&!be){var Ut=r.constructor,tn=s.constructor;Ut!=tn&&"constructor"in r&&"constructor"in s&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof tn=="function"&&tn instanceof tn)&&(Ae=!1)}return y.delete(r),y.delete(s),Ae}function rr(r){return Mc(zh(r,n,Qh),r+"")}function Sc(r){return th(r,wt,Rc)}function Tc(r){return th(r,Zt,Bh)}var Ac=zo?function(r){return zo.get(r)}:Kc;function ta(r){for(var s=r.name+"",c=ji[s],f=Ge.call(ji,s)?c.length:0;f--;){var m=c[f],y=m.func;if(y==null||y==r)return m.name}return s}function zi(r){var s=Ge.call(b,"placeholder")?b:r;return s.placeholder}function ge(){var r=b.iteratee||Zc;return r=r===Zc?ih:r,arguments.length?r(arguments[0],arguments[1]):r}function na(r,s){var c=r.__data__;return Jy(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Ic(r){for(var s=wt(r),c=s.length;c--;){var f=s[c],m=r[f];s[c]=[f,m,Nh(m)]}return s}function si(r,s){var c=tb(r,s);return rh(c)?c:n}function Wy(r){var s=Ge.call(r,ei),c=r[ei];try{r[ei]=n;var f=!0}catch{}var m=Lo.call(r);return f&&(s?r[ei]=c:delete r[ei]),m}var Rc=ic?function(r){return r==null?[]:(r=Ye(r),Cr(ic(r),function(s){return Hf.call(r,s)}))}:Gc,Bh=ic?function(r){for(var s=[];r;)Sr(s,Rc(r)),r=Bo(r);return s}:Gc,Ot=Bt;(sc&&Ot(new sc(new ArrayBuffer(1)))!=Ft||Ss&&Ot(new Ss)!=Je||oc&&Ot(oc.resolve())!=$r||Bi&&Ot(new Bi)!=gt||Ts&&Ot(new Ts)!=ye)&&(Ot=function(r){var s=Bt(r),c=s==_t?r.constructor:n,f=c?oi(c):"";if(f)switch(f){case Sb:return Ft;case Tb:return Je;case Ab:return $r;case Ib:return gt;case Rb:return ye}return s});function Zy(r,s,c){for(var f=-1,m=c.length;++f<m;){var y=c[f],S=y.size;switch(y.type){case"drop":r+=S;break;case"dropRight":s-=S;break;case"take":s=Rt(s,r+S);break;case"takeRight":r=vt(r,s-S);break}}return{start:r,end:s}}function Vy(r){var s=r.match(Xv);return s?s[1].split(e2):[]}function jh(r,s,c){s=Or(s,r);for(var f=-1,m=s.length,y=!1;++f<m;){var S=jn(s[f]);if(!(y=r!=null&&c(r,S)))break;r=r[S]}return y||++f!=m?y:(m=r==null?0:r.length,!!m&&ca(m)&&ir(S,m)&&(Ce(r)||ai(r)))}function Ky(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ge.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Uh(r){return typeof r.constructor=="function"&&!js(r)?Ui(Bo(r)):{}}function Gy(r,s,c){var f=r.constructor;switch(s){case Gt:return kc(r);case ze:case Qe:return new f(+r);case Ft:return Oy(r,c);case kr:case Yn:case Jn:case Er:case Si:case Ti:case Ai:case jl:case Ul:return _h(r,c);case Je:return new f;case Et:case bn:return new f(r);case Ln:return Ly(r);case gt:return new f;case Pn:return Py(r)}}function Qy(r,s){var c=s.length;if(!c)return r;var f=c-1;return s[f]=(c>1?"& ":"")+s[f],s=s.join(c>2?", ":" "),r.replace(Jv,`{
/* [wrapped with `+s+`] */
`)}function Yy(r){return Ce(r)||ai(r)||!!(Ff&&r&&r[Ff])}function ir(r,s){var c=typeof r;return s=s??D,!!s&&(c=="number"||c!="symbol"&&c2.test(r))&&r>-1&&r%1==0&&r<s}function jt(r,s,c){if(!it(c))return!1;var f=typeof s;return(f=="number"?Wt(c)&&ir(s,c.length):f=="string"&&s in c)?wn(c[s],r):!1}function Oc(r,s){if(Ce(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||Xt(r)?!0:Kv.test(r)||!Vv.test(r)||s!=null&&r in Ye(s)}function Jy(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Lc(r){var s=ta(r),c=b[s];if(typeof c!="function"||!(s in Ue.prototype))return!1;if(r===c)return!0;var f=Ac(c);return!!f&&r===f[0]}function Xy(r){return!!Nf&&Nf in r}var e_=Ro?sr:Qc;function js(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Mi;return r===c}function Nh(r){return r===r&&!it(r)}function Dh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Ye(c))}}function t_(r){var s=aa(r,function(f){return c.size===h&&c.clear(),f}),c=s.cache;return s}function n_(r,s){var c=r[1],f=s[1],m=c|f,y=m<(E|$|L),S=f==L&&c==R||f==L&&c==U&&r[7].length<=s[8]||f==(L|U)&&s[7].length<=s[8]&&c==R;if(!(y||S))return r;f&E&&(r[2]=s[2],m|=c&E?0:A);var I=s[3];if(I){var B=r[3];r[3]=B?xh(B,I,s[4]):I,r[4]=B?Tr(r[3],p):s[4]}return I=s[5],I&&(B=r[5],r[5]=B?$h(B,I,s[6]):I,r[6]=B?Tr(r[5],p):s[6]),I=s[7],I&&(r[7]=I),f&L&&(r[8]=r[8]==null?s[8]:Rt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function r_(r){var s=[];if(r!=null)for(var c in Ye(r))s.push(c);return s}function i_(r){return Lo.call(r)}function zh(r,s,c){return s=vt(s===n?r.length-1:s,0),function(){for(var f=arguments,m=-1,y=vt(f.length-s,0),S=N(y);++m<y;)S[m]=f[s+m];m=-1;for(var I=N(s+1);++m<s;)I[m]=f[m];return I[s]=c(S),Qt(r,this,I)}}function Hh(r,s){return s.length<2?r:ii(r,hn(s,0,-1))}function s_(r,s){for(var c=r.length,f=Rt(s.length,c),m=qt(r);f--;){var y=s[f];r[f]=ir(y,c)?m[y]:n}return r}function Pc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Fh=Wh(fh),Us=_b||function(r,s){return Ct.setTimeout(r,s)},Mc=Wh(Ty);function qh(r,s,c){var f=s+"";return Mc(r,Qy(f,o_(Vy(f),c)))}function Wh(r){var s=0,c=0;return function(){var f=kb(),m=X-(f-c);if(c=f,m>0){if(++s>=q)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ra(r,s){var c=-1,f=r.length,m=f-1;for(s=s===n?f:s;++c<s;){var y=vc(c,m),S=r[y];r[y]=r[c],r[c]=S}return r.length=s,r}var Zh=t_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Gv,function(c,f,m,y){s.push(m?y.replace(r2,"$1"):f||c)}),s});function jn(r){if(typeof r=="string"||Xt(r))return r;var s=r+"";return s=="0"&&1/r==-ce?"-0":s}function oi(r){if(r!=null){try{return Oo.call(r)}catch{}try{return r+""}catch{}}return""}function o_(r,s){return cn(fe,function(c){var f="_."+c[0];s&c[1]&&!So(r,f)&&r.push(f)}),r.sort()}function Vh(r){if(r instanceof Ue)return r.clone();var s=new dn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function a_(r,s,c){(c?jt(r,s,c):s===n)?s=1:s=vt(Se(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var m=0,y=0,S=N(No(f/s));m<f;)S[y++]=hn(r,m,m+=s);return S}function l_(r){for(var s=-1,c=r==null?0:r.length,f=0,m=[];++s<c;){var y=r[s];y&&(m[f++]=y)}return m}function c_(){var r=arguments.length;if(!r)return[];for(var s=N(r-1),c=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Sr(Ce(c)?qt(c):[c],St(s,1))}var u_=Oe(function(r,s){return ut(r)?Os(r,St(s,1,ut,!0)):[]}),d_=Oe(function(r,s){var c=pn(s);return ut(c)&&(c=n),ut(r)?Os(r,St(s,1,ut,!0),ge(c,2)):[]}),f_=Oe(function(r,s){var c=pn(s);return ut(c)&&(c=n),ut(r)?Os(r,St(s,1,ut,!0),n,c):[]});function h_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Se(s),hn(r,s<0?0:s,f)):[]}function p_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Se(s),s=f-s,hn(r,0,s<0?0:s)):[]}function g_(r,s){return r&&r.length?Go(r,ge(s,3),!0,!0):[]}function m_(r,s){return r&&r.length?Go(r,ge(s,3),!0):[]}function v_(r,s,c,f){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&jt(r,s,c)&&(c=0,f=m),cy(r,s,c,f)):[]}function Kh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Se(c);return m<0&&(m=vt(f+m,0)),To(r,ge(s,3),m)}function Gh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f-1;return c!==n&&(m=Se(c),m=c<0?vt(f+m,0):Rt(m,f-1)),To(r,ge(s,3),m,!0)}function Qh(r){var s=r==null?0:r.length;return s?St(r,1):[]}function b_(r){var s=r==null?0:r.length;return s?St(r,ce):[]}function y_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Se(s),St(r,s)):[]}function __(r){for(var s=-1,c=r==null?0:r.length,f={};++s<c;){var m=r[s];f[m[0]]=m[1]}return f}function Yh(r){return r&&r.length?r[0]:n}function w_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Se(c);return m<0&&(m=vt(f+m,0)),Ri(r,s,m)}function x_(r){var s=r==null?0:r.length;return s?hn(r,0,-1):[]}var $_=Oe(function(r){var s=rt(r,xc);return s.length&&s[0]===r[0]?fc(s):[]}),k_=Oe(function(r){var s=pn(r),c=rt(r,xc);return s===pn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?fc(c,ge(s,2)):[]}),E_=Oe(function(r){var s=pn(r),c=rt(r,xc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?fc(c,n,s):[]});function C_(r,s){return r==null?"":xb.call(r,s)}function pn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function S_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f;return c!==n&&(m=Se(c),m=m<0?vt(f+m,0):Rt(m,f-1)),s===s?ob(r,s,m):To(r,Rf,m,!0)}function T_(r,s){return r&&r.length?lh(r,Se(s)):n}var A_=Oe(Jh);function Jh(r,s){return r&&r.length&&s&&s.length?mc(r,s):r}function I_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,ge(c,2)):r}function R_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,n,c):r}var O_=rr(function(r,s){var c=r==null?0:r.length,f=lc(r,s);return dh(r,rt(s,function(m){return ir(m,c)?+m:m}).sort(wh)),f});function L_(r,s){var c=[];if(!(r&&r.length))return c;var f=-1,m=[],y=r.length;for(s=ge(s,3);++f<y;){var S=r[f];s(S,f,r)&&(c.push(S),m.push(f))}return dh(r,m),c}function Bc(r){return r==null?r:Cb.call(r)}function P_(r,s,c){var f=r==null?0:r.length;return f?(c&&typeof c!="number"&&jt(r,s,c)?(s=0,c=f):(s=s==null?0:Se(s),c=c===n?f:Se(c)),hn(r,s,c)):[]}function M_(r,s){return Ko(r,s)}function B_(r,s,c){return yc(r,s,ge(c,2))}function j_(r,s){var c=r==null?0:r.length;if(c){var f=Ko(r,s);if(f<c&&wn(r[f],s))return f}return-1}function U_(r,s){return Ko(r,s,!0)}function N_(r,s,c){return yc(r,s,ge(c,2),!0)}function D_(r,s){var c=r==null?0:r.length;if(c){var f=Ko(r,s,!0)-1;if(wn(r[f],s))return f}return-1}function z_(r){return r&&r.length?hh(r):[]}function H_(r,s){return r&&r.length?hh(r,ge(s,2)):[]}function F_(r){var s=r==null?0:r.length;return s?hn(r,1,s):[]}function q_(r,s,c){return r&&r.length?(s=c||s===n?1:Se(s),hn(r,0,s<0?0:s)):[]}function W_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Se(s),s=f-s,hn(r,s<0?0:s,f)):[]}function Z_(r,s){return r&&r.length?Go(r,ge(s,3),!1,!0):[]}function V_(r,s){return r&&r.length?Go(r,ge(s,3)):[]}var K_=Oe(function(r){return Rr(St(r,1,ut,!0))}),G_=Oe(function(r){var s=pn(r);return ut(s)&&(s=n),Rr(St(r,1,ut,!0),ge(s,2))}),Q_=Oe(function(r){var s=pn(r);return s=typeof s=="function"?s:n,Rr(St(r,1,ut,!0),n,s)});function Y_(r){return r&&r.length?Rr(r):[]}function J_(r,s){return r&&r.length?Rr(r,ge(s,2)):[]}function X_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Rr(r,n,s):[]}function jc(r){if(!(r&&r.length))return[];var s=0;return r=Cr(r,function(c){if(ut(c))return s=vt(c.length,s),!0}),ec(s,function(c){return rt(r,Yl(c))})}function Xh(r,s){if(!(r&&r.length))return[];var c=jc(r);return s==null?c:rt(c,function(f){return Qt(s,n,f)})}var ew=Oe(function(r,s){return ut(r)?Os(r,s):[]}),tw=Oe(function(r){return wc(Cr(r,ut))}),nw=Oe(function(r){var s=pn(r);return ut(s)&&(s=n),wc(Cr(r,ut),ge(s,2))}),rw=Oe(function(r){var s=pn(r);return s=typeof s=="function"?s:n,wc(Cr(r,ut),n,s)}),iw=Oe(jc);function sw(r,s){return vh(r||[],s||[],Rs)}function ow(r,s){return vh(r||[],s||[],Ms)}var aw=Oe(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Xh(r,c)});function ep(r){var s=b(r);return s.__chain__=!0,s}function lw(r,s){return s(r),r}function ia(r,s){return s(r)}var cw=rr(function(r){var s=r.length,c=s?r[0]:0,f=this.__wrapped__,m=function(y){return lc(y,r)};return s>1||this.__actions__.length||!(f instanceof Ue)||!ir(c)?this.thru(m):(f=f.slice(c,+c+(s?1:0)),f.__actions__.push({func:ia,args:[m],thisArg:n}),new dn(f,this.__chain__).thru(function(y){return s&&!y.length&&y.push(n),y}))});function uw(){return ep(this)}function dw(){return new dn(this.value(),this.__chain__)}function fw(){this.__values__===n&&(this.__values__=pp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function hw(){return this}function pw(r){for(var s,c=this;c instanceof Fo;){var f=Vh(c);f.__index__=0,f.__values__=n,s?m.__wrapped__=f:s=f;var m=f;c=c.__wrapped__}return m.__wrapped__=r,s}function gw(){var r=this.__wrapped__;if(r instanceof Ue){var s=r;return this.__actions__.length&&(s=new Ue(this)),s=s.reverse(),s.__actions__.push({func:ia,args:[Bc],thisArg:n}),new dn(s,this.__chain__)}return this.thru(Bc)}function mw(){return mh(this.__wrapped__,this.__actions__)}var vw=Qo(function(r,s,c){Ge.call(r,c)?++r[c]:tr(r,c,1)});function bw(r,s,c){var f=Ce(r)?Af:ly;return c&&jt(r,s,c)&&(s=n),f(r,ge(s,3))}function yw(r,s){var c=Ce(r)?Cr:Xf;return c(r,ge(s,3))}var _w=Sh(Kh),ww=Sh(Gh);function xw(r,s){return St(sa(r,s),1)}function $w(r,s){return St(sa(r,s),ce)}function kw(r,s,c){return c=c===n?1:Se(c),St(sa(r,s),c)}function tp(r,s){var c=Ce(r)?cn:Ir;return c(r,ge(s,3))}function np(r,s){var c=Ce(r)?F2:Jf;return c(r,ge(s,3))}var Ew=Qo(function(r,s,c){Ge.call(r,c)?r[c].push(s):tr(r,c,[s])});function Cw(r,s,c,f){r=Wt(r)?r:Fi(r),c=c&&!f?Se(c):0;var m=r.length;return c<0&&(c=vt(m+c,0)),ua(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Ri(r,s,c)>-1}var Sw=Oe(function(r,s,c){var f=-1,m=typeof s=="function",y=Wt(r)?N(r.length):[];return Ir(r,function(S){y[++f]=m?Qt(s,S,c):Ls(S,s,c)}),y}),Tw=Qo(function(r,s,c){tr(r,c,s)});function sa(r,s){var c=Ce(r)?rt:sh;return c(r,ge(s,3))}function Aw(r,s,c,f){return r==null?[]:(Ce(s)||(s=s==null?[]:[s]),c=f?n:c,Ce(c)||(c=c==null?[]:[c]),ch(r,s,c))}var Iw=Qo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function Rw(r,s,c){var f=Ce(r)?Gl:Lf,m=arguments.length<3;return f(r,ge(s,4),c,m,Ir)}function Ow(r,s,c){var f=Ce(r)?q2:Lf,m=arguments.length<3;return f(r,ge(s,4),c,m,Jf)}function Lw(r,s){var c=Ce(r)?Cr:Xf;return c(r,la(ge(s,3)))}function Pw(r){var s=Ce(r)?Kf:Cy;return s(r)}function Mw(r,s,c){(c?jt(r,s,c):s===n)?s=1:s=Se(s);var f=Ce(r)?ry:Sy;return f(r,s)}function Bw(r){var s=Ce(r)?iy:Ay;return s(r)}function jw(r){if(r==null)return 0;if(Wt(r))return ua(r)?Li(r):r.length;var s=Ot(r);return s==Je||s==gt?r.size:pc(r).length}function Uw(r,s,c){var f=Ce(r)?Ql:Iy;return c&&jt(r,s,c)&&(s=n),f(r,ge(s,3))}var Nw=Oe(function(r,s){if(r==null)return[];var c=s.length;return c>1&&jt(r,s[0],s[1])?s=[]:c>2&&jt(s[0],s[1],s[2])&&(s=[s[0]]),ch(r,St(s,1),[])}),oa=yb||function(){return Ct.Date.now()};function Dw(r,s){if(typeof s!="function")throw new un(l);return r=Se(r),function(){if(--r<1)return s.apply(this,arguments)}}function rp(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,nr(r,L,n,n,n,n,s)}function ip(r,s){var c;if(typeof s!="function")throw new un(l);return r=Se(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Uc=Oe(function(r,s,c){var f=E;if(c.length){var m=Tr(c,zi(Uc));f|=M}return nr(r,f,s,c,m)}),sp=Oe(function(r,s,c){var f=E|$;if(c.length){var m=Tr(c,zi(sp));f|=M}return nr(s,f,r,c,m)});function op(r,s,c){s=c?n:s;var f=nr(r,R,n,n,n,n,n,s);return f.placeholder=op.placeholder,f}function ap(r,s,c){s=c?n:s;var f=nr(r,T,n,n,n,n,n,s);return f.placeholder=ap.placeholder,f}function lp(r,s,c){var f,m,y,S,I,B,H=0,F=!1,K=!1,ie=!0;if(typeof r!="function")throw new un(l);s=gn(s)||0,it(c)&&(F=!!c.leading,K="maxWait"in c,y=K?vt(gn(c.maxWait)||0,s):y,ie="trailing"in c?!!c.trailing:ie);function he(dt){var xn=f,ar=m;return f=m=n,H=dt,S=r.apply(ar,xn),S}function ve(dt){return H=dt,I=Us(Be,s),F?he(dt):S}function Ae(dt){var xn=dt-B,ar=dt-H,Sp=s-xn;return K?Rt(Sp,y-ar):Sp}function be(dt){var xn=dt-B,ar=dt-H;return B===n||xn>=s||xn<0||K&&ar>=y}function Be(){var dt=oa();if(be(dt))return Ne(dt);I=Us(Be,Ae(dt))}function Ne(dt){return I=n,ie&&f?he(dt):(f=m=n,S)}function en(){I!==n&&bh(I),H=0,f=B=m=I=n}function Ut(){return I===n?S:Ne(oa())}function tn(){var dt=oa(),xn=be(dt);if(f=arguments,m=this,B=dt,xn){if(I===n)return ve(B);if(K)return bh(I),I=Us(Be,s),he(B)}return I===n&&(I=Us(Be,s)),S}return tn.cancel=en,tn.flush=Ut,tn}var zw=Oe(function(r,s){return Yf(r,1,s)}),Hw=Oe(function(r,s,c){return Yf(r,gn(s)||0,c)});function Fw(r){return nr(r,te)}function aa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new un(l);var c=function(){var f=arguments,m=s?s.apply(this,f):f[0],y=c.cache;if(y.has(m))return y.get(m);var S=r.apply(this,f);return c.cache=y.set(m,S)||y,S};return c.cache=new(aa.Cache||er),c}aa.Cache=er;function la(r){if(typeof r!="function")throw new un(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function qw(r){return ip(2,r)}var Ww=Ry(function(r,s){s=s.length==1&&Ce(s[0])?rt(s[0],Yt(ge())):rt(St(s,1),Yt(ge()));var c=s.length;return Oe(function(f){for(var m=-1,y=Rt(f.length,c);++m<y;)f[m]=s[m].call(this,f[m]);return Qt(r,this,f)})}),Nc=Oe(function(r,s){var c=Tr(s,zi(Nc));return nr(r,M,n,s,c)}),cp=Oe(function(r,s){var c=Tr(s,zi(cp));return nr(r,C,n,s,c)}),Zw=rr(function(r,s){return nr(r,U,n,n,n,s)});function Vw(r,s){if(typeof r!="function")throw new un(l);return s=s===n?s:Se(s),Oe(r,s)}function Kw(r,s){if(typeof r!="function")throw new un(l);return s=s==null?0:vt(Se(s),0),Oe(function(c){var f=c[s],m=Lr(c,0,s);return f&&Sr(m,f),Qt(r,this,m)})}function Gw(r,s,c){var f=!0,m=!0;if(typeof r!="function")throw new un(l);return it(c)&&(f="leading"in c?!!c.leading:f,m="trailing"in c?!!c.trailing:m),lp(r,s,{leading:f,maxWait:s,trailing:m})}function Qw(r){return rp(r,1)}function Yw(r,s){return Nc($c(s),r)}function Jw(){if(!arguments.length)return[];var r=arguments[0];return Ce(r)?r:[r]}function Xw(r){return fn(r,w)}function e3(r,s){return s=typeof s=="function"?s:n,fn(r,w,s)}function t3(r){return fn(r,g|w)}function n3(r,s){return s=typeof s=="function"?s:n,fn(r,g|w,s)}function r3(r,s){return s==null||Qf(r,s,wt(s))}function wn(r,s){return r===s||r!==r&&s!==s}var i3=ea(dc),s3=ea(function(r,s){return r>=s}),ai=nh(function(){return arguments}())?nh:function(r){return lt(r)&&Ge.call(r,"callee")&&!Hf.call(r,"callee")},Ce=N.isArray,o3=$f?Yt($f):py;function Wt(r){return r!=null&&ca(r.length)&&!sr(r)}function ut(r){return lt(r)&&Wt(r)}function a3(r){return r===!0||r===!1||lt(r)&&Bt(r)==ze}var Pr=wb||Qc,l3=kf?Yt(kf):gy;function c3(r){return lt(r)&&r.nodeType===1&&!Ns(r)}function u3(r){if(r==null)return!0;if(Wt(r)&&(Ce(r)||typeof r=="string"||typeof r.splice=="function"||Pr(r)||Hi(r)||ai(r)))return!r.length;var s=Ot(r);if(s==Je||s==gt)return!r.size;if(js(r))return!pc(r).length;for(var c in r)if(Ge.call(r,c))return!1;return!0}function d3(r,s){return Ps(r,s)}function f3(r,s,c){c=typeof c=="function"?c:n;var f=c?c(r,s):n;return f===n?Ps(r,s,n,c):!!f}function Dc(r){if(!lt(r))return!1;var s=Bt(r);return s==Re||s==yt||typeof r.message=="string"&&typeof r.name=="string"&&!Ns(r)}function h3(r){return typeof r=="number"&&qf(r)}function sr(r){if(!it(r))return!1;var s=Bt(r);return s==Fe||s==kt||s==J||s==Ei}function up(r){return typeof r=="number"&&r==Se(r)}function ca(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=D}function it(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function lt(r){return r!=null&&typeof r=="object"}var dp=Ef?Yt(Ef):vy;function p3(r,s){return r===s||hc(r,s,Ic(s))}function g3(r,s,c){return c=typeof c=="function"?c:n,hc(r,s,Ic(s),c)}function m3(r){return fp(r)&&r!=+r}function v3(r){if(e_(r))throw new ke(a);return rh(r)}function b3(r){return r===null}function y3(r){return r==null}function fp(r){return typeof r=="number"||lt(r)&&Bt(r)==Et}function Ns(r){if(!lt(r)||Bt(r)!=_t)return!1;var s=Bo(r);if(s===null)return!0;var c=Ge.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Oo.call(c)==gb}var zc=Cf?Yt(Cf):by;function _3(r){return up(r)&&r>=-D&&r<=D}var hp=Sf?Yt(Sf):yy;function ua(r){return typeof r=="string"||!Ce(r)&&lt(r)&&Bt(r)==bn}function Xt(r){return typeof r=="symbol"||lt(r)&&Bt(r)==Pn}var Hi=Tf?Yt(Tf):_y;function w3(r){return r===n}function x3(r){return lt(r)&&Ot(r)==ye}function $3(r){return lt(r)&&Bt(r)==Qn}var k3=ea(gc),E3=ea(function(r,s){return r<=s});function pp(r){if(!r)return[];if(Wt(r))return ua(r)?yn(r):qt(r);if(Cs&&r[Cs])return rb(r[Cs]());var s=Ot(r),c=s==Je?nc:s==gt?Ao:Fi;return c(r)}function or(r){if(!r)return r===0?r:0;if(r=gn(r),r===ce||r===-ce){var s=r<0?-1:1;return s*ne}return r===r?r:0}function Se(r){var s=or(r),c=s%1;return s===s?c?s-c:s:0}function gp(r){return r?ri(Se(r),0,de):0}function gn(r){if(typeof r=="number")return r;if(Xt(r))return re;if(it(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=it(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Pf(r);var c=o2.test(r);return c||l2.test(r)?D2(r.slice(2),c?2:8):s2.test(r)?re:+r}function mp(r){return Bn(r,Zt(r))}function C3(r){return r?ri(Se(r),-D,D):r===0?r:0}function Ke(r){return r==null?"":Jt(r)}var S3=Ni(function(r,s){if(js(s)||Wt(s)){Bn(s,wt(s),r);return}for(var c in s)Ge.call(s,c)&&Rs(r,c,s[c])}),vp=Ni(function(r,s){Bn(s,Zt(s),r)}),da=Ni(function(r,s,c,f){Bn(s,Zt(s),r,f)}),T3=Ni(function(r,s,c,f){Bn(s,wt(s),r,f)}),A3=rr(lc);function I3(r,s){var c=Ui(r);return s==null?c:Gf(c,s)}var R3=Oe(function(r,s){r=Ye(r);var c=-1,f=s.length,m=f>2?s[2]:n;for(m&&jt(s[0],s[1],m)&&(f=1);++c<f;)for(var y=s[c],S=Zt(y),I=-1,B=S.length;++I<B;){var H=S[I],F=r[H];(F===n||wn(F,Mi[H])&&!Ge.call(r,H))&&(r[H]=y[H])}return r}),O3=Oe(function(r){return r.push(n,Ph),Qt(bp,n,r)});function L3(r,s){return If(r,ge(s,3),Mn)}function P3(r,s){return If(r,ge(s,3),uc)}function M3(r,s){return r==null?r:cc(r,ge(s,3),Zt)}function B3(r,s){return r==null?r:eh(r,ge(s,3),Zt)}function j3(r,s){return r&&Mn(r,ge(s,3))}function U3(r,s){return r&&uc(r,ge(s,3))}function N3(r){return r==null?[]:Zo(r,wt(r))}function D3(r){return r==null?[]:Zo(r,Zt(r))}function Hc(r,s,c){var f=r==null?n:ii(r,s);return f===n?c:f}function z3(r,s){return r!=null&&jh(r,s,uy)}function Fc(r,s){return r!=null&&jh(r,s,dy)}var H3=Ah(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),r[s]=c},Wc(Vt)),F3=Ah(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),Ge.call(r,s)?r[s].push(c):r[s]=[c]},ge),q3=Oe(Ls);function wt(r){return Wt(r)?Vf(r):pc(r)}function Zt(r){return Wt(r)?Vf(r,!0):wy(r)}function W3(r,s){var c={};return s=ge(s,3),Mn(r,function(f,m,y){tr(c,s(f,m,y),f)}),c}function Z3(r,s){var c={};return s=ge(s,3),Mn(r,function(f,m,y){tr(c,m,s(f,m,y))}),c}var V3=Ni(function(r,s,c){Vo(r,s,c)}),bp=Ni(function(r,s,c,f){Vo(r,s,c,f)}),K3=rr(function(r,s){var c={};if(r==null)return c;var f=!1;s=rt(s,function(y){return y=Or(y,r),f||(f=y.length>1),y}),Bn(r,Tc(r),c),f&&(c=fn(c,g|v|w,Hy));for(var m=s.length;m--;)_c(c,s[m]);return c});function G3(r,s){return yp(r,la(ge(s)))}var Q3=rr(function(r,s){return r==null?{}:$y(r,s)});function yp(r,s){if(r==null)return{};var c=rt(Tc(r),function(f){return[f]});return s=ge(s),uh(r,c,function(f,m){return s(f,m[0])})}function Y3(r,s,c){s=Or(s,r);var f=-1,m=s.length;for(m||(m=1,r=n);++f<m;){var y=r==null?n:r[jn(s[f])];y===n&&(f=m,y=c),r=sr(y)?y.call(r):y}return r}function J3(r,s,c){return r==null?r:Ms(r,s,c)}function X3(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:Ms(r,s,c,f)}var _p=Oh(wt),wp=Oh(Zt);function e4(r,s,c){var f=Ce(r),m=f||Pr(r)||Hi(r);if(s=ge(s,4),c==null){var y=r&&r.constructor;m?c=f?new y:[]:it(r)?c=sr(y)?Ui(Bo(r)):{}:c={}}return(m?cn:Mn)(r,function(S,I,B){return s(c,S,I,B)}),c}function t4(r,s){return r==null?!0:_c(r,s)}function n4(r,s,c){return r==null?r:gh(r,s,$c(c))}function r4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:gh(r,s,$c(c),f)}function Fi(r){return r==null?[]:tc(r,wt(r))}function i4(r){return r==null?[]:tc(r,Zt(r))}function s4(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=gn(c),c=c===c?c:0),s!==n&&(s=gn(s),s=s===s?s:0),ri(gn(r),s,c)}function o4(r,s,c){return s=or(s),c===n?(c=s,s=0):c=or(c),r=gn(r),fy(r,s,c)}function a4(r,s,c){if(c&&typeof c!="boolean"&&jt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=or(r),s===n?(s=r,r=0):s=or(s)),r>s){var f=r;r=s,s=f}if(c||r%1||s%1){var m=Wf();return Rt(r+m*(s-r+N2("1e-"+((m+"").length-1))),s)}return vc(r,s)}var l4=Di(function(r,s,c){return s=s.toLowerCase(),r+(c?xp(s):s)});function xp(r){return qc(Ke(r).toLowerCase())}function $p(r){return r=Ke(r),r&&r.replace(u2,J2).replace(A2,"")}function c4(r,s,c){r=Ke(r),s=Jt(s);var f=r.length;c=c===n?f:ri(Se(c),0,f);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function u4(r){return r=Ke(r),r&&qv.test(r)?r.replace(Xd,X2):r}function d4(r){return r=Ke(r),r&&Qv.test(r)?r.replace(Nl,"\\$&"):r}var f4=Di(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),h4=Di(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),p4=Ch("toLowerCase");function g4(r,s,c){r=Ke(r),s=Se(s);var f=s?Li(r):0;if(!s||f>=s)return r;var m=(s-f)/2;return Xo(Do(m),c)+r+Xo(No(m),c)}function m4(r,s,c){r=Ke(r),s=Se(s);var f=s?Li(r):0;return s&&f<s?r+Xo(s-f,c):r}function v4(r,s,c){r=Ke(r),s=Se(s);var f=s?Li(r):0;return s&&f<s?Xo(s-f,c)+r:r}function b4(r,s,c){return c||s==null?s=0:s&&(s=+s),Eb(Ke(r).replace(Dl,""),s||0)}function y4(r,s,c){return(c?jt(r,s,c):s===n)?s=1:s=Se(s),bc(Ke(r),s)}function _4(){var r=arguments,s=Ke(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var w4=Di(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function x4(r,s,c){return c&&typeof c!="number"&&jt(r,s,c)&&(s=c=n),c=c===n?de:c>>>0,c?(r=Ke(r),r&&(typeof s=="string"||s!=null&&!zc(s))&&(s=Jt(s),!s&&Oi(r))?Lr(yn(r),0,c):r.split(s,c)):[]}var $4=Di(function(r,s,c){return r+(c?" ":"")+qc(s)});function k4(r,s,c){return r=Ke(r),c=c==null?0:ri(Se(c),0,r.length),s=Jt(s),r.slice(c,c+s.length)==s}function E4(r,s,c){var f=b.templateSettings;c&&jt(r,s,c)&&(s=n),r=Ke(r),s=da({},s,f,Lh);var m=da({},s.imports,f.imports,Lh),y=wt(m),S=tc(m,y),I,B,H=0,F=s.interpolate||ko,K="__p += '",ie=rc((s.escape||ko).source+"|"+F.source+"|"+(F===ef?i2:ko).source+"|"+(s.evaluate||ko).source+"|$","g"),he="//# sourceURL="+(Ge.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++P2+"]")+`
`;r.replace(ie,function(be,Be,Ne,en,Ut,tn){return Ne||(Ne=en),K+=r.slice(H,tn).replace(d2,eb),Be&&(I=!0,K+=`' +
__e(`+Be+`) +
'`),Ut&&(B=!0,K+=`';
`+Ut+`;
__p += '`),Ne&&(K+=`' +
((__t = (`+Ne+`)) == null ? '' : __t) +
'`),H=tn+be.length,be}),K+=`';
`;var ve=Ge.call(s,"variable")&&s.variable;if(!ve)K=`with (obj) {
`+K+`
}
`;else if(n2.test(ve))throw new ke(u);K=(B?K.replace(Dv,""):K).replace(zv,"$1").replace(Hv,"$1;"),K="function("+(ve||"obj")+`) {
`+(ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var Ae=Ep(function(){return We(y,he+"return "+K).apply(n,S)});if(Ae.source=K,Dc(Ae))throw Ae;return Ae}function C4(r){return Ke(r).toLowerCase()}function S4(r){return Ke(r).toUpperCase()}function T4(r,s,c){if(r=Ke(r),r&&(c||s===n))return Pf(r);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=yn(s),y=Mf(f,m),S=Bf(f,m)+1;return Lr(f,y,S).join("")}function A4(r,s,c){if(r=Ke(r),r&&(c||s===n))return r.slice(0,Uf(r)+1);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Bf(f,yn(s))+1;return Lr(f,0,m).join("")}function I4(r,s,c){if(r=Ke(r),r&&(c||s===n))return r.replace(Dl,"");if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Mf(f,yn(s));return Lr(f,m).join("")}function R4(r,s){var c=W,f=Q;if(it(s)){var m="separator"in s?s.separator:m;c="length"in s?Se(s.length):c,f="omission"in s?Jt(s.omission):f}r=Ke(r);var y=r.length;if(Oi(r)){var S=yn(r);y=S.length}if(c>=y)return r;var I=c-Li(f);if(I<1)return f;var B=S?Lr(S,0,I).join(""):r.slice(0,I);if(m===n)return B+f;if(S&&(I+=B.length-I),zc(m)){if(r.slice(I).search(m)){var H,F=B;for(m.global||(m=rc(m.source,Ke(tf.exec(m))+"g")),m.lastIndex=0;H=m.exec(F);)var K=H.index;B=B.slice(0,K===n?I:K)}}else if(r.indexOf(Jt(m),I)!=I){var ie=B.lastIndexOf(m);ie>-1&&(B=B.slice(0,ie))}return B+f}function O4(r){return r=Ke(r),r&&Fv.test(r)?r.replace(Jd,ab):r}var L4=Di(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),qc=Ch("toUpperCase");function kp(r,s,c){return r=Ke(r),s=c?n:s,s===n?nb(r)?ub(r):V2(r):r.match(s)||[]}var Ep=Oe(function(r,s){try{return Qt(r,n,s)}catch(c){return Dc(c)?c:new ke(c)}}),P4=rr(function(r,s){return cn(s,function(c){c=jn(c),tr(r,c,Uc(r[c],r))}),r});function M4(r){var s=r==null?0:r.length,c=ge();return r=s?rt(r,function(f){if(typeof f[1]!="function")throw new un(l);return[c(f[0]),f[1]]}):[],Oe(function(f){for(var m=-1;++m<s;){var y=r[m];if(Qt(y[0],this,f))return Qt(y[1],this,f)}})}function B4(r){return ay(fn(r,g))}function Wc(r){return function(){return r}}function j4(r,s){return r==null||r!==r?s:r}var U4=Th(),N4=Th(!0);function Vt(r){return r}function Zc(r){return ih(typeof r=="function"?r:fn(r,g))}function D4(r){return oh(fn(r,g))}function z4(r,s){return ah(r,fn(s,g))}var H4=Oe(function(r,s){return function(c){return Ls(c,r,s)}}),F4=Oe(function(r,s){return function(c){return Ls(r,c,s)}});function Vc(r,s,c){var f=wt(s),m=Zo(s,f);c==null&&!(it(s)&&(m.length||!f.length))&&(c=s,s=r,r=this,m=Zo(s,wt(s)));var y=!(it(c)&&"chain"in c)||!!c.chain,S=sr(r);return cn(m,function(I){var B=s[I];r[I]=B,S&&(r.prototype[I]=function(){var H=this.__chain__;if(y||H){var F=r(this.__wrapped__),K=F.__actions__=qt(this.__actions__);return K.push({func:B,args:arguments,thisArg:r}),F.__chain__=H,F}return B.apply(r,Sr([this.value()],arguments))})}),r}function q4(){return Ct._===this&&(Ct._=mb),this}function Kc(){}function W4(r){return r=Se(r),Oe(function(s){return lh(s,r)})}var Z4=Ec(rt),V4=Ec(Af),K4=Ec(Ql);function Cp(r){return Oc(r)?Yl(jn(r)):ky(r)}function G4(r){return function(s){return r==null?n:ii(r,s)}}var Q4=Ih(),Y4=Ih(!0);function Gc(){return[]}function Qc(){return!1}function J4(){return{}}function X4(){return""}function ex(){return!0}function tx(r,s){if(r=Se(r),r<1||r>D)return[];var c=de,f=Rt(r,de);s=ge(s),r-=de;for(var m=ec(f,s);++c<r;)s(c);return m}function nx(r){return Ce(r)?rt(r,jn):Xt(r)?[r]:qt(Zh(Ke(r)))}function rx(r){var s=++pb;return Ke(r)+s}var ix=Jo(function(r,s){return r+s},0),sx=Cc("ceil"),ox=Jo(function(r,s){return r/s},1),ax=Cc("floor");function lx(r){return r&&r.length?Wo(r,Vt,dc):n}function cx(r,s){return r&&r.length?Wo(r,ge(s,2),dc):n}function ux(r){return Of(r,Vt)}function dx(r,s){return Of(r,ge(s,2))}function fx(r){return r&&r.length?Wo(r,Vt,gc):n}function hx(r,s){return r&&r.length?Wo(r,ge(s,2),gc):n}var px=Jo(function(r,s){return r*s},1),gx=Cc("round"),mx=Jo(function(r,s){return r-s},0);function vx(r){return r&&r.length?Xl(r,Vt):0}function bx(r,s){return r&&r.length?Xl(r,ge(s,2)):0}return b.after=Dw,b.ary=rp,b.assign=S3,b.assignIn=vp,b.assignInWith=da,b.assignWith=T3,b.at=A3,b.before=ip,b.bind=Uc,b.bindAll=P4,b.bindKey=sp,b.castArray=Jw,b.chain=ep,b.chunk=a_,b.compact=l_,b.concat=c_,b.cond=M4,b.conforms=B4,b.constant=Wc,b.countBy=vw,b.create=I3,b.curry=op,b.curryRight=ap,b.debounce=lp,b.defaults=R3,b.defaultsDeep=O3,b.defer=zw,b.delay=Hw,b.difference=u_,b.differenceBy=d_,b.differenceWith=f_,b.drop=h_,b.dropRight=p_,b.dropRightWhile=g_,b.dropWhile=m_,b.fill=v_,b.filter=yw,b.flatMap=xw,b.flatMapDeep=$w,b.flatMapDepth=kw,b.flatten=Qh,b.flattenDeep=b_,b.flattenDepth=y_,b.flip=Fw,b.flow=U4,b.flowRight=N4,b.fromPairs=__,b.functions=N3,b.functionsIn=D3,b.groupBy=Ew,b.initial=x_,b.intersection=$_,b.intersectionBy=k_,b.intersectionWith=E_,b.invert=H3,b.invertBy=F3,b.invokeMap=Sw,b.iteratee=Zc,b.keyBy=Tw,b.keys=wt,b.keysIn=Zt,b.map=sa,b.mapKeys=W3,b.mapValues=Z3,b.matches=D4,b.matchesProperty=z4,b.memoize=aa,b.merge=V3,b.mergeWith=bp,b.method=H4,b.methodOf=F4,b.mixin=Vc,b.negate=la,b.nthArg=W4,b.omit=K3,b.omitBy=G3,b.once=qw,b.orderBy=Aw,b.over=Z4,b.overArgs=Ww,b.overEvery=V4,b.overSome=K4,b.partial=Nc,b.partialRight=cp,b.partition=Iw,b.pick=Q3,b.pickBy=yp,b.property=Cp,b.propertyOf=G4,b.pull=A_,b.pullAll=Jh,b.pullAllBy=I_,b.pullAllWith=R_,b.pullAt=O_,b.range=Q4,b.rangeRight=Y4,b.rearg=Zw,b.reject=Lw,b.remove=L_,b.rest=Vw,b.reverse=Bc,b.sampleSize=Mw,b.set=J3,b.setWith=X3,b.shuffle=Bw,b.slice=P_,b.sortBy=Nw,b.sortedUniq=z_,b.sortedUniqBy=H_,b.split=x4,b.spread=Kw,b.tail=F_,b.take=q_,b.takeRight=W_,b.takeRightWhile=Z_,b.takeWhile=V_,b.tap=lw,b.throttle=Gw,b.thru=ia,b.toArray=pp,b.toPairs=_p,b.toPairsIn=wp,b.toPath=nx,b.toPlainObject=mp,b.transform=e4,b.unary=Qw,b.union=K_,b.unionBy=G_,b.unionWith=Q_,b.uniq=Y_,b.uniqBy=J_,b.uniqWith=X_,b.unset=t4,b.unzip=jc,b.unzipWith=Xh,b.update=n4,b.updateWith=r4,b.values=Fi,b.valuesIn=i4,b.without=ew,b.words=kp,b.wrap=Yw,b.xor=tw,b.xorBy=nw,b.xorWith=rw,b.zip=iw,b.zipObject=sw,b.zipObjectDeep=ow,b.zipWith=aw,b.entries=_p,b.entriesIn=wp,b.extend=vp,b.extendWith=da,Vc(b,b),b.add=ix,b.attempt=Ep,b.camelCase=l4,b.capitalize=xp,b.ceil=sx,b.clamp=s4,b.clone=Xw,b.cloneDeep=t3,b.cloneDeepWith=n3,b.cloneWith=e3,b.conformsTo=r3,b.deburr=$p,b.defaultTo=j4,b.divide=ox,b.endsWith=c4,b.eq=wn,b.escape=u4,b.escapeRegExp=d4,b.every=bw,b.find=_w,b.findIndex=Kh,b.findKey=L3,b.findLast=ww,b.findLastIndex=Gh,b.findLastKey=P3,b.floor=ax,b.forEach=tp,b.forEachRight=np,b.forIn=M3,b.forInRight=B3,b.forOwn=j3,b.forOwnRight=U3,b.get=Hc,b.gt=i3,b.gte=s3,b.has=z3,b.hasIn=Fc,b.head=Yh,b.identity=Vt,b.includes=Cw,b.indexOf=w_,b.inRange=o4,b.invoke=q3,b.isArguments=ai,b.isArray=Ce,b.isArrayBuffer=o3,b.isArrayLike=Wt,b.isArrayLikeObject=ut,b.isBoolean=a3,b.isBuffer=Pr,b.isDate=l3,b.isElement=c3,b.isEmpty=u3,b.isEqual=d3,b.isEqualWith=f3,b.isError=Dc,b.isFinite=h3,b.isFunction=sr,b.isInteger=up,b.isLength=ca,b.isMap=dp,b.isMatch=p3,b.isMatchWith=g3,b.isNaN=m3,b.isNative=v3,b.isNil=y3,b.isNull=b3,b.isNumber=fp,b.isObject=it,b.isObjectLike=lt,b.isPlainObject=Ns,b.isRegExp=zc,b.isSafeInteger=_3,b.isSet=hp,b.isString=ua,b.isSymbol=Xt,b.isTypedArray=Hi,b.isUndefined=w3,b.isWeakMap=x3,b.isWeakSet=$3,b.join=C_,b.kebabCase=f4,b.last=pn,b.lastIndexOf=S_,b.lowerCase=h4,b.lowerFirst=p4,b.lt=k3,b.lte=E3,b.max=lx,b.maxBy=cx,b.mean=ux,b.meanBy=dx,b.min=fx,b.minBy=hx,b.stubArray=Gc,b.stubFalse=Qc,b.stubObject=J4,b.stubString=X4,b.stubTrue=ex,b.multiply=px,b.nth=T_,b.noConflict=q4,b.noop=Kc,b.now=oa,b.pad=g4,b.padEnd=m4,b.padStart=v4,b.parseInt=b4,b.random=a4,b.reduce=Rw,b.reduceRight=Ow,b.repeat=y4,b.replace=_4,b.result=Y3,b.round=gx,b.runInContext=P,b.sample=Pw,b.size=jw,b.snakeCase=w4,b.some=Uw,b.sortedIndex=M_,b.sortedIndexBy=B_,b.sortedIndexOf=j_,b.sortedLastIndex=U_,b.sortedLastIndexBy=N_,b.sortedLastIndexOf=D_,b.startCase=$4,b.startsWith=k4,b.subtract=mx,b.sum=vx,b.sumBy=bx,b.template=E4,b.times=tx,b.toFinite=or,b.toInteger=Se,b.toLength=gp,b.toLower=C4,b.toNumber=gn,b.toSafeInteger=C3,b.toString=Ke,b.toUpper=S4,b.trim=T4,b.trimEnd=A4,b.trimStart=I4,b.truncate=R4,b.unescape=O4,b.uniqueId=rx,b.upperCase=L4,b.upperFirst=qc,b.each=tp,b.eachRight=np,b.first=Yh,Vc(b,function(){var r={};return Mn(b,function(s,c){Ge.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),cn(["drop","take"],function(r,s){Ue.prototype[r]=function(c){c=c===n?1:vt(Se(c),0);var f=this.__filtered__&&!s?new Ue(this):this.clone();return f.__filtered__?f.__takeCount__=Rt(c,f.__takeCount__):f.__views__.push({size:Rt(c,de),type:r+(f.__dir__<0?"Right":"")}),f},Ue.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),cn(["filter","map","takeWhile"],function(r,s){var c=s+1,f=c==se||c==Y;Ue.prototype[r]=function(m){var y=this.clone();return y.__iteratees__.push({iteratee:ge(m,3),type:c}),y.__filtered__=y.__filtered__||f,y}}),cn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Ue.prototype[r]=function(){return this[c](1).value()[0]}}),cn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Ue.prototype[r]=function(){return this.__filtered__?new Ue(this):this[c](1)}}),Ue.prototype.compact=function(){return this.filter(Vt)},Ue.prototype.find=function(r){return this.filter(r).head()},Ue.prototype.findLast=function(r){return this.reverse().find(r)},Ue.prototype.invokeMap=Oe(function(r,s){return typeof r=="function"?new Ue(this):this.map(function(c){return Ls(c,r,s)})}),Ue.prototype.reject=function(r){return this.filter(la(ge(r)))},Ue.prototype.slice=function(r,s){r=Se(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Ue(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Se(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Ue.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ue.prototype.toArray=function(){return this.take(de)},Mn(Ue.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),m=b[f?"take"+(s=="last"?"Right":""):s],y=f||/^find/.test(s);m&&(b.prototype[s]=function(){var S=this.__wrapped__,I=f?[1]:arguments,B=S instanceof Ue,H=I[0],F=B||Ce(S),K=function(Be){var Ne=m.apply(b,Sr([Be],I));return f&&ie?Ne[0]:Ne};F&&c&&typeof H=="function"&&H.length!=1&&(B=F=!1);var ie=this.__chain__,he=!!this.__actions__.length,ve=y&&!ie,Ae=B&&!he;if(!y&&F){S=Ae?S:new Ue(this);var be=r.apply(S,I);return be.__actions__.push({func:ia,args:[K],thisArg:n}),new dn(be,ie)}return ve&&Ae?r.apply(this,I):(be=this.thru(K),ve?f?be.value()[0]:be.value():be)})}),cn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Io[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(f&&!this.__chain__){var y=this.value();return s.apply(Ce(y)?y:[],m)}return this[c](function(S){return s.apply(Ce(S)?S:[],m)})}}),Mn(Ue.prototype,function(r,s){var c=b[s];if(c){var f=c.name+"";Ge.call(ji,f)||(ji[f]=[]),ji[f].push({name:s,func:c})}}),ji[Yo(n,$).name]=[{name:"wrapper",func:n}],Ue.prototype.clone=Ob,Ue.prototype.reverse=Lb,Ue.prototype.value=Pb,b.prototype.at=cw,b.prototype.chain=uw,b.prototype.commit=dw,b.prototype.next=fw,b.prototype.plant=pw,b.prototype.reverse=gw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=mw,b.prototype.first=b.prototype.head,Cs&&(b.prototype[Cs]=hw),b},Pi=db();Xr?((Xr.exports=Pi)._=Pi,Zl._=Pi):Ct._=Pi}).call(dr)})(tl,tl.exports);var UP=tl.exports;const mr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>mr(n)(t));case"OR":return e.children.some(n=>mr(n)(t));case"NOT":return!mr(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Wu=e=>{const t=_i(),n=De(e),i=()=>["useFollowings",n()],o=wi(i,({queryKey:d,signal:h})=>{console.debug("useFollowings");const[,p]=d;if(p==null)return Promise.resolve(null);const{pubkey:g}=p,v=vs({type:"Followings",pubkey:g},h).then(w=>{const k=()=>{const x=kd(w().events);if(x==null)throw new Error(`followings not found: ${g}`);return x};return ho(w).subscribe(()=>{try{t.setQueryData(d,k())}catch(x){console.error("error occurred while updating followings cache: ",x)}}),k()});return wr(15e3,`useFollowings: ${g}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return hr(o.data).pTags().forEach(p=>{const[,g,v,w]=p,k={pubkey:g,petname:w};v!=null&&v.length>0&&(k.mainRelayUrl=v),d.push(k)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},NP=e=>{const{config:t,removeColumn:n}=Pe(),{followingPubkeys:i}=Wu(()=>({pubkey:e.column.pubkey})),{events:o}=xr(()=>{const a=UP.uniq([...i()]);return a.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:ur()-4*60*60}],clientEventFilter:l=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(l.content)}});return Un(()=>{console.log("home",o())}),an(()=>console.log("home timeline mounted")),vr(()=>console.log("home timeline unmounted")),_($i,{get header(){return _(ls,{get name(){return e.column.name??"ホーム"},get icon(){return _(Ev,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(_s,{get events(){return o()}})}})},DP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Cv=(e={})=>(()=>{const t=DP();return Ze(t,e,!0,!0),t})(),zP=j('<span class="h-4 w-4 pt-[1px] text-rose-400">'),HP=j('<img alt="icon" class="rounded">'),FP=j('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),qP=j('<div class="notification-event py-1">'),WP=j('<span class="truncate">'),ZP=j('<div class="truncate">読み込み中 '),VP=e=>{const{shouldMuteEvent:t}=Pe(),{showProfile:n}=Yr(),i=()=>hr(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=bs(()=>({pubkey:e.event.pubkey})),{event:l,query:u}=bm(()=>on([o()])(([h])=>({eventId:h}))),d=()=>u.isSuccess&&l()==null;return _(ue,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const h=FP(),p=h.firstChild,g=p.nextSibling,v=g.firstChild,w=v.nextSibling,k=w.firstChild;return O(p,_(Sn,{get fallback(){return(()=>{const x=WP();return O(x,()=>e.event.content),x})()},get children(){return _(He,{get when(){return e.event.content==="+"},get children(){const x=zP();return O(x,_(Cd,{})),x}})}})),O(v,_(ue,{get when(){return a()?.picture!=null},get children(){const x=HP();return Me(()=>ht(x,"src",a()?.picture)),x}})),k.$$click=()=>n(e.event.pubkey),O(k,_(Tl,{get pubkey(){return e.event.pubkey}})),h})(),(()=>{const h=qP();return O(h,_(ue,{get when(){return l()},get fallback(){return(()=>{const p=ZP();return p.firstChild,O(p,o,null),p})()},keyed:!0,children:p=>_(rv,{event:p})})),h})()]}})};at(["click"]);const KP=j("<div>unknown event"),Sv=e=>{const{shouldMuteEvent:t}=Pe();return _(It,{get each(){return e.events},children:n=>_(ue,{get when(){return!t(n)},get children(){return _(Sn,{get fallback(){return KP()},get children(){return[_(He,{get when(){return n.kind===ct.Text},get children(){return _(Ws,{get children(){return _(iv,{event:n})}})}}),_(He,{get when(){return n.kind===ct.Reaction},get children(){return _(Ws,{get children(){return _(VP,{event:n})}})}}),_(He,{get when(){return n.kind===6},get children(){return _(Ws,{get children(){return _(xm,{event:n})}})}})]}})}})})},GP=e=>{const{config:t,removeColumn:n}=Pe(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"通知"},get icon(){return _(Cv,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(Sv,{get events(){return i()}})}})},QP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Wd=(e={})=>(()=>{const t=QP();return Ze(t,e,!0,!0),t})(),YP=e=>{const{config:t,removeColumn:n}=Pe(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"投稿"},get icon(){return _(Wd,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(_s,{get events(){return i()}})}})},JP=e=>{const{config:t,removeColumn:n}=Pe(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"リアクション"},get icon(){return _(Ed,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(Sv,{get events(){return i()}})}})},XP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Zd=(e={})=>(()=>{const t=XP();return Ze(t,e,!0,!0),t})(),eM=e=>{const{removeColumn:t}=Pe(),{events:n}=xr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:ur()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(i.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"リレー"},get icon(){return _(Zd,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(_s,{get events(){return n()}})}})},tM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),Tv=(e={})=>(()=>{const t=tM();return Ze(t,e,!0,!0),t})(),nM=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),rM=e=>{const[t,n]=_e(!1),[i,o]=_e(""),{saveColumn:a}=Pe(),l=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},h=g=>{o(g.currentTarget.value)},p=g=>{g.preventDefault(),u()};return an(()=>{o(e.column.query)}),(()=>{const g=nM(),v=g.firstChild,w=v.firstChild,k=w.firstChild,x=w.nextSibling,E=x.firstChild,$=x.nextSibling;return O(k,_(Tv,{})),x.addEventListener("submit",p),E.addEventListener("blur",d),E.addEventListener("change",h),$.$$click=()=>l(),O($,_(Ig,{})),O(g,_(ue,{get when(){return t()},get children(){return e.settings()}}),null),Me(()=>E.value=i()),g})()},iM=e=>{const{removeColumn:t}=Pe(),{events:n}=xr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:Rk,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}});return _($i,{get header(){return _(rM,{get column(){return e.column},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(_s,{get events(){return n()}})}})};at(["click"]);const sM=j('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),oM=()=>{const{config:e}=Pe();return(()=>{const t=sM();return O(t,_(It,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return _(Sn,{get children(){return[_(He,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:l=>_(NP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(He,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:l=>_(GP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(He,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:l=>_(YP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(He,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:l=>_(JP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(He,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:l=>_(eM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(He,{get when(){return n.columnType==="Bookmark"&&n},keyed:!0,children:l=>_(BP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(He,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:l=>_(iM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},aM=j('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),lM=j('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),cM=j('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),uM=async()=>{const t=await(await fetch(Ku("packageInfo.json"))).text();return JSON.parse(t)},dM=e=>{const[t]=Cg(uM);return _(ys,{get onClose(){return e.onClose},get children(){const n=aM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,h=d.nextSibling,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,w=v.nextSibling;w.nextSibling;const k=g.nextSibling,x=k.nextSibling,E=x.nextSibling,$=E.nextSibling,A=$.nextSibling,R=A.nextSibling,T=R.nextSibling;return T.nextSibling,O(u,()=>t()?.self?.version,null),O(g,_(Rl,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),O(T,()=>t()?.self.licenseText),O(n,_(It,{get each(){return t()?.packages??[]},fallback:"取得中",children:M=>[(()=>{const C=lM(),L=C.firstChild,U=L.nextSibling,te=U.nextSibling,W=te.nextSibling;return W.nextSibling,O(C,()=>M.name,L),O(C,()=>M.version,U),O(C,()=>M.licenseSpdx,W),C})(),(()=>{const C=cM();return O(C,()=>M.licenseText),C})()]}),null),Me(()=>ht(o,"src",Ku("images/rabbit_app_256.png"))),n}})},fM=j('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),hM=e=>{const t=Vn(),{saveColumn:n}=Pe(),i=xo(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(g=>console.error(g))},a=()=>{on([t()])(([g])=>{n(X1({pubkey:g}))}),o()},l=()=>{on([t()])(([g])=>{n(em({pubkey:g}))}),o()},u=()=>{n(tm()),o()},d=()=>{n($d({query:""})),o()},h=()=>{on([t()])(([g])=>{n(nm({pubkey:g}))}),o()},p=()=>{on([t()])(([g])=>{n(rm({pubkey:g}))}),o()};return _(ys,{get onClose(){return e.onClose},get children(){const g=fM(),v=g.firstChild,w=v.firstChild,k=v.nextSibling,x=k.firstChild,E=k.nextSibling,$=E.firstChild,A=E.nextSibling,R=A.firstChild,T=A.nextSibling,M=T.firstChild,C=T.nextSibling,L=C.firstChild;return v.$$click=()=>a(),O(w,_(Ev,{})),k.$$click=()=>l(),O(x,_(Cv,{})),E.$$click=()=>u(),O($,_(Zd,{})),A.$$click=()=>d(),O(R,_(Tv,{})),T.$$click=()=>h(),O(M,_(Wd,{})),C.$$click=()=>p(),O(L,_(Ed,{})),g}})};at(["click"]);const pM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),gM=(e={})=>(()=>{const t=pM();return Ze(t,e,!0,!0),t})(),mM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),vM=(e={})=>(()=>{const t=mM();return Ze(t,e,!0,!0),t})(),bM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),yM=(e={})=>(()=>{const t=bM();return Ze(t,e,!0,!0),t})();function _M(e){const{config:t}=Pe(),n=De(e),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[ct.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>pr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const wM=e=>{const t=De(e),n=wi(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return K1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},xM=j('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),$M=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),kM=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),EM=j('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),CM=j('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),SM=j('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),TM=j('<div class="shrink-0 text-xs">読み込み中'),AM=j('<div class="shrink-0 text-xs">フォローされています'),IM=j('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),RM=j('<div class="truncate text-xl font-bold">'),OM=j('<div class="truncate text-xs">@'),LM=j('<span class="inline-block h-3 w-3">'),PM=j('<span class="inline-block h-4 w-4 text-blue-400">'),MM=j('<div class="flex items-center text-xs">'),BM=j('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),jM=j('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),UM=j('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),NM=j('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),DM=j('<ul class="border-t px-5 py-2 text-xs">'),zM=j('<ul class="border-t p-1">'),HM=j('<div class="h-12 shrink-0">'),FM=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),qM=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),WM=j('<span class="inline-block h-4 w-4 text-rose-500">'),ZM=j('<span class="text-sm">読み込み中'),VM=j('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),KM=j('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),GM=e=>{const{count:t}=_M(()=>({pubkey:e.pubkey}));return De(t)},QM=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=Pe(),a=Ol(),l=Vn(),{showProfileEdit:u}=Yr(),d=De(()=>Sl(e.pubkey)),[h,p]=_e(!1),[g,v]=_e(!1),{profile:w,query:k}=bs(()=>({pubkey:e.pubkey})),{verification:x,query:E}=wM(()=>on([w()?.nip05])(([D])=>({nip05:D}))),$=()=>{const D=w()?.nip05;if(D==null)return null;const[ne,re]=D.split("@");return re==null?null:ne==="_"?{domain:re,ident:re}:{user:ne,domain:re,ident:D}},A=()=>x()?.pubkey===e.pubkey,R=()=>o(e.pubkey),{followingPubkeys:T,invalidateFollowings:M,query:C}=Wu(()=>on([l()])(([D])=>({pubkey:D}))),L=()=>T().includes(e.pubkey),U=()=>C.refetch(),{followingPubkeys:te,query:W}=Wu(()=>({pubkey:e.pubkey})),Q=()=>{const D=l();return D!=null&&te().includes(D)},q=pi({mutationKey:["updateContacts"],mutationFn:(...D)=>a.updateContacts(...D).then(ne=>Promise.allSettled(ne.map(wr(5e3)))),onSuccess:D=>{const ne=D.filter(de=>de.status==="fulfilled").length,re=D.length-ne;ne===D.length?console.log("succeeded to update contacts"):ne>0?console.log(`succeeded to update contacts for ${ne} relays but failed for ${re} relays`):console.error("failed to update contacts")},onError:D=>{console.error("failed to update contacts: ",D)},onSettled:()=>{M().then(()=>C.refetch()).catch(D=>console.error("failed to refetch contacts",D))}}),X=D=>ne=>(...re)=>{D(...re).catch(de=>{ne(de)})},se=X(async()=>{const D=l();D!=null&&C.isFetched&&(await U(),q.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:pr([...T(),e.pubkey])}))})(D=>{console.log("failed to follow",D)}),Z=X(async()=>{const D=l();D!=null&&C.isFetched&&window.confirm("本当にフォロー解除しますか？")&&(await U(),q.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:T().filter(ne=>ne!==e.pubkey)}))})(D=>{console.log("failed to unfollow",D)}),Y=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(D=>window.alert(D))}},{content:()=>R()?"ミュート解除":"ミュート",onSelect:()=>{R()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===l(),content:()=>L()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{L()?Z():se()}}],{events:ce}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:ur()}],continuous:!1}));return _(ys,{onClose:()=>e.onClose?.(),get children(){return[_(ue,{get when(){return k.isFetched},get fallback(){return"loading"},get children(){return[_(ue,{get when(){return w()?.banner},get fallback(){return HM()},keyed:!0,children:D=>(()=>{const ne=FM(),re=ne.firstChild;return ht(re,"src",D),ne})()}),(()=>{const D=IM(),ne=D.firstChild,re=ne.firstChild,de=ne.nextSibling,we=de.firstChild;return O(re,_(ue,{get when(){return w()?.picture},keyed:!0,children:G=>(()=>{const fe=qM();return ht(fe,"src",G),fe})()})),O(we,_(Sn,{get children(){return[_(He,{get when(){return e.pubkey===l()},get children(){const G=xM();return G.$$click=()=>u(),G}}),_(He,{get when(){return C.isLoading||C.isFetching},get children(){return $M()}}),_(He,{get when(){return q.isLoading},get children(){return kM()}}),_(He,{get when(){return L()},get children(){const G=EM();return G.$$click=()=>Z(),G.addEventListener("mouseleave",()=>p(!1)),G.addEventListener("mouseenter",()=>p(!0)),O(G,_(ue,{get when(){return!h()},fallback:"フォロー解除",children:"フォロー中"})),Me(()=>G.disabled=q.isLoading),G}}),_(He,{get when(){return!L()},get children(){const G=CM();return G.$$click=()=>se(),Me(()=>G.disabled=q.isLoading),G}})]}}),null),O(we,_(Em,{menu:Y,get children(){const G=SM();return O(G,_($m,{})),G}}),null),O(de,_(Sn,{get children(){return[_(He,{get when(){return W.isLoading},get children(){return TM()}}),_(He,{get when(){return Q()},get children(){return AM()}})]}}),null),D})(),(()=>{const D=BM(),ne=D.firstChild,re=ne.firstChild,de=re.nextSibling,we=de.firstChild;return O(ne,_(ue,{get when(){return(w()?.display_name?.length??0)>0},get children(){const G=RM();return O(G,()=>w()?.display_name),G}}),re),O(re,_(ue,{get when(){return(w()?.name?.length??0)>0},get children(){const G=OM();return G.firstChild,O(G,()=>w()?.name,null),G}}),null),O(re,_(ue,{get when(){return(w()?.nip05?.length??0)>0},get children(){const G=MM();return O(G,()=>$()?.ident,null),O(G,_(Sn,{get fallback(){return(()=>{const fe=WM();return O(fe,_(yM,{})),fe})()},get children(){return[_(He,{get when(){return E.isLoading},get children(){const fe=LM();return O(fe,_(gM,{})),fe}}),_(He,{get when(){return A()},get children(){const fe=PM();return O(fe,_(vM,{})),fe}})]}}),null),G}}),null),O(we,d),D})(),_(ue,{get when(){return(w()?.about??"").length>0},get children(){const D=jM();return O(D,()=>w()?.about),D}}),(()=>{const D=NM(),ne=D.firstChild,re=ne.firstChild,de=re.nextSibling;return O(de,_(ue,{get when(){return W.isFetched},get fallback(){return ZM()},get children(){return te().length}})),O(D,_(ue,{get when(){return!t().hideCount},get children(){const we=UM(),G=we.firstChild,fe=G.nextSibling;return O(fe,_(ue,{get when(){return g()},get fallback(){return(()=>{const $e=VM();return $e.$$click=()=>v(!0),$e})()},keyed:!0,get children(){return _(GM,{get pubkey(){return e.pubkey}})}})),we}}),null),D})(),_(ue,{get when(){return(w()?.website??"").length>0},get children(){const D=DM();return O(D,_(ue,{get when(){return w()?.website},keyed:!0,children:ne=>(()=>{const re=KM(),de=re.firstChild;return O(de,_(Zd,{})),O(re,_(Rl,{class:"text-blue-500 underline",href:ne}),null),re})()})),D}})]}}),(()=>{const D=zM();return O(D,_(_s,{get events(){return ce()}})),D})()]}})};at(["click"]);function YM(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var JM=YM,XM=xi,eB=function(){try{var e=XM(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Av=eB,ig=Av;function tB(e,t,n){t=="__proto__"&&ig?ig(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Iv=tB,nB=Iv,rB=Yu,iB=Object.prototype,sB=iB.hasOwnProperty;function oB(e,t,n){var i=e[t];(!(sB.call(e,t)&&rB(i,n))||n===void 0&&!(t in e))&&nB(e,t,n)}var Vd=oB,aB=Vd,lB=Iv;function cB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?lB(n,u,d):aB(n,u,d)}return n}var $o=cB,uB=$o,dB=Ll;function fB(e,t){return e&&uB(t,dB(t),e)}var hB=fB;function pB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var gB=pB,mB=qn,vB=Dd,bB=gB,yB=Object.prototype,_B=yB.hasOwnProperty;function wB(e){if(!mB(e))return bB(e);var t=vB(e),n=[];for(var i in e)i=="constructor"&&(t||!_B.call(e,i))||n.push(i);return n}var xB=wB,$B=fv,kB=xB,EB=pv;function CB(e){return EB(e)?$B(e,!0):kB(e)}var Kd=CB,SB=$o,TB=Kd;function AB(e,t){return e&&SB(t,TB(t),e)}var IB=AB,nl={exports:{}};nl.exports;(function(e,t){var n=Rn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(h,p){if(p)return h.slice();var g=h.length,v=u?u(g):new h.constructor(g);return h.copy(v),v}e.exports=d})(nl,nl.exports);var RB=nl.exports;function OB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var LB=OB,PB=$o,MB=Ld;function BB(e,t){return PB(e,MB(e),t)}var jB=BB,UB=hv,NB=UB(Object.getPrototypeOf,Object),Gd=NB,DB=Od,zB=Gd,HB=Ld,FB=cv,qB=Object.getOwnPropertySymbols,WB=qB?function(e){for(var t=[];e;)DB(t,HB(e)),e=zB(e);return t}:FB,Rv=WB,ZB=$o,VB=Rv;function KB(e,t){return ZB(e,VB(e),t)}var GB=KB,QB=lv,YB=Rv,JB=Kd;function XB(e){return QB(e,JB,YB)}var Qd=XB,ej=Object.prototype,tj=ej.hasOwnProperty;function nj(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&tj.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var rj=nj,sg=av;function ij(e){var t=new e.constructor(e.byteLength);return new sg(t).set(new sg(e)),t}var Yd=ij,sj=Yd;function oj(e,t){var n=t?sj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var aj=oj,lj=/\w*$/;function cj(e){var t=new e.constructor(e.source,lj.exec(e));return t.lastIndex=e.lastIndex,t}var uj=cj,og=cs,ag=og?og.prototype:void 0,lg=ag?ag.valueOf:void 0;function dj(e){return lg?Object(lg.call(e)):{}}var fj=dj,hj=Yd;function pj(e,t){var n=t?hj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var gj=pj,mj=Yd,vj=aj,bj=uj,yj=fj,_j=gj,wj="[object Boolean]",xj="[object Date]",$j="[object Map]",kj="[object Number]",Ej="[object RegExp]",Cj="[object Set]",Sj="[object String]",Tj="[object Symbol]",Aj="[object ArrayBuffer]",Ij="[object DataView]",Rj="[object Float32Array]",Oj="[object Float64Array]",Lj="[object Int8Array]",Pj="[object Int16Array]",Mj="[object Int32Array]",Bj="[object Uint8Array]",jj="[object Uint8ClampedArray]",Uj="[object Uint16Array]",Nj="[object Uint32Array]";function Dj(e,t,n){var i=e.constructor;switch(t){case Aj:return mj(e);case wj:case xj:return new i(+e);case Ij:return vj(e,n);case Rj:case Oj:case Lj:case Pj:case Mj:case Bj:case jj:case Uj:case Nj:return _j(e,n);case $j:return new i;case kj:case Sj:return new i(e);case Ej:return bj(e);case Cj:return new i;case Tj:return yj(e)}}var zj=Dj,Hj=qn,cg=Object.create,Fj=function(){function e(){}return function(t){if(!Hj(t))return{};if(cg)return cg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),qj=Fj,Wj=qj,Zj=Gd,Vj=Dd;function Kj(e){return typeof e.constructor=="function"&&!Vj(e)?Wj(Zj(e)):{}}var Gj=Kj,Qj=Pl,Yj=Jr,Jj="[object Map]";function Xj(e){return Yj(e)&&Qj(e)==Jj}var eU=Xj,tU=eU,nU=Ud,ug=Nd,dg=ug&&ug.isMap,rU=dg?nU(dg):tU,iU=rU,sU=Pl,oU=Jr,aU="[object Set]";function lU(e){return oU(e)&&sU(e)==aU}var cU=lU,uU=cU,dU=Ud,fg=Nd,hg=fg&&fg.isSet,fU=hg?dU(hg):uU,hU=fU,pU=Rd,gU=JM,mU=Vd,vU=hB,bU=IB,yU=RB,_U=LB,wU=jB,xU=GB,$U=gv,kU=Qd,EU=Pl,CU=rj,SU=zj,TU=Gj,AU=Kn,IU=Md,RU=iU,OU=qn,LU=hU,PU=Ll,MU=Kd,BU=1,jU=2,UU=4,Ov="[object Arguments]",NU="[object Array]",DU="[object Boolean]",zU="[object Date]",HU="[object Error]",Lv="[object Function]",FU="[object GeneratorFunction]",qU="[object Map]",WU="[object Number]",Pv="[object Object]",ZU="[object RegExp]",VU="[object Set]",KU="[object String]",GU="[object Symbol]",QU="[object WeakMap]",YU="[object ArrayBuffer]",JU="[object DataView]",XU="[object Float32Array]",eN="[object Float64Array]",tN="[object Int8Array]",nN="[object Int16Array]",rN="[object Int32Array]",iN="[object Uint8Array]",sN="[object Uint8ClampedArray]",oN="[object Uint16Array]",aN="[object Uint32Array]",et={};et[Ov]=et[NU]=et[YU]=et[JU]=et[DU]=et[zU]=et[XU]=et[eN]=et[tN]=et[nN]=et[rN]=et[qU]=et[WU]=et[Pv]=et[ZU]=et[VU]=et[KU]=et[GU]=et[iN]=et[sN]=et[oN]=et[aN]=!0;et[HU]=et[Lv]=et[QU]=!1;function Ta(e,t,n,i,o,a){var l,u=t&BU,d=t&jU,h=t&UU;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!OU(e))return e;var p=AU(e);if(p){if(l=CU(e),!u)return _U(e,l)}else{var g=EU(e),v=g==Lv||g==FU;if(IU(e))return yU(e,u);if(g==Pv||g==Ov||v&&!o){if(l=d||v?{}:TU(e),!u)return d?xU(e,bU(l,e)):wU(e,vU(l,e))}else{if(!et[g])return o?e:{};l=SU(e,g,u)}}a||(a=new pU);var w=a.get(e);if(w)return w;a.set(e,l),LU(e)?e.forEach(function(E){l.add(Ta(E,t,n,E,e,a))}):RU(e)&&e.forEach(function(E,$){l.set($,Ta(E,t,n,$,e,a))});var k=h?d?kU:$U:d?MU:PU,x=p?void 0:k(e);return gU(x||e,function(E,$){x&&($=E,E=e[$]),mU(l,$,Ta(E,t,n,$,e,a))}),l}var lN=Ta;function cN(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var uN=cN;function dN(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var fN=dN,hN=Bl,pN=fN;function gN(e,t){return t.length<2?e:hN(e,pN(t,0,-1))}var mN=gN,vN=$s,bN=uN,yN=mN,_N=ks;function wN(e,t){return t=vN(t,e),e=yN(e,t),e==null||delete e[_N(bN(t))]}var xN=wN,$N=us,kN=Gd,EN=Jr,CN="[object Object]",SN=Function.prototype,TN=Object.prototype,Mv=SN.toString,AN=TN.hasOwnProperty,IN=Mv.call(Object);function RN(e){if(!EN(e)||$N(e)!=CN)return!1;var t=kN(e);if(t===null)return!0;var n=AN.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Mv.call(n)==IN}var ON=RN,LN=ON;function PN(e){return LN(e)?void 0:e}var MN=PN,pg=cs,BN=Pd,jN=Kn,gg=pg?pg.isConcatSpreadable:void 0;function UN(e){return jN(e)||BN(e)||!!(gg&&e&&e[gg])}var NN=UN,DN=Od,zN=NN;function Bv(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=zN),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?Bv(u,t-1,n,i,o):DN(o,u):i||(o[o.length]=u)}return o}var HN=Bv,FN=HN;function qN(e){var t=e==null?0:e.length;return t?FN(e,1):[]}var WN=qN;function ZN(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var VN=ZN,KN=VN,mg=Math.max;function GN(e,t,n){return t=mg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=mg(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),KN(e,this,u)}}var QN=GN;function YN(e){return function(){return e}}var JN=YN,XN=JN,vg=Av,eD=$v,tD=vg?function(e,t){return vg(e,"toString",{configurable:!0,enumerable:!1,value:XN(t),writable:!0})}:eD,nD=tD,rD=800,iD=16,sD=Date.now;function oD(e){var t=0,n=0;return function(){var i=sD(),o=iD-(i-n);if(n=i,o>0){if(++t>=rD)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var aD=oD,lD=nD,cD=aD,uD=cD(lD),dD=uD,fD=WN,hD=QN,pD=dD;function gD(e){return pD(hD(e,void 0,fD),e+"")}var mD=gD,vD=Fd,bD=lN,yD=xN,_D=$s,wD=$o,xD=MN,$D=mD,kD=Qd,ED=1,CD=2,SD=4,TD=$D(function(e,t){var n={};if(e==null)return n;var i=!1;t=vD(t,function(a){return a=_D(a,e),i||(i=a.length>1),a}),wD(e,kD(e),n),i&&(n=bD(n,ED|CD|SD,xD));for(var o=t.length;o--;)yD(n,t[o]);return n}),AD=TD;const ID=po(AD);var RD="Expected a function";function OD(e){if(typeof e!="function")throw new TypeError(RD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var LD=OD,PD=Vd,MD=$s,BD=Bd,bg=qn,jD=ks;function UD(e,t,n,i){if(!bg(e))return e;t=MD(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=jD(t[o]),h=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var p=u[d];h=i?i(p,d,u):void 0,h===void 0&&(h=bg(p)?p:BD(t[o+1])?[]:{})}PD(u,d,h),u=u[d]}return e}var ND=UD,DD=Bl,zD=ND,HD=$s;function FD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=DD(e,l);n(u,l)&&zD(a,HD(l,e),u)}return a}var qD=FD,WD=Fd,ZD=qd,VD=qD,KD=Qd;function GD(e,t){if(e==null)return{};var n=WD(KD(e),function(i){return[i]});return t=ZD(t),VD(e,n,function(i,o){return t(i,o[0])})}var QD=GD,YD=qd,JD=LD,XD=QD;function ez(e,t){return XD(e,JD(YD(t)))}var tz=ez;const nz=po(tz),rz=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),iz=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),sz=j('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),oz=j('<div class="px-4 pt-4">読み込み中...'),az=j('<div><span class="font-bold">その他の項目</span><div>'),lz=j('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),cz=j('<div class="h-24 shrink-0">'),uz=j('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),dz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",fz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",hz=new RegExp(`^${dz}$`),jv=new RegExp(`^${fz}$`),pz=e=>hz.test(e),gz=e=>jv.test(e),mz=e=>{const t=Vn(),{config:n}=Pe(),[i,o]=_e(""),[a,l]=_e(""),[u,d]=_e(""),[h,p]=_e(""),[g,v]=_e(""),[w,k]=_e(""),[x,E]=_e(""),[$,A]=_e(""),{profile:R,invalidateProfile:T,query:M}=bs(()=>on([t()])(([X])=>({pubkey:X}))),{updateProfile:C}=Ol(),L=pi({mutationKey:["updateProfile"],mutationFn:(...X)=>C(...X).then(se=>Promise.allSettled(se.map(wr(1e4)))),onSuccess:X=>{const se=X.filter(Y=>Y.status==="fulfilled").length,Z=X.length-se;se===X.length?window.alert("更新しました"):se>0?window.alert(`${Z}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),T().then(()=>M.refetch()).catch(Y=>console.error(Y)),e.onClose()},onError:X=>{console.error("failed to delete",X)}}),U=()=>M.isLoading||L.isLoading,te=()=>U();setInterval(()=>console.log(M.isLoading,L.isLoading),1e3);const W=()=>ID(R(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Q=X=>{X.preventDefault();const se=t();if(se==null)return;const Z=nz({picture:i(),banner:a(),name:u(),display_name:h(),about:g(),website:w(),nip05:x(),lud06:pz($())?$():null,lud16:gz($())?$():null},Y=>Y==null||Y.length===0);L.mutate({relayUrls:n().relayUrls,pubkey:se,profile:Z,otherProperties:W()})},q=X=>X.key==="Enter"&&X.preventDefault();return an(()=>{const X=R();X!=null&&(M.refetch().catch(se=>console.error(se)),Aa(()=>{o(se=>X.picture??se),l(se=>X.banner??se),d(se=>X.name??se),p(se=>X.display_name??se),v(se=>X.about??se),k(se=>X.website??se),E(se=>X.nip05??se),X.lud16!=null?A(X.lud16):X.lud06!=null&&A(X.lud06)}))}),_(ys,{closeButton:()=>_(Qu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const X=sz(),se=X.firstChild;return O(X,_(ue,{get when(){return a().length>0},get fallback(){return cz()},keyed:!0,get children(){const Z=rz(),Y=Z.firstChild;return Me(()=>ht(Y,"src",a())),Z}}),se),O(se,_(ue,{get when(){return i().length>0},get children(){const Z=iz();return Me(()=>ht(Z,"src",i())),Z}})),X})(),_(ue,{get when(){return U()},get children(){return oz()}}),(()=>{const X=lz(),se=X.firstChild,Z=se.firstChild,Y=Z.firstChild,ce=Y.nextSibling,D=Z.nextSibling,ne=D.firstChild,re=ne.nextSibling,de=D.nextSibling,we=de.firstChild,G=we.nextSibling,fe=G.firstChild,$e=fe.nextSibling,Ve=de.nextSibling,J=Ve.firstChild,ze=J.nextSibling,Qe=Ve.nextSibling,yt=Qe.firstChild,Re=yt.nextSibling,Fe=Qe.nextSibling,kt=Fe.firstChild,Je=kt.nextSibling,Et=Fe.nextSibling,Gn=Et.firstChild,_t=Gn.nextSibling,$r=Et.nextSibling,Ei=$r.firstChild,Ln=Ei.nextSibling,gt=Ln.nextSibling,bn=$r.nextSibling,Pn=bn.firstChild,Ci=Pn.nextSibling;return se.addEventListener("submit",Q),ce.$$keydown=q,ce.addEventListener("blur",ye=>o(ye.currentTarget.value)),re.$$keydown=q,re.addEventListener("blur",ye=>l(ye.currentTarget.value)),$e.$$keydown=q,$e.addEventListener("change",ye=>d(ye.currentTarget.value)),ze.$$keydown=q,ze.addEventListener("change",ye=>p(ye.currentTarget.value)),Re.addEventListener("change",ye=>v(ye.currentTarget.value)),Je.$$keydown=q,Je.addEventListener("change",ye=>k(ye.currentTarget.value)),_t.$$keydown=q,_t.addEventListener("change",ye=>E(ye.currentTarget.value)),gt.$$keydown=q,gt.addEventListener("change",ye=>A(ye.currentTarget.value)),O(se,_(ue,{get when(){return Object.entries(W()).length>0},get children(){const ye=az(),Qn=ye.firstChild,Gt=Qn.nextSibling;return O(Gt,_(It,{get each(){return Object.entries(W())},children:([Ft,kr])=>(()=>{const Yn=uz(),Jn=Yn.firstChild,Er=Jn.nextSibling;return O(Jn,Ft),O(Er,kr),Yn})()})),ye}}),bn),Ci.$$click=()=>e.onClose(),O(se,_(ue,{get when(){return L.isLoading},children:"保存中..."}),null),Me(ye=>{const Qn=te(),Gt=te(),Ft=te(),kr=te(),Yn=te(),Jn=te(),Er=jv.source,Si=te(),Ti=te(),Ai=L.isLoading;return Qn!==ye._v$&&(ce.disabled=ye._v$=Qn),Gt!==ye._v$2&&(re.disabled=ye._v$2=Gt),Ft!==ye._v$3&&($e.disabled=ye._v$3=Ft),kr!==ye._v$4&&(ze.disabled=ye._v$4=kr),Yn!==ye._v$5&&(Re.disabled=ye._v$5=Yn),Jn!==ye._v$6&&(Je.disabled=ye._v$6=Jn),Er!==ye._v$7&&ht(_t,"pattern",ye._v$7=Er),Si!==ye._v$8&&(_t.disabled=ye._v$8=Si),Ti!==ye._v$9&&(gt.disabled=ye._v$9=Ti),Ai!==ye._v$10&&(Pn.disabled=ye._v$10=Ai),ye},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Me(()=>ce.value=i()),Me(()=>re.value=a()),Me(()=>$e.value=u()),Me(()=>ze.value=h()),Me(()=>Re.value=g()),Me(()=>Je.value=w()),Me(()=>_t.value=x()),Me(()=>gt.value=$()),X})()]}})};at(["keydown","click"]);const vz=()=>{const e=Vn(),{modalState:t,showProfile:n,closeModal:i}=Yr();return _(ue,{get when(){return t()},keyed:!0,children:o=>_(Sn,{get children(){return[_(He,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>_(QM,{pubkey:a,onClose:i})}),_(He,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return _(mz,{onClose:()=>on([e()])(([a])=>{n(a)})})}}),_(He,{get when(){return o.type==="AddColumn"},get children(){return _(hM,{onClose:i})}}),_(He,{get when(){return o.type==="About"},get children(){return _(dM,{onClose:i})}})]}})})},bz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),yz=(e={})=>(()=>{const t=bz();return Ze(t,e,!0,!0),t})(),_z=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),yg=(e={})=>(()=>{const t=_z();return Ze(t,e,!0,!0),t})(),wz=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),xz=(e={})=>(()=>{const t=wz();return Ze(t,e,!0,!0),t})(),$z=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),kz=(e={})=>(()=>{const t=$z();return Ze(t,e,!0,!0),t})(),Ez=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),Cz=(e={})=>(()=>{const t=Ez();return Ze(t,e,!0,!0),t})(),Sz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),Tz=(e={})=>(()=>{const t=Sz();return Ze(t,e,!0,!0),t})(),_g=ot.string().length(64).regex(/^[0-9a-f]{64}$/),Zu=ot.string().regex(/^\w+$/),Az=ot.object({shortcode:Zu,url:ot.string().url(),keywords:ot.optional(ot.array(Zu))}),Iz=ot.object({manifest:ot.literal("emojipack_v1"),name:ot.string(),emojis:ot.array(Az),description:ot.optional(ot.string()),author:ot.optional(_g),publisher:ot.optional(_g)}).refine(e=>kv(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Uv=ot.record(Zu,ot.string().url());Iz.or(Uv);const Rz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),Oz=j('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),Lz=j('<div class="py-2"><h3 class="font-bold">リレー</h3><p class="py-1"> 個のリレーが設定されています</p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Pz=j('<div class="py-2"><h3 class="pb-1 font-bold">インポート</h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">拡張機能からインポート'),Vu=j('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Mz=j('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Bz=j('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),jz=j('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Uz=j('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),Nz=j('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),Dz=j('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),zz=j('<div class="py-2"><h3 class="font-bold">絵文字のインポート</h3><p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">インポート'),Hz=j('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),Fz=j('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),qz=j('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),Wz=j('<div class="p-4">'),Zz=j('<h2 class="flex-1 text-center text-lg font-bold">設定'),Vz=j('<ul class="flex flex-col">'),Kz=j('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),Gz=j('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Nv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Qz=Nv("https?"),Yz=Nv("wss?"),Jz=()=>{const e=Vn(),{showProfile:t,showProfileEdit:n}=Yr();return(()=>{const i=Oz(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;return l.$$click=()=>on([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},Xz=()=>{const{config:e,addRelay:t,removeRelay:n}=Pe(),[i,o]=_e(""),a=u=>{u.preventDefault(),i().length!==0&&(t(i()),o(""))},l=async()=>{if(window.nostr==null)return;const u=Object.entries(await window.nostr?.getRelays?.()??[]),d=u.map(([v])=>v).join(`
`);if(u.length===0){window.alert("リレーが設定されていません");return}if(!window.confirm(`これらのリレーをインポートしますか:
${d}`))return;const h=e().relayUrls.length;Aa(()=>{u.forEach(([v])=>{t(v)})});const g=e().relayUrls.length-h;window.alert(`${g} 個のリレーをインポートしました`)};return[(()=>{const u=Lz(),d=u.firstChild,h=d.nextSibling,p=h.firstChild,g=h.nextSibling,v=g.nextSibling,w=v.firstChild;return O(h,()=>e().relayUrls.length,p),O(g,_(It,{get each(){return e().relayUrls},children:k=>(()=>{const x=Vu(),E=x.firstChild,$=E.nextSibling;return O(E,k),$.$$click=()=>n(k),O($,_(as,{})),x})()})),v.addEventListener("submit",a),w.addEventListener("change",k=>o(k.currentTarget.value)),ht(w,"pattern",Yz),Me(()=>w.value=i()),u})(),(()=>{const u=Pz(),d=u.firstChild,h=d.nextSibling;return h.$$click=()=>{l().catch(p=>{console.error("failed to import relays",p),window.alert("インポートに失敗しました")})},u})()]},eH=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],tH=()=>{const{config:e,setConfig:t}=Pe(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=Mz(),o=i.firstChild,a=o.nextSibling;return O(a,_(It,{each:eH,children:({id:l,name:u,example:d})=>(()=>{const h=Bz(),p=h.firstChild,g=p.nextSibling;return p.$$click=()=>n(l),O(p,u),O(g,d),Me(v=>{const w=e().dateFormat===l,k=e().dateFormat===l,x=e().dateFormat!==l,E=e().dateFormat!==l;return w!==v._v$&&p.classList.toggle("bg-rose-300",v._v$=w),k!==v._v$2&&p.classList.toggle("text-white",v._v$2=k),x!==v._v$3&&p.classList.toggle("bg-white",v._v$3=x),E!==v._v$4&&p.classList.toggle("text-rose-300",v._v$4=E),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),h})()})),i})()},Vs=e=>(()=>{const t=jz();return t.$$click=n=>e.onClick(n),Me(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&ht(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),nH=()=>{const{config:e,setConfig:t}=Pe(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=Uz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,O(u,_(Vs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),O(d,_(Vs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},rH=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=Pe(),[i,o]=_e(""),[a,l]=_e(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&(t({shortcode:i(),url:a()}),o(""),l(""))};return(()=>{const d=Nz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,w=v.firstChild,k=w.nextSibling,x=v.nextSibling,E=x.firstChild,$=E.nextSibling;return O(p,_(It,{get each(){return Object.values(e().customEmojis)},children:({shortcode:A,url:R})=>(()=>{const T=Dz(),M=T.firstChild,C=M.nextSibling,L=C.nextSibling;return ht(M,"src",R),ht(M,"alt",A),O(C,A),L.$$click=()=>n(A),O(L,_(as,{})),T})()})),g.addEventListener("submit",u),k.addEventListener("change",A=>o(A.currentTarget.value)),$.addEventListener("change",A=>l(A.currentTarget.value)),ht($,"pattern",Qz),Me(()=>k.value=i()),Me(()=>$.value=a()),d})()},iH=()=>{const{saveEmojis:e}=Pe(),[t,n]=_e(""),i=o=>{if(o.preventDefault(),t().length!==0)try{const a=Uv.parse(JSON.parse(t())),l=Rz(a);e(l),n("")}catch(a){const l=a instanceof Error?`:${a.message}`:"";window.alert(`JSONの読み込みに失敗しました${l}`)}};return(()=>{const o=zz(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling,d=u.firstChild;return u.addEventListener("submit",i),d.addEventListener("change",h=>n(h.currentTarget.value)),Me(()=>d.value=t()),o})()},sH=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=Pe(),[o,a]=_e(""),l=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=Hz(),d=u.firstChild,h=d.nextSibling;return O(h,_(It,{get each(){return e().mutedPubkeys},children:p=>(()=>{const g=Vu(),v=g.firstChild,w=v.nextSibling;return O(v,_(Tl,{pubkey:p})),w.$$click=()=>t(p),O(w,_(as,{})),g})()})),u})(),(()=>{const u=Fz(),d=u.firstChild,h=d.nextSibling,p=h.nextSibling,g=p.firstChild;return O(h,_(It,{get each(){return e().mutedKeywords},children:v=>(()=>{const w=Vu(),k=w.firstChild,x=k.nextSibling;return O(k,v),x.$$click=()=>i(v),O(x,_(as,{})),w})()})),p.addEventListener("submit",l),g.addEventListener("change",v=>a(v.currentTarget.value)),Me(()=>g.value=o()),u})()]},oH=()=>{const{config:e,setConfig:t}=Pe(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=qz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild;d.firstChild;const h=d.nextSibling;h.firstChild;const p=h.nextSibling;return p.firstChild,O(d,_(Vs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),O(h,_(Vs,{get value(){return e().showImage},onClick:()=>i()}),null),O(p,_(Vs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},aH=e=>{const[t,n]=_e(null),i=[{name:()=>"プロフィール",icon:()=>_(Wd,{}),render:()=>_(Jz,{})},{name:()=>"リレー",icon:()=>_(Tz,{}),render:()=>_(Xz,{})},{name:()=>"表示",icon:()=>_(Cz,{}),render:()=>[_(tH,{}),_(nH,{}),_(oH,{})]},{name:()=>"カスタム絵文字",icon:()=>_(ev,{}),render:()=>[_(rH,{}),_(iH,{})]},{name:()=>"ミュート",icon:()=>_(kz,{}),render:()=>_(sH,{})}],o=()=>{const a=t();return a==null?null:i[a]};return _(ys,{get onClose(){return e.onClose},get children(){const a=Wz();return O(a,_(ue,{get when(){return o()},get fallback(){return[Zz(),(()=>{const l=Vz();return O(l,_(It,{each:i,children:(u,d)=>(()=>{const h=Kz(),p=h.firstChild,g=p.firstChild;return p.$$click=()=>n(d),O(g,()=>u.icon()),O(p,()=>u.name(),null),h})()})),l})()]},keyed:!0,children:l=>(()=>{const u=Gz(),d=u.firstChild,h=d.nextSibling;return d.$$click=()=>n(null),O(d,_(Qu,{})),O(h,()=>l.render()),u})()})),a}})};at(["click"]);const lH=j('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),cH=j('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),uH=j('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),dH=()=>{let e,t;const{saveColumn:n}=Pe(),i=xo(),[o,a]=_e(""),l=u=>{u.preventDefault(),n($d({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return _(Sd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=cH();return O(u,_(yg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=lH(),d=u.firstChild,h=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?br(p,d):t=d,O(h,_(yg,{})),Me(()=>d.value=o()),u}})},fH=()=>{let e;const{showAddColumn:t,showAbout:n}=Yr(),{config:i}=Pe(),[o,a]=_e(!1),[l,u]=_e(!1),d=()=>{e?.focus(),e?.click()},h=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return Nu(()=>({commandType:"openPostForm",handler:()=>{h(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=uH(),w=v.firstChild,k=w.firstChild,x=k.firstChild,E=k.nextSibling,$=E.nextSibling,A=$.firstChild,R=A.nextSibling,T=R.nextSibling,M=T.firstChild,C=w.nextSibling;return x.$$click=()=>g(),O(x,_(xz,{})),O(k,_(dH,{}),null),A.$$click=()=>t(),O(A,_(km,{})),R.$$click=()=>u(L=>!L),O(R,_(yz,{})),T.$$click=()=>n(),O(C,_(tv,{textAreaRef:L=>{e=L},onClose:p})),O(v,_(ue,{get when(){return l()},get children(){return _(aH,{onClose:()=>u(!1)})}}),null),Me(L=>{const U=Ku("images/rabbit_app_256.png"),te=!!(o()||i().keepOpenPostForm),W=!(o()||i().keepOpenPostForm);return U!==L._v$&&ht(M,"src",L._v$=U),te!==L._v$2&&C.classList.toggle("static",L._v$2=te),W!==L._v$3&&C.classList.toggle("hidden",L._v$3=W),L},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};at(["click"]);var hH=Rn,pH=function(){return hH.Date.now()},gH=pH,mH=/\s/;function vH(e){for(var t=e.length;t--&&mH.test(e.charAt(t)););return t}var bH=vH,yH=bH,_H=/^\s+/;function wH(e){return e&&e.slice(0,yH(e)+1).replace(_H,"")}var xH=wH,$H=xH,wg=qn,kH=Ml,xg=0/0,EH=/^[-+]0x[0-9a-f]+$/i,CH=/^0b[01]+$/i,SH=/^0o[0-7]+$/i,TH=parseInt;function AH(e){if(typeof e=="number")return e;if(kH(e))return xg;if(wg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=wg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=$H(e);var n=CH.test(e);return n||SH.test(e)?TH(e.slice(2),n?2:8):EH.test(e)?xg:+e}var IH=AH,RH=qn,mu=gH,$g=IH,OH="Expected a function",LH=Math.max,PH=Math.min;function MH(e,t,n){var i,o,a,l,u,d,h=0,p=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(OH);t=$g(t)||0,RH(n)&&(p=!!n.leading,g="maxWait"in n,a=g?LH($g(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function w(C){var L=i,U=o;return i=o=void 0,h=C,l=e.apply(U,L),l}function k(C){return h=C,u=setTimeout($,t),p?w(C):l}function x(C){var L=C-d,U=C-h,te=t-L;return g?PH(te,a-U):te}function E(C){var L=C-d,U=C-h;return d===void 0||L>=t||L<0||g&&U>=a}function $(){var C=mu();if(E(C))return A(C);u=setTimeout($,x(C))}function A(C){return u=void 0,v&&i?w(C):(i=o=void 0,l)}function R(){u!==void 0&&clearTimeout(u),h=0,i=d=o=u=void 0}function T(){return u===void 0?l:A(mu())}function M(){var C=mu(),L=E(C);if(i=arguments,o=this,d=C,L){if(u===void 0)return k(d);if(g)return clearTimeout(u),u=setTimeout($,t),w(d)}return u===void 0&&(u=setTimeout($,t)),l}return M.cancel=R,M.flush=T,M}var BH=MH,jH=BH,UH=qn,NH="Expected a function";function DH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(NH);return UH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),jH(e,t,{leading:i,maxWait:t,trailing:o})}var zH=DH;const HH=po(zH),FH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],qH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},WH=({shortcuts:e=FH,onShortcut:t})=>{const n=qH(e);an(()=>{const i=HH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),vr(()=>{window.removeEventListener("keydown",i)})})},ZH=()=>{const e=xo();WH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},VH=j('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),XH=()=>{ZH();const e=Rx(),{persistStatus:t}=Mx(),n=Cl(),{config:i,initializeColumns:o}=Pe(),a=Vn();return Un(()=>{i().relayUrls.map(async l=>{try{(await n().ensureRelay(l)).on("notice",d=>{console.error(`NOTICE: ${l}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),Un(()=>{const l=a();l!=null&&o({pubkey:l})}),an(()=>{t().loggedIn||e("/hello")}),Ox(l=>{console.error("uncaught error: ",l)}),(()=>{const l=VH();return O(l,_(fH,{}),null),O(l,_(oM,{}),null),O(l,_(vz,{}),null),l})()};export{XH as default};
//# sourceMappingURL=Home-fd7e7b2b.js.map
