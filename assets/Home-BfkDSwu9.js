const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ZapReceipt-CAG7WtfC.js","assets/index-rSJcjQqR.js","assets/index-COSNOKCH.css","assets/EventDisplay-Dj4v3SZ8.js","assets/SideBar-6zVQ4zFe.js","assets/resolveAsset-CRJrG7IV.js","assets/SafeLink-DjkWNz5R.js","assets/url-DPIb-kBm.js","assets/lud16ToLnurlPayUrl-23ZaCADV.js","assets/_baseClone-wCy-1S_s.js","assets/arrow-left-CdMLJlOZ.js","assets/useFollowings-GHAXtA6c.js","assets/useSubscription-DHwPlFh7.js","assets/NostrSet-CDfEQmOn.js"])))=>i.map(i=>d[i]);
import{s as Q,t as h,d as z,c as B,i as a,a as t,h as I,M as _,S as W,j as w,k as Z,l as ye,u as S,b as j,m as $e,n as X,F as V,f as F,p as ne,q as E,r as oe,v as ke,w as P,x as xe,y as re,z as we,A as be,B as D,o as Y,C as le,D as ce,E as Ce,G as _e,H as Ie,_ as Se,R as Te,I as Ee,Z as pe,N as ie,J as Re,K as Le}from"./index-rSJcjQqR.js";import{u as te,a as se,b as ue,d as Me,p as ae,c as Fe,r as Pe,t as ze,B as De,e as Ne,H as Ue,U as me,f as de,g as J,h as Ae,i as Be,j as je,k as qe,l as He,G as Oe,M as Ke,m as Qe,S as Ve,n as Ge,o as Ze}from"./SideBar-6zVQ4zFe.js";import{A as Je}from"./arrow-left-CdMLJlOZ.js";import{T as q,C as K,u as We,a as N,L as U}from"./useFollowings-GHAXtA6c.js";import{u as p}from"./useSubscription-DHwPlFh7.js";import{u as Xe,T as Ye,C as et,E as tt,a as nt,b as ot,c as rt,d as lt,R as ct,e as it,r as st,f as ut,g as at,A as mt,H as dt}from"./EventDisplay-Dj4v3SZ8.js";import{N as gt,a as ht}from"./NostrSet-CDfEQmOn.js";import{t as ft}from"./url-DPIb-kBm.js";const vt=h('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5">'),ee=(e={})=>(()=>{const n=vt();return Q(n,e,!0),n})(),yt=h('<div class="flex flex-col"><div class="flex h-8 items-center gap-1"><h2 class="flex min-w-0 flex-1 items-center gap-1 ps-2"><span class=truncate></span></h2><button class="flex h-full place-items-center px-2"><span class="inline-block size-4">'),$t=h('<span class="inline-block size-4 shrink-0 text-fg-secondary">'),A=e=>{const[n,o]=B(!1),i=()=>o(r=>!r);return(()=>{const r=yt(),l=r.firstChild,c=l.firstChild,s=c.firstChild,u=c.nextSibling,m=u.firstChild;return a(c,t(I,{get when(){return e.icon},keyed:!0,children:d=>(()=>{const g=$t();return a(g,d),g})()}),s),a(s,()=>e.name),u.$$click=()=>i(),a(m,t(ee,{})),a(r,t(I,{get when(){return n()},get children(){return e.settings()}}),null),r})()};z(["click"]);const kt=e=>{const n=[e.id],o=e.rootEvent()?.id;o!=null&&n.push(o);const i=e.replyingToEvent()?.id;return i!=null&&n.push(i),Z(n)},xt=e=>{const{config:n}=w(),o=()=>ye(e.event),{events:i}=p(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1],ids:kt(o()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return t(q,{get events(){return[...i()].reverse()}})},wt=e=>t(W,{get children(){return t(_,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:n=>t(xt,{get event(){return n.event}})})}}),bt=h('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none">'),Ct=h('<div class="shrink-0 border-b border-border">'),_t=h('<div class="scrollbar flex flex-col overflow-y-scroll pb-16">'),It=h('<div class="flex shrink-0 items-center border-b border-border px-2"><button class="flex w-full items-center gap-1"><div class="inline-block size-4"></div><div>'),St=h('<div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">'),R=e=>{let n;const o=Xe(),i=S(),r=()=>e.width??"medium";return te(()=>({commandType:"moveToColumn",handler:l=>{l.command==="moveToColumn"&&l.columnIndex===e.columnIndex&&n?.scrollIntoView({behavior:"smooth",inline:"center"})}})),te(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&n?.scrollIntoView({behavior:"smooth"})}})),t(Ye.Provider,{value:o,get children(){const l=bt(),c=n;return typeof c=="function"?X(c,l):n=l,a(l,t(I,{get when(){return o.timelineState.content},keyed:!0,get fallback(){return[(()=>{const s=Ct();return a(s,()=>e.header),s})(),(()=>{const s=_t();return a(s,()=>e.children),s})()]},children:s=>[(()=>{const u=It(),m=u.firstChild,d=m.firstChild,g=d.nextSibling;return m.$$click=()=>o?.clearTimeline(),a(d,t(Je,{})),a(g,()=>i.t("column.back")),u})(),(()=>{const u=St();return a(u,t(wt,{timelineContent:s})),u})()]})),j(s=>$e(l,{"sm:w-[500px]":r()==="widest","sm:w-[360px]":r()==="wide","sm:w-[320px]":r()==="medium","sm:w-[280px]":r()==="narrow"},s)),l}})};z(["click"]);const Tt=h('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 19.5 8.25 12l7.5-7.5">'),Et=(e={})=>(()=>{const n=Tt();return Q(n,e,!0),n})(),pt=h('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),Rt=(e={})=>(()=>{const n=pt();return Q(n,e,!0),n})(),Lt=h('<div class="flex flex-col gap-2 border-b border-border p-2"><div></div><div>'),Mt=h('<div class="scrollbar flex h-9 gap-2 overflow-x-auto">'),Ft=h('<div class="flex flex-col border-t border-border"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block size-4"></span></button><button class="py-4 pr-2"><span class="inline-block size-4"></span></button><div class=flex-1></div><button class="px-2 py-4 text-danger hover:text-rose-600"><span class="inline-block size-4">'),Pt=h('<button class="rounded-md border px-4 text-fg-secondary">'),ge=e=>(()=>{const n=Lt(),o=n.firstChild,i=o.nextSibling;return a(o,()=>e.title),a(i,()=>e.children),n})(),L=e=>{const n=S(),{saveColumn:o,removeColumn:i,moveColumn:r}=w(),l=se(),c=u=>{o({...e.column,width:u})},s=u=>{r(e.column.id,u),l({command:"moveToColumn",columnIndex:u}).catch(m=>console.error(m))};return(()=>{const u=Ft(),m=u.firstChild,d=m.firstChild,g=d.firstChild,k=d.nextSibling,v=k.firstChild,$=k.nextSibling,f=$.nextSibling,x=f.firstChild;return a(u,t(ge,{get title(){return n.t("column.config.columnWidth")},get children(){const y=Mt();return a(y,t(V,{each:["widest","wide","medium","narrow"],children:T=>(()=>{const b=Pt();return b.$$click=()=>c(T),a(b,()=>n.t(`column.config.${T}`)),j(C=>{const M=e.column.width===T,H=e.column.width===T,G=e.column.width!==T,O=e.column.width!==T;return M!==C._v$5&&b.classList.toggle("border-fg-secondary",C._v$5=M),H!==C._v$6&&b.classList.toggle("font-bold",C._v$6=H),G!==C._v$7&&b.classList.toggle("border-border",C._v$7=G),O!==C._v$8&&b.classList.toggle("font-normal",C._v$8=O),C},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),b})()})),y}}),m),a(u,t(I,{get when(){return e.renderOtherSettings},keyed:!0,children:y=>y({column:e.column,saveColumn:o})}),m),d.$$click=()=>s(e.columnIndex-1),a(g,t(Et,{})),k.$$click=()=>s(e.columnIndex+1),a(v,t(et,{})),f.$$click=()=>i(e.column.id),a(x,t(Rt,{})),j(y=>{const T=n.t("column.config.moveLeft"),b=n.t("column.config.moveRight"),C=n.t("column.config.removeColumn"),M=n.t("column.config.removeColumn");return T!==y._v$&&F(d,"title",y._v$=T),b!==y._v$2&&F(k,"title",y._v$2=b),C!==y._v$3&&F(f,"title",y._v$3=C),M!==y._v$4&&F(x,"aria-label",y._v$4=M),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),u})()};z(["click"]);const[zt,Dt]=ne(()=>B({})),Nt=(e,n)=>Dt(o=>({...o,[e]:n})),[Ut,At]=ne(()=>B({})),Bt=e=>oe(()=>Ut()[e]??!1),he=e=>{const n=ue(),[o,i]=B(null);return E(()=>{const r=e();if(r==null||r.encrypted.length===0)return;const{encrypted:l}=r,c=oe(()=>zt()[l]);if(c!=null){i(c);return}if(Bt(l))return;const s=n();if(s==null)return;const u=m=>At(d=>({...d,[l]:m}));u(!0),Me(s,l).then(m=>{ke(()=>{Nt(l,m),i(m)})}).catch(m=>{console.error(`failed to decrypt "${l}"`,m)}).finally(()=>{u(!1)})}),o},jt=e=>{const n=P(()=>xe(e.event)),o=he(()=>{const{content:l}=n();return l==null||l.length===0?null:{id:n().id,encrypted:l}}),i=()=>{const l=o();if(l==null)return[];console.log(l);try{return ae(l).taggedEventIds()}catch(c){return console.warn(c),[]}},r=()=>n().taggedEventIds();return t(V,{get each(){return[...r(),...i()]},children:l=>t(K,{get children(){return t(tt,{eventId:l,get ensureKinds(){return[re]}})}})})},qt=e=>["useParameterizedReplaceableEvent",e],fe=e=>{const n=we(),o=P(e),i=()=>qt(o()),r=be(()=>({queryKey:i(),queryFn:({queryKey:c,signal:s})=>{const[,u]=c;if(u==null)return Promise.resolve(null);const{kind:m,author:d,identifier:g}=u,k=new De({type:"ParameterizedReplaceableEvent",kind:m,author:d,identifier:g}),v=k.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${m}:${d}:${g}`)});return k.onUpdate($=>{const f=Fe($);n.setQueryData(c,f)}),Pe({task:k,signal:s}),ze(15e3,`useParameterizedReplaceableEvent: ${m}:${d}:${g}`)(v)},staleTime:5*60*1e3,gcTime:4*60*60*1e3}));return{event:()=>r.data??null,query:r}},Ht=e=>{const n=S(),{removeColumn:o}=w(),{event:i}=fe(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return t(R,{get header(){return t(A,{get name(){return e.column.name??n.t("column.bookmark")},get icon(){return t(Ne,{})},settings:()=>t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>o(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(I,{get when(){return i()},keyed:!0,children:r=>t(jt,{event:r})})}})},Ot=e=>{const n=S(),{config:o,removeColumn:i}=w(),{followingPubkeys:r}=We(()=>({pubkey:e.column.pubkey})),l=N(()=>({duration:4*60*60})),{events:c,eose:s}=p(()=>{const u=Z([...r()]);return u.length===0?null:{debugId:"following",relayUrls:o().relayUrls,filters:[{kinds:[1,6],authors:u,limit:20,since:l.since(),until:l.until()}],eoseLimit:20,continuous:l.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:m=>e.column.contentFilter==null?!0:D(e.column.contentFilter)(m.content)}});return E(()=>{console.log("home",c()),l.setEvents(c())}),Y(()=>console.log("home timeline mounted")),le(()=>console.log("home timeline unmounted")),t(R,{get header(){return t(A,{get name(){return e.column.name??n.t("column.home")},get icon(){return t(Ue,{})},settings:()=>t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(U,{loadMore:l,get eose(){return s()},get children(){return t(q,{get events(){return c()}})}})}})},Kt=h('<button type=button class="size-4 shrink-0">'),Qt=h('<div class="flex items-start gap-2 break-all border-t border-border p-1"><div class="mt-1 size-14 shrink-0 overflow-hidden rounded"></div><div class="flex flex-1 flex-col overflow-hidden"><h3 class="truncate text-lg font-bold"></h3><p class="max-h-[3.25rem] overflow-y-auto break-all text-sm">'),Vt=h('<img class="size-full object-cover"alt=icon>'),Gt=h('<div class=text-xs><button class="select-text truncate hover:text-link hover:underline">'),Zt=e=>{const{showProfile:n}=de(),o=nt(()=>({menu:e.otherActionMenuItems??[]}));return(()=>{const i=Qt(),r=i.firstChild,l=r.nextSibling,c=l.firstChild,s=c.nextSibling;return a(r,t(I,{get when(){return e.image},keyed:!0,children:u=>(()=>{const m=Vt();return F(m,"src",u),m})()})),a(c,()=>e.title),a(s,()=>e.description),a(l,t(I,{get when(){return e.authorPubkey},keyed:!0,children:u=>(()=>{const m=Gt(),d=m.firstChild;return d.$$click=()=>n(u),a(d,t(me,{pubkey:u})),m})()}),null),a(i,t(I,{get when(){return e.otherActionMenuItems},get children(){return[(()=>{const u=Kt();u.$$click=()=>o.open();const m=o.targetRef;return typeof m=="function"?X(m,u):o.targetRef=u,a(u,t(ee,{})),u})(),P(()=>o.popup())]}}),null),i})()};z(["click"]);const Jt=e=>{const n=P(e),{query:o}=fe(()=>({kind:ce,author:n().author,identifier:n().identifier})),i=()=>o.data,r=he(()=>J([i()?.content])(([g])=>({encrypted:g}))),l=P(()=>{const g=r();if(g==null)return null;const k=ae(g);return new gt(k.tags)}),c=P(()=>o.data==null?null:new ht(o.data));return{event:i,followSet:c,pubkeys:()=>[...c()?.taggedPubkeys()??[],...l()?.taggedPubkeys()??[]],title:()=>c()?.title()||l()?.title(),description:()=>c()?.description()||l()?.description(),image:()=>c()?.image()||l()?.image(),query:o}},Wt=e=>{const n=S(),o=()=>Ce({pubkey:e.author,identifier:e.identifier,kind:ce}),i=[{content:n.t("column.columnInfoCommon.copyId"),onSelect:()=>{navigator.clipboard.writeText(o()).catch(r=>window.alert(r))}}];return t(Zt,{get image(){return e.image},get authorPubkey(){return e.author},get title(){return e.title??e.identifier},get description(){return e.description},otherActionMenuItems:i})},Xt=e=>{const n=S(),{config:o,removeColumn:i}=w(),{followSet:r,image:l,title:c,description:s,pubkeys:u}=Jt(()=>({author:e.column.author,identifier:e.column.identifier})),m=()=>e.column.name||c()||r()?.identifier()||n.t("column.followSet"),d=N(()=>({duration:null})),{events:g,eose:k}=p(()=>{const v=Z([...u()]);return v.length===0?null:{debugId:"following",relayUrls:o().relayUrls,filters:[{kinds:[1,6],authors:v,limit:20,since:d.since(),until:d.until()}],eoseLimit:20,continuous:d.continuous(),onEOSE:()=>{console.log("home: eose")},clientEventFilter:$=>e.column.contentFilter==null?!0:D(e.column.contentFilter)($.content)}});return t(R,{get header(){return t(A,{get name(){return m()},get icon(){return t(Ae,{})},settings:()=>[t(Wt,{get author(){return e.column.author},get identifier(){return e.column.identifier},get image(){return l()},get title(){return c()},get description(){return s()}}),t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex}})],onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(U,{loadMore:d,get eose(){return k()},get children(){return t(q,{get events(){return g()}})}})}})},Yt=h('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25">'),en=(e={})=>(()=>{const n=Yt();return Q(n,e,!0),n})(),tn=h('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143"clip-rule=evenodd>'),nn=(e={})=>(()=>{const n=tn();return Q(n,e,!0),n})(),on=h('<div class="flex items-center gap-1 pl-[2px] text-sm"><span class="webkit-touch-callout-none notification-icon flex h-4 min-w-4 max-w-[64px] shrink-0 select-none place-items-center overflow-hidden"></span><div class="notification-user flex flex-1 gap-1 overflow-hidden"><div class="author-icon size-5 shrink-0 overflow-hidden rounded"></div><div class="flex min-w-0 flex-1 overflow-hidden"><button class="select-text truncate font-bold hover:text-link hover:underline"></button><span class="shrink-0 whitespace-pre"></span></div></div><div class=text-xs>'),rn=h('<div class="notification-event py-1">'),ln=h('<img alt=icon class="size-full object-cover">'),cn=h("<div class=truncate> "),sn=e=>{const n=S(),o=ot(),{shouldMuteEvent:i}=w(),{showProfile:r}=de(),l=()=>_e(e.event),c=()=>l().lastTaggedEventId(),{profile:s}=Be(()=>({pubkey:e.event.pubkey})),{event:u,query:m}=rt(()=>J([c()])(([$])=>({eventId:$}))),d=()=>m.isSuccess&&u()==null,g=()=>l().toReactionTypes(),k=()=>st(g()),v=lt(()=>J([k()])(([$])=>({emoji:$})));return t(I,{get when(){return P(()=>!d())()&&!i(e.event)},get children(){return[(()=>{const $=on(),f=$.firstChild,x=f.nextSibling,y=x.firstChild,T=y.nextSibling,b=T.firstChild,C=b.nextSibling,M=x.nextSibling,H=v.emojiRef;return typeof H=="function"?X(H,f):v.emojiRef=f,a(f,t(ct,{get reactionTypes(){return g()}})),a($,()=>v.popup(),x),a(y,t(I,{get when(){return s()?.picture},keyed:!0,children:G=>(()=>{const O=ln();return j(()=>F(O,"src",ft(G,"icon"))),O})()})),b.$$click=()=>r(e.event.pubkey),a(b,t(me,{get pubkey(){return e.event.pubkey}})),a(C,()=>n.t("notification.reacted")),a(M,()=>o(l().createdAtAsDate())),$})(),(()=>{const $=rn();return a($,t(I,{get when(){return u()},get fallback(){return(()=>{const f=cn(),x=f.firstChild;return a(f,()=>n.t("general.loading"),x),a(f,c,null),f})()},keyed:!0,children:f=>t(it,{event:f})})),$})()]}})};z(["click"]);const un=h("<div>unknown event"),an=Ie(()=>Se(()=>import("./ZapReceipt-CAG7WtfC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]))),ve=e=>{const{shouldMuteEvent:n}=w();return t(V,{get each(){return e.events},children:o=>t(I,{get when(){return!n(o)},get children(){return t(W,{get fallback(){return un()},get children(){return[t(_,{get when(){return o.kind===re},get children(){return t(K,{get children(){return t(ut,{event:o})}})}}),t(_,{get when(){return o.kind===Te},get children(){return t(K,{get children(){return t(sn,{event:o})}})}}),t(_,{get when(){return o.kind===Ee},get children(){return t(K,{get children(){return t(at,{event:o})}})}}),t(_,{get when(){return o.kind===pe},get children(){return t(K,{get children(){return t(an,{event:o})}})}})]}})}})})},mn=h('<div class="flex gap-1">'),dn=h('<button type=button class="flex flex-1 flex-col items-center rounded-md border py-1 text-fg-secondary"><span class="inline-block size-4"></span><span class=text-xs>'),gn={Replies:[1],Repost:[6],Reaction:[7],Zap:[9735]},hn=e=>{const n=S(),o=[{notificationType:"Replies",title:n.t("column.notificationSettings.types.replies"),icon:t(en,{})},{notificationType:"Repost",title:n.t("column.notificationSettings.types.reposts"),icon:t(mt,{})},{notificationType:"Reaction",title:n.t("column.notificationSettings.types.reactions"),icon:t(dt,{})},{notificationType:"Zap",title:n.t("column.notificationSettings.types.zap"),icon:t(nn,{})}],i=()=>e.column.notificationTypes??[...ie],r=c=>i().includes(c),l=c=>{const s=[...i()];r(c)?s.splice(s.indexOf(c),1):s.push(c),e.saveColumn({...e.column,notificationTypes:s})};return t(ge,{get title(){return n.t("column.notificationSettings.notificationTypes")},get children(){const c=mn();return a(c,t(V,{each:o,children:({notificationType:s,title:u,icon:m})=>(()=>{const d=dn(),g=d.firstChild,k=g.nextSibling;return d.$$click=()=>l(s),F(d,"title",u),a(g,m),a(k,u),j(v=>{const $=!!r(s),f=!!r(s),x=!r(s),y=!r(s);return $!==v._v$&&d.classList.toggle("border-fg-secondary",v._v$=$),f!==v._v$2&&d.classList.toggle("font-bold",v._v$2=f),x!==v._v$3&&d.classList.toggle("border-border",v._v$3=x),y!==v._v$4&&d.classList.toggle("font-normal",v._v$4=y),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})()})),c}})},fn=e=>{const n=S(),{config:o,removeColumn:i}=w(),r=N(()=>({duration:null})),l=()=>e.column.notificationTypes??[...ie],c=()=>Z(l().flatMap(m=>gn[m])),{events:s,eose:u}=p(()=>c().length>0?{relayUrls:o().relayUrls,filters:[{kinds:c(),"#p":[e.column.pubkey],limit:20,since:r.since(),until:r.until()}],eoseLimit:20,clientEventFilter:m=>e.column.contentFilter==null?!0:D(e.column.contentFilter)(m.content)}:null);return E(()=>r.setEvents(s())),t(R,{get header(){return t(A,{get name(){return e.column.name??n.t("column.notification")},get icon(){return t(je,{})},settings:()=>t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex},renderOtherSettings:hn}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(U,{loadMore:r,get eose(){return u()},get children(){return t(ve,{get events(){return s()}})}})}})};z(["click"]);const vn=e=>{const n=S(),{config:o,removeColumn:i}=w(),r=N(()=>({duration:null})),{events:l,eose:c}=p(()=>({relayUrls:o().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10,since:r.since(),until:r.until()}],eoseLimit:10,clientEventFilter:s=>e.column.contentFilter==null?!0:D(e.column.contentFilter)(s.content)}));return E(()=>r.setEvents(l())),t(R,{get header(){return t(A,{get name(){return e.column.name??n.t("column.posts")},get icon(){return t(qe,{})},settings:()=>t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(U,{loadMore:r,get eose(){return c()},get children(){return t(q,{get events(){return l()}})}})}})},yn=e=>{const n=S(),{config:o,removeColumn:i}=w(),r=N(()=>({duration:null})),{events:l,eose:c}=p(()=>({relayUrls:o().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10,since:r.since(),until:r.until()}],eoseLimit:10,clientEventFilter:s=>e.column.contentFilter==null?!0:D(e.column.contentFilter)(s.content)}));return E(()=>r.setEvents(l())),t(R,{get header(){return t(A,{get name(){return e.column.name??n.t("column.reactions")},get icon(){return t(He,{})},settings:()=>t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(U,{loadMore:r,get eose(){return c()},get children(){return t(ve,{get events(){return l()}})}})}})},$n=e=>{const n=S(),{removeColumn:o}=w(),i=N(()=>({duration:4*60*60})),{events:r,eose:l}=p(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1],limit:20,since:i.since(),until:i.until()}],eoseLimit:20,clientEventFilter:c=>e.column.contentFilter==null?!0:D(e.column.contentFilter)(c.content)}));return E(()=>i.setEvents(r())),t(R,{get header(){return t(A,{get name(){return e.column.name??n.t("column.relay")},get icon(){return t(Oe,{})},settings:()=>t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>o(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(U,{loadMore:i,get eose(){return l()},get children(){return t(q,{get events(){return r()}})}})}})},kn=h('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block size-4 text-fg-secondary"></span></h2><form class=flex-1><input class="w-full rounded border border-border bg-bg px-1 py-0 ring-border focus:border-border focus:ring-primary"type=text name=query></form><button class=size-4>'),xn=e=>{const[n,o]=B(!1),[i,r]=B(""),{saveColumn:l}=w(),c=()=>o(g=>!g),s=()=>{i()!==e.column.query&&l({...e.column,query:i()})},u=()=>{s()},m=g=>{r(g.currentTarget.value)},d=g=>{g.preventDefault(),s()};return Y(()=>{r(e.column.query)}),(()=>{const g=kn(),k=g.firstChild,v=k.firstChild,$=v.firstChild,f=v.nextSibling,x=f.firstChild,y=f.nextSibling;return a($,t(Ke,{})),f.addEventListener("submit",d),x.addEventListener("blur",u),x.addEventListener("change",m),y.$$click=()=>c(),a(y,t(ee,{})),a(g,t(I,{get when(){return n()},get children(){return e.settings()}}),null),j(()=>x.value=i()),g})()},wn=e=>{const{removeColumn:n}=w(),o=N(()=>({duration:null})),{events:i,eose:r}=p(()=>{const{query:l}=e.column;return l.length===0?null:{relayUrls:Re,filters:[{kinds:[1],search:l,limit:20,since:o.since(),until:o.until()}],eoseLimit:20,clientEventFilter:c=>c.tags.findIndex(([s])=>s==="mostr"||s==="proxy")>=0?!1:e.column.contentFilter==null?!0:D(e.column.contentFilter)(c.content)}});return E(()=>{o.setEvents(i())}),t(R,{get header(){return t(xn,{get column(){return e.column},settings:()=>t(L,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return t(U,{loadMore:o,get eose(){return r()},get children(){return t(q,{get events(){return i()}})}})}})};z(["click"]);const bn=h('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth">'),Cn=()=>{const{config:e}=w();return(()=>{const n=bn();return a(n,t(V,{get each(){return e().columns},children:(o,i)=>{const r=()=>i()+1,l=()=>r()===e().columns.length;return t(W,{get children(){return[t(_,{get when(){return o.columnType==="Following"&&o},keyed:!0,children:c=>t(Ot,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})}),t(_,{get when(){return o.columnType==="Notification"&&o},keyed:!0,children:c=>t(fn,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})}),t(_,{get when(){return o.columnType==="Posts"&&o},keyed:!0,children:c=>t(vn,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})}),t(_,{get when(){return o.columnType==="Reactions"&&o},keyed:!0,children:c=>t(yn,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})}),t(_,{get when(){return o.columnType==="Relays"&&o},keyed:!0,children:c=>t($n,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})}),t(_,{get when(){return o.columnType==="FollowSet"&&o},keyed:!0,children:c=>t(Xt,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})}),t(_,{get when(){return o.columnType==="Bookmark"&&o},keyed:!0,children:c=>t(Ht,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})}),t(_,{get when(){return o.columnType==="Search"&&o},keyed:!0,children:c=>t(wn,{column:c,get columnIndex(){return r()},get lastColumn(){return l()}})})]}})}})),n})()},_n=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],In=e=>{const n=new Map;return e.forEach(o=>{n.set(o.key,o)}),n},Sn=({shortcuts:e=_n,onShortcut:n})=>{const o=In(e);Y(()=>{const i=Qe(r=>{if(r.type!=="keydown"||r.ctrlKey||r.altKey||r.metaKey||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLInputElement)return;const l=o.get(r.key);l!=null&&n(l)},50);window.addEventListener("keydown",i),le(()=>{window.removeEventListener("keydown",i)})})},Tn=()=>{const e=se();Sn({onShortcut:n=>{e(n.command).then(()=>console.debug(`shortcut key '${n.key}' was processed successfully`),o=>console.error(o))}})},En=h('<div class="absolute inset-0 flex h-dvh w-screen touch-manipulation flex-row overflow-hidden">'),pn=()=>{Tn();const e=Ze(),{config:n,initializeColumns:o}=w(),i=ue();return E(()=>{Promise.allSettled(n().relayUrls.map(async r=>{try{const l=await e().ensureRelay(r);l.onnotice=c=>{console.error(`NOTICE: ${r}: ${c}`)},l.onclose=()=>{console.warn(`CLOSE: ${r}`)}}catch(l){console.error("ensureRelay failed",l)}})).catch(()=>{})}),E(()=>{const r=i();r!=null&&o({pubkey:r})}),Le(r=>{console.error("uncaught error: ",r)}),(()=>{const r=En();return a(r,t(Ve,{}),null),a(r,t(Cn,{}),null),a(r,t(Ge,{}),null),r})()},Un=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"}));export{nn as B,Un as H};
//# sourceMappingURL=Home-BfkDSwu9.js.map
