"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[234],{996:(a,e,t)=>{t.r(e),t.d(e,{default:()=>u});var n,i,c=t(216),s=t(43),o=t(450),r=t(865),l=t(528),d=t(197);const g=d.Ay.ul(n||(n=(0,l.A)(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  margin-bottom: 20px;\n"]))),p=d.Ay.p(i||(i=(0,l.A)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"])));var m=t(579);const u=()=>{const{movieId:a}=(0,c.g)(),[e,t]=(0,s.useState)([]),[n,i]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{i(!0);const e=await(0,o.v9)(a);t(e)}catch(e){console.error(e)}finally{i(!1)}})()}),[a]),(0,m.jsxs)("div",{children:[n&&(0,m.jsx)(r.A,{}),(0,m.jsx)(g,{children:e.map((a=>{let{id:e,profile_path:t,original_name:n,name:i,character:c}=a;return(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{width:"200px",height:"300px",src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:n}),(0,m.jsx)(p,{children:i}),(0,m.jsxs)(p,{children:["Character: ",c]})]},e)}))})]})}},450:(a,e,t)=>{t.d(e,{BC:()=>o,MB:()=>l,Zk:()=>s,k8:()=>c,v9:()=>r});var n=t(154);n.A.defaults.baseURL="https://api.themoviedb.org/3/";const i="992758a4802a699e8df27d4d6efc34fb",c=async()=>(await n.A.get("trending/movie/day?api_key=".concat(i))).data.results,s=async a=>(await n.A.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(a))).data.results,o=async a=>(await n.A.get("movie/".concat(a,"?api_key=").concat(i,"&language=en-US"))).data,r=async a=>(await n.A.get("movie/".concat(a,"/credits?api_key=").concat(i,"&language=en-US"))).data.cast,l=async a=>(await n.A.get("movie/".concat(a,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))).data.results}}]);
//# sourceMappingURL=234.80e9650e.chunk.js.map