import{q as d,v as c,o as u,k as f,i as o,a as l,t as m}from"./index-05e17baf.js";import{V as p,W as v,w,Y as g}from"./SideBar-26781ce1.js";import{u as h}from"./usePersistStatus-ea4b87ef.js";const S=m('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),y=()=>{const a=d(),s=c(),{modalState:n,showProfile:r}=w(),{persistStatus:i}=h(),t=()=>{i().loggedIn?a("/"):a("/hello")};return u(()=>{if(s.id!=null)try{const e=g(s.id);e.type==="npub"&&r(e.data)}catch{window.alert("Invalid ID"),t()}else t()}),f(()=>{n().type==="Closed"&&t()}),(()=>{const e=S();return o(e,l(p,{}),null),o(e,l(v,{}),null),e})()};export{y as default};
//# sourceMappingURL=Permalink-de819d49.js.map
