import{d as p,i as r,a as l,j as $,l as b,S as d,t as o,F as _}from"./index-0812911d.js";import{d as g,n as v,g as k}from"./SideBar-e7f532c2.js";import{t as y}from"./useFollowings-db1d2404.js";import{B as w}from"./BasicModal-a9dafc07.js";import{L as x}from"./LazyLoad-ff3bf7fe.js";import"./usePersistStatus-8f0580a5.js";import"./globe-alt-10a73e09.js";const C=o('<div class="profile-name truncate pr-1 font-bold hover:underline">'),S=o('<div class="flex w-full items-center gap-1"><button type=button class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type=button class="profile flex min-w-0 select-text truncate hover:text-link"><span class="profile flex min-w-0 truncate hover:text-link"><div class="profile-username truncate text-fg-secondary">'),P=o('<img alt=icon class="h-full w-full rounded object-cover">'),L=t=>{const{profile:i}=g(()=>({pubkey:t.pubkey}));return(()=>{const a=S(),n=a.firstChild,f=n.nextSibling,h=f.firstChild,c=h.firstChild,u=c.firstChild,s=u.firstChild;return n.$$click=e=>{e.preventDefault(),t.onShowProfile?.()},r(n,l(d,{get when(){return i()?.picture},keyed:!0,children:e=>(()=>{const m=P();return $(()=>b(m,"src",y(e))),m})()})),c.$$click=e=>{e.preventDefault(),t?.onShowProfile?.()},r(u,l(d,{get when(){return(i()?.display_name?.length??0)>0},get children(){const e=C();return r(e,()=>i()?.display_name),e}}),s),r(s,l(d,{get when(){return i()?.name},get fallback(){return`@${v(t.pubkey)}`},keyed:!0,children:e=>`@${e}`})),a})()};p(["click"]);const E=o('<div class="px-4 py-2"><div> 件</div><div>'),j=o('<div class="flex border-t border-border py-1">'),F=o("<div class=h-6>"),R=t=>{const{showProfile:i}=k();return l(w,{get onClose(){return t.onClose},get children(){const a=E(),n=a.firstChild,f=n.firstChild,h=n.nextSibling;return r(n,()=>t.data.length,f),r(h,l(_,{get each(){return t.data},children:c=>{const u=()=>t.pubkeyExtractor(c);return(()=>{const s=j();return r(s,l(d,{get when(){return t.renderInfo},keyed:!0,children:e=>e(c)}),null),r(s,l(x,{get fallback(){return F()},children:()=>l(L,{get pubkey(){return u()},onShowProfile:()=>i(u())})}),null),s})()}})),a}})};export{R as default};
//# sourceMappingURL=UserList-1711693a.js.map
