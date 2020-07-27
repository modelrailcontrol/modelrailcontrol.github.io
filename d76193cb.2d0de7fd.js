(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),l=(r(0),r(159)),i={title:"Introduktion"},o={id:"clients/trn-intro",isDocsHomePage:!1,title:"Introduktion",description:"P\xe5 dessa sidor beskrivs hur du g\xf6r en MRC-enhet som kan hantera tv\xe5 v\xe4xlar var f\xf6r sig. Varje v\xe4xel styrs av en egen knapp och har tv\xe5 lysdioder som l\xe4gesindikering. De kan dessutom styras fr\xe5n avst\xe5nd via tr\xe5dl\xf6s anslutning (wifi).",source:"@site/docs/clients/trn-intro.md",permalink:"/docs/clients/trn-intro",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/blob/master/docs/clients/trn-intro.md",sidebar:"Enheter",previous:{title:"MQTT",permalink:"/docs/clients/cmc-04-mqtt"},next:{title:"M\xf6nsterkort",permalink:"/docs/clients/trn-pcb"}},s=[{value:"Materiel",id:"materiel",children:[]},{value:"Referenser",id:"referenser",children:[]}],c={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"P\xe5 dessa sidor beskrivs hur du g\xf6r en MRC-enhet som kan hantera tv\xe5 v\xe4xlar var f\xf6r sig. Varje v\xe4xel styrs av en egen knapp och har tv\xe5 lysdioder som l\xe4gesindikering. De kan dessutom styras fr\xe5n avst\xe5nd via tr\xe5dl\xf6s anslutning (wifi).\nDet finns \xe4ven m\xf6jlighet att styra tv\xe5 servon till samma v\xe4xel, s\xe5 att enheten \xe4ven kan hantera motst\xe5ende v\xe4xlar eller skyddsv\xe4xlar."),Object(l.b)("h2",{id:"materiel"},"Materiel"),Object(l.b)("p",null,"F\xf6r att bygga ihop en komplett v\xe4xelstyrning, beh\xf6ver du minst f\xf6ljande materiel:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Wemos-mini kretskortsdator (eller klon)"),Object(l.b)("li",{parentName:"ul"},"M\xf6nsterkort, special (",Object(l.b)("em",{parentName:"li"},"ett per v\xe4xel"),")"),Object(l.b)("li",{parentName:"ul"},"Stiftlist, 9 pinnar"),Object(l.b)("li",{parentName:"ul"},"Hylslist, 4 pinnar"),Object(l.b)("li",{parentName:"ul"},"Resistorer, en stycken 10 kOhm och tv\xe5 stycken 330 Ohm"),Object(l.b)("li",{parentName:"ul"},"Lysdioder, tv\xe5 stycken"),Object(l.b)("li",{parentName:"ul"},"En tryckknapp"),Object(l.b)("li",{parentName:"ul"},"Ett eller tv\xe5 servon"),Object(l.b)("li",{parentName:"ul"},"Kopplingstr\xe5d, ett par decimeter"),Object(l.b)("li",{parentName:"ul"},"5V str\xf6mf\xf6rs\xf6rjning, t.ex. USB-laddare")),Object(l.b)("p",null,"Vill man dessutom bygga in styrningen i en l\xe5da, kan man \xe4ven beh\xf6va f\xf6ljande:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"3D-utskriven multibox med lock"),Object(l.b)("li",{parentName:"ul"},"3D-utskriven h\xe5llare till mulitboxen"),Object(l.b)("li",{parentName:"ul"},"3D-utskriven sladdh\xe5llare")),Object(l.b)("p",null,"Observera att det h\xe4r \xe4r mer ett exempel p\xe5 material som kan anv\xe4ndas. Det g\xe5r exempelvis att anv\xe4nda helt andra kretskortsdatorer, men d\xe5 m\xe5ste man sj\xe4lv anpassa b\xe5de mjukvara och programvara efter de nya f\xf6ruts\xe4ttningarna."),Object(l.b)("h2",{id:"referenser"},"Referenser"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.lawicel-shop.se/microkontroller/esp8266-esp32"}),"Kretskortsdator Wemos")," finns att f\xe5 tag p\xe5 hos exempelvis Lawicel."),Object(l.b)("li",{parentName:"ul"},"F\xe4rdiga ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://aisler.net/p/XVYMUWEX"}),"m\xf6nsterkort f\xf6r v\xe4xelstyrning")," kan du best\xe4lla hos Aisler.")))}p.isMDXComponent=!0},159:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||l;return r?a.a.createElement(d,o(o({ref:t},c),{},{components:r})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);