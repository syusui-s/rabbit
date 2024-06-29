import{s as R,t as s,j as Y,v as _,W as be,k as ve,z as $e,u as ke,c as q,a8 as _e,r as xe,a as n,h as m,f as K,i as l,S as U,M as w,b as Z,n as Ce,d as Pe,a9 as Me,ar as Fe,w as Se,ap as Ee,am as Le}from"./index-BagjpV_J.js";import{u as ee,d as J,k as Te,e as qe,B as Ue,l as ze,m as Ne,L as Be,T as Re,n as je}from"./useFollowings-tt2KqrOM.js";import{a as Ae,b as Qe,d as De,G as He,f as Ve,n as Ge,e as O,t as Ie,m as Ke}from"./SideBar-DrC30OoQ.js";import{B as Ze}from"./BasicModal-CMJm2Adz.js";import Je from"./EventDebugModal-ZzQc7GFX.js";import Oe from"./UserList-DnrOB0jL.js";import We from"./ZapRequestModal-gwTJt-8G.js";import{S as Xe}from"./SafeLink-CmRbGOrK.js";import"./LazyLoad-CAPhtYMz.js";import"./url-BOMIwtgZ.js";import"./resolveAsset-DUlKKrKu.js";import"./Copy-DNxU78fB.js";import"./lud16ToLnurlPayUrl-DvbkmsxN.js";import"./_baseClone-BSXpKdAT.js";const Ye=s('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),et=(r={})=>(()=>{const t=Ye();return R(t,r,!0),t})(),tt=s('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"clip-rule=evenodd>'),nt=(r={})=>(()=>{const t=tt();return R(t,r,!0),t})(),rt=s('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"clip-rule=evenodd>'),lt=(r={})=>(()=>{const t=rt();return R(t,r,!0),t})();var te=/^(?:([\w.+-]+)@)?([\w_-]+(\.[\w_-]+)+)$/,ne;try{ne=fetch}catch{}async function ot(r){const t=r.match(te);if(!t)return null;const[g,h="_",$]=t;try{const k=`https://${$}/.well-known/nostr.json?name=${h}`,y=await(await ne(k,{redirect:"error"})).json();let b=y.names[h];return b?{pubkey:b,relays:y.relays?.[b]}:null}catch{return null}}const st=r=>{if(r==null||r.length===0)return null;const t=r.match(te);if(t==null)return null;const[,g,h]=t;return g==null||g==="_"?{user:"_",domain:h,ident:h}:{user:g,domain:h,ident:r}};function it(r){const{config:t}=Y(),g=_(r),{events:h}=ee(()=>({relayUrls:t().relayUrls,filters:[{kinds:[be],"#p":[g().pubkey]}],limit:1e6,eoseLimit:1e6,continuous:!1})),$=()=>ve(h()?.map(y=>y.pubkey));return{followersPubkeys:$,count:()=>$().length}}const at=r=>{const t=_(r),g=()=>["useVerification",t()],h=$e(()=>({queryKey:g(),queryFn:({queryKey:k})=>{const[,y]=k;if(y==null)return Promise.resolve(null);const{nip05:b}=y;return ot(b)},staleTime:30*60*1e3,gcTime:24*60*60*1e3}));return{verification:()=>h?.data??null,query:h}},ct=s('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-primary-fg sm:w-20">'),W=s('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),ut=s('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-primary-fg hover:bg-primary-hover sm:w-36">'),dt=s('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-primary-hover hover:text-primary-hover">'),X=s('<div class="shrink-0 text-xs">'),ft=s('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1"><button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-primary-hover hover:text-primary-hover"></button><button type=button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-primary-hover hover:text-primary-hover">'),pt=s('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="size-28 overflow-hidden rounded-lg shadow-md">'),mt=s('<div class="truncate text-xl font-bold">'),ht=s('<div class="truncate text-xs">@'),gt=s('<span class="inline-block size-3">'),wt=s('<span class="inline-block size-4 text-link">'),yt=s('<div class="flex items-center text-xs">'),bt=s('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),vt=s('<div class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),$t=s('<div class="flex border-t border-border px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),kt=s('<ul class="border-t border-border px-5 py-2 text-xs">'),_t=s('<ul class="border-t border-border p-1">'),xt=s('<div class="h-12 shrink-0">'),Ct=s('<div class="h-40 w-full shrink-0 sm:h-52"><img alt=header class="size-full object-cover">'),Pt=s('<img alt="user icon"class="size-full object-cover">'),Mt=s('<span class="inline-block size-4 text-danger">'),Ft=s('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),St=s("<span class=text-sm>"),Et=s('<button class="text-sm hover:text-fg-secondary">'),Lt=s('<li class="flex items-center gap-1"><span class="inline-block size-4"area-label=website title=website>'),Tt=r=>{const{count:t}=it(()=>({pubkey:r.pubkey}));return _(t)},Kt=r=>{const t=ke(),{config:g,addMutedPubkey:h,removeMutedPubkey:$,isPubkeyMuted:k,saveColumn:y}=Y(),b=Ae(),re=Ke(),x=Qe(),{showProfileEdit:le}=Ve(),C=_(()=>Ge(r.pubkey)),[oe,j]=q(!1),[se,A]=q(!1),[ie,ae]=q(!1),[z,P]=q(null),N=()=>P(null),{profile:p,event:ce,query:M}=De(()=>({pubkey:r.pubkey})),{verification:ue,query:de}=at(()=>O([p()?.nip05])(([e])=>({nip05:e}))),fe=()=>st(p()?.nip05),pe=()=>ue()?.pubkey===r.pubkey,Q=()=>k(r.pubkey),me=_(()=>{const e=ce(),o=p()?.about;if(e==null||o==null)return;const a=Me(o);return Fe(a,Se(e))}),{followingPubkeys:he,invalidateFollowings:ge,query:F}=J(()=>O([x()])(([e])=>({pubkey:e}))),S=()=>he().includes(r.pubkey),{followingPubkeys:B,query:D}=J(()=>({pubkey:r.pubkey})),we=()=>{const e=x();return e!=null&&B().includes(e)},E=_e(()=>({mutationKey:["updateContacts"],mutationFn:(...e)=>re.updateContacts(...e).then(o=>Promise.allSettled(o.map(Ie(5e3)))),onSuccess:e=>{const o=e.filter(u=>u.status==="fulfilled").length,a=e.length-o;o===e.length?console.log("succeeded to update contacts"):o>0?console.log(`succeeded to update contacts for ${o} relays but failed for ${a} relays`):console.error("failed to update contacts")},onError:e=>{console.error("failed to update contacts: ",e)},onSettled:()=>{ge().then(()=>F.refetch()).catch(e=>console.error("failed to refetch contacts",e))}})),H=async(e,o)=>{try{const a=x();if(a==null)return;j(!0);const u=await je({pubkey:a});if((u.data()==null||u.followingPubkeys().length===0)&&!window.confirm(t.t("profile.confirmUpdateEvenIfEmpty")))return;if((u?.data()?.created_at??0)<(F.data?.created_at??0)){window.alert(t.t("profile.failedToFetchLatestFollowList"));return}const d=u.data()?.tags??[];let c;switch(e){case"follow":c=[...d,["p",o]];break;case"unfollow":c=d.filter(([f,v])=>!(f==="p"&&v===o));break;default:console.error("updateContacts: invalid operation",e);return}await E.mutateAsync({relayUrls:g().relayUrls,pubkey:a,updatedTags:c,content:u.data()?.content??""})}catch(a){console.error("failed to update contact list",a),window.alert(t.t("profile.failedToUpdateFollowList"))}finally{j(!1)}},V=()=>{H("follow",r.pubkey).catch(e=>{console.log("failed to follow",e)})},G=()=>{window.confirm(t.t("profile.confirmUnfollow"))&&H("unfollow",r.pubkey).catch(e=>{console.log("failed to unfollow",e)})},L=Te(()=>({menu:[{content:t.t("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(C()).catch(e=>window.alert(e))}},{content:t.t("profile.showJSON"),onSelect:()=>{P("EventDebugModal")}},{content:t.t("profile.addColumn"),items:[{content:t.t("profile.addUserColumn"),onSelect:()=>{const e=p()?.name??C();y(Ee({name:e,pubkey:r.pubkey})),b({command:"moveToLastColumn"}).catch(o=>console.error(o)),r.onClose?.()}},{content:t.t("profile.addUserHomeColumn"),onSelect:()=>{const e=`${t.t("column.home")} / ${p()?.name??C()}`;y(Le({name:e,pubkey:r.pubkey})),b({command:"moveToLastColumn"}).catch(o=>console.error(o)),r.onClose?.()}}]},{content:Q()?t.t("profile.unmute"):t.t("profile.mute"),onSelect:()=>{Q()?$(r.pubkey):h(r.pubkey)}},{when:()=>r.pubkey===x(),content:S()?t.t("profile.unfollowMyself"):t.t("profile.followMyself"),onSelect:()=>{S()?G():V()}}]})),T=qe(()=>({duration:null})),{events:I,eose:ye}=ee(()=>({relayUrls:g().relayUrls,filters:[{kinds:[1,6],authors:[r.pubkey],limit:10,since:T.since(),until:T.until()}],eoseLimit:10,continuous:!1}));return xe(()=>T.setEvents(I())),n(Ze,{onClose:()=>r.onClose?.(),get children(){return[n(m,{get when(){return _(()=>!!M.isFetched)()&&p()?.banner},get fallback(){return xt()},keyed:!0,children:e=>(()=>{const o=Ct(),a=o.firstChild;return K(a,"src",e),o})()}),(()=>{const e=pt(),o=e.firstChild,a=o.firstChild;return l(a,n(m,{get when(){return _(()=>!!M.isFetched)()&&p()?.picture},keyed:!0,children:u=>(()=>{const d=Pt();return K(d,"src",u),d})()})),l(e,n(m,{get when(){return x()!=null},get children(){const u=ft(),d=u.firstChild,c=d.firstChild,f=c.nextSibling;l(d,n(U,{get children(){return[n(w,{get when(){return r.pubkey===x()},get children(){const i=ct();return i.$$click=()=>le(),l(i,()=>t.t("profile.editProfile")),i}}),n(w,{get when(){return E.isPending||oe()},get children(){const i=W();return l(i,()=>t.t("general.updating")),i}}),n(w,{get when(){return F.isPending||F.isFetching},get children(){const i=W();return l(i,()=>t.t("general.loading")),i}}),n(w,{get when(){return S()},get children(){const i=ut();return i.$$click=()=>G(),i.addEventListener("mouseleave",()=>A(!1)),i.addEventListener("mouseenter",()=>A(!0)),l(i,n(m,{get when(){return!se()},get fallback(){return t.t("profile.unfollow")},get children(){return t.t("profile.followingCurrently")}})),Z(()=>i.disabled=E.isPending),i}}),n(w,{get when(){return!S()},get children(){const i=dt();return i.$$click=()=>V(),l(i,()=>t.t("profile.follow")),Z(()=>i.disabled=E.isPending),i}})]}}),c),c.$$click=()=>P("ZapRequest"),l(c,n(Ue,{})),f.$$click=()=>L.open();const v=L.targetRef;return typeof v=="function"?Ce(v,f):L.targetRef=f,l(f,n(ze,{})),l(d,()=>L.popup(),null),l(u,n(U,{get children(){return[n(w,{get when(){return D.isPending},get children(){const i=X();return l(i,()=>t.t("general.loading")),i}}),n(w,{get when(){return we()},get children(){const i=X();return l(i,()=>t.t("profile.followsYou")),i}})]}}),null),u}}),null),e})(),(()=>{const e=bt(),o=e.firstChild,a=o.firstChild,u=a.nextSibling,d=u.firstChild;return l(o,n(m,{get when(){return M.isPending},get children(){return t.t("general.loading")}}),a),l(o,n(m,{get when(){return(p()?.display_name?.length??0)>0},get children(){const c=mt();return l(c,()=>p()?.display_name),c}}),a),l(a,n(m,{get when(){return(p()?.name?.length??0)>0},get children(){const c=ht();return c.firstChild,l(c,()=>p()?.name,null),c}}),null),l(a,n(m,{get when(){return(p()?.nip05?.length??0)>0},get children(){const c=yt();return l(c,()=>fe()?.ident,null),l(c,n(U,{get fallback(){return(()=>{const f=Mt();return l(f,n(lt,{})),f})()},get children(){return[n(w,{get when(){return de.isPending},get children(){const f=gt();return l(f,n(et,{})),f}}),n(w,{get when(){return pe()},get children(){const f=wt();return l(f,n(nt,{})),f}})]}}),null),c}}),null),l(d,C),e})(),n(m,{get when(){return me()},keyed:!0,children:e=>(()=>{const o=Ft();return l(o,n(Ne,{parsed:e,embedding:!1,initialHidden:!0})),o})()}),(()=>{const e=$t(),o=e.firstChild,a=o.firstChild,u=a.nextSibling;return o.$$click=()=>P("Following"),l(a,()=>t.t("profile.following")),l(u,n(m,{get when(){return D.isFetched},get fallback(){return(()=>{const d=St();return l(d,()=>t.t("general.loading")),d})()},get children(){return B().length}})),l(e,n(m,{get when(){return!g().hideCount},get children(){const d=vt(),c=d.firstChild,f=c.nextSibling;return l(c,()=>t.t("profile.followers")),l(f,n(m,{get when(){return ie()},get fallback(){return(()=>{const v=Et();return v.$$click=()=>ae(!0),l(v,()=>t.t("profile.loadFollowers")),v})()},keyed:!0,get children(){return n(Tt,{get pubkey(){return r.pubkey}})}})),d}}),null),e})(),n(m,{get when(){return(p()?.website??"").length>0},get children(){const e=kt();return l(e,n(m,{get when(){return p()?.website},keyed:!0,children:o=>(()=>{const a=Lt(),u=a.firstChild;return l(u,n(He,{})),l(a,n(Xe,{class:"text-link underline",href:o}),null),a})()})),e}}),n(U,{get children(){return[n(w,{get when(){return z()==="Following"},get children(){return n(Oe,{get data(){return B()},pubkeyExtractor:e=>e,onClose:N})}}),n(w,{get when(){return z()==="EventDebugModal"&&M.data},keyed:!0,children:e=>n(Je,{event:e,get extra(){return JSON.stringify(p(),null,2)},onClose:N})}),n(w,{get when(){return z()==="ZapRequest"},get children(){return n(We,{get zapTo(){return{pubkey:r.pubkey}},onClose:N})}})]}}),(()=>{const e=_t();return l(e,n(Be,{loadMore:T,get eose(){return ye()},get children(){return n(Re,{get events(){return I()}})}})),e})()]}})};Pe(["click"]);export{Kt as default};
//# sourceMappingURL=ProfileDisplay-BJ47aOs9.js.map