import{au as Pe,av as G,aw as Ce,ax as Fe,ay as ze,az as De,aA as Ge,aB as Ke,Y as Le,aC as Ee,aD as Me,aa as Xe,$ as Ae,u as je,j as Ze,c as m,a7 as qe,o as He,A as Je,a as _,i as s,h as O,b,f as Z,F as Ye,d as We,t as $}from"./index-gBQXoqr6.js";import{A as Qe}from"./arrow-left-E1DRPabd.js";import{_ as Ve,a as et,b as Oe,c as tt,d as rt}from"./_baseClone-KvY0kgwO.js";import{B as nt}from"./BasicModal-TUJbwvJt.js";import{b as lt,f as it,g as at,t as st,q as ot}from"./SideBar-rstwu1y8.js";import"./resolveAsset-t7wWHuXz.js";function dt(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var ct=dt;function ut(t,e,i){var o=-1,a=t.length;e<0&&(e=-e>a?0:a+e),i=i>a?a:i,i<0&&(i+=a),a=e>i?0:i-e>>>0,e>>>=0;for(var d=Array(a);++o<a;)d[o]=t[o+e];return d}var ft=ut,bt=Pe,gt=ft;function vt(t,e){return e.length<2?t:bt(t,gt(e,0,-1))}var pt=vt,mt=G,_t=ct,$t=pt,ht=Ce;function xt(t,e){return e=mt(e,t),t=$t(t,e),t==null||delete t[ht(_t(e))]}var yt=xt,wt=Fe,St=Ve,Pt=ze,Ct="[object Object]",Lt=Function.prototype,Et=Object.prototype,ke=Lt.toString,At=Et.hasOwnProperty,Ot=ke.call(Object);function kt(t){if(!Pt(t)||wt(t)!=Ct)return!1;var e=St(t);if(e===null)return!0;var i=At.call(e,"constructor")&&e.constructor;return typeof i=="function"&&i instanceof i&&ke.call(i)==Ot}var Rt=kt,Tt=Rt;function Nt(t){return Tt(t)?void 0:t}var It=Nt,Bt=De;function Ut(t){var e=t==null?0:t.length;return e?Bt(t,1):[]}var Ft=Ut,zt=Ft,Dt=Ge,Gt=Ke;function Kt(t){return Gt(Dt(t,void 0,zt),t+"")}var Mt=Kt,Xt=Ee,jt=tt,Zt=yt,qt=G,Ht=et,Jt=It,Yt=Mt,Wt=Oe,Qt=1,Vt=2,er=4,tr=Yt(function(t,e){var i={};if(t==null)return i;var o=!1;e=Xt(e,function(d){return d=qt(d,t),o||(o=d.length>1),d}),Ht(t,Wt(t),i),o&&(i=jt(i,Qt|Vt|er,Jt));for(var a=e.length;a--;)Zt(i,e[a]);return i}),rr=tr;const nr=Le(rr);var lr="Expected a function";function ir(t){if(typeof t!="function")throw new TypeError(lr);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var ar=ir,sr=rt,or=G,dr=Me,Se=Xe,cr=Ce;function ur(t,e,i,o){if(!Se(t))return t;e=or(e,t);for(var a=-1,d=e.length,g=d-1,c=t;c!=null&&++a<d;){var v=cr(e[a]),h=i;if(v==="__proto__"||v==="constructor"||v==="prototype")return t;if(a!=g){var y=c[v];h=o?o(y,v,c):void 0,h===void 0&&(h=Se(y)?y:dr(e[a+1])?[]:{})}sr(c,v,h),c=c[v]}return t}var fr=ur,br=Pe,gr=fr,vr=G;function pr(t,e,i){for(var o=-1,a=e.length,d={};++o<a;){var g=e[o],c=br(t,g);i(c,g)&&gr(d,vr(g,t),c)}return d}var mr=pr,_r=Ee,$r=Ae,hr=mr,xr=Oe;function yr(t,e){if(t==null)return{};var i=_r(xr(t),function(o){return[o]});return e=$r(e),hr(t,i,function(o,a){return e(o,a[0])})}var wr=yr,Sr=Ae,Pr=ar,Cr=wr;function Lr(t,e){return Cr(t,Pr(Sr(e)))}var Er=Lr;const Ar=Le(Er),Or=$('<div class="h-40 w-full shrink-0 sm:h-52"><img alt=header class="size-full object-cover">'),kr=$('<img alt="user icon"class="size-full rounded-lg object-cover">'),Rr=$('<div><div class="ml-4 mt-[-64px] size-28 rounded-lg shadow-md">'),Tr=$('<div class="px-4 pt-4">'),Nr=$("<div><span class=font-bold></span><div>"),Ir=$('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class=font-bold for=picture></label><input class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"type=text id=picture name=picture placeholder=https://....../picture.png></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=picture></label><input class="w-full rounded-md border-border bg-bg focus:border-border focus:ring-primary"type=text id=banner name=banner placeholder=https://....../banner.png></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"type=text id=name name=name maxlength=32 required></div></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><input class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"type=text name=displayName maxlength=32></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><textarea class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"name=about rows=5></textarea></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><input class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"type=text name=website placeholder=https://....../></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><input class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"type=text name=nip05 placeholder=yourname@domain.example.com></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><span class=text-xs></span><input class="w-full rounded-md border-border bg-bg ring-border focus:border-border focus:ring-primary"type=text name=website pattern=^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$ placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type=submit class="rounded p-2 font-bold text-primary-fg hover:bg-primary-hover"></button><button type=button class="rounded border border-primary p-2 font-bold text-primary hover:border-primary-hover hover:text-primary-hover">'),Br=$('<div class="h-24 shrink-0">'),Ur=$('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),Fr="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",zr="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",Dr=new RegExp(`^${Fr}$`),Re=new RegExp(`^${zr}$`),Gr=t=>Dr.test(t),Kr=t=>Re.test(t),Jr=t=>{const e=je(),i=lt(),{config:o}=Ze(),[a,d]=m(""),[g,c]=m(""),[v,h]=m(""),[y,q]=m(""),[H,J]=m(""),[Y,W]=m(""),[Q,V]=m(""),[S,K]=m(""),{profile:ee,invalidateProfile:Te,query:M}=it(()=>at([i()])(([n])=>({pubkey:n}))),{updateProfile:Ne}=ot(),w=qe(()=>({mutationKey:["updateProfile"],mutationFn:(...n)=>Ne(...n).then(l=>Promise.allSettled(l.map(st(1e4)))),onSuccess:n=>{const l=n.filter(f=>f.status==="fulfilled").length,u=n.length-l;l===n.length?window.alert(e.t("profile.edit.updateSucceeded")):l>0?window.alert(e.t("profile.edit.failedToUpdatePartially",{count:u})):window.alert(e.t("profile.edit.failedToUpdate")),Te().then(()=>M.refetch()).catch(f=>console.error(f)),t.onClose()},onError:n=>{console.error("failed to delete",n)}})),te=()=>M.isPending||w.isPending,p=()=>te(),X=()=>nr(ee(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Ie=n=>{n.preventDefault();const l=i();if(l==null)return;const u=Ar({picture:a(),banner:g(),name:v(),display_name:y(),about:H(),website:Y(),nip05:Q(),lud06:Gr(S())?S():null,lud16:Kr(S())?S():null},f=>f==null||f.length===0);w.mutate({relayUrls:o().relayUrls,pubkey:l,profile:u,otherProperties:X()})},x=n=>n.key==="Enter"&&n.preventDefault();return He(()=>{const n=ee();n!=null&&(M.refetch().catch(l=>console.error(l)),Je(()=>{d(l=>n.picture??l),c(l=>n.banner??l),h(l=>n.name??l),q(l=>n.display_name??l),J(l=>n.about??l),W(l=>n.website??l),V(l=>n.nip05??l),n.lud16!=null?K(n.lud16):n.lud06!=null&&K(n.lud06)}))}),_(nt,{closeButton:()=>_(Qe,{}),get onClose(){return t.onClose},get children(){return[(()=>{const n=Rr(),l=n.firstChild;return s(n,_(O,{get when(){return g().length>0},get fallback(){return Br()},keyed:!0,get children(){const u=Or(),f=u.firstChild;return b(()=>Z(f,"src",g())),u}}),l),s(l,_(O,{get when(){return a().length>0},get children(){const u=kr();return b(()=>Z(u,"src",a())),u}})),n})(),_(O,{get when(){return te()},get children(){const n=Tr();return s(n,()=>e.t("general.loading")),n}}),(()=>{const n=Ir(),l=n.firstChild,u=l.firstChild,f=u.firstChild,k=f.nextSibling,re=u.nextSibling,ne=re.firstChild,R=ne.nextSibling,le=re.nextSibling,ie=le.firstChild,Be=ie.nextSibling,Ue=Be.firstChild,T=Ue.nextSibling,ae=le.nextSibling,se=ae.firstChild,N=se.nextSibling,oe=ae.nextSibling,de=oe.firstChild,j=de.nextSibling,ce=oe.nextSibling,ue=ce.firstChild,I=ue.nextSibling,fe=ce.nextSibling,be=fe.firstChild,P=be.nextSibling,ge=fe.nextSibling,ve=ge.firstChild,pe=ve.nextSibling,B=pe.nextSibling,me=ge.nextSibling,C=me.firstChild,_e=C.nextSibling;return l.addEventListener("submit",Ie),s(f,()=>e.t("profile.edit.icon")),k.$$keydown=x,k.addEventListener("blur",r=>d(r.currentTarget.value)),s(ne,()=>e.t("profile.edit.banner")),R.$$keydown=x,R.addEventListener("blur",r=>c(r.currentTarget.value)),s(ie,()=>e.t("profile.edit.name")),T.$$keydown=x,T.addEventListener("change",r=>h(r.currentTarget.value)),s(se,()=>e.t("profile.edit.displayName")),N.$$keydown=x,N.addEventListener("change",r=>q(r.currentTarget.value)),s(de,()=>e.t("profile.edit.about")),j.addEventListener("change",r=>J(r.currentTarget.value)),s(ue,()=>e.t("profile.edit.website")),I.$$keydown=x,I.addEventListener("change",r=>W(r.currentTarget.value)),s(be,()=>e.t("profile.edit.nip05")),P.$$keydown=x,P.addEventListener("change",r=>V(r.currentTarget.value)),s(ve,()=>e.t("profile.edit.lightningAddress")),s(pe,()=>e.t("profile.edit.lightningAddressDescription")),B.$$keydown=x,B.addEventListener("change",r=>K(r.currentTarget.value)),s(l,_(O,{get when(){return Object.entries(X()).length>0},get children(){const r=Nr(),L=r.firstChild,U=L.nextSibling;return s(L,()=>e.t("profile.edit.otherProperties")),s(U,_(Ye,{get each(){return Object.entries(X())},children:([F,z])=>(()=>{const E=Ur(),A=E.firstChild,D=A.nextSibling;return s(A,F),s(D,z),E})()})),r}}),me),s(C,()=>e.t("profile.edit.save")),_e.$$click=()=>t.onClose(),s(_e,()=>e.t("profile.edit.cancel")),s(l,_(O,{get when(){return w.isPending},get children(){return e.t("profile.edit.updating")}}),null),b(r=>{const L=p(),U=p(),F=p(),z=p(),E=p(),A=p(),D=Re.source,$e=p(),he=p(),xe=!w.isPending,ye=!!w.isPending,we=w.isPending;return L!==r._v$&&(k.disabled=r._v$=L),U!==r._v$2&&(R.disabled=r._v$2=U),F!==r._v$3&&(T.disabled=r._v$3=F),z!==r._v$4&&(N.disabled=r._v$4=z),E!==r._v$5&&(j.disabled=r._v$5=E),A!==r._v$6&&(I.disabled=r._v$6=A),D!==r._v$7&&Z(P,"pattern",r._v$7=D),$e!==r._v$8&&(P.disabled=r._v$8=$e),he!==r._v$9&&(B.disabled=r._v$9=he),xe!==r._v$10&&C.classList.toggle("bg-primary",r._v$10=xe),ye!==r._v$11&&C.classList.toggle("bg-primary-disabled",r._v$11=ye),we!==r._v$12&&(C.disabled=r._v$12=we),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),b(()=>k.value=a()),b(()=>R.value=g()),b(()=>T.value=v()),b(()=>N.value=y()),b(()=>j.value=H()),b(()=>I.value=Y()),b(()=>P.value=Q()),b(()=>B.value=S()),n})()]}})};We(["keydown","click"]);export{Jr as default};
//# sourceMappingURL=ProfileEdit-8UsO2Cqp.js.map
