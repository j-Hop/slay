import{j as t,s as r,t as o,N as n}from"./index-18477571.js";const s=r.div`
display:flex;
justify-content:center;
transform-style: preserve-3d;
perspective: 400px;
`,e=r.h1`
font-size:75px;
position:absolute;
top:60%;
right:30%;
transform:rotateY(30deg);
`,a=r(n)`
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
`;function c(){return t.jsxs(s,{children:[t.jsx("img",{src:NotFound,alt:"notFound"}),t.jsx(e,{children:"Not Found Page"}),t.jsx(a,{to:"/nannies",children:"Go Back"})]})}export{c as default};
