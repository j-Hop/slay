import{s as i,t as n,F as L,j as e,e as W,g as c,h as Y,r as d,b as P,E as l,S as h,B as D,_ as M,i as U,d as V,u as Z,o as K,A as J,k as Q,l as ee,m as ne}from"./index-4833a8ee.js";const ie=i.div`
  display: flex;
  gap: ${n.spacing(10)};
  margin-block-end: ${n.spacing(20)};

  h3 {
    font-weight: 500;
    line-height: 1.2;
    color: ${n.colors.black};
  }

  p {
    font-weight: 400;
    line-height: 1.25;
    color: rgba(17, 16, 28, 0.5);
  }
`,se=i.img`
  border-radius: ${n.radius.m};
`,re=i.div`
  display: flex;
  gap: ${n.spacing(7)};
  margin-block-end: ${n.spacing(20)};

  p {
    font-weight: 500;
    line-height: 1.33;
    color: ${n.colors.grey};
    margin-block-end: ${n.spacing(2)};
  }

  h3 {
    font-weight: 500;
    line-height: 1.5;
    color: ${n.colors.black};
  }
`,j=i.label`
  padding: ${n.spacing(8)} ${n.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${n.radius.xxs};
  inline-size: 232px;
  outline: none;
  margin-inline-end: ${n.spacing(4)};
  margin-block-end: ${n.spacing(8)};
`,w=i.label`
  padding: ${n.spacing(8)} ${n.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${n.radius.xxs};
  inline-size: 100%;
  outline: none;
  margin-block-end: ${n.spacing(8)};
`,te=i.label`
  padding: ${n.spacing(8)} ${n.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${n.radius.xxs};
  inline-size: 100%;
  outline: none;
  height: 116px;
`,ae=i(L)`
  display: flex;
  margin-block-end: ${n.spacing(20)};
`,F=i.div`
  cursor: pointer;
  overflow: hidden;
  appearance: none;
  outline: none;
  padding: ${n.spacing(8)};
  border: none;
  border-radius: ${n.radius.xxs};

  &#time {
    inline-size: 151px;
  }

  option {
    color: rgba(17, 16, 28, 0.3);
  }

  p {
    font-weight: 500;
    line-height: 1.25;
    font-size: 16px;
    color: ${n.colors.grey};
  }

  h2 {
    font-weight: 500;
    line-height: 1.5;
    font-size: 16px;
    color: ${n.colors.black};
  }

  &:hover {
    color: ${n.colors.black};
  }
`,oe=i.button`
  border: none;
  background: none;
  position: absolute;
  top: 16px;
  right: 18px;
  transform: translateY(-50%);
  transition: fill ${n.transition};

  %:hover {
    fill: ${n.colors.green};
  }
`,le=i.button`
  display: flex;
  flex-direction: column;
  max-inline-size: 480px;
`,ce=({isOpen:s,onRequestClose:r})=>e.jsxs(F,{isOpen:s,onRequestClose:r,children:[e.jsx("h2",{children:"Meeting time"}),e.jsx("p",{children:"9:00"}),e.jsx("p",{children:"9:30"}),e.jsx("p",{children:"10:00"}),e.jsx("p",{children:"10:30"})]}),de=W({address:c().min(3,"Must least 3 symbols").max(64,"At most 64 symbols").required("This ia a required field"),number:c().min(9,"Simple Format: XXX-XX-XX").max(9,"Simple Format: XXX-XX-XX").required("This is a required field").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and dashes."),childAge:Y().min(1,"Must be 1 number").max(2,"At most 2 number").required("This is a required field"),time:c().required("Chose one option"),email:c().email("Invalid email adress").required("This is a required field"),name:c().min(3,"Must be 3 symbols").max(32,"At most 32 symbols").required("This is a required field"),comment:c().min(4,"Must be 4 symbols").max(2e3,"At most 2000 symbols").required("This is a required field")}),he=({card:s,onRequestClose:r})=>{const[t,o]=d.useState(!1),a=({resetForm:p})=>{M.success("Successfully sent date",{position:"top-right",duration:5e3}),p(),r()},m=()=>{o(!0)},u=()=>{o(!1)};return e.jsx(P,{initialValues:{address:"",number:"",childAge:"",time:"",email:"",name:"",comment:""},onSubmit:a,validationSchema:de,children:e.jsxs(le,{children:[e.jsxs(ie,{children:[e.jsx("h3",{children:"Make an appointment with a babysitter"}),e.jsx("p",{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."})]}),e.jsxs(re,{children:[e.jsx(se,{src:s.avatar_url,alt:"avatar",width:"44",height:"44"}),e.jsx("p",{children:"Your nanny"}),e.jsx("h3",{children:s.name})]}),e.jsxs(ae,{children:[e.jsxs("label",{"aria-label":"Field for address",children:[e.jsx(j,{name:"address",type:"text",placeholder:"Address"}),e.jsx(l,{name:"address",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Child is age",children:[e.jsx(j,{type:"number",placeholder:"Child is age"}),e.jsx(l,{name:"childAge",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for number",children:[e.jsx(j,{name:"number",type:"tel",placeholder:"+380"}),e.jsx(l,{name:"number",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for time",children:[e.jsx(j,{name:"time",type:"number",placeholder:"00:00"}),e.jsx(l,{name:"time",component:"div"}),e.jsx(oe,{onClick:m,type:"text",children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:`${h}#icon-clock}`})})})]}),e.jsxs("label",{"aria-label":"Field for email",children:[e.jsx(w,{name:"email",type:"email",placeholder:"Email"}),e.jsx(l,{component:"div",name:"email"})]}),e.jsxs("label",{"aria-label":"Field for Father is or mother is name",children:[e.jsx(w,{name:"name",type:"text",placeholder:"Father is or mother is name"}),e.jsx(l,{component:"div",name:"name"})]}),e.jsxs("label",{"aria-label":"Field for comment",children:[e.jsx(te,{name:"comment",type:"text",placeholder:"Comment"}),e.jsx(l,{component:"div",name:"comment"})]})]}),e.jsx(D,{type:"submit",children:e.jsx("span",{children:"Send"})}),e.jsx(ce,{id:"time",isOpen:t,onRequestClose:u,children:e.jsx(F,{onRequestClose:u})})]})})},pe=i.img`
  border-radius: ${n.radius.xxl};
`,ge=i.div`
  display: flex;
  gap: ${n.spacing(6)};
  margin-block: ${n.spacing(24)} ${n.spacing(8)};
`,xe=i.p`
  font-weight: 400;
  line-height: 1.25;
  margin-block-end: ${n.spacing(12.5)};
`,me=i.div`
  gap: ${n.spacing(2)};

  h3 {
    color: ${n.colors.black};
    font-weight: 500;
    line-height: 1.25;
  }

  p {
    font-weight: 500;
    line-height: 1.28;
    color: ${n.colors.black};
  }

  svg {
    margin-inline-end: ${n.spacing(6)};
    transform: translateY(2px);
  }
`,ue=i.img`
  padding: ${n.spacing(6)};
  border-radius: ${n.radius.m};
  border: 2px solid rgba(16, 57, 49, 0.2);
  inline-size: 120px;
  block-size: 120px;
`,be=i.div`
  max-inline-size: 992px;
`,je=i.svg`
  position: absolute;
  top: 9px;
  right: 14px;
  transition: fill ${n.transition};
  background: none;
  border: none;
`,fe=i.div`
  display: flex;

  p {
    font-weight: 500;
    line-height: 1.5;
    display: inline-flex;
  }
`,$e=i.div`
  padding: ${n.spacing(12)};
  max-inline-size: 1184px;
  display: flex;
  border-radius: ${n.radius.l};
  background-color: ${n.colors.light};
  gap: ${n.spacing(12)};
`,ve=i.div`
  flex-shrink: 0;
`,C=i.span`
  color: rgba(17, 16, 28, 0.2);
  margin-inline: ${n.spacing(8)};
`,ke=i.span`
  font-weight: 500;
  line-height: 1.5;
  color: ${n.colors.grey};
`,ye=i.svg`
  margin-inline-end: ${n.spacing(4)};
  transform: translateY(4px);
`,we=i.svg`
  margin-inline-end: ${n.spacing(4)};
  transform: translateY(4px);
`,Ce=i.span`
  color: ${n.colors.lightGreen};
  margin-inline-start: ${n.spacing(2)};
`,Me=i.button`
  margin-inline-start: ${n.spacing(24)};
  border: none;
  background: transparent;

  &:hover svg {
    @keyframes shadow {
      0% {
        scale: 1;
      }
      50% {
        scale: 1.2;
      }
      100% {
        scale: 1;
      }
    }
    animation: shadow 0.5s ease infinite;
  }
`,Fe=i.div`
  display: flex;
`,Se=i.div`
  h2 {
    font-weight: 500;
    color: ${n.colors.black};
    font-size: 24px;
    line-height: 1;
  }

  p {
    color: rgba(17, 16, 28, 0.5);
    font-weight: 500;
    line-height: 1.25;
    font-size: 16px;
  }
`,Ae=i.ul`
  margin-block-end: ${n.spacing(12)};
  display: flex;
  flex-direction: row;
  gap: ${n.spacing(4)};

  li {
    font-weight: 500;
    line-height: 1.5;
    background-color: ${n.colors.lightGrey};
    border: ${n.radius.l};
  }
`,x=i.span`
  color: ${n.colors.grey};
  padding: ${n.spacing(4)} ${n.spacing(8)};
`,ze=i.span`
  text-decoration: underline;
`,qe=i.button`
  border: none;
  text-decoration: underline;
  background: transparent;
  font-weight: 500;

  &:active {
    display: none;
  }
`,Te=i.div``,Xe=i.button`
  border: ${n.radius.xl};
  background-color: ${n.colors.green};
  max-inline-size: 215px;

  span {
    color: ${n.colors.light};
    font-weight: 500;
    line-height: 1.25;
    font-size: 16px;
    padding: ${n.spacing(7)} ${n.spacing(14)};
  }
`,_e=i.div`
  padding-inline-start: 122px;
`,Ie=i.div`
  text-align: center;
`,Oe=i.button`
  padding: ${n.spacing(14)} ${n.spacing(28)};
  border: none;
  border-radius: ${n.radius.xl};
  background-color: ${n.colors.green};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  transition: background-color ${n.transition};

  &:hover {
    background-color: ${n.colors.lightGreen};
  }
`,Ge=i.div`
  font-size: 40px;
  text-align: center;
  margin-block-start: 10%;
`,Ne=({item:s})=>{const{reviewer_avatar:r,rating:t,reviewer:o,comment:a}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsx(pe,{src:r,width:"44",height:"44",alt:"avatar"}),e.jsxs(me,{children:[e.jsx("h3",{children:o}),e.jsxs("p",{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{xlinkHref:`${h}#icon-star`})}),t,".0"]})]})]}),e.jsx(xe,{children:a})]})},Re=s=>s.nannies.nannies,Le=s=>s.nannies.loading,Be=s=>s.favorites.favorites,He=s=>s.filter.filters,We=U([He,Re],(s,r)=>{const{select:t}=s;return t==="A to Z"?r:r.filter(a=>t.includes("A to Z")||a.select.includes(a.select))}),Ye=({card:s})=>{const[r,t]=d.useState(!1),[o,a]=d.useState(null),[m,u]=d.useState(!1),[p,$]=d.useState(null),f=V(Be),v=f==null?void 0:f.some(g=>g.rating===s.rating),k=Z(),S=()=>{if(!p){M.error("You don`t authorized!",{duration:5e3,position:"top-right"});return}k(v&&p?Q(s.id):ee(s))},A=()=>{t(!0),document.body.style.overflow="hidden"},y=()=>{t(!1),document.body.style.overflow=""},z=()=>{a(!0),u(!0)},{avatar_url:q,location:T,name:X,rating:N,price_per_hour:R,reviews:B,education:H,characters:E,birthday:_,kids_age:I,experience:O,about:G}=s;return d.useEffect(()=>{const g=K(ne,b=>{$(b||null)});return()=>g()},[]),e.jsxs($e,{children:[e.jsxs(ve,{children:[e.jsx(je,{children:e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{xlinkHref:`${h}#icon-online`})})}),e.jsx(ue,{src:q,alt:"avatar"})]}),e.jsxs(be,{children:[e.jsxs(fe,{children:[e.jsx(ke,{children:"Nanny"}),e.jsxs(Fe,{children:[e.jsx(ye,{width:"16",height:"16",children:e.jsx("use",{xlinkHref:`${h}#icon-map-pin`})}),e.jsx("p",{children:T}),e.jsx(C,{children:"|"}),"",e.jsx(we,{width:"16",height:"16"}),e.jsxs("p",{children:["Rating:",N]}),e.jsx(C,{children:"|"}),"",e.jsx("p",{children:"Price / 1 hour:"}),e.jsxs(Ce,{children:[R,"$"]}),e.jsx(Me,{onClick:S,children:v&&p?e.jsx("svg",{width:"26",height:"26",stroke:"##103931",fill:"#103931",children:e.jsx("use",{xlinkHref:`${h}#icon-heart`})}):e.jsx("svg",{width:"26",height:"26",stroke:"#121417",fill:"transparent",children:e.jsx("use",{xlinkHref:`${h}#icon-heart`})})})]})]}),e.jsxs(Se,{children:[e.jsx("h2",{children:X}),e.jsxs(Ae,{children:[e.jsxs("li",{children:[e.jsx(x,{children:"Age:"}),"",e.jsx(ze,{children:_})]}),e.jsxs("li",{children:[e.jsx(x,{children:"Experience:"}),O]}),e.jsxs("li",{children:[e.jsx(x,{children:"Kids age:"}),I]}),e.jsxs("li",{children:[e.jsx(x,{children:"Characters:"}),E]}),e.jsxs("li",{children:[e.jsx(x,{children:"Education:"}),H]})]}),e.jsx("p",{children:G})]}),!m&&e.jsx(qe,{onClick:z,children:"Read More"}),!o&&e.jsxs(Te,{children:[B.map((g,b)=>e.jsx(Ne,{item:g},b)),e.jsx(Xe,{onClick:A,children:"Make an appointment"}),e.jsx(J,{isOpen:r,onRequestClose:y,children:e.jsx(he,{card:s,onClick:y})})]})]})]})};export{Ie as B,Ge as I,Ye as N,_e as W,Oe as a,He as b,Be as c,We as g,Le as s};
