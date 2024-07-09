"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2797],{56071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151);const s={title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",sidebar_position:2,tags:["private networks"]},i="Send concurrent private transactions",o={id:"private-networks/how-to/send-transactions/concurrent-private-transactions",title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",source:"@site/versioned_docs/version-23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/concurrent-private-transactions",permalink:"/23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions.md",tags:[{label:"private networks",permalink:"/23.10.3/tags/private-networks"}],version:"23.10.3",lastUpdatedAt:1720198197,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:2,frontMatter:{title:"Send concurrent private transactions",description:"Creating and sending concurrent private transactions with Hyperledger Besu",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create and send private transactions",permalink:"/23.10.3/private-networks/how-to/send-transactions/private-transactions"},next:{title:"Include revert reason",permalink:"/23.10.3/private-networks/how-to/send-transactions/revert-reason"}},c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"send-concurrent-private-transactions",children:"Send concurrent private transactions"}),"\n",(0,r.jsxs)(n.p,{children:["Private transaction processing involves two transactions, the private transaction and the ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction (PMT)"}),". The private transaction and the PMT each have their own ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/#nonces",children:"nonce"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If your private transaction rate requires sending private transactions without waiting for the previous private transaction to be mined, using ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_gettransactioncount",children:(0,r.jsx)(n.code,{children:"eth_getTransactionCount"})})," and ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,r.jsx)(n.code,{children:"eea_sendRawTransaction"})})," may result in ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/#private-nonce-management",children:"incorrect nonces"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In this case, use ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/send-transactions/private-transactions#priv_distributerawtransaction",children:(0,r.jsx)(n.code,{children:"priv_distributeRawTransaction"})})," instead of ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,r.jsx)(n.code,{children:"eea_sendRawTransaction"})}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_gettransactioncount",children:(0,r.jsx)(n.code,{children:"priv_getTransactionCount"})})," or ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_geteeatransactioncount",children:(0,r.jsx)(n.code,{children:"priv_getEeaTransactionCount"})})," to get the nonce for an account for the specified privacy group or participants."]})}),"\n",(0,r.jsxs)(n.p,{children:["Send the corresponding PMT using ",(0,r.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_sendrawtransaction",children:(0,r.jsx)(n.code,{children:"eth_sendRawTransaction"})}),", specifying the public PMT nonce. This method allows you to create and send the PMT yourself rather than ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,r.jsx)(n.code,{children:"eea_sendRawTransaction"})})," handling the PMT."]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.code,{children:"priv_distributeRawTransaction"})," to distribute transactions with consecutive nonces for the same account, the corresponding PMTs must use one account with the nonces in the same order as the private transactions."]}),(0,r.jsx)(n.p,{children:"This is to ensure that the private transactions are executed in the correct order."})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/ConsenSys/web3js-quorum/tree/master/example/concurrentPrivateTransactions",children:"web3js-quorum library"})," includes an example of how to send concurrent private transactions. The example uses ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/privacy-groups",children:"offchain privacy groups"}),". Use ",(0,r.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_getprivacyprecompileaddress",children:(0,r.jsx)(n.code,{children:"priv_getPrivacyPrecompileAddress"})})," to get the precompile address to specify in the ",(0,r.jsx)(n.code,{children:"to"})," field when creating the PMT."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);