var G=Object.defineProperty,X=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(a,r,n)=>r in a?G(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,v=(a,r)=>{for(var n in r||(r={}))I.call(r,n)&&T(a,n,r[n]);if(f)for(var n of f(r))O.call(r,n)&&T(a,n,r[n]);return a},P=(a,r)=>X(a,$(r));var y=(a,r)=>{var n={};for(var l in a)I.call(a,l)&&r.indexOf(l)<0&&(n[l]=a[l]);if(a!=null&&f)for(var l of f(a))r.indexOf(l)<0&&O.call(a,l)&&(n[l]=a[l]);return n};import{j as N,r as d,L as w,R as k,a as U,P as m,u as J,b as K,c as Q,d as b,e as Z,B as ee}from"./vendor.94da8910.js";const te=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};te();particlesJS("particles-js",{particles:{number:{value:36,density:{enable:!0,value_area:800}},color:{value:"#999999"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#999999",opacity:.4,width:2},move:{enable:!0,speed:.6,direction:"none",random:!0,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canva",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});const e=N.exports.jsx,t=N.exports.jsxs,ae=N.exports.Fragment;function _(){const[a,r]=d.exports.useState(!0);return d.exports.useEffect(()=>{const n=()=>{window.pageYOffset>10?r(!1):r(!0)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[a]),e("header",{className:`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!a&&"bg-gray-300 backdrop-blur-sm shadow-lg"}`,children:e("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:e("div",{className:"flex items-center justify-between h-16 md:h-20",children:e("nav",{className:"flex flex-grow",children:t("ul",{className:"flex flex-grow justify-center flex-wrap items-center",children:[e("li",{children:e(w,{to:"/",className:"text-lg text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"Home"})}),e("li",{children:e(w,{to:"/about",className:"text-lg text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"About"})}),e("li",{children:e(w,{to:"/contact",className:"text-lg text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out",children:"Contact"})})]})})})})})}const A=k.createContext({parent:{}});function re(){const a=d.exports.useRef(!0);return d.exports.useEffect(()=>{a.current=!1},[]),a.current}function z(ye){var E=ye,{show:a,enter:r="",enterStart:n="",enterEnd:l="",leave:s="",leaveStart:i="",leaveEnd:h="",appear:F,unmountOnExit:H,tag:V="div",children:W}=E,Y=y(E,["show","enter","enterStart","enterEnd","leave","leaveStart","leaveEnd","appear","unmountOnExit","tag","children"]);const L=r.split(" ").filter(o=>o.length),R=n.split(" ").filter(o=>o.length),M=l.split(" ").filter(o=>o.length),j=s.split(" ").filter(o=>o.length),B=i.split(" ").filter(o=>o.length),q=h.split(" ").filter(o=>o.length),x=H;function g(o,u){u.length&&o.classList.add(...u)}function p(o,u){u.length&&o.classList.remove(...u)}const c=k.useRef(null);return e(U,{appear:F,nodeRef:c,unmountOnExit:x,in:a,addEndListener:o=>{c.current.addEventListener("transitionend",o,!1)},onEnter:()=>{x||(c.current.style.display=null),g(c.current,[...L,...R])},onEntering:()=>{p(c.current,R),g(c.current,M)},onEntered:()=>{p(c.current,[...M,...L])},onExit:()=>{g(c.current,[...j,...B])},onExiting:()=>{p(c.current,B),g(c.current,q)},onExited:()=>{p(c.current,[...q,...j]),x||(c.current.style.display="none")},children:e(V,P(v({ref:c},Y),{style:{display:x?null:"none"},children:W}))})}function C(l){var s=l,{show:a,appear:r}=s,n=y(s,["show","appear"]);const{parent:i}=d.exports.useContext(A),h=re();return a===void 0?e(z,v({appear:i.appear||!i.isInitialRender,show:i.show},n)):e(A.Provider,{value:{parent:{show:a,isInitialRender:h,appear:r}},children:e(z,v({appear:r,show:a},n))})}m.oneOfType([m.arrayOf(m.element),m.element.isRequired]),m.string,m.string,m.bool.isRequired,m.func.isRequired;var ne="/assets/hero-image.64c4d213.png";function se(){return d.exports.useState(!1),e("section",{className:"relative",children:e("div",{className:"max-w-4xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-20 ",children:[t("div",{className:"text-center",children:[e("h1",{className:"text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4","data-aos":"zoom-y-out",children:e("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400",children:"NOVA FOOD"})}),t("div",{className:"max-w-3xl mx-auto",children:[e("p",{className:"text-xl text-gray-600 mb-8","data-aos":"zoom-y-out","data-aos-delay":"150",children:"Coming Soon"}),e("div",{className:"max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center","data-aos":"zoom-y-out","data-aos-delay":"300"}),e("div",{})]})]}),e("div",{children:e("div",{className:"relative flex justify-center mb-8","data-aos":"zoom-y-out","data-aos-delay":"450",children:e("div",{className:"flex flex-col justify-center",children:e("img",{className:"mx-auto",src:ne,width:"768",height:"432",alt:"Nova Food Illustration"})})})})]})})})}var le="/assets/Scan.c6209c8f.png",ie="/assets/Insights.db380657.png",oe="/assets/Insights - Budget.ebbefe66.png";function ce(){const[a,r]=d.exports.useState(1),n=d.exports.useRef(null),l=()=>{n.current.children[a]&&(n.current.style.height=n.current.children[a-1].offsetHeight+"px")};return d.exports.useEffect(()=>{l()},[a]),t("section",{className:"relative",children:[e("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true"}),e("div",{className:"absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"}),e("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"pt-12 md:pt-20",children:[t("div",{className:"max-w-3xl mx-auto text-center pb- 12 md:pb-16",children:[e("h1",{className:"h2 mb-4",children:"Learn about your food"}),e("p",{className:"text-xl text-gray-600",children:"From a simple scan of your grocery receipt, discover how your food choices affects you and your environment"})]}),t("div",{className:"md:grid md:grid-cols-12 md:gap-6",children:[t("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6","data-aos":"fade-right",children:[t("div",{className:"md:pr-4 lg:pr-12 xl:pr-16 mb-8",children:[e("h3",{className:"h3 mb-3",children:"Powerful Insights"}),e("p",{className:"text-xl text-gray-600",children:"Your grocery receipt contains a lot of valuable information"})]}),t("div",{className:"mb-8 md:mb-0",children:[e("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${a!==1?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:s=>{s.preventDefault(),r(1)},children:t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"1 - Scan"}),e("div",{className:"text-gray-600",children:"Take a picture of your grocery receipt"})]})}),e("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${a!==2?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:s=>{s.preventDefault(),r(2)},children:t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"2 - Select a Category"}),e("div",{className:"text-gray-600",children:"View different information from 3 different categories"})]})}),e("a",{className:`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${a!==3?"bg-white shadow-md border-gray-200 hover:shadow-lg":"bg-gray-200 border-transparent"}`,href:"#0",onClick:s=>{s.preventDefault(),r(3)},children:t("div",{children:[e("div",{className:"font-bold leading-snug tracking-tight mb-1",children:"3 - View Details"}),e("div",{className:"text-gray-600",children:"Learn more about your food choices"})]})})]})]}),e("div",{className:"max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-5 mb-8 md:mb-0 md:order-1","data-aos":"zoom-y-out",ref:n,children:t("div",{className:"relative flex flex-col text-center lg:text-right",children:[e(C,{show:a===1,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"md:max-w-none mx-auto rounded",src:le,width:"275",alt:"Features bg"})})}),e(C,{show:a===2,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"md:max-w-none mx-auto rounded",src:ie,width:"275",alt:"Features bg"})})}),e(C,{show:a===3,appear:!0,className:"w-full",enter:"transition ease-in-out duration-700 transform order-first",enterStart:"opacity-0 translate-y-16",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 -translate-y-16",children:e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"md:max-w-none mx-auto rounded",src:oe,width:"275",alt:"Features bg"})})})]})})]})]})})]})}function de(){return t("section",{className:"relative",children:[e("div",{className:"absolute inset-1 pointer-events-none","aria-hidden":"true"}),e("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"py-12 md:py-20",children:[t("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:[e("h2",{className:"h2 mb-4",children:"Not Just a Scanner"}),e("p",{className:"text-xl text-gray-600",children:"Nova Food is more than a scanner, it is your grocery companion app"})]}),t("div",{className:"max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none",children:[t("div",{className:"relative flex flex-col items-center p-6 bg-white rounded shadow-xl",children:[e("svg",{className:"w-16 h-16 p-1 -mt-1 mb-2",viewBox:"0 0 64 64",xmlns:"https://www.w3.org/2000/svg",children:t("g",{fill:"none",fillRule:"evenodd",children:[e("rect",{className:"fill-current text-blue-600",width:"64",height:"64",rx:"32"}),t("g",{strokeWidth:"2",children:[e("path",{className:"stroke-current text-blue-300",d:"M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"}),e("path",{className:"stroke-current text-white",d:"M20.571 37.714h5.715L36.57 26.286h8"}),e("path",{className:"stroke-current text-blue-300",strokeLinecap:"square",d:"M41.143 34.286l3.428 3.428-3.428 3.429"}),e("path",{className:"stroke-current text-white",strokeLinecap:"square",d:"M41.143 29.714l3.428-3.428-3.428-3.429"})]})]})}),e("h4",{className:"text-xl font-bold leading-snug tracking-tight mb-1",children:"Recipe Recommendations"}),e("p",{className:"text-gray-600 text-center",children:"Get recipe suggestions based on your recent groceries"})]}),t("div",{className:"relative flex flex-col items-center p-6 bg-white rounded shadow-xl",children:[e("svg",{className:"w-16 h-16 p-1 -mt-1 mb-2",viewBox:"0 0 64 64",xmlns:"https://www.w3.org/2000/svg",children:t("g",{fill:"none",fillRule:"evenodd",children:[e("rect",{className:"fill-current text-blue-600",width:"64",height:"64",rx:"32"}),t("g",{strokeWidth:"2",transform:"translate(19.429 20.571)",children:[e("circle",{className:"stroke-current text-white",strokeLinecap:"square",cx:"12.571",cy:"12.571",r:"1.143"}),e("path",{className:"stroke-current text-white",d:"M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"}),e("path",{className:"stroke-current text-blue-300",d:"M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"})]})]})}),e("h4",{className:"text-xl font-bold leading-snug tracking-tight mb-1",children:"Grocery List"}),e("p",{className:"text-gray-600 text-center",children:"Write down your wishlist items to use them at the grocery store"})]}),t("div",{className:"relative flex flex-col items-center p-6 bg-white rounded shadow-xl",children:[e("svg",{className:"w-16 h-16 p-1 -mt-1 mb-2",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:t("g",{fill:"none",fillRule:"evenodd",children:[e("rect",{className:"fill-current text-blue-600",width:"64",height:"64",rx:"32"}),t("g",{strokeLinecap:"square",strokeWidth:"2",children:[e("path",{className:"stroke-current text-blue-300",d:"M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"}),e("path",{className:"stroke-current text-white",d:"M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"})]})]})}),e("h4",{className:"text-xl font-bold leading-snug tracking-tight mb-1",children:"Dietary Consultation"}),e("p",{className:"text-gray-600 text-center",children:"View professional tips to help you eat better"})]})]})]})})]})}function me(){return e("section",{className:"relative"})}function he(){return e("section",{children:e("div",{className:"max-w-2xl mx-auto ",children:e("div",{className:"pb-12 md:pb-20",children:e("div",{className:"relativerounded overflow-hidden bg-white shadow-xl","data-aos":"zoom-y-out",children:e("iframe",{width:"100%",height:"380",src:"https://4fdb9ebd.sibforms.com/serve/MUIEAHW7n0V9tjIXQw6WXP_TnNjDnX7Mq-VNDnG053bYeWCq1bhHpenVMFiLfScgILkPKkq0ZSvFvIiSrS7OujBMuKc3skVwiylQhLb9oUSLvfBGN_dR6u1RS7pBVdDkCpJ-CYWDrCikIj8ydXpwcHKVkPYO-YR3Y7zilTXdXt_gXgK-_cLqYhlNrx0yq-oLN7bBMgvGA0k2qkbF",frameborder:"0",scrolling:"auto",allowfullscreen:!0})})})})})}function S(){return e("footer",{children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:e("div",{className:"py-4 md:py-8 border-t border-gray-200",children:t("div",{className:"text-sm text-gray-600 mr-4 text-center",children:["Copyright \xA9 2022 -"," ",e("a",{className:"text-blue-600 hover:underline",href:"https://novafood.io",children:"novafood.io"})]})})})})}function D(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden bg-gray-100",children:[e(_,{}),t("main",{className:"flex-grow",children:[e(se,{}),e(ce,{}),e(de,{}),e(me,{}),e(he,{})]}),e(S,{})]})}var ue="/assets/rodrigo.e9733768.jpeg",xe="/assets/justin.8dfd66ed.jpeg",ge="/assets/thomas.fe7340aa.jpeg",pe="/assets/cody.2e5ad315.jpeg";function fe(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden bg-gray-100",children:[e(_,{}),t("main",{className:"flex-grow",children:[" ",t("section",{className:"relative",children:[e("div",{className:"absolute inset-1 pointer-events-none","aria-hidden":"true"}),e("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"py-12 md:py-20",children:[e("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20 "}),t("div",{className:"max-w-3xl mx-auto pb-12 md:pb-20 ",children:[e("h1",{className:"h1 mb-4 text-center",children:"About Us"}),e("h3",{className:"h3",children:"Nova Food"}),e("p",{className:"text-lg text-gray-600 mb-2",children:"Nova Food is a mobile application aiming to tackle the lack of attention on the impact of people\u2019s food choices."}),e("p",{className:"text-lg text-gray-600 mb-10",children:"Our app serves as a grocery companion app where grocery shoppers can easily access information about the food they are buying, their spending habits, and how their choices are affecting the environment. From a picture of your grocery bill, Nova Food scans the items, prices, and stores, then creates easy-to-read information."}),e("h3",{className:"h3",children:"Our Mission"}),e("p",{className:"text-lg text-gray-600 mb-10",children:"We believe in a future where everyone can have easy access to information about their grocery choices that may affect their health, environment and financial standing. Our goal is to finally shine a light on smarter food choices as the middleman and serve the public with tools to help them make a change."}),e("h3",{className:"h3",children:"Our Story"}),e("p",{className:"text-lg text-gray-600 mb-2",children:"Nova Food was formed after winning student entrepreneurship competitions hosted by TECHNATION in collaboration with Microsoft Canada, ICUBE UTM, and CGLCC in aim to find solutions to solve problems related to climate change."}),e("p",{className:"text-lg text-gray-600 mb-10",children:'We are close to reaching the "point of no return" in terms of climate change and now is the time to change the way we live. With this problem in mind, we decided to find a solution regarding problems related to the pollution involved in food production and consumption.'})]}),e("h1",{className:"h1 mb-4 text-center",children:"The Team"}),t("div",{className:"max-w-sm mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none",children:[e("a",{href:"https://www.linkedin.com/in/rodrigo-akio/",target:"_blank",children:t("div",{className:"relative flex flex-col items-center p-6 bg-white rounded shadow-xl move-up",children:[e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"rounded",src:ue,width:"200",alt:"Rodrigo Akio de Almeida Hisano Profile Picture"})}),e("h4",{className:"text-lg font-bold leading-snug tracking-tight mb-1 text-center",children:"Rodrigo Akio"}),e("p",{className:"text-gray-600 text-center text-base",children:"Founder"})]})}),e("a",{href:"https://www.linkedin.com/in/justin-soliman-4bb867233/",target:"_blank",children:t("div",{className:"relative flex flex-col items-center p-6 bg-white rounded shadow-xl move-up",children:[e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"rounded",src:xe,width:"200",alt:"Justin Soliman Profile Picture"})}),e("h4",{className:"text-lg font-bold leading-snug tracking-tight mb-1 text-center",children:"Justin Soliman"}),e("p",{className:"text-gray-600 text-center text-base",children:"Founder"})]})}),e("a",{href:"https://www.linkedin.com/in/thomas-novac-5a4a98229/",target:"_blank",children:t("div",{className:"relative flex flex-col items-center p-6 bg-white rounded shadow-xl move-up",children:[e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"rounded",src:ge,width:"200",alt:"Thomas Novac Profile Picture"})}),e("h4",{className:"text-lg font-bold leading-snug tracking-tight mb-1 text-center",children:"Thomas Novac"}),e("p",{className:"text-gray-600 text-center text-base",children:"Founder"})]})}),e("a",{href:"https://www.linkedin.com/in/cody-gonsalves-8a17b614a/",target:"_blank",children:t("div",{className:"relative flex flex-col items-center p-6 bg-white rounded shadow-xl move-up",children:[e("div",{className:"relative inline-flex flex-col",children:e("img",{className:"rounded",src:pe,width:"200",alt:"Cody Gonsalves Profile Picture"})}),e("h4",{className:"text-lg font-bold leading-snug tracking-tight mb-1 text-center",children:"Cody Gonsalves"}),e("p",{className:"text-gray-600 text-center text-base",children:"Founder"})]})})]})]})})]})]}),e(S,{})]})}function ve(){return t("div",{className:"flex flex-col min-h-screen overflow-hidden bg-gray-100",children:[e(_,{}),t("main",{className:"flex-grow",children:[" ",e("section",{className:"relative",children:e("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6",children:e("div",{className:"py-12 md:py-20",children:e("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:t("div",{className:"py-12 md:py-20",children:[t("div",{className:"max-w-3xl mx-auto text-center",children:[e("h1",{className:"h2 mb-4",children:"Contact Us"}),e("p",{className:"text-xl text-gray-600","data-aos":"zoom-y-out",children:"Interested in the product? Do you have suggestions? Want to contact our team? Feel free to send us a message below."})]}),e("div",{className:"rounded max-w-2xl mx-auto mt-20 shadow-2 shadow-2xl","data-aos":"zoom-y-out",children:e("div",{class:"contact__form-container",children:t("form",{action:"https://formspree.io/f/moqrzygd",class:"contact__form",method:"POST",children:[t("div",{class:"contact__form-field",children:[e("label",{class:"contact__form-label",for:"name",children:"Name"}),e("input",{required:!0,placeholder:"Enter Your Name",type:"text",class:"contact__form-input",name:"name",id:"name"})]}),t("div",{class:"contact__form-field",children:[e("label",{class:"contact__form-label",for:"email",children:"Email"}),e("input",{required:!0,placeholder:"Enter Your Email",type:"text",class:"contact__form-input",name:"email",id:"email"})]}),t("div",{class:"contact__form-field",children:[e("label",{class:"contact__form-label",for:"message",children:"Message"}),e("textarea",{required:!0,cols:"30",rows:"4",class:"contact__form-input",placeholder:"Enter Your Message",name:"message",id:"message"})]}),e("button",{type:"submit",class:"btn btn--theme contact__btn",children:"Submit"})]})})})]})})})})})]}),e(S,{})]})}function be(){const a=J();return d.exports.useEffect(()=>{K.init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),d.exports.useEffect(()=>{document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior=""},[a.pathname]),e(ae,{children:t(Q,{children:[e(b,{exact:!0,path:"/",element:e(D,{})}),e(b,{path:"/about",element:e(fe,{})}),e(b,{path:"/contact",element:e(ve,{})}),e(b,{path:"*",element:e(D,{})})]})})}Z.render(e(k.StrictMode,{children:e(ee,{children:e(be,{})})}),document.getElementById("root"));
