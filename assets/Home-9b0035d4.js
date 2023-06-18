import{S as Eg,s as mu,n as wx,i as Sp,a as Tp,t as xx,f as $x,c as kx,r as Ap,b as Ex,d as Cg,g as Cx,u as _i,e as Sg,h as Aa,o as vr,j as an,k as Gs,l as rl,p as Ip,m as Ve,q as B,v as at,w as xe,x as L,y as _,z as fe,A as ze,B as Sx,M as Fe,C as Tx,D as Sn,E as Un,F as Ax,G as Be,H as Ix,I as br,J as It,K as Tg,L as ut,N as Rx,O as Ox,P as Ws,Q as Ag,R as Lx,T as Px}from"./index-656144d8.js";import{c as Yi,u as qi,a as Mx,b as Bx,r as Vu,d as jx}from"./resolveAsset-517cba6d.js";class Ux extends Eg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Rp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return vu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return vu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),mu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Op(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(wx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Sp||this.currentResult.isStale||!Tp(this.options.staleTime))return;const n=xx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Sp||this.options.enabled===!1||!Tp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||$x.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,h=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:k,errorUpdatedAt:$,fetchStatus:w,status:E}=g,x=!1,I=!1,O;if(n._optimisticResults){const N=this.hasListeners(),ne=!N&&Rp(t,n),V=N&&Op(t,i,n,o);(ne||V)&&(w=kx(t.options.networkMode)?"fetching":"paused",v||(E="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&E!=="error")O=p.data,v=p.dataUpdatedAt,E=p.status,x=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)O=this.selectResult;else try{this.selectFn=n.select,O=n.select(g.data),O=Ap(a?.data,O,n),this.selectResult=O,this.selectError=null}catch(N){this.selectError=N}else O=g.data;if(typeof n.placeholderData<"u"&&typeof O>"u"&&E==="loading"){let N;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)N=a.data;else if(N=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof N<"u")try{N=n.select(N),this.selectError=null}catch(ne){this.selectError=ne}typeof N<"u"&&(E="success",O=Ap(a?.data,N,n),I=!0)}this.selectError&&(k=this.selectError,O=this.selectResult,$=Date.now(),E="error");const A=w==="fetching",C=E==="loading",T=E==="error";return{status:E,fetchStatus:w,isLoading:C,isSuccess:E==="success",isError:T,isInitialLoading:C&&A,data:O,dataUpdatedAt:v,error:k,errorUpdatedAt:$,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:A,isRefetching:A&&!C,isLoadingError:T&&g.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:I,isPreviousData:x,isRefetchError:T&&g.dataUpdatedAt!==0,isStale:Ku(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,mu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==n[h]&&u.has(h)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Ex(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Cg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,h;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(h=this.options).onSettled)==null||d.call(h,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Nx(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Rp(e,t){return Nx(e,t)||e.state.dataUpdatedAt>0&&vu(e,t,t.refetchOnMount)}function vu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Ku(e,t)}return!1}function Op(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Ku(e,n)}function Ku(e,t){return e.isStaleByTime(t.staleTime)}class Dx extends Eg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),mu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Cx(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Cg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,h;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(h=this.mutateOptions).onSettled)==null||d.call(h,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function zx(e){return typeof e=="function"}function Lp(e,t,n){if(!zx(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Ig(e,t){return typeof e=="function"?e(...t):!!e}function Hx(e,t){const n=_i({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=Yi(a.getOptimisticResult(o)),[d,{refetch:h,mutate:p}]=Sg(()=>new Promise($=>{l.isFetching&&l.isLoading||(qi(l.data)===i&&$(void 0),$(qi(l.data)))}));Aa(()=>{p(()=>qi(l.data)),h()});let g=[];const v=a.subscribe($=>{g.push(()=>{Aa(()=>{const w={...qi($)};w.data===void 0&&(w.data=i),u(qi(w)),p(()=>qi($.data)),h()})}),queueMicrotask(()=>{const w=g.pop();w&&w(),g=[]})});vr(()=>v()),an(()=>{a.setOptions(o,{listeners:!1})}),Gs(()=>{const $=n.defaultQueryOptions(e);a.setOptions($)}),Gs(rl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Ig(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const k={get($,w){return w==="data"?d():Reflect.get($,w)}};return new Proxy(l,k)}function wi(e,t,n){const[i,o]=Yi(Lp(e,t,n));return Gs(()=>{const a=Lp(e,t,n);o(a)}),Hx(i,Ux)}function pi(e,t,n){const[i,o]=Yi(Ip(e,t,n)),a=_i({context:i.context}),l=new Dx(a,i),u=(g,v)=>{l.mutate(g,v).catch(Fx)},[d,h]=Yi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Gs(()=>{const g=Ip(e,t,n);o(g),l.setOptions(g)}),Gs(rl(()=>d.status,()=>{if(d.isError&&Ig(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{h({...g,mutate:u,mutateAsync:g.mutate})});return vr(p),d}function Fx(){}const qx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),Wx=(e={})=>(()=>{const t=qx();return Ve(t,e,!0,!0),t})(),Zx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),Rg=(e={})=>(()=>{const t=Zx();return Ve(t,e,!0,!0),t})(),Vx=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),Kx=B('<span class="inline-block h-4 w-4 text-gray-700">'),ls=e=>{const[t,n]=xe(!1),i=()=>n(o=>!o);return(()=>{const o=Vx(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=l.nextSibling;return L(l,_(fe,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const p=Kx();return L(p,h),p})()}),u),L(u,()=>e.name),d.$$click=()=>i(),L(d,_(Rg,{})),L(o,_(fe,{get when(){return t()},get children(){return e.settings()}}),null),o})()};at(["click"]);const Gx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Gu=(e={})=>(()=>{const t=Gx();return Ve(t,e,!0,!0),t})();var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function po(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function il(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Qx=typeof dr=="object"&&dr&&dr.Object===Object&&dr,Og=Qx,Yx=Og,Jx=typeof self=="object"&&self&&self.Object===Object&&self,Xx=Yx||Jx||Function("return this")(),Rn=Xx,e5=Rn,t5=e5.Symbol,cs=t5,Pp=cs,Lg=Object.prototype,n5=Lg.hasOwnProperty,r5=Lg.toString,zs=Pp?Pp.toStringTag:void 0;function i5(e){var t=n5.call(e,zs),n=e[zs];try{e[zs]=void 0;var i=!0}catch{}var o=r5.call(e);return i&&(t?e[zs]=n:delete e[zs]),o}var s5=i5,o5=Object.prototype,a5=o5.toString;function l5(e){return a5.call(e)}var c5=l5,Mp=cs,u5=s5,d5=c5,f5="[object Null]",h5="[object Undefined]",Bp=Mp?Mp.toStringTag:void 0;function p5(e){return e==null?e===void 0?h5:f5:Bp&&Bp in Object(e)?u5(e):d5(e)}var us=p5;function g5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var qn=g5,m5=us,v5=qn,b5="[object AsyncFunction]",y5="[object Function]",_5="[object GeneratorFunction]",w5="[object Proxy]";function x5(e){if(!v5(e))return!1;var t=m5(e);return t==y5||t==_5||t==b5||t==w5}var Pg=x5,$5=Rn,k5=$5["__core-js_shared__"],E5=k5,Yc=E5,jp=function(){var e=/[^.]+$/.exec(Yc&&Yc.keys&&Yc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function C5(e){return!!jp&&jp in e}var S5=C5,T5=Function.prototype,A5=T5.toString;function I5(e){if(e!=null){try{return A5.call(e)}catch{}try{return e+""}catch{}}return""}var Mg=I5,R5=Pg,O5=S5,L5=qn,P5=Mg,M5=/[\\^$.*+?()[\]{}|]/g,B5=/^\[object .+?Constructor\]$/,j5=Function.prototype,U5=Object.prototype,N5=j5.toString,D5=U5.hasOwnProperty,z5=RegExp("^"+N5.call(D5).replace(M5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function H5(e){if(!L5(e)||O5(e))return!1;var t=R5(e)?z5:B5;return t.test(P5(e))}var F5=H5;function q5(e,t){return e?.[t]}var W5=q5,Z5=F5,V5=W5;function K5(e,t){var n=V5(e,t);return Z5(n)?n:void 0}var xi=K5,G5=xi,Q5=G5(Object,"create"),sl=Q5,Up=sl;function Y5(){this.__data__=Up?Up(null):{},this.size=0}var J5=Y5;function X5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var e$=X5,t$=sl,n$="__lodash_hash_undefined__",r$=Object.prototype,i$=r$.hasOwnProperty;function s$(e){var t=this.__data__;if(t$){var n=t[e];return n===n$?void 0:n}return i$.call(t,e)?t[e]:void 0}var o$=s$,a$=sl,l$=Object.prototype,c$=l$.hasOwnProperty;function u$(e){var t=this.__data__;return a$?t[e]!==void 0:c$.call(t,e)}var d$=u$,f$=sl,h$="__lodash_hash_undefined__";function p$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=f$&&t===void 0?h$:t,this}var g$=p$,m$=J5,v$=e$,b$=o$,y$=d$,_$=g$;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=m$;ds.prototype.delete=v$;ds.prototype.get=b$;ds.prototype.has=y$;ds.prototype.set=_$;var w$=ds;function x$(){this.__data__=[],this.size=0}var $$=x$;function k$(e,t){return e===t||e!==e&&t!==t}var Qu=k$,E$=Qu;function C$(e,t){for(var n=e.length;n--;)if(E$(e[n][0],t))return n;return-1}var ol=C$,S$=ol,T$=Array.prototype,A$=T$.splice;function I$(e){var t=this.__data__,n=S$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():A$.call(t,n,1),--this.size,!0}var R$=I$,O$=ol;function L$(e){var t=this.__data__,n=O$(t,e);return n<0?void 0:t[n][1]}var P$=L$,M$=ol;function B$(e){return M$(this.__data__,e)>-1}var j$=B$,U$=ol;function N$(e,t){var n=this.__data__,i=U$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var D$=N$,z$=$$,H$=R$,F$=P$,q$=j$,W$=D$;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=z$;fs.prototype.delete=H$;fs.prototype.get=F$;fs.prototype.has=q$;fs.prototype.set=W$;var al=fs,Z$=xi,V$=Rn,K$=Z$(V$,"Map"),Yu=K$,Np=w$,G$=al,Q$=Yu;function Y$(){this.size=0,this.__data__={hash:new Np,map:new(Q$||G$),string:new Np}}var J$=Y$;function X$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var e8=X$,t8=e8;function n8(e,t){var n=e.__data__;return t8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ll=n8,r8=ll;function i8(e){var t=r8(this,e).delete(e);return this.size-=t?1:0,t}var s8=i8,o8=ll;function a8(e){return o8(this,e).get(e)}var l8=a8,c8=ll;function u8(e){return c8(this,e).has(e)}var d8=u8,f8=ll;function h8(e,t){var n=f8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var p8=h8,g8=J$,m8=s8,v8=l8,b8=d8,y8=p8;function hs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}hs.prototype.clear=g8;hs.prototype.delete=m8;hs.prototype.get=v8;hs.prototype.has=b8;hs.prototype.set=y8;var Ju=hs,_8="__lodash_hash_undefined__";function w8(e){return this.__data__.set(e,_8),this}var x8=w8;function $8(e){return this.__data__.has(e)}var k8=$8,E8=Ju,C8=x8,S8=k8;function Ia(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new E8;++t<n;)this.add(e[t])}Ia.prototype.add=Ia.prototype.push=C8;Ia.prototype.has=S8;var Bg=Ia;function T8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var A8=T8;function I8(e){return e!==e}var R8=I8;function O8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var L8=O8,P8=A8,M8=R8,B8=L8;function j8(e,t,n){return t===t?B8(e,t,n):P8(e,M8,n)}var U8=j8,N8=U8;function D8(e,t){var n=e==null?0:e.length;return!!n&&N8(e,t,0)>-1}var z8=D8;function H8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var F8=H8;function q8(e,t){return e.has(t)}var jg=q8,W8=xi,Z8=Rn,V8=W8(Z8,"Set"),Ug=V8;function K8(){}var G8=K8;function Q8(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Xu=Q8,Jc=Ug,Y8=G8,J8=Xu,X8=1/0,e6=Jc&&1/J8(new Jc([,-0]))[1]==X8?function(e){return new Jc(e)}:Y8,t6=e6,n6=Bg,r6=z8,i6=F8,s6=jg,o6=t6,a6=Xu,l6=200;function c6(e,t,n){var i=-1,o=r6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=i6;else if(a>=l6){var h=t?null:o6(e);if(h)return a6(h);l=!1,o=s6,d=new n6}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var Ng=c6,u6=Ng;function d6(e){return e&&e.length?u6(e):[]}var f6=d6;const pr=po(f6),h6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),Zs=e=>(()=>{const t=h6();return L(t,()=>e.children),t})();function bu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function p6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Dg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function g6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");bu(e.outputLen),bu(e.blockLen)}function m6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function v6(e,t){Dg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const di={number:bu,bool:p6,bytes:Dg,hash:g6,exists:m6,output:v6},$a=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,b6=Object.freeze(Object.defineProperty({__proto__:null,crypto:$a},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const y6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),_6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),$n=(e,t)=>e<<32-t|e>>>t,zg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!zg)throw new Error("Non little-endian hardware is not supported");const w6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function nn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=w6[e[n]];return t}function Wr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Hg=async()=>{};async function x6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Hg(),i+=a)}}function ed(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function go(e){if(typeof e=="string"&&(e=ed(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class td{clone(){return this._cloneInto()}}const $6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function k6(e,t){if(t!==void 0&&(typeof t!="object"||!$6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function cl(e){const t=i=>e().update(go(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function E6(e){const t=(i,o)=>e(o).update(go(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function ul(e=32){if($a&&typeof $a.getRandomValues=="function")return $a.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const C6=Object.freeze(Object.defineProperty({__proto__:null,Hash:td,asyncLoop:x6,bytesToHex:nn,checkOpts:k6,concatBytes:fi,createView:gi,hexToBytes:Wr,isLE:zg,nextTick:Hg,randomBytes:ul,rotr:$n,toBytes:go,u32:_6,u8:y6,utf8ToBytes:ed,wrapConstructor:cl,wrapConstructorWithOpts:E6},Symbol.toStringTag,{value:"Module"}));function S6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}let Fg=class extends td{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){di.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=go(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=gi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){di.exists(this),di.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;S6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const T6=(e,t,n)=>e&t^~e&n,A6=(e,t,n)=>e&t^e&n^t&n,I6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Mr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Br=new Uint32Array(64);class qg extends Fg{constructor(){super(64,32,8,!1),this.A=Mr[0]|0,this.B=Mr[1]|0,this.C=Mr[2]|0,this.D=Mr[3]|0,this.E=Mr[4]|0,this.F=Mr[5]|0,this.G=Mr[6]|0,this.H=Mr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Br[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=Br[g-15],k=Br[g-2],$=$n(v,7)^$n(v,18)^v>>>3,w=$n(k,17)^$n(k,19)^k>>>10;Br[g]=w+Br[g-7]+$+Br[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:h,H:p}=this;for(let g=0;g<64;g++){const v=$n(u,6)^$n(u,11)^$n(u,25),k=p+v+T6(u,d,h)+I6[g]+Br[g]|0,w=($n(i,2)^$n(i,13)^$n(i,22))+A6(i,o,a)|0;p=h,h=d,d=u,u=l+k|0,l=a,a=o,o=i,i=k+w|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,h=h+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,h,p)}roundClean(){Br.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class R6 extends qg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Dn=cl(()=>new qg),O6=cl(()=>new R6),L6=Object.freeze(Object.defineProperty({__proto__:null,sha224:O6,sha256:Dn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Wg=BigInt(0),dl=BigInt(1),P6=BigInt(2),fl=e=>e instanceof Uint8Array,M6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ji(e){if(!fl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=M6[e[n]];return t}function Zg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function nd(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function Xi(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Dt(e){return nd(Ji(e))}function rd(e){if(!fl(e))throw new Error("Uint8Array expected");return nd(Ji(Uint8Array.from(e).reverse()))}const Fr=(e,t)=>Xi(e.toString(16).padStart(t*2,"0")),Vg=(e,t)=>Fr(e,t).reverse(),B6=e=>Xi(Zg(e));function At(e,t,n){let i;if(typeof t=="string")try{i=Xi(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(fl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function rn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!fl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function j6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function hl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function U6(e){let t;for(t=0;e>Wg;e>>=dl,t+=1);return t}const N6=(e,t)=>e>>BigInt(t)&dl,D6=(e,t,n)=>e|(n?dl:Wg)<<BigInt(t),id=e=>(P6<<BigInt(e-1))-dl,Xc=e=>new Uint8Array(e),Dp=e=>Uint8Array.from(e);function Kg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Xc(e),o=Xc(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Xc())=>{o=u(Dp([0]),g),i=u(),g.length!==0&&(o=u(Dp([1]),g),i=u())},h=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const k=i.slice();v.push(k),g+=i.length}return rn(...v)};return(g,v)=>{l(),d(g);let k;for(;!(k=v(h()));)d();return l(),k}}const z6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function ps(e,t,n={}){const i=(o,a,l)=>{const u=z6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const H6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:N6,bitLen:U6,bitMask:id,bitSet:D6,bytesToHex:Ji,bytesToNumberBE:Dt,bytesToNumberLE:rd,concatBytes:rn,createHmacDrbg:Kg,ensureBytes:At,equalBytes:j6,hexToBytes:Xi,hexToNumber:nd,numberToBytesBE:Fr,numberToBytesLE:Vg,numberToHexUnpadded:Zg,numberToVarBytesBE:B6,utf8ToBytes:hl,validateObject:ps},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $t=BigInt(0),ht=BigInt(1),ci=BigInt(2),F6=BigInt(3),yu=BigInt(4),zp=BigInt(5),Hp=BigInt(8);BigInt(9);BigInt(16);function bt(e,t){const n=e%t;return n>=$t?n:t+n}function q6(e,t,n){if(n<=$t||t<$t)throw new Error("Expected power/modulo > 0");if(n===ht)return $t;let i=ht;for(;t>$t;)t&ht&&(i=i*e%n),e=e*e%n,t>>=ht;return i}function mn(e,t,n){let i=e;for(;t-- >$t;)i*=i,i%=n;return i}function _u(e,t){if(e===$t||t<=$t)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=bt(e,t),i=t,o=$t,a=ht;for(;n!==$t;){const u=i/n,d=i%n,h=o-a*u;i=n,n=d,o=a,a=h}if(i!==ht)throw new Error("invert: does not exist");return bt(o,t)}function W6(e){const t=(e-ht)/ci;let n,i,o;for(n=e-ht,i=0;n%ci===$t;n/=ci,i++);for(o=ci;o<e&&q6(o,t,e)!==e-ht;o++);if(i===1){const l=(e+ht)/yu;return function(d,h){const p=d.pow(h,l);if(!d.eql(d.sqr(p),h))throw new Error("Cannot find square root");return p}}const a=(n+ht)/ci;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let h=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let k=1;for(let w=u.sqr(v);k<h&&!u.eql(w,u.ONE);k++)w=u.sqr(w);const $=u.pow(p,ht<<BigInt(h-k-1));p=u.sqr($),g=u.mul(g,$),v=u.mul(v,p),h=k}return g}}function Z6(e){if(e%yu===F6){const t=(e+ht)/yu;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Hp===zp){const t=(e-zp)/Hp;return function(i,o){const a=i.mul(o,ci),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ci),l),h=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(h),o))throw new Error("Cannot find square root");return h}}return W6(e)}const V6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Gg(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=V6.reduce((i,o)=>(i[o]="function",i),t);return ps(e,n)}function K6(e,t,n){if(n<$t)throw new Error("Expected power > 0");if(n===$t)return e.ONE;if(n===ht)return t;let i=e.ONE,o=t;for(;n>$t;)n&ht&&(i=e.mul(i,o)),o=e.sqr(o),n>>=ht;return i}function G6(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function sd(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function Q6(e,t,n=!1,i={}){if(e<=$t)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=sd(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=Z6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:id(o),ZERO:$t,ONE:ht,create:d=>bt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return $t<=d&&d<e},is0:d=>d===$t,isOdd:d=>(d&ht)===ht,neg:d=>bt(-d,e),eql:(d,h)=>d===h,sqr:d=>bt(d*d,e),add:(d,h)=>bt(d+h,e),sub:(d,h)=>bt(d-h,e),mul:(d,h)=>bt(d*h,e),pow:(d,h)=>K6(u,d,h),div:(d,h)=>bt(d*_u(h,e),e),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>_u(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>G6(u,d),cmov:(d,h,p)=>p?h:d,toBytes:d=>n?Vg(d,a):Fr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?rd(d):Dt(d)}});return Object.freeze(u)}function Y6(e,t,n=!1){e=At("privateHash",e);const i=e.length,o=sd(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?rd(e):Dt(e);return bt(a,t-ht)+ht}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const J6=BigInt(0),eu=BigInt(1);function X6(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>J6;)a&eu&&(l=l.add(u)),u=u.double(),a>>=eu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let h=o,p=h;for(let g=0;g<l;g++){p=h,d.push(p);for(let v=1;v<u;v++)p=p.add(h),d.push(p);h=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let h=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),v=2**o,k=BigInt(o);for(let $=0;$<u;$++){const w=$*d;let E=Number(l&g);l>>=k,E>d&&(E-=v,l+=eu);const x=w,I=w+Math.abs(E)-1,O=$%2!==0,A=E<0;E===0?p=p.add(n(O,a[x])):h=h.add(n(A,a[I]))}return{p:h,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let h=a.get(o);return h||(h=this.precomputeWindow(o,d),d!==1&&a.set(o,u(h))),this.wNAF(d,h,l)}}}function Qg(e){return Gg(e.Fp),ps(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...sd(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function e7(e){const t=Qg(e);ps(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:t7,hexToBytes:n7}=H6,hi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=hi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:t7(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=hi,n=typeof e=="string"?n7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=hi._parseInt(n.subarray(2)),{d:l,l:u}=hi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=h=>Number.parseInt(h[0],16)&8?"00"+h:h,n=h=>{const p=h.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},En=BigInt(0),pt=BigInt(1),lr=BigInt(2),Ra=BigInt(3),Fp=BigInt(4);function r7(e){const t=e7(e),{Fp:n}=t,i=t.toBytes||(($,w,E)=>{const x=w.toAffine();return rn(Uint8Array.from([4]),n.toBytes(x.x),n.toBytes(x.y))}),o=t.fromBytes||($=>{const w=$.subarray(1),E=n.fromBytes(w.subarray(0,n.BYTES)),x=n.fromBytes(w.subarray(n.BYTES,2*n.BYTES));return{x:E,y:x}});function a($){const{a:w,b:E}=t,x=n.sqr($),I=n.mul(x,$);return n.add(n.add(I,n.mul($,w)),E)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l($){return typeof $=="bigint"&&En<$&&$<t.n}function u($){if(!l($))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d($){const{allowedPrivateKeyLengths:w,nByteLength:E,wrapPrivateKey:x,n:I}=t;if(w&&typeof $!="bigint"){if($ instanceof Uint8Array&&($=Ji($)),typeof $!="string"||!w.includes($.length))throw new Error("Invalid key");$=$.padStart(E*2,"0")}let O;try{O=typeof $=="bigint"?$:Dt(At("private key",$,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof $}`)}return x&&(O=bt(O,I)),u(O),O}const h=new Map;function p($){if(!($ instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(w,E,x){if(this.px=w,this.py=E,this.pz=x,w==null||!n.isValid(w))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if(x==null||!n.isValid(x))throw new Error("z required")}static fromAffine(w){const{x:E,y:x}=w||{};if(!w||!n.isValid(E)||!n.isValid(x))throw new Error("invalid affine point");if(w instanceof g)throw new Error("projective point not allowed");const I=O=>n.eql(O,n.ZERO);return I(E)&&I(x)?g.ZERO:new g(E,x,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(w){const E=n.invertBatch(w.map(x=>x.pz));return w.map((x,I)=>x.toAffine(E[I])).map(g.fromAffine)}static fromHex(w){const E=g.fromAffine(o(At("pointHex",w)));return E.assertValidity(),E}static fromPrivateKey(w){return g.BASE.multiply(d(w))}_setWindowSize(w){this._WINDOW_SIZE=w,h.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:w,y:E}=this.toAffine();if(!n.isValid(w)||!n.isValid(E))throw new Error("bad point: x or y not FE");const x=n.sqr(E),I=a(w);if(!n.eql(x,I))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:w}=this.toAffine();if(n.isOdd)return!n.isOdd(w);throw new Error("Field doesn't support isOdd")}equals(w){p(w);const{px:E,py:x,pz:I}=this,{px:O,py:A,pz:C}=w,T=n.eql(n.mul(E,C),n.mul(O,I)),j=n.eql(n.mul(x,C),n.mul(A,I));return T&&j}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:w,b:E}=t,x=n.mul(E,Ra),{px:I,py:O,pz:A}=this;let C=n.ZERO,T=n.ZERO,j=n.ZERO,N=n.mul(I,I),ne=n.mul(O,O),V=n.mul(A,A),Y=n.mul(I,O);return Y=n.add(Y,Y),j=n.mul(I,A),j=n.add(j,j),C=n.mul(w,j),T=n.mul(x,V),T=n.add(C,T),C=n.sub(ne,T),T=n.add(ne,T),T=n.mul(C,T),C=n.mul(Y,C),j=n.mul(x,j),V=n.mul(w,V),Y=n.sub(N,V),Y=n.mul(w,Y),Y=n.add(Y,j),j=n.add(N,N),N=n.add(j,N),N=n.add(N,V),N=n.mul(N,Y),T=n.add(T,N),V=n.mul(O,A),V=n.add(V,V),N=n.mul(V,Y),C=n.sub(C,N),j=n.mul(V,ne),j=n.add(j,j),j=n.add(j,j),new g(C,T,j)}add(w){p(w);const{px:E,py:x,pz:I}=this,{px:O,py:A,pz:C}=w;let T=n.ZERO,j=n.ZERO,N=n.ZERO;const ne=t.a,V=n.mul(t.b,Ra);let Y=n.mul(E,O),F=n.mul(x,A),J=n.mul(I,C),oe=n.add(E,x),q=n.add(O,A);oe=n.mul(oe,q),q=n.add(Y,F),oe=n.sub(oe,q),q=n.add(E,I);let G=n.add(O,C);return q=n.mul(q,G),G=n.add(Y,J),q=n.sub(q,G),G=n.add(x,I),T=n.add(A,C),G=n.mul(G,T),T=n.add(F,J),G=n.sub(G,T),N=n.mul(ne,q),T=n.mul(V,J),N=n.add(T,N),T=n.sub(F,N),N=n.add(F,N),j=n.mul(T,N),F=n.add(Y,Y),F=n.add(F,Y),J=n.mul(ne,J),q=n.mul(V,q),F=n.add(F,J),J=n.sub(Y,J),J=n.mul(ne,J),q=n.add(q,J),Y=n.mul(F,q),j=n.add(j,Y),Y=n.mul(G,q),T=n.mul(oe,T),T=n.sub(T,Y),Y=n.mul(oe,F),N=n.mul(G,N),N=n.add(N,Y),new g(T,j,N)}subtract(w){return this.add(w.negate())}is0(){return this.equals(g.ZERO)}wNAF(w){return k.wNAFCached(this,h,w,E=>{const x=n.invertBatch(E.map(I=>I.pz));return E.map((I,O)=>I.toAffine(x[O])).map(g.fromAffine)})}multiplyUnsafe(w){const E=g.ZERO;if(w===En)return E;if(u(w),w===pt)return this;const{endo:x}=t;if(!x)return k.unsafeLadder(this,w);let{k1neg:I,k1:O,k2neg:A,k2:C}=x.splitScalar(w),T=E,j=E,N=this;for(;O>En||C>En;)O&pt&&(T=T.add(N)),C&pt&&(j=j.add(N)),N=N.double(),O>>=pt,C>>=pt;return I&&(T=T.negate()),A&&(j=j.negate()),j=new g(n.mul(j.px,x.beta),j.py,j.pz),T.add(j)}multiply(w){u(w);let E=w,x,I;const{endo:O}=t;if(O){const{k1neg:A,k1:C,k2neg:T,k2:j}=O.splitScalar(E);let{p:N,f:ne}=this.wNAF(C),{p:V,f:Y}=this.wNAF(j);N=k.constTimeNegate(A,N),V=k.constTimeNegate(T,V),V=new g(n.mul(V.px,O.beta),V.py,V.pz),x=N.add(V),I=ne.add(Y)}else{const{p:A,f:C}=this.wNAF(E);x=A,I=C}return g.normalizeZ([x,I])[0]}multiplyAndAddUnsafe(w,E,x){const I=g.BASE,O=(C,T)=>T===En||T===pt||!C.equals(I)?C.multiplyUnsafe(T):C.multiply(T),A=O(this,E).add(O(w,x));return A.is0()?void 0:A}toAffine(w){const{px:E,py:x,pz:I}=this,O=this.is0();w==null&&(w=O?n.ONE:n.inv(I));const A=n.mul(E,w),C=n.mul(x,w),T=n.mul(I,w);if(O)return{x:n.ZERO,y:n.ZERO};if(!n.eql(T,n.ONE))throw new Error("invZ was invalid");return{x:A,y:C}}isTorsionFree(){const{h:w,isTorsionFree:E}=t;if(w===pt)return!0;if(E)return E(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:w,clearCofactor:E}=t;return w===pt?this:E?E(g,this):this.multiplyUnsafe(t.h)}toRawBytes(w=!0){return this.assertValidity(),i(g,this,w)}toHex(w=!0){return Ji(this.toRawBytes(w))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,k=X6(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function i7(e){const t=Qg(e);return ps(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function s7(e){const t=i7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(q){return En<q&&q<n.ORDER}function u(q){return bt(q,i)}function d(q){return _u(q,i)}const{ProjectivePoint:h,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=r7({...t,toBytes(q,G,ue){const ee=G.toAffine(),pe=n.toBytes(ee.x),Z=rn;return ue?Z(Uint8Array.from([G.hasEvenY()?2:3]),pe):Z(Uint8Array.from([4]),pe,n.toBytes(ee.y))},fromBytes(q){const G=q.length,ue=q[0],ee=q.subarray(1);if(G===o&&(ue===2||ue===3)){const pe=Dt(ee);if(!l(pe))throw new Error("Point is not on curve");const Z=g(pe);let re=n.sqrt(Z);const de=(re&pt)===pt;return(ue&1)===1!==de&&(re=n.neg(re)),{x:pe,y:re}}else if(G===a&&ue===4){const pe=n.fromBytes(ee.subarray(0,n.BYTES)),Z=n.fromBytes(ee.subarray(n.BYTES,2*n.BYTES));return{x:pe,y:Z}}else throw new Error(`Point of length ${G} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),k=q=>Ji(Fr(q,t.nByteLength));function $(q){const G=i>>pt;return q>G}function w(q){return $(q)?u(-q):q}const E=(q,G,ue)=>Dt(q.slice(G,ue));class x{constructor(G,ue,ee){this.r=G,this.s=ue,this.recovery=ee,this.assertValidity()}static fromCompact(G){const ue=t.nByteLength;return G=At("compactSignature",G,ue*2),new x(E(G,0,ue),E(G,ue,2*ue))}static fromDER(G){const{r:ue,s:ee}=hi.toSig(At("DER",G));return new x(ue,ee)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(G){return new x(this.r,this.s,G)}recoverPublicKey(G){const{r:ue,s:ee,recovery:pe}=this,Z=j(At("msgHash",G));if(pe==null||![0,1,2,3].includes(pe))throw new Error("recovery id invalid");const re=pe===2||pe===3?ue+t.n:ue;if(re>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const de=pe&1?"03":"02",te=h.fromHex(de+k(re)),ge=d(re),ie=u(-Z*ge),ke=u(ee*ge),Q=h.BASE.multiplyAndAddUnsafe(te,ie,ke);if(!Q)throw new Error("point at infinify");return Q.assertValidity(),Q}hasHighS(){return $(this.s)}normalizeS(){return this.hasHighS()?new x(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Xi(this.toDERHex())}toDERHex(){return hi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Xi(this.toCompactHex())}toCompactHex(){return k(this.r)+k(this.s)}}const I={isValidPrivateKey(q){try{return p(q),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const q=t.randomBytes(n.BYTES+8),G=Y6(q,i);return Fr(G,t.nByteLength)},precompute(q=8,G=h.BASE){return G._setWindowSize(q),G.multiply(BigInt(3)),G}};function O(q,G=!0){return h.fromPrivateKey(q).toRawBytes(G)}function A(q){const G=q instanceof Uint8Array,ue=typeof q=="string",ee=(G||ue)&&q.length;return G?ee===o||ee===a:ue?ee===2*o||ee===2*a:q instanceof h}function C(q,G,ue=!0){if(A(q))throw new Error("first arg must be private key");if(!A(G))throw new Error("second arg must be public key");return h.fromHex(G).multiply(p(q)).toRawBytes(ue)}const T=t.bits2int||function(q){const G=Dt(q),ue=q.length*8-t.nBitLength;return ue>0?G>>BigInt(ue):G},j=t.bits2int_modN||function(q){return u(T(q))},N=id(t.nBitLength);function ne(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(En<=q&&q<N))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Fr(q,t.nByteLength)}function V(q,G,ue=Y){if(["recovered","canonical"].some(Qe=>Qe in ue))throw new Error("sign() legacy options not supported");const{hash:ee,randomBytes:pe}=t;let{lowS:Z,prehash:re,extraEntropy:de}=ue;Z==null&&(Z=!0),q=At("msgHash",q),re&&(q=At("prehashed msgHash",ee(q)));const te=j(q),ge=p(G),ie=[ne(ge),ne(te)];if(de!=null){const Qe=de===!0?pe(n.BYTES):de;ie.push(At("extraEntropy",Qe,n.BYTES))}const ke=rn(...ie),Q=te;function He(Qe){const yt=T(Qe);if(!v(yt))return;const Oe=d(yt),qe=h.BASE.multiply(yt).toAffine(),kt=u(qe.x);if(kt===En)return;const Je=u(Oe*u(Q+kt*ge));if(Je===En)return;let Et=(qe.x===kt?0:2)|Number(qe.y&pt),Gn=Je;return Z&&$(Je)&&(Gn=w(Je),Et^=1),new x(kt,Gn,Et)}return{seed:ke,k2sig:He}}const Y={lowS:t.lowS,prehash:!1},F={lowS:t.lowS,prehash:!1};function J(q,G,ue=Y){const{seed:ee,k2sig:pe}=V(q,G,ue);return Kg(t.hash.outputLen,t.nByteLength,t.hmac)(ee,pe)}h.BASE._setWindowSize(8);function oe(q,G,ue,ee=F){const pe=q;if(G=At("msgHash",G),ue=At("publicKey",ue),"strict"in ee)throw new Error("options.strict was renamed to lowS");const{lowS:Z,prehash:re}=ee;let de,te;try{if(typeof pe=="string"||pe instanceof Uint8Array)try{de=x.fromDER(pe)}catch(qe){if(!(qe instanceof hi.Err))throw qe;de=x.fromCompact(pe)}else if(typeof pe=="object"&&typeof pe.r=="bigint"&&typeof pe.s=="bigint"){const{r:qe,s:kt}=pe;de=new x(qe,kt)}else throw new Error("PARSE");te=h.fromHex(ue)}catch(qe){if(qe.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(Z&&de.hasHighS())return!1;re&&(G=t.hash(G));const{r:ge,s:ie}=de,ke=j(G),Q=d(ie),He=u(ke*Q),Qe=u(ge*Q),yt=h.BASE.multiplyAndAddUnsafe(te,He,Qe)?.toAffine();return yt?u(yt.x)===ge:!1}return{CURVE:t,getPublicKey:O,getSharedSecret:C,sign:J,verify:oe,ProjectivePoint:h,Signature:x,utils:I}}function o7(e,t){const n=e.ORDER;let i=En;for(let v=n-pt;v%lr===En;v/=lr)i+=pt;const o=i,a=(n-pt)/lr**o,l=(a-pt)/lr,u=lr**o-pt,d=lr**(o-pt),h=e.pow(t,a),p=e.pow(t,(a+pt)/lr);let g=(v,k)=>{let $=h,w=e.pow(k,u),E=e.sqr(w);E=e.mul(E,k);let x=e.mul(v,E);x=e.pow(x,l),x=e.mul(x,w),w=e.mul(x,k),E=e.mul(x,v);let I=e.mul(E,w);x=e.pow(I,d);let O=e.eql(x,e.ONE);w=e.mul(E,p),x=e.mul(I,$),E=e.cmov(w,E,O),I=e.cmov(x,I,O);for(let A=o;A>pt;A--){let C=lr**(A-lr),T=e.pow(I,C);const j=e.eql(T,e.ONE);w=e.mul(E,$),$=e.mul($,$),T=e.mul(I,$),E=e.cmov(w,E,j),I=e.cmov(T,I,j)}return{isValid:O,value:E}};if(e.ORDER%Fp===Ra){const v=(e.ORDER-Ra)/Fp,k=e.sqrt(e.neg(t));g=($,w)=>{let E=e.sqr(w);const x=e.mul($,w);E=e.mul(E,x);let I=e.pow(E,v);I=e.mul(I,x);const O=e.mul(I,k),A=e.mul(e.sqr(I),w),C=e.eql(A,$);let T=e.cmov(O,I,C);return{isValid:C,value:T}}}return g}function a7(e,t){if(Gg(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=o7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,h,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),h=e.sqr(u),d=e.mul(h,t.A),a=e.add(a,d),a=e.mul(a,l),h=e.mul(h,u),d=e.mul(h,t.B),a=e.add(a,d),p=e.mul(o,l);const{isValid:v,value:k}=n(a,h);g=e.mul(o,i),g=e.mul(g,k),p=e.cmov(p,l,v),g=e.cmov(g,k,v);const $=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,$),p=e.div(p,u),{x:p,y:g}}}function l7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return hl(e);throw new Error("DST must be Uint8Array or string")}const c7=Dt;function Nr(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function u7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Qs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function od(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function d7(e,t,n,i){Qs(e),Qs(t),od(n),t.length>255&&(t=i(rn(hl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=rn(t,Nr(t.length,1)),d=Nr(0,a),h=Nr(n,2),p=new Array(l),g=i(rn(d,e,h,Nr(0,1),u));p[0]=i(rn(g,Nr(1,1),u));for(let k=1;k<=l;k++){const $=[u7(g,p[k-1]),Nr(k+1,1),u];p[k]=i(rn(...$))}return rn(...p).slice(0,n)}function f7(e,t,n,i,o){if(Qs(e),Qs(t),od(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(hl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Nr(n,2)).update(t).update(Nr(t.length,1)).digest()}function qp(e,t,n){ps(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Qs(e),od(t);const h=l7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),v=t*a*g;let k;if(u==="xmd")k=d7(e,h,v,l);else if(u==="xof")k=f7(e,h,v,o,l);else if(u==="_internal_pass")k=e;else throw new Error('expand must be "xmd" or "xof"');const $=new Array(t);for(let w=0;w<t;w++){const E=new Array(a);for(let x=0;x<a;x++){const I=g*(x+w*a),O=k.subarray(I,I+g);E[x]=bt(c7(O),i)}$[w]=E}return $}function h7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(h=>h.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function p7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=qp(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=qp(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class Yg extends td{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,di.hash(t);const i=go(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return di.exists(this),this.iHash.update(t),this}digestInto(t){di.exists(this),di.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Oa=(e,t,n)=>new Yg(e,t).update(n).digest();Oa.create=(e,t)=>new Yg(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function g7(e){return{hash:e,hmac:(t,...n)=>Oa(e,t,fi(...n)),randomBytes:ul}}function m7(e,t){const n=i=>s7({...e,...g7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),La=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Jg=BigInt(1),Pa=BigInt(2),Wp=(e,t)=>(e+t/Pa)/t;function Xg(e){const t=pl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),h=e*e*e%t,p=h*h*e%t,g=mn(p,n,t)*p%t,v=mn(g,n,t)*p%t,k=mn(v,Pa,t)*h%t,$=mn(k,o,t)*k%t,w=mn($,a,t)*$%t,E=mn(w,u,t)*w%t,x=mn(E,d,t)*E%t,I=mn(x,u,t)*w%t,O=mn(I,n,t)*p%t,A=mn(O,l,t)*$%t,C=mn(A,i,t)*h%t,T=mn(C,Pa,t);if(!Zr.eql(Zr.sqr(T),e))throw new Error("Cannot find square root");return T}const Zr=Q6(pl,void 0,void 0,{sqrt:Xg}),Nt=m7({a:BigInt(0),b:BigInt(7),Fp:Zr,n:La,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=La,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Jg*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Wp(a*e,t),d=Wp(-i*e,t);let h=bt(e-u*n-d*o,t),p=bt(-u*i-d*a,t);const g=h>l,v=p>l;if(g&&(h=t-h),v&&(p=t-p),h>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:h,k2neg:v,k2:p}}}},Dn),gl=BigInt(0),e1=e=>typeof e=="bigint"&&gl<e&&e<pl,v7=e=>typeof e=="bigint"&&gl<e&&e<La,Zp={};function Ma(e,...t){let n=Zp[e];if(n===void 0){const i=Dn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=rn(i,i),Zp[e]=n}return Dn(rn(n,...t))}const ad=e=>e.toRawBytes(!0).slice(1),wu=e=>Fr(e,32),tu=e=>bt(e,pl),Ys=e=>bt(e,La),ld=Nt.ProjectivePoint,b7=(e,t,n)=>ld.BASE.multiplyAndAddUnsafe(e,t,n);function xu(e){let t=Nt.utils.normPrivateKeyToScalar(e),n=ld.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Ys(-t),bytes:ad(n)}}function t1(e){if(!e1(e))throw new Error("bad x: need 0 < x < p");const t=tu(e*e),n=tu(t*e+BigInt(7));let i=Xg(n);i%Pa!==gl&&(i=tu(-i));const o=new ld(e,i,Jg);return o.assertValidity(),o}function n1(...e){return Ys(Dt(Ma("BIP0340/challenge",...e)))}function y7(e){return xu(e).bytes}function _7(e,t,n=ul(32)){const i=At("message",e),{bytes:o,scalar:a}=xu(t),l=At("auxRand",n,32),u=wu(a^Dt(Ma("BIP0340/aux",l))),d=Ma("BIP0340/nonce",u,o,i),h=Ys(Dt(d));if(h===gl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=xu(h),v=n1(p,o,i),k=new Uint8Array(64);if(k.set(p,0),k.set(wu(Ys(g+v*a)),32),!r1(k,i,o))throw new Error("sign: Invalid signature produced");return k}function r1(e,t,n){const i=At("signature",e,64),o=At("message",t),a=At("publicKey",n,32);try{const l=t1(Dt(a)),u=Dt(i.subarray(0,32));if(!e1(u))return!1;const d=Dt(i.subarray(32,64));if(!v7(d))return!1;const h=n1(wu(u),ad(l),o),p=b7(l,d,Ys(-h));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const mo={getPublicKey:y7,sign:_7,verify:r1,utils:{randomPrivateKey:Nt.utils.randomPrivateKey,lift_x:t1,pointToBytes:ad,numberToBytesBE:Fr,bytesToNumberBE:Dt,taggedHash:Ma,mod:bt}},w7=h7(Zr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),x7=a7(Zr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Zr.create(BigInt("-11"))});p7(Nt.ProjectivePoint,e=>{const{x:t,y:n}=x7(Zr.create(e[0]));return w7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Zr.ORDER,m:1,k:128,expand:"xmd",hash:Dn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Qr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function On(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Wn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Qr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Zn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function vo(e,t="="){if(Qr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function i1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Vp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Qr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const h=a[d],p=t*l+h;if(!Number.isSafeInteger(p)||t*l/t!==l||p-h!==t*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const s1=(e,t)=>t?s1(t,e%t):e,Ba=(e,t)=>e+(t-s1(e,t));function $u(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ba(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Ba(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Qr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function o1(e){return Qr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Vp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Vp(t,e,2**8))}}}function _r(e,t=!1){if(Qr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Ba(8,e)>32||Ba(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return $u(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from($u(n,e,8,t))}}}function Kp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function a1(e,t){if(Qr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const $7={alphabet:Wn,chain:On,checksum:a1,radix:o1,radix2:_r,join:Zn,padding:vo},l1=On(_r(4),Wn("0123456789ABCDEF"),Zn("")),c1=On(_r(5),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),vo(5),Zn("")),k7=On(_r(5),Wn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),vo(5),Zn("")),E7=On(_r(5),Wn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Zn(""),i1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),es=On(_r(6),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),vo(6),Zn("")),u1=On(_r(6),Wn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),vo(6),Zn("")),cd=e=>On(o1(58),Wn(e),Zn("")),Js=cd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),C7=cd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),S7=cd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Gp=[0,2,3,5,6,7,9,10,11],d1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Js.encode(i).padStart(Gp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Gp.indexOf(i.length),a=Js.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},f1=e=>On(a1(4,t=>e(e(t))),Js),ku=On(Wn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Zn("")),Qp=[996825010,642813549,513874426,1027748829,705979059];function Hs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Qp.length;i++)(t>>i&1)===1&&(n^=Qp[i]);return n}function Yp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=Hs(o)^l>>5}o=Hs(o);for(let a=0;a<i;a++)o=Hs(o)^e.charCodeAt(a)&31;for(let a of t)o=Hs(o)^a;for(let a=0;a<6;a++)o=Hs(o);return o^=n,ku.encode($u([o%2**30],30,5,!1))}function h1(e){const t=e==="bech32"?1:734539939,n=_r(5),i=n.decode,o=n.encode,a=Kp(i);function l(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const k=p.length+7+g.length;if(v!==!1&&k>v)throw new TypeError(`Length ${k} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${ku.encode(g)}${Yp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const k=p.lastIndexOf("1");if(k===0||k===-1)throw new Error('Letter "1" must be present between prefix and data only');const $=p.slice(0,k),w=p.slice(k+1);if(w.length<6)throw new Error("Data must be at least 6 characters long");const E=ku.decode(w).slice(0,-6),x=Yp($,E,t);if(!w.endsWith(x))throw new Error(`Invalid checksum in ${p}: expected "${x}"`);return{prefix:$,words:E}}const d=Kp(u);function h(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:h,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const zt=h1("bech32"),T7=h1("bech32m"),p1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},g1=On(_r(4),Wn("0123456789abcdef"),Zn(""),i1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Xs={utf8:p1,hex:g1,base16:l1,base32:c1,base64:es,base64url:u1,base58:Js,base58xmr:d1},m1=`Invalid encoding type. Available types: ${Object.keys(Xs).join(", ")}`,v1=(e,t)=>{if(typeof e!="string"||!Xs.hasOwnProperty(e))throw new TypeError(m1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Xs[e].encode(t)},A7=v1,b1=(e,t)=>{if(!Xs.hasOwnProperty(e))throw new TypeError(m1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Xs[e].decode(t)},I7=b1,R7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Qr,base16:l1,base32:c1,base32crockford:E7,base32hex:k7,base58:Js,base58check:f1,base58flickr:C7,base58xmr:d1,base58xrp:S7,base64:es,base64url:u1,bech32:zt,bech32m:T7,bytes:I7,bytesToString:v1,hex:g1,str:A7,stringToBytes:b1,utf8:p1,utils:$7},Symbol.toStringTag,{value:"Module"}));var ud={};Object.defineProperty(ud,"__esModule",{value:!0});var dd=ud.wordlist=void 0;dd=ud.wordlist=`abandon
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
`);var sn={},xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.output=xt.exists=xt.hash=Zi=xt.bytes=xt.bool=xt.number=void 0;function ja(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}xt.number=ja;function y1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}xt.bool=y1;function fd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Zi=xt.bytes=fd;function _1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ja(e.outputLen),ja(e.blockLen)}xt.hash=_1;function w1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}xt.exists=w1;function x1(e,t){fd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}xt.output=x1;const O7={number:ja,bool:y1,bytes:fd,hash:_1,exists:w1,output:x1};xt.default=O7;var ts={},$1={},bo={};const L7=il(b6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=L7,n=A=>new Uint8Array(A.buffer,A.byteOffset,A.byteLength);e.u8=n;const i=A=>new Uint32Array(A.buffer,A.byteOffset,Math.floor(A.byteLength/4));e.u32=i;const o=A=>new DataView(A.buffer,A.byteOffset,A.byteLength);e.createView=o;const a=(A,C)=>A<<32-C|A>>>C;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(A,C)=>C.toString(16).padStart(2,"0"));function u(A){if(!(A instanceof Uint8Array))throw new Error("Uint8Array expected");let C="";for(let T=0;T<A.length;T++)C+=l[A[T]];return C}e.bytesToHex=u;function d(A){if(typeof A!="string")throw new TypeError("hexToBytes: expected string, got "+typeof A);if(A.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const C=new Uint8Array(A.length/2);for(let T=0;T<C.length;T++){const j=T*2,N=A.slice(j,j+2),ne=Number.parseInt(N,16);if(Number.isNaN(ne)||ne<0)throw new Error("Invalid byte sequence");C[T]=ne}return C}e.hexToBytes=d;const h=async()=>{};e.nextTick=h;async function p(A,C,T){let j=Date.now();for(let N=0;N<A;N++){T(N);const ne=Date.now()-j;ne>=0&&ne<C||(await(0,e.nextTick)(),j+=ne)}}e.asyncLoop=p;function g(A){if(typeof A!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof A}`);return new TextEncoder().encode(A)}e.utf8ToBytes=g;function v(A){if(typeof A=="string"&&(A=g(A)),!(A instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof A})`);return A}e.toBytes=v;function k(...A){if(!A.every(j=>j instanceof Uint8Array))throw new Error("Uint8Array list expected");if(A.length===1)return A[0];const C=A.reduce((j,N)=>j+N.length,0),T=new Uint8Array(C);for(let j=0,N=0;j<A.length;j++){const ne=A[j];T.set(ne,N),N+=ne.length}return T}e.concatBytes=k;class ${clone(){return this._cloneInto()}}e.Hash=$;const w=A=>Object.prototype.toString.call(A)==="[object Object]"&&A.constructor===Object;function E(A,C){if(C!==void 0&&(typeof C!="object"||!w(C)))throw new TypeError("Options should be object or undefined");return Object.assign(A,C)}e.checkOpts=E;function x(A){const C=j=>A().update(v(j)).digest(),T=A();return C.outputLen=T.outputLen,C.blockLen=T.blockLen,C.create=()=>A(),C}e.wrapConstructor=x;function I(A){const C=(j,N)=>A(N).update(v(j)).digest(),T=A({});return C.outputLen=T.outputLen,C.blockLen=T.blockLen,C.create=j=>A(j),C}e.wrapConstructorWithOpts=I;function O(A=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(A));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=O})(bo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=xt,n=bo;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const h=this.blockLen,p=new Uint8Array(h);p.set(d.length>h?l.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=l.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:h,destroyed:p,blockLen:g,outputLen:v}=this;return l=l,l.finished=h,l.destroyed=p,l.blockLen=g,l.outputLen=v,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})($1);Object.defineProperty(ts,"__esModule",{value:!0});ts.pbkdf2Async=ts.pbkdf2=void 0;const fa=xt,P7=$1,Ki=bo;function k1(e,t,n,i){fa.default.hash(e);const o=(0,Ki.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(fa.default.number(a),fa.default.number(l),fa.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Ki.toBytes)(t),h=(0,Ki.toBytes)(n),p=new Uint8Array(l),g=P7.hmac.create(e,d),v=g._cloneInto().update(h);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function E1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function M7(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=k1(e,t,n,i);let h;const p=new Uint8Array(4),g=(0,Ki.createView)(p),v=new Uint8Array(u.outputLen);for(let k=1,$=0;$<a;k++,$+=u.outputLen){const w=l.subarray($,$+u.outputLen);g.setInt32(0,k,!1),(h=d._cloneInto(h)).update(p).digestInto(v),w.set(v.subarray(0,w.length));for(let E=1;E<o;E++){u._cloneInto(h).update(v).digestInto(v);for(let x=0;x<w.length;x++)w[x]^=v[x]}}return E1(u,d,l,h,v)}ts.pbkdf2=M7;async function B7(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:h}=k1(e,t,n,i);let p;const g=new Uint8Array(4),v=(0,Ki.createView)(g),k=new Uint8Array(d.outputLen);for(let $=1,w=0;w<a;$++,w+=d.outputLen){const E=u.subarray(w,w+d.outputLen);v.setInt32(0,$,!1),(p=h._cloneInto(p)).update(g).digestInto(k),E.set(k.subarray(0,E.length)),await(0,Ki.asyncLoop)(o-1,l,x=>{d._cloneInto(p).update(k).digestInto(k);for(let I=0;I<E.length;I++)E[I]^=k[I]})}return E1(d,h,u,p,k)}ts.pbkdf2Async=B7;const j7=il(L6);var vn={},ml={};Object.defineProperty(ml,"__esModule",{value:!0});ml.SHA2=void 0;const nu=xt,Fs=bo;function U7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}class N7 extends Fs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Fs.createView)(this.buffer)}update(t){nu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Fs.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,Fs.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){nu.default.exists(this),nu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;U7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Fs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}ml.SHA2=N7;var C1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(V,Y=!1){return Y?{h:Number(V&t),l:Number(V>>n&t)}:{h:Number(V>>n&t)|0,l:Number(V&t)|0}}e.fromBig=i;function o(V,Y=!1){let F=new Uint32Array(V.length),J=new Uint32Array(V.length);for(let oe=0;oe<V.length;oe++){const{h:q,l:G}=i(V[oe],Y);[F[oe],J[oe]]=[q,G]}return[F,J]}e.split=o;const a=(V,Y)=>BigInt(V>>>0)<<n|BigInt(Y>>>0);e.toBig=a;const l=(V,Y,F)=>V>>>F,u=(V,Y,F)=>V<<32-F|Y>>>F,d=(V,Y,F)=>V>>>F|Y<<32-F,h=(V,Y,F)=>V<<32-F|Y>>>F,p=(V,Y,F)=>V<<64-F|Y>>>F-32,g=(V,Y,F)=>V>>>F-32|Y<<64-F,v=(V,Y)=>Y,k=(V,Y)=>V,$=(V,Y,F)=>V<<F|Y>>>32-F,w=(V,Y,F)=>Y<<F|V>>>32-F,E=(V,Y,F)=>Y<<F-32|V>>>64-F,x=(V,Y,F)=>V<<F-32|Y>>>64-F;function I(V,Y,F,J){const oe=(Y>>>0)+(J>>>0);return{h:V+F+(oe/2**32|0)|0,l:oe|0}}e.add=I;const O=(V,Y,F)=>(V>>>0)+(Y>>>0)+(F>>>0),A=(V,Y,F,J)=>Y+F+J+(V/2**32|0)|0,C=(V,Y,F,J)=>(V>>>0)+(Y>>>0)+(F>>>0)+(J>>>0),T=(V,Y,F,J,oe)=>Y+F+J+oe+(V/2**32|0)|0,j=(V,Y,F,J,oe)=>(V>>>0)+(Y>>>0)+(F>>>0)+(J>>>0)+(oe>>>0),N=(V,Y,F,J,oe,q)=>Y+F+J+oe+q+(V/2**32|0)|0,ne={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:h,rotrBH:p,rotrBL:g,rotr32H:v,rotr32L:k,rotlSH:$,rotlSL:w,rotlBH:E,rotlBL:x,add:I,add3L:O,add3H:A,add4L:C,add4H:T,add5H:N,add5L:j};e.default=ne})(C1);Object.defineProperty(vn,"__esModule",{value:!0});vn.sha384=vn.sha512_256=vn.sha512_224=Eu=vn.sha512=vn.SHA512=void 0;const D7=ml,Re=C1,vl=bo,[z7,H7]=Re.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),jr=new Uint32Array(80),Ur=new Uint32Array(80);class yo extends D7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:h,El:p,Fh:g,Fl:v,Gh:k,Gl:$,Hh:w,Hl:E}=this;return[t,n,i,o,a,l,u,d,h,p,g,v,k,$,w,E]}set(t,n,i,o,a,l,u,d,h,p,g,v,k,$,w,E){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=h|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=k|0,this.Gl=$|0,this.Hh=w|0,this.Hl=E|0}process(t,n){for(let O=0;O<16;O++,n+=4)jr[O]=t.getUint32(n),Ur[O]=t.getUint32(n+=4);for(let O=16;O<80;O++){const A=jr[O-15]|0,C=Ur[O-15]|0,T=Re.default.rotrSH(A,C,1)^Re.default.rotrSH(A,C,8)^Re.default.shrSH(A,C,7),j=Re.default.rotrSL(A,C,1)^Re.default.rotrSL(A,C,8)^Re.default.shrSL(A,C,7),N=jr[O-2]|0,ne=Ur[O-2]|0,V=Re.default.rotrSH(N,ne,19)^Re.default.rotrBH(N,ne,61)^Re.default.shrSH(N,ne,6),Y=Re.default.rotrSL(N,ne,19)^Re.default.rotrBL(N,ne,61)^Re.default.shrSL(N,ne,6),F=Re.default.add4L(j,Y,Ur[O-7],Ur[O-16]),J=Re.default.add4H(F,T,V,jr[O-7],jr[O-16]);jr[O]=J|0,Ur[O]=F|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:h,Dl:p,Eh:g,El:v,Fh:k,Fl:$,Gh:w,Gl:E,Hh:x,Hl:I}=this;for(let O=0;O<80;O++){const A=Re.default.rotrSH(g,v,14)^Re.default.rotrSH(g,v,18)^Re.default.rotrBH(g,v,41),C=Re.default.rotrSL(g,v,14)^Re.default.rotrSL(g,v,18)^Re.default.rotrBL(g,v,41),T=g&k^~g&w,j=v&$^~v&E,N=Re.default.add5L(I,C,j,H7[O],Ur[O]),ne=Re.default.add5H(N,x,A,T,z7[O],jr[O]),V=N|0,Y=Re.default.rotrSH(i,o,28)^Re.default.rotrBH(i,o,34)^Re.default.rotrBH(i,o,39),F=Re.default.rotrSL(i,o,28)^Re.default.rotrBL(i,o,34)^Re.default.rotrBL(i,o,39),J=i&a^i&u^a&u,oe=o&l^o&d^l&d;x=w|0,I=E|0,w=k|0,E=$|0,k=g|0,$=v|0,{h:g,l:v}=Re.default.add(h|0,p|0,ne|0,V|0),h=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const q=Re.default.add3L(V,F,oe);i=Re.default.add3H(q,ne,Y,J),o=q|0}({h:i,l:o}=Re.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Re.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Re.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h,l:p}=Re.default.add(this.Dh|0,this.Dl|0,h|0,p|0),{h:g,l:v}=Re.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:k,l:$}=Re.default.add(this.Fh|0,this.Fl|0,k|0,$|0),{h:w,l:E}=Re.default.add(this.Gh|0,this.Gl|0,w|0,E|0),{h:x,l:I}=Re.default.add(this.Hh|0,this.Hl|0,x|0,I|0),this.set(i,o,a,l,u,d,h,p,g,v,k,$,w,E,x,I)}roundClean(){jr.fill(0),Ur.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}vn.SHA512=yo;class F7 extends yo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class q7 extends yo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class W7 extends yo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Eu=vn.sha512=(0,vl.wrapConstructor)(()=>new yo);vn.sha512_224=(0,vl.wrapConstructor)(()=>new F7);vn.sha512_256=(0,vl.wrapConstructor)(()=>new q7);vn.sha384=(0,vl.wrapConstructor)(()=>new W7);const Z7=il(C6),V7=il(R7);Object.defineProperty(sn,"__esModule",{value:!0});var S1=sn.mnemonicToSeedSync=sn.mnemonicToSeed=j1=sn.validateMnemonic=sn.entropyToMnemonic=sn.mnemonicToEntropy=L1=sn.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const T1=xt,A1=ts,K7=j7,I1=vn,G7=Z7,ha=V7,Q7=e=>e[0]==="あいこくしん";function R1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function hd(e){const t=R1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function O1(e){T1.default.bytes(e,16,20,24,28,32)}function Y7(e,t=128){if(T1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return B1((0,G7.randomBytes)(t/8),e)}var L1=sn.generateMnemonic=Y7;const J7=e=>{const t=8-e.length/4;return new Uint8Array([(0,K7.sha256)(e)[0]>>t<<t])};function P1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),ha.utils.chain(ha.utils.checksum(1,J7),ha.utils.radix2(11,!0),ha.utils.alphabet(e))}function M1(e,t){const{words:n}=hd(e),i=P1(t).decode(n);return O1(i),i}sn.mnemonicToEntropy=M1;function B1(e,t){return O1(e),P1(t).encode(e).join(Q7(t)?"　":" ")}sn.entropyToMnemonic=B1;function X7(e,t){try{M1(e,t)}catch{return!1}return!0}var j1=sn.validateMnemonic=X7;const U1=e=>R1(`mnemonic${e}`);function e9(e,t=""){return(0,A1.pbkdf2Async)(I1.sha512,hd(e).nfkd,U1(t),{c:2048,dkLen:64})}sn.mnemonicToSeed=e9;function t9(e,t=""){return(0,A1.pbkdf2)(I1.sha512,hd(e).nfkd,U1(t),{c:2048,dkLen:64})}S1=sn.mnemonicToSeedSync=t9;const n9=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),N1=Uint8Array.from({length:16},(e,t)=>t),r9=N1.map(e=>(9*e+5)%16);let pd=[N1],gd=[r9];for(let e=0;e<4;e++)for(let t of[pd,gd])t.push(t[e].map(n=>n9[n]));const D1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),i9=pd.map((e,t)=>e.map(n=>D1[t][n])),s9=gd.map((e,t)=>e.map(n=>D1[t][n])),o9=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),a9=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),pa=(e,t)=>e<<t|e>>>32-t;function Jp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ga=new Uint32Array(16);class l9 extends Fg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let k=0;k<16;k++,n+=4)ga[k]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,h=this.h3|0,p=h,g=this.h4|0,v=g;for(let k=0;k<5;k++){const $=4-k,w=o9[k],E=a9[k],x=pd[k],I=gd[k],O=i9[k],A=s9[k];for(let C=0;C<16;C++){const T=pa(i+Jp(k,a,u,h)+ga[x[C]]+w,O[C])+g|0;i=g,g=h,h=pa(u,10)|0,u=a,a=T}for(let C=0;C<16;C++){const T=pa(o+Jp($,l,d,p)+ga[I[C]]+E,A[C])+v|0;o=v,v=p,p=pa(d,10)|0,d=l,l=T}}this.set(this.h1+u+p|0,this.h2+h+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ga.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const c9=cl(()=>new l9),ma=Nt.ProjectivePoint,ru=f1(Dn);function Xp(e){return BigInt(`0x${nn(e)}`)}function u9(e){return Wr(e.toString(16).padStart(64,"0"))}const d9=ed("Bitcoin seed"),iu={private:76066276,public:76067358},su=2147483648,f9=e=>c9(Dn(e)),h9=e=>gi(e).getUint32(0,!1),va=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return h9(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return ru.encode(this.serialize(this.versions.private,fi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return ru.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=iu){if(Zi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Oa(Eu,d9,t);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=iu){const i=ru.decode(t),o=gi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...l,privateKey:u.slice(1)}):new ui({...l,publicKey:u})}static fromJSON(t){return ui.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||iu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Nt.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Xp(t.privateKey),this.privKeyBytes=u9(this.privKey),this.pubKey=Nt.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ma.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=f9(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=su)throw new Error("Invalid index");a[2]==="'"&&(l+=su),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=va(t);if(t>=su){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=fi(new Uint8Array([0]),u,n)}else n=fi(this.pubKey,n);const i=Oa(Eu,this.chainCode,n),o=Xp(i.slice(0,32)),a=i.slice(32);if(!Nt.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=bt(this.privKey+o,Nt.CURVE.n);if(!Nt.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=ma.fromHex(this.pubKey).add(ma.fromPrivateKey(o));if(u.equals(ma.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new ui(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Zi(t,32),Nt.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Zi(t,32),Zi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Nt.Signature.fromCompact(n)}catch{return!1}return Nt.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Zi(n,33),fi(va(t),new Uint8Array([this.depth]),va(this.parentFingerprint),va(this.index),this.chainCode,n)}}var p9=Object.defineProperty,Mt=(e,t)=>{for(var n in t)p9(e,n,{get:t[n],enumerable:!0})};function z1(e){return nn(mo.getPublicKey(e))}var H1={};Mt(H1,{MessageNode:()=>F1,MessageQueue:()=>q1,insertEventIntoAscendingList:()=>m9,insertEventIntoDescendingList:()=>g9,normalizeURL:()=>Cu,utf8Decoder:()=>Dr,utf8Encoder:()=>zn});var Dr=new TextDecoder("utf-8"),zn=new TextEncoder;function Cu(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function g9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function m9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var F1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},q1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new F1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},ct=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(ct||{});function W1(e,t){let n=e;return n.pubkey=z1(t),n.id=bl(n),n.sig=y9(n,t),n}function v9(e){if(!md(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function bl(e){let t=Dn(zn.encode(v9(e)));return nn(t)}var b9=e=>e instanceof Object;function md(e){if(!b9(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function vd(e){try{return mo.verify(e.sig,bl(e),e.pubkey)}catch{return!1}}function y9(e,t){return nn(mo.sign(bl(e),t))}function _9(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function w9(e,t){for(let n=0;n<e.length;n++)if(_9(e[n],t))return!0;return!1}var x9={};Mt(x9,{getHex64:()=>yl,getInt:()=>Z1,getSubscriptionId:()=>V1,matchEventId:()=>$9,matchEventKind:()=>E9,matchEventPubkey:()=>k9});function yl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function Z1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function V1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function $9(e,t){return t===yl(e,"id")}function k9(e,t){return t===yl(e,"pubkey")}function E9(e,t){return t===Z1(e,"kind")}var e0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function C9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=e0(),d={},h={},p;async function g(){return p||(p=new Promise((x,I)=>{try{a=new WebSocket(e)}catch(T){I(T)}a.onopen=()=>{u.connect.forEach(T=>T()),x()},a.onerror=()=>{p=void 0,u.error.forEach(T=>T()),I()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(T=>T())};let O=new q1,A;a.onmessage=T=>{O.enqueue(T.data),A||(A=setInterval(C,0))};function C(){if(O.size===0){clearInterval(A),A=null;return}var T=O.dequeue();if(!T)return;let j=V1(T);if(j){let N=l[j];if(N&&N.alreadyHaveEvent&&N.alreadyHaveEvent(yl(T,"id"),e))return}try{let N=JSON.parse(T);switch(N[0]){case"EVENT":{let F=N[1],J=N[2];md(J)&&l[F]&&(l[F].skipVerification||vd(J))&&w9(l[F].filters,J)&&(l[F],(d[F]?.event||[]).forEach(oe=>oe(J)));return}case"COUNT":let ne=N[1],V=N[2];l[ne]&&(d[ne]?.count||[]).forEach(F=>F(V));return;case"EOSE":{let F=N[1];F in d&&(d[F].eose.forEach(J=>J()),d[F].eose=[]);return}case"OK":{let F=N[1],J=N[2],oe=N[3]||"";F in h&&(J?h[F].ok.forEach(q=>q()):h[F].failed.forEach(q=>q(oe)),h[F].ok=[],h[F].failed=[]);return}case"NOTICE":let Y=N[1];u.notice.forEach(F=>F(Y));return;case"AUTH":{let F=N[1];u.auth?.forEach(J=>J(F));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function k(){v()||await g()}async function $(x){let I=JSON.stringify(x);if(!(!v()&&(await new Promise(O=>setTimeout(O,1e3)),!v())))try{a.send(I)}catch(O){console.log(O)}}const w=(x,{verb:I="REQ",skipVerification:O=!1,alreadyHaveEvent:A=null,id:C=Math.random().toString().slice(2)}={})=>{let T=C;return l[T]={id:T,filters:x,skipVerification:O,alreadyHaveEvent:A},$([I,T,...x]),{sub:(j,N={})=>w(j||x,{skipVerification:N.skipVerification||O,alreadyHaveEvent:N.alreadyHaveEvent||A,id:T}),unsub:()=>{delete l[T],delete d[T],$(["CLOSE",T])},on:(j,N)=>{d[T]=d[T]||{event:[],count:[],eose:[]},d[T][j].push(N)},off:(j,N)=>{let ne=d[T],V=ne[j].indexOf(N);V>=0&&ne[j].splice(V,1)}}};function E(x,I){if(!x.id)throw new Error(`event ${x} has no id`);let O=x.id;return $([I,x]),{on:(A,C)=>{h[O]=h[O]||{ok:[],failed:[]},h[O][A].push(C)},off:(A,C)=>{let T=h[O];if(!T)return;let j=T[A].indexOf(C);j>=0&&T[A].splice(j,1)}}}return{url:e,sub:w,on:(x,I)=>{u[x].push(I),x==="connect"&&a?.readyState===1&&I()},off:(x,I)=>{let O=u[x].indexOf(I);O!==-1&&u[x].splice(O,1)},list:(x,I)=>new Promise(O=>{let A=w(x,I),C=[],T=setTimeout(()=>{A.unsub(),O(C)},n);A.on("eose",()=>{A.unsub(),clearTimeout(T),O(C)}),A.on("event",j=>{C.push(j)})}),get:(x,I)=>new Promise(O=>{let A=w([x],I),C=setTimeout(()=>{A.unsub(),O(null)},i);A.on("event",T=>{A.unsub(),clearTimeout(C),O(T)})}),count:x=>new Promise(I=>{let O=w(x,{...w,verb:"COUNT"}),A=setTimeout(()=>{O.unsub(),I(null)},o);O.on("count",C=>{O.unsub(),clearTimeout(A),I(C)})}),publish(x){return E(x,"EVENT")},auth(x){return E(x,"AUTH")},connect:k,close(){u=e0(),d={},h={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var S9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Cu(t)];n&&n.close()})}async ensureRelay(e){const t=Cu(e);this._conn[t]||(this._conn[t]=C9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,k)=>{if(n?.alreadyHaveEvent?.(v,k))return!0;let $=this._seenOn[v]||new Set;return $.add(k),this._seenOn[v]=$,i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,h=!1,p=setTimeout(()=>{h=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let k;try{k=await this.ensureRelay(v)}catch{w();return}if(!k)return;let $=k.sub(t,o);$.on("event",E=>{i.add(E.id);for(let x of l.values())x(E)}),$.on("eose",()=>{h||w()}),a.push($);function w(){if(d--,d===0){clearTimeout(p);for(let E of u.values())E()}}});let g={sub(v,k){return a.forEach($=>$.sub(v,k)),g},unsub(){a.forEach(v=>v.unsub())},on(v,k){v==="event"?l.add(k):v==="eose"&&u.add(k)},off(v,k){v==="event"?l.delete(k):v==="eose"&&u.delete(k)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],h=()=>a(l);i.set(a,h),d.on(o,h)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},_o={};Mt(_o,{BECH32_REGEX:()=>K1,decode:()=>_l,naddrEncode:()=>L9,neventEncode:()=>O9,noteEncode:()=>I9,nprofileEncode:()=>R9,npubEncode:()=>A9,nrelayEncode:()=>P9,nsecEncode:()=>T9});var gs=5e3,K1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function _l(e){let{prefix:t,words:n}=zt.decode(e,gs),i=new Uint8Array(zt.fromWords(n));switch(t){case"nprofile":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:nn(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nevent":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:nn(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[],author:o[2]?.[0]?nn(o[2][0]):void 0}}}case"naddr":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dr.decode(o[0][0]),pubkey:nn(o[2][0]),kind:parseInt(nn(o[3][0]),16),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nrelay":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Dr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:nn(i)};default:throw new Error(`unknown prefix ${t}`)}}function ba(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function T9(e){return bd("nsec",e)}function A9(e){return bd("npub",e)}function I9(e){return bd("note",e)}function bd(e,t){let n=Wr(t),i=zt.toWords(n);return zt.encode(e,i,gs)}function R9(e){let t=wl({0:[Wr(e.pubkey)],1:(e.relays||[]).map(i=>zn.encode(i))}),n=zt.toWords(t);return zt.encode("nprofile",n,gs)}function O9(e){let t=wl({0:[Wr(e.id)],1:(e.relays||[]).map(i=>zn.encode(i)),2:e.author?[Wr(e.author)]:[]}),n=zt.toWords(t);return zt.encode("nevent",n,gs)}function L9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=wl({0:[zn.encode(e.identifier)],1:(e.relays||[]).map(o=>zn.encode(o)),2:[Wr(e.pubkey)],3:[new Uint8Array(t)]}),i=zt.toWords(n);return zt.encode("naddr",i,gs)}function P9(e){let t=wl({0:[zn.encode(e)]}),n=zt.toWords(t);return zt.encode("nrelay",n,gs)}function wl(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),fi(...t)}var M9={};Mt(M9,{decrypt:()=>j9,encrypt:()=>B9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function B9(e,t,n){const i=Nt.getSharedSecret(e,"02"+t),o=G1(i);let a=Uint8Array.from(ul(16)),l=zn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),h=es.encode(new Uint8Array(d)),p=es.encode(new Uint8Array(a.buffer));return`${h}?iv=${p}`}async function j9(e,t,n){let[i,o]=n.split("?iv="),a=Nt.getSharedSecret(e,"02"+t),l=G1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=es.decode(i),h=es.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:h},u,d);return Dr.decode(p)}function G1(e){return e.slice(1,33)}var Q1={};Mt(Q1,{NIP05_REGEX:()=>Y1,queryProfile:()=>D9,searchDomain:()=>N9,useFetchImplementation:()=>U9});var Y1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,xl;try{xl=fetch}catch{}function U9(e){xl=e}async function N9(e,t=""){try{return(await(await xl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function D9(e){const t=e.match(Y1);if(!t)return null;const[n,i="_",o]=t;try{const a=await xl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=z9(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function z9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var H9={};Mt(H9,{generateSeedWords:()=>q9,privateKeyFromSeedWords:()=>F9,validateWords:()=>W9});function F9(e,t){let i=ui.fromMasterSeed(S1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return nn(i)}function q9(){return L1(dd)}function W9(e){return j1(e,dd)}var Z9={};Mt(Z9,{parse:()=>V9});function V9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,h={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=h;continue}if(d==="reply"){t.reply=h;continue}if(d==="mention"){t.mentions.push(h);continue}if(p){t.root=h;continue}if(g){t.reply=h;continue}t.mentions.push(h)}return t}var K9={};Mt(K9,{getPow:()=>G9});function G9(e){return Q9(Wr(e))}function Q9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=Y9(e[n]),t+=i,i===8);n++);return t}function Y9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var J9={};Mt(J9,{finishRepostEvent:()=>X9,getRepostedEvent:()=>ek,getRepostedEventPointer:()=>J1});function X9(e,t,n,i){return W1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function J1(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function ek(e,{skipVerification:t}={}){const n=J1(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!vd(i)))return i}var tk={};Mt(tk,{NOSTR_URI_REGEX:()=>$l,parse:()=>rk,test:()=>nk});var $l=new RegExp(`nostr:(${K1.source})`);function nk(e){return typeof e=="string"&&new RegExp(`^${$l.source}$`).test(e)}function rk(e){const t=e.match(new RegExp(`^${$l.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:_l(t[1])}}var ik={};Mt(ik,{finishReactionEvent:()=>sk,getReactedEventPointer:()=>ok});function sk(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return W1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function ok(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var ak={};Mt(ak,{createDelegation:()=>lk,getDelegator:()=>ck});function lk(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Dn(zn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=nn(mo.sign(o,e));return{from:z1(e),to:t.pubkey,cond:i,sig:a}}function ck(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,h,p]=a[u].split(/\b/);if(!(d==="kind"&&h==="="&&e.kind===parseInt(p))){if(d==="created_at"&&h==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&h===">"&&e.created_at>parseInt(p))continue;return null}}let l=Dn(zn.encode(`nostr:delegation:${e.pubkey}:${i}`));return mo.verify(o,l,n)?n:null}var uk={};Mt(uk,{matchAll:()=>dk,regex:()=>yd,replaceAll:()=>fk});var yd=()=>new RegExp(`\\b${$l.source}\\b`,"g");function*dk(e){const t=e.matchAll(yd());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:_l(o),start:n.index,end:n.index+i.length}}}function fk(e,t){return e.replaceAll(yd(),(n,i)=>t({uri:n,value:i,decoded:_l(i)}))}var hk={};Mt(hk,{useFetchImplementation:()=>pk,validateGithub:()=>gk});var _d;try{_d=fetch}catch{}function pk(e){_d=e}async function gk(e,t,n){try{return await(await _d(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var mk={};Mt(mk,{authenticate:()=>vk});var vk=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},bk={};Mt(bk,{getZapEndpoint:()=>_k,makeZapReceipt:()=>$k,makeZapRequest:()=>wk,useFetchImplementation:()=>yk,validateZapRequest:()=>xk});var wd;try{wd=fetch}catch{}function yk(e){wd=e}async function _k(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=zt.decode(n,1e3),u=zt.fromWords(l);t=Dr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await wd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function wk({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function xk(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!md(t))return"Zap request is not a valid Nostr event.";if(!vd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function $k({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const kk=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),X1=(e={})=>(()=>{const t=kk();return Ve(t,e,!0,!0),t})(),Ek=B('<button class="text-blue-500 underline">'),{noteEncode:Ck,neventEncode:Sk}=_o,Tk=e=>{try{return Ck(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Ak=e=>{try{return Sk({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},eo=e=>(()=>{const t=Ek();return L(t,_(fe,{get when(){return e.kind==null||e.kind===ct.Text},get fallback(){return Ak(e.eventId)},get children(){return Tk(e.eventId)}})),t})(),Ik=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],em=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],Rk=[...em,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],Ok=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Lk=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ms=()=>({id:Lk(),width:"medium"}),tm=e=>({...ms(),columnType:"Following",...e}),nm=e=>({...ms(),columnType:"Notification",...e}),Pk=e=>({...ms(),columnType:"Relays",...e}),rm=()=>Pk({name:"日本語",relayUrls:em,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),im=e=>({...ms(),columnType:"Posts",...e}),sm=e=>({...ms(),columnType:"Reactions",...e}),xd=e=>({...ms(),columnType:"Search",...e}),Mk=/^[0-9a-f]{64}$/,to=e=>{const t=typeof e=="string"&&e.length===64&&Mk.test(e);return t||console.warn("invalid id is ignored: ",e),t};class om{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&to(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&to(n))}taggedPubkeys(){return pr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}class am extends om{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}var We;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(We||(We={}));var Su;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Su||(Su={}));const ae=We.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=e=>{switch(typeof e){case"undefined":return ae.undefined;case"string":return ae.string;case"number":return isNaN(e)?ae.nan:ae.number;case"boolean":return ae.boolean;case"function":return ae.function;case"bigint":return ae.bigint;case"symbol":return ae.symbol;case"object":return Array.isArray(e)?ae.array:e===null?ae.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?ae.promise:typeof Map<"u"&&e instanceof Map?ae.map:typeof Set<"u"&&e instanceof Set?ae.set:typeof Date<"u"&&e instanceof Date?ae.date:ae.object;default:return ae.unknown}},X=We.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Bk=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Tn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const h=l.path[d];d===l.path.length-1?(u[h]=u[h]||{_errors:[]},u[h]._errors.push(n(l))):u[h]=u[h]||{_errors:[]},u=u[h],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,We.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Tn.create=e=>new Tn(e);const no=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===ae.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,We.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${We.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${We.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:We.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,We.assertNever(e)}return{message:n}};let lm=no;function jk(e){lm=e}function Ua(){return lm}const Na=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(h=>!!h).slice().reverse();for(const h of d)u=h(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},Uk=[];function ce(e,t){const n=Na({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Ua(),no].filter(i=>!!i)});e.common.issues.push(n)}class Pt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Ce;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Pt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ce;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Ce=Object.freeze({status:"aborted"}),cm=e=>({status:"dirty",value:e}),Ht=e=>({status:"valid",value:e}),Tu=e=>e.status==="aborted",Au=e=>e.status==="dirty",Da=e=>e.status==="valid",za=e=>typeof Promise<"u"&&e instanceof Promise;var me;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(me||(me={}));class Hn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const t0=(e,t)=>{if(Da(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Tn(e.common.issues);return this._error=n,this._error}}};function Ae(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Pe{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return zr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Pt,ctx:{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(za(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return t0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(za(o)?o:Promise.resolve(o));return t0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new In({schema:this,typeName:$e.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return gr.create(this,this._def)}nullable(){return yi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return An.create(this,this._def)}promise(){return rs.create(this,this._def)}or(t){return oo.create([this,t],this._def)}and(t){return ao.create(this,t,this._def)}transform(t){return new In({...Ae(this._def),schema:this,typeName:$e.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new ho({...Ae(this._def),innerType:this,defaultValue:n,typeName:$e.ZodDefault})}brand(){return new dm({typeName:$e.ZodBranded,type:this,...Ae(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Wa({...Ae(this._def),innerType:this,catchValue:n,typeName:$e.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return wo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Nk=/^c[^\s-]{8,}$/i,Dk=/^[a-z][a-z0-9]*$/,zk=/[0-9A-HJKMNP-TV-Z]{26}/,Hk=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Fk=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,qk=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,Wk=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Zk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Vk=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Kk(e,t){return!!((t==="v4"||!t)&&Wk.test(e)||(t==="v6"||!t)&&Zk.test(e))}class Cn extends Pe{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...me.errToObj(i)}),this.nonempty=t=>this.min(1,me.errToObj(t)),this.trim=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==ae.string){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:ae.string,received:a.parsedType}),Ce}const i=new Pt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?ce(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ce(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Fk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")qk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")Hk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")Nk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Dk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")zk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ce(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Vk(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?Kk(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):We.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Cn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...me.errToObj(t)})}url(t){return this._addCheck({kind:"url",...me.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...me.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...me.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...me.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...me.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...me.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...me.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...me.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...me.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...me.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...me.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...me.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...me.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...me.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...me.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Cn.create=e=>{var t;return new Cn({checks:[],typeName:$e.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ae(e)})};function Gk(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Vr extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==ae.number){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:ae.number,received:a.parsedType}),Ce}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="int"?We.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?Gk(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:X.not_finite,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:me.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:me.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:me.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:me.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&We.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Vr.create=e=>new Vr({checks:[],typeName:$e.ZodNumber,coerce:e?.coerce||!1,...Ae(e)});class Kr extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==ae.bigint){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:ae.bigint,received:a.parsedType}),Ce}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Kr.create=e=>{var t;return new Kr({checks:[],typeName:$e.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ae(e)})};class ro extends Pe{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==ae.boolean){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:ae.boolean,received:i.parsedType}),Ce}return Ht(t.data)}}ro.create=e=>new ro({typeName:$e.ZodBoolean,coerce:e?.coerce||!1,...Ae(e)});class vi extends Pe{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==ae.date){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:ae.date,received:a.parsedType}),Ce}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_date}),Ce}const i=new Pt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):We.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:me.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:me.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}vi.create=e=>new vi({checks:[],coerce:e?.coerce||!1,typeName:$e.ZodDate,...Ae(e)});class Ha extends Pe{_parse(t){if(this._getType(t)!==ae.symbol){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:ae.symbol,received:i.parsedType}),Ce}return Ht(t.data)}}Ha.create=e=>new Ha({typeName:$e.ZodSymbol,...Ae(e)});class io extends Pe{_parse(t){if(this._getType(t)!==ae.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:ae.undefined,received:i.parsedType}),Ce}return Ht(t.data)}}io.create=e=>new io({typeName:$e.ZodUndefined,...Ae(e)});class so extends Pe{_parse(t){if(this._getType(t)!==ae.null){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:ae.null,received:i.parsedType}),Ce}return Ht(t.data)}}so.create=e=>new so({typeName:$e.ZodNull,...Ae(e)});class ns extends Pe{constructor(){super(...arguments),this._any=!0}_parse(t){return Ht(t.data)}}ns.create=e=>new ns({typeName:$e.ZodAny,...Ae(e)});class mi extends Pe{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ht(t.data)}}mi.create=e=>new mi({typeName:$e.ZodUnknown,...Ae(e)});class yr extends Pe{_parse(t){const n=this._getOrReturnCtx(t);return ce(n,{code:X.invalid_type,expected:ae.never,received:n.parsedType}),Ce}}yr.create=e=>new yr({typeName:$e.ZodNever,...Ae(e)});class Fa extends Pe{_parse(t){if(this._getType(t)!==ae.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:ae.void,received:i.parsedType}),Ce}return Ht(t.data)}}Fa.create=e=>new Fa({typeName:$e.ZodVoid,...Ae(e)});class An extends Pe{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==ae.array)return ce(n,{code:X.invalid_type,expected:ae.array,received:n.parsedType}),Ce;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(ce(n,{code:l?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ce(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ce(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Hn(n,l,n.path,u)))).then(l=>Pt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Hn(n,l,n.path,u)));return Pt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new An({...this._def,minLength:{value:t,message:me.toString(n)}})}max(t,n){return new An({...this._def,maxLength:{value:t,message:me.toString(n)}})}length(t,n){return new An({...this._def,exactLength:{value:t,message:me.toString(n)}})}nonempty(t){return this.min(1,t)}}An.create=(e,t)=>new An({type:e,minLength:null,maxLength:null,exactLength:null,typeName:$e.ZodArray,...Ae(t)});function Vi(e){if(e instanceof st){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=gr.create(Vi(i))}return new st({...e._def,shape:()=>t})}else return e instanceof An?new An({...e._def,type:Vi(e.element)}):e instanceof gr?gr.create(Vi(e.unwrap())):e instanceof yi?yi.create(Vi(e.unwrap())):e instanceof Fn?Fn.create(e.items.map(t=>Vi(t))):e}class st extends Pe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=We.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==ae.object){const h=this._getOrReturnCtx(t);return ce(h,{code:X.invalid_type,expected:ae.object,received:h.parsedType}),Ce}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof yr&&this._def.unknownKeys==="strip"))for(const h in o.data)l.includes(h)||u.push(h);const d=[];for(const h of l){const p=a[h],g=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Hn(o,g,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof yr){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")u.length>0&&(ce(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Hn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of d){const g=await p.key;h.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Pt.mergeObjectSync(i,h)):Pt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return me.errToObj,new st({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=me.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new st({...this._def,unknownKeys:"strip"})}passthrough(){return new st({...this._def,unknownKeys:"passthrough"})}extend(t){return new st({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new st({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:$e.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new st({...this._def,catchall:t})}pick(t){const n={};return We.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new st({...this._def,shape:()=>n})}omit(t){const n={};return We.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new st({...this._def,shape:()=>n})}deepPartial(){return Vi(this)}partial(t){const n={};return We.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new st({...this._def,shape:()=>n})}required(t){const n={};return We.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof gr;)a=a._def.innerType;n[i]=a}}),new st({...this._def,shape:()=>n})}keyof(){return um(We.objectKeys(this.shape))}}st.create=(e,t)=>new st({shape:()=>e,unknownKeys:"strip",catchall:yr.create(),typeName:$e.ZodObject,...Ae(t)});st.strictCreate=(e,t)=>new st({shape:()=>e,unknownKeys:"strict",catchall:yr.create(),typeName:$e.ZodObject,...Ae(t)});st.lazycreate=(e,t)=>new st({shape:e,unknownKeys:"strip",catchall:yr.create(),typeName:$e.ZodObject,...Ae(t)});class oo extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Tn(u.ctx.common.issues));return ce(n,{code:X.invalid_union,unionErrors:l}),Ce}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const h={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:h}),h.common.issues.length&&l.push(h.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Tn(d));return ce(n,{code:X.invalid_union,unionErrors:u}),Ce}}get options(){return this._def.options}}oo.create=(e,t)=>new oo({options:e,typeName:$e.ZodUnion,...Ae(t)});const ka=e=>e instanceof co?ka(e.schema):e instanceof In?ka(e.innerType()):e instanceof uo?[e.value]:e instanceof Gr?e.options:e instanceof fo?Object.keys(e.enum):e instanceof ho?ka(e._def.innerType):e instanceof io?[void 0]:e instanceof so?[null]:null;class kl extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.object)return ce(n,{code:X.invalid_type,expected:ae.object,received:n.parsedType}),Ce;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ce(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ce)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=ka(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new kl({typeName:$e.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Ae(i)})}}function Iu(e,t){const n=zr(e),i=zr(t);if(e===t)return{valid:!0,data:e};if(n===ae.object&&i===ae.object){const o=We.objectKeys(t),a=We.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Iu(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===ae.array&&i===ae.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Iu(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===ae.date&&i===ae.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class ao extends Pe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(Tu(a)||Tu(l))return Ce;const u=Iu(a.value,l.value);return u.valid?((Au(a)||Au(l))&&n.dirty(),{status:n.value,value:u.data}):(ce(i,{code:X.invalid_intersection_types}),Ce)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}ao.create=(e,t,n)=>new ao({left:e,right:t,typeName:$e.ZodIntersection,...Ae(n)});class Fn extends Pe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.array)return ce(i,{code:X.invalid_type,expected:ae.array,received:i.parsedType}),Ce;if(i.data.length<this._def.items.length)return ce(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ce;!this._def.rest&&i.data.length>this._def.items.length&&(ce(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Hn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Pt.mergeArray(n,l)):Pt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Fn({...this._def,rest:t})}}Fn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Fn({items:e,typeName:$e.ZodTuple,rest:null,...Ae(t)})};class lo extends Pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.object)return ce(i,{code:X.invalid_type,expected:ae.object,received:i.parsedType}),Ce;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Hn(i,u,i.path,u)),value:l._parse(new Hn(i,i.data[u],i.path,u))});return i.common.async?Pt.mergeObjectAsync(n,o):Pt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Pe?new lo({keyType:t,valueType:n,typeName:$e.ZodRecord,...Ae(i)}):new lo({keyType:Cn.create(),valueType:t,typeName:$e.ZodRecord,...Ae(n)})}}class qa extends Pe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.map)return ce(i,{code:X.invalid_type,expected:ae.map,received:i.parsedType}),Ce;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],h)=>({key:o._parse(new Hn(i,u,i.path,[h,"key"])),value:a._parse(new Hn(i,d,i.path,[h,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const h=await d.key,p=await d.value;if(h.status==="aborted"||p.status==="aborted")return Ce;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const h=d.key,p=d.value;if(h.status==="aborted"||p.status==="aborted")return Ce;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}}}}qa.create=(e,t,n)=>new qa({valueType:t,keyType:e,typeName:$e.ZodMap,...Ae(n)});class bi extends Pe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.set)return ce(i,{code:X.invalid_type,expected:ae.set,received:i.parsedType}),Ce;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ce(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ce(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const h=new Set;for(const p of d){if(p.status==="aborted")return Ce;p.status==="dirty"&&n.dirty(),h.add(p.value)}return{status:n.value,value:h}}const u=[...i.data.values()].map((d,h)=>a._parse(new Hn(i,d,i.path,h)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:me.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:me.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:$e.ZodSet,...Ae(t)});class Gi extends Pe{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.function)return ce(n,{code:X.invalid_type,expected:ae.function,received:n.parsedType}),Ce;function i(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),no].filter(h=>!!h),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),no].filter(h=>!!h),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof rs?Ht(async(...u)=>{const d=new Tn([]),h=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),p=await l(...h);return await this._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})}):Ht((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Tn([i(u,d.error)]);const h=l(...d.data),p=this._def.returns.safeParse(h,a);if(!p.success)throw new Tn([o(h,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Gi({...this._def,args:Fn.create(t).rest(mi.create())})}returns(t){return new Gi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Gi({args:t||Fn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:$e.ZodFunction,...Ae(i)})}}class co extends Pe{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}co.create=(e,t)=>new co({getter:e,typeName:$e.ZodLazy,...Ae(t)});class uo extends Pe{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ce(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Ce}return{status:"valid",value:t.data}}get value(){return this._def.value}}uo.create=(e,t)=>new uo({value:e,typeName:$e.ZodLiteral,...Ae(t)});function um(e,t){return new Gr({values:e,typeName:$e.ZodEnum,...Ae(t)})}class Gr extends Pe{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{expected:We.joinValues(i),received:n.parsedType,code:X.invalid_type}),Ce}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{received:n.data,code:X.invalid_enum_value,options:i}),Ce}return Ht(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Gr.create(t)}exclude(t){return Gr.create(this.options.filter(n=>!t.includes(n)))}}Gr.create=um;class fo extends Pe{_parse(t){const n=We.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==ae.string&&i.parsedType!==ae.number){const o=We.objectValues(n);return ce(i,{expected:We.joinValues(o),received:i.parsedType,code:X.invalid_type}),Ce}if(n.indexOf(t.data)===-1){const o=We.objectValues(n);return ce(i,{received:i.data,code:X.invalid_enum_value,options:o}),Ce}return Ht(t.data)}get enum(){return this._def.values}}fo.create=(e,t)=>new fo({values:e,typeName:$e.ZodNativeEnum,...Ae(t)});class rs extends Pe{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.promise&&n.common.async===!1)return ce(n,{code:X.invalid_type,expected:ae.promise,received:n.parsedType}),Ce;const i=n.parsedType===ae.promise?n.data:Promise.resolve(n.data);return Ht(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}rs.create=(e,t)=>new rs({type:e,typeName:$e.ZodPromise,...Ae(t)});class In extends Pe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===$e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{ce(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Ce:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Ce:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Da(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Da(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);We.assertNever(o)}}In.create=(e,t,n)=>new In({schema:e,typeName:$e.ZodEffects,effect:t,...Ae(n)});In.createWithPreprocess=(e,t,n)=>new In({schema:t,effect:{type:"preprocess",transform:e},typeName:$e.ZodEffects,...Ae(n)});class gr extends Pe{_parse(t){return this._getType(t)===ae.undefined?Ht(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}gr.create=(e,t)=>new gr({innerType:e,typeName:$e.ZodOptional,...Ae(t)});class yi extends Pe{_parse(t){return this._getType(t)===ae.null?Ht(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}yi.create=(e,t)=>new yi({innerType:e,typeName:$e.ZodNullable,...Ae(t)});class ho extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===ae.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ho.create=(e,t)=>new ho({innerType:e,typeName:$e.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ae(t)});class Wa extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return za(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Wa.create=(e,t)=>new Wa({innerType:e,typeName:$e.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ae(t)});class Za extends Pe{_parse(t){if(this._getType(t)!==ae.nan){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:ae.nan,received:i.parsedType}),Ce}return{status:"valid",value:t.data}}}Za.create=e=>new Za({typeName:$e.ZodNaN,...Ae(e)});const Qk=Symbol("zod_brand");class dm extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class wo extends Pe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ce:a.status==="dirty"?(n.dirty(),cm(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ce:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new wo({in:t,out:n,typeName:$e.ZodPipeline})}}const fm=(e,t={},n)=>e?ns.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,h=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...h,fatal:d})}}):ns.create(),Yk={object:st.lazycreate};var $e;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})($e||($e={}));const Jk=(e,t={message:`Input not instance of ${e.name}`})=>fm(n=>n instanceof e,t),hm=Cn.create,pm=Vr.create,Xk=Za.create,eE=Kr.create,gm=ro.create,tE=vi.create,nE=Ha.create,rE=io.create,iE=so.create,sE=ns.create,oE=mi.create,aE=yr.create,lE=Fa.create,cE=An.create,uE=st.create,dE=st.strictCreate,fE=oo.create,hE=kl.create,pE=ao.create,gE=Fn.create,mE=lo.create,vE=qa.create,bE=bi.create,yE=Gi.create,_E=co.create,wE=uo.create,xE=Gr.create,$E=fo.create,kE=rs.create,n0=In.create,EE=gr.create,CE=yi.create,SE=In.createWithPreprocess,TE=wo.create,AE=()=>hm().optional(),IE=()=>pm().optional(),RE=()=>gm().optional(),OE={string:e=>Cn.create({...e,coerce:!0}),number:e=>Vr.create({...e,coerce:!0}),boolean:e=>ro.create({...e,coerce:!0}),bigint:e=>Kr.create({...e,coerce:!0}),date:e=>vi.create({...e,coerce:!0})},LE=Ce;var ot=Object.freeze({__proto__:null,defaultErrorMap:no,setErrorMap:jk,getErrorMap:Ua,makeIssue:Na,EMPTY_PATH:Uk,addIssueToContext:ce,ParseStatus:Pt,INVALID:Ce,DIRTY:cm,OK:Ht,isAborted:Tu,isDirty:Au,isValid:Da,isAsync:za,get util(){return We},get objectUtil(){return Su},ZodParsedType:ae,getParsedType:zr,ZodType:Pe,ZodString:Cn,ZodNumber:Vr,ZodBigInt:Kr,ZodBoolean:ro,ZodDate:vi,ZodSymbol:Ha,ZodUndefined:io,ZodNull:so,ZodAny:ns,ZodUnknown:mi,ZodNever:yr,ZodVoid:Fa,ZodArray:An,ZodObject:st,ZodUnion:oo,ZodDiscriminatedUnion:kl,ZodIntersection:ao,ZodTuple:Fn,ZodRecord:lo,ZodMap:qa,ZodSet:bi,ZodFunction:Gi,ZodLazy:co,ZodLiteral:uo,ZodEnum:Gr,ZodNativeEnum:fo,ZodPromise:rs,ZodEffects:In,ZodTransformer:In,ZodOptional:gr,ZodNullable:yi,ZodDefault:ho,ZodCatch:Wa,ZodNaN:Za,BRAND:Qk,ZodBranded:dm,ZodPipeline:wo,custom:fm,Schema:Pe,ZodSchema:Pe,late:Yk,get ZodFirstPartyTypeKind(){return $e},coerce:OE,any:sE,array:cE,bigint:eE,boolean:gm,date:tE,discriminatedUnion:hE,effect:n0,enum:xE,function:yE,instanceof:Jk,intersection:pE,lazy:_E,literal:wE,map:vE,nan:Xk,nativeEnum:$E,never:aE,null:iE,nullable:CE,number:pm,object:uE,oboolean:RE,onumber:IE,optional:EE,ostring:AE,pipeline:TE,preprocess:SE,promise:kE,record:mE,set:bE,strictObject:dE,string:hm,symbol:nE,transformer:n0,tuple:gE,undefined:rE,union:fE,unknown:oE,void:lE,NEVER:LE,ZodIssueCode:X,quotelessJson:Bk,ZodError:Tn});const{decode:PE}=_o,ME=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,BE=/(?:#\[(?<idx>\d+)\])/g,jE=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,UE=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,NE=/:(?<emoji>\w+):/gu,mm=e=>{const t=[...e.matchAll(ME),...e.matchAll(BE),...e.matchAll(jE),...e.matchAll(UE),...e.matchAll(NE)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=PE(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},DE=e=>t=>e.safeParse(t).success,zE=ot.tuple([ot.literal("emoji"),ot.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),ot.string().url()]),HE=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&to(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let FE=class extends am{#e;#t;constructor(t){if(t.kind!==ct.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=mm(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&to(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&to(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=HE(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(DE(zE))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const hr=e=>new am(e),El=e=>new FE(e),qE=()=>{const e=[...Ik];return window.navigator.language.includes("ja")&&e.push(...Rk),e},vm=()=>({relayUrls:qE(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),WE=e=>JSON.stringify(e),ZE=e=>({...vm(),...JSON.parse(e)}),VE=Mx(()=>window.localStorage,WE,ZE),[qs,Kt]=Bx("RabbitConfig",vm(),VE),Me=()=>{const e=x=>{Kt("relayUrls",I=>pr([...I,x]))},t=x=>{Kt("relayUrls",I=>I.filter(O=>O!==x))},n=x=>{Kt("mutedPubkeys",I=>pr([...I,x]))},i=x=>{Kt("mutedPubkeys",I=>I.filter(O=>O!==x))},o=x=>{Kt("mutedKeywords",I=>pr([...I,x]))},a=x=>{Kt("mutedKeywords",I=>I.filter(O=>O!==x))},l=x=>{Kt("columns",I=>{const O=I.findIndex(A=>A.id===x.id);if(O>=0){const A=[...I];return A.splice(O,1,x),A}return[...I,x]})},u=(x,I)=>{Kt("columns",O=>{const A=I-1,C=Math.max(Math.min(A,O.length),0),T=O.findIndex(ne=>ne.id===x);if(T<0||C===T)return O;console.log(T,C);const j=[...O],[N]=j.splice(T,1);return j.splice(C,0,N),j})},d=x=>{Kt("columns",I=>I.filter(O=>O.id!==x))},h=x=>{Kt("customEmojis",I=>({...I,[x.shortcode]:x}))},p=x=>{Kt("customEmojis",I=>{const O=Object.fromEntries(x.map(A=>[A.shortcode,A]));return{...I,...O}})},g=x=>{Kt("customEmojis",I=>({...I,[x]:void 0}))},v=x=>qs.customEmojis[x],k=x=>qs.mutedPubkeys.includes(x),$=x=>x.kind===ct.Text?qs.mutedKeywords.some(I=>x.content.includes(I)):!1;return{config:()=>qs,setConfig:Kt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:x})=>{if((qs.columns?.length??0)>0)return;const I=[tm({width:"widest",pubkey:x}),nm({pubkey:x}),im({name:"自分の投稿",pubkey:x}),sm({name:"自分のリアクション",pubkey:x})];navigator.language.includes("ja")&&I.splice(2,0,rm()),Kt("columns",()=>[...I])},saveEmoji:h,saveEmojis:p,removeEmoji:g,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:k,shouldMuteEvent:x=>{const I=hr(x);return k(x.pubkey)||I.taggedPubkeys().some(k)||x.kind===ct.Text&&$(x)}}},[KE]=xe(new S9),Cl=()=>KE,[bm,r0]=Yi({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...bm})},1e3);const ym=()=>({stats:bm,setActiveSubscriptions:n=>r0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>r0("activeBatchSubscriptions",n)});let i0=0;const GE=()=>{const e=i0;return i0+=1,e};class QE{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=GE(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const YE=e=>{const t=ze(e),n=ze(()=>t().batchSize??100),i=ze(()=>t().interval??2e3),[o,a]=xe([]);let l;const u=()=>{const{executor:g}=t(),v=o();v.length>0&&(a([]),g(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(v=>[...v,g]):(u(),a([g])),d()},removeTask:g=>{a(v=>v.filter(k=>k!==g))}}};class vs extends QE{addEvent(t){this.updateWith(n=>[...n??[],t])}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}}let Ru=0;const{setActiveBatchSubscriptions:JE}=ym();setInterval(()=>{JE(Ru)},1e3);const XE=e=>e.kind>=3e4&&e.kind<4e4,eC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{addTask:tC,removeTask:nC}=YE(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(C=>{if(C.req.type==="Event"){const T=n.get(C.req.eventId)??[];n.set(C.req.eventId,[...T,C])}else if(C.req.type==="Profile"){const T=t.get(C.req.pubkey)??[];t.set(C.req.pubkey,[...T,C])}else if(C.req.type==="Reactions"){const T=i.get(C.req.mentionedEventId)??[];i.set(C.req.mentionedEventId,[...T,C])}else if(C.req.type==="Reposts"){const T=o.get(C.req.mentionedEventId)??[];o.set(C.req.mentionedEventId,[...T,C])}else if(C.req.type==="ZapReceipts"){const T=a.get(C.req.mentionedEventId)??[];o.set(C.req.mentionedEventId,[...T,C])}else if(C.req.type==="ParameterizedReplaceableEvent"){const T=eC(C.req),j=l.get(T)??[];l.set(T,[...j,C])}else if(C.req.type==="Followings"){const T=u.get(C.req.pubkey)??[];u.set(C.req.pubkey,[...T,C])}});const d=[...n.keys()],h=[...t.keys()],p=[...i.keys()],g=[...o.keys()],v=[...a.keys()],k=[...u.keys()],$=[];if(d.length>0&&$.push({ids:d}),h.length>0&&$.push({kinds:[ct.Metadata],authors:h}),p.length>0&&$.push({kinds:[ct.Reaction],"#e":p}),g.length>0&&$.push({kinds:[6],"#e":g}),v.length>0&&$.push({kinds:[9735],"#e":v}),k.length>0&&$.push({kinds:[ct.Contacts],authors:k}),l.size>0&&Array.from(l.values()).forEach(([C])=>{if(C.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:T,author:j,identifier:N}}=C;$.push({kinds:[T],authors:[j],"#d":[N]})}),$.length===0)return;const w=(C,T)=>{C.forEach(j=>{j.updateWith(N=>[...N??[],T])})},E=()=>{e.forEach(C=>{C.complete()})},{config:x,shouldMuteEvent:I}=Me(),A=Cl()().sub(x().relayUrls,$,{});Ru+=1,A.on("event",C=>{if(C.kind===ct.Metadata){const T=t.get(C.pubkey)??[];w(T,C);return}if(C.kind===ct.Reaction){const T=hr(C).lastTaggedEventId();if(T!=null){const j=i.get(T)??[];w(j,C)}}else if(C.kind===6){const T=hr(C).lastTaggedEventId();if(T!=null){const j=o.get(T)??[];w(j,C)}}else if(C.kind===ct.Zap)hr(C).eTags().forEach(([,j])=>{const N=o.get(j)??[];w(N,C)});else if(C.kind===ct.Contacts){const T=u.get(C.pubkey)??[];w(T,C)}else if(XE(C)){const T=hr(C).findFirstTagByName("d")?.[1];if(T!=null){const j=`${C.kind}:${C.pubkey}:${T}`,N=l.get(j)??[];w(N,C)}else console.warn("identifier is undefined")}else{const T=n.get(C.id)??[];T.length>0?w(T,C):console.warn("unknown event received")}}),A.on("eose",()=>{E(),A.unsub(),Ru-=1})}})),bs=({task:e,signal:t})=>{tC(e),t?.addEventListener("abort",()=>nC(e))},$d=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),wr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(l))},e)});return Promise.race([n,i])},_m=e=>{const t=ze(e),n=wi(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new vs({type:"Event",eventId:u}),h=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return bs({task:d,signal:a}),wr(15e3,`useEvent: ${u}`)(h)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},on=e=>t=>e.some(n=>n==null)?null:t(e),rC=B("<span>投稿が見つかりません"),iC=B('<div class="truncate">読み込み中 '),is=e=>{const[t,n]=Sx(e,["eventId"]),{shouldMuteEvent:i}=Me(),{event:o,query:a}=_m(()=>on([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return _(Sn,{get fallback(){return(()=>{const u=rC();return u.firstChild,L(u,()=>e.eventId,null),u})()},get children(){return[_(Fe,{get when(){return l()},children:null}),_(Fe,{get when(){return o()},keyed:!0,children:u=>_(av,Tx({event:u},n))}),_(Fe,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=iC();return d.firstChild,L(d,_(eo,{eventId:u}),null),d})()})]}})},sC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},oC=e=>{try{return sC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},ys=e=>{const t=_i(),n=ze(e),i=ze(()=>["useProfile",n()]),o=wi(i,({queryKey:u,signal:d})=>{const[,h]=u;if(h==null)return null;const{pubkey:p}=h,g=new vs({type:"Profile",pubkey:p}),v=g.firstEventPromise().catch(()=>{throw new Error(`profile not found: ${p}`)});return g.onUpdate(k=>{const $=$d(k);t.setQueryData(u,$)}),bs({task:g,signal:d}),wr(3e3,`useProfile: ${p}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:ze(()=>{if(o.data==null)return null;const{content:u}=o.data;return oC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:aC}=_o,Sl=e=>{try{return aC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Tl=e=>{const{profile:t}=ys(()=>({pubkey:e.pubkey}));return _(Sn,{get fallback(){return Sl(e.pubkey)},get children(){return[_(Fe,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),_(Fe,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",ze(()=>t()?.name)]}})]}})},wm=e=>{const[t,n]=xe(new Date);return Un(()=>{const i=setInterval(()=>{n(new Date)},e().interval);vr(()=>clearInterval(i))}),t},lC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},s0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,cC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},uC=e=>{switch(e.kind){case"today":return s0(e.value);case"yesterday":return`昨日 ${s0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},dC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,fC=(e,t)=>{const n=dC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},o0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),hC=e=>new Date(+e-24*60*60*1e3),xm=(e,t,n)=>o0(e,t)?n({kind:"today",value:e}):o0(e,hC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),pC=(e,t=new Date)=>xm(e,t,cC),gC=(e,t=new Date)=>xm(e,t,uC),a0=(e,t=new Date,n=lC)=>n(fC(e,t)),l0=wm(()=>({interval:7e3})),c0=wm(()=>({interval:60*1e3})),$m=()=>{const{config:e}=Me();return t=>{switch(e().dateFormat){case"absolute-long":return pC(t,c0());case"absolute-short":return gC(t,c0());case"relative":return a0(t,l0());default:return a0(t,l0())}}},[mC,Wi]=xe({type:"Closed"}),Yr=()=>({modalState:mC,setModalState:Wi,showProfile:a=>{Wi({type:"Profile",pubkey:a})},showProfileEdit:()=>{Wi({type:"ProfileEdit"})},showAddColumn:()=>{Wi({type:"AddColumn"})},showAbout:()=>{Wi({type:"About"})},closeModal:()=>{Wi({type:"Closed"})}}),vC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),km=e=>{const{showProfile:t}=Yr(),n=$m(),i=ze(()=>hr(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=vC(),l=a.firstChild,u=l.firstChild,d=u.nextSibling,h=d.firstChild,p=d.nextSibling,g=l.nextSibling;return L(u,_(X1,{})),h.$$click=()=>t(e.event.pubkey),L(h,_(Tl,{get pubkey(){return e.event.pubkey}})),L(p,()=>n(i().createdAtAsDate())),L(g,_(is,{get eventId(){return o()}})),a})()};at(["click"]);const bC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),yC=(e={})=>(()=>{const t=bC();return Ve(t,e,!0,!0),t})(),_C=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Em=(e={})=>(()=>{const t=_C();return Ve(t,e,!0,!0),t})(),wC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),kd=(e={})=>(()=>{const t=wC();return Ve(t,e,!0,!0),t})(),xC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Cm=(e={})=>(()=>{const t=xC();return Ve(t,e,!0,!0),t})(),$C=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Ed=(e={})=>(()=>{const t=$C();return Ve(t,e,!0,!0),t})(),kC=B('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Cd=e=>{let t,n;const[i,o]=xe(!1),[a,l]=xe({}),u=Ax(()=>e.children),d=()=>o(!1),h=()=>o($=>!$),p=$=>{const w=$.target;w!=null&&!n?.contains(w)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},k=()=>{if(t==null||n==null)return;const $=t?.getBoundingClientRect(),w=n?.getBoundingClientRect();let{top:E,left:x}=$;e.position==="left"?x-=$.width:e.position==="right"?x+=$.width:e.position==="top"?(E-=$.height,x-=$.left+$.width/2):(E+=$.height,x+=$.width/2),E=Math.min(E,window.innerHeight-w.height),x=Math.min(x,window.innerWidth-w.width),l({left:`${x}px`,top:`${E}px`})};return Un(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),Un(rl(u,()=>{k()})),Un(()=>{i()&&k()}),an(()=>{e.ref?.({close:d})}),vr(()=>v()),(()=>{const $=kC(),w=$.firstChild,E=w.nextSibling;w.$$click=()=>{h(),k()};const x=t;typeof x=="function"?br(x,w):t=w,L(w,()=>e.button);const I=n;return typeof I=="function"?br(I,E):n=E,L(E,u),Be(O=>{const A=!i(),C=!!i(),T=a();return A!==O._v$&&E.classList.toggle("hidden",O._v$=A),C!==O._v$2&&E.classList.toggle("block",O._v$2=C),O._v$3=Ix(E,T,O._v$3),O},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})()};at(["click"]);const EC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),CC=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),SC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=EC(),i=n.firstChild;return i.$$click=t,L(i,()=>e.item.content()),n})()},Sm=e=>{let t;const n=()=>t?.close();return _(Cd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=CC();return L(i,_(It,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>_(SC,{item:o,onClose:n})})),i}})};at(["click"]);function Tm(e){return e&&e.__esModule?e.default:e}function kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Al,be,Am,Vs,Im,u0,Va={},Rm=[],TC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Hr(e,t){for(var n in t)e[n]=t[n];return e}function Om(e){var t=e.parentNode;t&&t.removeChild(e)}function Ou(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Al.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Ea(e,l,i,o,null)}function Ea(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Am};return o==null&&be.vnode!=null&&be.vnode(a),a}function cr(){return{current:null}}function ss(e){return e.children}function Nn(e,t){this.props=e,this.context=t}function os(e,t){if(t==null)return e.__?os(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?os(e):null}function Lm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Lm(e)}}function d0(e){(!e.__d&&(e.__d=!0)&&Vs.push(e)&&!Ka.__r++||u0!==be.debounceRendering)&&((u0=be.debounceRendering)||Im)(Ka)}function Ka(){for(var e;Ka.__r=Vs.length;)e=Vs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Vs=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Hr({},a)).__v=a.__v+1,Sd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??os(a),a.__h),jm(i,a),a.__e!=l&&Lm(a)))})}function Pm(e,t,n,i,o,a,l,u,d,h){var p,g,v,k,$,w,E,x=i&&i.__k||Rm,I=x.length;for(n.__k=[],p=0;p<t.length;p++)if((k=n.__k[p]=(k=t[p])==null||typeof k=="boolean"?null:typeof k=="string"||typeof k=="number"||typeof k=="bigint"?Ea(null,k,null,null,k):Array.isArray(k)?Ea(ss,{children:k},null,null,null):k.__b>0?Ea(k.type,k.props,k.key,null,k.__v):k)!=null){if(k.__=n,k.__b=n.__b+1,(v=x[p])===null||v&&k.key==v.key&&k.type===v.type)x[p]=void 0;else for(g=0;g<I;g++){if((v=x[g])&&k.key==v.key&&k.type===v.type){x[g]=void 0;break}v=null}Sd(e,k,v=v||Va,o,a,l,u,d,h),$=k.__e,(g=k.ref)&&v.ref!=g&&(E||(E=[]),v.ref&&E.push(v.ref,null,k),E.push(g,k.__c||$,k)),$!=null?(w==null&&(w=$),typeof k.type=="function"&&k.__k===v.__k?k.__d=d=Mm(k,d,e):d=Bm(e,k,v,x,$,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=os(v))}for(n.__e=w,p=I;p--;)x[p]!=null&&(typeof n.type=="function"&&x[p].__e!=null&&x[p].__e==n.__d&&(n.__d=os(i,p+1)),Nm(x[p],x[p]));if(E)for(p=0;p<E.length;p++)Um(E[p],E[++p],E[++p])}function Mm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Mm(i,t,n):Bm(n,i,i,o,i.__e,t));return t}function Ga(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ga(n,t)}):t.push(e)),t}function Bm(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function AC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Qa(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Qa(e,a,t[a],n[a],i)}function f0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||TC.test(t)?n:n+"px"}function Qa(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||f0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||f0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?p0:h0,a):e.removeEventListener(t,a?p0:h0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function h0(e){this.l[e.type+!1](be.event?be.event(e):e)}function p0(e){this.l[e.type+!0](be.event?be.event(e):e)}function Sd(e,t,n,i,o,a,l,u,d){var h,p,g,v,k,$,w,E,x,I,O,A=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(h=be.__b)&&h(t);try{e:if(typeof A=="function"){if(E=t.props,x=(h=A.contextType)&&i[h.__c],I=h?x?x.props.value:h.__:i,n.__c?w=(p=t.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?t.__c=p=new A(E,I):(t.__c=p=new Nn(E,I),p.constructor=A,p.render=RC),x&&x.sub(p),p.props=E,p.state||(p.state={}),p.context=I,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),A.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Hr({},p.__s)),Hr(p.__s,A.getDerivedStateFromProps(E,p.__s))),v=p.props,k=p.state,g)A.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(A.getDerivedStateFromProps==null&&E!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,I),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(E,p.__s,I)===!1||t.__v===n.__v){p.props=E,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(C){C&&(C.__=t)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,I),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,k,$)})}p.context=I,p.props=E,p.state=p.__s,(h=be.__r)&&h(t),p.__d=!1,p.__v=t,p.__P=e,h=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Hr(Hr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||($=p.getSnapshotBeforeUpdate(v,k)),O=h!=null&&h.type===ss&&h.key==null?h.props.children:h,Pm(e,Array.isArray(O)?O:[O],t,n,i,o,a,l,u,d),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),w&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=IC(n.__e,t,n,i,o,a,l,d);(h=be.diffed)&&h(t)}catch(C){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),be.__e(C,t,n)}}function jm(e,t){be.__c&&be.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){be.__e(i,n.__v)}})}function IC(e,t,n,i,o,a,l,u){var d,h,p,g=n.props,v=t.props,k=t.type,$=0;if(k==="svg"&&(o=!0),a!=null){for(;$<a.length;$++)if((d=a[$])&&"setAttribute"in d==!!k&&(k?d.localName===k:d.nodeType===3)){e=d,a[$]=null;break}}if(e==null){if(k===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,v.is&&v),a=null,u=!1}if(k===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Al.call(e.childNodes),h=(g=n.props||Va).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},$=0;$<e.attributes.length;$++)g[e.attributes[$].name]=e.attributes[$].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(AC(e,v,g,o,u),p)t.__k=[];else if($=t.props.children,Pm(e,Array.isArray($)?$:[$],t,n,i,o&&k!=="foreignObject",a,l,a?a[0]:n.__k&&os(n,0),u),a!=null)for($=a.length;$--;)a[$]!=null&&Om(a[$]);u||("value"in v&&($=v.value)!==void 0&&($!==g.value||$!==e.value||k==="progress"&&!$)&&Qa(e,"value",$,g.value,!1),"checked"in v&&($=v.checked)!==void 0&&$!==e.checked&&Qa(e,"checked",$,g.checked,!1))}return e}function Um(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){be.__e(i,n)}}function Nm(e,t,n){var i,o;if(be.unmount&&be.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Um(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){be.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Nm(i[o],t,typeof e.type!="function");n||e.__e==null||Om(e.__e),e.__e=e.__d=void 0}function RC(e,t,n){return this.constructor(e,n)}function Dm(e,t,n){var i,o,a;be.__&&be.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Sd(t,e=(!i&&n||t).__k=Ou(ss,null,[e]),o||Va,Va,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Al.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),jm(a,e)}Al=Rm.slice,be={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Am=0,Nn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Hr({},this.state),typeof e=="function"&&(e=e(Hr({},n),this.props)),e&&Hr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),d0(this))},Nn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),d0(this))},Nn.prototype.render=ss,Vs=[],Im=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ka.__r=0;var OC=0;function W(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--OC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return be.vnode&&be.vnode(d),d}function LC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function PC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var qr={set:LC,get:PC};const ou=new Map,MC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function BC(){for(const{v:e,emoji:t}of MC)if(zm(t))return e}function jC(){return!zm("🇨🇦")}function zm(e){if(ou.has(e))return ou.get(e);const t=UC(e);return ou.set(e,t),t}const UC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,h=Math.floor(u/4/n),p=e.getImageData(d,h,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var g0={latestVersion:BC,noCountryFlags:jC};const Lu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Tt=null;function NC(e){Tt||(Tt=qr.get("frequently")||{});const t=e.id||e;t&&(Tt[t]||(Tt[t]=0),Tt[t]+=1,qr.set("last",t),qr.set("frequently",Tt))}function DC({maxFrequentRows:e,perLine:t}){if(!e)return[];Tt||(Tt=qr.get("frequently"));let n=[];if(!Tt){Tt={};for(let a in Lu.slice(0,t)){const l=Lu[a];Tt[l]=t-a,n.push(l)}return n}const i=e*t,o=qr.get("last");for(let a in Tt)n.push(a);if(n.sort((a,l)=>{const u=Tt[l],d=Tt[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Tt[l];o&&n.indexOf(o)==-1&&(delete Tt[n[n.length-1]],n.splice(-1,1,o)),qr.set("frequently",Tt)}return n}var Hm={add:NC,get:DC,DEFAULTS:Lu},Fm={};Fm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var fr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Lt=null,Ue=null;const au={};async function m0(e){if(au[e])return au[e];const n=await(await fetch(e)).json();return au[e]=n,n}let lu=null,qm=null,Wm=!1;function Il(e,{caller:t}={}){return lu||(lu=new Promise(n=>{qm=n})),e?zC(e):t&&!Wm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),lu}async function zC(e){Wm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=fr.emojiVersion.value),n||(n=fr.set.value),i||(i=fr.locale.value),Ue)Ue.categories=Ue.categories.filter(d=>!d.name);else{Ue=(typeof e.data=="function"?await e.data():e.data)||await m0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Ue.emoticons={},Ue.natives={},Ue.categories.unshift({id:"frequent",emojis:[]});for(const d in Ue.aliases){const h=Ue.aliases[d],p=Ue.emojis[h];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}Ue.originalCategories=Ue.categories}if(Lt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Tm(Fm):await m0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const h=e.custom[d],p=e.custom[d-1];if(!(!h.emojis||!h.emojis.length)){h.id||(h.id=`custom_${d+1}`),h.name||(h.name=Lt.categories.custom),p&&!h.icon&&(h.target=p.target||p),Ue.categories.push(h);for(const g of h.emojis)Ue.emojis[g.id]=g}}e.categories&&(Ue.categories=Ue.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,h)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(h.id);return p-g}));let o=null,a=null;n=="native"&&(o=g0.latestVersion(),a=e.noCountryFlags||g0.noCountryFlags());let l=Ue.categories.length,u=!1;for(;l--;){const d=Ue.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:fr.maxFrequentRows.value,v||(v=fr.perLine.value),d.emojis=Hm.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){Ue.categories.splice(l,1);continue}const{categoryIcons:h}=e;if(h){const g=h[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:Ue.emojis[g],k=()=>{d.emojis.splice(p,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){k();continue}if(o&&v.version>o){k();continue}if(a&&d.id=="flags"&&!ZC.includes(v.id)){k();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([w,E])=>{if(w)return(Array.isArray(w)?w:[w]).map(x=>(E?x.split(/[-|_|\s]+/):[x]).map(I=>I.toLowerCase())).flat()}).flat().filter(w=>w&&w.trim()).join(","),v.emoticons)for(const w of v.emoticons)Ue.emoticons[w]||(Ue.emoticons[w]=v.id);let $=0;for(const w of v.skins){if(!w)continue;$++;const{native:E}=w;E&&(Ue.natives[E]=v.id,v.search+=`,${E}`);const x=$==1?"":`:skin-tone-${$}:`;w.shortcodes=`:${v.id}:${x}`}}}}u&&Qi.reset(),qm()}function Zm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Vm(o,e,t,n);return i}function Vm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const HC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Pu=null;function FC(e){return e.id?e:Ue.emojis[e]||Ue.emojis[Ue.aliases[e]]||Ue.emojis[Ue.natives[e]]}function qC(){Pu=null}async function WC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Il(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,h)=>u.trim()&&h.indexOf(u)==d);if(!i.length)return;let o=Pu||(Pu=Object.values(Ue.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const h=d.search.indexOf(`,${u}`);h!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:h+1)}o=a}return a.length<2||(a.sort((u,d)=>{const h=l[u.id],p=l[d.id];return h==p?u.id.localeCompare(d.id):h-p}),a.length>t&&(a=a.slice(0,t))),a}var Qi={search:WC,get:FC,reset:qC,SHORTCODES_REGEX:HC};const ZC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function VC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function KC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function GC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const QC={activity:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:W("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),W("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),W("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:W("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),W("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:W("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),W("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),W("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},YC={loupe:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:W("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:W("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ya={categories:QC,search:YC};function Mu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return W("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?W("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?W("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):W("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*Ue.sheet.cols}% ${100*Ue.sheet.rows}%`,backgroundPosition:`${100/(Ue.sheet.cols-1)*o.x}% ${100/(Ue.sheet.rows-1)*o.y}%`}})})}const JC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Km extends JC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Vm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class XC extends Km{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Gm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:fr.set,skin:fr.skin};class Qm extends Km{async connectedCallback(){const t=Zm(this.props,Gm,this);t.element=this,t.ref=n=>{this.component=n},await Il(),!this.disconnected&&Dm(W(Mu,{...t}),this)}constructor(t){super(t)}}kn(Qm,"Props",Gm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Qm);var v0,Bu=[],b0=be.__b,y0=be.__r,_0=be.diffed,w0=be.__c,x0=be.unmount;function eS(){var e;for(Bu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Bu.pop();)if(e.__P)try{e.__H.__h.forEach(Ca),e.__H.__h.forEach(ju),e.__H.__h=[]}catch(t){e.__H.__h=[],be.__e(t,e.__v)}}be.__b=function(e){b0&&b0(e)},be.__r=function(e){y0&&y0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ca),t.__h.forEach(ju),t.__h=[])},be.diffed=function(e){_0&&_0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Bu.push(t)!==1&&v0===be.requestAnimationFrame||((v0=be.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),$0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);$0&&(i=requestAnimationFrame(o))})(eS))},be.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ca),n.__h=n.__h.filter(function(i){return!i.__||ju(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],be.__e(i,n.__v)}}),w0&&w0(e,t)},be.unmount=function(e){x0&&x0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ca(i)}catch(o){t=o}}),t&&be.__e(t,n.__v))};var $0=typeof requestAnimationFrame=="function";function Ca(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function ju(e){e.__c=e.__()}function tS(e,t){for(var n in t)e[n]=t[n];return e}function k0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ja(e){this.props=e}(Ja.prototype=new Nn).isPureReactComponent=!0,Ja.prototype.shouldComponentUpdate=function(e,t){return k0(this.props,e)||k0(this.state,t)};var E0=be.__b;be.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),E0&&E0(e)};var nS=be.__e;be.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}nS(e,t,n)};var C0=be.unmount;function cu(){this.__u=0,this.t=null,this.__b=null}function Ym(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ya(){this.u=null,this.o=null}be.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),C0&&C0(e)},(cu.prototype=new Nn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Ym(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var h=i.state.__e;i.__v.__k[0]=function g(v,k,$){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(w){return g(w,k,$)}),v.__c&&v.__c.__P===k&&(v.__e&&$.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=$)),v}(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},cu.prototype.componentWillUnmount=function(){this.t=[]},cu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),l.__c.__H=null),(l=tS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(h){return a(h,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Ou(ss,null,e.fallback);return o&&(o.__h=null),[Ou(ss,null,t.__e?null:e.children),o]};var S0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ya.prototype=new Nn).__e=function(e){var t=this,n=Ym(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),S0(t,e,i)):o()};n?n(a):a()}},ya.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ga(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ya.prototype.componentDidUpdate=ya.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){S0(e,n,t)})};var rS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,iS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,sS=typeof document<"u",oS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Nn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Nn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var T0=be.event;function aS(){}function lS(){return this.cancelBubble}function cS(){return this.defaultPrevented}be.event=function(e){return T0&&(e=T0(e)),e.persist=aS,e.isPropagationStopped=lS,e.isDefaultPrevented=cS,e.nativeEvent=e};var A0={configurable:!0,get:function(){return this.class}},I0=be.vnode;be.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];sS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!oS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&iS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(A0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",A0))}e.$$typeof=rS,I0&&I0(e)};var R0=be.__r;be.__r=function(e){R0&&R0(e),e.__c};const uS={light:"outline",dark:"solid"};class dS extends Ja{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return W("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return W("img",{src:n.src})}const i=Ya.categories[t.id]||Ya.categories.custom,o=this.props.icons=="auto"?uS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return W("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:W("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Lt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),W("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),W("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Ue.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class fS extends Ja{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const _a={rowsPerRender:10};class hS extends Nn{getInitialState(t=this.props){return{skin:qr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Lt.rtl?"rtl":"ltr",this.refs={menu:cr(),navigation:cr(),scroll:cr(),search:cr(),searchInput:cr(),skinToneButton:cr(),skinToneRadio:cr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Il(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Ue;this.refs.categories=new Map;const n=Ue.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%_a.rowsPerRender?{}:cr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:cr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const h=d.target.dataset.id;n.set(h,d.intersectionRatio)}const u=[...n];for(const[d,h]of u)if(h){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(_a.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*_a.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,h]=this.state.pos;const p=(()=>{if(d==0&&h==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(h+=v,!g[h]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,h=i?0:u[d].length-1,[d,h];h=i?g.length-1:0}return[d,h]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[h]||(h=g.length-1),[d,h]):(d=a?0:u.length-1,h=a?0:u[d].length-1,[d,h])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,h=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(h>o.scrollTop+a.height)l=h-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=GC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Hm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),qr.set("skin",t)}renderNav(){return W(dS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return W("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[W("div",{class:"flex flex-middle flex-grow",children:[W("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:W(Mu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),W("div",{class:`margin-${this.dir[0]}`,children:t||n?W("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[W("div",{class:"preview-title ellipsis",children:t?t.name:Lt.search_no_results_1}),W("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Lt.search_no_results_2})]}):W("div",{class:"preview-placeholder color-c",children:Lt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,h=VC(this.state.pos,n),p=n.concat(t.id).join("");return W(fS,{selected:h,skin:l,size:a,children:W("button",{"aria-label":d,"aria-selected":h||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[W("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),W(Mu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return W("div",{children:[W("div",{class:"spacer"}),W("div",{class:"flex flex-middle",children:[W("div",{class:"search relative flex-grow",children:[W("input",{type:"search",ref:this.refs.searchInput,placeholder:Lt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),W("span",{class:"icon loupe flex",children:Ya.search.loupe}),this.state.searchResults&&W("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ya.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?W("div",{class:"category",ref:this.refs.search,children:[W("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Lt.categories.search}),W("div",{children:t.length?t.map((n,i)=>W("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):W("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&W("a",{onClick:this.props.onAddCustomEmoji,children:Lt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Ue,n=!!this.state.searchResults,i=this.getPerLine();return W("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return W("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[W("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Lt.categories[o.id]}),W("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const h=u.index-u.index%_a.rowsPerRender,p=this.state.visibleRows[h],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,k=v+i,$=o.emojis.slice(v,k);return $.length<i&&$.push(...new Array(i-$.length)),W("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&$.map((w,E)=>{if(!w)return W("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const x=Qi.get(w);return this.renderEmojiButton(x,{pos:[u.index,E],posinset:u.posinset+E,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:W("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:W("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Lt.skins.choose,title:Lt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:W("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return W("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),W("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Lt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return W("div",{children:[W("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Lt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),W("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[W("span",{class:`skin-tone skin-tone-${l}`}),W("span",{class:"margin-small-lr",children:Lt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return W("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&W("div",{class:"padding-lr",children:this.renderSearch()}),W("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:W("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),kn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),kn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),kn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),kn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),kn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let h of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(h);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),kn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),kn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),kn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),kn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await KC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Td extends XC{async connectedCallback(){const t=Zm(this.props,fr,this);t.element=this,t.ref=n=>{this.component=n},await Il(t),!this.disconnected&&Dm(W(hS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Tm(Jm)})}}kn(Td,"Props",fr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Td);var Jm={};Jm=`:host {
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

`;const Xm=e=>{let t;const[n,i]=xe(void 0);return _(Cd,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new Td({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},pS=B("<div>"),gS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),mS=B("<br>"),vS=B("<span>理由: "),bS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),yS=e=>{const[t,n]=xe(!1);return _(fe,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=bS();return i.firstChild,i.$$click=()=>n(!0),L(i,_(fe,{get when(){return e.contentWarning.reason!=null},get children(){return[mS(),(()=>{const o=vS();return o.firstChild,L(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=pS();return L(i,()=>e.children),i})(),_(fe,{get when(){return e.contentWarning.contentWarning},get children(){const i=gS();return i.$$click=()=>n(!1),i}})]}})};at(["click"]);const ev=e=>{const{profile:t}=ys(()=>({pubkey:e.pubkey}));return _(fe,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Sl(e.pubkey)}`},get children(){return["@",ze(()=>t()?.name??e.pubkey)]}})},_S=B('<a target="_blank" rel="noreferrer noopener">'),Rl=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return _(fe,{get when(){return t()},get fallback(){return e.href},get children(){const n=_S();return L(n,()=>e.children??e.href),Be(i=>{const o=e.class,a=e.href;return o!==i._v$&&Tg(n,i._v$=o),a!==i._v$2&&ut(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},wS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},xS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},$S=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),kS=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),ES=e=>{let t;const[n,i]=xe(e.initialHidden);return _(fe,{get when(){return!n()},get fallback(){return(()=>{const o=kS();return o.$$click=()=>i(!1),o})()},get children(){return _(Rl,{class:"my-2 block",get href(){return e.url},get children(){const o=$S(),a=t;return typeof a=="function"?br(a,o):t=o,Be(l=>{const u=xS(e.url),d=e.url;return u!==l._v$&&ut(o,"src",l._v$=u),d!==l._v$2&&ut(o,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),o}})}})};at(["click"]);const CS=B('<div class="my-1 rounded border p-1">'),SS=e=>_(fe,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return _(eo,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=CS();return L(t,_(is,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ct.Text]}})),t}}),TS=B('<button class="inline text-blue-500 underline">'),uu=e=>{const{showProfile:t}=Yr(),n=()=>{t(e.pubkey)};return(()=>{const i=TS();return i.$$click=n,L(i,_(ev,{get pubkey(){return e.pubkey}})),i})()};at(["click"]);const[Ad,AS]=xe({}),tv=e=>{Ad()[e]==null&&AS(t=>({...t,[e]:new MessageChannel}))},IS=e=>{const t=()=>Ad()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const h=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",h),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",h),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",h,!1),t().port1.start()});return an(()=>{const{id:o}=e();tv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},RS=e=>{const t=ze(e),n=()=>Ad()[t().id];an(()=>{const{id:i}=t();tv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,h=t().handler(d);(h instanceof Promise?h:Promise.resolve(h)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),vr(()=>{o.removeEventListener("message",a)})})},xo=()=>IS(()=>({id:"CommandChannel"})),Uu=e=>{RS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},du=B("<span>"),O0=B('<div class="my-1 rounded border p-1">'),OS=B('<span class="text-blue-500 underline">'),LS=B('<button class="text-blue-500 underline">'),PS=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),MS=e=>{const{config:t,saveColumn:n}=Me(),i=xo(),o=()=>El(e.event),a=l=>{n(xd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return _(It,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=du();return L(u,()=>l.content),u})();if(l.type==="URL")return wS(l.content)?_(ES,{get url(){return l.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):_(Rl,{class:"text-blue-500 underline",get href(){return l.content}});if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=du();return L(d,()=>l.content),d})();if(u.type==="MentionedUser")return _(uu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?_(SS,{mentionedEvent:u}):_(eo,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=O0();return L(u,_(is,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ct.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=O0();return L(u,_(is,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?_(uu,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?_(uu,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=OS();return L(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=LS();return u.$$click=()=>a(l.content),L(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=du();return L(d,()=>l.content),d})():(()=>{const d=PS();return ut(d,"src",u),Be(h=>{const p=l.content,g=l.shortcode;return p!==h._v$&&ut(d,"alt",h._v$=p),g!==h._v$2&&ut(d,"title",h._v$2=g),h},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};at(["click"]);const BS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),as=(e={})=>(()=>{const t=BS();return Ve(t,e,!0,!0),t})(),jS=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),US=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=jS();i.$$click=n;const o=t;return typeof o=="function"?br(o,i):t=i,L(i,()=>e.children),i})()};at(["click"]);const NS=B('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),_s=e=>_(US,{onClose:()=>e.onClose?.(),get children(){const t=NS(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),L(i,_(fe,{get when(){return e?.closeButton},get fallback(){return _(as,{})},keyed:!0,children:a=>a()})),L(o,()=>e.children),t}});at(["click"]);const DS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),zS=(e={})=>(()=>{const t=DS();return Ve(t,e,!0,!0),t})(),HS=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),FS=B('<div class="relative inline-block"><button type="button">'),qS=e=>{const[t,n]=xe(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=FS(),a=o.firstChild;return a.$$click=i,L(a,_(zS,{})),L(o,_(fe,{get when(){return t()},get children(){return HS()}}),null),Be(()=>Tg(a,e.class)),o})()};at(["click"]);const WS=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),ZS=e=>{const t=ze(()=>JSON.stringify(e.event,null,2));return _(_s,{get onClose(){return e.onClose},get children(){const n=WS(),i=n.firstChild,o=i.nextSibling;return L(i,t),L(o,_(qS,{class:"h-4 w-4",get text(){return t()}})),n}})},VS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),nv=(e={})=>(()=>{const t=VS();return Ve(t,e,!0,!0),t})(),KS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),GS=(e={})=>(()=>{const t=KS();return Ve(t,e,!0,!0),t})(),QS=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),YS=(e={})=>(()=>{const t=QS();return Ve(t,e,!0,!0),t})(),JS=e=>Math.floor(+e/1e3),ur=()=>JS(new Date),XS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),eT=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],h=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...h,...p]},Ol=()=>{const e=Cl(),t=async(d,h)=>{const p={...h};if(p.id=bl(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async v=>{const $=(await e().ensureRelay(v)).publish(g);return XS($,v)})};return{publishTextNote:async d=>{const{relayUrls:h,pubkey:p,content:g}=d,v=eT(d),k={kind:1,pubkey:p,created_at:ur(),tags:v,content:g};return t(h,k)},publishReaction:async({relayUrls:d,pubkey:h,eventId:p,content:g,notifyPubkey:v})=>{const k={kind:7,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",v]],content:g};return t(d,k)},publishRepost:async({relayUrls:d,pubkey:h,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:h,created_at:ur(),tags:[["e",p,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:h,profile:p,otherProperties:g})=>{const v={...p,...g},k={kind:ct.Metadata,pubkey:h,created_at:ur(),tags:[],content:JSON.stringify(v)};return t(d,k)},updateContacts:async({relayUrls:d,pubkey:h,followingPubkeys:p,content:g})=>{const v=p.map($=>["p",$]),k={kind:ct.Contacts,pubkey:h,created_at:ur(),tags:v,content:g};return t(d,k)},deleteEvent:async({relayUrls:d,pubkey:h,eventId:p})=>{const g={kind:ct.EventDeletion,pubkey:h,created_at:ur(),tags:[["e",p,""]],content:""};return t(d,g)}}};let fu=!1;const[wa,tT]=xe(void 0),Vn=()=>(an(()=>{if(wa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),wa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&wa()==null&&!fu&&(fu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),tT(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{fu=!1})),e+=1},200)}),wa),nT=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},rT=e=>t=>Promise.allSettled(t.map(n=>e(n))),iT=B("<div>に返信"),sT=B('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),oT=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),aT=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),lT=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),cT=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},uT=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},dT=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},rv=e=>{let t,n;const[i,o]=xe(""),[a,l]=xe(!1),[u,d]=xe(""),h=ee=>o(pe=>`${pe} ${ee}`),p=()=>{o(""),d(""),l(!1)},g=()=>{t?.blur(),p(),e.onClose()},{config:v,getEmoji:k}=Me(),$=Vn(),w=Ol(),E=()=>e.replyTo&&El(e.replyTo),x=()=>e.mode??"normal",I=pi({mutationKey:["publishTextNote"],mutationFn:w.publishTextNote.bind(w),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:ee=>{console.error("error",ee)}}),O=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},A=pi({mutationKey:["uploadFiles"],mutationFn:async ee=>{const pe=await rT(nT)(ee),Z=[];if(pe.forEach((re,de)=>{re.status==="fulfilled"?(h(re.value.imageUrl),O()):Z.push(ee[de])}),Z.length>0){const re=Z.map(de=>de.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${re}`)}}}),C=ze(()=>{const ee=$();return E()?.taggedPubkeys()?.filter(pe=>pe!==ee)??[]}),T=ze(()=>e.replyTo==null?[]:pr([e.replyTo.pubkey,...C()])),j=ee=>{const pe=[];return ee.forEach(Z=>{const re=k(Z);re!=null&&pe.push(["emoji",Z,re.url])}),pe},N=()=>{if(i().length===0||I.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(i())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const ee=$();if(ee==null){console.error("pubkey is not available");return}const pe=mm(i()),{hashtags:Z,urlReferences:re,pubkeyReferences:de,eventReferences:te,emojis:ge}=uT(pe),ie=dT(pe),ke=j(ge);let Q={relayUrls:v().relayUrls,pubkey:ee,content:ie,notifyPubkeys:de,mentionEventIds:te,hashtags:Z,urls:re,tags:ke};E()!=null&&(Q={...Q,notifyPubkeys:pr([...T(),...de]),rootEventId:E()?.rootEvent()?.id??E()?.replyingToEvent()?.id,replyEventId:E()?.id}),a()&&(Q={...Q,contentWarning:u()}),I.mutate(Q),g()},ne=ee=>{o(ee.currentTarget.value),O()},V=ee=>{ee.preventDefault(),N()},Y=ee=>{ee.key==="Enter"&&(ee.ctrlKey||ee.metaKey)?N():ee.key==="Escape"&&(t?.blur(),g())},F=ee=>{if(ee.preventDefault(),A.isLoading)return;const pe=[...ee.currentTarget.files??[]];A.mutate(pe),ee.currentTarget.value=""},J=ee=>{if(ee.preventDefault(),A.isLoading)return;const pe=[...ee?.dataTransfer?.files??[]];A.mutate(pe)},oe=ee=>{if(A.isLoading)return;const pe=[...ee?.clipboardData?.items??[]],Z=[];pe.forEach(re=>{if(re.kind==="file"){ee.preventDefault();const de=re.getAsFile();if(de==null)return;Z.push(de)}}),Z.length!==0&&A.mutate(Z)},q=ee=>{ee.preventDefault()},G=()=>i().trim().length===0||I.isLoading||A.isLoading,ue=()=>A.isLoading;return an(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const ee=lT(),pe=ee.firstChild,Z=pe.firstChild,re=Z.nextSibling,de=re.firstChild,te=de.nextSibling,ge=te.nextSibling,ie=re.nextSibling;L(ee,_(fe,{get when(){return e.replyTo!=null},get children(){const Q=iT(),He=Q.firstChild;return L(Q,_(It,{get each(){return T()},children:(Qe,yt)=>[_(Tl,{pubkey:Qe}),_(fe,{get when(){return yt()!==T().length-1},children:" と "})]}),He),Q}}),pe),pe.addEventListener("submit",V),L(pe,_(fe,{get when(){return a()},get children(){const Q=sT();return Q.$$input=He=>d(He.currentTarget.value),Be(()=>Q.value=u()),Q}}),Z),Z.addEventListener("paste",oe),Z.addEventListener("drop",J),Z.addEventListener("dragover",q),Z.$$keydown=Y,Z.$$input=ne,br(Q=>{t=Q,e.textAreaRef?.(Q)},Z),L(re,_(fe,{get when(){return x()==="reply"},get children(){const Q=oT(),He=Q.firstChild;return He.$$click=()=>g(),L(He,_(as,{})),Q}}),de),L(re,_(Xm,{customEmojis:!0,onEmojiSelect:Q=>h(Q),get children(){const Q=aT();return L(Q,_(nv,{})),Q}}),de),de.$$click=()=>l(Q=>!Q),te.$$click=()=>n?.click(),L(te,_(GS,{})),L(ge,_(YS,{})),ie.addEventListener("change",F);const ke=n;return typeof ke=="function"?br(ke,ie):n=ie,Be(Q=>{const He=cT(x()),Qe=!a(),yt=!!a(),Oe=x()==="normal",qe=x()==="normal",kt=x()==="reply",Je=x()==="reply",Et=!!ue(),Gn=!ue(),_t=x()==="normal",$r=x()==="normal",Ei=x()==="reply",Ln=x()==="reply",gt=ue(),bn=!!G(),Pn=!G(),Ci=x()==="normal",we=x()==="normal",Qn=x()==="reply",Gt=x()==="reply",Ft=G();return He!==Q._v$&&ut(Z,"placeholder",Q._v$=He),Qe!==Q._v$2&&de.classList.toggle("bg-rose-300",Q._v$2=Qe),yt!==Q._v$3&&de.classList.toggle("bg-rose-400",Q._v$3=yt),Oe!==Q._v$4&&de.classList.toggle("h-8",Q._v$4=Oe),qe!==Q._v$5&&de.classList.toggle("w-8",Q._v$5=qe),kt!==Q._v$6&&de.classList.toggle("h-7",Q._v$6=kt),Je!==Q._v$7&&de.classList.toggle("w-7",Q._v$7=Je),Et!==Q._v$8&&te.classList.toggle("bg-primary-disabled",Q._v$8=Et),Gn!==Q._v$9&&te.classList.toggle("bg-primary",Q._v$9=Gn),_t!==Q._v$10&&te.classList.toggle("h-8",Q._v$10=_t),$r!==Q._v$11&&te.classList.toggle("w-8",Q._v$11=$r),Ei!==Q._v$12&&te.classList.toggle("h-7",Q._v$12=Ei),Ln!==Q._v$13&&te.classList.toggle("w-7",Q._v$13=Ln),gt!==Q._v$14&&(te.disabled=Q._v$14=gt),bn!==Q._v$15&&ge.classList.toggle("bg-primary-disabled",Q._v$15=bn),Pn!==Q._v$16&&ge.classList.toggle("bg-primary",Q._v$16=Pn),Ci!==Q._v$17&&ge.classList.toggle("h-8",Q._v$17=Ci),we!==Q._v$18&&ge.classList.toggle("w-8",Q._v$18=we),Qn!==Q._v$19&&ge.classList.toggle("h-7",Q._v$19=Qn),Gt!==Q._v$20&&ge.classList.toggle("w-7",Q._v$20=Gt),Ft!==Q._v$21&&(ge.disabled=Q._v$21=Ft),Q},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Be(()=>Z.value=i()),ee})()};at(["input","keydown","click"]);const fT=2,hT=()=>{let e;const[t,n]=xe(!1),i=o=>{e=o};return an(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+fT)}),{overflow:t,elementRef:i}},pT=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),gT=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),mT=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),vT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),bT=e=>{const{overflow:t,elementRef:n}=hT(),i=$m(),[o,a]=xe(),l=()=>i(e.createdAt),u=()=>e.createdAt.toLocaleString(),{profile:d}=ys(()=>({pubkey:e.authorPubkey}));return(()=>{const h=mT(),p=h.firstChild,g=p.firstChild,v=g.nextSibling,k=v.firstChild,$=k.firstChild,w=$.firstChild,E=w.firstChild,x=$.nextSibling,I=x.firstChild,O=k.nextSibling,A=O.nextSibling;return g.$$click=C=>{C.preventDefault(),e.onShowProfile?.()},L(g,_(fe,{get when(){return d()?.picture},keyed:!0,children:C=>(()=>{const T=vT();return ut(T,"src",C),T})()})),$.$$click=C=>{C.preventDefault(),e?.onShowProfile?.()},L(w,_(fe,{get when(){return(d()?.display_name?.length??0)>0},get children(){const C=pT();return L(C,()=>d()?.display_name),C}}),E),L(E,_(fe,{get when(){return d()?.name!=null},get fallback(){return`@${Sl(e.authorPubkey)}`},get children(){return["@",ze(()=>d()?.name)]}})),I.$$click=C=>{C.preventDefault(),e.onShowEvent?.()},L(I,l),br(n,O),L(O,()=>e.content),L(v,_(fe,{get when(){return t()},get children(){const C=gT();return C.$$click=T=>{T.stopPropagation(),a(j=>!j)},L(C,_(fe,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),C}}),A),L(A,()=>e.actions),L(h,_(fe,{get when(){return e.footer},get children(){return e.footer}}),null),Be(C=>{const T=u(),j=!o();return T!==C._v$&&ut(I,"title",C._v$=T),j!==C._v$2&&O.classList.toggle("max-h-screen",C._v$2=j),C},{_v$:void 0,_v$2:void 0}),h})()};at(["click"]);const iv=Rx(),yT=()=>Ox(iv),_T=()=>{const[e,t]=Yi({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},wT=/\p{Emoji_Presentation}/u,xT=e=>{const{shouldMuteEvent:t}=Me(),n=_i(),i=ze(e),o=ze(()=>["useReactions",i()]),a=wi(o,({queryKey:g,signal:v})=>{const[,k]=g;if(k==null)return[];const{eventId:$}=k,w=new vs({type:"Reactions",mentionedEventId:$}),E=w.toUpdatePromise().catch(()=>[]);return w.onUpdate(x=>{n.setQueryData(g,x)}),bs({task:w,signal:v}),wr(15e3,`useReactions: ${$}`)(E)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!t(v));return{reactions:l,reactionsGroupedByContent:()=>{const g=new Map;return l().forEach(v=>{const k=g.get(v.content)??[];k.push(v),g.set(v.content,k)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&wT.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},$T=e=>{const{shouldMuteEvent:t}=Me(),n=_i(),i=ze(e),o=ze(()=>["useReposts",i()]),a=wi(o,({queryKey:h,signal:p})=>{const[,g]=h;if(g==null)return[];const{eventId:v}=g,k=new vs({type:"Reposts",mentionedEventId:v}),$=k.toUpdatePromise().catch(()=>[]);return k.onUpdate(w=>{n.setQueryData(h,w)}),bs({task:k,signal:p}),wr(15e3,`useReposts: ${v}`)($)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!t(p));return{reposts:l,isRepostedBy:h=>l().findIndex(p=>p.pubkey===h)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},kT=B('<div class="flex gap-2 overflow-x-auto py-1">'),ET=B('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),CT=B('<span class="ml-1 text-sm">'),ST=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),TT=B('<span class="truncate text-base">'),AT=B('<span class="text-red-500">削除'),IT=B('<div class="nostr-textnote">'),RT=B('<div class="text-xs">への返信'),OT=B('<div class="content whitespace-pre-wrap break-all">'),LT=B('<div class="textnote-content">'),PT=B('<div class="mt-1 rounded border p-1">'),MT=B('<button class="pr-1 text-blue-500 hover:underline">'),L0=B('<div class="text-sm text-zinc-400">'),BT=B('<span class="inline-block h-4 w-4">'),jT=B('<div class="flex shrink-0 items-center gap-1">'),UT=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),NT=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),{noteEncode:DT}=_o,zT=e=>{const{config:t}=Me(),n=Vn();return(()=>{const i=kT();return L(i,_(It,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const l=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=ST();return u.$$click=()=>e.onReaction(o),L(u,_(fe,{when:o==="+",get fallback(){return(()=>{const d=TT();return L(d,o),d})()},get children(){const d=ET();return L(d,_(Ed,{})),d}}),null),L(u,_(fe,{get when(){return!t().hideCount},get children(){const d=CT();return L(d,()=>a.length),d}}),null),Be(d=>Ws(u,{"text-zinc-400":!l,"hover:bg-zinc-50":!l,"bg-rose-50":l,"border-rose-200":l,"text-rose-400":l},d)),u})()}})),i})()},sv=e=>{const{config:t}=Me(),n=Vn(),{showProfile:i}=Yr(),o=yT(),[a,l]=xe(!1),[u,d]=xe(!1),[h,p]=xe(!1),[g,v]=xe(!1),k=()=>p(!1),$=ze(()=>El(e.event)),w=()=>e.embedding??!0,E=()=>e.actions??!0,{reactions:x,reactionsGroupedByContent:I,isReactedBy:O,isReactedByWithEmoji:A,invalidateReactions:C,query:T}=xT(()=>({eventId:e.event.id})),{reposts:j,isRepostedBy:N,invalidateReposts:ne,query:V}=$T(()=>({eventId:e.event.id})),Y=Ol(),F=pi({mutationKey:["publishReaction",$().id],mutationFn:Y.publishReaction.bind(Y),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:te=>{console.error("failed to publish reaction: ",te)},onSettled:()=>{C().then(()=>T.refetch()).catch(te=>console.error("failed to refetch reactions",te))}}),J=pi({mutationKey:["publishRepost",$().id],mutationFn:Y.publishRepost.bind(Y),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:te=>{console.error("failed to publish repost: ",te)},onSettled:()=>{ne().then(()=>V.refetch()).catch(te=>console.error("failed to refetch reposts",te))}}),oe=pi({mutationKey:["deleteEvent",$().id],mutationFn:(...te)=>Y.deleteEvent(...te).then(ge=>Promise.allSettled(ge.map(wr(1e4)))),onSuccess:te=>{const ge=te.filter(ke=>ke.status==="fulfilled").length,ie=te.length-ge;ge===te.length?window.alert("削除しました（画面の反映にはリロード）"):ge>0?window.alert(`${ie}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:te=>{console.error("failed to delete",te)}}),q=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(DT(e.event.id)).catch(te=>window.alert(te))}},{content:()=>"JSONを確認",onSelect:()=>{v(!0)}},{when:()=>$().pubkey===n(),content:()=>AT(),onSelect:()=>{const te=n();te!=null&&window.confirm("本当に削除しますか？")&&oe.mutate({relayUrls:t().relayUrls,pubkey:te,eventId:$().id})}}],G=ze(()=>{const te=n();return te!=null&&O(te)||a()}),ue=ze(()=>{const te=n();return te!=null&&A(te)}),ee=ze(()=>{const te=n();return te!=null&&N(te)||u()}),pe=()=>{if(w()){const te=$().replyingToEvent();if(te!=null&&!$().containsEventMention(te.id))return te.id;const ge=$().rootEvent();if(te==null&&ge!=null&&!$().containsEventMention(ge.id))return ge.id}},Z=te=>{te.stopPropagation(),!ee()&&on([n(),e.event.id])(([ge,ie])=>{J.mutate({relayUrls:t().relayUrls,pubkey:ge,eventId:ie,notifyPubkey:e.event.pubkey}),d(!0)})},re=te=>{G()||on([n(),e.event.id])(([ge,ie])=>{F.mutate({relayUrls:t().relayUrls,pubkey:ge,content:te??"+",eventId:ie,notifyPubkey:e.event.pubkey}),l(!0)})},de=te=>{te.stopPropagation(),re()};return(()=>{const te=IT();return L(te,_(bT,{get authorPubkey(){return $().pubkey},get createdAt(){return $().createdAtAsDate()},get content(){return(()=>{const ge=LT();return L(ge,_(fe,{get when(){return pe()},keyed:!0,children:ie=>(()=>{const ke=PT();return L(ke,_(is,{eventId:ie,actions:!1,embedding:!1})),ke})()}),null),L(ge,_(fe,{get when(){return $().taggedPubkeys().length>0},get children(){const ie=RT(),ke=ie.firstChild;return L(ie,_(It,{get each(){return $().taggedPubkeys()},children:Q=>(()=>{const He=MT();return He.$$click=Qe=>{Qe.stopPropagation(),i(Q)},L(He,_(ev,{pubkey:Q})),He})()}),ke),ie}}),null),L(ge,_(yS,{get contentWarning(){return $().contentWarning()},get children(){const ie=OT();return L(ie,_(MS,{get event(){return e.event},get embedding(){return w()}})),ie}}),null),ge})()},get actions(){return _(fe,{get when(){return E()},get children(){return[_(fe,{get when(){return ze(()=>!!t().showEmojiReaction)()&&x().length>0},get children(){return _(zT,{get reactionsGroupedByContent(){return I()},onReaction:re})}}),(()=>{const ge=NT(),ie=ge.firstChild,ke=ie.nextSibling,Q=ke.firstChild,He=ke.nextSibling,Qe=He.firstChild,yt=He.nextSibling;return ie.$$click=Oe=>{Oe.stopPropagation(),p(qe=>!qe)},L(ie,_(yC,{})),Q.$$click=Z,L(Q,_(X1,{})),L(ke,_(fe,{get when(){return ze(()=>!t().hideCount)()&&j().length>0},get children(){const Oe=L0();return L(Oe,()=>j().length),Oe}}),null),Qe.$$click=de,L(Qe,_(fe,{get when(){return ze(()=>!!G())()&&!ue()},get fallback(){return _(kd,{})},get children(){return _(Ed,{})}})),L(He,_(fe,{get when(){return ze(()=>!t().hideCount&&!t().showEmojiReaction)()&&x().length>0},get children(){const Oe=L0();return L(Oe,()=>x().length),Oe}}),null),L(ge,_(fe,{get when(){return t().useEmojiReaction},get children(){const Oe=jT();return L(Oe,_(Xm,{onEmojiSelect:qe=>re(qe),get children(){const qe=BT();return L(qe,_(Cm,{})),qe}})),Be(qe=>Ws(Oe,{"text-zinc-400":!G()||!ue(),"hover:text-rose-400":!G()||!ue(),"text-rose-400":G()&&ue()||F.isLoading},qe)),Oe}}),yt),L(yt,_(Sm,{menu:q,get children(){const Oe=UT();return L(Oe,_(Em,{})),Oe}})),Be(Oe=>{const qe={"text-zinc-400":!ee(),"hover:text-green-400":!ee(),"text-green-400":ee()||J.isLoading},kt=J.isLoading,Je={"text-zinc-400":!G()||ue(),"hover:text-rose-400":!G()||ue(),"text-rose-400":G()&&!ue()||F.isLoading},Et=F.isLoading;return Oe._v$=Ws(ke,qe,Oe._v$),kt!==Oe._v$2&&(Q.disabled=Oe._v$2=kt),Oe._v$3=Ws(He,Je,Oe._v$3),Et!==Oe._v$4&&(Qe.disabled=Oe._v$4=Et),Oe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),ge})()]}})},get footer(){return _(fe,{get when(){return h()},get children(){return _(rv,{mode:"reply",get replyTo(){return e.event},onClose:k,onPost:k})}})},onShowProfile:()=>{i($().pubkey)},onShowEvent:()=>{o?.setTimeline({type:"Replies",event:e.event})}}),null),L(te,_(fe,{get when(){return g()},get children(){return _(ZS,{get event(){return e.event},onClose:()=>v(!1)})}}),null),te})()};at(["click"]);const ov=e=>{const{shouldMuteEvent:t}=Me();return _(fe,{get when(){return!t(e.event)},get children(){return _(sv,e)}})},HT=B("<span>予期しないイベント種別（<!>）"),FT=B("<span><span>未対応のイベント種別（<!>）"),av=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return _(Sn,{get fallback(){return(()=>{const n=FT(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,L(i,()=>e.event.kind,a),L(n,_(eo,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[_(Fe,{get when(){return!t()},keyed:!0,get children(){const n=HT(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,L(n,()=>e.event.kind,o),L(n,_(eo,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),_(Fe,{get when(){return e.event.kind===ct.Text},get children(){return _(ov,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),_(Fe,{get when(){return e.event.kind===6},get children(){return _(km,{get event(){return e.event}})}})]}})},ws=e=>{const{shouldMuteEvent:t}=Me();return _(It,{get each(){return e.events},children:n=>_(fe,{get when(){return!t(n)},get children(){return _(Zs,{get children(){return _(av,{event:n})}})}})})};var qT=al;function WT(){this.__data__=new qT,this.size=0}var ZT=WT;function VT(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var KT=VT;function GT(e){return this.__data__.get(e)}var QT=GT;function YT(e){return this.__data__.has(e)}var JT=YT,XT=al,eA=Yu,tA=Ju,nA=200;function rA(e,t){var n=this.__data__;if(n instanceof XT){var i=n.__data__;if(!eA||i.length<nA-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new tA(i)}return n.set(e,t),this.size=n.size,this}var iA=rA,sA=al,oA=ZT,aA=KT,lA=QT,cA=JT,uA=iA;function xs(e){var t=this.__data__=new sA(e);this.size=t.size}xs.prototype.clear=oA;xs.prototype.delete=aA;xs.prototype.get=lA;xs.prototype.has=cA;xs.prototype.set=uA;var Id=xs;function dA(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var fA=dA,hA=Bg,pA=fA,gA=jg,mA=1,vA=2;function bA(e,t,n,i,o,a){var l=n&mA,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var g=-1,v=!0,k=n&vA?new hA:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var $=e[g],w=t[g];if(i)var E=l?i(w,$,g,t,e,a):i($,w,g,e,t,a);if(E!==void 0){if(E)continue;v=!1;break}if(k){if(!pA(t,function(x,I){if(!gA(k,I)&&($===x||o($,x,n,i,a)))return k.push(I)})){v=!1;break}}else if(!($===w||o($,w,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var lv=bA,yA=Rn,_A=yA.Uint8Array,cv=_A;function wA(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var xA=wA,P0=cs,M0=cv,$A=Qu,kA=lv,EA=xA,CA=Xu,SA=1,TA=2,AA="[object Boolean]",IA="[object Date]",RA="[object Error]",OA="[object Map]",LA="[object Number]",PA="[object RegExp]",MA="[object Set]",BA="[object String]",jA="[object Symbol]",UA="[object ArrayBuffer]",NA="[object DataView]",B0=P0?P0.prototype:void 0,hu=B0?B0.valueOf:void 0;function DA(e,t,n,i,o,a,l){switch(n){case NA:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case UA:return!(e.byteLength!=t.byteLength||!a(new M0(e),new M0(t)));case AA:case IA:case LA:return $A(+e,+t);case RA:return e.name==t.name&&e.message==t.message;case PA:case BA:return e==t+"";case OA:var u=EA;case MA:var d=i&SA;if(u||(u=CA),e.size!=t.size&&!d)return!1;var h=l.get(e);if(h)return h==t;i|=TA,l.set(e,t);var p=kA(u(e),u(t),i,o,a,l);return l.delete(e),p;case jA:if(hu)return hu.call(e)==hu.call(t)}return!1}var zA=DA;function HA(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Rd=HA,FA=Array.isArray,Kn=FA,qA=Rd,WA=Kn;function ZA(e,t,n){var i=t(e);return WA(e)?i:qA(i,n(e))}var uv=ZA;function VA(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var KA=VA;function GA(){return[]}var dv=GA,QA=KA,YA=dv,JA=Object.prototype,XA=JA.propertyIsEnumerable,j0=Object.getOwnPropertySymbols,eI=j0?function(e){return e==null?[]:(e=Object(e),QA(j0(e),function(t){return XA.call(e,t)}))}:YA,Od=eI;function tI(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var nI=tI;function rI(e){return e!=null&&typeof e=="object"}var Jr=rI,iI=us,sI=Jr,oI="[object Arguments]";function aI(e){return sI(e)&&iI(e)==oI}var lI=aI,U0=lI,cI=Jr,fv=Object.prototype,uI=fv.hasOwnProperty,dI=fv.propertyIsEnumerable,fI=U0(function(){return arguments}())?U0:function(e){return cI(e)&&uI.call(e,"callee")&&!dI.call(e,"callee")},Ld=fI,Xa={exports:{}};function hI(){return!1}var pI=hI;Xa.exports;(function(e,t){var n=Rn,i=pI,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,h=d||i;e.exports=h})(Xa,Xa.exports);var Pd=Xa.exports,gI=9007199254740991,mI=/^(?:0|[1-9]\d*)$/;function vI(e,t){var n=typeof e;return t=t??gI,!!t&&(n=="number"||n!="symbol"&&mI.test(e))&&e>-1&&e%1==0&&e<t}var Md=vI,bI=9007199254740991;function yI(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=bI}var Bd=yI,_I=us,wI=Bd,xI=Jr,$I="[object Arguments]",kI="[object Array]",EI="[object Boolean]",CI="[object Date]",SI="[object Error]",TI="[object Function]",AI="[object Map]",II="[object Number]",RI="[object Object]",OI="[object RegExp]",LI="[object Set]",PI="[object String]",MI="[object WeakMap]",BI="[object ArrayBuffer]",jI="[object DataView]",UI="[object Float32Array]",NI="[object Float64Array]",DI="[object Int8Array]",zI="[object Int16Array]",HI="[object Int32Array]",FI="[object Uint8Array]",qI="[object Uint8ClampedArray]",WI="[object Uint16Array]",ZI="[object Uint32Array]",nt={};nt[UI]=nt[NI]=nt[DI]=nt[zI]=nt[HI]=nt[FI]=nt[qI]=nt[WI]=nt[ZI]=!0;nt[$I]=nt[kI]=nt[BI]=nt[EI]=nt[jI]=nt[CI]=nt[SI]=nt[TI]=nt[AI]=nt[II]=nt[RI]=nt[OI]=nt[LI]=nt[PI]=nt[MI]=!1;function VI(e){return xI(e)&&wI(e.length)&&!!nt[_I(e)]}var KI=VI;function GI(e){return function(t){return e(t)}}var jd=GI,el={exports:{}};el.exports;(function(e,t){var n=Og,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(el,el.exports);var Ud=el.exports,QI=KI,YI=jd,N0=Ud,D0=N0&&N0.isTypedArray,JI=D0?YI(D0):QI,hv=JI,XI=nI,eR=Ld,tR=Kn,nR=Pd,rR=Md,iR=hv,sR=Object.prototype,oR=sR.hasOwnProperty;function aR(e,t){var n=tR(e),i=!n&&eR(e),o=!n&&!i&&nR(e),a=!n&&!i&&!o&&iR(e),l=n||i||o||a,u=l?XI(e.length,String):[],d=u.length;for(var h in e)(t||oR.call(e,h))&&!(l&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||rR(h,d)))&&u.push(h);return u}var pv=aR,lR=Object.prototype;function cR(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||lR;return e===n}var Nd=cR;function uR(e,t){return function(n){return e(t(n))}}var gv=uR,dR=gv,fR=dR(Object.keys,Object),hR=fR,pR=Nd,gR=hR,mR=Object.prototype,vR=mR.hasOwnProperty;function bR(e){if(!pR(e))return gR(e);var t=[];for(var n in Object(e))vR.call(e,n)&&n!="constructor"&&t.push(n);return t}var yR=bR,_R=Pg,wR=Bd;function xR(e){return e!=null&&wR(e.length)&&!_R(e)}var mv=xR,$R=pv,kR=yR,ER=mv;function CR(e){return ER(e)?$R(e):kR(e)}var Ll=CR,SR=uv,TR=Od,AR=Ll;function IR(e){return SR(e,AR,TR)}var vv=IR,z0=vv,RR=1,OR=Object.prototype,LR=OR.hasOwnProperty;function PR(e,t,n,i,o,a){var l=n&RR,u=z0(e),d=u.length,h=z0(t),p=h.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:LR.call(t,v)))return!1}var k=a.get(e),$=a.get(t);if(k&&$)return k==t&&$==e;var w=!0;a.set(e,t),a.set(t,e);for(var E=l;++g<d;){v=u[g];var x=e[v],I=t[v];if(i)var O=l?i(I,x,v,t,e,a):i(x,I,v,e,t,a);if(!(O===void 0?x===I||o(x,I,n,i,a):O)){w=!1;break}E||(E=v=="constructor")}if(w&&!E){var A=e.constructor,C=t.constructor;A!=C&&"constructor"in e&&"constructor"in t&&!(typeof A=="function"&&A instanceof A&&typeof C=="function"&&C instanceof C)&&(w=!1)}return a.delete(e),a.delete(t),w}var MR=PR,BR=xi,jR=Rn,UR=BR(jR,"DataView"),NR=UR,DR=xi,zR=Rn,HR=DR(zR,"Promise"),FR=HR,qR=xi,WR=Rn,ZR=qR(WR,"WeakMap"),VR=ZR,Nu=NR,Du=Yu,zu=FR,Hu=Ug,Fu=VR,bv=us,$s=Mg,H0="[object Map]",KR="[object Object]",F0="[object Promise]",q0="[object Set]",W0="[object WeakMap]",Z0="[object DataView]",GR=$s(Nu),QR=$s(Du),YR=$s(zu),JR=$s(Hu),XR=$s(Fu),li=bv;(Nu&&li(new Nu(new ArrayBuffer(1)))!=Z0||Du&&li(new Du)!=H0||zu&&li(zu.resolve())!=F0||Hu&&li(new Hu)!=q0||Fu&&li(new Fu)!=W0)&&(li=function(e){var t=bv(e),n=t==KR?e.constructor:void 0,i=n?$s(n):"";if(i)switch(i){case GR:return Z0;case QR:return H0;case YR:return F0;case JR:return q0;case XR:return W0}return t});var Pl=li,pu=Id,eO=lv,tO=zA,nO=MR,V0=Pl,K0=Kn,G0=Pd,rO=hv,iO=1,Q0="[object Arguments]",Y0="[object Array]",xa="[object Object]",sO=Object.prototype,J0=sO.hasOwnProperty;function oO(e,t,n,i,o,a){var l=K0(e),u=K0(t),d=l?Y0:V0(e),h=u?Y0:V0(t);d=d==Q0?xa:d,h=h==Q0?xa:h;var p=d==xa,g=h==xa,v=d==h;if(v&&G0(e)){if(!G0(t))return!1;l=!0,p=!1}if(v&&!p)return a||(a=new pu),l||rO(e)?eO(e,t,n,i,o,a):tO(e,t,d,n,i,o,a);if(!(n&iO)){var k=p&&J0.call(e,"__wrapped__"),$=g&&J0.call(t,"__wrapped__");if(k||$){var w=k?e.value():e,E=$?t.value():t;return a||(a=new pu),o(w,E,n,i,a)}}return v?(a||(a=new pu),nO(e,t,n,i,o,a)):!1}var aO=oO,lO=aO,X0=Jr;function yv(e,t,n,i,o){return e===t?!0:e==null||t==null||!X0(e)&&!X0(t)?e!==e&&t!==t:lO(e,t,n,i,yv,o)}var _v=yv,cO=Id,uO=_v,dO=1,fO=2;function hO(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],h=e[d],p=u[1];if(l&&u[2]){if(h===void 0&&!(d in e))return!1}else{var g=new cO;if(i)var v=i(h,p,d,e,t,g);if(!(v===void 0?uO(p,h,dO|fO,i,g):v))return!1}}return!0}var pO=hO,gO=qn;function mO(e){return e===e&&!gO(e)}var wv=mO,vO=wv,bO=Ll;function yO(e){for(var t=bO(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,vO(o)]}return t}var _O=yO;function wO(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var xv=wO,xO=pO,$O=_O,kO=xv;function EO(e){var t=$O(e);return t.length==1&&t[0][2]?kO(t[0][0],t[0][1]):function(n){return n===e||xO(n,e,t)}}var CO=EO,SO=us,TO=Jr,AO="[object Symbol]";function IO(e){return typeof e=="symbol"||TO(e)&&SO(e)==AO}var Ml=IO,RO=Kn,OO=Ml,LO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,PO=/^\w*$/;function MO(e,t){if(RO(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||OO(e)?!0:PO.test(e)||!LO.test(e)||t!=null&&e in Object(t)}var Dd=MO,$v=Ju,BO="Expected a function";function zd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(BO);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(zd.Cache||$v),n}zd.Cache=$v;var jO=zd,UO=jO,NO=500;function DO(e){var t=UO(e,function(i){return n.size===NO&&n.clear(),i}),n=t.cache;return t}var zO=DO,HO=zO,FO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qO=/\\(\\)?/g,WO=HO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(FO,function(n,i,o,a){t.push(o?a.replace(qO,"$1"):i||n)}),t}),ZO=WO;function VO(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Hd=VO,eg=cs,KO=Hd,GO=Kn,QO=Ml,YO=1/0,tg=eg?eg.prototype:void 0,ng=tg?tg.toString:void 0;function kv(e){if(typeof e=="string")return e;if(GO(e))return KO(e,kv)+"";if(QO(e))return ng?ng.call(e):"";var t=e+"";return t=="0"&&1/e==-YO?"-0":t}var JO=kv,XO=JO;function eL(e){return e==null?"":XO(e)}var tL=eL,nL=Kn,rL=Dd,iL=ZO,sL=tL;function oL(e,t){return nL(e)?e:rL(e,t)?[e]:iL(sL(e))}var ks=oL,aL=Ml,lL=1/0;function cL(e){if(typeof e=="string"||aL(e))return e;var t=e+"";return t=="0"&&1/e==-lL?"-0":t}var Es=cL,uL=ks,dL=Es;function fL(e,t){t=uL(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[dL(t[n++])];return n&&n==i?e:void 0}var Bl=fL,hL=Bl;function pL(e,t,n){var i=e==null?void 0:hL(e,t);return i===void 0?n:i}var gL=pL;function mL(e,t){return e!=null&&t in Object(e)}var vL=mL,bL=ks,yL=Ld,_L=Kn,wL=Md,xL=Bd,$L=Es;function kL(e,t,n){t=bL(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=$L(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&xL(o)&&wL(l,o)&&(_L(e)||yL(e)))}var EL=kL,CL=vL,SL=EL;function TL(e,t){return e!=null&&SL(e,t,CL)}var AL=TL,IL=_v,RL=gL,OL=AL,LL=Dd,PL=wv,ML=xv,BL=Es,jL=1,UL=2;function NL(e,t){return LL(e)&&PL(t)?ML(BL(e),t):function(n){var i=RL(n,e);return i===void 0&&i===t?OL(n,e):IL(t,i,jL|UL)}}var DL=NL;function zL(e){return e}var Ev=zL;function HL(e){return function(t){return t?.[e]}}var FL=HL,qL=Bl;function WL(e){return function(t){return qL(t,e)}}var ZL=WL,VL=FL,KL=ZL,GL=Dd,QL=Es;function YL(e){return GL(e)?VL(QL(e)):KL(e)}var JL=YL,XL=CO,eP=DL,tP=Ev,nP=Kn,rP=JL;function iP(e){return typeof e=="function"?e:e==null?tP:typeof e=="object"?nP(e)?eP(e[0],e[1]):XL(e):rP(e)}var Fd=iP,sP=Fd,oP=Ng;function aP(e,t){return e&&e.length?oP(e,sP(t)):[]}var lP=aP;const Cv=po(lP),rg=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Sa=0;const{setActiveSubscriptions:cP}=ym();setInterval(()=>{cP(Sa)},1e3);const xr=e=>{const{config:t,shouldMuteEvent:n}=Me(),i=Cl(),[o,a]=xe([]);Un(rl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(h=>!n(h)))},{defer:!0})),an(()=>{console.debug("subscription mounted",e()?.debugId,e()),vr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const h=e()?.limit??50;a(p=>{const g=H1.insertEventIntoDescendingList(p,d).slice(0,h),v=Cv(g,k=>k.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:h,filters:p,options:g,onEvent:v,onEOSE:k,continuous:$=!0}=d,w=i().sub(h,p,g);let E=!0;Sa+=1;let x=!1,I=!1;const O=[];w.on("event",T=>{v?.(T),!(d.clientEventFilter!=null&&!d.clientEventFilter(T))&&(I?l(T):(x=!0,O.push(T)))}),w.on("eose",()=>{k?.(),I=!0,a(rg(O)),$||(w.unsub(),E&&(E=!1,Sa-=1))});let A=!1;const C=setInterval(()=>{if(!A){if(A=!0,I){clearInterval(C),A=!1;return}x&&(x=!1,a(rg(O))),A=!1}},100);vr(()=>{console.debug("startSubscription: end"),w.unsub(),E&&(E=!1,Sa-=1),clearInterval(C)})};return Un(()=>{u()}),{events:o}},uP=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),pr(t)},dP=e=>{const{config:t}=Me(),n=()=>El(e.event),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:uP(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return _(ws,{get events(){return[...i()].reverse()}})},fP=e=>_(Sn,{get children(){return _(Fe,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>_(dP,{get event(){return t.event}})})}}),hP=B('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),pP=B('<div class="shrink-0 border-b">'),gP=B('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),mP=B('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth pb-8">'),$i=e=>{let t;const n=_T(),i=()=>e.width??"medium";return Uu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Uu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),_(iv.Provider,{value:n,get children(){const o=hP(),a=t;return typeof a=="function"?br(a,o):t=o,L(o,_(fe,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const l=pP();return L(l,()=>e.header),l})(),(()=>{const l=gP();return L(l,()=>e.children),l})()]},children:l=>(()=>{const u=mP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=d.nextSibling;return h.$$click=()=>n?.clearTimeline(),L(p,_(Gu,{})),L(g,_(fP,{timelineContent:l})),u})()})),Be(l=>Ws(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},l)),o}})};at(["click"]);const vP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),bP=(e={})=>(()=>{const t=vP();return Ve(t,e,!0,!0),t})(),yP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),_P=(e={})=>(()=>{const t=yP();return Ve(t,e,!0,!0),t})(),wP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),xP=(e={})=>(()=>{const t=wP();return Ve(t,e,!0,!0),t})(),$P=B('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),kP=B('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),EP=B('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),CP=e=>(()=>{const t=$P(),n=t.firstChild,i=n.nextSibling;return L(n,()=>e.title),L(i,()=>e.children),t})(),ki=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=Me(),o=xo(),a=u=>{t({...e.column,width:u})},l=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=EP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=h.nextSibling,v=g.firstChild,k=g.nextSibling,$=k.nextSibling,w=$.firstChild;return L(u,_(CP,{title:"カラム幅",get children(){const E=kP(),x=E.firstChild,I=x.nextSibling,O=I.nextSibling,A=O.nextSibling;return x.$$click=()=>a("widest"),I.$$click=()=>a("wide"),O.$$click=()=>a("medium"),A.$$click=()=>a("narrow"),E}}),d),h.$$click=()=>l(e.columnIndex-1),L(p,_(bP,{})),g.$$click=()=>l(e.columnIndex+1),L(v,_(_P,{})),$.$$click=()=>n(e.column.id),L(w,_(xP,{})),u})()};at(["click"]);const SP=ot.array(ot.array(ot.string()));class TP extends om{constructor(t){super(),this.tags=t}}const AP=e=>{try{const t=SP.parse(JSON.parse(e));return new TP(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[ig,IP]=Ag(()=>xe({})),[RP,OP]=Ag(()=>xe({})),LP=e=>{const t=Vn(),[n,i]=xe(null);return Un(()=>{const o=e();if(o==null)return;const{encrypted:a}=o;if(a in ig()){i(ig()[a]);return}const l=t();l!=null&&(RP()[a]||(OP(u=>({...u,[a]:!0})),window.nostr?.nip04?.decrypt?.(l,a)?.then(u=>{IP(d=>({...d,[a]:u})),i(u)}).catch(u=>{console.error(`failed to decrypt "${a}"`,u)})))}),n},PP=e=>{const t=ze(()=>hr(e.event)),n=LP(()=>{const{content:a}=t();return a==null||a.length===0?null:{id:t().id,encrypted:a}}),i=()=>{const a=n();if(a==null)return[];console.log(a);try{return AP(a).taggedEventIds()}catch(l){return console.warn(l),[]}},o=()=>t().taggedEventIds();return _(It,{get each(){return[...o(),...i()]},children:a=>_(Zs,{get children(){return _(is,{eventId:a,get ensureKinds(){return[ct.Text]}})}})})},MP=e=>{const t=_i(),n=ze(e),o=wi(()=>["useFollowings",n()],({queryKey:l,signal:u})=>{console.debug("useFollowings");const[,d]=l;if(d==null)return Promise.resolve(null);const{kind:h,author:p,identifier:g}=d,v=new vs({type:"ParameterizedReplaceableEvent",kind:h,author:p,identifier:g}),k=v.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${p}:${g}`)});return v.onUpdate($=>{const w=$d($);t.setQueryData(l,w)}),bs({task:v,signal:u}),wr(15e3,`useParameterizedReplaceableEvent: ${h}:${p}:${g}`)(k)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},BP=e=>{const{removeColumn:t}=Me(),{event:n}=MP(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"ブックマーク"},get icon(){return _(Wx,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(fe,{get when(){return n()},keyed:!0,children:i=>_(PP,{event:i})})}})},jP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),Sv=(e={})=>(()=>{const t=jP();return Ve(t,e,!0,!0),t})();var tl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */tl.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",g=1,v=2,k=4,$=1,w=2,E=1,x=2,I=4,O=8,A=16,C=32,T=64,j=128,N=256,ne=512,V=30,Y="...",F=800,J=16,oe=1,q=2,G=3,ue=1/0,ee=9007199254740991,pe=17976931348623157e292,Z=0/0,re=4294967295,de=re-1,te=re>>>1,ge=[["ary",j],["bind",E],["bindKey",x],["curry",O],["curryRight",A],["flip",ne],["partial",C],["partialRight",T],["rearg",N]],ie="[object Arguments]",ke="[object Array]",Q="[object AsyncFunction]",He="[object Boolean]",Qe="[object Date]",yt="[object DOMException]",Oe="[object Error]",qe="[object Function]",kt="[object GeneratorFunction]",Je="[object Map]",Et="[object Number]",Gn="[object Null]",_t="[object Object]",$r="[object Promise]",Ei="[object Proxy]",Ln="[object RegExp]",gt="[object Set]",bn="[object String]",Pn="[object Symbol]",Ci="[object Undefined]",we="[object WeakMap]",Qn="[object WeakSet]",Gt="[object ArrayBuffer]",Ft="[object DataView]",kr="[object Float32Array]",Yn="[object Float64Array]",Jn="[object Int8Array]",Er="[object Int16Array]",Si="[object Int32Array]",Ti="[object Uint8Array]",Ai="[object Uint8ClampedArray]",jl="[object Uint16Array]",Ul="[object Uint32Array]",Hv=/\b__p \+= '';/g,Fv=/\b(__p \+=) '' \+/g,qv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yd=/&(?:amp|lt|gt|quot|#39);/g,Jd=/[&<>"']/g,Wv=RegExp(Yd.source),Zv=RegExp(Jd.source),Vv=/<%-([\s\S]+?)%>/g,Kv=/<%([\s\S]+?)%>/g,Xd=/<%=([\s\S]+?)%>/g,Gv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qv=/^\w*$/,Yv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,Jv=RegExp(Nl.source),Dl=/^\s+/,Xv=/\s/,e2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,t2=/\{\n\/\* \[wrapped with (.+)\] \*/,n2=/,? & /,r2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i2=/[()=,{}\[\]\/\s]/,s2=/\\(\\)?/g,o2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ef=/\w*$/,a2=/^[-+]0x[0-9a-f]+$/i,l2=/^0b[01]+$/i,c2=/^\[object .+?Constructor\]$/,u2=/^0o[0-7]+$/i,d2=/^(?:0|[1-9]\d*)$/,f2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ko=/($^)/,h2=/['\n\r\u2028\u2029\\]/g,Eo="\\ud800-\\udfff",p2="\\u0300-\\u036f",g2="\\ufe20-\\ufe2f",m2="\\u20d0-\\u20ff",tf=p2+g2+m2,nf="\\u2700-\\u27bf",rf="a-z\\xdf-\\xf6\\xf8-\\xff",v2="\\xac\\xb1\\xd7\\xf7",b2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",y2="\\u2000-\\u206f",_2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sf="A-Z\\xc0-\\xd6\\xd8-\\xde",of="\\ufe0e\\ufe0f",af=v2+b2+y2+_2,zl="['’]",w2="["+Eo+"]",lf="["+af+"]",Co="["+tf+"]",cf="\\d+",x2="["+nf+"]",uf="["+rf+"]",df="[^"+Eo+af+cf+nf+rf+sf+"]",Hl="\\ud83c[\\udffb-\\udfff]",$2="(?:"+Co+"|"+Hl+")",ff="[^"+Eo+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",ql="[\\ud800-\\udbff][\\udc00-\\udfff]",Ii="["+sf+"]",hf="\\u200d",pf="(?:"+uf+"|"+df+")",k2="(?:"+Ii+"|"+df+")",gf="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",mf="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",vf=$2+"?",bf="["+of+"]?",E2="(?:"+hf+"(?:"+[ff,Fl,ql].join("|")+")"+bf+vf+")*",C2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",S2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",yf=bf+vf+E2,T2="(?:"+[x2,Fl,ql].join("|")+")"+yf,A2="(?:"+[ff+Co+"?",Co,Fl,ql,w2].join("|")+")",I2=RegExp(zl,"g"),R2=RegExp(Co,"g"),Wl=RegExp(Hl+"(?="+Hl+")|"+A2+yf,"g"),O2=RegExp([Ii+"?"+uf+"+"+gf+"(?="+[lf,Ii,"$"].join("|")+")",k2+"+"+mf+"(?="+[lf,Ii+pf,"$"].join("|")+")",Ii+"?"+pf+"+"+gf,Ii+"+"+mf,S2,C2,cf,T2].join("|"),"g"),L2=RegExp("["+hf+Eo+tf+of+"]"),P2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,M2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],B2=-1,tt={};tt[kr]=tt[Yn]=tt[Jn]=tt[Er]=tt[Si]=tt[Ti]=tt[Ai]=tt[jl]=tt[Ul]=!0,tt[ie]=tt[ke]=tt[Gt]=tt[He]=tt[Ft]=tt[Qe]=tt[Oe]=tt[qe]=tt[Je]=tt[Et]=tt[_t]=tt[Ln]=tt[gt]=tt[bn]=tt[we]=!1;var Xe={};Xe[ie]=Xe[ke]=Xe[Gt]=Xe[Ft]=Xe[He]=Xe[Qe]=Xe[kr]=Xe[Yn]=Xe[Jn]=Xe[Er]=Xe[Si]=Xe[Je]=Xe[Et]=Xe[_t]=Xe[Ln]=Xe[gt]=Xe[bn]=Xe[Pn]=Xe[Ti]=Xe[Ai]=Xe[jl]=Xe[Ul]=!0,Xe[Oe]=Xe[qe]=Xe[we]=!1;var j2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},U2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},N2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},D2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},z2=parseFloat,H2=parseInt,_f=typeof dr=="object"&&dr&&dr.Object===Object&&dr,F2=typeof self=="object"&&self&&self.Object===Object&&self,Ct=_f||F2||Function("return this")(),Zl=t&&!t.nodeType&&t,Xr=Zl&&!0&&e&&!e.nodeType&&e,wf=Xr&&Xr.exports===Zl,Vl=wf&&_f.process,ln=function(){try{var P=Xr&&Xr.require&&Xr.require("util").types;return P||Vl&&Vl.binding&&Vl.binding("util")}catch{}}(),xf=ln&&ln.isArrayBuffer,$f=ln&&ln.isDate,kf=ln&&ln.isMap,Ef=ln&&ln.isRegExp,Cf=ln&&ln.isSet,Sf=ln&&ln.isTypedArray;function Qt(P,D,U){switch(U.length){case 0:return P.call(D);case 1:return P.call(D,U[0]);case 2:return P.call(D,U[0],U[1]);case 3:return P.call(D,U[0],U[1],U[2])}return P.apply(D,U)}function q2(P,D,U,le){for(var Ee=-1,Ze=P==null?0:P.length;++Ee<Ze;){var mt=P[Ee];D(le,mt,U(mt),P)}return le}function cn(P,D){for(var U=-1,le=P==null?0:P.length;++U<le&&D(P[U],U,P)!==!1;);return P}function W2(P,D){for(var U=P==null?0:P.length;U--&&D(P[U],U,P)!==!1;);return P}function Tf(P,D){for(var U=-1,le=P==null?0:P.length;++U<le;)if(!D(P[U],U,P))return!1;return!0}function Cr(P,D){for(var U=-1,le=P==null?0:P.length,Ee=0,Ze=[];++U<le;){var mt=P[U];D(mt,U,P)&&(Ze[Ee++]=mt)}return Ze}function So(P,D){var U=P==null?0:P.length;return!!U&&Ri(P,D,0)>-1}function Kl(P,D,U){for(var le=-1,Ee=P==null?0:P.length;++le<Ee;)if(U(D,P[le]))return!0;return!1}function rt(P,D){for(var U=-1,le=P==null?0:P.length,Ee=Array(le);++U<le;)Ee[U]=D(P[U],U,P);return Ee}function Sr(P,D){for(var U=-1,le=D.length,Ee=P.length;++U<le;)P[Ee+U]=D[U];return P}function Gl(P,D,U,le){var Ee=-1,Ze=P==null?0:P.length;for(le&&Ze&&(U=P[++Ee]);++Ee<Ze;)U=D(U,P[Ee],Ee,P);return U}function Z2(P,D,U,le){var Ee=P==null?0:P.length;for(le&&Ee&&(U=P[--Ee]);Ee--;)U=D(U,P[Ee],Ee,P);return U}function Ql(P,D){for(var U=-1,le=P==null?0:P.length;++U<le;)if(D(P[U],U,P))return!0;return!1}var V2=Yl("length");function K2(P){return P.split("")}function G2(P){return P.match(r2)||[]}function Af(P,D,U){var le;return U(P,function(Ee,Ze,mt){if(D(Ee,Ze,mt))return le=Ze,!1}),le}function To(P,D,U,le){for(var Ee=P.length,Ze=U+(le?1:-1);le?Ze--:++Ze<Ee;)if(D(P[Ze],Ze,P))return Ze;return-1}function Ri(P,D,U){return D===D?ab(P,D,U):To(P,If,U)}function Q2(P,D,U,le){for(var Ee=U-1,Ze=P.length;++Ee<Ze;)if(le(P[Ee],D))return Ee;return-1}function If(P){return P!==P}function Rf(P,D){var U=P==null?0:P.length;return U?Xl(P,D)/U:Z}function Yl(P){return function(D){return D==null?n:D[P]}}function Jl(P){return function(D){return P==null?n:P[D]}}function Of(P,D,U,le,Ee){return Ee(P,function(Ze,mt,Ye){U=le?(le=!1,Ze):D(U,Ze,mt,Ye)}),U}function Y2(P,D){var U=P.length;for(P.sort(D);U--;)P[U]=P[U].value;return P}function Xl(P,D){for(var U,le=-1,Ee=P.length;++le<Ee;){var Ze=D(P[le]);Ze!==n&&(U=U===n?Ze:U+Ze)}return U}function ec(P,D){for(var U=-1,le=Array(P);++U<P;)le[U]=D(U);return le}function J2(P,D){return rt(D,function(U){return[U,P[U]]})}function Lf(P){return P&&P.slice(0,jf(P)+1).replace(Dl,"")}function Yt(P){return function(D){return P(D)}}function tc(P,D){return rt(D,function(U){return P[U]})}function Cs(P,D){return P.has(D)}function Pf(P,D){for(var U=-1,le=P.length;++U<le&&Ri(D,P[U],0)>-1;);return U}function Mf(P,D){for(var U=P.length;U--&&Ri(D,P[U],0)>-1;);return U}function X2(P,D){for(var U=P.length,le=0;U--;)P[U]===D&&++le;return le}var eb=Jl(j2),tb=Jl(U2);function nb(P){return"\\"+D2[P]}function rb(P,D){return P==null?n:P[D]}function Oi(P){return L2.test(P)}function ib(P){return P2.test(P)}function sb(P){for(var D,U=[];!(D=P.next()).done;)U.push(D.value);return U}function nc(P){var D=-1,U=Array(P.size);return P.forEach(function(le,Ee){U[++D]=[Ee,le]}),U}function Bf(P,D){return function(U){return P(D(U))}}function Tr(P,D){for(var U=-1,le=P.length,Ee=0,Ze=[];++U<le;){var mt=P[U];(mt===D||mt===p)&&(P[U]=p,Ze[Ee++]=U)}return Ze}function Ao(P){var D=-1,U=Array(P.size);return P.forEach(function(le){U[++D]=le}),U}function ob(P){var D=-1,U=Array(P.size);return P.forEach(function(le){U[++D]=[le,le]}),U}function ab(P,D,U){for(var le=U-1,Ee=P.length;++le<Ee;)if(P[le]===D)return le;return-1}function lb(P,D,U){for(var le=U+1;le--;)if(P[le]===D)return le;return le}function Li(P){return Oi(P)?ub(P):V2(P)}function yn(P){return Oi(P)?db(P):K2(P)}function jf(P){for(var D=P.length;D--&&Xv.test(P.charAt(D)););return D}var cb=Jl(N2);function ub(P){for(var D=Wl.lastIndex=0;Wl.test(P);)++D;return D}function db(P){return P.match(Wl)||[]}function fb(P){return P.match(O2)||[]}var hb=function P(D){D=D==null?Ct:Pi.defaults(Ct.Object(),D,Pi.pick(Ct,M2));var U=D.Array,le=D.Date,Ee=D.Error,Ze=D.Function,mt=D.Math,Ye=D.Object,rc=D.RegExp,pb=D.String,un=D.TypeError,Io=U.prototype,gb=Ze.prototype,Mi=Ye.prototype,Ro=D["__core-js_shared__"],Oo=gb.toString,Ge=Mi.hasOwnProperty,mb=0,Uf=function(){var r=/[^.]+$/.exec(Ro&&Ro.keys&&Ro.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Lo=Mi.toString,vb=Oo.call(Ye),bb=Ct._,yb=rc("^"+Oo.call(Ge).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=wf?D.Buffer:n,Ar=D.Symbol,Mo=D.Uint8Array,Nf=Po?Po.allocUnsafe:n,Bo=Bf(Ye.getPrototypeOf,Ye),Df=Ye.create,zf=Mi.propertyIsEnumerable,jo=Io.splice,Hf=Ar?Ar.isConcatSpreadable:n,Ss=Ar?Ar.iterator:n,ei=Ar?Ar.toStringTag:n,Uo=function(){try{var r=si(Ye,"defineProperty");return r({},"",{}),r}catch{}}(),_b=D.clearTimeout!==Ct.clearTimeout&&D.clearTimeout,wb=le&&le.now!==Ct.Date.now&&le.now,xb=D.setTimeout!==Ct.setTimeout&&D.setTimeout,No=mt.ceil,Do=mt.floor,ic=Ye.getOwnPropertySymbols,$b=Po?Po.isBuffer:n,Ff=D.isFinite,kb=Io.join,Eb=Bf(Ye.keys,Ye),vt=mt.max,Rt=mt.min,Cb=le.now,Sb=D.parseInt,qf=mt.random,Tb=Io.reverse,sc=si(D,"DataView"),Ts=si(D,"Map"),oc=si(D,"Promise"),Bi=si(D,"Set"),As=si(D,"WeakMap"),Is=si(Ye,"create"),zo=As&&new As,ji={},Ab=oi(sc),Ib=oi(Ts),Rb=oi(oc),Ob=oi(Bi),Lb=oi(As),Ho=Ar?Ar.prototype:n,Rs=Ho?Ho.valueOf:n,Wf=Ho?Ho.toString:n;function b(r){if(lt(r)&&!Se(r)&&!(r instanceof Ne)){if(r instanceof dn)return r;if(Ge.call(r,"__wrapped__"))return Zh(r)}return new dn(r)}var Ui=function(){function r(){}return function(s){if(!it(s))return{};if(Df)return Df(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Fo(){}function dn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:Vv,evaluate:Kv,interpolate:Xd,variable:"",imports:{_:b}},b.prototype=Fo.prototype,b.prototype.constructor=b,dn.prototype=Ui(Fo.prototype),dn.prototype.constructor=dn;function Ne(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function Pb(){var r=new Ne(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function Mb(){if(this.__filtered__){var r=new Ne(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Bb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Se(r),f=s<0,m=c?r.length:0,y=Ky(0,m,this.__views__),S=y.start,R=y.end,M=R-S,z=f?R:S-1,H=this.__iteratees__,K=H.length,se=0,he=Rt(M,this.__takeCount__);if(!c||!f&&m==M&&he==M)return gh(r,this.__actions__);var ye=[];e:for(;M--&&se<he;){z+=s;for(var Ie=-1,_e=r[z];++Ie<K;){var je=H[Ie],De=je.iteratee,en=je.type,Ut=De(_e);if(en==q)_e=Ut;else if(!Ut){if(en==oe)continue e;break e}}ye[se++]=_e}return ye}Ne.prototype=Ui(Fo.prototype),Ne.prototype.constructor=Ne;function ti(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function jb(){this.__data__=Is?Is(null):{},this.size=0}function Ub(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Nb(r){var s=this.__data__;if(Is){var c=s[r];return c===d?n:c}return Ge.call(s,r)?s[r]:n}function Db(r){var s=this.__data__;return Is?s[r]!==n:Ge.call(s,r)}function zb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Is&&s===n?d:s,this}ti.prototype.clear=jb,ti.prototype.delete=Ub,ti.prototype.get=Nb,ti.prototype.has=Db,ti.prototype.set=zb;function Xn(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Hb(){this.__data__=[],this.size=0}function Fb(r){var s=this.__data__,c=qo(s,r);if(c<0)return!1;var f=s.length-1;return c==f?s.pop():jo.call(s,c,1),--this.size,!0}function qb(r){var s=this.__data__,c=qo(s,r);return c<0?n:s[c][1]}function Wb(r){return qo(this.__data__,r)>-1}function Zb(r,s){var c=this.__data__,f=qo(c,r);return f<0?(++this.size,c.push([r,s])):c[f][1]=s,this}Xn.prototype.clear=Hb,Xn.prototype.delete=Fb,Xn.prototype.get=qb,Xn.prototype.has=Wb,Xn.prototype.set=Zb;function er(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Vb(){this.size=0,this.__data__={hash:new ti,map:new(Ts||Xn),string:new ti}}function Kb(r){var s=na(this,r).delete(r);return this.size-=s?1:0,s}function Gb(r){return na(this,r).get(r)}function Qb(r){return na(this,r).has(r)}function Yb(r,s){var c=na(this,r),f=c.size;return c.set(r,s),this.size+=c.size==f?0:1,this}er.prototype.clear=Vb,er.prototype.delete=Kb,er.prototype.get=Gb,er.prototype.has=Qb,er.prototype.set=Yb;function ni(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new er;++s<c;)this.add(r[s])}function Jb(r){return this.__data__.set(r,d),this}function Xb(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=Jb,ni.prototype.has=Xb;function _n(r){var s=this.__data__=new Xn(r);this.size=s.size}function ey(){this.__data__=new Xn,this.size=0}function ty(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function ny(r){return this.__data__.get(r)}function ry(r){return this.__data__.has(r)}function iy(r,s){var c=this.__data__;if(c instanceof Xn){var f=c.__data__;if(!Ts||f.length<o-1)return f.push([r,s]),this.size=++c.size,this;c=this.__data__=new er(f)}return c.set(r,s),this.size=c.size,this}_n.prototype.clear=ey,_n.prototype.delete=ty,_n.prototype.get=ny,_n.prototype.has=ry,_n.prototype.set=iy;function Zf(r,s){var c=Se(r),f=!c&&ai(r),m=!c&&!f&&Pr(r),y=!c&&!f&&!m&&Hi(r),S=c||f||m||y,R=S?ec(r.length,pb):[],M=R.length;for(var z in r)(s||Ge.call(r,z))&&!(S&&(z=="length"||m&&(z=="offset"||z=="parent")||y&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||ir(z,M)))&&R.push(z);return R}function Vf(r){var s=r.length;return s?r[vc(0,s-1)]:n}function sy(r,s){return ra(qt(r),ri(s,0,r.length))}function oy(r){return ra(qt(r))}function ac(r,s,c){(c!==n&&!wn(r[s],c)||c===n&&!(s in r))&&tr(r,s,c)}function Os(r,s,c){var f=r[s];(!(Ge.call(r,s)&&wn(f,c))||c===n&&!(s in r))&&tr(r,s,c)}function qo(r,s){for(var c=r.length;c--;)if(wn(r[c][0],s))return c;return-1}function ay(r,s,c,f){return Ir(r,function(m,y,S){s(f,m,c(m),S)}),f}function Kf(r,s){return r&&Bn(s,wt(s),r)}function ly(r,s){return r&&Bn(s,Zt(s),r)}function tr(r,s,c){s=="__proto__"&&Uo?Uo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function lc(r,s){for(var c=-1,f=s.length,m=U(f),y=r==null;++c<f;)m[c]=y?n:Hc(r,s[c]);return m}function ri(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function fn(r,s,c,f,m,y){var S,R=s&g,M=s&v,z=s&k;if(c&&(S=m?c(r,f,m,y):c(r)),S!==n)return S;if(!it(r))return r;var H=Se(r);if(H){if(S=Qy(r),!R)return qt(r,S)}else{var K=Ot(r),se=K==qe||K==kt;if(Pr(r))return bh(r,R);if(K==_t||K==ie||se&&!m){if(S=M||se?{}:jh(r),!R)return M?Ny(r,ly(S,r)):Uy(r,Kf(S,r))}else{if(!Xe[K])return m?r:{};S=Yy(r,K,R)}}y||(y=new _n);var he=y.get(r);if(he)return he;y.set(r,S),fp(r)?r.forEach(function(_e){S.add(fn(_e,s,c,_e,r,y))}):up(r)&&r.forEach(function(_e,je){S.set(je,fn(_e,s,c,je,r,y))});var ye=z?M?Tc:Sc:M?Zt:wt,Ie=H?n:ye(r);return cn(Ie||r,function(_e,je){Ie&&(je=_e,_e=r[je]),Os(S,je,fn(_e,s,c,je,r,y))}),S}function cy(r){var s=wt(r);return function(c){return Gf(c,r,s)}}function Gf(r,s,c){var f=c.length;if(r==null)return!f;for(r=Ye(r);f--;){var m=c[f],y=s[m],S=r[m];if(S===n&&!(m in r)||!y(S))return!1}return!0}function Qf(r,s,c){if(typeof r!="function")throw new un(l);return Ns(function(){r.apply(n,c)},s)}function Ls(r,s,c,f){var m=-1,y=So,S=!0,R=r.length,M=[],z=s.length;if(!R)return M;c&&(s=rt(s,Yt(c))),f?(y=Kl,S=!1):s.length>=o&&(y=Cs,S=!1,s=new ni(s));e:for(;++m<R;){var H=r[m],K=c==null?H:c(H);if(H=f||H!==0?H:0,S&&K===K){for(var se=z;se--;)if(s[se]===K)continue e;M.push(H)}else y(s,K,f)||M.push(H)}return M}var Ir=$h(Mn),Yf=$h(uc,!0);function uy(r,s){var c=!0;return Ir(r,function(f,m,y){return c=!!s(f,m,y),c}),c}function Wo(r,s,c){for(var f=-1,m=r.length;++f<m;){var y=r[f],S=s(y);if(S!=null&&(R===n?S===S&&!Xt(S):c(S,R)))var R=S,M=y}return M}function dy(r,s,c,f){var m=r.length;for(c=Te(c),c<0&&(c=-c>m?0:m+c),f=f===n||f>m?m:Te(f),f<0&&(f+=m),f=c>f?0:pp(f);c<f;)r[c++]=s;return r}function Jf(r,s){var c=[];return Ir(r,function(f,m,y){s(f,m,y)&&c.push(f)}),c}function St(r,s,c,f,m){var y=-1,S=r.length;for(c||(c=Xy),m||(m=[]);++y<S;){var R=r[y];s>0&&c(R)?s>1?St(R,s-1,c,f,m):Sr(m,R):f||(m[m.length]=R)}return m}var cc=kh(),Xf=kh(!0);function Mn(r,s){return r&&cc(r,s,wt)}function uc(r,s){return r&&Xf(r,s,wt)}function Zo(r,s){return Cr(s,function(c){return sr(r[c])})}function ii(r,s){s=Or(s,r);for(var c=0,f=s.length;r!=null&&c<f;)r=r[jn(s[c++])];return c&&c==f?r:n}function eh(r,s,c){var f=s(r);return Se(r)?f:Sr(f,c(r))}function Bt(r){return r==null?r===n?Ci:Gn:ei&&ei in Ye(r)?Vy(r):o_(r)}function dc(r,s){return r>s}function fy(r,s){return r!=null&&Ge.call(r,s)}function hy(r,s){return r!=null&&s in Ye(r)}function py(r,s,c){return r>=Rt(s,c)&&r<vt(s,c)}function fc(r,s,c){for(var f=c?Kl:So,m=r[0].length,y=r.length,S=y,R=U(y),M=1/0,z=[];S--;){var H=r[S];S&&s&&(H=rt(H,Yt(s))),M=Rt(H.length,M),R[S]=!c&&(s||m>=120&&H.length>=120)?new ni(S&&H):n}H=r[0];var K=-1,se=R[0];e:for(;++K<m&&z.length<M;){var he=H[K],ye=s?s(he):he;if(he=c||he!==0?he:0,!(se?Cs(se,ye):f(z,ye,c))){for(S=y;--S;){var Ie=R[S];if(!(Ie?Cs(Ie,ye):f(r[S],ye,c)))continue e}se&&se.push(ye),z.push(he)}}return z}function gy(r,s,c,f){return Mn(r,function(m,y,S){s(f,c(m),y,S)}),f}function Ps(r,s,c){s=Or(s,r),r=zh(r,s);var f=r==null?r:r[jn(pn(s))];return f==null?n:Qt(f,r,c)}function th(r){return lt(r)&&Bt(r)==ie}function my(r){return lt(r)&&Bt(r)==Gt}function vy(r){return lt(r)&&Bt(r)==Qe}function Ms(r,s,c,f,m){return r===s?!0:r==null||s==null||!lt(r)&&!lt(s)?r!==r&&s!==s:by(r,s,c,f,Ms,m)}function by(r,s,c,f,m,y){var S=Se(r),R=Se(s),M=S?ke:Ot(r),z=R?ke:Ot(s);M=M==ie?_t:M,z=z==ie?_t:z;var H=M==_t,K=z==_t,se=M==z;if(se&&Pr(r)){if(!Pr(s))return!1;S=!0,H=!1}if(se&&!H)return y||(y=new _n),S||Hi(r)?Ph(r,s,c,f,m,y):Wy(r,s,M,c,f,m,y);if(!(c&$)){var he=H&&Ge.call(r,"__wrapped__"),ye=K&&Ge.call(s,"__wrapped__");if(he||ye){var Ie=he?r.value():r,_e=ye?s.value():s;return y||(y=new _n),m(Ie,_e,c,f,y)}}return se?(y||(y=new _n),Zy(r,s,c,f,m,y)):!1}function yy(r){return lt(r)&&Ot(r)==Je}function hc(r,s,c,f){var m=c.length,y=m,S=!f;if(r==null)return!y;for(r=Ye(r);m--;){var R=c[m];if(S&&R[2]?R[1]!==r[R[0]]:!(R[0]in r))return!1}for(;++m<y;){R=c[m];var M=R[0],z=r[M],H=R[1];if(S&&R[2]){if(z===n&&!(M in r))return!1}else{var K=new _n;if(f)var se=f(z,H,M,r,s,K);if(!(se===n?Ms(H,z,$|w,f,K):se))return!1}}return!0}function nh(r){if(!it(r)||t_(r))return!1;var s=sr(r)?yb:c2;return s.test(oi(r))}function _y(r){return lt(r)&&Bt(r)==Ln}function wy(r){return lt(r)&&Ot(r)==gt}function xy(r){return lt(r)&&ca(r.length)&&!!tt[Bt(r)]}function rh(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?Se(r)?oh(r[0],r[1]):sh(r):Ep(r)}function pc(r){if(!Us(r))return Eb(r);var s=[];for(var c in Ye(r))Ge.call(r,c)&&c!="constructor"&&s.push(c);return s}function $y(r){if(!it(r))return s_(r);var s=Us(r),c=[];for(var f in r)f=="constructor"&&(s||!Ge.call(r,f))||c.push(f);return c}function gc(r,s){return r<s}function ih(r,s){var c=-1,f=Wt(r)?U(r.length):[];return Ir(r,function(m,y,S){f[++c]=s(m,y,S)}),f}function sh(r){var s=Ic(r);return s.length==1&&s[0][2]?Nh(s[0][0],s[0][1]):function(c){return c===r||hc(c,r,s)}}function oh(r,s){return Oc(r)&&Uh(s)?Nh(jn(r),s):function(c){var f=Hc(c,r);return f===n&&f===s?Fc(c,r):Ms(s,f,$|w)}}function Vo(r,s,c,f,m){r!==s&&cc(s,function(y,S){if(m||(m=new _n),it(y))ky(r,s,S,c,Vo,f,m);else{var R=f?f(Pc(r,S),y,S+"",r,s,m):n;R===n&&(R=y),ac(r,S,R)}},Zt)}function ky(r,s,c,f,m,y,S){var R=Pc(r,c),M=Pc(s,c),z=S.get(M);if(z){ac(r,c,z);return}var H=y?y(R,M,c+"",r,s,S):n,K=H===n;if(K){var se=Se(M),he=!se&&Pr(M),ye=!se&&!he&&Hi(M);H=M,se||he||ye?Se(R)?H=R:dt(R)?H=qt(R):he?(K=!1,H=bh(M,!0)):ye?(K=!1,H=yh(M,!0)):H=[]:Ds(M)||ai(M)?(H=R,ai(R)?H=gp(R):(!it(R)||sr(R))&&(H=jh(M))):K=!1}K&&(S.set(M,H),m(H,M,f,y,S),S.delete(M)),ac(r,c,H)}function ah(r,s){var c=r.length;if(c)return s+=s<0?c:0,ir(s,c)?r[s]:n}function lh(r,s,c){s.length?s=rt(s,function(y){return Se(y)?function(S){return ii(S,y.length===1?y[0]:y)}:y}):s=[Vt];var f=-1;s=rt(s,Yt(ve()));var m=ih(r,function(y,S,R){var M=rt(s,function(z){return z(y)});return{criteria:M,index:++f,value:y}});return Y2(m,function(y,S){return jy(y,S,c)})}function Ey(r,s){return ch(r,s,function(c,f){return Fc(r,f)})}function ch(r,s,c){for(var f=-1,m=s.length,y={};++f<m;){var S=s[f],R=ii(r,S);c(R,S)&&Bs(y,Or(S,r),R)}return y}function Cy(r){return function(s){return ii(s,r)}}function mc(r,s,c,f){var m=f?Q2:Ri,y=-1,S=s.length,R=r;for(r===s&&(s=qt(s)),c&&(R=rt(r,Yt(c)));++y<S;)for(var M=0,z=s[y],H=c?c(z):z;(M=m(R,H,M,f))>-1;)R!==r&&jo.call(R,M,1),jo.call(r,M,1);return r}function uh(r,s){for(var c=r?s.length:0,f=c-1;c--;){var m=s[c];if(c==f||m!==y){var y=m;ir(m)?jo.call(r,m,1):_c(r,m)}}return r}function vc(r,s){return r+Do(qf()*(s-r+1))}function Sy(r,s,c,f){for(var m=-1,y=vt(No((s-r)/(c||1)),0),S=U(y);y--;)S[f?y:++m]=r,r+=c;return S}function bc(r,s){var c="";if(!r||s<1||s>ee)return c;do s%2&&(c+=r),s=Do(s/2),s&&(r+=r);while(s);return c}function Le(r,s){return Mc(Dh(r,s,Vt),r+"")}function Ty(r){return Vf(Fi(r))}function Ay(r,s){var c=Fi(r);return ra(c,ri(s,0,c.length))}function Bs(r,s,c,f){if(!it(r))return r;s=Or(s,r);for(var m=-1,y=s.length,S=y-1,R=r;R!=null&&++m<y;){var M=jn(s[m]),z=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=S){var H=R[M];z=f?f(H,M,R):n,z===n&&(z=it(H)?H:ir(s[m+1])?[]:{})}Os(R,M,z),R=R[M]}return r}var dh=zo?function(r,s){return zo.set(r,s),r}:Vt,Iy=Uo?function(r,s){return Uo(r,"toString",{configurable:!0,enumerable:!1,value:Wc(s),writable:!0})}:Vt;function Ry(r){return ra(Fi(r))}function hn(r,s,c){var f=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var y=U(m);++f<m;)y[f]=r[f+s];return y}function Oy(r,s){var c;return Ir(r,function(f,m,y){return c=s(f,m,y),!c}),!!c}function Ko(r,s,c){var f=0,m=r==null?f:r.length;if(typeof s=="number"&&s===s&&m<=te){for(;f<m;){var y=f+m>>>1,S=r[y];S!==null&&!Xt(S)&&(c?S<=s:S<s)?f=y+1:m=y}return m}return yc(r,s,Vt,c)}function yc(r,s,c,f){var m=0,y=r==null?0:r.length;if(y===0)return 0;s=c(s);for(var S=s!==s,R=s===null,M=Xt(s),z=s===n;m<y;){var H=Do((m+y)/2),K=c(r[H]),se=K!==n,he=K===null,ye=K===K,Ie=Xt(K);if(S)var _e=f||ye;else z?_e=ye&&(f||se):R?_e=ye&&se&&(f||!he):M?_e=ye&&se&&!he&&(f||!Ie):he||Ie?_e=!1:_e=f?K<=s:K<s;_e?m=H+1:y=H}return Rt(y,de)}function fh(r,s){for(var c=-1,f=r.length,m=0,y=[];++c<f;){var S=r[c],R=s?s(S):S;if(!c||!wn(R,M)){var M=R;y[m++]=S===0?0:S}}return y}function hh(r){return typeof r=="number"?r:Xt(r)?Z:+r}function Jt(r){if(typeof r=="string")return r;if(Se(r))return rt(r,Jt)+"";if(Xt(r))return Wf?Wf.call(r):"";var s=r+"";return s=="0"&&1/r==-ue?"-0":s}function Rr(r,s,c){var f=-1,m=So,y=r.length,S=!0,R=[],M=R;if(c)S=!1,m=Kl;else if(y>=o){var z=s?null:Fy(r);if(z)return Ao(z);S=!1,m=Cs,M=new ni}else M=s?[]:R;e:for(;++f<y;){var H=r[f],K=s?s(H):H;if(H=c||H!==0?H:0,S&&K===K){for(var se=M.length;se--;)if(M[se]===K)continue e;s&&M.push(K),R.push(H)}else m(M,K,c)||(M!==R&&M.push(K),R.push(H))}return R}function _c(r,s){return s=Or(s,r),r=zh(r,s),r==null||delete r[jn(pn(s))]}function ph(r,s,c,f){return Bs(r,s,c(ii(r,s)),f)}function Go(r,s,c,f){for(var m=r.length,y=f?m:-1;(f?y--:++y<m)&&s(r[y],y,r););return c?hn(r,f?0:y,f?y+1:m):hn(r,f?y+1:0,f?m:y)}function gh(r,s){var c=r;return c instanceof Ne&&(c=c.value()),Gl(s,function(f,m){return m.func.apply(m.thisArg,Sr([f],m.args))},c)}function wc(r,s,c){var f=r.length;if(f<2)return f?Rr(r[0]):[];for(var m=-1,y=U(f);++m<f;)for(var S=r[m],R=-1;++R<f;)R!=m&&(y[m]=Ls(y[m]||S,r[R],s,c));return Rr(St(y,1),s,c)}function mh(r,s,c){for(var f=-1,m=r.length,y=s.length,S={};++f<m;){var R=f<y?s[f]:n;c(S,r[f],R)}return S}function xc(r){return dt(r)?r:[]}function $c(r){return typeof r=="function"?r:Vt}function Or(r,s){return Se(r)?r:Oc(r,s)?[r]:Wh(Ke(r))}var Ly=Le;function Lr(r,s,c){var f=r.length;return c=c===n?f:c,!s&&c>=f?r:hn(r,s,c)}var vh=_b||function(r){return Ct.clearTimeout(r)};function bh(r,s){if(s)return r.slice();var c=r.length,f=Nf?Nf(c):new r.constructor(c);return r.copy(f),f}function kc(r){var s=new r.constructor(r.byteLength);return new Mo(s).set(new Mo(r)),s}function Py(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function My(r){var s=new r.constructor(r.source,ef.exec(r));return s.lastIndex=r.lastIndex,s}function By(r){return Rs?Ye(Rs.call(r)):{}}function yh(r,s){var c=s?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function _h(r,s){if(r!==s){var c=r!==n,f=r===null,m=r===r,y=Xt(r),S=s!==n,R=s===null,M=s===s,z=Xt(s);if(!R&&!z&&!y&&r>s||y&&S&&M&&!R&&!z||f&&S&&M||!c&&M||!m)return 1;if(!f&&!y&&!z&&r<s||z&&c&&m&&!f&&!y||R&&c&&m||!S&&m||!M)return-1}return 0}function jy(r,s,c){for(var f=-1,m=r.criteria,y=s.criteria,S=m.length,R=c.length;++f<S;){var M=_h(m[f],y[f]);if(M){if(f>=R)return M;var z=c[f];return M*(z=="desc"?-1:1)}}return r.index-s.index}function wh(r,s,c,f){for(var m=-1,y=r.length,S=c.length,R=-1,M=s.length,z=vt(y-S,0),H=U(M+z),K=!f;++R<M;)H[R]=s[R];for(;++m<S;)(K||m<y)&&(H[c[m]]=r[m]);for(;z--;)H[R++]=r[m++];return H}function xh(r,s,c,f){for(var m=-1,y=r.length,S=-1,R=c.length,M=-1,z=s.length,H=vt(y-R,0),K=U(H+z),se=!f;++m<H;)K[m]=r[m];for(var he=m;++M<z;)K[he+M]=s[M];for(;++S<R;)(se||m<y)&&(K[he+c[S]]=r[m++]);return K}function qt(r,s){var c=-1,f=r.length;for(s||(s=U(f));++c<f;)s[c]=r[c];return s}function Bn(r,s,c,f){var m=!c;c||(c={});for(var y=-1,S=s.length;++y<S;){var R=s[y],M=f?f(c[R],r[R],R,c,r):n;M===n&&(M=r[R]),m?tr(c,R,M):Os(c,R,M)}return c}function Uy(r,s){return Bn(r,Rc(r),s)}function Ny(r,s){return Bn(r,Mh(r),s)}function Qo(r,s){return function(c,f){var m=Se(c)?q2:ay,y=s?s():{};return m(c,r,ve(f,2),y)}}function Ni(r){return Le(function(s,c){var f=-1,m=c.length,y=m>1?c[m-1]:n,S=m>2?c[2]:n;for(y=r.length>3&&typeof y=="function"?(m--,y):n,S&&jt(c[0],c[1],S)&&(y=m<3?n:y,m=1),s=Ye(s);++f<m;){var R=c[f];R&&r(s,R,f,y)}return s})}function $h(r,s){return function(c,f){if(c==null)return c;if(!Wt(c))return r(c,f);for(var m=c.length,y=s?m:-1,S=Ye(c);(s?y--:++y<m)&&f(S[y],y,S)!==!1;);return c}}function kh(r){return function(s,c,f){for(var m=-1,y=Ye(s),S=f(s),R=S.length;R--;){var M=S[r?R:++m];if(c(y[M],M,y)===!1)break}return s}}function Dy(r,s,c){var f=s&E,m=js(r);function y(){var S=this&&this!==Ct&&this instanceof y?m:r;return S.apply(f?c:this,arguments)}return y}function Eh(r){return function(s){s=Ke(s);var c=Oi(s)?yn(s):n,f=c?c[0]:s.charAt(0),m=c?Lr(c,1).join(""):s.slice(1);return f[r]()+m}}function Di(r){return function(s){return Gl($p(xp(s).replace(I2,"")),r,"")}}function js(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Ui(r.prototype),f=r.apply(c,s);return it(f)?f:c}}function zy(r,s,c){var f=js(r);function m(){for(var y=arguments.length,S=U(y),R=y,M=zi(m);R--;)S[R]=arguments[R];var z=y<3&&S[0]!==M&&S[y-1]!==M?[]:Tr(S,M);if(y-=z.length,y<c)return Ih(r,s,Yo,m.placeholder,n,S,z,n,n,c-y);var H=this&&this!==Ct&&this instanceof m?f:r;return Qt(H,this,S)}return m}function Ch(r){return function(s,c,f){var m=Ye(s);if(!Wt(s)){var y=ve(c,3);s=wt(s),c=function(R){return y(m[R],R,m)}}var S=r(s,c,f);return S>-1?m[y?s[S]:S]:n}}function Sh(r){return rr(function(s){var c=s.length,f=c,m=dn.prototype.thru;for(r&&s.reverse();f--;){var y=s[f];if(typeof y!="function")throw new un(l);if(m&&!S&&ta(y)=="wrapper")var S=new dn([],!0)}for(f=S?f:c;++f<c;){y=s[f];var R=ta(y),M=R=="wrapper"?Ac(y):n;M&&Lc(M[0])&&M[1]==(j|O|C|N)&&!M[4].length&&M[9]==1?S=S[ta(M[0])].apply(S,M[3]):S=y.length==1&&Lc(y)?S[R]():S.thru(y)}return function(){var z=arguments,H=z[0];if(S&&z.length==1&&Se(H))return S.plant(H).value();for(var K=0,se=c?s[K].apply(this,z):H;++K<c;)se=s[K].call(this,se);return se}})}function Yo(r,s,c,f,m,y,S,R,M,z){var H=s&j,K=s&E,se=s&x,he=s&(O|A),ye=s&ne,Ie=se?n:js(r);function _e(){for(var je=arguments.length,De=U(je),en=je;en--;)De[en]=arguments[en];if(he)var Ut=zi(_e),tn=X2(De,Ut);if(f&&(De=wh(De,f,m,he)),y&&(De=xh(De,y,S,he)),je-=tn,he&&je<z){var ft=Tr(De,Ut);return Ih(r,s,Yo,_e.placeholder,c,De,ft,R,M,z-je)}var xn=K?c:this,ar=se?xn[r]:r;return je=De.length,R?De=a_(De,R):ye&&je>1&&De.reverse(),H&&M<je&&(De.length=M),this&&this!==Ct&&this instanceof _e&&(ar=Ie||js(ar)),ar.apply(xn,De)}return _e}function Th(r,s){return function(c,f){return gy(c,r,s(f),{})}}function Jo(r,s){return function(c,f){var m;if(c===n&&f===n)return s;if(c!==n&&(m=c),f!==n){if(m===n)return f;typeof c=="string"||typeof f=="string"?(c=Jt(c),f=Jt(f)):(c=hh(c),f=hh(f)),m=r(c,f)}return m}}function Ec(r){return rr(function(s){return s=rt(s,Yt(ve())),Le(function(c){var f=this;return r(s,function(m){return Qt(m,f,c)})})})}function Xo(r,s){s=s===n?" ":Jt(s);var c=s.length;if(c<2)return c?bc(s,r):s;var f=bc(s,No(r/Li(s)));return Oi(s)?Lr(yn(f),0,r).join(""):f.slice(0,r)}function Hy(r,s,c,f){var m=s&E,y=js(r);function S(){for(var R=-1,M=arguments.length,z=-1,H=f.length,K=U(H+M),se=this&&this!==Ct&&this instanceof S?y:r;++z<H;)K[z]=f[z];for(;M--;)K[z++]=arguments[++R];return Qt(se,m?c:this,K)}return S}function Ah(r){return function(s,c,f){return f&&typeof f!="number"&&jt(s,c,f)&&(c=f=n),s=or(s),c===n?(c=s,s=0):c=or(c),f=f===n?s<c?1:-1:or(f),Sy(s,c,f,r)}}function ea(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=gn(s),c=gn(c)),r(s,c)}}function Ih(r,s,c,f,m,y,S,R,M,z){var H=s&O,K=H?S:n,se=H?n:S,he=H?y:n,ye=H?n:y;s|=H?C:T,s&=~(H?T:C),s&I||(s&=~(E|x));var Ie=[r,s,m,he,K,ye,se,R,M,z],_e=c.apply(n,Ie);return Lc(r)&&Hh(_e,Ie),_e.placeholder=f,Fh(_e,r,s)}function Cc(r){var s=mt[r];return function(c,f){if(c=gn(c),f=f==null?0:Rt(Te(f),292),f&&Ff(c)){var m=(Ke(c)+"e").split("e"),y=s(m[0]+"e"+(+m[1]+f));return m=(Ke(y)+"e").split("e"),+(m[0]+"e"+(+m[1]-f))}return s(c)}}var Fy=Bi&&1/Ao(new Bi([,-0]))[1]==ue?function(r){return new Bi(r)}:Kc;function Rh(r){return function(s){var c=Ot(s);return c==Je?nc(s):c==gt?ob(s):J2(s,r(s))}}function nr(r,s,c,f,m,y,S,R){var M=s&x;if(!M&&typeof r!="function")throw new un(l);var z=f?f.length:0;if(z||(s&=~(C|T),f=m=n),S=S===n?S:vt(Te(S),0),R=R===n?R:Te(R),z-=m?m.length:0,s&T){var H=f,K=m;f=m=n}var se=M?n:Ac(r),he=[r,s,c,f,m,H,K,y,S,R];if(se&&i_(he,se),r=he[0],s=he[1],c=he[2],f=he[3],m=he[4],R=he[9]=he[9]===n?M?0:r.length:vt(he[9]-z,0),!R&&s&(O|A)&&(s&=~(O|A)),!s||s==E)var ye=Dy(r,s,c);else s==O||s==A?ye=zy(r,s,R):(s==C||s==(E|C))&&!m.length?ye=Hy(r,s,c,f):ye=Yo.apply(n,he);var Ie=se?dh:Hh;return Fh(Ie(ye,he),r,s)}function Oh(r,s,c,f){return r===n||wn(r,Mi[c])&&!Ge.call(f,c)?s:r}function Lh(r,s,c,f,m,y){return it(r)&&it(s)&&(y.set(s,r),Vo(r,s,n,Lh,y),y.delete(s)),r}function qy(r){return Ds(r)?n:r}function Ph(r,s,c,f,m,y){var S=c&$,R=r.length,M=s.length;if(R!=M&&!(S&&M>R))return!1;var z=y.get(r),H=y.get(s);if(z&&H)return z==s&&H==r;var K=-1,se=!0,he=c&w?new ni:n;for(y.set(r,s),y.set(s,r);++K<R;){var ye=r[K],Ie=s[K];if(f)var _e=S?f(Ie,ye,K,s,r,y):f(ye,Ie,K,r,s,y);if(_e!==n){if(_e)continue;se=!1;break}if(he){if(!Ql(s,function(je,De){if(!Cs(he,De)&&(ye===je||m(ye,je,c,f,y)))return he.push(De)})){se=!1;break}}else if(!(ye===Ie||m(ye,Ie,c,f,y))){se=!1;break}}return y.delete(r),y.delete(s),se}function Wy(r,s,c,f,m,y,S){switch(c){case Ft:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Gt:return!(r.byteLength!=s.byteLength||!y(new Mo(r),new Mo(s)));case He:case Qe:case Et:return wn(+r,+s);case Oe:return r.name==s.name&&r.message==s.message;case Ln:case bn:return r==s+"";case Je:var R=nc;case gt:var M=f&$;if(R||(R=Ao),r.size!=s.size&&!M)return!1;var z=S.get(r);if(z)return z==s;f|=w,S.set(r,s);var H=Ph(R(r),R(s),f,m,y,S);return S.delete(r),H;case Pn:if(Rs)return Rs.call(r)==Rs.call(s)}return!1}function Zy(r,s,c,f,m,y){var S=c&$,R=Sc(r),M=R.length,z=Sc(s),H=z.length;if(M!=H&&!S)return!1;for(var K=M;K--;){var se=R[K];if(!(S?se in s:Ge.call(s,se)))return!1}var he=y.get(r),ye=y.get(s);if(he&&ye)return he==s&&ye==r;var Ie=!0;y.set(r,s),y.set(s,r);for(var _e=S;++K<M;){se=R[K];var je=r[se],De=s[se];if(f)var en=S?f(De,je,se,s,r,y):f(je,De,se,r,s,y);if(!(en===n?je===De||m(je,De,c,f,y):en)){Ie=!1;break}_e||(_e=se=="constructor")}if(Ie&&!_e){var Ut=r.constructor,tn=s.constructor;Ut!=tn&&"constructor"in r&&"constructor"in s&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof tn=="function"&&tn instanceof tn)&&(Ie=!1)}return y.delete(r),y.delete(s),Ie}function rr(r){return Mc(Dh(r,n,Gh),r+"")}function Sc(r){return eh(r,wt,Rc)}function Tc(r){return eh(r,Zt,Mh)}var Ac=zo?function(r){return zo.get(r)}:Kc;function ta(r){for(var s=r.name+"",c=ji[s],f=Ge.call(ji,s)?c.length:0;f--;){var m=c[f],y=m.func;if(y==null||y==r)return m.name}return s}function zi(r){var s=Ge.call(b,"placeholder")?b:r;return s.placeholder}function ve(){var r=b.iteratee||Zc;return r=r===Zc?rh:r,arguments.length?r(arguments[0],arguments[1]):r}function na(r,s){var c=r.__data__;return e_(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Ic(r){for(var s=wt(r),c=s.length;c--;){var f=s[c],m=r[f];s[c]=[f,m,Uh(m)]}return s}function si(r,s){var c=rb(r,s);return nh(c)?c:n}function Vy(r){var s=Ge.call(r,ei),c=r[ei];try{r[ei]=n;var f=!0}catch{}var m=Lo.call(r);return f&&(s?r[ei]=c:delete r[ei]),m}var Rc=ic?function(r){return r==null?[]:(r=Ye(r),Cr(ic(r),function(s){return zf.call(r,s)}))}:Gc,Mh=ic?function(r){for(var s=[];r;)Sr(s,Rc(r)),r=Bo(r);return s}:Gc,Ot=Bt;(sc&&Ot(new sc(new ArrayBuffer(1)))!=Ft||Ts&&Ot(new Ts)!=Je||oc&&Ot(oc.resolve())!=$r||Bi&&Ot(new Bi)!=gt||As&&Ot(new As)!=we)&&(Ot=function(r){var s=Bt(r),c=s==_t?r.constructor:n,f=c?oi(c):"";if(f)switch(f){case Ab:return Ft;case Ib:return Je;case Rb:return $r;case Ob:return gt;case Lb:return we}return s});function Ky(r,s,c){for(var f=-1,m=c.length;++f<m;){var y=c[f],S=y.size;switch(y.type){case"drop":r+=S;break;case"dropRight":s-=S;break;case"take":s=Rt(s,r+S);break;case"takeRight":r=vt(r,s-S);break}}return{start:r,end:s}}function Gy(r){var s=r.match(t2);return s?s[1].split(n2):[]}function Bh(r,s,c){s=Or(s,r);for(var f=-1,m=s.length,y=!1;++f<m;){var S=jn(s[f]);if(!(y=r!=null&&c(r,S)))break;r=r[S]}return y||++f!=m?y:(m=r==null?0:r.length,!!m&&ca(m)&&ir(S,m)&&(Se(r)||ai(r)))}function Qy(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ge.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function jh(r){return typeof r.constructor=="function"&&!Us(r)?Ui(Bo(r)):{}}function Yy(r,s,c){var f=r.constructor;switch(s){case Gt:return kc(r);case He:case Qe:return new f(+r);case Ft:return Py(r,c);case kr:case Yn:case Jn:case Er:case Si:case Ti:case Ai:case jl:case Ul:return yh(r,c);case Je:return new f;case Et:case bn:return new f(r);case Ln:return My(r);case gt:return new f;case Pn:return By(r)}}function Jy(r,s){var c=s.length;if(!c)return r;var f=c-1;return s[f]=(c>1?"& ":"")+s[f],s=s.join(c>2?", ":" "),r.replace(e2,`{
/* [wrapped with `+s+`] */
`)}function Xy(r){return Se(r)||ai(r)||!!(Hf&&r&&r[Hf])}function ir(r,s){var c=typeof r;return s=s??ee,!!s&&(c=="number"||c!="symbol"&&d2.test(r))&&r>-1&&r%1==0&&r<s}function jt(r,s,c){if(!it(c))return!1;var f=typeof s;return(f=="number"?Wt(c)&&ir(s,c.length):f=="string"&&s in c)?wn(c[s],r):!1}function Oc(r,s){if(Se(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||Xt(r)?!0:Qv.test(r)||!Gv.test(r)||s!=null&&r in Ye(s)}function e_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Lc(r){var s=ta(r),c=b[s];if(typeof c!="function"||!(s in Ne.prototype))return!1;if(r===c)return!0;var f=Ac(c);return!!f&&r===f[0]}function t_(r){return!!Uf&&Uf in r}var n_=Ro?sr:Qc;function Us(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Mi;return r===c}function Uh(r){return r===r&&!it(r)}function Nh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Ye(c))}}function r_(r){var s=aa(r,function(f){return c.size===h&&c.clear(),f}),c=s.cache;return s}function i_(r,s){var c=r[1],f=s[1],m=c|f,y=m<(E|x|j),S=f==j&&c==O||f==j&&c==N&&r[7].length<=s[8]||f==(j|N)&&s[7].length<=s[8]&&c==O;if(!(y||S))return r;f&E&&(r[2]=s[2],m|=c&E?0:I);var R=s[3];if(R){var M=r[3];r[3]=M?wh(M,R,s[4]):R,r[4]=M?Tr(r[3],p):s[4]}return R=s[5],R&&(M=r[5],r[5]=M?xh(M,R,s[6]):R,r[6]=M?Tr(r[5],p):s[6]),R=s[7],R&&(r[7]=R),f&j&&(r[8]=r[8]==null?s[8]:Rt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function s_(r){var s=[];if(r!=null)for(var c in Ye(r))s.push(c);return s}function o_(r){return Lo.call(r)}function Dh(r,s,c){return s=vt(s===n?r.length-1:s,0),function(){for(var f=arguments,m=-1,y=vt(f.length-s,0),S=U(y);++m<y;)S[m]=f[s+m];m=-1;for(var R=U(s+1);++m<s;)R[m]=f[m];return R[s]=c(S),Qt(r,this,R)}}function zh(r,s){return s.length<2?r:ii(r,hn(s,0,-1))}function a_(r,s){for(var c=r.length,f=Rt(s.length,c),m=qt(r);f--;){var y=s[f];r[f]=ir(y,c)?m[y]:n}return r}function Pc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Hh=qh(dh),Ns=xb||function(r,s){return Ct.setTimeout(r,s)},Mc=qh(Iy);function Fh(r,s,c){var f=s+"";return Mc(r,Jy(f,l_(Gy(f),c)))}function qh(r){var s=0,c=0;return function(){var f=Cb(),m=J-(f-c);if(c=f,m>0){if(++s>=F)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ra(r,s){var c=-1,f=r.length,m=f-1;for(s=s===n?f:s;++c<s;){var y=vc(c,m),S=r[y];r[y]=r[c],r[c]=S}return r.length=s,r}var Wh=r_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Yv,function(c,f,m,y){s.push(m?y.replace(s2,"$1"):f||c)}),s});function jn(r){if(typeof r=="string"||Xt(r))return r;var s=r+"";return s=="0"&&1/r==-ue?"-0":s}function oi(r){if(r!=null){try{return Oo.call(r)}catch{}try{return r+""}catch{}}return""}function l_(r,s){return cn(ge,function(c){var f="_."+c[0];s&c[1]&&!So(r,f)&&r.push(f)}),r.sort()}function Zh(r){if(r instanceof Ne)return r.clone();var s=new dn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function c_(r,s,c){(c?jt(r,s,c):s===n)?s=1:s=vt(Te(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var m=0,y=0,S=U(No(f/s));m<f;)S[y++]=hn(r,m,m+=s);return S}function u_(r){for(var s=-1,c=r==null?0:r.length,f=0,m=[];++s<c;){var y=r[s];y&&(m[f++]=y)}return m}function d_(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),c=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Sr(Se(c)?qt(c):[c],St(s,1))}var f_=Le(function(r,s){return dt(r)?Ls(r,St(s,1,dt,!0)):[]}),h_=Le(function(r,s){var c=pn(s);return dt(c)&&(c=n),dt(r)?Ls(r,St(s,1,dt,!0),ve(c,2)):[]}),p_=Le(function(r,s){var c=pn(s);return dt(c)&&(c=n),dt(r)?Ls(r,St(s,1,dt,!0),n,c):[]});function g_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Te(s),hn(r,s<0?0:s,f)):[]}function m_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Te(s),s=f-s,hn(r,0,s<0?0:s)):[]}function v_(r,s){return r&&r.length?Go(r,ve(s,3),!0,!0):[]}function b_(r,s){return r&&r.length?Go(r,ve(s,3),!0):[]}function y_(r,s,c,f){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&jt(r,s,c)&&(c=0,f=m),dy(r,s,c,f)):[]}function Vh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Te(c);return m<0&&(m=vt(f+m,0)),To(r,ve(s,3),m)}function Kh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f-1;return c!==n&&(m=Te(c),m=c<0?vt(f+m,0):Rt(m,f-1)),To(r,ve(s,3),m,!0)}function Gh(r){var s=r==null?0:r.length;return s?St(r,1):[]}function __(r){var s=r==null?0:r.length;return s?St(r,ue):[]}function w_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Te(s),St(r,s)):[]}function x_(r){for(var s=-1,c=r==null?0:r.length,f={};++s<c;){var m=r[s];f[m[0]]=m[1]}return f}function Qh(r){return r&&r.length?r[0]:n}function $_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Te(c);return m<0&&(m=vt(f+m,0)),Ri(r,s,m)}function k_(r){var s=r==null?0:r.length;return s?hn(r,0,-1):[]}var E_=Le(function(r){var s=rt(r,xc);return s.length&&s[0]===r[0]?fc(s):[]}),C_=Le(function(r){var s=pn(r),c=rt(r,xc);return s===pn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?fc(c,ve(s,2)):[]}),S_=Le(function(r){var s=pn(r),c=rt(r,xc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?fc(c,n,s):[]});function T_(r,s){return r==null?"":kb.call(r,s)}function pn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function A_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f;return c!==n&&(m=Te(c),m=m<0?vt(f+m,0):Rt(m,f-1)),s===s?lb(r,s,m):To(r,If,m,!0)}function I_(r,s){return r&&r.length?ah(r,Te(s)):n}var R_=Le(Yh);function Yh(r,s){return r&&r.length&&s&&s.length?mc(r,s):r}function O_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,ve(c,2)):r}function L_(r,s,c){return r&&r.length&&s&&s.length?mc(r,s,n,c):r}var P_=rr(function(r,s){var c=r==null?0:r.length,f=lc(r,s);return uh(r,rt(s,function(m){return ir(m,c)?+m:m}).sort(_h)),f});function M_(r,s){var c=[];if(!(r&&r.length))return c;var f=-1,m=[],y=r.length;for(s=ve(s,3);++f<y;){var S=r[f];s(S,f,r)&&(c.push(S),m.push(f))}return uh(r,m),c}function Bc(r){return r==null?r:Tb.call(r)}function B_(r,s,c){var f=r==null?0:r.length;return f?(c&&typeof c!="number"&&jt(r,s,c)?(s=0,c=f):(s=s==null?0:Te(s),c=c===n?f:Te(c)),hn(r,s,c)):[]}function j_(r,s){return Ko(r,s)}function U_(r,s,c){return yc(r,s,ve(c,2))}function N_(r,s){var c=r==null?0:r.length;if(c){var f=Ko(r,s);if(f<c&&wn(r[f],s))return f}return-1}function D_(r,s){return Ko(r,s,!0)}function z_(r,s,c){return yc(r,s,ve(c,2),!0)}function H_(r,s){var c=r==null?0:r.length;if(c){var f=Ko(r,s,!0)-1;if(wn(r[f],s))return f}return-1}function F_(r){return r&&r.length?fh(r):[]}function q_(r,s){return r&&r.length?fh(r,ve(s,2)):[]}function W_(r){var s=r==null?0:r.length;return s?hn(r,1,s):[]}function Z_(r,s,c){return r&&r.length?(s=c||s===n?1:Te(s),hn(r,0,s<0?0:s)):[]}function V_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Te(s),s=f-s,hn(r,s<0?0:s,f)):[]}function K_(r,s){return r&&r.length?Go(r,ve(s,3),!1,!0):[]}function G_(r,s){return r&&r.length?Go(r,ve(s,3)):[]}var Q_=Le(function(r){return Rr(St(r,1,dt,!0))}),Y_=Le(function(r){var s=pn(r);return dt(s)&&(s=n),Rr(St(r,1,dt,!0),ve(s,2))}),J_=Le(function(r){var s=pn(r);return s=typeof s=="function"?s:n,Rr(St(r,1,dt,!0),n,s)});function X_(r){return r&&r.length?Rr(r):[]}function ew(r,s){return r&&r.length?Rr(r,ve(s,2)):[]}function tw(r,s){return s=typeof s=="function"?s:n,r&&r.length?Rr(r,n,s):[]}function jc(r){if(!(r&&r.length))return[];var s=0;return r=Cr(r,function(c){if(dt(c))return s=vt(c.length,s),!0}),ec(s,function(c){return rt(r,Yl(c))})}function Jh(r,s){if(!(r&&r.length))return[];var c=jc(r);return s==null?c:rt(c,function(f){return Qt(s,n,f)})}var nw=Le(function(r,s){return dt(r)?Ls(r,s):[]}),rw=Le(function(r){return wc(Cr(r,dt))}),iw=Le(function(r){var s=pn(r);return dt(s)&&(s=n),wc(Cr(r,dt),ve(s,2))}),sw=Le(function(r){var s=pn(r);return s=typeof s=="function"?s:n,wc(Cr(r,dt),n,s)}),ow=Le(jc);function aw(r,s){return mh(r||[],s||[],Os)}function lw(r,s){return mh(r||[],s||[],Bs)}var cw=Le(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Jh(r,c)});function Xh(r){var s=b(r);return s.__chain__=!0,s}function uw(r,s){return s(r),r}function ia(r,s){return s(r)}var dw=rr(function(r){var s=r.length,c=s?r[0]:0,f=this.__wrapped__,m=function(y){return lc(y,r)};return s>1||this.__actions__.length||!(f instanceof Ne)||!ir(c)?this.thru(m):(f=f.slice(c,+c+(s?1:0)),f.__actions__.push({func:ia,args:[m],thisArg:n}),new dn(f,this.__chain__).thru(function(y){return s&&!y.length&&y.push(n),y}))});function fw(){return Xh(this)}function hw(){return new dn(this.value(),this.__chain__)}function pw(){this.__values__===n&&(this.__values__=hp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function gw(){return this}function mw(r){for(var s,c=this;c instanceof Fo;){var f=Zh(c);f.__index__=0,f.__values__=n,s?m.__wrapped__=f:s=f;var m=f;c=c.__wrapped__}return m.__wrapped__=r,s}function vw(){var r=this.__wrapped__;if(r instanceof Ne){var s=r;return this.__actions__.length&&(s=new Ne(this)),s=s.reverse(),s.__actions__.push({func:ia,args:[Bc],thisArg:n}),new dn(s,this.__chain__)}return this.thru(Bc)}function bw(){return gh(this.__wrapped__,this.__actions__)}var yw=Qo(function(r,s,c){Ge.call(r,c)?++r[c]:tr(r,c,1)});function _w(r,s,c){var f=Se(r)?Tf:uy;return c&&jt(r,s,c)&&(s=n),f(r,ve(s,3))}function ww(r,s){var c=Se(r)?Cr:Jf;return c(r,ve(s,3))}var xw=Ch(Vh),$w=Ch(Kh);function kw(r,s){return St(sa(r,s),1)}function Ew(r,s){return St(sa(r,s),ue)}function Cw(r,s,c){return c=c===n?1:Te(c),St(sa(r,s),c)}function ep(r,s){var c=Se(r)?cn:Ir;return c(r,ve(s,3))}function tp(r,s){var c=Se(r)?W2:Yf;return c(r,ve(s,3))}var Sw=Qo(function(r,s,c){Ge.call(r,c)?r[c].push(s):tr(r,c,[s])});function Tw(r,s,c,f){r=Wt(r)?r:Fi(r),c=c&&!f?Te(c):0;var m=r.length;return c<0&&(c=vt(m+c,0)),ua(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Ri(r,s,c)>-1}var Aw=Le(function(r,s,c){var f=-1,m=typeof s=="function",y=Wt(r)?U(r.length):[];return Ir(r,function(S){y[++f]=m?Qt(s,S,c):Ps(S,s,c)}),y}),Iw=Qo(function(r,s,c){tr(r,c,s)});function sa(r,s){var c=Se(r)?rt:ih;return c(r,ve(s,3))}function Rw(r,s,c,f){return r==null?[]:(Se(s)||(s=s==null?[]:[s]),c=f?n:c,Se(c)||(c=c==null?[]:[c]),lh(r,s,c))}var Ow=Qo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function Lw(r,s,c){var f=Se(r)?Gl:Of,m=arguments.length<3;return f(r,ve(s,4),c,m,Ir)}function Pw(r,s,c){var f=Se(r)?Z2:Of,m=arguments.length<3;return f(r,ve(s,4),c,m,Yf)}function Mw(r,s){var c=Se(r)?Cr:Jf;return c(r,la(ve(s,3)))}function Bw(r){var s=Se(r)?Vf:Ty;return s(r)}function jw(r,s,c){(c?jt(r,s,c):s===n)?s=1:s=Te(s);var f=Se(r)?sy:Ay;return f(r,s)}function Uw(r){var s=Se(r)?oy:Ry;return s(r)}function Nw(r){if(r==null)return 0;if(Wt(r))return ua(r)?Li(r):r.length;var s=Ot(r);return s==Je||s==gt?r.size:pc(r).length}function Dw(r,s,c){var f=Se(r)?Ql:Oy;return c&&jt(r,s,c)&&(s=n),f(r,ve(s,3))}var zw=Le(function(r,s){if(r==null)return[];var c=s.length;return c>1&&jt(r,s[0],s[1])?s=[]:c>2&&jt(s[0],s[1],s[2])&&(s=[s[0]]),lh(r,St(s,1),[])}),oa=wb||function(){return Ct.Date.now()};function Hw(r,s){if(typeof s!="function")throw new un(l);return r=Te(r),function(){if(--r<1)return s.apply(this,arguments)}}function np(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,nr(r,j,n,n,n,n,s)}function rp(r,s){var c;if(typeof s!="function")throw new un(l);return r=Te(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Uc=Le(function(r,s,c){var f=E;if(c.length){var m=Tr(c,zi(Uc));f|=C}return nr(r,f,s,c,m)}),ip=Le(function(r,s,c){var f=E|x;if(c.length){var m=Tr(c,zi(ip));f|=C}return nr(s,f,r,c,m)});function sp(r,s,c){s=c?n:s;var f=nr(r,O,n,n,n,n,n,s);return f.placeholder=sp.placeholder,f}function op(r,s,c){s=c?n:s;var f=nr(r,A,n,n,n,n,n,s);return f.placeholder=op.placeholder,f}function ap(r,s,c){var f,m,y,S,R,M,z=0,H=!1,K=!1,se=!0;if(typeof r!="function")throw new un(l);s=gn(s)||0,it(c)&&(H=!!c.leading,K="maxWait"in c,y=K?vt(gn(c.maxWait)||0,s):y,se="trailing"in c?!!c.trailing:se);function he(ft){var xn=f,ar=m;return f=m=n,z=ft,S=r.apply(ar,xn),S}function ye(ft){return z=ft,R=Ns(je,s),H?he(ft):S}function Ie(ft){var xn=ft-M,ar=ft-z,Cp=s-xn;return K?Rt(Cp,y-ar):Cp}function _e(ft){var xn=ft-M,ar=ft-z;return M===n||xn>=s||xn<0||K&&ar>=y}function je(){var ft=oa();if(_e(ft))return De(ft);R=Ns(je,Ie(ft))}function De(ft){return R=n,se&&f?he(ft):(f=m=n,S)}function en(){R!==n&&vh(R),z=0,f=M=m=R=n}function Ut(){return R===n?S:De(oa())}function tn(){var ft=oa(),xn=_e(ft);if(f=arguments,m=this,M=ft,xn){if(R===n)return ye(M);if(K)return vh(R),R=Ns(je,s),he(M)}return R===n&&(R=Ns(je,s)),S}return tn.cancel=en,tn.flush=Ut,tn}var Fw=Le(function(r,s){return Qf(r,1,s)}),qw=Le(function(r,s,c){return Qf(r,gn(s)||0,c)});function Ww(r){return nr(r,ne)}function aa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new un(l);var c=function(){var f=arguments,m=s?s.apply(this,f):f[0],y=c.cache;if(y.has(m))return y.get(m);var S=r.apply(this,f);return c.cache=y.set(m,S)||y,S};return c.cache=new(aa.Cache||er),c}aa.Cache=er;function la(r){if(typeof r!="function")throw new un(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Zw(r){return rp(2,r)}var Vw=Ly(function(r,s){s=s.length==1&&Se(s[0])?rt(s[0],Yt(ve())):rt(St(s,1),Yt(ve()));var c=s.length;return Le(function(f){for(var m=-1,y=Rt(f.length,c);++m<y;)f[m]=s[m].call(this,f[m]);return Qt(r,this,f)})}),Nc=Le(function(r,s){var c=Tr(s,zi(Nc));return nr(r,C,n,s,c)}),lp=Le(function(r,s){var c=Tr(s,zi(lp));return nr(r,T,n,s,c)}),Kw=rr(function(r,s){return nr(r,N,n,n,n,s)});function Gw(r,s){if(typeof r!="function")throw new un(l);return s=s===n?s:Te(s),Le(r,s)}function Qw(r,s){if(typeof r!="function")throw new un(l);return s=s==null?0:vt(Te(s),0),Le(function(c){var f=c[s],m=Lr(c,0,s);return f&&Sr(m,f),Qt(r,this,m)})}function Yw(r,s,c){var f=!0,m=!0;if(typeof r!="function")throw new un(l);return it(c)&&(f="leading"in c?!!c.leading:f,m="trailing"in c?!!c.trailing:m),ap(r,s,{leading:f,maxWait:s,trailing:m})}function Jw(r){return np(r,1)}function Xw(r,s){return Nc($c(s),r)}function e3(){if(!arguments.length)return[];var r=arguments[0];return Se(r)?r:[r]}function t3(r){return fn(r,k)}function n3(r,s){return s=typeof s=="function"?s:n,fn(r,k,s)}function r3(r){return fn(r,g|k)}function i3(r,s){return s=typeof s=="function"?s:n,fn(r,g|k,s)}function s3(r,s){return s==null||Gf(r,s,wt(s))}function wn(r,s){return r===s||r!==r&&s!==s}var o3=ea(dc),a3=ea(function(r,s){return r>=s}),ai=th(function(){return arguments}())?th:function(r){return lt(r)&&Ge.call(r,"callee")&&!zf.call(r,"callee")},Se=U.isArray,l3=xf?Yt(xf):my;function Wt(r){return r!=null&&ca(r.length)&&!sr(r)}function dt(r){return lt(r)&&Wt(r)}function c3(r){return r===!0||r===!1||lt(r)&&Bt(r)==He}var Pr=$b||Qc,u3=$f?Yt($f):vy;function d3(r){return lt(r)&&r.nodeType===1&&!Ds(r)}function f3(r){if(r==null)return!0;if(Wt(r)&&(Se(r)||typeof r=="string"||typeof r.splice=="function"||Pr(r)||Hi(r)||ai(r)))return!r.length;var s=Ot(r);if(s==Je||s==gt)return!r.size;if(Us(r))return!pc(r).length;for(var c in r)if(Ge.call(r,c))return!1;return!0}function h3(r,s){return Ms(r,s)}function p3(r,s,c){c=typeof c=="function"?c:n;var f=c?c(r,s):n;return f===n?Ms(r,s,n,c):!!f}function Dc(r){if(!lt(r))return!1;var s=Bt(r);return s==Oe||s==yt||typeof r.message=="string"&&typeof r.name=="string"&&!Ds(r)}function g3(r){return typeof r=="number"&&Ff(r)}function sr(r){if(!it(r))return!1;var s=Bt(r);return s==qe||s==kt||s==Q||s==Ei}function cp(r){return typeof r=="number"&&r==Te(r)}function ca(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ee}function it(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function lt(r){return r!=null&&typeof r=="object"}var up=kf?Yt(kf):yy;function m3(r,s){return r===s||hc(r,s,Ic(s))}function v3(r,s,c){return c=typeof c=="function"?c:n,hc(r,s,Ic(s),c)}function b3(r){return dp(r)&&r!=+r}function y3(r){if(n_(r))throw new Ee(a);return nh(r)}function _3(r){return r===null}function w3(r){return r==null}function dp(r){return typeof r=="number"||lt(r)&&Bt(r)==Et}function Ds(r){if(!lt(r)||Bt(r)!=_t)return!1;var s=Bo(r);if(s===null)return!0;var c=Ge.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Oo.call(c)==vb}var zc=Ef?Yt(Ef):_y;function x3(r){return cp(r)&&r>=-ee&&r<=ee}var fp=Cf?Yt(Cf):wy;function ua(r){return typeof r=="string"||!Se(r)&&lt(r)&&Bt(r)==bn}function Xt(r){return typeof r=="symbol"||lt(r)&&Bt(r)==Pn}var Hi=Sf?Yt(Sf):xy;function $3(r){return r===n}function k3(r){return lt(r)&&Ot(r)==we}function E3(r){return lt(r)&&Bt(r)==Qn}var C3=ea(gc),S3=ea(function(r,s){return r<=s});function hp(r){if(!r)return[];if(Wt(r))return ua(r)?yn(r):qt(r);if(Ss&&r[Ss])return sb(r[Ss]());var s=Ot(r),c=s==Je?nc:s==gt?Ao:Fi;return c(r)}function or(r){if(!r)return r===0?r:0;if(r=gn(r),r===ue||r===-ue){var s=r<0?-1:1;return s*pe}return r===r?r:0}function Te(r){var s=or(r),c=s%1;return s===s?c?s-c:s:0}function pp(r){return r?ri(Te(r),0,re):0}function gn(r){if(typeof r=="number")return r;if(Xt(r))return Z;if(it(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=it(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Lf(r);var c=l2.test(r);return c||u2.test(r)?H2(r.slice(2),c?2:8):a2.test(r)?Z:+r}function gp(r){return Bn(r,Zt(r))}function T3(r){return r?ri(Te(r),-ee,ee):r===0?r:0}function Ke(r){return r==null?"":Jt(r)}var A3=Ni(function(r,s){if(Us(s)||Wt(s)){Bn(s,wt(s),r);return}for(var c in s)Ge.call(s,c)&&Os(r,c,s[c])}),mp=Ni(function(r,s){Bn(s,Zt(s),r)}),da=Ni(function(r,s,c,f){Bn(s,Zt(s),r,f)}),I3=Ni(function(r,s,c,f){Bn(s,wt(s),r,f)}),R3=rr(lc);function O3(r,s){var c=Ui(r);return s==null?c:Kf(c,s)}var L3=Le(function(r,s){r=Ye(r);var c=-1,f=s.length,m=f>2?s[2]:n;for(m&&jt(s[0],s[1],m)&&(f=1);++c<f;)for(var y=s[c],S=Zt(y),R=-1,M=S.length;++R<M;){var z=S[R],H=r[z];(H===n||wn(H,Mi[z])&&!Ge.call(r,z))&&(r[z]=y[z])}return r}),P3=Le(function(r){return r.push(n,Lh),Qt(vp,n,r)});function M3(r,s){return Af(r,ve(s,3),Mn)}function B3(r,s){return Af(r,ve(s,3),uc)}function j3(r,s){return r==null?r:cc(r,ve(s,3),Zt)}function U3(r,s){return r==null?r:Xf(r,ve(s,3),Zt)}function N3(r,s){return r&&Mn(r,ve(s,3))}function D3(r,s){return r&&uc(r,ve(s,3))}function z3(r){return r==null?[]:Zo(r,wt(r))}function H3(r){return r==null?[]:Zo(r,Zt(r))}function Hc(r,s,c){var f=r==null?n:ii(r,s);return f===n?c:f}function F3(r,s){return r!=null&&Bh(r,s,fy)}function Fc(r,s){return r!=null&&Bh(r,s,hy)}var q3=Th(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),r[s]=c},Wc(Vt)),W3=Th(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),Ge.call(r,s)?r[s].push(c):r[s]=[c]},ve),Z3=Le(Ps);function wt(r){return Wt(r)?Zf(r):pc(r)}function Zt(r){return Wt(r)?Zf(r,!0):$y(r)}function V3(r,s){var c={};return s=ve(s,3),Mn(r,function(f,m,y){tr(c,s(f,m,y),f)}),c}function K3(r,s){var c={};return s=ve(s,3),Mn(r,function(f,m,y){tr(c,m,s(f,m,y))}),c}var G3=Ni(function(r,s,c){Vo(r,s,c)}),vp=Ni(function(r,s,c,f){Vo(r,s,c,f)}),Q3=rr(function(r,s){var c={};if(r==null)return c;var f=!1;s=rt(s,function(y){return y=Or(y,r),f||(f=y.length>1),y}),Bn(r,Tc(r),c),f&&(c=fn(c,g|v|k,qy));for(var m=s.length;m--;)_c(c,s[m]);return c});function Y3(r,s){return bp(r,la(ve(s)))}var J3=rr(function(r,s){return r==null?{}:Ey(r,s)});function bp(r,s){if(r==null)return{};var c=rt(Tc(r),function(f){return[f]});return s=ve(s),ch(r,c,function(f,m){return s(f,m[0])})}function X3(r,s,c){s=Or(s,r);var f=-1,m=s.length;for(m||(m=1,r=n);++f<m;){var y=r==null?n:r[jn(s[f])];y===n&&(f=m,y=c),r=sr(y)?y.call(r):y}return r}function e4(r,s,c){return r==null?r:Bs(r,s,c)}function t4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:Bs(r,s,c,f)}var yp=Rh(wt),_p=Rh(Zt);function n4(r,s,c){var f=Se(r),m=f||Pr(r)||Hi(r);if(s=ve(s,4),c==null){var y=r&&r.constructor;m?c=f?new y:[]:it(r)?c=sr(y)?Ui(Bo(r)):{}:c={}}return(m?cn:Mn)(r,function(S,R,M){return s(c,S,R,M)}),c}function r4(r,s){return r==null?!0:_c(r,s)}function i4(r,s,c){return r==null?r:ph(r,s,$c(c))}function s4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:ph(r,s,$c(c),f)}function Fi(r){return r==null?[]:tc(r,wt(r))}function o4(r){return r==null?[]:tc(r,Zt(r))}function a4(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=gn(c),c=c===c?c:0),s!==n&&(s=gn(s),s=s===s?s:0),ri(gn(r),s,c)}function l4(r,s,c){return s=or(s),c===n?(c=s,s=0):c=or(c),r=gn(r),py(r,s,c)}function c4(r,s,c){if(c&&typeof c!="boolean"&&jt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=or(r),s===n?(s=r,r=0):s=or(s)),r>s){var f=r;r=s,s=f}if(c||r%1||s%1){var m=qf();return Rt(r+m*(s-r+z2("1e-"+((m+"").length-1))),s)}return vc(r,s)}var u4=Di(function(r,s,c){return s=s.toLowerCase(),r+(c?wp(s):s)});function wp(r){return qc(Ke(r).toLowerCase())}function xp(r){return r=Ke(r),r&&r.replace(f2,eb).replace(R2,"")}function d4(r,s,c){r=Ke(r),s=Jt(s);var f=r.length;c=c===n?f:ri(Te(c),0,f);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function f4(r){return r=Ke(r),r&&Zv.test(r)?r.replace(Jd,tb):r}function h4(r){return r=Ke(r),r&&Jv.test(r)?r.replace(Nl,"\\$&"):r}var p4=Di(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),g4=Di(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),m4=Eh("toLowerCase");function v4(r,s,c){r=Ke(r),s=Te(s);var f=s?Li(r):0;if(!s||f>=s)return r;var m=(s-f)/2;return Xo(Do(m),c)+r+Xo(No(m),c)}function b4(r,s,c){r=Ke(r),s=Te(s);var f=s?Li(r):0;return s&&f<s?r+Xo(s-f,c):r}function y4(r,s,c){r=Ke(r),s=Te(s);var f=s?Li(r):0;return s&&f<s?Xo(s-f,c)+r:r}function _4(r,s,c){return c||s==null?s=0:s&&(s=+s),Sb(Ke(r).replace(Dl,""),s||0)}function w4(r,s,c){return(c?jt(r,s,c):s===n)?s=1:s=Te(s),bc(Ke(r),s)}function x4(){var r=arguments,s=Ke(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var $4=Di(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function k4(r,s,c){return c&&typeof c!="number"&&jt(r,s,c)&&(s=c=n),c=c===n?re:c>>>0,c?(r=Ke(r),r&&(typeof s=="string"||s!=null&&!zc(s))&&(s=Jt(s),!s&&Oi(r))?Lr(yn(r),0,c):r.split(s,c)):[]}var E4=Di(function(r,s,c){return r+(c?" ":"")+qc(s)});function C4(r,s,c){return r=Ke(r),c=c==null?0:ri(Te(c),0,r.length),s=Jt(s),r.slice(c,c+s.length)==s}function S4(r,s,c){var f=b.templateSettings;c&&jt(r,s,c)&&(s=n),r=Ke(r),s=da({},s,f,Oh);var m=da({},s.imports,f.imports,Oh),y=wt(m),S=tc(m,y),R,M,z=0,H=s.interpolate||ko,K="__p += '",se=rc((s.escape||ko).source+"|"+H.source+"|"+(H===Xd?o2:ko).source+"|"+(s.evaluate||ko).source+"|$","g"),he="//# sourceURL="+(Ge.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++B2+"]")+`
`;r.replace(se,function(_e,je,De,en,Ut,tn){return De||(De=en),K+=r.slice(z,tn).replace(h2,nb),je&&(R=!0,K+=`' +
__e(`+je+`) +
'`),Ut&&(M=!0,K+=`';
`+Ut+`;
__p += '`),De&&(K+=`' +
((__t = (`+De+`)) == null ? '' : __t) +
'`),z=tn+_e.length,_e}),K+=`';
`;var ye=Ge.call(s,"variable")&&s.variable;if(!ye)K=`with (obj) {
`+K+`
}
`;else if(i2.test(ye))throw new Ee(u);K=(M?K.replace(Hv,""):K).replace(Fv,"$1").replace(qv,"$1;"),K="function("+(ye||"obj")+`) {
`+(ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var Ie=kp(function(){return Ze(y,he+"return "+K).apply(n,S)});if(Ie.source=K,Dc(Ie))throw Ie;return Ie}function T4(r){return Ke(r).toLowerCase()}function A4(r){return Ke(r).toUpperCase()}function I4(r,s,c){if(r=Ke(r),r&&(c||s===n))return Lf(r);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=yn(s),y=Pf(f,m),S=Mf(f,m)+1;return Lr(f,y,S).join("")}function R4(r,s,c){if(r=Ke(r),r&&(c||s===n))return r.slice(0,jf(r)+1);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Mf(f,yn(s))+1;return Lr(f,0,m).join("")}function O4(r,s,c){if(r=Ke(r),r&&(c||s===n))return r.replace(Dl,"");if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Pf(f,yn(s));return Lr(f,m).join("")}function L4(r,s){var c=V,f=Y;if(it(s)){var m="separator"in s?s.separator:m;c="length"in s?Te(s.length):c,f="omission"in s?Jt(s.omission):f}r=Ke(r);var y=r.length;if(Oi(r)){var S=yn(r);y=S.length}if(c>=y)return r;var R=c-Li(f);if(R<1)return f;var M=S?Lr(S,0,R).join(""):r.slice(0,R);if(m===n)return M+f;if(S&&(R+=M.length-R),zc(m)){if(r.slice(R).search(m)){var z,H=M;for(m.global||(m=rc(m.source,Ke(ef.exec(m))+"g")),m.lastIndex=0;z=m.exec(H);)var K=z.index;M=M.slice(0,K===n?R:K)}}else if(r.indexOf(Jt(m),R)!=R){var se=M.lastIndexOf(m);se>-1&&(M=M.slice(0,se))}return M+f}function P4(r){return r=Ke(r),r&&Wv.test(r)?r.replace(Yd,cb):r}var M4=Di(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),qc=Eh("toUpperCase");function $p(r,s,c){return r=Ke(r),s=c?n:s,s===n?ib(r)?fb(r):G2(r):r.match(s)||[]}var kp=Le(function(r,s){try{return Qt(r,n,s)}catch(c){return Dc(c)?c:new Ee(c)}}),B4=rr(function(r,s){return cn(s,function(c){c=jn(c),tr(r,c,Uc(r[c],r))}),r});function j4(r){var s=r==null?0:r.length,c=ve();return r=s?rt(r,function(f){if(typeof f[1]!="function")throw new un(l);return[c(f[0]),f[1]]}):[],Le(function(f){for(var m=-1;++m<s;){var y=r[m];if(Qt(y[0],this,f))return Qt(y[1],this,f)}})}function U4(r){return cy(fn(r,g))}function Wc(r){return function(){return r}}function N4(r,s){return r==null||r!==r?s:r}var D4=Sh(),z4=Sh(!0);function Vt(r){return r}function Zc(r){return rh(typeof r=="function"?r:fn(r,g))}function H4(r){return sh(fn(r,g))}function F4(r,s){return oh(r,fn(s,g))}var q4=Le(function(r,s){return function(c){return Ps(c,r,s)}}),W4=Le(function(r,s){return function(c){return Ps(r,c,s)}});function Vc(r,s,c){var f=wt(s),m=Zo(s,f);c==null&&!(it(s)&&(m.length||!f.length))&&(c=s,s=r,r=this,m=Zo(s,wt(s)));var y=!(it(c)&&"chain"in c)||!!c.chain,S=sr(r);return cn(m,function(R){var M=s[R];r[R]=M,S&&(r.prototype[R]=function(){var z=this.__chain__;if(y||z){var H=r(this.__wrapped__),K=H.__actions__=qt(this.__actions__);return K.push({func:M,args:arguments,thisArg:r}),H.__chain__=z,H}return M.apply(r,Sr([this.value()],arguments))})}),r}function Z4(){return Ct._===this&&(Ct._=bb),this}function Kc(){}function V4(r){return r=Te(r),Le(function(s){return ah(s,r)})}var K4=Ec(rt),G4=Ec(Tf),Q4=Ec(Ql);function Ep(r){return Oc(r)?Yl(jn(r)):Cy(r)}function Y4(r){return function(s){return r==null?n:ii(r,s)}}var J4=Ah(),X4=Ah(!0);function Gc(){return[]}function Qc(){return!1}function ex(){return{}}function tx(){return""}function nx(){return!0}function rx(r,s){if(r=Te(r),r<1||r>ee)return[];var c=re,f=Rt(r,re);s=ve(s),r-=re;for(var m=ec(f,s);++c<r;)s(c);return m}function ix(r){return Se(r)?rt(r,jn):Xt(r)?[r]:qt(Wh(Ke(r)))}function sx(r){var s=++mb;return Ke(r)+s}var ox=Jo(function(r,s){return r+s},0),ax=Cc("ceil"),lx=Jo(function(r,s){return r/s},1),cx=Cc("floor");function ux(r){return r&&r.length?Wo(r,Vt,dc):n}function dx(r,s){return r&&r.length?Wo(r,ve(s,2),dc):n}function fx(r){return Rf(r,Vt)}function hx(r,s){return Rf(r,ve(s,2))}function px(r){return r&&r.length?Wo(r,Vt,gc):n}function gx(r,s){return r&&r.length?Wo(r,ve(s,2),gc):n}var mx=Jo(function(r,s){return r*s},1),vx=Cc("round"),bx=Jo(function(r,s){return r-s},0);function yx(r){return r&&r.length?Xl(r,Vt):0}function _x(r,s){return r&&r.length?Xl(r,ve(s,2)):0}return b.after=Hw,b.ary=np,b.assign=A3,b.assignIn=mp,b.assignInWith=da,b.assignWith=I3,b.at=R3,b.before=rp,b.bind=Uc,b.bindAll=B4,b.bindKey=ip,b.castArray=e3,b.chain=Xh,b.chunk=c_,b.compact=u_,b.concat=d_,b.cond=j4,b.conforms=U4,b.constant=Wc,b.countBy=yw,b.create=O3,b.curry=sp,b.curryRight=op,b.debounce=ap,b.defaults=L3,b.defaultsDeep=P3,b.defer=Fw,b.delay=qw,b.difference=f_,b.differenceBy=h_,b.differenceWith=p_,b.drop=g_,b.dropRight=m_,b.dropRightWhile=v_,b.dropWhile=b_,b.fill=y_,b.filter=ww,b.flatMap=kw,b.flatMapDeep=Ew,b.flatMapDepth=Cw,b.flatten=Gh,b.flattenDeep=__,b.flattenDepth=w_,b.flip=Ww,b.flow=D4,b.flowRight=z4,b.fromPairs=x_,b.functions=z3,b.functionsIn=H3,b.groupBy=Sw,b.initial=k_,b.intersection=E_,b.intersectionBy=C_,b.intersectionWith=S_,b.invert=q3,b.invertBy=W3,b.invokeMap=Aw,b.iteratee=Zc,b.keyBy=Iw,b.keys=wt,b.keysIn=Zt,b.map=sa,b.mapKeys=V3,b.mapValues=K3,b.matches=H4,b.matchesProperty=F4,b.memoize=aa,b.merge=G3,b.mergeWith=vp,b.method=q4,b.methodOf=W4,b.mixin=Vc,b.negate=la,b.nthArg=V4,b.omit=Q3,b.omitBy=Y3,b.once=Zw,b.orderBy=Rw,b.over=K4,b.overArgs=Vw,b.overEvery=G4,b.overSome=Q4,b.partial=Nc,b.partialRight=lp,b.partition=Ow,b.pick=J3,b.pickBy=bp,b.property=Ep,b.propertyOf=Y4,b.pull=R_,b.pullAll=Yh,b.pullAllBy=O_,b.pullAllWith=L_,b.pullAt=P_,b.range=J4,b.rangeRight=X4,b.rearg=Kw,b.reject=Mw,b.remove=M_,b.rest=Gw,b.reverse=Bc,b.sampleSize=jw,b.set=e4,b.setWith=t4,b.shuffle=Uw,b.slice=B_,b.sortBy=zw,b.sortedUniq=F_,b.sortedUniqBy=q_,b.split=k4,b.spread=Qw,b.tail=W_,b.take=Z_,b.takeRight=V_,b.takeRightWhile=K_,b.takeWhile=G_,b.tap=uw,b.throttle=Yw,b.thru=ia,b.toArray=hp,b.toPairs=yp,b.toPairsIn=_p,b.toPath=ix,b.toPlainObject=gp,b.transform=n4,b.unary=Jw,b.union=Q_,b.unionBy=Y_,b.unionWith=J_,b.uniq=X_,b.uniqBy=ew,b.uniqWith=tw,b.unset=r4,b.unzip=jc,b.unzipWith=Jh,b.update=i4,b.updateWith=s4,b.values=Fi,b.valuesIn=o4,b.without=nw,b.words=$p,b.wrap=Xw,b.xor=rw,b.xorBy=iw,b.xorWith=sw,b.zip=ow,b.zipObject=aw,b.zipObjectDeep=lw,b.zipWith=cw,b.entries=yp,b.entriesIn=_p,b.extend=mp,b.extendWith=da,Vc(b,b),b.add=ox,b.attempt=kp,b.camelCase=u4,b.capitalize=wp,b.ceil=ax,b.clamp=a4,b.clone=t3,b.cloneDeep=r3,b.cloneDeepWith=i3,b.cloneWith=n3,b.conformsTo=s3,b.deburr=xp,b.defaultTo=N4,b.divide=lx,b.endsWith=d4,b.eq=wn,b.escape=f4,b.escapeRegExp=h4,b.every=_w,b.find=xw,b.findIndex=Vh,b.findKey=M3,b.findLast=$w,b.findLastIndex=Kh,b.findLastKey=B3,b.floor=cx,b.forEach=ep,b.forEachRight=tp,b.forIn=j3,b.forInRight=U3,b.forOwn=N3,b.forOwnRight=D3,b.get=Hc,b.gt=o3,b.gte=a3,b.has=F3,b.hasIn=Fc,b.head=Qh,b.identity=Vt,b.includes=Tw,b.indexOf=$_,b.inRange=l4,b.invoke=Z3,b.isArguments=ai,b.isArray=Se,b.isArrayBuffer=l3,b.isArrayLike=Wt,b.isArrayLikeObject=dt,b.isBoolean=c3,b.isBuffer=Pr,b.isDate=u3,b.isElement=d3,b.isEmpty=f3,b.isEqual=h3,b.isEqualWith=p3,b.isError=Dc,b.isFinite=g3,b.isFunction=sr,b.isInteger=cp,b.isLength=ca,b.isMap=up,b.isMatch=m3,b.isMatchWith=v3,b.isNaN=b3,b.isNative=y3,b.isNil=w3,b.isNull=_3,b.isNumber=dp,b.isObject=it,b.isObjectLike=lt,b.isPlainObject=Ds,b.isRegExp=zc,b.isSafeInteger=x3,b.isSet=fp,b.isString=ua,b.isSymbol=Xt,b.isTypedArray=Hi,b.isUndefined=$3,b.isWeakMap=k3,b.isWeakSet=E3,b.join=T_,b.kebabCase=p4,b.last=pn,b.lastIndexOf=A_,b.lowerCase=g4,b.lowerFirst=m4,b.lt=C3,b.lte=S3,b.max=ux,b.maxBy=dx,b.mean=fx,b.meanBy=hx,b.min=px,b.minBy=gx,b.stubArray=Gc,b.stubFalse=Qc,b.stubObject=ex,b.stubString=tx,b.stubTrue=nx,b.multiply=mx,b.nth=I_,b.noConflict=Z4,b.noop=Kc,b.now=oa,b.pad=v4,b.padEnd=b4,b.padStart=y4,b.parseInt=_4,b.random=c4,b.reduce=Lw,b.reduceRight=Pw,b.repeat=w4,b.replace=x4,b.result=X3,b.round=vx,b.runInContext=P,b.sample=Bw,b.size=Nw,b.snakeCase=$4,b.some=Dw,b.sortedIndex=j_,b.sortedIndexBy=U_,b.sortedIndexOf=N_,b.sortedLastIndex=D_,b.sortedLastIndexBy=z_,b.sortedLastIndexOf=H_,b.startCase=E4,b.startsWith=C4,b.subtract=bx,b.sum=yx,b.sumBy=_x,b.template=S4,b.times=rx,b.toFinite=or,b.toInteger=Te,b.toLength=pp,b.toLower=T4,b.toNumber=gn,b.toSafeInteger=T3,b.toString=Ke,b.toUpper=A4,b.trim=I4,b.trimEnd=R4,b.trimStart=O4,b.truncate=L4,b.unescape=P4,b.uniqueId=sx,b.upperCase=M4,b.upperFirst=qc,b.each=ep,b.eachRight=tp,b.first=Qh,Vc(b,function(){var r={};return Mn(b,function(s,c){Ge.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),cn(["drop","take"],function(r,s){Ne.prototype[r]=function(c){c=c===n?1:vt(Te(c),0);var f=this.__filtered__&&!s?new Ne(this):this.clone();return f.__filtered__?f.__takeCount__=Rt(c,f.__takeCount__):f.__views__.push({size:Rt(c,re),type:r+(f.__dir__<0?"Right":"")}),f},Ne.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),cn(["filter","map","takeWhile"],function(r,s){var c=s+1,f=c==oe||c==G;Ne.prototype[r]=function(m){var y=this.clone();return y.__iteratees__.push({iteratee:ve(m,3),type:c}),y.__filtered__=y.__filtered__||f,y}}),cn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Ne.prototype[r]=function(){return this[c](1).value()[0]}}),cn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Ne.prototype[r]=function(){return this.__filtered__?new Ne(this):this[c](1)}}),Ne.prototype.compact=function(){return this.filter(Vt)},Ne.prototype.find=function(r){return this.filter(r).head()},Ne.prototype.findLast=function(r){return this.reverse().find(r)},Ne.prototype.invokeMap=Le(function(r,s){return typeof r=="function"?new Ne(this):this.map(function(c){return Ps(c,r,s)})}),Ne.prototype.reject=function(r){return this.filter(la(ve(r)))},Ne.prototype.slice=function(r,s){r=Te(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Ne(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Te(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Ne.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ne.prototype.toArray=function(){return this.take(re)},Mn(Ne.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),m=b[f?"take"+(s=="last"?"Right":""):s],y=f||/^find/.test(s);m&&(b.prototype[s]=function(){var S=this.__wrapped__,R=f?[1]:arguments,M=S instanceof Ne,z=R[0],H=M||Se(S),K=function(je){var De=m.apply(b,Sr([je],R));return f&&se?De[0]:De};H&&c&&typeof z=="function"&&z.length!=1&&(M=H=!1);var se=this.__chain__,he=!!this.__actions__.length,ye=y&&!se,Ie=M&&!he;if(!y&&H){S=Ie?S:new Ne(this);var _e=r.apply(S,R);return _e.__actions__.push({func:ia,args:[K],thisArg:n}),new dn(_e,se)}return ye&&Ie?r.apply(this,R):(_e=this.thru(K),ye?f?_e.value()[0]:_e.value():_e)})}),cn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Io[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(f&&!this.__chain__){var y=this.value();return s.apply(Se(y)?y:[],m)}return this[c](function(S){return s.apply(Se(S)?S:[],m)})}}),Mn(Ne.prototype,function(r,s){var c=b[s];if(c){var f=c.name+"";Ge.call(ji,f)||(ji[f]=[]),ji[f].push({name:s,func:c})}}),ji[Yo(n,x).name]=[{name:"wrapper",func:n}],Ne.prototype.clone=Pb,Ne.prototype.reverse=Mb,Ne.prototype.value=Bb,b.prototype.at=dw,b.prototype.chain=fw,b.prototype.commit=hw,b.prototype.next=pw,b.prototype.plant=mw,b.prototype.reverse=vw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=bw,b.prototype.first=b.prototype.head,Ss&&(b.prototype[Ss]=gw),b},Pi=hb();Xr?((Xr.exports=Pi)._=Pi,Zl._=Pi):Ct._=Pi}).call(dr)})(tl,tl.exports);var UP=tl.exports;const mr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>mr(n)(t));case"OR":return e.children.some(n=>mr(n)(t));case"NOT":return!mr(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},qu=e=>{const t=_i(),n=ze(e),i=()=>["useFollowings",n()],o=wi(i,({queryKey:d,signal:h})=>{console.debug("useFollowings");const[,p]=d;if(p==null)return Promise.resolve(null);const{pubkey:g}=p,v=new vs({type:"Followings",pubkey:g}),k=v.firstEventPromise().catch(()=>{throw new Error(`followings not found: ${g}`)});return v.onUpdate($=>{const w=$d($);t.setQueryData(d,w)}),bs({task:v,signal:h}),wr(15e3,`useFollowings: ${g}`)(k)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return hr(o.data).pTags().forEach(p=>{const[,g,v,k]=p,$={pubkey:g,petname:k};v!=null&&v.length>0&&($.mainRelayUrl=v),d.push($)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},NP=e=>{const{config:t,removeColumn:n}=Me(),{followingPubkeys:i}=qu(()=>({pubkey:e.column.pubkey})),{events:o}=xr(()=>{const a=UP.uniq([...i()]);return a.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:ur()-4*60*60}],clientEventFilter:l=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(l.content)}});return Un(()=>{console.log("home",o())}),an(()=>console.log("home timeline mounted")),vr(()=>console.log("home timeline unmounted")),_($i,{get header(){return _(ls,{get name(){return e.column.name??"ホーム"},get icon(){return _(Sv,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ws,{get events(){return o()}})}})},DP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Tv=(e={})=>(()=>{const t=DP();return Ve(t,e,!0,!0),t})(),zP=B('<span class="h-4 w-4 pt-[1px] text-rose-400">'),HP=B('<img alt="icon" class="rounded">'),FP=B('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),qP=B('<div class="notification-event py-1">'),WP=B('<span class="truncate">'),ZP=B('<div class="truncate">読み込み中 '),VP=e=>{const{shouldMuteEvent:t}=Me(),{showProfile:n}=Yr(),i=()=>hr(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=ys(()=>({pubkey:e.event.pubkey})),{event:l,query:u}=_m(()=>on([o()])(([h])=>({eventId:h}))),d=()=>u.isSuccess&&l()==null;return _(fe,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const h=FP(),p=h.firstChild,g=p.nextSibling,v=g.firstChild,k=v.nextSibling,$=k.firstChild;return L(p,_(Sn,{get fallback(){return(()=>{const w=WP();return L(w,()=>e.event.content),w})()},get children(){return _(Fe,{get when(){return e.event.content==="+"},get children(){const w=zP();return L(w,_(Ed,{})),w}})}})),L(v,_(fe,{get when(){return a()?.picture!=null},get children(){const w=HP();return Be(()=>ut(w,"src",a()?.picture)),w}})),$.$$click=()=>n(e.event.pubkey),L($,_(Tl,{get pubkey(){return e.event.pubkey}})),h})(),(()=>{const h=qP();return L(h,_(fe,{get when(){return l()},get fallback(){return(()=>{const p=ZP();return p.firstChild,L(p,o,null),p})()},keyed:!0,children:p=>_(sv,{event:p})})),h})()]}})};at(["click"]);const KP=B("<div>unknown event"),Av=e=>{const{shouldMuteEvent:t}=Me();return _(It,{get each(){return e.events},children:n=>_(fe,{get when(){return!t(n)},get children(){return _(Sn,{get fallback(){return KP()},get children(){return[_(Fe,{get when(){return n.kind===ct.Text},get children(){return _(Zs,{get children(){return _(ov,{event:n})}})}}),_(Fe,{get when(){return n.kind===ct.Reaction},get children(){return _(Zs,{get children(){return _(VP,{event:n})}})}}),_(Fe,{get when(){return n.kind===6},get children(){return _(Zs,{get children(){return _(km,{event:n})}})}})]}})}})})},GP=e=>{const{config:t,removeColumn:n}=Me(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"通知"},get icon(){return _(Tv,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(Av,{get events(){return i()}})}})},QP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),qd=(e={})=>(()=>{const t=QP();return Ve(t,e,!0,!0),t})(),YP=e=>{const{config:t,removeColumn:n}=Me(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"投稿"},get icon(){return _(qd,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ws,{get events(){return i()}})}})},JP=e=>{const{config:t,removeColumn:n}=Me(),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"リアクション"},get icon(){return _(kd,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(Av,{get events(){return i()}})}})},XP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Wd=(e={})=>(()=>{const t=XP();return Ve(t,e,!0,!0),t})(),eM=e=>{const{removeColumn:t}=Me(),{events:n}=xr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:ur()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(i.content)}));return _($i,{get header(){return _(ls,{get name(){return e.column.name??"リレー"},get icon(){return _(Wd,{})},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ws,{get events(){return n()}})}})},tM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),Iv=(e={})=>(()=>{const t=tM();return Ve(t,e,!0,!0),t})(),nM=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),rM=e=>{const[t,n]=xe(!1),[i,o]=xe(""),{saveColumn:a}=Me(),l=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},h=g=>{o(g.currentTarget.value)},p=g=>{g.preventDefault(),u()};return an(()=>{o(e.column.query)}),(()=>{const g=nM(),v=g.firstChild,k=v.firstChild,$=k.firstChild,w=k.nextSibling,E=w.firstChild,x=w.nextSibling;return L($,_(Iv,{})),w.addEventListener("submit",p),E.addEventListener("blur",d),E.addEventListener("change",h),x.$$click=()=>l(),L(x,_(Rg,{})),L(g,_(fe,{get when(){return t()},get children(){return e.settings()}}),null),Be(()=>E.value=i()),g})()},iM=e=>{const{removeColumn:t}=Me(),{events:n}=xr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:Ok,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:mr(e.column.contentFilter)(o.content)}});return _($i,{get header(){return _(rM,{get column(){return e.column},settings:()=>_(ki,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ws,{get events(){return n()}})}})};at(["click"]);const sM=B('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),oM=()=>{const{config:e}=Me();return(()=>{const t=sM();return L(t,_(It,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return _(Sn,{get children(){return[_(Fe,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:l=>_(NP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:l=>_(GP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:l=>_(YP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:l=>_(JP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:l=>_(eM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Bookmark"&&n},keyed:!0,children:l=>_(BP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:l=>_(iM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},aM=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),lM=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),cM=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),uM=async()=>{const t=await(await fetch(Vu("packageInfo.json"))).text();return JSON.parse(t)},dM=e=>{const[t]=Sg(uM);return _(_s,{get onClose(){return e.onClose},get children(){const n=aM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,h=d.nextSibling,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,k=v.nextSibling;k.nextSibling;const $=g.nextSibling,w=$.nextSibling,E=w.nextSibling,x=E.nextSibling,I=x.nextSibling,O=I.nextSibling,A=O.nextSibling;return A.nextSibling,L(u,()=>t()?.self?.version,null),L(g,_(Rl,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),k),L(A,()=>t()?.self.licenseText),L(n,_(It,{get each(){return t()?.packages??[]},fallback:"取得中",children:C=>[(()=>{const T=lM(),j=T.firstChild,N=j.nextSibling,ne=N.nextSibling,V=ne.nextSibling;return V.nextSibling,L(T,()=>C.name,j),L(T,()=>C.version,N),L(T,()=>C.licenseSpdx,V),T})(),(()=>{const T=cM();return L(T,()=>C.licenseText),T})()]}),null),Be(()=>ut(o,"src",Vu("images/rabbit_app_256.png"))),n}})},fM=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),hM=e=>{const t=Vn(),{saveColumn:n}=Me(),i=xo(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(g=>console.error(g))},a=()=>{on([t()])(([g])=>{n(tm({pubkey:g}))}),o()},l=()=>{on([t()])(([g])=>{n(nm({pubkey:g}))}),o()},u=()=>{n(rm()),o()},d=()=>{n(xd({query:""})),o()},h=()=>{on([t()])(([g])=>{n(im({pubkey:g}))}),o()},p=()=>{on([t()])(([g])=>{n(sm({pubkey:g}))}),o()};return _(_s,{get onClose(){return e.onClose},get children(){const g=fM(),v=g.firstChild,k=v.firstChild,$=v.nextSibling,w=$.firstChild,E=$.nextSibling,x=E.firstChild,I=E.nextSibling,O=I.firstChild,A=I.nextSibling,C=A.firstChild,T=A.nextSibling,j=T.firstChild;return v.$$click=()=>a(),L(k,_(Sv,{})),$.$$click=()=>l(),L(w,_(Tv,{})),E.$$click=()=>u(),L(x,_(Wd,{})),I.$$click=()=>d(),L(O,_(Iv,{})),A.$$click=()=>h(),L(C,_(qd,{})),T.$$click=()=>p(),L(j,_(kd,{})),g}})};at(["click"]);const pM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),gM=(e={})=>(()=>{const t=pM();return Ve(t,e,!0,!0),t})(),mM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),vM=(e={})=>(()=>{const t=mM();return Ve(t,e,!0,!0),t})(),bM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),yM=(e={})=>(()=>{const t=bM();return Ve(t,e,!0,!0),t})();function _M(e){const{config:t}=Me(),n=ze(e),{events:i}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[ct.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>pr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const wM=e=>{const t=ze(e),n=wi(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return Q1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},xM=e=>new Promise(t=>{setTimeout(t,e)}),$M=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),kM=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),EM=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),CM=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),SM=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),TM=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),AM=B('<div class="shrink-0 text-xs">読み込み中'),IM=B('<div class="shrink-0 text-xs">フォローされています'),RM=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),OM=B('<div class="truncate text-xl font-bold">'),LM=B('<div class="truncate text-xs">@'),PM=B('<span class="inline-block h-3 w-3">'),MM=B('<span class="inline-block h-4 w-4 text-blue-400">'),BM=B('<div class="flex items-center text-xs">'),jM=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),UM=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),NM=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),DM=B('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),zM=B('<ul class="border-t px-5 py-2 text-xs">'),HM=B('<ul class="border-t p-1">'),FM=B('<div class="h-12 shrink-0">'),qM=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),WM=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),ZM=B('<span class="inline-block h-4 w-4 text-rose-500">'),VM=B('<span class="text-sm">読み込み中'),KM=B('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),GM=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),QM=e=>{const{count:t}=_M(()=>({pubkey:e.pubkey}));return ze(t)},YM=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=Me(),a=Ol(),l=Vn(),{showProfileEdit:u}=Yr(),d=ze(()=>Sl(e.pubkey)),[h,p]=xe(!1),[g,v]=xe(!1),[k,$]=xe(!1),{profile:w,query:E}=ys(()=>({pubkey:e.pubkey})),{verification:x,query:I}=wM(()=>on([w()?.nip05])(([Z])=>({nip05:Z}))),O=()=>{const Z=w()?.nip05;if(Z==null)return null;const[re,de]=Z.split("@");return de==null?null:re==="_"?{domain:de,ident:de}:{user:re,domain:de,ident:Z}},A=()=>x()?.pubkey===e.pubkey,C=()=>o(e.pubkey),{followingPubkeys:T,invalidateFollowings:j,query:N}=qu(()=>on([l()])(([Z])=>({pubkey:Z}))),ne=()=>T().includes(e.pubkey),V=()=>N.refetch(),{followingPubkeys:Y,query:F}=qu(()=>({pubkey:e.pubkey})),J=()=>{const Z=l();return Z!=null&&Y().includes(Z)},oe=pi({mutationKey:["updateContacts"],mutationFn:(...Z)=>a.updateContacts(...Z).then(re=>Promise.allSettled(re.map(wr(5e3)))),onSuccess:Z=>{const re=Z.filter(te=>te.status==="fulfilled").length,de=Z.length-re;re===Z.length?console.log("succeeded to update contacts"):re>0?console.log(`succeeded to update contacts for ${re} relays but failed for ${de} relays`):console.error("failed to update contacts")},onError:Z=>{console.error("failed to update contacts: ",Z)},onSettled:()=>{j().then(()=>N.refetch()).catch(Z=>console.error("failed to refetch contacts",Z))}}),q=async Z=>{try{const re=l();if(re==null)return;p(!0),await V(),await xM(3e3);const de=T();console.debug("current pubkeys",de),await oe.mutateAsync({relayUrls:t().relayUrls,pubkey:re,content:N.data?.content??"",followingPubkeys:pr(Z(de))})}finally{p(!1)}},G=()=>{q(Z=>[...Z,e.pubkey]).catch(Z=>{console.log("failed to follow",Z)})},ue=()=>{window.confirm("本当にフォロー解除しますか？")&&q(Z=>Z.filter(re=>re!==e.pubkey)).catch(Z=>{console.log("failed to unfollow",Z)})},ee=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(Z=>window.alert(Z))}},{content:()=>C()?"ミュート解除":"ミュート",onSelect:()=>{C()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===l(),content:()=>ne()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{ne()?ue():G()}}],{events:pe}=xr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:ur()}],continuous:!1}));return _(_s,{onClose:()=>e.onClose?.(),get children(){return[_(fe,{get when(){return E.isFetched},get fallback(){return"loading"},get children(){return[_(fe,{get when(){return w()?.banner},get fallback(){return FM()},keyed:!0,children:Z=>(()=>{const re=qM(),de=re.firstChild;return ut(de,"src",Z),re})()}),(()=>{const Z=RM(),re=Z.firstChild,de=re.firstChild,te=re.nextSibling,ge=te.firstChild;return L(de,_(fe,{get when(){return w()?.picture},keyed:!0,children:ie=>(()=>{const ke=WM();return ut(ke,"src",ie),ke})()})),L(ge,_(Sn,{get children(){return[_(Fe,{get when(){return e.pubkey===l()},get children(){const ie=$M();return ie.$$click=()=>u(),ie}}),_(Fe,{get when(){return oe.isLoading||h()},get children(){return kM()}}),_(Fe,{get when(){return N.isLoading||N.isFetching},get children(){return EM()}}),_(Fe,{get when(){return ne()},get children(){const ie=CM();return ie.$$click=()=>ue(),ie.addEventListener("mouseleave",()=>v(!1)),ie.addEventListener("mouseenter",()=>v(!0)),L(ie,_(fe,{get when(){return!g()},fallback:"フォロー解除",children:"フォロー中"})),Be(()=>ie.disabled=oe.isLoading),ie}}),_(Fe,{get when(){return!ne()},get children(){const ie=SM();return ie.$$click=()=>G(),Be(()=>ie.disabled=oe.isLoading),ie}})]}}),null),L(ge,_(Sm,{menu:ee,get children(){const ie=TM();return L(ie,_(Em,{})),ie}}),null),L(te,_(Sn,{get children(){return[_(Fe,{get when(){return F.isLoading},get children(){return AM()}}),_(Fe,{get when(){return J()},get children(){return IM()}})]}}),null),Z})(),(()=>{const Z=jM(),re=Z.firstChild,de=re.firstChild,te=de.nextSibling,ge=te.firstChild;return L(re,_(fe,{get when(){return(w()?.display_name?.length??0)>0},get children(){const ie=OM();return L(ie,()=>w()?.display_name),ie}}),de),L(de,_(fe,{get when(){return(w()?.name?.length??0)>0},get children(){const ie=LM();return ie.firstChild,L(ie,()=>w()?.name,null),ie}}),null),L(de,_(fe,{get when(){return(w()?.nip05?.length??0)>0},get children(){const ie=BM();return L(ie,()=>O()?.ident,null),L(ie,_(Sn,{get fallback(){return(()=>{const ke=ZM();return L(ke,_(yM,{})),ke})()},get children(){return[_(Fe,{get when(){return I.isLoading},get children(){const ke=PM();return L(ke,_(gM,{})),ke}}),_(Fe,{get when(){return A()},get children(){const ke=MM();return L(ke,_(vM,{})),ke}})]}}),null),ie}}),null),L(ge,d),Z})(),_(fe,{get when(){return(w()?.about??"").length>0},get children(){const Z=UM();return L(Z,()=>w()?.about),Z}}),(()=>{const Z=DM(),re=Z.firstChild,de=re.firstChild,te=de.nextSibling;return L(te,_(fe,{get when(){return F.isFetched},get fallback(){return VM()},get children(){return Y().length}})),L(Z,_(fe,{get when(){return!t().hideCount},get children(){const ge=NM(),ie=ge.firstChild,ke=ie.nextSibling;return L(ke,_(fe,{get when(){return k()},get fallback(){return(()=>{const Q=KM();return Q.$$click=()=>$(!0),Q})()},keyed:!0,get children(){return _(QM,{get pubkey(){return e.pubkey}})}})),ge}}),null),Z})(),_(fe,{get when(){return(w()?.website??"").length>0},get children(){const Z=zM();return L(Z,_(fe,{get when(){return w()?.website},keyed:!0,children:re=>(()=>{const de=GM(),te=de.firstChild;return L(te,_(Wd,{})),L(de,_(Rl,{class:"text-blue-500 underline",href:re}),null),de})()})),Z}})]}}),(()=>{const Z=HM();return L(Z,_(ws,{get events(){return pe()}})),Z})()]}})};at(["click"]);function JM(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var XM=JM,eB=xi,tB=function(){try{var e=eB(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Rv=tB,sg=Rv;function nB(e,t,n){t=="__proto__"&&sg?sg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Ov=nB,rB=Ov,iB=Qu,sB=Object.prototype,oB=sB.hasOwnProperty;function aB(e,t,n){var i=e[t];(!(oB.call(e,t)&&iB(i,n))||n===void 0&&!(t in e))&&rB(e,t,n)}var Zd=aB,lB=Zd,cB=Ov;function uB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?cB(n,u,d):lB(n,u,d)}return n}var $o=uB,dB=$o,fB=Ll;function hB(e,t){return e&&dB(t,fB(t),e)}var pB=hB;function gB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var mB=gB,vB=qn,bB=Nd,yB=mB,_B=Object.prototype,wB=_B.hasOwnProperty;function xB(e){if(!vB(e))return yB(e);var t=bB(e),n=[];for(var i in e)i=="constructor"&&(t||!wB.call(e,i))||n.push(i);return n}var $B=xB,kB=pv,EB=$B,CB=mv;function SB(e){return CB(e)?kB(e,!0):EB(e)}var Vd=SB,TB=$o,AB=Vd;function IB(e,t){return e&&TB(t,AB(t),e)}var RB=IB,nl={exports:{}};nl.exports;(function(e,t){var n=Rn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(h,p){if(p)return h.slice();var g=h.length,v=u?u(g):new h.constructor(g);return h.copy(v),v}e.exports=d})(nl,nl.exports);var OB=nl.exports;function LB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var PB=LB,MB=$o,BB=Od;function jB(e,t){return MB(e,BB(e),t)}var UB=jB,NB=gv,DB=NB(Object.getPrototypeOf,Object),Kd=DB,zB=Rd,HB=Kd,FB=Od,qB=dv,WB=Object.getOwnPropertySymbols,ZB=WB?function(e){for(var t=[];e;)zB(t,FB(e)),e=HB(e);return t}:qB,Lv=ZB,VB=$o,KB=Lv;function GB(e,t){return VB(e,KB(e),t)}var QB=GB,YB=uv,JB=Lv,XB=Vd;function ej(e){return YB(e,XB,JB)}var Gd=ej,tj=Object.prototype,nj=tj.hasOwnProperty;function rj(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&nj.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var ij=rj,og=cv;function sj(e){var t=new e.constructor(e.byteLength);return new og(t).set(new og(e)),t}var Qd=sj,oj=Qd;function aj(e,t){var n=t?oj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var lj=aj,cj=/\w*$/;function uj(e){var t=new e.constructor(e.source,cj.exec(e));return t.lastIndex=e.lastIndex,t}var dj=uj,ag=cs,lg=ag?ag.prototype:void 0,cg=lg?lg.valueOf:void 0;function fj(e){return cg?Object(cg.call(e)):{}}var hj=fj,pj=Qd;function gj(e,t){var n=t?pj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var mj=gj,vj=Qd,bj=lj,yj=dj,_j=hj,wj=mj,xj="[object Boolean]",$j="[object Date]",kj="[object Map]",Ej="[object Number]",Cj="[object RegExp]",Sj="[object Set]",Tj="[object String]",Aj="[object Symbol]",Ij="[object ArrayBuffer]",Rj="[object DataView]",Oj="[object Float32Array]",Lj="[object Float64Array]",Pj="[object Int8Array]",Mj="[object Int16Array]",Bj="[object Int32Array]",jj="[object Uint8Array]",Uj="[object Uint8ClampedArray]",Nj="[object Uint16Array]",Dj="[object Uint32Array]";function zj(e,t,n){var i=e.constructor;switch(t){case Ij:return vj(e);case xj:case $j:return new i(+e);case Rj:return bj(e,n);case Oj:case Lj:case Pj:case Mj:case Bj:case jj:case Uj:case Nj:case Dj:return wj(e,n);case kj:return new i;case Ej:case Tj:return new i(e);case Cj:return yj(e);case Sj:return new i;case Aj:return _j(e)}}var Hj=zj,Fj=qn,ug=Object.create,qj=function(){function e(){}return function(t){if(!Fj(t))return{};if(ug)return ug(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),Wj=qj,Zj=Wj,Vj=Kd,Kj=Nd;function Gj(e){return typeof e.constructor=="function"&&!Kj(e)?Zj(Vj(e)):{}}var Qj=Gj,Yj=Pl,Jj=Jr,Xj="[object Map]";function eU(e){return Jj(e)&&Yj(e)==Xj}var tU=eU,nU=tU,rU=jd,dg=Ud,fg=dg&&dg.isMap,iU=fg?rU(fg):nU,sU=iU,oU=Pl,aU=Jr,lU="[object Set]";function cU(e){return aU(e)&&oU(e)==lU}var uU=cU,dU=uU,fU=jd,hg=Ud,pg=hg&&hg.isSet,hU=pg?fU(pg):dU,pU=hU,gU=Id,mU=XM,vU=Zd,bU=pB,yU=RB,_U=OB,wU=PB,xU=UB,$U=QB,kU=vv,EU=Gd,CU=Pl,SU=ij,TU=Hj,AU=Qj,IU=Kn,RU=Pd,OU=sU,LU=qn,PU=pU,MU=Ll,BU=Vd,jU=1,UU=2,NU=4,Pv="[object Arguments]",DU="[object Array]",zU="[object Boolean]",HU="[object Date]",FU="[object Error]",Mv="[object Function]",qU="[object GeneratorFunction]",WU="[object Map]",ZU="[object Number]",Bv="[object Object]",VU="[object RegExp]",KU="[object Set]",GU="[object String]",QU="[object Symbol]",YU="[object WeakMap]",JU="[object ArrayBuffer]",XU="[object DataView]",eN="[object Float32Array]",tN="[object Float64Array]",nN="[object Int8Array]",rN="[object Int16Array]",iN="[object Int32Array]",sN="[object Uint8Array]",oN="[object Uint8ClampedArray]",aN="[object Uint16Array]",lN="[object Uint32Array]",et={};et[Pv]=et[DU]=et[JU]=et[XU]=et[zU]=et[HU]=et[eN]=et[tN]=et[nN]=et[rN]=et[iN]=et[WU]=et[ZU]=et[Bv]=et[VU]=et[KU]=et[GU]=et[QU]=et[sN]=et[oN]=et[aN]=et[lN]=!0;et[FU]=et[Mv]=et[YU]=!1;function Ta(e,t,n,i,o,a){var l,u=t&jU,d=t&UU,h=t&NU;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!LU(e))return e;var p=IU(e);if(p){if(l=SU(e),!u)return wU(e,l)}else{var g=CU(e),v=g==Mv||g==qU;if(RU(e))return _U(e,u);if(g==Bv||g==Pv||v&&!o){if(l=d||v?{}:AU(e),!u)return d?$U(e,yU(l,e)):xU(e,bU(l,e))}else{if(!et[g])return o?e:{};l=TU(e,g,u)}}a||(a=new gU);var k=a.get(e);if(k)return k;a.set(e,l),PU(e)?e.forEach(function(E){l.add(Ta(E,t,n,E,e,a))}):OU(e)&&e.forEach(function(E,x){l.set(x,Ta(E,t,n,x,e,a))});var $=h?d?EU:kU:d?BU:MU,w=p?void 0:$(e);return mU(w||e,function(E,x){w&&(x=E,E=e[x]),vU(l,x,Ta(E,t,n,x,e,a))}),l}var cN=Ta;function uN(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var dN=uN;function fN(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var hN=fN,pN=Bl,gN=hN;function mN(e,t){return t.length<2?e:pN(e,gN(t,0,-1))}var vN=mN,bN=ks,yN=dN,_N=vN,wN=Es;function xN(e,t){return t=bN(t,e),e=_N(e,t),e==null||delete e[wN(yN(t))]}var $N=xN,kN=us,EN=Kd,CN=Jr,SN="[object Object]",TN=Function.prototype,AN=Object.prototype,jv=TN.toString,IN=AN.hasOwnProperty,RN=jv.call(Object);function ON(e){if(!CN(e)||kN(e)!=SN)return!1;var t=EN(e);if(t===null)return!0;var n=IN.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&jv.call(n)==RN}var LN=ON,PN=LN;function MN(e){return PN(e)?void 0:e}var BN=MN,gg=cs,jN=Ld,UN=Kn,mg=gg?gg.isConcatSpreadable:void 0;function NN(e){return UN(e)||jN(e)||!!(mg&&e&&e[mg])}var DN=NN,zN=Rd,HN=DN;function Uv(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=HN),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?Uv(u,t-1,n,i,o):zN(o,u):i||(o[o.length]=u)}return o}var FN=Uv,qN=FN;function WN(e){var t=e==null?0:e.length;return t?qN(e,1):[]}var ZN=WN;function VN(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var KN=VN,GN=KN,vg=Math.max;function QN(e,t,n){return t=vg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=vg(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),GN(e,this,u)}}var YN=QN;function JN(e){return function(){return e}}var XN=JN,eD=XN,bg=Rv,tD=Ev,nD=bg?function(e,t){return bg(e,"toString",{configurable:!0,enumerable:!1,value:eD(t),writable:!0})}:tD,rD=nD,iD=800,sD=16,oD=Date.now;function aD(e){var t=0,n=0;return function(){var i=oD(),o=sD-(i-n);if(n=i,o>0){if(++t>=iD)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var lD=aD,cD=rD,uD=lD,dD=uD(cD),fD=dD,hD=ZN,pD=YN,gD=fD;function mD(e){return gD(pD(e,void 0,hD),e+"")}var vD=mD,bD=Hd,yD=cN,_D=$N,wD=ks,xD=$o,$D=BN,kD=vD,ED=Gd,CD=1,SD=2,TD=4,AD=kD(function(e,t){var n={};if(e==null)return n;var i=!1;t=bD(t,function(a){return a=wD(a,e),i||(i=a.length>1),a}),xD(e,ED(e),n),i&&(n=yD(n,CD|SD|TD,$D));for(var o=t.length;o--;)_D(n,t[o]);return n}),ID=AD;const RD=po(ID);var OD="Expected a function";function LD(e){if(typeof e!="function")throw new TypeError(OD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var PD=LD,MD=Zd,BD=ks,jD=Md,yg=qn,UD=Es;function ND(e,t,n,i){if(!yg(e))return e;t=BD(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=UD(t[o]),h=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var p=u[d];h=i?i(p,d,u):void 0,h===void 0&&(h=yg(p)?p:jD(t[o+1])?[]:{})}MD(u,d,h),u=u[d]}return e}var DD=ND,zD=Bl,HD=DD,FD=ks;function qD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=zD(e,l);n(u,l)&&HD(a,FD(l,e),u)}return a}var WD=qD,ZD=Hd,VD=Fd,KD=WD,GD=Gd;function QD(e,t){if(e==null)return{};var n=ZD(GD(e),function(i){return[i]});return t=VD(t),KD(e,n,function(i,o){return t(i,o[0])})}var YD=QD,JD=Fd,XD=PD,ez=YD;function tz(e,t){return ez(e,XD(JD(t)))}var nz=tz;const rz=po(nz),iz=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),sz=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),oz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),az=B('<div class="px-4 pt-4">読み込み中...'),lz=B('<div><span class="font-bold">その他の項目</span><div>'),cz=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),uz=B('<div class="h-24 shrink-0">'),dz=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),fz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",hz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",pz=new RegExp(`^${fz}$`),Nv=new RegExp(`^${hz}$`),gz=e=>pz.test(e),mz=e=>Nv.test(e),vz=e=>{const t=Vn(),{config:n}=Me(),[i,o]=xe(""),[a,l]=xe(""),[u,d]=xe(""),[h,p]=xe(""),[g,v]=xe(""),[k,$]=xe(""),[w,E]=xe(""),[x,I]=xe(""),{profile:O,invalidateProfile:A,query:C}=ys(()=>on([t()])(([J])=>({pubkey:J}))),{updateProfile:T}=Ol(),j=pi({mutationKey:["updateProfile"],mutationFn:(...J)=>T(...J).then(oe=>Promise.allSettled(oe.map(wr(1e4)))),onSuccess:J=>{const oe=J.filter(G=>G.status==="fulfilled").length,q=J.length-oe;oe===J.length?window.alert("更新しました"):oe>0?window.alert(`${q}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),A().then(()=>C.refetch()).catch(G=>console.error(G)),e.onClose()},onError:J=>{console.error("failed to delete",J)}}),N=()=>C.isLoading||j.isLoading,ne=()=>N();setInterval(()=>console.log(C.isLoading,j.isLoading),1e3);const V=()=>RD(O(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Y=J=>{J.preventDefault();const oe=t();if(oe==null)return;const q=rz({picture:i(),banner:a(),name:u(),display_name:h(),about:g(),website:k(),nip05:w(),lud06:gz(x())?x():null,lud16:mz(x())?x():null},G=>G==null||G.length===0);j.mutate({relayUrls:n().relayUrls,pubkey:oe,profile:q,otherProperties:V()})},F=J=>J.key==="Enter"&&J.preventDefault();return an(()=>{const J=O();J!=null&&(C.refetch().catch(oe=>console.error(oe)),Aa(()=>{o(oe=>J.picture??oe),l(oe=>J.banner??oe),d(oe=>J.name??oe),p(oe=>J.display_name??oe),v(oe=>J.about??oe),$(oe=>J.website??oe),E(oe=>J.nip05??oe),J.lud16!=null?I(J.lud16):J.lud06!=null&&I(J.lud06)}))}),_(_s,{closeButton:()=>_(Gu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const J=oz(),oe=J.firstChild;return L(J,_(fe,{get when(){return a().length>0},get fallback(){return uz()},keyed:!0,get children(){const q=iz(),G=q.firstChild;return Be(()=>ut(G,"src",a())),q}}),oe),L(oe,_(fe,{get when(){return i().length>0},get children(){const q=sz();return Be(()=>ut(q,"src",i())),q}})),J})(),_(fe,{get when(){return N()},get children(){return az()}}),(()=>{const J=cz(),oe=J.firstChild,q=oe.firstChild,G=q.firstChild,ue=G.nextSibling,ee=q.nextSibling,pe=ee.firstChild,Z=pe.nextSibling,re=ee.nextSibling,de=re.firstChild,te=de.nextSibling,ge=te.firstChild,ie=ge.nextSibling,ke=re.nextSibling,Q=ke.firstChild,He=Q.nextSibling,Qe=ke.nextSibling,yt=Qe.firstChild,Oe=yt.nextSibling,qe=Qe.nextSibling,kt=qe.firstChild,Je=kt.nextSibling,Et=qe.nextSibling,Gn=Et.firstChild,_t=Gn.nextSibling,$r=Et.nextSibling,Ei=$r.firstChild,Ln=Ei.nextSibling,gt=Ln.nextSibling,bn=$r.nextSibling,Pn=bn.firstChild,Ci=Pn.nextSibling;return oe.addEventListener("submit",Y),ue.$$keydown=F,ue.addEventListener("blur",we=>o(we.currentTarget.value)),Z.$$keydown=F,Z.addEventListener("blur",we=>l(we.currentTarget.value)),ie.$$keydown=F,ie.addEventListener("change",we=>d(we.currentTarget.value)),He.$$keydown=F,He.addEventListener("change",we=>p(we.currentTarget.value)),Oe.addEventListener("change",we=>v(we.currentTarget.value)),Je.$$keydown=F,Je.addEventListener("change",we=>$(we.currentTarget.value)),_t.$$keydown=F,_t.addEventListener("change",we=>E(we.currentTarget.value)),gt.$$keydown=F,gt.addEventListener("change",we=>I(we.currentTarget.value)),L(oe,_(fe,{get when(){return Object.entries(V()).length>0},get children(){const we=lz(),Qn=we.firstChild,Gt=Qn.nextSibling;return L(Gt,_(It,{get each(){return Object.entries(V())},children:([Ft,kr])=>(()=>{const Yn=dz(),Jn=Yn.firstChild,Er=Jn.nextSibling;return L(Jn,Ft),L(Er,kr),Yn})()})),we}}),bn),Ci.$$click=()=>e.onClose(),L(oe,_(fe,{get when(){return j.isLoading},children:"保存中..."}),null),Be(we=>{const Qn=ne(),Gt=ne(),Ft=ne(),kr=ne(),Yn=ne(),Jn=ne(),Er=Nv.source,Si=ne(),Ti=ne(),Ai=j.isLoading;return Qn!==we._v$&&(ue.disabled=we._v$=Qn),Gt!==we._v$2&&(Z.disabled=we._v$2=Gt),Ft!==we._v$3&&(ie.disabled=we._v$3=Ft),kr!==we._v$4&&(He.disabled=we._v$4=kr),Yn!==we._v$5&&(Oe.disabled=we._v$5=Yn),Jn!==we._v$6&&(Je.disabled=we._v$6=Jn),Er!==we._v$7&&ut(_t,"pattern",we._v$7=Er),Si!==we._v$8&&(_t.disabled=we._v$8=Si),Ti!==we._v$9&&(gt.disabled=we._v$9=Ti),Ai!==we._v$10&&(Pn.disabled=we._v$10=Ai),we},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Be(()=>ue.value=i()),Be(()=>Z.value=a()),Be(()=>ie.value=u()),Be(()=>He.value=h()),Be(()=>Oe.value=g()),Be(()=>Je.value=k()),Be(()=>_t.value=w()),Be(()=>gt.value=x()),J})()]}})};at(["keydown","click"]);const bz=()=>{const e=Vn(),{modalState:t,showProfile:n,closeModal:i}=Yr();return _(fe,{get when(){return t()},keyed:!0,children:o=>_(Sn,{get children(){return[_(Fe,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>_(YM,{pubkey:a,onClose:i})}),_(Fe,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return _(vz,{onClose:()=>on([e()])(([a])=>{n(a)})})}}),_(Fe,{get when(){return o.type==="AddColumn"},get children(){return _(hM,{onClose:i})}}),_(Fe,{get when(){return o.type==="About"},get children(){return _(dM,{onClose:i})}})]}})})},yz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),_z=(e={})=>(()=>{const t=yz();return Ve(t,e,!0,!0),t})(),wz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),_g=(e={})=>(()=>{const t=wz();return Ve(t,e,!0,!0),t})(),xz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),$z=(e={})=>(()=>{const t=xz();return Ve(t,e,!0,!0),t})(),kz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),Ez=(e={})=>(()=>{const t=kz();return Ve(t,e,!0,!0),t})(),Cz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),Sz=(e={})=>(()=>{const t=Cz();return Ve(t,e,!0,!0),t})(),Tz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),Az=(e={})=>(()=>{const t=Tz();return Ve(t,e,!0,!0),t})(),wg=ot.string().length(64).regex(/^[0-9a-f]{64}$/),Wu=ot.string().regex(/^\w+$/),Iz=ot.object({shortcode:Wu,url:ot.string().url(),keywords:ot.optional(ot.array(Wu))}),Rz=ot.object({manifest:ot.literal("emojipack_v1"),name:ot.string(),emojis:ot.array(Iz),description:ot.optional(ot.string()),author:ot.optional(wg),publisher:ot.optional(wg)}).refine(e=>Cv(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Dv=ot.record(Wu,ot.string().url());Rz.or(Dv);const Oz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),Lz=B('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),Pz=B('<div class="py-2"><h3 class="font-bold">リレー</h3><p class="py-1"> 個のリレーが設定されています</p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Mz=B('<div class="py-2"><h3 class="pb-1 font-bold">インポート</h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">拡張機能からインポート'),Zu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Bz=B('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),jz=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Uz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Nz=B('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),Dz=B('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),zz=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Hz=B('<div class="py-2"><h3 class="font-bold">絵文字のインポート</h3><p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">インポート'),Fz=B('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),qz=B('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Wz=B('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),Zz=B('<div class="p-4">'),Vz=B('<h2 class="flex-1 text-center text-lg font-bold">設定'),Kz=B('<ul class="flex flex-col">'),Gz=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),Qz=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),zv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Yz=zv("https?"),Jz=zv("wss?"),Xz=()=>{const e=Vn(),{showProfile:t,showProfileEdit:n}=Yr();return(()=>{const i=Lz(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;return l.$$click=()=>on([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},eH=()=>{const{config:e,addRelay:t,removeRelay:n}=Me(),[i,o]=xe(""),a=u=>{u.preventDefault(),i().length!==0&&(t(i()),o(""))},l=async()=>{if(window.nostr==null)return;const u=Object.entries(await window.nostr?.getRelays?.()??[]),d=u.map(([v])=>v).join(`
`);if(u.length===0){window.alert("リレーが設定されていません");return}if(!window.confirm(`これらのリレーをインポートしますか:
${d}`))return;const h=e().relayUrls.length;Aa(()=>{u.forEach(([v])=>{t(v)})});const g=e().relayUrls.length-h;window.alert(`${g} 個のリレーをインポートしました`)};return[(()=>{const u=Pz(),d=u.firstChild,h=d.nextSibling,p=h.firstChild,g=h.nextSibling,v=g.nextSibling,k=v.firstChild;return L(h,()=>e().relayUrls.length,p),L(g,_(It,{get each(){return e().relayUrls},children:$=>(()=>{const w=Zu(),E=w.firstChild,x=E.nextSibling;return L(E,$),x.$$click=()=>n($),L(x,_(as,{})),w})()})),v.addEventListener("submit",a),k.addEventListener("change",$=>o($.currentTarget.value)),ut(k,"pattern",Jz),Be(()=>k.value=i()),u})(),(()=>{const u=Mz(),d=u.firstChild,h=d.nextSibling;return h.$$click=()=>{l().catch(p=>{console.error("failed to import relays",p),window.alert("インポートに失敗しました")})},u})()]},tH=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],nH=()=>{const{config:e,setConfig:t}=Me(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=Bz(),o=i.firstChild,a=o.nextSibling;return L(a,_(It,{each:tH,children:({id:l,name:u,example:d})=>(()=>{const h=jz(),p=h.firstChild,g=p.nextSibling;return p.$$click=()=>n(l),L(p,u),L(g,d),Be(v=>{const k=e().dateFormat===l,$=e().dateFormat===l,w=e().dateFormat!==l,E=e().dateFormat!==l;return k!==v._v$&&p.classList.toggle("bg-rose-300",v._v$=k),$!==v._v$2&&p.classList.toggle("text-white",v._v$2=$),w!==v._v$3&&p.classList.toggle("bg-white",v._v$3=w),E!==v._v$4&&p.classList.toggle("text-rose-300",v._v$4=E),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),h})()})),i})()},Ks=e=>(()=>{const t=Uz();return t.$$click=n=>e.onClick(n),Be(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&ut(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),rH=()=>{const{config:e,setConfig:t}=Me(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=Nz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,L(u,_(Ks,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),L(d,_(Ks,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},iH=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=Me(),[i,o]=xe(""),[a,l]=xe(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&(t({shortcode:i(),url:a()}),o(""),l(""))};return(()=>{const d=Dz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,k=v.firstChild,$=k.nextSibling,w=v.nextSibling,E=w.firstChild,x=E.nextSibling;return L(p,_(It,{get each(){return Object.values(e().customEmojis)},children:({shortcode:I,url:O})=>(()=>{const A=zz(),C=A.firstChild,T=C.nextSibling,j=T.nextSibling;return ut(C,"src",O),ut(C,"alt",I),L(T,I),j.$$click=()=>n(I),L(j,_(as,{})),A})()})),g.addEventListener("submit",u),$.addEventListener("change",I=>o(I.currentTarget.value)),x.addEventListener("change",I=>l(I.currentTarget.value)),ut(x,"pattern",Yz),Be(()=>$.value=i()),Be(()=>x.value=a()),d})()},sH=()=>{const{saveEmojis:e}=Me(),[t,n]=xe(""),i=o=>{if(o.preventDefault(),t().length!==0)try{const a=Dv.parse(JSON.parse(t())),l=Oz(a);e(l),n("")}catch(a){const l=a instanceof Error?`:${a.message}`:"";window.alert(`JSONの読み込みに失敗しました${l}`)}};return(()=>{const o=Hz(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling,d=u.firstChild;return u.addEventListener("submit",i),d.addEventListener("change",h=>n(h.currentTarget.value)),Be(()=>d.value=t()),o})()},oH=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=Me(),[o,a]=xe(""),l=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=Fz(),d=u.firstChild,h=d.nextSibling;return L(h,_(It,{get each(){return e().mutedPubkeys},children:p=>(()=>{const g=Zu(),v=g.firstChild,k=v.nextSibling;return L(v,_(Tl,{pubkey:p})),k.$$click=()=>t(p),L(k,_(as,{})),g})()})),u})(),(()=>{const u=qz(),d=u.firstChild,h=d.nextSibling,p=h.nextSibling,g=p.firstChild;return L(h,_(It,{get each(){return e().mutedKeywords},children:v=>(()=>{const k=Zu(),$=k.firstChild,w=$.nextSibling;return L($,v),w.$$click=()=>i(v),L(w,_(as,{})),k})()})),p.addEventListener("submit",l),g.addEventListener("change",v=>a(v.currentTarget.value)),Be(()=>g.value=o()),u})()]},aH=()=>{const{config:e,setConfig:t}=Me(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=Wz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild;d.firstChild;const h=d.nextSibling;h.firstChild;const p=h.nextSibling;return p.firstChild,L(d,_(Ks,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),L(h,_(Ks,{get value(){return e().showImage},onClick:()=>i()}),null),L(p,_(Ks,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},lH=e=>{const[t,n]=xe(null),i=[{name:()=>"プロフィール",icon:()=>_(qd,{}),render:()=>_(Xz,{})},{name:()=>"リレー",icon:()=>_(Az,{}),render:()=>_(eH,{})},{name:()=>"表示",icon:()=>_(Sz,{}),render:()=>[_(nH,{}),_(rH,{}),_(aH,{})]},{name:()=>"カスタム絵文字",icon:()=>_(nv,{}),render:()=>[_(iH,{}),_(sH,{})]},{name:()=>"ミュート",icon:()=>_(Ez,{}),render:()=>_(oH,{})}],o=()=>{const a=t();return a==null?null:i[a]};return _(_s,{get onClose(){return e.onClose},get children(){const a=Zz();return L(a,_(fe,{get when(){return o()},get fallback(){return[Vz(),(()=>{const l=Kz();return L(l,_(It,{each:i,children:(u,d)=>(()=>{const h=Gz(),p=h.firstChild,g=p.firstChild;return p.$$click=()=>n(d),L(g,()=>u.icon()),L(p,()=>u.name(),null),h})()})),l})()]},keyed:!0,children:l=>(()=>{const u=Qz(),d=u.firstChild,h=d.nextSibling;return d.$$click=()=>n(null),L(d,_(Gu,{})),L(h,()=>l.render()),u})()})),a}})};at(["click"]);const cH=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),uH=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),dH=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),fH=()=>{let e,t;const{saveColumn:n}=Me(),i=xo(),[o,a]=xe(""),l=u=>{u.preventDefault(),n(xd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return _(Cd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=uH();return L(u,_(_g,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=cH(),d=u.firstChild,h=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?br(p,d):t=d,L(h,_(_g,{})),Be(()=>d.value=o()),u}})},hH=()=>{let e;const{showAddColumn:t,showAbout:n}=Yr(),{config:i}=Me(),[o,a]=xe(!1),[l,u]=xe(!1),d=()=>{e?.focus(),e?.click()},h=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return Uu(()=>({commandType:"openPostForm",handler:()=>{h(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=dH(),k=v.firstChild,$=k.firstChild,w=$.firstChild,E=$.nextSibling,x=E.nextSibling,I=x.firstChild,O=I.nextSibling,A=O.nextSibling,C=A.firstChild,T=k.nextSibling;return w.$$click=()=>g(),L(w,_($z,{})),L($,_(fH,{}),null),I.$$click=()=>t(),L(I,_(Cm,{})),O.$$click=()=>u(j=>!j),L(O,_(_z,{})),A.$$click=()=>n(),L(T,_(rv,{textAreaRef:j=>{e=j},onClose:p})),L(v,_(fe,{get when(){return l()},get children(){return _(lH,{onClose:()=>u(!1)})}}),null),Be(j=>{const N=Vu("images/rabbit_app_256.png"),ne=!!(o()||i().keepOpenPostForm),V=!(o()||i().keepOpenPostForm);return N!==j._v$&&ut(C,"src",j._v$=N),ne!==j._v$2&&T.classList.toggle("static",j._v$2=ne),V!==j._v$3&&T.classList.toggle("hidden",j._v$3=V),j},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};at(["click"]);var pH=Rn,gH=function(){return pH.Date.now()},mH=gH,vH=/\s/;function bH(e){for(var t=e.length;t--&&vH.test(e.charAt(t)););return t}var yH=bH,_H=yH,wH=/^\s+/;function xH(e){return e&&e.slice(0,_H(e)+1).replace(wH,"")}var $H=xH,kH=$H,xg=qn,EH=Ml,$g=0/0,CH=/^[-+]0x[0-9a-f]+$/i,SH=/^0b[01]+$/i,TH=/^0o[0-7]+$/i,AH=parseInt;function IH(e){if(typeof e=="number")return e;if(EH(e))return $g;if(xg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=xg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=kH(e);var n=SH.test(e);return n||TH.test(e)?AH(e.slice(2),n?2:8):CH.test(e)?$g:+e}var RH=IH,OH=qn,gu=mH,kg=RH,LH="Expected a function",PH=Math.max,MH=Math.min;function BH(e,t,n){var i,o,a,l,u,d,h=0,p=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(LH);t=kg(t)||0,OH(n)&&(p=!!n.leading,g="maxWait"in n,a=g?PH(kg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function k(T){var j=i,N=o;return i=o=void 0,h=T,l=e.apply(N,j),l}function $(T){return h=T,u=setTimeout(x,t),p?k(T):l}function w(T){var j=T-d,N=T-h,ne=t-j;return g?MH(ne,a-N):ne}function E(T){var j=T-d,N=T-h;return d===void 0||j>=t||j<0||g&&N>=a}function x(){var T=gu();if(E(T))return I(T);u=setTimeout(x,w(T))}function I(T){return u=void 0,v&&i?k(T):(i=o=void 0,l)}function O(){u!==void 0&&clearTimeout(u),h=0,i=d=o=u=void 0}function A(){return u===void 0?l:I(gu())}function C(){var T=gu(),j=E(T);if(i=arguments,o=this,d=T,j){if(u===void 0)return $(d);if(g)return clearTimeout(u),u=setTimeout(x,t),k(d)}return u===void 0&&(u=setTimeout(x,t)),l}return C.cancel=O,C.flush=A,C}var jH=BH,UH=jH,NH=qn,DH="Expected a function";function zH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(DH);return NH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),UH(e,t,{leading:i,maxWait:t,trailing:o})}var HH=zH;const FH=po(HH),qH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],WH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},ZH=({shortcuts:e=qH,onShortcut:t})=>{const n=WH(e);an(()=>{const i=FH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),vr(()=>{window.removeEventListener("keydown",i)})})},VH=()=>{const e=xo();ZH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},KH=B('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),eF=()=>{VH();const e=Lx(),{persistStatus:t}=jx(),n=Cl(),{config:i,initializeColumns:o}=Me(),a=Vn();return Un(()=>{i().relayUrls.map(async l=>{try{(await n().ensureRelay(l)).on("notice",d=>{console.error(`NOTICE: ${l}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),Un(()=>{const l=a();l!=null&&o({pubkey:l})}),an(()=>{t().loggedIn||e("/hello")}),Px(l=>{console.error("uncaught error: ",l)}),(()=>{const l=KH();return L(l,_(hH,{}),null),L(l,_(oM,{}),null),L(l,_(bz,{}),null),l})()};export{eF as default};
//# sourceMappingURL=Home-9b0035d4.js.map
