(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(157)),l={title:"M\xf6nsterkort"},o={id:"intro-pcb",isDocsHomePage:!1,title:"M\xf6nsterkort",description:"F\xf6r att enklare koppla ihop sin MJ-styrning, kan man beh\xf6va ha m\xf6nsterkort att montera kretsar p\xe5. En del m\xf6nsterkort finns f\xe4rdiga b\xe5de f\xf6r egen tillverkning och f\xf6r best\xe4llning hos Aisler.",source:"@site/docs/intro-pcb.md",permalink:"/docs/intro-pcb",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/tree/master/docs/intro-pcb.md",sidebar:"someSidebar",previous:{title:"H\xe5rdvara",permalink:"/docs/intro-hardware"},next:{title:"Andra l\xf6sningar",permalink:"/docs/intro-others"}},s=[{value:"Styra en v\xe4xel",id:"styra-en-v\xe4xel",children:[{value:"Beskrivning",id:"beskrivning",children:[]},{value:"Str\xf6mmatning",id:"str\xf6mmatning",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"F\xf6r att enklare koppla ihop sin MJ-styrning, kan man beh\xf6va ha m\xf6nsterkort att montera kretsar p\xe5. En del m\xf6nsterkort finns f\xe4rdiga b\xe5de f\xf6r egen tillverkning och f\xf6r best\xe4llning hos Aisler."),Object(i.b)("p",null,"Underlagen f\xf6r dessa m\xf6nsterkort finns att h\xe4mta i detta ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mekanoid/MMRC-pcb"}),"Github repository")),Object(i.b)("h2",{id:"styra-en-v\xe4xel"},"Styra en v\xe4xel"),Object(i.b)("p",null,"M\xf6nsterkort till styrning av en v\xe4xel. V\xe4xeln kan styras med en tryckknapp och har tv\xe5 lysdioder som indikerar v\xe4xell\xe4get. V\xe4xlar som kan hanteras \xe4r h\xf6ger- och v\xe4nsterv\xe4xel eller Y-v\xe4xel."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../img/pcb-2turnout-plain.svg",alt:"M\xf6nsterkort 2turnout"}))),Object(i.b)("p",null,"Genom att kortet har anslutning f\xf6r tv\xe5 servon, \xe4r det \xe4ven m\xf6jligt att koppla in en v\xe4xel till som styrs av samma tryckknapp som den f\xf6rsta, exempelvis f\xf6r sp\xe5rbyte eller skyddsv\xe4xel."),Object(i.b)("p",null,"Detta m\xf6nsterkort har testats och fungerar. Det finns att k\xf6pa f\xe4rdigt (i 3-pack) ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://aisler.net/p/XVYMUWEX"}),"fr\xe5n Aisler"),"."),Object(i.b)("h3",{id:"beskrivning"},"Beskrivning"),Object(i.b)("p",null,"M\xf6nsterkortet \xe4r dubbelsidigt och har m\xe5tten 17x35 mm. Det \xe4r t\xe4nkt att anv\xe4ndas tillsammans med en kretskortsdator typ Arduino. Via kortet kan man ansluta tv\xe5 servon, en knapp och tv\xe5 lysdioder till kretskortsdatorn."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"R1")," och ",Object(i.b)("inlineCode",{parentName:"p"},"R2")," \xe4r till f\xf6r att begr\xe4nsa str\xf6mmen till lysdioderna. De kan normal vara runt 120 Ohm f\xf6r 3.3V matning och runt 330 Ohm f\xf6r 5V-matning, men storleken \xe4r f\xf6rst\xe5s beroende av vilken typ av lysdiod du anv\xe4nder och vilken ljusstyrka du vill ha. ",Object(i.b)("inlineCode",{parentName:"p"},"R3")," \xe4r ett pullup-motst\xe5nd och b\xf6r l\xe4mpligen vara p\xe5 10 kOhm."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../img/pcb-2turnout-connections.svg",alt:"Anslutningar"}))),Object(i.b)("p",null,"Till v\xe4nster finns anslutning f\xf6r tryckknapp (",Object(i.b)("inlineCode",{parentName:"p"},"-")," och ",Object(i.b)("inlineCode",{parentName:"p"},"Btn"),") och tv\xe5 lysdioder (",Object(i.b)("inlineCode",{parentName:"p"},"L1")," och ",Object(i.b)("inlineCode",{parentName:"p"},"L2"),"). "),Object(i.b)("p",null,"Upptill i mitten kan man ansluta str\xf6mmatning p\xe5 lite olika s\xe4tt. Man ansluter normalt en yttre str\xf6mmatning till en av ",Object(i.b)("inlineCode",{parentName:"p"},"-")," och ",Object(i.b)("inlineCode",{parentName:"p"},"5V"),"-anslutningarna och kretskortsdatorns 5V-matning till de andra.\nOm kretskortsdatorn anv\xe4nder 3.3V f\xf6r sin kommunikation ansluts dess 3.3V-matning till ",Object(i.b)("inlineCode",{parentName:"p"},"3V"),", men om den har 5V f\xf6r kommunikationen ansluts dess 5V-matning ist\xe4llet."),Object(i.b)("p",null,"Till h\xf6ger finns anslutningsm\xf6jlighet f\xf6r tv\xe5 servon (",Object(i.b)("inlineCode",{parentName:"p"},"S1")," och ",Object(i.b)("inlineCode",{parentName:"p"},"S2"),"). "),Object(i.b)("p",null,"Nere till h\xf6ger finns anslutningsm\xf6jligheterna till kretskortsdatorn; lysdioder (",Object(i.b)("inlineCode",{parentName:"p"},"L1")," och ",Object(i.b)("inlineCode",{parentName:"p"},"L2"),"), tryckknapp (",Object(i.b)("inlineCode",{parentName:"p"},"Btn"),") och servostyrning ()",Object(i.b)("inlineCode",{parentName:"p"},"S1")," och ",Object(i.b)("inlineCode",{parentName:"p"},"S2"),")."),Object(i.b)("p",null,"F\xf6r alla anslutningar kan man v\xe4lja att antingen l\xf6da direkt mot m\xf6nsterkortet eller montera stift- eller hylslister f\xf6r mer flexibel anslutning. Ett exempel p\xe5 inkoppling och anv\xe4ndning finns p\xe5 sidan ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"start-turnout"}),"Bygga v\xe4xelstyrning")),Object(i.b)("h3",{id:"str\xf6mmatning"},"Str\xf6mmatning"),Object(i.b)("p",null,"Man kan str\xf6mmata kretskortet & kretskortsdatorn p\xe5 lite olika s\xe4tt. Konstruktionen \xe4r gjord f\xf6r att kunna hantera b\xe5de 3.3V- och 5V-baserade kretskortsdatorer."),Object(i.b)("p",null,"Hur man anv\xe4nder anslutningarna beror ocks\xe5 p\xe5 hur man vill (och kan) str\xf6mf\xf6rs\xf6rja kretskortsdatorn samt om den orkar driva servona."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../img/pcb-2turnout-schematic.svg",alt:"Kopplingsschema"}))),Object(i.b)("p",null,"F\xf6r 5V-baserade kretskortsdatorer finns f\xf6ljande alternativ:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Man matar kretskortsdatorn separat och ansluter ",Object(i.b)("inlineCode",{parentName:"li"},"5V"),"- och ",Object(i.b)("inlineCode",{parentName:"li"},"-")," p\xe5 kretskortet till extern str\xf6mmatning (t.ex USB-adapter)"),Object(i.b)("li",{parentName:"ul"},"Man matar kretskort och kretskortsdator gemensamt antingen fr\xe5n kretskortsdatorn om den orkar driva servon eller fr\xe5n ",Object(i.b)("inlineCode",{parentName:"li"},"5V"),"- och ",Object(i.b)("inlineCode",{parentName:"li"},"-")," p\xe5 kretskortet samt ansluter ",Object(i.b)("inlineCode",{parentName:"li"},"5V"),"- och ",Object(i.b)("inlineCode",{parentName:"li"},"-")," mellan kretskort och kretskortsdator.\nI b\xe4gge alternativen kopplar man ihop ",Object(i.b)("inlineCode",{parentName:"li"},"5V"),"- och ",Object(i.b)("inlineCode",{parentName:"li"},"3.3V"),"-pinnarna p\xe5 kretskortet.")),Object(i.b)("p",null,"F\xf6r 3.3V-baserade kretskortsdatorer g\xe4ller f\xf6ljande:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Man matar kretskortsdatorn separat och ansluter ",Object(i.b)("inlineCode",{parentName:"li"},"5V"),"- och ",Object(i.b)("inlineCode",{parentName:"li"},"-")," p\xe5 kretskortet till extern str\xf6mmatning (t.ex USB-adapter). Man ansluter ",Object(i.b)("inlineCode",{parentName:"li"},"3V")," till 3.3V-matning p\xe5 kretskortsdatorn.")),Object(i.b)("p",null,"Det finns \xe4ven en m\xf6jlighet att ansluta flera kretskort i serie och d\xe5 anv\xe4nder man de b\xe5de str\xf6manslutningarna till att mata vidare str\xf6mf\xf6rs\xf6rjningen."))}p.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,u=b["".concat(l,".").concat(d)]||b[d]||m[d]||i;return n?a.a.createElement(u,o(o({ref:t},c),{},{components:n})):a.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);