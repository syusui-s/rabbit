import{$ as l,P,Q as j,h as z,v as g,j as I,B as $}from"./index-2b5eb4e7.js";const A=Symbol("store-raw"),u=Symbol("store-node"),K=Symbol("store-name");function _(e,t){let n=e[l];if(!n&&(Object.defineProperty(e,l,{value:n=new Proxy(e,L)}),!Array.isArray(e))){const s=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,i=s.length;o<i;o++){const f=s[o];r[f].get&&Object.defineProperty(e,f,{enumerable:r[f].enumerable,get:r[f].get.bind(n)})}}return n}function y(e){let t;return e!=null&&typeof e=="object"&&(e[l]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function d(e,t=new Set){let n,s,r,o;if(n=e!=null&&e[A])return n;if(!y(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,f=e.length;i<f;i++)r=e[i],(s=d(r,t))!==r&&(e[i]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),f=Object.getOwnPropertyDescriptors(e);for(let c=0,b=i.length;c<b;c++)o=i[c],!f[o].get&&(r=e[o],(s=d(r,t))!==r&&(e[o]=s))}return e}function w(e){let t=e[u];return t||Object.defineProperty(e,u,{value:t={}}),t}function h(e,t,n){return e[t]||(e[t]=N(n))}function p(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===l||t===u||t===K||(delete n.value,delete n.writable,n.get=()=>e[l][t]),n}function D(e){if(j()){const t=w(e);(t._||(t._=N()))()}}function E(e){return D(e),Reflect.ownKeys(e)}function N(e){const[t,n]=g(e,{equals:!1,internal:!0});return t.$=n,t}const L={get(e,t,n){if(t===A)return e;if(t===l)return n;if(t===P)return D(e),n;const s=w(e),r=s.hasOwnProperty(t);let o=r?s[t]():e[t];if(t===u||t==="__proto__")return o;if(!r){const i=Object.getOwnPropertyDescriptor(e,t);j()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(o=h(s,t,o)())}return y(o)?_(o):o},has(e,t){return t===A||t===l||t===P||t===u||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:E,getOwnPropertyDescriptor:p};function S(e,t,n,s=!1){if(!s&&e[t]===n)return;const r=e[t],o=e.length;n===void 0?delete e[t]:e[t]=n;let i=w(e),f;(f=h(i,t,r))&&f.$(()=>n),Array.isArray(e)&&e.length!==o&&(f=h(i,"length",o))&&f.$(e.length),(f=i._)&&f.$()}function k(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const r=n[s];S(e,r,t[r])}}function T(e,t){if(typeof t=="function"&&(t=t(e)),t=d(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const r=t[n];e[n]!==r&&S(e,n,r)}S(e,"length",s)}else k(e,t)}function a(e,t,n=[]){let s,r=e;if(t.length>1){s=t.shift();const i=typeof s,f=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)a(e,[s[c]].concat(t),n);return}else if(f&&i==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&a(e,[c].concat(t),n);return}else if(f&&i==="object"){const{from:c=0,to:b=e.length-1,by:W=1}=s;for(let O=c;O<=b;O+=W)a(e,[O].concat(t),n);return}else if(t.length>1){a(e[s],t,[s].concat(n));return}r=e[s],n=[s].concat(n)}let o=t[0];typeof o=="function"&&(o=o(r,n),o===r)||s===void 0&&o==null||(o=d(o),s===void 0||y(r)&&y(o)&&!Array.isArray(o)?k(r,o):S(e,s,o))}function B(...[e,t]){const n=d(e||{}),s=Array.isArray(n),r=_(n);function o(...i){z(()=>{s&&i.length===1?T(n,i[0]):a(n,i)})}return[r,o]}const F=(e,t,n)=>{const s=e();return{getItem(r){const o=s.getItem(r);return o!=null?n(o):null},setItem(r,o){const i=t(o);s.setItem(r,i)}}},J=(e,t,n)=>{const[s,r]=g(!1),[o,i]=g(t);return I(()=>{const f=n.getItem(e);f!=null&&i(()=>f),r(!0)}),$(()=>{s()&&n.setItem(e,o())}),[o,i]},G=(e,t,n)=>{const[s,r]=g(!1),[o,i]=B(t);return I(()=>{const f=n.getItem(e);f!=null&&i(f),r(!0)}),$(()=>{s()&&n.setItem(e,o)}),[o,i]},R={loggedIn:!1,agreeWithNostrBuild:!1},M=e=>JSON.stringify(e),q=e=>JSON.parse(e),C=F(()=>window.localStorage,M,q),[Q,X]=J("RabbitPersistStatus",R,C),H=()=>({persistStatus:()=>({...R,...Q()}),loggedIn:()=>{X(t=>({...t,loggedIn:!0}))}});export{F as a,G as b,B as c,H as d,d as u};
//# sourceMappingURL=usePersistStatus-777148b3.js.map
