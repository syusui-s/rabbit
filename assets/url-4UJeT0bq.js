const i=s=>{try{const a=new URL(s);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(a.pathname)}catch{return!1}},m=s=>{try{const a=new URL(s);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(a.pathname)}catch{return!1}},c=s=>{try{const a=new URL(s);return/^wss?:$/.test(a.protocol)}catch{return!1}},u=(s,a="thumbnail")=>{try{const t=new URL(s);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const e=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpeg|jpg|png|gif|webp|avif|apng)/);if(e!=null){const n=new URL(t),r=e[1],o=e[2];if(n.host="i.imgur.com",a==="icon")n.pathname=`${r}s.${o}`;else if(a==="thumbnail")n.pathname=`${r}l.${o}`;else return s;return n.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const e=new URL(t);if(e.host="thumb.gyazo.com",a==="icon")e.pathname=`/thumb/160${t.pathname}`;else if(a==="thumbnail")e.pathname=`/thumb/640${t.pathname}`;else return s;return e.toString()}if(t.host==="nostr.build"||t.host==="i.nostr.build"||t.host==="image.nostr.build"||t.host==="cdn.nostr.build"){if(t.pathname.startsWith("/i/p/"))return s;const e=new URL(t);if(t.pathname.startsWith("/i/")){const n=t.pathname.replace(/^\/i/,"");e.hostname="image.nostr.build",e.pathname=`/resp/240p${n}`}else if(t.pathname.match(/^\/[0-9a-zA-Z]+\.(jpeg|jpg|png|gif|webp|avif|apng)$/))e.pathname=`/resp/240p${t.pathname}`;else return s;return e.toString()}if(t.host==="pbs.twimg.com"){if(t.pathname.startsWith("/profile_images/")){const e=new URL(t);return e.pathname=t.pathname.replace(/(?:_(?:mini|normal|bigger|200x200|400x400))?\.(jpg|png)$/,"_normal.$1"),e.toString()}if(t.pathname.startsWith("/media/")){const e=new URL(t);return e.searchParams.set("format","jpg"),e.searchParams.set("name","small"),e.toString()}return s}if(t.hostname==="media.discordapp.net"&&t.pathname.match(/^\/attachments\/\d+\/\d+\/[a-z0-9]+\.(png|jpg|gif)/)){const e=new URL(t);if(e.searchParams.set("format","webp"),a==="icon")e.searchParams.set("width","100"),e.searchParams.set("height","100");else if(a==="thumbnail")e.searchParams.set("width","320"),e.searchParams.set("height","320");else return s}return t.toString()}catch{return s}},p=s=>{try{const a=new URL(s);return a.protocol==="https:"&&(a.host==="twitter.com"||a.host==="x.com")}catch{return!1}},h=["www.youtube.com","m.youtube.com","youtube.com"],l=s=>{try{const a=new URL(s);if(a.protocol!=="https:")return null;if(h.includes(a.host)){if(a.pathname==="/watch"){const t=a.searchParams.get("v");if(t!=null)return{videoId:t}}if(a.pathname.startsWith("/shorts/")){const t=a.pathname.match(/^\/shorts\/([0-9a-zA-Z_-]*)$/);if(t)return{videoId:t[1]}}}return a.host==="youtu.be"&&a.pathname.lastIndexOf("/")===0?{videoId:a.pathname}:null}catch{return null}};export{p as a,i as b,m as c,c as i,l as p,u as t};
//# sourceMappingURL=url-4UJeT0bq.js.map
