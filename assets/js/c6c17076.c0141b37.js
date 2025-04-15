"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8546],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}},76837:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"private-networks/concepts/permissioning/onchain","title":"Onchain permissioning","description":"Onchain permissioning","source":"@site/docs/private-networks/concepts/permissioning/onchain.md","sourceDirName":"private-networks/concepts/permissioning","slug":"/private-networks/concepts/permissioning/onchain","permalink":"/private-networks/concepts/permissioning/onchain","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/permissioning/onchain.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744743967000,"sidebarPosition":1,"frontMatter":{"title":"Onchain permissioning","description":"Onchain permissioning","sidebar_position":1,"tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"Permissioning","permalink":"/private-networks/concepts/permissioning/"},"next":{"title":"Permissioning plugin","permalink":"/private-networks/concepts/permissioning/plugin"}}');var o=i(74848),t=i(28453);const r={title:"Onchain permissioning",description:"Onchain permissioning",sidebar_position:1,tags:["private networks"]},c="Onchain permissioning (Deprecated)",a={},l=[{value:"Permissioning contracts",id:"permissioning-contracts",level:2},{value:"Allowlists",id:"allowlists",level:3},{value:"Bootnodes",id:"bootnodes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"onchain-permissioning-deprecated",children:"Onchain permissioning (Deprecated)"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Onchain permissioning is deprecated in Besu version 24.12.0 and later. Please read this ",(0,o.jsx)(n.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]})}),"\n",(0,o.jsxs)(n.p,{children:["Onchain ",(0,o.jsx)(n.a,{href:"/private-networks/concepts/permissioning/",children:"permissioning"})," uses smart contracts to store and administer the node, account, and admin allowlists. Using onchain permissioning enables all nodes to read the allowlists from a single source, the blockchain."]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"When using onchain account permissioning, a node checks permissions when importing blocks. Meaning, a node only imports blocks in which all transactions are from authorized senders. If you disable onchain account permissioning and your node accepts blocks without enforcing this rule, your node cannot re-synchronize with other nodes that enforce onchain account permissioning rules (your node goes into forked state)."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Custom smart contracts and dapps can be implemented to work with onchain permissioning."})}),"\n",(0,o.jsx)(n.h2,{id:"permissioning-contracts",children:"Permissioning contracts"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["The permissioning contract has multiple interfaces, and each interface maps to a specific version of the ",(0,o.jsx)(n.a,{href:"https://entethalliance.org/technical-specifications/",children:"Enterprise Ethereum Alliance Client Specification"}),". Ensure that you ",(0,o.jsx)(n.a,{href:"/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version",children:"specify the permissioning contract interface"})," being used when starting Besu."]})}),"\n",(0,o.jsx)(n.h3,{id:"allowlists",children:"Allowlists"}),"\n",(0,o.jsx)(n.p,{children:"Permissioning implements three allowlists:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Accounts, which can submit transactions to the network."}),"\n",(0,o.jsx)(n.li,{children:"Nodes, which can join the network."}),"\n",(0,o.jsx)(n.li,{children:"Admins, which are accounts able to update the accounts and nodes allowlists."}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{title:"Using account permissioning and privacy",type:"caution",children:[(0,o.jsxs)(n.p,{children:["Account permissioning is incompatible with ",(0,o.jsx)(n.a,{href:"/private-networks/how-to/use-privacy/sign-pmts",children:"random key signing"})," for ",(0,o.jsx)(n.a,{href:"/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transactions"}),"."]}),(0,o.jsxs)(n.p,{children:["If using account permissioning and privacy, a signing key must be specified using the ",(0,o.jsx)(n.a,{href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file-deprecated",children:(0,o.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})})," command line option and the corresponding public key included in the accounts allowlist."]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["If nodes are not connecting as expected, set the ",(0,o.jsxs)(n.a,{href:"/public-networks/reference/cli/options#logging",children:["log level to ",(0,o.jsx)(n.code,{children:"TRACE"})]})," and search for messages containing ",(0,o.jsx)(n.code,{children:"Node permissioning"})," to identify the issue."]}),(0,o.jsxs)(n.p,{children:["Ensure the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-host",children:(0,o.jsx)(n.code,{children:"--p2p-host"})})," command line option has been correctly configured for all nodes with the externally accessible address."]}),(0,o.jsx)(n.p,{children:"If you change your network configuration, you may need to update the node allowlist."})]}),"\n",(0,o.jsx)(n.h2,{id:"bootnodes",children:"Bootnodes"}),"\n",(0,o.jsxs)(n.p,{children:["When a node joins the network, the node connects to the ",(0,o.jsx)(n.a,{href:"/private-networks/how-to/configure/bootnodes",children:"bootnodes"})," until it synchronizes to the chain head, regardless of node permissions. After synchronization, the Account Rules and Node Rules smart contracts apply the permissioning rules."]}),"\n",(0,o.jsx)(n.p,{children:"If a synchronized node loses all peer connections (that is, it has zero peers), it reconnects to the bootnodes to rediscover peers."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"All bootnodes must be on the nodes allowlist."})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);