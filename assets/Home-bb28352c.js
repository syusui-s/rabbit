import{s as N,t as g,d as F,c as E,i as u,a as n,S as C,M as p,b as V,u as b,e as ve,f as ye,g as T,h as X,j as P,k as xe,F as K,l as U,T as $e,m as we,n as re,o as R,p as L,q as ke,r as le,v as be,w as oe,x as Y,y as Q,z as se,A as Ce,B as _e,C as Ie,D as pe,E as Te,G as Ee,R as Se,H as Re,Z as Me,I as Pe,J as Le,K as Fe}from"./index-2136e1f5.js";import{u as q,T as A,a as qe,b as ee,A as Be,c as De,d as ce,e as ie,C as M,E as ue,p as Ue,r as Ne,t as Oe,B as je,f as ne,g as He,h as ze,H as Ae,i as Ke,j as G,k as Qe,l as Ge,m as Ve,U as ae,n as de,o as me,q as ge,s as Ze,R as Je,v as We,w as Xe,x as Ye,G as en,M as nn,y as tn,S as rn,z as ln,D as on}from"./SideBar-a813d799.js";import{u as sn}from"./usePersistStatus-325c02d0.js";const cn=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0">'),un=(e={})=>(()=>{const t=cn();return N(t,e,!0,!0),t})(),an=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),he=(e={})=>(()=>{const t=an();return N(t,e,!0,!0),t})(),dn=g('<div class="flex flex-col"><div class="flex h-8 items-center gap-1"><h2 class="flex min-w-0 flex-1 items-center gap-1 ps-2"><span class=truncate></span></h2><button class="flex h-full place-items-center px-2"><span class="inline-block h-4 w-4">'),mn=g('<span class="inline-block h-4 w-4 shrink-0 text-fg-secondary">'),O=e=>{const[t,r]=E(!1),c=()=>r(l=>!l);return(()=>{const l=dn(),o=l.firstChild,s=o.firstChild,i=s.firstChild,a=s.nextSibling,f=a.firstChild;return u(s,n(C,{get when(){return e.icon},keyed:!0,children:m=>(()=>{const d=mn();return u(d,m),d})()}),i),u(i,()=>e.name),a.$$click=()=>c(),u(f,n(he,{})),u(l,n(C,{get when(){return t()},get children(){return e.settings()}}),null),l})()};F(["click"]);const gn=e=>{const t=[e.id],r=e.rootEvent()?.id;r!=null&&t.push(r);const c=e.replyingToEvent()?.id;return c!=null&&t.push(c),ve(t)},hn=e=>{const{config:t}=b(),r=()=>ye(e.event),{events:c}=q(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:gn(r()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return n(A,{get events(){return[...c()].reverse()}})},fn=e=>n(V,{get children(){return n(p,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>n(hn,{get event(){return t.event}})})}}),vn=g('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none">'),yn=g('<div class="shrink-0 border-b border-border">'),xn=g('<div class="scrollbar flex flex-col overflow-y-scroll pb-16">'),$n=g('<div class="flex shrink-0 items-center border-b border-border px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>'),wn=g('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),B=e=>{let t;const r=qe(),c=T(),l=()=>e.width??"medium";return ee(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),ee(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),n(De.Provider,{value:r,get children(){const o=vn(),s=t;return typeof s=="function"?X(s,o):t=o,u(o,n(C,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const i=yn();return u(i,()=>e.header),i})(),(()=>{const i=xn(),a=e.timelineRef;return typeof a=="function"?X(a,i):e.timelineRef=i,u(i,()=>e.children),i})()]},children:i=>[(()=>{const a=$n(),f=a.firstChild,m=f.firstChild,d=m.nextSibling;return f.$$click=()=>r?.clearTimeline(),u(m,n(Be,{})),u(d,()=>c()("column.back")),a})(),(()=>{const a=wn();return u(a,n(fn,{timelineContent:i})),a})()]})),P(i=>xe(o,{"sm:w-[500px]":l()==="widest","sm:w-[360px]":l()==="wide","sm:w-[320px]":l()==="medium","sm:w-[280px]":l()==="narrow"},i)),o}})};F(["click"]);const kn=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),bn=(e={})=>(()=>{const t=kn();return N(t,e,!0,!0),t})(),Cn=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m8.25 4.5 7.5 7.5-7.5 7.5">'),_n=(e={})=>(()=>{const t=Cn();return N(t,e,!0,!0),t})(),In=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),pn=(e={})=>(()=>{const t=In();return N(t,e,!0,!0),t})(),Tn=g('<div class="flex flex-col gap-2 border-b border-border p-2"><div></div><div>'),En=g('<div class="scrollbar flex h-9 gap-2 overflow-x-scroll">'),Sn=g('<div class="flex flex-col border-t border-border"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2"><span class="inline-block h-4 w-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-danger hover:text-rose-600"><span class="inline-block h-4 w-4">'),Rn=g('<button class="rounded-md border px-4 text-fg-secondary">'),Mn=e=>(()=>{const t=Tn(),r=t.firstChild,c=r.nextSibling;return u(r,()=>e.title),u(c,()=>e.children),t})(),D=e=>{const t=T(),{saveColumn:r,removeColumn:c,moveColumn:l}=b(),o=ce(),s=a=>{r({...e.column,width:a})},i=a=>{l(e.column.id,a),o({command:"moveToColumn",columnIndex:a}).catch(f=>console.error(f))};return(()=>{const a=Sn(),f=a.firstChild,m=f.firstChild,d=m.firstChild,h=m.nextSibling,v=h.firstChild,$=h.nextSibling,x=$.nextSibling,I=x.firstChild;return u(a,n(Mn,{get title(){return t()("column.config.columnWidth")},get children(){const y=En();return u(y,n(K,{each:["widest","wide","medium","narrow"],children:_=>(()=>{const w=Rn();return w.$$click=()=>s(_),u(w,()=>t()(`column.config.${_}`)),P(k=>{const z=e.column.width===_,Z=e.column.width===_,J=e.column.width!==_,W=e.column.width!==_;return z!==k._v$5&&w.classList.toggle("border-fg-secondary",k._v$5=z),Z!==k._v$6&&w.classList.toggle("font-bold",k._v$6=Z),J!==k._v$7&&w.classList.toggle("border-border",k._v$7=J),W!==k._v$8&&w.classList.toggle("font-normal",k._v$8=W),k},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),w})()})),y}}),f),m.$$click=()=>i(e.columnIndex-1),u(d,n(bn,{})),h.$$click=()=>i(e.columnIndex+1),u(v,n(_n,{})),x.$$click=()=>c(e.column.id),u(I,n(pn,{})),P(y=>{const _=t()("column.config.moveLeft"),w=t()("column.config.moveRight"),k=t()("column.config.removeColumn"),z=t()("column.config.removeColumn");return _!==y._v$&&U(m,"title",y._v$=_),w!==y._v$2&&U(h,"title",y._v$2=w),k!==y._v$3&&U(x,"title",y._v$3=k),z!==y._v$4&&U(I,"aria-label",y._v$4=z),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),a})()};F(["click"]);class Pn extends we{constructor(t){super(),this.tags=t}}const Ln=e=>{try{const t=$e.parse(JSON.parse(e));return new Pn(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[te,Fn]=re(()=>E({})),[qn,Bn]=re(()=>E({})),Dn=e=>{const t=ie(),[r,c]=E(null);return R(()=>{const l=e();if(l==null)return;const{encrypted:o}=l;if(o in te()){c(te()[o]);return}const s=t();s!=null&&(qn()[o]||(Bn(i=>({...i,[o]:!0})),window.nostr?.nip04?.decrypt?.(s,o)?.then(i=>{Fn(a=>({...a,[o]:i})),c(i)}).catch(i=>{console.error(`failed to decrypt "${o}"`,i)})))}),r},Un=e=>{const t=L(()=>ke(e.event)),r=Dn(()=>{const{content:o}=t();return o==null||o.length===0?null:{id:t().id,encrypted:o}}),c=()=>{const o=r();if(o==null)return[];console.log(o);try{return Ln(o).taggedEventIds()}catch(s){return console.warn(s),[]}},l=()=>t().taggedEventIds();return n(K,{get each(){return[...l(),...c()]},children:o=>n(M,{get children(){return n(ue,{eventId:o,get ensureKinds(){return[le]}})}})})},Nn=e=>{const t=be(),r=L(e),c=()=>["useFollowings",r()],l=oe(()=>({queryKey:c(),queryFn:({queryKey:s,signal:i})=>{console.debug("useFollowings");const[,a]=s;if(a==null)return Promise.resolve(null);const{kind:f,author:m,identifier:d}=a,h=new je({type:"ParameterizedReplaceableEvent",kind:f,author:m,identifier:d}),v=h.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${f}:${m}:${d}`)});return h.onUpdate($=>{const x=Ue($);t.setQueryData(s,x)}),Ne({task:h,signal:i}),Oe(15e3,`useParameterizedReplaceableEvent: ${f}:${m}:${d}`)(v)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>l.data??null,query:l}},On=e=>{const t=T(),{removeColumn:r}=b(),{event:c}=Nn(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return n(B,{get header(){return n(O,{get name(){return e.column.name??t()("column.bookmark")},get icon(){return n(un,{})},settings:()=>n(D,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(C,{get when(){return c()},keyed:!0,children:l=>n(Un,{event:l})})}})},jn=()=>{const[e,t]=E();return{targetRef:t,currentPosition:()=>e()?.scrollTop??0,scrollToTop:()=>{const o=e();o?.scrollTo(0,0)},scrollToBottom:()=>{const o=e();o?.scrollTo(0,o.scrollHeight)}}},Hn=g('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary"><span>'),zn=g('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary disabled:text-fg-secondary/30"><span>'),j=e=>{const t=L(e),r=v=>{const{duration:$}=t();if($!=null)return v-$},[c,l]=E([]),[o,s]=E(r(ne())),[i,a]=E(),f=()=>i()==null,m=jn(),d=()=>{Y(()=>{a(void 0),s(r(ne()))}),m.scrollToTop()},h=()=>{const v=He(c());v!=null&&(Y(()=>{a(v.created_at),s(r(v.created_at))}),m.scrollToTop())};return{timelineRef:m.targetRef,setEvents:l,since:o,until:i,continuous:f,loadLatest:d,loadOld:h}},H=e=>{const t=T();return[n(C,{get when(){return!e.loadMore.continuous()},get children(){return n(M,{get children(){const r=Hn(),c=r.firstChild;return r.$$click=()=>e.loadMore.loadLatest(),u(c,()=>t()("column.loadLatest")),r}})}}),L(()=>e.children),n(M,{get children(){const r=zn(),c=r.firstChild;return r.$$click=()=>e.loadMore.loadOld(),u(c,()=>t()("column.loadOld")),P(()=>r.disabled=!e.eose),r}})]};F(["click"]);const S=e=>t=>{switch(e.filterType){case"AND":return e.children.every(r=>S(r)(t));case"OR":return e.children.some(r=>S(r)(t));case"NOT":return!S(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},An=e=>{const t=T(),{config:r,removeColumn:c}=b(),{followingPubkeys:l}=ze(()=>({pubkey:e.column.pubkey})),o=j(()=>({duration:4*60*60})),{events:s,eose:i}=q(()=>{const a=Ce.uniq([...l()]);return a.length===0?null:{debugId:"following",relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:a,limit:20,since:o.since(),until:o.until()}],eoseLimit:20,continuous:o.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:f=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(f.content)}});return R(()=>{console.log("home",s()),o.setEvents(s())}),Q(()=>console.log("home timeline mounted")),se(()=>console.log("home timeline unmounted")),n(B,{get header(){return n(O,{get name(){return e.column.name??t()("column.home")},get icon(){return n(Ae,{})},settings:()=>n(D,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(H,{loadMore:o,get eose(){return i()},get children(){return n(A,{get events(){return s()}})}})}})},Kn=g('<div class="flex items-center gap-1 pl-[2px] text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex flex-1 gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class=shrink-0></span></div></div><div class=text-xs>'),Qn=g('<div class="notification-event py-1">'),Gn=g('<img alt=icon class="h-full w-full object-cover">'),Vn=g("<div class=truncate> "),Zn=e=>{const t=T(),r=Ke(),{shouldMuteEvent:c}=b(),{showProfile:l}=me(),o=()=>_e(e.event),s=()=>o().lastTaggedEventId(),{profile:i}=G(()=>({pubkey:e.event.pubkey})),{event:a,query:f}=Qe(()=>ge([s()])(([d])=>({eventId:d}))),m=()=>f.isSuccess&&a()==null;return n(C,{get when(){return L(()=>!m())()&&!c(e.event)},get children(){return[(()=>{const d=Kn(),h=d.firstChild,v=h.nextSibling,$=v.firstChild,x=$.nextSibling,I=x.firstChild,y=I.nextSibling,_=v.nextSibling;return u(h,n(Ge,{get reactionTypes(){return o().toReactionTypes()}})),u($,n(C,{get when(){return i()?.picture},keyed:!0,children:w=>(()=>{const k=Gn();return P(()=>U(k,"src",Ve(w))),k})()})),I.$$click=()=>l(e.event.pubkey),u(I,n(ae,{get pubkey(){return e.event.pubkey}})),u(y,()=>t()("notification.reacted")),u(_,()=>r(o().createdAtAsDate())),d})(),(()=>{const d=Qn();return u(d,n(C,{get when(){return a()},get fallback(){return(()=>{const h=Vn(),v=h.firstChild;return u(h,()=>t()("general.loading"),v),u(h,s,null),h})()},keyed:!0,children:h=>n(de,{event:h})})),d})()]}})};F(["click"]);const Jn=g('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143"clip-rule=evenodd>'),Wn=(e={})=>(()=>{const t=Jn();return N(t,e,!0,!0),t})(),Xn=g('<img alt=icon class="h-full w-full object-cover">'),Yn=g('<div class="flex items-center gap-1 text-sm"><div class="flex w-6 flex-col items-center"><div class="h-4 w-4 shrink-0 text-amber-500"aria-hidden=true></div><div class="mt-[-2px] shrink-0 text-xs"></div></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class=shrink-0>'),et=g('<div class="ml-7 whitespace-pre-wrap break-all rounded border border-border px-1 text-sm">'),nt=g('<div class="notification-event py-1">'),tt=e=>{const t=T(),{shouldMuteEvent:r}=b(),{showProfile:c}=me(),l=L(()=>Ie(e.event)),{profile:o}=G(()=>({pubkey:l().senderPubkey()})),{profile:s,query:i}=G(()=>ge([l().zappedPubkey()])(([m])=>({pubkey:m}))),a=oe(()=>({queryKey:["fetchLnurlPayRequestMetadata",s()],queryFn:({queryKey:m})=>{const[,d]=m;if(d!=null)return pe(d)},staleTime:5*60*1e3,gcTime:3*24*60*60*1e3})),f=()=>{const m=s(),d=i.data,h=a.data;if(m==null||d==null||h==null||!(h.allowsNostr&&h.nostrPubkey!=null))return!1;const v=Te(m);if(v==null)return null;const $=h.nostrPubkey,x=Ee({zapReceipt:l().rawEvent,lnurlPayUrl:v,lnurlProviderPubkey:$});return console.log("result",x),x.success};return n(C,{get when(){return L(()=>!r(e.event))()&&f()},get children(){return[(()=>{const m=Yn(),d=m.firstChild,h=d.firstChild,v=h.nextSibling,$=d.nextSibling,x=$.firstChild,I=x.nextSibling,y=I.firstChild,_=y.nextSibling;return u(h,n(Wn,{})),u(v,()=>Ze(l().amountSats())),u(x,n(C,{get when(){return o()?.picture!=null},get children(){const w=Xn();return P(()=>U(w,"src",o()?.picture)),w}})),y.$$click=()=>c(l().senderPubkey()),u(y,n(ae,{get pubkey(){return l().senderPubkey()}})),u(_,()=>t()("notification.zapped")),m})(),n(C,{get when(){return l().description().content.length>0},get children(){const m=et();return u(m,()=>l().description().content),m}}),n(C,{get when(){return l().zappedEventId()!=null},get children(){const m=nt();return u(m,n(ue,{get eventId(){return l().zappedEventId()}})),m}})]}})};F(["click"]);const rt=g("<div>unknown event"),fe=e=>{const{shouldMuteEvent:t}=b();return n(K,{get each(){return e.events},children:r=>n(C,{get when(){return!t(r)},get children(){return n(V,{get fallback(){return rt()},get children(){return[n(p,{get when(){return r.kind===le},get children(){return n(M,{get children(){return n(de,{event:r})}})}}),n(p,{get when(){return r.kind===Se},get children(){return n(M,{get children(){return n(Zn,{event:r})}})}}),n(p,{get when(){return r.kind===Re},get children(){return n(M,{get children(){return n(Je,{event:r})}})}}),n(p,{get when(){return r.kind===Me},get children(){return n(M,{get children(){return n(tt,{event:r})}})}})]}})}})})},lt=e=>{const t=T(),{config:r,removeColumn:c}=b(),l=j(()=>({duration:null})),{events:o,eose:s}=q(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6,7,9735],"#p":[e.column.pubkey],limit:20,since:l.since(),until:l.until()}],eoseLimit:20,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return R(()=>l.setEvents(o())),n(B,{get header(){return n(O,{get name(){return e.column.name??t()("column.notification")},get icon(){return n(We,{})},settings:()=>n(D,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(H,{loadMore:l,get eose(){return s()},get children(){return n(fe,{get events(){return o()}})}})}})},ot=e=>{const t=T(),{config:r,removeColumn:c}=b(),l=j(()=>({duration:null})),{events:o,eose:s}=q(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10,since:l.since(),until:l.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return R(()=>l.setEvents(o())),n(B,{get header(){return n(O,{get name(){return e.column.name??t()("column.posts")},get icon(){return n(Xe,{})},settings:()=>n(D,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(H,{loadMore:l,get eose(){return s()},get children(){return n(A,{get events(){return o()}})}})}})},st=e=>{const t=T(),{config:r,removeColumn:c}=b(),l=j(()=>({duration:null})),{events:o,eose:s}=q(()=>({relayUrls:r().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10,since:l.since(),until:l.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return R(()=>l.setEvents(o())),n(B,{get header(){return n(O,{get name(){return e.column.name??t()("column.reactions")},get icon(){return n(Ye,{})},settings:()=>n(D,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(H,{loadMore:l,get eose(){return s()},get children(){return n(fe,{get events(){return o()}})}})}})},ct=e=>{const t=T(),{removeColumn:r}=b(),c=j(()=>({duration:4*60*60})),{events:l,eose:o}=q(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:20,since:c.since(),until:c.until()}],eoseLimit:20,clientEventFilter:s=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(s.content)}));return R(()=>c.setEvents(l())),n(B,{get header(){return n(O,{get name(){return e.column.name??t()("column.relay")},get icon(){return n(en,{})},settings:()=>n(D,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return c.timelineRef},get children(){return n(H,{loadMore:c,get eose(){return o()},get children(){return n(A,{get events(){return l()}})}})}})},it=g('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-fg-secondary"></span></h2><form class=flex-1><input class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"type=text name=query></form><button class="h-4 w-4">'),ut=e=>{const[t,r]=E(!1),[c,l]=E(""),{saveColumn:o}=b(),s=()=>r(d=>!d),i=()=>{c()!==e.column.query&&o({...e.column,query:c()})},a=()=>{i()},f=d=>{l(d.currentTarget.value)},m=d=>{d.preventDefault(),i()};return Q(()=>{l(e.column.query)}),(()=>{const d=it(),h=d.firstChild,v=h.firstChild,$=v.firstChild,x=v.nextSibling,I=x.firstChild,y=x.nextSibling;return u($,n(nn,{})),x.addEventListener("submit",m),I.addEventListener("blur",a),I.addEventListener("change",f),y.$$click=()=>s(),u(y,n(he,{})),u(d,n(C,{get when(){return t()},get children(){return e.settings()}}),null),P(()=>I.value=c()),d})()},at=e=>{const{removeColumn:t}=b(),r=j(()=>({duration:null})),{events:c,eose:l}=q(()=>{const{query:o}=e.column;return o.length===0?null:{relayUrls:Pe,filters:[{kinds:[1],search:o,limit:20,since:r.since(),until:r.until()}],eoseLimit:20,clientEventFilter:s=>s.tags.findIndex(([i])=>i==="mostr"||i==="proxy")>=0?!1:e.column.contentFilter==null?!0:S(e.column.contentFilter)(s.content)}});return R(()=>{r.setEvents(c())}),n(B,{get header(){return n(ut,{get column(){return e.column},settings:()=>n(D,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return r.timelineRef},get children(){return n(H,{loadMore:r,get eose(){return l()},get children(){return n(A,{get events(){return c()}})}})}})};F(["click"]);const dt=g('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),mt=()=>{const{config:e}=b();return(()=>{const t=dt();return u(t,n(K,{get each(){return e().columns},children:(r,c)=>{const l=()=>c()+1,o=()=>l()===e().columns.length;return n(V,{get children(){return[n(p,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:s=>n(An,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(p,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:s=>n(lt,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(p,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:s=>n(ot,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(p,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:s=>n(st,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(p,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:s=>n(ct,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(p,{get when(){return r.columnType==="Bookmark"&&r},keyed:!0,children:s=>n(On,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(p,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:s=>n(at,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})})]}})}})),t})()},gt=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],ht=e=>{const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t},ft=({shortcuts:e=gt,onShortcut:t})=>{const r=ht(e);Q(()=>{const c=tn(l=>{if(l.type!=="keydown"||l.ctrlKey||l.altKey||l.metaKey||l.target instanceof HTMLTextAreaElement||l.target instanceof HTMLInputElement)return;const o=r.get(l.key);o!=null&&t(o)},50);window.addEventListener("keydown",c),se(()=>{window.removeEventListener("keydown",c)})})},vt=()=>{const e=ce();ft({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),r=>console.error(r))}})},yt=g('<div class="absolute inset-0 flex h-svh w-screen touch-manipulation flex-row overflow-hidden">'),kt=()=>{vt();const e=Le(),{persistStatus:t}=sn(),r=on(),{config:c,initializeColumns:l}=b(),o=ie();return R(()=>{c().relayUrls.map(async s=>{try{const i=await r().ensureRelay(s);i.onnotice=a=>{console.error(`NOTICE: ${s}: ${a}`)},i.onclose=()=>{console.warn(`CLOSE: ${s}`)}}catch(i){console.error("ensureRelay failed",i)}})}),R(()=>{const s=o();s!=null&&l({pubkey:s})}),Q(()=>{t().loggedIn||e("/hello")}),Fe(s=>{console.error("uncaught error: ",s)}),(()=>{const s=yt();return u(s,n(rn,{}),null),u(s,n(mt,{}),null),u(s,n(ln,{}),null),s})()};export{kt as default};
//# sourceMappingURL=Home-bb28352c.js.map