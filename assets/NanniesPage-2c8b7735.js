import{s as i,t as s,S as j,F as m,u,r as l,a as b,j as e,b as $,c as F,d as h,f as N,L}from"./index-fa960b51.js";import{g as p,N as v,s as S,W as C,I as k,B as w,a as y}from"./NanniesCard-80b07dbd.js";const R=["A to Z","Z to A","Less than 10$","Greater than 10$","Popular","Not popular","Show all"],B={selects:R},E=i.button`
background-color:${s.colors.red};
border-radius:${s.radius.s};
border:none;

&:hover{
    background-color:${s.colors.green}
}

span{
font-weight:500;
line-height:1.25;
margin: ${s.spacing(7)} ${s.spacing(19.5)};
}
`,V=i.label`
display: inline-flex;
flex-direction:column;

color:${s.colors.light};
font-weight:500;
font-size:18px;
line-height:1.12;
`,W=i(m)`
padding:${s.spacing(7)} ${s.spacing(9)};
cursor:pointer;
font-size:18px;
line-height:1.12;
font-weight:400;
outline:none;
border:none;
border-radius:${s.radius.s};
overflow:hidden;
appearance: none;
background: right 18px center no-repeat url(${j}#icon-chevron-down);

&#filters{
inline-size:226px;
}

option{
    color:rgba(17, 16, 28, 0.3);
}
`,z=()=>{const r=u(),a={select:"all"},[n,t]=l.useState(a);l.useEffect(()=>{r(b(n))},[n,r]);const c=(o,x)=>{t(f=>({...f,[o]:x.target.value}))},d=o=>c("select",o),g=()=>t(a);return e.jsx($,{initialValues:n,children:()=>e.jsxs(F,{children:[e.jsxs(V,{children:["Filters",e.jsxs(W,{as:"select",id:"select",className:"select",name:"select",value:n.select,onChange:d,children:[e.jsx("option",{value:"all",children:"All"}),B.selects.map(o=>e.jsx("option",{value:o,children:o},o))]})]}),e.jsx(E,{type:"button",onClick:g,children:"Reset"})]})})},A=({renderCard:r})=>{const a=u(),n=h(p);return l.useEffect(()=>{a(N())},[a]),e.jsx("ul",{children:n.slice(0,r).map(t=>e.jsx("li",{children:e.jsx(v,{card:t})},t.id))})},I=()=>{const[r,a]=l.useState(4),n=h(p),t=h(S),c=()=>{a(d=>d+4)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(z,{})}),t&&e.jsx(L,{}),!t&&n.length===0&&e.jsx(k,{children:"No teachers found based on the selected filters 😕"}),e.jsx(A,{renderCard:r}),r<n.length&&e.jsx(w,{children:e.jsx(y,{onClick:c,children:"Load More"})})]})},M=i.div`
min-height:100vh;
background-color:${s.colors.light};
`;function Z(){return e.jsx(M,{children:e.jsx(I,{})})}export{M as PageWrapper,Z as default};
