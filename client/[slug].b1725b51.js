import{S as t,i as s,s as a,N as e,e as r,m as c,a as i,t as n,c as d,b as o,n as l,g as h,d as u,f,z as m,h as p,o as v,j as E,p as I,k as D,l as b,q as g,r as $,u as V}from"./client.53e4210b.js";function T(t){let s,a,T,y,j,H,L,S,w,N,q,O,A,C,_,k,x,B,M,W,z,P,R,F,G,J,K,Q,U=t[0].date+"",X=t[0].title+"",Y=t[0].html+"";return a=new e({}),document.title=K=t[0].title,{c(){s=r("div"),c(a.$$.fragment),T=i(),y=r("div"),j=r("div"),H=r("h1"),L=n("Saraistupid"),S=i(),w=r("div"),N=r("div"),q=r("div"),O=r("div"),A=n(U),C=i(),_=r("div"),k=r("a"),x=n(X),B=i(),M=r("div"),W=i(),z=r("div"),P=i(),R=r("script"),F=n("(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://saraistupid.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),G=i(),J=i(),this.h()},l(t){s=d(t,"DIV",{class:!0});var e=o(s);l(a.$$.fragment,e),T=h(e),y=d(e,"DIV",{class:!0});var r=o(y);j=d(r,"DIV",{class:!0,style:!0});var c=o(j);H=d(c,"H1",{});var i=o(H);L=u(i,"Saraistupid"),i.forEach(f),c.forEach(f),S=h(r),w=d(r,"DIV",{class:!0});var n=o(w);N=d(n,"DIV",{class:!0});var p=o(N);q=d(p,"DIV",{class:!0});var v=o(q);O=d(v,"DIV",{class:!0});var E=o(O);A=u(E,U),E.forEach(f),v.forEach(f),C=h(p),_=d(p,"DIV",{class:!0});var I=o(_);k=d(I,"A",{href:!0});var D=o(k);x=u(D,X),D.forEach(f),I.forEach(f),B=h(p),M=d(p,"DIV",{class:!0}),o(M).forEach(f),W=h(p),z=d(p,"DIV",{id:!0}),o(z).forEach(f),P=h(p),R=d(p,"SCRIPT",{});var b=o(R);F=u(b,"(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://saraistupid.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),b.forEach(f),G=h(p),p.forEach(f),n.forEach(f),r.forEach(f),e.forEach(f),J=h(t);m("svelte-1uty71u",document.head).forEach(f),this.h()},h(){p(j,"class","contenttitle"),v(j,"background-image","url('assets/bannerHome.gif')"),p(O,"class","articleday"),p(q,"class","articledate"),p(k,"href"," "),p(_,"class","articletitle"),p(M,"class","articlebody"),p(z,"id","disqus_thread"),p(N,"class","article"),p(w,"class","contentpad"),p(y,"class","grid_3"),p(s,"class","container container_4")},m(t,e){E(t,s,e),I(a,s,null),D(s,T),D(s,y),D(y,j),D(j,H),D(H,L),D(y,S),D(y,w),D(w,N),D(N,q),D(q,O),D(O,A),D(N,C),D(N,_),D(_,k),D(k,x),D(N,B),D(N,M),M.innerHTML=Y,D(N,W),D(N,z),D(N,P),D(N,R),D(R,F),D(N,G),E(t,J,e),Q=!0},p(t,[s]){(!Q||1&s)&&U!==(U=t[0].date+"")&&b(A,U),(!Q||1&s)&&X!==(X=t[0].title+"")&&b(x,X),(!Q||1&s)&&Y!==(Y=t[0].html+"")&&(M.innerHTML=Y),(!Q||1&s)&&K!==(K=t[0].title)&&(document.title=K)},i(t){Q||(g(a.$$.fragment,t),Q=!0)},o(t){$(a.$$.fragment,t),Q=!1},d(t){t&&f(s),V(a),t&&f(J)}}}async function y({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function j(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}class H extends t{constructor(t){super(),s(this,t,j,T,a,{post:0})}}export{H as default,y as preload};
