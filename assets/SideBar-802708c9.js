import{v as $0,w as ka,x as r4,y as xp,z as $p,A as i4,B as s4,C as o4,D as Ep,E as a4,G as E0,H as l4,m as is,I as k0,J as Ca,n as mr,o as wr,K as Ds,L as Xa,N as kp,s as rt,t as B,i as C,a as A,S as be,c as Ie,j as c4,k as Dr,l as qe,u as mt,O as u4,M as Ye,P as d4,b as Zn,d as yt,Q as f4,g as yr,e as De,R as h4,T as p4,F as zt,h as We,U as C0,V as g4,W as v4,f as ba}from"./index-a59e6461.js";import{c as Vi,a as zi,b as m4,d as y4,r as Fu}from"./resolveAsset-8fe0e430.js";class b4 extends $0{constructor(e,n){super(),this.client=e,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Cp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return lu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return lu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),ka(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Sp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const n=this.client.getQueryCache().build(this.client,e),i=this.createResult(n,e);return w4(this,i,e)&&(this.currentResult=i,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),i}getCurrentResult(){return this.currentResult}trackResult(e){const n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),e[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...n}={}){return this.fetch({...n,meta:{refetchPage:e}})}fetchOptimistic(e){const n=this.client.defaultQueryOptions(e),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(e){var n;return this.executeFetch({...e,cancelRefetch:(n=e.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let n=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(r4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),xp||this.currentResult.isStale||!$p(this.options.staleTime))return;const n=i4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(xp||this.options.enabled===!1||!$p(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||s4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=e!==i,f=d?e.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=e;let{dataUpdatedAt:m,error:w,errorUpdatedAt:_,fetchStatus:$,status:x}=g,k=!1,I=!1,E;if(n._optimisticResults){const D=this.hasListeners(),K=!D&&Cp(e,n),te=D&&Sp(e,i,n,o);(K||te)&&($=o4(e.options.networkMode)?"fetching":"paused",m||(x="loading")),n._optimisticResults==="isRestoring"&&($="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&x!=="error")E=p.data,m=p.dataUpdatedAt,x=p.status,k=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)E=this.selectResult;else try{this.selectFn=n.select,E=n.select(g.data),E=Ep(a?.data,E,n),this.selectResult=E,this.selectError=null}catch(D){this.selectError=D}else E=g.data;if(typeof n.placeholderData<"u"&&typeof E>"u"&&x==="loading"){let D;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)D=a.data;else if(D=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof D<"u")try{D=n.select(D),this.selectError=null}catch(K){this.selectError=K}typeof D<"u"&&(x="success",E=Ep(a?.data,D,n),I=!0)}this.selectError&&(w=this.selectError,E=this.selectResult,_=Date.now(),x="error");const S=$==="fetching",L=x==="loading",R=x==="error";return{status:x,fetchStatus:$,isLoading:L,isSuccess:x==="success",isError:R,isInitialLoading:L&&S,data:E,dataUpdatedAt:m,error:w,errorUpdatedAt:_,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:S,isRefetching:S&&!L,isLoadingError:R&&g.dataUpdatedAt===0,isPaused:$==="paused",isPlaceholderData:I,isPreviousData:k,isRefetchError:R&&g.dataUpdatedAt!==0,isStale:Hu(e,n),refetch:this.refetch,remove:this.remove}}updateResult(e){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,ka(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options,u=typeof l=="function"?l():l;if(u==="all"||!u&&!this.trackedProps.size)return!0;const d=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(f=>{const p=f;return this.currentResult[p]!==n[p]&&d.has(p)})};e?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const n={};e.type==="success"?n.onSuccess=!e.manual:e.type==="error"&&!a4(e.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(e){E0.batch(()=>{if(e.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(e.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function _4(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Cp(t,e){return _4(t,e)||t.state.dataUpdatedAt>0&&lu(t,e,e.refetchOnMount)}function lu(t,e,n){if(e.enabled!==!1){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Hu(t,e)}return!1}function Sp(t,e,n,i){return n.enabled!==!1&&(t!==e||i.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&Hu(t,n)}function Hu(t,e){return t.isStaleByTime(e.staleTime)}function w4(t,e,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?e.isPlaceholderData:!ka(t.getCurrentResult(),e)}class x4 extends $0{constructor(e,n){super(),this.client=e,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const i=this.options;this.options=this.client.defaultMutationOptions(e),ka(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const n={listeners:!0};e.type==="success"?n.onSuccess=!0:e.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:l4(),n={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(e){E0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function $4(t){return typeof t=="function"}function Tp(t,e,n){if(!$4(t)){const{queryKey:i,...o}=t;return i?{...o,queryKey:i()}:t}return typeof e=="function"?{...n,queryKey:t(),queryFn:e}:{...e,queryKey:t()}}function S0(t,e){return typeof t=="function"?t(...e):!!t}function E4(t,e){const n=is({context:t.context}),i=Symbol("empty"),o=n.defaultQueryOptions(t);o._optimisticResults="optimistic";const a=new e(n,o),[l,u]=Vi(a.getOptimisticResult(o)),[d,{refetch:f,mutate:p}]=k0(()=>new Promise(_=>{l.isFetching&&l.isLoading||(zi(l.data)===i&&_(void 0),_(zi(l.data)))}));Ca(()=>{p(()=>zi(l.data)),f()});let g=[];const m=a.subscribe(_=>{g.push(()=>{Ca(()=>{const $={...zi(_)};$.data===void 0&&($.data=i),u(zi($)),p(()=>zi(_.data)),f()})}),queueMicrotask(()=>{const $=g.pop();$&&$(),g=[]})});mr(()=>m()),wr(()=>{a.setOptions(o,{listeners:!1})}),Ds(()=>{const _=n.defaultQueryOptions(t);a.setOptions(_)}),Ds(Xa(()=>l.status,()=>{if(l.isError&&!l.isFetching&&S0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const w={get(_,$){return $==="data"?d():Reflect.get(_,$)}};return new Proxy(l,w)}function ss(t,e,n){const[i,o]=Vi(Tp(t,e,n));return Ds(()=>{const a=Tp(t,e,n);o(a)}),E4(i,b4)}function hi(t,e,n){const[i,o]=Vi(kp(t,e,n)),a=is({context:i.context}),l=new x4(a,i),u=(g,m)=>{l.mutate(g,m).catch(k4)},[d,f]=Vi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Ds(()=>{const g=kp(t,e,n);o(g),l.setOptions(g)}),Ds(Xa(()=>d.status,()=>{if(d.isError&&S0(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return mr(p),d}function k4(){}const C4=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),T0=(t={})=>(()=>{const e=C4();return rt(e,t,!0,!0),e})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function el(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function S4(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),n}var T4=typeof xt=="object"&&xt&&xt.Object===Object&&xt,A0=T4,A4=A0,I4=typeof self=="object"&&self&&self.Object===Object&&self,R4=A4||I4||Function("return this")(),Jn=R4,O4=Jn,L4=O4.Symbol,os=L4,Ap=os,I0=Object.prototype,P4=I0.hasOwnProperty,M4=I0.toString,Ms=Ap?Ap.toStringTag:void 0;function B4(t){var e=P4.call(t,Ms),n=t[Ms];try{t[Ms]=void 0;var i=!0}catch{}var o=M4.call(t);return i&&(e?t[Ms]=n:delete t[Ms]),o}var j4=B4,N4=Object.prototype,D4=N4.toString;function U4(t){return D4.call(t)}var z4=U4,Ip=os,F4=j4,H4=z4,W4="[object Null]",q4="[object Undefined]",Rp=Ip?Ip.toStringTag:void 0;function Z4(t){return t==null?t===void 0?q4:W4:Rp&&Rp in Object(t)?F4(t):H4(t)}var as=Z4;function K4(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var wi=K4,V4=as,G4=wi,Q4="[object AsyncFunction]",J4="[object Function]",Y4="[object GeneratorFunction]",X4="[object Proxy]";function e5(t){if(!G4(t))return!1;var e=V4(t);return e==J4||e==Y4||e==Q4||e==X4}var R0=e5,t5=Jn,n5=t5["__core-js_shared__"],r5=n5,Hc=r5,Op=function(){var t=/[^.]+$/.exec(Hc&&Hc.keys&&Hc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function i5(t){return!!Op&&Op in t}var s5=i5,o5=Function.prototype,a5=o5.toString;function l5(t){if(t!=null){try{return a5.call(t)}catch{}try{return t+""}catch{}}return""}var O0=l5,c5=R0,u5=s5,d5=wi,f5=O0,h5=/[\\^$.*+?()[\]{}|]/g,p5=/^\[object .+?Constructor\]$/,g5=Function.prototype,v5=Object.prototype,m5=g5.toString,y5=v5.hasOwnProperty,b5=RegExp("^"+m5.call(y5).replace(h5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _5(t){if(!d5(t)||u5(t))return!1;var e=c5(t)?b5:p5;return e.test(f5(t))}var w5=_5;function x5(t,e){return t?.[e]}var $5=x5,E5=w5,k5=$5;function C5(t,e){var n=k5(t,e);return E5(n)?n:void 0}var xi=C5,S5=xi,T5=S5(Object,"create"),tl=T5,Lp=tl;function A5(){this.__data__=Lp?Lp(null):{},this.size=0}var I5=A5;function R5(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var O5=R5,L5=tl,P5="__lodash_hash_undefined__",M5=Object.prototype,B5=M5.hasOwnProperty;function j5(t){var e=this.__data__;if(L5){var n=e[t];return n===P5?void 0:n}return B5.call(e,t)?e[t]:void 0}var N5=j5,D5=tl,U5=Object.prototype,z5=U5.hasOwnProperty;function F5(t){var e=this.__data__;return D5?e[t]!==void 0:z5.call(e,t)}var H5=F5,W5=tl,q5="__lodash_hash_undefined__";function Z5(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=W5&&e===void 0?q5:e,this}var K5=Z5,V5=I5,G5=O5,Q5=N5,J5=H5,Y5=K5;function ls(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ls.prototype.clear=V5;ls.prototype.delete=G5;ls.prototype.get=Q5;ls.prototype.has=J5;ls.prototype.set=Y5;var X5=ls;function e$(){this.__data__=[],this.size=0}var t$=e$;function n$(t,e){return t===e||t!==t&&e!==e}var Wu=n$,r$=Wu;function i$(t,e){for(var n=t.length;n--;)if(r$(t[n][0],e))return n;return-1}var nl=i$,s$=nl,o$=Array.prototype,a$=o$.splice;function l$(t){var e=this.__data__,n=s$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():a$.call(e,n,1),--this.size,!0}var c$=l$,u$=nl;function d$(t){var e=this.__data__,n=u$(e,t);return n<0?void 0:e[n][1]}var f$=d$,h$=nl;function p$(t){return h$(this.__data__,t)>-1}var g$=p$,v$=nl;function m$(t,e){var n=this.__data__,i=v$(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}var y$=m$,b$=t$,_$=c$,w$=f$,x$=g$,$$=y$;function cs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}cs.prototype.clear=b$;cs.prototype.delete=_$;cs.prototype.get=w$;cs.prototype.has=x$;cs.prototype.set=$$;var rl=cs,E$=xi,k$=Jn,C$=E$(k$,"Map"),qu=C$,Pp=X5,S$=rl,T$=qu;function A$(){this.size=0,this.__data__={hash:new Pp,map:new(T$||S$),string:new Pp}}var I$=A$;function R$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var O$=R$,L$=O$;function P$(t,e){var n=t.__data__;return L$(e)?n[typeof e=="string"?"string":"hash"]:n.map}var il=P$,M$=il;function B$(t){var e=M$(this,t).delete(t);return this.size-=e?1:0,e}var j$=B$,N$=il;function D$(t){return N$(this,t).get(t)}var U$=D$,z$=il;function F$(t){return z$(this,t).has(t)}var H$=F$,W$=il;function q$(t,e){var n=W$(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}var Z$=q$,K$=I$,V$=j$,G$=U$,Q$=H$,J$=Z$;function us(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}us.prototype.clear=K$;us.prototype.delete=V$;us.prototype.get=G$;us.prototype.has=Q$;us.prototype.set=J$;var Zu=us,Y$="__lodash_hash_undefined__";function X$(t){return this.__data__.set(t,Y$),this}var e6=X$;function t6(t){return this.__data__.has(t)}var n6=t6,r6=Zu,i6=e6,s6=n6;function Sa(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new r6;++e<n;)this.add(t[e])}Sa.prototype.add=Sa.prototype.push=i6;Sa.prototype.has=s6;var L0=Sa;function o6(t,e,n,i){for(var o=t.length,a=n+(i?1:-1);i?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var a6=o6;function l6(t){return t!==t}var c6=l6;function u6(t,e,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===e)return i;return-1}var d6=u6,f6=a6,h6=c6,p6=d6;function g6(t,e,n){return e===e?p6(t,e,n):f6(t,h6,n)}var v6=g6,m6=v6;function y6(t,e){var n=t==null?0:t.length;return!!n&&m6(t,e,0)>-1}var b6=y6;function _6(t,e,n){for(var i=-1,o=t==null?0:t.length;++i<o;)if(n(e,t[i]))return!0;return!1}var w6=_6;function x6(t,e){return t.has(e)}var P0=x6,$6=xi,E6=Jn,k6=$6(E6,"Set"),M0=k6;function C6(){}var S6=C6;function T6(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var Ku=T6,Wc=M0,A6=S6,I6=Ku,R6=1/0,O6=Wc&&1/I6(new Wc([,-0]))[1]==R6?function(t){return new Wc(t)}:A6,L6=O6,P6=L0,M6=b6,B6=w6,j6=P0,N6=L6,D6=Ku,U6=200;function z6(t,e,n){var i=-1,o=M6,a=t.length,l=!0,u=[],d=u;if(n)l=!1,o=B6;else if(a>=U6){var f=e?null:N6(t);if(f)return D6(f);l=!1,o=j6,d=new P6}else d=e?[]:u;e:for(;++i<a;){var p=t[i],g=e?e(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var m=d.length;m--;)if(d[m]===g)continue e;e&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var B0=z6,F6=B0;function H6(t){return t&&t.length?F6(t):[]}var W6=H6;const pi=el(W6),q6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),Z6=t=>(()=>{const e=q6();return C(e,()=>t.children),e})();function cu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function K6(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function li(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function V6(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");cu(t.outputLen),cu(t.blockLen)}function G6(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Q6(t,e){li(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const cn={number:cu,bool:K6,bytes:li,hash:V6,exists:G6,output:Q6},qc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Vu=t=>t instanceof Uint8Array,gi=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Hn=(t,e)=>t<<32-e|t>>>e,J6=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!J6)throw new Error("Non little-endian hardware is not supported");const Y6=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ln(t){if(!Vu(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=Y6[t[n]];return e}function Gi(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function j0(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Us(t){if(typeof t=="string"&&(t=j0(t)),!Vu(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function qi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!Vu(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}class N0{clone(){return this._cloneInto()}}const X6=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function e8(t,e){if(e!==void 0&&(typeof e!="object"||!X6(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function $i(t){const e=i=>t().update(Us(i)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function io(t=32){if(qc&&typeof qc.getRandomValues=="function")return qc.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}function t8(t,e,n,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;t.setUint32(e+d,l,i),t.setUint32(e+f,u,i)}class Gu extends N0{constructor(e,n,i,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=gi(this.buffer)}update(e){cn.exists(this);const{view:n,buffer:i,blockLen:o}=this;e=Us(e);const a=e.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=gi(e);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(e.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){cn.exists(this),cn.output(e,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;t8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return e.length=o,e.pos=u,e.finished=a,e.destroyed=l,o%n&&e.buffer.set(i),e}}const n8=(t,e,n)=>t&e^~t&n,r8=(t,e,n)=>t&e^t&n^e&n,i8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Lr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Pr=new Uint32Array(64);class D0 extends Gu{constructor(){super(64,32,8,!1),this.A=Lr[0]|0,this.B=Lr[1]|0,this.C=Lr[2]|0,this.D=Lr[3]|0,this.E=Lr[4]|0,this.F=Lr[5]|0,this.G=Lr[6]|0,this.H=Lr[7]|0}get(){const{A:e,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[e,n,i,o,a,l,u,d]}set(e,n,i,o,a,l,u,d){this.A=e|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(e,n){for(let g=0;g<16;g++,n+=4)Pr[g]=e.getUint32(n,!1);for(let g=16;g<64;g++){const m=Pr[g-15],w=Pr[g-2],_=Hn(m,7)^Hn(m,18)^m>>>3,$=Hn(w,17)^Hn(w,19)^w>>>10;Pr[g]=$+Pr[g-7]+_+Pr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:p}=this;for(let g=0;g<64;g++){const m=Hn(u,6)^Hn(u,11)^Hn(u,25),w=p+m+n8(u,d,f)+i8[g]+Pr[g]|0,$=(Hn(i,2)^Hn(i,13)^Hn(i,22))+r8(i,o,a)|0;p=f,f=d,d=u,u=l+w|0,l=a,a=o,o=i,i=w+$|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,f,p)}roundClean(){Pr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class s8 extends D0{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Vn=$i(()=>new D0);$i(()=>new s8);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const U0=BigInt(0),sl=BigInt(1),o8=BigInt(2),ol=t=>t instanceof Uint8Array,a8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Qi(t){if(!ol(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=a8[t[n]];return e}function z0(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function Qu(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function Ji(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Jt(t){return Qu(Qi(t))}function Ju(t){if(!ol(t))throw new Error("Uint8Array expected");return Qu(Qi(Uint8Array.from(t).reverse()))}function Ur(t,e){return Ji(t.toString(16).padStart(e*2,"0"))}function F0(t,e){return Ur(t,e).reverse()}function l8(t){return Ji(z0(t))}function Ot(t,e,n){let i;if(typeof e=="string")try{i=Ji(e)}catch(a){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${a}`)}else if(ol(e))i=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${t} expected ${n} bytes, got ${o}`);return i}function mi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!ol(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}function c8(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function u8(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function d8(t){let e;for(e=0;t>U0;t>>=sl,e+=1);return e}function f8(t,e){return t>>BigInt(e)&sl}const h8=(t,e,n)=>t|(n?sl:U0)<<BigInt(e),Yu=t=>(o8<<BigInt(t-1))-sl,Zc=t=>new Uint8Array(t),Mp=t=>Uint8Array.from(t);function H0(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Zc(t),o=Zc(t),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Zc())=>{o=u(Mp([0]),g),i=u(),g.length!==0&&(o=u(Mp([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const m=[];for(;g<e;){i=u();const w=i.slice();m.push(w),g+=i.length}return mi(...m)};return(g,m)=>{l(),d(g);let w;for(;!(w=m(f()));)d();return l(),w}}const p8={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function so(t,e,n={}){const i=(o,a,l)=>{const u=p8[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=t[o];if(!(l&&d===void 0)&&!u(d,t))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(e))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return t}const g8=Object.freeze(Object.defineProperty({__proto__:null,bitGet:f8,bitLen:d8,bitMask:Yu,bitSet:h8,bytesToHex:Qi,bytesToNumberBE:Jt,bytesToNumberLE:Ju,concatBytes:mi,createHmacDrbg:H0,ensureBytes:Ot,equalBytes:c8,hexToBytes:Ji,hexToNumber:Qu,numberToBytesBE:Ur,numberToBytesLE:F0,numberToHexUnpadded:z0,numberToVarBytesBE:l8,utf8ToBytes:u8,validateObject:so},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),ht=BigInt(1),ci=BigInt(2),v8=BigInt(3),uu=BigInt(4),Bp=BigInt(5),jp=BigInt(8);BigInt(9);BigInt(16);function Et(t,e){const n=t%e;return n>=kt?n:e+n}function m8(t,e,n){if(n<=kt||e<kt)throw new Error("Expected power/modulo > 0");if(n===ht)return kt;let i=ht;for(;e>kt;)e&ht&&(i=i*t%n),t=t*t%n,e>>=ht;return i}function _n(t,e,n){let i=t;for(;e-- >kt;)i*=i,i%=n;return i}function du(t,e){if(t===kt||e<=kt)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=Et(t,e),i=e,o=kt,a=ht;for(;n!==kt;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==ht)throw new Error("invert: does not exist");return Et(o,e)}function y8(t){const e=(t-ht)/ci;let n,i,o;for(n=t-ht,i=0;n%ci===kt;n/=ci,i++);for(o=ci;o<t&&m8(o,e,t)!==t-ht;o++);if(i===1){const l=(t+ht)/uu;return function(d,f){const p=d.pow(f,l);if(!d.eql(d.sqr(p),f))throw new Error("Cannot find square root");return p}}const a=(n+ht)/ci;return function(u,d){if(u.pow(d,e)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),m=u.pow(d,n);for(;!u.eql(m,u.ONE);){if(u.eql(m,u.ZERO))return u.ZERO;let w=1;for(let $=u.sqr(m);w<f&&!u.eql($,u.ONE);w++)$=u.sqr($);const _=u.pow(p,ht<<BigInt(f-w-1));p=u.sqr(_),g=u.mul(g,_),m=u.mul(m,p),f=w}return g}}function b8(t){if(t%uu===v8){const e=(t+ht)/uu;return function(i,o){const a=i.pow(o,e);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(t%jp===Bp){const e=(t-Bp)/jp;return function(i,o){const a=i.mul(o,ci),l=i.pow(a,e),u=i.mul(o,l),d=i.mul(i.mul(u,ci),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return y8(t)}const _8=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function w8(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=_8.reduce((i,o)=>(i[o]="function",i),e);return so(t,n)}function x8(t,e,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return t.ONE;if(n===ht)return e;let i=t.ONE,o=e;for(;n>kt;)n&ht&&(i=t.mul(i,o)),o=t.sqr(o),n>>=ht;return i}function $8(t,e){const n=new Array(e.length),i=e.reduce((a,l,u)=>t.is0(l)?a:(n[u]=a,t.mul(a,l)),t.ONE),o=t.inv(i);return e.reduceRight((a,l,u)=>t.is0(l)?a:(n[u]=t.mul(a,n[u]),t.mul(a,l)),o),n}function Xu(t,e){const n=e!==void 0?e:t.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function E8(t,e,n=!1,i={}){if(t<=kt)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:o,nByteLength:a}=Xu(t,e);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=b8(t),u=Object.freeze({ORDER:t,BITS:o,BYTES:a,MASK:Yu(o),ZERO:kt,ONE:ht,create:d=>Et(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<t},is0:d=>d===kt,isOdd:d=>(d&ht)===ht,neg:d=>Et(-d,t),eql:(d,f)=>d===f,sqr:d=>Et(d*d,t),add:(d,f)=>Et(d+f,t),sub:(d,f)=>Et(d-f,t),mul:(d,f)=>Et(d*f,t),pow:(d,f)=>x8(u,d,f),div:(d,f)=>Et(d*du(f,t),t),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>du(d,t),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>$8(u,d),cmov:(d,f,p)=>p?f:d,toBytes:d=>n?F0(d,a):Ur(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?Ju(d):Jt(d)}});return Object.freeze(u)}function k8(t,e,n=!1){t=Ot("privateHash",t);const i=t.length,o=Xu(e).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?Ju(t):Jt(t);return Et(a,e-ht)+ht}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const C8=BigInt(0),Kc=BigInt(1);function S8(t,e){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(e/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=t.ZERO,u=o;for(;a>C8;)a&Kc&&(l=l.add(u)),u=u.double(),a>>=Kc;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,p=f;for(let g=0;g<l;g++){p=f,d.push(p);for(let m=1;m<u;m++)p=p.add(f),d.push(p);f=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=t.ZERO,p=t.BASE;const g=BigInt(2**o-1),m=2**o,w=BigInt(o);for(let _=0;_<u;_++){const $=_*d;let x=Number(l&g);l>>=w,x>d&&(x-=m,l+=Kc);const k=$,I=$+Math.abs(x)-1,E=_%2!==0,S=x<0;x===0?p=p.add(n(E,a[k])):f=f.add(n(S,a[I]))}return{p:f,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function W0(t){return w8(t.Fp),so(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Xu(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function T8(t){const e=W0(t);so(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=e;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:A8,hexToBytes:I8}=g8,di={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=di;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],i=t.subarray(2,n+2);if(!n||i.length!==n)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:A8(i),l:t.subarray(n+2)}},toSig(t){const{Err:e}=di,n=typeof t=="string"?I8(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==i-2)throw new e("Invalid signature: incorrect length");const{d:o,l:a}=di._parseInt(n.subarray(2)),{d:l,l:u}=di._parseInt(a);if(u.length)throw new e("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(t){const e=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const p=f.toString(16);return p.length&1?`0${p}`:p},i=e(n(t.s)),o=e(n(t.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},pr=BigInt(0),wn=BigInt(1);BigInt(2);const Np=BigInt(3);BigInt(4);function R8(t){const e=T8(t),{Fp:n}=e,i=e.toBytes||((_,$,x)=>{const k=$.toAffine();return mi(Uint8Array.from([4]),n.toBytes(k.x),n.toBytes(k.y))}),o=e.fromBytes||(_=>{const $=_.subarray(1),x=n.fromBytes($.subarray(0,n.BYTES)),k=n.fromBytes($.subarray(n.BYTES,2*n.BYTES));return{x,y:k}});function a(_){const{a:$,b:x}=e,k=n.sqr(_),I=n.mul(k,_);return n.add(n.add(I,n.mul(_,$)),x)}if(!n.eql(n.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function l(_){return typeof _=="bigint"&&pr<_&&_<e.n}function u(_){if(!l(_))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(_){const{allowedPrivateKeyLengths:$,nByteLength:x,wrapPrivateKey:k,n:I}=e;if($&&typeof _!="bigint"){if(_ instanceof Uint8Array&&(_=Qi(_)),typeof _!="string"||!$.includes(_.length))throw new Error("Invalid key");_=_.padStart(x*2,"0")}let E;try{E=typeof _=="bigint"?_:Jt(Ot("private key",_,x))}catch{throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof _}`)}return k&&(E=Et(E,I)),u(E),E}const f=new Map;function p(_){if(!(_ instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor($,x,k){if(this.px=$,this.py=x,this.pz=k,$==null||!n.isValid($))throw new Error("x required");if(x==null||!n.isValid(x))throw new Error("y required");if(k==null||!n.isValid(k))throw new Error("z required")}static fromAffine($){const{x,y:k}=$||{};if(!$||!n.isValid(x)||!n.isValid(k))throw new Error("invalid affine point");if($ instanceof g)throw new Error("projective point not allowed");const I=E=>n.eql(E,n.ZERO);return I(x)&&I(k)?g.ZERO:new g(x,k,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ($){const x=n.invertBatch($.map(k=>k.pz));return $.map((k,I)=>k.toAffine(x[I])).map(g.fromAffine)}static fromHex($){const x=g.fromAffine(o(Ot("pointHex",$)));return x.assertValidity(),x}static fromPrivateKey($){return g.BASE.multiply(d($))}_setWindowSize($){this._WINDOW_SIZE=$,f.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:$,y:x}=this.toAffine();if(!n.isValid($)||!n.isValid(x))throw new Error("bad point: x or y not FE");const k=n.sqr(x),I=a($);if(!n.eql(k,I))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:$}=this.toAffine();if(n.isOdd)return!n.isOdd($);throw new Error("Field doesn't support isOdd")}equals($){p($);const{px:x,py:k,pz:I}=this,{px:E,py:S,pz:L}=$,R=n.eql(n.mul(x,L),n.mul(E,I)),N=n.eql(n.mul(k,L),n.mul(S,I));return R&&N}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:$,b:x}=e,k=n.mul(x,Np),{px:I,py:E,pz:S}=this;let L=n.ZERO,R=n.ZERO,N=n.ZERO,D=n.mul(I,I),K=n.mul(E,E),te=n.mul(S,S),ae=n.mul(I,E);return ae=n.add(ae,ae),N=n.mul(I,S),N=n.add(N,N),L=n.mul($,N),R=n.mul(k,te),R=n.add(L,R),L=n.sub(K,R),R=n.add(K,R),R=n.mul(L,R),L=n.mul(ae,L),N=n.mul(k,N),te=n.mul($,te),ae=n.sub(D,te),ae=n.mul($,ae),ae=n.add(ae,N),N=n.add(D,D),D=n.add(N,D),D=n.add(D,te),D=n.mul(D,ae),R=n.add(R,D),te=n.mul(E,S),te=n.add(te,te),D=n.mul(te,ae),L=n.sub(L,D),N=n.mul(te,K),N=n.add(N,N),N=n.add(N,N),new g(L,R,N)}add($){p($);const{px:x,py:k,pz:I}=this,{px:E,py:S,pz:L}=$;let R=n.ZERO,N=n.ZERO,D=n.ZERO;const K=e.a,te=n.mul(e.b,Np);let ae=n.mul(x,E),ie=n.mul(k,S),se=n.mul(I,L),X=n.add(x,k),j=n.add(E,S);X=n.mul(X,j),j=n.add(ae,ie),X=n.sub(X,j),j=n.add(x,I);let q=n.add(E,L);return j=n.mul(j,q),q=n.add(ae,se),j=n.sub(j,q),q=n.add(k,I),R=n.add(S,L),q=n.mul(q,R),R=n.add(ie,se),q=n.sub(q,R),D=n.mul(K,j),R=n.mul(te,se),D=n.add(R,D),R=n.sub(ie,D),D=n.add(ie,D),N=n.mul(R,D),ie=n.add(ae,ae),ie=n.add(ie,ae),se=n.mul(K,se),j=n.mul(te,j),ie=n.add(ie,se),se=n.sub(ae,se),se=n.mul(K,se),j=n.add(j,se),ae=n.mul(ie,j),N=n.add(N,ae),ae=n.mul(q,j),R=n.mul(X,R),R=n.sub(R,ae),ae=n.mul(X,ie),D=n.mul(q,D),D=n.add(D,ae),new g(R,N,D)}subtract($){return this.add($.negate())}is0(){return this.equals(g.ZERO)}wNAF($){return w.wNAFCached(this,f,$,x=>{const k=n.invertBatch(x.map(I=>I.pz));return x.map((I,E)=>I.toAffine(k[E])).map(g.fromAffine)})}multiplyUnsafe($){const x=g.ZERO;if($===pr)return x;if(u($),$===wn)return this;const{endo:k}=e;if(!k)return w.unsafeLadder(this,$);let{k1neg:I,k1:E,k2neg:S,k2:L}=k.splitScalar($),R=x,N=x,D=this;for(;E>pr||L>pr;)E&wn&&(R=R.add(D)),L&wn&&(N=N.add(D)),D=D.double(),E>>=wn,L>>=wn;return I&&(R=R.negate()),S&&(N=N.negate()),N=new g(n.mul(N.px,k.beta),N.py,N.pz),R.add(N)}multiply($){u($);let x=$,k,I;const{endo:E}=e;if(E){const{k1neg:S,k1:L,k2neg:R,k2:N}=E.splitScalar(x);let{p:D,f:K}=this.wNAF(L),{p:te,f:ae}=this.wNAF(N);D=w.constTimeNegate(S,D),te=w.constTimeNegate(R,te),te=new g(n.mul(te.px,E.beta),te.py,te.pz),k=D.add(te),I=K.add(ae)}else{const{p:S,f:L}=this.wNAF(x);k=S,I=L}return g.normalizeZ([k,I])[0]}multiplyAndAddUnsafe($,x,k){const I=g.BASE,E=(L,R)=>R===pr||R===wn||!L.equals(I)?L.multiplyUnsafe(R):L.multiply(R),S=E(this,x).add(E($,k));return S.is0()?void 0:S}toAffine($){const{px:x,py:k,pz:I}=this,E=this.is0();$==null&&($=E?n.ONE:n.inv(I));const S=n.mul(x,$),L=n.mul(k,$),R=n.mul(I,$);if(E)return{x:n.ZERO,y:n.ZERO};if(!n.eql(R,n.ONE))throw new Error("invZ was invalid");return{x:S,y:L}}isTorsionFree(){const{h:$,isTorsionFree:x}=e;if($===wn)return!0;if(x)return x(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:$,clearCofactor:x}=e;return $===wn?this:x?x(g,this):this.multiplyUnsafe(e.h)}toRawBytes($=!0){return this.assertValidity(),i(g,this,$)}toHex($=!0){return Qi(this.toRawBytes($))}}g.BASE=new g(e.Gx,e.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const m=e.nBitLength,w=S8(g,e.endo?Math.ceil(m/2):m);return{CURVE:e,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function O8(t){const e=W0(t);return so(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function L8(t){const e=O8(t),{Fp:n,n:i}=e,o=n.BYTES+1,a=2*n.BYTES+1;function l(j){return pr<j&&j<n.ORDER}function u(j){return Et(j,i)}function d(j){return du(j,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:m}=R8({...e,toBytes(j,q,ee){const le=q.toAffine(),Y=n.toBytes(le.x),ve=mi;return ee?ve(Uint8Array.from([q.hasEvenY()?2:3]),Y):ve(Uint8Array.from([4]),Y,n.toBytes(le.y))},fromBytes(j){const q=j.length,ee=j[0],le=j.subarray(1);if(q===o&&(ee===2||ee===3)){const Y=Jt(le);if(!l(Y))throw new Error("Point is not on curve");const ve=g(Y);let ye=n.sqrt(ve);const ne=(ye&wn)===wn;return(ee&1)===1!==ne&&(ye=n.neg(ye)),{x:Y,y:ye}}else if(q===a&&ee===4){const Y=n.fromBytes(le.subarray(0,n.BYTES)),ve=n.fromBytes(le.subarray(n.BYTES,2*n.BYTES));return{x:Y,y:ve}}else throw new Error(`Point of length ${q} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),w=j=>Qi(Ur(j,e.nByteLength));function _(j){const q=i>>wn;return j>q}function $(j){return _(j)?u(-j):j}const x=(j,q,ee)=>Jt(j.slice(q,ee));class k{constructor(q,ee,le){this.r=q,this.s=ee,this.recovery=le,this.assertValidity()}static fromCompact(q){const ee=e.nByteLength;return q=Ot("compactSignature",q,ee*2),new k(x(q,0,ee),x(q,ee,2*ee))}static fromDER(q){const{r:ee,s:le}=di.toSig(Ot("DER",q));return new k(ee,le)}assertValidity(){if(!m(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!m(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(q){return new k(this.r,this.s,q)}recoverPublicKey(q){const{r:ee,s:le,recovery:Y}=this,ve=N(Ot("msgHash",q));if(Y==null||![0,1,2,3].includes(Y))throw new Error("recovery id invalid");const ye=Y===2||Y===3?ee+e.n:ee;if(ye>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const ne=Y&1?"03":"02",V=f.fromHex(ne+w(ye)),ue=d(ye),de=u(-ve*ue),F=u(le*ue),oe=f.BASE.multiplyAndAddUnsafe(V,de,F);if(!oe)throw new Error("point at infinify");return oe.assertValidity(),oe}hasHighS(){return _(this.s)}normalizeS(){return this.hasHighS()?new k(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Ji(this.toDERHex())}toDERHex(){return di.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Ji(this.toCompactHex())}toCompactHex(){return w(this.r)+w(this.s)}}const I={isValidPrivateKey(j){try{return p(j),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const j=e.randomBytes(n.BYTES+8),q=k8(j,i);return Ur(q,e.nByteLength)},precompute(j=8,q=f.BASE){return q._setWindowSize(j),q.multiply(BigInt(3)),q}};function E(j,q=!0){return f.fromPrivateKey(j).toRawBytes(q)}function S(j){const q=j instanceof Uint8Array,ee=typeof j=="string",le=(q||ee)&&j.length;return q?le===o||le===a:ee?le===2*o||le===2*a:j instanceof f}function L(j,q,ee=!0){if(S(j))throw new Error("first arg must be private key");if(!S(q))throw new Error("second arg must be public key");return f.fromHex(q).multiply(p(j)).toRawBytes(ee)}const R=e.bits2int||function(j){const q=Jt(j),ee=j.length*8-e.nBitLength;return ee>0?q>>BigInt(ee):q},N=e.bits2int_modN||function(j){return u(R(j))},D=Yu(e.nBitLength);function K(j){if(typeof j!="bigint")throw new Error("bigint expected");if(!(pr<=j&&j<D))throw new Error(`bigint expected < 2^${e.nBitLength}`);return Ur(j,e.nByteLength)}function te(j,q,ee=ae){if(["recovered","canonical"].some(_e=>_e in ee))throw new Error("sign() legacy options not supported");const{hash:le,randomBytes:Y}=e;let{lowS:ve,prehash:ye,extraEntropy:ne}=ee;ve==null&&(ve=!0),j=Ot("msgHash",j),ye&&(j=Ot("prehashed msgHash",le(j)));const V=N(j),ue=p(q),de=[K(ue),K(V)];if(ne!=null){const _e=ne===!0?Y(n.BYTES):ne;de.push(Ot("extraEntropy",_e,n.BYTES))}const F=mi(...de),oe=V;function G(_e){const Ge=R(_e);if(!m(Ge))return;const J=d(Ge),Ze=f.BASE.multiply(Ge).toAffine(),pt=u(Ze.x);if(pt===pr)return;const Se=u(J*u(oe+pt*ue));if(Se===pr)return;let it=(Ze.x===pt?0:2)|Number(Ze.y&wn),Yt=Se;return ve&&_(Se)&&(Yt=$(Se),it^=1),new k(pt,Yt,it)}return{seed:F,k2sig:G}}const ae={lowS:e.lowS,prehash:!1},ie={lowS:e.lowS,prehash:!1};function se(j,q,ee=ae){const{seed:le,k2sig:Y}=te(j,q,ee),ve=e;return H0(ve.hash.outputLen,ve.nByteLength,ve.hmac)(le,Y)}f.BASE._setWindowSize(8);function X(j,q,ee,le=ie){const Y=j;if(q=Ot("msgHash",q),ee=Ot("publicKey",ee),"strict"in le)throw new Error("options.strict was renamed to lowS");const{lowS:ve,prehash:ye}=le;let ne,V;try{if(typeof Y=="string"||Y instanceof Uint8Array)try{ne=k.fromDER(Y)}catch(Ze){if(!(Ze instanceof di.Err))throw Ze;ne=k.fromCompact(Y)}else if(typeof Y=="object"&&typeof Y.r=="bigint"&&typeof Y.s=="bigint"){const{r:Ze,s:pt}=Y;ne=new k(Ze,pt)}else throw new Error("PARSE");V=f.fromHex(ee)}catch(Ze){if(Ze.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ve&&ne.hasHighS())return!1;ye&&(q=e.hash(q));const{r:ue,s:de}=ne,F=N(q),oe=d(de),G=u(F*oe),_e=u(ue*oe),Ge=f.BASE.multiplyAndAddUnsafe(V,G,_e)?.toAffine();return Ge?u(Ge.x)===ue:!1}return{CURVE:e,getPublicKey:E,getSharedSecret:L,sign:se,verify:X,ProjectivePoint:f,Signature:k,utils:I}}class q0 extends N0{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,cn.hash(e);const i=Us(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?e.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=e.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(e){return cn.exists(this),this.iHash.update(e),this}digestInto(e){cn.exists(this),cn.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return e=e,e.finished=o,e.destroyed=a,e.blockLen=l,e.outputLen=u,e.oHash=n._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const zs=(t,e,n)=>new q0(t,e).update(n).digest();zs.create=(t,e)=>new q0(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function P8(t){return{hash:t,hmac:(e,...n)=>zs(t,e,qi(...n)),randomBytes:io}}function M8(t,e){const n=i=>L8({...t,...P8(i)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const al=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ta=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Z0=BigInt(1),Aa=BigInt(2),Dp=(t,e)=>(t+e/Aa)/e;function K0(t){const e=al,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=t*t*t%e,p=f*f*t%e,g=_n(p,n,e)*p%e,m=_n(g,n,e)*p%e,w=_n(m,Aa,e)*f%e,_=_n(w,o,e)*w%e,$=_n(_,a,e)*_%e,x=_n($,u,e)*$%e,k=_n(x,d,e)*x%e,I=_n(k,u,e)*$%e,E=_n(I,n,e)*p%e,S=_n(E,l,e)*_%e,L=_n(S,i,e)*f%e,R=_n(L,Aa,e);if(!fu.eql(fu.sqr(R),t))throw new Error("Cannot find square root");return R}const fu=E8(al,void 0,void 0,{sqrt:K0}),Ut=M8({a:BigInt(0),b:BigInt(7),Fp:fu,n:Ta,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Ta,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Z0*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Dp(a*t,e),d=Dp(-i*t,e);let f=Et(t-u*n-d*o,e),p=Et(-u*i-d*a,e);const g=f>l,m=p>l;if(g&&(f=e-f),m&&(p=e-p),f>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:g,k1:f,k2neg:m,k2:p}}}},Vn),ll=BigInt(0),V0=t=>typeof t=="bigint"&&ll<t&&t<al,B8=t=>typeof t=="bigint"&&ll<t&&t<Ta,Up={};function Ia(t,...e){let n=Up[t];if(n===void 0){const i=Vn(Uint8Array.from(t,o=>o.charCodeAt(0)));n=mi(i,i),Up[t]=n}return Vn(mi(n,...e))}const ed=t=>t.toRawBytes(!0).slice(1),hu=t=>Ur(t,32),Vc=t=>Et(t,al),Fs=t=>Et(t,Ta),td=Ut.ProjectivePoint,j8=(t,e,n)=>td.BASE.multiplyAndAddUnsafe(t,e,n);function pu(t){let e=Ut.utils.normPrivateKeyToScalar(t),n=td.fromPrivateKey(e);return{scalar:n.hasEvenY()?e:Fs(-e),bytes:ed(n)}}function G0(t){if(!V0(t))throw new Error("bad x: need 0 < x < p");const e=Vc(t*t),n=Vc(e*t+BigInt(7));let i=K0(n);i%Aa!==ll&&(i=Vc(-i));const o=new td(t,i,Z0);return o.assertValidity(),o}function Q0(...t){return Fs(Jt(Ia("BIP0340/challenge",...t)))}function N8(t){return pu(t).bytes}function D8(t,e,n=io(32)){const i=Ot("message",t),{bytes:o,scalar:a}=pu(e),l=Ot("auxRand",n,32),u=hu(a^Jt(Ia("BIP0340/aux",l))),d=Ia("BIP0340/nonce",u,o,i),f=Fs(Jt(d));if(f===ll)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=pu(f),m=Q0(p,o,i),w=new Uint8Array(64);if(w.set(p,0),w.set(hu(Fs(g+m*a)),32),!J0(w,i,o))throw new Error("sign: Invalid signature produced");return w}function J0(t,e,n){const i=Ot("signature",t,64),o=Ot("message",e),a=Ot("publicKey",n,32);try{const l=G0(Jt(a)),u=Jt(i.subarray(0,32));if(!V0(u))return!1;const d=Jt(i.subarray(32,64));if(!B8(d))return!1;const f=Q0(hu(u),ed(l),o),p=j8(l,d,Fs(-f));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const oo=(()=>({getPublicKey:N8,sign:D8,verify:J0,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:G0,pointToBytes:ed,numberToBytesBE:Ur,bytesToNumberBE:Jt,taggedHash:Ia,mod:Et}}))();/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ei(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Nn(...t){const e=(o,a)=>l=>o(a(l)),n=Array.from(t).reverse().reduce((o,a)=>o?e(o,a.encode):a.encode,void 0),i=t.reduce((o,a)=>o?e(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Yn(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(Ei(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=t.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return i})}}}function Xn(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function ao(t,e="="){if(Ei(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===e;i--)if(!((i-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function Y0(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function zp(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let i=0;const o=[],a=Array.from(t);for(a.forEach(l=>{if(Ei(l),l<0||l>=e)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],p=e*l+f;if(!Number.isSafeInteger(p)||e*l/e!==l||p-f!==e*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<t.length-1&&t[l]===0;l++)o.push(0);return o.reverse()}const X0=(t,e)=>e?X0(e,t%e):t,Ra=(t,e)=>t+(e-X0(t,e));function gu(t,e,n,i){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ra(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${Ra(e,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of t){if(Ei(d),d>=2**e)throw new Error(`convertRadix2: invalid data word=${d} from=${e}`);if(o=o<<e|d,a+e>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${e}`);for(a+=e;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=e)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function e1(t){return Ei(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return zp(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(zp(e,t,2**8))}}}function xr(t,e=!1){if(Ei(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(Ra(8,t)>32||Ra(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return gu(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(gu(n,t,8,e))}}}function Fp(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function t1(t,e){if(Ei(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-t),o=e(i).slice(0,t),a=n.slice(-t);for(let l=0;l<t;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const aa={alphabet:Yn,chain:Nn,checksum:t1,radix:e1,radix2:xr,join:Xn,padding:ao},U8=Nn(xr(4),Yn("0123456789ABCDEF"),Xn("")),z8=Nn(xr(5),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),ao(5),Xn(""));Nn(xr(5),Yn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),ao(5),Xn(""));Nn(xr(5),Yn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Xn(""),Y0(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const br=Nn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),ao(6),Xn("")),F8=Nn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),ao(6),Xn("")),nd=t=>Nn(e1(58),Yn(t),Xn("")),Oa=nd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");nd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");nd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const Hp=[0,2,3,5,6,7,9,10,11],H8={encode(t){let e="";for(let n=0;n<t.length;n+=8){const i=t.subarray(n,n+8);e+=Oa.encode(i).padStart(Hp[i.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const i=t.slice(n,n+11),o=Hp.indexOf(i.length),a=Oa.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(e)}},W8=t=>Nn(t1(4,e=>t(t(e))),Oa),vu=Nn(Yn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Xn("")),Wp=[996825010,642813549,513874426,1027748829,705979059];function Bs(t){const e=t>>25;let n=(t&33554431)<<5;for(let i=0;i<Wp.length;i++)(e>>i&1)===1&&(n^=Wp[i]);return n}function qp(t,e,n=1){const i=t.length;let o=1;for(let a=0;a<i;a++){const l=t.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${t})`);o=Bs(o)^l>>5}o=Bs(o);for(let a=0;a<i;a++)o=Bs(o)^t.charCodeAt(a)&31;for(let a of e)o=Bs(o)^a;for(let a=0;a<6;a++)o=Bs(o);return o^=n,vu.encode(gu([o%2**30],30,5,!1))}function n1(t){const e=t==="bech32"?1:734539939,n=xr(5),i=n.decode,o=n.encode,a=Fp(i);function l(p,g,m=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const w=p.length+7+g.length;if(m!==!1&&w>m)throw new TypeError(`Length ${w} exceeds limit ${m}`);return p=p.toLowerCase(),`${p}1${vu.encode(g)}${qp(p,g,e)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const m=p.toLowerCase();if(p!==m&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=m;const w=p.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const _=p.slice(0,w),$=p.slice(w+1);if($.length<6)throw new Error("Data must be at least 6 characters long");const x=vu.decode($).slice(0,-6),k=qp(_,x,e);if(!$.endsWith(k))throw new Error(`Invalid checksum in ${p}: expected "${k}"`);return{prefix:_,words:x}}const d=Fp(u);function f(p){const{prefix:g,words:m}=u(p,!1);return{prefix:g,words:m,bytes:i(m)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Yi=n1("bech32");n1("bech32m");const q8={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},Z8=Nn(xr(4),Yn("0123456789abcdef"),Xn(""),Y0(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),K8={utf8:q8,hex:Z8,base16:U8,base32:z8,base64:br,base64url:F8,base58:Oa,base58xmr:H8};`${Object.keys(K8).join(", ")}`;const r1=`abandon
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
`);function V8(t,e,n,i){cn.hash(t);const o=e8({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(cn.number(a),cn.number(l),cn.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=Us(e),f=Us(n),p=new Uint8Array(l),g=zs.create(t,d),m=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:m}}function G8(t,e,n,i,o){return t.destroy(),e.destroy(),i&&i.destroy(),o.fill(0),n}function Q8(t,e,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=V8(t,e,n,i);let f;const p=new Uint8Array(4),g=gi(p),m=new Uint8Array(u.outputLen);for(let w=1,_=0;_<a;w++,_+=u.outputLen){const $=l.subarray(_,_+u.outputLen);g.setInt32(0,w,!1),(f=d._cloneInto(f)).update(p).digestInto(m),$.set(m.subarray(0,$.length));for(let x=1;x<o;x++){u._cloneInto(f).update(m).digestInto(m);for(let k=0;k<$.length;k++)$[k]^=m[k]}}return G8(u,d,l,f,m)}const la=BigInt(2**32-1),mu=BigInt(32);function i1(t,e=!1){return e?{h:Number(t&la),l:Number(t>>mu&la)}:{h:Number(t>>mu&la)|0,l:Number(t&la)|0}}function J8(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:a,l}=i1(t[o],e);[n[o],i[o]]=[a,l]}return[n,i]}const Y8=(t,e)=>BigInt(t>>>0)<<mu|BigInt(e>>>0),X8=(t,e,n)=>t>>>n,e7=(t,e,n)=>t<<32-n|e>>>n,t7=(t,e,n)=>t>>>n|e<<32-n,n7=(t,e,n)=>t<<32-n|e>>>n,r7=(t,e,n)=>t<<64-n|e>>>n-32,i7=(t,e,n)=>t>>>n-32|e<<64-n,s7=(t,e)=>e,o7=(t,e)=>t,a7=(t,e,n)=>t<<n|e>>>32-n,l7=(t,e,n)=>e<<n|t>>>32-n,c7=(t,e,n)=>e<<n-32|t>>>64-n,u7=(t,e,n)=>t<<n-32|e>>>64-n;function d7(t,e,n,i){const o=(e>>>0)+(i>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const f7=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),h7=(t,e,n,i)=>e+n+i+(t/2**32|0)|0,p7=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0),g7=(t,e,n,i,o)=>e+n+i+o+(t/2**32|0)|0,v7=(t,e,n,i,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(o>>>0),m7=(t,e,n,i,o,a)=>e+n+i+o+a+(t/2**32|0)|0,Be={fromBig:i1,split:J8,toBig:Y8,shrSH:X8,shrSL:e7,rotrSH:t7,rotrSL:n7,rotrBH:r7,rotrBL:i7,rotr32H:s7,rotr32L:o7,rotlSH:a7,rotlSL:l7,rotlBH:c7,rotlBL:u7,add:d7,add3L:f7,add3H:h7,add4L:p7,add4H:g7,add5H:m7,add5L:v7},[y7,b7]=Be.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Mr=new Uint32Array(80),Br=new Uint32Array(80);class cl extends Gu{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:p,Fh:g,Fl:m,Gh:w,Gl:_,Hh:$,Hl:x}=this;return[e,n,i,o,a,l,u,d,f,p,g,m,w,_,$,x]}set(e,n,i,o,a,l,u,d,f,p,g,m,w,_,$,x){this.Ah=e|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=p|0,this.Fh=g|0,this.Fl=m|0,this.Gh=w|0,this.Gl=_|0,this.Hh=$|0,this.Hl=x|0}process(e,n){for(let E=0;E<16;E++,n+=4)Mr[E]=e.getUint32(n),Br[E]=e.getUint32(n+=4);for(let E=16;E<80;E++){const S=Mr[E-15]|0,L=Br[E-15]|0,R=Be.rotrSH(S,L,1)^Be.rotrSH(S,L,8)^Be.shrSH(S,L,7),N=Be.rotrSL(S,L,1)^Be.rotrSL(S,L,8)^Be.shrSL(S,L,7),D=Mr[E-2]|0,K=Br[E-2]|0,te=Be.rotrSH(D,K,19)^Be.rotrBH(D,K,61)^Be.shrSH(D,K,6),ae=Be.rotrSL(D,K,19)^Be.rotrBL(D,K,61)^Be.shrSL(D,K,6),ie=Be.add4L(N,ae,Br[E-7],Br[E-16]),se=Be.add4H(ie,R,te,Mr[E-7],Mr[E-16]);Mr[E]=se|0,Br[E]=ie|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:p,Eh:g,El:m,Fh:w,Fl:_,Gh:$,Gl:x,Hh:k,Hl:I}=this;for(let E=0;E<80;E++){const S=Be.rotrSH(g,m,14)^Be.rotrSH(g,m,18)^Be.rotrBH(g,m,41),L=Be.rotrSL(g,m,14)^Be.rotrSL(g,m,18)^Be.rotrBL(g,m,41),R=g&w^~g&$,N=m&_^~m&x,D=Be.add5L(I,L,N,b7[E],Br[E]),K=Be.add5H(D,k,S,R,y7[E],Mr[E]),te=D|0,ae=Be.rotrSH(i,o,28)^Be.rotrBH(i,o,34)^Be.rotrBH(i,o,39),ie=Be.rotrSL(i,o,28)^Be.rotrBL(i,o,34)^Be.rotrBL(i,o,39),se=i&a^i&u^a&u,X=o&l^o&d^l&d;k=$|0,I=x|0,$=w|0,x=_|0,w=g|0,_=m|0,{h:g,l:m}=Be.add(f|0,p|0,K|0,te|0),f=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const j=Be.add3L(te,ie,X);i=Be.add3H(j,K,ae,se),o=j|0}({h:i,l:o}=Be.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Be.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Be.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:p}=Be.add(this.Dh|0,this.Dl|0,f|0,p|0),{h:g,l:m}=Be.add(this.Eh|0,this.El|0,g|0,m|0),{h:w,l:_}=Be.add(this.Fh|0,this.Fl|0,w|0,_|0),{h:$,l:x}=Be.add(this.Gh|0,this.Gl|0,$|0,x|0),{h:k,l:I}=Be.add(this.Hh|0,this.Hl|0,k|0,I|0),this.set(i,o,a,l,u,d,f,p,g,m,w,_,$,x,k,I)}roundClean(){Mr.fill(0),Br.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class _7 extends cl{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class w7 extends cl{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class x7 extends cl{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const yu=$i(()=>new cl);$i(()=>new _7);$i(()=>new w7);$i(()=>new x7);const $7=t=>t[0]==="あいこくしん";function s1(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function o1(t){const e=s1(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function a1(t){cn.bytes(t,16,20,24,28,32)}function E7(t,e=128){if(cn.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return S7(io(e/8),t)}const k7=t=>{const e=8-t.length/4;return new Uint8Array([Vn(t)[0]>>e<<e])};function l1(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),aa.chain(aa.checksum(1,k7),aa.radix2(11,!0),aa.alphabet(t))}function C7(t,e){const{words:n}=o1(t),i=l1(e).decode(n);return a1(i),i}function S7(t,e){return a1(t),l1(e).encode(t).join($7(e)?"　":" ")}function T7(t,e){try{C7(t,e)}catch{return!1}return!0}const A7=t=>s1(`mnemonic${t}`);function I7(t,e=""){return Q8(yu,o1(t).nfkd,A7(e),{c:2048,dkLen:64})}const R7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),c1=Uint8Array.from({length:16},(t,e)=>e),O7=c1.map(t=>(9*t+5)%16);let rd=[c1],id=[O7];for(let t=0;t<4;t++)for(let e of[rd,id])e.push(e[t].map(n=>R7[n]));const u1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),L7=rd.map((t,e)=>t.map(n=>u1[e][n])),P7=id.map((t,e)=>t.map(n=>u1[e][n])),M7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),B7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ca=(t,e)=>t<<e|t>>>32-e;function Zp(t,e,n,i){return t===0?e^n^i:t===1?e&n|~e&i:t===2?(e|~n)^i:t===3?e&i|n&~i:e^(n|~i)}const ua=new Uint32Array(16);class j7 extends Gu{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:i,h3:o,h4:a}=this;return[e,n,i,o,a]}set(e,n,i,o,a){this.h0=e|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(e,n){for(let w=0;w<16;w++,n+=4)ua[w]=e.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,p=f,g=this.h4|0,m=g;for(let w=0;w<5;w++){const _=4-w,$=M7[w],x=B7[w],k=rd[w],I=id[w],E=L7[w],S=P7[w];for(let L=0;L<16;L++){const R=ca(i+Zp(w,a,u,f)+ua[k[L]]+$,E[L])+g|0;i=g,g=f,f=ca(u,10)|0,u=a,a=R}for(let L=0;L<16;L++){const R=ca(o+Zp(_,l,d,p)+ua[I[L]]+x,S[L])+m|0;o=m,m=p,p=ca(d,10)|0,d=l,l=R}}this.set(this.h1+u+p|0,this.h2+f+m|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ua.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const N7=$i(()=>new j7),da=Ut.ProjectivePoint,Gc=W8(Vn);function Kp(t){return BigInt(`0x${ln(t)}`)}function D7(t){return Gi(t.toString(16).padStart(64,"0"))}const U7=j0("Bitcoin seed"),Qc={private:76066276,public:76067358},Jc=2147483648,z7=t=>N7(Vn(t)),F7=t=>gi(t).getUint32(0,!1),fa=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return gi(e).setUint32(0,t,!1),e};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return F7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return Gc.encode(this.serialize(this.versions.private,qi(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Gc.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=Qc){if(li(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=zs(yu,U7,e);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(e,n=Qc){const i=Gc.decode(e),o=gi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...l,privateKey:u.slice(1)}):new ui({...l,publicKey:u})}static fromJSON(e){return ui.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||Qc,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Ut.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:Kp(e.privateKey),this.privKeyBytes=D7(this.privKey),this.pubKey=Ut.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=da.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=z7(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=Jc)throw new Error("Invalid index");a[2]==="'"&&(l+=Jc),i=i.deriveChild(l)}return i}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=fa(e);if(e>=Jc){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=qi(new Uint8Array([0]),u,n)}else n=qi(this.pubKey,n);const i=zs(yu,this.chainCode,n),o=Kp(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const u=Et(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=da.fromHex(this.pubKey).add(da.fromPrivateKey(o));if(u.equals(da.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new ui(l)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return li(e,32),Ut.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(li(e,32),li(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return li(n,33),qi(fa(e),new Uint8Array([this.depth]),fa(this.parentFingerprint),fa(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const H7=t=>t instanceof Uint8Array,Wn=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),W7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!W7)throw new Error("Non little-endian hardware is not supported");function sd(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function bu(t){if(typeof t=="string"&&(t=sd(t)),!H7(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}const q7=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function Z7(t,e){if(e!==void 0&&(typeof e!="object"||!q7(e)))throw new Error("options must be object or undefined");return Object.assign(t,e)}function K7(t,e){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof e=="number"&&t.length!==e)throw new Error(`Uint8Array length ${e} expected`)}function _u(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function V7(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function d1(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function G7(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");_u(t.outputLen),_u(t.blockLen)}function Q7(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function J7(t,e){d1(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const an={number:_u,bool:V7,bytes:d1,hash:G7,exists:Q7,output:J7},It=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class Y7{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=bu(e),K7(e,32);const n=It(e,0),i=It(e,2),o=It(e,4),a=It(e,6),l=It(e,8),u=It(e,10),d=It(e,12),f=It(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|i<<3)&8191,this.r[2]=(i>>>10|o<<6)&7939,this.r[3]=(o>>>7|a<<9)&8191,this.r[4]=(a>>>4|l<<12)&255,this.r[5]=l>>>1&8190,this.r[6]=(l>>>14|u<<2)&8191,this.r[7]=(u>>>11|d<<5)&8065,this.r[8]=(d>>>8|f<<8)&8191,this.r[9]=f>>>5&127;for(let p=0;p<8;p++)this.pad[p]=It(e,16+2*p)}process(e,n,i=!1){const o=i?0:2048,{h:a,r:l}=this,u=l[0],d=l[1],f=l[2],p=l[3],g=l[4],m=l[5],w=l[6],_=l[7],$=l[8],x=l[9],k=It(e,n+0),I=It(e,n+2),E=It(e,n+4),S=It(e,n+6),L=It(e,n+8),R=It(e,n+10),N=It(e,n+12),D=It(e,n+14);let K=a[0]+(k&8191),te=a[1]+((k>>>13|I<<3)&8191),ae=a[2]+((I>>>10|E<<6)&8191),ie=a[3]+((E>>>7|S<<9)&8191),se=a[4]+((S>>>4|L<<12)&8191),X=a[5]+(L>>>1&8191),j=a[6]+((L>>>14|R<<2)&8191),q=a[7]+((R>>>11|N<<5)&8191),ee=a[8]+((N>>>8|D<<8)&8191),le=a[9]+(D>>>5|o),Y=0,ve=Y+K*u+te*(5*x)+ae*(5*$)+ie*(5*_)+se*(5*w);Y=ve>>>13,ve&=8191,ve+=X*(5*m)+j*(5*g)+q*(5*p)+ee*(5*f)+le*(5*d),Y+=ve>>>13,ve&=8191;let ye=Y+K*d+te*u+ae*(5*x)+ie*(5*$)+se*(5*_);Y=ye>>>13,ye&=8191,ye+=X*(5*w)+j*(5*m)+q*(5*g)+ee*(5*p)+le*(5*f),Y+=ye>>>13,ye&=8191;let ne=Y+K*f+te*d+ae*u+ie*(5*x)+se*(5*$);Y=ne>>>13,ne&=8191,ne+=X*(5*_)+j*(5*w)+q*(5*m)+ee*(5*g)+le*(5*p),Y+=ne>>>13,ne&=8191;let V=Y+K*p+te*f+ae*d+ie*u+se*(5*x);Y=V>>>13,V&=8191,V+=X*(5*$)+j*(5*_)+q*(5*w)+ee*(5*m)+le*(5*g),Y+=V>>>13,V&=8191;let ue=Y+K*g+te*p+ae*f+ie*d+se*u;Y=ue>>>13,ue&=8191,ue+=X*(5*x)+j*(5*$)+q*(5*_)+ee*(5*w)+le*(5*m),Y+=ue>>>13,ue&=8191;let de=Y+K*m+te*g+ae*p+ie*f+se*d;Y=de>>>13,de&=8191,de+=X*u+j*(5*x)+q*(5*$)+ee*(5*_)+le*(5*w),Y+=de>>>13,de&=8191;let F=Y+K*w+te*m+ae*g+ie*p+se*f;Y=F>>>13,F&=8191,F+=X*d+j*u+q*(5*x)+ee*(5*$)+le*(5*_),Y+=F>>>13,F&=8191;let oe=Y+K*_+te*w+ae*m+ie*g+se*p;Y=oe>>>13,oe&=8191,oe+=X*f+j*d+q*u+ee*(5*x)+le*(5*$),Y+=oe>>>13,oe&=8191;let G=Y+K*$+te*_+ae*w+ie*m+se*g;Y=G>>>13,G&=8191,G+=X*p+j*f+q*d+ee*u+le*(5*x),Y+=G>>>13,G&=8191;let _e=Y+K*x+te*$+ae*_+ie*w+se*m;Y=_e>>>13,_e&=8191,_e+=X*g+j*p+q*f+ee*d+le*u,Y+=_e>>>13,_e&=8191,Y=(Y<<2)+Y|0,Y=Y+ve|0,ve=Y&8191,Y=Y>>>13,ye+=Y,a[0]=ve,a[1]=ye,a[2]=ne,a[3]=V,a[4]=ue,a[5]=de,a[6]=F,a[7]=oe,a[8]=G,a[9]=_e}finalize(){const{h:e,pad:n}=this,i=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let u=2;u<10;u++)e[u]+=o,o=e[u]>>>13,e[u]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,i[0]=e[0]+5,o=i[0]>>>13,i[0]&=8191;for(let u=1;u<10;u++)i[u]=e[u]+o,o=i[u]>>>13,i[u]&=8191;i[9]-=8192;let a=(o^1)-1;for(let u=0;u<10;u++)i[u]&=a;a=~a;for(let u=0;u<10;u++)e[u]=e[u]&a|i[u];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let l=e[0]+n[0];e[0]=l&65535;for(let u=1;u<8;u++)l=(e[u]+n[u]|0)+(l>>>16)|0,e[u]=l&65535}update(e){an.exists(this);const{buffer:n,blockLen:i}=this;e=bu(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){for(;i<=o-a;a+=i)this.process(e,a);continue}n.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){an.exists(this),an.output(e,this),this.finished=!0;const{buffer:n,h:i}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let a=0;for(let l=0;l<8;l++)e[a++]=i[l]>>>0,e[a++]=i[l]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}}function X7(t){const e=(i,o)=>t(o).update(bu(i)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=i=>t(i),e}X7(t=>new Y7(t));const eE=sd("expand 16-byte k"),tE=sd("expand 32-byte k"),nE=Wn(eE),rE=Wn(tE),Vp=t=>!(t.byteOffset%4),iE=t=>{const{core:e,rounds:n,counterRight:i,counterLen:o,allow128bitKeys:a,extendNonceFn:l,blockLen:u}=Z7({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},t);an.number(o),an.number(n),an.number(u),an.bool(i),an.bool(a);const d=u/4;if(u%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(f,p,g,m,w=0)=>{if(an.bytes(f),an.bytes(p),an.bytes(g),m||(m=new Uint8Array(g.length)),an.bytes(m),an.number(w),w<0||w>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(m.length<g.length)throw new Error(`Salsa/ChaCha: output (${m.length}) is shorter than data (${g.length})`);const _=[];let $,x;if(f.length===32)$=f,x=rE;else if(f.length===16&&a)$=new Uint8Array(32),$.set(f),$.set(f,16),x=nE,_.push($);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${f.length}`);if(l){if(p.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");$=l(x,$,p.subarray(0,16),new Uint8Array(32)),_.push($),p=p.subarray(16)}const k=16-o;if(p.length!==k)throw new Error(`Salsa/ChaCha: nonce must be ${k} or 16 bytes`);if(k!==12){const K=new Uint8Array(12);K.set(p,i?0:12-p.length),_.push(p=K)}const I=new Uint8Array(u),E=Wn(I),S=Wn($),L=Wn(p),R=Vp(g)&&Wn(g),N=Vp(m)&&Wn(m);_.push(E);const D=g.length;for(let K=0,te=w;K<D;te++){if(e(x,S,L,E,te,n),te>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const ae=Math.min(u,D-K);if(ae===u&&N&&R){const ie=K/4;if(K%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let se=0;se<d;se++)N[ie+se]=R[ie+se]^E[se];K+=u;continue}for(let ie=0;ie<ae;ie++)m[K+ie]=g[K+ie]^I[ie];K+=ae}for(let K=0;K<_.length;K++)_[K].fill(0);return m}},ge=(t,e)=>t<<e|t>>>32-e;function sE(t,e,n,i,o,a=20){let l=t[0],u=t[1],d=t[2],f=t[3],p=e[0],g=e[1],m=e[2],w=e[3],_=e[4],$=e[5],x=e[6],k=e[7],I=o,E=n[0],S=n[1],L=n[2],R=l,N=u,D=d,K=f,te=p,ae=g,ie=m,se=w,X=_,j=$,q=x,ee=k,le=I,Y=E,ve=S,ye=L;for(let V=0;V<a;V+=2)R=R+te|0,le=ge(le^R,16),X=X+le|0,te=ge(te^X,12),R=R+te|0,le=ge(le^R,8),X=X+le|0,te=ge(te^X,7),N=N+ae|0,Y=ge(Y^N,16),j=j+Y|0,ae=ge(ae^j,12),N=N+ae|0,Y=ge(Y^N,8),j=j+Y|0,ae=ge(ae^j,7),D=D+ie|0,ve=ge(ve^D,16),q=q+ve|0,ie=ge(ie^q,12),D=D+ie|0,ve=ge(ve^D,8),q=q+ve|0,ie=ge(ie^q,7),K=K+se|0,ye=ge(ye^K,16),ee=ee+ye|0,se=ge(se^ee,12),K=K+se|0,ye=ge(ye^K,8),ee=ee+ye|0,se=ge(se^ee,7),R=R+ae|0,ye=ge(ye^R,16),q=q+ye|0,ae=ge(ae^q,12),R=R+ae|0,ye=ge(ye^R,8),q=q+ye|0,ae=ge(ae^q,7),N=N+ie|0,le=ge(le^N,16),ee=ee+le|0,ie=ge(ie^ee,12),N=N+ie|0,le=ge(le^N,8),ee=ee+le|0,ie=ge(ie^ee,7),D=D+se|0,Y=ge(Y^D,16),X=X+Y|0,se=ge(se^X,12),D=D+se|0,Y=ge(Y^D,8),X=X+Y|0,se=ge(se^X,7),K=K+te|0,ve=ge(ve^K,16),j=j+ve|0,te=ge(te^j,12),K=K+te|0,ve=ge(ve^K,8),j=j+ve|0,te=ge(te^j,7);let ne=0;i[ne++]=l+R|0,i[ne++]=u+N|0,i[ne++]=d+D|0,i[ne++]=f+K|0,i[ne++]=p+te|0,i[ne++]=g+ae|0,i[ne++]=m+ie|0,i[ne++]=w+se|0,i[ne++]=_+X|0,i[ne++]=$+j|0,i[ne++]=x+q|0,i[ne++]=k+ee|0,i[ne++]=I+le|0,i[ne++]=E+Y|0,i[ne++]=S+ve|0,i[ne++]=L+ye|0}function oE(t,e,n,i){const o=Wn(e),a=Wn(n),l=Wn(i);let u=t[0],d=t[1],f=t[2],p=t[3],g=o[0],m=o[1],w=o[2],_=o[3],$=o[4],x=o[5],k=o[6],I=o[7],E=a[0],S=a[1],L=a[2],R=a[3];for(let N=0;N<20;N+=2)u=u+g|0,E=ge(E^u,16),$=$+E|0,g=ge(g^$,12),u=u+g|0,E=ge(E^u,8),$=$+E|0,g=ge(g^$,7),d=d+m|0,S=ge(S^d,16),x=x+S|0,m=ge(m^x,12),d=d+m|0,S=ge(S^d,8),x=x+S|0,m=ge(m^x,7),f=f+w|0,L=ge(L^f,16),k=k+L|0,w=ge(w^k,12),f=f+w|0,L=ge(L^f,8),k=k+L|0,w=ge(w^k,7),p=p+_|0,R=ge(R^p,16),I=I+R|0,_=ge(_^I,12),p=p+_|0,R=ge(R^p,8),I=I+R|0,_=ge(_^I,7),u=u+m|0,R=ge(R^u,16),k=k+R|0,m=ge(m^k,12),u=u+m|0,R=ge(R^u,8),k=k+R|0,m=ge(m^k,7),d=d+w|0,E=ge(E^d,16),I=I+E|0,w=ge(w^I,12),d=d+w|0,E=ge(E^d,8),I=I+E|0,w=ge(w^I,7),f=f+_|0,S=ge(S^f,16),$=$+S|0,_=ge(_^$,12),f=f+_|0,S=ge(S^f,8),$=$+S|0,_=ge(_^$,7),p=p+g|0,L=ge(L^p,16),x=x+L|0,g=ge(g^x,12),p=p+g|0,L=ge(L^p,8),x=x+L|0,g=ge(g^x,7);return l[0]=u,l[1]=d,l[2]=f,l[3]=p,l[4]=E,l[5]=S,l[6]=L,l[7]=R,i}const f1=iE({core:sE,counterRight:!1,counterLen:8,extendNonceFn:oE,allow128bitKeys:!1});var aE=Object.defineProperty,bt=(t,e)=>{for(var n in e)aE(t,n,{get:e[n],enumerable:!0})};function h1(t){return ln(oo.getPublicKey(t))}var od={};bt(od,{MessageNode:()=>p1,MessageQueue:()=>g1,insertEventIntoAscendingList:()=>cE,insertEventIntoDescendingList:()=>lE,normalizeURL:()=>wu,utf8Decoder:()=>qn,utf8Encoder:()=>$n});var qn=new TextDecoder("utf-8"),$n=new TextEncoder;function wu(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function lE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at<t[i].created_at)a=i+1;else if(e.created_at>=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}function cE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at>t[i].created_at)a=i+1;else if(e.created_at<=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}var p1=class{_value;_next;get value(){return this._value}set value(t){this._value=t}get next(){return this._next}set next(t){this._next=t}constructor(t){this._value=t,this._next=null}},g1=class{_first;_last;get first(){return this._first}set first(t){this._first=t}get last(){return this._last}set last(t){this._last=t}_size;get size(){return this._size}set size(t){this._size=t}constructor(){this._first=null,this._last=null,this._size=0}enqueue(t){const e=new p1(t);return this._size===0||!this._last?(this._first=e,this._last=e):(this._last.next=e,this._last=e),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let t=this._first;return this._first=t.next,t.next=null,this._size--,t.value}},Hi=Symbol("verified"),vt=(t=>(t[t.Metadata=0]="Metadata",t[t.Text=1]="Text",t[t.RecommendRelay=2]="RecommendRelay",t[t.Contacts=3]="Contacts",t[t.EncryptedDirectMessage=4]="EncryptedDirectMessage",t[t.EventDeletion=5]="EventDeletion",t[t.Repost=6]="Repost",t[t.Reaction=7]="Reaction",t[t.BadgeAward=8]="BadgeAward",t[t.ChannelCreation=40]="ChannelCreation",t[t.ChannelMetadata=41]="ChannelMetadata",t[t.ChannelMessage=42]="ChannelMessage",t[t.ChannelHideMessage=43]="ChannelHideMessage",t[t.ChannelMuteUser=44]="ChannelMuteUser",t[t.Blank=255]="Blank",t[t.Report=1984]="Report",t[t.ZapRequest=9734]="ZapRequest",t[t.Zap=9735]="Zap",t[t.RelayList=10002]="RelayList",t[t.ClientAuth=22242]="ClientAuth",t[t.NwcRequest=23194]="NwcRequest",t[t.HttpAuth=27235]="HttpAuth",t[t.ProfileBadge=30008]="ProfileBadge",t[t.BadgeDefinition=30009]="BadgeDefinition",t[t.Article=30023]="Article",t[t.FileMetadata=1063]="FileMetadata",t))(vt||{});function uE(t=255){return{kind:t,content:"",tags:[],created_at:0}}function qr(t,e){const n=t;return n.pubkey=h1(e),n.id=lo(n),n.sig=hE(n,e),n[Hi]=!0,n}function dE(t){if(!ad(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function lo(t){let e=Vn($n.encode(dE(t)));return ln(e)}var fE=t=>t instanceof Object;function ad(t){if(!fE(t)||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function ul(t){if(typeof t[Hi]=="boolean")return t[Hi];const e=lo(t);if(e!==t.id)return t[Hi]=!1;try{return t[Hi]=oo.verify(t.sig,e,t.pubkey)}catch{return t[Hi]=!1}}function hE(t,e){return ln(oo.sign(lo(t),e))}function pE(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1&&!t.ids.some(n=>e.id.startsWith(n))||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1&&!t.authors.some(n=>e.pubkey.startsWith(n)))return!1;for(let n in t)if(n[0]==="#"){let i=n.slice(1),o=t[`#${i}`];if(o&&!e.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>t.until)}function v1(t,e){for(let n=0;n<t.length;n++)if(pE(t[n],e))return!0;return!1}function gE(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];Object.entries(i).forEach(([o,a])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){e[o]=e[o]||[];for(let l=0;l<a.length;l++){let u=a[l];e[o].includes(u)||e[o].push(u)}}}),i.limit&&(!e.limit||i.limit>e.limit)&&(e.limit=i.limit),i.until&&(!e.until||i.until>e.until)&&(e.until=i.until),i.since&&(!e.since||i.since<e.since)&&(e.since=i.since)}return e}var vE={};bt(vE,{getHex64:()=>dl,getInt:()=>m1,getSubscriptionId:()=>y1,matchEventId:()=>mE,matchEventKind:()=>bE,matchEventPubkey:()=>yE});function dl(t,e){let n=e.length+3,i=t.indexOf(`"${e}":`)+n,o=t.slice(i).indexOf('"')+i+1;return t.slice(o,o+64)}function m1(t,e){let n=e.length,i=t.indexOf(`"${e}":`)+n+3,o=t.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function y1(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let i=e+7+1+n,o=t.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return t.slice(i+1,a)}function mE(t,e){return e===dl(t,"id")}function yE(t,e){return e===dl(t,"pubkey")}function bE(t,e){return e===m1(t,"kind")}var Gp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function _E(t,e={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=e;var a,l={},u=Gp(),d={},f={},p;async function g(){return p||(p=new Promise((k,I)=>{try{a=new WebSocket(t)}catch(R){I(R)}a.onopen=()=>{u.connect.forEach(R=>R()),k()},a.onerror=()=>{p=void 0,u.error.forEach(R=>R()),I()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(R=>R())};let E=new g1,S;a.onmessage=R=>{E.enqueue(R.data),S||(S=setInterval(L,0))};function L(){if(E.size===0){clearInterval(S),S=null;return}var R=E.dequeue();if(!R)return;let N=y1(R);if(N){let D=l[N];if(D&&D.alreadyHaveEvent&&D.alreadyHaveEvent(dl(R,"id"),t))return}try{let D=JSON.parse(R);switch(D[0]){case"EVENT":{let ie=D[1],se=D[2];ad(se)&&l[ie]&&(l[ie].skipVerification||ul(se))&&v1(l[ie].filters,se)&&(l[ie],(d[ie]?.event||[]).forEach(X=>X(se)));return}case"COUNT":let K=D[1],te=D[2];l[K]&&(d[K]?.count||[]).forEach(ie=>ie(te));return;case"EOSE":{let ie=D[1];ie in d&&(d[ie].eose.forEach(se=>se()),d[ie].eose=[]);return}case"OK":{let ie=D[1],se=D[2],X=D[3]||"";if(ie in f){let{resolve:j,reject:q}=f[ie];se?j(null):q(new Error(X))}return}case"NOTICE":let ae=D[1];u.notice.forEach(ie=>ie(ae));return;case"AUTH":{let ie=D[1];u.auth?.forEach(se=>se(ie));return}}}catch{return}}}),p)}function m(){return a?.readyState===1}async function w(){m()||await g()}async function _(k){let I=JSON.stringify(k);if(!(!m()&&(await new Promise(E=>setTimeout(E,1e3)),!m())))try{a.send(I)}catch(E){console.log(E)}}const $=(k,{verb:I="REQ",skipVerification:E=!1,alreadyHaveEvent:S=null,id:L=Math.random().toString().slice(2)}={})=>{let R=L;l[R]={id:R,filters:k,skipVerification:E,alreadyHaveEvent:S},_([I,R,...k]);let N={sub:(D,K={})=>$(D||k,{skipVerification:K.skipVerification||E,alreadyHaveEvent:K.alreadyHaveEvent||S,id:R}),unsub:()=>{delete l[R],delete d[R],_(["CLOSE",R])},on:(D,K)=>{d[R]=d[R]||{event:[],count:[],eose:[]},d[R][D].push(K)},off:(D,K)=>{let te=d[R],ae=te[D].indexOf(K);ae>=0&&te[D].splice(ae,1)},get events(){return b1(N)}};return N};function x(k,I){return new Promise((E,S)=>{if(!k.id){S(new Error(`event ${k} has no id`));return}let L=k.id;_([I,k]),f[L]={resolve:E,reject:S}})}return{url:t,sub:$,on:(k,I)=>{u[k].push(I),k==="connect"&&a?.readyState===1&&I()},off:(k,I)=>{let E=u[k].indexOf(I);E!==-1&&u[k].splice(E,1)},list:(k,I)=>new Promise(E=>{let S=$(k,I),L=[],R=setTimeout(()=>{S.unsub(),E(L)},n);S.on("eose",()=>{S.unsub(),clearTimeout(R),E(L)}),S.on("event",N=>{L.push(N)})}),get:(k,I)=>new Promise(E=>{let S=$([k],I),L=setTimeout(()=>{S.unsub(),E(null)},i);S.on("event",R=>{S.unsub(),clearTimeout(L),E(R)})}),count:k=>new Promise(I=>{let E=$(k,{...$,verb:"COUNT"}),S=setTimeout(()=>{E.unsub(),I(null)},o);E.on("count",L=>{E.unsub(),clearTimeout(S),I(L)})}),async publish(k){await x(k,"EVENT")},async auth(k){await x(k,"AUTH")},connect:w,close(){u=Gp(),d={},f={},a?.readyState===WebSocket.OPEN&&a.close()},get status(){return a?.readyState??3}}}async function*b1(t){let e;const n=[],i=o=>{e?(e(o),e=void 0):n.push(o)};t.on("event",i);try{for(;;)n.length>0?yield n.shift():yield await new Promise(a=>{e=a})}finally{t.off("event",i)}}var wE=class{_conn;_seenOn={};batchedByKey={};eoseSubTimeout;getTimeout;seenOnEnabled=!0;batchInterval=100;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400,this.seenOnEnabled=t.seenOnEnabled!==!1,this.batchInterval=t.batchInterval||100}close(t){t.forEach(e=>{let n=this._conn[wu(e)];n&&n.close()})}async ensureRelay(t){const e=wu(t);this._conn[e]||(this._conn[e]=_E(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[e];return await n.connect(),n}sub(t,e,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(m,w)=>{if(n?.alreadyHaveEvent?.(m,w))return!0;if(this.seenOnEnabled){let _=this._seenOn[m]||new Set;_.add(w),this._seenOn[m]=_}return i.has(m)};let a=[],l=new Set,u=new Set,d=t.length,f=!1,p=setTimeout(()=>{f=!0;for(let m of u.values())m()},n?.eoseSubTimeout||this.eoseSubTimeout);t.filter((m,w,_)=>_.indexOf(m)===w).forEach(async m=>{let w;try{w=await this.ensureRelay(m)}catch{$();return}if(!w)return;let _=w.sub(e,o);_.on("event",x=>{i.add(x.id);for(let k of l.values())k(x)}),_.on("eose",()=>{f||$()}),a.push(_);function $(){if(d--,d===0){clearTimeout(p);for(let x of u.values())x()}}});let g={sub(m,w){return a.forEach(_=>_.sub(m,w)),g},unsub(){a.forEach(m=>m.unsub())},on(m,w){m==="event"?l.add(w):m==="eose"&&u.add(w)},off(m,w){m==="event"?l.delete(w):m==="eose"&&u.delete(w)},get events(){return b1(g)}};return g}get(t,e,n){return new Promise(i=>{let o=this.sub(t,[e],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(t,e,n){return new Promise(i=>{let o=[],a=this.sub(t,e,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}batchedList(t,e,n){return new Promise(i=>{this.batchedByKey[t]?this.batchedByKey[t].push({filters:n,relays:e,resolve:i,events:[]}):(this.batchedByKey[t]=[{filters:n,relays:e,resolve:i,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const a=this.batchedByKey[o],l=[],u=[];a.forEach(f=>{l.push(...f.filters),u.push(...f.relays)});const d=this.sub(u,[gE(...l)]);d.on("event",f=>{a.forEach(p=>v1(p.filters,f)&&p.events.push(f))}),d.on("eose",()=>{d.unsub(),a.forEach(f=>f.resolve(f.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(t,e){return t.map(async n=>(await this.ensureRelay(n)).publish(e))}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}},co={};bt(co,{BECH32_REGEX:()=>w1,decode:()=>fl,naddrEncode:()=>TE,neventEncode:()=>SE,noteEncode:()=>kE,nprofileEncode:()=>CE,npubEncode:()=>EE,nrelayEncode:()=>AE,nsecEncode:()=>$E});var _1=5e3,w1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function xE(t){const e=new Uint8Array(4);return e[0]=t>>24&255,e[1]=t>>16&255,e[2]=t>>8&255,e[3]=t&255,e}function fl(t){let{prefix:e,words:n}=Yi.decode(t,_1),i=new Uint8Array(Yi.fromWords(n));switch(e){case"nprofile":{let o=ha(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ln(o[0][0]),relays:o[1]?o[1].map(a=>qn.decode(a)):[]}}}case"nevent":{let o=ha(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(o[3]&&o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:ln(o[0][0]),relays:o[1]?o[1].map(a=>qn.decode(a)):[],author:o[2]?.[0]?ln(o[2][0]):void 0,kind:o[3]?.[0]?parseInt(ln(o[3][0]),16):void 0}}}case"naddr":{let o=ha(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:qn.decode(o[0][0]),pubkey:ln(o[2][0]),kind:parseInt(ln(o[3][0]),16),relays:o[1]?o[1].map(a=>qn.decode(a)):[]}}}case"nrelay":{let o=ha(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:qn.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:e,data:ln(i)};default:throw new Error(`unknown prefix ${e}`)}}function ha(t){let e={},n=t;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);e[i]=e[i]||[],e[i].push(a)}return e}function $E(t){return ld("nsec",t)}function EE(t){return ld("npub",t)}function kE(t){return ld("note",t)}function uo(t,e){let n=Yi.toWords(e);return Yi.encode(t,n,_1)}function ld(t,e){let n=Gi(e);return uo(t,n)}function CE(t){let e=hl({0:[Gi(t.pubkey)],1:(t.relays||[]).map(n=>$n.encode(n))});return uo("nprofile",e)}function SE(t){let e;t.kind!=null&&(e=xE(t.kind));let n=hl({0:[Gi(t.id)],1:(t.relays||[]).map(i=>$n.encode(i)),2:t.author?[Gi(t.author)]:[],3:e?[new Uint8Array(e)]:[]});return uo("nevent",n)}function TE(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=hl({0:[$n.encode(t.identifier)],1:(t.relays||[]).map(i=>$n.encode(i)),2:[Gi(t.pubkey)],3:[new Uint8Array(e)]});return uo("naddr",n)}function AE(t){let e=hl({0:[$n.encode(t)]});return uo("nrelay",e)}function hl(t){let e=[];return Object.entries(t).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),e.push(a)})}),qi(...e)}var IE={};bt(IE,{decrypt:()=>RE,encrypt:()=>x1});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function x1(t,e,n){const i=Ut.getSharedSecret(t,"02"+e),o=$1(i);let a=Uint8Array.from(io(16)),l=$n.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=br.encode(new Uint8Array(d)),p=br.encode(new Uint8Array(a.buffer));return`${f}?iv=${p}`}async function RE(t,e,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(t,"02"+e),l=$1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=br.decode(i),f=br.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return qn.decode(p)}function $1(t){return t.slice(1,33)}var E1={};bt(E1,{NIP05_REGEX:()=>k1,queryProfile:()=>PE,searchDomain:()=>LE,useFetchImplementation:()=>OE});var k1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,pl;try{pl=fetch}catch{}function OE(t){pl=t}async function LE(t,e=""){try{return(await(await pl(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function PE(t){const e=t.match(k1);if(!e)return null;const[n,i="_",o]=e;try{const a=await pl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=ME(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function ME(t){const e={names:{}};for(const[n,i]of Object.entries(t.names))typeof n=="string"&&typeof i=="string"&&(e.names[n]=i);if(t.relays){e.relays={};for(const[n,i]of Object.entries(t.relays))typeof n=="string"&&Array.isArray(i)&&(e.relays[n]=i.filter(o=>typeof o=="string"))}return e}var BE={};bt(BE,{generateSeedWords:()=>NE,privateKeyFromSeedWords:()=>jE,validateWords:()=>DE});function jE(t,e){let i=ui.fromMasterSeed(I7(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return ln(i)}function NE(){return E7(r1)}function DE(t){return T7(t,r1)}var UE={};bt(UE,{parse:()=>zE});function zE(t){const e={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of t.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&e.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){e.root=f;continue}if(d==="reply"){e.reply=f;continue}if(d==="mention"){e.mentions.push(f);continue}if(p){e.root=f;continue}if(g){e.reply=f;continue}e.mentions.push(f)}return e}var FE={};bt(FE,{getPow:()=>C1,minePow:()=>HE});function C1(t){let e=0;for(let n=0;n<t.length;n++){const i=parseInt(t[n],16);if(i===0)e+=4;else{e+=Math.clz32(i)-28;break}}return e}function HE(t,e){let n=0;const i=t,o=["nonce",n.toString(),e.toString()];for(i.tags.push(o);;){const a=Math.floor(new Date().getTime()/1e3);if(a!==i.created_at&&(n=0,i.created_at=a),o[1]=(++n).toString(),i.id=lo(i),C1(i.id)>=e)break}return i}var WE={};bt(WE,{finishRepostEvent:()=>qE,getRepostedEvent:()=>ZE,getRepostedEventPointer:()=>S1});function qE(t,e,n,i){return qr({kind:6,tags:[...t.tags??[],["e",e.id,n],["p",e.pubkey]],content:t.content===""?"":JSON.stringify(e),created_at:t.created_at},i)}function S1(t){if(t.kind!==6)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(e!==void 0)return{id:e[1],relays:[e[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function ZE(t,{skipVerification:e}={}){const n=S1(t);if(n===void 0||t.content==="")return;let i;try{i=JSON.parse(t.content)}catch{return}if(i.id===n.id&&!(!e&&!ul(i)))return i}var KE={};bt(KE,{NOSTR_URI_REGEX:()=>gl,parse:()=>GE,test:()=>VE});var gl=new RegExp(`nostr:(${w1.source})`);function VE(t){return typeof t=="string"&&new RegExp(`^${gl.source}$`).test(t)}function GE(t){const e=t.match(new RegExp(`^${gl.source}$`));if(!e)throw new Error(`Invalid Nostr URI: ${t}`);return{uri:e[0],value:e[1],decoded:fl(e[1])}}var QE={};bt(QE,{finishReactionEvent:()=>JE,getReactedEventPointer:()=>YE});function JE(t,e,n){const i=e.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return qr({...t,kind:7,tags:[...t.tags??[],...i,["e",e.id],["p",e.pubkey]],content:t.content??"+"},n)}function YE(t){if(t.kind!==7)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(e===void 0||n===void 0))return{id:e[1],relays:[e[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var XE={};bt(XE,{createDelegation:()=>e9,getDelegator:()=>t9});function e9(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Vn($n.encode(`nostr:delegation:${e.pubkey}:${i}`)),a=ln(oo.sign(o,t));return{from:h1(t),to:e.pubkey,cond:i,sig:a}}function t9(t){let e=t.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!e)return null;let n=e[1],i=e[2],o=e[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,p]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&t.kind===parseInt(p))){if(d==="created_at"&&f==="<"&&t.created_at<parseInt(p))continue;if(d==="created_at"&&f===">"&&t.created_at>parseInt(p))continue;return null}}let l=Vn($n.encode(`nostr:delegation:${t.pubkey}:${i}`));return oo.verify(o,l,n)?n:null}var n9={};bt(n9,{matchAll:()=>r9,regex:()=>cd,replaceAll:()=>i9});var cd=()=>new RegExp(`\\b${gl.source}\\b`,"g");function*r9(t){const e=t.matchAll(cd());for(const n of e)try{const[i,o]=n;yield{uri:i,value:o,decoded:fl(o),start:n.index,end:n.index+i.length}}catch{}}function i9(t,e){return t.replaceAll(cd(),(n,i)=>e({uri:n,value:i,decoded:fl(i)}))}var s9={};bt(s9,{channelCreateEvent:()=>o9,channelHideMessageEvent:()=>c9,channelMessageEvent:()=>l9,channelMetadataEvent:()=>a9,channelMuteUserEvent:()=>u9});var o9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return qr({kind:40,tags:[...t.tags??[]],content:n,created_at:t.created_at},e)},a9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return qr({kind:41,tags:[["e",t.channel_create_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},l9=(t,e)=>{const n=[["e",t.channel_create_event_id,t.relay_url,"root"]];return t.reply_to_channel_message_event_id&&n.push(["e",t.reply_to_channel_message_event_id,t.relay_url,"reply"]),qr({kind:42,tags:[...n,...t.tags??[]],content:t.content,created_at:t.created_at},e)},c9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return qr({kind:43,tags:[["e",t.channel_message_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},u9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return qr({kind:44,tags:[["p",t.pubkey_to_mute],...t.tags??[]],content:n,created_at:t.created_at},e)},d9={};bt(d9,{useFetchImplementation:()=>f9,validateGithub:()=>h9});var ud;try{ud=fetch}catch{}function f9(t){ud=t}async function h9(t,e,n){try{return await(await ud(`https://gist.github.com/${e}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${t}`}catch{return!1}}var p9={};bt(p9,{authenticate:()=>g9});var g9=async({challenge:t,relay:e,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",e.url],["challenge",t]],content:""};return e.auth(await n(i))},v9={};bt(v9,{decrypt:()=>b9,encrypt:()=>y9,getSharedSecret:()=>m9});var m9=(t,e)=>Vn(Ut.getSharedSecret(t,"02"+e).subarray(1,33));function y9(t,e,n=1){if(n!==1)throw new Error("NIP44: unknown encryption version");const i=io(24),o=$n.encode(e),a=f1(t,i,o),l=new Uint8Array(25+a.length);return l.set([n],0),l.set(i,1),l.set(a,25),br.encode(l)}function b9(t,e){let n=br.decode(e);if(n[0]!==1)throw new Error(`NIP44: unknown encryption version: ${n[0]}`);const i=n.slice(1,25),o=n.slice(25),a=f1(t,i,o);return qn.decode(a)}var _9={};bt(_9,{makeNwcRequestEvent:()=>x9,parseConnectionString:()=>w9});function w9(t){const{pathname:e,searchParams:n}=new URL(t),i=e,o=n.get("relay"),a=n.get("secret");if(!i||!o||!a)throw new Error("invalid connection string");return{pubkey:i,relay:o,secret:a}}async function x9({pubkey:t,secret:e,invoice:n}){const o=await x1(e,t,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),a={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t]]};return qr(a,e)}var $9={};bt($9,{getZapEndpoint:()=>k9,makeZapReceipt:()=>T9,makeZapRequest:()=>C9,useFetchImplementation:()=>E9,validateZapRequest:()=>S9});var dd;try{dd=fetch}catch{}function E9(t){dd=t}async function k9(t){try{let e="",{lud06:n,lud16:i}=JSON.parse(t.content);if(n){let{words:l}=Yi.decode(n,1e3),u=Yi.fromWords(l);e=qn.decode(u)}else if(i){let[l,u]=i.split("@");e=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await dd(e)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function C9({profile:t,event:e,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...i]]};return e&&a.tags.push(["e",e]),a}function S9(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!ad(e))return"Zap request is not a valid Nostr event.";if(!ul(e))return"Invalid signature on zap request.";let n=e.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=e.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function T9({zapRequest:t,preimage:e,bolt11:n,paidAt:i}){let a=JSON.parse(t).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",t]]};return e&&l.tags.push(["preimage",e]),l}var A9={};bt(A9,{getToken:()=>I9,unpackEventFromToken:()=>A1,validateEvent:()=>I1,validateToken:()=>R9});var T1="Nostr ";async function I9(t,e,n,i=!1){if(!t||!e)throw new Error("Missing loginUrl or httpMethod");const o=uE(27235);o.tags=[["u",t],["method",e]],o.created_at=Math.round(new Date().getTime()/1e3);const a=await n(o);return(i?T1:"")+br.encode($n.encode(JSON.stringify(a)))}async function R9(t,e,n){const i=await A1(t).catch(a=>{throw a});return await I1(i,e,n).catch(a=>{throw a})}async function A1(t){if(!t)throw new Error("Missing token");t=t.replace(T1,"");const e=qn.decode(br.decode(t));if(!e||e.length===0||!e.startsWith("{"))throw new Error("Invalid token");return JSON.parse(e)}async function I1(t,e,n){if(!t)throw new Error("Invalid nostr event");if(!ul(t))throw new Error("Invalid nostr event, signature invalid");if(t.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!t.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-t.created_at>60)throw new Error("Invalid nostr event, expired");const i=t.tags.find(a=>a[0]==="u");if(i?.length!==1&&i?.[1]!==e)throw new Error("Invalid nostr event, url tag invalid");const o=t.tags.find(a=>a[0]==="method");if(o?.length!==1&&o?.[1].toLowerCase()!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const O9=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),R1=(t={})=>(()=>{const e=O9();return rt(e,t,!0,!0),e})(),L9=B('<button class="text-blue-500 underline">'),{noteEncode:P9,neventEncode:M9}=co,B9=t=>{try{return P9(t)}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},j9=t=>{try{return M9({id:t})}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},Hs=t=>(()=>{const e=L9();return C(e,A(be,{get when(){return t.kind==null||t.kind===vt.Text},get fallback(){return j9(t.eventId)},get children(){return B9(t.eventId)}})),e})();var La={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */La.exports;(function(t,e){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,m=2,w=4,_=1,$=2,x=1,k=2,I=4,E=8,S=16,L=32,R=64,N=128,D=256,K=512,te=30,ae="...",ie=800,se=16,X=1,j=2,q=3,ee=1/0,le=9007199254740991,Y=17976931348623157e292,ve=0/0,ye=4294967295,ne=ye-1,V=ye>>>1,ue=[["ary",N],["bind",x],["bindKey",k],["curry",E],["curryRight",S],["flip",K],["partial",L],["partialRight",R],["rearg",D]],de="[object Arguments]",F="[object Array]",oe="[object AsyncFunction]",G="[object Boolean]",_e="[object Date]",Ge="[object DOMException]",J="[object Error]",Ze="[object Function]",pt="[object GeneratorFunction]",Se="[object Map]",it="[object Number]",Yt="[object Null]",Ct="[object Object]",Ht="[object Promise]",Gr="[object Proxy]",En="[object RegExp]",St="[object Set]",Xt="[object String]",Dn="[object Symbol]",$r="[object Undefined]",kn="[object WeakMap]",Te="[object WeakSet]",Wt="[object ArrayBuffer]",qt="[object DataView]",Cn="[object Float32Array]",Sn="[object Float64Array]",un="[object Int8Array]",dn="[object Int16Array]",Tn="[object Int32Array]",tr="[object Uint8Array]",nr="[object Uint8ClampedArray]",rr="[object Uint16Array]",Ci="[object Uint32Array]",yo=/\b__p \+= '';/g,km=/\b(__p \+=) '' \+/g,Cm=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Zd=/&(?:amp|lt|gt|quot|#39);/g,Kd=/[&<>"']/g,Sm=RegExp(Zd.source),Tm=RegExp(Kd.source),Am=/<%-([\s\S]+?)%>/g,Im=/<%([\s\S]+?)%>/g,Vd=/<%=([\s\S]+?)%>/g,Rm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Om=/^\w*$/,Lm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rl=/[\\^$.*+?()[\]{}|]/g,Pm=RegExp(Rl.source),Ol=/^\s+/,Mm=/\s/,Bm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,jm=/\{\n\/\* \[wrapped with (.+)\] \*/,Nm=/,? & /,Dm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Um=/[()=,{}\[\]\/\s]/,zm=/\\(\\)?/g,Fm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Gd=/\w*$/,Hm=/^[-+]0x[0-9a-f]+$/i,Wm=/^0b[01]+$/i,qm=/^\[object .+?Constructor\]$/,Zm=/^0o[0-7]+$/i,Km=/^(?:0|[1-9]\d*)$/,Vm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,bo=/($^)/,Gm=/['\n\r\u2028\u2029\\]/g,_o="\\ud800-\\udfff",Qm="\\u0300-\\u036f",Jm="\\ufe20-\\ufe2f",Ym="\\u20d0-\\u20ff",Qd=Qm+Jm+Ym,Jd="\\u2700-\\u27bf",Yd="a-z\\xdf-\\xf6\\xf8-\\xff",Xm="\\xac\\xb1\\xd7\\xf7",e2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",t2="\\u2000-\\u206f",n2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xd="A-Z\\xc0-\\xd6\\xd8-\\xde",ef="\\ufe0e\\ufe0f",tf=Xm+e2+t2+n2,Ll="['’]",r2="["+_o+"]",nf="["+tf+"]",wo="["+Qd+"]",rf="\\d+",i2="["+Jd+"]",sf="["+Yd+"]",of="[^"+_o+tf+rf+Jd+Yd+Xd+"]",Pl="\\ud83c[\\udffb-\\udfff]",s2="(?:"+wo+"|"+Pl+")",af="[^"+_o+"]",Ml="(?:\\ud83c[\\udde6-\\uddff]){2}",Bl="[\\ud800-\\udbff][\\udc00-\\udfff]",Si="["+Xd+"]",lf="\\u200d",cf="(?:"+sf+"|"+of+")",o2="(?:"+Si+"|"+of+")",uf="(?:"+Ll+"(?:d|ll|m|re|s|t|ve))?",df="(?:"+Ll+"(?:D|LL|M|RE|S|T|VE))?",ff=s2+"?",hf="["+ef+"]?",a2="(?:"+lf+"(?:"+[af,Ml,Bl].join("|")+")"+hf+ff+")*",l2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",c2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pf=hf+ff+a2,u2="(?:"+[i2,Ml,Bl].join("|")+")"+pf,d2="(?:"+[af+wo+"?",wo,Ml,Bl,r2].join("|")+")",f2=RegExp(Ll,"g"),h2=RegExp(wo,"g"),jl=RegExp(Pl+"(?="+Pl+")|"+d2+pf,"g"),p2=RegExp([Si+"?"+sf+"+"+uf+"(?="+[nf,Si,"$"].join("|")+")",o2+"+"+df+"(?="+[nf,Si+cf,"$"].join("|")+")",Si+"?"+cf+"+"+uf,Si+"+"+df,c2,l2,rf,u2].join("|"),"g"),g2=RegExp("["+lf+_o+Qd+ef+"]"),v2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,m2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],y2=-1,st={};st[Cn]=st[Sn]=st[un]=st[dn]=st[Tn]=st[tr]=st[nr]=st[rr]=st[Ci]=!0,st[de]=st[F]=st[Wt]=st[G]=st[qt]=st[_e]=st[J]=st[Ze]=st[Se]=st[it]=st[Ct]=st[En]=st[St]=st[Xt]=st[kn]=!1;var tt={};tt[de]=tt[F]=tt[Wt]=tt[qt]=tt[G]=tt[_e]=tt[Cn]=tt[Sn]=tt[un]=tt[dn]=tt[Tn]=tt[Se]=tt[it]=tt[Ct]=tt[En]=tt[St]=tt[Xt]=tt[Dn]=tt[tr]=tt[nr]=tt[rr]=tt[Ci]=!0,tt[J]=tt[Ze]=tt[kn]=!1;var b2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},_2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},x2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$2=parseFloat,E2=parseInt,gf=typeof xt=="object"&&xt&&xt.Object===Object&&xt,k2=typeof self=="object"&&self&&self.Object===Object&&self,Tt=gf||k2||Function("return this")(),Nl=e&&!e.nodeType&&e,Qr=Nl&&!0&&t&&!t.nodeType&&t,vf=Qr&&Qr.exports===Nl,Dl=vf&&gf.process,fn=function(){try{var P=Qr&&Qr.require&&Qr.require("util").types;return P||Dl&&Dl.binding&&Dl.binding("util")}catch{}}(),mf=fn&&fn.isArrayBuffer,yf=fn&&fn.isDate,bf=fn&&fn.isMap,_f=fn&&fn.isRegExp,wf=fn&&fn.isSet,xf=fn&&fn.isTypedArray;function en(P,z,U){switch(U.length){case 0:return P.call(z);case 1:return P.call(z,U[0]);case 2:return P.call(z,U[0],U[1]);case 3:return P.call(z,U[0],U[1],U[2])}return P.apply(z,U)}function C2(P,z,U,he){for(var Ae=-1,Ve=P==null?0:P.length;++Ae<Ve;){var _t=P[Ae];z(he,_t,U(_t),P)}return he}function hn(P,z){for(var U=-1,he=P==null?0:P.length;++U<he&&z(P[U],U,P)!==!1;);return P}function S2(P,z){for(var U=P==null?0:P.length;U--&&z(P[U],U,P)!==!1;);return P}function $f(P,z){for(var U=-1,he=P==null?0:P.length;++U<he;)if(!z(P[U],U,P))return!1;return!0}function Er(P,z){for(var U=-1,he=P==null?0:P.length,Ae=0,Ve=[];++U<he;){var _t=P[U];z(_t,U,P)&&(Ve[Ae++]=_t)}return Ve}function xo(P,z){var U=P==null?0:P.length;return!!U&&Ti(P,z,0)>-1}function Ul(P,z,U){for(var he=-1,Ae=P==null?0:P.length;++he<Ae;)if(U(z,P[he]))return!0;return!1}function at(P,z){for(var U=-1,he=P==null?0:P.length,Ae=Array(he);++U<he;)Ae[U]=z(P[U],U,P);return Ae}function kr(P,z){for(var U=-1,he=z.length,Ae=P.length;++U<he;)P[Ae+U]=z[U];return P}function zl(P,z,U,he){var Ae=-1,Ve=P==null?0:P.length;for(he&&Ve&&(U=P[++Ae]);++Ae<Ve;)U=z(U,P[Ae],Ae,P);return U}function T2(P,z,U,he){var Ae=P==null?0:P.length;for(he&&Ae&&(U=P[--Ae]);Ae--;)U=z(U,P[Ae],Ae,P);return U}function Fl(P,z){for(var U=-1,he=P==null?0:P.length;++U<he;)if(z(P[U],U,P))return!0;return!1}var A2=Hl("length");function I2(P){return P.split("")}function R2(P){return P.match(Dm)||[]}function Ef(P,z,U){var he;return U(P,function(Ae,Ve,_t){if(z(Ae,Ve,_t))return he=Ve,!1}),he}function $o(P,z,U,he){for(var Ae=P.length,Ve=U+(he?1:-1);he?Ve--:++Ve<Ae;)if(z(P[Ve],Ve,P))return Ve;return-1}function Ti(P,z,U){return z===z?H2(P,z,U):$o(P,kf,U)}function O2(P,z,U,he){for(var Ae=U-1,Ve=P.length;++Ae<Ve;)if(he(P[Ae],z))return Ae;return-1}function kf(P){return P!==P}function Cf(P,z){var U=P==null?0:P.length;return U?ql(P,z)/U:ve}function Hl(P){return function(z){return z==null?n:z[P]}}function Wl(P){return function(z){return P==null?n:P[z]}}function Sf(P,z,U,he,Ae){return Ae(P,function(Ve,_t,Xe){U=he?(he=!1,Ve):z(U,Ve,_t,Xe)}),U}function L2(P,z){var U=P.length;for(P.sort(z);U--;)P[U]=P[U].value;return P}function ql(P,z){for(var U,he=-1,Ae=P.length;++he<Ae;){var Ve=z(P[he]);Ve!==n&&(U=U===n?Ve:U+Ve)}return U}function Zl(P,z){for(var U=-1,he=Array(P);++U<P;)he[U]=z(U);return he}function P2(P,z){return at(z,function(U){return[U,P[U]]})}function Tf(P){return P&&P.slice(0,Of(P)+1).replace(Ol,"")}function tn(P){return function(z){return P(z)}}function Kl(P,z){return at(z,function(U){return P[U]})}function _s(P,z){return P.has(z)}function Af(P,z){for(var U=-1,he=P.length;++U<he&&Ti(z,P[U],0)>-1;);return U}function If(P,z){for(var U=P.length;U--&&Ti(z,P[U],0)>-1;);return U}function M2(P,z){for(var U=P.length,he=0;U--;)P[U]===z&&++he;return he}var B2=Wl(b2),j2=Wl(_2);function N2(P){return"\\"+x2[P]}function D2(P,z){return P==null?n:P[z]}function Ai(P){return g2.test(P)}function U2(P){return v2.test(P)}function z2(P){for(var z,U=[];!(z=P.next()).done;)U.push(z.value);return U}function Vl(P){var z=-1,U=Array(P.size);return P.forEach(function(he,Ae){U[++z]=[Ae,he]}),U}function Rf(P,z){return function(U){return P(z(U))}}function Cr(P,z){for(var U=-1,he=P.length,Ae=0,Ve=[];++U<he;){var _t=P[U];(_t===z||_t===p)&&(P[U]=p,Ve[Ae++]=U)}return Ve}function Eo(P){var z=-1,U=Array(P.size);return P.forEach(function(he){U[++z]=he}),U}function F2(P){var z=-1,U=Array(P.size);return P.forEach(function(he){U[++z]=[he,he]}),U}function H2(P,z,U){for(var he=U-1,Ae=P.length;++he<Ae;)if(P[he]===z)return he;return-1}function W2(P,z,U){for(var he=U+1;he--;)if(P[he]===z)return he;return he}function Ii(P){return Ai(P)?Z2(P):A2(P)}function An(P){return Ai(P)?K2(P):I2(P)}function Of(P){for(var z=P.length;z--&&Mm.test(P.charAt(z)););return z}var q2=Wl(w2);function Z2(P){for(var z=jl.lastIndex=0;jl.test(P);)++z;return z}function K2(P){return P.match(jl)||[]}function V2(P){return P.match(p2)||[]}var G2=function P(z){z=z==null?Tt:Ri.defaults(Tt.Object(),z,Ri.pick(Tt,m2));var U=z.Array,he=z.Date,Ae=z.Error,Ve=z.Function,_t=z.Math,Xe=z.Object,Gl=z.RegExp,Q2=z.String,pn=z.TypeError,ko=U.prototype,J2=Ve.prototype,Oi=Xe.prototype,Co=z["__core-js_shared__"],So=J2.toString,Je=Oi.hasOwnProperty,Y2=0,Lf=function(){var r=/[^.]+$/.exec(Co&&Co.keys&&Co.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),To=Oi.toString,X2=So.call(Xe),ey=Tt._,ty=Gl("^"+So.call(Je).replace(Rl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ao=vf?z.Buffer:n,Sr=z.Symbol,Io=z.Uint8Array,Pf=Ao?Ao.allocUnsafe:n,Ro=Rf(Xe.getPrototypeOf,Xe),Mf=Xe.create,Bf=Oi.propertyIsEnumerable,Oo=ko.splice,jf=Sr?Sr.isConcatSpreadable:n,ws=Sr?Sr.iterator:n,Jr=Sr?Sr.toStringTag:n,Lo=function(){try{var r=ni(Xe,"defineProperty");return r({},"",{}),r}catch{}}(),ny=z.clearTimeout!==Tt.clearTimeout&&z.clearTimeout,ry=he&&he.now!==Tt.Date.now&&he.now,iy=z.setTimeout!==Tt.setTimeout&&z.setTimeout,Po=_t.ceil,Mo=_t.floor,Ql=Xe.getOwnPropertySymbols,sy=Ao?Ao.isBuffer:n,Nf=z.isFinite,oy=ko.join,ay=Rf(Xe.keys,Xe),wt=_t.max,Lt=_t.min,ly=he.now,cy=z.parseInt,Df=_t.random,uy=ko.reverse,Jl=ni(z,"DataView"),xs=ni(z,"Map"),Yl=ni(z,"Promise"),Li=ni(z,"Set"),$s=ni(z,"WeakMap"),Es=ni(Xe,"create"),Bo=$s&&new $s,Pi={},dy=ri(Jl),fy=ri(xs),hy=ri(Yl),py=ri(Li),gy=ri($s),jo=Sr?Sr.prototype:n,ks=jo?jo.valueOf:n,Uf=jo?jo.toString:n;function y(r){if(ut(r)&&!Oe(r)&&!(r instanceof Fe)){if(r instanceof gn)return r;if(Je.call(r,"__wrapped__"))return zh(r)}return new gn(r)}var Mi=function(){function r(){}return function(s){if(!lt(s))return{};if(Mf)return Mf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function No(){}function gn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Am,evaluate:Im,interpolate:Vd,variable:"",imports:{_:y}},y.prototype=No.prototype,y.prototype.constructor=y,gn.prototype=Mi(No.prototype),gn.prototype.constructor=gn;function Fe(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ye,this.__views__=[]}function vy(){var r=new Fe(this.__wrapped__);return r.__actions__=Zt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Zt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Zt(this.__views__),r}function my(){if(this.__filtered__){var r=new Fe(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function yy(){var r=this.__wrapped__.value(),s=this.__dir__,c=Oe(r),h=s<0,v=c?r.length:0,b=Ib(0,v,this.__views__),T=b.start,O=b.end,M=O-T,H=h?O:T-1,W=this.__iteratees__,Q=W.length,ce=0,me=Lt(M,this.__takeCount__);if(!c||!h&&v==M&&me==M)return uh(r,this.__actions__);var Ee=[];e:for(;M--&&ce<me;){H+=s;for(var Me=-1,ke=r[H];++Me<Q;){var Ue=W[Me],He=Ue.iteratee,sn=Ue.type,Dt=He(ke);if(sn==j)ke=Dt;else if(!Dt){if(sn==X)continue e;break e}}Ee[ce++]=ke}return Ee}Fe.prototype=Mi(No.prototype),Fe.prototype.constructor=Fe;function Yr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function by(){this.__data__=Es?Es(null):{},this.size=0}function _y(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function wy(r){var s=this.__data__;if(Es){var c=s[r];return c===d?n:c}return Je.call(s,r)?s[r]:n}function xy(r){var s=this.__data__;return Es?s[r]!==n:Je.call(s,r)}function $y(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Es&&s===n?d:s,this}Yr.prototype.clear=by,Yr.prototype.delete=_y,Yr.prototype.get=wy,Yr.prototype.has=xy,Yr.prototype.set=$y;function ir(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Ey(){this.__data__=[],this.size=0}function ky(r){var s=this.__data__,c=Do(s,r);if(c<0)return!1;var h=s.length-1;return c==h?s.pop():Oo.call(s,c,1),--this.size,!0}function Cy(r){var s=this.__data__,c=Do(s,r);return c<0?n:s[c][1]}function Sy(r){return Do(this.__data__,r)>-1}function Ty(r,s){var c=this.__data__,h=Do(c,r);return h<0?(++this.size,c.push([r,s])):c[h][1]=s,this}ir.prototype.clear=Ey,ir.prototype.delete=ky,ir.prototype.get=Cy,ir.prototype.has=Sy,ir.prototype.set=Ty;function sr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Ay(){this.size=0,this.__data__={hash:new Yr,map:new(xs||ir),string:new Yr}}function Iy(r){var s=Jo(this,r).delete(r);return this.size-=s?1:0,s}function Ry(r){return Jo(this,r).get(r)}function Oy(r){return Jo(this,r).has(r)}function Ly(r,s){var c=Jo(this,r),h=c.size;return c.set(r,s),this.size+=c.size==h?0:1,this}sr.prototype.clear=Ay,sr.prototype.delete=Iy,sr.prototype.get=Ry,sr.prototype.has=Oy,sr.prototype.set=Ly;function Xr(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new sr;++s<c;)this.add(r[s])}function Py(r){return this.__data__.set(r,d),this}function My(r){return this.__data__.has(r)}Xr.prototype.add=Xr.prototype.push=Py,Xr.prototype.has=My;function In(r){var s=this.__data__=new ir(r);this.size=s.size}function By(){this.__data__=new ir,this.size=0}function jy(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function Ny(r){return this.__data__.get(r)}function Dy(r){return this.__data__.has(r)}function Uy(r,s){var c=this.__data__;if(c instanceof ir){var h=c.__data__;if(!xs||h.length<o-1)return h.push([r,s]),this.size=++c.size,this;c=this.__data__=new sr(h)}return c.set(r,s),this.size=c.size,this}In.prototype.clear=By,In.prototype.delete=jy,In.prototype.get=Ny,In.prototype.has=Dy,In.prototype.set=Uy;function zf(r,s){var c=Oe(r),h=!c&&ii(r),v=!c&&!h&&Or(r),b=!c&&!h&&!v&&Di(r),T=c||h||v||b,O=T?Zl(r.length,Q2):[],M=O.length;for(var H in r)(s||Je.call(r,H))&&!(T&&(H=="length"||v&&(H=="offset"||H=="parent")||b&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||cr(H,M)))&&O.push(H);return O}function Ff(r){var s=r.length;return s?r[cc(0,s-1)]:n}function zy(r,s){return Yo(Zt(r),ei(s,0,r.length))}function Fy(r){return Yo(Zt(r))}function Xl(r,s,c){(c!==n&&!Rn(r[s],c)||c===n&&!(s in r))&&or(r,s,c)}function Cs(r,s,c){var h=r[s];(!(Je.call(r,s)&&Rn(h,c))||c===n&&!(s in r))&&or(r,s,c)}function Do(r,s){for(var c=r.length;c--;)if(Rn(r[c][0],s))return c;return-1}function Hy(r,s,c,h){return Tr(r,function(v,b,T){s(h,v,c(v),T)}),h}function Hf(r,s){return r&&zn(s,$t(s),r)}function Wy(r,s){return r&&zn(s,Vt(s),r)}function or(r,s,c){s=="__proto__"&&Lo?Lo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function ec(r,s){for(var c=-1,h=s.length,v=U(h),b=r==null;++c<h;)v[c]=b?n:Pc(r,s[c]);return v}function ei(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function vn(r,s,c,h,v,b){var T,O=s&g,M=s&m,H=s&w;if(c&&(T=v?c(r,h,v,b):c(r)),T!==n)return T;if(!lt(r))return r;var W=Oe(r);if(W){if(T=Ob(r),!O)return Zt(r,T)}else{var Q=Pt(r),ce=Q==Ze||Q==pt;if(Or(r))return hh(r,O);if(Q==Ct||Q==de||ce&&!v){if(T=M||ce?{}:Oh(r),!O)return M?wb(r,Wy(T,r)):_b(r,Hf(T,r))}else{if(!tt[Q])return v?r:{};T=Lb(r,Q,O)}}b||(b=new In);var me=b.get(r);if(me)return me;b.set(r,T),ap(r)?r.forEach(function(ke){T.add(vn(ke,s,c,ke,r,b))}):sp(r)&&r.forEach(function(ke,Ue){T.set(Ue,vn(ke,s,c,Ue,r,b))});var Ee=H?M?_c:bc:M?Vt:$t,Me=W?n:Ee(r);return hn(Me||r,function(ke,Ue){Me&&(Ue=ke,ke=r[Ue]),Cs(T,Ue,vn(ke,s,c,Ue,r,b))}),T}function qy(r){var s=$t(r);return function(c){return Wf(c,r,s)}}function Wf(r,s,c){var h=c.length;if(r==null)return!h;for(r=Xe(r);h--;){var v=c[h],b=s[v],T=r[v];if(T===n&&!(v in r)||!b(T))return!1}return!0}function qf(r,s,c){if(typeof r!="function")throw new pn(l);return Ls(function(){r.apply(n,c)},s)}function Ss(r,s,c,h){var v=-1,b=xo,T=!0,O=r.length,M=[],H=s.length;if(!O)return M;c&&(s=at(s,tn(c))),h?(b=Ul,T=!1):s.length>=o&&(b=_s,T=!1,s=new Xr(s));e:for(;++v<O;){var W=r[v],Q=c==null?W:c(W);if(W=h||W!==0?W:0,T&&Q===Q){for(var ce=H;ce--;)if(s[ce]===Q)continue e;M.push(W)}else b(s,Q,h)||M.push(W)}return M}var Tr=yh(Un),Zf=yh(nc,!0);function Zy(r,s){var c=!0;return Tr(r,function(h,v,b){return c=!!s(h,v,b),c}),c}function Uo(r,s,c){for(var h=-1,v=r.length;++h<v;){var b=r[h],T=s(b);if(T!=null&&(O===n?T===T&&!rn(T):c(T,O)))var O=T,M=b}return M}function Ky(r,s,c,h){var v=r.length;for(c=Pe(c),c<0&&(c=-c>v?0:v+c),h=h===n||h>v?v:Pe(h),h<0&&(h+=v),h=c>h?0:cp(h);c<h;)r[c++]=s;return r}function Kf(r,s){var c=[];return Tr(r,function(h,v,b){s(h,v,b)&&c.push(h)}),c}function At(r,s,c,h,v){var b=-1,T=r.length;for(c||(c=Mb),v||(v=[]);++b<T;){var O=r[b];s>0&&c(O)?s>1?At(O,s-1,c,h,v):kr(v,O):h||(v[v.length]=O)}return v}var tc=bh(),Vf=bh(!0);function Un(r,s){return r&&tc(r,s,$t)}function nc(r,s){return r&&Vf(r,s,$t)}function zo(r,s){return Er(s,function(c){return ur(r[c])})}function ti(r,s){s=Ir(s,r);for(var c=0,h=s.length;r!=null&&c<h;)r=r[Fn(s[c++])];return c&&c==h?r:n}function Gf(r,s,c){var h=s(r);return Oe(r)?h:kr(h,c(r))}function jt(r){return r==null?r===n?$r:Yt:Jr&&Jr in Xe(r)?Ab(r):Fb(r)}function rc(r,s){return r>s}function Vy(r,s){return r!=null&&Je.call(r,s)}function Gy(r,s){return r!=null&&s in Xe(r)}function Qy(r,s,c){return r>=Lt(s,c)&&r<wt(s,c)}function ic(r,s,c){for(var h=c?Ul:xo,v=r[0].length,b=r.length,T=b,O=U(b),M=1/0,H=[];T--;){var W=r[T];T&&s&&(W=at(W,tn(s))),M=Lt(W.length,M),O[T]=!c&&(s||v>=120&&W.length>=120)?new Xr(T&&W):n}W=r[0];var Q=-1,ce=O[0];e:for(;++Q<v&&H.length<M;){var me=W[Q],Ee=s?s(me):me;if(me=c||me!==0?me:0,!(ce?_s(ce,Ee):h(H,Ee,c))){for(T=b;--T;){var Me=O[T];if(!(Me?_s(Me,Ee):h(r[T],Ee,c)))continue e}ce&&ce.push(Ee),H.push(me)}}return H}function Jy(r,s,c,h){return Un(r,function(v,b,T){s(h,c(v),b,T)}),h}function Ts(r,s,c){s=Ir(s,r),r=Bh(r,s);var h=r==null?r:r[Fn(yn(s))];return h==null?n:en(h,r,c)}function Qf(r){return ut(r)&&jt(r)==de}function Yy(r){return ut(r)&&jt(r)==Wt}function Xy(r){return ut(r)&&jt(r)==_e}function As(r,s,c,h,v){return r===s?!0:r==null||s==null||!ut(r)&&!ut(s)?r!==r&&s!==s:eb(r,s,c,h,As,v)}function eb(r,s,c,h,v,b){var T=Oe(r),O=Oe(s),M=T?F:Pt(r),H=O?F:Pt(s);M=M==de?Ct:M,H=H==de?Ct:H;var W=M==Ct,Q=H==Ct,ce=M==H;if(ce&&Or(r)){if(!Or(s))return!1;T=!0,W=!1}if(ce&&!W)return b||(b=new In),T||Di(r)?Ah(r,s,c,h,v,b):Sb(r,s,M,c,h,v,b);if(!(c&_)){var me=W&&Je.call(r,"__wrapped__"),Ee=Q&&Je.call(s,"__wrapped__");if(me||Ee){var Me=me?r.value():r,ke=Ee?s.value():s;return b||(b=new In),v(Me,ke,c,h,b)}}return ce?(b||(b=new In),Tb(r,s,c,h,v,b)):!1}function tb(r){return ut(r)&&Pt(r)==Se}function sc(r,s,c,h){var v=c.length,b=v,T=!h;if(r==null)return!b;for(r=Xe(r);v--;){var O=c[v];if(T&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++v<b;){O=c[v];var M=O[0],H=r[M],W=O[1];if(T&&O[2]){if(H===n&&!(M in r))return!1}else{var Q=new In;if(h)var ce=h(H,W,M,r,s,Q);if(!(ce===n?As(W,H,_|$,h,Q):ce))return!1}}return!0}function Jf(r){if(!lt(r)||jb(r))return!1;var s=ur(r)?ty:qm;return s.test(ri(r))}function nb(r){return ut(r)&&jt(r)==En}function rb(r){return ut(r)&&Pt(r)==St}function ib(r){return ut(r)&&ia(r.length)&&!!st[jt(r)]}function Yf(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?Oe(r)?th(r[0],r[1]):eh(r):_p(r)}function oc(r){if(!Os(r))return ay(r);var s=[];for(var c in Xe(r))Je.call(r,c)&&c!="constructor"&&s.push(c);return s}function sb(r){if(!lt(r))return zb(r);var s=Os(r),c=[];for(var h in r)h=="constructor"&&(s||!Je.call(r,h))||c.push(h);return c}function ac(r,s){return r<s}function Xf(r,s){var c=-1,h=Kt(r)?U(r.length):[];return Tr(r,function(v,b,T){h[++c]=s(v,b,T)}),h}function eh(r){var s=xc(r);return s.length==1&&s[0][2]?Ph(s[0][0],s[0][1]):function(c){return c===r||sc(c,r,s)}}function th(r,s){return Ec(r)&&Lh(s)?Ph(Fn(r),s):function(c){var h=Pc(c,r);return h===n&&h===s?Mc(c,r):As(s,h,_|$)}}function Fo(r,s,c,h,v){r!==s&&tc(s,function(b,T){if(v||(v=new In),lt(b))ob(r,s,T,c,Fo,h,v);else{var O=h?h(Cc(r,T),b,T+"",r,s,v):n;O===n&&(O=b),Xl(r,T,O)}},Vt)}function ob(r,s,c,h,v,b,T){var O=Cc(r,c),M=Cc(s,c),H=T.get(M);if(H){Xl(r,c,H);return}var W=b?b(O,M,c+"",r,s,T):n,Q=W===n;if(Q){var ce=Oe(M),me=!ce&&Or(M),Ee=!ce&&!me&&Di(M);W=M,ce||me||Ee?Oe(O)?W=O:dt(O)?W=Zt(O):me?(Q=!1,W=hh(M,!0)):Ee?(Q=!1,W=ph(M,!0)):W=[]:Ps(M)||ii(M)?(W=O,ii(O)?W=up(O):(!lt(O)||ur(O))&&(W=Oh(M))):Q=!1}Q&&(T.set(M,W),v(W,M,h,b,T),T.delete(M)),Xl(r,c,W)}function nh(r,s){var c=r.length;if(c)return s+=s<0?c:0,cr(s,c)?r[s]:n}function rh(r,s,c){s.length?s=at(s,function(b){return Oe(b)?function(T){return ti(T,b.length===1?b[0]:b)}:b}):s=[Gt];var h=-1;s=at(s,tn(xe()));var v=Xf(r,function(b,T,O){var M=at(s,function(H){return H(b)});return{criteria:M,index:++h,value:b}});return L2(v,function(b,T){return bb(b,T,c)})}function ab(r,s){return ih(r,s,function(c,h){return Mc(r,h)})}function ih(r,s,c){for(var h=-1,v=s.length,b={};++h<v;){var T=s[h],O=ti(r,T);c(O,T)&&Is(b,Ir(T,r),O)}return b}function lb(r){return function(s){return ti(s,r)}}function lc(r,s,c,h){var v=h?O2:Ti,b=-1,T=s.length,O=r;for(r===s&&(s=Zt(s)),c&&(O=at(r,tn(c)));++b<T;)for(var M=0,H=s[b],W=c?c(H):H;(M=v(O,W,M,h))>-1;)O!==r&&Oo.call(O,M,1),Oo.call(r,M,1);return r}function sh(r,s){for(var c=r?s.length:0,h=c-1;c--;){var v=s[c];if(c==h||v!==b){var b=v;cr(v)?Oo.call(r,v,1):fc(r,v)}}return r}function cc(r,s){return r+Mo(Df()*(s-r+1))}function cb(r,s,c,h){for(var v=-1,b=wt(Po((s-r)/(c||1)),0),T=U(b);b--;)T[h?b:++v]=r,r+=c;return T}function uc(r,s){var c="";if(!r||s<1||s>le)return c;do s%2&&(c+=r),s=Mo(s/2),s&&(r+=r);while(s);return c}function Ne(r,s){return Sc(Mh(r,s,Gt),r+"")}function ub(r){return Ff(Ui(r))}function db(r,s){var c=Ui(r);return Yo(c,ei(s,0,c.length))}function Is(r,s,c,h){if(!lt(r))return r;s=Ir(s,r);for(var v=-1,b=s.length,T=b-1,O=r;O!=null&&++v<b;){var M=Fn(s[v]),H=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(v!=T){var W=O[M];H=h?h(W,M,O):n,H===n&&(H=lt(W)?W:cr(s[v+1])?[]:{})}Cs(O,M,H),O=O[M]}return r}var oh=Bo?function(r,s){return Bo.set(r,s),r}:Gt,fb=Lo?function(r,s){return Lo(r,"toString",{configurable:!0,enumerable:!1,value:jc(s),writable:!0})}:Gt;function hb(r){return Yo(Ui(r))}function mn(r,s,c){var h=-1,v=r.length;s<0&&(s=-s>v?0:v+s),c=c>v?v:c,c<0&&(c+=v),v=s>c?0:c-s>>>0,s>>>=0;for(var b=U(v);++h<v;)b[h]=r[h+s];return b}function pb(r,s){var c;return Tr(r,function(h,v,b){return c=s(h,v,b),!c}),!!c}function Ho(r,s,c){var h=0,v=r==null?h:r.length;if(typeof s=="number"&&s===s&&v<=V){for(;h<v;){var b=h+v>>>1,T=r[b];T!==null&&!rn(T)&&(c?T<=s:T<s)?h=b+1:v=b}return v}return dc(r,s,Gt,c)}function dc(r,s,c,h){var v=0,b=r==null?0:r.length;if(b===0)return 0;s=c(s);for(var T=s!==s,O=s===null,M=rn(s),H=s===n;v<b;){var W=Mo((v+b)/2),Q=c(r[W]),ce=Q!==n,me=Q===null,Ee=Q===Q,Me=rn(Q);if(T)var ke=h||Ee;else H?ke=Ee&&(h||ce):O?ke=Ee&&ce&&(h||!me):M?ke=Ee&&ce&&!me&&(h||!Me):me||Me?ke=!1:ke=h?Q<=s:Q<s;ke?v=W+1:b=W}return Lt(b,ne)}function ah(r,s){for(var c=-1,h=r.length,v=0,b=[];++c<h;){var T=r[c],O=s?s(T):T;if(!c||!Rn(O,M)){var M=O;b[v++]=T===0?0:T}}return b}function lh(r){return typeof r=="number"?r:rn(r)?ve:+r}function nn(r){if(typeof r=="string")return r;if(Oe(r))return at(r,nn)+"";if(rn(r))return Uf?Uf.call(r):"";var s=r+"";return s=="0"&&1/r==-ee?"-0":s}function Ar(r,s,c){var h=-1,v=xo,b=r.length,T=!0,O=[],M=O;if(c)T=!1,v=Ul;else if(b>=o){var H=s?null:kb(r);if(H)return Eo(H);T=!1,v=_s,M=new Xr}else M=s?[]:O;e:for(;++h<b;){var W=r[h],Q=s?s(W):W;if(W=c||W!==0?W:0,T&&Q===Q){for(var ce=M.length;ce--;)if(M[ce]===Q)continue e;s&&M.push(Q),O.push(W)}else v(M,Q,c)||(M!==O&&M.push(Q),O.push(W))}return O}function fc(r,s){return s=Ir(s,r),r=Bh(r,s),r==null||delete r[Fn(yn(s))]}function ch(r,s,c,h){return Is(r,s,c(ti(r,s)),h)}function Wo(r,s,c,h){for(var v=r.length,b=h?v:-1;(h?b--:++b<v)&&s(r[b],b,r););return c?mn(r,h?0:b,h?b+1:v):mn(r,h?b+1:0,h?v:b)}function uh(r,s){var c=r;return c instanceof Fe&&(c=c.value()),zl(s,function(h,v){return v.func.apply(v.thisArg,kr([h],v.args))},c)}function hc(r,s,c){var h=r.length;if(h<2)return h?Ar(r[0]):[];for(var v=-1,b=U(h);++v<h;)for(var T=r[v],O=-1;++O<h;)O!=v&&(b[v]=Ss(b[v]||T,r[O],s,c));return Ar(At(b,1),s,c)}function dh(r,s,c){for(var h=-1,v=r.length,b=s.length,T={};++h<v;){var O=h<b?s[h]:n;c(T,r[h],O)}return T}function pc(r){return dt(r)?r:[]}function gc(r){return typeof r=="function"?r:Gt}function Ir(r,s){return Oe(r)?r:Ec(r,s)?[r]:Uh(Qe(r))}var gb=Ne;function Rr(r,s,c){var h=r.length;return c=c===n?h:c,!s&&c>=h?r:mn(r,s,c)}var fh=ny||function(r){return Tt.clearTimeout(r)};function hh(r,s){if(s)return r.slice();var c=r.length,h=Pf?Pf(c):new r.constructor(c);return r.copy(h),h}function vc(r){var s=new r.constructor(r.byteLength);return new Io(s).set(new Io(r)),s}function vb(r,s){var c=s?vc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function mb(r){var s=new r.constructor(r.source,Gd.exec(r));return s.lastIndex=r.lastIndex,s}function yb(r){return ks?Xe(ks.call(r)):{}}function ph(r,s){var c=s?vc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function gh(r,s){if(r!==s){var c=r!==n,h=r===null,v=r===r,b=rn(r),T=s!==n,O=s===null,M=s===s,H=rn(s);if(!O&&!H&&!b&&r>s||b&&T&&M&&!O&&!H||h&&T&&M||!c&&M||!v)return 1;if(!h&&!b&&!H&&r<s||H&&c&&v&&!h&&!b||O&&c&&v||!T&&v||!M)return-1}return 0}function bb(r,s,c){for(var h=-1,v=r.criteria,b=s.criteria,T=v.length,O=c.length;++h<T;){var M=gh(v[h],b[h]);if(M){if(h>=O)return M;var H=c[h];return M*(H=="desc"?-1:1)}}return r.index-s.index}function vh(r,s,c,h){for(var v=-1,b=r.length,T=c.length,O=-1,M=s.length,H=wt(b-T,0),W=U(M+H),Q=!h;++O<M;)W[O]=s[O];for(;++v<T;)(Q||v<b)&&(W[c[v]]=r[v]);for(;H--;)W[O++]=r[v++];return W}function mh(r,s,c,h){for(var v=-1,b=r.length,T=-1,O=c.length,M=-1,H=s.length,W=wt(b-O,0),Q=U(W+H),ce=!h;++v<W;)Q[v]=r[v];for(var me=v;++M<H;)Q[me+M]=s[M];for(;++T<O;)(ce||v<b)&&(Q[me+c[T]]=r[v++]);return Q}function Zt(r,s){var c=-1,h=r.length;for(s||(s=U(h));++c<h;)s[c]=r[c];return s}function zn(r,s,c,h){var v=!c;c||(c={});for(var b=-1,T=s.length;++b<T;){var O=s[b],M=h?h(c[O],r[O],O,c,r):n;M===n&&(M=r[O]),v?or(c,O,M):Cs(c,O,M)}return c}function _b(r,s){return zn(r,$c(r),s)}function wb(r,s){return zn(r,Ih(r),s)}function qo(r,s){return function(c,h){var v=Oe(c)?C2:Hy,b=s?s():{};return v(c,r,xe(h,2),b)}}function Bi(r){return Ne(function(s,c){var h=-1,v=c.length,b=v>1?c[v-1]:n,T=v>2?c[2]:n;for(b=r.length>3&&typeof b=="function"?(v--,b):n,T&&Nt(c[0],c[1],T)&&(b=v<3?n:b,v=1),s=Xe(s);++h<v;){var O=c[h];O&&r(s,O,h,b)}return s})}function yh(r,s){return function(c,h){if(c==null)return c;if(!Kt(c))return r(c,h);for(var v=c.length,b=s?v:-1,T=Xe(c);(s?b--:++b<v)&&h(T[b],b,T)!==!1;);return c}}function bh(r){return function(s,c,h){for(var v=-1,b=Xe(s),T=h(s),O=T.length;O--;){var M=T[r?O:++v];if(c(b[M],M,b)===!1)break}return s}}function xb(r,s,c){var h=s&x,v=Rs(r);function b(){var T=this&&this!==Tt&&this instanceof b?v:r;return T.apply(h?c:this,arguments)}return b}function _h(r){return function(s){s=Qe(s);var c=Ai(s)?An(s):n,h=c?c[0]:s.charAt(0),v=c?Rr(c,1).join(""):s.slice(1);return h[r]()+v}}function ji(r){return function(s){return zl(yp(mp(s).replace(f2,"")),r,"")}}function Rs(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Mi(r.prototype),h=r.apply(c,s);return lt(h)?h:c}}function $b(r,s,c){var h=Rs(r);function v(){for(var b=arguments.length,T=U(b),O=b,M=Ni(v);O--;)T[O]=arguments[O];var H=b<3&&T[0]!==M&&T[b-1]!==M?[]:Cr(T,M);if(b-=H.length,b<c)return kh(r,s,Zo,v.placeholder,n,T,H,n,n,c-b);var W=this&&this!==Tt&&this instanceof v?h:r;return en(W,this,T)}return v}function wh(r){return function(s,c,h){var v=Xe(s);if(!Kt(s)){var b=xe(c,3);s=$t(s),c=function(O){return b(v[O],O,v)}}var T=r(s,c,h);return T>-1?v[b?s[T]:T]:n}}function xh(r){return lr(function(s){var c=s.length,h=c,v=gn.prototype.thru;for(r&&s.reverse();h--;){var b=s[h];if(typeof b!="function")throw new pn(l);if(v&&!T&&Qo(b)=="wrapper")var T=new gn([],!0)}for(h=T?h:c;++h<c;){b=s[h];var O=Qo(b),M=O=="wrapper"?wc(b):n;M&&kc(M[0])&&M[1]==(N|E|L|D)&&!M[4].length&&M[9]==1?T=T[Qo(M[0])].apply(T,M[3]):T=b.length==1&&kc(b)?T[O]():T.thru(b)}return function(){var H=arguments,W=H[0];if(T&&H.length==1&&Oe(W))return T.plant(W).value();for(var Q=0,ce=c?s[Q].apply(this,H):W;++Q<c;)ce=s[Q].call(this,ce);return ce}})}function Zo(r,s,c,h,v,b,T,O,M,H){var W=s&N,Q=s&x,ce=s&k,me=s&(E|S),Ee=s&K,Me=ce?n:Rs(r);function ke(){for(var Ue=arguments.length,He=U(Ue),sn=Ue;sn--;)He[sn]=arguments[sn];if(me)var Dt=Ni(ke),on=M2(He,Dt);if(h&&(He=vh(He,h,v,me)),b&&(He=mh(He,b,T,me)),Ue-=on,me&&Ue<H){var ft=Cr(He,Dt);return kh(r,s,Zo,ke.placeholder,c,He,ft,O,M,H-Ue)}var On=Q?c:this,fr=ce?On[r]:r;return Ue=He.length,O?He=Hb(He,O):Ee&&Ue>1&&He.reverse(),W&&M<Ue&&(He.length=M),this&&this!==Tt&&this instanceof ke&&(fr=Me||Rs(fr)),fr.apply(On,He)}return ke}function $h(r,s){return function(c,h){return Jy(c,r,s(h),{})}}function Ko(r,s){return function(c,h){var v;if(c===n&&h===n)return s;if(c!==n&&(v=c),h!==n){if(v===n)return h;typeof c=="string"||typeof h=="string"?(c=nn(c),h=nn(h)):(c=lh(c),h=lh(h)),v=r(c,h)}return v}}function mc(r){return lr(function(s){return s=at(s,tn(xe())),Ne(function(c){var h=this;return r(s,function(v){return en(v,h,c)})})})}function Vo(r,s){s=s===n?" ":nn(s);var c=s.length;if(c<2)return c?uc(s,r):s;var h=uc(s,Po(r/Ii(s)));return Ai(s)?Rr(An(h),0,r).join(""):h.slice(0,r)}function Eb(r,s,c,h){var v=s&x,b=Rs(r);function T(){for(var O=-1,M=arguments.length,H=-1,W=h.length,Q=U(W+M),ce=this&&this!==Tt&&this instanceof T?b:r;++H<W;)Q[H]=h[H];for(;M--;)Q[H++]=arguments[++O];return en(ce,v?c:this,Q)}return T}function Eh(r){return function(s,c,h){return h&&typeof h!="number"&&Nt(s,c,h)&&(c=h=n),s=dr(s),c===n?(c=s,s=0):c=dr(c),h=h===n?s<c?1:-1:dr(h),cb(s,c,h,r)}}function Go(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=bn(s),c=bn(c)),r(s,c)}}function kh(r,s,c,h,v,b,T,O,M,H){var W=s&E,Q=W?T:n,ce=W?n:T,me=W?b:n,Ee=W?n:b;s|=W?L:R,s&=~(W?R:L),s&I||(s&=~(x|k));var Me=[r,s,v,me,Q,Ee,ce,O,M,H],ke=c.apply(n,Me);return kc(r)&&jh(ke,Me),ke.placeholder=h,Nh(ke,r,s)}function yc(r){var s=_t[r];return function(c,h){if(c=bn(c),h=h==null?0:Lt(Pe(h),292),h&&Nf(c)){var v=(Qe(c)+"e").split("e"),b=s(v[0]+"e"+(+v[1]+h));return v=(Qe(b)+"e").split("e"),+(v[0]+"e"+(+v[1]-h))}return s(c)}}var kb=Li&&1/Eo(new Li([,-0]))[1]==ee?function(r){return new Li(r)}:Uc;function Ch(r){return function(s){var c=Pt(s);return c==Se?Vl(s):c==St?F2(s):P2(s,r(s))}}function ar(r,s,c,h,v,b,T,O){var M=s&k;if(!M&&typeof r!="function")throw new pn(l);var H=h?h.length:0;if(H||(s&=~(L|R),h=v=n),T=T===n?T:wt(Pe(T),0),O=O===n?O:Pe(O),H-=v?v.length:0,s&R){var W=h,Q=v;h=v=n}var ce=M?n:wc(r),me=[r,s,c,h,v,W,Q,b,T,O];if(ce&&Ub(me,ce),r=me[0],s=me[1],c=me[2],h=me[3],v=me[4],O=me[9]=me[9]===n?M?0:r.length:wt(me[9]-H,0),!O&&s&(E|S)&&(s&=~(E|S)),!s||s==x)var Ee=xb(r,s,c);else s==E||s==S?Ee=$b(r,s,O):(s==L||s==(x|L))&&!v.length?Ee=Eb(r,s,c,h):Ee=Zo.apply(n,me);var Me=ce?oh:jh;return Nh(Me(Ee,me),r,s)}function Sh(r,s,c,h){return r===n||Rn(r,Oi[c])&&!Je.call(h,c)?s:r}function Th(r,s,c,h,v,b){return lt(r)&&lt(s)&&(b.set(s,r),Fo(r,s,n,Th,b),b.delete(s)),r}function Cb(r){return Ps(r)?n:r}function Ah(r,s,c,h,v,b){var T=c&_,O=r.length,M=s.length;if(O!=M&&!(T&&M>O))return!1;var H=b.get(r),W=b.get(s);if(H&&W)return H==s&&W==r;var Q=-1,ce=!0,me=c&$?new Xr:n;for(b.set(r,s),b.set(s,r);++Q<O;){var Ee=r[Q],Me=s[Q];if(h)var ke=T?h(Me,Ee,Q,s,r,b):h(Ee,Me,Q,r,s,b);if(ke!==n){if(ke)continue;ce=!1;break}if(me){if(!Fl(s,function(Ue,He){if(!_s(me,He)&&(Ee===Ue||v(Ee,Ue,c,h,b)))return me.push(He)})){ce=!1;break}}else if(!(Ee===Me||v(Ee,Me,c,h,b))){ce=!1;break}}return b.delete(r),b.delete(s),ce}function Sb(r,s,c,h,v,b,T){switch(c){case qt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Wt:return!(r.byteLength!=s.byteLength||!b(new Io(r),new Io(s)));case G:case _e:case it:return Rn(+r,+s);case J:return r.name==s.name&&r.message==s.message;case En:case Xt:return r==s+"";case Se:var O=Vl;case St:var M=h&_;if(O||(O=Eo),r.size!=s.size&&!M)return!1;var H=T.get(r);if(H)return H==s;h|=$,T.set(r,s);var W=Ah(O(r),O(s),h,v,b,T);return T.delete(r),W;case Dn:if(ks)return ks.call(r)==ks.call(s)}return!1}function Tb(r,s,c,h,v,b){var T=c&_,O=bc(r),M=O.length,H=bc(s),W=H.length;if(M!=W&&!T)return!1;for(var Q=M;Q--;){var ce=O[Q];if(!(T?ce in s:Je.call(s,ce)))return!1}var me=b.get(r),Ee=b.get(s);if(me&&Ee)return me==s&&Ee==r;var Me=!0;b.set(r,s),b.set(s,r);for(var ke=T;++Q<M;){ce=O[Q];var Ue=r[ce],He=s[ce];if(h)var sn=T?h(He,Ue,ce,s,r,b):h(Ue,He,ce,r,s,b);if(!(sn===n?Ue===He||v(Ue,He,c,h,b):sn)){Me=!1;break}ke||(ke=ce=="constructor")}if(Me&&!ke){var Dt=r.constructor,on=s.constructor;Dt!=on&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof on=="function"&&on instanceof on)&&(Me=!1)}return b.delete(r),b.delete(s),Me}function lr(r){return Sc(Mh(r,n,Wh),r+"")}function bc(r){return Gf(r,$t,$c)}function _c(r){return Gf(r,Vt,Ih)}var wc=Bo?function(r){return Bo.get(r)}:Uc;function Qo(r){for(var s=r.name+"",c=Pi[s],h=Je.call(Pi,s)?c.length:0;h--;){var v=c[h],b=v.func;if(b==null||b==r)return v.name}return s}function Ni(r){var s=Je.call(y,"placeholder")?y:r;return s.placeholder}function xe(){var r=y.iteratee||Nc;return r=r===Nc?Yf:r,arguments.length?r(arguments[0],arguments[1]):r}function Jo(r,s){var c=r.__data__;return Bb(s)?c[typeof s=="string"?"string":"hash"]:c.map}function xc(r){for(var s=$t(r),c=s.length;c--;){var h=s[c],v=r[h];s[c]=[h,v,Lh(v)]}return s}function ni(r,s){var c=D2(r,s);return Jf(c)?c:n}function Ab(r){var s=Je.call(r,Jr),c=r[Jr];try{r[Jr]=n;var h=!0}catch{}var v=To.call(r);return h&&(s?r[Jr]=c:delete r[Jr]),v}var $c=Ql?function(r){return r==null?[]:(r=Xe(r),Er(Ql(r),function(s){return Bf.call(r,s)}))}:zc,Ih=Ql?function(r){for(var s=[];r;)kr(s,$c(r)),r=Ro(r);return s}:zc,Pt=jt;(Jl&&Pt(new Jl(new ArrayBuffer(1)))!=qt||xs&&Pt(new xs)!=Se||Yl&&Pt(Yl.resolve())!=Ht||Li&&Pt(new Li)!=St||$s&&Pt(new $s)!=kn)&&(Pt=function(r){var s=jt(r),c=s==Ct?r.constructor:n,h=c?ri(c):"";if(h)switch(h){case dy:return qt;case fy:return Se;case hy:return Ht;case py:return St;case gy:return kn}return s});function Ib(r,s,c){for(var h=-1,v=c.length;++h<v;){var b=c[h],T=b.size;switch(b.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Lt(s,r+T);break;case"takeRight":r=wt(r,s-T);break}}return{start:r,end:s}}function Rb(r){var s=r.match(jm);return s?s[1].split(Nm):[]}function Rh(r,s,c){s=Ir(s,r);for(var h=-1,v=s.length,b=!1;++h<v;){var T=Fn(s[h]);if(!(b=r!=null&&c(r,T)))break;r=r[T]}return b||++h!=v?b:(v=r==null?0:r.length,!!v&&ia(v)&&cr(T,v)&&(Oe(r)||ii(r)))}function Ob(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Je.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Oh(r){return typeof r.constructor=="function"&&!Os(r)?Mi(Ro(r)):{}}function Lb(r,s,c){var h=r.constructor;switch(s){case Wt:return vc(r);case G:case _e:return new h(+r);case qt:return vb(r,c);case Cn:case Sn:case un:case dn:case Tn:case tr:case nr:case rr:case Ci:return ph(r,c);case Se:return new h;case it:case Xt:return new h(r);case En:return mb(r);case St:return new h;case Dn:return yb(r)}}function Pb(r,s){var c=s.length;if(!c)return r;var h=c-1;return s[h]=(c>1?"& ":"")+s[h],s=s.join(c>2?", ":" "),r.replace(Bm,`{
/* [wrapped with `+s+`] */
`)}function Mb(r){return Oe(r)||ii(r)||!!(jf&&r&&r[jf])}function cr(r,s){var c=typeof r;return s=s??le,!!s&&(c=="number"||c!="symbol"&&Km.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,c){if(!lt(c))return!1;var h=typeof s;return(h=="number"?Kt(c)&&cr(s,c.length):h=="string"&&s in c)?Rn(c[s],r):!1}function Ec(r,s){if(Oe(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||rn(r)?!0:Om.test(r)||!Rm.test(r)||s!=null&&r in Xe(s)}function Bb(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function kc(r){var s=Qo(r),c=y[s];if(typeof c!="function"||!(s in Fe.prototype))return!1;if(r===c)return!0;var h=wc(c);return!!h&&r===h[0]}function jb(r){return!!Lf&&Lf in r}var Nb=Co?ur:Fc;function Os(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Oi;return r===c}function Lh(r){return r===r&&!lt(r)}function Ph(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Xe(c))}}function Db(r){var s=na(r,function(h){return c.size===f&&c.clear(),h}),c=s.cache;return s}function Ub(r,s){var c=r[1],h=s[1],v=c|h,b=v<(x|k|N),T=h==N&&c==E||h==N&&c==D&&r[7].length<=s[8]||h==(N|D)&&s[7].length<=s[8]&&c==E;if(!(b||T))return r;h&x&&(r[2]=s[2],v|=c&x?0:I);var O=s[3];if(O){var M=r[3];r[3]=M?vh(M,O,s[4]):O,r[4]=M?Cr(r[3],p):s[4]}return O=s[5],O&&(M=r[5],r[5]=M?mh(M,O,s[6]):O,r[6]=M?Cr(r[5],p):s[6]),O=s[7],O&&(r[7]=O),h&N&&(r[8]=r[8]==null?s[8]:Lt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=v,r}function zb(r){var s=[];if(r!=null)for(var c in Xe(r))s.push(c);return s}function Fb(r){return To.call(r)}function Mh(r,s,c){return s=wt(s===n?r.length-1:s,0),function(){for(var h=arguments,v=-1,b=wt(h.length-s,0),T=U(b);++v<b;)T[v]=h[s+v];v=-1;for(var O=U(s+1);++v<s;)O[v]=h[v];return O[s]=c(T),en(r,this,O)}}function Bh(r,s){return s.length<2?r:ti(r,mn(s,0,-1))}function Hb(r,s){for(var c=r.length,h=Lt(s.length,c),v=Zt(r);h--;){var b=s[h];r[h]=cr(b,c)?v[b]:n}return r}function Cc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var jh=Dh(oh),Ls=iy||function(r,s){return Tt.setTimeout(r,s)},Sc=Dh(fb);function Nh(r,s,c){var h=s+"";return Sc(r,Pb(h,Wb(Rb(h),c)))}function Dh(r){var s=0,c=0;return function(){var h=ly(),v=se-(h-c);if(c=h,v>0){if(++s>=ie)return arguments[0]}else s=0;return r.apply(n,arguments)}}function Yo(r,s){var c=-1,h=r.length,v=h-1;for(s=s===n?h:s;++c<s;){var b=cc(c,v),T=r[b];r[b]=r[c],r[c]=T}return r.length=s,r}var Uh=Db(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Lm,function(c,h,v,b){s.push(v?b.replace(zm,"$1"):h||c)}),s});function Fn(r){if(typeof r=="string"||rn(r))return r;var s=r+"";return s=="0"&&1/r==-ee?"-0":s}function ri(r){if(r!=null){try{return So.call(r)}catch{}try{return r+""}catch{}}return""}function Wb(r,s){return hn(ue,function(c){var h="_."+c[0];s&c[1]&&!xo(r,h)&&r.push(h)}),r.sort()}function zh(r){if(r instanceof Fe)return r.clone();var s=new gn(r.__wrapped__,r.__chain__);return s.__actions__=Zt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function qb(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=wt(Pe(s),0);var h=r==null?0:r.length;if(!h||s<1)return[];for(var v=0,b=0,T=U(Po(h/s));v<h;)T[b++]=mn(r,v,v+=s);return T}function Zb(r){for(var s=-1,c=r==null?0:r.length,h=0,v=[];++s<c;){var b=r[s];b&&(v[h++]=b)}return v}function Kb(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),c=arguments[0],h=r;h--;)s[h-1]=arguments[h];return kr(Oe(c)?Zt(c):[c],At(s,1))}var Vb=Ne(function(r,s){return dt(r)?Ss(r,At(s,1,dt,!0)):[]}),Gb=Ne(function(r,s){var c=yn(s);return dt(c)&&(c=n),dt(r)?Ss(r,At(s,1,dt,!0),xe(c,2)):[]}),Qb=Ne(function(r,s){var c=yn(s);return dt(c)&&(c=n),dt(r)?Ss(r,At(s,1,dt,!0),n,c):[]});function Jb(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),mn(r,s<0?0:s,h)):[]}function Yb(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),s=h-s,mn(r,0,s<0?0:s)):[]}function Xb(r,s){return r&&r.length?Wo(r,xe(s,3),!0,!0):[]}function e_(r,s){return r&&r.length?Wo(r,xe(s,3),!0):[]}function t_(r,s,c,h){var v=r==null?0:r.length;return v?(c&&typeof c!="number"&&Nt(r,s,c)&&(c=0,h=v),Ky(r,s,c,h)):[]}function Fh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Pe(c);return v<0&&(v=wt(h+v,0)),$o(r,xe(s,3),v)}function Hh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h-1;return c!==n&&(v=Pe(c),v=c<0?wt(h+v,0):Lt(v,h-1)),$o(r,xe(s,3),v,!0)}function Wh(r){var s=r==null?0:r.length;return s?At(r,1):[]}function n_(r){var s=r==null?0:r.length;return s?At(r,ee):[]}function r_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Pe(s),At(r,s)):[]}function i_(r){for(var s=-1,c=r==null?0:r.length,h={};++s<c;){var v=r[s];h[v[0]]=v[1]}return h}function qh(r){return r&&r.length?r[0]:n}function s_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Pe(c);return v<0&&(v=wt(h+v,0)),Ti(r,s,v)}function o_(r){var s=r==null?0:r.length;return s?mn(r,0,-1):[]}var a_=Ne(function(r){var s=at(r,pc);return s.length&&s[0]===r[0]?ic(s):[]}),l_=Ne(function(r){var s=yn(r),c=at(r,pc);return s===yn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?ic(c,xe(s,2)):[]}),c_=Ne(function(r){var s=yn(r),c=at(r,pc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?ic(c,n,s):[]});function u_(r,s){return r==null?"":oy.call(r,s)}function yn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function d_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h;return c!==n&&(v=Pe(c),v=v<0?wt(h+v,0):Lt(v,h-1)),s===s?W2(r,s,v):$o(r,kf,v,!0)}function f_(r,s){return r&&r.length?nh(r,Pe(s)):n}var h_=Ne(Zh);function Zh(r,s){return r&&r.length&&s&&s.length?lc(r,s):r}function p_(r,s,c){return r&&r.length&&s&&s.length?lc(r,s,xe(c,2)):r}function g_(r,s,c){return r&&r.length&&s&&s.length?lc(r,s,n,c):r}var v_=lr(function(r,s){var c=r==null?0:r.length,h=ec(r,s);return sh(r,at(s,function(v){return cr(v,c)?+v:v}).sort(gh)),h});function m_(r,s){var c=[];if(!(r&&r.length))return c;var h=-1,v=[],b=r.length;for(s=xe(s,3);++h<b;){var T=r[h];s(T,h,r)&&(c.push(T),v.push(h))}return sh(r,v),c}function Tc(r){return r==null?r:uy.call(r)}function y_(r,s,c){var h=r==null?0:r.length;return h?(c&&typeof c!="number"&&Nt(r,s,c)?(s=0,c=h):(s=s==null?0:Pe(s),c=c===n?h:Pe(c)),mn(r,s,c)):[]}function b_(r,s){return Ho(r,s)}function __(r,s,c){return dc(r,s,xe(c,2))}function w_(r,s){var c=r==null?0:r.length;if(c){var h=Ho(r,s);if(h<c&&Rn(r[h],s))return h}return-1}function x_(r,s){return Ho(r,s,!0)}function $_(r,s,c){return dc(r,s,xe(c,2),!0)}function E_(r,s){var c=r==null?0:r.length;if(c){var h=Ho(r,s,!0)-1;if(Rn(r[h],s))return h}return-1}function k_(r){return r&&r.length?ah(r):[]}function C_(r,s){return r&&r.length?ah(r,xe(s,2)):[]}function S_(r){var s=r==null?0:r.length;return s?mn(r,1,s):[]}function T_(r,s,c){return r&&r.length?(s=c||s===n?1:Pe(s),mn(r,0,s<0?0:s)):[]}function A_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),s=h-s,mn(r,s<0?0:s,h)):[]}function I_(r,s){return r&&r.length?Wo(r,xe(s,3),!1,!0):[]}function R_(r,s){return r&&r.length?Wo(r,xe(s,3)):[]}var O_=Ne(function(r){return Ar(At(r,1,dt,!0))}),L_=Ne(function(r){var s=yn(r);return dt(s)&&(s=n),Ar(At(r,1,dt,!0),xe(s,2))}),P_=Ne(function(r){var s=yn(r);return s=typeof s=="function"?s:n,Ar(At(r,1,dt,!0),n,s)});function M_(r){return r&&r.length?Ar(r):[]}function B_(r,s){return r&&r.length?Ar(r,xe(s,2)):[]}function j_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Ar(r,n,s):[]}function Ac(r){if(!(r&&r.length))return[];var s=0;return r=Er(r,function(c){if(dt(c))return s=wt(c.length,s),!0}),Zl(s,function(c){return at(r,Hl(c))})}function Kh(r,s){if(!(r&&r.length))return[];var c=Ac(r);return s==null?c:at(c,function(h){return en(s,n,h)})}var N_=Ne(function(r,s){return dt(r)?Ss(r,s):[]}),D_=Ne(function(r){return hc(Er(r,dt))}),U_=Ne(function(r){var s=yn(r);return dt(s)&&(s=n),hc(Er(r,dt),xe(s,2))}),z_=Ne(function(r){var s=yn(r);return s=typeof s=="function"?s:n,hc(Er(r,dt),n,s)}),F_=Ne(Ac);function H_(r,s){return dh(r||[],s||[],Cs)}function W_(r,s){return dh(r||[],s||[],Is)}var q_=Ne(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Kh(r,c)});function Vh(r){var s=y(r);return s.__chain__=!0,s}function Z_(r,s){return s(r),r}function Xo(r,s){return s(r)}var K_=lr(function(r){var s=r.length,c=s?r[0]:0,h=this.__wrapped__,v=function(b){return ec(b,r)};return s>1||this.__actions__.length||!(h instanceof Fe)||!cr(c)?this.thru(v):(h=h.slice(c,+c+(s?1:0)),h.__actions__.push({func:Xo,args:[v],thisArg:n}),new gn(h,this.__chain__).thru(function(b){return s&&!b.length&&b.push(n),b}))});function V_(){return Vh(this)}function G_(){return new gn(this.value(),this.__chain__)}function Q_(){this.__values__===n&&(this.__values__=lp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function J_(){return this}function Y_(r){for(var s,c=this;c instanceof No;){var h=zh(c);h.__index__=0,h.__values__=n,s?v.__wrapped__=h:s=h;var v=h;c=c.__wrapped__}return v.__wrapped__=r,s}function X_(){var r=this.__wrapped__;if(r instanceof Fe){var s=r;return this.__actions__.length&&(s=new Fe(this)),s=s.reverse(),s.__actions__.push({func:Xo,args:[Tc],thisArg:n}),new gn(s,this.__chain__)}return this.thru(Tc)}function ew(){return uh(this.__wrapped__,this.__actions__)}var tw=qo(function(r,s,c){Je.call(r,c)?++r[c]:or(r,c,1)});function nw(r,s,c){var h=Oe(r)?$f:Zy;return c&&Nt(r,s,c)&&(s=n),h(r,xe(s,3))}function rw(r,s){var c=Oe(r)?Er:Kf;return c(r,xe(s,3))}var iw=wh(Fh),sw=wh(Hh);function ow(r,s){return At(ea(r,s),1)}function aw(r,s){return At(ea(r,s),ee)}function lw(r,s,c){return c=c===n?1:Pe(c),At(ea(r,s),c)}function Gh(r,s){var c=Oe(r)?hn:Tr;return c(r,xe(s,3))}function Qh(r,s){var c=Oe(r)?S2:Zf;return c(r,xe(s,3))}var cw=qo(function(r,s,c){Je.call(r,c)?r[c].push(s):or(r,c,[s])});function uw(r,s,c,h){r=Kt(r)?r:Ui(r),c=c&&!h?Pe(c):0;var v=r.length;return c<0&&(c=wt(v+c,0)),sa(r)?c<=v&&r.indexOf(s,c)>-1:!!v&&Ti(r,s,c)>-1}var dw=Ne(function(r,s,c){var h=-1,v=typeof s=="function",b=Kt(r)?U(r.length):[];return Tr(r,function(T){b[++h]=v?en(s,T,c):Ts(T,s,c)}),b}),fw=qo(function(r,s,c){or(r,c,s)});function ea(r,s){var c=Oe(r)?at:Xf;return c(r,xe(s,3))}function hw(r,s,c,h){return r==null?[]:(Oe(s)||(s=s==null?[]:[s]),c=h?n:c,Oe(c)||(c=c==null?[]:[c]),rh(r,s,c))}var pw=qo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function gw(r,s,c){var h=Oe(r)?zl:Sf,v=arguments.length<3;return h(r,xe(s,4),c,v,Tr)}function vw(r,s,c){var h=Oe(r)?T2:Sf,v=arguments.length<3;return h(r,xe(s,4),c,v,Zf)}function mw(r,s){var c=Oe(r)?Er:Kf;return c(r,ra(xe(s,3)))}function yw(r){var s=Oe(r)?Ff:ub;return s(r)}function bw(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=Pe(s);var h=Oe(r)?zy:db;return h(r,s)}function _w(r){var s=Oe(r)?Fy:hb;return s(r)}function ww(r){if(r==null)return 0;if(Kt(r))return sa(r)?Ii(r):r.length;var s=Pt(r);return s==Se||s==St?r.size:oc(r).length}function xw(r,s,c){var h=Oe(r)?Fl:pb;return c&&Nt(r,s,c)&&(s=n),h(r,xe(s,3))}var $w=Ne(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Nt(r,s[0],s[1])?s=[]:c>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),rh(r,At(s,1),[])}),ta=ry||function(){return Tt.Date.now()};function Ew(r,s){if(typeof s!="function")throw new pn(l);return r=Pe(r),function(){if(--r<1)return s.apply(this,arguments)}}function Jh(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,ar(r,N,n,n,n,n,s)}function Yh(r,s){var c;if(typeof s!="function")throw new pn(l);return r=Pe(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Ic=Ne(function(r,s,c){var h=x;if(c.length){var v=Cr(c,Ni(Ic));h|=L}return ar(r,h,s,c,v)}),Xh=Ne(function(r,s,c){var h=x|k;if(c.length){var v=Cr(c,Ni(Xh));h|=L}return ar(s,h,r,c,v)});function ep(r,s,c){s=c?n:s;var h=ar(r,E,n,n,n,n,n,s);return h.placeholder=ep.placeholder,h}function tp(r,s,c){s=c?n:s;var h=ar(r,S,n,n,n,n,n,s);return h.placeholder=tp.placeholder,h}function np(r,s,c){var h,v,b,T,O,M,H=0,W=!1,Q=!1,ce=!0;if(typeof r!="function")throw new pn(l);s=bn(s)||0,lt(c)&&(W=!!c.leading,Q="maxWait"in c,b=Q?wt(bn(c.maxWait)||0,s):b,ce="trailing"in c?!!c.trailing:ce);function me(ft){var On=h,fr=v;return h=v=n,H=ft,T=r.apply(fr,On),T}function Ee(ft){return H=ft,O=Ls(Ue,s),W?me(ft):T}function Me(ft){var On=ft-M,fr=ft-H,wp=s-On;return Q?Lt(wp,b-fr):wp}function ke(ft){var On=ft-M,fr=ft-H;return M===n||On>=s||On<0||Q&&fr>=b}function Ue(){var ft=ta();if(ke(ft))return He(ft);O=Ls(Ue,Me(ft))}function He(ft){return O=n,ce&&h?me(ft):(h=v=n,T)}function sn(){O!==n&&fh(O),H=0,h=M=v=O=n}function Dt(){return O===n?T:He(ta())}function on(){var ft=ta(),On=ke(ft);if(h=arguments,v=this,M=ft,On){if(O===n)return Ee(M);if(Q)return fh(O),O=Ls(Ue,s),me(M)}return O===n&&(O=Ls(Ue,s)),T}return on.cancel=sn,on.flush=Dt,on}var kw=Ne(function(r,s){return qf(r,1,s)}),Cw=Ne(function(r,s,c){return qf(r,bn(s)||0,c)});function Sw(r){return ar(r,K)}function na(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new pn(l);var c=function(){var h=arguments,v=s?s.apply(this,h):h[0],b=c.cache;if(b.has(v))return b.get(v);var T=r.apply(this,h);return c.cache=b.set(v,T)||b,T};return c.cache=new(na.Cache||sr),c}na.Cache=sr;function ra(r){if(typeof r!="function")throw new pn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Tw(r){return Yh(2,r)}var Aw=gb(function(r,s){s=s.length==1&&Oe(s[0])?at(s[0],tn(xe())):at(At(s,1),tn(xe()));var c=s.length;return Ne(function(h){for(var v=-1,b=Lt(h.length,c);++v<b;)h[v]=s[v].call(this,h[v]);return en(r,this,h)})}),Rc=Ne(function(r,s){var c=Cr(s,Ni(Rc));return ar(r,L,n,s,c)}),rp=Ne(function(r,s){var c=Cr(s,Ni(rp));return ar(r,R,n,s,c)}),Iw=lr(function(r,s){return ar(r,D,n,n,n,s)});function Rw(r,s){if(typeof r!="function")throw new pn(l);return s=s===n?s:Pe(s),Ne(r,s)}function Ow(r,s){if(typeof r!="function")throw new pn(l);return s=s==null?0:wt(Pe(s),0),Ne(function(c){var h=c[s],v=Rr(c,0,s);return h&&kr(v,h),en(r,this,v)})}function Lw(r,s,c){var h=!0,v=!0;if(typeof r!="function")throw new pn(l);return lt(c)&&(h="leading"in c?!!c.leading:h,v="trailing"in c?!!c.trailing:v),np(r,s,{leading:h,maxWait:s,trailing:v})}function Pw(r){return Jh(r,1)}function Mw(r,s){return Rc(gc(s),r)}function Bw(){if(!arguments.length)return[];var r=arguments[0];return Oe(r)?r:[r]}function jw(r){return vn(r,w)}function Nw(r,s){return s=typeof s=="function"?s:n,vn(r,w,s)}function Dw(r){return vn(r,g|w)}function Uw(r,s){return s=typeof s=="function"?s:n,vn(r,g|w,s)}function zw(r,s){return s==null||Wf(r,s,$t(s))}function Rn(r,s){return r===s||r!==r&&s!==s}var Fw=Go(rc),Hw=Go(function(r,s){return r>=s}),ii=Qf(function(){return arguments}())?Qf:function(r){return ut(r)&&Je.call(r,"callee")&&!Bf.call(r,"callee")},Oe=U.isArray,Ww=mf?tn(mf):Yy;function Kt(r){return r!=null&&ia(r.length)&&!ur(r)}function dt(r){return ut(r)&&Kt(r)}function qw(r){return r===!0||r===!1||ut(r)&&jt(r)==G}var Or=sy||Fc,Zw=yf?tn(yf):Xy;function Kw(r){return ut(r)&&r.nodeType===1&&!Ps(r)}function Vw(r){if(r==null)return!0;if(Kt(r)&&(Oe(r)||typeof r=="string"||typeof r.splice=="function"||Or(r)||Di(r)||ii(r)))return!r.length;var s=Pt(r);if(s==Se||s==St)return!r.size;if(Os(r))return!oc(r).length;for(var c in r)if(Je.call(r,c))return!1;return!0}function Gw(r,s){return As(r,s)}function Qw(r,s,c){c=typeof c=="function"?c:n;var h=c?c(r,s):n;return h===n?As(r,s,n,c):!!h}function Oc(r){if(!ut(r))return!1;var s=jt(r);return s==J||s==Ge||typeof r.message=="string"&&typeof r.name=="string"&&!Ps(r)}function Jw(r){return typeof r=="number"&&Nf(r)}function ur(r){if(!lt(r))return!1;var s=jt(r);return s==Ze||s==pt||s==oe||s==Gr}function ip(r){return typeof r=="number"&&r==Pe(r)}function ia(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=le}function lt(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ut(r){return r!=null&&typeof r=="object"}var sp=bf?tn(bf):tb;function Yw(r,s){return r===s||sc(r,s,xc(s))}function Xw(r,s,c){return c=typeof c=="function"?c:n,sc(r,s,xc(s),c)}function e3(r){return op(r)&&r!=+r}function t3(r){if(Nb(r))throw new Ae(a);return Jf(r)}function n3(r){return r===null}function r3(r){return r==null}function op(r){return typeof r=="number"||ut(r)&&jt(r)==it}function Ps(r){if(!ut(r)||jt(r)!=Ct)return!1;var s=Ro(r);if(s===null)return!0;var c=Je.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&So.call(c)==X2}var Lc=_f?tn(_f):nb;function i3(r){return ip(r)&&r>=-le&&r<=le}var ap=wf?tn(wf):rb;function sa(r){return typeof r=="string"||!Oe(r)&&ut(r)&&jt(r)==Xt}function rn(r){return typeof r=="symbol"||ut(r)&&jt(r)==Dn}var Di=xf?tn(xf):ib;function s3(r){return r===n}function o3(r){return ut(r)&&Pt(r)==kn}function a3(r){return ut(r)&&jt(r)==Te}var l3=Go(ac),c3=Go(function(r,s){return r<=s});function lp(r){if(!r)return[];if(Kt(r))return sa(r)?An(r):Zt(r);if(ws&&r[ws])return z2(r[ws]());var s=Pt(r),c=s==Se?Vl:s==St?Eo:Ui;return c(r)}function dr(r){if(!r)return r===0?r:0;if(r=bn(r),r===ee||r===-ee){var s=r<0?-1:1;return s*Y}return r===r?r:0}function Pe(r){var s=dr(r),c=s%1;return s===s?c?s-c:s:0}function cp(r){return r?ei(Pe(r),0,ye):0}function bn(r){if(typeof r=="number")return r;if(rn(r))return ve;if(lt(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=lt(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Tf(r);var c=Wm.test(r);return c||Zm.test(r)?E2(r.slice(2),c?2:8):Hm.test(r)?ve:+r}function up(r){return zn(r,Vt(r))}function u3(r){return r?ei(Pe(r),-le,le):r===0?r:0}function Qe(r){return r==null?"":nn(r)}var d3=Bi(function(r,s){if(Os(s)||Kt(s)){zn(s,$t(s),r);return}for(var c in s)Je.call(s,c)&&Cs(r,c,s[c])}),dp=Bi(function(r,s){zn(s,Vt(s),r)}),oa=Bi(function(r,s,c,h){zn(s,Vt(s),r,h)}),f3=Bi(function(r,s,c,h){zn(s,$t(s),r,h)}),h3=lr(ec);function p3(r,s){var c=Mi(r);return s==null?c:Hf(c,s)}var g3=Ne(function(r,s){r=Xe(r);var c=-1,h=s.length,v=h>2?s[2]:n;for(v&&Nt(s[0],s[1],v)&&(h=1);++c<h;)for(var b=s[c],T=Vt(b),O=-1,M=T.length;++O<M;){var H=T[O],W=r[H];(W===n||Rn(W,Oi[H])&&!Je.call(r,H))&&(r[H]=b[H])}return r}),v3=Ne(function(r){return r.push(n,Th),en(fp,n,r)});function m3(r,s){return Ef(r,xe(s,3),Un)}function y3(r,s){return Ef(r,xe(s,3),nc)}function b3(r,s){return r==null?r:tc(r,xe(s,3),Vt)}function _3(r,s){return r==null?r:Vf(r,xe(s,3),Vt)}function w3(r,s){return r&&Un(r,xe(s,3))}function x3(r,s){return r&&nc(r,xe(s,3))}function $3(r){return r==null?[]:zo(r,$t(r))}function E3(r){return r==null?[]:zo(r,Vt(r))}function Pc(r,s,c){var h=r==null?n:ti(r,s);return h===n?c:h}function k3(r,s){return r!=null&&Rh(r,s,Vy)}function Mc(r,s){return r!=null&&Rh(r,s,Gy)}var C3=$h(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=To.call(s)),r[s]=c},jc(Gt)),S3=$h(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=To.call(s)),Je.call(r,s)?r[s].push(c):r[s]=[c]},xe),T3=Ne(Ts);function $t(r){return Kt(r)?zf(r):oc(r)}function Vt(r){return Kt(r)?zf(r,!0):sb(r)}function A3(r,s){var c={};return s=xe(s,3),Un(r,function(h,v,b){or(c,s(h,v,b),h)}),c}function I3(r,s){var c={};return s=xe(s,3),Un(r,function(h,v,b){or(c,v,s(h,v,b))}),c}var R3=Bi(function(r,s,c){Fo(r,s,c)}),fp=Bi(function(r,s,c,h){Fo(r,s,c,h)}),O3=lr(function(r,s){var c={};if(r==null)return c;var h=!1;s=at(s,function(b){return b=Ir(b,r),h||(h=b.length>1),b}),zn(r,_c(r),c),h&&(c=vn(c,g|m|w,Cb));for(var v=s.length;v--;)fc(c,s[v]);return c});function L3(r,s){return hp(r,ra(xe(s)))}var P3=lr(function(r,s){return r==null?{}:ab(r,s)});function hp(r,s){if(r==null)return{};var c=at(_c(r),function(h){return[h]});return s=xe(s),ih(r,c,function(h,v){return s(h,v[0])})}function M3(r,s,c){s=Ir(s,r);var h=-1,v=s.length;for(v||(v=1,r=n);++h<v;){var b=r==null?n:r[Fn(s[h])];b===n&&(h=v,b=c),r=ur(b)?b.call(r):b}return r}function B3(r,s,c){return r==null?r:Is(r,s,c)}function j3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:Is(r,s,c,h)}var pp=Ch($t),gp=Ch(Vt);function N3(r,s,c){var h=Oe(r),v=h||Or(r)||Di(r);if(s=xe(s,4),c==null){var b=r&&r.constructor;v?c=h?new b:[]:lt(r)?c=ur(b)?Mi(Ro(r)):{}:c={}}return(v?hn:Un)(r,function(T,O,M){return s(c,T,O,M)}),c}function D3(r,s){return r==null?!0:fc(r,s)}function U3(r,s,c){return r==null?r:ch(r,s,gc(c))}function z3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:ch(r,s,gc(c),h)}function Ui(r){return r==null?[]:Kl(r,$t(r))}function F3(r){return r==null?[]:Kl(r,Vt(r))}function H3(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=bn(c),c=c===c?c:0),s!==n&&(s=bn(s),s=s===s?s:0),ei(bn(r),s,c)}function W3(r,s,c){return s=dr(s),c===n?(c=s,s=0):c=dr(c),r=bn(r),Qy(r,s,c)}function q3(r,s,c){if(c&&typeof c!="boolean"&&Nt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=dr(r),s===n?(s=r,r=0):s=dr(s)),r>s){var h=r;r=s,s=h}if(c||r%1||s%1){var v=Df();return Lt(r+v*(s-r+$2("1e-"+((v+"").length-1))),s)}return cc(r,s)}var Z3=ji(function(r,s,c){return s=s.toLowerCase(),r+(c?vp(s):s)});function vp(r){return Bc(Qe(r).toLowerCase())}function mp(r){return r=Qe(r),r&&r.replace(Vm,B2).replace(h2,"")}function K3(r,s,c){r=Qe(r),s=nn(s);var h=r.length;c=c===n?h:ei(Pe(c),0,h);var v=c;return c-=s.length,c>=0&&r.slice(c,v)==s}function V3(r){return r=Qe(r),r&&Tm.test(r)?r.replace(Kd,j2):r}function G3(r){return r=Qe(r),r&&Pm.test(r)?r.replace(Rl,"\\$&"):r}var Q3=ji(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),J3=ji(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),Y3=_h("toLowerCase");function X3(r,s,c){r=Qe(r),s=Pe(s);var h=s?Ii(r):0;if(!s||h>=s)return r;var v=(s-h)/2;return Vo(Mo(v),c)+r+Vo(Po(v),c)}function ex(r,s,c){r=Qe(r),s=Pe(s);var h=s?Ii(r):0;return s&&h<s?r+Vo(s-h,c):r}function tx(r,s,c){r=Qe(r),s=Pe(s);var h=s?Ii(r):0;return s&&h<s?Vo(s-h,c)+r:r}function nx(r,s,c){return c||s==null?s=0:s&&(s=+s),cy(Qe(r).replace(Ol,""),s||0)}function rx(r,s,c){return(c?Nt(r,s,c):s===n)?s=1:s=Pe(s),uc(Qe(r),s)}function ix(){var r=arguments,s=Qe(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var sx=ji(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function ox(r,s,c){return c&&typeof c!="number"&&Nt(r,s,c)&&(s=c=n),c=c===n?ye:c>>>0,c?(r=Qe(r),r&&(typeof s=="string"||s!=null&&!Lc(s))&&(s=nn(s),!s&&Ai(r))?Rr(An(r),0,c):r.split(s,c)):[]}var ax=ji(function(r,s,c){return r+(c?" ":"")+Bc(s)});function lx(r,s,c){return r=Qe(r),c=c==null?0:ei(Pe(c),0,r.length),s=nn(s),r.slice(c,c+s.length)==s}function cx(r,s,c){var h=y.templateSettings;c&&Nt(r,s,c)&&(s=n),r=Qe(r),s=oa({},s,h,Sh);var v=oa({},s.imports,h.imports,Sh),b=$t(v),T=Kl(v,b),O,M,H=0,W=s.interpolate||bo,Q="__p += '",ce=Gl((s.escape||bo).source+"|"+W.source+"|"+(W===Vd?Fm:bo).source+"|"+(s.evaluate||bo).source+"|$","g"),me="//# sourceURL="+(Je.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++y2+"]")+`
`;r.replace(ce,function(ke,Ue,He,sn,Dt,on){return He||(He=sn),Q+=r.slice(H,on).replace(Gm,N2),Ue&&(O=!0,Q+=`' +
__e(`+Ue+`) +
'`),Dt&&(M=!0,Q+=`';
`+Dt+`;
__p += '`),He&&(Q+=`' +
((__t = (`+He+`)) == null ? '' : __t) +
'`),H=on+ke.length,ke}),Q+=`';
`;var Ee=Je.call(s,"variable")&&s.variable;if(!Ee)Q=`with (obj) {
`+Q+`
}
`;else if(Um.test(Ee))throw new Ae(u);Q=(M?Q.replace(yo,""):Q).replace(km,"$1").replace(Cm,"$1;"),Q="function("+(Ee||"obj")+`) {
`+(Ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Q+`return __p
}`;var Me=bp(function(){return Ve(b,me+"return "+Q).apply(n,T)});if(Me.source=Q,Oc(Me))throw Me;return Me}function ux(r){return Qe(r).toLowerCase()}function dx(r){return Qe(r).toUpperCase()}function fx(r,s,c){if(r=Qe(r),r&&(c||s===n))return Tf(r);if(!r||!(s=nn(s)))return r;var h=An(r),v=An(s),b=Af(h,v),T=If(h,v)+1;return Rr(h,b,T).join("")}function hx(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.slice(0,Of(r)+1);if(!r||!(s=nn(s)))return r;var h=An(r),v=If(h,An(s))+1;return Rr(h,0,v).join("")}function px(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.replace(Ol,"");if(!r||!(s=nn(s)))return r;var h=An(r),v=Af(h,An(s));return Rr(h,v).join("")}function gx(r,s){var c=te,h=ae;if(lt(s)){var v="separator"in s?s.separator:v;c="length"in s?Pe(s.length):c,h="omission"in s?nn(s.omission):h}r=Qe(r);var b=r.length;if(Ai(r)){var T=An(r);b=T.length}if(c>=b)return r;var O=c-Ii(h);if(O<1)return h;var M=T?Rr(T,0,O).join(""):r.slice(0,O);if(v===n)return M+h;if(T&&(O+=M.length-O),Lc(v)){if(r.slice(O).search(v)){var H,W=M;for(v.global||(v=Gl(v.source,Qe(Gd.exec(v))+"g")),v.lastIndex=0;H=v.exec(W);)var Q=H.index;M=M.slice(0,Q===n?O:Q)}}else if(r.indexOf(nn(v),O)!=O){var ce=M.lastIndexOf(v);ce>-1&&(M=M.slice(0,ce))}return M+h}function vx(r){return r=Qe(r),r&&Sm.test(r)?r.replace(Zd,q2):r}var mx=ji(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Bc=_h("toUpperCase");function yp(r,s,c){return r=Qe(r),s=c?n:s,s===n?U2(r)?V2(r):R2(r):r.match(s)||[]}var bp=Ne(function(r,s){try{return en(r,n,s)}catch(c){return Oc(c)?c:new Ae(c)}}),yx=lr(function(r,s){return hn(s,function(c){c=Fn(c),or(r,c,Ic(r[c],r))}),r});function bx(r){var s=r==null?0:r.length,c=xe();return r=s?at(r,function(h){if(typeof h[1]!="function")throw new pn(l);return[c(h[0]),h[1]]}):[],Ne(function(h){for(var v=-1;++v<s;){var b=r[v];if(en(b[0],this,h))return en(b[1],this,h)}})}function _x(r){return qy(vn(r,g))}function jc(r){return function(){return r}}function wx(r,s){return r==null||r!==r?s:r}var xx=xh(),$x=xh(!0);function Gt(r){return r}function Nc(r){return Yf(typeof r=="function"?r:vn(r,g))}function Ex(r){return eh(vn(r,g))}function kx(r,s){return th(r,vn(s,g))}var Cx=Ne(function(r,s){return function(c){return Ts(c,r,s)}}),Sx=Ne(function(r,s){return function(c){return Ts(r,c,s)}});function Dc(r,s,c){var h=$t(s),v=zo(s,h);c==null&&!(lt(s)&&(v.length||!h.length))&&(c=s,s=r,r=this,v=zo(s,$t(s)));var b=!(lt(c)&&"chain"in c)||!!c.chain,T=ur(r);return hn(v,function(O){var M=s[O];r[O]=M,T&&(r.prototype[O]=function(){var H=this.__chain__;if(b||H){var W=r(this.__wrapped__),Q=W.__actions__=Zt(this.__actions__);return Q.push({func:M,args:arguments,thisArg:r}),W.__chain__=H,W}return M.apply(r,kr([this.value()],arguments))})}),r}function Tx(){return Tt._===this&&(Tt._=ey),this}function Uc(){}function Ax(r){return r=Pe(r),Ne(function(s){return nh(s,r)})}var Ix=mc(at),Rx=mc($f),Ox=mc(Fl);function _p(r){return Ec(r)?Hl(Fn(r)):lb(r)}function Lx(r){return function(s){return r==null?n:ti(r,s)}}var Px=Eh(),Mx=Eh(!0);function zc(){return[]}function Fc(){return!1}function Bx(){return{}}function jx(){return""}function Nx(){return!0}function Dx(r,s){if(r=Pe(r),r<1||r>le)return[];var c=ye,h=Lt(r,ye);s=xe(s),r-=ye;for(var v=Zl(h,s);++c<r;)s(c);return v}function Ux(r){return Oe(r)?at(r,Fn):rn(r)?[r]:Zt(Uh(Qe(r)))}function zx(r){var s=++Y2;return Qe(r)+s}var Fx=Ko(function(r,s){return r+s},0),Hx=yc("ceil"),Wx=Ko(function(r,s){return r/s},1),qx=yc("floor");function Zx(r){return r&&r.length?Uo(r,Gt,rc):n}function Kx(r,s){return r&&r.length?Uo(r,xe(s,2),rc):n}function Vx(r){return Cf(r,Gt)}function Gx(r,s){return Cf(r,xe(s,2))}function Qx(r){return r&&r.length?Uo(r,Gt,ac):n}function Jx(r,s){return r&&r.length?Uo(r,xe(s,2),ac):n}var Yx=Ko(function(r,s){return r*s},1),Xx=yc("round"),e4=Ko(function(r,s){return r-s},0);function t4(r){return r&&r.length?ql(r,Gt):0}function n4(r,s){return r&&r.length?ql(r,xe(s,2)):0}return y.after=Ew,y.ary=Jh,y.assign=d3,y.assignIn=dp,y.assignInWith=oa,y.assignWith=f3,y.at=h3,y.before=Yh,y.bind=Ic,y.bindAll=yx,y.bindKey=Xh,y.castArray=Bw,y.chain=Vh,y.chunk=qb,y.compact=Zb,y.concat=Kb,y.cond=bx,y.conforms=_x,y.constant=jc,y.countBy=tw,y.create=p3,y.curry=ep,y.curryRight=tp,y.debounce=np,y.defaults=g3,y.defaultsDeep=v3,y.defer=kw,y.delay=Cw,y.difference=Vb,y.differenceBy=Gb,y.differenceWith=Qb,y.drop=Jb,y.dropRight=Yb,y.dropRightWhile=Xb,y.dropWhile=e_,y.fill=t_,y.filter=rw,y.flatMap=ow,y.flatMapDeep=aw,y.flatMapDepth=lw,y.flatten=Wh,y.flattenDeep=n_,y.flattenDepth=r_,y.flip=Sw,y.flow=xx,y.flowRight=$x,y.fromPairs=i_,y.functions=$3,y.functionsIn=E3,y.groupBy=cw,y.initial=o_,y.intersection=a_,y.intersectionBy=l_,y.intersectionWith=c_,y.invert=C3,y.invertBy=S3,y.invokeMap=dw,y.iteratee=Nc,y.keyBy=fw,y.keys=$t,y.keysIn=Vt,y.map=ea,y.mapKeys=A3,y.mapValues=I3,y.matches=Ex,y.matchesProperty=kx,y.memoize=na,y.merge=R3,y.mergeWith=fp,y.method=Cx,y.methodOf=Sx,y.mixin=Dc,y.negate=ra,y.nthArg=Ax,y.omit=O3,y.omitBy=L3,y.once=Tw,y.orderBy=hw,y.over=Ix,y.overArgs=Aw,y.overEvery=Rx,y.overSome=Ox,y.partial=Rc,y.partialRight=rp,y.partition=pw,y.pick=P3,y.pickBy=hp,y.property=_p,y.propertyOf=Lx,y.pull=h_,y.pullAll=Zh,y.pullAllBy=p_,y.pullAllWith=g_,y.pullAt=v_,y.range=Px,y.rangeRight=Mx,y.rearg=Iw,y.reject=mw,y.remove=m_,y.rest=Rw,y.reverse=Tc,y.sampleSize=bw,y.set=B3,y.setWith=j3,y.shuffle=_w,y.slice=y_,y.sortBy=$w,y.sortedUniq=k_,y.sortedUniqBy=C_,y.split=ox,y.spread=Ow,y.tail=S_,y.take=T_,y.takeRight=A_,y.takeRightWhile=I_,y.takeWhile=R_,y.tap=Z_,y.throttle=Lw,y.thru=Xo,y.toArray=lp,y.toPairs=pp,y.toPairsIn=gp,y.toPath=Ux,y.toPlainObject=up,y.transform=N3,y.unary=Pw,y.union=O_,y.unionBy=L_,y.unionWith=P_,y.uniq=M_,y.uniqBy=B_,y.uniqWith=j_,y.unset=D3,y.unzip=Ac,y.unzipWith=Kh,y.update=U3,y.updateWith=z3,y.values=Ui,y.valuesIn=F3,y.without=N_,y.words=yp,y.wrap=Mw,y.xor=D_,y.xorBy=U_,y.xorWith=z_,y.zip=F_,y.zipObject=H_,y.zipObjectDeep=W_,y.zipWith=q_,y.entries=pp,y.entriesIn=gp,y.extend=dp,y.extendWith=oa,Dc(y,y),y.add=Fx,y.attempt=bp,y.camelCase=Z3,y.capitalize=vp,y.ceil=Hx,y.clamp=H3,y.clone=jw,y.cloneDeep=Dw,y.cloneDeepWith=Uw,y.cloneWith=Nw,y.conformsTo=zw,y.deburr=mp,y.defaultTo=wx,y.divide=Wx,y.endsWith=K3,y.eq=Rn,y.escape=V3,y.escapeRegExp=G3,y.every=nw,y.find=iw,y.findIndex=Fh,y.findKey=m3,y.findLast=sw,y.findLastIndex=Hh,y.findLastKey=y3,y.floor=qx,y.forEach=Gh,y.forEachRight=Qh,y.forIn=b3,y.forInRight=_3,y.forOwn=w3,y.forOwnRight=x3,y.get=Pc,y.gt=Fw,y.gte=Hw,y.has=k3,y.hasIn=Mc,y.head=qh,y.identity=Gt,y.includes=uw,y.indexOf=s_,y.inRange=W3,y.invoke=T3,y.isArguments=ii,y.isArray=Oe,y.isArrayBuffer=Ww,y.isArrayLike=Kt,y.isArrayLikeObject=dt,y.isBoolean=qw,y.isBuffer=Or,y.isDate=Zw,y.isElement=Kw,y.isEmpty=Vw,y.isEqual=Gw,y.isEqualWith=Qw,y.isError=Oc,y.isFinite=Jw,y.isFunction=ur,y.isInteger=ip,y.isLength=ia,y.isMap=sp,y.isMatch=Yw,y.isMatchWith=Xw,y.isNaN=e3,y.isNative=t3,y.isNil=r3,y.isNull=n3,y.isNumber=op,y.isObject=lt,y.isObjectLike=ut,y.isPlainObject=Ps,y.isRegExp=Lc,y.isSafeInteger=i3,y.isSet=ap,y.isString=sa,y.isSymbol=rn,y.isTypedArray=Di,y.isUndefined=s3,y.isWeakMap=o3,y.isWeakSet=a3,y.join=u_,y.kebabCase=Q3,y.last=yn,y.lastIndexOf=d_,y.lowerCase=J3,y.lowerFirst=Y3,y.lt=l3,y.lte=c3,y.max=Zx,y.maxBy=Kx,y.mean=Vx,y.meanBy=Gx,y.min=Qx,y.minBy=Jx,y.stubArray=zc,y.stubFalse=Fc,y.stubObject=Bx,y.stubString=jx,y.stubTrue=Nx,y.multiply=Yx,y.nth=f_,y.noConflict=Tx,y.noop=Uc,y.now=ta,y.pad=X3,y.padEnd=ex,y.padStart=tx,y.parseInt=nx,y.random=q3,y.reduce=gw,y.reduceRight=vw,y.repeat=rx,y.replace=ix,y.result=M3,y.round=Xx,y.runInContext=P,y.sample=yw,y.size=ww,y.snakeCase=sx,y.some=xw,y.sortedIndex=b_,y.sortedIndexBy=__,y.sortedIndexOf=w_,y.sortedLastIndex=x_,y.sortedLastIndexBy=$_,y.sortedLastIndexOf=E_,y.startCase=ax,y.startsWith=lx,y.subtract=e4,y.sum=t4,y.sumBy=n4,y.template=cx,y.times=Dx,y.toFinite=dr,y.toInteger=Pe,y.toLength=cp,y.toLower=ux,y.toNumber=bn,y.toSafeInteger=u3,y.toString=Qe,y.toUpper=dx,y.trim=fx,y.trimEnd=hx,y.trimStart=px,y.truncate=gx,y.unescape=vx,y.uniqueId=zx,y.upperCase=mx,y.upperFirst=Bc,y.each=Gh,y.eachRight=Qh,y.first=qh,Dc(y,function(){var r={};return Un(y,function(s,c){Je.call(y.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),y.VERSION=i,hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),hn(["drop","take"],function(r,s){Fe.prototype[r]=function(c){c=c===n?1:wt(Pe(c),0);var h=this.__filtered__&&!s?new Fe(this):this.clone();return h.__filtered__?h.__takeCount__=Lt(c,h.__takeCount__):h.__views__.push({size:Lt(c,ye),type:r+(h.__dir__<0?"Right":"")}),h},Fe.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),hn(["filter","map","takeWhile"],function(r,s){var c=s+1,h=c==X||c==q;Fe.prototype[r]=function(v){var b=this.clone();return b.__iteratees__.push({iteratee:xe(v,3),type:c}),b.__filtered__=b.__filtered__||h,b}}),hn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Fe.prototype[r]=function(){return this[c](1).value()[0]}}),hn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Fe.prototype[r]=function(){return this.__filtered__?new Fe(this):this[c](1)}}),Fe.prototype.compact=function(){return this.filter(Gt)},Fe.prototype.find=function(r){return this.filter(r).head()},Fe.prototype.findLast=function(r){return this.reverse().find(r)},Fe.prototype.invokeMap=Ne(function(r,s){return typeof r=="function"?new Fe(this):this.map(function(c){return Ts(c,r,s)})}),Fe.prototype.reject=function(r){return this.filter(ra(xe(r)))},Fe.prototype.slice=function(r,s){r=Pe(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Fe(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Pe(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Fe.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Fe.prototype.toArray=function(){return this.take(ye)},Un(Fe.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),v=y[h?"take"+(s=="last"?"Right":""):s],b=h||/^find/.test(s);v&&(y.prototype[s]=function(){var T=this.__wrapped__,O=h?[1]:arguments,M=T instanceof Fe,H=O[0],W=M||Oe(T),Q=function(Ue){var He=v.apply(y,kr([Ue],O));return h&&ce?He[0]:He};W&&c&&typeof H=="function"&&H.length!=1&&(M=W=!1);var ce=this.__chain__,me=!!this.__actions__.length,Ee=b&&!ce,Me=M&&!me;if(!b&&W){T=Me?T:new Fe(this);var ke=r.apply(T,O);return ke.__actions__.push({func:Xo,args:[Q],thisArg:n}),new gn(ke,ce)}return Ee&&Me?r.apply(this,O):(ke=this.thru(Q),Ee?h?ke.value()[0]:ke.value():ke)})}),hn(["pop","push","shift","sort","splice","unshift"],function(r){var s=ko[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",h=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var v=arguments;if(h&&!this.__chain__){var b=this.value();return s.apply(Oe(b)?b:[],v)}return this[c](function(T){return s.apply(Oe(T)?T:[],v)})}}),Un(Fe.prototype,function(r,s){var c=y[s];if(c){var h=c.name+"";Je.call(Pi,h)||(Pi[h]=[]),Pi[h].push({name:s,func:c})}}),Pi[Zo(n,k).name]=[{name:"wrapper",func:n}],Fe.prototype.clone=vy,Fe.prototype.reverse=my,Fe.prototype.value=yy,y.prototype.at=K_,y.prototype.chain=V_,y.prototype.commit=G_,y.prototype.next=Q_,y.prototype.plant=Y_,y.prototype.reverse=X_,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=ew,y.prototype.first=y.prototype.head,ws&&(y.prototype[ws]=J_),y},Ri=G2();Qr?((Qr.exports=Ri)._=Ri,Nl._=Ri):Tt._=Ri}).call(xt)})(La,La.exports);var O1=La.exports;const N9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],L1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],D9=[...L1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],AF=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],U9=()=>{const t=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));t.push(...o)}else for(let o=0;o<16;o+=1)t[o]=Math.round(Math.random()*65535)>>8;t[6]=t[6]&15|64,t[8]=t[8]&63|128;const e=String.fromCharCode(...t);return btoa(e).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ds=()=>({id:U9(),width:"medium"}),P1=t=>({...ds(),columnType:"Following",...t}),M1=t=>({...ds(),columnType:"Notification",...t}),z9=t=>({...ds(),columnType:"Relays",...t}),B1=()=>z9({name:"日本語",relayUrls:L1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),j1=t=>({...ds(),columnType:"Posts",...t}),N1=t=>({...ds(),columnType:"Reactions",...t}),fd=t=>({...ds(),columnType:"Search",...t});var Ke;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},t.getValidEnumValues=o=>{const a=t.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return t.objectValues(l)},t.objectValues=o=>t.objectKeys(o).map(function(a){return o[a]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},t.find=(o,a)=>{for(const l of o)if(a(l))return l},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}t.joinValues=i,t.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ke||(Ke={}));var xu;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(xu||(xu={}));const fe=Ke.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),jr=t=>{switch(typeof t){case"undefined":return fe.undefined;case"string":return fe.string;case"number":return isNaN(t)?fe.nan:fe.number;case"boolean":return fe.boolean;case"function":return fe.function;case"bigint":return fe.bigint;case"symbol":return fe.symbol;case"object":return Array.isArray(t)?fe.array:t===null?fe.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?fe.promise:typeof Map<"u"&&t instanceof Map?fe.map:typeof Set<"u"&&t instanceof Set?fe.set:typeof Date<"u"&&t instanceof Date?fe.date:fe.object;default:return fe.unknown}},re=Ke.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),F9=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Mn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ke.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Mn.create=t=>new Mn(t);const Ws=(t,e)=>{let n;switch(t.code){case re.invalid_type:t.received===fe.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case re.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ke.jsonStringifyReplacer)}`;break;case re.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ke.joinValues(t.keys,", ")}`;break;case re.invalid_union:n="Invalid input";break;case re.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ke.joinValues(t.options)}`;break;case re.invalid_enum_value:n=`Invalid enum value. Expected ${Ke.joinValues(t.options)}, received '${t.received}'`;break;case re.invalid_arguments:n="Invalid function arguments";break;case re.invalid_return_type:n="Invalid function return type";break;case re.invalid_date:n="Invalid date";break;case re.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ke.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case re.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case re.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case re.custom:n="Invalid input";break;case re.invalid_intersection_types:n="Intersection results could not be merged";break;case re.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case re.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ke.assertNever(t)}return{message:n}};let D1=Ws;function H9(t){D1=t}function Pa(){return D1}const Ma=t=>{const{data:e,path:n,errorMaps:i,issueData:o}=t,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:e,defaultError:u}).message;return{...o,path:a,message:o.message||u}},W9=[];function pe(t,e){const n=Ma({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Pa(),Ws].filter(i=>!!i)});t.common.issues.push(n)}class Bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const i=[];for(const o of n){if(o.status==="aborted")return Re;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Bt.mergeObjectSync(e,i)}static mergeObjectSync(e,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Re;a.status==="dirty"&&e.dirty(),l.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:e.value,value:i}}}const Re=Object.freeze({status:"aborted"}),U1=t=>({status:"dirty",value:t}),Ft=t=>({status:"valid",value:t}),$u=t=>t.status==="aborted",Eu=t=>t.status==="dirty",qs=t=>t.status==="valid",Ba=t=>typeof Promise<"u"&&t instanceof Promise;var we;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(we||(we={}));class Gn{constructor(e,n,i,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Qp=(t,e)=>{if(qs(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Mn(t.common.issues);return this._error=n,this._error}}};function Le(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:i,description:o}=t;if(e&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class je{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return jr(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:jr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Bt,ctx:{common:e.parent.common,data:e.data,parsedType:jr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Ba(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const i=this.safeParse(e,n);if(i.success)return i.data;throw i.error}safeParse(e,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:jr(e)},a=this._parseSync({data:e,path:o.path,parent:o});return Qp(o,a)}async parseAsync(e,n){const i=await this.safeParseAsync(e,n);if(i.success)return i.data;throw i.error}async safeParseAsync(e,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:jr(e)},o=this._parse({data:e,path:i.path,parent:i}),a=await(Ba(o)?o:Promise.resolve(o));return Qp(i,a)}refine(e,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=e(o),u=()=>a.addIssue({code:re.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(e,n){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(e){return new jn({schema:this,typeName:Ce.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return vr.create(this,this._def)}nullable(){return _i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Bn.create(this,this._def)}promise(){return es.create(this,this._def)}or(e){return Gs.create([this,e],this._def)}and(e){return Qs.create(this,e,this._def)}transform(e){return new jn({...Le(this._def),schema:this,typeName:Ce.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new to({...Le(this._def),innerType:this,defaultValue:n,typeName:Ce.ZodDefault})}brand(){return new F1({typeName:Ce.ZodBranded,type:this,...Le(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Ua({...Le(this._def),innerType:this,catchValue:n,typeName:Ce.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return fo.create(this,e)}readonly(){return Fa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const q9=/^c[^\s-]{8,}$/i,Z9=/^[a-z][a-z0-9]*$/,K9=/^[0-9A-HJKMNP-TV-Z]{26}$/,V9=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,G9=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Q9="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Yc;const J9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Y9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,X9=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function ek(t,e){return!!((e==="v4"||!e)&&J9.test(t)||(e==="v6"||!e)&&Y9.test(t))}class Pn extends je{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==fe.string){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.string,received:a.parsedType}),Re}const i=new Bt;let o;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")e.data.length>a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=e.data.length>a.value,u=e.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(e,o),l?pe(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&pe(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")G9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"email",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Yc||(Yc=new RegExp(Q9,"u")),Yc.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"emoji",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")V9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"uuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")q9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"cuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Z9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"cuid2",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")K9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"ulid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),pe(o,{validation:"url",code:re.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"regex",code:re.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?X9(a).test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?ek(e.data,a.version)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"ip",code:re.invalid_string,message:a.message}),i.dirty()):Ke.assertNever(a);return{status:i.value,value:e.data}}_regex(e,n,i){return this.refinement(o=>e.test(o),{validation:n,code:re.invalid_string,...we.errToObj(i)})}_addCheck(e){return new Pn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...we.errToObj(e)})}url(e){return this._addCheck({kind:"url",...we.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...we.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...we.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...we.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...we.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...we.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...we.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(n=e?.offset)!==null&&n!==void 0?n:!1,...we.errToObj(e?.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...we.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...we.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...we.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...we.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...we.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...we.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...we.errToObj(n)})}nonempty(e){return this.min(1,we.errToObj(e))}trim(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Pn.create=t=>{var e;return new Pn({checks:[],typeName:Ce.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};function tk(t,e){const n=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(t.toFixed(o).replace(".","")),l=parseInt(e.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Fr extends je{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==fe.number){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.number,received:a.parsedType}),Re}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="int"?Ke.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),pe(i,{code:re.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?tk(e.data,a.value)!==0&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_finite,message:a.message}),o.dirty()):Ke.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Fr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Fr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:we.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:we.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:we.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:we.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ke.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Fr.create=t=>new Fr({checks:[],typeName:Ce.ZodNumber,coerce:t?.coerce||!1,...Le(t)});class Hr extends je{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==fe.bigint){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.bigint,received:a.parsedType}),Re}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ke.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Hr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Hr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Hr.create=t=>{var e;return new Hr({checks:[],typeName:Ce.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};class Zs extends je{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==fe.boolean){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.boolean,received:i.parsedType}),Re}return Ft(e.data)}}Zs.create=t=>new Zs({typeName:Ce.ZodBoolean,coerce:t?.coerce||!1,...Le(t)});class yi extends je{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==fe.date){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.date,received:a.parsedType}),Re}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_date}),Re}const i=new Bt;let o;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ke.assertNever(a);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new yi({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:we.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:we.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}yi.create=t=>new yi({checks:[],coerce:t?.coerce||!1,typeName:Ce.ZodDate,...Le(t)});class ja extends je{_parse(e){if(this._getType(e)!==fe.symbol){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.symbol,received:i.parsedType}),Re}return Ft(e.data)}}ja.create=t=>new ja({typeName:Ce.ZodSymbol,...Le(t)});class Ks extends je{_parse(e){if(this._getType(e)!==fe.undefined){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.undefined,received:i.parsedType}),Re}return Ft(e.data)}}Ks.create=t=>new Ks({typeName:Ce.ZodUndefined,...Le(t)});class Vs extends je{_parse(e){if(this._getType(e)!==fe.null){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.null,received:i.parsedType}),Re}return Ft(e.data)}}Vs.create=t=>new Vs({typeName:Ce.ZodNull,...Le(t)});class Xi extends je{constructor(){super(...arguments),this._any=!0}_parse(e){return Ft(e.data)}}Xi.create=t=>new Xi({typeName:Ce.ZodAny,...Le(t)});class vi extends je{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ft(e.data)}}vi.create=t=>new vi({typeName:Ce.ZodUnknown,...Le(t)});class _r extends je{_parse(e){const n=this._getOrReturnCtx(e);return pe(n,{code:re.invalid_type,expected:fe.never,received:n.parsedType}),Re}}_r.create=t=>new _r({typeName:Ce.ZodNever,...Le(t)});class Na extends je{_parse(e){if(this._getType(e)!==fe.undefined){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.void,received:i.parsedType}),Re}return Ft(e.data)}}Na.create=t=>new Na({typeName:Ce.ZodVoid,...Le(t)});class Bn extends je{_parse(e){const{ctx:n,status:i}=this._processInputParams(e),o=this._def;if(n.parsedType!==fe.array)return pe(n,{code:re.invalid_type,expected:fe.array,received:n.parsedType}),Re;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(pe(n,{code:l?re.too_big:re.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(pe(n,{code:re.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(pe(n,{code:re.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Gn(n,l,n.path,u)))).then(l=>Bt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Gn(n,l,n.path,u)));return Bt.mergeArray(i,a)}get element(){return this._def.type}min(e,n){return new Bn({...this._def,minLength:{value:e,message:we.toString(n)}})}max(e,n){return new Bn({...this._def,maxLength:{value:e,message:we.toString(n)}})}length(e,n){return new Bn({...this._def,exactLength:{value:e,message:we.toString(n)}})}nonempty(e){return this.min(1,e)}}Bn.create=(t,e)=>new Bn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:Ce.ZodArray,...Le(e)});function Wi(t){if(t instanceof ct){const e={};for(const n in t.shape){const i=t.shape[n];e[n]=vr.create(Wi(i))}return new ct({...t._def,shape:()=>e})}else return t instanceof Bn?new Bn({...t._def,type:Wi(t.element)}):t instanceof vr?vr.create(Wi(t.unwrap())):t instanceof _i?_i.create(Wi(t.unwrap())):t instanceof Qn?Qn.create(t.items.map(e=>Wi(e))):t}class ct extends je{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ke.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==fe.object){const f=this._getOrReturnCtx(e);return pe(f,{code:re.invalid_type,expected:fe.object,received:f.parsedType}),Re}const{status:i,ctx:o}=this._processInputParams(e),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof _r&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const p=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:p._parse(new Gn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof _r){const f=this._def.unknownKeys;if(f==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(f==="strict")u.length>0&&(pe(o,{code:re.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:f._parse(new Gn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const p of d){const g=await p.key;f.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return f}).then(f=>Bt.mergeObjectSync(i,f)):Bt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(e){return we.errToObj,new ct({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=we.errToObj(e).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ct({...this._def,unknownKeys:"strip"})}passthrough(){return new ct({...this._def,unknownKeys:"passthrough"})}extend(e){return new ct({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ct({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ce.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ct({...this._def,catchall:e})}pick(e){const n={};return Ke.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ct({...this._def,shape:()=>n})}omit(e){const n={};return Ke.objectKeys(this.shape).forEach(i=>{e[i]||(n[i]=this.shape[i])}),new ct({...this._def,shape:()=>n})}deepPartial(){return Wi(this)}partial(e){const n={};return Ke.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?n[i]=o:n[i]=o.optional()}),new ct({...this._def,shape:()=>n})}required(e){const n={};return Ke.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof vr;)a=a._def.innerType;n[i]=a}}),new ct({...this._def,shape:()=>n})}keyof(){return z1(Ke.objectKeys(this.shape))}}ct.create=(t,e)=>new ct({shape:()=>t,unknownKeys:"strip",catchall:_r.create(),typeName:Ce.ZodObject,...Le(e)});ct.strictCreate=(t,e)=>new ct({shape:()=>t,unknownKeys:"strict",catchall:_r.create(),typeName:Ce.ZodObject,...Le(e)});ct.lazycreate=(t,e)=>new ct({shape:t,unknownKeys:"strip",catchall:_r.create(),typeName:Ce.ZodObject,...Le(e)});class Gs extends je{_parse(e){const{ctx:n}=this._processInputParams(e),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Mn(u.ctx.common.issues));return pe(n,{code:re.invalid_union,unionErrors:l}),Re}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:f});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Mn(d));return pe(n,{code:re.invalid_union,unionErrors:u}),Re}}get options(){return this._def.options}}Gs.create=(t,e)=>new Gs({options:t,typeName:Ce.ZodUnion,...Le(e)});const _a=t=>t instanceof Ys?_a(t.schema):t instanceof jn?_a(t.innerType()):t instanceof Xs?[t.value]:t instanceof Wr?t.options:t instanceof eo?Object.keys(t.enum):t instanceof to?_a(t._def.innerType):t instanceof Ks?[void 0]:t instanceof Vs?[null]:null;class vl extends je{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.object)return pe(n,{code:re.invalid_type,expected:fe.object,received:n.parsedType}),Re;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(pe(n,{code:re.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Re)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,i){const o=new Map;for(const a of n){const l=_a(a.shape[e]);if(!l)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(u)}`);o.set(u,a)}}return new vl({typeName:Ce.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Le(i)})}}function ku(t,e){const n=jr(t),i=jr(e);if(t===e)return{valid:!0,data:t};if(n===fe.object&&i===fe.object){const o=Ke.objectKeys(e),a=Ke.objectKeys(t).filter(u=>o.indexOf(u)!==-1),l={...t,...e};for(const u of a){const d=ku(t[u],e[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===fe.array&&i===fe.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let a=0;a<t.length;a++){const l=t[a],u=e[a],d=ku(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===fe.date&&i===fe.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Qs extends je{_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=(a,l)=>{if($u(a)||$u(l))return Re;const u=ku(a.value,l.value);return u.valid?((Eu(a)||Eu(l))&&n.dirty(),{status:n.value,value:u.data}):(pe(i,{code:re.invalid_intersection_types}),Re)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Qs.create=(t,e,n)=>new Qs({left:t,right:e,typeName:Ce.ZodIntersection,...Le(n)});class Qn extends je{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.array)return pe(i,{code:re.invalid_type,expected:fe.array,received:i.parsedType}),Re;if(i.data.length<this._def.items.length)return pe(i,{code:re.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Re;!this._def.rest&&i.data.length>this._def.items.length&&(pe(i,{code:re.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Gn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Bt.mergeArray(n,l)):Bt.mergeArray(n,a)}get items(){return this._def.items}rest(e){return new Qn({...this._def,rest:e})}}Qn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Qn({items:t,typeName:Ce.ZodTuple,rest:null,...Le(e)})};class Js extends je{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.object)return pe(i,{code:re.invalid_type,expected:fe.object,received:i.parsedType}),Re;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Gn(i,u,i.path,u)),value:l._parse(new Gn(i,i.data[u],i.path,u))});return i.common.async?Bt.mergeObjectAsync(n,o):Bt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,i){return n instanceof je?new Js({keyType:e,valueType:n,typeName:Ce.ZodRecord,...Le(i)}):new Js({keyType:Pn.create(),valueType:e,typeName:Ce.ZodRecord,...Le(n)})}}class Da extends je{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.map)return pe(i,{code:re.invalid_type,expected:fe.map,received:i.parsedType}),Re;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Gn(i,u,i.path,[f,"key"])),value:a._parse(new Gn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,p=await d.value;if(f.status==="aborted"||p.status==="aborted")return Re;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,p=d.value;if(f.status==="aborted"||p.status==="aborted")return Re;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}}}}Da.create=(t,e,n)=>new Da({valueType:e,keyType:t,typeName:Ce.ZodMap,...Le(n)});class bi extends je{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.set)return pe(i,{code:re.invalid_type,expected:fe.set,received:i.parsedType}),Re;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(pe(i,{code:re.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(pe(i,{code:re.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const p of d){if(p.status==="aborted")return Re;p.status==="dirty"&&n.dirty(),f.add(p.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Gn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(e,n){return new bi({...this._def,minSize:{value:e,message:we.toString(n)}})}max(e,n){return new bi({...this._def,maxSize:{value:e,message:we.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}bi.create=(t,e)=>new bi({valueType:t,minSize:null,maxSize:null,typeName:Ce.ZodSet,...Le(e)});class Zi extends je{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.function)return pe(n,{code:re.invalid_type,expected:fe.function,received:n.parsedType}),Re;function i(u,d){return Ma({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Pa(),Ws].filter(f=>!!f),issueData:{code:re.invalid_arguments,argumentsError:d}})}function o(u,d){return Ma({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Pa(),Ws].filter(f=>!!f),issueData:{code:re.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;if(this._def.returns instanceof es){const u=this;return Ft(async function(...d){const f=new Mn([]),p=await u._def.args.parseAsync(d,a).catch(w=>{throw f.addIssue(i(d,w)),f}),g=await Reflect.apply(l,this,p);return await u._def.returns._def.type.parseAsync(g,a).catch(w=>{throw f.addIssue(o(g,w)),f})})}else{const u=this;return Ft(function(...d){const f=u._def.args.safeParse(d,a);if(!f.success)throw new Mn([i(d,f.error)]);const p=Reflect.apply(l,this,f.data),g=u._def.returns.safeParse(p,a);if(!g.success)throw new Mn([o(p,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Zi({...this._def,args:Qn.create(e).rest(vi.create())})}returns(e){return new Zi({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,i){return new Zi({args:e||Qn.create([]).rest(vi.create()),returns:n||vi.create(),typeName:Ce.ZodFunction,...Le(i)})}}class Ys extends je{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Ys.create=(t,e)=>new Ys({getter:t,typeName:Ce.ZodLazy,...Le(e)});class Xs extends je{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return pe(n,{received:n.data,code:re.invalid_literal,expected:this._def.value}),Re}return{status:"valid",value:e.data}}get value(){return this._def.value}}Xs.create=(t,e)=>new Xs({value:t,typeName:Ce.ZodLiteral,...Le(e)});function z1(t,e){return new Wr({values:t,typeName:Ce.ZodEnum,...Le(e)})}class Wr extends je{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),i=this._def.values;return pe(n,{expected:Ke.joinValues(i),received:n.parsedType,code:re.invalid_type}),Re}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),i=this._def.values;return pe(n,{received:n.data,code:re.invalid_enum_value,options:i}),Re}return Ft(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Wr.create(e)}exclude(e){return Wr.create(this.options.filter(n=>!e.includes(n)))}}Wr.create=z1;class eo extends je{_parse(e){const n=Ke.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==fe.string&&i.parsedType!==fe.number){const o=Ke.objectValues(n);return pe(i,{expected:Ke.joinValues(o),received:i.parsedType,code:re.invalid_type}),Re}if(n.indexOf(e.data)===-1){const o=Ke.objectValues(n);return pe(i,{received:i.data,code:re.invalid_enum_value,options:o}),Re}return Ft(e.data)}get enum(){return this._def.values}}eo.create=(t,e)=>new eo({values:t,typeName:Ce.ZodNativeEnum,...Le(e)});class es extends je{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.promise&&n.common.async===!1)return pe(n,{code:re.invalid_type,expected:fe.promise,received:n.parsedType}),Re;const i=n.parsedType===fe.promise?n.data:Promise.resolve(n.data);return Ft(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}es.create=(t,e)=>new es({type:t,typeName:Ce.ZodPromise,...Le(e)});class jn extends je{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ce.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=this._def.effect||null,a={addIssue:l=>{pe(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const l=o.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}if(o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Re:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Re:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!qs(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>qs(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ke.assertNever(o)}}jn.create=(t,e,n)=>new jn({schema:t,typeName:Ce.ZodEffects,effect:e,...Le(n)});jn.createWithPreprocess=(t,e,n)=>new jn({schema:e,effect:{type:"preprocess",transform:t},typeName:Ce.ZodEffects,...Le(n)});class vr extends je{_parse(e){return this._getType(e)===fe.undefined?Ft(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}vr.create=(t,e)=>new vr({innerType:t,typeName:Ce.ZodOptional,...Le(e)});class _i extends je{_parse(e){return this._getType(e)===fe.null?Ft(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}_i.create=(t,e)=>new _i({innerType:t,typeName:Ce.ZodNullable,...Le(e)});class to extends je{_parse(e){const{ctx:n}=this._processInputParams(e);let i=n.data;return n.parsedType===fe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}to.create=(t,e)=>new to({innerType:t,typeName:Ce.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Le(e)});class Ua extends je{_parse(e){const{ctx:n}=this._processInputParams(e),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ba(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ua.create=(t,e)=>new Ua({innerType:t,typeName:Ce.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Le(e)});class za extends je{_parse(e){if(this._getType(e)!==fe.nan){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.nan,received:i.parsedType}),Re}return{status:"valid",value:e.data}}}za.create=t=>new za({typeName:Ce.ZodNaN,...Le(t)});const nk=Symbol("zod_brand");class F1 extends je{_parse(e){const{ctx:n}=this._processInputParams(e),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class fo extends je{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Re:a.status==="dirty"?(n.dirty(),U1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Re:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,n){return new fo({in:e,out:n,typeName:Ce.ZodPipeline})}}class Fa extends je{_parse(e){const n=this._def.innerType._parse(e);return qs(n)&&(n.value=Object.freeze(n.value)),n}}Fa.create=(t,e)=>new Fa({innerType:t,typeName:Ce.ZodReadonly,...Le(e)});const H1=(t,e={},n)=>t?Xi.create().superRefine((i,o)=>{var a,l;if(!t(i)){const u=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):Xi.create(),rk={object:ct.lazycreate};var Ce;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(Ce||(Ce={}));const ik=(t,e={message:`Input not instance of ${t.name}`})=>H1(n=>n instanceof t,e),W1=Pn.create,q1=Fr.create,sk=za.create,ok=Hr.create,Z1=Zs.create,ak=yi.create,lk=ja.create,ck=Ks.create,uk=Vs.create,dk=Xi.create,fk=vi.create,hk=_r.create,pk=Na.create,gk=Bn.create,vk=ct.create,mk=ct.strictCreate,yk=Gs.create,bk=vl.create,_k=Qs.create,wk=Qn.create,xk=Js.create,$k=Da.create,Ek=bi.create,kk=Zi.create,Ck=Ys.create,Sk=Xs.create,Tk=Wr.create,Ak=eo.create,Ik=es.create,Jp=jn.create,Rk=vr.create,Ok=_i.create,Lk=jn.createWithPreprocess,Pk=fo.create,Mk=()=>W1().optional(),Bk=()=>q1().optional(),jk=()=>Z1().optional(),Nk={string:t=>Pn.create({...t,coerce:!0}),number:t=>Fr.create({...t,coerce:!0}),boolean:t=>Zs.create({...t,coerce:!0}),bigint:t=>Hr.create({...t,coerce:!0}),date:t=>yi.create({...t,coerce:!0})},Dk=Re;var gt=Object.freeze({__proto__:null,defaultErrorMap:Ws,setErrorMap:H9,getErrorMap:Pa,makeIssue:Ma,EMPTY_PATH:W9,addIssueToContext:pe,ParseStatus:Bt,INVALID:Re,DIRTY:U1,OK:Ft,isAborted:$u,isDirty:Eu,isValid:qs,isAsync:Ba,get util(){return Ke},get objectUtil(){return xu},ZodParsedType:fe,getParsedType:jr,ZodType:je,ZodString:Pn,ZodNumber:Fr,ZodBigInt:Hr,ZodBoolean:Zs,ZodDate:yi,ZodSymbol:ja,ZodUndefined:Ks,ZodNull:Vs,ZodAny:Xi,ZodUnknown:vi,ZodNever:_r,ZodVoid:Na,ZodArray:Bn,ZodObject:ct,ZodUnion:Gs,ZodDiscriminatedUnion:vl,ZodIntersection:Qs,ZodTuple:Qn,ZodRecord:Js,ZodMap:Da,ZodSet:bi,ZodFunction:Zi,ZodLazy:Ys,ZodLiteral:Xs,ZodEnum:Wr,ZodNativeEnum:eo,ZodPromise:es,ZodEffects:jn,ZodTransformer:jn,ZodOptional:vr,ZodNullable:_i,ZodDefault:to,ZodCatch:Ua,ZodNaN:za,BRAND:nk,ZodBranded:F1,ZodPipeline:fo,ZodReadonly:Fa,custom:H1,Schema:je,ZodSchema:je,late:rk,get ZodFirstPartyTypeKind(){return Ce},coerce:Nk,any:dk,array:gk,bigint:ok,boolean:Z1,date:ak,discriminatedUnion:bk,effect:Jp,enum:Tk,function:kk,instanceof:ik,intersection:_k,lazy:Ck,literal:Sk,map:$k,nan:sk,nativeEnum:Ak,never:hk,null:uk,nullable:Ok,number:q1,object:vk,oboolean:jk,onumber:Bk,optional:Rk,ostring:Mk,pipeline:Pk,preprocess:Lk,promise:Ik,record:xk,set:Ek,strictObject:mk,string:W1,symbol:lk,transformer:Jp,tuple:wk,undefined:ck,union:yk,unknown:fk,void:pk,NEVER:Dk,ZodIssueCode:re,quotelessJson:F9,ZodError:Mn});const Uk=/^[0-9a-f]{64}$/,no=t=>{const e=typeof t=="string"&&t.length===64&&Uk.test(t);return e||console.warn("invalid id is ignored: ",t),e},zk=t=>e=>t.safeParse(e).success,Fk=gt.tuple([gt.literal("emoji"),gt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),gt.string().url()]);class Hk{findTagsByName(e){return this.tags.filter(([n])=>n===e)}findFirstTagByName(e){return this.tags.find(([n])=>n===e)}findLastTagByName(e){return this.tags.findLast(([n])=>n===e)}pTags(){return this.tags.filter(([e,n])=>e==="p"&&no(n))}eTags(){return this.tags.filter(([e,n])=>e==="e"&&no(n))}emojiTags(){return this.tags.filter(zk(Fk))}taggedPubkeys(){return pi(this.pTags().map(([,e])=>e))}taggedEventIds(){return this.eTags().map(([,e])=>e)}lastTaggedEventId(){const e=this.taggedEventIds();if(e.length!==0)return e[e.length-1]}getEmojiUrl(e){const n=this.emojiTags().find(([,o])=>o===e);if(n==null)return;const[,,i]=n;return i}}class hd extends Hk{constructor(e){super(),this.rawEvent=e}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const Wk=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,Yp=/^:(\w+):$/,qk=t=>{if(t.isLikeOrDislike())return{type:"LikeDislike",content:t.content};if(t.isEmoji())return{type:"Emoji",content:t.content};if(t.isCustomEmoji()){const e=t.getShortcode(),n=t.getUrl();if(e!=null&&n!=null)return{type:"CustomEmoji",content:t.content,shortcode:e,url:n}}return{type:"Unknown",content:t.content}};class Zk extends hd{constructor(e){if(e.kind!==vt.Reaction)throw new TypeError("kind should be 7");super(e)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return Wk.test(this.content)}isCustomEmoji(){return Yp.test(this.content)}getShortcode(){return this.content.match(Yp)?.[1]}getUrl(){const e=this.getShortcode();if(e!=null)return this.getEmojiUrl(e)}toReactionTypes(){return qk(this)}}const{decode:Kk}=co,Vk=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,Gk=/(?:#\[(?<idx>\d+)\])/g,Qk=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,Jk=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,Yk=/:(?<emoji>\w+):/gu,K1=t=>{const e=[...t.matchAll(Vk),...t.matchAll(Gk),...t.matchAll(Qk),...t.matchAll(Jk),...t.matchAll(Yk)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=t.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return e.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=Kk(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<t.length&&o(t.length),i},Xk=t=>{const e=t.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&no(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:e.length===1?"reply":o===0?"root":e.length===2||o===e.length-1?"reply":"mention";return e.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let eC=class extends hd{#e;#t;constructor(e){if(e.kind!==vt.Text)throw new TypeError("kind should be 1");super(e)}parsed(){return this.#t!=null?this.#t:(this.#t=K1(this.content),this.#t)}resolveTagReference({tagIndex:e,content:n}){const i=this.rawEvent.tags[e];if(i==null)return;const o=i[0];if(o==="p"&&no(i[1]))return{type:"MentionedUser",tagIndex:e,content:n,pubkey:i[1]};if(o==="e"&&no(i[1])){const a=this.markedEventTags().find(l=>l.index===e);return{type:"MentionedEvent",tagIndex:e,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=Xk(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:e})=>e==="reply")}rootEvent(){return this.markedEventTags().find(({marker:e})=>e==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:e})=>e==="mention")}contentWarning(){const e=this.findLastTagByName("content-warning");return e==null?{contentWarning:!1}:{contentWarning:!0,reason:(e[1]?.length??0)>0?e[1]:void 0}}containsEventMention(e){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===e);return this.containsEventNote(e)||this.containsEventMentionIndex(n)}containsEventMentionIndex(e){return e<0||e>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===e)}containsEventNote(e){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===e||n.data.type==="note"&&n.data.data===e))}};const fi=t=>new hd(t),pd=t=>new eC(t),Ha=t=>new Zk(t),tC=()=>{const t=[...N9];return window.navigator.language.includes("ja")&&t.push(...D9),t},V1=()=>({relayUrls:tC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),nC=t=>JSON.stringify(t),rC=t=>({...V1(),...JSON.parse(t)}),iC=m4(()=>window.localStorage,nC,rC),[Fi,Qt]=y4("RabbitConfig",V1(),iC),et=()=>{const t=I=>{Qt("relayUrls",E=>pi([...E,I]))},e=I=>{Qt("relayUrls",E=>E.filter(S=>S!==I))},n=I=>{Qt("mutedPubkeys",E=>pi([...E,I]))},i=I=>{Qt("mutedPubkeys",E=>E.filter(S=>S!==I))},o=I=>{Qt("mutedKeywords",E=>pi([...E,I]))},a=I=>{Qt("mutedKeywords",E=>E.filter(S=>S!==I))},l=I=>{Qt("columns",E=>{const S=E.findIndex(L=>L.id===I.id);if(S>=0){const L=[...E];return L.splice(S,1,I),L}return[...E,I]})},u=(I,E)=>{Qt("columns",S=>{const L=E-1,R=Math.max(Math.min(L,S.length),0),N=S.findIndex(te=>te.id===I);if(N<0||R===N)return S;console.log(N,R);const D=[...S],[K]=D.splice(N,1);return D.splice(R,0,K),D})},d=I=>{Qt("columns",E=>E.filter(S=>S.id!==I))},f=I=>{Qt("customEmojis",E=>({...E,[I.shortcode]:I}))},p=I=>{Qt("customEmojis",E=>{const S=Object.fromEntries(I.map(L=>[L.shortcode,L]));return{...E,...S}})},g=I=>{Qt("customEmojis",E=>({...E,[I]:void 0}))},m=I=>Fi.customEmojis[I],w=I=>O1.sortBy(Object.values(Fi.customEmojis).filter(({shortcode:E})=>E.includes(I)),[E=>E.shortcode.length]),_=I=>Fi.mutedPubkeys.includes(I),$=I=>I.kind===vt.Text?Fi.mutedKeywords.some(E=>I.content.includes(E)):!1;return{config:()=>Fi,setConfig:Qt,addRelay:t,removeRelay:e,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:I})=>{if((Fi.columns?.length??0)>0)return;const E=[P1({width:"widest",pubkey:I}),M1({pubkey:I}),j1({name:"自分の投稿",pubkey:I}),N1({name:"自分のリアクション",pubkey:I})];navigator.language.includes("ja")&&E.splice(2,0,B1()),Qt("columns",()=>[...E])},saveEmoji:f,saveEmojis:p,removeEmoji:g,getEmoji:m,searchEmojis:w,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:_,shouldMuteEvent:I=>{const E=fi(I);return _(I.pubkey)||E.taggedPubkeys().some(_)||I.kind===vt.Text&&$(I)}}},gd=(t,e)=>{const n=t.created_at-e.created_at;return n!==0?n:t.id===e.id?0:t.id>e.id?1:-1},G1=t=>{if(t.length!==0)return t.length===1?t[0]:t.reduce((e,n)=>gd(e,n)>0?e:n)},Cu=t=>Array.from(t).sort((e,n)=>-gd(e,n)),[sC]=Ie(new wE({eoseSubTimeout:12e3})),vd=()=>sC,[Q1,Xp]=Vi({activeSubscriptions:0,activeBatchSubscriptions:0});c4(()=>{Dr(()=>{console.debug("stats",{...Q1})})});const J1=()=>({stats:Q1,setActiveSubscriptions:n=>Xp("activeSubscriptions",n),setActiveBatchSubscriptions:n=>Xp("activeBatchSubscriptions",n)});let eg=0;const oC=()=>{const t=eg;return eg+=1,t};class aC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(e){this.id=oC(),this.req=e}#n(e){this.#e.forEach(n=>{n(e)})}#r(){this.#t.forEach(e=>{e()})}update(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=e,this.#n(e)}updateWith(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(e(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(e){this.#e.push(e)}subscribe(e){this.onUpdate(e)}onComplete(e){this.#t.push(e)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const e=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([e,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((e,n)=>{this.onComplete(()=>{this.res!=null?e(this.res):n(new Error("result was not set"))})})}}const lC=t=>{const e=qe(t),n=qe(()=>e().batchSize??100),i=qe(()=>e().interval??2e3),[o,a]=Ie([]);let l;const u=()=>{const{executor:g}=e(),m=o();m.length>0&&(a([]),g(m)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(m=>[...m,g]):(u(),a([g])),d()},removeTask:g=>{a(m=>m.filter(w=>w!==g))}}};class fs extends aC{addEvent(e){this.updateWith(n=>od.insertEventIntoDescendingList(n??[],e))}firstEventPromise(){return this.toUpdatePromise().then(e=>e[0])}latestEventPromise(){return this.toCompletePromise().then(e=>{const n=G1(e);if(n==null)throw new Error("event not found");return n})}}let Su=0;const{setActiveBatchSubscriptions:cC}=J1();setInterval(()=>{cC(Su)},1e3);const uC=t=>t.kind>=3e4&&t.kind<4e4,dC=({kind:t,author:e,identifier:n})=>`${t}:${e}:${n}`,{addTask:fC,removeTask:hC}=lC(()=>({interval:2e3,batchSize:150,executor:t=>{const e=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;t.forEach(S=>{if(S.req.type==="Event"){const L=n.get(S.req.eventId)??[];n.set(S.req.eventId,[...L,S])}else if(S.req.type==="Profile"){const L=e.get(S.req.pubkey)??[];e.set(S.req.pubkey,[...L,S])}else if(S.req.type==="Reactions"){const L=i.get(S.req.mentionedEventId)??[];i.set(S.req.mentionedEventId,[...L,S])}else if(S.req.type==="Reposts"){const L=o.get(S.req.mentionedEventId)??[];o.set(S.req.mentionedEventId,[...L,S])}else if(S.req.type==="ZapReceipts"){const L=a.get(S.req.mentionedEventId)??[];o.set(S.req.mentionedEventId,[...L,S])}else if(S.req.type==="ParameterizedReplaceableEvent"){const L=dC(S.req),R=l.get(L)??[];l.set(L,[...R,S])}else if(S.req.type==="Followings"){const L=u.get(S.req.pubkey)??[];u.set(S.req.pubkey,[...L,S])}});const d=[...n.keys()],f=[...e.keys()],p=[...i.keys()],g=[...o.keys()],m=[...a.keys()],w=[...u.keys()],_=[];if(d.length>0&&_.push({ids:d}),f.length>0&&_.push({kinds:[vt.Metadata],authors:f}),p.length>0&&_.push({kinds:[vt.Reaction],"#e":p}),g.length>0&&_.push({kinds:[6],"#e":g}),m.length>0&&_.push({kinds:[9735],"#e":m}),w.length>0&&_.push({kinds:[vt.Contacts],authors:w}),l.size>0&&Array.from(l.values()).forEach(([S])=>{if(S.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:L,author:R,identifier:N}}=S;_.push({kinds:[L],authors:[R],"#d":[N]})}),_.length===0)return;const $=(S,L)=>{S.forEach(R=>{R.addEvent(L)})},x=()=>{t.forEach(S=>{S.complete()})},{config:k}=et(),E=vd()().sub(k().relayUrls,_,{});Su+=1,E.on("event",S=>{if(S.kind===vt.Metadata){const L=e.get(S.pubkey)??[];$(L,S);return}if(S.kind===vt.Reaction){const L=fi(S).lastTaggedEventId();if(L!=null){const R=i.get(L)??[];$(R,S)}}else if(S.kind===6){const L=fi(S).lastTaggedEventId();if(L!=null){const R=o.get(L)??[];$(R,S)}}else if(S.kind===vt.Zap)fi(S).eTags().forEach(([,R])=>{const N=o.get(R)??[];$(N,S)});else if(S.kind===vt.Contacts){const L=u.get(S.pubkey)??[];$(L,S)}else if(uC(S)){const L=fi(S).findFirstTagByName("d")?.[1];if(L!=null){const R=`${S.kind}:${S.pubkey}:${L}`,N=l.get(R)??[];$(N,S)}else console.warn("identifier is undefined")}else{const L=n.get(S.id)??[];L.length>0?$(L,S):console.warn("unknown event received")}}),E.on("eose",()=>{x(),E.unsub(),Su-=1})}})),ml=({task:t,signal:e})=>{fC(t),e?.addEventListener("abort",()=>hC(t))};class pC extends Error{}const hs=(t,e)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=e!=null?`TimeoutError: ${e}`:"TimeoutError";a(new pC(l))},t)});return Promise.race([n,i])},gC=t=>{const e=qe(t),n=ss(()=>["useEvent",e()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new fs({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return ml({task:d,signal:a}),hs(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},xn=t=>e=>t.some(n=>n==null)?null:e(t),vC=B("<span>"),mC=B('<div class="truncate"> '),ro=t=>{const e=mt(),[n,i]=u4(t,["eventId"]),{shouldMuteEvent:o}=et(),{event:a,query:l}=gC(()=>xn([n.eventId])(([d])=>({eventId:d}))),u=()=>{const d=a();return d!=null&&o(d)};return A(Zn,{get fallback(){return(()=>{const d=vC();return C(d,()=>e()("post.failedToFetchEvent"),null),C(d,()=>t.eventId,null),d})()},get children(){return[A(Ye,{get when(){return u()},children:null}),A(Ye,{get when(){return a()},keyed:!0,children:d=>A(Wv,d4({event:d},i))}),A(Ye,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=mC(),p=f.firstChild;return C(f,()=>e()("general.loading"),p),C(f,A(Hs,{eventId:d}),null),f})()})]}})},yC=t=>{if(t==null||t.length===0)throw new TypeError("content is empty or null");return JSON.parse(t)},bC=t=>{try{return yC(t)}catch(e){return console.warn("failed to parse profile (kind 0): ",e,t),null}},Y1=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n),a=t(n);if(a==null)return Promise.resolve(null);const l=a.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return a.onUpdate(u=>{const d=G1(u);(o==null||d!=null&&gd(d,o)>=0)&&e.setQueryData(n,d)}),ml({task:a,signal:i}),hs(15e3,`${JSON.stringify(n)}`)(l)},X1=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n),a=t(n);if(a==null)return Promise.resolve([]);const l=a.toUpdatePromise().catch(()=>[]);return a.onUpdate(u=>{e.setQueryData(n,()=>{if(o==null)return u;const d=O1.uniqBy([...o,...u],f=>f.id);return Cu(d)})}),ml({task:a,signal:i}),hs(15e3,`${JSON.stringify(n)}`)(l)},ps=t=>{const e=is(),n=qe(t),i=qe(()=>["useProfile",n()]),o=ss(i,Y1({taskProvider:([,u])=>{if(u==null)return null;const{pubkey:d}=u;return new fs({type:"Profile",pubkey:d})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:qe(()=>{if(o.data==null)return null;const{content:u}=o.data;return bC(u)}),invalidateProfile:()=>e.invalidateQueries(i()),query:o}},{npubEncode:_C}=co,ho=t=>{try{return _C(t)}catch{return console.error("failed to encode pubkey into npub",t),t}},md=t=>{const{profile:e}=ps(()=>({pubkey:t.pubkey}));return A(Zn,{get fallback(){return ho(t.pubkey)},get children(){return[A(Ye,{get when(){return(e()?.display_name?.length??0)>0},get children(){return e()?.display_name}}),A(Ye,{get when(){return(e()?.name?.length??0)>0},get children(){return["@",qe(()=>e()?.name)]}})]}})},ev=t=>{const[e,n]=Ie(new Date);return Dr(()=>{const i=setInterval(()=>{n(new Date)},t().interval);mr(()=>clearInterval(i))}),e},wC=t=>{switch(t.kind){case"now":return"now";case"seconds":return`${t.value}s`;case"minutes":return`${t.value}m`;case"hours":return`${t.value}h`;case"days":return`${t.value}d`;case"abs":default:return t.value.toLocaleDateString()}},tg=t=>`${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`,xC=t=>{switch(t.kind){case"today":return t.value.toLocaleTimeString();case"yesterday":case"abs":default:return t.value.toLocaleString()}},$C=t=>{switch(t.kind){case"today":return tg(t.value);case"yesterday":return`昨日 ${tg(t.value)}`;case"abs":default:return t.value.toLocaleString()}},EC=(t,e)=>Math.round(Number(e)-Number(t))/1e3,kC=(t,e)=>{const n=EC(t,e);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:t}},ng=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),CC=t=>new Date(+t-24*60*60*1e3),tv=(t,e,n)=>ng(t,e)?n({kind:"today",value:t}):ng(t,CC(e))?n({kind:"yesterday",value:t}):n({kind:"abs",value:t}),SC=(t,e=new Date)=>tv(t,e,xC),TC=(t,e=new Date)=>tv(t,e,$C),rg=(t,e=new Date,n=wC)=>n(kC(t,e)),ig=ev(()=>({interval:7e3})),sg=ev(()=>({interval:60*1e3})),nv=()=>{const{config:t}=et();return e=>{switch(t().dateFormat){case"absolute-long":return SC(e,sg());case"absolute-short":return TC(e,sg());case"relative":return rg(e,ig());default:return rg(e,ig())}}},[AC,si]=Ie({type:"Closed"}),Zr=()=>({modalState:AC,setModalState:si,showLogin:()=>{si({type:"Login"})},showProfile:l=>{si({type:"Profile",pubkey:l})},showProfileEdit:()=>{si({type:"ProfileEdit"})},showAddColumn:()=>{si({type:"AddColumn"})},showAbout:()=>{si({type:"About"})},closeModal:()=>{si({type:"Closed"})}}),IC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="select-text hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),RC=t=>{const e=mt(),{showProfile:n}=Zr(),i=nv(),o=qe(()=>fi(t.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=IC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,m=u.nextSibling;return C(d,A(R1,{})),p.$$click=()=>n(t.event.pubkey),C(p,A(md,{get pubkey(){return t.event.pubkey}})),C(f,()=>e()("notification.reposted"),null),C(g,()=>i(o().createdAtAsDate())),C(m,A(ro,{get eventId(){return a()}})),l})()};yt(["click"]);const OC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),LC=(t={})=>(()=>{const e=OC();return rt(e,t,!0,!0),e})(),PC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),rv=(t={})=>(()=>{const e=PC();return rt(e,t,!0,!0),e})(),MC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),iv=(t={})=>(()=>{const e=MC();return rt(e,t,!0,!0),e})(),BC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),sv=(t={})=>(()=>{const e=BC();return rt(e,t,!0,!0),e})(),jC=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),ov=(t={})=>(()=>{const e=jC();return rt(e,t,!0,!0),e})(),NC=B('<div class="absolute z-20">'),DC=B('<div><button type="button" class="flex items-center">'),yd=t=>{let e,n;const[i,o]=Ie(!1),[a,l]=Ie({}),u=f4(()=>t.children),d=()=>o(!1),f=()=>o(_=>!_),p=_=>{const $=_.target;$!=null&&!n?.contains($)&&d()},g=()=>{document.addEventListener("mousedown",p)},m=()=>{document.removeEventListener("mousedown",p)},w=()=>{if(e==null||n==null)return;const _=e?.getBoundingClientRect(),$=n?.getBoundingClientRect();let{top:x,left:k}=_;t.position==="left"?k-=_.width:t.position==="right"?k+=_.width:t.position==="top"?(x-=_.height,k-=_.left+_.width/2):(x+=_.height,k+=_.width/2),x=Math.min(x,window.innerHeight-$.height),k=Math.min(k,window.innerWidth-$.width),l({left:`${k}px`,top:`${x}px`})};return Dr(()=>{i()?(g(),t.onOpen?.()):(m(),t.onClose?.())}),Dr(Xa(u,()=>{w()})),Dr(()=>{i()&&w()}),wr(()=>{t.ref?.({close:d,elem:n})}),mr(()=>m()),(()=>{const _=DC(),$=_.firstChild;$.$$click=()=>{f(),w()};const x=e;return typeof x=="function"?yr(x,$):e=$,C($,()=>t.button),C(_,A(p4,{get children(){const k=NC(),I=n;return typeof I=="function"?yr(I,k):n=k,C(k,u),De(E=>{const S=!i(),L=!!i(),R=a();return S!==E._v$&&k.classList.toggle("hidden",E._v$=S),L!==E._v$2&&k.classList.toggle("block",E._v$2=L),E._v$3=h4(k,R,E._v$3),E},{_v$:void 0,_v$2:void 0,_v$3:void 0}),k}}),null),_})()};yt(["click"]);const UC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),zC=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),FC=t=>{const e=()=>{t.item?.onSelect?.(),t.onClose()};return(()=>{const n=UC(),i=n.firstChild;return i.$$click=e,C(i,()=>t.item.content()),n})()},av=t=>{let e;const n=()=>e?.close();return A(yd,{ref:i=>{e=i},get button(){return t.children},position:"bottom",get children(){const i=zC();return C(i,A(zt,{get each(){return t.menu.filter(o=>o.when==null||o.when())},children:o=>A(FC,{item:o,onClose:n})})),i}})};yt(["click"]);const HC=B('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),og=B('<span class="truncate">'),WC=B('<img class="h-4 max-w-[3rem]">'),qC=t=>t.type==="LikeDislike"&&t.content==="+",lv=t=>A(Zn,{get fallback(){return(()=>{const e=og();return C(e,()=>t.reactionTypes.content),e})()},get children(){return[A(Ye,{get when(){return qC(t.reactionTypes)},get children(){const e=HC();return C(e,A(ov,{})),e}}),A(Ye,{get when(){return t.reactionTypes.type==="Emoji"&&t.reactionTypes},keyed:!0,children:({content:e})=>(()=>{const n=og();return C(n,e),n})()}),A(Ye,{get when(){return t.reactionTypes.type==="CustomEmoji"&&t.reactionTypes},keyed:!0,children:({shortcode:e,url:n})=>(()=>{const i=WC();return We(i,"src",n),We(i,"alt",`:${e}:`),i})()})]}});function cv(t){return t&&t.__esModule?t.default:t}function Ln(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var yl,$e,uv,js,dv,ag,Wa={},fv=[],ZC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Nr(t,e){for(var n in e)t[n]=e[n];return t}function hv(t){var e=t.parentNode;e&&e.removeChild(t)}function Tu(t,e,n){var i,o,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?o=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?yl.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return wa(t,l,i,o,null)}function wa(t,e,n,i,o){var a={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++uv};return o==null&&$e.vnode!=null&&$e.vnode(a),a}function hr(){return{current:null}}function ts(t){return t.children}function Kn(t,e){this.props=t,this.context=e}function ns(t,e){if(e==null)return t.__?ns(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?ns(t):null}function pv(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return pv(t)}}function lg(t){(!t.__d&&(t.__d=!0)&&js.push(t)&&!qa.__r++||ag!==$e.debounceRendering)&&((ag=$e.debounceRendering)||dv)(qa)}function qa(){for(var t;qa.__r=js.length;)t=js.sort(function(e,n){return e.__v.__b-n.__v.__b}),js=[],t.some(function(e){var n,i,o,a,l,u;e.__d&&(l=(a=(n=e).__v).__e,(u=n.__P)&&(i=[],(o=Nr({},a)).__v=a.__v+1,bd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??ns(a),a.__h),yv(i,a),a.__e!=l&&pv(a)))})}function gv(t,e,n,i,o,a,l,u,d,f){var p,g,m,w,_,$,x,k=i&&i.__k||fv,I=k.length;for(n.__k=[],p=0;p<e.length;p++)if((w=n.__k[p]=(w=e[p])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?wa(null,w,null,null,w):Array.isArray(w)?wa(ts,{children:w},null,null,null):w.__b>0?wa(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(m=k[p])===null||m&&w.key==m.key&&w.type===m.type)k[p]=void 0;else for(g=0;g<I;g++){if((m=k[g])&&w.key==m.key&&w.type===m.type){k[g]=void 0;break}m=null}bd(t,w,m=m||Wa,o,a,l,u,d,f),_=w.__e,(g=w.ref)&&m.ref!=g&&(x||(x=[]),m.ref&&x.push(m.ref,null,w),x.push(g,w.__c||_,w)),_!=null?($==null&&($=_),typeof w.type=="function"&&w.__k===m.__k?w.__d=d=vv(w,d,t):d=mv(t,w,m,k,_,d),typeof n.type=="function"&&(n.__d=d)):d&&m.__e==d&&d.parentNode!=t&&(d=ns(m))}for(n.__e=$,p=I;p--;)k[p]!=null&&(typeof n.type=="function"&&k[p].__e!=null&&k[p].__e==n.__d&&(n.__d=ns(i,p+1)),_v(k[p],k[p]));if(x)for(p=0;p<x.length;p++)bv(x[p],x[++p],x[++p])}function vv(t,e,n){for(var i,o=t.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=t,e=typeof i.type=="function"?vv(i,e,n):mv(n,i,i,o,i.__e,e));return e}function Za(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Za(n,e)}):e.push(t)),e}function mv(t,e,n,i,o,a){var l,u,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;t.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function KC(t,e,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in e||Ka(t,a,null,n[a],i);for(a in e)o&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||Ka(t,a,e[a],n[a],i)}function cg(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||ZC.test(e)?n:n+"px"}function Ka(t,e,n,i,o){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||cg(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||cg(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?i||t.addEventListener(e,a?dg:ug,a):t.removeEventListener(e,a?dg:ug,a);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function ug(t){this.l[t.type+!1]($e.event?$e.event(t):t)}function dg(t){this.l[t.type+!0]($e.event?$e.event(t):t)}function bd(t,e,n,i,o,a,l,u,d){var f,p,g,m,w,_,$,x,k,I,E,S=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,a=[u]),(f=$e.__b)&&f(e);try{e:if(typeof S=="function"){if(x=e.props,k=(f=S.contextType)&&i[f.__c],I=f?k?k.props.value:f.__:i,n.__c?$=(p=e.__c=n.__c).__=p.__E:("prototype"in S&&S.prototype.render?e.__c=p=new S(x,I):(e.__c=p=new Kn(x,I),p.constructor=S,p.render=GC),k&&k.sub(p),p.props=x,p.state||(p.state={}),p.context=I,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),S.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Nr({},p.__s)),Nr(p.__s,S.getDerivedStateFromProps(x,p.__s))),m=p.props,w=p.state,g)S.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(S.getDerivedStateFromProps==null&&x!==m&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,I),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,I)===!1||e.__v===n.__v){p.props=x,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(L){L&&(L.__=e)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,I),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(m,w,_)})}p.context=I,p.props=x,p.state=p.__s,(f=$e.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Nr(Nr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(_=p.getSnapshotBeforeUpdate(m,w)),E=f!=null&&f.type===ts&&f.key==null?f.props.children:f,gv(t,Array.isArray(E)?E:[E],e,n,i,o,a,l,u,d),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),$&&(p.__E=p.__=null),p.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=VC(n.__e,e,n,i,o,a,l,d);(f=$e.diffed)&&f(e)}catch(L){e.__v=null,(d||a!=null)&&(e.__e=u,e.__h=!!d,a[a.indexOf(u)]=null),$e.__e(L,e,n)}}function yv(t,e){$e.__c&&$e.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){$e.__e(i,n.__v)}})}function VC(t,e,n,i,o,a,l,u){var d,f,p,g=n.props,m=e.props,w=e.type,_=0;if(w==="svg"&&(o=!0),a!=null){for(;_<a.length;_++)if((d=a[_])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){t=d,a[_]=null;break}}if(t==null){if(w===null)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,m.is&&m),a=null,u=!1}if(w===null)g===m||u&&t.data===m||(t.data=m);else{if(a=a&&yl.call(t.childNodes),f=(g=n.props||Wa).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},_=0;_<t.attributes.length;_++)g[t.attributes[_].name]=t.attributes[_].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(KC(t,m,g,o,u),p)e.__k=[];else if(_=e.props.children,gv(t,Array.isArray(_)?_:[_],e,n,i,o&&w!=="foreignObject",a,l,a?a[0]:n.__k&&ns(n,0),u),a!=null)for(_=a.length;_--;)a[_]!=null&&hv(a[_]);u||("value"in m&&(_=m.value)!==void 0&&(_!==g.value||_!==t.value||w==="progress"&&!_)&&Ka(t,"value",_,g.value,!1),"checked"in m&&(_=m.checked)!==void 0&&_!==t.checked&&Ka(t,"checked",_,g.checked,!1))}return t}function bv(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){$e.__e(i,n)}}function _v(t,e,n){var i,o;if($e.unmount&&$e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||bv(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){$e.__e(a,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&_v(i[o],e,typeof t.type!="function");n||t.__e==null||hv(t.__e),t.__e=t.__d=void 0}function GC(t,e,n){return this.constructor(t,n)}function wv(t,e,n){var i,o,a;$e.__&&$e.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,a=[],bd(e,t=(!i&&n||e).__k=Tu(ts,null,[t]),o||Wa,Wa,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?yl.call(e.childNodes):null,a,!i&&n?n:o?o.__e:e.firstChild,i),yv(a,t)}yl=fv.slice,$e={__e:function(t,e){for(var n,i,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(a){t=a}throw t}},uv=0,Kn.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Nr({},this.state),typeof t=="function"&&(t=t(Nr({},n),this.props)),t&&Nr(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),lg(this))},Kn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),lg(this))},Kn.prototype.render=ts,js=[],dv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qa.__r=0;var QC=0;function Z(t,e,n,i,o){var a,l,u={};for(l in e)l=="ref"?a=e[l]:u[l]=e[l];var d={type:t,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--QC,__source:i,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return $e.vnode&&$e.vnode(d),d}function JC(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function YC(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var zr={set:JC,get:YC};const Xc=new Map,XC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function eS(){for(const{v:t,emoji:e}of XC)if(xv(e))return t}function tS(){return!xv("🇨🇦")}function xv(t){if(Xc.has(t))return Xc.get(t);const e=nS(t);return Xc.set(t,e),e}const nS=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,i=Math.floor(e/2);return t.font=i+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,o=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(o,0,22),t.fillStyle="#0000FF",t.fillText(o,n,22);const a=t.getImageData(0,0,n,e).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),p=t.getImageData(d,f,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||t.measureText(o).width>=n)}})();var fg={latestVersion:eS,noCountryFlags:tS};const Au=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Rt=null;function rS(t){Rt||(Rt=zr.get("frequently")||{});const e=t.id||t;e&&(Rt[e]||(Rt[e]=0),Rt[e]+=1,zr.set("last",e),zr.set("frequently",Rt))}function iS({maxFrequentRows:t,perLine:e}){if(!t)return[];Rt||(Rt=zr.get("frequently"));let n=[];if(!Rt){Rt={};for(let a in Au.slice(0,e)){const l=Au[a];Rt[l]=e-a,n.push(l)}return n}const i=t*e,o=zr.get("last");for(let a in Rt)n.push(a);if(n.sort((a,l)=>{const u=Rt[l],d=Rt[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Rt[l];o&&n.indexOf(o)==-1&&(delete Rt[n[n.length-1]],n.splice(-1,1,o)),zr.set("frequently",Rt)}return n}var $v={add:rS,get:iS,DEFAULTS:Au},Ev={};Ev=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var gr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Mt=null,ze=null;const eu={};async function hg(t){if(eu[t])return eu[t];const n=await(await fetch(t)).json();return eu[t]=n,n}let tu=null,kv=null,Cv=!1;function bl(t,{caller:e}={}){return tu||(tu=new Promise(n=>{kv=n})),t?sS(t):e&&!Cv&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),tu}async function sS(t){Cv=!0;let{emojiVersion:e,set:n,locale:i}=t;if(e||(e=gr.emojiVersion.value),n||(n=gr.set.value),i||(i=gr.locale.value),ze)ze.categories=ze.categories.filter(d=>!d.name);else{ze=(typeof t.data=="function"?await t.data():t.data)||await hg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),ze.emoticons={},ze.natives={},ze.categories.unshift({id:"frequent",emojis:[]});for(const d in ze.aliases){const f=ze.aliases[d],p=ze.emojis[f];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}ze.originalCategories=ze.categories}if(Mt=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(i=="en"?cv(Ev):await hg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),t.custom)for(let d in t.custom){d=parseInt(d);const f=t.custom[d],p=t.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Mt.categories.custom),p&&!f.icon&&(f.target=p.target||p),ze.categories.push(f);for(const g of f.emojis)ze.emojis[g.id]=g}}t.categories&&(ze.categories=ze.originalCategories.filter(d=>t.categories.indexOf(d.id)!=-1).sort((d,f)=>{const p=t.categories.indexOf(d.id),g=t.categories.indexOf(f.id);return p-g}));let o=null,a=null;n=="native"&&(o=fg.latestVersion(),a=t.noCountryFlags||fg.noCountryFlags());let l=ze.categories.length,u=!1;for(;l--;){const d=ze.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:m}=t;g=g>=0?g:gr.maxFrequentRows.value,m||(m=gr.perLine.value),d.emojis=$v.get({maxFrequentRows:g,perLine:m})}if(!d.emojis||!d.emojis.length){ze.categories.splice(l,1);continue}const{categoryIcons:f}=t;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],m=g.id?g:ze.emojis[g],w=()=>{d.emojis.splice(p,1)};if(!m||t.exceptEmojis&&t.exceptEmojis.includes(m.id)){w();continue}if(o&&m.version>o){w();continue}if(a&&d.id=="flags"&&!uS.includes(m.id)){w();continue}if(!m.search){if(u=!0,m.search=","+[[m.id,!1],[m.name,!0],[m.keywords,!1],[m.emoticons,!1]].map(([$,x])=>{if($)return(Array.isArray($)?$:[$]).map(k=>(x?k.split(/[-|_|\s]+/):[k]).map(I=>I.toLowerCase())).flat()}).flat().filter($=>$&&$.trim()).join(","),m.emoticons)for(const $ of m.emoticons)ze.emoticons[$]||(ze.emoticons[$]=m.id);let _=0;for(const $ of m.skins){if(!$)continue;_++;const{native:x}=$;x&&(ze.natives[x]=m.id,m.search+=`,${x}`);const k=_==1?"":`:skin-tone-${_}:`;$.shortcodes=`:${m.id}:${k}`}}}}u&&Ki.reset(),kv()}function Sv(t,e,n){t||(t={});const i={};for(let o in e)i[o]=Tv(o,t,e,n);return i}function Tv(t,e,n,i){const o=n[t];let a=i&&i.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const oS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Iu=null;function aS(t){return t.id?t:ze.emojis[t]||ze.emojis[ze.aliases[t]]||ze.emojis[ze.natives[t]]}function lS(){Iu=null}async function cS(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await bl(null,{caller:n||"SearchIndex.search"});const i=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Iu||(Iu=Object.values(ze.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],p=l[d.id];return f==p?u.id.localeCompare(d.id):f-p}),a.length>e&&(a=a.slice(0,e))),a}var Ki={search:cS,get:aS,reset:lS,SHORTCODES_REGEX:oS};const uS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function dS(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,i)=>n==e[i])}async function fS(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function hS(t,{skinIndex:e=0}={}){const n=t.skins[e]||(()=>(e=0,t.skins[e]))(),i={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(i.skin=e+1),n.src&&(i.src=n.src),t.aliases&&t.aliases.length&&(i.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(i.emoticons=t.emoticons),i}const pS={activity:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),Z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),Z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),Z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),Z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},gS={loupe:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Va={categories:pS,search:gS};function Ru(t){let{id:e,skin:n,emoji:i}=t;if(t.shortcodes){const u=t.shortcodes.match(Ki.SHORTCODES_REGEX);u&&(e=u[1],u[2]&&(n=u[2]))}if(i||(i=Ki.get(e||t.native)),!i)return t.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/64/${o.unified}.png`:void 0),l=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/sheets-256/64.png`;return Z("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:a?Z("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):t.set=="native"?Z("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):Z("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${l})`,backgroundSize:`${100*ze.sheet.cols}% ${100*ze.sheet.rows}%`,backgroundPosition:`${100/(ze.sheet.cols-1)*o.x}% ${100/(ze.sheet.rows-1)*o.y}%`}})})}const vS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Av extends vS{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,i){if(!this.component)return;const o=Tv(e,{[e]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:o}):(this.component.props[e]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const i=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class mS extends Av{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var Iv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:gr.set,skin:gr.skin};class Rv extends Av{async connectedCallback(){const e=Sv(this.props,Iv,this);e.element=this,e.ref=n=>{this.component=n},await bl(),!this.disconnected&&wv(Z(Ru,{...e}),this)}constructor(e){super(e)}}Ln(Rv,"Props",Iv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Rv);var pg,Ou=[],gg=$e.__b,vg=$e.__r,mg=$e.diffed,yg=$e.__c,bg=$e.unmount;function yS(){var t;for(Ou.sort(function(e,n){return e.__v.__b-n.__v.__b});t=Ou.pop();)if(t.__P)try{t.__H.__h.forEach(xa),t.__H.__h.forEach(Lu),t.__H.__h=[]}catch(e){t.__H.__h=[],$e.__e(e,t.__v)}}$e.__b=function(t){gg&&gg(t)},$e.__r=function(t){vg&&vg(t);var e=t.__c.__H;e&&(e.__h.forEach(xa),e.__h.forEach(Lu),e.__h=[])},$e.diffed=function(t){mg&&mg(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Ou.push(e)!==1&&pg===$e.requestAnimationFrame||((pg=$e.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),_g&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);_g&&(i=requestAnimationFrame(o))})(yS))},$e.__c=function(t,e){e.some(function(n){try{n.__h.forEach(xa),n.__h=n.__h.filter(function(i){return!i.__||Lu(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],$e.__e(i,n.__v)}}),yg&&yg(t,e)},$e.unmount=function(t){bg&&bg(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{xa(i)}catch(o){e=o}}),e&&$e.__e(e,n.__v))};var _g=typeof requestAnimationFrame=="function";function xa(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function Lu(t){t.__c=t.__()}function bS(t,e){for(var n in e)t[n]=e[n];return t}function wg(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function Ga(t){this.props=t}(Ga.prototype=new Kn).isPureReactComponent=!0,Ga.prototype.shouldComponentUpdate=function(t,e){return wg(this.props,t)||wg(this.state,e)};var xg=$e.__b;$e.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),xg&&xg(t)};var _S=$e.__e;$e.__e=function(t,e,n){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}_S(t,e,n)};var $g=$e.unmount;function nu(){this.__u=0,this.t=null,this.__b=null}function Ov(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function pa(){this.u=null,this.o=null}$e.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),$g&&$g(t)},(nu.prototype=new Kn).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Ov(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(m,w,_){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function($){return g($,w,_)}),m.__c&&m.__c.__P===w&&(m.__e&&_.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=_)),m}(f,f.__c.__P,f.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=e.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),t.then(l,l)},nu.prototype.componentWillUnmount=function(){this.t=[]},nu.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=bS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=e.__e&&Tu(ts,null,t.fallback);return o&&(o.__h=null),[Tu(ts,null,e.__e?null:t.children),o]};var Eg=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(pa.prototype=new Kn).__e=function(t){var e=this,n=Ov(e.__v),i=e.o.get(t);return i[0]++,function(o){var a=function(){e.props.revealOrder?(i.push(o),Eg(e,t,i)):o()};n?n(a):a()}},pa.prototype.render=function(t){this.u=null,this.o=new Map;var e=Za(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},pa.prototype.componentDidUpdate=pa.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Eg(t,n,e)})};var wS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,xS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$S=typeof document<"u",ES=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};Kn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Kn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var kg=$e.event;function kS(){}function CS(){return this.cancelBubble}function SS(){return this.defaultPrevented}$e.event=function(t){return kg&&(t=kg(t)),t.persist=kS,t.isPropagationStopped=CS,t.isDefaultPrevented=SS,t.nativeEvent=t};var Cg={configurable:!0,get:function(){return this.class}},Sg=$e.vnode;$e.vnode=function(t){var e=t.type,n=t.props,i=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var a in i={},n){var l=n[a];$S&&a==="children"&&e==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+e)&&!ES(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&xS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}e=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Za(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),e=="select"&&i.defaultValue!=null&&(i.value=Za(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),t.props=i,n.class!=n.className&&(Cg.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Cg))}t.$$typeof=wS,Sg&&Sg(t)};var Tg=$e.__r;$e.__r=function(t){Tg&&Tg(t),t.__c};const TS={light:"outline",dark:"solid"};class AS extends Ga{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return Z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return Z("img",{src:n.src})}const i=Va.categories[e.id]||Va.categories.custom,o=this.props.icons=="auto"?TS[this.props.theme]:this.props.icons;return i[o]||i}render(){let e=null;return Z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:Z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Mt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(e=i),Z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),Z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=ze.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class IS extends Ga{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const ga={rowsPerRender:10};class RS extends Kn{getInitialState(e=this.props){return{skin:zr.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Mt.rtl?"rtl":"ltr",this.refs={menu:hr(),navigation:hr(),scroll:hr(),search:hr(),searchInput:hr(),skinToneButton:hr(),skinToneRadio:hr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(e={}){await bl(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=ze;this.refs.categories=new Map;const n=ze.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%ga.rowsPerRender?{}:hr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of e){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:hr(),rows:a})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:i}=e,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const i=this.state.searchResults||this.grid,o=i[e]&&i[e][n];if(o)return Ki.get(o)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,i=l=>{l!=e.state.categoryId&&e.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?e[a]=!0:delete e[a]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(ga.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*ga.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const p=(()=>{if(d==0&&f==0&&!e.repeat&&(i||a))return null;if(d==-1)return!e.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const m=i?-1:1;if(f+=m,!g[f]){if(d+=m,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(p)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:e,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(e=i[n].__categoryId),e&&(l=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=hS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&$v.add(o,this.props),this.props.onEmojiSelect(o,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),zr.set("skin",e)}renderNav(){return Z(AS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return Z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[Z("div",{class:"flex flex-middle flex-grow",children:[Z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:Z(Ru,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),Z("div",{class:`margin-${this.dir[0]}`,children:e||n?Z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[Z("div",{class:"preview-title ellipsis",children:e?e.name:Mt.search_no_results_1}),Z("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Mt.search_no_results_2})]}):Z("div",{class:"preview-placeholder color-c",children:Mt.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(e.skins[l-1]||e.skins[0]).native,f=dS(this.state.pos,n),p=n.concat(e.id).join("");return Z(IS,{selected:f,skin:l,size:a,children:Z("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[Z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),Z(Ru,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return Z("div",{children:[Z("div",{class:"spacer"}),Z("div",{class:"flex flex-middle",children:[Z("div",{class:"search relative flex-grow",children:[Z("input",{type:"search",ref:this.refs.searchInput,placeholder:Mt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),Z("span",{class:"icon loupe flex",children:Va.search.loupe}),this.state.searchResults&&Z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Va.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?Z("div",{class:"category",ref:this.refs.search,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Mt.categories.search}),Z("div",{children:e.length?e.map((n,i)=>Z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:e}))})):Z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&Z("a",{onClick:this.props.onAddCustomEmoji,children:Mt.add_custom})})})]}):null}renderCategories(){const{categories:e}=ze,n=!!this.state.searchResults,i=this.getPerLine();return Z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return Z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Mt.categories[o.id]}),Z("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%ga.rowsPerRender,p=this.state.visibleRows[f],g="current"in u?u:void 0;if(!p&&!g)return null;const m=d*i,w=m+i,_=o.emojis.slice(m,w);return _.length<i&&_.push(...new Array(i-_.length)),Z("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&_.map(($,x)=>{if(!$)return Z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const k=Ki.get($);return this.renderEmojiButton(k,{pos:[u.index,x],posinset:u.posinset+x,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:Z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:Z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Mt.skins.choose,title:Mt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:Z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return Z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),Z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Mt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return Z("div",{children:[Z("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Mt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),Z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[Z("span",{class:`skin-tone skin-tone-${l}`}),Z("span",{class:"margin-small-lr",children:Mt.skins[l]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return Z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&Z("div",{class:"padding-lr",children:this.renderSearch()}),Z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:Z("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),Ln(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Ln(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Ln(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Ln(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Ln(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Ki.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),Ln(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Ln(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Ln(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Ln(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await fS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class _d extends mS{async connectedCallback(){const e=Sv(this.props,gr,this);e.element=this,e.ref=n=>{this.component=n},await bl(e),!this.disconnected&&wv(Z(RS,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:cv(Lv)})}}Ln(_d,"Props",gr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",_d);var Lv={};Lv=`:host {
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

`;const Pv=t=>{let e,n;const{config:i}=et(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new _d({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),t.onEmojiSelect?.(d),e?.close()}}),e?.elem?.appendChild(n)};return mr(()=>{o()}),A(yd,{ref:l=>{e=l},position:"bottom",get button(){return t.children},onOpen:a,onClose:o})},OS=B("<div>"),LS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),PS=B("<br>"),MS=B("<span>: "),BS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),jS=t=>{const e=mt(),[n,i]=Ie(!1);return A(be,{get when(){return!t.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=BS();return o.$$click=()=>i(!0),C(o,()=>e()("post.contentWarning.show"),null),C(o,A(be,{get when(){return t.contentWarning.reason!=null},get children(){return[PS(),(()=>{const a=MS(),l=a.firstChild;return C(a,()=>e()("post.contentWarning.reason"),l),C(a,()=>t.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=OS();return C(o,()=>t.children),o})(),A(be,{get when(){return t.contentWarning.contentWarning},get children(){const o=LS();return o.$$click=()=>i(!1),o}})]}})};yt(["click"]);const Mv=t=>{const{profile:e}=ps(()=>({pubkey:t.pubkey}));return A(be,{get when(){return(e()?.name?.length??0)>0},get fallback(){return`@${ho(t.pubkey)}`},get children(){return["@",qe(()=>e()?.name??t.pubkey)]}})},NS=B('<a target="_blank" rel="noreferrer noopener">'),po=t=>{const e=()=>{try{const n=new URL(t.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return A(be,{get when(){return e()},get fallback(){return t.href},get children(){const n=NS();return C(n,()=>t.children??t.href),De(i=>{const o=t.class,a=t.href;return o!==i._v$&&C0(n,i._v$=o),a!==i._v$2&&We(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},DS=t=>{try{const e=new URL(t);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(e.pathname)}catch{return!1}},US=t=>{try{const e=new URL(t);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(e.pathname)}catch{return!1}},zS=t=>{try{const e=new URL(t);if(e.host==="i.imgur.com"||e.host==="imgur.com"){const n=e.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(e),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return e.toString()}if(e.host==="i.gyazo.com"){const n=new URL(e);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${e.pathname}`,n.toString()}return e.toString()}catch{return t}},FS=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),HS=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),WS=t=>{let e;const n=mt(),[i,o]=Ie(t.initialHidden);return A(be,{get when(){return!i()},get fallback(){return(()=>{const a=HS();return a.$$click=()=>o(!1),C(a,()=>n()("post.showImage")),a})()},get children(){return A(po,{class:"my-2 block",get href(){return t.url},get children(){const a=FS(),l=e;return typeof l=="function"?yr(l,a):e=a,De(u=>{const d=zS(t.url),f=t.url;return d!==u._v$&&We(a,"src",u._v$=d),f!==u._v$2&&We(a,"alt",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),a}})}})};yt(["click"]);const qS=B('<div class="my-1 rounded border p-1">'),ZS=t=>A(be,{get when(){return t.mentionedEvent.marker!=null&&t.mentionedEvent.marker.length>0},get fallback(){return A(Hs,{get eventId(){return t.mentionedEvent.eventId}})},get children(){const e=qS();return C(e,A(ro,{get eventId(){return t.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[vt.Text]}})),e}}),KS=B('<button class="inline select-text text-blue-500 underline">'),ru=t=>{const{showProfile:e}=Zr(),n=()=>{e(t.pubkey)};return(()=>{const i=KS();return i.$$click=n,C(i,A(Mv,{get pubkey(){return t.pubkey}})),i})()};yt(["click"]);const VS=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),GS=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),QS=t=>{let e;const n=mt(),[i,o]=Ie(t.initialHidden);return A(be,{get when(){return!i()},get fallback(){return(()=>{const a=GS();return a.$$click=()=>o(!1),C(a,()=>n()("post.showVideo")),a})()},get children(){return A(po,{class:"my-2 block",get href(){return t.url},get children(){const a=VS(),l=a.firstChild,u=e;return typeof u=="function"?yr(u,a):e=a,C(l,()=>n()("post.download")),De(d=>{const f=t.url,p=t.url;return f!==d._v$&&We(a,"src",d._v$=f),p!==d._v$2&&We(l,"href",d._v$2=p),d},{_v$:void 0,_v$2:void 0}),a}})}})};yt(["click"]);const[wd,JS]=Ie({}),Bv=t=>{wd()[t]==null&&JS(e=>({...e,[t]:new MessageChannel}))},YS=t=>{const e=()=>wd()[t().id],n=(o,a)=>{const l={requestId:o,request:a};e().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=p=>{const g=p.data;g.requestId===o&&(e().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{e().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),e().port1.addEventListener("message",f,!1),e().port1.start()});return wr(()=>{const{id:o}=t();Bv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},XS=t=>{const e=qe(t),n=()=>wd()[e().id];wr(()=>{const{id:i}=e();Bv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=e().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const m={requestId:u,ok:!0,response:g};o.postMessage(m)}).catch(g=>{const m={requestId:u,ok:!1,error:g};o.postMessage(m)})};o.addEventListener("message",a),o.start(),mr(()=>{o.removeEventListener("message",a)})})},xd=()=>YS(()=>({id:"CommandChannel"})),eT=t=>{XS(()=>({id:"CommandChannel",handler:e=>{const{commandType:n,handler:i}=t();e.command===n&&i(e)}}))},iu=B("<span>"),Ag=B('<div class="my-1 rounded border p-1">'),tT=B('<span class="text-blue-500 underline">'),nT=B('<button class="select-text text-blue-500 underline">'),rT=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),iT=t=>{const{config:e,saveColumn:n}=et(),i=xd(),o=()=>pd(t.event),a=l=>{n(fd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return A(zt,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=iu();return C(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!e().showMedia||o().contentWarning().contentWarning||!t.embedding;return DS(l.content)?A(WS,{get url(){return l.content},get initialHidden(){return u()}}):US(l.content)?A(QS,{get url(){return l.content},get initialHidden(){return u()}}):A(po,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=iu();return C(d,()=>l.content),d})();if(u.type==="MentionedUser")return A(ru,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return t.embedding?A(ZS,{mentionedEvent:u}):A(Hs,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&t.embedding?(()=>{const u=Ag();return C(u,A(ro,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[vt.Text]}})),u})():l.data.type==="nevent"&&t.embedding?(()=>{const u=Ag();return C(u,A(ro,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?A(ru,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?A(ru,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=tT();return C(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=nT();return u.$$click=()=>a(l.content),C(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=iu();return C(d,()=>l.content),d})():(()=>{const d=rT();return We(d,"src",u),De(f=>{const p=l.content,g=l.shortcode;return p!==f._v$&&We(d,"alt",f._v$=p),g!==f._v$2&&We(d,"title",f._v$2=g),f},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};yt(["click"]);const sT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),rs=(t={})=>(()=>{const e=sT();return rt(e,t,!0,!0),e})(),oT=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),aT=t=>{let e;const n=i=>{i.target===e&&t.onClose?.()};return(()=>{const i=oT();i.$$click=n;const o=e;return typeof o=="function"?yr(o,i):e=i,C(i,()=>t.children),i})()};yt(["click"]);const lT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),ki=t=>A(aT,{onClose:()=>t.onClose?.(),get children(){const e=lT(),n=e.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>t.onClose?.(),C(i,A(be,{get when(){return t?.closeButton},get fallback(){return A(rs,{})},keyed:!0,children:a=>a()})),C(o,()=>t.children),e}});yt(["click"]);const cT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),uT=(t={})=>(()=>{const e=cT();return rt(e,t,!0,!0),e})(),dT=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),fT=B('<div class="relative inline-block"><button type="button">'),hT=t=>{const[e,n]=Ie(!1),i=()=>{navigator.clipboard.writeText(t.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=fT(),a=o.firstChild;return a.$$click=i,C(a,A(uT,{})),C(o,A(be,{get when(){return e()},get children(){return dT()}}),null),De(()=>C0(a,t.class)),o})()};yt(["click"]);const pT=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),gT=t=>{const e=qe(()=>JSON.stringify(t.event,null,2));return A(ki,{get onClose(){return t.onClose},get children(){const n=pT(),i=n.firstChild,o=i.nextSibling;return C(i,e),C(o,A(hT,{class:"h-4 w-4",get text(){return e()}})),n}})},vT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),mT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 select-text truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),yT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),bT=t=>{const{profile:e}=ps(()=>({pubkey:t.pubkey}));return(()=>{const n=mT(),i=n.firstChild,o=i.nextSibling,a=o.firstChild,l=a.firstChild,u=l.firstChild,d=u.firstChild;return i.$$click=f=>{f.preventDefault(),t.onShowProfile?.()},C(i,A(be,{get when(){return e()?.picture},keyed:!0,children:f=>(()=>{const p=yT();return We(p,"src",f),p})()})),l.$$click=f=>{f.preventDefault(),t?.onShowProfile?.()},C(u,A(be,{get when(){return(e()?.display_name?.length??0)>0},get children(){const f=vT();return C(f,()=>e()?.display_name),f}}),d),C(d,A(be,{get when(){return e()?.name},get fallback(){return`@${ho(t.pubkey)}`},keyed:!0,children:f=>`@${f}`})),n})()};yt(["click"]);const _T=B('<div class="px-4 py-2"><div> 件</div><div>'),wT=B('<div class="flex border-t py-1">'),Pu=t=>{const{showProfile:e}=Zr();return A(ki,{get onClose(){return t.onClose},get children(){const n=_T(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return C(i,()=>t.data.length,o),C(a,A(zt,{get each(){return t.data},children:l=>{const u=()=>t.pubkeyExtractor(l);return(()=>{const d=wT();return C(d,A(be,{get when(){return t.renderInfo},keyed:!0,children:f=>f(l)}),null),C(d,A(bT,{get pubkey(){return u()},onShowProfile:()=>e(u())}),null),d})()}})),n}})},xT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),jv=(t={})=>(()=>{const e=xT();return rt(e,t,!0,!0),e})(),$T=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),ET=(t={})=>(()=>{const e=$T();return rt(e,t,!0,!0),e})(),kT=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),CT=(t={})=>(()=>{const e=kT();return rt(e,t,!0,!0),e})();var $d={},go={},Nv={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,p){this.fn=d,this.context=f,this.once=p||!1}function a(d,f,p,g,m){if(typeof p!="function")throw new TypeError("The listener must be a function");var w=new o(p,g||d,m),_=n?n+f:f;return d._events[_]?d._events[_].fn?d._events[_]=[d._events[_],w]:d._events[_].push(w):(d._events[_]=w,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],p,g;if(this._eventsCount===0)return f;for(g in p=this._events)e.call(p,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(p)):f},u.prototype.listeners=function(f){var p=n?n+f:f,g=this._events[p];if(!g)return[];if(g.fn)return[g.fn];for(var m=0,w=g.length,_=new Array(w);m<w;m++)_[m]=g[m].fn;return _},u.prototype.listenerCount=function(f){var p=n?n+f:f,g=this._events[p];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,p,g,m,w,_){var $=n?n+f:f;if(!this._events[$])return!1;var x=this._events[$],k=arguments.length,I,E;if(x.fn){switch(x.once&&this.removeListener(f,x.fn,void 0,!0),k){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,p),!0;case 3:return x.fn.call(x.context,p,g),!0;case 4:return x.fn.call(x.context,p,g,m),!0;case 5:return x.fn.call(x.context,p,g,m,w),!0;case 6:return x.fn.call(x.context,p,g,m,w,_),!0}for(E=1,I=new Array(k-1);E<k;E++)I[E-1]=arguments[E];x.fn.apply(x.context,I)}else{var S=x.length,L;for(E=0;E<S;E++)switch(x[E].once&&this.removeListener(f,x[E].fn,void 0,!0),k){case 1:x[E].fn.call(x[E].context);break;case 2:x[E].fn.call(x[E].context,p);break;case 3:x[E].fn.call(x[E].context,p,g);break;case 4:x[E].fn.call(x[E].context,p,g,m);break;default:if(!I)for(L=1,I=new Array(k-1);L<k;L++)I[L-1]=arguments[L];x[E].fn.apply(x[E].context,I)}}return!0},u.prototype.on=function(f,p,g){return a(this,f,p,g,!1)},u.prototype.once=function(f,p,g){return a(this,f,p,g,!0)},u.prototype.removeListener=function(f,p,g,m){var w=n?n+f:f;if(!this._events[w])return this;if(!p)return l(this,w),this;var _=this._events[w];if(_.fn)_.fn===p&&(!m||_.once)&&(!g||_.context===g)&&l(this,w);else{for(var $=0,x=[],k=_.length;$<k;$++)(_[$].fn!==p||m&&!_[$].once||g&&_[$].context!==g)&&x.push(_[$]);x.length?this._events[w]=x.length===1?x[0]:x:l(this,w)}return this},u.prototype.removeAllListeners=function(f){var p;return f?(p=n?n+f:f,this._events[p]&&l(this,p)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,t.exports=u})(Nv);var _l=Nv.exports,Ed={},vo={};Object.defineProperty(vo,"__esModule",{value:!0});vo.SearchResult=void 0;const ST=/\$&/g,TT=/\$(\d)/g;class AT{constructor(e,n,i){this.data=e,this.term=n,this.strategy=i}getReplacementData(e){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(e);if(o==null||o.index==null)return null;const a=n.replace(ST,o[0]).replace(TT,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(e,n){const i=this.getReplacementData(e);if(i!==null)return n=i.afterCursor+n,[[e.slice(0,i.start),i.beforeCursor,e.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}vo.SearchResult=AT;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Strategy=t.DEFAULT_INDEX=void 0;const e=vo;t.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:t.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(p=>new e.SearchResult(p,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}t.Strategy=n})(Ed);Object.defineProperty(go,"__esModule",{value:!0});go.Completer=void 0;const IT=_l,RT=Ed;class OT extends IT.EventEmitter{constructor(e){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=e.map(n=>new RT.Strategy(n))}destroy(){return this.strategies.forEach(e=>e.destroy()),this}run(e){for(const n of this.strategies)if(n.execute(e,this.handleQueryResult))return;this.handleQueryResult([])}}go.Completer=OT;var kd={},gs={};Object.defineProperty(gs,"__esModule",{value:!0});gs.createCustomEvent=void 0;const LT=typeof window<"u"&&!!window.CustomEvent,PT=(t,e)=>{if(LT)return new CustomEvent(t,e);const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,e?.cancelable||!1,e?.detail||void 0),n};gs.createCustomEvent=PT;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=t.DEFAULT_DROPDOWN_CLASS_NAME=t.DEFAULT_DROPDOWN_PLACEMENT=t.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const e=_l,n=gs;t.DEFAULT_DROPDOWN_MAX_COUNT=10,t.DEFAULT_DROPDOWN_PLACEMENT="auto",t.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends e.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||t.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||t.DEFAULT_DROPDOWN_MAX_COUNT).map((f,p)=>{var g;return new o(this,p,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const p=this.option.placement||t.DEFAULT_DROPDOWN_PLACEMENT;if(p==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}p==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(p=>p.data)):d||"",this.el.appendChild(f),this}}t.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=m=>{m.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const p=document.createElement("li");p.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),p.appendChild(g),p.addEventListener("click",this.onClick),this.el=p}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(kd);var wl={};Object.defineProperty(wl,"__esModule",{value:!0});wl.Editor=void 0;const MT=_l,va=gs;class BT extends MT.EventEmitter{destroy(){return this}applySearchResult(e){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(e){const n=(0,va.createCustomEvent)("move",{cancelable:!0,detail:{code:e}});return this.emit("move",n),n}emitEnterEvent(){const e=(0,va.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",e),e}emitChangeEvent(){const e=(0,va.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",e),e}emitEscEvent(){const e=(0,va.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",e),e}getCode(e){return e.keyCode===9||e.keyCode===13?"ENTER":e.keyCode===27?"ESC":e.keyCode===38?"UP":e.keyCode===40||e.keyCode===78&&e.ctrlKey?"DOWN":e.keyCode===80&&e.ctrlKey?"UP":"OTHER"}}wl.Editor=BT;var xl={};Object.defineProperty(xl,"__esModule",{value:!0});xl.Textcomplete=void 0;const jT=_l,NT=kd,DT=go,UT=["show","shown","render","rendered","selected","hidden","hide"];class zT extends jT.EventEmitter{constructor(e,n,i){super(),this.editor=e,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new DT.Completer(n),this.dropdown=NT.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(e=!0){return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}startListening(){var e;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of UT)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.addEventListener("resize",this.handleResize)}stopListening(){var e;(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}xl.Textcomplete=zT;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(go,t),n(kd,t),n(wl,t),n(vo,t),n(Ed,t),n(xl,t),n(gs,t)})($d);var Dv={},$l={};function Uv(t,e,n){const i=t.value,o=e+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),t.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(t.focus(),!document.execCommand("insertText",!1,d)){t.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),t.dispatchEvent(f)}return t.setSelectionRange(e.length,e.length),a.focus(),t}function FT(t,e,n){const i=t.selectionEnd,o=t.value.substr(0,t.selectionStart)+e,a=t.value.substring(t.selectionStart,i)+(n||"")+t.value.substr(i);return Uv(t,o,a),t.selectionEnd=i+e.length,t}const HT=Object.freeze(Object.defineProperty({__proto__:null,update:Uv,wrapCursor:FT},Symbol.toStringTag,{value:"Module"})),WT=S4(HT);var zv={exports:{}};(function(t){(function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var p=document.createElement("div");p.id="input-textarea-caret-position-mirror-div",document.body.appendChild(p);var g=p.style,m=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,w=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",w||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),e.forEach(function(x){w&&x==="lineHeight"?g.lineHeight=m.height:g[x]=m[x]}),i?a.scrollHeight>parseInt(m.height)&&(g.overflowY="scroll"):g.overflow="hidden",p.textContent=a.value.substring(0,l),w&&(p.textContent=p.textContent.replace(/\s/g," "));var _=document.createElement("span");_.textContent=a.value.substring(l)||".",p.appendChild(_);var $={top:_.offsetTop+parseInt(m.borderTopWidth),left:_.offsetLeft+parseInt(m.borderLeftWidth),height:parseInt(m.lineHeight)};return d?_.style.backgroundColor="#aaa":document.body.removeChild(p),$}t.exports=o})()})(zv);var qT=zv.exports,Fv={},El={};Object.defineProperty(El,"__esModule",{value:!0});El.calculateElementOffset=void 0;const ZT=t=>{const e=t.getBoundingClientRect(),n=t.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:e.top+i.pageYOffset,left:e.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};El.calculateElementOffset=ZT;var kl={};Object.defineProperty(kl,"__esModule",{value:!0});kl.getLineHeightPx=void 0;const KT="0".charCodeAt(0),VT="9".charCodeAt(0),Ig=t=>KT<=t&&t<=VT,GT=t=>{const e=getComputedStyle(t),n=e.lineHeight;if(Ig(n.charCodeAt(0))){const i=parseFloat(n);return Ig(n.charCodeAt(n.length-1))?i*parseFloat(e.fontSize):i}return QT(t.nodeName,e)};kl.getLineHeightPx=GT;const QT=(t,e)=>{const n=document.body;if(!n)return 0;const i=document.createElement(t);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:e.fontSize,fontFamily:e.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.isSafari=void 0;const JT=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Cl.isSafari=JT;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(El,t),n(kl,t),n(Cl,t)})(Fv);var YT=xt&&xt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty($l,"__esModule",{value:!0});$l.TextareaEditor=void 0;const XT=WT,eA=YT(qT),Rg=$d,Og=Fv;class tA extends Rg.Editor{constructor(e){super(),this.el=e,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(e){const n=this.getBeforeCursor();if(n!=null){const i=e.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,XT.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,Rg.createCustomEvent)("input")))}}getCursorOffset(){const e=(0,Og.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Og.getLineHeightPx)(this.el),a=e.top-n.top+i.top+o,l=e.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,eA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}$l.TextareaEditor=tA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaEditor=void 0;var e=$l;Object.defineProperty(t,"TextareaEditor",{enumerable:!0,get:function(){return e.TextareaEditor}})})(Dv);const nA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),rA=()=>{const{searchEmojis:t}=et(),[e,n]=Ie();return Dr(()=>{const i=e();if(i==null)return;const o=new Dv.TextareaEditor(i),a=new $d.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(t(l))},template:l=>(()=>{const d=nA(),f=d.firstChild,p=f.nextSibling;return C(p,()=>l.shortcode),De(g=>{const m=l.url,w=l.shortcode;return m!==g._v$&&We(f,"src",g._v$=m),w!==g._v$2&&We(f,"alt",g._v$2=w),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});mr(()=>{a.destroy()})}),{elementRef:n}},iA=t=>Math.floor(+t/1e3),oi=()=>iA(new Date),sA=({notifyPubkeys:t,rootEventId:e,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=t?.map(g=>["p",g])??[],p=[];return e!=null&&d.push(["e",e,"","root"]),e==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),e!=null&&i!=null&&e!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...f,...p]},Sl=()=>{const t=vd(),e=async(d,f)=>{const p={...f};if(p.id=lo(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async m=>{const w=await t().ensureRelay(m);try{await w.publish(g),console.log(`${m} has accepted our event`)}catch(_){const $=_ instanceof Error?_.message:JSON.stringify(_);console.warn(`failed to publish to ${m}: ${$}`)}})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:p,content:g}=d,m=sA(d),w={kind:1,pubkey:p,created_at:oi(),tags:m,content:g};return e(f,w)},publishReaction:async({relayUrls:d,pubkey:f,eventId:p,reactionTypes:g,notifyPubkey:m})=>{const w=[["e",p,""],["p",m]];g.type==="CustomEmoji"&&w.push(["emoji",g.shortcode,g.url]);const _={kind:7,pubkey:f,created_at:oi(),tags:w,content:g.content};return e(d,_)},publishRepost:async({relayUrls:d,pubkey:f,eventId:p,notifyPubkey:g})=>{const m={kind:6,pubkey:f,created_at:oi(),tags:[["e",p,""],["p",g]],content:""};return e(d,m)},updateProfile:async({relayUrls:d,pubkey:f,profile:p,otherProperties:g})=>{const m={...p,...g},w={kind:vt.Metadata,pubkey:f,created_at:oi(),tags:[],content:JSON.stringify(m)};return e(d,w)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:p,content:g})=>{const m={kind:vt.Contacts,pubkey:f,created_at:oi(),tags:p,content:g};return e(d,m)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:p})=>{const g={kind:vt.EventDeletion,pubkey:f,created_at:oi(),tags:[["e",p,""]],content:""};return e(d,g)}}};let su=!1;const[ma,oA]=Ie(void 0),Kr=()=>(wr(()=>{if(ma()!=null)return;let t=0;const e=setInterval(()=>{if(t>=20){if(clearInterval(e),ma()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&ma()==null&&!su&&(su=!0,window.nostr.getPublicKey().then(n=>{clearInterval(e),oA(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{su=!1})),t+=1},200)}),ma),aA=async t=>{const e=new FormData;e.set("file",t);const n=await fetch("https://nostr.build/api/v2/upload/files",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:e});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json();if(i.status!=="success")throw new Error(`failed to post image: ${i.message}`);return{imageUrl:i.data[0].url}},lA=t=>e=>Promise.allSettled(e.map(n=>t(n))),cA=B("<div>"),uA=B('<input type="text" class="rounded" maxlength="32">'),dA=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),fA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),hA=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),pA=t=>{const e=[],n=[],i=[],o=[],a=[];return t.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?e.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:e,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},gA=t=>{const e=[];return t.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?e.push(`nostr:${n.content}`):e.push(n.content)}),e.join("")},Hv=t=>{const e=mt();let n,i;const{elementRef:o}=rA(),[a,l]=Ie(""),[u,d]=Ie(!1),[f,p]=Ie(""),g=ne=>l(V=>`${V} ${ne}`),m=()=>{l(""),p(""),d(!1)},w=()=>{n?.blur(),m(),t.onClose()},_=ne=>{switch(ne){case"reply":return e()("posting.placeholderReply");case"normal":default:return e()("posting.placeholder")}},{config:$,getEmoji:x}=et(),k=Kr(),I=Sl(),E=()=>t.replyTo&&pd(t.replyTo),S=()=>t.mode??"normal",L=hi({mutationKey:["publishTextNote"],mutationFn:I.publishTextNote.bind(I),onSuccess:()=>{console.log("succeeded to post"),m(),t.onPost?.()},onError:ne=>{console.error("error",ne)}}),R=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},N=hi({mutationKey:["uploadFiles"],mutationFn:async ne=>{const V=await lA(aA)(ne),ue=[];if(V.forEach((de,F)=>{de.status==="fulfilled"?(g(de.value.imageUrl),R()):ue.push(ne[F])}),ue.length>0){const de=ue.map(F=>F.name).join(", ");window.alert(e()("posting.failedToUploadFile",{filenames:de}))}}}),D=qe(()=>{const ne=k();return E()?.taggedPubkeys()?.filter(V=>V!==ne)??[]}),K=qe(()=>t.replyTo==null?[]:pi([t.replyTo.pubkey,...D()])),te=ne=>{const V=[];return ne.forEach(ue=>{const de=x(ue);de!=null&&V.push(["emoji",ue,de.url])}),V},ae=()=>{if(a().length===0||L.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(e()("posting.forbiddenToIncludeNsec"));return}const ne=k();if(ne==null){console.error("pubkey is not available");return}const V=K1(a()),{hashtags:ue,urlReferences:de,pubkeyReferences:F,eventReferences:oe,emojis:G}=pA(V),_e=gA(V),Ge=te(G);let J={relayUrls:$().relayUrls,pubkey:ne,content:_e,notifyPubkeys:F,mentionEventIds:oe,hashtags:ue,urls:de,tags:Ge};E()!=null&&(J={...J,notifyPubkeys:pi([...K(),...F]),rootEventId:E()?.rootEvent()?.id??E()?.replyingToEvent()?.id,replyEventId:E()?.id}),u()&&(J={...J,contentWarning:f()}),L.mutate(J),w()},ie=ne=>{l(ne.currentTarget.value),R()},se=ne=>{g(ne.native??`:${ne.id}:`)},X=ne=>{ne.preventDefault(),ae()},j=ne=>{ne.key==="Enter"&&(ne.ctrlKey||ne.metaKey)?ae():ne.key==="Escape"&&(n?.blur(),w())},q=ne=>{if(ne.preventDefault(),N.isLoading)return;const V=[...ne.currentTarget.files??[]];N.mutate(V),ne.currentTarget.value=""},ee=ne=>{if(ne.preventDefault(),N.isLoading)return;const V=[...ne?.dataTransfer?.files??[]];N.mutate(V)},le=ne=>{if(N.isLoading)return;const V=[...ne?.clipboardData?.items??[]],ue=[];V.forEach(de=>{if(de.kind==="file"){ne.preventDefault();const F=de.getAsFile();if(F==null)return;ue.push(F)}}),ue.length!==0&&N.mutate(ue)},Y=ne=>{ne.preventDefault()},ve=()=>a().trim().length===0||L.isLoading||N.isLoading,ye=()=>N.isLoading;return wr(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const ne=hA(),V=ne.firstChild,ue=V.firstChild,de=ue.nextSibling,F=de.firstChild,oe=F.nextSibling,G=oe.nextSibling,_e=de.nextSibling;C(ne,A(be,{get when(){return t.replyTo!=null},get children(){const J=cA();return C(J,()=>e()("posting.replyToPre"),null),C(J,A(zt,{get each(){return K()},children:(Ze,pt)=>[A(md,{pubkey:Ze}),A(be,{get when(){return pt()!==K().length-1},children:" と "})]}),null),C(J,()=>e()("posting.replyToPost"),null),J}}),V),V.addEventListener("submit",X),C(V,A(be,{get when(){return u()},get children(){const J=uA();return J.$$input=Ze=>p(Ze.currentTarget.value),De(()=>We(J,"placeholder",e()("posting.contentWarningReason"))),De(()=>J.value=f()),J}}),ue),ue.addEventListener("paste",le),ue.addEventListener("drop",ee),ue.addEventListener("dragover",Y),ue.$$keydown=j,ue.$$input=ie,yr(J=>{n=J,t.textAreaRef?.(J),o(J)},ue),C(de,A(be,{get when(){return S()==="reply"},get children(){const J=dA(),Ze=J.firstChild;return Ze.$$click=()=>w(),C(Ze,A(rs,{})),J}}),F),C(de,A(Pv,{customEmojis:!0,onEmojiSelect:se,get children(){const J=fA();return C(J,A(jv,{})),J}}),F),F.$$click=()=>d(J=>!J),oe.$$click=()=>i?.click(),C(oe,A(ET,{})),C(G,A(CT,{})),_e.addEventListener("change",q);const Ge=i;return typeof Ge=="function"?yr(Ge,_e):i=_e,De(J=>{const Ze=_(S()),pt=!u(),Se=!!u(),it=S()==="normal",Yt=S()==="normal",Ct=S()==="reply",Ht=S()==="reply",Gr=e()("posting.contentWarning"),En=e()("posting.contentWarning"),St=!!ye(),Xt=!ye(),Dn=S()==="normal",$r=S()==="normal",kn=S()==="reply",Te=S()==="reply",Wt=e()("posting.uploadImage"),qt=e()("posting.uploadImage"),Cn=ye(),Sn=!!ve(),un=!ve(),dn=S()==="normal",Tn=S()==="normal",tr=S()==="reply",nr=S()==="reply",rr=e()("posting.submit"),Ci=e()("posting.submit"),yo=ve();return Ze!==J._v$&&We(ue,"placeholder",J._v$=Ze),pt!==J._v$2&&F.classList.toggle("bg-rose-300",J._v$2=pt),Se!==J._v$3&&F.classList.toggle("bg-rose-400",J._v$3=Se),it!==J._v$4&&F.classList.toggle("h-8",J._v$4=it),Yt!==J._v$5&&F.classList.toggle("w-8",J._v$5=Yt),Ct!==J._v$6&&F.classList.toggle("h-7",J._v$6=Ct),Ht!==J._v$7&&F.classList.toggle("w-7",J._v$7=Ht),Gr!==J._v$8&&We(F,"aria-label",J._v$8=Gr),En!==J._v$9&&We(F,"title",J._v$9=En),St!==J._v$10&&oe.classList.toggle("bg-primary-disabled",J._v$10=St),Xt!==J._v$11&&oe.classList.toggle("bg-primary",J._v$11=Xt),Dn!==J._v$12&&oe.classList.toggle("h-8",J._v$12=Dn),$r!==J._v$13&&oe.classList.toggle("w-8",J._v$13=$r),kn!==J._v$14&&oe.classList.toggle("h-7",J._v$14=kn),Te!==J._v$15&&oe.classList.toggle("w-7",J._v$15=Te),Wt!==J._v$16&&We(oe,"title",J._v$16=Wt),qt!==J._v$17&&We(oe,"aria-label",J._v$17=qt),Cn!==J._v$18&&(oe.disabled=J._v$18=Cn),Sn!==J._v$19&&G.classList.toggle("bg-primary-disabled",J._v$19=Sn),un!==J._v$20&&G.classList.toggle("bg-primary",J._v$20=un),dn!==J._v$21&&G.classList.toggle("h-8",J._v$21=dn),Tn!==J._v$22&&G.classList.toggle("w-8",J._v$22=Tn),tr!==J._v$23&&G.classList.toggle("h-7",J._v$23=tr),nr!==J._v$24&&G.classList.toggle("w-7",J._v$24=nr),rr!==J._v$25&&We(G,"aria-label",J._v$25=rr),Ci!==J._v$26&&We(G,"title",J._v$26=Ci),yo!==J._v$27&&(G.disabled=J._v$27=yo),J},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),De(()=>ue.value=a()),ne})()};yt(["input","keydown","click"]);const vA=2,mA=()=>{let t;const[e,n]=Ie(!1),i=o=>{t=o};return wr(()=>{t!=null&&n(t.scrollHeight>t.clientHeight+vA)}),{overflow:e,elementRef:i}},yA=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),bA=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),_A=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 select-text truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="select-text hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),wA=B('<img alt="icon" class="h-full w-full rounded object-cover">'),xA=t=>{const e=mt(),{overflow:n,elementRef:i}=mA(),o=nv(),[a,l]=Ie(),u=()=>o(t.createdAt),d=()=>t.createdAt.toLocaleString(),{profile:f}=ps(()=>({pubkey:t.authorPubkey}));return(()=>{const p=_A(),g=p.firstChild,m=g.firstChild,w=m.nextSibling,_=w.firstChild,$=_.firstChild,x=$.firstChild,k=x.firstChild,I=$.nextSibling,E=I.firstChild,S=_.nextSibling,L=S.nextSibling;return m.$$click=R=>{R.preventDefault(),t.onShowProfile?.()},C(m,A(be,{get when(){return f()?.picture},keyed:!0,children:R=>(()=>{const N=wA();return We(N,"src",R),N})()})),$.$$click=R=>{R.preventDefault(),t?.onShowProfile?.()},C(x,A(be,{get when(){return(f()?.display_name?.length??0)>0},get children(){const R=yA();return C(R,()=>f()?.display_name),R}}),k),C(k,A(be,{get when(){return f()?.name!=null},get fallback(){return`@${ho(t.authorPubkey)}`},get children(){return["@",qe(()=>f()?.name)]}})),E.$$click=R=>{R.preventDefault(),t.onShowEvent?.()},C(E,u),yr(i,S),C(S,()=>t.content),C(w,A(be,{get when(){return n()},get children(){const R=bA();return R.$$click=N=>{N.stopPropagation(),l(D=>!D)},C(R,A(be,{get when(){return!a()},get fallback(){return e()("post.hideOverflow")},get children(){return e()("post.showOverflow")}})),R}}),L),C(L,()=>t.actions),C(p,A(be,{get when(){return t.footer},get children(){return t.footer}}),null),De(R=>{const N=d(),D=!a();return N!==R._v$&&We(E,"title",R._v$=N),D!==R._v$2&&S.classList.toggle("max-h-screen",R._v$2=D),R},{_v$:void 0,_v$2:void 0}),p})()};yt(["click"]);const $A=g4(),EA=()=>v4($A),RF=()=>{const[t,e]=Vi({});return{timelineState:t,setTimeline:n=>e("content",n),clearTimeline:()=>e("content",void 0)}},kA=/\p{Emoji_Presentation}/u,CA=t=>{const{shouldMuteEvent:e}=et(),n=is(),i=qe(t),o=qe(()=>["useReactions",i()]),a=ss(o,X1({taskProvider:([,g])=>{if(g==null)return null;const{eventId:m}=g;return new fs({type:"Reactions",mentionedEventId:m})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(m=>!e(m));return{reactions:l,reactionsGrouped:()=>{const g=new Map;return l().forEach(m=>{const w=Ha(m).isCustomEmoji()?`${m.content}${Ha(m).getUrl()??""}`:m.content,_=g.get(w)??[];_.push(m),g.set(w,_)}),g},isReactedBy:g=>l().findIndex(m=>m.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(m=>m.pubkey===g&&kA.test(m.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},SA=t=>{const{shouldMuteEvent:e}=et(),n=is(),i=qe(t),o=qe(()=>["useReposts",i()]),a=ss(o,X1({taskProvider:([,f])=>{if(f==null)return null;const{eventId:p}=f;return new fs({type:"Reposts",mentionedEventId:p})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!e(p));return{reposts:l,isRepostedBy:f=>l().findIndex(p=>p.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},TA=B('<div class="flex gap-2 overflow-x-auto py-1">'),AA=B('<span class="ml-1 text-sm">'),IA=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),RA=B('<span class="text-red-500">'),OA=B('<div class="nostr-textnote">'),LA=B('<div class="text-xs">'),PA=B('<div class="content whitespace-pre-wrap break-all">'),MA=B('<div class="textnote-content">'),BA=B('<div class="mt-1 rounded border p-1">'),jA=B('<button class="select-text pr-1 text-blue-500 hover:underline">'),Lg=B('<div class="text-sm text-zinc-400">'),NA=B('<span class="inline-block h-4 w-4">'),DA=B('<div class="flex shrink-0 items-center gap-1">'),UA=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),zA=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),FA=B('<div class="w-6">'),{noteEncode:HA}=co,WA=t=>{if(t.native!=null)return{type:"Emoji",content:t.native};if(t.src!=null)return{type:"CustomEmoji",content:`:${t.id}:`,shortcode:t.id,url:t.src};throw new Error("unknown emoji")},qA=t=>{const{config:e}=et(),n=Kr();return(()=>{const i=TA();return C(i,A(zt,{get each(){return[...t.reactionsGrouped.entries()]},children:([,o])=>{const a=o.findIndex(u=>u.pubkey===n())>=0,l=Ha(o[0]).toReactionTypes();return(()=>{const u=IA();return u.$$click=()=>t.onReaction(l),C(u,A(lv,{reactionTypes:l}),null),C(u,A(be,{get when(){return!e().hideCount},get children(){const d=AA();return C(d,()=>o.length),d}}),null),De(d=>ba(u,{"text-zinc-400":!a,"hover:bg-zinc-50":!a,"bg-rose-50":a,"border-rose-200":a,"text-rose-400":a},d)),u})()}})),i})()},ZA=t=>{const e=mt(),{config:n}=et(),i=Kr(),{showProfile:o}=Zr(),a=EA(),[l,u]=Ie(!1),[d,f]=Ie(!1),[p,g]=Ie(!1),[m,w]=Ie(null),_=()=>g(!1),$=()=>w(null),x=qe(()=>pd(t.event)),k=()=>t.embedding??!0,I=()=>t.actions??!0,{reactions:E,reactionsGrouped:S,isReactedBy:L,isReactedByWithEmoji:R,invalidateReactions:N,query:D}=CA(()=>({eventId:t.event.id})),{reposts:K,isRepostedBy:te,invalidateReposts:ae,query:ie}=SA(()=>({eventId:t.event.id})),se=Sl(),X=hi({mutationKey:["publishReaction",x().id],mutationFn:se.publishReaction.bind(se),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:F=>{console.error("failed to publish reaction: ",F)},onSettled:()=>{N().then(()=>D.refetch()).catch(F=>console.error("failed to refetch reactions",F))}}),j=hi({mutationKey:["publishRepost",x().id],mutationFn:se.publishRepost.bind(se),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:F=>{console.error("failed to publish repost: ",F)},onSettled:()=>{ae().then(()=>ie.refetch()).catch(F=>console.error("failed to refetch reposts",F))}}),q=hi({mutationKey:["deleteEvent",x().id],mutationFn:(...F)=>se.deleteEvent(...F).then(oe=>Promise.allSettled(oe.map(hs(1e4)))),onSuccess:F=>{const oe=F.filter(_e=>_e.status==="fulfilled").length,G=F.length-oe;oe===F.length?window.alert(e()("post.deletedSuccessfully")):oe>0?window.alert(e()("post.failedToDeletePartially",{count:G})):window.alert(e()("post.failedToDelete"))},onError:F=>{console.error("failed to delete",F)}}),ee=[{content:()=>e()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(HA(t.event.id)).catch(F=>window.alert(F))}},{content:()=>e()("post.showJSON"),onSelect:()=>{w("EventDebugModal")}},{content:()=>e()("post.showReposts"),onSelect:()=>{w("Reposts")}},{content:()=>e()("post.showReactions"),onSelect:()=>{w("Reactions")}},{when:()=>x().pubkey===i(),content:()=>(()=>{const F=RA();return C(F,()=>e()("post.deletePost")),F})(),onSelect:()=>{const F=i();F!=null&&window.confirm(e()("post.confirmDelete"))&&q.mutate({relayUrls:n().relayUrls,pubkey:F,eventId:x().id})}}],le=qe(()=>{const F=i();return F!=null&&L(F)||l()}),Y=qe(()=>{const F=i();return F!=null&&R(F)}),ve=qe(()=>{const F=i();return F!=null&&te(F)||d()}),ye=()=>{if(k()){const F=x().replyingToEvent();if(F!=null&&!x().containsEventMention(F.id))return F.id;const oe=x().rootEvent();if(F==null&&oe!=null&&!x().containsEventMention(oe.id))return oe.id}},ne=F=>{F.stopPropagation(),!ve()&&xn([i(),t.event.id])(([oe,G])=>{j.mutate({relayUrls:n().relayUrls,pubkey:oe,eventId:G,notifyPubkey:t.event.pubkey}),f(!0)})},V=F=>{le()||xn([i(),t.event.id])(([oe,G])=>{X.mutate({relayUrls:n().relayUrls,pubkey:oe,reactionTypes:F??{type:"LikeDislike",content:"+"},eventId:G,notifyPubkey:t.event.pubkey}),u(!0)})},ue=F=>{F.stopPropagation(),V()},de=F=>{V(WA(F))};return(()=>{const F=OA();return C(F,A(xA,{get authorPubkey(){return x().pubkey},get createdAt(){return x().createdAtAsDate()},get content(){return(()=>{const oe=MA();return C(oe,A(be,{get when(){return ye()},keyed:!0,children:G=>(()=>{const _e=BA();return C(_e,A(ro,{eventId:G,actions:!1,embedding:!1})),_e})()}),null),C(oe,A(be,{get when(){return x().taggedPubkeys().length>0},get children(){const G=LA();return C(G,()=>e()("post.replyToPre"),null),C(G,A(zt,{get each(){return x().taggedPubkeys()},children:_e=>(()=>{const Ge=jA();return Ge.$$click=J=>{J.stopPropagation(),o(_e)},C(Ge,A(Mv,{pubkey:_e})),Ge})()}),null),C(G,()=>e()("post.replyToPost"),null),G}}),null),C(oe,A(jS,{get contentWarning(){return x().contentWarning()},get children(){const G=PA();return C(G,A(iT,{get event(){return t.event},get embedding(){return k()}})),G}}),null),oe})()},get actions(){return A(be,{get when(){return I()},get children(){return[A(be,{get when(){return qe(()=>!!n().showEmojiReaction)()&&E().length>0},get children(){return A(qA,{get reactionsGrouped(){return S()},onReaction:V})}}),(()=>{const oe=zA(),G=oe.firstChild,_e=G.nextSibling,Ge=_e.firstChild,J=_e.nextSibling,Ze=J.firstChild,pt=J.nextSibling;return G.$$click=Se=>{Se.stopPropagation(),g(it=>!it)},C(G,A(LC,{})),Ge.$$click=ne,C(Ge,A(R1,{})),C(_e,A(be,{get when(){return qe(()=>!n().hideCount)()&&K().length>0},get children(){const Se=Lg();return C(Se,()=>K().length),Se}}),null),Ze.$$click=ue,C(Ze,A(be,{get when(){return qe(()=>!!le())()&&!Y()},get fallback(){return A(iv,{})},get children(){return A(ov,{})}})),C(J,A(be,{get when(){return qe(()=>!n().hideCount&&!n().showEmojiReaction)()&&E().length>0},get children(){const Se=Lg();return C(Se,()=>E().length),Se}}),null),C(oe,A(be,{get when(){return n().useEmojiReaction},get children(){const Se=DA();return C(Se,A(Pv,{onEmojiSelect:de,get children(){const it=NA();return C(it,A(sv,{})),it}})),De(it=>ba(Se,{"text-zinc-400":!le()||!Y(),"hover:text-rose-400":!le()||!Y(),"text-rose-400":le()&&Y()||X.isLoading},it)),Se}}),pt),C(pt,A(av,{menu:ee,get children(){const Se=UA();return C(Se,A(rv,{})),Se}})),De(Se=>{const it={"text-zinc-400":!ve(),"hover:text-green-400":!ve(),"text-green-400":ve()||j.isLoading},Yt=j.isLoading,Ct={"text-zinc-400":!le()||Y(),"hover:text-rose-400":!le()||Y(),"text-rose-400":le()&&!Y()||X.isLoading},Ht=X.isLoading;return Se._v$=ba(_e,it,Se._v$),Yt!==Se._v$2&&(Ge.disabled=Se._v$2=Yt),Se._v$3=ba(J,Ct,Se._v$3),Ht!==Se._v$4&&(Ze.disabled=Se._v$4=Ht),Se},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),oe})()]}})},get footer(){return A(be,{get when(){return p()},get children(){return A(Hv,{mode:"reply",get replyTo(){return t.event},onClose:_,onPost:_})}})},onShowProfile:()=>{o(x().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:t.event})}}),null),C(F,A(Zn,{get children(){return[A(Ye,{get when(){return m()==="EventDebugModal"},get children(){return A(gT,{get event(){return t.event},onClose:$})}}),A(Ye,{get when(){return m()==="Reactions"},get children(){return A(Pu,{get data(){return E()},pubkeyExtractor:oe=>oe.pubkey,renderInfo:oe=>(()=>{const G=FA();return C(G,A(lv,{get reactionTypes(){return Ha(oe).toReactionTypes()}})),G})(),onClose:$})}}),A(Ye,{get when(){return m()==="Reposts"},get children(){return A(Pu,{get data(){return K()},pubkeyExtractor:oe=>oe.pubkey,onClose:$})}})]}}),null),F})()};yt(["click"]);const KA=t=>{const{shouldMuteEvent:e}=et();return A(be,{get when(){return!e(t.event)},get children(){return A(ZA,t)}})},VA=B("<span>予期しないイベント種別（<!>）"),GA=B("<span><span>未対応のイベント種別（<!>）"),Wv=t=>{const e=()=>t.ensureKinds==null||t.ensureKinds.length===0||t.ensureKinds.includes(t.event.kind);return A(Zn,{get fallback(){return(()=>{const n=GA(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,C(i,()=>t.event.kind,a),C(n,A(Hs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n})()},get children(){return[A(Ye,{get when(){return!e()},keyed:!0,get children(){const n=VA(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,C(n,()=>t.event.kind,o),C(n,A(Hs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n}}),A(Ye,{get when(){return t.event.kind===vt.Text},get children(){return A(KA,{get event(){return t.event},get embedding(){return t.actions},get actions(){return t.actions}})}}),A(Ye,{get when(){return t.event.kind===6},get children(){return A(RC,{get event(){return t.event}})}})]}})},QA=t=>{const{shouldMuteEvent:e}=et();return A(zt,{get each(){return t.events},children:n=>A(be,{get when(){return!e(n)},get children(){return A(Z6,{get children(){return A(Wv,{event:n})}})}})})};var JA=rl;function YA(){this.__data__=new JA,this.size=0}var XA=YA;function eI(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var tI=eI;function nI(t){return this.__data__.get(t)}var rI=nI;function iI(t){return this.__data__.has(t)}var sI=iI,oI=rl,aI=qu,lI=Zu,cI=200;function uI(t,e){var n=this.__data__;if(n instanceof oI){var i=n.__data__;if(!aI||i.length<cI-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new lI(i)}return n.set(t,e),this.size=n.size,this}var dI=uI,fI=rl,hI=XA,pI=tI,gI=rI,vI=sI,mI=dI;function vs(t){var e=this.__data__=new fI(t);this.size=e.size}vs.prototype.clear=hI;vs.prototype.delete=pI;vs.prototype.get=gI;vs.prototype.has=vI;vs.prototype.set=mI;var Cd=vs;function yI(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}var bI=yI,_I=L0,wI=bI,xI=P0,$I=1,EI=2;function kI(t,e,n,i,o,a){var l=n&$I,u=t.length,d=e.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(t),p=a.get(e);if(f&&p)return f==e&&p==t;var g=-1,m=!0,w=n&EI?new _I:void 0;for(a.set(t,e),a.set(e,t);++g<u;){var _=t[g],$=e[g];if(i)var x=l?i($,_,g,e,t,a):i(_,$,g,t,e,a);if(x!==void 0){if(x)continue;m=!1;break}if(w){if(!wI(e,function(k,I){if(!xI(w,I)&&(_===k||o(_,k,n,i,a)))return w.push(I)})){m=!1;break}}else if(!(_===$||o(_,$,n,i,a))){m=!1;break}}return a.delete(t),a.delete(e),m}var qv=kI,CI=Jn,SI=CI.Uint8Array,Zv=SI;function TI(t){var e=-1,n=Array(t.size);return t.forEach(function(i,o){n[++e]=[o,i]}),n}var AI=TI,Pg=os,Mg=Zv,II=Wu,RI=qv,OI=AI,LI=Ku,PI=1,MI=2,BI="[object Boolean]",jI="[object Date]",NI="[object Error]",DI="[object Map]",UI="[object Number]",zI="[object RegExp]",FI="[object Set]",HI="[object String]",WI="[object Symbol]",qI="[object ArrayBuffer]",ZI="[object DataView]",Bg=Pg?Pg.prototype:void 0,ou=Bg?Bg.valueOf:void 0;function KI(t,e,n,i,o,a,l){switch(n){case ZI:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case qI:return!(t.byteLength!=e.byteLength||!a(new Mg(t),new Mg(e)));case BI:case jI:case UI:return II(+t,+e);case NI:return t.name==e.name&&t.message==e.message;case zI:case HI:return t==e+"";case DI:var u=OI;case FI:var d=i&PI;if(u||(u=LI),t.size!=e.size&&!d)return!1;var f=l.get(t);if(f)return f==e;i|=MI,l.set(t,e);var p=RI(u(t),u(e),i,o,a,l);return l.delete(t),p;case WI:if(ou)return ou.call(t)==ou.call(e)}return!1}var VI=KI;function GI(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}var Sd=GI,QI=Array.isArray,er=QI,JI=Sd,YI=er;function XI(t,e,n){var i=e(t);return YI(t)?i:JI(i,n(t))}var Kv=XI;function eR(t,e){for(var n=-1,i=t==null?0:t.length,o=0,a=[];++n<i;){var l=t[n];e(l,n,t)&&(a[o++]=l)}return a}var tR=eR;function nR(){return[]}var Vv=nR,rR=tR,iR=Vv,sR=Object.prototype,oR=sR.propertyIsEnumerable,jg=Object.getOwnPropertySymbols,aR=jg?function(t){return t==null?[]:(t=Object(t),rR(jg(t),function(e){return oR.call(t,e)}))}:iR,Td=aR;function lR(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var cR=lR;function uR(t){return t!=null&&typeof t=="object"}var Vr=uR,dR=as,fR=Vr,hR="[object Arguments]";function pR(t){return fR(t)&&dR(t)==hR}var gR=pR,Ng=gR,vR=Vr,Gv=Object.prototype,mR=Gv.hasOwnProperty,yR=Gv.propertyIsEnumerable,bR=Ng(function(){return arguments}())?Ng:function(t){return vR(t)&&mR.call(t,"callee")&&!yR.call(t,"callee")},Ad=bR,Qa={exports:{}};function _R(){return!1}var wR=_R;Qa.exports;(function(t,e){var n=Jn,i=wR,o=e&&!e.nodeType&&e,a=o&&!0&&t&&!t.nodeType&&t,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;t.exports=f})(Qa,Qa.exports);var Id=Qa.exports,xR=9007199254740991,$R=/^(?:0|[1-9]\d*)$/;function ER(t,e){var n=typeof t;return e=e??xR,!!e&&(n=="number"||n!="symbol"&&$R.test(t))&&t>-1&&t%1==0&&t<e}var Rd=ER,kR=9007199254740991;function CR(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=kR}var Od=CR,SR=as,TR=Od,AR=Vr,IR="[object Arguments]",RR="[object Array]",OR="[object Boolean]",LR="[object Date]",PR="[object Error]",MR="[object Function]",BR="[object Map]",jR="[object Number]",NR="[object Object]",DR="[object RegExp]",UR="[object Set]",zR="[object String]",FR="[object WeakMap]",HR="[object ArrayBuffer]",WR="[object DataView]",qR="[object Float32Array]",ZR="[object Float64Array]",KR="[object Int8Array]",VR="[object Int16Array]",GR="[object Int32Array]",QR="[object Uint8Array]",JR="[object Uint8ClampedArray]",YR="[object Uint16Array]",XR="[object Uint32Array]",ot={};ot[qR]=ot[ZR]=ot[KR]=ot[VR]=ot[GR]=ot[QR]=ot[JR]=ot[YR]=ot[XR]=!0;ot[IR]=ot[RR]=ot[HR]=ot[OR]=ot[WR]=ot[LR]=ot[PR]=ot[MR]=ot[BR]=ot[jR]=ot[NR]=ot[DR]=ot[UR]=ot[zR]=ot[FR]=!1;function eO(t){return AR(t)&&TR(t.length)&&!!ot[SR(t)]}var tO=eO;function nO(t){return function(e){return t(e)}}var Ld=nO,Ja={exports:{}};Ja.exports;(function(t,e){var n=A0,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();t.exports=u})(Ja,Ja.exports);var Pd=Ja.exports,rO=tO,iO=Ld,Dg=Pd,Ug=Dg&&Dg.isTypedArray,sO=Ug?iO(Ug):rO,Qv=sO,oO=cR,aO=Ad,lO=er,cO=Id,uO=Rd,dO=Qv,fO=Object.prototype,hO=fO.hasOwnProperty;function pO(t,e){var n=lO(t),i=!n&&aO(t),o=!n&&!i&&cO(t),a=!n&&!i&&!o&&dO(t),l=n||i||o||a,u=l?oO(t.length,String):[],d=u.length;for(var f in t)(e||hO.call(t,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||uO(f,d)))&&u.push(f);return u}var Jv=pO,gO=Object.prototype;function vO(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||gO;return t===n}var Md=vO;function mO(t,e){return function(n){return t(e(n))}}var Yv=mO,yO=Yv,bO=yO(Object.keys,Object),_O=bO,wO=Md,xO=_O,$O=Object.prototype,EO=$O.hasOwnProperty;function kO(t){if(!wO(t))return xO(t);var e=[];for(var n in Object(t))EO.call(t,n)&&n!="constructor"&&e.push(n);return e}var CO=kO,SO=R0,TO=Od;function AO(t){return t!=null&&TO(t.length)&&!SO(t)}var Xv=AO,IO=Jv,RO=CO,OO=Xv;function LO(t){return OO(t)?IO(t):RO(t)}var Tl=LO,PO=Kv,MO=Td,BO=Tl;function jO(t){return PO(t,BO,MO)}var em=jO,zg=em,NO=1,DO=Object.prototype,UO=DO.hasOwnProperty;function zO(t,e,n,i,o,a){var l=n&NO,u=zg(t),d=u.length,f=zg(e),p=f.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var m=u[g];if(!(l?m in e:UO.call(e,m)))return!1}var w=a.get(t),_=a.get(e);if(w&&_)return w==e&&_==t;var $=!0;a.set(t,e),a.set(e,t);for(var x=l;++g<d;){m=u[g];var k=t[m],I=e[m];if(i)var E=l?i(I,k,m,e,t,a):i(k,I,m,t,e,a);if(!(E===void 0?k===I||o(k,I,n,i,a):E)){$=!1;break}x||(x=m=="constructor")}if($&&!x){var S=t.constructor,L=e.constructor;S!=L&&"constructor"in t&&"constructor"in e&&!(typeof S=="function"&&S instanceof S&&typeof L=="function"&&L instanceof L)&&($=!1)}return a.delete(t),a.delete(e),$}var FO=zO,HO=xi,WO=Jn,qO=HO(WO,"DataView"),ZO=qO,KO=xi,VO=Jn,GO=KO(VO,"Promise"),QO=GO,JO=xi,YO=Jn,XO=JO(YO,"WeakMap"),eL=XO,Mu=ZO,Bu=qu,ju=QO,Nu=M0,Du=eL,tm=as,ms=O0,Fg="[object Map]",tL="[object Object]",Hg="[object Promise]",Wg="[object Set]",qg="[object WeakMap]",Zg="[object DataView]",nL=ms(Mu),rL=ms(Bu),iL=ms(ju),sL=ms(Nu),oL=ms(Du),ai=tm;(Mu&&ai(new Mu(new ArrayBuffer(1)))!=Zg||Bu&&ai(new Bu)!=Fg||ju&&ai(ju.resolve())!=Hg||Nu&&ai(new Nu)!=Wg||Du&&ai(new Du)!=qg)&&(ai=function(t){var e=tm(t),n=e==tL?t.constructor:void 0,i=n?ms(n):"";if(i)switch(i){case nL:return Zg;case rL:return Fg;case iL:return Hg;case sL:return Wg;case oL:return qg}return e});var Al=ai,au=Cd,aL=qv,lL=VI,cL=FO,Kg=Al,Vg=er,Gg=Id,uL=Qv,dL=1,Qg="[object Arguments]",Jg="[object Array]",ya="[object Object]",fL=Object.prototype,Yg=fL.hasOwnProperty;function hL(t,e,n,i,o,a){var l=Vg(t),u=Vg(e),d=l?Jg:Kg(t),f=u?Jg:Kg(e);d=d==Qg?ya:d,f=f==Qg?ya:f;var p=d==ya,g=f==ya,m=d==f;if(m&&Gg(t)){if(!Gg(e))return!1;l=!0,p=!1}if(m&&!p)return a||(a=new au),l||uL(t)?aL(t,e,n,i,o,a):lL(t,e,d,n,i,o,a);if(!(n&dL)){var w=p&&Yg.call(t,"__wrapped__"),_=g&&Yg.call(e,"__wrapped__");if(w||_){var $=w?t.value():t,x=_?e.value():e;return a||(a=new au),o($,x,n,i,a)}}return m?(a||(a=new au),cL(t,e,n,i,o,a)):!1}var pL=hL,gL=pL,Xg=Vr;function nm(t,e,n,i,o){return t===e?!0:t==null||e==null||!Xg(t)&&!Xg(e)?t!==t&&e!==e:gL(t,e,n,i,nm,o)}var rm=nm,vL=Cd,mL=rm,yL=1,bL=2;function _L(t,e,n,i){var o=n.length,a=o,l=!i;if(t==null)return!a;for(t=Object(t);o--;){var u=n[o];if(l&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){u=n[o];var d=u[0],f=t[d],p=u[1];if(l&&u[2]){if(f===void 0&&!(d in t))return!1}else{var g=new vL;if(i)var m=i(f,p,d,t,e,g);if(!(m===void 0?mL(p,f,yL|bL,i,g):m))return!1}}return!0}var wL=_L,xL=wi;function $L(t){return t===t&&!xL(t)}var im=$L,EL=im,kL=Tl;function CL(t){for(var e=kL(t),n=e.length;n--;){var i=e[n],o=t[i];e[n]=[i,o,EL(o)]}return e}var SL=CL;function TL(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var sm=TL,AL=wL,IL=SL,RL=sm;function OL(t){var e=IL(t);return e.length==1&&e[0][2]?RL(e[0][0],e[0][1]):function(n){return n===t||AL(n,t,e)}}var LL=OL,PL=as,ML=Vr,BL="[object Symbol]";function jL(t){return typeof t=="symbol"||ML(t)&&PL(t)==BL}var Bd=jL,NL=er,DL=Bd,UL=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zL=/^\w*$/;function FL(t,e){if(NL(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||DL(t)?!0:zL.test(t)||!UL.test(t)||e!=null&&t in Object(e)}var jd=FL,om=Zu,HL="Expected a function";function Nd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(HL);var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=t.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Nd.Cache||om),n}Nd.Cache=om;var WL=Nd,qL=WL,ZL=500;function KL(t){var e=qL(t,function(i){return n.size===ZL&&n.clear(),i}),n=e.cache;return e}var VL=KL,GL=VL,QL=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,JL=/\\(\\)?/g,YL=GL(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(QL,function(n,i,o,a){e.push(o?a.replace(JL,"$1"):i||n)}),e}),XL=YL;function eP(t,e){for(var n=-1,i=t==null?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o}var Dd=eP,e0=os,tP=Dd,nP=er,rP=Bd,iP=1/0,t0=e0?e0.prototype:void 0,n0=t0?t0.toString:void 0;function am(t){if(typeof t=="string")return t;if(nP(t))return tP(t,am)+"";if(rP(t))return n0?n0.call(t):"";var e=t+"";return e=="0"&&1/t==-iP?"-0":e}var sP=am,oP=sP;function aP(t){return t==null?"":oP(t)}var lP=aP,cP=er,uP=jd,dP=XL,fP=lP;function hP(t,e){return cP(t)?t:uP(t,e)?[t]:dP(fP(t))}var ys=hP,pP=Bd,gP=1/0;function vP(t){if(typeof t=="string"||pP(t))return t;var e=t+"";return e=="0"&&1/t==-gP?"-0":e}var bs=vP,mP=ys,yP=bs;function bP(t,e){e=mP(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[yP(e[n++])];return n&&n==i?t:void 0}var Il=bP,_P=Il;function wP(t,e,n){var i=t==null?void 0:_P(t,e);return i===void 0?n:i}var xP=wP;function $P(t,e){return t!=null&&e in Object(t)}var EP=$P,kP=ys,CP=Ad,SP=er,TP=Rd,AP=Od,IP=bs;function RP(t,e,n){e=kP(e,t);for(var i=-1,o=e.length,a=!1;++i<o;){var l=IP(e[i]);if(!(a=t!=null&&n(t,l)))break;t=t[l]}return a||++i!=o?a:(o=t==null?0:t.length,!!o&&AP(o)&&TP(l,o)&&(SP(t)||CP(t)))}var OP=RP,LP=EP,PP=OP;function MP(t,e){return t!=null&&PP(t,e,LP)}var BP=MP,jP=rm,NP=xP,DP=BP,UP=jd,zP=im,FP=sm,HP=bs,WP=1,qP=2;function ZP(t,e){return UP(t)&&zP(e)?FP(HP(t),e):function(n){var i=NP(n,t);return i===void 0&&i===e?DP(n,t):jP(e,i,WP|qP)}}var KP=ZP;function VP(t){return t}var lm=VP;function GP(t){return function(e){return e?.[t]}}var QP=GP,JP=Il;function YP(t){return function(e){return JP(e,t)}}var XP=YP,eM=QP,tM=XP,nM=jd,rM=bs;function iM(t){return nM(t)?eM(rM(t)):tM(t)}var sM=iM,oM=LL,aM=KP,lM=lm,cM=er,uM=sM;function dM(t){return typeof t=="function"?t:t==null?lM:typeof t=="object"?cM(t)?aM(t[0],t[1]):oM(t):uM(t)}var Ud=dM,fM=Ud,hM=B0;function pM(t,e){return t&&t.length?hM(t,fM(e)):[]}var gM=pM;const cm=el(gM);let $a=0;const{setActiveSubscriptions:vM}=J1();setInterval(()=>{vM($a)},1e3);const um=t=>{const{config:e,shouldMuteEvent:n}=et(),i=vd(),[o,a]=Ie([]);Dr(Xa(()=>[e().mutedPubkeys,e().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),wr(()=>{console.debug("subscription mounted",t()?.debugId,t()),mr(()=>{console.debug("subscription unmount",t()?.debugId,t())})});const l=d=>{const f=t()?.limit??50;a(p=>{const g=od.insertEventIntoDescendingList(p,d).slice(0,f),m=cm(g,w=>w.id);return m.length!==g.length&&console.warn("duplicated event",d),m})},u=()=>{console.debug("startSubscription: start");const d=t();if(d==null)return;const{relayUrls:f,filters:p,options:g,onEvent:m,onEOSE:w,continuous:_=!0}=d,$=i().sub(f,p,g);let x=!0;$a+=1;let k=!1,I=!1;const E=[];$.on("event",R=>{m?.(R),!(d.clientEventFilter!=null&&!d.clientEventFilter(R))&&(I?l(R):(k=!0,E.push(R)))}),$.on("eose",()=>{w?.(),I=!0,a(Cu(E)),_||($.unsub(),x&&(x=!1,$a-=1))});let S=!1;const L=setInterval(()=>{if(!S){if(S=!0,I){clearInterval(L),S=!1;return}k&&(k=!1,a(Cu(E))),S=!1}},100);mr(()=>{console.debug("startSubscription: end"),$.unsub(),x&&(x=!1,$a-=1),clearInterval(L)})};return Dr(()=>{u()}),{events:o}},mM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),yM=(t={})=>(()=>{const e=mM();return rt(e,t,!0,!0),e})(),dm=t=>{const e=()=>{const i=t();if(i==null)return[];const o=[];return fi(i).pTags().forEach(l=>{const[,u,d,f]=l,p={pubkey:u,petname:f};d!=null&&d.length>0&&(p.mainRelayUrl=d),o.push(p)}),o};return{followings:e,followingPubkeys:()=>e().map(i=>i.pubkey),data:t}},bM=async({pubkey:t},e)=>{const n=new fs({type:"Followings",pubkey:t});ml({task:n,signal:e});const i=await n.latestEventPromise();return dm(()=>i)},r0=t=>{const e=is(),n=qe(t),i=()=>["useFollowings",n()],o=ss(i,Y1({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new fs({type:"Followings",pubkey:u})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>e.invalidateQueries(i());return{...dm(()=>o.data),invalidateFollowings:a,query:o}},_M=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),wM=(t={})=>(()=>{const e=_M();return rt(e,t,!0,!0),e})(),xM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),fm=(t={})=>(()=>{const e=xM();return rt(e,t,!0,!0),e})(),$M=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),hm=(t={})=>(()=>{const e=$M();return rt(e,t,!0,!0),e})(),EM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),kM=(t={})=>(()=>{const e=EM();return rt(e,t,!0,!0),e})(),CM=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),SM=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),TM=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),AM=async()=>{const e=await(await fetch(Fu("packageInfo.json"))).text();return JSON.parse(e)},IM=t=>{const[e]=k0(AM);return A(ki,{get onClose(){return t.onClose},get children(){const n=CM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,w=m.nextSibling;w.nextSibling;const _=g.nextSibling,$=_.nextSibling,x=$.nextSibling,k=x.nextSibling,I=k.nextSibling,E=I.nextSibling,S=E.nextSibling;return S.nextSibling,C(u,()=>e()?.self?.version,null),C(g,A(po,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),C(S,()=>e()?.self.licenseText),C(n,A(zt,{get each(){return e()?.packages??[]},fallback:"取得中",children:L=>[(()=>{const R=SM(),N=R.firstChild,D=N.nextSibling,K=D.nextSibling,te=K.nextSibling;return te.nextSibling,C(R,()=>L.name,N),C(R,()=>L.version,D),C(R,()=>L.licenseSpdx,te),R})(),(()=>{const R=TM();return C(R,()=>L.licenseText),R})()]}),null),De(()=>We(o,"src",Fu("images/rabbit_app_256.png"))),n}})},RM=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),OM=t=>{const e=mt(),n=Kr(),{saveColumn:i}=et(),o=xd(),a=()=>{t.onClose(),o({command:"moveToLastColumn"}).catch(m=>console.error(m))},l=()=>{xn([n()])(([m])=>{i(P1({pubkey:m}))}),a()},u=()=>{xn([n()])(([m])=>{i(M1({pubkey:m}))}),a()},d=()=>{i(B1()),a()},f=()=>{i(fd({query:""})),a()},p=()=>{xn([n()])(([m])=>{i(j1({pubkey:m}))}),a()},g=()=>{xn([n()])(([m])=>{i(N1({pubkey:m}))}),a()};return A(ki,{get onClose(){return t.onClose},get children(){const m=RM(),w=m.firstChild,_=w.firstChild,$=w.nextSibling,x=$.firstChild,k=$.nextSibling,I=k.firstChild,E=k.nextSibling,S=E.firstChild,L=E.nextSibling,R=L.firstChild,N=L.nextSibling,D=N.firstChild;return w.$$click=()=>l(),C(_,A(yM,{})),C(w,()=>e()("column.home"),null),$.$$click=()=>u(),C(x,A(wM,{})),C($,()=>e()("column.notification"),null),k.$$click=()=>d(),C(I,A(hm,{})),C(k,()=>e()("column.japanese"),null),E.$$click=()=>f(),C(S,A(kM,{})),C(E,()=>e()("column.search"),null),L.$$click=()=>p(),C(R,A(fm,{})),C(L,()=>e()("column.myPosts"),null),N.$$click=()=>g(),C(D,A(iv,{})),C(N,()=>e()("column.myReactions"),null),m}})};yt(["click"]);const LM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),PM=(t={})=>(()=>{const e=LM();return rt(e,t,!0,!0),e})(),MM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),BM=(t={})=>(()=>{const e=MM();return rt(e,t,!0,!0),e})(),jM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),NM=(t={})=>(()=>{const e=jM();return rt(e,t,!0,!0),e})();function DM(t){const{config:e}=et(),n=qe(t),{events:i}=um(()=>({relayUrls:e().relayUrls,filters:[{kinds:[vt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>pi(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const UM=t=>{const e=qe(t),n=ss(()=>["useVerification",e()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return E1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},zM=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),i0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),FM=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),HM=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),WM=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),s0=B('<div class="shrink-0 text-xs">'),qM=B('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),ZM=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),KM=B('<div class="truncate text-xl font-bold">'),VM=B('<div class="truncate text-xs">@'),GM=B('<span class="inline-block h-3 w-3">'),QM=B('<span class="inline-block h-4 w-4 text-blue-400">'),JM=B('<div class="flex items-center text-xs">'),YM=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),XM=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),eB=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),tB=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),nB=B('<ul class="border-t px-5 py-2 text-xs">'),rB=B('<ul class="border-t p-1">'),iB=B('<div class="h-12 shrink-0">'),sB=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),oB=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),aB=B('<span class="inline-block h-4 w-4 text-rose-500">'),lB=B('<span class="text-sm">'),cB=B('<button class="text-sm hover:text-stone-800 hover:underline">'),uB=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),dB=t=>{const{count:e}=DM(()=>({pubkey:t.pubkey}));return qe(e)},fB=t=>{const e=mt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=et(),l=Sl(),u=Kr(),{showProfileEdit:d}=Zr(),f=qe(()=>ho(t.pubkey)),[p,g]=Ie(!1),[m,w]=Ie(!1),[_,$]=Ie(!1),[x,k]=Ie(null),I=()=>k(null),{profile:E,query:S}=ps(()=>({pubkey:t.pubkey})),{verification:L,query:R}=UM(()=>xn([E()?.nip05])(([V])=>({nip05:V}))),N=()=>{const V=E()?.nip05;if(V==null)return null;const[ue,de]=V.split("@");return de==null?null:ue==="_"?{domain:de,ident:de}:{user:ue,domain:de,ident:V}},D=()=>L()?.pubkey===t.pubkey,K=()=>a(t.pubkey),{followingPubkeys:te,invalidateFollowings:ae,query:ie}=r0(()=>xn([u()])(([V])=>({pubkey:V}))),se=()=>te().includes(t.pubkey),{followingPubkeys:X,query:j}=r0(()=>({pubkey:t.pubkey})),q=()=>{const V=u();return V!=null&&X().includes(V)},ee=hi({mutationKey:["updateContacts"],mutationFn:(...V)=>l.updateContacts(...V).then(ue=>Promise.allSettled(ue.map(hs(5e3)))),onSuccess:V=>{const ue=V.filter(F=>F.status==="fulfilled").length,de=V.length-ue;ue===V.length?console.log("succeeded to update contacts"):ue>0?console.log(`succeeded to update contacts for ${ue} relays but failed for ${de} relays`):console.error("failed to update contacts")},onError:V=>{console.error("failed to update contacts: ",V)},onSettled:()=>{ae().then(()=>ie.refetch()).catch(V=>console.error("failed to refetch contacts",V))}}),le=async(V,ue)=>{try{const de=u();if(de==null)return;g(!0);const F=await bM({pubkey:de});if((F.data()==null||F.followingPubkeys().length===0)&&!window.confirm(e()("profile.confirmUpdateEvenIfEmpty")))return;if((F?.data()?.created_at??0)<(ie.data?.created_at??0)){window.alert(e()("profile.failedToFetchLatestFollowList"));return}const oe=F.data()?.tags??[];let G;switch(V){case"follow":G=[...oe,["p",ue]];break;case"unfollow":G=oe.filter(([_e,Ge])=>!(_e==="p"&&Ge===ue));break;default:console.error("updateContacts: invalid operation",V);return}await ee.mutateAsync({relayUrls:n().relayUrls,pubkey:de,updatedTags:G,content:F.data()?.content??""})}catch(de){console.error("failed to update contact list",de),window.alert(e()("profile.failedToUpdateFollowList"))}finally{g(!1)}},Y=()=>{le("follow",t.pubkey).catch(V=>{console.log("failed to follow",V)})},ve=()=>{window.confirm(e()("profile.confirmUnfollow"))&&le("unfollow",t.pubkey).catch(V=>{console.log("failed to unfollow",V)})},ye=[{content:()=>e()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(f()).catch(V=>window.alert(V))}},{content:()=>K()?e()("profile.unmute"):e()("profile.mute"),onSelect:()=>{K()?o(t.pubkey):i(t.pubkey)}},{when:()=>t.pubkey===u(),content:()=>se()?e()("profile.unfollowMyself"):e()("profile.followMyself"),onSelect:()=>{se()?ve():Y()}}],{events:ne}=um(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[t.pubkey],limit:10,until:oi()}],continuous:!1}));return A(ki,{onClose:()=>t.onClose?.(),get children(){return[A(be,{get when(){return qe(()=>!!S.isFetched)()&&E()?.banner},get fallback(){return iB()},keyed:!0,children:V=>(()=>{const ue=sB(),de=ue.firstChild;return We(de,"src",V),ue})()}),(()=>{const V=ZM(),ue=V.firstChild,de=ue.firstChild;return C(de,A(be,{get when(){return qe(()=>!!S.isFetched)()&&E()?.picture},keyed:!0,children:F=>(()=>{const oe=oB();return We(oe,"src",F),oe})()})),C(V,A(be,{get when(){return u()!=null},get children(){const F=qM(),oe=F.firstChild;return C(oe,A(Zn,{get children(){return[A(Ye,{get when(){return t.pubkey===u()},get children(){const G=zM();return G.$$click=()=>d(),C(G,()=>e()("profile.editProfile")),G}}),A(Ye,{get when(){return ee.isLoading||p()},get children(){const G=i0();return C(G,()=>e()("general.updating")),G}}),A(Ye,{get when(){return ie.isLoading||ie.isFetching},get children(){const G=i0();return C(G,()=>e()("general.loading")),G}}),A(Ye,{get when(){return se()},get children(){const G=FM();return G.$$click=()=>ve(),G.addEventListener("mouseleave",()=>w(!1)),G.addEventListener("mouseenter",()=>w(!0)),C(G,A(be,{get when(){return!m()},get fallback(){return e()("profile.unfollow")},get children(){return e()("profile.followingCurrently")}})),De(()=>G.disabled=ee.isLoading),G}}),A(Ye,{get when(){return!se()},get children(){const G=HM();return G.$$click=()=>Y(),C(G,()=>e()("profile.follow")),De(()=>G.disabled=ee.isLoading),G}})]}}),null),C(oe,A(av,{menu:ye,get children(){const G=WM();return C(G,A(rv,{})),G}}),null),C(F,A(Zn,{get children(){return[A(Ye,{get when(){return j.isLoading},get children(){const G=s0();return C(G,()=>e()("general.loading")),G}}),A(Ye,{get when(){return q()},get children(){const G=s0();return C(G,()=>e()("profile.followsYou")),G}})]}}),null),F}}),null),V})(),(()=>{const V=YM(),ue=V.firstChild,de=ue.firstChild,F=de.nextSibling,oe=F.firstChild;return C(ue,A(be,{get when(){return S.isLoading},get children(){return e()("general.loading")}}),de),C(ue,A(be,{get when(){return(E()?.display_name?.length??0)>0},get children(){const G=KM();return C(G,()=>E()?.display_name),G}}),de),C(de,A(be,{get when(){return(E()?.name?.length??0)>0},get children(){const G=VM();return G.firstChild,C(G,()=>E()?.name,null),G}}),null),C(de,A(be,{get when(){return(E()?.nip05?.length??0)>0},get children(){const G=JM();return C(G,()=>N()?.ident,null),C(G,A(Zn,{get fallback(){return(()=>{const _e=aB();return C(_e,A(NM,{})),_e})()},get children(){return[A(Ye,{get when(){return R.isLoading},get children(){const _e=GM();return C(_e,A(PM,{})),_e}}),A(Ye,{get when(){return D()},get children(){const _e=QM();return C(_e,A(BM,{})),_e}})]}}),null),G}}),null),C(oe,f),V})(),A(be,{get when(){return(E()?.about??"").length>0},get children(){const V=XM();return C(V,()=>E()?.about),V}}),(()=>{const V=tB(),ue=V.firstChild,de=ue.firstChild,F=de.nextSibling;return ue.$$click=()=>k("Following"),C(de,()=>e()("profile.following")),C(F,A(be,{get when(){return j.isFetched},get fallback(){return(()=>{const oe=lB();return C(oe,()=>e()("general.loading")),oe})()},get children(){return X().length}})),C(V,A(be,{get when(){return!n().hideCount},get children(){const oe=eB(),G=oe.firstChild,_e=G.nextSibling;return C(G,()=>e()("profile.followers")),C(_e,A(be,{get when(){return _()},get fallback(){return(()=>{const Ge=cB();return Ge.$$click=()=>$(!0),C(Ge,()=>e()("profile.loadFollowers")),Ge})()},keyed:!0,get children(){return A(dB,{get pubkey(){return t.pubkey}})}})),oe}}),null),V})(),A(be,{get when(){return(E()?.website??"").length>0},get children(){const V=nB();return C(V,A(be,{get when(){return E()?.website},keyed:!0,children:ue=>(()=>{const de=uB(),F=de.firstChild;return C(F,A(hm,{})),C(de,A(po,{class:"text-blue-500 underline",href:ue}),null),de})()})),V}}),A(Zn,{get children(){return A(Ye,{get when(){return x()==="Following"},get children(){return A(Pu,{get data(){return X()},pubkeyExtractor:V=>V,onClose:I})}})}}),(()=>{const V=rB();return C(V,A(QA,{get events(){return ne()}})),V})()]}})};yt(["click"]);function hB(t,e){for(var n=-1,i=t==null?0:t.length;++n<i&&e(t[n],n,t)!==!1;);return t}var pB=hB,gB=xi,vB=function(){try{var t=gB(Object,"defineProperty");return t({},"",{}),t}catch{}}(),pm=vB,o0=pm;function mB(t,e,n){e=="__proto__"&&o0?o0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var gm=mB,yB=gm,bB=Wu,_B=Object.prototype,wB=_B.hasOwnProperty;function xB(t,e,n){var i=t[e];(!(wB.call(t,e)&&bB(i,n))||n===void 0&&!(e in t))&&yB(t,e,n)}var zd=xB,$B=zd,EB=gm;function kB(t,e,n,i){var o=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var u=e[a],d=i?i(n[u],t[u],u,n,t):void 0;d===void 0&&(d=t[u]),o?EB(n,u,d):$B(n,u,d)}return n}var mo=kB,CB=mo,SB=Tl;function TB(t,e){return t&&CB(e,SB(e),t)}var AB=TB;function IB(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var RB=IB,OB=wi,LB=Md,PB=RB,MB=Object.prototype,BB=MB.hasOwnProperty;function jB(t){if(!OB(t))return PB(t);var e=LB(t),n=[];for(var i in t)i=="constructor"&&(e||!BB.call(t,i))||n.push(i);return n}var NB=jB,DB=Jv,UB=NB,zB=Xv;function FB(t){return zB(t)?DB(t,!0):UB(t)}var Fd=FB,HB=mo,WB=Fd;function qB(t,e){return t&&HB(e,WB(e),t)}var ZB=qB,Ya={exports:{}};Ya.exports;(function(t,e){var n=Jn,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,p){if(p)return f.slice();var g=f.length,m=u?u(g):new f.constructor(g);return f.copy(m),m}t.exports=d})(Ya,Ya.exports);var KB=Ya.exports;function VB(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}var GB=VB,QB=mo,JB=Td;function YB(t,e){return QB(t,JB(t),e)}var XB=YB,ej=Yv,tj=ej(Object.getPrototypeOf,Object),Hd=tj,nj=Sd,rj=Hd,ij=Td,sj=Vv,oj=Object.getOwnPropertySymbols,aj=oj?function(t){for(var e=[];t;)nj(e,ij(t)),t=rj(t);return e}:sj,vm=aj,lj=mo,cj=vm;function uj(t,e){return lj(t,cj(t),e)}var dj=uj,fj=Kv,hj=vm,pj=Fd;function gj(t){return fj(t,pj,hj)}var Wd=gj,vj=Object.prototype,mj=vj.hasOwnProperty;function yj(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&mj.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var bj=yj,a0=Zv;function _j(t){var e=new t.constructor(t.byteLength);return new a0(e).set(new a0(t)),e}var qd=_j,wj=qd;function xj(t,e){var n=e?wj(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var $j=xj,Ej=/\w*$/;function kj(t){var e=new t.constructor(t.source,Ej.exec(t));return e.lastIndex=t.lastIndex,e}var Cj=kj,l0=os,c0=l0?l0.prototype:void 0,u0=c0?c0.valueOf:void 0;function Sj(t){return u0?Object(u0.call(t)):{}}var Tj=Sj,Aj=qd;function Ij(t,e){var n=e?Aj(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var Rj=Ij,Oj=qd,Lj=$j,Pj=Cj,Mj=Tj,Bj=Rj,jj="[object Boolean]",Nj="[object Date]",Dj="[object Map]",Uj="[object Number]",zj="[object RegExp]",Fj="[object Set]",Hj="[object String]",Wj="[object Symbol]",qj="[object ArrayBuffer]",Zj="[object DataView]",Kj="[object Float32Array]",Vj="[object Float64Array]",Gj="[object Int8Array]",Qj="[object Int16Array]",Jj="[object Int32Array]",Yj="[object Uint8Array]",Xj="[object Uint8ClampedArray]",eN="[object Uint16Array]",tN="[object Uint32Array]";function nN(t,e,n){var i=t.constructor;switch(e){case qj:return Oj(t);case jj:case Nj:return new i(+t);case Zj:return Lj(t,n);case Kj:case Vj:case Gj:case Qj:case Jj:case Yj:case Xj:case eN:case tN:return Bj(t,n);case Dj:return new i;case Uj:case Hj:return new i(t);case zj:return Pj(t);case Fj:return new i;case Wj:return Mj(t)}}var rN=nN,iN=wi,d0=Object.create,sN=function(){function t(){}return function(e){if(!iN(e))return{};if(d0)return d0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),oN=sN,aN=oN,lN=Hd,cN=Md;function uN(t){return typeof t.constructor=="function"&&!cN(t)?aN(lN(t)):{}}var dN=uN,fN=Al,hN=Vr,pN="[object Map]";function gN(t){return hN(t)&&fN(t)==pN}var vN=gN,mN=vN,yN=Ld,f0=Pd,h0=f0&&f0.isMap,bN=h0?yN(h0):mN,_N=bN,wN=Al,xN=Vr,$N="[object Set]";function EN(t){return xN(t)&&wN(t)==$N}var kN=EN,CN=kN,SN=Ld,p0=Pd,g0=p0&&p0.isSet,TN=g0?SN(g0):CN,AN=TN,IN=Cd,RN=pB,ON=zd,LN=AB,PN=ZB,MN=KB,BN=GB,jN=XB,NN=dj,DN=em,UN=Wd,zN=Al,FN=bj,HN=rN,WN=dN,qN=er,ZN=Id,KN=_N,VN=wi,GN=AN,QN=Tl,JN=Fd,YN=1,XN=2,eD=4,mm="[object Arguments]",tD="[object Array]",nD="[object Boolean]",rD="[object Date]",iD="[object Error]",ym="[object Function]",sD="[object GeneratorFunction]",oD="[object Map]",aD="[object Number]",bm="[object Object]",lD="[object RegExp]",cD="[object Set]",uD="[object String]",dD="[object Symbol]",fD="[object WeakMap]",hD="[object ArrayBuffer]",pD="[object DataView]",gD="[object Float32Array]",vD="[object Float64Array]",mD="[object Int8Array]",yD="[object Int16Array]",bD="[object Int32Array]",_D="[object Uint8Array]",wD="[object Uint8ClampedArray]",xD="[object Uint16Array]",$D="[object Uint32Array]",nt={};nt[mm]=nt[tD]=nt[hD]=nt[pD]=nt[nD]=nt[rD]=nt[gD]=nt[vD]=nt[mD]=nt[yD]=nt[bD]=nt[oD]=nt[aD]=nt[bm]=nt[lD]=nt[cD]=nt[uD]=nt[dD]=nt[_D]=nt[wD]=nt[xD]=nt[$D]=!0;nt[iD]=nt[ym]=nt[fD]=!1;function Ea(t,e,n,i,o,a){var l,u=e&YN,d=e&XN,f=e&eD;if(n&&(l=o?n(t,i,o,a):n(t)),l!==void 0)return l;if(!VN(t))return t;var p=qN(t);if(p){if(l=FN(t),!u)return BN(t,l)}else{var g=zN(t),m=g==ym||g==sD;if(ZN(t))return MN(t,u);if(g==bm||g==mm||m&&!o){if(l=d||m?{}:WN(t),!u)return d?NN(t,PN(l,t)):jN(t,LN(l,t))}else{if(!nt[g])return o?t:{};l=HN(t,g,u)}}a||(a=new IN);var w=a.get(t);if(w)return w;a.set(t,l),GN(t)?t.forEach(function(x){l.add(Ea(x,e,n,x,t,a))}):KN(t)&&t.forEach(function(x,k){l.set(k,Ea(x,e,n,k,t,a))});var _=f?d?UN:DN:d?JN:QN,$=p?void 0:_(t);return RN($||t,function(x,k){$&&(k=x,x=t[k]),ON(l,k,Ea(x,e,n,k,t,a))}),l}var ED=Ea;function kD(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var CD=kD;function SD(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++i<o;)a[i]=t[i+e];return a}var TD=SD,AD=Il,ID=TD;function RD(t,e){return e.length<2?t:AD(t,ID(e,0,-1))}var OD=RD,LD=ys,PD=CD,MD=OD,BD=bs;function jD(t,e){return e=LD(e,t),t=MD(t,e),t==null||delete t[BD(PD(e))]}var ND=jD,DD=as,UD=Hd,zD=Vr,FD="[object Object]",HD=Function.prototype,WD=Object.prototype,_m=HD.toString,qD=WD.hasOwnProperty,ZD=_m.call(Object);function KD(t){if(!zD(t)||DD(t)!=FD)return!1;var e=UD(t);if(e===null)return!0;var n=qD.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&_m.call(n)==ZD}var VD=KD,GD=VD;function QD(t){return GD(t)?void 0:t}var JD=QD,v0=os,YD=Ad,XD=er,m0=v0?v0.isConcatSpreadable:void 0;function eU(t){return XD(t)||YD(t)||!!(m0&&t&&t[m0])}var tU=eU,nU=Sd,rU=tU;function wm(t,e,n,i,o){var a=-1,l=t.length;for(n||(n=rU),o||(o=[]);++a<l;){var u=t[a];e>0&&n(u)?e>1?wm(u,e-1,n,i,o):nU(o,u):i||(o[o.length]=u)}return o}var iU=wm,sU=iU;function oU(t){var e=t==null?0:t.length;return e?sU(t,1):[]}var aU=oU;function lU(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var cU=lU,uU=cU,y0=Math.max;function dU(t,e,n){return e=y0(e===void 0?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=y0(i.length-e,0),l=Array(a);++o<a;)l[o]=i[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=i[o];return u[e]=n(l),uU(t,this,u)}}var fU=dU;function hU(t){return function(){return t}}var pU=hU,gU=pU,b0=pm,vU=lm,mU=b0?function(t,e){return b0(t,"toString",{configurable:!0,enumerable:!1,value:gU(e),writable:!0})}:vU,yU=mU,bU=800,_U=16,wU=Date.now;function xU(t){var e=0,n=0;return function(){var i=wU(),o=_U-(i-n);if(n=i,o>0){if(++e>=bU)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var $U=xU,EU=yU,kU=$U,CU=kU(EU),SU=CU,TU=aU,AU=fU,IU=SU;function RU(t){return IU(AU(t,void 0,TU),t+"")}var OU=RU,LU=Dd,PU=ED,MU=ND,BU=ys,jU=mo,NU=JD,DU=OU,UU=Wd,zU=1,FU=2,HU=4,WU=DU(function(t,e){var n={};if(t==null)return n;var i=!1;e=LU(e,function(a){return a=BU(a,t),i||(i=a.length>1),a}),jU(t,UU(t),n),i&&(n=PU(n,zU|FU|HU,NU));for(var o=e.length;o--;)MU(n,e[o]);return n}),qU=WU;const ZU=el(qU);var KU="Expected a function";function VU(t){if(typeof t!="function")throw new TypeError(KU);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var GU=VU,QU=zd,JU=ys,YU=Rd,_0=wi,XU=bs;function ez(t,e,n,i){if(!_0(t))return t;e=JU(e,t);for(var o=-1,a=e.length,l=a-1,u=t;u!=null&&++o<a;){var d=XU(e[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return t;if(o!=l){var p=u[d];f=i?i(p,d,u):void 0,f===void 0&&(f=_0(p)?p:YU(e[o+1])?[]:{})}QU(u,d,f),u=u[d]}return t}var tz=ez,nz=Il,rz=tz,iz=ys;function sz(t,e,n){for(var i=-1,o=e.length,a={};++i<o;){var l=e[i],u=nz(t,l);n(u,l)&&rz(a,iz(l,t),u)}return a}var oz=sz,az=Dd,lz=Ud,cz=oz,uz=Wd;function dz(t,e){if(t==null)return{};var n=az(uz(t),function(i){return[i]});return e=lz(e),cz(t,n,function(i,o){return e(i,o[0])})}var fz=dz,hz=Ud,pz=GU,gz=fz;function vz(t,e){return gz(t,pz(hz(e)))}var mz=vz;const yz=el(mz),bz=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),_z=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),wz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),xz=B('<div class="px-4 pt-4">'),$z=B('<div><span class="font-bold"></span><div>'),Ez=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><span class="text-xs"></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),kz=B('<div class="h-24 shrink-0">'),Cz=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),Sz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",Tz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",Az=new RegExp(`^${Sz}$`),xm=new RegExp(`^${Tz}$`),Iz=t=>Az.test(t),Rz=t=>xm.test(t),Oz=t=>{const e=mt(),n=Kr(),{config:i}=et(),[o,a]=Ie(""),[l,u]=Ie(""),[d,f]=Ie(""),[p,g]=Ie(""),[m,w]=Ie(""),[_,$]=Ie(""),[x,k]=Ie(""),[I,E]=Ie(""),{profile:S,invalidateProfile:L,query:R}=ps(()=>xn([n()])(([X])=>({pubkey:X}))),{updateProfile:N}=Sl(),D=hi({mutationKey:["updateProfile"],mutationFn:(...X)=>N(...X).then(j=>Promise.allSettled(j.map(hs(1e4)))),onSuccess:X=>{const j=X.filter(ee=>ee.status==="fulfilled").length,q=X.length-j;j===X.length?window.alert(e()("profile.edit.updateSucceeded")):j>0?window.alert(e()("profile.edit.failedToUpdatePartially",{count:q})):window.alert(e()("profile.edit.failedToUpdate")),L().then(()=>R.refetch()).catch(ee=>console.error(ee)),t.onClose()},onError:X=>{console.error("failed to delete",X)}}),K=()=>R.isLoading||D.isLoading,te=()=>K();setInterval(()=>console.log(R.isLoading,D.isLoading),1e3);const ae=()=>ZU(S(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),ie=X=>{X.preventDefault();const j=n();if(j==null)return;const q=yz({picture:o(),banner:l(),name:d(),display_name:p(),about:m(),website:_(),nip05:x(),lud06:Iz(I())?I():null,lud16:Rz(I())?I():null},ee=>ee==null||ee.length===0);D.mutate({relayUrls:i().relayUrls,pubkey:j,profile:q,otherProperties:ae()})},se=X=>X.key==="Enter"&&X.preventDefault();return wr(()=>{const X=S();X!=null&&(R.refetch().catch(j=>console.error(j)),Ca(()=>{a(j=>X.picture??j),u(j=>X.banner??j),f(j=>X.name??j),g(j=>X.display_name??j),w(j=>X.about??j),$(j=>X.website??j),k(j=>X.nip05??j),X.lud16!=null?E(X.lud16):X.lud06!=null&&E(X.lud06)}))}),A(ki,{closeButton:()=>A(T0,{}),get onClose(){return t.onClose},get children(){return[(()=>{const X=wz(),j=X.firstChild;return C(X,A(be,{get when(){return l().length>0},get fallback(){return kz()},keyed:!0,get children(){const q=bz(),ee=q.firstChild;return De(()=>We(ee,"src",l())),q}}),j),C(j,A(be,{get when(){return o().length>0},get children(){const q=_z();return De(()=>We(q,"src",o())),q}})),X})(),A(be,{get when(){return K()},get children(){const X=xz();return C(X,()=>e()("general.loading")),X}}),(()=>{const X=Ez(),j=X.firstChild,q=j.firstChild,ee=q.firstChild,le=ee.nextSibling,Y=q.nextSibling,ve=Y.firstChild,ye=ve.nextSibling,ne=Y.nextSibling,V=ne.firstChild,ue=V.nextSibling,de=ue.firstChild,F=de.nextSibling,oe=ne.nextSibling,G=oe.firstChild,_e=G.nextSibling,Ge=oe.nextSibling,J=Ge.firstChild,Ze=J.nextSibling,pt=Ge.nextSibling,Se=pt.firstChild,it=Se.nextSibling,Yt=pt.nextSibling,Ct=Yt.firstChild,Ht=Ct.nextSibling,Gr=Yt.nextSibling,En=Gr.firstChild,St=En.nextSibling,Xt=St.nextSibling,Dn=Gr.nextSibling,$r=Dn.firstChild,kn=$r.nextSibling;return j.addEventListener("submit",ie),C(ee,()=>e()("profile.edit.icon")),le.$$keydown=se,le.addEventListener("blur",Te=>a(Te.currentTarget.value)),C(ve,()=>e()("profile.edit.banner")),ye.$$keydown=se,ye.addEventListener("blur",Te=>u(Te.currentTarget.value)),C(V,()=>e()("profile.edit.name")),F.$$keydown=se,F.addEventListener("change",Te=>f(Te.currentTarget.value)),C(G,()=>e()("profile.edit.displayName")),_e.$$keydown=se,_e.addEventListener("change",Te=>g(Te.currentTarget.value)),C(J,()=>e()("profile.edit.about")),Ze.addEventListener("change",Te=>w(Te.currentTarget.value)),C(Se,()=>e()("profile.edit.website")),it.$$keydown=se,it.addEventListener("change",Te=>$(Te.currentTarget.value)),C(Ct,()=>e()("profile.edit.nip05")),Ht.$$keydown=se,Ht.addEventListener("change",Te=>k(Te.currentTarget.value)),C(En,()=>e()("profile.edit.lightningAddress")),C(St,()=>e()("profile.edit.lightningAddressDescription")),Xt.$$keydown=se,Xt.addEventListener("change",Te=>E(Te.currentTarget.value)),C(j,A(be,{get when(){return Object.entries(ae()).length>0},get children(){const Te=$z(),Wt=Te.firstChild,qt=Wt.nextSibling;return C(Wt,()=>e()("profile.edit.otherProperties")),C(qt,A(zt,{get each(){return Object.entries(ae())},children:([Cn,Sn])=>(()=>{const un=Cz(),dn=un.firstChild,Tn=dn.nextSibling;return C(dn,Cn),C(Tn,Sn),un})()})),Te}}),Dn),C($r,()=>e()("profile.edit.save")),kn.$$click=()=>t.onClose(),C(kn,()=>e()("profile.edit.cancel")),C(j,A(be,{get when(){return D.isLoading},get children(){return e()("profile.edit.updating")}}),null),De(Te=>{const Wt=te(),qt=te(),Cn=te(),Sn=te(),un=te(),dn=te(),Tn=xm.source,tr=te(),nr=te(),rr=D.isLoading;return Wt!==Te._v$&&(le.disabled=Te._v$=Wt),qt!==Te._v$2&&(ye.disabled=Te._v$2=qt),Cn!==Te._v$3&&(F.disabled=Te._v$3=Cn),Sn!==Te._v$4&&(_e.disabled=Te._v$4=Sn),un!==Te._v$5&&(Ze.disabled=Te._v$5=un),dn!==Te._v$6&&(it.disabled=Te._v$6=dn),Tn!==Te._v$7&&We(Ht,"pattern",Te._v$7=Tn),tr!==Te._v$8&&(Ht.disabled=Te._v$8=tr),nr!==Te._v$9&&(Xt.disabled=Te._v$9=nr),rr!==Te._v$10&&($r.disabled=Te._v$10=rr),Te},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),De(()=>le.value=o()),De(()=>ye.value=l()),De(()=>F.value=d()),De(()=>_e.value=p()),De(()=>Ze.value=m()),De(()=>it.value=_()),De(()=>Ht.value=x()),De(()=>Xt.value=I()),X})()]}})};yt(["keydown","click"]);const OF=()=>{const t=Kr(),{modalState:e,showProfile:n,closeModal:i}=Zr();return A(be,{get when(){return e()},keyed:!0,children:o=>A(Zn,{get children(){return[A(Ye,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>A(fB,{pubkey:a,onClose:i})}),A(Ye,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return A(Oz,{onClose:()=>xn([t()])(([a])=>{n(a)})})}}),A(Ye,{get when(){return o.type==="AddColumn"},get children(){return A(OM,{onClose:i})}}),A(Ye,{get when(){return o.type==="About"},get children(){return A(IM,{onClose:i})}})]}})})},Lz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),Pz=(t={})=>(()=>{const e=Lz();return rt(e,t,!0,!0),e})(),Mz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),w0=(t={})=>(()=>{const e=Mz();return rt(e,t,!0,!0),e})(),Bz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),jz=(t={})=>(()=>{const e=Bz();return rt(e,t,!0,!0),e})(),Nz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),Dz=(t={})=>(()=>{const e=Nz();return rt(e,t,!0,!0),e})(),Uz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),zz=(t={})=>(()=>{const e=Uz();return rt(e,t,!0,!0),e})(),Fz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),Hz=(t={})=>(()=>{const e=Fz();return rt(e,t,!0,!0),e})(),x0=gt.string().length(64).regex(/^[0-9a-f]{64}$/),Uu=gt.string().regex(/^\w+$/),Wz=gt.object({shortcode:Uu,url:gt.string().url(),keywords:gt.optional(gt.array(Uu))}),qz=gt.object({manifest:gt.literal("emojipack_v1"),name:gt.string(),emojis:gt.array(Wz),description:gt.optional(gt.string()),author:gt.optional(x0),publisher:gt.optional(x0)}).refine(t=>cm(t.emojis,n=>n.shortcode).length===t.emojis.length,{message:"shortcodes should be unique"}),$m=gt.record(Uu,gt.string().url());qz.or($m);const Zz=t=>Object.entries(t).map(([e,n])=>({shortcode:e,url:n})),Kz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),Vz=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Gz=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),zu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Qz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Jz=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Yz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Xz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),eF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),tF=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),nF=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),rF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),iF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),sF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),oF=B('<div class="p-4">'),aF=B('<h2 class="flex-1 text-center text-lg font-bold">'),lF=B('<ul class="flex flex-col">'),cF=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),uF=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Em=t=>`^(?:${t})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,dF=Em("https?"),fF=Em("wss?"),hF=()=>{const t=mt(),e=Kr(),{showProfile:n,showProfileEdit:i}=Zr();return(()=>{const o=Kz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return C(a,()=>t()("config.profile.profile")),u.$$click=()=>xn([e()])(([f])=>{n(f)}),C(u,()=>t()("config.profile.openProfile")),d.$$click=()=>i(),C(d,()=>t()("config.profile.editProfile")),o})()},pF=()=>{const t=mt(),{config:e,addRelay:n,removeRelay:i}=et(),[o,a]=Ie(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([w])=>w).join(`
`);if(d.length===0){window.alert(t()("config.relays.notConfigured"));return}if(!window.confirm(`${t()("config.relays.askImport")}

${f}`))return;const p=e().relayUrls.length;Ca(()=>{d.forEach(([w])=>{n(w)})});const m=e().relayUrls.length-p;window.alert(t()("config.relays.imported",{count:m}))};return[(()=>{const d=Vz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.nextSibling,w=m.firstChild,_=w.nextSibling;return C(f,()=>t()("config.relays.relays")),C(p,()=>t()("config.relays.numOfRelays",{count:e().relayUrls.length})),C(g,A(zt,{get each(){return e().relayUrls},children:$=>(()=>{const x=zu(),k=x.firstChild,I=k.nextSibling;return C(k,$),I.$$click=()=>i($),C(I,A(rs,{})),x})()})),m.addEventListener("submit",l),w.addEventListener("change",$=>a($.currentTarget.value)),We(w,"pattern",fF),C(_,()=>t()("config.relays.addRelay")),De(()=>w.value=o()),d})(),(()=>{const d=Gz(),f=d.firstChild,p=f.nextSibling;return C(f,()=>t()("config.relays.importRelays")),p.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(t()("config.relays.failedToImport"))})},C(p,()=>t()("config.relays.importFromExtension")),d})()]},gF=()=>{const t=mt(),{config:e,setConfig:n}=et(),i=[{id:"relative",name:t()("config.display.relativeTimeNotation"),example:t()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:t()("config.display.absoluteTimeNotationShort"),example:t()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:t()("config.display.absoluteTimeNotationLong"),example:t()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=Qz(),l=a.firstChild,u=l.nextSibling;return C(l,()=>t()("config.display.timeNotation")),C(u,A(zt,{each:i,children:({id:d,name:f,example:p})=>(()=>{const g=Jz(),m=g.firstChild,w=m.nextSibling;return m.$$click=()=>o(d),C(m,f),C(w,p),De(_=>{const $=e().dateFormat===d,x=e().dateFormat===d,k=e().dateFormat!==d,I=e().dateFormat!==d;return $!==_._v$&&m.classList.toggle("bg-rose-300",_._v$=$),x!==_._v$2&&m.classList.toggle("text-white",_._v$2=x),k!==_._v$3&&m.classList.toggle("bg-white",_._v$3=k),I!==_._v$4&&m.classList.toggle("text-rose-300",_._v$4=I),_},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Ns=t=>(()=>{const e=Yz();return e.$$click=n=>t.onClick(n),De(n=>{const i=!t.value,o=!t.value,a=!!t.value,l=!!t.value,u=t.value;return i!==n._v$5&&e.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&e.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&e.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&e.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&We(e,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})(),vF=()=>{const t=mt(),{config:e,setConfig:n}=et(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=Xz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,p=d.nextSibling,g=p.firstChild;return C(l,()=>t()("config.display.reaction")),C(f,()=>t()("config.display.enableEmojiReaction")),C(d,A(Ns,{get value(){return e().useEmojiReaction},onClick:()=>i()}),null),C(g,()=>t()("config.display.showEmojiReaction")),C(p,A(Ns,{get value(){return e().showEmojiReaction},onClick:()=>o()}),null),a})()},mF=()=>{const t=mt(),{config:e,saveEmoji:n,removeEmoji:i}=et(),[o,a]=Ie(""),[l,u]=Ie(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=eF(),p=f.firstChild,g=p.nextSibling,m=g.nextSibling,w=m.firstChild,_=w.firstChild,$=_.nextSibling,x=w.nextSibling,k=x.firstChild,I=k.nextSibling,E=x.nextSibling;return C(p,()=>t()("config.customEmoji.customEmoji")),C(g,A(zt,{get each(){return Object.values(e().customEmojis)},children:({shortcode:S,url:L})=>(()=>{const R=tF(),N=R.firstChild,D=N.nextSibling,K=D.nextSibling;return We(N,"src",L),We(N,"alt",S),C(D,S),K.$$click=()=>i(S),C(K,A(rs,{})),R})()})),m.addEventListener("submit",d),C(_,()=>t()("config.customEmoji.shortcode")),$.addEventListener("change",S=>a(S.currentTarget.value)),C(k,()=>t()("config.customEmoji.url")),I.addEventListener("change",S=>u(S.currentTarget.value)),We(I,"pattern",dF),C(E,()=>t()("config.customEmoji.addEmoji")),De(()=>$.value=o()),De(()=>I.value=l()),f})()},yF=()=>{const t=mt(),{saveEmojis:e}=et(),[n,i]=Ie(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=$m.parse(JSON.parse(n())),u=Zz(l);e(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=nF(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,p=f.nextSibling;return C(l,()=>t()("config.customEmoji.emojiImport")),C(u,()=>t()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),C(p,()=>t()("config.customEmoji.importEmoji")),De(()=>f.value=n()),a})()},bF=()=>{const t=mt(),{config:e,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=et(),[a,l]=Ie(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=rF(),f=d.firstChild,p=f.nextSibling;return C(f,()=>t()("config.mute.mutedUsers")),C(p,A(zt,{get each(){return e().mutedPubkeys},children:g=>(()=>{const m=zu(),w=m.firstChild,_=w.nextSibling;return C(w,A(md,{pubkey:g})),_.$$click=()=>n(g),C(_,A(rs,{})),m})()})),d})(),(()=>{const d=iF(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,w=m.nextSibling;return C(f,()=>t()("config.mute.mutedKeywords")),C(p,A(zt,{get each(){return e().mutedKeywords},children:_=>(()=>{const $=zu(),x=$.firstChild,k=x.nextSibling;return C(x,_),k.$$click=()=>o(_),C(k,A(rs,{})),$})()})),g.addEventListener("submit",u),m.addEventListener("change",_=>l(_.currentTarget.value)),C(w,()=>t()("config.mute.add")),De(()=>m.value=a()),d})()]},_F=()=>{const t=mt(),{config:e,setConfig:n}=et(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=sF(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,p=f.firstChild,g=f.nextSibling,m=g.firstChild,w=g.nextSibling,_=w.firstChild;return C(u,()=>t()("config.display.others")),C(p,()=>t()("config.display.keepOpenPostForm")),C(f,A(Ns,{get value(){return e().keepOpenPostForm},onClick:()=>i()}),null),C(m,()=>t()("config.display.showMediaByDefault")),C(g,A(Ns,{get value(){return e().showMedia},onClick:()=>o()}),null),C(_,()=>t()("config.display.hideNumbers")),C(w,A(Ns,{get value(){return e().hideCount},onClick:()=>a()}),null),l})()},wF=t=>{const e=mt(),[n,i]=Ie(null),o=[{name:()=>e()("config.profile.profile"),icon:()=>A(fm,{}),render:()=>A(hF,{})},{name:()=>e()("config.relays.relays"),icon:()=>A(Hz,{}),render:()=>A(pF,{})},{name:()=>e()("config.display.display"),icon:()=>A(zz,{}),render:()=>[A(gF,{}),A(vF,{}),A(_F,{})]},{name:()=>e()("config.customEmoji.customEmoji"),icon:()=>A(jv,{}),render:()=>[A(mF,{}),A(yF,{})]},{name:()=>e()("config.mute.mute"),icon:()=>A(Dz,{}),render:()=>A(bF,{})}],a=()=>{const l=n();return l==null?null:o[l]};return A(ki,{get onClose(){return t.onClose},get children(){const l=oF();return C(l,A(be,{get when(){return a()},get fallback(){return[(()=>{const u=aF();return C(u,()=>e()("config.config")),u})(),(()=>{const u=lF();return C(u,A(zt,{each:o,children:(d,f)=>(()=>{const p=cF(),g=p.firstChild,m=g.firstChild;return g.$$click=()=>i(f),C(m,()=>d.icon()),C(g,()=>d.name(),null),p})()})),u})()]},keyed:!0,children:u=>(()=>{const d=uF(),f=d.firstChild,p=f.nextSibling;return f.$$click=()=>i(null),C(f,A(T0,{})),C(p,()=>u.render()),d})()})),l}})};yt(["click"]);const xF=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),$F=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),EF=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),kF=()=>{let t,e;const{saveColumn:n}=et(),i=xd(),[o,a]=Ie(""),l=u=>{u.preventDefault(),n(fd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),t?.close(),a("")};return A(yd,{ref:u=>{t=u},position:"right",get button(){return(()=>{const u=$F();return C(u,A(w0,{})),u})()},onOpen:()=>e?.focus(),get children(){const u=xF(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=e;return typeof p=="function"?yr(p,d):e=d,C(f,A(w0,{})),De(()=>d.value=o()),u}})},LF=()=>{let t;const{showAddColumn:e,showAbout:n}=Zr(),{config:i}=et(),[o,a]=Ie(!1),[l,u]=Ie(!1),d=()=>{t?.focus(),t?.click()},f=()=>a(!0),p=()=>a(!1),g=()=>a(m=>!m);return eT(()=>({commandType:"openPostForm",handler:()=>{f(),t!=null&&setTimeout(()=>d(),100)}})),(()=>{const m=EF(),w=m.firstChild,_=w.firstChild,$=_.firstChild,x=_.nextSibling,k=x.nextSibling,I=k.firstChild,E=I.nextSibling,S=E.nextSibling,L=S.firstChild,R=w.nextSibling;return $.$$click=()=>g(),C($,A(jz,{})),C(_,A(kF,{}),null),I.$$click=()=>e(),C(I,A(sv,{})),E.$$click=()=>u(N=>!N),C(E,A(Pz,{})),S.$$click=()=>n(),C(R,A(Hv,{textAreaRef:N=>{t=N},onClose:p})),C(m,A(be,{get when(){return l()},get children(){return A(wF,{onClose:()=>u(!1)})}}),null),De(N=>{const D=Fu("images/rabbit_app_256.png"),K=!!(o()||i().keepOpenPostForm),te=!(o()||i().keepOpenPostForm);return D!==N._v$&&We(L,"src",N._v$=D),K!==N._v$2&&R.classList.toggle("static",N._v$2=K),te!==N._v$3&&R.classList.toggle("hidden",N._v$3=te),N},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()};yt(["click"]);export{T0 as A,fs as B,Z6 as C,KA as D,ro as E,wM as F,fm as G,yM as H,iv as I,hm as J,vt as K,AF as L,kM as M,wi as N,Bd as O,el as P,OF as Q,RC as R,LF as S,QA as T,md as U,vd as V,co as W,Jn as _,pi as a,et as b,RF as c,eT as d,$A as e,xd as f,Hk as g,Kr as h,fi as i,ss as j,hs as k,r0 as l,O1 as m,oi as n,ps as o,G1 as p,gC as q,ml as r,lv as s,pd as t,um as u,ZA as v,Zr as w,Ha as x,xn as y,gt as z};
//# sourceMappingURL=SideBar-802708c9.js.map
