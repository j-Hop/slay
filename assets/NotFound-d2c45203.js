import{j as t,s as r,t as o,N as s}from"./index-fa960b51.js";const n="/slay/assets/notFound-525bfa43.jpg",e=r.div`
display:flex;
justify-content:center;
transform-style: preserve-3d;
perspective: 400px;
`,a=r.h1`
font-size:75px;
position:absolute;
top:60%;
right:30%;
transform:rotateY(30deg);
`,i=r(s)`
background-color:${o.colors.red};
color:${o.colors.light};
font-size:70px;
position:absolute;
top:80%;
right:20%;
transition: background-color ${o.transition} color ${o.transition};
transform: rotateY(-90deg);

&:hover{
    background-color:transparent;
    color:${o.colors.green};
}
`;function l(){return t.jsxs(e,{children:[t.jsx("img",{src:n,alt:"notFound"}),t.jsx(a,{children:"Not Found Page"}),t.jsx(i,{to:"/nannies",children:"Go Back"})]})}export{l as default};
