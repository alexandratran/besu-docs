"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4940],{80643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=t(85893),r=t(11151);const i={title:"Privacy",sidebar_position:1,description:"Privacy"},a="Privacy",o={id:"private-networks/concepts/privacy/index",title:"Privacy",description:"Privacy",source:"@site/versioned_docs/version-23.10.2/private-networks/concepts/privacy/index.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/",permalink:"/23.10.2/private-networks/concepts/privacy/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/concepts/privacy/index.md",tags:[],version:"23.10.2",lastUpdatedAt:1715184527,formattedLastUpdatedAt:"May 8, 2024",sidebarPosition:1,frontMatter:{title:"Privacy",sidebar_position:1,description:"Privacy"},sidebar:"privateDocSidebar",previous:{title:"Proof of authority consensus",permalink:"/23.10.2/private-networks/concepts/poa"},next:{title:"Private transactions",permalink:"/23.10.2/private-networks/concepts/privacy/private-transactions/"}},c={},p=[{value:"Private transaction manager",id:"private-transaction-manager",level:2},{value:"Privacy-enabled networks",id:"privacy-enabled-networks",level:2},{value:"Reorg-compatible privacy",id:"reorg-compatible-privacy",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"privacy",children:"Privacy"}),"\n",(0,s.jsx)(n.p,{children:"In Besu, privacy refers to the ability to keep transactions private between the involved participants. Other participants cannot access the transaction content or list of participants."}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.p,{children:"For production environments requiring private transactions:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We recommend using a network with a consensus mechanism supporting transaction finality. For example, ",(0,s.jsx)(n.a,{href:"/23.10.2/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Tessera must be ",(0,s.jsx)(n.a,{href:"/23.10.2/private-networks/how-to/use-privacy/tessera",children:"highly available and run in a separate instance to Besu"}),"."]}),"\n"]}),(0,s.jsxs)(n.p,{children:["Using private transactions with ",(0,s.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/data-storage-formats#pruning",children:"pruning"})," or ",(0,s.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#sync-mode",children:"fast sync"})," isn't supported."]})]}),"\n",(0,s.jsx)(n.h2,{id:"private-transaction-manager",children:"Private transaction manager"}),"\n",(0,s.jsxs)(n.p,{children:["Besu uses a private transaction manager, ",(0,s.jsx)(n.a,{href:"https://docs.tessera.consensys.net/",children:"Tessera"}),", to implement privacy. Each Besu node that sends or receives ",(0,s.jsx)(n.a,{href:"/23.10.2/private-networks/concepts/privacy/private-transactions/",children:"private transactions"})," requires an associated Tessera node."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tessera Nodes",src:t(35645).Z+"",width:"731",height:"807"})})}),"\n",(0,s.jsx)(n.p,{children:"Private transactions pass from the Besu node to the associated Tessera node. The Tessera node encrypts and directly distributes (that is, point-to-point) the private transaction to the Tessera nodes participating in the transaction."}),"\n",(0,s.jsxs)(n.p,{children:["By default, each participant in a privacy-enabled network uses its own Besu and Tessera node. ",(0,s.jsx)(n.a,{href:"/23.10.2/private-networks/concepts/privacy/multi-tenancy",children:"Multi-tenancy"})," allows more than one participant to use the same Besu and Tessera node."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Private Transaction Managers are also known as Enclaves."})}),"\n",(0,s.jsx)(n.h2,{id:"privacy-enabled-networks",children:"Privacy-enabled networks"}),"\n",(0,s.jsxs)(n.p,{children:["When enabling privacy in a ",(0,s.jsx)(n.a,{href:"/23.10.2/private-networks/get-started/system-requirements",children:"private network"}),", there's an assumed level of trust among the node operators, since all are members of the private network."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Inefficient contracts deployed accidentally or deliberately can cause performance issues in privacy-enabled networks because gas isn't required in private transactions."})}),"\n",(0,s.jsx)(n.p,{children:"In contrast, gas is required in Ethereum Mainnet and public testnets because they are trustless environments."}),"\n",(0,s.jsx)(n.p,{children:"Privacy-enabled networks should have a mechanism to establish trust offchain. Node operators should be informed on:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Guidelines for use, responsibilities, and good behavior."}),"\n",(0,s.jsx)(n.li,{children:"Smart contract security, so contracts deployed on the network use resources efficiently."}),"\n",(0,s.jsx)(n.li,{children:"Consequences for malicious activity."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Privacy-enabled networks should run development and test environments that closely resemble production, so contracts can be tested, and potential issues can be found before they're deployed in production."}),"\n",(0,s.jsx)(n.h2,{id:"reorg-compatible-privacy",children:"Reorg-compatible privacy"}),"\n",(0,s.jsx)(n.p,{children:"In v1.4, using private transactions in a network using a consensus mechanism where forks occur (that is, PoW algorithms or Clique) is an early access feature."}),"\n",(0,s.jsx)(n.p,{children:"Do not use private transactions in production environments using consensus mechanisms where forks occur."})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},35645:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/TesseraNodes-ea2944d12c284fc0bad69e7c3f898817.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);