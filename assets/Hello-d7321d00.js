import{F as f,T as m,j as u,x as a,y as i,M as c,D as v,H as x,N as _,v as $,q as n,w}from"./index-dbaf3d07.js";import{r as S,d as k}from"./resolveAsset-b69f1cac.js";const I=n("<p>"),C=n('<h2 class="font-bold">'),N=n('<p><br>初めて利用する方も、他のクライアントをつかっている方も<br><a class="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href="https://scrapbox.io/nostr/NIP-07#63e1c10c8b8fcb00000584fc">こちらを参考</a>に拡張機能をインストールしてください。<br>終わりましたら、このページを再読込してください。'),M=n('<button class="rounded bg-rose-400 p-4 text-lg font-bold text-white hover:shadow-md">'),R=n('<div class="mx-auto flex max-w-[640px] flex-col items-center p-4 text-stone-600"><div class="flex flex-col items-center gap-4 rounded bg-white p-4"><img width="96" alt="logo" height="96"><h1 class="text-5xl font-black text-rose-300">Rabbit</h1><div>Rabbit is a Web client for Nostr.</div><p class="text-center"><span class="font-bold text-rose-400">注意: 現在ベータ版です。</span><br>未実装の機能やバグがあることを承知の上でご利用ください。</p></div><div class="rounded-md p-8 shadow-md">'),A=()=>{const[s,t]=w("checking"),l=()=>{window.nostr!=null?t("available"):t("unavailable")};return u(()=>{let r=0;const o=setInterval(()=>{l(),r>=10&&clearInterval(o),r+=1},1e3)}),s},P=()=>{const s=f(),t=A(),l=m(),{persistStatus:r,loggedIn:o}=k(),h=()=>{o(),l("/")};return u(()=>{r().loggedIn&&l("/")}),(()=>{const g=R(),d=g.firstChild,b=d.firstChild,p=d.nextSibling;return a(p,i(v,{get children(){return[i(c,{get when(){return t()==="checking"},get children(){const e=I();return a(e,()=>s()("hello.signerChecking")),e}}),i(c,{get when(){return t()==="unavailable"},get children(){return[(()=>{const e=C();return a(e,()=>s()("hello.signerUnavailable")),e})(),N()]}}),i(c,{get when(){return t()==="available"},get children(){const e=M();return e.$$click=h,a(e,()=>s()("hello.loginWithSigner")),e}})]}})),x(()=>_(b,"src",S("images/rabbit_256.png"))),g})()};$(["click"]);export{P as default};
//# sourceMappingURL=Hello-d7321d00.js.map
