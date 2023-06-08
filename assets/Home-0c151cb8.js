import{S as xg,s as vu,n as gx,i as Sp,a as Tp,t as mx,f as vx,c as bx,r as Ap,b as yx,d as $g,g as _x,u as rs,e as kg,h as Ta,o as gr,j as an,k as Fs,l as nl,p as Ip,m as Ke,q as j,v as ct,w as $e,x as O,y as $,z as de,A as Fe,B as wx,M as De,C as xx,D as Sn,E as rl,F as dr,G as $x,H as Be,I as kx,J as mr,K as Ot,L as Ex,N as gt,O as Cx,P as Sx,Q as Ds,R as Tx,T as Ax}from"./index-6b2b63b9.js";import{c as Ki,u as Di,a as Ix,b as Rx,r as Vu,d as Ox}from"./resolveAsset-60307ce7.js";class Lx extends xg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Rp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),vu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Op(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(gx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Sp||this.currentResult.isStale||!Tp(this.options.staleTime))return;const n=mx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Sp||this.options.enabled===!1||!Tp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||vx.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==i,h=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:x,errorUpdatedAt:k,fetchStatus:w,status:E}=g,_=!1,A=!1,R;if(n._optimisticResults){const U=this.hasListeners(),te=!U&&Rp(t,n),W=U&&Op(t,i,n,o);(te||W)&&(w=bx(t.options.networkMode)?"fetching":"paused",v||(E="loading")),n._optimisticResults==="isRestoring"&&(w="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&E!=="error")R=p.data,v=p.dataUpdatedAt,E=p.status,_=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===c?.data&&n.select===this.selectFn)R=this.selectResult;else try{this.selectFn=n.select,R=n.select(g.data),R=Ap(a?.data,R,n),this.selectResult=R,this.selectError=null}catch(U){this.selectError=U}else R=g.data;if(typeof n.placeholderData<"u"&&typeof R>"u"&&E==="loading"){let U;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)U=a.data;else if(U=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof U<"u")try{U=n.select(U),this.selectError=null}catch(te){this.selectError=te}typeof U<"u"&&(E="success",R=Ap(a?.data,U,n),A=!0)}this.selectError&&(x=this.selectError,R=this.selectResult,k=Date.now(),E="error");const T=w==="fetching",B=E==="loading",C=E==="error";return{status:E,fetchStatus:w,isLoading:B,isSuccess:E==="success",isError:C,isInitialLoading:B&&T,data:R,dataUpdatedAt:v,error:x,errorUpdatedAt:k,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:T,isRefetching:T&&!B,isLoadingError:C&&g.dataUpdatedAt===0,isPaused:w==="paused",isPlaceholderData:A,isPreviousData:_,isRefetchError:C&&g.dataUpdatedAt!==0,isStale:Gu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,vu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==n[h]&&u.has(h)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!yx(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){$g.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,h;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(h=this.options).onSettled)==null||d.call(h,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Px(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Rp(e,t){return Px(e,t)||e.state.dataUpdatedAt>0&&bu(e,t,t.refetchOnMount)}function bu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Gu(e,t)}return!1}function Op(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Gu(e,n)}function Gu(e,t){return e.isStaleByTime(t.staleTime)}class Mx extends xg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),vu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:_x(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){$g.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,h;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(h=this.mutateOptions).onSettled)==null||d.call(h,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function Bx(e){return typeof e=="function"}function Lp(e,t,n){if(!Bx(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Eg(e,t){return typeof e=="function"?e(...t):!!e}function jx(e,t){const n=rs({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[c,u]=Ki(a.getOptimisticResult(o)),[d,{refetch:h,mutate:p}]=kg(()=>new Promise(k=>{c.isFetching&&c.isLoading||(Di(c.data)===i&&k(void 0),k(Di(c.data)))}));Ta(()=>{p(()=>Di(c.data)),h()});let g=[];const v=a.subscribe(k=>{g.push(()=>{Ta(()=>{const w={...Di(k)};w.data===void 0&&(w.data=i),u(Di(w)),p(()=>Di(k.data)),h()})}),queueMicrotask(()=>{const w=g.pop();w&&w(),g=[]})});gr(()=>v()),an(()=>{a.setOptions(o,{listeners:!1})}),Fs(()=>{const k=n.defaultQueryOptions(e);a.setOptions(k)}),Fs(nl(()=>c.status,()=>{if(c.isError&&!c.isFetching&&Eg(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const x={get(k,w){return w==="data"?d():Reflect.get(k,w)}};return new Proxy(c,x)}function is(e,t,n){const[i,o]=Ki(Lp(e,t,n));return Fs(()=>{const a=Lp(e,t,n);o(a)}),jx(i,Lx)}function pi(e,t,n){const[i,o]=Ki(Ip(e,t,n)),a=rs({context:i.context}),c=new Mx(a,i),u=(g,v)=>{c.mutate(g,v).catch(Ux)},[d,h]=Ki({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});Fs(()=>{const g=Ip(e,t,n);o(g),c.setOptions(g)}),Fs(nl(()=>d.status,()=>{if(d.isError&&Eg(c.options.useErrorBoundary,[d.error]))throw d.error}));const p=c.subscribe(g=>{h({...g,mutate:u,mutateAsync:g.mutate})});return gr(p),d}function Ux(){}const Nx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),Cg=(e={})=>(()=>{const t=Nx();return Ke(t,e,!0,!0),t})();var cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function il(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Aa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Aa.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",g=1,v=2,x=4,k=1,w=2,E=1,_=2,A=4,R=8,T=16,B=32,C=64,P=128,U=256,te=512,W=30,Y="...",Z=800,X=16,se=1,q=2,D=3,ne=1/0,G=9007199254740991,ae=17976931348623157e292,ue=0/0,re=4294967295,Q=re-1,he=re>>>1,we=[["ary",P],["bind",E],["bindKey",_],["curry",R],["curryRight",T],["flip",te],["partial",B],["partialRight",C],["rearg",U]],Re="[object Arguments]",Je="[object Array]",J="[object AsyncFunction]",qe="[object Boolean]",nt="[object Date]",Te="[object DOMException]",Xe="[object Error]",rt="[object Function]",Tt="[object GeneratorFunction]",Ve="[object Map]",Ht="[object Number]",Kn="[object Null]",_t="[object Object]",wr="[object Promise]",wi="[object Proxy]",Ln="[object RegExp]",mt="[object Set]",bn="[object String]",Pn="[object Symbol]",xi="[object Undefined]",ye="[object WeakMap]",Vn="[object WeakSet]",Gt="[object ArrayBuffer]",Ft="[object DataView]",xr="[object Float32Array]",Gn="[object Float64Array]",Qn="[object Int8Array]",$r="[object Int16Array]",$i="[object Int32Array]",ki="[object Uint8Array]",Ei="[object Uint8ClampedArray]",jl="[object Uint16Array]",Ul="[object Uint32Array]",Bv=/\b__p \+= '';/g,jv=/\b(__p \+=) '' \+/g,Uv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yd=/&(?:amp|lt|gt|quot|#39);/g,Jd=/[&<>"']/g,Nv=RegExp(Yd.source),Dv=RegExp(Jd.source),zv=/<%-([\s\S]+?)%>/g,Hv=/<%([\s\S]+?)%>/g,Xd=/<%=([\s\S]+?)%>/g,Fv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qv=/^\w*$/,Wv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,Zv=RegExp(Nl.source),Dl=/^\s+/,Kv=/\s/,Vv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Gv=/\{\n\/\* \[wrapped with (.+)\] \*/,Qv=/,? & /,Yv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Jv=/[()=,{}\[\]\/\s]/,Xv=/\\(\\)?/g,e2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ef=/\w*$/,t2=/^[-+]0x[0-9a-f]+$/i,n2=/^0b[01]+$/i,r2=/^\[object .+?Constructor\]$/,i2=/^0o[0-7]+$/i,s2=/^(?:0|[1-9]\d*)$/,o2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xo=/($^)/,a2=/['\n\r\u2028\u2029\\]/g,$o="\\ud800-\\udfff",l2="\\u0300-\\u036f",c2="\\ufe20-\\ufe2f",u2="\\u20d0-\\u20ff",tf=l2+c2+u2,nf="\\u2700-\\u27bf",rf="a-z\\xdf-\\xf6\\xf8-\\xff",d2="\\xac\\xb1\\xd7\\xf7",f2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",h2="\\u2000-\\u206f",p2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sf="A-Z\\xc0-\\xd6\\xd8-\\xde",of="\\ufe0e\\ufe0f",af=d2+f2+h2+p2,zl="['’]",g2="["+$o+"]",lf="["+af+"]",ko="["+tf+"]",cf="\\d+",m2="["+nf+"]",uf="["+rf+"]",df="[^"+$o+af+cf+nf+rf+sf+"]",Hl="\\ud83c[\\udffb-\\udfff]",v2="(?:"+ko+"|"+Hl+")",ff="[^"+$o+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",ql="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+sf+"]",hf="\\u200d",pf="(?:"+uf+"|"+df+")",b2="(?:"+Ci+"|"+df+")",gf="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",mf="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",vf=v2+"?",bf="["+of+"]?",y2="(?:"+hf+"(?:"+[ff,Fl,ql].join("|")+")"+bf+vf+")*",_2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",w2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",yf=bf+vf+y2,x2="(?:"+[m2,Fl,ql].join("|")+")"+yf,$2="(?:"+[ff+ko+"?",ko,Fl,ql,g2].join("|")+")",k2=RegExp(zl,"g"),E2=RegExp(ko,"g"),Wl=RegExp(Hl+"(?="+Hl+")|"+$2+yf,"g"),C2=RegExp([Ci+"?"+uf+"+"+gf+"(?="+[lf,Ci,"$"].join("|")+")",b2+"+"+mf+"(?="+[lf,Ci+pf,"$"].join("|")+")",Ci+"?"+pf+"+"+gf,Ci+"+"+mf,w2,_2,cf,x2].join("|"),"g"),S2=RegExp("["+hf+$o+tf+of+"]"),T2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,A2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],I2=-1,et={};et[xr]=et[Gn]=et[Qn]=et[$r]=et[$i]=et[ki]=et[Ei]=et[jl]=et[Ul]=!0,et[Re]=et[Je]=et[Gt]=et[qe]=et[Ft]=et[nt]=et[Xe]=et[rt]=et[Ve]=et[Ht]=et[_t]=et[Ln]=et[mt]=et[bn]=et[ye]=!1;var Qe={};Qe[Re]=Qe[Je]=Qe[Gt]=Qe[Ft]=Qe[qe]=Qe[nt]=Qe[xr]=Qe[Gn]=Qe[Qn]=Qe[$r]=Qe[$i]=Qe[Ve]=Qe[Ht]=Qe[_t]=Qe[Ln]=Qe[mt]=Qe[bn]=Qe[Pn]=Qe[ki]=Qe[Ei]=Qe[jl]=Qe[Ul]=!0,Qe[Xe]=Qe[rt]=Qe[ye]=!1;var R2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},O2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},L2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},P2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},M2=parseFloat,B2=parseInt,_f=typeof cr=="object"&&cr&&cr.Object===Object&&cr,j2=typeof self=="object"&&self&&self.Object===Object&&self,kt=_f||j2||Function("return this")(),Zl=t&&!t.nodeType&&t,Xr=Zl&&!0&&e&&!e.nodeType&&e,wf=Xr&&Xr.exports===Zl,Kl=wf&&_f.process,ln=function(){try{var L=Xr&&Xr.require&&Xr.require("util").types;return L||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),xf=ln&&ln.isArrayBuffer,$f=ln&&ln.isDate,kf=ln&&ln.isMap,Ef=ln&&ln.isRegExp,Cf=ln&&ln.isSet,Sf=ln&&ln.isTypedArray;function Qt(L,z,N){switch(N.length){case 0:return L.call(z);case 1:return L.call(z,N[0]);case 2:return L.call(z,N[0],N[1]);case 3:return L.call(z,N[0],N[1],N[2])}return L.apply(z,N)}function U2(L,z,N,le){for(var xe=-1,He=L==null?0:L.length;++xe<He;){var vt=L[xe];z(le,vt,N(vt),L)}return le}function cn(L,z){for(var N=-1,le=L==null?0:L.length;++N<le&&z(L[N],N,L)!==!1;);return L}function N2(L,z){for(var N=L==null?0:L.length;N--&&z(L[N],N,L)!==!1;);return L}function Tf(L,z){for(var N=-1,le=L==null?0:L.length;++N<le;)if(!z(L[N],N,L))return!1;return!0}function kr(L,z){for(var N=-1,le=L==null?0:L.length,xe=0,He=[];++N<le;){var vt=L[N];z(vt,N,L)&&(He[xe++]=vt)}return He}function Eo(L,z){var N=L==null?0:L.length;return!!N&&Si(L,z,0)>-1}function Vl(L,z,N){for(var le=-1,xe=L==null?0:L.length;++le<xe;)if(N(z,L[le]))return!0;return!1}function it(L,z){for(var N=-1,le=L==null?0:L.length,xe=Array(le);++N<le;)xe[N]=z(L[N],N,L);return xe}function Er(L,z){for(var N=-1,le=z.length,xe=L.length;++N<le;)L[xe+N]=z[N];return L}function Gl(L,z,N,le){var xe=-1,He=L==null?0:L.length;for(le&&He&&(N=L[++xe]);++xe<He;)N=z(N,L[xe],xe,L);return N}function D2(L,z,N,le){var xe=L==null?0:L.length;for(le&&xe&&(N=L[--xe]);xe--;)N=z(N,L[xe],xe,L);return N}function Ql(L,z){for(var N=-1,le=L==null?0:L.length;++N<le;)if(z(L[N],N,L))return!0;return!1}var z2=Yl("length");function H2(L){return L.split("")}function F2(L){return L.match(Yv)||[]}function Af(L,z,N){var le;return N(L,function(xe,He,vt){if(z(xe,He,vt))return le=He,!1}),le}function Co(L,z,N,le){for(var xe=L.length,He=N+(le?1:-1);le?He--:++He<xe;)if(z(L[He],He,L))return He;return-1}function Si(L,z,N){return z===z?tb(L,z,N):Co(L,If,N)}function q2(L,z,N,le){for(var xe=N-1,He=L.length;++xe<He;)if(le(L[xe],z))return xe;return-1}function If(L){return L!==L}function Rf(L,z){var N=L==null?0:L.length;return N?Xl(L,z)/N:ue}function Yl(L){return function(z){return z==null?n:z[L]}}function Jl(L){return function(z){return L==null?n:L[z]}}function Of(L,z,N,le,xe){return xe(L,function(He,vt,Ge){N=le?(le=!1,He):z(N,He,vt,Ge)}),N}function W2(L,z){var N=L.length;for(L.sort(z);N--;)L[N]=L[N].value;return L}function Xl(L,z){for(var N,le=-1,xe=L.length;++le<xe;){var He=z(L[le]);He!==n&&(N=N===n?He:N+He)}return N}function ec(L,z){for(var N=-1,le=Array(L);++N<L;)le[N]=z(N);return le}function Z2(L,z){return it(z,function(N){return[N,L[N]]})}function Lf(L){return L&&L.slice(0,jf(L)+1).replace(Dl,"")}function Yt(L){return function(z){return L(z)}}function tc(L,z){return it(z,function(N){return L[N]})}function ws(L,z){return L.has(z)}function Pf(L,z){for(var N=-1,le=L.length;++N<le&&Si(z,L[N],0)>-1;);return N}function Mf(L,z){for(var N=L.length;N--&&Si(z,L[N],0)>-1;);return N}function K2(L,z){for(var N=L.length,le=0;N--;)L[N]===z&&++le;return le}var V2=Jl(R2),G2=Jl(O2);function Q2(L){return"\\"+P2[L]}function Y2(L,z){return L==null?n:L[z]}function Ti(L){return S2.test(L)}function J2(L){return T2.test(L)}function X2(L){for(var z,N=[];!(z=L.next()).done;)N.push(z.value);return N}function nc(L){var z=-1,N=Array(L.size);return L.forEach(function(le,xe){N[++z]=[xe,le]}),N}function Bf(L,z){return function(N){return L(z(N))}}function Cr(L,z){for(var N=-1,le=L.length,xe=0,He=[];++N<le;){var vt=L[N];(vt===z||vt===p)&&(L[N]=p,He[xe++]=N)}return He}function So(L){var z=-1,N=Array(L.size);return L.forEach(function(le){N[++z]=le}),N}function eb(L){var z=-1,N=Array(L.size);return L.forEach(function(le){N[++z]=[le,le]}),N}function tb(L,z,N){for(var le=N-1,xe=L.length;++le<xe;)if(L[le]===z)return le;return-1}function nb(L,z,N){for(var le=N+1;le--;)if(L[le]===z)return le;return le}function Ai(L){return Ti(L)?ib(L):z2(L)}function yn(L){return Ti(L)?sb(L):H2(L)}function jf(L){for(var z=L.length;z--&&Kv.test(L.charAt(z)););return z}var rb=Jl(L2);function ib(L){for(var z=Wl.lastIndex=0;Wl.test(L);)++z;return z}function sb(L){return L.match(Wl)||[]}function ob(L){return L.match(C2)||[]}var ab=function L(z){z=z==null?kt:Ii.defaults(kt.Object(),z,Ii.pick(kt,A2));var N=z.Array,le=z.Date,xe=z.Error,He=z.Function,vt=z.Math,Ge=z.Object,rc=z.RegExp,lb=z.String,un=z.TypeError,To=N.prototype,cb=He.prototype,Ri=Ge.prototype,Ao=z["__core-js_shared__"],Io=cb.toString,Ze=Ri.hasOwnProperty,ub=0,Uf=function(){var r=/[^.]+$/.exec(Ao&&Ao.keys&&Ao.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Ro=Ri.toString,db=Io.call(Ge),fb=kt._,hb=rc("^"+Io.call(Ze).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Oo=wf?z.Buffer:n,Sr=z.Symbol,Lo=z.Uint8Array,Nf=Oo?Oo.allocUnsafe:n,Po=Bf(Ge.getPrototypeOf,Ge),Df=Ge.create,zf=Ri.propertyIsEnumerable,Mo=To.splice,Hf=Sr?Sr.isConcatSpreadable:n,xs=Sr?Sr.iterator:n,ei=Sr?Sr.toStringTag:n,Bo=function(){try{var r=si(Ge,"defineProperty");return r({},"",{}),r}catch{}}(),pb=z.clearTimeout!==kt.clearTimeout&&z.clearTimeout,gb=le&&le.now!==kt.Date.now&&le.now,mb=z.setTimeout!==kt.setTimeout&&z.setTimeout,jo=vt.ceil,Uo=vt.floor,ic=Ge.getOwnPropertySymbols,vb=Oo?Oo.isBuffer:n,Ff=z.isFinite,bb=To.join,yb=Bf(Ge.keys,Ge),bt=vt.max,At=vt.min,_b=le.now,wb=z.parseInt,qf=vt.random,xb=To.reverse,sc=si(z,"DataView"),$s=si(z,"Map"),oc=si(z,"Promise"),Oi=si(z,"Set"),ks=si(z,"WeakMap"),Es=si(Ge,"create"),No=ks&&new ks,Li={},$b=oi(sc),kb=oi($s),Eb=oi(oc),Cb=oi(Oi),Sb=oi(ks),Do=Sr?Sr.prototype:n,Cs=Do?Do.valueOf:n,Wf=Do?Do.toString:n;function b(r){if(at(r)&&!Ee(r)&&!(r instanceof je)){if(r instanceof dn)return r;if(Ze.call(r,"__wrapped__"))return Zh(r)}return new dn(r)}var Pi=function(){function r(){}return function(s){if(!st(s))return{};if(Df)return Df(s);r.prototype=s;var l=new r;return r.prototype=n,l}}();function zo(){}function dn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:zv,evaluate:Hv,interpolate:Xd,variable:"",imports:{_:b}},b.prototype=zo.prototype,b.prototype.constructor=b,dn.prototype=Pi(zo.prototype),dn.prototype.constructor=dn;function je(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function Tb(){var r=new je(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function Ab(){if(this.__filtered__){var r=new je(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Ib(){var r=this.__wrapped__.value(),s=this.__dir__,l=Ee(r),f=s<0,m=l?r.length:0,y=Hy(0,m,this.__views__),S=y.start,I=y.end,M=I-S,H=f?I:S-1,F=this.__iteratees__,V=F.length,ie=0,fe=At(M,this.__takeCount__);if(!l||!f&&m==M&&fe==M)return gh(r,this.__actions__);var ve=[];e:for(;M--&&ie<fe;){H+=s;for(var Ae=-1,be=r[H];++Ae<V;){var Pe=F[Ae],Ne=Pe.iteratee,en=Pe.type,jt=Ne(be);if(en==q)be=jt;else if(!jt){if(en==se)continue e;break e}}ve[ie++]=be}return ve}je.prototype=Pi(zo.prototype),je.prototype.constructor=je;function ti(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function Rb(){this.__data__=Es?Es(null):{},this.size=0}function Ob(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Lb(r){var s=this.__data__;if(Es){var l=s[r];return l===d?n:l}return Ze.call(s,r)?s[r]:n}function Pb(r){var s=this.__data__;return Es?s[r]!==n:Ze.call(s,r)}function Mb(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Es&&s===n?d:s,this}ti.prototype.clear=Rb,ti.prototype.delete=Ob,ti.prototype.get=Lb,ti.prototype.has=Pb,ti.prototype.set=Mb;function Yn(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function Bb(){this.__data__=[],this.size=0}function jb(r){var s=this.__data__,l=Ho(s,r);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():Mo.call(s,l,1),--this.size,!0}function Ub(r){var s=this.__data__,l=Ho(s,r);return l<0?n:s[l][1]}function Nb(r){return Ho(this.__data__,r)>-1}function Db(r,s){var l=this.__data__,f=Ho(l,r);return f<0?(++this.size,l.push([r,s])):l[f][1]=s,this}Yn.prototype.clear=Bb,Yn.prototype.delete=jb,Yn.prototype.get=Ub,Yn.prototype.has=Nb,Yn.prototype.set=Db;function Jn(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function zb(){this.size=0,this.__data__={hash:new ti,map:new($s||Yn),string:new ti}}function Hb(r){var s=ea(this,r).delete(r);return this.size-=s?1:0,s}function Fb(r){return ea(this,r).get(r)}function qb(r){return ea(this,r).has(r)}function Wb(r,s){var l=ea(this,r),f=l.size;return l.set(r,s),this.size+=l.size==f?0:1,this}Jn.prototype.clear=zb,Jn.prototype.delete=Hb,Jn.prototype.get=Fb,Jn.prototype.has=qb,Jn.prototype.set=Wb;function ni(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new Jn;++s<l;)this.add(r[s])}function Zb(r){return this.__data__.set(r,d),this}function Kb(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=Zb,ni.prototype.has=Kb;function _n(r){var s=this.__data__=new Yn(r);this.size=s.size}function Vb(){this.__data__=new Yn,this.size=0}function Gb(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function Qb(r){return this.__data__.get(r)}function Yb(r){return this.__data__.has(r)}function Jb(r,s){var l=this.__data__;if(l instanceof Yn){var f=l.__data__;if(!$s||f.length<o-1)return f.push([r,s]),this.size=++l.size,this;l=this.__data__=new Jn(f)}return l.set(r,s),this.size=l.size,this}_n.prototype.clear=Vb,_n.prototype.delete=Gb,_n.prototype.get=Qb,_n.prototype.has=Yb,_n.prototype.set=Jb;function Zf(r,s){var l=Ee(r),f=!l&&ai(r),m=!l&&!f&&Or(r),y=!l&&!f&&!m&&Ui(r),S=l||f||m||y,I=S?ec(r.length,lb):[],M=I.length;for(var H in r)(s||Ze.call(r,H))&&!(S&&(H=="length"||m&&(H=="offset"||H=="parent")||y&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||nr(H,M)))&&I.push(H);return I}function Kf(r){var s=r.length;return s?r[vc(0,s-1)]:n}function Xb(r,s){return ta(qt(r),ri(s,0,r.length))}function ey(r){return ta(qt(r))}function ac(r,s,l){(l!==n&&!wn(r[s],l)||l===n&&!(s in r))&&Xn(r,s,l)}function Ss(r,s,l){var f=r[s];(!(Ze.call(r,s)&&wn(f,l))||l===n&&!(s in r))&&Xn(r,s,l)}function Ho(r,s){for(var l=r.length;l--;)if(wn(r[l][0],s))return l;return-1}function ty(r,s,l,f){return Tr(r,function(m,y,S){s(f,m,l(m),S)}),f}function Vf(r,s){return r&&Bn(s,wt(s),r)}function ny(r,s){return r&&Bn(s,Zt(s),r)}function Xn(r,s,l){s=="__proto__"&&Bo?Bo(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function lc(r,s){for(var l=-1,f=s.length,m=N(f),y=r==null;++l<f;)m[l]=y?n:Hc(r,s[l]);return m}function ri(r,s,l){return r===r&&(l!==n&&(r=r<=l?r:l),s!==n&&(r=r>=s?r:s)),r}function fn(r,s,l,f,m,y){var S,I=s&g,M=s&v,H=s&x;if(l&&(S=m?l(r,f,m,y):l(r)),S!==n)return S;if(!st(r))return r;var F=Ee(r);if(F){if(S=qy(r),!I)return qt(r,S)}else{var V=It(r),ie=V==rt||V==Tt;if(Or(r))return bh(r,I);if(V==_t||V==Re||ie&&!m){if(S=M||ie?{}:jh(r),!I)return M?Ly(r,ny(S,r)):Oy(r,Vf(S,r))}else{if(!Qe[V])return m?r:{};S=Wy(r,V,I)}}y||(y=new _n);var fe=y.get(r);if(fe)return fe;y.set(r,S),fp(r)?r.forEach(function(be){S.add(fn(be,s,l,be,r,y))}):up(r)&&r.forEach(function(be,Pe){S.set(Pe,fn(be,s,l,Pe,r,y))});var ve=H?M?Tc:Sc:M?Zt:wt,Ae=F?n:ve(r);return cn(Ae||r,function(be,Pe){Ae&&(Pe=be,be=r[Pe]),Ss(S,Pe,fn(be,s,l,Pe,r,y))}),S}function ry(r){var s=wt(r);return function(l){return Gf(l,r,s)}}function Gf(r,s,l){var f=l.length;if(r==null)return!f;for(r=Ge(r);f--;){var m=l[f],y=s[m],S=r[m];if(S===n&&!(m in r)||!y(S))return!1}return!0}function Qf(r,s,l){if(typeof r!="function")throw new un(c);return Ps(function(){r.apply(n,l)},s)}function Ts(r,s,l,f){var m=-1,y=Eo,S=!0,I=r.length,M=[],H=s.length;if(!I)return M;l&&(s=it(s,Yt(l))),f?(y=Vl,S=!1):s.length>=o&&(y=ws,S=!1,s=new ni(s));e:for(;++m<I;){var F=r[m],V=l==null?F:l(F);if(F=f||F!==0?F:0,S&&V===V){for(var ie=H;ie--;)if(s[ie]===V)continue e;M.push(F)}else y(s,V,f)||M.push(F)}return M}var Tr=$h(Mn),Yf=$h(uc,!0);function iy(r,s){var l=!0;return Tr(r,function(f,m,y){return l=!!s(f,m,y),l}),l}function Fo(r,s,l){for(var f=-1,m=r.length;++f<m;){var y=r[f],S=s(y);if(S!=null&&(I===n?S===S&&!Xt(S):l(S,I)))var I=S,M=y}return M}function sy(r,s,l,f){var m=r.length;for(l=Ce(l),l<0&&(l=-l>m?0:m+l),f=f===n||f>m?m:Ce(f),f<0&&(f+=m),f=l>f?0:pp(f);l<f;)r[l++]=s;return r}function Jf(r,s){var l=[];return Tr(r,function(f,m,y){s(f,m,y)&&l.push(f)}),l}function Et(r,s,l,f,m){var y=-1,S=r.length;for(l||(l=Ky),m||(m=[]);++y<S;){var I=r[y];s>0&&l(I)?s>1?Et(I,s-1,l,f,m):Er(m,I):f||(m[m.length]=I)}return m}var cc=kh(),Xf=kh(!0);function Mn(r,s){return r&&cc(r,s,wt)}function uc(r,s){return r&&Xf(r,s,wt)}function qo(r,s){return kr(s,function(l){return rr(r[l])})}function ii(r,s){s=Ir(s,r);for(var l=0,f=s.length;r!=null&&l<f;)r=r[jn(s[l++])];return l&&l==f?r:n}function eh(r,s,l){var f=s(r);return Ee(r)?f:Er(f,l(r))}function Mt(r){return r==null?r===n?xi:Kn:ei&&ei in Ge(r)?zy(r):e_(r)}function dc(r,s){return r>s}function oy(r,s){return r!=null&&Ze.call(r,s)}function ay(r,s){return r!=null&&s in Ge(r)}function ly(r,s,l){return r>=At(s,l)&&r<bt(s,l)}function fc(r,s,l){for(var f=l?Vl:Eo,m=r[0].length,y=r.length,S=y,I=N(y),M=1/0,H=[];S--;){var F=r[S];S&&s&&(F=it(F,Yt(s))),M=At(F.length,M),I[S]=!l&&(s||m>=120&&F.length>=120)?new ni(S&&F):n}F=r[0];var V=-1,ie=I[0];e:for(;++V<m&&H.length<M;){var fe=F[V],ve=s?s(fe):fe;if(fe=l||fe!==0?fe:0,!(ie?ws(ie,ve):f(H,ve,l))){for(S=y;--S;){var Ae=I[S];if(!(Ae?ws(Ae,ve):f(r[S],ve,l)))continue e}ie&&ie.push(ve),H.push(fe)}}return H}function cy(r,s,l,f){return Mn(r,function(m,y,S){s(f,l(m),y,S)}),f}function As(r,s,l){s=Ir(s,r),r=zh(r,s);var f=r==null?r:r[jn(pn(s))];return f==null?n:Qt(f,r,l)}function th(r){return at(r)&&Mt(r)==Re}function uy(r){return at(r)&&Mt(r)==Gt}function dy(r){return at(r)&&Mt(r)==nt}function Is(r,s,l,f,m){return r===s?!0:r==null||s==null||!at(r)&&!at(s)?r!==r&&s!==s:fy(r,s,l,f,Is,m)}function fy(r,s,l,f,m,y){var S=Ee(r),I=Ee(s),M=S?Je:It(r),H=I?Je:It(s);M=M==Re?_t:M,H=H==Re?_t:H;var F=M==_t,V=H==_t,ie=M==H;if(ie&&Or(r)){if(!Or(s))return!1;S=!0,F=!1}if(ie&&!F)return y||(y=new _n),S||Ui(r)?Ph(r,s,l,f,m,y):Ny(r,s,M,l,f,m,y);if(!(l&k)){var fe=F&&Ze.call(r,"__wrapped__"),ve=V&&Ze.call(s,"__wrapped__");if(fe||ve){var Ae=fe?r.value():r,be=ve?s.value():s;return y||(y=new _n),m(Ae,be,l,f,y)}}return ie?(y||(y=new _n),Dy(r,s,l,f,m,y)):!1}function hy(r){return at(r)&&It(r)==Ve}function hc(r,s,l,f){var m=l.length,y=m,S=!f;if(r==null)return!y;for(r=Ge(r);m--;){var I=l[m];if(S&&I[2]?I[1]!==r[I[0]]:!(I[0]in r))return!1}for(;++m<y;){I=l[m];var M=I[0],H=r[M],F=I[1];if(S&&I[2]){if(H===n&&!(M in r))return!1}else{var V=new _n;if(f)var ie=f(H,F,M,r,s,V);if(!(ie===n?Is(F,H,k|w,f,V):ie))return!1}}return!0}function nh(r){if(!st(r)||Gy(r))return!1;var s=rr(r)?hb:r2;return s.test(oi(r))}function py(r){return at(r)&&Mt(r)==Ln}function gy(r){return at(r)&&It(r)==mt}function my(r){return at(r)&&aa(r.length)&&!!et[Mt(r)]}function rh(r){return typeof r=="function"?r:r==null?Kt:typeof r=="object"?Ee(r)?oh(r[0],r[1]):sh(r):Ep(r)}function pc(r){if(!Ls(r))return yb(r);var s=[];for(var l in Ge(r))Ze.call(r,l)&&l!="constructor"&&s.push(l);return s}function vy(r){if(!st(r))return Xy(r);var s=Ls(r),l=[];for(var f in r)f=="constructor"&&(s||!Ze.call(r,f))||l.push(f);return l}function gc(r,s){return r<s}function ih(r,s){var l=-1,f=Wt(r)?N(r.length):[];return Tr(r,function(m,y,S){f[++l]=s(m,y,S)}),f}function sh(r){var s=Ic(r);return s.length==1&&s[0][2]?Nh(s[0][0],s[0][1]):function(l){return l===r||hc(l,r,s)}}function oh(r,s){return Oc(r)&&Uh(s)?Nh(jn(r),s):function(l){var f=Hc(l,r);return f===n&&f===s?Fc(l,r):Is(s,f,k|w)}}function Wo(r,s,l,f,m){r!==s&&cc(s,function(y,S){if(m||(m=new _n),st(y))by(r,s,S,l,Wo,f,m);else{var I=f?f(Pc(r,S),y,S+"",r,s,m):n;I===n&&(I=y),ac(r,S,I)}},Zt)}function by(r,s,l,f,m,y,S){var I=Pc(r,l),M=Pc(s,l),H=S.get(M);if(H){ac(r,l,H);return}var F=y?y(I,M,l+"",r,s,S):n,V=F===n;if(V){var ie=Ee(M),fe=!ie&&Or(M),ve=!ie&&!fe&&Ui(M);F=M,ie||fe||ve?Ee(I)?F=I:ut(I)?F=qt(I):fe?(V=!1,F=bh(M,!0)):ve?(V=!1,F=yh(M,!0)):F=[]:Ms(M)||ai(M)?(F=I,ai(I)?F=gp(I):(!st(I)||rr(I))&&(F=jh(M))):V=!1}V&&(S.set(M,F),m(F,M,f,y,S),S.delete(M)),ac(r,l,F)}function ah(r,s){var l=r.length;if(l)return s+=s<0?l:0,nr(s,l)?r[s]:n}function lh(r,s,l){s.length?s=it(s,function(y){return Ee(y)?function(S){return ii(S,y.length===1?y[0]:y)}:y}):s=[Kt];var f=-1;s=it(s,Yt(ge()));var m=ih(r,function(y,S,I){var M=it(s,function(H){return H(y)});return{criteria:M,index:++f,value:y}});return W2(m,function(y,S){return Ry(y,S,l)})}function yy(r,s){return ch(r,s,function(l,f){return Fc(r,f)})}function ch(r,s,l){for(var f=-1,m=s.length,y={};++f<m;){var S=s[f],I=ii(r,S);l(I,S)&&Rs(y,Ir(S,r),I)}return y}function _y(r){return function(s){return ii(s,r)}}function mc(r,s,l,f){var m=f?q2:Si,y=-1,S=s.length,I=r;for(r===s&&(s=qt(s)),l&&(I=it(r,Yt(l)));++y<S;)for(var M=0,H=s[y],F=l?l(H):H;(M=m(I,F,M,f))>-1;)I!==r&&Mo.call(I,M,1),Mo.call(r,M,1);return r}function uh(r,s){for(var l=r?s.length:0,f=l-1;l--;){var m=s[l];if(l==f||m!==y){var y=m;nr(m)?Mo.call(r,m,1):_c(r,m)}}return r}function vc(r,s){return r+Uo(qf()*(s-r+1))}function wy(r,s,l,f){for(var m=-1,y=bt(jo((s-r)/(l||1)),0),S=N(y);y--;)S[f?y:++m]=r,r+=l;return S}function bc(r,s){var l="";if(!r||s<1||s>G)return l;do s%2&&(l+=r),s=Uo(s/2),s&&(r+=r);while(s);return l}function Oe(r,s){return Mc(Dh(r,s,Kt),r+"")}function xy(r){return Kf(Ni(r))}function $y(r,s){var l=Ni(r);return ta(l,ri(s,0,l.length))}function Rs(r,s,l,f){if(!st(r))return r;s=Ir(s,r);for(var m=-1,y=s.length,S=y-1,I=r;I!=null&&++m<y;){var M=jn(s[m]),H=l;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=S){var F=I[M];H=f?f(F,M,I):n,H===n&&(H=st(F)?F:nr(s[m+1])?[]:{})}Ss(I,M,H),I=I[M]}return r}var dh=No?function(r,s){return No.set(r,s),r}:Kt,ky=Bo?function(r,s){return Bo(r,"toString",{configurable:!0,enumerable:!1,value:Wc(s),writable:!0})}:Kt;function Ey(r){return ta(Ni(r))}function hn(r,s,l){var f=-1,m=r.length;s<0&&(s=-s>m?0:m+s),l=l>m?m:l,l<0&&(l+=m),m=s>l?0:l-s>>>0,s>>>=0;for(var y=N(m);++f<m;)y[f]=r[f+s];return y}function Cy(r,s){var l;return Tr(r,function(f,m,y){return l=s(f,m,y),!l}),!!l}function Zo(r,s,l){var f=0,m=r==null?f:r.length;if(typeof s=="number"&&s===s&&m<=he){for(;f<m;){var y=f+m>>>1,S=r[y];S!==null&&!Xt(S)&&(l?S<=s:S<s)?f=y+1:m=y}return m}return yc(r,s,Kt,l)}function yc(r,s,l,f){var m=0,y=r==null?0:r.length;if(y===0)return 0;s=l(s);for(var S=s!==s,I=s===null,M=Xt(s),H=s===n;m<y;){var F=Uo((m+y)/2),V=l(r[F]),ie=V!==n,fe=V===null,ve=V===V,Ae=Xt(V);if(S)var be=f||ve;else H?be=ve&&(f||ie):I?be=ve&&ie&&(f||!fe):M?be=ve&&ie&&!fe&&(f||!Ae):fe||Ae?be=!1:be=f?V<=s:V<s;be?m=F+1:y=F}return At(y,Q)}function fh(r,s){for(var l=-1,f=r.length,m=0,y=[];++l<f;){var S=r[l],I=s?s(S):S;if(!l||!wn(I,M)){var M=I;y[m++]=S===0?0:S}}return y}function hh(r){return typeof r=="number"?r:Xt(r)?ue:+r}function Jt(r){if(typeof r=="string")return r;if(Ee(r))return it(r,Jt)+"";if(Xt(r))return Wf?Wf.call(r):"";var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function Ar(r,s,l){var f=-1,m=Eo,y=r.length,S=!0,I=[],M=I;if(l)S=!1,m=Vl;else if(y>=o){var H=s?null:jy(r);if(H)return So(H);S=!1,m=ws,M=new ni}else M=s?[]:I;e:for(;++f<y;){var F=r[f],V=s?s(F):F;if(F=l||F!==0?F:0,S&&V===V){for(var ie=M.length;ie--;)if(M[ie]===V)continue e;s&&M.push(V),I.push(F)}else m(M,V,l)||(M!==I&&M.push(V),I.push(F))}return I}function _c(r,s){return s=Ir(s,r),r=zh(r,s),r==null||delete r[jn(pn(s))]}function ph(r,s,l,f){return Rs(r,s,l(ii(r,s)),f)}function Ko(r,s,l,f){for(var m=r.length,y=f?m:-1;(f?y--:++y<m)&&s(r[y],y,r););return l?hn(r,f?0:y,f?y+1:m):hn(r,f?y+1:0,f?m:y)}function gh(r,s){var l=r;return l instanceof je&&(l=l.value()),Gl(s,function(f,m){return m.func.apply(m.thisArg,Er([f],m.args))},l)}function wc(r,s,l){var f=r.length;if(f<2)return f?Ar(r[0]):[];for(var m=-1,y=N(f);++m<f;)for(var S=r[m],I=-1;++I<f;)I!=m&&(y[m]=Ts(y[m]||S,r[I],s,l));return Ar(Et(y,1),s,l)}function mh(r,s,l){for(var f=-1,m=r.length,y=s.length,S={};++f<m;){var I=f<y?s[f]:n;l(S,r[f],I)}return S}function xc(r){return ut(r)?r:[]}function $c(r){return typeof r=="function"?r:Kt}function Ir(r,s){return Ee(r)?r:Oc(r,s)?[r]:Wh(We(r))}var Sy=Oe;function Rr(r,s,l){var f=r.length;return l=l===n?f:l,!s&&l>=f?r:hn(r,s,l)}var vh=pb||function(r){return kt.clearTimeout(r)};function bh(r,s){if(s)return r.slice();var l=r.length,f=Nf?Nf(l):new r.constructor(l);return r.copy(f),f}function kc(r){var s=new r.constructor(r.byteLength);return new Lo(s).set(new Lo(r)),s}function Ty(r,s){var l=s?kc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function Ay(r){var s=new r.constructor(r.source,ef.exec(r));return s.lastIndex=r.lastIndex,s}function Iy(r){return Cs?Ge(Cs.call(r)):{}}function yh(r,s){var l=s?kc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function _h(r,s){if(r!==s){var l=r!==n,f=r===null,m=r===r,y=Xt(r),S=s!==n,I=s===null,M=s===s,H=Xt(s);if(!I&&!H&&!y&&r>s||y&&S&&M&&!I&&!H||f&&S&&M||!l&&M||!m)return 1;if(!f&&!y&&!H&&r<s||H&&l&&m&&!f&&!y||I&&l&&m||!S&&m||!M)return-1}return 0}function Ry(r,s,l){for(var f=-1,m=r.criteria,y=s.criteria,S=m.length,I=l.length;++f<S;){var M=_h(m[f],y[f]);if(M){if(f>=I)return M;var H=l[f];return M*(H=="desc"?-1:1)}}return r.index-s.index}function wh(r,s,l,f){for(var m=-1,y=r.length,S=l.length,I=-1,M=s.length,H=bt(y-S,0),F=N(M+H),V=!f;++I<M;)F[I]=s[I];for(;++m<S;)(V||m<y)&&(F[l[m]]=r[m]);for(;H--;)F[I++]=r[m++];return F}function xh(r,s,l,f){for(var m=-1,y=r.length,S=-1,I=l.length,M=-1,H=s.length,F=bt(y-I,0),V=N(F+H),ie=!f;++m<F;)V[m]=r[m];for(var fe=m;++M<H;)V[fe+M]=s[M];for(;++S<I;)(ie||m<y)&&(V[fe+l[S]]=r[m++]);return V}function qt(r,s){var l=-1,f=r.length;for(s||(s=N(f));++l<f;)s[l]=r[l];return s}function Bn(r,s,l,f){var m=!l;l||(l={});for(var y=-1,S=s.length;++y<S;){var I=s[y],M=f?f(l[I],r[I],I,l,r):n;M===n&&(M=r[I]),m?Xn(l,I,M):Ss(l,I,M)}return l}function Oy(r,s){return Bn(r,Rc(r),s)}function Ly(r,s){return Bn(r,Mh(r),s)}function Vo(r,s){return function(l,f){var m=Ee(l)?U2:ty,y=s?s():{};return m(l,r,ge(f,2),y)}}function Mi(r){return Oe(function(s,l){var f=-1,m=l.length,y=m>1?l[m-1]:n,S=m>2?l[2]:n;for(y=r.length>3&&typeof y=="function"?(m--,y):n,S&&Bt(l[0],l[1],S)&&(y=m<3?n:y,m=1),s=Ge(s);++f<m;){var I=l[f];I&&r(s,I,f,y)}return s})}function $h(r,s){return function(l,f){if(l==null)return l;if(!Wt(l))return r(l,f);for(var m=l.length,y=s?m:-1,S=Ge(l);(s?y--:++y<m)&&f(S[y],y,S)!==!1;);return l}}function kh(r){return function(s,l,f){for(var m=-1,y=Ge(s),S=f(s),I=S.length;I--;){var M=S[r?I:++m];if(l(y[M],M,y)===!1)break}return s}}function Py(r,s,l){var f=s&E,m=Os(r);function y(){var S=this&&this!==kt&&this instanceof y?m:r;return S.apply(f?l:this,arguments)}return y}function Eh(r){return function(s){s=We(s);var l=Ti(s)?yn(s):n,f=l?l[0]:s.charAt(0),m=l?Rr(l,1).join(""):s.slice(1);return f[r]()+m}}function Bi(r){return function(s){return Gl($p(xp(s).replace(k2,"")),r,"")}}function Os(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Pi(r.prototype),f=r.apply(l,s);return st(f)?f:l}}function My(r,s,l){var f=Os(r);function m(){for(var y=arguments.length,S=N(y),I=y,M=ji(m);I--;)S[I]=arguments[I];var H=y<3&&S[0]!==M&&S[y-1]!==M?[]:Cr(S,M);if(y-=H.length,y<l)return Ih(r,s,Go,m.placeholder,n,S,H,n,n,l-y);var F=this&&this!==kt&&this instanceof m?f:r;return Qt(F,this,S)}return m}function Ch(r){return function(s,l,f){var m=Ge(s);if(!Wt(s)){var y=ge(l,3);s=wt(s),l=function(I){return y(m[I],I,m)}}var S=r(s,l,f);return S>-1?m[y?s[S]:S]:n}}function Sh(r){return tr(function(s){var l=s.length,f=l,m=dn.prototype.thru;for(r&&s.reverse();f--;){var y=s[f];if(typeof y!="function")throw new un(c);if(m&&!S&&Xo(y)=="wrapper")var S=new dn([],!0)}for(f=S?f:l;++f<l;){y=s[f];var I=Xo(y),M=I=="wrapper"?Ac(y):n;M&&Lc(M[0])&&M[1]==(P|R|B|U)&&!M[4].length&&M[9]==1?S=S[Xo(M[0])].apply(S,M[3]):S=y.length==1&&Lc(y)?S[I]():S.thru(y)}return function(){var H=arguments,F=H[0];if(S&&H.length==1&&Ee(F))return S.plant(F).value();for(var V=0,ie=l?s[V].apply(this,H):F;++V<l;)ie=s[V].call(this,ie);return ie}})}function Go(r,s,l,f,m,y,S,I,M,H){var F=s&P,V=s&E,ie=s&_,fe=s&(R|T),ve=s&te,Ae=ie?n:Os(r);function be(){for(var Pe=arguments.length,Ne=N(Pe),en=Pe;en--;)Ne[en]=arguments[en];if(fe)var jt=ji(be),tn=K2(Ne,jt);if(f&&(Ne=wh(Ne,f,m,fe)),y&&(Ne=xh(Ne,y,S,fe)),Pe-=tn,fe&&Pe<H){var dt=Cr(Ne,jt);return Ih(r,s,Go,be.placeholder,l,Ne,dt,I,M,H-Pe)}var xn=V?l:this,sr=ie?xn[r]:r;return Pe=Ne.length,I?Ne=t_(Ne,I):ve&&Pe>1&&Ne.reverse(),F&&M<Pe&&(Ne.length=M),this&&this!==kt&&this instanceof be&&(sr=Ae||Os(sr)),sr.apply(xn,Ne)}return be}function Th(r,s){return function(l,f){return cy(l,r,s(f),{})}}function Qo(r,s){return function(l,f){var m;if(l===n&&f===n)return s;if(l!==n&&(m=l),f!==n){if(m===n)return f;typeof l=="string"||typeof f=="string"?(l=Jt(l),f=Jt(f)):(l=hh(l),f=hh(f)),m=r(l,f)}return m}}function Ec(r){return tr(function(s){return s=it(s,Yt(ge())),Oe(function(l){var f=this;return r(s,function(m){return Qt(m,f,l)})})})}function Yo(r,s){s=s===n?" ":Jt(s);var l=s.length;if(l<2)return l?bc(s,r):s;var f=bc(s,jo(r/Ai(s)));return Ti(s)?Rr(yn(f),0,r).join(""):f.slice(0,r)}function By(r,s,l,f){var m=s&E,y=Os(r);function S(){for(var I=-1,M=arguments.length,H=-1,F=f.length,V=N(F+M),ie=this&&this!==kt&&this instanceof S?y:r;++H<F;)V[H]=f[H];for(;M--;)V[H++]=arguments[++I];return Qt(ie,m?l:this,V)}return S}function Ah(r){return function(s,l,f){return f&&typeof f!="number"&&Bt(s,l,f)&&(l=f=n),s=ir(s),l===n?(l=s,s=0):l=ir(l),f=f===n?s<l?1:-1:ir(f),wy(s,l,f,r)}}function Jo(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=gn(s),l=gn(l)),r(s,l)}}function Ih(r,s,l,f,m,y,S,I,M,H){var F=s&R,V=F?S:n,ie=F?n:S,fe=F?y:n,ve=F?n:y;s|=F?B:C,s&=~(F?C:B),s&A||(s&=~(E|_));var Ae=[r,s,m,fe,V,ve,ie,I,M,H],be=l.apply(n,Ae);return Lc(r)&&Hh(be,Ae),be.placeholder=f,Fh(be,r,s)}function Cc(r){var s=vt[r];return function(l,f){if(l=gn(l),f=f==null?0:At(Ce(f),292),f&&Ff(l)){var m=(We(l)+"e").split("e"),y=s(m[0]+"e"+(+m[1]+f));return m=(We(y)+"e").split("e"),+(m[0]+"e"+(+m[1]-f))}return s(l)}}var jy=Oi&&1/So(new Oi([,-0]))[1]==ne?function(r){return new Oi(r)}:Vc;function Rh(r){return function(s){var l=It(s);return l==Ve?nc(s):l==mt?eb(s):Z2(s,r(s))}}function er(r,s,l,f,m,y,S,I){var M=s&_;if(!M&&typeof r!="function")throw new un(c);var H=f?f.length:0;if(H||(s&=~(B|C),f=m=n),S=S===n?S:bt(Ce(S),0),I=I===n?I:Ce(I),H-=m?m.length:0,s&C){var F=f,V=m;f=m=n}var ie=M?n:Ac(r),fe=[r,s,l,f,m,F,V,y,S,I];if(ie&&Jy(fe,ie),r=fe[0],s=fe[1],l=fe[2],f=fe[3],m=fe[4],I=fe[9]=fe[9]===n?M?0:r.length:bt(fe[9]-H,0),!I&&s&(R|T)&&(s&=~(R|T)),!s||s==E)var ve=Py(r,s,l);else s==R||s==T?ve=My(r,s,I):(s==B||s==(E|B))&&!m.length?ve=By(r,s,l,f):ve=Go.apply(n,fe);var Ae=ie?dh:Hh;return Fh(Ae(ve,fe),r,s)}function Oh(r,s,l,f){return r===n||wn(r,Ri[l])&&!Ze.call(f,l)?s:r}function Lh(r,s,l,f,m,y){return st(r)&&st(s)&&(y.set(s,r),Wo(r,s,n,Lh,y),y.delete(s)),r}function Uy(r){return Ms(r)?n:r}function Ph(r,s,l,f,m,y){var S=l&k,I=r.length,M=s.length;if(I!=M&&!(S&&M>I))return!1;var H=y.get(r),F=y.get(s);if(H&&F)return H==s&&F==r;var V=-1,ie=!0,fe=l&w?new ni:n;for(y.set(r,s),y.set(s,r);++V<I;){var ve=r[V],Ae=s[V];if(f)var be=S?f(Ae,ve,V,s,r,y):f(ve,Ae,V,r,s,y);if(be!==n){if(be)continue;ie=!1;break}if(fe){if(!Ql(s,function(Pe,Ne){if(!ws(fe,Ne)&&(ve===Pe||m(ve,Pe,l,f,y)))return fe.push(Ne)})){ie=!1;break}}else if(!(ve===Ae||m(ve,Ae,l,f,y))){ie=!1;break}}return y.delete(r),y.delete(s),ie}function Ny(r,s,l,f,m,y,S){switch(l){case Ft:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Gt:return!(r.byteLength!=s.byteLength||!y(new Lo(r),new Lo(s)));case qe:case nt:case Ht:return wn(+r,+s);case Xe:return r.name==s.name&&r.message==s.message;case Ln:case bn:return r==s+"";case Ve:var I=nc;case mt:var M=f&k;if(I||(I=So),r.size!=s.size&&!M)return!1;var H=S.get(r);if(H)return H==s;f|=w,S.set(r,s);var F=Ph(I(r),I(s),f,m,y,S);return S.delete(r),F;case Pn:if(Cs)return Cs.call(r)==Cs.call(s)}return!1}function Dy(r,s,l,f,m,y){var S=l&k,I=Sc(r),M=I.length,H=Sc(s),F=H.length;if(M!=F&&!S)return!1;for(var V=M;V--;){var ie=I[V];if(!(S?ie in s:Ze.call(s,ie)))return!1}var fe=y.get(r),ve=y.get(s);if(fe&&ve)return fe==s&&ve==r;var Ae=!0;y.set(r,s),y.set(s,r);for(var be=S;++V<M;){ie=I[V];var Pe=r[ie],Ne=s[ie];if(f)var en=S?f(Ne,Pe,ie,s,r,y):f(Pe,Ne,ie,r,s,y);if(!(en===n?Pe===Ne||m(Pe,Ne,l,f,y):en)){Ae=!1;break}be||(be=ie=="constructor")}if(Ae&&!be){var jt=r.constructor,tn=s.constructor;jt!=tn&&"constructor"in r&&"constructor"in s&&!(typeof jt=="function"&&jt instanceof jt&&typeof tn=="function"&&tn instanceof tn)&&(Ae=!1)}return y.delete(r),y.delete(s),Ae}function tr(r){return Mc(Dh(r,n,Gh),r+"")}function Sc(r){return eh(r,wt,Rc)}function Tc(r){return eh(r,Zt,Mh)}var Ac=No?function(r){return No.get(r)}:Vc;function Xo(r){for(var s=r.name+"",l=Li[s],f=Ze.call(Li,s)?l.length:0;f--;){var m=l[f],y=m.func;if(y==null||y==r)return m.name}return s}function ji(r){var s=Ze.call(b,"placeholder")?b:r;return s.placeholder}function ge(){var r=b.iteratee||Zc;return r=r===Zc?rh:r,arguments.length?r(arguments[0],arguments[1]):r}function ea(r,s){var l=r.__data__;return Vy(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Ic(r){for(var s=wt(r),l=s.length;l--;){var f=s[l],m=r[f];s[l]=[f,m,Uh(m)]}return s}function si(r,s){var l=Y2(r,s);return nh(l)?l:n}function zy(r){var s=Ze.call(r,ei),l=r[ei];try{r[ei]=n;var f=!0}catch{}var m=Ro.call(r);return f&&(s?r[ei]=l:delete r[ei]),m}var Rc=ic?function(r){return r==null?[]:(r=Ge(r),kr(ic(r),function(s){return zf.call(r,s)}))}:Gc,Mh=ic?function(r){for(var s=[];r;)Er(s,Rc(r)),r=Po(r);return s}:Gc,It=Mt;(sc&&It(new sc(new ArrayBuffer(1)))!=Ft||$s&&It(new $s)!=Ve||oc&&It(oc.resolve())!=wr||Oi&&It(new Oi)!=mt||ks&&It(new ks)!=ye)&&(It=function(r){var s=Mt(r),l=s==_t?r.constructor:n,f=l?oi(l):"";if(f)switch(f){case $b:return Ft;case kb:return Ve;case Eb:return wr;case Cb:return mt;case Sb:return ye}return s});function Hy(r,s,l){for(var f=-1,m=l.length;++f<m;){var y=l[f],S=y.size;switch(y.type){case"drop":r+=S;break;case"dropRight":s-=S;break;case"take":s=At(s,r+S);break;case"takeRight":r=bt(r,s-S);break}}return{start:r,end:s}}function Fy(r){var s=r.match(Gv);return s?s[1].split(Qv):[]}function Bh(r,s,l){s=Ir(s,r);for(var f=-1,m=s.length,y=!1;++f<m;){var S=jn(s[f]);if(!(y=r!=null&&l(r,S)))break;r=r[S]}return y||++f!=m?y:(m=r==null?0:r.length,!!m&&aa(m)&&nr(S,m)&&(Ee(r)||ai(r)))}function qy(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Ze.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function jh(r){return typeof r.constructor=="function"&&!Ls(r)?Pi(Po(r)):{}}function Wy(r,s,l){var f=r.constructor;switch(s){case Gt:return kc(r);case qe:case nt:return new f(+r);case Ft:return Ty(r,l);case xr:case Gn:case Qn:case $r:case $i:case ki:case Ei:case jl:case Ul:return yh(r,l);case Ve:return new f;case Ht:case bn:return new f(r);case Ln:return Ay(r);case mt:return new f;case Pn:return Iy(r)}}function Zy(r,s){var l=s.length;if(!l)return r;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),r.replace(Vv,`{
/* [wrapped with `+s+`] */
`)}function Ky(r){return Ee(r)||ai(r)||!!(Hf&&r&&r[Hf])}function nr(r,s){var l=typeof r;return s=s??G,!!s&&(l=="number"||l!="symbol"&&s2.test(r))&&r>-1&&r%1==0&&r<s}function Bt(r,s,l){if(!st(l))return!1;var f=typeof s;return(f=="number"?Wt(l)&&nr(s,l.length):f=="string"&&s in l)?wn(l[s],r):!1}function Oc(r,s){if(Ee(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||Xt(r)?!0:qv.test(r)||!Fv.test(r)||s!=null&&r in Ge(s)}function Vy(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Lc(r){var s=Xo(r),l=b[s];if(typeof l!="function"||!(s in je.prototype))return!1;if(r===l)return!0;var f=Ac(l);return!!f&&r===f[0]}function Gy(r){return!!Uf&&Uf in r}var Qy=Ao?rr:Qc;function Ls(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Ri;return r===l}function Uh(r){return r===r&&!st(r)}function Nh(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==n||r in Ge(l))}}function Yy(r){var s=sa(r,function(f){return l.size===h&&l.clear(),f}),l=s.cache;return s}function Jy(r,s){var l=r[1],f=s[1],m=l|f,y=m<(E|_|P),S=f==P&&l==R||f==P&&l==U&&r[7].length<=s[8]||f==(P|U)&&s[7].length<=s[8]&&l==R;if(!(y||S))return r;f&E&&(r[2]=s[2],m|=l&E?0:A);var I=s[3];if(I){var M=r[3];r[3]=M?wh(M,I,s[4]):I,r[4]=M?Cr(r[3],p):s[4]}return I=s[5],I&&(M=r[5],r[5]=M?xh(M,I,s[6]):I,r[6]=M?Cr(r[5],p):s[6]),I=s[7],I&&(r[7]=I),f&P&&(r[8]=r[8]==null?s[8]:At(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function Xy(r){var s=[];if(r!=null)for(var l in Ge(r))s.push(l);return s}function e_(r){return Ro.call(r)}function Dh(r,s,l){return s=bt(s===n?r.length-1:s,0),function(){for(var f=arguments,m=-1,y=bt(f.length-s,0),S=N(y);++m<y;)S[m]=f[s+m];m=-1;for(var I=N(s+1);++m<s;)I[m]=f[m];return I[s]=l(S),Qt(r,this,I)}}function zh(r,s){return s.length<2?r:ii(r,hn(s,0,-1))}function t_(r,s){for(var l=r.length,f=At(s.length,l),m=qt(r);f--;){var y=s[f];r[f]=nr(y,l)?m[y]:n}return r}function Pc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Hh=qh(dh),Ps=mb||function(r,s){return kt.setTimeout(r,s)},Mc=qh(ky);function Fh(r,s,l){var f=s+"";return Mc(r,Zy(f,n_(Fy(f),l)))}function qh(r){var s=0,l=0;return function(){var f=_b(),m=X-(f-l);if(l=f,m>0){if(++s>=Z)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ta(r,s){var l=-1,f=r.length,m=f-1;for(s=s===n?f:s;++l<s;){var y=vc(l,m),S=r[y];r[y]=r[l],r[l]=S}return r.length=s,r}var Wh=Yy(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Wv,function(l,f,m,y){s.push(m?y.replace(Xv,"$1"):f||l)}),s});function jn(r){if(typeof r=="string"||Xt(r))return r;var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function oi(r){if(r!=null){try{return Io.call(r)}catch{}try{return r+""}catch{}}return""}function n_(r,s){return cn(we,function(l){var f="_."+l[0];s&l[1]&&!Eo(r,f)&&r.push(f)}),r.sort()}function Zh(r){if(r instanceof je)return r.clone();var s=new dn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function r_(r,s,l){(l?Bt(r,s,l):s===n)?s=1:s=bt(Ce(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var m=0,y=0,S=N(jo(f/s));m<f;)S[y++]=hn(r,m,m+=s);return S}function i_(r){for(var s=-1,l=r==null?0:r.length,f=0,m=[];++s<l;){var y=r[s];y&&(m[f++]=y)}return m}function s_(){var r=arguments.length;if(!r)return[];for(var s=N(r-1),l=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Er(Ee(l)?qt(l):[l],Et(s,1))}var o_=Oe(function(r,s){return ut(r)?Ts(r,Et(s,1,ut,!0)):[]}),a_=Oe(function(r,s){var l=pn(s);return ut(l)&&(l=n),ut(r)?Ts(r,Et(s,1,ut,!0),ge(l,2)):[]}),l_=Oe(function(r,s){var l=pn(s);return ut(l)&&(l=n),ut(r)?Ts(r,Et(s,1,ut,!0),n,l):[]});function c_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),hn(r,s<0?0:s,f)):[]}function u_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,hn(r,0,s<0?0:s)):[]}function d_(r,s){return r&&r.length?Ko(r,ge(s,3),!0,!0):[]}function f_(r,s){return r&&r.length?Ko(r,ge(s,3),!0):[]}function h_(r,s,l,f){var m=r==null?0:r.length;return m?(l&&typeof l!="number"&&Bt(r,s,l)&&(l=0,f=m),sy(r,s,l,f)):[]}function Kh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=l==null?0:Ce(l);return m<0&&(m=bt(f+m,0)),Co(r,ge(s,3),m)}function Vh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=f-1;return l!==n&&(m=Ce(l),m=l<0?bt(f+m,0):At(m,f-1)),Co(r,ge(s,3),m,!0)}function Gh(r){var s=r==null?0:r.length;return s?Et(r,1):[]}function p_(r){var s=r==null?0:r.length;return s?Et(r,ne):[]}function g_(r,s){var l=r==null?0:r.length;return l?(s=s===n?1:Ce(s),Et(r,s)):[]}function m_(r){for(var s=-1,l=r==null?0:r.length,f={};++s<l;){var m=r[s];f[m[0]]=m[1]}return f}function Qh(r){return r&&r.length?r[0]:n}function v_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=l==null?0:Ce(l);return m<0&&(m=bt(f+m,0)),Si(r,s,m)}function b_(r){var s=r==null?0:r.length;return s?hn(r,0,-1):[]}var y_=Oe(function(r){var s=it(r,xc);return s.length&&s[0]===r[0]?fc(s):[]}),__=Oe(function(r){var s=pn(r),l=it(r,xc);return s===pn(l)?s=n:l.pop(),l.length&&l[0]===r[0]?fc(l,ge(s,2)):[]}),w_=Oe(function(r){var s=pn(r),l=it(r,xc);return s=typeof s=="function"?s:n,s&&l.pop(),l.length&&l[0]===r[0]?fc(l,n,s):[]});function x_(r,s){return r==null?"":bb.call(r,s)}function pn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function $_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=f;return l!==n&&(m=Ce(l),m=m<0?bt(f+m,0):At(m,f-1)),s===s?nb(r,s,m):Co(r,If,m,!0)}function k_(r,s){return r&&r.length?ah(r,Ce(s)):n}var E_=Oe(Yh);function Yh(r,s){return r&&r.length&&s&&s.length?mc(r,s):r}function C_(r,s,l){return r&&r.length&&s&&s.length?mc(r,s,ge(l,2)):r}function S_(r,s,l){return r&&r.length&&s&&s.length?mc(r,s,n,l):r}var T_=tr(function(r,s){var l=r==null?0:r.length,f=lc(r,s);return uh(r,it(s,function(m){return nr(m,l)?+m:m}).sort(_h)),f});function A_(r,s){var l=[];if(!(r&&r.length))return l;var f=-1,m=[],y=r.length;for(s=ge(s,3);++f<y;){var S=r[f];s(S,f,r)&&(l.push(S),m.push(f))}return uh(r,m),l}function Bc(r){return r==null?r:xb.call(r)}function I_(r,s,l){var f=r==null?0:r.length;return f?(l&&typeof l!="number"&&Bt(r,s,l)?(s=0,l=f):(s=s==null?0:Ce(s),l=l===n?f:Ce(l)),hn(r,s,l)):[]}function R_(r,s){return Zo(r,s)}function O_(r,s,l){return yc(r,s,ge(l,2))}function L_(r,s){var l=r==null?0:r.length;if(l){var f=Zo(r,s);if(f<l&&wn(r[f],s))return f}return-1}function P_(r,s){return Zo(r,s,!0)}function M_(r,s,l){return yc(r,s,ge(l,2),!0)}function B_(r,s){var l=r==null?0:r.length;if(l){var f=Zo(r,s,!0)-1;if(wn(r[f],s))return f}return-1}function j_(r){return r&&r.length?fh(r):[]}function U_(r,s){return r&&r.length?fh(r,ge(s,2)):[]}function N_(r){var s=r==null?0:r.length;return s?hn(r,1,s):[]}function D_(r,s,l){return r&&r.length?(s=l||s===n?1:Ce(s),hn(r,0,s<0?0:s)):[]}function z_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,hn(r,s<0?0:s,f)):[]}function H_(r,s){return r&&r.length?Ko(r,ge(s,3),!1,!0):[]}function F_(r,s){return r&&r.length?Ko(r,ge(s,3)):[]}var q_=Oe(function(r){return Ar(Et(r,1,ut,!0))}),W_=Oe(function(r){var s=pn(r);return ut(s)&&(s=n),Ar(Et(r,1,ut,!0),ge(s,2))}),Z_=Oe(function(r){var s=pn(r);return s=typeof s=="function"?s:n,Ar(Et(r,1,ut,!0),n,s)});function K_(r){return r&&r.length?Ar(r):[]}function V_(r,s){return r&&r.length?Ar(r,ge(s,2)):[]}function G_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Ar(r,n,s):[]}function jc(r){if(!(r&&r.length))return[];var s=0;return r=kr(r,function(l){if(ut(l))return s=bt(l.length,s),!0}),ec(s,function(l){return it(r,Yl(l))})}function Jh(r,s){if(!(r&&r.length))return[];var l=jc(r);return s==null?l:it(l,function(f){return Qt(s,n,f)})}var Q_=Oe(function(r,s){return ut(r)?Ts(r,s):[]}),Y_=Oe(function(r){return wc(kr(r,ut))}),J_=Oe(function(r){var s=pn(r);return ut(s)&&(s=n),wc(kr(r,ut),ge(s,2))}),X_=Oe(function(r){var s=pn(r);return s=typeof s=="function"?s:n,wc(kr(r,ut),n,s)}),ew=Oe(jc);function tw(r,s){return mh(r||[],s||[],Ss)}function nw(r,s){return mh(r||[],s||[],Rs)}var rw=Oe(function(r){var s=r.length,l=s>1?r[s-1]:n;return l=typeof l=="function"?(r.pop(),l):n,Jh(r,l)});function Xh(r){var s=b(r);return s.__chain__=!0,s}function iw(r,s){return s(r),r}function na(r,s){return s(r)}var sw=tr(function(r){var s=r.length,l=s?r[0]:0,f=this.__wrapped__,m=function(y){return lc(y,r)};return s>1||this.__actions__.length||!(f instanceof je)||!nr(l)?this.thru(m):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:na,args:[m],thisArg:n}),new dn(f,this.__chain__).thru(function(y){return s&&!y.length&&y.push(n),y}))});function ow(){return Xh(this)}function aw(){return new dn(this.value(),this.__chain__)}function lw(){this.__values__===n&&(this.__values__=hp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function cw(){return this}function uw(r){for(var s,l=this;l instanceof zo;){var f=Zh(l);f.__index__=0,f.__values__=n,s?m.__wrapped__=f:s=f;var m=f;l=l.__wrapped__}return m.__wrapped__=r,s}function dw(){var r=this.__wrapped__;if(r instanceof je){var s=r;return this.__actions__.length&&(s=new je(this)),s=s.reverse(),s.__actions__.push({func:na,args:[Bc],thisArg:n}),new dn(s,this.__chain__)}return this.thru(Bc)}function fw(){return gh(this.__wrapped__,this.__actions__)}var hw=Vo(function(r,s,l){Ze.call(r,l)?++r[l]:Xn(r,l,1)});function pw(r,s,l){var f=Ee(r)?Tf:iy;return l&&Bt(r,s,l)&&(s=n),f(r,ge(s,3))}function gw(r,s){var l=Ee(r)?kr:Jf;return l(r,ge(s,3))}var mw=Ch(Kh),vw=Ch(Vh);function bw(r,s){return Et(ra(r,s),1)}function yw(r,s){return Et(ra(r,s),ne)}function _w(r,s,l){return l=l===n?1:Ce(l),Et(ra(r,s),l)}function ep(r,s){var l=Ee(r)?cn:Tr;return l(r,ge(s,3))}function tp(r,s){var l=Ee(r)?N2:Yf;return l(r,ge(s,3))}var ww=Vo(function(r,s,l){Ze.call(r,l)?r[l].push(s):Xn(r,l,[s])});function xw(r,s,l,f){r=Wt(r)?r:Ni(r),l=l&&!f?Ce(l):0;var m=r.length;return l<0&&(l=bt(m+l,0)),la(r)?l<=m&&r.indexOf(s,l)>-1:!!m&&Si(r,s,l)>-1}var $w=Oe(function(r,s,l){var f=-1,m=typeof s=="function",y=Wt(r)?N(r.length):[];return Tr(r,function(S){y[++f]=m?Qt(s,S,l):As(S,s,l)}),y}),kw=Vo(function(r,s,l){Xn(r,l,s)});function ra(r,s){var l=Ee(r)?it:ih;return l(r,ge(s,3))}function Ew(r,s,l,f){return r==null?[]:(Ee(s)||(s=s==null?[]:[s]),l=f?n:l,Ee(l)||(l=l==null?[]:[l]),lh(r,s,l))}var Cw=Vo(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function Sw(r,s,l){var f=Ee(r)?Gl:Of,m=arguments.length<3;return f(r,ge(s,4),l,m,Tr)}function Tw(r,s,l){var f=Ee(r)?D2:Of,m=arguments.length<3;return f(r,ge(s,4),l,m,Yf)}function Aw(r,s){var l=Ee(r)?kr:Jf;return l(r,oa(ge(s,3)))}function Iw(r){var s=Ee(r)?Kf:xy;return s(r)}function Rw(r,s,l){(l?Bt(r,s,l):s===n)?s=1:s=Ce(s);var f=Ee(r)?Xb:$y;return f(r,s)}function Ow(r){var s=Ee(r)?ey:Ey;return s(r)}function Lw(r){if(r==null)return 0;if(Wt(r))return la(r)?Ai(r):r.length;var s=It(r);return s==Ve||s==mt?r.size:pc(r).length}function Pw(r,s,l){var f=Ee(r)?Ql:Cy;return l&&Bt(r,s,l)&&(s=n),f(r,ge(s,3))}var Mw=Oe(function(r,s){if(r==null)return[];var l=s.length;return l>1&&Bt(r,s[0],s[1])?s=[]:l>2&&Bt(s[0],s[1],s[2])&&(s=[s[0]]),lh(r,Et(s,1),[])}),ia=gb||function(){return kt.Date.now()};function Bw(r,s){if(typeof s!="function")throw new un(c);return r=Ce(r),function(){if(--r<1)return s.apply(this,arguments)}}function np(r,s,l){return s=l?n:s,s=r&&s==null?r.length:s,er(r,P,n,n,n,n,s)}function rp(r,s){var l;if(typeof s!="function")throw new un(c);return r=Ce(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=n),l}}var Uc=Oe(function(r,s,l){var f=E;if(l.length){var m=Cr(l,ji(Uc));f|=B}return er(r,f,s,l,m)}),ip=Oe(function(r,s,l){var f=E|_;if(l.length){var m=Cr(l,ji(ip));f|=B}return er(s,f,r,l,m)});function sp(r,s,l){s=l?n:s;var f=er(r,R,n,n,n,n,n,s);return f.placeholder=sp.placeholder,f}function op(r,s,l){s=l?n:s;var f=er(r,T,n,n,n,n,n,s);return f.placeholder=op.placeholder,f}function ap(r,s,l){var f,m,y,S,I,M,H=0,F=!1,V=!1,ie=!0;if(typeof r!="function")throw new un(c);s=gn(s)||0,st(l)&&(F=!!l.leading,V="maxWait"in l,y=V?bt(gn(l.maxWait)||0,s):y,ie="trailing"in l?!!l.trailing:ie);function fe(dt){var xn=f,sr=m;return f=m=n,H=dt,S=r.apply(sr,xn),S}function ve(dt){return H=dt,I=Ps(Pe,s),F?fe(dt):S}function Ae(dt){var xn=dt-M,sr=dt-H,Cp=s-xn;return V?At(Cp,y-sr):Cp}function be(dt){var xn=dt-M,sr=dt-H;return M===n||xn>=s||xn<0||V&&sr>=y}function Pe(){var dt=ia();if(be(dt))return Ne(dt);I=Ps(Pe,Ae(dt))}function Ne(dt){return I=n,ie&&f?fe(dt):(f=m=n,S)}function en(){I!==n&&vh(I),H=0,f=M=m=I=n}function jt(){return I===n?S:Ne(ia())}function tn(){var dt=ia(),xn=be(dt);if(f=arguments,m=this,M=dt,xn){if(I===n)return ve(M);if(V)return vh(I),I=Ps(Pe,s),fe(M)}return I===n&&(I=Ps(Pe,s)),S}return tn.cancel=en,tn.flush=jt,tn}var jw=Oe(function(r,s){return Qf(r,1,s)}),Uw=Oe(function(r,s,l){return Qf(r,gn(s)||0,l)});function Nw(r){return er(r,te)}function sa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new un(c);var l=function(){var f=arguments,m=s?s.apply(this,f):f[0],y=l.cache;if(y.has(m))return y.get(m);var S=r.apply(this,f);return l.cache=y.set(m,S)||y,S};return l.cache=new(sa.Cache||Jn),l}sa.Cache=Jn;function oa(r){if(typeof r!="function")throw new un(c);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Dw(r){return rp(2,r)}var zw=Sy(function(r,s){s=s.length==1&&Ee(s[0])?it(s[0],Yt(ge())):it(Et(s,1),Yt(ge()));var l=s.length;return Oe(function(f){for(var m=-1,y=At(f.length,l);++m<y;)f[m]=s[m].call(this,f[m]);return Qt(r,this,f)})}),Nc=Oe(function(r,s){var l=Cr(s,ji(Nc));return er(r,B,n,s,l)}),lp=Oe(function(r,s){var l=Cr(s,ji(lp));return er(r,C,n,s,l)}),Hw=tr(function(r,s){return er(r,U,n,n,n,s)});function Fw(r,s){if(typeof r!="function")throw new un(c);return s=s===n?s:Ce(s),Oe(r,s)}function qw(r,s){if(typeof r!="function")throw new un(c);return s=s==null?0:bt(Ce(s),0),Oe(function(l){var f=l[s],m=Rr(l,0,s);return f&&Er(m,f),Qt(r,this,m)})}function Ww(r,s,l){var f=!0,m=!0;if(typeof r!="function")throw new un(c);return st(l)&&(f="leading"in l?!!l.leading:f,m="trailing"in l?!!l.trailing:m),ap(r,s,{leading:f,maxWait:s,trailing:m})}function Zw(r){return np(r,1)}function Kw(r,s){return Nc($c(s),r)}function Vw(){if(!arguments.length)return[];var r=arguments[0];return Ee(r)?r:[r]}function Gw(r){return fn(r,x)}function Qw(r,s){return s=typeof s=="function"?s:n,fn(r,x,s)}function Yw(r){return fn(r,g|x)}function Jw(r,s){return s=typeof s=="function"?s:n,fn(r,g|x,s)}function Xw(r,s){return s==null||Gf(r,s,wt(s))}function wn(r,s){return r===s||r!==r&&s!==s}var e3=Jo(dc),t3=Jo(function(r,s){return r>=s}),ai=th(function(){return arguments}())?th:function(r){return at(r)&&Ze.call(r,"callee")&&!zf.call(r,"callee")},Ee=N.isArray,n3=xf?Yt(xf):uy;function Wt(r){return r!=null&&aa(r.length)&&!rr(r)}function ut(r){return at(r)&&Wt(r)}function r3(r){return r===!0||r===!1||at(r)&&Mt(r)==qe}var Or=vb||Qc,i3=$f?Yt($f):dy;function s3(r){return at(r)&&r.nodeType===1&&!Ms(r)}function o3(r){if(r==null)return!0;if(Wt(r)&&(Ee(r)||typeof r=="string"||typeof r.splice=="function"||Or(r)||Ui(r)||ai(r)))return!r.length;var s=It(r);if(s==Ve||s==mt)return!r.size;if(Ls(r))return!pc(r).length;for(var l in r)if(Ze.call(r,l))return!1;return!0}function a3(r,s){return Is(r,s)}function l3(r,s,l){l=typeof l=="function"?l:n;var f=l?l(r,s):n;return f===n?Is(r,s,n,l):!!f}function Dc(r){if(!at(r))return!1;var s=Mt(r);return s==Xe||s==Te||typeof r.message=="string"&&typeof r.name=="string"&&!Ms(r)}function c3(r){return typeof r=="number"&&Ff(r)}function rr(r){if(!st(r))return!1;var s=Mt(r);return s==rt||s==Tt||s==J||s==wi}function cp(r){return typeof r=="number"&&r==Ce(r)}function aa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=G}function st(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function at(r){return r!=null&&typeof r=="object"}var up=kf?Yt(kf):hy;function u3(r,s){return r===s||hc(r,s,Ic(s))}function d3(r,s,l){return l=typeof l=="function"?l:n,hc(r,s,Ic(s),l)}function f3(r){return dp(r)&&r!=+r}function h3(r){if(Qy(r))throw new xe(a);return nh(r)}function p3(r){return r===null}function g3(r){return r==null}function dp(r){return typeof r=="number"||at(r)&&Mt(r)==Ht}function Ms(r){if(!at(r)||Mt(r)!=_t)return!1;var s=Po(r);if(s===null)return!0;var l=Ze.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Io.call(l)==db}var zc=Ef?Yt(Ef):py;function m3(r){return cp(r)&&r>=-G&&r<=G}var fp=Cf?Yt(Cf):gy;function la(r){return typeof r=="string"||!Ee(r)&&at(r)&&Mt(r)==bn}function Xt(r){return typeof r=="symbol"||at(r)&&Mt(r)==Pn}var Ui=Sf?Yt(Sf):my;function v3(r){return r===n}function b3(r){return at(r)&&It(r)==ye}function y3(r){return at(r)&&Mt(r)==Vn}var _3=Jo(gc),w3=Jo(function(r,s){return r<=s});function hp(r){if(!r)return[];if(Wt(r))return la(r)?yn(r):qt(r);if(xs&&r[xs])return X2(r[xs]());var s=It(r),l=s==Ve?nc:s==mt?So:Ni;return l(r)}function ir(r){if(!r)return r===0?r:0;if(r=gn(r),r===ne||r===-ne){var s=r<0?-1:1;return s*ae}return r===r?r:0}function Ce(r){var s=ir(r),l=s%1;return s===s?l?s-l:s:0}function pp(r){return r?ri(Ce(r),0,re):0}function gn(r){if(typeof r=="number")return r;if(Xt(r))return ue;if(st(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=st(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Lf(r);var l=n2.test(r);return l||i2.test(r)?B2(r.slice(2),l?2:8):t2.test(r)?ue:+r}function gp(r){return Bn(r,Zt(r))}function x3(r){return r?ri(Ce(r),-G,G):r===0?r:0}function We(r){return r==null?"":Jt(r)}var $3=Mi(function(r,s){if(Ls(s)||Wt(s)){Bn(s,wt(s),r);return}for(var l in s)Ze.call(s,l)&&Ss(r,l,s[l])}),mp=Mi(function(r,s){Bn(s,Zt(s),r)}),ca=Mi(function(r,s,l,f){Bn(s,Zt(s),r,f)}),k3=Mi(function(r,s,l,f){Bn(s,wt(s),r,f)}),E3=tr(lc);function C3(r,s){var l=Pi(r);return s==null?l:Vf(l,s)}var S3=Oe(function(r,s){r=Ge(r);var l=-1,f=s.length,m=f>2?s[2]:n;for(m&&Bt(s[0],s[1],m)&&(f=1);++l<f;)for(var y=s[l],S=Zt(y),I=-1,M=S.length;++I<M;){var H=S[I],F=r[H];(F===n||wn(F,Ri[H])&&!Ze.call(r,H))&&(r[H]=y[H])}return r}),T3=Oe(function(r){return r.push(n,Lh),Qt(vp,n,r)});function A3(r,s){return Af(r,ge(s,3),Mn)}function I3(r,s){return Af(r,ge(s,3),uc)}function R3(r,s){return r==null?r:cc(r,ge(s,3),Zt)}function O3(r,s){return r==null?r:Xf(r,ge(s,3),Zt)}function L3(r,s){return r&&Mn(r,ge(s,3))}function P3(r,s){return r&&uc(r,ge(s,3))}function M3(r){return r==null?[]:qo(r,wt(r))}function B3(r){return r==null?[]:qo(r,Zt(r))}function Hc(r,s,l){var f=r==null?n:ii(r,s);return f===n?l:f}function j3(r,s){return r!=null&&Bh(r,s,oy)}function Fc(r,s){return r!=null&&Bh(r,s,ay)}var U3=Th(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Ro.call(s)),r[s]=l},Wc(Kt)),N3=Th(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Ro.call(s)),Ze.call(r,s)?r[s].push(l):r[s]=[l]},ge),D3=Oe(As);function wt(r){return Wt(r)?Zf(r):pc(r)}function Zt(r){return Wt(r)?Zf(r,!0):vy(r)}function z3(r,s){var l={};return s=ge(s,3),Mn(r,function(f,m,y){Xn(l,s(f,m,y),f)}),l}function H3(r,s){var l={};return s=ge(s,3),Mn(r,function(f,m,y){Xn(l,m,s(f,m,y))}),l}var F3=Mi(function(r,s,l){Wo(r,s,l)}),vp=Mi(function(r,s,l,f){Wo(r,s,l,f)}),q3=tr(function(r,s){var l={};if(r==null)return l;var f=!1;s=it(s,function(y){return y=Ir(y,r),f||(f=y.length>1),y}),Bn(r,Tc(r),l),f&&(l=fn(l,g|v|x,Uy));for(var m=s.length;m--;)_c(l,s[m]);return l});function W3(r,s){return bp(r,oa(ge(s)))}var Z3=tr(function(r,s){return r==null?{}:yy(r,s)});function bp(r,s){if(r==null)return{};var l=it(Tc(r),function(f){return[f]});return s=ge(s),ch(r,l,function(f,m){return s(f,m[0])})}function K3(r,s,l){s=Ir(s,r);var f=-1,m=s.length;for(m||(m=1,r=n);++f<m;){var y=r==null?n:r[jn(s[f])];y===n&&(f=m,y=l),r=rr(y)?y.call(r):y}return r}function V3(r,s,l){return r==null?r:Rs(r,s,l)}function G3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:Rs(r,s,l,f)}var yp=Rh(wt),_p=Rh(Zt);function Q3(r,s,l){var f=Ee(r),m=f||Or(r)||Ui(r);if(s=ge(s,4),l==null){var y=r&&r.constructor;m?l=f?new y:[]:st(r)?l=rr(y)?Pi(Po(r)):{}:l={}}return(m?cn:Mn)(r,function(S,I,M){return s(l,S,I,M)}),l}function Y3(r,s){return r==null?!0:_c(r,s)}function J3(r,s,l){return r==null?r:ph(r,s,$c(l))}function X3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:ph(r,s,$c(l),f)}function Ni(r){return r==null?[]:tc(r,wt(r))}function e4(r){return r==null?[]:tc(r,Zt(r))}function t4(r,s,l){return l===n&&(l=s,s=n),l!==n&&(l=gn(l),l=l===l?l:0),s!==n&&(s=gn(s),s=s===s?s:0),ri(gn(r),s,l)}function n4(r,s,l){return s=ir(s),l===n?(l=s,s=0):l=ir(l),r=gn(r),ly(r,s,l)}function r4(r,s,l){if(l&&typeof l!="boolean"&&Bt(r,s,l)&&(s=l=n),l===n&&(typeof s=="boolean"?(l=s,s=n):typeof r=="boolean"&&(l=r,r=n)),r===n&&s===n?(r=0,s=1):(r=ir(r),s===n?(s=r,r=0):s=ir(s)),r>s){var f=r;r=s,s=f}if(l||r%1||s%1){var m=qf();return At(r+m*(s-r+M2("1e-"+((m+"").length-1))),s)}return vc(r,s)}var i4=Bi(function(r,s,l){return s=s.toLowerCase(),r+(l?wp(s):s)});function wp(r){return qc(We(r).toLowerCase())}function xp(r){return r=We(r),r&&r.replace(o2,V2).replace(E2,"")}function s4(r,s,l){r=We(r),s=Jt(s);var f=r.length;l=l===n?f:ri(Ce(l),0,f);var m=l;return l-=s.length,l>=0&&r.slice(l,m)==s}function o4(r){return r=We(r),r&&Dv.test(r)?r.replace(Jd,G2):r}function a4(r){return r=We(r),r&&Zv.test(r)?r.replace(Nl,"\\$&"):r}var l4=Bi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),c4=Bi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),u4=Eh("toLowerCase");function d4(r,s,l){r=We(r),s=Ce(s);var f=s?Ai(r):0;if(!s||f>=s)return r;var m=(s-f)/2;return Yo(Uo(m),l)+r+Yo(jo(m),l)}function f4(r,s,l){r=We(r),s=Ce(s);var f=s?Ai(r):0;return s&&f<s?r+Yo(s-f,l):r}function h4(r,s,l){r=We(r),s=Ce(s);var f=s?Ai(r):0;return s&&f<s?Yo(s-f,l)+r:r}function p4(r,s,l){return l||s==null?s=0:s&&(s=+s),wb(We(r).replace(Dl,""),s||0)}function g4(r,s,l){return(l?Bt(r,s,l):s===n)?s=1:s=Ce(s),bc(We(r),s)}function m4(){var r=arguments,s=We(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var v4=Bi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function b4(r,s,l){return l&&typeof l!="number"&&Bt(r,s,l)&&(s=l=n),l=l===n?re:l>>>0,l?(r=We(r),r&&(typeof s=="string"||s!=null&&!zc(s))&&(s=Jt(s),!s&&Ti(r))?Rr(yn(r),0,l):r.split(s,l)):[]}var y4=Bi(function(r,s,l){return r+(l?" ":"")+qc(s)});function _4(r,s,l){return r=We(r),l=l==null?0:ri(Ce(l),0,r.length),s=Jt(s),r.slice(l,l+s.length)==s}function w4(r,s,l){var f=b.templateSettings;l&&Bt(r,s,l)&&(s=n),r=We(r),s=ca({},s,f,Oh);var m=ca({},s.imports,f.imports,Oh),y=wt(m),S=tc(m,y),I,M,H=0,F=s.interpolate||xo,V="__p += '",ie=rc((s.escape||xo).source+"|"+F.source+"|"+(F===Xd?e2:xo).source+"|"+(s.evaluate||xo).source+"|$","g"),fe="//# sourceURL="+(Ze.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++I2+"]")+`
`;r.replace(ie,function(be,Pe,Ne,en,jt,tn){return Ne||(Ne=en),V+=r.slice(H,tn).replace(a2,Q2),Pe&&(I=!0,V+=`' +
__e(`+Pe+`) +
'`),jt&&(M=!0,V+=`';
`+jt+`;
__p += '`),Ne&&(V+=`' +
((__t = (`+Ne+`)) == null ? '' : __t) +
'`),H=tn+be.length,be}),V+=`';
`;var ve=Ze.call(s,"variable")&&s.variable;if(!ve)V=`with (obj) {
`+V+`
}
`;else if(Jv.test(ve))throw new xe(u);V=(M?V.replace(Bv,""):V).replace(jv,"$1").replace(Uv,"$1;"),V="function("+(ve||"obj")+`) {
`+(ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var Ae=kp(function(){return He(y,fe+"return "+V).apply(n,S)});if(Ae.source=V,Dc(Ae))throw Ae;return Ae}function x4(r){return We(r).toLowerCase()}function $4(r){return We(r).toUpperCase()}function k4(r,s,l){if(r=We(r),r&&(l||s===n))return Lf(r);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=yn(s),y=Pf(f,m),S=Mf(f,m)+1;return Rr(f,y,S).join("")}function E4(r,s,l){if(r=We(r),r&&(l||s===n))return r.slice(0,jf(r)+1);if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Mf(f,yn(s))+1;return Rr(f,0,m).join("")}function C4(r,s,l){if(r=We(r),r&&(l||s===n))return r.replace(Dl,"");if(!r||!(s=Jt(s)))return r;var f=yn(r),m=Pf(f,yn(s));return Rr(f,m).join("")}function S4(r,s){var l=W,f=Y;if(st(s)){var m="separator"in s?s.separator:m;l="length"in s?Ce(s.length):l,f="omission"in s?Jt(s.omission):f}r=We(r);var y=r.length;if(Ti(r)){var S=yn(r);y=S.length}if(l>=y)return r;var I=l-Ai(f);if(I<1)return f;var M=S?Rr(S,0,I).join(""):r.slice(0,I);if(m===n)return M+f;if(S&&(I+=M.length-I),zc(m)){if(r.slice(I).search(m)){var H,F=M;for(m.global||(m=rc(m.source,We(ef.exec(m))+"g")),m.lastIndex=0;H=m.exec(F);)var V=H.index;M=M.slice(0,V===n?I:V)}}else if(r.indexOf(Jt(m),I)!=I){var ie=M.lastIndexOf(m);ie>-1&&(M=M.slice(0,ie))}return M+f}function T4(r){return r=We(r),r&&Nv.test(r)?r.replace(Yd,rb):r}var A4=Bi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),qc=Eh("toUpperCase");function $p(r,s,l){return r=We(r),s=l?n:s,s===n?J2(r)?ob(r):F2(r):r.match(s)||[]}var kp=Oe(function(r,s){try{return Qt(r,n,s)}catch(l){return Dc(l)?l:new xe(l)}}),I4=tr(function(r,s){return cn(s,function(l){l=jn(l),Xn(r,l,Uc(r[l],r))}),r});function R4(r){var s=r==null?0:r.length,l=ge();return r=s?it(r,function(f){if(typeof f[1]!="function")throw new un(c);return[l(f[0]),f[1]]}):[],Oe(function(f){for(var m=-1;++m<s;){var y=r[m];if(Qt(y[0],this,f))return Qt(y[1],this,f)}})}function O4(r){return ry(fn(r,g))}function Wc(r){return function(){return r}}function L4(r,s){return r==null||r!==r?s:r}var P4=Sh(),M4=Sh(!0);function Kt(r){return r}function Zc(r){return rh(typeof r=="function"?r:fn(r,g))}function B4(r){return sh(fn(r,g))}function j4(r,s){return oh(r,fn(s,g))}var U4=Oe(function(r,s){return function(l){return As(l,r,s)}}),N4=Oe(function(r,s){return function(l){return As(r,l,s)}});function Kc(r,s,l){var f=wt(s),m=qo(s,f);l==null&&!(st(s)&&(m.length||!f.length))&&(l=s,s=r,r=this,m=qo(s,wt(s)));var y=!(st(l)&&"chain"in l)||!!l.chain,S=rr(r);return cn(m,function(I){var M=s[I];r[I]=M,S&&(r.prototype[I]=function(){var H=this.__chain__;if(y||H){var F=r(this.__wrapped__),V=F.__actions__=qt(this.__actions__);return V.push({func:M,args:arguments,thisArg:r}),F.__chain__=H,F}return M.apply(r,Er([this.value()],arguments))})}),r}function D4(){return kt._===this&&(kt._=fb),this}function Vc(){}function z4(r){return r=Ce(r),Oe(function(s){return ah(s,r)})}var H4=Ec(it),F4=Ec(Tf),q4=Ec(Ql);function Ep(r){return Oc(r)?Yl(jn(r)):_y(r)}function W4(r){return function(s){return r==null?n:ii(r,s)}}var Z4=Ah(),K4=Ah(!0);function Gc(){return[]}function Qc(){return!1}function V4(){return{}}function G4(){return""}function Q4(){return!0}function Y4(r,s){if(r=Ce(r),r<1||r>G)return[];var l=re,f=At(r,re);s=ge(s),r-=re;for(var m=ec(f,s);++l<r;)s(l);return m}function J4(r){return Ee(r)?it(r,jn):Xt(r)?[r]:qt(Wh(We(r)))}function X4(r){var s=++ub;return We(r)+s}var ex=Qo(function(r,s){return r+s},0),tx=Cc("ceil"),nx=Qo(function(r,s){return r/s},1),rx=Cc("floor");function ix(r){return r&&r.length?Fo(r,Kt,dc):n}function sx(r,s){return r&&r.length?Fo(r,ge(s,2),dc):n}function ox(r){return Rf(r,Kt)}function ax(r,s){return Rf(r,ge(s,2))}function lx(r){return r&&r.length?Fo(r,Kt,gc):n}function cx(r,s){return r&&r.length?Fo(r,ge(s,2),gc):n}var ux=Qo(function(r,s){return r*s},1),dx=Cc("round"),fx=Qo(function(r,s){return r-s},0);function hx(r){return r&&r.length?Xl(r,Kt):0}function px(r,s){return r&&r.length?Xl(r,ge(s,2)):0}return b.after=Bw,b.ary=np,b.assign=$3,b.assignIn=mp,b.assignInWith=ca,b.assignWith=k3,b.at=E3,b.before=rp,b.bind=Uc,b.bindAll=I4,b.bindKey=ip,b.castArray=Vw,b.chain=Xh,b.chunk=r_,b.compact=i_,b.concat=s_,b.cond=R4,b.conforms=O4,b.constant=Wc,b.countBy=hw,b.create=C3,b.curry=sp,b.curryRight=op,b.debounce=ap,b.defaults=S3,b.defaultsDeep=T3,b.defer=jw,b.delay=Uw,b.difference=o_,b.differenceBy=a_,b.differenceWith=l_,b.drop=c_,b.dropRight=u_,b.dropRightWhile=d_,b.dropWhile=f_,b.fill=h_,b.filter=gw,b.flatMap=bw,b.flatMapDeep=yw,b.flatMapDepth=_w,b.flatten=Gh,b.flattenDeep=p_,b.flattenDepth=g_,b.flip=Nw,b.flow=P4,b.flowRight=M4,b.fromPairs=m_,b.functions=M3,b.functionsIn=B3,b.groupBy=ww,b.initial=b_,b.intersection=y_,b.intersectionBy=__,b.intersectionWith=w_,b.invert=U3,b.invertBy=N3,b.invokeMap=$w,b.iteratee=Zc,b.keyBy=kw,b.keys=wt,b.keysIn=Zt,b.map=ra,b.mapKeys=z3,b.mapValues=H3,b.matches=B4,b.matchesProperty=j4,b.memoize=sa,b.merge=F3,b.mergeWith=vp,b.method=U4,b.methodOf=N4,b.mixin=Kc,b.negate=oa,b.nthArg=z4,b.omit=q3,b.omitBy=W3,b.once=Dw,b.orderBy=Ew,b.over=H4,b.overArgs=zw,b.overEvery=F4,b.overSome=q4,b.partial=Nc,b.partialRight=lp,b.partition=Cw,b.pick=Z3,b.pickBy=bp,b.property=Ep,b.propertyOf=W4,b.pull=E_,b.pullAll=Yh,b.pullAllBy=C_,b.pullAllWith=S_,b.pullAt=T_,b.range=Z4,b.rangeRight=K4,b.rearg=Hw,b.reject=Aw,b.remove=A_,b.rest=Fw,b.reverse=Bc,b.sampleSize=Rw,b.set=V3,b.setWith=G3,b.shuffle=Ow,b.slice=I_,b.sortBy=Mw,b.sortedUniq=j_,b.sortedUniqBy=U_,b.split=b4,b.spread=qw,b.tail=N_,b.take=D_,b.takeRight=z_,b.takeRightWhile=H_,b.takeWhile=F_,b.tap=iw,b.throttle=Ww,b.thru=na,b.toArray=hp,b.toPairs=yp,b.toPairsIn=_p,b.toPath=J4,b.toPlainObject=gp,b.transform=Q3,b.unary=Zw,b.union=q_,b.unionBy=W_,b.unionWith=Z_,b.uniq=K_,b.uniqBy=V_,b.uniqWith=G_,b.unset=Y3,b.unzip=jc,b.unzipWith=Jh,b.update=J3,b.updateWith=X3,b.values=Ni,b.valuesIn=e4,b.without=Q_,b.words=$p,b.wrap=Kw,b.xor=Y_,b.xorBy=J_,b.xorWith=X_,b.zip=ew,b.zipObject=tw,b.zipObjectDeep=nw,b.zipWith=rw,b.entries=yp,b.entriesIn=_p,b.extend=mp,b.extendWith=ca,Kc(b,b),b.add=ex,b.attempt=kp,b.camelCase=i4,b.capitalize=wp,b.ceil=tx,b.clamp=t4,b.clone=Gw,b.cloneDeep=Yw,b.cloneDeepWith=Jw,b.cloneWith=Qw,b.conformsTo=Xw,b.deburr=xp,b.defaultTo=L4,b.divide=nx,b.endsWith=s4,b.eq=wn,b.escape=o4,b.escapeRegExp=a4,b.every=pw,b.find=mw,b.findIndex=Kh,b.findKey=A3,b.findLast=vw,b.findLastIndex=Vh,b.findLastKey=I3,b.floor=rx,b.forEach=ep,b.forEachRight=tp,b.forIn=R3,b.forInRight=O3,b.forOwn=L3,b.forOwnRight=P3,b.get=Hc,b.gt=e3,b.gte=t3,b.has=j3,b.hasIn=Fc,b.head=Qh,b.identity=Kt,b.includes=xw,b.indexOf=v_,b.inRange=n4,b.invoke=D3,b.isArguments=ai,b.isArray=Ee,b.isArrayBuffer=n3,b.isArrayLike=Wt,b.isArrayLikeObject=ut,b.isBoolean=r3,b.isBuffer=Or,b.isDate=i3,b.isElement=s3,b.isEmpty=o3,b.isEqual=a3,b.isEqualWith=l3,b.isError=Dc,b.isFinite=c3,b.isFunction=rr,b.isInteger=cp,b.isLength=aa,b.isMap=up,b.isMatch=u3,b.isMatchWith=d3,b.isNaN=f3,b.isNative=h3,b.isNil=g3,b.isNull=p3,b.isNumber=dp,b.isObject=st,b.isObjectLike=at,b.isPlainObject=Ms,b.isRegExp=zc,b.isSafeInteger=m3,b.isSet=fp,b.isString=la,b.isSymbol=Xt,b.isTypedArray=Ui,b.isUndefined=v3,b.isWeakMap=b3,b.isWeakSet=y3,b.join=x_,b.kebabCase=l4,b.last=pn,b.lastIndexOf=$_,b.lowerCase=c4,b.lowerFirst=u4,b.lt=_3,b.lte=w3,b.max=ix,b.maxBy=sx,b.mean=ox,b.meanBy=ax,b.min=lx,b.minBy=cx,b.stubArray=Gc,b.stubFalse=Qc,b.stubObject=V4,b.stubString=G4,b.stubTrue=Q4,b.multiply=ux,b.nth=k_,b.noConflict=D4,b.noop=Vc,b.now=ia,b.pad=d4,b.padEnd=f4,b.padStart=h4,b.parseInt=p4,b.random=r4,b.reduce=Sw,b.reduceRight=Tw,b.repeat=g4,b.replace=m4,b.result=K3,b.round=dx,b.runInContext=L,b.sample=Iw,b.size=Lw,b.snakeCase=v4,b.some=Pw,b.sortedIndex=R_,b.sortedIndexBy=O_,b.sortedIndexOf=L_,b.sortedLastIndex=P_,b.sortedLastIndexBy=M_,b.sortedLastIndexOf=B_,b.startCase=y4,b.startsWith=_4,b.subtract=fx,b.sum=hx,b.sumBy=px,b.template=w4,b.times=Y4,b.toFinite=ir,b.toInteger=Ce,b.toLength=pp,b.toLower=x4,b.toNumber=gn,b.toSafeInteger=x3,b.toString=We,b.toUpper=$4,b.trim=k4,b.trimEnd=E4,b.trimStart=C4,b.truncate=S4,b.unescape=T4,b.uniqueId=X4,b.upperCase=A4,b.upperFirst=qc,b.each=ep,b.eachRight=tp,b.first=Qh,Kc(b,function(){var r={};return Mn(b,function(s,l){Ze.call(b.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),b.VERSION=i,cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),cn(["drop","take"],function(r,s){je.prototype[r]=function(l){l=l===n?1:bt(Ce(l),0);var f=this.__filtered__&&!s?new je(this):this.clone();return f.__filtered__?f.__takeCount__=At(l,f.__takeCount__):f.__views__.push({size:At(l,re),type:r+(f.__dir__<0?"Right":"")}),f},je.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),cn(["filter","map","takeWhile"],function(r,s){var l=s+1,f=l==se||l==D;je.prototype[r]=function(m){var y=this.clone();return y.__iteratees__.push({iteratee:ge(m,3),type:l}),y.__filtered__=y.__filtered__||f,y}}),cn(["head","last"],function(r,s){var l="take"+(s?"Right":"");je.prototype[r]=function(){return this[l](1).value()[0]}}),cn(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");je.prototype[r]=function(){return this.__filtered__?new je(this):this[l](1)}}),je.prototype.compact=function(){return this.filter(Kt)},je.prototype.find=function(r){return this.filter(r).head()},je.prototype.findLast=function(r){return this.reverse().find(r)},je.prototype.invokeMap=Oe(function(r,s){return typeof r=="function"?new je(this):this.map(function(l){return As(l,r,s)})}),je.prototype.reject=function(r){return this.filter(oa(ge(r)))},je.prototype.slice=function(r,s){r=Ce(r);var l=this;return l.__filtered__&&(r>0||s<0)?new je(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==n&&(s=Ce(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},je.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},je.prototype.toArray=function(){return this.take(re)},Mn(je.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),m=b[f?"take"+(s=="last"?"Right":""):s],y=f||/^find/.test(s);m&&(b.prototype[s]=function(){var S=this.__wrapped__,I=f?[1]:arguments,M=S instanceof je,H=I[0],F=M||Ee(S),V=function(Pe){var Ne=m.apply(b,Er([Pe],I));return f&&ie?Ne[0]:Ne};F&&l&&typeof H=="function"&&H.length!=1&&(M=F=!1);var ie=this.__chain__,fe=!!this.__actions__.length,ve=y&&!ie,Ae=M&&!fe;if(!y&&F){S=Ae?S:new je(this);var be=r.apply(S,I);return be.__actions__.push({func:na,args:[V],thisArg:n}),new dn(be,ie)}return ve&&Ae?r.apply(this,I):(be=this.thru(V),ve?f?be.value()[0]:be.value():be)})}),cn(["pop","push","shift","sort","splice","unshift"],function(r){var s=To[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(f&&!this.__chain__){var y=this.value();return s.apply(Ee(y)?y:[],m)}return this[l](function(S){return s.apply(Ee(S)?S:[],m)})}}),Mn(je.prototype,function(r,s){var l=b[s];if(l){var f=l.name+"";Ze.call(Li,f)||(Li[f]=[]),Li[f].push({name:s,func:l})}}),Li[Go(n,_).name]=[{name:"wrapper",func:n}],je.prototype.clone=Tb,je.prototype.reverse=Ab,je.prototype.value=Ib,b.prototype.at=sw,b.prototype.chain=ow,b.prototype.commit=aw,b.prototype.next=lw,b.prototype.plant=uw,b.prototype.reverse=dw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=fw,b.prototype.first=b.prototype.head,xs&&(b.prototype[xs]=cw),b},Ii=ab();Xr?((Xr.exports=Ii)._=Ii,Zl._=Ii):kt._=Ii}).call(cr)})(Aa,Aa.exports);var Dx=Aa.exports;const zx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),Sg=(e={})=>(()=>{const t=zx();return Ke(t,e,!0,!0),t})(),Hx=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),Fx=j('<span class="inline-block h-4 w-4 text-gray-700">'),co=e=>{const[t,n]=$e(!1),i=()=>n(o=>!o);return(()=>{const o=Hx(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return O(c,$(de,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const p=Fx();return O(p,h),p})()}),u),O(u,()=>e.name),d.$$click=()=>i(),O(d,$(Sg,{})),O(o,$(de,{get when(){return t()},get children(){return e.settings()}}),null),o})()};ct(["click"]);const qx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Qu=(e={})=>(()=>{const t=qx();return Ke(t,e,!0,!0),t})();var Wx=typeof cr=="object"&&cr&&cr.Object===Object&&cr,Tg=Wx,Zx=Tg,Kx=typeof self=="object"&&self&&self.Object===Object&&self,Vx=Zx||Kx||Function("return this")(),Rn=Vx,Gx=Rn,Qx=Gx.Symbol,ss=Qx,Pp=ss,Ag=Object.prototype,Yx=Ag.hasOwnProperty,Jx=Ag.toString,Bs=Pp?Pp.toStringTag:void 0;function Xx(e){var t=Yx.call(e,Bs),n=e[Bs];try{e[Bs]=void 0;var i=!0}catch{}var o=Jx.call(e);return i&&(t?e[Bs]=n:delete e[Bs]),o}var e5=Xx,t5=Object.prototype,n5=t5.toString;function r5(e){return n5.call(e)}var i5=r5,Mp=ss,s5=e5,o5=i5,a5="[object Null]",l5="[object Undefined]",Bp=Mp?Mp.toStringTag:void 0;function c5(e){return e==null?e===void 0?l5:a5:Bp&&Bp in Object(e)?s5(e):o5(e)}var os=c5;function u5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Fn=u5,d5=os,f5=Fn,h5="[object AsyncFunction]",p5="[object Function]",g5="[object GeneratorFunction]",m5="[object Proxy]";function v5(e){if(!f5(e))return!1;var t=d5(e);return t==p5||t==g5||t==h5||t==m5}var Ig=v5,b5=Rn,y5=b5["__core-js_shared__"],_5=y5,Yc=_5,jp=function(){var e=/[^.]+$/.exec(Yc&&Yc.keys&&Yc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function w5(e){return!!jp&&jp in e}var x5=w5,$5=Function.prototype,k5=$5.toString;function E5(e){if(e!=null){try{return k5.call(e)}catch{}try{return e+""}catch{}}return""}var Rg=E5,C5=Ig,S5=x5,T5=Fn,A5=Rg,I5=/[\\^$.*+?()[\]{}|]/g,R5=/^\[object .+?Constructor\]$/,O5=Function.prototype,L5=Object.prototype,P5=O5.toString,M5=L5.hasOwnProperty,B5=RegExp("^"+P5.call(M5).replace(I5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function j5(e){if(!T5(e)||S5(e))return!1;var t=C5(e)?B5:R5;return t.test(A5(e))}var U5=j5;function N5(e,t){return e?.[t]}var D5=N5,z5=U5,H5=D5;function F5(e,t){var n=H5(e,t);return z5(n)?n:void 0}var _i=F5,q5=_i,W5=q5(Object,"create"),sl=W5,Up=sl;function Z5(){this.__data__=Up?Up(null):{},this.size=0}var K5=Z5;function V5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var G5=V5,Q5=sl,Y5="__lodash_hash_undefined__",J5=Object.prototype,X5=J5.hasOwnProperty;function e$(e){var t=this.__data__;if(Q5){var n=t[e];return n===Y5?void 0:n}return X5.call(t,e)?t[e]:void 0}var t$=e$,n$=sl,r$=Object.prototype,i$=r$.hasOwnProperty;function s$(e){var t=this.__data__;return n$?t[e]!==void 0:i$.call(t,e)}var o$=s$,a$=sl,l$="__lodash_hash_undefined__";function c$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=a$&&t===void 0?l$:t,this}var u$=c$,d$=K5,f$=G5,h$=t$,p$=o$,g$=u$;function as(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}as.prototype.clear=d$;as.prototype.delete=f$;as.prototype.get=h$;as.prototype.has=p$;as.prototype.set=g$;var m$=as;function v$(){this.__data__=[],this.size=0}var b$=v$;function y$(e,t){return e===t||e!==e&&t!==t}var Yu=y$,_$=Yu;function w$(e,t){for(var n=e.length;n--;)if(_$(e[n][0],t))return n;return-1}var ol=w$,x$=ol,$$=Array.prototype,k$=$$.splice;function E$(e){var t=this.__data__,n=x$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():k$.call(t,n,1),--this.size,!0}var C$=E$,S$=ol;function T$(e){var t=this.__data__,n=S$(t,e);return n<0?void 0:t[n][1]}var A$=T$,I$=ol;function R$(e){return I$(this.__data__,e)>-1}var O$=R$,L$=ol;function P$(e,t){var n=this.__data__,i=L$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var M$=P$,B$=b$,j$=C$,U$=A$,N$=O$,D$=M$;function ls(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ls.prototype.clear=B$;ls.prototype.delete=j$;ls.prototype.get=U$;ls.prototype.has=N$;ls.prototype.set=D$;var al=ls,z$=_i,H$=Rn,F$=z$(H$,"Map"),Ju=F$,Np=m$,q$=al,W$=Ju;function Z$(){this.size=0,this.__data__={hash:new Np,map:new(W$||q$),string:new Np}}var K$=Z$;function V$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var G$=V$,Q$=G$;function Y$(e,t){var n=e.__data__;return Q$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ll=Y$,J$=ll;function X$(e){var t=J$(this,e).delete(e);return this.size-=t?1:0,t}var e8=X$,t8=ll;function n8(e){return t8(this,e).get(e)}var r8=n8,i8=ll;function s8(e){return i8(this,e).has(e)}var o8=s8,a8=ll;function l8(e,t){var n=a8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var c8=l8,u8=K$,d8=e8,f8=r8,h8=o8,p8=c8;function cs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}cs.prototype.clear=u8;cs.prototype.delete=d8;cs.prototype.get=f8;cs.prototype.has=h8;cs.prototype.set=p8;var Xu=cs,g8="__lodash_hash_undefined__";function m8(e){return this.__data__.set(e,g8),this}var v8=m8;function b8(e){return this.__data__.has(e)}var y8=b8,_8=Xu,w8=v8,x8=y8;function Ia(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new _8;++t<n;)this.add(e[t])}Ia.prototype.add=Ia.prototype.push=w8;Ia.prototype.has=x8;var Og=Ia;function $8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var k8=$8;function E8(e){return e!==e}var C8=E8;function S8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var T8=S8,A8=k8,I8=C8,R8=T8;function O8(e,t,n){return t===t?R8(e,t,n):A8(e,I8,n)}var L8=O8,P8=L8;function M8(e,t){var n=e==null?0:e.length;return!!n&&P8(e,t,0)>-1}var B8=M8;function j8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var U8=j8;function N8(e,t){return e.has(t)}var Lg=N8,D8=_i,z8=Rn,H8=D8(z8,"Set"),Pg=H8;function F8(){}var q8=F8;function W8(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var ed=W8,Jc=Pg,Z8=q8,K8=ed,V8=1/0,G8=Jc&&1/K8(new Jc([,-0]))[1]==V8?function(e){return new Jc(e)}:Z8,Q8=G8,Y8=Og,J8=B8,X8=U8,e6=Lg,t6=Q8,n6=ed,r6=200;function i6(e,t,n){var i=-1,o=J8,a=e.length,c=!0,u=[],d=u;if(n)c=!1,o=X8;else if(a>=r6){var h=t?null:t6(e);if(h)return n6(h);c=!1,o=e6,d=new Y8}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,c&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var Mg=i6,s6=Mg;function o6(e){return e&&e.length?s6(e):[]}var a6=o6;const fr=lo(a6),l6=j('<div class="block shrink-0 overflow-hidden border-b p-1">'),wa=e=>(()=>{const t=l6();return O(t,()=>e.children),t})();function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function c6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Bg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function u6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function d6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function f6(e,t){Bg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const di={number:yu,bool:c6,bytes:Bg,hash:u6,exists:d6,output:f6},xa=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,h6=Object.freeze(Object.defineProperty({__proto__:null,crypto:xa},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const p6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),g6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),$n=(e,t)=>e<<32-t|e>>>t,jg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!jg)throw new Error("Non little-endian hardware is not supported");const m6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function nn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=m6[e[n]];return t}function qr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Ug=async()=>{};async function v6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Ug(),i+=a)}}function td(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function uo(e){if(typeof e=="string"&&(e=td(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class nd{clone(){return this._cloneInto()}}const b6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function y6(e,t){if(t!==void 0&&(typeof t!="object"||!b6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function cl(e){const t=i=>e().update(uo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function _6(e){const t=(i,o)=>e(o).update(uo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function ul(e=32){if(xa&&typeof xa.getRandomValues=="function")return xa.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const w6=Object.freeze(Object.defineProperty({__proto__:null,Hash:nd,asyncLoop:v6,bytesToHex:nn,checkOpts:y6,concatBytes:fi,createView:gi,hexToBytes:qr,isLE:jg,nextTick:Ug,randomBytes:ul,rotr:$n,toBytes:uo,u32:g6,u8:p6,utf8ToBytes:td,wrapConstructor:cl,wrapConstructorWithOpts:_6},Symbol.toStringTag,{value:"Module"}));function x6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+h,u,i)}let Ng=class extends nd{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){di.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=uo(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=gi(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){di.exists(this),di.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let g=c;g<o;g++)n[g]=0;x6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}};const $6=(e,t,n)=>e&t^~e&n,k6=(e,t,n)=>e&t^e&n^t&n,E6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Lr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Pr=new Uint32Array(64);class Dg extends Ng{constructor(){super(64,32,8,!1),this.A=Lr[0]|0,this.B=Lr[1]|0,this.C=Lr[2]|0,this.D=Lr[3]|0,this.E=Lr[4]|0,this.F=Lr[5]|0,this.G=Lr[6]|0,this.H=Lr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:c,G:u,H:d}=this;return[t,n,i,o,a,c,u,d]}set(t,n,i,o,a,c,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Pr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=Pr[g-15],x=Pr[g-2],k=$n(v,7)^$n(v,18)^v>>>3,w=$n(x,17)^$n(x,19)^x>>>10;Pr[g]=w+Pr[g-7]+k+Pr[g-16]|0}let{A:i,B:o,C:a,D:c,E:u,F:d,G:h,H:p}=this;for(let g=0;g<64;g++){const v=$n(u,6)^$n(u,11)^$n(u,25),x=p+v+$6(u,d,h)+E6[g]+Pr[g]|0,w=($n(i,2)^$n(i,13)^$n(i,22))+k6(i,o,a)|0;p=h,h=d,d=u,u=c+x|0,c=a,a=o,o=i,i=x+w|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,h=h+this.G|0,p=p+this.H|0,this.set(i,o,a,c,u,d,h,p)}roundClean(){Pr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class C6 extends Dg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Nn=cl(()=>new Dg),S6=cl(()=>new C6),T6=Object.freeze(Object.defineProperty({__proto__:null,sha224:S6,sha256:Nn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const zg=BigInt(0),dl=BigInt(1),A6=BigInt(2),fl=e=>e instanceof Uint8Array,I6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Vi(e){if(!fl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=I6[e[n]];return t}function Hg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function rd(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function Gi(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Nt(e){return rd(Vi(e))}function id(e){if(!fl(e))throw new Error("Uint8Array expected");return rd(Vi(Uint8Array.from(e).reverse()))}const Hr=(e,t)=>Gi(e.toString(16).padStart(t*2,"0")),Fg=(e,t)=>Hr(e,t).reverse(),R6=e=>Gi(Hg(e));function St(e,t,n){let i;if(typeof t=="string")try{i=Gi(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(fl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function rn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!fl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function O6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function hl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function L6(e){let t;for(t=0;e>zg;e>>=dl,t+=1);return t}const P6=(e,t)=>e>>BigInt(t)&dl,M6=(e,t,n)=>e|(n?dl:zg)<<BigInt(t),sd=e=>(A6<<BigInt(e-1))-dl,Xc=e=>new Uint8Array(e),Dp=e=>Uint8Array.from(e);function qg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Xc(e),o=Xc(e),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Xc())=>{o=u(Dp([0]),g),i=u(),g.length!==0&&(o=u(Dp([1]),g),i=u())},h=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const x=i.slice();v.push(x),g+=i.length}return rn(...v)};return(g,v)=>{c(),d(g);let x;for(;!(x=v(h()));)d();return c(),x}}const B6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function us(e,t,n={}){const i=(o,a,c)=>{const u=B6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(c&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const j6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:P6,bitLen:L6,bitMask:sd,bitSet:M6,bytesToHex:Vi,bytesToNumberBE:Nt,bytesToNumberLE:id,concatBytes:rn,createHmacDrbg:qg,ensureBytes:St,equalBytes:O6,hexToBytes:Gi,hexToNumber:rd,numberToBytesBE:Hr,numberToBytesLE:Fg,numberToHexUnpadded:Hg,numberToVarBytesBE:R6,utf8ToBytes:hl,validateObject:us},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const $t=BigInt(0),ft=BigInt(1),ci=BigInt(2),U6=BigInt(3),_u=BigInt(4),zp=BigInt(5),Hp=BigInt(8);BigInt(9);BigInt(16);function yt(e,t){const n=e%t;return n>=$t?n:t+n}function N6(e,t,n){if(n<=$t||t<$t)throw new Error("Expected power/modulo > 0");if(n===ft)return $t;let i=ft;for(;t>$t;)t&ft&&(i=i*e%n),e=e*e%n,t>>=ft;return i}function mn(e,t,n){let i=e;for(;t-- >$t;)i*=i,i%=n;return i}function wu(e,t){if(e===$t||t<=$t)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=yt(e,t),i=t,o=$t,a=ft;for(;n!==$t;){const u=i/n,d=i%n,h=o-a*u;i=n,n=d,o=a,a=h}if(i!==ft)throw new Error("invert: does not exist");return yt(o,t)}function D6(e){const t=(e-ft)/ci;let n,i,o;for(n=e-ft,i=0;n%ci===$t;n/=ci,i++);for(o=ci;o<e&&N6(o,t,e)!==e-ft;o++);if(i===1){const c=(e+ft)/_u;return function(d,h){const p=d.pow(h,c);if(!d.eql(d.sqr(p),h))throw new Error("Cannot find square root");return p}}const a=(n+ft)/ci;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let h=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let x=1;for(let w=u.sqr(v);x<h&&!u.eql(w,u.ONE);x++)w=u.sqr(w);const k=u.pow(p,ft<<BigInt(h-x-1));p=u.sqr(k),g=u.mul(g,k),v=u.mul(v,p),h=x}return g}}function z6(e){if(e%_u===U6){const t=(e+ft)/_u;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Hp===zp){const t=(e-zp)/Hp;return function(i,o){const a=i.mul(o,ci),c=i.pow(a,t),u=i.mul(o,c),d=i.mul(i.mul(u,ci),c),h=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(h),o))throw new Error("Cannot find square root");return h}}return D6(e)}const H6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Wg(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=H6.reduce((i,o)=>(i[o]="function",i),t);return us(e,n)}function F6(e,t,n){if(n<$t)throw new Error("Expected power > 0");if(n===$t)return e.ONE;if(n===ft)return t;let i=e.ONE,o=t;for(;n>$t;)n&ft&&(i=e.mul(i,o)),o=e.sqr(o),n>>=ft;return i}function q6(e,t){const n=new Array(t.length),i=t.reduce((a,c,u)=>e.is0(c)?a:(n[u]=a,e.mul(a,c)),e.ONE),o=e.inv(i);return t.reduceRight((a,c,u)=>e.is0(c)?a:(n[u]=e.mul(a,n[u]),e.mul(a,c)),o),n}function od(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function W6(e,t,n=!1,i={}){if(e<=$t)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=od(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const c=z6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:sd(o),ZERO:$t,ONE:ft,create:d=>yt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return $t<=d&&d<e},is0:d=>d===$t,isOdd:d=>(d&ft)===ft,neg:d=>yt(-d,e),eql:(d,h)=>d===h,sqr:d=>yt(d*d,e),add:(d,h)=>yt(d+h,e),sub:(d,h)=>yt(d-h,e),mul:(d,h)=>yt(d*h,e),pow:(d,h)=>F6(u,d,h),div:(d,h)=>yt(d*wu(h,e),e),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>wu(d,e),sqrt:i.sqrt||(d=>c(u,d)),invertBatch:d=>q6(u,d),cmov:(d,h,p)=>p?h:d,toBytes:d=>n?Fg(d,a):Hr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?id(d):Nt(d)}});return Object.freeze(u)}function Z6(e,t,n=!1){e=St("privateHash",e);const i=e.length,o=od(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?id(e):Nt(e);return yt(a,t-ft)+ft}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const K6=BigInt(0),eu=BigInt(1);function V6(e,t){const n=(o,a)=>{const c=a.negate();return o?c:a},i=o=>{const a=Math.ceil(t/o)+1,c=2**(o-1);return{windows:a,windowSize:c}};return{constTimeNegate:n,unsafeLadder(o,a){let c=e.ZERO,u=o;for(;a>K6;)a&eu&&(c=c.add(u)),u=u.double(),a>>=eu;return c},precomputeWindow(o,a){const{windows:c,windowSize:u}=i(a),d=[];let h=o,p=h;for(let g=0;g<c;g++){p=h,d.push(p);for(let v=1;v<u;v++)p=p.add(h),d.push(p);h=p.double()}return d},wNAF(o,a,c){const{windows:u,windowSize:d}=i(o);let h=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),v=2**o,x=BigInt(o);for(let k=0;k<u;k++){const w=k*d;let E=Number(c&g);c>>=x,E>d&&(E-=v,c+=eu);const _=w,A=w+Math.abs(E)-1,R=k%2!==0,T=E<0;E===0?p=p.add(n(R,a[_])):h=h.add(n(T,a[A]))}return{p:h,f:p}},wNAFCached(o,a,c,u){const d=o._WINDOW_SIZE||1;let h=a.get(o);return h||(h=this.precomputeWindow(o,d),d!==1&&a.set(o,u(h))),this.wNAF(d,h,c)}}}function Zg(e){return Wg(e.Fp),us(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...od(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function G6(e){const t=Zg(e);us(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:Q6,hexToBytes:Y6}=j6,hi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=hi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:Q6(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=hi,n=typeof e=="string"?Y6(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=hi._parseInt(n.subarray(2)),{d:c,l:u}=hi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:c}},hexFromSig(e){const t=h=>Number.parseInt(h[0],16)&8?"00"+h:h,n=h=>{const p=h.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,c=o.length/2,u=n(a),d=n(c);return`30${n(c+a+4)}02${d}${o}02${u}${i}`}},En=BigInt(0),ht=BigInt(1),or=BigInt(2),Ra=BigInt(3),Fp=BigInt(4);function J6(e){const t=G6(e),{Fp:n}=t,i=t.toBytes||((k,w,E)=>{const _=w.toAffine();return rn(Uint8Array.from([4]),n.toBytes(_.x),n.toBytes(_.y))}),o=t.fromBytes||(k=>{const w=k.subarray(1),E=n.fromBytes(w.subarray(0,n.BYTES)),_=n.fromBytes(w.subarray(n.BYTES,2*n.BYTES));return{x:E,y:_}});function a(k){const{a:w,b:E}=t,_=n.sqr(k),A=n.mul(_,k);return n.add(n.add(A,n.mul(k,w)),E)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function c(k){return typeof k=="bigint"&&En<k&&k<t.n}function u(k){if(!c(k))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(k){const{allowedPrivateKeyLengths:w,nByteLength:E,wrapPrivateKey:_,n:A}=t;if(w&&typeof k!="bigint"){if(k instanceof Uint8Array&&(k=Vi(k)),typeof k!="string"||!w.includes(k.length))throw new Error("Invalid key");k=k.padStart(E*2,"0")}let R;try{R=typeof k=="bigint"?k:Nt(St("private key",k,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof k}`)}return _&&(R=yt(R,A)),u(R),R}const h=new Map;function p(k){if(!(k instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(w,E,_){if(this.px=w,this.py=E,this.pz=_,w==null||!n.isValid(w))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if(_==null||!n.isValid(_))throw new Error("z required")}static fromAffine(w){const{x:E,y:_}=w||{};if(!w||!n.isValid(E)||!n.isValid(_))throw new Error("invalid affine point");if(w instanceof g)throw new Error("projective point not allowed");const A=R=>n.eql(R,n.ZERO);return A(E)&&A(_)?g.ZERO:new g(E,_,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(w){const E=n.invertBatch(w.map(_=>_.pz));return w.map((_,A)=>_.toAffine(E[A])).map(g.fromAffine)}static fromHex(w){const E=g.fromAffine(o(St("pointHex",w)));return E.assertValidity(),E}static fromPrivateKey(w){return g.BASE.multiply(d(w))}_setWindowSize(w){this._WINDOW_SIZE=w,h.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:w,y:E}=this.toAffine();if(!n.isValid(w)||!n.isValid(E))throw new Error("bad point: x or y not FE");const _=n.sqr(E),A=a(w);if(!n.eql(_,A))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:w}=this.toAffine();if(n.isOdd)return!n.isOdd(w);throw new Error("Field doesn't support isOdd")}equals(w){p(w);const{px:E,py:_,pz:A}=this,{px:R,py:T,pz:B}=w,C=n.eql(n.mul(E,B),n.mul(R,A)),P=n.eql(n.mul(_,B),n.mul(T,A));return C&&P}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:w,b:E}=t,_=n.mul(E,Ra),{px:A,py:R,pz:T}=this;let B=n.ZERO,C=n.ZERO,P=n.ZERO,U=n.mul(A,A),te=n.mul(R,R),W=n.mul(T,T),Y=n.mul(A,R);return Y=n.add(Y,Y),P=n.mul(A,T),P=n.add(P,P),B=n.mul(w,P),C=n.mul(_,W),C=n.add(B,C),B=n.sub(te,C),C=n.add(te,C),C=n.mul(B,C),B=n.mul(Y,B),P=n.mul(_,P),W=n.mul(w,W),Y=n.sub(U,W),Y=n.mul(w,Y),Y=n.add(Y,P),P=n.add(U,U),U=n.add(P,U),U=n.add(U,W),U=n.mul(U,Y),C=n.add(C,U),W=n.mul(R,T),W=n.add(W,W),U=n.mul(W,Y),B=n.sub(B,U),P=n.mul(W,te),P=n.add(P,P),P=n.add(P,P),new g(B,C,P)}add(w){p(w);const{px:E,py:_,pz:A}=this,{px:R,py:T,pz:B}=w;let C=n.ZERO,P=n.ZERO,U=n.ZERO;const te=t.a,W=n.mul(t.b,Ra);let Y=n.mul(E,R),Z=n.mul(_,T),X=n.mul(A,B),se=n.add(E,_),q=n.add(R,T);se=n.mul(se,q),q=n.add(Y,Z),se=n.sub(se,q),q=n.add(E,A);let D=n.add(R,B);return q=n.mul(q,D),D=n.add(Y,X),q=n.sub(q,D),D=n.add(_,A),C=n.add(T,B),D=n.mul(D,C),C=n.add(Z,X),D=n.sub(D,C),U=n.mul(te,q),C=n.mul(W,X),U=n.add(C,U),C=n.sub(Z,U),U=n.add(Z,U),P=n.mul(C,U),Z=n.add(Y,Y),Z=n.add(Z,Y),X=n.mul(te,X),q=n.mul(W,q),Z=n.add(Z,X),X=n.sub(Y,X),X=n.mul(te,X),q=n.add(q,X),Y=n.mul(Z,q),P=n.add(P,Y),Y=n.mul(D,q),C=n.mul(se,C),C=n.sub(C,Y),Y=n.mul(se,Z),U=n.mul(D,U),U=n.add(U,Y),new g(C,P,U)}subtract(w){return this.add(w.negate())}is0(){return this.equals(g.ZERO)}wNAF(w){return x.wNAFCached(this,h,w,E=>{const _=n.invertBatch(E.map(A=>A.pz));return E.map((A,R)=>A.toAffine(_[R])).map(g.fromAffine)})}multiplyUnsafe(w){const E=g.ZERO;if(w===En)return E;if(u(w),w===ht)return this;const{endo:_}=t;if(!_)return x.unsafeLadder(this,w);let{k1neg:A,k1:R,k2neg:T,k2:B}=_.splitScalar(w),C=E,P=E,U=this;for(;R>En||B>En;)R&ht&&(C=C.add(U)),B&ht&&(P=P.add(U)),U=U.double(),R>>=ht,B>>=ht;return A&&(C=C.negate()),T&&(P=P.negate()),P=new g(n.mul(P.px,_.beta),P.py,P.pz),C.add(P)}multiply(w){u(w);let E=w,_,A;const{endo:R}=t;if(R){const{k1neg:T,k1:B,k2neg:C,k2:P}=R.splitScalar(E);let{p:U,f:te}=this.wNAF(B),{p:W,f:Y}=this.wNAF(P);U=x.constTimeNegate(T,U),W=x.constTimeNegate(C,W),W=new g(n.mul(W.px,R.beta),W.py,W.pz),_=U.add(W),A=te.add(Y)}else{const{p:T,f:B}=this.wNAF(E);_=T,A=B}return g.normalizeZ([_,A])[0]}multiplyAndAddUnsafe(w,E,_){const A=g.BASE,R=(B,C)=>C===En||C===ht||!B.equals(A)?B.multiplyUnsafe(C):B.multiply(C),T=R(this,E).add(R(w,_));return T.is0()?void 0:T}toAffine(w){const{px:E,py:_,pz:A}=this,R=this.is0();w==null&&(w=R?n.ONE:n.inv(A));const T=n.mul(E,w),B=n.mul(_,w),C=n.mul(A,w);if(R)return{x:n.ZERO,y:n.ZERO};if(!n.eql(C,n.ONE))throw new Error("invZ was invalid");return{x:T,y:B}}isTorsionFree(){const{h:w,isTorsionFree:E}=t;if(w===ht)return!0;if(E)return E(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:w,clearCofactor:E}=t;return w===ht?this:E?E(g,this):this.multiplyUnsafe(t.h)}toRawBytes(w=!0){return this.assertValidity(),i(g,this,w)}toHex(w=!0){return Vi(this.toRawBytes(w))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,x=V6(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:c}}function X6(e){const t=Zg(e);return us(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function e7(e){const t=X6(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function c(q){return En<q&&q<n.ORDER}function u(q){return yt(q,i)}function d(q){return wu(q,i)}const{ProjectivePoint:h,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=J6({...t,toBytes(q,D,ne){const G=D.toAffine(),ae=n.toBytes(G.x),ue=rn;return ne?ue(Uint8Array.from([D.hasEvenY()?2:3]),ae):ue(Uint8Array.from([4]),ae,n.toBytes(G.y))},fromBytes(q){const D=q.length,ne=q[0],G=q.subarray(1);if(D===o&&(ne===2||ne===3)){const ae=Nt(G);if(!c(ae))throw new Error("Point is not on curve");const ue=g(ae);let re=n.sqrt(ue);const Q=(re&ht)===ht;return(ne&1)===1!==Q&&(re=n.neg(re)),{x:ae,y:re}}else if(D===a&&ne===4){const ae=n.fromBytes(G.subarray(0,n.BYTES)),ue=n.fromBytes(G.subarray(n.BYTES,2*n.BYTES));return{x:ae,y:ue}}else throw new Error(`Point of length ${D} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),x=q=>Vi(Hr(q,t.nByteLength));function k(q){const D=i>>ht;return q>D}function w(q){return k(q)?u(-q):q}const E=(q,D,ne)=>Nt(q.slice(D,ne));class _{constructor(D,ne,G){this.r=D,this.s=ne,this.recovery=G,this.assertValidity()}static fromCompact(D){const ne=t.nByteLength;return D=St("compactSignature",D,ne*2),new _(E(D,0,ne),E(D,ne,2*ne))}static fromDER(D){const{r:ne,s:G}=hi.toSig(St("DER",D));return new _(ne,G)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(D){return new _(this.r,this.s,D)}recoverPublicKey(D){const{r:ne,s:G,recovery:ae}=this,ue=P(St("msgHash",D));if(ae==null||![0,1,2,3].includes(ae))throw new Error("recovery id invalid");const re=ae===2||ae===3?ne+t.n:ne;if(re>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Q=ae&1?"03":"02",he=h.fromHex(Q+x(re)),we=d(re),Re=u(-ue*we),Je=u(G*we),J=h.BASE.multiplyAndAddUnsafe(he,Re,Je);if(!J)throw new Error("point at infinify");return J.assertValidity(),J}hasHighS(){return k(this.s)}normalizeS(){return this.hasHighS()?new _(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Gi(this.toDERHex())}toDERHex(){return hi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Gi(this.toCompactHex())}toCompactHex(){return x(this.r)+x(this.s)}}const A={isValidPrivateKey(q){try{return p(q),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const q=t.randomBytes(n.BYTES+8),D=Z6(q,i);return Hr(D,t.nByteLength)},precompute(q=8,D=h.BASE){return D._setWindowSize(q),D.multiply(BigInt(3)),D}};function R(q,D=!0){return h.fromPrivateKey(q).toRawBytes(D)}function T(q){const D=q instanceof Uint8Array,ne=typeof q=="string",G=(D||ne)&&q.length;return D?G===o||G===a:ne?G===2*o||G===2*a:q instanceof h}function B(q,D,ne=!0){if(T(q))throw new Error("first arg must be private key");if(!T(D))throw new Error("second arg must be public key");return h.fromHex(D).multiply(p(q)).toRawBytes(ne)}const C=t.bits2int||function(q){const D=Nt(q),ne=q.length*8-t.nBitLength;return ne>0?D>>BigInt(ne):D},P=t.bits2int_modN||function(q){return u(C(q))},U=sd(t.nBitLength);function te(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(En<=q&&q<U))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Hr(q,t.nByteLength)}function W(q,D,ne=Y){if(["recovered","canonical"].some(nt=>nt in ne))throw new Error("sign() legacy options not supported");const{hash:G,randomBytes:ae}=t;let{lowS:ue,prehash:re,extraEntropy:Q}=ne;ue==null&&(ue=!0),q=St("msgHash",q),re&&(q=St("prehashed msgHash",G(q)));const he=P(q),we=p(D),Re=[te(we),te(he)];if(Q!=null){const nt=Q===!0?ae(n.BYTES):Q;Re.push(St("extraEntropy",nt,n.BYTES))}const Je=rn(...Re),J=he;function qe(nt){const Te=C(nt);if(!v(Te))return;const Xe=d(Te),rt=h.BASE.multiply(Te).toAffine(),Tt=u(rt.x);if(Tt===En)return;const Ve=u(Xe*u(J+Tt*we));if(Ve===En)return;let Ht=(rt.x===Tt?0:2)|Number(rt.y&ht),Kn=Ve;return ue&&k(Ve)&&(Kn=w(Ve),Ht^=1),new _(Tt,Kn,Ht)}return{seed:Je,k2sig:qe}}const Y={lowS:t.lowS,prehash:!1},Z={lowS:t.lowS,prehash:!1};function X(q,D,ne=Y){const{seed:G,k2sig:ae}=W(q,D,ne);return qg(t.hash.outputLen,t.nByteLength,t.hmac)(G,ae)}h.BASE._setWindowSize(8);function se(q,D,ne,G=Z){const ae=q;if(D=St("msgHash",D),ne=St("publicKey",ne),"strict"in G)throw new Error("options.strict was renamed to lowS");const{lowS:ue,prehash:re}=G;let Q,he;try{if(typeof ae=="string"||ae instanceof Uint8Array)try{Q=_.fromDER(ae)}catch(rt){if(!(rt instanceof hi.Err))throw rt;Q=_.fromCompact(ae)}else if(typeof ae=="object"&&typeof ae.r=="bigint"&&typeof ae.s=="bigint"){const{r:rt,s:Tt}=ae;Q=new _(rt,Tt)}else throw new Error("PARSE");he=h.fromHex(ne)}catch(rt){if(rt.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ue&&Q.hasHighS())return!1;re&&(D=t.hash(D));const{r:we,s:Re}=Q,Je=P(D),J=d(Re),qe=u(Je*J),nt=u(we*J),Te=h.BASE.multiplyAndAddUnsafe(he,qe,nt)?.toAffine();return Te?u(Te.x)===we:!1}return{CURVE:t,getPublicKey:R,getSharedSecret:B,sign:X,verify:se,ProjectivePoint:h,Signature:_,utils:A}}function t7(e,t){const n=e.ORDER;let i=En;for(let v=n-ht;v%or===En;v/=or)i+=ht;const o=i,a=(n-ht)/or**o,c=(a-ht)/or,u=or**o-ht,d=or**(o-ht),h=e.pow(t,a),p=e.pow(t,(a+ht)/or);let g=(v,x)=>{let k=h,w=e.pow(x,u),E=e.sqr(w);E=e.mul(E,x);let _=e.mul(v,E);_=e.pow(_,c),_=e.mul(_,w),w=e.mul(_,x),E=e.mul(_,v);let A=e.mul(E,w);_=e.pow(A,d);let R=e.eql(_,e.ONE);w=e.mul(E,p),_=e.mul(A,k),E=e.cmov(w,E,R),A=e.cmov(_,A,R);for(let T=o;T>ht;T--){let B=or**(T-or),C=e.pow(A,B);const P=e.eql(C,e.ONE);w=e.mul(E,k),k=e.mul(k,k),C=e.mul(A,k),E=e.cmov(w,E,P),A=e.cmov(C,A,P)}return{isValid:R,value:E}};if(e.ORDER%Fp===Ra){const v=(e.ORDER-Ra)/Fp,x=e.sqrt(e.neg(t));g=(k,w)=>{let E=e.sqr(w);const _=e.mul(k,w);E=e.mul(E,_);let A=e.pow(E,v);A=e.mul(A,_);const R=e.mul(A,x),T=e.mul(e.sqr(A),w),B=e.eql(T,k);let C=e.cmov(R,A,B);return{isValid:B,value:C}}}return g}function n7(e,t){if(Wg(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=t7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,c,u,d,h,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),c=e.add(a,e.ONE),c=e.mul(c,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(c),h=e.sqr(u),d=e.mul(h,t.A),a=e.add(a,d),a=e.mul(a,c),h=e.mul(h,u),d=e.mul(h,t.B),a=e.add(a,d),p=e.mul(o,c);const{isValid:v,value:x}=n(a,h);g=e.mul(o,i),g=e.mul(g,x),p=e.cmov(p,c,v),g=e.cmov(g,x,v);const k=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,k),p=e.div(p,u),{x:p,y:g}}}function r7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return hl(e);throw new Error("DST must be Uint8Array or string")}const i7=Nt;function jr(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function s7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function qs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function ad(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function o7(e,t,n,i){qs(e),qs(t),ad(n),t.length>255&&(t=i(rn(hl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,c=Math.ceil(n/o);if(c>255)throw new Error("Invalid xmd length");const u=rn(t,jr(t.length,1)),d=jr(0,a),h=jr(n,2),p=new Array(c),g=i(rn(d,e,h,jr(0,1),u));p[0]=i(rn(g,jr(1,1),u));for(let x=1;x<=c;x++){const k=[s7(g,p[x-1]),jr(x+1,1),u];p[x]=i(rn(...k))}return rn(...p).slice(0,n)}function a7(e,t,n,i,o){if(qs(e),qs(t),ad(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(hl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(jr(n,2)).update(t).update(jr(t.length,1)).digest()}function qp(e,t,n){us(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:c,expand:u,DST:d}=n;qs(e),ad(t);const h=r7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),v=t*a*g;let x;if(u==="xmd")x=o7(e,h,v,c);else if(u==="xof")x=a7(e,h,v,o,c);else if(u==="_internal_pass")x=e;else throw new Error('expand must be "xmd" or "xof"');const k=new Array(t);for(let w=0;w<t;w++){const E=new Array(a);for(let _=0;_<a;_++){const A=g*(_+w*a),R=x.subarray(A,A+g);E[_]=yt(i7(R),i)}k[w]=E}return k}function l7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,c,u,d]=n.map(h=>h.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,c),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function c7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=qp(i,2,{...n,DST:n.DST,...o}),c=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=c.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=qp(i,1,{...n,DST:n.encodeDST,...o}),c=e.fromAffine(t(a[0])).clearCofactor();return c.assertValidity(),c}}}class Kg extends nd{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,di.hash(t);const i=uo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return di.exists(this),this.iHash.update(t),this}digestInto(t){di.exists(this),di.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Oa=(e,t,n)=>new Kg(e,t).update(n).digest();Oa.create=(e,t)=>new Kg(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function u7(e){return{hash:e,hmac:(t,...n)=>Oa(e,t,fi(...n)),randomBytes:ul}}function d7(e,t){const n=i=>e7({...e,...u7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),La=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Vg=BigInt(1),Pa=BigInt(2),Wp=(e,t)=>(e+t/Pa)/t;function Gg(e){const t=pl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),c=BigInt(23),u=BigInt(44),d=BigInt(88),h=e*e*e%t,p=h*h*e%t,g=mn(p,n,t)*p%t,v=mn(g,n,t)*p%t,x=mn(v,Pa,t)*h%t,k=mn(x,o,t)*x%t,w=mn(k,a,t)*k%t,E=mn(w,u,t)*w%t,_=mn(E,d,t)*E%t,A=mn(_,u,t)*w%t,R=mn(A,n,t)*p%t,T=mn(R,c,t)*k%t,B=mn(T,i,t)*h%t,C=mn(B,Pa,t);if(!Wr.eql(Wr.sqr(C),e))throw new Error("Cannot find square root");return C}const Wr=W6(pl,void 0,void 0,{sqrt:Gg}),Ut=d7({a:BigInt(0),b:BigInt(7),Fp:Wr,n:La,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=La,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Vg*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,c=BigInt("0x100000000000000000000000000000000"),u=Wp(a*e,t),d=Wp(-i*e,t);let h=yt(e-u*n-d*o,t),p=yt(-u*i-d*a,t);const g=h>c,v=p>c;if(g&&(h=t-h),v&&(p=t-p),h>c||p>c)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:h,k2neg:v,k2:p}}}},Nn),gl=BigInt(0),Qg=e=>typeof e=="bigint"&&gl<e&&e<pl,f7=e=>typeof e=="bigint"&&gl<e&&e<La,Zp={};function Ma(e,...t){let n=Zp[e];if(n===void 0){const i=Nn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=rn(i,i),Zp[e]=n}return Nn(rn(n,...t))}const ld=e=>e.toRawBytes(!0).slice(1),xu=e=>Hr(e,32),tu=e=>yt(e,pl),Ws=e=>yt(e,La),cd=Ut.ProjectivePoint,h7=(e,t,n)=>cd.BASE.multiplyAndAddUnsafe(e,t,n);function $u(e){let t=Ut.utils.normPrivateKeyToScalar(e),n=cd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Ws(-t),bytes:ld(n)}}function Yg(e){if(!Qg(e))throw new Error("bad x: need 0 < x < p");const t=tu(e*e),n=tu(t*e+BigInt(7));let i=Gg(n);i%Pa!==gl&&(i=tu(-i));const o=new cd(e,i,Vg);return o.assertValidity(),o}function Jg(...e){return Ws(Nt(Ma("BIP0340/challenge",...e)))}function p7(e){return $u(e).bytes}function g7(e,t,n=ul(32)){const i=St("message",e),{bytes:o,scalar:a}=$u(t),c=St("auxRand",n,32),u=xu(a^Nt(Ma("BIP0340/aux",c))),d=Ma("BIP0340/nonce",u,o,i),h=Ws(Nt(d));if(h===gl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=$u(h),v=Jg(p,o,i),x=new Uint8Array(64);if(x.set(p,0),x.set(xu(Ws(g+v*a)),32),!Xg(x,i,o))throw new Error("sign: Invalid signature produced");return x}function Xg(e,t,n){const i=St("signature",e,64),o=St("message",t),a=St("publicKey",n,32);try{const c=Yg(Nt(a)),u=Nt(i.subarray(0,32));if(!Qg(u))return!1;const d=Nt(i.subarray(32,64));if(!f7(d))return!1;const h=Jg(xu(u),ld(c),o),p=h7(c,d,Ws(-h));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const fo={getPublicKey:p7,sign:g7,verify:Xg,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:Yg,pointToBytes:ld,numberToBytesBE:Hr,bytesToNumberBE:Nt,taggedHash:Ma,mod:yt}},m7=l7(Wr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),v7=n7(Wr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Wr.create(BigInt("-11"))});c7(Ut.ProjectivePoint,e=>{const{x:t,y:n}=v7(Wr.create(e[0]));return m7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Wr.ORDER,m:1,k:128,expand:"xmd",hash:Nn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Gr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function On(...e){const t=(o,a)=>c=>o(a(c)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function qn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Gr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Wn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function ho(e,t="="){if(Gr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function e1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Kp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Gr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=i;d<a.length;d++){const h=a[d],p=t*c+h;if(!Number.isSafeInteger(p)||t*c/t!==c||p-h!==t*c)throw new Error("convertRadix: carry overflow");if(c=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+c!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const t1=(e,t)=>t?t1(t,e%t):e,Ba=(e,t)=>e+(t-t1(e,t));function ku(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ba(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Ba(t,n)}`);let o=0,a=0;const c=2**n-1,u=[];for(const d of e){if(Gr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&c)>>>0);o&=2**a-1}if(o=o<<n-a&c,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function n1(e){return Gr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Kp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Kp(t,e,2**8))}}}function br(e,t=!1){if(Gr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Ba(8,e)>32||Ba(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return ku(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(ku(n,e,8,t))}}}function Vp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function r1(e,t){if(Gr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return i}}}const b7={alphabet:qn,chain:On,checksum:r1,radix:n1,radix2:br,join:Wn,padding:ho},i1=On(br(4),qn("0123456789ABCDEF"),Wn("")),s1=On(br(5),qn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),ho(5),Wn("")),y7=On(br(5),qn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),ho(5),Wn("")),_7=On(br(5),qn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Wn(""),e1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Qi=On(br(6),qn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),ho(6),Wn("")),o1=On(br(6),qn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),ho(6),Wn("")),ud=e=>On(n1(58),qn(e),Wn("")),Zs=ud("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),w7=ud("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),x7=ud("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Gp=[0,2,3,5,6,7,9,10,11],a1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Zs.encode(i).padStart(Gp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Gp.indexOf(i.length),a=Zs.decode(i);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},l1=e=>On(r1(4,t=>e(e(t))),Zs),Eu=On(qn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Wn("")),Qp=[996825010,642813549,513874426,1027748829,705979059];function js(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Qp.length;i++)(t>>i&1)===1&&(n^=Qp[i]);return n}function Yp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=js(o)^c>>5}o=js(o);for(let a=0;a<i;a++)o=js(o)^e.charCodeAt(a)&31;for(let a of t)o=js(o)^a;for(let a=0;a<6;a++)o=js(o);return o^=n,Eu.encode(ku([o%2**30],30,5,!1))}function c1(e){const t=e==="bech32"?1:734539939,n=br(5),i=n.decode,o=n.encode,a=Vp(i);function c(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const x=p.length+7+g.length;if(v!==!1&&x>v)throw new TypeError(`Length ${x} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${Eu.encode(g)}${Yp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const x=p.lastIndexOf("1");if(x===0||x===-1)throw new Error('Letter "1" must be present between prefix and data only');const k=p.slice(0,x),w=p.slice(x+1);if(w.length<6)throw new Error("Data must be at least 6 characters long");const E=Eu.decode(w).slice(0,-6),_=Yp(k,E,t);if(!w.endsWith(_))throw new Error(`Invalid checksum in ${p}: expected "${_}"`);return{prefix:k,words:E}}const d=Vp(u);function h(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:c,decode:u,decodeToBytes:h,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Dt=c1("bech32"),$7=c1("bech32m"),u1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},d1=On(br(4),qn("0123456789abcdef"),Wn(""),e1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Ks={utf8:u1,hex:d1,base16:i1,base32:s1,base64:Qi,base64url:o1,base58:Zs,base58xmr:a1},f1=`Invalid encoding type. Available types: ${Object.keys(Ks).join(", ")}`,h1=(e,t)=>{if(typeof e!="string"||!Ks.hasOwnProperty(e))throw new TypeError(f1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Ks[e].encode(t)},k7=h1,p1=(e,t)=>{if(!Ks.hasOwnProperty(e))throw new TypeError(f1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Ks[e].decode(t)},E7=p1,C7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Gr,base16:i1,base32:s1,base32crockford:_7,base32hex:y7,base58:Zs,base58check:l1,base58flickr:w7,base58xmr:a1,base58xrp:x7,base64:Qi,base64url:o1,bech32:Dt,bech32m:$7,bytes:E7,bytesToString:h1,hex:d1,str:k7,stringToBytes:p1,utf8:u1,utils:b7},Symbol.toStringTag,{value:"Module"}));var dd={};Object.defineProperty(dd,"__esModule",{value:!0});var fd=dd.wordlist=void 0;fd=dd.wordlist=`abandon
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
`);var sn={},xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.output=xt.exists=xt.hash=Hi=xt.bytes=xt.bool=xt.number=void 0;function ja(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}xt.number=ja;function g1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}xt.bool=g1;function hd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Hi=xt.bytes=hd;function m1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ja(e.outputLen),ja(e.blockLen)}xt.hash=m1;function v1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}xt.exists=v1;function b1(e,t){hd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}xt.output=b1;const S7={number:ja,bool:g1,bytes:hd,hash:m1,exists:v1,output:b1};xt.default=S7;var Yi={},y1={},po={};const T7=il(h6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=T7,n=T=>new Uint8Array(T.buffer,T.byteOffset,T.byteLength);e.u8=n;const i=T=>new Uint32Array(T.buffer,T.byteOffset,Math.floor(T.byteLength/4));e.u32=i;const o=T=>new DataView(T.buffer,T.byteOffset,T.byteLength);e.createView=o;const a=(T,B)=>T<<32-B|T>>>B;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(T,B)=>B.toString(16).padStart(2,"0"));function u(T){if(!(T instanceof Uint8Array))throw new Error("Uint8Array expected");let B="";for(let C=0;C<T.length;C++)B+=c[T[C]];return B}e.bytesToHex=u;function d(T){if(typeof T!="string")throw new TypeError("hexToBytes: expected string, got "+typeof T);if(T.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const B=new Uint8Array(T.length/2);for(let C=0;C<B.length;C++){const P=C*2,U=T.slice(P,P+2),te=Number.parseInt(U,16);if(Number.isNaN(te)||te<0)throw new Error("Invalid byte sequence");B[C]=te}return B}e.hexToBytes=d;const h=async()=>{};e.nextTick=h;async function p(T,B,C){let P=Date.now();for(let U=0;U<T;U++){C(U);const te=Date.now()-P;te>=0&&te<B||(await(0,e.nextTick)(),P+=te)}}e.asyncLoop=p;function g(T){if(typeof T!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof T}`);return new TextEncoder().encode(T)}e.utf8ToBytes=g;function v(T){if(typeof T=="string"&&(T=g(T)),!(T instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof T})`);return T}e.toBytes=v;function x(...T){if(!T.every(P=>P instanceof Uint8Array))throw new Error("Uint8Array list expected");if(T.length===1)return T[0];const B=T.reduce((P,U)=>P+U.length,0),C=new Uint8Array(B);for(let P=0,U=0;P<T.length;P++){const te=T[P];C.set(te,U),U+=te.length}return C}e.concatBytes=x;class k{clone(){return this._cloneInto()}}e.Hash=k;const w=T=>Object.prototype.toString.call(T)==="[object Object]"&&T.constructor===Object;function E(T,B){if(B!==void 0&&(typeof B!="object"||!w(B)))throw new TypeError("Options should be object or undefined");return Object.assign(T,B)}e.checkOpts=E;function _(T){const B=P=>T().update(v(P)).digest(),C=T();return B.outputLen=C.outputLen,B.blockLen=C.blockLen,B.create=()=>T(),B}e.wrapConstructor=_;function A(T){const B=(P,U)=>T(U).update(v(P)).digest(),C=T({});return B.outputLen=C.outputLen,B.blockLen=C.blockLen,B.create=P=>T(P),B}e.wrapConstructorWithOpts=A;function R(T=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(T));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=R})(po);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=xt,n=po;class i extends n.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,n.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const h=this.blockLen,p=new Uint8Array(h);p.set(d.length>h?c.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=c.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:h,destroyed:p,blockLen:g,outputLen:v}=this;return c=c,c.finished=h,c.destroyed=p,c.blockLen=g,c.outputLen=v,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new i(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new i(a,c)})(y1);Object.defineProperty(Yi,"__esModule",{value:!0});Yi.pbkdf2Async=Yi.pbkdf2=void 0;const ua=xt,A7=y1,qi=po;function _1(e,t,n,i){ua.default.hash(e);const o=(0,qi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:c,asyncTick:u}=o;if(ua.default.number(a),ua.default.number(c),ua.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,qi.toBytes)(t),h=(0,qi.toBytes)(n),p=new Uint8Array(c),g=A7.hmac.create(e,d),v=g._cloneInto().update(h);return{c:a,dkLen:c,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function w1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function I7(e,t,n,i){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=_1(e,t,n,i);let h;const p=new Uint8Array(4),g=(0,qi.createView)(p),v=new Uint8Array(u.outputLen);for(let x=1,k=0;k<a;x++,k+=u.outputLen){const w=c.subarray(k,k+u.outputLen);g.setInt32(0,x,!1),(h=d._cloneInto(h)).update(p).digestInto(v),w.set(v.subarray(0,w.length));for(let E=1;E<o;E++){u._cloneInto(h).update(v).digestInto(v);for(let _=0;_<w.length;_++)w[_]^=v[_]}}return w1(u,d,c,h,v)}Yi.pbkdf2=I7;async function R7(e,t,n,i){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:h}=_1(e,t,n,i);let p;const g=new Uint8Array(4),v=(0,qi.createView)(g),x=new Uint8Array(d.outputLen);for(let k=1,w=0;w<a;k++,w+=d.outputLen){const E=u.subarray(w,w+d.outputLen);v.setInt32(0,k,!1),(p=h._cloneInto(p)).update(g).digestInto(x),E.set(x.subarray(0,E.length)),await(0,qi.asyncLoop)(o-1,c,_=>{d._cloneInto(p).update(x).digestInto(x);for(let A=0;A<E.length;A++)E[A]^=x[A]})}return w1(d,h,u,p,x)}Yi.pbkdf2Async=R7;const O7=il(T6);var vn={},ml={};Object.defineProperty(ml,"__esModule",{value:!0});ml.SHA2=void 0;const nu=xt,Us=po;function L7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+h,u,i)}class P7 extends Us.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Us.createView)(this.buffer)}update(t){nu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Us.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,Us.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){nu.default.exists(this),nu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let g=c;g<o;g++)n[g]=0;L7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Us.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}}ml.SHA2=P7;var x1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(W,Y=!1){return Y?{h:Number(W&t),l:Number(W>>n&t)}:{h:Number(W>>n&t)|0,l:Number(W&t)|0}}e.fromBig=i;function o(W,Y=!1){let Z=new Uint32Array(W.length),X=new Uint32Array(W.length);for(let se=0;se<W.length;se++){const{h:q,l:D}=i(W[se],Y);[Z[se],X[se]]=[q,D]}return[Z,X]}e.split=o;const a=(W,Y)=>BigInt(W>>>0)<<n|BigInt(Y>>>0);e.toBig=a;const c=(W,Y,Z)=>W>>>Z,u=(W,Y,Z)=>W<<32-Z|Y>>>Z,d=(W,Y,Z)=>W>>>Z|Y<<32-Z,h=(W,Y,Z)=>W<<32-Z|Y>>>Z,p=(W,Y,Z)=>W<<64-Z|Y>>>Z-32,g=(W,Y,Z)=>W>>>Z-32|Y<<64-Z,v=(W,Y)=>Y,x=(W,Y)=>W,k=(W,Y,Z)=>W<<Z|Y>>>32-Z,w=(W,Y,Z)=>Y<<Z|W>>>32-Z,E=(W,Y,Z)=>Y<<Z-32|W>>>64-Z,_=(W,Y,Z)=>W<<Z-32|Y>>>64-Z;function A(W,Y,Z,X){const se=(Y>>>0)+(X>>>0);return{h:W+Z+(se/2**32|0)|0,l:se|0}}e.add=A;const R=(W,Y,Z)=>(W>>>0)+(Y>>>0)+(Z>>>0),T=(W,Y,Z,X)=>Y+Z+X+(W/2**32|0)|0,B=(W,Y,Z,X)=>(W>>>0)+(Y>>>0)+(Z>>>0)+(X>>>0),C=(W,Y,Z,X,se)=>Y+Z+X+se+(W/2**32|0)|0,P=(W,Y,Z,X,se)=>(W>>>0)+(Y>>>0)+(Z>>>0)+(X>>>0)+(se>>>0),U=(W,Y,Z,X,se,q)=>Y+Z+X+se+q+(W/2**32|0)|0,te={fromBig:i,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:h,rotrBH:p,rotrBL:g,rotr32H:v,rotr32L:x,rotlSH:k,rotlSL:w,rotlBH:E,rotlBL:_,add:A,add3L:R,add3H:T,add4L:B,add4H:C,add5H:U,add5L:P};e.default=te})(x1);Object.defineProperty(vn,"__esModule",{value:!0});vn.sha384=vn.sha512_256=vn.sha512_224=Cu=vn.sha512=vn.SHA512=void 0;const M7=ml,Ie=x1,vl=po,[B7,j7]=Ie.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Mr=new Uint32Array(80),Br=new Uint32Array(80);class go extends M7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:h,El:p,Fh:g,Fl:v,Gh:x,Gl:k,Hh:w,Hl:E}=this;return[t,n,i,o,a,c,u,d,h,p,g,v,x,k,w,E]}set(t,n,i,o,a,c,u,d,h,p,g,v,x,k,w,E){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=h|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=x|0,this.Gl=k|0,this.Hh=w|0,this.Hl=E|0}process(t,n){for(let R=0;R<16;R++,n+=4)Mr[R]=t.getUint32(n),Br[R]=t.getUint32(n+=4);for(let R=16;R<80;R++){const T=Mr[R-15]|0,B=Br[R-15]|0,C=Ie.default.rotrSH(T,B,1)^Ie.default.rotrSH(T,B,8)^Ie.default.shrSH(T,B,7),P=Ie.default.rotrSL(T,B,1)^Ie.default.rotrSL(T,B,8)^Ie.default.shrSL(T,B,7),U=Mr[R-2]|0,te=Br[R-2]|0,W=Ie.default.rotrSH(U,te,19)^Ie.default.rotrBH(U,te,61)^Ie.default.shrSH(U,te,6),Y=Ie.default.rotrSL(U,te,19)^Ie.default.rotrBL(U,te,61)^Ie.default.shrSL(U,te,6),Z=Ie.default.add4L(P,Y,Br[R-7],Br[R-16]),X=Ie.default.add4H(Z,C,W,Mr[R-7],Mr[R-16]);Mr[R]=X|0,Br[R]=Z|0}let{Ah:i,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:h,Dl:p,Eh:g,El:v,Fh:x,Fl:k,Gh:w,Gl:E,Hh:_,Hl:A}=this;for(let R=0;R<80;R++){const T=Ie.default.rotrSH(g,v,14)^Ie.default.rotrSH(g,v,18)^Ie.default.rotrBH(g,v,41),B=Ie.default.rotrSL(g,v,14)^Ie.default.rotrSL(g,v,18)^Ie.default.rotrBL(g,v,41),C=g&x^~g&w,P=v&k^~v&E,U=Ie.default.add5L(A,B,P,j7[R],Br[R]),te=Ie.default.add5H(U,_,T,C,B7[R],Mr[R]),W=U|0,Y=Ie.default.rotrSH(i,o,28)^Ie.default.rotrBH(i,o,34)^Ie.default.rotrBH(i,o,39),Z=Ie.default.rotrSL(i,o,28)^Ie.default.rotrBL(i,o,34)^Ie.default.rotrBL(i,o,39),X=i&a^i&u^a&u,se=o&c^o&d^c&d;_=w|0,A=E|0,w=x|0,E=k|0,x=g|0,k=v|0,{h:g,l:v}=Ie.default.add(h|0,p|0,te|0,W|0),h=u|0,p=d|0,u=a|0,d=c|0,a=i|0,c=o|0;const q=Ie.default.add3L(W,Z,se);i=Ie.default.add3H(q,te,Y,X),o=q|0}({h:i,l:o}=Ie.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l:c}=Ie.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=Ie.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h,l:p}=Ie.default.add(this.Dh|0,this.Dl|0,h|0,p|0),{h:g,l:v}=Ie.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:x,l:k}=Ie.default.add(this.Fh|0,this.Fl|0,x|0,k|0),{h:w,l:E}=Ie.default.add(this.Gh|0,this.Gl|0,w|0,E|0),{h:_,l:A}=Ie.default.add(this.Hh|0,this.Hl|0,_|0,A|0),this.set(i,o,a,c,u,d,h,p,g,v,x,k,w,E,_,A)}roundClean(){Mr.fill(0),Br.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}vn.SHA512=go;class U7 extends go{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class N7 extends go{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class D7 extends go{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Cu=vn.sha512=(0,vl.wrapConstructor)(()=>new go);vn.sha512_224=(0,vl.wrapConstructor)(()=>new U7);vn.sha512_256=(0,vl.wrapConstructor)(()=>new N7);vn.sha384=(0,vl.wrapConstructor)(()=>new D7);const z7=il(w6),H7=il(C7);Object.defineProperty(sn,"__esModule",{value:!0});var $1=sn.mnemonicToSeedSync=sn.mnemonicToSeed=L1=sn.validateMnemonic=sn.entropyToMnemonic=sn.mnemonicToEntropy=A1=sn.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const k1=xt,E1=Yi,F7=O7,C1=vn,q7=z7,da=H7,W7=e=>e[0]==="あいこくしん";function S1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function pd(e){const t=S1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function T1(e){k1.default.bytes(e,16,20,24,28,32)}function Z7(e,t=128){if(k1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return O1((0,q7.randomBytes)(t/8),e)}var A1=sn.generateMnemonic=Z7;const K7=e=>{const t=8-e.length/4;return new Uint8Array([(0,F7.sha256)(e)[0]>>t<<t])};function I1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),da.utils.chain(da.utils.checksum(1,K7),da.utils.radix2(11,!0),da.utils.alphabet(e))}function R1(e,t){const{words:n}=pd(e),i=I1(t).decode(n);return T1(i),i}sn.mnemonicToEntropy=R1;function O1(e,t){return T1(e),I1(t).encode(e).join(W7(t)?"　":" ")}sn.entropyToMnemonic=O1;function V7(e,t){try{R1(e,t)}catch{return!1}return!0}var L1=sn.validateMnemonic=V7;const P1=e=>S1(`mnemonic${e}`);function G7(e,t=""){return(0,E1.pbkdf2Async)(C1.sha512,pd(e).nfkd,P1(t),{c:2048,dkLen:64})}sn.mnemonicToSeed=G7;function Q7(e,t=""){return(0,E1.pbkdf2)(C1.sha512,pd(e).nfkd,P1(t),{c:2048,dkLen:64})}$1=sn.mnemonicToSeedSync=Q7;const Y7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),M1=Uint8Array.from({length:16},(e,t)=>t),J7=M1.map(e=>(9*e+5)%16);let gd=[M1],md=[J7];for(let e=0;e<4;e++)for(let t of[gd,md])t.push(t[e].map(n=>Y7[n]));const B1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),X7=gd.map((e,t)=>e.map(n=>B1[t][n])),e9=md.map((e,t)=>e.map(n=>B1[t][n])),t9=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),n9=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),fa=(e,t)=>e<<t|e>>>32-t;function Jp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ha=new Uint32Array(16);class r9 extends Ng{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let x=0;x<16;x++,n+=4)ha[x]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,c=a,u=this.h2|0,d=u,h=this.h3|0,p=h,g=this.h4|0,v=g;for(let x=0;x<5;x++){const k=4-x,w=t9[x],E=n9[x],_=gd[x],A=md[x],R=X7[x],T=e9[x];for(let B=0;B<16;B++){const C=fa(i+Jp(x,a,u,h)+ha[_[B]]+w,R[B])+g|0;i=g,g=h,h=fa(u,10)|0,u=a,a=C}for(let B=0;B<16;B++){const C=fa(o+Jp(k,c,d,p)+ha[A[B]]+E,T[B])+v|0;o=v,v=p,p=fa(d,10)|0,d=c,c=C}}this.set(this.h1+u+p|0,this.h2+h+v|0,this.h3+g+o|0,this.h4+i+c|0,this.h0+a+d|0)}roundClean(){ha.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const i9=cl(()=>new r9),pa=Ut.ProjectivePoint,ru=l1(Nn);function Xp(e){return BigInt(`0x${nn(e)}`)}function s9(e){return qr(e.toString(16).padStart(64,"0"))}const o9=td("Bitcoin seed"),iu={private:76066276,public:76067358},su=2147483648,a9=e=>i9(Nn(e)),l9=e=>gi(e).getUint32(0,!1),ga=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return l9(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return ru.encode(this.serialize(this.versions.private,fi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return ru.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=iu){if(Hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Oa(Cu,o9,t);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=iu){const i=ru.decode(t),o=gi(i),a=o.getUint32(0,!1),c={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...c,privateKey:u.slice(1)}):new ui({...c,publicKey:u})}static fromJSON(t){return ui.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||iu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ut.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Xp(t.privateKey),this.privKeyBytes=s9(this.privKey),this.pubKey=Ut.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=pa.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=a9(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=su)throw new Error("Invalid index");a[2]==="'"&&(c+=su),i=i.deriveChild(c)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ga(t);if(t>=su){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=fi(new Uint8Array([0]),u,n)}else n=fi(this.pubKey,n);const i=Oa(Cu,this.chainCode,n),o=Xp(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=yt(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=pa.fromHex(this.pubKey).add(pa.fromPrivateKey(o));if(u.equals(pa.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new ui(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Hi(t,32),Ut.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Hi(t,32),Hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Hi(n,33),fi(ga(t),new Uint8Array([this.depth]),ga(this.parentFingerprint),ga(this.index),this.chainCode,n)}}var c9=Object.defineProperty,Pt=(e,t)=>{for(var n in t)c9(e,n,{get:t[n],enumerable:!0})};function j1(e){return nn(fo.getPublicKey(e))}var u9={};Pt(u9,{MessageNode:()=>U1,MessageQueue:()=>N1,insertEventIntoAscendingList:()=>f9,insertEventIntoDescendingList:()=>d9,normalizeURL:()=>Su,utf8Decoder:()=>Ur,utf8Encoder:()=>Dn});var Ur=new TextDecoder("utf-8"),Dn=new TextEncoder;function Su(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function d9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function f9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var U1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},N1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new U1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},lt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(lt||{});function D1(e,t){let n=e;return n.pubkey=j1(t),n.id=bl(n),n.sig=g9(n,t),n}function h9(e){if(!vd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function bl(e){let t=Nn(Dn.encode(h9(e)));return nn(t)}var p9=e=>e instanceof Object;function vd(e){if(!p9(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function bd(e){try{return fo.verify(e.sig,bl(e),e.pubkey)}catch{return!1}}function g9(e,t){return nn(fo.sign(bl(e),t))}function m9(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,c])=>a===n.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function v9(e,t){for(let n=0;n<e.length;n++)if(m9(e[n],t))return!0;return!1}var b9={};Pt(b9,{getHex64:()=>yl,getInt:()=>z1,getSubscriptionId:()=>H1,matchEventId:()=>y9,matchEventKind:()=>w9,matchEventPubkey:()=>_9});function yl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function z1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function H1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function y9(e,t){return t===yl(e,"id")}function _9(e,t){return t===yl(e,"pubkey")}function w9(e,t){return t===z1(e,"kind")}var e0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function x9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,c={},u=e0(),d={},h={},p;async function g(){return p||(p=new Promise((_,A)=>{try{a=new WebSocket(e)}catch(C){A(C)}a.onopen=()=>{u.connect.forEach(C=>C()),_()},a.onerror=()=>{p=void 0,u.error.forEach(C=>C()),A()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(C=>C())};let R=new N1,T;a.onmessage=C=>{R.enqueue(C.data),T||(T=setInterval(B,0))};function B(){if(R.size===0){clearInterval(T),T=null;return}var C=R.dequeue();if(!C)return;let P=H1(C);if(P){let U=c[P];if(U&&U.alreadyHaveEvent&&U.alreadyHaveEvent(yl(C,"id"),e))return}try{let U=JSON.parse(C);switch(U[0]){case"EVENT":{let Z=U[1],X=U[2];vd(X)&&c[Z]&&(c[Z].skipVerification||bd(X))&&v9(c[Z].filters,X)&&(c[Z],(d[Z]?.event||[]).forEach(se=>se(X)));return}case"COUNT":let te=U[1],W=U[2];c[te]&&(d[te]?.count||[]).forEach(Z=>Z(W));return;case"EOSE":{let Z=U[1];Z in d&&(d[Z].eose.forEach(X=>X()),d[Z].eose=[]);return}case"OK":{let Z=U[1],X=U[2],se=U[3]||"";Z in h&&(X?h[Z].ok.forEach(q=>q()):h[Z].failed.forEach(q=>q(se)),h[Z].ok=[],h[Z].failed=[]);return}case"NOTICE":let Y=U[1];u.notice.forEach(Z=>Z(Y));return;case"AUTH":{let Z=U[1];u.auth?.forEach(X=>X(Z));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function x(){v()||await g()}async function k(_){let A=JSON.stringify(_);if(!(!v()&&(await new Promise(R=>setTimeout(R,1e3)),!v())))try{a.send(A)}catch(R){console.log(R)}}const w=(_,{verb:A="REQ",skipVerification:R=!1,alreadyHaveEvent:T=null,id:B=Math.random().toString().slice(2)}={})=>{let C=B;return c[C]={id:C,filters:_,skipVerification:R,alreadyHaveEvent:T},k([A,C,..._]),{sub:(P,U={})=>w(P||_,{skipVerification:U.skipVerification||R,alreadyHaveEvent:U.alreadyHaveEvent||T,id:C}),unsub:()=>{delete c[C],delete d[C],k(["CLOSE",C])},on:(P,U)=>{d[C]=d[C]||{event:[],count:[],eose:[]},d[C][P].push(U)},off:(P,U)=>{let te=d[C],W=te[P].indexOf(U);W>=0&&te[P].splice(W,1)}}};function E(_,A){if(!_.id)throw new Error(`event ${_} has no id`);let R=_.id;return k([A,_]),{on:(T,B)=>{h[R]=h[R]||{ok:[],failed:[]},h[R][T].push(B)},off:(T,B)=>{let C=h[R];if(!C)return;let P=C[T].indexOf(B);P>=0&&C[T].splice(P,1)}}}return{url:e,sub:w,on:(_,A)=>{u[_].push(A),_==="connect"&&a?.readyState===1&&A()},off:(_,A)=>{let R=u[_].indexOf(A);R!==-1&&u[_].splice(R,1)},list:(_,A)=>new Promise(R=>{let T=w(_,A),B=[],C=setTimeout(()=>{T.unsub(),R(B)},n);T.on("eose",()=>{T.unsub(),clearTimeout(C),R(B)}),T.on("event",P=>{B.push(P)})}),get:(_,A)=>new Promise(R=>{let T=w([_],A),B=setTimeout(()=>{T.unsub(),R(null)},i);T.on("event",C=>{T.unsub(),clearTimeout(B),R(C)})}),count:_=>new Promise(A=>{let R=w(_,{...w,verb:"COUNT"}),T=setTimeout(()=>{R.unsub(),A(null)},o);R.on("count",B=>{R.unsub(),clearTimeout(T),A(B)})}),publish(_){return E(_,"EVENT")},auth(_){return E(_,"AUTH")},connect:x,close(){u=e0(),d={},h={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var $9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Su(t)];n&&n.close()})}async ensureRelay(e){const t=Su(e);this._conn[t]||(this._conn[t]=x9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,x)=>{if(n?.alreadyHaveEvent?.(v,x))return!0;let k=this._seenOn[v]||new Set;return k.add(x),this._seenOn[v]=k,i.has(v)};let a=[],c=new Set,u=new Set,d=e.length,h=!1,p=setTimeout(()=>{h=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let x;try{x=await this.ensureRelay(v)}catch{w();return}if(!x)return;let k=x.sub(t,o);k.on("event",E=>{i.add(E.id);for(let _ of c.values())_(E)}),k.on("eose",()=>{h||w()}),a.push(k);function w(){if(d--,d===0){clearTimeout(p);for(let E of u.values())E()}}});let g={sub(v,x){return a.forEach(k=>k.sub(v,x)),g},unsub(){a.forEach(v=>v.unsub())},on(v,x){v==="event"?c.add(x):v==="eose"&&u.add(x)},off(v,x){v==="event"?c.delete(x):v==="eose"&&u.delete(x)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",c=>{i(c),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await n[u],h=()=>a(c);i.set(a,h),d.on(o,h)})},off(o,a){e.forEach(async(c,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},mo={};Pt(mo,{BECH32_REGEX:()=>F1,decode:()=>_l,naddrEncode:()=>A9,neventEncode:()=>T9,noteEncode:()=>C9,nprofileEncode:()=>S9,npubEncode:()=>E9,nrelayEncode:()=>I9,nsecEncode:()=>k9});var ds=5e3,F1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function _l(e){let{prefix:t,words:n}=Dt.decode(e,ds),i=new Uint8Array(Dt.fromWords(n));switch(t){case"nprofile":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:nn(o[0][0]),relays:o[1]?o[1].map(a=>Ur.decode(a)):[]}}}case"nevent":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:nn(o[0][0]),relays:o[1]?o[1].map(a=>Ur.decode(a)):[],author:o[2]?.[0]?nn(o[2][0]):void 0}}}case"naddr":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Ur.decode(o[0][0]),pubkey:nn(o[2][0]),kind:parseInt(nn(o[3][0]),16),relays:o[1]?o[1].map(a=>Ur.decode(a)):[]}}}case"nrelay":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Ur.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:nn(i)};default:throw new Error(`unknown prefix ${t}`)}}function ma(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function k9(e){return yd("nsec",e)}function E9(e){return yd("npub",e)}function C9(e){return yd("note",e)}function yd(e,t){let n=qr(t),i=Dt.toWords(n);return Dt.encode(e,i,ds)}function S9(e){let t=wl({0:[qr(e.pubkey)],1:(e.relays||[]).map(i=>Dn.encode(i))}),n=Dt.toWords(t);return Dt.encode("nprofile",n,ds)}function T9(e){let t=wl({0:[qr(e.id)],1:(e.relays||[]).map(i=>Dn.encode(i)),2:e.author?[qr(e.author)]:[]}),n=Dt.toWords(t);return Dt.encode("nevent",n,ds)}function A9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=wl({0:[Dn.encode(e.identifier)],1:(e.relays||[]).map(o=>Dn.encode(o)),2:[qr(e.pubkey)],3:[new Uint8Array(t)]}),i=Dt.toWords(n);return Dt.encode("naddr",i,ds)}function I9(e){let t=wl({0:[Dn.encode(e)]}),n=Dt.toWords(t);return Dt.encode("nrelay",n,ds)}function wl(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),fi(...t)}var R9={};Pt(R9,{decrypt:()=>L9,encrypt:()=>O9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function O9(e,t,n){const i=Ut.getSharedSecret(e,"02"+t),o=q1(i);let a=Uint8Array.from(ul(16)),c=Dn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),h=Qi.encode(new Uint8Array(d)),p=Qi.encode(new Uint8Array(a.buffer));return`${h}?iv=${p}`}async function L9(e,t,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(e,"02"+t),c=q1(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=Qi.decode(i),h=Qi.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:h},u,d);return Ur.decode(p)}function q1(e){return e.slice(1,33)}var W1={};Pt(W1,{NIP05_REGEX:()=>Z1,queryProfile:()=>B9,searchDomain:()=>M9,useFetchImplementation:()=>P9});var Z1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,xl;try{xl=fetch}catch{}function P9(e){xl=e}async function M9(e,t=""){try{return(await(await xl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function B9(e){const t=e.match(Z1);if(!t)return null;const[n,i="_",o]=t;try{const a=await xl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:c,relays:u}=j9(await a.json()),d=c[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function j9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var U9={};Pt(U9,{generateSeedWords:()=>D9,privateKeyFromSeedWords:()=>N9,validateWords:()=>z9});function N9(e,t){let i=ui.fromMasterSeed($1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return nn(i)}function D9(){return A1(fd)}function z9(e){return L1(e,fd)}var H9={};Pt(H9,{parse:()=>F9});function F9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,c,u,d]=o,h={id:c,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=h;continue}if(d==="reply"){t.reply=h;continue}if(d==="mention"){t.mentions.push(h);continue}if(p){t.root=h;continue}if(g){t.reply=h;continue}t.mentions.push(h)}return t}var q9={};Pt(q9,{getPow:()=>W9});function W9(e){return Z9(qr(e))}function Z9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=K9(e[n]),t+=i,i===8);n++);return t}function K9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var V9={};Pt(V9,{finishRepostEvent:()=>G9,getRepostedEvent:()=>Q9,getRepostedEventPointer:()=>K1});function G9(e,t,n,i){return D1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function K1(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function Q9(e,{skipVerification:t}={}){const n=K1(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!bd(i)))return i}var Y9={};Pt(Y9,{NOSTR_URI_REGEX:()=>$l,parse:()=>X9,test:()=>J9});var $l=new RegExp(`nostr:(${F1.source})`);function J9(e){return typeof e=="string"&&new RegExp(`^${$l.source}$`).test(e)}function X9(e){const t=e.match(new RegExp(`^${$l.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:_l(t[1])}}var ek={};Pt(ek,{finishReactionEvent:()=>tk,getReactedEventPointer:()=>nk});function tk(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return D1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function nk(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var rk={};Pt(rk,{createDelegation:()=>ik,getDelegator:()=>sk});function ik(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Nn(Dn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=nn(fo.sign(o,e));return{from:j1(e),to:t.pubkey,cond:i,sig:a}}function sk(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,h,p]=a[u].split(/\b/);if(!(d==="kind"&&h==="="&&e.kind===parseInt(p))){if(d==="created_at"&&h==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&h===">"&&e.created_at>parseInt(p))continue;return null}}let c=Nn(Dn.encode(`nostr:delegation:${e.pubkey}:${i}`));return fo.verify(o,c,n)?n:null}var ok={};Pt(ok,{matchAll:()=>ak,regex:()=>_d,replaceAll:()=>lk});var _d=()=>new RegExp(`\\b${$l.source}\\b`,"g");function*ak(e){const t=e.matchAll(_d());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:_l(o),start:n.index,end:n.index+i.length}}}function lk(e,t){return e.replaceAll(_d(),(n,i)=>t({uri:n,value:i,decoded:_l(i)}))}var ck={};Pt(ck,{useFetchImplementation:()=>uk,validateGithub:()=>dk});var wd;try{wd=fetch}catch{}function uk(e){wd=e}async function dk(e,t,n){try{return await(await wd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var fk={};Pt(fk,{authenticate:()=>hk});var hk=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},pk={};Pt(pk,{getZapEndpoint:()=>mk,makeZapReceipt:()=>yk,makeZapRequest:()=>vk,useFetchImplementation:()=>gk,validateZapRequest:()=>bk});var xd;try{xd=fetch}catch{}function gk(e){xd=e}async function mk(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:c}=Dt.decode(n,1e3),u=Dt.fromWords(c);t=Ur.decode(u)}else if(i){let[c,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await xd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function vk({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function bk(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!vd(t))return"Zap request is not a valid Nostr event.";if(!bd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,c])=>a==="p"&&c);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,c])=>a==="e"&&c);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function yk({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&c.tags.push(["preimage",t]),c}const _k=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),V1=(e={})=>(()=>{const t=_k();return Ke(t,e,!0,!0),t})(),wk=j('<button class="text-blue-500 underline">'),{noteEncode:xk,neventEncode:$k}=mo,kk=e=>{try{return xk(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Ek=e=>{try{return $k({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Vs=e=>(()=>{const t=wk();return O(t,$(de,{get when(){return e.kind==null||e.kind===lt.Text},get fallback(){return Ek(e.eventId)},get children(){return kk(e.eventId)}})),t})(),Ck=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],G1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],Sk=[...G1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],Tk=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Ak=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},fs=()=>({id:Ak(),width:"medium"}),Q1=e=>({...fs(),columnType:"Following",...e}),Y1=e=>({...fs(),columnType:"Notification",...e}),Ik=e=>({...fs(),columnType:"Relays",...e}),J1=()=>Ik({name:"日本語",relayUrls:G1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),X1=e=>({...fs(),columnType:"Posts",...e}),em=e=>({...fs(),columnType:"Reactions",...e}),$d=e=>({...fs(),columnType:"Search",...e}),Rk=/^[0-9a-f]{64}$/,Gs=e=>{const t=typeof e=="string"&&e.length===64&&Rk.test(e);return t||console.warn("invalid id is ignored: ",e),t};class tm{constructor(t){this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}findTagsByName(t){return this.rawEvent.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.rawEvent.tags.find(([n])=>n===t)}findLastTagByName(t){return this.rawEvent.tags.findLast(([n])=>n===t)}pTags(){return this.rawEvent.tags.filter(([t,n])=>t==="p"&&Gs(n))}eTags(){return this.rawEvent.tags.filter(([t,n])=>t==="e"&&Gs(n))}taggedPubkeys(){return fr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}var ze;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const c of o)a[c]=c;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),c={};for(const u of a)c[u]=o[u];return e.objectValues(c)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.push(c);return a},e.find=(o,a)=>{for(const c of o)if(a(c))return c},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(c=>typeof c=="string"?`'${c}'`:c).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(ze||(ze={}));var Tu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Tu||(Tu={}));const oe=ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Nr=e=>{switch(typeof e){case"undefined":return oe.undefined;case"string":return oe.string;case"number":return isNaN(e)?oe.nan:oe.number;case"boolean":return oe.boolean;case"function":return oe.function;case"bigint":return oe.bigint;case"symbol":return oe.symbol;case"object":return Array.isArray(e)?oe.array:e===null?oe.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?oe.promise:typeof Map<"u"&&e instanceof Map?oe.map:typeof Set<"u"&&e instanceof Set?oe.set:typeof Date<"u"&&e instanceof Date?oe.date:oe.object;default:return oe.unknown}},ee=ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Ok=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Tn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const c of a.issues)if(c.code==="invalid_union")c.unionErrors.map(o);else if(c.code==="invalid_return_type")o(c.returnTypeError);else if(c.code==="invalid_arguments")o(c.argumentsError);else if(c.path.length===0)i._errors.push(n(c));else{let u=i,d=0;for(;d<c.path.length;){const h=c.path[d];d===c.path.length-1?(u[h]=u[h]||{_errors:[]},u[h]._errors.push(n(c))):u[h]=u[h]||{_errors:[]},u=u[h],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Tn.create=e=>new Tn(e);const Qs=(e,t)=>{let n;switch(e.code){case ee.invalid_type:e.received===oe.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case ee.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,ze.jsonStringifyReplacer)}`;break;case ee.unrecognized_keys:n=`Unrecognized key(s) in object: ${ze.joinValues(e.keys,", ")}`;break;case ee.invalid_union:n="Invalid input";break;case ee.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${ze.joinValues(e.options)}`;break;case ee.invalid_enum_value:n=`Invalid enum value. Expected ${ze.joinValues(e.options)}, received '${e.received}'`;break;case ee.invalid_arguments:n="Invalid function arguments";break;case ee.invalid_return_type:n="Invalid function return type";break;case ee.invalid_date:n="Invalid date";break;case ee.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:ze.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case ee.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case ee.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case ee.custom:n="Invalid input";break;case ee.invalid_intersection_types:n="Intersection results could not be merged";break;case ee.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case ee.not_finite:n="Number must be finite";break;default:n=t.defaultError,ze.assertNever(e)}return{message:n}};let nm=Qs;function Lk(e){nm=e}function Ua(){return nm}const Na=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],c={...o,path:a};let u="";const d=i.filter(h=>!!h).slice().reverse();for(const h of d)u=h(c,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},Pk=[];function ce(e,t){const n=Na({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Ua(),Qs].filter(i=>!!i)});e.common.issues.push(n)}class Lt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return ke;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Lt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:c}=o;if(a.status==="aborted"||c.status==="aborted")return ke;a.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),(typeof c.value<"u"||o.alwaysSet)&&(i[a.value]=c.value)}return{status:t.value,value:i}}}const ke=Object.freeze({status:"aborted"}),rm=e=>({status:"dirty",value:e}),zt=e=>({status:"valid",value:e}),Au=e=>e.status==="aborted",Iu=e=>e.status==="dirty",Da=e=>e.status==="valid",za=e=>typeof Promise<"u"&&e instanceof Promise;var pe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(pe||(pe={}));class zn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const t0=(e,t)=>{if(Da(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Tn(e.common.issues);return this._error=n,this._error}}};function Se(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(c,u)=>c.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Le{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Nr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Lt,ctx:{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(za(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return t0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(za(o)?o:Promise.resolve(o));return t0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const c=t(o),u=()=>a.addIssue({code:ee.custom,...i(o)});return typeof Promise<"u"&&c instanceof Promise?c.then(d=>d?!0:(u(),!1)):c?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new In({schema:this,typeName:_e.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return hr.create(this,this._def)}nullable(){return yi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return An.create(this,this._def)}promise(){return Xi.create(this,this._def)}or(t){return eo.create([this,t],this._def)}and(t){return to.create(this,t,this._def)}transform(t){return new In({...Se(this._def),schema:this,typeName:_e.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new oo({...Se(this._def),innerType:this,defaultValue:n,typeName:_e.ZodDefault})}brand(){return new sm({typeName:_e.ZodBranded,type:this,...Se(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Wa({...Se(this._def),innerType:this,catchValue:n,typeName:_e.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return vo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Mk=/^c[^\s-]{8,}$/i,Bk=/^[a-z][a-z0-9]*$/,jk=/[0-9A-HJKMNP-TV-Z]{26}/,Uk=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Nk=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Dk=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,zk=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Hk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Fk=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function qk(e,t){return!!((t==="v4"||!t)&&zk.test(e)||(t==="v6"||!t)&&Hk.test(e))}class Cn extends Le{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:ee.invalid_string,...pe.errToObj(i)}),this.nonempty=t=>this.min(1,pe.errToObj(t)),this.trim=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Cn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==oe.string){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.string,received:a.parsedType}),ke}const i=new Lt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const c=t.data.length>a.value,u=t.data.length<a.value;(c||u)&&(o=this._getOrReturnCtx(t,o),c?ce(o,{code:ee.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ce(o,{code:ee.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Nk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"email",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Dk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"emoji",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")Uk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"uuid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")Mk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Bk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid2",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")jk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ulid",code:ee.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ce(o,{validation:"url",code:ee.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"regex",code:ee.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Fk(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?qk(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ip",code:ee.invalid_string,message:a.message}),i.dirty()):ze.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Cn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...pe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...pe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...pe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...pe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...pe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...pe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...pe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...pe.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...pe.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...pe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...pe.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...pe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...pe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...pe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...pe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...pe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Cn.create=e=>{var t;return new Cn({checks:[],typeName:_e.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};function Wk(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),c=parseInt(t.toFixed(o).replace(".",""));return a%c/Math.pow(10,o)}class Zr extends Le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==oe.number){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.number,received:a.parsedType}),ke}let i;const o=new Lt;for(const a of this._def.checks)a.kind==="int"?ze.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?Wk(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.not_finite,message:a.message}),o.dirty()):ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,i,o){return new Zr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:pe.toString(o)}]})}_addCheck(t){return new Zr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:pe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:pe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:pe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:pe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&ze.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Zr.create=e=>new Zr({checks:[],typeName:_e.ZodNumber,coerce:e?.coerce||!1,...Se(e)});class Kr extends Le{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==oe.bigint){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.bigint,received:a.parsedType}),ke}let i;const o=new Lt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:ee.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:pe.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Kr.create=e=>{var t;return new Kr({checks:[],typeName:_e.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};class Ys extends Le{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==oe.boolean){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.boolean,received:i.parsedType}),ke}return zt(t.data)}}Ys.create=e=>new Ys({typeName:_e.ZodBoolean,coerce:e?.coerce||!1,...Se(e)});class vi extends Le{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==oe.date){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_type,expected:oe.date,received:a.parsedType}),ke}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ce(a,{code:ee.invalid_date}),ke}const i=new Lt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:ee.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):ze.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:pe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:pe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}vi.create=e=>new vi({checks:[],coerce:e?.coerce||!1,typeName:_e.ZodDate,...Se(e)});class Ha extends Le{_parse(t){if(this._getType(t)!==oe.symbol){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.symbol,received:i.parsedType}),ke}return zt(t.data)}}Ha.create=e=>new Ha({typeName:_e.ZodSymbol,...Se(e)});class Js extends Le{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.undefined,received:i.parsedType}),ke}return zt(t.data)}}Js.create=e=>new Js({typeName:_e.ZodUndefined,...Se(e)});class Xs extends Le{_parse(t){if(this._getType(t)!==oe.null){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.null,received:i.parsedType}),ke}return zt(t.data)}}Xs.create=e=>new Xs({typeName:_e.ZodNull,...Se(e)});class Ji extends Le{constructor(){super(...arguments),this._any=!0}_parse(t){return zt(t.data)}}Ji.create=e=>new Ji({typeName:_e.ZodAny,...Se(e)});class mi extends Le{constructor(){super(...arguments),this._unknown=!0}_parse(t){return zt(t.data)}}mi.create=e=>new mi({typeName:_e.ZodUnknown,...Se(e)});class vr extends Le{_parse(t){const n=this._getOrReturnCtx(t);return ce(n,{code:ee.invalid_type,expected:oe.never,received:n.parsedType}),ke}}vr.create=e=>new vr({typeName:_e.ZodNever,...Se(e)});class Fa extends Le{_parse(t){if(this._getType(t)!==oe.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.void,received:i.parsedType}),ke}return zt(t.data)}}Fa.create=e=>new Fa({typeName:_e.ZodVoid,...Se(e)});class An extends Le{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==oe.array)return ce(n,{code:ee.invalid_type,expected:oe.array,received:n.parsedType}),ke;if(o.exactLength!==null){const c=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(c||u)&&(ce(n,{code:c?ee.too_big:ee.too_small,minimum:u?o.exactLength.value:void 0,maximum:c?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ce(n,{code:ee.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ce(n,{code:ee.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((c,u)=>o.type._parseAsync(new zn(n,c,n.path,u)))).then(c=>Lt.mergeArray(i,c));const a=[...n.data].map((c,u)=>o.type._parseSync(new zn(n,c,n.path,u)));return Lt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new An({...this._def,minLength:{value:t,message:pe.toString(n)}})}max(t,n){return new An({...this._def,maxLength:{value:t,message:pe.toString(n)}})}length(t,n){return new An({...this._def,exactLength:{value:t,message:pe.toString(n)}})}nonempty(t){return this.min(1,t)}}An.create=(e,t)=>new An({type:e,minLength:null,maxLength:null,exactLength:null,typeName:_e.ZodArray,...Se(t)});function Fi(e){if(e instanceof ot){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=hr.create(Fi(i))}return new ot({...e._def,shape:()=>t})}else return e instanceof An?new An({...e._def,type:Fi(e.element)}):e instanceof hr?hr.create(Fi(e.unwrap())):e instanceof yi?yi.create(Fi(e.unwrap())):e instanceof Hn?Hn.create(e.items.map(t=>Fi(t))):e}class ot extends Le{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=ze.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==oe.object){const h=this._getOrReturnCtx(t);return ce(h,{code:ee.invalid_type,expected:oe.object,received:h.parsedType}),ke}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:c}=this._getCached(),u=[];if(!(this._def.catchall instanceof vr&&this._def.unknownKeys==="strip"))for(const h in o.data)c.includes(h)||u.push(h);const d=[];for(const h of c){const p=a[h],g=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new zn(o,g,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof vr){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")u.length>0&&(ce(o,{code:ee.unrecognized_keys,keys:u}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new zn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of d){const g=await p.key;h.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Lt.mergeObjectSync(i,h)):Lt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return pe.errToObj,new ot({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,c,u;const d=(c=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&c!==void 0?c:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=pe.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ot({...this._def,unknownKeys:"strip"})}passthrough(){return new ot({...this._def,unknownKeys:"passthrough"})}extend(t){return new ot({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ot({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:_e.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ot({...this._def,catchall:t})}pick(t){const n={};return ze.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ot({...this._def,shape:()=>n})}omit(t){const n={};return ze.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ot({...this._def,shape:()=>n})}deepPartial(){return Fi(this)}partial(t){const n={};return ze.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ot({...this._def,shape:()=>n})}required(t){const n={};return ze.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof hr;)a=a._def.innerType;n[i]=a}}),new ot({...this._def,shape:()=>n})}keyof(){return im(ze.objectKeys(this.shape))}}ot.create=(e,t)=>new ot({shape:()=>e,unknownKeys:"strip",catchall:vr.create(),typeName:_e.ZodObject,...Se(t)});ot.strictCreate=(e,t)=>new ot({shape:()=>e,unknownKeys:"strict",catchall:vr.create(),typeName:_e.ZodObject,...Se(t)});ot.lazycreate=(e,t)=>new ot({shape:e,unknownKeys:"strip",catchall:vr.create(),typeName:_e.ZodObject,...Se(t)});class eo extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const c=a.map(u=>new Tn(u.ctx.common.issues));return ce(n,{code:ee.invalid_union,unionErrors:c}),ke}if(n.common.async)return Promise.all(i.map(async a=>{const c={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:c}),ctx:c}})).then(o);{let a;const c=[];for(const d of i){const h={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:h}),h.common.issues.length&&c.push(h.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=c.map(d=>new Tn(d));return ce(n,{code:ee.invalid_union,unionErrors:u}),ke}}get options(){return this._def.options}}eo.create=(e,t)=>new eo({options:e,typeName:_e.ZodUnion,...Se(t)});const $a=e=>e instanceof ro?$a(e.schema):e instanceof In?$a(e.innerType()):e instanceof io?[e.value]:e instanceof Vr?e.options:e instanceof so?Object.keys(e.enum):e instanceof oo?$a(e._def.innerType):e instanceof Js?[void 0]:e instanceof Xs?[null]:null;class kl extends Le{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.object)return ce(n,{code:ee.invalid_type,expected:oe.object,received:n.parsedType}),ke;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ce(n,{code:ee.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ke)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const c=$a(a.shape[t]);if(!c)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of c){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new kl({typeName:_e.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Se(i)})}}function Ru(e,t){const n=Nr(e),i=Nr(t);if(e===t)return{valid:!0,data:e};if(n===oe.object&&i===oe.object){const o=ze.objectKeys(t),a=ze.objectKeys(e).filter(u=>o.indexOf(u)!==-1),c={...e,...t};for(const u of a){const d=Ru(e[u],t[u]);if(!d.valid)return{valid:!1};c[u]=d.data}return{valid:!0,data:c}}else if(n===oe.array&&i===oe.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const c=e[a],u=t[a],d=Ru(c,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===oe.date&&i===oe.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class to extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,c)=>{if(Au(a)||Au(c))return ke;const u=Ru(a.value,c.value);return u.valid?((Iu(a)||Iu(c))&&n.dirty(),{status:n.value,value:u.data}):(ce(i,{code:ee.invalid_intersection_types}),ke)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,c])=>o(a,c)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}to.create=(e,t,n)=>new to({left:e,right:t,typeName:_e.ZodIntersection,...Se(n)});class Hn extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.array)return ce(i,{code:ee.invalid_type,expected:oe.array,received:i.parsedType}),ke;if(i.data.length<this._def.items.length)return ce(i,{code:ee.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ke;!this._def.rest&&i.data.length>this._def.items.length&&(ce(i,{code:ee.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((c,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new zn(i,c,i.path,u)):null}).filter(c=>!!c);return i.common.async?Promise.all(a).then(c=>Lt.mergeArray(n,c)):Lt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Hn({...this._def,rest:t})}}Hn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Hn({items:e,typeName:_e.ZodTuple,rest:null,...Se(t)})};class no extends Le{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.object)return ce(i,{code:ee.invalid_type,expected:oe.object,received:i.parsedType}),ke;const o=[],a=this._def.keyType,c=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new zn(i,u,i.path,u)),value:c._parse(new zn(i,i.data[u],i.path,u))});return i.common.async?Lt.mergeObjectAsync(n,o):Lt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Le?new no({keyType:t,valueType:n,typeName:_e.ZodRecord,...Se(i)}):new no({keyType:Cn.create(),valueType:t,typeName:_e.ZodRecord,...Se(n)})}}class qa extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.map)return ce(i,{code:ee.invalid_type,expected:oe.map,received:i.parsedType}),ke;const o=this._def.keyType,a=this._def.valueType,c=[...i.data.entries()].map(([u,d],h)=>({key:o._parse(new zn(i,u,i.path,[h,"key"])),value:a._parse(new zn(i,d,i.path,[h,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of c){const h=await d.key,p=await d.value;if(h.status==="aborted"||p.status==="aborted")return ke;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of c){const h=d.key,p=d.value;if(h.status==="aborted"||p.status==="aborted")return ke;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}}}}qa.create=(e,t,n)=>new qa({valueType:t,keyType:e,typeName:_e.ZodMap,...Se(n)});class bi extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==oe.set)return ce(i,{code:ee.invalid_type,expected:oe.set,received:i.parsedType}),ke;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ce(i,{code:ee.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ce(i,{code:ee.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function c(d){const h=new Set;for(const p of d){if(p.status==="aborted")return ke;p.status==="dirty"&&n.dirty(),h.add(p.value)}return{status:n.value,value:h}}const u=[...i.data.values()].map((d,h)=>a._parse(new zn(i,d,i.path,h)));return i.common.async?Promise.all(u).then(d=>c(d)):c(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:pe.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:pe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:_e.ZodSet,...Se(t)});class Wi extends Le{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.function)return ce(n,{code:ee.invalid_type,expected:oe.function,received:n.parsedType}),ke;function i(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),Qs].filter(h=>!!h),issueData:{code:ee.invalid_arguments,argumentsError:d}})}function o(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),Qs].filter(h=>!!h),issueData:{code:ee.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},c=n.data;return this._def.returns instanceof Xi?zt(async(...u)=>{const d=new Tn([]),h=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),p=await c(...h);return await this._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})}):zt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Tn([i(u,d.error)]);const h=c(...d.data),p=this._def.returns.safeParse(h,a);if(!p.success)throw new Tn([o(h,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Wi({...this._def,args:Hn.create(t).rest(mi.create())})}returns(t){return new Wi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Wi({args:t||Hn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:_e.ZodFunction,...Se(i)})}}class ro extends Le{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}ro.create=(e,t)=>new ro({getter:e,typeName:_e.ZodLazy,...Se(t)});class io extends Le{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ce(n,{received:n.data,code:ee.invalid_literal,expected:this._def.value}),ke}return{status:"valid",value:t.data}}get value(){return this._def.value}}io.create=(e,t)=>new io({value:e,typeName:_e.ZodLiteral,...Se(t)});function im(e,t){return new Vr({values:e,typeName:_e.ZodEnum,...Se(t)})}class Vr extends Le{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{expected:ze.joinValues(i),received:n.parsedType,code:ee.invalid_type}),ke}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{received:n.data,code:ee.invalid_enum_value,options:i}),ke}return zt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Vr.create(t)}exclude(t){return Vr.create(this.options.filter(n=>!t.includes(n)))}}Vr.create=im;class so extends Le{_parse(t){const n=ze.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==oe.string&&i.parsedType!==oe.number){const o=ze.objectValues(n);return ce(i,{expected:ze.joinValues(o),received:i.parsedType,code:ee.invalid_type}),ke}if(n.indexOf(t.data)===-1){const o=ze.objectValues(n);return ce(i,{received:i.data,code:ee.invalid_enum_value,options:o}),ke}return zt(t.data)}get enum(){return this._def.values}}so.create=(e,t)=>new so({values:e,typeName:_e.ZodNativeEnum,...Se(t)});class Xi extends Le{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==oe.promise&&n.common.async===!1)return ce(n,{code:ee.invalid_type,expected:oe.promise,received:n.parsedType}),ke;const i=n.parsedType===oe.promise?n.data:Promise.resolve(n.data);return zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Xi.create=(e,t)=>new Xi({type:e,typeName:_e.ZodPromise,...Se(t)});class In extends Le{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const c=o.transform(i.data);return i.common.async?Promise.resolve(c).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:c,path:i.path,parent:i})}const a={addIssue:c=>{ce(i,c),c.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const c=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?ke:(u.status==="dirty"&&n.dirty(),c(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?ke:(u.status==="dirty"&&n.dirty(),c(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Da(c))return c;const u=o.transform(c.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>Da(c)?Promise.resolve(o.transform(c.value,a)).then(u=>({status:n.value,value:u})):c);ze.assertNever(o)}}In.create=(e,t,n)=>new In({schema:e,typeName:_e.ZodEffects,effect:t,...Se(n)});In.createWithPreprocess=(e,t,n)=>new In({schema:t,effect:{type:"preprocess",transform:e},typeName:_e.ZodEffects,...Se(n)});class hr extends Le{_parse(t){return this._getType(t)===oe.undefined?zt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}hr.create=(e,t)=>new hr({innerType:e,typeName:_e.ZodOptional,...Se(t)});class yi extends Le{_parse(t){return this._getType(t)===oe.null?zt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}yi.create=(e,t)=>new yi({innerType:e,typeName:_e.ZodNullable,...Se(t)});class oo extends Le{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===oe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}oo.create=(e,t)=>new oo({innerType:e,typeName:_e.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Se(t)});class Wa extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return za(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Tn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Wa.create=(e,t)=>new Wa({innerType:e,typeName:_e.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Se(t)});class Za extends Le{_parse(t){if(this._getType(t)!==oe.nan){const i=this._getOrReturnCtx(t);return ce(i,{code:ee.invalid_type,expected:oe.nan,received:i.parsedType}),ke}return{status:"valid",value:t.data}}}Za.create=e=>new Za({typeName:_e.ZodNaN,...Se(e)});const Zk=Symbol("zod_brand");class sm extends Le{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class vo extends Le{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?ke:a.status==="dirty"?(n.dirty(),rm(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?ke:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new vo({in:t,out:n,typeName:_e.ZodPipeline})}}const om=(e,t={},n)=>e?Ji.create().superRefine((i,o)=>{var a,c;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(c=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&c!==void 0?c:!0,h=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...h,fatal:d})}}):Ji.create(),Kk={object:ot.lazycreate};var _e;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(_e||(_e={}));const Vk=(e,t={message:`Input not instance of ${e.name}`})=>om(n=>n instanceof e,t),am=Cn.create,lm=Zr.create,Gk=Za.create,Qk=Kr.create,cm=Ys.create,Yk=vi.create,Jk=Ha.create,Xk=Js.create,eE=Xs.create,tE=Ji.create,nE=mi.create,rE=vr.create,iE=Fa.create,sE=An.create,oE=ot.create,aE=ot.strictCreate,lE=eo.create,cE=kl.create,uE=to.create,dE=Hn.create,fE=no.create,hE=qa.create,pE=bi.create,gE=Wi.create,mE=ro.create,vE=io.create,bE=Vr.create,yE=so.create,_E=Xi.create,n0=In.create,wE=hr.create,xE=yi.create,$E=In.createWithPreprocess,kE=vo.create,EE=()=>am().optional(),CE=()=>lm().optional(),SE=()=>cm().optional(),TE={string:e=>Cn.create({...e,coerce:!0}),number:e=>Zr.create({...e,coerce:!0}),boolean:e=>Ys.create({...e,coerce:!0}),bigint:e=>Kr.create({...e,coerce:!0}),date:e=>vi.create({...e,coerce:!0})},AE=ke;var pt=Object.freeze({__proto__:null,defaultErrorMap:Qs,setErrorMap:Lk,getErrorMap:Ua,makeIssue:Na,EMPTY_PATH:Pk,addIssueToContext:ce,ParseStatus:Lt,INVALID:ke,DIRTY:rm,OK:zt,isAborted:Au,isDirty:Iu,isValid:Da,isAsync:za,get util(){return ze},get objectUtil(){return Tu},ZodParsedType:oe,getParsedType:Nr,ZodType:Le,ZodString:Cn,ZodNumber:Zr,ZodBigInt:Kr,ZodBoolean:Ys,ZodDate:vi,ZodSymbol:Ha,ZodUndefined:Js,ZodNull:Xs,ZodAny:Ji,ZodUnknown:mi,ZodNever:vr,ZodVoid:Fa,ZodArray:An,ZodObject:ot,ZodUnion:eo,ZodDiscriminatedUnion:kl,ZodIntersection:to,ZodTuple:Hn,ZodRecord:no,ZodMap:qa,ZodSet:bi,ZodFunction:Wi,ZodLazy:ro,ZodLiteral:io,ZodEnum:Vr,ZodNativeEnum:so,ZodPromise:Xi,ZodEffects:In,ZodTransformer:In,ZodOptional:hr,ZodNullable:yi,ZodDefault:oo,ZodCatch:Wa,ZodNaN:Za,BRAND:Zk,ZodBranded:sm,ZodPipeline:vo,custom:om,Schema:Le,ZodSchema:Le,late:Kk,get ZodFirstPartyTypeKind(){return _e},coerce:TE,any:tE,array:sE,bigint:Qk,boolean:cm,date:Yk,discriminatedUnion:cE,effect:n0,enum:bE,function:gE,instanceof:Vk,intersection:uE,lazy:mE,literal:vE,map:hE,nan:Gk,nativeEnum:yE,never:rE,null:eE,nullable:xE,number:lm,object:oE,oboolean:SE,onumber:CE,optional:wE,ostring:EE,pipeline:kE,preprocess:$E,promise:_E,record:fE,set:pE,strictObject:aE,string:am,symbol:Jk,transformer:n0,tuple:dE,undefined:Xk,union:lE,unknown:nE,void:iE,NEVER:AE,ZodIssueCode:ee,quotelessJson:Ok,ZodError:Tn});const{decode:IE}=mo,RE=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,OE=/(?:#\[(?<idx>\d+)\])/g,LE=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,PE=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,ME=/:(?<emoji>\w+):/gu,um=e=>{const t=[...e.matchAll(RE),...e.matchAll(OE),...e.matchAll(LE),...e.matchAll(PE),...e.matchAll(ME)].sort((a,c)=>a.index-c.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const c=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};i.push(d)}n=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<n)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=IE(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(c);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=c+a[0].length}}),n<e.length&&o(e.length),i},BE=e=>t=>e.safeParse(t).success,jE=pt.tuple([pt.literal("emoji"),pt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),pt.string().url()]),UE=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&Gs(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],c],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:c}))};let NE=class extends tm{#e;#t;constructor(t){if(t.kind!==lt.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=um(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&Gs(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&Gs(i[1])){const a=this.markedEventTags().find(c=>c.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=UE(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(BE(jE))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const Dr=e=>new tm(e),El=e=>new NE(e),DE=()=>{const e=[...Ck];return window.navigator.language.includes("ja")&&e.push(...Sk),e},dm=()=>({relayUrls:DE(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),zE=e=>JSON.stringify(e),HE=e=>({...dm(),...JSON.parse(e)}),FE=Ix(()=>window.localStorage,zE,HE),[Ns,Vt]=Rx("RabbitConfig",dm(),FE),Ue=()=>{const e=_=>{Vt("relayUrls",A=>fr([...A,_]))},t=_=>{Vt("relayUrls",A=>A.filter(R=>R!==_))},n=_=>{Vt("mutedPubkeys",A=>fr([...A,_]))},i=_=>{Vt("mutedPubkeys",A=>A.filter(R=>R!==_))},o=_=>{Vt("mutedKeywords",A=>fr([...A,_]))},a=_=>{Vt("mutedKeywords",A=>A.filter(R=>R!==_))},c=_=>{Vt("columns",A=>{const R=A.findIndex(T=>T.id===_.id);if(R>=0){const T=[...A];return T.splice(R,1,_),T}return[...A,_]})},u=(_,A)=>{Vt("columns",R=>{const T=A-1,B=Math.max(Math.min(T,R.length),0),C=R.findIndex(te=>te.id===_);if(C<0||B===C)return R;console.log(C,B);const P=[...R],[U]=P.splice(C,1);return P.splice(B,0,U),P})},d=_=>{Vt("columns",A=>A.filter(R=>R.id!==_))},h=_=>{Vt("customEmojis",A=>({...A,[_.shortcode]:_}))},p=_=>{Vt("customEmojis",A=>{const R=Object.fromEntries(_.map(T=>[T.shortcode,T]));return{...A,...R}})},g=_=>{Vt("customEmojis",A=>({...A,[_]:void 0}))},v=_=>Ns.customEmojis[_],x=_=>Ns.mutedPubkeys.includes(_),k=_=>_.kind===lt.Text?Ns.mutedKeywords.some(A=>_.content.includes(A)):!1;return{config:()=>Ns,setConfig:Vt,addRelay:e,removeRelay:t,saveColumn:c,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:_})=>{if((Ns.columns?.length??0)>0)return;const A=[Q1({width:"widest",pubkey:_}),Y1({pubkey:_}),X1({name:"自分の投稿",pubkey:_}),em({name:"自分のリアクション",pubkey:_})];navigator.language.includes("ja")&&A.splice(2,0,J1()),Vt("columns",()=>[...A])},saveEmoji:h,saveEmojis:p,removeEmoji:g,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:x,shouldMuteEvent:_=>{const A=Dr(_);return x(_.pubkey)||A.taggedPubkeys().some(x)||_.kind===lt.Text&&k(_)}}},qE=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},WE=e=>{const t=Fe(e),n=Fe(()=>t().batchSize??100),i=Fe(()=>t().interval??2e3),[o,a]=$e(0),[c,u]=$e([]);let d;const h=()=>{const{executor:w}=t(),E=c();E.length>0&&(u([]),w(E)),d!=null&&clearTimeout(d),d=void 0},p=()=>{const w=o();return a(E=>E+1),w},g=()=>{d==null&&(d=setTimeout(()=>{h()},i()))},v=w=>{c().length<n()?u(E=>[...E,w]):(h(),u([w]))},x=w=>{u(E=>E.filter(_=>_.id!==w))};return{exec:async(w,E)=>{const{promise:_,resolve:A,reject:R}=qE(),T=p();return v({id:T,args:w,resolve:A,reject:R}),g(),E?.addEventListener("abort",()=>{x(T),R(new Error("AbortError"))}),_}}},[ZE]=$e(new $9),Cl=()=>ZE,[fm,r0]=Ki({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...fm})},1e3);const hm=()=>({stats:fm,setActiveSubscriptions:n=>r0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>r0("activeBatchSubscriptions",n)});let Ou=0;const{setActiveBatchSubscriptions:KE}=hm();setInterval(()=>{KE(Ou)},1e3);const VE={events:[],completed:!0},GE=()=>VE,QE=e=>e.kind>=3e4&&e.kind<4e4,YE=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{exec:bo}=WE(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,c=new Map,u=new Map;e.forEach(C=>{if(C.args.type==="Event"){const P=n.get(C.args.eventId)??[];n.set(C.args.eventId,[...P,C])}else if(C.args.type==="Profile"){const P=t.get(C.args.pubkey)??[];t.set(C.args.pubkey,[...P,C])}else if(C.args.type==="Reactions"){const P=i.get(C.args.mentionedEventId)??[];i.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="Reposts"){const P=o.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="ZapReceipts"){const P=a.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="ParameterizedReplaceableEvent"){const P=YE(C.args),U=c.get(P)??[];c.set(P,[...U,C])}else if(C.args.type==="Followings"){const P=u.get(C.args.pubkey)??[];u.set(C.args.pubkey,[...P,C])}});const d=[...n.keys()],h=[...t.keys()],p=[...i.keys()],g=[...o.keys()],v=[...a.keys()],x=[...u.keys()],k=[];if(d.length>0&&k.push({ids:d}),h.length>0&&k.push({kinds:[lt.Metadata],authors:h}),p.length>0&&k.push({kinds:[lt.Reaction],"#e":p}),g.length>0&&k.push({kinds:[6],"#e":g}),v.length>0&&k.push({kinds:[9735],"#e":v}),x.length>0&&k.push({kinds:[lt.Contacts],authors:x}),c.size>0&&Array.from(c.values()).forEach(([C])=>{if(C.args.type!=="ParameterizedReplaceableEvent")return;const{args:{kind:P,author:U,identifier:te}}=C;k.push({kinds:[lt.Contacts],authors:[U],"#d":[te]})}),k.length===0)return;const w=new Map,E=(C,P)=>{C.forEach(U=>{const te=w.get(U.id)??$e({events:[],completed:!1});w.set(U.id,te);const[W,Y]=te;Y(Z=>({...Z,events:[...Z.events,P]})),U.resolve(W)})},_=()=>{e.forEach(C=>{const P=w.get(C.id);if(P!=null){const U=P[1];U(te=>({...te,completed:!0}))}else C.resolve(GE)})},{config:A,shouldMuteEvent:R}=Ue(),B=Cl()().sub(A().relayUrls,k,{});Ou+=1,B.on("event",C=>{if(C.kind===lt.Metadata){const P=t.get(C.pubkey)??[];E(P,C);return}if(C.kind===lt.Reaction){const P=Dr(C).lastTaggedEventId();if(P!=null){const U=i.get(P)??[];E(U,C)}}else if(C.kind===6){const P=Dr(C).lastTaggedEventId();if(P!=null){const U=o.get(P)??[];E(U,C)}}else if(C.kind===lt.Zap)Dr(C).eTags().forEach(([,U])=>{const te=o.get(U)??[];E(te,C)});else if(C.kind===lt.Contacts){const P=u.get(C.pubkey)??[];E(P,C)}else if(QE(C)){const P=Dr(C).findFirstTagByName("d")?.[1];if(P!=null){const U=`${C.kind}:${C.pubkey}:${P}`,te=c.get(U)??[];E(te,C)}else console.warn("identifier is undefined")}else{const P=n.get(C.id)??[];P.length>0?E(P,C):console.warn("unknown event received")}}),B.on("eose",()=>{_(),B.unsub(),Ou-=1})}})),pm=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),Qr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([n,i])},gm=e=>{const t=Fe(e),n=is(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=bo({type:"Event",eventId:u},a).then(h=>{const p=h().events[0];if(p==null)throw new Error(`event not found: ${u}`);return p});return Qr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},on=e=>t=>e.some(n=>n==null)?null:t(e),JE=j("<span>投稿が見つかりません"),XE=j('<div class="truncate">読み込み中 '),ao=e=>{const[t,n]=wx(e,["eventId"]),{shouldMuteEvent:i}=Ue(),{event:o,query:a}=gm(()=>on([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&i(u)};return $(Sn,{get fallback(){return(()=>{const u=JE();return u.firstChild,O(u,()=>e.eventId,null),u})()},get children(){return[$(De,{get when(){return c()},children:null}),$(De,{get when(){return o()},keyed:!0,children:u=>$(nv,xx({event:u},n))}),$(De,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=XE();return d.firstChild,O(d,$(Vs,{eventId:u}),null),d})()})]}})},eC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},tC=e=>{try{return eC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},nC={staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3},rC=({queryKey:e,signal:t,queryClient:n})=>{const[,i]=e;if(i==null)return Promise.resolve(null);const{pubkey:o}=i,a=bo({type:"Profile",pubkey:o},t).then(c=>{const u=()=>{const d=pm(c().events);if(d==null)throw new Error(`profile not found: ${o}`);return d};return rl(c).subscribe(()=>{try{n.setQueryData(e,u())}catch(d){console.error("error occurred while updating profile cache: ",d)}}),u()});return Qr(15e3,`useProfile: ${o}`)(a)},hs=e=>{const t=rs(),n=Fe(e),i=Fe(()=>["useProfile",n()]),o=is(i,({queryKey:u,signal:d})=>rC({queryKey:u,signal:d,queryClient:t}),nC);return{profile:Fe(()=>{if(o.data==null)return null;const{content:u}=o.data;return tC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:iC}=mo,Sl=e=>{try{return iC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Tl=e=>{const{profile:t}=hs(()=>({pubkey:e.pubkey}));return $(Sn,{get fallback(){return Sl(e.pubkey)},get children(){return[$(De,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),$(De,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Fe(()=>t()?.name)]}})]}})},mm=e=>{const[t,n]=$e(new Date);return dr(()=>{const i=setInterval(()=>{n(new Date)},e().interval);gr(()=>clearInterval(i))}),t},sC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},i0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,oC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},aC=e=>{switch(e.kind){case"today":return i0(e.value);case"yesterday":return`昨日 ${i0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},lC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,cC=(e,t)=>{const n=lC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},s0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),uC=e=>new Date(+e-24*60*60*1e3),vm=(e,t,n)=>s0(e,t)?n({kind:"today",value:e}):s0(e,uC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),dC=(e,t=new Date)=>vm(e,t,oC),fC=(e,t=new Date)=>vm(e,t,aC),o0=(e,t=new Date,n=sC)=>n(cC(e,t)),a0=mm(()=>({interval:7e3})),l0=mm(()=>({interval:60*1e3})),bm=()=>{const{config:e}=Ue();return t=>{switch(e().dateFormat){case"absolute-long":return dC(t,l0());case"absolute-short":return fC(t,l0());case"relative":return o0(t,a0());default:return o0(t,a0())}}},[hC,zi]=$e({type:"Closed"}),Yr=()=>({modalState:hC,setModalState:zi,showProfile:a=>{zi({type:"Profile",pubkey:a})},showProfileEdit:()=>{zi({type:"ProfileEdit"})},showAddColumn:()=>{zi({type:"AddColumn"})},showAbout:()=>{zi({type:"About"})},closeModal:()=>{zi({type:"Closed"})}}),pC=j('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),ym=e=>{const{showProfile:t}=Yr(),n=bm(),i=Fe(()=>Dr(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=pC(),c=a.firstChild,u=c.firstChild,d=u.nextSibling,h=d.firstChild,p=d.nextSibling,g=c.nextSibling;return O(u,$(V1,{})),h.$$click=()=>t(e.event.pubkey),O(h,$(Tl,{get pubkey(){return e.event.pubkey}})),O(p,()=>n(i().createdAtAsDate())),O(g,$(ao,{get eventId(){return o()}})),a})()};ct(["click"]);const gC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),mC=(e={})=>(()=>{const t=gC();return Ke(t,e,!0,!0),t})(),vC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),_m=(e={})=>(()=>{const t=vC();return Ke(t,e,!0,!0),t})(),bC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),kd=(e={})=>(()=>{const t=bC();return Ke(t,e,!0,!0),t})(),yC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),wm=(e={})=>(()=>{const t=yC();return Ke(t,e,!0,!0),t})(),_C=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Ed=(e={})=>(()=>{const t=_C();return Ke(t,e,!0,!0),t})(),wC=j('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Cd=e=>{let t,n;const[i,o]=$e(!1),[a,c]=$e({}),u=$x(()=>e.children),d=()=>o(!1),h=()=>o(k=>!k),p=k=>{const w=k.target;w!=null&&!n?.contains(w)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},x=()=>{if(t==null||n==null)return;const k=t?.getBoundingClientRect(),w=n?.getBoundingClientRect();let{top:E,left:_}=k;e.position==="left"?_-=k.width:e.position==="right"?_+=k.width:e.position==="top"?(E-=k.height,_-=k.left+k.width/2):(E+=k.height,_+=k.width/2),E=Math.min(E,window.innerHeight-w.height),_=Math.min(_,window.innerWidth-w.width),c({left:`${_}px`,top:`${E}px`})};return dr(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),dr(nl(u,()=>{x()})),dr(()=>{i()&&x()}),an(()=>{e.ref?.({close:d})}),gr(()=>v()),(()=>{const k=wC(),w=k.firstChild,E=w.nextSibling;w.$$click=()=>{h(),x()};const _=t;typeof _=="function"?mr(_,w):t=w,O(w,()=>e.button);const A=n;return typeof A=="function"?mr(A,E):n=E,O(E,u),Be(R=>{const T=!i(),B=!!i(),C=a();return T!==R._v$&&E.classList.toggle("hidden",R._v$=T),B!==R._v$2&&E.classList.toggle("block",R._v$2=B),R._v$3=kx(E,C,R._v$3),R},{_v$:void 0,_v$2:void 0,_v$3:void 0}),k})()};ct(["click"]);const xC=j('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),$C=j('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),kC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=xC(),i=n.firstChild;return i.$$click=t,O(i,()=>e.item.content()),n})()},xm=e=>{let t;const n=()=>t?.close();return $(Cd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=$C();return O(i,$(Ot,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>$(kC,{item:o,onClose:n})})),i}})};ct(["click"]);function $m(e){return e&&e.__esModule?e.default:e}function kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Al,me,km,zs,Em,c0,Ka={},Cm=[],EC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function zr(e,t){for(var n in t)e[n]=t[n];return e}function Sm(e){var t=e.parentNode;t&&t.removeChild(e)}function Lu(e,t,n){var i,o,a,c={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Al.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return ka(e,c,i,o,null)}function ka(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++km};return o==null&&me.vnode!=null&&me.vnode(a),a}function ar(){return{current:null}}function es(e){return e.children}function Un(e,t){this.props=e,this.context=t}function ts(e,t){if(t==null)return e.__?ts(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ts(e):null}function Tm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Tm(e)}}function u0(e){(!e.__d&&(e.__d=!0)&&zs.push(e)&&!Va.__r++||c0!==me.debounceRendering)&&((c0=me.debounceRendering)||Em)(Va)}function Va(){for(var e;Va.__r=zs.length;)e=zs.sort(function(t,n){return t.__v.__b-n.__v.__b}),zs=[],e.some(function(t){var n,i,o,a,c,u;t.__d&&(c=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=zr({},a)).__v=a.__v+1,Sd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,i,c??ts(a),a.__h),Om(i,a),a.__e!=c&&Tm(a)))})}function Am(e,t,n,i,o,a,c,u,d,h){var p,g,v,x,k,w,E,_=i&&i.__k||Cm,A=_.length;for(n.__k=[],p=0;p<t.length;p++)if((x=n.__k[p]=(x=t[p])==null||typeof x=="boolean"?null:typeof x=="string"||typeof x=="number"||typeof x=="bigint"?ka(null,x,null,null,x):Array.isArray(x)?ka(es,{children:x},null,null,null):x.__b>0?ka(x.type,x.props,x.key,null,x.__v):x)!=null){if(x.__=n,x.__b=n.__b+1,(v=_[p])===null||v&&x.key==v.key&&x.type===v.type)_[p]=void 0;else for(g=0;g<A;g++){if((v=_[g])&&x.key==v.key&&x.type===v.type){_[g]=void 0;break}v=null}Sd(e,x,v=v||Ka,o,a,c,u,d,h),k=x.__e,(g=x.ref)&&v.ref!=g&&(E||(E=[]),v.ref&&E.push(v.ref,null,x),E.push(g,x.__c||k,x)),k!=null?(w==null&&(w=k),typeof x.type=="function"&&x.__k===v.__k?x.__d=d=Im(x,d,e):d=Rm(e,x,v,_,k,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=ts(v))}for(n.__e=w,p=A;p--;)_[p]!=null&&(typeof n.type=="function"&&_[p].__e!=null&&_[p].__e==n.__d&&(n.__d=ts(i,p+1)),Pm(_[p],_[p]));if(E)for(p=0;p<E.length;p++)Lm(E[p],E[++p],E[++p])}function Im(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Im(i,t,n):Rm(n,i,i,o,i.__e,t));return t}function Ga(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ga(n,t)}):t.push(e)),t}function Rm(e,t,n,i,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function CC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Qa(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Qa(e,a,t[a],n[a],i)}function d0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||EC.test(t)?n:n+"px"}function Qa(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||d0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||d0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?h0:f0,a):e.removeEventListener(t,a?h0:f0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function f0(e){this.l[e.type+!1](me.event?me.event(e):e)}function h0(e){this.l[e.type+!0](me.event?me.event(e):e)}function Sd(e,t,n,i,o,a,c,u,d){var h,p,g,v,x,k,w,E,_,A,R,T=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(h=me.__b)&&h(t);try{e:if(typeof T=="function"){if(E=t.props,_=(h=T.contextType)&&i[h.__c],A=h?_?_.props.value:h.__:i,n.__c?w=(p=t.__c=n.__c).__=p.__E:("prototype"in T&&T.prototype.render?t.__c=p=new T(E,A):(t.__c=p=new Un(E,A),p.constructor=T,p.render=TC),_&&_.sub(p),p.props=E,p.state||(p.state={}),p.context=A,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),T.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=zr({},p.__s)),zr(p.__s,T.getDerivedStateFromProps(E,p.__s))),v=p.props,x=p.state,g)T.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(T.getDerivedStateFromProps==null&&E!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,A),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(E,p.__s,A)===!1||t.__v===n.__v){p.props=E,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(B){B&&(B.__=t)}),p.__h.length&&c.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,A),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,x,k)})}p.context=A,p.props=E,p.state=p.__s,(h=me.__r)&&h(t),p.__d=!1,p.__v=t,p.__P=e,h=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=zr(zr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(k=p.getSnapshotBeforeUpdate(v,x)),R=h!=null&&h.type===es&&h.key==null?h.props.children:h,Am(e,Array.isArray(R)?R:[R],t,n,i,o,a,c,u,d),p.base=t.__e,t.__h=null,p.__h.length&&c.push(p),w&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=SC(n.__e,t,n,i,o,a,c,d);(h=me.diffed)&&h(t)}catch(B){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),me.__e(B,t,n)}}function Om(e,t){me.__c&&me.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){me.__e(i,n.__v)}})}function SC(e,t,n,i,o,a,c,u){var d,h,p,g=n.props,v=t.props,x=t.type,k=0;if(x==="svg"&&(o=!0),a!=null){for(;k<a.length;k++)if((d=a[k])&&"setAttribute"in d==!!x&&(x?d.localName===x:d.nodeType===3)){e=d,a[k]=null;break}}if(e==null){if(x===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,v.is&&v),a=null,u=!1}if(x===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Al.call(e.childNodes),h=(g=n.props||Ka).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},k=0;k<e.attributes.length;k++)g[e.attributes[k].name]=e.attributes[k].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(CC(e,v,g,o,u),p)t.__k=[];else if(k=t.props.children,Am(e,Array.isArray(k)?k:[k],t,n,i,o&&x!=="foreignObject",a,c,a?a[0]:n.__k&&ts(n,0),u),a!=null)for(k=a.length;k--;)a[k]!=null&&Sm(a[k]);u||("value"in v&&(k=v.value)!==void 0&&(k!==g.value||k!==e.value||x==="progress"&&!k)&&Qa(e,"value",k,g.value,!1),"checked"in v&&(k=v.checked)!==void 0&&k!==e.checked&&Qa(e,"checked",k,g.checked,!1))}return e}function Lm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){me.__e(i,n)}}function Pm(e,t,n){var i,o;if(me.unmount&&me.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Lm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){me.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Pm(i[o],t,typeof e.type!="function");n||e.__e==null||Sm(e.__e),e.__e=e.__d=void 0}function TC(e,t,n){return this.constructor(e,n)}function Mm(e,t,n){var i,o,a;me.__&&me.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Sd(t,e=(!i&&n||t).__k=Lu(es,null,[e]),o||Ka,Ka,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Al.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),Om(a,e)}Al=Cm.slice,me={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},km=0,Un.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=zr({},this.state),typeof e=="function"&&(e=e(zr({},n),this.props)),e&&zr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),u0(this))},Un.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),u0(this))},Un.prototype.render=es,zs=[],Em=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Va.__r=0;var AC=0;function K(e,t,n,i,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--AC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return me.vnode&&me.vnode(d),d}function IC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function RC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Fr={set:IC,get:RC};const ou=new Map,OC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function LC(){for(const{v:e,emoji:t}of OC)if(Bm(t))return e}function PC(){return!Bm("🇨🇦")}function Bm(e){if(ou.has(e))return ou.get(e);const t=MC(e);return ou.set(e,t),t}const MC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=n+u/4%n,h=Math.floor(u/4/n),p=e.getImageData(d,h,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var p0={latestVersion:LC,noCountryFlags:PC};const Pu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Ct=null;function BC(e){Ct||(Ct=Fr.get("frequently")||{});const t=e.id||e;t&&(Ct[t]||(Ct[t]=0),Ct[t]+=1,Fr.set("last",t),Fr.set("frequently",Ct))}function jC({maxFrequentRows:e,perLine:t}){if(!e)return[];Ct||(Ct=Fr.get("frequently"));let n=[];if(!Ct){Ct={};for(let a in Pu.slice(0,t)){const c=Pu[a];Ct[c]=t-a,n.push(c)}return n}const i=e*t,o=Fr.get("last");for(let a in Ct)n.push(a);if(n.sort((a,c)=>{const u=Ct[c],d=Ct[a];return u==d?a.localeCompare(c):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let c of a)c!=o&&delete Ct[c];o&&n.indexOf(o)==-1&&(delete Ct[n[n.length-1]],n.splice(-1,1,o)),Fr.set("frequently",Ct)}return n}var jm={add:BC,get:jC,DEFAULTS:Pu},Um={};Um=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var ur={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Rt=null,Me=null;const au={};async function g0(e){if(au[e])return au[e];const n=await(await fetch(e)).json();return au[e]=n,n}let lu=null,Nm=null,Dm=!1;function Il(e,{caller:t}={}){return lu||(lu=new Promise(n=>{Nm=n})),e?UC(e):t&&!Dm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),lu}async function UC(e){Dm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=ur.emojiVersion.value),n||(n=ur.set.value),i||(i=ur.locale.value),Me)Me.categories=Me.categories.filter(d=>!d.name);else{Me=(typeof e.data=="function"?await e.data():e.data)||await g0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Me.emoticons={},Me.natives={},Me.categories.unshift({id:"frequent",emojis:[]});for(const d in Me.aliases){const h=Me.aliases[d],p=Me.emojis[h];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}Me.originalCategories=Me.categories}if(Rt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?$m(Um):await g0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const h=e.custom[d],p=e.custom[d-1];if(!(!h.emojis||!h.emojis.length)){h.id||(h.id=`custom_${d+1}`),h.name||(h.name=Rt.categories.custom),p&&!h.icon&&(h.target=p.target||p),Me.categories.push(h);for(const g of h.emojis)Me.emojis[g.id]=g}}e.categories&&(Me.categories=Me.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,h)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(h.id);return p-g}));let o=null,a=null;n=="native"&&(o=p0.latestVersion(),a=e.noCountryFlags||p0.noCountryFlags());let c=Me.categories.length,u=!1;for(;c--;){const d=Me.categories[c];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:ur.maxFrequentRows.value,v||(v=ur.perLine.value),d.emojis=jm.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){Me.categories.splice(c,1);continue}const{categoryIcons:h}=e;if(h){const g=h[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:Me.emojis[g],x=()=>{d.emojis.splice(p,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){x();continue}if(o&&v.version>o){x();continue}if(a&&d.id=="flags"&&!FC.includes(v.id)){x();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([w,E])=>{if(w)return(Array.isArray(w)?w:[w]).map(_=>(E?_.split(/[-|_|\s]+/):[_]).map(A=>A.toLowerCase())).flat()}).flat().filter(w=>w&&w.trim()).join(","),v.emoticons)for(const w of v.emoticons)Me.emoticons[w]||(Me.emoticons[w]=v.id);let k=0;for(const w of v.skins){if(!w)continue;k++;const{native:E}=w;E&&(Me.natives[E]=v.id,v.search+=`,${E}`);const _=k==1?"":`:skin-tone-${k}:`;w.shortcodes=`:${v.id}:${_}`}}}}u&&Zi.reset(),Nm()}function zm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Hm(o,e,t,n);return i}function Hm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const NC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Mu=null;function DC(e){return e.id?e:Me.emojis[e]||Me.emojis[Me.aliases[e]]||Me.emojis[Me.natives[e]]}function zC(){Mu=null}async function HC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Il(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,h)=>u.trim()&&h.indexOf(u)==d);if(!i.length)return;let o=Mu||(Mu=Object.values(Me.emojis)),a,c;for(const u of i){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const h=d.search.indexOf(`,${u}`);h!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:h+1)}o=a}return a.length<2||(a.sort((u,d)=>{const h=c[u.id],p=c[d.id];return h==p?u.id.localeCompare(d.id):h-p}),a.length>t&&(a=a.slice(0,t))),a}var Zi={search:HC,get:DC,reset:zC,SHORTCODES_REGEX:NC};const FC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function qC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function WC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function ZC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const KC={activity:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:K("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),K("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:K("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),K("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:K("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),K("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),K("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},VC={loupe:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ya={categories:KC,search:VC};function Bu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Zi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Zi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return K("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?K("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?K("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):K("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Me.sheet.cols}% ${100*Me.sheet.rows}%`,backgroundPosition:`${100/(Me.sheet.cols-1)*o.x}% ${100/(Me.sheet.rows-1)*o.y}%`}})})}const GC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Fm extends GC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Hm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class QC extends Fm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var qm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:ur.set,skin:ur.skin};class Wm extends Fm{async connectedCallback(){const t=zm(this.props,qm,this);t.element=this,t.ref=n=>{this.component=n},await Il(),!this.disconnected&&Mm(K(Bu,{...t}),this)}constructor(t){super(t)}}kn(Wm,"Props",qm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Wm);var m0,ju=[],v0=me.__b,b0=me.__r,y0=me.diffed,_0=me.__c,w0=me.unmount;function YC(){var e;for(ju.sort(function(t,n){return t.__v.__b-n.__v.__b});e=ju.pop();)if(e.__P)try{e.__H.__h.forEach(Ea),e.__H.__h.forEach(Uu),e.__H.__h=[]}catch(t){e.__H.__h=[],me.__e(t,e.__v)}}me.__b=function(e){v0&&v0(e)},me.__r=function(e){b0&&b0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ea),t.__h.forEach(Uu),t.__h=[])},me.diffed=function(e){y0&&y0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ju.push(t)!==1&&m0===me.requestAnimationFrame||((m0=me.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),x0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);x0&&(i=requestAnimationFrame(o))})(YC))},me.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ea),n.__h=n.__h.filter(function(i){return!i.__||Uu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],me.__e(i,n.__v)}}),_0&&_0(e,t)},me.unmount=function(e){w0&&w0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ea(i)}catch(o){t=o}}),t&&me.__e(t,n.__v))};var x0=typeof requestAnimationFrame=="function";function Ea(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Uu(e){e.__c=e.__()}function JC(e,t){for(var n in t)e[n]=t[n];return e}function $0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ja(e){this.props=e}(Ja.prototype=new Un).isPureReactComponent=!0,Ja.prototype.shouldComponentUpdate=function(e,t){return $0(this.props,e)||$0(this.state,t)};var k0=me.__b;me.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),k0&&k0(e)};var XC=me.__e;me.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}XC(e,t,n)};var E0=me.unmount;function cu(){this.__u=0,this.t=null,this.__b=null}function Zm(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function va(){this.u=null,this.o=null}me.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),E0&&E0(e)},(cu.prototype=new Un).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Zm(i.__v),a=!1,c=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--i.__u){if(i.state.__e){var h=i.state.__e;i.__v.__k[0]=function g(v,x,k){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(w){return g(w,x,k)}),v.__c&&v.__c.__P===x&&(v.__e&&k.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=k)),v}(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(c,c)},cu.prototype.componentWillUnmount=function(){this.t=[]},cu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),c.__c.__H=null),(c=JC({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(h){return a(h,u,d)})),c}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Lu(es,null,e.fallback);return o&&(o.__h=null),[Lu(es,null,t.__e?null:e.children),o]};var C0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(va.prototype=new Un).__e=function(e){var t=this,n=Zm(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),C0(t,e,i)):o()};n?n(a):a()}},va.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ga(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},va.prototype.componentDidUpdate=va.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){C0(e,n,t)})};var eS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,tS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,nS=typeof document<"u",rS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Un.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Un.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var S0=me.event;function iS(){}function sS(){return this.cancelBubble}function oS(){return this.defaultPrevented}me.event=function(e){return S0&&(e=S0(e)),e.persist=iS,e.isPropagationStopped=sS,e.isDefaultPrevented=oS,e.nativeEvent=e};var T0={configurable:!0,get:function(){return this.class}},A0=me.vnode;me.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var c=n[a];nS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&c==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!rS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&tS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),i[a]=c)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(T0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",T0))}e.$$typeof=eS,A0&&A0(e)};var I0=me.__r;me.__r=function(e){I0&&I0(e),e.__c};const aS={light:"outline",dark:"solid"};class lS extends Ja{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return K("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return K("img",{src:n.src})}const i=Ya.categories[t.id]||Ya.categories.custom,o=this.props.icons=="auto"?aS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return K("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:K("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Rt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),K("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),K("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Me.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class cS extends Ja{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const ba={rowsPerRender:10};class uS extends Un{getInitialState(t=this.props){return{skin:Fr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Rt.rtl?"rtl":"ltr",this.refs={menu:ar(),navigation:ar(),scroll:ar(),search:ar(),searchInput:ar(),skinToneButton:ar(),skinToneRadio:ar()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Il(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Me;this.refs.categories=new Map;const n=Me.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%ba.rowsPerRender?{}:ar();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=i(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=i(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:ar(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:c}=n.getBoundingClientRect();return Math.floor(c/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Zi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const h=d.target.dataset.id;n.set(h,d.intersectionRatio)}const u=[...n];for(const[d,h]of u)if(h){i(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(ba.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*ba.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,h]=this.state.pos;const p=(()=>{if(d==0&&h==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||c)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(h+=v,!g[h]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,h=i?0:u[d].length-1,[d,h];h=i?g.length-1:0}return[d,h]}if(a||c){d+=a?-1:1;const g=u[d];return g?(g[h]||(h=g.length-1),[d,h]):(d=a?0:u.length-1,h=a?0:u[d].length-1,[d,h])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(n>=0&&(t=i[n].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)c=0;else{const u=i[n].__index,d=c+u*this.props.emojiButtonSize,h=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(h>o.scrollTop+a.height)c=h-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=ZC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&jm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Fr.set("skin",t)}renderNav(){return K(lS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return K("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[K("div",{class:"flex flex-middle flex-grow",children:[K("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:K(Bu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),K("div",{class:`margin-${this.dir[0]}`,children:t||n?K("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[K("div",{class:"preview-title ellipsis",children:t?t.name:Rt.search_no_results_1}),K("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Rt.search_no_results_2})]}):K("div",{class:"preview-placeholder color-c",children:Rt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,h=qC(this.state.pos,n),p=n.concat(t.id).join("");return K(cS,{selected:h,skin:c,size:a,children:K("button",{"aria-label":d,"aria-selected":h||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[K("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),K(Bu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return K("div",{children:[K("div",{class:"spacer"}),K("div",{class:"flex flex-middle",children:[K("div",{class:"search relative flex-grow",children:[K("input",{type:"search",ref:this.refs.searchInput,placeholder:Rt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),K("span",{class:"icon loupe flex",children:Ya.search.loupe}),this.state.searchResults&&K("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ya.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?K("div",{class:"category",ref:this.refs.search,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Rt.categories.search}),K("div",{children:t.length?t.map((n,i)=>K("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):K("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&K("a",{onClick:this.props.onAddCustomEmoji,children:Rt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Me,n=!!this.state.searchResults,i=this.getPerLine();return K("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return K("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Rt.categories[o.id]}),K("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const h=u.index-u.index%ba.rowsPerRender,p=this.state.visibleRows[h],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,x=v+i,k=o.emojis.slice(v,x);return k.length<i&&k.push(...new Array(i-k.length)),K("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&k.map((w,E)=>{if(!w)return K("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const _=Zi.get(w);return this.renderEmojiButton(_,{pos:[u.index,E],posinset:u.posinset+E,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:K("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:K("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Rt.skins.choose,title:Rt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:K("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return K("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),K("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Rt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return K("div",{children:[K("input",{type:"radio",name:"skin-tone",value:c,"aria-label":Rt.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),K("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[K("span",{class:`skin-tone skin-tone-${c}`}),K("span",{class:"margin-small-lr",children:Rt.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return K("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&K("div",{class:"padding-lr",children:this.renderSearch()}),K("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:K("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),kn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),kn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),kn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),kn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),kn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Zi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let h of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(h);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),kn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),kn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),kn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),kn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await WC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Td extends QC{async connectedCallback(){const t=zm(this.props,ur,this);t.element=this,t.ref=n=>{this.component=n},await Il(t),!this.disconnected&&Mm(K(uS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:$m(Km)})}}kn(Td,"Props",ur);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Td);var Km={};Km=`:host {
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

`;const Vm=e=>{let t;const[n,i]=$e(void 0);return $(Cd,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new Td({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(c)},onClose:()=>{i(void 0)},get children(){return n()}})},dS=j("<div>"),fS=j('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),hS=j("<br>"),pS=j("<span>理由: "),gS=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),mS=e=>{const[t,n]=$e(!1);return $(de,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=gS();return i.firstChild,i.$$click=()=>n(!0),O(i,$(de,{get when(){return e.contentWarning.reason!=null},get children(){return[hS(),(()=>{const o=pS();return o.firstChild,O(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=dS();return O(i,()=>e.children),i})(),$(de,{get when(){return e.contentWarning.contentWarning},get children(){const i=fS();return i.$$click=()=>n(!1),i}})]}})};ct(["click"]);const Gm=e=>{const{profile:t}=hs(()=>({pubkey:e.pubkey}));return $(de,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Sl(e.pubkey)}`},get children(){return["@",Fe(()=>t()?.name??e.pubkey)]}})},vS=j('<a target="_blank" rel="noreferrer noopener">'),Rl=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return $(de,{get when(){return t()},get fallback(){return e.href},get children(){const n=vS();return O(n,()=>e.children??e.href),Be(i=>{const o=e.class,a=e.href;return o!==i._v$&&Ex(n,i._v$=o),a!==i._v$2&&gt(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},bS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},yS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},_S=j('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),wS=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),xS=e=>{let t;const[n,i]=$e(e.initialHidden);return $(de,{get when(){return!n()},get fallback(){return(()=>{const o=wS();return o.$$click=()=>i(!1),o})()},get children(){return $(Rl,{class:"my-2 block",get href(){return e.url},get children(){const o=_S(),a=t;return typeof a=="function"?mr(a,o):t=o,Be(c=>{const u=yS(e.url),d=e.url;return u!==c._v$&&gt(o,"src",c._v$=u),d!==c._v$2&&gt(o,"alt",c._v$2=d),c},{_v$:void 0,_v$2:void 0}),o}})}})};ct(["click"]);const $S=j('<div class="my-1 rounded border p-1">'),kS=e=>$(de,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return $(Vs,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=$S();return O(t,$(ao,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[lt.Text]}})),t}}),ES=j('<button class="inline text-blue-500 underline">'),uu=e=>{const{showProfile:t}=Yr(),n=()=>{t(e.pubkey)};return(()=>{const i=ES();return i.$$click=n,O(i,$(Gm,{get pubkey(){return e.pubkey}})),i})()};ct(["click"]);const[Ad,CS]=$e({}),Qm=e=>{Ad()[e]==null&&CS(t=>({...t,[e]:new MessageChannel}))},SS=e=>{const t=()=>Ad()[e().id],n=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},i=(o,a=1e3)=>new Promise((c,u)=>{let d;const h=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",h),g.ok?c(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",h),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",h,!1),t().port1.start()});return an(()=>{const{id:o}=e();Qm(o)}),async o=>{const a=Math.random().toString(),c=i(a);return n(a,o),c}},TS=e=>{const t=Fe(e),n=()=>Ad()[t().id];an(()=>{const{id:i}=t();Qm(i);const o=n().port2,a=c=>{const{requestId:u,request:d}=c.data,h=t().handler(d);(h instanceof Promise?h:Promise.resolve(h)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),gr(()=>{o.removeEventListener("message",a)})})},yo=()=>SS(()=>({id:"CommandChannel"})),Nu=e=>{TS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},du=j("<span>"),R0=j('<div class="my-1 rounded border p-1">'),AS=j('<span class="text-blue-500 underline">'),IS=j('<button class="text-blue-500 underline">'),RS=j('<img class="inline-block h-8 max-w-[128px] align-middle">'),OS=e=>{const{config:t,saveColumn:n}=Ue(),i=yo(),o=()=>El(e.event),a=c=>{n($d({query:c})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return $(Ot,{get each(){return o().parsed()},children:c=>{if(c.type==="PlainText")return(()=>{const u=du();return O(u,()=>c.content),u})();if(c.type==="URL")return bS(c.content)?$(xS,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):$(Rl,{class:"text-blue-500 underline",get href(){return c.content}});if(c.type==="TagReference"){const u=o().resolveTagReference(c);if(u==null)return(()=>{const d=du();return O(d,()=>c.content),d})();if(u.type==="MentionedUser")return $(uu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?$(kS,{mentionedEvent:u}):$(Vs,{get eventId(){return u.eventId}})}if(c.type==="Bech32Entity")return c.data.type==="note"&&e.embedding?(()=>{const u=R0();return O(u,$(ao,{get eventId(){return c.data.data},actions:!1,embedding:!1,get ensureKinds(){return[lt.Text]}})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=R0();return O(u,$(ao,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?$(uu,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?$(uu,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=AS();return O(u,()=>c.content),u})();if(c.type==="HashTag")return(()=>{const u=IS();return u.$$click=()=>a(c.content),O(u,()=>c.content),u})();if(c.type==="CustomEmoji"){const u=o().getEmojiUrl(c.shortcode);return u==null?(()=>{const d=du();return O(d,()=>c.content),d})():(()=>{const d=RS();return gt(d,"src",u),Be(()=>gt(d,"alt",c.content)),d})()}return console.error("Not all ParsedTextNoteNodes are covered",c),null}})};ct(["click"]);const LS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Ym=(e={})=>(()=>{const t=LS();return Ke(t,e,!0,!0),t})(),PS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),MS=(e={})=>(()=>{const t=PS();return Ke(t,e,!0,!0),t})(),BS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ns=(e={})=>(()=>{const t=BS();return Ke(t,e,!0,!0),t})(),jS=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),US=(e={})=>(()=>{const t=jS();return Ke(t,e,!0,!0),t})(),NS=e=>Math.floor(+e/1e3),lr=()=>NS(new Date),DS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),zS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],h=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),c?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...h,...p]},Ol=()=>{const e=Cl(),t=async(d,h)=>{const p={...h};if(p.id=bl(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async v=>{const k=(await e().ensureRelay(v)).publish(g);return DS(k,v)})};return{publishTextNote:async d=>{const{relayUrls:h,pubkey:p,content:g}=d,v=zS(d),x={kind:1,pubkey:p,created_at:lr(),tags:v,content:g};return t(h,x)},publishReaction:async({relayUrls:d,pubkey:h,eventId:p,content:g,notifyPubkey:v})=>{const x={kind:7,pubkey:h,created_at:lr(),tags:[["e",p,""],["p",v]],content:g};return t(d,x)},publishRepost:async({relayUrls:d,pubkey:h,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:h,created_at:lr(),tags:[["e",p,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:h,profile:p,otherProperties:g})=>{const v={...p,...g},x={kind:lt.Metadata,pubkey:h,created_at:lr(),tags:[],content:JSON.stringify(v)};return t(d,x)},updateContacts:async({relayUrls:d,pubkey:h,followingPubkeys:p,content:g})=>{const v=p.map(k=>["p",k]),x={kind:lt.Contacts,pubkey:h,created_at:lr(),tags:v,content:g};return t(d,x)},deleteEvent:async({relayUrls:d,pubkey:h,eventId:p})=>{const g={kind:lt.EventDeletion,pubkey:h,created_at:lr(),tags:[["e",p,""]],content:""};return t(d,g)}}};let fu=!1;const[ya,HS]=$e(void 0),yr=()=>(an(()=>{if(ya()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),ya()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&ya()==null&&!fu&&(fu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),HS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{fu=!1})),e+=1},200)}),ya),FS=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},qS=e=>t=>Promise.allSettled(t.map(n=>e(n))),WS=j("<div>に返信"),ZS=j('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),KS=j('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),VS=j('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),GS=j('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),QS=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},YS=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(c=>{c.type==="URL"?o.push(c.content):c.type==="HashTag"?t.push(c.tagName):c.type==="Bech32Entity"?c.data.type==="npub"?n.push(c.data.data):c.data.type==="note"&&i.push(c.data.data):c.type==="CustomEmoji"&&!a.includes(c.shortcode)&&a.push(c.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},JS=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Jm=e=>{let t,n;const[i,o]=$e(""),[a,c]=$e(!1),[u,d]=$e(""),h=G=>o(ae=>`${ae} ${G}`),p=()=>{o(""),d(""),c(!1)},g=()=>{t?.blur(),p(),e.onClose()},{config:v,getEmoji:x}=Ue(),k=yr(),w=Ol(),E=()=>e.replyTo&&El(e.replyTo),_=()=>e.mode??"normal",A=pi({mutationKey:["publishTextNote"],mutationFn:w.publishTextNote.bind(w),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:G=>{console.error("error",G)}}),R=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},T=pi({mutationKey:["uploadFiles"],mutationFn:async G=>{const ae=await qS(FS)(G),ue=[];if(ae.forEach((re,Q)=>{re.status==="fulfilled"?(h(re.value.imageUrl),R()):ue.push(G[Q])}),ue.length>0){const re=ue.map(Q=>Q.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${re}`)}}}),B=Fe(()=>{const G=k();return E()?.taggedPubkeys()?.filter(ae=>ae!==G)??[]}),C=Fe(()=>e.replyTo==null?[]:fr([e.replyTo.pubkey,...B()])),P=G=>{const ae=[];return G.forEach(ue=>{const re=x(ue);re!=null&&ae.push(["emoji",ue,re.url])}),ae},U=()=>{if(i().length===0||A.isLoading)return;const G=k();if(G==null){console.error("pubkey is not available");return}const ae=um(i()),{hashtags:ue,urlReferences:re,pubkeyReferences:Q,eventReferences:he,emojis:we}=YS(ae),Re=JS(ae),Je=P(we);let J={relayUrls:v().relayUrls,pubkey:G,content:Re,notifyPubkeys:Q,mentionEventIds:he,hashtags:ue,urls:re,tags:Je};E()!=null&&(J={...J,notifyPubkeys:fr([...C(),...Q]),rootEventId:E()?.rootEvent()?.id,replyEventId:E()?.id}),a()&&(J={...J,contentWarning:u()}),A.mutate(J),g()},te=G=>{o(G.currentTarget.value),R()},W=G=>{G.preventDefault(),U()},Y=G=>{G.key==="Enter"&&(G.ctrlKey||G.metaKey)?U():G.key==="Escape"&&(t?.blur(),g())},Z=G=>{if(G.preventDefault(),T.isLoading)return;const ae=[...G.currentTarget.files??[]];T.mutate(ae),G.currentTarget.value=""},X=G=>{if(G.preventDefault(),T.isLoading)return;const ae=[...G?.dataTransfer?.files??[]];T.mutate(ae)},se=G=>{if(T.isLoading)return;const ae=[...G?.clipboardData?.items??[]],ue=[];ae.forEach(re=>{if(re.kind==="file"){G.preventDefault();const Q=re.getAsFile();if(Q==null)return;ue.push(Q)}}),ue.length!==0&&T.mutate(ue)},q=G=>{G.preventDefault()},D=()=>i().trim().length===0||A.isLoading||T.isLoading,ne=()=>T.isLoading;return an(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const G=GS(),ae=G.firstChild,ue=ae.firstChild,re=ue.nextSibling,Q=re.firstChild,he=Q.nextSibling,we=he.nextSibling,Re=re.nextSibling;O(G,$(de,{get when(){return e.replyTo!=null},get children(){const J=WS(),qe=J.firstChild;return O(J,$(Ot,{get each(){return C()},children:(nt,Te)=>[$(Tl,{pubkey:nt}),$(de,{get when(){return Te()!==C().length-1},children:" と "})]}),qe),J}}),ae),ae.addEventListener("submit",W),O(ae,$(de,{get when(){return a()},get children(){const J=ZS();return J.$$input=qe=>d(qe.currentTarget.value),Be(()=>J.value=u()),J}}),ue),ue.addEventListener("paste",se),ue.addEventListener("drop",X),ue.addEventListener("dragover",q),ue.$$keydown=Y,ue.$$input=te,mr(J=>{t=J,e.textAreaRef?.(J)},ue),O(re,$(de,{get when(){return _()==="reply"},get children(){const J=KS(),qe=J.firstChild;return qe.$$click=()=>g(),O(qe,$(ns,{})),J}}),Q),O(re,$(Vm,{customEmojis:!0,onEmojiSelect:J=>h(J),get children(){const J=VS();return O(J,$(Ym,{})),J}}),Q),Q.$$click=()=>c(J=>!J),he.$$click=()=>n?.click(),O(he,$(MS,{})),O(we,$(US,{})),Re.addEventListener("change",Z);const Je=n;return typeof Je=="function"?mr(Je,Re):n=Re,Be(J=>{const qe=QS(_()),nt=!a(),Te=!!a(),Xe=_()==="normal",rt=_()==="normal",Tt=_()==="reply",Ve=_()==="reply",Ht=!!ne(),Kn=!ne(),_t=_()==="normal",wr=_()==="normal",wi=_()==="reply",Ln=_()==="reply",mt=ne(),bn=!!D(),Pn=!D(),xi=_()==="normal",ye=_()==="normal",Vn=_()==="reply",Gt=_()==="reply",Ft=D();return qe!==J._v$&&gt(ue,"placeholder",J._v$=qe),nt!==J._v$2&&Q.classList.toggle("bg-rose-300",J._v$2=nt),Te!==J._v$3&&Q.classList.toggle("bg-rose-400",J._v$3=Te),Xe!==J._v$4&&Q.classList.toggle("h-8",J._v$4=Xe),rt!==J._v$5&&Q.classList.toggle("w-8",J._v$5=rt),Tt!==J._v$6&&Q.classList.toggle("h-7",J._v$6=Tt),Ve!==J._v$7&&Q.classList.toggle("w-7",J._v$7=Ve),Ht!==J._v$8&&he.classList.toggle("bg-primary-disabled",J._v$8=Ht),Kn!==J._v$9&&he.classList.toggle("bg-primary",J._v$9=Kn),_t!==J._v$10&&he.classList.toggle("h-8",J._v$10=_t),wr!==J._v$11&&he.classList.toggle("w-8",J._v$11=wr),wi!==J._v$12&&he.classList.toggle("h-7",J._v$12=wi),Ln!==J._v$13&&he.classList.toggle("w-7",J._v$13=Ln),mt!==J._v$14&&(he.disabled=J._v$14=mt),bn!==J._v$15&&we.classList.toggle("bg-primary-disabled",J._v$15=bn),Pn!==J._v$16&&we.classList.toggle("bg-primary",J._v$16=Pn),xi!==J._v$17&&we.classList.toggle("h-8",J._v$17=xi),ye!==J._v$18&&we.classList.toggle("w-8",J._v$18=ye),Vn!==J._v$19&&we.classList.toggle("h-7",J._v$19=Vn),Gt!==J._v$20&&we.classList.toggle("w-7",J._v$20=Gt),Ft!==J._v$21&&(we.disabled=J._v$21=Ft),J},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Be(()=>ue.value=i()),G})()};ct(["input","keydown","click"]);const XS=()=>{let e;const[t,n]=$e(!1),i=o=>{e=o};return an(()=>{e!=null&&n(e.scrollHeight>e.clientHeight)}),{overflow:t,elementRef:i}},eT=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),tT=j('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),nT=j('<img alt="icon" class="h-full w-full rounded object-cover">'),rT=e=>{const{overflow:t,elementRef:n}=XS(),i=bm(),[o,a]=$e(),c=()=>i(e.createdAt);return(()=>{const u=tT(),d=u.firstChild,h=d.firstChild,p=h.nextSibling,g=p.firstChild,v=g.firstChild,x=v.nextSibling,k=x.firstChild,w=g.nextSibling,E=w.nextSibling;return h.$$click=_=>{_.preventDefault(),e.onShowProfile?.()},O(h,$(de,{get when(){return e.authorPictureUrl},keyed:!0,children:_=>(()=>{const A=nT();return gt(A,"src",_),A})()})),v.$$click=_=>{_.preventDefault(),e?.onShowProfile?.()},O(v,()=>e.author),k.$$click=_=>{_.preventDefault(),e.onShowEvent?.()},O(k,c),mr(n,w),O(w,()=>e.content),O(p,$(de,{get when(){return t()},get children(){const _=eT();return _.$$click=A=>{A.stopPropagation(),a(R=>!R)},O(_,$(de,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),_}}),E),O(E,()=>e.actions),O(u,$(de,{get when(){return e.footer},get children(){return e.footer}}),null),Be(()=>w.classList.toggle("max-h-screen",!o())),u})()};ct(["click"]);const Xm=Cx(),iT=()=>Sx(Xm),sT=()=>{const[e,t]=Ki({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},oT=/\p{Emoji_Presentation}/u,aT=e=>{const t=rs(),n=Fe(e),i=Fe(()=>["useReactions",n()]),o=is(i,({queryKey:p,signal:g})=>{const[,v]=p;if(v==null)return[];const{eventId:x}=v,k=bo({type:"Reactions",mentionedEventId:x},g).then(w=>{const E=()=>w().events;return rl(w).subscribe(()=>{t.setQueryData(p,E())}),E()});return Qr(15e3,`useReactions: ${x}`)(k)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const p=new Map;return a().forEach(g=>{const v=p.get(g.content)??[];v.push(g),p.set(g.content,v)}),p},isReactedBy:p=>a().findIndex(g=>g.pubkey===p)!==-1,isReactedByWithEmoji:p=>a().findIndex(g=>g.pubkey===p&&oT.test(g.content))!==-1,invalidateReactions:()=>t.invalidateQueries(i()),query:o}},lT=e=>{const t=rs(),n=Fe(e),i=Fe(()=>["useReposts",n()]),o=is(i,({queryKey:d,signal:h})=>{const[,p]=d;if(p==null)return[];const{eventId:g}=p,v=bo({type:"Reposts",mentionedEventId:g},h).then(x=>{const k=()=>x().events;return rl(x).subscribe(()=>{t.setQueryData(d,k())}),k()});return Qr(15e3,`useReposts: ${g}`)(v)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(h=>h.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(i()),query:o}},cT=j('<div class="flex gap-2 py-1">'),uT=j('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),dT=j('<span class="ml-1 text-sm">'),fT=j('<button class="flex h-6 items-center rounded border px-1" type="button">'),hT=j('<span class="text-base">'),pT=j('<span class="text-red-500">削除'),gT=j('<div class="nostr-textnote">'),mT=j('<div class="author-name truncate pr-1 font-bold hover:underline">'),vT=j('<span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600">'),bT=j('<div class="text-xs">への返信'),yT=j('<div class="content whitespace-pre-wrap break-all">'),_T=j('<div class="textnote-content">'),wT=j('<div class="mt-1 rounded border p-1">'),xT=j('<button class="pr-1 text-blue-500 hover:underline">'),O0=j('<div class="text-sm text-zinc-400">'),$T=j('<span class="inline-block h-4 w-4">'),kT=j('<div class="flex shrink-0 items-center gap-1">'),ET=j('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),CT=j('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),{noteEncode:ST}=mo,TT=e=>{const{config:t}=Ue(),n=yr();return(()=>{const i=cT();return O(i,$(Ot,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=fT();return u.$$click=()=>e.onReaction(o),O(u,$(de,{when:o==="+",get fallback(){return(()=>{const d=hT();return O(d,o),d})()},get children(){const d=uT();return O(d,$(Ed,{})),d}}),null),O(u,$(de,{get when(){return!t().hideCount},get children(){const d=dT();return O(d,()=>a.length),d}}),null),Be(d=>Ds(u,{"text-zinc-400":!c,"hover:bg-zinc-50":!c,"bg-rose-50":c,"border-rose-200":c,"text-rose-400":c},d)),u})()}})),i})()},ev=e=>{const{config:t}=Ue(),n=yr(),{showProfile:i}=Yr(),o=iT(),[a,c]=$e(!1),[u,d]=$e(!1),[h,p]=$e(!1),g=()=>p(!1),v=Fe(()=>El(e.event)),x=()=>e.embedding??!0,k=()=>e.actions??!0,{profile:w}=hs(()=>({pubkey:e.event.pubkey})),{reactions:E,reactionsGroupedByContent:_,isReactedBy:A,isReactedByWithEmoji:R,invalidateReactions:T,query:B}=aT(()=>({eventId:e.event.id})),{reposts:C,isRepostedBy:P,invalidateReposts:U,query:te}=lT(()=>({eventId:e.event.id})),W=Ol(),Y=pi({mutationKey:["publishReaction",v().id],mutationFn:W.publishReaction.bind(W),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:Q=>{console.error("failed to publish reaction: ",Q)},onSettled:()=>{T().then(()=>B.refetch()).catch(Q=>console.error("failed to refetch reactions",Q))}}),Z=pi({mutationKey:["publishRepost",v().id],mutationFn:W.publishRepost.bind(W),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:Q=>{console.error("failed to publish repost: ",Q)},onSettled:()=>{U().then(()=>te.refetch()).catch(Q=>console.error("failed to refetch reposts",Q))}}),X=pi({mutationKey:["deleteEvent",v().id],mutationFn:(...Q)=>W.deleteEvent(...Q).then(he=>Promise.allSettled(he.map(Qr(1e4)))),onSuccess:Q=>{const he=Q.filter(Re=>Re.status==="fulfilled").length,we=Q.length-he;he===Q.length?window.alert("削除しました（画面の反映にはリロード）"):he>0?window.alert(`${we}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:Q=>{console.error("failed to delete",Q)}}),se=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(ST(e.event.id)).catch(Q=>window.alert(Q))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event,null,2)).catch(Q=>window.alert(Q))}},{when:()=>v().pubkey===n(),content:()=>pT(),onSelect:()=>{const Q=n();Q!=null&&window.confirm("本当に削除しますか？")&&X.mutate({relayUrls:t().relayUrls,pubkey:Q,eventId:v().id})}}],q=Fe(()=>{const Q=n();return Q!=null&&A(Q)||a()}),D=Fe(()=>{const Q=n();return Q!=null&&R(Q)}),ne=Fe(()=>{const Q=n();return Q!=null&&P(Q)||u()}),G=()=>{if(x()){const Q=v().replyingToEvent();if(Q!=null&&!v().containsEventMention(Q.id))return Q.id;const he=v().rootEvent();if(Q==null&&he!=null&&!v().containsEventMention(he.id))return he.id}},ae=Q=>{Q.stopPropagation(),!ne()&&on([n(),e.event.id])(([he,we])=>{Z.mutate({relayUrls:t().relayUrls,pubkey:he,eventId:we,notifyPubkey:e.event.pubkey}),d(!0)})},ue=Q=>{q()||on([n(),e.event.id])(([he,we])=>{Y.mutate({relayUrls:t().relayUrls,pubkey:he,content:Q??"+",eventId:we,notifyPubkey:e.event.pubkey}),c(!0)})},re=Q=>{Q.stopPropagation(),ue()};return(()=>{const Q=gT();return O(Q,$(rT,{get author(){return(()=>{const he=vT(),we=he.firstChild;return O(he,$(de,{get when(){return(w()?.display_name?.length??0)>0},get children(){const Re=mT();return O(Re,()=>w()?.display_name),Re}}),we),O(we,$(de,{get when(){return w()?.name!=null},get fallback(){return`@${Sl(v().pubkey)}`},get children(){return["@",Fe(()=>w()?.name)]}})),he})()},get authorPictureUrl(){return w()?.picture},get createdAt(){return v().createdAtAsDate()},get content(){return(()=>{const he=_T();return O(he,$(de,{get when(){return G()},keyed:!0,children:we=>(()=>{const Re=wT();return O(Re,$(ao,{eventId:we,actions:!1,embedding:!1})),Re})()}),null),O(he,$(de,{get when(){return v().taggedPubkeys().length>0},get children(){const we=bT(),Re=we.firstChild;return O(we,$(Ot,{get each(){return v().taggedPubkeys()},children:Je=>(()=>{const J=xT();return J.$$click=qe=>{qe.stopPropagation(),i(Je)},O(J,$(Gm,{pubkey:Je})),J})()}),Re),we}}),null),O(he,$(mS,{get contentWarning(){return v().contentWarning()},get children(){const we=yT();return O(we,$(OS,{get event(){return e.event},get embedding(){return x()}})),we}}),null),he})()},get actions(){return $(de,{get when(){return k()},get children(){return[$(de,{get when(){return Fe(()=>!!t().showEmojiReaction)()&&E().length>0},get children(){return $(TT,{get reactionsGroupedByContent(){return _()},onReaction:ue})}}),(()=>{const he=CT(),we=he.firstChild,Re=we.nextSibling,Je=Re.firstChild,J=Re.nextSibling,qe=J.firstChild,nt=J.nextSibling;return we.$$click=Te=>{Te.stopPropagation(),p(Xe=>!Xe)},O(we,$(mC,{})),Je.$$click=ae,O(Je,$(V1,{})),O(Re,$(de,{get when(){return Fe(()=>!t().hideCount)()&&C().length>0},get children(){const Te=O0();return O(Te,()=>C().length),Te}}),null),qe.$$click=re,O(qe,$(de,{get when(){return Fe(()=>!!q())()&&!D()},get fallback(){return $(kd,{})},get children(){return $(Ed,{})}})),O(J,$(de,{get when(){return Fe(()=>!t().hideCount&&!t().showEmojiReaction)()&&E().length>0},get children(){const Te=O0();return O(Te,()=>E().length),Te}}),null),O(he,$(de,{get when(){return t().useEmojiReaction},get children(){const Te=kT();return O(Te,$(Vm,{onEmojiSelect:Xe=>ue(Xe),get children(){const Xe=$T();return O(Xe,$(wm,{})),Xe}})),Be(Xe=>Ds(Te,{"text-zinc-400":!q()||!D(),"hover:text-rose-400":!q()||!D(),"text-rose-400":q()&&D()||Y.isLoading},Xe)),Te}}),nt),O(nt,$(xm,{menu:se,get children(){const Te=ET();return O(Te,$(_m,{})),Te}})),Be(Te=>{const Xe={"text-zinc-400":!ne(),"hover:text-green-400":!ne(),"text-green-400":ne()||Z.isLoading},rt=Z.isLoading,Tt={"text-zinc-400":!q()||D(),"hover:text-rose-400":!q()||D(),"text-rose-400":q()&&!D()||Y.isLoading},Ve=Y.isLoading;return Te._v$=Ds(Re,Xe,Te._v$),rt!==Te._v$2&&(Je.disabled=Te._v$2=rt),Te._v$3=Ds(J,Tt,Te._v$3),Ve!==Te._v$4&&(qe.disabled=Te._v$4=Ve),Te},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),he})()]}})},get footer(){return $(de,{get when(){return h()},get children(){return $(Jm,{mode:"reply",get replyTo(){return e.event},onClose:g,onPost:g})}})},onShowProfile:()=>{i(v().pubkey)},onShowEvent:()=>{o?.setTimeline({type:"Replies",event:e.event})}})),Q})()};ct(["click"]);const tv=e=>{const{shouldMuteEvent:t}=Ue();return $(de,{get when(){return!t(e.event)},get children(){return $(ev,e)}})},AT=j("<span>予期しないイベント種別（<!>）"),IT=j("<span><span>未対応のイベント種別（<!>）"),nv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return $(Sn,{get fallback(){return(()=>{const n=IT(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,O(i,()=>e.event.kind,a),O(n,$(Vs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[$(De,{get when(){return!t()},keyed:!0,get children(){const n=AT(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,O(n,()=>e.event.kind,o),O(n,$(Vs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),$(De,{get when(){return e.event.kind===lt.Text},get children(){return $(tv,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),$(De,{get when(){return e.event.kind===6},get children(){return $(ym,{get event(){return e.event}})}})]}})},ps=e=>{const{shouldMuteEvent:t}=Ue();return $(Ot,{get each(){return e.events},children:n=>$(de,{get when(){return!t(n)},get children(){return $(wa,{get children(){return $(nv,{event:n})}})}})})};var RT=al;function OT(){this.__data__=new RT,this.size=0}var LT=OT;function PT(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var MT=PT;function BT(e){return this.__data__.get(e)}var jT=BT;function UT(e){return this.__data__.has(e)}var NT=UT,DT=al,zT=Ju,HT=Xu,FT=200;function qT(e,t){var n=this.__data__;if(n instanceof DT){var i=n.__data__;if(!zT||i.length<FT-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new HT(i)}return n.set(e,t),this.size=n.size,this}var WT=qT,ZT=al,KT=LT,VT=MT,GT=jT,QT=NT,YT=WT;function gs(e){var t=this.__data__=new ZT(e);this.size=t.size}gs.prototype.clear=KT;gs.prototype.delete=VT;gs.prototype.get=GT;gs.prototype.has=QT;gs.prototype.set=YT;var Id=gs;function JT(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var XT=JT,eA=Og,tA=XT,nA=Lg,rA=1,iA=2;function sA(e,t,n,i,o,a){var c=n&rA,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var g=-1,v=!0,x=n&iA?new eA:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var k=e[g],w=t[g];if(i)var E=c?i(w,k,g,t,e,a):i(k,w,g,e,t,a);if(E!==void 0){if(E)continue;v=!1;break}if(x){if(!tA(t,function(_,A){if(!nA(x,A)&&(k===_||o(k,_,n,i,a)))return x.push(A)})){v=!1;break}}else if(!(k===w||o(k,w,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var rv=sA,oA=Rn,aA=oA.Uint8Array,iv=aA;function lA(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var cA=lA,L0=ss,P0=iv,uA=Yu,dA=rv,fA=cA,hA=ed,pA=1,gA=2,mA="[object Boolean]",vA="[object Date]",bA="[object Error]",yA="[object Map]",_A="[object Number]",wA="[object RegExp]",xA="[object Set]",$A="[object String]",kA="[object Symbol]",EA="[object ArrayBuffer]",CA="[object DataView]",M0=L0?L0.prototype:void 0,hu=M0?M0.valueOf:void 0;function SA(e,t,n,i,o,a,c){switch(n){case CA:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case EA:return!(e.byteLength!=t.byteLength||!a(new P0(e),new P0(t)));case mA:case vA:case _A:return uA(+e,+t);case bA:return e.name==t.name&&e.message==t.message;case wA:case $A:return e==t+"";case yA:var u=fA;case xA:var d=i&pA;if(u||(u=hA),e.size!=t.size&&!d)return!1;var h=c.get(e);if(h)return h==t;i|=gA,c.set(e,t);var p=dA(u(e),u(t),i,o,a,c);return c.delete(e),p;case kA:if(hu)return hu.call(e)==hu.call(t)}return!1}var TA=SA;function AA(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Rd=AA,IA=Array.isArray,Zn=IA,RA=Rd,OA=Zn;function LA(e,t,n){var i=t(e);return OA(e)?i:RA(i,n(e))}var sv=LA;function PA(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}var MA=PA;function BA(){return[]}var ov=BA,jA=MA,UA=ov,NA=Object.prototype,DA=NA.propertyIsEnumerable,B0=Object.getOwnPropertySymbols,zA=B0?function(e){return e==null?[]:(e=Object(e),jA(B0(e),function(t){return DA.call(e,t)}))}:UA,Od=zA;function HA(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var FA=HA;function qA(e){return e!=null&&typeof e=="object"}var Jr=qA,WA=os,ZA=Jr,KA="[object Arguments]";function VA(e){return ZA(e)&&WA(e)==KA}var GA=VA,j0=GA,QA=Jr,av=Object.prototype,YA=av.hasOwnProperty,JA=av.propertyIsEnumerable,XA=j0(function(){return arguments}())?j0:function(e){return QA(e)&&YA.call(e,"callee")&&!JA.call(e,"callee")},Ld=XA,Xa={exports:{}};function eI(){return!1}var tI=eI;Xa.exports;(function(e,t){var n=Rn,i=tI,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?n.Buffer:void 0,d=u?u.isBuffer:void 0,h=d||i;e.exports=h})(Xa,Xa.exports);var Pd=Xa.exports,nI=9007199254740991,rI=/^(?:0|[1-9]\d*)$/;function iI(e,t){var n=typeof e;return t=t??nI,!!t&&(n=="number"||n!="symbol"&&rI.test(e))&&e>-1&&e%1==0&&e<t}var Md=iI,sI=9007199254740991;function oI(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=sI}var Bd=oI,aI=os,lI=Bd,cI=Jr,uI="[object Arguments]",dI="[object Array]",fI="[object Boolean]",hI="[object Date]",pI="[object Error]",gI="[object Function]",mI="[object Map]",vI="[object Number]",bI="[object Object]",yI="[object RegExp]",_I="[object Set]",wI="[object String]",xI="[object WeakMap]",$I="[object ArrayBuffer]",kI="[object DataView]",EI="[object Float32Array]",CI="[object Float64Array]",SI="[object Int8Array]",TI="[object Int16Array]",AI="[object Int32Array]",II="[object Uint8Array]",RI="[object Uint8ClampedArray]",OI="[object Uint16Array]",LI="[object Uint32Array]",tt={};tt[EI]=tt[CI]=tt[SI]=tt[TI]=tt[AI]=tt[II]=tt[RI]=tt[OI]=tt[LI]=!0;tt[uI]=tt[dI]=tt[$I]=tt[fI]=tt[kI]=tt[hI]=tt[pI]=tt[gI]=tt[mI]=tt[vI]=tt[bI]=tt[yI]=tt[_I]=tt[wI]=tt[xI]=!1;function PI(e){return cI(e)&&lI(e.length)&&!!tt[aI(e)]}var MI=PI;function BI(e){return function(t){return e(t)}}var jd=BI,el={exports:{}};el.exports;(function(e,t){var n=Tg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(el,el.exports);var Ud=el.exports,jI=MI,UI=jd,U0=Ud,N0=U0&&U0.isTypedArray,NI=N0?UI(N0):jI,lv=NI,DI=FA,zI=Ld,HI=Zn,FI=Pd,qI=Md,WI=lv,ZI=Object.prototype,KI=ZI.hasOwnProperty;function VI(e,t){var n=HI(e),i=!n&&zI(e),o=!n&&!i&&FI(e),a=!n&&!i&&!o&&WI(e),c=n||i||o||a,u=c?DI(e.length,String):[],d=u.length;for(var h in e)(t||KI.call(e,h))&&!(c&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||qI(h,d)))&&u.push(h);return u}var cv=VI,GI=Object.prototype;function QI(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||GI;return e===n}var Nd=QI;function YI(e,t){return function(n){return e(t(n))}}var uv=YI,JI=uv,XI=JI(Object.keys,Object),eR=XI,tR=Nd,nR=eR,rR=Object.prototype,iR=rR.hasOwnProperty;function sR(e){if(!tR(e))return nR(e);var t=[];for(var n in Object(e))iR.call(e,n)&&n!="constructor"&&t.push(n);return t}var oR=sR,aR=Ig,lR=Bd;function cR(e){return e!=null&&lR(e.length)&&!aR(e)}var dv=cR,uR=cv,dR=oR,fR=dv;function hR(e){return fR(e)?uR(e):dR(e)}var Ll=hR,pR=sv,gR=Od,mR=Ll;function vR(e){return pR(e,mR,gR)}var fv=vR,D0=fv,bR=1,yR=Object.prototype,_R=yR.hasOwnProperty;function wR(e,t,n,i,o,a){var c=n&bR,u=D0(e),d=u.length,h=D0(t),p=h.length;if(d!=p&&!c)return!1;for(var g=d;g--;){var v=u[g];if(!(c?v in t:_R.call(t,v)))return!1}var x=a.get(e),k=a.get(t);if(x&&k)return x==t&&k==e;var w=!0;a.set(e,t),a.set(t,e);for(var E=c;++g<d;){v=u[g];var _=e[v],A=t[v];if(i)var R=c?i(A,_,v,t,e,a):i(_,A,v,e,t,a);if(!(R===void 0?_===A||o(_,A,n,i,a):R)){w=!1;break}E||(E=v=="constructor")}if(w&&!E){var T=e.constructor,B=t.constructor;T!=B&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof B=="function"&&B instanceof B)&&(w=!1)}return a.delete(e),a.delete(t),w}var xR=wR,$R=_i,kR=Rn,ER=$R(kR,"DataView"),CR=ER,SR=_i,TR=Rn,AR=SR(TR,"Promise"),IR=AR,RR=_i,OR=Rn,LR=RR(OR,"WeakMap"),PR=LR,Du=CR,zu=Ju,Hu=IR,Fu=Pg,qu=PR,hv=os,ms=Rg,z0="[object Map]",MR="[object Object]",H0="[object Promise]",F0="[object Set]",q0="[object WeakMap]",W0="[object DataView]",BR=ms(Du),jR=ms(zu),UR=ms(Hu),NR=ms(Fu),DR=ms(qu),li=hv;(Du&&li(new Du(new ArrayBuffer(1)))!=W0||zu&&li(new zu)!=z0||Hu&&li(Hu.resolve())!=H0||Fu&&li(new Fu)!=F0||qu&&li(new qu)!=q0)&&(li=function(e){var t=hv(e),n=t==MR?e.constructor:void 0,i=n?ms(n):"";if(i)switch(i){case BR:return W0;case jR:return z0;case UR:return H0;case NR:return F0;case DR:return q0}return t});var Pl=li,pu=Id,zR=rv,HR=TA,FR=xR,Z0=Pl,K0=Zn,V0=Pd,qR=lv,WR=1,G0="[object Arguments]",Q0="[object Array]",_a="[object Object]",ZR=Object.prototype,Y0=ZR.hasOwnProperty;function KR(e,t,n,i,o,a){var c=K0(e),u=K0(t),d=c?Q0:Z0(e),h=u?Q0:Z0(t);d=d==G0?_a:d,h=h==G0?_a:h;var p=d==_a,g=h==_a,v=d==h;if(v&&V0(e)){if(!V0(t))return!1;c=!0,p=!1}if(v&&!p)return a||(a=new pu),c||qR(e)?zR(e,t,n,i,o,a):HR(e,t,d,n,i,o,a);if(!(n&WR)){var x=p&&Y0.call(e,"__wrapped__"),k=g&&Y0.call(t,"__wrapped__");if(x||k){var w=x?e.value():e,E=k?t.value():t;return a||(a=new pu),o(w,E,n,i,a)}}return v?(a||(a=new pu),FR(e,t,n,i,o,a)):!1}var VR=KR,GR=VR,J0=Jr;function pv(e,t,n,i,o){return e===t?!0:e==null||t==null||!J0(e)&&!J0(t)?e!==e&&t!==t:GR(e,t,n,i,pv,o)}var gv=pv,QR=Id,YR=gv,JR=1,XR=2;function eO(e,t,n,i){var o=n.length,a=o,c=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],h=e[d],p=u[1];if(c&&u[2]){if(h===void 0&&!(d in e))return!1}else{var g=new QR;if(i)var v=i(h,p,d,e,t,g);if(!(v===void 0?YR(p,h,JR|XR,i,g):v))return!1}}return!0}var tO=eO,nO=Fn;function rO(e){return e===e&&!nO(e)}var mv=rO,iO=mv,sO=Ll;function oO(e){for(var t=sO(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,iO(o)]}return t}var aO=oO;function lO(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var vv=lO,cO=tO,uO=aO,dO=vv;function fO(e){var t=uO(e);return t.length==1&&t[0][2]?dO(t[0][0],t[0][1]):function(n){return n===e||cO(n,e,t)}}var hO=fO,pO=os,gO=Jr,mO="[object Symbol]";function vO(e){return typeof e=="symbol"||gO(e)&&pO(e)==mO}var Ml=vO,bO=Zn,yO=Ml,_O=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wO=/^\w*$/;function xO(e,t){if(bO(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||yO(e)?!0:wO.test(e)||!_O.test(e)||t!=null&&e in Object(t)}var Dd=xO,bv=Xu,$O="Expected a function";function zd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError($O);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,i);return n.cache=a.set(o,c)||a,c};return n.cache=new(zd.Cache||bv),n}zd.Cache=bv;var kO=zd,EO=kO,CO=500;function SO(e){var t=EO(e,function(i){return n.size===CO&&n.clear(),i}),n=t.cache;return t}var TO=SO,AO=TO,IO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,RO=/\\(\\)?/g,OO=AO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(IO,function(n,i,o,a){t.push(o?a.replace(RO,"$1"):i||n)}),t}),LO=OO;function PO(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Hd=PO,X0=ss,MO=Hd,BO=Zn,jO=Ml,UO=1/0,eg=X0?X0.prototype:void 0,tg=eg?eg.toString:void 0;function yv(e){if(typeof e=="string")return e;if(BO(e))return MO(e,yv)+"";if(jO(e))return tg?tg.call(e):"";var t=e+"";return t=="0"&&1/e==-UO?"-0":t}var NO=yv,DO=NO;function zO(e){return e==null?"":DO(e)}var HO=zO,FO=Zn,qO=Dd,WO=LO,ZO=HO;function KO(e,t){return FO(e)?e:qO(e,t)?[e]:WO(ZO(e))}var vs=KO,VO=Ml,GO=1/0;function QO(e){if(typeof e=="string"||VO(e))return e;var t=e+"";return t=="0"&&1/e==-GO?"-0":t}var bs=QO,YO=vs,JO=bs;function XO(e,t){t=YO(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[JO(t[n++])];return n&&n==i?e:void 0}var Bl=XO,eL=Bl;function tL(e,t,n){var i=e==null?void 0:eL(e,t);return i===void 0?n:i}var nL=tL;function rL(e,t){return e!=null&&t in Object(e)}var iL=rL,sL=vs,oL=Ld,aL=Zn,lL=Md,cL=Bd,uL=bs;function dL(e,t,n){t=sL(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var c=uL(t[i]);if(!(a=e!=null&&n(e,c)))break;e=e[c]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&cL(o)&&lL(c,o)&&(aL(e)||oL(e)))}var fL=dL,hL=iL,pL=fL;function gL(e,t){return e!=null&&pL(e,t,hL)}var mL=gL,vL=gv,bL=nL,yL=mL,_L=Dd,wL=mv,xL=vv,$L=bs,kL=1,EL=2;function CL(e,t){return _L(e)&&wL(t)?xL($L(e),t):function(n){var i=bL(n,e);return i===void 0&&i===t?yL(n,e):vL(t,i,kL|EL)}}var SL=CL;function TL(e){return e}var _v=TL;function AL(e){return function(t){return t?.[e]}}var IL=AL,RL=Bl;function OL(e){return function(t){return RL(t,e)}}var LL=OL,PL=IL,ML=LL,BL=Dd,jL=bs;function UL(e){return BL(e)?PL(jL(e)):ML(e)}var NL=UL,DL=hO,zL=SL,HL=_v,FL=Zn,qL=NL;function WL(e){return typeof e=="function"?e:e==null?HL:typeof e=="object"?FL(e)?zL(e[0],e[1]):DL(e):qL(e)}var Fd=WL,ZL=Fd,KL=Mg;function VL(e,t){return e&&e.length?KL(e,ZL(t)):[]}var GL=VL;const wv=lo(GL),gu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ca=0;const{setActiveSubscriptions:QL}=hm();setInterval(()=>{QL(Ca)},1e3);const _r=e=>{const{config:t,shouldMuteEvent:n}=Ue(),i=Cl(),[o,a]=$e([]);dr(nl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(h=>!n(h)))},{defer:!0})),an(()=>{console.debug("subscription mounted",e()?.debugId,e()),gr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const c=d=>{const h=e()?.limit??50;a(p=>{const g=gu([d,...p].slice(0,h)),v=wv(g,x=>x.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:h,filters:p,options:g,onEvent:v,onEOSE:x,continuous:k=!0}=d,w=i().sub(h,p,g);let E=!0;Ca+=1;let _=!1,A=!1;const R=[];w.on("event",C=>{v?.(C),!(d.clientEventFilter!=null&&!d.clientEventFilter(C))&&(A?c(C):(_=!0,R.push(C)))}),w.on("eose",()=>{x?.(),A=!0,a(gu(R)),k||(w.unsub(),E&&(E=!1,Ca-=1))});let T=!1;const B=setInterval(()=>{if(!T){if(T=!0,A){clearInterval(B),T=!1;return}_&&(_=!1,a(gu(R))),T=!1}},100);gr(()=>{console.debug("startSubscription: end"),w.unsub(),E&&(E=!1,Ca-=1),clearInterval(B)})};return dr(()=>{u()}),{events:o}},YL=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),fr(t)},JL=e=>{const{config:t}=Ue(),n=()=>El(e.event),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:YL(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return $(ps,{get events(){return[...i()].reverse()}})},XL=e=>$(Sn,{get children(){return $(De,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>$(JL,{get event(){return t.event}})})}}),eP=j('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),tP=j('<div class="shrink-0 border-b">'),nP=j('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),rP=j('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth">'),ys=e=>{let t;const n=sT(),i=()=>e.width??"medium";return Nu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Nu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),$(Xm.Provider,{value:n,get children(){const o=eP(),a=t;return typeof a=="function"?mr(a,o):t=o,O(o,$(de,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=tP();return O(c,()=>e.header),c})(),(()=>{const c=nP();return O(c,()=>e.children),c})()]},children:c=>(()=>{const u=rP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=d.nextSibling;return h.$$click=()=>n?.clearTimeline(),O(p,$(Qu,{})),O(g,$(XL,{timelineContent:c})),u})()})),Be(c=>Ds(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},c)),o}})};ct(["click"]);const iP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),sP=(e={})=>(()=>{const t=iP();return Ke(t,e,!0,!0),t})(),oP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),aP=(e={})=>(()=>{const t=oP();return Ke(t,e,!0,!0),t})(),lP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),cP=(e={})=>(()=>{const t=lP();return Ke(t,e,!0,!0),t})(),uP=j('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),dP=j('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),fP=j('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),hP=e=>(()=>{const t=uP(),n=t.firstChild,i=n.nextSibling;return O(n,()=>e.title),O(i,()=>e.children),t})(),_s=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=Ue(),o=yo(),a=u=>{t({...e.column,width:u})},c=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=fP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=h.nextSibling,v=g.firstChild,x=g.nextSibling,k=x.nextSibling,w=k.firstChild;return O(u,$(hP,{title:"カラム幅",get children(){const E=dP(),_=E.firstChild,A=_.nextSibling,R=A.nextSibling,T=R.nextSibling;return _.$$click=()=>a("widest"),A.$$click=()=>a("wide"),R.$$click=()=>a("medium"),T.$$click=()=>a("narrow"),E}}),d),h.$$click=()=>c(e.columnIndex-1),O(p,$(sP,{})),g.$$click=()=>c(e.columnIndex+1),O(v,$(aP,{})),k.$$click=()=>n(e.column.id),O(w,$(cP,{})),u})()};ct(["click"]);const pr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>pr(n)(t));case"OR":return e.children.some(n=>pr(n)(t));case"NOT":return!pr(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Wu=e=>{const t=rs(),n=Fe(e),i=()=>["useFollowings",n()],o=is(i,({queryKey:d,signal:h})=>{console.debug("useFollowings");const[,p]=d;if(p==null)return Promise.resolve(null);const{pubkey:g}=p,v=bo({type:"Followings",pubkey:g},h).then(x=>{const k=()=>{const w=pm(x().events);if(w==null)throw new Error(`followings not found: ${g}`);return w};return rl(x).subscribe(()=>{try{t.setQueryData(d,k())}catch(w){console.error("error occurred while updating followings cache: ",w)}}),k()});return Qr(15e3,`useFollowings: ${g}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return Dr(o.data).pTags().forEach(p=>{const[,g,v,x]=p,k={pubkey:g,petname:x};v!=null&&v.length>0&&(k.mainRelayUrl=v),d.push(k)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},pP=e=>{const{config:t,removeColumn:n}=Ue(),{followingPubkeys:i}=Wu(()=>({pubkey:e.column.pubkey})),{events:o}=_r(()=>{const a=Dx.uniq([...i()]);return a.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:lr()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:pr(e.column.contentFilter)(c.content)}});return dr(()=>{console.log("home",o())}),an(()=>console.log("home timeline mounted")),gr(()=>console.log("home timeline unmounted")),$(ys,{get header(){return $(co,{get name(){return e.column.name??"ホーム"},get icon(){return $(Cg,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return o()}})}})},gP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),xv=(e={})=>(()=>{const t=gP();return Ke(t,e,!0,!0),t})(),mP=j('<span class="h-4 w-4 pt-[1px] text-rose-400">'),vP=j('<img alt="icon" class="rounded">'),bP=j('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),yP=j('<div class="notification-event py-1">'),_P=j('<div class="truncate">読み込み中 '),wP=e=>{const{shouldMuteEvent:t}=Ue(),{showProfile:n}=Yr(),i=()=>Dr(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=hs(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=gm(()=>on([o()])(([h])=>({eventId:h}))),d=()=>u.isSuccess&&c()==null;return $(de,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const h=bP(),p=h.firstChild,g=p.nextSibling,v=g.firstChild,x=v.nextSibling,k=x.firstChild;return O(p,$(Sn,{get fallback(){return e.event.content},get children(){return $(De,{get when(){return e.event.content==="+"},get children(){const w=mP();return O(w,$(Ed,{})),w}})}})),O(v,$(de,{get when(){return a()?.picture!=null},get children(){const w=vP();return Be(()=>gt(w,"src",a()?.picture)),w}})),k.$$click=()=>n(e.event.pubkey),O(k,$(Tl,{get pubkey(){return e.event.pubkey}})),h})(),(()=>{const h=yP();return O(h,$(de,{get when(){return c()},get fallback(){return(()=>{const p=_P();return p.firstChild,O(p,o,null),p})()},keyed:!0,children:p=>$(ev,{event:p})})),h})()]}})};ct(["click"]);const xP=j("<div>unknown event"),$v=e=>{const{shouldMuteEvent:t}=Ue();return $(Ot,{get each(){return e.events},children:n=>$(de,{get when(){return!t(n)},get children(){return $(Sn,{get fallback(){return xP()},get children(){return[$(De,{get when(){return n.kind===lt.Text},get children(){return $(wa,{get children(){return $(tv,{event:n})}})}}),$(De,{get when(){return n.kind===lt.Reaction},get children(){return $(wa,{get children(){return $(wP,{event:n})}})}}),$(De,{get when(){return n.kind===6},get children(){return $(wa,{get children(){return $(ym,{event:n})}})}})]}})}})})},$P=e=>{const{config:t,removeColumn:n}=Ue(),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:pr(e.column.contentFilter)(o.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"通知"},get icon(){return $(xv,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $($v,{get events(){return i()}})}})},kP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),qd=(e={})=>(()=>{const t=kP();return Ke(t,e,!0,!0),t})(),EP=e=>{const{config:t,removeColumn:n}=Ue(),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:pr(e.column.contentFilter)(o.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"投稿"},get icon(){return $(qd,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return i()}})}})},CP=e=>{const{config:t,removeColumn:n}=Ue(),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:pr(e.column.contentFilter)(o.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"リアクション"},get icon(){return $(kd,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $($v,{get events(){return i()}})}})},SP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Wd=(e={})=>(()=>{const t=SP();return Ke(t,e,!0,!0),t})(),TP=e=>{const{removeColumn:t}=Ue(),{events:n}=_r(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:lr()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:pr(e.column.contentFilter)(i.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"リレー"},get icon(){return $(Wd,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return n()}})}})},AP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),kv=(e={})=>(()=>{const t=AP();return Ke(t,e,!0,!0),t})(),IP=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),RP=e=>{const[t,n]=$e(!1),[i,o]=$e(""),{saveColumn:a}=Ue(),c=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},h=g=>{o(g.currentTarget.value)},p=g=>{g.preventDefault(),u()};return an(()=>{o(e.column.query)}),(()=>{const g=IP(),v=g.firstChild,x=v.firstChild,k=x.firstChild,w=x.nextSibling,E=w.firstChild,_=w.nextSibling;return O(k,$(kv,{})),w.addEventListener("submit",p),E.addEventListener("blur",d),E.addEventListener("change",h),_.$$click=()=>c(),O(_,$(Sg,{})),O(g,$(de,{get when(){return t()},get children(){return e.settings()}}),null),Be(()=>E.value=i()),g})()},OP=e=>{const{removeColumn:t}=Ue(),{events:n}=_r(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:Tk,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:pr(e.column.contentFilter)(o.content)}});return $(ys,{get header(){return $(RP,{get column(){return e.column},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return n()}})}})};ct(["click"]);const LP=j('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),PP=()=>{const{config:e}=Ue();return(()=>{const t=LP();return O(t,$(Ot,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return $(Sn,{get children(){return[$(De,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:c=>$(pP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(De,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:c=>$($P,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(De,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:c=>$(EP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(De,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:c=>$(CP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(De,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:c=>$(TP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(De,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:c=>$(OP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},MP=j('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),BP=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=MP();i.$$click=n;const o=t;return typeof o=="function"?mr(o,i):t=i,O(i,()=>e.children),i})()};ct(["click"]);const jP=j('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),_o=e=>$(BP,{onClose:()=>e.onClose?.(),get children(){const t=jP(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),O(i,$(de,{get when(){return e?.closeButton},get fallback(){return $(ns,{})},keyed:!0,children:a=>a()})),O(o,()=>e.children),t}});ct(["click"]);const UP=j('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),NP=j('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),DP=j('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),zP=async()=>{const t=await(await fetch(Vu("packageInfo.json"))).text();return JSON.parse(t)},HP=e=>{const[t]=kg(zP);return $(_o,{get onClose(){return e.onClose},get children(){const n=UP(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=i.nextSibling,h=d.nextSibling,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,x=v.nextSibling;x.nextSibling;const k=g.nextSibling,w=k.nextSibling,E=w.nextSibling,_=E.nextSibling,A=_.nextSibling,R=A.nextSibling,T=R.nextSibling;return T.nextSibling,O(u,()=>t()?.self?.version,null),O(g,$(Rl,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),x),O(T,()=>t()?.self.licenseText),O(n,$(Ot,{get each(){return t()?.packages??[]},fallback:"取得中",children:B=>[(()=>{const C=NP(),P=C.firstChild,U=P.nextSibling,te=U.nextSibling,W=te.nextSibling;return W.nextSibling,O(C,()=>B.name,P),O(C,()=>B.version,U),O(C,()=>B.licenseSpdx,W),C})(),(()=>{const C=DP();return O(C,()=>B.licenseText),C})()]}),null),Be(()=>gt(o,"src",Vu("images/rabbit_app_256.png"))),n}})},FP=j('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),qP=e=>{const t=yr(),{saveColumn:n}=Ue(),i=yo(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(g=>console.error(g))},a=()=>{on([t()])(([g])=>{n(Q1({pubkey:g}))}),o()},c=()=>{on([t()])(([g])=>{n(Y1({pubkey:g}))}),o()},u=()=>{n(J1()),o()},d=()=>{n($d({query:""})),o()},h=()=>{on([t()])(([g])=>{n(X1({pubkey:g}))}),o()},p=()=>{on([t()])(([g])=>{n(em({pubkey:g}))}),o()};return $(_o,{get onClose(){return e.onClose},get children(){const g=FP(),v=g.firstChild,x=v.firstChild,k=v.nextSibling,w=k.firstChild,E=k.nextSibling,_=E.firstChild,A=E.nextSibling,R=A.firstChild,T=A.nextSibling,B=T.firstChild,C=T.nextSibling,P=C.firstChild;return v.$$click=()=>a(),O(x,$(Cg,{})),k.$$click=()=>c(),O(w,$(xv,{})),E.$$click=()=>u(),O(_,$(Wd,{})),A.$$click=()=>d(),O(R,$(kv,{})),T.$$click=()=>h(),O(B,$(qd,{})),C.$$click=()=>p(),O(P,$(kd,{})),g}})};ct(["click"]);const WP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),ZP=(e={})=>(()=>{const t=WP();return Ke(t,e,!0,!0),t})(),KP=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),VP=(e={})=>(()=>{const t=KP();return Ke(t,e,!0,!0),t})(),GP=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),QP=(e={})=>(()=>{const t=GP();return Ke(t,e,!0,!0),t})();function YP(e){const{config:t}=Ue(),n=Fe(e),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[lt.Contacts],"#p":[n().pubkey]}],limit:1/0,continuous:!0})),o=()=>fr(i()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const JP=e=>{const t=Fe(e),n=is(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return W1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},XP=j('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),eM=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),tM=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),nM=j('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),rM=j('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),iM=j('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),sM=j('<div class="shrink-0 text-xs">読み込み中'),oM=j('<div class="shrink-0 text-xs">フォローされています'),aM=j('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),lM=j('<div class="truncate text-xl font-bold">'),cM=j('<div class="truncate text-xs">@'),uM=j('<span class="inline-block h-3 w-3">'),dM=j('<span class="inline-block h-4 w-4 text-blue-400">'),fM=j('<div class="flex items-center text-xs">'),hM=j('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),pM=j('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),gM=j('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),mM=j('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),vM=j('<ul class="border-t px-5 py-2 text-xs">'),bM=j('<ul class="border-t p-1">'),yM=j('<div class="h-12 shrink-0">'),_M=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),wM=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),xM=j('<span class="inline-block h-4 w-4 text-rose-500">'),$M=j('<span class="text-sm">読み込み中'),kM=j('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),EM=j('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),CM=e=>{const{count:t}=YP(()=>({pubkey:e.pubkey}));return Fe(t)},SM=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=Ue(),a=Ol(),c=yr(),{showProfileEdit:u}=Yr(),d=Fe(()=>Sl(e.pubkey)),[h,p]=$e(!1),[g,v]=$e(!1),{profile:x,query:k}=hs(()=>({pubkey:e.pubkey})),{verification:w,query:E}=JP(()=>on([x()?.nip05])(([D])=>({nip05:D}))),_=()=>{const D=x()?.nip05;if(D==null)return null;const[ne,G]=D.split("@");return G==null?null:ne==="_"?{domain:G,ident:G}:{user:ne,domain:G,ident:D}},A=()=>w()?.pubkey===e.pubkey,R=()=>o(e.pubkey),{followingPubkeys:T,invalidateFollowings:B,query:C}=Wu(()=>on([c()])(([D])=>({pubkey:D}))),P=()=>T().includes(e.pubkey),{followingPubkeys:U,query:te}=Wu(()=>({pubkey:e.pubkey})),W=()=>{const D=c();return D!=null&&U().includes(D)},Y=pi({mutationKey:["updateContacts"],mutationFn:(...D)=>a.updateContacts(...D).then(ne=>Promise.allSettled(ne.map(Qr(5e3)))),onSuccess:D=>{const ne=D.filter(ae=>ae.status==="fulfilled").length,G=D.length-ne;ne===D.length?console.log("succeeded to update contacts"):ne>0?console.log(`succeeded to update contacts for ${ne} relays but failed for ${G} relays`):console.error("failed to update contacts")},onError:D=>{console.error("failed to update contacts: ",D)},onSettled:()=>{B().then(()=>C.refetch()).catch(D=>console.error("failed to refetch contacts",D))}}),Z=()=>{const D=c();D!=null&&C.isFetched&&Y.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:fr([...T(),e.pubkey])})},X=()=>{const D=c();D!=null&&C.isFetched&&window.confirm("本当にフォロー解除しますか？")&&Y.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:T().filter(ne=>ne!==e.pubkey)})},se=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(D=>window.alert(D))}},{content:()=>R()?"ミュート解除":"ミュート",onSelect:()=>{R()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>P()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{P()?X():Z()}}],{events:q}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:lr()}],continuous:!1}));return $(_o,{onClose:()=>e.onClose?.(),get children(){return[$(de,{get when(){return k.isFetched},get fallback(){return"loading"},get children(){return[$(de,{get when(){return x()?.banner},get fallback(){return yM()},keyed:!0,children:D=>(()=>{const ne=_M(),G=ne.firstChild;return gt(G,"src",D),ne})()}),(()=>{const D=aM(),ne=D.firstChild,G=ne.firstChild,ae=ne.nextSibling,ue=ae.firstChild;return O(G,$(de,{get when(){return x()?.picture},keyed:!0,children:re=>(()=>{const Q=wM();return gt(Q,"src",re),Q})()})),O(ue,$(Sn,{get children(){return[$(De,{get when(){return e.pubkey===c()},get children(){const re=XP();return re.$$click=()=>u(),re}}),$(De,{get when(){return C.isLoading||C.isFetching},get children(){return eM()}}),$(De,{get when(){return Y.isLoading},get children(){return tM()}}),$(De,{get when(){return P()},get children(){const re=nM();return re.$$click=()=>X(),re.addEventListener("mouseleave",()=>p(!1)),re.addEventListener("mouseenter",()=>p(!0)),O(re,$(de,{get when(){return!h()},fallback:"フォロー解除",children:"フォロー中"})),Be(()=>re.disabled=Y.isLoading),re}}),$(De,{get when(){return!P()},get children(){const re=rM();return re.$$click=()=>Z(),Be(()=>re.disabled=Y.isLoading),re}})]}}),null),O(ue,$(xm,{menu:se,get children(){const re=iM();return O(re,$(_m,{})),re}}),null),O(ae,$(Sn,{get children(){return[$(De,{get when(){return te.isLoading},get children(){return sM()}}),$(De,{get when(){return W()},get children(){return oM()}})]}}),null),D})(),(()=>{const D=hM(),ne=D.firstChild,G=ne.firstChild,ae=G.nextSibling,ue=ae.firstChild;return O(ne,$(de,{get when(){return(x()?.display_name?.length??0)>0},get children(){const re=lM();return O(re,()=>x()?.display_name),re}}),G),O(G,$(de,{get when(){return(x()?.name?.length??0)>0},get children(){const re=cM();return re.firstChild,O(re,()=>x()?.name,null),re}}),null),O(G,$(de,{get when(){return(x()?.nip05?.length??0)>0},get children(){const re=fM();return O(re,()=>_()?.ident,null),O(re,$(Sn,{get fallback(){return(()=>{const Q=xM();return O(Q,$(QP,{})),Q})()},get children(){return[$(De,{get when(){return E.isLoading},get children(){const Q=uM();return O(Q,$(ZP,{})),Q}}),$(De,{get when(){return A()},get children(){const Q=dM();return O(Q,$(VP,{})),Q}})]}}),null),re}}),null),O(ue,d),D})(),$(de,{get when(){return(x()?.about??"").length>0},get children(){const D=pM();return O(D,()=>x()?.about),D}}),(()=>{const D=mM(),ne=D.firstChild,G=ne.firstChild,ae=G.nextSibling;return O(ae,$(de,{get when(){return te.isFetched},get fallback(){return $M()},get children(){return U().length}})),O(D,$(de,{get when(){return!t().hideCount},get children(){const ue=gM(),re=ue.firstChild,Q=re.nextSibling;return O(Q,$(de,{get when(){return g()},get fallback(){return(()=>{const he=kM();return he.$$click=()=>v(!0),he})()},keyed:!0,get children(){return $(CM,{get pubkey(){return e.pubkey}})}})),ue}}),null),D})(),$(de,{get when(){return(x()?.website??"").length>0},get children(){const D=vM();return O(D,$(de,{get when(){return x()?.website},keyed:!0,children:ne=>(()=>{const G=EM(),ae=G.firstChild;return O(ae,$(Wd,{})),O(G,$(Rl,{class:"text-blue-500 underline",href:ne}),null),G})()})),D}})]}}),(()=>{const D=bM();return O(D,$(ps,{get events(){return q()}})),D})()]}})};ct(["click"]);function TM(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var AM=TM,IM=_i,RM=function(){try{var e=IM(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Ev=RM,ng=Ev;function OM(e,t,n){t=="__proto__"&&ng?ng(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Cv=OM,LM=Cv,PM=Yu,MM=Object.prototype,BM=MM.hasOwnProperty;function jM(e,t,n){var i=e[t];(!(BM.call(e,t)&&PM(i,n))||n===void 0&&!(t in e))&&LM(e,t,n)}var Zd=jM,UM=Zd,NM=Cv;function DM(e,t,n,i){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?NM(n,u,d):UM(n,u,d)}return n}var wo=DM,zM=wo,HM=Ll;function FM(e,t){return e&&zM(t,HM(t),e)}var qM=FM;function WM(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var ZM=WM,KM=Fn,VM=Nd,GM=ZM,QM=Object.prototype,YM=QM.hasOwnProperty;function JM(e){if(!KM(e))return GM(e);var t=VM(e),n=[];for(var i in e)i=="constructor"&&(t||!YM.call(e,i))||n.push(i);return n}var XM=JM,eB=cv,tB=XM,nB=dv;function rB(e){return nB(e)?eB(e,!0):tB(e)}var Kd=rB,iB=wo,sB=Kd;function oB(e,t){return e&&iB(t,sB(t),e)}var aB=oB,tl={exports:{}};tl.exports;(function(e,t){var n=Rn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a?n.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(h,p){if(p)return h.slice();var g=h.length,v=u?u(g):new h.constructor(g);return h.copy(v),v}e.exports=d})(tl,tl.exports);var lB=tl.exports;function cB(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var uB=cB,dB=wo,fB=Od;function hB(e,t){return dB(e,fB(e),t)}var pB=hB,gB=uv,mB=gB(Object.getPrototypeOf,Object),Vd=mB,vB=Rd,bB=Vd,yB=Od,_B=ov,wB=Object.getOwnPropertySymbols,xB=wB?function(e){for(var t=[];e;)vB(t,yB(e)),e=bB(e);return t}:_B,Sv=xB,$B=wo,kB=Sv;function EB(e,t){return $B(e,kB(e),t)}var CB=EB,SB=sv,TB=Sv,AB=Kd;function IB(e){return SB(e,AB,TB)}var Gd=IB,RB=Object.prototype,OB=RB.hasOwnProperty;function LB(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&OB.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var PB=LB,rg=iv;function MB(e){var t=new e.constructor(e.byteLength);return new rg(t).set(new rg(e)),t}var Qd=MB,BB=Qd;function jB(e,t){var n=t?BB(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var UB=jB,NB=/\w*$/;function DB(e){var t=new e.constructor(e.source,NB.exec(e));return t.lastIndex=e.lastIndex,t}var zB=DB,ig=ss,sg=ig?ig.prototype:void 0,og=sg?sg.valueOf:void 0;function HB(e){return og?Object(og.call(e)):{}}var FB=HB,qB=Qd;function WB(e,t){var n=t?qB(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var ZB=WB,KB=Qd,VB=UB,GB=zB,QB=FB,YB=ZB,JB="[object Boolean]",XB="[object Date]",ej="[object Map]",tj="[object Number]",nj="[object RegExp]",rj="[object Set]",ij="[object String]",sj="[object Symbol]",oj="[object ArrayBuffer]",aj="[object DataView]",lj="[object Float32Array]",cj="[object Float64Array]",uj="[object Int8Array]",dj="[object Int16Array]",fj="[object Int32Array]",hj="[object Uint8Array]",pj="[object Uint8ClampedArray]",gj="[object Uint16Array]",mj="[object Uint32Array]";function vj(e,t,n){var i=e.constructor;switch(t){case oj:return KB(e);case JB:case XB:return new i(+e);case aj:return VB(e,n);case lj:case cj:case uj:case dj:case fj:case hj:case pj:case gj:case mj:return YB(e,n);case ej:return new i;case tj:case ij:return new i(e);case nj:return GB(e);case rj:return new i;case sj:return QB(e)}}var bj=vj,yj=Fn,ag=Object.create,_j=function(){function e(){}return function(t){if(!yj(t))return{};if(ag)return ag(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),wj=_j,xj=wj,$j=Vd,kj=Nd;function Ej(e){return typeof e.constructor=="function"&&!kj(e)?xj($j(e)):{}}var Cj=Ej,Sj=Pl,Tj=Jr,Aj="[object Map]";function Ij(e){return Tj(e)&&Sj(e)==Aj}var Rj=Ij,Oj=Rj,Lj=jd,lg=Ud,cg=lg&&lg.isMap,Pj=cg?Lj(cg):Oj,Mj=Pj,Bj=Pl,jj=Jr,Uj="[object Set]";function Nj(e){return jj(e)&&Bj(e)==Uj}var Dj=Nj,zj=Dj,Hj=jd,ug=Ud,dg=ug&&ug.isSet,Fj=dg?Hj(dg):zj,qj=Fj,Wj=Id,Zj=AM,Kj=Zd,Vj=qM,Gj=aB,Qj=lB,Yj=uB,Jj=pB,Xj=CB,eU=fv,tU=Gd,nU=Pl,rU=PB,iU=bj,sU=Cj,oU=Zn,aU=Pd,lU=Mj,cU=Fn,uU=qj,dU=Ll,fU=Kd,hU=1,pU=2,gU=4,Tv="[object Arguments]",mU="[object Array]",vU="[object Boolean]",bU="[object Date]",yU="[object Error]",Av="[object Function]",_U="[object GeneratorFunction]",wU="[object Map]",xU="[object Number]",Iv="[object Object]",$U="[object RegExp]",kU="[object Set]",EU="[object String]",CU="[object Symbol]",SU="[object WeakMap]",TU="[object ArrayBuffer]",AU="[object DataView]",IU="[object Float32Array]",RU="[object Float64Array]",OU="[object Int8Array]",LU="[object Int16Array]",PU="[object Int32Array]",MU="[object Uint8Array]",BU="[object Uint8ClampedArray]",jU="[object Uint16Array]",UU="[object Uint32Array]",Ye={};Ye[Tv]=Ye[mU]=Ye[TU]=Ye[AU]=Ye[vU]=Ye[bU]=Ye[IU]=Ye[RU]=Ye[OU]=Ye[LU]=Ye[PU]=Ye[wU]=Ye[xU]=Ye[Iv]=Ye[$U]=Ye[kU]=Ye[EU]=Ye[CU]=Ye[MU]=Ye[BU]=Ye[jU]=Ye[UU]=!0;Ye[yU]=Ye[Av]=Ye[SU]=!1;function Sa(e,t,n,i,o,a){var c,u=t&hU,d=t&pU,h=t&gU;if(n&&(c=o?n(e,i,o,a):n(e)),c!==void 0)return c;if(!cU(e))return e;var p=oU(e);if(p){if(c=rU(e),!u)return Yj(e,c)}else{var g=nU(e),v=g==Av||g==_U;if(aU(e))return Qj(e,u);if(g==Iv||g==Tv||v&&!o){if(c=d||v?{}:sU(e),!u)return d?Xj(e,Gj(c,e)):Jj(e,Vj(c,e))}else{if(!Ye[g])return o?e:{};c=iU(e,g,u)}}a||(a=new Wj);var x=a.get(e);if(x)return x;a.set(e,c),uU(e)?e.forEach(function(E){c.add(Sa(E,t,n,E,e,a))}):lU(e)&&e.forEach(function(E,_){c.set(_,Sa(E,t,n,_,e,a))});var k=h?d?tU:eU:d?fU:dU,w=p?void 0:k(e);return Zj(w||e,function(E,_){w&&(_=E,E=e[_]),Kj(c,_,Sa(E,t,n,_,e,a))}),c}var NU=Sa;function DU(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var zU=DU;function HU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var FU=HU,qU=Bl,WU=FU;function ZU(e,t){return t.length<2?e:qU(e,WU(t,0,-1))}var KU=ZU,VU=vs,GU=zU,QU=KU,YU=bs;function JU(e,t){return t=VU(t,e),e=QU(e,t),e==null||delete e[YU(GU(t))]}var XU=JU,eN=os,tN=Vd,nN=Jr,rN="[object Object]",iN=Function.prototype,sN=Object.prototype,Rv=iN.toString,oN=sN.hasOwnProperty,aN=Rv.call(Object);function lN(e){if(!nN(e)||eN(e)!=rN)return!1;var t=tN(e);if(t===null)return!0;var n=oN.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Rv.call(n)==aN}var cN=lN,uN=cN;function dN(e){return uN(e)?void 0:e}var fN=dN,fg=ss,hN=Ld,pN=Zn,hg=fg?fg.isConcatSpreadable:void 0;function gN(e){return pN(e)||hN(e)||!!(hg&&e&&e[hg])}var mN=gN,vN=Rd,bN=mN;function Ov(e,t,n,i,o){var a=-1,c=e.length;for(n||(n=bN),o||(o=[]);++a<c;){var u=e[a];t>0&&n(u)?t>1?Ov(u,t-1,n,i,o):vN(o,u):i||(o[o.length]=u)}return o}var yN=Ov,_N=yN;function wN(e){var t=e==null?0:e.length;return t?_N(e,1):[]}var xN=wN;function $N(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var kN=$N,EN=kN,pg=Math.max;function CN(e,t,n){return t=pg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=pg(i.length-t,0),c=Array(a);++o<a;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),EN(e,this,u)}}var SN=CN;function TN(e){return function(){return e}}var AN=TN,IN=AN,gg=Ev,RN=_v,ON=gg?function(e,t){return gg(e,"toString",{configurable:!0,enumerable:!1,value:IN(t),writable:!0})}:RN,LN=ON,PN=800,MN=16,BN=Date.now;function jN(e){var t=0,n=0;return function(){var i=BN(),o=MN-(i-n);if(n=i,o>0){if(++t>=PN)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var UN=jN,NN=LN,DN=UN,zN=DN(NN),HN=zN,FN=xN,qN=SN,WN=HN;function ZN(e){return WN(qN(e,void 0,FN),e+"")}var KN=ZN,VN=Hd,GN=NU,QN=XU,YN=vs,JN=wo,XN=fN,eD=KN,tD=Gd,nD=1,rD=2,iD=4,sD=eD(function(e,t){var n={};if(e==null)return n;var i=!1;t=VN(t,function(a){return a=YN(a,e),i||(i=a.length>1),a}),JN(e,tD(e),n),i&&(n=GN(n,nD|rD|iD,XN));for(var o=t.length;o--;)QN(n,t[o]);return n}),oD=sD;const aD=lo(oD);var lD="Expected a function";function cD(e){if(typeof e!="function")throw new TypeError(lD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var uD=cD,dD=Zd,fD=vs,hD=Md,mg=Fn,pD=bs;function gD(e,t,n,i){if(!mg(e))return e;t=fD(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=pD(t[o]),h=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var p=u[d];h=i?i(p,d,u):void 0,h===void 0&&(h=mg(p)?p:hD(t[o+1])?[]:{})}dD(u,d,h),u=u[d]}return e}var mD=gD,vD=Bl,bD=mD,yD=vs;function _D(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var c=t[i],u=vD(e,c);n(u,c)&&bD(a,yD(c,e),u)}return a}var wD=_D,xD=Hd,$D=Fd,kD=wD,ED=Gd;function CD(e,t){if(e==null)return{};var n=xD(ED(e),function(i){return[i]});return t=$D(t),kD(e,n,function(i,o){return t(i,o[0])})}var SD=CD,TD=Fd,AD=uD,ID=SD;function RD(e,t){return ID(e,AD(TD(t)))}var OD=RD;const LD=lo(OD),PD=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),MD=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),BD=j('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),jD=j('<div class="px-4 pt-4">読み込み中...'),UD=j('<div><span class="font-bold">その他の項目</span><div>'),ND=j('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),DD=j('<div class="h-24 shrink-0">'),zD=j('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),HD="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",FD="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",qD=new RegExp(`^${HD}$`),Lv=new RegExp(`^${FD}$`),WD=e=>qD.test(e),ZD=e=>Lv.test(e),KD=e=>{const t=yr(),{config:n}=Ue(),[i,o]=$e(""),[a,c]=$e(""),[u,d]=$e(""),[h,p]=$e(""),[g,v]=$e(""),[x,k]=$e(""),[w,E]=$e(""),[_,A]=$e(""),{profile:R,invalidateProfile:T,query:B}=hs(()=>on([t()])(([X])=>({pubkey:X}))),{updateProfile:C}=Ol(),P=pi({mutationKey:["updateProfile"],mutationFn:(...X)=>C(...X).then(se=>Promise.allSettled(se.map(Qr(1e4)))),onSuccess:X=>{const se=X.filter(D=>D.status==="fulfilled").length,q=X.length-se;se===X.length?window.alert("更新しました"):se>0?window.alert(`${q}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),T().then(()=>B.refetch()).catch(D=>console.error(D)),e.onClose()},onError:X=>{console.error("failed to delete",X)}}),U=()=>B.isLoading||P.isLoading,te=()=>U(),W=()=>aD(R(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Y=X=>{X.preventDefault();const se=t();if(se==null)return;const q=LD({picture:i(),banner:a(),name:u(),display_name:h(),about:g(),website:x(),nip05:w(),lud06:WD(_())?_():null,lud16:ZD(_())?_():null},D=>D==null||D.length===0);P.mutate({relayUrls:n().relayUrls,pubkey:se,profile:q,otherProperties:W()})},Z=X=>X.key==="Enter"&&X.preventDefault();return an(()=>{const X=R();X!=null&&(B.refetch().catch(se=>console.error(se)),Ta(()=>{o(se=>X.picture??se),c(se=>X.banner??se),d(se=>X.name??se),p(se=>X.display_name??se),v(se=>X.about??se),k(se=>X.website??se),E(se=>X.nip05??se),X.lud16!=null?A(X.lud16):X.lud06!=null&&A(X.lud06)}))}),$(_o,{closeButton:()=>$(Qu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const X=BD(),se=X.firstChild;return O(X,$(de,{get when(){return a().length>0},get fallback(){return DD()},keyed:!0,get children(){const q=PD(),D=q.firstChild;return Be(()=>gt(D,"src",a())),q}}),se),O(se,$(de,{get when(){return i().length>0},get children(){const q=MD();return Be(()=>gt(q,"src",i())),q}})),X})(),$(de,{get when(){return U()},get children(){return jD()}}),(()=>{const X=ND(),se=X.firstChild,q=se.firstChild,D=q.firstChild,ne=D.nextSibling,G=q.nextSibling,ae=G.firstChild,ue=ae.nextSibling,re=G.nextSibling,Q=re.firstChild,he=Q.nextSibling,we=he.firstChild,Re=we.nextSibling,Je=re.nextSibling,J=Je.firstChild,qe=J.nextSibling,nt=Je.nextSibling,Te=nt.firstChild,Xe=Te.nextSibling,rt=nt.nextSibling,Tt=rt.firstChild,Ve=Tt.nextSibling,Ht=rt.nextSibling,Kn=Ht.firstChild,_t=Kn.nextSibling,wr=Ht.nextSibling,wi=wr.firstChild,Ln=wi.nextSibling,mt=Ln.nextSibling,bn=wr.nextSibling,Pn=bn.firstChild,xi=Pn.nextSibling;return se.addEventListener("submit",Y),ne.$$keydown=Z,ne.addEventListener("blur",ye=>o(ye.currentTarget.value)),ue.$$keydown=Z,ue.addEventListener("blur",ye=>c(ye.currentTarget.value)),Re.$$keydown=Z,Re.addEventListener("change",ye=>d(ye.currentTarget.value)),qe.$$keydown=Z,qe.addEventListener("change",ye=>p(ye.currentTarget.value)),Xe.addEventListener("change",ye=>v(ye.currentTarget.value)),Ve.$$keydown=Z,Ve.addEventListener("change",ye=>k(ye.currentTarget.value)),_t.$$keydown=Z,_t.addEventListener("change",ye=>E(ye.currentTarget.value)),mt.$$keydown=Z,mt.addEventListener("change",ye=>A(ye.currentTarget.value)),O(se,$(de,{get when(){return Object.entries(W()).length>0},get children(){const ye=UD(),Vn=ye.firstChild,Gt=Vn.nextSibling;return O(Gt,$(Ot,{get each(){return Object.entries(W())},children:([Ft,xr])=>(()=>{const Gn=zD(),Qn=Gn.firstChild,$r=Qn.nextSibling;return O(Qn,Ft),O($r,xr),Gn})()})),ye}}),bn),xi.$$click=()=>e.onClose(),O(se,$(de,{get when(){return P.isLoading},children:"保存中..."}),null),Be(ye=>{const Vn=te(),Gt=te(),Ft=te(),xr=te(),Gn=te(),Qn=te(),$r=Lv.source,$i=te(),ki=te(),Ei=P.isLoading;return Vn!==ye._v$&&(ne.disabled=ye._v$=Vn),Gt!==ye._v$2&&(ue.disabled=ye._v$2=Gt),Ft!==ye._v$3&&(Re.disabled=ye._v$3=Ft),xr!==ye._v$4&&(qe.disabled=ye._v$4=xr),Gn!==ye._v$5&&(Xe.disabled=ye._v$5=Gn),Qn!==ye._v$6&&(Ve.disabled=ye._v$6=Qn),$r!==ye._v$7&&gt(_t,"pattern",ye._v$7=$r),$i!==ye._v$8&&(_t.disabled=ye._v$8=$i),ki!==ye._v$9&&(mt.disabled=ye._v$9=ki),Ei!==ye._v$10&&(Pn.disabled=ye._v$10=Ei),ye},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Be(()=>ne.value=i()),Be(()=>ue.value=a()),Be(()=>Re.value=u()),Be(()=>qe.value=h()),Be(()=>Xe.value=g()),Be(()=>Ve.value=x()),Be(()=>_t.value=w()),Be(()=>mt.value=_()),X})()]}})};ct(["keydown","click"]);const VD=()=>{const e=yr(),{modalState:t,showProfile:n,closeModal:i}=Yr();return $(de,{get when(){return t()},keyed:!0,children:o=>$(Sn,{get children(){return[$(De,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>$(SM,{pubkey:a,onClose:i})}),$(De,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return $(KD,{onClose:()=>on([e()])(([a])=>{n(a)})})}}),$(De,{get when(){return o.type==="AddColumn"},get children(){return $(qP,{onClose:i})}}),$(De,{get when(){return o.type==="About"},get children(){return $(HP,{onClose:i})}})]}})})},GD=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),QD=(e={})=>(()=>{const t=GD();return Ke(t,e,!0,!0),t})(),YD=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),vg=(e={})=>(()=>{const t=YD();return Ke(t,e,!0,!0),t})(),JD=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),XD=(e={})=>(()=>{const t=JD();return Ke(t,e,!0,!0),t})(),ez=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),tz=(e={})=>(()=>{const t=ez();return Ke(t,e,!0,!0),t})(),nz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),rz=(e={})=>(()=>{const t=nz();return Ke(t,e,!0,!0),t})(),iz=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),sz=(e={})=>(()=>{const t=iz();return Ke(t,e,!0,!0),t})(),bg=pt.string().length(64).regex(/^[0-9a-f]{64}$/),Zu=pt.string().regex(/^\w+$/),oz=pt.object({shortcode:Zu,url:pt.string().url(),keywords:pt.optional(pt.array(Zu))}),az=pt.object({manifest:pt.literal("emojipack_v1"),name:pt.string(),emojis:pt.array(oz),description:pt.optional(pt.string()),author:pt.optional(bg),publisher:pt.optional(bg)}).refine(e=>wv(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Pv=pt.record(Zu,pt.string().url());az.or(Pv);const lz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),cz=j('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),uz=j('<div class="py-2"><h3 class="font-bold">リレー</h3><p class="py-1"> 個のリレーが設定されています</p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),dz=j('<div class="py-2"><h3 class="pb-1 font-bold">インポート</h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">拡張機能からインポート'),Ku=j('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),fz=j('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),hz=j('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),pz=j('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),gz=j('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),mz=j('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),vz=j('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),bz=j('<div class="py-2"><h3 class="font-bold">絵文字のインポート</h3><p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">インポート'),yz=j('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),_z=j('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),wz=j('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),xz=j('<div class="p-4">'),$z=j('<h2 class="flex-1 text-center text-lg font-bold">設定'),kz=j('<ul class="flex flex-col">'),Ez=j('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),Cz=j('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Mv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Sz=Mv("https?"),Tz=Mv("wss?"),Az=()=>{const e=yr(),{showProfile:t,showProfileEdit:n}=Yr();return(()=>{const i=cz(),o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>on([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},Iz=()=>{const{config:e,addRelay:t,removeRelay:n}=Ue(),[i,o]=$e(""),a=u=>{u.preventDefault(),i().length!==0&&(t(i()),o(""))},c=async()=>{if(window.nostr==null)return;const u=Object.entries(await window.nostr?.getRelays?.()??[]),d=u.map(([v])=>v).join(`
`);if(u.length===0){window.alert("リレーが設定されていません");return}if(!window.confirm(`これらのリレーをインポートしますか:
${d}`))return;const h=e().relayUrls.length;Ta(()=>{u.forEach(([v])=>{t(v)})});const g=e().relayUrls.length-h;window.alert(`${g} 個のリレーをインポートしました`)};return[(()=>{const u=uz(),d=u.firstChild,h=d.nextSibling,p=h.firstChild,g=h.nextSibling,v=g.nextSibling,x=v.firstChild;return O(h,()=>e().relayUrls.length,p),O(g,$(Ot,{get each(){return e().relayUrls},children:k=>(()=>{const w=Ku(),E=w.firstChild,_=E.nextSibling;return O(E,k),_.$$click=()=>n(k),O(_,$(ns,{})),w})()})),v.addEventListener("submit",a),x.addEventListener("change",k=>o(k.currentTarget.value)),gt(x,"pattern",Tz),Be(()=>x.value=i()),u})(),(()=>{const u=dz(),d=u.firstChild,h=d.nextSibling;return h.$$click=()=>{c().catch(p=>{console.error("failed to import relays",p),window.alert("インポートに失敗しました")})},u})()]},Rz=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],Oz=()=>{const{config:e,setConfig:t}=Ue(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=fz(),o=i.firstChild,a=o.nextSibling;return O(a,$(Ot,{each:Rz,children:({id:c,name:u,example:d})=>(()=>{const h=hz(),p=h.firstChild,g=p.nextSibling;return p.$$click=()=>n(c),O(p,u),O(g,d),Be(v=>{const x=e().dateFormat===c,k=e().dateFormat===c,w=e().dateFormat!==c,E=e().dateFormat!==c;return x!==v._v$&&p.classList.toggle("bg-rose-300",v._v$=x),k!==v._v$2&&p.classList.toggle("text-white",v._v$2=k),w!==v._v$3&&p.classList.toggle("bg-white",v._v$3=w),E!==v._v$4&&p.classList.toggle("text-rose-300",v._v$4=E),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),h})()})),i})()},Hs=e=>(()=>{const t=pz();return t.$$click=n=>e.onClick(n),Be(n=>{const i=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),c!==n._v$8&&t.classList.toggle("justify-end",n._v$8=c),u!==n._v$9&&gt(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),Lz=()=>{const{config:e,setConfig:t}=Ue(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=gz(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,O(u,$(Hs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),O(d,$(Hs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},Pz=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=Ue(),[i,o]=$e(""),[a,c]=$e(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&(t({shortcode:i(),url:a()}),o(""),c(""))};return(()=>{const d=mz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,x=v.firstChild,k=x.nextSibling,w=v.nextSibling,E=w.firstChild,_=E.nextSibling;return O(p,$(Ot,{get each(){return Object.values(e().customEmojis)},children:({shortcode:A,url:R})=>(()=>{const T=vz(),B=T.firstChild,C=B.nextSibling,P=C.nextSibling;return gt(B,"src",R),gt(B,"alt",A),O(C,A),P.$$click=()=>n(A),O(P,$(ns,{})),T})()})),g.addEventListener("submit",u),k.addEventListener("change",A=>o(A.currentTarget.value)),_.addEventListener("change",A=>c(A.currentTarget.value)),gt(_,"pattern",Sz),Be(()=>k.value=i()),Be(()=>_.value=a()),d})()},Mz=()=>{const{saveEmojis:e}=Ue(),[t,n]=$e(""),i=o=>{if(o.preventDefault(),t().length!==0)try{const a=Pv.parse(JSON.parse(t())),c=lz(a);e(c),n("")}catch(a){const c=a instanceof Error?`:${a.message}`:"";window.alert(`JSONの読み込みに失敗しました${c}`)}};return(()=>{const o=bz(),a=o.firstChild,c=a.nextSibling,u=c.nextSibling,d=u.firstChild;return u.addEventListener("submit",i),d.addEventListener("change",h=>n(h.currentTarget.value)),Be(()=>d.value=t()),o})()},Bz=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=Ue(),[o,a]=$e(""),c=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=yz(),d=u.firstChild,h=d.nextSibling;return O(h,$(Ot,{get each(){return e().mutedPubkeys},children:p=>(()=>{const g=Ku(),v=g.firstChild,x=v.nextSibling;return O(v,$(Tl,{pubkey:p})),x.$$click=()=>t(p),O(x,$(ns,{})),g})()})),u})(),(()=>{const u=_z(),d=u.firstChild,h=d.nextSibling,p=h.nextSibling,g=p.firstChild;return O(h,$(Ot,{get each(){return e().mutedKeywords},children:v=>(()=>{const x=Ku(),k=x.firstChild,w=k.nextSibling;return O(k,v),w.$$click=()=>i(v),O(w,$(ns,{})),x})()})),p.addEventListener("submit",c),g.addEventListener("change",v=>a(v.currentTarget.value)),Be(()=>g.value=o()),u})()]},jz=()=>{const{config:e,setConfig:t}=Ue(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=wz(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const h=d.nextSibling;h.firstChild;const p=h.nextSibling;return p.firstChild,O(d,$(Hs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),O(h,$(Hs,{get value(){return e().showImage},onClick:()=>i()}),null),O(p,$(Hs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},Uz=e=>{const[t,n]=$e(null),i=[{name:()=>"プロフィール",icon:()=>$(qd,{}),render:()=>$(Az,{})},{name:()=>"リレー",icon:()=>$(sz,{}),render:()=>$(Iz,{})},{name:()=>"表示",icon:()=>$(rz,{}),render:()=>[$(Oz,{}),$(Lz,{}),$(jz,{})]},{name:()=>"カスタム絵文字",icon:()=>$(Ym,{}),render:()=>[$(Pz,{}),$(Mz,{})]},{name:()=>"ミュート",icon:()=>$(tz,{}),render:()=>$(Bz,{})}],o=()=>{const a=t();return a==null?null:i[a]};return $(_o,{get onClose(){return e.onClose},get children(){const a=xz();return O(a,$(de,{get when(){return o()},get fallback(){return[$z(),(()=>{const c=kz();return O(c,$(Ot,{each:i,children:(u,d)=>(()=>{const h=Ez(),p=h.firstChild,g=p.firstChild;return p.$$click=()=>n(d),O(g,()=>u.icon()),O(p,()=>u.name(),null),h})()})),c})()]},keyed:!0,children:c=>(()=>{const u=Cz(),d=u.firstChild,h=d.nextSibling;return d.$$click=()=>n(null),O(d,$(Qu,{})),O(h,()=>c.render()),u})()})),a}})};ct(["click"]);const Nz=j('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),Dz=j('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),zz=j('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),Hz=()=>{let e,t;const{saveColumn:n}=Ue(),i=yo(),[o,a]=$e(""),c=u=>{u.preventDefault(),n($d({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return $(Cd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=Dz();return O(u,$(vg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=Nz(),d=u.firstChild,h=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?mr(p,d):t=d,O(h,$(vg,{})),Be(()=>d.value=o()),u}})},Fz=()=>{let e;const{showAddColumn:t,showAbout:n}=Yr(),{config:i}=Ue(),[o,a]=$e(!1),[c,u]=$e(!1),d=()=>{e?.focus(),e?.click()},h=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return Nu(()=>({commandType:"openPostForm",handler:()=>{h(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=zz(),x=v.firstChild,k=x.firstChild,w=k.firstChild,E=k.nextSibling,_=E.nextSibling,A=_.firstChild,R=A.nextSibling,T=R.nextSibling,B=T.firstChild,C=x.nextSibling;return w.$$click=()=>g(),O(w,$(XD,{})),O(k,$(Hz,{}),null),A.$$click=()=>t(),O(A,$(wm,{})),R.$$click=()=>u(P=>!P),O(R,$(QD,{})),T.$$click=()=>n(),O(C,$(Jm,{textAreaRef:P=>{e=P},onClose:p})),O(v,$(de,{get when(){return c()},get children(){return $(Uz,{onClose:()=>u(!1)})}}),null),Be(P=>{const U=Vu("images/rabbit_app_256.png"),te=!!(o()||i().keepOpenPostForm),W=!(o()||i().keepOpenPostForm);return U!==P._v$&&gt(B,"src",P._v$=U),te!==P._v$2&&C.classList.toggle("static",P._v$2=te),W!==P._v$3&&C.classList.toggle("hidden",P._v$3=W),P},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};ct(["click"]);var qz=Rn,Wz=function(){return qz.Date.now()},Zz=Wz,Kz=/\s/;function Vz(e){for(var t=e.length;t--&&Kz.test(e.charAt(t)););return t}var Gz=Vz,Qz=Gz,Yz=/^\s+/;function Jz(e){return e&&e.slice(0,Qz(e)+1).replace(Yz,"")}var Xz=Jz,eH=Xz,yg=Fn,tH=Ml,_g=0/0,nH=/^[-+]0x[0-9a-f]+$/i,rH=/^0b[01]+$/i,iH=/^0o[0-7]+$/i,sH=parseInt;function oH(e){if(typeof e=="number")return e;if(tH(e))return _g;if(yg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=yg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=eH(e);var n=rH.test(e);return n||iH.test(e)?sH(e.slice(2),n?2:8):nH.test(e)?_g:+e}var aH=oH,lH=Fn,mu=Zz,wg=aH,cH="Expected a function",uH=Math.max,dH=Math.min;function fH(e,t,n){var i,o,a,c,u,d,h=0,p=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(cH);t=wg(t)||0,lH(n)&&(p=!!n.leading,g="maxWait"in n,a=g?uH(wg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function x(C){var P=i,U=o;return i=o=void 0,h=C,c=e.apply(U,P),c}function k(C){return h=C,u=setTimeout(_,t),p?x(C):c}function w(C){var P=C-d,U=C-h,te=t-P;return g?dH(te,a-U):te}function E(C){var P=C-d,U=C-h;return d===void 0||P>=t||P<0||g&&U>=a}function _(){var C=mu();if(E(C))return A(C);u=setTimeout(_,w(C))}function A(C){return u=void 0,v&&i?x(C):(i=o=void 0,c)}function R(){u!==void 0&&clearTimeout(u),h=0,i=d=o=u=void 0}function T(){return u===void 0?c:A(mu())}function B(){var C=mu(),P=E(C);if(i=arguments,o=this,d=C,P){if(u===void 0)return k(d);if(g)return clearTimeout(u),u=setTimeout(_,t),x(d)}return u===void 0&&(u=setTimeout(_,t)),c}return B.cancel=R,B.flush=T,B}var hH=fH,pH=hH,gH=Fn,mH="Expected a function";function vH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(mH);return gH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),pH(e,t,{leading:i,maxWait:t,trailing:o})}var bH=vH;const yH=lo(bH),_H=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],wH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},xH=({shortcuts:e=_H,onShortcut:t})=>{const n=wH(e);an(()=>{const i=yH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),gr(()=>{window.removeEventListener("keydown",i)})})},$H=()=>{const e=yo();xH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},kH=j('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),IH=()=>{$H();const e=Tx(),{persistStatus:t}=Ox(),n=Cl(),{config:i,initializeColumns:o}=Ue(),a=yr();return dr(()=>{i().relayUrls.map(async c=>{try{(await n().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),dr(()=>{const c=a();c!=null&&o({pubkey:c})}),an(()=>{t().loggedIn||e("/hello")}),Ax(c=>{console.error("uncaught error: ",c)}),(()=>{const c=kH();return O(c,$(Fz,{}),null),O(c,$(PP,{}),null),O(c,$(VD,{}),null),c})()};export{IH as default};
//# sourceMappingURL=Home-0c151cb8.js.map
