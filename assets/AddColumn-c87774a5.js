import{g as M,u as q,a as l,i as e,d as B,t as H,an as N,ao as P,ap as G,ai as A,aq as F,ar as J}from"./index-0812911d.js";import{H as T,B as U,M as j}from"./magnifying-glass-3d77722b.js";import{G as E,H as L}from"./globe-alt-10a73e09.js";import{U as z}from"./user-c3a4cc80.js";import{B as D}from"./BasicModal-a9dafc07.js";import{b as I,a as K,f as p}from"./SideBar-e7f532c2.js";import"./usePersistStatus-8f0580a5.js";const O=H('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 hover:text-primary sm:basis-1/4"><span class="inline-block h-8 w-8">'),es=f=>{const n=M(),o=I(),{saveColumn:a}=q(),d=K(),t=()=>{f.onClose(),d({command:"moveToLastColumn"}).catch(s=>console.error(s))},C=()=>{p([o()])(([s])=>{a(N({pubkey:s}))}),t()},h=()=>{p([o()])(([s])=>{a(P({pubkey:s}))}),t()},x=()=>{a(G()),t()},y=()=>{a(A({query:""})),t()},$=()=>{p([o()])(([s])=>{a(F({pubkey:s}))}),t()},g=()=>{p([o()])(([s])=>{a(J({pubkey:s}))}),t()};return l(D,{get onClose(){return f.onClose},get children(){const s=O(),i=s.firstChild,k=i.firstChild,c=i.nextSibling,_=c.firstChild,r=c.nextSibling,v=r.firstChild,m=r.nextSibling,w=m.firstChild,u=m.nextSibling,S=u.firstChild,b=u.nextSibling,R=b.firstChild;return i.$$click=()=>C(),e(k,l(T,{})),e(i,()=>n()("column.home"),null),c.$$click=()=>h(),e(_,l(U,{})),e(c,()=>n()("column.notification"),null),r.$$click=()=>x(),e(v,l(E,{})),e(r,()=>n()("column.japanese"),null),m.$$click=()=>y(),e(w,l(j,{})),e(m,()=>n()("column.search"),null),u.$$click=()=>$(),e(S,l(z,{})),e(u,()=>n()("column.myPosts"),null),b.$$click=()=>g(),e(R,l(L,{})),e(b,()=>n()("column.myReactions"),null),s}})};B(["click"]);export{es as default};
//# sourceMappingURL=AddColumn-c87774a5.js.map
