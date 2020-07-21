(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(157)),i={title:"Introduktion"},l={id:"intro-overview",isDocsHomePage:!0,title:"Introduktion",description:"Tanken med MMRC \xe4r att skapa ett flexibelt och decentraliserat s\xe4tt att styra modellj\xe4rnv\xe4gar. Grunden i konceptet \xe4r att man har en central meddelandeserver (s.k. MQTT-broker) och olika typer av klienter som sk\xf6ter olika funktioner p\xe5 modellj\xe4rnv\xe4gen. Klienterna kan sedan kommunicera med varandra via meddelandeservern f\xf6r att b\xe5de styra och bli styrda av andra klienter.",source:"@site/docs/intro-overview.md",permalink:"/docs/",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/tree/master/docs/intro-overview.md",sidebar:"someSidebar",next:{title:"Roadmap",permalink:"/docs/intro-roadmap"}},d=[{value:"Meddelandeserver",id:"meddelandeserver",children:[]},{value:"Klienter",id:"klienter",children:[]}],c={rightToc:d};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tanken med MMRC \xe4r att skapa ett flexibelt och decentraliserat s\xe4tt att styra modellj\xe4rnv\xe4gar. Grunden i konceptet \xe4r att man har en central meddelandeserver (s.k. MQTT-broker) och olika typer av klienter som sk\xf6ter olika funktioner p\xe5 modellj\xe4rnv\xe4gen. Klienterna kan sedan kommunicera med varandra via meddelandeservern f\xf6r att b\xe5de styra och bli styrda av andra klienter."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../img/overview-example.svg",alt:"MMRC Princip"}))),Object(o.b)("p",null,"Genom att anv\xe4nda tr\xe5dl\xf6st n\xe4tverk och sm\xe5, billiga kretskortsdatorer blir systemet v\xe4ldigt flexibelt. Det passar speciellt bra p\xe5 modellj\xe4rnv\xe4gsmoduler som kan vara placerade p\xe5 olika platser i en bana, men \xe4nd\xe5 ska kunna styras och \xf6vervakas centralt."),Object(o.b)("h3",{id:"meddelandeserver"},"Meddelandeserver"),Object(o.b)("p",null,"En viktig del i MMRC \xe4r den centrala meddelandeservern. Till den b\xf6r man anv\xe4nda en lite mer kapabel dator och ett f\xf6rslag \xe4r att anv\xe4nda Raspberry Pi med t.ex. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://mosquitto.org/"}),"Mosquitto")," installerat."),Object(o.b)("p",null,"Hur du g\xf6r din egen meddelandeserver kan du l\xe4sa mer om under rubriken ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"server-install.md"}),"Meddelandeserver")," h\xe4r till v\xe4nster."),Object(o.b)("h3",{id:"klienter"},"Klienter"),Object(o.b)("p",null,"Det finns inga specifika typer av klienter i detta system. Det \xe4r upp till den som skapar klienten att best\xe4mma vad den ska kunna g\xf6ra. Enkla klienter kanske enbart kan t\xe4nda och sl\xe4cka en lysdiod, medan mer avancerade klienter kan styra funktioner p\xe5 en hel station. MMRC \xe4r flexibelt nog att hantera b\xe4gge typerna."))}s.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return r?a.a.createElement(b,l(l({ref:t},c),{},{components:r})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);