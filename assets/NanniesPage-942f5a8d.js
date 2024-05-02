import{s as i,t as s,F as j,u as p,r as l,a as m,j as e,b,c as $,d as h,f as F,L as N}from"./index-776f4f13.js";import{g as u,N as v,s as L,W as C,I as S,B as k,a as y}from"./NanniesCard-bc0382c1.js";const w=["A to Z","Z to A","Less than 10$","Greater than 10$","Popular","Not popular","Show all"],R={selects:w},B="/slay/assets/sprite-4d41f41c.svg",E=i.button`
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
`,W=i(j)`
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
background: right 18px center no-repeat url(${B}#icon-chevron-down);

&#filters{
inline-size:226px;
}

option{
    color:rgba(17, 16, 28, 0.3);
}
`,z=()=>{const r=p(),a={select:"all"},[t,n]=l.useState(a);l.useEffect(()=>{r(m(t))},[t,r]);const c=(o,x)=>{n(f=>({...f,[o]:x.target.value}))},d=o=>c("select",o),g=()=>n(a);return e.jsx(b,{initialValues:t,children:()=>e.jsxs($,{children:[e.jsxs(V,{children:["Filters",e.jsxs(W,{as:"select",id:"select",className:"select",name:"select",value:t.select,onChange:d,children:[e.jsx("option",{value:"all",children:"All"}),R.selects.map(o=>e.jsx("option",{value:o,children:o},o))]})]}),e.jsx(E,{type:"button",onClick:g,children:"Reset"})]})})},A=({renderCard:r})=>{const a=p(),t=h(u);return l.useEffect(()=>{a(F())},[a]),e.jsx("ul",{children:t.slice(0,r).map(n=>e.jsx("li",{children:e.jsx(v,{card:n})},n.id))})},I=()=>{const[r,a]=l.useState(4),t=h(u),n=h(L),c=()=>{a(d=>d+4)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(z,{})}),n&&e.jsx(N,{}),!n&&t.length===0&&e.jsx(S,{children:"No teachers found based on the selected filters 😕"}),e.jsx(A,{renderCard:r}),r<t.length&&e.jsx(k,{children:e.jsx(y,{onClick:c,children:"Load More"})})]})},M=i.div`
min-height:100vh;
background-color:${s.colors.light};
`;function Z(){return e.jsx(M,{children:e.jsx(I,{})})}export{M as PageWrapper,Z as default};
