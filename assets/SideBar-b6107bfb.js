import{v as Pg,w as mu,x as O4,y as Lp,z as Pp,A as L4,B as P4,C as M4,D as Mp,E as B4,G as Mg,H as j4,m as ss,I as Bg,J as Ia,n as mr,o as _r,K as Fs,L as sl,N as Bp,s as nt,t as j,i as S,a as A,S as pe,c as Se,l as qe,u as mt,O as N4,M as Ye,P as D4,b as Wn,k as vi,d as bt,Q as U4,g as br,e as Be,R as z4,T as H4,F as Ht,h as Fe,U as jg,V as F4,W as q4,f as $a}from"./index-f43664e6.js";import{c as Gi,a as Hi,b as W4,d as Z4,r as Ku}from"./resolveAsset-b91f8d56.js";class V4 extends Pg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),jp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),mu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Np(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(O4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Lp||this.currentResult.isStale||!Pp(this.options.staleTime))return;const n=L4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Lp||this.options.enabled===!1||!Pp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||P4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,f=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:m,error:_,errorUpdatedAt:w,fetchStatus:E,status:x}=g,C=!1,I=!1,k;if(n._optimisticResults){const D=this.hasListeners(),ie=!D&&jp(t,n),q=D&&Np(t,i,n,o);(ie||q)&&(E=M4(t.options.networkMode)?"fetching":"paused",m||(x="loading")),n._optimisticResults==="isRestoring"&&(E="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&x!=="error")k=p.data,m=p.dataUpdatedAt,x=p.status,C=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)k=this.selectResult;else try{this.selectFn=n.select,k=n.select(g.data),k=Mp(a?.data,k,n),this.selectResult=k,this.selectError=null}catch(D){this.selectError=D}else k=g.data;if(typeof n.placeholderData<"u"&&typeof k>"u"&&x==="loading"){let D;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)D=a.data;else if(D=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof D<"u")try{D=n.select(D),this.selectError=null}catch(ie){this.selectError=ie}typeof D<"u"&&(x="success",k=Mp(a?.data,D,n),I=!0)}this.selectError&&(_=this.selectError,k=this.selectResult,w=Date.now(),x="error");const $=E==="fetching",R=x==="loading",L=x==="error";return{status:x,fetchStatus:E,isLoading:R,isSuccess:x==="success",isError:L,isInitialLoading:R&&$,data:k,dataUpdatedAt:m,error:_,errorUpdatedAt:w,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:$,isRefetching:$&&!R,isLoadingError:L&&g.dataUpdatedAt===0,isPaused:E==="paused",isPlaceholderData:I,isPreviousData:C,isRefetchError:L&&g.dataUpdatedAt!==0,isStale:Gu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,mu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const f=d;return this.currentResult[f]!==n[f]&&u.has(f)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!B4(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){Mg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function K4(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function jp(e,t){return K4(e,t)||e.state.dataUpdatedAt>0&&bu(e,t,t.refetchOnMount)}function bu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Gu(e,t)}return!1}function Np(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Gu(e,n)}function Gu(e,t){return e.isStaleByTime(t.staleTime)}class G4 extends Pg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),mu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:j4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){Mg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function Q4(e){return typeof e=="function"}function Dp(e,t,n){if(!Q4(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Ng(e,t){return typeof e=="function"?e(...t):!!e}function Y4(e,t){const n=ss({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=Gi(a.getOptimisticResult(o)),[d,{refetch:f,mutate:p}]=Bg(()=>new Promise(w=>{l.isFetching&&l.isLoading||(Hi(l.data)===i&&w(void 0),w(Hi(l.data)))}));Ia(()=>{p(()=>Hi(l.data)),f()});let g=[];const m=a.subscribe(w=>{g.push(()=>{Ia(()=>{const E={...Hi(w)};E.data===void 0&&(E.data=i),u(Hi(E)),p(()=>Hi(w.data)),f()})}),queueMicrotask(()=>{const E=g.pop();E&&E(),g=[]})});mr(()=>m()),_r(()=>{a.setOptions(o,{listeners:!1})}),Fs(()=>{const w=n.defaultQueryOptions(e);a.setOptions(w)}),Fs(sl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Ng(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const _={get(w,E){return E==="data"?d():Reflect.get(w,E)}};return new Proxy(l,_)}function os(e,t,n){const[i,o]=Gi(Dp(e,t,n));return Fs(()=>{const a=Dp(e,t,n);o(a)}),Y4(i,V4)}function mi(e,t,n){const[i,o]=Gi(Bp(e,t,n)),a=ss({context:i.context}),l=new G4(a,i),u=(g,m)=>{l.mutate(g,m).catch(J4)},[d,f]=Gi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Fs(()=>{const g=Bp(e,t,n);o(g),l.setOptions(g)}),Fs(sl(()=>d.status,()=>{if(d.isError&&Ng(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return mr(p),d}function J4(){}const X4=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Dg=(e={})=>(()=>{const t=X4();return nt(t,e,!0,!0),t})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ol(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function lo(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var e5=typeof xt=="object"&&xt&&xt.Object===Object&&xt,Ug=e5,t5=Ug,n5=typeof self=="object"&&self&&self.Object===Object&&self,r5=t5||n5||Function("return this")(),Yn=r5,i5=Yn,s5=i5.Symbol,as=s5,Up=as,zg=Object.prototype,o5=zg.hasOwnProperty,a5=zg.toString,Ns=Up?Up.toStringTag:void 0;function l5(e){var t=o5.call(e,Ns),n=e[Ns];try{e[Ns]=void 0;var i=!0}catch{}var o=a5.call(e);return i&&(t?e[Ns]=n:delete e[Ns]),o}var c5=l5,u5=Object.prototype,d5=u5.toString;function f5(e){return d5.call(e)}var h5=f5,zp=as,p5=c5,g5=h5,v5="[object Null]",m5="[object Undefined]",Hp=zp?zp.toStringTag:void 0;function b5(e){return e==null?e===void 0?m5:v5:Hp&&Hp in Object(e)?p5(e):g5(e)}var ls=b5;function y5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ei=y5,_5=ls,w5=Ei,x5="[object AsyncFunction]",$5="[object Function]",E5="[object GeneratorFunction]",k5="[object Proxy]";function C5(e){if(!w5(e))return!1;var t=_5(e);return t==$5||t==E5||t==x5||t==k5}var Hg=C5,S5=Yn,T5=S5["__core-js_shared__"],A5=T5,Xc=A5,Fp=function(){var e=/[^.]+$/.exec(Xc&&Xc.keys&&Xc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function I5(e){return!!Fp&&Fp in e}var R5=I5,O5=Function.prototype,L5=O5.toString;function P5(e){if(e!=null){try{return L5.call(e)}catch{}try{return e+""}catch{}}return""}var Fg=P5,M5=Hg,B5=R5,j5=Ei,N5=Fg,D5=/[\\^$.*+?()[\]{}|]/g,U5=/^\[object .+?Constructor\]$/,z5=Function.prototype,H5=Object.prototype,F5=z5.toString,q5=H5.hasOwnProperty,W5=RegExp("^"+F5.call(q5).replace(D5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Z5(e){if(!j5(e)||B5(e))return!1;var t=M5(e)?W5:U5;return t.test(N5(e))}var V5=Z5;function K5(e,t){return e?.[t]}var G5=K5,Q5=V5,Y5=G5;function J5(e,t){var n=Y5(e,t);return Q5(n)?n:void 0}var ki=J5,X5=ki,e$=X5(Object,"create"),al=e$,qp=al;function t$(){this.__data__=qp?qp(null):{},this.size=0}var n$=t$;function r$(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var i$=r$,s$=al,o$="__lodash_hash_undefined__",a$=Object.prototype,l$=a$.hasOwnProperty;function c$(e){var t=this.__data__;if(s$){var n=t[e];return n===o$?void 0:n}return l$.call(t,e)?t[e]:void 0}var u$=c$,d$=al,f$=Object.prototype,h$=f$.hasOwnProperty;function p$(e){var t=this.__data__;return d$?t[e]!==void 0:h$.call(t,e)}var g$=p$,v$=al,m$="__lodash_hash_undefined__";function b$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=v$&&t===void 0?m$:t,this}var y$=b$,_$=n$,w$=i$,x$=u$,$$=g$,E$=y$;function cs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}cs.prototype.clear=_$;cs.prototype.delete=w$;cs.prototype.get=x$;cs.prototype.has=$$;cs.prototype.set=E$;var k$=cs;function C$(){this.__data__=[],this.size=0}var S$=C$;function T$(e,t){return e===t||e!==e&&t!==t}var Qu=T$,A$=Qu;function I$(e,t){for(var n=e.length;n--;)if(A$(e[n][0],t))return n;return-1}var ll=I$,R$=ll,O$=Array.prototype,L$=O$.splice;function P$(e){var t=this.__data__,n=R$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():L$.call(t,n,1),--this.size,!0}var M$=P$,B$=ll;function j$(e){var t=this.__data__,n=B$(t,e);return n<0?void 0:t[n][1]}var N$=j$,D$=ll;function U$(e){return D$(this.__data__,e)>-1}var z$=U$,H$=ll;function F$(e,t){var n=this.__data__,i=H$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var q$=F$,W$=S$,Z$=M$,V$=N$,K$=z$,G$=q$;function us(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}us.prototype.clear=W$;us.prototype.delete=Z$;us.prototype.get=V$;us.prototype.has=K$;us.prototype.set=G$;var cl=us,Q$=ki,Y$=Yn,J$=Q$(Y$,"Map"),Yu=J$,Wp=k$,X$=cl,e8=Yu;function t8(){this.size=0,this.__data__={hash:new Wp,map:new(e8||X$),string:new Wp}}var n8=t8;function r8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var i8=r8,s8=i8;function o8(e,t){var n=e.__data__;return s8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ul=o8,a8=ul;function l8(e){var t=a8(this,e).delete(e);return this.size-=t?1:0,t}var c8=l8,u8=ul;function d8(e){return u8(this,e).get(e)}var f8=d8,h8=ul;function p8(e){return h8(this,e).has(e)}var g8=p8,v8=ul;function m8(e,t){var n=v8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var b8=m8,y8=n8,_8=c8,w8=f8,x8=g8,$8=b8;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=y8;ds.prototype.delete=_8;ds.prototype.get=w8;ds.prototype.has=x8;ds.prototype.set=$8;var Ju=ds,E8="__lodash_hash_undefined__";function k8(e){return this.__data__.set(e,E8),this}var C8=k8;function S8(e){return this.__data__.has(e)}var T8=S8,A8=Ju,I8=C8,R8=T8;function Ra(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new A8;++t<n;)this.add(e[t])}Ra.prototype.add=Ra.prototype.push=I8;Ra.prototype.has=R8;var qg=Ra;function O8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var L8=O8;function P8(e){return e!==e}var M8=P8;function B8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var j8=B8,N8=L8,D8=M8,U8=j8;function z8(e,t,n){return t===t?U8(e,t,n):N8(e,D8,n)}var H8=z8,F8=H8;function q8(e,t){var n=e==null?0:e.length;return!!n&&F8(e,t,0)>-1}var W8=q8;function Z8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var V8=Z8;function K8(e,t){return e.has(t)}var Wg=K8,G8=ki,Q8=Yn,Y8=G8(Q8,"Set"),Zg=Y8;function J8(){}var X8=J8;function e6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Xu=e6,eu=Zg,t6=X8,n6=Xu,r6=1/0,i6=eu&&1/n6(new eu([,-0]))[1]==r6?function(e){return new eu(e)}:t6,s6=i6,o6=qg,a6=W8,l6=V8,c6=Wg,u6=s6,d6=Xu,f6=200;function h6(e,t,n){var i=-1,o=a6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=l6;else if(a>=f6){var f=t?null:u6(e);if(f)return d6(f);l=!1,o=c6,d=new o6}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var m=d.length;m--;)if(d[m]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var Vg=h6,p6=Vg;function g6(e){return e&&e.length?p6(e):[]}var v6=g6;const bi=ol(v6),m6=j('<div class="block shrink-0 overflow-hidden border-b p-1">'),b6=e=>(()=>{const t=m6();return S(t,()=>e.children),t})();function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function y6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Kg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function _6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function w6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function x6(e,t){Kg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const fi={number:yu,bool:y6,bytes:Kg,hash:_6,exists:w6,output:x6},Ea=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,$6=Object.freeze(Object.defineProperty({__proto__:null,crypto:Ea},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const E6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),k6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),yi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Ln=(e,t)=>e<<32-t|e>>>t,Gg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Gg)throw new Error("Non little-endian hardware is not supported");const C6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ln(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=C6[e[n]];return t}function Hr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Qg=async()=>{};async function S6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Qg(),i+=a)}}function ed(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function co(e){if(typeof e=="string"&&(e=ed(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function hi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class td{clone(){return this._cloneInto()}}const T6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function A6(e,t){if(t!==void 0&&(typeof t!="object"||!T6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function dl(e){const t=i=>e().update(co(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function I6(e){const t=(i,o)=>e(o).update(co(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function fl(e=32){if(Ea&&typeof Ea.getRandomValues=="function")return Ea.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const R6=Object.freeze(Object.defineProperty({__proto__:null,Hash:td,asyncLoop:S6,bytesToHex:ln,checkOpts:A6,concatBytes:hi,createView:yi,hexToBytes:Hr,isLE:Gg,nextTick:Qg,randomBytes:fl,rotr:Ln,toBytes:co,u32:k6,u8:E6,utf8ToBytes:ed,wrapConstructor:dl,wrapConstructorWithOpts:I6},Symbol.toStringTag,{value:"Module"}));function O6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}let Yg=class extends td{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=yi(this.buffer)}update(t){fi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=co(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=yi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){fi.exists(this),fi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;O6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=yi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const L6=(e,t,n)=>e&t^~e&n,P6=(e,t,n)=>e&t^e&n^t&n,M6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Or=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Lr=new Uint32Array(64);class Jg extends Yg{constructor(){super(64,32,8,!1),this.A=Or[0]|0,this.B=Or[1]|0,this.C=Or[2]|0,this.D=Or[3]|0,this.E=Or[4]|0,this.F=Or[5]|0,this.G=Or[6]|0,this.H=Or[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Lr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const m=Lr[g-15],_=Lr[g-2],w=Ln(m,7)^Ln(m,18)^m>>>3,E=Ln(_,17)^Ln(_,19)^_>>>10;Lr[g]=E+Lr[g-7]+w+Lr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:p}=this;for(let g=0;g<64;g++){const m=Ln(u,6)^Ln(u,11)^Ln(u,25),_=p+m+L6(u,d,f)+M6[g]+Lr[g]|0,E=(Ln(i,2)^Ln(i,13)^Ln(i,22))+P6(i,o,a)|0;p=f,f=d,d=u,u=l+_|0,l=a,a=o,o=i,i=_+E|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,f,p)}roundClean(){Lr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class B6 extends Jg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Vn=dl(()=>new Jg),j6=dl(()=>new B6),N6=Object.freeze(Object.defineProperty({__proto__:null,sha224:j6,sha256:Vn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Xg=BigInt(0),hl=BigInt(1),D6=BigInt(2),pl=e=>e instanceof Uint8Array,U6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Qi(e){if(!pl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=U6[e[n]];return t}function e1(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function nd(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function Yi(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function zt(e){return nd(Qi(e))}function rd(e){if(!pl(e))throw new Error("Uint8Array expected");return nd(Qi(Uint8Array.from(e).reverse()))}const Ur=(e,t)=>Yi(e.toString(16).padStart(t*2,"0")),t1=(e,t)=>Ur(e,t).reverse(),z6=e=>Yi(e1(e));function Rt(e,t,n){let i;if(typeof t=="string")try{i=Yi(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(pl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function cn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!pl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function H6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function gl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function F6(e){let t;for(t=0;e>Xg;e>>=hl,t+=1);return t}const q6=(e,t)=>e>>BigInt(t)&hl,W6=(e,t,n)=>e|(n?hl:Xg)<<BigInt(t),id=e=>(D6<<BigInt(e-1))-hl,tu=e=>new Uint8Array(e),Zp=e=>Uint8Array.from(e);function n1(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=tu(e),o=tu(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=tu())=>{o=u(Zp([0]),g),i=u(),g.length!==0&&(o=u(Zp([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const m=[];for(;g<t;){i=u();const _=i.slice();m.push(_),g+=i.length}return cn(...m)};return(g,m)=>{l(),d(g);let _;for(;!(_=m(f()));)d();return l(),_}}const Z6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function fs(e,t,n={}){const i=(o,a,l)=>{const u=Z6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const V6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:q6,bitLen:F6,bitMask:id,bitSet:W6,bytesToHex:Qi,bytesToNumberBE:zt,bytesToNumberLE:rd,concatBytes:cn,createHmacDrbg:n1,ensureBytes:Rt,equalBytes:H6,hexToBytes:Yi,hexToNumber:nd,numberToBytesBE:Ur,numberToBytesLE:t1,numberToHexUnpadded:e1,numberToVarBytesBE:z6,utf8ToBytes:gl,validateObject:fs},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),ft=BigInt(1),ui=BigInt(2),K6=BigInt(3),_u=BigInt(4),Vp=BigInt(5),Kp=BigInt(8);BigInt(9);BigInt(16);function wt(e,t){const n=e%t;return n>=kt?n:t+n}function G6(e,t,n){if(n<=kt||t<kt)throw new Error("Expected power/modulo > 0");if(n===ft)return kt;let i=ft;for(;t>kt;)t&ft&&(i=i*e%n),e=e*e%n,t>>=ft;return i}function wn(e,t,n){let i=e;for(;t-- >kt;)i*=i,i%=n;return i}function wu(e,t){if(e===kt||t<=kt)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=wt(e,t),i=t,o=kt,a=ft;for(;n!==kt;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==ft)throw new Error("invert: does not exist");return wt(o,t)}function Q6(e){const t=(e-ft)/ui;let n,i,o;for(n=e-ft,i=0;n%ui===kt;n/=ui,i++);for(o=ui;o<e&&G6(o,t,e)!==e-ft;o++);if(i===1){const l=(e+ft)/_u;return function(d,f){const p=d.pow(f,l);if(!d.eql(d.sqr(p),f))throw new Error("Cannot find square root");return p}}const a=(n+ft)/ui;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),m=u.pow(d,n);for(;!u.eql(m,u.ONE);){if(u.eql(m,u.ZERO))return u.ZERO;let _=1;for(let E=u.sqr(m);_<f&&!u.eql(E,u.ONE);_++)E=u.sqr(E);const w=u.pow(p,ft<<BigInt(f-_-1));p=u.sqr(w),g=u.mul(g,w),m=u.mul(m,p),f=_}return g}}function Y6(e){if(e%_u===K6){const t=(e+ft)/_u;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Kp===Vp){const t=(e-Vp)/Kp;return function(i,o){const a=i.mul(o,ui),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ui),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return Q6(e)}const J6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function r1(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=J6.reduce((i,o)=>(i[o]="function",i),t);return fs(e,n)}function X6(e,t,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return e.ONE;if(n===ft)return t;let i=e.ONE,o=t;for(;n>kt;)n&ft&&(i=e.mul(i,o)),o=e.sqr(o),n>>=ft;return i}function e7(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function sd(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function t7(e,t,n=!1,i={}){if(e<=kt)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=sd(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=Y6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:id(o),ZERO:kt,ONE:ft,create:d=>wt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<e},is0:d=>d===kt,isOdd:d=>(d&ft)===ft,neg:d=>wt(-d,e),eql:(d,f)=>d===f,sqr:d=>wt(d*d,e),add:(d,f)=>wt(d+f,e),sub:(d,f)=>wt(d-f,e),mul:(d,f)=>wt(d*f,e),pow:(d,f)=>X6(u,d,f),div:(d,f)=>wt(d*wu(f,e),e),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>wu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>e7(u,d),cmov:(d,f,p)=>p?f:d,toBytes:d=>n?t1(d,a):Ur(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?rd(d):zt(d)}});return Object.freeze(u)}function n7(e,t,n=!1){e=Rt("privateHash",e);const i=e.length,o=sd(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?rd(e):zt(e);return wt(a,t-ft)+ft}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const r7=BigInt(0),nu=BigInt(1);function i7(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>r7;)a&nu&&(l=l.add(u)),u=u.double(),a>>=nu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,p=f;for(let g=0;g<l;g++){p=f,d.push(p);for(let m=1;m<u;m++)p=p.add(f),d.push(p);f=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),m=2**o,_=BigInt(o);for(let w=0;w<u;w++){const E=w*d;let x=Number(l&g);l>>=_,x>d&&(x-=m,l+=nu);const C=E,I=E+Math.abs(x)-1,k=w%2!==0,$=x<0;x===0?p=p.add(n(k,a[C])):f=f.add(n($,a[I]))}return{p:f,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function i1(e){return r1(e.Fp),fs(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...sd(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function s7(e){const t=i1(e);fs(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:o7,hexToBytes:a7}=V6,pi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=pi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:o7(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=pi,n=typeof e=="string"?a7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=pi._parseInt(n.subarray(2)),{d:l,l:u}=pi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const p=f.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},Mn=BigInt(0),pt=BigInt(1),hr=BigInt(2),Oa=BigInt(3),Gp=BigInt(4);function l7(e){const t=s7(e),{Fp:n}=t,i=t.toBytes||((w,E,x)=>{const C=E.toAffine();return cn(Uint8Array.from([4]),n.toBytes(C.x),n.toBytes(C.y))}),o=t.fromBytes||(w=>{const E=w.subarray(1),x=n.fromBytes(E.subarray(0,n.BYTES)),C=n.fromBytes(E.subarray(n.BYTES,2*n.BYTES));return{x,y:C}});function a(w){const{a:E,b:x}=t,C=n.sqr(w),I=n.mul(C,w);return n.add(n.add(I,n.mul(w,E)),x)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l(w){return typeof w=="bigint"&&Mn<w&&w<t.n}function u(w){if(!l(w))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(w){const{allowedPrivateKeyLengths:E,nByteLength:x,wrapPrivateKey:C,n:I}=t;if(E&&typeof w!="bigint"){if(w instanceof Uint8Array&&(w=Qi(w)),typeof w!="string"||!E.includes(w.length))throw new Error("Invalid key");w=w.padStart(x*2,"0")}let k;try{k=typeof w=="bigint"?w:zt(Rt("private key",w,x))}catch{throw new Error(`private key must be ${x} bytes, hex or bigint, not ${typeof w}`)}return C&&(k=wt(k,I)),u(k),k}const f=new Map;function p(w){if(!(w instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(E,x,C){if(this.px=E,this.py=x,this.pz=C,E==null||!n.isValid(E))throw new Error("x required");if(x==null||!n.isValid(x))throw new Error("y required");if(C==null||!n.isValid(C))throw new Error("z required")}static fromAffine(E){const{x,y:C}=E||{};if(!E||!n.isValid(x)||!n.isValid(C))throw new Error("invalid affine point");if(E instanceof g)throw new Error("projective point not allowed");const I=k=>n.eql(k,n.ZERO);return I(x)&&I(C)?g.ZERO:new g(x,C,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(E){const x=n.invertBatch(E.map(C=>C.pz));return E.map((C,I)=>C.toAffine(x[I])).map(g.fromAffine)}static fromHex(E){const x=g.fromAffine(o(Rt("pointHex",E)));return x.assertValidity(),x}static fromPrivateKey(E){return g.BASE.multiply(d(E))}_setWindowSize(E){this._WINDOW_SIZE=E,f.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:E,y:x}=this.toAffine();if(!n.isValid(E)||!n.isValid(x))throw new Error("bad point: x or y not FE");const C=n.sqr(x),I=a(E);if(!n.eql(C,I))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:E}=this.toAffine();if(n.isOdd)return!n.isOdd(E);throw new Error("Field doesn't support isOdd")}equals(E){p(E);const{px:x,py:C,pz:I}=this,{px:k,py:$,pz:R}=E,L=n.eql(n.mul(x,R),n.mul(k,I)),B=n.eql(n.mul(C,R),n.mul($,I));return L&&B}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:E,b:x}=t,C=n.mul(x,Oa),{px:I,py:k,pz:$}=this;let R=n.ZERO,L=n.ZERO,B=n.ZERO,D=n.mul(I,I),ie=n.mul(k,k),q=n.mul($,$),J=n.mul(I,k);return J=n.add(J,J),B=n.mul(I,$),B=n.add(B,B),R=n.mul(E,B),L=n.mul(C,q),L=n.add(R,L),R=n.sub(ie,L),L=n.add(ie,L),L=n.mul(R,L),R=n.mul(J,R),B=n.mul(C,B),q=n.mul(E,q),J=n.sub(D,q),J=n.mul(E,J),J=n.add(J,B),B=n.add(D,D),D=n.add(B,D),D=n.add(D,q),D=n.mul(D,J),L=n.add(L,D),q=n.mul(k,$),q=n.add(q,q),D=n.mul(q,J),R=n.sub(R,D),B=n.mul(q,ie),B=n.add(B,B),B=n.add(B,B),new g(R,L,B)}add(E){p(E);const{px:x,py:C,pz:I}=this,{px:k,py:$,pz:R}=E;let L=n.ZERO,B=n.ZERO,D=n.ZERO;const ie=t.a,q=n.mul(t.b,Oa);let J=n.mul(x,k),G=n.mul(C,$),le=n.mul(I,R),te=n.add(x,C),U=n.add(k,$);te=n.mul(te,U),U=n.add(J,G),te=n.sub(te,U),U=n.add(x,I);let ee=n.add(k,R);return U=n.mul(U,ee),ee=n.add(J,le),U=n.sub(U,ee),ee=n.add(C,I),L=n.add($,R),ee=n.mul(ee,L),L=n.add(G,le),ee=n.sub(ee,L),D=n.mul(ie,U),L=n.mul(q,le),D=n.add(L,D),L=n.sub(G,D),D=n.add(G,D),B=n.mul(L,D),G=n.add(J,J),G=n.add(G,J),le=n.mul(ie,le),U=n.mul(q,U),G=n.add(G,le),le=n.sub(J,le),le=n.mul(ie,le),U=n.add(U,le),J=n.mul(G,U),B=n.add(B,J),J=n.mul(ee,U),L=n.mul(te,L),L=n.sub(L,J),J=n.mul(te,G),D=n.mul(ee,D),D=n.add(D,J),new g(L,B,D)}subtract(E){return this.add(E.negate())}is0(){return this.equals(g.ZERO)}wNAF(E){return _.wNAFCached(this,f,E,x=>{const C=n.invertBatch(x.map(I=>I.pz));return x.map((I,k)=>I.toAffine(C[k])).map(g.fromAffine)})}multiplyUnsafe(E){const x=g.ZERO;if(E===Mn)return x;if(u(E),E===pt)return this;const{endo:C}=t;if(!C)return _.unsafeLadder(this,E);let{k1neg:I,k1:k,k2neg:$,k2:R}=C.splitScalar(E),L=x,B=x,D=this;for(;k>Mn||R>Mn;)k&pt&&(L=L.add(D)),R&pt&&(B=B.add(D)),D=D.double(),k>>=pt,R>>=pt;return I&&(L=L.negate()),$&&(B=B.negate()),B=new g(n.mul(B.px,C.beta),B.py,B.pz),L.add(B)}multiply(E){u(E);let x=E,C,I;const{endo:k}=t;if(k){const{k1neg:$,k1:R,k2neg:L,k2:B}=k.splitScalar(x);let{p:D,f:ie}=this.wNAF(R),{p:q,f:J}=this.wNAF(B);D=_.constTimeNegate($,D),q=_.constTimeNegate(L,q),q=new g(n.mul(q.px,k.beta),q.py,q.pz),C=D.add(q),I=ie.add(J)}else{const{p:$,f:R}=this.wNAF(x);C=$,I=R}return g.normalizeZ([C,I])[0]}multiplyAndAddUnsafe(E,x,C){const I=g.BASE,k=(R,L)=>L===Mn||L===pt||!R.equals(I)?R.multiplyUnsafe(L):R.multiply(L),$=k(this,x).add(k(E,C));return $.is0()?void 0:$}toAffine(E){const{px:x,py:C,pz:I}=this,k=this.is0();E==null&&(E=k?n.ONE:n.inv(I));const $=n.mul(x,E),R=n.mul(C,E),L=n.mul(I,E);if(k)return{x:n.ZERO,y:n.ZERO};if(!n.eql(L,n.ONE))throw new Error("invZ was invalid");return{x:$,y:R}}isTorsionFree(){const{h:E,isTorsionFree:x}=t;if(E===pt)return!0;if(x)return x(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:E,clearCofactor:x}=t;return E===pt?this:x?x(g,this):this.multiplyUnsafe(t.h)}toRawBytes(E=!0){return this.assertValidity(),i(g,this,E)}toHex(E=!0){return Qi(this.toRawBytes(E))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const m=t.nBitLength,_=i7(g,t.endo?Math.ceil(m/2):m);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function c7(e){const t=i1(e);return fs(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function u7(e){const t=c7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(U){return Mn<U&&U<n.ORDER}function u(U){return wt(U,i)}function d(U){return wu(U,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:m}=l7({...t,toBytes(U,ee,ce){const ge=ee.toAffine(),Ee=n.toBytes(ge.x),ze=cn;return ce?ze(Uint8Array.from([ee.hasEvenY()?2:3]),Ee):ze(Uint8Array.from([4]),Ee,n.toBytes(ge.y))},fromBytes(U){const ee=U.length,ce=U[0],ge=U.subarray(1);if(ee===o&&(ce===2||ce===3)){const Ee=zt(ge);if(!l(Ee))throw new Error("Point is not on curve");const ze=g(Ee);let De=n.sqrt(ze);const ue=(De&pt)===pt;return(ce&1)===1!==ue&&(De=n.neg(De)),{x:Ee,y:De}}else if(ee===a&&ce===4){const Ee=n.fromBytes(ge.subarray(0,n.BYTES)),ze=n.fromBytes(ge.subarray(n.BYTES,2*n.BYTES));return{x:Ee,y:ze}}else throw new Error(`Point of length ${ee} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),_=U=>Qi(Ur(U,t.nByteLength));function w(U){const ee=i>>pt;return U>ee}function E(U){return w(U)?u(-U):U}const x=(U,ee,ce)=>zt(U.slice(ee,ce));class C{constructor(ee,ce,ge){this.r=ee,this.s=ce,this.recovery=ge,this.assertValidity()}static fromCompact(ee){const ce=t.nByteLength;return ee=Rt("compactSignature",ee,ce*2),new C(x(ee,0,ce),x(ee,ce,2*ce))}static fromDER(ee){const{r:ce,s:ge}=pi.toSig(Rt("DER",ee));return new C(ce,ge)}assertValidity(){if(!m(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!m(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(ee){return new C(this.r,this.s,ee)}recoverPublicKey(ee){const{r:ce,s:ge,recovery:Ee}=this,ze=B(Rt("msgHash",ee));if(Ee==null||![0,1,2,3].includes(Ee))throw new Error("recovery id invalid");const De=Ee===2||Ee===3?ce+t.n:ce;if(De>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const ue=Ee&1?"03":"02",Y=f.fromHex(ue+_(De)),de=d(De),fe=u(-ze*de),W=u(ge*de),re=f.BASE.multiplyAndAddUnsafe(Y,fe,W);if(!re)throw new Error("point at infinify");return re.assertValidity(),re}hasHighS(){return w(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Yi(this.toDERHex())}toDERHex(){return pi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Yi(this.toCompactHex())}toCompactHex(){return _(this.r)+_(this.s)}}const I={isValidPrivateKey(U){try{return p(U),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const U=t.randomBytes(n.BYTES+8),ee=n7(U,i);return Ur(ee,t.nByteLength)},precompute(U=8,ee=f.BASE){return ee._setWindowSize(U),ee.multiply(BigInt(3)),ee}};function k(U,ee=!0){return f.fromPrivateKey(U).toRawBytes(ee)}function $(U){const ee=U instanceof Uint8Array,ce=typeof U=="string",ge=(ee||ce)&&U.length;return ee?ge===o||ge===a:ce?ge===2*o||ge===2*a:U instanceof f}function R(U,ee,ce=!0){if($(U))throw new Error("first arg must be private key");if(!$(ee))throw new Error("second arg must be public key");return f.fromHex(ee).multiply(p(U)).toRawBytes(ce)}const L=t.bits2int||function(U){const ee=zt(U),ce=U.length*8-t.nBitLength;return ce>0?ee>>BigInt(ce):ee},B=t.bits2int_modN||function(U){return u(L(U))},D=id(t.nBitLength);function ie(U){if(typeof U!="bigint")throw new Error("bigint expected");if(!(Mn<=U&&U<D))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Ur(U,t.nByteLength)}function q(U,ee,ce=J){if(["recovered","canonical"].some(ye=>ye in ce))throw new Error("sign() legacy options not supported");const{hash:ge,randomBytes:Ee}=t;let{lowS:ze,prehash:De,extraEntropy:ue}=ce;ze==null&&(ze=!0),U=Rt("msgHash",U),De&&(U=Rt("prehashed msgHash",ge(U)));const Y=B(U),de=p(ee),fe=[ie(de),ie(Y)];if(ue!=null){const ye=ue===!0?Ee(n.BYTES):ue;fe.push(Rt("extraEntropy",ye,n.BYTES))}const W=cn(...fe),re=Y;function Q(ye){const Ke=L(ye);if(!m(Ke))return;const K=d(Ke),We=f.BASE.multiply(Ke).toAffine(),ht=u(We.x);if(ht===Mn)return;const $e=u(K*u(re+ht*de));if($e===Mn)return;let rt=(We.x===ht?0:2)|Number(We.y&pt),Xt=$e;return ze&&w($e)&&(Xt=E($e),rt^=1),new C(ht,Xt,rt)}return{seed:W,k2sig:Q}}const J={lowS:t.lowS,prehash:!1},G={lowS:t.lowS,prehash:!1};function le(U,ee,ce=J){const{seed:ge,k2sig:Ee}=q(U,ee,ce);return n1(t.hash.outputLen,t.nByteLength,t.hmac)(ge,Ee)}f.BASE._setWindowSize(8);function te(U,ee,ce,ge=G){const Ee=U;if(ee=Rt("msgHash",ee),ce=Rt("publicKey",ce),"strict"in ge)throw new Error("options.strict was renamed to lowS");const{lowS:ze,prehash:De}=ge;let ue,Y;try{if(typeof Ee=="string"||Ee instanceof Uint8Array)try{ue=C.fromDER(Ee)}catch(We){if(!(We instanceof pi.Err))throw We;ue=C.fromCompact(Ee)}else if(typeof Ee=="object"&&typeof Ee.r=="bigint"&&typeof Ee.s=="bigint"){const{r:We,s:ht}=Ee;ue=new C(We,ht)}else throw new Error("PARSE");Y=f.fromHex(ce)}catch(We){if(We.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ze&&ue.hasHighS())return!1;De&&(ee=t.hash(ee));const{r:de,s:fe}=ue,W=B(ee),re=d(fe),Q=u(W*re),ye=u(de*re),Ke=f.BASE.multiplyAndAddUnsafe(Y,Q,ye)?.toAffine();return Ke?u(Ke.x)===de:!1}return{CURVE:t,getPublicKey:k,getSharedSecret:R,sign:le,verify:te,ProjectivePoint:f,Signature:C,utils:I}}function d7(e,t){const n=e.ORDER;let i=Mn;for(let m=n-pt;m%hr===Mn;m/=hr)i+=pt;const o=i,a=(n-pt)/hr**o,l=(a-pt)/hr,u=hr**o-pt,d=hr**(o-pt),f=e.pow(t,a),p=e.pow(t,(a+pt)/hr);let g=(m,_)=>{let w=f,E=e.pow(_,u),x=e.sqr(E);x=e.mul(x,_);let C=e.mul(m,x);C=e.pow(C,l),C=e.mul(C,E),E=e.mul(C,_),x=e.mul(C,m);let I=e.mul(x,E);C=e.pow(I,d);let k=e.eql(C,e.ONE);E=e.mul(x,p),C=e.mul(I,w),x=e.cmov(E,x,k),I=e.cmov(C,I,k);for(let $=o;$>pt;$--){let R=hr**($-hr),L=e.pow(I,R);const B=e.eql(L,e.ONE);E=e.mul(x,w),w=e.mul(w,w),L=e.mul(I,w),x=e.cmov(E,x,B),I=e.cmov(L,I,B)}return{isValid:k,value:x}};if(e.ORDER%Gp===Oa){const m=(e.ORDER-Oa)/Gp,_=e.sqrt(e.neg(t));g=(w,E)=>{let x=e.sqr(E);const C=e.mul(w,E);x=e.mul(x,C);let I=e.pow(x,m);I=e.mul(I,C);const k=e.mul(I,_),$=e.mul(e.sqr(I),E),R=e.eql($,w);let L=e.cmov(k,I,R);return{isValid:R,value:L}}}return g}function f7(e,t){if(r1(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=d7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,f,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),f=e.sqr(u),d=e.mul(f,t.A),a=e.add(a,d),a=e.mul(a,l),f=e.mul(f,u),d=e.mul(f,t.B),a=e.add(a,d),p=e.mul(o,l);const{isValid:m,value:_}=n(a,f);g=e.mul(o,i),g=e.mul(g,_),p=e.cmov(p,l,m),g=e.cmov(g,_,m);const w=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,w),p=e.div(p,u),{x:p,y:g}}}function h7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return gl(e);throw new Error("DST must be Uint8Array or string")}const p7=zt;function Br(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function g7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function qs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function od(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function v7(e,t,n,i){qs(e),qs(t),od(n),t.length>255&&(t=i(cn(gl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=cn(t,Br(t.length,1)),d=Br(0,a),f=Br(n,2),p=new Array(l),g=i(cn(d,e,f,Br(0,1),u));p[0]=i(cn(g,Br(1,1),u));for(let _=1;_<=l;_++){const w=[g7(g,p[_-1]),Br(_+1,1),u];p[_]=i(cn(...w))}return cn(...p).slice(0,n)}function m7(e,t,n,i,o){if(qs(e),qs(t),od(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(gl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Br(n,2)).update(t).update(Br(t.length,1)).digest()}function Qp(e,t,n){fs(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;qs(e),od(t);const f=h7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),m=t*a*g;let _;if(u==="xmd")_=v7(e,f,m,l);else if(u==="xof")_=m7(e,f,m,o,l);else if(u==="_internal_pass")_=e;else throw new Error('expand must be "xmd" or "xof"');const w=new Array(t);for(let E=0;E<t;E++){const x=new Array(a);for(let C=0;C<a;C++){const I=g*(C+E*a),k=_.subarray(I,I+g);x[C]=wt(p7(k),i)}w[E]=x}return w}function b7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(f=>f.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function y7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=Qp(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=Qp(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class s1 extends td{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,fi.hash(t);const i=co(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return fi.exists(this),this.iHash.update(t),this}digestInto(t){fi.exists(this),fi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const La=(e,t,n)=>new s1(e,t).update(n).digest();La.create=(e,t)=>new s1(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function _7(e){return{hash:e,hmac:(t,...n)=>La(e,t,hi(...n)),randomBytes:fl}}function w7(e,t){const n=i=>u7({...e,..._7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Pa=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),o1=BigInt(1),Ma=BigInt(2),Yp=(e,t)=>(e+t/Ma)/t;function a1(e){const t=vl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=e*e*e%t,p=f*f*e%t,g=wn(p,n,t)*p%t,m=wn(g,n,t)*p%t,_=wn(m,Ma,t)*f%t,w=wn(_,o,t)*_%t,E=wn(w,a,t)*w%t,x=wn(E,u,t)*E%t,C=wn(x,d,t)*x%t,I=wn(C,u,t)*E%t,k=wn(I,n,t)*p%t,$=wn(k,l,t)*w%t,R=wn($,i,t)*f%t,L=wn(R,Ma,t);if(!Fr.eql(Fr.sqr(L),e))throw new Error("Cannot find square root");return L}const Fr=t7(vl,void 0,void 0,{sqrt:a1}),Ut=w7({a:BigInt(0),b:BigInt(7),Fp:Fr,n:Pa,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Pa,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-o1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Yp(a*e,t),d=Yp(-i*e,t);let f=wt(e-u*n-d*o,t),p=wt(-u*i-d*a,t);const g=f>l,m=p>l;if(g&&(f=t-f),m&&(p=t-p),f>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:f,k2neg:m,k2:p}}}},Vn),ml=BigInt(0),l1=e=>typeof e=="bigint"&&ml<e&&e<vl,x7=e=>typeof e=="bigint"&&ml<e&&e<Pa,Jp={};function Ba(e,...t){let n=Jp[e];if(n===void 0){const i=Vn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=cn(i,i),Jp[e]=n}return Vn(cn(n,...t))}const ad=e=>e.toRawBytes(!0).slice(1),xu=e=>Ur(e,32),ru=e=>wt(e,vl),Ws=e=>wt(e,Pa),ld=Ut.ProjectivePoint,$7=(e,t,n)=>ld.BASE.multiplyAndAddUnsafe(e,t,n);function $u(e){let t=Ut.utils.normPrivateKeyToScalar(e),n=ld.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Ws(-t),bytes:ad(n)}}function c1(e){if(!l1(e))throw new Error("bad x: need 0 < x < p");const t=ru(e*e),n=ru(t*e+BigInt(7));let i=a1(n);i%Ma!==ml&&(i=ru(-i));const o=new ld(e,i,o1);return o.assertValidity(),o}function u1(...e){return Ws(zt(Ba("BIP0340/challenge",...e)))}function E7(e){return $u(e).bytes}function k7(e,t,n=fl(32)){const i=Rt("message",e),{bytes:o,scalar:a}=$u(t),l=Rt("auxRand",n,32),u=xu(a^zt(Ba("BIP0340/aux",l))),d=Ba("BIP0340/nonce",u,o,i),f=Ws(zt(d));if(f===ml)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=$u(f),m=u1(p,o,i),_=new Uint8Array(64);if(_.set(p,0),_.set(xu(Ws(g+m*a)),32),!d1(_,i,o))throw new Error("sign: Invalid signature produced");return _}function d1(e,t,n){const i=Rt("signature",e,64),o=Rt("message",t),a=Rt("publicKey",n,32);try{const l=c1(zt(a)),u=zt(i.subarray(0,32));if(!l1(u))return!1;const d=zt(i.subarray(32,64));if(!x7(d))return!1;const f=u1(xu(u),ad(l),o),p=$7(l,d,Ws(-f));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const uo={getPublicKey:E7,sign:k7,verify:d1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:c1,pointToBytes:ad,numberToBytesBE:Ur,bytesToNumberBE:zt,taggedHash:Ba,mod:wt}},C7=b7(Fr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),S7=f7(Fr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Fr.create(BigInt("-11"))});y7(Ut.ProjectivePoint,e=>{const{x:t,y:n}=S7(Fr.create(e[0]));return C7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Fr.ORDER,m:1,k:128,expand:"xmd",hash:Vn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Vr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Un(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Jn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Vr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Xn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function fo(e,t="="){if(Vr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function f1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Xp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Vr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],p=t*l+f;if(!Number.isSafeInteger(p)||t*l/t!==l||p-f!==t*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const h1=(e,t)=>t?h1(t,e%t):e,ja=(e,t)=>e+(t-h1(e,t));function Eu(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(ja(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${ja(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Vr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function p1(e){return Vr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Xp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Xp(t,e,2**8))}}}function wr(e,t=!1){if(Vr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(ja(8,e)>32||ja(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Eu(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Eu(n,e,8,t))}}}function e0(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function g1(e,t){if(Vr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const T7={alphabet:Jn,chain:Un,checksum:g1,radix:p1,radix2:wr,join:Xn,padding:fo},v1=Un(wr(4),Jn("0123456789ABCDEF"),Xn("")),m1=Un(wr(5),Jn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),fo(5),Xn("")),A7=Un(wr(5),Jn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),fo(5),Xn("")),I7=Un(wr(5),Jn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Xn(""),f1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Ji=Un(wr(6),Jn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),fo(6),Xn("")),b1=Un(wr(6),Jn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),fo(6),Xn("")),cd=e=>Un(p1(58),Jn(e),Xn("")),Zs=cd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),R7=cd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),O7=cd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),t0=[0,2,3,5,6,7,9,10,11],y1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Zs.encode(i).padStart(t0[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=t0.indexOf(i.length),a=Zs.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},_1=e=>Un(g1(4,t=>e(e(t))),Zs),ku=Un(Jn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Xn("")),n0=[996825010,642813549,513874426,1027748829,705979059];function Ds(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<n0.length;i++)(t>>i&1)===1&&(n^=n0[i]);return n}function r0(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=Ds(o)^l>>5}o=Ds(o);for(let a=0;a<i;a++)o=Ds(o)^e.charCodeAt(a)&31;for(let a of t)o=Ds(o)^a;for(let a=0;a<6;a++)o=Ds(o);return o^=n,ku.encode(Eu([o%2**30],30,5,!1))}function w1(e){const t=e==="bech32"?1:734539939,n=wr(5),i=n.decode,o=n.encode,a=e0(i);function l(p,g,m=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const _=p.length+7+g.length;if(m!==!1&&_>m)throw new TypeError(`Length ${_} exceeds limit ${m}`);return p=p.toLowerCase(),`${p}1${ku.encode(g)}${r0(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const m=p.toLowerCase();if(p!==m&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=m;const _=p.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=p.slice(0,_),E=p.slice(_+1);if(E.length<6)throw new Error("Data must be at least 6 characters long");const x=ku.decode(E).slice(0,-6),C=r0(w,x,t);if(!E.endsWith(C))throw new Error(`Invalid checksum in ${p}: expected "${C}"`);return{prefix:w,words:x}}const d=e0(u);function f(p){const{prefix:g,words:m}=u(p,!1);return{prefix:g,words:m,bytes:i(m)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Ft=w1("bech32"),L7=w1("bech32m"),x1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},$1=Un(wr(4),Jn("0123456789abcdef"),Xn(""),f1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Vs={utf8:x1,hex:$1,base16:v1,base32:m1,base64:Ji,base64url:b1,base58:Zs,base58xmr:y1},E1=`Invalid encoding type. Available types: ${Object.keys(Vs).join(", ")}`,k1=(e,t)=>{if(typeof e!="string"||!Vs.hasOwnProperty(e))throw new TypeError(E1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Vs[e].encode(t)},P7=k1,C1=(e,t)=>{if(!Vs.hasOwnProperty(e))throw new TypeError(E1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Vs[e].decode(t)},M7=C1,B7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Vr,base16:v1,base32:m1,base32crockford:I7,base32hex:A7,base58:Zs,base58check:_1,base58flickr:R7,base58xmr:y1,base58xrp:O7,base64:Ji,base64url:b1,bech32:Ft,bech32m:L7,bytes:M7,bytesToString:k1,hex:$1,str:P7,stringToBytes:C1,utf8:x1,utils:T7},Symbol.toStringTag,{value:"Module"}));var ud={};Object.defineProperty(ud,"__esModule",{value:!0});var dd=ud.wordlist=void 0;dd=ud.wordlist=`abandon
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
`);var un={},Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.output=Et.exists=Et.hash=qi=Et.bytes=Et.bool=Et.number=void 0;function Na(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Et.number=Na;function S1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Et.bool=S1;function fd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var qi=Et.bytes=fd;function T1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Na(e.outputLen),Na(e.blockLen)}Et.hash=T1;function A1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Et.exists=A1;function I1(e,t){fd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Et.output=I1;const j7={number:Na,bool:S1,bytes:fd,hash:T1,exists:A1,output:I1};Et.default=j7;var Xi={},R1={},ho={};const N7=lo($6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=N7,n=$=>new Uint8Array($.buffer,$.byteOffset,$.byteLength);e.u8=n;const i=$=>new Uint32Array($.buffer,$.byteOffset,Math.floor($.byteLength/4));e.u32=i;const o=$=>new DataView($.buffer,$.byteOffset,$.byteLength);e.createView=o;const a=($,R)=>$<<32-R|$>>>R;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},($,R)=>R.toString(16).padStart(2,"0"));function u($){if(!($ instanceof Uint8Array))throw new Error("Uint8Array expected");let R="";for(let L=0;L<$.length;L++)R+=l[$[L]];return R}e.bytesToHex=u;function d($){if(typeof $!="string")throw new TypeError("hexToBytes: expected string, got "+typeof $);if($.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const R=new Uint8Array($.length/2);for(let L=0;L<R.length;L++){const B=L*2,D=$.slice(B,B+2),ie=Number.parseInt(D,16);if(Number.isNaN(ie)||ie<0)throw new Error("Invalid byte sequence");R[L]=ie}return R}e.hexToBytes=d;const f=async()=>{};e.nextTick=f;async function p($,R,L){let B=Date.now();for(let D=0;D<$;D++){L(D);const ie=Date.now()-B;ie>=0&&ie<R||(await(0,e.nextTick)(),B+=ie)}}e.asyncLoop=p;function g($){if(typeof $!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof $}`);return new TextEncoder().encode($)}e.utf8ToBytes=g;function m($){if(typeof $=="string"&&($=g($)),!($ instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof $})`);return $}e.toBytes=m;function _(...$){if(!$.every(B=>B instanceof Uint8Array))throw new Error("Uint8Array list expected");if($.length===1)return $[0];const R=$.reduce((B,D)=>B+D.length,0),L=new Uint8Array(R);for(let B=0,D=0;B<$.length;B++){const ie=$[B];L.set(ie,D),D+=ie.length}return L}e.concatBytes=_;class w{clone(){return this._cloneInto()}}e.Hash=w;const E=$=>Object.prototype.toString.call($)==="[object Object]"&&$.constructor===Object;function x($,R){if(R!==void 0&&(typeof R!="object"||!E(R)))throw new TypeError("Options should be object or undefined");return Object.assign($,R)}e.checkOpts=x;function C($){const R=B=>$().update(m(B)).digest(),L=$();return R.outputLen=L.outputLen,R.blockLen=L.blockLen,R.create=()=>$(),R}e.wrapConstructor=C;function I($){const R=(B,D)=>$(D).update(m(B)).digest(),L=$({});return R.outputLen=L.outputLen,R.blockLen=L.blockLen,R.create=B=>$(B),R}e.wrapConstructorWithOpts=I;function k($=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array($));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=k})(ho);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Et,n=ho;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const f=this.blockLen,p=new Uint8Array(f);p.set(d.length>f?l.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=l.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:f,destroyed:p,blockLen:g,outputLen:m}=this;return l=l,l.finished=f,l.destroyed=p,l.blockLen=g,l.outputLen=m,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(R1);Object.defineProperty(Xi,"__esModule",{value:!0});Xi.pbkdf2Async=Xi.pbkdf2=void 0;const da=Et,D7=R1,Zi=ho;function O1(e,t,n,i){da.default.hash(e);const o=(0,Zi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(da.default.number(a),da.default.number(l),da.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Zi.toBytes)(t),f=(0,Zi.toBytes)(n),p=new Uint8Array(l),g=D7.hmac.create(e,d),m=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:m}}function L1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function U7(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=O1(e,t,n,i);let f;const p=new Uint8Array(4),g=(0,Zi.createView)(p),m=new Uint8Array(u.outputLen);for(let _=1,w=0;w<a;_++,w+=u.outputLen){const E=l.subarray(w,w+u.outputLen);g.setInt32(0,_,!1),(f=d._cloneInto(f)).update(p).digestInto(m),E.set(m.subarray(0,E.length));for(let x=1;x<o;x++){u._cloneInto(f).update(m).digestInto(m);for(let C=0;C<E.length;C++)E[C]^=m[C]}}return L1(u,d,l,f,m)}Xi.pbkdf2=U7;async function z7(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:f}=O1(e,t,n,i);let p;const g=new Uint8Array(4),m=(0,Zi.createView)(g),_=new Uint8Array(d.outputLen);for(let w=1,E=0;E<a;w++,E+=d.outputLen){const x=u.subarray(E,E+d.outputLen);m.setInt32(0,w,!1),(p=f._cloneInto(p)).update(g).digestInto(_),x.set(_.subarray(0,x.length)),await(0,Zi.asyncLoop)(o-1,l,C=>{d._cloneInto(p).update(_).digestInto(_);for(let I=0;I<x.length;I++)x[I]^=_[I]})}return L1(d,f,u,p,_)}Xi.pbkdf2Async=z7;const H7=lo(N6);var xn={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.SHA2=void 0;const iu=Et,Us=ho;function F7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}class q7 extends Us.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Us.createView)(this.buffer)}update(t){iu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Us.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,Us.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){iu.default.exists(this),iu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;F7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Us.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}bl.SHA2=q7;var P1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(q,J=!1){return J?{h:Number(q&t),l:Number(q>>n&t)}:{h:Number(q>>n&t)|0,l:Number(q&t)|0}}e.fromBig=i;function o(q,J=!1){let G=new Uint32Array(q.length),le=new Uint32Array(q.length);for(let te=0;te<q.length;te++){const{h:U,l:ee}=i(q[te],J);[G[te],le[te]]=[U,ee]}return[G,le]}e.split=o;const a=(q,J)=>BigInt(q>>>0)<<n|BigInt(J>>>0);e.toBig=a;const l=(q,J,G)=>q>>>G,u=(q,J,G)=>q<<32-G|J>>>G,d=(q,J,G)=>q>>>G|J<<32-G,f=(q,J,G)=>q<<32-G|J>>>G,p=(q,J,G)=>q<<64-G|J>>>G-32,g=(q,J,G)=>q>>>G-32|J<<64-G,m=(q,J)=>J,_=(q,J)=>q,w=(q,J,G)=>q<<G|J>>>32-G,E=(q,J,G)=>J<<G|q>>>32-G,x=(q,J,G)=>J<<G-32|q>>>64-G,C=(q,J,G)=>q<<G-32|J>>>64-G;function I(q,J,G,le){const te=(J>>>0)+(le>>>0);return{h:q+G+(te/2**32|0)|0,l:te|0}}e.add=I;const k=(q,J,G)=>(q>>>0)+(J>>>0)+(G>>>0),$=(q,J,G,le)=>J+G+le+(q/2**32|0)|0,R=(q,J,G,le)=>(q>>>0)+(J>>>0)+(G>>>0)+(le>>>0),L=(q,J,G,le,te)=>J+G+le+te+(q/2**32|0)|0,B=(q,J,G,le,te)=>(q>>>0)+(J>>>0)+(G>>>0)+(le>>>0)+(te>>>0),D=(q,J,G,le,te,U)=>J+G+le+te+U+(q/2**32|0)|0,ie={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:f,rotrBH:p,rotrBL:g,rotr32H:m,rotr32L:_,rotlSH:w,rotlSL:E,rotlBH:x,rotlBL:C,add:I,add3L:k,add3H:$,add4L:R,add4H:L,add5H:D,add5L:B};e.default=ie})(P1);Object.defineProperty(xn,"__esModule",{value:!0});xn.sha384=xn.sha512_256=xn.sha512_224=Cu=xn.sha512=xn.SHA512=void 0;const W7=bl,Le=P1,yl=ho,[Z7,V7]=Le.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Pr=new Uint32Array(80),Mr=new Uint32Array(80);class po extends W7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:p,Fh:g,Fl:m,Gh:_,Gl:w,Hh:E,Hl:x}=this;return[t,n,i,o,a,l,u,d,f,p,g,m,_,w,E,x]}set(t,n,i,o,a,l,u,d,f,p,g,m,_,w,E,x){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=p|0,this.Fh=g|0,this.Fl=m|0,this.Gh=_|0,this.Gl=w|0,this.Hh=E|0,this.Hl=x|0}process(t,n){for(let k=0;k<16;k++,n+=4)Pr[k]=t.getUint32(n),Mr[k]=t.getUint32(n+=4);for(let k=16;k<80;k++){const $=Pr[k-15]|0,R=Mr[k-15]|0,L=Le.default.rotrSH($,R,1)^Le.default.rotrSH($,R,8)^Le.default.shrSH($,R,7),B=Le.default.rotrSL($,R,1)^Le.default.rotrSL($,R,8)^Le.default.shrSL($,R,7),D=Pr[k-2]|0,ie=Mr[k-2]|0,q=Le.default.rotrSH(D,ie,19)^Le.default.rotrBH(D,ie,61)^Le.default.shrSH(D,ie,6),J=Le.default.rotrSL(D,ie,19)^Le.default.rotrBL(D,ie,61)^Le.default.shrSL(D,ie,6),G=Le.default.add4L(B,J,Mr[k-7],Mr[k-16]),le=Le.default.add4H(G,L,q,Pr[k-7],Pr[k-16]);Pr[k]=le|0,Mr[k]=G|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:p,Eh:g,El:m,Fh:_,Fl:w,Gh:E,Gl:x,Hh:C,Hl:I}=this;for(let k=0;k<80;k++){const $=Le.default.rotrSH(g,m,14)^Le.default.rotrSH(g,m,18)^Le.default.rotrBH(g,m,41),R=Le.default.rotrSL(g,m,14)^Le.default.rotrSL(g,m,18)^Le.default.rotrBL(g,m,41),L=g&_^~g&E,B=m&w^~m&x,D=Le.default.add5L(I,R,B,V7[k],Mr[k]),ie=Le.default.add5H(D,C,$,L,Z7[k],Pr[k]),q=D|0,J=Le.default.rotrSH(i,o,28)^Le.default.rotrBH(i,o,34)^Le.default.rotrBH(i,o,39),G=Le.default.rotrSL(i,o,28)^Le.default.rotrBL(i,o,34)^Le.default.rotrBL(i,o,39),le=i&a^i&u^a&u,te=o&l^o&d^l&d;C=E|0,I=x|0,E=_|0,x=w|0,_=g|0,w=m|0,{h:g,l:m}=Le.default.add(f|0,p|0,ie|0,q|0),f=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const U=Le.default.add3L(q,G,te);i=Le.default.add3H(U,ie,J,le),o=U|0}({h:i,l:o}=Le.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Le.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Le.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:p}=Le.default.add(this.Dh|0,this.Dl|0,f|0,p|0),{h:g,l:m}=Le.default.add(this.Eh|0,this.El|0,g|0,m|0),{h:_,l:w}=Le.default.add(this.Fh|0,this.Fl|0,_|0,w|0),{h:E,l:x}=Le.default.add(this.Gh|0,this.Gl|0,E|0,x|0),{h:C,l:I}=Le.default.add(this.Hh|0,this.Hl|0,C|0,I|0),this.set(i,o,a,l,u,d,f,p,g,m,_,w,E,x,C,I)}roundClean(){Pr.fill(0),Mr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}xn.SHA512=po;class K7 extends po{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class G7 extends po{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class Q7 extends po{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Cu=xn.sha512=(0,yl.wrapConstructor)(()=>new po);xn.sha512_224=(0,yl.wrapConstructor)(()=>new K7);xn.sha512_256=(0,yl.wrapConstructor)(()=>new G7);xn.sha384=(0,yl.wrapConstructor)(()=>new Q7);const Y7=lo(R6),J7=lo(B7);Object.defineProperty(un,"__esModule",{value:!0});var M1=un.mnemonicToSeedSync=un.mnemonicToSeed=W1=un.validateMnemonic=un.entropyToMnemonic=un.mnemonicToEntropy=z1=un.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const B1=Et,j1=Xi,X7=H7,N1=xn,e9=Y7,fa=J7,t9=e=>e[0]==="あいこくしん";function D1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function hd(e){const t=D1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function U1(e){B1.default.bytes(e,16,20,24,28,32)}function n9(e,t=128){if(B1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return q1((0,e9.randomBytes)(t/8),e)}var z1=un.generateMnemonic=n9;const r9=e=>{const t=8-e.length/4;return new Uint8Array([(0,X7.sha256)(e)[0]>>t<<t])};function H1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),fa.utils.chain(fa.utils.checksum(1,r9),fa.utils.radix2(11,!0),fa.utils.alphabet(e))}function F1(e,t){const{words:n}=hd(e),i=H1(t).decode(n);return U1(i),i}un.mnemonicToEntropy=F1;function q1(e,t){return U1(e),H1(t).encode(e).join(t9(t)?"　":" ")}un.entropyToMnemonic=q1;function i9(e,t){try{F1(e,t)}catch{return!1}return!0}var W1=un.validateMnemonic=i9;const Z1=e=>D1(`mnemonic${e}`);function s9(e,t=""){return(0,j1.pbkdf2Async)(N1.sha512,hd(e).nfkd,Z1(t),{c:2048,dkLen:64})}un.mnemonicToSeed=s9;function o9(e,t=""){return(0,j1.pbkdf2)(N1.sha512,hd(e).nfkd,Z1(t),{c:2048,dkLen:64})}M1=un.mnemonicToSeedSync=o9;const a9=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),V1=Uint8Array.from({length:16},(e,t)=>t),l9=V1.map(e=>(9*e+5)%16);let pd=[V1],gd=[l9];for(let e=0;e<4;e++)for(let t of[pd,gd])t.push(t[e].map(n=>a9[n]));const K1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),c9=pd.map((e,t)=>e.map(n=>K1[t][n])),u9=gd.map((e,t)=>e.map(n=>K1[t][n])),d9=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),f9=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ha=(e,t)=>e<<t|e>>>32-t;function i0(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const pa=new Uint32Array(16);class h9 extends Yg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let _=0;_<16;_++,n+=4)pa[_]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,p=f,g=this.h4|0,m=g;for(let _=0;_<5;_++){const w=4-_,E=d9[_],x=f9[_],C=pd[_],I=gd[_],k=c9[_],$=u9[_];for(let R=0;R<16;R++){const L=ha(i+i0(_,a,u,f)+pa[C[R]]+E,k[R])+g|0;i=g,g=f,f=ha(u,10)|0,u=a,a=L}for(let R=0;R<16;R++){const L=ha(o+i0(w,l,d,p)+pa[I[R]]+x,$[R])+m|0;o=m,m=p,p=ha(d,10)|0,d=l,l=L}}this.set(this.h1+u+p|0,this.h2+f+m|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){pa.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const p9=dl(()=>new h9),ga=Ut.ProjectivePoint,su=_1(Vn);function s0(e){return BigInt(`0x${ln(e)}`)}function g9(e){return Hr(e.toString(16).padStart(64,"0"))}const v9=ed("Bitcoin seed"),ou={private:76066276,public:76067358},au=2147483648,m9=e=>p9(Vn(e)),b9=e=>yi(e).getUint32(0,!1),va=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return yi(t).setUint32(0,e,!1),t};class di{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return b9(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return su.encode(this.serialize(this.versions.private,hi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return su.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=ou){if(qi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=La(Cu,v9,t);return new di({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=ou){const i=su.decode(t),o=yi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new di({...l,privateKey:u.slice(1)}):new di({...l,publicKey:u})}static fromJSON(t){return di.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||ou,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ut.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:s0(t.privateKey),this.privKeyBytes=g9(this.privKey),this.pubKey=Ut.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ga.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=m9(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=au)throw new Error("Invalid index");a[2]==="'"&&(l+=au),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=va(t);if(t>=au){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=hi(new Uint8Array([0]),u,n)}else n=hi(this.pubKey,n);const i=La(Cu,this.chainCode,n),o=s0(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=wt(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=ga.fromHex(this.pubKey).add(ga.fromPrivateKey(o));if(u.equals(ga.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new di(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return qi(t,32),Ut.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(qi(t,32),qi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return qi(n,33),hi(va(t),new Uint8Array([this.depth]),va(this.parentFingerprint),va(this.index),this.chainCode,n)}}var y9=Object.defineProperty,Bt=(e,t)=>{for(var n in t)y9(e,n,{get:t[n],enumerable:!0})};function G1(e){return ln(uo.getPublicKey(e))}var vd={};Bt(vd,{MessageNode:()=>Q1,MessageQueue:()=>Y1,insertEventIntoAscendingList:()=>w9,insertEventIntoDescendingList:()=>_9,normalizeURL:()=>Su,utf8Decoder:()=>jr,utf8Encoder:()=>Kn});var jr=new TextDecoder("utf-8"),Kn=new TextEncoder;function Su(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function _9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function w9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var Q1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},Y1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new Q1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},vt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.ProfileBadge=30008]="ProfileBadge",e[e.BadgeDefinition=30009]="BadgeDefinition",e[e.Article=30023]="Article",e))(vt||{});function J1(e,t){let n=e;return n.pubkey=G1(t),n.id=_l(n),n.sig=E9(n,t),n}function x9(e){if(!md(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function _l(e){let t=Vn(Kn.encode(x9(e)));return ln(t)}var $9=e=>e instanceof Object;function md(e){if(!$9(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function bd(e){try{return uo.verify(e.sig,_l(e),e.pubkey)}catch{return!1}}function E9(e,t){return ln(uo.sign(_l(e),t))}function k9(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function C9(e,t){for(let n=0;n<e.length;n++)if(k9(e[n],t))return!0;return!1}var S9={};Bt(S9,{getHex64:()=>wl,getInt:()=>X1,getSubscriptionId:()=>ev,matchEventId:()=>T9,matchEventKind:()=>I9,matchEventPubkey:()=>A9});function wl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function X1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function ev(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function T9(e,t){return t===wl(e,"id")}function A9(e,t){return t===wl(e,"pubkey")}function I9(e,t){return t===X1(e,"kind")}var o0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function R9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=o0(),d={},f={},p;async function g(){return p||(p=new Promise((C,I)=>{try{a=new WebSocket(e)}catch(L){I(L)}a.onopen=()=>{u.connect.forEach(L=>L()),C()},a.onerror=()=>{p=void 0,u.error.forEach(L=>L()),I()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(L=>L())};let k=new Y1,$;a.onmessage=L=>{k.enqueue(L.data),$||($=setInterval(R,0))};function R(){if(k.size===0){clearInterval($),$=null;return}var L=k.dequeue();if(!L)return;let B=ev(L);if(B){let D=l[B];if(D&&D.alreadyHaveEvent&&D.alreadyHaveEvent(wl(L,"id"),e))return}try{let D=JSON.parse(L);switch(D[0]){case"EVENT":{let G=D[1],le=D[2];md(le)&&l[G]&&(l[G].skipVerification||bd(le))&&C9(l[G].filters,le)&&(l[G],(d[G]?.event||[]).forEach(te=>te(le)));return}case"COUNT":let ie=D[1],q=D[2];l[ie]&&(d[ie]?.count||[]).forEach(G=>G(q));return;case"EOSE":{let G=D[1];G in d&&(d[G].eose.forEach(le=>le()),d[G].eose=[]);return}case"OK":{let G=D[1],le=D[2],te=D[3]||"";G in f&&(le?f[G].ok.forEach(U=>U()):f[G].failed.forEach(U=>U(te)),f[G].ok=[],f[G].failed=[]);return}case"NOTICE":let J=D[1];u.notice.forEach(G=>G(J));return;case"AUTH":{let G=D[1];u.auth?.forEach(le=>le(G));return}}}catch{return}}}),p)}function m(){return a?.readyState===1}async function _(){m()||await g()}async function w(C){let I=JSON.stringify(C);if(!(!m()&&(await new Promise(k=>setTimeout(k,1e3)),!m())))try{a.send(I)}catch(k){console.log(k)}}const E=(C,{verb:I="REQ",skipVerification:k=!1,alreadyHaveEvent:$=null,id:R=Math.random().toString().slice(2)}={})=>{let L=R;return l[L]={id:L,filters:C,skipVerification:k,alreadyHaveEvent:$},w([I,L,...C]),{sub:(B,D={})=>E(B||C,{skipVerification:D.skipVerification||k,alreadyHaveEvent:D.alreadyHaveEvent||$,id:L}),unsub:()=>{delete l[L],delete d[L],w(["CLOSE",L])},on:(B,D)=>{d[L]=d[L]||{event:[],count:[],eose:[]},d[L][B].push(D)},off:(B,D)=>{let ie=d[L],q=ie[B].indexOf(D);q>=0&&ie[B].splice(q,1)}}};function x(C,I){if(!C.id)throw new Error(`event ${C} has no id`);let k=C.id;return w([I,C]),{on:($,R)=>{f[k]=f[k]||{ok:[],failed:[]},f[k][$].push(R)},off:($,R)=>{let L=f[k];if(!L)return;let B=L[$].indexOf(R);B>=0&&L[$].splice(B,1)}}}return{url:e,sub:E,on:(C,I)=>{u[C].push(I),C==="connect"&&a?.readyState===1&&I()},off:(C,I)=>{let k=u[C].indexOf(I);k!==-1&&u[C].splice(k,1)},list:(C,I)=>new Promise(k=>{let $=E(C,I),R=[],L=setTimeout(()=>{$.unsub(),k(R)},n);$.on("eose",()=>{$.unsub(),clearTimeout(L),k(R)}),$.on("event",B=>{R.push(B)})}),get:(C,I)=>new Promise(k=>{let $=E([C],I),R=setTimeout(()=>{$.unsub(),k(null)},i);$.on("event",L=>{$.unsub(),clearTimeout(R),k(L)})}),count:C=>new Promise(I=>{let k=E(C,{...E,verb:"COUNT"}),$=setTimeout(()=>{k.unsub(),I(null)},o);k.on("count",R=>{k.unsub(),clearTimeout($),I(R)})}),publish(C){return x(C,"EVENT")},auth(C){return x(C,"AUTH")},connect:_,close(){u=o0(),d={},f={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var O9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Su(t)];n&&n.close()})}async ensureRelay(e){const t=Su(e);this._conn[t]||(this._conn[t]=R9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(m,_)=>{if(n?.alreadyHaveEvent?.(m,_))return!0;let w=this._seenOn[m]||new Set;return w.add(_),this._seenOn[m]=w,i.has(m)};let a=[],l=new Set,u=new Set,d=e.length,f=!1,p=setTimeout(()=>{f=!0;for(let m of u.values())m()},this.eoseSubTimeout);e.forEach(async m=>{let _;try{_=await this.ensureRelay(m)}catch{E();return}if(!_)return;let w=_.sub(t,o);w.on("event",x=>{i.add(x.id);for(let C of l.values())C(x)}),w.on("eose",()=>{f||E()}),a.push(w);function E(){if(d--,d===0){clearTimeout(p);for(let x of u.values())x()}}});let g={sub(m,_){return a.forEach(w=>w.sub(m,_)),g},unsub(){a.forEach(m=>m.unsub())},on(m,_){m==="event"?l.add(_):m==="eose"&&u.add(_)},off(m,_){m==="event"?l.delete(_):m==="eose"&&u.delete(_)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],f=()=>a(l);i.set(a,f),d.on(o,f)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},go={};Bt(go,{BECH32_REGEX:()=>tv,decode:()=>xl,naddrEncode:()=>N9,neventEncode:()=>j9,noteEncode:()=>M9,nprofileEncode:()=>B9,npubEncode:()=>P9,nrelayEncode:()=>D9,nsecEncode:()=>L9});var hs=5e3,tv=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function xl(e){let{prefix:t,words:n}=Ft.decode(e,hs),i=new Uint8Array(Ft.fromWords(n));switch(t){case"nprofile":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ln(o[0][0]),relays:o[1]?o[1].map(a=>jr.decode(a)):[]}}}case"nevent":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:ln(o[0][0]),relays:o[1]?o[1].map(a=>jr.decode(a)):[],author:o[2]?.[0]?ln(o[2][0]):void 0}}}case"naddr":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:jr.decode(o[0][0]),pubkey:ln(o[2][0]),kind:parseInt(ln(o[3][0]),16),relays:o[1]?o[1].map(a=>jr.decode(a)):[]}}}case"nrelay":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:jr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:ln(i)};default:throw new Error(`unknown prefix ${t}`)}}function ma(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function L9(e){return yd("nsec",e)}function P9(e){return yd("npub",e)}function M9(e){return yd("note",e)}function yd(e,t){let n=Hr(t),i=Ft.toWords(n);return Ft.encode(e,i,hs)}function B9(e){let t=$l({0:[Hr(e.pubkey)],1:(e.relays||[]).map(i=>Kn.encode(i))}),n=Ft.toWords(t);return Ft.encode("nprofile",n,hs)}function j9(e){let t=$l({0:[Hr(e.id)],1:(e.relays||[]).map(i=>Kn.encode(i)),2:e.author?[Hr(e.author)]:[]}),n=Ft.toWords(t);return Ft.encode("nevent",n,hs)}function N9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=$l({0:[Kn.encode(e.identifier)],1:(e.relays||[]).map(o=>Kn.encode(o)),2:[Hr(e.pubkey)],3:[new Uint8Array(t)]}),i=Ft.toWords(n);return Ft.encode("naddr",i,hs)}function D9(e){let t=$l({0:[Kn.encode(e)]}),n=Ft.toWords(t);return Ft.encode("nrelay",n,hs)}function $l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),hi(...t)}var U9={};Bt(U9,{decrypt:()=>H9,encrypt:()=>z9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function z9(e,t,n){const i=Ut.getSharedSecret(e,"02"+t),o=nv(i);let a=Uint8Array.from(fl(16)),l=Kn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=Ji.encode(new Uint8Array(d)),p=Ji.encode(new Uint8Array(a.buffer));return`${f}?iv=${p}`}async function H9(e,t,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(e,"02"+t),l=nv(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=Ji.decode(i),f=Ji.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return jr.decode(p)}function nv(e){return e.slice(1,33)}var rv={};Bt(rv,{NIP05_REGEX:()=>iv,queryProfile:()=>W9,searchDomain:()=>q9,useFetchImplementation:()=>F9});var iv=/^(?:([\w.+-]+)@)?([\w.-]+)$/,El;try{El=fetch}catch{}function F9(e){El=e}async function q9(e,t=""){try{return(await(await El(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function W9(e){const t=e.match(iv);if(!t)return null;const[n,i="_",o]=t;try{const a=await El(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=Z9(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function Z9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var V9={};Bt(V9,{generateSeedWords:()=>G9,privateKeyFromSeedWords:()=>K9,validateWords:()=>Q9});function K9(e,t){let i=di.fromMasterSeed(M1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return ln(i)}function G9(){return z1(dd)}function Q9(e){return W1(e,dd)}var Y9={};Bt(Y9,{parse:()=>J9});function J9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=f;continue}if(d==="reply"){t.reply=f;continue}if(d==="mention"){t.mentions.push(f);continue}if(p){t.root=f;continue}if(g){t.reply=f;continue}t.mentions.push(f)}return t}var X9={};Bt(X9,{getPow:()=>eE});function eE(e){return tE(Hr(e))}function tE(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=nE(e[n]),t+=i,i===8);n++);return t}function nE(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var rE={};Bt(rE,{finishRepostEvent:()=>iE,getRepostedEvent:()=>sE,getRepostedEventPointer:()=>sv});function iE(e,t,n,i){return J1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function sv(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function sE(e,{skipVerification:t}={}){const n=sv(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!bd(i)))return i}var oE={};Bt(oE,{NOSTR_URI_REGEX:()=>kl,parse:()=>lE,test:()=>aE});var kl=new RegExp(`nostr:(${tv.source})`);function aE(e){return typeof e=="string"&&new RegExp(`^${kl.source}$`).test(e)}function lE(e){const t=e.match(new RegExp(`^${kl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:xl(t[1])}}var cE={};Bt(cE,{finishReactionEvent:()=>uE,getReactedEventPointer:()=>dE});function uE(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return J1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function dE(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var fE={};Bt(fE,{createDelegation:()=>hE,getDelegator:()=>pE});function hE(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Vn(Kn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=ln(uo.sign(o,e));return{from:G1(e),to:t.pubkey,cond:i,sig:a}}function pE(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,p]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&e.kind===parseInt(p))){if(d==="created_at"&&f==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&f===">"&&e.created_at>parseInt(p))continue;return null}}let l=Vn(Kn.encode(`nostr:delegation:${e.pubkey}:${i}`));return uo.verify(o,l,n)?n:null}var gE={};Bt(gE,{matchAll:()=>vE,regex:()=>_d,replaceAll:()=>mE});var _d=()=>new RegExp(`\\b${kl.source}\\b`,"g");function*vE(e){const t=e.matchAll(_d());for(const n of t)try{const[i,o]=n;yield{uri:i,value:o,decoded:xl(o),start:n.index,end:n.index+i.length}}catch{}}function mE(e,t){return e.replaceAll(_d(),(n,i)=>t({uri:n,value:i,decoded:xl(i)}))}var bE={};Bt(bE,{useFetchImplementation:()=>yE,validateGithub:()=>_E});var wd;try{wd=fetch}catch{}function yE(e){wd=e}async function _E(e,t,n){try{return await(await wd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var wE={};Bt(wE,{authenticate:()=>xE});var xE=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},$E={};Bt($E,{getZapEndpoint:()=>kE,makeZapReceipt:()=>TE,makeZapRequest:()=>CE,useFetchImplementation:()=>EE,validateZapRequest:()=>SE});var xd;try{xd=fetch}catch{}function EE(e){xd=e}async function kE(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=Ft.decode(n,1e3),u=Ft.fromWords(l);t=jr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await xd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function CE({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function SE(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!md(t))return"Zap request is not a valid Nostr event.";if(!bd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function TE({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const AE=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),ov=(e={})=>(()=>{const t=AE();return nt(t,e,!0,!0),t})(),IE=j('<button class="text-blue-500 underline">'),{noteEncode:RE,neventEncode:OE}=go,LE=e=>{try{return RE(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},PE=e=>{try{return OE({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Ks=e=>(()=>{const t=IE();return S(t,A(pe,{get when(){return e.kind==null||e.kind===vt.Text},get fallback(){return PE(e.eventId)},get children(){return LE(e.eventId)}})),t})();var Da={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Da.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,m=2,_=4,w=1,E=2,x=1,C=2,I=4,k=8,$=16,R=32,L=64,B=128,D=256,ie=512,q=30,J="...",G=800,le=16,te=1,U=2,ee=3,ce=1/0,ge=9007199254740991,Ee=17976931348623157e292,ze=0/0,De=4294967295,ue=De-1,Y=De>>>1,de=[["ary",B],["bind",x],["bindKey",C],["curry",k],["curryRight",$],["flip",ie],["partial",R],["partialRight",L],["rearg",D]],fe="[object Arguments]",W="[object Array]",re="[object AsyncFunction]",Q="[object Boolean]",ye="[object Date]",Ke="[object DOMException]",K="[object Error]",We="[object Function]",ht="[object GeneratorFunction]",$e="[object Map]",rt="[object Number]",Xt="[object Null]",Ct="[object Object]",Wt="[object Promise]",Yr="[object Proxy]",En="[object RegExp]",St="[object Set]",en="[object String]",zn="[object Symbol]",xr="[object Undefined]",kn="[object WeakMap]",ke="[object WeakSet]",Zt="[object ArrayBuffer]",Vt="[object DataView]",Cn="[object Float32Array]",Sn="[object Float64Array]",dn="[object Int8Array]",fn="[object Int16Array]",Tn="[object Int32Array]",tr="[object Uint8Array]",nr="[object Uint8ClampedArray]",rr="[object Uint16Array]",Si="[object Uint32Array]",xo=/\b__p \+= '';/g,e2=/\b(__p \+=) '' \+/g,t2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,rf=/&(?:amp|lt|gt|quot|#39);/g,sf=/[&<>"']/g,n2=RegExp(rf.source),r2=RegExp(sf.source),i2=/<%-([\s\S]+?)%>/g,s2=/<%([\s\S]+?)%>/g,of=/<%=([\s\S]+?)%>/g,o2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a2=/^\w*$/,l2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zl=/[\\^$.*+?()[\]{}|]/g,c2=RegExp(zl.source),Hl=/^\s+/,u2=/\s/,d2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,f2=/\{\n\/\* \[wrapped with (.+)\] \*/,h2=/,? & /,p2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,g2=/[()=,{}\[\]\/\s]/,v2=/\\(\\)?/g,m2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,af=/\w*$/,b2=/^[-+]0x[0-9a-f]+$/i,y2=/^0b[01]+$/i,_2=/^\[object .+?Constructor\]$/,w2=/^0o[0-7]+$/i,x2=/^(?:0|[1-9]\d*)$/,$2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$o=/($^)/,E2=/['\n\r\u2028\u2029\\]/g,Eo="\\ud800-\\udfff",k2="\\u0300-\\u036f",C2="\\ufe20-\\ufe2f",S2="\\u20d0-\\u20ff",lf=k2+C2+S2,cf="\\u2700-\\u27bf",uf="a-z\\xdf-\\xf6\\xf8-\\xff",T2="\\xac\\xb1\\xd7\\xf7",A2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",I2="\\u2000-\\u206f",R2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",df="A-Z\\xc0-\\xd6\\xd8-\\xde",ff="\\ufe0e\\ufe0f",hf=T2+A2+I2+R2,Fl="['’]",O2="["+Eo+"]",pf="["+hf+"]",ko="["+lf+"]",gf="\\d+",L2="["+cf+"]",vf="["+uf+"]",mf="[^"+Eo+hf+gf+cf+uf+df+"]",ql="\\ud83c[\\udffb-\\udfff]",P2="(?:"+ko+"|"+ql+")",bf="[^"+Eo+"]",Wl="(?:\\ud83c[\\udde6-\\uddff]){2}",Zl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="["+df+"]",yf="\\u200d",_f="(?:"+vf+"|"+mf+")",M2="(?:"+Ti+"|"+mf+")",wf="(?:"+Fl+"(?:d|ll|m|re|s|t|ve))?",xf="(?:"+Fl+"(?:D|LL|M|RE|S|T|VE))?",$f=P2+"?",Ef="["+ff+"]?",B2="(?:"+yf+"(?:"+[bf,Wl,Zl].join("|")+")"+Ef+$f+")*",j2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",N2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kf=Ef+$f+B2,D2="(?:"+[L2,Wl,Zl].join("|")+")"+kf,U2="(?:"+[bf+ko+"?",ko,Wl,Zl,O2].join("|")+")",z2=RegExp(Fl,"g"),H2=RegExp(ko,"g"),Vl=RegExp(ql+"(?="+ql+")|"+U2+kf,"g"),F2=RegExp([Ti+"?"+vf+"+"+wf+"(?="+[pf,Ti,"$"].join("|")+")",M2+"+"+xf+"(?="+[pf,Ti+_f,"$"].join("|")+")",Ti+"?"+_f+"+"+wf,Ti+"+"+xf,N2,j2,gf,D2].join("|"),"g"),q2=RegExp("["+yf+Eo+lf+ff+"]"),W2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Z2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],V2=-1,it={};it[Cn]=it[Sn]=it[dn]=it[fn]=it[Tn]=it[tr]=it[nr]=it[rr]=it[Si]=!0,it[fe]=it[W]=it[Zt]=it[Q]=it[Vt]=it[ye]=it[K]=it[We]=it[$e]=it[rt]=it[Ct]=it[En]=it[St]=it[en]=it[kn]=!1;var et={};et[fe]=et[W]=et[Zt]=et[Vt]=et[Q]=et[ye]=et[Cn]=et[Sn]=et[dn]=et[fn]=et[Tn]=et[$e]=et[rt]=et[Ct]=et[En]=et[St]=et[en]=et[zn]=et[tr]=et[nr]=et[rr]=et[Si]=!0,et[K]=et[We]=et[kn]=!1;var K2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},G2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Q2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Y2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},J2=parseFloat,X2=parseInt,Cf=typeof xt=="object"&&xt&&xt.Object===Object&&xt,eb=typeof self=="object"&&self&&self.Object===Object&&self,Tt=Cf||eb||Function("return this")(),Kl=t&&!t.nodeType&&t,Jr=Kl&&!0&&e&&!e.nodeType&&e,Sf=Jr&&Jr.exports===Kl,Gl=Sf&&Cf.process,hn=function(){try{var P=Jr&&Jr.require&&Jr.require("util").types;return P||Gl&&Gl.binding&&Gl.binding("util")}catch{}}(),Tf=hn&&hn.isArrayBuffer,Af=hn&&hn.isDate,If=hn&&hn.isMap,Rf=hn&&hn.isRegExp,Of=hn&&hn.isSet,Lf=hn&&hn.isTypedArray;function tn(P,z,N){switch(N.length){case 0:return P.call(z);case 1:return P.call(z,N[0]);case 2:return P.call(z,N[0],N[1]);case 3:return P.call(z,N[0],N[1],N[2])}return P.apply(z,N)}function tb(P,z,N,oe){for(var Ce=-1,Ve=P==null?0:P.length;++Ce<Ve;){var yt=P[Ce];z(oe,yt,N(yt),P)}return oe}function pn(P,z){for(var N=-1,oe=P==null?0:P.length;++N<oe&&z(P[N],N,P)!==!1;);return P}function nb(P,z){for(var N=P==null?0:P.length;N--&&z(P[N],N,P)!==!1;);return P}function Pf(P,z){for(var N=-1,oe=P==null?0:P.length;++N<oe;)if(!z(P[N],N,P))return!1;return!0}function $r(P,z){for(var N=-1,oe=P==null?0:P.length,Ce=0,Ve=[];++N<oe;){var yt=P[N];z(yt,N,P)&&(Ve[Ce++]=yt)}return Ve}function Co(P,z){var N=P==null?0:P.length;return!!N&&Ai(P,z,0)>-1}function Ql(P,z,N){for(var oe=-1,Ce=P==null?0:P.length;++oe<Ce;)if(N(z,P[oe]))return!0;return!1}function ot(P,z){for(var N=-1,oe=P==null?0:P.length,Ce=Array(oe);++N<oe;)Ce[N]=z(P[N],N,P);return Ce}function Er(P,z){for(var N=-1,oe=z.length,Ce=P.length;++N<oe;)P[Ce+N]=z[N];return P}function Yl(P,z,N,oe){var Ce=-1,Ve=P==null?0:P.length;for(oe&&Ve&&(N=P[++Ce]);++Ce<Ve;)N=z(N,P[Ce],Ce,P);return N}function rb(P,z,N,oe){var Ce=P==null?0:P.length;for(oe&&Ce&&(N=P[--Ce]);Ce--;)N=z(N,P[Ce],Ce,P);return N}function Jl(P,z){for(var N=-1,oe=P==null?0:P.length;++N<oe;)if(z(P[N],N,P))return!0;return!1}var ib=Xl("length");function sb(P){return P.split("")}function ob(P){return P.match(p2)||[]}function Mf(P,z,N){var oe;return N(P,function(Ce,Ve,yt){if(z(Ce,Ve,yt))return oe=Ve,!1}),oe}function So(P,z,N,oe){for(var Ce=P.length,Ve=N+(oe?1:-1);oe?Ve--:++Ve<Ce;)if(z(P[Ve],Ve,P))return Ve;return-1}function Ai(P,z,N){return z===z?bb(P,z,N):So(P,Bf,N)}function ab(P,z,N,oe){for(var Ce=N-1,Ve=P.length;++Ce<Ve;)if(oe(P[Ce],z))return Ce;return-1}function Bf(P){return P!==P}function jf(P,z){var N=P==null?0:P.length;return N?tc(P,z)/N:ze}function Xl(P){return function(z){return z==null?n:z[P]}}function ec(P){return function(z){return P==null?n:P[z]}}function Nf(P,z,N,oe,Ce){return Ce(P,function(Ve,yt,Je){N=oe?(oe=!1,Ve):z(N,Ve,yt,Je)}),N}function lb(P,z){var N=P.length;for(P.sort(z);N--;)P[N]=P[N].value;return P}function tc(P,z){for(var N,oe=-1,Ce=P.length;++oe<Ce;){var Ve=z(P[oe]);Ve!==n&&(N=N===n?Ve:N+Ve)}return N}function nc(P,z){for(var N=-1,oe=Array(P);++N<P;)oe[N]=z(N);return oe}function cb(P,z){return ot(z,function(N){return[N,P[N]]})}function Df(P){return P&&P.slice(0,Ff(P)+1).replace(Hl,"")}function nn(P){return function(z){return P(z)}}function rc(P,z){return ot(z,function(N){return P[N]})}function $s(P,z){return P.has(z)}function Uf(P,z){for(var N=-1,oe=P.length;++N<oe&&Ai(z,P[N],0)>-1;);return N}function zf(P,z){for(var N=P.length;N--&&Ai(z,P[N],0)>-1;);return N}function ub(P,z){for(var N=P.length,oe=0;N--;)P[N]===z&&++oe;return oe}var db=ec(K2),fb=ec(G2);function hb(P){return"\\"+Y2[P]}function pb(P,z){return P==null?n:P[z]}function Ii(P){return q2.test(P)}function gb(P){return W2.test(P)}function vb(P){for(var z,N=[];!(z=P.next()).done;)N.push(z.value);return N}function ic(P){var z=-1,N=Array(P.size);return P.forEach(function(oe,Ce){N[++z]=[Ce,oe]}),N}function Hf(P,z){return function(N){return P(z(N))}}function kr(P,z){for(var N=-1,oe=P.length,Ce=0,Ve=[];++N<oe;){var yt=P[N];(yt===z||yt===p)&&(P[N]=p,Ve[Ce++]=N)}return Ve}function To(P){var z=-1,N=Array(P.size);return P.forEach(function(oe){N[++z]=oe}),N}function mb(P){var z=-1,N=Array(P.size);return P.forEach(function(oe){N[++z]=[oe,oe]}),N}function bb(P,z,N){for(var oe=N-1,Ce=P.length;++oe<Ce;)if(P[oe]===z)return oe;return-1}function yb(P,z,N){for(var oe=N+1;oe--;)if(P[oe]===z)return oe;return oe}function Ri(P){return Ii(P)?wb(P):ib(P)}function An(P){return Ii(P)?xb(P):sb(P)}function Ff(P){for(var z=P.length;z--&&u2.test(P.charAt(z)););return z}var _b=ec(Q2);function wb(P){for(var z=Vl.lastIndex=0;Vl.test(P);)++z;return z}function xb(P){return P.match(Vl)||[]}function $b(P){return P.match(F2)||[]}var Eb=function P(z){z=z==null?Tt:Oi.defaults(Tt.Object(),z,Oi.pick(Tt,Z2));var N=z.Array,oe=z.Date,Ce=z.Error,Ve=z.Function,yt=z.Math,Je=z.Object,sc=z.RegExp,kb=z.String,gn=z.TypeError,Ao=N.prototype,Cb=Ve.prototype,Li=Je.prototype,Io=z["__core-js_shared__"],Ro=Cb.toString,Qe=Li.hasOwnProperty,Sb=0,qf=function(){var r=/[^.]+$/.exec(Io&&Io.keys&&Io.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Oo=Li.toString,Tb=Ro.call(Je),Ab=Tt._,Ib=sc("^"+Ro.call(Qe).replace(zl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lo=Sf?z.Buffer:n,Cr=z.Symbol,Po=z.Uint8Array,Wf=Lo?Lo.allocUnsafe:n,Mo=Hf(Je.getPrototypeOf,Je),Zf=Je.create,Vf=Li.propertyIsEnumerable,Bo=Ao.splice,Kf=Cr?Cr.isConcatSpreadable:n,Es=Cr?Cr.iterator:n,Xr=Cr?Cr.toStringTag:n,jo=function(){try{var r=ii(Je,"defineProperty");return r({},"",{}),r}catch{}}(),Rb=z.clearTimeout!==Tt.clearTimeout&&z.clearTimeout,Ob=oe&&oe.now!==Tt.Date.now&&oe.now,Lb=z.setTimeout!==Tt.setTimeout&&z.setTimeout,No=yt.ceil,Do=yt.floor,oc=Je.getOwnPropertySymbols,Pb=Lo?Lo.isBuffer:n,Gf=z.isFinite,Mb=Ao.join,Bb=Hf(Je.keys,Je),_t=yt.max,Ot=yt.min,jb=oe.now,Nb=z.parseInt,Qf=yt.random,Db=Ao.reverse,ac=ii(z,"DataView"),ks=ii(z,"Map"),lc=ii(z,"Promise"),Pi=ii(z,"Set"),Cs=ii(z,"WeakMap"),Ss=ii(Je,"create"),Uo=Cs&&new Cs,Mi={},Ub=si(ac),zb=si(ks),Hb=si(lc),Fb=si(Pi),qb=si(Cs),zo=Cr?Cr.prototype:n,Ts=zo?zo.valueOf:n,Yf=zo?zo.toString:n;function b(r){if(ct(r)&&!Ae(r)&&!(r instanceof Ue)){if(r instanceof vn)return r;if(Qe.call(r,"__wrapped__"))return Jh(r)}return new vn(r)}var Bi=function(){function r(){}return function(s){if(!at(s))return{};if(Zf)return Zf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Ho(){}function vn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:i2,evaluate:s2,interpolate:of,variable:"",imports:{_:b}},b.prototype=Ho.prototype,b.prototype.constructor=b,vn.prototype=Bi(Ho.prototype),vn.prototype.constructor=vn;function Ue(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=De,this.__views__=[]}function Wb(){var r=new Ue(this.__wrapped__);return r.__actions__=Kt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Kt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Kt(this.__views__),r}function Zb(){if(this.__filtered__){var r=new Ue(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Vb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Ae(r),h=s<0,v=c?r.length:0,y=s_(0,v,this.__views__),T=y.start,O=y.end,M=O-T,H=h?O:T-1,F=this.__iteratees__,V=F.length,ne=0,he=Ot(M,this.__takeCount__);if(!c||!h&&v==M&&he==M)return wh(r,this.__actions__);var _e=[];e:for(;M--&&ne<he;){H+=s;for(var Oe=-1,we=r[H];++Oe<V;){var je=F[Oe],He=je.iteratee,on=je.type,Dt=He(we);if(on==U)we=Dt;else if(!Dt){if(on==te)continue e;break e}}_e[ne++]=we}return _e}Ue.prototype=Bi(Ho.prototype),Ue.prototype.constructor=Ue;function ei(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Kb(){this.__data__=Ss?Ss(null):{},this.size=0}function Gb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Qb(r){var s=this.__data__;if(Ss){var c=s[r];return c===d?n:c}return Qe.call(s,r)?s[r]:n}function Yb(r){var s=this.__data__;return Ss?s[r]!==n:Qe.call(s,r)}function Jb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Ss&&s===n?d:s,this}ei.prototype.clear=Kb,ei.prototype.delete=Gb,ei.prototype.get=Qb,ei.prototype.has=Yb,ei.prototype.set=Jb;function ir(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Xb(){this.__data__=[],this.size=0}function ey(r){var s=this.__data__,c=Fo(s,r);if(c<0)return!1;var h=s.length-1;return c==h?s.pop():Bo.call(s,c,1),--this.size,!0}function ty(r){var s=this.__data__,c=Fo(s,r);return c<0?n:s[c][1]}function ny(r){return Fo(this.__data__,r)>-1}function ry(r,s){var c=this.__data__,h=Fo(c,r);return h<0?(++this.size,c.push([r,s])):c[h][1]=s,this}ir.prototype.clear=Xb,ir.prototype.delete=ey,ir.prototype.get=ty,ir.prototype.has=ny,ir.prototype.set=ry;function sr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function iy(){this.size=0,this.__data__={hash:new ei,map:new(ks||ir),string:new ei}}function sy(r){var s=ta(this,r).delete(r);return this.size-=s?1:0,s}function oy(r){return ta(this,r).get(r)}function ay(r){return ta(this,r).has(r)}function ly(r,s){var c=ta(this,r),h=c.size;return c.set(r,s),this.size+=c.size==h?0:1,this}sr.prototype.clear=iy,sr.prototype.delete=sy,sr.prototype.get=oy,sr.prototype.has=ay,sr.prototype.set=ly;function ti(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new sr;++s<c;)this.add(r[s])}function cy(r){return this.__data__.set(r,d),this}function uy(r){return this.__data__.has(r)}ti.prototype.add=ti.prototype.push=cy,ti.prototype.has=uy;function In(r){var s=this.__data__=new ir(r);this.size=s.size}function dy(){this.__data__=new ir,this.size=0}function fy(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function hy(r){return this.__data__.get(r)}function py(r){return this.__data__.has(r)}function gy(r,s){var c=this.__data__;if(c instanceof ir){var h=c.__data__;if(!ks||h.length<o-1)return h.push([r,s]),this.size=++c.size,this;c=this.__data__=new sr(h)}return c.set(r,s),this.size=c.size,this}In.prototype.clear=dy,In.prototype.delete=fy,In.prototype.get=hy,In.prototype.has=py,In.prototype.set=gy;function Jf(r,s){var c=Ae(r),h=!c&&oi(r),v=!c&&!h&&Rr(r),y=!c&&!h&&!v&&Ui(r),T=c||h||v||y,O=T?nc(r.length,kb):[],M=O.length;for(var H in r)(s||Qe.call(r,H))&&!(T&&(H=="length"||v&&(H=="offset"||H=="parent")||y&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||cr(H,M)))&&O.push(H);return O}function Xf(r){var s=r.length;return s?r[yc(0,s-1)]:n}function vy(r,s){return na(Kt(r),ni(s,0,r.length))}function my(r){return na(Kt(r))}function cc(r,s,c){(c!==n&&!Rn(r[s],c)||c===n&&!(s in r))&&or(r,s,c)}function As(r,s,c){var h=r[s];(!(Qe.call(r,s)&&Rn(h,c))||c===n&&!(s in r))&&or(r,s,c)}function Fo(r,s){for(var c=r.length;c--;)if(Rn(r[c][0],s))return c;return-1}function by(r,s,c,h){return Sr(r,function(v,y,T){s(h,v,c(v),T)}),h}function eh(r,s){return r&&Fn(s,$t(s),r)}function yy(r,s){return r&&Fn(s,Qt(s),r)}function or(r,s,c){s=="__proto__"&&jo?jo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function uc(r,s){for(var c=-1,h=s.length,v=N(h),y=r==null;++c<h;)v[c]=y?n:qc(r,s[c]);return v}function ni(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function mn(r,s,c,h,v,y){var T,O=s&g,M=s&m,H=s&_;if(c&&(T=v?c(r,h,v,y):c(r)),T!==n)return T;if(!at(r))return r;var F=Ae(r);if(F){if(T=a_(r),!O)return Kt(r,T)}else{var V=Lt(r),ne=V==We||V==ht;if(Rr(r))return Eh(r,O);if(V==Ct||V==fe||ne&&!v){if(T=M||ne?{}:Fh(r),!O)return M?Qy(r,yy(T,r)):Gy(r,eh(T,r))}else{if(!et[V])return v?r:{};T=l_(r,V,O)}}y||(y=new In);var he=y.get(r);if(he)return he;y.set(r,T),bp(r)?r.forEach(function(we){T.add(mn(we,s,c,we,r,y))}):vp(r)&&r.forEach(function(we,je){T.set(je,mn(we,s,c,je,r,y))});var _e=H?M?Ic:Ac:M?Qt:$t,Oe=F?n:_e(r);return pn(Oe||r,function(we,je){Oe&&(je=we,we=r[je]),As(T,je,mn(we,s,c,je,r,y))}),T}function _y(r){var s=$t(r);return function(c){return th(c,r,s)}}function th(r,s,c){var h=c.length;if(r==null)return!h;for(r=Je(r);h--;){var v=c[h],y=s[v],T=r[v];if(T===n&&!(v in r)||!y(T))return!1}return!0}function nh(r,s,c){if(typeof r!="function")throw new gn(l);return Bs(function(){r.apply(n,c)},s)}function Is(r,s,c,h){var v=-1,y=Co,T=!0,O=r.length,M=[],H=s.length;if(!O)return M;c&&(s=ot(s,nn(c))),h?(y=Ql,T=!1):s.length>=o&&(y=$s,T=!1,s=new ti(s));e:for(;++v<O;){var F=r[v],V=c==null?F:c(F);if(F=h||F!==0?F:0,T&&V===V){for(var ne=H;ne--;)if(s[ne]===V)continue e;M.push(F)}else y(s,V,h)||M.push(F)}return M}var Sr=Ah(Hn),rh=Ah(fc,!0);function wy(r,s){var c=!0;return Sr(r,function(h,v,y){return c=!!s(h,v,y),c}),c}function qo(r,s,c){for(var h=-1,v=r.length;++h<v;){var y=r[h],T=s(y);if(T!=null&&(O===n?T===T&&!sn(T):c(T,O)))var O=T,M=y}return M}function xy(r,s,c,h){var v=r.length;for(c=Ie(c),c<0&&(c=-c>v?0:v+c),h=h===n||h>v?v:Ie(h),h<0&&(h+=v),h=c>h?0:_p(h);c<h;)r[c++]=s;return r}function ih(r,s){var c=[];return Sr(r,function(h,v,y){s(h,v,y)&&c.push(h)}),c}function At(r,s,c,h,v){var y=-1,T=r.length;for(c||(c=u_),v||(v=[]);++y<T;){var O=r[y];s>0&&c(O)?s>1?At(O,s-1,c,h,v):Er(v,O):h||(v[v.length]=O)}return v}var dc=Ih(),sh=Ih(!0);function Hn(r,s){return r&&dc(r,s,$t)}function fc(r,s){return r&&sh(r,s,$t)}function Wo(r,s){return $r(s,function(c){return ur(r[c])})}function ri(r,s){s=Ar(s,r);for(var c=0,h=s.length;r!=null&&c<h;)r=r[qn(s[c++])];return c&&c==h?r:n}function oh(r,s,c){var h=s(r);return Ae(r)?h:Er(h,c(r))}function jt(r){return r==null?r===n?xr:Xt:Xr&&Xr in Je(r)?i_(r):m_(r)}function hc(r,s){return r>s}function $y(r,s){return r!=null&&Qe.call(r,s)}function Ey(r,s){return r!=null&&s in Je(r)}function ky(r,s,c){return r>=Ot(s,c)&&r<_t(s,c)}function pc(r,s,c){for(var h=c?Ql:Co,v=r[0].length,y=r.length,T=y,O=N(y),M=1/0,H=[];T--;){var F=r[T];T&&s&&(F=ot(F,nn(s))),M=Ot(F.length,M),O[T]=!c&&(s||v>=120&&F.length>=120)?new ti(T&&F):n}F=r[0];var V=-1,ne=O[0];e:for(;++V<v&&H.length<M;){var he=F[V],_e=s?s(he):he;if(he=c||he!==0?he:0,!(ne?$s(ne,_e):h(H,_e,c))){for(T=y;--T;){var Oe=O[T];if(!(Oe?$s(Oe,_e):h(r[T],_e,c)))continue e}ne&&ne.push(_e),H.push(he)}}return H}function Cy(r,s,c,h){return Hn(r,function(v,y,T){s(h,c(v),y,T)}),h}function Rs(r,s,c){s=Ar(s,r),r=Vh(r,s);var h=r==null?r:r[qn(yn(s))];return h==null?n:tn(h,r,c)}function ah(r){return ct(r)&&jt(r)==fe}function Sy(r){return ct(r)&&jt(r)==Zt}function Ty(r){return ct(r)&&jt(r)==ye}function Os(r,s,c,h,v){return r===s?!0:r==null||s==null||!ct(r)&&!ct(s)?r!==r&&s!==s:Ay(r,s,c,h,Os,v)}function Ay(r,s,c,h,v,y){var T=Ae(r),O=Ae(s),M=T?W:Lt(r),H=O?W:Lt(s);M=M==fe?Ct:M,H=H==fe?Ct:H;var F=M==Ct,V=H==Ct,ne=M==H;if(ne&&Rr(r)){if(!Rr(s))return!1;T=!0,F=!1}if(ne&&!F)return y||(y=new In),T||Ui(r)?Uh(r,s,c,h,v,y):n_(r,s,M,c,h,v,y);if(!(c&w)){var he=F&&Qe.call(r,"__wrapped__"),_e=V&&Qe.call(s,"__wrapped__");if(he||_e){var Oe=he?r.value():r,we=_e?s.value():s;return y||(y=new In),v(Oe,we,c,h,y)}}return ne?(y||(y=new In),r_(r,s,c,h,v,y)):!1}function Iy(r){return ct(r)&&Lt(r)==$e}function gc(r,s,c,h){var v=c.length,y=v,T=!h;if(r==null)return!y;for(r=Je(r);v--;){var O=c[v];if(T&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++v<y;){O=c[v];var M=O[0],H=r[M],F=O[1];if(T&&O[2]){if(H===n&&!(M in r))return!1}else{var V=new In;if(h)var ne=h(H,F,M,r,s,V);if(!(ne===n?Os(F,H,w|E,h,V):ne))return!1}}return!0}function lh(r){if(!at(r)||f_(r))return!1;var s=ur(r)?Ib:_2;return s.test(si(r))}function Ry(r){return ct(r)&&jt(r)==En}function Oy(r){return ct(r)&&Lt(r)==St}function Ly(r){return ct(r)&&la(r.length)&&!!it[jt(r)]}function ch(r){return typeof r=="function"?r:r==null?Yt:typeof r=="object"?Ae(r)?fh(r[0],r[1]):dh(r):Rp(r)}function vc(r){if(!Ms(r))return Bb(r);var s=[];for(var c in Je(r))Qe.call(r,c)&&c!="constructor"&&s.push(c);return s}function Py(r){if(!at(r))return v_(r);var s=Ms(r),c=[];for(var h in r)h=="constructor"&&(s||!Qe.call(r,h))||c.push(h);return c}function mc(r,s){return r<s}function uh(r,s){var c=-1,h=Gt(r)?N(r.length):[];return Sr(r,function(v,y,T){h[++c]=s(v,y,T)}),h}function dh(r){var s=Oc(r);return s.length==1&&s[0][2]?Wh(s[0][0],s[0][1]):function(c){return c===r||gc(c,r,s)}}function fh(r,s){return Pc(r)&&qh(s)?Wh(qn(r),s):function(c){var h=qc(c,r);return h===n&&h===s?Wc(c,r):Os(s,h,w|E)}}function Zo(r,s,c,h,v){r!==s&&dc(s,function(y,T){if(v||(v=new In),at(y))My(r,s,T,c,Zo,h,v);else{var O=h?h(Bc(r,T),y,T+"",r,s,v):n;O===n&&(O=y),cc(r,T,O)}},Qt)}function My(r,s,c,h,v,y,T){var O=Bc(r,c),M=Bc(s,c),H=T.get(M);if(H){cc(r,c,H);return}var F=y?y(O,M,c+"",r,s,T):n,V=F===n;if(V){var ne=Ae(M),he=!ne&&Rr(M),_e=!ne&&!he&&Ui(M);F=M,ne||he||_e?Ae(O)?F=O:ut(O)?F=Kt(O):he?(V=!1,F=Eh(M,!0)):_e?(V=!1,F=kh(M,!0)):F=[]:js(M)||oi(M)?(F=O,oi(O)?F=wp(O):(!at(O)||ur(O))&&(F=Fh(M))):V=!1}V&&(T.set(M,F),v(F,M,h,y,T),T.delete(M)),cc(r,c,F)}function hh(r,s){var c=r.length;if(c)return s+=s<0?c:0,cr(s,c)?r[s]:n}function ph(r,s,c){s.length?s=ot(s,function(y){return Ae(y)?function(T){return ri(T,y.length===1?y[0]:y)}:y}):s=[Yt];var h=-1;s=ot(s,nn(me()));var v=uh(r,function(y,T,O){var M=ot(s,function(H){return H(y)});return{criteria:M,index:++h,value:y}});return lb(v,function(y,T){return Ky(y,T,c)})}function By(r,s){return gh(r,s,function(c,h){return Wc(r,h)})}function gh(r,s,c){for(var h=-1,v=s.length,y={};++h<v;){var T=s[h],O=ri(r,T);c(O,T)&&Ls(y,Ar(T,r),O)}return y}function jy(r){return function(s){return ri(s,r)}}function bc(r,s,c,h){var v=h?ab:Ai,y=-1,T=s.length,O=r;for(r===s&&(s=Kt(s)),c&&(O=ot(r,nn(c)));++y<T;)for(var M=0,H=s[y],F=c?c(H):H;(M=v(O,F,M,h))>-1;)O!==r&&Bo.call(O,M,1),Bo.call(r,M,1);return r}function vh(r,s){for(var c=r?s.length:0,h=c-1;c--;){var v=s[c];if(c==h||v!==y){var y=v;cr(v)?Bo.call(r,v,1):xc(r,v)}}return r}function yc(r,s){return r+Do(Qf()*(s-r+1))}function Ny(r,s,c,h){for(var v=-1,y=_t(No((s-r)/(c||1)),0),T=N(y);y--;)T[h?y:++v]=r,r+=c;return T}function _c(r,s){var c="";if(!r||s<1||s>ge)return c;do s%2&&(c+=r),s=Do(s/2),s&&(r+=r);while(s);return c}function Pe(r,s){return jc(Zh(r,s,Yt),r+"")}function Dy(r){return Xf(zi(r))}function Uy(r,s){var c=zi(r);return na(c,ni(s,0,c.length))}function Ls(r,s,c,h){if(!at(r))return r;s=Ar(s,r);for(var v=-1,y=s.length,T=y-1,O=r;O!=null&&++v<y;){var M=qn(s[v]),H=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(v!=T){var F=O[M];H=h?h(F,M,O):n,H===n&&(H=at(F)?F:cr(s[v+1])?[]:{})}As(O,M,H),O=O[M]}return r}var mh=Uo?function(r,s){return Uo.set(r,s),r}:Yt,zy=jo?function(r,s){return jo(r,"toString",{configurable:!0,enumerable:!1,value:Vc(s),writable:!0})}:Yt;function Hy(r){return na(zi(r))}function bn(r,s,c){var h=-1,v=r.length;s<0&&(s=-s>v?0:v+s),c=c>v?v:c,c<0&&(c+=v),v=s>c?0:c-s>>>0,s>>>=0;for(var y=N(v);++h<v;)y[h]=r[h+s];return y}function Fy(r,s){var c;return Sr(r,function(h,v,y){return c=s(h,v,y),!c}),!!c}function Vo(r,s,c){var h=0,v=r==null?h:r.length;if(typeof s=="number"&&s===s&&v<=Y){for(;h<v;){var y=h+v>>>1,T=r[y];T!==null&&!sn(T)&&(c?T<=s:T<s)?h=y+1:v=y}return v}return wc(r,s,Yt,c)}function wc(r,s,c,h){var v=0,y=r==null?0:r.length;if(y===0)return 0;s=c(s);for(var T=s!==s,O=s===null,M=sn(s),H=s===n;v<y;){var F=Do((v+y)/2),V=c(r[F]),ne=V!==n,he=V===null,_e=V===V,Oe=sn(V);if(T)var we=h||_e;else H?we=_e&&(h||ne):O?we=_e&&ne&&(h||!he):M?we=_e&&ne&&!he&&(h||!Oe):he||Oe?we=!1:we=h?V<=s:V<s;we?v=F+1:y=F}return Ot(y,ue)}function bh(r,s){for(var c=-1,h=r.length,v=0,y=[];++c<h;){var T=r[c],O=s?s(T):T;if(!c||!Rn(O,M)){var M=O;y[v++]=T===0?0:T}}return y}function yh(r){return typeof r=="number"?r:sn(r)?ze:+r}function rn(r){if(typeof r=="string")return r;if(Ae(r))return ot(r,rn)+"";if(sn(r))return Yf?Yf.call(r):"";var s=r+"";return s=="0"&&1/r==-ce?"-0":s}function Tr(r,s,c){var h=-1,v=Co,y=r.length,T=!0,O=[],M=O;if(c)T=!1,v=Ql;else if(y>=o){var H=s?null:e_(r);if(H)return To(H);T=!1,v=$s,M=new ti}else M=s?[]:O;e:for(;++h<y;){var F=r[h],V=s?s(F):F;if(F=c||F!==0?F:0,T&&V===V){for(var ne=M.length;ne--;)if(M[ne]===V)continue e;s&&M.push(V),O.push(F)}else v(M,V,c)||(M!==O&&M.push(V),O.push(F))}return O}function xc(r,s){return s=Ar(s,r),r=Vh(r,s),r==null||delete r[qn(yn(s))]}function _h(r,s,c,h){return Ls(r,s,c(ri(r,s)),h)}function Ko(r,s,c,h){for(var v=r.length,y=h?v:-1;(h?y--:++y<v)&&s(r[y],y,r););return c?bn(r,h?0:y,h?y+1:v):bn(r,h?y+1:0,h?v:y)}function wh(r,s){var c=r;return c instanceof Ue&&(c=c.value()),Yl(s,function(h,v){return v.func.apply(v.thisArg,Er([h],v.args))},c)}function $c(r,s,c){var h=r.length;if(h<2)return h?Tr(r[0]):[];for(var v=-1,y=N(h);++v<h;)for(var T=r[v],O=-1;++O<h;)O!=v&&(y[v]=Is(y[v]||T,r[O],s,c));return Tr(At(y,1),s,c)}function xh(r,s,c){for(var h=-1,v=r.length,y=s.length,T={};++h<v;){var O=h<y?s[h]:n;c(T,r[h],O)}return T}function Ec(r){return ut(r)?r:[]}function kc(r){return typeof r=="function"?r:Yt}function Ar(r,s){return Ae(r)?r:Pc(r,s)?[r]:Yh(Ge(r))}var qy=Pe;function Ir(r,s,c){var h=r.length;return c=c===n?h:c,!s&&c>=h?r:bn(r,s,c)}var $h=Rb||function(r){return Tt.clearTimeout(r)};function Eh(r,s){if(s)return r.slice();var c=r.length,h=Wf?Wf(c):new r.constructor(c);return r.copy(h),h}function Cc(r){var s=new r.constructor(r.byteLength);return new Po(s).set(new Po(r)),s}function Wy(r,s){var c=s?Cc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function Zy(r){var s=new r.constructor(r.source,af.exec(r));return s.lastIndex=r.lastIndex,s}function Vy(r){return Ts?Je(Ts.call(r)):{}}function kh(r,s){var c=s?Cc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function Ch(r,s){if(r!==s){var c=r!==n,h=r===null,v=r===r,y=sn(r),T=s!==n,O=s===null,M=s===s,H=sn(s);if(!O&&!H&&!y&&r>s||y&&T&&M&&!O&&!H||h&&T&&M||!c&&M||!v)return 1;if(!h&&!y&&!H&&r<s||H&&c&&v&&!h&&!y||O&&c&&v||!T&&v||!M)return-1}return 0}function Ky(r,s,c){for(var h=-1,v=r.criteria,y=s.criteria,T=v.length,O=c.length;++h<T;){var M=Ch(v[h],y[h]);if(M){if(h>=O)return M;var H=c[h];return M*(H=="desc"?-1:1)}}return r.index-s.index}function Sh(r,s,c,h){for(var v=-1,y=r.length,T=c.length,O=-1,M=s.length,H=_t(y-T,0),F=N(M+H),V=!h;++O<M;)F[O]=s[O];for(;++v<T;)(V||v<y)&&(F[c[v]]=r[v]);for(;H--;)F[O++]=r[v++];return F}function Th(r,s,c,h){for(var v=-1,y=r.length,T=-1,O=c.length,M=-1,H=s.length,F=_t(y-O,0),V=N(F+H),ne=!h;++v<F;)V[v]=r[v];for(var he=v;++M<H;)V[he+M]=s[M];for(;++T<O;)(ne||v<y)&&(V[he+c[T]]=r[v++]);return V}function Kt(r,s){var c=-1,h=r.length;for(s||(s=N(h));++c<h;)s[c]=r[c];return s}function Fn(r,s,c,h){var v=!c;c||(c={});for(var y=-1,T=s.length;++y<T;){var O=s[y],M=h?h(c[O],r[O],O,c,r):n;M===n&&(M=r[O]),v?or(c,O,M):As(c,O,M)}return c}function Gy(r,s){return Fn(r,Lc(r),s)}function Qy(r,s){return Fn(r,zh(r),s)}function Go(r,s){return function(c,h){var v=Ae(c)?tb:by,y=s?s():{};return v(c,r,me(h,2),y)}}function ji(r){return Pe(function(s,c){var h=-1,v=c.length,y=v>1?c[v-1]:n,T=v>2?c[2]:n;for(y=r.length>3&&typeof y=="function"?(v--,y):n,T&&Nt(c[0],c[1],T)&&(y=v<3?n:y,v=1),s=Je(s);++h<v;){var O=c[h];O&&r(s,O,h,y)}return s})}function Ah(r,s){return function(c,h){if(c==null)return c;if(!Gt(c))return r(c,h);for(var v=c.length,y=s?v:-1,T=Je(c);(s?y--:++y<v)&&h(T[y],y,T)!==!1;);return c}}function Ih(r){return function(s,c,h){for(var v=-1,y=Je(s),T=h(s),O=T.length;O--;){var M=T[r?O:++v];if(c(y[M],M,y)===!1)break}return s}}function Yy(r,s,c){var h=s&x,v=Ps(r);function y(){var T=this&&this!==Tt&&this instanceof y?v:r;return T.apply(h?c:this,arguments)}return y}function Rh(r){return function(s){s=Ge(s);var c=Ii(s)?An(s):n,h=c?c[0]:s.charAt(0),v=c?Ir(c,1).join(""):s.slice(1);return h[r]()+v}}function Ni(r){return function(s){return Yl(Ap(Tp(s).replace(z2,"")),r,"")}}function Ps(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Bi(r.prototype),h=r.apply(c,s);return at(h)?h:c}}function Jy(r,s,c){var h=Ps(r);function v(){for(var y=arguments.length,T=N(y),O=y,M=Di(v);O--;)T[O]=arguments[O];var H=y<3&&T[0]!==M&&T[y-1]!==M?[]:kr(T,M);if(y-=H.length,y<c)return Bh(r,s,Qo,v.placeholder,n,T,H,n,n,c-y);var F=this&&this!==Tt&&this instanceof v?h:r;return tn(F,this,T)}return v}function Oh(r){return function(s,c,h){var v=Je(s);if(!Gt(s)){var y=me(c,3);s=$t(s),c=function(O){return y(v[O],O,v)}}var T=r(s,c,h);return T>-1?v[y?s[T]:T]:n}}function Lh(r){return lr(function(s){var c=s.length,h=c,v=vn.prototype.thru;for(r&&s.reverse();h--;){var y=s[h];if(typeof y!="function")throw new gn(l);if(v&&!T&&ea(y)=="wrapper")var T=new vn([],!0)}for(h=T?h:c;++h<c;){y=s[h];var O=ea(y),M=O=="wrapper"?Rc(y):n;M&&Mc(M[0])&&M[1]==(B|k|R|D)&&!M[4].length&&M[9]==1?T=T[ea(M[0])].apply(T,M[3]):T=y.length==1&&Mc(y)?T[O]():T.thru(y)}return function(){var H=arguments,F=H[0];if(T&&H.length==1&&Ae(F))return T.plant(F).value();for(var V=0,ne=c?s[V].apply(this,H):F;++V<c;)ne=s[V].call(this,ne);return ne}})}function Qo(r,s,c,h,v,y,T,O,M,H){var F=s&B,V=s&x,ne=s&C,he=s&(k|$),_e=s&ie,Oe=ne?n:Ps(r);function we(){for(var je=arguments.length,He=N(je),on=je;on--;)He[on]=arguments[on];if(he)var Dt=Di(we),an=ub(He,Dt);if(h&&(He=Sh(He,h,v,he)),y&&(He=Th(He,y,T,he)),je-=an,he&&je<H){var dt=kr(He,Dt);return Bh(r,s,Qo,we.placeholder,c,He,dt,O,M,H-je)}var On=V?c:this,fr=ne?On[r]:r;return je=He.length,O?He=b_(He,O):_e&&je>1&&He.reverse(),F&&M<je&&(He.length=M),this&&this!==Tt&&this instanceof we&&(fr=Oe||Ps(fr)),fr.apply(On,He)}return we}function Ph(r,s){return function(c,h){return Cy(c,r,s(h),{})}}function Yo(r,s){return function(c,h){var v;if(c===n&&h===n)return s;if(c!==n&&(v=c),h!==n){if(v===n)return h;typeof c=="string"||typeof h=="string"?(c=rn(c),h=rn(h)):(c=yh(c),h=yh(h)),v=r(c,h)}return v}}function Sc(r){return lr(function(s){return s=ot(s,nn(me())),Pe(function(c){var h=this;return r(s,function(v){return tn(v,h,c)})})})}function Jo(r,s){s=s===n?" ":rn(s);var c=s.length;if(c<2)return c?_c(s,r):s;var h=_c(s,No(r/Ri(s)));return Ii(s)?Ir(An(h),0,r).join(""):h.slice(0,r)}function Xy(r,s,c,h){var v=s&x,y=Ps(r);function T(){for(var O=-1,M=arguments.length,H=-1,F=h.length,V=N(F+M),ne=this&&this!==Tt&&this instanceof T?y:r;++H<F;)V[H]=h[H];for(;M--;)V[H++]=arguments[++O];return tn(ne,v?c:this,V)}return T}function Mh(r){return function(s,c,h){return h&&typeof h!="number"&&Nt(s,c,h)&&(c=h=n),s=dr(s),c===n?(c=s,s=0):c=dr(c),h=h===n?s<c?1:-1:dr(h),Ny(s,c,h,r)}}function Xo(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=_n(s),c=_n(c)),r(s,c)}}function Bh(r,s,c,h,v,y,T,O,M,H){var F=s&k,V=F?T:n,ne=F?n:T,he=F?y:n,_e=F?n:y;s|=F?R:L,s&=~(F?L:R),s&I||(s&=~(x|C));var Oe=[r,s,v,he,V,_e,ne,O,M,H],we=c.apply(n,Oe);return Mc(r)&&Kh(we,Oe),we.placeholder=h,Gh(we,r,s)}function Tc(r){var s=yt[r];return function(c,h){if(c=_n(c),h=h==null?0:Ot(Ie(h),292),h&&Gf(c)){var v=(Ge(c)+"e").split("e"),y=s(v[0]+"e"+(+v[1]+h));return v=(Ge(y)+"e").split("e"),+(v[0]+"e"+(+v[1]-h))}return s(c)}}var e_=Pi&&1/To(new Pi([,-0]))[1]==ce?function(r){return new Pi(r)}:Qc;function jh(r){return function(s){var c=Lt(s);return c==$e?ic(s):c==St?mb(s):cb(s,r(s))}}function ar(r,s,c,h,v,y,T,O){var M=s&C;if(!M&&typeof r!="function")throw new gn(l);var H=h?h.length:0;if(H||(s&=~(R|L),h=v=n),T=T===n?T:_t(Ie(T),0),O=O===n?O:Ie(O),H-=v?v.length:0,s&L){var F=h,V=v;h=v=n}var ne=M?n:Rc(r),he=[r,s,c,h,v,F,V,y,T,O];if(ne&&g_(he,ne),r=he[0],s=he[1],c=he[2],h=he[3],v=he[4],O=he[9]=he[9]===n?M?0:r.length:_t(he[9]-H,0),!O&&s&(k|$)&&(s&=~(k|$)),!s||s==x)var _e=Yy(r,s,c);else s==k||s==$?_e=Jy(r,s,O):(s==R||s==(x|R))&&!v.length?_e=Xy(r,s,c,h):_e=Qo.apply(n,he);var Oe=ne?mh:Kh;return Gh(Oe(_e,he),r,s)}function Nh(r,s,c,h){return r===n||Rn(r,Li[c])&&!Qe.call(h,c)?s:r}function Dh(r,s,c,h,v,y){return at(r)&&at(s)&&(y.set(s,r),Zo(r,s,n,Dh,y),y.delete(s)),r}function t_(r){return js(r)?n:r}function Uh(r,s,c,h,v,y){var T=c&w,O=r.length,M=s.length;if(O!=M&&!(T&&M>O))return!1;var H=y.get(r),F=y.get(s);if(H&&F)return H==s&&F==r;var V=-1,ne=!0,he=c&E?new ti:n;for(y.set(r,s),y.set(s,r);++V<O;){var _e=r[V],Oe=s[V];if(h)var we=T?h(Oe,_e,V,s,r,y):h(_e,Oe,V,r,s,y);if(we!==n){if(we)continue;ne=!1;break}if(he){if(!Jl(s,function(je,He){if(!$s(he,He)&&(_e===je||v(_e,je,c,h,y)))return he.push(He)})){ne=!1;break}}else if(!(_e===Oe||v(_e,Oe,c,h,y))){ne=!1;break}}return y.delete(r),y.delete(s),ne}function n_(r,s,c,h,v,y,T){switch(c){case Vt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Zt:return!(r.byteLength!=s.byteLength||!y(new Po(r),new Po(s)));case Q:case ye:case rt:return Rn(+r,+s);case K:return r.name==s.name&&r.message==s.message;case En:case en:return r==s+"";case $e:var O=ic;case St:var M=h&w;if(O||(O=To),r.size!=s.size&&!M)return!1;var H=T.get(r);if(H)return H==s;h|=E,T.set(r,s);var F=Uh(O(r),O(s),h,v,y,T);return T.delete(r),F;case zn:if(Ts)return Ts.call(r)==Ts.call(s)}return!1}function r_(r,s,c,h,v,y){var T=c&w,O=Ac(r),M=O.length,H=Ac(s),F=H.length;if(M!=F&&!T)return!1;for(var V=M;V--;){var ne=O[V];if(!(T?ne in s:Qe.call(s,ne)))return!1}var he=y.get(r),_e=y.get(s);if(he&&_e)return he==s&&_e==r;var Oe=!0;y.set(r,s),y.set(s,r);for(var we=T;++V<M;){ne=O[V];var je=r[ne],He=s[ne];if(h)var on=T?h(He,je,ne,s,r,y):h(je,He,ne,r,s,y);if(!(on===n?je===He||v(je,He,c,h,y):on)){Oe=!1;break}we||(we=ne=="constructor")}if(Oe&&!we){var Dt=r.constructor,an=s.constructor;Dt!=an&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof an=="function"&&an instanceof an)&&(Oe=!1)}return y.delete(r),y.delete(s),Oe}function lr(r){return jc(Zh(r,n,tp),r+"")}function Ac(r){return oh(r,$t,Lc)}function Ic(r){return oh(r,Qt,zh)}var Rc=Uo?function(r){return Uo.get(r)}:Qc;function ea(r){for(var s=r.name+"",c=Mi[s],h=Qe.call(Mi,s)?c.length:0;h--;){var v=c[h],y=v.func;if(y==null||y==r)return v.name}return s}function Di(r){var s=Qe.call(b,"placeholder")?b:r;return s.placeholder}function me(){var r=b.iteratee||Kc;return r=r===Kc?ch:r,arguments.length?r(arguments[0],arguments[1]):r}function ta(r,s){var c=r.__data__;return d_(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Oc(r){for(var s=$t(r),c=s.length;c--;){var h=s[c],v=r[h];s[c]=[h,v,qh(v)]}return s}function ii(r,s){var c=pb(r,s);return lh(c)?c:n}function i_(r){var s=Qe.call(r,Xr),c=r[Xr];try{r[Xr]=n;var h=!0}catch{}var v=Oo.call(r);return h&&(s?r[Xr]=c:delete r[Xr]),v}var Lc=oc?function(r){return r==null?[]:(r=Je(r),$r(oc(r),function(s){return Vf.call(r,s)}))}:Yc,zh=oc?function(r){for(var s=[];r;)Er(s,Lc(r)),r=Mo(r);return s}:Yc,Lt=jt;(ac&&Lt(new ac(new ArrayBuffer(1)))!=Vt||ks&&Lt(new ks)!=$e||lc&&Lt(lc.resolve())!=Wt||Pi&&Lt(new Pi)!=St||Cs&&Lt(new Cs)!=kn)&&(Lt=function(r){var s=jt(r),c=s==Ct?r.constructor:n,h=c?si(c):"";if(h)switch(h){case Ub:return Vt;case zb:return $e;case Hb:return Wt;case Fb:return St;case qb:return kn}return s});function s_(r,s,c){for(var h=-1,v=c.length;++h<v;){var y=c[h],T=y.size;switch(y.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Ot(s,r+T);break;case"takeRight":r=_t(r,s-T);break}}return{start:r,end:s}}function o_(r){var s=r.match(f2);return s?s[1].split(h2):[]}function Hh(r,s,c){s=Ar(s,r);for(var h=-1,v=s.length,y=!1;++h<v;){var T=qn(s[h]);if(!(y=r!=null&&c(r,T)))break;r=r[T]}return y||++h!=v?y:(v=r==null?0:r.length,!!v&&la(v)&&cr(T,v)&&(Ae(r)||oi(r)))}function a_(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Qe.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Fh(r){return typeof r.constructor=="function"&&!Ms(r)?Bi(Mo(r)):{}}function l_(r,s,c){var h=r.constructor;switch(s){case Zt:return Cc(r);case Q:case ye:return new h(+r);case Vt:return Wy(r,c);case Cn:case Sn:case dn:case fn:case Tn:case tr:case nr:case rr:case Si:return kh(r,c);case $e:return new h;case rt:case en:return new h(r);case En:return Zy(r);case St:return new h;case zn:return Vy(r)}}function c_(r,s){var c=s.length;if(!c)return r;var h=c-1;return s[h]=(c>1?"& ":"")+s[h],s=s.join(c>2?", ":" "),r.replace(d2,`{
/* [wrapped with `+s+`] */
`)}function u_(r){return Ae(r)||oi(r)||!!(Kf&&r&&r[Kf])}function cr(r,s){var c=typeof r;return s=s??ge,!!s&&(c=="number"||c!="symbol"&&x2.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,c){if(!at(c))return!1;var h=typeof s;return(h=="number"?Gt(c)&&cr(s,c.length):h=="string"&&s in c)?Rn(c[s],r):!1}function Pc(r,s){if(Ae(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||sn(r)?!0:a2.test(r)||!o2.test(r)||s!=null&&r in Je(s)}function d_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Mc(r){var s=ea(r),c=b[s];if(typeof c!="function"||!(s in Ue.prototype))return!1;if(r===c)return!0;var h=Rc(c);return!!h&&r===h[0]}function f_(r){return!!qf&&qf in r}var h_=Io?ur:Jc;function Ms(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Li;return r===c}function qh(r){return r===r&&!at(r)}function Wh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Je(c))}}function p_(r){var s=oa(r,function(h){return c.size===f&&c.clear(),h}),c=s.cache;return s}function g_(r,s){var c=r[1],h=s[1],v=c|h,y=v<(x|C|B),T=h==B&&c==k||h==B&&c==D&&r[7].length<=s[8]||h==(B|D)&&s[7].length<=s[8]&&c==k;if(!(y||T))return r;h&x&&(r[2]=s[2],v|=c&x?0:I);var O=s[3];if(O){var M=r[3];r[3]=M?Sh(M,O,s[4]):O,r[4]=M?kr(r[3],p):s[4]}return O=s[5],O&&(M=r[5],r[5]=M?Th(M,O,s[6]):O,r[6]=M?kr(r[5],p):s[6]),O=s[7],O&&(r[7]=O),h&B&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=v,r}function v_(r){var s=[];if(r!=null)for(var c in Je(r))s.push(c);return s}function m_(r){return Oo.call(r)}function Zh(r,s,c){return s=_t(s===n?r.length-1:s,0),function(){for(var h=arguments,v=-1,y=_t(h.length-s,0),T=N(y);++v<y;)T[v]=h[s+v];v=-1;for(var O=N(s+1);++v<s;)O[v]=h[v];return O[s]=c(T),tn(r,this,O)}}function Vh(r,s){return s.length<2?r:ri(r,bn(s,0,-1))}function b_(r,s){for(var c=r.length,h=Ot(s.length,c),v=Kt(r);h--;){var y=s[h];r[h]=cr(y,c)?v[y]:n}return r}function Bc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Kh=Qh(mh),Bs=Lb||function(r,s){return Tt.setTimeout(r,s)},jc=Qh(zy);function Gh(r,s,c){var h=s+"";return jc(r,c_(h,y_(o_(h),c)))}function Qh(r){var s=0,c=0;return function(){var h=jb(),v=le-(h-c);if(c=h,v>0){if(++s>=G)return arguments[0]}else s=0;return r.apply(n,arguments)}}function na(r,s){var c=-1,h=r.length,v=h-1;for(s=s===n?h:s;++c<s;){var y=yc(c,v),T=r[y];r[y]=r[c],r[c]=T}return r.length=s,r}var Yh=p_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(l2,function(c,h,v,y){s.push(v?y.replace(v2,"$1"):h||c)}),s});function qn(r){if(typeof r=="string"||sn(r))return r;var s=r+"";return s=="0"&&1/r==-ce?"-0":s}function si(r){if(r!=null){try{return Ro.call(r)}catch{}try{return r+""}catch{}}return""}function y_(r,s){return pn(de,function(c){var h="_."+c[0];s&c[1]&&!Co(r,h)&&r.push(h)}),r.sort()}function Jh(r){if(r instanceof Ue)return r.clone();var s=new vn(r.__wrapped__,r.__chain__);return s.__actions__=Kt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function __(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=_t(Ie(s),0);var h=r==null?0:r.length;if(!h||s<1)return[];for(var v=0,y=0,T=N(No(h/s));v<h;)T[y++]=bn(r,v,v+=s);return T}function w_(r){for(var s=-1,c=r==null?0:r.length,h=0,v=[];++s<c;){var y=r[s];y&&(v[h++]=y)}return v}function x_(){var r=arguments.length;if(!r)return[];for(var s=N(r-1),c=arguments[0],h=r;h--;)s[h-1]=arguments[h];return Er(Ae(c)?Kt(c):[c],At(s,1))}var $_=Pe(function(r,s){return ut(r)?Is(r,At(s,1,ut,!0)):[]}),E_=Pe(function(r,s){var c=yn(s);return ut(c)&&(c=n),ut(r)?Is(r,At(s,1,ut,!0),me(c,2)):[]}),k_=Pe(function(r,s){var c=yn(s);return ut(c)&&(c=n),ut(r)?Is(r,At(s,1,ut,!0),n,c):[]});function C_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Ie(s),bn(r,s<0?0:s,h)):[]}function S_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Ie(s),s=h-s,bn(r,0,s<0?0:s)):[]}function T_(r,s){return r&&r.length?Ko(r,me(s,3),!0,!0):[]}function A_(r,s){return r&&r.length?Ko(r,me(s,3),!0):[]}function I_(r,s,c,h){var v=r==null?0:r.length;return v?(c&&typeof c!="number"&&Nt(r,s,c)&&(c=0,h=v),xy(r,s,c,h)):[]}function Xh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Ie(c);return v<0&&(v=_t(h+v,0)),So(r,me(s,3),v)}function ep(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h-1;return c!==n&&(v=Ie(c),v=c<0?_t(h+v,0):Ot(v,h-1)),So(r,me(s,3),v,!0)}function tp(r){var s=r==null?0:r.length;return s?At(r,1):[]}function R_(r){var s=r==null?0:r.length;return s?At(r,ce):[]}function O_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Ie(s),At(r,s)):[]}function L_(r){for(var s=-1,c=r==null?0:r.length,h={};++s<c;){var v=r[s];h[v[0]]=v[1]}return h}function np(r){return r&&r.length?r[0]:n}function P_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Ie(c);return v<0&&(v=_t(h+v,0)),Ai(r,s,v)}function M_(r){var s=r==null?0:r.length;return s?bn(r,0,-1):[]}var B_=Pe(function(r){var s=ot(r,Ec);return s.length&&s[0]===r[0]?pc(s):[]}),j_=Pe(function(r){var s=yn(r),c=ot(r,Ec);return s===yn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?pc(c,me(s,2)):[]}),N_=Pe(function(r){var s=yn(r),c=ot(r,Ec);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?pc(c,n,s):[]});function D_(r,s){return r==null?"":Mb.call(r,s)}function yn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function U_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h;return c!==n&&(v=Ie(c),v=v<0?_t(h+v,0):Ot(v,h-1)),s===s?yb(r,s,v):So(r,Bf,v,!0)}function z_(r,s){return r&&r.length?hh(r,Ie(s)):n}var H_=Pe(rp);function rp(r,s){return r&&r.length&&s&&s.length?bc(r,s):r}function F_(r,s,c){return r&&r.length&&s&&s.length?bc(r,s,me(c,2)):r}function q_(r,s,c){return r&&r.length&&s&&s.length?bc(r,s,n,c):r}var W_=lr(function(r,s){var c=r==null?0:r.length,h=uc(r,s);return vh(r,ot(s,function(v){return cr(v,c)?+v:v}).sort(Ch)),h});function Z_(r,s){var c=[];if(!(r&&r.length))return c;var h=-1,v=[],y=r.length;for(s=me(s,3);++h<y;){var T=r[h];s(T,h,r)&&(c.push(T),v.push(h))}return vh(r,v),c}function Nc(r){return r==null?r:Db.call(r)}function V_(r,s,c){var h=r==null?0:r.length;return h?(c&&typeof c!="number"&&Nt(r,s,c)?(s=0,c=h):(s=s==null?0:Ie(s),c=c===n?h:Ie(c)),bn(r,s,c)):[]}function K_(r,s){return Vo(r,s)}function G_(r,s,c){return wc(r,s,me(c,2))}function Q_(r,s){var c=r==null?0:r.length;if(c){var h=Vo(r,s);if(h<c&&Rn(r[h],s))return h}return-1}function Y_(r,s){return Vo(r,s,!0)}function J_(r,s,c){return wc(r,s,me(c,2),!0)}function X_(r,s){var c=r==null?0:r.length;if(c){var h=Vo(r,s,!0)-1;if(Rn(r[h],s))return h}return-1}function ew(r){return r&&r.length?bh(r):[]}function tw(r,s){return r&&r.length?bh(r,me(s,2)):[]}function nw(r){var s=r==null?0:r.length;return s?bn(r,1,s):[]}function rw(r,s,c){return r&&r.length?(s=c||s===n?1:Ie(s),bn(r,0,s<0?0:s)):[]}function iw(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Ie(s),s=h-s,bn(r,s<0?0:s,h)):[]}function sw(r,s){return r&&r.length?Ko(r,me(s,3),!1,!0):[]}function ow(r,s){return r&&r.length?Ko(r,me(s,3)):[]}var aw=Pe(function(r){return Tr(At(r,1,ut,!0))}),lw=Pe(function(r){var s=yn(r);return ut(s)&&(s=n),Tr(At(r,1,ut,!0),me(s,2))}),cw=Pe(function(r){var s=yn(r);return s=typeof s=="function"?s:n,Tr(At(r,1,ut,!0),n,s)});function uw(r){return r&&r.length?Tr(r):[]}function dw(r,s){return r&&r.length?Tr(r,me(s,2)):[]}function fw(r,s){return s=typeof s=="function"?s:n,r&&r.length?Tr(r,n,s):[]}function Dc(r){if(!(r&&r.length))return[];var s=0;return r=$r(r,function(c){if(ut(c))return s=_t(c.length,s),!0}),nc(s,function(c){return ot(r,Xl(c))})}function ip(r,s){if(!(r&&r.length))return[];var c=Dc(r);return s==null?c:ot(c,function(h){return tn(s,n,h)})}var hw=Pe(function(r,s){return ut(r)?Is(r,s):[]}),pw=Pe(function(r){return $c($r(r,ut))}),gw=Pe(function(r){var s=yn(r);return ut(s)&&(s=n),$c($r(r,ut),me(s,2))}),vw=Pe(function(r){var s=yn(r);return s=typeof s=="function"?s:n,$c($r(r,ut),n,s)}),mw=Pe(Dc);function bw(r,s){return xh(r||[],s||[],As)}function yw(r,s){return xh(r||[],s||[],Ls)}var _w=Pe(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,ip(r,c)});function sp(r){var s=b(r);return s.__chain__=!0,s}function ww(r,s){return s(r),r}function ra(r,s){return s(r)}var xw=lr(function(r){var s=r.length,c=s?r[0]:0,h=this.__wrapped__,v=function(y){return uc(y,r)};return s>1||this.__actions__.length||!(h instanceof Ue)||!cr(c)?this.thru(v):(h=h.slice(c,+c+(s?1:0)),h.__actions__.push({func:ra,args:[v],thisArg:n}),new vn(h,this.__chain__).thru(function(y){return s&&!y.length&&y.push(n),y}))});function $w(){return sp(this)}function Ew(){return new vn(this.value(),this.__chain__)}function kw(){this.__values__===n&&(this.__values__=yp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function Cw(){return this}function Sw(r){for(var s,c=this;c instanceof Ho;){var h=Jh(c);h.__index__=0,h.__values__=n,s?v.__wrapped__=h:s=h;var v=h;c=c.__wrapped__}return v.__wrapped__=r,s}function Tw(){var r=this.__wrapped__;if(r instanceof Ue){var s=r;return this.__actions__.length&&(s=new Ue(this)),s=s.reverse(),s.__actions__.push({func:ra,args:[Nc],thisArg:n}),new vn(s,this.__chain__)}return this.thru(Nc)}function Aw(){return wh(this.__wrapped__,this.__actions__)}var Iw=Go(function(r,s,c){Qe.call(r,c)?++r[c]:or(r,c,1)});function Rw(r,s,c){var h=Ae(r)?Pf:wy;return c&&Nt(r,s,c)&&(s=n),h(r,me(s,3))}function Ow(r,s){var c=Ae(r)?$r:ih;return c(r,me(s,3))}var Lw=Oh(Xh),Pw=Oh(ep);function Mw(r,s){return At(ia(r,s),1)}function Bw(r,s){return At(ia(r,s),ce)}function jw(r,s,c){return c=c===n?1:Ie(c),At(ia(r,s),c)}function op(r,s){var c=Ae(r)?pn:Sr;return c(r,me(s,3))}function ap(r,s){var c=Ae(r)?nb:rh;return c(r,me(s,3))}var Nw=Go(function(r,s,c){Qe.call(r,c)?r[c].push(s):or(r,c,[s])});function Dw(r,s,c,h){r=Gt(r)?r:zi(r),c=c&&!h?Ie(c):0;var v=r.length;return c<0&&(c=_t(v+c,0)),ca(r)?c<=v&&r.indexOf(s,c)>-1:!!v&&Ai(r,s,c)>-1}var Uw=Pe(function(r,s,c){var h=-1,v=typeof s=="function",y=Gt(r)?N(r.length):[];return Sr(r,function(T){y[++h]=v?tn(s,T,c):Rs(T,s,c)}),y}),zw=Go(function(r,s,c){or(r,c,s)});function ia(r,s){var c=Ae(r)?ot:uh;return c(r,me(s,3))}function Hw(r,s,c,h){return r==null?[]:(Ae(s)||(s=s==null?[]:[s]),c=h?n:c,Ae(c)||(c=c==null?[]:[c]),ph(r,s,c))}var Fw=Go(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function qw(r,s,c){var h=Ae(r)?Yl:Nf,v=arguments.length<3;return h(r,me(s,4),c,v,Sr)}function Ww(r,s,c){var h=Ae(r)?rb:Nf,v=arguments.length<3;return h(r,me(s,4),c,v,rh)}function Zw(r,s){var c=Ae(r)?$r:ih;return c(r,aa(me(s,3)))}function Vw(r){var s=Ae(r)?Xf:Dy;return s(r)}function Kw(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=Ie(s);var h=Ae(r)?vy:Uy;return h(r,s)}function Gw(r){var s=Ae(r)?my:Hy;return s(r)}function Qw(r){if(r==null)return 0;if(Gt(r))return ca(r)?Ri(r):r.length;var s=Lt(r);return s==$e||s==St?r.size:vc(r).length}function Yw(r,s,c){var h=Ae(r)?Jl:Fy;return c&&Nt(r,s,c)&&(s=n),h(r,me(s,3))}var Jw=Pe(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Nt(r,s[0],s[1])?s=[]:c>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),ph(r,At(s,1),[])}),sa=Ob||function(){return Tt.Date.now()};function Xw(r,s){if(typeof s!="function")throw new gn(l);return r=Ie(r),function(){if(--r<1)return s.apply(this,arguments)}}function lp(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,ar(r,B,n,n,n,n,s)}function cp(r,s){var c;if(typeof s!="function")throw new gn(l);return r=Ie(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Uc=Pe(function(r,s,c){var h=x;if(c.length){var v=kr(c,Di(Uc));h|=R}return ar(r,h,s,c,v)}),up=Pe(function(r,s,c){var h=x|C;if(c.length){var v=kr(c,Di(up));h|=R}return ar(s,h,r,c,v)});function dp(r,s,c){s=c?n:s;var h=ar(r,k,n,n,n,n,n,s);return h.placeholder=dp.placeholder,h}function fp(r,s,c){s=c?n:s;var h=ar(r,$,n,n,n,n,n,s);return h.placeholder=fp.placeholder,h}function hp(r,s,c){var h,v,y,T,O,M,H=0,F=!1,V=!1,ne=!0;if(typeof r!="function")throw new gn(l);s=_n(s)||0,at(c)&&(F=!!c.leading,V="maxWait"in c,y=V?_t(_n(c.maxWait)||0,s):y,ne="trailing"in c?!!c.trailing:ne);function he(dt){var On=h,fr=v;return h=v=n,H=dt,T=r.apply(fr,On),T}function _e(dt){return H=dt,O=Bs(je,s),F?he(dt):T}function Oe(dt){var On=dt-M,fr=dt-H,Op=s-On;return V?Ot(Op,y-fr):Op}function we(dt){var On=dt-M,fr=dt-H;return M===n||On>=s||On<0||V&&fr>=y}function je(){var dt=sa();if(we(dt))return He(dt);O=Bs(je,Oe(dt))}function He(dt){return O=n,ne&&h?he(dt):(h=v=n,T)}function on(){O!==n&&$h(O),H=0,h=M=v=O=n}function Dt(){return O===n?T:He(sa())}function an(){var dt=sa(),On=we(dt);if(h=arguments,v=this,M=dt,On){if(O===n)return _e(M);if(V)return $h(O),O=Bs(je,s),he(M)}return O===n&&(O=Bs(je,s)),T}return an.cancel=on,an.flush=Dt,an}var e3=Pe(function(r,s){return nh(r,1,s)}),t3=Pe(function(r,s,c){return nh(r,_n(s)||0,c)});function n3(r){return ar(r,ie)}function oa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new gn(l);var c=function(){var h=arguments,v=s?s.apply(this,h):h[0],y=c.cache;if(y.has(v))return y.get(v);var T=r.apply(this,h);return c.cache=y.set(v,T)||y,T};return c.cache=new(oa.Cache||sr),c}oa.Cache=sr;function aa(r){if(typeof r!="function")throw new gn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function r3(r){return cp(2,r)}var i3=qy(function(r,s){s=s.length==1&&Ae(s[0])?ot(s[0],nn(me())):ot(At(s,1),nn(me()));var c=s.length;return Pe(function(h){for(var v=-1,y=Ot(h.length,c);++v<y;)h[v]=s[v].call(this,h[v]);return tn(r,this,h)})}),zc=Pe(function(r,s){var c=kr(s,Di(zc));return ar(r,R,n,s,c)}),pp=Pe(function(r,s){var c=kr(s,Di(pp));return ar(r,L,n,s,c)}),s3=lr(function(r,s){return ar(r,D,n,n,n,s)});function o3(r,s){if(typeof r!="function")throw new gn(l);return s=s===n?s:Ie(s),Pe(r,s)}function a3(r,s){if(typeof r!="function")throw new gn(l);return s=s==null?0:_t(Ie(s),0),Pe(function(c){var h=c[s],v=Ir(c,0,s);return h&&Er(v,h),tn(r,this,v)})}function l3(r,s,c){var h=!0,v=!0;if(typeof r!="function")throw new gn(l);return at(c)&&(h="leading"in c?!!c.leading:h,v="trailing"in c?!!c.trailing:v),hp(r,s,{leading:h,maxWait:s,trailing:v})}function c3(r){return lp(r,1)}function u3(r,s){return zc(kc(s),r)}function d3(){if(!arguments.length)return[];var r=arguments[0];return Ae(r)?r:[r]}function f3(r){return mn(r,_)}function h3(r,s){return s=typeof s=="function"?s:n,mn(r,_,s)}function p3(r){return mn(r,g|_)}function g3(r,s){return s=typeof s=="function"?s:n,mn(r,g|_,s)}function v3(r,s){return s==null||th(r,s,$t(s))}function Rn(r,s){return r===s||r!==r&&s!==s}var m3=Xo(hc),b3=Xo(function(r,s){return r>=s}),oi=ah(function(){return arguments}())?ah:function(r){return ct(r)&&Qe.call(r,"callee")&&!Vf.call(r,"callee")},Ae=N.isArray,y3=Tf?nn(Tf):Sy;function Gt(r){return r!=null&&la(r.length)&&!ur(r)}function ut(r){return ct(r)&&Gt(r)}function _3(r){return r===!0||r===!1||ct(r)&&jt(r)==Q}var Rr=Pb||Jc,w3=Af?nn(Af):Ty;function x3(r){return ct(r)&&r.nodeType===1&&!js(r)}function $3(r){if(r==null)return!0;if(Gt(r)&&(Ae(r)||typeof r=="string"||typeof r.splice=="function"||Rr(r)||Ui(r)||oi(r)))return!r.length;var s=Lt(r);if(s==$e||s==St)return!r.size;if(Ms(r))return!vc(r).length;for(var c in r)if(Qe.call(r,c))return!1;return!0}function E3(r,s){return Os(r,s)}function k3(r,s,c){c=typeof c=="function"?c:n;var h=c?c(r,s):n;return h===n?Os(r,s,n,c):!!h}function Hc(r){if(!ct(r))return!1;var s=jt(r);return s==K||s==Ke||typeof r.message=="string"&&typeof r.name=="string"&&!js(r)}function C3(r){return typeof r=="number"&&Gf(r)}function ur(r){if(!at(r))return!1;var s=jt(r);return s==We||s==ht||s==re||s==Yr}function gp(r){return typeof r=="number"&&r==Ie(r)}function la(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ge}function at(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ct(r){return r!=null&&typeof r=="object"}var vp=If?nn(If):Iy;function S3(r,s){return r===s||gc(r,s,Oc(s))}function T3(r,s,c){return c=typeof c=="function"?c:n,gc(r,s,Oc(s),c)}function A3(r){return mp(r)&&r!=+r}function I3(r){if(h_(r))throw new Ce(a);return lh(r)}function R3(r){return r===null}function O3(r){return r==null}function mp(r){return typeof r=="number"||ct(r)&&jt(r)==rt}function js(r){if(!ct(r)||jt(r)!=Ct)return!1;var s=Mo(r);if(s===null)return!0;var c=Qe.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Ro.call(c)==Tb}var Fc=Rf?nn(Rf):Ry;function L3(r){return gp(r)&&r>=-ge&&r<=ge}var bp=Of?nn(Of):Oy;function ca(r){return typeof r=="string"||!Ae(r)&&ct(r)&&jt(r)==en}function sn(r){return typeof r=="symbol"||ct(r)&&jt(r)==zn}var Ui=Lf?nn(Lf):Ly;function P3(r){return r===n}function M3(r){return ct(r)&&Lt(r)==kn}function B3(r){return ct(r)&&jt(r)==ke}var j3=Xo(mc),N3=Xo(function(r,s){return r<=s});function yp(r){if(!r)return[];if(Gt(r))return ca(r)?An(r):Kt(r);if(Es&&r[Es])return vb(r[Es]());var s=Lt(r),c=s==$e?ic:s==St?To:zi;return c(r)}function dr(r){if(!r)return r===0?r:0;if(r=_n(r),r===ce||r===-ce){var s=r<0?-1:1;return s*Ee}return r===r?r:0}function Ie(r){var s=dr(r),c=s%1;return s===s?c?s-c:s:0}function _p(r){return r?ni(Ie(r),0,De):0}function _n(r){if(typeof r=="number")return r;if(sn(r))return ze;if(at(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=at(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Df(r);var c=y2.test(r);return c||w2.test(r)?X2(r.slice(2),c?2:8):b2.test(r)?ze:+r}function wp(r){return Fn(r,Qt(r))}function D3(r){return r?ni(Ie(r),-ge,ge):r===0?r:0}function Ge(r){return r==null?"":rn(r)}var U3=ji(function(r,s){if(Ms(s)||Gt(s)){Fn(s,$t(s),r);return}for(var c in s)Qe.call(s,c)&&As(r,c,s[c])}),xp=ji(function(r,s){Fn(s,Qt(s),r)}),ua=ji(function(r,s,c,h){Fn(s,Qt(s),r,h)}),z3=ji(function(r,s,c,h){Fn(s,$t(s),r,h)}),H3=lr(uc);function F3(r,s){var c=Bi(r);return s==null?c:eh(c,s)}var q3=Pe(function(r,s){r=Je(r);var c=-1,h=s.length,v=h>2?s[2]:n;for(v&&Nt(s[0],s[1],v)&&(h=1);++c<h;)for(var y=s[c],T=Qt(y),O=-1,M=T.length;++O<M;){var H=T[O],F=r[H];(F===n||Rn(F,Li[H])&&!Qe.call(r,H))&&(r[H]=y[H])}return r}),W3=Pe(function(r){return r.push(n,Dh),tn($p,n,r)});function Z3(r,s){return Mf(r,me(s,3),Hn)}function V3(r,s){return Mf(r,me(s,3),fc)}function K3(r,s){return r==null?r:dc(r,me(s,3),Qt)}function G3(r,s){return r==null?r:sh(r,me(s,3),Qt)}function Q3(r,s){return r&&Hn(r,me(s,3))}function Y3(r,s){return r&&fc(r,me(s,3))}function J3(r){return r==null?[]:Wo(r,$t(r))}function X3(r){return r==null?[]:Wo(r,Qt(r))}function qc(r,s,c){var h=r==null?n:ri(r,s);return h===n?c:h}function ex(r,s){return r!=null&&Hh(r,s,$y)}function Wc(r,s){return r!=null&&Hh(r,s,Ey)}var tx=Ph(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Oo.call(s)),r[s]=c},Vc(Yt)),nx=Ph(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Oo.call(s)),Qe.call(r,s)?r[s].push(c):r[s]=[c]},me),rx=Pe(Rs);function $t(r){return Gt(r)?Jf(r):vc(r)}function Qt(r){return Gt(r)?Jf(r,!0):Py(r)}function ix(r,s){var c={};return s=me(s,3),Hn(r,function(h,v,y){or(c,s(h,v,y),h)}),c}function sx(r,s){var c={};return s=me(s,3),Hn(r,function(h,v,y){or(c,v,s(h,v,y))}),c}var ox=ji(function(r,s,c){Zo(r,s,c)}),$p=ji(function(r,s,c,h){Zo(r,s,c,h)}),ax=lr(function(r,s){var c={};if(r==null)return c;var h=!1;s=ot(s,function(y){return y=Ar(y,r),h||(h=y.length>1),y}),Fn(r,Ic(r),c),h&&(c=mn(c,g|m|_,t_));for(var v=s.length;v--;)xc(c,s[v]);return c});function lx(r,s){return Ep(r,aa(me(s)))}var cx=lr(function(r,s){return r==null?{}:By(r,s)});function Ep(r,s){if(r==null)return{};var c=ot(Ic(r),function(h){return[h]});return s=me(s),gh(r,c,function(h,v){return s(h,v[0])})}function ux(r,s,c){s=Ar(s,r);var h=-1,v=s.length;for(v||(v=1,r=n);++h<v;){var y=r==null?n:r[qn(s[h])];y===n&&(h=v,y=c),r=ur(y)?y.call(r):y}return r}function dx(r,s,c){return r==null?r:Ls(r,s,c)}function fx(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:Ls(r,s,c,h)}var kp=jh($t),Cp=jh(Qt);function hx(r,s,c){var h=Ae(r),v=h||Rr(r)||Ui(r);if(s=me(s,4),c==null){var y=r&&r.constructor;v?c=h?new y:[]:at(r)?c=ur(y)?Bi(Mo(r)):{}:c={}}return(v?pn:Hn)(r,function(T,O,M){return s(c,T,O,M)}),c}function px(r,s){return r==null?!0:xc(r,s)}function gx(r,s,c){return r==null?r:_h(r,s,kc(c))}function vx(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:_h(r,s,kc(c),h)}function zi(r){return r==null?[]:rc(r,$t(r))}function mx(r){return r==null?[]:rc(r,Qt(r))}function bx(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=_n(c),c=c===c?c:0),s!==n&&(s=_n(s),s=s===s?s:0),ni(_n(r),s,c)}function yx(r,s,c){return s=dr(s),c===n?(c=s,s=0):c=dr(c),r=_n(r),ky(r,s,c)}function _x(r,s,c){if(c&&typeof c!="boolean"&&Nt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=dr(r),s===n?(s=r,r=0):s=dr(s)),r>s){var h=r;r=s,s=h}if(c||r%1||s%1){var v=Qf();return Ot(r+v*(s-r+J2("1e-"+((v+"").length-1))),s)}return yc(r,s)}var wx=Ni(function(r,s,c){return s=s.toLowerCase(),r+(c?Sp(s):s)});function Sp(r){return Zc(Ge(r).toLowerCase())}function Tp(r){return r=Ge(r),r&&r.replace($2,db).replace(H2,"")}function xx(r,s,c){r=Ge(r),s=rn(s);var h=r.length;c=c===n?h:ni(Ie(c),0,h);var v=c;return c-=s.length,c>=0&&r.slice(c,v)==s}function $x(r){return r=Ge(r),r&&r2.test(r)?r.replace(sf,fb):r}function Ex(r){return r=Ge(r),r&&c2.test(r)?r.replace(zl,"\\$&"):r}var kx=Ni(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),Cx=Ni(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),Sx=Rh("toLowerCase");function Tx(r,s,c){r=Ge(r),s=Ie(s);var h=s?Ri(r):0;if(!s||h>=s)return r;var v=(s-h)/2;return Jo(Do(v),c)+r+Jo(No(v),c)}function Ax(r,s,c){r=Ge(r),s=Ie(s);var h=s?Ri(r):0;return s&&h<s?r+Jo(s-h,c):r}function Ix(r,s,c){r=Ge(r),s=Ie(s);var h=s?Ri(r):0;return s&&h<s?Jo(s-h,c)+r:r}function Rx(r,s,c){return c||s==null?s=0:s&&(s=+s),Nb(Ge(r).replace(Hl,""),s||0)}function Ox(r,s,c){return(c?Nt(r,s,c):s===n)?s=1:s=Ie(s),_c(Ge(r),s)}function Lx(){var r=arguments,s=Ge(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var Px=Ni(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function Mx(r,s,c){return c&&typeof c!="number"&&Nt(r,s,c)&&(s=c=n),c=c===n?De:c>>>0,c?(r=Ge(r),r&&(typeof s=="string"||s!=null&&!Fc(s))&&(s=rn(s),!s&&Ii(r))?Ir(An(r),0,c):r.split(s,c)):[]}var Bx=Ni(function(r,s,c){return r+(c?" ":"")+Zc(s)});function jx(r,s,c){return r=Ge(r),c=c==null?0:ni(Ie(c),0,r.length),s=rn(s),r.slice(c,c+s.length)==s}function Nx(r,s,c){var h=b.templateSettings;c&&Nt(r,s,c)&&(s=n),r=Ge(r),s=ua({},s,h,Nh);var v=ua({},s.imports,h.imports,Nh),y=$t(v),T=rc(v,y),O,M,H=0,F=s.interpolate||$o,V="__p += '",ne=sc((s.escape||$o).source+"|"+F.source+"|"+(F===of?m2:$o).source+"|"+(s.evaluate||$o).source+"|$","g"),he="//# sourceURL="+(Qe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++V2+"]")+`
`;r.replace(ne,function(we,je,He,on,Dt,an){return He||(He=on),V+=r.slice(H,an).replace(E2,hb),je&&(O=!0,V+=`' +
__e(`+je+`) +
'`),Dt&&(M=!0,V+=`';
`+Dt+`;
__p += '`),He&&(V+=`' +
((__t = (`+He+`)) == null ? '' : __t) +
'`),H=an+we.length,we}),V+=`';
`;var _e=Qe.call(s,"variable")&&s.variable;if(!_e)V=`with (obj) {
`+V+`
}
`;else if(g2.test(_e))throw new Ce(u);V=(M?V.replace(xo,""):V).replace(e2,"$1").replace(t2,"$1;"),V="function("+(_e||"obj")+`) {
`+(_e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var Oe=Ip(function(){return Ve(y,he+"return "+V).apply(n,T)});if(Oe.source=V,Hc(Oe))throw Oe;return Oe}function Dx(r){return Ge(r).toLowerCase()}function Ux(r){return Ge(r).toUpperCase()}function zx(r,s,c){if(r=Ge(r),r&&(c||s===n))return Df(r);if(!r||!(s=rn(s)))return r;var h=An(r),v=An(s),y=Uf(h,v),T=zf(h,v)+1;return Ir(h,y,T).join("")}function Hx(r,s,c){if(r=Ge(r),r&&(c||s===n))return r.slice(0,Ff(r)+1);if(!r||!(s=rn(s)))return r;var h=An(r),v=zf(h,An(s))+1;return Ir(h,0,v).join("")}function Fx(r,s,c){if(r=Ge(r),r&&(c||s===n))return r.replace(Hl,"");if(!r||!(s=rn(s)))return r;var h=An(r),v=Uf(h,An(s));return Ir(h,v).join("")}function qx(r,s){var c=q,h=J;if(at(s)){var v="separator"in s?s.separator:v;c="length"in s?Ie(s.length):c,h="omission"in s?rn(s.omission):h}r=Ge(r);var y=r.length;if(Ii(r)){var T=An(r);y=T.length}if(c>=y)return r;var O=c-Ri(h);if(O<1)return h;var M=T?Ir(T,0,O).join(""):r.slice(0,O);if(v===n)return M+h;if(T&&(O+=M.length-O),Fc(v)){if(r.slice(O).search(v)){var H,F=M;for(v.global||(v=sc(v.source,Ge(af.exec(v))+"g")),v.lastIndex=0;H=v.exec(F);)var V=H.index;M=M.slice(0,V===n?O:V)}}else if(r.indexOf(rn(v),O)!=O){var ne=M.lastIndexOf(v);ne>-1&&(M=M.slice(0,ne))}return M+h}function Wx(r){return r=Ge(r),r&&n2.test(r)?r.replace(rf,_b):r}var Zx=Ni(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Zc=Rh("toUpperCase");function Ap(r,s,c){return r=Ge(r),s=c?n:s,s===n?gb(r)?$b(r):ob(r):r.match(s)||[]}var Ip=Pe(function(r,s){try{return tn(r,n,s)}catch(c){return Hc(c)?c:new Ce(c)}}),Vx=lr(function(r,s){return pn(s,function(c){c=qn(c),or(r,c,Uc(r[c],r))}),r});function Kx(r){var s=r==null?0:r.length,c=me();return r=s?ot(r,function(h){if(typeof h[1]!="function")throw new gn(l);return[c(h[0]),h[1]]}):[],Pe(function(h){for(var v=-1;++v<s;){var y=r[v];if(tn(y[0],this,h))return tn(y[1],this,h)}})}function Gx(r){return _y(mn(r,g))}function Vc(r){return function(){return r}}function Qx(r,s){return r==null||r!==r?s:r}var Yx=Lh(),Jx=Lh(!0);function Yt(r){return r}function Kc(r){return ch(typeof r=="function"?r:mn(r,g))}function Xx(r){return dh(mn(r,g))}function e4(r,s){return fh(r,mn(s,g))}var t4=Pe(function(r,s){return function(c){return Rs(c,r,s)}}),n4=Pe(function(r,s){return function(c){return Rs(r,c,s)}});function Gc(r,s,c){var h=$t(s),v=Wo(s,h);c==null&&!(at(s)&&(v.length||!h.length))&&(c=s,s=r,r=this,v=Wo(s,$t(s)));var y=!(at(c)&&"chain"in c)||!!c.chain,T=ur(r);return pn(v,function(O){var M=s[O];r[O]=M,T&&(r.prototype[O]=function(){var H=this.__chain__;if(y||H){var F=r(this.__wrapped__),V=F.__actions__=Kt(this.__actions__);return V.push({func:M,args:arguments,thisArg:r}),F.__chain__=H,F}return M.apply(r,Er([this.value()],arguments))})}),r}function r4(){return Tt._===this&&(Tt._=Ab),this}function Qc(){}function i4(r){return r=Ie(r),Pe(function(s){return hh(s,r)})}var s4=Sc(ot),o4=Sc(Pf),a4=Sc(Jl);function Rp(r){return Pc(r)?Xl(qn(r)):jy(r)}function l4(r){return function(s){return r==null?n:ri(r,s)}}var c4=Mh(),u4=Mh(!0);function Yc(){return[]}function Jc(){return!1}function d4(){return{}}function f4(){return""}function h4(){return!0}function p4(r,s){if(r=Ie(r),r<1||r>ge)return[];var c=De,h=Ot(r,De);s=me(s),r-=De;for(var v=nc(h,s);++c<r;)s(c);return v}function g4(r){return Ae(r)?ot(r,qn):sn(r)?[r]:Kt(Yh(Ge(r)))}function v4(r){var s=++Sb;return Ge(r)+s}var m4=Yo(function(r,s){return r+s},0),b4=Tc("ceil"),y4=Yo(function(r,s){return r/s},1),_4=Tc("floor");function w4(r){return r&&r.length?qo(r,Yt,hc):n}function x4(r,s){return r&&r.length?qo(r,me(s,2),hc):n}function $4(r){return jf(r,Yt)}function E4(r,s){return jf(r,me(s,2))}function k4(r){return r&&r.length?qo(r,Yt,mc):n}function C4(r,s){return r&&r.length?qo(r,me(s,2),mc):n}var S4=Yo(function(r,s){return r*s},1),T4=Tc("round"),A4=Yo(function(r,s){return r-s},0);function I4(r){return r&&r.length?tc(r,Yt):0}function R4(r,s){return r&&r.length?tc(r,me(s,2)):0}return b.after=Xw,b.ary=lp,b.assign=U3,b.assignIn=xp,b.assignInWith=ua,b.assignWith=z3,b.at=H3,b.before=cp,b.bind=Uc,b.bindAll=Vx,b.bindKey=up,b.castArray=d3,b.chain=sp,b.chunk=__,b.compact=w_,b.concat=x_,b.cond=Kx,b.conforms=Gx,b.constant=Vc,b.countBy=Iw,b.create=F3,b.curry=dp,b.curryRight=fp,b.debounce=hp,b.defaults=q3,b.defaultsDeep=W3,b.defer=e3,b.delay=t3,b.difference=$_,b.differenceBy=E_,b.differenceWith=k_,b.drop=C_,b.dropRight=S_,b.dropRightWhile=T_,b.dropWhile=A_,b.fill=I_,b.filter=Ow,b.flatMap=Mw,b.flatMapDeep=Bw,b.flatMapDepth=jw,b.flatten=tp,b.flattenDeep=R_,b.flattenDepth=O_,b.flip=n3,b.flow=Yx,b.flowRight=Jx,b.fromPairs=L_,b.functions=J3,b.functionsIn=X3,b.groupBy=Nw,b.initial=M_,b.intersection=B_,b.intersectionBy=j_,b.intersectionWith=N_,b.invert=tx,b.invertBy=nx,b.invokeMap=Uw,b.iteratee=Kc,b.keyBy=zw,b.keys=$t,b.keysIn=Qt,b.map=ia,b.mapKeys=ix,b.mapValues=sx,b.matches=Xx,b.matchesProperty=e4,b.memoize=oa,b.merge=ox,b.mergeWith=$p,b.method=t4,b.methodOf=n4,b.mixin=Gc,b.negate=aa,b.nthArg=i4,b.omit=ax,b.omitBy=lx,b.once=r3,b.orderBy=Hw,b.over=s4,b.overArgs=i3,b.overEvery=o4,b.overSome=a4,b.partial=zc,b.partialRight=pp,b.partition=Fw,b.pick=cx,b.pickBy=Ep,b.property=Rp,b.propertyOf=l4,b.pull=H_,b.pullAll=rp,b.pullAllBy=F_,b.pullAllWith=q_,b.pullAt=W_,b.range=c4,b.rangeRight=u4,b.rearg=s3,b.reject=Zw,b.remove=Z_,b.rest=o3,b.reverse=Nc,b.sampleSize=Kw,b.set=dx,b.setWith=fx,b.shuffle=Gw,b.slice=V_,b.sortBy=Jw,b.sortedUniq=ew,b.sortedUniqBy=tw,b.split=Mx,b.spread=a3,b.tail=nw,b.take=rw,b.takeRight=iw,b.takeRightWhile=sw,b.takeWhile=ow,b.tap=ww,b.throttle=l3,b.thru=ra,b.toArray=yp,b.toPairs=kp,b.toPairsIn=Cp,b.toPath=g4,b.toPlainObject=wp,b.transform=hx,b.unary=c3,b.union=aw,b.unionBy=lw,b.unionWith=cw,b.uniq=uw,b.uniqBy=dw,b.uniqWith=fw,b.unset=px,b.unzip=Dc,b.unzipWith=ip,b.update=gx,b.updateWith=vx,b.values=zi,b.valuesIn=mx,b.without=hw,b.words=Ap,b.wrap=u3,b.xor=pw,b.xorBy=gw,b.xorWith=vw,b.zip=mw,b.zipObject=bw,b.zipObjectDeep=yw,b.zipWith=_w,b.entries=kp,b.entriesIn=Cp,b.extend=xp,b.extendWith=ua,Gc(b,b),b.add=m4,b.attempt=Ip,b.camelCase=wx,b.capitalize=Sp,b.ceil=b4,b.clamp=bx,b.clone=f3,b.cloneDeep=p3,b.cloneDeepWith=g3,b.cloneWith=h3,b.conformsTo=v3,b.deburr=Tp,b.defaultTo=Qx,b.divide=y4,b.endsWith=xx,b.eq=Rn,b.escape=$x,b.escapeRegExp=Ex,b.every=Rw,b.find=Lw,b.findIndex=Xh,b.findKey=Z3,b.findLast=Pw,b.findLastIndex=ep,b.findLastKey=V3,b.floor=_4,b.forEach=op,b.forEachRight=ap,b.forIn=K3,b.forInRight=G3,b.forOwn=Q3,b.forOwnRight=Y3,b.get=qc,b.gt=m3,b.gte=b3,b.has=ex,b.hasIn=Wc,b.head=np,b.identity=Yt,b.includes=Dw,b.indexOf=P_,b.inRange=yx,b.invoke=rx,b.isArguments=oi,b.isArray=Ae,b.isArrayBuffer=y3,b.isArrayLike=Gt,b.isArrayLikeObject=ut,b.isBoolean=_3,b.isBuffer=Rr,b.isDate=w3,b.isElement=x3,b.isEmpty=$3,b.isEqual=E3,b.isEqualWith=k3,b.isError=Hc,b.isFinite=C3,b.isFunction=ur,b.isInteger=gp,b.isLength=la,b.isMap=vp,b.isMatch=S3,b.isMatchWith=T3,b.isNaN=A3,b.isNative=I3,b.isNil=O3,b.isNull=R3,b.isNumber=mp,b.isObject=at,b.isObjectLike=ct,b.isPlainObject=js,b.isRegExp=Fc,b.isSafeInteger=L3,b.isSet=bp,b.isString=ca,b.isSymbol=sn,b.isTypedArray=Ui,b.isUndefined=P3,b.isWeakMap=M3,b.isWeakSet=B3,b.join=D_,b.kebabCase=kx,b.last=yn,b.lastIndexOf=U_,b.lowerCase=Cx,b.lowerFirst=Sx,b.lt=j3,b.lte=N3,b.max=w4,b.maxBy=x4,b.mean=$4,b.meanBy=E4,b.min=k4,b.minBy=C4,b.stubArray=Yc,b.stubFalse=Jc,b.stubObject=d4,b.stubString=f4,b.stubTrue=h4,b.multiply=S4,b.nth=z_,b.noConflict=r4,b.noop=Qc,b.now=sa,b.pad=Tx,b.padEnd=Ax,b.padStart=Ix,b.parseInt=Rx,b.random=_x,b.reduce=qw,b.reduceRight=Ww,b.repeat=Ox,b.replace=Lx,b.result=ux,b.round=T4,b.runInContext=P,b.sample=Vw,b.size=Qw,b.snakeCase=Px,b.some=Yw,b.sortedIndex=K_,b.sortedIndexBy=G_,b.sortedIndexOf=Q_,b.sortedLastIndex=Y_,b.sortedLastIndexBy=J_,b.sortedLastIndexOf=X_,b.startCase=Bx,b.startsWith=jx,b.subtract=A4,b.sum=I4,b.sumBy=R4,b.template=Nx,b.times=p4,b.toFinite=dr,b.toInteger=Ie,b.toLength=_p,b.toLower=Dx,b.toNumber=_n,b.toSafeInteger=D3,b.toString=Ge,b.toUpper=Ux,b.trim=zx,b.trimEnd=Hx,b.trimStart=Fx,b.truncate=qx,b.unescape=Wx,b.uniqueId=v4,b.upperCase=Zx,b.upperFirst=Zc,b.each=op,b.eachRight=ap,b.first=np,Gc(b,function(){var r={};return Hn(b,function(s,c){Qe.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),pn(["drop","take"],function(r,s){Ue.prototype[r]=function(c){c=c===n?1:_t(Ie(c),0);var h=this.__filtered__&&!s?new Ue(this):this.clone();return h.__filtered__?h.__takeCount__=Ot(c,h.__takeCount__):h.__views__.push({size:Ot(c,De),type:r+(h.__dir__<0?"Right":"")}),h},Ue.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),pn(["filter","map","takeWhile"],function(r,s){var c=s+1,h=c==te||c==ee;Ue.prototype[r]=function(v){var y=this.clone();return y.__iteratees__.push({iteratee:me(v,3),type:c}),y.__filtered__=y.__filtered__||h,y}}),pn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Ue.prototype[r]=function(){return this[c](1).value()[0]}}),pn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Ue.prototype[r]=function(){return this.__filtered__?new Ue(this):this[c](1)}}),Ue.prototype.compact=function(){return this.filter(Yt)},Ue.prototype.find=function(r){return this.filter(r).head()},Ue.prototype.findLast=function(r){return this.reverse().find(r)},Ue.prototype.invokeMap=Pe(function(r,s){return typeof r=="function"?new Ue(this):this.map(function(c){return Rs(c,r,s)})}),Ue.prototype.reject=function(r){return this.filter(aa(me(r)))},Ue.prototype.slice=function(r,s){r=Ie(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Ue(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Ie(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Ue.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ue.prototype.toArray=function(){return this.take(De)},Hn(Ue.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),v=b[h?"take"+(s=="last"?"Right":""):s],y=h||/^find/.test(s);v&&(b.prototype[s]=function(){var T=this.__wrapped__,O=h?[1]:arguments,M=T instanceof Ue,H=O[0],F=M||Ae(T),V=function(je){var He=v.apply(b,Er([je],O));return h&&ne?He[0]:He};F&&c&&typeof H=="function"&&H.length!=1&&(M=F=!1);var ne=this.__chain__,he=!!this.__actions__.length,_e=y&&!ne,Oe=M&&!he;if(!y&&F){T=Oe?T:new Ue(this);var we=r.apply(T,O);return we.__actions__.push({func:ra,args:[V],thisArg:n}),new vn(we,ne)}return _e&&Oe?r.apply(this,O):(we=this.thru(V),_e?h?we.value()[0]:we.value():we)})}),pn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Ao[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",h=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var v=arguments;if(h&&!this.__chain__){var y=this.value();return s.apply(Ae(y)?y:[],v)}return this[c](function(T){return s.apply(Ae(T)?T:[],v)})}}),Hn(Ue.prototype,function(r,s){var c=b[s];if(c){var h=c.name+"";Qe.call(Mi,h)||(Mi[h]=[]),Mi[h].push({name:s,func:c})}}),Mi[Qo(n,C).name]=[{name:"wrapper",func:n}],Ue.prototype.clone=Wb,Ue.prototype.reverse=Zb,Ue.prototype.value=Vb,b.prototype.at=xw,b.prototype.chain=$w,b.prototype.commit=Ew,b.prototype.next=kw,b.prototype.plant=Sw,b.prototype.reverse=Tw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=Aw,b.prototype.first=b.prototype.head,Es&&(b.prototype[Es]=Cw),b},Oi=Eb();Jr?((Jr.exports=Oi)._=Oi,Kl._=Oi):Tt._=Oi}).call(xt)})(Da,Da.exports);var av=Da.exports;const ME=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],lv=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],BE=[...lv,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],TH=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],jE=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ps=()=>({id:jE(),width:"medium"}),cv=e=>({...ps(),columnType:"Following",...e}),uv=e=>({...ps(),columnType:"Notification",...e}),NE=e=>({...ps(),columnType:"Relays",...e}),dv=()=>NE({name:"日本語",relayUrls:lv,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),fv=e=>({...ps(),columnType:"Posts",...e}),hv=e=>({...ps(),columnType:"Reactions",...e}),$d=e=>({...ps(),columnType:"Search",...e});var Ze;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ze||(Ze={}));var Tu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Tu||(Tu={}));const se=Ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Nr=e=>{switch(typeof e){case"undefined":return se.undefined;case"string":return se.string;case"number":return isNaN(e)?se.nan:se.number;case"boolean":return se.boolean;case"function":return se.function;case"bigint":return se.bigint;case"symbol":return se.symbol;case"object":return Array.isArray(e)?se.array:e===null?se.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?se.promise:typeof Map<"u"&&e instanceof Map?se.map:typeof Set<"u"&&e instanceof Set?se.set:typeof Date<"u"&&e instanceof Date?se.date:se.object;default:return se.unknown}},X=Ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),DE=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class jn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}jn.create=e=>new jn(e);const Gs=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===se.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Ze.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ze.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ze.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${Ze.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Ze.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,Ze.assertNever(e)}return{message:n}};let pv=Gs;function UE(e){pv=e}function Ua(){return pv}const za=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},zE=[];function ae(e,t){const n=za({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Ua(),Gs].filter(i=>!!i)});e.common.issues.push(n)}class Mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Te;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Mt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Te;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Te=Object.freeze({status:"aborted"}),gv=e=>({status:"dirty",value:e}),qt=e=>({status:"valid",value:e}),Au=e=>e.status==="aborted",Iu=e=>e.status==="dirty",Ha=e=>e.status==="valid",Fa=e=>typeof Promise<"u"&&e instanceof Promise;var ve;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(ve||(ve={}));class Gn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const a0=(e,t)=>{if(Ha(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new jn(e.common.issues);return this._error=n,this._error}}};function Re(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Me{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Nr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Mt,ctx:{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Fa(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return a0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Fa(o)?o:Promise.resolve(o));return a0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Dn({schema:this,typeName:xe.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return vr.create(this,this._def)}nullable(){return $i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Nn.create(this,this._def)}promise(){return ts.create(this,this._def)}or(t){return Xs.create([this,t],this._def)}and(t){return eo.create(this,t,this._def)}transform(t){return new Dn({...Re(this._def),schema:this,typeName:xe.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new so({...Re(this._def),innerType:this,defaultValue:n,typeName:xe.ZodDefault})}brand(){return new mv({typeName:xe.ZodBranded,type:this,...Re(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Va({...Re(this._def),innerType:this,catchValue:n,typeName:xe.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return vo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const HE=/^c[^\s-]{8,}$/i,FE=/^[a-z][a-z0-9]*$/,qE=/[0-9A-HJKMNP-TV-Z]{26}/,WE=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,ZE=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,VE=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,KE=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,GE=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,QE=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function YE(e,t){return!!((t==="v4"||!t)&&KE.test(e)||(t==="v6"||!t)&&GE.test(e))}class Bn extends Me{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...ve.errToObj(i)}),this.nonempty=t=>this.min(1,ve.errToObj(t)),this.trim=()=>new Bn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Bn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Bn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==se.string){const a=this._getOrReturnCtx(t);return ae(a,{code:X.invalid_type,expected:se.string,received:a.parsedType}),Te}const i=new Mt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ae(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ae(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?ae(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ae(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")ZE.test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")VE.test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")WE.test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")HE.test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")FE.test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")qE.test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ae(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ae(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ae(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ae(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?QE(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ae(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?YE(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ae(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):Ze.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Bn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...ve.errToObj(t)})}url(t){return this._addCheck({kind:"url",...ve.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...ve.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...ve.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...ve.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...ve.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...ve.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...ve.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...ve.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...ve.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...ve.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...ve.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...ve.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...ve.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...ve.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...ve.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Bn.create=e=>{var t;return new Bn({checks:[],typeName:xe.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Re(e)})};function JE(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class qr extends Me{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==se.number){const a=this._getOrReturnCtx(t);return ae(a,{code:X.invalid_type,expected:se.number,received:a.parsedType}),Te}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="int"?Ze.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ae(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ae(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ae(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?JE(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ae(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ae(i,{code:X.not_finite,message:a.message}),o.dirty()):Ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ve.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ve.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ve.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ve.toString(n))}setLimit(t,n,i,o){return new qr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ve.toString(o)}]})}_addCheck(t){return new qr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:ve.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ve.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ve.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ve.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ve.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ve.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:ve.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ve.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ve.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Ze.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}qr.create=e=>new qr({checks:[],typeName:xe.ZodNumber,coerce:e?.coerce||!1,...Re(e)});class Wr extends Me{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==se.bigint){const a=this._getOrReturnCtx(t);return ae(a,{code:X.invalid_type,expected:se.bigint,received:a.parsedType}),Te}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ae(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ae(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ae(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ve.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ve.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ve.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ve.toString(n))}setLimit(t,n,i,o){return new Wr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ve.toString(o)}]})}_addCheck(t){return new Wr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ve.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ve.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ve.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ve.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ve.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Wr.create=e=>{var t;return new Wr({checks:[],typeName:xe.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Re(e)})};class Qs extends Me{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==se.boolean){const i=this._getOrReturnCtx(t);return ae(i,{code:X.invalid_type,expected:se.boolean,received:i.parsedType}),Te}return qt(t.data)}}Qs.create=e=>new Qs({typeName:xe.ZodBoolean,coerce:e?.coerce||!1,...Re(e)});class wi extends Me{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==se.date){const a=this._getOrReturnCtx(t);return ae(a,{code:X.invalid_type,expected:se.date,received:a.parsedType}),Te}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ae(a,{code:X.invalid_date}),Te}const i=new Mt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ae(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ae(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ze.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new wi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:ve.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:ve.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}wi.create=e=>new wi({checks:[],coerce:e?.coerce||!1,typeName:xe.ZodDate,...Re(e)});class qa extends Me{_parse(t){if(this._getType(t)!==se.symbol){const i=this._getOrReturnCtx(t);return ae(i,{code:X.invalid_type,expected:se.symbol,received:i.parsedType}),Te}return qt(t.data)}}qa.create=e=>new qa({typeName:xe.ZodSymbol,...Re(e)});class Ys extends Me{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return ae(i,{code:X.invalid_type,expected:se.undefined,received:i.parsedType}),Te}return qt(t.data)}}Ys.create=e=>new Ys({typeName:xe.ZodUndefined,...Re(e)});class Js extends Me{_parse(t){if(this._getType(t)!==se.null){const i=this._getOrReturnCtx(t);return ae(i,{code:X.invalid_type,expected:se.null,received:i.parsedType}),Te}return qt(t.data)}}Js.create=e=>new Js({typeName:xe.ZodNull,...Re(e)});class es extends Me{constructor(){super(...arguments),this._any=!0}_parse(t){return qt(t.data)}}es.create=e=>new es({typeName:xe.ZodAny,...Re(e)});class _i extends Me{constructor(){super(...arguments),this._unknown=!0}_parse(t){return qt(t.data)}}_i.create=e=>new _i({typeName:xe.ZodUnknown,...Re(e)});class yr extends Me{_parse(t){const n=this._getOrReturnCtx(t);return ae(n,{code:X.invalid_type,expected:se.never,received:n.parsedType}),Te}}yr.create=e=>new yr({typeName:xe.ZodNever,...Re(e)});class Wa extends Me{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return ae(i,{code:X.invalid_type,expected:se.void,received:i.parsedType}),Te}return qt(t.data)}}Wa.create=e=>new Wa({typeName:xe.ZodVoid,...Re(e)});class Nn extends Me{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==se.array)return ae(n,{code:X.invalid_type,expected:se.array,received:n.parsedType}),Te;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(ae(n,{code:l?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ae(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ae(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Gn(n,l,n.path,u)))).then(l=>Mt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Gn(n,l,n.path,u)));return Mt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Nn({...this._def,minLength:{value:t,message:ve.toString(n)}})}max(t,n){return new Nn({...this._def,maxLength:{value:t,message:ve.toString(n)}})}length(t,n){return new Nn({...this._def,exactLength:{value:t,message:ve.toString(n)}})}nonempty(t){return this.min(1,t)}}Nn.create=(e,t)=>new Nn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:xe.ZodArray,...Re(t)});function Wi(e){if(e instanceof lt){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=vr.create(Wi(i))}return new lt({...e._def,shape:()=>t})}else return e instanceof Nn?new Nn({...e._def,type:Wi(e.element)}):e instanceof vr?vr.create(Wi(e.unwrap())):e instanceof $i?$i.create(Wi(e.unwrap())):e instanceof Qn?Qn.create(e.items.map(t=>Wi(t))):e}class lt extends Me{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Ze.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==se.object){const f=this._getOrReturnCtx(t);return ae(f,{code:X.invalid_type,expected:se.object,received:f.parsedType}),Te}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof yr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const p=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:p._parse(new Gn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof yr){const f=this._def.unknownKeys;if(f==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(f==="strict")u.length>0&&(ae(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:f._parse(new Gn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const p of d){const g=await p.key;f.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return f}).then(f=>Mt.mergeObjectSync(i,f)):Mt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return ve.errToObj,new lt({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=ve.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new lt({...this._def,unknownKeys:"strip"})}passthrough(){return new lt({...this._def,unknownKeys:"passthrough"})}extend(t){return new lt({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new lt({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:xe.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new lt({...this._def,catchall:t})}pick(t){const n={};return Ze.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new lt({...this._def,shape:()=>n})}omit(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new lt({...this._def,shape:()=>n})}deepPartial(){return Wi(this)}partial(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new lt({...this._def,shape:()=>n})}required(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof vr;)a=a._def.innerType;n[i]=a}}),new lt({...this._def,shape:()=>n})}keyof(){return vv(Ze.objectKeys(this.shape))}}lt.create=(e,t)=>new lt({shape:()=>e,unknownKeys:"strip",catchall:yr.create(),typeName:xe.ZodObject,...Re(t)});lt.strictCreate=(e,t)=>new lt({shape:()=>e,unknownKeys:"strict",catchall:yr.create(),typeName:xe.ZodObject,...Re(t)});lt.lazycreate=(e,t)=>new lt({shape:e,unknownKeys:"strip",catchall:yr.create(),typeName:xe.ZodObject,...Re(t)});class Xs extends Me{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new jn(u.ctx.common.issues));return ae(n,{code:X.invalid_union,unionErrors:l}),Te}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:f});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new jn(d));return ae(n,{code:X.invalid_union,unionErrors:u}),Te}}get options(){return this._def.options}}Xs.create=(e,t)=>new Xs({options:e,typeName:xe.ZodUnion,...Re(t)});const ka=e=>e instanceof no?ka(e.schema):e instanceof Dn?ka(e.innerType()):e instanceof ro?[e.value]:e instanceof Zr?e.options:e instanceof io?Object.keys(e.enum):e instanceof so?ka(e._def.innerType):e instanceof Ys?[void 0]:e instanceof Js?[null]:null;class Cl extends Me{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.object)return ae(n,{code:X.invalid_type,expected:se.object,received:n.parsedType}),Te;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ae(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Te)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=ka(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Cl({typeName:xe.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Re(i)})}}function Ru(e,t){const n=Nr(e),i=Nr(t);if(e===t)return{valid:!0,data:e};if(n===se.object&&i===se.object){const o=Ze.objectKeys(t),a=Ze.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Ru(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===se.array&&i===se.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Ru(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===se.date&&i===se.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class eo extends Me{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(Au(a)||Au(l))return Te;const u=Ru(a.value,l.value);return u.valid?((Iu(a)||Iu(l))&&n.dirty(),{status:n.value,value:u.data}):(ae(i,{code:X.invalid_intersection_types}),Te)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}eo.create=(e,t,n)=>new eo({left:e,right:t,typeName:xe.ZodIntersection,...Re(n)});class Qn extends Me{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.array)return ae(i,{code:X.invalid_type,expected:se.array,received:i.parsedType}),Te;if(i.data.length<this._def.items.length)return ae(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Te;!this._def.rest&&i.data.length>this._def.items.length&&(ae(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Gn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Mt.mergeArray(n,l)):Mt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Qn({...this._def,rest:t})}}Qn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Qn({items:e,typeName:xe.ZodTuple,rest:null,...Re(t)})};class to extends Me{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.object)return ae(i,{code:X.invalid_type,expected:se.object,received:i.parsedType}),Te;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Gn(i,u,i.path,u)),value:l._parse(new Gn(i,i.data[u],i.path,u))});return i.common.async?Mt.mergeObjectAsync(n,o):Mt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Me?new to({keyType:t,valueType:n,typeName:xe.ZodRecord,...Re(i)}):new to({keyType:Bn.create(),valueType:t,typeName:xe.ZodRecord,...Re(n)})}}class Za extends Me{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.map)return ae(i,{code:X.invalid_type,expected:se.map,received:i.parsedType}),Te;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Gn(i,u,i.path,[f,"key"])),value:a._parse(new Gn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,p=await d.value;if(f.status==="aborted"||p.status==="aborted")return Te;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,p=d.value;if(f.status==="aborted"||p.status==="aborted")return Te;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}}}}Za.create=(e,t,n)=>new Za({valueType:t,keyType:e,typeName:xe.ZodMap,...Re(n)});class xi extends Me{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.set)return ae(i,{code:X.invalid_type,expected:se.set,received:i.parsedType}),Te;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ae(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ae(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const p of d){if(p.status==="aborted")return Te;p.status==="dirty"&&n.dirty(),f.add(p.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Gn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new xi({...this._def,minSize:{value:t,message:ve.toString(n)}})}max(t,n){return new xi({...this._def,maxSize:{value:t,message:ve.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}xi.create=(e,t)=>new xi({valueType:e,minSize:null,maxSize:null,typeName:xe.ZodSet,...Re(t)});class Vi extends Me{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.function)return ae(n,{code:X.invalid_type,expected:se.function,received:n.parsedType}),Te;function i(u,d){return za({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),Gs].filter(f=>!!f),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return za({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),Gs].filter(f=>!!f),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof ts?qt(async(...u)=>{const d=new jn([]),f=await this._def.args.parseAsync(u,a).catch(m=>{throw d.addIssue(i(u,m)),d}),p=await l(...f);return await this._def.returns._def.type.parseAsync(p,a).catch(m=>{throw d.addIssue(o(p,m)),d})}):qt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new jn([i(u,d.error)]);const f=l(...d.data),p=this._def.returns.safeParse(f,a);if(!p.success)throw new jn([o(f,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Vi({...this._def,args:Qn.create(t).rest(_i.create())})}returns(t){return new Vi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Vi({args:t||Qn.create([]).rest(_i.create()),returns:n||_i.create(),typeName:xe.ZodFunction,...Re(i)})}}class no extends Me{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}no.create=(e,t)=>new no({getter:e,typeName:xe.ZodLazy,...Re(t)});class ro extends Me{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ae(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Te}return{status:"valid",value:t.data}}get value(){return this._def.value}}ro.create=(e,t)=>new ro({value:e,typeName:xe.ZodLiteral,...Re(t)});function vv(e,t){return new Zr({values:e,typeName:xe.ZodEnum,...Re(t)})}class Zr extends Me{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ae(n,{expected:Ze.joinValues(i),received:n.parsedType,code:X.invalid_type}),Te}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ae(n,{received:n.data,code:X.invalid_enum_value,options:i}),Te}return qt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Zr.create(t)}exclude(t){return Zr.create(this.options.filter(n=>!t.includes(n)))}}Zr.create=vv;class io extends Me{_parse(t){const n=Ze.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==se.string&&i.parsedType!==se.number){const o=Ze.objectValues(n);return ae(i,{expected:Ze.joinValues(o),received:i.parsedType,code:X.invalid_type}),Te}if(n.indexOf(t.data)===-1){const o=Ze.objectValues(n);return ae(i,{received:i.data,code:X.invalid_enum_value,options:o}),Te}return qt(t.data)}get enum(){return this._def.values}}io.create=(e,t)=>new io({values:e,typeName:xe.ZodNativeEnum,...Re(t)});class ts extends Me{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.promise&&n.common.async===!1)return ae(n,{code:X.invalid_type,expected:se.promise,received:n.parsedType}),Te;const i=n.parsedType===se.promise?n.data:Promise.resolve(n.data);return qt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ts.create=(e,t)=>new ts({type:e,typeName:xe.ZodPromise,...Re(t)});class Dn extends Me{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===xe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{ae(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Te:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Te:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ha(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Ha(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ze.assertNever(o)}}Dn.create=(e,t,n)=>new Dn({schema:e,typeName:xe.ZodEffects,effect:t,...Re(n)});Dn.createWithPreprocess=(e,t,n)=>new Dn({schema:t,effect:{type:"preprocess",transform:e},typeName:xe.ZodEffects,...Re(n)});class vr extends Me{_parse(t){return this._getType(t)===se.undefined?qt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}vr.create=(e,t)=>new vr({innerType:e,typeName:xe.ZodOptional,...Re(t)});class $i extends Me{_parse(t){return this._getType(t)===se.null?qt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}$i.create=(e,t)=>new $i({innerType:e,typeName:xe.ZodNullable,...Re(t)});class so extends Me{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===se.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}so.create=(e,t)=>new so({innerType:e,typeName:xe.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Re(t)});class Va extends Me{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Fa(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new jn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new jn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Va.create=(e,t)=>new Va({innerType:e,typeName:xe.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Re(t)});class Ka extends Me{_parse(t){if(this._getType(t)!==se.nan){const i=this._getOrReturnCtx(t);return ae(i,{code:X.invalid_type,expected:se.nan,received:i.parsedType}),Te}return{status:"valid",value:t.data}}}Ka.create=e=>new Ka({typeName:xe.ZodNaN,...Re(e)});const XE=Symbol("zod_brand");class mv extends Me{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class vo extends Me{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Te:a.status==="dirty"?(n.dirty(),gv(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Te:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new vo({in:t,out:n,typeName:xe.ZodPipeline})}}const bv=(e,t={},n)=>e?es.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):es.create(),ek={object:lt.lazycreate};var xe;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(xe||(xe={}));const tk=(e,t={message:`Input not instance of ${e.name}`})=>bv(n=>n instanceof e,t),yv=Bn.create,_v=qr.create,nk=Ka.create,rk=Wr.create,wv=Qs.create,ik=wi.create,sk=qa.create,ok=Ys.create,ak=Js.create,lk=es.create,ck=_i.create,uk=yr.create,dk=Wa.create,fk=Nn.create,hk=lt.create,pk=lt.strictCreate,gk=Xs.create,vk=Cl.create,mk=eo.create,bk=Qn.create,yk=to.create,_k=Za.create,wk=xi.create,xk=Vi.create,$k=no.create,Ek=ro.create,kk=Zr.create,Ck=io.create,Sk=ts.create,l0=Dn.create,Tk=vr.create,Ak=$i.create,Ik=Dn.createWithPreprocess,Rk=vo.create,Ok=()=>yv().optional(),Lk=()=>_v().optional(),Pk=()=>wv().optional(),Mk={string:e=>Bn.create({...e,coerce:!0}),number:e=>qr.create({...e,coerce:!0}),boolean:e=>Qs.create({...e,coerce:!0}),bigint:e=>Wr.create({...e,coerce:!0}),date:e=>wi.create({...e,coerce:!0})},Bk=Te;var gt=Object.freeze({__proto__:null,defaultErrorMap:Gs,setErrorMap:UE,getErrorMap:Ua,makeIssue:za,EMPTY_PATH:zE,addIssueToContext:ae,ParseStatus:Mt,INVALID:Te,DIRTY:gv,OK:qt,isAborted:Au,isDirty:Iu,isValid:Ha,isAsync:Fa,get util(){return Ze},get objectUtil(){return Tu},ZodParsedType:se,getParsedType:Nr,ZodType:Me,ZodString:Bn,ZodNumber:qr,ZodBigInt:Wr,ZodBoolean:Qs,ZodDate:wi,ZodSymbol:qa,ZodUndefined:Ys,ZodNull:Js,ZodAny:es,ZodUnknown:_i,ZodNever:yr,ZodVoid:Wa,ZodArray:Nn,ZodObject:lt,ZodUnion:Xs,ZodDiscriminatedUnion:Cl,ZodIntersection:eo,ZodTuple:Qn,ZodRecord:to,ZodMap:Za,ZodSet:xi,ZodFunction:Vi,ZodLazy:no,ZodLiteral:ro,ZodEnum:Zr,ZodNativeEnum:io,ZodPromise:ts,ZodEffects:Dn,ZodTransformer:Dn,ZodOptional:vr,ZodNullable:$i,ZodDefault:so,ZodCatch:Va,ZodNaN:Ka,BRAND:XE,ZodBranded:mv,ZodPipeline:vo,custom:bv,Schema:Me,ZodSchema:Me,late:ek,get ZodFirstPartyTypeKind(){return xe},coerce:Mk,any:lk,array:fk,bigint:rk,boolean:wv,date:ik,discriminatedUnion:vk,effect:l0,enum:kk,function:xk,instanceof:tk,intersection:mk,lazy:$k,literal:Ek,map:_k,nan:nk,nativeEnum:Ck,never:uk,null:ak,nullable:Ak,number:_v,object:hk,oboolean:Pk,onumber:Lk,optional:Tk,ostring:Ok,pipeline:Rk,preprocess:Ik,promise:Sk,record:yk,set:wk,strictObject:pk,string:yv,symbol:sk,transformer:l0,tuple:bk,undefined:ok,union:gk,unknown:ck,void:dk,NEVER:Bk,ZodIssueCode:X,quotelessJson:DE,ZodError:jn});const jk=/^[0-9a-f]{64}$/,oo=e=>{const t=typeof e=="string"&&e.length===64&&jk.test(e);return t||console.warn("invalid id is ignored: ",e),t},Nk=e=>t=>e.safeParse(t).success,Dk=gt.tuple([gt.literal("emoji"),gt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),gt.string().url()]);class Uk{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&oo(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&oo(n))}emojiTags(){return this.tags.filter(Nk(Dk))}taggedPubkeys(){return bi(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return;const[,,i]=n;return i}}class Ed extends Uk{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const zk=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,c0=/^:(\w+):$/,Hk=e=>{if(e.isLikeOrDislike())return{type:"LikeDislike",content:e.content};if(e.isEmoji())return{type:"Emoji",content:e.content};if(e.isCustomEmoji()){const t=e.getShortcode(),n=e.getUrl();if(t!=null&&n!=null)return{type:"CustomEmoji",content:e.content,shortcode:t,url:n}}return{type:"Unknown",content:e.content}};class Fk extends Ed{constructor(t){if(t.kind!==vt.Reaction)throw new TypeError("kind should be 7");super(t)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return zk.test(this.content)}isCustomEmoji(){return c0.test(this.content)}getShortcode(){return this.content.match(c0)?.[1]}getUrl(){const t=this.getShortcode();if(t!=null)return this.getEmojiUrl(t)}toReactionTypes(){return Hk(this)}}const{decode:qk}=go,Wk=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,Zk=/(?:#\[(?<idx>\d+)\])/g,Vk=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,Kk=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,Gk=/:(?<emoji>\w+):/gu,xv=e=>{const t=[...e.matchAll(Wk),...e.matchAll(Zk),...e.matchAll(Vk),...e.matchAll(Kk),...e.matchAll(Gk)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=qk(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},Qk=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&oo(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let Yk=class extends Ed{#e;#t;constructor(t){if(t.kind!==vt.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=xv(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&oo(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&oo(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=Qk(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}};const gi=e=>new Ed(e),kd=e=>new Yk(e),Ga=e=>new Fk(e),Jk=()=>{const e=[...ME];return window.navigator.language.includes("ja")&&e.push(...BE),e},$v=()=>({relayUrls:Jk(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),Xk=e=>JSON.stringify(e),eC=e=>({...$v(),...JSON.parse(e)}),tC=W4(()=>window.localStorage,Xk,eC),[Fi,Jt]=Z4("RabbitConfig",$v(),tC),Xe=()=>{const e=I=>{Jt("relayUrls",k=>bi([...k,I]))},t=I=>{Jt("relayUrls",k=>k.filter($=>$!==I))},n=I=>{Jt("mutedPubkeys",k=>bi([...k,I]))},i=I=>{Jt("mutedPubkeys",k=>k.filter($=>$!==I))},o=I=>{Jt("mutedKeywords",k=>bi([...k,I]))},a=I=>{Jt("mutedKeywords",k=>k.filter($=>$!==I))},l=I=>{Jt("columns",k=>{const $=k.findIndex(R=>R.id===I.id);if($>=0){const R=[...k];return R.splice($,1,I),R}return[...k,I]})},u=(I,k)=>{Jt("columns",$=>{const R=k-1,L=Math.max(Math.min(R,$.length),0),B=$.findIndex(q=>q.id===I);if(B<0||L===B)return $;console.log(B,L);const D=[...$],[ie]=D.splice(B,1);return D.splice(L,0,ie),D})},d=I=>{Jt("columns",k=>k.filter($=>$.id!==I))},f=I=>{Jt("customEmojis",k=>({...k,[I.shortcode]:I}))},p=I=>{Jt("customEmojis",k=>{const $=Object.fromEntries(I.map(R=>[R.shortcode,R]));return{...k,...$}})},g=I=>{Jt("customEmojis",k=>({...k,[I]:void 0}))},m=I=>Fi.customEmojis[I],_=I=>av.sortBy(Object.values(Fi.customEmojis).filter(({shortcode:k})=>k.includes(I)),[k=>k.shortcode.length]),w=I=>Fi.mutedPubkeys.includes(I),E=I=>I.kind===vt.Text?Fi.mutedKeywords.some(k=>I.content.includes(k)):!1;return{config:()=>Fi,setConfig:Jt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:I})=>{if((Fi.columns?.length??0)>0)return;const k=[cv({width:"widest",pubkey:I}),uv({pubkey:I}),fv({name:"自分の投稿",pubkey:I}),hv({name:"自分のリアクション",pubkey:I})];navigator.language.includes("ja")&&k.splice(2,0,dv()),Jt("columns",()=>[...k])},saveEmoji:f,saveEmojis:p,removeEmoji:g,getEmoji:m,searchEmojis:_,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:w,shouldMuteEvent:I=>{const k=gi(I);return w(I.pubkey)||k.taggedPubkeys().some(w)||I.kind===vt.Text&&E(I)}}},Cd=(e,t)=>{const n=e.created_at-t.created_at;return n!==0?n:e.id===t.id?0:e.id>t.id?1:-1},Ev=e=>{if(e.length!==0)return e.length===1?e[0]:e.reduce((t,n)=>Cd(t,n)>0?t:n)},Ou=e=>Array.from(e).sort((t,n)=>-Cd(t,n)),[nC]=Se(new O9({eoseSubTimeout:7500})),Sd=()=>nC,[kv,u0]=Gi({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...kv})},1e3);const Cv=()=>({stats:kv,setActiveSubscriptions:n=>u0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>u0("activeBatchSubscriptions",n)});let d0=0;const rC=()=>{const e=d0;return d0+=1,e};class iC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=rC(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const sC=e=>{const t=qe(e),n=qe(()=>t().batchSize??100),i=qe(()=>t().interval??2e3),[o,a]=Se([]);let l;const u=()=>{const{executor:g}=t(),m=o();m.length>0&&(a([]),g(m)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(m=>[...m,g]):(u(),a([g])),d()},removeTask:g=>{a(m=>m.filter(_=>_!==g))}}};class gs extends iC{addEvent(t){this.updateWith(n=>vd.insertEventIntoDescendingList(n??[],t))}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}latestEventPromise(){return this.toCompletePromise().then(t=>{const n=Ev(t);if(n==null)throw new Error("event not found");return n})}}let Lu=0;const{setActiveBatchSubscriptions:oC}=Cv();setInterval(()=>{oC(Lu)},1e3);const aC=e=>e.kind>=3e4&&e.kind<4e4,lC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{addTask:cC,removeTask:uC}=sC(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach($=>{if($.req.type==="Event"){const R=n.get($.req.eventId)??[];n.set($.req.eventId,[...R,$])}else if($.req.type==="Profile"){const R=t.get($.req.pubkey)??[];t.set($.req.pubkey,[...R,$])}else if($.req.type==="Reactions"){const R=i.get($.req.mentionedEventId)??[];i.set($.req.mentionedEventId,[...R,$])}else if($.req.type==="Reposts"){const R=o.get($.req.mentionedEventId)??[];o.set($.req.mentionedEventId,[...R,$])}else if($.req.type==="ZapReceipts"){const R=a.get($.req.mentionedEventId)??[];o.set($.req.mentionedEventId,[...R,$])}else if($.req.type==="ParameterizedReplaceableEvent"){const R=lC($.req),L=l.get(R)??[];l.set(R,[...L,$])}else if($.req.type==="Followings"){const R=u.get($.req.pubkey)??[];u.set($.req.pubkey,[...R,$])}});const d=[...n.keys()],f=[...t.keys()],p=[...i.keys()],g=[...o.keys()],m=[...a.keys()],_=[...u.keys()],w=[];if(d.length>0&&w.push({ids:d}),f.length>0&&w.push({kinds:[vt.Metadata],authors:f}),p.length>0&&w.push({kinds:[vt.Reaction],"#e":p}),g.length>0&&w.push({kinds:[6],"#e":g}),m.length>0&&w.push({kinds:[9735],"#e":m}),_.length>0&&w.push({kinds:[vt.Contacts],authors:_}),l.size>0&&Array.from(l.values()).forEach(([$])=>{if($.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:R,author:L,identifier:B}}=$;w.push({kinds:[R],authors:[L],"#d":[B]})}),w.length===0)return;const E=($,R)=>{$.forEach(L=>{L.addEvent(R)})},x=()=>{e.forEach($=>{$.complete()})},{config:C}=Xe(),k=Sd()().sub(C().relayUrls,w,{});Lu+=1,k.on("event",$=>{if($.kind===vt.Metadata){const R=t.get($.pubkey)??[];E(R,$);return}if($.kind===vt.Reaction){const R=gi($).lastTaggedEventId();if(R!=null){const L=i.get(R)??[];E(L,$)}}else if($.kind===6){const R=gi($).lastTaggedEventId();if(R!=null){const L=o.get(R)??[];E(L,$)}}else if($.kind===vt.Zap)gi($).eTags().forEach(([,L])=>{const B=o.get(L)??[];E(B,$)});else if($.kind===vt.Contacts){const R=u.get($.pubkey)??[];E(R,$)}else if(aC($)){const R=gi($).findFirstTagByName("d")?.[1];if(R!=null){const L=`${$.kind}:${$.pubkey}:${R}`,B=l.get(L)??[];E(B,$)}else console.warn("identifier is undefined")}else{const R=n.get($.id)??[];R.length>0?E(R,$):console.warn("unknown event received")}}),k.on("eose",()=>{x(),k.unsub(),Lu-=1})}})),Sl=({task:e,signal:t})=>{cC(e),t?.addEventListener("abort",()=>uC(e))};class dC extends Error{}const vs=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new dC(l))},e)});return Promise.race([n,i])},fC=e=>{const t=qe(e),n=os(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new gs({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return Sl({task:d,signal:a}),vs(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},$n=e=>t=>e.some(n=>n==null)?null:t(e),hC=j("<span>"),pC=j('<div class="truncate"> '),ao=e=>{const t=mt(),[n,i]=N4(e,["eventId"]),{shouldMuteEvent:o}=Xe(),{event:a,query:l}=fC(()=>$n([n.eventId])(([d])=>({eventId:d}))),u=()=>{const d=a();return d!=null&&o(d)};return A(Wn,{get fallback(){return(()=>{const d=hC();return S(d,()=>t()("post.failedToFetchEvent"),null),S(d,()=>e.eventId,null),d})()},get children(){return[A(Ye,{get when(){return u()},children:null}),A(Ye,{get when(){return a()},keyed:!0,children:d=>A(ym,D4({event:d},i))}),A(Ye,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=pC(),p=f.firstChild;return S(f,()=>t()("general.loading"),p),S(f,A(Ks,{eventId:d}),null),f})()})]}})},gC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},vC=e=>{try{return gC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},Sv=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve(null);const a=o.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return o.onUpdate(l=>{const u=Ev(l);t.setQueryData(n,d=>d==null||u!=null&&Cd(u,d)>=0?u:void 0)}),Sl({task:o,signal:i}),vs(15e3,`${JSON.stringify(n)}`)(a)},Tv=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve([]);const a=o.toUpdatePromise().catch(()=>[]);return o.onUpdate(l=>{t.setQueryData(n,u=>{if(u==null)return l;const d=av.uniqBy([...u,...l],f=>f.id);return Ou(d)})}),Sl({task:o,signal:i}),vs(15e3,`${JSON.stringify(n)}`)(a)},ms=e=>{const t=ss(),n=qe(e),i=qe(()=>["useProfile",n()]),o=os(i,Sv({taskProvider:([,u])=>{if(u==null)return null;const{pubkey:d}=u;return new gs({type:"Profile",pubkey:d})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:qe(()=>{if(o.data==null)return null;const{content:u}=o.data;return vC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:mC}=go,mo=e=>{try{return mC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Td=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return A(Wn,{get fallback(){return mo(e.pubkey)},get children(){return[A(Ye,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),A(Ye,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",qe(()=>t()?.name)]}})]}})},Av=e=>{const[t,n]=Se(new Date);return vi(()=>{const i=setInterval(()=>{n(new Date)},e().interval);mr(()=>clearInterval(i))}),t},bC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},f0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,yC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},_C=e=>{switch(e.kind){case"today":return f0(e.value);case"yesterday":return`昨日 ${f0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},wC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,xC=(e,t)=>{const n=wC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},h0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),$C=e=>new Date(+e-24*60*60*1e3),Iv=(e,t,n)=>h0(e,t)?n({kind:"today",value:e}):h0(e,$C(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),EC=(e,t=new Date)=>Iv(e,t,yC),kC=(e,t=new Date)=>Iv(e,t,_C),p0=(e,t=new Date,n=bC)=>n(xC(e,t)),g0=Av(()=>({interval:7e3})),v0=Av(()=>({interval:60*1e3})),Rv=()=>{const{config:e}=Xe();return t=>{switch(e().dateFormat){case"absolute-long":return EC(t,v0());case"absolute-short":return kC(t,v0());case"relative":return p0(t,g0());default:return p0(t,g0())}}},[CC,ai]=Se({type:"Closed"}),Kr=()=>({modalState:CC,setModalState:ai,showLogin:()=>{ai({type:"Login"})},showProfile:l=>{ai({type:"Profile",pubkey:l})},showProfileEdit:()=>{ai({type:"ProfileEdit"})},showAddColumn:()=>{ai({type:"AddColumn"})},showAbout:()=>{ai({type:"About"})},closeModal:()=>{ai({type:"Closed"})}}),SC=j('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),TC=e=>{const t=mt(),{showProfile:n}=Kr(),i=Rv(),o=qe(()=>gi(e.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=SC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,m=u.nextSibling;return S(d,A(ov,{})),p.$$click=()=>n(e.event.pubkey),S(p,A(Td,{get pubkey(){return e.event.pubkey}})),S(f,()=>t()("notification.reposted"),null),S(g,()=>i(o().createdAtAsDate())),S(m,A(ao,{get eventId(){return a()}})),l})()};bt(["click"]);const AC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),IC=(e={})=>(()=>{const t=AC();return nt(t,e,!0,!0),t})(),RC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Ov=(e={})=>(()=>{const t=RC();return nt(t,e,!0,!0),t})(),OC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Lv=(e={})=>(()=>{const t=OC();return nt(t,e,!0,!0),t})(),LC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Pv=(e={})=>(()=>{const t=LC();return nt(t,e,!0,!0),t})(),PC=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Mv=(e={})=>(()=>{const t=PC();return nt(t,e,!0,!0),t})(),MC=j('<div class="absolute z-20">'),BC=j('<div><button type="button" class="flex items-center">'),Ad=e=>{let t,n;const[i,o]=Se(!1),[a,l]=Se({}),u=U4(()=>e.children),d=()=>o(!1),f=()=>o(w=>!w),p=w=>{const E=w.target;E!=null&&!n?.contains(E)&&d()},g=()=>{document.addEventListener("mousedown",p)},m=()=>{document.removeEventListener("mousedown",p)},_=()=>{if(t==null||n==null)return;const w=t?.getBoundingClientRect(),E=n?.getBoundingClientRect();let{top:x,left:C}=w;e.position==="left"?C-=w.width:e.position==="right"?C+=w.width:e.position==="top"?(x-=w.height,C-=w.left+w.width/2):(x+=w.height,C+=w.width/2),x=Math.min(x,window.innerHeight-E.height),C=Math.min(C,window.innerWidth-E.width),l({left:`${C}px`,top:`${x}px`})};return vi(()=>{i()?(g(),e.onOpen?.()):(m(),e.onClose?.())}),vi(sl(u,()=>{_()})),vi(()=>{i()&&_()}),_r(()=>{e.ref?.({close:d,elem:n})}),mr(()=>m()),(()=>{const w=BC(),E=w.firstChild;E.$$click=()=>{f(),_()};const x=t;return typeof x=="function"?br(x,E):t=E,S(E,()=>e.button),S(w,A(H4,{get children(){const C=MC(),I=n;return typeof I=="function"?br(I,C):n=C,S(C,u),Be(k=>{const $=!i(),R=!!i(),L=a();return $!==k._v$&&C.classList.toggle("hidden",k._v$=$),R!==k._v$2&&C.classList.toggle("block",k._v$2=R),k._v$3=z4(C,L,k._v$3),k},{_v$:void 0,_v$2:void 0,_v$3:void 0}),C}}),null),w})()};bt(["click"]);const jC=j('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),NC=j('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),DC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=jC(),i=n.firstChild;return i.$$click=t,S(i,()=>e.item.content()),n})()},Bv=e=>{let t;const n=()=>t?.close();return A(Ad,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=NC();return S(i,A(Ht,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>A(DC,{item:o,onClose:n})})),i}})};bt(["click"]);const UC=j('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),m0=j('<span class="truncate">'),zC=j('<img class="h-4 max-w-[3rem]">'),HC=e=>e.type==="LikeDislike"&&e.content==="+",jv=e=>A(Wn,{get fallback(){return(()=>{const t=m0();return S(t,()=>e.reactionTypes.content),t})()},get children(){return[A(Ye,{get when(){return HC(e.reactionTypes)},get children(){const t=UC();return S(t,A(Mv,{})),t}}),A(Ye,{get when(){return e.reactionTypes.type==="Emoji"&&e.reactionTypes},keyed:!0,children:({content:t})=>(()=>{const n=m0();return S(n,t),n})()}),A(Ye,{get when(){return e.reactionTypes.type==="CustomEmoji"&&e.reactionTypes},keyed:!0,children:({shortcode:t,url:n})=>(()=>{const i=zC();return Fe(i,"src",n),Fe(i,"alt",`:${t}:`),i})()})]}});function Nv(e){return e&&e.__esModule?e.default:e}function Pn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Tl,be,Dv,zs,Uv,b0,Qa={},zv=[],FC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Dr(e,t){for(var n in t)e[n]=t[n];return e}function Hv(e){var t=e.parentNode;t&&t.removeChild(e)}function Pu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Tl.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Ca(e,l,i,o,null)}function Ca(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Dv};return o==null&&be.vnode!=null&&be.vnode(a),a}function pr(){return{current:null}}function ns(e){return e.children}function Zn(e,t){this.props=e,this.context=t}function rs(e,t){if(t==null)return e.__?rs(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?rs(e):null}function Fv(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Fv(e)}}function y0(e){(!e.__d&&(e.__d=!0)&&zs.push(e)&&!Ya.__r++||b0!==be.debounceRendering)&&((b0=be.debounceRendering)||Uv)(Ya)}function Ya(){for(var e;Ya.__r=zs.length;)e=zs.sort(function(t,n){return t.__v.__b-n.__v.__b}),zs=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Dr({},a)).__v=a.__v+1,Id(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??rs(a),a.__h),Vv(i,a),a.__e!=l&&Fv(a)))})}function qv(e,t,n,i,o,a,l,u,d,f){var p,g,m,_,w,E,x,C=i&&i.__k||zv,I=C.length;for(n.__k=[],p=0;p<t.length;p++)if((_=n.__k[p]=(_=t[p])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Ca(null,_,null,null,_):Array.isArray(_)?Ca(ns,{children:_},null,null,null):_.__b>0?Ca(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(m=C[p])===null||m&&_.key==m.key&&_.type===m.type)C[p]=void 0;else for(g=0;g<I;g++){if((m=C[g])&&_.key==m.key&&_.type===m.type){C[g]=void 0;break}m=null}Id(e,_,m=m||Qa,o,a,l,u,d,f),w=_.__e,(g=_.ref)&&m.ref!=g&&(x||(x=[]),m.ref&&x.push(m.ref,null,_),x.push(g,_.__c||w,_)),w!=null?(E==null&&(E=w),typeof _.type=="function"&&_.__k===m.__k?_.__d=d=Wv(_,d,e):d=Zv(e,_,m,C,w,d),typeof n.type=="function"&&(n.__d=d)):d&&m.__e==d&&d.parentNode!=e&&(d=rs(m))}for(n.__e=E,p=I;p--;)C[p]!=null&&(typeof n.type=="function"&&C[p].__e!=null&&C[p].__e==n.__d&&(n.__d=rs(i,p+1)),Gv(C[p],C[p]));if(x)for(p=0;p<x.length;p++)Kv(x[p],x[++p],x[++p])}function Wv(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Wv(i,t,n):Zv(n,i,i,o,i.__e,t));return t}function Ja(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ja(n,t)}):t.push(e)),t}function Zv(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function qC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Xa(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Xa(e,a,t[a],n[a],i)}function _0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||FC.test(t)?n:n+"px"}function Xa(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||_0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||_0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?x0:w0,a):e.removeEventListener(t,a?x0:w0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function w0(e){this.l[e.type+!1](be.event?be.event(e):e)}function x0(e){this.l[e.type+!0](be.event?be.event(e):e)}function Id(e,t,n,i,o,a,l,u,d){var f,p,g,m,_,w,E,x,C,I,k,$=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(f=be.__b)&&f(t);try{e:if(typeof $=="function"){if(x=t.props,C=(f=$.contextType)&&i[f.__c],I=f?C?C.props.value:f.__:i,n.__c?E=(p=t.__c=n.__c).__=p.__E:("prototype"in $&&$.prototype.render?t.__c=p=new $(x,I):(t.__c=p=new Zn(x,I),p.constructor=$,p.render=ZC),C&&C.sub(p),p.props=x,p.state||(p.state={}),p.context=I,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),$.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Dr({},p.__s)),Dr(p.__s,$.getDerivedStateFromProps(x,p.__s))),m=p.props,_=p.state,g)$.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if($.getDerivedStateFromProps==null&&x!==m&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(x,I),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(x,p.__s,I)===!1||t.__v===n.__v){p.props=x,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(R){R&&(R.__=t)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(x,p.__s,I),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(m,_,w)})}p.context=I,p.props=x,p.state=p.__s,(f=be.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Dr(Dr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(w=p.getSnapshotBeforeUpdate(m,_)),k=f!=null&&f.type===ns&&f.key==null?f.props.children:f,qv(e,Array.isArray(k)?k:[k],t,n,i,o,a,l,u,d),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),E&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=WC(n.__e,t,n,i,o,a,l,d);(f=be.diffed)&&f(t)}catch(R){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),be.__e(R,t,n)}}function Vv(e,t){be.__c&&be.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){be.__e(i,n.__v)}})}function WC(e,t,n,i,o,a,l,u){var d,f,p,g=n.props,m=t.props,_=t.type,w=0;if(_==="svg"&&(o=!0),a!=null){for(;w<a.length;w++)if((d=a[w])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,a[w]=null;break}}if(e==null){if(_===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,m.is&&m),a=null,u=!1}if(_===null)g===m||u&&e.data===m||(e.data=m);else{if(a=a&&Tl.call(e.childNodes),f=(g=n.props||Qa).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},w=0;w<e.attributes.length;w++)g[e.attributes[w].name]=e.attributes[w].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(qC(e,m,g,o,u),p)t.__k=[];else if(w=t.props.children,qv(e,Array.isArray(w)?w:[w],t,n,i,o&&_!=="foreignObject",a,l,a?a[0]:n.__k&&rs(n,0),u),a!=null)for(w=a.length;w--;)a[w]!=null&&Hv(a[w]);u||("value"in m&&(w=m.value)!==void 0&&(w!==g.value||w!==e.value||_==="progress"&&!w)&&Xa(e,"value",w,g.value,!1),"checked"in m&&(w=m.checked)!==void 0&&w!==e.checked&&Xa(e,"checked",w,g.checked,!1))}return e}function Kv(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){be.__e(i,n)}}function Gv(e,t,n){var i,o;if(be.unmount&&be.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Kv(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){be.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Gv(i[o],t,typeof e.type!="function");n||e.__e==null||Hv(e.__e),e.__e=e.__d=void 0}function ZC(e,t,n){return this.constructor(e,n)}function Qv(e,t,n){var i,o,a;be.__&&be.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Id(t,e=(!i&&n||t).__k=Pu(ns,null,[e]),o||Qa,Qa,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Tl.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),Vv(a,e)}Tl=zv.slice,be={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Dv=0,Zn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Dr({},this.state),typeof e=="function"&&(e=e(Dr({},n),this.props)),e&&Dr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),y0(this))},Zn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y0(this))},Zn.prototype.render=ns,zs=[],Uv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ya.__r=0;var VC=0;function Z(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--VC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return be.vnode&&be.vnode(d),d}function KC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function GC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var zr={set:KC,get:GC};const lu=new Map,QC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function YC(){for(const{v:e,emoji:t}of QC)if(Yv(t))return e}function JC(){return!Yv("🇨🇦")}function Yv(e){if(lu.has(e))return lu.get(e);const t=XC(e);return lu.set(e,t),t}const XC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),p=e.getImageData(d,f,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var $0={latestVersion:YC,noCountryFlags:JC};const Mu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function eS(e){It||(It=zr.get("frequently")||{});const t=e.id||e;t&&(It[t]||(It[t]=0),It[t]+=1,zr.set("last",t),zr.set("frequently",It))}function tS({maxFrequentRows:e,perLine:t}){if(!e)return[];It||(It=zr.get("frequently"));let n=[];if(!It){It={};for(let a in Mu.slice(0,t)){const l=Mu[a];It[l]=t-a,n.push(l)}return n}const i=e*t,o=zr.get("last");for(let a in It)n.push(a);if(n.sort((a,l)=>{const u=It[l],d=It[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete It[l];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),zr.set("frequently",It)}return n}var Jv={add:eS,get:tS,DEFAULTS:Mu},Xv={};Xv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var gr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,Ne=null;const cu={};async function E0(e){if(cu[e])return cu[e];const n=await(await fetch(e)).json();return cu[e]=n,n}let uu=null,em=null,tm=!1;function Al(e,{caller:t}={}){return uu||(uu=new Promise(n=>{em=n})),e?nS(e):t&&!tm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),uu}async function nS(e){tm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=gr.emojiVersion.value),n||(n=gr.set.value),i||(i=gr.locale.value),Ne)Ne.categories=Ne.categories.filter(d=>!d.name);else{Ne=(typeof e.data=="function"?await e.data():e.data)||await E0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Ne.emoticons={},Ne.natives={},Ne.categories.unshift({id:"frequent",emojis:[]});for(const d in Ne.aliases){const f=Ne.aliases[d],p=Ne.emojis[f];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}Ne.originalCategories=Ne.categories}if(Pt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Nv(Xv):await E0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const f=e.custom[d],p=e.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Pt.categories.custom),p&&!f.icon&&(f.target=p.target||p),Ne.categories.push(f);for(const g of f.emojis)Ne.emojis[g.id]=g}}e.categories&&(Ne.categories=Ne.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,f)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(f.id);return p-g}));let o=null,a=null;n=="native"&&(o=$0.latestVersion(),a=e.noCountryFlags||$0.noCountryFlags());let l=Ne.categories.length,u=!1;for(;l--;){const d=Ne.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:m}=e;g=g>=0?g:gr.maxFrequentRows.value,m||(m=gr.perLine.value),d.emojis=Jv.get({maxFrequentRows:g,perLine:m})}if(!d.emojis||!d.emojis.length){Ne.categories.splice(l,1);continue}const{categoryIcons:f}=e;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],m=g.id?g:Ne.emojis[g],_=()=>{d.emojis.splice(p,1)};if(!m||e.exceptEmojis&&e.exceptEmojis.includes(m.id)){_();continue}if(o&&m.version>o){_();continue}if(a&&d.id=="flags"&&!aS.includes(m.id)){_();continue}if(!m.search){if(u=!0,m.search=","+[[m.id,!1],[m.name,!0],[m.keywords,!1],[m.emoticons,!1]].map(([E,x])=>{if(E)return(Array.isArray(E)?E:[E]).map(C=>(x?C.split(/[-|_|\s]+/):[C]).map(I=>I.toLowerCase())).flat()}).flat().filter(E=>E&&E.trim()).join(","),m.emoticons)for(const E of m.emoticons)Ne.emoticons[E]||(Ne.emoticons[E]=m.id);let w=0;for(const E of m.skins){if(!E)continue;w++;const{native:x}=E;x&&(Ne.natives[x]=m.id,m.search+=`,${x}`);const C=w==1?"":`:skin-tone-${w}:`;E.shortcodes=`:${m.id}:${C}`}}}}u&&Ki.reset(),em()}function nm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=rm(o,e,t,n);return i}function rm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const rS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Bu=null;function iS(e){return e.id?e:Ne.emojis[e]||Ne.emojis[Ne.aliases[e]]||Ne.emojis[Ne.natives[e]]}function sS(){Bu=null}async function oS(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Al(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Bu||(Bu=Object.values(Ne.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],p=l[d.id];return f==p?u.id.localeCompare(d.id):f-p}),a.length>t&&(a=a.slice(0,t))),a}var Ki={search:oS,get:iS,reset:sS,SHORTCODES_REGEX:rS};const aS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function lS(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function cS(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function uS(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const dS={activity:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),Z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),Z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),Z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),Z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},fS={loupe:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var el={categories:dS,search:fS};function ju(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Ki.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Ki.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return Z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?Z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?Z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):Z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*Ne.sheet.cols}% ${100*Ne.sheet.rows}%`,backgroundPosition:`${100/(Ne.sheet.cols-1)*o.x}% ${100/(Ne.sheet.rows-1)*o.y}%`}})})}const hS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class im extends hS{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=rm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class pS extends im{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var sm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:gr.set,skin:gr.skin};class om extends im{async connectedCallback(){const t=nm(this.props,sm,this);t.element=this,t.ref=n=>{this.component=n},await Al(),!this.disconnected&&Qv(Z(ju,{...t}),this)}constructor(t){super(t)}}Pn(om,"Props",sm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",om);var k0,Nu=[],C0=be.__b,S0=be.__r,T0=be.diffed,A0=be.__c,I0=be.unmount;function gS(){var e;for(Nu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Nu.pop();)if(e.__P)try{e.__H.__h.forEach(Sa),e.__H.__h.forEach(Du),e.__H.__h=[]}catch(t){e.__H.__h=[],be.__e(t,e.__v)}}be.__b=function(e){C0&&C0(e)},be.__r=function(e){S0&&S0(e);var t=e.__c.__H;t&&(t.__h.forEach(Sa),t.__h.forEach(Du),t.__h=[])},be.diffed=function(e){T0&&T0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Nu.push(t)!==1&&k0===be.requestAnimationFrame||((k0=be.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),R0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);R0&&(i=requestAnimationFrame(o))})(gS))},be.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Sa),n.__h=n.__h.filter(function(i){return!i.__||Du(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],be.__e(i,n.__v)}}),A0&&A0(e,t)},be.unmount=function(e){I0&&I0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Sa(i)}catch(o){t=o}}),t&&be.__e(t,n.__v))};var R0=typeof requestAnimationFrame=="function";function Sa(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Du(e){e.__c=e.__()}function vS(e,t){for(var n in t)e[n]=t[n];return e}function O0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function tl(e){this.props=e}(tl.prototype=new Zn).isPureReactComponent=!0,tl.prototype.shouldComponentUpdate=function(e,t){return O0(this.props,e)||O0(this.state,t)};var L0=be.__b;be.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),L0&&L0(e)};var mS=be.__e;be.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}mS(e,t,n)};var P0=be.unmount;function du(){this.__u=0,this.t=null,this.__b=null}function am(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ba(){this.u=null,this.o=null}be.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),P0&&P0(e)},(du.prototype=new Zn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=am(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(m,_,w){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function(E){return g(E,_,w)}),m.__c&&m.__c.__P===_&&(m.__e&&w.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=w)),m}(f,f.__c.__P,f.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},du.prototype.componentWillUnmount=function(){this.t=[]},du.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=vS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Pu(ns,null,e.fallback);return o&&(o.__h=null),[Pu(ns,null,t.__e?null:e.children),o]};var M0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ba.prototype=new Zn).__e=function(e){var t=this,n=am(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),M0(t,e,i)):o()};n?n(a):a()}},ba.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ja(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ba.prototype.componentDidUpdate=ba.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){M0(e,n,t)})};var bS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,yS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,_S=typeof document<"u",wS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Zn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Zn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var B0=be.event;function xS(){}function $S(){return this.cancelBubble}function ES(){return this.defaultPrevented}be.event=function(e){return B0&&(e=B0(e)),e.persist=xS,e.isPropagationStopped=$S,e.isDefaultPrevented=ES,e.nativeEvent=e};var j0={configurable:!0,get:function(){return this.class}},N0=be.vnode;be.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];_S&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!wS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&yS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ja(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ja(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(j0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",j0))}e.$$typeof=bS,N0&&N0(e)};var D0=be.__r;be.__r=function(e){D0&&D0(e),e.__c};const kS={light:"outline",dark:"solid"};class CS extends tl{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return Z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return Z("img",{src:n.src})}const i=el.categories[t.id]||el.categories.custom,o=this.props.icons=="auto"?kS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return Z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:Z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),Z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),Z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Ne.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class SS extends tl{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const ya={rowsPerRender:10};class TS extends Zn{getInitialState(t=this.props){return{skin:zr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:pr(),navigation:pr(),scroll:pr(),search:pr(),searchInput:pr(),skinToneButton:pr(),skinToneRadio:pr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Al(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Ne;this.refs.categories=new Map;const n=Ne.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%ya.rowsPerRender?{}:pr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:pr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Ki.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(ya.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*ya.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const p=(()=>{if(d==0&&f==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const m=i?-1:1;if(f+=m,!g[f]){if(d+=m,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=uS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Jv.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),zr.set("skin",t)}renderNav(){return Z(CS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return Z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[Z("div",{class:"flex flex-middle flex-grow",children:[Z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:Z(ju,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),Z("div",{class:`margin-${this.dir[0]}`,children:t||n?Z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[Z("div",{class:"preview-title ellipsis",children:t?t.name:Pt.search_no_results_1}),Z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Pt.search_no_results_2})]}):Z("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,f=lS(this.state.pos,n),p=n.concat(t.id).join("");return Z(SS,{selected:f,skin:l,size:a,children:Z("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[Z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),Z(ju,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return Z("div",{children:[Z("div",{class:"spacer"}),Z("div",{class:"flex flex-middle",children:[Z("div",{class:"search relative flex-grow",children:[Z("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),Z("span",{class:"icon loupe flex",children:el.search.loupe}),this.state.searchResults&&Z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:el.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?Z("div",{class:"category",ref:this.refs.search,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),Z("div",{children:t.length?t.map((n,i)=>Z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):Z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&Z("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Ne,n=!!this.state.searchResults,i=this.getPerLine();return Z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return Z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),Z("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%ya.rowsPerRender,p=this.state.visibleRows[f],g="current"in u?u:void 0;if(!p&&!g)return null;const m=d*i,_=m+i,w=o.emojis.slice(m,_);return w.length<i&&w.push(...new Array(i-w.length)),Z("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&w.map((E,x)=>{if(!E)return Z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=Ki.get(E);return this.renderEmojiButton(C,{pos:[u.index,x],posinset:u.posinset+x,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:Z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:Z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:Z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return Z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),Z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return Z("div",{children:[Z("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Pt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),Z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[Z("span",{class:`skin-tone skin-tone-${l}`}),Z("span",{class:"margin-small-lr",children:Pt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return Z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&Z("div",{class:"padding-lr",children:this.renderSearch()}),Z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:Z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Pn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Pn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Pn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Pn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Pn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Ki.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),Pn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Pn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Pn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Pn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await cS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Rd extends pS{async connectedCallback(){const t=nm(this.props,gr,this);t.element=this,t.ref=n=>{this.component=n},await Al(t),!this.disconnected&&Qv(Z(TS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Nv(lm)})}}Pn(Rd,"Props",gr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Rd);var lm={};lm=`:host {
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

`;const cm=e=>{let t,n;const{config:i}=Xe(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new Rd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),e.onEmojiSelect?.(d),t?.close()}}),t?.elem?.appendChild(n)};return mr(()=>{o()}),A(Ad,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:a,onClose:o})},AS=j("<div>"),IS=j('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),RS=j("<br>"),OS=j("<span>: "),LS=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),PS=e=>{const t=mt(),[n,i]=Se(!1);return A(pe,{get when(){return!e.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=LS();return o.$$click=()=>i(!0),S(o,()=>t()("post.contentWarning.show"),null),S(o,A(pe,{get when(){return e.contentWarning.reason!=null},get children(){return[RS(),(()=>{const a=OS(),l=a.firstChild;return S(a,()=>t()("post.contentWarning.reason"),l),S(a,()=>e.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=AS();return S(o,()=>e.children),o})(),A(pe,{get when(){return e.contentWarning.contentWarning},get children(){const o=IS();return o.$$click=()=>i(!1),o}})]}})};bt(["click"]);const um=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return A(pe,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${mo(e.pubkey)}`},get children(){return["@",qe(()=>t()?.name??e.pubkey)]}})},MS=j('<a target="_blank" rel="noreferrer noopener">'),bo=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return A(pe,{get when(){return t()},get fallback(){return e.href},get children(){const n=MS();return S(n,()=>e.children??e.href),Be(i=>{const o=e.class,a=e.href;return o!==i._v$&&jg(n,i._v$=o),a!==i._v$2&&Fe(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},BS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},jS=e=>{try{const t=new URL(e);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(t.pathname)}catch{return!1}},NS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},DS=j('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),US=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),zS=e=>{let t;const n=mt(),[i,o]=Se(e.initialHidden);return A(pe,{get when(){return!i()},get fallback(){return(()=>{const a=US();return a.$$click=()=>o(!1),S(a,()=>n()("post.showImage")),a})()},get children(){return A(bo,{class:"my-2 block",get href(){return e.url},get children(){const a=DS(),l=t;return typeof l=="function"?br(l,a):t=a,Be(u=>{const d=NS(e.url),f=e.url;return d!==u._v$&&Fe(a,"src",u._v$=d),f!==u._v$2&&Fe(a,"alt",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),a}})}})};bt(["click"]);const HS=j('<div class="my-1 rounded border p-1">'),FS=e=>A(pe,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return A(Ks,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=HS();return S(t,A(ao,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[vt.Text]}})),t}}),qS=j('<button class="inline text-blue-500 underline">'),fu=e=>{const{showProfile:t}=Kr(),n=()=>{t(e.pubkey)};return(()=>{const i=qS();return i.$$click=n,S(i,A(um,{get pubkey(){return e.pubkey}})),i})()};bt(["click"]);const WS=j('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),ZS=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),VS=e=>{let t;const n=mt(),[i,o]=Se(e.initialHidden);return A(pe,{get when(){return!i()},get fallback(){return(()=>{const a=ZS();return a.$$click=()=>o(!1),S(a,()=>n()("post.showVideo")),a})()},get children(){return A(bo,{class:"my-2 block",get href(){return e.url},get children(){const a=WS(),l=a.firstChild,u=t;return typeof u=="function"?br(u,a):t=a,S(l,()=>n()("post.download")),Be(d=>{const f=e.url,p=e.url;return f!==d._v$&&Fe(a,"src",d._v$=f),p!==d._v$2&&Fe(l,"href",d._v$2=p),d},{_v$:void 0,_v$2:void 0}),a}})}})};bt(["click"]);const[Od,KS]=Se({}),dm=e=>{Od()[e]==null&&KS(t=>({...t,[e]:new MessageChannel}))},GS=e=>{const t=()=>Od()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",f,!1),t().port1.start()});return _r(()=>{const{id:o}=e();dm(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},QS=e=>{const t=qe(e),n=()=>Od()[t().id];_r(()=>{const{id:i}=t();dm(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=t().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const m={requestId:u,ok:!0,response:g};o.postMessage(m)}).catch(g=>{const m={requestId:u,ok:!1,error:g};o.postMessage(m)})};o.addEventListener("message",a),o.start(),mr(()=>{o.removeEventListener("message",a)})})},Ld=()=>GS(()=>({id:"CommandChannel"})),YS=e=>{QS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},hu=j("<span>"),U0=j('<div class="my-1 rounded border p-1">'),JS=j('<span class="text-blue-500 underline">'),XS=j('<button class="text-blue-500 underline">'),eT=j('<img class="inline-block h-8 max-w-[128px] align-middle">'),tT=e=>{const{config:t,saveColumn:n}=Xe(),i=Ld(),o=()=>kd(e.event),a=l=>{n($d({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return A(Ht,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=hu();return S(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!t().showMedia||o().contentWarning().contentWarning||!e.embedding;return BS(l.content)?A(zS,{get url(){return l.content},get initialHidden(){return u()}}):jS(l.content)?A(VS,{get url(){return l.content},get initialHidden(){return u()}}):A(bo,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=hu();return S(d,()=>l.content),d})();if(u.type==="MentionedUser")return A(fu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?A(FS,{mentionedEvent:u}):A(Ks,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=U0();return S(u,A(ao,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[vt.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=U0();return S(u,A(ao,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?A(fu,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?A(fu,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=JS();return S(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=XS();return u.$$click=()=>a(l.content),S(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=hu();return S(d,()=>l.content),d})():(()=>{const d=eT();return Fe(d,"src",u),Be(f=>{const p=l.content,g=l.shortcode;return p!==f._v$&&Fe(d,"alt",f._v$=p),g!==f._v$2&&Fe(d,"title",f._v$2=g),f},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};bt(["click"]);const nT=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),is=(e={})=>(()=>{const t=nT();return nt(t,e,!0,!0),t})(),rT=j('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),iT=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=rT();i.$$click=n;const o=t;return typeof o=="function"?br(o,i):t=i,S(i,()=>e.children),i})()};bt(["click"]);const sT=j('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Ci=e=>A(iT,{onClose:()=>e.onClose?.(),get children(){const t=sT(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),S(i,A(pe,{get when(){return e?.closeButton},get fallback(){return A(is,{})},keyed:!0,children:a=>a()})),S(o,()=>e.children),t}});bt(["click"]);const oT=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),aT=(e={})=>(()=>{const t=oT();return nt(t,e,!0,!0),t})(),lT=j('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),cT=j('<div class="relative inline-block"><button type="button">'),uT=e=>{const[t,n]=Se(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=cT(),a=o.firstChild;return a.$$click=i,S(a,A(aT,{})),S(o,A(pe,{get when(){return t()},get children(){return lT()}}),null),Be(()=>jg(a,e.class)),o})()};bt(["click"]);const dT=j('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),fT=e=>{const t=qe(()=>JSON.stringify(e.event,null,2));return A(Ci,{get onClose(){return e.onClose},get children(){const n=dT(),i=n.firstChild,o=i.nextSibling;return S(i,t),S(o,A(uT,{class:"h-4 w-4",get text(){return t()}})),n}})},hT=j('<div class="profile-name truncate pr-1 font-bold hover:underline">'),pT=j('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),gT=j('<img alt="icon" class="h-full w-full rounded object-cover">'),vT=e=>{const{profile:t,query:n}=ms(()=>({pubkey:e.pubkey}));return(()=>{const i=pT(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.firstChild,d=u.firstChild,f=d.firstChild;return o.$$click=p=>{p.preventDefault(),e.onShowProfile?.()},S(o,A(pe,{get when(){return t()?.picture},keyed:!0,children:p=>(()=>{const g=gT();return Fe(g,"src",p),g})()})),u.$$click=p=>{p.preventDefault(),e?.onShowProfile?.()},S(d,A(pe,{get when(){return(t()?.display_name?.length??0)>0},get children(){const p=hT();return S(p,()=>t()?.display_name),p}}),f),S(f,A(pe,{get when(){return t()?.name},get fallback(){return`@${mo(e.pubkey)}`},keyed:!0,children:p=>`@${p}`})),i})()};bt(["click"]);const mT=j('<div class="px-4 py-2"><div> 件</div><div>'),bT=j('<div class="flex border-t py-1">'),Uu=e=>{const{showProfile:t}=Kr();return A(Ci,{get onClose(){return e.onClose},get children(){const n=mT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return S(i,()=>e.data.length,o),S(a,A(Ht,{get each(){return e.data},children:l=>{const u=()=>e.pubkeyExtractor(l);return(()=>{const d=bT();return S(d,A(pe,{get when(){return e.renderInfo},keyed:!0,children:f=>f(l)}),null),S(d,A(vT,{get pubkey(){return u()},onShowProfile:()=>t(u())}),null),d})()}})),n}})},yT=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),fm=(e={})=>(()=>{const t=yT();return nt(t,e,!0,!0),t})(),_T=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),wT=(e={})=>(()=>{const t=_T();return nt(t,e,!0,!0),t})(),xT=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),$T=(e={})=>(()=>{const t=xT();return nt(t,e,!0,!0),t})();var Pd={},yo={},hm={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,p){this.fn=d,this.context=f,this.once=p||!1}function a(d,f,p,g,m){if(typeof p!="function")throw new TypeError("The listener must be a function");var _=new o(p,g||d,m),w=n?n+f:f;return d._events[w]?d._events[w].fn?d._events[w]=[d._events[w],_]:d._events[w].push(_):(d._events[w]=_,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],p,g;if(this._eventsCount===0)return f;for(g in p=this._events)t.call(p,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(p)):f},u.prototype.listeners=function(f){var p=n?n+f:f,g=this._events[p];if(!g)return[];if(g.fn)return[g.fn];for(var m=0,_=g.length,w=new Array(_);m<_;m++)w[m]=g[m].fn;return w},u.prototype.listenerCount=function(f){var p=n?n+f:f,g=this._events[p];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,p,g,m,_,w){var E=n?n+f:f;if(!this._events[E])return!1;var x=this._events[E],C=arguments.length,I,k;if(x.fn){switch(x.once&&this.removeListener(f,x.fn,void 0,!0),C){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,p),!0;case 3:return x.fn.call(x.context,p,g),!0;case 4:return x.fn.call(x.context,p,g,m),!0;case 5:return x.fn.call(x.context,p,g,m,_),!0;case 6:return x.fn.call(x.context,p,g,m,_,w),!0}for(k=1,I=new Array(C-1);k<C;k++)I[k-1]=arguments[k];x.fn.apply(x.context,I)}else{var $=x.length,R;for(k=0;k<$;k++)switch(x[k].once&&this.removeListener(f,x[k].fn,void 0,!0),C){case 1:x[k].fn.call(x[k].context);break;case 2:x[k].fn.call(x[k].context,p);break;case 3:x[k].fn.call(x[k].context,p,g);break;case 4:x[k].fn.call(x[k].context,p,g,m);break;default:if(!I)for(R=1,I=new Array(C-1);R<C;R++)I[R-1]=arguments[R];x[k].fn.apply(x[k].context,I)}}return!0},u.prototype.on=function(f,p,g){return a(this,f,p,g,!1)},u.prototype.once=function(f,p,g){return a(this,f,p,g,!0)},u.prototype.removeListener=function(f,p,g,m){var _=n?n+f:f;if(!this._events[_])return this;if(!p)return l(this,_),this;var w=this._events[_];if(w.fn)w.fn===p&&(!m||w.once)&&(!g||w.context===g)&&l(this,_);else{for(var E=0,x=[],C=w.length;E<C;E++)(w[E].fn!==p||m&&!w[E].once||g&&w[E].context!==g)&&x.push(w[E]);x.length?this._events[_]=x.length===1?x[0]:x:l(this,_)}return this},u.prototype.removeAllListeners=function(f){var p;return f?(p=n?n+f:f,this._events[p]&&l(this,p)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u})(hm);var Il=hm.exports,Md={},_o={};Object.defineProperty(_o,"__esModule",{value:!0});_o.SearchResult=void 0;const ET=/\$&/g,kT=/\$(\d)/g;class CT{constructor(t,n,i){this.data=t,this.term=n,this.strategy=i}getReplacementData(t){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(t);if(o==null||o.index==null)return null;const a=n.replace(ET,o[0]).replace(kT,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(t,n){const i=this.getReplacementData(t);if(i!==null)return n=i.afterCursor+n,[[t.slice(0,i.start),i.beforeCursor,t.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}_o.SearchResult=CT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Strategy=e.DEFAULT_INDEX=void 0;const t=_o;e.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:e.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(p=>new t.SearchResult(p,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}e.Strategy=n})(Md);Object.defineProperty(yo,"__esModule",{value:!0});yo.Completer=void 0;const ST=Il,TT=Md;class AT extends ST.EventEmitter{constructor(t){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=t.map(n=>new TT.Strategy(n))}destroy(){return this.strategies.forEach(t=>t.destroy()),this}run(t){for(const n of this.strategies)if(n.execute(t,this.handleQueryResult))return;this.handleQueryResult([])}}yo.Completer=AT;var Bd={},bs={};Object.defineProperty(bs,"__esModule",{value:!0});bs.createCustomEvent=void 0;const IT=typeof window<"u"&&!!window.CustomEvent,RT=(e,t)=>{if(IT)return new CustomEvent(e,t);const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,t?.cancelable||!1,t?.detail||void 0),n};bs.createCustomEvent=RT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Dropdown=e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=e.DEFAULT_DROPDOWN_CLASS_NAME=e.DEFAULT_DROPDOWN_PLACEMENT=e.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const t=Il,n=bs;e.DEFAULT_DROPDOWN_MAX_COUNT=10,e.DEFAULT_DROPDOWN_PLACEMENT="auto",e.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends t.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||e.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||e.DEFAULT_DROPDOWN_MAX_COUNT).map((f,p)=>{var g;return new o(this,p,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const p=this.option.placement||e.DEFAULT_DROPDOWN_PLACEMENT;if(p==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}p==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(p=>p.data)):d||"",this.el.appendChild(f),this}}e.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=m=>{m.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const p=document.createElement("li");p.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),p.appendChild(g),p.addEventListener("click",this.onClick),this.el=p}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Bd);var Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.Editor=void 0;const OT=Il,_a=bs;class LT extends OT.EventEmitter{destroy(){return this}applySearchResult(t){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(t){const n=(0,_a.createCustomEvent)("move",{cancelable:!0,detail:{code:t}});return this.emit("move",n),n}emitEnterEvent(){const t=(0,_a.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",t),t}emitChangeEvent(){const t=(0,_a.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",t),t}emitEscEvent(){const t=(0,_a.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",t),t}getCode(t){return t.keyCode===9||t.keyCode===13?"ENTER":t.keyCode===27?"ESC":t.keyCode===38?"UP":t.keyCode===40||t.keyCode===78&&t.ctrlKey?"DOWN":t.keyCode===80&&t.ctrlKey?"UP":"OTHER"}}Rl.Editor=LT;var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.Textcomplete=void 0;const PT=Il,MT=Bd,BT=yo,jT=["show","shown","render","rendered","selected","hidden","hide"];class NT extends PT.EventEmitter{constructor(t,n,i){super(),this.editor=t,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new BT.Completer(n),this.dropdown=MT.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(t=!0){return this.completer.destroy(),this.dropdown.destroy(),t&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(t){return this.isQueryInFlight?this.nextPendingQuery=t:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(t)),this}startListening(){var t;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of jT)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.addEventListener("resize",this.handleResize)}stopListening(){var t;(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Ol.Textcomplete=NT;(function(e){var t=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(yo,e),n(Bd,e),n(Rl,e),n(_o,e),n(Md,e),n(Ol,e),n(bs,e)})(Pd);var pm={},Ll={};function gm(e,t,n){const i=e.value,o=t+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),e.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(e.focus(),!document.execCommand("insertText",!1,d)){e.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),e.dispatchEvent(f)}return e.setSelectionRange(t.length,t.length),a.focus(),e}function DT(e,t,n){const i=e.selectionEnd,o=e.value.substr(0,e.selectionStart)+t,a=e.value.substring(e.selectionStart,i)+(n||"")+e.value.substr(i);return gm(e,o,a),e.selectionEnd=i+t.length,e}const UT=Object.freeze(Object.defineProperty({__proto__:null,update:gm,wrapCursor:DT},Symbol.toStringTag,{value:"Module"})),zT=lo(UT);var vm={exports:{}};(function(e){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var p=document.createElement("div");p.id="input-textarea-caret-position-mirror-div",document.body.appendChild(p);var g=p.style,m=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,_=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",_||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),t.forEach(function(x){_&&x==="lineHeight"?g.lineHeight=m.height:g[x]=m[x]}),i?a.scrollHeight>parseInt(m.height)&&(g.overflowY="scroll"):g.overflow="hidden",p.textContent=a.value.substring(0,l),_&&(p.textContent=p.textContent.replace(/\s/g," "));var w=document.createElement("span");w.textContent=a.value.substring(l)||".",p.appendChild(w);var E={top:w.offsetTop+parseInt(m.borderTopWidth),left:w.offsetLeft+parseInt(m.borderLeftWidth),height:parseInt(m.lineHeight)};return d?w.style.backgroundColor="#aaa":document.body.removeChild(p),E}e.exports=o})()})(vm);var HT=vm.exports,mm={},Pl={};Object.defineProperty(Pl,"__esModule",{value:!0});Pl.calculateElementOffset=void 0;const FT=e=>{const t=e.getBoundingClientRect(),n=e.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:t.top+i.pageYOffset,left:t.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Pl.calculateElementOffset=FT;var Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});Ml.getLineHeightPx=void 0;const qT="0".charCodeAt(0),WT="9".charCodeAt(0),z0=e=>qT<=e&&e<=WT,ZT=e=>{const t=getComputedStyle(e),n=t.lineHeight;if(z0(n.charCodeAt(0))){const i=parseFloat(n);return z0(n.charCodeAt(n.length-1))?i*parseFloat(t.fontSize):i}return VT(e.nodeName,t)};Ml.getLineHeightPx=ZT;const VT=(e,t)=>{const n=document.body;if(!n)return 0;const i=document.createElement(e);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:t.fontSize,fontFamily:t.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Bl={};Object.defineProperty(Bl,"__esModule",{value:!0});Bl.isSafari=void 0;const KT=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Bl.isSafari=KT;(function(e){var t=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(Pl,e),n(Ml,e),n(Bl,e)})(mm);var GT=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ll,"__esModule",{value:!0});Ll.TextareaEditor=void 0;const QT=zT,YT=GT(HT),H0=Pd,F0=mm;class JT extends H0.Editor{constructor(t){super(),this.el=t,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(t){const n=this.getBeforeCursor();if(n!=null){const i=t.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,QT.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,H0.createCustomEvent)("input")))}}getCursorOffset(){const t=(0,F0.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,F0.getLineHeightPx)(this.el),a=t.top-n.top+i.top+o,l=t.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,YT.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}Ll.TextareaEditor=JT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.TextareaEditor=void 0;var t=Ll;Object.defineProperty(e,"TextareaEditor",{enumerable:!0,get:function(){return t.TextareaEditor}})})(pm);const XT=j('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),eA=()=>{const{searchEmojis:e}=Xe(),[t,n]=Se();return vi(()=>{const i=t();if(i==null)return;const o=new pm.TextareaEditor(i),a=new Pd.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(e(l))},template:l=>(()=>{const d=XT(),f=d.firstChild,p=f.nextSibling;return S(p,()=>l.shortcode),Be(g=>{const m=l.url,_=l.shortcode;return m!==g._v$&&Fe(f,"src",g._v$=m),_!==g._v$2&&Fe(f,"alt",g._v$2=_),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});mr(()=>{a.destroy()})}),{elementRef:n}},tA=e=>Math.floor(+e/1e3),li=()=>tA(new Date),nA=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),rA=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...f,...p]},jl=()=>{const e=Sd(),t=async(d,f)=>{const p={...f};if(p.id=_l(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async m=>{const w=(await e().ensureRelay(m)).publish(g);return nA(w,m)})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:p,content:g}=d,m=rA(d),_={kind:1,pubkey:p,created_at:li(),tags:m,content:g};return t(f,_)},publishReaction:async({relayUrls:d,pubkey:f,eventId:p,reactionTypes:g,notifyPubkey:m})=>{const _=[["e",p,""],["p",m]];g.type==="CustomEmoji"&&_.push(["emoji",g.shortcode,g.url]);const w={kind:7,pubkey:f,created_at:li(),tags:_,content:g.content};return t(d,w)},publishRepost:async({relayUrls:d,pubkey:f,eventId:p,notifyPubkey:g})=>{const m={kind:6,pubkey:f,created_at:li(),tags:[["e",p,""],["p",g]],content:""};return t(d,m)},updateProfile:async({relayUrls:d,pubkey:f,profile:p,otherProperties:g})=>{const m={...p,...g},_={kind:vt.Metadata,pubkey:f,created_at:li(),tags:[],content:JSON.stringify(m)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:p,content:g})=>{const m={kind:vt.Contacts,pubkey:f,created_at:li(),tags:p,content:g};return t(d,m)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:p})=>{const g={kind:vt.EventDeletion,pubkey:f,created_at:li(),tags:[["e",p,""]],content:""};return t(d,g)}}};let pu=!1;const[wa,iA]=Se(void 0),Gr=()=>(_r(()=>{if(wa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),wa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&wa()==null&&!pu&&(pu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),iA(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{pu=!1})),e+=1},200)}),wa),sA=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json(),o=new URL(i);return o.protocol="https:",{imageUrl:o.toString()}},oA=e=>t=>Promise.allSettled(t.map(n=>e(n))),aA=j("<div>"),lA=j('<input type="text" class="rounded" maxlength="32">'),cA=j('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),uA=j('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),dA=j('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),fA=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},hA=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},bm=e=>{const t=mt();let n,i;const{elementRef:o}=eA(),[a,l]=Se(""),[u,d]=Se(!1),[f,p]=Se(""),g=ue=>l(Y=>`${Y} ${ue}`),m=()=>{l(""),p(""),d(!1)},_=()=>{n?.blur(),m(),e.onClose()},w=ue=>{switch(ue){case"reply":return t()("posting.placeholderReply");case"normal":default:return t()("posting.placeholder")}},{config:E,getEmoji:x}=Xe(),C=Gr(),I=jl(),k=()=>e.replyTo&&kd(e.replyTo),$=()=>e.mode??"normal",R=mi({mutationKey:["publishTextNote"],mutationFn:I.publishTextNote.bind(I),onSuccess:()=>{console.log("succeeded to post"),m(),e.onPost?.()},onError:ue=>{console.error("error",ue)}}),L=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},B=mi({mutationKey:["uploadFiles"],mutationFn:async ue=>{const Y=await oA(sA)(ue),de=[];if(Y.forEach((fe,W)=>{fe.status==="fulfilled"?(g(fe.value.imageUrl),L()):de.push(ue[W])}),de.length>0){const fe=de.map(W=>W.name).join(", ");window.alert(t()("posting.failedToUploadFile",{filenames:fe}))}}}),D=qe(()=>{const ue=C();return k()?.taggedPubkeys()?.filter(Y=>Y!==ue)??[]}),ie=qe(()=>e.replyTo==null?[]:bi([e.replyTo.pubkey,...D()])),q=ue=>{const Y=[];return ue.forEach(de=>{const fe=x(de);fe!=null&&Y.push(["emoji",de,fe.url])}),Y},J=()=>{if(a().length===0||R.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(t()("posting.forbiddenToIncludeNsec"));return}const ue=C();if(ue==null){console.error("pubkey is not available");return}const Y=xv(a()),{hashtags:de,urlReferences:fe,pubkeyReferences:W,eventReferences:re,emojis:Q}=fA(Y),ye=hA(Y),Ke=q(Q);let K={relayUrls:E().relayUrls,pubkey:ue,content:ye,notifyPubkeys:W,mentionEventIds:re,hashtags:de,urls:fe,tags:Ke};k()!=null&&(K={...K,notifyPubkeys:bi([...ie(),...W]),rootEventId:k()?.rootEvent()?.id??k()?.replyingToEvent()?.id,replyEventId:k()?.id}),u()&&(K={...K,contentWarning:f()}),R.mutate(K),_()},G=ue=>{l(ue.currentTarget.value),L()},le=ue=>{g(ue.native??`:${ue.id}:`)},te=ue=>{ue.preventDefault(),J()},U=ue=>{ue.key==="Enter"&&(ue.ctrlKey||ue.metaKey)?J():ue.key==="Escape"&&(n?.blur(),_())},ee=ue=>{if(ue.preventDefault(),B.isLoading)return;const Y=[...ue.currentTarget.files??[]];B.mutate(Y),ue.currentTarget.value=""},ce=ue=>{if(ue.preventDefault(),B.isLoading)return;const Y=[...ue?.dataTransfer?.files??[]];B.mutate(Y)},ge=ue=>{if(B.isLoading)return;const Y=[...ue?.clipboardData?.items??[]],de=[];Y.forEach(fe=>{if(fe.kind==="file"){ue.preventDefault();const W=fe.getAsFile();if(W==null)return;de.push(W)}}),de.length!==0&&B.mutate(de)},Ee=ue=>{ue.preventDefault()},ze=()=>a().trim().length===0||R.isLoading||B.isLoading,De=()=>B.isLoading;return _r(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const ue=dA(),Y=ue.firstChild,de=Y.firstChild,fe=de.nextSibling,W=fe.firstChild,re=W.nextSibling,Q=re.nextSibling,ye=fe.nextSibling;S(ue,A(pe,{get when(){return e.replyTo!=null},get children(){const K=aA();return S(K,()=>t()("posting.replyToPre"),null),S(K,A(Ht,{get each(){return ie()},children:(We,ht)=>[A(Td,{pubkey:We}),A(pe,{get when(){return ht()!==ie().length-1},children:" と "})]}),null),S(K,()=>t()("posting.replyToPost"),null),K}}),Y),Y.addEventListener("submit",te),S(Y,A(pe,{get when(){return u()},get children(){const K=lA();return K.$$input=We=>p(We.currentTarget.value),Be(()=>Fe(K,"placeholder",t()("posting.contentWarningReason"))),Be(()=>K.value=f()),K}}),de),de.addEventListener("paste",ge),de.addEventListener("drop",ce),de.addEventListener("dragover",Ee),de.$$keydown=U,de.$$input=G,br(K=>{n=K,e.textAreaRef?.(K),o(K)},de),S(fe,A(pe,{get when(){return $()==="reply"},get children(){const K=cA(),We=K.firstChild;return We.$$click=()=>_(),S(We,A(is,{})),K}}),W),S(fe,A(cm,{customEmojis:!0,onEmojiSelect:le,get children(){const K=uA();return S(K,A(fm,{})),K}}),W),W.$$click=()=>d(K=>!K),re.$$click=()=>i?.click(),S(re,A(wT,{})),S(Q,A($T,{})),ye.addEventListener("change",ee);const Ke=i;return typeof Ke=="function"?br(Ke,ye):i=ye,Be(K=>{const We=w($()),ht=!u(),$e=!!u(),rt=$()==="normal",Xt=$()==="normal",Ct=$()==="reply",Wt=$()==="reply",Yr=t()("posting.contentWarning"),En=t()("posting.contentWarning"),St=!!De(),en=!De(),zn=$()==="normal",xr=$()==="normal",kn=$()==="reply",ke=$()==="reply",Zt=t()("posting.uploadImage"),Vt=t()("posting.uploadImage"),Cn=De(),Sn=!!ze(),dn=!ze(),fn=$()==="normal",Tn=$()==="normal",tr=$()==="reply",nr=$()==="reply",rr=t()("posting.submit"),Si=t()("posting.submit"),xo=ze();return We!==K._v$&&Fe(de,"placeholder",K._v$=We),ht!==K._v$2&&W.classList.toggle("bg-rose-300",K._v$2=ht),$e!==K._v$3&&W.classList.toggle("bg-rose-400",K._v$3=$e),rt!==K._v$4&&W.classList.toggle("h-8",K._v$4=rt),Xt!==K._v$5&&W.classList.toggle("w-8",K._v$5=Xt),Ct!==K._v$6&&W.classList.toggle("h-7",K._v$6=Ct),Wt!==K._v$7&&W.classList.toggle("w-7",K._v$7=Wt),Yr!==K._v$8&&Fe(W,"aria-label",K._v$8=Yr),En!==K._v$9&&Fe(W,"title",K._v$9=En),St!==K._v$10&&re.classList.toggle("bg-primary-disabled",K._v$10=St),en!==K._v$11&&re.classList.toggle("bg-primary",K._v$11=en),zn!==K._v$12&&re.classList.toggle("h-8",K._v$12=zn),xr!==K._v$13&&re.classList.toggle("w-8",K._v$13=xr),kn!==K._v$14&&re.classList.toggle("h-7",K._v$14=kn),ke!==K._v$15&&re.classList.toggle("w-7",K._v$15=ke),Zt!==K._v$16&&Fe(re,"title",K._v$16=Zt),Vt!==K._v$17&&Fe(re,"aria-label",K._v$17=Vt),Cn!==K._v$18&&(re.disabled=K._v$18=Cn),Sn!==K._v$19&&Q.classList.toggle("bg-primary-disabled",K._v$19=Sn),dn!==K._v$20&&Q.classList.toggle("bg-primary",K._v$20=dn),fn!==K._v$21&&Q.classList.toggle("h-8",K._v$21=fn),Tn!==K._v$22&&Q.classList.toggle("w-8",K._v$22=Tn),tr!==K._v$23&&Q.classList.toggle("h-7",K._v$23=tr),nr!==K._v$24&&Q.classList.toggle("w-7",K._v$24=nr),rr!==K._v$25&&Fe(Q,"aria-label",K._v$25=rr),Si!==K._v$26&&Fe(Q,"title",K._v$26=Si),xo!==K._v$27&&(Q.disabled=K._v$27=xo),K},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),Be(()=>de.value=a()),ue})()};bt(["input","keydown","click"]);const pA=2,gA=()=>{let e;const[t,n]=Se(!1),i=o=>{e=o};return _r(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+pA)}),{overflow:t,elementRef:i}},vA=j('<div class="author-name truncate pr-1 font-bold hover:underline">'),mA=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),bA=j('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),yA=j('<img alt="icon" class="h-full w-full rounded object-cover">'),_A=e=>{const t=mt(),{overflow:n,elementRef:i}=gA(),o=Rv(),[a,l]=Se(),u=()=>o(e.createdAt),d=()=>e.createdAt.toLocaleString(),{profile:f}=ms(()=>({pubkey:e.authorPubkey}));return(()=>{const p=bA(),g=p.firstChild,m=g.firstChild,_=m.nextSibling,w=_.firstChild,E=w.firstChild,x=E.firstChild,C=x.firstChild,I=E.nextSibling,k=I.firstChild,$=w.nextSibling,R=$.nextSibling;return m.$$click=L=>{L.preventDefault(),e.onShowProfile?.()},S(m,A(pe,{get when(){return f()?.picture},keyed:!0,children:L=>(()=>{const B=yA();return Fe(B,"src",L),B})()})),E.$$click=L=>{L.preventDefault(),e?.onShowProfile?.()},S(x,A(pe,{get when(){return(f()?.display_name?.length??0)>0},get children(){const L=vA();return S(L,()=>f()?.display_name),L}}),C),S(C,A(pe,{get when(){return f()?.name!=null},get fallback(){return`@${mo(e.authorPubkey)}`},get children(){return["@",qe(()=>f()?.name)]}})),k.$$click=L=>{L.preventDefault(),e.onShowEvent?.()},S(k,u),br(i,$),S($,()=>e.content),S(_,A(pe,{get when(){return n()},get children(){const L=mA();return L.$$click=B=>{B.stopPropagation(),l(D=>!D)},S(L,A(pe,{get when(){return!a()},get fallback(){return t()("post.hideOverflow")},get children(){return t()("post.showOverflow")}})),L}}),R),S(R,()=>e.actions),S(p,A(pe,{get when(){return e.footer},get children(){return e.footer}}),null),Be(L=>{const B=d(),D=!a();return B!==L._v$&&Fe(k,"title",L._v$=B),D!==L._v$2&&$.classList.toggle("max-h-screen",L._v$2=D),L},{_v$:void 0,_v$2:void 0}),p})()};bt(["click"]);const wA=F4(),xA=()=>q4(wA),IH=()=>{const[e,t]=Gi({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},$A=/\p{Emoji_Presentation}/u,EA=e=>{const{shouldMuteEvent:t}=Xe(),n=ss(),i=qe(e),o=qe(()=>["useReactions",i()]),a=os(o,Tv({taskProvider:([,g])=>{if(g==null)return null;const{eventId:m}=g;return new gs({type:"Reactions",mentionedEventId:m})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(m=>!t(m));return{reactions:l,reactionsGrouped:()=>{const g=new Map;return l().forEach(m=>{const _=Ga(m).isCustomEmoji()?`${m.content}${Ga(m).getUrl()??""}`:m.content,w=g.get(_)??[];w.push(m),g.set(_,w)}),g},isReactedBy:g=>l().findIndex(m=>m.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(m=>m.pubkey===g&&$A.test(m.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},kA=e=>{const{shouldMuteEvent:t}=Xe(),n=ss(),i=qe(e),o=qe(()=>["useReposts",i()]),a=os(o,Tv({taskProvider:([,f])=>{if(f==null)return null;const{eventId:p}=f;return new gs({type:"Reposts",mentionedEventId:p})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!t(p));return{reposts:l,isRepostedBy:f=>l().findIndex(p=>p.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},CA=j('<div class="flex gap-2 overflow-x-auto py-1">'),SA=j('<span class="ml-1 text-sm">'),TA=j('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),AA=j('<span class="text-red-500">'),IA=j('<div class="nostr-textnote">'),RA=j('<div class="text-xs">'),OA=j('<div class="content whitespace-pre-wrap break-all">'),LA=j('<div class="textnote-content">'),PA=j('<div class="mt-1 rounded border p-1">'),MA=j('<button class="pr-1 text-blue-500 hover:underline">'),q0=j('<div class="text-sm text-zinc-400">'),BA=j('<span class="inline-block h-4 w-4">'),jA=j('<div class="flex shrink-0 items-center gap-1">'),NA=j('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),DA=j('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),UA=j('<div class="w-6">'),{noteEncode:zA}=go,HA=e=>{if(e.native!=null)return{type:"Emoji",content:e.native};if(e.src!=null)return{type:"CustomEmoji",content:`:${e.id}:`,shortcode:e.id,url:e.src};throw new Error("unknown emoji")},FA=e=>{const{config:t}=Xe(),n=Gr();return(()=>{const i=CA();return S(i,A(Ht,{get each(){return[...e.reactionsGrouped.entries()]},children:([,o])=>{const a=o.findIndex(u=>u.pubkey===n())>=0,l=Ga(o[0]).toReactionTypes();return(()=>{const u=TA();return u.$$click=()=>e.onReaction(l),S(u,A(jv,{reactionTypes:l}),null),S(u,A(pe,{get when(){return!t().hideCount},get children(){const d=SA();return S(d,()=>o.length),d}}),null),Be(d=>$a(u,{"text-zinc-400":!a,"hover:bg-zinc-50":!a,"bg-rose-50":a,"border-rose-200":a,"text-rose-400":a},d)),u})()}})),i})()},qA=e=>{const t=mt(),{config:n}=Xe(),i=Gr(),{showProfile:o}=Kr(),a=xA(),[l,u]=Se(!1),[d,f]=Se(!1),[p,g]=Se(!1),[m,_]=Se(null),w=()=>g(!1),E=()=>_(null),x=qe(()=>kd(e.event)),C=()=>e.embedding??!0,I=()=>e.actions??!0,{reactions:k,reactionsGrouped:$,isReactedBy:R,isReactedByWithEmoji:L,invalidateReactions:B,query:D}=EA(()=>({eventId:e.event.id})),{reposts:ie,isRepostedBy:q,invalidateReposts:J,query:G}=kA(()=>({eventId:e.event.id})),le=jl(),te=mi({mutationKey:["publishReaction",x().id],mutationFn:le.publishReaction.bind(le),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:W=>{console.error("failed to publish reaction: ",W)},onSettled:()=>{B().then(()=>D.refetch()).catch(W=>console.error("failed to refetch reactions",W))}}),U=mi({mutationKey:["publishRepost",x().id],mutationFn:le.publishRepost.bind(le),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:W=>{console.error("failed to publish repost: ",W)},onSettled:()=>{J().then(()=>G.refetch()).catch(W=>console.error("failed to refetch reposts",W))}}),ee=mi({mutationKey:["deleteEvent",x().id],mutationFn:(...W)=>le.deleteEvent(...W).then(re=>Promise.allSettled(re.map(vs(1e4)))),onSuccess:W=>{const re=W.filter(ye=>ye.status==="fulfilled").length,Q=W.length-re;re===W.length?window.alert(t()("post.deletedSuccessfully")):re>0?window.alert(t()("post.failedToDeletePartially",{count:Q})):window.alert(t()("post.failedToDelete"))},onError:W=>{console.error("failed to delete",W)}}),ce=[{content:()=>t()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(zA(e.event.id)).catch(W=>window.alert(W))}},{content:()=>t()("post.showJSON"),onSelect:()=>{_("EventDebugModal")}},{content:()=>t()("post.showReposts"),onSelect:()=>{_("Reposts")}},{content:()=>t()("post.showReactions"),onSelect:()=>{_("Reactions")}},{when:()=>x().pubkey===i(),content:()=>(()=>{const W=AA();return S(W,()=>t()("post.deletePost")),W})(),onSelect:()=>{const W=i();W!=null&&window.confirm(t()("post.confirmDelete"))&&ee.mutate({relayUrls:n().relayUrls,pubkey:W,eventId:x().id})}}],ge=qe(()=>{const W=i();return W!=null&&R(W)||l()}),Ee=qe(()=>{const W=i();return W!=null&&L(W)}),ze=qe(()=>{const W=i();return W!=null&&q(W)||d()}),De=()=>{if(C()){const W=x().replyingToEvent();if(W!=null&&!x().containsEventMention(W.id))return W.id;const re=x().rootEvent();if(W==null&&re!=null&&!x().containsEventMention(re.id))return re.id}},ue=W=>{W.stopPropagation(),!ze()&&$n([i(),e.event.id])(([re,Q])=>{U.mutate({relayUrls:n().relayUrls,pubkey:re,eventId:Q,notifyPubkey:e.event.pubkey}),f(!0)})},Y=W=>{ge()||$n([i(),e.event.id])(([re,Q])=>{te.mutate({relayUrls:n().relayUrls,pubkey:re,reactionTypes:W??{type:"LikeDislike",content:"+"},eventId:Q,notifyPubkey:e.event.pubkey}),u(!0)})},de=W=>{W.stopPropagation(),Y()},fe=W=>{Y(HA(W))};return(()=>{const W=IA();return S(W,A(_A,{get authorPubkey(){return x().pubkey},get createdAt(){return x().createdAtAsDate()},get content(){return(()=>{const re=LA();return S(re,A(pe,{get when(){return De()},keyed:!0,children:Q=>(()=>{const ye=PA();return S(ye,A(ao,{eventId:Q,actions:!1,embedding:!1})),ye})()}),null),S(re,A(pe,{get when(){return x().taggedPubkeys().length>0},get children(){const Q=RA();return S(Q,()=>t()("post.replyToPre"),null),S(Q,A(Ht,{get each(){return x().taggedPubkeys()},children:ye=>(()=>{const Ke=MA();return Ke.$$click=K=>{K.stopPropagation(),o(ye)},S(Ke,A(um,{pubkey:ye})),Ke})()}),null),S(Q,()=>t()("post.replyToPost"),null),Q}}),null),S(re,A(PS,{get contentWarning(){return x().contentWarning()},get children(){const Q=OA();return S(Q,A(tT,{get event(){return e.event},get embedding(){return C()}})),Q}}),null),re})()},get actions(){return A(pe,{get when(){return I()},get children(){return[A(pe,{get when(){return qe(()=>!!n().showEmojiReaction)()&&k().length>0},get children(){return A(FA,{get reactionsGrouped(){return $()},onReaction:Y})}}),(()=>{const re=DA(),Q=re.firstChild,ye=Q.nextSibling,Ke=ye.firstChild,K=ye.nextSibling,We=K.firstChild,ht=K.nextSibling;return Q.$$click=$e=>{$e.stopPropagation(),g(rt=>!rt)},S(Q,A(IC,{})),Ke.$$click=ue,S(Ke,A(ov,{})),S(ye,A(pe,{get when(){return qe(()=>!n().hideCount)()&&ie().length>0},get children(){const $e=q0();return S($e,()=>ie().length),$e}}),null),We.$$click=de,S(We,A(pe,{get when(){return qe(()=>!!ge())()&&!Ee()},get fallback(){return A(Lv,{})},get children(){return A(Mv,{})}})),S(K,A(pe,{get when(){return qe(()=>!n().hideCount&&!n().showEmojiReaction)()&&k().length>0},get children(){const $e=q0();return S($e,()=>k().length),$e}}),null),S(re,A(pe,{get when(){return n().useEmojiReaction},get children(){const $e=jA();return S($e,A(cm,{onEmojiSelect:fe,get children(){const rt=BA();return S(rt,A(Pv,{})),rt}})),Be(rt=>$a($e,{"text-zinc-400":!ge()||!Ee(),"hover:text-rose-400":!ge()||!Ee(),"text-rose-400":ge()&&Ee()||te.isLoading},rt)),$e}}),ht),S(ht,A(Bv,{menu:ce,get children(){const $e=NA();return S($e,A(Ov,{})),$e}})),Be($e=>{const rt={"text-zinc-400":!ze(),"hover:text-green-400":!ze(),"text-green-400":ze()||U.isLoading},Xt=U.isLoading,Ct={"text-zinc-400":!ge()||Ee(),"hover:text-rose-400":!ge()||Ee(),"text-rose-400":ge()&&!Ee()||te.isLoading},Wt=te.isLoading;return $e._v$=$a(ye,rt,$e._v$),Xt!==$e._v$2&&(Ke.disabled=$e._v$2=Xt),$e._v$3=$a(K,Ct,$e._v$3),Wt!==$e._v$4&&(We.disabled=$e._v$4=Wt),$e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),re})()]}})},get footer(){return A(pe,{get when(){return p()},get children(){return A(bm,{mode:"reply",get replyTo(){return e.event},onClose:w,onPost:w})}})},onShowProfile:()=>{o(x().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:e.event})}}),null),S(W,A(Wn,{get children(){return[A(Ye,{get when(){return m()==="EventDebugModal"},get children(){return A(fT,{get event(){return e.event},onClose:E})}}),A(Ye,{get when(){return m()==="Reactions"},get children(){return A(Uu,{get data(){return k()},pubkeyExtractor:re=>re.pubkey,renderInfo:re=>(()=>{const Q=UA();return S(Q,A(jv,{get reactionTypes(){return Ga(re).toReactionTypes()}})),Q})(),onClose:E})}}),A(Ye,{get when(){return m()==="Reposts"},get children(){return A(Uu,{get data(){return ie()},pubkeyExtractor:re=>re.pubkey,onClose:E})}})]}}),null),W})()};bt(["click"]);const WA=e=>{const{shouldMuteEvent:t}=Xe();return A(pe,{get when(){return!t(e.event)},get children(){return A(qA,e)}})},ZA=j("<span>予期しないイベント種別（<!>）"),VA=j("<span><span>未対応のイベント種別（<!>）"),ym=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return A(Wn,{get fallback(){return(()=>{const n=VA(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,S(i,()=>e.event.kind,a),S(n,A(Ks,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[A(Ye,{get when(){return!t()},keyed:!0,get children(){const n=ZA(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,S(n,()=>e.event.kind,o),S(n,A(Ks,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),A(Ye,{get when(){return e.event.kind===vt.Text},get children(){return A(WA,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),A(Ye,{get when(){return e.event.kind===6},get children(){return A(TC,{get event(){return e.event}})}})]}})},KA=e=>{const{shouldMuteEvent:t}=Xe();return A(Ht,{get each(){return e.events},children:n=>A(pe,{get when(){return!t(n)},get children(){return A(b6,{get children(){return A(ym,{event:n})}})}})})};var GA=cl;function QA(){this.__data__=new GA,this.size=0}var YA=QA;function JA(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var XA=JA;function eI(e){return this.__data__.get(e)}var tI=eI;function nI(e){return this.__data__.has(e)}var rI=nI,iI=cl,sI=Yu,oI=Ju,aI=200;function lI(e,t){var n=this.__data__;if(n instanceof iI){var i=n.__data__;if(!sI||i.length<aI-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new oI(i)}return n.set(e,t),this.size=n.size,this}var cI=lI,uI=cl,dI=YA,fI=XA,hI=tI,pI=rI,gI=cI;function ys(e){var t=this.__data__=new uI(e);this.size=t.size}ys.prototype.clear=dI;ys.prototype.delete=fI;ys.prototype.get=hI;ys.prototype.has=pI;ys.prototype.set=gI;var jd=ys;function vI(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var mI=vI,bI=qg,yI=mI,_I=Wg,wI=1,xI=2;function $I(e,t,n,i,o,a){var l=n&wI,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(e),p=a.get(t);if(f&&p)return f==t&&p==e;var g=-1,m=!0,_=n&xI?new bI:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var w=e[g],E=t[g];if(i)var x=l?i(E,w,g,t,e,a):i(w,E,g,e,t,a);if(x!==void 0){if(x)continue;m=!1;break}if(_){if(!yI(t,function(C,I){if(!_I(_,I)&&(w===C||o(w,C,n,i,a)))return _.push(I)})){m=!1;break}}else if(!(w===E||o(w,E,n,i,a))){m=!1;break}}return a.delete(e),a.delete(t),m}var _m=$I,EI=Yn,kI=EI.Uint8Array,wm=kI;function CI(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var SI=CI,W0=as,Z0=wm,TI=Qu,AI=_m,II=SI,RI=Xu,OI=1,LI=2,PI="[object Boolean]",MI="[object Date]",BI="[object Error]",jI="[object Map]",NI="[object Number]",DI="[object RegExp]",UI="[object Set]",zI="[object String]",HI="[object Symbol]",FI="[object ArrayBuffer]",qI="[object DataView]",V0=W0?W0.prototype:void 0,gu=V0?V0.valueOf:void 0;function WI(e,t,n,i,o,a,l){switch(n){case qI:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case FI:return!(e.byteLength!=t.byteLength||!a(new Z0(e),new Z0(t)));case PI:case MI:case NI:return TI(+e,+t);case BI:return e.name==t.name&&e.message==t.message;case DI:case zI:return e==t+"";case jI:var u=II;case UI:var d=i&OI;if(u||(u=RI),e.size!=t.size&&!d)return!1;var f=l.get(e);if(f)return f==t;i|=LI,l.set(e,t);var p=AI(u(e),u(t),i,o,a,l);return l.delete(e),p;case HI:if(gu)return gu.call(e)==gu.call(t)}return!1}var ZI=WI;function VI(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Nd=VI,KI=Array.isArray,er=KI,GI=Nd,QI=er;function YI(e,t,n){var i=t(e);return QI(e)?i:GI(i,n(e))}var xm=YI;function JI(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var XI=JI;function eR(){return[]}var $m=eR,tR=XI,nR=$m,rR=Object.prototype,iR=rR.propertyIsEnumerable,K0=Object.getOwnPropertySymbols,sR=K0?function(e){return e==null?[]:(e=Object(e),tR(K0(e),function(t){return iR.call(e,t)}))}:nR,Dd=sR;function oR(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var aR=oR;function lR(e){return e!=null&&typeof e=="object"}var Qr=lR,cR=ls,uR=Qr,dR="[object Arguments]";function fR(e){return uR(e)&&cR(e)==dR}var hR=fR,G0=hR,pR=Qr,Em=Object.prototype,gR=Em.hasOwnProperty,vR=Em.propertyIsEnumerable,mR=G0(function(){return arguments}())?G0:function(e){return pR(e)&&gR.call(e,"callee")&&!vR.call(e,"callee")},Ud=mR,nl={exports:{}};function bR(){return!1}var yR=bR;nl.exports;(function(e,t){var n=Yn,i=yR,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;e.exports=f})(nl,nl.exports);var zd=nl.exports,_R=9007199254740991,wR=/^(?:0|[1-9]\d*)$/;function xR(e,t){var n=typeof e;return t=t??_R,!!t&&(n=="number"||n!="symbol"&&wR.test(e))&&e>-1&&e%1==0&&e<t}var Hd=xR,$R=9007199254740991;function ER(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$R}var Fd=ER,kR=ls,CR=Fd,SR=Qr,TR="[object Arguments]",AR="[object Array]",IR="[object Boolean]",RR="[object Date]",OR="[object Error]",LR="[object Function]",PR="[object Map]",MR="[object Number]",BR="[object Object]",jR="[object RegExp]",NR="[object Set]",DR="[object String]",UR="[object WeakMap]",zR="[object ArrayBuffer]",HR="[object DataView]",FR="[object Float32Array]",qR="[object Float64Array]",WR="[object Int8Array]",ZR="[object Int16Array]",VR="[object Int32Array]",KR="[object Uint8Array]",GR="[object Uint8ClampedArray]",QR="[object Uint16Array]",YR="[object Uint32Array]",st={};st[FR]=st[qR]=st[WR]=st[ZR]=st[VR]=st[KR]=st[GR]=st[QR]=st[YR]=!0;st[TR]=st[AR]=st[zR]=st[IR]=st[HR]=st[RR]=st[OR]=st[LR]=st[PR]=st[MR]=st[BR]=st[jR]=st[NR]=st[DR]=st[UR]=!1;function JR(e){return SR(e)&&CR(e.length)&&!!st[kR(e)]}var XR=JR;function eO(e){return function(t){return e(t)}}var qd=eO,rl={exports:{}};rl.exports;(function(e,t){var n=Ug,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(rl,rl.exports);var Wd=rl.exports,tO=XR,nO=qd,Q0=Wd,Y0=Q0&&Q0.isTypedArray,rO=Y0?nO(Y0):tO,km=rO,iO=aR,sO=Ud,oO=er,aO=zd,lO=Hd,cO=km,uO=Object.prototype,dO=uO.hasOwnProperty;function fO(e,t){var n=oO(e),i=!n&&sO(e),o=!n&&!i&&aO(e),a=!n&&!i&&!o&&cO(e),l=n||i||o||a,u=l?iO(e.length,String):[],d=u.length;for(var f in e)(t||dO.call(e,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||lO(f,d)))&&u.push(f);return u}var Cm=fO,hO=Object.prototype;function pO(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||hO;return e===n}var Zd=pO;function gO(e,t){return function(n){return e(t(n))}}var Sm=gO,vO=Sm,mO=vO(Object.keys,Object),bO=mO,yO=Zd,_O=bO,wO=Object.prototype,xO=wO.hasOwnProperty;function $O(e){if(!yO(e))return _O(e);var t=[];for(var n in Object(e))xO.call(e,n)&&n!="constructor"&&t.push(n);return t}var EO=$O,kO=Hg,CO=Fd;function SO(e){return e!=null&&CO(e.length)&&!kO(e)}var Tm=SO,TO=Cm,AO=EO,IO=Tm;function RO(e){return IO(e)?TO(e):AO(e)}var Nl=RO,OO=xm,LO=Dd,PO=Nl;function MO(e){return OO(e,PO,LO)}var Am=MO,J0=Am,BO=1,jO=Object.prototype,NO=jO.hasOwnProperty;function DO(e,t,n,i,o,a){var l=n&BO,u=J0(e),d=u.length,f=J0(t),p=f.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var m=u[g];if(!(l?m in t:NO.call(t,m)))return!1}var _=a.get(e),w=a.get(t);if(_&&w)return _==t&&w==e;var E=!0;a.set(e,t),a.set(t,e);for(var x=l;++g<d;){m=u[g];var C=e[m],I=t[m];if(i)var k=l?i(I,C,m,t,e,a):i(C,I,m,e,t,a);if(!(k===void 0?C===I||o(C,I,n,i,a):k)){E=!1;break}x||(x=m=="constructor")}if(E&&!x){var $=e.constructor,R=t.constructor;$!=R&&"constructor"in e&&"constructor"in t&&!(typeof $=="function"&&$ instanceof $&&typeof R=="function"&&R instanceof R)&&(E=!1)}return a.delete(e),a.delete(t),E}var UO=DO,zO=ki,HO=Yn,FO=zO(HO,"DataView"),qO=FO,WO=ki,ZO=Yn,VO=WO(ZO,"Promise"),KO=VO,GO=ki,QO=Yn,YO=GO(QO,"WeakMap"),JO=YO,zu=qO,Hu=Yu,Fu=KO,qu=Zg,Wu=JO,Im=ls,_s=Fg,X0="[object Map]",XO="[object Object]",eg="[object Promise]",tg="[object Set]",ng="[object WeakMap]",rg="[object DataView]",eL=_s(zu),tL=_s(Hu),nL=_s(Fu),rL=_s(qu),iL=_s(Wu),ci=Im;(zu&&ci(new zu(new ArrayBuffer(1)))!=rg||Hu&&ci(new Hu)!=X0||Fu&&ci(Fu.resolve())!=eg||qu&&ci(new qu)!=tg||Wu&&ci(new Wu)!=ng)&&(ci=function(e){var t=Im(e),n=t==XO?e.constructor:void 0,i=n?_s(n):"";if(i)switch(i){case eL:return rg;case tL:return X0;case nL:return eg;case rL:return tg;case iL:return ng}return t});var Dl=ci,vu=jd,sL=_m,oL=ZI,aL=UO,ig=Dl,sg=er,og=zd,lL=km,cL=1,ag="[object Arguments]",lg="[object Array]",xa="[object Object]",uL=Object.prototype,cg=uL.hasOwnProperty;function dL(e,t,n,i,o,a){var l=sg(e),u=sg(t),d=l?lg:ig(e),f=u?lg:ig(t);d=d==ag?xa:d,f=f==ag?xa:f;var p=d==xa,g=f==xa,m=d==f;if(m&&og(e)){if(!og(t))return!1;l=!0,p=!1}if(m&&!p)return a||(a=new vu),l||lL(e)?sL(e,t,n,i,o,a):oL(e,t,d,n,i,o,a);if(!(n&cL)){var _=p&&cg.call(e,"__wrapped__"),w=g&&cg.call(t,"__wrapped__");if(_||w){var E=_?e.value():e,x=w?t.value():t;return a||(a=new vu),o(E,x,n,i,a)}}return m?(a||(a=new vu),aL(e,t,n,i,o,a)):!1}var fL=dL,hL=fL,ug=Qr;function Rm(e,t,n,i,o){return e===t?!0:e==null||t==null||!ug(e)&&!ug(t)?e!==e&&t!==t:hL(e,t,n,i,Rm,o)}var Om=Rm,pL=jd,gL=Om,vL=1,mL=2;function bL(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],f=e[d],p=u[1];if(l&&u[2]){if(f===void 0&&!(d in e))return!1}else{var g=new pL;if(i)var m=i(f,p,d,e,t,g);if(!(m===void 0?gL(p,f,vL|mL,i,g):m))return!1}}return!0}var yL=bL,_L=Ei;function wL(e){return e===e&&!_L(e)}var Lm=wL,xL=Lm,$L=Nl;function EL(e){for(var t=$L(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,xL(o)]}return t}var kL=EL;function CL(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var Pm=CL,SL=yL,TL=kL,AL=Pm;function IL(e){var t=TL(e);return t.length==1&&t[0][2]?AL(t[0][0],t[0][1]):function(n){return n===e||SL(n,e,t)}}var RL=IL,OL=ls,LL=Qr,PL="[object Symbol]";function ML(e){return typeof e=="symbol"||LL(e)&&OL(e)==PL}var Vd=ML,BL=er,jL=Vd,NL=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,DL=/^\w*$/;function UL(e,t){if(BL(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||jL(e)?!0:DL.test(e)||!NL.test(e)||t!=null&&e in Object(t)}var Kd=UL,Mm=Ju,zL="Expected a function";function Gd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(zL);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Gd.Cache||Mm),n}Gd.Cache=Mm;var HL=Gd,FL=HL,qL=500;function WL(e){var t=FL(e,function(i){return n.size===qL&&n.clear(),i}),n=t.cache;return t}var ZL=WL,VL=ZL,KL=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,GL=/\\(\\)?/g,QL=VL(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(KL,function(n,i,o,a){t.push(o?a.replace(GL,"$1"):i||n)}),t}),YL=QL;function JL(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Qd=JL,dg=as,XL=Qd,eP=er,tP=Vd,nP=1/0,fg=dg?dg.prototype:void 0,hg=fg?fg.toString:void 0;function Bm(e){if(typeof e=="string")return e;if(eP(e))return XL(e,Bm)+"";if(tP(e))return hg?hg.call(e):"";var t=e+"";return t=="0"&&1/e==-nP?"-0":t}var rP=Bm,iP=rP;function sP(e){return e==null?"":iP(e)}var oP=sP,aP=er,lP=Kd,cP=YL,uP=oP;function dP(e,t){return aP(e)?e:lP(e,t)?[e]:cP(uP(e))}var ws=dP,fP=Vd,hP=1/0;function pP(e){if(typeof e=="string"||fP(e))return e;var t=e+"";return t=="0"&&1/e==-hP?"-0":t}var xs=pP,gP=ws,vP=xs;function mP(e,t){t=gP(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[vP(t[n++])];return n&&n==i?e:void 0}var Ul=mP,bP=Ul;function yP(e,t,n){var i=e==null?void 0:bP(e,t);return i===void 0?n:i}var _P=yP;function wP(e,t){return e!=null&&t in Object(e)}var xP=wP,$P=ws,EP=Ud,kP=er,CP=Hd,SP=Fd,TP=xs;function AP(e,t,n){t=$P(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=TP(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&SP(o)&&CP(l,o)&&(kP(e)||EP(e)))}var IP=AP,RP=xP,OP=IP;function LP(e,t){return e!=null&&OP(e,t,RP)}var PP=LP,MP=Om,BP=_P,jP=PP,NP=Kd,DP=Lm,UP=Pm,zP=xs,HP=1,FP=2;function qP(e,t){return NP(e)&&DP(t)?UP(zP(e),t):function(n){var i=BP(n,e);return i===void 0&&i===t?jP(n,e):MP(t,i,HP|FP)}}var WP=qP;function ZP(e){return e}var jm=ZP;function VP(e){return function(t){return t?.[e]}}var KP=VP,GP=Ul;function QP(e){return function(t){return GP(t,e)}}var YP=QP,JP=KP,XP=YP,eM=Kd,tM=xs;function nM(e){return eM(e)?JP(tM(e)):XP(e)}var rM=nM,iM=RL,sM=WP,oM=jm,aM=er,lM=rM;function cM(e){return typeof e=="function"?e:e==null?oM:typeof e=="object"?aM(e)?sM(e[0],e[1]):iM(e):lM(e)}var Yd=cM,uM=Yd,dM=Vg;function fM(e,t){return e&&e.length?dM(e,uM(t)):[]}var hM=fM;const Nm=ol(hM);let Ta=0;const{setActiveSubscriptions:pM}=Cv();setInterval(()=>{pM(Ta)},1e3);const Dm=e=>{const{config:t,shouldMuteEvent:n}=Xe(),i=Sd(),[o,a]=Se([]);vi(sl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),_r(()=>{console.debug("subscription mounted",e()?.debugId,e()),mr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const f=e()?.limit??50;a(p=>{const g=vd.insertEventIntoDescendingList(p,d).slice(0,f),m=Nm(g,_=>_.id);return m.length!==g.length&&console.warn("duplicated event",d),m})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:f,filters:p,options:g,onEvent:m,onEOSE:_,continuous:w=!0}=d,E=i().sub(f,p,g);let x=!0;Ta+=1;let C=!1,I=!1;const k=[];E.on("event",L=>{m?.(L),!(d.clientEventFilter!=null&&!d.clientEventFilter(L))&&(I?l(L):(C=!0,k.push(L)))}),E.on("eose",()=>{_?.(),I=!0,a(Ou(k)),w||(E.unsub(),x&&(x=!1,Ta-=1))});let $=!1;const R=setInterval(()=>{if(!$){if($=!0,I){clearInterval(R),$=!1;return}C&&(C=!1,a(Ou(k))),$=!1}},100);mr(()=>{console.debug("startSubscription: end"),E.unsub(),x&&(x=!1,Ta-=1),clearInterval(R)})};return vi(()=>{u()}),{events:o}},gM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),vM=(e={})=>(()=>{const t=gM();return nt(t,e,!0,!0),t})(),Um=e=>{const t=()=>{const i=e();if(i==null)return[];const o=[];return gi(i).pTags().forEach(l=>{const[,u,d,f]=l,p={pubkey:u,petname:f};d!=null&&d.length>0&&(p.mainRelayUrl=d),o.push(p)}),o};return{followings:t,followingPubkeys:()=>t().map(i=>i.pubkey),data:e}},mM=async({pubkey:e},t)=>{const n=new gs({type:"Followings",pubkey:e});Sl({task:n,signal:t});const i=await n.latestEventPromise();return Um(()=>i)},pg=e=>{const t=ss(),n=qe(e),i=()=>["useFollowings",n()],o=os(i,Sv({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new gs({type:"Followings",pubkey:u})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>t.invalidateQueries(i());return{...Um(()=>o.data),invalidateFollowings:a,query:o}},bM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),yM=(e={})=>(()=>{const t=bM();return nt(t,e,!0,!0),t})(),_M=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),zm=(e={})=>(()=>{const t=_M();return nt(t,e,!0,!0),t})(),wM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Hm=(e={})=>(()=>{const t=wM();return nt(t,e,!0,!0),t})(),xM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),$M=(e={})=>(()=>{const t=xM();return nt(t,e,!0,!0),t})(),EM=j('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),kM=j('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),CM=j('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),SM=async()=>{const t=await(await fetch(Ku("packageInfo.json"))).text();return JSON.parse(t)},TM=e=>{const[t]=Bg(SM);return A(Ci,{get onClose(){return e.onClose},get children(){const n=EM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,_=m.nextSibling;_.nextSibling;const w=g.nextSibling,E=w.nextSibling,x=E.nextSibling,C=x.nextSibling,I=C.nextSibling,k=I.nextSibling,$=k.nextSibling;return $.nextSibling,S(u,()=>t()?.self?.version,null),S(g,A(bo,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),_),S($,()=>t()?.self.licenseText),S(n,A(Ht,{get each(){return t()?.packages??[]},fallback:"取得中",children:R=>[(()=>{const L=kM(),B=L.firstChild,D=B.nextSibling,ie=D.nextSibling,q=ie.nextSibling;return q.nextSibling,S(L,()=>R.name,B),S(L,()=>R.version,D),S(L,()=>R.licenseSpdx,q),L})(),(()=>{const L=CM();return S(L,()=>R.licenseText),L})()]}),null),Be(()=>Fe(o,"src",Ku("images/rabbit_app_256.png"))),n}})},AM=j('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),IM=e=>{const t=mt(),n=Gr(),{saveColumn:i}=Xe(),o=Ld(),a=()=>{e.onClose(),o({command:"moveToLastColumn"}).catch(m=>console.error(m))},l=()=>{$n([n()])(([m])=>{i(cv({pubkey:m}))}),a()},u=()=>{$n([n()])(([m])=>{i(uv({pubkey:m}))}),a()},d=()=>{i(dv()),a()},f=()=>{i($d({query:""})),a()},p=()=>{$n([n()])(([m])=>{i(fv({pubkey:m}))}),a()},g=()=>{$n([n()])(([m])=>{i(hv({pubkey:m}))}),a()};return A(Ci,{get onClose(){return e.onClose},get children(){const m=AM(),_=m.firstChild,w=_.firstChild,E=_.nextSibling,x=E.firstChild,C=E.nextSibling,I=C.firstChild,k=C.nextSibling,$=k.firstChild,R=k.nextSibling,L=R.firstChild,B=R.nextSibling,D=B.firstChild;return _.$$click=()=>l(),S(w,A(vM,{})),S(_,()=>t()("column.home"),null),E.$$click=()=>u(),S(x,A(yM,{})),S(E,()=>t()("column.notification"),null),C.$$click=()=>d(),S(I,A(Hm,{})),S(C,()=>t()("column.japanese"),null),k.$$click=()=>f(),S($,A($M,{})),S(k,()=>t()("column.search"),null),R.$$click=()=>p(),S(L,A(zm,{})),S(R,()=>t()("column.myPosts"),null),B.$$click=()=>g(),S(D,A(Lv,{})),S(B,()=>t()("column.myReactions"),null),m}})};bt(["click"]);const RM=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),OM=(e={})=>(()=>{const t=RM();return nt(t,e,!0,!0),t})(),LM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),PM=(e={})=>(()=>{const t=LM();return nt(t,e,!0,!0),t})(),MM=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),BM=(e={})=>(()=>{const t=MM();return nt(t,e,!0,!0),t})();function jM(e){const{config:t}=Xe(),n=qe(e),{events:i}=Dm(()=>({relayUrls:t().relayUrls,filters:[{kinds:[vt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>bi(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const NM=e=>{const t=qe(e),n=os(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return rv.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},DM=j('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),gg=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),UM=j('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),zM=j('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),HM=j('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),vg=j('<div class="shrink-0 text-xs">'),FM=j('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),qM=j('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),WM=j('<div class="truncate text-xl font-bold">'),ZM=j('<div class="truncate text-xs">@'),VM=j('<span class="inline-block h-3 w-3">'),KM=j('<span class="inline-block h-4 w-4 text-blue-400">'),GM=j('<div class="flex items-center text-xs">'),QM=j('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),YM=j('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),JM=j('<div class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),XM=j('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),eB=j('<ul class="border-t px-5 py-2 text-xs">'),tB=j('<ul class="border-t p-1">'),nB=j('<div class="h-12 shrink-0">'),rB=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),iB=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),sB=j('<span class="inline-block h-4 w-4 text-rose-500">'),oB=j('<span class="text-sm">'),aB=j('<button class="text-sm hover:text-stone-800 hover:underline">'),lB=j('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),cB=e=>{const{count:t}=jM(()=>({pubkey:e.pubkey}));return qe(t)},uB=e=>{const t=mt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=Xe(),l=jl(),u=Gr(),{showProfileEdit:d}=Kr(),f=qe(()=>mo(e.pubkey)),[p,g]=Se(!1),[m,_]=Se(!1),[w,E]=Se(!1),[x,C]=Se(null),I=()=>C(null),{profile:k,query:$}=ms(()=>({pubkey:e.pubkey})),{verification:R,query:L}=NM(()=>$n([k()?.nip05])(([Y])=>({nip05:Y}))),B=()=>{const Y=k()?.nip05;if(Y==null)return null;const[de,fe]=Y.split("@");return fe==null?null:de==="_"?{domain:fe,ident:fe}:{user:de,domain:fe,ident:Y}},D=()=>R()?.pubkey===e.pubkey,ie=()=>a(e.pubkey),{followingPubkeys:q,invalidateFollowings:J,query:G}=pg(()=>$n([u()])(([Y])=>({pubkey:Y}))),le=()=>q().includes(e.pubkey),{followingPubkeys:te,query:U}=pg(()=>({pubkey:e.pubkey})),ee=()=>{const Y=u();return Y!=null&&te().includes(Y)},ce=mi({mutationKey:["updateContacts"],mutationFn:(...Y)=>l.updateContacts(...Y).then(de=>Promise.allSettled(de.map(vs(5e3)))),onSuccess:Y=>{const de=Y.filter(W=>W.status==="fulfilled").length,fe=Y.length-de;de===Y.length?console.log("succeeded to update contacts"):de>0?console.log(`succeeded to update contacts for ${de} relays but failed for ${fe} relays`):console.error("failed to update contacts")},onError:Y=>{console.error("failed to update contacts: ",Y)},onSettled:()=>{J().then(()=>G.refetch()).catch(Y=>console.error("failed to refetch contacts",Y))}}),ge=async(Y,de)=>{try{const fe=u();if(fe==null)return;g(!0);const W=await mM({pubkey:fe});if((W.data()==null||W.followingPubkeys().length===0)&&!window.confirm(t()("profile.confirmUpdateEvenIfEmpty")))return;if((W?.data()?.created_at??0)<(G.data?.created_at??0)){window.alert(t()("profile.failedToFetchLatestFollowList"));return}const re=W.data()?.tags??[];let Q;switch(Y){case"follow":Q=[...re,["p",de]];break;case"unfollow":Q=re.filter(([ye,Ke])=>!(ye==="p"&&Ke===de));break;default:console.error("updateContacts: invalid operation",Y);return}await ce.mutateAsync({relayUrls:n().relayUrls,pubkey:fe,updatedTags:Q,content:W.data()?.content??""})}catch(fe){console.error("failed to update contact list",fe),window.alert(t()("profile.failedToUpdateFollowList"))}finally{g(!1)}},Ee=()=>{ge("follow",e.pubkey).catch(Y=>{console.log("failed to follow",Y)})},ze=()=>{window.confirm(t()("profile.confirmUnfollow"))&&ge("unfollow",e.pubkey).catch(Y=>{console.log("failed to unfollow",Y)})},De=[{content:()=>t()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(f()).catch(Y=>window.alert(Y))}},{content:()=>ie()?t()("profile.unmute"):t()("profile.mute"),onSelect:()=>{ie()?o(e.pubkey):i(e.pubkey)}},{when:()=>e.pubkey===u(),content:()=>le()?t()("profile.unfollowMyself"):t()("profile.followMyself"),onSelect:()=>{le()?ze():Ee()}}],{events:ue}=Dm(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:li()}],continuous:!1}));return A(Ci,{onClose:()=>e.onClose?.(),get children(){return[A(pe,{get when(){return qe(()=>!!$.isFetched)()&&k()?.banner},get fallback(){return nB()},keyed:!0,children:Y=>(()=>{const de=rB(),fe=de.firstChild;return Fe(fe,"src",Y),de})()}),(()=>{const Y=qM(),de=Y.firstChild,fe=de.firstChild;return S(fe,A(pe,{get when(){return qe(()=>!!$.isFetched)()&&k()?.picture},keyed:!0,children:W=>(()=>{const re=iB();return Fe(re,"src",W),re})()})),S(Y,A(pe,{get when(){return u()!=null},get children(){const W=FM(),re=W.firstChild;return S(re,A(Wn,{get children(){return[A(Ye,{get when(){return e.pubkey===u()},get children(){const Q=DM();return Q.$$click=()=>d(),S(Q,()=>t()("profile.editProfile")),Q}}),A(Ye,{get when(){return ce.isLoading||p()},get children(){const Q=gg();return S(Q,()=>t()("general.updating")),Q}}),A(Ye,{get when(){return G.isLoading||G.isFetching},get children(){const Q=gg();return S(Q,()=>t()("general.loading")),Q}}),A(Ye,{get when(){return le()},get children(){const Q=UM();return Q.$$click=()=>ze(),Q.addEventListener("mouseleave",()=>_(!1)),Q.addEventListener("mouseenter",()=>_(!0)),S(Q,A(pe,{get when(){return!m()},get fallback(){return t()("profile.unfollow")},get children(){return t()("profile.followingCurrently")}})),Be(()=>Q.disabled=ce.isLoading),Q}}),A(Ye,{get when(){return!le()},get children(){const Q=zM();return Q.$$click=()=>Ee(),S(Q,()=>t()("profile.follow")),Be(()=>Q.disabled=ce.isLoading),Q}})]}}),null),S(re,A(Bv,{menu:De,get children(){const Q=HM();return S(Q,A(Ov,{})),Q}}),null),S(W,A(Wn,{get children(){return[A(Ye,{get when(){return U.isLoading},get children(){const Q=vg();return S(Q,()=>t()("general.loading")),Q}}),A(Ye,{get when(){return ee()},get children(){const Q=vg();return S(Q,()=>t()("profile.followsYou")),Q}})]}}),null),W}}),null),Y})(),(()=>{const Y=QM(),de=Y.firstChild,fe=de.firstChild,W=fe.nextSibling,re=W.firstChild;return S(de,A(pe,{get when(){return $.isLoading},get children(){return t()("general.loading")}}),fe),S(de,A(pe,{get when(){return(k()?.display_name?.length??0)>0},get children(){const Q=WM();return S(Q,()=>k()?.display_name),Q}}),fe),S(fe,A(pe,{get when(){return(k()?.name?.length??0)>0},get children(){const Q=ZM();return Q.firstChild,S(Q,()=>k()?.name,null),Q}}),null),S(fe,A(pe,{get when(){return(k()?.nip05?.length??0)>0},get children(){const Q=GM();return S(Q,()=>B()?.ident,null),S(Q,A(Wn,{get fallback(){return(()=>{const ye=sB();return S(ye,A(BM,{})),ye})()},get children(){return[A(Ye,{get when(){return L.isLoading},get children(){const ye=VM();return S(ye,A(OM,{})),ye}}),A(Ye,{get when(){return D()},get children(){const ye=KM();return S(ye,A(PM,{})),ye}})]}}),null),Q}}),null),S(re,f),Y})(),A(pe,{get when(){return(k()?.about??"").length>0},get children(){const Y=YM();return S(Y,()=>k()?.about),Y}}),(()=>{const Y=XM(),de=Y.firstChild,fe=de.firstChild,W=fe.nextSibling;return de.$$click=()=>C("Following"),S(fe,()=>t()("profile.following")),S(W,A(pe,{get when(){return U.isFetched},get fallback(){return(()=>{const re=oB();return S(re,()=>t()("general.loading")),re})()},get children(){return te().length}})),S(Y,A(pe,{get when(){return!n().hideCount},get children(){const re=JM(),Q=re.firstChild,ye=Q.nextSibling;return S(Q,()=>t()("profile.followers")),S(ye,A(pe,{get when(){return w()},get fallback(){return(()=>{const Ke=aB();return Ke.$$click=()=>E(!0),S(Ke,()=>t()("profile.loadFollowers")),Ke})()},keyed:!0,get children(){return A(cB,{get pubkey(){return e.pubkey}})}})),re}}),null),Y})(),A(pe,{get when(){return(k()?.website??"").length>0},get children(){const Y=eB();return S(Y,A(pe,{get when(){return k()?.website},keyed:!0,children:de=>(()=>{const fe=lB(),W=fe.firstChild;return S(W,A(Hm,{})),S(fe,A(bo,{class:"text-blue-500 underline",href:de}),null),fe})()})),Y}}),A(Wn,{get children(){return A(Ye,{get when(){return x()==="Following"},get children(){return A(Uu,{get data(){return te()},pubkeyExtractor:Y=>Y,onClose:I})}})}}),(()=>{const Y=tB();return S(Y,A(KA,{get events(){return ue()}})),Y})()]}})};bt(["click"]);function dB(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var fB=dB,hB=ki,pB=function(){try{var e=hB(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Fm=pB,mg=Fm;function gB(e,t,n){t=="__proto__"&&mg?mg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var qm=gB,vB=qm,mB=Qu,bB=Object.prototype,yB=bB.hasOwnProperty;function _B(e,t,n){var i=e[t];(!(yB.call(e,t)&&mB(i,n))||n===void 0&&!(t in e))&&vB(e,t,n)}var Jd=_B,wB=Jd,xB=qm;function $B(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?xB(n,u,d):wB(n,u,d)}return n}var wo=$B,EB=wo,kB=Nl;function CB(e,t){return e&&EB(t,kB(t),e)}var SB=CB;function TB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var AB=TB,IB=Ei,RB=Zd,OB=AB,LB=Object.prototype,PB=LB.hasOwnProperty;function MB(e){if(!IB(e))return OB(e);var t=RB(e),n=[];for(var i in e)i=="constructor"&&(t||!PB.call(e,i))||n.push(i);return n}var BB=MB,jB=Cm,NB=BB,DB=Tm;function UB(e){return DB(e)?jB(e,!0):NB(e)}var Xd=UB,zB=wo,HB=Xd;function FB(e,t){return e&&zB(t,HB(t),e)}var qB=FB,il={exports:{}};il.exports;(function(e,t){var n=Yn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,p){if(p)return f.slice();var g=f.length,m=u?u(g):new f.constructor(g);return f.copy(m),m}e.exports=d})(il,il.exports);var WB=il.exports;function ZB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var VB=ZB,KB=wo,GB=Dd;function QB(e,t){return KB(e,GB(e),t)}var YB=QB,JB=Sm,XB=JB(Object.getPrototypeOf,Object),ef=XB,ej=Nd,tj=ef,nj=Dd,rj=$m,ij=Object.getOwnPropertySymbols,sj=ij?function(e){for(var t=[];e;)ej(t,nj(e)),e=tj(e);return t}:rj,Wm=sj,oj=wo,aj=Wm;function lj(e,t){return oj(e,aj(e),t)}var cj=lj,uj=xm,dj=Wm,fj=Xd;function hj(e){return uj(e,fj,dj)}var tf=hj,pj=Object.prototype,gj=pj.hasOwnProperty;function vj(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&gj.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var mj=vj,bg=wm;function bj(e){var t=new e.constructor(e.byteLength);return new bg(t).set(new bg(e)),t}var nf=bj,yj=nf;function _j(e,t){var n=t?yj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var wj=_j,xj=/\w*$/;function $j(e){var t=new e.constructor(e.source,xj.exec(e));return t.lastIndex=e.lastIndex,t}var Ej=$j,yg=as,_g=yg?yg.prototype:void 0,wg=_g?_g.valueOf:void 0;function kj(e){return wg?Object(wg.call(e)):{}}var Cj=kj,Sj=nf;function Tj(e,t){var n=t?Sj(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Aj=Tj,Ij=nf,Rj=wj,Oj=Ej,Lj=Cj,Pj=Aj,Mj="[object Boolean]",Bj="[object Date]",jj="[object Map]",Nj="[object Number]",Dj="[object RegExp]",Uj="[object Set]",zj="[object String]",Hj="[object Symbol]",Fj="[object ArrayBuffer]",qj="[object DataView]",Wj="[object Float32Array]",Zj="[object Float64Array]",Vj="[object Int8Array]",Kj="[object Int16Array]",Gj="[object Int32Array]",Qj="[object Uint8Array]",Yj="[object Uint8ClampedArray]",Jj="[object Uint16Array]",Xj="[object Uint32Array]";function eN(e,t,n){var i=e.constructor;switch(t){case Fj:return Ij(e);case Mj:case Bj:return new i(+e);case qj:return Rj(e,n);case Wj:case Zj:case Vj:case Kj:case Gj:case Qj:case Yj:case Jj:case Xj:return Pj(e,n);case jj:return new i;case Nj:case zj:return new i(e);case Dj:return Oj(e);case Uj:return new i;case Hj:return Lj(e)}}var tN=eN,nN=Ei,xg=Object.create,rN=function(){function e(){}return function(t){if(!nN(t))return{};if(xg)return xg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),iN=rN,sN=iN,oN=ef,aN=Zd;function lN(e){return typeof e.constructor=="function"&&!aN(e)?sN(oN(e)):{}}var cN=lN,uN=Dl,dN=Qr,fN="[object Map]";function hN(e){return dN(e)&&uN(e)==fN}var pN=hN,gN=pN,vN=qd,$g=Wd,Eg=$g&&$g.isMap,mN=Eg?vN(Eg):gN,bN=mN,yN=Dl,_N=Qr,wN="[object Set]";function xN(e){return _N(e)&&yN(e)==wN}var $N=xN,EN=$N,kN=qd,kg=Wd,Cg=kg&&kg.isSet,CN=Cg?kN(Cg):EN,SN=CN,TN=jd,AN=fB,IN=Jd,RN=SB,ON=qB,LN=WB,PN=VB,MN=YB,BN=cj,jN=Am,NN=tf,DN=Dl,UN=mj,zN=tN,HN=cN,FN=er,qN=zd,WN=bN,ZN=Ei,VN=SN,KN=Nl,GN=Xd,QN=1,YN=2,JN=4,Zm="[object Arguments]",XN="[object Array]",eD="[object Boolean]",tD="[object Date]",nD="[object Error]",Vm="[object Function]",rD="[object GeneratorFunction]",iD="[object Map]",sD="[object Number]",Km="[object Object]",oD="[object RegExp]",aD="[object Set]",lD="[object String]",cD="[object Symbol]",uD="[object WeakMap]",dD="[object ArrayBuffer]",fD="[object DataView]",hD="[object Float32Array]",pD="[object Float64Array]",gD="[object Int8Array]",vD="[object Int16Array]",mD="[object Int32Array]",bD="[object Uint8Array]",yD="[object Uint8ClampedArray]",_D="[object Uint16Array]",wD="[object Uint32Array]",tt={};tt[Zm]=tt[XN]=tt[dD]=tt[fD]=tt[eD]=tt[tD]=tt[hD]=tt[pD]=tt[gD]=tt[vD]=tt[mD]=tt[iD]=tt[sD]=tt[Km]=tt[oD]=tt[aD]=tt[lD]=tt[cD]=tt[bD]=tt[yD]=tt[_D]=tt[wD]=!0;tt[nD]=tt[Vm]=tt[uD]=!1;function Aa(e,t,n,i,o,a){var l,u=t&QN,d=t&YN,f=t&JN;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!ZN(e))return e;var p=FN(e);if(p){if(l=UN(e),!u)return PN(e,l)}else{var g=DN(e),m=g==Vm||g==rD;if(qN(e))return LN(e,u);if(g==Km||g==Zm||m&&!o){if(l=d||m?{}:HN(e),!u)return d?BN(e,ON(l,e)):MN(e,RN(l,e))}else{if(!tt[g])return o?e:{};l=zN(e,g,u)}}a||(a=new TN);var _=a.get(e);if(_)return _;a.set(e,l),VN(e)?e.forEach(function(x){l.add(Aa(x,t,n,x,e,a))}):WN(e)&&e.forEach(function(x,C){l.set(C,Aa(x,t,n,C,e,a))});var w=f?d?NN:jN:d?GN:KN,E=p?void 0:w(e);return AN(E||e,function(x,C){E&&(C=x,x=e[C]),IN(l,C,Aa(x,t,n,C,e,a))}),l}var xD=Aa;function $D(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var ED=$D;function kD(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var CD=kD,SD=Ul,TD=CD;function AD(e,t){return t.length<2?e:SD(e,TD(t,0,-1))}var ID=AD,RD=ws,OD=ED,LD=ID,PD=xs;function MD(e,t){return t=RD(t,e),e=LD(e,t),e==null||delete e[PD(OD(t))]}var BD=MD,jD=ls,ND=ef,DD=Qr,UD="[object Object]",zD=Function.prototype,HD=Object.prototype,Gm=zD.toString,FD=HD.hasOwnProperty,qD=Gm.call(Object);function WD(e){if(!DD(e)||jD(e)!=UD)return!1;var t=ND(e);if(t===null)return!0;var n=FD.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Gm.call(n)==qD}var ZD=WD,VD=ZD;function KD(e){return VD(e)?void 0:e}var GD=KD,Sg=as,QD=Ud,YD=er,Tg=Sg?Sg.isConcatSpreadable:void 0;function JD(e){return YD(e)||QD(e)||!!(Tg&&e&&e[Tg])}var XD=JD,eU=Nd,tU=XD;function Qm(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=tU),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?Qm(u,t-1,n,i,o):eU(o,u):i||(o[o.length]=u)}return o}var nU=Qm,rU=nU;function iU(e){var t=e==null?0:e.length;return t?rU(e,1):[]}var sU=iU;function oU(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var aU=oU,lU=aU,Ag=Math.max;function cU(e,t,n){return t=Ag(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=Ag(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),lU(e,this,u)}}var uU=cU;function dU(e){return function(){return e}}var fU=dU,hU=fU,Ig=Fm,pU=jm,gU=Ig?function(e,t){return Ig(e,"toString",{configurable:!0,enumerable:!1,value:hU(t),writable:!0})}:pU,vU=gU,mU=800,bU=16,yU=Date.now;function _U(e){var t=0,n=0;return function(){var i=yU(),o=bU-(i-n);if(n=i,o>0){if(++t>=mU)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var wU=_U,xU=vU,$U=wU,EU=$U(xU),kU=EU,CU=sU,SU=uU,TU=kU;function AU(e){return TU(SU(e,void 0,CU),e+"")}var IU=AU,RU=Qd,OU=xD,LU=BD,PU=ws,MU=wo,BU=GD,jU=IU,NU=tf,DU=1,UU=2,zU=4,HU=jU(function(e,t){var n={};if(e==null)return n;var i=!1;t=RU(t,function(a){return a=PU(a,e),i||(i=a.length>1),a}),MU(e,NU(e),n),i&&(n=OU(n,DU|UU|zU,BU));for(var o=t.length;o--;)LU(n,t[o]);return n}),FU=HU;const qU=ol(FU);var WU="Expected a function";function ZU(e){if(typeof e!="function")throw new TypeError(WU);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var VU=ZU,KU=Jd,GU=ws,QU=Hd,Rg=Ei,YU=xs;function JU(e,t,n,i){if(!Rg(e))return e;t=GU(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=YU(t[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var p=u[d];f=i?i(p,d,u):void 0,f===void 0&&(f=Rg(p)?p:QU(t[o+1])?[]:{})}KU(u,d,f),u=u[d]}return e}var XU=JU,ez=Ul,tz=XU,nz=ws;function rz(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=ez(e,l);n(u,l)&&tz(a,nz(l,e),u)}return a}var iz=rz,sz=Qd,oz=Yd,az=iz,lz=tf;function cz(e,t){if(e==null)return{};var n=sz(lz(e),function(i){return[i]});return t=oz(t),az(e,n,function(i,o){return t(i,o[0])})}var uz=cz,dz=Yd,fz=VU,hz=uz;function pz(e,t){return hz(e,fz(dz(t)))}var gz=pz;const vz=ol(gz),mz=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),bz=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),yz=j('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),_z=j('<div class="px-4 pt-4">'),wz=j('<div><span class="font-bold"></span><div>'),xz=j('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><span class="text-xs"></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),$z=j('<div class="h-24 shrink-0">'),Ez=j('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),kz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",Cz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",Sz=new RegExp(`^${kz}$`),Ym=new RegExp(`^${Cz}$`),Tz=e=>Sz.test(e),Az=e=>Ym.test(e),Iz=e=>{const t=mt(),n=Gr(),{config:i}=Xe(),[o,a]=Se(""),[l,u]=Se(""),[d,f]=Se(""),[p,g]=Se(""),[m,_]=Se(""),[w,E]=Se(""),[x,C]=Se(""),[I,k]=Se(""),{profile:$,invalidateProfile:R,query:L}=ms(()=>$n([n()])(([te])=>({pubkey:te}))),{updateProfile:B}=jl(),D=mi({mutationKey:["updateProfile"],mutationFn:(...te)=>B(...te).then(U=>Promise.allSettled(U.map(vs(1e4)))),onSuccess:te=>{const U=te.filter(ce=>ce.status==="fulfilled").length,ee=te.length-U;U===te.length?window.alert(t()("profile.edit.updateSucceeded")):U>0?window.alert(t()("profile.edit.failedToUpdatePartially",{count:ee})):window.alert(t()("profile.edit.failedToUpdate")),R().then(()=>L.refetch()).catch(ce=>console.error(ce)),e.onClose()},onError:te=>{console.error("failed to delete",te)}}),ie=()=>L.isLoading||D.isLoading,q=()=>ie();setInterval(()=>console.log(L.isLoading,D.isLoading),1e3);const J=()=>qU($(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),G=te=>{te.preventDefault();const U=n();if(U==null)return;const ee=vz({picture:o(),banner:l(),name:d(),display_name:p(),about:m(),website:w(),nip05:x(),lud06:Tz(I())?I():null,lud16:Az(I())?I():null},ce=>ce==null||ce.length===0);D.mutate({relayUrls:i().relayUrls,pubkey:U,profile:ee,otherProperties:J()})},le=te=>te.key==="Enter"&&te.preventDefault();return _r(()=>{const te=$();te!=null&&(L.refetch().catch(U=>console.error(U)),Ia(()=>{a(U=>te.picture??U),u(U=>te.banner??U),f(U=>te.name??U),g(U=>te.display_name??U),_(U=>te.about??U),E(U=>te.website??U),C(U=>te.nip05??U),te.lud16!=null?k(te.lud16):te.lud06!=null&&k(te.lud06)}))}),A(Ci,{closeButton:()=>A(Dg,{}),get onClose(){return e.onClose},get children(){return[(()=>{const te=yz(),U=te.firstChild;return S(te,A(pe,{get when(){return l().length>0},get fallback(){return $z()},keyed:!0,get children(){const ee=mz(),ce=ee.firstChild;return Be(()=>Fe(ce,"src",l())),ee}}),U),S(U,A(pe,{get when(){return o().length>0},get children(){const ee=bz();return Be(()=>Fe(ee,"src",o())),ee}})),te})(),A(pe,{get when(){return ie()},get children(){const te=_z();return S(te,()=>t()("general.loading")),te}}),(()=>{const te=xz(),U=te.firstChild,ee=U.firstChild,ce=ee.firstChild,ge=ce.nextSibling,Ee=ee.nextSibling,ze=Ee.firstChild,De=ze.nextSibling,ue=Ee.nextSibling,Y=ue.firstChild,de=Y.nextSibling,fe=de.firstChild,W=fe.nextSibling,re=ue.nextSibling,Q=re.firstChild,ye=Q.nextSibling,Ke=re.nextSibling,K=Ke.firstChild,We=K.nextSibling,ht=Ke.nextSibling,$e=ht.firstChild,rt=$e.nextSibling,Xt=ht.nextSibling,Ct=Xt.firstChild,Wt=Ct.nextSibling,Yr=Xt.nextSibling,En=Yr.firstChild,St=En.nextSibling,en=St.nextSibling,zn=Yr.nextSibling,xr=zn.firstChild,kn=xr.nextSibling;return U.addEventListener("submit",G),S(ce,()=>t()("profile.edit.icon")),ge.$$keydown=le,ge.addEventListener("blur",ke=>a(ke.currentTarget.value)),S(ze,()=>t()("profile.edit.banner")),De.$$keydown=le,De.addEventListener("blur",ke=>u(ke.currentTarget.value)),S(Y,()=>t()("profile.edit.name")),W.$$keydown=le,W.addEventListener("change",ke=>f(ke.currentTarget.value)),S(Q,()=>t()("profile.edit.displayName")),ye.$$keydown=le,ye.addEventListener("change",ke=>g(ke.currentTarget.value)),S(K,()=>t()("profile.edit.about")),We.addEventListener("change",ke=>_(ke.currentTarget.value)),S($e,()=>t()("profile.edit.website")),rt.$$keydown=le,rt.addEventListener("change",ke=>E(ke.currentTarget.value)),S(Ct,()=>t()("profile.edit.nip05")),Wt.$$keydown=le,Wt.addEventListener("change",ke=>C(ke.currentTarget.value)),S(En,()=>t()("profile.edit.lightningAddress")),S(St,()=>t()("profile.edit.lightningAddressDescription")),en.$$keydown=le,en.addEventListener("change",ke=>k(ke.currentTarget.value)),S(U,A(pe,{get when(){return Object.entries(J()).length>0},get children(){const ke=wz(),Zt=ke.firstChild,Vt=Zt.nextSibling;return S(Zt,()=>t()("profile.edit.otherProperties")),S(Vt,A(Ht,{get each(){return Object.entries(J())},children:([Cn,Sn])=>(()=>{const dn=Ez(),fn=dn.firstChild,Tn=fn.nextSibling;return S(fn,Cn),S(Tn,Sn),dn})()})),ke}}),zn),S(xr,()=>t()("profile.edit.save")),kn.$$click=()=>e.onClose(),S(kn,()=>t()("profile.edit.cancel")),S(U,A(pe,{get when(){return D.isLoading},get children(){return t()("profile.edit.updating")}}),null),Be(ke=>{const Zt=q(),Vt=q(),Cn=q(),Sn=q(),dn=q(),fn=q(),Tn=Ym.source,tr=q(),nr=q(),rr=D.isLoading;return Zt!==ke._v$&&(ge.disabled=ke._v$=Zt),Vt!==ke._v$2&&(De.disabled=ke._v$2=Vt),Cn!==ke._v$3&&(W.disabled=ke._v$3=Cn),Sn!==ke._v$4&&(ye.disabled=ke._v$4=Sn),dn!==ke._v$5&&(We.disabled=ke._v$5=dn),fn!==ke._v$6&&(rt.disabled=ke._v$6=fn),Tn!==ke._v$7&&Fe(Wt,"pattern",ke._v$7=Tn),tr!==ke._v$8&&(Wt.disabled=ke._v$8=tr),nr!==ke._v$9&&(en.disabled=ke._v$9=nr),rr!==ke._v$10&&(xr.disabled=ke._v$10=rr),ke},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Be(()=>ge.value=o()),Be(()=>De.value=l()),Be(()=>W.value=d()),Be(()=>ye.value=p()),Be(()=>We.value=m()),Be(()=>rt.value=w()),Be(()=>Wt.value=x()),Be(()=>en.value=I()),te})()]}})};bt(["keydown","click"]);const RH=()=>{const e=Gr(),{modalState:t,showProfile:n,closeModal:i}=Kr();return A(pe,{get when(){return t()},keyed:!0,children:o=>A(Wn,{get children(){return[A(Ye,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>A(uB,{pubkey:a,onClose:i})}),A(Ye,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return A(Iz,{onClose:()=>$n([e()])(([a])=>{n(a)})})}}),A(Ye,{get when(){return o.type==="AddColumn"},get children(){return A(IM,{onClose:i})}}),A(Ye,{get when(){return o.type==="About"},get children(){return A(TM,{onClose:i})}})]}})})},Rz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),Oz=(e={})=>(()=>{const t=Rz();return nt(t,e,!0,!0),t})(),Lz=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),Og=(e={})=>(()=>{const t=Lz();return nt(t,e,!0,!0),t})(),Pz=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),Mz=(e={})=>(()=>{const t=Pz();return nt(t,e,!0,!0),t})(),Bz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),jz=(e={})=>(()=>{const t=Bz();return nt(t,e,!0,!0),t})(),Nz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),Dz=(e={})=>(()=>{const t=Nz();return nt(t,e,!0,!0),t})(),Uz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),zz=(e={})=>(()=>{const t=Uz();return nt(t,e,!0,!0),t})(),Lg=gt.string().length(64).regex(/^[0-9a-f]{64}$/),Zu=gt.string().regex(/^\w+$/),Hz=gt.object({shortcode:Zu,url:gt.string().url(),keywords:gt.optional(gt.array(Zu))}),Fz=gt.object({manifest:gt.literal("emojipack_v1"),name:gt.string(),emojis:gt.array(Hz),description:gt.optional(gt.string()),author:gt.optional(Lg),publisher:gt.optional(Lg)}).refine(e=>Nm(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Jm=gt.record(Zu,gt.string().url());Fz.or(Jm);const qz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),Wz=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),Zz=j('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Vz=j('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),Vu=j('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Kz=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Gz=j('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Qz=j('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Yz=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),Jz=j('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Xz=j('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),eH=j('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),tH=j('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),nH=j('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),rH=j('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),iH=j('<div class="p-4">'),sH=j('<h2 class="flex-1 text-center text-lg font-bold">'),oH=j('<ul class="flex flex-col">'),aH=j('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),lH=j('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Xm=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,cH=Xm("https?"),uH=Xm("wss?"),dH=()=>{const e=mt(),t=Gr(),{showProfile:n,showProfileEdit:i}=Kr();return(()=>{const o=Wz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return S(a,()=>e()("config.profile.profile")),u.$$click=()=>$n([t()])(([f])=>{n(f)}),S(u,()=>e()("config.profile.openProfile")),d.$$click=()=>i(),S(d,()=>e()("config.profile.editProfile")),o})()},fH=()=>{const e=mt(),{config:t,addRelay:n,removeRelay:i}=Xe(),[o,a]=Se(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([_])=>_).join(`
`);if(d.length===0){window.alert(e()("config.relays.notConfigured"));return}if(!window.confirm(`${e()("config.relays.askImport")}

${f}`))return;const p=t().relayUrls.length;Ia(()=>{d.forEach(([_])=>{n(_)})});const m=t().relayUrls.length-p;window.alert(e()("config.relays.imported",{count:m}))};return[(()=>{const d=Zz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.nextSibling,_=m.firstChild,w=_.nextSibling;return S(f,()=>e()("config.relays.relays")),S(p,()=>e()("config.relays.numOfRelays",{count:t().relayUrls.length})),S(g,A(Ht,{get each(){return t().relayUrls},children:E=>(()=>{const x=Vu(),C=x.firstChild,I=C.nextSibling;return S(C,E),I.$$click=()=>i(E),S(I,A(is,{})),x})()})),m.addEventListener("submit",l),_.addEventListener("change",E=>a(E.currentTarget.value)),Fe(_,"pattern",uH),S(w,()=>e()("config.relays.addRelay")),Be(()=>_.value=o()),d})(),(()=>{const d=Vz(),f=d.firstChild,p=f.nextSibling;return S(f,()=>e()("config.relays.importRelays")),p.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(e()("config.relays.failedToImport"))})},S(p,()=>e()("config.relays.importFromExtension")),d})()]},hH=()=>{const e=mt(),{config:t,setConfig:n}=Xe(),i=[{id:"relative",name:e()("config.display.relativeTimeNotation"),example:e()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:e()("config.display.absoluteTimeNotationShort"),example:e()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:e()("config.display.absoluteTimeNotationLong"),example:e()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=Kz(),l=a.firstChild,u=l.nextSibling;return S(l,()=>e()("config.display.timeNotation")),S(u,A(Ht,{each:i,children:({id:d,name:f,example:p})=>(()=>{const g=Gz(),m=g.firstChild,_=m.nextSibling;return m.$$click=()=>o(d),S(m,f),S(_,p),Be(w=>{const E=t().dateFormat===d,x=t().dateFormat===d,C=t().dateFormat!==d,I=t().dateFormat!==d;return E!==w._v$&&m.classList.toggle("bg-rose-300",w._v$=E),x!==w._v$2&&m.classList.toggle("text-white",w._v$2=x),C!==w._v$3&&m.classList.toggle("bg-white",w._v$3=C),I!==w._v$4&&m.classList.toggle("text-rose-300",w._v$4=I),w},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Hs=e=>(()=>{const t=Qz();return t.$$click=n=>e.onClick(n),Be(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Fe(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),pH=()=>{const e=mt(),{config:t,setConfig:n}=Xe(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=Yz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,p=d.nextSibling,g=p.firstChild;return S(l,()=>e()("config.display.reaction")),S(f,()=>e()("config.display.enableEmojiReaction")),S(d,A(Hs,{get value(){return t().useEmojiReaction},onClick:()=>i()}),null),S(g,()=>e()("config.display.showEmojiReaction")),S(p,A(Hs,{get value(){return t().showEmojiReaction},onClick:()=>o()}),null),a})()},gH=()=>{const e=mt(),{config:t,saveEmoji:n,removeEmoji:i}=Xe(),[o,a]=Se(""),[l,u]=Se(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=Jz(),p=f.firstChild,g=p.nextSibling,m=g.nextSibling,_=m.firstChild,w=_.firstChild,E=w.nextSibling,x=_.nextSibling,C=x.firstChild,I=C.nextSibling,k=x.nextSibling;return S(p,()=>e()("config.customEmoji.customEmoji")),S(g,A(Ht,{get each(){return Object.values(t().customEmojis)},children:({shortcode:$,url:R})=>(()=>{const L=Xz(),B=L.firstChild,D=B.nextSibling,ie=D.nextSibling;return Fe(B,"src",R),Fe(B,"alt",$),S(D,$),ie.$$click=()=>i($),S(ie,A(is,{})),L})()})),m.addEventListener("submit",d),S(w,()=>e()("config.customEmoji.shortcode")),E.addEventListener("change",$=>a($.currentTarget.value)),S(C,()=>e()("config.customEmoji.url")),I.addEventListener("change",$=>u($.currentTarget.value)),Fe(I,"pattern",cH),S(k,()=>e()("config.customEmoji.addEmoji")),Be(()=>E.value=o()),Be(()=>I.value=l()),f})()},vH=()=>{const e=mt(),{saveEmojis:t}=Xe(),[n,i]=Se(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Jm.parse(JSON.parse(n())),u=qz(l);t(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=eH(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,p=f.nextSibling;return S(l,()=>e()("config.customEmoji.emojiImport")),S(u,()=>e()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),S(p,()=>e()("config.customEmoji.importEmoji")),Be(()=>f.value=n()),a})()},mH=()=>{const e=mt(),{config:t,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=Xe(),[a,l]=Se(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=tH(),f=d.firstChild,p=f.nextSibling;return S(f,()=>e()("config.mute.mutedUsers")),S(p,A(Ht,{get each(){return t().mutedPubkeys},children:g=>(()=>{const m=Vu(),_=m.firstChild,w=_.nextSibling;return S(_,A(Td,{pubkey:g})),w.$$click=()=>n(g),S(w,A(is,{})),m})()})),d})(),(()=>{const d=nH(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,_=m.nextSibling;return S(f,()=>e()("config.mute.mutedKeywords")),S(p,A(Ht,{get each(){return t().mutedKeywords},children:w=>(()=>{const E=Vu(),x=E.firstChild,C=x.nextSibling;return S(x,w),C.$$click=()=>o(w),S(C,A(is,{})),E})()})),g.addEventListener("submit",u),m.addEventListener("change",w=>l(w.currentTarget.value)),S(_,()=>e()("config.mute.add")),Be(()=>m.value=a()),d})()]},bH=()=>{const e=mt(),{config:t,setConfig:n}=Xe(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=rH(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,p=f.firstChild,g=f.nextSibling,m=g.firstChild,_=g.nextSibling,w=_.firstChild;return S(u,()=>e()("config.display.others")),S(p,()=>e()("config.display.keepOpenPostForm")),S(f,A(Hs,{get value(){return t().keepOpenPostForm},onClick:()=>i()}),null),S(m,()=>e()("config.display.showMediaByDefault")),S(g,A(Hs,{get value(){return t().showMedia},onClick:()=>o()}),null),S(w,()=>e()("config.display.hideNumbers")),S(_,A(Hs,{get value(){return t().hideCount},onClick:()=>a()}),null),l})()},yH=e=>{const t=mt(),[n,i]=Se(null),o=[{name:()=>t()("config.profile.profile"),icon:()=>A(zm,{}),render:()=>A(dH,{})},{name:()=>t()("config.relays.relays"),icon:()=>A(zz,{}),render:()=>A(fH,{})},{name:()=>t()("config.display.display"),icon:()=>A(Dz,{}),render:()=>[A(hH,{}),A(pH,{}),A(bH,{})]},{name:()=>t()("config.customEmoji.customEmoji"),icon:()=>A(fm,{}),render:()=>[A(gH,{}),A(vH,{})]},{name:()=>t()("config.mute.mute"),icon:()=>A(jz,{}),render:()=>A(mH,{})}],a=()=>{const l=n();return l==null?null:o[l]};return A(Ci,{get onClose(){return e.onClose},get children(){const l=iH();return S(l,A(pe,{get when(){return a()},get fallback(){return[(()=>{const u=sH();return S(u,()=>t()("config.config")),u})(),(()=>{const u=oH();return S(u,A(Ht,{each:o,children:(d,f)=>(()=>{const p=aH(),g=p.firstChild,m=g.firstChild;return g.$$click=()=>i(f),S(m,()=>d.icon()),S(g,()=>d.name(),null),p})()})),u})()]},keyed:!0,children:u=>(()=>{const d=lH(),f=d.firstChild,p=f.nextSibling;return f.$$click=()=>i(null),S(f,A(Dg,{})),S(p,()=>u.render()),d})()})),l}})};bt(["click"]);const _H=j('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),wH=j('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),xH=j('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),$H=()=>{let e,t;const{saveColumn:n}=Xe(),i=Ld(),[o,a]=Se(""),l=u=>{u.preventDefault(),n($d({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return A(Ad,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=wH();return S(u,A(Og,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=_H(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?br(p,d):t=d,S(f,A(Og,{})),Be(()=>d.value=o()),u}})},OH=()=>{let e;const{showAddColumn:t,showAbout:n}=Kr(),{config:i}=Xe(),[o,a]=Se(!1),[l,u]=Se(!1),d=()=>{e?.focus(),e?.click()},f=()=>a(!0),p=()=>a(!1),g=()=>a(m=>!m);return YS(()=>({commandType:"openPostForm",handler:()=>{f(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const m=xH(),_=m.firstChild,w=_.firstChild,E=w.firstChild,x=w.nextSibling,C=x.nextSibling,I=C.firstChild,k=I.nextSibling,$=k.nextSibling,R=$.firstChild,L=_.nextSibling;return E.$$click=()=>g(),S(E,A(Mz,{})),S(w,A($H,{}),null),I.$$click=()=>t(),S(I,A(Pv,{})),k.$$click=()=>u(B=>!B),S(k,A(Oz,{})),$.$$click=()=>n(),S(L,A(bm,{textAreaRef:B=>{e=B},onClose:p})),S(m,A(pe,{get when(){return l()},get children(){return A(yH,{onClose:()=>u(!1)})}}),null),Be(B=>{const D=Ku("images/rabbit_app_256.png"),ie=!!(o()||i().keepOpenPostForm),q=!(o()||i().keepOpenPostForm);return D!==B._v$&&Fe(R,"src",B._v$=D),ie!==B._v$2&&L.classList.toggle("static",B._v$2=ie),q!==B._v$3&&L.classList.toggle("hidden",B._v$3=q),B},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()};bt(["click"]);export{Dg as A,gs as B,b6 as C,WA as D,ao as E,yM as F,zm as G,vM as H,Lv as I,Hm as J,vt as K,TH as L,$M as M,Ei as N,Vd as O,ol as P,RH as Q,TC as R,OH as S,KA as T,Td as U,Sd as V,go as W,Yn as _,bi as a,Xe as b,IH as c,YS as d,wA as e,Ld as f,Uk as g,Gr as h,gi as i,os as j,vs as k,pg as l,av as m,li as n,ms as o,Ev as p,fC as q,Sl as r,jv as s,kd as t,Dm as u,qA as v,Kr as w,Ga as x,$n as y,gt as z};
//# sourceMappingURL=SideBar-b6107bfb.js.map
