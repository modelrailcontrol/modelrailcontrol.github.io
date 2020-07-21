(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(157)),c={title:"Devices"},o={id:"conv-devices",isDocsHomePage:!1,title:"Devices",description:"* mmrc / device ID: this is the base topic of a device.",source:"@site/docs/conv-devices.md",permalink:"/docs/conv-devices",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/docs/conv-devices.md",sidebar:"someSidebar",previous:{title:"Topology",permalink:"/docs/conv-topology"},next:{title:"Nodes",permalink:"/docs/conv-nodes"}},b=[{value:"Device Attributes",id:"device-attributes",children:[]},{value:"Device Lifecycle",id:"device-lifecycle",children:[]}],l={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mmrc")," / ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"device ID")),": this is the base topic of a device.\nEach device must have a unique device ID which adhere to the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#topic-ids"}),"ID format"),".")),Object(i.b)("h3",{id:"device-attributes"},"Device Attributes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mmrc")," / ",Object(i.b)("inlineCode",{parentName:"li"},"device ID")," / ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"$device-attribute")),":")),Object(i.b)("p",null,"The following device attributes are mandatory and MUST be send, even if it is just an empty string."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Topic"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"$name"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Friendly name of the device")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"$state"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"See ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#device-lifecycle"}),"Device Lifecycle"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"$nodes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#nodes"}),"Nodes")," the device exposes, separated by ",Object(i.b)("inlineCode",{parentName:"td"},",")," for multiple ones.")))),Object(i.b)("p",null,"Optional topics include:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Topic"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"$mmrc"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The implemented MMRC convention version")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"$type"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),'An identifier for the type of device used (example "esp8266" or "Arduino Uno")')))),Object(i.b)("p",null,"For example, a device with an ID of ",Object(i.b)("inlineCode",{parentName:"p"},"super-car")," that comprises of a ",Object(i.b)("inlineCode",{parentName:"p"},"wheels"),", ",Object(i.b)("inlineCode",{parentName:"p"},"engine")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"lights")," node would send:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'mmrc/super-car/$mmrc \u2192 "2.1.0"\nmmrc/super-car/$name \u2192 "Super car"\nmmrc/super-car/$nodes \u2192 "wheels,engine,lights[]"\nmmrc/super-car/$type \u2192 "esp8266"\nmmrc/super-car/$state \u2192 "ready"\n')),Object(i.b)("h3",{id:"device-lifecycle"},"Device Lifecycle"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"$state")," device attribute represents the current state of the device.\nThere are 6 different states:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"init")),": this is the state the device is in when it is connected to the MQTT broker, but has not yet sent all MMRC messages and is not yet ready to operate.\nThis state is optional, and may be sent if the device takes a long time to initialize, but wishes to announce to consumers that it is coming online."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"ready")),": this is the state the device is in when it is connected to the MQTT broker, has sent all MMRC messages and is ready to operate. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"disconnected")),": this is the state the device is in when it is cleanly disconnected from the MQTT broker.\nYou must send this message before cleanly disconnecting."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"sleeping")),": this is the state the device is in when the device is sleeping.\nYou have to send this message before sleeping."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"lost")),': this is the state the device is in when the device has been "badly" disconnected.\nYou must define this message as LWT (last will).'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"alert")),": this is the state the device is in when connected to the MQTT broker, but something wrong is happening. E.g. a sensor is not providing data and needs human intervention.\nYou have to send this message when something is wrong.")))}s.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);