import{s as j,t as d,d as B,c as T,i as a,a as n,j as E,M as w,f as Q,k as $,l as te,m as ae,u as R,n as J,b as D,p as me,F as K,g as A,T as de,q as ge,r as re,v as p,w as H,x as he,y as oe,z as fe,A as ve,B as X,o as G,C as le,D as ye,E as xe,_ as $e,R as ke,G as we,Z as Ce,H as be,I as _e}from"./index-kaOe1-Is.js";import{A as Ie}from"./arrow-left-snTiOjyl.js";import{u as L,T as z,a as Te,b as Ee,C as Re,c as M,E as Se,d as pe,e as Me,f as Le,g as Fe,t as Pe,h as De,i as Be,R as Ue}from"./useFollowings-iSR8ogh_.js";import{u as Y,a as ce,b as se,p as Oe,r as Ne,t as qe,B as Ae,e as ee,c as He,d as ze,f as je,U as Ke,g as Qe,h as Ge,S as Ve,G as Ze,i as We}from"./SideBar-oFy0ciTh.js";import{H as Je,B as Xe,M as Ye}from"./magnifying-glass-Vlxgfsqb.js";import{U as en}from"./user-Fg19mpUi.js";import{H as nn,G as tn}from"./globe-alt-cuNxk1JV.js";import"./LazyLoad-p1kbwslQ.js";import"./resolveAsset-YHvJGZge.js";const rn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0">'),on=(e={})=>(()=>{const t=rn();return j(t,e,!0,!0),t})(),ln=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),ie=(e={})=>(()=>{const t=ln();return j(t,e,!0,!0),t})(),cn=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1"><h2 class="flex min-w-0 flex-1 items-center gap-1 ps-2"><span class=truncate></span></h2><button class="flex h-full place-items-center px-2"><span class="inline-block h-4 w-4">'),sn=d('<span class="inline-block h-4 w-4 shrink-0 text-fg-secondary">'),U=e=>{const[t,r]=T(!1),c=()=>r(o=>!o);return(()=>{const o=cn(),l=o.firstChild,s=l.firstChild,i=s.firstChild,u=s.nextSibling,h=u.firstChild;return a(s,n(E,{get when(){return e.icon},keyed:!0,children:f=>(()=>{const m=sn();return a(m,f),m})()}),i),a(i,()=>e.name),u.$$click=()=>c(),a(h,n(ie,{})),a(o,n(E,{get when(){return t()},get children(){return e.settings()}}),null),o})()};B(["click"]);const un=e=>{const t=[e.id],r=e.rootEvent()?.id;r!=null&&t.push(r);const c=e.replyingToEvent()?.id;return c!=null&&t.push(c),te(t)},an=e=>{const{config:t}=$(),r=()=>ae(e.event),{events:c}=L(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:un(r()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return n(z,{get events(){return[...c()].reverse()}})},mn=e=>n(Q,{get children(){return n(w,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>n(an,{get event(){return t.event}})})}}),dn=d('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none">'),gn=d('<div class="shrink-0 border-b border-border">'),hn=d('<div class="scrollbar flex flex-col overflow-y-scroll pb-16">'),fn=d('<div class="flex shrink-0 items-center border-b border-border px-2"><button class="flex w-full items-center gap-1"><div class="inline-block size-4"></div><div>'),vn=d('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),F=e=>{let t;const r=Te(),c=R(),o=()=>e.width??"medium";return Y(()=>({commandType:"moveToColumn",handler:l=>{l.command==="moveToColumn"&&l.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Y(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),n(Ee.Provider,{value:r,get children(){const l=dn(),s=t;return typeof s=="function"?J(s,l):t=l,a(l,n(E,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const i=gn();return a(i,()=>e.header),i})(),(()=>{const i=hn(),u=e.timelineRef;return typeof u=="function"?J(u,i):e.timelineRef=i,a(i,()=>e.children),i})()]},children:i=>[(()=>{const u=fn(),h=u.firstChild,f=h.firstChild,m=f.nextSibling;return h.$$click=()=>r?.clearTimeline(),a(f,n(Ie,{})),a(m,()=>c.t("column.back")),u})(),(()=>{const u=vn();return a(u,n(mn,{timelineContent:i})),u})()]})),D(i=>me(l,{"sm:w-[500px]":o()==="widest","sm:w-[360px]":o()==="wide","sm:w-[320px]":o()==="medium","sm:w-[280px]":o()==="narrow"},i)),l}})};B(["click"]);const yn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),xn=(e={})=>(()=>{const t=yn();return j(t,e,!0,!0),t})(),$n=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),kn=(e={})=>(()=>{const t=$n();return j(t,e,!0,!0),t})(),wn=d('<div class="flex flex-col gap-2 border-b border-border p-2"><div></div><div>'),Cn=d('<div class="scrollbar flex h-9 gap-2 overflow-x-auto">'),bn=d('<div class="flex flex-col border-t border-border"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block size-4"></span></button><button class="py-4 pr-2"><span class="inline-block size-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-danger hover:text-rose-600"><span class="inline-block size-4">'),_n=d('<button class="rounded-md border px-4 text-fg-secondary">'),In=e=>(()=>{const t=wn(),r=t.firstChild,c=r.nextSibling;return a(r,()=>e.title),a(c,()=>e.children),t})(),P=e=>{const t=R(),{saveColumn:r,removeColumn:c,moveColumn:o}=$(),l=ce(),s=u=>{r({...e.column,width:u})},i=u=>{o(e.column.id,u),l({command:"moveToColumn",columnIndex:u}).catch(h=>console.error(h))};return(()=>{const u=bn(),h=u.firstChild,f=h.firstChild,m=f.firstChild,g=f.nextSibling,v=g.firstChild,C=g.nextSibling,b=C.nextSibling,I=b.firstChild;return a(u,n(In,{get title(){return t.t("column.config.columnWidth")},get children(){const y=Cn();return a(y,n(K,{each:["widest","wide","medium","narrow"],children:_=>(()=>{const k=_n();return k.$$click=()=>s(_),a(k,()=>t.t(`column.config.${_}`)),D(x=>{const q=e.column.width===_,V=e.column.width===_,Z=e.column.width!==_,W=e.column.width!==_;return q!==x._v$5&&k.classList.toggle("border-fg-secondary",x._v$5=q),V!==x._v$6&&k.classList.toggle("font-bold",x._v$6=V),Z!==x._v$7&&k.classList.toggle("border-border",x._v$7=Z),W!==x._v$8&&k.classList.toggle("font-normal",x._v$8=W),x},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),k})()})),y}}),h),f.$$click=()=>i(e.columnIndex-1),a(m,n(xn,{})),g.$$click=()=>i(e.columnIndex+1),a(v,n(Re,{})),b.$$click=()=>c(e.column.id),a(I,n(kn,{})),D(y=>{const _=t.t("column.config.moveLeft"),k=t.t("column.config.moveRight"),x=t.t("column.config.removeColumn"),q=t.t("column.config.removeColumn");return _!==y._v$&&A(f,"title",y._v$=_),k!==y._v$2&&A(g,"title",y._v$2=k),x!==y._v$3&&A(b,"title",y._v$3=x),q!==y._v$4&&A(I,"aria-label",y._v$4=q),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),u})()};B(["click"]);class Tn extends ge{constructor(t){super(),this.tags=t}}const En=e=>{try{const t=de.parse(JSON.parse(e));return new Tn(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[ne,Rn]=re(()=>T({})),[Sn,pn]=re(()=>T({})),Mn=e=>{const t=se(),[r,c]=T(null);return p(()=>{const o=e();if(o==null)return;const{encrypted:l}=o;if(l in ne()){c(ne()[l]);return}const s=t();s!=null&&(Sn()[l]||(pn(i=>({...i,[l]:!0})),window.nostr?.nip04?.decrypt?.(s,l)?.then(i=>{Rn(u=>({...u,[l]:i})),c(i)}).catch(i=>{console.error(`failed to decrypt "${l}"`,i)})))}),r},Ln=e=>{const t=H(()=>he(e.event)),r=Mn(()=>{const{content:l}=t();return l==null||l.length===0?null:{id:t().id,encrypted:l}}),c=()=>{const l=r();if(l==null)return[];console.log(l);try{return En(l).taggedEventIds()}catch(s){return console.warn(s),[]}},o=()=>t().taggedEventIds();return n(K,{get each(){return[...o(),...c()]},children:l=>n(M,{get children(){return n(Se,{eventId:l,get ensureKinds(){return[oe]}})}})})},Fn=e=>{const t=fe(),r=H(e),c=()=>["useFollowings",r()],o=ve(()=>({queryKey:c(),queryFn:({queryKey:s,signal:i})=>{console.debug("useFollowings");const[,u]=s;if(u==null)return Promise.resolve(null);const{kind:h,author:f,identifier:m}=u,g=new Ae({type:"ParameterizedReplaceableEvent",kind:h,author:f,identifier:m}),v=g.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${f}:${m}`)});return g.onUpdate(C=>{const b=Oe(C);t.setQueryData(s,b)}),Ne({task:g,signal:i}),qe(15e3,`useParameterizedReplaceableEvent: ${h}:${f}:${m}`)(v)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>o.data??null,query:o}},Pn=e=>{const t=R(),{removeColumn:r}=$(),{event:c}=Fn(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return n(F,{get header(){return n(U,{get name(){return e.column.name??t.t("column.bookmark")},get icon(){return n(on,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(E,{get when(){return c()},keyed:!0,children:o=>n(Ln,{event:o})})}})},Dn=()=>{const[e,t]=T();return{targetRef:t,currentPosition:()=>e()?.scrollTop??0,scrollToTop:()=>{const l=e();l?.scrollTo(0,0)},scrollToBottom:()=>{const l=e();l?.scrollTo(0,l.scrollHeight)}}},Bn=d('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary"><span>'),Un=d('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary disabled:text-fg-secondary/30"><span>'),O=e=>{const t=H(e),r=v=>{const{duration:C}=t();if(C!=null)return v-C},[c,o]=T([]),[l,s]=T(r(ee())),[i,u]=T(),h=()=>i()==null,f=Dn(),m=()=>{X(()=>{u(void 0),s(r(ee()))}),f.scrollToTop()},g=()=>{const v=He(c());v!=null&&(X(()=>{u(v.created_at),s(r(v.created_at))}),f.scrollToTop())};return{timelineRef:f.targetRef,setEvents:o,since:l,until:i,continuous:h,loadLatest:m,loadOld:g}},N=e=>{const t=R();return[n(E,{get when(){return!e.loadMore.continuous()},get children(){return n(M,{get children(){const r=Bn(),c=r.firstChild;return r.$$click=()=>e.loadMore.loadLatest(),a(c,()=>t.t("column.loadLatest")),r}})}}),H(()=>e.children),n(M,{get children(){const r=Un(),c=r.firstChild;return r.$$click=()=>e.loadMore.loadOld(),a(c,()=>t.t("column.loadOld")),D(()=>r.disabled=!e.eose),r}})]};B(["click"]);const S=e=>t=>{switch(e.filterType){case"AND":return e.children.every(r=>S(r)(t));case"OR":return e.children.some(r=>S(r)(t));case"NOT":return!S(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},On=e=>{const t=R(),{config:r,removeColumn:c}=$(),{followingPubkeys:o}=pe(()=>({pubkey:e.column.pubkey})),l=O(()=>({duration:4*60*60})),{events:s,eose:i}=L(()=>{const u=te([...o()]);return u.length===0?null:{debugId:"following",relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:u,limit:20,since:l.since(),until:l.until()}],eoseLimit:20,continuous:l.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:h=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(h.content)}});return p(()=>{console.log("home",s()),l.setEvents(s())}),G(()=>console.log("home timeline mounted")),le(()=>console.log("home timeline unmounted")),n(F,{get header(){return n(U,{get name(){return e.column.name??t.t("column.home")},get icon(){return n(Je,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(N,{loadMore:l,get eose(){return i()},get children(){return n(z,{get events(){return s()}})}})}})},Nn=d('<div class="flex items-center gap-1 pl-[2px] text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex flex-1 gap-1 overflow-hidden"><div class="author-icon size-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class=shrink-0></span></div></div><div class=text-xs>'),qn=d('<div class="notification-event py-1">'),An=d('<img alt=icon class="size-full object-cover">'),Hn=d("<div class=truncate> "),zn=e=>{const t=R(),r=Me(),{shouldMuteEvent:c}=$(),{showProfile:o}=Qe(),l=()=>ye(e.event),s=()=>l().lastTaggedEventId(),{profile:i}=ze(()=>({pubkey:e.event.pubkey})),{event:u,query:h}=Le(()=>je([s()])(([m])=>({eventId:m}))),f=()=>h.isSuccess&&u()==null;return n(E,{get when(){return H(()=>!f())()&&!c(e.event)},get children(){return[(()=>{const m=Nn(),g=m.firstChild,v=g.nextSibling,C=v.firstChild,b=C.nextSibling,I=b.firstChild,y=I.nextSibling,_=v.nextSibling;return a(g,n(Fe,{get reactionTypes(){return l().toReactionTypes()}})),a(C,n(E,{get when(){return i()?.picture},keyed:!0,children:k=>(()=>{const x=An();return D(()=>A(x,"src",Pe(k,"icon"))),x})()})),I.$$click=()=>o(e.event.pubkey),a(I,n(Ke,{get pubkey(){return e.event.pubkey}})),a(y,()=>t.t("notification.reacted")),a(_,()=>r(l().createdAtAsDate())),m})(),(()=>{const m=qn();return a(m,n(E,{get when(){return u()},get fallback(){return(()=>{const g=Hn(),v=g.firstChild;return a(g,()=>t.t("general.loading"),v),a(g,s,null),g})()},keyed:!0,children:g=>n(De,{event:g})})),m})()]}})};B(["click"]);const jn=d("<div>unknown event"),Kn=xe(()=>$e(()=>import("./ZapReceipt-6lcVrcqw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),ue=e=>{const{shouldMuteEvent:t}=$();return n(K,{get each(){return e.events},children:r=>n(E,{get when(){return!t(r)},get children(){return n(Q,{get fallback(){return jn()},get children(){return[n(w,{get when(){return r.kind===oe},get children(){return n(M,{get children(){return n(Be,{event:r})}})}}),n(w,{get when(){return r.kind===ke},get children(){return n(M,{get children(){return n(zn,{event:r})}})}}),n(w,{get when(){return r.kind===we},get children(){return n(M,{get children(){return n(Ue,{event:r})}})}}),n(w,{get when(){return r.kind===Ce},get children(){return n(M,{get children(){return n(Kn,{event:r})}})}})]}})}})})},Qn=e=>{const t=R(),{config:r,removeColumn:c}=$(),o=O(()=>({duration:null})),{events:l,eose:s}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6,7,9735],"#p":[e.column.pubkey],limit:20,since:o.since(),until:o.until()}],eoseLimit:20,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return p(()=>o.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??t.t("column.notification")},get icon(){return n(Xe,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(N,{loadMore:o,get eose(){return s()},get children(){return n(ue,{get events(){return l()}})}})}})},Gn=e=>{const t=R(),{config:r,removeColumn:c}=$(),o=O(()=>({duration:null})),{events:l,eose:s}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10,since:o.since(),until:o.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return p(()=>o.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??t.t("column.posts")},get icon(){return n(en,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(N,{loadMore:o,get eose(){return s()},get children(){return n(z,{get events(){return l()}})}})}})},Vn=e=>{const t=R(),{config:r,removeColumn:c}=$(),o=O(()=>({duration:null})),{events:l,eose:s}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10,since:o.since(),until:o.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return p(()=>o.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??t.t("column.reactions")},get icon(){return n(nn,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(N,{loadMore:o,get eose(){return s()},get children(){return n(ue,{get events(){return l()}})}})}})},Zn=e=>{const t=R(),{removeColumn:r}=$(),c=O(()=>({duration:4*60*60})),{events:o,eose:l}=L(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:20,since:c.since(),until:c.until()}],eoseLimit:20,clientEventFilter:s=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(s.content)}));return p(()=>c.setEvents(o())),n(F,{get header(){return n(U,{get name(){return e.column.name??t.t("column.relay")},get icon(){return n(tn,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return c.timelineRef},get children(){return n(N,{loadMore:c,get eose(){return l()},get children(){return n(z,{get events(){return o()}})}})}})},Wn=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-fg-secondary"></span></h2><form class=flex-1><input class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"type=text name=query></form><button class="h-4 w-4">'),Jn=e=>{const[t,r]=T(!1),[c,o]=T(""),{saveColumn:l}=$(),s=()=>r(m=>!m),i=()=>{c()!==e.column.query&&l({...e.column,query:c()})},u=()=>{i()},h=m=>{o(m.currentTarget.value)},f=m=>{m.preventDefault(),i()};return G(()=>{o(e.column.query)}),(()=>{const m=Wn(),g=m.firstChild,v=g.firstChild,C=v.firstChild,b=v.nextSibling,I=b.firstChild,y=b.nextSibling;return a(C,n(Ye,{})),b.addEventListener("submit",f),I.addEventListener("blur",u),I.addEventListener("change",h),y.$$click=()=>s(),a(y,n(ie,{})),a(m,n(E,{get when(){return t()},get children(){return e.settings()}}),null),D(()=>I.value=c()),m})()},Xn=e=>{const{removeColumn:t}=$(),r=O(()=>({duration:null})),{events:c,eose:o}=L(()=>{const{query:l}=e.column;return l.length===0?null:{relayUrls:be,filters:[{kinds:[1],search:l,limit:20,since:r.since(),until:r.until()}],eoseLimit:20,clientEventFilter:s=>s.tags.findIndex(([i])=>i==="mostr"||i==="proxy")>=0?!1:e.column.contentFilter==null?!0:S(e.column.contentFilter)(s.content)}});return p(()=>{r.setEvents(c())}),n(F,{get header(){return n(Jn,{get column(){return e.column},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return r.timelineRef},get children(){return n(N,{loadMore:r,get eose(){return o()},get children(){return n(z,{get events(){return c()}})}})}})};B(["click"]);const Yn=d('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),et=()=>{const{config:e}=$();return(()=>{const t=Yn();return a(t,n(K,{get each(){return e().columns},children:(r,c)=>{const o=()=>c()+1,l=()=>o()===e().columns.length;return n(Q,{get children(){return[n(w,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:s=>n(On,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:s=>n(Qn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:s=>n(Gn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:s=>n(Vn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:s=>n(Zn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return r.columnType==="Bookmark"&&r},keyed:!0,children:s=>n(Pn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:s=>n(Xn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})})]}})}})),t})()},nt=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],tt=e=>{const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t},rt=({shortcuts:e=nt,onShortcut:t})=>{const r=tt(e);G(()=>{const c=Ge(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const l=r.get(o.key);l!=null&&t(l)},50);window.addEventListener("keydown",c),le(()=>{window.removeEventListener("keydown",c)})})},ot=()=>{const e=ce();rt({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),r=>console.error(r))}})},lt=d('<div class="absolute inset-0 flex h-svh w-screen touch-manipulation flex-row overflow-hidden">'),ft=()=>{ot();const e=We(),{config:t,initializeColumns:r}=$(),c=se();return p(()=>{Promise.allSettled(t().relayUrls.map(async o=>{try{const l=await e().ensureRelay(o);l.onnotice=s=>{console.error(`NOTICE: ${o}: ${s}`)},l.onclose=()=>{console.warn(`CLOSE: ${o}`)}}catch(l){console.error("ensureRelay failed",l)}})).catch(()=>{})}),p(()=>{const o=c();o!=null&&r({pubkey:o})}),_e(o=>{console.error("uncaught error: ",o)}),(()=>{const o=lt();return a(o,n(Ve,{}),null),a(o,n(et,{}),null),a(o,n(Ze,{}),null),o})()};export{ft as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZapReceipt-6lcVrcqw.js","assets/index-kaOe1-Is.js","assets/index-Ekk8Fcaw.css","assets/useFollowings-iSR8ogh_.js","assets/SideBar-oFy0ciTh.js","assets/resolveAsset-YHvJGZge.js","assets/globe-alt-cuNxk1JV.js","assets/LazyLoad-p1kbwslQ.js","assets/lud16ToLnurlPayUrl-b-PXuSRf.js","assets/_baseClone-JiyLpxyH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=Home-Hu6W6_FM.js.map
