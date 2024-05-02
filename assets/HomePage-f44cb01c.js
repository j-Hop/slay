import{s as n,t as e,N as l,r as c,j as i,S as o}from"./index-6b0fbd40.js";const d="/slay/assets/child-2557fb2d.png",p=n.div`
  padding: ${e.spacing(32)} ${e.spacing(48)};
  inline-size: 1380px;
  background-color: ${e.colors.green};
  block-size: 736px;
  border-radius: ${e.radius.xl};
`,h=n.div`
  position: absolute;
  max-inline-size: 530px;
  top: 251px;

  h2 {
    font-size: 70px;
    font-weight: 500;
    line-height: 1;
    color: ${e.colors.light};
    margin-block-end: ${e.spacing(14)};
  }

  p {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.07;
    color: ${e.colors.light};
    margin-block-end: ${e.spacing(32)};
  }
`,x=n.img`
  height: 736px;
  max-width: 699px;
  transform: translate(585px, -64px);
`,g=n(l)`
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: ${e.radius.xl};
  background-color: transparent;
  padding: ${e.spacing(9)} ${e.spacing(25)};
  display: inline-block;
  transition: border ${e.transition};
  display: flex;
  align-items: center;
  max-inline-size: 235px;

  &:hover {
    border: ${e.colors.light};
  }

  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: ${e.colors.light};
    margin-inline-end: ${e.spacing(9)};
  }
`,f=n.div`
  padding: ${e.spacing(16)};
  border: none;
  border-radius: 20px;
  background-color: ${e.colors.light};
  position: relative;
  left: 937px;
  bottom: 230px;
  inline-size: 290px;
  display: flex;

  h2 {
    color: ${e.colors.black};
    font-weight: 700;
    font-size: 24px;
    line-height: 1.2;
  }

  p {
    color: rgba(17, 16, 28, 0.5);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
  }
`,m=n.div`
  border: none;
  background-color: ${e.colors.green};
  border-radius: 13px;
  margin-inline-end: ${e.spacing(8)};
  width: 54px;
  height: 54px;
  padding: ${e.spacing(9.75)} ${e.spacing(8.5)};
`,u=n.div`
display: flex;
flex-direction: column;
gap: ${e.spacing(3)};
}
`,$=()=>{const[r,s]=c.useState(!1),t=()=>{s(!0)},a=()=>{s(!1)};return i.jsxs(p,{children:[i.jsxs(h,{children:[i.jsx("h2",{children:"Make Life Easier for the Family:"}),i.jsx("p",{children:"Find Babysitters Online for All Occasions"}),i.jsxs(g,{to:"/nannies",onMouseEnter:t,onMouseLeave:a,children:[i.jsx("span",{children:"Get started"}),i.jsx("svg",{width:"15",height:"15",children:i.jsx("use",{xlinkHref:r?`${o}#icon-Arrow-inline`:`${o}#icon-Arrow-up`})})]})]}),i.jsx(x,{src:d,alt:"home"}),i.jsxs(f,{children:[i.jsx(m,{children:i.jsx("svg",{width:"20",height:"15",children:i.jsx("use",{xlinkHref:`${o}#icon-check`})})}),i.jsxs(u,{children:[i.jsx("p",{children:"Experienced nannies"}),i.jsx("h2",{children:"15,000"})]})]})]})};function j(){return i.jsx($,{})}export{j as default};
