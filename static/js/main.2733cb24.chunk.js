(this["webpackJsonpshow-watchlist"]=this["webpackJsonpshow-watchlist"]||[]).push([[0],{39:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c,a,i,s,o,r,l,j,h,d,b,m,x,O=n(0),u=n.n(O),p=n(30),g=n.n(p),f=(n(39),n(4)),v=n(5),w=n(2),y=n(1),S=v.a.div(c||(c=Object(f.a)(["\n  display: flex;\n"]))),I=Object(w.f)((function(e){e.location;var t=JSON.parse(localStorage.getItem("shows"));return Object(y.jsx)(y.Fragment,{children:t?Object(y.jsx)("div",{children:Object(y.jsx)(S,{children:t.map((function(e){return Object(y.jsx)("img",{src:e,alt:""})}))})}):Object(y.jsx)("p",{children:"You don't have any shows in your watchlist"})})})),C=n(15),F=n(34),N=n.n(F),J=n(10),T=v.a.div(a||(a=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),k=v.a.div(i||(i=Object(f.a)(["\n  margin-bottom: 20px;\n"]))),L=v.a.input(s||(s=Object(f.a)(["\n  width: 400px;\n  height: 30px;\n  vertical-align: middle;\n  margin-bottom: 40px;\n"]))),B=v.a.div(o||(o=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]))),E=function(){var e=u.a.useState(""),t=Object(C.a)(e,2),n=t[0],c=t[1],a=u.a.useState([]),i=Object(C.a)(a,2),s=i[0],o=i[1];return u.a.useEffect((function(){N.a.get("http://api.tvmaze.com/search/shows?q=".concat(n)).then((function(e){o(e.data)})).catch((function(e){console.error("There was an error!",e)}))}),[n]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(B,{children:Object(y.jsx)(L,{onChange:function(e){return c(e.target.value)}})}),Object(y.jsx)(T,{children:s.map((function(e){var t,n,c;return(null===(t=e.show.image)||void 0===t?void 0:t.medium)?Object(y.jsx)(J.b,{to:{pathname:"/show",state:{image:null===(n=e.show.image)||void 0===n?void 0:n.medium,title:e.show.name,type:e.show.type,summary:e.show.summary}},children:Object(y.jsx)(k,{children:Object(y.jsx)("img",{src:null===(c=e.show.image)||void 0===c?void 0:c.medium,alt:""})})}):Object(y.jsx)(k,{children:Object(y.jsx)("img",{src:"https://ipsumimage.appspot.com/210x295?l=No%20Image%20Found",alt:""})})}))})]})},H=v.a.div(r||(r=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),M=v.a.div(l||(l=Object(f.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n"]))),P=v.a.button(j||(j=Object(f.a)(["\n  padding: 0.5em 0.7em;\n\u2003 font-weight: 300;\n  margin-top: 25px;\n"]))),_=v.a.img(h||(h=Object(f.a)(["\n  margin-right: 20px;\n"]))),q=Object(w.f)((function(e){var t=e.location.state,n=u.a.useState(!1),c=Object(C.a)(n,2),a=c[0],i=c[1];console.log(t.image,"here");return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(H,{children:[Object(y.jsx)(_,{src:t.image,alt:""}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{style:{marginTop:0},children:t.title}),Object(y.jsx)("b",{children:t.type}),Object(y.jsx)(M,{dangerouslySetInnerHTML:{__html:t.summary}})]})]}),a?Object(y.jsx)(P,{onClick:function(){var e=localStorage.getItem("show");e=JSON.parse(e),localStorage.setItem("shows",JSON.stringify(e.pop)),i(!1)},children:"Remove from the list"}):Object(y.jsx)(P,{onClick:function(){var e=localStorage.getItem("shows");(e=e?JSON.parse(localStorage.getItem("shows")):[]).push(t.image),localStorage.setItem("shows",JSON.stringify(e)),i(!0)},children:"Add To Watchlist"})]})})),z=v.a.div(d||(d=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),A=v.a.div(b||(b=Object(f.a)(["\n  display: flex;\n"]))),D=Object(v.a)(J.c)(m||(m=Object(f.a)(["\n  margin-right: 30px;\n  text-decoration: none;\n  color: black;\n  &."," {\n    color: blue;\n  }\n"])),(function(e){return e.activeClassName})),R=v.a.div(x||(x=Object(f.a)(["\n  width: 100%;\n  margin: 20px 0px;\n  border: 1px solid #ebe6df;\n"]))),W=function(){return Object(y.jsxs)(z,{children:[Object(y.jsxs)(A,{children:[Object(y.jsx)(D,{activeClassName:"active",exact:!0,to:"/",children:"Home"}),Object(y.jsx)(D,{activeClassName:"active",to:"/search",children:"Search"})]}),Object(y.jsx)(R,{})]})};var Y=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(J.a,{children:[Object(y.jsx)(W,{}),Object(y.jsxs)(w.c,{children:[Object(y.jsx)(w.a,{path:"/",exact:!0,component:I}),Object(y.jsx)(w.a,{path:"/search",component:E}),Object(y.jsx)(w.a,{path:"/show",component:q})]})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};g.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(Y,{})}),document.getElementById("root")),G()}},[[63,1,2]]]);
//# sourceMappingURL=main.2733cb24.chunk.js.map