(this["webpackJsonpgoit-react-hw-04-feedback"]=this["webpackJsonpgoit-react-hw-04-feedback"]||[]).push([[0],{11:function(t,e,s){},13:function(t,e,s){t.exports={feedback:"Feedback_feedback__3-BXU"}},18:function(t,e,s){},3:function(t,e,s){t.exports={statistics__list:"Statistics_statistics__list__1aeOO",statistics__item:"Statistics_statistics__item__azAyr"}},30:function(t,e,s){"use strict";s.r(e);var n=s(2),c=s.n(n),i=s(12),a=s.n(i),o=(s(18),s(8)),r=s.n(o),l=s(6),b=s(13),_=s.n(b),j=s(1),u=s(4),d=s.n(u),O=s(0);function p(t){var e=t.onIncrement;return Object(O.jsxs)("div",{className:d.a.options,children:[Object(O.jsx)("button",{onClick:e,className:d.a.options__button,children:"good"},Object(j.generate)()),Object(O.jsx)("button",{onClick:e,className:d.a.options__button,children:"neutral"},Object(j.generate)()),Object(O.jsx)("button",{onClick:e,className:d.a.options__button,children:"bad"},Object(j.generate)())]})}var m=s(3),f=s.n(m);function h(t){var e=t.good,s=t.neutral,n=t.bad,c=t.onCountTotal,i=t.onCountPositive;return Object(O.jsx)("div",{className:f.a.statistics,children:Object(O.jsxs)("ul",{className:f.a.statistics__list,children:[Object(O.jsxs)("li",{className:f.a.statistics__item,children:["good: ",e]},Object(j.generate)()),Object(O.jsxs)("li",{className:f.a.statistics__item,children:["neutral: ",s]},Object(j.generate)()),Object(O.jsxs)("li",{className:f.a.statistics__item,children:["bad: ",n]},Object(j.generate)()),Object(O.jsxs)("li",{className:f.a.statistics__item,children:["Total: ",c()]},Object(j.generate)()),Object(O.jsxs)("li",{className:f.a.statistics__item,children:["Positive Feedback: ",i(),"%"]},Object(j.generate)())]})})}var x=s(9),g=s.n(x),v=s(10),k=s.n(v);function N(t){var e=t.title,s=t.children;return Object(O.jsxs)("section",{className:g.a.section,children:[Object(O.jsx)("h2",{className:g.a.section__title,children:e}),s]})}N.prototype={title:k.a.string.isRequired,children:k.a.element.isRequired};var A=s(11),S=s.n(A);function C(t){var e=t.message;return Object(O.jsx)("div",{className:S.a.notification,children:Object(O.jsx)("p",{className:S.a.notification__message,children:e})})}function w(){var t=Object(n.useState)(0),e=Object(l.a)(t,2),s=e[0],c=e[1],i=Object(n.useState)(0),a=Object(l.a)(i,2),o=a[0],r=a[1],b=Object(n.useState)(0),j=Object(l.a)(b,2),u=j[0],d=j[1],m=function(){return console.log(s),s+o+u};return Object(O.jsxs)("div",{className:_.a.feedback,children:[Object(O.jsx)(N,{title:"Please leave your feedback",children:Object(O.jsx)(p,{onIncrement:function(t){switch(t.currentTarget.textContent){case"good":c((function(t){return t+1}));break;case"neutral":r((function(t){return t+1}));break;case"bad":d((function(t){return t+1}));break;default:alert("Something wrong")}}})}),Object(O.jsx)(N,{title:"Statistics",children:m()?Object(O.jsx)(h,{good:s,neutral:o,bad:u,onCountTotal:m,onCountPositive:function(){var t=m();return t?Math.floor(100*s/t):0}}):Object(O.jsx)(C,{message:"No feedback given"})})]})}function F(){return Object(O.jsxs)("div",{className:r.a.App,children:[Object(O.jsx)("h1",{className:r.a.App__title,children:"Feedback"}),Object(O.jsx)(w,{})]})}a.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root"))},4:function(t,e,s){t.exports={options:"FeedbackOptions_options__28YbX",options__button:"FeedbackOptions_options__button__2wlVB"}},8:function(t,e,s){t.exports={App:"App_App__3frX5",App__title:"App_App__title__25Qi1"}},9:function(t,e,s){t.exports={section:"Section_section__2A1f1",section__title:"Section_section__title__2MWvH"}}},[[30,1,2]]]);
//# sourceMappingURL=main.86bf2d21.chunk.js.map