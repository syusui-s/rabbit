import{s as j,t as a,k as Y,w as $,X as ge,l as he,A as ye,u as we,c as T,a8 as be,a as n,j as h,g as O,i as r,f as U,M as y,b as V,n as ve,S as $e,d as ke,aa as xe,al as _e,x as Ce,aj as Pe,ag as Fe}from"./index-kaOe1-Is.js";import{u as W,d as G,j as Me,k as Se,l as Ee,T as Te,m as Ue}from"./useFollowings-iSR8ogh_.js";import{G as qe}from"./globe-alt-cuNxk1JV.js";import{B as Le}from"./BasicModal-X_2hhrYx.js";import je from"./EventDebugModal-pQzUKOPT.js";import Ne from"./UserList-K5Pm0ybz.js";import{a as ze,b as Ae,d as Be,g as Re,n as Qe,f as K,t as De,e as He,j as Ie}from"./SideBar-oFy0ciTh.js";import"./LazyLoad-p1kbwslQ.js";import"./resolveAsset-YHvJGZge.js";const Oe=a('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),Ve=(l={})=>(()=>{const t=Oe();return j(t,l,!0,!0),t})(),Ge=a('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"clip-rule=evenodd>'),Ke=(l={})=>(()=>{const t=Ge();return j(t,l,!0,!0),t})(),Je=a('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"clip-rule=evenodd>'),Xe=(l={})=>(()=>{const t=Je();return j(t,l,!0,!0),t})();function Ye(l){const{config:t}=Y(),g=$(l),{events:f}=W(()=>({relayUrls:t().relayUrls,filters:[{kinds:[ge],"#p":[g().pubkey]}],limit:1e6,continuous:!1})),w=()=>he(f()?.map(b=>b.pubkey));return{followersPubkeys:w,count:()=>w().length}}var We=/^(?:([\w.+-]+)@)?([\w.-]+)$/,Z;try{Z=fetch}catch{}async function Ze(l){const t=l.match(We);if(!t)return null;const[g,f="_",w]=t;try{const v=await Z(`https://${w}/.well-known/nostr.json?name=${f}`),{names:b,relays:k}=et(await v.json()),_=b[f];return _?{pubkey:_,relays:k?.[_]}:null}catch{return null}}function et(l){const t={names:{}};for(const[g,f]of Object.entries(l.names))typeof g=="string"&&typeof f=="string"&&(t.names[g]=f);if(l.relays){t.relays={};for(const[g,f]of Object.entries(l.relays))typeof g=="string"&&Array.isArray(f)&&(t.relays[g]=f.filter(w=>typeof w=="string"))}return t}const tt=l=>{const t=$(l),g=()=>["useVerification",t()],f=ye(()=>({queryKey:g(),queryFn:({queryKey:v})=>{const[,b]=v;if(b==null)return Promise.resolve(null);const{nip05:k}=b;return Ze(k)},staleTime:30*60*1e3,gcTime:24*60*60*1e3}));return{verification:()=>f?.data??null,query:f}},nt=a('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-primary-fg sm:w-20">'),J=a('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),lt=a('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-primary-fg hover:bg-primary-hover sm:w-36">'),rt=a('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-primary-hover hover:text-primary-hover">'),X=a('<div class="shrink-0 text-xs">'),ot=a('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1"><button type=button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-primary-hover hover:text-primary-hover">'),st=a('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="size-28 overflow-hidden rounded-lg shadow-md">'),it=a('<div class="truncate text-xl font-bold">'),at=a('<div class="truncate text-xs">@'),ct=a('<span class="inline-block size-3">'),ut=a('<span class="inline-block size-4 text-link">'),dt=a('<div class="flex items-center text-xs">'),ft=a('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),pt=a('<div class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),mt=a('<div class="flex border-t border-border px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),gt=a('<ul class="border-t border-border px-5 py-2 text-xs">'),ht=a('<ul class="border-t border-border p-1">'),yt=a('<div class="h-12 shrink-0">'),wt=a('<div class="h-40 w-full shrink-0 sm:h-52"><img alt=header class="size-full object-cover">'),bt=a('<img alt="user icon"class="size-full object-cover">'),vt=a('<span class="inline-block size-4 text-danger">'),$t=a('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),kt=a("<span class=text-sm>"),xt=a('<button class="text-sm hover:text-fg-secondary">'),_t=a('<li class="flex items-center gap-1"><span class="inline-block size-4"area-label=website title=website>'),Ct=l=>{const{count:t}=Ye(()=>({pubkey:l.pubkey}));return $(t)},jt=l=>{const t=we(),{config:g,addMutedPubkey:f,removeMutedPubkey:w,isPubkeyMuted:v,saveColumn:b}=Y(),k=ze(),_=Ie(),x=Ae(),{showProfileEdit:ee}=Re(),C=$(()=>Qe(l.pubkey)),[te,N]=T(!1),[ne,z]=T(!1),[le,re]=T(!1),[A,q]=T(null),B=()=>q(null),{profile:p,event:oe,query:P}=Be(()=>({pubkey:l.pubkey})),{verification:se,query:ie}=tt(()=>K([p()?.nip05])(([e])=>({nip05:e}))),ae=()=>{const e=p()?.nip05;if(e==null)return null;const[o,i]=e.split("@");return i==null?null:o==="_"?{domain:i,ident:i}:{user:o,domain:i,ident:e}},ce=()=>se()?.pubkey===l.pubkey,R=()=>v(l.pubkey),ue=$(()=>{const e=oe(),o=p()?.about;if(e==null||o==null)return;const i=xe(o);return _e(i,Ce(e))}),{followingPubkeys:de,invalidateFollowings:fe,query:F}=G(()=>K([x()])(([e])=>({pubkey:e}))),M=()=>de().includes(l.pubkey),{followingPubkeys:L,query:Q}=G(()=>({pubkey:l.pubkey})),pe=()=>{const e=x();return e!=null&&L().includes(e)},S=be(()=>({mutationKey:["updateContacts"],mutationFn:(...e)=>_.updateContacts(...e).then(o=>Promise.allSettled(o.map(De(5e3)))),onSuccess:e=>{const o=e.filter(u=>u.status==="fulfilled").length,i=e.length-o;o===e.length?console.log("succeeded to update contacts"):o>0?console.log(`succeeded to update contacts for ${o} relays but failed for ${i} relays`):console.error("failed to update contacts")},onError:e=>{console.error("failed to update contacts: ",e)},onSettled:()=>{fe().then(()=>F.refetch()).catch(e=>console.error("failed to refetch contacts",e))}})),D=async(e,o)=>{try{const i=x();if(i==null)return;N(!0);const u=await Ue({pubkey:i});if((u.data()==null||u.followingPubkeys().length===0)&&!window.confirm(t.t("profile.confirmUpdateEvenIfEmpty")))return;if((u?.data()?.created_at??0)<(F.data?.created_at??0)){window.alert(t.t("profile.failedToFetchLatestFollowList"));return}const d=u.data()?.tags??[];let c;switch(e){case"follow":c=[...d,["p",o]];break;case"unfollow":c=d.filter(([m,s])=>!(m==="p"&&s===o));break;default:console.error("updateContacts: invalid operation",e);return}await S.mutateAsync({relayUrls:g().relayUrls,pubkey:i,updatedTags:c,content:u.data()?.content??""})}catch(i){console.error("failed to update contact list",i),window.alert(t.t("profile.failedToUpdateFollowList"))}finally{N(!1)}},H=()=>{D("follow",l.pubkey).catch(e=>{console.log("failed to follow",e)})},I=()=>{window.confirm(t.t("profile.confirmUnfollow"))&&D("unfollow",l.pubkey).catch(e=>{console.log("failed to unfollow",e)})},E=Me(()=>({menu:[{content:t.t("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(C()).catch(e=>window.alert(e))}},{content:t.t("profile.showJSON"),onSelect:()=>{q("EventDebugModal")}},{content:t.t("profile.addColumn"),items:[{content:t.t("profile.addUserColumn"),onSelect:()=>{const e=p()?.name??C();b(Pe({name:e,pubkey:l.pubkey})),k({command:"moveToLastColumn"}).catch(o=>console.error(o)),l.onClose?.()}},{content:t.t("profile.addUserHomeColumn"),onSelect:()=>{const e=`${t.t("column.home")} / ${p()?.name??C()}`;b(Fe({name:e,pubkey:l.pubkey})),k({command:"moveToLastColumn"}).catch(o=>console.error(o)),l.onClose?.()}}]},{content:R()?t.t("profile.unmute"):t.t("profile.mute"),onSelect:()=>{R()?w(l.pubkey):f(l.pubkey)}},{when:()=>l.pubkey===x(),content:M()?t.t("profile.unfollowMyself"):t.t("profile.followMyself"),onSelect:()=>{M()?I():H()}}]})),{events:me}=W(()=>({relayUrls:g().relayUrls,filters:[{kinds:[1,6],authors:[l.pubkey],limit:10,until:He()}],continuous:!1}));return n(Le,{onClose:()=>l.onClose?.(),get children(){return[n(h,{get when(){return $(()=>!!P.isFetched)()&&p()?.banner},get fallback(){return yt()},keyed:!0,children:e=>(()=>{const o=wt(),i=o.firstChild;return O(i,"src",e),o})()}),(()=>{const e=st(),o=e.firstChild,i=o.firstChild;return r(i,n(h,{get when(){return $(()=>!!P.isFetched)()&&p()?.picture},keyed:!0,children:u=>(()=>{const d=bt();return O(d,"src",u),d})()})),r(e,n(h,{get when(){return x()!=null},get children(){const u=ot(),d=u.firstChild,c=d.firstChild;r(d,n(U,{get children(){return[n(y,{get when(){return l.pubkey===x()},get children(){const s=nt();return s.$$click=()=>ee(),r(s,()=>t.t("profile.editProfile")),s}}),n(y,{get when(){return S.isPending||te()},get children(){const s=J();return r(s,()=>t.t("general.updating")),s}}),n(y,{get when(){return F.isPending||F.isFetching},get children(){const s=J();return r(s,()=>t.t("general.loading")),s}}),n(y,{get when(){return M()},get children(){const s=lt();return s.$$click=()=>I(),s.addEventListener("mouseleave",()=>z(!1)),s.addEventListener("mouseenter",()=>z(!0)),r(s,n(h,{get when(){return!ne()},get fallback(){return t.t("profile.unfollow")},get children(){return t.t("profile.followingCurrently")}})),V(()=>s.disabled=S.isPending),s}}),n(y,{get when(){return!M()},get children(){const s=rt();return s.$$click=()=>H(),r(s,()=>t.t("profile.follow")),V(()=>s.disabled=S.isPending),s}})]}}),c),c.$$click=()=>E.open();const m=E.targetRef;return typeof m=="function"?ve(m,c):E.targetRef=c,r(c,n(Se,{})),r(d,()=>E.popup(),null),r(u,n(U,{get children(){return[n(y,{get when(){return Q.isPending},get children(){const s=X();return r(s,()=>t.t("general.loading")),s}}),n(y,{get when(){return pe()},get children(){const s=X();return r(s,()=>t.t("profile.followsYou")),s}})]}}),null),u}}),null),e})(),(()=>{const e=ft(),o=e.firstChild,i=o.firstChild,u=i.nextSibling,d=u.firstChild;return r(o,n(h,{get when(){return P.isPending},get children(){return t.t("general.loading")}}),i),r(o,n(h,{get when(){return(p()?.display_name?.length??0)>0},get children(){const c=it();return r(c,()=>p()?.display_name),c}}),i),r(i,n(h,{get when(){return(p()?.name?.length??0)>0},get children(){const c=at();return c.firstChild,r(c,()=>p()?.name,null),c}}),null),r(i,n(h,{get when(){return(p()?.nip05?.length??0)>0},get children(){const c=dt();return r(c,()=>ae()?.ident,null),r(c,n(U,{get fallback(){return(()=>{const m=vt();return r(m,n(Xe,{})),m})()},get children(){return[n(y,{get when(){return ie.isPending},get children(){const m=ct();return r(m,n(Ve,{})),m}}),n(y,{get when(){return ce()},get children(){const m=ut();return r(m,n(Ke,{})),m}})]}}),null),c}}),null),r(d,C),e})(),n(h,{get when(){return ue()},keyed:!0,children:e=>(()=>{const o=$t();return r(o,n(Ee,{parsed:e,embedding:!1,initialHidden:!0})),o})()}),(()=>{const e=mt(),o=e.firstChild,i=o.firstChild,u=i.nextSibling;return o.$$click=()=>q("Following"),r(i,()=>t.t("profile.following")),r(u,n(h,{get when(){return Q.isFetched},get fallback(){return(()=>{const d=kt();return r(d,()=>t.t("general.loading")),d})()},get children(){return L().length}})),r(e,n(h,{get when(){return!g().hideCount},get children(){const d=pt(),c=d.firstChild,m=c.nextSibling;return r(c,()=>t.t("profile.followers")),r(m,n(h,{get when(){return le()},get fallback(){return(()=>{const s=xt();return s.$$click=()=>re(!0),r(s,()=>t.t("profile.loadFollowers")),s})()},keyed:!0,get children(){return n(Ct,{get pubkey(){return l.pubkey}})}})),d}}),null),e})(),n(h,{get when(){return(p()?.website??"").length>0},get children(){const e=gt();return r(e,n(h,{get when(){return p()?.website},keyed:!0,children:o=>(()=>{const i=_t(),u=i.firstChild;return r(u,n(qe,{})),r(i,n($e,{class:"text-link underline",href:o}),null),i})()})),e}}),n(U,{get children(){return[n(y,{get when(){return A()==="Following"},get children(){return n(Ne,{get data(){return L()},pubkeyExtractor:e=>e,onClose:B})}}),n(y,{get when(){return A()==="EventDebugModal"&&P.data},keyed:!0,children:e=>n(je,{event:e,get extra(){return JSON.stringify(p(),null,2)},onClose:B})})]}}),(()=>{const e=ht();return r(e,n(Te,{get events(){return me()}})),e})()]}})};ke(["click"]);export{jt as default};
//# sourceMappingURL=ProfileDisplay-U6cEOVwa.js.map
