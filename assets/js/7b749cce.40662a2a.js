"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[26606],{33608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const i={title:"Create and send transactions",sidebar_position:4,description:"Send transactions using eth_call or eth_sendRawTransaction.",tags:["public networks"]},o="Create and send transactions",a={id:"public-networks/how-to/send-transactions",title:"Create and send transactions",description:"Send transactions using eth_call or eth_sendRawTransaction.",source:"@site/versioned_docs/version-23.7.3/public-networks/how-to/send-transactions.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/send-transactions",permalink:"/23.7.3/public-networks/how-to/send-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/how-to/send-transactions.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"}],version:"23.7.3",lastUpdatedAt:1711474639,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:4,frontMatter:{title:"Create and send transactions",sidebar_position:4,description:"Send transactions using eth_call or eth_sendRawTransaction.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Use a configuration file",permalink:"/23.7.3/public-networks/how-to/configuration-file"},next:{title:"Configure static nodes",permalink:"/23.7.3/public-networks/how-to/connect/static-nodes"}},c={},d=[{value:"<code>eth_call</code> vs <code>eth_sendRawTransaction</code>",id:"eth_call-vs-eth_sendrawtransaction",level:2},{value:"Use wallets for key management",id:"use-wallets-for-key-management",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-and-send-transactions",children:"Create and send transactions"}),"\n",(0,s.jsxs)(n.p,{children:["You can send signed transactions using the ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#eth_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})})," JSON-RPC API method."]}),"\n",(0,s.jsxs)(n.p,{children:["Signed transactions can be simple value transfers, contract creation, or contract invocation. Set the maximum transaction fee for transactions using the ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-tx-feecap",children:(0,s.jsx)(n.code,{children:"--rpc-tx-feecap"})})," CLI option."]}),"\n",(0,s.jsxs)(n.p,{children:["To accept signed transactions from remote connections, set the ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/use-besu-api/#service-hosts",children:"API listening host"})," to ",(0,s.jsx)(n.code,{children:"0.0.0.0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/develop/client-libraries",children:"Use client libraries"})," to create and send a signed raw transaction to transfer Ether and create a smart contract."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Private keys",type:"danger",children:[(0,s.jsx)(n.p,{children:"Don't use the accounts from the examples on Mainnet or any public network except for testing. The private keys are displayed which means the accounts are not secure."}),(0,s.jsxs)(n.p,{children:["All accounts and private keys in the examples are from the ",(0,s.jsx)(n.code,{children:"dev.json"})," genesis file in the ",(0,s.jsx)(n.a,{href:"https://github.com/hyperledger/besu/tree/master/config/src/main/resources",children:(0,s.jsx)(n.code,{children:"/besu/config/src/main/resources"})})," directory."]}),(0,s.jsxs)(n.p,{children:["In production environments avoid exposing your private keys by creating signed transactions offline, or use ",(0,s.jsx)(n.a,{href:"https://docs.ethsigner.consensys.net/",children:"EthSigner"})," to isolate your private keys and sign transactions with ",(0,s.jsx)(n.a,{href:"https://docs.ethsigner.consensys.net/Reference/API-Methods#eth_sendtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendTransaction"})}),"."]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Setting the ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/use-besu-api/#service-hosts",children:"listening host"})," to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," exposes the API service connection on your node to any remote connection. In a production environment, ensure you are using a firewall to avoid exposing your node to the internet."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Libraries such as ",(0,s.jsx)(n.a,{href:"https://github.com/web3j/web3j",children:"web3j"})," or ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum/ethereumj",children:"ethereumj"})," and tools such as ",(0,s.jsx)(n.a,{href:"https://mycrypto.com/",children:"MyCrypto"})," can also create signed transactions."]})}),"\n",(0,s.jsxs)(n.h2,{id:"eth_call-vs-eth_sendrawtransaction",children:[(0,s.jsx)(n.code,{children:"eth_call"})," vs ",(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can interact with contracts using ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#eth_call",children:(0,s.jsx)(n.code,{children:"eth_call"})})," or ",(0,s.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#eth_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})}),". The table below compares the characteristics of both calls."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"eth_call"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Read-only"}),(0,s.jsx)(n.td,{children:"Write"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Invokes contract function locally"}),(0,s.jsx)(n.td,{children:"Broadcasts to the network"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Does not change state of blockchain"}),(0,s.jsx)(n.td,{children:"Updates the blockchain (for example, transfers ether between accounts)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Does not consume gas"}),(0,s.jsx)(n.td,{children:"Requires gas"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Synchronous"}),(0,s.jsx)(n.td,{children:"Asynchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Returns the value of a contract function available immediately"}),(0,s.jsx)(n.td,{children:"Returns transaction hash only. A block might not include all possible transactions (for example, if the gas price is too low)."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"use-wallets-for-key-management",children:"Use wallets for key management"}),"\n",(0,s.jsx)(n.p,{children:"Besu doesn't support key management inside the client. Use:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://docs.ethsigner.consensys.net/en/latest/",children:"EthSigner"})," with Besu to provide access to your key store and sign transactions."]}),"\n",(0,s.jsxs)(n.li,{children:["Third-party tools (for example, ",(0,s.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"})," and ",(0,s.jsx)(n.a,{href:"https://web3j.io/",children:"web3j"}),") for creating accounts."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"http://docs.ethsigner.consensys.net/en/latest/",children:"EthSigner"})," implements ",(0,s.jsx)(n.a,{href:"https://docs.ethsigner.consensys.net/Reference/API-Methods#eth_sendtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendTransaction"})})," and ",(0,s.jsx)(n.a,{href:"https://docs.ethsigner.consensys.net/Reference/API-Methods#eea_sendtransaction",children:(0,s.jsx)(n.code,{children:"eea_sendTransaction"})}),"."]})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);