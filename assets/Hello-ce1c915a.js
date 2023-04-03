import{O as b,j as u,z as g,C as r,M as o,E as h,G as E,q as s,v}from"./index-2b5eb4e7.js";import{d as x}from"./usePersistStatus-777148b3.js";const f=s('<div class="pb-1 text-lg font-bold">拡張機能がインストールされていません！</div>'),m=s('<p class="pt-2">利用にはNIP-07に対応した拡張機能が必要です。<br><a class="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href="https://scrapbox.io/nostr/NIP-07#63e1c10c8b8fcb00000584fc">こちらを参考</a>に拡張機能をインストールしてください。</p>'),N=s('<p class="pt-2">はじめてNostrを利用する方は<a class="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href="https://scrapbox.io/nostr/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AENostr%E3%80%90%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E6%96%B9%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%80%91">はじめてのNostr</a>を参考にするとよいでしょう。</p>'),A=s('<button class="rounded bg-rose-400 p-4 text-lg font-bold text-white hover:shadow-md">NIP-07 拡張機能でログイン</button>'),S=s('<div class="mx-auto flex max-w-[640px] flex-col items-center p-4 text-stone-600"><div class="flex flex-col items-center gap-4 rounded bg-white p-4"><div class="text-7xl">🐰</div><h1 class="text-5xl font-bold text-rose-300">Rabbit</h1><div>Rabbit is a Web client for Nostr.</div><p class="text-center"><span class="font-bold text-rose-400">注意: 現在ベータ版です。</span><br>未実装の機能やバグがあることを承知の上でご利用ください。</p></div><div class="p-8 shadow-md"></div></div>'),w=()=>{const[e,t]=v("checking"),l=()=>{window.nostr!=null?t("available"):t("unavailable")};return u(()=>{let n=0;const a=setInterval(()=>{l(),n>=10&&clearInterval(a),n+=1},1e3)}),e},F=()=>{const e=w(),t=b(),{persistStatus:l,loggedIn:n}=x(),a=()=>{n(),t("/")};return u(()=>{l().loggedIn&&t("/")}),(()=>{const c=S.cloneNode(!0),d=c.firstChild,p=d.nextSibling;return g(p,r(h,{get children(){return[r(o,{get when(){return e()==="checking"},children:"拡張機能のインストール状況を確認中です..."}),r(o,{get when(){return e()==="unavailable"},get children(){return[f.cloneNode(!0),m.cloneNode(!0),N.cloneNode(!0)]}}),r(o,{get when(){return e()==="available"},get children(){const i=A.cloneNode(!0);return i.$$click=a,i}})]}})),c})()};E(["click"]);export{F as default};
//# sourceMappingURL=Hello-ce1c915a.js.map
