function t(){}function e(t,e){for(const s in e)t[s]=e[s];return t}function s(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(s)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,s,n,a){return t[1]&&a?e(n.ctx.slice(),t[1](a(s))):n.ctx}let f,u=!1;function h(t,e,s,n){for(;t<e;){const a=t+(e-t>>1);s(a)<=n?t=a+1:e=a}return t}function d(t,e){if(u){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let s=0;s<e.length;s++){const n=e[s];void 0!==n.claim_order&&t.push(n)}e=t}const s=new Int32Array(e.length+1),n=new Int32Array(e.length);s[0]=-1;let a=0;for(let t=0;t<e.length;t++){const r=e[t].claim_order,o=(a>0&&e[s[a]].claim_order<=r?a+1:h(1,a,(t=>e[s[t]].claim_order),r))-1;n[t]=s[o]+1;const i=o+1;s[i]=t,a=Math.max(i,a)}const r=[],o=[];let i=e.length-1;for(let t=s[a]+1;0!=t;t=n[t-1]){for(r.push(e[t-1]);i>=t;i--)o.push(e[i]);i--}for(;i>=0;i--)o.push(e[i]);r.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,s=0;e<o.length;e++){for(;s<r.length&&o[e].claim_order>=r[s].claim_order;)s++;const n=s<r.length?r[s]:null;t.insertBefore(o[e],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function p(t,e,s){t.insertBefore(e,s||null)}function m(t,e,s){u&&!s?d(t,e):e.parentNode===t&&e.nextSibling==s||t.insertBefore(e,s||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function $(){return b("")}function E(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function k(t){return Array.from(t.childNodes)}function I(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,e,s,n,a=!1){I(t);const r=(()=>{for(let n=t.claim_info.last_index;n<t.length;n++){const r=t[n];if(e(r)){const e=s(r);return void 0===e?t.splice(n,1):t[n]=e,a||(t.claim_info.last_index=n),r}}for(let n=t.claim_info.last_index-1;n>=0;n--){const r=t[n];if(e(r)){const e=s(r);return void 0===e?t.splice(n,1):t[n]=e,a?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=n,r}}return n()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function w(t,e,s){return function(t,e,s,n){return A(t,(t=>t.nodeName===e),(t=>{const e=[];for(let n=0;n<t.attributes.length;n++){const a=t.attributes[n];s[a.name]||e.push(a.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>n(e)))}(t,e,s,y)}function S(t,e){return A(t,(t=>3===t.nodeType),(t=>{const s=""+e;if(t.data.startsWith(s)){if(t.data.length!==s.length)return t.splitText(s.length)}else t.data=s}),(()=>b(e)),!0)}function x(t){return S(t," ")}function N(t,e,s){for(let n=s;n<t.length;n+=1){const s=t[n];if(8===s.nodeType&&s.textContent.trim()===e)return n}return t.length}function j(t,e){const s=N(t,"HTML_TAG_START",0),n=N(t,"HTML_TAG_END",s);if(s===n)return new D(void 0,e);I(t);const a=t.splice(s,n-s+1);g(a[0]),g(a[a.length-1]);const r=a.slice(1,a.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(r,e)}function P(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e,s,n){null==s?t.style.removeProperty(e):t.style.setProperty(e,s,n?"important":"")}function C(t,e){const s=[];let n=0;for(const a of e.childNodes)if(8===a.nodeType){const e=a.textContent.trim();e===`HEAD_${t}_END`?(n-=1,s.push(a)):e===`HEAD_${t}_START`&&(n+=1,s.push(a))}else n>0&&s.push(a);return s}class R{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,s=null){var n;this.e||(this.is_svg?this.e=(n=e.nodeName,document.createElementNS("http://www.w3.org/2000/svg",n)):this.e=y(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(g)}}class D extends R{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)m(this.t,this.n[e],t)}}function L(t,e){return new t(e)}function O(t){f=t}function M(){if(!f)throw new Error("Function called outside component initialization");return f}const V=[],q=[];let J=[];const z=[],U=Promise.resolve();let H=!1;function B(t){J.push(t)}const F=new Set;let Y=0;function G(){if(0!==Y)return;const t=f;do{try{for(;Y<V.length;){const t=V[Y];Y++,O(t),W(t.$$)}}catch(t){throw V.length=0,Y=0,t}for(O(null),V.length=0,Y=0;q.length;)q.pop()();for(let t=0;t<J.length;t+=1){const e=J[t];F.has(e)||(F.add(e),e())}J.length=0}while(V.length);for(;z.length;)z.pop()();H=!1,F.clear(),O(t)}function W(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const K=new Set;let X;function Z(){X={r:0,c:[],p:X}}function Q(){X.r||a(X.c),X=X.p}function tt(t,e){t&&t.i&&(K.delete(t),t.i(e))}function et(t,e,s,n){if(t&&t.o){if(K.has(t))return;K.add(t),X.c.push((()=>{K.delete(t),n&&(s&&t.d(1),n())})),t.o(e)}else n&&n()}function st(t,e){const s={},n={},a={$$scope:1};let r=t.length;for(;r--;){const o=t[r],i=e[r];if(i){for(const t in o)t in i||(n[t]=1);for(const t in i)a[t]||(s[t]=i[t],a[t]=1);t[r]=i}else for(const t in o)a[t]=1}for(const t in n)t in s||(s[t]=void 0);return s}function nt(t){return"object"==typeof t&&null!==t?t:{}}function at(t){t&&t.c()}function rt(t,e){t&&t.l(e)}function ot(t,e,n,o){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,n),o||B((()=>{const e=t.$$.on_mount.map(s).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):a(e),t.$$.on_mount=[]})),c.forEach(B)}function it(t,e){const s=t.$$;null!==s.fragment&&(!function(t){const e=[],s=[];J.forEach((n=>-1===t.indexOf(n)?e.push(n):s.push(n))),s.forEach((t=>t())),J=e}(s.after_update),a(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(V.push(t),H||(H=!0,U.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,s,r,o,i,c,l,h=[-1]){const d=f;O(e);const p=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:s.target||d.$$.root};l&&l(p.root);let m=!1;if(p.ctx=r?r(e,s.props||{},((t,s,...n)=>{const a=n.length?n[0]:s;return p.ctx&&i(p.ctx[t],p.ctx[t]=a)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](a),m&&ct(e,t)),s})):[],p.update(),m=!0,a(p.before_update),p.fragment=!!o&&o(p.ctx),s.target){if(s.hydrate){u=!0;const t=k(s.target);p.fragment&&p.fragment.l(t),t.forEach(g)}else p.fragment&&p.fragment.c();s.intro&&tt(e.$$.fragment),ot(e,s.target,s.anchor,s.customElement),u=!1,G()}O(d)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(e,s){if(!r(s))return t;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const t=n.indexOf(s);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function ht(e,s=t){let n;const a=new Set;function r(t){if(o(e,t)&&(e=t,n)){const t=!ut.length;for(const t of a)t[1](),ut.push(t,e);if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,i=t){const c=[o,i];return a.add(c),1===a.size&&(n=s(r)||t),o(e),()=>{a.delete(c),0===a.size&&n&&(n(),n=null)}}}}const dt={};function pt(t){let e,s;const n=t[1].default,a=function(t,e,s,n){if(t){const a=l(t,e,s,n);return t[0](a)}}(n,t,t[0],null);return{c(){e=y("main"),a&&a.c()},l(t){e=w(t,"MAIN",{});var s=k(e);a&&a.l(s),s.forEach(g)},m(t,n){m(t,e,n),a&&a.m(e,null),s=!0},p(t,[e]){a&&a.p&&(!s||1&e)&&function(t,e,s,n,a,r){if(a){const o=l(e,s,n,r);t.p(o,a)}}(a,n,t,t[0],s?function(t,e,s,n){if(t[2]&&n){const a=t[2](n(s));if(void 0===e.dirty)return a;if("object"==typeof a){const t=[],s=Math.max(e.dirty.length,a.length);for(let n=0;n<s;n+=1)t[n]=e.dirty[n]|a[n];return t}return e.dirty|a}return e.dirty}(n,t[0],e,null):function(t){if(t.ctx.length>32){const e=[],s=t.ctx.length/32;for(let t=0;t<s;t++)e[t]=-1;return e}return-1}(t[0]),null)},i(t){s||(tt(a,t),s=!0)},o(t){et(a,t),s=!1},d(t){t&&g(e),a&&a.d(t)}}}function mt(t,e,s){let{$$slots:n={},$$scope:a}=e;return t.$$set=t=>{"$$scope"in t&&s(0,a=t.$$scope)},[a,n]}class gt extends ft{constructor(t){super(),lt(this,t,mt,pt,o,{})}}function _t(e){let s,n,a,r,o,i,l,f,u,h,p,_,$,I,A,N,j,P,C,R,D,L,O,M,V,q,J,z,U,H,B,F,Y,G,W,K,X,Z,Q,tt,et,st,nt,at,rt,ot,it,ct,lt,ft,ut,ht,dt,pt,mt,gt,_t,yt,bt,vt,$t,Et,kt,It,At,wt,St,xt,Nt,jt,Pt,Tt,Ct,Rt;return{c(){s=y("div"),n=y("img"),r=v(),o=y("div"),i=y("a"),l=y("img"),u=v(),h=y("div"),p=y("div"),_=y("div"),$=y("a"),I=v(),A=y("a"),N=v(),j=y("a"),P=v(),C=y("a"),R=v(),D=y("a"),L=v(),O=y("a"),M=v(),V=y("a"),q=v(),J=y("div"),z=y("div"),U=y("a"),H=b("About Me"),B=v(),F=y("a"),Y=b("Friends!!"),G=v(),W=y("a"),K=b("DNI List"),X=v(),Z=y("br"),Q=v(),tt=y("div"),et=y("div"),st=y("a"),nt=v(),at=y("a"),rt=v(),ot=y("a"),it=v(),ct=y("a"),lt=v(),ft=y("a"),ut=v(),ht=y("a"),dt=v(),pt=y("a"),mt=v(),gt=y("a"),_t=v(),yt=y("a"),bt=v(),vt=y("a"),$t=v(),Et=y("a"),kt=v(),It=y("a"),At=v(),wt=y("a"),St=v(),xt=y("a"),Nt=v(),jt=y("a"),Pt=v(),Tt=y("a"),Ct=v(),Rt=y("a"),this.h()},l(t){s=w(t,"DIV",{class:!0});var e=k(s);n=w(e,"IMG",{src:!0,style:!0,alt:!0}),r=x(e),o=w(e,"DIV",{id:!0});var a=k(o);i=w(a,"A",{href:!0});var c=k(i);l=w(c,"IMG",{class:!0,id:!0,alt:!0,src:!0}),c.forEach(g),a.forEach(g),u=x(e),h=w(e,"DIV",{class:!0});var f=k(h);p=w(f,"DIV",{class:!0});var d=k(p);_=w(d,"DIV",{});var m=k(_);$=w(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0,alt:!0}),k($).forEach(g),I=x(m),A=w(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0}),k(A).forEach(g),N=x(m),j=w(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0}),k(j).forEach(g),P=x(m),C=w(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0}),k(C).forEach(g),R=x(m),D=w(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0}),k(D).forEach(g),L=x(m),O=w(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0}),k(O).forEach(g),M=x(m),V=w(m,"A",{class:!0,style:!0,title:!0,target:!0,href:!0}),k(V).forEach(g),m.forEach(g),d.forEach(g),f.forEach(g),q=x(e),J=w(e,"DIV",{class:!0});var y=k(J);z=w(y,"DIV",{class:!0});var b=k(z);U=w(b,"A",{class:!0,href:!0,style:!0});var v=k(U);H=S(v,"About Me"),v.forEach(g),B=x(b),F=w(b,"A",{class:!0,href:!0,style:!0});var E=k(F);Y=S(E,"Friends!!"),E.forEach(g),G=x(b),W=w(b,"A",{class:!0,href:!0,style:!0});var T=k(W);K=S(T,"DNI List"),T.forEach(g),X=x(b),Z=w(b,"BR",{}),b.forEach(g),y.forEach(g),Q=x(e),tt=w(e,"DIV",{class:!0});var Dt=k(tt);et=w(Dt,"DIV",{class:!0});var Lt=k(et);st=w(Lt,"A",{class:!0,href:!0,style:!0}),k(st).forEach(g),nt=x(Lt),at=w(Lt,"A",{class:!0,href:!0,title:!0,style:!0}),k(at).forEach(g),rt=x(Lt),ot=w(Lt,"A",{class:!0,href:!0,title:!0,style:!0}),k(ot).forEach(g),it=x(Lt),ct=w(Lt,"A",{class:!0,href:!0,title:!0,style:!0}),k(ct).forEach(g),lt=x(Lt),ft=w(Lt,"A",{class:!0,href:!0,style:!0}),k(ft).forEach(g),ut=x(Lt),ht=w(Lt,"A",{class:!0,href:!0,style:!0}),k(ht).forEach(g),dt=x(Lt),pt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(pt).forEach(g),mt=x(Lt),gt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(gt).forEach(g),_t=x(Lt),yt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(yt).forEach(g),bt=x(Lt),vt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(vt).forEach(g),$t=x(Lt),Et=w(Lt,"A",{class:!0,href:!0,style:!0}),k(Et).forEach(g),kt=x(Lt),It=w(Lt,"A",{class:!0,href:!0,style:!0}),k(It).forEach(g),At=x(Lt),wt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(wt).forEach(g),St=x(Lt),xt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(xt).forEach(g),Nt=x(Lt),jt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(jt).forEach(g),Pt=x(Lt),Tt=w(Lt,"A",{class:!0,href:!0,title:!0,style:!0}),k(Tt).forEach(g),Ct=x(Lt),Rt=w(Lt,"A",{class:!0,href:!0,style:!0}),k(Rt).forEach(g),Lt.forEach(g),Dt.forEach(g),e.forEach(g),this.h()},h(){c(n.src,a="assets/mayo.gif")||E(n,"src","assets/mayo.gif"),T(n,"margin-left","2px"),T(n,"margin-bottom","-2px"),E(n,"alt",""),E(l,"class","bruh"),E(l,"id","myPicture"),E(l,"alt",""),c(l.src,f=e[0])||E(l,"src",f),E(i,"href","/"),E(o,"id","logocnt"),E($,"class","sociallink"),T($,"background-image","url('assets/Images/social/youtube32.png')"),E($,"title","YouTube"),E($,"target","_blank"),E($,"href","https://youtube.com/@saraistupid"),E($,"alt",""),E(A,"class","sociallink"),T(A,"background-image","url('assets/Images/social/github32.png')"),E(A,"title","Github"),E(A,"target","_blank"),E(A,"href","https://github.com/Saraistupid"),E(j,"class","sociallink"),T(j,"background-image","url('assets/Images/social/twitter32.png')"),E(j,"title","Twitter"),E(j,"target","_blank"),E(j,"href","https://twitter.com/FishFuckingCEO"),E(C,"class","sociallink"),T(C,"background-image","url('assets/Images/social/lastfm32.png')"),E(C,"title","Last.FM"),E(C,"target","_blank"),E(C,"href","https://www.last.fm/user/Saraistupid"),E(D,"class","sociallink"),T(D,"background-image","url('assets/Images/social/spacehey32.png')"),E(D,"title","Spacehey"),E(D,"target","_blank"),E(D,"href","https://spacehey.com/saraistupid"),E(O,"class","sociallink"),T(O,"background-image","url('assets/Images/social/myanimelist32.png')"),E(O,"title","MyAnimeList"),E(O,"target","_blank"),E(O,"href","https://myanimelist.net/profile/Saraistupid"),E(V,"class","sociallink"),T(V,"background-image","url('assets/Images/social/kofi32.png')"),E(V,"title","Ko-fi (I NEED MONEY 😭)"),E(V,"target","_blank"),E(V,"href","https://ko-fi.com/saraistupid"),E(p,"class","pad2"),E(h,"class","grid_1"),E(U,"class","links"),E(U,"href","about"),T(U,"color","white"),E(F,"class","links"),E(F,"href","frens"),T(F,"color","white"),E(W,"class","links"),E(W,"href","dni"),T(W,"color","white"),E(z,"class","pad2"),E(J,"class","grid_1"),E(st,"class","menulink"),E(st,"href","/"),T(st,"background-image","url('../assets/Images/tabs/homepage.gif')"),E(at,"class","menulink"),E(at,"href","https://rheavenstudio.github.io/"),E(at,"title","i did things for Heaven Studio i guess."),T(at,"background-image","url('assets/Images/tabs/heavenstudio.png')"),E(ot,"class","menulink"),E(ot,"href","https://starpelly.com"),E(ot,"title","fuck you pelly for putting me above the hacka doll tab on your website, you caused total tranny death by doing that."),T(ot,"background-image","url('assets/Images/tabs/starpelly.gif')"),E(ct,"class","menulink"),E(ct,"href","https://myanimelist.net/anime/1887/Lucky%E2%98%86Star"),E(ct,"title","i jacked off to futanari konata porn at least 2000 times at this point"),T(ct,"background-image","url('assets/Images/tabs/luckystar.png')"),E(ft,"class","menulink"),E(ft,"href","https://lmaguire101.neocities.org/"),T(ft,"background-image","url('assets/Images/tabs/d2lta.png')"),E(ht,"class","menulink"),E(ht,"href","https://awesomeville.neocities.org/"),T(ht,"background-image","url('assets/Images/tabs/h4xxor.png')"),E(pt,"class","menulink"),E(pt,"href","https://mitskimash.neocities.org/"),T(pt,"background-image","url('assets/Images/tabs/beppit.png')"),E(gt,"class","menulink"),E(gt,"href","https://jakanz.github.io/"),T(gt,"background-image","url('assets/Images/tabs/jakanz.gif')"),E(yt,"class","menulink"),E(yt,"href","https://www.nicovideo.jp/"),T(yt,"background-image","url('assets/Images/tabs/niconico.gif')"),E(vt,"class","menulink"),E(vt,"href","https://www.youtube.com/watch?v=ddWJatRxfz8"),T(vt,"background-image","url('assets/Images/tabs/octagon.gif')"),E(Et,"class","menulink"),E(Et,"href","https://www.reddit.com/r/unixporn"),T(Et,"background-image","url('assets/Images/tabs/unixporn.png')"),E(It,"class","menulink"),E(It,"href","https://knowyourmeme.com/"),T(It,"background-image","url('assets/Images/tabs/kym.png')"),E(wt,"class","menulink"),E(wt,"href","https://rhythmheaven.fandom.com/wiki/Rhythm_Heaven_Fever"),T(wt,"background-image","url('assets/Images/tabs/rhf.gif')"),E(xt,"class","menulink"),E(xt,"href","https://3ds.hacks.guide/"),T(xt,"background-image","url('assets/Images/tabs/3ds.png')"),E(jt,"class","menulink"),E(jt,"href","https://hshop.erista.me/t/1983/"),T(jt,"background-image","url('assets/Images/tabs/miku.png')"),E(Tt,"class","menulink"),E(Tt,"href","https://genderdysphoria.fyi/"),E(Tt,"title","i don't fully believe in everything this site says, but it has most information needed to start your research on gender dysphoria."),T(Tt,"background-image","url('assets/Images/tabs/gdfyi.png')"),E(Rt,"class","menulink"),E(Rt,"href","/blog/win-81"),T(Rt,"background-image","url('assets/Images/tabs/windows9.png')"),E(et,"class","pad2"),E(tt,"class","grid_1"),E(s,"class","navbarwrap")},m(t,e){m(t,s,e),d(s,n),d(s,r),d(s,o),d(o,i),d(i,l),d(s,u),d(s,h),d(h,p),d(p,_),d(_,$),d(_,I),d(_,A),d(_,N),d(_,j),d(_,P),d(_,C),d(_,R),d(_,D),d(_,L),d(_,O),d(_,M),d(_,V),d(s,q),d(s,J),d(J,z),d(z,U),d(U,H),d(z,B),d(z,F),d(F,Y),d(z,G),d(z,W),d(W,K),d(z,X),d(z,Z),d(s,Q),d(s,tt),d(tt,et),d(et,st),d(et,nt),d(et,at),d(et,rt),d(et,ot),d(et,it),d(et,ct),d(et,lt),d(et,ft),d(et,ut),d(et,ht),d(et,dt),d(et,pt),d(et,mt),d(et,gt),d(et,_t),d(et,yt),d(et,bt),d(et,vt),d(et,$t),d(et,Et),d(et,kt),d(et,It),d(et,At),d(et,wt),d(et,St),d(et,xt),d(et,Nt),d(et,jt),d(et,Pt),d(et,Tt),d(et,Ct),d(et,Rt)},p(t,[e]){1&e&&!c(l.src,f=t[0])&&E(l,"src",f)},i:t,o:t,d(t){t&&g(s)}}}function yt(t,e,s){var n;let a;n=async()=>{!function(){let t=Math.floor(Math.random()*r.length);s(0,a=r[t])}()},M().$$.on_mount.push(n);var r=new Array("https://cdn.discordapp.com/emojis/1064217837377429574.webp?size=256&quality=lossless","https://cdn.discordapp.com/emojis/1103841251658309743.webp?size=256&quality=lossless","assets/Images/funnypics/konatamultiple.gif","https://cdn.discordapp.com/attachments/1013458981110435950/1096439420908998777/5F6AC068-B1E7-43AB-B2A8-AAA0C0A30C33.gif","assets/Images/funnypics/osakatable.gif","https://media.discordapp.net/attachments/1088247236711952426/1102020688480583852/I73Kl36.gif","https://media.discordapp.net/attachments/1085975662306799618/1095354450668961913/mp4.gif","https://media.discordapp.net/attachments/1100169366152171621/1100924936069054515/1682287855784373.gif","assets/Images/funnypics/miku-hi.gif","assets/Images/funnypics/rumia-fish.gif","https://cdn.discordapp.com/attachments/862760859318485032/1107323932371067050/YUN4Ff1.png","https://cdn.discordapp.com/attachments/862760859318485032/1103301056265474078/IMG_3242.jpg","https://cdn.discordapp.com/attachments/862760859318485032/1102317069258735727/image.png","https://cdn.discordapp.com/attachments/862760859318485032/1100176216205570149/58858195-9563-4AC2-8A10-F3E54E057A35.png","https://cdn.discordapp.com/attachments/862760859318485032/1099507837685747803/FuXCLqtXgAAC8PW.png","https://cdn.discordapp.com/attachments/862760859318485032/1098793536016625714/20230420_135238.png","https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjgxYWQwNzJmNjA1ZWE5ODIxY2ExYjdmYmNhNGFjN2VjZTllYjgzOCZjdD1n/7swI8UqW1zxnO6alD5/giphy.gif","https://cdn.discordapp.com/attachments/862760859318485032/1095720914311716894/image.png","https://cdn.discordapp.com/attachments/862760859318485032/1094256161475285012/image1.png","https://cdn.discordapp.com/attachments/862760859318485032/1087332923176386560/unknown-24-1.png","https://cdn.discordapp.com/attachments/862760859318485032/1086393521524715520/292115369_1014164495952002_7667198934088117272_n.png","https://media.discordapp.net/attachments/779632949988687873/936860504272535602/image0-39.gif","assets/Images/funnypics/bleh.gif","https://cdn.discordapp.com/attachments/859838955947163668/1107350427709739130/marisad.gif","https://cdn.discordapp.com/attachments/862760859318485032/1107354516673790003/IMG_1735.png","assets/Images/funnypics/incelracism.gif","assets/Images/funnypics/konata-callout.gif","https://media.discordapp.net/attachments/708513901033029682/892939700707426374/imageedit_567_6354689660.gif","assets/Images/funnypics/drum.gif","https://cdn.discordapp.com/emojis/1093988580751310859.webp?size=256&quality=lossless","https://cdn.discordapp.com/emojis/1098420256671793293.webp?size=256&quality=lossless","https://cdn.discordapp.com/attachments/1141188893778120765/1143869503667712091/nya_im_a_kitty_cat.gif","https://cdn.discordapp.com/attachments/1141188893778120765/1143869542758617188/mario.gif","https://cdn.discordapp.com/attachments/1141188893778120765/1143869260360335412/download_2.jpg","https://cdn.discordapp.com/attachments/1141188893778120765/1143869260934938724/fgovs.png","assets/Images/funnypics/cat.gif","https://media.discordapp.net/attachments/884099943353176104/1027607778732294164/1010106752156586014.gif","https://mitskimash.neocities.org/AS003772_02.gif");return[a]}class bt extends ft{constructor(t){super(),lt(this,t,yt,_t,o,{})}}function vt(t){let e,s,n,a,r=t[1].message+"";return{c(){e=y("p"),s=b("this is probably a bad thing you should message me about this."),n=v(),a=b(r)},l(t){e=w(t,"P",{});var o=k(e);s=S(o,"this is probably a bad thing you should message me about this."),o.forEach(g),n=x(t),a=S(t,r)},m(t,r){m(t,e,r),d(e,s),m(t,n,r),m(t,a,r)},p(t,e){2&e&&r!==(r=t[1].message+"")&&P(a,r)},d(t){t&&g(e),t&&g(n),t&&g(a)}}}function $t(e){let s,n;return{c(){s=y("p"),n=b("I have no idea what you were looking for but if there is meant to be something here please message me.")},l(t){s=w(t,"P",{});var e=k(s);n=S(e,"I have no idea what you were looking for but if there is meant to be something here please message me."),e.forEach(g)},m(t,e){m(t,s,e),d(s,n)},p:t,d(t){t&&g(s)}}}function Et(t){let e,s,n,a,r,o,i,c,l,f,u,h,p,_,$;function I(t,e){return 404==t[0]?$t:vt}s=new bt({});let A=I(t),N=A(t);return{c(){e=y("div"),at(s.$$.fragment),n=v(),a=y("div"),r=y("div"),o=y("h1"),i=b(t[0]),c=v(),l=y("div"),f=y("div"),u=y("div"),N.c(),h=v(),p=y("h1"),_=b("Saraistupid#5127"),this.h()},l(d){e=w(d,"DIV",{class:!0});var m=k(e);rt(s.$$.fragment,m),n=x(m),a=w(m,"DIV",{class:!0});var y=k(a);r=w(y,"DIV",{class:!0,style:!0});var b=k(r);o=w(b,"H1",{});var v=k(o);i=S(v,t[0]),v.forEach(g),b.forEach(g),c=x(y),l=w(y,"DIV",{class:!0});var $=k(l);f=w($,"DIV",{class:!0});var E=k(f);u=w(E,"DIV",{class:!0});var I=k(u);N.l(I),h=x(I),p=w(I,"H1",{});var A=k(p);_=S(A,"Saraistupid#5127"),A.forEach(g),I.forEach(g),E.forEach(g),$.forEach(g),y.forEach(g),m.forEach(g),this.h()},h(){E(r,"class","contenttitle"),T(r,"background-image","url('https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg')"),E(u,"class","articlebody"),E(f,"class","article"),E(l,"class","contentpad"),E(a,"class","grid_3"),E(e,"class","container container_4")},m(t,g){m(t,e,g),ot(s,e,null),d(e,n),d(e,a),d(a,r),d(r,o),d(o,i),d(a,c),d(a,l),d(l,f),d(f,u),N.m(u,null),d(u,h),d(u,p),d(p,_),$=!0},p(t,[e]){(!$||1&e)&&P(i,t[0]),A===(A=I(t))&&N?N.p(t,e):(N.d(1),N=A(t),N&&(N.c(),N.m(u,h)))},i(t){$||(tt(s.$$.fragment,t),$=!0)},o(t){et(s.$$.fragment,t),$=!1},d(t){t&&g(e),it(s),N.d()}}}function kt(t,e,s){let{status:n}=e,{error:a}=e;return t.$$set=t=>{"status"in t&&s(0,n=t.status),"error"in t&&s(1,a=t.error)},[n,a]}class It extends ft{constructor(t){super(),lt(this,t,kt,Et,o,{status:0,error:1})}}function At(t){let s,n,a;const r=[t[4].props];var o=t[4].component;function i(t){let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return{props:s}}return o&&(s=L(o,i())),{c(){s&&at(s.$$.fragment),n=$()},l(t){s&&rt(s.$$.fragment,t),n=$()},m(t,e){s&&ot(s,t,e),m(t,n,e),a=!0},p(t,e){const a=16&e?st(r,[nt(t[4].props)]):{};if(16&e&&o!==(o=t[4].component)){if(s){Z();const t=s;et(t.$$.fragment,1,0,(()=>{it(t,1)})),Q()}o?(s=L(o,i()),at(s.$$.fragment),tt(s.$$.fragment,1),ot(s,n.parentNode,n)):s=null}else o&&s.$set(a)},i(t){a||(s&&tt(s.$$.fragment,t),a=!0)},o(t){s&&et(s.$$.fragment,t),a=!1},d(t){t&&g(n),s&&it(s,t)}}}function wt(t){let e,s;return e=new It({props:{error:t[0],status:t[1]}}),{c(){at(e.$$.fragment)},l(t){rt(e.$$.fragment,t)},m(t,n){ot(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.error=t[0]),2&s&&(n.status=t[1]),e.$set(n)},i(t){s||(tt(e.$$.fragment,t),s=!0)},o(t){et(e.$$.fragment,t),s=!1},d(t){it(e,t)}}}function St(t){let e,s,n,a;const r=[wt,At],o=[];function i(t,e){return t[0]?0:1}return e=i(t),s=o[e]=r[e](t),{c(){s.c(),n=$()},l(t){s.l(t),n=$()},m(t,s){o[e].m(t,s),m(t,n,s),a=!0},p(t,a){let c=e;e=i(t),e===c?o[e].p(t,a):(Z(),et(o[c],1,1,(()=>{o[c]=null})),Q(),s=o[e],s?s.p(t,a):(s=o[e]=r[e](t),s.c()),tt(s,1),s.m(n.parentNode,n))},i(t){a||(tt(s),a=!0)},o(t){et(s),a=!1},d(t){o[e].d(t),t&&g(n)}}}function xt(t){let s,n;const a=[{segment:t[2][0]},t[3].props];let r={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)r=e(r,a[t]);return s=new gt({props:r}),{c(){at(s.$$.fragment)},l(t){rt(s.$$.fragment,t)},m(t,e){ot(s,t,e),n=!0},p(t,[e]){const n=12&e?st(a,[4&e&&{segment:t[2][0]},8&e&&nt(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(tt(s.$$.fragment,t),n=!0)},o(t){et(s.$$.fragment,t),n=!1},d(t){it(s,t)}}}function Nt(t,e,s){let{stores:n}=e,{error:a}=e,{status:r}=e,{segments:o}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var f,u,h;return f=l,M().$$.after_update.push(f),u=dt,h=n,M().$$.context.set(u,h),t.$$set=t=>{"stores"in t&&s(5,n=t.stores),"error"in t&&s(0,a=t.error),"status"in t&&s(1,r=t.status),"segments"in t&&s(2,o=t.segments),"level0"in t&&s(3,i=t.level0),"level1"in t&&s(4,c=t.level1),"notify"in t&&s(6,l=t.notify)},[a,r,o,i,c,n,l]}class jt extends ft{constructor(t){super(),lt(this,t,Nt,xt,o,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Pt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Tt=[{js:()=>Promise.all([import("./index.081b3104.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about-after-effects.1407af75.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./projects.2448565f.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./videos.4e03857b.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.77383739.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./frens.c54fd522.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.805cf07a.js"),__inject_styles(["index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].065c5f24.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./dni.cc773d47.js"),]).then((function(t){return t[0]}))}],Ct=(Rt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about-after-effects\/?$/,parts:[{i:1}]},{pattern:/^\/projects\/?$/,parts:[{i:2}]},{pattern:/^\/videos\/?$/,parts:[{i:3}]},{pattern:/^\/about\/?$/,parts:[{i:4}]},{pattern:/^\/frens\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:7,params:t=>({slug:Rt(t[1])})}]},{pattern:/^\/dni\/?$/,parts:[{i:8}]}]);var Rt;
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
function Dt(t,e,s,n){return new(s||(s=Promise))((function(a,r){function o(t){try{c(n.next(t))}catch(t){r(t)}}function i(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,i)}c((n=n.apply(t,e||[])).next())}))}function Lt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Ot,Mt=1;const Vt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},qt={};let Jt,zt;function Ut(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,s,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[s]&&(e[s]=[e[s]]),"object"==typeof e[s]?e[s].push(n):e[s]=n})),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Jt))return null;let e=t.pathname.slice(Jt.length);if(""===e&&(e="/"),!Pt.some((t=>t.test(e))))for(let s=0;s<Ct.length;s+=1){const n=Ct[s],a=n.pattern.exec(e);if(a){const s=Ut(t.search),r=n.parts[n.parts.length-1],o=r.params?r.params(a):{},i={host:location.host,path:e,query:s,params:o};return{href:t.href,route:n,match:a,page:i}}}}function Bt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Lt(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,n=String(s?e.href.baseVal:e.href);if(n===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const a=new URL(n);if(a.pathname===location.pathname&&a.search===location.search)return;const r=Ht(a);if(r){Gt(r,null,e.hasAttribute("sapper:noscroll"),a.hash),t.preventDefault(),Vt.pushState({id:Ot},"",a.href)}}function Ft(){return{x:pageXOffset,y:pageYOffset}}function Yt(t){if(qt[Ot]=Ft(),t.state){const e=Ht(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else Mt=Mt+1,function(t){Ot=t}(Mt),Vt.replaceState({id:Ot},"",location.href)}function Gt(t,e,s,n){return Dt(this,void 0,void 0,(function*(){const a=!!e;if(a)Ot=e;else{const t=Ft();qt[Ot]=t,Ot=e=++Mt,qt[Ot]=s?t:{x:0,y:0}}if(yield zt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!s){let t,s=qt[e];n&&(t=document.getElementById(n.slice(1)),t&&(s={x:0,y:t.getBoundingClientRect().top+scrollY})),qt[Ot]=s,a||t?scrollTo(s.x,s.y):scrollTo(0,0)}}))}function Wt(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}let Kt,Xt=null;function Zt(t){const e=Lt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ht(new URL(t,Wt(document)));if(e)Xt&&t===Xt.href||(Xt={href:t,promise:me(e)}),Xt.promise}(e.href)}function Qt(t){clearTimeout(Kt),Kt=setTimeout((()=>{Zt(t)}),20)}function te(t,e={noscroll:!1,replaceState:!1}){const s=Ht(new URL(t,Wt(document)));return s?(Vt[e.replaceState?"replaceState":"pushState"]({id:Ot},"",t),Gt(s,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const ee="undefined"!=typeof __SAPPER__&&__SAPPER__;let se,ne,ae,re=!1,oe=[],ie="{}";const ce={page:function(t){const e=ht(t);let s=!0;return{notify:function(){s=!0,e.update((t=>t))},set:function(t){s=!1,e.set(t)},subscribe:function(t){let n;return e.subscribe((e=>{(void 0===n||s&&e!==n)&&t(n=e)}))}}}({}),preloading:ht(null),session:ht(ee&&ee.session)};let le,fe,ue;function he(t,e){const{error:s}=t;return Object.assign({error:s},e)}function de(t){return Dt(this,void 0,void 0,(function*(){se&&ce.preloading.set(!0);const e=function(t){return Xt&&Xt.href===t.href?Xt.promise:me(t)}(t),s=ne={},n=yield e,{redirect:a}=n;if(s===ne)if(a)yield te(a.location,{replaceState:!0});else{const{props:e,branch:s}=n;yield pe(s,e,he(e,t.page))}}))}function pe(t,e,s){return Dt(this,void 0,void 0,(function*(){ce.page.set(s),ce.preloading.set(!1),se?se.$set(e):(e.stores={page:{subscribe:ce.page.subscribe},preloading:{subscribe:ce.preloading.subscribe},session:ce.session},e.level0={props:yield ae},e.notify=ce.page.notify,se=new jt({target:ue,props:e,hydrate:!0})),oe=t,ie=JSON.stringify(s.query),re=!0,fe=!1}))}function me(t){return Dt(this,void 0,void 0,(function*(){const{route:e,page:s}=t,n=s.path.split("/").filter(Boolean);let a=null;const r={error:null,status:200,segments:[n[0]]},o={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:(t,e)=>{r.error="string"==typeof e?new Error(e):e,r.status=t}};if(!ae){const t=()=>({});ae=ee.preloaded[0]||t.call(o,{host:s.host,path:s.path,query:s.query,params:{}},le)}let i,c=1;try{const a=JSON.stringify(s.query),l=e.pattern.exec(s.path);let f=!1;i=yield Promise.all(e.parts.map(((e,i)=>Dt(this,void 0,void 0,(function*(){const u=n[i];if(function(t,e,s,n){if(n!==ie)return!0;const a=oe[t];return!!a&&(e!==a.segment||!(!a.match||JSON.stringify(a.match.slice(1,t+2))===JSON.stringify(s.slice(1,t+2)))||void 0)}(i,u,l,a)&&(f=!0),r.segments[c]=n[i+1],!e)return{segment:u};const h=c++;if(!fe&&!f&&oe[i]&&oe[i].part===e.i)return oe[i];f=!1;const{default:d,preload:p}=yield Tt[e.i].js();let m;return m=re||!ee.preloaded[i+1]?p?yield p.call(o,{host:s.host,path:s.path,query:s.query,params:e.params?e.params(t.match):{}},le):{}:ee.preloaded[i+1],r[`level${h}`]={component:d,props:m,segment:u,match:l,part:e.i}})))))}catch(t){r.error=t,r.status=500,i=[]}return{redirect:a,props:r,branch:i}}))}var ge,_e,ye;ce.session.subscribe((t=>Dt(void 0,void 0,void 0,(function*(){if(le=t,!re)return;fe=!0;const e=Ht(new URL(location.href)),s=ne={},{redirect:n,props:a,branch:r}=yield me(e);s===ne&&(n?yield te(n.location,{replaceState:!0}):yield pe(r,a,he(a,e.page)))})))),ge={target:document.querySelector("#sapper")},_e=ge.target,ue=_e,ye=ee.baseUrl,Jt=ye,zt=de,"scrollRestoration"in Vt&&(Vt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Vt.scrollRestoration="auto"})),addEventListener("load",(()=>{Vt.scrollRestoration="manual"})),addEventListener("click",Bt),addEventListener("popstate",Yt),addEventListener("touchstart",Zt),addEventListener("mousemove",Qt),ee.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:s}=location,{session:n,preloaded:a,status:r,error:o}=ee;ae||(ae=a&&a[0]);const i={error:o,status:r,session:n,level0:{props:ae},level1:{props:{status:r,error:o},component:It},segments:a},c=Ut(s);pe([],i,{host:t,path:e,query:c,params:{},error:o})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Vt.replaceState({id:Mt},"",e);const s=Ht(new URL(location.href));if(s)return Gt(s,Mt,!0,t)}));export{D as H,bt as N,ft as S,v as a,k as b,w as c,S as d,y as e,g as f,x as g,E as h,lt as i,m as j,d as k,P as l,at as m,rt as n,T as o,ot as p,tt as q,et as r,o as s,b as t,it as u,_ as v,t as w,c as x,j as y,C as z};

import __inject_styles from './inject_styles.5607aec6.js';