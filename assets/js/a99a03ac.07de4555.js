"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[13470],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),b=i,h=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return n?a.createElement(h,r(r({ref:e},p),{},{components:n})):a.createElement(h,r({ref:e},p))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},36601:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={title:"Transaction validation",sidebar_position:3,description:"What transaction validation and when",tags:["public networks","private networks"]},r="Transaction validation",s={unversionedId:"public-networks/concepts/transactions/validation",id:"public-networks/concepts/transactions/validation",title:"Transaction validation",description:"What transaction validation and when",source:"@site/docs/public-networks/concepts/transactions/validation.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/validation",permalink:"/development/public-networks/concepts/transactions/validation",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/transactions/validation.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1696026935,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:3,frontMatter:{title:"Transaction validation",sidebar_position:3,description:"What transaction validation and when",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction pool",permalink:"/development/public-networks/concepts/transactions/pool"},next:{title:"Network ID and chain ID",permalink:"/development/public-networks/concepts/network-and-chain-id"}},c={},l=[],p={toc:l};function d(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transaction-validation"},"Transaction validation"),(0,i.kt)("p",null,"For transactions submitted and added to a block, Besu validates the transactions, as illustrated in the following diagram."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction Validation",src:n(53636).Z,width:"1380",height:"1310"})),(0,i.kt)("p",null,"Besu repeats the set of transaction pool validations after propagating the transaction. Besu repeats the same set of validations when importing the block that includes the transaction, except the nonce must be exactly right when importing the block."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Private transactions are not added to the transaction pool. The privacy marker transaction is submitted to the transaction pool but the private transaction itself is directly distributed to the transaction participants.")),(0,i.kt)("p",null,"When adding the transaction to a block, Besu performs an additional validation to check that the transaction gas limit is less than the remaining block gas limit. After creating a block, the node imports the block and then repeats the transaction pool validations."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The transaction is only added if the entire transaction gas limit is less than the remaining gas for the block. The total gas used by the transaction is not relevant to this validation. That is, if the total gas used by the transaction is less than the remaining block gas, but the transaction gas limit is more than the remaining block gas, the transaction is not added.")))}d.isMDXComponent=!0},53636:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/transaction-validation-3e8deafb4d76b8cab2bc1d341ebeb0a9.png"}}]);