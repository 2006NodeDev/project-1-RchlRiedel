(this["webpackJsonpreact-server"]=this["webpackJsonpreact-server"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),l=a(9),c=a.n(l),i=(a(85),a(11)),s=(a(86),a(87),a(25)),u=a(12),m=a(13),p=a(8),f=a.n(p),d=a(14),g=a(67);n="http://lotr-project.lehcar.net";var h=a.n(g).a.create({baseURL:n,headers:{"Content-Type":"application/json"},withCredentials:!0}),b=function(){var e=Object(d.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t,password:a},e.prev=1,e.next=4,h.post("/login",n);case 4:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}(),v=a(149),E=a(153),x=a(154),w=a(155),y=a(166),O=a(4),C=a(157),j=a(158),k=a(156),N=a(47),D=function(e){var t=T(),a=Object(r.useState)(""),n=Object(i.a)(a,2),l=n[0],c=n[1],m=Object(r.useState)(""),p=Object(i.a)(m,2),g=p[0],h=p[1],O=function(){var t=Object(d.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,b(l,g);case 3:n=t.sent,console.log(n),n.userId?(e.changeCurrentUser(n),e.history.push("/user/profile/".concat(n.userId))):(s.b.error("Invalid Credentials! Please try again."),e.history.push("/login"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(v.a,{component:"main",maxWidth:"xs"},o.a.createElement(E.a,null),o.a.createElement("div",{className:t.paper},o.a.createElement(x.a,{component:"h1",variant:"h5"},"Login"),o.a.createElement("form",{autoComplete:"off",onSubmit:O,className:t.form,noValidate:!0},o.a.createElement(w.a,{container:!0,spacing:2},o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:l,onChange:function(e){e.preventDefault(),c(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:g,onChange:function(e){e.preventDefault(),h(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(S,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit}," Login")),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(u.b,{to:"/home",style:{textDecoration:"none"}},o.a.createElement(S,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit}," Cancel")))))))},S=Object(O.a)((function(e){return{root:{color:e.palette.getContrastText(k.a[700]),backgroundColor:"lime[700]","&:hover":{backgroundColor:N.a[900]}}}}))(C.a),T=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:k.a[700],color:"white",fontSize:16},media:{}}})),W=a(159),I=a(160),U=a(161),P=a(71),F=a.n(P),B=a(167),L=a(72),R=Object(j.a)((function(e){return{root:{flexGrow:1,background:N.a[900]},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"Bookman Old Style"}}})),M=function(e){var t=R(),a=o.a.useState(null),n=Object(i.a)(a,2),l=n[0],c=n[1],s=(Boolean(l),function(){c(null)}),m=[];return Object(r.useEffect)((function(){null===e.user&&(m=[]).push(o.a.createElement(u.b,{to:"/login",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Login")),o.a.createElement(u.b,{to:"/register",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Sign Up")),o.a.createElement(u.b,{to:"/home",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Home")))})),e.user?m.push(o.a.createElement(u.b,{to:"/home",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Home")),o.a.createElement(u.b,{to:"/user/profile/".concat(e.user?e.user.userId:"0"),style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"User Profile")),o.a.createElement(u.b,{to:"/user/update/".concat(e.user?e.user.userId:"0"),style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Edit Account Details")),o.a.createElement(u.b,{to:"/logout",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Logout"))):m.push(o.a.createElement(u.b,{to:"/home",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Home")),o.a.createElement(u.b,{to:"/login",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Login")),o.a.createElement(u.b,{to:"/register",style:{textDecoration:"none"}},o.a.createElement(B.a,{onClick:s},"Sign Up"))),o.a.createElement("nav",null,o.a.createElement(W.a,{position:"static",className:t.root},o.a.createElement(I.a,null,o.a.createElement(U.a,{onClick:function(e){c(e.currentTarget)},edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(F.a,null)),o.a.createElement(L.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:s},m),o.a.createElement(x.a,{variant:"h6",className:t.title},"The Fellowship of the Ring Membership"))))},z=function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/users/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),q=a(162),A=a(163),H=a(164),J=Object(j.a)({root:{margin:"auto",minWidth:275,maxWidth:500},media:{height:"auto",width:"100%",margin:"auto"},username:{fontSize:20,fontFamily:"Bookman Old Style"},userInfo:{color:"textSecondary",fontFamily:"Bookman Old Style"}}),V=function(e){var t=J();return o.a.createElement(q.a,{className:t.root},o.a.createElement(A.a,null,o.a.createElement(H.a,{component:"img",className:t.media,alt:"Profile Picture",image:e.user.image}),o.a.createElement(x.a,{className:t.username,gutterBottom:!0},"Username : ",e.user.username),o.a.createElement(x.a,{className:t.userInfo},"Password : ",e.user.password),o.a.createElement(x.a,{className:t.userInfo},"First Name : ",e.user.firstName),o.a.createElement(x.a,{className:t.userInfo},"Last Name : ",e.user.lastName),o.a.createElement(x.a,{className:t.userInfo},"Email : ",e.user.email),o.a.createElement(x.a,{className:t.userInfo},"Role : ",e.user.role)))},G=function(e){var t=Object(r.useState)(null),a=Object(i.a)(t,2),n=a[0],l=a[1],c=Object(m.e)().userId;return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(c);case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n&&n.userId===+c||e()})),n?o.a.createElement(V,{user:n}):o.a.createElement("div",null,o.a.createElement("h3",null,"User Not Found"))},$=a(165),K=Object(O.a)((function(e){return{root:{color:e.palette.getContrastText(k.a[700]),backgroundColor:"lime[700]","&:hover":{backgroundColor:N.a[900]}}}}))(C.a),Q=Object(j.a)((function(e){return{root:{margin:"auto",maxWidth:600,justifyContent:"center"},text:{fontFamily:"Bookman Old Style",color:"black"},submit:{margin:e.spacing(1),backgroundColor:k.a[700],color:"white",fontFamily:"Bookman Old Style",fontSize:16}}})),X=function(e){var t=Q();return o.a.createElement(q.a,{className:t.root},o.a.createElement(A.a,null,o.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.text},"Become part of an expedition to save the world!"),o.a.createElement(x.a,{variant:"body1",component:"p",className:t.text},"Join the Fellowship of the Ring, a selective, diverse team working to overthrow the Dark Lord as they travel across the legendary, luscious landscape of Middle-Earth to earn their places in the history books. There\u2019s only an 11% chance of dying!")),o.a.createElement($.a,{className:t.root},o.a.createElement(u.b,{to:"/register",style:{textDecoration:"none"}},o.a.createElement(K,{variant:"contained",className:t.submit},"Register Now!")),"or  ",o.a.createElement(u.b,{to:"/login",className:t.text},"Login")))},Y=function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,h.post("/register",t);case 4:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){var t=ee(),a=Object(r.useState)(""),n=Object(i.a)(a,2),l=n[0],c=n[1],m=Object(r.useState)(""),p=Object(i.a)(m,2),g=p[0],h=p[1],b=Object(r.useState)(""),O=Object(i.a)(b,2),C=O[0],j=O[1],k=Object(r.useState)(""),N=Object(i.a)(k,2),D=N[0],S=N[1],T=Object(r.useState)(""),W=Object(i.a)(T,2),I=W[0],U=W[1],P=Object(r.useState)(""),F=Object(i.a)(P,2),B=F[0],L=F[1],R=Object(r.useState)(null),M=Object(i.a)(R,2),z=M[0],q=M[1],A=function(){var t=Object(d.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),g===C){t.next=5;break}s.b.error("Passwords Do Not Match!"),t.next=11;break;case 5:return n={userId:0,username:l,password:g,firstName:D,lastName:I,email:B,role:"Member",image:z},t.next=8,Y(n);case 8:r=t.sent,e.changeCurrentUser(r),e.history.push("/user/profile/".concat(r.userId));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(v.a,{component:"main",maxWidth:"xs"},o.a.createElement(E.a,null),o.a.createElement("div",{className:t.paper},o.a.createElement(x.a,{component:"h1",variant:"h5"},"Register"),o.a.createElement("form",{autoComplete:"off",onSubmit:A,className:t.form,noValidate:!0},o.a.createElement(w.a,{container:!0,spacing:2},o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:l,onChange:function(e){e.preventDefault(),c(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:g,onChange:function(e){e.preventDefault(),h(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"confirm-password",label:"Confirm Password",type:"password",id:"confirm-password",value:C,onChange:function(e){e.preventDefault(),j(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"outlined",fullWidth:!0,id:"email",label:"Email",name:"email",value:B,onChange:function(e){e.preventDefault(),L(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",fullWidth:!0,id:"firstName",label:"First Name",name:"firstName",value:D,onChange:function(e){e.preventDefault(),S(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",value:I,onChange:function(e){e.preventDefault(),U(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement("label",{htmlFor:"file"},"Profile Picture")," ",o.a.createElement("br",null),o.a.createElement("input",{type:"file",name:"file",accept:"image/*",onChange:function(e){e.preventDefault();var t=e.currentTarget.files[0];if(t){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){console.log(a.result),q(a.result)}}}}),o.a.createElement("img",{src:z,width:"100%"})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(_,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit}," Register")),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(u.b,{to:"/home",style:{textDecoration:"none"}},o.a.createElement(_,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit}," Cancel")))))))},_=Object(O.a)((function(e){return{root:{color:e.palette.getContrastText(k.a[700]),backgroundColor:"lime[700]","&:hover":{backgroundColor:N.a[900]}}}}))(C.a),ee=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:k.a[700],color:"white",fontFamily:"Bookman Old Style",fontSize:16},media:{}}})),te=function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,h.patch("/users/update/".concat(t.userId),t);case 4:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=re(),a=Object(m.e)().userId,n=Object(r.useState)(""),l=Object(i.a)(n,2),c=l[0],p=l[1],g=Object(r.useState)(""),h=Object(i.a)(g,2),b=h[0],O=h[1],C=Object(r.useState)(""),j=Object(i.a)(C,2),k=j[0],N=j[1],D=Object(r.useState)(""),S=Object(i.a)(D,2),T=S[0],W=S[1],I=Object(r.useState)(""),U=Object(i.a)(I,2),P=U[0],F=U[1],B=Object(r.useState)(""),L=Object(i.a)(B,2),R=L[0],M=L[1],z=Object(r.useState)(null),q=Object(i.a)(z,2),A=q[0],H=q[1],J=function(){var t=Object(d.a)(f.a.mark((function t(n){var r,o,l,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),b===k){t.next=5;break}s.b.error("Passwords Do Not Match!"),t.next=23;break;case 5:if(!c||!e.user.image||A){t.next=9;break}s.b.error("Please re-upload image so that file can be updated to match username!"),t.next=23;break;case 9:if(c){t.next=18;break}return c=e.user.username,r={userId:a,username:c,password:b,firstName:T,lastName:P,email:R,role:"Member",image:A},t.next=14,te(r);case 14:o=t.sent,e.history.push("/user/profile/".concat(o.userId)),t.next=23;break;case 18:return l={userId:a,username:c,password:b,firstName:T,lastName:P,email:R,role:"Member",image:A},t.next=21,te(l);case 21:i=t.sent,e.history.push("/user/profile/".concat(i.userId));case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(v.a,{component:"main",maxWidth:"xs"},o.a.createElement(E.a,null),o.a.createElement("div",{className:t.paper},o.a.createElement(x.a,{component:"h1",variant:"h5"},"Update User Profile"),o.a.createElement("form",{autoComplete:"off",onSubmit:J,className:t.form,noValidate:!0},o.a.createElement(w.a,{container:!0,spacing:2},o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"username",label:"New Username",name:"username",value:c,onChange:function(e){e.preventDefault(),p(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"New Password",type:"password",id:"password",value:b,onChange:function(e){e.preventDefault(),O(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"confirm-password",label:"Confirm New Password",type:"password",id:"confirm-password",value:k,onChange:function(e){e.preventDefault(),N(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement(y.a,{variant:"outlined",fullWidth:!0,id:"email",label:"Change Email",name:"email",value:R,onChange:function(e){e.preventDefault(),""!==e.currentTarget.value&&M(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",fullWidth:!0,id:"firstName",label:"Change First Name",name:"firstName",value:T,onChange:function(e){e.preventDefault(),""!==e.currentTarget.value&&W(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(y.a,{variant:"outlined",fullWidth:!0,id:"lastName",label:"Change Last Name",name:"lastName",value:P,onChange:function(e){e.preventDefault(),""!==e.currentTarget.value&&F(e.currentTarget.value)}})),o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement("label",{htmlFor:"file"},"Change Profile Picture")," ",o.a.createElement("br",null),o.a.createElement("input",{type:"file",name:"file",accept:"image/*",onChange:function(e){e.preventDefault();var t=e.currentTarget.files[0],a=new FileReader;a.readAsDataURL(t),a.onload=function(){console.log(a.result),H(a.result)}}}),o.a.createElement("img",{src:A,width:"100%"})),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(ne,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit}," Update")),o.a.createElement(w.a,{item:!0,xs:12,sm:6},o.a.createElement(u.b,{to:"/home",style:{textDecoration:"none"}},o.a.createElement(ne,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit}," Cancel")))))))},ne=Object(O.a)((function(e){return{root:{color:e.palette.getContrastText(k.a[700]),backgroundColor:"lime[700]","&:hover":{backgroundColor:N.a[900]}}}}))(C.a),re=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:k.a[700],color:"white",fontFamily:"Bookman Old Style",fontSize:16},media:{}}})),oe=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.delete("/logout");case 3:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),le=function(e){var t=ce(),a=function(){var t=Object(d.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,oe();case 3:n=t.sent,console.log(n),e.changeCurrentUser(n),e.history.push("/home");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(v.a,{component:"main",maxWidth:"xs"},o.a.createElement(E.a,null),o.a.createElement("div",{className:t.paper},o.a.createElement(x.a,{component:"h1",variant:"h5"},"Are you sure you want to log out?"),o.a.createElement(w.a,{item:!0,xs:12},o.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:a}," Logout"))))},ce=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:"green",color:"white",fontSize:16}}}));var ie=function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,null,o.a.createElement(M,{user:a}),o.a.createElement(m.a,{path:"/home",component:X}),o.a.createElement(m.a,{path:"/login",render:function(e){return o.a.createElement(D,Object.assign({changeCurrentUser:n},e))}}),o.a.createElement(m.a,{path:"/user/profile/:userId",component:G}),o.a.createElement(m.a,{path:"/user/update/:userId",render:function(e){return o.a.createElement(ae,Object.assign({user:a},e))}}),o.a.createElement(m.a,{path:"/register",render:function(e){return o.a.createElement(Z,Object.assign({changeCurrentUser:n},e))}}),o.a.createElement(m.a,{path:"/logout",render:function(e){return o.a.createElement(le,Object.assign({changeCurrentUser:n},e))}}),o.a.createElement("br",null)),o.a.createElement(s.a,{position:"bottom-right"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(113)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.0fc1991f.chunk.js.map