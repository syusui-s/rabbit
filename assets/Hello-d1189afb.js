import{u as f,p as m,o as d,i as r,a as i,M as c,b as v,e as x,h as _,d as $,t as n,c as S}from"./index-40e39b65.js";import{r as w,u as k}from"./resolveAsset-8a1d547d.js";const I=n("<p>"),C=n('<h2 class="font-bold">'),M=n('<p><br>初めて利用する方も、他のクライアントをつかっている方も<br><a class="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href="https://scrapbox.io/nostr/NIP-07#63e1c10c8b8fcb00000584fc">こちらを参考</a>に拡張機能をインストールしてください。<br>終わりましたら、このページを再読込してください。'),N=n('<button class="rounded bg-rose-400 p-4 text-lg font-bold text-white hover:shadow-md">'),R=n('<div class="mx-auto flex max-w-[640px] flex-col items-center p-4 text-stone-600"><div class="flex flex-col items-center gap-4 rounded bg-white p-4"><img width="96" alt="logo" height="96"><h1 class="text-5xl font-black text-rose-300">Rabbit</h1><div>Rabbit is a Web client for Nostr.</div><p class="text-center"><span class="font-bold text-rose-400">注意: 現在ベータ版です。</span><br>未実装の機能やバグがあることを承知の上でご利用ください。</p></div><div class="rounded-md p-8 shadow-md">'),A=()=>{const[s,t]=S("checking"),a=()=>{window.nostr!=null?t("available"):t("unavailable")};return d(()=>{let l=0;const o=setInterval(()=>{a(),l>=10&&clearInterval(o),l+=1},1e3)}),s},W=()=>{const s=f(),t=A(),a=m(),{persistStatus:l,loggedIn:o}=k(),h=()=>{o(),a("/")};return d(()=>{l().loggedIn&&a("/")}),(()=>{const g=R(),u=g.firstChild,b=u.firstChild,p=u.nextSibling;return r(p,i(v,{get children(){return[i(c,{get when(){return t()==="checking"},get children(){const e=I();return r(e,()=>s()("hello.signerChecking")),e}}),i(c,{get when(){return t()==="unavailable"},get children(){return[(()=>{const e=C();return r(e,()=>s()("hello.signerUnavailable")),e})(),M()]}}),i(c,{get when(){return t()==="available"},get children(){const e=N();return e.$$click=h,r(e,()=>s()("hello.loginWithSigner")),e}})]}})),x(()=>_(b,"src",w("images/rabbit_256.png"))),g})()};$(["click"]);export{W as default};
//# sourceMappingURL=Hello-d1189afb.js.map