(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},47:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(16),i=c.n(n),o=(c(25),c(26),c(4)),l=(c(27),c(17)),r="672017e8149755af2954a7d49298f97e",j="https://image.tmdb.org/t/p/original",d=c.n(l).a.create({baseURL:"https://api.themoviedb.org/3"}),u=c(0);var b=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){d.get("/trending/all/week?api_key=".concat(r,"&language=en-US")).then((function(e){console.log(e.data.results[0]),s(e.data.results[0])}))}),[]),Object(u.jsxs)("div",{style:{backgroundImage:"url(".concat(c?j+c.backdrop_path:"",")")},className:"banner",children:[Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{className:"title",children:c?c.name:""}),Object(u.jsxs)("div",{className:"banner_buttons",children:[Object(u.jsx)("button",{className:"button",children:"Play"}),Object(u.jsx)("button",{className:"button",children:"My list"})]}),Object(u.jsx)("h1",{className:"description",children:c?c.overview:""})]}),Object(u.jsx)("div",{className:"fade_bottom"})]})},m=(c(47),c(18));var g=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),b=l[0],g=l[1];return Object(a.useEffect)((function(){d.get(e.url).then((function(e){n(e.data.results)}))})),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("div",{className:"posters",children:s.map((function(t){return Object(u.jsx)("img",{onClick:function(){var e;e=t.id,d.get("/movie/".concat(e,"/videos?api_key=").concat(r,"&language=en-US")).then((function(e){console.log(e.data),0!==e.data.results.length?g(e.data.results[0]):console.log("ooPs..Not found")}))},className:e.isSmall?"smallPoster":"poster",alt:"poster",src:"".concat(j+t.backdrop_path)})}))}),Object(u.jsx)(m.a,{opts:{height:"390",width:"100%",playerVars:{autoplay:0}},videoId:b.key})]})};c(61);var h=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("p",{className:"para",children:"Netflix Clone by Faizal Nizam"})})};c(62);var v=function(){return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"oopss"}),Object(u.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"avatar"})]})},p="/discover/tv?api_key=".concat(r,"&with_networks=213"),f="/discover/movie?api_key=".concat(r,"&with_genres=28"),O="/discover/movie?api_key=".concat(r,"&with_genres=27"),x="/discover/movie?api_key=".concat(r,"&with_genres=10749"),N="/discover/movie?api_key=".concat(r,"&with_genres=35");var _=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(b,{}),Object(u.jsx)(g,{title:"Netflix orginals",url:p}),Object(u.jsx)(g,{title:"Action",url:f,isSmall:!0}),Object(u.jsx)(g,{title:"Horror",url:O,isSmall:!0}),Object(u.jsx)(g,{title:"romance",url:x,isSmall:!0}),Object(u.jsx)(g,{title:"comedy",url:N,isSmall:!0}),Object(u.jsx)(h,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),k()}},[[63,1,2]]]);
//# sourceMappingURL=main.49b29b22.chunk.js.map