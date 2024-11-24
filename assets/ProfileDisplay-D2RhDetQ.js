import{s as R,t as s,O as j,x as ve,r as _,j as ee,k as ke,y as $e,u as _e,c as B,q as xe,a as r,h,f as O,i as l,S as T,M as v,b as Z,n as Ce,d as Pe,a8 as Me,aq as Fe,v as Se,ao as qe,al as Ee}from"./index-D4rlBdmA.js";import{g as Te,B as Le,h as Ue,i as ze}from"./EventDisplay-BghPxZj5.js";import{T as Ne,n as te,o as Be,a as Re,b as je,e as Qe,G as Ae,g as De,q as Ke,f as J}from"./SideBar-BwiLmxZz.js";import{q as He,u as W,a as Ve,L as Ge,T as Ie,f as Oe}from"./useFollowings-DcA-bB7Q.js";import{B as Ze}from"./BasicModal-C_G8562S.js";import Je from"./EventDebugModal-JSJ3tAmt.js";import We from"./UserList-Cba2xL_1.js";import Xe from"./ZapRequestModal-d0L2Ir4t.js";import{S as Ye}from"./SafeLink-ClHl6evK.js";import{u as ne}from"./useSubscription-By50DZEA.js";import"./url-DPIb-kBm.js";import"./resolveAsset-bHAmz6KM.js";import"./Copy-B3RksWub.js";import"./lud16ToLnurlPayUrl-Pi3NwIPH.js";import"./_baseClone-CIiNAFIz.js";const et=s('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),tt=(t={})=>(()=>{const e=et();return R(e,t,!0),e})(),nt=s('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"clip-rule=evenodd>'),rt=(t={})=>(()=>{const e=nt();return R(e,t,!0),e})(),lt=s('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"clip-rule=evenodd>'),ot=(t={})=>(()=>{const e=lt();return R(e,t,!0),e})(),st=t=>({kind:j,pubkey:t,created_at:te(),content:"",tags:[]}),it=({pubkey:t,updatedTags:e,content:u})=>({kind:j,pubkey:t,created_at:te(),tags:e,content:u}),re=(t,e)=>it({pubkey:t.pubkey,content:t.content,updatedTags:e(t.tags)}),at=(t,e)=>new Ne(t.tags).taggedPubkeys().includes(e)?t:re(t,c=>[...c,["p",e]]),ut=(t,e)=>re(t,c=>c.filter(([y,k])=>!(y==="p"&&k===e))),ct=t=>{const e=ve(),u=_(t),{mutation:c,wrapMutate:y}=Be(()=>({mutationKey:["useFollowingsMutation",u().pubkey],onSuccess:b=>{const{pubkey:$}=u();if($!=null){const L=He({pubkey:$});e.invalidateQueries({queryKey:L}).catch(x=>console.error("failed to invalidate followings",x))}u().onSuccess?.(b)},onError:b=>{u().onError?.(b)}})),k=y(at),w=y(ut);return{mutation:c,follow:k,unfollow:w}};var le=/^(?:([\w.+-]+)@)?([\w_-]+(\.[\w_-]+)+)$/,oe;try{oe=fetch}catch{}async function dt(t){const e=t.match(le);if(!e)return null;const[,u="_",c]=e;try{const y=`https://${c}/.well-known/nostr.json?name=${u}`,k=await oe(y,{redirect:"manual"});if(k.status!==200)throw Error("Wrong response code");const w=await k.json(),b=w.names[u];return b?{pubkey:b,relays:w.relays?.[b]}:null}catch{return null}}const pt=t=>{if(t==null||t.length===0)return null;const e=t.match(le);if(e==null)return null;const[,u,c]=e;return u==null||u==="_"?{user:"_",domain:c,ident:c}:{user:u,domain:c,ident:t}};function ft(t){const{config:e}=ee(),u=_(t),{events:c}=ne(()=>({relayUrls:e().relayUrls,filters:[{kinds:[j],"#p":[u().pubkey]}],limit:1e6,eoseLimit:1e6,continuous:!1})),y=()=>ke(c()?.map(w=>w.pubkey));return{followersPubkeys:y,count:()=>y().length}}const mt=t=>{const e=_(t),u=()=>["useVerification",e()],c=$e(()=>({queryKey:u(),queryFn:({queryKey:k})=>{const[,w]=k;if(w==null)return Promise.resolve(null);const{nip05:b}=w;return dt(b)},staleTime:30*60*1e3,gcTime:24*60*60*1e3}));return{verification:()=>c?.data??null,query:c}},gt=s('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-primary-fg sm:w-20">'),X=s('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),ht=s('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-primary-fg hover:bg-primary-hover sm:w-36">'),yt=s('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-primary-hover hover:text-primary-hover">'),Y=s('<div class="shrink-0 text-xs">'),wt=s('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1"><button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-primary-hover hover:text-primary-hover"></button><button type=button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-primary-hover hover:text-primary-hover">'),bt=s('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="size-28 overflow-hidden rounded-lg shadow-md">'),vt=s('<div class="truncate text-xl font-bold">'),kt=s('<div class="truncate text-xs">@'),$t=s('<span class="inline-block size-3">'),_t=s('<span class="inline-block size-4 text-link">'),xt=s('<div class="flex items-center text-xs">'),Ct=s('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),Pt=s('<div class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),Mt=s('<div class="flex border-t border-border px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),Ft=s('<ul class="border-t border-border px-5 py-2 text-xs">'),St=s('<ul class="border-t border-border p-1">'),qt=s('<div class="h-12 shrink-0">'),Et=s('<div class="h-40 w-full shrink-0 sm:h-52"><img alt=header class="size-full object-cover">'),Tt=s('<img alt="user icon"class="size-full object-cover">'),Lt=s('<span class="inline-block size-4 text-danger">'),Ut=s('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),zt=s("<span class=text-sm>"),Nt=s('<button class="text-sm hover:text-fg-secondary">'),Bt=s('<li class="flex items-center gap-1"><span class="inline-block size-4"area-label=website title=website>'),Rt=t=>{const{count:e}=ft(()=>({pubkey:t.pubkey}));return _(e)},en=t=>{const e=_e(),{config:u,addMutedPubkey:c,removeMutedPubkey:y,isPubkeyMuted:k,saveColumn:w}=ee(),b=Re(),$=je(),{showProfileEdit:L}=De(),x=_(()=>Ke(t.pubkey)),[se,Q]=B(!1),[ie,ae]=B(!1),[U,P]=B(null),z=()=>P(null),{profile:p,event:ue,query:M}=Qe(()=>({pubkey:t.pubkey})),{verification:ce,query:de}=mt(()=>J([p()?.nip05])(([n])=>({nip05:n}))),pe=()=>pt(p()?.nip05),fe=()=>ce()?.pubkey===t.pubkey,A=()=>k(t.pubkey),me=_(()=>{const n=ue(),o=p()?.about;if(n==null||o==null)return;const a=Me(o);return Fe(a,Se(n))}),{followingPubkeys:ge,query:D}=W(()=>J([$()])(([n])=>({pubkey:n}))),F=()=>ge().includes(t.pubkey),{followingPubkeys:N,query:K}=W(()=>({pubkey:t.pubkey})),he=()=>{const n=$();return n!=null&&N().includes(n)},{mutation:S,follow:ye,unfollow:we}=ct(()=>({pubkey:$()})),H=async n=>{try{const o=$();if(o==null||S.isPending)return;const a=await Oe({pubkey:o});if((a.data()==null||a.followingPubkeys().length===0)&&!window.confirm(e.t("profile.confirmUpdateEvenIfEmpty")))return;if((a?.data()?.created_at??0)<(D.data?.created_at??0)){window.alert(e.t("profile.failedToFetchLatestFollowList"));return}const m=a.data()??st(o);await n(m)}catch(o){console.error("failed to update contact list",o),window.alert(e.t("profile.failedToUpdateFollowList"))}},V=()=>{H(n=>ye(n,t.pubkey)).catch(n=>{console.log("failed to follow",n)})},G=()=>{window.confirm(e.t("profile.confirmUnfollow"))&&H(n=>we(n,t.pubkey)).catch(n=>{console.log("failed to unfollow",n)})},q=Te(()=>({menu:[{content:e.t("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(x()).catch(n=>window.alert(n))}},{content:e.t("profile.showJSON"),onSelect:()=>{P("EventDebugModal")}},{content:e.t("profile.addColumn"),items:[{content:e.t("profile.addUserColumn"),onSelect:()=>{const n=p()?.name??x();w(qe({name:n,pubkey:t.pubkey})),b({command:"moveToLastColumn"}).catch(o=>console.error(o)),t.onClose?.()}},{content:e.t("profile.addUserHomeColumn"),onSelect:()=>{const n=`${e.t("column.home")} / ${p()?.name??x()}`;w(Ee({name:n,pubkey:t.pubkey})),b({command:"moveToLastColumn"}).catch(o=>console.error(o)),t.onClose?.()}}]},{content:A()?e.t("profile.unmute"):e.t("profile.mute"),onSelect:()=>{A()?y(t.pubkey):c(t.pubkey)}},{when:()=>t.pubkey===$(),content:F()?e.t("profile.unfollowMyself"):e.t("profile.followMyself"),onSelect:()=>{F()?G():V()}}]})),E=Ve(()=>({duration:null})),{events:I,eose:be}=ne(()=>({relayUrls:u().relayUrls,filters:[{kinds:[1,6],authors:[t.pubkey],limit:10,since:E.since(),until:E.until()}],eoseLimit:10,continuous:!1}));return xe(()=>E.setEvents(I())),r(Ze,{onClose:()=>t.onClose?.(),get children(){return[r(h,{get when(){return _(()=>!!M.isFetched)()&&p()?.banner},get fallback(){return qt()},keyed:!0,children:n=>(()=>{const o=Et(),a=o.firstChild;return O(a,"src",n),o})()}),(()=>{const n=bt(),o=n.firstChild,a=o.firstChild;return l(a,r(h,{get when(){return _(()=>!!M.isFetched)()&&p()?.picture},keyed:!0,children:m=>(()=>{const g=Tt();return O(g,"src",m),g})()})),l(n,r(h,{get when(){return $()!=null},get children(){const m=wt(),g=m.firstChild,d=g.firstChild,f=d.nextSibling;l(g,r(T,{get children(){return[r(v,{get when(){return t.pubkey===$()},get children(){const i=gt();return i.$$click=()=>L(),l(i,()=>e.t("profile.editProfile")),i}}),r(v,{get when(){return S.isPending},get children(){const i=X();return l(i,()=>e.t("general.updating")),i}}),r(v,{get when(){return D.isPending},get children(){const i=X();return l(i,()=>e.t("general.loading")),i}}),r(v,{get when(){return F()},get children(){const i=ht();return i.$$click=()=>G(),i.addEventListener("mouseleave",()=>Q(!1)),i.addEventListener("mouseenter",()=>Q(!0)),l(i,r(h,{get when(){return!se()},get fallback(){return e.t("profile.unfollow")},get children(){return e.t("profile.followingCurrently")}})),Z(()=>i.disabled=S.isPending),i}}),r(v,{get when(){return!F()},get children(){const i=yt();return i.$$click=()=>V(),l(i,()=>e.t("profile.follow")),Z(()=>i.disabled=S.isPending),i}})]}}),d),d.$$click=()=>P("ZapRequest"),l(d,r(Le,{})),f.$$click=()=>q.open();const C=q.targetRef;return typeof C=="function"?Ce(C,f):q.targetRef=f,l(f,r(Ue,{})),l(g,()=>q.popup(),null),l(m,r(T,{get children(){return[r(v,{get when(){return K.isPending},get children(){const i=Y();return l(i,()=>e.t("general.loading")),i}}),r(v,{get when(){return he()},get children(){const i=Y();return l(i,()=>e.t("profile.followsYou")),i}})]}}),null),m}}),null),n})(),(()=>{const n=Ct(),o=n.firstChild,a=o.firstChild,m=a.nextSibling,g=m.firstChild;return l(o,r(h,{get when(){return M.isPending},get children(){return e.t("general.loading")}}),a),l(o,r(h,{get when(){return(p()?.display_name?.length??0)>0},get children(){const d=vt();return l(d,()=>p()?.display_name),d}}),a),l(a,r(h,{get when(){return(p()?.name?.length??0)>0},get children(){const d=kt();return d.firstChild,l(d,()=>p()?.name,null),d}}),null),l(a,r(h,{get when(){return(p()?.nip05?.length??0)>0},get children(){const d=xt();return l(d,()=>pe()?.ident,null),l(d,r(T,{get fallback(){return(()=>{const f=Lt();return l(f,r(ot,{})),f})()},get children(){return[r(v,{get when(){return de.isPending},get children(){const f=$t();return l(f,r(tt,{})),f}}),r(v,{get when(){return fe()},get children(){const f=_t();return l(f,r(rt,{})),f}})]}}),null),d}}),null),l(g,x),n})(),r(h,{get when(){return me()},keyed:!0,children:n=>(()=>{const o=Ut();return l(o,r(ze,{parsed:n,embedding:!1,initialHidden:!0})),o})()}),(()=>{const n=Mt(),o=n.firstChild,a=o.firstChild,m=a.nextSibling;return o.$$click=()=>P("Following"),l(a,()=>e.t("profile.following")),l(m,r(h,{get when(){return K.isFetched},get fallback(){return(()=>{const g=zt();return l(g,()=>e.t("general.loading")),g})()},get children(){return N().length}})),l(n,r(h,{get when(){return!u().hideCount},get children(){const g=Pt(),d=g.firstChild,f=d.nextSibling;return l(d,()=>e.t("profile.followers")),l(f,r(h,{get when(){return ie()},get fallback(){return(()=>{const C=Nt();return C.$$click=()=>ae(!0),l(C,()=>e.t("profile.loadFollowers")),C})()},keyed:!0,get children(){return r(Rt,{get pubkey(){return t.pubkey}})}})),g}}),null),n})(),r(h,{get when(){return(p()?.website??"").length>0},get children(){const n=Ft();return l(n,r(h,{get when(){return p()?.website},keyed:!0,children:o=>(()=>{const a=Bt(),m=a.firstChild;return l(m,r(Ae,{})),l(a,r(Ye,{class:"text-link underline",href:o}),null),a})()})),n}}),r(T,{get children(){return[r(v,{get when(){return U()==="Following"},get children(){return r(We,{get data(){return N()},pubkeyExtractor:n=>n,onClose:z})}}),r(v,{get when(){return U()==="EventDebugModal"&&M.data},keyed:!0,children:n=>r(Je,{event:n,get extra(){return JSON.stringify(p(),null,2)},onClose:z})}),r(v,{get when(){return U()==="ZapRequest"},get children(){return r(Xe,{get zapTo(){return{pubkey:t.pubkey}},onClose:z})}})]}}),(()=>{const n=St();return l(n,r(Ge,{loadMore:E,get eose(){return be()},get children(){return r(Ie,{get events(){return I()}})}})),n})()]}})};Pe(["click"]);export{en as default};
//# sourceMappingURL=ProfileDisplay-D2RhDetQ.js.map
