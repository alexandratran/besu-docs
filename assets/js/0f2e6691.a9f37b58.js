"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[52326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,a(a({ref:t},l),{},{components:n})):r.createElement(k,a({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Public key infrastructure",sidebar_position:5,description:"Public key infrastructure",tags:["private networks"]},a="Public key infrastructure",s={unversionedId:"private-networks/concepts/pki",id:"private-networks/concepts/pki",title:"Public key infrastructure",description:"Public key infrastructure",source:"@site/docs/private-networks/concepts/pki.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/pki",permalink:"/development/private-networks/concepts/pki",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/pki.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1692298666,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:5,frontMatter:{title:"Public key infrastructure",sidebar_position:5,description:"Public key infrastructure",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Permissioning plugin",permalink:"/development/private-networks/concepts/permissioning/plugin"},next:{title:"Plugins",permalink:"/development/private-networks/concepts/plugins"}},p={},c=[{value:"Node permissioning",id:"node-permissioning",level:2},{value:"Block proposal permissioning",id:"block-proposal-permissioning",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"public-key-infrastructure"},"Public key infrastructure"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Public key infrastructure (PKI) support is an early access feature, and functionality and options may be updated between releases.")),(0,o.kt)("p",null,"Hyperledger Besu's public key infrastructure allows you to use certificates issued by a trusted authority to manage node and account identities in the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node permissioning - Only authorized nodes can connect to other nodes in the network using TLS for the P2P communication."),(0,o.kt)("li",{parentName:"ul"},"Block proposal permissioning - Only blocks proposed by authorized validators are accepted.")),(0,o.kt)("p",null,"Supported keystore and truststore formats used to store the certificates include PKCS11, PKCS12, and JKS."),(0,o.kt)("h2",{id:"node-permissioning"},"Node permissioning"),(0,o.kt)("p",null,"Allow TLS communication between nodes by using certificates issued by a trusted authority to connect to other authorized nodes in the network."),(0,o.kt)("p",null,"When receiving connection requests, the incoming connection must be from another authorized node. Similarly, when connecting to a node the initiator ensures that the remote node is authorized to participate in the network."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/tls/p2p"},"Configure TLS for the P2P communication using the Besu command line options"),"."),(0,o.kt)("h2",{id:"block-proposal-permissioning"},"Block proposal permissioning"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only private networks using the ",(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/consensus/qbft"},"QBFT consensus protocol")," support block proposal permissioning.")),(0,o.kt)("p",null,"Use certificates issued by a trusted authority to ensure only authorized validator nodes can propose new blocks in the network. The block hash is signed by the validator private certificate and included in the header of the proposed block as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cryptographic_Message_Syntax"},"CMS (Cryptographic Message Syntax)"),". This is used by other validators to verify that the proposer is authorized to create a block in the network."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/development/private-networks/how-to/configure/block-proposal-permissioning"},"Configure block proposal permissioning using the Besu command line options"),"."))}d.isMDXComponent=!0}}]);