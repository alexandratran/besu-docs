"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7208],{17398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"private-networks/how-to/use-privacy/web3js-quorum","title":"Use the web3js-quorum library","description":"web3js-quorum client library","source":"@site/docs/private-networks/how-to/use-privacy/web3js-quorum.md","sourceDirName":"private-networks/how-to/use-privacy","slug":"/private-networks/how-to/use-privacy/web3js-quorum","permalink":"/private-networks/how-to/use-privacy/web3js-quorum","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/web3js-quorum.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1743632019000,"sidebarPosition":8,"frontMatter":{"title":"Use the web3js-quorum library","description":"web3js-quorum client library","sidebar_position":8,"tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"Sign privacy marker transactions","permalink":"/private-networks/how-to/use-privacy/sign-pmts"},"next":{"title":"Privacy best practices","permalink":"/private-networks/how-to/use-privacy/performance-best-practices"}}');var a=r(74848),s=r(28453),i=r(65537),o=r(79329);const u={title:"Use the web3js-quorum library",description:"web3js-quorum client library",sidebar_position:8,tags:["private networks"]},l="Use the web3js-quorum client library (Deprecated)",c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add web3js-quorum to project",id:"add-web3js-quorum-to-project",level:2},{value:"Initialize the web3js-quorum client",id:"initialize-the-web3js-quorum-client",level:2},{value:"Deploy a contract with <code>generateAndSendRawTransaction</code>",id:"deploy-a-contract-with-generateandsendrawtransaction",level:2},{value:"web3js-quorum methods",id:"web3js-quorum-methods",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"use-the-web3js-quorum-client-library-deprecated",children:"Use the web3js-quorum client library (Deprecated)"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["Tessera-based privacy is deprecated in Besu version 24.12.0 and later. Please read this ",(0,a.jsx)(t.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:"web3js-quorum"})," is an Ethereum JavaScript library extending ",(0,a.jsx)(t.a,{href:"https://github.com/ethereum/web3.js/",children:"web3.js"})," that adds support for Besu-specific JSON-RPC APIs and features. Use the library to create and send RLP-encoded transactions using JSON-RPC."]}),"\n",(0,a.jsx)(t.admonition,{title:"important",type:"caution",children:(0,a.jsx)(t.p,{children:"web3js-quorum supports JSON-RPC over HTTP only."})}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsxs)(t.p,{children:["web3js-quorum includes all ",(0,a.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum.js",children:"quorum.js"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/ConsenSys/web3js-eea",children:"web3js-eea"})," features."]}),(0,a.jsx)(t.p,{children:"If migrating to web3js-quorum, update your JavaScript code as indicated in the following examples."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/tutorial-Migrate%20from%20web3js-eea.html",children:"Read the migration guide for more information about updating your code."})})]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node.js (version > 10)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/ChainSafe/web3.js#installation",children:"The web3 library must be installed in your project"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"add-web3js-quorum-to-project",children:"Add web3js-quorum to project"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install web3js-quorum\n"})}),"\n",(0,a.jsx)(t.h2,{id:"initialize-the-web3js-quorum-client",children:"Initialize the web3js-quorum client"}),"\n",(0,a.jsxs)(t.p,{children:["Initialize your client where ",(0,a.jsx)(t.code,{children:"<JSON-RPC HTTP endpoint>"})," is the JSON-RPC HTTP endpoint of your\nBesu node.\nSpecified by the ",(0,a.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-host",children:(0,a.jsx)(t.code,{children:"--rpc-http-host"})}),"\nand ",(0,a.jsx)(t.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,a.jsx)(t.code,{children:"--rpc-http-port"})})," command\nline options."]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(o.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("<JSON-RPC HTTP endpoint>"));\n'})})}),(0,a.jsx)(o.A,{value:"Example",label:"Example",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("http://localhost:8545"));\n'})})})]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["When migrating from web3js-eea to web3js-quorum, use ",(0,a.jsx)(t.code,{children:"Web3Quorum"}),". The constructor doesn't require the chain ID anymore. Chain ID is automatically retrieved from the chain using the specified JSON-RPC HTTP endpoint."]})}),"\n",(0,a.jsxs)(t.h2,{id:"deploy-a-contract-with-generateandsendrawtransaction",children:["Deploy a contract with ",(0,a.jsx)(t.code,{children:"generateAndSendRawTransaction"})]}),"\n",(0,a.jsxs)(t.p,{children:["To deploy a private contract, you need the contract binary. You can use ",(0,a.jsx)(t.a,{href:"https://solidity.readthedocs.io/en/develop/using-the-compiler.html",children:"Solidity"})," to get the contract binary."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:"title=\"Deploying a contract with 'web3.priv.generateAndSendRawTransaction'\"",children:'const contractOptions = {\n  data: `0x123`, // contract binary\n  privateFrom: "tesseraNode1PublicKey",\n  privateFor: ["tesseraNode3PublicKey"],\n  privateKey: "besuNode1PrivateKey",\n};\nreturn web3.priv.generateAndSendRawTransaction(contractOptions);\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"web3.priv.generateAndSendRawTransaction(contractOptions)"})," returns the transaction hash. To get the private transaction receipt, use ",(0,a.jsx)(t.code,{children:"web3.priv.waitForTransactionReceipt(txHash)"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"web3js-quorum-methods",children:"web3js-quorum methods"}),"\n",(0,a.jsxs)(t.p,{children:["For more information about the web3js-quorum methods, see the ",(0,a.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/index.html",children:"web3js-quorum reference documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}},65537:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),a=r(18215),s=r(65627),i=r(56347),o=r(50372),u=r(30604),l=r(11861),c=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=b({queryString:r,groupId:a}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),w=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{w&&u(w)}),[w]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=r(9136);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=o[r].value;a!==n&&(l(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",w.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(x,{...t,...e})]})}function g(e){const t=(0,j.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(t))}},79329:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}}}]);