(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={list:"ContactList_list__ieSaV",text:"ContactList_text__1iRSe",button:"ContactList_button__1vJEs"}},22:function(e,t,n){},3:function(e,t,n){e.exports={container:"Form_container__2fO_9",label:"Form_label__LXt-a",button:"Form_button__1nV8z",ioIosPhonePortrait:"Form_ioIosPhonePortrait__3snUn",spanName:"Form_spanName__3mOO8",input:"Form_input__24WeW"}},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),o=n(12),s=n.n(o),i=(n(21),n(22),n(15)),l=n(5),u=n(4),b=n.n(u),m=n(13),j=n(3),h=n.n(j);function d(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],d=b.a.generate(),O=b.a.generate(),f=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":j(a)}},_=function(){o(""),j("")};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({name:r,number:u}),_()},children:[Object(a.jsxs)("div",{className:h.a.container,children:[Object(a.jsxs)("label",{htmlFor:d,className:h.a.label,children:["Name ",Object(a.jsx)("span",{className:h.a.spanName,children:"name"})]}),Object(a.jsx)("input",{type:"text",name:"name",id:d,value:r,onChange:f,className:h.a.input,placeholder:"Enter name",autoComplete:"Off"})]}),Object(a.jsxs)("div",{className:h.a.container,children:[Object(a.jsxs)("label",{htmlFor:O,className:h.a.label,children:["Number",Object(a.jsx)("span",{className:h.a.ioIosPhonePortrait,children:Object(a.jsx)(m.a,{})})]}),Object(a.jsx)("input",{type:"tel",name:"number",id:O,value:u,onChange:f,className:h.a.input,placeholder:"Enter number"})]}),Object(a.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})})}var O=n(14),f=n(7),_=n.n(f);function p(e){var t=e.value,n=e.onChange,c=b.a.generate();return Object(a.jsxs)("div",{className:_.a.container,children:[Object(a.jsxs)("label",{htmlFor:c,className:_.a.label,children:["Find contacts of name",Object(a.jsx)("span",{className:_.a.fiSearch,children:Object(a.jsx)(O.a,{})})]}),Object(a.jsx)("input",{type:"text",value:t,onChange:n,id:c,className:_.a.input})]})}var x=n(10),v=n.n(x);function N(e){var t=e.contacts,n=e.onDeleteContact;return Object(a.jsx)("ul",{children:t.map((function(e){var t=e.name,c=e.number,r=e.id;return Object(a.jsxs)("li",{className:v.a.list,children:[Object(a.jsxs)("p",{className:v.a.text,children:[t," : ",c]}),Object(a.jsx)("button",{className:v.a.button,type:"button",onClick:function(){return n(r)},children:"delete"})]},r)}))})}n(31);function g(){var e=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:""})),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),s=Object(l.a)(o,2),u=s[0],m=s[1];return Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))})),Object(a.jsxs)("div",{style:{marginLeft:"16px"},children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(d,{onSubmit:function(e){if(n.some((function(t){return t.name===e.name})))alert("".concat(e.name," is alreadi in contacts"));else if(""!==e.name){var t={id:b.a.generate(),name:e.name,number:e.number};r((function(e){return[].concat(Object(i.a)(e),[t])}))}else alert("Enter  name please")}}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(p,{value:u,onChange:function(e){m(e.target.value)}}),Object(a.jsx)(N,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){r(n.filter((function(t){return t.id!==e})))}})]})}s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Filter_container__2tA2P",label:"Filter_label__2_W1k",fiSearch:"Filter_fiSearch__17-1l",input:"Filter_input__3jfth"}}},[[32,1,2]]]);
//# sourceMappingURL=main.6ec2d1ba.chunk.js.map