(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),p=(n(0),n(158)),o={title:"Knappar/omkopplare"},c={id:"function-04-button",isDocsHomePage:!1,title:"Knappar/omkopplare",description:"Tryckknapp",source:"@site/docs/function-04-button.md",permalink:"/docs/function-04-button",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/tree/master/docs/function-04-button.md",sidebar:"someSidebar",previous:{title:"Signaler",permalink:"/docs/function-03-signal"},next:{title:"Block",permalink:"/docs/function-05-block"}},l=[{value:"Tryckknapp",id:"tryckknapp",children:[]},{value:"Omkopplare",id:"omkopplare",children:[]}],i={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"tryckknapp"},"Tryckknapp"),Object(p.b)("p",null,"F\xf6r en enkel tryckknapp (t.ex. i ett st\xe4llverk) anv\xe4nder vi typen ",Object(p.b)("inlineCode",{parentName:"p"},"pushbutton"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),'mrc/[id]/[node]/$type \u2192 "pushbutton"\n')),Object(p.b)("p",null,"De \xe4mnen som d\xe5 ",Object(p.b)("em",{parentName:"p"},"m\xe5ste")," finnas f\xf6r en tryckknapp \xe4r dessa:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"mrc/[id]/[node]/action\nmrc/[id]/[node]/action/set\n")),Object(p.b)("p",null,"och meddelandet som anv\xe4nds \xe4r ",Object(p.b)("inlineCode",{parentName:"p"},"push"),", exempelvis:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),'mrc/[id]/button/action/set \u2192 "push"\nmrc/[id]/button/action/ \u2192 "idle"\n')),Object(p.b)("p",null,"d\xe4r meddelandet betyder f\xf6ljande:"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"push")," betyder att knappen har eller ska tryckas ner."),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"idle")," knappen \xe4r inte nedtryckt. Detta kan ",Object(p.b)("em",{parentName:"p"},"enbart vara en status"),"."),Object(p.b)("p",null,"H\xe4r b\xf6r knappen s\xe4tta status (publish) i sitt \xe4mne ",Object(p.b)("inlineCode",{parentName:"p"},"mrc/[id]/[node]/pushbutton")," bara under den stund knappen verkligen trycks ner. Sedan b\xf6r statusen \xe4ndras till ",Object(p.b)("strong",{parentName:"p"},"idle"),"."),Object(p.b)("h2",{id:"omkopplare"},"Omkopplare"),Object(p.b)("p",null,"F\xf6r en omkopplare med tv\xe5 eller flera l\xe4gen anv\xe4nder vi typen ",Object(p.b)("inlineCode",{parentName:"p"},"switchN"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),'mrc/[id]/[node]/$type \u2192 "switchN"\n')),Object(p.b)("p",null,'D\xe4r bokstaven "N" ovan representerar en siffra som talar om hur m\xe5nga l\xe4gen omkopplaren har. De \xe4mnen som d\xe5 ',Object(p.b)("em",{parentName:"p"},"m\xe5ste")," finnas f\xf6r en tryckknapp \xe4r dessa:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"mrc/[id]/[node]/position\nmrc/[id]/[node]/position/set\n")),Object(p.b)("p",null,"och meddelandet som anv\xe4nds \xe4r ",Object(p.b)("inlineCode",{parentName:"p"},"stateN"),", exempelvis:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),'mrc/[id]/[node]/$type \u2192 "switch3"\nmrc/[id]/button/position/set -> "state2"\n')),Object(p.b)("p",null,"d\xe4r meddelandet betyder f\xf6ljande:"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"state0")," omkopplarens utg\xe5ngsl\xe4ge, exempelvis en \xe5terfj\xe4drande omkopplare"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"state1")," omkopplarens f\xf6rsta funktionsl\xe4ge"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"state2")," omkopplarens andra funktionsl\xe4ge"),Object(p.b)("p",null,"Antalet l\xe4gen styrs av typen ",Object(p.b)("inlineCode",{parentName:"p"},"switchN"),' d\xe4r "N" \xe4r en siffra som visar antalet m\xf6jliga l\xe4gen.'))}b.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||p;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);