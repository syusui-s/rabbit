import{J as d,L as c,y as u,N as f,o as m,i as o,a as l,t as p}from"./index-6916a78c.js";import{S as v,z as w,o as S}from"./SideBar-69074859.js";import{u as g}from"./usePersistStatus-da9c7993.js";const h=p('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),x=()=>{const a=d(),s=c(),{modalState:n,showProfile:r}=S(),{persistStatus:i}=g(),t=()=>{i().loggedIn?a("/"):a("/hello")};return u(()=>{if(s.id!=null)try{const e=f(s.id);e.type==="npub"&&r(e.data)}catch{window.alert("Invalid ID"),t()}else t()}),m(()=>{n().type==="Closed"&&t()}),(()=>{const e=h();return o(e,l(v,{}),null),o(e,l(w,{}),null),e})()};export{x as default};
//# sourceMappingURL=Permalink-40b8a3cf.js.map
