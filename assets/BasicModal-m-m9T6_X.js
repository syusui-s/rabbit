import{d as c,i as a,t as r,n as d,a as s,h as f}from"./index-vB-Ph9_p.js";import{X as u}from"./SideBar-boBxCUjq.js";const b=r('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),h=t=>{let l;const n=e=>{e.target===l&&t.onClose?.()};return(()=>{const e=b();e.$$click=n;const o=l;return typeof o=="function"?d(o,e):l=e,a(e,()=>t.children),e})()};c(["click"]);const $=r('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-fg-secondary"aria-label=Close><span class="inline-block size-8"></span></button><div class="scrollbar flex max-h-[calc(100vh-6em)] flex-col overflow-y-auto rounded-xl border border-border bg-bg text-fg shadow-lg">'),x=t=>s(h,{onClose:()=>t.onClose?.(),get children(){const l=$(),n=l.firstChild,e=n.firstChild,o=n.nextSibling;return n.$$click=()=>t.onClose?.(),a(e,s(f,{get when(){return t?.closeButton},get fallback(){return s(u,{})},keyed:!0,children:i=>i()})),a(o,()=>t.children),l}});c(["click"]);export{x as B};
//# sourceMappingURL=BasicModal-m-m9T6_X.js.map