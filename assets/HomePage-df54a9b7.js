import{s as n,t as e,N as a,r as l,j as i}from"./index-776f4f13.js";const c=n.div`
  padding: ${e.spacing(32)} ${e.spacing(48)};
  inline-size: 1380px;
  background-color: ${e.colors.green};
  block-size: 736px;
  border-radius: ${e.radius.xl};
`,d=n.div`
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
`,p=n.img`
  height: 736px;
  max-width: 699px;
  transform: translate(585px, -64px);
`,x=n(a)`
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
`,h=n.div`
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
`,g=n.div`
  border: none;
  background-color: ${e.colors.green};
  border-radius: 13px;
  margin-inline-end: ${e.spacing(8)};
  width: 54px;
  height: 54px;
  padding: ${e.spacing(9.75)} ${e.spacing(8.5)};
`,f=n.div`
display: flex;
flex-direction: column;
gap: ${e.spacing(3)};
}
`,m=()=>{const[s,o]=l.useState(!1),r=()=>{o(!0)},t=()=>{o(!1)};return i.jsxs(c,{children:[i.jsxs(d,{children:[i.jsx("h2",{children:"Make Life Easier for the Family:"}),i.jsx("p",{children:"Find Babysitters Online for All Occasions"}),i.jsxs(x,{to:"/nannies",onMouseEnter:r,onMouseLeave:t,children:[i.jsx("span",{children:"Get started"}),i.jsx("svg",{width:"15",height:"15",children:i.jsx("use",{xlinkHref:s?`${SpriteIcon}#icon-Arrow-inline`:`${SpriteIcon}#icon-Arrow-up`})})]})]}),i.jsx(p,{src:HeroImg,alt:"home"}),i.jsxs(h,{children:[i.jsx(g,{children:i.jsx("svg",{width:"20",height:"15",children:i.jsx("use",{xlinkHref:`${SpriteIcon}#icon-check`})})}),i.jsxs(f,{children:[i.jsx("p",{children:"Experienced nannies"}),i.jsx("h2",{children:"15,000"})]})]})]})};function $(){return i.jsx(m,{})}export{$ as default};
