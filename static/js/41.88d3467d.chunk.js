"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[41],{245:(e,n,t)=>{t.d(n,{A:()=>m});var o,a,i,s=t(216),r=t(528),c=t(197),d=t(475);const l=c.Ay.ul(o||(o=(0,r.A)(["\n  list-style-type: none;\n"]))),u=c.Ay.li(a||(a=(0,r.A)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),p=(0,c.Ay)(d.N_)(i||(i=(0,r.A)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"])));var g=t(579);const m=e=>{let{films:n}=e;const t=(0,s.zy)();return(0,g.jsx)(l,{children:n.map((e=>(0,g.jsx)(u,{children:(0,g.jsx)(p,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)))})}},41:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var o,a,i,s=t(43),r=t(865),c=t(245),d=t(528),l=t(197);const u=l.Ay.form(o||(o=(0,d.A)(["\n  display: flex;\n  align-items: center;\n"])));l.Ay.input(a||(a=(0,d.A)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),l.Ay.button(i||(i=(0,d.A)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"])));var p=t(579);const g=e=>{let{searchMovies:n}=e;const[t,o]=(0,s.useState)("");return(0,p.jsxs)(u,{onSubmit:e=>{e.preventDefault(),n(t.toLowerCase())},children:[(0,p.jsx)("input",{className:"mr-2 min-w-0 rounded-md border-2 border-[#64748b] bg-[#6e7376]/5 px-3.5 py-2 text-[#000000] shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",type:"text",name:"query",autoFocus:!0,value:t,onChange:e=>{o(e.target.value)},placeholder:"Enter Movie"}),(0,p.jsx)("button",{className:"flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",type:"submit",children:"Search"})]})};var m=t(450);const h=()=>{const[e,n]=(0,s.useState)([]),[t,o]=(0,s.useState)(!1),[a,i]=(0,s.useState)(!1);return(0,p.jsxs)("main",{children:[(0,p.jsx)(g,{searchMovies:async e=>{try{o(!0);const t=await(0,m.Zk)(e);n(t),i(0===t.length)}catch(t){console.error(t)}finally{o(!1)}}}),t&&(0,p.jsx)(r.A,{}),a&&(0,p.jsx)("p",{children:"There are no movies with this request. Please, try again"}),e.length>0&&(0,p.jsx)(c.A,{films:e})]})}},450:(e,n,t)=>{t.d(n,{BC:()=>r,MB:()=>d,Zk:()=>s,k8:()=>i,v9:()=>c});var o=t(154);o.A.defaults.baseURL="https://api.themoviedb.org/3/";const a="992758a4802a699e8df27d4d6efc34fb",i=async()=>(await o.A.get("trending/movie/day?api_key=".concat(a))).data.results,s=async e=>(await o.A.get("search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(e))).data.results,r=async e=>(await o.A.get("movie/".concat(e,"?api_key=").concat(a,"&language=en-US"))).data,c=async e=>(await o.A.get("movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"))).data.cast,d=async e=>(await o.A.get("movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))).data.results}}]);
//# sourceMappingURL=41.88d3467d.chunk.js.map