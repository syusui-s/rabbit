import{g as f,J as m,y as u,i as l,a as i,M as c,b as v,j as x,l as _,d as $,t as s,c as S}from"./index-5494a3c7.js";import{r as w,u as k}from"./usePersistStatus-d48e98dd.js";const I=s("<p>"),y=s("<h2 class=font-bold>"),C=s('<p><br>初めて利用する方も、他のクライアントをつかっている方も<br><a class="text-link underline"target=_blank rel="noopener noreferrer"href=https://scrapbox.io/nostr/NIP-07#63e1c10c8b8fcb00000584fc>こちらを参考</a>に拡張機能をインストールしてください。<br>終わりましたら、このページを再読込してください。'),M=s('<button class="rounded bg-primary p-4 text-lg font-bold text-primary-fg hover:shadow-md">'),N=s('<div class="mx-auto flex max-w-[640px] flex-col items-center p-4 text-fg"><div class="flex flex-col items-center gap-4 rounded p-4"><img width=96 alt=logo height=96><h1 class="text-5xl font-black text-primary">Rabbit</h1><div>Rabbit is a Web client for Nostr.</div></div><div class="rounded-md p-8 shadow-md">'),R=()=>{const[n,t]=S("checking"),r=()=>{window.nostr!=null?t("available"):t("unavailable")};return u(()=>{let a=0;const o=setInterval(()=>{r(),a>=10&&clearInterval(o),a+=1},1e3)}),n},P=()=>{const n=f(),t=R(),r=m(),{persistStatus:a,loggedIn:o}=k(),h=()=>{o(),r("/")};return u(()=>{a().loggedIn&&r("/")}),(()=>{const g=N(),d=g.firstChild,b=d.firstChild,p=d.nextSibling;return l(p,i(v,{get children(){return[i(c,{get when(){return t()==="checking"},get children(){const e=I();return l(e,()=>n()("hello.signerChecking")),e}}),i(c,{get when(){return t()==="unavailable"},get children(){return[(()=>{const e=y();return l(e,()=>n()("hello.signerUnavailable")),e})(),C()]}}),i(c,{get when(){return t()==="available"},get children(){const e=M();return e.$$click=h,l(e,()=>n()("hello.loginWithSigner")),e}})]}})),x(()=>_(b,"src",w("images/rabbit_256.png"))),g})()};$(["click"]);export{P as default};
//# sourceMappingURL=Hello-7b2edc8f.js.map