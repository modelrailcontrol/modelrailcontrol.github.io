(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),c=(n(0),n(157)),l={title:"Konfigurera"},i={id:"clients/cmc-02-config",isDocsHomePage:!1,title:"Konfigurera",description:"N\xe4r nu programvaran \xe4r installerad, beh\xf6ver det g\xf6ras en del inst\xe4llningar f\xf6r att f\xe5 det hela att fungera som du vill.",source:"@site/docs/clients/cmc-02-config.md",permalink:"/docs/clients/cmc-02-config",editUrl:"https://github.com/modelrailcontrol/MRC-documentation/docs/clients/cmc-02-config.md",sidebar:"Enheter",previous:{title:"Installera",permalink:"/docs/clients/cmc-01-install"},next:{title:"Starta & fels\xf6k",permalink:"/docs/clients/cmc-03-start"}},o=[{value:"Statisk IP-adress",id:"statisk-ip-adress",children:[]},{value:"DHCP-server",id:"dhcp-server",children:[]},{value:"Accesspunkt",id:"accesspunkt",children:[]}],s={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"N\xe4r nu programvaran \xe4r installerad, beh\xf6ver det g\xf6ras en del inst\xe4llningar f\xf6r att f\xe5 det hela att fungera som du vill."),Object(c.b)("h2",{id:"statisk-ip-adress"},"Statisk IP-adress"),Object(c.b)("p",null,"Nu ska vi konfigurera en statiskt IP-adress f\xf6r RPi"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"B\xf6rja med att starta textredigeraren ",Object(c.b)("inlineCode",{parentName:"li"},"nano")," f\xf6r att redigera dhcpcd.conf:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    sudo nano /etc/dhcpcd.conf\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Skriv in f\xf6ljande rader i slutet av filen:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    interface wlan0\n        static ip_address=192.168.4.1/24\n        nohook wpa_supplicant\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Spara sen filen (ctrl-o) och avsluta nano (ctrl-x)")),Object(c.b)("h2",{id:"dhcp-server"},"DHCP-server"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Nu ska DHCP-servern startas om s\xe5 den f\xe5r k\xe4nnedom om den fasta IP-adressen:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    sudo service dhcpcd restart\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"DHCP-servern ska nu konfigureras, men f\xf6rst kopierar vi undan originalfilen som vi inte har nytta av men vill bevara intakt:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig\n    sudo nano /etc/dnsmasq.conf\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"L\xe4gg in f\xf6ljande text i filen:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    interface=wlan0      # Wireless interface wlan0\n      dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h\n")),Object(c.b)("p",null,'Vi talar allts\xe5 om att f\xf6r n\xe4tverket wlan0 ska vi kunna dela ut IP-adresser mellan 192.168.4.2 och 192.168.4.20, med en "l\xe5netid" p\xe5 24 timmar.'),Object(c.b)("h2",{id:"accesspunkt"},"Accesspunkt"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"B\xf6rja med att skapa en ny konfigurationsfil")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    sudo nano /etc/hostapd/hostapd.conf\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"L\xe4gg sedan in f\xf6ljande text i den:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    interface=wlan0\n    driver=nl80211\n    ssid=NameOfNetwork\n    hw_mode=g\n    channel=7\n    wmm_enabled=0\n    macaddr_acl=0\n    auth_algs=1\n    ignore_broadcast_ssid=0\n    wpa=2\n    wpa_passphrase=AardvarkBadgerHedgehog\n    wpa_key_mgmt=WPA-PSK\n    wpa_pairwise=TKIP\n    rsn_pairwise=CCMP\n")),Object(c.b)("p",null,'H\xe4r har vi sagt att vi ska anv\xe4nda n\xe4tverkets kanal 7, det ska ha namnet (SSID) "NameOfNetwork" och l\xf6senord "AardvarkBadgerHedgehog". Observera att varken n\xe4tverksnamnet (SSID) eller l\xf6senordet ska omges av citationstecken. L\xf6senordet m\xe5ste vara mellan 8 och 64 tecken l\xe5ngt.'),Object(c.b)("p",null,"Raden hw_mode best\xe4mmer vilken n\xe4tverksstandard du anv\xe4nder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    a = IEEE 802.11a (5 GHz)\n    b = IEEE 802.11b (2.4 GHz)\n    g = IEEE 802.11g (2.4 GHz)\n    ad = IEEE 802.11ad (60 GHz).\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"N\xe4r du sen sparar filen, f\xe5r du kanske \xe5terigen ange dess s\xf6kv\xe4g och namn (/etc/hostapd/hostapd.conf)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Till sist ska vi tala om f\xf6r systemet var denna konfigurationsfil finns:"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"    sudo nano /etc/default/hostapd\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Leta reda p\xe5 raden ",Object(c.b)("inlineCode",{parentName:"li"},'#DAEMON_CONF=""')," och \xe4ndra den till (observera att # ska bort):")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'    DAEMON_CONF="/etc/hostapd/hostapd.conf"\n')))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);