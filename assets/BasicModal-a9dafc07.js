import{d as o,i as a,t as r,h as d,a as s,S as f,ab as u}from"./index-0812911d.js";const b=r('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),h=l=>{let t;const n=e=>{e.target===t&&l.onClose?.()};return(()=>{const e=b();e.$$click=n;const c=t;return typeof c=="function"?d(c,e):t=e,a(e,()=>l.children),e})()};o(["click"]);const $=r('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-fg-secondary"aria-label=Close><span class="inline-block h-8 w-8"></span></button><div class="scrollbar flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border border-border bg-bg text-fg shadow-lg">'),x=l=>s(h,{onClose:()=>l.onClose?.(),get children(){const t=$(),n=t.firstChild,e=n.firstChild,c=n.nextSibling;return n.$$click=()=>l.onClose?.(),a(e,s(f,{get when(){return l?.closeButton},get fallback(){return s(u,{})},keyed:!0,children:i=>i()})),a(c,()=>l.children),t}});o(["click"]);export{x as B};
//# sourceMappingURL=BasicModal-a9dafc07.js.map
