const m=s=>{try{const e=new URL(s);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(e.pathname)}catch{return!1}},h=s=>{try{const e=new URL(s);return/\.(mpg|mpeg|mp4|avi|mov|mkv|webm|ogv)$/i.test(e.pathname)}catch{return!1}},c=s=>{try{const e=new URL(s);return/\.(wav|mp3|flac|wma|m4a|aac|ogg|oga|opus)$/i.test(e.pathname)}catch{return!1}},u=s=>{try{const e=new URL(s);return/^wss?:$/.test(e.protocol)}catch{return!1}},p=(s,e="thumbnail")=>{try{const t=new URL(s);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const a=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpeg|jpg|png|gif|webp|avif|apng)/);if(a!=null){const n=new URL(t),r=a[1],o=a[2];if(n.host="i.imgur.com",e==="icon")n.pathname=`${r}s.${o}`;else if(e==="thumbnail")n.pathname=`${r}l.${o}`;else return s;return n.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const a=new URL(t);if(a.host="thumb.gyazo.com",e==="icon")a.pathname=`/thumb/160${t.pathname}`;else if(e==="thumbnail")a.pathname=`/thumb/640${t.pathname}`;else return s;return a.toString()}if(t.host==="nostr.build"||t.host==="i.nostr.build"||t.host==="image.nostr.build"||t.host==="cdn.nostr.build"){if(t.pathname.startsWith("/i/p/"))return s;const a=new URL(t);if(t.pathname.startsWith("/i/")){const n=t.pathname.replace(/^\/i/,"");a.hostname="image.nostr.build",a.pathname=`/resp/240p${n}`}else if(t.pathname.match(/^\/[0-9a-zA-Z]+\.(jpeg|jpg|png|gif|webp|avif|apng)$/))a.pathname=`/resp/240p${t.pathname}`;else return s;return a.toString()}if(t.host==="pbs.twimg.com"){if(t.pathname.startsWith("/profile_images/")){const a=new URL(t);return a.pathname=t.pathname.replace(/(?:_(?:mini|normal|bigger|200x200|400x400))?\.(jpg|png)$/,"_normal.$1"),a.toString()}if(t.pathname.startsWith("/media/")){const a=new URL(t);return a.searchParams.set("format","jpg"),a.searchParams.set("name","small"),a.toString()}return s}if(t.hostname==="media.discordapp.net"&&t.pathname.match(/^\/attachments\/\d+\/\d+\/[a-z0-9]+\.(png|jpg|gif)/)){const a=new URL(t);if(a.searchParams.set("format","webp"),e==="icon")a.searchParams.set("width","100"),a.searchParams.set("height","100");else if(e==="thumbnail")a.searchParams.set("width","320"),a.searchParams.set("height","320");else return s}return t.toString()}catch{return s}},l=s=>{try{const e=new URL(s);return e.protocol==="https:"&&(e.host==="twitter.com"||e.host==="x.com")}catch{return!1}},i=["www.youtube.com","m.youtube.com","youtube.com"],g=s=>{try{const e=new URL(s);if(e.protocol!=="https:")return null;if(i.includes(e.host)){if(e.pathname==="/watch"){const t=e.searchParams.get("v");if(t!=null)return{videoId:t}}if(e.pathname.startsWith("/shorts/")){const t=e.pathname.match(/^\/shorts\/([0-9a-zA-Z_-]*)$/);if(t)return{videoId:t[1]}}}return e.host==="youtu.be"&&e.pathname.lastIndexOf("/")===0?{videoId:e.pathname}:null}catch{return null}};export{l as a,m as b,h as c,c as d,u as i,g as p,p as t};
//# sourceMappingURL=url-YUK4acpd.js.map
