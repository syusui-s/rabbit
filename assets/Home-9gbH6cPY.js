import{s as j,t as d,d as A,c as F,i,a as n,h as I,M as $,S as K,j as x,k as Y,l as se,u as S,b as q,m as ue,n as ie,F as H,f as B,T as ae,p as me,q as ee,r as E,v as Q,w as de,x as ne,y as ge,z as he,o as G,A as te,B as ve,C as fe,_ as ye,R as xe,D as ke,Z as $e,E as we,G as Ce}from"./index-QPQwOpEp.js";import{u as J,a as re,b as oe,p as be,r as _e,t as Ie,B as Te,c as Ee,H as Se,d as pe,e as Le,U as Me,f as Re,g as Fe,h as Pe,i as De,G as Ue,M as ze,j as Be,S as Ne,k as qe,l as Ae}from"./SideBar-aqJkD1DH.js";import{A as Oe}from"./arrow-left-jtL0wGNa.js";import{u as L,T as O,a as He,b as je,C as Ke,c as N,E as Qe,d as Ge,e as P,L as D,f as Ve,g as Ze,h as We,i as Je,j as Xe,R as Ye}from"./useFollowings-FoBI74ax.js";import{t as en}from"./url-4UJeT0bq.js";import"./resolveAsset-UMmPc4FE.js";import"./LazyLoad-0XsPja0_.js";import"./SafeLink-JrV1PGzA.js";const nn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),le=(e={})=>(()=>{const t=nn();return j(t,e,!0,!0),t})(),tn=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1"><h2 class="flex min-w-0 flex-1 items-center gap-1 ps-2"><span class=truncate></span></h2><button class="flex h-full place-items-center px-2"><span class="inline-block size-4">'),rn=d('<span class="inline-block size-4 shrink-0 text-fg-secondary">'),U=e=>{const[t,r]=F(!1),s=()=>r(o=>!o);return(()=>{const o=tn(),l=o.firstChild,c=l.firstChild,u=c.firstChild,a=c.nextSibling,h=a.firstChild;return i(c,n(I,{get when(){return e.icon},keyed:!0,children:v=>(()=>{const m=rn();return i(m,v),m})()}),u),i(u,()=>e.name),a.$$click=()=>s(),i(h,n(le,{})),i(o,n(I,{get when(){return t()},get children(){return e.settings()}}),null),o})()};A(["click"]);const on=e=>{const t=[e.id],r=e.rootEvent()?.id;r!=null&&t.push(r);const s=e.replyingToEvent()?.id;return s!=null&&t.push(s),Y(t)},ln=e=>{const{config:t}=x(),r=()=>se(e.event),{events:s}=L(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:on(r()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return n(O,{get events(){return[...s()].reverse()}})},cn=e=>n(K,{get children(){return n($,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>n(ln,{get event(){return t.event}})})}}),sn=d('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none">'),un=d('<div class="shrink-0 border-b border-border">'),an=d('<div class="scrollbar flex flex-col overflow-y-scroll pb-16">'),mn=d('<div class="flex shrink-0 items-center border-b border-border px-2"><button class="flex w-full items-center gap-1"><div class="inline-block size-4"></div><div>'),dn=d('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),M=e=>{let t;const r=He(),s=S(),o=()=>e.width??"medium";return J(()=>({commandType:"moveToColumn",handler:l=>{l.command==="moveToColumn"&&l.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),J(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),n(je.Provider,{value:r,get children(){const l=sn(),c=t;return typeof c=="function"?ie(c,l):t=l,i(l,n(I,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const u=un();return i(u,()=>e.header),u})(),(()=>{const u=an();return i(u,()=>e.children),u})()]},children:u=>[(()=>{const a=mn(),h=a.firstChild,v=h.firstChild,m=v.nextSibling;return h.$$click=()=>r?.clearTimeline(),i(v,n(Oe,{})),i(m,()=>s.t("column.back")),a})(),(()=>{const a=dn();return i(a,n(cn,{timelineContent:u})),a})()]})),q(u=>ue(l,{"sm:w-[500px]":o()==="widest","sm:w-[360px]":o()==="wide","sm:w-[320px]":o()==="medium","sm:w-[280px]":o()==="narrow"},u)),l}})};A(["click"]);const gn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),hn=(e={})=>(()=>{const t=gn();return j(t,e,!0,!0),t})(),vn=d('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),fn=(e={})=>(()=>{const t=vn();return j(t,e,!0,!0),t})(),yn=d('<div class="flex flex-col gap-2 border-b border-border p-2"><div></div><div>'),xn=d('<div class="scrollbar flex h-9 gap-2 overflow-x-auto">'),kn=d('<div class="flex flex-col border-t border-border"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block size-4"></span></button><button class="py-4 pr-2"><span class="inline-block size-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-danger hover:text-rose-600"><span class="inline-block size-4">'),$n=d('<button class="rounded-md border px-4 text-fg-secondary">'),wn=e=>(()=>{const t=yn(),r=t.firstChild,s=r.nextSibling;return i(r,()=>e.title),i(s,()=>e.children),t})(),R=e=>{const t=S(),{saveColumn:r,removeColumn:s,moveColumn:o}=x(),l=re(),c=a=>{r({...e.column,width:a})},u=a=>{o(e.column.id,a),l({command:"moveToColumn",columnIndex:a}).catch(h=>console.error(h))};return(()=>{const a=kn(),h=a.firstChild,v=h.firstChild,m=v.firstChild,g=v.nextSibling,w=g.firstChild,p=g.nextSibling,C=p.nextSibling,_=C.firstChild;return i(a,n(wn,{get title(){return t.t("column.config.columnWidth")},get children(){const f=xn();return i(f,n(H,{each:["widest","wide","medium","narrow"],children:b=>(()=>{const k=$n();return k.$$click=()=>c(b),i(k,()=>t.t(`column.config.${b}`)),q(y=>{const z=e.column.width===b,V=e.column.width===b,Z=e.column.width!==b,W=e.column.width!==b;return z!==y._v$5&&k.classList.toggle("border-fg-secondary",y._v$5=z),V!==y._v$6&&k.classList.toggle("font-bold",y._v$6=V),Z!==y._v$7&&k.classList.toggle("border-border",y._v$7=Z),W!==y._v$8&&k.classList.toggle("font-normal",y._v$8=W),y},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),k})()})),f}}),h),v.$$click=()=>u(e.columnIndex-1),i(m,n(hn,{})),g.$$click=()=>u(e.columnIndex+1),i(w,n(Ke,{})),C.$$click=()=>s(e.column.id),i(_,n(fn,{})),q(f=>{const b=t.t("column.config.moveLeft"),k=t.t("column.config.moveRight"),y=t.t("column.config.removeColumn"),z=t.t("column.config.removeColumn");return b!==f._v$&&B(v,"title",f._v$=b),k!==f._v$2&&B(g,"title",f._v$2=k),y!==f._v$3&&B(C,"title",f._v$3=y),z!==f._v$4&&B(_,"aria-label",f._v$4=z),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),a})()};A(["click"]);class Cn extends me{constructor(t){super(),this.tags=t}}const bn=e=>{try{const t=ae.parse(JSON.parse(e));return new Cn(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[X,_n]=ee(()=>F({})),[In,Tn]=ee(()=>F({})),En=e=>{const t=oe(),[r,s]=F(null);return E(()=>{const o=e();if(o==null)return;const{encrypted:l}=o;if(l in X()){s(X()[l]);return}const c=t();c!=null&&(In()[l]||(Tn(u=>({...u,[l]:!0})),window.nostr?.nip04?.decrypt?.(c,l)?.then(u=>{_n(a=>({...a,[l]:u})),s(u)}).catch(u=>{console.error(`failed to decrypt "${l}"`,u)})))}),r},Sn=e=>{const t=Q(()=>de(e.event)),r=En(()=>{const{content:l}=t();return l==null||l.length===0?null:{id:t().id,encrypted:l}}),s=()=>{const l=r();if(l==null)return[];console.log(l);try{return bn(l).taggedEventIds()}catch(c){return console.warn(c),[]}},o=()=>t().taggedEventIds();return n(H,{get each(){return[...o(),...s()]},children:l=>n(N,{get children(){return n(Qe,{eventId:l,get ensureKinds(){return[ne]}})}})})},pn=e=>{const t=ge(),r=Q(e),s=()=>["useFollowings",r()],o=he(()=>({queryKey:s(),queryFn:({queryKey:c,signal:u})=>{console.debug("useFollowings");const[,a]=c;if(a==null)return Promise.resolve(null);const{kind:h,author:v,identifier:m}=a,g=new Te({type:"ParameterizedReplaceableEvent",kind:h,author:v,identifier:m}),w=g.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${v}:${m}`)});return g.onUpdate(p=>{const C=be(p);t.setQueryData(c,C)}),_e({task:g,signal:u}),Ie(15e3,`useParameterizedReplaceableEvent: ${h}:${v}:${m}`)(w)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>o.data??null,query:o}},Ln=e=>{const t=S(),{removeColumn:r}=x(),{event:s}=pn(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return n(M,{get header(){return n(U,{get name(){return e.column.name??t.t("column.bookmark")},get icon(){return n(Ee,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(I,{get when(){return s()},keyed:!0,children:o=>n(Sn,{event:o})})}})},T=e=>t=>{switch(e.filterType){case"AND":return e.children.every(r=>T(r)(t));case"OR":return e.children.some(r=>T(r)(t));case"NOT":return!T(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Mn=e=>{const t=S(),{config:r,removeColumn:s}=x(),{followingPubkeys:o}=Ge(()=>({pubkey:e.column.pubkey})),l=P(()=>({duration:4*60*60})),{events:c,eose:u}=L(()=>{const a=Y([...o()]);return a.length===0?null:{debugId:"following",relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:a,limit:20,since:l.since(),until:l.until()}],eoseLimit:20,continuous:l.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:h=>e.column.contentFilter==null?!0:T(e.column.contentFilter)(h.content)}});return E(()=>{console.log("home",c()),l.setEvents(c())}),G(()=>console.log("home timeline mounted")),te(()=>console.log("home timeline unmounted")),n(M,{get header(){return n(U,{get name(){return e.column.name??t.t("column.home")},get icon(){return n(Se,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:l,get eose(){return u()},get children(){return n(O,{get events(){return c()}})}})}})},Rn=d('<div class="flex items-center gap-1 pl-[2px] text-sm"><div class="notification-icon flex max-w-[64px] place-items-center overflow-hidden"></div><div class="notification-user flex flex-1 gap-1 overflow-hidden"><div class="author-icon size-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class=shrink-0></span></div></div><div class=text-xs>'),Fn=d('<div class="notification-event py-1">'),Pn=d('<img alt=icon class="size-full object-cover">'),Dn=d("<div class=truncate> "),Un=e=>{const t=S(),r=Ve(),{shouldMuteEvent:s}=x(),{showProfile:o}=Re(),l=()=>ve(e.event),c=()=>l().lastTaggedEventId(),{profile:u}=pe(()=>({pubkey:e.event.pubkey})),{event:a,query:h}=Ze(()=>Le([c()])(([m])=>({eventId:m}))),v=()=>h.isSuccess&&a()==null;return n(I,{get when(){return Q(()=>!v())()&&!s(e.event)},get children(){return[(()=>{const m=Rn(),g=m.firstChild,w=g.nextSibling,p=w.firstChild,C=p.nextSibling,_=C.firstChild,f=_.nextSibling,b=w.nextSibling;return i(g,n(We,{get reactionTypes(){return l().toReactionTypes()}})),i(p,n(I,{get when(){return u()?.picture},keyed:!0,children:k=>(()=>{const y=Pn();return q(()=>B(y,"src",en(k,"icon"))),y})()})),_.$$click=()=>o(e.event.pubkey),i(_,n(Me,{get pubkey(){return e.event.pubkey}})),i(f,()=>t.t("notification.reacted")),i(b,()=>r(l().createdAtAsDate())),m})(),(()=>{const m=Fn();return i(m,n(I,{get when(){return a()},get fallback(){return(()=>{const g=Dn(),w=g.firstChild;return i(g,()=>t.t("general.loading"),w),i(g,c,null),g})()},keyed:!0,children:g=>n(Je,{event:g})})),m})()]}})};A(["click"]);const zn=d("<div>unknown event"),Bn=fe(()=>ye(()=>import("./ZapReceipt-uTRef4Nq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),ce=e=>{const{shouldMuteEvent:t}=x();return n(H,{get each(){return e.events},children:r=>n(I,{get when(){return!t(r)},get children(){return n(K,{get fallback(){return zn()},get children(){return[n($,{get when(){return r.kind===ne},get children(){return n(N,{get children(){return n(Xe,{event:r})}})}}),n($,{get when(){return r.kind===xe},get children(){return n(N,{get children(){return n(Un,{event:r})}})}}),n($,{get when(){return r.kind===ke},get children(){return n(N,{get children(){return n(Ye,{event:r})}})}}),n($,{get when(){return r.kind===$e},get children(){return n(N,{get children(){return n(Bn,{event:r})}})}})]}})}})})},Nn=e=>{const t=S(),{config:r,removeColumn:s}=x(),o=P(()=>({duration:null})),{events:l,eose:c}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6,7,9735],"#p":[e.column.pubkey],limit:20,since:o.since(),until:o.until()}],eoseLimit:20,clientEventFilter:u=>e.column.contentFilter==null?!0:T(e.column.contentFilter)(u.content)}));return E(()=>o.setEvents(l())),n(M,{get header(){return n(U,{get name(){return e.column.name??t.t("column.notification")},get icon(){return n(Fe,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:o,get eose(){return c()},get children(){return n(ce,{get events(){return l()}})}})}})},qn=e=>{const t=S(),{config:r,removeColumn:s}=x(),o=P(()=>({duration:null})),{events:l,eose:c}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10,since:o.since(),until:o.until()}],eoseLimit:10,clientEventFilter:u=>e.column.contentFilter==null?!0:T(e.column.contentFilter)(u.content)}));return E(()=>o.setEvents(l())),n(M,{get header(){return n(U,{get name(){return e.column.name??t.t("column.posts")},get icon(){return n(Pe,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:o,get eose(){return c()},get children(){return n(O,{get events(){return l()}})}})}})},An=e=>{const t=S(),{config:r,removeColumn:s}=x(),o=P(()=>({duration:null})),{events:l,eose:c}=L(()=>({relayUrls:r().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10,since:o.since(),until:o.until()}],eoseLimit:10,clientEventFilter:u=>e.column.contentFilter==null?!0:T(e.column.contentFilter)(u.content)}));return E(()=>o.setEvents(l())),n(M,{get header(){return n(U,{get name(){return e.column.name??t.t("column.reactions")},get icon(){return n(De,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:o,get eose(){return c()},get children(){return n(ce,{get events(){return l()}})}})}})},On=e=>{const t=S(),{removeColumn:r}=x(),s=P(()=>({duration:4*60*60})),{events:o,eose:l}=L(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:20,since:s.since(),until:s.until()}],eoseLimit:20,clientEventFilter:c=>e.column.contentFilter==null?!0:T(e.column.contentFilter)(c.content)}));return E(()=>s.setEvents(o())),n(M,{get header(){return n(U,{get name(){return e.column.name??t.t("column.relay")},get icon(){return n(Ue,{})},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:s,get eose(){return l()},get children(){return n(O,{get events(){return o()}})}})}})},Hn=d('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block size-4 text-fg-secondary"></span></h2><form class=flex-1><input class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"type=text name=query></form><button class=size-4>'),jn=e=>{const[t,r]=F(!1),[s,o]=F(""),{saveColumn:l}=x(),c=()=>r(m=>!m),u=()=>{s()!==e.column.query&&l({...e.column,query:s()})},a=()=>{u()},h=m=>{o(m.currentTarget.value)},v=m=>{m.preventDefault(),u()};return G(()=>{o(e.column.query)}),(()=>{const m=Hn(),g=m.firstChild,w=g.firstChild,p=w.firstChild,C=w.nextSibling,_=C.firstChild,f=C.nextSibling;return i(p,n(ze,{})),C.addEventListener("submit",v),_.addEventListener("blur",a),_.addEventListener("change",h),f.$$click=()=>c(),i(f,n(le,{})),i(m,n(I,{get when(){return t()},get children(){return e.settings()}}),null),q(()=>_.value=s()),m})()},Kn=e=>{const{removeColumn:t}=x(),r=P(()=>({duration:null})),{events:s,eose:o}=L(()=>{const{query:l}=e.column;return l.length===0?null:{relayUrls:we,filters:[{kinds:[1],search:l,limit:20,since:r.since(),until:r.until()}],eoseLimit:20,clientEventFilter:c=>c.tags.findIndex(([u])=>u==="mostr"||u==="proxy")>=0?!1:e.column.contentFilter==null?!0:T(e.column.contentFilter)(c.content)}});return E(()=>{r.setEvents(s())}),n(M,{get header(){return n(jn,{get column(){return e.column},settings:()=>n(R,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return n(D,{loadMore:r,get eose(){return o()},get children(){return n(O,{get events(){return s()}})}})}})};A(["click"]);const Qn=d('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),Gn=()=>{const{config:e}=x();return(()=>{const t=Qn();return i(t,n(H,{get each(){return e().columns},children:(r,s)=>{const o=()=>s()+1,l=()=>o()===e().columns.length;return n(K,{get children(){return[n($,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:c=>n(Mn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:c=>n(Nn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:c=>n(qn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:c=>n(An,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:c=>n(On,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Bookmark"&&r},keyed:!0,children:c=>n(Ln,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),n($,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:c=>n(Kn,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})})]}})}})),t})()},Vn=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],Zn=e=>{const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t},Wn=({shortcuts:e=Vn,onShortcut:t})=>{const r=Zn(e);G(()=>{const s=Be(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const l=r.get(o.key);l!=null&&t(l)},50);window.addEventListener("keydown",s),te(()=>{window.removeEventListener("keydown",s)})})},Jn=()=>{const e=re();Wn({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),r=>console.error(r))}})},Xn=d('<div class="absolute inset-0 flex h-svh w-screen touch-manipulation flex-row overflow-hidden">'),st=()=>{Jn();const e=Ae(),{config:t,initializeColumns:r}=x(),s=oe();return E(()=>{Promise.allSettled(t().relayUrls.map(async o=>{try{const l=await e().ensureRelay(o);l.onnotice=c=>{console.error(`NOTICE: ${o}: ${c}`)},l.onclose=()=>{console.warn(`CLOSE: ${o}`)}}catch(l){console.error("ensureRelay failed",l)}})).catch(()=>{})}),E(()=>{const o=s();o!=null&&r({pubkey:o})}),Ce(o=>{console.error("uncaught error: ",o)}),(()=>{const o=Xn();return i(o,n(Ne,{}),null),i(o,n(Gn,{}),null),i(o,n(qe,{}),null),o})()};export{st as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZapReceipt-uTRef4Nq.js","assets/index-QPQwOpEp.js","assets/index-j9GdtEmf.css","assets/useFollowings-FoBI74ax.js","assets/SideBar-aqJkD1DH.js","assets/resolveAsset-UMmPc4FE.js","assets/LazyLoad-0XsPja0_.js","assets/SafeLink-JrV1PGzA.js","assets/url-4UJeT0bq.js","assets/lud16ToLnurlPayUrl-D_rt_Y86.js","assets/_baseClone-VTUmDToM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=Home-9gbH6cPY.js.map
