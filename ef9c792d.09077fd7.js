(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{122:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return i})),e.d(n,"metadata",(function(){return g})),e.d(n,"rightToc",(function(){return I})),e.d(n,"default",(function(){return o}));var a=e(3),r=e(7),l=(e(0),e(128)),i={title:"Inst\xe4llningar"},g={unversionedId:"clients/trn-settings",id:"clients/trn-settings",isDocsHomePage:!1,title:"Inst\xe4llningar",description:"N\xe4r du v\xe4l installerat programvaran och f\xe5tt ig\xe5ng enheten, beh\xf6ver du g\xf6ra en del specifika inst\xe4llningar som g\xe4ller just v\xe4xelstyrning.",source:"@site/docs/clients/trn-settings.md",slug:"/clients/trn-settings",permalink:"/docs/clients/trn-settings",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/blob/master/docs/clients/trn-settings.md",version:"current",sidebar:"Enheter",previous:{title:"Programvaran",permalink:"/docs/clients/trn-software"}},I=[{value:"Wifi &amp; MQTT-inst\xe4llningar",id:"wifi--mqtt-inst\xe4llningar",children:[]},{value:"Servo-inst\xe4llningar",id:"servo-inst\xe4llningar",children:[]},{value:"Spara inst\xe4llningarna",id:"spara-inst\xe4llningarna",children:[]}],c={rightToc:I};function o(t){var n=t.components,i=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"N\xe4r du v\xe4l installerat programvaran och f\xe5tt ig\xe5ng enheten, beh\xf6ver du g\xf6ra en del specifika inst\xe4llningar som g\xe4ller just v\xe4xelstyrning."),Object(l.b)("h2",{id:"wifi--mqtt-inst\xe4llningar"},"Wifi & MQTT-inst\xe4llningar"),Object(l.b)("p",null,"Hur du hittar enhetens inst\xe4llningar och f\xf6r mer information om de generella MRC-inst\xe4llningarna f\xf6r n\xe4tverket och kommunikationen mellan enheter, se sidan ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"intro-settings"}),"Enheters grundinst\xe4llning"),"."),Object(l.b)("h2",{id:"servo-inst\xe4llningar"},"Servo-inst\xe4llningar"),Object(l.b)("p",null,"Den h\xe4r enheten hanterar ju i huvudsak servon, s\xe5 den har flera olika inst\xe4llningar f\xf6r dessa. Det finns fyra olika inst\xe4llningar f\xf6r varje servo:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"Inst\xe4llningar f\xf6r en v\xe4xel",src:e(216).default})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Servo X min:")," Siffra mellan 0 och 255 som talar om var servots ena \xe4ndl\xe4ge ska vara."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Servo X max:")," Siffra mellan 0 och 255 som talar om var servots andra \xe4ndl\xe4ge ska vara."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Servo X hastighet:")," Siffra som anger hur l\xe5ng tid det tar mellan varje steg n\xe4r servot r\xf6r sig. Anges i mikrosekunder och ett v\xe4rde kring 150 kan vara lagom att b\xf6rja med."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Servo X back:")," En siffra fr\xe5n 0 och upp\xe5t som anger antal extra steg servot ska ta ut\xf6ver max/min-l\xe4get, f\xf6r att sedan g\xe5 tillbaka till max/min-l\xe4get igen. Kan vara bra att justera om servot hamnar i ett sp\xe4nt \xe4ndl\xe4ge.")),Object(l.b)("p",null,"Just inst\xe4llningarna av servots \xe4ndl\xe4gen \xe4r bra att g\xf6ra grovt innan det har kopplats in mot v\xe4xeln (eller vad det ska styra). Detta f\xf6r att undvika att belasta servot f\xf6r h\xe5rt om \xe4ndl\xe4get till en b\xf6rjan hamnar fel."),Object(l.b)("h2",{id:"spara-inst\xe4llningarna"},"Spara inst\xe4llningarna"),Object(l.b)("p",null,"N\xe4r du st\xe4llt in allting och vill spara det, g\xe5r du l\xe4ngst ner p\xe5 webbsidan och klickar p\xe5 den bl\xe5a Apply-knappen. D\xe5 sparas inst\xe4llningarna och enheten kommer att anv\xe4nda dem i forts\xe4ttningen."),Object(l.b)("p",null,Object(l.b)("img",{alt:"Apply-knapp",src:e(153).default})),Object(l.b)("p",null,"Eftersom enhetens webbserver/accesspunkt finns kvar s\xe5 l\xe4nge du \xe4r ansluten till den, \xe4r det l\xe4mpligt att \xe4ven koppla bort din telefon fr\xe5n enhetens accesspunkt \u201cMRC-client\u201d (eller det namn du valt i \u201dThing name\u201d)."))}o.isMDXComponent=!0},128:function(t,n,e){"use strict";e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return C}));var a=e(0),r=e.n(a);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function I(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=r.a.createContext({}),o=function(t){var n=r.a.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):g(g({},n),t)),e},b=function(t){var n=o(t.components);return r.a.createElement(c.Provider,{value:n},t.children)},m={inlineCode:"code",wrapper:function(t){var n=t.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(t,n){var e=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,c=I(t,["components","mdxType","originalType","parentName"]),b=o(e),s=a,C=b["".concat(i,".").concat(s)]||b[s]||m[s]||l;return e?r.a.createElement(C,g(g({ref:n},c),{},{components:e})):r.a.createElement(C,g({ref:n},c))}));function C(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var l=e.length,i=new Array(l);i[0]=s;var g={};for(var I in n)hasOwnProperty.call(n,I)&&(g[I]=n[I]);g.originalType=t,g.mdxType="string"==typeof t?t:a,i[1]=g;for(var c=2;c<l;c++)i[c]=e[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},153:function(t,n,e){"use strict";e.r(n),n.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iODYuMDgyMW1tIgogICBoZWlnaHQ9IjEwLjYyMjg2Mm1tIgogICB2aWV3Qm94PSIwIDAgODYuMDgyMSAxMC42MjI4NjIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzk3MyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4zICgyNDA1NTQ2LCAyMDE4LTAzLTExKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iYXBwbHkta25hcHAuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzOTY3IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIwLjM1IgogICAgIGlua3NjYXBlOmN4PSItMTkzLjAzOTQ1IgogICAgIGlua3NjYXBlOmN5PSItNDc0LjIxMTAyIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMTE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTk3MCI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyLjg5OTQyNywtMTIuNzQyMTM5KSI+CiAgICA8ZwogICAgICAgaWQ9Imc5NjUiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS40MjMyMSwtMTMyLjY5ODUyKSI+CiAgICAgIDxyZWN0CiAgICAgICAgIHJ4PSIxLjQ0NDc1NjciCiAgICAgICAgIHJ5PSIxLjQ0NDc1NjciCiAgICAgICAgIHk9IjE0NS41NjU2NiIKICAgICAgICAgeD0iMTQuNDQ3NjM3IgogICAgICAgICBoZWlnaHQ9IjEwLjM3Mjg2MiIKICAgICAgICAgd2lkdGg9Ijg1LjgzMjEiCiAgICAgICAgIGlkPSJyZWN0OTU2IgogICAgICAgICBzdHlsZT0ib3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiMxNmExZTc7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMxNmExZTc7c3Ryb2tlLXdpZHRoOjAuMjQ5OTk5OTk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICA8dGV4dAogICAgICAgICBpZD0idGV4dDk2MCIKICAgICAgICAgeT0iMTUyLjAzNTA1IgogICAgICAgICB4PSI1MS4xMzM0MDQiCiAgICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTozLjUyNzc3NzY3cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTonRGVqYVZ1IFNhbnMnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0RlamFWdSBTYW5zJztsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzIiCiAgICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbgogICAgICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo0LjkzODg4OTAzcHg7Zm9udC1mYW1pbHk6J0Ryb2lkIFNhbnMnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0Ryb2lkIFNhbnMnO2ZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzMiIKICAgICAgICAgICB5PSIxNTIuMDM1MDUiCiAgICAgICAgICAgeD0iNTEuMTMzNDA0IgogICAgICAgICAgIGlkPSJ0c3Bhbjk1OCIKICAgICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIj5BcHBseTwvdHNwYW4+PC90ZXh0PgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="},216:function(t,n,e){"use strict";e.r(n),n.default=e.p+"assets/images/trn-servosettings-6cdd8fe42bf2395c77b8e7dd34bc881d.svg"}}]);