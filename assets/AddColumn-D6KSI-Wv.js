import{s as w,t as u,u as v,j as x,c as S,a as t,S as _,i,F as $,aj as M,M as H,d as j,ak as A,al as P,am as q,an as B,ah as E,ao as F,ap as L}from"./index-BNStRSs3.js";import{b as N,a as U,H as z,g as G,G as T,M as D,h as J,i as W,e as y}from"./SideBar-DGtpwmmK.js";import{B as K}from"./BasicModal-pvAAITTJ.js";import{i as O}from"./url-BOMIwtgZ.js";import"./resolveAsset-C8KSa6kd.js";const Q=u('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008zm-3 0h.008v.008h-.008z">'),V=(s={})=>(()=>{const o=Q();return w(o,s,!0),o})(),X=u('<div class=p-8><form class="flex gap-1"><input class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"type=text name=url placeholder=wss://... pattern=wss?://.* required><button class="rounded border border-primary px-4 py-1 font-bold text-primary"type=submit></button></form><div class="flex flex-col items-start gap-1 pt-8">'),Y=u('<button type=button class="text-fg-secondary hover:text-fg">'),Z=u('<div class="flex flex-wrap p-4">'),I=u('<button class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"><span class="inline-block size-8">'),ee=s=>{const o=v(),{config:l}=x(),[a,C]=S(""),h=r=>{r.preventDefault();const n=a();if(!O(n)){window.alert("Invalid url");return}s.addRelaysColumn([n])};return(()=>{const r=X(),n=r.firstChild,d=n.firstChild,f=d.nextSibling,b=n.nextSibling;return n.addEventListener("submit",h),d.addEventListener("change",c=>C(c.currentTarget.value)),i(f,()=>o.t("column.addRelayColumn.add")),i(b,t($,{get each(){return l().relayUrls},children:c=>(()=>{const m=Y();return m.$$click=()=>s.addRelaysColumn([c]),i(m,c),m})()})),r})()},ce=s=>{const o=v(),l=N(),{saveColumn:a}=x(),C=U(),[h,r]=S(void 0),n=()=>{s.onClose(),C({command:"moveToLastColumn"}).catch(e=>console.error(e))},d=()=>{y([l()])(([e])=>{a(P({pubkey:e}))}),n()},f=()=>{y([l()])(([e])=>{a(q({pubkey:e}))}),n()},b=()=>{a(B()),n()},c=e=>{a(A({name:e.join(", "),relayUrls:e})),n()},k=[{name:()=>o.t("column.home"),icon:()=>t(z,{}),onSelect:d},{name:()=>o.t("column.notification"),icon:()=>t(G,{}),onSelect:f},{name:()=>o.t("column.relay"),icon:()=>t(V,{}),onSelect:()=>r("AddRelaysColumn")},{name:()=>o.t("column.japanese"),icon:()=>t(T,{}),onSelect:b},{name:()=>o.t("column.search"),icon:()=>t(D,{}),onSelect:()=>{a(E({query:""})),n()}},{name:()=>o.t("column.myPosts"),icon:()=>t(J,{}),onSelect:()=>{y([l()])(([e])=>{a(F({pubkey:e}))}),n()}},{name:()=>o.t("column.myReactions"),icon:()=>t(W,{}),onSelect:()=>{y([l()])(([e])=>{a(L({pubkey:e}))}),n()}}];return t(K,{get onClose(){return s.onClose},get children(){return t(_,{get fallback(){return(()=>{const e=Z();return i(e,t($,{each:k,children:g=>(()=>{const p=I(),R=p.firstChild;return M(p,"click",g.onSelect,!0),i(R,()=>g.icon()),i(p,()=>g.name(),null),p})()})),e})()},get children(){return t(H,{get when(){return h()==="AddRelaysColumn"},get children(){return t(ee,{addRelaysColumn:c})}})}})}})};j(["click"]);export{ce as default};
//# sourceMappingURL=AddColumn-D6KSI-Wv.js.map
