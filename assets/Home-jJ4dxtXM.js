import{s as K,t as d,d as B,c as T,i as a,a as n,j as E,M as w,f as Q,k as $,l as te,m as ae,u as R,n as J,b as D,p as me,F as j,g as q,T as de,q as ge,r as re,v as M,w as A,x as he,y as oe,z as fe,A as ve,B as X,o as G,C as le,D as ye,E as xe,_ as $e,R as ke,G as we,Z as be,H as Ce,I as _e}from"./index-TwtfprWo.js";import{u as Y,a as ce,b as se,p as Ie,r as Te,t as Ee,B as Re,c as Se,e as ee,d as Me,H as pe,f as Le,g as Fe,U as Pe,h as De,i as Be,j as Ue,k as ze,G as Oe,M as Ne,l as qe,S as Ae,m as He,n as je}from"./SideBar-dmg735xf.js";import{A as Ke}from"./arrow-left-nLga-oaq.js";import{u as L,T as H,a as Qe,b as Ge,C as Ve,c as p,E as Ze,d as We,e as Je,f as Xe,g as Ye,t as en,h as nn,i as tn,R as rn}from"./useFollowings-q3_lZrE2.js";import"./resolveAsset-z6sEayxh.js";import"./LazyLoad-P00TKE2f.js";const on=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),ie=(e={})=>(()=>{const r=on();return K(r,e,!0,!0),r})(),ln=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1"><h2 class="flex min-w-0 flex-1 items-center gap-1 ps-2"><span class=truncate></span></h2><button class="flex h-full place-items-center px-2"><span class="inline-block size-4">'),cn=d('<span class="inline-block size-4 shrink-0 text-fg-secondary">'),U=e=>{const[r,t]=T(!1),c=()=>t(o=>!o);return(()=>{const o=ln(),l=o.firstChild,s=l.firstChild,i=s.firstChild,u=s.nextSibling,h=u.firstChild;return a(s,n(E,{get when(){return e.icon},keyed:!0,children:f=>(()=>{const m=cn();return a(m,f),m})()}),i),a(i,()=>e.name),u.$$click=()=>c(),a(h,n(ie,{})),a(o,n(E,{get when(){return r()},get children(){return e.settings()}}),null),o})()};B(["click"]);const sn=e=>{const r=[e.id],t=e.rootEvent()?.id;t!=null&&r.push(t);const c=e.replyingToEvent()?.id;return c!=null&&r.push(c),te(r)},un=e=>{const{config:r}=$(),t=()=>ae(e.event),{events:c}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1],ids:sn(t()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return n(H,{get events(){return[...c()].reverse()}})},an=e=>n(Q,{get children(){return n(w,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:r=>n(un,{get event(){return r.event}})})}}),mn=d('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none">'),dn=d('<div class="shrink-0 border-b border-border">'),gn=d('<div class="scrollbar flex flex-col overflow-y-scroll pb-16">'),hn=d('<div class="flex shrink-0 items-center border-b border-border px-2"><button class="flex w-full items-center gap-1"><div class="inline-block size-4"></div><div>'),fn=d('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),F=e=>{let r;const t=Qe(),c=R(),o=()=>e.width??"medium";return Y(()=>({commandType:"moveToColumn",handler:l=>{l.command==="moveToColumn"&&l.columnIndex===e.columnIndex&&r?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Y(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&r?.scrollIntoView({behavior:"smooth"})}})),n(Ge.Provider,{value:t,get children(){const l=mn(),s=r;return typeof s=="function"?J(s,l):r=l,a(l,n(E,{get when(){return t.timelineState.content},keyed:!0,get fallback(){return[(()=>{const i=dn();return a(i,()=>e.header),i})(),(()=>{const i=gn(),u=e.timelineRef;return typeof u=="function"?J(u,i):e.timelineRef=i,a(i,()=>e.children),i})()]},children:i=>[(()=>{const u=hn(),h=u.firstChild,f=h.firstChild,m=f.nextSibling;return h.$$click=()=>t?.clearTimeline(),a(f,n(Ke,{})),a(m,()=>c.t("column.back")),u})(),(()=>{const u=fn();return a(u,n(an,{timelineContent:i})),u})()]})),D(i=>me(l,{"sm:w-[500px]":o()==="widest","sm:w-[360px]":o()==="wide","sm:w-[320px]":o()==="medium","sm:w-[280px]":o()==="narrow"},i)),l}})};B(["click"]);const vn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),yn=(e={})=>(()=>{const r=vn();return K(r,e,!0,!0),r})(),xn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),$n=(e={})=>(()=>{const r=xn();return K(r,e,!0,!0),r})(),kn=d('<div class="flex flex-col gap-2 border-b border-border p-2"><div></div><div>'),wn=d('<div class="scrollbar flex h-9 gap-2 overflow-x-auto">'),bn=d('<div class="flex flex-col border-t border-border"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block size-4"></span></button><button class="py-4 pr-2"><span class="inline-block size-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-danger hover:text-rose-600"><span class="inline-block size-4">'),Cn=d('<button class="rounded-md border px-4 text-fg-secondary">'),_n=e=>(()=>{const r=kn(),t=r.firstChild,c=t.nextSibling;return a(t,()=>e.title),a(c,()=>e.children),r})(),P=e=>{const r=R(),{saveColumn:t,removeColumn:c,moveColumn:o}=$(),l=ce(),s=u=>{t({...e.column,width:u})},i=u=>{o(e.column.id,u),l({command:"moveToColumn",columnIndex:u}).catch(h=>console.error(h))};return(()=>{const u=bn(),h=u.firstChild,f=h.firstChild,m=f.firstChild,g=f.nextSibling,v=g.firstChild,b=g.nextSibling,C=b.nextSibling,I=C.firstChild;return a(u,n(_n,{get title(){return r.t("column.config.columnWidth")},get children(){const y=wn();return a(y,n(j,{each:["widest","wide","medium","narrow"],children:_=>(()=>{const k=Cn();return k.$$click=()=>s(_),a(k,()=>r.t(`column.config.${_}`)),D(x=>{const N=e.column.width===_,V=e.column.width===_,Z=e.column.width!==_,W=e.column.width!==_;return N!==x._v$5&&k.classList.toggle("border-fg-secondary",x._v$5=N),V!==x._v$6&&k.classList.toggle("font-bold",x._v$6=V),Z!==x._v$7&&k.classList.toggle("border-border",x._v$7=Z),W!==x._v$8&&k.classList.toggle("font-normal",x._v$8=W),x},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),k})()})),y}}),h),f.$$click=()=>i(e.columnIndex-1),a(m,n(yn,{})),g.$$click=()=>i(e.columnIndex+1),a(v,n(Ve,{})),C.$$click=()=>c(e.column.id),a(I,n($n,{})),D(y=>{const _=r.t("column.config.moveLeft"),k=r.t("column.config.moveRight"),x=r.t("column.config.removeColumn"),N=r.t("column.config.removeColumn");return _!==y._v$&&q(f,"title",y._v$=_),k!==y._v$2&&q(g,"title",y._v$2=k),x!==y._v$3&&q(C,"title",y._v$3=x),N!==y._v$4&&q(I,"aria-label",y._v$4=N),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),u})()};B(["click"]);class In extends ge{constructor(r){super(),this.tags=r}}const Tn=e=>{try{const r=de.parse(JSON.parse(e));return new In(r)}catch(r){throw new TypeError("failed to parse tags schema: ",{cause:r})}},[ne,En]=re(()=>T({})),[Rn,Sn]=re(()=>T({})),Mn=e=>{const r=se(),[t,c]=T(null);return M(()=>{const o=e();if(o==null)return;const{encrypted:l}=o;if(l in ne()){c(ne()[l]);return}const s=r();s!=null&&(Rn()[l]||(Sn(i=>({...i,[l]:!0})),window.nostr?.nip04?.decrypt?.(s,l)?.then(i=>{En(u=>({...u,[l]:i})),c(i)}).catch(i=>{console.error(`failed to decrypt "${l}"`,i)})))}),t},pn=e=>{const r=A(()=>he(e.event)),t=Mn(()=>{const{content:l}=r();return l==null||l.length===0?null:{id:r().id,encrypted:l}}),c=()=>{const l=t();if(l==null)return[];console.log(l);try{return Tn(l).taggedEventIds()}catch(s){return console.warn(s),[]}},o=()=>r().taggedEventIds();return n(j,{get each(){return[...o(),...c()]},children:l=>n(p,{get children(){return n(Ze,{eventId:l,get ensureKinds(){return[oe]}})}})})},Ln=e=>{const r=fe(),t=A(e),c=()=>["useFollowings",t()],o=ve(()=>({queryKey:c(),queryFn:({queryKey:s,signal:i})=>{console.debug("useFollowings");const[,u]=s;if(u==null)return Promise.resolve(null);const{kind:h,author:f,identifier:m}=u,g=new Re({type:"ParameterizedReplaceableEvent",kind:h,author:f,identifier:m}),v=g.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${f}:${m}`)});return g.onUpdate(b=>{const C=Ie(b);r.setQueryData(s,C)}),Te({task:g,signal:i}),Ee(15e3,`useParameterizedReplaceableEvent: ${h}:${f}:${m}`)(v)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>o.data??null,query:o}},Fn=e=>{const r=R(),{removeColumn:t}=$(),{event:c}=Ln(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return n(F,{get header(){return n(U,{get name(){return e.column.name??r.t("column.bookmark")},get icon(){return n(Se,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(E,{get when(){return c()},keyed:!0,children:o=>n(pn,{event:o})})}})},Pn=()=>{const[e,r]=T();return{targetRef:r,currentPosition:()=>e()?.scrollTop??0,scrollToTop:()=>{const l=e();l?.scrollTo(0,0)},scrollToBottom:()=>{const l=e();l?.scrollTo(0,l.scrollHeight)}}},Dn=d('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary"><span>'),Bn=d('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary disabled:text-fg-secondary/30"><span>'),z=e=>{const r=A(e),t=v=>{const{duration:b}=r();if(b!=null)return v-b},[c,o]=T([]),[l,s]=T(t(ee())),[i,u]=T(),h=()=>i()==null,f=Pn(),m=()=>{X(()=>{u(void 0),s(t(ee()))}),f.scrollToTop()},g=()=>{const v=Me(c());v!=null&&(X(()=>{u(v.created_at),s(t(v.created_at))}),f.scrollToTop())};return{timelineRef:f.targetRef,setEvents:o,since:l,until:i,continuous:h,loadLatest:m,loadOld:g}},O=e=>{const r=R();return[n(E,{get when(){return!e.loadMore.continuous()},get children(){return n(p,{get children(){const t=Dn(),c=t.firstChild;return t.$$click=()=>e.loadMore.loadLatest(),a(c,()=>r.t("column.loadLatest")),t}})}}),A(()=>e.children),n(p,{get children(){const t=Bn(),c=t.firstChild;return t.$$click=()=>e.loadMore.loadOld(),a(c,()=>r.t("column.loadOld")),D(()=>t.disabled=!e.eose),t}})]};B(["click"]);const S=e=>r=>{switch(e.filterType){case"AND":return e.children.every(t=>S(t)(r));case"OR":return e.children.some(t=>S(t)(r));case"NOT":return!S(e.child)(r);case"Text":return r.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(r);default:console.error("unsupported content filter type");break}return!1},Un=e=>{const r=R(),{config:t,removeColumn:c}=$(),{followingPubkeys:o}=We(()=>({pubkey:e.column.pubkey})),l=z(()=>({duration:4*60*60})),{events:s,eose:i}=L(()=>{const u=te([...o()]);return u.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:u,limit:20,since:l.since(),until:l.until()}],eoseLimit:20,continuous:l.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:h=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(h.content)}});return M(()=>{console.log("home",s()),l.setEvents(s())}),G(()=>console.log("home timeline mounted")),le(()=>console.log("home timeline unmounted")),n(F,{get header(){return n(U,{get name(){return e.column.name??r.t("column.home")},get icon(){return n(pe,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return l.timelineRef},get children(){return n(O,{loadMore:l,get eose(){return i()},get children(){return n(H,{get events(){return s()}})}})}})},zn=d('<div class="flex items-center gap-1 pl-[2px] text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex flex-1 gap-1 overflow-hidden"><div class="author-icon size-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class=shrink-0></span></div></div><div class=text-xs>'),On=d('<div class="notification-event py-1">'),Nn=d('<img alt=icon class="size-full object-cover">'),qn=d("<div class=truncate> "),An=e=>{const r=R(),t=Je(),{shouldMuteEvent:c}=$(),{showProfile:o}=De(),l=()=>ye(e.event),s=()=>l().lastTaggedEventId(),{profile:i}=Le(()=>({pubkey:e.event.pubkey})),{event:u,query:h}=Xe(()=>Fe([s()])(([m])=>({eventId:m}))),f=()=>h.isSuccess&&u()==null;return n(E,{get when(){return A(()=>!f())()&&!c(e.event)},get children(){return[(()=>{const m=zn(),g=m.firstChild,v=g.nextSibling,b=v.firstChild,C=b.nextSibling,I=C.firstChild,y=I.nextSibling,_=v.nextSibling;return a(g,n(Ye,{get reactionTypes(){return l().toReactionTypes()}})),a(b,n(E,{get when(){return i()?.picture},keyed:!0,children:k=>(()=>{const x=Nn();return D(()=>q(x,"src",en(k,"icon"))),x})()})),I.$$click=()=>o(e.event.pubkey),a(I,n(Pe,{get pubkey(){return e.event.pubkey}})),a(y,()=>r.t("notification.reacted")),a(_,()=>t(l().createdAtAsDate())),m})(),(()=>{const m=On();return a(m,n(E,{get when(){return u()},get fallback(){return(()=>{const g=qn(),v=g.firstChild;return a(g,()=>r.t("general.loading"),v),a(g,s,null),g})()},keyed:!0,children:g=>n(nn,{event:g})})),m})()]}})};B(["click"]);const Hn=d("<div>unknown event"),jn=xe(()=>$e(()=>import("./ZapReceipt-ISl1lZuV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),ue=e=>{const{shouldMuteEvent:r}=$();return n(j,{get each(){return e.events},children:t=>n(E,{get when(){return!r(t)},get children(){return n(Q,{get fallback(){return Hn()},get children(){return[n(w,{get when(){return t.kind===oe},get children(){return n(p,{get children(){return n(tn,{event:t})}})}}),n(w,{get when(){return t.kind===ke},get children(){return n(p,{get children(){return n(An,{event:t})}})}}),n(w,{get when(){return t.kind===we},get children(){return n(p,{get children(){return n(rn,{event:t})}})}}),n(w,{get when(){return t.kind===be},get children(){return n(p,{get children(){return n(jn,{event:t})}})}})]}})}})})},Kn=e=>{const r=R(),{config:t,removeColumn:c}=$(),o=z(()=>({duration:null})),{events:l,eose:s}=L(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7,9735],"#p":[e.column.pubkey],limit:20,since:o.since(),until:o.until()}],eoseLimit:20,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return M(()=>o.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??r.t("column.notification")},get icon(){return n(Be,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(O,{loadMore:o,get eose(){return s()},get children(){return n(ue,{get events(){return l()}})}})}})},Qn=e=>{const r=R(),{config:t,removeColumn:c}=$(),o=z(()=>({duration:null})),{events:l,eose:s}=L(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10,since:o.since(),until:o.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return M(()=>o.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??r.t("column.posts")},get icon(){return n(Ue,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(O,{loadMore:o,get eose(){return s()},get children(){return n(H,{get events(){return l()}})}})}})},Gn=e=>{const r=R(),{config:t,removeColumn:c}=$(),o=z(()=>({duration:null})),{events:l,eose:s}=L(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10,since:o.since(),until:o.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(i.content)}));return M(()=>o.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??r.t("column.reactions")},get icon(){return n(ze,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>c(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return o.timelineRef},get children(){return n(O,{loadMore:o,get eose(){return s()},get children(){return n(ue,{get events(){return l()}})}})}})},Vn=e=>{const r=R(),{removeColumn:t}=$(),c=z(()=>({duration:4*60*60})),{events:o,eose:l}=L(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:20,since:c.since(),until:c.until()}],eoseLimit:20,clientEventFilter:s=>e.column.contentFilter==null?!0:S(e.column.contentFilter)(s.content)}));return M(()=>c.setEvents(o())),n(F,{get header(){return n(U,{get name(){return e.column.name??r.t("column.relay")},get icon(){return n(Oe,{})},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return c.timelineRef},get children(){return n(O,{loadMore:c,get eose(){return l()},get children(){return n(H,{get events(){return o()}})}})}})},Zn=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block size-4 text-fg-secondary"></span></h2><form class=flex-1><input class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"type=text name=query></form><button class=size-4>'),Wn=e=>{const[r,t]=T(!1),[c,o]=T(""),{saveColumn:l}=$(),s=()=>t(m=>!m),i=()=>{c()!==e.column.query&&l({...e.column,query:c()})},u=()=>{i()},h=m=>{o(m.currentTarget.value)},f=m=>{m.preventDefault(),i()};return G(()=>{o(e.column.query)}),(()=>{const m=Zn(),g=m.firstChild,v=g.firstChild,b=v.firstChild,C=v.nextSibling,I=C.firstChild,y=C.nextSibling;return a(b,n(Ne,{})),C.addEventListener("submit",f),I.addEventListener("blur",u),I.addEventListener("change",h),y.$$click=()=>s(),a(y,n(ie,{})),a(m,n(E,{get when(){return r()},get children(){return e.settings()}}),null),D(()=>I.value=c()),m})()},Jn=e=>{const{removeColumn:r}=$(),t=z(()=>({duration:null})),{events:c,eose:o}=L(()=>{const{query:l}=e.column;return l.length===0?null:{relayUrls:Ce,filters:[{kinds:[1],search:l,limit:20,since:t.since(),until:t.until()}],eoseLimit:20,clientEventFilter:s=>s.tags.findIndex(([i])=>i==="mostr"||i==="proxy")>=0?!1:e.column.contentFilter==null?!0:S(e.column.contentFilter)(s.content)}});return M(()=>{t.setEvents(c())}),n(F,{get header(){return n(Wn,{get column(){return e.column},settings:()=>n(P,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get timelineRef(){return t.timelineRef},get children(){return n(O,{loadMore:t,get eose(){return o()},get children(){return n(H,{get events(){return c()}})}})}})};B(["click"]);const Xn=d('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),Yn=()=>{const{config:e}=$();return(()=>{const r=Xn();return a(r,n(j,{get each(){return e().columns},children:(t,c)=>{const o=()=>c()+1,l=()=>o()===e().columns.length;return n(Q,{get children(){return[n(w,{get when(){return t.columnType==="Following"&&t},keyed:!0,children:s=>n(Un,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return t.columnType==="Notification"&&t},keyed:!0,children:s=>n(Kn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return t.columnType==="Posts"&&t},keyed:!0,children:s=>n(Qn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return t.columnType==="Reactions"&&t},keyed:!0,children:s=>n(Gn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return t.columnType==="Relays"&&t},keyed:!0,children:s=>n(Vn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return t.columnType==="Bookmark"&&t},keyed:!0,children:s=>n(Fn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})}),n(w,{get when(){return t.columnType==="Search"&&t},keyed:!0,children:s=>n(Jn,{column:s,get columnIndex(){return o()},get lastColumn(){return l()}})})]}})}})),r})()},et=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],nt=e=>{const r=new Map;return e.forEach(t=>{r.set(t.key,t)}),r},tt=({shortcuts:e=et,onShortcut:r})=>{const t=nt(e);G(()=>{const c=qe(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const l=t.get(o.key);l!=null&&r(l)},50);window.addEventListener("keydown",c),le(()=>{window.removeEventListener("keydown",c)})})},rt=()=>{const e=ce();tt({onShortcut:r=>{e(r.command).then(()=>console.debug(`shortcut key '${r.key}' was processed successfully`),t=>console.error(t))}})},ot=d('<div class="absolute inset-0 flex h-svh w-screen touch-manipulation flex-row overflow-hidden">'),mt=()=>{rt();const e=je(),{config:r,initializeColumns:t}=$(),c=se();return M(()=>{Promise.allSettled(r().relayUrls.map(async o=>{try{const l=await e().ensureRelay(o);l.onnotice=s=>{console.error(`NOTICE: ${o}: ${s}`)},l.onclose=()=>{console.warn(`CLOSE: ${o}`)}}catch(l){console.error("ensureRelay failed",l)}})).catch(()=>{})}),M(()=>{const o=c();o!=null&&t({pubkey:o})}),_e(o=>{console.error("uncaught error: ",o)}),(()=>{const o=ot();return a(o,n(Ae,{}),null),a(o,n(Yn,{}),null),a(o,n(He,{}),null),o})()};export{mt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZapReceipt-ISl1lZuV.js","assets/index-TwtfprWo.js","assets/index-XkL8ajuR.css","assets/useFollowings-q3_lZrE2.js","assets/SideBar-dmg735xf.js","assets/resolveAsset-z6sEayxh.js","assets/LazyLoad-P00TKE2f.js","assets/lud16ToLnurlPayUrl-bD22cE5M.js","assets/_baseClone-pAjXC9kz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=Home-jJ4dxtXM.js.map