"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[134],{134:(n,e,t)=>{t.r(e),t.d(e,{default:()=>_});var i,a,s,o,r,l=t(43),c=t(216),d=t(475),p=t(450),h=t(865),x=t(528),g=t(197);const u=g.Ay.div(i||(i=(0,x.A)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),y=g.Ay.ul(a||(a=(0,x.A)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),v=g.Ay.ul(s||(s=(0,x.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),m=(0,g.Ay)(d.N_)(o||(o=(0,x.A)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),f=g.Ay.button(r||(r=(0,x.A)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"])));var j=t(579);const _=()=>{var n,e;const{movieId:t}=(0,c.g)(),[i,a]=(0,l.useState)(null),[s,o]=(0,l.useState)(!0),r=(0,c.zy)();if((0,l.useEffect)((()=>{(async()=>{try{o(!0);const n=await(0,p.BC)(t);a(n)}catch(n){console.error(n)}finally{o(!1)}})()}),[t]),s)return(0,j.jsx)(h.A,{});if(!i)return null;const{title:x,release_date:g,popularity:_,overview:w,genres:A,poster_path:b,original_title:k}=i;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.N_,{to:null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,j.jsx)(f,{type:"button",children:"Go back"})}),(0,j.jsxs)(u,{children:[(0,j.jsx)("img",{width:"300px",src:b?"https://image.tmdb.org/t/p/w500".concat(b):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:k}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h1",{children:[x," (",g.slice(0,4),")"]}),(0,j.jsxs)("p",{children:["User score: ",_]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:w}),(0,j.jsx)("h2",{children:"Genres"}),(0,j.jsx)(y,{children:A.map((n=>(0,j.jsx)("li",{children:n.name},n.id)))})]})]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsxs)(v,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(m,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(m,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(c.sv,{})]})]})}},450:(n,e,t)=>{t.d(e,{BC:()=>r,Zk:()=>o,k8:()=>s,v9:()=>l});var i=t(154);i.A.defaults.baseURL="https://api.themoviedb.org/3/";const a="992758a4802a699e8df27d4d6efc34fb",s=async()=>(await i.A.get("trending/movie/day?api_key=".concat(a))).data.results,o=async n=>(await i.A.get("search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(n))).data.results,r=async n=>(await i.A.get("movie/".concat(n,"?api_key=").concat(a,"&language=en-US"))).data,l=async n=>(await i.A.get("movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"))).data.cast}}]);
//# sourceMappingURL=134.f4f7fe64.chunk.js.map