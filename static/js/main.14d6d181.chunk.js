(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{106:function(e,t,i){},107:function(e,t,i){"use strict";i.r(t),i.d(t,"ColorModeContext",(function(){return Se}));var a=i(21),n=i(13),r=i(0),s=i.n(r),c=i(74),o=i.n(c),l=i(138),d=i(140),m=i(132),u=Object(d.a)((function(e){return Object(m.a)({root:{overflow:"auto",height:"100%",backgroundColor:e.palette.background.default}})})),b=i(139),h=i(146),p=i(144),j=i(38),x=i(1),g=function(e){var t=Object(j.a)();return Object(x.jsx)(h.a,{style:Object(a.a)({padding:"2px",borderRadius:"100%",border:"2px solid ".concat((null===e||void 0===e?void 0:e.borderColor)||t.palette.primary.main)},null===e||void 0===e?void 0:e.style),children:Object(x.jsx)(p.a,{alt:"Remy Sharp",src:(null===e||void 0===e?void 0:e.src)||"",sx:{width:(null===e||void 0===e?void 0:e.size)||"7rem",height:(null===e||void 0===e?void 0:e.size)||"7rem"}})})},f=i(147),v=function(e){var t=Object(j.a)();return Object(x.jsxs)("div",{style:Object(a.a)({display:"flex",alignItems:"center"},null===e||void 0===e?void 0:e.style),children:[Object(x.jsx)(g,{src:(null===e||void 0===e?void 0:e.pictureSrc)||""}),Object(x.jsxs)("div",{style:{marginLeft:"0.7rem"},children:[Object(x.jsx)("br",{}),Object(x.jsx)(f.a,{variant:"subtitle2",style:{fontSize:t.spacing(3)},children:(null===e||void 0===e?void 0:e.username)||""}),Object(x.jsx)(f.a,{variant:"subtitle1",style:{fontSize:t.spacing(2)},children:(null===e||void 0===e?void 0:e.position)||""})]})]})},O=i(137),y=i(133),S=i(149),D=i(142),C=i(150),k=i(78),E=i.n(k),w=i(77),R=i.n(w),I=i(136),L=i(35),T=i.n(L),A={EXTRA_SMALL_DEVICES:T()({maxWidth:600}),SMALL_DEVICES:T()({minWidth:600.98,maxWidth:900}),MEDIUM_DEVICES:T()({minWidth:900.98,maxWidth:1200}),LARGE_DEVICES:T()({minWidth:1200.98,maxWidth:1536}),EXTRA_LARGE_DEVICES:T()({minWidth:1536.98})},F=function(){var e=Object(I.a)(A.EXTRA_SMALL_DEVICES),t=Object(I.a)(A.SMALL_DEVICES),i=Object(I.a)(A.MEDIUM_DEVICES),a=Object(I.a)(A.LARGE_DEVICES),n=Object(I.a)(A.EXTRA_LARGE_DEVICES);return{isExtraSmallDevice:e,isSmallDevice:t,isMediumDevice:i,isLargeDevice:a,isExtraLargeDevice:n,getScreen:function(){return e?"xs":t?"sm":a?"ld":n?"xl":"md"}}},M=i(148),B=function(e){var t,i=e.children,a=e.style,n=e.className,r=(Object(j.a)(),F()),s=(t={mq:r},Object(d.a)((function(e){return Object(m.a)({root:{padding:"1rem",borderRadius:"".concat(t.mq.isExtraSmallDevice?0:e.spacing(1)," !important"),borderLeftWidth:"".concat(t.mq.isExtraSmallDevice?0:"1px"," !important"),borderRightWidth:"".concat(t.mq.isExtraSmallDevice?0:"1px"," !important")}})})))();return Object(x.jsx)(M.a,{variant:"outlined",className:"".concat(s.root," ").concat(n),style:a,children:i})};var _=function(e){var t=F(),i=function(e){return Object(d.a)((function(t){return Object(m.a)({HeaderContainer:{borderTop:"none !important",borderTopRightRadius:"".concat(0," !important"),borderTopLeftRadius:"".concat(0," !important"),borderBottomRightRadius:"".concat(e.mq.isExtraSmallDevice?0:t.spacing(1)," !important"),borderBottomLeftRadius:"".concat(e.mq.isExtraSmallDevice?0:t.spacing(1)," !important"),padding:"0 !important"},headerBgContainer:{height:"9rem",background:t.palette.common.black,backgroundImage:"url(".concat(e.src,")")},topActions:{width:"100%",display:"flex",justifyContent:"space-between",padding:"10px"},userInfoContainer:{padding:"0 1.3rem",border:"none !important",borderTop:"none !important",borderTopRightRadius:"".concat(0," !important"),borderTopLeftRadius:"".concat(0," !important"),borderBottomRightRadius:"".concat(e.mq.isExtraSmallDevice?0:t.spacing(1)," !important"),borderBottomLeftRadius:"".concat(e.mq.isExtraSmallDevice?0:t.spacing(1)," !important")},light:{color:t.palette.common.white},themeSwitcher:{backgroundColor:"".concat(Object(y.a)(t.palette.primary.light,.3)," !important")},dark:{color:t.palette.common.white}})}))}({src:e.backgroundImage,mq:t})(),n=function(){var e=s.a.useContext(Se);if(!e)throw new Error("make sure useChangeTheme");return e}(),r=n.mode,c=n.toggleColorMode,o=Object(x.jsx)(R.a,{className:i.dark}),l=Object(x.jsx)(E.a,{className:i.light});return Object(x.jsxs)(B,{className:i.HeaderContainer,children:[Object(x.jsx)("div",{className:i.headerBgContainer,children:Object(x.jsxs)("div",{className:i.topActions,children:[Object(x.jsx)("span",{}),Object(x.jsx)(S.a,{className:i.themeSwitcher,onClick:function(){return c()},children:"dark"===r?l:o})]})}),Object(x.jsxs)("div",{className:i.userInfoContainer,children:[null===e||void 0===e?void 0:e.userInfoComponent,Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{children:Object(x.jsx)(D.a,{scrollButtons:!0,variant:"scrollable",allowScrollButtonsMobile:!0,value:e.tabValue,onChange:e.onTabChange,"aria-label":"scrollable force tabs example",children:e.tabs.map((function(e,t){var i=e.index,n=e.name;return Object(x.jsx)(C.a,Object(a.a)({label:n},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(i)),t)}))})})]})]})},q=i(145),N=i(155),P=function(e){return Object(x.jsx)(q.a,Object(a.a)(Object(a.a)({item:!0,xs:10},null===e||void 0===e?void 0:e.responsive),{},{children:e.children}))},V=function(e){var t=e.children;return Object(x.jsx)(q.a,{item:!0,xs:3,children:t})},W=i(84),J=i.n(W),z=function(e){var t=e.children,i=e.value,a=e.index;return Object(x.jsx)("div",{role:"tabpanel",hidden:i!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a),children:i===a&&t})},H=i(83),Q=i.n(H),G=i(79),U=G.webLayoutConfigurations.themes,X=i(53),Z=i.n(X),Y=i(54),K=i.n(Y),$=i(52),ee=i.n($),te=i(80),ie=i.n(te),ae=i(151),ne=i(152),re=i(143),se=i(153),ce=i(154),oe=function(e){var t=Object(j.a)().palette,i=t.primary.light,a=ee.a;return"done"===e.status?(i=t.success.light,a=Z.a):"pending"===e.status&&(i=t.warning.light,a=K.a),Object(x.jsx)(S.a,{style:{background:Object(y.a)(i,.2)},children:Object(x.jsx)(a,{style:{color:i}})})},le=i(82),de=i.n(le),me=i(81),ue=i.n(me),be=function(e){return Object(x.jsx)(ae.a,{sx:{width:"100%",bgcolor:"background.paper"},children:e.children})},he=function(e){var t=Object(j.a)().palette.text.primary;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(re.a,{alignItems:"flex-start",style:{width:"100%"},children:[e.hideIcon?null:Object(x.jsx)(se.a,{children:Object(x.jsx)(oe,{status:e.status})}),Object(x.jsx)(ce.a,{secondary:Object(x.jsxs)("div",{children:[Object(x.jsx)(f.a,{variant:"subtitle2",style:{fontSize:"16px",color:t},children:e.title}),Object(x.jsxs)(l.a,{style:{display:"flex"},children:[Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(ue.a,{style:{fontSize:"15px"}}),"\xa0",Object(x.jsx)(f.a,{variant:"body1",style:{fontSize:"14px"},children:e.dateInfo})]}),"\xa0 \xa0\xa0",Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(x.jsx)(de.a,{style:{fontSize:"15px"}}),"\xa0",Object(x.jsx)(f.a,{variant:"body1",style:{fontSize:"14px"},children:e.location})]})]}),e.description]})})]}),ie.a.has(e,"hideDivider")?e.hideDivider?null:Object(x.jsx)(ne.a,{variant:"fullWidth",component:"li"}):null]})},pe=[{index:0,name:"Curriculum",Component:function(){var e=Object(j.a)().palette,t=G.curriculum;e.text.primary;return Object(x.jsxs)(B,{style:{padding:"1rem 1.5rem"},children:[Object(x.jsx)(f.a,{variant:"h6",children:"About me"}),Object(x.jsx)("div",{style:{height:"0.9rem"}}),Object(x.jsx)(f.a,{variant:"body1",children:t.about}),Object(x.jsx)("br",{}),Object(x.jsx)(f.a,{variant:"h6",children:"Education"}),Object(x.jsx)(be,{children:t.educations.map((function(e,i){return Object(x.jsx)(he,{status:e.status,title:e.name,dateInfo:e.started_at,location:e.center,description:Object(x.jsx)("span",{children:e.details}),hideDivider:i===t.educations.length-1})}))})]})}},{index:1,name:"Portfolio",Component:function(){return Object(x.jsx)(x.Fragment,{children:"PortfolioView"})}},{index:2,name:"Blog",Component:function(){return Object(x.jsx)(x.Fragment,{children:"BlogView"})}}],je=s.a.createContext({}),xe=function(e){var t=function(){var e=s.a.useContext(je);if(!e)throw new Error("useTheme must be inside ThemeContext");return e}().changeTheme,i=F(),a=s.a.useState(0),r=Object(n.a)(a,2),c=r[0],o=r[1],d=i.isExtraSmallDevice||i.isSmallDevice||i.isMediumDevice;return Object(x.jsx)(l.a,{style:{paddingLeft:i.isExtraSmallDevice?0:i.isSmallDevice?"2.5rem":i.isMediumDevice?"5rem":"10rem",paddingRight:i.isExtraSmallDevice?0:i.isSmallDevice?"2.5rem":i.isMediumDevice?"5rem":"10rem"},children:Object(x.jsxs)(q.a,{container:!0,spacing:3,children:[d?null:Object(x.jsx)(V,{children:Object(x.jsxs)(l.a,{style:{padding:"1rem 0"},children:[Object(x.jsxs)(N.a,{variant:"outlined",disableElevation:!0,style:{width:"100%"},children:[Object(x.jsx)(Q.a,{style:{fontSize:"1rem"}}),"\xa0 Linkedin"]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),["Profile","Feed"].map((function(e,i){return Object(x.jsxs)(N.a,{variant:"text",style:{width:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center"},onClick:function(){t()},children:[Object(x.jsx)(J.a,{}),e]},i)}))]})}),Object(x.jsxs)(P,{responsive:{xs:12,sm:12,md:12,lg:9},children:[Object(x.jsx)(_,{tabs:pe,tabValue:c,onTabChange:function(e,t){o(t),console.log(t)},backgroundImage:"https://media-exp1.licdn.com/dms/image/C4D16AQHE2kPwC5uwAw/profile-displaybackgroundimage-shrink_350_1400/0/1618418698151?e=1639008000&v=beta&t=stAh3fn9DueG9r1g2J7PJQcH7uBB1hM-DboZv-SVYRw",userInfoComponent:Object(x.jsx)(v,{style:{marginTop:"-2rem"},pictureSrc:"https://media-exp1.licdn.com/dms/image/C4D03AQFEvfVLdcIr0A/profile-displayphoto-shrink_800_800/0/1553727303871?e=1639008000&v=beta&t=BBsgkBvEkgE-NDFML98x78d424iR_9C-x6IiZ0f8jBI",username:"Jose Aburto",position:"Full Stack Developer"})}),Object(x.jsx)("br",{}),Object(x.jsxs)(q.a,{container:!0,spacing:3,children:[Object(x.jsx)(q.a,{item:!0,xl:9,children:pe.map((function(e,t){var i=e.index,a=e.Component;return Object(x.jsx)(z,{value:c,index:i,children:Object(x.jsx)(a,{})},t)}))}),Object(x.jsxs)(q.a,{item:!0,xl:3,children:[Object(x.jsx)(B,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque numquam magnam dolorum cumque dicta tempore quae, ipsum assumenda, quisquam voluptatem perferendis ipsam quibusdam ad alias aliquam! Distinctio, voluptas repellendus."}),Object(x.jsx)("br",{}),Object(x.jsx)(B,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque numquam magnam dolorum cumque dicta tempore quae, ipsum assumenda, quisquam voluptatem perferendis ipsam quibusdam ad alias aliquam! Distinctio, voluptas repellendus."})]})]})]})]})})},ge=(i(106),Object(b.a)((function(e){var t=u();return Object(x.jsx)(l.a,{className:t.root,children:Object(x.jsx)(xe,{})})}))),fe=i(156),ve=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,157)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),r(e),s(e)}))},Oe=i(69),ye=U,Se=s.a.createContext({}),De=function(e){var t=s.a.useState("dark"),i=Object(n.a)(t,2),r=i[0],c=i[1],o=s.a.useMemo((function(){var e="dark"===r?ye.dark.palette:ye.light.palette;return Object(Oe.a)({palette:Object(a.a)({mode:r},e)})}),[r]),l=function(){c("light"===r?"dark":"light")},d=s.a.useMemo((function(){return{toggleColorMode:l,mode:r}}),[r]);return Object(x.jsx)(Se.Provider,{value:d,children:Object(x.jsx)(fe.a,{theme:o,children:e.children})})};o.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(De,{children:Object(x.jsx)(ge,{})})}),document.getElementById("root")),ve()},79:function(e){e.exports=JSON.parse('{"username":"Jose Aburto","position":"Full Stack Developer","src":"https://media-exp1.licdn.com/dms/image/C4D03AQFEvfVLdcIr0A/profile-displayphoto-shrink_800_800/0/1553727303871?e=1639008000&v=beta&t=BBsgkBvEkgE-NDFML98x78d424iR_9C-x6IiZ0f8jBI","contacts":[{"name":"Linkedin","value":"https://www.linkedin.com/in/jose-aburto-92468a13b/"}],"curriculum":{"about":"3 years of experience in backend and frontend. Passionate about software, fast learning, great ideas, analysis, good availability, good eye for interface design.","skills":[{"name":"Reactjs","level":"high"},{"name":"React Native","level":"medium"},{"name":"Javascript","level":"high"},{"name":"Nodejs","level":"high"},{"name":"Typescript","level":"high"},{"name":"Html5","level":"high"},{"name":"Css/Sass/Less","level":"high"},{"name":"Java","level":"high"},{"name":"Php","level":"medium"},{"name":"Problem Solver","level":"high"},{"name":"Data Structure","level":"high"},{"name":"Algorithms","level":"high"},{"name":"SOLID","level":"high"},{"name":"Design Patterns","level":"high"},{"name":"TDD","level":"high"},{"name":"Microservice","level":"medium"},{"name":"Docker","level":"high"},{"name":"Redis","level":"high"},{"name":"RestFull","level":"high"},{"name":"Web Design","level":"high"},{"name":"Adobe Suite","level":"high"}],"educations":[{"name":"Graphic Design","status":"done","started_at":2015,"center":"UDM, Managua, Nic.","details":"\u2014 Finished"},{"name":"Computer Science","status":"pending","started_at":2017,"center":"UNA, Heredia, CR","details":"\u2014 Pending"},{"name":"Self Learner","status":"continue","started_at":2017,"center":"World Wide Web","details":"\u2014 Continue..."}],"experience":[{"position":"Frontend Developer","at":"Campat","location":"Managua, Nic.","from":"04/2013","to":"04/2013","details":["Design, layout and programming different\\n        websites for different clients from Unite\\n        State"]},{"position":"Junior Web Full Stack","at":"CCSS","location":"Managua, Nic.","from":"06/2015","to":"10/2017","details":["API Desing and implementation with Java ecosystem","Microservice with Spring.","System maintance and documentation.","Web development with Reactjs.","System maintance and documentation."]},{"position":"Full Stack Developer","at":"Delinternet","location":"Tarragona, Spain","from":"04/2019","to":"current","details":["Product Owner.","Junior UX/UI Designer.","Design and implement full backend.","Web development with Reactjs.","Php Legacy sytems support.","System maintance and documentation."]}]},"portfolio":{},"blog":{},"webLayoutConfigurations":{"backgroundSrc":"https://media-exp1.licdn.com/dms/image/C4D16AQHE2kPwC5uwAw/profile-displaybackgroundimage-shrink_350_1400/0/1618418698151?e=1639008000&v=beta&t=stAh3fn9DueG9r1g2J7PJQcH7uBB1hM-DboZv-SVYRw","breakpointRules":{"xs":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"sm":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"md":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"ld":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}},"xl":{"aside":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}},"main":{"visible":true,"responsive":{"xs":2,"sm":12,"md":12,"lg":9,"xl":6}}}},"themes":{"light":{"borderRadius":"15px","palette":{"common":{"black":"#000","white":"#fff"},"primary":{"light":"#42a5f5","main":"#1976d2","dark":"#1565c0","contrastText":"#233044"},"secondary":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"warning":{"light":"#ff9800","main":"#ED6C02","dark":"#e65100","contrastText":"#fff"},"success":{"light":"#4caf50","main":"#2e7d32","dark":"#1b5e20","contrastText":"#fff"},"text":{"primary":"#080808","secondary":"rgb(51, 51, 51)","disabled":"#BFC5D2"},"divider":"#e4e9f2","background":{"paper":"#fff","default":"#F8F9FC"}},"spacing":{"1":"1rem","2":"2rem","3":"3rem","4":"4rem","5":"5rem","6":"6rem","7":"7rem","8":"8rem","9":"9rem","10":"10rem"}},"dark":{"borderRadius":"15px","palette":{"common":{"black":"#000","white":"#fff"},"primary":{"light":"#E9EEFF","main":"#1877F2","dark":"#1732B7","contrastText":"#233044"},"secondary":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"warning":{"light":"#ff4081","main":"#f50057","dark":"#c51162","contrastText":"#fff"},"success":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"#FFF","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)"},"divider":"#353B43","background":{"paper":"#161B22","default":"#0D1117"}},"spacing":{"1":"1rem","2":"2rem","3":"3rem","4":"4rem","5":"5rem","6":"6rem","7":"7rem","8":"8rem","9":"9rem","10":"10rem"}}}}}')}},[[107,1,2]]]);
//# sourceMappingURL=main.14d6d181.chunk.js.map