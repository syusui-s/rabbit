import{j,c as x,w as k,m as p,aV as M,o as q,C as I}from"./index-DPXx_rRP.js";import{L as A,O as C,q as F,o as K}from"./SideBar-BGfz5hP7.js";let E=0;const{setActiveSubscriptions:N}=A();setInterval(()=>{N(E)},1e3);const U=({eose:e,limit:r,eoseLimit:b})=>{const[i,n]=x([]),o=[];let c;const l=()=>{n(s=>{const t=[...s];return o.forEach(u=>{C(t,u)}),t.slice(0,b())}),o.splice(0,o.length)},g=()=>{c==null&&(c=setTimeout(()=>{c=void 0,l()},100))},a=()=>{c!=null&&clearTimeout(c)},f=s=>{const t=s.created_at-F();if(!(t>300)){if(t>0){setTimeout(()=>f(s),t*1e3);return}e()?n(u=>{const d=[...u];return C(d,s),d.slice(0,r())}):(o.push(s),g())}},S=()=>{n([]),a()};return p(()=>{e()&&l()}),I(()=>{a()}),{events:i,setEvents:n,addEvent:f,clearEvents:S}},_=e=>{const{config:r,shouldMuteEvent:b}=j(),T=K(),[i,n]=x(!1),o=k(e),c=()=>e()?.eoseLimit??25,l=()=>e()?.limit??50,{events:g,addEvent:a,clearEvents:f,setEvents:S}=U({eose:i,eoseLimit:c,limit:l});p(M(()=>[r().mutedPubkeys,r().mutedKeywords],()=>{S(t=>t.filter(u=>!b(u)))},{defer:!0})),q(()=>{console.debug("subscription mounted",e()?.debugId,e()),I(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const s=()=>{console.debug("startSubscription: start");const t=o();if(t==null)return;const{relayUrls:u,filters:d,options:D,onEvent:h,onEOSE:y,clientEventFilter:w,continuous:O=!0}=t;let m=!0;E+=1,f(),n(!1);const L=T().subscribeMany(u,d,D??{maxWait:12e3,onevent:v=>{h?.(v),!(w!=null&&!w(v))&&a(v)},oneose:()=>{i()||(y?.(),n(!0),O||(L.close(),m&&(m=!1,E-=1)))}});I(()=>{console.debug("startSubscription: end"),L.close(),m&&(m=!1,E-=1)})};return p(M(()=>[o()],()=>s())),{events:g,eose:i}};export{_ as u};
//# sourceMappingURL=useSubscription-DITQGRXy.js.map