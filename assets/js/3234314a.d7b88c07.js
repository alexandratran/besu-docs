"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[33268],{77709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(85893),r=n(11151);const s={title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",sidebar_position:6,tags:["private networks"]},i="Access private and privacy marker transactions",c={id:"private-networks/how-to/use-privacy/access-private-transactions",title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",source:"@site/docs/private-networks/how-to/use-privacy/access-private-transactions.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/access-private-transactions",permalink:"/development/private-networks/how-to/use-privacy/access-private-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/use-privacy/access-private-transactions.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1717518223,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:6,frontMatter:{title:"Access private and privacy marker transactions",description:"Methods for accessing and managing private transactions and privacy groups in Hyperledger Besu",sidebar_position:6,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use flexible privacy groups",permalink:"/development/private-networks/how-to/use-privacy/flexible"},next:{title:"Sign privacy marker transactions",permalink:"/development/private-networks/how-to/use-privacy/sign-pmts"}},o={},p=[{value:"Transaction receipts",id:"transaction-receipts",level:2},{value:"Transactions",id:"transactions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"access-private-and-privacy-marker-transactions",children:"Access private and privacy marker transactions"}),"\n",(0,a.jsxs)(t.p,{children:["A Hyperledger Besu private transaction creates a ",(0,a.jsx)(t.a,{href:"/development/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction"})," and the private transaction itself."]}),"\n",(0,a.jsx)(t.h2,{id:"transaction-receipts",children:"Transaction receipts"}),"\n",(0,a.jsx)(t.p,{children:"With the transaction hash returned when submitting the private transaction, to get the transaction receipt for the:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Private transaction, use ",(0,a.jsx)(t.a,{href:"/development/private-networks/reference/api/#priv_gettransactionreceipt",children:(0,a.jsx)(t.code,{children:"priv_getTransactionReceipt"})}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Privacy marker transaction, use ",(0,a.jsx)(t.a,{href:"/development/public-networks/reference/api/#eth_gettransactionreceipt",children:(0,a.jsx)(t.code,{children:"eth_getTransactionReceipt"})}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The transaction receipt includes a ",(0,a.jsx)(t.code,{children:"status"})," indicating if the transaction failed (",(0,a.jsx)(t.code,{children:"0x0"}),"), succeeded (",(0,a.jsx)(t.code,{children:"0x1"}),"), or was invalid (",(0,a.jsx)(t.code,{children:"0x2"}),")."]}),"\n",(0,a.jsx)(t.admonition,{title:"Private transaction failure example",type:"note",children:(0,a.jsxs)(t.p,{children:["To deploy a private contract, you submit a transaction using ",(0,a.jsx)(t.a,{href:"/development/private-networks/how-to/send-transactions/private-transactions",children:(0,a.jsx)(t.code,{children:"eea_sendRawTransaction"})}),". If contract deployment fails because of insufficient gas, the privacy marker transaction receipt has a status of success and the private transaction receipt has a status of failure."]})}),"\n",(0,a.jsx)(t.h2,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsx)(t.p,{children:"With the transaction hash returned when submitting the private transaction, to get the:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Private transaction, use ",(0,a.jsx)(t.a,{href:"/development/private-networks/reference/api/#priv_getprivatetransaction",children:(0,a.jsx)(t.code,{children:"priv_getPrivateTransaction"})}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Privacy marker transaction, use ",(0,a.jsx)(t.a,{href:"/development/public-networks/reference/api/#eth_gettransactionbyhash",children:(0,a.jsx)(t.code,{children:"eth_getTransactionByHash"})}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);