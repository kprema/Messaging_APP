(this.webpackJsonpmessaging=this.webpackJsonpmessaging||[]).push([[0],{19:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(9),l=c.n(n),i=(c(19),c(4)),r=c(3),j=c(5),o=c(2),d=function(e){return{type:"ADD_MSG",data:e}},b=c(0),m=Object(o.b)()((function(e){var t=Object(a.useState)({}),c=Object(i.a)(t,2),s=c[0],n=c[1],l=function(e){n(Object(j.a)(Object(j.a)({},s),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"new-contact d-flex align-items-center",children:[Object(b.jsx)("span",{className:"glyphicon glyphicon-arrow-left"}),Object(b.jsx)("span",{children:"NEW CONTACT"})]}),Object(b.jsx)("div",{className:"profile-avatar"}),Object(b.jsx)("p",{className:"profile",children:"PROFILE"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.dispatch({type:"ADD_CONTACT",data:{data:s}})},className:"createform",children:[Object(b.jsxs)("div",{className:"col-md-6 d-flex align-items-center",children:[Object(b.jsx)("label",{children:Object(b.jsx)("span",{className:"glyphicon glyphicon-user"})}),Object(b.jsx)("input",{name:"firstName",type:"text",placeholder:"First Name",value:s.firstName,onChange:function(e){return l(e)},required:!0})]}),Object(b.jsxs)("div",{className:"col-md-6 d-flex align-items-center",children:[Object(b.jsx)("label",{}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{name:"lastName",type:"text",placeholder:"Last Name",value:s.lastName,onChange:function(e){return l(e)},required:!0})})]}),Object(b.jsxs)("div",{className:"col-md-12 d-flex align-items-center",children:[Object(b.jsx)("label",{children:Object(b.jsx)("span",{className:"glyphicon glyphicon-earphone"})}),Object(b.jsx)("input",{name:"phone",type:"number",placeholder:"Phone Number",value:s.phone,onChange:function(e){return l(e)},required:!0})]}),Object(b.jsxs)("div",{className:"col-md-6 d-flex align-items-center",children:[Object(b.jsx)("label",{children:Object(b.jsx)("span",{className:"glyphicon glyphicon-envelope"})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:s.email,onChange:function(e){return l(e)},required:!0})})]}),Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-secondary save",children:"Submit"}),Object(b.jsx)("button",{type:"reset",className:"btn btn-secondary reset",onClick:function(e){n([{firstName:"",lastName:"",phone:"",email:""}])},children:"Discard"})]})]})]})})),O=Object(o.b)((function(e){return{contacts:e.contacts}}))((function(e){var t=e.contacts,c=e.dispatch;return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&c(function(e){return{type:"POPULATE_CONTACTS",data:e}}(e))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("form",{children:Object(b.jsx)("div",{class:"form-group",children:Object(b.jsxs)("div",{class:"form-group has-feedback",children:[Object(b.jsx)("span",{class:"glyphicon glyphicon-search form-control-feedback"}),Object(b.jsx)("input",{type:"text",className:"form-control search-input",id:"inputValidation",placeholder:"Search"}),Object(b.jsx)("span",{class:"glyphicon glyphicon-plus form-control-feedback"})]})})}),Object(b.jsx)("p",{className:"contact-heading",children:"Contacts"}),Object(b.jsx)("ul",{className:"contact-list",children:t.map((function(t,c){return Object(b.jsxs)("li",{className:"d-flex align-items-center justify-space-around",onClick:e.messaging,children:[Object(b.jsx)("span",{className:"avatar"}),Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("span",{className:"name",children:t.data.firstName}),Object(b.jsx)("span",{className:"phoneNo",children:t.data.phone}),Object(b.jsx)("span",{className:"time",children:"5min"})]}),Object(b.jsx)("span",{className:"call glyphicon glyphicon-earphone"}),Object(b.jsx)("span",{className:"message glyphicon glyphicon-envelope"})]},c)}))})]})})),u=Object(o.b)((function(e){return{msg:e.msg}}))((function(e){var t=e.msg,c=e.dispatch;return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("msg"));e&&c(d(e))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"new-contact d-flex align-items-center",children:[Object(b.jsx)("span",{className:"glyphicon glyphicon-arrow-left"}),Object(b.jsx)("span",{children:"NEW CONTACT"})]}),Object(b.jsx)("ul",{className:"msgItems",children:t.map((function(e){return Object(b.jsxs)("li",{className:"d-flex",children:[Object(b.jsx)("span",{className:"avatar"}),Object(b.jsx)("span",{className:"msg",children:e})]})}))})]})}));var h=Object(o.b)()((function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),s=c[0],n=c[1],l={message:""};return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.dispatch(d({values:s})),n(l)},className:"msg__form",children:[Object(b.jsx)("input",{type:"text",name:"message",value:s.message,onChange:function(e){return function(e){n(Object(j.a)(Object(j.a)({},s),{},Object(r.a)({},e.target.name,e.target.value)))}(e)}}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)("span",{className:"glyphicon glyphicon-send"})})]})})})),p=c(8),g=c(14),x=c(6),f=[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":return localStorage.setItem("contacts",JSON.stringify([].concat(Object(x.a)(e),[t.data]))),[].concat(Object(x.a)(e),[t.data]);case"POPULATE_CONTACTS":return t.data;default:return e}},v=["Hi","How are you"],y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case"ADD_MSG":return localStorage.setItem("msg",JSON.stringify([].concat(Object(x.a)(e),[t.data]))),[].concat(Object(x.a)(e),[t.data.values.message]);default:return e}},C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.c,S=Object(p.d)(Object(p.b)({contacts:N,msg:y}),{},C(Object(p.a)(g.a)));c(25);var T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(b.jsx)(o.a,{store:S,children:Object(b.jsx)("div",{className:"App container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-sm-4 left-panel",children:Object(b.jsx)(O,{messaging:function(){s({msgboxshow:!0})}})}),Object(b.jsx)("div",{className:"col-sm-8 right-panel",children:c?Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{})," ",Object(b.jsx)(h,{})]}):Object(b.jsx)(m,{})})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.615bb5c7.chunk.js.map