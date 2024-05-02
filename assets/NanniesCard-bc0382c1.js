import{s as i,t as n,F as G,j as e,e as L,g as c,h as W,r as d,b as Y,E as l,B as P,_ as C,i as D,d as U,u as V,o as Z,A as K,k as J,l as Q,m as ee}from"./index-776f4f13.js";const ne=i.div`
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
`,ie=i.img`
  border-radius: ${n.radius.m};
`,se=i.div`
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
`,b=i.label`
  padding: ${n.spacing(8)} ${n.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${n.radius.xxs};
  inline-size: 232px;
  outline: none;
  margin-inline-end: ${n.spacing(4)};
  margin-block-end: ${n.spacing(8)};
`,y=i.label`
  padding: ${n.spacing(8)} ${n.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${n.radius.xxs};
  inline-size: 100%;
  outline: none;
  margin-block-end: ${n.spacing(8)};
`,re=i.label`
  padding: ${n.spacing(8)} ${n.spacing(9)};
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: ${n.radius.xxs};
  inline-size: 100%;
  outline: none;
  height: 116px;
`,te=i(G)`
  display: flex;
  margin-block-end: ${n.spacing(20)};
`,M=i.div`
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
`,ae=i.button`
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
`,oe=i.button`
  display: flex;
  flex-direction: column;
  max-inline-size: 480px;
`,le=({isOpen:s,onRequestClose:r})=>e.jsxs(M,{isOpen:s,onRequestClose:r,children:[e.jsx("h2",{children:"Meeting time"}),e.jsx("p",{children:"9:00"}),e.jsx("p",{children:"9:30"}),e.jsx("p",{children:"10:00"}),e.jsx("p",{children:"10:30"})]}),ce=L({address:c().min(3,"Must least 3 symbols").max(64,"At most 64 symbols").required("This ia a required field"),number:c().min(9,"Simple Format: XXX-XX-XX").max(9,"Simple Format: XXX-XX-XX").required("This is a required field").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and dashes."),childAge:W().min(1,"Must be 1 number").max(2,"At most 2 number").required("This is a required field"),time:c().required("Chose one option"),email:c().email("Invalid email adress").required("This is a required field"),name:c().min(3,"Must be 3 symbols").max(32,"At most 32 symbols").required("This is a required field"),comment:c().min(4,"Must be 4 symbols").max(2e3,"At most 2000 symbols").required("This is a required field")}),de=({card:s,onRequestClose:r})=>{const[t,o]=d.useState(!1),a=({resetForm:h})=>{C.success("Successfully sent date",{position:"top-right",duration:5e3}),h(),r()},x=()=>{o(!0)},m=()=>{o(!1)};return e.jsx(Y,{initialValues:{address:"",number:"",childAge:"",time:"",email:"",name:"",comment:""},onSubmit:a,validationSchema:ce,children:e.jsxs(oe,{children:[e.jsxs(ne,{children:[e.jsx("h3",{children:"Make an appointment with a babysitter"}),e.jsx("p",{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."})]}),e.jsxs(se,{children:[e.jsx(ie,{src:s.avatar_url,alt:"avatar",width:"44",height:"44"}),e.jsx("p",{children:"Your nanny"}),e.jsx("h3",{children:s.name})]}),e.jsxs(te,{children:[e.jsxs("label",{"aria-label":"Field for address",children:[e.jsx(b,{name:"address",type:"text",placeholder:"Address"}),e.jsx(l,{name:"address",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Child is age",children:[e.jsx(b,{type:"number",placeholder:"Child is age"}),e.jsx(l,{name:"childAge",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for number",children:[e.jsx(b,{name:"number",type:"tel",placeholder:"+380"}),e.jsx(l,{name:"number",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for time",children:[e.jsx(b,{name:"time",type:"number",placeholder:"00:00"}),e.jsx(l,{name:"time",component:"div"}),e.jsx(ae,{onClick:x,type:"text",children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:`${SpriteIcon}#icon-clock}`})})})]}),e.jsxs("label",{"aria-label":"Field for email",children:[e.jsx(y,{name:"email",type:"email",placeholder:"Email"}),e.jsx(l,{component:"div",name:"email"})]}),e.jsxs("label",{"aria-label":"Field for Father is or mother is name",children:[e.jsx(y,{name:"name",type:"text",placeholder:"Father is or mother is name"}),e.jsx(l,{component:"div",name:"name"})]}),e.jsxs("label",{"aria-label":"Field for comment",children:[e.jsx(re,{name:"comment",type:"text",placeholder:"Comment"}),e.jsx(l,{component:"div",name:"comment"})]})]}),e.jsx(P,{type:"submit",children:e.jsx("span",{children:"Send"})}),e.jsx(le,{id:"time",isOpen:t,onRequestClose:m,children:e.jsx(M,{onRequestClose:m})})]})})},he=i.img`
  border-radius: ${n.radius.xxl};
`,pe=i.div`
  display: flex;
  gap: ${n.spacing(6)};
  margin-block: ${n.spacing(24)} ${n.spacing(8)};
`,ge=i.p`
  font-weight: 400;
  line-height: 1.25;
  margin-block-end: ${n.spacing(12.5)};
`,xe=i.div`
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
`,me=i.img`
  padding: ${n.spacing(6)};
  border-radius: ${n.radius.m};
  border: 2px solid rgba(16, 57, 49, 0.2);
  inline-size: 120px;
  block-size: 120px;
`,ue=i.div`
  max-inline-size: 992px;
`,be=i.svg`
  position: absolute;
  top: 9px;
  right: 14px;
  transition: fill ${n.transition};
  background: none;
  border: none;
`,je=i.div`
  display: flex;

  p {
    font-weight: 500;
    line-height: 1.5;
    display: inline-flex;
  }
`,fe=i.div`
  padding: ${n.spacing(12)};
  max-inline-size: 1184px;
  display: flex;
  border-radius: ${n.radius.l};
  background-color: ${n.colors.light};
  gap: ${n.spacing(12)};
`,$e=i.div`
  flex-shrink: 0;
`,w=i.span`
  color: rgba(17, 16, 28, 0.2);
  margin-inline: ${n.spacing(8)};
`,ve=i.span`
  font-weight: 500;
  line-height: 1.5;
  color: ${n.colors.grey};
`,ke=i.svg`
  margin-inline-end: ${n.spacing(4)};
  transform: translateY(4px);
`,ye=i.svg`
  margin-inline-end: ${n.spacing(4)};
  transform: translateY(4px);
`,we=i.span`
  color: ${n.colors.lightGreen};
  margin-inline-start: ${n.spacing(2)};
`,Ce=i.button`
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
`,Me=i.div`
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
`,Fe=i.ul`
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
`,g=i.span`
  color: ${n.colors.grey};
  padding: ${n.spacing(4)} ${n.spacing(8)};
`,Ae=i.span`
  text-decoration: underline;
`,ze=i.button`
  border: none;
  text-decoration: underline;
  background: transparent;
  font-weight: 500;

  &:active {
    display: none;
  }
`,qe=i.div``,Te=i.button`
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
`,He=i.div`
  padding-inline-start: 122px;
`,Ee=i.div`
  text-align: center;
`,_e=i.button`
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
`,Oe=i.div`
  font-size: 40px;
  text-align: center;
  margin-block-start: 10%;
`,Xe=({item:s})=>{const{reviewer_avatar:r,rating:t,reviewer:o,comment:a}=s;return e.jsxs(e.Fragment,{children:[e.jsxs(pe,{children:[e.jsx(he,{src:r,width:"44",height:"44",alt:"avatar"}),e.jsxs(xe,{children:[e.jsx("h3",{children:o}),e.jsxs("p",{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{xlinkHref:`${SpriteIcon}#icon-star`})}),t,".0"]})]})]}),e.jsx(ge,{children:a})]})},Ie=s=>s.nannies.nannies,Ge=s=>s.nannies.loading,Ne=s=>s.favorites.favorites,Re=s=>s.filter.filters,Le=D([Re,Ie],(s,r)=>{const{select:t}=s;return t==="A to Z"?r:r.filter(a=>t.includes("A to Z")||a.select.includes(a.select))}),We=({card:s})=>{const[r,t]=d.useState(!1),[o,a]=d.useState(null),[x,m]=d.useState(!1),[h,f]=d.useState(null),j=U(Ne),$=j==null?void 0:j.some(p=>p.rating===s.rating),v=V(),S=()=>{if(!h){C.error("You don`t authorized!",{duration:5e3,position:"top-right"});return}v($&&h?J(s.id):Q(s))},F=()=>{t(!0),document.body.style.overflow="hidden"},k=()=>{t(!1),document.body.style.overflow=""},A=()=>{a(!0),m(!0)},{avatar_url:z,location:q,name:T,rating:X,price_per_hour:I,reviews:N,education:R,characters:B,birthday:H,kids_age:E,experience:_,about:O}=s;return d.useEffect(()=>{const p=Z(ee,u=>{f(u||null)});return()=>p()},[]),e.jsxs(fe,{children:[e.jsxs($e,{children:[e.jsx(be,{children:e.jsx("svg",{width:"14",height:"14",children:e.jsx("use",{xlinkHref:`${SpriteIcon}#icon-online`})})}),e.jsx(me,{src:z,alt:"avatar"})]}),e.jsxs(ue,{children:[e.jsxs(je,{children:[e.jsx(ve,{children:"Nanny"}),e.jsxs(Me,{children:[e.jsx(ke,{width:"16",height:"16",children:e.jsx("use",{xlinkHref:`${SpriteIcon}#icon-map-pin`})}),e.jsx("p",{children:q}),e.jsx(w,{children:"|"}),"",e.jsx(ye,{width:"16",height:"16"}),e.jsxs("p",{children:["Rating:",X]}),e.jsx(w,{children:"|"}),"",e.jsx("p",{children:"Price / 1 hour:"}),e.jsxs(we,{children:[I,"$"]}),e.jsx(Ce,{onClick:S,children:$&&h?e.jsx("svg",{width:"26",height:"26",stroke:"##103931",fill:"#103931",children:e.jsx("use",{xlinkHref:`${SpriteIcon}#icon-heart`})}):e.jsx("svg",{width:"26",height:"26",stroke:"#121417",fill:"transparent",children:e.jsx("use",{xlinkHref:`${SpriteIcon}#icon-heart`})})})]})]}),e.jsxs(Se,{children:[e.jsx("h2",{children:T}),e.jsxs(Fe,{children:[e.jsxs("li",{children:[e.jsx(g,{children:"Age:"}),"",e.jsx(Ae,{children:H})]}),e.jsxs("li",{children:[e.jsx(g,{children:"Experience:"}),_]}),e.jsxs("li",{children:[e.jsx(g,{children:"Kids age:"}),E]}),e.jsxs("li",{children:[e.jsx(g,{children:"Characters:"}),B]}),e.jsxs("li",{children:[e.jsx(g,{children:"Education:"}),R]})]}),e.jsx("p",{children:O})]}),!x&&e.jsx(ze,{onClick:A,children:"Read More"}),!o&&e.jsxs(qe,{children:[N.map((p,u)=>e.jsx(Xe,{item:p},u)),e.jsx(Te,{onClick:F,children:"Make an appointment"}),e.jsx(K,{isOpen:r,onRequestClose:k,children:e.jsx(de,{card:s,onClick:k})})]})]})]})};export{Ee as B,Oe as I,We as N,He as W,_e as a,Re as b,Ne as c,Le as g,Ge as s};
