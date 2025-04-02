"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7773],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}},69110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"private-networks/concepts/node-sync-private","title":"Node synchronization for private networks","description":"Learn about node synchronization for private networks.","source":"@site/docs/private-networks/concepts/node-sync-private.md","sourceDirName":"private-networks/concepts","slug":"/private-networks/concepts/node-sync-private","permalink":"/private-networks/concepts/node-sync-private","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/node-sync-private.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1743632019000,"sidebarPosition":4,"frontMatter":{"sidebar_label":"Node synchronization","sidebar_position":4,"description":"Learn about node synchronization for private networks.","tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"Permissioning plugin","permalink":"/private-networks/concepts/permissioning/plugin"},"next":{"title":"Plugins","permalink":"/private-networks/concepts/plugins"}}');var r=t(74848),o=t(28453);const i={sidebar_label:"Node synchronization",sidebar_position:4,description:"Learn about node synchronization for private networks.",tags:["private networks"]},c="Node synchronization for private networks",a={},d=[];function l(e){const n={a:"a",h1:"h1",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"node-synchronization-for-private-networks",children:"Node synchronization for private networks"})}),"\n",(0,r.jsxs)(n.p,{children:["For private, permissioned blockchain networks, Besu uses the same ",(0,r.jsx)(n.a,{href:"/public-networks/concepts/node-sync",children:"synchronization\nmodes as public networks"}),", but with specific configurations\nfor private network needs."]}),"\n",(0,r.jsx)(n.p,{children:"To sync Besu on a private network:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure all nodes use compatible sync modes and configurations."}),"\n",(0,r.jsx)(n.li,{children:"Configure the network with a custom genesis file."}),"\n",(0,r.jsx)(n.li,{children:"Set the network ID and bootnodes specific to your private network."}),"\n",(0,r.jsx)(n.li,{children:"Implement permissioning features to control network access."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following is an overview of the private network sync modes.\nSelect the sync mode based on your network's requirements and node purposes."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Sync mode"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Requirements"}),(0,r.jsx)(n.th,{children:"Limitations"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/public-networks/concepts/node-sync#snap-synchronization",children:"Snap"})}),(0,r.jsx)(n.td,{children:"Recommended for fastest sync and lowest storage requirements on Mainnet. Downloads as many leaves of the trie as possible and reconstructs the trie locally. Faster than fast sync."}),(0,r.jsx)(n.td,{children:"Besu version 24.3.0 or later"}),(0,r.jsx)(n.td,{children:"Cannot switch from fast sync to snap sync mid-process."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/public-networks/concepts/node-sync#checkpoint-synchronization",children:"Checkpoint"})}),(0,r.jsx)(n.td,{children:"Syncs from a specific checkpoint block configured in the genesis file. Fastest sync mode with lowest storage requirements."}),(0,r.jsx)(n.td,{children:"Besu version 22.4.3 or later"}),(0,r.jsx)(n.td,{children:"Not supported for QBFT or IBFT 2.0 networks without a checkpoint configuration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/public-networks/concepts/node-sync#fast-synchronization-deprecated",children:"Fast"})}),(0,r.jsx)(n.td,{children:"Downloads block headers and transaction receipts, verifies chain from genesis block."}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"Deprecated. Not supported with private transactions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/public-networks/concepts/node-sync#full-synchronization",children:"Full"})}),(0,r.jsx)(n.td,{children:"Default for all private networks. Downloads and verifies the entire blockchain and state from genesis block, building an archive node with full state history."}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"Slowest sync mode, requires the most disk space."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);