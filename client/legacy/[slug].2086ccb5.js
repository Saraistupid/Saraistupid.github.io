import{F as t,G as a,_ as s,a as e,b as n,c as r,i as c,d as i,S as o,s as u,N as f,e as l,q as d,f as h,t as p,g as v,h as m,r as E,l as I,j as D,k as y,E as b,m as g,u as V,n as $,v as T,o as x,w as j,p as w,x as H,y as L,z as R}from"./client.ba111029.js";function S(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,r=e(t);if(a){var c=e(this).constructor;s=Reflect.construct(r,arguments,c)}else s=r.apply(this,arguments);return n(this,s)}}function N(t){var a,s,e,n,r,c,i,o,u,S,N,O,k,q,B,_,A,C,M,P,W,z,F,G,J,K,Q,U,X=t[0].date+"",Y=t[0].title+"",Z=t[0].html+"";return s=new f({}),document.title=Q=t[0].title,{c:function(){a=l("div"),d(s.$$.fragment),e=h(),n=l("div"),r=l("div"),c=l("h1"),i=p("Saraistupid"),o=h(),u=l("div"),S=l("div"),N=l("div"),O=l("div"),k=p(X),q=h(),B=l("div"),_=l("a"),A=p(Y),C=h(),M=l("div"),P=h(),W=l("div"),z=h(),F=l("script"),G=p("(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://saraistupid.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),J=h(),K=h(),this.h()},l:function(t){a=v(t,"DIV",{class:!0});var f=m(a);E(s.$$.fragment,f),e=I(f),n=v(f,"DIV",{class:!0});var l=m(n);r=v(l,"DIV",{class:!0,style:!0});var d=m(r);c=v(d,"H1",{});var h=m(c);i=D(h,"Saraistupid"),h.forEach(y),d.forEach(y),o=I(l),u=v(l,"DIV",{class:!0});var p=m(u);S=v(p,"DIV",{class:!0});var g=m(S);N=v(g,"DIV",{class:!0});var V=m(N);O=v(V,"DIV",{class:!0});var $=m(O);k=D($,X),$.forEach(y),V.forEach(y),q=I(g),B=v(g,"DIV",{class:!0});var T=m(B);_=v(T,"A",{href:!0});var x=m(_);A=D(x,Y),x.forEach(y),T.forEach(y),C=I(g),M=v(g,"DIV",{class:!0}),m(M).forEach(y),P=I(g),W=v(g,"DIV",{id:!0}),m(W).forEach(y),z=I(g),F=v(g,"SCRIPT",{});var j=m(F);G=D(j,"(function() { // DON'T EDIT BELOW THIS LINE\n\t\t\t\t\tvar d = document, s = d.createElement('script');\n\t\t\t\t\ts.src = 'https://saraistupid.disqus.com/embed.js';\n\t\t\t\t\ts.setAttribute('data-timestamp', +new Date());\n\t\t\t\t\t(d.head || d.body).appendChild(s);\n\t\t\t\t\t})();"),j.forEach(y),J=I(g),g.forEach(y),p.forEach(y),l.forEach(y),f.forEach(y),K=I(t),b("svelte-1uty71u",document.head).forEach(y),this.h()},h:function(){g(r,"class","contenttitle"),V(r,"background-image","url('assets/bannerHome.gif')"),g(O,"class","articleday"),g(N,"class","articledate"),g(_,"href"," "),g(B,"class","articletitle"),g(M,"class","articlebody"),g(W,"id","disqus_thread"),g(S,"class","article"),g(u,"class","contentpad"),g(n,"class","grid_3"),g(a,"class","container container_4")},m:function(t,f){$(t,a,f),T(s,a,null),x(a,e),x(a,n),x(n,r),x(r,c),x(c,i),x(n,o),x(n,u),x(u,S),x(S,N),x(N,O),x(O,k),x(S,q),x(S,B),x(B,_),x(_,A),x(S,C),x(S,M),M.innerHTML=Z,x(S,P),x(S,W),x(S,z),x(S,F),x(F,G),x(S,J),$(t,K,f),U=!0},p:function(t,a){var s=j(a,1)[0];(!U||1&s)&&X!==(X=t[0].date+"")&&w(k,X),(!U||1&s)&&Y!==(Y=t[0].title+"")&&w(A,Y),(!U||1&s)&&Z!==(Z=t[0].html+"")&&(M.innerHTML=Z),(!U||1&s)&&Q!==(Q=t[0].title)&&(document.title=Q)},i:function(t){U||(H(s.$$.fragment,t),U=!0)},o:function(t){L(s.$$.fragment,t),U=!1},d:function(t){t&&y(a),R(s),t&&y(K)}}}function O(t){return k.apply(this,arguments)}function k(){return(k=t(a.mark((function t(s){var e,n,r;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.params,t.next=3,this.fetch("blog/".concat(e.slug,".json"));case 3:return n=t.sent,t.next=6,n.json();case 6:if(r=t.sent,200!==n.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(n.status,r.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function q(t,a,s){var e=a.post;return t.$$set=function(t){"post"in t&&s(0,e=t.post)},[e]}var B=function(t){s(e,o);var a=S(e);function e(t){var s;return r(this,e),s=a.call(this),c(i(s),t,q,N,u,{post:0}),s}return e}();export{B as default,O as preload};
