import{j as O,c as q,w as U,q as p,aU as M,o as j,C as I}from"./index-CBxHEaEH.js";import{L as k,O as C,q as A,o as F}from"./SideBar-CT0pxxmn.js";let E=0;const{setActiveSubscriptions:K}=k();setInterval(()=>{K(E)},1e3);const N=({eose:e,limit:r,eoseLimit:b})=>{const[i,n]=q([]),o=[];let c;const l=()=>{n(s=>{const t=[...s];return o.forEach(u=>{C(t,u)}),t.slice(0,b())}),o.splice(0,o.length)},g=()=>{c==null&&(c=setTimeout(()=>{c=void 0,l()},100))},a=()=>{c!=null&&clearTimeout(c)},f=s=>{const t=s.created_at-A();if(!(t>300)){if(t>0){setTimeout(()=>f(s),t*1e3);return}e()?n(u=>{const d=[...u];return C(d,s),d.slice(0,r())}):(o.push(s),g())}},S=()=>{n([]),a()};return p(()=>{e()&&l()}),I(()=>{a()}),{events:i,setEvents:n,addEvent:f,clearEvents:S}},z=e=>{const{config:r,shouldMuteEvent:b}=O(),T=F(),[i,n]=q(!1),o=U(e),c=()=>e()?.eoseLimit??25,l=()=>e()?.limit??50,{events:g,addEvent:a,clearEvents:f,setEvents:S}=N({eose:i,eoseLimit:c,limit:l});p(M(()=>[r().mutedPubkeys,r().mutedKeywords],()=>{S(t=>t.filter(u=>!b(u)))},{defer:!0})),j(()=>{console.debug("subscription mounted",e()?.debugId,e()),I(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const s=()=>{console.debug("startSubscription: start");const t=o();if(t==null)return;const{relayUrls:u,filters:d,options:x,onEvent:h,onEOSE:y,clientEventFilter:w,continuous:D=!0}=t;let m=!0;E+=1,f(),n(!1);const L=T().subscribeMany(u,d,x??{maxWait:12e3,onevent:v=>{h?.(v),!(w!=null&&!w(v))&&a(v)},oneose:()=>{i()||(y?.(),n(!0),D||(L.close(),m&&(m=!1,E-=1)))}});I(()=>{console.debug("startSubscription: end"),L.close(),m&&(m=!1,E-=1)})};return p(M(()=>[o()],()=>s())),{events:g,eose:i}};export{z as u};
//# sourceMappingURL=useSubscription-Cn5JZ--l.js.map
