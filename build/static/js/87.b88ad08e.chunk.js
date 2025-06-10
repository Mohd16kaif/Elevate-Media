"use strict";(self.webpackChunkelevate_media=self.webpackChunkelevate_media||[]).push([[87],{3087:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var i=t(8270),o=t(4404),n=t(5043),a=t(5464);const s=t.p+"static/media/logo.f324958afb07e38bfc93bfad73708146.svg";var c=t(579);const l=a.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`,d=a.Ay.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`,h=a.Ay.nav`
  width: 30rem;
  max-width: 45rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`,m=a.Ay.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`,p=a.Ay.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${e=>e.clicked?"0":"-0.5rem"};
    transform: ${e=>e.clicked?"rotate(135deg)":"rotate(0)"};
  }
  &::after {
    top: ${e=>e.clicked?"0":"0.5rem"};
    transform: ${e=>e.clicked?"rotate(-135deg)":"rotate(0)"};
  }
`,f=a.Ay.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${e=>e.clicked?"1":0};
  visibility: ${e=>e.clicked?"visible":"hidden"};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`,u=()=>{const[e,r]=(0,n.useState)(!1),t=(0,n.useRef)(null);i.os.registerPlugin(o.u);const a=(e,r)=>{r.preventDefault();const t=document.getElementById(e);t?t.scrollIntoView({behavior:"smooth",block:"start"}):console.error(`Element with id '${e}' not found.`)},u=(t,i)=>{r(!e),a(t,i)};return(0,n.useEffect)((()=>{const e=t.current;window.matchMedia("(max-width: 40em)").matches?i.os.to(e,{position:"fixed",top:"0",left:"0",right:"0",padding:"1rem 2.5rem",borderRadius:"0 0 50px 50px",border:"2px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:e,start:"bottom+=200 top",end:"+=100",scrub:!0}}):i.os.to(e,{position:"fixed",top:"1rem",left:"3rem",right:"3rem",padding:"1.5rem 2rem",borderRadius:"50px",border:"3px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:e,start:"bottom+=300 top",end:"+=250",scrub:!0}})}),[]),(0,c.jsxs)(l,{ref:t,children:[(0,c.jsxs)(d,{children:[(0,c.jsx)("img",{src:s,alt:"Elevate Media"}),(0,c.jsxs)("h3",{children:["Elevate ",(0,c.jsx)("span",{style:{fontSize:"0.9em"},children:"Media"})]})]}),(0,c.jsxs)(h,{children:[(0,c.jsx)("a",{href:"#home",onClick:e=>a("home",e),children:"Home"}),(0,c.jsx)("a",{href:"#showcase",onClick:e=>a("showcase",e),children:"Portfolio"}),(0,c.jsx)("a",{href:"#about",onClick:e=>a("about",e),children:"About Us"}),(0,c.jsx)("a",{href:"#services",onClick:e=>a("services",e),children:"Services"}),(0,c.jsx)("a",{href:"#contact",onClick:e=>a("contact",e),children:(0,c.jsx)(m,{children:"Contact Us"})})]}),(0,c.jsx)(p,{clicked:+e,onClick:()=>r(!e),children:(0,c.jsx)("span",{})}),(0,c.jsxs)(f,{clicked:+e,children:[(0,c.jsx)("a",{href:"#home",onClick:e=>u("home",e),children:"Home"}),(0,c.jsx)("a",{href:"#showcase",onClick:e=>a("showcase",e),children:"Portfolio"}),(0,c.jsx)("a",{href:"#about",onClick:e=>u("about",e),children:"About Us"}),(0,c.jsx)("a",{href:"#services",onClick:e=>u("services",e),children:"Services"}),(0,c.jsx)("a",{href:"#contact",onClick:e=>u("contact",e),children:(0,c.jsx)(m,{children:"Contact Us"})})]})]})}}}]);
//# sourceMappingURL=87.b88ad08e.chunk.js.map