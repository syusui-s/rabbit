import{k as l,m as u,D as g}from"./index-27e43aa1.js";const d=(t,s,r)=>{const n=t();return{getItem(a){const e=n.getItem(a);return e!=null?r(e):null},setItem(a,e){const o=s(e);n.setItem(a,o)}}},S=(t,s,r)=>{const[n,a]=l(!1),[e,o]=l(s);return u(()=>{const i=r.getItem(t);i!=null&&o(()=>i),a(!0)}),g(()=>{n()&&r.setItem(t,e())}),[e,o]},c={loggedIn:!1,agreeWithNostrBuild:!1},I=t=>JSON.stringify(t),f=t=>JSON.parse(t),m=d(()=>window.localStorage,I,f),[p,P]=S("RabbitPersistStatus",c,m),z=()=>({persistStatus:()=>({...c,...p()}),loggedIn:()=>{P(s=>({...s,loggedIn:!0}))}});export{S as a,d as c,z as u};
