import{$ as l,W as h,X as $,J as p,c as I,o as z,k as W}from"./index-5c9c2c60.js";const A=Symbol("store-raw"),u=Symbol("store-node");function T(e){let t=e[l];if(!t&&(Object.defineProperty(e,l,{value:t=new Proxy(e,J)}),!Array.isArray(e))){const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let r=0,s=n.length;r<s;r++){const i=n[r];o[i].get&&Object.defineProperty(e,i,{enumerable:o[i].enumerable,get:o[i].get.bind(t)})}}return t}function g(e){let t;return e!=null&&typeof e=="object"&&(e[l]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function d(e,t=new Set){let n,o,r,s;if(n=e!=null&&e[A])return n;if(!g(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,c=e.length;i<c;i++)r=e[i],(o=d(r,t))!==r&&(e[i]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),c=Object.getOwnPropertyDescriptors(e);for(let f=0,b=i.length;f<b;f++)s=i[f],!c[s].get&&(r=e[s],(o=d(r,t))!==r&&(e[s]=o))}return e}function w(e){let t=e[u];return t||Object.defineProperty(e,u,{value:t=Object.create(null)}),t}function O(e,t,n){return e[t]||(e[t]=D(n))}function K(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===l||t===u||(delete n.value,delete n.writable,n.get=()=>e[l][t]),n}function _(e){if($()){const t=w(e);(t._||(t._=D()))()}}function L(e){return _(e),Reflect.ownKeys(e)}function D(e){const[t,n]=I(e,{equals:!1,internal:!0});return t.$=n,t}const J={get(e,t,n){if(t===A)return e;if(t===l)return n;if(t===h)return _(e),n;const o=w(e),r=o[t];let s=r?r():e[t];if(t===u||t==="__proto__")return s;if(!r){const i=Object.getOwnPropertyDescriptor(e,t);$()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(s=O(o,t,s)())}return g(s)?T(s):s},has(e,t){return t===A||t===l||t===h||t===u||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:L,getOwnPropertyDescriptor:K};function y(e,t,n,o=!1){if(!o&&e[t]===n)return;const r=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let i=w(e),c;if((c=O(i,t,r))&&c.$(()=>n),Array.isArray(e)&&e.length!==s){for(let f=e.length;f<s;f++)(c=i[f])&&c.$();(c=O(i,"length",s))&&c.$(e.length)}(c=i._)&&c.$()}function k(e,t){const n=Object.keys(t);for(let o=0;o<n.length;o+=1){const r=n[o];y(e,r,t[r])}}function U(e,t){if(typeof t=="function"&&(t=t(e)),t=d(t),Array.isArray(t)){if(e===t)return;let n=0,o=t.length;for(;n<o;n++){const r=t[n];e[n]!==r&&y(e,n,r)}y(e,"length",o)}else k(e,t)}function a(e,t,n=[]){let o,r=e;if(t.length>1){o=t.shift();const i=typeof o,c=Array.isArray(e);if(Array.isArray(o)){for(let f=0;f<o.length;f++)a(e,[o[f]].concat(t),n);return}else if(c&&i==="function"){for(let f=0;f<e.length;f++)o(e[f],f)&&a(e,[f].concat(t),n);return}else if(c&&i==="object"){const{from:f=0,to:b=e.length-1,by:N=1}=o;for(let S=f;S<=b;S+=N)a(e,[S].concat(t),n);return}else if(t.length>1){a(e[o],t,[o].concat(n));return}r=e[o],n=[o].concat(n)}let s=t[0];typeof s=="function"&&(s=s(r,n),s===r)||o===void 0&&s==null||(s=d(s),o===void 0||g(r)&&g(s)&&!Array.isArray(s)?k(r,s):y(e,o,s))}function E(...[e,t]){const n=d(e||{}),o=Array.isArray(n),r=T(n);function s(...i){p(()=>{o&&i.length===1?U(n,i[0]):a(n,i)})}return[r,s]}const F=(e,t,n)=>{const o=e();return{getItem(r){const s=o.getItem(r);return s!=null?n(s):null},setItem(r,s){const i=t(s);o.setItem(r,i)}}},X=(e,t,n)=>{const[o,r]=I(!1),[s,i]=E(t);return z(()=>{const c=n.getItem(e);c!=null&&i(c),r(!0)}),W(()=>{o()&&n.setItem(e,s)}),[s,i]},R={loggedIn:!1,agreements:{nostrBuild:!1}},q=e=>JSON.stringify(e),B=e=>JSON.parse(e),C=F(()=>window.localStorage,q,B),[P,j]=X("RabbitPersistStatus",R,C),Y=()=>({persistStatus:()=>({...R,...P}),loggedIn:()=>{j(o=>({...o,loggedIn:!0}))},agreeToToS:o=>{j("agreements",r=>({...r,[o]:!0}))},didAgreeToToS:o=>P.agreements[o]??!1}),G=e=>{const t=new URL("/rabbit/",window.location.href);return new URL(e,t).href};export{d as a,F as b,E as c,X as d,G as r,Y as u};
//# sourceMappingURL=resolveAsset-5a8642de.js.map