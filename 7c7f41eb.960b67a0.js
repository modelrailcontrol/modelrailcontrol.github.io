(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(133)),l={title:"Introduktion"},c={unversionedId:"struct-01-intro",id:"struct-01-intro",isDocsHomePage:!1,title:"Introduktion",description:"Principen f\xf6r MQTT \xe4r att man skickar (publish) ett meddelande (payload) till ett specifikt \xe4mne (topic). Andra kan sedan v\xe4lja att lyssa p\xe5 eller prenumerera (subscribe) p\xe5 ett \xe4mne. S\xe5 varje g\xe5ng n\xe5gon skickar (publish) ett meddelande (payload) till ett \xe4mne (topic), kommer detta meddelande att vidarebefordras till alla som valt att prenumerera/lyssna (subscribe) p\xe5 detta \xe4mne.",source:"@site/docs/struct-01-intro.md",slug:"/struct-01-intro",permalink:"/docs/struct-01-intro",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/blob/master/docs/struct-01-intro.md",version:"current",sidebar:"someSidebar",previous:{title:"Contribute to MRC",permalink:"/docs/intro-contribute"},next:{title:"Device / enhet",permalink:"/docs/struct-02-device"}},b=[{value:"Ordlista",id:"ordlista",children:[]},{value:"Uppbyggnad",id:"uppbyggnad",children:[]},{value:"Attribut",id:"attribut",children:[]},{value:"Base topic",id:"base-topic",children:[]},{value:"Ge kommando",id:"ge-kommando",children:[]},{value:"S\xe4tta status",id:"s\xe4tta-status",children:[]}],o={rightToc:b};function d(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Principen f\xf6r MQTT \xe4r att man skickar (publish) ett meddelande (payload) till ett specifikt \xe4mne (topic). Andra kan sedan v\xe4lja att lyssa p\xe5 eller prenumerera (subscribe) p\xe5 ett \xe4mne. S\xe5 varje g\xe5ng n\xe5gon skickar (publish) ett meddelande (payload) till ett \xe4mne (topic), kommer detta meddelande att vidarebefordras till alla som valt att prenumerera/lyssna (subscribe) p\xe5 detta \xe4mne."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Principen f\xf6r MQTT",src:n(212).default})),Object(i.b)("p",null,"I centrum f\xf6r detta f\xf6rfarande finns en meddelandeserver (broker). Det \xe4r en central programvara vars enda uppgift lite f\xf6renklat \xe4r att hantera \xe4mnen, meddelanden och prenumerationer.\nMan kan \xe4ven g\xf6ra liknelsen att brokerns uppgift \xe4r att hantera en massa fack (subject) med meddelanden (payload) som enheter kan skriva dit (publish) eller h\xe4mta (subsrcibe)."),Object(i.b)("h2",{id:"ordlista"},"Ordlista"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Svenska"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Engelska"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"F\xf6rklaring"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\xe4mne"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"topic"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"meddelande"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"payload"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enhet"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"device"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"funktion"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"egenskap"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"property"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h2",{id:"uppbyggnad"},"Uppbyggnad"),Object(i.b)("p",null,"Ett \xe4mne i MRC \xe4r alltid uppbyggt p\xe5 f\xf6ljande s\xe4tt:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mrc/device/node/property\nmrc/enhet/funktion/egenskap\n")),Object(i.b)("h2",{id:"attribut"},"Attribut"),Object(i.b)("p",null,"P\xe5 varje niv\xe5 i strukturen kan man sedan s\xe4tta attribut, vilka kan varierar beroende p\xe5 niv\xe5n. Dessa attribut anv\xe4nds till att ge information om just den niv\xe5 d\xe4r attributet finns, exempelvis:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mrc/device/$name"),'\nd\xe4r man d\xe5 har m\xf6jlighet att ge enheten ett l\xe4sbart namn, kanske "V\xe4xel 22".'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mrc/device/node/$name"),'\nd\xe4r man ger en av enhetens funktioner ett l\xe4sbart namn, kanske "V\xe4xelstyrning".'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"mrc/device/node/property/$name"),'\nd\xe4r man ger funktionens egenskap ett namn, kanske "Riktning".'),Object(i.b)("p",null,"Vilka attribut som finns och m\xe5ste anv\xe4ndas, finns beskrivet i ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/conv-restriction"}),"Konventionen"),"."),Object(i.b)("h2",{id:"base-topic"},"Base topic"),Object(i.b)("p",null,"Den f\xf6rsta niv\xe5n i MRC-strukturen och som grund f\xf6r alla \xe4mnen i MRC anv\xe4nds f\xf6ljande:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mrc/\n")),Object(i.b)("p",null,"Denna start p\xe5 \xe4mnet visar att du f\xf6ljer MRC-konventionen och d\xe5 ska allts\xe5 alla \xe4mnen b\xf6rja med denna text, exempelvis"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mrc/pkin-to001/turnout/2turnout\nmrc/1270262539-af/button/push\nmrc/bwah-0012/signal/approach\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Observera")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Om du g\xf6r du din egen variant av MRC eller MQTT \xe4mnesstruktur, s\xe5 ",Object(i.b)("em",{parentName:"p"},"m\xe5ste")," du hitta p\xe5 ett eget Base topic. \xc4mnet ",Object(i.b)("inlineCode",{parentName:"p"},"mrc/")," \xe4r reserverat f\xf6r enheter som f\xf6ljer MRC Konventionen fullt ut."))),Object(i.b)("h2",{id:"ge-kommando"},"Ge kommando"),Object(i.b)("p",null,"De \xe4mnen vi skapar, kan anv\xe4ndas p\xe5 tv\xe5 olika s\xe4tt: B\xe5de f\xf6r att skicka kommandon till (publish) och f\xf6r att h\xe4mta meddelanden (subscribe). Men i MRC g\xf6r man detta p\xe5 ett lite speciellt s\xe4tt, med ett kommando\xe4mne:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mrc/pkin-sj06/turnout/direction/set\n")),Object(i.b)("p",null,"N\xe4r n\xe5gon annan enhet eller funktion vill l\xe4gga om den h\xe4r v\xe4xeln, skickar dem ett l\xe4mpligt meddelande (publish) till detta \xe4mne. En enhet m\xe5ste alltid lyssna (subscribe) till sina egna ",Object(i.b)("inlineCode",{parentName:"p"},"set"),"-\xe4mnen f\xf6r att kunna veta n\xe4r den ska agera."),Object(i.b)("h2",{id:"s\xe4tta-status"},"S\xe4tta status"),Object(i.b)("p",null,"N\xe4r enheten v\xe4l utf\xf6rt kommandot, b\xf6r den verifiera detta genom att skicka ett l\xe4mpligt meddelande (publish) till samma \xe4mne (fast utan ",Object(i.b)("inlineCode",{parentName:"p"},"set"),"). S\xe5 i exempelt ovan skickas ett meddelande till"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mrc/pkin-sj06/turnout/direction/\n")),Object(i.b)("p",null,"Vad man skickar i de b\xe5da fallen, \xe4r inte best\xe4mt i konventionen. Men en bra regel \xe4r att skicka samma meddelande till status, som man fick i kommandot."),Object(i.b)("p",null,"S\xe5 om kommandot i \xe4mnet ",Object(i.b)("inlineCode",{parentName:"p"},"mrc/pkin-sj06/turnout/direction/set"),' var "turn", b\xf6r man s\xe4tta statusen i \xe4mnet ',Object(i.b)("inlineCode",{parentName:"p"},"mrc/pkin-sj06/turnout/direction/"),'till "turn".'))}d.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return n?r.a.createElement(u,c(c({ref:t},o),{},{components:n})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/struct-overview-c48cdcde2b21dcb4f66ee53d27c670bd.svg"}}]);