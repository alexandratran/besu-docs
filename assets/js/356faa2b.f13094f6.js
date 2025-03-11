"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7773],{72027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453);const o={sidebar_label:"Node synchronization",sidebar_position:4,description:"Learn about node synchronization for private networks.",tags:["private networks"]},i="Node synchronization for private networks",c={id:"private-networks/concepts/node-sync-private",title:"Node synchronization for private networks",description:"Learn about node synchronization for private networks.",source:"@site/docs/private-networks/concepts/node-sync-private.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/node-sync-private",permalink:"/private-networks/concepts/node-sync-private",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/node-sync-private.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1741732361e3,sidebarPosition:4,frontMatter:{sidebar_label:"Node synchronization",sidebar_position:4,description:"Learn about node synchronization for private networks.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Permissioning plugin",permalink:"/private-networks/concepts/permissioning/plugin"},next:{title:"Plugins",permalink:"/private-networks/concepts/plugins"}},a={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"node-synchronization-for-private-networks",children:"Node synchronization for private networks"})}),"\n",(0,s.jsxs)(n.p,{children:["For private, permissioned blockchain networks, Besu uses the same ",(0,s.jsx)(n.a,{href:"/public-networks/concepts/node-sync",children:"synchronization\nmodes as public networks"}),", but with specific configurations\nfor private network needs."]}),"\n",(0,s.jsx)(n.p,{children:"To sync Besu on a private network:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure all nodes use compatible sync modes and configurations."}),"\n",(0,s.jsx)(n.li,{children:"Configure the network with a custom genesis file."}),"\n",(0,s.jsx)(n.li,{children:"Set the network ID and bootnodes specific to your private network."}),"\n",(0,s.jsx)(n.li,{children:"Implement permissioning features to control network access."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following is an overview of the private network sync modes.\nSelect the sync mode based on your network's requirements and node purposes."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Sync mode"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Requirements"}),(0,s.jsx)(n.th,{children:"Limitations"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/public-networks/concepts/node-sync#snap-synchronization",children:"Snap"})}),(0,s.jsx)(n.td,{children:"Recommended for fastest sync and lowest storage requirements on Mainnet. Downloads as many leaves of the trie as possible and reconstructs the trie locally. Faster than fast sync."}),(0,s.jsx)(n.td,{children:"Besu version 24.3.0 or later"}),(0,s.jsx)(n.td,{children:"Cannot switch from fast sync to snap sync mid-process."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/public-networks/concepts/node-sync#checkpoint-synchronization",children:"Checkpoint"})}),(0,s.jsx)(n.td,{children:"Syncs from a specific checkpoint block configured in the genesis file. Fastest sync mode with lowest storage requirements."}),(0,s.jsx)(n.td,{children:"Besu version 22.4.3 or later"}),(0,s.jsx)(n.td,{children:"Not supported for QBFT or IBFT 2.0 networks without a checkpoint configuration."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/public-networks/concepts/node-sync#fast-synchronization-deprecated",children:"Fast"})}),(0,s.jsx)(n.td,{children:"Downloads block headers and transaction receipts, verifies chain from genesis block."}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"Deprecated. Not supported with private transactions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/public-networks/concepts/node-sync#full-synchronization",children:"Full"})}),(0,s.jsx)(n.td,{children:"Default for all private networks. Downloads and verifies the entire blockchain and state from genesis block, building an archive node with full state history."}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"Slowest sync mode, requires the most disk space."})]})]})]}),"\n",(0,s.jsxs)(n.admonition,{title:"Early access feature",type:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--Xsnapsync-bft-enabled"})," is an early access feature available in Besu version 24.7.1 and later.\nIt is not stable, so use this option with caution."]}),(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"--Xsnapsync-bft-enabled"})," with ",(0,s.jsx)(n.code,{children:"--sync-mode=SNAP"})," to enable snap sync in QBFT and IBFT 2.0 private networks."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);