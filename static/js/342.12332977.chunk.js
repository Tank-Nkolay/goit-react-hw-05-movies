"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[342],{8855:function(n,t,e){e.d(t,{Db:function(){return g},K$:function(){return Z},Up:function(){return h},r6:function(){return l},yW:function(){return f}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1044);o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var c="trending/movie/day?",s="search/movie?",u="api_key=ca2a773c1a5457f1c3e0c6f68586d44e",p="language=en-US";function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/".concat(c).concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(t,"?").concat(p,"&").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/".concat(s,"&query=").concat(t,"&").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(t,"/credits?").concat(p,"&").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("/movie/".concat(t,"/reviews?").concat(p,"&").concat(u));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7030:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,i,o,c=e(6731),s=e(7689),u=e(168),p=e(7402),l=p.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: calc(100vw - 48px);\n\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n"]))),d=p.Z.div(a||(a=(0,u.Z)(["\n  width: 280px;\n  // height: 438px;\n  padding-bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px 0px #00000040;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 4px 4px 0px #00000040;\n    transition: 0.5s ease all;\n    transform: scale(1.1);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 395px;\n  }\n"]))),f=p.Z.img(i||(i=(0,u.Z)(["\n  width: 100%;\n  border-radius: 5px;\n  margin-bottom: 8px;\n"]))),x=p.Z.h2(o||(o=(0,u.Z)(["\n  font-weight: 20px;\n  line-height: 1.17;\n  text-transform: uppercase;\n  color: #000000;\n\n  @media screen and (min-width: 768px) {\n    line-height: 1.3;\n  }\n  @media screen and (min-width: 1280px) {\n    line-height: 1.2;\n    font-size: 20px;\n  }\n"]))),h=e(190),m=e(6249),g=e(184);function v(n){var t=n.films,e=(0,s.TH)();return(0,g.jsx)(l,{children:t&&t.map((function(n){var t=n.poster_path,r=n.title,a=n.id;return(0,g.jsx)(c.rU,{to:"/".concat(m._.MOVIES,"/").concat(a),state:{from:e},children:(0,g.jsxs)(d,{children:[t?(0,g.jsx)(f,{src:"https://image.tmdb.org/t/p/w500"+t,alt:r}):(0,g.jsx)(f,{src:h,alt:r}),(0,g.jsxs)(x,{children:[" ",r]})]})},a)}))})}},4137:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(8966),i=e(168),o=e(7402).Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 10%;\n"]))),c=e(184);function s(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.g4,{height:"200",width:"200",radius:"9",color:"#386bd1",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},2881:function(n,t,e){e.d(t,{Z:function(){return r.Z}});var r=e(4137)},4342:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,i,o,c,s=e(5861),u=e(885),p=e(4687),l=e.n(p),d=e(168),f=e(7402),x=f.Z.div(r||(r=(0,d.Z)(["\n  padding-top: 20px;\n  padding-bottom: 40px;\n"]))),h=e(2791),m=e(5705),g=e(8820),v=f.Z.div(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n  flex-direction: column;\n"]))),Z=(0,f.Z)(m.l0)(i||(i=(0,d.Z)(["\n  position: relative;\n  width: 200px;\n  align-self: center;\n"]))),b=(0,f.Z)(m.gN)(o||(o=(0,d.Z)(["\n  width: 100%;\n  height: 20px;\n  outline: none;\n  color: black;\n\n  border: none;\n  border-radius: 4px;\n\n  background-color: lightskyblue;\n  border-bottom: 0.5px solid #f7f7f7;\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.4;\n    display: flex;\n    align-items: center;\n\n    color: black;\n  }\n"]))),w=f.Z.button(c||(c=(0,d.Z)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),y=e(7689),j=e(2881),k=e(6731),S=e(184);function _(n){var t=n.onSubmit,e=(0,k.lr)(),r=(0,u.Z)(e,1)[0],a=function(){var n=(0,s.Z)(l().mark((function n(e,r){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(e);case 2:r.setSubmitting(!1);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();return(0,S.jsxs)(v,{as:"main",children:[(0,S.jsx)(m.J9,{initialValues:{query:r.get("query")||""},onSubmit:a,children:function(n){var t=n.isSubmitting;return(0,S.jsxs)(Z,{children:[(0,S.jsx)(w,{type:"submit",disabled:t,children:(0,S.jsx)(g.RB5,{size:20})}),(0,S.jsx)(b,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})}}),(0,S.jsx)(h.Suspense,{fallback:(0,S.jsx)(j.Z,{}),children:(0,S.jsx)(y.j3,{})})]})}var q=e(9014),P=e(8855),C=e(7030);function U(){var n=(0,h.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,h.useState)(""),i=(0,u.Z)(a,2),o=i[0],c=i[1],p=(0,h.useState)(!1),d=(0,u.Z)(p,2),f=d[0],m=d[1],g=(0,h.useState)(!1),v=(0,u.Z)(g,2),Z=v[0],b=v[1],w=(0,k.lr)(),y=(0,u.Z)(w,2),U=y[0],z=y[1];(0,h.useEffect)((function(){var n,t=null!==(n=U.get("query"))&&void 0!==n?n:"";function e(){return e=(0,s.Z)(l().mark((function n(t){var e,a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,P.Up)(t);case 4:if(e=n.sent,a=e.results,0!==e.total_results){n.next=10;break}return q.ZP.error("Sorry, there are no movies matching your query. Please try again."),n.abrupt("return");case 10:r(a),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),m("Can`t load movies!");case 16:return n.prev=16,b(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,13,16,19]])}))),e.apply(this,arguments)}t&&function(n){e.apply(this,arguments)}(t)}),[U]),(0,h.useEffect)((function(){!1!==f&&q.ZP.error(f)}),[f]);return(0,S.jsxs)(x,{children:[(0,S.jsx)(_,{onSubmit:function(n){o!==n.query.trim()&&(r([]),c(n.query.trim()),m(!1),b(!1),z({query:n.query}))}}),Z&&(0,S.jsx)(j.Z,{}),(0,S.jsx)(C.Z,{films:e}),(0,S.jsx)(q.x7,{})]})}},190:function(n,t,e){n.exports=e.p+"static/media/noPicture.c27441121690745e3991.png"}}]);
//# sourceMappingURL=342.12332977.chunk.js.map