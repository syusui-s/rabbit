import{s as O,t as f,aE as h,u as _,c as S,a as i,i as o,h as T,F as L,d as D,j as w,f as E,b as j,aF as q,m as A,A as K}from"./index-gBQXoqr6.js";import{A as J}from"./arrow-left-E1DRPabd.js";import{z as X,j as H,F as G,b as V,g as Y,X as F,s as Z,U as Q,h as W}from"./SideBar-rstwu1y8.js";import{B as ee}from"./BasicModal-TUJbwvJt.js";import{L as P}from"./LazyLoad-4CeLClwJ.js";import"./resolveAsset-t7wWHuXz.js";const te=f('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m19.5 8.25-7.5 7.5-7.5-7.5">'),re=(e={})=>(()=>{const r=te();return O(r,e,!0,!0),r})(),ne=f('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m4.5 15.75 7.5-7.5 7.5 7.5">'),le=(e={})=>(()=>{const r=ne();return O(r,e,!0,!0),r})(),oe=f('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),ie=(e={})=>(()=>{const r=oe();return O(r,e,!0,!0),r})(),se=f('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),ae=(e={})=>(()=>{const r=se();return O(r,e,!0,!0),r})(),ce=f('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008zm0-6h.008v.008h-.008zm-3 6h.008v.008h-.008zm0-6h.008v.008h-.008z">'),de=(e={})=>(()=>{const r=ce();return O(r,e,!0,!0),r})(),M=h.string().length(64).regex(/^[0-9a-f]{64}$/),I=h.string().regex(/^\w+$/),ue=h.object({shortcode:I,url:h.string().url(),keywords:h.optional(h.array(I))}),fe=h.object({manifest:h.literal("emojipack_v1"),name:h.string(),emojis:h.array(ue),description:h.optional(h.string()),author:h.optional(M),publisher:h.optional(M)}).refine(e=>X(e.emojis,a=>a.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),z=h.record(I,h.string().url());fe.or(z);const ge=e=>Object.entries(e).map(([r,a])=>({shortcode:r,url:a})),me=f('<div class="border-t border-border p-2">'),pe=f('<div class="mb-2 rounded border border-border shadow hover:shadow-md"><h3 class="text-lg font-bold"><button type=button class="flex w-full items-center p-2 text-start"><span class="flex-1 hover:text-fg-secondary"></span><span class="inline-block size-4 shrink-0 text-fg">'),be=f('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary/80 px-1"><span class="m-[-3px] inline-block size-5 rounded-full border bg-primary-fg shadow">'),he=f('<div class="flex gap-2 py-1"><button class="rounded border border-primary px-4 py-1 font-bold text-primary"></button><button class="rounded border border-primary px-4 py-1 font-bold text-primary">'),$e=f("<p class=py-1>"),ve=f('<form class="flex gap-2"><input class="flex-1 rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"type=text name=relayUrl placeholder=wss://...><button type=submit class="rounded bg-primary p-2 font-bold text-primary-fg">'),xe=f("<ul class=pt-2>"),_e=f('<button type=button class="rounded bg-primary p-2 font-bold text-primary-fg">'),ye=f('<li class="flex items-center border-t border-border pr-4"><div class="flex-1 truncate"></div><button class="size-3 shrink-0">'),we=f('<div class="scrollbar flex flex-col overflow-y-auto rounded-md border border-border">'),Ce=f('<button type=button class="border-t border-border px-2 py-1 text-left first:border-none">'),ke=f('<div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),je=f('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type=button class="w-48 rounded border border-primary p-2 font-bold sm:w-full"></button><div class=text-xs>'),Ee=f('<div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class=flex-1></div></div><div class="flex w-full"><div class=flex-1>'),Se=f('<form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class=w-9></div><input class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"type=text name=shortcode placeholder=smiley pattern=^\\w+$ required></label><label class="flex flex-1 items-center gap-1"><div class=w-9></div><input class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"type=text name=url placeholder=https://example.com/smiley.png required></label><button type=submit class="w-24 self-end rounded bg-primary p-2 font-bold text-primary-fg">'),Le=f('<ul class="mt-4 flex max-h-[40vh] min-h-64 flex-wrap overflow-y-auto border-t border-border">'),Re=f('<div class="flex min-w-24 flex-col items-center rounded border border-border bg-bg shadow"><div class="flex items-center p-1"><img class="h-20 max-w-20 object-contain"></div><div class="p-1 text-center text-sm"></div><div class="w-full border-t border-border"><button type=button class="w-full px-2 py-1 text-danger">'),Oe=f('<li class="min-w-0 basis-1/2 sm:basis-1/4"><button type=button class="flex w-full flex-col items-center gap-1 rounded p-2 hover:bg-bg-tertiary/20 hover:shadow"><div class="w-full truncate text-xs text-fg-secondary">'),Te=f("<div class=size-8>"),Fe=f('<div class="flex h-8 max-w-8 items-center"><img class=object-contain>'),N=f("<p>"),Ie=f('<form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"name=json placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type=submit class="w-24 self-end rounded bg-primary p-2 font-bold text-primary-fg">'),Me=f('<ul class="flex max-h-[50vh] min-h-64 flex-col overflow-y-auto">'),Ue=f('<form class="flex gap-2"><input class="flex-1 rounded-md border border-border bg-bg ring-border focus:border-border focus:ring-primary"type=text name=keyword><button type=submit class="rounded bg-primary p-2 font-bold text-primary-fg">'),Pe=f('<ul class="mt-2 flex max-h-[50vh] min-h-64 flex-col overflow-y-auto border-t border-border">'),U=f('<li class="flex items-center border-b border-border pr-4"><div class="flex-1 truncate"></div><button class="size-3 shrink-0">'),ze=f('<div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class=flex-1>YouTube</div></div><div class="flex w-full"><div class=flex-1>X (Twitter)</div></div><div class="flex w-full"><div class=flex-1>OGP'),Ne=f('<div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class=flex-1></div></div><div class="flex w-full"><div class=flex-1></div></div><div class="flex w-full"><div class=flex-1>'),Be=f("<div class=p-4>"),De=f('<h2 class="flex-1 text-center text-lg font-bold">'),qe=f('<ul class="flex flex-col">'),Ae=f('<li class=w-full><button class="flex w-full gap-2 py-3 hover:text-primary"><span class="inline-block size-6">'),Ke=f('<div class="flex flex-col"><div><button class="pr-4 text-fg hover:text-fg-secondary"><span class="inline-block size-6"></span></button></div><div class="w-full flex-1 pt-4">'),B=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Je=B("https?"),Xe=B("wss?"),x=e=>{const[r,a]=S(e.initialOpened??!0),p=()=>a(d=>!d);return(()=>{const d=pe(),n=d.firstChild,t=n.firstChild,c=t.firstChild,l=c.nextSibling;return t.$$click=()=>p(),o(c,()=>e.title),o(l,i(T,{get when(){return r()},get fallback(){return i(re,{})},get children(){return i(le,{})}})),o(d,i(T,{get when(){return r()},get children(){const s=me();return o(s,()=>e.children),s}}),null),d})()},k=e=>(()=>{const r=be();return r.$$click=a=>e.onClick(a),j(a=>{const p=!e.value,d=!e.value,n=!!e.value,t=!!e.value,c=e.value;return p!==a._v$&&r.classList.toggle("bg-bg-tertiary",a._v$=p),d!==a._v$2&&r.classList.toggle("justify-start",a._v$2=d),n!==a._v$3&&r.classList.toggle("bg-primary",a._v$3=n),t!==a._v$4&&r.classList.toggle("justify-end",a._v$4=t),c!==a._v$5&&E(r,"area-label",a._v$5=c),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})(),He=()=>{const e=_(),r=V(),{showProfile:a,showProfileEdit:p}=W();return i(x,{get title(){return e.t("config.profile.profile")},get children(){const d=he(),n=d.firstChild,t=n.nextSibling;return n.$$click=()=>Y([r()])(([c])=>{a(c)}),o(n,()=>e.t("config.profile.openProfile")),t.$$click=()=>p(),o(t,()=>e.t("config.profile.editProfile")),d}})},Ge=()=>{const e=_(),{config:r,addRelay:a,removeRelay:p}=w(),[d,n]=S(""),t=l=>{l.preventDefault(),d().length!==0&&(a(d()),n(""))},c=async()=>{if(window.nostr==null)return;const l=Object.entries(await window.nostr?.getRelays?.()??[]),s=l.map(([b])=>b).join(`
`);if(l.length===0){window.alert(e.t("config.relays.notConfigured"));return}if(!window.confirm(`${e.t("config.relays.askImport")}

${s}`))return;const u=r().relayUrls.length;K(()=>{l.forEach(([b])=>{a(b)})});const g=r().relayUrls.length-u;window.alert(e.t("config.relays.imported",{count:g}))};return[i(x,{get title(){return e.t("config.relays.relays")},get children(){return[(()=>{const l=$e();return o(l,()=>e.t("config.relays.numOfRelays",{count:r().relayUrls.length})),l})(),(()=>{const l=ve(),s=l.firstChild,u=s.nextSibling;return l.addEventListener("submit",t),s.addEventListener("change",m=>n(m.currentTarget.value)),E(s,"pattern",Xe),o(u,()=>e.t("config.relays.addRelay")),j(()=>s.value=d()),l})(),(()=>{const l=xe();return o(l,i(L,{get each(){return r().relayUrls},children:s=>(()=>{const u=ye(),m=u.firstChild,g=m.nextSibling;return o(m,s),g.$$click=()=>p(s),o(g,i(F,{})),u})()})),l})()]}}),i(x,{get title(){return e.t("config.relays.importRelays")},get children(){const l=_e();return l.$$click=()=>{c().catch(s=>{console.error("failed to import relays",s),window.alert(e.t("config.relays.failedToImport"))})},o(l,()=>e.t("config.relays.importFromExtension")),l}})]},Ve=()=>{const e=_(),{config:r,setConfig:a}=w(),p=n=>{const t=r().colorTheme;return t.type==="specific"?t.id===n:!1},d=n=>{a(t=>({...t,colorTheme:{type:"specific",id:n}}))};return i(x,{get title(){return e.t("config.display.colorTheme")},get children(){const n=we();return o(n,i(L,{get each(){return Object.values(q)},children:t=>(()=>{const c=Ce();return c.$$click=()=>d(t.id),o(c,()=>t.name),j(l=>{const s=!!p(t.id),u=!!p(t.id),m=!p(t.id);return s!==l._v$6&&c.classList.toggle("bg-primary",l._v$6=s),u!==l._v$7&&c.classList.toggle("text-primary-fg",l._v$7=u),m!==l._v$8&&c.classList.toggle("text-fg",l._v$8=m),l},{_v$6:void 0,_v$7:void 0,_v$8:void 0}),c})()})),n}})},Ye=()=>{const e=_(),{config:r,setConfig:a}=w(),p=[{id:"relative",name:e.t("config.display.relativeTimeNotation"),example:e.t("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:e.t("config.display.absoluteTimeNotationShort"),example:e.t("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:e.t("config.display.absoluteTimeNotationLong"),example:e.t("config.display.absoluteTimeNotationLongExample")}],d=n=>{a(t=>({...t,dateFormat:n}))};return i(x,{get title(){return e.t("config.display.timeNotation")},get children(){const n=ke();return o(n,i(L,{each:p,children:({id:t,name:c,example:l})=>(()=>{const s=je(),u=s.firstChild,m=u.nextSibling;return u.$$click=()=>d(t),o(u,c),o(m,l),j(g=>{const b=r().dateFormat===t,$=r().dateFormat===t,v=r().dateFormat!==t,y=r().dateFormat!==t;return b!==g._v$9&&u.classList.toggle("bg-primary",g._v$9=b),$!==g._v$10&&u.classList.toggle("text-primary-fg",g._v$10=$),v!==g._v$11&&u.classList.toggle("bg-bg",g._v$11=v),y!==g._v$12&&u.classList.toggle("text-primary",g._v$12=y),g},{_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),s})()})),n}})},Ze=()=>{const e=_(),{config:r,setConfig:a}=w(),p=()=>{a(n=>({...n,useEmojiReaction:!(n.useEmojiReaction??!1)}))},d=()=>{a(n=>({...n,showEmojiReaction:!(n.showEmojiReaction??!1)}))};return i(x,{get title(){return e.t("config.display.reaction")},get children(){const n=Ee(),t=n.firstChild,c=t.firstChild,l=t.nextSibling,s=l.firstChild;return o(c,()=>e.t("config.display.enableEmojiReaction")),o(t,i(k,{get value(){return r().useEmojiReaction},onClick:()=>p()}),null),o(s,()=>e.t("config.display.showEmojiReaction")),o(l,i(k,{get value(){return r().showEmojiReaction},onClick:()=>d()}),null),n}})},Qe=()=>{const e=_(),{config:r,saveEmoji:a,removeEmoji:p}=w(),[d,n]=S(""),[t,c]=S(""),l=s=>{s.preventDefault(),!(d().length===0||t().length===0)&&(a({shortcode:d(),url:t()}),n(""),c(""))};return i(x,{get title(){return e.t("config.customEmoji.customEmoji")},get children(){return[(()=>{const s=Se(),u=s.firstChild,m=u.firstChild,g=m.nextSibling,b=u.nextSibling,$=b.firstChild,v=$.nextSibling,y=b.nextSibling;return s.addEventListener("submit",l),o(m,()=>e.t("config.customEmoji.shortcode")),g.addEventListener("change",C=>n(C.currentTarget.value)),o($,()=>e.t("config.customEmoji.url")),v.addEventListener("change",C=>c(C.currentTarget.value)),E(v,"pattern",Je),o(y,()=>e.t("config.customEmoji.addEmoji")),j(()=>g.value=d()),j(()=>v.value=t()),s})(),(()=>{const s=Le();return o(s,i(L,{get each(){return Object.values(r().customEmojis)},children:({shortcode:u,url:m})=>{const g=Z(()=>({popup:(()=>{const b=Re(),$=b.firstChild,v=$.firstChild,y=$.nextSibling,C=y.nextSibling,R=C.firstChild;return E(v,"src",m),E(v,"alt",u),o(y,u),R.$$click=()=>p(u),o(R,()=>e.t("config.customEmoji.removeEmoji")),b})()}));return(()=>{const b=Oe(),$=b.firstChild,v=$.firstChild,y=g.targetRef;return typeof y=="function"?A(y,b):g.targetRef=b,$.$$click=()=>g.open(),o($,i(P,{get fallback(){return Te()},children:()=>(()=>{const C=Fe(),R=C.firstChild;return E(R,"src",m),E(R,"alt",u),C})()}),v),o(v,u),o(b,()=>g.popup(),null),b})()}})),s})()]}})},We=()=>{const e=_(),{saveEmojis:r}=w(),[a,p]=S(""),d=n=>{if(n.preventDefault(),a().length!==0)try{const t=z.parse(JSON.parse(a())),c=ge(t);r(c),p("")}catch(t){const c=t instanceof Error?`:${t.message}`:"";window.alert(`JSONの読み込みに失敗しました${c}`)}};return i(x,{get title(){return e.t("config.customEmoji.emojiImport")},get children(){return[(()=>{const n=N();return o(n,()=>e.t("config.customEmoji.emojiImportDescription")),n})(),(()=>{const n=Ie(),t=n.firstChild,c=t.nextSibling;return n.addEventListener("submit",d),t.addEventListener("change",l=>p(l.currentTarget.value)),o(c,()=>e.t("config.customEmoji.importEmoji")),j(()=>t.value=a()),n})()]}})},et=()=>{const e=_(),{config:r,removeMutedPubkey:a,addMutedKeyword:p,removeMutedKeyword:d}=w(),[n,t]=S(""),c=l=>{l.preventDefault(),n().length!==0&&(p(n()),t(""))};return[i(x,{get title(){return e.t("config.mute.mutedUsers")},initialOpened:!1,get children(){const l=Me();return o(l,i(L,{get each(){return r().mutedPubkeys},children:s=>(()=>{const u=U(),m=u.firstChild,g=m.nextSibling;return o(m,i(P,{children:()=>i(Q,{pubkey:s})})),g.$$click=()=>a(s),o(g,i(F,{})),u})()})),l}}),i(x,{get title(){return e.t("config.mute.mutedKeywords")},initialOpened:!1,get children(){return[(()=>{const l=Ue(),s=l.firstChild,u=s.nextSibling;return l.addEventListener("submit",c),s.addEventListener("change",m=>t(m.currentTarget.value)),o(u,()=>e.t("config.mute.add")),j(()=>s.value=n()),l})(),(()=>{const l=Pe();return o(l,i(L,{get each(){return r().mutedKeywords},children:s=>(()=>{const u=U(),m=u.firstChild,g=m.nextSibling;return o(m,s),g.$$click=()=>d(s),o(g,i(F,{})),u})()})),l})()]}})]},tt=()=>{const e=_(),{config:r,setConfig:a}=w(),p=d=>{a(n=>({...n,embedding:{...n.embedding,[d]:!n.embedding[d]}}))};return i(x,{get title(){return e.t("config.display.embedding")},get children(){return[(()=>{const d=N();return o(d,()=>e.t("config.display.embeddingDescription")),d})(),(()=>{const d=ze(),n=d.firstChild;n.firstChild;const t=n.nextSibling;t.firstChild;const c=t.nextSibling;return c.firstChild,o(n,i(k,{get value(){return r().embedding.youtube},onClick:()=>p("youtube")}),null),o(t,i(k,{get value(){return r().embedding.twitter},onClick:()=>p("twitter")}),null),o(c,i(k,{get value(){return r().embedding.ogp},onClick:()=>p("ogp")}),null),d})()]}})},rt=()=>{const e=_(),{config:r,setConfig:a}=w(),p=()=>{a(t=>({...t,keepOpenPostForm:!(t.keepOpenPostForm??!1)}))},d=()=>{a(t=>({...t,showMedia:!(t.showMedia??!0)}))},n=()=>{a(t=>({...t,hideCount:!(t.hideCount??!1)}))};return i(x,{get title(){return e.t("config.display.others")},get children(){const t=Ne(),c=t.firstChild,l=c.firstChild,s=c.nextSibling,u=s.firstChild,m=s.nextSibling,g=m.firstChild;return o(l,()=>e.t("config.display.keepOpenPostForm")),o(c,i(k,{get value(){return r().keepOpenPostForm},onClick:()=>p()}),null),o(u,()=>e.t("config.display.showMediaByDefault")),o(s,i(k,{get value(){return r().showMedia},onClick:()=>d()}),null),o(g,()=>e.t("config.display.hideNumbers")),o(m,i(k,{get value(){return r().hideCount},onClick:()=>n()}),null),t}})},ct=e=>{const r=_(),[a,p]=S(null),d=[{name:()=>r.t("config.profile.profile"),icon:()=>i(H,{}),render:()=>i(He,{})},{name:()=>r.t("config.relays.relays"),icon:()=>i(de,{}),render:()=>i(Ge,{})},{name:()=>r.t("config.display.display"),icon:()=>i(ae,{}),render:()=>[i(Ve,{}),i(Ye,{}),i(Ze,{}),i(tt,{}),i(rt,{})]},{name:()=>r.t("config.customEmoji.customEmoji"),icon:()=>i(G,{}),render:()=>[i(Qe,{}),i(We,{})]},{name:()=>r.t("config.mute.mute"),icon:()=>i(ie,{}),render:()=>i(et,{})}],n=()=>{const t=a();return t==null?null:d[t]};return i(ee,{get onClose(){return e.onClose},get children(){const t=Be();return o(t,i(T,{get when(){return n()},get fallback(){return[(()=>{const c=De();return o(c,()=>r.t("config.config")),c})(),(()=>{const c=qe();return o(c,i(L,{each:d,children:(l,s)=>(()=>{const u=Ae(),m=u.firstChild,g=m.firstChild;return m.$$click=()=>p(s),o(g,()=>l.icon()),o(m,()=>l.name(),null),u})()})),c})()]},keyed:!0,children:c=>(()=>{const l=Ke(),s=l.firstChild,u=s.firstChild,m=u.firstChild,g=s.nextSibling;return u.$$click=()=>p(null),o(m,i(J,{})),o(g,()=>c.render()),l})()})),t}})};D(["click"]);export{ct as default};
//# sourceMappingURL=Config-3RB6b2Xk.js.map
