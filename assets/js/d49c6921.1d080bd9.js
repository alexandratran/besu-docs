"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[14331],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),v=a,y=d["".concat(s,".").concat(v)]||d[v]||l[v]||p;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=v;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},1848:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const p={title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",sidebar_position:2,tags:["private networks"]},i="Use Besu-extended privacy",o={unversionedId:"private-networks/how-to/use-privacy/besu-extended",id:"version-23.7.1/private-networks/how-to/use-privacy/besu-extended",title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/use-privacy/besu-extended.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/besu-extended",permalink:"/23.7.1/private-networks/how-to/use-privacy/besu-extended",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/use-privacy/besu-extended.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1697653984,formattedLastUpdatedAt:"Oct 18, 2023",sidebarPosition:2,frontMatter:{title:"Use Besu-extended privacy",description:"Hyperledger Besu-extended privacy",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use EEA-compliant privacy",permalink:"/23.7.1/private-networks/how-to/use-privacy/eea-compliant"},next:{title:"Run Tessera with Besu",permalink:"/23.7.1/private-networks/how-to/use-privacy/tessera"}},s={},c=[{value:"Privacy group type",id:"privacy-group-type",level:2}],u={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-besu-extended-privacy"},"Use Besu-extended privacy"),(0,a.kt)("p",null,"Hyperledger Besu provides an extended implementation of privacy allowing you to ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/concepts/privacy/privacy-groups"},"create a privacy group for a set of participants"),". You must specify the privacy group ID when sending private transactions."),(0,a.kt)("p",null,"To enable the ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/reference/api/#priv-methods"},(0,a.kt)("inlineCode",{parentName:"a"},"PRIV")," API methods"),", use the ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/cli/options#rpc-http-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-http-api"))," or ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/public-networks/reference/cli/options#rpc-ws-api"},(0,a.kt)("inlineCode",{parentName:"a"},"--rpc-ws-api"))," command line options."),(0,a.kt)("p",null,"To create the privacy group containing the recipients of a private transaction, use ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/reference/api/#priv_createprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup")),"."),(0,a.kt)("p",null,"To create an EEA-compliant private transaction, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"privacyGroupId")," when creating the signed transaction passed as an input parameter to ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/reference/api/#eea_sendrawtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eea_sendRawTransaction")),"."),(0,a.kt)("h2",{id:"privacy-group-type"},"Privacy group type"),(0,a.kt)("p",null,"Privacy groups created using ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/reference/api/#priv_createprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_createPrivacyGroup"))," have a ",(0,a.kt)("inlineCode",{parentName:"p"},"BESU")," privacy group type when returned by ",(0,a.kt)("a",{parentName:"p",href:"/23.7.1/private-networks/reference/api/#priv_findprivacygroup"},(0,a.kt)("inlineCode",{parentName:"a"},"priv_findPrivacyGroup")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "privacyGroupId": "GpK3ErNO0xF27T0sevgkJ3+4qk9Z+E3HtXYxcKIBKX8=",\n      "name": "Group B",\n      "description": "Description of Group B",\n      "type": "BESU",\n      "members": [\n        "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=",\n        "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw="\n      ]\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);