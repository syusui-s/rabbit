import{c as e,l as t,o as n,s as r,u as i}from"./createSignalWithStorage-kl5pV6Ln.js";import{D as a,M as o,O as s,R as c,b as l,c as u,d,f,k as p,m,n as h,o as g,p as _,s as v,u as y,v as b,w as x,x as S,y as C}from"./web-DT2KjDMR.js";import{It as w,Ut as T,at as E,c as D,g as O,i as k,k as ee,l as te,m as ne,mt as re,zt as ie}from"./index-BasE3WBQ.js";import{n as A}from"./useProfile-B-wPtzyn.js";import{t as j}from"./npubEncodeFallback-C34sXHZ4.js";import{t as ae}from"./Tags-Bnc-4Aeo.js";import{n as oe,r as M}from"./ensureNonNull-Bu4mFugT.js";import{n as se,t as N}from"./usePublishEventMutation-BtSzXjaO.js";import{t as ce}from"./x-mark-CTFt2705.js";var le=i(E(),1),ue=e=>{let{profile:t}=A(()=>({pubkey:e.pubkey}));return x(S,{get fallback(){return j(e.pubkey)},get children(){return[x(C,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),x(C,{get when(){return(t()?.name?.length??0)>0},get children(){return[`@`,u(()=>t()?.name)]}})]}})},de=_(`<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 4.5v15m7.5-7.5h-15">`),P=((e={})=>(()=>{let t=de();return d(t,e,!0,!0),t})());function fe(e){return e&&e.__esModule?e.default:e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I,L,pe,R,me,he,z={},ge=[],_e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function B(e,t){for(var n in t)e[n]=t[n];return e}function V(e){var t=e.parentNode;t&&t.removeChild(e)}function ve(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?I.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return ye(e,o,r,i,null)}function ye(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++pe};return i==null&&L.vnode!=null&&L.vnode(a),a}function H(){return{current:null}}function U(e){return e.children}function W(e,t){this.props=e,this.context=t}function G(e,t){if(t==null)return e.__?G(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?G(e):null}function be(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return be(e)}}function xe(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!Se.__r++||he!==L.debounceRendering)&&((he=L.debounceRendering)||me)(Se)}function Se(){for(var e;Se.__r=R.length;)e=R.sort(function(e,t){return e.__v.__b-t.__v.__b}),R=[],e.some(function(e){var t,n,r,i,a,o;e.__d&&(a=(i=(t=e).__v).__e,(o=t.__P)&&(n=[],(r=B({},i)).__v=i.__v+1,Me(o,i,r,t.__n,o.ownerSVGElement!==void 0,i.__h==null?null:[a],n,a??G(i),i.__h),Ne(n,i),i.__e!=a&&be(i)))})}function Ce(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_=r&&r.__k||ge,v=_.length;for(n.__k=[],u=0;u<t.length;u++)if((p=n.__k[u]=(p=t[u])==null||typeof p==`boolean`?null:typeof p==`string`||typeof p==`number`||typeof p==`bigint`?ye(null,p,null,null,p):Array.isArray(p)?ye(U,{children:p},null,null,null):p.__b>0?ye(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(f=_[u])===null||f&&p.key==f.key&&p.type===f.type)_[u]=void 0;else for(d=0;d<v;d++){if((f=_[d])&&p.key==f.key&&p.type===f.type){_[d]=void 0;break}f=null}Me(e,p,f||=z,i,a,o,s,c,l),m=p.__e,(d=p.ref)&&f.ref!=d&&(g||=[],f.ref&&g.push(f.ref,null,p),g.push(d,p.__c||m,p)),m==null?c&&f.__e==c&&c.parentNode!=e&&(c=G(f)):(h??=m,typeof p.type==`function`&&p.__k===f.__k?p.__d=c=we(p,c,e):c=Ee(e,p,f,_,m,c),typeof n.type==`function`&&(n.__d=c))}for(n.__e=h,u=v;u--;)_[u]!=null&&(typeof n.type==`function`&&_[u].__e!=null&&_[u].__e==n.__d&&(n.__d=G(r,u+1)),Ie(_[u],_[u]));if(g)for(u=0;u<g.length;u++)Fe(g[u],g[++u],g[++u])}function we(e,t,n){for(var r,i=e.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=e,t=typeof r.type==`function`?we(r,t,n):Ee(n,r,r,i,r.__e,t));return t}function Te(e,t){return t||=[],e==null||typeof e==`boolean`||(Array.isArray(e)?e.some(function(e){Te(e,t)}):t.push(e)),t}function Ee(e,t,n,r,i,a){var o,s,c;if(t.__d!==void 0)o=t.__d,t.__d=void 0;else if(n==null||i!=a||i.parentNode==null)n:if(a==null||a.parentNode!==e)e.appendChild(i),o=null;else{for(s=a,c=0;(s=s.nextSibling)&&c<r.length;c+=2)if(s==i)break n;e.insertBefore(i,a),o=a}return o===void 0?i.nextSibling:o}function De(e,t,n,r,i){for(var a in n)a===`children`||a===`key`||a in t||ke(e,a,null,n[a],r);for(a in t)i&&typeof t[a]!=`function`||a===`children`||a===`key`||a===`value`||a===`checked`||n[a]===t[a]||ke(e,a,t[a],n[a],r)}function Oe(e,t,n){t[0]===`-`?e.setProperty(t,n):e[t]=n==null?``:typeof n!=`number`||_e.test(t)?n:n+`px`}function ke(e,t,n,r,i){var a;n:if(t===`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||Oe(e.style,t,``);if(n)for(t in n)r&&n[t]===r[t]||Oe(e.style,t,n[t])}else if(t[0]===`o`&&t[1]===`n`)a=t!==(t=t.replace(/Capture$/,``)),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r||e.addEventListener(t,a?je:Ae,a):e.removeEventListener(t,a?je:Ae,a);else if(t!==`dangerouslySetInnerHTML`){if(i)t=t.replace(/xlink[H:h]/,`h`).replace(/sName$/,`s`);else if(t!==`href`&&t!==`list`&&t!==`form`&&t!==`tabIndex`&&t!==`download`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n!=null&&(!1!==n||t[0]===`a`&&t[1]===`r`)?e.setAttribute(t,n):e.removeAttribute(t))}}function Ae(e){this.l[e.type+!1](L.event?L.event(e):e)}function je(e){this.l[e.type+!0](L.event?L.event(e):e)}function Me(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g,_,v,y,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(l=L.__b)&&l(t);try{n:if(typeof b==`function`){if(g=t.props,_=(l=b.contextType)&&r[l.__c],v=l?_?_.props.value:l.__:r,n.__c?h=(u=t.__c=n.__c).__=u.__E:(`prototype`in b&&b.prototype.render?t.__c=u=new b(g,v):(t.__c=u=new W(g,v),u.constructor=b,u.render=Le),_&&_.sub(u),u.props=g,u.state||={},u.context=v,u.__n=r,d=u.__d=!0,u.__h=[]),u.__s??=u.state,b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=B({},u.__s)),B(u.__s,b.getDerivedStateFromProps(g,u.__s))),f=u.props,p=u.state,d)b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(g,v),!u.__e&&u.shouldComponentUpdate!=null&&!1===u.shouldComponentUpdate(g,u.__s,v)||t.__v===n.__v){u.props=g,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(e){e&&(e.__=t)}),u.__h.length&&o.push(u);break n}u.componentWillUpdate!=null&&u.componentWillUpdate(g,u.__s,v),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,p,m)})}u.context=v,u.props=g,u.state=u.__s,(l=L.__r)&&l(t),u.__d=!1,u.__v=t,u.__P=e,l=u.render(u.props,u.state,u.context),u.state=u.__s,u.getChildContext!=null&&(r=B(B({},r),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(m=u.getSnapshotBeforeUpdate(f,p)),y=l!=null&&l.type===U&&l.key==null?l.props.children:l,Ce(e,Array.isArray(y)?y:[y],t,n,r,i,a,o,s,c),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),h&&(u.__E=u.__=null),u.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Pe(n.__e,t,n,r,i,a,o,c);(l=L.diffed)&&l(t)}catch(e){t.__v=null,(c||a!=null)&&(t.__e=s,t.__h=!!c,a[a.indexOf(s)]=null),L.__e(e,t,n)}}function Ne(e,t){L.__c&&L.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){L.__e(e,t.__v)}})}function Pe(e,t,n,r,i,a,o,s){var c,l,u,d=n.props,f=t.props,p=t.type,m=0;if(p===`svg`&&(i=!0),a!=null){for(;m<a.length;m++)if((c=a[m])&&`setAttribute`in c==!!p&&(p?c.localName===p:c.nodeType===3)){e=c,a[m]=null;break}}if(e==null){if(p===null)return document.createTextNode(f);e=i?document.createElementNS(`http://www.w3.org/2000/svg`,p):document.createElement(p,f.is&&f),a=null,s=!1}if(p===null)d===f||s&&e.data===f||(e.data=f);else{if(a&&=I.call(e.childNodes),l=(d=n.props||z).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,!s){if(a!=null)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(u||l)&&(u&&(l&&u.__html==l.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||``))}if(De(e,f,d,i,s),u)t.__k=[];else if(m=t.props.children,Ce(e,Array.isArray(m)?m:[m],t,n,r,i&&p!==`foreignObject`,a,o,a?a[0]:n.__k&&G(n,0),s),a!=null)for(m=a.length;m--;)a[m]!=null&&V(a[m]);s||(`value`in f&&(m=f.value)!==void 0&&(m!==d.value||m!==e.value||p===`progress`&&!m)&&ke(e,`value`,m,d.value,!1),`checked`in f&&(m=f.checked)!==void 0&&m!==e.checked&&ke(e,`checked`,m,d.checked,!1))}return e}function Fe(e,t,n){try{typeof e==`function`?e(t):e.current=t}catch(e){L.__e(e,n)}}function Ie(e,t,n){var r,i;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Fe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Ie(r[i],t,typeof e.type!=`function`);n||e.__e==null||V(e.__e),e.__e=e.__d=void 0}function Le(e,t,n){return this.constructor(e,n)}function Re(e,t,n){var r,i,a;L.__&&L.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],Me(t,e=(!r&&n||t).__k=ve(U,null,[e]),i||z,z,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?I.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r),Ne(a,e)}I=ge.slice,L={__e:function(e,t){for(var n,r,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(t){e=t}throw e}},pe=0,W.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=B({},this.state);typeof e==`function`&&(e=e(B({},n),this.props)),e&&B(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),xe(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),xe(this))},W.prototype.render=U,R=[],me=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Se.__r=0;var ze=0;function K(e,t,n,r,i){var a,o,s={};for(o in t)o==`ref`?a=t[o]:s[o]=t[o];var c={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ze,__source:r,__self:i};if(typeof e==`function`&&(a=e.defaultProps))for(o in a)s[o]===void 0&&(s[o]=a[o]);return L.vnode&&L.vnode(c),c}function Be(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function Ve(e){try{let t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var q={set:Be,get:Ve},He=new Map,Ue=[{v:15,emoji:`🫨`},{v:14,emoji:`🫠`},{v:13.1,emoji:`😶‍🌫️`},{v:13,emoji:`🥸`},{v:12.1,emoji:`🧑‍🦰`},{v:12,emoji:`🥱`},{v:11,emoji:`🥰`},{v:5,emoji:`🤩`},{v:4,emoji:`👱‍♀️`},{v:3,emoji:`🤣`},{v:2,emoji:`👋🏻`},{v:1,emoji:`🙃`}];function We(){for(let{v:e,emoji:t}of Ue)if(Ke(t))return e}function Ge(){return!Ke(`🇨🇦`)}function Ke(e){if(He.has(e))return He.get(e);let t=qe(e);return He.set(e,t),t}var qe=(()=>{let e=null;try{navigator.userAgent.includes(`jsdom`)||(e=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}))}catch{}return e?(e.font=`12px Arial, Sans-Serif`,e.textBaseline=`top`,e.canvas.width=40,e.canvas.height=25,t=>{e.clearRect(0,0,40,25),e.fillStyle=`#FF0000`,e.fillText(t,0,22),e.fillStyle=`#0000FF`,e.fillText(t,20,22);let n=e.getImageData(0,0,20,25).data,r=n.length,i=0;for(;i<r&&!n[i+3];i+=4);if(i>=r)return!1;let a=20+i/4%20,o=Math.floor(i/4/20),s=e.getImageData(a,o,1,1).data;return!(n[i]!==s[0]||n[i+2]!==s[2]||e.measureText(t).width>=20)}):()=>!1})(),Je={latestVersion:We,noCountryFlags:Ge},Ye=[`+1`,`grinning`,`kissing_heart`,`heart_eyes`,`laughing`,`stuck_out_tongue_winking_eye`,`sweat_smile`,`joy`,`scream`,`disappointed`,`unamused`,`weary`,`sob`,`sunglasses`,`heart`],J=null;function Xe(e){J||=q.get(`frequently`)||{};let t=e.id||e;t&&(J[t]||(J[t]=0),J[t]+=1,q.set(`last`,t),q.set(`frequently`,J))}function Ze({maxFrequentRows:e,perLine:t}){if(!e)return[];J||=q.get(`frequently`);let n=[];if(!J){J={};for(let e in Ye.slice(0,t)){let r=Ye[e];J[r]=t-e,n.push(r)}return n}let r=e*t,i=q.get(`last`);for(let e in J)n.push(e);if(n.sort((e,t)=>{let n=J[t],r=J[e];return n==r?e.localeCompare(t):n-r}),n.length>r){let e=n.slice(r);n=n.slice(0,r);for(let t of e)t!=i&&delete J[t];i&&n.indexOf(i)==-1&&(delete J[n[n.length-1]],n.splice(-1,1,i)),q.set(`frequently`,J)}return n}var Qe={add:Xe,get:Ze,DEFAULTS:Ye},$e={};$e=JSON.parse(`{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}`);var Y={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:`100%`},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:15,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14,15]},exceptEmojis:{value:[]},icons:{value:`auto`,choices:[`auto`,`outline`,`solid`]},locale:{value:`en`,choices:[`en`,`ar`,`be`,`cs`,`de`,`es`,`fa`,`fi`,`fr`,`hi`,`it`,`ja`,`ko`,`nl`,`pl`,`pt`,`ru`,`sa`,`tr`,`uk`,`vi`,`zh`]},maxFrequentRows:{value:4},navPosition:{value:`top`,choices:[`top`,`bottom`,`none`]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:`bottom`,choices:[`top`,`bottom`,`none`]},searchPosition:{value:`sticky`,choices:[`sticky`,`static`,`none`]},set:{value:`native`,choices:[`native`,`apple`,`facebook`,`google`,`twitter`]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:`preview`,choices:[`preview`,`search`,`none`]},theme:{value:`auto`,choices:[`auto`,`light`,`dark`]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}},X=null,Z=null,et={};async function tt(e){if(et[e])return et[e];let t=await(await fetch(e)).json();return et[e]=t,t}var nt=null,rt=null,it=!1;function at(e,{caller:t}={}){return nt||=new Promise(e=>{rt=e}),e?ot(e):t&&!it&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),nt}async function ot(e){it=!0;let{emojiVersion:t,set:n,locale:r}=e;if(t||=Y.emojiVersion.value,n||=Y.set.value,r||=Y.locale.value,Z)Z.categories=Z.categories.filter(e=>!e.name);else{Z=(typeof e.data==`function`?await e.data():e.data)||await tt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Z.emoticons={},Z.natives={},Z.categories.unshift({id:`frequent`,emojis:[]});for(let e in Z.aliases){let t=Z.aliases[e],n=Z.emojis[t];n&&(n.aliases||=[],n.aliases.push(e))}Z.originalCategories=Z.categories}if(X=(typeof e.i18n==`function`?await e.i18n():e.i18n)||(r==`en`?fe($e):await tt(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),e.custom)for(let t in e.custom){t=parseInt(t);let n=e.custom[t],r=e.custom[t-1];if(!(!n.emojis||!n.emojis.length)){n.id||=`custom_${t+1}`,n.name||=X.categories.custom,r&&!n.icon&&(n.target=r.target||r),Z.categories.push(n);for(let e of n.emojis)Z.emojis[e.id]=e}}e.categories&&(Z.categories=Z.originalCategories.filter(t=>e.categories.indexOf(t.id)!=-1).sort((t,n)=>e.categories.indexOf(t.id)-e.categories.indexOf(n.id)));let i=null,a=null;n==`native`&&(i=Je.latestVersion(),a=e.noCountryFlags||Je.noCountryFlags());let o=Z.categories.length,s=!1;for(;o--;){let t=Z.categories[o];if(t.id==`frequent`){let{maxFrequentRows:n,perLine:r}=e;n=n>=0?n:Y.maxFrequentRows.value,r||=Y.perLine.value,t.emojis=Qe.get({maxFrequentRows:n,perLine:r})}if(!t.emojis||!t.emojis.length){Z.categories.splice(o,1);continue}let{categoryIcons:n}=e;if(n){let e=n[t.id];e&&!t.icon&&(t.icon=e)}let r=t.emojis.length;for(;r--;){let n=t.emojis[r],o=n.id?n:Z.emojis[n],c=()=>{t.emojis.splice(r,1)};if(!o||e.exceptEmojis&&e.exceptEmojis.includes(o.id)){c();continue}if(i&&o.version>i){c();continue}if(a&&t.id==`flags`&&!mt.includes(o.id)){c();continue}if(!o.search){if(s=!0,o.search=`,`+[[o.id,!1],[o.name,!0],[o.keywords,!1],[o.emoticons,!1]].map(([e,t])=>{if(e)return(Array.isArray(e)?e:[e]).map(e=>(t?e.split(/[-|_|\s]+/):[e]).map(e=>e.toLowerCase())).flat()}).flat().filter(e=>e&&e.trim()).join(`,`),o.emoticons)for(let e of o.emoticons)Z.emoticons[e]||(Z.emoticons[e]=o.id);let e=0;for(let t of o.skins){if(!t)continue;e++;let{native:n}=t;n&&(Z.natives[n]=o.id,o.search+=`,${n}`);let r=e==1?``:`:skin-tone-${e}:`;t.shortcodes=`:${o.id}:${r}`}}}}s&&Q.reset(),rt()}function st(e,t,n){e||={};let r={};for(let i in t)r[i]=ct(i,e,t,n);return r}function ct(e,t,n,r){let i=n[e],a=r&&r.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return i?(a!=null&&i.value&&typeof i.value!=typeof a&&(a=typeof i.value==`boolean`?a!=`false`:i.value.constructor(a)),i.transform&&a&&(a=i.transform(a)),(a==null||i.choices&&i.choices.indexOf(a)==-1)&&(a=i.value),a):a}var lt=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/,ut=null;function dt(e){return e.id?e:Z.emojis[e]||Z.emojis[Z.aliases[e]]||Z.emojis[Z.natives[e]]}function ft(){ut=null}async function pt(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||=90,await at(null,{caller:n||`SearchIndex.search`});let r=e.toLowerCase().replace(/(\w)-/,`$1 `).split(/[\s|,]+/).filter((e,t,n)=>e.trim()&&n.indexOf(e)==t);if(!r.length)return;let i=ut||=Object.values(Z.emojis),a,o;for(let e of r){if(!i.length)break;a=[],o={};for(let t of i){if(!t.search)continue;let n=t.search.indexOf(`,${e}`);n!=-1&&(a.push(t),o[t.id]||(o[t.id]=0),o[t.id]+=t.id==e?0:n+1)}i=a}return a.length<2?a:(a.sort((e,t)=>{let n=o[e.id],r=o[t.id];return n==r?e.id.localeCompare(t.id):n-r}),a.length>t&&(a=a.slice(0,t)),a)}var Q={search:pt,get:dt,reset:ft,SHORTCODES_REGEX:lt},mt=[`checkered_flag`,`crossed_flags`,`pirate_flag`,`rainbow-flag`,`transgender_flag`,`triangular_flag_on_post`,`waving_black_flag`,`waving_white_flag`];function ht(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((e,n)=>e==t[n])}async function gt(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function _t(e,{skinIndex:t=0}={}){let n=e.skins[t]||(t=0,e.skins[t]),r={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(r.skin=t+1),n.src&&(r.src=n.src),e.aliases&&e.aliases.length&&(r.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(r.emoticons=e.emoticons),r}var vt={categories:{activity:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:K(`path`,{d:`M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113`})}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,children:K(`path`,{d:`M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z`})})},custom:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 448 512`,children:K(`path`,{d:`M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z`})}),flags:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:K(`path`,{d:`M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z`})}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,children:K(`path`,{d:`M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z`})})},foods:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:K(`path`,{d:`M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9`})}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,children:K(`path`,{d:`M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z`})})},frequent:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:[K(`path`,{d:`M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z`}),K(`path`,{d:`M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10`})]}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,children:K(`path`,{d:`M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z`})})},nature:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:[K(`path`,{d:`M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8`}),K(`path`,{d:`M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235`})]}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 576 512`,children:K(`path`,{d:`M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z`})})},objects:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:[K(`path`,{d:`M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z`}),K(`path`,{d:`M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789`})]}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 384 512`,children:K(`path`,{d:`M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z`})})},people:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:[K(`path`,{d:`M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10`}),K(`path`,{d:`M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0`})]}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,children:K(`path`,{d:`M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z`})})},places:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:[K(`path`,{d:`M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5`}),K(`path`,{d:`M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z`})]}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,children:K(`path`,{d:`M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z`})})},symbols:{outline:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,children:K(`path`,{d:`M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76`})}),solid:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`,children:K(`path`,{d:`M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z`})})}},search:{loupe:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,children:K(`path`,{d:`M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z`})}),delete:K(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,children:K(`path`,{d:`M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z`})})}};function yt(e){let{id:t,skin:n,emoji:r}=e;if(e.shortcodes){let r=e.shortcodes.match(Q.SHORTCODES_REGEX);r&&(t=r[1],r[2]&&(n=r[2]))}if(r||=Q.get(t||e.native),!r)return e.fallback;let i=r.skins[n-1]||r.skins[0],a=i.src||(e.set!=`native`&&!e.spritesheet?typeof e.getImageURL==`function`?e.getImageURL(e.set,i.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/64/${i.unified}.png`:void 0),o=typeof e.getSpritesheetURL==`function`?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/sheets-256/64.png`;return K(`span`,{class:`emoji-mart-emoji`,"data-emoji-set":e.set,children:a?K(`img`,{style:{maxWidth:e.size||`1em`,maxHeight:e.size||`1em`,display:`inline-block`},alt:i.native||i.shortcodes,src:a}):e.set==`native`?K(`span`,{style:{fontSize:e.size,fontFamily:`"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"`},children:i.native}):K(`span`,{style:{display:`block`,width:e.size,height:e.size,backgroundImage:`url(${o})`,backgroundSize:`${100*Z.sheet.cols}% ${100*Z.sheet.rows}%`,backgroundPosition:`${100/(Z.sheet.cols-1)*i.x}% ${100/(Z.sheet.rows-1)*i.y}%`}})})}var bt=typeof window<`u`&&window.HTMLElement?window.HTMLElement:Object,xt=class extends bt{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let t in e)this.attributeChangedCallback(t,null,e[t])}attributeChangedCallback(e,t,n){if(!this.component)return;let r=ct(e,{[e]:n},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:r}):(this.component.props[e]=r,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let t=null,n=e.parent||(t=e.ref&&e.ref.current);t&&(t.innerHTML=``),n&&n.appendChild(this)}}},St=class extends xt{setShadow(){this.attachShadow({mode:`open`})}injectStyles(e){if(!e)return;let t=document.createElement(`style`);t.textContent=e,this.shadowRoot.insertBefore(t,this.shadowRoot.firstChild)}constructor(e,{styles:t}={}){super(e),this.setShadow(),this.injectStyles(t)}},Ct={fallback:``,id:``,native:``,shortcodes:``,size:{value:``,transform:e=>/\D/.test(e)?e:`${e}px`},set:Y.set,skin:Y.skin},wt=class extends xt{async connectedCallback(){let e=st(this.props,Ct,this);e.element=this,e.ref=e=>{this.component=e},await at(),!this.disconnected&&Re(K(yt,{...e}),this)}constructor(e){super(e)}};F(wt,`Props`,Ct),typeof customElements<`u`&&!customElements.get(`em-emoji`)&&customElements.define(`em-emoji`,wt);var $,Tt,Et=[],Dt=L.__b,Ot=L.__r,kt=L.diffed,At=L.__c,jt=L.unmount;function Mt(){var e;for(Et.sort(function(e,t){return e.__v.__b-t.__v.__b});e=Et.pop();)if(e.__P)try{e.__H.__h.forEach(Pt),e.__H.__h.forEach(Ft),e.__H.__h=[]}catch(t){e.__H.__h=[],L.__e(t,e.__v)}}L.__b=function(e){$=null,Dt&&Dt(e)},L.__r=function(e){Ot&&Ot(e);var t=($=e.__c).__H;t&&(t.__h.forEach(Pt),t.__h.forEach(Ft),t.__h=[])},L.diffed=function(e){kt&&kt(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Et.push(t)!==1&&Tt===L.requestAnimationFrame||((Tt=L.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),Nt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Nt&&(t=requestAnimationFrame(n))})(Mt)),$=null},L.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Pt),e.__h=e.__h.filter(function(e){return!e.__||Ft(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],L.__e(n,e.__v)}}),At&&At(e,t)},L.unmount=function(e){jt&&jt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Pt(e)}catch(e){t=e}}),t&&L.__e(t,n.__v))};var Nt=typeof requestAnimationFrame==`function`;function Pt(e){var t=$,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),$=t}function Ft(e){var t=$;e.__c=e.__(),$=t}function It(e,t){for(var n in t)e[n]=t[n];return e}function Lt(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function Rt(e){this.props=e}(Rt.prototype=new W).isPureReactComponent=!0,Rt.prototype.shouldComponentUpdate=function(e,t){return Lt(this.props,e)||Lt(this.state,t)};var zt=L.__b;L.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),zt&&zt(e)},typeof Symbol<`u`&&Symbol.for;var Bt=L.__e;L.__e=function(e,t,n){if(e.then){for(var r,i=t;i=i.__;)if((r=i.__c)&&r.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}Bt(e,t,n)};var Vt=L.unmount;function Ht(){this.__u=0,this.t=null,this.__b=null}function Ut(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Wt(){this.u=null,this.o=null}L.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),Vt&&Vt(e)},(Ht.prototype=new W).__c=function(e,t){var n=t.__c,r=this;r.t??=[],r.t.push(n);var i=Ut(r.__v),a=!1,o=function(){a||(a=!0,n.__R=null,i?i(s):s())};n.__R=o;var s=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return e(t,n,r)}),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(o,o)},Ht.prototype.componentWillUnmount=function(){this.t=[]},Ht.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),t.__c.__H=null),(t=It({},t)).__c!=null&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return e(t,n,r)})),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&ve(U,null,e.fallback);return i&&(i.__h=null),[ve(U,null,t.__e?null:e.children),i]};var Gt=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Wt.prototype=new W).__e=function(e){var t=this,n=Ut(t.__v),r=t.o.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Gt(t,e,r)):i()};n?n(a):a()}},Wt.prototype.render=function(e){this.u=null,this.o=new Map;var t=Te(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Wt.prototype.componentDidUpdate=Wt.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Gt(e,n,t)})};var Kt=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,qt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Jt=typeof document<`u`,Yt=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/i:/fil|che|ra/i).test(e)};W.prototype.isReactComponent={},[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(W.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Xt=L.event;function Zt(){}function Qt(){return this.cancelBubble}function $t(){return this.defaultPrevented}L.event=function(e){return Xt&&(e=Xt(e)),e.persist=Zt,e.isPropagationStopped=Qt,e.isDefaultPrevented=$t,e.nativeEvent=e};var en={configurable:!0,get:function(){return this.class}},tn=L.vnode;L.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t==`string`){var i=t.indexOf(`-`)===-1;for(var a in r={},n){var o=n[a];Jt&&a===`children`&&t===`noscript`||a===`value`&&`defaultValue`in n&&o==null||(a===`defaultValue`&&`value`in n&&n.value==null?a=`value`:a===`download`&&!0===o?o=``:/ondoubleclick/i.test(a)?a=`ondblclick`:/^onchange(textarea|input)/i.test(a+t)&&!Yt(n.type)?a=`oninput`:/^onfocus$/i.test(a)?a=`onfocusin`:/^onblur$/i.test(a)?a=`onfocusout`:/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():i&&qt.test(a)?a=a.replace(/[A-Z0-9]/,`-$&`).toLowerCase():o===null&&(o=void 0),r[a]=o)}t==`select`&&r.multiple&&Array.isArray(r.value)&&(r.value=Te(n.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),t==`select`&&r.defaultValue!=null&&(r.value=Te(n.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value})),e.props=r,n.class!=n.className&&(en.enumerable=`className`in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,`className`,en))}e.$$typeof=Kt,tn&&tn(e)};var nn=L.__r;L.__r=function(e){nn&&nn(e),e.__c};var rn={light:`outline`,dark:`solid`},an=class extends Rt{renderIcon(e){let{icon:t}=e;if(t){if(t.svg)return K(`span`,{class:`flex`,dangerouslySetInnerHTML:{__html:t.svg}});if(t.src)return K(`img`,{src:t.src})}let n=vt.categories[e.id]||vt.categories.custom;return n[this.props.icons==`auto`?rn[this.props.theme]:this.props.icons]||n}render(){let e=null;return K(`nav`,{id:`nav`,class:`padding`,"data-position":this.props.position,dir:this.props.dir,children:K(`div`,{class:`flex relative`,children:[this.categories.map((t,n)=>{let r=t.name||X.categories[t.id],i=!this.props.unfocused&&t.id==this.state.categoryId;return i&&(e=n),K(`button`,{"aria-label":r,"aria-selected":i||void 0,title:r,type:`button`,class:`flex flex-grow flex-center`,onMouseDown:e=>e.preventDefault(),onClick:()=>{this.props.onClick({category:t,i:n})},children:this.renderIcon(t)})}),K(`div`,{class:`bar`,style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir===`rtl`?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=Z.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}},on=class extends Rt{shouldComponentUpdate(e){for(let t in e)if(t!=`children`&&e[t]!=this.props[t])return!0;return!1}render(){return this.props.children}},sn={rowsPerRender:10},cn=class extends W{getInitialState(e=this.props){return{skin:q.get(`skin`)||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=X.rtl?`rtl`:`ltr`,this.refs={menu:H(),navigation:H(),scroll:H(),search:H(),searchInput:H(),skinToneButton:H(),skinToneRadio:H()},this.initGrid(),this.props.stickySearch==0&&this.props.searchPosition==`sticky`&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition=`static`)}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){let{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||={};for(let t in e)this.nextState[t]=e[t];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let e=!1;for(let t in this.nextState)this.props[t]=this.nextState[t],(t===`custom`||t===`categories`)&&(e=!0);delete this.nextState;let t=this.getInitialState();if(e)return this.reset(t);this.setState(t)})}componentWillUnmount(){this.unregister()}async reset(e={}){await at(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener(`click`,this.handleClickOutside),this.observe()}unregister(){document.removeEventListener(`click`,this.handleClickOutside),this.darkMedia?.removeEventListener(`change`,this.darkMediaCallback),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(let t of this.observers)e.includes(t)||t.disconnect();this.observers=[].concat(e)}initGrid(){let{categories:e}=Z;this.refs.categories=new Map;let t=Z.categories.map(e=>e.id).join(`,`);this.navKey&&this.navKey!=t&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=t,this.grid=[],this.grid.setsize=0;let n=(e,t)=>{let n=[];n.__categoryId=t.id,n.__index=e.length,this.grid.push(n);let r=this.grid.length-1,i=r%sn.rowsPerRender?{}:H();return i.index=r,i.posinset=this.grid.setsize+1,e.push(i),n};for(let t of e){let e=[],r=n(e,t);for(let i of t.emojis)r.length==this.getPerLine()&&(r=n(e,t)),this.grid.setsize+=1,r.push(i);this.refs.categories.set(t.id,{root:H(),rows:e})}}initTheme(e){if(e!=`auto`)return e;if(!this.darkMedia){if(this.darkMedia=matchMedia(`(prefers-color-scheme: dark)`),this.darkMedia.media.match(/^not/))return`light`;this.darkMedia.addEventListener(`change`,this.darkMediaCallback)}return this.darkMedia.matches?`dark`:`light`}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;let{element:t,emojiButtonSize:n}=e,r=()=>{let{width:e}=t.getBoundingClientRect();return Math.floor(e/n)},i=new ResizeObserver(()=>{this.unobserve({except:i}),this.setState({perLine:r()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return i.observe(t),this.observers.push(i),r()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,t]){let n=this.state.searchResults||this.grid,r=n[e]&&n[e][t];if(r)return Q.get(r)}observeCategories(){let e=this.refs.navigation.current;if(!e)return;let t=new Map,n=t=>{t!=e.state.categoryId&&e.setState({categoryId:t})},r={root:this.refs.scroll.current,threshold:[0,1]},i=new IntersectionObserver(e=>{for(let n of e){let e=n.target.dataset.id;t.set(e,n.intersectionRatio)}let r=[...t];for(let[e,t]of r)if(t){n(e);break}},r);for(let{root:e}of this.refs.categories.values())i.observe(e.current);this.observers.push(i)}observeRows(){let e={...this.state.visibleRows},t=new IntersectionObserver(t=>{for(let n of t){let t=parseInt(n.target.dataset.index);n.isIntersecting?e[t]=!0:delete e[t]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(sn.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*sn.rowsPerRender}px`});for(let{rows:e}of this.refs.categories.values())for(let n of e)n.current&&t.observe(n.current);this.observers.push(t)}preventDefault(e){e.preventDefault()}unfocusSearch(){let e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:t,left:n,right:r,up:i,down:a}){let o=this.state.searchResults||this.grid;if(!o.length)return;let[s,c]=this.state.pos,l=(()=>{if(s==0&&c==0&&!e.repeat&&(n||i))return null;if(s==-1)return!e.repeat&&(r||a)&&t.selectionStart==t.value.length?[0,0]:null;if(n||r){let e=o[s],t=n?-1:1;if(c+=t,!e[c]){if(s+=t,e=o[s],!e)return s=n?0:o.length-1,c=n?0:o[s].length-1,[s,c];c=n?e.length-1:0}return[s,c]}if(i||a){s+=i?-1:1;let e=o[s];return e?(e[c]||(c=e.length-1),[s,c]):(s=i?0:o.length-1,c=i?0:o[s].length-1,[s,c])}})();if(l)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:l,keyboard:!0},()=>{this.scrollTo({row:l[0]})})}scrollTo({categoryId:e,row:t}){let n=this.state.searchResults||this.grid;if(!n.length)return;let r=this.refs.scroll.current,i=r.getBoundingClientRect(),a=0;if(t>=0&&(e=n[t].__categoryId),e&&(a=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(i.top-r.scrollTop)+1),t>=0)if(!t)a=0;else{let e=n[t].__index,o=a+e*this.props.emojiButtonSize,s=o+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(o<r.scrollTop)a=o;else if(s>r.scrollTop+i.height)a=s-i.height;else return}this.ignoreMouse(),r.scrollTop=a}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:t,pos:n}){if(this.props.onEmojiSelect&&(!t&&n&&(t=this.getEmojiByPos(n)),t)){let n=_t(t,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Qe.add(n,this.props),this.props.onEmojiSelect(n,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener(`click`,this.handleBaseClick),this.base.removeEventListener(`keydown`,this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),q.set(`skin`,e)}renderNav(){return K(an,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){let e=this.getEmojiByPos(this.state.pos),t=this.state.searchResults&&!this.state.searchResults.length;return K(`div`,{id:`preview`,class:`flex flex-middle`,dir:this.dir,"data-position":this.props.previewPosition,children:[K(`div`,{class:`flex flex-middle flex-grow`,children:[K(`div`,{class:`flex flex-auto flex-middle flex-center`,style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:K(yt,{emoji:e,id:t?this.props.noResultsEmoji||`cry`:this.props.previewEmoji||(this.props.previewPosition==`top`?`point_down`:`point_up`),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),K(`div`,{class:`margin-${this.dir[0]}`,children:e||t?K(`div`,{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[K(`div`,{class:`preview-title ellipsis`,children:e?e.name:X.search_no_results_1}),K(`div`,{class:`preview-subtitle ellipsis color-c`,children:e?e.skins[0].shortcodes:X.search_no_results_2})]}):K(`div`,{class:`preview-placeholder color-c`,children:X.pick})})]}),!e&&this.props.skinTonePosition==`preview`&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:t,posinset:n,grid:r}){let i=this.props.emojiButtonSize,a=this.state.tempSkin||this.state.skin,o=(e.skins[a-1]||e.skins[0]).native,s=ht(this.state.pos,t),c=t.concat(e.id).join(``);return K(on,{selected:s,skin:a,size:i,children:K(`button`,{"aria-label":o,"aria-selected":s||void 0,"aria-posinset":n,"aria-setsize":r.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition==`none`?e.name:void 0,type:`button`,class:`flex flex-center flex-middle`,tabindex:`-1`,onClick:t=>this.handleEmojiClick({e:t,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(t),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[K(`div`,{"aria-hidden":`true`,class:`background`,style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(n-1)%this.props.emojiButtonColors.length]:void 0}}),K(yt,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:a,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},c)}renderSearch(){let e=this.props.previewPosition==`none`||this.props.skinTonePosition==`search`;return K(`div`,{children:[K(`div`,{class:`spacer`}),K(`div`,{class:`flex flex-middle`,children:[K(`div`,{class:`search relative flex-grow`,children:[K(`input`,{type:`search`,ref:this.refs.searchInput,placeholder:X.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:`off`}),K(`span`,{class:`icon loupe flex`,children:vt.search.loupe}),this.state.searchResults&&K(`button`,{title:`Clear`,"aria-label":`Clear`,type:`button`,class:`icon delete flex`,onClick:this.clearSearch,onMouseDown:this.preventDefault,children:vt.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){let{searchResults:e}=this.state;return e?K(`div`,{class:`category`,ref:this.refs.search,children:[K(`div`,{class:`sticky padding-small align-${this.dir[0]}`,children:X.categories.search}),K(`div`,{children:e.length?e.map((t,n)=>K(`div`,{class:`flex`,children:t.map((t,r)=>this.renderEmojiButton(t,{pos:[n,r],posinset:n*this.props.perLine+r+1,grid:e}))})):K(`div`,{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&K(`a`,{onClick:this.props.onAddCustomEmoji,children:X.add_custom})})})]}):null}renderCategories(){let{categories:e}=Z,t=!!this.state.searchResults,n=this.getPerLine();return K(`div`,{style:{visibility:t?`hidden`:void 0,display:t?`none`:void 0,height:`100%`},children:e.map(e=>{let{root:t,rows:r}=this.refs.categories.get(e.id);return K(`div`,{"data-id":e.target?e.target.id:e.id,class:`category`,ref:t,children:[K(`div`,{class:`sticky padding-small align-${this.dir[0]}`,children:e.name||X.categories[e.id]}),K(`div`,{class:`relative`,style:{height:r.length*this.props.emojiButtonSize},children:r.map((t,r)=>{let i=t.index-t.index%sn.rowsPerRender,a=this.state.visibleRows[i],o=`current`in t?t:void 0;if(!a&&!o)return null;let s=r*n,c=s+n,l=e.emojis.slice(s,c);return l.length<n&&l.push(...Array(n-l.length)),K(`div`,{"data-index":t.index,ref:o,class:`flex row`,style:{top:r*this.props.emojiButtonSize},children:a&&l.map((e,n)=>{if(!e)return K(`div`,{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});let r=Q.get(e);return this.renderEmojiButton(r,{pos:[t.index,n],posinset:t.posinset+n,grid:this.grid})})},t.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition==`none`?null:K(`div`,{class:`flex flex-auto flex-center flex-middle`,style:{position:`relative`,width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:K(`button`,{type:`button`,ref:this.refs.skinToneButton,class:`skin-tone-button flex flex-auto flex-center flex-middle`,"aria-selected":this.state.showSkins?``:void 0,"aria-label":X.skins.choose,title:X.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:K(`span`,{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){let e=this.getEmojiByPos(this.state.pos);return K(`div`,{"aria-live":`polite`,class:`sr-only`,children:e?e.name:``})}renderSkins(){let e=this.refs.skinToneButton.current.getBoundingClientRect(),t=this.base.getBoundingClientRect(),n={};return this.dir==`ltr`?n.right=t.right-e.right-3:n.left=e.left-t.left-3,this.props.previewPosition==`bottom`&&this.props.skinTonePosition==`preview`?n.bottom=t.bottom-e.top+6:(n.top=e.bottom-t.top+3,n.bottom=`auto`),K(`div`,{ref:this.refs.menu,role:`radiogroup`,dir:this.dir,"aria-label":X.skins.choose,class:`menu hidden`,"data-position":n.top?`top`:`bottom`,style:n,children:[...[,,,,,,].keys()].map(e=>{let t=e+1,n=this.state.skin==t;return K(`div`,{children:[K(`input`,{type:`radio`,name:`skin-tone`,value:t,"aria-label":X.skins[t],ref:n?this.refs.skinToneRadio:null,defaultChecked:n,onChange:()=>this.handleSkinMouseOver(t),onKeyDown:e=>{(e.code==`Enter`||e.code==`Space`||e.code==`Tab`)&&(e.preventDefault(),this.handleSkinClick(t))}}),K(`button`,{"aria-hidden":`true`,tabindex:`-1`,onClick:()=>this.handleSkinClick(t),onMouseEnter:()=>this.handleSkinMouseOver(t),onMouseLeave:()=>this.handleSkinMouseOver(),class:`option flex flex-grow flex-middle`,children:[K(`span`,{class:`skin-tone skin-tone-${t}`}),K(`span`,{class:`margin-small-lr`,children:X.skins[t]})]})]})})})}render(){let e=this.props.perLine*this.props.emojiButtonSize;return K(`section`,{id:`root`,class:`flex flex-column`,dir:this.dir,style:{width:this.props.dynamicWidth?`100%`:`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?``:void 0,children:[this.props.previewPosition==`top`&&this.renderPreview(),this.props.navPosition==`top`&&this.renderNav(),this.props.searchPosition==`sticky`&&K(`div`,{class:`padding-lr`,children:this.renderSearch()}),K(`div`,{ref:this.refs.scroll,class:`scroll flex-grow padding-lr`,children:K(`div`,{style:{width:this.props.dynamicWidth?`100%`:e,height:`100%`},children:[this.props.searchPosition==`static`&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition==`bottom`&&this.renderNav(),this.props.previewPosition==`bottom`&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),F(this,`darkMediaCallback`,()=>{this.props.theme==`auto`&&this.setState({theme:this.darkMedia.matches?`dark`:`light`})}),F(this,`handleClickOutside`,e=>{let{element:t}=this.props;e.target!=t&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(e))}),F(this,`handleBaseClick`,e=>{this.state.showSkins&&(e.target.closest(`.menu`)||(e.preventDefault(),e.stopImmediatePropagation(),this.closeSkins()))}),F(this,`handleBaseKeydown`,e=>{this.state.showSkins&&e.key==`Escape`&&(e.preventDefault(),e.stopImmediatePropagation(),this.closeSkins())}),F(this,`handleSearchClick`,()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),F(this,`handleSearchInput`,async()=>{let e=this.refs.searchInput.current;if(!e)return;let{value:t}=e,n=await Q.search(t),r=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!n)return this.setState({searchResults:n,pos:[-1,-1]},r);let i=e.selectionStart==e.value.length?[0,0]:[-1,-1],a=[];a.setsize=n.length;let o=null;for(let e of n)(!a.length||o.length==this.getPerLine())&&(o=[],o.__categoryId=`search`,o.__index=a.length,a.push(o)),o.push(e);this.ignoreMouse(),this.setState({searchResults:a,pos:i},r)}),F(this,`handleSearchKeyDown`,e=>{let t=e.currentTarget;switch(e.stopImmediatePropagation(),e.key){case`ArrowLeft`:this.navigate({e,input:t,left:!0});break;case`ArrowRight`:this.navigate({e,input:t,right:!0});break;case`ArrowUp`:this.navigate({e,input:t,up:!0});break;case`ArrowDown`:this.navigate({e,input:t,down:!0});break;case`Enter`:e.preventDefault(),this.handleEmojiClick({e,pos:this.state.pos});break;case`Escape`:e.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break;default:break}}),F(this,`clearSearch`,()=>{let e=this.refs.searchInput.current;e&&(e.value=``,e.focus(),this.handleSearchInput())}),F(this,`handleCategoryClick`,({category:e,i:t})=>{this.scrollTo(t==0?{row:-1}:{categoryId:e.id})}),F(this,`openSkins`,e=>{let{currentTarget:t}=e,n=t.getBoundingClientRect();this.setState({showSkins:n},async()=>{await gt(2);let e=this.refs.menu.current;e&&(e.classList.remove(`hidden`),this.refs.skinToneRadio.current.focus(),this.base.addEventListener(`click`,this.handleBaseClick,!0),this.base.addEventListener(`keydown`,this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}},ln=class extends St{async connectedCallback(){let e=st(this.props,Y,this);e.element=this,e.ref=e=>{this.component=e},await at(e),!this.disconnected&&Re(K(cn,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:fe(un)})}};F(ln,`Props`,Y),typeof customElements<`u`&&!customElements.get(`em-emoji-picker`)&&customElements.define(`em-emoji-picker`,ln);var un={};un=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;var dn=_(`<div class="absolute z-20">`),fn=e=>{let t=s(e),[n,r]=o(),[i,u]=o(),[d,g]=o({}),[_,y]=o(!1),b=()=>{let{popup:e}=t();return typeof e==`function`?e():e},S=()=>y(!0),C=()=>y(!1),w=()=>y(e=>!e),T=e=>{let t=e.target;t!=null&&!i()?.contains(t)&&C()},E=()=>{document.addEventListener(`mousedown`,T),document.addEventListener(`touchstart`,T)},D=()=>{document.removeEventListener(`mousedown`,T),document.removeEventListener(`touchstart`,T)},O=()=>{let e=n(),r=i();if(e==null||r==null)return;let a=e.getBoundingClientRect(),o=r.getBoundingClientRect(),{top:s,left:c}=a,l=t().position?.x;typeof l==`number`?c+=l:l===`left`?c-=o.width:l===`right`?c+=a.width:c+=(a.width-o.width)/2;let u=t().position?.y;typeof u==`number`?s+=u:u===`top`?s-=o.height:s+=a.height,s=Math.max(Math.min(s,window.innerHeight-o.height),0),c=Math.max(Math.min(c,window.innerWidth-o.width),0),g({left:`${c}px`,top:`${s}px`})};return a(()=>{_()?(E(),O()):D()}),c(()=>D()),{targetRef:r,open:S,close:C,toggle:w,popup:()=>x(l,{get when(){return _()},get children(){return x(h,{get children(){let e=dn();return m(u,e),v(e,b),p(t=>f(e,d(),t)),e}})}}),isOpen:_}},pn=e=>{let{config:t}=k(),n=s(e),r=()=>new ln({data:async()=>(await fetch(`https://cdn.jsdelivr.net/npm/@emoji-mart/data`)).json(),custom:[{id:`custom`,name:`Custom Emojis`,emojis:Object.entries(t().customEmojis).map(([e,{url:t}])=>({id:e,name:e,keywords:[e],skins:[{src:t}]}))}],autoFocus:!0,theme:`light`,onEmojiSelect:e=>{console.log(e),n().onEmojiSelect?.(e),i?.close()}}),i=fn(()=>({position:{y:`bottom`},...n(),popup:()=>r()}));return i},mn=_(`<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0zM12 15.75h.007v.008H12z">`),hn=((e={})=>(()=>{let t=mn();return d(t,e,!0,!0),t})()),gn=_(`<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75m-.375 0h.008v.015h-.008zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75m-.375 0h.008v.015h-.008z">`),_n=((e={})=>(()=>{let t=gn();return d(t,e,!0,!0),t})()),vn=_(`<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5m10.5-11.25h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0">`),yn=((e={})=>(()=>{let t=vn();return d(t,e,!0,!0),t})()),bn=_(`<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.5 60.5 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.5 60.5 0 0 0 3.478 2.404">`),xn=((e={})=>(()=>{let t=bn();return d(t,e,!0,!0),t})()),Sn=n(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=`~`;function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1));function a(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,n,i,o){if(typeof n!=`function`)throw TypeError(`The listener must be a function`);var s=new a(n,i||e,o),c=r?r+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function s(e,t){--e._eventsCount===0?e._events=new i:delete e._events[t]}function c(){this._events=new i,this._eventsCount=0}c.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)n.call(t,i)&&e.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},c.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,a=n.length,o=Array(a);i<a;i++)o[i]=n[i].fn;return o},c.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},c.prototype.emit=function(e,t,n,i,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var c=this._events[s],l=arguments.length,u,d;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,a),!0;case 6:return c.fn.call(c.context,t,n,i,a,o),!0}for(d=1,u=Array(l-1);d<l;d++)u[d-1]=arguments[d];c.fn.apply(c.context,u)}else{var f=c.length,p;for(d=0;d<f;d++)switch(c[d].once&&this.removeListener(e,c[d].fn,void 0,!0),l){case 1:c[d].fn.call(c[d].context);break;case 2:c[d].fn.call(c[d].context,t);break;case 3:c[d].fn.call(c[d].context,t,n);break;case 4:c[d].fn.call(c[d].context,t,n,i);break;default:if(!u)for(p=1,u=Array(l-1);p<l;p++)u[p-1]=arguments[p];c[d].fn.apply(c[d].context,u)}}return!0},c.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,n,i){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return s(this,a),this;var o=this._events[a];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&s(this,a);else{for(var c=0,l=[],u=o.length;c<u;c++)(o[c].fn!==t||i&&!o[c].once||n&&o[c].context!==n)&&l.push(o[c]);l.length?this._events[a]=l.length===1?l[0]:l:s(this,a)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&s(this,t)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,t!==void 0&&(t.exports=c)})),Cn=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.SearchResult=void 0;var t=/\$&/g,n=/\$(\d)/g;e.SearchResult=class{constructor(e,t,n){this.data=e,this.term=t,this.strategy=n}getReplacementData(e){let r=this.strategy.replace(this.data);if(r==null)return null;let i=``;Array.isArray(r)&&(i=r[1],r=r[0]);let a=this.strategy.match(e);if(a==null||a.index==null)return null;let o=r.replace(t,a[0]).replace(n,(e,t)=>a[parseInt(t)]);return{start:a.index,end:a.index+a[0].length,beforeCursor:o,afterCursor:i}}replace(e,t){let n=this.getReplacementData(e);if(n!==null)return t=n.afterCursor+t,[[e.slice(0,n.start),n.beforeCursor,e.slice(n.end)].join(``),t]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}})),wn=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Strategy=e.DEFAULT_INDEX=void 0;var t=Cn();e.DEFAULT_INDEX=1,e.Strategy=class{constructor(e){this.props=e,this.cache={}}destroy(){return this.cache={},this}replace(e){return this.props.replace(e)}execute(n,r){let i=this.matchWithContext(n);if(!i)return!1;let a=i[this.props.index??e.DEFAULT_INDEX];return this.search(a,e=>{r(e.map(e=>new t.SearchResult(e,a,this)))},i),!0}renderTemplate(e,t){if(this.props.template)return this.props.template(e,t);if(typeof e==`string`)return e;throw Error(`Unexpected render data type: ${typeof e}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(e){return typeof this.props.match==`function`?this.props.match(e):e.match(this.props.match)}search(e,t,n){this.props.cache?this.searchWithCach(e,t,n):this.props.search(e,t,n)}matchWithContext(e){let t=this.context(e);return t===!1?null:this.match(t===!0?e:t)}context(e){return this.props.context?this.props.context(e):!0}searchWithCach(e,t,n){this.cache[e]==null?this.props.search(e,n=>{this.cache[e]=n,t(n)},n):t(this.cache[e])}}})),Tn=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Completer=void 0;var t=Sn(),n=wn();e.Completer=class extends t.EventEmitter{constructor(e){super(),this.handleQueryResult=e=>{this.emit(`hit`,{searchResults:e})},this.strategies=e.map(e=>new n.Strategy(e))}destroy(){return this.strategies.forEach(e=>e.destroy()),this}run(e){for(let t of this.strategies)if(t.execute(e,this.handleQueryResult))return;this.handleQueryResult([])}}})),En=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.createCustomEvent=void 0;var t=typeof window<`u`&&!!window.CustomEvent;e.createCustomEvent=(e,n)=>{if(t)return new CustomEvent(e,n);let r=document.createEvent(`CustomEvent`);return r.initCustomEvent(e,!1,n?.cancelable||!1,n?.detail||void 0),r}})),Dn=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Dropdown=e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=e.DEFAULT_DROPDOWN_CLASS_NAME=e.DEFAULT_DROPDOWN_PLACEMENT=e.DEFAULT_DROPDOWN_MAX_COUNT=void 0;var t=Sn(),n=En();e.DEFAULT_DROPDOWN_MAX_COUNT=10,e.DEFAULT_DROPDOWN_PLACEMENT=`auto`,e.DEFAULT_DROPDOWN_CLASS_NAME=`dropdown-menu textcomplete-dropdown`,e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=`textcomplete-item`,e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`,e.Dropdown=class i extends t.EventEmitter{static create(t){let n=document.createElement(`ul`);return n.className=t.className||e.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(n.style,{display:`none`,position:`absolute`,zIndex:`1000`},t.style),(t.parent||document.body)?.appendChild(n),new i(n,t)}constructor(e,t){super(),this.el=e,this.option=t,this.shown=!1,this.items=[],this.activeIndex=null}render(t,i){let a=(0,n.createCustomEvent)(`render`,{cancelable:!0});return this.emit(`render`,a),a.defaultPrevented?this:(this.clear(),t.length===0?this.hide():(this.items=t.slice(0,this.option.maxCount||e.DEFAULT_DROPDOWN_MAX_COUNT).map((e,t)=>new r(this,t,e,this.option?.item||{})),this.setStrategyId(t[0]).renderEdge(t,`header`).renderItems().renderEdge(t,`footer`).show().setOffset(i).activate(0),this.emit(`rendered`,(0,n.createCustomEvent)(`rendered`)),this))}destroy(){var e;return this.clear(),(e=this.el.parentNode)==null||e.removeChild(this.el),this}select(e){let t={searchResult:e.searchResult},r=(0,n.createCustomEvent)(`select`,{cancelable:!0,detail:t});return this.emit(`select`,r),r.defaultPrevented?this:(this.hide(),this.emit(`selected`,(0,n.createCustomEvent)(`selected`,{detail:t})),this)}show(){if(!this.shown){let e=(0,n.createCustomEvent)(`show`,{cancelable:!0});if(this.emit(`show`,e),e.defaultPrevented)return this;this.el.style.display=`block`,this.shown=!0,this.emit(`shown`,(0,n.createCustomEvent)(`shown`))}return this}hide(){if(this.shown){let e=(0,n.createCustomEvent)(`hide`,{cancelable:!0});if(this.emit(`hide`,e),e.defaultPrevented)return this;this.el.style.display=`none`,this.shown=!1,this.clear(),this.emit(`hidden`,(0,n.createCustomEvent)(`hidden`))}return this}clear(){return this.items.forEach(e=>e.destroy()),this.items=[],this.el.innerHTML=``,this.activeIndex=null,this}up(e){return this.shown?this.moveActiveItem(`prev`,e):this}down(e){return this.shown?this.moveActiveItem(`next`,e):this}moveActiveItem(e,t){if(this.activeIndex!=null){let n=e===`next`?this.getNextActiveIndex():this.getPrevActiveIndex();n!=null&&(this.activate(n),t.preventDefault())}return this}activate(e){return this.activeIndex!==e&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=e,this.items[e].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex==null?null:this.items[this.activeIndex]}setOffset(t){let n=document.documentElement;if(n){let r=this.el.offsetWidth;if(t.left){let e=this.option.dynamicWidth?n.scrollWidth:n.clientWidth;t.left+r>e&&(t.left=e-r),this.el.style.left=`${t.left}px`}else t.right&&(t.right-r<0&&(t.right=0),this.el.style.right=`${t.right}px`);let i=!1,a=this.option.placement||e.DEFAULT_DROPDOWN_PLACEMENT;if(a===`auto`){let e=this.items.length*t.lineHeight;i=t.clientTop!=null&&t.clientTop+e>n.clientHeight}a===`top`||i?(this.el.style.bottom=`${n.clientHeight-t.top+t.lineHeight}px`,this.el.style.top=`auto`):(this.el.style.top=`${t.top}px`,this.el.style.bottom=`auto`)}return this}getNextActiveIndex(){if(this.activeIndex==null)throw Error();return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw Error();return this.activeIndex===0?this.option.rotate?this.items.length-1:null:this.activeIndex-1}renderItems(){let e=document.createDocumentFragment();for(let t of this.items)e.appendChild(t.el);return this.el.appendChild(e),this}setStrategyId(e){let t=e.getStrategyId();return t&&(this.el.dataset.strategy=t),this}renderEdge(e,t){let n=this.option[t],r=document.createElement(`li`);return r.className=`textcomplete-${t}`,r.innerHTML=typeof n==`function`?n(e.map(e=>e.data)):n||``,this.el.appendChild(r),this}};var r=class{constructor(t,n,r,i){this.dropdown=t,this.index=n,this.searchResult=r,this.props=i,this.active=!1,this.onClick=e=>{e.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;let a=document.createElement(`li`);a.className=this.active?this.activeClassName:this.className;let o=document.createElement(`span`);o.tabIndex=-1,o.innerHTML=this.searchResult.render(),a.appendChild(o),a.addEventListener(`click`,this.onClick),this.el=a}destroy(){var e;let t=this.el;return(e=t.parentNode)==null||e.removeChild(t),t.removeEventListener(`click`,this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})),On=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Editor=void 0;var t=Sn(),n=En();e.Editor=class extends t.EventEmitter{destroy(){return this}applySearchResult(e){throw Error(`Not implemented.`)}getCursorOffset(){throw Error(`Not implemented.`)}getBeforeCursor(){throw Error(`Not implemented.`)}emitMoveEvent(e){let t=(0,n.createCustomEvent)(`move`,{cancelable:!0,detail:{code:e}});return this.emit(`move`,t),t}emitEnterEvent(){let e=(0,n.createCustomEvent)(`enter`,{cancelable:!0});return this.emit(`enter`,e),e}emitChangeEvent(){let e=(0,n.createCustomEvent)(`change`,{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit(`change`,e),e}emitEscEvent(){let e=(0,n.createCustomEvent)(`esc`,{cancelable:!0});return this.emit(`esc`,e),e}getCode(e){switch(e.keyCode){case 9:case 13:return`ENTER`;case 27:return`ESC`;case 38:return`UP`;case 40:return`DOWN`;case 78:if(e.ctrlKey)return`DOWN`;break;case 80:if(e.ctrlKey)return`UP`;break}return`OTHER`}}})),kn=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.Textcomplete=void 0;var t=Sn(),n=Dn(),r=Tn(),i=[`show`,`shown`,`render`,`rendered`,`selected`,`hidden`,`hide`];e.Textcomplete=class extends t.EventEmitter{constructor(e,t,i){super(),this.editor=e,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:e})=>{e.length?this.dropdown.render(e,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=e=>{e.detail.code===`UP`?this.dropdown.up(e):this.dropdown.down(e)},this.handleEnter=e=>{let t=this.dropdown.getActiveItem();t?(this.dropdown.select(t),e.preventDefault()):this.dropdown.hide()},this.handleEsc=e=>{this.dropdown.isShown()&&(this.dropdown.hide(),e.preventDefault())},this.handleChange=e=>{e.detail.beforeCursor==null?this.dropdown.hide():this.trigger(e.detail.beforeCursor)},this.handleSelect=e=>{this.emit(`select`,e),e.defaultPrevented||this.editor.applySearchResult(e.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new r.Completer(t),this.dropdown=n.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(e=!0){return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}startListening(){var e;this.editor.on(`move`,this.handleMove).on(`enter`,this.handleEnter).on(`esc`,this.handleEsc).on(`change`,this.handleChange),this.dropdown.on(`select`,this.handleSelect);for(let e of i)this.dropdown.on(e,t=>this.emit(e,t));this.completer.on(`hit`,this.handleHit),(e=this.dropdown.el.ownerDocument.defaultView)==null||e.addEventListener(`resize`,this.handleResize)}stopListening(){var e;(e=this.dropdown.el.ownerDocument.defaultView)==null||e.removeEventListener(`resize`,this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener(`move`,this.handleMove).removeListener(`enter`,this.handleEnter).removeListener(`esc`,this.handleEsc).removeListener(`change`,this.handleChange)}}})),An=n((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!==`default`&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,`__esModule`,{value:!0}),n(Tn(),e),n(Dn(),e),n(On(),e),n(Cn(),e),n(wn(),e),n(kn(),e),n(En(),e)})),jn=e({update:()=>Mn,wrapCursor:()=>Nn});function Mn(e,t,n){let r=e.value,i=t+(n||``),a=document.activeElement,o=0,s=0;for(;o<r.length&&o<i.length&&r[o]===i[o];)o++;for(;r.length-s-1>=0&&i.length-s-1>=0&&r[r.length-s-1]===i[i.length-s-1];)s++;o=Math.min(o,Math.min(r.length,i.length)-s),e.setSelectionRange(o,r.length-s);let c=i.substring(o,i.length-s);if(e.focus(),!document.execCommand(`insertText`,!1,c)){e.value=i;let t=document.createEvent(`Event`);t.initEvent(`input`,!0,!0),e.dispatchEvent(t)}return e.setSelectionRange(t.length,t.length),a.focus(),e}function Nn(e,t,n){let r=e.selectionEnd;return Mn(e,e.value.substr(0,e.selectionStart)+t,e.value.substring(e.selectionStart,r)+(n||``)+e.value.substr(r)),e.selectionEnd=r+t.length,e}var Pn=r((()=>{})),Fn=n(((e,t)=>{(function(){var e=`direction.boxSizing.width.height.overflowX.overflowY.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize`.split(`.`),n=typeof window<`u`,r=n&&window.mozInnerScreenX!=null;function i(t,i,a){if(!n)throw Error(`textarea-caret-position#getCaretCoordinates should only be called in a browser`);var o=a&&a.debug||!1;if(o){var s=document.querySelector(`#input-textarea-caret-position-mirror-div`);s&&s.parentNode.removeChild(s)}var c=document.createElement(`div`);c.id=`input-textarea-caret-position-mirror-div`,document.body.appendChild(c);var l=c.style,u=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,d=t.nodeName===`INPUT`;l.whiteSpace=`pre-wrap`,d||(l.wordWrap=`break-word`),l.position=`absolute`,o||(l.visibility=`hidden`),e.forEach(function(e){d&&e===`lineHeight`?l.lineHeight=u.height:l[e]=u[e]}),r?t.scrollHeight>parseInt(u.height)&&(l.overflowY=`scroll`):l.overflow=`hidden`,c.textContent=t.value.substring(0,i),d&&(c.textContent=c.textContent.replace(/\s/g,`\xA0`));var f=document.createElement(`span`);f.textContent=t.value.substring(i)||`.`,c.appendChild(f);var p={top:f.offsetTop+parseInt(u.borderTopWidth),left:f.offsetLeft+parseInt(u.borderLeftWidth),height:parseInt(u.lineHeight)};return o?f.style.backgroundColor=`#aaa`:document.body.removeChild(c),p}t!==void 0&&t.exports!==void 0?t.exports=i:n&&(window.getCaretCoordinates=i)})()})),In=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.calculateElementOffset=void 0,e.calculateElementOffset=e=>{let t=e.getBoundingClientRect(),n=e.ownerDocument;if(n==null)throw Error(`Given element does not belong to document`);let{defaultView:r,documentElement:i}=n;if(r==null)throw Error(`Given element does not belong to window`);let a={top:t.top+r.pageYOffset,left:t.left+r.pageXOffset};return i&&(a.top-=i.clientTop,a.left-=i.clientLeft),a}})),Ln=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getLineHeightPx=void 0;var t=48,n=57,r=e=>t<=e&&e<=n;e.getLineHeightPx=e=>{let t=getComputedStyle(e),n=t.lineHeight;if(r(n.charCodeAt(0))){let e=parseFloat(n);return r(n.charCodeAt(n.length-1))?e*parseFloat(t.fontSize):e}return i(e.nodeName,t)};var i=(e,t)=>{let n=document.body;if(!n)return 0;let r=document.createElement(e);r.innerHTML=`&nbsp;`,Object.assign(r.style,{fontSize:t.fontSize,fontFamily:t.fontFamily,padding:`0`}),n.appendChild(r),r instanceof HTMLTextAreaElement&&(r.rows=1);let i=r.offsetHeight;return n.removeChild(r),i}})),Rn=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.isSafari=void 0,e.isSafari=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent)})),zn=n((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!==`default`&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,`__esModule`,{value:!0}),n(In(),e),n(Ln(),e),n(Rn(),e)})),Bn=n((e=>{var n=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,`__esModule`,{value:!0}),e.TextareaEditor=void 0;var r=(Pn(),t(jn)),i=n(Fn()),a=An(),o=zn();e.TextareaEditor=class extends a.Editor{constructor(e){super(),this.el=e,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=e=>{let t=this.getCode(e),n;t===`UP`||t===`DOWN`?n=this.emitMoveEvent(t):t===`ENTER`?n=this.emitEnterEvent():t===`ESC`&&(n=this.emitEscEvent()),n&&n.defaultPrevented&&e.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(e){let t=this.getBeforeCursor();if(t!=null){let n=e.replace(t,this.getAfterCursor());this.el.focus(),Array.isArray(n)&&((0,r.update)(this.el,n[0],n[1]),this.el&&this.el.dispatchEvent((0,a.createCustomEvent)(`input`)))}}getCursorOffset(){let e=(0,o.calculateElementOffset)(this.el),t=this.getElScroll(),n=this.getCursorPosition(),r=(0,o.getLineHeightPx)(this.el),i=e.top-t.top+n.top+r,a=e.left-t.left+n.left,s=this.el.getBoundingClientRect().top;return this.el.dir===`rtl`?{top:i,right:document.documentElement?document.documentElement.clientWidth-a:0,lineHeight:r,clientTop:s}:{top:i,left:a,lineHeight:r,clientTop:s}}getBeforeCursor(){return this.el.selectionStart===this.el.selectionEnd?this.el.value.substring(0,this.el.selectionEnd):null}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,i.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener(`input`,this.onInput),this.el.addEventListener(`keydown`,this.onKeydown)}stopListening(){this.el.removeEventListener(`input`,this.onInput),this.el.removeEventListener(`keydown`,this.onKeydown)}}})),Vn=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.TextareaEditor=void 0;var t=Bn();Object.defineProperty(e,`TextareaEditor`,{enumerable:!0,get:function(){return t.TextareaEditor}})})),Hn=An(),Un=Vn(),Wn=_(`<div class="flex gap-1 border-b border-border px-2 py-1"><img class="h-6 max-w-12"><div>`),Gn=()=>{let{searchEmojis:e}=k(),[t,n]=o();return a(()=>{let n=t();if(n==null)return;let r=new Hn.Textcomplete(new Un.TextareaEditor(n),[{id:`customEmoji`,match:/\B:([\w-]+)$/,search:(t,n)=>{n(e(t))},template:e=>(()=>{let t=Wn(),n=t.firstChild,r=n.nextSibling;return v(r,()=>e.shortcode),p(t=>{let r=e.url,i=e.shortcode;return r!==t._v$&&y(n,`src`,t._v$=r),i!==t._v$2&&y(n,`alt`,t._v$2=i),t},{_v$:void 0,_v$2:void 0}),t})().outerHTML,replace:e=>`:${e.shortcode}: `}],{dropdown:{className:`bg-bg shadow rounded`,item:{className:`cursor-pointer`,activeClassName:`bg-bg-tertiary cursor-pointer`}}});c(()=>{r.destroy()})}),{elementRef:n}},Kn=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:r,contentWarning:i,hashtags:a,urls:o,tags:s})=>{let c=[],l=e?.map(e=>[`p`,e])??[],u=[];return t!=null&&c.push([`e`,t,``,`root`]),t==null&&r!=null&&c.push([`e`,r,``,`root`]),t!=null&&r!=null&&t!==r&&c.push([`e`,r,``,`reply`]),n?.forEach(e=>c.push([`q`,e])),a?.forEach(e=>u.push([`t`,e.toLowerCase()])),o?.forEach(e=>u.push([`r`,e])),i!=null&&u.push([`content-warning`,i]),s!=null&&s.length>0&&u.push(...s),[...c,...l,...u]},qn=e=>{let{pubkey:t,content:n}=e,r=Kn(e);return{kind:1,pubkey:t,created_at:M(),tags:r,content:n}},Jn=()=>{let{mutation:e,wrapMutate:t}=N(()=>({mutationKey:[`publishTextNote`]}));return{mutation:e,publishTextNote:t(qn)}},Yn=e=>{let t=e(),{config:n}=k();return T(()=>({mutationKey:[`uploadFiles`],mutationFn:async e=>{let t=await te(n().fileServer)(e),r=[],i={},a=[];return t.forEach((t,n)=>{if(t.status===`fulfilled`){let{status:o,nip94_event:s}=t.value;if((o===`success`||o===`processing`)&&s!=null){let o=new ae(s.tags).findFirstTagByName(`url`);if(o==null||o.length<2){a.push([e[n],`url not found`]);return}let c=o[1];r.push(c);let l=D(t.value);l!=null&&(i[c]=l)}else t.value.status===`error`&&a.push([e[n],t.value.message])}else t.reason instanceof Error?a.push([e[n],t.reason.message]):a.push([e[n],`failed`])}),{urls:r,uploadedImetaTags:i,failed:a}},onSuccess:e=>{console.log(`Succeeded to upload files`,e),t.onSuccess(e)},onError:e=>{console.error(`failed to upload images: `,e)}}))},Xn=_(`<div>`),Zn=_(`<input type=text class="rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"maxlength=32>`),Qn=_(`<button class="flex items-center"type=button><span class="inline-block size-5 text-fg-secondary/70">`),$n=_(`<div class=p-1><form class="flex flex-col gap-1"><textarea name=text class="scrollbar max-h-[40vh] min-h-16 overflow-y-auto rounded-md border border-border bg-bg wrap-break-word whitespace-pre-wrap ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"rows=4></textarea><div class="flex items-end justify-end gap-1"><span class=flex-1></span><button class="inline-block rounded-sm bg-primary text-primary-fg"type=button></button><button class="rounded-sm text-primary-fg"type=button></button><button class="rounded-sm text-primary-fg"type=button></button><button class="rounded-sm p-2 text-primary-fg"type=submit></button></div><input type=file hidden name=image accept=image/jpeg,image/png,image/gif,image/webp>`),er=e=>{let t=[],n=[],r=[],i=[],a=[];return e.forEach(e=>{e.type===`URL`?i.push(e.content):e.type===`HashTag`?t.push(e.tagName):e.type===`Bech32Entity`?e.data.type===`npub`?n.push(e.data.data):e.data.type===`note`?r.push(e.data.data):e.data.type===`nevent`&&r.push(e.data.data.id):e.type===`CustomEmoji`&&!a.includes(e.shortcode)&&a.push(e.shortcode)}),{hashtags:t,urlReferences:i,pubkeyReferences:n,eventReferences:r,emojis:a}},tr=e=>{let t=[];return e.forEach(e=>{e.type===`Bech32Entity`&&!e.isNIP19?t.push(`nostr:${e.content}`):t.push(e.content)}),t.join(``)},nr=e=>{let t=ee(),n,r,i,{elementRef:a}=Gn(),[c,u]=o(``),[d,f]=o(!1),[h,g]=o(``),[_,S]=o({}),[C,w]=o([]),T=e=>u(t=>t===``?e:`${t} ${e}`),E=()=>{u(C().map(e=>` #${e}`).join(``)),g(``),f(!1),S({})},D=()=>{n?.blur(),E(),e.onClose()},te=e=>{switch(e){case`reply`:return t.t(`posting.placeholderReply`);default:return t.t(`posting.placeholder`)}},{getEmoji:re}=k(),ie=oe(),A=()=>e.replyTo&&ne(e.replyTo),j=()=>e.mode??`normal`,{publishTextNote:ae}=Jn(),M=()=>{n!=null&&(n.style.height=`auto`,n.style.height=`${n.scrollHeight}px`)},N=Yn(()=>({onSuccess:({urls:e,uploadedImetaTags:n,failed:r})=>{if(e.length>0&&(T(e.join(` `)),M(),S(e=>({...e,...n}))),r.length>0){let e=r.map(([e,t])=>`${e.name}: ${t}`).join(`
`);window.alert(t.t(`posting.failedToUploadFile`,{filenames:e}))}}})),de=s(()=>{let e=ie();return A()?.taggedPubkeys()?.filter(t=>t!==e)??[]}),P=s(()=>e.replyTo==null?[]:(0,le.default)([e.replyTo.pubkey,...de()])),fe=e=>{let t=[];return e.forEach(e=>{let n=re(e);n!=null&&t.push([`emoji`,e,n.url])}),t},F=()=>{if(c().length===0)return;if(/nsec1[0-9a-zA-Z]+|ncryptosec[0-9a-zA-Z]+|nokakoi:[0-9a-fA-F]+/.test(c())){window.alert(t.t(`posting.forbiddenToIncludeNsec`));return}let n=ie();if(n==null){console.error(`pubkey is not available`);return}let r=O(c()),{hashtags:i,urlReferences:a,pubkeyReferences:o,eventReferences:s,emojis:l}=er(r),u=tr(r),f=fe(l),p=Object.entries(_()).filter(([e])=>a.includes(e)).map(([,e])=>e);w(i);let m={pubkey:n,content:u,notifyPubkeys:o,mentionEventIds:s,hashtags:i,urls:a,tags:[...f,...p]};A()!=null&&(m={...m,notifyPubkeys:(0,le.default)([...P(),...o]),rootEventId:A()?.rootEvent()?.id??A()?.replyingToEvent()?.id,replyEventId:A()?.id}),d()&&(m={...m,contentWarning:h()}),ae(m).catch(e=>{window.alert(se(e))}),E(),e.onPost?.(),D()},I=e=>{u(e.currentTarget.value),M()},L=e=>{T(e.native??`:${e.id}:`),n?.focus()},pe=e=>{e.preventDefault(),F()},R=e=>{e.key===`Enter`&&(e.ctrlKey||e.metaKey)?F():e.key===`Escape`&&(n?.blur(),D())},me=e=>{if(e.preventDefault(),N.isPending)return;let{files:t}=e.currentTarget;t==null||t.length===0||(N.mutate([...t]),e.currentTarget.value=``)},he=e=>{if(e.preventDefault(),N.isPending)return;let t=e?.dataTransfer?.files;t==null||t.length===0||N.mutate([...t])},z=e=>{if(N.isPending)return;let t=e?.clipboardData?.items;if(t==null||t.length===0)return;let n=[];Array.from(t).forEach(t=>{if(t.kind===`file`){e.preventDefault();let r=t.getAsFile();if(r==null)return;n.push(r)}}),n.length!==0&&N.mutate(n)},ge=e=>{e.preventDefault()},_e=()=>c().trim().length===0||N.isPending,B=()=>N.isPending,V=pn(()=>({customEmojis:!0,onEmojiSelect:L}));return(()=>{let o=$n(),s=o.firstChild,u=s.firstChild,_=u.nextSibling,S=_.firstChild,C=S.nextSibling,w=C.nextSibling,T=w.nextSibling,E=T.nextSibling,O=_.nextSibling;v(o,x(l,{get when(){return e.replyTo!=null},get children(){let e=Xn();return v(e,()=>t.t(`posting.replyToPre`),null),v(e,x(b,{get each(){return P()},children:(e,t)=>[x(ue,{pubkey:e}),x(l,{get when(){return t()!==P().length-1},children:` と `})]}),null),v(e,()=>t.t(`posting.replyToPost`),null),e}}),s),s.addEventListener(`submit`,pe),v(s,x(l,{get when(){return d()},get children(){let e=Zn();e.$$input=e=>g(e.currentTarget.value);let n=r;return typeof n==`function`?m(n,e):r=e,p(()=>y(e,`placeholder`,t.t(`posting.contentWarningReason`))),p(()=>e.value=h()),e}}),u),u.addEventListener(`paste`,z),u.addEventListener(`drop`,he),u.addEventListener(`dragover`,ge),u.$$keydown=R,u.$$input=I,m(t=>{n=t,e.textAreaRef?.(t),a(t)},u),v(_,x(l,{get when(){return j()===`reply`||e.closable},get children(){let e=Qn(),n=e.firstChild;return e.$$click=()=>D(),v(n,x(ce,{})),p(n=>{let r=j()===`normal`,i=j()===`normal`,a=j()===`reply`,o=j()===`reply`,s=t.t(`posting.close`),c=t.t(`posting.close`);return r!==n._v$&&e.classList.toggle(`h-9`,n._v$=r),i!==n._v$2&&e.classList.toggle(`w-9`,n._v$2=i),a!==n._v$3&&e.classList.toggle(`h-8`,n._v$3=a),o!==n._v$4&&e.classList.toggle(`w-8`,n._v$4=o),s!==n._v$5&&y(e,`aria-label`,n._v$5=s),c!==n._v$6&&y(e,`title`,n._v$6=c),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),e}}),S),C.$$click=()=>V.open();let k=V.targetRef;typeof k==`function`?m(k,C):V.targetRef=C,v(C,x(_n,{})),v(_,()=>V.popup(),w),w.$$click=()=>{f(e=>!e),r?.focus()},v(w,x(hn,{})),T.$$click=()=>i?.click(),v(T,x(yn,{})),v(E,x(xn,{})),O.addEventListener(`change`,me);let ee=i;return typeof ee==`function`?m(ee,O):i=O,p(e=>{let n=te(j()),r=j()===`normal`,i=j()===`normal`,a=j()===`normal`,o=j()===`reply`,s=j()===`reply`,c=j()===`reply`,l=t.t(`posting.emojiPicker`),f=t.t(`posting.emojiPicker`),p=!d(),m=!!d(),h=j()===`normal`,g=j()===`normal`,_=j()===`normal`,v=j()===`reply`,b=j()===`reply`,x=j()===`reply`,S=t.t(`posting.contentWarning`),D=t.t(`posting.contentWarning`),O=!!B(),k=!B(),ee=j()===`normal`,ne=j()===`normal`,re=j()===`normal`,ie=j()===`reply`,A=j()===`reply`,ae=j()===`reply`,oe=t.t(`posting.uploadImage`),M=t.t(`posting.uploadImage`),se=B(),N=!!_e(),ce=!_e(),le=j()===`normal`,ue=j()===`normal`,de=j()===`reply`,P=j()===`reply`,fe=t.t(`posting.submit`),F=t.t(`posting.submit`),I=_e();return n!==e._v$7&&y(u,`placeholder`,e._v$7=n),r!==e._v$8&&C.classList.toggle(`h-9`,e._v$8=r),i!==e._v$9&&C.classList.toggle(`w-9`,e._v$9=i),a!==e._v$10&&C.classList.toggle(`p-2`,e._v$10=a),o!==e._v$11&&C.classList.toggle(`h-7`,e._v$11=o),s!==e._v$12&&C.classList.toggle(`w-7`,e._v$12=s),c!==e._v$13&&C.classList.toggle(`p-[6px]`,e._v$13=c),l!==e._v$14&&y(C,`aria-label`,e._v$14=l),f!==e._v$15&&y(C,`title`,e._v$15=f),p!==e._v$16&&w.classList.toggle(`bg-primary`,e._v$16=p),m!==e._v$17&&w.classList.toggle(`bg-primary-hover`,e._v$17=m),h!==e._v$18&&w.classList.toggle(`h-9`,e._v$18=h),g!==e._v$19&&w.classList.toggle(`w-9`,e._v$19=g),_!==e._v$20&&w.classList.toggle(`p-2`,e._v$20=_),v!==e._v$21&&w.classList.toggle(`h-7`,e._v$21=v),b!==e._v$22&&w.classList.toggle(`w-7`,e._v$22=b),x!==e._v$23&&w.classList.toggle(`p-[6px]`,e._v$23=x),S!==e._v$24&&y(w,`aria-label`,e._v$24=S),D!==e._v$25&&y(w,`title`,e._v$25=D),O!==e._v$26&&T.classList.toggle(`bg-primary-disabled`,e._v$26=O),k!==e._v$27&&T.classList.toggle(`bg-primary`,e._v$27=k),ee!==e._v$28&&T.classList.toggle(`h-9`,e._v$28=ee),ne!==e._v$29&&T.classList.toggle(`w-9`,e._v$29=ne),re!==e._v$30&&T.classList.toggle(`p-2`,e._v$30=re),ie!==e._v$31&&T.classList.toggle(`h-7`,e._v$31=ie),A!==e._v$32&&T.classList.toggle(`w-7`,e._v$32=A),ae!==e._v$33&&T.classList.toggle(`p-[6px]`,e._v$33=ae),oe!==e._v$34&&y(T,`title`,e._v$34=oe),M!==e._v$35&&y(T,`aria-label`,e._v$35=M),se!==e._v$36&&(T.disabled=e._v$36=se),N!==e._v$37&&E.classList.toggle(`bg-primary-disabled`,e._v$37=N),ce!==e._v$38&&E.classList.toggle(`bg-primary`,e._v$38=ce),le!==e._v$39&&E.classList.toggle(`h-9`,e._v$39=le),ue!==e._v$40&&E.classList.toggle(`w-9`,e._v$40=ue),de!==e._v$41&&E.classList.toggle(`h-7`,e._v$41=de),P!==e._v$42&&E.classList.toggle(`w-7`,e._v$42=P),fe!==e._v$43&&y(E,`aria-label`,e._v$43=fe),F!==e._v$44&&y(E,`title`,e._v$44=F),I!==e._v$45&&(E.disabled=e._v$45=I),e},{_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0,_v$32:void 0,_v$33:void 0,_v$34:void 0,_v$35:void 0,_v$36:void 0,_v$37:void 0,_v$38:void 0,_v$39:void 0,_v$40:void 0,_v$41:void 0,_v$42:void 0,_v$43:void 0,_v$44:void 0,_v$45:void 0}),p(()=>u.value=c()),o})()};g([`input`,`keydown`,`click`]);var rr=n(((e,t)=>{var n=ie();t.exports=function(){return n.Date.now()}})),ir=n(((e,t)=>{var n=/\s/;function r(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}t.exports=r})),ar=n(((e,t)=>{var n=ir(),r=/^\s+/;function i(e){return e&&e.slice(0,n(e)+1).replace(r,``)}t.exports=i})),or=n(((e,t)=>{var n=ar(),r=w(),i=re(),a=NaN,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function u(e){if(typeof e==`number`)return e;if(i(e))return a;if(r(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=r(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=n(e);var u=s.test(e);return u||c.test(e)?l(e.slice(2),u?2:8):o.test(e)?a:+e}t.exports=u})),sr=n(((e,t)=>{var n=w(),r=rr(),i=or(),a=`Expected a function`,o=Math.max,s=Math.min;function c(e,t,c){var l,u,d,f,p,m,h=0,g=!1,_=!1,v=!0;if(typeof e!=`function`)throw TypeError(a);t=i(t)||0,n(c)&&(g=!!c.leading,_=`maxWait`in c,d=_?o(i(c.maxWait)||0,t):d,v=`trailing`in c?!!c.trailing:v);function y(t){var n=l,r=u;return l=u=void 0,h=t,f=e.apply(r,n),f}function b(e){return h=e,p=setTimeout(C,t),g?y(e):f}function x(e){var n=e-m,r=e-h,i=t-n;return _?s(i,d-r):i}function S(e){var n=e-m,r=e-h;return m===void 0||n>=t||n<0||_&&r>=d}function C(){var e=r();if(S(e))return w(e);p=setTimeout(C,x(e))}function w(e){return p=void 0,v&&l?y(e):(l=u=void 0,f)}function T(){p!==void 0&&clearTimeout(p),h=0,l=m=u=p=void 0}function E(){return p===void 0?f:w(r())}function D(){var e=r(),n=S(e);if(l=arguments,u=this,m=e,n){if(p===void 0)return b(m);if(_)return clearTimeout(p),p=setTimeout(C,t),y(m)}return p===void 0&&(p=setTimeout(C,t)),f}return D.cancel=T,D.flush=E,D}t.exports=c})),cr=n(((e,t)=>{var n=sr(),r=w(),i=`Expected a function`;function a(e,t,a){var o=!0,s=!0;if(typeof e!=`function`)throw TypeError(i);return r(a)&&(o=`leading`in a?!!a.leading:o,s=`trailing`in a?!!a.trailing:s),n(e,t,{leading:o,maxWait:t,trailing:s})}t.exports=a}));export{pn as a,ue as c,hn as i,nr as n,fn as o,_n as r,P as s,cr as t};
//# sourceMappingURL=throttle-CbTqt2u_.js.map