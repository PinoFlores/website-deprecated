(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{108:function(e,t,i){},109:function(e,t,i){"use strict";i.r(t),i.d(t,"ColorModeContext",(function(){return Ie}));var n=i(22),a=i(13),r=i(1),c=i.n(r),s=i(72),l=i.n(s),o=i(140),d=i(142),m=i(134),j=Object(d.a)((function(e){return Object(m.a)({root:{overflow:"auto",height:"100%",backgroundColor:e.palette.background.default}})})),b=i(141),x=i(150),p=i(147),h=i(39),u=i(0),g=function(e){var t=Object(h.a)();return Object(u.jsx)(x.a,{style:Object(n.a)({padding:"2px",borderRadius:"100%",border:"2px solid ".concat((null===e||void 0===e?void 0:e.borderColor)||t.palette.primary.main)},null===e||void 0===e?void 0:e.style),children:Object(u.jsx)(p.a,{alt:"Remy Sharp",src:(null===e||void 0===e?void 0:e.src)||"",sx:{width:(null===e||void 0===e?void 0:e.size)||"7rem",height:(null===e||void 0===e?void 0:e.size)||"7rem"}})})},O=i(151),v=function(e){var t=Object(h.a)();return Object(u.jsxs)("div",{style:Object(n.a)({display:"flex",alignItems:"center"},null===e||void 0===e?void 0:e.style),children:[Object(u.jsx)(g,{src:(null===e||void 0===e?void 0:e.pictureSrc)||""}),Object(u.jsxs)("div",{style:{marginLeft:"0.7rem"},children:[Object(u.jsx)("br",{}),Object(u.jsx)(O.a,{variant:"subtitle2",style:{fontSize:t.spacing(3)},children:(null===e||void 0===e?void 0:e.username)||""}),Object(u.jsx)(O.a,{variant:"subtitle1",style:{fontSize:t.spacing(2)},children:(null===e||void 0===e?void 0:e.position)||""})]})]})},f=i(139),y=i(135),D=i(153),S=i(144),k=i(154),C=i(138),E=i(36),w=i.n(E),I={EXTRA_SMALL_DEVICES:w()({maxWidth:600}),SMALL_DEVICES:w()({minWidth:600.98,maxWidth:900}),MEDIUM_DEVICES:w()({minWidth:900.98,maxWidth:1200}),LARGE_DEVICES:w()({minWidth:1200.98,maxWidth:1536}),EXTRA_LARGE_DEVICES:w()({minWidth:1536.98})},R=function(){var e=Object(C.a)(I.EXTRA_SMALL_DEVICES),t=Object(C.a)(I.SMALL_DEVICES),i=Object(C.a)(I.MEDIUM_DEVICES),n=Object(C.a)(I.LARGE_DEVICES),a=Object(C.a)(I.EXTRA_LARGE_DEVICES);return{isExtraSmallDevice:e,isSmallDevice:t,isMediumDevice:i,isLargeDevice:n,isExtraLargeDevice:a,getScreen:function(){return e?"xs":t?"sm":n?"ld":a?"xl":"md"}}},A=i(152),L=function(e){var t,i=e.children,n=e.style,a=e.className,r=(Object(h.a)(),R()),c=(t={mq:r},Object(d.a)((function(e){return Object(m.a)({root:{padding:"1rem",borderRadius:"".concat(t.mq.isExtraSmallDevice?0:e.spacing(1)," !important"),borderLeftWidth:"".concat(t.mq.isExtraSmallDevice?0:"1px"," !important"),borderRightWidth:"".concat(t.mq.isExtraSmallDevice?0:"1px"," !important")}})})))();return Object(u.jsx)(A.a,{variant:"outlined",className:"".concat(c.root," ").concat(a),style:n,children:i})};var T=function(e){var t=R(),i=function(e){return Object(d.a)((function(t){return e.mq.isExtraSmallDevice||e.mq.isSmallDevice||e.mq.isMediumDevice,Object(m.a)({HeaderContainer:{borderRadius:0,borderTop:"none !important",padding:"0 !important"},headerBgContainer:{borderRadius:0,borderTopRightRadius:"0 !important",height:"9rem",background:t.palette.common.black,backgroundImage:"url(".concat(e.src,")")},topActions:{width:"100%",display:"flex",justifyContent:"space-between",padding:"10px"},userInfoContainer:{padding:"0 1.3rem",border:"none !important",borderTop:"none !important"},light:{color:t.palette.common.white},linkedinBtn:{color:"".concat(t.palette.common.white," !important")},themeSwitcher:{border:"1px solid ".concat(Object(y.a)(t.palette.common.white,.7)," !important")},dark:{color:t.palette.common.white}})}))}({src:e.backgroundImage,mq:t})();return Object(u.jsxs)(L,{className:i.HeaderContainer,children:[Object(u.jsx)("div",{className:i.headerBgContainer,style:{borderRadius:0},children:Object(u.jsxs)("div",{className:i.topActions,children:[Object(u.jsx)("span",{}),Object(u.jsx)("div",{children:Object(u.jsx)(D.a,{href:"https://www.linkedin.com/in/jose-aburto-92468a13b/",variant:"contained",className:i.linkedinBtn,disableElevation:!0,children:"Linkedin"})})]})}),Object(u.jsxs)("div",{className:i.userInfoContainer,children:[null===e||void 0===e?void 0:e.userInfoComponent,Object(u.jsx)("br",{}),Object(u.jsx)(f.a,{children:Object(u.jsx)(S.a,{scrollButtons:!0,variant:"scrollable",allowScrollButtonsMobile:!0,value:e.tabValue,onChange:e.onTabChange,"aria-label":"scrollable force tabs example",children:e.tabs.map((function(e,t){var i=e.index,a=e.name;return Object(u.jsx)(k.a,Object(n.a)({label:a},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(i)),t)}))})})]})]})},B=i(162),M=i(163),F=i(155),_=i(148),P=function(e){return Object(u.jsx)(_.a,Object(n.a)(Object(n.a)({item:!0,xs:10},null===e||void 0===e?void 0:e.responsive),{},{children:e.children}))},N=(i(84),function(e){var t=e.children,i=e.value,n=e.index;return Object(u.jsx)("div",{role:"tabpanel",hidden:i!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n),children:i===n&&t})}),W=i(149),V=i(75),z=i.n(V),J=i(156),q=i(157),H=i(146),U=i(158),G=i(159),Q=i(77),X=i.n(Q),Z=i(78),Y=i.n(Z),K=i(76),$=i.n(K),ee=function(e){var t=Object(h.a)().palette,i=t.primary.light,n=$.a;return"done"===e.status?(i=t.success.light,n=X.a):"pending"===e.status&&(i=t.warning.light,n=Y.a),Object(u.jsx)(F.a,{style:{background:Object(y.a)(i,.2)},children:Object(u.jsx)(n,{style:{color:i}})})},te=i(80),ie=i.n(te),ne=i(79),ae=i.n(ne),re=function(e){return Object(u.jsx)(J.a,{sx:{width:"100%",bgcolor:"background.paper"},children:e.children})},ce=function(e){var t=Object(h.a)().palette.primary.main;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(H.a,{alignItems:"flex-start",style:{width:"100%"},children:[e.hideIcon?null:Object(u.jsx)(U.a,{children:Object(u.jsx)(ee,{status:e.status})}),Object(u.jsx)(G.a,{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O.a,{variant:"subtitle2",style:{fontSize:"16px",color:t},children:e.title}),Object(u.jsxs)(O.a,{component:"div",style:{display:"flex"},children:[Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(u.jsx)(ae.a,{style:{fontSize:"15px"}}),"\xa0",Object(u.jsx)(O.a,{variant:"body1",style:{fontSize:"14px"},children:e.dateInfo})]}),"\xa0 \xa0\xa0",Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(u.jsx)(ie.a,{style:{fontSize:"15px"}}),"\xa0",Object(u.jsx)(O.a,{variant:"body1",style:{fontSize:"14px"},children:e.location})]})]}),e.description]})})]}),z.a.has(e,"hideDivider")?e.hideDivider?null:Object(u.jsx)(q.a,{variant:"fullWidth",component:"li"}):null]})},se=c.a.createContext({}),le=function(){var e=c.a.useContext(se);if(!e)throw new Error("make sure useChangeTheme");return e},oe=i(160),de=i(161),me=i(145),je=[{index:0,name:"Curriculum",Component:function(){var e=le().profile.curriculum;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)(L,{style:{padding:"1rem 1.5rem"},children:[Object(u.jsx)(O.a,{variant:"h6",children:"About me"}),Object(u.jsx)("div",{style:{height:"0.9rem"}}),Object(u.jsx)(O.a,{variant:"body1",children:e.about})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(L,{style:{padding:"1rem 1.5rem"},children:[Object(u.jsx)(O.a,{variant:"h6",children:"Education"}),Object(u.jsx)(re,{children:e.educations.map((function(t,i){return Object(u.jsx)(ce,{status:t.status,title:t.name,dateInfo:t.started_at,location:t.center,description:Object(u.jsx)("span",{children:t.details}),hideDivider:i===e.educations.length-1},i)}))})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(L,{style:{padding:"1rem 1.5rem"},children:[Object(u.jsx)(O.a,{variant:"h6",children:"Experience"}),Object(u.jsx)(re,{children:e.experience.map((function(t,i){return Object(u.jsx)(ce,{hideIcon:!0,title:t.position,dateInfo:"".concat(t.from," - ").concat(t.to),location:"".concat(t.location," / ").concat(t.at),description:Object(u.jsx)(f.a,{children:Object(u.jsx)("ul",{style:{marginTop:"10px",paddingLeft:"1rem"},children:t.details.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))})}),hideDivider:i===e.experience.length-1},i)}))})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(L,{style:{padding:"1rem 1.5rem"},children:[Object(u.jsx)(O.a,{variant:"h6",children:"Skills"}),e.skills.map((function(e,t){return Object(u.jsx)(W.a,{label:e.name,style:{margin:"0 5px 5px 0"}},t)}))]})]})}},{index:1,name:"Portfolio",Component:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(L,{style:{padding:"1rem 1.5rem"},children:[Object(u.jsx)(O.a,{variant:"h6",children:"Experience"}),Object(u.jsx)("br",{}),Object(u.jsxs)(_.a,{container:!0,spacing:3,children:[Object(u.jsx)(_.a,{item:!0,xs:12,sm:6,md:6,children:Object(u.jsxs)(A.a,{variant:"outlined",children:[Object(u.jsx)(oe.a,{component:"img",height:"240",image:"https://firebasestorage.googleapis.com/v0/b/portfolio-846f8.appspot.com/o/Delinternet-Hub.png?alt=media&token=179c783d-2767-4209-9c93-10ae92e9eda4",alt:"green iguana"}),Object(u.jsxs)(de.a,{children:[Object(u.jsx)(O.a,{gutterBottom:!0,variant:"h6",children:"Delinternet Unpaid System"}),Object(u.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["This is a system for full unpaid invoices management. Was built using reactjs with antjs, and php with laravel in backend.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"In this project I was the owner, handling full backend and frontend."]}),Object(u.jsx)("br",{}),Object(u.jsxs)("ul",{style:{paddingLeft:"1rem"},children:[Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"UI Design - Adobe XD"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Components Design"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Event Driven Comunication"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"API Design"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Proccess Automatation"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"ACL"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Service Integration"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Etc."})})]}),Object(u.jsx)("br",{}),Object(u.jsx)(W.a,{label:"Reactjs",style:{margin:"0 5px 5px 0",padding:"2px"}}),Object(u.jsx)(W.a,{label:"Redux",style:{margin:"0 5px 5px 0",padding:"2px"}}),Object(u.jsx)(W.a,{label:"Generator",style:{margin:"0 5px 5px 0",padding:"2px"}}),Object(u.jsx)(W.a,{label:"Nodejs",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"SQL",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Anviz Protocol",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Sequelize",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Socket.io",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Redis",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Docker",style:{margin:"0 5px 5px 0",padding:"3px"}})]})]})}),Object(u.jsx)(_.a,{item:!0,xs:12,sm:6,md:6,children:Object(u.jsxs)(A.a,{variant:"outlined",children:[Object(u.jsx)(oe.a,{component:"img",height:"240",image:"https://firebasestorage.googleapis.com/v0/b/portfolio-846f8.appspot.com/o/Delinternet-Hub.png?alt=media&token=179c783d-2767-4209-9c93-10ae92e9eda4",alt:"green iguana"}),Object(u.jsxs)(de.a,{children:[Object(u.jsx)(O.a,{gutterBottom:!0,variant:"h6",children:"Delinternet Hub"}),Object(u.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["This project started as a single HRMS system but ends like a hub, where the company host all its services: HRMS, Unpaid System, Website Management System, Access Control Management.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"In this set of project I participed as Frontend Owner, and in Backend I collaborate in the implementation of some key algorithms that represent very important bussiness logic inside the company and the API implementation."]}),Object(u.jsx)("br",{}),Object(u.jsxs)("ul",{style:{paddingLeft:"1rem"},children:[Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"UI Design - Adobe XD"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Components Design"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Generator CLI"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Event Driven Comunication"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Custom Nodejs API to cuminicate with low level Anviz Devices Protocol"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Service for handle client notifications queue: Whatsapp, Telegram, Sms, Email."})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"ACL"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Service Integration"})}),Object(u.jsx)("li",{children:Object(u.jsx)(O.a,{children:"Etc."})})]}),Object(u.jsx)("br",{}),Object(u.jsx)(W.a,{label:"Reactjs",style:{margin:"0 5px 5px 0",padding:"2px"}}),Object(u.jsx)(W.a,{label:"Redux",style:{margin:"0 5px 5px 0",padding:"2px"}}),Object(u.jsx)(W.a,{label:"Generator",style:{margin:"0 5px 5px 0",padding:"2px"}}),Object(u.jsx)(W.a,{label:"Nodejs",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"SQL",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Anviz Protocol",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Sequelize",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Socket.io",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Redis",style:{margin:"0 5px 5px 0",padding:"3px"}}),Object(u.jsx)(W.a,{label:"Docker",style:{margin:"0 5px 5px 0",padding:"3px"}})]})]})})]})]})})}},{index:2,name:"Blog",Component:function(){var e=Object(h.a)().palette;return Object(u.jsx)(L,{children:Object(u.jsx)(me.a,{severity:"warning",icon:!1,children:Object(u.jsx)(O.a,{style:{color:e.warning.main},children:"Coming soon"})})})}}],be=i(82),xe=i.n(be),pe=i(83),he=i.n(pe),ue=i(81),ge=i.n(ue),Oe=i.p+"static/media/CV - JOSE ABURTO - FULL STACK DEVELOPER.117d9d7b.jpg",ve=function(e){var t=function(){var e=c.a.useContext(Ie);if(!e)throw new Error("make sure useChangeTheme");return e}(),i=t.mode,n=t.toggleColorMode,r=R(),s=c.a.useState(0),l=Object(a.a)(s,2),j=l[0],b=l[1],x=function(e){return Object(d.a)((function(t){return e.mq.isExtraSmallDevice||e.mq.isSmallDevice||e.mq.isMediumDevice,Object(m.a)({HeaderContainer:{borderRadius:0,borderTop:"none !important",padding:"0 !important"},headerBgContainer:{borderRadius:0,borderTopRightRadius:"0 !important",height:"9rem",background:t.palette.common.black},topActions:{width:"100%",display:"flex",justifyContent:"space-between",padding:"10px"},userInfoContainer:{padding:"0 1.3rem",border:"none !important",borderTop:"none !important"},light:{fontSize:"25px !important",color:t.palette.text.primary},linkedinBtn:{color:"".concat(t.palette.common.white," !important")},themeSwitcher:{padding:"7px !important",border:"1px solid ".concat(Object(y.a)(t.palette.text.primary,.7)," !important")},dark:{fontSize:"25px !important",color:t.palette.text.primary}})}))}({mq:r})(),p=Object(h.a)(),g=Object(u.jsx)(ge.a,{className:x.dark}),f=Object(u.jsx)(xe.a,{className:x.light});return Object(u.jsxs)(o.a,{style:{paddingLeft:r.isExtraSmallDevice?0:r.isSmallDevice?"2.5rem":r.isMediumDevice?"6rem":r.isLargeDevice?"8rem":"20rem",paddingRight:r.isExtraSmallDevice?0:r.isSmallDevice?"2.5rem":r.isMediumDevice?"6rem":r.isLargeDevice?"8rem":"20rem"},children:[Object(u.jsx)(B.a,{position:"static",elevation:0,style:{color:p.palette.text.primary,background:p.palette.background.paper,borderBottom:"".concat(r.isExtraSmallDevice?0:"1px"," solid ").concat(p.palette.divider),borderRight:"".concat(r.isExtraSmallDevice?0:"1px"," solid ").concat(p.palette.divider),borderLeft:"".concat(r.isExtraSmallDevice?0:"1px"," solid ").concat(p.palette.divider),borderTop:"none !important",borderBottomLeftRadius:"".concat(r.isExtraSmallDevice?0:"10px"),borderBottomRightRadius:"".concat(r.isExtraSmallDevice?0:"10px")},children:Object(u.jsxs)(M.a,{variant:"dense",style:{padding:"0.5rem 1rem"},children:[Object(u.jsx)(O.a,{variant:"h6",color:"inherit",sx:{flexGrow:1},children:"Developers"}),Object(u.jsx)(F.a,{onClick:function(){return n()},children:Object(u.jsx)(he.a,{className:"dark"===i?x.light:x.dark})}),"\xa0 \xa0",Object(u.jsx)(F.a,{onClick:function(){return n()},children:"dark"===i?f:g})]})}),r.isExtraSmallDevice?null:Object(u.jsx)("br",{}),Object(u.jsxs)(_.a,{container:!0,spacing:3,children:[null,Object(u.jsxs)(P,{responsive:{xs:12,sm:12,md:12,lg:12},children:[Object(u.jsx)(T,{tabs:je,tabValue:j,onTabChange:function(e,t){b(t),console.log(t)},backgroundImage:"https://media-exp1.licdn.com/dms/image/C4D16AQHE2kPwC5uwAw/profile-displaybackgroundimage-shrink_350_1400/0/1618418698151?e=1639008000&v=beta&t=stAh3fn9DueG9r1g2J7PJQcH7uBB1hM-DboZv-SVYRw",userInfoComponent:Object(u.jsx)(v,{style:{marginTop:"-2rem"},pictureSrc:"https://media-exp1.licdn.com/dms/image/C4D03AQFEvfVLdcIr0A/profile-displayphoto-shrink_800_800/0/1553727303871?e=1639008000&v=beta&t=BBsgkBvEkgE-NDFML98x78d424iR_9C-x6IiZ0f8jBI",username:"Jose Aburto",position:"Full Stack Developer"})}),Object(u.jsx)("br",{}),Object(u.jsxs)(_.a,{container:!0,spacing:3,children:[Object(u.jsx)(_.a,{item:!0,xs:12,sm:12,md:12,lg:9,xl:9,children:je.map((function(e,t){var i=e.index,n=e.Component;return Object(u.jsx)(N,{value:j,index:i,children:Object(u.jsx)(n,{})},t)}))}),Object(u.jsx)(_.a,{item:!0,xs:12,sm:12,md:12,lg:3,xl:3,children:Object(u.jsxs)(L,{children:[Object(u.jsx)("img",{src:Oe,width:"100%",alt:""}),Object(u.jsx)(D.a,{disableElevation:!0,style:{color:p.palette.common.white,width:"100%"},variant:"contained",children:"Download"})]})})]}),Object(u.jsx)("br",{})]})]})]})},fe=(i(108),Object(b.a)((function(e){var t=j();return Object(u.jsx)(o.a,{className:t.root,children:Object(u.jsx)(ve,{})})}))),ye=i(164),De=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,165)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),r(e),c(e)}))},Se=i(66),ke=i(85),Ce=i(86),Ee={profile:ke,layoutConfigs:Ce,themes:Ce.themes},we=function(e){var t=e.children;return Object(u.jsx)(se.Provider,{value:Ee,children:t})},Ie=c.a.createContext({}),Re=function(e){var t=c.a.useState("light"),i=Object(a.a)(t,2),r=i[0],s=i[1],l=le().themes,o=c.a.useMemo((function(){var e="dark"===r?l.dark.palette:l.light.palette;return Object(Se.a)({palette:Object(n.a)({mode:r},e)})}),[r]),d=function(){s("light"===r?"dark":"light")},m=c.a.useMemo((function(){return{toggleColorMode:d,mode:r}}),[r]);return Object(u.jsx)(Ie.Provider,{value:m,children:Object(u.jsx)(ye.a,{theme:o,children:e.children})})};l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(we,{children:Object(u.jsx)(Re,{children:Object(u.jsx)(fe,{})})})}),document.getElementById("root")),De()},85:function(e){e.exports=JSON.parse('{"username":"Jose Aburto","position":"Full Stack Developer","src":"https://media-exp1.licdn.com/dms/image/C4D03AQFEvfVLdcIr0A/profile-displayphoto-shrink_800_800/0/1553727303871?e=1639008000&v=beta&t=BBsgkBvEkgE-NDFML98x78d424iR_9C-x6IiZ0f8jBI","contacts":[{"name":"Linkedin","value":"https://www.linkedin.com/in/jose-aburto-92468a13b/"}],"curriculum":{"about":"3 years of experience in backend and frontend. Passionate about software, fast learning, great ideas, analysis, good availability, good eye for interface design.","skills":[{"name":"Reactjs","level":"high"},{"name":"React Native","level":"medium"},{"name":"Javascript","level":"high"},{"name":"Nodejs","level":"high"},{"name":"Typescript","level":"high"},{"name":"Html5","level":"high"},{"name":"Css/Sass/Less","level":"high"},{"name":"Java","level":"high"},{"name":"Php","level":"medium"},{"name":"Problem Solver","level":"high"},{"name":"Data Structure","level":"high"},{"name":"Algorithms","level":"high"},{"name":"SOLID","level":"high"},{"name":"Design Patterns","level":"high"},{"name":"TDD","level":"high"},{"name":"Microservice","level":"medium"},{"name":"Docker","level":"high"},{"name":"Redis","level":"high"},{"name":"RestFull","level":"high"},{"name":"Web Design","level":"high"},{"name":"Adobe Suite","level":"high"}],"educations":[{"name":"Graphic Design","status":"done","started_at":2015,"center":"UDM, Managua, Nic.","details":"\u2014 Finished"},{"name":"Computer Science","status":"pending","started_at":2017,"center":"UNA, Heredia, CR","details":"\u2014 Pending"},{"name":"Self Learner","status":"continue","started_at":2017,"center":"World Wide Web","details":"\u2014 Continue..."}],"experience":[{"position":"Frontend Developer","at":"Campat","location":"Managua, Nic.","from":"04/2013","to":"04/2013","details":["Design, layout and programming different\\n        websites for different clients from Unite\\n        State"]},{"position":"Junior Web Full Stack","at":"CCSS","location":"Managua, Nic.","from":"06/2015","to":"10/2017","details":["API Desing and implementation with Java ecosystem","Microservice with Spring.","System maintance and documentation.","Web development with Reactjs.","System maintance and documentation."]},{"position":"Full Stack Developer","at":"Delinternet","location":"Tarragona, Spain","from":"04/2019","to":"current","details":["Product Owner.","Junior UX/UI Designer.","Design and implement full backend.","Web development with Reactjs.","Php Legacy sytems support.","System maintance and documentation."]}]},"portfolio":{},"blog":{}}')},86:function(e){e.exports=JSON.parse('{"backgroundSrc":"https://media-exp1.licdn.com/dms/image/C4D16AQHE2kPwC5uwAw/profile-displaybackgroundimage-shrink_350_1400/0/1618418698151?e=1639008000&v=beta&t=stAh3fn9DueG9r1g2J7PJQcH7uBB1hM-DboZv-SVYRw","breakpointRules":{"xs":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"sm":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"md":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"ld":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"xl":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}}},"themes":{"light":{"borderRadius":"15px","palette":{"common":{"black":"#000","white":"#fff"},"primary":{"light":"#42a5f5","main":"#1976d2","dark":"#1565c0","contrastText":"#233044"},"secondary":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"warning":{"light":"#ff9800","main":"#ED6C02","dark":"#e65100","contrastText":"#fff"},"success":{"light":"#4caf50","main":"#2e7d32","dark":"#1b5e20","contrastText":"#fff"},"text":{"primary":"#080808","secondary":"rgb(51, 51, 51)","disabled":"#BFC5D2"},"divider":"#e4e9f2","background":{"paper":"#fff","default":"#F8F9FC"}},"spacing":{"1":"1rem","2":"2rem","3":"3rem","4":"4rem","5":"5rem","6":"6rem","7":"7rem","8":"8rem","9":"9rem","10":"10rem"}},"dark":{"borderRadius":"15px","palette":{"common":{"black":"#000","white":"#fff"},"primary":{"light":"#E9EEFF","main":"#1877F2","dark":"#1732B7","contrastText":"#233044"},"secondary":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"warning":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},"success":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"#FFF","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)"},"divider":"#353B43","background":{"paper":"#161B22","default":"#0D1117"}},"spacing":{"1":"1rem","2":"2rem","3":"3rem","4":"4rem","5":"5rem","6":"6rem","7":"7rem","8":"8rem","9":"9rem","10":"10rem"}}}}')}},[[109,1,2]]]);
//# sourceMappingURL=main.34550554.chunk.js.map