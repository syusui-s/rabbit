import{s as D,t as h,d as j,c as P,i as u,a as t,S as T,M as b,b as G,u as S,e as K,f as ge,g as he,h as U,j as oe,k as z,l as le,F as J,m as fe,o as Q,n as ce,p as ve,q as ye}from"./index-82372ac3.js";import{u as L,T as q,a as xe,b as w,t as ke,c as we,d as Z,A as $e,e as be,f as ie,z as W,g as Ce,h as se,i as _e,C as A,E as Ie,K as H,j as Te,p as Ee,r as Se,k as pe,B as Re,l as Fe,H as Le,m as Me,n as ue,o as Ne,q as Pe,s as Be,U as Oe,v as ae,w as Ue,x as De,y as je,R as qe,D as Ae,F as He,G as ze,I as Ke,M as Qe,J as We,_ as Ve,L as X,N as Ge,O as Je,S as Xe,P as Ye,Q as Ze}from"./SideBar-1765ccb8.js";import{u as en}from"./usePersistStatus-82b9582e.js";const nn=h('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),tn=(e={})=>(()=>{const n=nn();return D(n,e,!0,!0),n})(),rn=h('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),me=(e={})=>(()=>{const n=rn();return D(n,e,!0,!0),n})(),on=h('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),ln=h('<span class="inline-block h-4 w-4 text-gray-700">'),B=e=>{const[n,r]=P(!1),i=()=>r(o=>!o);return(()=>{const o=on(),l=o.firstChild,c=l.firstChild,s=c.firstChild,m=c.nextSibling;return u(c,t(T,{get when(){return e.icon},keyed:!0,children:g=>(()=>{const d=ln();return u(d,g),d})()}),s),u(s,()=>e.name),m.$$click=()=>i(),u(m,t(me,{})),u(o,t(T,{get when(){return n()},get children(){return e.settings()}}),null),o})()};j(["click"]);const cn=e=>{const n=[e.id],r=e.rootEvent()?.id;r!=null&&n.push(r);const i=e.replyingToEvent()?.id;return i!=null&&n.push(i),xe(n)},sn=e=>{const{config:n}=w(),r=()=>ke(e.event),{events:i}=L(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1],ids:cn(r()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return t(q,{get events(){return[...i()].reverse()}})},un=e=>t(G,{get children(){return t(b,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:n=>t(sn,{get event(){return n.event}})})}}),an=h('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),mn=h('<div class="shrink-0 border-b">'),dn=h('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),gn=h('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div></div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth pb-8">'),M=e=>{let n;const r=we(),i=S(),o=()=>e.width??"medium";return Z(()=>({commandType:"moveToColumn",handler:l=>{l.command==="moveToColumn"&&l.columnIndex===e.columnIndex&&n?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Z(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&n?.scrollIntoView({behavior:"smooth"})}})),t(be.Provider,{value:r,get children(){const l=an(),c=n;return typeof c=="function"?he(c,l):n=l,u(l,t(T,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const s=mn();return u(s,()=>e.header),s})(),(()=>{const s=dn();return u(s,()=>e.children),s})()]},children:s=>(()=>{const m=gn(),g=m.firstChild,d=g.firstChild,a=d.firstChild,f=a.nextSibling,x=g.nextSibling;return d.$$click=()=>r?.clearTimeline(),u(a,t($e,{})),u(f,()=>i()("column.back")),u(x,t(un,{timelineContent:s})),m})()})),K(s=>ge(l,{"sm:w-[500px]":o()==="widest","sm:w-[360px]":o()==="wide","sm:w-[320px]":o()==="medium","sm:w-[280px]":o()==="narrow"},s)),l}})};j(["click"]);const hn=h('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),fn=(e={})=>(()=>{const n=hn();return D(n,e,!0,!0),n})(),vn=h('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),yn=(e={})=>(()=>{const n=vn();return D(n,e,!0,!0),n})(),xn=h('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),kn=(e={})=>(()=>{const n=xn();return D(n,e,!0,!0),n})(),wn=h('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),$n=h('<div class="scrollbar flex h-9 gap-2 overflow-x-scroll"><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100">'),bn=h('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600"><span class="inline-block h-4 w-4">'),Cn=e=>(()=>{const n=wn(),r=n.firstChild,i=r.nextSibling;return u(r,()=>e.title),u(i,()=>e.children),n})(),N=e=>{const n=S(),{saveColumn:r,removeColumn:i,moveColumn:o}=w(),l=ie(),c=m=>{r({...e.column,width:m})},s=m=>{o(e.column.id,m),l({command:"moveToColumn",columnIndex:m}).catch(g=>console.error(g))};return(()=>{const m=bn(),g=m.firstChild,d=g.firstChild,a=d.firstChild,f=d.nextSibling,x=f.firstChild,C=f.nextSibling,k=C.nextSibling,$=k.firstChild;return u(m,t(Cn,{get title(){return n()("column.config.columnWidth")},get children(){const v=$n(),_=v.firstChild,p=_.nextSibling,R=p.nextSibling,I=R.nextSibling;return _.$$click=()=>c("widest"),u(_,()=>n()("column.config.widest")),p.$$click=()=>c("wide"),u(p,()=>n()("column.config.wide")),R.$$click=()=>c("medium"),u(R,()=>n()("column.config.medium")),I.$$click=()=>c("narrow"),u(I,()=>n()("column.config.narrow")),v}}),g),d.$$click=()=>s(e.columnIndex-1),u(a,t(fn,{})),f.$$click=()=>s(e.columnIndex+1),u(x,t(yn,{})),k.$$click=()=>i(e.column.id),u($,t(kn,{})),K(v=>{const _=n()("column.config.moveLeft"),p=n()("column.config.moveRight"),R=n()("column.config.removeColumn"),I=n()("column.config.removeColumn");return _!==v._v$&&U(d,"title",v._v$=_),p!==v._v$2&&U(f,"title",v._v$2=p),R!==v._v$3&&U(k,"title",v._v$3=R),I!==v._v$4&&U($,"aria-label",v._v$4=I),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),m})()};j(["click"]);const _n=W.array(W.array(W.string()));class In extends Ce{constructor(n){super(),this.tags=n}}const Tn=e=>{try{const n=_n.parse(JSON.parse(e));return new In(n)}catch(n){throw new TypeError("failed to parse tags schema: ",{cause:n})}},[ee,En]=oe(()=>P({})),[Sn,pn]=oe(()=>P({})),Rn=e=>{const n=se(),[r,i]=P(null);return z(()=>{const o=e();if(o==null)return;const{encrypted:l}=o;if(l in ee()){i(ee()[l]);return}const c=n();c!=null&&(Sn()[l]||(pn(s=>({...s,[l]:!0})),window.nostr?.nip04?.decrypt?.(c,l)?.then(s=>{En(m=>({...m,[l]:s})),i(s)}).catch(s=>{console.error(`failed to decrypt "${l}"`,s)})))}),r},Fn=e=>{const n=le(()=>_e(e.event)),r=Rn(()=>{const{content:l}=n();return l==null||l.length===0?null:{id:n().id,encrypted:l}}),i=()=>{const l=r();if(l==null)return[];console.log(l);try{return Tn(l).taggedEventIds()}catch(c){return console.warn(c),[]}},o=()=>n().taggedEventIds();return t(J,{get each(){return[...o(),...i()]},children:l=>t(A,{get children(){return t(Ie,{eventId:l,get ensureKinds(){return[H.Text]}})}})})},Ln=e=>{const n=fe(),r=le(e),o=Te(()=>["useFollowings",r()],({queryKey:c,signal:s})=>{console.debug("useFollowings");const[,m]=c;if(m==null)return Promise.resolve(null);const{kind:g,author:d,identifier:a}=m,f=new Re({type:"ParameterizedReplaceableEvent",kind:g,author:d,identifier:a}),x=f.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${g}:${d}:${a}`)});return f.onUpdate(C=>{const k=Ee(C);n.setQueryData(c,k)}),Se({task:f,signal:s}),pe(15e3,`useParameterizedReplaceableEvent: ${g}:${d}:${a}`)(x)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},Mn=e=>{const n=S(),{removeColumn:r}=w(),{event:i}=Ln(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return t(M,{get header(){return t(B,{get name(){return e.column.name??n()("column.bookmark")},get icon(){return t(tn,{})},settings:()=>t(N,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(T,{get when(){return i()},keyed:!0,children:o=>t(Fn,{event:o})})}})},E=e=>n=>{switch(e.filterType){case"AND":return e.children.every(r=>E(r)(n));case"OR":return e.children.some(r=>E(r)(n));case"NOT":return!E(e.child)(n);case"Text":return n.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(n);default:console.error("unsupported content filter type");break}return!1},Nn=e=>{const n=S(),{config:r,removeColumn:i}=w(),{followingPubkeys:o}=Fe(()=>({pubkey:e.column.pubkey})),{events:l}=L(()=>{const c=Me.uniq([...o()]);return c.length===0?null:{debugId:"following",relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:c,limit:10,since:ue()-4*60*60}],clientEventFilter:s=>e.column.contentFilter==null?!0:E(e.column.contentFilter)(s.content)}});return z(()=>{console.log("home",l())}),Q(()=>console.log("home timeline mounted")),ce(()=>console.log("home timeline unmounted")),t(M,{get header(){return t(B,{get name(){return e.column.name??n()("column.home")},get icon(){return t(Le,{})},settings:()=>t(N,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(q,{get events(){return l()}})}})},Pn=h('<img alt="icon" class="rounded">'),Bn=h('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-blue-500 hover:underline">'),On=h('<div class="notification-event py-1">'),Un=h('<div class="truncate"> '),Dn=e=>{const n=S(),{shouldMuteEvent:r}=w(),{showProfile:i}=Ue(),o=()=>De(e.event),l=()=>o().lastTaggedEventId(),{profile:c}=Ne(()=>({pubkey:e.event.pubkey})),{event:s,query:m}=Pe(()=>je([l()])(([d])=>({eventId:d}))),g=()=>m.isSuccess&&s()==null;return t(T,{get when(){return!g()||r(e.event)},get children(){return[(()=>{const d=Bn(),a=d.firstChild,f=a.nextSibling,x=f.firstChild,C=x.nextSibling,k=C.firstChild;return u(a,t(Be,{get reactionTypes(){return o().toReactionTypes()}})),u(x,t(T,{get when(){return c()?.picture!=null},get children(){const $=Pn();return K(()=>U($,"src",c()?.picture)),$}})),k.$$click=()=>i(e.event.pubkey),u(k,t(Oe,{get pubkey(){return e.event.pubkey}})),u(C,()=>n()("notification.reacted"),null),d})(),(()=>{const d=On();return u(d,t(T,{get when(){return s()},get fallback(){return(()=>{const a=Un(),f=a.firstChild;return u(a,()=>n()("general.loading"),f),u(a,l,null),a})()},keyed:!0,children:a=>t(ae,{event:a})})),d})()]}})};j(["click"]);const jn=h("<div>unknown event"),de=e=>{const{shouldMuteEvent:n}=w();return t(J,{get each(){return e.events},children:r=>t(T,{get when(){return!n(r)},get children(){return t(G,{get fallback(){return jn()},get children(){return[t(b,{get when(){return r.kind===H.Text},get children(){return t(A,{get children(){return t(ae,{event:r})}})}}),t(b,{get when(){return r.kind===H.Reaction},get children(){return t(A,{get children(){return t(Dn,{event:r})}})}}),t(b,{get when(){return r.kind===H.Repost},get children(){return t(A,{get children(){return t(qe,{event:r})}})}})]}})}})})},qn=e=>{const n=S(),{config:r,removeColumn:i}=w(),{events:o}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:l=>e.column.contentFilter==null?!0:E(e.column.contentFilter)(l.content)}));return t(M,{get header(){return t(B,{get name(){return e.column.name??n()("column.notification")},get icon(){return t(Ae,{})},settings:()=>t(N,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(de,{get events(){return o()}})}})},An=e=>{const n=S(),{config:r,removeColumn:i}=w(),{events:o}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:l=>e.column.contentFilter==null?!0:E(e.column.contentFilter)(l.content)}));return t(M,{get header(){return t(B,{get name(){return e.column.name??n()("column.posts")},get icon(){return t(He,{})},settings:()=>t(N,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(q,{get events(){return o()}})}})},Hn=e=>{const n=S(),{config:r,removeColumn:i}=w(),{events:o}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:l=>e.column.contentFilter==null?!0:E(e.column.contentFilter)(l.content)}));return t(M,{get header(){return t(B,{get name(){return e.column.name??n()("column.reactions")},get icon(){return t(ze,{})},settings:()=>t(N,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(de,{get events(){return o()}})}})},zn=e=>{const n=S(),{removeColumn:r}=w(),{events:i}=L(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:25,since:ue()-4*60*60}],clientEventFilter:o=>e.column.contentFilter==null?!0:E(e.column.contentFilter)(o.content)}));return t(M,{get header(){return t(B,{get name(){return e.column.name??n()("column.relay")},get icon(){return t(Ke,{})},settings:()=>t(N,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(q,{get events(){return i()}})}})},Kn=h('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),Qn=e=>{const[n,r]=P(!1),[i,o]=P(""),{saveColumn:l}=w(),c=()=>r(a=>!a),s=()=>{i()!==e.column.query&&l({...e.column,query:i()})},m=()=>{s()},g=a=>{o(a.currentTarget.value)},d=a=>{a.preventDefault(),s()};return Q(()=>{o(e.column.query)}),(()=>{const a=Kn(),f=a.firstChild,x=f.firstChild,C=x.firstChild,k=x.nextSibling,$=k.firstChild,v=k.nextSibling;return u(C,t(Qe,{})),k.addEventListener("submit",d),$.addEventListener("blur",m),$.addEventListener("change",g),v.$$click=()=>c(),u(v,t(me,{})),u(a,t(T,{get when(){return n()},get children(){return e.settings()}}),null),K(()=>$.value=i()),a})()},Wn=e=>{const{removeColumn:n}=w(),{events:r}=L(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:We,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>o.tags.findIndex(([l])=>l==="mostr"||l==="proxy")>=0?!1:e.column.contentFilter==null?!0:E(e.column.contentFilter)(o.content)}});return t(M,{get header(){return t(Qn,{get column(){return e.column},settings:()=>t(N,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(q,{get events(){return r()}})}})};j(["click"]);const Vn=h('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),Gn=()=>{const{config:e}=w();return(()=>{const n=Vn();return u(n,t(J,{get each(){return e().columns},children:(r,i)=>{const o=()=>i()+1,l=()=>o()===e().columns.length;return t(G,{get children(){return[t(b,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:c=>t(Nn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),t(b,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:c=>t(qn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),t(b,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:c=>t(An,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),t(b,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:c=>t(Hn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),t(b,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:c=>t(zn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),t(b,{get when(){return r.columnType==="Bookmark"&&r},keyed:!0,children:c=>t(Mn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),t(b,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:c=>t(Wn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})})]}})}})),n})()};var Jn=Ve,Xn=function(){return Jn.Date.now()},Yn=Xn,Zn=/\s/;function et(e){for(var n=e.length;n--&&Zn.test(e.charAt(n)););return n}var nt=et,tt=nt,rt=/^\s+/;function ot(e){return e&&e.slice(0,tt(e)+1).replace(rt,"")}var lt=ot,ct=lt,ne=X,it=Ge,te=0/0,st=/^[-+]0x[0-9a-f]+$/i,ut=/^0b[01]+$/i,at=/^0o[0-7]+$/i,mt=parseInt;function dt(e){if(typeof e=="number")return e;if(it(e))return te;if(ne(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ne(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ct(e);var r=ut.test(e);return r||at.test(e)?mt(e.slice(2),r?2:8):st.test(e)?te:+e}var gt=dt,ht=X,V=Yn,re=gt,ft="Expected a function",vt=Math.max,yt=Math.min;function xt(e,n,r){var i,o,l,c,s,m,g=0,d=!1,a=!1,f=!0;if(typeof e!="function")throw new TypeError(ft);n=re(n)||0,ht(r)&&(d=!!r.leading,a="maxWait"in r,l=a?vt(re(r.maxWait)||0,n):l,f="trailing"in r?!!r.trailing:f);function x(y){var F=i,O=o;return i=o=void 0,g=y,c=e.apply(O,F),c}function C(y){return g=y,s=setTimeout(v,n),d?x(y):c}function k(y){var F=y-m,O=y-g,Y=n-F;return a?yt(Y,l-O):Y}function $(y){var F=y-m,O=y-g;return m===void 0||F>=n||F<0||a&&O>=l}function v(){var y=V();if($(y))return _(y);s=setTimeout(v,k(y))}function _(y){return s=void 0,f&&i?x(y):(i=o=void 0,c)}function p(){s!==void 0&&clearTimeout(s),g=0,i=m=o=s=void 0}function R(){return s===void 0?c:_(V())}function I(){var y=V(),F=$(y);if(i=arguments,o=this,m=y,F){if(s===void 0)return C(m);if(a)return clearTimeout(s),s=setTimeout(v,n),x(m)}return s===void 0&&(s=setTimeout(v,n)),c}return I.cancel=p,I.flush=R,I}var kt=xt,wt=kt,$t=X,bt="Expected a function";function Ct(e,n,r){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(bt);return $t(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),wt(e,n,{leading:i,maxWait:n,trailing:o})}var _t=Ct;const It=Je(_t),Tt=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],Et=e=>{const n=new Map;return e.forEach(r=>{n.set(r.key,r)}),n},St=({shortcuts:e=Tt,onShortcut:n})=>{const r=Et(e);Q(()=>{const i=It(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const l=r.get(o.key);l!=null&&n(l)},50);window.addEventListener("keydown",i),ce(()=>{window.removeEventListener("keydown",i)})})},pt=()=>{const e=ie();St({onShortcut:n=>{e(n.command).then(()=>console.debug(`shortcut key '${n.key}' was processed successfully`),r=>console.error(r))}})},Rt=h('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),Nt=()=>{pt();const e=ve(),{persistStatus:n}=en(),r=Ze(),{config:i,initializeColumns:o}=w(),l=se();return z(()=>{i().relayUrls.map(async c=>{try{(await r().ensureRelay(c)).on("notice",m=>{console.error(`NOTICE: ${c}: ${m}`)})}catch(s){console.error("ensureRelay failed",s)}})}),z(()=>{const c=l();c!=null&&o({pubkey:c})}),Q(()=>{n().loggedIn||e("/hello")}),ye(c=>{console.error("uncaught error: ",c)}),(()=>{const c=Rt();return u(c,t(Xe,{}),null),u(c,t(Gn,{}),null),u(c,t(Ye,{}),null),c})()};export{Nt as default};
//# sourceMappingURL=Home-46dd2c51.js.map
