"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[17299],{23562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(74848),s=t(28453),a=t(11470),i=t(19365);const o={title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},c="Configure free gas networks",l={id:"private-networks/how-to/configure/free-gas",title:"Free gas network",description:"Configuring free gas networks",source:"@site/versioned_docs/version-24.5.2/private-networks/how-to/configure/free-gas.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/free-gas",permalink:"/24.5.2/private-networks/how-to/configure/free-gas",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/private-networks/how-to/configure/free-gas.md",tags:[{inline:!0,label:"private networks",permalink:"/24.5.2/tags/private-networks"}],version:"24.5.2",lastUpdatedAt:1721885633e3,sidebarPosition:2,frontMatter:{title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Add and remove validators without voting",permalink:"/24.5.2/private-networks/how-to/configure/consensus/add-validators-without-voting"},next:{title:"Bootnodes",permalink:"/24.5.2/private-networks/how-to/configure/bootnodes"}},u={},d=[{value:"Configure free gas in Besu",id:"configure-free-gas-in-besu",level:2},{value:"1. Set the block size",id:"1-set-the-block-size",level:3},{value:"2. Set the contract size",id:"2-set-the-contract-size",level:3},{value:"3. Start Besu with a minimum gas price of zero",id:"3-start-besu-with-a-minimum-gas-price-of-zero",level:3},{value:"4. Enable zero base fee if using London fork or later",id:"4-enable-zero-base-fee-if-using-london-fork-or-later",level:3},{value:"Configure free gas in Hardhat",id:"configure-free-gas-in-hardhat",level:2},{value:"Update <code>hardhat.config.js</code>",id:"update-hardhatconfigjs",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-free-gas-networks",children:"Configure free gas networks"}),"\n",(0,r.jsx)(n.p,{children:"Transactions use computational resources so have an associated cost. Gas is the cost unit and the gas price is the price per gas unit. The transaction cost is the gas used * gas price."}),"\n",(0,r.jsx)(n.p,{children:"In public networks, the account submitting the transaction pays the transaction cost, in Ether. The miner (or validator in PoA networks) that includes the transaction in a block receives transaction cost."}),"\n",(0,r.jsx)(n.p,{children:"In many private networks, network participants run the validators and do not require gas as an incentive. Networks that don't require gas as an incentive usually configure the gas price to be zero (that is, free gas). Some private networks might allocate Ether and use a non-zero gas price to limit resource use."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We use the term ",(0,r.jsx)(n.em,{children:"free gas network"})," to refer to a network with a gas price of zero. A network with a gas price of zero is also known as a ",(0,r.jsx)(n.em,{children:"zero gas network"})," or ",(0,r.jsx)(n.em,{children:"no gas network"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Some pre-crafted transactions require the deployment account to have gas available. For example, the transaction that creates the smart contract in ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1820",children:"EIP-1820"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"In a free gas network, transactions still use gas but the gas price is zero, meaning the transaction cost is zero. Transaction cost = gas used * 0 (the gas price)."}),"\n",(0,r.jsx)(n.h2,{id:"configure-free-gas-in-besu",children:"Configure free gas in Besu"}),"\n",(0,r.jsx)(n.p,{children:"When gas is free, limiting block and contract sizes is less important. In free gas networks, we increase the block size limit and set the contract size limit to the maximum value."}),"\n",(0,r.jsx)(n.h3,{id:"1-set-the-block-size",children:"1. Set the block size"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to remove gas from consideration and don't mind blocks potentially taking longer to create, in the genesis file set the block size limit (measured in gas) to the maximum accepted by Hardhat (",(0,r.jsx)(n.code,{children:"0x1fffffffffffff"}),"). In the genesis file, specify ",(0,r.jsx)(n.code,{children:"gasLimit"})," following the ",(0,r.jsx)(n.code,{children:"config"})," key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n  ....\n  },\n  ...\n  "gasLimit": "0x1fffffffffffff",\n  ....\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If you are more concerned about blocks arriving on time and don't have expensive individual transactions, set ",(0,r.jsx)(n.code,{children:"gasLimit"})," to a value closer to the amount of gas your validators can process in the configured block time."]}),"\n",(0,r.jsx)(n.h3,{id:"2-set-the-contract-size",children:"2. Set the contract size"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"config"})," section of the genesis file, set the contract size limit to the maximum supported size (in bytes)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'(\n  "config": {\n    ...\n    "contractSizeLimit": 2147483647,\n    ...\n  }\n  ...\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-start-besu-with-a-minimum-gas-price-of-zero",children:"3. Start Besu with a minimum gas price of zero"}),"\n",(0,r.jsxs)(n.p,{children:["When starting nodes, set the ",(0,r.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#min-gas-price",children:"minimum gas price"})," to zero."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Command line",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"--min-gas-price=0\n"})})}),(0,r.jsx)(i.A,{value:"Configuration file",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"min-gas-price=0\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,r.jsxs)(n.p,{children:["In a free gas network, ensure the ",(0,r.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#min-gas-price",children:"minimum gas price"})," is set to zero for every node. Any node with a minimum gas price set higher than zero will silently drop transactions with a zero gas price. You can query a node's gas configuration using ",(0,r.jsx)(n.a,{href:"/24.5.2/public-networks/reference/api/#eth_gasprice",children:(0,r.jsx)(n.code,{children:"eth_gasPrice"})}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"4-enable-zero-base-fee-if-using-london-fork-or-later",children:"4. Enable zero base fee if using London fork or later"}),"\n",(0,r.jsxs)(n.p,{children:["If your network is configured to use the ",(0,r.jsx)(n.code,{children:"londonBlock"})," or a later hard fork, then you must also enable the ",(0,r.jsx)(n.code,{children:"zeroBaseFee"})," configuration. You must set this on all your nodes. Once it is set, future blocks produced by that node will set a ",(0,r.jsx)(n.code,{children:"baseFee"})," of 0. This is required because the London hard fork (EIP-1559) introduced a non-zero ",(0,r.jsx)(n.code,{children:"baseFee"})," into the block which normally means transactions require gas."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "londonBlock": 0,\n    "zeroBaseFee": true,\n    ...\n  },\n  ...\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If zero base fee is enabled, you cannot specify a value for ",(0,r.jsx)(n.a,{href:"/24.5.2/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,r.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-free-gas-in-hardhat",children:"Configure free gas in Hardhat"}),"\n",(0,r.jsx)(n.p,{children:"If using Hardhat to develop on your free gas network, you also need to configure free gas in Hardhat."}),"\n",(0,r.jsx)(n.p,{children:"Like setting block and contract size limits to their maximum values for Besu, set the transaction gas limit in Hardhat to the maximum possible."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Besu does not support private key management. To use Besu with Hardhat, you must configure a ",(0,r.jsx)(n.a,{href:"/24.5.2/public-networks/how-to/develop/hardhat",children:"Hardhat wallet"}),"."]})}),"\n",(0,r.jsxs)(n.h3,{id:"update-hardhatconfigjs",children:["Update ",(0,r.jsx)(n.code,{children:"hardhat.config.js"})]}),"\n",(0,r.jsxs)(n.p,{children:["Update the ",(0,r.jsx)(n.code,{children:"hardhat.config.js"})," file:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set the gas price to zero."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"gasPrice: 0;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set the gas limit for a transaction (that is, contract creation) to be the block gas limit - 1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'gas: "0x1ffffffffffffe";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Setting ",(0,r.jsx)(n.code,{children:"gasPrice"})," to ",(0,r.jsx)(n.code,{children:"0"})," should cover transaction costs for most deployments."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Specify ",(0,r.jsx)(n.code,{children:"evmVersion"})," when using the latest Solidity version."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'solidity: {\n   version: "0.8.20",\n   settings: {\n     evmVersion: "london", // required for Besu\n     optimizer: {...},\n   },\n },\n'})}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(18215),a=t(23104),i=t(56347),o=t(205),c=t(57485),l=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=p({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=l??g;return f({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(l(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);