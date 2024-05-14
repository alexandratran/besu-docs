"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51474],{28018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(85893),a=r(11151),s=r(74866),o=r(85162);const i={title:"Use the web3js-quorum library",description:"web3js-quorum client library",sidebar_position:8,tags:["private networks"]},u="Use the web3js-quorum client library",l={id:"private-networks/how-to/use-privacy/web3js-quorum",title:"Use the web3js-quorum library",description:"web3js-quorum client library",source:"@site/docs/private-networks/how-to/use-privacy/web3js-quorum.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/web3js-quorum",permalink:"/development/private-networks/how-to/use-privacy/web3js-quorum",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/web3js-quorum.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1715646519,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:8,frontMatter:{title:"Use the web3js-quorum library",description:"web3js-quorum client library",sidebar_position:8,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Sign privacy marker transactions",permalink:"/development/private-networks/how-to/use-privacy/sign-pmts"},next:{title:"Performance best practices",permalink:"/development/private-networks/how-to/use-privacy/performance-best-practices"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add web3js-quorum to project",id:"add-web3js-quorum-to-project",level:2},{value:"Initialize the web3js-quorum client",id:"initialize-the-web3js-quorum-client",level:2},{value:"Deploy a contract with <code>generateAndSendRawTransaction</code>",id:"deploy-a-contract-with-generateandsendrawtransaction",level:2},{value:"web3js-quorum methods",id:"web3js-quorum-methods",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-the-web3js-quorum-client-library",children:"Use the web3js-quorum client library"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:"web3js-quorum"})," is an Ethereum JavaScript library extending ",(0,n.jsx)(t.a,{href:"https://github.com/ethereum/web3.js/",children:"web3.js"})," that adds support for Besu-specific JSON-RPC APIs and features. Use the library to create and send RLP-encoded transactions using JSON-RPC."]}),"\n",(0,n.jsx)(t.admonition,{title:"important",type:"caution",children:(0,n.jsx)(t.p,{children:"web3js-quorum supports JSON-RPC over HTTP only."})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["web3js-quorum includes all ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum.js",children:"quorum.js"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/web3js-eea",children:"web3js-eea"})," features."]}),(0,n.jsx)(t.p,{children:"If migrating to web3js-quorum, update your JavaScript code as indicated in the following examples."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/tutorial-Migrate%20from%20web3js-eea.html",children:"Read the migration guide for more information about updating your code."})})]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node.js (version > 10)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ChainSafe/web3.js#installation",children:"The web3 library must be installed in your project"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"add-web3js-quorum-to-project",children:"Add web3js-quorum to project"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install web3js-quorum\n"})}),"\n",(0,n.jsx)(t.h2,{id:"initialize-the-web3js-quorum-client",children:"Initialize the web3js-quorum client"}),"\n",(0,n.jsxs)(t.p,{children:["Initialize your client where ",(0,n.jsx)(t.code,{children:"<JSON-RPC HTTP endpoint>"})," is the JSON-RPC HTTP endpoint of your\nHyperledger Besu node.\nSpecified by the ",(0,n.jsx)(t.a,{href:"/development/public-networks/reference/cli/options#rpc-http-host",children:(0,n.jsx)(t.code,{children:"--rpc-http-host"})}),"\nand ",(0,n.jsx)(t.a,{href:"/development/public-networks/reference/cli/options#rpc-http-port",children:(0,n.jsx)(t.code,{children:"--rpc-http-port"})})," command\nline options."]}),"\n",(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("<JSON-RPC HTTP endpoint>"));\n'})})}),(0,n.jsx)(o.Z,{value:"Example",label:"Example",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("http://localhost:8545"));\n'})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When migrating from web3js-eea to web3js-quorum, use ",(0,n.jsx)(t.code,{children:"Web3Quorum"}),". The constructor doesn't require the chain ID anymore. Chain ID is automatically retrieved from the chain using the specified JSON-RPC HTTP endpoint."]})}),"\n",(0,n.jsxs)(t.h2,{id:"deploy-a-contract-with-generateandsendrawtransaction",children:["Deploy a contract with ",(0,n.jsx)(t.code,{children:"generateAndSendRawTransaction"})]}),"\n",(0,n.jsxs)(t.p,{children:["To deploy a private contract, you need the contract binary. You can use ",(0,n.jsx)(t.a,{href:"https://solidity.readthedocs.io/en/develop/using-the-compiler.html",children:"Solidity"})," to get the contract binary."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"title=\"Deploying a contract with 'web3.priv.generateAndSendRawTransaction'\"",children:'const contractOptions = {\n  data: `0x123`, // contract binary\n  privateFrom: "tesseraNode1PublicKey",\n  privateFor: ["tesseraNode3PublicKey"],\n  privateKey: "besuNode1PrivateKey",\n};\nreturn web3.priv.generateAndSendRawTransaction(contractOptions);\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"web3.priv.generateAndSendRawTransaction(contractOptions)"})," returns the transaction hash. To get the private transaction receipt, use ",(0,n.jsx)(t.code,{children:"web3.priv.waitForTransactionReceipt(txHash)"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"web3js-quorum-methods",children:"web3js-quorum methods"}),"\n",(0,n.jsxs)(t.p,{children:["For more information about the web3js-quorum methods, see the ",(0,n.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/index.html",children:"web3js-quorum reference documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),a=r(36905),s=r(12466),o=r(16550),i=r(20469),u=r(91980),l=r(67392),c=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=b({queryString:r,groupId:a}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),w=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{w&&u(w)}),[w]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=r(72389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",w.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function g(e){const t=(0,j.Z)();return(0,f.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(67294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);