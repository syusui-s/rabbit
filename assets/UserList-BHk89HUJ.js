import{d as p,i as l,a as r,b as $,f as b,h as d,t as o,F as _}from"./index-BfvyELJb.js";import{e as g,n as v,g as k}from"./SideBar-PatyVfXs.js";import{t as y}from"./url-DPIb-kBm.js";import{B as x}from"./BasicModal-C8_A9XnB.js";import{L as w}from"./EventDisplay-CwXba13g.js";import"./resolveAsset-C6F1Z3EL.js";import"./SafeLink-DUzIBWxt.js";const C=o('<div class="profile-name truncate pr-1 font-bold hover:underline">'),S=o('<div class="flex w-full items-center gap-1"><button type=button class="profile-icon size-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type=button class="profile flex min-w-0 select-text truncate hover:text-link"><span class="profile flex min-w-0 truncate hover:text-link"><div class="profile-username truncate text-fg-secondary">'),P=o('<img alt=icon class="size-full rounded object-cover">'),L=t=>{const{profile:i}=g(()=>({pubkey:t.pubkey}));return(()=>{const a=S(),n=a.firstChild,f=n.nextSibling,h=f.firstChild,c=h.firstChild,u=c.firstChild,s=u.firstChild;return n.$$click=e=>{e.preventDefault(),t.onShowProfile?.()},l(n,r(d,{get when(){return i()?.picture},keyed:!0,children:e=>(()=>{const m=P();return $(()=>b(m,"src",y(e))),m})()})),c.$$click=e=>{e.preventDefault(),t?.onShowProfile?.()},l(u,r(d,{get when(){return(i()?.display_name?.length??0)>0},get children(){const e=C();return l(e,()=>i()?.display_name),e}}),s),l(s,r(d,{get when(){return i()?.name},get fallback(){return`@${v(t.pubkey)}`},keyed:!0,children:e=>`@${e}`})),a})()};p(["click"]);const E=o('<div class="px-4 py-2"><div> 件</div><div>'),z=o('<div class="flex border-t border-border py-1">'),F=o("<div class=h-6>"),R=t=>{const{showProfile:i}=k();return r(x,{get onClose(){return t.onClose},get children(){const a=E(),n=a.firstChild,f=n.firstChild,h=n.nextSibling;return l(n,()=>t.data.length,f),l(h,r(_,{get each(){return t.data},children:c=>{const u=()=>t.pubkeyExtractor(c);return(()=>{const s=z();return l(s,r(d,{get when(){return t.renderInfo},keyed:!0,children:e=>e(c)}),null),l(s,r(w,{get fallback(){return F()},children:()=>r(L,{get pubkey(){return u()},onShowProfile:()=>i(u())})}),null),s})()}})),a}})};export{R as default};
//# sourceMappingURL=UserList-BHk89HUJ.js.map
