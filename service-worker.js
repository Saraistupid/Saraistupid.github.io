!function(){"use strict";const s=1735844882210,a=`cache${s}`,e=["/client/client.19bcddc7.js","/client/inject_styles.5607aec6.js","/client/index.b96616a4.js","/client/about-after-effects.b7c14567.js","/client/projects.534524c9.js","/client/videos.e7255a5d.js","/client/about.d6df6d06.js","/client/frens.4390c974.js","/client/index.ff9e02db.js","/client/[slug].5311c1d3.js","/client/dni.b8d2d94a.js"].concat(["/service-worker-index.html","/assets/Images/bloggeneral/win-81/start_screen_background_customize.jpg","/assets/Images/funnypics/IMG_1445.gif","/assets/Images/funnypics/bleh.gif","/assets/Images/funnypics/cat.gif","/assets/Images/funnypics/catdy.gif","/assets/Images/funnypics/discord/YAY_SUICIDE.png","/assets/Images/funnypics/discord/YOU_MADE_THE_NICE_GIRL_SAD.png","/assets/Images/funnypics/discord/ashley.png","/assets/Images/funnypics/discord/awshitnigga.gif","/assets/Images/funnypics/discord/cp.webp","/assets/Images/funnypics/discord/fed.webp","/assets/Images/funnypics/discord/funnyrat.webp","/assets/Images/funnypics/discord/god i wanna kiss her so fucking badly i love konata i love her so much.png","/assets/Images/funnypics/discord/i hate tranny memes istg.png","/assets/Images/funnypics/discord/idk_her_name.gif","/assets/Images/funnypics/discord/marisasad.gif","/assets/Images/funnypics/discord/miku_mcnutt.png","/assets/Images/funnypics/discord/miku_smoke.png","/assets/Images/funnypics/discord/osakastare.gif","/assets/Images/funnypics/discord/racist_cat.gif","/assets/Images/funnypics/discord/rena_rapist.gif","/assets/Images/funnypics/discord/soy_moko.png","/assets/Images/funnypics/discord/the_cake.webp","/assets/Images/funnypics/discord/tomokorapist.png","/assets/Images/funnypics/discord/white_warrior_youre_blacker_than_i_thought.png","/assets/Images/funnypics/discord/ليش_احفظ_وانسي.jpg","/assets/Images/funnypics/drum.gif","/assets/Images/funnypics/egyptian.gif","/assets/Images/funnypics/haruhi-suzumiya-suzumiya.gif","/assets/Images/funnypics/incelracism.gif","/assets/Images/funnypics/konata-callout.gif","/assets/Images/funnypics/konatamultiple.gif","/assets/Images/funnypics/miku-hi.gif","/assets/Images/funnypics/osakatable.gif","/assets/Images/funnypics/rumia-fish.gif","/assets/Images/social/explorer.gif","/assets/Images/social/github.png","/assets/Images/social/github32.png","/assets/Images/social/instagram.png","/assets/Images/social/instagram32.png","/assets/Images/social/kofi.png","/assets/Images/social/kofi32.png","/assets/Images/social/lastfm.png","/assets/Images/social/lastfm32.png","/assets/Images/social/myanimelist.png","/assets/Images/social/myanimelist32.png","/assets/Images/social/spacehey.png","/assets/Images/social/spacehey32.png","/assets/Images/social/twitter.png","/assets/Images/social/twitter32.png","/assets/Images/social/watermark.png","/assets/Images/social/youtube.svg","/assets/Images/social/youtube32.png","/assets/Images/tabs/3ds.png","/assets/Images/tabs/beppit.gif","/assets/Images/tabs/buttontemplate.png","/assets/Images/tabs/buttontemplate_alt.png","/assets/Images/tabs/d2lta.png","/assets/Images/tabs/firefox.png","/assets/Images/tabs/gdfyi.png","/assets/Images/tabs/h4xxor.png","/assets/Images/tabs/hackadoll.png","/assets/Images/tabs/heavenstudio.png","/assets/Images/tabs/homepage.gif","/assets/Images/tabs/homepagesmall.gif","/assets/Images/tabs/jakanz.gif","/assets/Images/tabs/kym.png","/assets/Images/tabs/luckystar.png","/assets/Images/tabs/miku.gif","/assets/Images/tabs/niconico.gif","/assets/Images/tabs/octagon.gif","/assets/Images/tabs/octagon2.gif","/assets/Images/tabs/pepsiman.png","/assets/Images/tabs/picmix.com_11125247.gif","/assets/Images/tabs/rhf.gif","/assets/Images/tabs/saraistupid.png","/assets/Images/tabs/starpelly.gif","/assets/Images/tabs/unixporn.png","/assets/Images/tabs/windows9.png","/assets/Overla.png","/assets/Overlay2.png","/assets/Pause.png","/assets/Play.png","/assets/articlebg.png","/assets/bannerHome.gif","/assets/floor.png","/assets/fonts/HelveticaNeue-Regular.otf","/assets/fonts/Valken__.otf","/assets/fonts/popjoy.otf","/assets/ladycupiddd.gif","/assets/mayo.ase","/assets/mayo.gif","/assets/stars.png","/assets/static.wav","/assets/stupidosushit/(Saraistupid's Edit & HUD) osu_ no Tatsujin Momoiro (Zeon013 LuigiHann Frank7654321 Inori).osk","/assets/stupidosushit/(Saraistupid's HUD) osu_ no Tatsujin Momoiro (Zeon013 LuigiHann Frank7654321 Inori).osk","/assets/stupidosushit/README.md","/assets/tapefeed.mp3","/assets/text-bg.png","/css/gOoDStyLe.css","/css/layout.css","/css/otomad.css","/css/pelly.css","/files/about.txt","/files/greenscreens.html","/files/videos.html","/files.html","/global.css","/icon.png","/js/randomimage.js","/konatamonke.png","/manifest.json"]),t=new Set(e);self.addEventListener("install",(s=>{s.waitUntil(caches.open(a).then((s=>s.addAll(e))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const e of s)e!==a&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const e=new URL(a.request.url),i=e.protocol.startsWith("http"),n=e.hostname===self.location.hostname&&e.port!==self.location.port,g=e.host===self.location.host&&t.has(e.pathname),c="only-if-cached"===a.request.cache&&!g;!i||n||c||a.respondWith((async()=>g&&await caches.match(a.request)||async function(a){const e=await caches.open(`offline${s}`);try{const s=await fetch(a);return e.put(a,s.clone()),s}catch(s){const t=await e.match(a);if(t)return t;throw s}}(a.request))())}))}();
