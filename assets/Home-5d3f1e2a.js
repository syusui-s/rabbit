import{s as O,t as g,d as U,c as E,i as d,a as n,S as b,M as I,b as G,u as k,e as ye,f as xe,g as T,h as Y,j as F,k as $e,F as K,l as N,T as ke,m as we,n as oe,o as S,p as P,q as be,r as se,v as Ce,w as ce,x as ee,y as Z,z as ie,A as _e,B as pe,C as Ie,D as Te,E as Ee,G as Re,H as Se,I as Le,R as Pe,J as Me,Z as Fe,K as Ue,L as Be,N as De}from"./index-faf3af74.js";import{u as B,T as z,a as qe,b as ne,A as Ne,c as Oe,d as ue,e as ae,C as M,E as de,p as je,r as He,t as Ae,B as ze,f as te,g as Ve,h as Ke,H as Ze,i as Qe,j as Q,k as Ge,l as Je,m as We,U as me,n as ge,o as he,q as V,s as Xe,R as Ye,v as en,w as nn,x as tn,G as rn,M as ln,y as on,S as sn,z as cn,D as un}from"./SideBar-e4b78532.js";import{u as an}from"./usePersistStatus-ca3d3da2.js";const dn=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0">'),mn=(e={})=>(()=>{const t=dn();return O(t,e,!0,!0),t})(),gn=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),fe=(e={})=>(()=>{const t=gn();return O(t,e,!0,!0),t})(),hn=g('<div class="flex flex-col"><div class="flex h-8 items-center gap-1"><h2 class="flex min-w-0 flex-1 items-center gap-1 ps-2"><span class=truncate></span></h2><button class="flex h-full place-items-center px-2"><span class="inline-block h-4 w-4">'),fn=g('<span class="inline-block h-4 w-4 shrink-0 text-fg-secondary">'),j=e=>{const[t,r]=E(!1),i=()=>r(l=>!l);return(()=>{const l=hn(),o=l.firstChild,s=o.firstChild,c=s.firstChild,u=s.nextSibling,h=u.firstChild;return d(s,n(b,{get when(){return e.icon},keyed:!0,children:f=>(()=>{const m=fn();return d(m,f),m})()}),c),d(c,()=>e.name),u.$$click=()=>i(),d(h,n(fe,{})),d(l,n(b,{get when(){return t()},get children(){return e.settings()}}),null),l})()};U(["click"]);const vn=e=>{const t=[e.id],r=e.rootEvent()?.id;r!=null&&t.push(r);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),ye(t)},yn=e=>{const{config:t}=k(),r=()=>xe(e.event),{events:i}=B(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:vn(r()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return n(z,{get events(){return[...i()].reverse()}})},xn=e=>n(G,{get children(){return n(I,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>n(yn,{get event(){return t.event}})})}}),$n=g('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none">'),kn=g('<div class="shrink-0 border-b border-border">'),wn=g('<div class="scrollbar flex flex-col overflow-y-scroll pb-16">'),bn=g('<div class="flex shrink-0 items-center border-b border-border px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>'),Cn=g('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),D=e=>{let t;const r=qe(),i=T(),l=()=>e.width??"medium";return ne(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),ne(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),n(Oe.Provider,{value:r,get children(){const o=$n(),s=t;return typeof s=="function"?Y(s,o):t=o,d(o,n(b,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=kn();return d(c,()=>e.header),c})(),(()=>{const c=wn(),u=e.timelineRef;return typeof u=="function"?Y(u,c):e.timelineRef=c,d(c,()=>e.children),c})()]},children:c=>[(()=>{const u=bn(),h=u.firstChild,f=h.firstChild,m=f.nextSibling;return h.$$click=()=>r?.clearTimeline(),d(f,n(Ne,{})),d(m,()=>i()("column.back")),u})(),(()=>{const u=Cn();return d(u,n(xn,{timelineContent:c})),u})()]})),F(c=>$e(o,{"sm:w-[500px]":l()==="widest","sm:w-[360px]":l()==="wide","sm:w-[320px]":l()==="medium","sm:w-[280px]":l()==="narrow"},c)),o}})};U(["click"]);const _n=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),pn=(e={})=>(()=>{const t=_n();return O(t,e,!0,!0),t})(),In=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m8.25 4.5 7.5 7.5-7.5 7.5">'),Tn=(e={})=>(()=>{const t=In();return O(t,e,!0,!0),t})(),En=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),Rn=(e={})=>(()=>{const t=En();return O(t,e,!0,!0),t})(),Sn=g('<div class="flex flex-col gap-2 border-b border-border p-2"><div></div><div>'),Ln=g('<div class="scrollbar flex h-9 gap-2 overflow-x-scroll">'),Pn=g('<div class="flex flex-col border-t border-border"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2"><span class="inline-block h-4 w-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-danger hover:text-rose-600"><span class="inline-block h-4 w-4">'),Mn=g('<button class="rounded-md border px-4 text-fg-secondary">'),Fn=e=>(()=>{const t=Sn(),r=t.firstChild,i=r.nextSibling;return d(r,()=>e.title),d(i,()=>e.children),t})(),q=e=>{const t=T(),{saveColumn:r,removeColumn:i,moveColumn:l}=k(),o=ue(),s=u=>{r({...e.column,width:u})},c=u=>{l(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(h=>console.error(h))};return(()=>{const u=Pn(),h=u.firstChild,f=h.firstChild,m=f.firstChild,a=f.nextSibling,v=a.firstChild,w=a.nextSibling,C=w.nextSibling,p=C.firstChild;return d(u,n(Fn,{get title(){return t()("column.config.columnWidth")},get children(){const y=Ln();return d(y,n(K,{each:["widest","wide","medium","narrow"],children:_=>(()=>{const $=Mn();return $.$$click=()=>s(_),d($,()=>t()(`column.config.${_}`)),F(x=>{const L=e.column.width===_,J=e.column.width===_,W=e.column.width!==_,X=e.column.width!==_;return L!==x._v$5&&$.classList.toggle("border-fg-secondary",x._v$5=L),J!==x._v$6&&$.classList.toggle("font-bold",x._v$6=J),W!==x._v$7&&$.classList.toggle("border-border",x._v$7=W),X!==x._v$8&&$.classList.toggle("font-normal",x._v$8=X),x},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),$})()})),y}}),h),f.$$click=()=>c(e.columnIndex-1),d(m,n(pn,{})),a.$$click=()=>c(e.columnIndex+1),d(v,n(Tn,{})),C.$$click=()=>i(e.column.id),d(p,n(Rn,{})),F(y=>{const _=t()("column.config.moveLeft"),$=t()("column.config.moveRight"),x=t()("column.config.removeColumn"),L=t()("column.config.removeColumn");return _!==y._v$&&N(f,"title",y._v$=_),$!==y._v$2&&N(a,"title",y._v$2=$),x!==y._v$3&&N(C,"title",y._v$3=x),L!==y._v$4&&N(p,"aria-label",y._v$4=L),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),u})()};U(["click"]);class Un extends we{constructor(t){super(),this.tags=t}}const Bn=e=>{try{const t=ke.parse(JSON.parse(e));return new Un(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[re,Dn]=oe(()=>E({})),[qn,Nn]=oe(()=>E({})),On=e=>{const t=ae(),[r,i]=E(null);return S(()=>{const l=e();if(l==null)return;const{encrypted:o}=l;if(o in re()){i(re()[o]);return}const s=t();s!=null&&(qn()[o]||(Nn(c=>({...c,[o]:!0})),window.nostr?.nip04?.decrypt?.(s,o)?.then(c=>{Dn(u=>({...u,[o]:c})),i(c)}).catch(c=>{console.error(`failed to decrypt "${o}"`,c)})))}),r},jn=e=>{const t=P(()=>be(e.event)),r=On(()=>{const{content:o}=t();return o==null||o.length===0?null:{id:t().id,encrypted:o}}),i=()=>{const o=r();if(o==null)return[];console.log(o);try{return Bn(o).taggedEventIds()}catch(s){return console.warn(s),[]}},l=()=>t().taggedEventIds();return n(K,{get each(){return[...l(),...i()]},children:o=>n(M,{get children(){return n(de,{eventId:o,get ensureKinds(){return[se]}})}})})},Hn=e=>{const t=Ce(),r=P(e),i=()=>["useFollowings",r()],l=ce(()=>({queryKey:i(),queryFn:({queryKey:s,signal:c})=>{console.debug("useFollowings");const[,u]=s;if(u==null)return Promise.resolve(null);const{kind:h,author:f,identifier:m}=u,a=new ze({type:"ParameterizedReplaceableEvent",kind:h,author:f,identifier:m}),v=a.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${f}:${m}`)});return a.onUpdate(w=>{const C=je(w);t.setQueryData(s,C)}),He({task:a,signal:c}),Ae(15e3,`useParameterizedReplaceableEvent: ${h}:${f}:${m}`)(v)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>l.data??null,query:l}},An=e=>{const t=T(),{removeColumn:r}=k(),{event:i}=Hn(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return n(D,{get header(){return n(j,{get name(){return e.column.name??t()("column.bookmark")},get icon(){return n(mn,{})},settings:()=>n(q,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(b,{get when(){return i()},keyed:!0,children:l=>n(jn,{event:l})})}})},zn=()=>{const[e,t]=E();return{targetRef:t,currentPosition:()=>e()?.scrollTop??0,scrollToTop:()=>{const o=e();o?.scrollTo(0,0)},scrollToBottom:()=>{const o=e();o?.scrollTo(0,o.scrollHeight)}}},Vn=g('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary"><span>'),Kn=g('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary disabled:text-fg-secondary/30"><span>'),H=e=>{const t=P(e),r=v=>{const{duration:w}=t();if(w!=null)return v-w},[i,l]=E([]),[o,s]=E(r(te())),[c,u]=E(),h=()=>c()==null,f=zn(),m=()=>{ee(()=>{u(void 0),s(r(te()))}),f.scrollToTop()},a=()=>{const v=Ve(i());v!=null&&(ee(()=>{u(v.created_at),s(r(v.created_at))}),f.scrollToTop())};return{timelineRef:f.targetRef,setEvents:l,since:o,until:c,continuous:h,loadLatest:m,loadOld:a}},A=e=>{const t=T();return[n(b,{get when(){return!e.loadMore.continuous()},get children(){return n(M,{get children(){const r=Vn(),i=r.firstChild;return r.$$click=()=>e.loadMore.loadLatest(),d(i,()=>t()("column.loadLatest")),r}})}}),P(()=>e.children),n(M,{get children(){const r=Kn(),i=r.firstChild;return r.$$click=()=>e.loadMore.loadOld(),d(i,()=>t()("column.loadOld")),F(()=>r.disabled=!e.eose),r}})]};U(["click"]);const R=e=>t=>{switch(e.filterType){case"AND":return e.children.every(r=>R(r)(t));case"OR":return e.children.some(r=>R(r)(t));case"NOT":return!R(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Zn=e=>{const t=T(),{config:r,removeColumn:i}=k(),{followingPubkeys:l}=Ke(()=>({pubkey:e.column.pubkey})),o=H(()=>({duration:4*60*60})),{events:s,eose:c}=B(()=>{const u=_e.uniq([...l()]);return u.length===0?null:{debugId:"following",relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:u,limit:20,since:o.since(),until:o.until()}],eoseLimit:20,continuous:o.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:h=>e.column.contentFilter==null?!0:R(e.column.contentFilter)(h.content)}});return S(()=>{console.log("home",s()),o.setEvents(s())}),Z(()=>console.log("home timeline mounted")),ie(()=>console.log("home timeline unmounted")),n(D,{get header(){return n(j,{get name(){return e.column.name??t()("column.home")},get icon(){return n(Ze,{})},settings:()=>n(q,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(A,{loadMore:o,get eose(){return c()},get children(){return n(z,{get events(){return s()}})}})}})},Qn=g('<div class="flex items-center gap-1 pl-[2px] text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex flex-1 gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class=shrink-0></span></div></div><div class=text-xs>'),Gn=g('<div class="notification-event py-1">'),Jn=g('<img alt=icon class="h-full w-full object-cover">'),Wn=g("<div class=truncate> "),Xn=e=>{const t=T(),r=Qe(),{shouldMuteEvent:i}=k(),{showProfile:l}=he(),o=()=>pe(e.event),s=()=>o().lastTaggedEventId(),{profile:c}=Q(()=>({pubkey:e.event.pubkey})),{event:u,query:h}=Ge(()=>V([s()])(([m])=>({eventId:m}))),f=()=>h.isSuccess&&u()==null;return n(b,{get when(){return P(()=>!f())()&&!i(e.event)},get children(){return[(()=>{const m=Qn(),a=m.firstChild,v=a.nextSibling,w=v.firstChild,C=w.nextSibling,p=C.firstChild,y=p.nextSibling,_=v.nextSibling;return d(a,n(Je,{get reactionTypes(){return o().toReactionTypes()}})),d(w,n(b,{get when(){return c()?.picture},keyed:!0,children:$=>(()=>{const x=Jn();return F(()=>N(x,"src",We($))),x})()})),p.$$click=()=>l(e.event.pubkey),d(p,n(me,{get pubkey(){return e.event.pubkey}})),d(y,()=>t()("notification.reacted")),d(_,()=>r(o().createdAtAsDate())),m})(),(()=>{const m=Gn();return d(m,n(b,{get when(){return u()},get fallback(){return(()=>{const a=Wn(),v=a.firstChild;return d(a,()=>t()("general.loading"),v),d(a,s,null),a})()},keyed:!0,children:a=>n(ge,{event:a})})),m})()]}})};U(["click"]);const Yn=g('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143"clip-rule=evenodd>'),et=(e={})=>(()=>{const t=Yn();return O(t,e,!0,!0),t})(),le=e=>{const t=P(e),r=ce(()=>({queryKey:["useLnurlEndpoint",t()],queryFn:({queryKey:c})=>{const[,u]=c;if(u!=null)return Ie(u.lnurlPayUrl)},staleTime:5*60*1e3,gcTime:3*24*60*60*1e3})),i=()=>{const{data:c}=r;return c==null||"status"in c&&c.status==="ERROR"?null:c},l=()=>{const c=i();return c==null?!1:!!c.allowsNostr&&c.nostrPubkey!=null&&Te(c.nostrPubkey)},o=c=>{const u=t()?.lnurlPayUrl;if(u==null)return{success:!1,reason:"lnurlPayUrl is null"};const h=i();if(h==null)return{success:!1,reason:"metadata is not fetched"};if(!l())return{success:!1,reason:"nostr is not allowed"};const f=h.nostrPubkey;return f==null?{success:!1,reason:"nostrPubkey is null"}:Ee({zapReceipt:c,lnurlPayUrl:u,lnurlProviderPubkey:f})};return{endpoint:i,allowsNostr:l,isZapReceiptVerified:c=>o(c).success,query:r}},nt=g('<img alt=icon class="h-full w-full object-cover">'),tt=g('<div class="flex items-center gap-1 text-sm"><div class="flex w-6 flex-col items-center"><div class="h-4 w-4 shrink-0 text-amber-500"aria-hidden=true></div><div class="mt-[-2px] shrink-0 text-xs"></div></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class=shrink-0>'),rt=g('<div class="ml-7 whitespace-pre-wrap break-all rounded border border-border px-1 text-sm">'),lt=g('<div class="notification-event py-1">'),ot=e=>{const t=T(),{shouldMuteEvent:r}=k(),{showProfile:i}=he(),l=P(()=>Re(e.event)),{profile:o}=Q(()=>({pubkey:l().senderPubkey()})),{profile:s}=Q(()=>V([l().zappedPubkey()])(([a])=>({pubkey:a}))),c=()=>{const a=s()?.lud06;return a==null?null:Se(a)},u=()=>{const a=s()?.lud16;return a==null?null:Le(a)},h=le(()=>V([c()])(([a])=>({lnurlPayUrl:a}))),f=le(()=>V([u()])(([a])=>({lnurlPayUrl:a}))),m=()=>h.isZapReceiptVerified(e.event)||f.isZapReceiptVerified(e.event);return n(b,{get when(){return P(()=>!r(e.event))()&&m()},get children(){return[(()=>{const a=tt(),v=a.firstChild,w=v.firstChild,C=w.nextSibling,p=v.nextSibling,y=p.firstChild,_=y.nextSibling,$=_.firstChild,x=$.nextSibling;return d(w,n(et,{})),d(C,()=>Xe(l().amountSats())),d(y,n(b,{get when(){return o()?.picture!=null},get children(){const L=nt();return F(()=>N(L,"src",o()?.picture)),L}})),$.$$click=()=>i(l().senderPubkey()),d($,n(me,{get pubkey(){return l().senderPubkey()}})),d(x,()=>t()("notification.zapped")),a})(),n(b,{get when(){return l().description().content.length>0},get children(){const a=rt();return d(a,()=>l().description().content),a}}),n(b,{get when(){return l().zappedEventId()!=null},get children(){const a=lt();return d(a,n(de,{get eventId(){return l().zappedEventId()}})),a}})]}})};U(["click"]);const st=g("<div>unknown event"),ve=e=>{const{shouldMuteEvent:t}=k();return n(K,{get each(){return e.events},children:r=>n(b,{get when(){return!t(r)},get children(){return n(G,{get fallback(){return st()},get children(){return[n(I,{get when(){return r.kind===se},get children(){return n(M,{get children(){return n(ge,{event:r})}})}}),n(I,{get when(){return r.kind===Pe},get children(){return n(M,{get children(){return n(Xn,{event:r})}})}}),n(I,{get when(){return r.kind===Me},get children(){return n(M,{get children(){return n(Ye,{event:r})}})}}),n(I,{get when(){return r.kind===Fe},get children(){return n(M,{get children(){return n(ot,{event:r})}})}})]}})}})})},ct=e=>{const t=T(),{config:r,removeColumn:i}=k(),l=H(()=>({duration:null})),{events:o,eose:s}=B(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6,7,9735],"#p":[e.column.pubkey],limit:20,since:l.since(),until:l.until()}],eoseLimit:20,clientEventFilter:c=>e.column.contentFilter==null?!0:R(e.column.contentFilter)(c.content)}));return S(()=>l.setEvents(o())),n(D,{get header(){return n(j,{get name(){return e.column.name??t()("column.notification")},get icon(){return n(en,{})},settings:()=>n(q,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(A,{loadMore:l,get eose(){return s()},get children(){return n(ve,{get events(){return o()}})}})}})},it=e=>{const t=T(),{config:r,removeColumn:i}=k(),l=H(()=>({duration:null})),{events:o,eose:s}=B(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10,since:l.since(),until:l.until()}],eoseLimit:10,clientEventFilter:c=>e.column.contentFilter==null?!0:R(e.column.contentFilter)(c.content)}));return S(()=>l.setEvents(o())),n(D,{get header(){return n(j,{get name(){return e.column.name??t()("column.posts")},get icon(){return n(nn,{})},settings:()=>n(q,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(A,{loadMore:l,get eose(){return s()},get children(){return n(z,{get events(){return o()}})}})}})},ut=e=>{const t=T(),{config:r,removeColumn:i}=k(),l=H(()=>({duration:null})),{events:o,eose:s}=B(()=>({relayUrls:r().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10,since:l.since(),until:l.until()}],eoseLimit:10,clientEventFilter:c=>e.column.contentFilter==null?!0:R(e.column.contentFilter)(c.content)}));return S(()=>l.setEvents(o())),n(D,{get header(){return n(j,{get name(){return e.column.name??t()("column.reactions")},get icon(){return n(tn,{})},settings:()=>n(q,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(A,{loadMore:l,get eose(){return s()},get children(){return n(ve,{get events(){return o()}})}})}})},at=e=>{const t=T(),{removeColumn:r}=k(),i=H(()=>({duration:4*60*60})),{events:l,eose:o}=B(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:20,since:i.since(),until:i.until()}],eoseLimit:20,clientEventFilter:s=>e.column.contentFilter==null?!0:R(e.column.contentFilter)(s.content)}));return S(()=>i.setEvents(l())),n(D,{get header(){return n(j,{get name(){return e.column.name??t()("column.relay")},get icon(){return n(rn,{})},settings:()=>n(q,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return i.timelineRef},get children(){return n(A,{loadMore:i,get eose(){return o()},get children(){return n(z,{get events(){return l()}})}})}})},dt=g('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-fg-secondary"></span></h2><form class=flex-1><input class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"type=text name=query></form><button class="h-4 w-4">'),mt=e=>{const[t,r]=E(!1),[i,l]=E(""),{saveColumn:o}=k(),s=()=>r(m=>!m),c=()=>{i()!==e.column.query&&o({...e.column,query:i()})},u=()=>{c()},h=m=>{l(m.currentTarget.value)},f=m=>{m.preventDefault(),c()};return Z(()=>{l(e.column.query)}),(()=>{const m=dt(),a=m.firstChild,v=a.firstChild,w=v.firstChild,C=v.nextSibling,p=C.firstChild,y=C.nextSibling;return d(w,n(ln,{})),C.addEventListener("submit",f),p.addEventListener("blur",u),p.addEventListener("change",h),y.$$click=()=>s(),d(y,n(fe,{})),d(m,n(b,{get when(){return t()},get children(){return e.settings()}}),null),F(()=>p.value=i()),m})()},gt=e=>{const{removeColumn:t}=k(),r=H(()=>({duration:null})),{events:i,eose:l}=B(()=>{const{query:o}=e.column;return o.length===0?null:{relayUrls:Ue,filters:[{kinds:[1],search:o,limit:20,since:r.since(),until:r.until()}],eoseLimit:20,clientEventFilter:s=>s.tags.findIndex(([c])=>c==="mostr"||c==="proxy")>=0?!1:e.column.contentFilter==null?!0:R(e.column.contentFilter)(s.content)}});return S(()=>{r.setEvents(i())}),n(D,{get header(){return n(mt,{get column(){return e.column},settings:()=>n(q,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return r.timelineRef},get children(){return n(A,{loadMore:r,get eose(){return l()},get children(){return n(z,{get events(){return i()}})}})}})};U(["click"]);const ht=g('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),ft=()=>{const{config:e}=k();return(()=>{const t=ht();return d(t,n(K,{get each(){return e().columns},children:(r,i)=>{const l=()=>i()+1,o=()=>l()===e().columns.length;return n(G,{get children(){return[n(I,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:s=>n(Zn,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(I,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:s=>n(ct,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(I,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:s=>n(it,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(I,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:s=>n(ut,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(I,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:s=>n(at,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(I,{get when(){return r.columnType==="Bookmark"&&r},keyed:!0,children:s=>n(An,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})}),n(I,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:s=>n(gt,{column:s,get columnIndex(){return l()},get lastColumn(){return o()}})})]}})}})),t})()},vt=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],yt=e=>{const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t},xt=({shortcuts:e=vt,onShortcut:t})=>{const r=yt(e);Z(()=>{const i=on(l=>{if(l.type!=="keydown"||l.ctrlKey||l.altKey||l.metaKey||l.target instanceof HTMLTextAreaElement||l.target instanceof HTMLInputElement)return;const o=r.get(l.key);o!=null&&t(o)},50);window.addEventListener("keydown",i),ie(()=>{window.removeEventListener("keydown",i)})})},$t=()=>{const e=ue();xt({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),r=>console.error(r))}})},kt=g('<div class="absolute inset-0 flex h-svh w-screen touch-manipulation flex-row overflow-hidden">'),_t=()=>{$t();const e=Be(),{persistStatus:t}=an(),r=un(),{config:i,initializeColumns:l}=k(),o=ae();return S(()=>{i().relayUrls.map(async s=>{try{const c=await r().ensureRelay(s);c.onnotice=u=>{console.error(`NOTICE: ${s}: ${u}`)},c.onclose=()=>{console.warn(`CLOSE: ${s}`)}}catch(c){console.error("ensureRelay failed",c)}})}),S(()=>{const s=o();s!=null&&l({pubkey:s})}),Z(()=>{t().loggedIn||e("/hello")}),De(s=>{console.error("uncaught error: ",s)}),(()=>{const s=kt();return d(s,n(sn,{}),null),d(s,n(ft,{}),null),d(s,n(cn,{}),null),s})()};export{_t as default};
//# sourceMappingURL=Home-5d3f1e2a.js.map
