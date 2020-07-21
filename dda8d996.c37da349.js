(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),l=(n(0),n(157)),o={title:"MQTT"},i={id:"clients/cmc-04-mqtt",isDocsHomePage:!1,title:"MQTT",description:"N\xe4r vi nu har en fungerande accesspunkt, \xe4r det ganska l\xe4tt att l\xe4gga till den sista pusselbiten, MQTT. Det \xe4r allts\xe5 den programvara som sk\xf6ter hanteringen av de meddelanden som skickas mellan olika datorer i exempelvis MMRC.",source:"@site/docs/clients/cmc-04-mqtt.md",permalink:"/docs/clients/cmc-04-mqtt",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/docs/clients/cmc-04-mqtt.md",sidebar:"Enheter",previous:{title:"Starta & fels\xf6k",permalink:"/docs/clients/cmc-03-start"},next:{title:"Introduktion",permalink:"/docs/clients/trn-01-intro"}},c=[{value:"Installera programvaran",id:"installera-programvaran",children:[]},{value:"Testa installation",id:"testa-installation",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"N\xe4r vi nu har en fungerande accesspunkt, \xe4r det ganska l\xe4tt att l\xe4gga till den sista pusselbiten, MQTT. Det \xe4r allts\xe5 den programvara som sk\xf6ter hanteringen av de meddelanden som skickas mellan olika datorer i exempelvis MMRC."),Object(l.b)("p",null,"I denna beskrivning anv\xe4nds den mycket vanliga brokern ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://mosquitto.org/"}),"Mosquitto")," som \xe4r baserad p\xe5 \xf6ppen k\xe4llkod."),Object(l.b)("h2",{id:"installera-programvaran"},"Installera programvaran"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Starta Terminalen och skriv")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"    sudo apt-get update\n    sudo apt-get upgrade\n    sudo apt-get install mosquitto mosquitto-clients\n")),Object(l.b)("p",null,"Efter installationen ska allting bara starta automatiskt och du kan anv\xe4nda MQTT direkt."),Object(l.b)("h2",{id:"testa-installation"},"Testa installation"),Object(l.b)("p",null,"Om du ",Object(l.b)("em",{parentName:"p"},"inte")," har installerat MQTT p\xe5 samma dator som du nu ska testa allting p\xe5, s\xe5 ers\xe4tter du ",Object(l.b)("inlineCode",{parentName:"p"},"localhost")," med den IP-adress som datorn med MQTT brokern har (t.ex. 192.186.4.20)."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Testa MQTT genom att i terminalen skriva (du prenumererar p\xe5 \xe4mnet "testkanal")')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"    mosquitto_sub -h localhost -v -t testkanal\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Starta en ny Terminal och skriv f\xf6ljande kommande f\xf6r att skicka (publicera) meddelandet "Hello world! till \xe4mnet "testkanal":')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'    mosquitto_pub -h localhost -t testkanal -m "Hello world!"\n')),Object(l.b)("p",null,"F\xf6rhoppningsvis dyker nu meddelande upp p\xe5 den andra Terminalen och du kan se att allting fungerar som det ska!"))}u.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.a.createElement(b,i(i({ref:t},s),{},{components:n})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);