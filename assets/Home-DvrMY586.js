const __vite__fileDeps=["assets/ZapReceipt-CFOiXw7D.js","assets/index-B7-HEwbd.js","assets/index-F2KlFJnY.css","assets/useFollowings-D9E5Ui0o.js","assets/SideBar-ChUFqZ4e.js","assets/resolveAsset-yBZiJ1ND.js","assets/LazyLoad-DPeXcrXx.js","assets/SafeLink-Ci_Krqgz.js","assets/url-BOMIwtgZ.js","assets/lud16ToLnurlPayUrl-DGv0Cvd9.js","assets/_baseClone-CqICPUcT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as O,t as d,d as N,c as p,i as u,a as n,h as I,M as $,S as K,j as k,k as Y,l as se,u as T,b as A,m as ie,n as ue,F as j,f as B,p as ee,q as E,r as Q,v as ae,w as ne,x as me,y as de,z as M,o as G,A as te,B as ge,C as he,_ as ve,R as fe,D as ye,Z as ke,E as xe,G as $e}from"./index-B7-HEwbd.js";import{u as J,a as re,b as oe,p as we,c as Ce,r as be,t as _e,B as Ie,d as Ee,H as Te,e as Se,f as Le,U as Fe,g as Re,h as pe,i as Me,j as Pe,G as De,M as Ue,k as ze,S as Be,l as qe,m as Ae}from"./SideBar-ChUFqZ4e.js";import{A as Ne}from"./arrow-left-4y-eFJNR.js";import{u as L,T as H,a as He,b as je,C as Oe,c as q,E as Ke,d as Qe,e as P,L as D,f as Ge,g as Ve,h as Ze,i as We,j as Je,R as Xe}from"./useFollowings-D9E5Ui0o.js";import{t as Ye}from"./url-BOMIwtgZ.js";import"./resolveAsset-yBZiJ1ND.js";import"./LazyLoad-DPeXcrXx.js";import"./SafeLink-Ci_Krqgz.js";const en=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),le=(e={})=>(()=>{const o=en();return O(o,e,!0),o})(),nn=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1"><h2 class="flex min-w-0 flex-1 items-center gap-1 ps-2"><span class=truncate></span></h2><button class="flex h-full place-items-center px-2"><span class="inline-block size-4">'),tn=d('<span class="inline-block size-4 shrink-0 text-fg-secondary">'),U=e=>{const[o,r]=p(!1),s=()=>r(t=>!t);return(()=>{const t=nn(),l=t.firstChild,c=l.firstChild,i=c.firstChild,a=c.nextSibling,h=a.firstChild;return u(c,n(I,{get when(){return e.icon},keyed:!0,children:v=>(()=>{const m=tn();return u(m,v),m})()}),i),u(i,()=>e.name),a.$$click=()=>s(),u(h,n(le,{})),u(t,n(I,{get when(){return o()},get children(){return e.settings()}}),null),t})()};N(["click"]);const rn=e=>{const o=[e.id],r=e.rootEvent()?.id;r!=null&&o.push(r);const s=e.replyingToEvent()?.id;return s!=null&&o.push(s),Y(o)},on=e=>{const{config:o}=k(),r=()=>se(e.event),{events:s}=L(()=>({relayUrls:o().relayUrls,filters:[{kinds:[1],ids:rn(r()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return n(H,{get events(){return[...s()].reverse()}})},ln=e=>n(K,{get children(){return n($,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:o=>n(on,{get event(){return o.event}})})}}),cn=d('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none">'),sn=d('<div class="shrink-0 border-b border-border">'),un=d('<div class="scrollbar flex flex-col overflow-y-scroll pb-16">'),an=d('<div class="flex shrink-0 items-center border-b border-border px-2"><button class="flex w-full items-center gap-1"><div class="inline-block size-4"></div><div>'),mn=d('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),F=e=>{let o;const r=He(),s=T(),t=()=>e.width??"medium";return J(()=>({commandType:"moveToColumn",handler:l=>{l.command==="moveToColumn"&&l.columnIndex===e.columnIndex&&o?.scrollIntoView({behavior:"smooth",inline:"center"})}})),J(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&o?.scrollIntoView({behavior:"smooth"})}})),n(je.Provider,{value:r,get children(){const l=cn(),c=o;return typeof c=="function"?ue(c,l):o=l,u(l,n(I,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const i=sn();return u(i,()=>e.header),i})(),(()=>{const i=un();return u(i,()=>e.children),i})()]},children:i=>[(()=>{const a=an(),h=a.firstChild,v=h.firstChild,m=v.nextSibling;return h.$$click=()=>r?.clearTimeline(),u(v,n(Ne,{})),u(m,()=>s.t("column.back")),a})(),(()=>{const a=mn();return u(a,n(ln,{timelineContent:i})),a})()]})),A(i=>ie(l,{"sm:w-[500px]":t()==="widest","sm:w-[360px]":t()==="wide","sm:w-[320px]":t()==="medium","sm:w-[280px]":t()==="narrow"},i)),l}})};N(["click"]);const dn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),gn=(e={})=>(()=>{const o=dn();return O(o,e,!0),o})(),hn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),vn=(e={})=>(()=>{const o=hn();return O(o,e,!0),o})(),fn=d('<div class="flex flex-col gap-2 border-b border-border p-2"><div></div><div>'),yn=d('<div class="scrollbar flex h-9 gap-2 overflow-x-auto">'),kn=d('<div class="flex flex-col border-t border-border"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block size-4"></span></button><button class="py-4 pr-2"><span class="inline-block size-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-danger hover:text-rose-600"><span class="inline-block size-4">'),xn=d('<button class="rounded-md border px-4 text-fg-secondary">'),$n=e=>(()=>{const o=fn(),r=o.firstChild,s=r.nextSibling;return u(r,()=>e.title),u(s,()=>e.children),o})(),R=e=>{const o=T(),{saveColumn:r,removeColumn:s,moveColumn:t}=k(),l=re(),c=a=>{r({...e.column,width:a})},i=a=>{t(e.column.id,a),l({command:"moveToColumn",columnIndex:a}).catch(h=>console.error(h))};return(()=>{const a=kn(),h=a.firstChild,v=h.firstChild,m=v.firstChild,g=v.nextSibling,w=g.firstChild,S=g.nextSibling,C=S.nextSibling,_=C.firstChild;return u(a,n($n,{get title(){return o.t("column.config.columnWidth")},get children(){const f=yn();return u(f,n(j,{each:["widest","wide","medium","narrow"],children:b=>(()=>{const x=xn();return x.$$click=()=>c(b),u(x,()=>o.t(`column.config.${b}`)),A(y=>{const z=e.column.width===b,V=e.column.width===b,Z=e.column.width!==b,W=e.column.width!==b;return z!==y._v$5&&x.classList.toggle("border-fg-secondary",y._v$5=z),V!==y._v$6&&x.classList.toggle("font-bold",y._v$6=V),Z!==y._v$7&&x.classList.toggle("border-border",y._v$7=Z),W!==y._v$8&&x.classList.toggle("font-normal",y._v$8=W),y},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),x})()})),f}}),h),v.$$click=()=>i(e.columnIndex-1),u(m,n(gn,{})),g.$$click=()=>i(e.columnIndex+1),u(w,n(Oe,{})),C.$$click=()=>s(e.column.id),u(_,n(vn,{})),A(f=>{const b=o.t("column.config.moveLeft"),x=o.t("column.config.moveRight"),y=o.t("column.config.removeColumn"),z=o.t("column.config.removeColumn");return b!==f._v$&&B(v,"title",f._v$=b),x!==f._v$2&&B(g,"title",f._v$2=x),y!==f._v$3&&B(C,"title",f._v$3=y),z!==f._v$4&&B(_,"aria-label",f._v$4=z),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),a})()};N(["click"]);const[X,wn]=ee(()=>p({})),[Cn,bn]=ee(()=>p({})),_n=e=>{const o=oe(),[r,s]=p(null);return E(()=>{const t=e();if(t==null)return;const{encrypted:l}=t;if(l in X()){s(X()[l]);return}const c=o();c!=null&&(Cn()[l]||(bn(i=>({...i,[l]:!0})),window.nostr?.nip04?.decrypt?.(c,l)?.then(i=>{wn(a=>({...a,[l]:i})),s(i)}).catch(i=>{console.error(`failed to decrypt "${l}"`,i)})))}),r},In=e=>{const o=Q(()=>ae(e.event)),r=_n(()=>{const{content:l}=o();return l==null||l.length===0?null:{id:o().id,encrypted:l}}),s=()=>{const l=r();if(l==null)return[];console.log(l);try{return we(l).taggedEventIds()}catch(c){return console.warn(c),[]}},t=()=>o().taggedEventIds();return n(j,{get each(){return[...t(),...s()]},children:l=>n(q,{get children(){return n(Ke,{eventId:l,get ensureKinds(){return[ne]}})}})})},En=e=>{const o=me(),r=Q(e),s=()=>["useFollowings",r()],t=de(()=>({queryKey:s(),queryFn:({queryKey:c,signal:i})=>{console.debug("useFollowings");const[,a]=c;if(a==null)return Promise.resolve(null);const{kind:h,author:v,identifier:m}=a,g=new Ie({type:"ParameterizedReplaceableEvent",kind:h,author:v,identifier:m}),w=g.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${v}:${m}`)});return g.onUpdate(S=>{const C=Ce(S);o.setQueryData(c,C)}),be({task:g,signal:i}),_e(15e3,`useParameterizedReplaceableEvent: ${h}:${v}:${m}`)(w)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>t.data??null,query:t}},Tn=e=>{const o=T(),{removeColumn:r}=k(),{event:s}=En(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return n(F,{get header(){return n(U,{get name(){return e.column.name??o.t("column.bookmark")},get icon(){return n(Ee,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(I,{get when(){return s()},keyed:!0,children:t=>n(In,{event:t})})}})},Sn=e=>{const o=T(),{config:r,removeColumn:s}=k(),{followingPubkeys:t}=Qe(()=>({pubkey:e.column.pubkey})),l=P(()=>({duration:4*60*60})),{events:c,eose:i}=L(()=>{const a=Y([...t()]);return a.length===0?null:{debugId:"following",relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:a,limit:20,since:l.since(),until:l.until()}],eoseLimit:20,continuous:l.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:h=>e.column.contentFilter==null?!0:M(e.column.contentFilter)(h.content)}});return E(()=>{console.log("home",c()),l.setEvents(c())}),G(()=>console.log("home timeline mounted")),te(()=>console.log("home timeline unmounted")),n(F,{get header(){return n(U,{get name(){return e.column.name??o.t("column.home")},get icon(){return n(Te,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:l,get eose(){return i()},get children(){return n(H,{get events(){return c()}})}})}})},Ln=d('<div class="flex items-center gap-1 pl-[2px] text-sm"><div class="notification-icon flex max-w-[64px] place-items-center overflow-hidden"></div><div class="notification-user flex flex-1 gap-1 overflow-hidden"><div class="author-icon size-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class="shrink-0 whitespace-pre"></span></div></div><div class=text-xs>'),Fn=d('<div class="notification-event py-1">'),Rn=d('<img alt=icon class="size-full object-cover">'),pn=d("<div class=truncate> "),Mn=e=>{const o=T(),r=Ge(),{shouldMuteEvent:s}=k(),{showProfile:t}=Re(),l=()=>ge(e.event),c=()=>l().lastTaggedEventId(),{profile:i}=Se(()=>({pubkey:e.event.pubkey})),{event:a,query:h}=Ve(()=>Le([c()])(([m])=>({eventId:m}))),v=()=>h.isSuccess&&a()==null;return n(I,{get when(){return Q(()=>!v())()&&!s(e.event)},get children(){return[(()=>{const m=Ln(),g=m.firstChild,w=g.nextSibling,S=w.firstChild,C=S.nextSibling,_=C.firstChild,f=_.nextSibling,b=w.nextSibling;return u(g,n(Ze,{get reactionTypes(){return l().toReactionTypes()}})),u(S,n(I,{get when(){return i()?.picture},keyed:!0,children:x=>(()=>{const y=Rn();return A(()=>B(y,"src",Ye(x,"icon"))),y})()})),_.$$click=()=>t(e.event.pubkey),u(_,n(Fe,{get pubkey(){return e.event.pubkey}})),u(f,()=>o.t("notification.reacted")),u(b,()=>r(l().createdAtAsDate())),m})(),(()=>{const m=Fn();return u(m,n(I,{get when(){return a()},get fallback(){return(()=>{const g=pn(),w=g.firstChild;return u(g,()=>o.t("general.loading"),w),u(g,c,null),g})()},keyed:!0,children:g=>n(We,{event:g})})),m})()]}})};N(["click"]);const Pn=d("<div>unknown event"),Dn=he(()=>ve(()=>import("./ZapReceipt-CFOiXw7D.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),ce=e=>{const{shouldMuteEvent:o}=k();return n(j,{get each(){return e.events},children:r=>n(I,{get when(){return!o(r)},get children(){return n(K,{get fallback(){return Pn()},get children(){return[n($,{get when(){return r.kind===ne},get children(){return n(q,{get children(){return n(Je,{event:r})}})}}),n($,{get when(){return r.kind===fe},get children(){return n(q,{get children(){return n(Mn,{event:r})}})}}),n($,{get when(){return r.kind===ye},get children(){return n(q,{get children(){return n(Xe,{event:r})}})}}),n($,{get when(){return r.kind===ke},get children(){return n(q,{get children(){return n(Dn,{event:r})}})}})]}})}})})},Un=e=>{const o=T(),{config:r,removeColumn:s}=k(),t=P(()=>({duration:null})),{events:l,eose:c}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6,7,9735],"#p":[e.column.pubkey],limit:20,since:t.since(),until:t.until()}],eoseLimit:20,clientEventFilter:i=>e.column.contentFilter==null?!0:M(e.column.contentFilter)(i.content)}));return E(()=>t.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??o.t("column.notification")},get icon(){return n(pe,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:t,get eose(){return c()},get children(){return n(ce,{get events(){return l()}})}})}})},zn=e=>{const o=T(),{config:r,removeColumn:s}=k(),t=P(()=>({duration:null})),{events:l,eose:c}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10,since:t.since(),until:t.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:M(e.column.contentFilter)(i.content)}));return E(()=>t.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??o.t("column.posts")},get icon(){return n(Me,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:t,get eose(){return c()},get children(){return n(H,{get events(){return l()}})}})}})},Bn=e=>{const o=T(),{config:r,removeColumn:s}=k(),t=P(()=>({duration:null})),{events:l,eose:c}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10,since:t.since(),until:t.until()}],eoseLimit:10,clientEventFilter:i=>e.column.contentFilter==null?!0:M(e.column.contentFilter)(i.content)}));return E(()=>t.setEvents(l())),n(F,{get header(){return n(U,{get name(){return e.column.name??o.t("column.reactions")},get icon(){return n(Pe,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:t,get eose(){return c()},get children(){return n(ce,{get events(){return l()}})}})}})},qn=e=>{const o=T(),{removeColumn:r}=k(),s=P(()=>({duration:4*60*60})),{events:t,eose:l}=L(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:20,since:s.since(),until:s.until()}],eoseLimit:20,clientEventFilter:c=>e.column.contentFilter==null?!0:M(e.column.contentFilter)(c.content)}));return E(()=>s.setEvents(t())),n(F,{get header(){return n(U,{get name(){return e.column.name??o.t("column.relay")},get icon(){return n(De,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:s,get eose(){return l()},get children(){return n(H,{get events(){return t()}})}})}})},An=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block size-4 text-fg-secondary"></span></h2><form class=flex-1><input class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"type=text name=query></form><button class=size-4>'),Nn=e=>{const[o,r]=p(!1),[s,t]=p(""),{saveColumn:l}=k(),c=()=>r(m=>!m),i=()=>{s()!==e.column.query&&l({...e.column,query:s()})},a=()=>{i()},h=m=>{t(m.currentTarget.value)},v=m=>{m.preventDefault(),i()};return G(()=>{t(e.column.query)}),(()=>{const m=An(),g=m.firstChild,w=g.firstChild,S=w.firstChild,C=w.nextSibling,_=C.firstChild,f=C.nextSibling;return u(S,n(Ue,{})),C.addEventListener("submit",v),_.addEventListener("blur",a),_.addEventListener("change",h),f.$$click=()=>c(),u(f,n(le,{})),u(m,n(I,{get when(){return o()},get children(){return e.settings()}}),null),A(()=>_.value=s()),m})()},Hn=e=>{const{removeColumn:o}=k(),r=P(()=>({duration:null})),{events:s,eose:t}=L(()=>{const{query:l}=e.column;return l.length===0?null:{relayUrls:xe,filters:[{kinds:[1],search:l,limit:20,since:r.since(),until:r.until()}],eoseLimit:20,clientEventFilter:c=>c.tags.findIndex(([i])=>i==="mostr"||i==="proxy")>=0?!1:e.column.contentFilter==null?!0:M(e.column.contentFilter)(c.content)}});return E(()=>{r.setEvents(s())}),n(F,{get header(){return n(Nn,{get column(){return e.column},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>o(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:r,get eose(){return t()},get children(){return n(H,{get events(){return s()}})}})}})};N(["click"]);const jn=d('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),On=()=>{const{config:e}=k();return(()=>{const o=jn();return u(o,n(j,{get each(){return e().columns},children:(r,s)=>{const t=()=>s()+1,l=()=>t()===e().columns.length;return n(K,{get children(){return[n($,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:c=>n(Sn,{column:c,get columnIndex(){return t()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:c=>n(Un,{column:c,get columnIndex(){return t()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:c=>n(zn,{column:c,get columnIndex(){return t()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:c=>n(Bn,{column:c,get columnIndex(){return t()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:c=>n(qn,{column:c,get columnIndex(){return t()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Bookmark"&&r},keyed:!0,children:c=>n(Tn,{column:c,get columnIndex(){return t()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:c=>n(Hn,{column:c,get columnIndex(){return t()},get lastColumn(){return l()}})})]}})}})),o})()},Kn=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],Qn=e=>{const o=new Map;return e.forEach(r=>{o.set(r.key,r)}),o},Gn=({shortcuts:e=Kn,onShortcut:o})=>{const r=Qn(e);G(()=>{const s=ze(t=>{if(t.type!=="keydown"||t.ctrlKey||t.altKey||t.metaKey||t.target instanceof HTMLTextAreaElement||t.target instanceof HTMLInputElement)return;const l=r.get(t.key);l!=null&&o(l)},50);window.addEventListener("keydown",s),te(()=>{window.removeEventListener("keydown",s)})})},Vn=()=>{const e=re();Gn({onShortcut:o=>{e(o.command).then(()=>console.debug(`shortcut key '${o.key}' was processed successfully`),r=>console.error(r))}})},Zn=d('<div class="absolute inset-0 flex h-svh w-screen touch-manipulation flex-row overflow-hidden">'),ot=()=>{Vn();const e=Ae(),{config:o,initializeColumns:r}=k(),s=oe();return E(()=>{Promise.allSettled(o().relayUrls.map(async t=>{try{const l=await e().ensureRelay(t);l.onnotice=c=>{console.error(`NOTICE: ${t}: ${c}`)},l.onclose=()=>{console.warn(`CLOSE: ${t}`)}}catch(l){console.error("ensureRelay failed",l)}})).catch(()=>{})}),E(()=>{const t=s();t!=null&&r({pubkey:t})}),$e(t=>{console.error("uncaught error: ",t)}),(()=>{const t=Zn();return u(t,n(Be,{}),null),u(t,n(On,{}),null),u(t,n(qe,{}),null),t})()};export{ot as default};
//# sourceMappingURL=Home-DvrMY586.js.map
