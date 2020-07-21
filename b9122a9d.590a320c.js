(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(157)),o={title:"Property / egenskaper"},l={id:"struct-property",isDocsHomePage:!1,title:"Property / egenskaper",description:"P\xe5 den fj\xe4rde och sista niv\xe5n hittar man alla egenskaper som en funktioner har:",source:"@site/docs/struct-property.md",permalink:"/docs/struct-property",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/tree/master/docs/struct-property.md",sidebar:"someSidebar",previous:{title:"Node / funktioner",permalink:"/docs/struct-node"},next:{title:"Anv\xe4ndning",permalink:"/docs/struct-using"}},p=[{value:"Attribut",id:"attribut",children:[]},{value:"N\xe5gra exempel",id:"n\xe5gra-exempel",children:[]},{value:"F\xf6reslagna egenskaper",id:"f\xf6reslagna-egenskaper",children:[]}],c={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"P\xe5 den fj\xe4rde och sista niv\xe5n hittar man alla egenskaper som en funktioner har:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mmrc/pkin-sj06/turnout/turn\n")),Object(i.b)("p",null,"Dessa egenskaper/\xe4mnen ska tidigare ha definierats i funktionens \xe4mne ",Object(i.b)("inlineCode",{parentName:"p"},"mmrc/pkin-sj06/turnout/$properties"),"."),Object(i.b)("p",null,"Om det i enhetens \xe4mne ",Object(i.b)("inlineCode",{parentName:"p"},"mmrc/pkin-sj06/$properties")," st\xe5r exempelvis ",Object(i.b)("inlineCode",{parentName:"p"},"turn")," betyder det allts\xe5 att det finns en egenskap i funktionen och den motsvaras d\xe5 av \xe4mnet:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mmrc/pkin-sj06/turnout/turn\n")),Object(i.b)("h2",{id:"attribut"},"Attribut"),Object(i.b)("p",null,"Varje funktion kan ha n\xe5gra olika attribut som informerar om den mer i detalj. F\xf6ljande attribut finns f\xf6r en egenskap:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mmrc/pkin-sj06/turnout/$name\nmmrc/pkin-sj06/turnout/$datatype\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"$name")," \xe4r det mer l\xe4sv\xe4nliga namnet p\xe5 egenskapen. ",Object(i.b)("em",{parentName:"li"},'Exempelvis "V\xe4xeloml\xe4ggning" eller "Signalbild"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"$datatype")," beskriver vilken typ av data som kan l\xe4sas fr\xe5n och/eller skickas till egenskapen. Vilka egenskaper som kan f\xf6rekomma finns att l\xe4sa i Konventionen. ",Object(i.b)("em",{parentName:"li"},'Exempelvis "string" eller "boolean".'))),Object(i.b)("h2",{id:"n\xe5gra-exempel"},"N\xe5gra exempel"),Object(i.b)("p",null,"I MJ-sammanhang beh\xf6ver man s\xe4llan ha s\xe5 m\xe5nga olika egenskaper p\xe5 en funktion. Det \xe4r oftast funktionerna som det finns flera av, v\xe4xlar, signaler och knappar till exempel. Varje funbktion \xe4r sen oftas v\xe4ldigt enkel, s\xe5 att egenskaperna blir f\xe5:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mmrc/pkin-1234/to-left/turn\nmmrc/pkin-1234/to-right/turn\nmmrc/pkin-1234/btn-left/push\nmmrc/pkin-1234/btn-right/push\nmmrc/pkin-1234/si-left-out/main\nmmrc/pkin-1234/si-left-in/main\nmmrc/pkin-1234/si-left-in/next\nmmrc/pkin-1234/si-right-out/main\nmmrc/pkin-1234/si-right-in/main\nmmrc/pkin-1234/si-right-in/next\n")),Object(i.b)("p",null,"H\xe4r har n\xe4stan alla funktioner bara en egenskap, en v\xe4xel kan l\xe4ggas om, en knapp tryckas medan en signal kan visa b\xe5de egen signalbild och meddela n\xe4sta signalbild."),Object(i.b)("h2",{id:"f\xf6reslagna-egenskaper"},"F\xf6reslagna egenskaper"),Object(i.b)("p",null,"H\xe4r nedan f\xf6ljer n\xe5gra f\xf6rslag p\xe5 egenskaper/\xe4mnen som kan vara l\xe4mpliga att anv\xe4nda i MJ-sammanhang:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"mmrc/pkin-1234/turnout/turn\nmmrc/pkin-1234/button/push\nmmrc/pkin-1234/switch/throw\nmmrc/pkin-1234/signal/main/\nmmrc/pkin-1234/signal/next/\n")))}s.isMDXComponent=!0},157:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),b=r,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return t?a.a.createElement(d,l(l({ref:n},c),{},{components:t})):a.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);