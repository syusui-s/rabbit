import{S as Ag,s as bu,n as Sx,i as Ap,a as Ip,t as Tx,f as Ax,c as Ix,r as Rp,b as Rx,d as Ig,g as Ox,u as wi,e as Rg,h as Ra,o as br,j as cn,k as Qs,l as ol,p as Op,m as Ge,q as B,v as ot,w as $e,x as S,y,z as le,A as We,B as Lx,M as De,C as Px,D as an,E as Dn,F as vt,G as Mx,H as Me,I as Bx,J as yr,K as Ct,L as Og,N as Xe,O as jx,P as Ux,Q as Zs,R as Lg,T as Nx,U as Dx}from"./index-e829399c.js";import{c as es,u as Vi,a as zx,b as Hx,r as Qu,d as Fx}from"./resolveAsset-4b8e2ee4.js";class qx extends Ag{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Lp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return yu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return yu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),bu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Pp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Sx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Ap||this.currentResult.isStale||!Ip(this.options.staleTime))return;const n=Tx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Ap||this.options.enabled===!1||!Ip(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Ax.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,h=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:x,errorUpdatedAt:k,fetchStatus:$,status:E}=g,w=!1,O=!1,R;if(n._optimisticResults){const N=this.hasListeners(),ne=!N&&Lp(t,n),V=N&&Pp(t,i,n,o);(ne||V)&&($=Ix(t.options.networkMode)?"fetching":"paused",v||(E="loading")),n._optimisticResults==="isRestoring"&&($="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&E!=="error")R=p.data,v=p.dataUpdatedAt,E=p.status,w=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)R=this.selectResult;else try{this.selectFn=n.select,R=n.select(g.data),R=Rp(a?.data,R,n),this.selectResult=R,this.selectError=null}catch(N){this.selectError=N}else R=g.data;if(typeof n.placeholderData<"u"&&typeof R>"u"&&E==="loading"){let N;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)N=a.data;else if(N=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof N<"u")try{N=n.select(N),this.selectError=null}catch(ne){this.selectError=ne}typeof N<"u"&&(E="success",R=Rp(a?.data,N,n),O=!0)}this.selectError&&(x=this.selectError,R=this.selectResult,k=Date.now(),E="error");const I=$==="fetching",C=E==="loading",A=E==="error";return{status:E,fetchStatus:$,isLoading:C,isSuccess:E==="success",isError:A,isInitialLoading:C&&I,data:R,dataUpdatedAt:v,error:x,errorUpdatedAt:k,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:I,isRefetching:I&&!C,isLoadingError:A&&g.dataUpdatedAt===0,isPaused:$==="paused",isPlaceholderData:O,isPreviousData:w,isRefetchError:A&&g.dataUpdatedAt!==0,isStale:Yu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,bu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==n[h]&&u.has(h)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Rx(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Ig.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,h;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(h=this.options).onSettled)==null||d.call(h,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Wx(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Lp(e,t){return Wx(e,t)||e.state.dataUpdatedAt>0&&yu(e,t,t.refetchOnMount)}function yu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Yu(e,t)}return!1}function Pp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Yu(e,n)}function Yu(e,t){return e.isStaleByTime(t.staleTime)}class Zx extends Ag{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),bu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Ox(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Ig.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,h;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(h=this.mutateOptions).onSettled)==null||d.call(h,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function Vx(e){return typeof e=="function"}function Mp(e,t,n){if(!Vx(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Pg(e,t){return typeof e=="function"?e(...t):!!e}function Kx(e,t){const n=wi({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=es(a.getOptimisticResult(o)),[d,{refetch:h,mutate:p}]=Rg(()=>new Promise(k=>{l.isFetching&&l.isLoading||(Vi(l.data)===i&&k(void 0),k(Vi(l.data)))}));Ra(()=>{p(()=>Vi(l.data)),h()});let g=[];const v=a.subscribe(k=>{g.push(()=>{Ra(()=>{const $={...Vi(k)};$.data===void 0&&($.data=i),u(Vi($)),p(()=>Vi(k.data)),h()})}),queueMicrotask(()=>{const $=g.pop();$&&$(),g=[]})});br(()=>v()),cn(()=>{a.setOptions(o,{listeners:!1})}),Qs(()=>{const k=n.defaultQueryOptions(e);a.setOptions(k)}),Qs(ol(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Pg(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const x={get(k,$){return $==="data"?d():Reflect.get(k,$)}};return new Proxy(l,x)}function xi(e,t,n){const[i,o]=es(Mp(e,t,n));return Qs(()=>{const a=Mp(e,t,n);o(a)}),Kx(i,qx)}function gi(e,t,n){const[i,o]=es(Op(e,t,n)),a=wi({context:i.context}),l=new Zx(a,i),u=(g,v)=>{l.mutate(g,v).catch(Gx)},[d,h]=es({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Qs(()=>{const g=Op(e,t,n);o(g),l.setOptions(g)}),Qs(ol(()=>d.status,()=>{if(d.isError&&Pg(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{h({...g,mutate:u,mutateAsync:g.mutate})});return br(p),d}function Gx(){}const Qx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),Yx=(e={})=>(()=>{const t=Qx();return Ge(t,e,!0,!0),t})(),Jx=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),Mg=(e={})=>(()=>{const t=Jx();return Ge(t,e,!0,!0),t})(),Xx=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),e5=B('<span class="inline-block h-4 w-4 text-gray-700">'),ds=e=>{const[t,n]=$e(!1),i=()=>n(o=>!o);return(()=>{const o=Xx(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=l.nextSibling;return S(l,y(le,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const p=e5();return S(p,h),p})()}),u),S(u,()=>e.name),d.$$click=()=>i(),S(d,y(Mg,{})),S(o,y(le,{get when(){return t()},get children(){return e.settings()}}),null),o})()};ot(["click"]);const t5=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Ju=(e={})=>(()=>{const t=t5();return Ge(t,e,!0,!0),t})();var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function go(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function al(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var n5=typeof fr=="object"&&fr&&fr.Object===Object&&fr,Bg=n5,r5=Bg,i5=typeof self=="object"&&self&&self.Object===Object&&self,s5=r5||i5||Function("return this")(),Ln=s5,o5=Ln,a5=o5.Symbol,fs=a5,Bp=fs,jg=Object.prototype,l5=jg.hasOwnProperty,c5=jg.toString,Hs=Bp?Bp.toStringTag:void 0;function u5(e){var t=l5.call(e,Hs),n=e[Hs];try{e[Hs]=void 0;var i=!0}catch{}var o=c5.call(e);return i&&(t?e[Hs]=n:delete e[Hs]),o}var d5=u5,f5=Object.prototype,h5=f5.toString;function p5(e){return h5.call(e)}var g5=p5,jp=fs,m5=d5,v5=g5,b5="[object Null]",y5="[object Undefined]",Up=jp?jp.toStringTag:void 0;function _5(e){return e==null?e===void 0?y5:b5:Up&&Up in Object(e)?m5(e):v5(e)}var hs=_5;function w5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Zn=w5,x5=hs,$5=Zn,k5="[object AsyncFunction]",E5="[object Function]",C5="[object GeneratorFunction]",S5="[object Proxy]";function T5(e){if(!$5(e))return!1;var t=x5(e);return t==E5||t==C5||t==k5||t==S5}var Ug=T5,A5=Ln,I5=A5["__core-js_shared__"],R5=I5,Xc=R5,Np=function(){var e=/[^.]+$/.exec(Xc&&Xc.keys&&Xc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function O5(e){return!!Np&&Np in e}var L5=O5,P5=Function.prototype,M5=P5.toString;function B5(e){if(e!=null){try{return M5.call(e)}catch{}try{return e+""}catch{}}return""}var Ng=B5,j5=Ug,U5=L5,N5=Zn,D5=Ng,z5=/[\\^$.*+?()[\]{}|]/g,H5=/^\[object .+?Constructor\]$/,F5=Function.prototype,q5=Object.prototype,W5=F5.toString,Z5=q5.hasOwnProperty,V5=RegExp("^"+W5.call(Z5).replace(z5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function K5(e){if(!N5(e)||U5(e))return!1;var t=j5(e)?V5:H5;return t.test(D5(e))}var G5=K5;function Q5(e,t){return e?.[t]}var Y5=Q5,J5=G5,X5=Y5;function e$(e,t){var n=X5(e,t);return J5(n)?n:void 0}var $i=e$,t$=$i,n$=t$(Object,"create"),ll=n$,Dp=ll;function r$(){this.__data__=Dp?Dp(null):{},this.size=0}var i$=r$;function s$(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var o$=s$,a$=ll,l$="__lodash_hash_undefined__",c$=Object.prototype,u$=c$.hasOwnProperty;function d$(e){var t=this.__data__;if(a$){var n=t[e];return n===l$?void 0:n}return u$.call(t,e)?t[e]:void 0}var f$=d$,h$=ll,p$=Object.prototype,g$=p$.hasOwnProperty;function m$(e){var t=this.__data__;return h$?t[e]!==void 0:g$.call(t,e)}var v$=m$,b$=ll,y$="__lodash_hash_undefined__";function _$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=b$&&t===void 0?y$:t,this}var w$=_$,x$=i$,$$=o$,k$=f$,E$=v$,C$=w$;function ps(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ps.prototype.clear=x$;ps.prototype.delete=$$;ps.prototype.get=k$;ps.prototype.has=E$;ps.prototype.set=C$;var S$=ps;function T$(){this.__data__=[],this.size=0}var A$=T$;function I$(e,t){return e===t||e!==e&&t!==t}var Xu=I$,R$=Xu;function O$(e,t){for(var n=e.length;n--;)if(R$(e[n][0],t))return n;return-1}var cl=O$,L$=cl,P$=Array.prototype,M$=P$.splice;function B$(e){var t=this.__data__,n=L$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():M$.call(t,n,1),--this.size,!0}var j$=B$,U$=cl;function N$(e){var t=this.__data__,n=U$(t,e);return n<0?void 0:t[n][1]}var D$=N$,z$=cl;function H$(e){return z$(this.__data__,e)>-1}var F$=H$,q$=cl;function W$(e,t){var n=this.__data__,i=q$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var Z$=W$,V$=A$,K$=j$,G$=D$,Q$=F$,Y$=Z$;function gs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}gs.prototype.clear=V$;gs.prototype.delete=K$;gs.prototype.get=G$;gs.prototype.has=Q$;gs.prototype.set=Y$;var ul=gs,J$=$i,X$=Ln,e8=J$(X$,"Map"),ed=e8,zp=S$,t8=ul,n8=ed;function r8(){this.size=0,this.__data__={hash:new zp,map:new(n8||t8),string:new zp}}var i8=r8;function s8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var o8=s8,a8=o8;function l8(e,t){var n=e.__data__;return a8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var dl=l8,c8=dl;function u8(e){var t=c8(this,e).delete(e);return this.size-=t?1:0,t}var d8=u8,f8=dl;function h8(e){return f8(this,e).get(e)}var p8=h8,g8=dl;function m8(e){return g8(this,e).has(e)}var v8=m8,b8=dl;function y8(e,t){var n=b8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var _8=y8,w8=i8,x8=d8,$8=p8,k8=v8,E8=_8;function ms(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ms.prototype.clear=w8;ms.prototype.delete=x8;ms.prototype.get=$8;ms.prototype.has=k8;ms.prototype.set=E8;var td=ms,C8="__lodash_hash_undefined__";function S8(e){return this.__data__.set(e,C8),this}var T8=S8;function A8(e){return this.__data__.has(e)}var I8=A8,R8=td,O8=T8,L8=I8;function Oa(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new R8;++t<n;)this.add(e[t])}Oa.prototype.add=Oa.prototype.push=O8;Oa.prototype.has=L8;var Dg=Oa;function P8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var M8=P8;function B8(e){return e!==e}var j8=B8;function U8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var N8=U8,D8=M8,z8=j8,H8=N8;function F8(e,t,n){return t===t?H8(e,t,n):D8(e,z8,n)}var q8=F8,W8=q8;function Z8(e,t){var n=e==null?0:e.length;return!!n&&W8(e,t,0)>-1}var V8=Z8;function K8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var G8=K8;function Q8(e,t){return e.has(t)}var zg=Q8,Y8=$i,J8=Ln,X8=Y8(J8,"Set"),Hg=X8;function e6(){}var t6=e6;function n6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var nd=n6,eu=Hg,r6=t6,i6=nd,s6=1/0,o6=eu&&1/i6(new eu([,-0]))[1]==s6?function(e){return new eu(e)}:r6,a6=o6,l6=Dg,c6=V8,u6=G8,d6=zg,f6=a6,h6=nd,p6=200;function g6(e,t,n){var i=-1,o=c6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=u6;else if(a>=p6){var h=t?null:f6(e);if(h)return h6(h);l=!1,o=d6,d=new l6}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var Fg=g6,m6=Fg;function v6(e){return e&&e.length?m6(e):[]}var b6=v6;const gr=go(b6),y6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),Vs=e=>(()=>{const t=y6();return S(t,()=>e.children),t})();function _u(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function _6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function qg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function w6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");_u(e.outputLen),_u(e.blockLen)}function x6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function $6(e,t){qg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const fi={number:_u,bool:_6,bytes:qg,hash:w6,exists:x6,output:$6},Ea=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,k6=Object.freeze(Object.defineProperty({__proto__:null,crypto:Ea},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const E6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),C6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),mi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Cn=(e,t)=>e<<32-t|e>>>t,Wg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Wg)throw new Error("Non little-endian hardware is not supported");const S6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function rn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=S6[e[n]];return t}function Vr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Zg=async()=>{};async function T6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Zg(),i+=a)}}function rd(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function mo(e){if(typeof e=="string"&&(e=rd(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function hi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class id{clone(){return this._cloneInto()}}const A6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function I6(e,t){if(t!==void 0&&(typeof t!="object"||!A6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function fl(e){const t=i=>e().update(mo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function R6(e){const t=(i,o)=>e(o).update(mo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function hl(e=32){if(Ea&&typeof Ea.getRandomValues=="function")return Ea.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const O6=Object.freeze(Object.defineProperty({__proto__:null,Hash:id,asyncLoop:T6,bytesToHex:rn,checkOpts:I6,concatBytes:hi,createView:mi,hexToBytes:Vr,isLE:Wg,nextTick:Zg,randomBytes:hl,rotr:Cn,toBytes:mo,u32:C6,u8:E6,utf8ToBytes:rd,wrapConstructor:fl,wrapConstructorWithOpts:R6},Symbol.toStringTag,{value:"Module"}));function L6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}let Vg=class extends id{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=mi(this.buffer)}update(t){fi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=mo(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=mi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){fi.exists(this),fi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;L6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=mi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const P6=(e,t,n)=>e&t^~e&n,M6=(e,t,n)=>e&t^e&n^t&n,B6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Ur=new Uint32Array(64);class Kg extends Vg{constructor(){super(64,32,8,!1),this.A=jr[0]|0,this.B=jr[1]|0,this.C=jr[2]|0,this.D=jr[3]|0,this.E=jr[4]|0,this.F=jr[5]|0,this.G=jr[6]|0,this.H=jr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Ur[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=Ur[g-15],x=Ur[g-2],k=Cn(v,7)^Cn(v,18)^v>>>3,$=Cn(x,17)^Cn(x,19)^x>>>10;Ur[g]=$+Ur[g-7]+k+Ur[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:h,H:p}=this;for(let g=0;g<64;g++){const v=Cn(u,6)^Cn(u,11)^Cn(u,25),x=p+v+P6(u,d,h)+B6[g]+Ur[g]|0,$=(Cn(i,2)^Cn(i,13)^Cn(i,22))+M6(i,o,a)|0;p=h,h=d,d=u,u=l+x|0,l=a,a=o,o=i,i=x+$|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,h=h+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,h,p)}roundClean(){Ur.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class j6 extends Kg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Hn=fl(()=>new Kg),U6=fl(()=>new j6),N6=Object.freeze(Object.defineProperty({__proto__:null,sha224:U6,sha256:Hn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Gg=BigInt(0),pl=BigInt(1),D6=BigInt(2),gl=e=>e instanceof Uint8Array,z6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ts(e){if(!gl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=z6[e[n]];return t}function Qg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function sd(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function ns(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function zt(e){return sd(ts(e))}function od(e){if(!gl(e))throw new Error("Uint8Array expected");return sd(ts(Uint8Array.from(e).reverse()))}const Wr=(e,t)=>ns(e.toString(16).padStart(t*2,"0")),Yg=(e,t)=>Wr(e,t).reverse(),H6=e=>ns(Qg(e));function Rt(e,t,n){let i;if(typeof t=="string")try{i=ns(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(gl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function sn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!gl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function F6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ml(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function q6(e){let t;for(t=0;e>Gg;e>>=pl,t+=1);return t}const W6=(e,t)=>e>>BigInt(t)&pl,Z6=(e,t,n)=>e|(n?pl:Gg)<<BigInt(t),ad=e=>(D6<<BigInt(e-1))-pl,tu=e=>new Uint8Array(e),Hp=e=>Uint8Array.from(e);function Jg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=tu(e),o=tu(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=tu())=>{o=u(Hp([0]),g),i=u(),g.length!==0&&(o=u(Hp([1]),g),i=u())},h=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const x=i.slice();v.push(x),g+=i.length}return sn(...v)};return(g,v)=>{l(),d(g);let x;for(;!(x=v(h()));)d();return l(),x}}const V6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function vs(e,t,n={}){const i=(o,a,l)=>{const u=V6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const K6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:W6,bitLen:q6,bitMask:ad,bitSet:Z6,bytesToHex:ts,bytesToNumberBE:zt,bytesToNumberLE:od,concatBytes:sn,createHmacDrbg:Jg,ensureBytes:Rt,equalBytes:F6,hexToBytes:ns,hexToNumber:sd,numberToBytesBE:Wr,numberToBytesLE:Yg,numberToHexUnpadded:Qg,numberToVarBytesBE:H6,utf8ToBytes:ml,validateObject:vs},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Et=BigInt(0),mt=BigInt(1),ui=BigInt(2),G6=BigInt(3),wu=BigInt(4),Fp=BigInt(5),qp=BigInt(8);BigInt(9);BigInt(16);function xt(e,t){const n=e%t;return n>=Et?n:t+n}function Q6(e,t,n){if(n<=Et||t<Et)throw new Error("Expected power/modulo > 0");if(n===mt)return Et;let i=mt;for(;t>Et;)t&mt&&(i=i*e%n),e=e*e%n,t>>=mt;return i}function bn(e,t,n){let i=e;for(;t-- >Et;)i*=i,i%=n;return i}function xu(e,t){if(e===Et||t<=Et)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=xt(e,t),i=t,o=Et,a=mt;for(;n!==Et;){const u=i/n,d=i%n,h=o-a*u;i=n,n=d,o=a,a=h}if(i!==mt)throw new Error("invert: does not exist");return xt(o,t)}function Y6(e){const t=(e-mt)/ui;let n,i,o;for(n=e-mt,i=0;n%ui===Et;n/=ui,i++);for(o=ui;o<e&&Q6(o,t,e)!==e-mt;o++);if(i===1){const l=(e+mt)/wu;return function(d,h){const p=d.pow(h,l);if(!d.eql(d.sqr(p),h))throw new Error("Cannot find square root");return p}}const a=(n+mt)/ui;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let h=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let x=1;for(let $=u.sqr(v);x<h&&!u.eql($,u.ONE);x++)$=u.sqr($);const k=u.pow(p,mt<<BigInt(h-x-1));p=u.sqr(k),g=u.mul(g,k),v=u.mul(v,p),h=x}return g}}function J6(e){if(e%wu===G6){const t=(e+mt)/wu;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%qp===Fp){const t=(e-Fp)/qp;return function(i,o){const a=i.mul(o,ui),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ui),l),h=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(h),o))throw new Error("Cannot find square root");return h}}return Y6(e)}const X6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Xg(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=X6.reduce((i,o)=>(i[o]="function",i),t);return vs(e,n)}function e7(e,t,n){if(n<Et)throw new Error("Expected power > 0");if(n===Et)return e.ONE;if(n===mt)return t;let i=e.ONE,o=t;for(;n>Et;)n&mt&&(i=e.mul(i,o)),o=e.sqr(o),n>>=mt;return i}function t7(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function ld(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function n7(e,t,n=!1,i={}){if(e<=Et)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=ld(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=J6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:ad(o),ZERO:Et,ONE:mt,create:d=>xt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return Et<=d&&d<e},is0:d=>d===Et,isOdd:d=>(d&mt)===mt,neg:d=>xt(-d,e),eql:(d,h)=>d===h,sqr:d=>xt(d*d,e),add:(d,h)=>xt(d+h,e),sub:(d,h)=>xt(d-h,e),mul:(d,h)=>xt(d*h,e),pow:(d,h)=>e7(u,d,h),div:(d,h)=>xt(d*xu(h,e),e),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>xu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>t7(u,d),cmov:(d,h,p)=>p?h:d,toBytes:d=>n?Yg(d,a):Wr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?od(d):zt(d)}});return Object.freeze(u)}function r7(e,t,n=!1){e=Rt("privateHash",e);const i=e.length,o=ld(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?od(e):zt(e);return xt(a,t-mt)+mt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const i7=BigInt(0),nu=BigInt(1);function s7(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>i7;)a&nu&&(l=l.add(u)),u=u.double(),a>>=nu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let h=o,p=h;for(let g=0;g<l;g++){p=h,d.push(p);for(let v=1;v<u;v++)p=p.add(h),d.push(p);h=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let h=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),v=2**o,x=BigInt(o);for(let k=0;k<u;k++){const $=k*d;let E=Number(l&g);l>>=x,E>d&&(E-=v,l+=nu);const w=$,O=$+Math.abs(E)-1,R=k%2!==0,I=E<0;E===0?p=p.add(n(R,a[w])):h=h.add(n(I,a[O]))}return{p:h,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let h=a.get(o);return h||(h=this.precomputeWindow(o,d),d!==1&&a.set(o,u(h))),this.wNAF(d,h,l)}}}function e1(e){return Xg(e.Fp),vs(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ld(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function o7(e){const t=e1(e);vs(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:a7,hexToBytes:l7}=K6,pi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=pi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:a7(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=pi,n=typeof e=="string"?l7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=pi._parseInt(n.subarray(2)),{d:l,l:u}=pi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=h=>Number.parseInt(h[0],16)&8?"00"+h:h,n=h=>{const p=h.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},Tn=BigInt(0),bt=BigInt(1),cr=BigInt(2),La=BigInt(3),Wp=BigInt(4);function c7(e){const t=o7(e),{Fp:n}=t,i=t.toBytes||((k,$,E)=>{const w=$.toAffine();return sn(Uint8Array.from([4]),n.toBytes(w.x),n.toBytes(w.y))}),o=t.fromBytes||(k=>{const $=k.subarray(1),E=n.fromBytes($.subarray(0,n.BYTES)),w=n.fromBytes($.subarray(n.BYTES,2*n.BYTES));return{x:E,y:w}});function a(k){const{a:$,b:E}=t,w=n.sqr(k),O=n.mul(w,k);return n.add(n.add(O,n.mul(k,$)),E)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l(k){return typeof k=="bigint"&&Tn<k&&k<t.n}function u(k){if(!l(k))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(k){const{allowedPrivateKeyLengths:$,nByteLength:E,wrapPrivateKey:w,n:O}=t;if($&&typeof k!="bigint"){if(k instanceof Uint8Array&&(k=ts(k)),typeof k!="string"||!$.includes(k.length))throw new Error("Invalid key");k=k.padStart(E*2,"0")}let R;try{R=typeof k=="bigint"?k:zt(Rt("private key",k,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof k}`)}return w&&(R=xt(R,O)),u(R),R}const h=new Map;function p(k){if(!(k instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor($,E,w){if(this.px=$,this.py=E,this.pz=w,$==null||!n.isValid($))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if(w==null||!n.isValid(w))throw new Error("z required")}static fromAffine($){const{x:E,y:w}=$||{};if(!$||!n.isValid(E)||!n.isValid(w))throw new Error("invalid affine point");if($ instanceof g)throw new Error("projective point not allowed");const O=R=>n.eql(R,n.ZERO);return O(E)&&O(w)?g.ZERO:new g(E,w,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ($){const E=n.invertBatch($.map(w=>w.pz));return $.map((w,O)=>w.toAffine(E[O])).map(g.fromAffine)}static fromHex($){const E=g.fromAffine(o(Rt("pointHex",$)));return E.assertValidity(),E}static fromPrivateKey($){return g.BASE.multiply(d($))}_setWindowSize($){this._WINDOW_SIZE=$,h.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:$,y:E}=this.toAffine();if(!n.isValid($)||!n.isValid(E))throw new Error("bad point: x or y not FE");const w=n.sqr(E),O=a($);if(!n.eql(w,O))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:$}=this.toAffine();if(n.isOdd)return!n.isOdd($);throw new Error("Field doesn't support isOdd")}equals($){p($);const{px:E,py:w,pz:O}=this,{px:R,py:I,pz:C}=$,A=n.eql(n.mul(E,C),n.mul(R,O)),j=n.eql(n.mul(w,C),n.mul(I,O));return A&&j}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:$,b:E}=t,w=n.mul(E,La),{px:O,py:R,pz:I}=this;let C=n.ZERO,A=n.ZERO,j=n.ZERO,N=n.mul(O,O),ne=n.mul(R,R),V=n.mul(I,I),J=n.mul(O,R);return J=n.add(J,J),j=n.mul(O,I),j=n.add(j,j),C=n.mul($,j),A=n.mul(w,V),A=n.add(C,A),C=n.sub(ne,A),A=n.add(ne,A),A=n.mul(C,A),C=n.mul(J,C),j=n.mul(w,j),V=n.mul($,V),J=n.sub(N,V),J=n.mul($,J),J=n.add(J,j),j=n.add(N,N),N=n.add(j,N),N=n.add(N,V),N=n.mul(N,J),A=n.add(A,N),V=n.mul(R,I),V=n.add(V,V),N=n.mul(V,J),C=n.sub(C,N),j=n.mul(V,ne),j=n.add(j,j),j=n.add(j,j),new g(C,A,j)}add($){p($);const{px:E,py:w,pz:O}=this,{px:R,py:I,pz:C}=$;let A=n.ZERO,j=n.ZERO,N=n.ZERO;const ne=t.a,V=n.mul(t.b,La);let J=n.mul(E,R),W=n.mul(w,I),Q=n.mul(O,C),se=n.add(E,w),q=n.add(R,I);se=n.mul(se,q),q=n.add(J,W),se=n.sub(se,q),q=n.add(E,O);let ee=n.add(R,C);return q=n.mul(q,ee),ee=n.add(J,Q),q=n.sub(q,ee),ee=n.add(w,O),A=n.add(I,C),ee=n.mul(ee,A),A=n.add(W,Q),ee=n.sub(ee,A),N=n.mul(ne,q),A=n.mul(V,Q),N=n.add(A,N),A=n.sub(W,N),N=n.add(W,N),j=n.mul(A,N),W=n.add(J,J),W=n.add(W,J),Q=n.mul(ne,Q),q=n.mul(V,q),W=n.add(W,Q),Q=n.sub(J,Q),Q=n.mul(ne,Q),q=n.add(q,Q),J=n.mul(W,q),j=n.add(j,J),J=n.mul(ee,q),A=n.mul(se,A),A=n.sub(A,J),J=n.mul(se,W),N=n.mul(ee,N),N=n.add(N,J),new g(A,j,N)}subtract($){return this.add($.negate())}is0(){return this.equals(g.ZERO)}wNAF($){return x.wNAFCached(this,h,$,E=>{const w=n.invertBatch(E.map(O=>O.pz));return E.map((O,R)=>O.toAffine(w[R])).map(g.fromAffine)})}multiplyUnsafe($){const E=g.ZERO;if($===Tn)return E;if(u($),$===bt)return this;const{endo:w}=t;if(!w)return x.unsafeLadder(this,$);let{k1neg:O,k1:R,k2neg:I,k2:C}=w.splitScalar($),A=E,j=E,N=this;for(;R>Tn||C>Tn;)R&bt&&(A=A.add(N)),C&bt&&(j=j.add(N)),N=N.double(),R>>=bt,C>>=bt;return O&&(A=A.negate()),I&&(j=j.negate()),j=new g(n.mul(j.px,w.beta),j.py,j.pz),A.add(j)}multiply($){u($);let E=$,w,O;const{endo:R}=t;if(R){const{k1neg:I,k1:C,k2neg:A,k2:j}=R.splitScalar(E);let{p:N,f:ne}=this.wNAF(C),{p:V,f:J}=this.wNAF(j);N=x.constTimeNegate(I,N),V=x.constTimeNegate(A,V),V=new g(n.mul(V.px,R.beta),V.py,V.pz),w=N.add(V),O=ne.add(J)}else{const{p:I,f:C}=this.wNAF(E);w=I,O=C}return g.normalizeZ([w,O])[0]}multiplyAndAddUnsafe($,E,w){const O=g.BASE,R=(C,A)=>A===Tn||A===bt||!C.equals(O)?C.multiplyUnsafe(A):C.multiply(A),I=R(this,E).add(R($,w));return I.is0()?void 0:I}toAffine($){const{px:E,py:w,pz:O}=this,R=this.is0();$==null&&($=R?n.ONE:n.inv(O));const I=n.mul(E,$),C=n.mul(w,$),A=n.mul(O,$);if(R)return{x:n.ZERO,y:n.ZERO};if(!n.eql(A,n.ONE))throw new Error("invZ was invalid");return{x:I,y:C}}isTorsionFree(){const{h:$,isTorsionFree:E}=t;if($===bt)return!0;if(E)return E(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:$,clearCofactor:E}=t;return $===bt?this:E?E(g,this):this.multiplyUnsafe(t.h)}toRawBytes($=!0){return this.assertValidity(),i(g,this,$)}toHex($=!0){return ts(this.toRawBytes($))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,x=s7(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function u7(e){const t=e1(e);return vs(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function d7(e){const t=u7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(q){return Tn<q&&q<n.ORDER}function u(q){return xt(q,i)}function d(q){return xu(q,i)}const{ProjectivePoint:h,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=c7({...t,toBytes(q,ee,he){const Y=ee.toAffine(),de=n.toBytes(Y.x),pe=sn;return he?pe(Uint8Array.from([ee.hasEvenY()?2:3]),de):pe(Uint8Array.from([4]),de,n.toBytes(Y.y))},fromBytes(q){const ee=q.length,he=q[0],Y=q.subarray(1);if(ee===o&&(he===2||he===3)){const de=zt(Y);if(!l(de))throw new Error("Point is not on curve");const pe=g(de);let we=n.sqrt(pe);const Te=(we&bt)===bt;return(he&1)===1!==Te&&(we=n.neg(we)),{x:de,y:we}}else if(ee===a&&he===4){const de=n.fromBytes(Y.subarray(0,n.BYTES)),pe=n.fromBytes(Y.subarray(n.BYTES,2*n.BYTES));return{x:de,y:pe}}else throw new Error(`Point of length ${ee} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),x=q=>ts(Wr(q,t.nByteLength));function k(q){const ee=i>>bt;return q>ee}function $(q){return k(q)?u(-q):q}const E=(q,ee,he)=>zt(q.slice(ee,he));class w{constructor(ee,he,Y){this.r=ee,this.s=he,this.recovery=Y,this.assertValidity()}static fromCompact(ee){const he=t.nByteLength;return ee=Rt("compactSignature",ee,he*2),new w(E(ee,0,he),E(ee,he,2*he))}static fromDER(ee){const{r:he,s:Y}=pi.toSig(Rt("DER",ee));return new w(he,Y)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(ee){return new w(this.r,this.s,ee)}recoverPublicKey(ee){const{r:he,s:Y,recovery:de}=this,pe=j(Rt("msgHash",ee));if(de==null||![0,1,2,3].includes(de))throw new Error("recovery id invalid");const we=de===2||de===3?he+t.n:he;if(we>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Te=de&1?"03":"02",Ve=h.fromHex(Te+x(we)),te=d(we),G=u(-pe*te),oe=u(Y*te),z=h.BASE.multiplyAndAddUnsafe(Ve,G,oe);if(!z)throw new Error("point at infinify");return z.assertValidity(),z}hasHighS(){return k(this.s)}normalizeS(){return this.hasHighS()?new w(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return ns(this.toDERHex())}toDERHex(){return pi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ns(this.toCompactHex())}toCompactHex(){return x(this.r)+x(this.s)}}const O={isValidPrivateKey(q){try{return p(q),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const q=t.randomBytes(n.BYTES+8),ee=r7(q,i);return Wr(ee,t.nByteLength)},precompute(q=8,ee=h.BASE){return ee._setWindowSize(q),ee.multiply(BigInt(3)),ee}};function R(q,ee=!0){return h.fromPrivateKey(q).toRawBytes(ee)}function I(q){const ee=q instanceof Uint8Array,he=typeof q=="string",Y=(ee||he)&&q.length;return ee?Y===o||Y===a:he?Y===2*o||Y===2*a:q instanceof h}function C(q,ee,he=!0){if(I(q))throw new Error("first arg must be private key");if(!I(ee))throw new Error("second arg must be public key");return h.fromHex(ee).multiply(p(q)).toRawBytes(he)}const A=t.bits2int||function(q){const ee=zt(q),he=q.length*8-t.nBitLength;return he>0?ee>>BigInt(he):ee},j=t.bits2int_modN||function(q){return u(A(q))},N=ad(t.nBitLength);function ne(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(Tn<=q&&q<N))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Wr(q,t.nByteLength)}function V(q,ee,he=J){if(["recovered","canonical"].some(re=>re in he))throw new Error("sign() legacy options not supported");const{hash:Y,randomBytes:de}=t;let{lowS:pe,prehash:we,extraEntropy:Te}=he;pe==null&&(pe=!0),q=Rt("msgHash",q),we&&(q=Rt("prehashed msgHash",Y(q)));const Ve=j(q),te=p(ee),G=[ne(te),ne(Ve)];if(Te!=null){const re=Te===!0?de(n.BYTES):Te;G.push(Rt("extraEntropy",re,n.BYTES))}const oe=sn(...G),z=Ve;function me(re){const ze=A(re);if(!v(ze))return;const ft=d(ze),it=h.BASE.multiply(ze).toAffine(),Le=u(it.x);if(Le===Tn)return;const Fe=u(ft*u(z+Le*te));if(Fe===Tn)return;let St=(it.x===Le?0:2)|Number(it.y&bt),_n=Fe;return pe&&k(Fe)&&(_n=$(Fe),St^=1),new w(Le,_n,St)}return{seed:oe,k2sig:me}}const J={lowS:t.lowS,prehash:!1},W={lowS:t.lowS,prehash:!1};function Q(q,ee,he=J){const{seed:Y,k2sig:de}=V(q,ee,he);return Jg(t.hash.outputLen,t.nByteLength,t.hmac)(Y,de)}h.BASE._setWindowSize(8);function se(q,ee,he,Y=W){const de=q;if(ee=Rt("msgHash",ee),he=Rt("publicKey",he),"strict"in Y)throw new Error("options.strict was renamed to lowS");const{lowS:pe,prehash:we}=Y;let Te,Ve;try{if(typeof de=="string"||de instanceof Uint8Array)try{Te=w.fromDER(de)}catch(it){if(!(it instanceof pi.Err))throw it;Te=w.fromCompact(de)}else if(typeof de=="object"&&typeof de.r=="bigint"&&typeof de.s=="bigint"){const{r:it,s:Le}=de;Te=new w(it,Le)}else throw new Error("PARSE");Ve=h.fromHex(he)}catch(it){if(it.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(pe&&Te.hasHighS())return!1;we&&(ee=t.hash(ee));const{r:te,s:G}=Te,oe=j(ee),z=d(G),me=u(oe*z),re=u(te*z),ze=h.BASE.multiplyAndAddUnsafe(Ve,me,re)?.toAffine();return ze?u(ze.x)===te:!1}return{CURVE:t,getPublicKey:R,getSharedSecret:C,sign:Q,verify:se,ProjectivePoint:h,Signature:w,utils:O}}function f7(e,t){const n=e.ORDER;let i=Tn;for(let v=n-bt;v%cr===Tn;v/=cr)i+=bt;const o=i,a=(n-bt)/cr**o,l=(a-bt)/cr,u=cr**o-bt,d=cr**(o-bt),h=e.pow(t,a),p=e.pow(t,(a+bt)/cr);let g=(v,x)=>{let k=h,$=e.pow(x,u),E=e.sqr($);E=e.mul(E,x);let w=e.mul(v,E);w=e.pow(w,l),w=e.mul(w,$),$=e.mul(w,x),E=e.mul(w,v);let O=e.mul(E,$);w=e.pow(O,d);let R=e.eql(w,e.ONE);$=e.mul(E,p),w=e.mul(O,k),E=e.cmov($,E,R),O=e.cmov(w,O,R);for(let I=o;I>bt;I--){let C=cr**(I-cr),A=e.pow(O,C);const j=e.eql(A,e.ONE);$=e.mul(E,k),k=e.mul(k,k),A=e.mul(O,k),E=e.cmov($,E,j),O=e.cmov(A,O,j)}return{isValid:R,value:E}};if(e.ORDER%Wp===La){const v=(e.ORDER-La)/Wp,x=e.sqrt(e.neg(t));g=(k,$)=>{let E=e.sqr($);const w=e.mul(k,$);E=e.mul(E,w);let O=e.pow(E,v);O=e.mul(O,w);const R=e.mul(O,x),I=e.mul(e.sqr(O),$),C=e.eql(I,k);let A=e.cmov(R,O,C);return{isValid:C,value:A}}}return g}function h7(e,t){if(Xg(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=f7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,h,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),h=e.sqr(u),d=e.mul(h,t.A),a=e.add(a,d),a=e.mul(a,l),h=e.mul(h,u),d=e.mul(h,t.B),a=e.add(a,d),p=e.mul(o,l);const{isValid:v,value:x}=n(a,h);g=e.mul(o,i),g=e.mul(g,x),p=e.cmov(p,l,v),g=e.cmov(g,x,v);const k=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,k),p=e.div(p,u),{x:p,y:g}}}function p7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return ml(e);throw new Error("DST must be Uint8Array or string")}const g7=zt;function zr(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function m7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Ys(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function cd(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function v7(e,t,n,i){Ys(e),Ys(t),cd(n),t.length>255&&(t=i(sn(ml("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=sn(t,zr(t.length,1)),d=zr(0,a),h=zr(n,2),p=new Array(l),g=i(sn(d,e,h,zr(0,1),u));p[0]=i(sn(g,zr(1,1),u));for(let x=1;x<=l;x++){const k=[m7(g,p[x-1]),zr(x+1,1),u];p[x]=i(sn(...k))}return sn(...p).slice(0,n)}function b7(e,t,n,i,o){if(Ys(e),Ys(t),cd(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(ml("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(zr(n,2)).update(t).update(zr(t.length,1)).digest()}function Zp(e,t,n){vs(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Ys(e),cd(t);const h=p7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),v=t*a*g;let x;if(u==="xmd")x=v7(e,h,v,l);else if(u==="xof")x=b7(e,h,v,o,l);else if(u==="_internal_pass")x=e;else throw new Error('expand must be "xmd" or "xof"');const k=new Array(t);for(let $=0;$<t;$++){const E=new Array(a);for(let w=0;w<a;w++){const O=g*(w+$*a),R=x.subarray(O,O+g);E[w]=xt(g7(R),i)}k[$]=E}return k}function y7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(h=>h.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function _7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=Zp(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=Zp(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class t1 extends id{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,fi.hash(t);const i=mo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return fi.exists(this),this.iHash.update(t),this}digestInto(t){fi.exists(this),fi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Pa=(e,t,n)=>new t1(e,t).update(n).digest();Pa.create=(e,t)=>new t1(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function w7(e){return{hash:e,hmac:(t,...n)=>Pa(e,t,hi(...n)),randomBytes:hl}}function x7(e,t){const n=i=>d7({...e,...w7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ma=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),n1=BigInt(1),Ba=BigInt(2),Vp=(e,t)=>(e+t/Ba)/t;function r1(e){const t=vl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),h=e*e*e%t,p=h*h*e%t,g=bn(p,n,t)*p%t,v=bn(g,n,t)*p%t,x=bn(v,Ba,t)*h%t,k=bn(x,o,t)*x%t,$=bn(k,a,t)*k%t,E=bn($,u,t)*$%t,w=bn(E,d,t)*E%t,O=bn(w,u,t)*$%t,R=bn(O,n,t)*p%t,I=bn(R,l,t)*k%t,C=bn(I,i,t)*h%t,A=bn(C,Ba,t);if(!Kr.eql(Kr.sqr(A),e))throw new Error("Cannot find square root");return A}const Kr=n7(vl,void 0,void 0,{sqrt:r1}),Dt=x7({a:BigInt(0),b:BigInt(7),Fp:Kr,n:Ma,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Ma,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-n1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Vp(a*e,t),d=Vp(-i*e,t);let h=xt(e-u*n-d*o,t),p=xt(-u*i-d*a,t);const g=h>l,v=p>l;if(g&&(h=t-h),v&&(p=t-p),h>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:h,k2neg:v,k2:p}}}},Hn),bl=BigInt(0),i1=e=>typeof e=="bigint"&&bl<e&&e<vl,$7=e=>typeof e=="bigint"&&bl<e&&e<Ma,Kp={};function ja(e,...t){let n=Kp[e];if(n===void 0){const i=Hn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=sn(i,i),Kp[e]=n}return Hn(sn(n,...t))}const ud=e=>e.toRawBytes(!0).slice(1),$u=e=>Wr(e,32),ru=e=>xt(e,vl),Js=e=>xt(e,Ma),dd=Dt.ProjectivePoint,k7=(e,t,n)=>dd.BASE.multiplyAndAddUnsafe(e,t,n);function ku(e){let t=Dt.utils.normPrivateKeyToScalar(e),n=dd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Js(-t),bytes:ud(n)}}function s1(e){if(!i1(e))throw new Error("bad x: need 0 < x < p");const t=ru(e*e),n=ru(t*e+BigInt(7));let i=r1(n);i%Ba!==bl&&(i=ru(-i));const o=new dd(e,i,n1);return o.assertValidity(),o}function o1(...e){return Js(zt(ja("BIP0340/challenge",...e)))}function E7(e){return ku(e).bytes}function C7(e,t,n=hl(32)){const i=Rt("message",e),{bytes:o,scalar:a}=ku(t),l=Rt("auxRand",n,32),u=$u(a^zt(ja("BIP0340/aux",l))),d=ja("BIP0340/nonce",u,o,i),h=Js(zt(d));if(h===bl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=ku(h),v=o1(p,o,i),x=new Uint8Array(64);if(x.set(p,0),x.set($u(Js(g+v*a)),32),!a1(x,i,o))throw new Error("sign: Invalid signature produced");return x}function a1(e,t,n){const i=Rt("signature",e,64),o=Rt("message",t),a=Rt("publicKey",n,32);try{const l=s1(zt(a)),u=zt(i.subarray(0,32));if(!i1(u))return!1;const d=zt(i.subarray(32,64));if(!$7(d))return!1;const h=o1($u(u),ud(l),o),p=k7(l,d,Js(-h));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const vo={getPublicKey:E7,sign:C7,verify:a1,utils:{randomPrivateKey:Dt.utils.randomPrivateKey,lift_x:s1,pointToBytes:ud,numberToBytesBE:Wr,bytesToNumberBE:zt,taggedHash:ja,mod:xt}},S7=y7(Kr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),T7=h7(Kr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Kr.create(BigInt("-11"))});_7(Dt.ProjectivePoint,e=>{const{x:t,y:n}=T7(Kr.create(e[0]));return S7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Kr.ORDER,m:1,k:128,expand:"xmd",hash:Hn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Jr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Pn(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Vn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Jr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Kn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function bo(e,t="="){if(Jr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function l1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Gp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Jr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const h=a[d],p=t*l+h;if(!Number.isSafeInteger(p)||t*l/t!==l||p-h!==t*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const c1=(e,t)=>t?c1(t,e%t):e,Ua=(e,t)=>e+(t-c1(e,t));function Eu(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ua(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Ua(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Jr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function u1(e){return Jr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Gp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Gp(t,e,2**8))}}}function wr(e,t=!1){if(Jr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Ua(8,e)>32||Ua(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Eu(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Eu(n,e,8,t))}}}function Qp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function d1(e,t){if(Jr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const A7={alphabet:Vn,chain:Pn,checksum:d1,radix:u1,radix2:wr,join:Kn,padding:bo},f1=Pn(wr(4),Vn("0123456789ABCDEF"),Kn("")),h1=Pn(wr(5),Vn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),bo(5),Kn("")),I7=Pn(wr(5),Vn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),bo(5),Kn("")),R7=Pn(wr(5),Vn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Kn(""),l1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),rs=Pn(wr(6),Vn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),bo(6),Kn("")),p1=Pn(wr(6),Vn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),bo(6),Kn("")),fd=e=>Pn(u1(58),Vn(e),Kn("")),Xs=fd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),O7=fd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),L7=fd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Yp=[0,2,3,5,6,7,9,10,11],g1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Xs.encode(i).padStart(Yp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Yp.indexOf(i.length),a=Xs.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},m1=e=>Pn(d1(4,t=>e(e(t))),Xs),Cu=Pn(Vn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Kn("")),Jp=[996825010,642813549,513874426,1027748829,705979059];function Fs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Jp.length;i++)(t>>i&1)===1&&(n^=Jp[i]);return n}function Xp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=Fs(o)^l>>5}o=Fs(o);for(let a=0;a<i;a++)o=Fs(o)^e.charCodeAt(a)&31;for(let a of t)o=Fs(o)^a;for(let a=0;a<6;a++)o=Fs(o);return o^=n,Cu.encode(Eu([o%2**30],30,5,!1))}function v1(e){const t=e==="bech32"?1:734539939,n=wr(5),i=n.decode,o=n.encode,a=Qp(i);function l(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const x=p.length+7+g.length;if(v!==!1&&x>v)throw new TypeError(`Length ${x} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${Cu.encode(g)}${Xp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const x=p.lastIndexOf("1");if(x===0||x===-1)throw new Error('Letter "1" must be present between prefix and data only');const k=p.slice(0,x),$=p.slice(x+1);if($.length<6)throw new Error("Data must be at least 6 characters long");const E=Cu.decode($).slice(0,-6),w=Xp(k,E,t);if(!$.endsWith(w))throw new Error(`Invalid checksum in ${p}: expected "${w}"`);return{prefix:k,words:E}}const d=Qp(u);function h(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:h,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Ht=v1("bech32"),P7=v1("bech32m"),b1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},y1=Pn(wr(4),Vn("0123456789abcdef"),Kn(""),l1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),eo={utf8:b1,hex:y1,base16:f1,base32:h1,base64:rs,base64url:p1,base58:Xs,base58xmr:g1},_1=`Invalid encoding type. Available types: ${Object.keys(eo).join(", ")}`,w1=(e,t)=>{if(typeof e!="string"||!eo.hasOwnProperty(e))throw new TypeError(_1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return eo[e].encode(t)},M7=w1,x1=(e,t)=>{if(!eo.hasOwnProperty(e))throw new TypeError(_1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return eo[e].decode(t)},B7=x1,j7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Jr,base16:f1,base32:h1,base32crockford:R7,base32hex:I7,base58:Xs,base58check:m1,base58flickr:O7,base58xmr:g1,base58xrp:L7,base64:rs,base64url:p1,bech32:Ht,bech32m:P7,bytes:B7,bytesToString:w1,hex:y1,str:M7,stringToBytes:x1,utf8:b1,utils:A7},Symbol.toStringTag,{value:"Module"}));var hd={};Object.defineProperty(hd,"__esModule",{value:!0});var pd=hd.wordlist=void 0;pd=hd.wordlist=`abandon
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
`);var on={},kt={};Object.defineProperty(kt,"__esModule",{value:!0});kt.output=kt.exists=kt.hash=Gi=kt.bytes=kt.bool=kt.number=void 0;function Na(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}kt.number=Na;function $1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}kt.bool=$1;function gd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Gi=kt.bytes=gd;function k1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Na(e.outputLen),Na(e.blockLen)}kt.hash=k1;function E1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}kt.exists=E1;function C1(e,t){gd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}kt.output=C1;const U7={number:Na,bool:$1,bytes:gd,hash:k1,exists:E1,output:C1};kt.default=U7;var is={},S1={},yo={};const N7=al(k6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=N7,n=I=>new Uint8Array(I.buffer,I.byteOffset,I.byteLength);e.u8=n;const i=I=>new Uint32Array(I.buffer,I.byteOffset,Math.floor(I.byteLength/4));e.u32=i;const o=I=>new DataView(I.buffer,I.byteOffset,I.byteLength);e.createView=o;const a=(I,C)=>I<<32-C|I>>>C;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(I,C)=>C.toString(16).padStart(2,"0"));function u(I){if(!(I instanceof Uint8Array))throw new Error("Uint8Array expected");let C="";for(let A=0;A<I.length;A++)C+=l[I[A]];return C}e.bytesToHex=u;function d(I){if(typeof I!="string")throw new TypeError("hexToBytes: expected string, got "+typeof I);if(I.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const C=new Uint8Array(I.length/2);for(let A=0;A<C.length;A++){const j=A*2,N=I.slice(j,j+2),ne=Number.parseInt(N,16);if(Number.isNaN(ne)||ne<0)throw new Error("Invalid byte sequence");C[A]=ne}return C}e.hexToBytes=d;const h=async()=>{};e.nextTick=h;async function p(I,C,A){let j=Date.now();for(let N=0;N<I;N++){A(N);const ne=Date.now()-j;ne>=0&&ne<C||(await(0,e.nextTick)(),j+=ne)}}e.asyncLoop=p;function g(I){if(typeof I!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof I}`);return new TextEncoder().encode(I)}e.utf8ToBytes=g;function v(I){if(typeof I=="string"&&(I=g(I)),!(I instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof I})`);return I}e.toBytes=v;function x(...I){if(!I.every(j=>j instanceof Uint8Array))throw new Error("Uint8Array list expected");if(I.length===1)return I[0];const C=I.reduce((j,N)=>j+N.length,0),A=new Uint8Array(C);for(let j=0,N=0;j<I.length;j++){const ne=I[j];A.set(ne,N),N+=ne.length}return A}e.concatBytes=x;class k{clone(){return this._cloneInto()}}e.Hash=k;const $=I=>Object.prototype.toString.call(I)==="[object Object]"&&I.constructor===Object;function E(I,C){if(C!==void 0&&(typeof C!="object"||!$(C)))throw new TypeError("Options should be object or undefined");return Object.assign(I,C)}e.checkOpts=E;function w(I){const C=j=>I().update(v(j)).digest(),A=I();return C.outputLen=A.outputLen,C.blockLen=A.blockLen,C.create=()=>I(),C}e.wrapConstructor=w;function O(I){const C=(j,N)=>I(N).update(v(j)).digest(),A=I({});return C.outputLen=A.outputLen,C.blockLen=A.blockLen,C.create=j=>I(j),C}e.wrapConstructorWithOpts=O;function R(I=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(I));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=R})(yo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=kt,n=yo;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const h=this.blockLen,p=new Uint8Array(h);p.set(d.length>h?l.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=l.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:h,destroyed:p,blockLen:g,outputLen:v}=this;return l=l,l.finished=h,l.destroyed=p,l.blockLen=g,l.outputLen=v,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(S1);Object.defineProperty(is,"__esModule",{value:!0});is.pbkdf2Async=is.pbkdf2=void 0;const pa=kt,D7=S1,Yi=yo;function T1(e,t,n,i){pa.default.hash(e);const o=(0,Yi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(pa.default.number(a),pa.default.number(l),pa.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Yi.toBytes)(t),h=(0,Yi.toBytes)(n),p=new Uint8Array(l),g=D7.hmac.create(e,d),v=g._cloneInto().update(h);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function A1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function z7(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=T1(e,t,n,i);let h;const p=new Uint8Array(4),g=(0,Yi.createView)(p),v=new Uint8Array(u.outputLen);for(let x=1,k=0;k<a;x++,k+=u.outputLen){const $=l.subarray(k,k+u.outputLen);g.setInt32(0,x,!1),(h=d._cloneInto(h)).update(p).digestInto(v),$.set(v.subarray(0,$.length));for(let E=1;E<o;E++){u._cloneInto(h).update(v).digestInto(v);for(let w=0;w<$.length;w++)$[w]^=v[w]}}return A1(u,d,l,h,v)}is.pbkdf2=z7;async function H7(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:h}=T1(e,t,n,i);let p;const g=new Uint8Array(4),v=(0,Yi.createView)(g),x=new Uint8Array(d.outputLen);for(let k=1,$=0;$<a;k++,$+=d.outputLen){const E=u.subarray($,$+d.outputLen);v.setInt32(0,k,!1),(p=h._cloneInto(p)).update(g).digestInto(x),E.set(x.subarray(0,E.length)),await(0,Yi.asyncLoop)(o-1,l,w=>{d._cloneInto(p).update(x).digestInto(x);for(let O=0;O<E.length;O++)E[O]^=x[O]})}return A1(d,h,u,p,x)}is.pbkdf2Async=H7;const F7=al(N6);var yn={},yl={};Object.defineProperty(yl,"__esModule",{value:!0});yl.SHA2=void 0;const iu=kt,qs=yo;function q7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+h,u,i)}class W7 extends qs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,qs.createView)(this.buffer)}update(t){iu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,qs.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,qs.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){iu.default.exists(this),iu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;q7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,qs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}yl.SHA2=W7;var I1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(V,J=!1){return J?{h:Number(V&t),l:Number(V>>n&t)}:{h:Number(V>>n&t)|0,l:Number(V&t)|0}}e.fromBig=i;function o(V,J=!1){let W=new Uint32Array(V.length),Q=new Uint32Array(V.length);for(let se=0;se<V.length;se++){const{h:q,l:ee}=i(V[se],J);[W[se],Q[se]]=[q,ee]}return[W,Q]}e.split=o;const a=(V,J)=>BigInt(V>>>0)<<n|BigInt(J>>>0);e.toBig=a;const l=(V,J,W)=>V>>>W,u=(V,J,W)=>V<<32-W|J>>>W,d=(V,J,W)=>V>>>W|J<<32-W,h=(V,J,W)=>V<<32-W|J>>>W,p=(V,J,W)=>V<<64-W|J>>>W-32,g=(V,J,W)=>V>>>W-32|J<<64-W,v=(V,J)=>J,x=(V,J)=>V,k=(V,J,W)=>V<<W|J>>>32-W,$=(V,J,W)=>J<<W|V>>>32-W,E=(V,J,W)=>J<<W-32|V>>>64-W,w=(V,J,W)=>V<<W-32|J>>>64-W;function O(V,J,W,Q){const se=(J>>>0)+(Q>>>0);return{h:V+W+(se/2**32|0)|0,l:se|0}}e.add=O;const R=(V,J,W)=>(V>>>0)+(J>>>0)+(W>>>0),I=(V,J,W,Q)=>J+W+Q+(V/2**32|0)|0,C=(V,J,W,Q)=>(V>>>0)+(J>>>0)+(W>>>0)+(Q>>>0),A=(V,J,W,Q,se)=>J+W+Q+se+(V/2**32|0)|0,j=(V,J,W,Q,se)=>(V>>>0)+(J>>>0)+(W>>>0)+(Q>>>0)+(se>>>0),N=(V,J,W,Q,se,q)=>J+W+Q+se+q+(V/2**32|0)|0,ne={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:h,rotrBH:p,rotrBL:g,rotr32H:v,rotr32L:x,rotlSH:k,rotlSL:$,rotlBH:E,rotlBL:w,add:O,add3L:R,add3H:I,add4L:C,add4H:A,add5H:N,add5L:j};e.default=ne})(I1);Object.defineProperty(yn,"__esModule",{value:!0});yn.sha384=yn.sha512_256=yn.sha512_224=Su=yn.sha512=yn.SHA512=void 0;const Z7=yl,Oe=I1,_l=yo,[V7,K7]=Oe.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Nr=new Uint32Array(80),Dr=new Uint32Array(80);class _o extends Z7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:h,El:p,Fh:g,Fl:v,Gh:x,Gl:k,Hh:$,Hl:E}=this;return[t,n,i,o,a,l,u,d,h,p,g,v,x,k,$,E]}set(t,n,i,o,a,l,u,d,h,p,g,v,x,k,$,E){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=h|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=x|0,this.Gl=k|0,this.Hh=$|0,this.Hl=E|0}process(t,n){for(let R=0;R<16;R++,n+=4)Nr[R]=t.getUint32(n),Dr[R]=t.getUint32(n+=4);for(let R=16;R<80;R++){const I=Nr[R-15]|0,C=Dr[R-15]|0,A=Oe.default.rotrSH(I,C,1)^Oe.default.rotrSH(I,C,8)^Oe.default.shrSH(I,C,7),j=Oe.default.rotrSL(I,C,1)^Oe.default.rotrSL(I,C,8)^Oe.default.shrSL(I,C,7),N=Nr[R-2]|0,ne=Dr[R-2]|0,V=Oe.default.rotrSH(N,ne,19)^Oe.default.rotrBH(N,ne,61)^Oe.default.shrSH(N,ne,6),J=Oe.default.rotrSL(N,ne,19)^Oe.default.rotrBL(N,ne,61)^Oe.default.shrSL(N,ne,6),W=Oe.default.add4L(j,J,Dr[R-7],Dr[R-16]),Q=Oe.default.add4H(W,A,V,Nr[R-7],Nr[R-16]);Nr[R]=Q|0,Dr[R]=W|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:h,Dl:p,Eh:g,El:v,Fh:x,Fl:k,Gh:$,Gl:E,Hh:w,Hl:O}=this;for(let R=0;R<80;R++){const I=Oe.default.rotrSH(g,v,14)^Oe.default.rotrSH(g,v,18)^Oe.default.rotrBH(g,v,41),C=Oe.default.rotrSL(g,v,14)^Oe.default.rotrSL(g,v,18)^Oe.default.rotrBL(g,v,41),A=g&x^~g&$,j=v&k^~v&E,N=Oe.default.add5L(O,C,j,K7[R],Dr[R]),ne=Oe.default.add5H(N,w,I,A,V7[R],Nr[R]),V=N|0,J=Oe.default.rotrSH(i,o,28)^Oe.default.rotrBH(i,o,34)^Oe.default.rotrBH(i,o,39),W=Oe.default.rotrSL(i,o,28)^Oe.default.rotrBL(i,o,34)^Oe.default.rotrBL(i,o,39),Q=i&a^i&u^a&u,se=o&l^o&d^l&d;w=$|0,O=E|0,$=x|0,E=k|0,x=g|0,k=v|0,{h:g,l:v}=Oe.default.add(h|0,p|0,ne|0,V|0),h=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const q=Oe.default.add3L(V,W,se);i=Oe.default.add3H(q,ne,J,Q),o=q|0}({h:i,l:o}=Oe.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Oe.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Oe.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h,l:p}=Oe.default.add(this.Dh|0,this.Dl|0,h|0,p|0),{h:g,l:v}=Oe.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:x,l:k}=Oe.default.add(this.Fh|0,this.Fl|0,x|0,k|0),{h:$,l:E}=Oe.default.add(this.Gh|0,this.Gl|0,$|0,E|0),{h:w,l:O}=Oe.default.add(this.Hh|0,this.Hl|0,w|0,O|0),this.set(i,o,a,l,u,d,h,p,g,v,x,k,$,E,w,O)}roundClean(){Nr.fill(0),Dr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}yn.SHA512=_o;class G7 extends _o{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Q7 extends _o{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class Y7 extends _o{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Su=yn.sha512=(0,_l.wrapConstructor)(()=>new _o);yn.sha512_224=(0,_l.wrapConstructor)(()=>new G7);yn.sha512_256=(0,_l.wrapConstructor)(()=>new Q7);yn.sha384=(0,_l.wrapConstructor)(()=>new Y7);const J7=al(O6),X7=al(j7);Object.defineProperty(on,"__esModule",{value:!0});var R1=on.mnemonicToSeedSync=on.mnemonicToSeed=z1=on.validateMnemonic=on.entropyToMnemonic=on.mnemonicToEntropy=j1=on.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const O1=kt,L1=is,ek=F7,P1=yn,tk=J7,ga=X7,nk=e=>e[0]==="あいこくしん";function M1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function md(e){const t=M1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function B1(e){O1.default.bytes(e,16,20,24,28,32)}function rk(e,t=128){if(O1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return D1((0,tk.randomBytes)(t/8),e)}var j1=on.generateMnemonic=rk;const ik=e=>{const t=8-e.length/4;return new Uint8Array([(0,ek.sha256)(e)[0]>>t<<t])};function U1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),ga.utils.chain(ga.utils.checksum(1,ik),ga.utils.radix2(11,!0),ga.utils.alphabet(e))}function N1(e,t){const{words:n}=md(e),i=U1(t).decode(n);return B1(i),i}on.mnemonicToEntropy=N1;function D1(e,t){return B1(e),U1(t).encode(e).join(nk(t)?"　":" ")}on.entropyToMnemonic=D1;function sk(e,t){try{N1(e,t)}catch{return!1}return!0}var z1=on.validateMnemonic=sk;const H1=e=>M1(`mnemonic${e}`);function ok(e,t=""){return(0,L1.pbkdf2Async)(P1.sha512,md(e).nfkd,H1(t),{c:2048,dkLen:64})}on.mnemonicToSeed=ok;function ak(e,t=""){return(0,L1.pbkdf2)(P1.sha512,md(e).nfkd,H1(t),{c:2048,dkLen:64})}R1=on.mnemonicToSeedSync=ak;const lk=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),F1=Uint8Array.from({length:16},(e,t)=>t),ck=F1.map(e=>(9*e+5)%16);let vd=[F1],bd=[ck];for(let e=0;e<4;e++)for(let t of[vd,bd])t.push(t[e].map(n=>lk[n]));const q1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),uk=vd.map((e,t)=>e.map(n=>q1[t][n])),dk=bd.map((e,t)=>e.map(n=>q1[t][n])),fk=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),hk=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ma=(e,t)=>e<<t|e>>>32-t;function e0(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const va=new Uint32Array(16);class pk extends Vg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let x=0;x<16;x++,n+=4)va[x]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,h=this.h3|0,p=h,g=this.h4|0,v=g;for(let x=0;x<5;x++){const k=4-x,$=fk[x],E=hk[x],w=vd[x],O=bd[x],R=uk[x],I=dk[x];for(let C=0;C<16;C++){const A=ma(i+e0(x,a,u,h)+va[w[C]]+$,R[C])+g|0;i=g,g=h,h=ma(u,10)|0,u=a,a=A}for(let C=0;C<16;C++){const A=ma(o+e0(k,l,d,p)+va[O[C]]+E,I[C])+v|0;o=v,v=p,p=ma(d,10)|0,d=l,l=A}}this.set(this.h1+u+p|0,this.h2+h+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){va.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const gk=fl(()=>new pk),ba=Dt.ProjectivePoint,su=m1(Hn);function t0(e){return BigInt(`0x${rn(e)}`)}function mk(e){return Vr(e.toString(16).padStart(64,"0"))}const vk=rd("Bitcoin seed"),ou={private:76066276,public:76067358},au=2147483648,bk=e=>gk(Hn(e)),yk=e=>mi(e).getUint32(0,!1),ya=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return mi(t).setUint32(0,e,!1),t};class di{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return yk(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return su.encode(this.serialize(this.versions.private,hi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return su.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=ou){if(Gi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Pa(Su,vk,t);return new di({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=ou){const i=su.decode(t),o=mi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new di({...l,privateKey:u.slice(1)}):new di({...l,publicKey:u})}static fromJSON(t){return di.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||ou,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Dt.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:t0(t.privateKey),this.privKeyBytes=mk(this.privKey),this.pubKey=Dt.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ba.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=bk(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=au)throw new Error("Invalid index");a[2]==="'"&&(l+=au),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ya(t);if(t>=au){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=hi(new Uint8Array([0]),u,n)}else n=hi(this.pubKey,n);const i=Pa(Su,this.chainCode,n),o=t0(i.slice(0,32)),a=i.slice(32);if(!Dt.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=xt(this.privKey+o,Dt.CURVE.n);if(!Dt.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=ba.fromHex(this.pubKey).add(ba.fromPrivateKey(o));if(u.equals(ba.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new di(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Gi(t,32),Dt.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Gi(t,32),Gi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Dt.Signature.fromCompact(n)}catch{return!1}return Dt.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Gi(n,33),hi(ya(t),new Uint8Array([this.depth]),ya(this.parentFingerprint),ya(this.index),this.chainCode,n)}}var _k=Object.defineProperty,Bt=(e,t)=>{for(var n in t)_k(e,n,{get:t[n],enumerable:!0})};function W1(e){return rn(vo.getPublicKey(e))}var Z1={};Bt(Z1,{MessageNode:()=>V1,MessageQueue:()=>K1,insertEventIntoAscendingList:()=>xk,insertEventIntoDescendingList:()=>wk,normalizeURL:()=>Tu,utf8Decoder:()=>Hr,utf8Encoder:()=>Fn});var Hr=new TextDecoder("utf-8"),Fn=new TextEncoder;function Tu(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function wk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function xk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var V1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},K1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new V1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},dt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.ProfileBadge=30008]="ProfileBadge",e[e.BadgeDefinition=30009]="BadgeDefinition",e[e.Article=30023]="Article",e))(dt||{});function G1(e,t){let n=e;return n.pubkey=W1(t),n.id=wl(n),n.sig=Ek(n,t),n}function $k(e){if(!yd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function wl(e){let t=Hn(Fn.encode($k(e)));return rn(t)}var kk=e=>e instanceof Object;function yd(e){if(!kk(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function _d(e){try{return vo.verify(e.sig,wl(e),e.pubkey)}catch{return!1}}function Ek(e,t){return rn(vo.sign(wl(e),t))}function Ck(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function Sk(e,t){for(let n=0;n<e.length;n++)if(Ck(e[n],t))return!0;return!1}var Tk={};Bt(Tk,{getHex64:()=>xl,getInt:()=>Q1,getSubscriptionId:()=>Y1,matchEventId:()=>Ak,matchEventKind:()=>Rk,matchEventPubkey:()=>Ik});function xl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function Q1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function Y1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function Ak(e,t){return t===xl(e,"id")}function Ik(e,t){return t===xl(e,"pubkey")}function Rk(e,t){return t===Q1(e,"kind")}var n0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function Ok(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=n0(),d={},h={},p;async function g(){return p||(p=new Promise((w,O)=>{try{a=new WebSocket(e)}catch(A){O(A)}a.onopen=()=>{u.connect.forEach(A=>A()),w()},a.onerror=()=>{p=void 0,u.error.forEach(A=>A()),O()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(A=>A())};let R=new K1,I;a.onmessage=A=>{R.enqueue(A.data),I||(I=setInterval(C,0))};function C(){if(R.size===0){clearInterval(I),I=null;return}var A=R.dequeue();if(!A)return;let j=Y1(A);if(j){let N=l[j];if(N&&N.alreadyHaveEvent&&N.alreadyHaveEvent(xl(A,"id"),e))return}try{let N=JSON.parse(A);switch(N[0]){case"EVENT":{let W=N[1],Q=N[2];yd(Q)&&l[W]&&(l[W].skipVerification||_d(Q))&&Sk(l[W].filters,Q)&&(l[W],(d[W]?.event||[]).forEach(se=>se(Q)));return}case"COUNT":let ne=N[1],V=N[2];l[ne]&&(d[ne]?.count||[]).forEach(W=>W(V));return;case"EOSE":{let W=N[1];W in d&&(d[W].eose.forEach(Q=>Q()),d[W].eose=[]);return}case"OK":{let W=N[1],Q=N[2],se=N[3]||"";W in h&&(Q?h[W].ok.forEach(q=>q()):h[W].failed.forEach(q=>q(se)),h[W].ok=[],h[W].failed=[]);return}case"NOTICE":let J=N[1];u.notice.forEach(W=>W(J));return;case"AUTH":{let W=N[1];u.auth?.forEach(Q=>Q(W));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function x(){v()||await g()}async function k(w){let O=JSON.stringify(w);if(!(!v()&&(await new Promise(R=>setTimeout(R,1e3)),!v())))try{a.send(O)}catch(R){console.log(R)}}const $=(w,{verb:O="REQ",skipVerification:R=!1,alreadyHaveEvent:I=null,id:C=Math.random().toString().slice(2)}={})=>{let A=C;return l[A]={id:A,filters:w,skipVerification:R,alreadyHaveEvent:I},k([O,A,...w]),{sub:(j,N={})=>$(j||w,{skipVerification:N.skipVerification||R,alreadyHaveEvent:N.alreadyHaveEvent||I,id:A}),unsub:()=>{delete l[A],delete d[A],k(["CLOSE",A])},on:(j,N)=>{d[A]=d[A]||{event:[],count:[],eose:[]},d[A][j].push(N)},off:(j,N)=>{let ne=d[A],V=ne[j].indexOf(N);V>=0&&ne[j].splice(V,1)}}};function E(w,O){if(!w.id)throw new Error(`event ${w} has no id`);let R=w.id;return k([O,w]),{on:(I,C)=>{h[R]=h[R]||{ok:[],failed:[]},h[R][I].push(C)},off:(I,C)=>{let A=h[R];if(!A)return;let j=A[I].indexOf(C);j>=0&&A[I].splice(j,1)}}}return{url:e,sub:$,on:(w,O)=>{u[w].push(O),w==="connect"&&a?.readyState===1&&O()},off:(w,O)=>{let R=u[w].indexOf(O);R!==-1&&u[w].splice(R,1)},list:(w,O)=>new Promise(R=>{let I=$(w,O),C=[],A=setTimeout(()=>{I.unsub(),R(C)},n);I.on("eose",()=>{I.unsub(),clearTimeout(A),R(C)}),I.on("event",j=>{C.push(j)})}),get:(w,O)=>new Promise(R=>{let I=$([w],O),C=setTimeout(()=>{I.unsub(),R(null)},i);I.on("event",A=>{I.unsub(),clearTimeout(C),R(A)})}),count:w=>new Promise(O=>{let R=$(w,{...$,verb:"COUNT"}),I=setTimeout(()=>{R.unsub(),O(null)},o);R.on("count",C=>{R.unsub(),clearTimeout(I),O(C)})}),publish(w){return E(w,"EVENT")},auth(w){return E(w,"AUTH")},connect:x,close(){u=n0(),d={},h={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var Lk=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Tu(t)];n&&n.close()})}async ensureRelay(e){const t=Tu(e);this._conn[t]||(this._conn[t]=Ok(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,x)=>{if(n?.alreadyHaveEvent?.(v,x))return!0;let k=this._seenOn[v]||new Set;return k.add(x),this._seenOn[v]=k,i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,h=!1,p=setTimeout(()=>{h=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let x;try{x=await this.ensureRelay(v)}catch{$();return}if(!x)return;let k=x.sub(t,o);k.on("event",E=>{i.add(E.id);for(let w of l.values())w(E)}),k.on("eose",()=>{h||$()}),a.push(k);function $(){if(d--,d===0){clearTimeout(p);for(let E of u.values())E()}}});let g={sub(v,x){return a.forEach(k=>k.sub(v,x)),g},unsub(){a.forEach(v=>v.unsub())},on(v,x){v==="event"?l.add(x):v==="eose"&&u.add(x)},off(v,x){v==="event"?l.delete(x):v==="eose"&&u.delete(x)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],h=()=>a(l);i.set(a,h),d.on(o,h)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},wo={};Bt(wo,{BECH32_REGEX:()=>J1,decode:()=>$l,naddrEncode:()=>Nk,neventEncode:()=>Uk,noteEncode:()=>Bk,nprofileEncode:()=>jk,npubEncode:()=>Mk,nrelayEncode:()=>Dk,nsecEncode:()=>Pk});var bs=5e3,J1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function $l(e){let{prefix:t,words:n}=Ht.decode(e,bs),i=new Uint8Array(Ht.fromWords(n));switch(t){case"nprofile":{let o=_a(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:rn(o[0][0]),relays:o[1]?o[1].map(a=>Hr.decode(a)):[]}}}case"nevent":{let o=_a(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:rn(o[0][0]),relays:o[1]?o[1].map(a=>Hr.decode(a)):[],author:o[2]?.[0]?rn(o[2][0]):void 0}}}case"naddr":{let o=_a(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Hr.decode(o[0][0]),pubkey:rn(o[2][0]),kind:parseInt(rn(o[3][0]),16),relays:o[1]?o[1].map(a=>Hr.decode(a)):[]}}}case"nrelay":{let o=_a(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Hr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:rn(i)};default:throw new Error(`unknown prefix ${t}`)}}function _a(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function Pk(e){return wd("nsec",e)}function Mk(e){return wd("npub",e)}function Bk(e){return wd("note",e)}function wd(e,t){let n=Vr(t),i=Ht.toWords(n);return Ht.encode(e,i,bs)}function jk(e){let t=kl({0:[Vr(e.pubkey)],1:(e.relays||[]).map(i=>Fn.encode(i))}),n=Ht.toWords(t);return Ht.encode("nprofile",n,bs)}function Uk(e){let t=kl({0:[Vr(e.id)],1:(e.relays||[]).map(i=>Fn.encode(i)),2:e.author?[Vr(e.author)]:[]}),n=Ht.toWords(t);return Ht.encode("nevent",n,bs)}function Nk(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=kl({0:[Fn.encode(e.identifier)],1:(e.relays||[]).map(o=>Fn.encode(o)),2:[Vr(e.pubkey)],3:[new Uint8Array(t)]}),i=Ht.toWords(n);return Ht.encode("naddr",i,bs)}function Dk(e){let t=kl({0:[Fn.encode(e)]}),n=Ht.toWords(t);return Ht.encode("nrelay",n,bs)}function kl(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),hi(...t)}var zk={};Bt(zk,{decrypt:()=>Fk,encrypt:()=>Hk});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function Hk(e,t,n){const i=Dt.getSharedSecret(e,"02"+t),o=X1(i);let a=Uint8Array.from(hl(16)),l=Fn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),h=rs.encode(new Uint8Array(d)),p=rs.encode(new Uint8Array(a.buffer));return`${h}?iv=${p}`}async function Fk(e,t,n){let[i,o]=n.split("?iv="),a=Dt.getSharedSecret(e,"02"+t),l=X1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=rs.decode(i),h=rs.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:h},u,d);return Hr.decode(p)}function X1(e){return e.slice(1,33)}var em={};Bt(em,{NIP05_REGEX:()=>tm,queryProfile:()=>Zk,searchDomain:()=>Wk,useFetchImplementation:()=>qk});var tm=/^(?:([\w.+-]+)@)?([\w.-]+)$/,El;try{El=fetch}catch{}function qk(e){El=e}async function Wk(e,t=""){try{return(await(await El(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function Zk(e){const t=e.match(tm);if(!t)return null;const[n,i="_",o]=t;try{const a=await El(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=Vk(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function Vk(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var Kk={};Bt(Kk,{generateSeedWords:()=>Qk,privateKeyFromSeedWords:()=>Gk,validateWords:()=>Yk});function Gk(e,t){let i=di.fromMasterSeed(R1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return rn(i)}function Qk(){return j1(pd)}function Yk(e){return z1(e,pd)}var Jk={};Bt(Jk,{parse:()=>Xk});function Xk(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,h={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=h;continue}if(d==="reply"){t.reply=h;continue}if(d==="mention"){t.mentions.push(h);continue}if(p){t.root=h;continue}if(g){t.reply=h;continue}t.mentions.push(h)}return t}var e9={};Bt(e9,{getPow:()=>t9});function t9(e){return n9(Vr(e))}function n9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=r9(e[n]),t+=i,i===8);n++);return t}function r9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var i9={};Bt(i9,{finishRepostEvent:()=>s9,getRepostedEvent:()=>o9,getRepostedEventPointer:()=>nm});function s9(e,t,n,i){return G1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function nm(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function o9(e,{skipVerification:t}={}){const n=nm(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!_d(i)))return i}var a9={};Bt(a9,{NOSTR_URI_REGEX:()=>Cl,parse:()=>c9,test:()=>l9});var Cl=new RegExp(`nostr:(${J1.source})`);function l9(e){return typeof e=="string"&&new RegExp(`^${Cl.source}$`).test(e)}function c9(e){const t=e.match(new RegExp(`^${Cl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:$l(t[1])}}var u9={};Bt(u9,{finishReactionEvent:()=>d9,getReactedEventPointer:()=>f9});function d9(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return G1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function f9(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var h9={};Bt(h9,{createDelegation:()=>p9,getDelegator:()=>g9});function p9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Hn(Fn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=rn(vo.sign(o,e));return{from:W1(e),to:t.pubkey,cond:i,sig:a}}function g9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,h,p]=a[u].split(/\b/);if(!(d==="kind"&&h==="="&&e.kind===parseInt(p))){if(d==="created_at"&&h==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&h===">"&&e.created_at>parseInt(p))continue;return null}}let l=Hn(Fn.encode(`nostr:delegation:${e.pubkey}:${i}`));return vo.verify(o,l,n)?n:null}var m9={};Bt(m9,{matchAll:()=>v9,regex:()=>xd,replaceAll:()=>b9});var xd=()=>new RegExp(`\\b${Cl.source}\\b`,"g");function*v9(e){const t=e.matchAll(xd());for(const n of t)try{const[i,o]=n;yield{uri:i,value:o,decoded:$l(o),start:n.index,end:n.index+i.length}}catch{}}function b9(e,t){return e.replaceAll(xd(),(n,i)=>t({uri:n,value:i,decoded:$l(i)}))}var y9={};Bt(y9,{useFetchImplementation:()=>_9,validateGithub:()=>w9});var $d;try{$d=fetch}catch{}function _9(e){$d=e}async function w9(e,t,n){try{return await(await $d(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var x9={};Bt(x9,{authenticate:()=>$9});var $9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},k9={};Bt(k9,{getZapEndpoint:()=>C9,makeZapReceipt:()=>A9,makeZapRequest:()=>S9,useFetchImplementation:()=>E9,validateZapRequest:()=>T9});var kd;try{kd=fetch}catch{}function E9(e){kd=e}async function C9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=Ht.decode(n,1e3),u=Ht.fromWords(l);t=Hr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await kd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function S9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function T9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!yd(t))return"Zap request is not a valid Nostr event.";if(!_d(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function A9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const I9=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),rm=(e={})=>(()=>{const t=I9();return Ge(t,e,!0,!0),t})(),R9=B('<button class="text-blue-500 underline">'),{noteEncode:O9,neventEncode:L9}=wo,P9=e=>{try{return O9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},M9=e=>{try{return L9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},to=e=>(()=>{const t=R9();return S(t,y(le,{get when(){return e.kind==null||e.kind===dt.Text},get fallback(){return M9(e.eventId)},get children(){return P9(e.eventId)}})),t})(),B9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],im=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],j9=[...im,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],U9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],N9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ys=()=>({id:N9(),width:"medium"}),sm=e=>({...ys(),columnType:"Following",...e}),om=e=>({...ys(),columnType:"Notification",...e}),D9=e=>({...ys(),columnType:"Relays",...e}),am=()=>D9({name:"日本語",relayUrls:im,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),lm=e=>({...ys(),columnType:"Posts",...e}),cm=e=>({...ys(),columnType:"Reactions",...e}),Ed=e=>({...ys(),columnType:"Search",...e}),z9=/^[0-9a-f]{64}$/,no=e=>{const t=typeof e=="string"&&e.length===64&&z9.test(e);return t||console.warn("invalid id is ignored: ",e),t};class um{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&no(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&no(n))}taggedPubkeys(){return gr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}class dm extends um{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}var Ze;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ze||(Ze={}));var Au;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Au||(Au={}));const ae=Ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Fr=e=>{switch(typeof e){case"undefined":return ae.undefined;case"string":return ae.string;case"number":return isNaN(e)?ae.nan:ae.number;case"boolean":return ae.boolean;case"function":return ae.function;case"bigint":return ae.bigint;case"symbol":return ae.symbol;case"object":return Array.isArray(e)?ae.array:e===null?ae.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?ae.promise:typeof Map<"u"&&e instanceof Map?ae.map:typeof Set<"u"&&e instanceof Set?ae.set:typeof Date<"u"&&e instanceof Date?ae.date:ae.object;default:return ae.unknown}},X=Ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),H9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class In extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const h=l.path[d];d===l.path.length-1?(u[h]=u[h]||{_errors:[]},u[h]._errors.push(n(l))):u[h]=u[h]||{_errors:[]},u=u[h],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}In.create=e=>new In(e);const ro=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===ae.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Ze.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ze.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ze.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${Ze.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Ze.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,Ze.assertNever(e)}return{message:n}};let fm=ro;function F9(e){fm=e}function Da(){return fm}const za=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(h=>!!h).slice().reverse();for(const h of d)u=h(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},q9=[];function ue(e,t){const n=za({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Da(),ro].filter(i=>!!i)});e.common.issues.push(n)}class Mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Ce;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Mt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ce;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Ce=Object.freeze({status:"aborted"}),hm=e=>({status:"dirty",value:e}),Ft=e=>({status:"valid",value:e}),Iu=e=>e.status==="aborted",Ru=e=>e.status==="dirty",Ha=e=>e.status==="valid",Fa=e=>typeof Promise<"u"&&e instanceof Promise;var ge;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(ge||(ge={}));class qn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const r0=(e,t)=>{if(Ha(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new In(e.common.issues);return this._error=n,this._error}}};function Ie(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Be{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Fr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Fr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Mt,ctx:{common:t.parent.common,data:t.data,parsedType:Fr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Fa(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Fr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return r0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Fr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Fa(o)?o:Promise.resolve(o));return r0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new On({schema:this,typeName:ke.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return mr.create(this,this._def)}nullable(){return _i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Rn.create(this,this._def)}promise(){return os.create(this,this._def)}or(t){return ao.create([this,t],this._def)}and(t){return lo.create(this,t,this._def)}transform(t){return new On({...Ie(this._def),schema:this,typeName:ke.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new po({...Ie(this._def),innerType:this,defaultValue:n,typeName:ke.ZodDefault})}brand(){return new gm({typeName:ke.ZodBranded,type:this,...Ie(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Va({...Ie(this._def),innerType:this,catchValue:n,typeName:ke.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return xo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const W9=/^c[^\s-]{8,}$/i,Z9=/^[a-z][a-z0-9]*$/,V9=/[0-9A-HJKMNP-TV-Z]{26}/,K9=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,G9=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Q9=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,Y9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,J9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,X9=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function eE(e,t){return!!((t==="v4"||!t)&&Y9.test(e)||(t==="v6"||!t)&&J9.test(e))}class An extends Be{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...ge.errToObj(i)}),this.nonempty=t=>this.min(1,ge.errToObj(t)),this.trim=()=>new An({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new An({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new An({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==ae.string){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.string,received:a.parsedType}),Ce}const i=new Mt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?ue(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ue(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")G9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Q9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")K9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")W9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")V9.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ue(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?X9(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?eE(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):Ze.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new An({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...ge.errToObj(t)})}url(t){return this._addCheck({kind:"url",...ge.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...ge.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...ge.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...ge.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...ge.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...ge.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...ge.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...ge.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...ge.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...ge.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...ge.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...ge.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...ge.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...ge.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...ge.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}An.create=e=>{var t;return new An({checks:[],typeName:ke.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ie(e)})};function tE(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Gr extends Be{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==ae.number){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.number,received:a.parsedType}),Ce}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="int"?Ze.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ue(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?tE(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_finite,message:a.message}),o.dirty()):Ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ge.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ge.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ge.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ge.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ge.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:ge.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ge.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ge.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ge.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ge.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ge.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:ge.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ge.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ge.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Ze.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Gr.create=e=>new Gr({checks:[],typeName:ke.ZodNumber,coerce:e?.coerce||!1,...Ie(e)});class Qr extends Be{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==ae.bigint){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.bigint,received:a.parsedType}),Ce}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ge.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ge.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ge.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ge.toString(n))}setLimit(t,n,i,o){return new Qr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ge.toString(o)}]})}_addCheck(t){return new Qr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ge.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ge.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ge.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ge.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ge.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Qr.create=e=>{var t;return new Qr({checks:[],typeName:ke.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ie(e)})};class io extends Be{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==ae.boolean){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.boolean,received:i.parsedType}),Ce}return Ft(t.data)}}io.create=e=>new io({typeName:ke.ZodBoolean,coerce:e?.coerce||!1,...Ie(e)});class bi extends Be{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==ae.date){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.date,received:a.parsedType}),Ce}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_date}),Ce}const i=new Mt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ze.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new bi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:ge.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:ge.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}bi.create=e=>new bi({checks:[],coerce:e?.coerce||!1,typeName:ke.ZodDate,...Ie(e)});class qa extends Be{_parse(t){if(this._getType(t)!==ae.symbol){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.symbol,received:i.parsedType}),Ce}return Ft(t.data)}}qa.create=e=>new qa({typeName:ke.ZodSymbol,...Ie(e)});class so extends Be{_parse(t){if(this._getType(t)!==ae.undefined){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.undefined,received:i.parsedType}),Ce}return Ft(t.data)}}so.create=e=>new so({typeName:ke.ZodUndefined,...Ie(e)});class oo extends Be{_parse(t){if(this._getType(t)!==ae.null){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.null,received:i.parsedType}),Ce}return Ft(t.data)}}oo.create=e=>new oo({typeName:ke.ZodNull,...Ie(e)});class ss extends Be{constructor(){super(...arguments),this._any=!0}_parse(t){return Ft(t.data)}}ss.create=e=>new ss({typeName:ke.ZodAny,...Ie(e)});class vi extends Be{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ft(t.data)}}vi.create=e=>new vi({typeName:ke.ZodUnknown,...Ie(e)});class _r extends Be{_parse(t){const n=this._getOrReturnCtx(t);return ue(n,{code:X.invalid_type,expected:ae.never,received:n.parsedType}),Ce}}_r.create=e=>new _r({typeName:ke.ZodNever,...Ie(e)});class Wa extends Be{_parse(t){if(this._getType(t)!==ae.undefined){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.void,received:i.parsedType}),Ce}return Ft(t.data)}}Wa.create=e=>new Wa({typeName:ke.ZodVoid,...Ie(e)});class Rn extends Be{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==ae.array)return ue(n,{code:X.invalid_type,expected:ae.array,received:n.parsedType}),Ce;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(ue(n,{code:l?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ue(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ue(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new qn(n,l,n.path,u)))).then(l=>Mt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new qn(n,l,n.path,u)));return Mt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Rn({...this._def,minLength:{value:t,message:ge.toString(n)}})}max(t,n){return new Rn({...this._def,maxLength:{value:t,message:ge.toString(n)}})}length(t,n){return new Rn({...this._def,exactLength:{value:t,message:ge.toString(n)}})}nonempty(t){return this.min(1,t)}}Rn.create=(e,t)=>new Rn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ke.ZodArray,...Ie(t)});function Qi(e){if(e instanceof lt){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=mr.create(Qi(i))}return new lt({...e._def,shape:()=>t})}else return e instanceof Rn?new Rn({...e._def,type:Qi(e.element)}):e instanceof mr?mr.create(Qi(e.unwrap())):e instanceof _i?_i.create(Qi(e.unwrap())):e instanceof Wn?Wn.create(e.items.map(t=>Qi(t))):e}class lt extends Be{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Ze.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==ae.object){const h=this._getOrReturnCtx(t);return ue(h,{code:X.invalid_type,expected:ae.object,received:h.parsedType}),Ce}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof _r&&this._def.unknownKeys==="strip"))for(const h in o.data)l.includes(h)||u.push(h);const d=[];for(const h of l){const p=a[h],g=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new qn(o,g,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof _r){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")u.length>0&&(ue(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new qn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of d){const g=await p.key;h.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Mt.mergeObjectSync(i,h)):Mt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return ge.errToObj,new lt({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=ge.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new lt({...this._def,unknownKeys:"strip"})}passthrough(){return new lt({...this._def,unknownKeys:"passthrough"})}extend(t){return new lt({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new lt({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ke.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new lt({...this._def,catchall:t})}pick(t){const n={};return Ze.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new lt({...this._def,shape:()=>n})}omit(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new lt({...this._def,shape:()=>n})}deepPartial(){return Qi(this)}partial(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new lt({...this._def,shape:()=>n})}required(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof mr;)a=a._def.innerType;n[i]=a}}),new lt({...this._def,shape:()=>n})}keyof(){return pm(Ze.objectKeys(this.shape))}}lt.create=(e,t)=>new lt({shape:()=>e,unknownKeys:"strip",catchall:_r.create(),typeName:ke.ZodObject,...Ie(t)});lt.strictCreate=(e,t)=>new lt({shape:()=>e,unknownKeys:"strict",catchall:_r.create(),typeName:ke.ZodObject,...Ie(t)});lt.lazycreate=(e,t)=>new lt({shape:e,unknownKeys:"strip",catchall:_r.create(),typeName:ke.ZodObject,...Ie(t)});class ao extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new In(u.ctx.common.issues));return ue(n,{code:X.invalid_union,unionErrors:l}),Ce}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const h={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:h}),h.common.issues.length&&l.push(h.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new In(d));return ue(n,{code:X.invalid_union,unionErrors:u}),Ce}}get options(){return this._def.options}}ao.create=(e,t)=>new ao({options:e,typeName:ke.ZodUnion,...Ie(t)});const Ca=e=>e instanceof uo?Ca(e.schema):e instanceof On?Ca(e.innerType()):e instanceof fo?[e.value]:e instanceof Yr?e.options:e instanceof ho?Object.keys(e.enum):e instanceof po?Ca(e._def.innerType):e instanceof so?[void 0]:e instanceof oo?[null]:null;class Sl extends Be{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.object)return ue(n,{code:X.invalid_type,expected:ae.object,received:n.parsedType}),Ce;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ue(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ce)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=Ca(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Sl({typeName:ke.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Ie(i)})}}function Ou(e,t){const n=Fr(e),i=Fr(t);if(e===t)return{valid:!0,data:e};if(n===ae.object&&i===ae.object){const o=Ze.objectKeys(t),a=Ze.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Ou(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===ae.array&&i===ae.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Ou(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===ae.date&&i===ae.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class lo extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(Iu(a)||Iu(l))return Ce;const u=Ou(a.value,l.value);return u.valid?((Ru(a)||Ru(l))&&n.dirty(),{status:n.value,value:u.data}):(ue(i,{code:X.invalid_intersection_types}),Ce)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}lo.create=(e,t,n)=>new lo({left:e,right:t,typeName:ke.ZodIntersection,...Ie(n)});class Wn extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.array)return ue(i,{code:X.invalid_type,expected:ae.array,received:i.parsedType}),Ce;if(i.data.length<this._def.items.length)return ue(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ce;!this._def.rest&&i.data.length>this._def.items.length&&(ue(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new qn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Mt.mergeArray(n,l)):Mt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Wn({...this._def,rest:t})}}Wn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Wn({items:e,typeName:ke.ZodTuple,rest:null,...Ie(t)})};class co extends Be{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.object)return ue(i,{code:X.invalid_type,expected:ae.object,received:i.parsedType}),Ce;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new qn(i,u,i.path,u)),value:l._parse(new qn(i,i.data[u],i.path,u))});return i.common.async?Mt.mergeObjectAsync(n,o):Mt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Be?new co({keyType:t,valueType:n,typeName:ke.ZodRecord,...Ie(i)}):new co({keyType:An.create(),valueType:t,typeName:ke.ZodRecord,...Ie(n)})}}class Za extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.map)return ue(i,{code:X.invalid_type,expected:ae.map,received:i.parsedType}),Ce;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],h)=>({key:o._parse(new qn(i,u,i.path,[h,"key"])),value:a._parse(new qn(i,d,i.path,[h,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const h=await d.key,p=await d.value;if(h.status==="aborted"||p.status==="aborted")return Ce;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const h=d.key,p=d.value;if(h.status==="aborted"||p.status==="aborted")return Ce;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}}}}Za.create=(e,t,n)=>new Za({valueType:t,keyType:e,typeName:ke.ZodMap,...Ie(n)});class yi extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.set)return ue(i,{code:X.invalid_type,expected:ae.set,received:i.parsedType}),Ce;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ue(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ue(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const h=new Set;for(const p of d){if(p.status==="aborted")return Ce;p.status==="dirty"&&n.dirty(),h.add(p.value)}return{status:n.value,value:h}}const u=[...i.data.values()].map((d,h)=>a._parse(new qn(i,d,i.path,h)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new yi({...this._def,minSize:{value:t,message:ge.toString(n)}})}max(t,n){return new yi({...this._def,maxSize:{value:t,message:ge.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}yi.create=(e,t)=>new yi({valueType:e,minSize:null,maxSize:null,typeName:ke.ZodSet,...Ie(t)});class Ji extends Be{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.function)return ue(n,{code:X.invalid_type,expected:ae.function,received:n.parsedType}),Ce;function i(u,d){return za({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Da(),ro].filter(h=>!!h),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return za({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Da(),ro].filter(h=>!!h),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof os?Ft(async(...u)=>{const d=new In([]),h=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),p=await l(...h);return await this._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})}):Ft((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new In([i(u,d.error)]);const h=l(...d.data),p=this._def.returns.safeParse(h,a);if(!p.success)throw new In([o(h,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Ji({...this._def,args:Wn.create(t).rest(vi.create())})}returns(t){return new Ji({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Ji({args:t||Wn.create([]).rest(vi.create()),returns:n||vi.create(),typeName:ke.ZodFunction,...Ie(i)})}}class uo extends Be{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}uo.create=(e,t)=>new uo({getter:e,typeName:ke.ZodLazy,...Ie(t)});class fo extends Be{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ue(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Ce}return{status:"valid",value:t.data}}get value(){return this._def.value}}fo.create=(e,t)=>new fo({value:e,typeName:ke.ZodLiteral,...Ie(t)});function pm(e,t){return new Yr({values:e,typeName:ke.ZodEnum,...Ie(t)})}class Yr extends Be{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ue(n,{expected:Ze.joinValues(i),received:n.parsedType,code:X.invalid_type}),Ce}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ue(n,{received:n.data,code:X.invalid_enum_value,options:i}),Ce}return Ft(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Yr.create(t)}exclude(t){return Yr.create(this.options.filter(n=>!t.includes(n)))}}Yr.create=pm;class ho extends Be{_parse(t){const n=Ze.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==ae.string&&i.parsedType!==ae.number){const o=Ze.objectValues(n);return ue(i,{expected:Ze.joinValues(o),received:i.parsedType,code:X.invalid_type}),Ce}if(n.indexOf(t.data)===-1){const o=Ze.objectValues(n);return ue(i,{received:i.data,code:X.invalid_enum_value,options:o}),Ce}return Ft(t.data)}get enum(){return this._def.values}}ho.create=(e,t)=>new ho({values:e,typeName:ke.ZodNativeEnum,...Ie(t)});class os extends Be{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.promise&&n.common.async===!1)return ue(n,{code:X.invalid_type,expected:ae.promise,received:n.parsedType}),Ce;const i=n.parsedType===ae.promise?n.data:Promise.resolve(n.data);return Ft(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}os.create=(e,t)=>new os({type:e,typeName:ke.ZodPromise,...Ie(t)});class On extends Be{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ke.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{ue(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Ce:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Ce:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ha(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Ha(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ze.assertNever(o)}}On.create=(e,t,n)=>new On({schema:e,typeName:ke.ZodEffects,effect:t,...Ie(n)});On.createWithPreprocess=(e,t,n)=>new On({schema:t,effect:{type:"preprocess",transform:e},typeName:ke.ZodEffects,...Ie(n)});class mr extends Be{_parse(t){return this._getType(t)===ae.undefined?Ft(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}mr.create=(e,t)=>new mr({innerType:e,typeName:ke.ZodOptional,...Ie(t)});class _i extends Be{_parse(t){return this._getType(t)===ae.null?Ft(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}_i.create=(e,t)=>new _i({innerType:e,typeName:ke.ZodNullable,...Ie(t)});class po extends Be{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===ae.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}po.create=(e,t)=>new po({innerType:e,typeName:ke.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ie(t)});class Va extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Fa(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new In(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new In(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Va.create=(e,t)=>new Va({innerType:e,typeName:ke.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ie(t)});class Ka extends Be{_parse(t){if(this._getType(t)!==ae.nan){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.nan,received:i.parsedType}),Ce}return{status:"valid",value:t.data}}}Ka.create=e=>new Ka({typeName:ke.ZodNaN,...Ie(e)});const nE=Symbol("zod_brand");class gm extends Be{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class xo extends Be{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ce:a.status==="dirty"?(n.dirty(),hm(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ce:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new xo({in:t,out:n,typeName:ke.ZodPipeline})}}const mm=(e,t={},n)=>e?ss.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,h=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...h,fatal:d})}}):ss.create(),rE={object:lt.lazycreate};var ke;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(ke||(ke={}));const iE=(e,t={message:`Input not instance of ${e.name}`})=>mm(n=>n instanceof e,t),vm=An.create,bm=Gr.create,sE=Ka.create,oE=Qr.create,ym=io.create,aE=bi.create,lE=qa.create,cE=so.create,uE=oo.create,dE=ss.create,fE=vi.create,hE=_r.create,pE=Wa.create,gE=Rn.create,mE=lt.create,vE=lt.strictCreate,bE=ao.create,yE=Sl.create,_E=lo.create,wE=Wn.create,xE=co.create,$E=Za.create,kE=yi.create,EE=Ji.create,CE=uo.create,SE=fo.create,TE=Yr.create,AE=ho.create,IE=os.create,i0=On.create,RE=mr.create,OE=_i.create,LE=On.createWithPreprocess,PE=xo.create,ME=()=>vm().optional(),BE=()=>bm().optional(),jE=()=>ym().optional(),UE={string:e=>An.create({...e,coerce:!0}),number:e=>Gr.create({...e,coerce:!0}),boolean:e=>io.create({...e,coerce:!0}),bigint:e=>Qr.create({...e,coerce:!0}),date:e=>bi.create({...e,coerce:!0})},NE=Ce;var ct=Object.freeze({__proto__:null,defaultErrorMap:ro,setErrorMap:F9,getErrorMap:Da,makeIssue:za,EMPTY_PATH:q9,addIssueToContext:ue,ParseStatus:Mt,INVALID:Ce,DIRTY:hm,OK:Ft,isAborted:Iu,isDirty:Ru,isValid:Ha,isAsync:Fa,get util(){return Ze},get objectUtil(){return Au},ZodParsedType:ae,getParsedType:Fr,ZodType:Be,ZodString:An,ZodNumber:Gr,ZodBigInt:Qr,ZodBoolean:io,ZodDate:bi,ZodSymbol:qa,ZodUndefined:so,ZodNull:oo,ZodAny:ss,ZodUnknown:vi,ZodNever:_r,ZodVoid:Wa,ZodArray:Rn,ZodObject:lt,ZodUnion:ao,ZodDiscriminatedUnion:Sl,ZodIntersection:lo,ZodTuple:Wn,ZodRecord:co,ZodMap:Za,ZodSet:yi,ZodFunction:Ji,ZodLazy:uo,ZodLiteral:fo,ZodEnum:Yr,ZodNativeEnum:ho,ZodPromise:os,ZodEffects:On,ZodTransformer:On,ZodOptional:mr,ZodNullable:_i,ZodDefault:po,ZodCatch:Va,ZodNaN:Ka,BRAND:nE,ZodBranded:gm,ZodPipeline:xo,custom:mm,Schema:Be,ZodSchema:Be,late:rE,get ZodFirstPartyTypeKind(){return ke},coerce:UE,any:dE,array:gE,bigint:oE,boolean:ym,date:aE,discriminatedUnion:yE,effect:i0,enum:TE,function:EE,instanceof:iE,intersection:_E,lazy:CE,literal:SE,map:$E,nan:sE,nativeEnum:AE,never:hE,null:uE,nullable:OE,number:bm,object:mE,oboolean:jE,onumber:BE,optional:RE,ostring:ME,pipeline:PE,preprocess:LE,promise:IE,record:xE,set:kE,strictObject:vE,string:vm,symbol:lE,transformer:i0,tuple:wE,undefined:cE,union:bE,unknown:fE,void:pE,NEVER:NE,ZodIssueCode:X,quotelessJson:H9,ZodError:In});const{decode:DE}=wo,zE=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,HE=/(?:#\[(?<idx>\d+)\])/g,FE=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,qE=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,WE=/:(?<emoji>\w+):/gu,_m=e=>{const t=[...e.matchAll(zE),...e.matchAll(HE),...e.matchAll(FE),...e.matchAll(qE),...e.matchAll(WE)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=DE(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},ZE=e=>t=>e.safeParse(t).success,VE=ct.tuple([ct.literal("emoji"),ct.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),ct.string().url()]),KE=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&no(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let GE=class extends dm{#e;#t;constructor(t){if(t.kind!==dt.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=_m(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&no(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&no(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=KE(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(ZE(VE))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const pr=e=>new dm(e),Tl=e=>new GE(e),QE=()=>{const e=[...B9];return window.navigator.language.includes("ja")&&e.push(...j9),e},wm=()=>({relayUrls:QE(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),YE=e=>JSON.stringify(e),JE=e=>({...wm(),...JSON.parse(e)}),XE=zx(()=>window.localStorage,YE,JE),[Ws,Gt]=Hx("RabbitConfig",wm(),XE),je=()=>{const e=w=>{Gt("relayUrls",O=>gr([...O,w]))},t=w=>{Gt("relayUrls",O=>O.filter(R=>R!==w))},n=w=>{Gt("mutedPubkeys",O=>gr([...O,w]))},i=w=>{Gt("mutedPubkeys",O=>O.filter(R=>R!==w))},o=w=>{Gt("mutedKeywords",O=>gr([...O,w]))},a=w=>{Gt("mutedKeywords",O=>O.filter(R=>R!==w))},l=w=>{Gt("columns",O=>{const R=O.findIndex(I=>I.id===w.id);if(R>=0){const I=[...O];return I.splice(R,1,w),I}return[...O,w]})},u=(w,O)=>{Gt("columns",R=>{const I=O-1,C=Math.max(Math.min(I,R.length),0),A=R.findIndex(ne=>ne.id===w);if(A<0||C===A)return R;console.log(A,C);const j=[...R],[N]=j.splice(A,1);return j.splice(C,0,N),j})},d=w=>{Gt("columns",O=>O.filter(R=>R.id!==w))},h=w=>{Gt("customEmojis",O=>({...O,[w.shortcode]:w}))},p=w=>{Gt("customEmojis",O=>{const R=Object.fromEntries(w.map(I=>[I.shortcode,I]));return{...O,...R}})},g=w=>{Gt("customEmojis",O=>({...O,[w]:void 0}))},v=w=>Ws.customEmojis[w],x=w=>Ws.mutedPubkeys.includes(w),k=w=>w.kind===dt.Text?Ws.mutedKeywords.some(O=>w.content.includes(O)):!1;return{config:()=>Ws,setConfig:Gt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:w})=>{if((Ws.columns?.length??0)>0)return;const O=[sm({width:"widest",pubkey:w}),om({pubkey:w}),lm({name:"自分の投稿",pubkey:w}),cm({name:"自分のリアクション",pubkey:w})];navigator.language.includes("ja")&&O.splice(2,0,am()),Gt("columns",()=>[...O])},saveEmoji:h,saveEmojis:p,removeEmoji:g,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:x,shouldMuteEvent:w=>{const O=pr(w);return x(w.pubkey)||O.taggedPubkeys().some(x)||w.kind===dt.Text&&k(w)}}},[eC]=$e(new Lk),Al=()=>eC,[xm,s0]=es({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...xm})},1e3);const $m=()=>({stats:xm,setActiveSubscriptions:n=>s0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>s0("activeBatchSubscriptions",n)});let o0=0;const tC=()=>{const e=o0;return o0+=1,e};class nC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=tC(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const rC=e=>{const t=We(e),n=We(()=>t().batchSize??100),i=We(()=>t().interval??2e3),[o,a]=$e([]);let l;const u=()=>{const{executor:g}=t(),v=o();v.length>0&&(a([]),g(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(v=>[...v,g]):(u(),a([g])),d()},removeTask:g=>{a(v=>v.filter(x=>x!==g))}}};class _s extends nC{addEvent(t){this.updateWith(n=>[...n??[],t])}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}}let Lu=0;const{setActiveBatchSubscriptions:iC}=$m();setInterval(()=>{iC(Lu)},1e3);const sC=e=>e.kind>=3e4&&e.kind<4e4,oC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{addTask:aC,removeTask:lC}=rC(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(C=>{if(C.req.type==="Event"){const A=n.get(C.req.eventId)??[];n.set(C.req.eventId,[...A,C])}else if(C.req.type==="Profile"){const A=t.get(C.req.pubkey)??[];t.set(C.req.pubkey,[...A,C])}else if(C.req.type==="Reactions"){const A=i.get(C.req.mentionedEventId)??[];i.set(C.req.mentionedEventId,[...A,C])}else if(C.req.type==="Reposts"){const A=o.get(C.req.mentionedEventId)??[];o.set(C.req.mentionedEventId,[...A,C])}else if(C.req.type==="ZapReceipts"){const A=a.get(C.req.mentionedEventId)??[];o.set(C.req.mentionedEventId,[...A,C])}else if(C.req.type==="ParameterizedReplaceableEvent"){const A=oC(C.req),j=l.get(A)??[];l.set(A,[...j,C])}else if(C.req.type==="Followings"){const A=u.get(C.req.pubkey)??[];u.set(C.req.pubkey,[...A,C])}});const d=[...n.keys()],h=[...t.keys()],p=[...i.keys()],g=[...o.keys()],v=[...a.keys()],x=[...u.keys()],k=[];if(d.length>0&&k.push({ids:d}),h.length>0&&k.push({kinds:[dt.Metadata],authors:h}),p.length>0&&k.push({kinds:[dt.Reaction],"#e":p}),g.length>0&&k.push({kinds:[6],"#e":g}),v.length>0&&k.push({kinds:[9735],"#e":v}),x.length>0&&k.push({kinds:[dt.Contacts],authors:x}),l.size>0&&Array.from(l.values()).forEach(([C])=>{if(C.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:A,author:j,identifier:N}}=C;k.push({kinds:[A],authors:[j],"#d":[N]})}),k.length===0)return;const $=(C,A)=>{C.forEach(j=>{j.addEvent(A)})},E=()=>{e.forEach(C=>{C.complete()})},{config:w,shouldMuteEvent:O}=je(),I=Al()().sub(w().relayUrls,k,{});Lu+=1,I.on("event",C=>{if(C.kind===dt.Metadata){const A=t.get(C.pubkey)??[];$(A,C);return}if(C.kind===dt.Reaction){const A=pr(C).lastTaggedEventId();if(A!=null){const j=i.get(A)??[];$(j,C)}}else if(C.kind===6){const A=pr(C).lastTaggedEventId();if(A!=null){const j=o.get(A)??[];$(j,C)}}else if(C.kind===dt.Zap)pr(C).eTags().forEach(([,j])=>{const N=o.get(j)??[];$(N,C)});else if(C.kind===dt.Contacts){const A=u.get(C.pubkey)??[];$(A,C)}else if(sC(C)){const A=pr(C).findFirstTagByName("d")?.[1];if(A!=null){const j=`${C.kind}:${C.pubkey}:${A}`,N=l.get(j)??[];$(N,C)}else console.warn("identifier is undefined")}else{const A=n.get(C.id)??[];A.length>0?$(A,C):console.warn("unknown event received")}}),I.on("eose",()=>{E(),I.unsub(),Lu-=1})}})),ws=({task:e,signal:t})=>{aC(e),t?.addEventListener("abort",()=>lC(e))},Cd=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),xr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(l))},e)});return Promise.race([n,i])},km=e=>{const t=We(e),n=xi(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new _s({type:"Event",eventId:u}),h=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return ws({task:d,signal:a}),xr(15e3,`useEvent: ${u}`)(h)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},ln=e=>t=>e.some(n=>n==null)?null:t(e),cC=B("<span>投稿が見つかりません"),uC=B('<div class="truncate">読み込み中 '),as=e=>{const[t,n]=Lx(e,["eventId"]),{shouldMuteEvent:i}=je(),{event:o,query:a}=km(()=>ln([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return y(an,{get fallback(){return(()=>{const u=cC();return u.firstChild,S(u,()=>e.eventId,null),u})()},get children(){return[y(De,{get when(){return l()},children:null}),y(De,{get when(){return o()},keyed:!0,children:u=>y(hv,Px({event:u},n))}),y(De,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=uC();return d.firstChild,S(d,y(to,{eventId:u}),null),d})()})]}})},dC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},fC=e=>{try{return dC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},ki=e=>{const t=wi(),n=We(e),i=We(()=>["useProfile",n()]),o=xi(i,({queryKey:u,signal:d})=>{const[,h]=u;if(h==null)return null;const{pubkey:p}=h,g=new _s({type:"Profile",pubkey:p}),v=g.firstEventPromise().catch(()=>{throw new Error(`profile not found: ${p}`)});return g.onUpdate(x=>{const k=Cd(x);t.setQueryData(u,k)}),ws({task:g,signal:d}),xr(3e3,`useProfile: ${p}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:We(()=>{if(o.data==null)return null;const{content:u}=o.data;return fC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:hC}=wo,$o=e=>{try{return hC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Il=e=>{const{profile:t}=ki(()=>({pubkey:e.pubkey}));return y(an,{get fallback(){return $o(e.pubkey)},get children(){return[y(De,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),y(De,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",We(()=>t()?.name)]}})]}})},Em=e=>{const[t,n]=$e(new Date);return Dn(()=>{const i=setInterval(()=>{n(new Date)},e().interval);br(()=>clearInterval(i))}),t},pC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},a0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,gC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},mC=e=>{switch(e.kind){case"today":return a0(e.value);case"yesterday":return`昨日 ${a0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},vC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,bC=(e,t)=>{const n=vC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},l0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),yC=e=>new Date(+e-24*60*60*1e3),Cm=(e,t,n)=>l0(e,t)?n({kind:"today",value:e}):l0(e,yC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),_C=(e,t=new Date)=>Cm(e,t,gC),wC=(e,t=new Date)=>Cm(e,t,mC),c0=(e,t=new Date,n=pC)=>n(bC(e,t)),u0=Em(()=>({interval:7e3})),d0=Em(()=>({interval:60*1e3})),Sm=()=>{const{config:e}=je();return t=>{switch(e().dateFormat){case"absolute-long":return _C(t,d0());case"absolute-short":return wC(t,d0());case"relative":return c0(t,u0());default:return c0(t,u0())}}},[xC,Ki]=$e({type:"Closed"}),$r=()=>({modalState:xC,setModalState:Ki,showProfile:a=>{Ki({type:"Profile",pubkey:a})},showProfileEdit:()=>{Ki({type:"ProfileEdit"})},showAddColumn:()=>{Ki({type:"AddColumn"})},showAbout:()=>{Ki({type:"About"})},closeModal:()=>{Ki({type:"Closed"})}}),$C=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),Tm=e=>{const t=vt(),{showProfile:n}=$r(),i=Sm(),o=We(()=>pr(e.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=$C(),u=l.firstChild,d=u.firstChild,h=d.nextSibling,p=h.firstChild,g=h.nextSibling,v=u.nextSibling;return S(d,y(rm,{})),p.$$click=()=>n(e.event.pubkey),S(p,y(Il,{get pubkey(){return e.event.pubkey}})),S(h,()=>t()("notification.reposted"),null),S(g,()=>i(o().createdAtAsDate())),S(v,y(as,{get eventId(){return a()}})),l})()};ot(["click"]);const kC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),EC=(e={})=>(()=>{const t=kC();return Ge(t,e,!0,!0),t})(),CC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Am=(e={})=>(()=>{const t=CC();return Ge(t,e,!0,!0),t})(),SC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Sd=(e={})=>(()=>{const t=SC();return Ge(t,e,!0,!0),t})(),TC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Im=(e={})=>(()=>{const t=TC();return Ge(t,e,!0,!0),t})(),AC=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Ga=(e={})=>(()=>{const t=AC();return Ge(t,e,!0,!0),t})(),IC=B('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Td=e=>{let t,n;const[i,o]=$e(!1),[a,l]=$e({}),u=Mx(()=>e.children),d=()=>o(!1),h=()=>o(k=>!k),p=k=>{const $=k.target;$!=null&&!n?.contains($)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},x=()=>{if(t==null||n==null)return;const k=t?.getBoundingClientRect(),$=n?.getBoundingClientRect();let{top:E,left:w}=k;e.position==="left"?w-=k.width:e.position==="right"?w+=k.width:e.position==="top"?(E-=k.height,w-=k.left+k.width/2):(E+=k.height,w+=k.width/2),E=Math.min(E,window.innerHeight-$.height),w=Math.min(w,window.innerWidth-$.width),l({left:`${w}px`,top:`${E}px`})};return Dn(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),Dn(ol(u,()=>{x()})),Dn(()=>{i()&&x()}),cn(()=>{e.ref?.({close:d})}),br(()=>v()),(()=>{const k=IC(),$=k.firstChild,E=$.nextSibling;$.$$click=()=>{h(),x()};const w=t;typeof w=="function"?yr(w,$):t=$,S($,()=>e.button);const O=n;return typeof O=="function"?yr(O,E):n=E,S(E,u),Me(R=>{const I=!i(),C=!!i(),A=a();return I!==R._v$&&E.classList.toggle("hidden",R._v$=I),C!==R._v$2&&E.classList.toggle("block",R._v$2=C),R._v$3=Bx(E,A,R._v$3),R},{_v$:void 0,_v$2:void 0,_v$3:void 0}),k})()};ot(["click"]);const RC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),OC=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),LC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=RC(),i=n.firstChild;return i.$$click=t,S(i,()=>e.item.content()),n})()},Rm=e=>{let t;const n=()=>t?.close();return y(Td,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=OC();return S(i,y(Ct,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>y(LC,{item:o,onClose:n})})),i}})};ot(["click"]);function Om(e){return e&&e.__esModule?e.default:e}function Sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Rl,be,Lm,Ks,Pm,f0,Qa={},Mm=[],PC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function qr(e,t){for(var n in t)e[n]=t[n];return e}function Bm(e){var t=e.parentNode;t&&t.removeChild(e)}function Pu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Rl.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Sa(e,l,i,o,null)}function Sa(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Lm};return o==null&&be.vnode!=null&&be.vnode(a),a}function ur(){return{current:null}}function ls(e){return e.children}function zn(e,t){this.props=e,this.context=t}function cs(e,t){if(t==null)return e.__?cs(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?cs(e):null}function jm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return jm(e)}}function h0(e){(!e.__d&&(e.__d=!0)&&Ks.push(e)&&!Ya.__r++||f0!==be.debounceRendering)&&((f0=be.debounceRendering)||Pm)(Ya)}function Ya(){for(var e;Ya.__r=Ks.length;)e=Ks.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ks=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=qr({},a)).__v=a.__v+1,Ad(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??cs(a),a.__h),zm(i,a),a.__e!=l&&jm(a)))})}function Um(e,t,n,i,o,a,l,u,d,h){var p,g,v,x,k,$,E,w=i&&i.__k||Mm,O=w.length;for(n.__k=[],p=0;p<t.length;p++)if((x=n.__k[p]=(x=t[p])==null||typeof x=="boolean"?null:typeof x=="string"||typeof x=="number"||typeof x=="bigint"?Sa(null,x,null,null,x):Array.isArray(x)?Sa(ls,{children:x},null,null,null):x.__b>0?Sa(x.type,x.props,x.key,null,x.__v):x)!=null){if(x.__=n,x.__b=n.__b+1,(v=w[p])===null||v&&x.key==v.key&&x.type===v.type)w[p]=void 0;else for(g=0;g<O;g++){if((v=w[g])&&x.key==v.key&&x.type===v.type){w[g]=void 0;break}v=null}Ad(e,x,v=v||Qa,o,a,l,u,d,h),k=x.__e,(g=x.ref)&&v.ref!=g&&(E||(E=[]),v.ref&&E.push(v.ref,null,x),E.push(g,x.__c||k,x)),k!=null?($==null&&($=k),typeof x.type=="function"&&x.__k===v.__k?x.__d=d=Nm(x,d,e):d=Dm(e,x,v,w,k,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=cs(v))}for(n.__e=$,p=O;p--;)w[p]!=null&&(typeof n.type=="function"&&w[p].__e!=null&&w[p].__e==n.__d&&(n.__d=cs(i,p+1)),Fm(w[p],w[p]));if(E)for(p=0;p<E.length;p++)Hm(E[p],E[++p],E[++p])}function Nm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Nm(i,t,n):Dm(n,i,i,o,i.__e,t));return t}function Ja(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ja(n,t)}):t.push(e)),t}function Dm(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function MC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Xa(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Xa(e,a,t[a],n[a],i)}function p0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||PC.test(t)?n:n+"px"}function Xa(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||p0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||p0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?m0:g0,a):e.removeEventListener(t,a?m0:g0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function g0(e){this.l[e.type+!1](be.event?be.event(e):e)}function m0(e){this.l[e.type+!0](be.event?be.event(e):e)}function Ad(e,t,n,i,o,a,l,u,d){var h,p,g,v,x,k,$,E,w,O,R,I=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(h=be.__b)&&h(t);try{e:if(typeof I=="function"){if(E=t.props,w=(h=I.contextType)&&i[h.__c],O=h?w?w.props.value:h.__:i,n.__c?$=(p=t.__c=n.__c).__=p.__E:("prototype"in I&&I.prototype.render?t.__c=p=new I(E,O):(t.__c=p=new zn(E,O),p.constructor=I,p.render=jC),w&&w.sub(p),p.props=E,p.state||(p.state={}),p.context=O,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),I.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=qr({},p.__s)),qr(p.__s,I.getDerivedStateFromProps(E,p.__s))),v=p.props,x=p.state,g)I.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(I.getDerivedStateFromProps==null&&E!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,O),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(E,p.__s,O)===!1||t.__v===n.__v){p.props=E,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(C){C&&(C.__=t)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,O),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,x,k)})}p.context=O,p.props=E,p.state=p.__s,(h=be.__r)&&h(t),p.__d=!1,p.__v=t,p.__P=e,h=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=qr(qr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(k=p.getSnapshotBeforeUpdate(v,x)),R=h!=null&&h.type===ls&&h.key==null?h.props.children:h,Um(e,Array.isArray(R)?R:[R],t,n,i,o,a,l,u,d),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),$&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=BC(n.__e,t,n,i,o,a,l,d);(h=be.diffed)&&h(t)}catch(C){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),be.__e(C,t,n)}}function zm(e,t){be.__c&&be.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){be.__e(i,n.__v)}})}function BC(e,t,n,i,o,a,l,u){var d,h,p,g=n.props,v=t.props,x=t.type,k=0;if(x==="svg"&&(o=!0),a!=null){for(;k<a.length;k++)if((d=a[k])&&"setAttribute"in d==!!x&&(x?d.localName===x:d.nodeType===3)){e=d,a[k]=null;break}}if(e==null){if(x===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,v.is&&v),a=null,u=!1}if(x===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Rl.call(e.childNodes),h=(g=n.props||Qa).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},k=0;k<e.attributes.length;k++)g[e.attributes[k].name]=e.attributes[k].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(MC(e,v,g,o,u),p)t.__k=[];else if(k=t.props.children,Um(e,Array.isArray(k)?k:[k],t,n,i,o&&x!=="foreignObject",a,l,a?a[0]:n.__k&&cs(n,0),u),a!=null)for(k=a.length;k--;)a[k]!=null&&Bm(a[k]);u||("value"in v&&(k=v.value)!==void 0&&(k!==g.value||k!==e.value||x==="progress"&&!k)&&Xa(e,"value",k,g.value,!1),"checked"in v&&(k=v.checked)!==void 0&&k!==e.checked&&Xa(e,"checked",k,g.checked,!1))}return e}function Hm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){be.__e(i,n)}}function Fm(e,t,n){var i,o;if(be.unmount&&be.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Hm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){be.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Fm(i[o],t,typeof e.type!="function");n||e.__e==null||Bm(e.__e),e.__e=e.__d=void 0}function jC(e,t,n){return this.constructor(e,n)}function qm(e,t,n){var i,o,a;be.__&&be.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Ad(t,e=(!i&&n||t).__k=Pu(ls,null,[e]),o||Qa,Qa,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Rl.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),zm(a,e)}Rl=Mm.slice,be={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Lm=0,zn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=qr({},this.state),typeof e=="function"&&(e=e(qr({},n),this.props)),e&&qr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),h0(this))},zn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),h0(this))},zn.prototype.render=ls,Ks=[],Pm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ya.__r=0;var UC=0;function Z(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--UC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return be.vnode&&be.vnode(d),d}function NC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function DC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Zr={set:NC,get:DC};const lu=new Map,zC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function HC(){for(const{v:e,emoji:t}of zC)if(Wm(t))return e}function FC(){return!Wm("🇨🇦")}function Wm(e){if(lu.has(e))return lu.get(e);const t=qC(e);return lu.set(e,t),t}const qC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,h=Math.floor(u/4/n),p=e.getImageData(d,h,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var v0={latestVersion:HC,noCountryFlags:FC};const Mu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function WC(e){It||(It=Zr.get("frequently")||{});const t=e.id||e;t&&(It[t]||(It[t]=0),It[t]+=1,Zr.set("last",t),Zr.set("frequently",It))}function ZC({maxFrequentRows:e,perLine:t}){if(!e)return[];It||(It=Zr.get("frequently"));let n=[];if(!It){It={};for(let a in Mu.slice(0,t)){const l=Mu[a];It[l]=t-a,n.push(l)}return n}const i=e*t,o=Zr.get("last");for(let a in It)n.push(a);if(n.sort((a,l)=>{const u=It[l],d=It[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete It[l];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),Zr.set("frequently",It)}return n}var Zm={add:WC,get:ZC,DEFAULTS:Mu},Vm={};Vm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var hr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,Ne=null;const cu={};async function b0(e){if(cu[e])return cu[e];const n=await(await fetch(e)).json();return cu[e]=n,n}let uu=null,Km=null,Gm=!1;function Ol(e,{caller:t}={}){return uu||(uu=new Promise(n=>{Km=n})),e?VC(e):t&&!Gm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),uu}async function VC(e){Gm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=hr.emojiVersion.value),n||(n=hr.set.value),i||(i=hr.locale.value),Ne)Ne.categories=Ne.categories.filter(d=>!d.name);else{Ne=(typeof e.data=="function"?await e.data():e.data)||await b0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Ne.emoticons={},Ne.natives={},Ne.categories.unshift({id:"frequent",emojis:[]});for(const d in Ne.aliases){const h=Ne.aliases[d],p=Ne.emojis[h];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}Ne.originalCategories=Ne.categories}if(Pt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Om(Vm):await b0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const h=e.custom[d],p=e.custom[d-1];if(!(!h.emojis||!h.emojis.length)){h.id||(h.id=`custom_${d+1}`),h.name||(h.name=Pt.categories.custom),p&&!h.icon&&(h.target=p.target||p),Ne.categories.push(h);for(const g of h.emojis)Ne.emojis[g.id]=g}}e.categories&&(Ne.categories=Ne.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,h)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(h.id);return p-g}));let o=null,a=null;n=="native"&&(o=v0.latestVersion(),a=e.noCountryFlags||v0.noCountryFlags());let l=Ne.categories.length,u=!1;for(;l--;){const d=Ne.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:hr.maxFrequentRows.value,v||(v=hr.perLine.value),d.emojis=Zm.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){Ne.categories.splice(l,1);continue}const{categoryIcons:h}=e;if(h){const g=h[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:Ne.emojis[g],x=()=>{d.emojis.splice(p,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){x();continue}if(o&&v.version>o){x();continue}if(a&&d.id=="flags"&&!JC.includes(v.id)){x();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([$,E])=>{if($)return(Array.isArray($)?$:[$]).map(w=>(E?w.split(/[-|_|\s]+/):[w]).map(O=>O.toLowerCase())).flat()}).flat().filter($=>$&&$.trim()).join(","),v.emoticons)for(const $ of v.emoticons)Ne.emoticons[$]||(Ne.emoticons[$]=v.id);let k=0;for(const $ of v.skins){if(!$)continue;k++;const{native:E}=$;E&&(Ne.natives[E]=v.id,v.search+=`,${E}`);const w=k==1?"":`:skin-tone-${k}:`;$.shortcodes=`:${v.id}:${w}`}}}}u&&Xi.reset(),Km()}function Qm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Ym(o,e,t,n);return i}function Ym(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const KC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Bu=null;function GC(e){return e.id?e:Ne.emojis[e]||Ne.emojis[Ne.aliases[e]]||Ne.emojis[Ne.natives[e]]}function QC(){Bu=null}async function YC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Ol(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,h)=>u.trim()&&h.indexOf(u)==d);if(!i.length)return;let o=Bu||(Bu=Object.values(Ne.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const h=d.search.indexOf(`,${u}`);h!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:h+1)}o=a}return a.length<2||(a.sort((u,d)=>{const h=l[u.id],p=l[d.id];return h==p?u.id.localeCompare(d.id):h-p}),a.length>t&&(a=a.slice(0,t))),a}var Xi={search:YC,get:GC,reset:QC,SHORTCODES_REGEX:KC};const JC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function XC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function eS(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function tS(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const nS={activity:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),Z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),Z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),Z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),Z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},rS={loupe:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var el={categories:nS,search:rS};function ju(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Xi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Xi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return Z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?Z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?Z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):Z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*Ne.sheet.cols}% ${100*Ne.sheet.rows}%`,backgroundPosition:`${100/(Ne.sheet.cols-1)*o.x}% ${100/(Ne.sheet.rows-1)*o.y}%`}})})}const iS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Jm extends iS{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Ym(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class sS extends Jm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Xm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:hr.set,skin:hr.skin};class ev extends Jm{async connectedCallback(){const t=Qm(this.props,Xm,this);t.element=this,t.ref=n=>{this.component=n},await Ol(),!this.disconnected&&qm(Z(ju,{...t}),this)}constructor(t){super(t)}}Sn(ev,"Props",Xm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",ev);var y0,Uu=[],_0=be.__b,w0=be.__r,x0=be.diffed,$0=be.__c,k0=be.unmount;function oS(){var e;for(Uu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Uu.pop();)if(e.__P)try{e.__H.__h.forEach(Ta),e.__H.__h.forEach(Nu),e.__H.__h=[]}catch(t){e.__H.__h=[],be.__e(t,e.__v)}}be.__b=function(e){_0&&_0(e)},be.__r=function(e){w0&&w0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ta),t.__h.forEach(Nu),t.__h=[])},be.diffed=function(e){x0&&x0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Uu.push(t)!==1&&y0===be.requestAnimationFrame||((y0=be.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),E0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);E0&&(i=requestAnimationFrame(o))})(oS))},be.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ta),n.__h=n.__h.filter(function(i){return!i.__||Nu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],be.__e(i,n.__v)}}),$0&&$0(e,t)},be.unmount=function(e){k0&&k0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ta(i)}catch(o){t=o}}),t&&be.__e(t,n.__v))};var E0=typeof requestAnimationFrame=="function";function Ta(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Nu(e){e.__c=e.__()}function aS(e,t){for(var n in t)e[n]=t[n];return e}function C0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function tl(e){this.props=e}(tl.prototype=new zn).isPureReactComponent=!0,tl.prototype.shouldComponentUpdate=function(e,t){return C0(this.props,e)||C0(this.state,t)};var S0=be.__b;be.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),S0&&S0(e)};var lS=be.__e;be.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}lS(e,t,n)};var T0=be.unmount;function du(){this.__u=0,this.t=null,this.__b=null}function tv(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function wa(){this.u=null,this.o=null}be.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),T0&&T0(e)},(du.prototype=new zn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=tv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var h=i.state.__e;i.__v.__k[0]=function g(v,x,k){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function($){return g($,x,k)}),v.__c&&v.__c.__P===x&&(v.__e&&k.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=k)),v}(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},du.prototype.componentWillUnmount=function(){this.t=[]},du.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),l.__c.__H=null),(l=aS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(h){return a(h,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Pu(ls,null,e.fallback);return o&&(o.__h=null),[Pu(ls,null,t.__e?null:e.children),o]};var A0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(wa.prototype=new zn).__e=function(e){var t=this,n=tv(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),A0(t,e,i)):o()};n?n(a):a()}},wa.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ja(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},wa.prototype.componentDidUpdate=wa.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){A0(e,n,t)})};var cS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,uS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,dS=typeof document<"u",fS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};zn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(zn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var I0=be.event;function hS(){}function pS(){return this.cancelBubble}function gS(){return this.defaultPrevented}be.event=function(e){return I0&&(e=I0(e)),e.persist=hS,e.isPropagationStopped=pS,e.isDefaultPrevented=gS,e.nativeEvent=e};var R0={configurable:!0,get:function(){return this.class}},O0=be.vnode;be.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];dS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!fS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&uS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ja(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ja(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(R0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",R0))}e.$$typeof=cS,O0&&O0(e)};var L0=be.__r;be.__r=function(e){L0&&L0(e),e.__c};const mS={light:"outline",dark:"solid"};class vS extends tl{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return Z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return Z("img",{src:n.src})}const i=el.categories[t.id]||el.categories.custom,o=this.props.icons=="auto"?mS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return Z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:Z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),Z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),Z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Ne.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class bS extends tl{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const xa={rowsPerRender:10};class yS extends zn{getInitialState(t=this.props){return{skin:Zr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:ur(),navigation:ur(),scroll:ur(),search:ur(),searchInput:ur(),skinToneButton:ur(),skinToneRadio:ur()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Ol(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Ne;this.refs.categories=new Map;const n=Ne.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%xa.rowsPerRender?{}:ur();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:ur(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Xi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const h=d.target.dataset.id;n.set(h,d.intersectionRatio)}const u=[...n];for(const[d,h]of u)if(h){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(xa.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*xa.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,h]=this.state.pos;const p=(()=>{if(d==0&&h==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(h+=v,!g[h]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,h=i?0:u[d].length-1,[d,h];h=i?g.length-1:0}return[d,h]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[h]||(h=g.length-1),[d,h]):(d=a?0:u.length-1,h=a?0:u[d].length-1,[d,h])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,h=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(h>o.scrollTop+a.height)l=h-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=tS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Zm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Zr.set("skin",t)}renderNav(){return Z(vS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return Z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[Z("div",{class:"flex flex-middle flex-grow",children:[Z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:Z(ju,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),Z("div",{class:`margin-${this.dir[0]}`,children:t||n?Z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[Z("div",{class:"preview-title ellipsis",children:t?t.name:Pt.search_no_results_1}),Z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Pt.search_no_results_2})]}):Z("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,h=XC(this.state.pos,n),p=n.concat(t.id).join("");return Z(bS,{selected:h,skin:l,size:a,children:Z("button",{"aria-label":d,"aria-selected":h||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[Z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),Z(ju,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return Z("div",{children:[Z("div",{class:"spacer"}),Z("div",{class:"flex flex-middle",children:[Z("div",{class:"search relative flex-grow",children:[Z("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),Z("span",{class:"icon loupe flex",children:el.search.loupe}),this.state.searchResults&&Z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:el.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?Z("div",{class:"category",ref:this.refs.search,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),Z("div",{children:t.length?t.map((n,i)=>Z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):Z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&Z("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Ne,n=!!this.state.searchResults,i=this.getPerLine();return Z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return Z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),Z("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const h=u.index-u.index%xa.rowsPerRender,p=this.state.visibleRows[h],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,x=v+i,k=o.emojis.slice(v,x);return k.length<i&&k.push(...new Array(i-k.length)),Z("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&k.map(($,E)=>{if(!$)return Z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const w=Xi.get($);return this.renderEmojiButton(w,{pos:[u.index,E],posinset:u.posinset+E,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:Z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:Z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:Z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return Z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),Z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return Z("div",{children:[Z("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Pt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),Z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[Z("span",{class:`skin-tone skin-tone-${l}`}),Z("span",{class:"margin-small-lr",children:Pt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return Z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&Z("div",{class:"padding-lr",children:this.renderSearch()}),Z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:Z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Sn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Sn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Sn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Sn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Sn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Xi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let h of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(h);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),Sn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Sn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Sn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Sn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await eS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Id extends sS{async connectedCallback(){const t=Qm(this.props,hr,this);t.element=this,t.ref=n=>{this.component=n},await Ol(t),!this.disconnected&&qm(Z(yS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Om(nv)})}}Sn(Id,"Props",hr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Id);var nv={};nv=`:host {
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

`;const rv=e=>{let t;const[n,i]=$e(void 0);return y(Td,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new Id({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},_S=B("<div>"),wS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),xS=B("<br>"),$S=B("<span>理由: "),kS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),ES=e=>{const[t,n]=$e(!1);return y(le,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=kS();return i.firstChild,i.$$click=()=>n(!0),S(i,y(le,{get when(){return e.contentWarning.reason!=null},get children(){return[xS(),(()=>{const o=$S();return o.firstChild,S(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=_S();return S(i,()=>e.children),i})(),y(le,{get when(){return e.contentWarning.contentWarning},get children(){const i=wS();return i.$$click=()=>n(!1),i}})]}})};ot(["click"]);const iv=e=>{const{profile:t}=ki(()=>({pubkey:e.pubkey}));return y(le,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${$o(e.pubkey)}`},get children(){return["@",We(()=>t()?.name??e.pubkey)]}})},CS=B('<a target="_blank" rel="noreferrer noopener">'),Ll=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return y(le,{get when(){return t()},get fallback(){return e.href},get children(){const n=CS();return S(n,()=>e.children??e.href),Me(i=>{const o=e.class,a=e.href;return o!==i._v$&&Og(n,i._v$=o),a!==i._v$2&&Xe(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},SS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},TS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},AS=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),IS=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),RS=e=>{let t;const[n,i]=$e(e.initialHidden);return y(le,{get when(){return!n()},get fallback(){return(()=>{const o=IS();return o.$$click=()=>i(!1),o})()},get children(){return y(Ll,{class:"my-2 block",get href(){return e.url},get children(){const o=AS(),a=t;return typeof a=="function"?yr(a,o):t=o,Me(l=>{const u=TS(e.url),d=e.url;return u!==l._v$&&Xe(o,"src",l._v$=u),d!==l._v$2&&Xe(o,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),o}})}})};ot(["click"]);const OS=B('<div class="my-1 rounded border p-1">'),LS=e=>y(le,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return y(to,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=OS();return S(t,y(as,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[dt.Text]}})),t}}),PS=B('<button class="inline text-blue-500 underline">'),fu=e=>{const{showProfile:t}=$r(),n=()=>{t(e.pubkey)};return(()=>{const i=PS();return i.$$click=n,S(i,y(iv,{get pubkey(){return e.pubkey}})),i})()};ot(["click"]);const[Rd,MS]=$e({}),sv=e=>{Rd()[e]==null&&MS(t=>({...t,[e]:new MessageChannel}))},BS=e=>{const t=()=>Rd()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const h=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",h),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",h),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",h,!1),t().port1.start()});return cn(()=>{const{id:o}=e();sv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},jS=e=>{const t=We(e),n=()=>Rd()[t().id];cn(()=>{const{id:i}=t();sv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,h=t().handler(d);(h instanceof Promise?h:Promise.resolve(h)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),br(()=>{o.removeEventListener("message",a)})})},ko=()=>BS(()=>({id:"CommandChannel"})),Du=e=>{jS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},hu=B("<span>"),P0=B('<div class="my-1 rounded border p-1">'),US=B('<span class="text-blue-500 underline">'),NS=B('<button class="text-blue-500 underline">'),DS=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),zS=e=>{const{config:t,saveColumn:n}=je(),i=ko(),o=()=>Tl(e.event),a=l=>{n(Ed({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return y(Ct,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=hu();return S(u,()=>l.content),u})();if(l.type==="URL")return SS(l.content)?y(RS,{get url(){return l.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):y(Ll,{class:"text-blue-500 underline",get href(){return l.content}});if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=hu();return S(d,()=>l.content),d})();if(u.type==="MentionedUser")return y(fu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?y(LS,{mentionedEvent:u}):y(to,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=P0();return S(u,y(as,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[dt.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=P0();return S(u,y(as,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?y(fu,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?y(fu,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=US();return S(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=NS();return u.$$click=()=>a(l.content),S(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=hu();return S(d,()=>l.content),d})():(()=>{const d=DS();return Xe(d,"src",u),Me(h=>{const p=l.content,g=l.shortcode;return p!==h._v$&&Xe(d,"alt",h._v$=p),g!==h._v$2&&Xe(d,"title",h._v$2=g),h},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};ot(["click"]);const HS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),us=(e={})=>(()=>{const t=HS();return Ge(t,e,!0,!0),t})(),FS=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),qS=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=FS();i.$$click=n;const o=t;return typeof o=="function"?yr(o,i):t=i,S(i,()=>e.children),i})()};ot(["click"]);const WS=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[90vh] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Ei=e=>y(qS,{onClose:()=>e.onClose?.(),get children(){const t=WS(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),S(i,y(le,{get when(){return e?.closeButton},get fallback(){return y(us,{})},keyed:!0,children:a=>a()})),S(o,()=>e.children),t}});ot(["click"]);const ZS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),VS=(e={})=>(()=>{const t=ZS();return Ge(t,e,!0,!0),t})(),KS=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),GS=B('<div class="relative inline-block"><button type="button">'),QS=e=>{const[t,n]=$e(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=GS(),a=o.firstChild;return a.$$click=i,S(a,y(VS,{})),S(o,y(le,{get when(){return t()},get children(){return KS()}}),null),Me(()=>Og(a,e.class)),o})()};ot(["click"]);const YS=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),JS=e=>{const t=We(()=>JSON.stringify(e.event,null,2));return y(Ei,{get onClose(){return e.onClose},get children(){const n=YS(),i=n.firstChild,o=i.nextSibling;return S(i,t),S(o,y(QS,{class:"h-4 w-4",get text(){return t()}})),n}})},XS=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),eT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),tT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),nT=e=>{const{profile:t,query:n}=ki(()=>({pubkey:e.pubkey}));return(()=>{const i=eT(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.firstChild,d=u.firstChild,h=d.firstChild;return o.$$click=p=>{p.preventDefault(),e.onShowProfile?.()},S(o,y(le,{get when(){return t()?.picture},keyed:!0,children:p=>(()=>{const g=tT();return Xe(g,"src",p),g})()})),u.$$click=p=>{p.preventDefault(),e?.onShowProfile?.()},S(d,y(le,{get when(){return(t()?.display_name?.length??0)>0},get children(){const p=XS();return S(p,()=>t()?.display_name),p}}),h),S(h,y(le,{get when(){return t()?.name},get fallback(){return`@${$o(e.pubkey)}`},keyed:!0,children:p=>`@${p}`})),i})()};ot(["click"]);const rT=B('<div class="px-4 py-2"><div> 件</div><div>'),iT=B('<div class="flex border-t py-1">'),zu=e=>{const{showProfile:t}=$r();return y(Ei,{get onClose(){return e.onClose},get children(){const n=rT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return S(i,()=>e.data.length,o),S(a,y(Ct,{get each(){return e.data},children:l=>{const u=()=>e.pubkeyExtractor(l);return(()=>{const d=iT();return S(d,y(le,{get when(){return e.renderInfo},keyed:!0,children:h=>h(l)}),null),S(d,y(nT,{get pubkey(){return u()},onShowProfile:()=>t(u())}),null),d})()}})),n}})},sT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),ov=(e={})=>(()=>{const t=sT();return Ge(t,e,!0,!0),t})(),oT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),aT=(e={})=>(()=>{const t=oT();return Ge(t,e,!0,!0),t})(),lT=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),cT=(e={})=>(()=>{const t=lT();return Ge(t,e,!0,!0),t})(),uT=e=>Math.floor(+e/1e3),dr=()=>uT(new Date),dT=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),fT=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],h=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...h,...p]},Pl=()=>{const e=Al(),t=async(d,h)=>{const p={...h};if(p.id=wl(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async v=>{const k=(await e().ensureRelay(v)).publish(g);return dT(k,v)})};return{publishTextNote:async d=>{const{relayUrls:h,pubkey:p,content:g}=d,v=fT(d),x={kind:1,pubkey:p,created_at:dr(),tags:v,content:g};return t(h,x)},publishReaction:async({relayUrls:d,pubkey:h,eventId:p,content:g,notifyPubkey:v})=>{const x={kind:7,pubkey:h,created_at:dr(),tags:[["e",p,""],["p",v]],content:g};return t(d,x)},publishRepost:async({relayUrls:d,pubkey:h,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:h,created_at:dr(),tags:[["e",p,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:h,profile:p,otherProperties:g})=>{const v={...p,...g},x={kind:dt.Metadata,pubkey:h,created_at:dr(),tags:[],content:JSON.stringify(v)};return t(d,x)},updateContacts:async({relayUrls:d,pubkey:h,followingPubkeys:p,content:g})=>{const v=p.map(k=>["p",k]),x={kind:dt.Contacts,pubkey:h,created_at:dr(),tags:v,content:g};return t(d,x)},deleteEvent:async({relayUrls:d,pubkey:h,eventId:p})=>{const g={kind:dt.EventDeletion,pubkey:h,created_at:dr(),tags:[["e",p,""]],content:""};return t(d,g)}}};let pu=!1;const[$a,hT]=$e(void 0),Gn=()=>(cn(()=>{if($a()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),$a()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&$a()==null&&!pu&&(pu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),hT(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{pu=!1})),e+=1},200)}),$a),pT=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},gT=e=>t=>Promise.allSettled(t.map(n=>e(n))),mT=B("<div>に返信"),vT=B('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),bT=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),yT=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),_T=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),wT=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},xT=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},$T=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},av=e=>{let t,n;const[i,o]=$e(""),[a,l]=$e(!1),[u,d]=$e(""),h=Y=>o(de=>`${de} ${Y}`),p=()=>{o(""),d(""),l(!1)},g=()=>{t?.blur(),p(),e.onClose()},{config:v,getEmoji:x}=je(),k=Gn(),$=Pl(),E=()=>e.replyTo&&Tl(e.replyTo),w=()=>e.mode??"normal",O=gi({mutationKey:["publishTextNote"],mutationFn:$.publishTextNote.bind($),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:Y=>{console.error("error",Y)}}),R=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},I=gi({mutationKey:["uploadFiles"],mutationFn:async Y=>{const de=await gT(pT)(Y),pe=[];if(de.forEach((we,Te)=>{we.status==="fulfilled"?(h(we.value.imageUrl),R()):pe.push(Y[Te])}),pe.length>0){const we=pe.map(Te=>Te.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${we}`)}}}),C=We(()=>{const Y=k();return E()?.taggedPubkeys()?.filter(de=>de!==Y)??[]}),A=We(()=>e.replyTo==null?[]:gr([e.replyTo.pubkey,...C()])),j=Y=>{const de=[];return Y.forEach(pe=>{const we=x(pe);we!=null&&de.push(["emoji",pe,we.url])}),de},N=()=>{if(i().length===0||O.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(i())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const Y=k();if(Y==null){console.error("pubkey is not available");return}const de=_m(i()),{hashtags:pe,urlReferences:we,pubkeyReferences:Te,eventReferences:Ve,emojis:te}=xT(de),G=$T(de),oe=j(te);let z={relayUrls:v().relayUrls,pubkey:Y,content:G,notifyPubkeys:Te,mentionEventIds:Ve,hashtags:pe,urls:we,tags:oe};E()!=null&&(z={...z,notifyPubkeys:gr([...A(),...Te]),rootEventId:E()?.rootEvent()?.id??E()?.replyingToEvent()?.id,replyEventId:E()?.id}),a()&&(z={...z,contentWarning:u()}),O.mutate(z),g()},ne=Y=>{o(Y.currentTarget.value),R()},V=Y=>{Y.preventDefault(),N()},J=Y=>{Y.key==="Enter"&&(Y.ctrlKey||Y.metaKey)?N():Y.key==="Escape"&&(t?.blur(),g())},W=Y=>{if(Y.preventDefault(),I.isLoading)return;const de=[...Y.currentTarget.files??[]];I.mutate(de),Y.currentTarget.value=""},Q=Y=>{if(Y.preventDefault(),I.isLoading)return;const de=[...Y?.dataTransfer?.files??[]];I.mutate(de)},se=Y=>{if(I.isLoading)return;const de=[...Y?.clipboardData?.items??[]],pe=[];de.forEach(we=>{if(we.kind==="file"){Y.preventDefault();const Te=we.getAsFile();if(Te==null)return;pe.push(Te)}}),pe.length!==0&&I.mutate(pe)},q=Y=>{Y.preventDefault()},ee=()=>i().trim().length===0||O.isLoading||I.isLoading,he=()=>I.isLoading;return cn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const Y=_T(),de=Y.firstChild,pe=de.firstChild,we=pe.nextSibling,Te=we.firstChild,Ve=Te.nextSibling,te=Ve.nextSibling,G=we.nextSibling;S(Y,y(le,{get when(){return e.replyTo!=null},get children(){const z=mT(),me=z.firstChild;return S(z,y(Ct,{get each(){return A()},children:(re,ze)=>[y(Il,{pubkey:re}),y(le,{get when(){return ze()!==A().length-1},children:" と "})]}),me),z}}),de),de.addEventListener("submit",V),S(de,y(le,{get when(){return a()},get children(){const z=vT();return z.$$input=me=>d(me.currentTarget.value),Me(()=>z.value=u()),z}}),pe),pe.addEventListener("paste",se),pe.addEventListener("drop",Q),pe.addEventListener("dragover",q),pe.$$keydown=J,pe.$$input=ne,yr(z=>{t=z,e.textAreaRef?.(z)},pe),S(we,y(le,{get when(){return w()==="reply"},get children(){const z=bT(),me=z.firstChild;return me.$$click=()=>g(),S(me,y(us,{})),z}}),Te),S(we,y(rv,{customEmojis:!0,onEmojiSelect:z=>h(z),get children(){const z=yT();return S(z,y(ov,{})),z}}),Te),Te.$$click=()=>l(z=>!z),Ve.$$click=()=>n?.click(),S(Ve,y(aT,{})),S(te,y(cT,{})),G.addEventListener("change",W);const oe=n;return typeof oe=="function"?yr(oe,G):n=G,Me(z=>{const me=wT(w()),re=!a(),ze=!!a(),ft=w()==="normal",it=w()==="normal",Le=w()==="reply",Fe=w()==="reply",St=!!he(),_n=!he(),ht=w()==="normal",Er=w()==="normal",Ti=w()==="reply",Mn=w()==="reply",yt=he(),wn=!!ee(),Bn=!ee(),Ai=w()==="normal",xe=w()==="normal",Yn=w()==="reply",Qt=w()==="reply",qt=ee();return me!==z._v$&&Xe(pe,"placeholder",z._v$=me),re!==z._v$2&&Te.classList.toggle("bg-rose-300",z._v$2=re),ze!==z._v$3&&Te.classList.toggle("bg-rose-400",z._v$3=ze),ft!==z._v$4&&Te.classList.toggle("h-8",z._v$4=ft),it!==z._v$5&&Te.classList.toggle("w-8",z._v$5=it),Le!==z._v$6&&Te.classList.toggle("h-7",z._v$6=Le),Fe!==z._v$7&&Te.classList.toggle("w-7",z._v$7=Fe),St!==z._v$8&&Ve.classList.toggle("bg-primary-disabled",z._v$8=St),_n!==z._v$9&&Ve.classList.toggle("bg-primary",z._v$9=_n),ht!==z._v$10&&Ve.classList.toggle("h-8",z._v$10=ht),Er!==z._v$11&&Ve.classList.toggle("w-8",z._v$11=Er),Ti!==z._v$12&&Ve.classList.toggle("h-7",z._v$12=Ti),Mn!==z._v$13&&Ve.classList.toggle("w-7",z._v$13=Mn),yt!==z._v$14&&(Ve.disabled=z._v$14=yt),wn!==z._v$15&&te.classList.toggle("bg-primary-disabled",z._v$15=wn),Bn!==z._v$16&&te.classList.toggle("bg-primary",z._v$16=Bn),Ai!==z._v$17&&te.classList.toggle("h-8",z._v$17=Ai),xe!==z._v$18&&te.classList.toggle("w-8",z._v$18=xe),Yn!==z._v$19&&te.classList.toggle("h-7",z._v$19=Yn),Qt!==z._v$20&&te.classList.toggle("w-7",z._v$20=Qt),qt!==z._v$21&&(te.disabled=z._v$21=qt),z},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Me(()=>pe.value=i()),Y})()};ot(["input","keydown","click"]);const kT=2,ET=()=>{let e;const[t,n]=$e(!1),i=o=>{e=o};return cn(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+kT)}),{overflow:t,elementRef:i}},CT=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),ST=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),TT=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),AT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),IT=e=>{const{overflow:t,elementRef:n}=ET(),i=Sm(),[o,a]=$e(),l=()=>i(e.createdAt),u=()=>e.createdAt.toLocaleString(),{profile:d}=ki(()=>({pubkey:e.authorPubkey}));return(()=>{const h=TT(),p=h.firstChild,g=p.firstChild,v=g.nextSibling,x=v.firstChild,k=x.firstChild,$=k.firstChild,E=$.firstChild,w=k.nextSibling,O=w.firstChild,R=x.nextSibling,I=R.nextSibling;return g.$$click=C=>{C.preventDefault(),e.onShowProfile?.()},S(g,y(le,{get when(){return d()?.picture},keyed:!0,children:C=>(()=>{const A=AT();return Xe(A,"src",C),A})()})),k.$$click=C=>{C.preventDefault(),e?.onShowProfile?.()},S($,y(le,{get when(){return(d()?.display_name?.length??0)>0},get children(){const C=CT();return S(C,()=>d()?.display_name),C}}),E),S(E,y(le,{get when(){return d()?.name!=null},get fallback(){return`@${$o(e.authorPubkey)}`},get children(){return["@",We(()=>d()?.name)]}})),O.$$click=C=>{C.preventDefault(),e.onShowEvent?.()},S(O,l),yr(n,R),S(R,()=>e.content),S(v,y(le,{get when(){return t()},get children(){const C=ST();return C.$$click=A=>{A.stopPropagation(),a(j=>!j)},S(C,y(le,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),C}}),I),S(I,()=>e.actions),S(h,y(le,{get when(){return e.footer},get children(){return e.footer}}),null),Me(C=>{const A=u(),j=!o();return A!==C._v$&&Xe(O,"title",C._v$=A),j!==C._v$2&&R.classList.toggle("max-h-screen",C._v$2=j),C},{_v$:void 0,_v$2:void 0}),h})()};ot(["click"]);const lv=jx(),RT=()=>Ux(lv),OT=()=>{const[e,t]=es({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},LT=/\p{Emoji_Presentation}/u,PT=e=>{const{shouldMuteEvent:t}=je(),n=wi(),i=We(e),o=We(()=>["useReactions",i()]),a=xi(o,({queryKey:g,signal:v})=>{const[,x]=g;if(x==null)return[];const{eventId:k}=x,$=new _s({type:"Reactions",mentionedEventId:k}),E=$.toUpdatePromise().catch(()=>[]);return $.onUpdate(w=>{n.setQueryData(g,w)}),ws({task:$,signal:v}),xr(15e3,`useReactions: ${k}`)(E)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!t(v));return{reactions:l,reactionsGroupedByContent:()=>{const g=new Map;return l().forEach(v=>{const x=g.get(v.content)??[];x.push(v),g.set(v.content,x)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&LT.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},MT=e=>{const{shouldMuteEvent:t}=je(),n=wi(),i=We(e),o=We(()=>["useReposts",i()]),a=xi(o,({queryKey:h,signal:p})=>{const[,g]=h;if(g==null)return[];const{eventId:v}=g,x=new _s({type:"Reposts",mentionedEventId:v}),k=x.toUpdatePromise().catch(()=>[]);return x.onUpdate($=>{n.setQueryData(h,$)}),ws({task:x,signal:p}),xr(15e3,`useReposts: ${v}`)(k)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!t(p));return{reposts:l,isRepostedBy:h=>l().findIndex(p=>p.pubkey===h)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},BT=B('<div class="flex gap-2 overflow-x-auto py-1">'),cv=B('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),jT=B('<span class="ml-1 text-sm">'),UT=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),uv=B('<span class="truncate text-base">'),NT=B('<span class="text-red-500">'),DT=B('<div class="nostr-textnote">'),zT=B('<div class="text-xs">'),HT=B('<div class="content whitespace-pre-wrap break-all">'),FT=B('<div class="textnote-content">'),qT=B('<div class="mt-1 rounded border p-1">'),WT=B('<button class="pr-1 text-blue-500 hover:underline">'),M0=B('<div class="text-sm text-zinc-400">'),ZT=B('<span class="inline-block h-4 w-4">'),VT=B('<div class="flex shrink-0 items-center gap-1">'),KT=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),GT=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),QT=B('<div class="w-6">'),{noteEncode:YT}=wo,JT=e=>{const{config:t}=je(),n=Gn();return(()=>{const i=BT();return S(i,y(Ct,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const l=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=UT();return u.$$click=()=>e.onReaction(o),S(u,y(le,{when:o==="+",get fallback(){return(()=>{const d=uv();return S(d,o),d})()},get children(){const d=cv();return S(d,y(Ga,{})),d}}),null),S(u,y(le,{get when(){return!t().hideCount},get children(){const d=jT();return S(d,()=>a.length),d}}),null),Me(d=>Zs(u,{"text-zinc-400":!l,"hover:bg-zinc-50":!l,"bg-rose-50":l,"border-rose-200":l,"text-rose-400":l},d)),u})()}})),i})()},dv=e=>{const t=vt(),{config:n}=je(),i=Gn(),{showProfile:o}=$r(),a=RT(),[l,u]=$e(!1),[d,h]=$e(!1),[p,g]=$e(!1),[v,x]=$e(null),k=()=>g(!1),$=()=>x(null),E=We(()=>Tl(e.event)),w=()=>e.embedding??!0,O=()=>e.actions??!0,{reactions:R,reactionsGroupedByContent:I,isReactedBy:C,isReactedByWithEmoji:A,invalidateReactions:j,query:N}=PT(()=>({eventId:e.event.id})),{reposts:ne,isRepostedBy:V,invalidateReposts:J,query:W}=MT(()=>({eventId:e.event.id})),Q=Pl(),se=gi({mutationKey:["publishReaction",E().id],mutationFn:Q.publishReaction.bind(Q),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:G=>{console.error("failed to publish reaction: ",G)},onSettled:()=>{j().then(()=>N.refetch()).catch(G=>console.error("failed to refetch reactions",G))}}),q=gi({mutationKey:["publishRepost",E().id],mutationFn:Q.publishRepost.bind(Q),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:G=>{console.error("failed to publish repost: ",G)},onSettled:()=>{J().then(()=>W.refetch()).catch(G=>console.error("failed to refetch reposts",G))}}),ee=gi({mutationKey:["deleteEvent",E().id],mutationFn:(...G)=>Q.deleteEvent(...G).then(oe=>Promise.allSettled(oe.map(xr(1e4)))),onSuccess:G=>{const oe=G.filter(me=>me.status==="fulfilled").length,z=G.length-oe;oe===G.length?window.alert(t()("post.deletedSuccessfully")):oe>0?window.alert(t()("post.failedToDeletePartially",{count:z})):window.alert(t()("post.failedToDelete"))},onError:G=>{console.error("failed to delete",G)}}),he=[{content:()=>t()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(YT(e.event.id)).catch(G=>window.alert(G))}},{content:()=>t()("post.showJSON"),onSelect:()=>{x("EventDebugModal")}},{content:()=>t()("post.showReposts"),onSelect:()=>{x("Reposts")}},{content:()=>t()("post.showReactions"),onSelect:()=>{x("Reactions")}},{when:()=>E().pubkey===i(),content:()=>(()=>{const G=NT();return S(G,()=>t()("post.deletePost")),G})(),onSelect:()=>{const G=i();G!=null&&window.confirm(t()("post.confirmDelete"))&&ee.mutate({relayUrls:n().relayUrls,pubkey:G,eventId:E().id})}}],Y=We(()=>{const G=i();return G!=null&&C(G)||l()}),de=We(()=>{const G=i();return G!=null&&A(G)}),pe=We(()=>{const G=i();return G!=null&&V(G)||d()}),we=()=>{if(w()){const G=E().replyingToEvent();if(G!=null&&!E().containsEventMention(G.id))return G.id;const oe=E().rootEvent();if(G==null&&oe!=null&&!E().containsEventMention(oe.id))return oe.id}},Te=G=>{G.stopPropagation(),!pe()&&ln([i(),e.event.id])(([oe,z])=>{q.mutate({relayUrls:n().relayUrls,pubkey:oe,eventId:z,notifyPubkey:e.event.pubkey}),h(!0)})},Ve=G=>{Y()||ln([i(),e.event.id])(([oe,z])=>{se.mutate({relayUrls:n().relayUrls,pubkey:oe,content:G??"+",eventId:z,notifyPubkey:e.event.pubkey}),u(!0)})},te=G=>{G.stopPropagation(),Ve()};return(()=>{const G=DT();return S(G,y(IT,{get authorPubkey(){return E().pubkey},get createdAt(){return E().createdAtAsDate()},get content(){return(()=>{const oe=FT();return S(oe,y(le,{get when(){return we()},keyed:!0,children:z=>(()=>{const me=qT();return S(me,y(as,{eventId:z,actions:!1,embedding:!1})),me})()}),null),S(oe,y(le,{get when(){return E().taggedPubkeys().length>0},get children(){const z=zT();return S(z,()=>t()("post.replyToPre"),null),S(z,y(Ct,{get each(){return E().taggedPubkeys()},children:me=>(()=>{const re=WT();return re.$$click=ze=>{ze.stopPropagation(),o(me)},S(re,y(iv,{pubkey:me})),re})()}),null),S(z,()=>t()("post.replyToPost"),null),z}}),null),S(oe,y(ES,{get contentWarning(){return E().contentWarning()},get children(){const z=HT();return S(z,y(zS,{get event(){return e.event},get embedding(){return w()}})),z}}),null),oe})()},get actions(){return y(le,{get when(){return O()},get children(){return[y(le,{get when(){return We(()=>!!n().showEmojiReaction)()&&R().length>0},get children(){return y(JT,{get reactionsGroupedByContent(){return I()},onReaction:Ve})}}),(()=>{const oe=GT(),z=oe.firstChild,me=z.nextSibling,re=me.firstChild,ze=me.nextSibling,ft=ze.firstChild,it=ze.nextSibling;return z.$$click=Le=>{Le.stopPropagation(),g(Fe=>!Fe)},S(z,y(EC,{})),re.$$click=Te,S(re,y(rm,{})),S(me,y(le,{get when(){return We(()=>!n().hideCount)()&&ne().length>0},get children(){const Le=M0();return S(Le,()=>ne().length),Le}}),null),ft.$$click=te,S(ft,y(le,{get when(){return We(()=>!!Y())()&&!de()},get fallback(){return y(Sd,{})},get children(){return y(Ga,{})}})),S(ze,y(le,{get when(){return We(()=>!n().hideCount&&!n().showEmojiReaction)()&&R().length>0},get children(){const Le=M0();return S(Le,()=>R().length),Le}}),null),S(oe,y(le,{get when(){return n().useEmojiReaction},get children(){const Le=VT();return S(Le,y(rv,{onEmojiSelect:Fe=>Ve(Fe),get children(){const Fe=ZT();return S(Fe,y(Im,{})),Fe}})),Me(Fe=>Zs(Le,{"text-zinc-400":!Y()||!de(),"hover:text-rose-400":!Y()||!de(),"text-rose-400":Y()&&de()||se.isLoading},Fe)),Le}}),it),S(it,y(Rm,{menu:he,get children(){const Le=KT();return S(Le,y(Am,{})),Le}})),Me(Le=>{const Fe={"text-zinc-400":!pe(),"hover:text-green-400":!pe(),"text-green-400":pe()||q.isLoading},St=q.isLoading,_n={"text-zinc-400":!Y()||de(),"hover:text-rose-400":!Y()||de(),"text-rose-400":Y()&&!de()||se.isLoading},ht=se.isLoading;return Le._v$=Zs(me,Fe,Le._v$),St!==Le._v$2&&(re.disabled=Le._v$2=St),Le._v$3=Zs(ze,_n,Le._v$3),ht!==Le._v$4&&(ft.disabled=Le._v$4=ht),Le},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),oe})()]}})},get footer(){return y(le,{get when(){return p()},get children(){return y(av,{mode:"reply",get replyTo(){return e.event},onClose:k,onPost:k})}})},onShowProfile:()=>{o(E().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:e.event})}}),null),S(G,y(an,{get children(){return[y(De,{get when(){return v()==="EventDebugModal"},get children(){return y(JS,{get event(){return e.event},onClose:$})}}),y(De,{get when(){return v()==="Reactions"},get children(){return y(zu,{get data(){return R()},pubkeyExtractor:oe=>oe.pubkey,renderInfo:({content:oe})=>(()=>{const z=QT();return S(z,y(le,{when:oe==="+",get fallback(){return(()=>{const me=uv();return S(me,oe),me})()},get children(){const me=cv();return S(me,y(Ga,{})),me}})),z})(),onClose:$})}}),y(De,{get when(){return v()==="Reposts"},get children(){return y(zu,{get data(){return ne()},pubkeyExtractor:oe=>oe.pubkey,onClose:$})}})]}}),null),G})()};ot(["click"]);const fv=e=>{const{shouldMuteEvent:t}=je();return y(le,{get when(){return!t(e.event)},get children(){return y(dv,e)}})},XT=B("<span>予期しないイベント種別（<!>）"),eA=B("<span><span>未対応のイベント種別（<!>）"),hv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return y(an,{get fallback(){return(()=>{const n=eA(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,S(i,()=>e.event.kind,a),S(n,y(to,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[y(De,{get when(){return!t()},keyed:!0,get children(){const n=XT(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,S(n,()=>e.event.kind,o),S(n,y(to,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),y(De,{get when(){return e.event.kind===dt.Text},get children(){return y(fv,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),y(De,{get when(){return e.event.kind===6},get children(){return y(Tm,{get event(){return e.event}})}})]}})},xs=e=>{const{shouldMuteEvent:t}=je();return y(Ct,{get each(){return e.events},children:n=>y(le,{get when(){return!t(n)},get children(){return y(Vs,{get children(){return y(hv,{event:n})}})}})})};var tA=ul;function nA(){this.__data__=new tA,this.size=0}var rA=nA;function iA(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var sA=iA;function oA(e){return this.__data__.get(e)}var aA=oA;function lA(e){return this.__data__.has(e)}var cA=lA,uA=ul,dA=ed,fA=td,hA=200;function pA(e,t){var n=this.__data__;if(n instanceof uA){var i=n.__data__;if(!dA||i.length<hA-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new fA(i)}return n.set(e,t),this.size=n.size,this}var gA=pA,mA=ul,vA=rA,bA=sA,yA=aA,_A=cA,wA=gA;function $s(e){var t=this.__data__=new mA(e);this.size=t.size}$s.prototype.clear=vA;$s.prototype.delete=bA;$s.prototype.get=yA;$s.prototype.has=_A;$s.prototype.set=wA;var Od=$s;function xA(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var $A=xA,kA=Dg,EA=$A,CA=zg,SA=1,TA=2;function AA(e,t,n,i,o,a){var l=n&SA,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var g=-1,v=!0,x=n&TA?new kA:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var k=e[g],$=t[g];if(i)var E=l?i($,k,g,t,e,a):i(k,$,g,e,t,a);if(E!==void 0){if(E)continue;v=!1;break}if(x){if(!EA(t,function(w,O){if(!CA(x,O)&&(k===w||o(k,w,n,i,a)))return x.push(O)})){v=!1;break}}else if(!(k===$||o(k,$,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var pv=AA,IA=Ln,RA=IA.Uint8Array,gv=RA;function OA(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var LA=OA,B0=fs,j0=gv,PA=Xu,MA=pv,BA=LA,jA=nd,UA=1,NA=2,DA="[object Boolean]",zA="[object Date]",HA="[object Error]",FA="[object Map]",qA="[object Number]",WA="[object RegExp]",ZA="[object Set]",VA="[object String]",KA="[object Symbol]",GA="[object ArrayBuffer]",QA="[object DataView]",U0=B0?B0.prototype:void 0,gu=U0?U0.valueOf:void 0;function YA(e,t,n,i,o,a,l){switch(n){case QA:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case GA:return!(e.byteLength!=t.byteLength||!a(new j0(e),new j0(t)));case DA:case zA:case qA:return PA(+e,+t);case HA:return e.name==t.name&&e.message==t.message;case WA:case VA:return e==t+"";case FA:var u=BA;case ZA:var d=i&UA;if(u||(u=jA),e.size!=t.size&&!d)return!1;var h=l.get(e);if(h)return h==t;i|=NA,l.set(e,t);var p=MA(u(e),u(t),i,o,a,l);return l.delete(e),p;case KA:if(gu)return gu.call(e)==gu.call(t)}return!1}var JA=YA;function XA(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Ld=XA,eI=Array.isArray,Qn=eI,tI=Ld,nI=Qn;function rI(e,t,n){var i=t(e);return nI(e)?i:tI(i,n(e))}var mv=rI;function iI(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var sI=iI;function oI(){return[]}var vv=oI,aI=sI,lI=vv,cI=Object.prototype,uI=cI.propertyIsEnumerable,N0=Object.getOwnPropertySymbols,dI=N0?function(e){return e==null?[]:(e=Object(e),aI(N0(e),function(t){return uI.call(e,t)}))}:lI,Pd=dI;function fI(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var hI=fI;function pI(e){return e!=null&&typeof e=="object"}var Xr=pI,gI=hs,mI=Xr,vI="[object Arguments]";function bI(e){return mI(e)&&gI(e)==vI}var yI=bI,D0=yI,_I=Xr,bv=Object.prototype,wI=bv.hasOwnProperty,xI=bv.propertyIsEnumerable,$I=D0(function(){return arguments}())?D0:function(e){return _I(e)&&wI.call(e,"callee")&&!xI.call(e,"callee")},Md=$I,nl={exports:{}};function kI(){return!1}var EI=kI;nl.exports;(function(e,t){var n=Ln,i=EI,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,h=d||i;e.exports=h})(nl,nl.exports);var Bd=nl.exports,CI=9007199254740991,SI=/^(?:0|[1-9]\d*)$/;function TI(e,t){var n=typeof e;return t=t??CI,!!t&&(n=="number"||n!="symbol"&&SI.test(e))&&e>-1&&e%1==0&&e<t}var jd=TI,AI=9007199254740991;function II(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=AI}var Ud=II,RI=hs,OI=Ud,LI=Xr,PI="[object Arguments]",MI="[object Array]",BI="[object Boolean]",jI="[object Date]",UI="[object Error]",NI="[object Function]",DI="[object Map]",zI="[object Number]",HI="[object Object]",FI="[object RegExp]",qI="[object Set]",WI="[object String]",ZI="[object WeakMap]",VI="[object ArrayBuffer]",KI="[object DataView]",GI="[object Float32Array]",QI="[object Float64Array]",YI="[object Int8Array]",JI="[object Int16Array]",XI="[object Int32Array]",eR="[object Uint8Array]",tR="[object Uint8ClampedArray]",nR="[object Uint16Array]",rR="[object Uint32Array]",rt={};rt[GI]=rt[QI]=rt[YI]=rt[JI]=rt[XI]=rt[eR]=rt[tR]=rt[nR]=rt[rR]=!0;rt[PI]=rt[MI]=rt[VI]=rt[BI]=rt[KI]=rt[jI]=rt[UI]=rt[NI]=rt[DI]=rt[zI]=rt[HI]=rt[FI]=rt[qI]=rt[WI]=rt[ZI]=!1;function iR(e){return LI(e)&&OI(e.length)&&!!rt[RI(e)]}var sR=iR;function oR(e){return function(t){return e(t)}}var Nd=oR,rl={exports:{}};rl.exports;(function(e,t){var n=Bg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(rl,rl.exports);var Dd=rl.exports,aR=sR,lR=Nd,z0=Dd,H0=z0&&z0.isTypedArray,cR=H0?lR(H0):aR,yv=cR,uR=hI,dR=Md,fR=Qn,hR=Bd,pR=jd,gR=yv,mR=Object.prototype,vR=mR.hasOwnProperty;function bR(e,t){var n=fR(e),i=!n&&dR(e),o=!n&&!i&&hR(e),a=!n&&!i&&!o&&gR(e),l=n||i||o||a,u=l?uR(e.length,String):[],d=u.length;for(var h in e)(t||vR.call(e,h))&&!(l&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||pR(h,d)))&&u.push(h);return u}var _v=bR,yR=Object.prototype;function _R(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||yR;return e===n}var zd=_R;function wR(e,t){return function(n){return e(t(n))}}var wv=wR,xR=wv,$R=xR(Object.keys,Object),kR=$R,ER=zd,CR=kR,SR=Object.prototype,TR=SR.hasOwnProperty;function AR(e){if(!ER(e))return CR(e);var t=[];for(var n in Object(e))TR.call(e,n)&&n!="constructor"&&t.push(n);return t}var IR=AR,RR=Ug,OR=Ud;function LR(e){return e!=null&&OR(e.length)&&!RR(e)}var xv=LR,PR=_v,MR=IR,BR=xv;function jR(e){return BR(e)?PR(e):MR(e)}var Ml=jR,UR=mv,NR=Pd,DR=Ml;function zR(e){return UR(e,DR,NR)}var $v=zR,F0=$v,HR=1,FR=Object.prototype,qR=FR.hasOwnProperty;function WR(e,t,n,i,o,a){var l=n&HR,u=F0(e),d=u.length,h=F0(t),p=h.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:qR.call(t,v)))return!1}var x=a.get(e),k=a.get(t);if(x&&k)return x==t&&k==e;var $=!0;a.set(e,t),a.set(t,e);for(var E=l;++g<d;){v=u[g];var w=e[v],O=t[v];if(i)var R=l?i(O,w,v,t,e,a):i(w,O,v,e,t,a);if(!(R===void 0?w===O||o(w,O,n,i,a):R)){$=!1;break}E||(E=v=="constructor")}if($&&!E){var I=e.constructor,C=t.constructor;I!=C&&"constructor"in e&&"constructor"in t&&!(typeof I=="function"&&I instanceof I&&typeof C=="function"&&C instanceof C)&&($=!1)}return a.delete(e),a.delete(t),$}var ZR=WR,VR=$i,KR=Ln,GR=VR(KR,"DataView"),QR=GR,YR=$i,JR=Ln,XR=YR(JR,"Promise"),eO=XR,tO=$i,nO=Ln,rO=tO(nO,"WeakMap"),iO=rO,Hu=QR,Fu=ed,qu=eO,Wu=Hg,Zu=iO,kv=hs,ks=Ng,q0="[object Map]",sO="[object Object]",W0="[object Promise]",Z0="[object Set]",V0="[object WeakMap]",K0="[object DataView]",oO=ks(Hu),aO=ks(Fu),lO=ks(qu),cO=ks(Wu),uO=ks(Zu),ci=kv;(Hu&&ci(new Hu(new ArrayBuffer(1)))!=K0||Fu&&ci(new Fu)!=q0||qu&&ci(qu.resolve())!=W0||Wu&&ci(new Wu)!=Z0||Zu&&ci(new Zu)!=V0)&&(ci=function(e){var t=kv(e),n=t==sO?e.constructor:void 0,i=n?ks(n):"";if(i)switch(i){case oO:return K0;case aO:return q0;case lO:return W0;case cO:return Z0;case uO:return V0}return t});var Bl=ci,mu=Od,dO=pv,fO=JA,hO=ZR,G0=Bl,Q0=Qn,Y0=Bd,pO=yv,gO=1,J0="[object Arguments]",X0="[object Array]",ka="[object Object]",mO=Object.prototype,eg=mO.hasOwnProperty;function vO(e,t,n,i,o,a){var l=Q0(e),u=Q0(t),d=l?X0:G0(e),h=u?X0:G0(t);d=d==J0?ka:d,h=h==J0?ka:h;var p=d==ka,g=h==ka,v=d==h;if(v&&Y0(e)){if(!Y0(t))return!1;l=!0,p=!1}if(v&&!p)return a||(a=new mu),l||pO(e)?dO(e,t,n,i,o,a):fO(e,t,d,n,i,o,a);if(!(n&gO)){var x=p&&eg.call(e,"__wrapped__"),k=g&&eg.call(t,"__wrapped__");if(x||k){var $=x?e.value():e,E=k?t.value():t;return a||(a=new mu),o($,E,n,i,a)}}return v?(a||(a=new mu),hO(e,t,n,i,o,a)):!1}var bO=vO,yO=bO,tg=Xr;function Ev(e,t,n,i,o){return e===t?!0:e==null||t==null||!tg(e)&&!tg(t)?e!==e&&t!==t:yO(e,t,n,i,Ev,o)}var Cv=Ev,_O=Od,wO=Cv,xO=1,$O=2;function kO(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],h=e[d],p=u[1];if(l&&u[2]){if(h===void 0&&!(d in e))return!1}else{var g=new _O;if(i)var v=i(h,p,d,e,t,g);if(!(v===void 0?wO(p,h,xO|$O,i,g):v))return!1}}return!0}var EO=kO,CO=Zn;function SO(e){return e===e&&!CO(e)}var Sv=SO,TO=Sv,AO=Ml;function IO(e){for(var t=AO(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,TO(o)]}return t}var RO=IO;function OO(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var Tv=OO,LO=EO,PO=RO,MO=Tv;function BO(e){var t=PO(e);return t.length==1&&t[0][2]?MO(t[0][0],t[0][1]):function(n){return n===e||LO(n,e,t)}}var jO=BO,UO=hs,NO=Xr,DO="[object Symbol]";function zO(e){return typeof e=="symbol"||NO(e)&&UO(e)==DO}var jl=zO,HO=Qn,FO=jl,qO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,WO=/^\w*$/;function ZO(e,t){if(HO(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||FO(e)?!0:WO.test(e)||!qO.test(e)||t!=null&&e in Object(t)}var Hd=ZO,Av=td,VO="Expected a function";function Fd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(VO);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Fd.Cache||Av),n}Fd.Cache=Av;var KO=Fd,GO=KO,QO=500;function YO(e){var t=GO(e,function(i){return n.size===QO&&n.clear(),i}),n=t.cache;return t}var JO=YO,XO=JO,eL=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tL=/\\(\\)?/g,nL=XO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(eL,function(n,i,o,a){t.push(o?a.replace(tL,"$1"):i||n)}),t}),rL=nL;function iL(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var qd=iL,ng=fs,sL=qd,oL=Qn,aL=jl,lL=1/0,rg=ng?ng.prototype:void 0,ig=rg?rg.toString:void 0;function Iv(e){if(typeof e=="string")return e;if(oL(e))return sL(e,Iv)+"";if(aL(e))return ig?ig.call(e):"";var t=e+"";return t=="0"&&1/e==-lL?"-0":t}var cL=Iv,uL=cL;function dL(e){return e==null?"":uL(e)}var fL=dL,hL=Qn,pL=Hd,gL=rL,mL=fL;function vL(e,t){return hL(e)?e:pL(e,t)?[e]:gL(mL(e))}var Es=vL,bL=jl,yL=1/0;function _L(e){if(typeof e=="string"||bL(e))return e;var t=e+"";return t=="0"&&1/e==-yL?"-0":t}var Cs=_L,wL=Es,xL=Cs;function $L(e,t){t=wL(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[xL(t[n++])];return n&&n==i?e:void 0}var Ul=$L,kL=Ul;function EL(e,t,n){var i=e==null?void 0:kL(e,t);return i===void 0?n:i}var CL=EL;function SL(e,t){return e!=null&&t in Object(e)}var TL=SL,AL=Es,IL=Md,RL=Qn,OL=jd,LL=Ud,PL=Cs;function ML(e,t,n){t=AL(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=PL(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&LL(o)&&OL(l,o)&&(RL(e)||IL(e)))}var BL=ML,jL=TL,UL=BL;function NL(e,t){return e!=null&&UL(e,t,jL)}var DL=NL,zL=Cv,HL=CL,FL=DL,qL=Hd,WL=Sv,ZL=Tv,VL=Cs,KL=1,GL=2;function QL(e,t){return qL(e)&&WL(t)?ZL(VL(e),t):function(n){var i=HL(n,e);return i===void 0&&i===t?FL(n,e):zL(t,i,KL|GL)}}var YL=QL;function JL(e){return e}var Rv=JL;function XL(e){return function(t){return t?.[e]}}var eP=XL,tP=Ul;function nP(e){return function(t){return tP(t,e)}}var rP=nP,iP=eP,sP=rP,oP=Hd,aP=Cs;function lP(e){return oP(e)?iP(aP(e)):sP(e)}var cP=lP,uP=jO,dP=YL,fP=Rv,hP=Qn,pP=cP;function gP(e){return typeof e=="function"?e:e==null?fP:typeof e=="object"?hP(e)?dP(e[0],e[1]):uP(e):pP(e)}var Wd=gP,mP=Wd,vP=Fg;function bP(e,t){return e&&e.length?vP(e,mP(t)):[]}var yP=bP;const Ov=go(yP),sg=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Aa=0;const{setActiveSubscriptions:_P}=$m();setInterval(()=>{_P(Aa)},1e3);const kr=e=>{const{config:t,shouldMuteEvent:n}=je(),i=Al(),[o,a]=$e([]);Dn(ol(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(h=>!n(h)))},{defer:!0})),cn(()=>{console.debug("subscription mounted",e()?.debugId,e()),br(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const h=e()?.limit??50;a(p=>{const g=Z1.insertEventIntoDescendingList(p,d).slice(0,h),v=Ov(g,x=>x.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:h,filters:p,options:g,onEvent:v,onEOSE:x,continuous:k=!0}=d,$=i().sub(h,p,g);let E=!0;Aa+=1;let w=!1,O=!1;const R=[];$.on("event",A=>{v?.(A),!(d.clientEventFilter!=null&&!d.clientEventFilter(A))&&(O?l(A):(w=!0,R.push(A)))}),$.on("eose",()=>{x?.(),O=!0,a(sg(R)),k||($.unsub(),E&&(E=!1,Aa-=1))});let I=!1;const C=setInterval(()=>{if(!I){if(I=!0,O){clearInterval(C),I=!1;return}w&&(w=!1,a(sg(R))),I=!1}},100);br(()=>{console.debug("startSubscription: end"),$.unsub(),E&&(E=!1,Aa-=1),clearInterval(C)})};return Dn(()=>{u()}),{events:o}},wP=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),gr(t)},xP=e=>{const{config:t}=je(),n=()=>Tl(e.event),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:wP(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return y(xs,{get events(){return[...i()].reverse()}})},$P=e=>y(an,{get children(){return y(De,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>y(xP,{get event(){return t.event}})})}}),kP=B('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),EP=B('<div class="shrink-0 border-b">'),CP=B('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),SP=B('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth pb-8">'),Ci=e=>{let t;const n=OT(),i=()=>e.width??"medium";return Du(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Du(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),y(lv.Provider,{value:n,get children(){const o=kP(),a=t;return typeof a=="function"?yr(a,o):t=o,S(o,y(le,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const l=EP();return S(l,()=>e.header),l})(),(()=>{const l=CP();return S(l,()=>e.children),l})()]},children:l=>(()=>{const u=SP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=d.nextSibling;return h.$$click=()=>n?.clearTimeline(),S(p,y(Ju,{})),S(g,y($P,{timelineContent:l})),u})()})),Me(l=>Zs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},l)),o}})};ot(["click"]);const TP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),AP=(e={})=>(()=>{const t=TP();return Ge(t,e,!0,!0),t})(),IP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),RP=(e={})=>(()=>{const t=IP();return Ge(t,e,!0,!0),t})(),OP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),LP=(e={})=>(()=>{const t=OP();return Ge(t,e,!0,!0),t})(),PP=B('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),MP=B('<div class="scrollbar flex h-9 gap-2 overflow-x-scroll"><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100">'),BP=B('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600"><span class="inline-block h-4 w-4">'),jP=e=>(()=>{const t=PP(),n=t.firstChild,i=n.nextSibling;return S(n,()=>e.title),S(i,()=>e.children),t})(),Si=e=>{const t=vt(),{saveColumn:n,removeColumn:i,moveColumn:o}=je(),a=ko(),l=d=>{n({...e.column,width:d})},u=d=>{o(e.column.id,d),a({command:"moveToColumn",columnIndex:d}).catch(h=>console.error(h))};return(()=>{const d=BP(),h=d.firstChild,p=h.firstChild,g=p.firstChild,v=p.nextSibling,x=v.firstChild,k=v.nextSibling,$=k.nextSibling,E=$.firstChild;return S(d,y(jP,{get title(){return t()("column.config.columnWidth")},get children(){const w=MP(),O=w.firstChild,R=O.nextSibling,I=R.nextSibling,C=I.nextSibling;return O.$$click=()=>l("widest"),S(O,()=>t()("column.config.widest")),R.$$click=()=>l("wide"),S(R,()=>t()("column.config.wide")),I.$$click=()=>l("medium"),S(I,()=>t()("column.config.medium")),C.$$click=()=>l("narrow"),S(C,()=>t()("column.config.narrow")),w}}),h),p.$$click=()=>u(e.columnIndex-1),S(g,y(AP,{})),v.$$click=()=>u(e.columnIndex+1),S(x,y(RP,{})),$.$$click=()=>i(e.column.id),S(E,y(LP,{})),Me(w=>{const O=t()("column.config.moveLeft"),R=t()("column.config.moveRight"),I=t()("column.config.removeColumn"),C=t()("column.config.removeColumn");return O!==w._v$&&Xe(p,"title",w._v$=O),R!==w._v$2&&Xe(v,"title",w._v$2=R),I!==w._v$3&&Xe($,"title",w._v$3=I),C!==w._v$4&&Xe(E,"aria-label",w._v$4=C),w},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})()};ot(["click"]);const UP=ct.array(ct.array(ct.string()));class NP extends um{constructor(t){super(),this.tags=t}}const DP=e=>{try{const t=UP.parse(JSON.parse(e));return new NP(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[og,zP]=Lg(()=>$e({})),[HP,FP]=Lg(()=>$e({})),qP=e=>{const t=Gn(),[n,i]=$e(null);return Dn(()=>{const o=e();if(o==null)return;const{encrypted:a}=o;if(a in og()){i(og()[a]);return}const l=t();l!=null&&(HP()[a]||(FP(u=>({...u,[a]:!0})),window.nostr?.nip04?.decrypt?.(l,a)?.then(u=>{zP(d=>({...d,[a]:u})),i(u)}).catch(u=>{console.error(`failed to decrypt "${a}"`,u)})))}),n},WP=e=>{const t=We(()=>pr(e.event)),n=qP(()=>{const{content:a}=t();return a==null||a.length===0?null:{id:t().id,encrypted:a}}),i=()=>{const a=n();if(a==null)return[];console.log(a);try{return DP(a).taggedEventIds()}catch(l){return console.warn(l),[]}},o=()=>t().taggedEventIds();return y(Ct,{get each(){return[...o(),...i()]},children:a=>y(Vs,{get children(){return y(as,{eventId:a,get ensureKinds(){return[dt.Text]}})}})})},ZP=e=>{const t=wi(),n=We(e),o=xi(()=>["useFollowings",n()],({queryKey:l,signal:u})=>{console.debug("useFollowings");const[,d]=l;if(d==null)return Promise.resolve(null);const{kind:h,author:p,identifier:g}=d,v=new _s({type:"ParameterizedReplaceableEvent",kind:h,author:p,identifier:g}),x=v.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${p}:${g}`)});return v.onUpdate(k=>{const $=Cd(k);t.setQueryData(l,$)}),ws({task:v,signal:u}),xr(15e3,`useParameterizedReplaceableEvent: ${h}:${p}:${g}`)(x)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},VP=e=>{const t=vt(),{removeColumn:n}=je(),{event:i}=ZP(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return y(Ci,{get header(){return y(ds,{get name(){return e.column.name??t()("column.bookmark")},get icon(){return y(Yx,{})},settings:()=>y(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(le,{get when(){return i()},keyed:!0,children:o=>y(WP,{event:o})})}})},KP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),Lv=(e={})=>(()=>{const t=KP();return Ge(t,e,!0,!0),t})();var il={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */il.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",g=1,v=2,x=4,k=1,$=2,E=1,w=2,O=4,R=8,I=16,C=32,A=64,j=128,N=256,ne=512,V=30,J="...",W=800,Q=16,se=1,q=2,ee=3,he=1/0,Y=9007199254740991,de=17976931348623157e292,pe=0/0,we=4294967295,Te=we-1,Ve=we>>>1,te=[["ary",j],["bind",E],["bindKey",w],["curry",R],["curryRight",I],["flip",ne],["partial",C],["partialRight",A],["rearg",N]],G="[object Arguments]",oe="[object Array]",z="[object AsyncFunction]",me="[object Boolean]",re="[object Date]",ze="[object DOMException]",ft="[object Error]",it="[object Function]",Le="[object GeneratorFunction]",Fe="[object Map]",St="[object Number]",_n="[object Null]",ht="[object Object]",Er="[object Promise]",Ti="[object Proxy]",Mn="[object RegExp]",yt="[object Set]",wn="[object String]",Bn="[object Symbol]",Ai="[object Undefined]",xe="[object WeakMap]",Yn="[object WeakSet]",Qt="[object ArrayBuffer]",qt="[object DataView]",Cr="[object Float32Array]",Jn="[object Float64Array]",Xn="[object Int8Array]",Sr="[object Int16Array]",Ii="[object Int32Array]",Ri="[object Uint8Array]",Oi="[object Uint8ClampedArray]",Nl="[object Uint16Array]",Dl="[object Uint32Array]",Kv=/\b__p \+= '';/g,Gv=/\b(__p \+=) '' \+/g,Qv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xd=/&(?:amp|lt|gt|quot|#39);/g,ef=/[&<>"']/g,Yv=RegExp(Xd.source),Jv=RegExp(ef.source),Xv=/<%-([\s\S]+?)%>/g,e2=/<%([\s\S]+?)%>/g,tf=/<%=([\s\S]+?)%>/g,t2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n2=/^\w*$/,r2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zl=/[\\^$.*+?()[\]{}|]/g,i2=RegExp(zl.source),Hl=/^\s+/,s2=/\s/,o2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,a2=/\{\n\/\* \[wrapped with (.+)\] \*/,l2=/,? & /,c2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u2=/[()=,{}\[\]\/\s]/,d2=/\\(\\)?/g,f2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,nf=/\w*$/,h2=/^[-+]0x[0-9a-f]+$/i,p2=/^0b[01]+$/i,g2=/^\[object .+?Constructor\]$/,m2=/^0o[0-7]+$/i,v2=/^(?:0|[1-9]\d*)$/,b2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Co=/($^)/,y2=/['\n\r\u2028\u2029\\]/g,So="\\ud800-\\udfff",_2="\\u0300-\\u036f",w2="\\ufe20-\\ufe2f",x2="\\u20d0-\\u20ff",rf=_2+w2+x2,sf="\\u2700-\\u27bf",of="a-z\\xdf-\\xf6\\xf8-\\xff",$2="\\xac\\xb1\\xd7\\xf7",k2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",E2="\\u2000-\\u206f",C2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",af="A-Z\\xc0-\\xd6\\xd8-\\xde",lf="\\ufe0e\\ufe0f",cf=$2+k2+E2+C2,Fl="['’]",S2="["+So+"]",uf="["+cf+"]",To="["+rf+"]",df="\\d+",T2="["+sf+"]",ff="["+of+"]",hf="[^"+So+cf+df+sf+of+af+"]",ql="\\ud83c[\\udffb-\\udfff]",A2="(?:"+To+"|"+ql+")",pf="[^"+So+"]",Wl="(?:\\ud83c[\\udde6-\\uddff]){2}",Zl="[\\ud800-\\udbff][\\udc00-\\udfff]",Li="["+af+"]",gf="\\u200d",mf="(?:"+ff+"|"+hf+")",I2="(?:"+Li+"|"+hf+")",vf="(?:"+Fl+"(?:d|ll|m|re|s|t|ve))?",bf="(?:"+Fl+"(?:D|LL|M|RE|S|T|VE))?",yf=A2+"?",_f="["+lf+"]?",R2="(?:"+gf+"(?:"+[pf,Wl,Zl].join("|")+")"+_f+yf+")*",O2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",L2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wf=_f+yf+R2,P2="(?:"+[T2,Wl,Zl].join("|")+")"+wf,M2="(?:"+[pf+To+"?",To,Wl,Zl,S2].join("|")+")",B2=RegExp(Fl,"g"),j2=RegExp(To,"g"),Vl=RegExp(ql+"(?="+ql+")|"+M2+wf,"g"),U2=RegExp([Li+"?"+ff+"+"+vf+"(?="+[uf,Li,"$"].join("|")+")",I2+"+"+bf+"(?="+[uf,Li+mf,"$"].join("|")+")",Li+"?"+mf+"+"+vf,Li+"+"+bf,L2,O2,df,P2].join("|"),"g"),N2=RegExp("["+gf+So+rf+lf+"]"),D2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,z2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],H2=-1,nt={};nt[Cr]=nt[Jn]=nt[Xn]=nt[Sr]=nt[Ii]=nt[Ri]=nt[Oi]=nt[Nl]=nt[Dl]=!0,nt[G]=nt[oe]=nt[Qt]=nt[me]=nt[qt]=nt[re]=nt[ft]=nt[it]=nt[Fe]=nt[St]=nt[ht]=nt[Mn]=nt[yt]=nt[wn]=nt[xe]=!1;var et={};et[G]=et[oe]=et[Qt]=et[qt]=et[me]=et[re]=et[Cr]=et[Jn]=et[Xn]=et[Sr]=et[Ii]=et[Fe]=et[St]=et[ht]=et[Mn]=et[yt]=et[wn]=et[Bn]=et[Ri]=et[Oi]=et[Nl]=et[Dl]=!0,et[ft]=et[it]=et[xe]=!1;var F2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},q2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},W2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Z2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},V2=parseFloat,K2=parseInt,xf=typeof fr=="object"&&fr&&fr.Object===Object&&fr,G2=typeof self=="object"&&self&&self.Object===Object&&self,Tt=xf||G2||Function("return this")(),Kl=t&&!t.nodeType&&t,ei=Kl&&!0&&e&&!e.nodeType&&e,$f=ei&&ei.exports===Kl,Gl=$f&&xf.process,un=function(){try{var P=ei&&ei.require&&ei.require("util").types;return P||Gl&&Gl.binding&&Gl.binding("util")}catch{}}(),kf=un&&un.isArrayBuffer,Ef=un&&un.isDate,Cf=un&&un.isMap,Sf=un&&un.isRegExp,Tf=un&&un.isSet,Af=un&&un.isTypedArray;function Yt(P,D,U){switch(U.length){case 0:return P.call(D);case 1:return P.call(D,U[0]);case 2:return P.call(D,U[0],U[1]);case 3:return P.call(D,U[0],U[1],U[2])}return P.apply(D,U)}function Q2(P,D,U,ce){for(var Ee=-1,Ke=P==null?0:P.length;++Ee<Ke;){var _t=P[Ee];D(ce,_t,U(_t),P)}return ce}function dn(P,D){for(var U=-1,ce=P==null?0:P.length;++U<ce&&D(P[U],U,P)!==!1;);return P}function Y2(P,D){for(var U=P==null?0:P.length;U--&&D(P[U],U,P)!==!1;);return P}function If(P,D){for(var U=-1,ce=P==null?0:P.length;++U<ce;)if(!D(P[U],U,P))return!1;return!0}function Tr(P,D){for(var U=-1,ce=P==null?0:P.length,Ee=0,Ke=[];++U<ce;){var _t=P[U];D(_t,U,P)&&(Ke[Ee++]=_t)}return Ke}function Ao(P,D){var U=P==null?0:P.length;return!!U&&Pi(P,D,0)>-1}function Ql(P,D,U){for(var ce=-1,Ee=P==null?0:P.length;++ce<Ee;)if(U(D,P[ce]))return!0;return!1}function st(P,D){for(var U=-1,ce=P==null?0:P.length,Ee=Array(ce);++U<ce;)Ee[U]=D(P[U],U,P);return Ee}function Ar(P,D){for(var U=-1,ce=D.length,Ee=P.length;++U<ce;)P[Ee+U]=D[U];return P}function Yl(P,D,U,ce){var Ee=-1,Ke=P==null?0:P.length;for(ce&&Ke&&(U=P[++Ee]);++Ee<Ke;)U=D(U,P[Ee],Ee,P);return U}function J2(P,D,U,ce){var Ee=P==null?0:P.length;for(ce&&Ee&&(U=P[--Ee]);Ee--;)U=D(U,P[Ee],Ee,P);return U}function Jl(P,D){for(var U=-1,ce=P==null?0:P.length;++U<ce;)if(D(P[U],U,P))return!0;return!1}var X2=Xl("length");function eb(P){return P.split("")}function tb(P){return P.match(c2)||[]}function Rf(P,D,U){var ce;return U(P,function(Ee,Ke,_t){if(D(Ee,Ke,_t))return ce=Ke,!1}),ce}function Io(P,D,U,ce){for(var Ee=P.length,Ke=U+(ce?1:-1);ce?Ke--:++Ke<Ee;)if(D(P[Ke],Ke,P))return Ke;return-1}function Pi(P,D,U){return D===D?hb(P,D,U):Io(P,Of,U)}function nb(P,D,U,ce){for(var Ee=U-1,Ke=P.length;++Ee<Ke;)if(ce(P[Ee],D))return Ee;return-1}function Of(P){return P!==P}function Lf(P,D){var U=P==null?0:P.length;return U?tc(P,D)/U:pe}function Xl(P){return function(D){return D==null?n:D[P]}}function ec(P){return function(D){return P==null?n:P[D]}}function Pf(P,D,U,ce,Ee){return Ee(P,function(Ke,_t,Je){U=ce?(ce=!1,Ke):D(U,Ke,_t,Je)}),U}function rb(P,D){var U=P.length;for(P.sort(D);U--;)P[U]=P[U].value;return P}function tc(P,D){for(var U,ce=-1,Ee=P.length;++ce<Ee;){var Ke=D(P[ce]);Ke!==n&&(U=U===n?Ke:U+Ke)}return U}function nc(P,D){for(var U=-1,ce=Array(P);++U<P;)ce[U]=D(U);return ce}function ib(P,D){return st(D,function(U){return[U,P[U]]})}function Mf(P){return P&&P.slice(0,Nf(P)+1).replace(Hl,"")}function Jt(P){return function(D){return P(D)}}function rc(P,D){return st(D,function(U){return P[U]})}function Ss(P,D){return P.has(D)}function Bf(P,D){for(var U=-1,ce=P.length;++U<ce&&Pi(D,P[U],0)>-1;);return U}function jf(P,D){for(var U=P.length;U--&&Pi(D,P[U],0)>-1;);return U}function sb(P,D){for(var U=P.length,ce=0;U--;)P[U]===D&&++ce;return ce}var ob=ec(F2),ab=ec(q2);function lb(P){return"\\"+Z2[P]}function cb(P,D){return P==null?n:P[D]}function Mi(P){return N2.test(P)}function ub(P){return D2.test(P)}function db(P){for(var D,U=[];!(D=P.next()).done;)U.push(D.value);return U}function ic(P){var D=-1,U=Array(P.size);return P.forEach(function(ce,Ee){U[++D]=[Ee,ce]}),U}function Uf(P,D){return function(U){return P(D(U))}}function Ir(P,D){for(var U=-1,ce=P.length,Ee=0,Ke=[];++U<ce;){var _t=P[U];(_t===D||_t===p)&&(P[U]=p,Ke[Ee++]=U)}return Ke}function Ro(P){var D=-1,U=Array(P.size);return P.forEach(function(ce){U[++D]=ce}),U}function fb(P){var D=-1,U=Array(P.size);return P.forEach(function(ce){U[++D]=[ce,ce]}),U}function hb(P,D,U){for(var ce=U-1,Ee=P.length;++ce<Ee;)if(P[ce]===D)return ce;return-1}function pb(P,D,U){for(var ce=U+1;ce--;)if(P[ce]===D)return ce;return ce}function Bi(P){return Mi(P)?mb(P):X2(P)}function xn(P){return Mi(P)?vb(P):eb(P)}function Nf(P){for(var D=P.length;D--&&s2.test(P.charAt(D)););return D}var gb=ec(W2);function mb(P){for(var D=Vl.lastIndex=0;Vl.test(P);)++D;return D}function vb(P){return P.match(Vl)||[]}function bb(P){return P.match(U2)||[]}var yb=function P(D){D=D==null?Tt:ji.defaults(Tt.Object(),D,ji.pick(Tt,z2));var U=D.Array,ce=D.Date,Ee=D.Error,Ke=D.Function,_t=D.Math,Je=D.Object,sc=D.RegExp,_b=D.String,fn=D.TypeError,Oo=U.prototype,wb=Ke.prototype,Ui=Je.prototype,Lo=D["__core-js_shared__"],Po=wb.toString,Ye=Ui.hasOwnProperty,xb=0,Df=function(){var r=/[^.]+$/.exec(Lo&&Lo.keys&&Lo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Mo=Ui.toString,$b=Po.call(Je),kb=Tt._,Eb=sc("^"+Po.call(Ye).replace(zl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bo=$f?D.Buffer:n,Rr=D.Symbol,jo=D.Uint8Array,zf=Bo?Bo.allocUnsafe:n,Uo=Uf(Je.getPrototypeOf,Je),Hf=Je.create,Ff=Ui.propertyIsEnumerable,No=Oo.splice,qf=Rr?Rr.isConcatSpreadable:n,Ts=Rr?Rr.iterator:n,ti=Rr?Rr.toStringTag:n,Do=function(){try{var r=oi(Je,"defineProperty");return r({},"",{}),r}catch{}}(),Cb=D.clearTimeout!==Tt.clearTimeout&&D.clearTimeout,Sb=ce&&ce.now!==Tt.Date.now&&ce.now,Tb=D.setTimeout!==Tt.setTimeout&&D.setTimeout,zo=_t.ceil,Ho=_t.floor,oc=Je.getOwnPropertySymbols,Ab=Bo?Bo.isBuffer:n,Wf=D.isFinite,Ib=Oo.join,Rb=Uf(Je.keys,Je),wt=_t.max,Ot=_t.min,Ob=ce.now,Lb=D.parseInt,Zf=_t.random,Pb=Oo.reverse,ac=oi(D,"DataView"),As=oi(D,"Map"),lc=oi(D,"Promise"),Ni=oi(D,"Set"),Is=oi(D,"WeakMap"),Rs=oi(Je,"create"),Fo=Is&&new Is,Di={},Mb=ai(ac),Bb=ai(As),jb=ai(lc),Ub=ai(Ni),Nb=ai(Is),qo=Rr?Rr.prototype:n,Os=qo?qo.valueOf:n,Vf=qo?qo.toString:n;function b(r){if(ut(r)&&!Se(r)&&!(r instanceof He)){if(r instanceof hn)return r;if(Ye.call(r,"__wrapped__"))return Kh(r)}return new hn(r)}var zi=function(){function r(){}return function(s){if(!at(s))return{};if(Hf)return Hf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Wo(){}function hn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:Xv,evaluate:e2,interpolate:tf,variable:"",imports:{_:b}},b.prototype=Wo.prototype,b.prototype.constructor=b,hn.prototype=zi(Wo.prototype),hn.prototype.constructor=hn;function He(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=we,this.__views__=[]}function Db(){var r=new He(this.__wrapped__);return r.__actions__=Wt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Wt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Wt(this.__views__),r}function zb(){if(this.__filtered__){var r=new He(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Hb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Se(r),f=s<0,m=c?r.length:0,_=e_(0,m,this.__views__),T=_.start,L=_.end,M=L-T,H=f?L:T-1,F=this.__iteratees__,K=F.length,ie=0,fe=Ot(M,this.__takeCount__);if(!c||!f&&m==M&&fe==M)return vh(r,this.__actions__);var ye=[];e:for(;M--&&ie<fe;){H+=s;for(var Re=-1,_e=r[H];++Re<K;){var Ue=F[Re],qe=Ue.iteratee,tn=Ue.type,Nt=qe(_e);if(tn==q)_e=Nt;else if(!Nt){if(tn==se)continue e;break e}}ye[ie++]=_e}return ye}He.prototype=zi(Wo.prototype),He.prototype.constructor=He;function ni(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Fb(){this.__data__=Rs?Rs(null):{},this.size=0}function qb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Wb(r){var s=this.__data__;if(Rs){var c=s[r];return c===d?n:c}return Ye.call(s,r)?s[r]:n}function Zb(r){var s=this.__data__;return Rs?s[r]!==n:Ye.call(s,r)}function Vb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Rs&&s===n?d:s,this}ni.prototype.clear=Fb,ni.prototype.delete=qb,ni.prototype.get=Wb,ni.prototype.has=Zb,ni.prototype.set=Vb;function er(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Kb(){this.__data__=[],this.size=0}function Gb(r){var s=this.__data__,c=Zo(s,r);if(c<0)return!1;var f=s.length-1;return c==f?s.pop():No.call(s,c,1),--this.size,!0}function Qb(r){var s=this.__data__,c=Zo(s,r);return c<0?n:s[c][1]}function Yb(r){return Zo(this.__data__,r)>-1}function Jb(r,s){var c=this.__data__,f=Zo(c,r);return f<0?(++this.size,c.push([r,s])):c[f][1]=s,this}er.prototype.clear=Kb,er.prototype.delete=Gb,er.prototype.get=Qb,er.prototype.has=Yb,er.prototype.set=Jb;function tr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var f=r[s];this.set(f[0],f[1])}}function Xb(){this.size=0,this.__data__={hash:new ni,map:new(As||er),string:new ni}}function ey(r){var s=ia(this,r).delete(r);return this.size-=s?1:0,s}function ty(r){return ia(this,r).get(r)}function ny(r){return ia(this,r).has(r)}function ry(r,s){var c=ia(this,r),f=c.size;return c.set(r,s),this.size+=c.size==f?0:1,this}tr.prototype.clear=Xb,tr.prototype.delete=ey,tr.prototype.get=ty,tr.prototype.has=ny,tr.prototype.set=ry;function ri(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new tr;++s<c;)this.add(r[s])}function iy(r){return this.__data__.set(r,d),this}function sy(r){return this.__data__.has(r)}ri.prototype.add=ri.prototype.push=iy,ri.prototype.has=sy;function $n(r){var s=this.__data__=new er(r);this.size=s.size}function oy(){this.__data__=new er,this.size=0}function ay(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function ly(r){return this.__data__.get(r)}function cy(r){return this.__data__.has(r)}function uy(r,s){var c=this.__data__;if(c instanceof er){var f=c.__data__;if(!As||f.length<o-1)return f.push([r,s]),this.size=++c.size,this;c=this.__data__=new tr(f)}return c.set(r,s),this.size=c.size,this}$n.prototype.clear=oy,$n.prototype.delete=ay,$n.prototype.get=ly,$n.prototype.has=cy,$n.prototype.set=uy;function Kf(r,s){var c=Se(r),f=!c&&li(r),m=!c&&!f&&Br(r),_=!c&&!f&&!m&&Wi(r),T=c||f||m||_,L=T?nc(r.length,_b):[],M=L.length;for(var H in r)(s||Ye.call(r,H))&&!(T&&(H=="length"||m&&(H=="offset"||H=="parent")||_&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||sr(H,M)))&&L.push(H);return L}function Gf(r){var s=r.length;return s?r[yc(0,s-1)]:n}function dy(r,s){return sa(Wt(r),ii(s,0,r.length))}function fy(r){return sa(Wt(r))}function cc(r,s,c){(c!==n&&!kn(r[s],c)||c===n&&!(s in r))&&nr(r,s,c)}function Ls(r,s,c){var f=r[s];(!(Ye.call(r,s)&&kn(f,c))||c===n&&!(s in r))&&nr(r,s,c)}function Zo(r,s){for(var c=r.length;c--;)if(kn(r[c][0],s))return c;return-1}function hy(r,s,c,f){return Or(r,function(m,_,T){s(f,m,c(m),T)}),f}function Qf(r,s){return r&&Un(s,$t(s),r)}function py(r,s){return r&&Un(s,Vt(s),r)}function nr(r,s,c){s=="__proto__"&&Do?Do(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function uc(r,s){for(var c=-1,f=s.length,m=U(f),_=r==null;++c<f;)m[c]=_?n:qc(r,s[c]);return m}function ii(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function pn(r,s,c,f,m,_){var T,L=s&g,M=s&v,H=s&x;if(c&&(T=m?c(r,f,m,_):c(r)),T!==n)return T;if(!at(r))return r;var F=Se(r);if(F){if(T=n_(r),!L)return Wt(r,T)}else{var K=Lt(r),ie=K==it||K==Le;if(Br(r))return _h(r,L);if(K==ht||K==G||ie&&!m){if(T=M||ie?{}:Nh(r),!L)return M?Wy(r,py(T,r)):qy(r,Qf(T,r))}else{if(!et[K])return m?r:{};T=r_(r,K,L)}}_||(_=new $n);var fe=_.get(r);if(fe)return fe;_.set(r,T),pp(r)?r.forEach(function(_e){T.add(pn(_e,s,c,_e,r,_))}):fp(r)&&r.forEach(function(_e,Ue){T.set(Ue,pn(_e,s,c,Ue,r,_))});var ye=H?M?Ic:Ac:M?Vt:$t,Re=F?n:ye(r);return dn(Re||r,function(_e,Ue){Re&&(Ue=_e,_e=r[Ue]),Ls(T,Ue,pn(_e,s,c,Ue,r,_))}),T}function gy(r){var s=$t(r);return function(c){return Yf(c,r,s)}}function Yf(r,s,c){var f=c.length;if(r==null)return!f;for(r=Je(r);f--;){var m=c[f],_=s[m],T=r[m];if(T===n&&!(m in r)||!_(T))return!1}return!0}function Jf(r,s,c){if(typeof r!="function")throw new fn(l);return Ds(function(){r.apply(n,c)},s)}function Ps(r,s,c,f){var m=-1,_=Ao,T=!0,L=r.length,M=[],H=s.length;if(!L)return M;c&&(s=st(s,Jt(c))),f?(_=Ql,T=!1):s.length>=o&&(_=Ss,T=!1,s=new ri(s));e:for(;++m<L;){var F=r[m],K=c==null?F:c(F);if(F=f||F!==0?F:0,T&&K===K){for(var ie=H;ie--;)if(s[ie]===K)continue e;M.push(F)}else _(s,K,f)||M.push(F)}return M}var Or=Eh(jn),Xf=Eh(fc,!0);function my(r,s){var c=!0;return Or(r,function(f,m,_){return c=!!s(f,m,_),c}),c}function Vo(r,s,c){for(var f=-1,m=r.length;++f<m;){var _=r[f],T=s(_);if(T!=null&&(L===n?T===T&&!en(T):c(T,L)))var L=T,M=_}return M}function vy(r,s,c,f){var m=r.length;for(c=Ae(c),c<0&&(c=-c>m?0:m+c),f=f===n||f>m?m:Ae(f),f<0&&(f+=m),f=c>f?0:mp(f);c<f;)r[c++]=s;return r}function eh(r,s){var c=[];return Or(r,function(f,m,_){s(f,m,_)&&c.push(f)}),c}function At(r,s,c,f,m){var _=-1,T=r.length;for(c||(c=s_),m||(m=[]);++_<T;){var L=r[_];s>0&&c(L)?s>1?At(L,s-1,c,f,m):Ar(m,L):f||(m[m.length]=L)}return m}var dc=Ch(),th=Ch(!0);function jn(r,s){return r&&dc(r,s,$t)}function fc(r,s){return r&&th(r,s,$t)}function Ko(r,s){return Tr(s,function(c){return or(r[c])})}function si(r,s){s=Pr(s,r);for(var c=0,f=s.length;r!=null&&c<f;)r=r[Nn(s[c++])];return c&&c==f?r:n}function nh(r,s,c){var f=s(r);return Se(r)?f:Ar(f,c(r))}function jt(r){return r==null?r===n?Ai:_n:ti&&ti in Je(r)?Xy(r):f_(r)}function hc(r,s){return r>s}function by(r,s){return r!=null&&Ye.call(r,s)}function yy(r,s){return r!=null&&s in Je(r)}function _y(r,s,c){return r>=Ot(s,c)&&r<wt(s,c)}function pc(r,s,c){for(var f=c?Ql:Ao,m=r[0].length,_=r.length,T=_,L=U(_),M=1/0,H=[];T--;){var F=r[T];T&&s&&(F=st(F,Jt(s))),M=Ot(F.length,M),L[T]=!c&&(s||m>=120&&F.length>=120)?new ri(T&&F):n}F=r[0];var K=-1,ie=L[0];e:for(;++K<m&&H.length<M;){var fe=F[K],ye=s?s(fe):fe;if(fe=c||fe!==0?fe:0,!(ie?Ss(ie,ye):f(H,ye,c))){for(T=_;--T;){var Re=L[T];if(!(Re?Ss(Re,ye):f(r[T],ye,c)))continue e}ie&&ie.push(ye),H.push(fe)}}return H}function wy(r,s,c,f){return jn(r,function(m,_,T){s(f,c(m),_,T)}),f}function Ms(r,s,c){s=Pr(s,r),r=Fh(r,s);var f=r==null?r:r[Nn(mn(s))];return f==null?n:Yt(f,r,c)}function rh(r){return ut(r)&&jt(r)==G}function xy(r){return ut(r)&&jt(r)==Qt}function $y(r){return ut(r)&&jt(r)==re}function Bs(r,s,c,f,m){return r===s?!0:r==null||s==null||!ut(r)&&!ut(s)?r!==r&&s!==s:ky(r,s,c,f,Bs,m)}function ky(r,s,c,f,m,_){var T=Se(r),L=Se(s),M=T?oe:Lt(r),H=L?oe:Lt(s);M=M==G?ht:M,H=H==G?ht:H;var F=M==ht,K=H==ht,ie=M==H;if(ie&&Br(r)){if(!Br(s))return!1;T=!0,F=!1}if(ie&&!F)return _||(_=new $n),T||Wi(r)?Bh(r,s,c,f,m,_):Yy(r,s,M,c,f,m,_);if(!(c&k)){var fe=F&&Ye.call(r,"__wrapped__"),ye=K&&Ye.call(s,"__wrapped__");if(fe||ye){var Re=fe?r.value():r,_e=ye?s.value():s;return _||(_=new $n),m(Re,_e,c,f,_)}}return ie?(_||(_=new $n),Jy(r,s,c,f,m,_)):!1}function Ey(r){return ut(r)&&Lt(r)==Fe}function gc(r,s,c,f){var m=c.length,_=m,T=!f;if(r==null)return!_;for(r=Je(r);m--;){var L=c[m];if(T&&L[2]?L[1]!==r[L[0]]:!(L[0]in r))return!1}for(;++m<_;){L=c[m];var M=L[0],H=r[M],F=L[1];if(T&&L[2]){if(H===n&&!(M in r))return!1}else{var K=new $n;if(f)var ie=f(H,F,M,r,s,K);if(!(ie===n?Bs(F,H,k|$,f,K):ie))return!1}}return!0}function ih(r){if(!at(r)||a_(r))return!1;var s=or(r)?Eb:g2;return s.test(ai(r))}function Cy(r){return ut(r)&&jt(r)==Mn}function Sy(r){return ut(r)&&Lt(r)==yt}function Ty(r){return ut(r)&&da(r.length)&&!!nt[jt(r)]}function sh(r){return typeof r=="function"?r:r==null?Kt:typeof r=="object"?Se(r)?lh(r[0],r[1]):ah(r):Sp(r)}function mc(r){if(!Ns(r))return Rb(r);var s=[];for(var c in Je(r))Ye.call(r,c)&&c!="constructor"&&s.push(c);return s}function Ay(r){if(!at(r))return d_(r);var s=Ns(r),c=[];for(var f in r)f=="constructor"&&(s||!Ye.call(r,f))||c.push(f);return c}function vc(r,s){return r<s}function oh(r,s){var c=-1,f=Zt(r)?U(r.length):[];return Or(r,function(m,_,T){f[++c]=s(m,_,T)}),f}function ah(r){var s=Oc(r);return s.length==1&&s[0][2]?zh(s[0][0],s[0][1]):function(c){return c===r||gc(c,r,s)}}function lh(r,s){return Pc(r)&&Dh(s)?zh(Nn(r),s):function(c){var f=qc(c,r);return f===n&&f===s?Wc(c,r):Bs(s,f,k|$)}}function Go(r,s,c,f,m){r!==s&&dc(s,function(_,T){if(m||(m=new $n),at(_))Iy(r,s,T,c,Go,f,m);else{var L=f?f(Bc(r,T),_,T+"",r,s,m):n;L===n&&(L=_),cc(r,T,L)}},Vt)}function Iy(r,s,c,f,m,_,T){var L=Bc(r,c),M=Bc(s,c),H=T.get(M);if(H){cc(r,c,H);return}var F=_?_(L,M,c+"",r,s,T):n,K=F===n;if(K){var ie=Se(M),fe=!ie&&Br(M),ye=!ie&&!fe&&Wi(M);F=M,ie||fe||ye?Se(L)?F=L:pt(L)?F=Wt(L):fe?(K=!1,F=_h(M,!0)):ye?(K=!1,F=wh(M,!0)):F=[]:zs(M)||li(M)?(F=L,li(L)?F=vp(L):(!at(L)||or(L))&&(F=Nh(M))):K=!1}K&&(T.set(M,F),m(F,M,f,_,T),T.delete(M)),cc(r,c,F)}function ch(r,s){var c=r.length;if(c)return s+=s<0?c:0,sr(s,c)?r[s]:n}function uh(r,s,c){s.length?s=st(s,function(_){return Se(_)?function(T){return si(T,_.length===1?_[0]:_)}:_}):s=[Kt];var f=-1;s=st(s,Jt(ve()));var m=oh(r,function(_,T,L){var M=st(s,function(H){return H(_)});return{criteria:M,index:++f,value:_}});return rb(m,function(_,T){return Fy(_,T,c)})}function Ry(r,s){return dh(r,s,function(c,f){return Wc(r,f)})}function dh(r,s,c){for(var f=-1,m=s.length,_={};++f<m;){var T=s[f],L=si(r,T);c(L,T)&&js(_,Pr(T,r),L)}return _}function Oy(r){return function(s){return si(s,r)}}function bc(r,s,c,f){var m=f?nb:Pi,_=-1,T=s.length,L=r;for(r===s&&(s=Wt(s)),c&&(L=st(r,Jt(c)));++_<T;)for(var M=0,H=s[_],F=c?c(H):H;(M=m(L,F,M,f))>-1;)L!==r&&No.call(L,M,1),No.call(r,M,1);return r}function fh(r,s){for(var c=r?s.length:0,f=c-1;c--;){var m=s[c];if(c==f||m!==_){var _=m;sr(m)?No.call(r,m,1):xc(r,m)}}return r}function yc(r,s){return r+Ho(Zf()*(s-r+1))}function Ly(r,s,c,f){for(var m=-1,_=wt(zo((s-r)/(c||1)),0),T=U(_);_--;)T[f?_:++m]=r,r+=c;return T}function _c(r,s){var c="";if(!r||s<1||s>Y)return c;do s%2&&(c+=r),s=Ho(s/2),s&&(r+=r);while(s);return c}function Pe(r,s){return jc(Hh(r,s,Kt),r+"")}function Py(r){return Gf(Zi(r))}function My(r,s){var c=Zi(r);return sa(c,ii(s,0,c.length))}function js(r,s,c,f){if(!at(r))return r;s=Pr(s,r);for(var m=-1,_=s.length,T=_-1,L=r;L!=null&&++m<_;){var M=Nn(s[m]),H=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=T){var F=L[M];H=f?f(F,M,L):n,H===n&&(H=at(F)?F:sr(s[m+1])?[]:{})}Ls(L,M,H),L=L[M]}return r}var hh=Fo?function(r,s){return Fo.set(r,s),r}:Kt,By=Do?function(r,s){return Do(r,"toString",{configurable:!0,enumerable:!1,value:Vc(s),writable:!0})}:Kt;function jy(r){return sa(Zi(r))}function gn(r,s,c){var f=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var _=U(m);++f<m;)_[f]=r[f+s];return _}function Uy(r,s){var c;return Or(r,function(f,m,_){return c=s(f,m,_),!c}),!!c}function Qo(r,s,c){var f=0,m=r==null?f:r.length;if(typeof s=="number"&&s===s&&m<=Ve){for(;f<m;){var _=f+m>>>1,T=r[_];T!==null&&!en(T)&&(c?T<=s:T<s)?f=_+1:m=_}return m}return wc(r,s,Kt,c)}function wc(r,s,c,f){var m=0,_=r==null?0:r.length;if(_===0)return 0;s=c(s);for(var T=s!==s,L=s===null,M=en(s),H=s===n;m<_;){var F=Ho((m+_)/2),K=c(r[F]),ie=K!==n,fe=K===null,ye=K===K,Re=en(K);if(T)var _e=f||ye;else H?_e=ye&&(f||ie):L?_e=ye&&ie&&(f||!fe):M?_e=ye&&ie&&!fe&&(f||!Re):fe||Re?_e=!1:_e=f?K<=s:K<s;_e?m=F+1:_=F}return Ot(_,Te)}function ph(r,s){for(var c=-1,f=r.length,m=0,_=[];++c<f;){var T=r[c],L=s?s(T):T;if(!c||!kn(L,M)){var M=L;_[m++]=T===0?0:T}}return _}function gh(r){return typeof r=="number"?r:en(r)?pe:+r}function Xt(r){if(typeof r=="string")return r;if(Se(r))return st(r,Xt)+"";if(en(r))return Vf?Vf.call(r):"";var s=r+"";return s=="0"&&1/r==-he?"-0":s}function Lr(r,s,c){var f=-1,m=Ao,_=r.length,T=!0,L=[],M=L;if(c)T=!1,m=Ql;else if(_>=o){var H=s?null:Gy(r);if(H)return Ro(H);T=!1,m=Ss,M=new ri}else M=s?[]:L;e:for(;++f<_;){var F=r[f],K=s?s(F):F;if(F=c||F!==0?F:0,T&&K===K){for(var ie=M.length;ie--;)if(M[ie]===K)continue e;s&&M.push(K),L.push(F)}else m(M,K,c)||(M!==L&&M.push(K),L.push(F))}return L}function xc(r,s){return s=Pr(s,r),r=Fh(r,s),r==null||delete r[Nn(mn(s))]}function mh(r,s,c,f){return js(r,s,c(si(r,s)),f)}function Yo(r,s,c,f){for(var m=r.length,_=f?m:-1;(f?_--:++_<m)&&s(r[_],_,r););return c?gn(r,f?0:_,f?_+1:m):gn(r,f?_+1:0,f?m:_)}function vh(r,s){var c=r;return c instanceof He&&(c=c.value()),Yl(s,function(f,m){return m.func.apply(m.thisArg,Ar([f],m.args))},c)}function $c(r,s,c){var f=r.length;if(f<2)return f?Lr(r[0]):[];for(var m=-1,_=U(f);++m<f;)for(var T=r[m],L=-1;++L<f;)L!=m&&(_[m]=Ps(_[m]||T,r[L],s,c));return Lr(At(_,1),s,c)}function bh(r,s,c){for(var f=-1,m=r.length,_=s.length,T={};++f<m;){var L=f<_?s[f]:n;c(T,r[f],L)}return T}function kc(r){return pt(r)?r:[]}function Ec(r){return typeof r=="function"?r:Kt}function Pr(r,s){return Se(r)?r:Pc(r,s)?[r]:Vh(Qe(r))}var Ny=Pe;function Mr(r,s,c){var f=r.length;return c=c===n?f:c,!s&&c>=f?r:gn(r,s,c)}var yh=Cb||function(r){return Tt.clearTimeout(r)};function _h(r,s){if(s)return r.slice();var c=r.length,f=zf?zf(c):new r.constructor(c);return r.copy(f),f}function Cc(r){var s=new r.constructor(r.byteLength);return new jo(s).set(new jo(r)),s}function Dy(r,s){var c=s?Cc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function zy(r){var s=new r.constructor(r.source,nf.exec(r));return s.lastIndex=r.lastIndex,s}function Hy(r){return Os?Je(Os.call(r)):{}}function wh(r,s){var c=s?Cc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function xh(r,s){if(r!==s){var c=r!==n,f=r===null,m=r===r,_=en(r),T=s!==n,L=s===null,M=s===s,H=en(s);if(!L&&!H&&!_&&r>s||_&&T&&M&&!L&&!H||f&&T&&M||!c&&M||!m)return 1;if(!f&&!_&&!H&&r<s||H&&c&&m&&!f&&!_||L&&c&&m||!T&&m||!M)return-1}return 0}function Fy(r,s,c){for(var f=-1,m=r.criteria,_=s.criteria,T=m.length,L=c.length;++f<T;){var M=xh(m[f],_[f]);if(M){if(f>=L)return M;var H=c[f];return M*(H=="desc"?-1:1)}}return r.index-s.index}function $h(r,s,c,f){for(var m=-1,_=r.length,T=c.length,L=-1,M=s.length,H=wt(_-T,0),F=U(M+H),K=!f;++L<M;)F[L]=s[L];for(;++m<T;)(K||m<_)&&(F[c[m]]=r[m]);for(;H--;)F[L++]=r[m++];return F}function kh(r,s,c,f){for(var m=-1,_=r.length,T=-1,L=c.length,M=-1,H=s.length,F=wt(_-L,0),K=U(F+H),ie=!f;++m<F;)K[m]=r[m];for(var fe=m;++M<H;)K[fe+M]=s[M];for(;++T<L;)(ie||m<_)&&(K[fe+c[T]]=r[m++]);return K}function Wt(r,s){var c=-1,f=r.length;for(s||(s=U(f));++c<f;)s[c]=r[c];return s}function Un(r,s,c,f){var m=!c;c||(c={});for(var _=-1,T=s.length;++_<T;){var L=s[_],M=f?f(c[L],r[L],L,c,r):n;M===n&&(M=r[L]),m?nr(c,L,M):Ls(c,L,M)}return c}function qy(r,s){return Un(r,Lc(r),s)}function Wy(r,s){return Un(r,jh(r),s)}function Jo(r,s){return function(c,f){var m=Se(c)?Q2:hy,_=s?s():{};return m(c,r,ve(f,2),_)}}function Hi(r){return Pe(function(s,c){var f=-1,m=c.length,_=m>1?c[m-1]:n,T=m>2?c[2]:n;for(_=r.length>3&&typeof _=="function"?(m--,_):n,T&&Ut(c[0],c[1],T)&&(_=m<3?n:_,m=1),s=Je(s);++f<m;){var L=c[f];L&&r(s,L,f,_)}return s})}function Eh(r,s){return function(c,f){if(c==null)return c;if(!Zt(c))return r(c,f);for(var m=c.length,_=s?m:-1,T=Je(c);(s?_--:++_<m)&&f(T[_],_,T)!==!1;);return c}}function Ch(r){return function(s,c,f){for(var m=-1,_=Je(s),T=f(s),L=T.length;L--;){var M=T[r?L:++m];if(c(_[M],M,_)===!1)break}return s}}function Zy(r,s,c){var f=s&E,m=Us(r);function _(){var T=this&&this!==Tt&&this instanceof _?m:r;return T.apply(f?c:this,arguments)}return _}function Sh(r){return function(s){s=Qe(s);var c=Mi(s)?xn(s):n,f=c?c[0]:s.charAt(0),m=c?Mr(c,1).join(""):s.slice(1);return f[r]()+m}}function Fi(r){return function(s){return Yl(Ep(kp(s).replace(B2,"")),r,"")}}function Us(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=zi(r.prototype),f=r.apply(c,s);return at(f)?f:c}}function Vy(r,s,c){var f=Us(r);function m(){for(var _=arguments.length,T=U(_),L=_,M=qi(m);L--;)T[L]=arguments[L];var H=_<3&&T[0]!==M&&T[_-1]!==M?[]:Ir(T,M);if(_-=H.length,_<c)return Oh(r,s,Xo,m.placeholder,n,T,H,n,n,c-_);var F=this&&this!==Tt&&this instanceof m?f:r;return Yt(F,this,T)}return m}function Th(r){return function(s,c,f){var m=Je(s);if(!Zt(s)){var _=ve(c,3);s=$t(s),c=function(L){return _(m[L],L,m)}}var T=r(s,c,f);return T>-1?m[_?s[T]:T]:n}}function Ah(r){return ir(function(s){var c=s.length,f=c,m=hn.prototype.thru;for(r&&s.reverse();f--;){var _=s[f];if(typeof _!="function")throw new fn(l);if(m&&!T&&ra(_)=="wrapper")var T=new hn([],!0)}for(f=T?f:c;++f<c;){_=s[f];var L=ra(_),M=L=="wrapper"?Rc(_):n;M&&Mc(M[0])&&M[1]==(j|R|C|N)&&!M[4].length&&M[9]==1?T=T[ra(M[0])].apply(T,M[3]):T=_.length==1&&Mc(_)?T[L]():T.thru(_)}return function(){var H=arguments,F=H[0];if(T&&H.length==1&&Se(F))return T.plant(F).value();for(var K=0,ie=c?s[K].apply(this,H):F;++K<c;)ie=s[K].call(this,ie);return ie}})}function Xo(r,s,c,f,m,_,T,L,M,H){var F=s&j,K=s&E,ie=s&w,fe=s&(R|I),ye=s&ne,Re=ie?n:Us(r);function _e(){for(var Ue=arguments.length,qe=U(Ue),tn=Ue;tn--;)qe[tn]=arguments[tn];if(fe)var Nt=qi(_e),nn=sb(qe,Nt);if(f&&(qe=$h(qe,f,m,fe)),_&&(qe=kh(qe,_,T,fe)),Ue-=nn,fe&&Ue<H){var gt=Ir(qe,Nt);return Oh(r,s,Xo,_e.placeholder,c,qe,gt,L,M,H-Ue)}var En=K?c:this,lr=ie?En[r]:r;return Ue=qe.length,L?qe=h_(qe,L):ye&&Ue>1&&qe.reverse(),F&&M<Ue&&(qe.length=M),this&&this!==Tt&&this instanceof _e&&(lr=Re||Us(lr)),lr.apply(En,qe)}return _e}function Ih(r,s){return function(c,f){return wy(c,r,s(f),{})}}function ea(r,s){return function(c,f){var m;if(c===n&&f===n)return s;if(c!==n&&(m=c),f!==n){if(m===n)return f;typeof c=="string"||typeof f=="string"?(c=Xt(c),f=Xt(f)):(c=gh(c),f=gh(f)),m=r(c,f)}return m}}function Sc(r){return ir(function(s){return s=st(s,Jt(ve())),Pe(function(c){var f=this;return r(s,function(m){return Yt(m,f,c)})})})}function ta(r,s){s=s===n?" ":Xt(s);var c=s.length;if(c<2)return c?_c(s,r):s;var f=_c(s,zo(r/Bi(s)));return Mi(s)?Mr(xn(f),0,r).join(""):f.slice(0,r)}function Ky(r,s,c,f){var m=s&E,_=Us(r);function T(){for(var L=-1,M=arguments.length,H=-1,F=f.length,K=U(F+M),ie=this&&this!==Tt&&this instanceof T?_:r;++H<F;)K[H]=f[H];for(;M--;)K[H++]=arguments[++L];return Yt(ie,m?c:this,K)}return T}function Rh(r){return function(s,c,f){return f&&typeof f!="number"&&Ut(s,c,f)&&(c=f=n),s=ar(s),c===n?(c=s,s=0):c=ar(c),f=f===n?s<c?1:-1:ar(f),Ly(s,c,f,r)}}function na(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=vn(s),c=vn(c)),r(s,c)}}function Oh(r,s,c,f,m,_,T,L,M,H){var F=s&R,K=F?T:n,ie=F?n:T,fe=F?_:n,ye=F?n:_;s|=F?C:A,s&=~(F?A:C),s&O||(s&=~(E|w));var Re=[r,s,m,fe,K,ye,ie,L,M,H],_e=c.apply(n,Re);return Mc(r)&&qh(_e,Re),_e.placeholder=f,Wh(_e,r,s)}function Tc(r){var s=_t[r];return function(c,f){if(c=vn(c),f=f==null?0:Ot(Ae(f),292),f&&Wf(c)){var m=(Qe(c)+"e").split("e"),_=s(m[0]+"e"+(+m[1]+f));return m=(Qe(_)+"e").split("e"),+(m[0]+"e"+(+m[1]-f))}return s(c)}}var Gy=Ni&&1/Ro(new Ni([,-0]))[1]==he?function(r){return new Ni(r)}:Qc;function Lh(r){return function(s){var c=Lt(s);return c==Fe?ic(s):c==yt?fb(s):ib(s,r(s))}}function rr(r,s,c,f,m,_,T,L){var M=s&w;if(!M&&typeof r!="function")throw new fn(l);var H=f?f.length:0;if(H||(s&=~(C|A),f=m=n),T=T===n?T:wt(Ae(T),0),L=L===n?L:Ae(L),H-=m?m.length:0,s&A){var F=f,K=m;f=m=n}var ie=M?n:Rc(r),fe=[r,s,c,f,m,F,K,_,T,L];if(ie&&u_(fe,ie),r=fe[0],s=fe[1],c=fe[2],f=fe[3],m=fe[4],L=fe[9]=fe[9]===n?M?0:r.length:wt(fe[9]-H,0),!L&&s&(R|I)&&(s&=~(R|I)),!s||s==E)var ye=Zy(r,s,c);else s==R||s==I?ye=Vy(r,s,L):(s==C||s==(E|C))&&!m.length?ye=Ky(r,s,c,f):ye=Xo.apply(n,fe);var Re=ie?hh:qh;return Wh(Re(ye,fe),r,s)}function Ph(r,s,c,f){return r===n||kn(r,Ui[c])&&!Ye.call(f,c)?s:r}function Mh(r,s,c,f,m,_){return at(r)&&at(s)&&(_.set(s,r),Go(r,s,n,Mh,_),_.delete(s)),r}function Qy(r){return zs(r)?n:r}function Bh(r,s,c,f,m,_){var T=c&k,L=r.length,M=s.length;if(L!=M&&!(T&&M>L))return!1;var H=_.get(r),F=_.get(s);if(H&&F)return H==s&&F==r;var K=-1,ie=!0,fe=c&$?new ri:n;for(_.set(r,s),_.set(s,r);++K<L;){var ye=r[K],Re=s[K];if(f)var _e=T?f(Re,ye,K,s,r,_):f(ye,Re,K,r,s,_);if(_e!==n){if(_e)continue;ie=!1;break}if(fe){if(!Jl(s,function(Ue,qe){if(!Ss(fe,qe)&&(ye===Ue||m(ye,Ue,c,f,_)))return fe.push(qe)})){ie=!1;break}}else if(!(ye===Re||m(ye,Re,c,f,_))){ie=!1;break}}return _.delete(r),_.delete(s),ie}function Yy(r,s,c,f,m,_,T){switch(c){case qt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Qt:return!(r.byteLength!=s.byteLength||!_(new jo(r),new jo(s)));case me:case re:case St:return kn(+r,+s);case ft:return r.name==s.name&&r.message==s.message;case Mn:case wn:return r==s+"";case Fe:var L=ic;case yt:var M=f&k;if(L||(L=Ro),r.size!=s.size&&!M)return!1;var H=T.get(r);if(H)return H==s;f|=$,T.set(r,s);var F=Bh(L(r),L(s),f,m,_,T);return T.delete(r),F;case Bn:if(Os)return Os.call(r)==Os.call(s)}return!1}function Jy(r,s,c,f,m,_){var T=c&k,L=Ac(r),M=L.length,H=Ac(s),F=H.length;if(M!=F&&!T)return!1;for(var K=M;K--;){var ie=L[K];if(!(T?ie in s:Ye.call(s,ie)))return!1}var fe=_.get(r),ye=_.get(s);if(fe&&ye)return fe==s&&ye==r;var Re=!0;_.set(r,s),_.set(s,r);for(var _e=T;++K<M;){ie=L[K];var Ue=r[ie],qe=s[ie];if(f)var tn=T?f(qe,Ue,ie,s,r,_):f(Ue,qe,ie,r,s,_);if(!(tn===n?Ue===qe||m(Ue,qe,c,f,_):tn)){Re=!1;break}_e||(_e=ie=="constructor")}if(Re&&!_e){var Nt=r.constructor,nn=s.constructor;Nt!=nn&&"constructor"in r&&"constructor"in s&&!(typeof Nt=="function"&&Nt instanceof Nt&&typeof nn=="function"&&nn instanceof nn)&&(Re=!1)}return _.delete(r),_.delete(s),Re}function ir(r){return jc(Hh(r,n,Yh),r+"")}function Ac(r){return nh(r,$t,Lc)}function Ic(r){return nh(r,Vt,jh)}var Rc=Fo?function(r){return Fo.get(r)}:Qc;function ra(r){for(var s=r.name+"",c=Di[s],f=Ye.call(Di,s)?c.length:0;f--;){var m=c[f],_=m.func;if(_==null||_==r)return m.name}return s}function qi(r){var s=Ye.call(b,"placeholder")?b:r;return s.placeholder}function ve(){var r=b.iteratee||Kc;return r=r===Kc?sh:r,arguments.length?r(arguments[0],arguments[1]):r}function ia(r,s){var c=r.__data__;return o_(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Oc(r){for(var s=$t(r),c=s.length;c--;){var f=s[c],m=r[f];s[c]=[f,m,Dh(m)]}return s}function oi(r,s){var c=cb(r,s);return ih(c)?c:n}function Xy(r){var s=Ye.call(r,ti),c=r[ti];try{r[ti]=n;var f=!0}catch{}var m=Mo.call(r);return f&&(s?r[ti]=c:delete r[ti]),m}var Lc=oc?function(r){return r==null?[]:(r=Je(r),Tr(oc(r),function(s){return Ff.call(r,s)}))}:Yc,jh=oc?function(r){for(var s=[];r;)Ar(s,Lc(r)),r=Uo(r);return s}:Yc,Lt=jt;(ac&&Lt(new ac(new ArrayBuffer(1)))!=qt||As&&Lt(new As)!=Fe||lc&&Lt(lc.resolve())!=Er||Ni&&Lt(new Ni)!=yt||Is&&Lt(new Is)!=xe)&&(Lt=function(r){var s=jt(r),c=s==ht?r.constructor:n,f=c?ai(c):"";if(f)switch(f){case Mb:return qt;case Bb:return Fe;case jb:return Er;case Ub:return yt;case Nb:return xe}return s});function e_(r,s,c){for(var f=-1,m=c.length;++f<m;){var _=c[f],T=_.size;switch(_.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Ot(s,r+T);break;case"takeRight":r=wt(r,s-T);break}}return{start:r,end:s}}function t_(r){var s=r.match(a2);return s?s[1].split(l2):[]}function Uh(r,s,c){s=Pr(s,r);for(var f=-1,m=s.length,_=!1;++f<m;){var T=Nn(s[f]);if(!(_=r!=null&&c(r,T)))break;r=r[T]}return _||++f!=m?_:(m=r==null?0:r.length,!!m&&da(m)&&sr(T,m)&&(Se(r)||li(r)))}function n_(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ye.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Nh(r){return typeof r.constructor=="function"&&!Ns(r)?zi(Uo(r)):{}}function r_(r,s,c){var f=r.constructor;switch(s){case Qt:return Cc(r);case me:case re:return new f(+r);case qt:return Dy(r,c);case Cr:case Jn:case Xn:case Sr:case Ii:case Ri:case Oi:case Nl:case Dl:return wh(r,c);case Fe:return new f;case St:case wn:return new f(r);case Mn:return zy(r);case yt:return new f;case Bn:return Hy(r)}}function i_(r,s){var c=s.length;if(!c)return r;var f=c-1;return s[f]=(c>1?"& ":"")+s[f],s=s.join(c>2?", ":" "),r.replace(o2,`{
/* [wrapped with `+s+`] */
`)}function s_(r){return Se(r)||li(r)||!!(qf&&r&&r[qf])}function sr(r,s){var c=typeof r;return s=s??Y,!!s&&(c=="number"||c!="symbol"&&v2.test(r))&&r>-1&&r%1==0&&r<s}function Ut(r,s,c){if(!at(c))return!1;var f=typeof s;return(f=="number"?Zt(c)&&sr(s,c.length):f=="string"&&s in c)?kn(c[s],r):!1}function Pc(r,s){if(Se(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||en(r)?!0:n2.test(r)||!t2.test(r)||s!=null&&r in Je(s)}function o_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Mc(r){var s=ra(r),c=b[s];if(typeof c!="function"||!(s in He.prototype))return!1;if(r===c)return!0;var f=Rc(c);return!!f&&r===f[0]}function a_(r){return!!Df&&Df in r}var l_=Lo?or:Jc;function Ns(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Ui;return r===c}function Dh(r){return r===r&&!at(r)}function zh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Je(c))}}function c_(r){var s=ca(r,function(f){return c.size===h&&c.clear(),f}),c=s.cache;return s}function u_(r,s){var c=r[1],f=s[1],m=c|f,_=m<(E|w|j),T=f==j&&c==R||f==j&&c==N&&r[7].length<=s[8]||f==(j|N)&&s[7].length<=s[8]&&c==R;if(!(_||T))return r;f&E&&(r[2]=s[2],m|=c&E?0:O);var L=s[3];if(L){var M=r[3];r[3]=M?$h(M,L,s[4]):L,r[4]=M?Ir(r[3],p):s[4]}return L=s[5],L&&(M=r[5],r[5]=M?kh(M,L,s[6]):L,r[6]=M?Ir(r[5],p):s[6]),L=s[7],L&&(r[7]=L),f&j&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function d_(r){var s=[];if(r!=null)for(var c in Je(r))s.push(c);return s}function f_(r){return Mo.call(r)}function Hh(r,s,c){return s=wt(s===n?r.length-1:s,0),function(){for(var f=arguments,m=-1,_=wt(f.length-s,0),T=U(_);++m<_;)T[m]=f[s+m];m=-1;for(var L=U(s+1);++m<s;)L[m]=f[m];return L[s]=c(T),Yt(r,this,L)}}function Fh(r,s){return s.length<2?r:si(r,gn(s,0,-1))}function h_(r,s){for(var c=r.length,f=Ot(s.length,c),m=Wt(r);f--;){var _=s[f];r[f]=sr(_,c)?m[_]:n}return r}function Bc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var qh=Zh(hh),Ds=Tb||function(r,s){return Tt.setTimeout(r,s)},jc=Zh(By);function Wh(r,s,c){var f=s+"";return jc(r,i_(f,p_(t_(f),c)))}function Zh(r){var s=0,c=0;return function(){var f=Ob(),m=Q-(f-c);if(c=f,m>0){if(++s>=W)return arguments[0]}else s=0;return r.apply(n,arguments)}}function sa(r,s){var c=-1,f=r.length,m=f-1;for(s=s===n?f:s;++c<s;){var _=yc(c,m),T=r[_];r[_]=r[c],r[c]=T}return r.length=s,r}var Vh=c_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(r2,function(c,f,m,_){s.push(m?_.replace(d2,"$1"):f||c)}),s});function Nn(r){if(typeof r=="string"||en(r))return r;var s=r+"";return s=="0"&&1/r==-he?"-0":s}function ai(r){if(r!=null){try{return Po.call(r)}catch{}try{return r+""}catch{}}return""}function p_(r,s){return dn(te,function(c){var f="_."+c[0];s&c[1]&&!Ao(r,f)&&r.push(f)}),r.sort()}function Kh(r){if(r instanceof He)return r.clone();var s=new hn(r.__wrapped__,r.__chain__);return s.__actions__=Wt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function g_(r,s,c){(c?Ut(r,s,c):s===n)?s=1:s=wt(Ae(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var m=0,_=0,T=U(zo(f/s));m<f;)T[_++]=gn(r,m,m+=s);return T}function m_(r){for(var s=-1,c=r==null?0:r.length,f=0,m=[];++s<c;){var _=r[s];_&&(m[f++]=_)}return m}function v_(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),c=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Ar(Se(c)?Wt(c):[c],At(s,1))}var b_=Pe(function(r,s){return pt(r)?Ps(r,At(s,1,pt,!0)):[]}),y_=Pe(function(r,s){var c=mn(s);return pt(c)&&(c=n),pt(r)?Ps(r,At(s,1,pt,!0),ve(c,2)):[]}),__=Pe(function(r,s){var c=mn(s);return pt(c)&&(c=n),pt(r)?Ps(r,At(s,1,pt,!0),n,c):[]});function w_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Ae(s),gn(r,s<0?0:s,f)):[]}function x_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Ae(s),s=f-s,gn(r,0,s<0?0:s)):[]}function $_(r,s){return r&&r.length?Yo(r,ve(s,3),!0,!0):[]}function k_(r,s){return r&&r.length?Yo(r,ve(s,3),!0):[]}function E_(r,s,c,f){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Ut(r,s,c)&&(c=0,f=m),vy(r,s,c,f)):[]}function Gh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Ae(c);return m<0&&(m=wt(f+m,0)),Io(r,ve(s,3),m)}function Qh(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f-1;return c!==n&&(m=Ae(c),m=c<0?wt(f+m,0):Ot(m,f-1)),Io(r,ve(s,3),m,!0)}function Yh(r){var s=r==null?0:r.length;return s?At(r,1):[]}function C_(r){var s=r==null?0:r.length;return s?At(r,he):[]}function S_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Ae(s),At(r,s)):[]}function T_(r){for(var s=-1,c=r==null?0:r.length,f={};++s<c;){var m=r[s];f[m[0]]=m[1]}return f}function Jh(r){return r&&r.length?r[0]:n}function A_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=c==null?0:Ae(c);return m<0&&(m=wt(f+m,0)),Pi(r,s,m)}function I_(r){var s=r==null?0:r.length;return s?gn(r,0,-1):[]}var R_=Pe(function(r){var s=st(r,kc);return s.length&&s[0]===r[0]?pc(s):[]}),O_=Pe(function(r){var s=mn(r),c=st(r,kc);return s===mn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?pc(c,ve(s,2)):[]}),L_=Pe(function(r){var s=mn(r),c=st(r,kc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?pc(c,n,s):[]});function P_(r,s){return r==null?"":Ib.call(r,s)}function mn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function M_(r,s,c){var f=r==null?0:r.length;if(!f)return-1;var m=f;return c!==n&&(m=Ae(c),m=m<0?wt(f+m,0):Ot(m,f-1)),s===s?pb(r,s,m):Io(r,Of,m,!0)}function B_(r,s){return r&&r.length?ch(r,Ae(s)):n}var j_=Pe(Xh);function Xh(r,s){return r&&r.length&&s&&s.length?bc(r,s):r}function U_(r,s,c){return r&&r.length&&s&&s.length?bc(r,s,ve(c,2)):r}function N_(r,s,c){return r&&r.length&&s&&s.length?bc(r,s,n,c):r}var D_=ir(function(r,s){var c=r==null?0:r.length,f=uc(r,s);return fh(r,st(s,function(m){return sr(m,c)?+m:m}).sort(xh)),f});function z_(r,s){var c=[];if(!(r&&r.length))return c;var f=-1,m=[],_=r.length;for(s=ve(s,3);++f<_;){var T=r[f];s(T,f,r)&&(c.push(T),m.push(f))}return fh(r,m),c}function Uc(r){return r==null?r:Pb.call(r)}function H_(r,s,c){var f=r==null?0:r.length;return f?(c&&typeof c!="number"&&Ut(r,s,c)?(s=0,c=f):(s=s==null?0:Ae(s),c=c===n?f:Ae(c)),gn(r,s,c)):[]}function F_(r,s){return Qo(r,s)}function q_(r,s,c){return wc(r,s,ve(c,2))}function W_(r,s){var c=r==null?0:r.length;if(c){var f=Qo(r,s);if(f<c&&kn(r[f],s))return f}return-1}function Z_(r,s){return Qo(r,s,!0)}function V_(r,s,c){return wc(r,s,ve(c,2),!0)}function K_(r,s){var c=r==null?0:r.length;if(c){var f=Qo(r,s,!0)-1;if(kn(r[f],s))return f}return-1}function G_(r){return r&&r.length?ph(r):[]}function Q_(r,s){return r&&r.length?ph(r,ve(s,2)):[]}function Y_(r){var s=r==null?0:r.length;return s?gn(r,1,s):[]}function J_(r,s,c){return r&&r.length?(s=c||s===n?1:Ae(s),gn(r,0,s<0?0:s)):[]}function X_(r,s,c){var f=r==null?0:r.length;return f?(s=c||s===n?1:Ae(s),s=f-s,gn(r,s<0?0:s,f)):[]}function ew(r,s){return r&&r.length?Yo(r,ve(s,3),!1,!0):[]}function tw(r,s){return r&&r.length?Yo(r,ve(s,3)):[]}var nw=Pe(function(r){return Lr(At(r,1,pt,!0))}),rw=Pe(function(r){var s=mn(r);return pt(s)&&(s=n),Lr(At(r,1,pt,!0),ve(s,2))}),iw=Pe(function(r){var s=mn(r);return s=typeof s=="function"?s:n,Lr(At(r,1,pt,!0),n,s)});function sw(r){return r&&r.length?Lr(r):[]}function ow(r,s){return r&&r.length?Lr(r,ve(s,2)):[]}function aw(r,s){return s=typeof s=="function"?s:n,r&&r.length?Lr(r,n,s):[]}function Nc(r){if(!(r&&r.length))return[];var s=0;return r=Tr(r,function(c){if(pt(c))return s=wt(c.length,s),!0}),nc(s,function(c){return st(r,Xl(c))})}function ep(r,s){if(!(r&&r.length))return[];var c=Nc(r);return s==null?c:st(c,function(f){return Yt(s,n,f)})}var lw=Pe(function(r,s){return pt(r)?Ps(r,s):[]}),cw=Pe(function(r){return $c(Tr(r,pt))}),uw=Pe(function(r){var s=mn(r);return pt(s)&&(s=n),$c(Tr(r,pt),ve(s,2))}),dw=Pe(function(r){var s=mn(r);return s=typeof s=="function"?s:n,$c(Tr(r,pt),n,s)}),fw=Pe(Nc);function hw(r,s){return bh(r||[],s||[],Ls)}function pw(r,s){return bh(r||[],s||[],js)}var gw=Pe(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,ep(r,c)});function tp(r){var s=b(r);return s.__chain__=!0,s}function mw(r,s){return s(r),r}function oa(r,s){return s(r)}var vw=ir(function(r){var s=r.length,c=s?r[0]:0,f=this.__wrapped__,m=function(_){return uc(_,r)};return s>1||this.__actions__.length||!(f instanceof He)||!sr(c)?this.thru(m):(f=f.slice(c,+c+(s?1:0)),f.__actions__.push({func:oa,args:[m],thisArg:n}),new hn(f,this.__chain__).thru(function(_){return s&&!_.length&&_.push(n),_}))});function bw(){return tp(this)}function yw(){return new hn(this.value(),this.__chain__)}function _w(){this.__values__===n&&(this.__values__=gp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function ww(){return this}function xw(r){for(var s,c=this;c instanceof Wo;){var f=Kh(c);f.__index__=0,f.__values__=n,s?m.__wrapped__=f:s=f;var m=f;c=c.__wrapped__}return m.__wrapped__=r,s}function $w(){var r=this.__wrapped__;if(r instanceof He){var s=r;return this.__actions__.length&&(s=new He(this)),s=s.reverse(),s.__actions__.push({func:oa,args:[Uc],thisArg:n}),new hn(s,this.__chain__)}return this.thru(Uc)}function kw(){return vh(this.__wrapped__,this.__actions__)}var Ew=Jo(function(r,s,c){Ye.call(r,c)?++r[c]:nr(r,c,1)});function Cw(r,s,c){var f=Se(r)?If:my;return c&&Ut(r,s,c)&&(s=n),f(r,ve(s,3))}function Sw(r,s){var c=Se(r)?Tr:eh;return c(r,ve(s,3))}var Tw=Th(Gh),Aw=Th(Qh);function Iw(r,s){return At(aa(r,s),1)}function Rw(r,s){return At(aa(r,s),he)}function Ow(r,s,c){return c=c===n?1:Ae(c),At(aa(r,s),c)}function np(r,s){var c=Se(r)?dn:Or;return c(r,ve(s,3))}function rp(r,s){var c=Se(r)?Y2:Xf;return c(r,ve(s,3))}var Lw=Jo(function(r,s,c){Ye.call(r,c)?r[c].push(s):nr(r,c,[s])});function Pw(r,s,c,f){r=Zt(r)?r:Zi(r),c=c&&!f?Ae(c):0;var m=r.length;return c<0&&(c=wt(m+c,0)),fa(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Pi(r,s,c)>-1}var Mw=Pe(function(r,s,c){var f=-1,m=typeof s=="function",_=Zt(r)?U(r.length):[];return Or(r,function(T){_[++f]=m?Yt(s,T,c):Ms(T,s,c)}),_}),Bw=Jo(function(r,s,c){nr(r,c,s)});function aa(r,s){var c=Se(r)?st:oh;return c(r,ve(s,3))}function jw(r,s,c,f){return r==null?[]:(Se(s)||(s=s==null?[]:[s]),c=f?n:c,Se(c)||(c=c==null?[]:[c]),uh(r,s,c))}var Uw=Jo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function Nw(r,s,c){var f=Se(r)?Yl:Pf,m=arguments.length<3;return f(r,ve(s,4),c,m,Or)}function Dw(r,s,c){var f=Se(r)?J2:Pf,m=arguments.length<3;return f(r,ve(s,4),c,m,Xf)}function zw(r,s){var c=Se(r)?Tr:eh;return c(r,ua(ve(s,3)))}function Hw(r){var s=Se(r)?Gf:Py;return s(r)}function Fw(r,s,c){(c?Ut(r,s,c):s===n)?s=1:s=Ae(s);var f=Se(r)?dy:My;return f(r,s)}function qw(r){var s=Se(r)?fy:jy;return s(r)}function Ww(r){if(r==null)return 0;if(Zt(r))return fa(r)?Bi(r):r.length;var s=Lt(r);return s==Fe||s==yt?r.size:mc(r).length}function Zw(r,s,c){var f=Se(r)?Jl:Uy;return c&&Ut(r,s,c)&&(s=n),f(r,ve(s,3))}var Vw=Pe(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Ut(r,s[0],s[1])?s=[]:c>2&&Ut(s[0],s[1],s[2])&&(s=[s[0]]),uh(r,At(s,1),[])}),la=Sb||function(){return Tt.Date.now()};function Kw(r,s){if(typeof s!="function")throw new fn(l);return r=Ae(r),function(){if(--r<1)return s.apply(this,arguments)}}function ip(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,rr(r,j,n,n,n,n,s)}function sp(r,s){var c;if(typeof s!="function")throw new fn(l);return r=Ae(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Dc=Pe(function(r,s,c){var f=E;if(c.length){var m=Ir(c,qi(Dc));f|=C}return rr(r,f,s,c,m)}),op=Pe(function(r,s,c){var f=E|w;if(c.length){var m=Ir(c,qi(op));f|=C}return rr(s,f,r,c,m)});function ap(r,s,c){s=c?n:s;var f=rr(r,R,n,n,n,n,n,s);return f.placeholder=ap.placeholder,f}function lp(r,s,c){s=c?n:s;var f=rr(r,I,n,n,n,n,n,s);return f.placeholder=lp.placeholder,f}function cp(r,s,c){var f,m,_,T,L,M,H=0,F=!1,K=!1,ie=!0;if(typeof r!="function")throw new fn(l);s=vn(s)||0,at(c)&&(F=!!c.leading,K="maxWait"in c,_=K?wt(vn(c.maxWait)||0,s):_,ie="trailing"in c?!!c.trailing:ie);function fe(gt){var En=f,lr=m;return f=m=n,H=gt,T=r.apply(lr,En),T}function ye(gt){return H=gt,L=Ds(Ue,s),F?fe(gt):T}function Re(gt){var En=gt-M,lr=gt-H,Tp=s-En;return K?Ot(Tp,_-lr):Tp}function _e(gt){var En=gt-M,lr=gt-H;return M===n||En>=s||En<0||K&&lr>=_}function Ue(){var gt=la();if(_e(gt))return qe(gt);L=Ds(Ue,Re(gt))}function qe(gt){return L=n,ie&&f?fe(gt):(f=m=n,T)}function tn(){L!==n&&yh(L),H=0,f=M=m=L=n}function Nt(){return L===n?T:qe(la())}function nn(){var gt=la(),En=_e(gt);if(f=arguments,m=this,M=gt,En){if(L===n)return ye(M);if(K)return yh(L),L=Ds(Ue,s),fe(M)}return L===n&&(L=Ds(Ue,s)),T}return nn.cancel=tn,nn.flush=Nt,nn}var Gw=Pe(function(r,s){return Jf(r,1,s)}),Qw=Pe(function(r,s,c){return Jf(r,vn(s)||0,c)});function Yw(r){return rr(r,ne)}function ca(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new fn(l);var c=function(){var f=arguments,m=s?s.apply(this,f):f[0],_=c.cache;if(_.has(m))return _.get(m);var T=r.apply(this,f);return c.cache=_.set(m,T)||_,T};return c.cache=new(ca.Cache||tr),c}ca.Cache=tr;function ua(r){if(typeof r!="function")throw new fn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Jw(r){return sp(2,r)}var Xw=Ny(function(r,s){s=s.length==1&&Se(s[0])?st(s[0],Jt(ve())):st(At(s,1),Jt(ve()));var c=s.length;return Pe(function(f){for(var m=-1,_=Ot(f.length,c);++m<_;)f[m]=s[m].call(this,f[m]);return Yt(r,this,f)})}),zc=Pe(function(r,s){var c=Ir(s,qi(zc));return rr(r,C,n,s,c)}),up=Pe(function(r,s){var c=Ir(s,qi(up));return rr(r,A,n,s,c)}),e3=ir(function(r,s){return rr(r,N,n,n,n,s)});function t3(r,s){if(typeof r!="function")throw new fn(l);return s=s===n?s:Ae(s),Pe(r,s)}function n3(r,s){if(typeof r!="function")throw new fn(l);return s=s==null?0:wt(Ae(s),0),Pe(function(c){var f=c[s],m=Mr(c,0,s);return f&&Ar(m,f),Yt(r,this,m)})}function r3(r,s,c){var f=!0,m=!0;if(typeof r!="function")throw new fn(l);return at(c)&&(f="leading"in c?!!c.leading:f,m="trailing"in c?!!c.trailing:m),cp(r,s,{leading:f,maxWait:s,trailing:m})}function i3(r){return ip(r,1)}function s3(r,s){return zc(Ec(s),r)}function o3(){if(!arguments.length)return[];var r=arguments[0];return Se(r)?r:[r]}function a3(r){return pn(r,x)}function l3(r,s){return s=typeof s=="function"?s:n,pn(r,x,s)}function c3(r){return pn(r,g|x)}function u3(r,s){return s=typeof s=="function"?s:n,pn(r,g|x,s)}function d3(r,s){return s==null||Yf(r,s,$t(s))}function kn(r,s){return r===s||r!==r&&s!==s}var f3=na(hc),h3=na(function(r,s){return r>=s}),li=rh(function(){return arguments}())?rh:function(r){return ut(r)&&Ye.call(r,"callee")&&!Ff.call(r,"callee")},Se=U.isArray,p3=kf?Jt(kf):xy;function Zt(r){return r!=null&&da(r.length)&&!or(r)}function pt(r){return ut(r)&&Zt(r)}function g3(r){return r===!0||r===!1||ut(r)&&jt(r)==me}var Br=Ab||Jc,m3=Ef?Jt(Ef):$y;function v3(r){return ut(r)&&r.nodeType===1&&!zs(r)}function b3(r){if(r==null)return!0;if(Zt(r)&&(Se(r)||typeof r=="string"||typeof r.splice=="function"||Br(r)||Wi(r)||li(r)))return!r.length;var s=Lt(r);if(s==Fe||s==yt)return!r.size;if(Ns(r))return!mc(r).length;for(var c in r)if(Ye.call(r,c))return!1;return!0}function y3(r,s){return Bs(r,s)}function _3(r,s,c){c=typeof c=="function"?c:n;var f=c?c(r,s):n;return f===n?Bs(r,s,n,c):!!f}function Hc(r){if(!ut(r))return!1;var s=jt(r);return s==ft||s==ze||typeof r.message=="string"&&typeof r.name=="string"&&!zs(r)}function w3(r){return typeof r=="number"&&Wf(r)}function or(r){if(!at(r))return!1;var s=jt(r);return s==it||s==Le||s==z||s==Ti}function dp(r){return typeof r=="number"&&r==Ae(r)}function da(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Y}function at(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ut(r){return r!=null&&typeof r=="object"}var fp=Cf?Jt(Cf):Ey;function x3(r,s){return r===s||gc(r,s,Oc(s))}function $3(r,s,c){return c=typeof c=="function"?c:n,gc(r,s,Oc(s),c)}function k3(r){return hp(r)&&r!=+r}function E3(r){if(l_(r))throw new Ee(a);return ih(r)}function C3(r){return r===null}function S3(r){return r==null}function hp(r){return typeof r=="number"||ut(r)&&jt(r)==St}function zs(r){if(!ut(r)||jt(r)!=ht)return!1;var s=Uo(r);if(s===null)return!0;var c=Ye.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Po.call(c)==$b}var Fc=Sf?Jt(Sf):Cy;function T3(r){return dp(r)&&r>=-Y&&r<=Y}var pp=Tf?Jt(Tf):Sy;function fa(r){return typeof r=="string"||!Se(r)&&ut(r)&&jt(r)==wn}function en(r){return typeof r=="symbol"||ut(r)&&jt(r)==Bn}var Wi=Af?Jt(Af):Ty;function A3(r){return r===n}function I3(r){return ut(r)&&Lt(r)==xe}function R3(r){return ut(r)&&jt(r)==Yn}var O3=na(vc),L3=na(function(r,s){return r<=s});function gp(r){if(!r)return[];if(Zt(r))return fa(r)?xn(r):Wt(r);if(Ts&&r[Ts])return db(r[Ts]());var s=Lt(r),c=s==Fe?ic:s==yt?Ro:Zi;return c(r)}function ar(r){if(!r)return r===0?r:0;if(r=vn(r),r===he||r===-he){var s=r<0?-1:1;return s*de}return r===r?r:0}function Ae(r){var s=ar(r),c=s%1;return s===s?c?s-c:s:0}function mp(r){return r?ii(Ae(r),0,we):0}function vn(r){if(typeof r=="number")return r;if(en(r))return pe;if(at(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=at(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Mf(r);var c=p2.test(r);return c||m2.test(r)?K2(r.slice(2),c?2:8):h2.test(r)?pe:+r}function vp(r){return Un(r,Vt(r))}function P3(r){return r?ii(Ae(r),-Y,Y):r===0?r:0}function Qe(r){return r==null?"":Xt(r)}var M3=Hi(function(r,s){if(Ns(s)||Zt(s)){Un(s,$t(s),r);return}for(var c in s)Ye.call(s,c)&&Ls(r,c,s[c])}),bp=Hi(function(r,s){Un(s,Vt(s),r)}),ha=Hi(function(r,s,c,f){Un(s,Vt(s),r,f)}),B3=Hi(function(r,s,c,f){Un(s,$t(s),r,f)}),j3=ir(uc);function U3(r,s){var c=zi(r);return s==null?c:Qf(c,s)}var N3=Pe(function(r,s){r=Je(r);var c=-1,f=s.length,m=f>2?s[2]:n;for(m&&Ut(s[0],s[1],m)&&(f=1);++c<f;)for(var _=s[c],T=Vt(_),L=-1,M=T.length;++L<M;){var H=T[L],F=r[H];(F===n||kn(F,Ui[H])&&!Ye.call(r,H))&&(r[H]=_[H])}return r}),D3=Pe(function(r){return r.push(n,Mh),Yt(yp,n,r)});function z3(r,s){return Rf(r,ve(s,3),jn)}function H3(r,s){return Rf(r,ve(s,3),fc)}function F3(r,s){return r==null?r:dc(r,ve(s,3),Vt)}function q3(r,s){return r==null?r:th(r,ve(s,3),Vt)}function W3(r,s){return r&&jn(r,ve(s,3))}function Z3(r,s){return r&&fc(r,ve(s,3))}function V3(r){return r==null?[]:Ko(r,$t(r))}function K3(r){return r==null?[]:Ko(r,Vt(r))}function qc(r,s,c){var f=r==null?n:si(r,s);return f===n?c:f}function G3(r,s){return r!=null&&Uh(r,s,by)}function Wc(r,s){return r!=null&&Uh(r,s,yy)}var Q3=Ih(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Mo.call(s)),r[s]=c},Vc(Kt)),Y3=Ih(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Mo.call(s)),Ye.call(r,s)?r[s].push(c):r[s]=[c]},ve),J3=Pe(Ms);function $t(r){return Zt(r)?Kf(r):mc(r)}function Vt(r){return Zt(r)?Kf(r,!0):Ay(r)}function X3(r,s){var c={};return s=ve(s,3),jn(r,function(f,m,_){nr(c,s(f,m,_),f)}),c}function e4(r,s){var c={};return s=ve(s,3),jn(r,function(f,m,_){nr(c,m,s(f,m,_))}),c}var t4=Hi(function(r,s,c){Go(r,s,c)}),yp=Hi(function(r,s,c,f){Go(r,s,c,f)}),n4=ir(function(r,s){var c={};if(r==null)return c;var f=!1;s=st(s,function(_){return _=Pr(_,r),f||(f=_.length>1),_}),Un(r,Ic(r),c),f&&(c=pn(c,g|v|x,Qy));for(var m=s.length;m--;)xc(c,s[m]);return c});function r4(r,s){return _p(r,ua(ve(s)))}var i4=ir(function(r,s){return r==null?{}:Ry(r,s)});function _p(r,s){if(r==null)return{};var c=st(Ic(r),function(f){return[f]});return s=ve(s),dh(r,c,function(f,m){return s(f,m[0])})}function s4(r,s,c){s=Pr(s,r);var f=-1,m=s.length;for(m||(m=1,r=n);++f<m;){var _=r==null?n:r[Nn(s[f])];_===n&&(f=m,_=c),r=or(_)?_.call(r):_}return r}function o4(r,s,c){return r==null?r:js(r,s,c)}function a4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:js(r,s,c,f)}var wp=Lh($t),xp=Lh(Vt);function l4(r,s,c){var f=Se(r),m=f||Br(r)||Wi(r);if(s=ve(s,4),c==null){var _=r&&r.constructor;m?c=f?new _:[]:at(r)?c=or(_)?zi(Uo(r)):{}:c={}}return(m?dn:jn)(r,function(T,L,M){return s(c,T,L,M)}),c}function c4(r,s){return r==null?!0:xc(r,s)}function u4(r,s,c){return r==null?r:mh(r,s,Ec(c))}function d4(r,s,c,f){return f=typeof f=="function"?f:n,r==null?r:mh(r,s,Ec(c),f)}function Zi(r){return r==null?[]:rc(r,$t(r))}function f4(r){return r==null?[]:rc(r,Vt(r))}function h4(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=vn(c),c=c===c?c:0),s!==n&&(s=vn(s),s=s===s?s:0),ii(vn(r),s,c)}function p4(r,s,c){return s=ar(s),c===n?(c=s,s=0):c=ar(c),r=vn(r),_y(r,s,c)}function g4(r,s,c){if(c&&typeof c!="boolean"&&Ut(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=ar(r),s===n?(s=r,r=0):s=ar(s)),r>s){var f=r;r=s,s=f}if(c||r%1||s%1){var m=Zf();return Ot(r+m*(s-r+V2("1e-"+((m+"").length-1))),s)}return yc(r,s)}var m4=Fi(function(r,s,c){return s=s.toLowerCase(),r+(c?$p(s):s)});function $p(r){return Zc(Qe(r).toLowerCase())}function kp(r){return r=Qe(r),r&&r.replace(b2,ob).replace(j2,"")}function v4(r,s,c){r=Qe(r),s=Xt(s);var f=r.length;c=c===n?f:ii(Ae(c),0,f);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function b4(r){return r=Qe(r),r&&Jv.test(r)?r.replace(ef,ab):r}function y4(r){return r=Qe(r),r&&i2.test(r)?r.replace(zl,"\\$&"):r}var _4=Fi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),w4=Fi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),x4=Sh("toLowerCase");function $4(r,s,c){r=Qe(r),s=Ae(s);var f=s?Bi(r):0;if(!s||f>=s)return r;var m=(s-f)/2;return ta(Ho(m),c)+r+ta(zo(m),c)}function k4(r,s,c){r=Qe(r),s=Ae(s);var f=s?Bi(r):0;return s&&f<s?r+ta(s-f,c):r}function E4(r,s,c){r=Qe(r),s=Ae(s);var f=s?Bi(r):0;return s&&f<s?ta(s-f,c)+r:r}function C4(r,s,c){return c||s==null?s=0:s&&(s=+s),Lb(Qe(r).replace(Hl,""),s||0)}function S4(r,s,c){return(c?Ut(r,s,c):s===n)?s=1:s=Ae(s),_c(Qe(r),s)}function T4(){var r=arguments,s=Qe(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var A4=Fi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function I4(r,s,c){return c&&typeof c!="number"&&Ut(r,s,c)&&(s=c=n),c=c===n?we:c>>>0,c?(r=Qe(r),r&&(typeof s=="string"||s!=null&&!Fc(s))&&(s=Xt(s),!s&&Mi(r))?Mr(xn(r),0,c):r.split(s,c)):[]}var R4=Fi(function(r,s,c){return r+(c?" ":"")+Zc(s)});function O4(r,s,c){return r=Qe(r),c=c==null?0:ii(Ae(c),0,r.length),s=Xt(s),r.slice(c,c+s.length)==s}function L4(r,s,c){var f=b.templateSettings;c&&Ut(r,s,c)&&(s=n),r=Qe(r),s=ha({},s,f,Ph);var m=ha({},s.imports,f.imports,Ph),_=$t(m),T=rc(m,_),L,M,H=0,F=s.interpolate||Co,K="__p += '",ie=sc((s.escape||Co).source+"|"+F.source+"|"+(F===tf?f2:Co).source+"|"+(s.evaluate||Co).source+"|$","g"),fe="//# sourceURL="+(Ye.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++H2+"]")+`
`;r.replace(ie,function(_e,Ue,qe,tn,Nt,nn){return qe||(qe=tn),K+=r.slice(H,nn).replace(y2,lb),Ue&&(L=!0,K+=`' +
__e(`+Ue+`) +
'`),Nt&&(M=!0,K+=`';
`+Nt+`;
__p += '`),qe&&(K+=`' +
((__t = (`+qe+`)) == null ? '' : __t) +
'`),H=nn+_e.length,_e}),K+=`';
`;var ye=Ye.call(s,"variable")&&s.variable;if(!ye)K=`with (obj) {
`+K+`
}
`;else if(u2.test(ye))throw new Ee(u);K=(M?K.replace(Kv,""):K).replace(Gv,"$1").replace(Qv,"$1;"),K="function("+(ye||"obj")+`) {
`+(ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(L?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var Re=Cp(function(){return Ke(_,fe+"return "+K).apply(n,T)});if(Re.source=K,Hc(Re))throw Re;return Re}function P4(r){return Qe(r).toLowerCase()}function M4(r){return Qe(r).toUpperCase()}function B4(r,s,c){if(r=Qe(r),r&&(c||s===n))return Mf(r);if(!r||!(s=Xt(s)))return r;var f=xn(r),m=xn(s),_=Bf(f,m),T=jf(f,m)+1;return Mr(f,_,T).join("")}function j4(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.slice(0,Nf(r)+1);if(!r||!(s=Xt(s)))return r;var f=xn(r),m=jf(f,xn(s))+1;return Mr(f,0,m).join("")}function U4(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.replace(Hl,"");if(!r||!(s=Xt(s)))return r;var f=xn(r),m=Bf(f,xn(s));return Mr(f,m).join("")}function N4(r,s){var c=V,f=J;if(at(s)){var m="separator"in s?s.separator:m;c="length"in s?Ae(s.length):c,f="omission"in s?Xt(s.omission):f}r=Qe(r);var _=r.length;if(Mi(r)){var T=xn(r);_=T.length}if(c>=_)return r;var L=c-Bi(f);if(L<1)return f;var M=T?Mr(T,0,L).join(""):r.slice(0,L);if(m===n)return M+f;if(T&&(L+=M.length-L),Fc(m)){if(r.slice(L).search(m)){var H,F=M;for(m.global||(m=sc(m.source,Qe(nf.exec(m))+"g")),m.lastIndex=0;H=m.exec(F);)var K=H.index;M=M.slice(0,K===n?L:K)}}else if(r.indexOf(Xt(m),L)!=L){var ie=M.lastIndexOf(m);ie>-1&&(M=M.slice(0,ie))}return M+f}function D4(r){return r=Qe(r),r&&Yv.test(r)?r.replace(Xd,gb):r}var z4=Fi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Zc=Sh("toUpperCase");function Ep(r,s,c){return r=Qe(r),s=c?n:s,s===n?ub(r)?bb(r):tb(r):r.match(s)||[]}var Cp=Pe(function(r,s){try{return Yt(r,n,s)}catch(c){return Hc(c)?c:new Ee(c)}}),H4=ir(function(r,s){return dn(s,function(c){c=Nn(c),nr(r,c,Dc(r[c],r))}),r});function F4(r){var s=r==null?0:r.length,c=ve();return r=s?st(r,function(f){if(typeof f[1]!="function")throw new fn(l);return[c(f[0]),f[1]]}):[],Pe(function(f){for(var m=-1;++m<s;){var _=r[m];if(Yt(_[0],this,f))return Yt(_[1],this,f)}})}function q4(r){return gy(pn(r,g))}function Vc(r){return function(){return r}}function W4(r,s){return r==null||r!==r?s:r}var Z4=Ah(),V4=Ah(!0);function Kt(r){return r}function Kc(r){return sh(typeof r=="function"?r:pn(r,g))}function K4(r){return ah(pn(r,g))}function G4(r,s){return lh(r,pn(s,g))}var Q4=Pe(function(r,s){return function(c){return Ms(c,r,s)}}),Y4=Pe(function(r,s){return function(c){return Ms(r,c,s)}});function Gc(r,s,c){var f=$t(s),m=Ko(s,f);c==null&&!(at(s)&&(m.length||!f.length))&&(c=s,s=r,r=this,m=Ko(s,$t(s)));var _=!(at(c)&&"chain"in c)||!!c.chain,T=or(r);return dn(m,function(L){var M=s[L];r[L]=M,T&&(r.prototype[L]=function(){var H=this.__chain__;if(_||H){var F=r(this.__wrapped__),K=F.__actions__=Wt(this.__actions__);return K.push({func:M,args:arguments,thisArg:r}),F.__chain__=H,F}return M.apply(r,Ar([this.value()],arguments))})}),r}function J4(){return Tt._===this&&(Tt._=kb),this}function Qc(){}function X4(r){return r=Ae(r),Pe(function(s){return ch(s,r)})}var ex=Sc(st),tx=Sc(If),nx=Sc(Jl);function Sp(r){return Pc(r)?Xl(Nn(r)):Oy(r)}function rx(r){return function(s){return r==null?n:si(r,s)}}var ix=Rh(),sx=Rh(!0);function Yc(){return[]}function Jc(){return!1}function ox(){return{}}function ax(){return""}function lx(){return!0}function cx(r,s){if(r=Ae(r),r<1||r>Y)return[];var c=we,f=Ot(r,we);s=ve(s),r-=we;for(var m=nc(f,s);++c<r;)s(c);return m}function ux(r){return Se(r)?st(r,Nn):en(r)?[r]:Wt(Vh(Qe(r)))}function dx(r){var s=++xb;return Qe(r)+s}var fx=ea(function(r,s){return r+s},0),hx=Tc("ceil"),px=ea(function(r,s){return r/s},1),gx=Tc("floor");function mx(r){return r&&r.length?Vo(r,Kt,hc):n}function vx(r,s){return r&&r.length?Vo(r,ve(s,2),hc):n}function bx(r){return Lf(r,Kt)}function yx(r,s){return Lf(r,ve(s,2))}function _x(r){return r&&r.length?Vo(r,Kt,vc):n}function wx(r,s){return r&&r.length?Vo(r,ve(s,2),vc):n}var xx=ea(function(r,s){return r*s},1),$x=Tc("round"),kx=ea(function(r,s){return r-s},0);function Ex(r){return r&&r.length?tc(r,Kt):0}function Cx(r,s){return r&&r.length?tc(r,ve(s,2)):0}return b.after=Kw,b.ary=ip,b.assign=M3,b.assignIn=bp,b.assignInWith=ha,b.assignWith=B3,b.at=j3,b.before=sp,b.bind=Dc,b.bindAll=H4,b.bindKey=op,b.castArray=o3,b.chain=tp,b.chunk=g_,b.compact=m_,b.concat=v_,b.cond=F4,b.conforms=q4,b.constant=Vc,b.countBy=Ew,b.create=U3,b.curry=ap,b.curryRight=lp,b.debounce=cp,b.defaults=N3,b.defaultsDeep=D3,b.defer=Gw,b.delay=Qw,b.difference=b_,b.differenceBy=y_,b.differenceWith=__,b.drop=w_,b.dropRight=x_,b.dropRightWhile=$_,b.dropWhile=k_,b.fill=E_,b.filter=Sw,b.flatMap=Iw,b.flatMapDeep=Rw,b.flatMapDepth=Ow,b.flatten=Yh,b.flattenDeep=C_,b.flattenDepth=S_,b.flip=Yw,b.flow=Z4,b.flowRight=V4,b.fromPairs=T_,b.functions=V3,b.functionsIn=K3,b.groupBy=Lw,b.initial=I_,b.intersection=R_,b.intersectionBy=O_,b.intersectionWith=L_,b.invert=Q3,b.invertBy=Y3,b.invokeMap=Mw,b.iteratee=Kc,b.keyBy=Bw,b.keys=$t,b.keysIn=Vt,b.map=aa,b.mapKeys=X3,b.mapValues=e4,b.matches=K4,b.matchesProperty=G4,b.memoize=ca,b.merge=t4,b.mergeWith=yp,b.method=Q4,b.methodOf=Y4,b.mixin=Gc,b.negate=ua,b.nthArg=X4,b.omit=n4,b.omitBy=r4,b.once=Jw,b.orderBy=jw,b.over=ex,b.overArgs=Xw,b.overEvery=tx,b.overSome=nx,b.partial=zc,b.partialRight=up,b.partition=Uw,b.pick=i4,b.pickBy=_p,b.property=Sp,b.propertyOf=rx,b.pull=j_,b.pullAll=Xh,b.pullAllBy=U_,b.pullAllWith=N_,b.pullAt=D_,b.range=ix,b.rangeRight=sx,b.rearg=e3,b.reject=zw,b.remove=z_,b.rest=t3,b.reverse=Uc,b.sampleSize=Fw,b.set=o4,b.setWith=a4,b.shuffle=qw,b.slice=H_,b.sortBy=Vw,b.sortedUniq=G_,b.sortedUniqBy=Q_,b.split=I4,b.spread=n3,b.tail=Y_,b.take=J_,b.takeRight=X_,b.takeRightWhile=ew,b.takeWhile=tw,b.tap=mw,b.throttle=r3,b.thru=oa,b.toArray=gp,b.toPairs=wp,b.toPairsIn=xp,b.toPath=ux,b.toPlainObject=vp,b.transform=l4,b.unary=i3,b.union=nw,b.unionBy=rw,b.unionWith=iw,b.uniq=sw,b.uniqBy=ow,b.uniqWith=aw,b.unset=c4,b.unzip=Nc,b.unzipWith=ep,b.update=u4,b.updateWith=d4,b.values=Zi,b.valuesIn=f4,b.without=lw,b.words=Ep,b.wrap=s3,b.xor=cw,b.xorBy=uw,b.xorWith=dw,b.zip=fw,b.zipObject=hw,b.zipObjectDeep=pw,b.zipWith=gw,b.entries=wp,b.entriesIn=xp,b.extend=bp,b.extendWith=ha,Gc(b,b),b.add=fx,b.attempt=Cp,b.camelCase=m4,b.capitalize=$p,b.ceil=hx,b.clamp=h4,b.clone=a3,b.cloneDeep=c3,b.cloneDeepWith=u3,b.cloneWith=l3,b.conformsTo=d3,b.deburr=kp,b.defaultTo=W4,b.divide=px,b.endsWith=v4,b.eq=kn,b.escape=b4,b.escapeRegExp=y4,b.every=Cw,b.find=Tw,b.findIndex=Gh,b.findKey=z3,b.findLast=Aw,b.findLastIndex=Qh,b.findLastKey=H3,b.floor=gx,b.forEach=np,b.forEachRight=rp,b.forIn=F3,b.forInRight=q3,b.forOwn=W3,b.forOwnRight=Z3,b.get=qc,b.gt=f3,b.gte=h3,b.has=G3,b.hasIn=Wc,b.head=Jh,b.identity=Kt,b.includes=Pw,b.indexOf=A_,b.inRange=p4,b.invoke=J3,b.isArguments=li,b.isArray=Se,b.isArrayBuffer=p3,b.isArrayLike=Zt,b.isArrayLikeObject=pt,b.isBoolean=g3,b.isBuffer=Br,b.isDate=m3,b.isElement=v3,b.isEmpty=b3,b.isEqual=y3,b.isEqualWith=_3,b.isError=Hc,b.isFinite=w3,b.isFunction=or,b.isInteger=dp,b.isLength=da,b.isMap=fp,b.isMatch=x3,b.isMatchWith=$3,b.isNaN=k3,b.isNative=E3,b.isNil=S3,b.isNull=C3,b.isNumber=hp,b.isObject=at,b.isObjectLike=ut,b.isPlainObject=zs,b.isRegExp=Fc,b.isSafeInteger=T3,b.isSet=pp,b.isString=fa,b.isSymbol=en,b.isTypedArray=Wi,b.isUndefined=A3,b.isWeakMap=I3,b.isWeakSet=R3,b.join=P_,b.kebabCase=_4,b.last=mn,b.lastIndexOf=M_,b.lowerCase=w4,b.lowerFirst=x4,b.lt=O3,b.lte=L3,b.max=mx,b.maxBy=vx,b.mean=bx,b.meanBy=yx,b.min=_x,b.minBy=wx,b.stubArray=Yc,b.stubFalse=Jc,b.stubObject=ox,b.stubString=ax,b.stubTrue=lx,b.multiply=xx,b.nth=B_,b.noConflict=J4,b.noop=Qc,b.now=la,b.pad=$4,b.padEnd=k4,b.padStart=E4,b.parseInt=C4,b.random=g4,b.reduce=Nw,b.reduceRight=Dw,b.repeat=S4,b.replace=T4,b.result=s4,b.round=$x,b.runInContext=P,b.sample=Hw,b.size=Ww,b.snakeCase=A4,b.some=Zw,b.sortedIndex=F_,b.sortedIndexBy=q_,b.sortedIndexOf=W_,b.sortedLastIndex=Z_,b.sortedLastIndexBy=V_,b.sortedLastIndexOf=K_,b.startCase=R4,b.startsWith=O4,b.subtract=kx,b.sum=Ex,b.sumBy=Cx,b.template=L4,b.times=cx,b.toFinite=ar,b.toInteger=Ae,b.toLength=mp,b.toLower=P4,b.toNumber=vn,b.toSafeInteger=P3,b.toString=Qe,b.toUpper=M4,b.trim=B4,b.trimEnd=j4,b.trimStart=U4,b.truncate=N4,b.unescape=D4,b.uniqueId=dx,b.upperCase=z4,b.upperFirst=Zc,b.each=np,b.eachRight=rp,b.first=Jh,Gc(b,function(){var r={};return jn(b,function(s,c){Ye.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,dn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),dn(["drop","take"],function(r,s){He.prototype[r]=function(c){c=c===n?1:wt(Ae(c),0);var f=this.__filtered__&&!s?new He(this):this.clone();return f.__filtered__?f.__takeCount__=Ot(c,f.__takeCount__):f.__views__.push({size:Ot(c,we),type:r+(f.__dir__<0?"Right":"")}),f},He.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),dn(["filter","map","takeWhile"],function(r,s){var c=s+1,f=c==se||c==ee;He.prototype[r]=function(m){var _=this.clone();return _.__iteratees__.push({iteratee:ve(m,3),type:c}),_.__filtered__=_.__filtered__||f,_}}),dn(["head","last"],function(r,s){var c="take"+(s?"Right":"");He.prototype[r]=function(){return this[c](1).value()[0]}}),dn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");He.prototype[r]=function(){return this.__filtered__?new He(this):this[c](1)}}),He.prototype.compact=function(){return this.filter(Kt)},He.prototype.find=function(r){return this.filter(r).head()},He.prototype.findLast=function(r){return this.reverse().find(r)},He.prototype.invokeMap=Pe(function(r,s){return typeof r=="function"?new He(this):this.map(function(c){return Ms(c,r,s)})}),He.prototype.reject=function(r){return this.filter(ua(ve(r)))},He.prototype.slice=function(r,s){r=Ae(r);var c=this;return c.__filtered__&&(r>0||s<0)?new He(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Ae(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},He.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},He.prototype.toArray=function(){return this.take(we)},jn(He.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),m=b[f?"take"+(s=="last"?"Right":""):s],_=f||/^find/.test(s);m&&(b.prototype[s]=function(){var T=this.__wrapped__,L=f?[1]:arguments,M=T instanceof He,H=L[0],F=M||Se(T),K=function(Ue){var qe=m.apply(b,Ar([Ue],L));return f&&ie?qe[0]:qe};F&&c&&typeof H=="function"&&H.length!=1&&(M=F=!1);var ie=this.__chain__,fe=!!this.__actions__.length,ye=_&&!ie,Re=M&&!fe;if(!_&&F){T=Re?T:new He(this);var _e=r.apply(T,L);return _e.__actions__.push({func:oa,args:[K],thisArg:n}),new hn(_e,ie)}return ye&&Re?r.apply(this,L):(_e=this.thru(K),ye?f?_e.value()[0]:_e.value():_e)})}),dn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Oo[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(f&&!this.__chain__){var _=this.value();return s.apply(Se(_)?_:[],m)}return this[c](function(T){return s.apply(Se(T)?T:[],m)})}}),jn(He.prototype,function(r,s){var c=b[s];if(c){var f=c.name+"";Ye.call(Di,f)||(Di[f]=[]),Di[f].push({name:s,func:c})}}),Di[Xo(n,w).name]=[{name:"wrapper",func:n}],He.prototype.clone=Db,He.prototype.reverse=zb,He.prototype.value=Hb,b.prototype.at=vw,b.prototype.chain=bw,b.prototype.commit=yw,b.prototype.next=_w,b.prototype.plant=xw,b.prototype.reverse=$w,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=kw,b.prototype.first=b.prototype.head,Ts&&(b.prototype[Ts]=ww),b},ji=yb();ei?((ei.exports=ji)._=ji,Kl._=ji):Tt._=ji}).call(fr)})(il,il.exports);var GP=il.exports;const vr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>vr(n)(t));case"OR":return e.children.some(n=>vr(n)(t));case"NOT":return!vr(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Vu=e=>{const t=wi(),n=We(e),i=()=>["useFollowings",n()],o=xi(i,({queryKey:d,signal:h})=>{console.debug("useFollowings");const[,p]=d;if(p==null)return Promise.resolve(null);const{pubkey:g}=p,v=new _s({type:"Followings",pubkey:g}),x=v.firstEventPromise().catch(()=>{throw new Error(`followings not found: ${g}`)});return v.onUpdate(k=>{const $=Cd(k);t.setQueryData(d,$)}),ws({task:v,signal:h}),xr(15e3,`useFollowings: ${g}`)(x)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return pr(o.data).pTags().forEach(p=>{const[,g,v,x]=p,k={pubkey:g,petname:x};v!=null&&v.length>0&&(k.mainRelayUrl=v),d.push(k)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},QP=e=>{const t=vt(),{config:n,removeColumn:i}=je(),{followingPubkeys:o}=Vu(()=>({pubkey:e.column.pubkey})),{events:a}=kr(()=>{const l=GP.uniq([...o()]);return l.length===0?null:{debugId:"following",relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:l,limit:10,since:dr()-4*60*60}],clientEventFilter:u=>e.column.contentFilter==null?!0:vr(e.column.contentFilter)(u.content)}});return Dn(()=>{console.log("home",a())}),cn(()=>console.log("home timeline mounted")),br(()=>console.log("home timeline unmounted")),y(Ci,{get header(){return y(ds,{get name(){return e.column.name??t()("column.home")},get icon(){return y(Lv,{})},settings:()=>y(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(xs,{get events(){return a()}})}})},YP=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Pv=(e={})=>(()=>{const t=YP();return Ge(t,e,!0,!0),t})(),JP=B('<span class="h-4 w-4 pt-[1px] text-rose-400">'),XP=B('<img alt="icon" class="rounded">'),eM=B('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline">'),tM=B('<div class="notification-event py-1">'),nM=B('<span class="truncate">'),rM=B('<div class="truncate">読み込み中 '),iM=e=>{const t=vt(),{shouldMuteEvent:n}=je(),{showProfile:i}=$r(),o=()=>pr(e.event),a=()=>o().lastTaggedEventId(),{profile:l}=ki(()=>({pubkey:e.event.pubkey})),{event:u,query:d}=km(()=>ln([a()])(([p])=>({eventId:p}))),h=()=>d.isSuccess&&u()==null;return y(le,{get when(){return!h()||n(e.event)},get children(){return[(()=>{const p=eM(),g=p.firstChild,v=g.nextSibling,x=v.firstChild,k=x.nextSibling,$=k.firstChild;return S(g,y(an,{get fallback(){return(()=>{const E=nM();return S(E,()=>e.event.content),E})()},get children(){return y(De,{get when(){return e.event.content==="+"},get children(){const E=JP();return S(E,y(Ga,{})),E}})}})),S(x,y(le,{get when(){return l()?.picture!=null},get children(){const E=XP();return Me(()=>Xe(E,"src",l()?.picture)),E}})),$.$$click=()=>i(e.event.pubkey),S($,y(Il,{get pubkey(){return e.event.pubkey}})),S(k,()=>t()("notification.reacted"),null),p})(),(()=>{const p=tM();return S(p,y(le,{get when(){return u()},get fallback(){return(()=>{const g=rM();return g.firstChild,S(g,a,null),g})()},keyed:!0,children:g=>y(dv,{event:g})})),p})()]}})};ot(["click"]);const sM=B("<div>unknown event"),Mv=e=>{const{shouldMuteEvent:t}=je();return y(Ct,{get each(){return e.events},children:n=>y(le,{get when(){return!t(n)},get children(){return y(an,{get fallback(){return sM()},get children(){return[y(De,{get when(){return n.kind===dt.Text},get children(){return y(Vs,{get children(){return y(fv,{event:n})}})}}),y(De,{get when(){return n.kind===dt.Reaction},get children(){return y(Vs,{get children(){return y(iM,{event:n})}})}}),y(De,{get when(){return n.kind===6},get children(){return y(Vs,{get children(){return y(Tm,{event:n})}})}})]}})}})})},oM=e=>{const t=vt(),{config:n,removeColumn:i}=je(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:vr(e.column.contentFilter)(a.content)}));return y(Ci,{get header(){return y(ds,{get name(){return e.column.name??t()("column.notification")},get icon(){return y(Pv,{})},settings:()=>y(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(Mv,{get events(){return o()}})}})},aM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Zd=(e={})=>(()=>{const t=aM();return Ge(t,e,!0,!0),t})(),lM=e=>{const t=vt(),{config:n,removeColumn:i}=je(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:vr(e.column.contentFilter)(a.content)}));return y(Ci,{get header(){return y(ds,{get name(){return e.column.name??t()("column.posts")},get icon(){return y(Zd,{})},settings:()=>y(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(xs,{get events(){return o()}})}})},cM=e=>{const t=vt(),{config:n,removeColumn:i}=je(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:vr(e.column.contentFilter)(a.content)}));return y(Ci,{get header(){return y(ds,{get name(){return e.column.name??t()("column.reactions")},get icon(){return y(Sd,{})},settings:()=>y(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(Mv,{get events(){return o()}})}})},uM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Vd=(e={})=>(()=>{const t=uM();return Ge(t,e,!0,!0),t})(),dM=e=>{const t=vt(),{removeColumn:n}=je(),{events:i}=kr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:dr()-4*60*60}],clientEventFilter:o=>e.column.contentFilter==null?!0:vr(e.column.contentFilter)(o.content)}));return y(Ci,{get header(){return y(ds,{get name(){return e.column.name??t()("column.relay")},get icon(){return y(Vd,{})},settings:()=>y(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(xs,{get events(){return i()}})}})},fM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),Bv=(e={})=>(()=>{const t=fM();return Ge(t,e,!0,!0),t})(),hM=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),pM=e=>{const[t,n]=$e(!1),[i,o]=$e(""),{saveColumn:a}=je(),l=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},h=g=>{o(g.currentTarget.value)},p=g=>{g.preventDefault(),u()};return cn(()=>{o(e.column.query)}),(()=>{const g=hM(),v=g.firstChild,x=v.firstChild,k=x.firstChild,$=x.nextSibling,E=$.firstChild,w=$.nextSibling;return S(k,y(Bv,{})),$.addEventListener("submit",p),E.addEventListener("blur",d),E.addEventListener("change",h),w.$$click=()=>l(),S(w,y(Mg,{})),S(g,y(le,{get when(){return t()},get children(){return e.settings()}}),null),Me(()=>E.value=i()),g})()},gM=e=>{const{removeColumn:t}=je(),{events:n}=kr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:U9,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:vr(e.column.contentFilter)(o.content)}});return y(Ci,{get header(){return y(pM,{get column(){return e.column},settings:()=>y(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return y(xs,{get events(){return n()}})}})};ot(["click"]);const mM=B('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),vM=()=>{const{config:e}=je();return(()=>{const t=mM();return S(t,y(Ct,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return y(an,{get children(){return[y(De,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:l=>y(QP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(De,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:l=>y(oM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(De,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:l=>y(lM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(De,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:l=>y(cM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(De,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:l=>y(dM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(De,{get when(){return n.columnType==="Bookmark"&&n},keyed:!0,children:l=>y(VP,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),y(De,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:l=>y(gM,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},bM=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),yM=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),_M=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),wM=async()=>{const t=await(await fetch(Qu("packageInfo.json"))).text();return JSON.parse(t)},xM=e=>{const[t]=Rg(wM);return y(Ei,{get onClose(){return e.onClose},get children(){const n=bM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,h=d.nextSibling,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,x=v.nextSibling;x.nextSibling;const k=g.nextSibling,$=k.nextSibling,E=$.nextSibling,w=E.nextSibling,O=w.nextSibling,R=O.nextSibling,I=R.nextSibling;return I.nextSibling,S(u,()=>t()?.self?.version,null),S(g,y(Ll,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),x),S(I,()=>t()?.self.licenseText),S(n,y(Ct,{get each(){return t()?.packages??[]},fallback:"取得中",children:C=>[(()=>{const A=yM(),j=A.firstChild,N=j.nextSibling,ne=N.nextSibling,V=ne.nextSibling;return V.nextSibling,S(A,()=>C.name,j),S(A,()=>C.version,N),S(A,()=>C.licenseSpdx,V),A})(),(()=>{const A=_M();return S(A,()=>C.licenseText),A})()]}),null),Me(()=>Xe(o,"src",Qu("images/rabbit_app_256.png"))),n}})},$M=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),kM=e=>{const t=vt(),n=Gn(),{saveColumn:i}=je(),o=ko(),a=()=>{e.onClose(),o({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{ln([n()])(([v])=>{i(sm({pubkey:v}))}),a()},u=()=>{ln([n()])(([v])=>{i(om({pubkey:v}))}),a()},d=()=>{i(am()),a()},h=()=>{i(Ed({query:""})),a()},p=()=>{ln([n()])(([v])=>{i(lm({pubkey:v}))}),a()},g=()=>{ln([n()])(([v])=>{i(cm({pubkey:v}))}),a()};return y(Ei,{get onClose(){return e.onClose},get children(){const v=$M(),x=v.firstChild,k=x.firstChild,$=x.nextSibling,E=$.firstChild,w=$.nextSibling,O=w.firstChild,R=w.nextSibling,I=R.firstChild,C=R.nextSibling,A=C.firstChild,j=C.nextSibling,N=j.firstChild;return x.$$click=()=>l(),S(k,y(Lv,{})),S(x,()=>t()("column.home"),null),$.$$click=()=>u(),S(E,y(Pv,{})),S($,()=>t()("column.notification"),null),w.$$click=()=>d(),S(O,y(Vd,{})),S(w,()=>t()("column.japanese"),null),R.$$click=()=>h(),S(I,y(Bv,{})),S(R,()=>t()("column.search"),null),C.$$click=()=>p(),S(A,y(Zd,{})),S(C,()=>t()("column.myPosts"),null),j.$$click=()=>g(),S(N,y(Sd,{})),S(j,()=>t()("column.myReactions"),null),v}})};ot(["click"]);const EM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),CM=(e={})=>(()=>{const t=EM();return Ge(t,e,!0,!0),t})(),SM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),TM=(e={})=>(()=>{const t=SM();return Ge(t,e,!0,!0),t})(),AM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),IM=(e={})=>(()=>{const t=AM();return Ge(t,e,!0,!0),t})();function RM(e){const{config:t}=je(),n=We(e),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[dt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>gr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const OM=e=>{const t=We(e),n=xi(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return em.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},LM=e=>new Promise(t=>{setTimeout(t,e)}),PM=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),ag=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),MM=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),BM=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),jM=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),lg=B('<div class="shrink-0 text-xs">'),UM=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),NM=B('<div class="truncate text-xl font-bold">'),DM=B('<div class="truncate text-xs">@'),zM=B('<span class="inline-block h-3 w-3">'),HM=B('<span class="inline-block h-4 w-4 text-blue-400">'),FM=B('<div class="flex items-center text-xs">'),qM=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),WM=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),ZM=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),VM=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),KM=B('<ul class="border-t px-5 py-2 text-xs">'),GM=B('<ul class="border-t p-1">'),QM=B('<div class="h-12 shrink-0">'),YM=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),JM=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),XM=B('<span class="inline-block h-4 w-4 text-rose-500">'),eB=B('<span class="text-sm">読み込み中'),tB=B('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),nB=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),rB=e=>{const{count:t}=RM(()=>({pubkey:e.pubkey}));return We(t)},iB=e=>{const t=vt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=je(),l=Pl(),u=Gn(),{showProfileEdit:d}=$r(),h=We(()=>$o(e.pubkey)),[p,g]=$e(!1),[v,x]=$e(!1),[k,$]=$e(!1),[E,w]=$e(null),O=()=>w(null),{profile:R,query:I}=ki(()=>({pubkey:e.pubkey})),{verification:C,query:A}=OM(()=>ln([R()?.nip05])(([te])=>({nip05:te}))),j=()=>{const te=R()?.nip05;if(te==null)return null;const[G,oe]=te.split("@");return oe==null?null:G==="_"?{domain:oe,ident:oe}:{user:G,domain:oe,ident:te}},N=()=>C()?.pubkey===e.pubkey,ne=()=>a(e.pubkey),{followingPubkeys:V,invalidateFollowings:J,query:W}=Vu(()=>ln([u()])(([te])=>({pubkey:te}))),Q=()=>V().includes(e.pubkey),se=()=>W.refetch(),{followingPubkeys:q,query:ee}=Vu(()=>({pubkey:e.pubkey})),he=()=>{const te=u();return te!=null&&q().includes(te)},Y=gi({mutationKey:["updateContacts"],mutationFn:(...te)=>l.updateContacts(...te).then(G=>Promise.allSettled(G.map(xr(5e3)))),onSuccess:te=>{const G=te.filter(z=>z.status==="fulfilled").length,oe=te.length-G;G===te.length?console.log("succeeded to update contacts"):G>0?console.log(`succeeded to update contacts for ${G} relays but failed for ${oe} relays`):console.error("failed to update contacts")},onError:te=>{console.error("failed to update contacts: ",te)},onSettled:()=>{J().then(()=>W.refetch()).catch(te=>console.error("failed to refetch contacts",te))}}),de=async te=>{try{const G=u();if(G==null)return;g(!0),await se(),await LM(3e3);const oe=V();console.debug("current pubkeys",oe),await Y.mutateAsync({relayUrls:n().relayUrls,pubkey:G,content:W.data?.content??"",followingPubkeys:gr(te(oe))})}finally{g(!1)}},pe=()=>{de(te=>[...te,e.pubkey]).catch(te=>{console.log("failed to follow",te)})},we=()=>{window.confirm("本当にフォロー解除しますか？")&&de(te=>te.filter(G=>G!==e.pubkey)).catch(te=>{console.log("failed to unfollow",te)})},Te=[{content:()=>t()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(h()).catch(te=>window.alert(te))}},{content:()=>ne()?t()("profile.unmute"):t()("profile.mute"),onSelect:()=>{ne()?o(e.pubkey):i(e.pubkey)}},{when:()=>e.pubkey===u(),content:()=>Q()?t()("profile.unfollowMyself"):t()("profile.followMyself"),onSelect:()=>{Q()?we():pe()}}],{events:Ve}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:dr()}],continuous:!1}));return y(Ei,{onClose:()=>e.onClose?.(),get children(){return[y(le,{get when(){return I.isFetched},get fallback(){return"loading"},get children(){return[y(le,{get when(){return R()?.banner},get fallback(){return QM()},keyed:!0,children:te=>(()=>{const G=YM(),oe=G.firstChild;return Xe(oe,"src",te),G})()}),(()=>{const te=UM(),G=te.firstChild,oe=G.firstChild,z=G.nextSibling,me=z.firstChild;return S(oe,y(le,{get when(){return R()?.picture},keyed:!0,children:re=>(()=>{const ze=JM();return Xe(ze,"src",re),ze})()})),S(me,y(an,{get children(){return[y(De,{get when(){return e.pubkey===u()},get children(){const re=PM();return re.$$click=()=>d(),S(re,()=>t()("profile.editProfile")),re}}),y(De,{get when(){return Y.isLoading||p()},get children(){const re=ag();return S(re,()=>t()("profile.updating")),re}}),y(De,{get when(){return W.isLoading||W.isFetching},get children(){const re=ag();return S(re,()=>t()("profile.loading")),re}}),y(De,{get when(){return Q()},get children(){const re=MM();return re.$$click=()=>we(),re.addEventListener("mouseleave",()=>x(!1)),re.addEventListener("mouseenter",()=>x(!0)),S(re,y(le,{get when(){return!v()},get fallback(){return t()("profile.unfollow")},get children(){return t()("profile.followingCurrently")}})),Me(()=>re.disabled=Y.isLoading),re}}),y(De,{get when(){return!Q()},get children(){const re=BM();return re.$$click=()=>pe(),S(re,()=>t()("profile.follow")),Me(()=>re.disabled=Y.isLoading),re}})]}}),null),S(me,y(Rm,{menu:Te,get children(){const re=jM();return S(re,y(Am,{})),re}}),null),S(z,y(an,{get children(){return[y(De,{get when(){return ee.isLoading},get children(){const re=lg();return S(re,()=>t()("profile.loading")),re}}),y(De,{get when(){return he()},get children(){const re=lg();return S(re,()=>t()("profile.followsYou")),re}})]}}),null),te})(),(()=>{const te=qM(),G=te.firstChild,oe=G.firstChild,z=oe.nextSibling,me=z.firstChild;return S(G,y(le,{get when(){return(R()?.display_name?.length??0)>0},get children(){const re=NM();return S(re,()=>R()?.display_name),re}}),oe),S(oe,y(le,{get when(){return(R()?.name?.length??0)>0},get children(){const re=DM();return re.firstChild,S(re,()=>R()?.name,null),re}}),null),S(oe,y(le,{get when(){return(R()?.nip05?.length??0)>0},get children(){const re=FM();return S(re,()=>j()?.ident,null),S(re,y(an,{get fallback(){return(()=>{const ze=XM();return S(ze,y(IM,{})),ze})()},get children(){return[y(De,{get when(){return A.isLoading},get children(){const ze=zM();return S(ze,y(CM,{})),ze}}),y(De,{get when(){return N()},get children(){const ze=HM();return S(ze,y(TM,{})),ze}})]}}),null),re}}),null),S(me,h),te})(),y(le,{get when(){return(R()?.about??"").length>0},get children(){const te=WM();return S(te,()=>R()?.about),te}}),(()=>{const te=VM(),G=te.firstChild,oe=G.firstChild,z=oe.nextSibling;return G.$$click=()=>w("Following"),S(z,y(le,{get when(){return ee.isFetched},get fallback(){return eB()},get children(){return q().length}})),S(te,y(le,{get when(){return!n().hideCount},get children(){const me=ZM(),re=me.firstChild,ze=re.nextSibling;return S(ze,y(le,{get when(){return k()},get fallback(){return(()=>{const ft=tB();return ft.$$click=()=>$(!0),ft})()},keyed:!0,get children(){return y(rB,{get pubkey(){return e.pubkey}})}})),me}}),null),te})(),y(le,{get when(){return(R()?.website??"").length>0},get children(){const te=KM();return S(te,y(le,{get when(){return R()?.website},keyed:!0,children:G=>(()=>{const oe=nB(),z=oe.firstChild;return S(z,y(Vd,{})),S(oe,y(Ll,{class:"text-blue-500 underline",href:G}),null),oe})()})),te}})]}}),y(an,{get children(){return y(De,{get when(){return E()==="Following"},get children(){return y(zu,{get data(){return q()},pubkeyExtractor:te=>te,onClose:O})}})}}),(()=>{const te=GM();return S(te,y(xs,{get events(){return Ve()}})),te})()]}})};ot(["click"]);function sB(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var oB=sB,aB=$i,lB=function(){try{var e=aB(Object,"defineProperty");return e({},"",{}),e}catch{}}(),jv=lB,cg=jv;function cB(e,t,n){t=="__proto__"&&cg?cg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Uv=cB,uB=Uv,dB=Xu,fB=Object.prototype,hB=fB.hasOwnProperty;function pB(e,t,n){var i=e[t];(!(hB.call(e,t)&&dB(i,n))||n===void 0&&!(t in e))&&uB(e,t,n)}var Kd=pB,gB=Kd,mB=Uv;function vB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?mB(n,u,d):gB(n,u,d)}return n}var Eo=vB,bB=Eo,yB=Ml;function _B(e,t){return e&&bB(t,yB(t),e)}var wB=_B;function xB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var $B=xB,kB=Zn,EB=zd,CB=$B,SB=Object.prototype,TB=SB.hasOwnProperty;function AB(e){if(!kB(e))return CB(e);var t=EB(e),n=[];for(var i in e)i=="constructor"&&(t||!TB.call(e,i))||n.push(i);return n}var IB=AB,RB=_v,OB=IB,LB=xv;function PB(e){return LB(e)?RB(e,!0):OB(e)}var Gd=PB,MB=Eo,BB=Gd;function jB(e,t){return e&&MB(t,BB(t),e)}var UB=jB,sl={exports:{}};sl.exports;(function(e,t){var n=Ln,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(h,p){if(p)return h.slice();var g=h.length,v=u?u(g):new h.constructor(g);return h.copy(v),v}e.exports=d})(sl,sl.exports);var NB=sl.exports;function DB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var zB=DB,HB=Eo,FB=Pd;function qB(e,t){return HB(e,FB(e),t)}var WB=qB,ZB=wv,VB=ZB(Object.getPrototypeOf,Object),Qd=VB,KB=Ld,GB=Qd,QB=Pd,YB=vv,JB=Object.getOwnPropertySymbols,XB=JB?function(e){for(var t=[];e;)KB(t,QB(e)),e=GB(e);return t}:YB,Nv=XB,ej=Eo,tj=Nv;function nj(e,t){return ej(e,tj(e),t)}var rj=nj,ij=mv,sj=Nv,oj=Gd;function aj(e){return ij(e,oj,sj)}var Yd=aj,lj=Object.prototype,cj=lj.hasOwnProperty;function uj(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&cj.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var dj=uj,ug=gv;function fj(e){var t=new e.constructor(e.byteLength);return new ug(t).set(new ug(e)),t}var Jd=fj,hj=Jd;function pj(e,t){var n=t?hj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var gj=pj,mj=/\w*$/;function vj(e){var t=new e.constructor(e.source,mj.exec(e));return t.lastIndex=e.lastIndex,t}var bj=vj,dg=fs,fg=dg?dg.prototype:void 0,hg=fg?fg.valueOf:void 0;function yj(e){return hg?Object(hg.call(e)):{}}var _j=yj,wj=Jd;function xj(e,t){var n=t?wj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var $j=xj,kj=Jd,Ej=gj,Cj=bj,Sj=_j,Tj=$j,Aj="[object Boolean]",Ij="[object Date]",Rj="[object Map]",Oj="[object Number]",Lj="[object RegExp]",Pj="[object Set]",Mj="[object String]",Bj="[object Symbol]",jj="[object ArrayBuffer]",Uj="[object DataView]",Nj="[object Float32Array]",Dj="[object Float64Array]",zj="[object Int8Array]",Hj="[object Int16Array]",Fj="[object Int32Array]",qj="[object Uint8Array]",Wj="[object Uint8ClampedArray]",Zj="[object Uint16Array]",Vj="[object Uint32Array]";function Kj(e,t,n){var i=e.constructor;switch(t){case jj:return kj(e);case Aj:case Ij:return new i(+e);case Uj:return Ej(e,n);case Nj:case Dj:case zj:case Hj:case Fj:case qj:case Wj:case Zj:case Vj:return Tj(e,n);case Rj:return new i;case Oj:case Mj:return new i(e);case Lj:return Cj(e);case Pj:return new i;case Bj:return Sj(e)}}var Gj=Kj,Qj=Zn,pg=Object.create,Yj=function(){function e(){}return function(t){if(!Qj(t))return{};if(pg)return pg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),Jj=Yj,Xj=Jj,eU=Qd,tU=zd;function nU(e){return typeof e.constructor=="function"&&!tU(e)?Xj(eU(e)):{}}var rU=nU,iU=Bl,sU=Xr,oU="[object Map]";function aU(e){return sU(e)&&iU(e)==oU}var lU=aU,cU=lU,uU=Nd,gg=Dd,mg=gg&&gg.isMap,dU=mg?uU(mg):cU,fU=dU,hU=Bl,pU=Xr,gU="[object Set]";function mU(e){return pU(e)&&hU(e)==gU}var vU=mU,bU=vU,yU=Nd,vg=Dd,bg=vg&&vg.isSet,_U=bg?yU(bg):bU,wU=_U,xU=Od,$U=oB,kU=Kd,EU=wB,CU=UB,SU=NB,TU=zB,AU=WB,IU=rj,RU=$v,OU=Yd,LU=Bl,PU=dj,MU=Gj,BU=rU,jU=Qn,UU=Bd,NU=fU,DU=Zn,zU=wU,HU=Ml,FU=Gd,qU=1,WU=2,ZU=4,Dv="[object Arguments]",VU="[object Array]",KU="[object Boolean]",GU="[object Date]",QU="[object Error]",zv="[object Function]",YU="[object GeneratorFunction]",JU="[object Map]",XU="[object Number]",Hv="[object Object]",eN="[object RegExp]",tN="[object Set]",nN="[object String]",rN="[object Symbol]",iN="[object WeakMap]",sN="[object ArrayBuffer]",oN="[object DataView]",aN="[object Float32Array]",lN="[object Float64Array]",cN="[object Int8Array]",uN="[object Int16Array]",dN="[object Int32Array]",fN="[object Uint8Array]",hN="[object Uint8ClampedArray]",pN="[object Uint16Array]",gN="[object Uint32Array]",tt={};tt[Dv]=tt[VU]=tt[sN]=tt[oN]=tt[KU]=tt[GU]=tt[aN]=tt[lN]=tt[cN]=tt[uN]=tt[dN]=tt[JU]=tt[XU]=tt[Hv]=tt[eN]=tt[tN]=tt[nN]=tt[rN]=tt[fN]=tt[hN]=tt[pN]=tt[gN]=!0;tt[QU]=tt[zv]=tt[iN]=!1;function Ia(e,t,n,i,o,a){var l,u=t&qU,d=t&WU,h=t&ZU;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!DU(e))return e;var p=jU(e);if(p){if(l=PU(e),!u)return TU(e,l)}else{var g=LU(e),v=g==zv||g==YU;if(UU(e))return SU(e,u);if(g==Hv||g==Dv||v&&!o){if(l=d||v?{}:BU(e),!u)return d?IU(e,CU(l,e)):AU(e,EU(l,e))}else{if(!tt[g])return o?e:{};l=MU(e,g,u)}}a||(a=new xU);var x=a.get(e);if(x)return x;a.set(e,l),zU(e)?e.forEach(function(E){l.add(Ia(E,t,n,E,e,a))}):NU(e)&&e.forEach(function(E,w){l.set(w,Ia(E,t,n,w,e,a))});var k=h?d?OU:RU:d?FU:HU,$=p?void 0:k(e);return $U($||e,function(E,w){$&&(w=E,E=e[w]),kU(l,w,Ia(E,t,n,w,e,a))}),l}var mN=Ia;function vN(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var bN=vN;function yN(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var _N=yN,wN=Ul,xN=_N;function $N(e,t){return t.length<2?e:wN(e,xN(t,0,-1))}var kN=$N,EN=Es,CN=bN,SN=kN,TN=Cs;function AN(e,t){return t=EN(t,e),e=SN(e,t),e==null||delete e[TN(CN(t))]}var IN=AN,RN=hs,ON=Qd,LN=Xr,PN="[object Object]",MN=Function.prototype,BN=Object.prototype,Fv=MN.toString,jN=BN.hasOwnProperty,UN=Fv.call(Object);function NN(e){if(!LN(e)||RN(e)!=PN)return!1;var t=ON(e);if(t===null)return!0;var n=jN.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Fv.call(n)==UN}var DN=NN,zN=DN;function HN(e){return zN(e)?void 0:e}var FN=HN,yg=fs,qN=Md,WN=Qn,_g=yg?yg.isConcatSpreadable:void 0;function ZN(e){return WN(e)||qN(e)||!!(_g&&e&&e[_g])}var VN=ZN,KN=Ld,GN=VN;function qv(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=GN),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?qv(u,t-1,n,i,o):KN(o,u):i||(o[o.length]=u)}return o}var QN=qv,YN=QN;function JN(e){var t=e==null?0:e.length;return t?YN(e,1):[]}var XN=JN;function eD(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var tD=eD,nD=tD,wg=Math.max;function rD(e,t,n){return t=wg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=wg(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),nD(e,this,u)}}var iD=rD;function sD(e){return function(){return e}}var oD=sD,aD=oD,xg=jv,lD=Rv,cD=xg?function(e,t){return xg(e,"toString",{configurable:!0,enumerable:!1,value:aD(t),writable:!0})}:lD,uD=cD,dD=800,fD=16,hD=Date.now;function pD(e){var t=0,n=0;return function(){var i=hD(),o=fD-(i-n);if(n=i,o>0){if(++t>=dD)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var gD=pD,mD=uD,vD=gD,bD=vD(mD),yD=bD,_D=XN,wD=iD,xD=yD;function $D(e){return xD(wD(e,void 0,_D),e+"")}var kD=$D,ED=qd,CD=mN,SD=IN,TD=Es,AD=Eo,ID=FN,RD=kD,OD=Yd,LD=1,PD=2,MD=4,BD=RD(function(e,t){var n={};if(e==null)return n;var i=!1;t=ED(t,function(a){return a=TD(a,e),i||(i=a.length>1),a}),AD(e,OD(e),n),i&&(n=CD(n,LD|PD|MD,ID));for(var o=t.length;o--;)SD(n,t[o]);return n}),jD=BD;const UD=go(jD);var ND="Expected a function";function DD(e){if(typeof e!="function")throw new TypeError(ND);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var zD=DD,HD=Kd,FD=Es,qD=jd,$g=Zn,WD=Cs;function ZD(e,t,n,i){if(!$g(e))return e;t=FD(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=WD(t[o]),h=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var p=u[d];h=i?i(p,d,u):void 0,h===void 0&&(h=$g(p)?p:qD(t[o+1])?[]:{})}HD(u,d,h),u=u[d]}return e}var VD=ZD,KD=Ul,GD=VD,QD=Es;function YD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=KD(e,l);n(u,l)&&GD(a,QD(l,e),u)}return a}var JD=YD,XD=qd,ez=Wd,tz=JD,nz=Yd;function rz(e,t){if(e==null)return{};var n=XD(nz(e),function(i){return[i]});return t=ez(t),tz(e,n,function(i,o){return t(i,o[0])})}var iz=rz,sz=Wd,oz=zD,az=iz;function lz(e,t){return az(e,oz(sz(t)))}var cz=lz;const uz=go(cz),dz=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),fz=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),hz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),pz=B('<div class="px-4 pt-4">読み込み中...'),gz=B('<div><span class="font-bold">その他の項目</span><div>'),mz=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),vz=B('<div class="h-24 shrink-0">'),bz=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),yz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",_z="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",wz=new RegExp(`^${yz}$`),Wv=new RegExp(`^${_z}$`),xz=e=>wz.test(e),$z=e=>Wv.test(e),kz=e=>{const t=Gn(),{config:n}=je(),[i,o]=$e(""),[a,l]=$e(""),[u,d]=$e(""),[h,p]=$e(""),[g,v]=$e(""),[x,k]=$e(""),[$,E]=$e(""),[w,O]=$e(""),{profile:R,invalidateProfile:I,query:C}=ki(()=>ln([t()])(([Q])=>({pubkey:Q}))),{updateProfile:A}=Pl(),j=gi({mutationKey:["updateProfile"],mutationFn:(...Q)=>A(...Q).then(se=>Promise.allSettled(se.map(xr(1e4)))),onSuccess:Q=>{const se=Q.filter(ee=>ee.status==="fulfilled").length,q=Q.length-se;se===Q.length?window.alert("更新しました"):se>0?window.alert(`${q}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),I().then(()=>C.refetch()).catch(ee=>console.error(ee)),e.onClose()},onError:Q=>{console.error("failed to delete",Q)}}),N=()=>C.isLoading||j.isLoading,ne=()=>N();setInterval(()=>console.log(C.isLoading,j.isLoading),1e3);const V=()=>UD(R(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),J=Q=>{Q.preventDefault();const se=t();if(se==null)return;const q=uz({picture:i(),banner:a(),name:u(),display_name:h(),about:g(),website:x(),nip05:$(),lud06:xz(w())?w():null,lud16:$z(w())?w():null},ee=>ee==null||ee.length===0);j.mutate({relayUrls:n().relayUrls,pubkey:se,profile:q,otherProperties:V()})},W=Q=>Q.key==="Enter"&&Q.preventDefault();return cn(()=>{const Q=R();Q!=null&&(C.refetch().catch(se=>console.error(se)),Ra(()=>{o(se=>Q.picture??se),l(se=>Q.banner??se),d(se=>Q.name??se),p(se=>Q.display_name??se),v(se=>Q.about??se),k(se=>Q.website??se),E(se=>Q.nip05??se),Q.lud16!=null?O(Q.lud16):Q.lud06!=null&&O(Q.lud06)}))}),y(Ei,{closeButton:()=>y(Ju,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Q=hz(),se=Q.firstChild;return S(Q,y(le,{get when(){return a().length>0},get fallback(){return vz()},keyed:!0,get children(){const q=dz(),ee=q.firstChild;return Me(()=>Xe(ee,"src",a())),q}}),se),S(se,y(le,{get when(){return i().length>0},get children(){const q=fz();return Me(()=>Xe(q,"src",i())),q}})),Q})(),y(le,{get when(){return N()},get children(){return pz()}}),(()=>{const Q=mz(),se=Q.firstChild,q=se.firstChild,ee=q.firstChild,he=ee.nextSibling,Y=q.nextSibling,de=Y.firstChild,pe=de.nextSibling,we=Y.nextSibling,Te=we.firstChild,Ve=Te.nextSibling,te=Ve.firstChild,G=te.nextSibling,oe=we.nextSibling,z=oe.firstChild,me=z.nextSibling,re=oe.nextSibling,ze=re.firstChild,ft=ze.nextSibling,it=re.nextSibling,Le=it.firstChild,Fe=Le.nextSibling,St=it.nextSibling,_n=St.firstChild,ht=_n.nextSibling,Er=St.nextSibling,Ti=Er.firstChild,Mn=Ti.nextSibling,yt=Mn.nextSibling,wn=Er.nextSibling,Bn=wn.firstChild,Ai=Bn.nextSibling;return se.addEventListener("submit",J),he.$$keydown=W,he.addEventListener("blur",xe=>o(xe.currentTarget.value)),pe.$$keydown=W,pe.addEventListener("blur",xe=>l(xe.currentTarget.value)),G.$$keydown=W,G.addEventListener("change",xe=>d(xe.currentTarget.value)),me.$$keydown=W,me.addEventListener("change",xe=>p(xe.currentTarget.value)),ft.addEventListener("change",xe=>v(xe.currentTarget.value)),Fe.$$keydown=W,Fe.addEventListener("change",xe=>k(xe.currentTarget.value)),ht.$$keydown=W,ht.addEventListener("change",xe=>E(xe.currentTarget.value)),yt.$$keydown=W,yt.addEventListener("change",xe=>O(xe.currentTarget.value)),S(se,y(le,{get when(){return Object.entries(V()).length>0},get children(){const xe=gz(),Yn=xe.firstChild,Qt=Yn.nextSibling;return S(Qt,y(Ct,{get each(){return Object.entries(V())},children:([qt,Cr])=>(()=>{const Jn=bz(),Xn=Jn.firstChild,Sr=Xn.nextSibling;return S(Xn,qt),S(Sr,Cr),Jn})()})),xe}}),wn),Ai.$$click=()=>e.onClose(),S(se,y(le,{get when(){return j.isLoading},children:"保存中..."}),null),Me(xe=>{const Yn=ne(),Qt=ne(),qt=ne(),Cr=ne(),Jn=ne(),Xn=ne(),Sr=Wv.source,Ii=ne(),Ri=ne(),Oi=j.isLoading;return Yn!==xe._v$&&(he.disabled=xe._v$=Yn),Qt!==xe._v$2&&(pe.disabled=xe._v$2=Qt),qt!==xe._v$3&&(G.disabled=xe._v$3=qt),Cr!==xe._v$4&&(me.disabled=xe._v$4=Cr),Jn!==xe._v$5&&(ft.disabled=xe._v$5=Jn),Xn!==xe._v$6&&(Fe.disabled=xe._v$6=Xn),Sr!==xe._v$7&&Xe(ht,"pattern",xe._v$7=Sr),Ii!==xe._v$8&&(ht.disabled=xe._v$8=Ii),Ri!==xe._v$9&&(yt.disabled=xe._v$9=Ri),Oi!==xe._v$10&&(Bn.disabled=xe._v$10=Oi),xe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Me(()=>he.value=i()),Me(()=>pe.value=a()),Me(()=>G.value=u()),Me(()=>me.value=h()),Me(()=>ft.value=g()),Me(()=>Fe.value=x()),Me(()=>ht.value=$()),Me(()=>yt.value=w()),Q})()]}})};ot(["keydown","click"]);const Ez=()=>{const e=Gn(),{modalState:t,showProfile:n,closeModal:i}=$r();return y(le,{get when(){return t()},keyed:!0,children:o=>y(an,{get children(){return[y(De,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>y(iB,{pubkey:a,onClose:i})}),y(De,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return y(kz,{onClose:()=>ln([e()])(([a])=>{n(a)})})}}),y(De,{get when(){return o.type==="AddColumn"},get children(){return y(kM,{onClose:i})}}),y(De,{get when(){return o.type==="About"},get children(){return y(xM,{onClose:i})}})]}})})},Cz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),Sz=(e={})=>(()=>{const t=Cz();return Ge(t,e,!0,!0),t})(),Tz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),kg=(e={})=>(()=>{const t=Tz();return Ge(t,e,!0,!0),t})(),Az=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),Iz=(e={})=>(()=>{const t=Az();return Ge(t,e,!0,!0),t})(),Rz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),Oz=(e={})=>(()=>{const t=Rz();return Ge(t,e,!0,!0),t})(),Lz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),Pz=(e={})=>(()=>{const t=Lz();return Ge(t,e,!0,!0),t})(),Mz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),Bz=(e={})=>(()=>{const t=Mz();return Ge(t,e,!0,!0),t})(),Eg=ct.string().length(64).regex(/^[0-9a-f]{64}$/),Ku=ct.string().regex(/^\w+$/),jz=ct.object({shortcode:Ku,url:ct.string().url(),keywords:ct.optional(ct.array(Ku))}),Uz=ct.object({manifest:ct.literal("emojipack_v1"),name:ct.string(),emojis:ct.array(jz),description:ct.optional(ct.string()),author:ct.optional(Eg),publisher:ct.optional(Eg)}).refine(e=>Ov(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Zv=ct.record(Ku,ct.string().url());Uz.or(Zv);const Nz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),Dz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),zz=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Hz=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),Gu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Fz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),qz=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Wz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Zz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),Vz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Kz=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Gz=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Qz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),Yz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Jz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),Xz=B('<div class="p-4">'),eH=B('<h2 class="flex-1 text-center text-lg font-bold">'),tH=B('<ul class="flex flex-col">'),nH=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),rH=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Vv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,iH=Vv("https?"),sH=Vv("wss?"),oH=()=>{const e=vt(),t=Gn(),{showProfile:n,showProfileEdit:i}=$r();return(()=>{const o=Dz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return S(a,()=>e()("config.profile.profile")),u.$$click=()=>ln([t()])(([h])=>{n(h)}),S(u,()=>e()("config.profile.openProfile")),d.$$click=()=>i(),S(d,()=>e()("config.profile.editProfile")),o})()},aH=()=>{const e=vt(),{config:t,addRelay:n,removeRelay:i}=je(),[o,a]=$e(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),h=d.map(([x])=>x).join(`
`);if(d.length===0){window.alert(e()("config.relays.notConfigured"));return}if(!window.confirm(`${e()("config.relays.askImport")}

${h}`))return;const p=t().relayUrls.length;Ra(()=>{d.forEach(([x])=>{n(x)})});const v=t().relayUrls.length-p;window.alert(e()("config.relays.imported",{count:v}))};return[(()=>{const d=zz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.nextSibling,x=v.firstChild,k=x.nextSibling;return S(h,()=>e()("config.relays.relays")),S(p,()=>e()("config.relays.numOfRelays",{count:t().relayUrls.length})),S(g,y(Ct,{get each(){return t().relayUrls},children:$=>(()=>{const E=Gu(),w=E.firstChild,O=w.nextSibling;return S(w,$),O.$$click=()=>i($),S(O,y(us,{})),E})()})),v.addEventListener("submit",l),x.addEventListener("change",$=>a($.currentTarget.value)),Xe(x,"pattern",sH),S(k,()=>e()("config.relays.addRelay")),Me(()=>x.value=o()),d})(),(()=>{const d=Hz(),h=d.firstChild,p=h.nextSibling;return S(h,()=>e()("config.relays.importRelays")),p.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(e()("config.relays.failedToImport"))})},S(p,()=>e()("config.relays.importFromExtension")),d})()]},lH=()=>{const e=vt(),{config:t,setConfig:n}=je(),i=[{id:"relative",name:e()("config.display.relativeTimeNotation"),example:e()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:e()("config.display.absoluteTimeNotationShort"),example:e()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:e()("config.display.absoluteTimeNotationLong"),example:e()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=Fz(),l=a.firstChild,u=l.nextSibling;return S(l,()=>e()("config.display.timeNotation")),S(u,y(Ct,{each:i,children:({id:d,name:h,example:p})=>(()=>{const g=qz(),v=g.firstChild,x=v.nextSibling;return v.$$click=()=>o(d),S(v,h),S(x,p),Me(k=>{const $=t().dateFormat===d,E=t().dateFormat===d,w=t().dateFormat!==d,O=t().dateFormat!==d;return $!==k._v$&&v.classList.toggle("bg-rose-300",k._v$=$),E!==k._v$2&&v.classList.toggle("text-white",k._v$2=E),w!==k._v$3&&v.classList.toggle("bg-white",k._v$3=w),O!==k._v$4&&v.classList.toggle("text-rose-300",k._v$4=O),k},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Gs=e=>(()=>{const t=Wz();return t.$$click=n=>e.onClick(n),Me(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Xe(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),cH=()=>{const e=vt(),{config:t,setConfig:n}=je(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=Zz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,h=d.firstChild,p=d.nextSibling,g=p.firstChild;return S(l,()=>e()("config.display.reaction")),S(h,()=>e()("config.display.enableEmojiReaction")),S(d,y(Gs,{get value(){return t().useEmojiReaction},onClick:()=>i()}),null),S(g,()=>e()("config.display.showEmojiReaction")),S(p,y(Gs,{get value(){return t().showEmojiReaction},onClick:()=>o()}),null),a})()},uH=()=>{const e=vt(),{config:t,saveEmoji:n,removeEmoji:i}=je(),[o,a]=$e(""),[l,u]=$e(""),d=h=>{h.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const h=Vz(),p=h.firstChild,g=p.nextSibling,v=g.nextSibling,x=v.firstChild,k=x.firstChild,$=k.nextSibling,E=x.nextSibling,w=E.firstChild,O=w.nextSibling,R=E.nextSibling;return S(p,()=>e()("config.customEmoji.customEmoji")),S(g,y(Ct,{get each(){return Object.values(t().customEmojis)},children:({shortcode:I,url:C})=>(()=>{const A=Kz(),j=A.firstChild,N=j.nextSibling,ne=N.nextSibling;return Xe(j,"src",C),Xe(j,"alt",I),S(N,I),ne.$$click=()=>i(I),S(ne,y(us,{})),A})()})),v.addEventListener("submit",d),S(k,()=>e()("config.customEmoji.shortcode")),$.addEventListener("change",I=>a(I.currentTarget.value)),S(w,()=>e()("config.customEmoji.url")),O.addEventListener("change",I=>u(I.currentTarget.value)),Xe(O,"pattern",iH),S(R,()=>e()("config.customEmoji.addEmoji")),Me(()=>$.value=o()),Me(()=>O.value=l()),h})()},dH=()=>{const e=vt(),{saveEmojis:t}=je(),[n,i]=$e(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Zv.parse(JSON.parse(n())),u=Nz(l);t(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=Gz(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,h=d.firstChild,p=h.nextSibling;return S(l,()=>e()("config.customEmoji.emojiImport")),S(u,()=>e()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),h.addEventListener("change",g=>i(g.currentTarget.value)),S(p,()=>e()("config.customEmoji.importEmoji")),Me(()=>h.value=n()),a})()},fH=()=>{const e=vt(),{config:t,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=je(),[a,l]=$e(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=Qz(),h=d.firstChild,p=h.nextSibling;return S(h,()=>e()("config.mute.mutedUsers")),S(p,y(Ct,{get each(){return t().mutedPubkeys},children:g=>(()=>{const v=Gu(),x=v.firstChild,k=x.nextSibling;return S(x,y(Il,{pubkey:g})),k.$$click=()=>n(g),S(k,y(us,{})),v})()})),d})(),(()=>{const d=Yz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,x=v.nextSibling;return S(h,()=>e()("config.mute.mutedKeywords")),S(p,y(Ct,{get each(){return t().mutedKeywords},children:k=>(()=>{const $=Gu(),E=$.firstChild,w=E.nextSibling;return S(E,k),w.$$click=()=>o(k),S(w,y(us,{})),$})()})),g.addEventListener("submit",u),v.addEventListener("change",k=>l(k.currentTarget.value)),S(x,()=>e()("config.mute.add")),Me(()=>v.value=a()),d})()]},hH=()=>{const e=vt(),{config:t,setConfig:n}=je(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showImage:!(l.showImage??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=Jz(),u=l.firstChild,d=u.nextSibling,h=d.firstChild,p=h.firstChild,g=h.nextSibling,v=g.firstChild,x=g.nextSibling,k=x.firstChild;return S(u,()=>e()("config.display.others")),S(p,()=>e()("config.display.keepOpenPostForm")),S(h,y(Gs,{get value(){return t().keepOpenPostForm},onClick:()=>i()}),null),S(v,()=>e()("config.display.showImagesByDefault")),S(g,y(Gs,{get value(){return t().showImage},onClick:()=>o()}),null),S(k,()=>e()("config.display.hideNumbers")),S(x,y(Gs,{get value(){return t().hideCount},onClick:()=>a()}),null),l})()},pH=e=>{const t=vt(),[n,i]=$e(null),o=[{name:()=>t()("config.profile.profile"),icon:()=>y(Zd,{}),render:()=>y(oH,{})},{name:()=>t()("config.relays.relays"),icon:()=>y(Bz,{}),render:()=>y(aH,{})},{name:()=>t()("config.display.display"),icon:()=>y(Pz,{}),render:()=>[y(lH,{}),y(cH,{}),y(hH,{})]},{name:()=>t()("config.customEmoji.customEmoji"),icon:()=>y(ov,{}),render:()=>[y(uH,{}),y(dH,{})]},{name:()=>t()("config.mute.mute"),icon:()=>y(Oz,{}),render:()=>y(fH,{})}],a=()=>{const l=n();return l==null?null:o[l]};return y(Ei,{get onClose(){return e.onClose},get children(){const l=Xz();return S(l,y(le,{get when(){return a()},get fallback(){return[(()=>{const u=eH();return S(u,()=>t()("config.config")),u})(),(()=>{const u=tH();return S(u,y(Ct,{each:o,children:(d,h)=>(()=>{const p=nH(),g=p.firstChild,v=g.firstChild;return g.$$click=()=>i(h),S(v,()=>d.icon()),S(g,()=>d.name(),null),p})()})),u})()]},keyed:!0,children:u=>(()=>{const d=rH(),h=d.firstChild,p=h.nextSibling;return h.$$click=()=>i(null),S(h,y(Ju,{})),S(p,()=>u.render()),d})()})),l}})};ot(["click"]);const gH=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),mH=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),vH=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),bH=()=>{let e,t;const{saveColumn:n}=je(),i=ko(),[o,a]=$e(""),l=u=>{u.preventDefault(),n(Ed({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return y(Td,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=mH();return S(u,y(kg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=gH(),d=u.firstChild,h=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?yr(p,d):t=d,S(h,y(kg,{})),Me(()=>d.value=o()),u}})},yH=()=>{let e;const{showAddColumn:t,showAbout:n}=$r(),{config:i}=je(),[o,a]=$e(!1),[l,u]=$e(!1),d=()=>{e?.focus(),e?.click()},h=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return Du(()=>({commandType:"openPostForm",handler:()=>{h(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=vH(),x=v.firstChild,k=x.firstChild,$=k.firstChild,E=k.nextSibling,w=E.nextSibling,O=w.firstChild,R=O.nextSibling,I=R.nextSibling,C=I.firstChild,A=x.nextSibling;return $.$$click=()=>g(),S($,y(Iz,{})),S(k,y(bH,{}),null),O.$$click=()=>t(),S(O,y(Im,{})),R.$$click=()=>u(j=>!j),S(R,y(Sz,{})),I.$$click=()=>n(),S(A,y(av,{textAreaRef:j=>{e=j},onClose:p})),S(v,y(le,{get when(){return l()},get children(){return y(pH,{onClose:()=>u(!1)})}}),null),Me(j=>{const N=Qu("images/rabbit_app_256.png"),ne=!!(o()||i().keepOpenPostForm),V=!(o()||i().keepOpenPostForm);return N!==j._v$&&Xe(C,"src",j._v$=N),ne!==j._v$2&&A.classList.toggle("static",j._v$2=ne),V!==j._v$3&&A.classList.toggle("hidden",j._v$3=V),j},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};ot(["click"]);var _H=Ln,wH=function(){return _H.Date.now()},xH=wH,$H=/\s/;function kH(e){for(var t=e.length;t--&&$H.test(e.charAt(t)););return t}var EH=kH,CH=EH,SH=/^\s+/;function TH(e){return e&&e.slice(0,CH(e)+1).replace(SH,"")}var AH=TH,IH=AH,Cg=Zn,RH=jl,Sg=0/0,OH=/^[-+]0x[0-9a-f]+$/i,LH=/^0b[01]+$/i,PH=/^0o[0-7]+$/i,MH=parseInt;function BH(e){if(typeof e=="number")return e;if(RH(e))return Sg;if(Cg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Cg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=IH(e);var n=LH.test(e);return n||PH.test(e)?MH(e.slice(2),n?2:8):OH.test(e)?Sg:+e}var jH=BH,UH=Zn,vu=xH,Tg=jH,NH="Expected a function",DH=Math.max,zH=Math.min;function HH(e,t,n){var i,o,a,l,u,d,h=0,p=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(NH);t=Tg(t)||0,UH(n)&&(p=!!n.leading,g="maxWait"in n,a=g?DH(Tg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function x(A){var j=i,N=o;return i=o=void 0,h=A,l=e.apply(N,j),l}function k(A){return h=A,u=setTimeout(w,t),p?x(A):l}function $(A){var j=A-d,N=A-h,ne=t-j;return g?zH(ne,a-N):ne}function E(A){var j=A-d,N=A-h;return d===void 0||j>=t||j<0||g&&N>=a}function w(){var A=vu();if(E(A))return O(A);u=setTimeout(w,$(A))}function O(A){return u=void 0,v&&i?x(A):(i=o=void 0,l)}function R(){u!==void 0&&clearTimeout(u),h=0,i=d=o=u=void 0}function I(){return u===void 0?l:O(vu())}function C(){var A=vu(),j=E(A);if(i=arguments,o=this,d=A,j){if(u===void 0)return k(d);if(g)return clearTimeout(u),u=setTimeout(w,t),x(d)}return u===void 0&&(u=setTimeout(w,t)),l}return C.cancel=R,C.flush=I,C}var FH=HH,qH=FH,WH=Zn,ZH="Expected a function";function VH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(ZH);return WH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),qH(e,t,{leading:i,maxWait:t,trailing:o})}var KH=VH;const GH=go(KH),QH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],YH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},JH=({shortcuts:e=QH,onShortcut:t})=>{const n=YH(e);cn(()=>{const i=GH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),br(()=>{window.removeEventListener("keydown",i)})})},XH=()=>{const e=ko();JH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},eF=B('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),oF=()=>{XH();const e=Nx(),{persistStatus:t}=Fx(),n=Al(),{config:i,initializeColumns:o}=je(),a=Gn();return Dn(()=>{i().relayUrls.map(async l=>{try{(await n().ensureRelay(l)).on("notice",d=>{console.error(`NOTICE: ${l}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),Dn(()=>{const l=a();l!=null&&o({pubkey:l})}),cn(()=>{t().loggedIn||e("/hello")}),Dx(l=>{console.error("uncaught error: ",l)}),(()=>{const l=eF();return S(l,y(yH,{}),null),S(l,y(vM,{}),null),S(l,y(Ez,{}),null),l})()};export{oF as default};
//# sourceMappingURL=Home-8d1e2e0e.js.map
