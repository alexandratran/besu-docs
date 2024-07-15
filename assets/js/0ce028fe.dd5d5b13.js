"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[56068],{47311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(85893),s=t(11151);const r={title:"Network ID and chain ID",sidebar_position:5,description:"Learn about network ID and chain ID in Besu.",tags:["public networks","private networks"]},o="Network ID and chain ID",c={id:"public-networks/concepts/network-and-chain-id",title:"Network ID and chain ID",description:"Learn about network ID and chain ID in Besu.",source:"@site/versioned_docs/version-24.1.0/public-networks/concepts/network-and-chain-id.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/network-and-chain-id",permalink:"/24.1.0/public-networks/concepts/network-and-chain-id",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/concepts/network-and-chain-id.md",tags:[{label:"public networks",permalink:"/24.1.0/tags/public-networks"},{label:"private networks",permalink:"/24.1.0/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1721053198,formattedLastUpdatedAt:"Jul 15, 2024",sidebarPosition:5,frontMatter:{title:"Network ID and chain ID",sidebar_position:5,description:"Learn about network ID and chain ID in Besu.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction validation",permalink:"/24.1.0/public-networks/concepts/transactions/validation"},next:{title:"Events and logs",permalink:"/24.1.0/public-networks/concepts/events-and-logs"}},a={},d=[{value:"Specify a different network ID",id:"specify-a-different-network-id",level:2},{value:"Start a new chain with a new chain ID",id:"start-a-new-chain-with-a-new-chain-id",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"network-id-and-chain-id",children:"Network ID and chain ID"}),"\n",(0,i.jsx)(n.p,{children:"Ethereum networks have two identifiers, a network ID and a chain ID. Although they often have the same value, they have different uses."}),"\n",(0,i.jsxs)(n.p,{children:["Peer-to-peer communication between nodes uses the ",(0,i.jsx)(n.em,{children:"network ID"}),", while the transaction signature process uses the ",(0,i.jsx)(n.em,{children:"chain ID"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md",children:"EIP-155"})," introduced using the chain ID as part of the transaction signing process to protect against transaction replay attacks."]})}),"\n",(0,i.jsx)(n.p,{children:"For most networks, including Mainnet and the public testnets, the network ID and the chain ID are the same, with the network ID defaulting to the chain ID, as specified in the genesis file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Chain ID in the genesis file"',children:'{\n  "config": {\n    "ethash": {\n    },\n    "chainID": 1981\n  },\n  ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Besu sets the chain ID (and by default the network ID) automatically, using either the ",(0,i.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#genesis-file",children:(0,i.jsx)(n.code,{children:"--genesis-file"})})," option or when specifying a network using the ",(0,i.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#network",children:(0,i.jsx)(n.code,{children:"--network"})})," option. The following table lists the available networks and their chain and network IDs."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Network"}),(0,i.jsx)(n.th,{children:"Chain"}),(0,i.jsx)(n.th,{children:"Chain ID"}),(0,i.jsx)(n.th,{children:"Network ID"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mainnet"})}),(0,i.jsx)(n.td,{children:"ETH"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Production"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"goerli"})}),(0,i.jsx)(n.td,{children:"ETH"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"Test"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"sepolia"})}),(0,i.jsx)(n.td,{children:"ETH"}),(0,i.jsx)(n.td,{children:"11155111"}),(0,i.jsx)(n.td,{children:"11155111"}),(0,i.jsx)(n.td,{children:"Test"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dev"})}),(0,i.jsx)(n.td,{children:"ETH"}),(0,i.jsx)(n.td,{children:"2018"}),(0,i.jsx)(n.td,{children:"2018"}),(0,i.jsx)(n.td,{children:"Development"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"classic"})}),(0,i.jsx)(n.td,{children:"ETC"}),(0,i.jsx)(n.td,{children:"61"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Production"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mordor"})}),(0,i.jsx)(n.td,{children:"ETC"}),(0,i.jsx)(n.td,{children:"63"}),(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"Test"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The Ropsten, Rinkeby, and Kiln testnets are deprecated."})}),"\n",(0,i.jsx)(n.h2,{id:"specify-a-different-network-id",children:"Specify a different network ID"}),"\n",(0,i.jsxs)(n.p,{children:["Usually the network ID is the same as the chain ID, but if you want to separate specific nodes from the rest of the network so they can't connect or synchronize with other nodes, you can override the default network ID for those nodes using the ",(0,i.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#network-id",children:(0,i.jsx)(n.code,{children:"--network-id"})})," option."]}),"\n",(0,i.jsx)(n.h2,{id:"start-a-new-chain-with-a-new-chain-id",children:"Start a new chain with a new chain ID"}),"\n",(0,i.jsxs)(n.p,{children:["If you update the chain ID (or network ID) of existing nodes, they can no longer peer with other nodes in the network. Nodes need to have a matching ",(0,i.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/genesis-file",children:"genesis file"}),", including the chain ID, in order to peer. In this case, you're effectively running two chains that can't communicate with each other."]}),"\n",(0,i.jsx)(n.p,{children:"To change a chain ID and start a new chain:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Stop all your nodes using ",(0,i.jsx)("kbd",{children:"ctrl+c"})," in each terminal window."]}),"\n",(0,i.jsxs)(n.li,{children:["Update the ",(0,i.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/genesis-file",children:"genesis file"})," with the new chain ID."]}),"\n",(0,i.jsx)(n.li,{children:"Make sure all nodes have the same genesis file."}),"\n",(0,i.jsx)(n.li,{children:"Delete the old data directory or point to a new location for each node."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/24.1.0/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode",children:"Restart the nodes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Warning",type:"danger",children:[(0,i.jsx)(n.p,{children:"Starting a new chain is starting from block zero."}),(0,i.jsx)(n.p,{children:"This means when you start a new chain with a new chain ID, you lose all previous data."})]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);