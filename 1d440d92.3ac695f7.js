(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(128)),c={title:"Programvaran"},l={unversionedId:"clients/trn-software",id:"clients/trn-software",isDocsHomePage:!1,title:"Programvaran",description:"En f\xf6ruts\xe4ttning f\xf6r att kunna  ladda programvaran till enheten \xe4r att du har installerat Arduinos utvecklingsmilj\xf6 (IDE) p\xe5 din dator. Hur du g\xf6r dessa f\xf6rberedelser beskrivs mer p\xe5 sidan B\xf6rja programmera.",source:"@site/docs/clients/trn-software.md",slug:"/clients/trn-software",permalink:"/docs/clients/trn-software",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/blob/master/docs/clients/trn-software.md",version:"current",sidebar:"Enheter",previous:{title:"Montering",permalink:"/docs/clients/trn-assemble"},next:{title:"Inst\xe4llningar",permalink:"/docs/clients/trn-settings"}},o=[{value:"Grundinst\xe4llningar",id:"grundinst\xe4llningar",children:[{value:"In- och utg\xe5ngar",id:"in--och-utg\xe5ngar",children:[]},{value:"Namn och l\xf6senord",id:"namn-och-l\xf6senord",children:[]},{value:"Fels\xf6kning",id:"fels\xf6kning",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Licens",id:"licens",children:[]},{value:"Programstruktur",id:"programstruktur",children:[]}],b={rightToc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"En f\xf6ruts\xe4ttning f\xf6r att kunna  ladda programvaran till enheten \xe4r att du har installerat Arduinos utvecklingsmilj\xf6 (IDE) p\xe5 din dator. Hur du g\xf6r dessa f\xf6rberedelser beskrivs mer p\xe5 sidan ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"intro-arduino"}),"B\xf6rja programmera"),". "),Object(i.b)("p",null,"Det \xe4r en eng\xe5ngsuppgift, s\xe5 har du en g\xe5ng gjort iordning en MRC-enhet ska du inte beh\xf6va g\xf6ra om f\xf6rberedelserna igen."),Object(i.b)("h2",{id:"grundinst\xe4llningar"},"Grundinst\xe4llningar"),Object(i.b)("p",null,"Det du kan beh\xf6va \xe4ndra \xe4r en del inst\xe4llningar i filen ",Object(i.b)("inlineCode",{parentName:"p"},"mrcSettings.h"),". Du g\xf6r \xe4ndringarna i en enkelt texteditor eller i Arduion IDE och sparar dem lokalt."),Object(i.b)("h3",{id:"in--och-utg\xe5ngar"},"In- och utg\xe5ngar"),Object(i.b)("p",null,"H\xe4r kan man exempelvis vilja \xe4ndra vilka in-/utg\xe5ngar som anv\xe4nds av enheten:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"// Pin\nint pinVx1Led1 = D4;    // Which pin the first status led is attached to\nint pinVx1Led2 = D3;    // Which pin the second status led is attached to\nint pinVx1Button = D2;  // Which pin the first button is attached to\nint pinVx1Servo = D1;   // Which pin the first servo is attached to\nint pinVx2Servo = RX;   // Which pin the second servo is attached to\n")),Object(i.b)("p",null,"F\xf6ljande in-/utg\xe5ngar anv\xe4nds som standard p\xe5 en Wemos kretskortsdator:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Anv\xe4ndning"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Vx1 pin"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Vx2 pin"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Kretkort"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Lysdiod 1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D0"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"L1")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Lysdiod 2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D5"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"L2")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Knapp"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D6"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Btn")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Servo 1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"D7"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"S1")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Servo 2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Rx"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Tx"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"S2")))),Object(i.b)("h3",{id:"namn-och-l\xf6senord"},"Namn och l\xf6senord"),Object(i.b)("p",null,"Om man vill ha ett annat startl\xf6senord och -namn f\xf6r hur man komm\xe5t \xe5t enhetens inst\xe4llningar, f\xe5r man \xe4ndra det p\xe5 f\xf6ljande tv\xe5 rader. Kan rekommenderas om man \xe4r noga med s\xe4kerheten."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'// Access point configuration\nconst char thingName[] = "MRC-client";                 // Initial AP name, used as SSID of the own Access Point\nconst char wifiInitialApPassword[] = "mrc4president";  // Initial password, used when it creates an own Access Point\n')),Object(i.b)("h3",{id:"fels\xf6kning"},"Fels\xf6kning"),Object(i.b)("p",null,"Man kan \xe4ven vilja \xe4ndra inst\xe4llningarna f\xf6r vilken fels\xf6knings-information som visas p\xe5 seriella monitorn."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'// Debug\nbyte debug = 1;     // Set to "1" for debug messages in Serial monitor (9600 baud)\n')),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"N\xe4r du laddat ner programvaran enligt den generella beskrivningen (avsnitt MRC programvara) och valt vilken kretskortsdator du har, ska du bara koppla in den och ladda upp mjukvaran till den. N\xe4r mjukvaran \xe4r uppladda ska enheten vara klar att st\xe4llas in och anv\xe4ndas."),Object(i.b)("h2",{id:"licens"},"Licens"),Object(i.b)("p",null,"Denna programvara \xe4r sl\xe4ppt under en GPL 3.0-licens, vilket betyder att du fritt f\xe5r anv\xe4nda, \xe4ndra och publicera den vidare s\xe5 l\xe4nge du g\xf6r det under samma eller motsvarande licens. S\xe5 h\xe4r s\xe4ger den engelska versionen:"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"GPL v3.0")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version."))),Object(i.b)("p",null,"Du kan l\xe4sa hela licensen p\xe5 ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.gnu.org/licenses/gpl-3.0.html"}),"GNUs webbplats"),"."),Object(i.b)("h2",{id:"programstruktur"},"Programstruktur"),Object(i.b)("p",null,"Programvaran \xe4r uppdelad i flera olika filer, f\xf6r att ge b\xe4ttre \xf6verblick. F\xf6ljande delar finns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"mrc-2turnout - ",Object(i.b)("em",{parentName:"li"},"Sj\xe4lva huvudprogrammet")),Object(i.b)("li",{parentName:"ul"},"mrcMqtt - ",Object(i.b)("em",{parentName:"li"},"Hantering & inst\xe4llningar av MQTT-kommunikationen")),Object(i.b)("li",{parentName:"ul"},"mrcServo - Hantering & inst\xe4llningar av servon**"),Object(i.b)("li",{parentName:"ul"},"mrcSettings - ",Object(i.b)("em",{parentName:"li"},"Generella inst\xe4llningar")),Object(i.b)("li",{parentName:"ul"},"mrcStatus - ",Object(i.b)("em",{parentName:"li"},"Hantering & inst\xe4llningar av status-lysdioder")),Object(i.b)("li",{parentName:"ul"},"mrcWifi - ",Object(i.b)("em",{parentName:"li"},"Hantering & inst\xe4llningar av n\xe4tverket"))))}s.isMDXComponent=!0}}]);