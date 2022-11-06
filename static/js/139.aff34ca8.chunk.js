"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[139],{8855:function(t,n,r){r.d(n,{Db:function(){return B},K$:function(){return Z},Up:function(){return x},r6:function(){return p},yW:function(){return g}});var i=r(5861),e=r(4687),a=r.n(e),s=r(1044);s.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="trending/movie/day?",c="search/movie?",o="api_key=ca2a773c1a5457f1c3e0c6f68586d44e",A="language=en-US";function p(){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("/".concat(u).concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(a().mark((function t(n){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("/movie/".concat(n,"?").concat(A,"&").concat(o));case 2:return r=t.sent,i=r.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)(a().mark((function t(n){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("/".concat(c,"&query=").concat(n,"&").concat(o));case 2:return r=t.sent,i=r.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)(a().mark((function t(n){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("/movie/".concat(n,"/credits?").concat(A,"&").concat(o));case 2:return r=t.sent,i=r.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)(a().mark((function t(n){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("/movie/".concat(n,"/reviews?").concat(A,"&").concat(o));case 2:return r=t.sent,i=r.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4137:function(t,n,r){r.d(n,{Z:function(){return c}});var i,e=r(6286),a=r(168),s=r(7402).Z.div(i||(i=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),u=r(184);function c(){return(0,u.jsx)(s,{children:(0,u.jsx)(e.Rf,{color:"red",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}},1139:function(t,n,r){r.r(n),r.d(n,{default:function(){return z}});var i,e,a,s,u,c,o,A,p=r(5861),f=r(885),g=r(4687),d=r.n(g),x=r(2791),I=r(7689),B=r(8855),l=r(4137),Z=r(9014),y=r(9856),L=r(168),w=r(6731),m=r(7402),h=m.Z.div(i||(i=(0,L.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 10px;\n  margin-top: 10px;\n  margin-bottom: 0;\n  padding: 0;\n  padding-bottom: 20px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=m.Z.div(e||(e=(0,L.Z)(["\n  padding-bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px 0px #00000040;\n  justify-content: center;\n"]))),v=m.Z.img(a||(a=(0,L.Z)(["\n  width: 50px;\n  padding-left: 20px;\n  padding-top: 10px;\n\n  border-radius: 5px;\n  margin-right: 10px;\n"]))),k=m.Z.div(s||(s=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Q=m.Z.p(u||(u=(0,L.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  padding-top: 5px;\n  padding-right: 5px;\n"]))),X=m.Z.p(c||(c=(0,L.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  font-style: italic;\n"]))),E=m.Z.p(o||(o=(0,L.Z)(["\n  font-size: 16px;\n  line-height: 1.17;\n  color: #000000;\n"]))),W=(0,m.Z)(w.rU)(A||(A=(0,L.Z)(["\n  pointer-events: none;\n"]))),j=r(184);function z(){var t=(0,I.UO)().movieId,n=(0,x.useState)(null),r=(0,f.Z)(n,2),i=r[0],e=r[1],a=(0,x.useState)(!1),s=(0,f.Z)(a,2),u=s[0],c=s[1],o=(0,x.useState)(!1),A=(0,f.Z)(o,2),g=A[0],L=A[1];return(0,x.useEffect)((function(){function n(){return n=(0,p.Z)(d().mark((function t(n){var r,i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(!0),t.next=4,(0,B.Db)(n);case 4:if(r=t.sent,0!==(i=r.cast).length){t.next=9;break}return(0,Z.ZP)("We don`t have any cast for this movie"),t.abrupt("return");case 9:e(i),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),c("Can`t load movies!");case 15:return t.prev=15,L(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])}))),n.apply(this,arguments)}!function(t){n.apply(this,arguments)}(t)}),[t]),(0,x.useEffect)((function(){!1!==u&&Z.ZP.error(u)}),[u]),i?(0,j.jsxs)(h,{children:[g&&(0,j.jsx)(l.Z,{}),i.map((function(t){var n=t.id,r=t.character,i=t.original_name,e=t.profile_path;return(0,j.jsx)(b,{children:(0,j.jsxs)(W,{to:"movies",children:[e?(0,j.jsx)(v,{src:"https://image.tmdb.org/t/p/w500"+e,alt:i}):(0,j.jsx)(v,{src:y,alt:i}),(0,j.jsxs)(k,{children:[(0,j.jsx)(Q,{children:i}),(0,j.jsx)(X,{children:"Character:"}),(0,j.jsx)(E,{children:r})]})]})},n)})),(0,j.jsx)(Z.x7,{})]}):null}},9856:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=139.aff34ca8.chunk.js.map