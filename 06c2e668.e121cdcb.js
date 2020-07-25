(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),i=(r(0),r(158)),l={title:"Installera"},o={id:"clients/cmc-01-install",isDocsHomePage:!1,title:"Installera",description:"Detta \xe4r en kortfattad beskrivning av hur man f\xe5r en Raspberry Pi (RPi) att agera som accesspunkt (wifi) och meddelandeserver (broker) f\xf6r ett frist\xe5ende tr\xe5dl\xf6st n\xe4tverk. Den \xe4r sedan grunden f\xf6r att kunna anv\xe4nda sitt eget MMRC-n\xe4t hemma eller p\xe5 en modultr\xe4ff.",source:"@site/docs/clients/cmc-01-install.md",permalink:"/docs/clients/cmc-01-install",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/tree/master/docs/clients/cmc-01-install.md",sidebar:"Enheter",previous:{title:"Enheters grundinst\xe4llning",permalink:"/docs/clients/intro-03-wifi"},next:{title:"Konfigurera",permalink:"/docs/clients/cmc-02-config"}},c=[{value:"Vad du beh\xf6ver",id:"vad-du-beh\xf6ver",children:[]},{value:"F\xf6rberedelser",id:"f\xf6rberedelser",children:[]},{value:"Installera programvaran",id:"installera-programvaran",children:[]}],s={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Detta \xe4r en kortfattad beskrivning av hur man f\xe5r en Raspberry Pi (RPi) att agera som accesspunkt (wifi) och meddelandeserver (broker) f\xf6r ett frist\xe5ende tr\xe5dl\xf6st n\xe4tverk. Den \xe4r sedan grunden f\xf6r att kunna anv\xe4nda sitt eget MMRC-n\xe4t hemma eller p\xe5 en modultr\xe4ff."),Object(i.b)("p",null,"Det \xe4r ganska m\xe5nga moment inblandade i arbetet, men inget av dem \xe4r speciellt sv\xe5rt. Det viktiga \xe4r att g\xf6ra allt i r\xe4tt ordning och att vara noga med de texter man skriver in. Att r\xe5ka skriva stor bokstav ist\xe4llet f\xf6r liten kan g\xf6ra att ingenting fungerar. Fr\xe5ga mig, jag har provat. :-)"),Object(i.b)("h2",{id:"vad-du-beh\xf6ver"},"Vad du beh\xf6ver"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Raspberry Pi 3, Raspberry Pi 4 eller Zero W (med wifi)"),Object(i.b)("li",{parentName:"ul"},"Bildsk\xe4rm med HDMI-kabel"),Object(i.b)("li",{parentName:"ul"},"USB tangentbord"),Object(i.b)("li",{parentName:"ul"},"USB-mus"),Object(i.b)("li",{parentName:"ul"},"Str\xf6mf\xf6rs\xf6rjning 5V/2A med micro USB-kontakt")),Object(i.b)("p",null,"Det g\xe5r att installera och konfigurera en Raspberry Pi utan bildsk\xe4rm, tangentbord och mus, men hur man g\xf6r det ing\xe5r inte i denna instruktion. Likas\xe5 har inte en Raspberry Pi Zero W m\xf6jlighet att ha bildsk\xe4rm och i det fallet \xe4r det l\xe4ttast att g\xf6ra installationen p\xe5 en Raspberry Pi 3 eller 4 och sedan enbart flytta SD-kortet till Zero W."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/clients/cmc-example.jpg",alt:"Exempel p\xe5 meddelandeserver"}))),Object(i.b)("h2",{id:"f\xf6rberedelser"},"F\xf6rberedelser"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ladda hem senaste ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.raspberrypi.org/downloads/raspberry-pi-os/"}),"Raspberry Pi OS")," och br\xe4nn till ett microSD-kort med exempelvis ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://etcher.io/"}),"Etcher"),". Alternativt kan du anv\xe4nda ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.raspberrypi.org/downloads/"}),"Raspberry Pi Imager"),"."),Object(i.b)("li",{parentName:"ul"},"Koppla in och starta RPi:en. T\xe4nk p\xe5 att ha tillr\xe4ckligt bra str\xf6mf\xf6rs\xf6rjning, annars finns risk att Raspbian h\xe4nger sig under (f\xf6rsta) starten."),Object(i.b)("li",{parentName:"ul"},"Har du en RPi med grafisk gr\xe4nssnitt b\xf6rjar du med att g\xf6ra de inst\xe4llningar som f\xf6resl\xe5s."),Object(i.b)("li",{parentName:"ul"},"B\xf6rja med att uppdatera Raspbian (om du inte redan gjort det grafiskt):")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"     sudo apt-get update\n     sudo apt-get upgrade\n")),Object(i.b)("h2",{id:"installera-programvaran"},"Installera programvaran"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vi b\xf6rjar med att installera den programvara som beh\xf6vs")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"     sudo apt-get install dnsmasq hostapd\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Stoppa programvaran s\xe5 l\xe4nge, tills vi har konfigurerat allting korrekt")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"    sudo systemctl stop dnsmasq\n    sudo systemctl stop hostapd\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Om du inte startade om efter uppdateringen av Raspbian, \xe4r det dags att g\xf6ra det nu:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"    sudo reboot\n")))}b.isMDXComponent=!0},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);