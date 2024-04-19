"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[45440],{10713:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(85893),o=t(11151);const r={title:"Data storage formats",sidebar_position:3,description:"Learn about storing data using Forest of Tries and Bonsai Tries.",tags:["public networks"]},a="Data storage formats",i={id:"public-networks/concepts/data-storage-formats",title:"Data storage formats",description:"Learn about storing data using Forest of Tries and Bonsai Tries.",source:"@site/docs/public-networks/concepts/data-storage-formats.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/data-storage-formats",permalink:"/development/public-networks/concepts/data-storage-formats",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/data-storage-formats.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1713464890,formattedLastUpdatedAt:"Apr 18, 2024",sidebarPosition:3,frontMatter:{title:"Data storage formats",sidebar_position:3,description:"Learn about storing data using Forest of Tries and Bonsai Tries.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Attestations",permalink:"/development/public-networks/concepts/proof-of-stake/attestations"},next:{title:"Transaction types",permalink:"/development/public-networks/concepts/transactions/types"}},d={},c=[{value:"Bonsai Tries",id:"bonsai-tries",level:2},{value:"Forest of Tries",id:"forest-of-tries",level:2},{value:"Forest of Tries vs. Bonsai Tries",id:"forest-of-tries-vs-bonsai-tries",level:2},{value:"Storage requirements",id:"storage-requirements",level:3},{value:"Accessing data",id:"accessing-data",level:3},{value:"Syncing nodes",id:"syncing-nodes",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"data-storage-formats",children:"Data storage formats"}),"\n",(0,n.jsxs)(s.p,{children:["Besu offers two formats for storing the world state, ",(0,n.jsx)(s.a,{href:"#bonsai-tries",children:"Bonsai Tries"})," and ",(0,n.jsx)(s.a,{href:"#forest-of-tries",children:"Forest of Tries"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"bonsai-tries",children:"Bonsai Tries"}),"\n",(0,n.jsx)(s.p,{children:"Bonsai Tries is a data storage layout policy designed to reduce storage requirements and increase read performance."}),"\n",(0,n.jsx)(s.p,{children:"Bonsai stores leaf values in a trie log, separate from the branches of the trie. Bonsai stores nodes by the location of the node instead of the hash of the node. Bonsai can access the leaf from the underlying storage directly using the account key. This greatly reduces the disk space needed for storage and allows for less resource-demanding and faster read performance. Bonsai inherently prunes orphaned nodes and old branches."}),"\n",(0,n.jsxs)(s.p,{children:["To run a node with Bonsai Tries data storage format, use the command line option ",(0,n.jsx)(s.a,{href:"/development/public-networks/reference/cli/options#data-storage-format",children:(0,n.jsx)(s.code,{children:"--data-storage-format=BONSAI"})}),"."]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Bonsai_tries",src:t(73677).Z+"",width:"828",height:"513"})})}),"\n",(0,n.jsx)(s.h2,{id:"forest-of-tries",children:"Forest of Tries"}),"\n",(0,n.jsx)(s.p,{children:"Forest of Tries, also called forest mode, is the default storage format."}),"\n",(0,n.jsx)(s.p,{children:"In forest mode, each node in the trie is saved in a key-value store by hash. For each block, the world state is updated with new nodes, leaf nodes, and a new state root. Old leaf nodes remain in the underlying data store. Data is accessed and stored by hash, which increases the size of the database and increases the resources and time needed to access account data."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"forest_of_tries",src:t(47794).Z+"",width:"828",height:"631"})})}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["Forest pruning using the ",(0,n.jsx)(s.code,{children:"--pruning-enabled"})," option is no longer supported.\nWe recommend using ",(0,n.jsx)(s.a,{href:"#bonsai-tries",children:"Bonsai Tries"})," to save disk space."]})}),"\n",(0,n.jsx)(s.h2,{id:"forest-of-tries-vs-bonsai-tries",children:"Forest of Tries vs. Bonsai Tries"}),"\n",(0,n.jsx)(s.h3,{id:"storage-requirements",children:"Storage requirements"}),"\n",(0,n.jsxs)(s.p,{children:["Forest mode uses significantly more memory than Bonsai. With an ",(0,n.jsx)(s.a,{href:"/development/public-networks/get-started/connect/sync-node#run-an-archive-node",children:"archive node"}),", forest mode uses an estimated 12 TB of storage, while Bonsai uses an estimated 1100 GB of storage. With a ",(0,n.jsx)(s.a,{href:"/development/public-networks/get-started/connect/sync-node#run-a-full-node",children:"full node"}),", forest mode uses an estimated 750 GB of storage, while Bonsai uses an estimated 650 GB of storage."]}),"\n",(0,n.jsx)(s.h3,{id:"accessing-data",children:"Accessing data"}),"\n",(0,n.jsx)(s.p,{children:"Forest mode must go through all the branches by hash to read a leaf value. Bonsai can access the leaf from the underlying storage directly using the account key. Bonsai will generally read faster than forest mode, particularly if the blocks are more recent."}),"\n",(0,n.jsxs)(s.p,{children:["However, Bonsai becomes increasingly more resource-intensive the further in history you try to read data. To prevent this, you can limit how far Bonsai looks back while reconstructing data. The default limit Bonsai looks back is 512. To change the parameter, use the ",(0,n.jsx)(s.a,{href:"/development/public-networks/reference/cli/options#bonsai-historical-block-limit",children:(0,n.jsx)(s.code,{children:"--bonsai-historical-block-limit"})})," option. This might directly impact ",(0,n.jsx)(s.a,{href:"/development/public-networks/reference/api/",children:"JSON-RPC API"})," queries."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["Using ",(0,n.jsx)(s.code,{children:"--bonsai-historical-block-limit"}),' doesn\'t affect the size of the database being stored, only how far back to load. This means there is no "safe minimum" value to use with this option.']})}),"\n",(0,n.jsx)(s.h3,{id:"syncing-nodes",children:"Syncing nodes"}),"\n",(0,n.jsxs)(s.p,{children:["The following table shows the ways you can ",(0,n.jsx)(s.a,{href:"/development/public-networks/get-started/connect/sync-node#run-a-full-node",children:"sync a full node"})," with the different data storage formats using ",(0,n.jsx)(s.a,{href:"/development/public-networks/get-started/connect/sync-node#fast-synchronization",children:"fast"})," and ",(0,n.jsx)(s.a,{href:"/development/public-networks/get-started/connect/sync-node#snap-synchronization",children:"snap"})," sync."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Data storage format"}),(0,n.jsx)(s.th,{children:"Sync mode"}),(0,n.jsx)(s.th,{children:"Storage estimate"}),(0,n.jsx)(s.th,{children:"Can other nodes sync to your node?"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bonsai"}),(0,n.jsx)(s.td,{children:"Fast"}),(0,n.jsx)(s.td,{children:"1140 GB"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bonsai"}),(0,n.jsx)(s.td,{children:"Snap"}),(0,n.jsx)(s.td,{children:"1090 GB"}),(0,n.jsx)(s.td,{children:"To be implemented"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bonsai"}),(0,n.jsx)(s.td,{children:"Checkpoint"}),(0,n.jsx)(s.td,{children:"840 GB"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Forest"}),(0,n.jsx)(s.td,{children:"Fast"}),(0,n.jsx)(s.td,{children:"1200 GB"}),(0,n.jsx)(s.td,{children:"Yes"})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"We recommend using snap sync with Bonsai for the fastest sync and lowest storage requirements."})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},73677:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/Bonsai_tries-5faad47fa3a0b807cd2bb30bce6b38b9.png"},47794:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/forest_of_tries-b2da450e9ecbfc38e09bd13505c66aed.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var n=t(67294);const o={},r=n.createContext(o);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);