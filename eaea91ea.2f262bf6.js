(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(157)),i={title:"Anv\xe4ndning"},c={id:"struct-using",isDocsHomePage:!1,title:"Anv\xe4ndning",description:"Ge kommando",source:"@site/docs/struct-using.md",permalink:"/docs/struct-using",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/docs/struct-using.md",sidebar:"someSidebar",previous:{title:"Property / egenskaper",permalink:"/docs/struct-property"},next:{title:"Introduktion",permalink:"/docs/function-intro"}},l=[{value:"Ge kommando",id:"ge-kommando",children:[]},{value:"S\xe4tta status",id:"s\xe4tta-status",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ge-kommando"},"Ge kommando"),Object(o.b)("p",null,"De \xe4mnen vi nu har skapat, kan anv\xe4ndas p\xe5 tv\xe5 olika s\xe4tt: B\xe5de f\xf6r att skicka kommandon till (publish) och f\xf6r att h\xe4mta meddelanden (subscribe). Men i MMRC g\xf6r man detta p\xe5 ett lite speciellt s\xe4tt, med ett kommando\xe4mne:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mmrc/pkin-sj06/turnout/turn/set\n")),Object(o.b)("p",null,"N\xe4r n\xe5gon annan enhet eller funktion vill l\xe4gga om den h\xe4r v\xe4xeln, skickar dem ett l\xe4mpligt meddelande (publish) till detta \xe4mne. En enhet m\xe5ste alltid lyssna (subscribe) till sina egna ",Object(o.b)("inlineCode",{parentName:"p"},"set"),"-\xe4mnen f\xf6r att kunna veta n\xe4r den ska agera."),Object(o.b)("h2",{id:"s\xe4tta-status"},"S\xe4tta status"),Object(o.b)("p",null,"N\xe4r enheten v\xe4l utf\xf6rt kommandot, b\xf6r den verifiera detta genom att skicka ett l\xe4mpligt meddelande (publish) till samma \xe4mne (fast utan ",Object(o.b)("inlineCode",{parentName:"p"},"set"),"). S\xe5 i exempelt ovan skickas ett meddelande till"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mmrc/pkin-sj06/turnout/turn/\n")),Object(o.b)("p",null,"Vad man skickar i de b\xe5da fallen, \xe4r inte best\xe4mt i konventionen. Men en bra regel \xe4r att skicka samma meddelande till status, som man fick i kommandot."),Object(o.b)("p",null,"S\xe5 om kommandot i \xe4mnet ",Object(o.b)("inlineCode",{parentName:"p"},"mmrc/pkin-sj06/turnout/turn/set"),' var "turn", b\xf6r man s\xe4tta statusen i \xe4mnet ',Object(o.b)("inlineCode",{parentName:"p"},"mmrc/pkin-sj06/turnout/turn/"),'till "turn".'))}s.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);