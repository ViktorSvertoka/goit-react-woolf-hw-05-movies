"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[72],{605:(t,e,a)=>{a.d(e,{A:()=>h});var n,o,c,s=a(216),i=a(528),r=a(197),l=a(475),d=a(239);const g=r.Ay.ul(n||(n=(0,i.A)(["\n  list-style-type: none;\n"]))),p=r.Ay.li(o||(o=(0,i.A)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n\n  &:hover {\n    color: #4f46e5;\n  }\n"]))),u=(0,r.Ay)(l.N_)(c||(c=(0,i.A)(["\n  &:hover::after,\n  &:focus::after {\n    content: '';\n    background-image: ",";\n\n    background-size: cover;\n    width: 400px;\n    height: 560px;\n    display: block;\n    border-radius: 4px;\n    border: 1px solid rgba(43, 134, 197);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    z-index: 1;\n    color: #4f46e5;\n  }\n"])),(t=>t.cover?"url('https://image.tmdb.org/t/p/w500/".concat(t.cover,"')"):"url(".concat(d,")")));var f=a(579);const h=t=>{let{films:e}=t;const a=(0,s.zy)();return(0,f.jsx)(g,{children:e.map((t=>(0,f.jsx)(p,{children:(0,f.jsx)(u,{to:"/movies/".concat(t.id),state:{from:a},cover:t.poster_path,children:t.title})},t.id)))})}},72:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var n=a(43),o=a(605),c=a(450),s=a(865),i=a(579);const r=()=>{const[t,e]=(0,n.useState)([]),[a,r]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{(async()=>{try{const t=await(0,c.k8)();e(t)}catch(t){console.error(t)}finally{r(!1)}})()}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{className:"pb-10 mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",children:"Trending today"}),(0,i.jsx)(o.A,{films:t}),a&&(0,i.jsx)(s.A,{})]})}},450:(t,e,a)=>{a.d(e,{BC:()=>i,MB:()=>l,Zk:()=>s,k8:()=>c,v9:()=>r});var n=a(154);n.A.defaults.baseURL="https://api.themoviedb.org/3/";const o="992758a4802a699e8df27d4d6efc34fb",c=async()=>(await n.A.get("trending/movie/day?api_key=".concat(o))).data.results,s=async t=>(await n.A.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t))).data.results,i=async t=>(await n.A.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"))).data,r=async t=>(await n.A.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"))).data.cast,l=async t=>(await n.A.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))).data.results},239:(t,e,a)=>{t.exports=a.p+"static/media/noImage.766050a83a9c288363de.png"}}]);
//# sourceMappingURL=72.2c1bd0b2.chunk.js.map