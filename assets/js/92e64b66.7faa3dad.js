"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[17757],{5916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(85893),a=t(11151);const r={description:"Private transaction overview"},s="Private transactions",c={id:"private-networks/concepts/privacy/private-transactions/index",title:"Private transactions",description:"Private transaction overview",source:"@site/versioned_docs/version-23.10.3/private-networks/concepts/privacy/private-transactions/index.md",sourceDirName:"private-networks/concepts/privacy/private-transactions",slug:"/private-networks/concepts/privacy/private-transactions/",permalink:"/23.10.3/private-networks/concepts/privacy/private-transactions/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/private-networks/concepts/privacy/private-transactions/index.md",tags:[],version:"23.10.3",lastUpdatedAt:1709905432,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{description:"Private transaction overview"},sidebar:"privateDocSidebar",previous:{title:"Privacy",permalink:"/23.10.3/private-networks/concepts/privacy/"},next:{title:"Private transaction processing",permalink:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing"}},o={},d=[{value:"Besu and Tessera keys",id:"besu-and-tessera-keys",level:2},{value:"Nonces",id:"nonces",level:2},{value:"Private transaction nonce",id:"private-transaction-nonce",level:3},{value:"Private nonce validation",id:"private-nonce-validation",level:3},{value:"Private nonce management",id:"private-nonce-management",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"private-transactions",children:"Private transactions"}),"\n",(0,i.jsx)(n.p,{children:"Private transactions have the same parameters as public Ethereum transactions, with the following additions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateFrom"})," - The Tessera public key of the transaction sender."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"One of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"privateFor"})," - The Tessera public keys of the transaction recipients."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"privacyGroupId"})," - ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/privacy-groups",children:"The privacy group to receive the transaction"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"restriction"})," - Whether the private transaction is ",(0,i.jsx)(n.code,{children:"restricted"})," or ",(0,i.jsx)(n.code,{children:"unrestricted"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"restricted"})," - Only the nodes participating in the transaction receive and store the payload of the private transaction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"unrestricted"})," - All nodes in the network receive the payload of the private transaction, but only the nodes participating in the transaction can read the transaction."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Besu implements ",(0,i.jsx)(n.code,{children:"restricted"})," private transactions only."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"gas"})," and ",(0,i.jsx)(n.code,{children:"gasPrice"})," are used by the ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction (PMT)"}),", not the private transaction itself."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Because gas isn't required in private transactions, inefficient contracts deployed accidentally or deliberately can cause performance issues in privacy-enabled networks. Ensure your network has a mechanism to ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/#privacy-enabled-networks",children:"establish trust offchain"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/send-transactions/private-transactions",children:"create and send private transactions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"besu-and-tessera-keys",children:"Besu and Tessera keys"}),"\n",(0,i.jsxs)(n.p,{children:["Besu and Tessera nodes both have public/private key pairs identifying them. A Besu node sending a private transaction to a Tessera node signs the transaction with the Besu node private key. The ",(0,i.jsx)(n.code,{children:"privateFrom"})," and ",(0,i.jsx)(n.code,{children:"privateFor"})," parameters specified in the RLP-encoded transaction string for ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,i.jsx)(n.code,{children:"eea_sendRawTransaction"})})," are the public keys of the Tessera nodes sending and receiving the transaction."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The mapping of Besu node addresses to Tessera node public keys is offchain. That is, the sender of a private transaction must know the Tessera node public key of the recipient."})}),"\n",(0,i.jsx)(n.h2,{id:"nonces",children:"Nonces"}),"\n",(0,i.jsx)(n.p,{children:"A nonce is the number of previous transactions made by the sender."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"Private transaction processing"})," involves two transactions: the private transaction distributed to involved participants, and the privacy marker transaction (PMT) included on the public blockchain. Each of these transactions has its own nonce. Since the PMT is a public transaction, the PMT nonce is the public nonce for the account."]}),"\n",(0,i.jsx)(n.h3,{id:"private-transaction-nonce",children:"Private transaction nonce"}),"\n",(0,i.jsxs)(n.p,{children:["Besu maintains separate private states for each ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/privacy-groups",children:"privacy group"}),". The private transaction nonce for an account is specific to the privacy group. That is, the nonce for account A for privacy group ABC is different to the nonce for account A for privacy group AB."]}),"\n",(0,i.jsx)(n.h3,{id:"private-nonce-validation",children:"Private nonce validation"}),"\n",(0,i.jsxs)(n.p,{children:["Unlike public transactions, private transactions are not submitted to the ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/transactions/pool",children:"transaction pool"}),". The private transaction is distributed directly to the participants in the transaction, and the PMT is submitted to the transaction pool."]}),"\n",(0,i.jsxs)(n.p,{children:["Unlike ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/transactions/validation",children:"public transaction nonces"}),", private transaction nonces aren't validated when the private transaction is submitted. If a private transaction has an incorrect nonce, the PMT is still valid and is added to a block. However, in this scenario, the private transaction execution fails when ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/concepts/privacy/private-transactions/processing",children:"processing the PMT"})," for the private transaction with the incorrect nonce."]}),"\n",(0,i.jsx)(n.p,{children:"The following private transaction flow illustrates when nonce validation occurs:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Submit a private transaction with a ",(0,i.jsx)(n.a,{href:"#private-transaction-nonce",children:"nonce value"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The private transaction is distributed to all participants in the privacy group."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The PMT is created and submitted to the transaction pool with a nonce of ",(0,i.jsx)(n.code,{children:"0"})," if using one-time accounts. If using a specific account with ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file",children:(0,i.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})}),", the public nonce for that account is obtained and used for the PMT."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The PMT is mined and included in the block."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After the block containing the PMT is imported, and the PMT is processed, the private transaction is retrieved from the private transaction manager and executed."}),"\n",(0,i.jsx)(n.p,{children:"If the private transaction was submitted with a correct nonce in step 1, the nonce is validated as correct. If an incorrect nonce was submitted, the private transaction execution fails."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"private-nonce-management",children:"Private nonce management"}),"\n",(0,i.jsxs)(n.p,{children:["In Besu, you call ",(0,i.jsx)(n.a,{href:"/23.10.3/public-networks/reference/api/#eth_gettransactioncount",children:(0,i.jsx)(n.code,{children:"eth_getTransactionCount"})})," to get a nonce, then use that nonce with ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#eea_sendrawtransaction",children:(0,i.jsx)(n.code,{children:"eea_sendRawTransaction"})})," to send a private transaction."]}),"\n",(0,i.jsxs)(n.p,{children:["However, when you send multiple transactions in row, if a subsequent call to ",(0,i.jsx)(n.code,{children:"getTransactionCount"})," happens before a previous transaction is processed, you can get the same nonce again."]}),"\n",(0,i.jsx)(n.p,{children:"You can manage private nonces in multiple ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Let Besu handle it. You just need to wait long enough between calls to ",(0,i.jsx)(n.code,{children:"sendRawTransaction"})," for the transactions to process. The current window is around 1.5 seconds, depending on block time."]}),"\n",(0,i.jsxs)(n.p,{children:["Public transactions deal with this issue, but the window is shorter, since you can use the transaction pool to take into account pending transactions (by using ",(0,i.jsx)(n.code,{children:'eth_getTransactionCount("pending")'}),")."]}),"\n",(0,i.jsx)(n.p,{children:"For private transactions, the window is longer because private transactions aren't submitted to the transaction pool. You must wait until the private transaction's corresponding PMT is included in a block."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Manage the nonce yourself, by keeping track of and providing the nonce at each call. We recommend this if you're ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions",children:"sending many transactions that are independent of each other"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_gettransactioncount",children:(0,i.jsx)(n.code,{children:"priv_getTransactionCount"})})," or ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/reference/api/#priv_geteeatransactioncount",children:(0,i.jsx)(n.code,{children:"priv_getEeaTransactionCount"})})," to get the nonce for an account for the specified privacy group or participants."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"https://docs.orchestrate.consensys.net/en/stable/",children:"Orchestrate"})," for nonce management. We recommend this for enterprise use."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/ConsenSys/web3js-quorum/blob/9a0f9eb1b91a4a0d93801f77782b509ae2e7314c/example/concurrentPrivateTransactions/concurrentPrivateTransactions.js",children:"web3js-quorum library includes an example"})," of nonce management when ",(0,i.jsx)(n.a,{href:"/23.10.3/private-networks/how-to/send-transactions/concurrent-private-transactions",children:"sending concurrent private transactions"}),". The example calculates the correct nonces for the private transactions and PMTs outside of Besu."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);