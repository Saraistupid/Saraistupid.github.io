function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}let f,u=!1;function h(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function d(t,e){if(u){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:h(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[a]+1;const i=a+1;n[i]=t,r=Math.max(i,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t,e,n){u&&!n?d(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function $(){return b(" ")}function v(){return b("")}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function x(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,e,n,s,r=!1){x(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,e,n){return function(t,e,n,s){return A(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}(t,e,n,y)}function S(t,e){return A(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>b(e)),!0)}function k(t){return S(t," ")}function N(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function j(t,e){const n=N(t,"HTML_TAG_START",0),s=N(t,"HTML_TAG_END",n);if(n===s)return new D(void 0,e);x(t);const r=t.splice(n,s-n+1);g(r[0]),g(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(o,e)}function P(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function C(t,e){const n=[];let s=0;for(const r of e.childNodes)if(8===r.nodeType){const e=r.textContent.trim();e===`HEAD_${t}_END`?(s-=1,n.push(r)):e===`HEAD_${t}_START`&&(s+=1,n.push(r))}else s>0&&n.push(r);return n}class R{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){var s;this.e||(this.is_svg?this.e=(s=e.nodeName,document.createElementNS("http://www.w3.org/2000/svg",s)):this.e=y(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(g)}}class D extends R{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)m(this.t,this.n[e],t)}}function L(t,e){return new t(e)}function O(t){f=t}function M(){if(!f)throw new Error("Function called outside component initialization");return f}const V=[],q=[];let U=[];const J=[],B=Promise.resolve();let H=!1;function Y(t){U.push(t)}const z=new Set;let G=0;function W(){if(0!==G)return;const t=f;do{try{for(;G<V.length;){const t=V[G];G++,O(t),F(t.$$)}}catch(t){throw V.length=0,G=0,t}for(O(null),V.length=0,G=0;q.length;)q.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];z.has(e)||(z.add(e),e())}U.length=0}while(V.length);for(;J.length;)J.pop()();H=!1,z.clear(),O(t)}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}const K=new Set;let X;function Z(){X={r:0,c:[],p:X}}function Q(){X.r||r(X.c),X=X.p}function tt(t,e){t&&t.i&&(K.delete(t),t.i(e))}function et(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),X.c.push((()=>{K.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function nt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function st(t){return"object"==typeof t&&null!==t?t:{}}function rt(t){t&&t.c()}function ot(t,e){t&&t.l(e)}function at(t,e,s,a){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,s),a||Y((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):r(e),t.$$.on_mount=[]})),c.forEach(Y)}function it(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];U.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),U=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(V.push(t),H||(H=!0,B.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,n,o,a,i,c,l,h=[-1]){const d=f;O(e);const p=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};l&&l(p.root);let m=!1;if(p.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&ct(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){u=!0;const t=w(n.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&tt(e.$$.fragment),at(e,n.target,n.anchor,n.customElement),u=!1,W()}O(d)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function ht(e,n=t){let s;const r=new Set;function o(t){if(a(e,t)&&(e=t,s)){const t=!ut.length;for(const t of r)t[1](),ut.push(t,e);if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.add(c),1===r.size&&(s=n(o)||t),a(e),()=>{r.delete(c),0===r.size&&s&&(s(),s=null)}}}}const dt={};function pt(t){let e,n;const s=t[1].default,r=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(s,t,t[0],null);return{c(){e=y("main"),r&&r.c()},l(t){e=I(t,"MAIN",{});var n=w(e);r&&r.l(n),n.forEach(g)},m(t,s){m(t,e,s),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&(!n||1&e)&&function(t,e,n,s,r,o){if(r){const a=l(e,n,s,o);t.p(a,r)}}(r,s,t,t[0],n?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(s,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){n||(tt(r,t),n=!0)},o(t){et(r,t),n=!1},d(t){t&&g(e),r&&r.d(t)}}}function mt(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class gt extends ft{constructor(t){super(),lt(this,t,mt,pt,a,{})}}function _t(e){let n,s,r,o,a,i,l,f,u,h,p,_,v,x,A,N,j,P,C,R,D,L,O,M,V,q,U,J,B,H,Y,z,G,W,F,K,X,Z,Q,tt,et,nt,st,rt;return{c(){n=y("div"),s=y("img"),o=$(),a=y("div"),i=y("a"),l=y("img"),u=$(),h=y("div"),p=y("div"),_=y("div"),v=y("a"),x=$(),A=y("a"),N=$(),j=y("div"),P=y("div"),C=y("a"),R=b("About Me"),D=$(),L=y("br"),O=$(),M=y("div"),V=y("div"),q=y("a"),U=$(),J=y("a"),B=$(),H=y("a"),Y=$(),z=y("a"),G=$(),W=y("a"),F=$(),K=y("a"),X=$(),Z=y("a"),Q=$(),tt=y("a"),et=$(),nt=y("a"),st=$(),rt=y("a"),this.h()},l(t){n=I(t,"DIV",{class:!0});var e=w(n);s=I(e,"IMG",{src:!0,style:!0,alt:!0}),o=k(e),a=I(e,"DIV",{id:!0});var r=w(a);i=I(r,"A",{href:!0});var c=w(i);l=I(c,"IMG",{class:!0,id:!0,alt:!0,src:!0}),c.forEach(g),r.forEach(g),u=k(e),h=I(e,"DIV",{class:!0});var f=w(h);p=I(f,"DIV",{class:!0});var d=w(p);_=I(d,"DIV",{});var m=w(_);v=I(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0,alt:!0}),w(v).forEach(g),x=k(m),A=I(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0}),w(A).forEach(g),m.forEach(g),d.forEach(g),f.forEach(g),N=k(e),j=I(e,"DIV",{class:!0});var y=w(j);P=I(y,"DIV",{class:!0});var b=w(P);C=I(b,"A",{class:!0,href:!0,style:!0});var $=w(C);R=S($,"About Me"),$.forEach(g),D=k(b),L=I(b,"BR",{}),b.forEach(g),y.forEach(g),O=k(e),M=I(e,"DIV",{class:!0});var E=w(M);V=I(E,"DIV",{class:!0});var T=w(V);q=I(T,"A",{class:!0,href:!0,style:!0}),w(q).forEach(g),U=k(T),J=I(T,"A",{class:!0,href:!0,style:!0}),w(J).forEach(g),B=k(T),H=I(T,"A",{class:!0,href:!0,style:!0}),w(H).forEach(g),Y=k(T),z=I(T,"A",{class:!0,href:!0,style:!0}),w(z).forEach(g),G=k(T),W=I(T,"A",{class:!0,href:!0,style:!0}),w(W).forEach(g),F=k(T),K=I(T,"A",{class:!0,href:!0,title:!0,style:!0}),w(K).forEach(g),X=k(T),Z=I(T,"A",{class:!0,href:!0,title:!0,style:!0}),w(Z).forEach(g),Q=k(T),tt=I(T,"A",{class:!0,href:!0,style:!0}),w(tt).forEach(g),et=k(T),nt=I(T,"A",{class:!0,style:!0}),w(nt).forEach(g),st=k(T),rt=I(T,"A",{class:!0,style:!0}),w(rt).forEach(g),T.forEach(g),E.forEach(g),e.forEach(g),this.h()},h(){c(s.src,r="assets/mayo.gif")||E(s,"src","assets/mayo.gif"),T(s,"margin-left","2px"),T(s,"margin-bottom","-2px"),E(s,"alt",""),E(l,"class","bruh"),E(l,"id","myPicture"),E(l,"alt",""),c(l.src,f=e[0])||E(l,"src",f),E(i,"href","/"),E(a,"id","logocnt"),E(v,"class","sociallink"),T(v,"background-image","url('assets/Images/social/youtube32.png')"),E(v,"title","YouTube"),E(v,"target","_blank"),E(v,"href","https://youtube.com/@saraistupid"),E(v,"alt",""),E(A,"class","sociallink"),T(A,"background-image","url('assets/Images/social/github32.png')"),E(A,"title","Github"),E(A,"target","_blank"),E(A,"href","https://github.com/Saraistupid"),E(p,"class","pad2"),E(h,"class","grid_1"),E(C,"class","links"),E(C,"href","about"),T(C,"color","white"),E(P,"class","pad2"),E(j,"class","grid_1"),E(q,"class","menulink"),E(q,"href","/"),T(q,"background-image","url('../assets/Images/tabs/homepage.gif')"),E(J,"class","menulink"),E(J,"href","https://www.nicovideo.jp/"),T(J,"background-image","url('assets/Images/tabs/niconico.gif')"),E(H,"class","menulink"),E(H,"href","https://rheavenstudio.github.io/"),T(H,"background-image","url('assets/Images/tabs/heavenstudio.png')"),E(z,"class","menulink"),E(z,"href","https://www.youtube.com/watch?v=ddWJatRxfz8"),T(z,"background-image","url('assets/Images/tabs/octagon.gif')"),E(W,"class","menulink"),E(W,"href","https://www.reddit.com/r/unixporn"),T(W,"background-image","url('assets/Images/tabs/unixporn.png')"),E(K,"class","menulink"),E(K,"href","https://starpelly.com"),E(K,"title","fuck you pelly for putting me above the hacka doll tab on your website, you caused total tranny death by doing that."),T(K,"background-image","url('assets/Images/tabs/starpelly.gif')"),E(Z,"class","menulink"),E(Z,"href","https://myanimelist.net/anime/1887/Lucky%E2%98%86Star"),E(Z,"title","i jacked off to futanari konata porn at least 2000 times at this point"),T(Z,"background-image","url('assets/Images/tabs/luckystar.png')"),E(tt,"class","menulink"),E(tt,"href","https://knowyourmeme.com/"),T(tt,"background-image","url('assets/Images/tabs/kym.png')"),E(nt,"class","menulink"),T(nt,"background-image","url('assets/Images/tabs/rhf.gif')"),E(rt,"class","menulink"),T(rt,"background-image","url('assets/Images/tabs/windows9.png')"),E(V,"class","pad2"),E(M,"class","grid_1"),E(n,"class","navbarwrap")},m(t,e){m(t,n,e),d(n,s),d(n,o),d(n,a),d(a,i),d(i,l),d(n,u),d(n,h),d(h,p),d(p,_),d(_,v),d(_,x),d(_,A),d(n,N),d(n,j),d(j,P),d(P,C),d(C,R),d(P,D),d(P,L),d(n,O),d(n,M),d(M,V),d(V,q),d(V,U),d(V,J),d(V,B),d(V,H),d(V,Y),d(V,z),d(V,G),d(V,W),d(V,F),d(V,K),d(V,X),d(V,Z),d(V,Q),d(V,tt),d(V,et),d(V,nt),d(V,st),d(V,rt)},p(t,[e]){1&e&&!c(l.src,f=t[0])&&E(l,"src",f)},i:t,o:t,d(t){t&&g(n)}}}function yt(t,e,n){var s;let r;s=async()=>{!function(){let t=Math.floor(Math.random()*o.length);n(0,r=o[t])}()},M().$$.on_mount.push(s);var o=new Array("https://cdn.discordapp.com/emojis/1064217837377429574.webp?size=256&quality=lossless","https://cdn.discordapp.com/emojis/1103841251658309743.webp?size=256&quality=lossless","assets/Images/funnypics/konatamultiple.gif","https://cdn.discordapp.com/attachments/1013458981110435950/1096439420908998777/5F6AC068-B1E7-43AB-B2A8-AAA0C0A30C33.gif","assets/Images/funnypics/osakatable.gif","https://media.discordapp.net/attachments/1088247236711952426/1102020688480583852/I73Kl36.gif","https://media.discordapp.net/attachments/1085975662306799618/1095354450668961913/mp4.gif","https://media.discordapp.net/attachments/1100169366152171621/1100924936069054515/1682287855784373.gif","assets/Images/funnypics/miku-hi.gif","assets/Images/funnypics/rumia-fish.gif","https://cdn.discordapp.com/attachments/862760859318485032/1107323932371067050/YUN4Ff1.png","https://cdn.discordapp.com/attachments/862760859318485032/1103301056265474078/IMG_3242.jpg","https://cdn.discordapp.com/attachments/862760859318485032/1102317069258735727/image.png","https://cdn.discordapp.com/attachments/862760859318485032/1100176216205570149/58858195-9563-4AC2-8A10-F3E54E057A35.png","https://cdn.discordapp.com/attachments/862760859318485032/1099507837685747803/FuXCLqtXgAAC8PW.png","https://cdn.discordapp.com/attachments/862760859318485032/1098793536016625714/20230420_135238.png","https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjgxYWQwNzJmNjA1ZWE5ODIxY2ExYjdmYmNhNGFjN2VjZTllYjgzOCZjdD1n/7swI8UqW1zxnO6alD5/giphy.gif","https://cdn.discordapp.com/attachments/862760859318485032/1095720914311716894/image.png","https://cdn.discordapp.com/attachments/862760859318485032/1094256161475285012/image1.png","https://cdn.discordapp.com/attachments/862760859318485032/1087332923176386560/unknown-24-1.png","https://cdn.discordapp.com/attachments/862760859318485032/1086393521524715520/292115369_1014164495952002_7667198934088117272_n.png","https://media.discordapp.net/attachments/779632949988687873/936860504272535602/image0-39.gif","assets/Images/funnypics/bleh.gif","https://cdn.discordapp.com/attachments/859838955947163668/1107350427709739130/marisad.gif");return[r]}class bt extends ft{constructor(t){super(),lt(this,t,yt,_t,a,{})}}function $t(t){let e,n,s,r,o=t[1].message+"";return{c(){e=y("p"),n=b("this is probably a bad thing you should message me about this."),s=$(),r=b(o)},l(t){e=I(t,"P",{});var a=w(e);n=S(a,"this is probably a bad thing you should message me about this."),a.forEach(g),s=k(t),r=S(t,o)},m(t,o){m(t,e,o),d(e,n),m(t,s,o),m(t,r,o)},p(t,e){2&e&&o!==(o=t[1].message+"")&&P(r,o)},d(t){t&&g(e),t&&g(s),t&&g(r)}}}function vt(e){let n,s;return{c(){n=y("p"),s=b("I have no idea what you were looking for but if there is meant to be something here please message me.")},l(t){n=I(t,"P",{});var e=w(n);s=S(e,"I have no idea what you were looking for but if there is meant to be something here please message me."),e.forEach(g)},m(t,e){m(t,n,e),d(n,s)},p:t,d(t){t&&g(n)}}}function Et(t){let e,n,s,r,o,a,i,c,l,f,u,h,p,_,v;function x(t,e){return 404==t[0]?vt:$t}n=new bt({});let A=x(t),N=A(t);return{c(){e=y("div"),rt(n.$$.fragment),s=$(),r=y("div"),o=y("div"),a=y("h1"),i=b(t[0]),c=$(),l=y("div"),f=y("div"),u=y("div"),N.c(),h=$(),p=y("h1"),_=b("Starpelly#0255"),this.h()},l(d){e=I(d,"DIV",{class:!0});var m=w(e);ot(n.$$.fragment,m),s=k(m),r=I(m,"DIV",{class:!0});var y=w(r);o=I(y,"DIV",{class:!0,style:!0});var b=w(o);a=I(b,"H1",{});var $=w(a);i=S($,t[0]),$.forEach(g),b.forEach(g),c=k(y),l=I(y,"DIV",{class:!0});var v=w(l);f=I(v,"DIV",{class:!0});var E=w(f);u=I(E,"DIV",{class:!0});var x=w(u);N.l(x),h=k(x),p=I(x,"H1",{});var A=w(p);_=S(A,"Starpelly#0255"),A.forEach(g),x.forEach(g),E.forEach(g),v.forEach(g),y.forEach(g),m.forEach(g),this.h()},h(){E(o,"class","contenttitle"),T(o,"background-image","url('https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg')"),E(u,"class","articlebody"),E(f,"class","article"),E(l,"class","contentpad"),E(r,"class","grid_3"),E(e,"class","container container_4")},m(t,g){m(t,e,g),at(n,e,null),d(e,s),d(e,r),d(r,o),d(o,a),d(a,i),d(r,c),d(r,l),d(l,f),d(f,u),N.m(u,null),d(u,h),d(u,p),d(p,_),v=!0},p(t,[e]){(!v||1&e)&&P(i,t[0]),A===(A=x(t))&&N?N.p(t,e):(N.d(1),N=A(t),N&&(N.c(),N.m(u,h)))},i(t){v||(tt(n.$$.fragment,t),v=!0)},o(t){et(n.$$.fragment,t),v=!1},d(t){t&&g(e),it(n),N.d()}}}function wt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r]}class xt extends ft{constructor(t){super(),lt(this,t,wt,Et,a,{status:0,error:1})}}function At(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=L(a,i())),{c(){n&&rt(n.$$.fragment),s=v()},l(t){n&&ot(n.$$.fragment,t),s=v()},m(t,e){n&&at(n,t,e),m(t,s,e),r=!0},p(t,e){const r=16&e?nt(o,[st(t[4].props)]):{};if(16&e&&a!==(a=t[4].component)){if(n){Z();const t=n;et(t.$$.fragment,1,0,(()=>{it(t,1)})),Q()}a?(n=L(a,i()),rt(n.$$.fragment),tt(n.$$.fragment,1),at(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&tt(n.$$.fragment,t),r=!0)},o(t){n&&et(n.$$.fragment,t),r=!1},d(t){t&&g(s),n&&it(n,t)}}}function It(t){let e,n;return e=new xt({props:{error:t[0],status:t[1]}}),{c(){rt(e.$$.fragment)},l(t){ot(e.$$.fragment,t)},m(t,s){at(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function St(t){let e,n,s,r;const o=[It,At],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=v()},l(t){n.l(t),s=v()},m(t,n){a[e].m(t,n),m(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(Z(),et(a[c],1,1,(()=>{a[c]=null})),Q(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),tt(n,1),n.m(s.parentNode,s))},i(t){r||(tt(n),r=!0)},o(t){et(n),r=!1},d(t){a[e].d(t),t&&g(s)}}}function kt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new gt({props:o}),{c(){rt(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,e){at(n,t,e),s=!0},p(t,[e]){const s=12&e?nt(r,[4&e&&{segment:t[2][0]},8&e&&st(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(tt(n.$$.fragment,t),s=!0)},o(t){et(n.$$.fragment,t),s=!1},d(t){it(n,t)}}}function Nt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var f,u,h;return f=l,M().$$.after_update.push(f),u=dt,h=s,M().$$.context.set(u,h),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class jt extends ft{constructor(t){super(),lt(this,t,Nt,kt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Pt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Tt=[{js:()=>Promise.all([import("./index.ecbc13e1.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about-after-effects.ae750ffd.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./projects.963f11c4.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./videos.fc1ffdb1.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.e38a1851.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.29d606d8.js"),__inject_styles(["index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].b1725b51.js"),]).then((function(t){return t[0]}))}],Ct=(Rt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about-after-effects\/?$/,parts:[{i:1}]},{pattern:/^\/projects\/?$/,parts:[{i:2}]},{pattern:/^\/videos\/?$/,parts:[{i:3}]},{pattern:/^\/about\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:6,params:t=>({slug:Rt(t[1])})}]}]);var Rt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Dt(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function Lt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Ot,Mt=1;const Vt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},qt={};let Ut,Jt;function Bt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(s):e[n]=s})),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ut))return null;let e=t.pathname.slice(Ut.length);if(""===e&&(e="/"),!Pt.some((t=>t.test(e))))for(let n=0;n<Ct.length;n+=1){const s=Ct[n],r=s.pattern.exec(e);if(r){const n=Bt(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Lt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=Ht(r);if(o){Wt(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),Vt.pushState({id:Ot},"",r.href)}}function zt(){return{x:pageXOffset,y:pageYOffset}}function Gt(t){if(qt[Ot]=zt(),t.state){const e=Ht(new URL(location.href));e?Wt(e,t.state.id):location.href=location.href}else Mt=Mt+1,function(t){Ot=t}(Mt),Vt.replaceState({id:Ot},"",location.href)}function Wt(t,e,n,s){return Dt(this,void 0,void 0,(function*(){const r=!!e;if(r)Ot=e;else{const t=zt();qt[Ot]=t,Ot=e=++Mt,qt[Ot]=n?t:{x:0,y:0}}if(yield Jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=qt[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),qt[Ot]=n,r||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ft(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Kt,Xt=null;function Zt(t){const e=Lt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ht(new URL(t,Ft(document)));if(e)Xt&&t===Xt.href||(Xt={href:t,promise:me(e)}),Xt.promise}(e.href)}function Qt(t){clearTimeout(Kt),Kt=setTimeout((()=>{Zt(t)}),20)}function te(t,e={noscroll:!1,replaceState:!1}){const n=Ht(new URL(t,Ft(document)));return n?(Vt[e.replaceState?"replaceState":"pushState"]({id:Ot},"",t),Wt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const ee="undefined"!=typeof __SAPPER__&&__SAPPER__;let ne,se,re,oe=!1,ae=[],ie="{}";const ce={page:function(t){const e=ht(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:ht(null),session:ht(ee&&ee.session)};let le,fe,ue;function he(t,e){const{error:n}=t;return Object.assign({error:n},e)}function de(t){return Dt(this,void 0,void 0,(function*(){ne&&ce.preloading.set(!0);const e=function(t){return Xt&&Xt.href===t.href?Xt.promise:me(t)}(t),n=se={},s=yield e,{redirect:r}=s;if(n===se)if(r)yield te(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield pe(n,e,he(e,t.page))}}))}function pe(t,e,n){return Dt(this,void 0,void 0,(function*(){ce.page.set(n),ce.preloading.set(!1),ne?ne.$set(e):(e.stores={page:{subscribe:ce.page.subscribe},preloading:{subscribe:ce.preloading.subscribe},session:ce.session},e.level0={props:yield re},e.notify=ce.page.notify,ne=new jt({target:ue,props:e,hydrate:!0})),ae=t,ie=JSON.stringify(n.query),oe=!0,fe=!1}))}function me(t){return Dt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!re){const t=()=>({});re=ee.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},le)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;i=yield Promise.all(e.parts.map(((e,i)=>Dt(this,void 0,void 0,(function*(){const u=s[i];if(function(t,e,n,s){if(s!==ie)return!0;const r=ae[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,u,l,r)&&(f=!0),o.segments[c]=s[i+1],!e)return{segment:u};const h=c++;if(!fe&&!f&&ae[i]&&ae[i].part===e.i)return ae[i];f=!1;const{default:d,preload:p}=yield Tt[e.i].js();let m;return m=oe||!ee.preloaded[i+1]?p?yield p.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},le):{}:ee.preloaded[i+1],o[`level${h}`]={component:d,props:m,segment:u,match:l,part:e.i}})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var ge,_e,ye;ce.session.subscribe((t=>Dt(void 0,void 0,void 0,(function*(){if(le=t,!oe)return;fe=!0;const e=Ht(new URL(location.href)),n=se={},{redirect:s,props:r,branch:o}=yield me(e);n===se&&(s?yield te(s.location,{replaceState:!0}):yield pe(o,r,he(r,e.page)))})))),ge={target:document.querySelector("#sapper")},_e=ge.target,ue=_e,ye=ee.baseUrl,Ut=ye,Jt=de,"scrollRestoration"in Vt&&(Vt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Vt.scrollRestoration="auto"})),addEventListener("load",(()=>{Vt.scrollRestoration="manual"})),addEventListener("click",Yt),addEventListener("popstate",Gt),addEventListener("touchstart",Zt),addEventListener("mousemove",Qt),ee.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=ee;re||(re=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:re},level1:{props:{status:o,error:a},component:xt},segments:r},c=Bt(n);pe([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Vt.replaceState({id:Mt},"",e);const n=Ht(new URL(location.href));if(n)return Wt(n,Mt,!0,t)}));export{D as H,bt as N,ft as S,$ as a,w as b,I as c,S as d,y as e,g as f,k as g,E as h,lt as i,m as j,d as k,P as l,rt as m,ot as n,T as o,at as p,tt as q,et as r,a as s,b as t,it as u,_ as v,t as w,c as x,j as y,C as z};

import __inject_styles from './inject_styles.5607aec6.js';