(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(158)),o={title:"Elektroniken"},l={id:"clients/trn-02-electronics",isDocsHomePage:!1,title:"Elektroniken",description:"Elektroniken f\xf6r MMRC v\xe4xel-/servostyrning \xe4r ganska enkel, n\xe5gra resistorer, lysdioder och en tryckknapp beh\xf6ver monteras tillsammans med en kretskortsdator och ett m\xf6nsterkort.",source:"@site/docs/clients/trn-02-electronics.md",permalink:"/docs/clients/trn-02-electronics",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/tree/master/docs/clients/trn-02-electronics.md"},s=[{value:"Kretskortet",id:"kretskortet",children:[]},{value:"Styrning och indikering",id:"styrning-och-indikering",children:[]},{value:"Styrenheten",id:"styrenheten",children:[]},{value:"Hopkoppling",id:"hopkoppling",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Elektroniken f\xf6r MMRC v\xe4xel-/servostyrning \xe4r ganska enkel, n\xe5gra resistorer, lysdioder och en tryckknapp beh\xf6ver monteras tillsammans med en kretskortsdator och ett m\xf6nsterkort."),Object(i.b)("h2",{id:"kretskortet"},"Kretskortet"),Object(i.b)("p",null,"B\xf6rja tillverkningen av kretskortet genom att f\xf6rst l\xf6da resistorerna p\xe5 sina platser. V\xe4rdet p\xe5 dessa kan beh\xf6va varieras beroende p\xe5 vilken f\xe4rg man har p\xe5 lysdioderna och vilken sp\xe4nning kretskortsdatorn har p\xe5 sina utg\xe5ngar. I detta fall har vi 3.3V-utg\xe5ngar och gr\xf6na lysdioder s\xe5 d\xe5 fungerar 330 Ohm resistorer bra."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/turnout-pcb.svg",alt:"Kretskortet"}))),Object(i.b)("p",null,"F\xf6r att tryckknappen ska kunna detekteras beh\xf6vs \xe4ven en resistor p\xe5 10 kOhm. L\xf6d till sist stiftlister f\xf6r 5V-matning (2 pin), servon (2 x 3 pin) samt en hylslist f\xf6r styrning/indikering (4 pin)."),Object(i.b)("h2",{id:"styrning-och-indikering"},"Styrning och indikering"),Object(i.b)("p",null,"F\xf6r att b\xe5de kunna styra v\xe4xeln/servot och se i vilken l\xe4ge den st\xe5r, beh\xf6ver man koppla in en tryckknapp och tv\xe5 lysdioder. Dessa m\xe5ste f\xf6rst fysiskt placeras i n\xe5gon panel eller liknande. D\xe4refter kopplas sladdarna f\xf6r lysdioder och tryckknapp till en stiftlist. (Det \xe4r denna stiftlist som senare kopplas in till kretskortets hylslist.)"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/turnout-button.svg",alt:"Styrning"}))),Object(i.b)("p",null,"Har man inte behov av indikering, kan man bara l\xe5ta bli att ansluta lysdioderna."),Object(i.b)("h2",{id:"styrenheten"},"Styrenheten"),Object(i.b)("p",null,"Till sist beh\xf6ver man koppla ihop kretskortsdator med kretskortet. Det sker genom att l\xf6da \xe5tta olika kablar enligt schemat som visas h\xe4r. ",Object(i.b)("strong",{parentName:"p"},"Observera")," att kablarnas l\xe4ngd m\xe5ste anpassas efter den l\xe5da allting sedan ska stoppas in i!"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/turnout-solder.svg",alt:"Styrenheten"}))),Object(i.b)("h2",{id:"hopkoppling"},"Hopkoppling"),Object(i.b)("p",null,"Nu \xe4r allting klart f\xf6r att kopplas ihop till en fungerande enhet."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ett eller tv\xe5 servon kopplas till de trepoliga stiftlisterna p\xe5 kretskortet"),Object(i.b)("li",{parentName:"ul"},"Knapp & lysdioder till den 4-poliga hylslisten"),Object(i.b)("li",{parentName:"ul"},"5V-matning kan antingen ske via micro-USB-kontakten direkt p\xe5 kretskortsdatorn, alternativt via en 2-polig hylslist till kretskortet.")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/turnout-assemble.svg",alt:"Hopkoppling"}))),Object(i.b)("p",null,"Det enda som nu saknas f\xf6r att kunna styra en v\xe4xel, \xe4r att ladda mjukvaran i kretskortsdatorn."))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return k}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,k=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(k,l(l({ref:t},c),{},{components:n})):a.a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);