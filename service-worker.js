!function(){"use strict";const s=1684223745459,e=`cache${s}`,a=["/client/client.bb3b6dbf.js","/client/inject_styles.5607aec6.js","/client/index.447963b0.js","/client/about-after-effects.8a133afc.js","/client/projects.490dcf92.js","/client/videos.a8736e4c.js","/client/about.ea2f76e1.js","/client/frens.f5b52549.js","/client/index.a1bf84fb.js","/client/[slug].77257e6f.js"].concat(["/service-worker-index.html","/assets/Images/bloggeneral/win-81/start_screen_background_customize.jpg","/assets/Images/funnypics/bleh.gif","/assets/Images/funnypics/incelracism.gif","/assets/Images/funnypics/konatamultiple.gif","/assets/Images/funnypics/miku-hi.gif","/assets/Images/funnypics/osakatable.gif","/assets/Images/funnypics/rumia-fish.gif","/assets/Images/social/explorer.gif","/assets/Images/social/github.png","/assets/Images/social/github32.png","/assets/Images/social/instagram.png","/assets/Images/social/instagram32.png","/assets/Images/social/kofi.png","/assets/Images/social/kofi32.png","/assets/Images/social/lastfm.png","/assets/Images/social/lastfm32.png","/assets/Images/social/twitter.png","/assets/Images/social/twitter32.png","/assets/Images/social/watermark.png","/assets/Images/social/youtube.svg","/assets/Images/social/youtube32.png","/assets/Images/tabs/buttontemplate.png","/assets/Images/tabs/buttontemplate_alt.png","/assets/Images/tabs/firefox.png","/assets/Images/tabs/hackadoll.png","/assets/Images/tabs/heavenstudio.png","/assets/Images/tabs/homepage.gif","/assets/Images/tabs/homepage.png","/assets/Images/tabs/killmebaby.png","/assets/Images/tabs/kym.png","/assets/Images/tabs/luckystar.png","/assets/Images/tabs/niconico.gif","/assets/Images/tabs/octagon.gif","/assets/Images/tabs/octagon.png","/assets/Images/tabs/octagon2.gif","/assets/Images/tabs/pepsiman.png","/assets/Images/tabs/projectfiles.png","/assets/Images/tabs/rhf.gif","/assets/Images/tabs/saraistupid.png","/assets/Images/tabs/starpelly.gif","/assets/Images/tabs/steam.png","/assets/Images/tabs/unixporn.png","/assets/Images/tabs/windows9.png","/assets/Overla.png","/assets/Overlay2.png","/assets/Pause.png","/assets/Play.png","/assets/articlebg.png","/assets/bannerHome.gif","/assets/floor.png","/assets/fonts/HelveticaNeue-Regular.otf","/assets/fonts/Valken__.otf","/assets/fonts/popjoy.otf","/assets/ladycupiddd.gif","/assets/mayo.ase","/assets/mayo.gif","/assets/stars.png","/assets/static.wav","/assets/tapefeed.mp3","/assets/text-bg.png","/css/gOoDStyLe.css","/css/layout.css","/css/otomad.css","/css/pelly.css","/files/about.txt","/files/greenscreens.html","/files/videos.html","/files.html","/global.css","/icon.png","/js/randomimage.js","/konatamonke.png","/manifest.json"]),t=new Set(a);self.addEventListener("install",(s=>{s.waitUntil(caches.open(e).then((s=>s.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(s=>{s.waitUntil(caches.keys().then((async s=>{for(const a of s)a!==e&&await caches.delete(a);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url),n=a.protocol.startsWith("http"),i=a.hostname===self.location.hostname&&a.port!==self.location.port,g=a.host===self.location.host&&t.has(a.pathname),c="only-if-cached"===e.request.cache&&!g;!n||i||c||e.respondWith((async()=>g&&await caches.match(e.request)||async function(e){const a=await caches.open(`offline${s}`);try{const s=await fetch(e);return a.put(e,s.clone()),s}catch(s){const t=await a.match(e);if(t)return t;throw s}}(e.request))())}))}();
