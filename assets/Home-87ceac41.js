import{s as N,t as g,d as q,c as P,i,a as t,S as C,M as k,b as K,u as _,e as j,f as oe,g as le,h as B,j as G,k as O,l as J,F as Q,m as ce,n as se,o as H,p as W,q as ue,r as ie}from"./index-7f86dd49.js";import{u as y,a as T,T as D,b as ae,t as me,c as de,d as z,A as ge,e as he,f as X,z as A,g as ve,h as Y,i as fe,C as U,E as ye,S as Z,p as xe,r as ke,j as we,B as $e,k as Ce,H as be,l as _e,m as ee,n as Ie,o as Te,q as Se,U as Ee,s as ne,v as pe,w as Fe,x as Re,R as Pe,y as Le,D as Me,F as Be,G as Ne,I as qe,J as De,M as Ue,K as Oe,L as je,N as He,O as Ae,P as Ke}from"./SideBar-c0c7b1f8.js";import{u as Qe}from"./usePersistStatus-d2fce551.js";const ze=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0">'),Ve=(e={})=>(()=>{const n=ze();return N(n,e,!0,!0),n})(),Ge=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),te=(e={})=>(()=>{const n=Ge();return N(n,e,!0,!0),n})(),Je=g('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex min-w-0 flex-1 items-center gap-1"><span class="column-name truncate"></span></h2><button class="h-4 w-4">'),We=g('<span class="inline-block h-4 w-4 shrink-0 text-gray-700">'),L=e=>{const[n,r]=P(!1),s=()=>r(l=>!l);return(()=>{const l=Je(),o=l.firstChild,c=o.firstChild,u=c.firstChild,a=c.nextSibling;return i(c,t(C,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const d=We();return i(d,h),d})()}),u),i(u,()=>e.name),a.$$click=()=>s(),i(a,t(te,{})),i(l,t(C,{get when(){return n()},get children(){return e.settings()}}),null),l})()};q(["click"]);const Xe=e=>{const n=[e.id],r=e.rootEvent()?.id;r!=null&&n.push(r);const s=e.replyingToEvent()?.id;return s!=null&&n.push(s),ae(n)},Ye=e=>{const{config:n}=y(),r=()=>me(e.event),{events:s}=T(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1],ids:Xe(r()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return t(D,{get events(){return[...s()].reverse()}})},Ze=e=>t(K,{get children(){return t(k,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:n=>t(Ye,{get event(){return n.event}})})}}),en=g('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),nn=g('<div class="shrink-0 border-b">'),tn=g('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth pb-16">'),rn=g('<div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>'),on=g('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),S=e=>{let n;const r=de(),s=_(),l=()=>e.width??"medium";return z(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&n?.scrollIntoView({behavior:"smooth",inline:"center"})}})),z(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&n?.scrollIntoView({behavior:"smooth"})}})),t(he.Provider,{value:r,get children(){const o=en(),c=n;return typeof c=="function"?le(c,o):n=o,i(o,t(C,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const u=nn();return i(u,()=>e.header),u})(),(()=>{const u=tn();return i(u,()=>e.children),u})()]},children:u=>[(()=>{const a=rn(),h=a.firstChild,d=h.firstChild,m=d.nextSibling;return h.$$click=()=>r?.clearTimeline(),i(d,t(ge,{})),i(m,()=>s()("column.back")),a})(),(()=>{const a=on();return i(a,t(Ze,{timelineContent:u})),a})()]})),j(u=>oe(o,{"sm:w-[500px]":l()==="widest","sm:w-[360px]":l()==="wide","sm:w-[320px]":l()==="medium","sm:w-[280px]":l()==="narrow"},u)),o}})};q(["click"]);const ln=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),cn=(e={})=>(()=>{const n=ln();return N(n,e,!0,!0),n})(),sn=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m8.25 4.5 7.5 7.5-7.5 7.5">'),un=(e={})=>(()=>{const n=sn();return N(n,e,!0,!0),n})(),an=g('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),mn=(e={})=>(()=>{const n=an();return N(n,e,!0,!0),n})(),dn=g('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),gn=g('<div class="scrollbar flex h-9 gap-2 overflow-x-scroll"><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100">'),hn=g('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2"><span class="inline-block h-4 w-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600"><span class="inline-block h-4 w-4">'),vn=e=>(()=>{const n=dn(),r=n.firstChild,s=r.nextSibling;return i(r,()=>e.title),i(s,()=>e.children),n})(),E=e=>{const n=_(),{saveColumn:r,removeColumn:s,moveColumn:l}=y(),o=X(),c=a=>{r({...e.column,width:a})},u=a=>{l(e.column.id,a),o({command:"moveToColumn",columnIndex:a}).catch(h=>console.error(h))};return(()=>{const a=hn(),h=a.firstChild,d=h.firstChild,m=d.firstChild,f=d.nextSibling,w=f.firstChild,I=f.nextSibling,x=I.nextSibling,$=x.firstChild;return i(a,t(vn,{get title(){return n()("column.config.columnWidth")},get children(){const v=gn(),p=v.firstChild,F=p.nextSibling,R=F.nextSibling,M=R.nextSibling;return p.$$click=()=>c("widest"),i(p,()=>n()("column.config.widest")),F.$$click=()=>c("wide"),i(F,()=>n()("column.config.wide")),R.$$click=()=>c("medium"),i(R,()=>n()("column.config.medium")),M.$$click=()=>c("narrow"),i(M,()=>n()("column.config.narrow")),v}}),h),d.$$click=()=>u(e.columnIndex-1),i(m,t(cn,{})),f.$$click=()=>u(e.columnIndex+1),i(w,t(un,{})),x.$$click=()=>s(e.column.id),i($,t(mn,{})),j(v=>{const p=n()("column.config.moveLeft"),F=n()("column.config.moveRight"),R=n()("column.config.removeColumn"),M=n()("column.config.removeColumn");return p!==v._v$&&B(d,"title",v._v$=p),F!==v._v$2&&B(f,"title",v._v$2=F),R!==v._v$3&&B(x,"title",v._v$3=R),M!==v._v$4&&B($,"aria-label",v._v$4=M),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),a})()};q(["click"]);const fn=A.array(A.array(A.string()));class yn extends ve{constructor(n){super(),this.tags=n}}const xn=e=>{try{const n=fn.parse(JSON.parse(e));return new yn(n)}catch(n){throw new TypeError("failed to parse tags schema: ",{cause:n})}},[V,kn]=G(()=>P({})),[wn,$n]=G(()=>P({})),Cn=e=>{const n=Y(),[r,s]=P(null);return O(()=>{const l=e();if(l==null)return;const{encrypted:o}=l;if(o in V()){s(V()[o]);return}const c=n();c!=null&&(wn()[o]||($n(u=>({...u,[o]:!0})),window.nostr?.nip04?.decrypt?.(c,o)?.then(u=>{kn(a=>({...a,[o]:u})),s(u)}).catch(u=>{console.error(`failed to decrypt "${o}"`,u)})))}),r},bn=e=>{const n=J(()=>fe(e.event)),r=Cn(()=>{const{content:o}=n();return o==null||o.length===0?null:{id:n().id,encrypted:o}}),s=()=>{const o=r();if(o==null)return[];console.log(o);try{return xn(o).taggedEventIds()}catch(c){return console.warn(c),[]}},l=()=>n().taggedEventIds();return t(Q,{get each(){return[...l(),...s()]},children:o=>t(U,{get children(){return t(ye,{eventId:o,get ensureKinds(){return[Z]}})}})})},_n=e=>{const n=ce(),r=J(e),s=()=>["useFollowings",r()],l=se(()=>({queryKey:s(),queryFn:({queryKey:c,signal:u})=>{console.debug("useFollowings");const[,a]=c;if(a==null)return Promise.resolve(null);const{kind:h,author:d,identifier:m}=a,f=new $e({type:"ParameterizedReplaceableEvent",kind:h,author:d,identifier:m}),w=f.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${h}:${d}:${m}`)});return f.onUpdate(I=>{const x=xe(I);n.setQueryData(c,x)}),ke({task:f,signal:u}),we(15e3,`useParameterizedReplaceableEvent: ${h}:${d}:${m}`)(w)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>l.data??null,query:l}},In=e=>{const n=_(),{removeColumn:r}=y(),{event:s}=_n(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return t(S,{get header(){return t(L,{get name(){return e.column.name??n()("column.bookmark")},get icon(){return t(Ve,{})},settings:()=>t(E,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(C,{get when(){return s()},keyed:!0,children:l=>t(bn,{event:l})})}})},b=e=>n=>{switch(e.filterType){case"AND":return e.children.every(r=>b(r)(n));case"OR":return e.children.some(r=>b(r)(n));case"NOT":return!b(e.child)(n);case"Text":return n.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(n);default:console.error("unsupported content filter type");break}return!1},Tn=e=>{const n=_(),{config:r,removeColumn:s}=y(),{followingPubkeys:l}=Ce(()=>({pubkey:e.column.pubkey})),{events:o}=T(()=>{const c=_e.uniq([...l()]);return c.length===0?null:{debugId:"following",relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:c,limit:10,since:ee()-4*60*60}],clientEventFilter:u=>e.column.contentFilter==null?!0:b(e.column.contentFilter)(u.content)}});return O(()=>{console.log("home",o())}),H(()=>console.log("home timeline mounted")),W(()=>console.log("home timeline unmounted")),t(S,{get header(){return t(L,{get name(){return e.column.name??n()("column.home")},get icon(){return t(be,{})},settings:()=>t(E,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(D,{get events(){return o()}})}})},Sn=g("<img alt=icon class=rounded>"),En=g('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-blue-500 hover:underline">'),pn=g('<div class="notification-event py-1">'),Fn=g("<div class=truncate> "),Rn=e=>{const n=_(),{shouldMuteEvent:r}=y(),{showProfile:s}=pe(),l=()=>Fe(e.event),o=()=>l().lastTaggedEventId(),{profile:c}=Ie(()=>({pubkey:e.event.pubkey})),{event:u,query:a}=Te(()=>Re([o()])(([d])=>({eventId:d}))),h=()=>a.isSuccess&&u()==null;return t(C,{get when(){return!h()||r(e.event)},get children(){return[(()=>{const d=En(),m=d.firstChild,f=m.nextSibling,w=f.firstChild,I=w.nextSibling,x=I.firstChild;return i(m,t(Se,{get reactionTypes(){return l().toReactionTypes()}})),i(w,t(C,{get when(){return c()?.picture!=null},get children(){const $=Sn();return j(()=>B($,"src",c()?.picture)),$}})),x.$$click=()=>s(e.event.pubkey),i(x,t(Ee,{get pubkey(){return e.event.pubkey}})),i(I,()=>n()("notification.reacted"),null),d})(),(()=>{const d=pn();return i(d,t(C,{get when(){return u()},get fallback(){return(()=>{const m=Fn(),f=m.firstChild;return i(m,()=>n()("general.loading"),f),i(m,o,null),m})()},keyed:!0,children:m=>t(ne,{event:m})})),d})()]}})};q(["click"]);const Pn=g("<div>unknown event"),re=e=>{const{shouldMuteEvent:n}=y();return t(Q,{get each(){return e.events},children:r=>t(C,{get when(){return!n(r)},get children(){return t(K,{get fallback(){return Pn()},get children(){return[t(k,{get when(){return r.kind===Z},get children(){return t(U,{get children(){return t(ne,{event:r})}})}}),t(k,{get when(){return r.kind===Pe},get children(){return t(U,{get children(){return t(Rn,{event:r})}})}}),t(k,{get when(){return r.kind===Le},get children(){return t(U,{get children(){return t(Me,{event:r})}})}})]}})}})})},Ln=e=>{const n=_(),{config:r,removeColumn:s}=y(),{events:l}=T(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:b(e.column.contentFilter)(o.content)}));return t(S,{get header(){return t(L,{get name(){return e.column.name??n()("column.notification")},get icon(){return t(Be,{})},settings:()=>t(E,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(re,{get events(){return l()}})}})},Mn=e=>{const n=_(),{config:r,removeColumn:s}=y(),{events:l}=T(()=>({relayUrls:r().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:b(e.column.contentFilter)(o.content)}));return t(S,{get header(){return t(L,{get name(){return e.column.name??n()("column.posts")},get icon(){return t(Ne,{})},settings:()=>t(E,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(D,{get events(){return l()}})}})},Bn=e=>{const n=_(),{config:r,removeColumn:s}=y(),{events:l}=T(()=>({relayUrls:r().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:b(e.column.contentFilter)(o.content)}));return t(S,{get header(){return t(L,{get name(){return e.column.name??n()("column.reactions")},get icon(){return t(qe,{})},settings:()=>t(E,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>s(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(re,{get events(){return l()}})}})},Nn=e=>{const n=_(),{removeColumn:r}=y(),{events:s}=T(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:25,since:ee()-4*60*60}],clientEventFilter:l=>e.column.contentFilter==null?!0:b(e.column.contentFilter)(l.content)}));return t(S,{get header(){return t(L,{get name(){return e.column.name??n()("column.relay")},get icon(){return t(De,{})},settings:()=>t(E,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(D,{get events(){return s()}})}})},qn=g('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class=flex-1><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300"type=text name=query></form><button class="h-4 w-4">'),Dn=e=>{const[n,r]=P(!1),[s,l]=P(""),{saveColumn:o}=y(),c=()=>r(m=>!m),u=()=>{s()!==e.column.query&&o({...e.column,query:s()})},a=()=>{u()},h=m=>{l(m.currentTarget.value)},d=m=>{m.preventDefault(),u()};return H(()=>{l(e.column.query)}),(()=>{const m=qn(),f=m.firstChild,w=f.firstChild,I=w.firstChild,x=w.nextSibling,$=x.firstChild,v=x.nextSibling;return i(I,t(Ue,{})),x.addEventListener("submit",d),$.addEventListener("blur",a),$.addEventListener("change",h),v.$$click=()=>c(),i(v,t(te,{})),i(m,t(C,{get when(){return n()},get children(){return e.settings()}}),null),j(()=>$.value=s()),m})()},Un=e=>{const{removeColumn:n}=y(),{events:r}=T(()=>{const{query:s}=e.column;return s.length===0?null:{relayUrls:Oe,filters:[{kinds:[1,6],search:s,limit:25}],clientEventFilter:l=>l.tags.findIndex(([o])=>o==="mostr"||o==="proxy")>=0?!1:e.column.contentFilter==null?!0:b(e.column.contentFilter)(l.content)}});return t(S,{get header(){return t(Dn,{get column(){return e.column},settings:()=>t(E,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(D,{get events(){return r()}})}})};q(["click"]);const On=g('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),jn=()=>{const{config:e}=y();return(()=>{const n=On();return i(n,t(Q,{get each(){return e().columns},children:(r,s)=>{const l=()=>s()+1,o=()=>l()===e().columns.length;return t(K,{get children(){return[t(k,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:c=>t(Tn,{column:c,get columnIndex(){return l()},get lastColumn(){return o()}})}),t(k,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:c=>t(Ln,{column:c,get columnIndex(){return l()},get lastColumn(){return o()}})}),t(k,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:c=>t(Mn,{column:c,get columnIndex(){return l()},get lastColumn(){return o()}})}),t(k,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:c=>t(Bn,{column:c,get columnIndex(){return l()},get lastColumn(){return o()}})}),t(k,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:c=>t(Nn,{column:c,get columnIndex(){return l()},get lastColumn(){return o()}})}),t(k,{get when(){return r.columnType==="Bookmark"&&r},keyed:!0,children:c=>t(In,{column:c,get columnIndex(){return l()},get lastColumn(){return o()}})}),t(k,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:c=>t(Un,{column:c,get columnIndex(){return l()},get lastColumn(){return o()}})})]}})}})),n})()},Hn=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],An=e=>{const n=new Map;return e.forEach(r=>{n.set(r.key,r)}),n},Kn=({shortcuts:e=Hn,onShortcut:n})=>{const r=An(e);H(()=>{const s=je(l=>{if(l.type!=="keydown"||l.ctrlKey||l.altKey||l.metaKey||l.target instanceof HTMLTextAreaElement||l.target instanceof HTMLInputElement)return;const o=r.get(l.key);o!=null&&n(o)},50);window.addEventListener("keydown",s),W(()=>{window.removeEventListener("keydown",s)})})},Qn=()=>{const e=X();Kn({onShortcut:n=>{e(n.command).then(()=>console.debug(`shortcut key '${n.key}' was processed successfully`),r=>console.error(r))}})},zn=g('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),Wn=()=>{Qn();const e=ue(),{persistStatus:n}=Qe(),r=Ke(),{config:s,initializeColumns:l}=y(),o=Y();return O(()=>{s().relayUrls.map(async c=>{try{const u=await r().ensureRelay(c);u.onnotice=a=>{console.error(`NOTICE: ${c}: ${a}`)},u.onclose=()=>{console.warn(`CLOSE: ${c}`)}}catch(u){console.error("ensureRelay failed",u)}})}),O(()=>{const c=o();c!=null&&l({pubkey:c})}),H(()=>{n().loggedIn||e("/hello")}),ie(c=>{console.error("uncaught error: ",c)}),(()=>{const c=zn();return i(c,t(He,{}),null),i(c,t(jn,{}),null),i(c,t(Ae,{}),null),c})()};export{Wn as default};
//# sourceMappingURL=Home-87ceac41.js.map
