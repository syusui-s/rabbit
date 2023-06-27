import{S as Cg,s as vu,n as kx,i as Tp,a as Ap,t as Ex,f as Cx,c as Sx,r as Ip,b as Tx,d as Sg,g as Ax,u as _i,e as Tg,h as Ia,o as vr,j as ln,k as Gs,l as sl,p as Rp,m as Ve,q as B,v as st,w as xe,x as O,y,z as le,A as qe,B as Ix,M as ze,C as Rx,D as on,E as Nn,F as Ox,G as Ue,H as Lx,I as br,J as kt,K as Ag,L as ct,N as Px,O as Mx,P as Ws,Q as Ig,R as Bx,T as jx}from"./index-0d943aad.js";import{c as Xi,u as Zi,a as Ux,b as Nx,r as Gu,d as Dx}from"./resolveAsset-8e7c1fbc.js";class zx extends Cg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Op(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),vu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Lp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(kx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Tp||this.currentResult.isStale||!Ap(this.options.staleTime))return;const n=Ex(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Tp||this.options.enabled===!1||!Ap(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Cx.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,h=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:$,errorUpdatedAt:k,fetchStatus:w,status:E}=g,x=!1,A=!1,L;if(n._optimisticResults){const N=this.hasListeners(),re=!N&&Op(t,n),V=N&&Lp(t,i,n,o);(re||V)&&(w=Sx(t.options.networkMode)?"fetching":"paused",v||(E="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&E!=="error")L=p.data,v=p.dataUpdatedAt,E=p.status,x=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)L=this.selectResult;else try{this.selectFn=n.select,L=n.select(g.data),L=Ip(a?.data,L,n),this.selectResult=L,this.selectError=null}catch(N){this.selectError=N}else L=g.data;if(typeof n.placeholderData<"u"&&typeof L>"u"&&E==="loading"){let N;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)N=a.data;else if(N=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof N<"u")try{N=n.select(N),this.selectError=null}catch(re){this.selectError=re}typeof N<"u"&&(E="success",L=Ip(a?.data,N,n),A=!0)}this.selectError&&($=this.selectError,L=this.selectResult,k=Date.now(),E="error");const I=w==="fetching",C=E==="loading",T=E==="error";return{status:E,fetchStatus:w,isLoading:C,isSuccess:E==="success",isError:T,isInitialLoading:C&&I,data:L,dataUpdatedAt:v,error:$,errorUpdatedAt:k,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:I,isRefetching:I&&!C,isLoadingError:T&&g.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:A,isPreviousData:x,isRefetchError:T&&g.dataUpdatedAt!==0,isStale:Qu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,vu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==n[h]&&u.has(h)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Tx(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Sg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,h;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(h=this.options).onSettled)==null||d.call(h,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Hx(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Op(e,t){return Hx(e,t)||e.state.dataUpdatedAt>0&&bu(e,t,t.refetchOnMount)}function bu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Qu(e,t)}return!1}function Lp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Qu(e,n)}function Qu(e,t){return e.isStaleByTime(t.staleTime)}class Fx extends Cg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),vu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Ax(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Sg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,h;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(h=this.mutateOptions).onSettled)==null||d.call(h,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function qx(e){return typeof e=="function"}function Pp(e,t,n){if(!qx(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Rg(e,t){return typeof e=="function"?e(...t):!!e}function Wx(e,t){const n=_i({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=Xi(a.getOptimisticResult(o)),[d,{refetch:h,mutate:p}]=Tg(()=>new Promise(k=>{l.isFetching&&l.isLoading||(Zi(l.data)===i&&k(void 0),k(Zi(l.data)))}));Ia(()=>{p(()=>Zi(l.data)),h()});let g=[];const v=a.subscribe(k=>{g.push(()=>{Ia(()=>{const w={...Zi(k)};w.data===void 0&&(w.data=i),u(Zi(w)),p(()=>Zi(k.data)),h()})}),queueMicrotask(()=>{const w=g.pop();w&&w(),g=[]})});vr(()=>v()),ln(()=>{a.setOptions(o,{listeners:!1})}),Gs(()=>{const k=n.defaultQueryOptions(e);a.setOptions(k)}),Gs(sl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Rg(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const $={get(k,w){return w==="data"?d():Reflect.get(k,w)}};return new Proxy(l,$)}function wi(e,t,n){const[i,o]=Xi(Pp(e,t,n));return Gs(()=>{const a=Pp(e,t,n);o(a)}),Wx(i,zx)}function pi(e,t,n){const[i,o]=Xi(Rp(e,t,n)),a=_i({context:i.context}),l=new Fx(a,i),u=(g,v)=>{l.mutate(g,v).catch(Zx)},[d,h]=Xi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Gs(()=>{const g=Rp(e,t,n);o(g),l.setOptions(g)}),Gs(sl(()=>d.status,()=>{if(d.isError&&Rg(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{h({...g,mutate:u,mutateAsync:g.mutate})});return vr(p),d}function Zx(){}const Vx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),Kx=(e={})=>(()=>{const t=Vx();return Ve(t,e,!0,!0),t})(),Gx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),Og=(e={})=>(()=>{const t=Gx();return Ve(t,e,!0,!0),t})(),Qx=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),Yx=B('<span class="inline-block h-4 w-4 text-gray-700">'),us=e=>{const[t,n]=xe(!1),i=()=>n(o=>!o);return(()=>{const o=Qx(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=l.nextSibling;return O(l,y(le,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const p=Yx();return O(p,h),p})()}),u),O(u,()=>e.name),d.$$click=()=>i(),O(d,y(Og,{})),O(o,y(le,{get when(){return t()},get children(){return e.settings()}}),null),o})()};st(["click"]);const Jx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Yu=(e={})=>(()=>{const t=Jx();return Ve(t,e,!0,!0),t})();var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function po(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ol(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Xx=typeof dr=="object"&&dr&&dr.Object===Object&&dr,Lg=Xx,e5=Lg,t5=typeof self=="object"&&self&&self.Object===Object&&self,n5=e5||t5||Function("return this")(),On=n5,r5=On,i5=r5.Symbol,ds=i5,Mp=ds,Pg=Object.prototype,s5=Pg.hasOwnProperty,o5=Pg.toString,zs=Mp?Mp.toStringTag:void 0;function a5(e){var t=s5.call(e,zs),n=e[zs];try{e[zs]=void 0;var i=!0}catch{}var o=o5.call(e);return i&&(t?e[zs]=n:delete e[zs]),o}var l5=a5,c5=Object.prototype,u5=c5.toString;function d5(e){return u5.call(e)}var f5=d5,Bp=ds,h5=l5,p5=f5,g5="[object Null]",m5="[object Undefined]",jp=Bp?Bp.toStringTag:void 0;function v5(e){return e==null?e===void 0?m5:g5:jp&&jp in Object(e)?h5(e):p5(e)}var fs=v5;function b5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Wn=b5,y5=fs,_5=Wn,w5="[object AsyncFunction]",x5="[object Function]",$5="[object GeneratorFunction]",k5="[object Proxy]";function E5(e){if(!_5(e))return!1;var t=y5(e);return t==x5||t==$5||t==w5||t==k5}var Mg=E5,C5=On,S5=C5["__core-js_shared__"],T5=S5,Jc=T5,Up=function(){var e=/[^.]+$/.exec(Jc&&Jc.keys&&Jc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function A5(e){return!!Up&&Up in e}var I5=A5,R5=Function.prototype,O5=R5.toString;function L5(e){if(e!=null){try{return O5.call(e)}catch{}try{return e+""}catch{}}return""}var Bg=L5,P5=Mg,M5=I5,B5=Wn,j5=Bg,U5=/[\\^$.*+?()[\]{}|]/g,N5=/^\[object .+?Constructor\]$/,D5=Function.prototype,z5=Object.prototype,H5=D5.toString,F5=z5.hasOwnProperty,q5=RegExp("^"+H5.call(F5).replace(U5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function W5(e){if(!B5(e)||M5(e))return!1;var t=P5(e)?q5:N5;return t.test(j5(e))}var Z5=W5;function V5(e,t){return e?.[t]}var K5=V5,G5=Z5,Q5=K5;function Y5(e,t){var n=Q5(e,t);return G5(n)?n:void 0}var xi=Y5,J5=xi,X5=J5(Object,"create"),al=X5,Np=al;function e$(){this.__data__=Np?Np(null):{},this.size=0}var t$=e$;function n$(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var r$=n$,i$=al,s$="__lodash_hash_undefined__",o$=Object.prototype,a$=o$.hasOwnProperty;function l$(e){var t=this.__data__;if(i$){var n=t[e];return n===s$?void 0:n}return a$.call(t,e)?t[e]:void 0}var c$=l$,u$=al,d$=Object.prototype,f$=d$.hasOwnProperty;function h$(e){var t=this.__data__;return u$?t[e]!==void 0:f$.call(t,e)}var p$=h$,g$=al,m$="__lodash_hash_undefined__";function v$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=g$&&t===void 0?m$:t,this}var b$=v$,y$=t$,_$=r$,w$=c$,x$=p$,$$=b$;function hs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}hs.prototype.clear=y$;hs.prototype.delete=_$;hs.prototype.get=w$;hs.prototype.has=x$;hs.prototype.set=$$;var k$=hs;function E$(){this.__data__=[],this.size=0}var C$=E$;function S$(e,t){return e===t||e!==e&&t!==t}var Ju=S$,T$=Ju;function A$(e,t){for(var n=e.length;n--;)if(T$(e[n][0],t))return n;return-1}var ll=A$,I$=ll,R$=Array.prototype,O$=R$.splice;function L$(e){var t=this.__data__,n=I$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():O$.call(t,n,1),--this.size,!0}var P$=L$,M$=ll;function B$(e){var t=this.__data__,n=M$(t,e);return n<0?void 0:t[n][1]}var j$=B$,U$=ll;function N$(e){return U$(this.__data__,e)>-1}var D$=N$,z$=ll;function H$(e,t){var n=this.__data__,i=z$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var F$=H$,q$=C$,W$=P$,Z$=j$,V$=D$,K$=F$;function ps(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ps.prototype.clear=q$;ps.prototype.delete=W$;ps.prototype.get=Z$;ps.prototype.has=V$;ps.prototype.set=K$;var cl=ps,G$=xi,Q$=On,Y$=G$(Q$,"Map"),Xu=Y$,Dp=k$,J$=cl,X$=Xu;function e8(){this.size=0,this.__data__={hash:new Dp,map:new(X$||J$),string:new Dp}}var t8=e8;function n8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var r8=n8,i8=r8;function s8(e,t){var n=e.__data__;return i8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ul=s8,o8=ul;function a8(e){var t=o8(this,e).delete(e);return this.size-=t?1:0,t}var l8=a8,c8=ul;function u8(e){return c8(this,e).get(e)}var d8=u8,f8=ul;function h8(e){return f8(this,e).has(e)}var p8=h8,g8=ul;function m8(e,t){var n=g8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var v8=m8,b8=t8,y8=l8,_8=d8,w8=p8,x8=v8;function gs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}gs.prototype.clear=b8;gs.prototype.delete=y8;gs.prototype.get=_8;gs.prototype.has=w8;gs.prototype.set=x8;var ed=gs,$8="__lodash_hash_undefined__";function k8(e){return this.__data__.set(e,$8),this}var E8=k8;function C8(e){return this.__data__.has(e)}var S8=C8,T8=ed,A8=E8,I8=S8;function Ra(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new T8;++t<n;)this.add(e[t])}Ra.prototype.add=Ra.prototype.push=A8;Ra.prototype.has=I8;var jg=Ra;function R8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var O8=R8;function L8(e){return e!==e}var P8=L8;function M8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var B8=M8,j8=O8,U8=P8,N8=B8;function D8(e,t,n){return t===t?N8(e,t,n):j8(e,U8,n)}var z8=D8,H8=z8;function F8(e,t){var n=e==null?0:e.length;return!!n&&H8(e,t,0)>-1}var q8=F8;function W8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var Z8=W8;function V8(e,t){return e.has(t)}var Ug=V8,K8=xi,G8=On,Q8=K8(G8,"Set"),Ng=Q8;function Y8(){}var J8=Y8;function X8(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var td=X8,Xc=Ng,e6=J8,t6=td,n6=1/0,r6=Xc&&1/t6(new Xc([,-0]))[1]==n6?function(e){return new Xc(e)}:e6,i6=r6,s6=jg,o6=q8,a6=Z8,l6=Ug,c6=i6,u6=td,d6=200;function f6(e,t,n){var i=-1,o=o6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=a6;else if(a>=d6){var h=t?null:c6(e);if(h)return u6(h);l=!1,o=l6,d=new s6}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var Dg=f6,h6=Dg;function p6(e){return e&&e.length?h6(e):[]}var g6=p6;const pr=po(g6),m6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),Zs=e=>(()=>{const t=m6();return O(t,()=>e.children),t})();function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function v6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function zg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function b6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function y6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function _6(e,t){zg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const di={number:yu,bool:v6,bytes:zg,hash:b6,exists:y6,output:_6},ka=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,w6=Object.freeze(Object.defineProperty({__proto__:null,crypto:ka},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const x6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),$6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),En=(e,t)=>e<<32-t|e>>>t,Hg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Hg)throw new Error("Non little-endian hardware is not supported");const k6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function nn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=k6[e[n]];return t}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Fg=async()=>{};async function E6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Fg(),i+=a)}}function nd(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function go(e){if(typeof e=="string"&&(e=nd(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class rd{clone(){return this._cloneInto()}}const C6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function S6(e,t){if(t!==void 0&&(typeof t!="object"||!C6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function dl(e){const t=i=>e().update(go(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function T6(e){const t=(i,o)=>e(o).update(go(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function fl(e=32){if(ka&&typeof ka.getRandomValues=="function")return ka.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const A6=Object.freeze(Object.defineProperty({__proto__:null,Hash:rd,asyncLoop:E6,bytesToHex:nn,checkOpts:S6,concatBytes:fi,createView:gi,hexToBytes:Zr,isLE:Hg,nextTick:Fg,randomBytes:fl,rotr:En,toBytes:go,u32:$6,u8:x6,utf8ToBytes:nd,wrapConstructor:dl,wrapConstructorWithOpts:T6},Symbol.toStringTag,{value:"Module"}));function I6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}let qg=class extends rd{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){di.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=go(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=gi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){di.exists(this),di.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;I6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const R6=(e,t,n)=>e&t^~e&n,O6=(e,t,n)=>e&t^e&n^t&n,L6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Br=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),jr=new Uint32Array(64);class Wg extends qg{constructor(){super(64,32,8,!1),this.A=Br[0]|0,this.B=Br[1]|0,this.C=Br[2]|0,this.D=Br[3]|0,this.E=Br[4]|0,this.F=Br[5]|0,this.G=Br[6]|0,this.H=Br[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)jr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=jr[g-15],$=jr[g-2],k=En(v,7)^En(v,18)^v>>>3,w=En($,17)^En($,19)^$>>>10;jr[g]=w+jr[g-7]+k+jr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:h,H:p}=this;for(let g=0;g<64;g++){const v=En(u,6)^En(u,11)^En(u,25),$=p+v+R6(u,d,h)+L6[g]+jr[g]|0,w=(En(i,2)^En(i,13)^En(i,22))+O6(i,o,a)|0;p=h,h=d,d=u,u=l+$|0,l=a,a=o,o=i,i=$+w|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,h=h+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,h,p)}roundClean(){jr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class P6 extends Wg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const zn=dl(()=>new Wg),M6=dl(()=>new P6),B6=Object.freeze(Object.defineProperty({__proto__:null,sha224:M6,sha256:zn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Zg=BigInt(0),hl=BigInt(1),j6=BigInt(2),pl=e=>e instanceof Uint8Array,U6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function es(e){if(!pl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=U6[e[n]];return t}function Vg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function id(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function ts(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Dt(e){return id(es(e))}function sd(e){if(!pl(e))throw new Error("Uint8Array expected");return id(es(Uint8Array.from(e).reverse()))}const qr=(e,t)=>ts(e.toString(16).padStart(t*2,"0")),Kg=(e,t)=>qr(e,t).reverse(),N6=e=>ts(Vg(e));function At(e,t,n){let i;if(typeof t=="string")try{i=ts(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(pl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function rn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!pl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function D6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function gl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function z6(e){let t;for(t=0;e>Zg;e>>=hl,t+=1);return t}const H6=(e,t)=>e>>BigInt(t)&hl,F6=(e,t,n)=>e|(n?hl:Zg)<<BigInt(t),od=e=>(j6<<BigInt(e-1))-hl,eu=e=>new Uint8Array(e),zp=e=>Uint8Array.from(e);function Gg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=eu(e),o=eu(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=eu())=>{o=u(zp([0]),g),i=u(),g.length!==0&&(o=u(zp([1]),g),i=u())},h=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const $=i.slice();v.push($),g+=i.length}return rn(...v)};return(g,v)=>{l(),d(g);let $;for(;!($=v(h()));)d();return l(),$}}const q6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function ms(e,t,n={}){const i=(o,a,l)=>{const u=q6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const W6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:H6,bitLen:z6,bitMask:od,bitSet:F6,bytesToHex:es,bytesToNumberBE:Dt,bytesToNumberLE:sd,concatBytes:rn,createHmacDrbg:Gg,ensureBytes:At,equalBytes:D6,hexToBytes:ts,hexToNumber:id,numberToBytesBE:qr,numberToBytesLE:Kg,numberToHexUnpadded:Vg,numberToVarBytesBE:N6,utf8ToBytes:gl,validateObject:ms},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $t=BigInt(0),pt=BigInt(1),ci=BigInt(2),Z6=BigInt(3),_u=BigInt(4),Hp=BigInt(5),Fp=BigInt(8);BigInt(9);BigInt(16);function yt(e,t){const n=e%t;return n>=$t?n:t+n}function V6(e,t,n){if(n<=$t||t<$t)throw new Error("Expected power/modulo > 0");if(n===pt)return $t;let i=pt;for(;t>$t;)t&pt&&(i=i*e%n),e=e*e%n,t>>=pt;return i}function bn(e,t,n){let i=e;for(;t-- >$t;)i*=i,i%=n;return i}function wu(e,t){if(e===$t||t<=$t)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=yt(e,t),i=t,o=$t,a=pt;for(;n!==$t;){const u=i/n,d=i%n,h=o-a*u;i=n,n=d,o=a,a=h}if(i!==pt)throw new Error("invert: does not exist");return yt(o,t)}function K6(e){const t=(e-pt)/ci;let n,i,o;for(n=e-pt,i=0;n%ci===$t;n/=ci,i++);for(o=ci;o<e&&V6(o,t,e)!==e-pt;o++);if(i===1){const l=(e+pt)/_u;return function(d,h){const p=d.pow(h,l);if(!d.eql(d.sqr(p),h))throw new Error("Cannot find square root");return p}}const a=(n+pt)/ci;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let h=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let $=1;for(let w=u.sqr(v);$<h&&!u.eql(w,u.ONE);$++)w=u.sqr(w);const k=u.pow(p,pt<<BigInt(h-$-1));p=u.sqr(k),g=u.mul(g,k),v=u.mul(v,p),h=$}return g}}function G6(e){if(e%_u===Z6){const t=(e+pt)/_u;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Fp===Hp){const t=(e-Hp)/Fp;return function(i,o){const a=i.mul(o,ci),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ci),l),h=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(h),o))throw new Error("Cannot find square root");return h}}return K6(e)}const Q6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Qg(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=Q6.reduce((i,o)=>(i[o]="function",i),t);return ms(e,n)}function Y6(e,t,n){if(n<$t)throw new Error("Expected power > 0");if(n===$t)return e.ONE;if(n===pt)return t;let i=e.ONE,o=t;for(;n>$t;)n&pt&&(i=e.mul(i,o)),o=e.sqr(o),n>>=pt;return i}function J6(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function ad(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function X6(e,t,n=!1,i={}){if(e<=$t)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=ad(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=G6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:od(o),ZERO:$t,ONE:pt,create:d=>yt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return $t<=d&&d<e},is0:d=>d===$t,isOdd:d=>(d&pt)===pt,neg:d=>yt(-d,e),eql:(d,h)=>d===h,sqr:d=>yt(d*d,e),add:(d,h)=>yt(d+h,e),sub:(d,h)=>yt(d-h,e),mul:(d,h)=>yt(d*h,e),pow:(d,h)=>Y6(u,d,h),div:(d,h)=>yt(d*wu(h,e),e),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>wu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>J6(u,d),cmov:(d,h,p)=>p?h:d,toBytes:d=>n?Kg(d,a):qr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?sd(d):Dt(d)}});return Object.freeze(u)}function e7(e,t,n=!1){e=At("privateHash",e);const i=e.length,o=ad(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?sd(e):Dt(e);return yt(a,t-pt)+pt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const t7=BigInt(0),tu=BigInt(1);function n7(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>t7;)a&tu&&(l=l.add(u)),u=u.double(),a>>=tu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let h=o,p=h;for(let g=0;g<l;g++){p=h,d.push(p);for(let v=1;v<u;v++)p=p.add(h),d.push(p);h=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let h=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),v=2**o,$=BigInt(o);for(let k=0;k<u;k++){const w=k*d;let E=Number(l&g);l>>=$,E>d&&(E-=v,l+=tu);const x=w,A=w+Math.abs(E)-1,L=k%2!==0,I=E<0;E===0?p=p.add(n(L,a[x])):h=h.add(n(I,a[A]))}return{p:h,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let h=a.get(o);return h||(h=this.precomputeWindow(o,d),d!==1&&a.set(o,u(h))),this.wNAF(d,h,l)}}}function Yg(e){return Qg(e.Fp),ms(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ad(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function r7(e){const t=Yg(e);ms(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:i7,hexToBytes:s7}=W6,hi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=hi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:i7(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=hi,n=typeof e=="string"?s7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=hi._parseInt(n.subarray(2)),{d:l,l:u}=hi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=h=>Number.parseInt(h[0],16)&8?"00"+h:h,n=h=>{const p=h.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},Sn=BigInt(0),gt=BigInt(1),lr=BigInt(2),Oa=BigInt(3),qp=BigInt(4);function o7(e){const t=r7(e),{Fp:n}=t,i=t.toBytes||((k,w,E)=>{const x=w.toAffine();return rn(Uint8Array.from([4]),n.toBytes(x.x),n.toBytes(x.y))}),o=t.fromBytes||(k=>{const w=k.subarray(1),E=n.fromBytes(w.subarray(0,n.BYTES)),x=n.fromBytes(w.subarray(n.BYTES,2*n.BYTES));return{x:E,y:x}});function a(k){const{a:w,b:E}=t,x=n.sqr(k),A=n.mul(x,k);return n.add(n.add(A,n.mul(k,w)),E)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l(k){return typeof k=="bigint"&&Sn<k&&k<t.n}function u(k){if(!l(k))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(k){const{allowedPrivateKeyLengths:w,nByteLength:E,wrapPrivateKey:x,n:A}=t;if(w&&typeof k!="bigint"){if(k instanceof Uint8Array&&(k=es(k)),typeof k!="string"||!w.includes(k.length))throw new Error("Invalid key");k=k.padStart(E*2,"0")}let L;try{L=typeof k=="bigint"?k:Dt(At("private key",k,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof k}`)}return x&&(L=yt(L,A)),u(L),L}const h=new Map;function p(k){if(!(k instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(w,E,x){if(this.px=w,this.py=E,this.pz=x,w==null||!n.isValid(w))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if(x==null||!n.isValid(x))throw new Error("z required")}static fromAffine(w){const{x:E,y:x}=w||{};if(!w||!n.isValid(E)||!n.isValid(x))throw new Error("invalid affine point");if(w instanceof g)throw new Error("projective point not allowed");const A=L=>n.eql(L,n.ZERO);return A(E)&&A(x)?g.ZERO:new g(E,x,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(w){const E=n.invertBatch(w.map(x=>x.pz));return w.map((x,A)=>x.toAffine(E[A])).map(g.fromAffine)}static fromHex(w){const E=g.fromAffine(o(At("pointHex",w)));return E.assertValidity(),E}static fromPrivateKey(w){return g.BASE.multiply(d(w))}_setWindowSize(w){this._WINDOW_SIZE=w,h.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:w,y:E}=this.toAffine();if(!n.isValid(w)||!n.isValid(E))throw new Error("bad point: x or y not FE");const x=n.sqr(E),A=a(w);if(!n.eql(x,A))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:w}=this.toAffine();if(n.isOdd)return!n.isOdd(w);throw new Error("Field doesn't support isOdd")}equals(w){p(w);const{px:E,py:x,pz:A}=this,{px:L,py:I,pz:C}=w,T=n.eql(n.mul(E,C),n.mul(L,A)),j=n.eql(n.mul(x,C),n.mul(I,A));return T&&j}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:w,b:E}=t,x=n.mul(E,Oa),{px:A,py:L,pz:I}=this;let C=n.ZERO,T=n.ZERO,j=n.ZERO,N=n.mul(A,A),re=n.mul(L,L),V=n.mul(I,I),Q=n.mul(A,L);return Q=n.add(Q,Q),j=n.mul(A,I),j=n.add(j,j),C=n.mul(w,j),T=n.mul(x,V),T=n.add(C,T),C=n.sub(re,T),T=n.add(re,T),T=n.mul(C,T),C=n.mul(Q,C),j=n.mul(x,j),V=n.mul(w,V),Q=n.sub(N,V),Q=n.mul(w,Q),Q=n.add(Q,j),j=n.add(N,N),N=n.add(j,N),N=n.add(N,V),N=n.mul(N,Q),T=n.add(T,N),V=n.mul(L,I),V=n.add(V,V),N=n.mul(V,Q),C=n.sub(C,N),j=n.mul(V,re),j=n.add(j,j),j=n.add(j,j),new g(C,T,j)}add(w){p(w);const{px:E,py:x,pz:A}=this,{px:L,py:I,pz:C}=w;let T=n.ZERO,j=n.ZERO,N=n.ZERO;const re=t.a,V=n.mul(t.b,Oa);let Q=n.mul(E,L),F=n.mul(x,I),Y=n.mul(A,C),ie=n.add(E,x),W=n.add(L,I);ie=n.mul(ie,W),W=n.add(Q,F),ie=n.sub(ie,W),W=n.add(E,A);let ee=n.add(L,C);return W=n.mul(W,ee),ee=n.add(Q,Y),W=n.sub(W,ee),ee=n.add(x,A),T=n.add(I,C),ee=n.mul(ee,T),T=n.add(F,Y),ee=n.sub(ee,T),N=n.mul(re,W),T=n.mul(V,Y),N=n.add(T,N),T=n.sub(F,N),N=n.add(F,N),j=n.mul(T,N),F=n.add(Q,Q),F=n.add(F,Q),Y=n.mul(re,Y),W=n.mul(V,W),F=n.add(F,Y),Y=n.sub(Q,Y),Y=n.mul(re,Y),W=n.add(W,Y),Q=n.mul(F,W),j=n.add(j,Q),Q=n.mul(ee,W),T=n.mul(ie,T),T=n.sub(T,Q),Q=n.mul(ie,F),N=n.mul(ee,N),N=n.add(N,Q),new g(T,j,N)}subtract(w){return this.add(w.negate())}is0(){return this.equals(g.ZERO)}wNAF(w){return $.wNAFCached(this,h,w,E=>{const x=n.invertBatch(E.map(A=>A.pz));return E.map((A,L)=>A.toAffine(x[L])).map(g.fromAffine)})}multiplyUnsafe(w){const E=g.ZERO;if(w===Sn)return E;if(u(w),w===gt)return this;const{endo:x}=t;if(!x)return $.unsafeLadder(this,w);let{k1neg:A,k1:L,k2neg:I,k2:C}=x.splitScalar(w),T=E,j=E,N=this;for(;L>Sn||C>Sn;)L&gt&&(T=T.add(N)),C&gt&&(j=j.add(N)),N=N.double(),L>>=gt,C>>=gt;return A&&(T=T.negate()),I&&(j=j.negate()),j=new g(n.mul(j.px,x.beta),j.py,j.pz),T.add(j)}multiply(w){u(w);let E=w,x,A;const{endo:L}=t;if(L){const{k1neg:I,k1:C,k2neg:T,k2:j}=L.splitScalar(E);let{p:N,f:re}=this.wNAF(C),{p:V,f:Q}=this.wNAF(j);N=$.constTimeNegate(I,N),V=$.constTimeNegate(T,V),V=new g(n.mul(V.px,L.beta),V.py,V.pz),x=N.add(V),A=re.add(Q)}else{const{p:I,f:C}=this.wNAF(E);x=I,A=C}return g.normalizeZ([x,A])[0]}multiplyAndAddUnsafe(w,E,x){const A=g.BASE,L=(C,T)=>T===Sn||T===gt||!C.equals(A)?C.multiplyUnsafe(T):C.multiply(T),I=L(this,E).add(L(w,x));return I.is0()?void 0:I}toAffine(w){const{px:E,py:x,pz:A}=this,L=this.is0();w==null&&(w=L?n.ONE:n.inv(A));const I=n.mul(E,w),C=n.mul(x,w),T=n.mul(A,w);if(L)return{x:n.ZERO,y:n.ZERO};if(!n.eql(T,n.ONE))throw new Error("invZ was invalid");return{x:I,y:C}}isTorsionFree(){const{h:w,isTorsionFree:E}=t;if(w===gt)return!0;if(E)return E(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:w,clearCofactor:E}=t;return w===gt?this:E?E(g,this):this.multiplyUnsafe(t.h)}toRawBytes(w=!0){return this.assertValidity(),i(g,this,w)}toHex(w=!0){return es(this.toRawBytes(w))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,$=n7(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function a7(e){const t=Yg(e);return ms(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function l7(e){const t=a7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(W){return Sn<W&&W<n.ORDER}function u(W){return yt(W,i)}function d(W){return wu(W,i)}const{ProjectivePoint:h,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=o7({...t,toBytes(W,ee,ae){const J=ee.toAffine(),fe=n.toBytes(J.x),pe=rn;return ae?pe(Uint8Array.from([ee.hasEvenY()?2:3]),fe):pe(Uint8Array.from([4]),fe,n.toBytes(J.y))},fromBytes(W){const ee=W.length,ae=W[0],J=W.subarray(1);if(ee===o&&(ae===2||ae===3)){const fe=Dt(J);if(!l(fe))throw new Error("Point is not on curve");const pe=g(fe);let $e=n.sqrt(pe);const Ce=($e&gt)===gt;return(ae&1)===1!==Ce&&($e=n.neg($e)),{x:fe,y:$e}}else if(ee===a&&ae===4){const fe=n.fromBytes(J.subarray(0,n.BYTES)),pe=n.fromBytes(J.subarray(n.BYTES,2*n.BYTES));return{x:fe,y:pe}}else throw new Error(`Point of length ${ee} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),$=W=>es(qr(W,t.nByteLength));function k(W){const ee=i>>gt;return W>ee}function w(W){return k(W)?u(-W):W}const E=(W,ee,ae)=>Dt(W.slice(ee,ae));class x{constructor(ee,ae,J){this.r=ee,this.s=ae,this.recovery=J,this.assertValidity()}static fromCompact(ee){const ae=t.nByteLength;return ee=At("compactSignature",ee,ae*2),new x(E(ee,0,ae),E(ee,ae,2*ae))}static fromDER(ee){const{r:ae,s:J}=hi.toSig(At("DER",ee));return new x(ae,J)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(ee){return new x(this.r,this.s,ee)}recoverPublicKey(ee){const{r:ae,s:J,recovery:fe}=this,pe=j(At("msgHash",ee));if(fe==null||![0,1,2,3].includes(fe))throw new Error("recovery id invalid");const $e=fe===2||fe===3?ae+t.n:ae;if($e>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Ce=fe&1?"03":"02",te=h.fromHex(Ce+$($e)),G=d($e),ne=u(-pe*G),me=u(J*G),q=h.BASE.multiplyAndAddUnsafe(te,ne,me);if(!q)throw new Error("point at infinify");return q.assertValidity(),q}hasHighS(){return k(this.s)}normalizeS(){return this.hasHighS()?new x(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return ts(this.toDERHex())}toDERHex(){return hi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ts(this.toCompactHex())}toCompactHex(){return $(this.r)+$(this.s)}}const A={isValidPrivateKey(W){try{return p(W),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const W=t.randomBytes(n.BYTES+8),ee=e7(W,i);return qr(ee,t.nByteLength)},precompute(W=8,ee=h.BASE){return ee._setWindowSize(W),ee.multiply(BigInt(3)),ee}};function L(W,ee=!0){return h.fromPrivateKey(W).toRawBytes(ee)}function I(W){const ee=W instanceof Uint8Array,ae=typeof W=="string",J=(ee||ae)&&W.length;return ee?J===o||J===a:ae?J===2*o||J===2*a:W instanceof h}function C(W,ee,ae=!0){if(I(W))throw new Error("first arg must be private key");if(!I(ee))throw new Error("second arg must be public key");return h.fromHex(ee).multiply(p(W)).toRawBytes(ae)}const T=t.bits2int||function(W){const ee=Dt(W),ae=W.length*8-t.nBitLength;return ae>0?ee>>BigInt(ae):ee},j=t.bits2int_modN||function(W){return u(T(W))},N=od(t.nBitLength);function re(W){if(typeof W!="bigint")throw new Error("bigint expected");if(!(Sn<=W&&W<N))throw new Error(`bigint expected < 2^${t.nBitLength}`);return qr(W,t.nByteLength)}function V(W,ee,ae=Q){if(["recovered","canonical"].some(Se=>Se in ae))throw new Error("sign() legacy options not supported");const{hash:J,randomBytes:fe}=t;let{lowS:pe,prehash:$e,extraEntropy:Ce}=ae;pe==null&&(pe=!0),W=At("msgHash",W),$e&&(W=At("prehashed msgHash",J(W)));const te=j(W),G=p(ee),ne=[re(G),re(te)];if(Ce!=null){const Se=Ce===!0?fe(n.BYTES):Ce;ne.push(At("extraEntropy",Se,n.BYTES))}const me=rn(...ne),q=te;function de(Se){const rt=T(Se);if(!v(rt))return;const Et=d(rt),Ee=h.BASE.multiply(rt).toAffine(),et=u(Ee.x);if(et===Sn)return;const Qe=u(Et*u(q+et*G));if(Qe===Sn)return;let It=(Ee.x===et?0:2)|Number(Ee.y&gt),cn=Qe;return pe&&k(Qe)&&(cn=w(Qe),It^=1),new x(et,cn,It)}return{seed:me,k2sig:de}}const Q={lowS:t.lowS,prehash:!1},F={lowS:t.lowS,prehash:!1};function Y(W,ee,ae=Q){const{seed:J,k2sig:fe}=V(W,ee,ae);return Gg(t.hash.outputLen,t.nByteLength,t.hmac)(J,fe)}h.BASE._setWindowSize(8);function ie(W,ee,ae,J=F){const fe=W;if(ee=At("msgHash",ee),ae=At("publicKey",ae),"strict"in J)throw new Error("options.strict was renamed to lowS");const{lowS:pe,prehash:$e}=J;let Ce,te;try{if(typeof fe=="string"||fe instanceof Uint8Array)try{Ce=x.fromDER(fe)}catch(Ee){if(!(Ee instanceof hi.Err))throw Ee;Ce=x.fromCompact(fe)}else if(typeof fe=="object"&&typeof fe.r=="bigint"&&typeof fe.s=="bigint"){const{r:Ee,s:et}=fe;Ce=new x(Ee,et)}else throw new Error("PARSE");te=h.fromHex(ae)}catch(Ee){if(Ee.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(pe&&Ce.hasHighS())return!1;$e&&(ee=t.hash(ee));const{r:G,s:ne}=Ce,me=j(ee),q=d(ne),de=u(me*q),Se=u(G*q),rt=h.BASE.multiplyAndAddUnsafe(te,de,Se)?.toAffine();return rt?u(rt.x)===G:!1}return{CURVE:t,getPublicKey:L,getSharedSecret:C,sign:Y,verify:ie,ProjectivePoint:h,Signature:x,utils:A}}function c7(e,t){const n=e.ORDER;let i=Sn;for(let v=n-gt;v%lr===Sn;v/=lr)i+=gt;const o=i,a=(n-gt)/lr**o,l=(a-gt)/lr,u=lr**o-gt,d=lr**(o-gt),h=e.pow(t,a),p=e.pow(t,(a+gt)/lr);let g=(v,$)=>{let k=h,w=e.pow($,u),E=e.sqr(w);E=e.mul(E,$);let x=e.mul(v,E);x=e.pow(x,l),x=e.mul(x,w),w=e.mul(x,$),E=e.mul(x,v);let A=e.mul(E,w);x=e.pow(A,d);let L=e.eql(x,e.ONE);w=e.mul(E,p),x=e.mul(A,k),E=e.cmov(w,E,L),A=e.cmov(x,A,L);for(let I=o;I>gt;I--){let C=lr**(I-lr),T=e.pow(A,C);const j=e.eql(T,e.ONE);w=e.mul(E,k),k=e.mul(k,k),T=e.mul(A,k),E=e.cmov(w,E,j),A=e.cmov(T,A,j)}return{isValid:L,value:E}};if(e.ORDER%qp===Oa){const v=(e.ORDER-Oa)/qp,$=e.sqrt(e.neg(t));g=(k,w)=>{let E=e.sqr(w);const x=e.mul(k,w);E=e.mul(E,x);let A=e.pow(E,v);A=e.mul(A,x);const L=e.mul(A,$),I=e.mul(e.sqr(A),w),C=e.eql(I,k);let T=e.cmov(L,A,C);return{isValid:C,value:T}}}return g}function u7(e,t){if(Qg(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=c7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,h,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),h=e.sqr(u),d=e.mul(h,t.A),a=e.add(a,d),a=e.mul(a,l),h=e.mul(h,u),d=e.mul(h,t.B),a=e.add(a,d),p=e.mul(o,l);const{isValid:v,value:$}=n(a,h);g=e.mul(o,i),g=e.mul(g,$),p=e.cmov(p,l,v),g=e.cmov(g,$,v);const k=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,k),p=e.div(p,u),{x:p,y:g}}}function d7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return gl(e);throw new Error("DST must be Uint8Array or string")}const f7=Dt;function Dr(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function h7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Qs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function ld(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function p7(e,t,n,i){Qs(e),Qs(t),ld(n),t.length>255&&(t=i(rn(gl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=rn(t,Dr(t.length,1)),d=Dr(0,a),h=Dr(n,2),p=new Array(l),g=i(rn(d,e,h,Dr(0,1),u));p[0]=i(rn(g,Dr(1,1),u));for(let $=1;$<=l;$++){const k=[h7(g,p[$-1]),Dr($+1,1),u];p[$]=i(rn(...k))}return rn(...p).slice(0,n)}function g7(e,t,n,i,o){if(Qs(e),Qs(t),ld(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(gl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Dr(n,2)).update(t).update(Dr(t.length,1)).digest()}function Wp(e,t,n){ms(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Qs(e),ld(t);const h=d7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),v=t*a*g;let $;if(u==="xmd")$=p7(e,h,v,l);else if(u==="xof")$=g7(e,h,v,o,l);else if(u==="_internal_pass")$=e;else throw new Error('expand must be "xmd" or "xof"');const k=new Array(t);for(let w=0;w<t;w++){const E=new Array(a);for(let x=0;x<a;x++){const A=g*(x+w*a),L=$.subarray(A,A+g);E[x]=yt(f7(L),i)}k[w]=E}return k}function m7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(h=>h.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function v7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=Wp(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=Wp(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class Jg extends rd{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,di.hash(t);const i=go(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return di.exists(this),this.iHash.update(t),this}digestInto(t){di.exists(this),di.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const La=(e,t,n)=>new Jg(e,t).update(n).digest();La.create=(e,t)=>new Jg(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function b7(e){return{hash:e,hmac:(t,...n)=>La(e,t,fi(...n)),randomBytes:fl}}function y7(e,t){const n=i=>l7({...e,...b7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ml=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Pa=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Xg=BigInt(1),Ma=BigInt(2),Zp=(e,t)=>(e+t/Ma)/t;function e1(e){const t=ml,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),h=e*e*e%t,p=h*h*e%t,g=bn(p,n,t)*p%t,v=bn(g,n,t)*p%t,$=bn(v,Ma,t)*h%t,k=bn($,o,t)*$%t,w=bn(k,a,t)*k%t,E=bn(w,u,t)*w%t,x=bn(E,d,t)*E%t,A=bn(x,u,t)*w%t,L=bn(A,n,t)*p%t,I=bn(L,l,t)*k%t,C=bn(I,i,t)*h%t,T=bn(C,Ma,t);if(!Vr.eql(Vr.sqr(T),e))throw new Error("Cannot find square root");return T}const Vr=X6(ml,void 0,void 0,{sqrt:e1}),Nt=y7({a:BigInt(0),b:BigInt(7),Fp:Vr,n:Pa,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Pa,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Xg*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Zp(a*e,t),d=Zp(-i*e,t);let h=yt(e-u*n-d*o,t),p=yt(-u*i-d*a,t);const g=h>l,v=p>l;if(g&&(h=t-h),v&&(p=t-p),h>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:h,k2neg:v,k2:p}}}},zn),vl=BigInt(0),t1=e=>typeof e=="bigint"&&vl<e&&e<ml,_7=e=>typeof e=="bigint"&&vl<e&&e<Pa,Vp={};function Ba(e,...t){let n=Vp[e];if(n===void 0){const i=zn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=rn(i,i),Vp[e]=n}return zn(rn(n,...t))}const cd=e=>e.toRawBytes(!0).slice(1),xu=e=>qr(e,32),nu=e=>yt(e,ml),Ys=e=>yt(e,Pa),ud=Nt.ProjectivePoint,w7=(e,t,n)=>ud.BASE.multiplyAndAddUnsafe(e,t,n);function $u(e){let t=Nt.utils.normPrivateKeyToScalar(e),n=ud.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Ys(-t),bytes:cd(n)}}function n1(e){if(!t1(e))throw new Error("bad x: need 0 < x < p");const t=nu(e*e),n=nu(t*e+BigInt(7));let i=e1(n);i%Ma!==vl&&(i=nu(-i));const o=new ud(e,i,Xg);return o.assertValidity(),o}function r1(...e){return Ys(Dt(Ba("BIP0340/challenge",...e)))}function x7(e){return $u(e).bytes}function $7(e,t,n=fl(32)){const i=At("message",e),{bytes:o,scalar:a}=$u(t),l=At("auxRand",n,32),u=xu(a^Dt(Ba("BIP0340/aux",l))),d=Ba("BIP0340/nonce",u,o,i),h=Ys(Dt(d));if(h===vl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=$u(h),v=r1(p,o,i),$=new Uint8Array(64);if($.set(p,0),$.set(xu(Ys(g+v*a)),32),!i1($,i,o))throw new Error("sign: Invalid signature produced");return $}function i1(e,t,n){const i=At("signature",e,64),o=At("message",t),a=At("publicKey",n,32);try{const l=n1(Dt(a)),u=Dt(i.subarray(0,32));if(!t1(u))return!1;const d=Dt(i.subarray(32,64));if(!_7(d))return!1;const h=r1(xu(u),cd(l),o),p=w7(l,d,Ys(-h));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const mo={getPublicKey:x7,sign:$7,verify:i1,utils:{randomPrivateKey:Nt.utils.randomPrivateKey,lift_x:n1,pointToBytes:cd,numberToBytesBE:qr,bytesToNumberBE:Dt,taggedHash:Ba,mod:yt}},k7=m7(Vr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),E7=u7(Vr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Vr.create(BigInt("-11"))});v7(Nt.ProjectivePoint,e=>{const{x:t,y:n}=E7(Vr.create(e[0]));return k7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Vr.ORDER,m:1,k:128,expand:"xmd",hash:zn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Ln(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Zn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Vn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function vo(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function s1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Kp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Yr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const h=a[d],p=t*l+h;if(!Number.isSafeInteger(p)||t*l/t!==l||p-h!==t*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const o1=(e,t)=>t?o1(t,e%t):e,ja=(e,t)=>e+(t-o1(e,t));function ku(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(ja(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${ja(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function a1(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Kp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Kp(t,e,2**8))}}}function _r(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(ja(8,e)>32||ja(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return ku(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(ku(n,e,8,t))}}}function Gp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function l1(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const C7={alphabet:Zn,chain:Ln,checksum:l1,radix:a1,radix2:_r,join:Vn,padding:vo},c1=Ln(_r(4),Zn("0123456789ABCDEF"),Vn("")),u1=Ln(_r(5),Zn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),vo(5),Vn("")),S7=Ln(_r(5),Zn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),vo(5),Vn("")),T7=Ln(_r(5),Zn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Vn(""),s1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),ns=Ln(_r(6),Zn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),vo(6),Vn("")),d1=Ln(_r(6),Zn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),vo(6),Vn("")),dd=e=>Ln(a1(58),Zn(e),Vn("")),Js=dd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),A7=dd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),I7=dd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Qp=[0,2,3,5,6,7,9,10,11],f1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Js.encode(i).padStart(Qp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Qp.indexOf(i.length),a=Js.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},h1=e=>Ln(l1(4,t=>e(e(t))),Js),Eu=Ln(Zn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Vn("")),Yp=[996825010,642813549,513874426,1027748829,705979059];function Hs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Yp.length;i++)(t>>i&1)===1&&(n^=Yp[i]);return n}function Jp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=Hs(o)^l>>5}o=Hs(o);for(let a=0;a<i;a++)o=Hs(o)^e.charCodeAt(a)&31;for(let a of t)o=Hs(o)^a;for(let a=0;a<6;a++)o=Hs(o);return o^=n,Eu.encode(ku([o%2**30],30,5,!1))}function p1(e){const t=e==="bech32"?1:734539939,n=_r(5),i=n.decode,o=n.encode,a=Gp(i);function l(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const $=p.length+7+g.length;if(v!==!1&&$>v)throw new TypeError(`Length ${$} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${Eu.encode(g)}${Jp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const $=p.lastIndexOf("1");if($===0||$===-1)throw new Error('Letter "1" must be present between prefix and data only');const k=p.slice(0,$),w=p.slice($+1);if(w.length<6)throw new Error("Data must be at least 6 characters long");const E=Eu.decode(w).slice(0,-6),x=Jp(k,E,t);if(!w.endsWith(x))throw new Error(`Invalid checksum in ${p}: expected "${x}"`);return{prefix:k,words:E}}const d=Gp(u);function h(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:h,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const zt=p1("bech32"),R7=p1("bech32m"),g1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},m1=Ln(_r(4),Zn("0123456789abcdef"),Vn(""),s1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Xs={utf8:g1,hex:m1,base16:c1,base32:u1,base64:ns,base64url:d1,base58:Js,base58xmr:f1},v1=`Invalid encoding type. Available types: ${Object.keys(Xs).join(", ")}`,b1=(e,t)=>{if(typeof e!="string"||!Xs.hasOwnProperty(e))throw new TypeError(v1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Xs[e].encode(t)},O7=b1,y1=(e,t)=>{if(!Xs.hasOwnProperty(e))throw new TypeError(v1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Xs[e].decode(t)},L7=y1,P7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:c1,base32:u1,base32crockford:T7,base32hex:S7,base58:Js,base58check:h1,base58flickr:A7,base58xmr:f1,base58xrp:I7,base64:ns,base64url:d1,bech32:zt,bech32m:R7,bytes:L7,bytesToString:b1,hex:m1,str:O7,stringToBytes:y1,utf8:g1,utils:C7},Symbol.toStringTag,{value:"Module"}));var fd={};Object.defineProperty(fd,"__esModule",{value:!0});var hd=fd.wordlist=void 0;hd=fd.wordlist=`abandon
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
`);var sn={},xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.output=xt.exists=xt.hash=Ki=xt.bytes=xt.bool=xt.number=void 0;function Ua(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}xt.number=Ua;function _1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}xt.bool=_1;function pd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Ki=xt.bytes=pd;function w1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ua(e.outputLen),Ua(e.blockLen)}xt.hash=w1;function x1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}xt.exists=x1;function $1(e,t){pd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}xt.output=$1;const M7={number:Ua,bool:_1,bytes:pd,hash:w1,exists:x1,output:$1};xt.default=M7;var rs={},k1={},bo={};const B7=ol(w6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=B7,n=I=>new Uint8Array(I.buffer,I.byteOffset,I.byteLength);e.u8=n;const i=I=>new Uint32Array(I.buffer,I.byteOffset,Math.floor(I.byteLength/4));e.u32=i;const o=I=>new DataView(I.buffer,I.byteOffset,I.byteLength);e.createView=o;const a=(I,C)=>I<<32-C|I>>>C;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(I,C)=>C.toString(16).padStart(2,"0"));function u(I){if(!(I instanceof Uint8Array))throw new Error("Uint8Array expected");let C="";for(let T=0;T<I.length;T++)C+=l[I[T]];return C}e.bytesToHex=u;function d(I){if(typeof I!="string")throw new TypeError("hexToBytes: expected string, got "+typeof I);if(I.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const C=new Uint8Array(I.length/2);for(let T=0;T<C.length;T++){const j=T*2,N=I.slice(j,j+2),re=Number.parseInt(N,16);if(Number.isNaN(re)||re<0)throw new Error("Invalid byte sequence");C[T]=re}return C}e.hexToBytes=d;const h=async()=>{};e.nextTick=h;async function p(I,C,T){let j=Date.now();for(let N=0;N<I;N++){T(N);const re=Date.now()-j;re>=0&&re<C||(await(0,e.nextTick)(),j+=re)}}e.asyncLoop=p;function g(I){if(typeof I!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof I}`);return new TextEncoder().encode(I)}e.utf8ToBytes=g;function v(I){if(typeof I=="string"&&(I=g(I)),!(I instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof I})`);return I}e.toBytes=v;function $(...I){if(!I.every(j=>j instanceof Uint8Array))throw new Error("Uint8Array list expected");if(I.length===1)return I[0];const C=I.reduce((j,N)=>j+N.length,0),T=new Uint8Array(C);for(let j=0,N=0;j<I.length;j++){const re=I[j];T.set(re,N),N+=re.length}return T}e.concatBytes=$;class k{clone(){return this._cloneInto()}}e.Hash=k;const w=I=>Object.prototype.toString.call(I)==="[object Object]"&&I.constructor===Object;function E(I,C){if(C!==void 0&&(typeof C!="object"||!w(C)))throw new TypeError("Options should be object or undefined");return Object.assign(I,C)}e.checkOpts=E;function x(I){const C=j=>I().update(v(j)).digest(),T=I();return C.outputLen=T.outputLen,C.blockLen=T.blockLen,C.create=()=>I(),C}e.wrapConstructor=x;function A(I){const C=(j,N)=>I(N).update(v(j)).digest(),T=I({});return C.outputLen=T.outputLen,C.blockLen=T.blockLen,C.create=j=>I(j),C}e.wrapConstructorWithOpts=A;function L(I=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(I));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=L})(bo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=xt,n=bo;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const h=this.blockLen,p=new Uint8Array(h);p.set(d.length>h?l.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=l.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:h,destroyed:p,blockLen:g,outputLen:v}=this;return l=l,l.finished=h,l.destroyed=p,l.blockLen=g,l.outputLen=v,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(k1);Object.defineProperty(rs,"__esModule",{value:!0});rs.pbkdf2Async=rs.pbkdf2=void 0;const ha=xt,j7=k1,Qi=bo;function E1(e,t,n,i){ha.default.hash(e);const o=(0,Qi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(ha.default.number(a),ha.default.number(l),ha.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Qi.toBytes)(t),h=(0,Qi.toBytes)(n),p=new Uint8Array(l),g=j7.hmac.create(e,d),v=g._cloneInto().update(h);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function C1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function U7(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=E1(e,t,n,i);let h;const p=new Uint8Array(4),g=(0,Qi.createView)(p),v=new Uint8Array(u.outputLen);for(let $=1,k=0;k<a;$++,k+=u.outputLen){const w=l.subarray(k,k+u.outputLen);g.setInt32(0,$,!1),(h=d._cloneInto(h)).update(p).digestInto(v),w.set(v.subarray(0,w.length));for(let E=1;E<o;E++){u._cloneInto(h).update(v).digestInto(v);for(let x=0;x<w.length;x++)w[x]^=v[x]}}return C1(u,d,l,h,v)}rs.pbkdf2=U7;async function N7(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:h}=E1(e,t,n,i);let p;const g=new Uint8Array(4),v=(0,Qi.createView)(g),$=new Uint8Array(d.outputLen);for(let k=1,w=0;w<a;k++,w+=d.outputLen){const E=u.subarray(w,w+d.outputLen);v.setInt32(0,k,!1),(p=h._cloneInto(p)).update(g).digestInto($),E.set($.subarray(0,E.length)),await(0,Qi.asyncLoop)(o-1,l,x=>{d._cloneInto(p).update($).digestInto($);for(let A=0;A<E.length;A++)E[A]^=$[A]})}return C1(d,h,u,p,$)}rs.pbkdf2Async=N7;const D7=ol(B6);var yn={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.SHA2=void 0;const ru=xt,Fs=bo;function z7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}class H7 extends Fs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Fs.createView)(this.buffer)}update(t){ru.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Fs.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,Fs.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){ru.default.exists(this),ru.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;z7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Fs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}bl.SHA2=H7;var S1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(V,Q=!1){return Q?{h:Number(V&t),l:Number(V>>n&t)}:{h:Number(V>>n&t)|0,l:Number(V&t)|0}}e.fromBig=i;function o(V,Q=!1){let F=new Uint32Array(V.length),Y=new Uint32Array(V.length);for(let ie=0;ie<V.length;ie++){const{h:W,l:ee}=i(V[ie],Q);[F[ie],Y[ie]]=[W,ee]}return[F,Y]}e.split=o;const a=(V,Q)=>BigInt(V>>>0)<<n|BigInt(Q>>>0);e.toBig=a;const l=(V,Q,F)=>V>>>F,u=(V,Q,F)=>V<<32-F|Q>>>F,d=(V,Q,F)=>V>>>F|Q<<32-F,h=(V,Q,F)=>V<<32-F|Q>>>F,p=(V,Q,F)=>V<<64-F|Q>>>F-32,g=(V,Q,F)=>V>>>F-32|Q<<64-F,v=(V,Q)=>Q,$=(V,Q)=>V,k=(V,Q,F)=>V<<F|Q>>>32-F,w=(V,Q,F)=>Q<<F|V>>>32-F,E=(V,Q,F)=>Q<<F-32|V>>>64-F,x=(V,Q,F)=>V<<F-32|Q>>>64-F;function A(V,Q,F,Y){const ie=(Q>>>0)+(Y>>>0);return{h:V+F+(ie/2**32|0)|0,l:ie|0}}e.add=A;const L=(V,Q,F)=>(V>>>0)+(Q>>>0)+(F>>>0),I=(V,Q,F,Y)=>Q+F+Y+(V/2**32|0)|0,C=(V,Q,F,Y)=>(V>>>0)+(Q>>>0)+(F>>>0)+(Y>>>0),T=(V,Q,F,Y,ie)=>Q+F+Y+ie+(V/2**32|0)|0,j=(V,Q,F,Y,ie)=>(V>>>0)+(Q>>>0)+(F>>>0)+(Y>>>0)+(ie>>>0),N=(V,Q,F,Y,ie,W)=>Q+F+Y+ie+W+(V/2**32|0)|0,re={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:h,rotrBH:p,rotrBL:g,rotr32H:v,rotr32L:$,rotlSH:k,rotlSL:w,rotlBH:E,rotlBL:x,add:A,add3L:L,add3H:I,add4L:C,add4H:T,add5H:N,add5L:j};e.default=re})(S1);Object.defineProperty(yn,"__esModule",{value:!0});yn.sha384=yn.sha512_256=yn.sha512_224=Cu=yn.sha512=yn.SHA512=void 0;const F7=bl,Pe=S1,yl=bo,[q7,W7]=Pe.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Ur=new Uint32Array(80),Nr=new Uint32Array(80);class yo extends F7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:h,El:p,Fh:g,Fl:v,Gh:$,Gl:k,Hh:w,Hl:E}=this;return[t,n,i,o,a,l,u,d,h,p,g,v,$,k,w,E]}set(t,n,i,o,a,l,u,d,h,p,g,v,$,k,w,E){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=h|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=$|0,this.Gl=k|0,this.Hh=w|0,this.Hl=E|0}process(t,n){for(let L=0;L<16;L++,n+=4)Ur[L]=t.getUint32(n),Nr[L]=t.getUint32(n+=4);for(let L=16;L<80;L++){const I=Ur[L-15]|0,C=Nr[L-15]|0,T=Pe.default.rotrSH(I,C,1)^Pe.default.rotrSH(I,C,8)^Pe.default.shrSH(I,C,7),j=Pe.default.rotrSL(I,C,1)^Pe.default.rotrSL(I,C,8)^Pe.default.shrSL(I,C,7),N=Ur[L-2]|0,re=Nr[L-2]|0,V=Pe.default.rotrSH(N,re,19)^Pe.default.rotrBH(N,re,61)^Pe.default.shrSH(N,re,6),Q=Pe.default.rotrSL(N,re,19)^Pe.default.rotrBL(N,re,61)^Pe.default.shrSL(N,re,6),F=Pe.default.add4L(j,Q,Nr[L-7],Nr[L-16]),Y=Pe.default.add4H(F,T,V,Ur[L-7],Ur[L-16]);Ur[L]=Y|0,Nr[L]=F|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:h,Dl:p,Eh:g,El:v,Fh:$,Fl:k,Gh:w,Gl:E,Hh:x,Hl:A}=this;for(let L=0;L<80;L++){const I=Pe.default.rotrSH(g,v,14)^Pe.default.rotrSH(g,v,18)^Pe.default.rotrBH(g,v,41),C=Pe.default.rotrSL(g,v,14)^Pe.default.rotrSL(g,v,18)^Pe.default.rotrBL(g,v,41),T=g&$^~g&w,j=v&k^~v&E,N=Pe.default.add5L(A,C,j,W7[L],Nr[L]),re=Pe.default.add5H(N,x,I,T,q7[L],Ur[L]),V=N|0,Q=Pe.default.rotrSH(i,o,28)^Pe.default.rotrBH(i,o,34)^Pe.default.rotrBH(i,o,39),F=Pe.default.rotrSL(i,o,28)^Pe.default.rotrBL(i,o,34)^Pe.default.rotrBL(i,o,39),Y=i&a^i&u^a&u,ie=o&l^o&d^l&d;x=w|0,A=E|0,w=$|0,E=k|0,$=g|0,k=v|0,{h:g,l:v}=Pe.default.add(h|0,p|0,re|0,V|0),h=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const W=Pe.default.add3L(V,F,ie);i=Pe.default.add3H(W,re,Q,Y),o=W|0}({h:i,l:o}=Pe.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Pe.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Pe.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h,l:p}=Pe.default.add(this.Dh|0,this.Dl|0,h|0,p|0),{h:g,l:v}=Pe.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:$,l:k}=Pe.default.add(this.Fh|0,this.Fl|0,$|0,k|0),{h:w,l:E}=Pe.default.add(this.Gh|0,this.Gl|0,w|0,E|0),{h:x,l:A}=Pe.default.add(this.Hh|0,this.Hl|0,x|0,A|0),this.set(i,o,a,l,u,d,h,p,g,v,$,k,w,E,x,A)}roundClean(){Ur.fill(0),Nr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}yn.SHA512=yo;class Z7 extends yo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class V7 extends yo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class K7 extends yo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Cu=yn.sha512=(0,yl.wrapConstructor)(()=>new yo);yn.sha512_224=(0,yl.wrapConstructor)(()=>new Z7);yn.sha512_256=(0,yl.wrapConstructor)(()=>new V7);yn.sha384=(0,yl.wrapConstructor)(()=>new K7);const G7=ol(A6),Q7=ol(P7);Object.defineProperty(sn,"__esModule",{value:!0});var T1=sn.mnemonicToSeedSync=sn.mnemonicToSeed=U1=sn.validateMnemonic=sn.entropyToMnemonic=sn.mnemonicToEntropy=P1=sn.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const A1=xt,I1=rs,Y7=D7,R1=yn,J7=G7,pa=Q7,X7=e=>e[0]==="あいこくしん";function O1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function gd(e){const t=O1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function L1(e){A1.default.bytes(e,16,20,24,28,32)}function ek(e,t=128){if(A1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return j1((0,J7.randomBytes)(t/8),e)}var P1=sn.generateMnemonic=ek;const tk=e=>{const t=8-e.length/4;return new Uint8Array([(0,Y7.sha256)(e)[0]>>t<<t])};function M1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),pa.utils.chain(pa.utils.checksum(1,tk),pa.utils.radix2(11,!0),pa.utils.alphabet(e))}function B1(e,t){const{words:n}=gd(e),i=M1(t).decode(n);return L1(i),i}sn.mnemonicToEntropy=B1;function j1(e,t){return L1(e),M1(t).encode(e).join(X7(t)?"　":" ")}sn.entropyToMnemonic=j1;function nk(e,t){try{B1(e,t)}catch{return!1}return!0}var U1=sn.validateMnemonic=nk;const N1=e=>O1(`mnemonic${e}`);function rk(e,t=""){return(0,I1.pbkdf2Async)(R1.sha512,gd(e).nfkd,N1(t),{c:2048,dkLen:64})}sn.mnemonicToSeed=rk;function ik(e,t=""){return(0,I1.pbkdf2)(R1.sha512,gd(e).nfkd,N1(t),{c:2048,dkLen:64})}T1=sn.mnemonicToSeedSync=ik;const sk=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),D1=Uint8Array.from({length:16},(e,t)=>t),ok=D1.map(e=>(9*e+5)%16);let md=[D1],vd=[ok];for(let e=0;e<4;e++)for(let t of[md,vd])t.push(t[e].map(n=>sk[n]));const z1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),ak=md.map((e,t)=>e.map(n=>z1[t][n])),lk=vd.map((e,t)=>e.map(n=>z1[t][n])),ck=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),uk=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ga=(e,t)=>e<<t|e>>>32-t;function Xp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ma=new Uint32Array(16);class dk extends qg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let $=0;$<16;$++,n+=4)ma[$]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,h=this.h3|0,p=h,g=this.h4|0,v=g;for(let $=0;$<5;$++){const k=4-$,w=ck[$],E=uk[$],x=md[$],A=vd[$],L=ak[$],I=lk[$];for(let C=0;C<16;C++){const T=ga(i+Xp($,a,u,h)+ma[x[C]]+w,L[C])+g|0;i=g,g=h,h=ga(u,10)|0,u=a,a=T}for(let C=0;C<16;C++){const T=ga(o+Xp(k,l,d,p)+ma[A[C]]+E,I[C])+v|0;o=v,v=p,p=ga(d,10)|0,d=l,l=T}}this.set(this.h1+u+p|0,this.h2+h+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ma.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const fk=dl(()=>new dk),va=Nt.ProjectivePoint,iu=h1(zn);function e0(e){return BigInt(`0x${nn(e)}`)}function hk(e){return Zr(e.toString(16).padStart(64,"0"))}const pk=nd("Bitcoin seed"),su={private:76066276,public:76067358},ou=2147483648,gk=e=>fk(zn(e)),mk=e=>gi(e).getUint32(0,!1),ba=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return mk(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return iu.encode(this.serialize(this.versions.private,fi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return iu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=su){if(Ki(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=La(Cu,pk,t);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=su){const i=iu.decode(t),o=gi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...l,privateKey:u.slice(1)}):new ui({...l,publicKey:u})}static fromJSON(t){return ui.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||su,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Nt.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:e0(t.privateKey),this.privKeyBytes=hk(this.privKey),this.pubKey=Nt.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=va.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=gk(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=ou)throw new Error("Invalid index");a[2]==="'"&&(l+=ou),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ba(t);if(t>=ou){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=fi(new Uint8Array([0]),u,n)}else n=fi(this.pubKey,n);const i=La(Cu,this.chainCode,n),o=e0(i.slice(0,32)),a=i.slice(32);if(!Nt.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=yt(this.privKey+o,Nt.CURVE.n);if(!Nt.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=va.fromHex(this.pubKey).add(va.fromPrivateKey(o));if(u.equals(va.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new ui(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Ki(t,32),Nt.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Ki(t,32),Ki(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Nt.Signature.fromCompact(n)}catch{return!1}return Nt.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Ki(n,33),fi(ba(t),new Uint8Array([this.depth]),ba(this.parentFingerprint),ba(this.index),this.chainCode,n)}}var vk=Object.defineProperty,Mt=(e,t)=>{for(var n in t)vk(e,n,{get:t[n],enumerable:!0})};function H1(e){return nn(mo.getPublicKey(e))}var F1={};Mt(F1,{MessageNode:()=>q1,MessageQueue:()=>W1,insertEventIntoAscendingList:()=>yk,insertEventIntoDescendingList:()=>bk,normalizeURL:()=>Su,utf8Decoder:()=>zr,utf8Encoder:()=>Hn});var zr=new TextDecoder("utf-8"),Hn=new TextEncoder;function Su(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function bk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function yk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var q1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},W1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new q1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},dt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(dt||{});function Z1(e,t){let n=e;return n.pubkey=H1(t),n.id=_l(n),n.sig=xk(n,t),n}function _k(e){if(!bd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function _l(e){let t=zn(Hn.encode(_k(e)));return nn(t)}var wk=e=>e instanceof Object;function bd(e){if(!wk(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function yd(e){try{return mo.verify(e.sig,_l(e),e.pubkey)}catch{return!1}}function xk(e,t){return nn(mo.sign(_l(e),t))}function $k(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function kk(e,t){for(let n=0;n<e.length;n++)if($k(e[n],t))return!0;return!1}var Ek={};Mt(Ek,{getHex64:()=>wl,getInt:()=>V1,getSubscriptionId:()=>K1,matchEventId:()=>Ck,matchEventKind:()=>Tk,matchEventPubkey:()=>Sk});function wl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function V1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function K1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function Ck(e,t){return t===wl(e,"id")}function Sk(e,t){return t===wl(e,"pubkey")}function Tk(e,t){return t===V1(e,"kind")}var t0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function Ak(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=t0(),d={},h={},p;async function g(){return p||(p=new Promise((x,A)=>{try{a=new WebSocket(e)}catch(T){A(T)}a.onopen=()=>{u.connect.forEach(T=>T()),x()},a.onerror=()=>{p=void 0,u.error.forEach(T=>T()),A()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(T=>T())};let L=new W1,I;a.onmessage=T=>{L.enqueue(T.data),I||(I=setInterval(C,0))};function C(){if(L.size===0){clearInterval(I),I=null;return}var T=L.dequeue();if(!T)return;let j=K1(T);if(j){let N=l[j];if(N&&N.alreadyHaveEvent&&N.alreadyHaveEvent(wl(T,"id"),e))return}try{let N=JSON.parse(T);switch(N[0]){case"EVENT":{let F=N[1],Y=N[2];bd(Y)&&l[F]&&(l[F].skipVerification||yd(Y))&&kk(l[F].filters,Y)&&(l[F],(d[F]?.event||[]).forEach(ie=>ie(Y)));return}case"COUNT":let re=N[1],V=N[2];l[re]&&(d[re]?.count||[]).forEach(F=>F(V));return;case"EOSE":{let F=N[1];F in d&&(d[F].eose.forEach(Y=>Y()),d[F].eose=[]);return}case"OK":{let F=N[1],Y=N[2],ie=N[3]||"";F in h&&(Y?h[F].ok.forEach(W=>W()):h[F].failed.forEach(W=>W(ie)),h[F].ok=[],h[F].failed=[]);return}case"NOTICE":let Q=N[1];u.notice.forEach(F=>F(Q));return;case"AUTH":{let F=N[1];u.auth?.forEach(Y=>Y(F));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function $(){v()||await g()}async function k(x){let A=JSON.stringify(x);if(!(!v()&&(await new Promise(L=>setTimeout(L,1e3)),!v())))try{a.send(A)}catch(L){console.log(L)}}const w=(x,{verb:A="REQ",skipVerification:L=!1,alreadyHaveEvent:I=null,id:C=Math.random().toString().slice(2)}={})=>{let T=C;return l[T]={id:T,filters:x,skipVerification:L,alreadyHaveEvent:I},k([A,T,...x]),{sub:(j,N={})=>w(j||x,{skipVerification:N.skipVerification||L,alreadyHaveEvent:N.alreadyHaveEvent||I,id:T}),unsub:()=>{delete l[T],delete d[T],k(["CLOSE",T])},on:(j,N)=>{d[T]=d[T]||{event:[],count:[],eose:[]},d[T][j].push(N)},off:(j,N)=>{let re=d[T],V=re[j].indexOf(N);V>=0&&re[j].splice(V,1)}}};function E(x,A){if(!x.id)throw new Error(`event ${x} has no id`);let L=x.id;return k([A,x]),{on:(I,C)=>{h[L]=h[L]||{ok:[],failed:[]},h[L][I].push(C)},off:(I,C)=>{let T=h[L];if(!T)return;let j=T[I].indexOf(C);j>=0&&T[I].splice(j,1)}}}return{url:e,sub:w,on:(x,A)=>{u[x].push(A),x==="connect"&&a?.readyState===1&&A()},off:(x,A)=>{let L=u[x].indexOf(A);L!==-1&&u[x].splice(L,1)},list:(x,A)=>new Promise(L=>{let I=w(x,A),C=[],T=setTimeout(()=>{I.unsub(),L(C)},n);I.on("eose",()=>{I.unsub(),clearTimeout(T),L(C)}),I.on("event",j=>{C.push(j)})}),get:(x,A)=>new Promise(L=>{let I=w([x],A),C=setTimeout(()=>{I.unsub(),L(null)},i);I.on("event",T=>{I.unsub(),clearTimeout(C),L(T)})}),count:x=>new Promise(A=>{let L=w(x,{...w,verb:"COUNT"}),I=setTimeout(()=>{L.unsub(),A(null)},o);L.on("count",C=>{L.unsub(),clearTimeout(I),A(C)})}),publish(x){return E(x,"EVENT")},auth(x){return E(x,"AUTH")},connect:$,close(){u=t0(),d={},h={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var Ik=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Su(t)];n&&n.close()})}async ensureRelay(e){const t=Su(e);this._conn[t]||(this._conn[t]=Ak(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,$)=>{if(n?.alreadyHaveEvent?.(v,$))return!0;let k=this._seenOn[v]||new Set;return k.add($),this._seenOn[v]=k,i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,h=!1,p=setTimeout(()=>{h=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let $;try{$=await this.ensureRelay(v)}catch{w();return}if(!$)return;let k=$.sub(t,o);k.on("event",E=>{i.add(E.id);for(let x of l.values())x(E)}),k.on("eose",()=>{h||w()}),a.push(k);function w(){if(d--,d===0){clearTimeout(p);for(let E of u.values())E()}}});let g={sub(v,$){return a.forEach(k=>k.sub(v,$)),g},unsub(){a.forEach(v=>v.unsub())},on(v,$){v==="event"?l.add($):v==="eose"&&u.add($)},off(v,$){v==="event"?l.delete($):v==="eose"&&u.delete($)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],h=()=>a(l);i.set(a,h),d.on(o,h)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},_o={};Mt(_o,{BECH32_REGEX:()=>G1,decode:()=>xl,naddrEncode:()=>Bk,neventEncode:()=>Mk,noteEncode:()=>Lk,nprofileEncode:()=>Pk,npubEncode:()=>Ok,nrelayEncode:()=>jk,nsecEncode:()=>Rk});var vs=5e3,G1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function xl(e){let{prefix:t,words:n}=zt.decode(e,vs),i=new Uint8Array(zt.fromWords(n));switch(t){case"nprofile":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:nn(o[0][0]),relays:o[1]?o[1].map(a=>zr.decode(a)):[]}}}case"nevent":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:nn(o[0][0]),relays:o[1]?o[1].map(a=>zr.decode(a)):[],author:o[2]?.[0]?nn(o[2][0]):void 0}}}case"naddr":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:zr.decode(o[0][0]),pubkey:nn(o[2][0]),kind:parseInt(nn(o[3][0]),16),relays:o[1]?o[1].map(a=>zr.decode(a)):[]}}}case"nrelay":{let o=ya(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:zr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:nn(i)};default:throw new Error(`unknown prefix ${t}`)}}function ya(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function Rk(e){return _d("nsec",e)}function Ok(e){return _d("npub",e)}function Lk(e){return _d("note",e)}function _d(e,t){let n=Zr(t),i=zt.toWords(n);return zt.encode(e,i,vs)}function Pk(e){let t=$l({0:[Zr(e.pubkey)],1:(e.relays||[]).map(i=>Hn.encode(i))}),n=zt.toWords(t);return zt.encode("nprofile",n,vs)}function Mk(e){let t=$l({0:[Zr(e.id)],1:(e.relays||[]).map(i=>Hn.encode(i)),2:e.author?[Zr(e.author)]:[]}),n=zt.toWords(t);return zt.encode("nevent",n,vs)}function Bk(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=$l({0:[Hn.encode(e.identifier)],1:(e.relays||[]).map(o=>Hn.encode(o)),2:[Zr(e.pubkey)],3:[new Uint8Array(t)]}),i=zt.toWords(n);return zt.encode("naddr",i,vs)}function jk(e){let t=$l({0:[Hn.encode(e)]}),n=zt.toWords(t);return zt.encode("nrelay",n,vs)}function $l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),fi(...t)}var Uk={};Mt(Uk,{decrypt:()=>Dk,encrypt:()=>Nk});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function Nk(e,t,n){const i=Nt.getSharedSecret(e,"02"+t),o=Q1(i);let a=Uint8Array.from(fl(16)),l=Hn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),h=ns.encode(new Uint8Array(d)),p=ns.encode(new Uint8Array(a.buffer));return`${h}?iv=${p}`}async function Dk(e,t,n){let[i,o]=n.split("?iv="),a=Nt.getSharedSecret(e,"02"+t),l=Q1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=ns.decode(i),h=ns.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:h},u,d);return zr.decode(p)}function Q1(e){return e.slice(1,33)}var Y1={};Mt(Y1,{NIP05_REGEX:()=>J1,queryProfile:()=>Fk,searchDomain:()=>Hk,useFetchImplementation:()=>zk});var J1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,kl;try{kl=fetch}catch{}function zk(e){kl=e}async function Hk(e,t=""){try{return(await(await kl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function Fk(e){const t=e.match(J1);if(!t)return null;const[n,i="_",o]=t;try{const a=await kl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=qk(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function qk(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var Wk={};Mt(Wk,{generateSeedWords:()=>Vk,privateKeyFromSeedWords:()=>Zk,validateWords:()=>Kk});function Zk(e,t){let i=ui.fromMasterSeed(T1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return nn(i)}function Vk(){return P1(hd)}function Kk(e){return U1(e,hd)}var Gk={};Mt(Gk,{parse:()=>Qk});function Qk(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,h={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=h;continue}if(d==="reply"){t.reply=h;continue}if(d==="mention"){t.mentions.push(h);continue}if(p){t.root=h;continue}if(g){t.reply=h;continue}t.mentions.push(h)}return t}var Yk={};Mt(Yk,{getPow:()=>Jk});function Jk(e){return Xk(Zr(e))}function Xk(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=e9(e[n]),t+=i,i===8);n++);return t}function e9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var t9={};Mt(t9,{finishRepostEvent:()=>n9,getRepostedEvent:()=>r9,getRepostedEventPointer:()=>X1});function n9(e,t,n,i){return Z1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function X1(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function r9(e,{skipVerification:t}={}){const n=X1(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!yd(i)))return i}var i9={};Mt(i9,{NOSTR_URI_REGEX:()=>El,parse:()=>o9,test:()=>s9});var El=new RegExp(`nostr:(${G1.source})`);function s9(e){return typeof e=="string"&&new RegExp(`^${El.source}$`).test(e)}function o9(e){const t=e.match(new RegExp(`^${El.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:xl(t[1])}}var a9={};Mt(a9,{finishReactionEvent:()=>l9,getReactedEventPointer:()=>c9});function l9(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Z1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function c9(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var u9={};Mt(u9,{createDelegation:()=>d9,getDelegator:()=>f9});function d9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=zn(Hn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=nn(mo.sign(o,e));return{from:H1(e),to:t.pubkey,cond:i,sig:a}}function f9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,h,p]=a[u].split(/\b/);if(!(d==="kind"&&h==="="&&e.kind===parseInt(p))){if(d==="created_at"&&h==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&h===">"&&e.created_at>parseInt(p))continue;return null}}let l=zn(Hn.encode(`nostr:delegation:${e.pubkey}:${i}`));return mo.verify(o,l,n)?n:null}var h9={};Mt(h9,{matchAll:()=>p9,regex:()=>wd,replaceAll:()=>g9});var wd=()=>new RegExp(`\\b${El.source}\\b`,"g");function*p9(e){const t=e.matchAll(wd());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:xl(o),start:n.index,end:n.index+i.length}}}function g9(e,t){return e.replaceAll(wd(),(n,i)=>t({uri:n,value:i,decoded:xl(i)}))}var m9={};Mt(m9,{useFetchImplementation:()=>v9,validateGithub:()=>b9});var xd;try{xd=fetch}catch{}function v9(e){xd=e}async function b9(e,t,n){try{return await(await xd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var y9={};Mt(y9,{authenticate:()=>_9});var _9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},w9={};Mt(w9,{getZapEndpoint:()=>$9,makeZapReceipt:()=>C9,makeZapRequest:()=>k9,useFetchImplementation:()=>x9,validateZapRequest:()=>E9});var $d;try{$d=fetch}catch{}function x9(e){$d=e}async function $9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=zt.decode(n,1e3),u=zt.fromWords(l);t=zr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await $d(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function k9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function E9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!bd(t))return"Zap request is not a valid Nostr event.";if(!yd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function C9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const S9=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),em=(e={})=>(()=>{const t=S9();return Ve(t,e,!0,!0),t})(),T9=B('<button class="text-blue-500 underline">'),{noteEncode:A9,neventEncode:I9}=_o,R9=e=>{try{return A9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},O9=e=>{try{return I9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},eo=e=>(()=>{const t=T9();return O(t,y(le,{get when(){return e.kind==null||e.kind===dt.Text},get fallback(){return O9(e.eventId)},get children(){return R9(e.eventId)}})),t})(),L9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],tm=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],P9=[...tm,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],M9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],B9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},bs=()=>({id:B9(),width:"medium"}),nm=e=>({...bs(),columnType:"Following",...e}),rm=e=>({...bs(),columnType:"Notification",...e}),j9=e=>({...bs(),columnType:"Relays",...e}),im=()=>j9({name:"日本語",relayUrls:tm,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),sm=e=>({...bs(),columnType:"Posts",...e}),om=e=>({...bs(),columnType:"Reactions",...e}),kd=e=>({...bs(),columnType:"Search",...e}),U9=/^[0-9a-f]{64}$/,to=e=>{const t=typeof e=="string"&&e.length===64&&U9.test(e);return t||console.warn("invalid id is ignored: ",e),t};class am{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&to(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&to(n))}taggedPubkeys(){return pr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}class lm extends am{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}var We;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(We||(We={}));var Tu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Tu||(Tu={}));const oe=We.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Hr=e=>{switch(typeof e){case"undefined":return oe.undefined;case"string":return oe.string;case"number":return isNaN(e)?oe.nan:oe.number;case"boolean":return oe.boolean;case"function":return oe.function;case"bigint":return oe.bigint;case"symbol":return oe.symbol;case"object":return Array.isArray(e)?oe.array:e===null?oe.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?oe.promise:typeof Map<"u"&&e instanceof Map?oe.map:typeof Set<"u"&&e instanceof Set?oe.set:typeof Date<"u"&&e instanceof Date?oe.date:oe.object;default:return oe.unknown}},X=We.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),N9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class An extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const h=l.path[d];d===l.path.length-1?(u[h]=u[h]||{_errors:[]},u[h]._errors.push(n(l))):u[h]=u[h]||{_errors:[]},u=u[h],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,We.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}An.create=e=>new An(e);const no=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===oe.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,We.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${We.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${We.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:We.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,We.assertNever(e)}return{message:n}};let cm=no;function D9(e){cm=e}function Na(){return cm}const Da=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(h=>!!h).slice().reverse();for(const h of d)u=h(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},z9=[];function ue(e,t){const n=Da({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Na(),no].filter(i=>!!i)});e.common.issues.push(n)}class Pt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Ae;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Pt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ae;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Ae=Object.freeze({status:"aborted"}),um=e=>({status:"dirty",value:e}),Ht=e=>({status:"valid",value:e}),Au=e=>e.status==="aborted",Iu=e=>e.status==="dirty",za=e=>e.status==="valid",Ha=e=>typeof Promise<"u"&&e instanceof Promise;var ge;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(ge||(ge={}));class Fn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const n0=(e,t)=>{if(za(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new An(e.common.issues);return this._error=n,this._error}}};function Oe(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Be{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Hr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Pt,ctx:{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Ha(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return n0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Ha(o)?o:Promise.resolve(o));return n0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Rn({schema:this,typeName:ke.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return gr.create(this,this._def)}nullable(){return yi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return In.create(this,this._def)}promise(){return ss.create(this,this._def)}or(t){return oo.create([this,t],this._def)}and(t){return ao.create(this,t,this._def)}transform(t){return new Rn({...Oe(this._def),schema:this,typeName:ke.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new ho({...Oe(this._def),innerType:this,defaultValue:n,typeName:ke.ZodDefault})}brand(){return new fm({typeName:ke.ZodBranded,type:this,...Oe(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Za({...Oe(this._def),innerType:this,catchValue:n,typeName:ke.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return wo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const H9=/^c[^\s-]{8,}$/i,F9=/^[a-z][a-z0-9]*$/,q9=/[0-9A-HJKMNP-TV-Z]{26}/,W9=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Z9=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,V9=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,K9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,G9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Q9=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Y9(e,t){return!!((t==="v4"||!t)&&K9.test(e)||(t==="v6"||!t)&&G9.test(e))}class Tn extends Be{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...ge.errToObj(i)}),this.nonempty=t=>this.min(1,ge.errToObj(t)),this.trim=()=>new Tn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Tn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Tn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==oe.string){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:oe.string,received:a.parsedType}),Ae}const i=new Pt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?ue(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ue(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")V9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")W9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")H9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")F9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")q9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ue(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Q9(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?Y9(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):We.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Tn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...ge.errToObj(t)})}url(t){return this._addCheck({kind:"url",...ge.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...ge.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...ge.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...ge.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...ge.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...ge.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...ge.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...ge.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...ge.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...ge.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...ge.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...ge.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...ge.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...ge.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...ge.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Tn.create=e=>{var t;return new Tn({checks:[],typeName:ke.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Oe(e)})};function J9(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Kr extends Be{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==oe.number){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:oe.number,received:a.parsedType}),Ae}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="int"?We.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ue(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?J9(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_finite,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ge.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ge.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ge.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ge.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ge.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:ge.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ge.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ge.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ge.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ge.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ge.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:ge.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ge.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ge.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&We.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:ke.ZodNumber,coerce:e?.coerce||!1,...Oe(e)});class Gr extends Be{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==oe.bigint){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:oe.bigint,received:a.parsedType}),Ae}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ge.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ge.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ge.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ge.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ge.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ge.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ge.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ge.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ge.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ge.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Gr.create=e=>{var t;return new Gr({checks:[],typeName:ke.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Oe(e)})};class ro extends Be{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==oe.boolean){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:oe.boolean,received:i.parsedType}),Ae}return Ht(t.data)}}ro.create=e=>new ro({typeName:ke.ZodBoolean,coerce:e?.coerce||!1,...Oe(e)});class vi extends Be{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==oe.date){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:oe.date,received:a.parsedType}),Ae}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_date}),Ae}const i=new Pt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):We.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:ge.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:ge.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}vi.create=e=>new vi({checks:[],coerce:e?.coerce||!1,typeName:ke.ZodDate,...Oe(e)});class Fa extends Be{_parse(t){if(this._getType(t)!==oe.symbol){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:oe.symbol,received:i.parsedType}),Ae}return Ht(t.data)}}Fa.create=e=>new Fa({typeName:ke.ZodSymbol,...Oe(e)});class io extends Be{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:oe.undefined,received:i.parsedType}),Ae}return Ht(t.data)}}io.create=e=>new io({typeName:ke.ZodUndefined,...Oe(e)});class so extends Be{_parse(t){if(this._getType(t)!==oe.null){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:oe.null,received:i.parsedType}),Ae}return Ht(t.data)}}so.create=e=>new so({typeName:ke.ZodNull,...Oe(e)});class is extends Be{constructor(){super(...arguments),this._any=!0}_parse(t){return Ht(t.data)}}is.create=e=>new is({typeName:ke.ZodAny,...Oe(e)});class mi extends Be{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ht(t.data)}}mi.create=e=>new mi({typeName:ke.ZodUnknown,...Oe(e)});class yr extends Be{_parse(t){const n=this._getOrReturnCtx(t);return ue(n,{code:X.invalid_type,expected:oe.never,received:n.parsedType}),Ae}}yr.create=e=>new yr({typeName:ke.ZodNever,...Oe(e)});class qa extends Be{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:oe.void,received:i.parsedType}),Ae}return Ht(t.data)}}qa.create=e=>new qa({typeName:ke.ZodVoid,...Oe(e)});class In extends Be{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==oe.array)return ue(n,{code:X.invalid_type,expected:oe.array,received:n.parsedType}),Ae;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(ue(n,{code:l?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ue(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ue(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Fn(n,l,n.path,u)))).then(l=>Pt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Fn(n,l,n.path,u)));return Pt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new In({...this._def,minLength:{value:t,message:ge.toString(n)}})}max(t,n){return new In({...this._def,maxLength:{value:t,message:ge.toString(n)}})}length(t,n){return new In({...this._def,exactLength:{value:t,message:ge.toString(n)}})}nonempty(t){return this.min(1,t)}}In.create=(e,t)=>new In({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ke.ZodArray,...Oe(t)});function Gi(e){if(e instanceof at){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=gr.create(Gi(i))}return new at({...e._def,shape:()=>t})}else return e instanceof In?new In({...e._def,type:Gi(e.element)}):e instanceof gr?gr.create(Gi(e.unwrap())):e instanceof yi?yi.create(Gi(e.unwrap())):e instanceof qn?qn.create(e.items.map(t=>Gi(t))):e}class at extends Be{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=We.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==oe.object){const h=this._getOrReturnCtx(t);return ue(h,{code:X.invalid_type,expected:oe.object,received:h.parsedType}),Ae}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof yr&&this._def.unknownKeys==="strip"))for(const h in o.data)l.includes(h)||u.push(h);const d=[];for(const h of l){const p=a[h],g=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Fn(o,g,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof yr){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")u.length>0&&(ue(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Fn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of d){const g=await p.key;h.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Pt.mergeObjectSync(i,h)):Pt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return ge.errToObj,new at({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=ge.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new at({...this._def,unknownKeys:"strip"})}passthrough(){return new at({...this._def,unknownKeys:"passthrough"})}extend(t){return new at({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new at({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ke.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new at({...this._def,catchall:t})}pick(t){const n={};return We.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new at({...this._def,shape:()=>n})}omit(t){const n={};return We.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new at({...this._def,shape:()=>n})}deepPartial(){return Gi(this)}partial(t){const n={};return We.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new at({...this._def,shape:()=>n})}required(t){const n={};return We.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof gr;)a=a._def.innerType;n[i]=a}}),new at({...this._def,shape:()=>n})}keyof(){return dm(We.objectKeys(this.shape))}}at.create=(e,t)=>new at({shape:()=>e,unknownKeys:"strip",catchall:yr.create(),typeName:ke.ZodObject,...Oe(t)});at.strictCreate=(e,t)=>new at({shape:()=>e,unknownKeys:"strict",catchall:yr.create(),typeName:ke.ZodObject,...Oe(t)});at.lazycreate=(e,t)=>new at({shape:e,unknownKeys:"strip",catchall:yr.create(),typeName:ke.ZodObject,...Oe(t)});class oo extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new An(u.ctx.common.issues));return ue(n,{code:X.invalid_union,unionErrors:l}),Ae}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const h={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:h}),h.common.issues.length&&l.push(h.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new An(d));return ue(n,{code:X.invalid_union,unionErrors:u}),Ae}}get options(){return this._def.options}}oo.create=(e,t)=>new oo({options:e,typeName:ke.ZodUnion,...Oe(t)});const Ea=e=>e instanceof co?Ea(e.schema):e instanceof Rn?Ea(e.innerType()):e instanceof uo?[e.value]:e instanceof Qr?e.options:e instanceof fo?Object.keys(e.enum):e instanceof ho?Ea(e._def.innerType):e instanceof io?[void 0]:e instanceof so?[null]:null;class Cl extends Be{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.object)return ue(n,{code:X.invalid_type,expected:oe.object,received:n.parsedType}),Ae;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ue(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ae)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=Ea(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Cl({typeName:ke.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Oe(i)})}}function Ru(e,t){const n=Hr(e),i=Hr(t);if(e===t)return{valid:!0,data:e};if(n===oe.object&&i===oe.object){const o=We.objectKeys(t),a=We.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Ru(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===oe.array&&i===oe.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Ru(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===oe.date&&i===oe.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class ao extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(Au(a)||Au(l))return Ae;const u=Ru(a.value,l.value);return u.valid?((Iu(a)||Iu(l))&&n.dirty(),{status:n.value,value:u.data}):(ue(i,{code:X.invalid_intersection_types}),Ae)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}ao.create=(e,t,n)=>new ao({left:e,right:t,typeName:ke.ZodIntersection,...Oe(n)});class qn extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.array)return ue(i,{code:X.invalid_type,expected:oe.array,received:i.parsedType}),Ae;if(i.data.length<this._def.items.length)return ue(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ae;!this._def.rest&&i.data.length>this._def.items.length&&(ue(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Fn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Pt.mergeArray(n,l)):Pt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new qn({...this._def,rest:t})}}qn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new qn({items:e,typeName:ke.ZodTuple,rest:null,...Oe(t)})};class lo extends Be{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.object)return ue(i,{code:X.invalid_type,expected:oe.object,received:i.parsedType}),Ae;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Fn(i,u,i.path,u)),value:l._parse(new Fn(i,i.data[u],i.path,u))});return i.common.async?Pt.mergeObjectAsync(n,o):Pt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Be?new lo({keyType:t,valueType:n,typeName:ke.ZodRecord,...Oe(i)}):new lo({keyType:Tn.create(),valueType:t,typeName:ke.ZodRecord,...Oe(n)})}}class Wa extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.map)return ue(i,{code:X.invalid_type,expected:oe.map,received:i.parsedType}),Ae;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],h)=>({key:o._parse(new Fn(i,u,i.path,[h,"key"])),value:a._parse(new Fn(i,d,i.path,[h,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const h=await d.key,p=await d.value;if(h.status==="aborted"||p.status==="aborted")return Ae;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const h=d.key,p=d.value;if(h.status==="aborted"||p.status==="aborted")return Ae;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}}}}Wa.create=(e,t,n)=>new Wa({valueType:t,keyType:e,typeName:ke.ZodMap,...Oe(n)});class bi extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.set)return ue(i,{code:X.invalid_type,expected:oe.set,received:i.parsedType}),Ae;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ue(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ue(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const h=new Set;for(const p of d){if(p.status==="aborted")return Ae;p.status==="dirty"&&n.dirty(),h.add(p.value)}return{status:n.value,value:h}}const u=[...i.data.values()].map((d,h)=>a._parse(new Fn(i,d,i.path,h)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:ge.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:ge.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:ke.ZodSet,...Oe(t)});class Yi extends Be{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.function)return ue(n,{code:X.invalid_type,expected:oe.function,received:n.parsedType}),Ae;function i(u,d){return Da({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Na(),no].filter(h=>!!h),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return Da({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Na(),no].filter(h=>!!h),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof ss?Ht(async(...u)=>{const d=new An([]),h=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),p=await l(...h);return await this._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})}):Ht((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new An([i(u,d.error)]);const h=l(...d.data),p=this._def.returns.safeParse(h,a);if(!p.success)throw new An([o(h,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Yi({...this._def,args:qn.create(t).rest(mi.create())})}returns(t){return new Yi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Yi({args:t||qn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:ke.ZodFunction,...Oe(i)})}}class co extends Be{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}co.create=(e,t)=>new co({getter:e,typeName:ke.ZodLazy,...Oe(t)});class uo extends Be{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ue(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Ae}return{status:"valid",value:t.data}}get value(){return this._def.value}}uo.create=(e,t)=>new uo({value:e,typeName:ke.ZodLiteral,...Oe(t)});function dm(e,t){return new Qr({values:e,typeName:ke.ZodEnum,...Oe(t)})}class Qr extends Be{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ue(n,{expected:We.joinValues(i),received:n.parsedType,code:X.invalid_type}),Ae}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ue(n,{received:n.data,code:X.invalid_enum_value,options:i}),Ae}return Ht(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Qr.create(t)}exclude(t){return Qr.create(this.options.filter(n=>!t.includes(n)))}}Qr.create=dm;class fo extends Be{_parse(t){const n=We.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==oe.string&&i.parsedType!==oe.number){const o=We.objectValues(n);return ue(i,{expected:We.joinValues(o),received:i.parsedType,code:X.invalid_type}),Ae}if(n.indexOf(t.data)===-1){const o=We.objectValues(n);return ue(i,{received:i.data,code:X.invalid_enum_value,options:o}),Ae}return Ht(t.data)}get enum(){return this._def.values}}fo.create=(e,t)=>new fo({values:e,typeName:ke.ZodNativeEnum,...Oe(t)});class ss extends Be{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.promise&&n.common.async===!1)return ue(n,{code:X.invalid_type,expected:oe.promise,received:n.parsedType}),Ae;const i=n.parsedType===oe.promise?n.data:Promise.resolve(n.data);return Ht(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ss.create=(e,t)=>new ss({type:e,typeName:ke.ZodPromise,...Oe(t)});class Rn extends Be{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ke.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{ue(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Ae:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Ae:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!za(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>za(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);We.assertNever(o)}}Rn.create=(e,t,n)=>new Rn({schema:e,typeName:ke.ZodEffects,effect:t,...Oe(n)});Rn.createWithPreprocess=(e,t,n)=>new Rn({schema:t,effect:{type:"preprocess",transform:e},typeName:ke.ZodEffects,...Oe(n)});class gr extends Be{_parse(t){return this._getType(t)===oe.undefined?Ht(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}gr.create=(e,t)=>new gr({innerType:e,typeName:ke.ZodOptional,...Oe(t)});class yi extends Be{_parse(t){return this._getType(t)===oe.null?Ht(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}yi.create=(e,t)=>new yi({innerType:e,typeName:ke.ZodNullable,...Oe(t)});class ho extends Be{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===oe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ho.create=(e,t)=>new ho({innerType:e,typeName:ke.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Oe(t)});class Za extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ha(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new An(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new An(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Za.create=(e,t)=>new Za({innerType:e,typeName:ke.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Oe(t)});class Va extends Be{_parse(t){if(this._getType(t)!==oe.nan){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:oe.nan,received:i.parsedType}),Ae}return{status:"valid",value:t.data}}}Va.create=e=>new Va({typeName:ke.ZodNaN,...Oe(e)});const X9=Symbol("zod_brand");class fm extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class wo extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ae:a.status==="dirty"?(n.dirty(),um(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ae:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new wo({in:t,out:n,typeName:ke.ZodPipeline})}}const hm=(e,t={},n)=>e?is.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,h=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...h,fatal:d})}}):is.create(),eE={object:at.lazycreate};var ke;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(ke||(ke={}));const tE=(e,t={message:`Input not instance of ${e.name}`})=>hm(n=>n instanceof e,t),pm=Tn.create,gm=Kr.create,nE=Va.create,rE=Gr.create,mm=ro.create,iE=vi.create,sE=Fa.create,oE=io.create,aE=so.create,lE=is.create,cE=mi.create,uE=yr.create,dE=qa.create,fE=In.create,hE=at.create,pE=at.strictCreate,gE=oo.create,mE=Cl.create,vE=ao.create,bE=qn.create,yE=lo.create,_E=Wa.create,wE=bi.create,xE=Yi.create,$E=co.create,kE=uo.create,EE=Qr.create,CE=fo.create,SE=ss.create,r0=Rn.create,TE=gr.create,AE=yi.create,IE=Rn.createWithPreprocess,RE=wo.create,OE=()=>pm().optional(),LE=()=>gm().optional(),PE=()=>mm().optional(),ME={string:e=>Tn.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>ro.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>vi.create({...e,coerce:!0})},BE=Ae;var lt=Object.freeze({__proto__:null,defaultErrorMap:no,setErrorMap:D9,getErrorMap:Na,makeIssue:Da,EMPTY_PATH:z9,addIssueToContext:ue,ParseStatus:Pt,INVALID:Ae,DIRTY:um,OK:Ht,isAborted:Au,isDirty:Iu,isValid:za,isAsync:Ha,get util(){return We},get objectUtil(){return Tu},ZodParsedType:oe,getParsedType:Hr,ZodType:Be,ZodString:Tn,ZodNumber:Kr,ZodBigInt:Gr,ZodBoolean:ro,ZodDate:vi,ZodSymbol:Fa,ZodUndefined:io,ZodNull:so,ZodAny:is,ZodUnknown:mi,ZodNever:yr,ZodVoid:qa,ZodArray:In,ZodObject:at,ZodUnion:oo,ZodDiscriminatedUnion:Cl,ZodIntersection:ao,ZodTuple:qn,ZodRecord:lo,ZodMap:Wa,ZodSet:bi,ZodFunction:Yi,ZodLazy:co,ZodLiteral:uo,ZodEnum:Qr,ZodNativeEnum:fo,ZodPromise:ss,ZodEffects:Rn,ZodTransformer:Rn,ZodOptional:gr,ZodNullable:yi,ZodDefault:ho,ZodCatch:Za,ZodNaN:Va,BRAND:X9,ZodBranded:fm,ZodPipeline:wo,custom:hm,Schema:Be,ZodSchema:Be,late:eE,get ZodFirstPartyTypeKind(){return ke},coerce:ME,any:lE,array:fE,bigint:rE,boolean:mm,date:iE,discriminatedUnion:mE,effect:r0,enum:EE,function:xE,instanceof:tE,intersection:vE,lazy:$E,literal:kE,map:_E,nan:nE,nativeEnum:CE,never:uE,null:aE,nullable:AE,number:gm,object:hE,oboolean:PE,onumber:LE,optional:TE,ostring:OE,pipeline:RE,preprocess:IE,promise:SE,record:yE,set:wE,strictObject:pE,string:pm,symbol:sE,transformer:r0,tuple:bE,undefined:oE,union:gE,unknown:cE,void:dE,NEVER:BE,ZodIssueCode:X,quotelessJson:N9,ZodError:An});const{decode:jE}=_o,UE=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,NE=/(?:#\[(?<idx>\d+)\])/g,DE=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,zE=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,HE=/:(?<emoji>\w+):/gu,vm=e=>{const t=[...e.matchAll(UE),...e.matchAll(NE),...e.matchAll(DE),...e.matchAll(zE),...e.matchAll(HE)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=jE(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},FE=e=>t=>e.safeParse(t).success,qE=lt.tuple([lt.literal("emoji"),lt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),lt.string().url()]),WE=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&to(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let ZE=class extends lm{#e;#t;constructor(t){if(t.kind!==dt.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=vm(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&to(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&to(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=WE(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(FE(qE))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const hr=e=>new lm(e),Sl=e=>new ZE(e),VE=()=>{const e=[...L9];return window.navigator.language.includes("ja")&&e.push(...P9),e},bm=()=>({relayUrls:VE(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),KE=e=>JSON.stringify(e),GE=e=>({...bm(),...JSON.parse(e)}),QE=Ux(()=>window.localStorage,KE,GE),[qs,Kt]=Nx("RabbitConfig",bm(),QE),je=()=>{const e=x=>{Kt("relayUrls",A=>pr([...A,x]))},t=x=>{Kt("relayUrls",A=>A.filter(L=>L!==x))},n=x=>{Kt("mutedPubkeys",A=>pr([...A,x]))},i=x=>{Kt("mutedPubkeys",A=>A.filter(L=>L!==x))},o=x=>{Kt("mutedKeywords",A=>pr([...A,x]))},a=x=>{Kt("mutedKeywords",A=>A.filter(L=>L!==x))},l=x=>{Kt("columns",A=>{const L=A.findIndex(I=>I.id===x.id);if(L>=0){const I=[...A];return I.splice(L,1,x),I}return[...A,x]})},u=(x,A)=>{Kt("columns",L=>{const I=A-1,C=Math.max(Math.min(I,L.length),0),T=L.findIndex(re=>re.id===x);if(T<0||C===T)return L;console.log(T,C);const j=[...L],[N]=j.splice(T,1);return j.splice(C,0,N),j})},d=x=>{Kt("columns",A=>A.filter(L=>L.id!==x))},h=x=>{Kt("customEmojis",A=>({...A,[x.shortcode]:x}))},p=x=>{Kt("customEmojis",A=>{const L=Object.fromEntries(x.map(I=>[I.shortcode,I]));return{...A,...L}})},g=x=>{Kt("customEmojis",A=>({...A,[x]:void 0}))},v=x=>qs.customEmojis[x],$=x=>qs.mutedPubkeys.includes(x),k=x=>x.kind===dt.Text?qs.mutedKeywords.some(A=>x.content.includes(A)):!1;return{config:()=>qs,setConfig:Kt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:x})=>{if((qs.columns?.length??0)>0)return;const A=[nm({width:"widest",pubkey:x}),rm({pubkey:x}),sm({name:"自分の投稿",pubkey:x}),om({name:"自分のリアクション",pubkey:x})];navigator.language.includes("ja")&&A.splice(2,0,im()),Kt("columns",()=>[...A])},saveEmoji:h,saveEmojis:p,removeEmoji:g,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:$,shouldMuteEvent:x=>{const A=hr(x);return $(x.pubkey)||A.taggedPubkeys().some($)||x.kind===dt.Text&&k(x)}}},[YE]=xe(new Ik),Tl=()=>YE,[ym,i0]=Xi({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...ym})},1e3);const _m=()=>({stats:ym,setActiveSubscriptions:n=>i0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>i0("activeBatchSubscriptions",n)});let s0=0;const JE=()=>{const e=s0;return s0+=1,e};class XE{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=JE(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const eC=e=>{const t=qe(e),n=qe(()=>t().batchSize??100),i=qe(()=>t().interval??2e3),[o,a]=xe([]);let l;const u=()=>{const{executor:g}=t(),v=o();v.length>0&&(a([]),g(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(v=>[...v,g]):(u(),a([g])),d()},removeTask:g=>{a(v=>v.filter($=>$!==g))}}};class ys extends XE{addEvent(t){this.updateWith(n=>[...n??[],t])}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}}let Ou=0;const{setActiveBatchSubscriptions:tC}=_m();setInterval(()=>{tC(Ou)},1e3);const nC=e=>e.kind>=3e4&&e.kind<4e4,rC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{addTask:iC,removeTask:sC}=eC(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(C=>{if(C.req.type==="Event"){const T=n.get(C.req.eventId)??[];n.set(C.req.eventId,[...T,C])}else if(C.req.type==="Profile"){const T=t.get(C.req.pubkey)??[];t.set(C.req.pubkey,[...T,C])}else if(C.req.type==="Reactions"){const T=i.get(C.req.mentionedEventId)??[];i.set(C.req.mentionedEventId,[...T,C])}else if(C.req.type==="Reposts"){const T=o.get(C.req.mentionedEventId)??[];o.set(C.req.mentionedEventId,[...T,C])}else if(C.req.type==="ZapReceipts"){const T=a.get(C.req.mentionedEventId)??[];o.set(C.req.mentionedEventId,[...T,C])}else if(C.req.type==="ParameterizedReplaceableEvent"){const T=rC(C.req),j=l.get(T)??[];l.set(T,[...j,C])}else if(C.req.type==="Followings"){const T=u.get(C.req.pubkey)??[];u.set(C.req.pubkey,[...T,C])}});const d=[...n.keys()],h=[...t.keys()],p=[...i.keys()],g=[...o.keys()],v=[...a.keys()],$=[...u.keys()],k=[];if(d.length>0&&k.push({ids:d}),h.length>0&&k.push({kinds:[dt.Metadata],authors:h}),p.length>0&&k.push({kinds:[dt.Reaction],"#e":p}),g.length>0&&k.push({kinds:[6],"#e":g}),v.length>0&&k.push({kinds:[9735],"#e":v}),$.length>0&&k.push({kinds:[dt.Contacts],authors:$}),l.size>0&&Array.from(l.values()).forEach(([C])=>{if(C.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:T,author:j,identifier:N}}=C;k.push({kinds:[T],authors:[j],"#d":[N]})}),k.length===0)return;const w=(C,T)=>{C.forEach(j=>{j.addEvent(T)})},E=()=>{e.forEach(C=>{C.complete()})},{config:x,shouldMuteEvent:A}=je(),I=Tl()().sub(x().relayUrls,k,{});Ou+=1,I.on("event",C=>{if(C.kind===dt.Metadata){const T=t.get(C.pubkey)??[];w(T,C);return}if(C.kind===dt.Reaction){const T=hr(C).lastTaggedEventId();if(T!=null){const j=i.get(T)??[];w(j,C)}}else if(C.kind===6){const T=hr(C).lastTaggedEventId();if(T!=null){const j=o.get(T)??[];w(j,C)}}else if(C.kind===dt.Zap)hr(C).eTags().forEach(([,j])=>{const N=o.get(j)??[];w(N,C)});else if(C.kind===dt.Contacts){const T=u.get(C.pubkey)??[];w(T,C)}else if(nC(C)){const T=hr(C).findFirstTagByName("d")?.[1];if(T!=null){const j=`${C.kind}:${C.pubkey}:${T}`,N=l.get(j)??[];w(N,C)}else console.warn("identifier is undefined")}else{const T=n.get(C.id)??[];T.length>0?w(T,C):console.warn("unknown event received")}}),I.on("eose",()=>{E(),I.unsub(),Ou-=1})}})),_s=({task:e,signal:t})=>{iC(e),t?.addEventListener("abort",()=>sC(e))},Ed=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),wr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(l))},e)});return Promise.race([n,i])},wm=e=>{const t=qe(e),n=wi(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new ys({type:"Event",eventId:u}),h=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return _s({task:d,signal:a}),wr(15e3,`useEvent: ${u}`)(h)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},an=e=>t=>e.some(n=>n==null)?null:t(e),oC=B("<span>投稿が見つかりません"),aC=B('<div class="truncate">読み込み中 '),os=e=>{const[t,n]=Ix(e,["eventId"]),{shouldMuteEvent:i}=je(),{event:o,query:a}=wm(()=>an([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return y(on,{get fallback(){return(()=>{const u=oC();return u.firstChild,O(u,()=>e.eventId,null),u})()},get children(){return[y(ze,{get when(){return l()},children:null}),y(ze,{get when(){return o()},keyed:!0,children:u=>y(uv,Rx({event:u},n))}),y(ze,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=aC();return d.firstChild,O(d,y(eo,{eventId:u}),null),d})()})]}})},lC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},cC=e=>{try{return lC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},$i=e=>{const t=_i(),n=qe(e),i=qe(()=>["useProfile",n()]),o=wi(i,({queryKey:u,signal:d})=>{const[,h]=u;if(h==null)return null;const{pubkey:p}=h,g=new ys({type:"Profile",pubkey:p}),v=g.firstEventPromise().catch(()=>{throw new Error(`profile not found: ${p}`)});return g.onUpdate($=>{const k=Ed($);t.setQueryData(u,k)}),_s({task:g,signal:d}),wr(3e3,`useProfile: ${p}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:qe(()=>{if(o.data==null)return null;const{content:u}=o.data;return cC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:uC}=_o,xo=e=>{try{return uC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Al=e=>{const{profile:t}=$i(()=>({pubkey:e.pubkey}));return y(on,{get fallback(){return xo(e.pubkey)},get children(){return[y(ze,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),y(ze,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",qe(()=>t()?.name)]}})]}})},xm=e=>{const[t,n]=xe(new Date);return Nn(()=>{const i=setInterval(()=>{n(new Date)},e().interval);vr(()=>clearInterval(i))}),t},dC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},o0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,fC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},hC=e=>{switch(e.kind){case"today":return o0(e.value);case"yesterday":return`昨日 ${o0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},pC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,gC=(e,t)=>{const n=pC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},a0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),mC=e=>new Date(+e-24*60*60*1e3),$m=(e,t,n)=>a0(e,t)?n({kind:"today",value:e}):a0(e,mC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),vC=(e,t=new Date)=>$m(e,t,fC),bC=(e,t=new Date)=>$m(e,t,hC),l0=(e,t=new Date,n=dC)=>n(gC(e,t)),c0=xm(()=>({interval:7e3})),u0=xm(()=>({interval:60*1e3})),km=()=>{const{config:e}=je();return t=>{switch(e().dateFormat){case"absolute-long":return vC(t,u0());case"absolute-short":return bC(t,u0());case"relative":return l0(t,c0());default:return l0(t,c0())}}},[yC,Vi]=xe({type:"Closed"}),xr=()=>({modalState:yC,setModalState:Vi,showProfile:a=>{Vi({type:"Profile",pubkey:a})},showProfileEdit:()=>{Vi({type:"ProfileEdit"})},showAddColumn:()=>{Vi({type:"AddColumn"})},showAbout:()=>{Vi({type:"About"})},closeModal:()=>{Vi({type:"Closed"})}}),_C=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),Em=e=>{const{showProfile:t}=xr(),n=km(),i=qe(()=>hr(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=_C(),l=a.firstChild,u=l.firstChild,d=u.nextSibling,h=d.firstChild,p=d.nextSibling,g=l.nextSibling;return O(u,y(em,{})),h.$$click=()=>t(e.event.pubkey),O(h,y(Al,{get pubkey(){return e.event.pubkey}})),O(p,()=>n(i().createdAtAsDate())),O(g,y(os,{get eventId(){return o()}})),a})()};st(["click"]);const wC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),xC=(e={})=>(()=>{const t=wC();return Ve(t,e,!0,!0),t})(),$C=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Cm=(e={})=>(()=>{const t=$C();return Ve(t,e,!0,!0),t})(),kC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Cd=(e={})=>(()=>{const t=kC();return Ve(t,e,!0,!0),t})(),EC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Sm=(e={})=>(()=>{const t=EC();return Ve(t,e,!0,!0),t})(),CC=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Ka=(e={})=>(()=>{const t=CC();return Ve(t,e,!0,!0),t})(),SC=B('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Sd=e=>{let t,n;const[i,o]=xe(!1),[a,l]=xe({}),u=Ox(()=>e.children),d=()=>o(!1),h=()=>o(k=>!k),p=k=>{const w=k.target;w!=null&&!n?.contains(w)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},$=()=>{if(t==null||n==null)return;const k=t?.getBoundingClientRect(),w=n?.getBoundingClientRect();let{top:E,left:x}=k;e.position==="left"?x-=k.width:e.position==="right"?x+=k.width:e.position==="top"?(E-=k.height,x-=k.left+k.width/2):(E+=k.height,x+=k.width/2),E=Math.min(E,window.innerHeight-w.height),x=Math.min(x,window.innerWidth-w.width),l({left:`${x}px`,top:`${E}px`})};return Nn(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),Nn(sl(u,()=>{$()})),Nn(()=>{i()&&$()}),ln(()=>{e.ref?.({close:d})}),vr(()=>v()),(()=>{const k=SC(),w=k.firstChild,E=w.nextSibling;w.$$click=()=>{h(),$()};const x=t;typeof x=="function"?br(x,w):t=w,O(w,()=>e.button);const A=n;return typeof A=="function"?br(A,E):n=E,O(E,u),Ue(L=>{const I=!i(),C=!!i(),T=a();return I!==L._v$&&E.classList.toggle("hidden",L._v$=I),C!==L._v$2&&E.classList.toggle("block",L._v$2=C),L._v$3=Lx(E,T,L._v$3),L},{_v$:void 0,_v$2:void 0,_v$3:void 0}),k})()};st(["click"]);const TC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),AC=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),IC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=TC(),i=n.firstChild;return i.$$click=t,O(i,()=>e.item.content()),n})()},Tm=e=>{let t;const n=()=>t?.close();return y(Sd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=AC();return O(i,y(kt,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>y(IC,{item:o,onClose:n})})),i}})};st(["click"]);function Am(e){return e&&e.__esModule?e.default:e}function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Il,be,Im,Vs,Rm,d0,Ga={},Om=[],RC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fr(e,t){for(var n in t)e[n]=t[n];return e}function Lm(e){var t=e.parentNode;t&&t.removeChild(e)}function Lu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Il.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Ca(e,l,i,o,null)}function Ca(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Im};return o==null&&be.vnode!=null&&be.vnode(a),a}function cr(){return{current:null}}function as(e){return e.children}function Dn(e,t){this.props=e,this.context=t}function ls(e,t){if(t==null)return e.__?ls(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ls(e):null}function Pm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Pm(e)}}function f0(e){(!e.__d&&(e.__d=!0)&&Vs.push(e)&&!Qa.__r++||d0!==be.debounceRendering)&&((d0=be.debounceRendering)||Rm)(Qa)}function Qa(){for(var e;Qa.__r=Vs.length;)e=Vs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Vs=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Fr({},a)).__v=a.__v+1,Td(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??ls(a),a.__h),Um(i,a),a.__e!=l&&Pm(a)))})}function Mm(e,t,n,i,o,a,l,u,d,h){var p,g,v,$,k,w,E,x=i&&i.__k||Om,A=x.length;for(n.__k=[],p=0;p<t.length;p++)if(($=n.__k[p]=($=t[p])==null||typeof $=="boolean"?null:typeof $=="string"||typeof $=="number"||typeof $=="bigint"?Ca(null,$,null,null,$):Array.isArray($)?Ca(as,{children:$},null,null,null):$.__b>0?Ca($.type,$.props,$.key,null,$.__v):$)!=null){if($.__=n,$.__b=n.__b+1,(v=x[p])===null||v&&$.key==v.key&&$.type===v.type)x[p]=void 0;else for(g=0;g<A;g++){if((v=x[g])&&$.key==v.key&&$.type===v.type){x[g]=void 0;break}v=null}Td(e,$,v=v||Ga,o,a,l,u,d,h),k=$.__e,(g=$.ref)&&v.ref!=g&&(E||(E=[]),v.ref&&E.push(v.ref,null,$),E.push(g,$.__c||k,$)),k!=null?(w==null&&(w=k),typeof $.type=="function"&&$.__k===v.__k?$.__d=d=Bm($,d,e):d=jm(e,$,v,x,k,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=ls(v))}for(n.__e=w,p=A;p--;)x[p]!=null&&(typeof n.type=="function"&&x[p].__e!=null&&x[p].__e==n.__d&&(n.__d=ls(i,p+1)),Dm(x[p],x[p]));if(E)for(p=0;p<E.length;p++)Nm(E[p],E[++p],E[++p])}function Bm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Bm(i,t,n):jm(n,i,i,o,i.__e,t));return t}function Ya(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ya(n,t)}):t.push(e)),t}function jm(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function OC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Ja(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Ja(e,a,t[a],n[a],i)}function h0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||RC.test(t)?n:n+"px"}function Ja(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||h0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||h0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?g0:p0,a):e.removeEventListener(t,a?g0:p0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function p0(e){this.l[e.type+!1](be.event?be.event(e):e)}function g0(e){this.l[e.type+!0](be.event?be.event(e):e)}function Td(e,t,n,i,o,a,l,u,d){var h,p,g,v,$,k,w,E,x,A,L,I=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(h=be.__b)&&h(t);try{e:if(typeof I=="function"){if(E=t.props,x=(h=I.contextType)&&i[h.__c],A=h?x?x.props.value:h.__:i,n.__c?w=(p=t.__c=n.__c).__=p.__E:("prototype"in I&&I.prototype.render?t.__c=p=new I(E,A):(t.__c=p=new Dn(E,A),p.constructor=I,p.render=PC),x&&x.sub(p),p.props=E,p.state||(p.state={}),p.context=A,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),I.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Fr({},p.__s)),Fr(p.__s,I.getDerivedStateFromProps(E,p.__s))),v=p.props,$=p.state,g)I.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(I.getDerivedStateFromProps==null&&E!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,A),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(E,p.__s,A)===!1||t.__v===n.__v){p.props=E,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(C){C&&(C.__=t)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,A),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,$,k)})}p.context=A,p.props=E,p.state=p.__s,(h=be.__r)&&h(t),p.__d=!1,p.__v=t,p.__P=e,h=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Fr(Fr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(k=p.getSnapshotBeforeUpdate(v,$)),L=h!=null&&h.type===as&&h.key==null?h.props.children:h,Mm(e,Array.isArray(L)?L:[L],t,n,i,o,a,l,u,d),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),w&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=LC(n.__e,t,n,i,o,a,l,d);(h=be.diffed)&&h(t)}catch(C){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),be.__e(C,t,n)}}function Um(e,t){be.__c&&be.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){be.__e(i,n.__v)}})}function LC(e,t,n,i,o,a,l,u){var d,h,p,g=n.props,v=t.props,$=t.type,k=0;if($==="svg"&&(o=!0),a!=null){for(;k<a.length;k++)if((d=a[k])&&"setAttribute"in d==!!$&&($?d.localName===$:d.nodeType===3)){e=d,a[k]=null;break}}if(e==null){if($===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",$):document.createElement($,v.is&&v),a=null,u=!1}if($===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Il.call(e.childNodes),h=(g=n.props||Ga).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},k=0;k<e.attributes.length;k++)g[e.attributes[k].name]=e.attributes[k].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(OC(e,v,g,o,u),p)t.__k=[];else if(k=t.props.children,Mm(e,Array.isArray(k)?k:[k],t,n,i,o&&$!=="foreignObject",a,l,a?a[0]:n.__k&&ls(n,0),u),a!=null)for(k=a.length;k--;)a[k]!=null&&Lm(a[k]);u||("value"in v&&(k=v.value)!==void 0&&(k!==g.value||k!==e.value||$==="progress"&&!k)&&Ja(e,"value",k,g.value,!1),"checked"in v&&(k=v.checked)!==void 0&&k!==e.checked&&Ja(e,"checked",k,g.checked,!1))}return e}function Nm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){be.__e(i,n)}}function Dm(e,t,n){var i,o;if(be.unmount&&be.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Nm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){be.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Dm(i[o],t,typeof e.type!="function");n||e.__e==null||Lm(e.__e),e.__e=e.__d=void 0}function PC(e,t,n){return this.constructor(e,n)}function zm(e,t,n){var i,o,a;be.__&&be.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Td(t,e=(!i&&n||t).__k=Lu(as,null,[e]),o||Ga,Ga,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Il.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),Um(a,e)}Il=Om.slice,be={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Im=0,Dn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fr({},this.state),typeof e=="function"&&(e=e(Fr({},n),this.props)),e&&Fr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),f0(this))},Dn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f0(this))},Dn.prototype.render=as,Vs=[],Rm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Qa.__r=0;var MC=0;function Z(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--MC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return be.vnode&&be.vnode(d),d}function BC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function jC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Wr={set:BC,get:jC};const au=new Map,UC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function NC(){for(const{v:e,emoji:t}of UC)if(Hm(t))return e}function DC(){return!Hm("🇨🇦")}function Hm(e){if(au.has(e))return au.get(e);const t=zC(e);return au.set(e,t),t}const zC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,h=Math.floor(u/4/n),p=e.getImageData(d,h,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var m0={latestVersion:NC,noCountryFlags:DC};const Pu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Tt=null;function HC(e){Tt||(Tt=Wr.get("frequently")||{});const t=e.id||e;t&&(Tt[t]||(Tt[t]=0),Tt[t]+=1,Wr.set("last",t),Wr.set("frequently",Tt))}function FC({maxFrequentRows:e,perLine:t}){if(!e)return[];Tt||(Tt=Wr.get("frequently"));let n=[];if(!Tt){Tt={};for(let a in Pu.slice(0,t)){const l=Pu[a];Tt[l]=t-a,n.push(l)}return n}const i=e*t,o=Wr.get("last");for(let a in Tt)n.push(a);if(n.sort((a,l)=>{const u=Tt[l],d=Tt[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Tt[l];o&&n.indexOf(o)==-1&&(delete Tt[n[n.length-1]],n.splice(-1,1,o)),Wr.set("frequently",Tt)}return n}var Fm={add:HC,get:FC,DEFAULTS:Pu},qm={};qm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var fr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Lt=null,De=null;const lu={};async function v0(e){if(lu[e])return lu[e];const n=await(await fetch(e)).json();return lu[e]=n,n}let cu=null,Wm=null,Zm=!1;function Rl(e,{caller:t}={}){return cu||(cu=new Promise(n=>{Wm=n})),e?qC(e):t&&!Zm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),cu}async function qC(e){Zm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=fr.emojiVersion.value),n||(n=fr.set.value),i||(i=fr.locale.value),De)De.categories=De.categories.filter(d=>!d.name);else{De=(typeof e.data=="function"?await e.data():e.data)||await v0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),De.emoticons={},De.natives={},De.categories.unshift({id:"frequent",emojis:[]});for(const d in De.aliases){const h=De.aliases[d],p=De.emojis[h];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}De.originalCategories=De.categories}if(Lt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Am(qm):await v0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const h=e.custom[d],p=e.custom[d-1];if(!(!h.emojis||!h.emojis.length)){h.id||(h.id=`custom_${d+1}`),h.name||(h.name=Lt.categories.custom),p&&!h.icon&&(h.target=p.target||p),De.categories.push(h);for(const g of h.emojis)De.emojis[g.id]=g}}e.categories&&(De.categories=De.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,h)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(h.id);return p-g}));let o=null,a=null;n=="native"&&(o=m0.latestVersion(),a=e.noCountryFlags||m0.noCountryFlags());let l=De.categories.length,u=!1;for(;l--;){const d=De.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:fr.maxFrequentRows.value,v||(v=fr.perLine.value),d.emojis=Fm.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){De.categories.splice(l,1);continue}const{categoryIcons:h}=e;if(h){const g=h[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:De.emojis[g],$=()=>{d.emojis.splice(p,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){$();continue}if(o&&v.version>o){$();continue}if(a&&d.id=="flags"&&!GC.includes(v.id)){$();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([w,E])=>{if(w)return(Array.isArray(w)?w:[w]).map(x=>(E?x.split(/[-|_|\s]+/):[x]).map(A=>A.toLowerCase())).flat()}).flat().filter(w=>w&&w.trim()).join(","),v.emoticons)for(const w of v.emoticons)De.emoticons[w]||(De.emoticons[w]=v.id);let k=0;for(const w of v.skins){if(!w)continue;k++;const{native:E}=w;E&&(De.natives[E]=v.id,v.search+=`,${E}`);const x=k==1?"":`:skin-tone-${k}:`;w.shortcodes=`:${v.id}:${x}`}}}}u&&Ji.reset(),Wm()}function Vm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Km(o,e,t,n);return i}function Km(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const WC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Mu=null;function ZC(e){return e.id?e:De.emojis[e]||De.emojis[De.aliases[e]]||De.emojis[De.natives[e]]}function VC(){Mu=null}async function KC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Rl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,h)=>u.trim()&&h.indexOf(u)==d);if(!i.length)return;let o=Mu||(Mu=Object.values(De.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const h=d.search.indexOf(`,${u}`);h!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:h+1)}o=a}return a.length<2||(a.sort((u,d)=>{const h=l[u.id],p=l[d.id];return h==p?u.id.localeCompare(d.id):h-p}),a.length>t&&(a=a.slice(0,t))),a}var Ji={search:KC,get:ZC,reset:VC,SHORTCODES_REGEX:WC};const GC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function QC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function YC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function JC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const XC={activity:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),Z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),Z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),Z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),Z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},eS={loupe:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Xa={categories:XC,search:eS};function Bu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Ji.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Ji.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return Z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?Z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?Z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):Z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*De.sheet.cols}% ${100*De.sheet.rows}%`,backgroundPosition:`${100/(De.sheet.cols-1)*o.x}% ${100/(De.sheet.rows-1)*o.y}%`}})})}const tS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Gm extends tS{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Km(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class nS extends Gm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Qm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:fr.set,skin:fr.skin};class Ym extends Gm{async connectedCallback(){const t=Vm(this.props,Qm,this);t.element=this,t.ref=n=>{this.component=n},await Rl(),!this.disconnected&&zm(Z(Bu,{...t}),this)}constructor(t){super(t)}}Cn(Ym,"Props",Qm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Ym);var b0,ju=[],y0=be.__b,_0=be.__r,w0=be.diffed,x0=be.__c,$0=be.unmount;function rS(){var e;for(ju.sort(function(t,n){return t.__v.__b-n.__v.__b});e=ju.pop();)if(e.__P)try{e.__H.__h.forEach(Sa),e.__H.__h.forEach(Uu),e.__H.__h=[]}catch(t){e.__H.__h=[],be.__e(t,e.__v)}}be.__b=function(e){y0&&y0(e)},be.__r=function(e){_0&&_0(e);var t=e.__c.__H;t&&(t.__h.forEach(Sa),t.__h.forEach(Uu),t.__h=[])},be.diffed=function(e){w0&&w0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ju.push(t)!==1&&b0===be.requestAnimationFrame||((b0=be.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),k0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);k0&&(i=requestAnimationFrame(o))})(rS))},be.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Sa),n.__h=n.__h.filter(function(i){return!i.__||Uu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],be.__e(i,n.__v)}}),x0&&x0(e,t)},be.unmount=function(e){$0&&$0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Sa(i)}catch(o){t=o}}),t&&be.__e(t,n.__v))};var k0=typeof requestAnimationFrame=="function";function Sa(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Uu(e){e.__c=e.__()}function iS(e,t){for(var n in t)e[n]=t[n];return e}function E0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function el(e){this.props=e}(el.prototype=new Dn).isPureReactComponent=!0,el.prototype.shouldComponentUpdate=function(e,t){return E0(this.props,e)||E0(this.state,t)};var C0=be.__b;be.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),C0&&C0(e)};var sS=be.__e;be.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}sS(e,t,n)};var S0=be.unmount;function uu(){this.__u=0,this.t=null,this.__b=null}function Jm(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function _a(){this.u=null,this.o=null}be.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),S0&&S0(e)},(uu.prototype=new Dn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Jm(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var h=i.state.__e;i.__v.__k[0]=function g(v,$,k){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(w){return g(w,$,k)}),v.__c&&v.__c.__P===$&&(v.__e&&k.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=k)),v}(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},uu.prototype.componentWillUnmount=function(){this.t=[]},uu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),l.__c.__H=null),(l=iS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(h){return a(h,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Lu(as,null,e.fallback);return o&&(o.__h=null),[Lu(as,null,t.__e?null:e.children),o]};var T0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(_a.prototype=new Dn).__e=function(e){var t=this,n=Jm(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),T0(t,e,i)):o()};n?n(a):a()}},_a.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ya(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},_a.prototype.componentDidUpdate=_a.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){T0(e,n,t)})};var oS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,aS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,lS=typeof document<"u",cS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Dn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Dn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var A0=be.event;function uS(){}function dS(){return this.cancelBubble}function fS(){return this.defaultPrevented}be.event=function(e){return A0&&(e=A0(e)),e.persist=uS,e.isPropagationStopped=dS,e.isDefaultPrevented=fS,e.nativeEvent=e};var I0={configurable:!0,get:function(){return this.class}},R0=be.vnode;be.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];lS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!cS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&aS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ya(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ya(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(I0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",I0))}e.$$typeof=oS,R0&&R0(e)};var O0=be.__r;be.__r=function(e){O0&&O0(e),e.__c};const hS={light:"outline",dark:"solid"};class pS extends el{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return Z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return Z("img",{src:n.src})}const i=Xa.categories[t.id]||Xa.categories.custom,o=this.props.icons=="auto"?hS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return Z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:Z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Lt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),Z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),Z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=De.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class gS extends el{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const wa={rowsPerRender:10};class mS extends Dn{getInitialState(t=this.props){return{skin:Wr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Lt.rtl?"rtl":"ltr",this.refs={menu:cr(),navigation:cr(),scroll:cr(),search:cr(),searchInput:cr(),skinToneButton:cr(),skinToneRadio:cr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Rl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=De;this.refs.categories=new Map;const n=De.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%wa.rowsPerRender?{}:cr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:cr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Ji.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const h=d.target.dataset.id;n.set(h,d.intersectionRatio)}const u=[...n];for(const[d,h]of u)if(h){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(wa.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*wa.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,h]=this.state.pos;const p=(()=>{if(d==0&&h==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(h+=v,!g[h]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,h=i?0:u[d].length-1,[d,h];h=i?g.length-1:0}return[d,h]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[h]||(h=g.length-1),[d,h]):(d=a?0:u.length-1,h=a?0:u[d].length-1,[d,h])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,h=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(h>o.scrollTop+a.height)l=h-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=JC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Fm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Wr.set("skin",t)}renderNav(){return Z(pS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return Z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[Z("div",{class:"flex flex-middle flex-grow",children:[Z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:Z(Bu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),Z("div",{class:`margin-${this.dir[0]}`,children:t||n?Z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[Z("div",{class:"preview-title ellipsis",children:t?t.name:Lt.search_no_results_1}),Z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Lt.search_no_results_2})]}):Z("div",{class:"preview-placeholder color-c",children:Lt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,h=QC(this.state.pos,n),p=n.concat(t.id).join("");return Z(gS,{selected:h,skin:l,size:a,children:Z("button",{"aria-label":d,"aria-selected":h||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[Z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),Z(Bu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return Z("div",{children:[Z("div",{class:"spacer"}),Z("div",{class:"flex flex-middle",children:[Z("div",{class:"search relative flex-grow",children:[Z("input",{type:"search",ref:this.refs.searchInput,placeholder:Lt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),Z("span",{class:"icon loupe flex",children:Xa.search.loupe}),this.state.searchResults&&Z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Xa.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?Z("div",{class:"category",ref:this.refs.search,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Lt.categories.search}),Z("div",{children:t.length?t.map((n,i)=>Z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):Z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&Z("a",{onClick:this.props.onAddCustomEmoji,children:Lt.add_custom})})})]}):null}renderCategories(){const{categories:t}=De,n=!!this.state.searchResults,i=this.getPerLine();return Z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return Z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Lt.categories[o.id]}),Z("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const h=u.index-u.index%wa.rowsPerRender,p=this.state.visibleRows[h],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,$=v+i,k=o.emojis.slice(v,$);return k.length<i&&k.push(...new Array(i-k.length)),Z("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&k.map((w,E)=>{if(!w)return Z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const x=Ji.get(w);return this.renderEmojiButton(x,{pos:[u.index,E],posinset:u.posinset+E,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:Z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:Z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Lt.skins.choose,title:Lt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:Z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return Z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),Z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Lt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return Z("div",{children:[Z("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Lt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),Z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[Z("span",{class:`skin-tone skin-tone-${l}`}),Z("span",{class:"margin-small-lr",children:Lt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return Z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&Z("div",{class:"padding-lr",children:this.renderSearch()}),Z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:Z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Cn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Cn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Cn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Cn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Cn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Ji.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let h of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(h);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),Cn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Cn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Cn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Cn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await YC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Ad extends nS{async connectedCallback(){const t=Vm(this.props,fr,this);t.element=this,t.ref=n=>{this.component=n},await Rl(t),!this.disconnected&&zm(Z(mS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Am(Xm)})}}Cn(Ad,"Props",fr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Ad);var Xm={};Xm=`:host {
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

`;const ev=e=>{let t;const[n,i]=xe(void 0);return y(Sd,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new Ad({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},vS=B("<div>"),bS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),yS=B("<br>"),_S=B("<span>理由: "),wS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),xS=e=>{const[t,n]=xe(!1);return y(le,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=wS();return i.firstChild,i.$$click=()=>n(!0),O(i,y(le,{get when(){return e.contentWarning.reason!=null},get children(){return[yS(),(()=>{const o=_S();return o.firstChild,O(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=vS();return O(i,()=>e.children),i})(),y(le,{get when(){return e.contentWarning.contentWarning},get children(){const i=bS();return i.$$click=()=>n(!1),i}})]}})};st(["click"]);const tv=e=>{const{profile:t}=$i(()=>({pubkey:e.pubkey}));return y(le,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${xo(e.pubkey)}`},get children(){return["@",qe(()=>t()?.name??e.pubkey)]}})},$S=B('<a target="_blank" rel="noreferrer noopener">'),Ol=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return y(le,{get when(){return t()},get fallback(){return e.href},get children(){const n=$S();return O(n,()=>e.children??e.href),Ue(i=>{const o=e.class,a=e.href;return o!==i._v$&&Ag(n,i._v$=o),a!==i._v$2&&ct(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},kS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},ES=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},CS=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),SS=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),TS=e=>{let t;const[n,i]=xe(e.initialHidden);return y(le,{get when(){return!n()},get fallback(){return(()=>{const o=SS();return o.$$click=()=>i(!1),o})()},get children(){return y(Ol,{class:"my-2 block",get href(){return e.url},get children(){const o=CS(),a=t;return typeof a=="function"?br(a,o):t=o,Ue(l=>{const u=ES(e.url),d=e.url;return u!==l._v$&&ct(o,"src",l._v$=u),d!==l._v$2&&ct(o,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),o}})}})};st(["click"]);const AS=B('<div class="my-1 rounded border p-1">'),IS=e=>y(le,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return y(eo,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=AS();return O(t,y(os,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[dt.Text]}})),t}}),RS=B('<button class="inline text-blue-500 underline">'),du=e=>{const{showProfile:t}=xr(),n=()=>{t(e.pubkey)};return(()=>{const i=RS();return i.$$click=n,O(i,y(tv,{get pubkey(){return e.pubkey}})),i})()};st(["click"]);const[Id,OS]=xe({}),nv=e=>{Id()[e]==null&&OS(t=>({...t,[e]:new MessageChannel}))},LS=e=>{const t=()=>Id()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const h=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",h),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",h),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",h,!1),t().port1.start()});return ln(()=>{const{id:o}=e();nv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},PS=e=>{const t=qe(e),n=()=>Id()[t().id];ln(()=>{const{id:i}=t();nv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,h=t().handler(d);(h instanceof Promise?h:Promise.resolve(h)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),vr(()=>{o.removeEventListener("message",a)})})},$o=()=>LS(()=>({id:"CommandChannel"})),Nu=e=>{PS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},fu=B("<span>"),L0=B('<div class="my-1 rounded border p-1">'),MS=B('<span class="text-blue-500 underline">'),BS=B('<button class="text-blue-500 underline">'),jS=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),US=e=>{const{config:t,saveColumn:n}=je(),i=$o(),o=()=>Sl(e.event),a=l=>{n(kd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return y(kt,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=fu();return O(u,()=>l.content),u})();if(l.type==="URL")return kS(l.content)?y(TS,{get url(){return l.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):y(Ol,{class:"text-blue-500 underline",get href(){return l.content}});if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=fu();return O(d,()=>l.content),d})();if(u.type==="MentionedUser")return y(du,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?y(IS,{mentionedEvent:u}):y(eo,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=L0();return O(u,y(os,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[dt.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=L0();return O(u,y(os,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?y(du,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?y(du,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=MS();return O(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=BS();return u.$$click=()=>a(l.content),O(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=fu();return O(d,()=>l.content),d})():(()=>{const d=jS();return ct(d,"src",u),Ue(h=>{const p=l.content,g=l.shortcode;return p!==h._v$&&ct(d,"alt",h._v$=p),g!==h._v$2&&ct(d,"title",h._v$2=g),h},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};st(["click"]);const NS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),cs=(e={})=>(()=>{const t=NS();return Ve(t,e,!0,!0),t})(),DS=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),zS=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=DS();i.$$click=n;const o=t;return typeof o=="function"?br(o,i):t=i,O(i,()=>e.children),i})()};st(["click"]);const HS=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[90vh] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),ki=e=>y(zS,{onClose:()=>e.onClose?.(),get children(){const t=HS(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),O(i,y(le,{get when(){return e?.closeButton},get fallback(){return y(cs,{})},keyed:!0,children:a=>a()})),O(o,()=>e.children),t}});st(["click"]);const FS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),qS=(e={})=>(()=>{const t=FS();return Ve(t,e,!0,!0),t})(),WS=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),ZS=B('<div class="relative inline-block"><button type="button">'),VS=e=>{const[t,n]=xe(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=ZS(),a=o.firstChild;return a.$$click=i,O(a,y(qS,{})),O(o,y(le,{get when(){return t()},get children(){return WS()}}),null),Ue(()=>Ag(a,e.class)),o})()};st(["click"]);const KS=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),GS=e=>{const t=qe(()=>JSON.stringify(e.event,null,2));return y(ki,{get onClose(){return e.onClose},get children(){const n=KS(),i=n.firstChild,o=i.nextSibling;return O(i,t),O(o,y(VS,{class:"h-4 w-4",get text(){return t()}})),n}})},QS=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),YS=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),JS=B('<img alt="icon" class="h-full w-full rounded object-cover">'),XS=e=>{const{profile:t,query:n}=$i(()=>({pubkey:e.pubkey}));return(()=>{const i=YS(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.firstChild,d=u.firstChild,h=d.firstChild;return o.$$click=p=>{p.preventDefault(),e.onShowProfile?.()},O(o,y(le,{get when(){return t()?.picture},keyed:!0,children:p=>(()=>{const g=JS();return ct(g,"src",p),g})()})),u.$$click=p=>{p.preventDefault(),e?.onShowProfile?.()},O(d,y(le,{get when(){return(t()?.display_name?.length??0)>0},get children(){const p=QS();return O(p,()=>t()?.display_name),p}}),h),O(h,y(le,{get when(){return t()?.name},get fallback(){return`@${xo(e.pubkey)}`},keyed:!0,children:p=>`@${p}`})),i})()};st(["click"]);const eT=B('<div class="px-4 py-2"><div> 件</div><div>'),tT=B('<div class="flex border-t py-1">'),Du=e=>{const{showProfile:t}=xr();return y(ki,{get onClose(){return e.onClose},get children(){const n=eT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return O(i,()=>e.data.length,o),O(a,y(kt,{get each(){return e.data},children:l=>{const u=()=>e.pubkeyExtractor(l);return(()=>{const d=tT();return O(d,y(le,{get when(){return e.renderInfo},keyed:!0,children:h=>h(l)}),null),O(d,y(XS,{get pubkey(){return u()},onShowProfile:()=>t(u())}),null),d})()}})),n}})},nT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),rv=(e={})=>(()=>{const t=nT();return Ve(t,e,!0,!0),t})(),rT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),iT=(e={})=>(()=>{const t=rT();return Ve(t,e,!0,!0),t})(),sT=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),oT=(e={})=>(()=>{const t=sT();return Ve(t,e,!0,!0),t})(),aT=e=>Math.floor(+e/1e3),ur=()=>aT(new Date),lT=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),cT=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],h=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...h,...p]},Ll=()=>{const e=Tl(),t=async(d,h)=>{const p={...h};if(p.id=_l(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async v=>{const k=(await e().ensureRelay(v)).publish(g);return lT(k,v)})};return{publishTextNote:async d=>{const{relayUrls:h,pubkey:p,content:g}=d,v=cT(d),$={kind:1,pubkey:p,created_at:ur(),tags:v,content:g};return t(h,$)},publishReaction:async({relayUrls:d,pubkey:h,eventId:p,content:g,notifyPubkey:v})=>{const $={kind:7,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",v]],content:g};return t(d,$)},publishRepost:async({relayUrls:d,pubkey:h,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:h,profile:p,otherProperties:g})=>{const v={...p,...g},$={kind:dt.Metadata,pubkey:h,created_at:ur(),tags:[],content:JSON.stringify(v)};return t(d,$)},updateContacts:async({relayUrls:d,pubkey:h,followingPubkeys:p,content:g})=>{const v=p.map(k=>["p",k]),$={kind:dt.Contacts,pubkey:h,created_at:ur(),tags:v,content:g};return t(d,$)},deleteEvent:async({relayUrls:d,pubkey:h,eventId:p})=>{const g={kind:dt.EventDeletion,pubkey:h,created_at:ur(),tags:[["e",p,""]],content:""};return t(d,g)}}};let hu=!1;const[xa,uT]=xe(void 0),Kn=()=>(ln(()=>{if(xa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),xa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&xa()==null&&!hu&&(hu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),uT(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{hu=!1})),e+=1},200)}),xa),dT=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},fT=e=>t=>Promise.allSettled(t.map(n=>e(n))),hT=B("<div>に返信"),pT=B('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),gT=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),mT=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),vT=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),bT=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},yT=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},_T=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},iv=e=>{let t,n;const[i,o]=xe(""),[a,l]=xe(!1),[u,d]=xe(""),h=J=>o(fe=>`${fe} ${J}`),p=()=>{o(""),d(""),l(!1)},g=()=>{t?.blur(),p(),e.onClose()},{config:v,getEmoji:$}=je(),k=Kn(),w=Ll(),E=()=>e.replyTo&&Sl(e.replyTo),x=()=>e.mode??"normal",A=pi({mutationKey:["publishTextNote"],mutationFn:w.publishTextNote.bind(w),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:J=>{console.error("error",J)}}),L=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},I=pi({mutationKey:["uploadFiles"],mutationFn:async J=>{const fe=await fT(dT)(J),pe=[];if(fe.forEach(($e,Ce)=>{$e.status==="fulfilled"?(h($e.value.imageUrl),L()):pe.push(J[Ce])}),pe.length>0){const $e=pe.map(Ce=>Ce.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${$e}`)}}}),C=qe(()=>{const J=k();return E()?.taggedPubkeys()?.filter(fe=>fe!==J)??[]}),T=qe(()=>e.replyTo==null?[]:pr([e.replyTo.pubkey,...C()])),j=J=>{const fe=[];return J.forEach(pe=>{const $e=$(pe);$e!=null&&fe.push(["emoji",pe,$e.url])}),fe},N=()=>{if(i().length===0||A.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(i())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const J=k();if(J==null){console.error("pubkey is not available");return}const fe=vm(i()),{hashtags:pe,urlReferences:$e,pubkeyReferences:Ce,eventReferences:te,emojis:G}=yT(fe),ne=_T(fe),me=j(G);let q={relayUrls:v().relayUrls,pubkey:J,content:ne,notifyPubkeys:Ce,mentionEventIds:te,hashtags:pe,urls:$e,tags:me};E()!=null&&(q={...q,notifyPubkeys:pr([...T(),...Ce]),rootEventId:E()?.rootEvent()?.id??E()?.replyingToEvent()?.id,replyEventId:E()?.id}),a()&&(q={...q,contentWarning:u()}),A.mutate(q),g()},re=J=>{o(J.currentTarget.value),L()},V=J=>{J.preventDefault(),N()},Q=J=>{J.key==="Enter"&&(J.ctrlKey||J.metaKey)?N():J.key==="Escape"&&(t?.blur(),g())},F=J=>{if(J.preventDefault(),I.isLoading)return;const fe=[...J.currentTarget.files??[]];I.mutate(fe),J.currentTarget.value=""},Y=J=>{if(J.preventDefault(),I.isLoading)return;const fe=[...J?.dataTransfer?.files??[]];I.mutate(fe)},ie=J=>{if(I.isLoading)return;const fe=[...J?.clipboardData?.items??[]],pe=[];fe.forEach($e=>{if($e.kind==="file"){J.preventDefault();const Ce=$e.getAsFile();if(Ce==null)return;pe.push(Ce)}}),pe.length!==0&&I.mutate(pe)},W=J=>{J.preventDefault()},ee=()=>i().trim().length===0||A.isLoading||I.isLoading,ae=()=>I.isLoading;return ln(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const J=vT(),fe=J.firstChild,pe=fe.firstChild,$e=pe.nextSibling,Ce=$e.firstChild,te=Ce.nextSibling,G=te.nextSibling,ne=$e.nextSibling;O(J,y(le,{get when(){return e.replyTo!=null},get children(){const q=hT(),de=q.firstChild;return O(q,y(kt,{get each(){return T()},children:(Se,rt)=>[y(Al,{pubkey:Se}),y(le,{get when(){return rt()!==T().length-1},children:" と "})]}),de),q}}),fe),fe.addEventListener("submit",V),O(fe,y(le,{get when(){return a()},get children(){const q=pT();return q.$$input=de=>d(de.currentTarget.value),Ue(()=>q.value=u()),q}}),pe),pe.addEventListener("paste",ie),pe.addEventListener("drop",Y),pe.addEventListener("dragover",W),pe.$$keydown=Q,pe.$$input=re,br(q=>{t=q,e.textAreaRef?.(q)},pe),O($e,y(le,{get when(){return x()==="reply"},get children(){const q=gT(),de=q.firstChild;return de.$$click=()=>g(),O(de,y(cs,{})),q}}),Ce),O($e,y(ev,{customEmojis:!0,onEmojiSelect:q=>h(q),get children(){const q=mT();return O(q,y(rv,{})),q}}),Ce),Ce.$$click=()=>l(q=>!q),te.$$click=()=>n?.click(),O(te,y(iT,{})),O(G,y(oT,{})),ne.addEventListener("change",F);const me=n;return typeof me=="function"?br(me,ne):n=ne,Ue(q=>{const de=bT(x()),Se=!a(),rt=!!a(),Et=x()==="normal",Ee=x()==="normal",et=x()==="reply",Qe=x()==="reply",It=!!ae(),cn=!ae(),_t=x()==="normal",kr=x()==="normal",Si=x()==="reply",Pn=x()==="reply",mt=ae(),_n=!!ee(),Mn=!ee(),Ti=x()==="normal",we=x()==="normal",Qn=x()==="reply",Gt=x()==="reply",Ft=ee();return de!==q._v$&&ct(pe,"placeholder",q._v$=de),Se!==q._v$2&&Ce.classList.toggle("bg-rose-300",q._v$2=Se),rt!==q._v$3&&Ce.classList.toggle("bg-rose-400",q._v$3=rt),Et!==q._v$4&&Ce.classList.toggle("h-8",q._v$4=Et),Ee!==q._v$5&&Ce.classList.toggle("w-8",q._v$5=Ee),et!==q._v$6&&Ce.classList.toggle("h-7",q._v$6=et),Qe!==q._v$7&&Ce.classList.toggle("w-7",q._v$7=Qe),It!==q._v$8&&te.classList.toggle("bg-primary-disabled",q._v$8=It),cn!==q._v$9&&te.classList.toggle("bg-primary",q._v$9=cn),_t!==q._v$10&&te.classList.toggle("h-8",q._v$10=_t),kr!==q._v$11&&te.classList.toggle("w-8",q._v$11=kr),Si!==q._v$12&&te.classList.toggle("h-7",q._v$12=Si),Pn!==q._v$13&&te.classList.toggle("w-7",q._v$13=Pn),mt!==q._v$14&&(te.disabled=q._v$14=mt),_n!==q._v$15&&G.classList.toggle("bg-primary-disabled",q._v$15=_n),Mn!==q._v$16&&G.classList.toggle("bg-primary",q._v$16=Mn),Ti!==q._v$17&&G.classList.toggle("h-8",q._v$17=Ti),we!==q._v$18&&G.classList.toggle("w-8",q._v$18=we),Qn!==q._v$19&&G.classList.toggle("h-7",q._v$19=Qn),Gt!==q._v$20&&G.classList.toggle("w-7",q._v$20=Gt),Ft!==q._v$21&&(G.disabled=q._v$21=Ft),q},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Ue(()=>pe.value=i()),J})()};st(["input","keydown","click"]);const wT=2,xT=()=>{let e;const[t,n]=xe(!1),i=o=>{e=o};return ln(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+wT)}),{overflow:t,elementRef:i}},$T=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),kT=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),ET=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),CT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),ST=e=>{const{overflow:t,elementRef:n}=xT(),i=km(),[o,a]=xe(),l=()=>i(e.createdAt),u=()=>e.createdAt.toLocaleString(),{profile:d}=$i(()=>({pubkey:e.authorPubkey}));return(()=>{const h=ET(),p=h.firstChild,g=p.firstChild,v=g.nextSibling,$=v.firstChild,k=$.firstChild,w=k.firstChild,E=w.firstChild,x=k.nextSibling,A=x.firstChild,L=$.nextSibling,I=L.nextSibling;return g.$$click=C=>{C.preventDefault(),e.onShowProfile?.()},O(g,y(le,{get when(){return d()?.picture},keyed:!0,children:C=>(()=>{const T=CT();return ct(T,"src",C),T})()})),k.$$click=C=>{C.preventDefault(),e?.onShowProfile?.()},O(w,y(le,{get when(){return(d()?.display_name?.length??0)>0},get children(){const C=$T();return O(C,()=>d()?.display_name),C}}),E),O(E,y(le,{get when(){return d()?.name!=null},get fallback(){return`@${xo(e.authorPubkey)}`},get children(){return["@",qe(()=>d()?.name)]}})),A.$$click=C=>{C.preventDefault(),e.onShowEvent?.()},O(A,l),br(n,L),O(L,()=>e.content),O(v,y(le,{get when(){return t()},get children(){const C=kT();return C.$$click=T=>{T.stopPropagation(),a(j=>!j)},O(C,y(le,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),C}}),I),O(I,()=>e.actions),O(h,y(le,{get when(){return e.footer},get children(){return e.footer}}),null),Ue(C=>{const T=u(),j=!o();return T!==C._v$&&ct(A,"title",C._v$=T),j!==C._v$2&&L.classList.toggle("max-h-screen",C._v$2=j),C},{_v$:void 0,_v$2:void 0}),h})()};st(["click"]);const sv=Px(),TT=()=>Mx(sv),AT=()=>{const[e,t]=Xi({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},IT=/\p{Emoji_Presentation}/u,RT=e=>{const{shouldMuteEvent:t}=je(),n=_i(),i=qe(e),o=qe(()=>["useReactions",i()]),a=wi(o,({queryKey:g,signal:v})=>{const[,$]=g;if($==null)return[];const{eventId:k}=$,w=new ys({type:"Reactions",mentionedEventId:k}),E=w.toUpdatePromise().catch(()=>[]);return w.onUpdate(x=>{n.setQueryData(g,x)}),_s({task:w,signal:v}),wr(15e3,`useReactions: ${k}`)(E)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!t(v));return{reactions:l,reactionsGroupedByContent:()=>{const g=new Map;return l().forEach(v=>{const $=g.get(v.content)??[];$.push(v),g.set(v.content,$)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&IT.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},OT=e=>{const{shouldMuteEvent:t}=je(),n=_i(),i=qe(e),o=qe(()=>["useReposts",i()]),a=wi(o,({queryKey:h,signal:p})=>{const[,g]=h;if(g==null)return[];const{eventId:v}=g,$=new ys({type:"Reposts",mentionedEventId:v}),k=$.toUpdatePromise().catch(()=>[]);return $.onUpdate(w=>{n.setQueryData(h,w)}),_s({task:$,signal:p}),wr(15e3,`useReposts: ${v}`)(k)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!t(p));return{reposts:l,isRepostedBy:h=>l().findIndex(p=>p.pubkey===h)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},LT=B('<div class="flex gap-2 overflow-x-auto py-1">'),ov=B('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),PT=B('<span class="ml-1 text-sm">'),MT=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),av=B('<span class="truncate text-base">'),BT=B('<span class="text-red-500">削除'),jT=B('<div class="nostr-textnote">'),UT=B('<div class="text-xs">への返信'),NT=B('<div class="content whitespace-pre-wrap break-all">'),DT=B('<div class="textnote-content">'),zT=B('<div class="mt-1 rounded border p-1">'),HT=B('<button class="pr-1 text-blue-500 hover:underline">'),P0=B('<div class="text-sm text-zinc-400">'),FT=B('<span class="inline-block h-4 w-4">'),qT=B('<div class="flex shrink-0 items-center gap-1">'),WT=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),ZT=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),VT=B('<div class="w-6">'),{noteEncode:KT}=_o,GT=e=>{const{config:t}=je(),n=Kn();return(()=>{const i=LT();return O(i,y(kt,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const l=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=MT();return u.$$click=()=>e.onReaction(o),O(u,y(le,{when:o==="+",get fallback(){return(()=>{const d=av();return O(d,o),d})()},get children(){const d=ov();return O(d,y(Ka,{})),d}}),null),O(u,y(le,{get when(){return!t().hideCount},get children(){const d=PT();return O(d,()=>a.length),d}}),null),Ue(d=>Ws(u,{"text-zinc-400":!l,"hover:bg-zinc-50":!l,"bg-rose-50":l,"border-rose-200":l,"text-rose-400":l},d)),u})()}})),i})()},lv=e=>{const{config:t}=je(),n=Kn(),{showProfile:i}=xr(),o=TT(),[a,l]=xe(!1),[u,d]=xe(!1),[h,p]=xe(!1),[g,v]=xe(null),$=()=>p(!1),k=()=>v(null),w=qe(()=>Sl(e.event)),E=()=>e.embedding??!0,x=()=>e.actions??!0,{reactions:A,reactionsGroupedByContent:L,isReactedBy:I,isReactedByWithEmoji:C,invalidateReactions:T,query:j}=RT(()=>({eventId:e.event.id})),{reposts:N,isRepostedBy:re,invalidateReposts:V,query:Q}=OT(()=>({eventId:e.event.id})),F=Ll(),Y=pi({mutationKey:["publishReaction",w().id],mutationFn:F.publishReaction.bind(F),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:G=>{console.error("failed to publish reaction: ",G)},onSettled:()=>{T().then(()=>j.refetch()).catch(G=>console.error("failed to refetch reactions",G))}}),ie=pi({mutationKey:["publishRepost",w().id],mutationFn:F.publishRepost.bind(F),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:G=>{console.error("failed to publish repost: ",G)},onSettled:()=>{V().then(()=>Q.refetch()).catch(G=>console.error("failed to refetch reposts",G))}}),W=pi({mutationKey:["deleteEvent",w().id],mutationFn:(...G)=>F.deleteEvent(...G).then(ne=>Promise.allSettled(ne.map(wr(1e4)))),onSuccess:G=>{const ne=G.filter(q=>q.status==="fulfilled").length,me=G.length-ne;ne===G.length?window.alert("削除しました（画面の反映にはリロード）"):ne>0?window.alert(`${me}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:G=>{console.error("failed to delete",G)}}),ee=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(KT(e.event.id)).catch(G=>window.alert(G))}},{content:()=>"JSONを確認",onSelect:()=>{v("EventDebugModal")}},{content:()=>"リポスト一覧",onSelect:()=>{v("Reposts")}},{content:()=>"リアクション一覧",onSelect:()=>{v("Reactions")}},{when:()=>w().pubkey===n(),content:()=>BT(),onSelect:()=>{const G=n();G!=null&&window.confirm("本当に削除しますか？")&&W.mutate({relayUrls:t().relayUrls,pubkey:G,eventId:w().id})}}],ae=qe(()=>{const G=n();return G!=null&&I(G)||a()}),J=qe(()=>{const G=n();return G!=null&&C(G)}),fe=qe(()=>{const G=n();return G!=null&&re(G)||u()}),pe=()=>{if(E()){const G=w().replyingToEvent();if(G!=null&&!w().containsEventMention(G.id))return G.id;const ne=w().rootEvent();if(G==null&&ne!=null&&!w().containsEventMention(ne.id))return ne.id}},$e=G=>{G.stopPropagation(),!fe()&&an([n(),e.event.id])(([ne,me])=>{ie.mutate({relayUrls:t().relayUrls,pubkey:ne,eventId:me,notifyPubkey:e.event.pubkey}),d(!0)})},Ce=G=>{ae()||an([n(),e.event.id])(([ne,me])=>{Y.mutate({relayUrls:t().relayUrls,pubkey:ne,content:G??"+",eventId:me,notifyPubkey:e.event.pubkey}),l(!0)})},te=G=>{G.stopPropagation(),Ce()};return(()=>{const G=jT();return O(G,y(ST,{get authorPubkey(){return w().pubkey},get createdAt(){return w().createdAtAsDate()},get content(){return(()=>{const ne=DT();return O(ne,y(le,{get when(){return pe()},keyed:!0,children:me=>(()=>{const q=zT();return O(q,y(os,{eventId:me,actions:!1,embedding:!1})),q})()}),null),O(ne,y(le,{get when(){return w().taggedPubkeys().length>0},get children(){const me=UT(),q=me.firstChild;return O(me,y(kt,{get each(){return w().taggedPubkeys()},children:de=>(()=>{const Se=HT();return Se.$$click=rt=>{rt.stopPropagation(),i(de)},O(Se,y(tv,{pubkey:de})),Se})()}),q),me}}),null),O(ne,y(xS,{get contentWarning(){return w().contentWarning()},get children(){const me=NT();return O(me,y(US,{get event(){return e.event},get embedding(){return E()}})),me}}),null),ne})()},get actions(){return y(le,{get when(){return x()},get children(){return[y(le,{get when(){return qe(()=>!!t().showEmojiReaction)()&&A().length>0},get children(){return y(GT,{get reactionsGroupedByContent(){return L()},onReaction:Ce})}}),(()=>{const ne=ZT(),me=ne.firstChild,q=me.nextSibling,de=q.firstChild,Se=q.nextSibling,rt=Se.firstChild,Et=Se.nextSibling;return me.$$click=Ee=>{Ee.stopPropagation(),p(et=>!et)},O(me,y(xC,{})),de.$$click=$e,O(de,y(em,{})),O(q,y(le,{get when(){return qe(()=>!t().hideCount)()&&N().length>0},get children(){const Ee=P0();return O(Ee,()=>N().length),Ee}}),null),rt.$$click=te,O(rt,y(le,{get when(){return qe(()=>!!ae())()&&!J()},get fallback(){return y(Cd,{})},get children(){return y(Ka,{})}})),O(Se,y(le,{get when(){return qe(()=>!t().hideCount&&!t().showEmojiReaction)()&&A().length>0},get children(){const Ee=P0();return O(Ee,()=>A().length),Ee}}),null),O(ne,y(le,{get when(){return t().useEmojiReaction},get children(){const Ee=qT();return O(Ee,y(ev,{onEmojiSelect:et=>Ce(et),get children(){const et=FT();return O(et,y(Sm,{})),et}})),Ue(et=>Ws(Ee,{"text-zinc-400":!ae()||!J(),"hover:text-rose-400":!ae()||!J(),"text-rose-400":ae()&&J()||Y.isLoading},et)),Ee}}),Et),O(Et,y(Tm,{menu:ee,get children(){const Ee=WT();return O(Ee,y(Cm,{})),Ee}})),Ue(Ee=>{const et={"text-zinc-400":!fe(),"hover:text-green-400":!fe(),"text-green-400":fe()||ie.isLoading},Qe=ie.isLoading,It={"text-zinc-400":!ae()||J(),"hover:text-rose-400":!ae()||J(),"text-rose-400":ae()&&!J()||Y.isLoading},cn=Y.isLoading;return Ee._v$=Ws(q,et,Ee._v$),Qe!==Ee._v$2&&(de.disabled=Ee._v$2=Qe),Ee._v$3=Ws(Se,It,Ee._v$3),cn!==Ee._v$4&&(rt.disabled=Ee._v$4=cn),Ee},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),ne})()]}})},get footer(){return y(le,{get when(){return h()},get children(){return y(iv,{mode:"reply",get replyTo(){return e.event},onClose:$,onPost:$})}})},onShowProfile:()=>{i(w().pubkey)},onShowEvent:()=>{o?.setTimeline({type:"Replies",event:e.event})}}),null),O(G,y(on,{get children(){return[y(ze,{get when(){return g()==="EventDebugModal"},get children(){return y(GS,{get event(){return e.event},onClose:k})}}),y(ze,{get when(){return g()==="Reactions"},get children(){return y(Du,{get data(){return A()},pubkeyExtractor:ne=>ne.pubkey,renderInfo:({content:ne})=>(()=>{const me=VT();return O(me,y(le,{when:ne==="+",get fallback(){return(()=>{const q=av();return O(q,ne),q})()},get children(){const q=ov();return O(q,y(Ka,{})),q}})),me})(),onClose:k})}}),y(ze,{get when(){return g()==="Reposts"},get children(){return y(Du,{get data(){return N()},pubkeyExtractor:ne=>ne.pubkey,onClose:k})}})]}}),null),G})()};st(["click"]);const cv=e=>{const{shouldMuteEvent:t}=je();return y(le,{get when(){return!t(e.event)},get children(){return y(lv,e)}})},QT=B("<span>予期しないイベント種別（<!>）"),YT=B("<span><span>未対応のイベント種別（<!>）"),uv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return y(on,{get fallback(){return(()=>{const n=YT(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,O(i,()=>e.event.kind,a),O(n,y(eo,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[y(ze,{get when(){return!t()},keyed:!0,get children(){const n=QT(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,O(n,()=>e.event.kind,o),O(n,y(eo,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),y(ze,{get when(){return e.event.kind===dt.Text},get children(){return y(cv,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),y(ze,{get when(){return e.event.kind===6},get children(){return y(Em,{get event(){return e.event}})}})]}})},ws=e=>{const{shouldMuteEvent:t}=je();return y(kt,{get each(){return e.events},children:n=>y(le,{get when(){return!t(n)},get children(){return y(Zs,{get children(){return y(uv,{event:n})}})}})})};var JT=cl;function XT(){this.__data__=new JT,this.size=0}var eA=XT;function tA(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var nA=tA;function rA(e){return this.__data__.get(e)}var iA=rA;function sA(e){return this.__data__.has(e)}var oA=sA,aA=cl,lA=Xu,cA=ed,uA=200;function dA(e,t){var n=this.__data__;if(n instanceof aA){var i=n.__data__;if(!lA||i.length<uA-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new cA(i)}return n.set(e,t),this.size=n.size,this}var fA=dA,hA=cl,pA=eA,gA=nA,mA=iA,vA=oA,bA=fA;function xs(e){var t=this.__data__=new hA(e);this.size=t.size}xs.prototype.clear=pA;xs.prototype.delete=gA;xs.prototype.get=mA;xs.prototype.has=vA;xs.prototype.set=bA;var Rd=xs;function yA(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var _A=yA,wA=jg,xA=_A,$A=Ug,kA=1,EA=2;function CA(e,t,n,i,o,a){var l=n&kA,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var g=-1,v=!0,$=n&EA?new wA:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var k=e[g],w=t[g];if(i)var E=l?i(w,k,g,t,e,a):i(k,w,g,e,t,a);if(E!==void 0){if(E)continue;v=!1;break}if($){if(!xA(t,function(x,A){if(!$A($,A)&&(k===x||o(k,x,n,i,a)))return $.push(A)})){v=!1;break}}else if(!(k===w||o(k,w,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var dv=CA,SA=On,TA=SA.Uint8Array,fv=TA;function AA(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var IA=AA,M0=ds,B0=fv,RA=Ju,OA=dv,LA=IA,PA=td,MA=1,BA=2,jA="[object Boolean]",UA="[object Date]",NA="[object Error]",DA="[object Map]",zA="[object Number]",HA="[object RegExp]",FA="[object Set]",qA="[object String]",WA="[object Symbol]",ZA="[object ArrayBuffer]",VA="[object DataView]",j0=M0?M0.prototype:void 0,pu=j0?j0.valueOf:void 0;function KA(e,t,n,i,o,a,l){switch(n){case VA:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ZA:return!(e.byteLength!=t.byteLength||!a(new B0(e),new B0(t)));case jA:case UA:case zA:return RA(+e,+t);case NA:return e.name==t.name&&e.message==t.message;case HA:case qA:return e==t+"";case DA:var u=LA;case FA:var d=i&MA;if(u||(u=PA),e.size!=t.size&&!d)return!1;var h=l.get(e);if(h)return h==t;i|=BA,l.set(e,t);var p=OA(u(e),u(t),i,o,a,l);return l.delete(e),p;case WA:if(pu)return pu.call(e)==pu.call(t)}return!1}var GA=KA;function QA(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Od=QA,YA=Array.isArray,Gn=YA,JA=Od,XA=Gn;function eI(e,t,n){var i=t(e);return XA(e)?i:JA(i,n(e))}var hv=eI;function tI(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var nI=tI;function rI(){return[]}var pv=rI,iI=nI,sI=pv,oI=Object.prototype,aI=oI.propertyIsEnumerable,U0=Object.getOwnPropertySymbols,lI=U0?function(e){return e==null?[]:(e=Object(e),iI(U0(e),function(t){return aI.call(e,t)}))}:sI,Ld=lI;function cI(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var uI=cI;function dI(e){return e!=null&&typeof e=="object"}var Jr=dI,fI=fs,hI=Jr,pI="[object Arguments]";function gI(e){return hI(e)&&fI(e)==pI}var mI=gI,N0=mI,vI=Jr,gv=Object.prototype,bI=gv.hasOwnProperty,yI=gv.propertyIsEnumerable,_I=N0(function(){return arguments}())?N0:function(e){return vI(e)&&bI.call(e,"callee")&&!yI.call(e,"callee")},Pd=_I,tl={exports:{}};function wI(){return!1}var xI=wI;tl.exports;(function(e,t){var n=On,i=xI,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,h=d||i;e.exports=h})(tl,tl.exports);var Md=tl.exports,$I=9007199254740991,kI=/^(?:0|[1-9]\d*)$/;function EI(e,t){var n=typeof e;return t=t??$I,!!t&&(n=="number"||n!="symbol"&&kI.test(e))&&e>-1&&e%1==0&&e<t}var Bd=EI,CI=9007199254740991;function SI(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=CI}var jd=SI,TI=fs,AI=jd,II=Jr,RI="[object Arguments]",OI="[object Array]",LI="[object Boolean]",PI="[object Date]",MI="[object Error]",BI="[object Function]",jI="[object Map]",UI="[object Number]",NI="[object Object]",DI="[object RegExp]",zI="[object Set]",HI="[object String]",FI="[object WeakMap]",qI="[object ArrayBuffer]",WI="[object DataView]",ZI="[object Float32Array]",VI="[object Float64Array]",KI="[object Int8Array]",GI="[object Int16Array]",QI="[object Int32Array]",YI="[object Uint8Array]",JI="[object Uint8ClampedArray]",XI="[object Uint16Array]",eR="[object Uint32Array]",nt={};nt[ZI]=nt[VI]=nt[KI]=nt[GI]=nt[QI]=nt[YI]=nt[JI]=nt[XI]=nt[eR]=!0;nt[RI]=nt[OI]=nt[qI]=nt[LI]=nt[WI]=nt[PI]=nt[MI]=nt[BI]=nt[jI]=nt[UI]=nt[NI]=nt[DI]=nt[zI]=nt[HI]=nt[FI]=!1;function tR(e){return II(e)&&AI(e.length)&&!!nt[TI(e)]}var nR=tR;function rR(e){return function(t){return e(t)}}var Ud=rR,nl={exports:{}};nl.exports;(function(e,t){var n=Lg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(nl,nl.exports);var Nd=nl.exports,iR=nR,sR=Ud,D0=Nd,z0=D0&&D0.isTypedArray,oR=z0?sR(z0):iR,mv=oR,aR=uI,lR=Pd,cR=Gn,uR=Md,dR=Bd,fR=mv,hR=Object.prototype,pR=hR.hasOwnProperty;function gR(e,t){var n=cR(e),i=!n&&lR(e),o=!n&&!i&&uR(e),a=!n&&!i&&!o&&fR(e),l=n||i||o||a,u=l?aR(e.length,String):[],d=u.length;for(var h in e)(t||pR.call(e,h))&&!(l&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||dR(h,d)))&&u.push(h);return u}var vv=gR,mR=Object.prototype;function vR(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||mR;return e===n}var Dd=vR;function bR(e,t){return function(n){return e(t(n))}}var bv=bR,yR=bv,_R=yR(Object.keys,Object),wR=_R,xR=Dd,$R=wR,kR=Object.prototype,ER=kR.hasOwnProperty;function CR(e){if(!xR(e))return $R(e);var t=[];for(var n in Object(e))ER.call(e,n)&&n!="constructor"&&t.push(n);return t}var SR=CR,TR=Mg,AR=jd;function IR(e){return e!=null&&AR(e.length)&&!TR(e)}var yv=IR,RR=vv,OR=SR,LR=yv;function PR(e){return LR(e)?RR(e):OR(e)}var Pl=PR,MR=hv,BR=Ld,jR=Pl;function UR(e){return MR(e,jR,BR)}var _v=UR,H0=_v,NR=1,DR=Object.prototype,zR=DR.hasOwnProperty;function HR(e,t,n,i,o,a){var l=n&NR,u=H0(e),d=u.length,h=H0(t),p=h.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:zR.call(t,v)))return!1}var $=a.get(e),k=a.get(t);if($&&k)return $==t&&k==e;var w=!0;a.set(e,t),a.set(t,e);for(var E=l;++g<d;){v=u[g];var x=e[v],A=t[v];if(i)var L=l?i(A,x,v,t,e,a):i(x,A,v,e,t,a);if(!(L===void 0?x===A||o(x,A,n,i,a):L)){w=!1;break}E||(E=v=="constructor")}if(w&&!E){var I=e.constructor,C=t.constructor;I!=C&&"constructor"in e&&"constructor"in t&&!(typeof I=="function"&&I instanceof I&&typeof C=="function"&&C instanceof C)&&(w=!1)}return a.delete(e),a.delete(t),w}var FR=HR,qR=xi,WR=On,ZR=qR(WR,"DataView"),VR=ZR,KR=xi,GR=On,QR=KR(GR,"Promise"),YR=QR,JR=xi,XR=On,eO=JR(XR,"WeakMap"),tO=eO,zu=VR,Hu=Xu,Fu=YR,qu=Ng,Wu=tO,wv=fs,$s=Bg,F0="[object Map]",nO="[object Object]",q0="[object Promise]",W0="[object Set]",Z0="[object WeakMap]",V0="[object DataView]",rO=$s(zu),iO=$s(Hu),sO=$s(Fu),oO=$s(qu),aO=$s(Wu),li=wv;(zu&&li(new zu(new ArrayBuffer(1)))!=V0||Hu&&li(new Hu)!=F0||Fu&&li(Fu.resolve())!=q0||qu&&li(new qu)!=W0||Wu&&li(new Wu)!=Z0)&&(li=function(e){var t=wv(e),n=t==nO?e.constructor:void 0,i=n?$s(n):"";if(i)switch(i){case rO:return V0;case iO:return F0;case sO:return q0;case oO:return W0;case aO:return Z0}return t});var Ml=li,gu=Rd,lO=dv,cO=GA,uO=FR,K0=Ml,G0=Gn,Q0=Md,dO=mv,fO=1,Y0="[object Arguments]",J0="[object Array]",$a="[object Object]",hO=Object.prototype,X0=hO.hasOwnProperty;function pO(e,t,n,i,o,a){var l=G0(e),u=G0(t),d=l?J0:K0(e),h=u?J0:K0(t);d=d==Y0?$a:d,h=h==Y0?$a:h;var p=d==$a,g=h==$a,v=d==h;if(v&&Q0(e)){if(!Q0(t))return!1;l=!0,p=!1}if(v&&!p)return a||(a=new gu),l||dO(e)?lO(e,t,n,i,o,a):cO(e,t,d,n,i,o,a);if(!(n&fO)){var $=p&&X0.call(e,"__wrapped__"),k=g&&X0.call(t,"__wrapped__");if($||k){var w=$?e.value():e,E=k?t.value():t;return a||(a=new gu),o(w,E,n,i,a)}}return v?(a||(a=new gu),uO(e,t,n,i,o,a)):!1}var gO=pO,mO=gO,eg=Jr;function xv(e,t,n,i,o){return e===t?!0:e==null||t==null||!eg(e)&&!eg(t)?e!==e&&t!==t:mO(e,t,n,i,xv,o)}var $v=xv,vO=Rd,bO=$v,yO=1,_O=2;function wO(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],h=e[d],p=u[1];if(l&&u[2]){if(h===void 0&&!(d in e))return!1}else{var g=new vO;if(i)var v=i(h,p,d,e,t,g);if(!(v===void 0?bO(p,h,yO|_O,i,g):v))return!1}}return!0}var xO=wO,$O=Wn;function kO(e){return e===e&&!$O(e)}var kv=kO,EO=kv,CO=Pl;function SO(e){for(var t=CO(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,EO(o)]}return t}var TO=SO;function AO(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var Ev=AO,IO=xO,RO=TO,OO=Ev;function LO(e){var t=RO(e);return t.length==1&&t[0][2]?OO(t[0][0],t[0][1]):function(n){return n===e||IO(n,e,t)}}var PO=LO,MO=fs,BO=Jr,jO="[object Symbol]";function UO(e){return typeof e=="symbol"||BO(e)&&MO(e)==jO}var Bl=UO,NO=Gn,DO=Bl,zO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,HO=/^\w*$/;function FO(e,t){if(NO(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||DO(e)?!0:HO.test(e)||!zO.test(e)||t!=null&&e in Object(t)}var zd=FO,Cv=ed,qO="Expected a function";function Hd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(qO);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Hd.Cache||Cv),n}Hd.Cache=Cv;var WO=Hd,ZO=WO,VO=500;function KO(e){var t=ZO(e,function(i){return n.size===VO&&n.clear(),i}),n=t.cache;return t}var GO=KO,QO=GO,YO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,JO=/\\(\\)?/g,XO=QO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(YO,function(n,i,o,a){t.push(o?a.replace(JO,"$1"):i||n)}),t}),eL=XO;function tL(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Fd=tL,tg=ds,nL=Fd,rL=Gn,iL=Bl,sL=1/0,ng=tg?tg.prototype:void 0,rg=ng?ng.toString:void 0;function Sv(e){if(typeof e=="string")return e;if(rL(e))return nL(e,Sv)+"";if(iL(e))return rg?rg.call(e):"";var t=e+"";return t=="0"&&1/e==-sL?"-0":t}var oL=Sv,aL=oL;function lL(e){return e==null?"":aL(e)}var cL=lL,uL=Gn,dL=zd,fL=eL,hL=cL;function pL(e,t){return uL(e)?e:dL(e,t)?[e]:fL(hL(e))}var ks=pL,gL=Bl,mL=1/0;function vL(e){if(typeof e=="string"||gL(e))return e;var t=e+"";return t=="0"&&1/e==-mL?"-0":t}var Es=vL,bL=ks,yL=Es;function _L(e,t){t=bL(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[yL(t[n++])];return n&&n==i?e:void 0}var jl=_L,wL=jl;function xL(e,t,n){var i=e==null?void 0:wL(e,t);return i===void 0?n:i}var $L=xL;function kL(e,t){return e!=null&&t in Object(e)}var EL=kL,CL=ks,SL=Pd,TL=Gn,AL=Bd,IL=jd,RL=Es;function OL(e,t,n){t=CL(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=RL(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&IL(o)&&AL(l,o)&&(TL(e)||SL(e)))}var LL=OL,PL=EL,ML=LL;function BL(e,t){return e!=null&&ML(e,t,PL)}var jL=BL,UL=$v,NL=$L,DL=jL,zL=zd,HL=kv,FL=Ev,qL=Es,WL=1,ZL=2;function VL(e,t){return zL(e)&&HL(t)?FL(qL(e),t):function(n){var i=NL(n,e);return i===void 0&&i===t?DL(n,e):UL(t,i,WL|ZL)}}var KL=VL;function GL(e){return e}var Tv=GL;function QL(e){return function(t){return t?.[e]}}var YL=QL,JL=jl;function XL(e){return function(t){return JL(t,e)}}var eP=XL,tP=YL,nP=eP,rP=zd,iP=Es;function sP(e){return rP(e)?tP(iP(e)):nP(e)}var oP=sP,aP=PO,lP=KL,cP=Tv,uP=Gn,dP=oP;function fP(e){return typeof e=="function"?e:e==null?cP:typeof e=="object"?uP(e)?lP(e[0],e[1]):aP(e):dP(e)}var qd=fP,hP=qd,pP=Dg;function gP(e,t){return e&&e.length?pP(e,hP(t)):[]}var mP=gP;const Av=po(mP),ig=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ta=0;const{setActiveSubscriptions:vP}=_m();setInterval(()=>{vP(Ta)},1e3);const $r=e=>{const{config:t,shouldMuteEvent:n}=je(),i=Tl(),[o,a]=xe([]);Nn(sl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(h=>!n(h)))},{defer:!0})),ln(()=>{console.debug("subscription mounted",e()?.debugId,e()),vr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const h=e()?.limit??50;a(p=>{const g=F1.insertEventIntoDescendingList(p,d).slice(0,h),v=Av(g,$=>$.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:h,filters:p,options:g,onEvent:v,onEOSE:$,continuous:k=!0}=d,w=i().sub(h,p,g);let E=!0;Ta+=1;let x=!1,A=!1;const L=[];w.on("event",T=>{v?.(T),!(d.clientEventFilter!=null&&!d.clientEventFilter(T))&&(A?l(T):(x=!0,L.push(T)))}),w.on("eose",()=>{$?.(),A=!0,a(ig(L)),k||(w.unsub(),E&&(E=!1,Ta-=1))});let I=!1;const C=setInterval(()=>{if(!I){if(I=!0,A){clearInterval(C),I=!1;return}x&&(x=!1,a(ig(L))),I=!1}},100);vr(()=>{console.debug("startSubscription: end"),w.unsub(),E&&(E=!1,Ta-=1),clearInterval(C)})};return Nn(()=>{u()}),{events:o}},bP=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),pr(t)},yP=e=>{const{config:t}=je(),n=()=>Sl(e.event),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:bP(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return y(ws,{get events(){return[...i()].reverse()}})},_P=e=>y(on,{get children(){return y(ze,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>y(yP,{get event(){return t.event}})})}}),wP=B('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),xP=B('<div class="shrink-0 border-b">'),$P=B('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),kP=B('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth pb-8">'),Ei=e=>{let t;const n=AT(),i=()=>e.width??"medium";return Nu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Nu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),y(sv.Provider,{value:n,get children(){const o=wP(),a=t;return typeof a=="function"?br(a,o):t=o,O(o,y(le,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const l=xP();return O(l,()=>e.header),l})(),(()=>{const l=$P();return O(l,()=>e.children),l})()]},children:l=>(()=>{const u=kP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=d.nextSibling;return h.$$click=()=>n?.clearTimeline(),O(p,y(Yu,{})),O(g,y(_P,{timelineContent:l})),u})()})),Ue(l=>Ws(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},l)),o}})};st(["click"]);const EP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),CP=(e={})=>(()=>{const t=EP();return Ve(t,e,!0,!0),t})(),SP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),TP=(e={})=>(()=>{const t=SP();return Ve(t,e,!0,!0),t})(),AP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),IP=(e={})=>(()=>{const t=AP();return Ve(t,e,!0,!0),t})(),RP=B('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),OP=B('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),LP=B('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),PP=e=>(()=>{const t=RP(),n=t.firstChild,i=n.nextSibling;return O(n,()=>e.title),O(i,()=>e.children),t})(),Ci=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=je(),o=$o(),a=u=>{t({...e.column,width:u})},l=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=LP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=h.nextSibling,v=g.firstChild,$=g.nextSibling,k=$.nextSibling,w=k.firstChild;return O(u,y(PP,{title:"カラム幅",get children(){const E=OP(),x=E.firstChild,A=x.nextSibling,L=A.nextSibling,I=L.nextSibling;return x.$$click=()=>a("widest"),A.$$click=()=>a("wide"),L.$$click=()=>a("medium"),I.$$click=()=>a("narrow"),E}}),d),h.$$click=()=>l(e.columnIndex-1),O(p,y(CP,{})),g.$$click=()=>l(e.columnIndex+1),O(v,y(TP,{})),k.$$click=()=>n(e.column.id),O(w,y(IP,{})),u})()};st(["click"]);const MP=lt.array(lt.array(lt.string()));class BP extends am{constructor(t){super(),this.tags=t}}const jP=e=>{try{const t=MP.parse(JSON.parse(e));return new BP(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[sg,UP]=Ig(()=>xe({})),[NP,DP]=Ig(()=>xe({})),zP=e=>{const t=Kn(),[n,i]=xe(null);return Nn(()=>{const o=e();if(o==null)return;const{encrypted:a}=o;if(a in sg()){i(sg()[a]);return}const l=t();l!=null&&(NP()[a]||(DP(u=>({...u,[a]:!0})),window.nostr?.nip04?.decrypt?.(l,a)?.then(u=>{UP(d=>({...d,[a]:u})),i(u)}).catch(u=>{console.error(`failed to decrypt "${a}"`,u)})))}),n},HP=e=>{const t=qe(()=>hr(e.event)),n=zP(()=>{const{content:a}=t();return a==null||a.length===0?null:{id:t().id,encrypted:a}}),i=()=>{const a=n();if(a==null)return[];console.log(a);try{return jP(a).taggedEventIds()}catch(l){return console.warn(l),[]}},o=()=>t().taggedEventIds();return y(kt,{get each(){return[...o(),...i()]},children:a=>y(Zs,{get children(){return y(os,{eventId:a,get ensureKinds(){return[dt.Text]}})}})})},FP=e=>{const t=_i(),n=qe(e),o=wi(()=>["useFollowings",n()],({queryKey:l,signal:u})=>{console.debug("useFollowings");const[,d]=l;if(d==null)return Promise.resolve(null);const{kind:h,author:p,identifier:g}=d,v=new ys({type:"ParameterizedReplaceableEvent",kind:h,author:p,identifier:g}),$=v.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${p}:${g}`)});return v.onUpdate(k=>{const w=Ed(k);t.setQueryData(l,w)}),_s({task:v,signal:u}),wr(15e3,`useParameterizedReplaceableEvent: ${h}:${p}:${g}`)($)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},qP=e=>{const{removeColumn:t}=je(),{event:n}=FP(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return y(Ei,{get header(){return y(us,{get name(){return e.column.name??"ブックマーク"},get icon(){return y(Kx,{})},settings:()=>y(Ci,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(le,{get when(){return n()},keyed:!0,children:i=>y(HP,{event:i})})}})},WP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),Iv=(e={})=>(()=>{const t=WP();return Ve(t,e,!0,!0),t})();var rl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */rl.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",g=1,v=2,$=4,k=1,w=2,E=1,x=2,A=4,L=8,I=16,C=32,T=64,j=128,N=256,re=512,V=30,Q="...",F=800,Y=16,ie=1,W=2,ee=3,ae=1/0,J=9007199254740991,fe=17976931348623157e292,pe=0/0,$e=4294967295,Ce=$e-1,te=$e>>>1,G=[["ary",j],["bind",E],["bindKey",x],["curry",L],["curryRight",I],["flip",re],["partial",C],["partialRight",T],["rearg",N]],ne="[object Arguments]",me="[object Array]",q="[object AsyncFunction]",de="[object Boolean]",Se="[object Date]",rt="[object DOMException]",Et="[object Error]",Ee="[object Function]",et="[object GeneratorFunction]",Qe="[object Map]",It="[object Number]",cn="[object Null]",_t="[object Object]",kr="[object Promise]",Si="[object Proxy]",Pn="[object RegExp]",mt="[object Set]",_n="[object String]",Mn="[object Symbol]",Ti="[object Undefined]",we="[object WeakMap]",Qn="[object WeakSet]",Gt="[object ArrayBuffer]",Ft="[object DataView]",Er="[object Float32Array]",Yn="[object Float64Array]",Jn="[object Int8Array]",Cr="[object Int16Array]",Ai="[object Int32Array]",Ii="[object Uint8Array]",Ri="[object Uint8ClampedArray]",Ul="[object Uint16Array]",Nl="[object Uint32Array]",Wv=/\b__p \+= '';/g,Zv=/\b(__p \+=) '' \+/g,Vv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Jd=/&(?:amp|lt|gt|quot|#39);/g,Xd=/[&<>"']/g,Kv=RegExp(Jd.source),Gv=RegExp(Xd.source),Qv=/<%-([\s\S]+?)%>/g,Yv=/<%([\s\S]+?)%>/g,ef=/<%=([\s\S]+?)%>/g,Jv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Xv=/^\w*$/,e2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dl=/[\\^$.*+?()[\]{}|]/g,t2=RegExp(Dl.source),zl=/^\s+/,n2=/\s/,r2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,i2=/\{\n\/\* \[wrapped with (.+)\] \*/,s2=/,? & /,o2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a2=/[()=,{}\[\]\/\s]/,l2=/\\(\\)?/g,c2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,tf=/\w*$/,u2=/^[-+]0x[0-9a-f]+$/i,d2=/^0b[01]+$/i,f2=/^\[object .+?Constructor\]$/,h2=/^0o[0-7]+$/i,p2=/^(?:0|[1-9]\d*)$/,g2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Eo=/($^)/,m2=/['\n\r\u2028\u2029\\]/g,Co="\\ud800-\\udfff",v2="\\u0300-\\u036f",b2="\\ufe20-\\ufe2f",y2="\\u20d0-\\u20ff",nf=v2+b2+y2,rf="\\u2700-\\u27bf",sf="a-z\\xdf-\\xf6\\xf8-\\xff",_2="\\xac\\xb1\\xd7\\xf7",w2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",x2="\\u2000-\\u206f",$2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",of="A-Z\\xc0-\\xd6\\xd8-\\xde",af="\\ufe0e\\ufe0f",lf=_2+w2+x2+$2,Hl="['’]",k2="["+Co+"]",cf="["+lf+"]",So="["+nf+"]",uf="\\d+",E2="["+rf+"]",df="["+sf+"]",ff="[^"+Co+lf+uf+rf+sf+of+"]",Fl="\\ud83c[\\udffb-\\udfff]",C2="(?:"+So+"|"+Fl+")",hf="[^"+Co+"]",ql="(?:\\ud83c[\\udde6-\\uddff]){2}",Wl="[\\ud800-\\udbff][\\udc00-\\udfff]",Oi="["+of+"]",pf="\\u200d",gf="(?:"+df+"|"+ff+")",S2="(?:"+Oi+"|"+ff+")",mf="(?:"+Hl+"(?:d|ll|m|re|s|t|ve))?",vf="(?:"+Hl+"(?:D|LL|M|RE|S|T|VE))?",bf=C2+"?",yf="["+af+"]?",T2="(?:"+pf+"(?:"+[hf,ql,Wl].join("|")+")"+yf+bf+")*",A2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",I2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_f=yf+bf+T2,R2="(?:"+[E2,ql,Wl].join("|")+")"+_f,O2="(?:"+[hf+So+"?",So,ql,Wl,k2].join("|")+")",L2=RegExp(Hl,"g"),P2=RegExp(So,"g"),Zl=RegExp(Fl+"(?="+Fl+")|"+O2+_f,"g"),M2=RegExp([Oi+"?"+df+"+"+mf+"(?="+[cf,Oi,"$"].join("|")+")",S2+"+"+vf+"(?="+[cf,Oi+gf,"$"].join("|")+")",Oi+"?"+gf+"+"+mf,Oi+"+"+vf,I2,A2,uf,R2].join("|"),"g"),B2=RegExp("["+pf+Co+nf+af+"]"),j2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,U2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],N2=-1,tt={};tt[Er]=tt[Yn]=tt[Jn]=tt[Cr]=tt[Ai]=tt[Ii]=tt[Ri]=tt[Ul]=tt[Nl]=!0,tt[ne]=tt[me]=tt[Gt]=tt[de]=tt[Ft]=tt[Se]=tt[Et]=tt[Ee]=tt[Qe]=tt[It]=tt[_t]=tt[Pn]=tt[mt]=tt[_n]=tt[we]=!1;var Je={};Je[ne]=Je[me]=Je[Gt]=Je[Ft]=Je[de]=Je[Se]=Je[Er]=Je[Yn]=Je[Jn]=Je[Cr]=Je[Ai]=Je[Qe]=Je[It]=Je[_t]=Je[Pn]=Je[mt]=Je[_n]=Je[Mn]=Je[Ii]=Je[Ri]=Je[Ul]=Je[Nl]=!0,Je[Et]=Je[Ee]=Je[we]=!1;var D2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},z2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},H2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},F2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},q2=parseFloat,W2=parseInt,wf=typeof dr=="object"&&dr&&dr.Object===Object&&dr,Z2=typeof self=="object"&&self&&self.Object===Object&&self,Ct=wf||Z2||Function("return this")(),Vl=t&&!t.nodeType&&t,Xr=Vl&&!0&&e&&!e.nodeType&&e,xf=Xr&&Xr.exports===Vl,Kl=xf&&wf.process,un=function(){try{var P=Xr&&Xr.require&&Xr.require("util").types;return P||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),$f=un&&un.isArrayBuffer,kf=un&&un.isDate,Ef=un&&un.isMap,Cf=un&&un.isRegExp,Sf=un&&un.isSet,Tf=un&&un.isTypedArray;function Qt(P,D,U){switch(U.length){case 0:return P.call(D);case 1:return P.call(D,U[0]);case 2:return P.call(D,U[0],U[1]);case 3:return P.call(D,U[0],U[1],U[2])}return P.apply(D,U)}function V2(P,D,U,ce){for(var Te=-1,Ze=P==null?0:P.length;++Te<Ze;){var vt=P[Te];D(ce,vt,U(vt),P)}return ce}function dn(P,D){for(var U=-1,ce=P==null?0:P.length;++U<ce&&D(P[U],U,P)!==!1;);return P}function K2(P,D){for(var U=P==null?0:P.length;U--&&D(P[U],U,P)!==!1;);return P}function Af(P,D){for(var U=-1,ce=P==null?0:P.length;++U<ce;)if(!D(P[U],U,P))return!1;return!0}function Sr(P,D){for(var U=-1,ce=P==null?0:P.length,Te=0,Ze=[];++U<ce;){var vt=P[U];D(vt,U,P)&&(Ze[Te++]=vt)}return Ze}function To(P,D){var U=P==null?0:P.length;return!!U&&Li(P,D,0)>-1}function Gl(P,D,U){for(var ce=-1,Te=P==null?0:P.length;++ce<Te;)if(U(D,P[ce]))return!0;return!1}function it(P,D){for(var U=-1,ce=P==null?0:P.length,Te=Array(ce);++U<ce;)Te[U]=D(P[U],U,P);return Te}function Tr(P,D){for(var U=-1,ce=D.length,Te=P.length;++U<ce;)P[Te+U]=D[U];return P}function Ql(P,D,U,ce){var Te=-1,Ze=P==null?0:P.length;for(ce&&Ze&&(U=P[++Te]);++Te<Ze;)U=D(U,P[Te],Te,P);return U}function G2(P,D,U,ce){var Te=P==null?0:P.length;for(ce&&Te&&(U=P[--Te]);Te--;)U=D(U,P[Te],Te,P);return U}function Yl(P,D){for(var U=-1,ce=P==null?0:P.length;++U<ce;)if(D(P[U],U,P))return!0;return!1}var Q2=Jl("length");function Y2(P){return P.split("")}function J2(P){return P.match(o2)||[]}function If(P,D,U){var ce;return U(P,function(Te,Ze,vt){if(D(Te,Ze,vt))return ce=Ze,!1}),ce}function Ao(P,D,U,ce){for(var Te=P.length,Ze=U+(ce?1:-1);ce?Ze--:++Ze<Te;)if(D(P[Ze],Ze,P))return Ze;return-1}function Li(P,D,U){return D===D?ub(P,D,U):Ao(P,Rf,U)}function X2(P,D,U,ce){for(var Te=U-1,Ze=P.length;++Te<Ze;)if(ce(P[Te],D))return Te;return-1}function Rf(P){return P!==P}function Of(P,D){var U=P==null?0:P.length;return U?ec(P,D)/U:pe}function Jl(P){return function(D){return D==null?n:D[P]}}function Xl(P){return function(D){return P==null?n:P[D]}}function Lf(P,D,U,ce,Te){return Te(P,function(Ze,vt,Ye){U=ce?(ce=!1,Ze):D(U,Ze,vt,Ye)}),U}function eb(P,D){var U=P.length;for(P.sort(D);U--;)P[U]=P[U].value;return P}function ec(P,D){for(var U,ce=-1,Te=P.length;++ce<Te;){var Ze=D(P[ce]);Ze!==n&&(U=U===n?Ze:U+Ze)}return U}function tc(P,D){for(var U=-1,ce=Array(P);++U<P;)ce[U]=D(U);return ce}function tb(P,D){return it(D,function(U){return[U,P[U]]})}function Pf(P){return P&&P.slice(0,Uf(P)+1).replace(zl,"")}function Yt(P){return function(D){return P(D)}}function nc(P,D){return it(D,function(U){return P[U]})}function Cs(P,D){return P.has(D)}function Mf(P,D){for(var U=-1,ce=P.length;++U<ce&&Li(D,P[U],0)>-1;);return U}function Bf(P,D){for(var U=P.length;U--&&Li(D,P[U],0)>-1;);return U}function nb(P,D){for(var U=P.length,ce=0;U--;)P[U]===D&&++ce;return ce}var rb=Xl(D2),ib=Xl(z2);function sb(P){return"\\"+F2[P]}function ob(P,D){return P==null?n:P[D]}function Pi(P){return B2.test(P)}function ab(P){return j2.test(P)}function lb(P){for(var D,U=[];!(D=P.next()).done;)U.push(D.value);return U}function rc(P){var D=-1,U=Array(P.size);return P.forEach(function(ce,Te){U[++D]=[Te,ce]}),U}function jf(P,D){return function(U){return P(D(U))}}function Ar(P,D){for(var U=-1,ce=P.length,Te=0,Ze=[];++U<ce;){var vt=P[U];(vt===D||vt===p)&&(P[U]=p,Ze[Te++]=U)}return Ze}function Io(P){var D=-1,U=Array(P.size);return P.forEach(function(ce){U[++D]=ce}),U}function cb(P){var D=-1,U=Array(P.size);return P.forEach(function(ce){U[++D]=[ce,ce]}),U}function ub(P,D,U){for(var ce=U-1,Te=P.length;++ce<Te;)if(P[ce]===D)return ce;return-1}function db(P,D,U){for(var ce=U+1;ce--;)if(P[ce]===D)return ce;return ce}function Mi(P){return Pi(P)?hb(P):Q2(P)}function wn(P){return Pi(P)?pb(P):Y2(P)}function Uf(P){for(var D=P.length;D--&&n2.test(P.charAt(D)););return D}var fb=Xl(H2);function hb(P){for(var D=Zl.lastIndex=0;Zl.test(P);)++D;return D}function pb(P){return P.match(Zl)||[]}function gb(P){return P.match(M2)||[]}var mb=function P(D){D=D==null?Ct:Bi.defaults(Ct.Object(),D,Bi.pick(Ct,U2));var U=D.Array,ce=D.Date,Te=D.Error,Ze=D.Function,vt=D.Math,Ye=D.Object,ic=D.RegExp,vb=D.String,fn=D.TypeError,Ro=U.prototype,bb=Ze.prototype,ji=Ye.prototype,Oo=D["__core-js_shared__"],Lo=bb.toString,Ge=ji.hasOwnProperty,yb=0,Nf=function(){var r=/[^.]+$/.exec(Oo&&Oo.keys&&Oo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Po=ji.toString,_b=Lo.call(Ye),wb=Ct._,xb=ic("^"+Lo.call(Ge).replace(Dl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mo=xf?D.Buffer:n,Ir=D.Symbol,Bo=D.Uint8Array,Df=Mo?Mo.allocUnsafe:n,jo=jf(Ye.getPrototypeOf,Ye),zf=Ye.create,Hf=ji.propertyIsEnumerable,Uo=Ro.splice,Ff=Ir?Ir.isConcatSpreadable:n,Ss=Ir?Ir.iterator:n,ei=Ir?Ir.toStringTag:n,No=function(){try{var r=si(Ye,"defineProperty");return r({},"",{}),r}catch{}}(),$b=D.clearTimeout!==Ct.clearTimeout&&D.clearTimeout,kb=ce&&ce.now!==Ct.Date.now&&ce.now,Eb=D.setTimeout!==Ct.setTimeout&&D.setTimeout,Do=vt.ceil,zo=vt.floor,sc=Ye.getOwnPropertySymbols,Cb=Mo?Mo.isBuffer:n,qf=D.isFinite,Sb=Ro.join,Tb=jf(Ye.keys,Ye),bt=vt.max,Rt=vt.min,Ab=ce.now,Ib=D.parseInt,Wf=vt.random,Rb=Ro.reverse,oc=si(D,"DataView"),Ts=si(D,"Map"),ac=si(D,"Promise"),Ui=si(D,"Set"),As=si(D,"WeakMap"),Is=si(Ye,"create"),Ho=As&&new As,Ni={},Ob=oi(oc),Lb=oi(Ts),Pb=oi(ac),Mb=oi(Ui),Bb=oi(As),Fo=Ir?Ir.prototype:n,Rs=Fo?Fo.valueOf:n,Zf=Fo?Fo.toString:n;function b(r){if(ut(r)&&!Ie(r)&&!(r instanceof He)){if(r instanceof hn)return r;if(Ge.call(r,"__wrapped__"))return Vh(r)}return new hn(r)}var Di=function(){function r(){}return function(s){if(!ot(s))return{};if(zf)return zf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function qo(){}function hn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:Qv,evaluate:Yv,interpolate:ef,variable:"",imports:{_:b}},b.prototype=qo.prototype,b.prototype.constructor=b,hn.prototype=Di(qo.prototype),hn.prototype.constructor=hn;function He(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function jb(){var r=new He(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function Ub(){if(this.__filtered__){var r=new He(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Nb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Ie(r),f=s<0,m=c?r.length:0,_=Yy(0,m,this.__views__),S=_.start,R=_.end,M=R-S,z=f?R:S-1,H=this.__iteratees__,K=H.length,se=0,he=Rt(M,this.__takeCount__);if(!c||!f&&m==M&&he==M)return mh(r,this.__actions__);var ye=[];e:for(;M--&&se<he;){z+=s;for(var Le=-1,_e=r[z];++Le<K;){var Ne=H[Le],Fe=Ne.iteratee,en=Ne.type,Ut=Fe(_e);if(en==W)_e=Ut;else if(!Ut){if(en==ie)continue e;break e}}ye[se++]=_e}return ye}He.prototype=Di(qo.prototype),He.prototype.constructor=He;function ti(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Db(){this.__data__=Is?Is(null):{},this.size=0}function zb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Hb(r){var s=this.__data__;if(Is){var c=s[r];return c===d?n:c}return Ge.call(s,r)?s[r]:n}function Fb(r){var s=this.__data__;return Is?s[r]!==n:Ge.call(s,r)}function qb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Is&&s===n?d:s,this}ti.prototype.clear=Db,ti.prototype.delete=zb,ti.prototype.get=Hb,ti.prototype.has=Fb,ti.prototype.set=qb;function Xn(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Wb(){this.__data__=[],this.size=0}function Zb(r){var s=this.__data__,c=Wo(s,r);if(c<0)return!1;var f=s.length-1;return c==f?s.pop():Uo.call(s,c,1),--this.size,!0}function Vb(r){var s=this.__data__,c=Wo(s,r);return c<0?n:s[c][1]}function Kb(r){return Wo(this.__data__,r)>-1}function Gb(r,s){var c=this.__data__,f=Wo(c,r);return f<0?(++this.size,c.push([r,s])):c[f][1]=s,this}Xn.prototype.clear=Wb,Xn.prototype.delete=Zb,Xn.prototype.get=Vb,Xn.prototype.has=Kb,Xn.prototype.set=Gb;function er(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Qb(){this.size=0,this.__data__={hash:new ti,map:new(Ts||Xn),string:new ti}}function Yb(r){var s=ra(this,r).delete(r);return this.size-=s?1:0,s}function Jb(r){return ra(this,r).get(r)}function Xb(r){return ra(this,r).has(r)}function ey(r,s){var c=ra(this,r),f=c.size;return c.set(r,s),this.size+=c.size==f?0:1,this}er.prototype.clear=Qb,er.prototype.delete=Yb,er.prototype.get=Jb,er.prototype.has=Xb,er.prototype.set=ey;function ni(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new er;++s<c;)this.add(r[s])}function ty(r){return this.__data__.set(r,d),this}function ny(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=ty,ni.prototype.has=ny;function xn(r){var s=this.__data__=new Xn(r);this.size=s.size}function ry(){this.__data__=new Xn,this.size=0}function iy(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function sy(r){return this.__data__.get(r)}function oy(r){return this.__data__.has(r)}function ay(r,s){var c=this.__data__;if(c instanceof Xn){var f=c.__data__;if(!Ts||f.length<o-1)return f.push([r,s]),this.size=++c.size,this;c=this.__data__=new er(f)}return c.set(r,s),this.size=c.size,this}xn.prototype.clear=ry,xn.prototype.delete=iy,xn.prototype.get=sy,xn.prototype.has=oy,xn.prototype.set=ay;function Vf(r,s){var c=Ie(r),f=!c&&ai(r),m=!c&&!f&&Mr(r),_=!c&&!f&&!m&&qi(r),S=c||f||m||_,R=S?tc(r.length,vb):[],M=R.length;for(var z in r)(s||Ge.call(r,z))&&!(S&&(z=="length"||m&&(z=="offset"||z=="parent")||_&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||ir(z,M)))&&R.push(z);return R}function Kf(r){var s=r.length;return s?r[bc(0,s-1)]:n}function ly(r,s){return ia(qt(r),ri(s,0,r.length))}function cy(r){return ia(qt(r))}function lc(r,s,c){(c!==n&&!$n(r[s],c)||c===n&&!(s in r))&&tr(r,s,c)}function Os(r,s,c){var f=r[s];(!(Ge.call(r,s)&&$n(f,c))||c===n&&!(s in r))&&tr(r,s,c)}function Wo(r,s){for(var c=r.length;c--;)if($n(r[c][0],s))return c;return-1}function uy(r,s,c,f){return Rr(r,function(m,_,S){s(f,m,c(m),S)}),f}function Gf(r,s){return r&&jn(s,wt(s),r)}function dy(r,s){return r&&jn(s,Zt(s),r)}function tr(r,s,c){s=="__proto__"&&No?No(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function cc(r,s){for(var c=-1,f=s.length,m=U(f),_=r==null;++c<f;)m[c]=_?n:Fc(r,s[c]);return m}function ri(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function pn(r,s,c,f,m,_){var S,R=s&g,M=s&v,z=s&$;if(c&&(S=m?c(r,f,m,_):c(r)),S!==n)return S;if(!ot(r))return r;var H=Ie(r);if(H){if(S=Xy(r),!R)return qt(r,S)}else{var K=Ot(r),se=K==Ee||K==et;if(Mr(r))return yh(r,R);if(K==_t||K==ne||se&&!m){if(S=M||se?{}:Uh(r),!R)return M?Hy(r,dy(S,r)):zy(r,Gf(S,r))}else{if(!Je[K])return m?r:{};S=e_(r,K,R)}}_||(_=new xn);var he=_.get(r);if(he)return he;_.set(r,S),hp(r)?r.forEach(function(_e){S.add(pn(_e,s,c,_e,r,_))}):dp(r)&&r.forEach(function(_e,Ne){S.set(Ne,pn(_e,s,c,Ne,r,_))});var ye=z?M?Ac:Tc:M?Zt:wt,Le=H?n:ye(r);return dn(Le||r,function(_e,Ne){Le&&(Ne=_e,_e=r[Ne]),Os(S,Ne,pn(_e,s,c,Ne,r,_))}),S}function fy(r){var s=wt(r);return function(c){return Qf(c,r,s)}}function Qf(r,s,c){var f=c.length;if(r==null)return!f;for(r=Ye(r);f--;){var m=c[f],_=s[m],S=r[m];if(S===n&&!(m in r)||!_(S))return!1}return!0}function Yf(r,s,c){if(typeof r!="function")throw new fn(l);return Ns(function(){r.apply(n,c)},s)}function Ls(r,s,c,f){var m=-1,_=To,S=!0,R=r.length,M=[],z=s.length;if(!R)return M;c&&(s=it(s,Yt(c))),f?(_=Gl,S=!1):s.length>=o&&(_=Cs,S=!1,s=new ni(s));e:for(;++m<R;){var H=r[m],K=c==null?H:c(H);if(H=f||H!==0?H:0,S&&K===K){for(var se=z;se--;)if(s[se]===K)continue e;M.push(H)}else _(s,K,f)||M.push(H)}return M}var Rr=kh(Bn),Jf=kh(dc,!0);function hy(r,s){var c=!0;return Rr(r,function(f,m,_){return c=!!s(f,m,_),c}),c}function Zo(r,s,c){for(var f=-1,m=r.length;++f<m;){var _=r[f],S=s(_);if(S!=null&&(R===n?S===S&&!Xt(S):c(S,R)))var R=S,M=_}return M}function py(r,s,c,f){var m=r.length;for(c=Re(c),c<0&&(c=-c>m?0:m+c),f=f===n||f>m?m:Re(f),f<0&&(f+=m),f=c>f?0:gp(f);c<f;)r[c++]=s;return r}function Xf(r,s){var c=[];return Rr(r,function(f,m,_){s(f,m,_)&&c.push(f)}),c}function St(r,s,c,f,m){var _=-1,S=r.length;for(c||(c=n_),m||(m=[]);++_<S;){var R=r[_];s>0&&c(R)?s>1?St(R,s-1,c,f,m):Tr(m,R):f||(m[m.length]=R)}return m}var uc=Eh(),eh=Eh(!0);function Bn(r,s){return r&&uc(r,s,wt)}function dc(r,s){return r&&eh(r,s,wt)}function Vo(r,s){return Sr(s,function(c){return sr(r[c])})}function ii(r,s){s=Lr(s,r);for(var c=0,f=s.length;r!=null&&c<f;)r=r[Un(s[c++])];return c&&c==f?r:n}function th(r,s,c){var f=s(r);return Ie(r)?f:Tr(f,c(r))}function Bt(r){return r==null?r===n?Ti:cn:ei&&ei in Ye(r)?Qy(r):c_(r)}function fc(r,s){return r>s}function gy(r,s){return r!=null&&Ge.call(r,s)}function my(r,s){return r!=null&&s in Ye(r)}function vy(r,s,c){return r>=Rt(s,c)&&r<bt(s,c)}function hc(r,s,c){for(var f=c?Gl:To,m=r[0].length,_=r.length,S=_,R=U(_),M=1/0,z=[];S--;){var H=r[S];S&&s&&(H=it(H,Yt(s))),M=Rt(H.length,M),R[S]=!c&&(s||m>=120&&H.length>=120)?new ni(S&&H):n}H=r[0];var K=-1,se=R[0];e:for(;++K<m&&z.length<M;){var he=H[K],ye=s?s(he):he;if(he=c||he!==0?he:0,!(se?Cs(se,ye):f(z,ye,c))){for(S=_;--S;){var Le=R[S];if(!(Le?Cs(Le,ye):f(r[S],ye,c)))continue e}se&&se.push(ye),z.push(he)}}return z}function by(r,s,c,f){return Bn(r,function(m,_,S){s(f,c(m),_,S)}),f}function Ps(r,s,c){s=Lr(s,r),r=Hh(r,s);var f=r==null?r:r[Un(mn(s))];return f==null?n:Qt(f,r,c)}function nh(r){return ut(r)&&Bt(r)==ne}function yy(r){return ut(r)&&Bt(r)==Gt}function _y(r){return ut(r)&&Bt(r)==Se}function Ms(r,s,c,f,m){return r===s?!0:r==null||s==null||!ut(r)&&!ut(s)?r!==r&&s!==s:wy(r,s,c,f,Ms,m)}function wy(r,s,c,f,m,_){var S=Ie(r),R=Ie(s),M=S?me:Ot(r),z=R?me:Ot(s);M=M==ne?_t:M,z=z==ne?_t:z;var H=M==_t,K=z==_t,se=M==z;if(se&&Mr(r)){if(!Mr(s))return!1;S=!0,H=!1}if(se&&!H)return _||(_=new xn),S||qi(r)?Mh(r,s,c,f,m,_):Ky(r,s,M,c,f,m,_);if(!(c&k)){var he=H&&Ge.call(r,"__wrapped__"),ye=K&&Ge.call(s,"__wrapped__");if(he||ye){var Le=he?r.value():r,_e=ye?s.value():s;return _||(_=new xn),m(Le,_e,c,f,_)}}return se?(_||(_=new xn),Gy(r,s,c,f,m,_)):!1}function xy(r){return ut(r)&&Ot(r)==Qe}function pc(r,s,c,f){var m=c.length,_=m,S=!f;if(r==null)return!_;for(r=Ye(r);m--;){var R=c[m];if(S&&R[2]?R[1]!==r[R[0]]:!(R[0]in r))return!1}for(;++m<_;){R=c[m];var M=R[0],z=r[M],H=R[1];if(S&&R[2]){if(z===n&&!(M in r))return!1}else{var K=new xn;if(f)var se=f(z,H,M,r,s,K);if(!(se===n?Ms(H,z,k|w,f,K):se))return!1}}return!0}function rh(r){if(!ot(r)||i_(r))return!1;var s=sr(r)?xb:f2;return s.test(oi(r))}function $y(r){return ut(r)&&Bt(r)==Pn}function ky(r){return ut(r)&&Ot(r)==mt}function Ey(r){return ut(r)&&ua(r.length)&&!!tt[Bt(r)]}function ih(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?Ie(r)?ah(r[0],r[1]):oh(r):Cp(r)}function gc(r){if(!Us(r))return Tb(r);var s=[];for(var c in Ye(r))Ge.call(r,c)&&c!="constructor"&&s.push(c);return s}function Cy(r){if(!ot(r))return l_(r);var s=Us(r),c=[];for(var f in r)f=="constructor"&&(s||!Ge.call(r,f))||c.push(f);return c}function mc(r,s){return r<s}function sh(r,s){var c=-1,f=Wt(r)?U(r.length):[];return Rr(r,function(m,_,S){f[++c]=s(m,_,S)}),f}function oh(r){var s=Rc(r);return s.length==1&&s[0][2]?Dh(s[0][0],s[0][1]):function(c){return c===r||pc(c,r,s)}}function ah(r,s){return Lc(r)&&Nh(s)?Dh(Un(r),s):function(c){var f=Fc(c,r);return f===n&&f===s?qc(c,r):Ms(s,f,k|w)}}function Ko(r,s,c,f,m){r!==s&&uc(s,function(_,S){if(m||(m=new xn),ot(_))Sy(r,s,S,c,Ko,f,m);else{var R=f?f(Mc(r,S),_,S+"",r,s,m):n;R===n&&(R=_),lc(r,S,R)}},Zt)}function Sy(r,s,c,f,m,_,S){var R=Mc(r,c),M=Mc(s,c),z=S.get(M);if(z){lc(r,c,z);return}var H=_?_(R,M,c+"",r,s,S):n,K=H===n;if(K){var se=Ie(M),he=!se&&Mr(M),ye=!se&&!he&&qi(M);H=M,se||he||ye?Ie(R)?H=R:ft(R)?H=qt(R):he?(K=!1,H=yh(M,!0)):ye?(K=!1,H=_h(M,!0)):H=[]:Ds(M)||ai(M)?(H=R,ai(R)?H=mp(R):(!ot(R)||sr(R))&&(H=Uh(M))):K=!1}K&&(S.set(M,H),m(H,M,f,_,S),S.delete(M)),lc(r,c,H)}function lh(r,s){var c=r.length;if(c)return s+=s<0?c:0,ir(s,c)?r[s]:n}function ch(r,s,c){s.length?s=it(s,function(_){return Ie(_)?function(S){return ii(S,_.length===1?_[0]:_)}:_}):s=[Vt];var f=-1;s=it(s,Yt(ve()));var m=sh(r,function(_,S,R){var M=it(s,function(z){return z(_)});return{criteria:M,index:++f,value:_}});return eb(m,function(_,S){return Dy(_,S,c)})}function Ty(r,s){return uh(r,s,function(c,f){return qc(r,f)})}function uh(r,s,c){for(var f=-1,m=s.length,_={};++f<m;){var S=s[f],R=ii(r,S);c(R,S)&&Bs(_,Lr(S,r),R)}return _}function Ay(r){return function(s){return ii(s,r)}}function vc(r,s,c,f){var m=f?X2:Li,_=-1,S=s.length,R=r;for(r===s&&(s=qt(s)),c&&(R=it(r,Yt(c)));++_<S;)for(var M=0,z=s[_],H=c?c(z):z;(M=m(R,H,M,f))>-1;)R!==r&&Uo.call(R,M,1),Uo.call(r,M,1);return r}function dh(r,s){for(var c=r?s.length:0,f=c-1;c--;){var m=s[c];if(c==f||m!==_){var _=m;ir(m)?Uo.call(r,m,1):wc(r,m)}}return r}function bc(r,s){return r+zo(Wf()*(s-r+1))}function Iy(r,s,c,f){for(var m=-1,_=bt(Do((s-r)/(c||1)),0),S=U(_);_--;)S[f?_:++m]=r,r+=c;return S}function yc(r,s){var c="";if(!r||s<1||s>J)return c;do s%2&&(c+=r),s=zo(s/2),s&&(r+=r);while(s);return c}function Me(r,s){return Bc(zh(r,s,Vt),r+"")}function Ry(r){return Kf(Wi(r))}function Oy(r,s){var c=Wi(r);return ia(c,ri(s,0,c.length))}function Bs(r,s,c,f){if(!ot(r))return r;s=Lr(s,r);for(var m=-1,_=s.length,S=_-1,R=r;R!=null&&++m<_;){var M=Un(s[m]),z=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=S){var H=R[M];z=f?f(H,M,R):n,z===n&&(z=ot(H)?H:ir(s[m+1])?[]:{})}Os(R,M,z),R=R[M]}return r}var fh=Ho?function(r,s){return Ho.set(r,s),r}:Vt,Ly=No?function(r,s){return No(r,"toString",{configurable:!0,enumerable:!1,value:Zc(s),writable:!0})}:Vt;function Py(r){return ia(Wi(r))}function gn(r,s,c){var f=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var _=U(m);++f<m;)_[f]=r[f+s];return _}function My(r,s){var c;return Rr(r,function(f,m,_){return c=s(f,m,_),!c}),!!c}function Go(r,s,c){var f=0,m=r==null?f:r.length;if(typeof s=="number"&&s===s&&m<=te){for(;f<m;){var _=f+m>>>1,S=r[_];S!==null&&!Xt(S)&&(c?S<=s:S<s)?f=_+1:m=_}return m}return _c(r,s,Vt,c)}function _c(r,s,c,f){var m=0,_=r==null?0:r.length;if(_===0)return 0;s=c(s);for(var S=s!==s,R=s===null,M=Xt(s),z=s===n;m<_;){var H=zo((m+_)/2),K=c(r[H]),se=K!==n,he=K===null,ye=K===K,Le=Xt(K);if(S)var _e=f||ye;else z?_e=ye&&(f||se):R?_e=ye&&se&&(f||!he):M?_e=ye&&se&&!he&&(f||!Le):he||Le?_e=!1:_e=f?K<=s:K<s;_e?m=H+1:_=H}return Rt(_,Ce)}function hh(r,s){for(var c=-1,f=r.length,m=0,_=[];++c<f;){var S=r[c],R=s?s(S):S;if(!c||!$n(R,M)){var M=R;_[m++]=S===0?0:S}}return _}function ph(r){return typeof r=="number"?r:Xt(r)?pe:+r}function Jt(r){if(typeof r=="string")return r;if(Ie(r))return it(r,Jt)+"";if(Xt(r))return Zf?Zf.call(r):"";var s=r+"";return s=="0"&&1/r==-ae?"-0":s}function Or(r,s,c){var f=-1,m=To,_=r.length,S=!0,R=[],M=R;if(c)S=!1,m=Gl;else if(_>=o){var z=s?null:Zy(r);if(z)return Io(z);S=!1,m=Cs,M=new ni}else M=s?[]:R;e:for(;++f<_;){var H=r[f],K=s?s(H):H;if(H=c||H!==0?H:0,S&&K===K){for(var se=M.length;se--;)if(M[se]===K)continue e;s&&M.push(K),R.push(H)}else m(M,K,c)||(M!==R&&M.push(K),R.push(H))}return R}function wc(r,s){return s=Lr(s,r),r=Hh(r,s),r==null||delete r[Un(mn(s))]}function gh(r,s,c,f){return Bs(r,s,c(ii(r,s)),f)}function Qo(r,s,c,f){for(var m=r.length,_=f?m:-1;(f?_--:++_<m)&&s(r[_],_,r););return c?gn(r,f?0:_,f?_+1:m):gn(r,f?_+1:0,f?m:_)}function mh(r,s){var c=r;return c instanceof He&&(c=c.value()),Ql(s,function(f,m){return m.func.apply(m.thisArg,Tr([f],m.args))},c)}function xc(r,s,c){var f=r.length;if(f<2)return f?Or(r[0]):[];for(var m=-1,_=U(f);++m<f;)for(var S=r[m],R=-1;++R<f;)R!=m&&(_[m]=Ls(_[m]||S,r[R],s,c));return Or(St(_,1),s,c)}function vh(r,s,c){for(var f=-1,m=r.length,_=s.length,S={};++f<m;){var R=f<_?s[f]:n;c(S,r[f],R)}return S}function $c(r){return ft(r)?r:[]}function kc(r){return typeof r=="function"?r:Vt}function Lr(r,s){return Ie(r)?r:Lc(r,s)?[r]:Zh(Ke(r))}var By=Me;function Pr(r,s,c){var f=r.length;return c=c===n?f:c,!s&&c>=f?r:gn(r,s,c)}var bh=$b||function(r){return Ct.clearTimeout(r)};function yh(r,s){if(s)return r.slice();var c=r.length,f=Df?Df(c):new r.constructor(c);return r.copy(f),f}function Ec(r){var s=new r.constructor(r.byteLength);return new Bo(s).set(new Bo(r)),s}function jy(r,s){var c=s?Ec(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function Uy(r){var s=new r.constructor(r.source,tf.exec(r));return s.lastIndex=r.lastIndex,s}function Ny(r){return Rs?Ye(Rs.call(r)):{}}function _h(r,s){var c=s?Ec(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function wh(r,s){if(r!==s){var c=r!==n,f=r===null,m=r===r,_=Xt(r),S=s!==n,R=s===null,M=s===s,z=Xt(s);if(!R&&!z&&!_&&r>s||_&&S&&M&&!R&&!z||f&&S&&M||!c&&M||!m)return 1;if(!f&&!_&&!z&&r<s||z&&c&&m&&!f&&!_||R&&c&&m||!S&&m||!M)return-1}return 0}function Dy(r,s,c){for(var f=-1,m=r.criteria,_=s.criteria,S=m.length,R=c.length;++f<S;){var M=wh(m[f],_[f]);if(M){if(f>=R)return M;var z=c[f];return M*(z=="desc"?-1:1)}}return r.index-s.index}function xh(r,s,c,f){for(var m=-1,_=r.length,S=c.length,R=-1,M=s.length,z=bt(_-S,0),H=U(M+z),K=!f;++R<M;)H[R]=s[R];for(;++m<S;)(K||m<_)&&(H[c[m]]=r[m]);for(;z--;)H[R++]=r[m++];return H}function $h(r,s,c,f){for(var m=-1,_=r.length,S=-1,R=c.length,M=-1,z=s.length,H=bt(_-R,0),K=U(H+z),se=!f;++m<H;)K[m]=r[m];for(var he=m;++M<z;)K[he+M]=s[M];for(;++S<R;)(se||m<_)&&(K[he+c[S]]=r[m++]);return K}function qt(r,s){var c=-1,f=r.length;for(s||(s=U(f));++c<f;)s[c]=r[c];return s}function jn(r,s,c,f){var m=!c;c||(c={});for(var _=-1,S=s.length;++_<S;){var R=s[_],M=f?f(c[R],r[R],R,c,r):n;M===n&&(M=r[R]),m?tr(c,R,M):Os(c,R,M)}return c}function zy(r,s){return jn(r,Oc(r),s)}function Hy(r,s){return jn(r,Bh(r),s)}function Yo(r,s){return function(c,f){var m=Ie(c)?V2:uy,_=s?s():{};return m(c,r,ve(f,2),_)}}function zi(r){return Me(function(s,c){var f=-1,m=c.length,_=m>1?c[m-1]:n,S=m>2?c[2]:n;for(_=r.length>3&&typeof _=="function"?(m--,_):n,S&&jt(c[0],c[1],S)&&(_=m<3?n:_,m=1),s=Ye(s);++f<m;){var R=c[f];R&&r(s,R,f,_)}return s})}function kh(r,s){return function(c,f){if(c==null)return c;if(!Wt(c))return r(c,f);for(var m=c.length,_=s?m:-1,S=Ye(c);(s?_--:++_<m)&&f(S[_],_,S)!==!1;);return c}}function Eh(r){return function(s,c,f){for(var m=-1,_=Ye(s),S=f(s),R=S.length;R--;){var M=S[r?R:++m];if(c(_[M],M,_)===!1)break}return s}}function Fy(r,s,c){var f=s&E,m=js(r);function _(){var S=this&&this!==Ct&&this instanceof _?m:r;return S.apply(f?c:this,arguments)}return _}function Ch(r){return function(s){s=Ke(s);var c=Pi(s)?wn(s):n,f=c?c[0]:s.charAt(0),m=c?Pr(c,1).join(""):s.slice(1);return f[r]()+m}}function Hi(r){return function(s){return Ql(kp($p(s).replace(L2,"")),r,"")}}function js(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Di(r.prototype),f=r.apply(c,s);return ot(f)?f:c}}function qy(r,s,c){var f=js(r);function m(){for(var _=arguments.length,S=U(_),R=_,M=Fi(m);R--;)S[R]=arguments[R];var z=_<3&&S[0]!==M&&S[_-1]!==M?[]:Ar(S,M);if(_-=z.length,_<c)return Rh(r,s,Jo,m.placeholder,n,S,z,n,n,c-_);var H=this&&this!==Ct&&this instanceof m?f:r;return Qt(H,this,S)}return m}function Sh(r){return function(s,c,f){var m=Ye(s);if(!Wt(s)){var _=ve(c,3);s=wt(s),c=function(R){return _(m[R],R,m)}}var S=r(s,c,f);return S>-1?m[_?s[S]:S]:n}}function Th(r){return rr(function(s){var c=s.length,f=c,m=hn.prototype.thru;for(r&&s.reverse();f--;){var _=s[f];if(typeof _!="function")throw new fn(l);if(m&&!S&&na(_)=="wrapper")var S=new hn([],!0)}for(f=S?f:c;++f<c;){_=s[f];var R=na(_),M=R=="wrapper"?Ic(_):n;M&&Pc(M[0])&&M[1]==(j|L|C|N)&&!M[4].length&&M[9]==1?S=S[na(M[0])].apply(S,M[3]):S=_.length==1&&Pc(_)?S[R]():S.thru(_)}return function(){var z=arguments,H=z[0];if(S&&z.length==1&&Ie(H))return S.plant(H).value();for(var K=0,se=c?s[K].apply(this,z):H;++K<c;)se=s[K].call(this,se);return se}})}function Jo(r,s,c,f,m,_,S,R,M,z){var H=s&j,K=s&E,se=s&x,he=s&(L|I),ye=s&re,Le=se?n:js(r);function _e(){for(var Ne=arguments.length,Fe=U(Ne),en=Ne;en--;)Fe[en]=arguments[en];if(he)var Ut=Fi(_e),tn=nb(Fe,Ut);if(f&&(Fe=xh(Fe,f,m,he)),_&&(Fe=$h(Fe,_,S,he)),Ne-=tn,he&&Ne<z){var ht=Ar(Fe,Ut);return Rh(r,s,Jo,_e.placeholder,c,Fe,ht,R,M,z-Ne)}var kn=K?c:this,ar=se?kn[r]:r;return Ne=Fe.length,R?Fe=u_(Fe,R):ye&&Ne>1&&Fe.reverse(),H&&M<Ne&&(Fe.length=M),this&&this!==Ct&&this instanceof _e&&(ar=Le||js(ar)),ar.apply(kn,Fe)}return _e}function Ah(r,s){return function(c,f){return by(c,r,s(f),{})}}function Xo(r,s){return function(c,f){var m;if(c===n&&f===n)return s;if(c!==n&&(m=c),f!==n){if(m===n)return f;typeof c=="string"||typeof f=="string"?(c=Jt(c),f=Jt(f)):(c=ph(c),f=ph(f)),m=r(c,f)}return m}}function Cc(r){return rr(function(s){return s=it(s,Yt(ve())),Me(function(c){var f=this;return r(s,function(m){return Qt(m,f,c)})})})}function ea(r,s){s=s===n?" ":Jt(s);var c=s.length;if(c<2)return c?yc(s,r):s;var f=yc(s,Do(r/Mi(s)));return Pi(s)?Pr(wn(f),0,r).join(""):f.slice(0,r)}function Wy(r,s,c,f){var m=s&E,_=js(r);function S(){for(var R=-1,M=arguments.length,z=-1,H=f.length,K=U(H+M),se=this&&this!==Ct&&this instanceof S?_:r;++z<H;)K[z]=f[z];for(;M--;)K[z++]=arguments[++R];return Qt(se,m?c:this,K)}return S}function Ih(r){return function(s,c,f){return f&&typeof f!="number"&&jt(s,c,f)&&(c=f=n),s=or(s),c===n?(c=s,s=0):c=or(c),f=f===n?s<c?1:-1:or(f),Iy(s,c,f,r)}}function ta(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=vn(s),c=vn(c)),r(s,c)}}function Rh(r,s,c,f,m,_,S,R,M,z){var H=s&L,K=H?S:n,se=H?n:S,he=H?_:n,ye=H?n:_;s|=H?C:T,s&=~(H?T:C),s&A||(s&=~(E|x));var Le=[r,s,m,he,K,ye,se,R,M,z],_e=c.apply(n,Le);return Pc(r)&&Fh(_e,Le),_e.placeholder=f,qh(_e,r,s)}function Sc(r){var s=vt[r];return function(c,f){if(c=vn(c),f=f==null?0:Rt(Re(f),292),f&&qf(c)){var m=(Ke(c)+"e").split("e"),_=s(m[0]+"e"+(+m[1]+f));return m=(Ke(_)+"e").split("e"),+(m[0]+"e"+(+m[1]-f))}return s(c)}}var Zy=Ui&&1/Io(new Ui([,-0]))[1]==ae?function(r){return new Ui(r)}:Gc;function Oh(r){return function(s){var c=Ot(s);return c==Qe?rc(s):c==mt?cb(s):tb(s,r(s))}}function nr(r,s,c,f,m,_,S,R){var M=s&x;if(!M&&typeof r!="function")throw new fn(l);var z=f?f.length:0;if(z||(s&=~(C|T),f=m=n),S=S===n?S:bt(Re(S),0),R=R===n?R:Re(R),z-=m?m.length:0,s&T){var H=f,K=m;f=m=n}var se=M?n:Ic(r),he=[r,s,c,f,m,H,K,_,S,R];if(se&&a_(he,se),r=he[0],s=he[1],c=he[2],f=he[3],m=he[4],R=he[9]=he[9]===n?M?0:r.length:bt(he[9]-z,0),!R&&s&(L|I)&&(s&=~(L|I)),!s||s==E)var ye=Fy(r,s,c);else s==L||s==I?ye=qy(r,s,R):(s==C||s==(E|C))&&!m.length?ye=Wy(r,s,c,f):ye=Jo.apply(n,he);var Le=se?fh:Fh;return qh(Le(ye,he),r,s)}function Lh(r,s,c,f){return r===n||$n(r,ji[c])&&!Ge.call(f,c)?s:r}function Ph(r,s,c,f,m,_){return ot(r)&&ot(s)&&(_.set(s,r),Ko(r,s,n,Ph,_),_.delete(s)),r}function Vy(r){return Ds(r)?n:r}function Mh(r,s,c,f,m,_){var S=c&k,R=r.length,M=s.length;if(R!=M&&!(S&&M>R))return!1;var z=_.get(r),H=_.get(s);if(z&&H)return z==s&&H==r;var K=-1,se=!0,he=c&w?new ni:n;for(_.set(r,s),_.set(s,r);++K<R;){var ye=r[K],Le=s[K];if(f)var _e=S?f(Le,ye,K,s,r,_):f(ye,Le,K,r,s,_);if(_e!==n){if(_e)continue;se=!1;break}if(he){if(!Yl(s,function(Ne,Fe){if(!Cs(he,Fe)&&(ye===Ne||m(ye,Ne,c,f,_)))return he.push(Fe)})){se=!1;break}}else if(!(ye===Le||m(ye,Le,c,f,_))){se=!1;break}}return _.delete(r),_.delete(s),se}function Ky(r,s,c,f,m,_,S){switch(c){case Ft:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Gt:return!(r.byteLength!=s.byteLength||!_(new Bo(r),new Bo(s)));case de:case Se:case It:return $n(+r,+s);case Et:return r.name==s.name&&r.message==s.message;case Pn:case _n:return r==s+"";case Qe:var R=rc;case mt:var M=f&k;if(R||(R=Io),r.size!=s.size&&!M)return!1;var z=S.get(r);if(z)return z==s;f|=w,S.set(r,s);var H=Mh(R(r),R(s),f,m,_,S);return S.delete(r),H;case Mn:if(Rs)return Rs.call(r)==Rs.call(s)}return!1}function Gy(r,s,c,f,m,_){var S=c&k,R=Tc(r),M=R.length,z=Tc(s),H=z.length;if(M!=H&&!S)return!1;for(var K=M;K--;){var se=R[K];if(!(S?se in s:Ge.call(s,se)))return!1}var he=_.get(r),ye=_.get(s);if(he&&ye)return he==s&&ye==r;var Le=!0;_.set(r,s),_.set(s,r);for(var _e=S;++K<M;){se=R[K];var Ne=r[se],Fe=s[se];if(f)var en=S?f(Fe,Ne,se,s,r,_):f(Ne,Fe,se,r,s,_);if(!(en===n?Ne===Fe||m(Ne,Fe,c,f,_):en)){Le=!1;break}_e||(_e=se=="constructor")}if(Le&&!_e){var Ut=r.constructor,tn=s.constructor;Ut!=tn&&"constructor"in r&&"constructor"in s&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof tn=="function"&&tn instanceof tn)&&(Le=!1)}return _.delete(r),_.delete(s),Le}function rr(r){return Bc(zh(r,n,Qh),r+"")}function Tc(r){return th(r,wt,Oc)}function Ac(r){return th(r,Zt,Bh)}var Ic=Ho?function(r){return Ho.get(r)}:Gc;function na(r){for(var s=r.name+"",c=Ni[s],f=Ge.call(Ni,s)?c.length:0;f--;){var m=c[f],_=m.func;if(_==null||_==r)return m.name}return s}function Fi(r){var s=Ge.call(b,"placeholder")?b:r;return s.placeholder}function ve(){var r=b.iteratee||Vc;return r=r===Vc?ih:r,arguments.length?r(arguments[0],arguments[1]):r}function ra(r,s){var c=r.__data__;return r_(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Rc(r){for(var s=wt(r),c=s.length;c--;){var f=s[c],m=r[f];s[c]=[f,m,Nh(m)]}return s}function si(r,s){var c=ob(r,s);return rh(c)?c:n}function Qy(r){var s=Ge.call(r,ei),c=r[ei];try{r[ei]=n;var f=!0}catch{}var m=Po.call(r);return f&&(s?r[ei]=c:delete r[ei]),m}var Oc=sc?function(r){return r==null?[]:(r=Ye(r),Sr(sc(r),function(s){return Hf.call(r,s)}))}:Qc,Bh=sc?function(r){for(var s=[];r;)Tr(s,Oc(r)),r=jo(r);return s}:Qc,Ot=Bt;(oc&&Ot(new oc(new ArrayBuffer(1)))!=Ft||Ts&&Ot(new Ts)!=Qe||ac&&Ot(ac.resolve())!=kr||Ui&&Ot(new Ui)!=mt||As&&Ot(new As)!=we)&&(Ot=function(r){var s=Bt(r),c=s==_t?r.constructor:n,f=c?oi(c):"";if(f)switch(f){case Ob:return Ft;case Lb:return Qe;case Pb:return kr;case Mb:return mt;case Bb:return we}return s});function Yy(r,s,c){for(var f=-1,m=c.length;++f<m;){var _=c[f],S=_.size;switch(_.type){case"drop":r+=S;break;case"dropRight":s-=S;break;case"take":s=Rt(s,r+S);break;case"takeRight":r=bt(r,s-S);break}}return{start:r,end:s}}function Jy(r){var s=r.match(i2);return s?s[1].split(s2):[]}function jh(r,s,c){s=Lr(s,r);for(var f=-1,m=s.length,_=!1;++f<m;){var S=Un(s[f]);if(!(_=r!=null&&c(r,S)))break;r=r[S]}return _||++f!=m?_:(m=r==null?0:r.length,!!m&&ua(m)&&ir(S,m)&&(Ie(r)||ai(r)))}function Xy(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ge.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Uh(r){return typeof r.constructor=="function"&&!Us(r)?Di(jo(r)):{}}function e_(r,s,c){var f=r.constructor;switch(s){case Gt:return Ec(r);case de:case Se:return new f(+r);case Ft:return jy(r,c);case Er:case Yn:case Jn:case Cr:case Ai:case Ii:case Ri:case Ul:case Nl:return _h(r,c);case Qe:return new f;case It:case _n:return new f(r);case Pn:return Uy(r);case mt:return new f;case Mn:return Ny(r)}}function t_(r,s){var c=s.length;if(!c)return r;var f=c-1;return s[f]=(c>1?"& ":"")+s[f],s=s.join(c>2?", ":" "),r.replace(r2,`{
/* [wrapped with `+s+`] */
`)}function n_(r){return Ie(r)||ai(r)||!!(Ff&&r&&r[Ff])}function ir(r,s){var c=typeof r;return s=s??J,!!s&&(c=="number"||c!="symbol"&&p2.test(r))&&r>-1&&r%1==0&&r<s}function jt(r,s,c){if(!ot(c))return!1;var f=typeof s;return(f=="number"?Wt(c)&&ir(s,c.length):f=="string"&&s in c)?$n(c[s],r):!1}function Lc(r,s){if(Ie(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||Xt(r)?!0:Xv.test(r)||!Jv.test(r)||s!=null&&r in Ye(s)}function r_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Pc(r){var s=na(r),c=b[s];if(typeof c!="function"||!(s in He.prototype))return!1;if(r===c)return!0;var f=Ic(c);return!!f&&r===f[0]}function i_(r){return!!Nf&&Nf in r}var s_=Oo?sr:Yc;function Us(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||ji;return r===c}function Nh(r){return r===r&&!ot(r)}function Dh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Ye(c))}}function o_(r){var s=la(r,function(f){return c.size===h&&c.clear(),f}),c=s.cache;return s}function a_(r,s){var c=r[1],f=s[1],m=c|f,_=m<(E|x|j),S=f==j&&c==L||f==j&&c==N&&r[7].length<=s[8]||f==(j|N)&&s[7].length<=s[8]&&c==L;if(!(_||S))return r;f&E&&(r[2]=s[2],m|=c&E?0:A);var R=s[3];if(R){var M=r[3];r[3]=M?xh(M,R,s[4]):R,r[4]=M?Ar(r[3],p):s[4]}return R=s[5],R&&(M=r[5],r[5]=M?$h(M,R,s[6]):R,r[6]=M?Ar(r[5],p):s[6]),R=s[7],R&&(r[7]=R),f&j&&(r[8]=r[8]==null?s[8]:Rt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function l_(r){var s=[];if(r!=null)for(var c in Ye(r))s.push(c);return s}function c_(r){return Po.call(r)}function zh(r,s,c){return s=bt(s===n?r.length-1:s,0),function(){for(var f=arguments,m=-1,_=bt(f.length-s,0),S=U(_);++m<_;)S[m]=f[s+m];m=-1;for(var R=U(s+1);++m<s;)R[m]=f[m];return R[s]=c(S),Qt(r,this,R)}}function Hh(r,s){return s.length<2?r:ii(r,gn(s,0,-1))}function u_(r,s){for(var c=r.length,f=Rt(s.length,c),m=qt(r);f--;){var _=s[f];r[f]=ir(_,c)?m[_]:n}return r}function Mc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Fh=Wh(fh),Ns=Eb||function(r,s){return Ct.setTimeout(r,s)},Bc=Wh(Ly);function qh(r,s,c){var f=s+"";return Bc(r,t_(f,d_(Jy(f),c)))}function Wh(r){var s=0,c=0;return function(){var f=Ab(),m=Y-(f-c);if(c=f,m>0){if(++s>=F)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ia(r,s){var c=-1,f=r.length,m=f-1;for(s=s===n?f:s;++c<s;){var _=bc(c,m),S=r[_];r[_]=r[c],r[c]=S}return r.length=s,r}var Zh=o_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(e2,function(c,f,m,_){s.push(m?_.replace(l2,"$1"):f||c)}),s});function Un(r){if(typeof r=="string"||Xt(r))return r;var s=r+"";return s=="0"&&1/r==-ae?"-0":s}function oi(r){if(r!=null){try{return Lo.call(r)}catch{}try{return r+""}catch{}}return""}function d_(r,s){return dn(G,function(c){var f="_."+c[0];s&c[1]&&!To(r,f)&&r.push(f)}),r.sort()}function Vh(r){if(r instanceof He)return r.clone();var s=new hn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function f_(r,s,c){(c?jt(r,s,c):s===n)?s=1:s=bt(Re(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var m=0,_=0,S=U(Do(f/s));m<f;)S[_++]=gn(r,m,m+=s);return S}function h_(r){for(var s=-1,c=r==null?0:r.length,f=0,m=[];++s<c;){var _=r[s];_&&(m[f++]=_)}return m}function p_(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),c=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Tr(Ie(c)?qt(c):[c],St(s,1))}var g_=Me(function(r,s){return ft(r)?Ls(r,St(s,1,ft,!0)):[]}),m_=Me(function(r,s){var c=mn(s);return ft(c)&&(c=n),ft(r)?Ls(r,St(s,1,ft,!0),ve(c,2)):[]}),v_=Me(function(r,s){var c=mn(s);return ft(c)&&(c=n),ft(r)?Ls(r,St(s,1,ft,!0),n,c):[]});function b_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Re(s),gn(r,s<0?0:s,f)):[]}function y_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Re(s),s=f-s,gn(r,0,s<0?0:s)):[]}function __(r,s){return r&&r.length?Qo(r,ve(s,3),!0,!0):[]}function w_(r,s){return r&&r.length?Qo(r,ve(s,3),!0):[]}function x_(r,s,c,f){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&jt(r,s,c)&&(c=0,f=m),py(r,s,c,f)):[]}function Kh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Re(c);return m<0&&(m=bt(f+m,0)),Ao(r,ve(s,3),m)}function Gh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f-1;return c!==n&&(m=Re(c),m=c<0?bt(f+m,0):Rt(m,f-1)),Ao(r,ve(s,3),m,!0)}function Qh(r){var s=r==null?0:r.length;return s?St(r,1):[]}function $_(r){var s=r==null?0:r.length;return s?St(r,ae):[]}function k_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Re(s),St(r,s)):[]}function E_(r){for(var s=-1,c=r==null?0:r.length,f={};++s<c;){var m=r[s];f[m[0]]=m[1]}return f}function Yh(r){return r&&r.length?r[0]:n}function C_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Re(c);return m<0&&(m=bt(f+m,0)),Li(r,s,m)}function S_(r){var s=r==null?0:r.length;return s?gn(r,0,-1):[]}var T_=Me(function(r){var s=it(r,$c);return s.length&&s[0]===r[0]?hc(s):[]}),A_=Me(function(r){var s=mn(r),c=it(r,$c);return s===mn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?hc(c,ve(s,2)):[]}),I_=Me(function(r){var s=mn(r),c=it(r,$c);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?hc(c,n,s):[]});function R_(r,s){return r==null?"":Sb.call(r,s)}function mn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function O_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f;return c!==n&&(m=Re(c),m=m<0?bt(f+m,0):Rt(m,f-1)),s===s?db(r,s,m):Ao(r,Rf,m,!0)}function L_(r,s){return r&&r.length?lh(r,Re(s)):n}var P_=Me(Jh);function Jh(r,s){return r&&r.length&&s&&s.length?vc(r,s):r}function M_(r,s,c){return r&&r.length&&s&&s.length?vc(r,s,ve(c,2)):r}function B_(r,s,c){return r&&r.length&&s&&s.length?vc(r,s,n,c):r}var j_=rr(function(r,s){var c=r==null?0:r.length,f=cc(r,s);return dh(r,it(s,function(m){return ir(m,c)?+m:m}).sort(wh)),f});function U_(r,s){var c=[];if(!(r&&r.length))return c;var f=-1,m=[],_=r.length;for(s=ve(s,3);++f<_;){var S=r[f];s(S,f,r)&&(c.push(S),m.push(f))}return dh(r,m),c}function jc(r){return r==null?r:Rb.call(r)}function N_(r,s,c){var f=r==null?0:r.length;return f?(c&&typeof c!="number"&&jt(r,s,c)?(s=0,c=f):(s=s==null?0:Re(s),c=c===n?f:Re(c)),gn(r,s,c)):[]}function D_(r,s){return Go(r,s)}function z_(r,s,c){return _c(r,s,ve(c,2))}function H_(r,s){var c=r==null?0:r.length;if(c){var f=Go(r,s);if(f<c&&$n(r[f],s))return f}return-1}function F_(r,s){return Go(r,s,!0)}function q_(r,s,c){return _c(r,s,ve(c,2),!0)}function W_(r,s){var c=r==null?0:r.length;if(c){var f=Go(r,s,!0)-1;if($n(r[f],s))return f}return-1}function Z_(r){return r&&r.length?hh(r):[]}function V_(r,s){return r&&r.length?hh(r,ve(s,2)):[]}function K_(r){var s=r==null?0:r.length;return s?gn(r,1,s):[]}function G_(r,s,c){return r&&r.length?(s=c||s===n?1:Re(s),gn(r,0,s<0?0:s)):[]}function Q_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Re(s),s=f-s,gn(r,s<0?0:s,f)):[]}function Y_(r,s){return r&&r.length?Qo(r,ve(s,3),!1,!0):[]}function J_(r,s){return r&&r.length?Qo(r,ve(s,3)):[]}var X_=Me(function(r){return Or(St(r,1,ft,!0))}),ew=Me(function(r){var s=mn(r);return ft(s)&&(s=n),Or(St(r,1,ft,!0),ve(s,2))}),tw=Me(function(r){var s=mn(r);return s=typeof s=="function"?s:n,Or(St(r,1,ft,!0),n,s)});function nw(r){return r&&r.length?Or(r):[]}function rw(r,s){return r&&r.length?Or(r,ve(s,2)):[]}function iw(r,s){return s=typeof s=="function"?s:n,r&&r.length?Or(r,n,s):[]}function Uc(r){if(!(r&&r.length))return[];var s=0;return r=Sr(r,function(c){if(ft(c))return s=bt(c.length,s),!0}),tc(s,function(c){return it(r,Jl(c))})}function Xh(r,s){if(!(r&&r.length))return[];var c=Uc(r);return s==null?c:it(c,function(f){return Qt(s,n,f)})}var sw=Me(function(r,s){return ft(r)?Ls(r,s):[]}),ow=Me(function(r){return xc(Sr(r,ft))}),aw=Me(function(r){var s=mn(r);return ft(s)&&(s=n),xc(Sr(r,ft),ve(s,2))}),lw=Me(function(r){var s=mn(r);return s=typeof s=="function"?s:n,xc(Sr(r,ft),n,s)}),cw=Me(Uc);function uw(r,s){return vh(r||[],s||[],Os)}function dw(r,s){return vh(r||[],s||[],Bs)}var fw=Me(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Xh(r,c)});function ep(r){var s=b(r);return s.__chain__=!0,s}function hw(r,s){return s(r),r}function sa(r,s){return s(r)}var pw=rr(function(r){var s=r.length,c=s?r[0]:0,f=this.__wrapped__,m=function(_){return cc(_,r)};return s>1||this.__actions__.length||!(f instanceof He)||!ir(c)?this.thru(m):(f=f.slice(c,+c+(s?1:0)),f.__actions__.push({func:sa,args:[m],thisArg:n}),new hn(f,this.__chain__).thru(function(_){return s&&!_.length&&_.push(n),_}))});function gw(){return ep(this)}function mw(){return new hn(this.value(),this.__chain__)}function vw(){this.__values__===n&&(this.__values__=pp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function bw(){return this}function yw(r){for(var s,c=this;c instanceof qo;){var f=Vh(c);f.__index__=0,f.__values__=n,s?m.__wrapped__=f:s=f;var m=f;c=c.__wrapped__}return m.__wrapped__=r,s}function _w(){var r=this.__wrapped__;if(r instanceof He){var s=r;return this.__actions__.length&&(s=new He(this)),s=s.reverse(),s.__actions__.push({func:sa,args:[jc],thisArg:n}),new hn(s,this.__chain__)}return this.thru(jc)}function ww(){return mh(this.__wrapped__,this.__actions__)}var xw=Yo(function(r,s,c){Ge.call(r,c)?++r[c]:tr(r,c,1)});function $w(r,s,c){var f=Ie(r)?Af:hy;return c&&jt(r,s,c)&&(s=n),f(r,ve(s,3))}function kw(r,s){var c=Ie(r)?Sr:Xf;return c(r,ve(s,3))}var Ew=Sh(Kh),Cw=Sh(Gh);function Sw(r,s){return St(oa(r,s),1)}function Tw(r,s){return St(oa(r,s),ae)}function Aw(r,s,c){return c=c===n?1:Re(c),St(oa(r,s),c)}function tp(r,s){var c=Ie(r)?dn:Rr;return c(r,ve(s,3))}function np(r,s){var c=Ie(r)?K2:Jf;return c(r,ve(s,3))}var Iw=Yo(function(r,s,c){Ge.call(r,c)?r[c].push(s):tr(r,c,[s])});function Rw(r,s,c,f){r=Wt(r)?r:Wi(r),c=c&&!f?Re(c):0;var m=r.length;return c<0&&(c=bt(m+c,0)),da(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Li(r,s,c)>-1}var Ow=Me(function(r,s,c){var f=-1,m=typeof s=="function",_=Wt(r)?U(r.length):[];return Rr(r,function(S){_[++f]=m?Qt(s,S,c):Ps(S,s,c)}),_}),Lw=Yo(function(r,s,c){tr(r,c,s)});function oa(r,s){var c=Ie(r)?it:sh;return c(r,ve(s,3))}function Pw(r,s,c,f){return r==null?[]:(Ie(s)||(s=s==null?[]:[s]),c=f?n:c,Ie(c)||(c=c==null?[]:[c]),ch(r,s,c))}var Mw=Yo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function Bw(r,s,c){var f=Ie(r)?Ql:Lf,m=arguments.length<3;return f(r,ve(s,4),c,m,Rr)}function jw(r,s,c){var f=Ie(r)?G2:Lf,m=arguments.length<3;return f(r,ve(s,4),c,m,Jf)}function Uw(r,s){var c=Ie(r)?Sr:Xf;return c(r,ca(ve(s,3)))}function Nw(r){var s=Ie(r)?Kf:Ry;return s(r)}function Dw(r,s,c){(c?jt(r,s,c):s===n)?s=1:s=Re(s);var f=Ie(r)?ly:Oy;return f(r,s)}function zw(r){var s=Ie(r)?cy:Py;return s(r)}function Hw(r){if(r==null)return 0;if(Wt(r))return da(r)?Mi(r):r.length;var s=Ot(r);return s==Qe||s==mt?r.size:gc(r).length}function Fw(r,s,c){var f=Ie(r)?Yl:My;return c&&jt(r,s,c)&&(s=n),f(r,ve(s,3))}var qw=Me(function(r,s){if(r==null)return[];var c=s.length;return c>1&&jt(r,s[0],s[1])?s=[]:c>2&&jt(s[0],s[1],s[2])&&(s=[s[0]]),ch(r,St(s,1),[])}),aa=kb||function(){return Ct.Date.now()};function Ww(r,s){if(typeof s!="function")throw new fn(l);return r=Re(r),function(){if(--r<1)return s.apply(this,arguments)}}function rp(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,nr(r,j,n,n,n,n,s)}function ip(r,s){var c;if(typeof s!="function")throw new fn(l);return r=Re(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Nc=Me(function(r,s,c){var f=E;if(c.length){var m=Ar(c,Fi(Nc));f|=C}return nr(r,f,s,c,m)}),sp=Me(function(r,s,c){var f=E|x;if(c.length){var m=Ar(c,Fi(sp));f|=C}return nr(s,f,r,c,m)});function op(r,s,c){s=c?n:s;var f=nr(r,L,n,n,n,n,n,s);return f.placeholder=op.placeholder,f}function ap(r,s,c){s=c?n:s;var f=nr(r,I,n,n,n,n,n,s);return f.placeholder=ap.placeholder,f}function lp(r,s,c){var f,m,_,S,R,M,z=0,H=!1,K=!1,se=!0;if(typeof r!="function")throw new fn(l);s=vn(s)||0,ot(c)&&(H=!!c.leading,K="maxWait"in c,_=K?bt(vn(c.maxWait)||0,s):_,se="trailing"in c?!!c.trailing:se);function he(ht){var kn=f,ar=m;return f=m=n,z=ht,S=r.apply(ar,kn),S}function ye(ht){return z=ht,R=Ns(Ne,s),H?he(ht):S}function Le(ht){var kn=ht-M,ar=ht-z,Sp=s-kn;return K?Rt(Sp,_-ar):Sp}function _e(ht){var kn=ht-M,ar=ht-z;return M===n||kn>=s||kn<0||K&&ar>=_}function Ne(){var ht=aa();if(_e(ht))return Fe(ht);R=Ns(Ne,Le(ht))}function Fe(ht){return R=n,se&&f?he(ht):(f=m=n,S)}function en(){R!==n&&bh(R),z=0,f=M=m=R=n}function Ut(){return R===n?S:Fe(aa())}function tn(){var ht=aa(),kn=_e(ht);if(f=arguments,m=this,M=ht,kn){if(R===n)return ye(M);if(K)return bh(R),R=Ns(Ne,s),he(M)}return R===n&&(R=Ns(Ne,s)),S}return tn.cancel=en,tn.flush=Ut,tn}var Zw=Me(function(r,s){return Yf(r,1,s)}),Vw=Me(function(r,s,c){return Yf(r,vn(s)||0,c)});function Kw(r){return nr(r,re)}function la(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new fn(l);var c=function(){var f=arguments,m=s?s.apply(this,f):f[0],_=c.cache;if(_.has(m))return _.get(m);var S=r.apply(this,f);return c.cache=_.set(m,S)||_,S};return c.cache=new(la.Cache||er),c}la.Cache=er;function ca(r){if(typeof r!="function")throw new fn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Gw(r){return ip(2,r)}var Qw=By(function(r,s){s=s.length==1&&Ie(s[0])?it(s[0],Yt(ve())):it(St(s,1),Yt(ve()));var c=s.length;return Me(function(f){for(var m=-1,_=Rt(f.length,c);++m<_;)f[m]=s[m].call(this,f[m]);return Qt(r,this,f)})}),Dc=Me(function(r,s){var c=Ar(s,Fi(Dc));return nr(r,C,n,s,c)}),cp=Me(function(r,s){var c=Ar(s,Fi(cp));return nr(r,T,n,s,c)}),Yw=rr(function(r,s){return nr(r,N,n,n,n,s)});function Jw(r,s){if(typeof r!="function")throw new fn(l);return s=s===n?s:Re(s),Me(r,s)}function Xw(r,s){if(typeof r!="function")throw new fn(l);return s=s==null?0:bt(Re(s),0),Me(function(c){var f=c[s],m=Pr(c,0,s);return f&&Tr(m,f),Qt(r,this,m)})}function e3(r,s,c){var f=!0,m=!0;if(typeof r!="function")throw new fn(l);return ot(c)&&(f="leading"in c?!!c.leading:f,m="trailing"in c?!!c.trailing:m),lp(r,s,{leading:f,maxWait:s,trailing:m})}function t3(r){return rp(r,1)}function n3(r,s){return Dc(kc(s),r)}function r3(){if(!arguments.length)return[];var r=arguments[0];return Ie(r)?r:[r]}function i3(r){return pn(r,$)}function s3(r,s){return s=typeof s=="function"?s:n,pn(r,$,s)}function o3(r){return pn(r,g|$)}function a3(r,s){return s=typeof s=="function"?s:n,pn(r,g|$,s)}function l3(r,s){return s==null||Qf(r,s,wt(s))}function $n(r,s){return r===s||r!==r&&s!==s}var c3=ta(fc),u3=ta(function(r,s){return r>=s}),ai=nh(function(){return arguments}())?nh:function(r){return ut(r)&&Ge.call(r,"callee")&&!Hf.call(r,"callee")},Ie=U.isArray,d3=$f?Yt($f):yy;function Wt(r){return r!=null&&ua(r.length)&&!sr(r)}function ft(r){return ut(r)&&Wt(r)}function f3(r){return r===!0||r===!1||ut(r)&&Bt(r)==de}var Mr=Cb||Yc,h3=kf?Yt(kf):_y;function p3(r){return ut(r)&&r.nodeType===1&&!Ds(r)}function g3(r){if(r==null)return!0;if(Wt(r)&&(Ie(r)||typeof r=="string"||typeof r.splice=="function"||Mr(r)||qi(r)||ai(r)))return!r.length;var s=Ot(r);if(s==Qe||s==mt)return!r.size;if(Us(r))return!gc(r).length;for(var c in r)if(Ge.call(r,c))return!1;return!0}function m3(r,s){return Ms(r,s)}function v3(r,s,c){c=typeof c=="function"?c:n;var f=c?c(r,s):n;return f===n?Ms(r,s,n,c):!!f}function zc(r){if(!ut(r))return!1;var s=Bt(r);return s==Et||s==rt||typeof r.message=="string"&&typeof r.name=="string"&&!Ds(r)}function b3(r){return typeof r=="number"&&qf(r)}function sr(r){if(!ot(r))return!1;var s=Bt(r);return s==Ee||s==et||s==q||s==Si}function up(r){return typeof r=="number"&&r==Re(r)}function ua(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=J}function ot(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ut(r){return r!=null&&typeof r=="object"}var dp=Ef?Yt(Ef):xy;function y3(r,s){return r===s||pc(r,s,Rc(s))}function _3(r,s,c){return c=typeof c=="function"?c:n,pc(r,s,Rc(s),c)}function w3(r){return fp(r)&&r!=+r}function x3(r){if(s_(r))throw new Te(a);return rh(r)}function $3(r){return r===null}function k3(r){return r==null}function fp(r){return typeof r=="number"||ut(r)&&Bt(r)==It}function Ds(r){if(!ut(r)||Bt(r)!=_t)return!1;var s=jo(r);if(s===null)return!0;var c=Ge.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Lo.call(c)==_b}var Hc=Cf?Yt(Cf):$y;function E3(r){return up(r)&&r>=-J&&r<=J}var hp=Sf?Yt(Sf):ky;function da(r){return typeof r=="string"||!Ie(r)&&ut(r)&&Bt(r)==_n}function Xt(r){return typeof r=="symbol"||ut(r)&&Bt(r)==Mn}var qi=Tf?Yt(Tf):Ey;function C3(r){return r===n}function S3(r){return ut(r)&&Ot(r)==we}function T3(r){return ut(r)&&Bt(r)==Qn}var A3=ta(mc),I3=ta(function(r,s){return r<=s});function pp(r){if(!r)return[];if(Wt(r))return da(r)?wn(r):qt(r);if(Ss&&r[Ss])return lb(r[Ss]());var s=Ot(r),c=s==Qe?rc:s==mt?Io:Wi;return c(r)}function or(r){if(!r)return r===0?r:0;if(r=vn(r),r===ae||r===-ae){var s=r<0?-1:1;return s*fe}return r===r?r:0}function Re(r){var s=or(r),c=s%1;return s===s?c?s-c:s:0}function gp(r){return r?ri(Re(r),0,$e):0}function vn(r){if(typeof r=="number")return r;if(Xt(r))return pe;if(ot(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ot(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Pf(r);var c=d2.test(r);return c||h2.test(r)?W2(r.slice(2),c?2:8):u2.test(r)?pe:+r}function mp(r){return jn(r,Zt(r))}function R3(r){return r?ri(Re(r),-J,J):r===0?r:0}function Ke(r){return r==null?"":Jt(r)}var O3=zi(function(r,s){if(Us(s)||Wt(s)){jn(s,wt(s),r);return}for(var c in s)Ge.call(s,c)&&Os(r,c,s[c])}),vp=zi(function(r,s){jn(s,Zt(s),r)}),fa=zi(function(r,s,c,f){jn(s,Zt(s),r,f)}),L3=zi(function(r,s,c,f){jn(s,wt(s),r,f)}),P3=rr(cc);function M3(r,s){var c=Di(r);return s==null?c:Gf(c,s)}var B3=Me(function(r,s){r=Ye(r);var c=-1,f=s.length,m=f>2?s[2]:n;for(m&&jt(s[0],s[1],m)&&(f=1);++c<f;)for(var _=s[c],S=Zt(_),R=-1,M=S.length;++R<M;){var z=S[R],H=r[z];(H===n||$n(H,ji[z])&&!Ge.call(r,z))&&(r[z]=_[z])}return r}),j3=Me(function(r){return r.push(n,Ph),Qt(bp,n,r)});function U3(r,s){return If(r,ve(s,3),Bn)}function N3(r,s){return If(r,ve(s,3),dc)}function D3(r,s){return r==null?r:uc(r,ve(s,3),Zt)}function z3(r,s){return r==null?r:eh(r,ve(s,3),Zt)}function H3(r,s){return r&&Bn(r,ve(s,3))}function F3(r,s){return r&&dc(r,ve(s,3))}function q3(r){return r==null?[]:Vo(r,wt(r))}function W3(r){return r==null?[]:Vo(r,Zt(r))}function Fc(r,s,c){var f=r==null?n:ii(r,s);return f===n?c:f}function Z3(r,s){return r!=null&&jh(r,s,gy)}function qc(r,s){return r!=null&&jh(r,s,my)}var V3=Ah(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Po.call(s)),r[s]=c},Zc(Vt)),K3=Ah(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Po.call(s)),Ge.call(r,s)?r[s].push(c):r[s]=[c]},ve),G3=Me(Ps);function wt(r){return Wt(r)?Vf(r):gc(r)}function Zt(r){return Wt(r)?Vf(r,!0):Cy(r)}function Q3(r,s){var c={};return s=ve(s,3),Bn(r,function(f,m,_){tr(c,s(f,m,_),f)}),c}function Y3(r,s){var c={};return s=ve(s,3),Bn(r,function(f,m,_){tr(c,m,s(f,m,_))}),c}var J3=zi(function(r,s,c){Ko(r,s,c)}),bp=zi(function(r,s,c,f){Ko(r,s,c,f)}),X3=rr(function(r,s){var c={};if(r==null)return c;var f=!1;s=it(s,function(_){return _=Lr(_,r),f||(f=_.length>1),_}),jn(r,Ac(r),c),f&&(c=pn(c,g|v|$,Vy));for(var m=s.length;m--;)wc(c,s[m]);return c});function e4(r,s){return yp(r,ca(ve(s)))}var t4=rr(function(r,s){return r==null?{}:Ty(r,s)});function yp(r,s){if(r==null)return{};var c=it(Ac(r),function(f){return[f]});return s=ve(s),uh(r,c,function(f,m){return s(f,m[0])})}function n4(r,s,c){s=Lr(s,r);var f=-1,m=s.length;for(m||(m=1,r=n);++f<m;){var _=r==null?n:r[Un(s[f])];_===n&&(f=m,_=c),r=sr(_)?_.call(r):_}return r}function r4(r,s,c){return r==null?r:Bs(r,s,c)}function i4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:Bs(r,s,c,f)}var _p=Oh(wt),wp=Oh(Zt);function s4(r,s,c){var f=Ie(r),m=f||Mr(r)||qi(r);if(s=ve(s,4),c==null){var _=r&&r.constructor;m?c=f?new _:[]:ot(r)?c=sr(_)?Di(jo(r)):{}:c={}}return(m?dn:Bn)(r,function(S,R,M){return s(c,S,R,M)}),c}function o4(r,s){return r==null?!0:wc(r,s)}function a4(r,s,c){return r==null?r:gh(r,s,kc(c))}function l4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:gh(r,s,kc(c),f)}function Wi(r){return r==null?[]:nc(r,wt(r))}function c4(r){return r==null?[]:nc(r,Zt(r))}function u4(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=vn(c),c=c===c?c:0),s!==n&&(s=vn(s),s=s===s?s:0),ri(vn(r),s,c)}function d4(r,s,c){return s=or(s),c===n?(c=s,s=0):c=or(c),r=vn(r),vy(r,s,c)}function f4(r,s,c){if(c&&typeof c!="boolean"&&jt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=or(r),s===n?(s=r,r=0):s=or(s)),r>s){var f=r;r=s,s=f}if(c||r%1||s%1){var m=Wf();return Rt(r+m*(s-r+q2("1e-"+((m+"").length-1))),s)}return bc(r,s)}var h4=Hi(function(r,s,c){return s=s.toLowerCase(),r+(c?xp(s):s)});function xp(r){return Wc(Ke(r).toLowerCase())}function $p(r){return r=Ke(r),r&&r.replace(g2,rb).replace(P2,"")}function p4(r,s,c){r=Ke(r),s=Jt(s);var f=r.length;c=c===n?f:ri(Re(c),0,f);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function g4(r){return r=Ke(r),r&&Gv.test(r)?r.replace(Xd,ib):r}function m4(r){return r=Ke(r),r&&t2.test(r)?r.replace(Dl,"\\$&"):r}var v4=Hi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),b4=Hi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),y4=Ch("toLowerCase");function _4(r,s,c){r=Ke(r),s=Re(s);var f=s?Mi(r):0;if(!s||f>=s)return r;var m=(s-f)/2;return ea(zo(m),c)+r+ea(Do(m),c)}function w4(r,s,c){r=Ke(r),s=Re(s);var f=s?Mi(r):0;return s&&f<s?r+ea(s-f,c):r}function x4(r,s,c){r=Ke(r),s=Re(s);var f=s?Mi(r):0;return s&&f<s?ea(s-f,c)+r:r}function $4(r,s,c){return c||s==null?s=0:s&&(s=+s),Ib(Ke(r).replace(zl,""),s||0)}function k4(r,s,c){return(c?jt(r,s,c):s===n)?s=1:s=Re(s),yc(Ke(r),s)}function E4(){var r=arguments,s=Ke(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var C4=Hi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function S4(r,s,c){return c&&typeof c!="number"&&jt(r,s,c)&&(s=c=n),c=c===n?$e:c>>>0,c?(r=Ke(r),r&&(typeof s=="string"||s!=null&&!Hc(s))&&(s=Jt(s),!s&&Pi(r))?Pr(wn(r),0,c):r.split(s,c)):[]}var T4=Hi(function(r,s,c){return r+(c?" ":"")+Wc(s)});function A4(r,s,c){return r=Ke(r),c=c==null?0:ri(Re(c),0,r.length),s=Jt(s),r.slice(c,c+s.length)==s}function I4(r,s,c){var f=b.templateSettings;c&&jt(r,s,c)&&(s=n),r=Ke(r),s=fa({},s,f,Lh);var m=fa({},s.imports,f.imports,Lh),_=wt(m),S=nc(m,_),R,M,z=0,H=s.interpolate||Eo,K="__p += '",se=ic((s.escape||Eo).source+"|"+H.source+"|"+(H===ef?c2:Eo).source+"|"+(s.evaluate||Eo).source+"|$","g"),he="//# sourceURL="+(Ge.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++N2+"]")+`
`;r.replace(se,function(_e,Ne,Fe,en,Ut,tn){return Fe||(Fe=en),K+=r.slice(z,tn).replace(m2,sb),Ne&&(R=!0,K+=`' +
__e(`+Ne+`) +
'`),Ut&&(M=!0,K+=`';
`+Ut+`;
__p += '`),Fe&&(K+=`' +
((__t = (`+Fe+`)) == null ? '' : __t) +
'`),z=tn+_e.length,_e}),K+=`';
`;var ye=Ge.call(s,"variable")&&s.variable;if(!ye)K=`with (obj) {
`+K+`
}
`;else if(a2.test(ye))throw new Te(u);K=(M?K.replace(Wv,""):K).replace(Zv,"$1").replace(Vv,"$1;"),K="function("+(ye||"obj")+`) {
`+(ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var Le=Ep(function(){return Ze(_,he+"return "+K).apply(n,S)});if(Le.source=K,zc(Le))throw Le;return Le}function R4(r){return Ke(r).toLowerCase()}function O4(r){return Ke(r).toUpperCase()}function L4(r,s,c){if(r=Ke(r),r&&(c||s===n))return Pf(r);if(!r||!(s=Jt(s)))return r;var f=wn(r),m=wn(s),_=Mf(f,m),S=Bf(f,m)+1;return Pr(f,_,S).join("")}function P4(r,s,c){if(r=Ke(r),r&&(c||s===n))return r.slice(0,Uf(r)+1);if(!r||!(s=Jt(s)))return r;var f=wn(r),m=Bf(f,wn(s))+1;return Pr(f,0,m).join("")}function M4(r,s,c){if(r=Ke(r),r&&(c||s===n))return r.replace(zl,"");if(!r||!(s=Jt(s)))return r;var f=wn(r),m=Mf(f,wn(s));return Pr(f,m).join("")}function B4(r,s){var c=V,f=Q;if(ot(s)){var m="separator"in s?s.separator:m;c="length"in s?Re(s.length):c,f="omission"in s?Jt(s.omission):f}r=Ke(r);var _=r.length;if(Pi(r)){var S=wn(r);_=S.length}if(c>=_)return r;var R=c-Mi(f);if(R<1)return f;var M=S?Pr(S,0,R).join(""):r.slice(0,R);if(m===n)return M+f;if(S&&(R+=M.length-R),Hc(m)){if(r.slice(R).search(m)){var z,H=M;for(m.global||(m=ic(m.source,Ke(tf.exec(m))+"g")),m.lastIndex=0;z=m.exec(H);)var K=z.index;M=M.slice(0,K===n?R:K)}}else if(r.indexOf(Jt(m),R)!=R){var se=M.lastIndexOf(m);se>-1&&(M=M.slice(0,se))}return M+f}function j4(r){return r=Ke(r),r&&Kv.test(r)?r.replace(Jd,fb):r}var U4=Hi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Wc=Ch("toUpperCase");function kp(r,s,c){return r=Ke(r),s=c?n:s,s===n?ab(r)?gb(r):J2(r):r.match(s)||[]}var Ep=Me(function(r,s){try{return Qt(r,n,s)}catch(c){return zc(c)?c:new Te(c)}}),N4=rr(function(r,s){return dn(s,function(c){c=Un(c),tr(r,c,Nc(r[c],r))}),r});function D4(r){var s=r==null?0:r.length,c=ve();return r=s?it(r,function(f){if(typeof f[1]!="function")throw new fn(l);return[c(f[0]),f[1]]}):[],Me(function(f){for(var m=-1;++m<s;){var _=r[m];if(Qt(_[0],this,f))return Qt(_[1],this,f)}})}function z4(r){return fy(pn(r,g))}function Zc(r){return function(){return r}}function H4(r,s){return r==null||r!==r?s:r}var F4=Th(),q4=Th(!0);function Vt(r){return r}function Vc(r){return ih(typeof r=="function"?r:pn(r,g))}function W4(r){return oh(pn(r,g))}function Z4(r,s){return ah(r,pn(s,g))}var V4=Me(function(r,s){return function(c){return Ps(c,r,s)}}),K4=Me(function(r,s){return function(c){return Ps(r,c,s)}});function Kc(r,s,c){var f=wt(s),m=Vo(s,f);c==null&&!(ot(s)&&(m.length||!f.length))&&(c=s,s=r,r=this,m=Vo(s,wt(s)));var _=!(ot(c)&&"chain"in c)||!!c.chain,S=sr(r);return dn(m,function(R){var M=s[R];r[R]=M,S&&(r.prototype[R]=function(){var z=this.__chain__;if(_||z){var H=r(this.__wrapped__),K=H.__actions__=qt(this.__actions__);return K.push({func:M,args:arguments,thisArg:r}),H.__chain__=z,H}return M.apply(r,Tr([this.value()],arguments))})}),r}function G4(){return Ct._===this&&(Ct._=wb),this}function Gc(){}function Q4(r){return r=Re(r),Me(function(s){return lh(s,r)})}var Y4=Cc(it),J4=Cc(Af),X4=Cc(Yl);function Cp(r){return Lc(r)?Jl(Un(r)):Ay(r)}function ex(r){return function(s){return r==null?n:ii(r,s)}}var tx=Ih(),nx=Ih(!0);function Qc(){return[]}function Yc(){return!1}function rx(){return{}}function ix(){return""}function sx(){return!0}function ox(r,s){if(r=Re(r),r<1||r>J)return[];var c=$e,f=Rt(r,$e);s=ve(s),r-=$e;for(var m=tc(f,s);++c<r;)s(c);return m}function ax(r){return Ie(r)?it(r,Un):Xt(r)?[r]:qt(Zh(Ke(r)))}function lx(r){var s=++yb;return Ke(r)+s}var cx=Xo(function(r,s){return r+s},0),ux=Sc("ceil"),dx=Xo(function(r,s){return r/s},1),fx=Sc("floor");function hx(r){return r&&r.length?Zo(r,Vt,fc):n}function px(r,s){return r&&r.length?Zo(r,ve(s,2),fc):n}function gx(r){return Of(r,Vt)}function mx(r,s){return Of(r,ve(s,2))}function vx(r){return r&&r.length?Zo(r,Vt,mc):n}function bx(r,s){return r&&r.length?Zo(r,ve(s,2),mc):n}var yx=Xo(function(r,s){return r*s},1),_x=Sc("round"),wx=Xo(function(r,s){return r-s},0);function xx(r){return r&&r.length?ec(r,Vt):0}function $x(r,s){return r&&r.length?ec(r,ve(s,2)):0}return b.after=Ww,b.ary=rp,b.assign=O3,b.assignIn=vp,b.assignInWith=fa,b.assignWith=L3,b.at=P3,b.before=ip,b.bind=Nc,b.bindAll=N4,b.bindKey=sp,b.castArray=r3,b.chain=ep,b.chunk=f_,b.compact=h_,b.concat=p_,b.cond=D4,b.conforms=z4,b.constant=Zc,b.countBy=xw,b.create=M3,b.curry=op,b.curryRight=ap,b.debounce=lp,b.defaults=B3,b.defaultsDeep=j3,b.defer=Zw,b.delay=Vw,b.difference=g_,b.differenceBy=m_,b.differenceWith=v_,b.drop=b_,b.dropRight=y_,b.dropRightWhile=__,b.dropWhile=w_,b.fill=x_,b.filter=kw,b.flatMap=Sw,b.flatMapDeep=Tw,b.flatMapDepth=Aw,b.flatten=Qh,b.flattenDeep=$_,b.flattenDepth=k_,b.flip=Kw,b.flow=F4,b.flowRight=q4,b.fromPairs=E_,b.functions=q3,b.functionsIn=W3,b.groupBy=Iw,b.initial=S_,b.intersection=T_,b.intersectionBy=A_,b.intersectionWith=I_,b.invert=V3,b.invertBy=K3,b.invokeMap=Ow,b.iteratee=Vc,b.keyBy=Lw,b.keys=wt,b.keysIn=Zt,b.map=oa,b.mapKeys=Q3,b.mapValues=Y3,b.matches=W4,b.matchesProperty=Z4,b.memoize=la,b.merge=J3,b.mergeWith=bp,b.method=V4,b.methodOf=K4,b.mixin=Kc,b.negate=ca,b.nthArg=Q4,b.omit=X3,b.omitBy=e4,b.once=Gw,b.orderBy=Pw,b.over=Y4,b.overArgs=Qw,b.overEvery=J4,b.overSome=X4,b.partial=Dc,b.partialRight=cp,b.partition=Mw,b.pick=t4,b.pickBy=yp,b.property=Cp,b.propertyOf=ex,b.pull=P_,b.pullAll=Jh,b.pullAllBy=M_,b.pullAllWith=B_,b.pullAt=j_,b.range=tx,b.rangeRight=nx,b.rearg=Yw,b.reject=Uw,b.remove=U_,b.rest=Jw,b.reverse=jc,b.sampleSize=Dw,b.set=r4,b.setWith=i4,b.shuffle=zw,b.slice=N_,b.sortBy=qw,b.sortedUniq=Z_,b.sortedUniqBy=V_,b.split=S4,b.spread=Xw,b.tail=K_,b.take=G_,b.takeRight=Q_,b.takeRightWhile=Y_,b.takeWhile=J_,b.tap=hw,b.throttle=e3,b.thru=sa,b.toArray=pp,b.toPairs=_p,b.toPairsIn=wp,b.toPath=ax,b.toPlainObject=mp,b.transform=s4,b.unary=t3,b.union=X_,b.unionBy=ew,b.unionWith=tw,b.uniq=nw,b.uniqBy=rw,b.uniqWith=iw,b.unset=o4,b.unzip=Uc,b.unzipWith=Xh,b.update=a4,b.updateWith=l4,b.values=Wi,b.valuesIn=c4,b.without=sw,b.words=kp,b.wrap=n3,b.xor=ow,b.xorBy=aw,b.xorWith=lw,b.zip=cw,b.zipObject=uw,b.zipObjectDeep=dw,b.zipWith=fw,b.entries=_p,b.entriesIn=wp,b.extend=vp,b.extendWith=fa,Kc(b,b),b.add=cx,b.attempt=Ep,b.camelCase=h4,b.capitalize=xp,b.ceil=ux,b.clamp=u4,b.clone=i3,b.cloneDeep=o3,b.cloneDeepWith=a3,b.cloneWith=s3,b.conformsTo=l3,b.deburr=$p,b.defaultTo=H4,b.divide=dx,b.endsWith=p4,b.eq=$n,b.escape=g4,b.escapeRegExp=m4,b.every=$w,b.find=Ew,b.findIndex=Kh,b.findKey=U3,b.findLast=Cw,b.findLastIndex=Gh,b.findLastKey=N3,b.floor=fx,b.forEach=tp,b.forEachRight=np,b.forIn=D3,b.forInRight=z3,b.forOwn=H3,b.forOwnRight=F3,b.get=Fc,b.gt=c3,b.gte=u3,b.has=Z3,b.hasIn=qc,b.head=Yh,b.identity=Vt,b.includes=Rw,b.indexOf=C_,b.inRange=d4,b.invoke=G3,b.isArguments=ai,b.isArray=Ie,b.isArrayBuffer=d3,b.isArrayLike=Wt,b.isArrayLikeObject=ft,b.isBoolean=f3,b.isBuffer=Mr,b.isDate=h3,b.isElement=p3,b.isEmpty=g3,b.isEqual=m3,b.isEqualWith=v3,b.isError=zc,b.isFinite=b3,b.isFunction=sr,b.isInteger=up,b.isLength=ua,b.isMap=dp,b.isMatch=y3,b.isMatchWith=_3,b.isNaN=w3,b.isNative=x3,b.isNil=k3,b.isNull=$3,b.isNumber=fp,b.isObject=ot,b.isObjectLike=ut,b.isPlainObject=Ds,b.isRegExp=Hc,b.isSafeInteger=E3,b.isSet=hp,b.isString=da,b.isSymbol=Xt,b.isTypedArray=qi,b.isUndefined=C3,b.isWeakMap=S3,b.isWeakSet=T3,b.join=R_,b.kebabCase=v4,b.last=mn,b.lastIndexOf=O_,b.lowerCase=b4,b.lowerFirst=y4,b.lt=A3,b.lte=I3,b.max=hx,b.maxBy=px,b.mean=gx,b.meanBy=mx,b.min=vx,b.minBy=bx,b.stubArray=Qc,b.stubFalse=Yc,b.stubObject=rx,b.stubString=ix,b.stubTrue=sx,b.multiply=yx,b.nth=L_,b.noConflict=G4,b.noop=Gc,b.now=aa,b.pad=_4,b.padEnd=w4,b.padStart=x4,b.parseInt=$4,b.random=f4,b.reduce=Bw,b.reduceRight=jw,b.repeat=k4,b.replace=E4,b.result=n4,b.round=_x,b.runInContext=P,b.sample=Nw,b.size=Hw,b.snakeCase=C4,b.some=Fw,b.sortedIndex=D_,b.sortedIndexBy=z_,b.sortedIndexOf=H_,b.sortedLastIndex=F_,b.sortedLastIndexBy=q_,b.sortedLastIndexOf=W_,b.startCase=T4,b.startsWith=A4,b.subtract=wx,b.sum=xx,b.sumBy=$x,b.template=I4,b.times=ox,b.toFinite=or,b.toInteger=Re,b.toLength=gp,b.toLower=R4,b.toNumber=vn,b.toSafeInteger=R3,b.toString=Ke,b.toUpper=O4,b.trim=L4,b.trimEnd=P4,b.trimStart=M4,b.truncate=B4,b.unescape=j4,b.uniqueId=lx,b.upperCase=U4,b.upperFirst=Wc,b.each=tp,b.eachRight=np,b.first=Yh,Kc(b,function(){var r={};return Bn(b,function(s,c){Ge.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,dn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),dn(["drop","take"],function(r,s){He.prototype[r]=function(c){c=c===n?1:bt(Re(c),0);var f=this.__filtered__&&!s?new He(this):this.clone();return f.__filtered__?f.__takeCount__=Rt(c,f.__takeCount__):f.__views__.push({size:Rt(c,$e),type:r+(f.__dir__<0?"Right":"")}),f},He.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),dn(["filter","map","takeWhile"],function(r,s){var c=s+1,f=c==ie||c==ee;He.prototype[r]=function(m){var _=this.clone();return _.__iteratees__.push({iteratee:ve(m,3),type:c}),_.__filtered__=_.__filtered__||f,_}}),dn(["head","last"],function(r,s){var c="take"+(s?"Right":"");He.prototype[r]=function(){return this[c](1).value()[0]}}),dn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");He.prototype[r]=function(){return this.__filtered__?new He(this):this[c](1)}}),He.prototype.compact=function(){return this.filter(Vt)},He.prototype.find=function(r){return this.filter(r).head()},He.prototype.findLast=function(r){return this.reverse().find(r)},He.prototype.invokeMap=Me(function(r,s){return typeof r=="function"?new He(this):this.map(function(c){return Ps(c,r,s)})}),He.prototype.reject=function(r){return this.filter(ca(ve(r)))},He.prototype.slice=function(r,s){r=Re(r);var c=this;return c.__filtered__&&(r>0||s<0)?new He(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Re(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},He.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},He.prototype.toArray=function(){return this.take($e)},Bn(He.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),m=b[f?"take"+(s=="last"?"Right":""):s],_=f||/^find/.test(s);m&&(b.prototype[s]=function(){var S=this.__wrapped__,R=f?[1]:arguments,M=S instanceof He,z=R[0],H=M||Ie(S),K=function(Ne){var Fe=m.apply(b,Tr([Ne],R));return f&&se?Fe[0]:Fe};H&&c&&typeof z=="function"&&z.length!=1&&(M=H=!1);var se=this.__chain__,he=!!this.__actions__.length,ye=_&&!se,Le=M&&!he;if(!_&&H){S=Le?S:new He(this);var _e=r.apply(S,R);return _e.__actions__.push({func:sa,args:[K],thisArg:n}),new hn(_e,se)}return ye&&Le?r.apply(this,R):(_e=this.thru(K),ye?f?_e.value()[0]:_e.value():_e)})}),dn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Ro[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(f&&!this.__chain__){var _=this.value();return s.apply(Ie(_)?_:[],m)}return this[c](function(S){return s.apply(Ie(S)?S:[],m)})}}),Bn(He.prototype,function(r,s){var c=b[s];if(c){var f=c.name+"";Ge.call(Ni,f)||(Ni[f]=[]),Ni[f].push({name:s,func:c})}}),Ni[Jo(n,x).name]=[{name:"wrapper",func:n}],He.prototype.clone=jb,He.prototype.reverse=Ub,He.prototype.value=Nb,b.prototype.at=pw,b.prototype.chain=gw,b.prototype.commit=mw,b.prototype.next=vw,b.prototype.plant=yw,b.prototype.reverse=_w,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=ww,b.prototype.first=b.prototype.head,Ss&&(b.prototype[Ss]=bw),b},Bi=mb();Xr?((Xr.exports=Bi)._=Bi,Vl._=Bi):Ct._=Bi}).call(dr)})(rl,rl.exports);var ZP=rl.exports;const mr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>mr(n)(t));case"OR":return e.children.some(n=>mr(n)(t));case"NOT":return!mr(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Zu=e=>{const t=_i(),n=qe(e),i=()=>["useFollowings",n()],o=wi(i,({queryKey:d,signal:h})=>{console.debug("useFollowings");const[,p]=d;if(p==null)return Promise.resolve(null);const{pubkey:g}=p,v=new ys({type:"Followings",pubkey:g}),$=v.firstEventPromise().catch(()=>{throw new Error(`followings not found: ${g}`)});return v.onUpdate(k=>{const w=Ed(k);t.setQueryData(d,w)}),_s({task:v,signal:h}),wr(15e3,`useFollowings: ${g}`)($)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return hr(o.data).pTags().forEach(p=>{const[,g,v,$]=p,k={pubkey:g,petname:$};v!=null&&v.length>0&&(k.mainRelayUrl=v),d.push(k)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},VP=e=>{const{config:t,removeColumn:n}=je(),{followingPubkeys:i}=Zu(()=>({pubkey:e.column.pubkey})),{events:o}=$r(()=>{const a=ZP.uniq([...i()]);return a.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:ur()-4*60*60}],clientEventFilter:l=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(l.content)}});return Nn(()=>{console.log("home",o())}),ln(()=>console.log("home timeline mounted")),vr(()=>console.log("home timeline unmounted")),y(Ei,{get header(){return y(us,{get name(){return e.column.name??"ホーム"},get icon(){return y(Iv,{})},settings:()=>y(Ci,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(ws,{get events(){return o()}})}})},KP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Rv=(e={})=>(()=>{const t=KP();return Ve(t,e,!0,!0),t})(),GP=B('<span class="h-4 w-4 pt-[1px] text-rose-400">'),QP=B('<img alt="icon" class="rounded">'),YP=B('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),JP=B('<div class="notification-event py-1">'),XP=B('<span class="truncate">'),eM=B('<div class="truncate">読み込み中 '),tM=e=>{const{shouldMuteEvent:t}=je(),{showProfile:n}=xr(),i=()=>hr(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=$i(()=>({pubkey:e.event.pubkey})),{event:l,query:u}=wm(()=>an([o()])(([h])=>({eventId:h}))),d=()=>u.isSuccess&&l()==null;return y(le,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const h=YP(),p=h.firstChild,g=p.nextSibling,v=g.firstChild,$=v.nextSibling,k=$.firstChild;return O(p,y(on,{get fallback(){return(()=>{const w=XP();return O(w,()=>e.event.content),w})()},get children(){return y(ze,{get when(){return e.event.content==="+"},get children(){const w=GP();return O(w,y(Ka,{})),w}})}})),O(v,y(le,{get when(){return a()?.picture!=null},get children(){const w=QP();return Ue(()=>ct(w,"src",a()?.picture)),w}})),k.$$click=()=>n(e.event.pubkey),O(k,y(Al,{get pubkey(){return e.event.pubkey}})),h})(),(()=>{const h=JP();return O(h,y(le,{get when(){return l()},get fallback(){return(()=>{const p=eM();return p.firstChild,O(p,o,null),p})()},keyed:!0,children:p=>y(lv,{event:p})})),h})()]}})};st(["click"]);const nM=B("<div>unknown event"),Ov=e=>{const{shouldMuteEvent:t}=je();return y(kt,{get each(){return e.events},children:n=>y(le,{get when(){return!t(n)},get children(){return y(on,{get fallback(){return nM()},get children(){return[y(ze,{get when(){return n.kind===dt.Text},get children(){return y(Zs,{get children(){return y(cv,{event:n})}})}}),y(ze,{get when(){return n.kind===dt.Reaction},get children(){return y(Zs,{get children(){return y(tM,{event:n})}})}}),y(ze,{get when(){return n.kind===6},get children(){return y(Zs,{get children(){return y(Em,{event:n})}})}})]}})}})})},rM=e=>{const{config:t,removeColumn:n}=je(),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return y(Ei,{get header(){return y(us,{get name(){return e.column.name??"通知"},get icon(){return y(Rv,{})},settings:()=>y(Ci,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(Ov,{get events(){return i()}})}})},iM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Wd=(e={})=>(()=>{const t=iM();return Ve(t,e,!0,!0),t})(),sM=e=>{const{config:t,removeColumn:n}=je(),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return y(Ei,{get header(){return y(us,{get name(){return e.column.name??"投稿"},get icon(){return y(Wd,{})},settings:()=>y(Ci,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(ws,{get events(){return i()}})}})},oM=e=>{const{config:t,removeColumn:n}=je(),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return y(Ei,{get header(){return y(us,{get name(){return e.column.name??"リアクション"},get icon(){return y(Cd,{})},settings:()=>y(Ci,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(Ov,{get events(){return i()}})}})},aM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Zd=(e={})=>(()=>{const t=aM();return Ve(t,e,!0,!0),t})(),lM=e=>{const{removeColumn:t}=je(),{events:n}=$r(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:ur()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(i.content)}));return y(Ei,{get header(){return y(us,{get name(){return e.column.name??"リレー"},get icon(){return y(Zd,{})},settings:()=>y(Ci,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(ws,{get events(){return n()}})}})},cM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),Lv=(e={})=>(()=>{const t=cM();return Ve(t,e,!0,!0),t})(),uM=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),dM=e=>{const[t,n]=xe(!1),[i,o]=xe(""),{saveColumn:a}=je(),l=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},h=g=>{o(g.currentTarget.value)},p=g=>{g.preventDefault(),u()};return ln(()=>{o(e.column.query)}),(()=>{const g=uM(),v=g.firstChild,$=v.firstChild,k=$.firstChild,w=$.nextSibling,E=w.firstChild,x=w.nextSibling;return O(k,y(Lv,{})),w.addEventListener("submit",p),E.addEventListener("blur",d),E.addEventListener("change",h),x.$$click=()=>l(),O(x,y(Og,{})),O(g,y(le,{get when(){return t()},get children(){return e.settings()}}),null),Ue(()=>E.value=i()),g})()},fM=e=>{const{removeColumn:t}=je(),{events:n}=$r(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:M9,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}});return y(Ei,{get header(){return y(dM,{get column(){return e.column},settings:()=>y(Ci,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(ws,{get events(){return n()}})}})};st(["click"]);const hM=B('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),pM=()=>{const{config:e}=je();return(()=>{const t=hM();return O(t,y(kt,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return y(on,{get children(){return[y(ze,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:l=>y(VP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(ze,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:l=>y(rM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(ze,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:l=>y(sM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(ze,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:l=>y(oM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(ze,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:l=>y(lM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(ze,{get when(){return n.columnType==="Bookmark"&&n},keyed:!0,children:l=>y(qP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(ze,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:l=>y(fM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},gM=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),mM=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),vM=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),bM=async()=>{const t=await(await fetch(Gu("packageInfo.json"))).text();return JSON.parse(t)},yM=e=>{const[t]=Tg(bM);return y(ki,{get onClose(){return e.onClose},get children(){const n=gM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,h=d.nextSibling,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,$=v.nextSibling;$.nextSibling;const k=g.nextSibling,w=k.nextSibling,E=w.nextSibling,x=E.nextSibling,A=x.nextSibling,L=A.nextSibling,I=L.nextSibling;return I.nextSibling,O(u,()=>t()?.self?.version,null),O(g,y(Ol,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),$),O(I,()=>t()?.self.licenseText),O(n,y(kt,{get each(){return t()?.packages??[]},fallback:"取得中",children:C=>[(()=>{const T=mM(),j=T.firstChild,N=j.nextSibling,re=N.nextSibling,V=re.nextSibling;return V.nextSibling,O(T,()=>C.name,j),O(T,()=>C.version,N),O(T,()=>C.licenseSpdx,V),T})(),(()=>{const T=vM();return O(T,()=>C.licenseText),T})()]}),null),Ue(()=>ct(o,"src",Gu("images/rabbit_app_256.png"))),n}})},_M=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),wM=e=>{const t=Kn(),{saveColumn:n}=je(),i=$o(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(g=>console.error(g))},a=()=>{an([t()])(([g])=>{n(nm({pubkey:g}))}),o()},l=()=>{an([t()])(([g])=>{n(rm({pubkey:g}))}),o()},u=()=>{n(im()),o()},d=()=>{n(kd({query:""})),o()},h=()=>{an([t()])(([g])=>{n(sm({pubkey:g}))}),o()},p=()=>{an([t()])(([g])=>{n(om({pubkey:g}))}),o()};return y(ki,{get onClose(){return e.onClose},get children(){const g=_M(),v=g.firstChild,$=v.firstChild,k=v.nextSibling,w=k.firstChild,E=k.nextSibling,x=E.firstChild,A=E.nextSibling,L=A.firstChild,I=A.nextSibling,C=I.firstChild,T=I.nextSibling,j=T.firstChild;return v.$$click=()=>a(),O($,y(Iv,{})),k.$$click=()=>l(),O(w,y(Rv,{})),E.$$click=()=>u(),O(x,y(Zd,{})),A.$$click=()=>d(),O(L,y(Lv,{})),I.$$click=()=>h(),O(C,y(Wd,{})),T.$$click=()=>p(),O(j,y(Cd,{})),g}})};st(["click"]);const xM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),$M=(e={})=>(()=>{const t=xM();return Ve(t,e,!0,!0),t})(),kM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),EM=(e={})=>(()=>{const t=kM();return Ve(t,e,!0,!0),t})(),CM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),SM=(e={})=>(()=>{const t=CM();return Ve(t,e,!0,!0),t})();function TM(e){const{config:t}=je(),n=qe(e),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[dt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>pr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const AM=e=>{const t=qe(e),n=wi(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return Y1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},IM=e=>new Promise(t=>{setTimeout(t,e)}),RM=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),OM=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),LM=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),PM=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),MM=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),BM=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),jM=B('<div class="shrink-0 text-xs">読み込み中'),UM=B('<div class="shrink-0 text-xs">フォローされています'),NM=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),DM=B('<div class="truncate text-xl font-bold">'),zM=B('<div class="truncate text-xs">@'),HM=B('<span class="inline-block h-3 w-3">'),FM=B('<span class="inline-block h-4 w-4 text-blue-400">'),qM=B('<div class="flex items-center text-xs">'),WM=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),ZM=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),VM=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),KM=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),GM=B('<ul class="border-t px-5 py-2 text-xs">'),QM=B('<ul class="border-t p-1">'),YM=B('<div class="h-12 shrink-0">'),JM=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),XM=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),eB=B('<span class="inline-block h-4 w-4 text-rose-500">'),tB=B('<span class="text-sm">読み込み中'),nB=B('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),rB=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),iB=e=>{const{count:t}=TM(()=>({pubkey:e.pubkey}));return qe(t)},sB=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=je(),a=Ll(),l=Kn(),{showProfileEdit:u}=xr(),d=qe(()=>xo(e.pubkey)),[h,p]=xe(!1),[g,v]=xe(!1),[$,k]=xe(!1),[w,E]=xe(!1),x=()=>E(null),{profile:A,query:L}=$i(()=>({pubkey:e.pubkey})),{verification:I,query:C}=AM(()=>an([A()?.nip05])(([te])=>({nip05:te}))),T=()=>{const te=A()?.nip05;if(te==null)return null;const[G,ne]=te.split("@");return ne==null?null:G==="_"?{domain:ne,ident:ne}:{user:G,domain:ne,ident:te}},j=()=>I()?.pubkey===e.pubkey,N=()=>o(e.pubkey),{followingPubkeys:re,invalidateFollowings:V,query:Q}=Zu(()=>an([l()])(([te])=>({pubkey:te}))),F=()=>re().includes(e.pubkey),Y=()=>Q.refetch(),{followingPubkeys:ie,query:W}=Zu(()=>({pubkey:e.pubkey})),ee=()=>{const te=l();return te!=null&&ie().includes(te)},ae=pi({mutationKey:["updateContacts"],mutationFn:(...te)=>a.updateContacts(...te).then(G=>Promise.allSettled(G.map(wr(5e3)))),onSuccess:te=>{const G=te.filter(me=>me.status==="fulfilled").length,ne=te.length-G;G===te.length?console.log("succeeded to update contacts"):G>0?console.log(`succeeded to update contacts for ${G} relays but failed for ${ne} relays`):console.error("failed to update contacts")},onError:te=>{console.error("failed to update contacts: ",te)},onSettled:()=>{V().then(()=>Q.refetch()).catch(te=>console.error("failed to refetch contacts",te))}}),J=async te=>{try{const G=l();if(G==null)return;p(!0),await Y(),await IM(3e3);const ne=re();console.debug("current pubkeys",ne),await ae.mutateAsync({relayUrls:t().relayUrls,pubkey:G,content:Q.data?.content??"",followingPubkeys:pr(te(ne))})}finally{p(!1)}},fe=()=>{J(te=>[...te,e.pubkey]).catch(te=>{console.log("failed to follow",te)})},pe=()=>{window.confirm("本当にフォロー解除しますか？")&&J(te=>te.filter(G=>G!==e.pubkey)).catch(te=>{console.log("failed to unfollow",te)})},$e=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(te=>window.alert(te))}},{content:()=>N()?"ミュート解除":"ミュート",onSelect:()=>{N()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===l(),content:()=>F()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{F()?pe():fe()}}],{events:Ce}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:ur()}],continuous:!1}));return y(ki,{onClose:()=>e.onClose?.(),get children(){return[y(le,{get when(){return L.isFetched},get fallback(){return"loading"},get children(){return[y(le,{get when(){return A()?.banner},get fallback(){return YM()},keyed:!0,children:te=>(()=>{const G=JM(),ne=G.firstChild;return ct(ne,"src",te),G})()}),(()=>{const te=NM(),G=te.firstChild,ne=G.firstChild,me=G.nextSibling,q=me.firstChild;return O(ne,y(le,{get when(){return A()?.picture},keyed:!0,children:de=>(()=>{const Se=XM();return ct(Se,"src",de),Se})()})),O(q,y(on,{get children(){return[y(ze,{get when(){return e.pubkey===l()},get children(){const de=RM();return de.$$click=()=>u(),de}}),y(ze,{get when(){return ae.isLoading||h()},get children(){return OM()}}),y(ze,{get when(){return Q.isLoading||Q.isFetching},get children(){return LM()}}),y(ze,{get when(){return F()},get children(){const de=PM();return de.$$click=()=>pe(),de.addEventListener("mouseleave",()=>v(!1)),de.addEventListener("mouseenter",()=>v(!0)),O(de,y(le,{get when(){return!g()},fallback:"フォロー解除",children:"フォロー中"})),Ue(()=>de.disabled=ae.isLoading),de}}),y(ze,{get when(){return!F()},get children(){const de=MM();return de.$$click=()=>fe(),Ue(()=>de.disabled=ae.isLoading),de}})]}}),null),O(q,y(Tm,{menu:$e,get children(){const de=BM();return O(de,y(Cm,{})),de}}),null),O(me,y(on,{get children(){return[y(ze,{get when(){return W.isLoading},get children(){return jM()}}),y(ze,{get when(){return ee()},get children(){return UM()}})]}}),null),te})(),(()=>{const te=WM(),G=te.firstChild,ne=G.firstChild,me=ne.nextSibling,q=me.firstChild;return O(G,y(le,{get when(){return(A()?.display_name?.length??0)>0},get children(){const de=DM();return O(de,()=>A()?.display_name),de}}),ne),O(ne,y(le,{get when(){return(A()?.name?.length??0)>0},get children(){const de=zM();return de.firstChild,O(de,()=>A()?.name,null),de}}),null),O(ne,y(le,{get when(){return(A()?.nip05?.length??0)>0},get children(){const de=qM();return O(de,()=>T()?.ident,null),O(de,y(on,{get fallback(){return(()=>{const Se=eB();return O(Se,y(SM,{})),Se})()},get children(){return[y(ze,{get when(){return C.isLoading},get children(){const Se=HM();return O(Se,y($M,{})),Se}}),y(ze,{get when(){return j()},get children(){const Se=FM();return O(Se,y(EM,{})),Se}})]}}),null),de}}),null),O(q,d),te})(),y(le,{get when(){return(A()?.about??"").length>0},get children(){const te=ZM();return O(te,()=>A()?.about),te}}),(()=>{const te=KM(),G=te.firstChild,ne=G.firstChild,me=ne.nextSibling;return G.$$click=()=>E("Following"),O(me,y(le,{get when(){return W.isFetched},get fallback(){return tB()},get children(){return ie().length}})),O(te,y(le,{get when(){return!t().hideCount},get children(){const q=VM(),de=q.firstChild,Se=de.nextSibling;return O(Se,y(le,{get when(){return $()},get fallback(){return(()=>{const rt=nB();return rt.$$click=()=>k(!0),rt})()},keyed:!0,get children(){return y(iB,{get pubkey(){return e.pubkey}})}})),q}}),null),te})(),y(le,{get when(){return(A()?.website??"").length>0},get children(){const te=GM();return O(te,y(le,{get when(){return A()?.website},keyed:!0,children:G=>(()=>{const ne=rB(),me=ne.firstChild;return O(me,y(Zd,{})),O(ne,y(Ol,{class:"text-blue-500 underline",href:G}),null),ne})()})),te}})]}}),y(on,{get children(){return y(ze,{get when(){return w()==="Following"},get children(){return y(Du,{get data(){return ie()},pubkeyExtractor:te=>te,onClose:x})}})}}),(()=>{const te=QM();return O(te,y(ws,{get events(){return Ce()}})),te})()]}})};st(["click"]);function oB(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var aB=oB,lB=xi,cB=function(){try{var e=lB(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Pv=cB,og=Pv;function uB(e,t,n){t=="__proto__"&&og?og(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Mv=uB,dB=Mv,fB=Ju,hB=Object.prototype,pB=hB.hasOwnProperty;function gB(e,t,n){var i=e[t];(!(pB.call(e,t)&&fB(i,n))||n===void 0&&!(t in e))&&dB(e,t,n)}var Vd=gB,mB=Vd,vB=Mv;function bB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?vB(n,u,d):mB(n,u,d)}return n}var ko=bB,yB=ko,_B=Pl;function wB(e,t){return e&&yB(t,_B(t),e)}var xB=wB;function $B(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var kB=$B,EB=Wn,CB=Dd,SB=kB,TB=Object.prototype,AB=TB.hasOwnProperty;function IB(e){if(!EB(e))return SB(e);var t=CB(e),n=[];for(var i in e)i=="constructor"&&(t||!AB.call(e,i))||n.push(i);return n}var RB=IB,OB=vv,LB=RB,PB=yv;function MB(e){return PB(e)?OB(e,!0):LB(e)}var Kd=MB,BB=ko,jB=Kd;function UB(e,t){return e&&BB(t,jB(t),e)}var NB=UB,il={exports:{}};il.exports;(function(e,t){var n=On,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(h,p){if(p)return h.slice();var g=h.length,v=u?u(g):new h.constructor(g);return h.copy(v),v}e.exports=d})(il,il.exports);var DB=il.exports;function zB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var HB=zB,FB=ko,qB=Ld;function WB(e,t){return FB(e,qB(e),t)}var ZB=WB,VB=bv,KB=VB(Object.getPrototypeOf,Object),Gd=KB,GB=Od,QB=Gd,YB=Ld,JB=pv,XB=Object.getOwnPropertySymbols,ej=XB?function(e){for(var t=[];e;)GB(t,YB(e)),e=QB(e);return t}:JB,Bv=ej,tj=ko,nj=Bv;function rj(e,t){return tj(e,nj(e),t)}var ij=rj,sj=hv,oj=Bv,aj=Kd;function lj(e){return sj(e,aj,oj)}var Qd=lj,cj=Object.prototype,uj=cj.hasOwnProperty;function dj(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&uj.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var fj=dj,ag=fv;function hj(e){var t=new e.constructor(e.byteLength);return new ag(t).set(new ag(e)),t}var Yd=hj,pj=Yd;function gj(e,t){var n=t?pj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var mj=gj,vj=/\w*$/;function bj(e){var t=new e.constructor(e.source,vj.exec(e));return t.lastIndex=e.lastIndex,t}var yj=bj,lg=ds,cg=lg?lg.prototype:void 0,ug=cg?cg.valueOf:void 0;function _j(e){return ug?Object(ug.call(e)):{}}var wj=_j,xj=Yd;function $j(e,t){var n=t?xj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var kj=$j,Ej=Yd,Cj=mj,Sj=yj,Tj=wj,Aj=kj,Ij="[object Boolean]",Rj="[object Date]",Oj="[object Map]",Lj="[object Number]",Pj="[object RegExp]",Mj="[object Set]",Bj="[object String]",jj="[object Symbol]",Uj="[object ArrayBuffer]",Nj="[object DataView]",Dj="[object Float32Array]",zj="[object Float64Array]",Hj="[object Int8Array]",Fj="[object Int16Array]",qj="[object Int32Array]",Wj="[object Uint8Array]",Zj="[object Uint8ClampedArray]",Vj="[object Uint16Array]",Kj="[object Uint32Array]";function Gj(e,t,n){var i=e.constructor;switch(t){case Uj:return Ej(e);case Ij:case Rj:return new i(+e);case Nj:return Cj(e,n);case Dj:case zj:case Hj:case Fj:case qj:case Wj:case Zj:case Vj:case Kj:return Aj(e,n);case Oj:return new i;case Lj:case Bj:return new i(e);case Pj:return Sj(e);case Mj:return new i;case jj:return Tj(e)}}var Qj=Gj,Yj=Wn,dg=Object.create,Jj=function(){function e(){}return function(t){if(!Yj(t))return{};if(dg)return dg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),Xj=Jj,eU=Xj,tU=Gd,nU=Dd;function rU(e){return typeof e.constructor=="function"&&!nU(e)?eU(tU(e)):{}}var iU=rU,sU=Ml,oU=Jr,aU="[object Map]";function lU(e){return oU(e)&&sU(e)==aU}var cU=lU,uU=cU,dU=Ud,fg=Nd,hg=fg&&fg.isMap,fU=hg?dU(hg):uU,hU=fU,pU=Ml,gU=Jr,mU="[object Set]";function vU(e){return gU(e)&&pU(e)==mU}var bU=vU,yU=bU,_U=Ud,pg=Nd,gg=pg&&pg.isSet,wU=gg?_U(gg):yU,xU=wU,$U=Rd,kU=aB,EU=Vd,CU=xB,SU=NB,TU=DB,AU=HB,IU=ZB,RU=ij,OU=_v,LU=Qd,PU=Ml,MU=fj,BU=Qj,jU=iU,UU=Gn,NU=Md,DU=hU,zU=Wn,HU=xU,FU=Pl,qU=Kd,WU=1,ZU=2,VU=4,jv="[object Arguments]",KU="[object Array]",GU="[object Boolean]",QU="[object Date]",YU="[object Error]",Uv="[object Function]",JU="[object GeneratorFunction]",XU="[object Map]",eN="[object Number]",Nv="[object Object]",tN="[object RegExp]",nN="[object Set]",rN="[object String]",iN="[object Symbol]",sN="[object WeakMap]",oN="[object ArrayBuffer]",aN="[object DataView]",lN="[object Float32Array]",cN="[object Float64Array]",uN="[object Int8Array]",dN="[object Int16Array]",fN="[object Int32Array]",hN="[object Uint8Array]",pN="[object Uint8ClampedArray]",gN="[object Uint16Array]",mN="[object Uint32Array]",Xe={};Xe[jv]=Xe[KU]=Xe[oN]=Xe[aN]=Xe[GU]=Xe[QU]=Xe[lN]=Xe[cN]=Xe[uN]=Xe[dN]=Xe[fN]=Xe[XU]=Xe[eN]=Xe[Nv]=Xe[tN]=Xe[nN]=Xe[rN]=Xe[iN]=Xe[hN]=Xe[pN]=Xe[gN]=Xe[mN]=!0;Xe[YU]=Xe[Uv]=Xe[sN]=!1;function Aa(e,t,n,i,o,a){var l,u=t&WU,d=t&ZU,h=t&VU;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!zU(e))return e;var p=UU(e);if(p){if(l=MU(e),!u)return AU(e,l)}else{var g=PU(e),v=g==Uv||g==JU;if(NU(e))return TU(e,u);if(g==Nv||g==jv||v&&!o){if(l=d||v?{}:jU(e),!u)return d?RU(e,SU(l,e)):IU(e,CU(l,e))}else{if(!Xe[g])return o?e:{};l=BU(e,g,u)}}a||(a=new $U);var $=a.get(e);if($)return $;a.set(e,l),HU(e)?e.forEach(function(E){l.add(Aa(E,t,n,E,e,a))}):DU(e)&&e.forEach(function(E,x){l.set(x,Aa(E,t,n,x,e,a))});var k=h?d?LU:OU:d?qU:FU,w=p?void 0:k(e);return kU(w||e,function(E,x){w&&(x=E,E=e[x]),EU(l,x,Aa(E,t,n,x,e,a))}),l}var vN=Aa;function bN(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var yN=bN;function _N(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var wN=_N,xN=jl,$N=wN;function kN(e,t){return t.length<2?e:xN(e,$N(t,0,-1))}var EN=kN,CN=ks,SN=yN,TN=EN,AN=Es;function IN(e,t){return t=CN(t,e),e=TN(e,t),e==null||delete e[AN(SN(t))]}var RN=IN,ON=fs,LN=Gd,PN=Jr,MN="[object Object]",BN=Function.prototype,jN=Object.prototype,Dv=BN.toString,UN=jN.hasOwnProperty,NN=Dv.call(Object);function DN(e){if(!PN(e)||ON(e)!=MN)return!1;var t=LN(e);if(t===null)return!0;var n=UN.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Dv.call(n)==NN}var zN=DN,HN=zN;function FN(e){return HN(e)?void 0:e}var qN=FN,mg=ds,WN=Pd,ZN=Gn,vg=mg?mg.isConcatSpreadable:void 0;function VN(e){return ZN(e)||WN(e)||!!(vg&&e&&e[vg])}var KN=VN,GN=Od,QN=KN;function zv(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=QN),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?zv(u,t-1,n,i,o):GN(o,u):i||(o[o.length]=u)}return o}var YN=zv,JN=YN;function XN(e){var t=e==null?0:e.length;return t?JN(e,1):[]}var eD=XN;function tD(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var nD=tD,rD=nD,bg=Math.max;function iD(e,t,n){return t=bg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=bg(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),rD(e,this,u)}}var sD=iD;function oD(e){return function(){return e}}var aD=oD,lD=aD,yg=Pv,cD=Tv,uD=yg?function(e,t){return yg(e,"toString",{configurable:!0,enumerable:!1,value:lD(t),writable:!0})}:cD,dD=uD,fD=800,hD=16,pD=Date.now;function gD(e){var t=0,n=0;return function(){var i=pD(),o=hD-(i-n);if(n=i,o>0){if(++t>=fD)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var mD=gD,vD=dD,bD=mD,yD=bD(vD),_D=yD,wD=eD,xD=sD,$D=_D;function kD(e){return $D(xD(e,void 0,wD),e+"")}var ED=kD,CD=Fd,SD=vN,TD=RN,AD=ks,ID=ko,RD=qN,OD=ED,LD=Qd,PD=1,MD=2,BD=4,jD=OD(function(e,t){var n={};if(e==null)return n;var i=!1;t=CD(t,function(a){return a=AD(a,e),i||(i=a.length>1),a}),ID(e,LD(e),n),i&&(n=SD(n,PD|MD|BD,RD));for(var o=t.length;o--;)TD(n,t[o]);return n}),UD=jD;const ND=po(UD);var DD="Expected a function";function zD(e){if(typeof e!="function")throw new TypeError(DD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var HD=zD,FD=Vd,qD=ks,WD=Bd,_g=Wn,ZD=Es;function VD(e,t,n,i){if(!_g(e))return e;t=qD(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=ZD(t[o]),h=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var p=u[d];h=i?i(p,d,u):void 0,h===void 0&&(h=_g(p)?p:WD(t[o+1])?[]:{})}FD(u,d,h),u=u[d]}return e}var KD=VD,GD=jl,QD=KD,YD=ks;function JD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=GD(e,l);n(u,l)&&QD(a,YD(l,e),u)}return a}var XD=JD,ez=Fd,tz=qd,nz=XD,rz=Qd;function iz(e,t){if(e==null)return{};var n=ez(rz(e),function(i){return[i]});return t=tz(t),nz(e,n,function(i,o){return t(i,o[0])})}var sz=iz,oz=qd,az=HD,lz=sz;function cz(e,t){return lz(e,az(oz(t)))}var uz=cz;const dz=po(uz),fz=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),hz=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),pz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),gz=B('<div class="px-4 pt-4">読み込み中...'),mz=B('<div><span class="font-bold">その他の項目</span><div>'),vz=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),bz=B('<div class="h-24 shrink-0">'),yz=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),_z="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",wz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",xz=new RegExp(`^${_z}$`),Hv=new RegExp(`^${wz}$`),$z=e=>xz.test(e),kz=e=>Hv.test(e),Ez=e=>{const t=Kn(),{config:n}=je(),[i,o]=xe(""),[a,l]=xe(""),[u,d]=xe(""),[h,p]=xe(""),[g,v]=xe(""),[$,k]=xe(""),[w,E]=xe(""),[x,A]=xe(""),{profile:L,invalidateProfile:I,query:C}=$i(()=>an([t()])(([Y])=>({pubkey:Y}))),{updateProfile:T}=Ll(),j=pi({mutationKey:["updateProfile"],mutationFn:(...Y)=>T(...Y).then(ie=>Promise.allSettled(ie.map(wr(1e4)))),onSuccess:Y=>{const ie=Y.filter(ee=>ee.status==="fulfilled").length,W=Y.length-ie;ie===Y.length?window.alert("更新しました"):ie>0?window.alert(`${W}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),I().then(()=>C.refetch()).catch(ee=>console.error(ee)),e.onClose()},onError:Y=>{console.error("failed to delete",Y)}}),N=()=>C.isLoading||j.isLoading,re=()=>N();setInterval(()=>console.log(C.isLoading,j.isLoading),1e3);const V=()=>ND(L(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Q=Y=>{Y.preventDefault();const ie=t();if(ie==null)return;const W=dz({picture:i(),banner:a(),name:u(),display_name:h(),about:g(),website:$(),nip05:w(),lud06:$z(x())?x():null,lud16:kz(x())?x():null},ee=>ee==null||ee.length===0);j.mutate({relayUrls:n().relayUrls,pubkey:ie,profile:W,otherProperties:V()})},F=Y=>Y.key==="Enter"&&Y.preventDefault();return ln(()=>{const Y=L();Y!=null&&(C.refetch().catch(ie=>console.error(ie)),Ia(()=>{o(ie=>Y.picture??ie),l(ie=>Y.banner??ie),d(ie=>Y.name??ie),p(ie=>Y.display_name??ie),v(ie=>Y.about??ie),k(ie=>Y.website??ie),E(ie=>Y.nip05??ie),Y.lud16!=null?A(Y.lud16):Y.lud06!=null&&A(Y.lud06)}))}),y(ki,{closeButton:()=>y(Yu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Y=pz(),ie=Y.firstChild;return O(Y,y(le,{get when(){return a().length>0},get fallback(){return bz()},keyed:!0,get children(){const W=fz(),ee=W.firstChild;return Ue(()=>ct(ee,"src",a())),W}}),ie),O(ie,y(le,{get when(){return i().length>0},get children(){const W=hz();return Ue(()=>ct(W,"src",i())),W}})),Y})(),y(le,{get when(){return N()},get children(){return gz()}}),(()=>{const Y=vz(),ie=Y.firstChild,W=ie.firstChild,ee=W.firstChild,ae=ee.nextSibling,J=W.nextSibling,fe=J.firstChild,pe=fe.nextSibling,$e=J.nextSibling,Ce=$e.firstChild,te=Ce.nextSibling,G=te.firstChild,ne=G.nextSibling,me=$e.nextSibling,q=me.firstChild,de=q.nextSibling,Se=me.nextSibling,rt=Se.firstChild,Et=rt.nextSibling,Ee=Se.nextSibling,et=Ee.firstChild,Qe=et.nextSibling,It=Ee.nextSibling,cn=It.firstChild,_t=cn.nextSibling,kr=It.nextSibling,Si=kr.firstChild,Pn=Si.nextSibling,mt=Pn.nextSibling,_n=kr.nextSibling,Mn=_n.firstChild,Ti=Mn.nextSibling;return ie.addEventListener("submit",Q),ae.$$keydown=F,ae.addEventListener("blur",we=>o(we.currentTarget.value)),pe.$$keydown=F,pe.addEventListener("blur",we=>l(we.currentTarget.value)),ne.$$keydown=F,ne.addEventListener("change",we=>d(we.currentTarget.value)),de.$$keydown=F,de.addEventListener("change",we=>p(we.currentTarget.value)),Et.addEventListener("change",we=>v(we.currentTarget.value)),Qe.$$keydown=F,Qe.addEventListener("change",we=>k(we.currentTarget.value)),_t.$$keydown=F,_t.addEventListener("change",we=>E(we.currentTarget.value)),mt.$$keydown=F,mt.addEventListener("change",we=>A(we.currentTarget.value)),O(ie,y(le,{get when(){return Object.entries(V()).length>0},get children(){const we=mz(),Qn=we.firstChild,Gt=Qn.nextSibling;return O(Gt,y(kt,{get each(){return Object.entries(V())},children:([Ft,Er])=>(()=>{const Yn=yz(),Jn=Yn.firstChild,Cr=Jn.nextSibling;return O(Jn,Ft),O(Cr,Er),Yn})()})),we}}),_n),Ti.$$click=()=>e.onClose(),O(ie,y(le,{get when(){return j.isLoading},children:"保存中..."}),null),Ue(we=>{const Qn=re(),Gt=re(),Ft=re(),Er=re(),Yn=re(),Jn=re(),Cr=Hv.source,Ai=re(),Ii=re(),Ri=j.isLoading;return Qn!==we._v$&&(ae.disabled=we._v$=Qn),Gt!==we._v$2&&(pe.disabled=we._v$2=Gt),Ft!==we._v$3&&(ne.disabled=we._v$3=Ft),Er!==we._v$4&&(de.disabled=we._v$4=Er),Yn!==we._v$5&&(Et.disabled=we._v$5=Yn),Jn!==we._v$6&&(Qe.disabled=we._v$6=Jn),Cr!==we._v$7&&ct(_t,"pattern",we._v$7=Cr),Ai!==we._v$8&&(_t.disabled=we._v$8=Ai),Ii!==we._v$9&&(mt.disabled=we._v$9=Ii),Ri!==we._v$10&&(Mn.disabled=we._v$10=Ri),we},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Ue(()=>ae.value=i()),Ue(()=>pe.value=a()),Ue(()=>ne.value=u()),Ue(()=>de.value=h()),Ue(()=>Et.value=g()),Ue(()=>Qe.value=$()),Ue(()=>_t.value=w()),Ue(()=>mt.value=x()),Y})()]}})};st(["keydown","click"]);const Cz=()=>{const e=Kn(),{modalState:t,showProfile:n,closeModal:i}=xr();return y(le,{get when(){return t()},keyed:!0,children:o=>y(on,{get children(){return[y(ze,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>y(sB,{pubkey:a,onClose:i})}),y(ze,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return y(Ez,{onClose:()=>an([e()])(([a])=>{n(a)})})}}),y(ze,{get when(){return o.type==="AddColumn"},get children(){return y(wM,{onClose:i})}}),y(ze,{get when(){return o.type==="About"},get children(){return y(yM,{onClose:i})}})]}})})},Sz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),Tz=(e={})=>(()=>{const t=Sz();return Ve(t,e,!0,!0),t})(),Az=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),wg=(e={})=>(()=>{const t=Az();return Ve(t,e,!0,!0),t})(),Iz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),Rz=(e={})=>(()=>{const t=Iz();return Ve(t,e,!0,!0),t})(),Oz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),Lz=(e={})=>(()=>{const t=Oz();return Ve(t,e,!0,!0),t})(),Pz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),Mz=(e={})=>(()=>{const t=Pz();return Ve(t,e,!0,!0),t})(),Bz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),jz=(e={})=>(()=>{const t=Bz();return Ve(t,e,!0,!0),t})(),xg=lt.string().length(64).regex(/^[0-9a-f]{64}$/),Vu=lt.string().regex(/^\w+$/),Uz=lt.object({shortcode:Vu,url:lt.string().url(),keywords:lt.optional(lt.array(Vu))}),Nz=lt.object({manifest:lt.literal("emojipack_v1"),name:lt.string(),emojis:lt.array(Uz),description:lt.optional(lt.string()),author:lt.optional(xg),publisher:lt.optional(xg)}).refine(e=>Av(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Fv=lt.record(Vu,lt.string().url());Nz.or(Fv);const Dz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),zz=B('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),Hz=B('<div class="py-2"><h3 class="font-bold">リレー</h3><p class="py-1"> 個のリレーが設定されています</p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Fz=B('<div class="py-2"><h3 class="pb-1 font-bold">インポート</h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">拡張機能からインポート'),Ku=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),qz=B('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Wz=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Zz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Vz=B('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),Kz=B('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),Gz=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Qz=B('<div class="py-2"><h3 class="font-bold">絵文字のインポート</h3><p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">インポート'),Yz=B('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),Jz=B('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Xz=B('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),eH=B('<div class="p-4">'),tH=B('<h2 class="flex-1 text-center text-lg font-bold">設定'),nH=B('<ul class="flex flex-col">'),rH=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),iH=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),qv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,sH=qv("https?"),oH=qv("wss?"),aH=()=>{const e=Kn(),{showProfile:t,showProfileEdit:n}=xr();return(()=>{const i=zz(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;return l.$$click=()=>an([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},lH=()=>{const{config:e,addRelay:t,removeRelay:n}=je(),[i,o]=xe(""),a=u=>{u.preventDefault(),i().length!==0&&(t(i()),o(""))},l=async()=>{if(window.nostr==null)return;const u=Object.entries(await window.nostr?.getRelays?.()??[]),d=u.map(([v])=>v).join(`
`);if(u.length===0){window.alert("リレーが設定されていません");return}if(!window.confirm(`これらのリレーをインポートしますか:
${d}`))return;const h=e().relayUrls.length;Ia(()=>{u.forEach(([v])=>{t(v)})});const g=e().relayUrls.length-h;window.alert(`${g} 個のリレーをインポートしました`)};return[(()=>{const u=Hz(),d=u.firstChild,h=d.nextSibling,p=h.firstChild,g=h.nextSibling,v=g.nextSibling,$=v.firstChild;return O(h,()=>e().relayUrls.length,p),O(g,y(kt,{get each(){return e().relayUrls},children:k=>(()=>{const w=Ku(),E=w.firstChild,x=E.nextSibling;return O(E,k),x.$$click=()=>n(k),O(x,y(cs,{})),w})()})),v.addEventListener("submit",a),$.addEventListener("change",k=>o(k.currentTarget.value)),ct($,"pattern",oH),Ue(()=>$.value=i()),u})(),(()=>{const u=Fz(),d=u.firstChild,h=d.nextSibling;return h.$$click=()=>{l().catch(p=>{console.error("failed to import relays",p),window.alert("インポートに失敗しました")})},u})()]},cH=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],uH=()=>{const{config:e,setConfig:t}=je(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=qz(),o=i.firstChild,a=o.nextSibling;return O(a,y(kt,{each:cH,children:({id:l,name:u,example:d})=>(()=>{const h=Wz(),p=h.firstChild,g=p.nextSibling;return p.$$click=()=>n(l),O(p,u),O(g,d),Ue(v=>{const $=e().dateFormat===l,k=e().dateFormat===l,w=e().dateFormat!==l,E=e().dateFormat!==l;return $!==v._v$&&p.classList.toggle("bg-rose-300",v._v$=$),k!==v._v$2&&p.classList.toggle("text-white",v._v$2=k),w!==v._v$3&&p.classList.toggle("bg-white",v._v$3=w),E!==v._v$4&&p.classList.toggle("text-rose-300",v._v$4=E),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),h})()})),i})()},Ks=e=>(()=>{const t=Zz();return t.$$click=n=>e.onClick(n),Ue(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&ct(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),dH=()=>{const{config:e,setConfig:t}=je(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=Vz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,O(u,y(Ks,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),O(d,y(Ks,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},fH=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=je(),[i,o]=xe(""),[a,l]=xe(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&(t({shortcode:i(),url:a()}),o(""),l(""))};return(()=>{const d=Kz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,$=v.firstChild,k=$.nextSibling,w=v.nextSibling,E=w.firstChild,x=E.nextSibling;return O(p,y(kt,{get each(){return Object.values(e().customEmojis)},children:({shortcode:A,url:L})=>(()=>{const I=Gz(),C=I.firstChild,T=C.nextSibling,j=T.nextSibling;return ct(C,"src",L),ct(C,"alt",A),O(T,A),j.$$click=()=>n(A),O(j,y(cs,{})),I})()})),g.addEventListener("submit",u),k.addEventListener("change",A=>o(A.currentTarget.value)),x.addEventListener("change",A=>l(A.currentTarget.value)),ct(x,"pattern",sH),Ue(()=>k.value=i()),Ue(()=>x.value=a()),d})()},hH=()=>{const{saveEmojis:e}=je(),[t,n]=xe(""),i=o=>{if(o.preventDefault(),t().length!==0)try{const a=Fv.parse(JSON.parse(t())),l=Dz(a);e(l),n("")}catch(a){const l=a instanceof Error?`:${a.message}`:"";window.alert(`JSONの読み込みに失敗しました${l}`)}};return(()=>{const o=Qz(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling,d=u.firstChild;return u.addEventListener("submit",i),d.addEventListener("change",h=>n(h.currentTarget.value)),Ue(()=>d.value=t()),o})()},pH=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=je(),[o,a]=xe(""),l=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=Yz(),d=u.firstChild,h=d.nextSibling;return O(h,y(kt,{get each(){return e().mutedPubkeys},children:p=>(()=>{const g=Ku(),v=g.firstChild,$=v.nextSibling;return O(v,y(Al,{pubkey:p})),$.$$click=()=>t(p),O($,y(cs,{})),g})()})),u})(),(()=>{const u=Jz(),d=u.firstChild,h=d.nextSibling,p=h.nextSibling,g=p.firstChild;return O(h,y(kt,{get each(){return e().mutedKeywords},children:v=>(()=>{const $=Ku(),k=$.firstChild,w=k.nextSibling;return O(k,v),w.$$click=()=>i(v),O(w,y(cs,{})),$})()})),p.addEventListener("submit",l),g.addEventListener("change",v=>a(v.currentTarget.value)),Ue(()=>g.value=o()),u})()]},gH=()=>{const{config:e,setConfig:t}=je(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=Xz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild;d.firstChild;const h=d.nextSibling;h.firstChild;const p=h.nextSibling;return p.firstChild,O(d,y(Ks,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),O(h,y(Ks,{get value(){return e().showImage},onClick:()=>i()}),null),O(p,y(Ks,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},mH=e=>{const[t,n]=xe(null),i=[{name:()=>"プロフィール",icon:()=>y(Wd,{}),render:()=>y(aH,{})},{name:()=>"リレー",icon:()=>y(jz,{}),render:()=>y(lH,{})},{name:()=>"表示",icon:()=>y(Mz,{}),render:()=>[y(uH,{}),y(dH,{}),y(gH,{})]},{name:()=>"カスタム絵文字",icon:()=>y(rv,{}),render:()=>[y(fH,{}),y(hH,{})]},{name:()=>"ミュート",icon:()=>y(Lz,{}),render:()=>y(pH,{})}],o=()=>{const a=t();return a==null?null:i[a]};return y(ki,{get onClose(){return e.onClose},get children(){const a=eH();return O(a,y(le,{get when(){return o()},get fallback(){return[tH(),(()=>{const l=nH();return O(l,y(kt,{each:i,children:(u,d)=>(()=>{const h=rH(),p=h.firstChild,g=p.firstChild;return p.$$click=()=>n(d),O(g,()=>u.icon()),O(p,()=>u.name(),null),h})()})),l})()]},keyed:!0,children:l=>(()=>{const u=iH(),d=u.firstChild,h=d.nextSibling;return d.$$click=()=>n(null),O(d,y(Yu,{})),O(h,()=>l.render()),u})()})),a}})};st(["click"]);const vH=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),bH=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),yH=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),_H=()=>{let e,t;const{saveColumn:n}=je(),i=$o(),[o,a]=xe(""),l=u=>{u.preventDefault(),n(kd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return y(Sd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=bH();return O(u,y(wg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=vH(),d=u.firstChild,h=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?br(p,d):t=d,O(h,y(wg,{})),Ue(()=>d.value=o()),u}})},wH=()=>{let e;const{showAddColumn:t,showAbout:n}=xr(),{config:i}=je(),[o,a]=xe(!1),[l,u]=xe(!1),d=()=>{e?.focus(),e?.click()},h=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return Nu(()=>({commandType:"openPostForm",handler:()=>{h(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=yH(),$=v.firstChild,k=$.firstChild,w=k.firstChild,E=k.nextSibling,x=E.nextSibling,A=x.firstChild,L=A.nextSibling,I=L.nextSibling,C=I.firstChild,T=$.nextSibling;return w.$$click=()=>g(),O(w,y(Rz,{})),O(k,y(_H,{}),null),A.$$click=()=>t(),O(A,y(Sm,{})),L.$$click=()=>u(j=>!j),O(L,y(Tz,{})),I.$$click=()=>n(),O(T,y(iv,{textAreaRef:j=>{e=j},onClose:p})),O(v,y(le,{get when(){return l()},get children(){return y(mH,{onClose:()=>u(!1)})}}),null),Ue(j=>{const N=Gu("images/rabbit_app_256.png"),re=!!(o()||i().keepOpenPostForm),V=!(o()||i().keepOpenPostForm);return N!==j._v$&&ct(C,"src",j._v$=N),re!==j._v$2&&T.classList.toggle("static",j._v$2=re),V!==j._v$3&&T.classList.toggle("hidden",j._v$3=V),j},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};st(["click"]);var xH=On,$H=function(){return xH.Date.now()},kH=$H,EH=/\s/;function CH(e){for(var t=e.length;t--&&EH.test(e.charAt(t)););return t}var SH=CH,TH=SH,AH=/^\s+/;function IH(e){return e&&e.slice(0,TH(e)+1).replace(AH,"")}var RH=IH,OH=RH,$g=Wn,LH=Bl,kg=0/0,PH=/^[-+]0x[0-9a-f]+$/i,MH=/^0b[01]+$/i,BH=/^0o[0-7]+$/i,jH=parseInt;function UH(e){if(typeof e=="number")return e;if(LH(e))return kg;if($g(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$g(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=OH(e);var n=MH.test(e);return n||BH.test(e)?jH(e.slice(2),n?2:8):PH.test(e)?kg:+e}var NH=UH,DH=Wn,mu=kH,Eg=NH,zH="Expected a function",HH=Math.max,FH=Math.min;function qH(e,t,n){var i,o,a,l,u,d,h=0,p=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(zH);t=Eg(t)||0,DH(n)&&(p=!!n.leading,g="maxWait"in n,a=g?HH(Eg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function $(T){var j=i,N=o;return i=o=void 0,h=T,l=e.apply(N,j),l}function k(T){return h=T,u=setTimeout(x,t),p?$(T):l}function w(T){var j=T-d,N=T-h,re=t-j;return g?FH(re,a-N):re}function E(T){var j=T-d,N=T-h;return d===void 0||j>=t||j<0||g&&N>=a}function x(){var T=mu();if(E(T))return A(T);u=setTimeout(x,w(T))}function A(T){return u=void 0,v&&i?$(T):(i=o=void 0,l)}function L(){u!==void 0&&clearTimeout(u),h=0,i=d=o=u=void 0}function I(){return u===void 0?l:A(mu())}function C(){var T=mu(),j=E(T);if(i=arguments,o=this,d=T,j){if(u===void 0)return k(d);if(g)return clearTimeout(u),u=setTimeout(x,t),$(d)}return u===void 0&&(u=setTimeout(x,t)),l}return C.cancel=L,C.flush=I,C}var WH=qH,ZH=WH,VH=Wn,KH="Expected a function";function GH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(KH);return VH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),ZH(e,t,{leading:i,maxWait:t,trailing:o})}var QH=GH;const YH=po(QH),JH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],XH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},eF=({shortcuts:e=JH,onShortcut:t})=>{const n=XH(e);ln(()=>{const i=YH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),vr(()=>{window.removeEventListener("keydown",i)})})},tF=()=>{const e=$o();eF({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},nF=B('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),lF=()=>{tF();const e=Bx(),{persistStatus:t}=Dx(),n=Tl(),{config:i,initializeColumns:o}=je(),a=Kn();return Nn(()=>{i().relayUrls.map(async l=>{try{(await n().ensureRelay(l)).on("notice",d=>{console.error(`NOTICE: ${l}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),Nn(()=>{const l=a();l!=null&&o({pubkey:l})}),ln(()=>{t().loggedIn||e("/hello")}),jx(l=>{console.error("uncaught error: ",l)}),(()=>{const l=nF();return O(l,y(wH,{}),null),O(l,y(pM,{}),null),O(l,y(Cz,{}),null),l})()};export{lF as default};
//# sourceMappingURL=Home-e4b23e9b.js.map
