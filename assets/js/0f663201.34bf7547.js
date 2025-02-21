"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2331],{94007:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(74848),o=s(28453);const i={title:"Node synchronization",sidebar_position:4,description:"Learn about node synchronization for public networks.",tags:["public networks"]},r="Node synchronization",a={id:"public-networks/concepts/node-sync",title:"Node synchronization",description:"Learn about node synchronization for public networks.",source:"@site/docs/public-networks/concepts/node-sync.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/node-sync",permalink:"/public-networks/concepts/node-sync",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/node-sync.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"}],version:"current",lastUpdatedAt:1740173242e3,sidebarPosition:4,frontMatter:{title:"Node synchronization",sidebar_position:4,description:"Learn about node synchronization for public networks.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Data storage formats",permalink:"/public-networks/concepts/data-storage-formats"},next:{title:"Parallel transaction execution",permalink:"/public-networks/concepts/parallel-transaction-execution"}},c={},d=[{value:"Node types",id:"node-types",level:2},{value:"Full nodes",id:"full-nodes",level:3},{value:"Archive nodes",id:"archive-nodes",level:3},{value:"Sync modes",id:"sync-modes",level:2},{value:"Snap synchronization",id:"snap-synchronization",level:3},{value:"Checkpoint synchronization",id:"checkpoint-synchronization",level:3},{value:"Fast synchronization (Deprecated)",id:"fast-synchronization-deprecated",level:3},{value:"Full synchronization",id:"full-synchronization",level:3},{value:"Sync times",id:"sync-times",level:2},{value:"Storage",id:"storage",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"node-synchronization",children:"Node synchronization"})}),"\n",(0,t.jsxs)(n.p,{children:["Besu supports two ",(0,t.jsx)(n.a,{href:"#node-types",children:"node types"})," and several ",(0,t.jsx)(n.a,{href:"#sync-modes",children:"synchronization modes"})," on\npublic networks."]}),"\n",(0,t.jsx)(n.h2,{id:"node-types",children:"Node types"}),"\n",(0,t.jsx)(n.h3,{id:"full-nodes",children:"Full nodes"}),"\n",(0,t.jsxs)(n.p,{children:["A full node consists of an\n",(0,t.jsx)(n.a,{href:"/public-networks/concepts/node-clients#execution-and-consensus-clients",children:"execution and consensus client"}),",\nand stores a local copy of the blockchain.\nWith a full node, you can check current balances, sign and send transactions, and look at current\ndapp data."]}),"\n",(0,t.jsx)(n.p,{children:"Full nodes can guarantee the latest state of the blockchain (and some older states). However, they\ncan't serve the network with all data requests (for example, the balance of an account at an old\nblock)."}),"\n",(0,t.jsxs)(n.p,{children:["You can run a full node using ",(0,t.jsx)(n.a,{href:"#snap-synchronization",children:"snap synchronization"}),",\n",(0,t.jsx)(n.a,{href:"#checkpoint-synchronization",children:"checkpoint synchronization"}),", or\n",(0,t.jsx)(n.a,{href:"#fast-synchronization-deprecated",children:"fast synchronization"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"archive-nodes",children:"Archive nodes"}),"\n",(0,t.jsx)(n.p,{children:"An archive node is a node that also stores the intermediary state of every account and contract\nfor every block since the genesis block.\nArchive nodes can do everything full nodes do, and they can also access historical state data.\nThis means that archive nodes require more disk space than full nodes."}),"\n",(0,t.jsxs)(n.p,{children:["You can only run an archive node using ",(0,t.jsx)(n.a,{href:"#full-synchronization",children:"full synchronization"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"important",type:"caution",children:(0,t.jsxs)(n.p,{children:["Do not run an archive node with the ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"}),"\ndata storage format.\nBonsai is designed for retrieving recent data only."]})}),"\n",(0,t.jsx)(n.h2,{id:"sync-modes",children:"Sync modes"}),"\n",(0,t.jsx)(n.p,{children:"Besu supports several synchronization modes for different network types, node types, and use cases.\nThe following is an overview of the public network sync modes:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sync mode"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Requirements"}),(0,t.jsx)(n.th,{children:"Limitations"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#snap-synchronization",children:"Snap"})}),(0,t.jsx)(n.td,{children:"Efficient sync from genesis block, downloading as many trie leaves as possible and reconstructing locally. Faster than fast sync."}),(0,t.jsx)(n.td,{children:"Besu version 22.4.0 or later"}),(0,t.jsx)(n.td,{children:"Cannot switch from fast sync to snap sync mid-process."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#checkpoint-synchronization",children:"Checkpoint"})}),(0,t.jsx)(n.td,{children:"Syncs from a specific checkpoint block configured in the genesis file. Fastest sync mode with lowest storage requirements."}),(0,t.jsx)(n.td,{children:"Besu version 22.4.3 or later"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#fast-synchronization-deprecated",children:"Fast"})}),(0,t.jsx)(n.td,{children:"Downloads block headers and transaction receipts, verifies chain from genesis block."}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"Deprecated in Besu version 24.12.0 and later."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#full-synchronization",children:"Full"})}),(0,t.jsx)(n.td,{children:"Downloads and verifies the entire blockchain and state from genesis block, building an archive node with full state history."}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"Slowest sync mode, requires the most disk space."})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Private network syncing",type:"info",children:(0,t.jsxs)(n.p,{children:["Private networks can use the same sync methods as public networks, but might require different configurations.\nSee ",(0,t.jsx)(n.a,{href:"/private-networks/concepts/node-sync-private",children:"Node synchronization for private networks"})," for more information."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Troubleshooting",type:"note",children:(0,t.jsxs)(n.p,{children:["Besu must connect with other peers to sync with the network.\nIf your node is having trouble peering, try ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/troubleshoot/peering",children:"troubleshooting peering"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"snap-synchronization",children:"Snap synchronization"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We recommend using snap sync over fast sync because snap sync can be faster than fast sync by\nseveral days (for Mainnet).\nUse snap sync with the ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai"}),"\ndata storage format for the fastest sync and lowest storage requirements."]})}),"\n",(0,t.jsxs)(n.p,{children:["Snap sync is the default sync mode for all named ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#network",children:"networks"}),"\nexcept ",(0,t.jsx)(n.code,{children:"dev"}),".\nYou can enable snap sync using ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=SNAP"})}),".\nYou need Besu version 22.4.0 or later to use snap sync."]}),"\n",(0,t.jsxs)(n.p,{children:["Instead of downloading the ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats",children:"state trie"})," node by node, snap\nsync downloads as many leaves of the trie as possible, and reconstructs the trie locally."]}),"\n",(0,t.jsxs)(n.p,{children:["You can't switch from fast sync to snap sync. If your node is blocked in the middle of a fast sync,\nyou can start over using snap sync instead by stopping the node, deleting the data directory, and\nstarting over using ",(0,t.jsx)(n.code,{children:"--sync-mode=SNAP"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can restart Besu during a snap sync in case of hardware or software problems. The sync resumes\nfrom the last valid world state and continues to download blocks starting from the last downloaded\nblock."}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/monitor/understand-metrics",children:"how to read the Besu metrics charts"})," when using\nsnap sync."]}),"\n",(0,t.jsx)(n.h3,{id:"checkpoint-synchronization",children:"Checkpoint synchronization"}),"\n",(0,t.jsxs)(n.p,{children:["You can enable checkpoint sync using ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=CHECKPOINT"})}),".\nYou need Besu version 22.4.3 or later to use checkpoint sync."]}),"\n",(0,t.jsxs)(n.p,{children:["Checkpoint sync behaves like ",(0,t.jsx)(n.a,{href:"#snap-synchronization",children:"snap sync"}),", but instead of syncing from the\ngenesis block, it syncs from a specific checkpoint block configured in the ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/genesis-file",children:"Besu genesis file"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Ethereum Mainnet, Holesky, and Ephemery testnet configurations already define default checkpoints, so you\ndon't have to add this yourself."}),"\n",(0,t.jsx)(n.p,{children:"For other networks, you can configure a checkpoint in the genesis file by specifying the block hash,\nnumber, and total difficulty as in the following example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Checkpoint configuration example"',children:'"checkpoint": {\n  "hash": "0x844d581cb00058d19f0584fb582fa2de208876ee56bbae27446a679baf4633f4",\n  "number": 14700000,\n  "totalDifficulty": "0xA2539264C62BF98CFC6"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If using ",(0,t.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/clique",children:"Clique"})," consensus, the\ncheckpoint must be the beginning of an epoch."]})}),"\n",(0,t.jsx)(n.p,{children:"If you enable checkpoint sync without a checkpoint configuration in the genesis file, Besu snap\nsyncs from the genesis block."}),"\n",(0,t.jsx)(n.p,{children:"You can restart Besu during a checkpoint sync in case of hardware or software problems. The sync\nresumes from the last valid world state and continues to download blocks starting from the last\ndownloaded block."}),"\n",(0,t.jsx)(n.h3,{id:"fast-synchronization-deprecated",children:"Fast synchronization (Deprecated)"}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["Fast sync is deprecated in Besu version 24.12.0 and later. Please read this ",(0,t.jsx)(n.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]}),(0,t.jsx)(n.p,{children:"If you sync for the first time or need to re-sync, update Besu to a version that supports newer sync methods."})]}),"\n",(0,t.jsxs)(n.p,{children:["You can enable fast sync using ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=FAST"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Fast sync downloads the block headers and transaction receipts, and verifies the chain of block\nheaders from the genesis block."}),"\n",(0,t.jsx)(n.p,{children:"When starting fast sync, Besu first downloads the world state for a recent block verified by its\npeers (referred to as a pivot block), and then begins fast sync from the genesis block."}),"\n",(0,t.jsxs)(n.p,{children:["Using fast sync with ",(0,t.jsx)(n.a,{href:"/private-networks/concepts/privacy/",children:"private transactions"}),"\nisn't supported."]}),"\n",(0,t.jsxs)(n.p,{children:["You can observe the ",(0,t.jsx)(n.code,{children:"besu_synchronizer_fast_sync_*"})," and ",(0,t.jsx)(n.code,{children:"besu_synchronizer_world_state_*"}),"\n",(0,t.jsx)(n.a,{href:"/public-networks/how-to/monitor/metrics#view-the-metrics-list",children:"metrics"})," to monitor fast sync."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"When fast syncing, block numbers increase until close to the head block, then the process pauses\nwhile the world state download completes. This may take a significant amount of time depending on\nworld state size, during which the current head block doesn't increase. For example, Mainnet may\ntake several days or more to fast sync. Fast sync time may increase because Besu picks new pivot\nblocks, or because peers prune the world state before it completes downloading."})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"RocksDB error on AWS"}),(0,t.jsxs)(n.p,{children:["When running Besu on some cloud providers, a known\n",(0,t.jsx)(n.a,{href:"https://github.com/facebook/rocksdb/issues/6435",children:"RocksDB"})," issue causes fast sync to fail occasionally.\nThe following error is displayed repeatedly:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"EthScheduler-Services-1 (importBlock) | ERROR | PipelineChainDownloader | Chain download failed. \nRestarting after short delay.\njava.util.concurrent.CompletionException: org.hyperledger.besu.plugin.services.exception.StorageException: org.rocksdb.RocksDBException: block checksum mismatch:\n"})}),(0,t.jsxs)(n.p,{children:["The failure has been seen on AWS and Digital Ocean. On AWS, A full restart of the VM is required to\nrestart the fast sync. Fast sync isn't\n",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/CHANGELOG.md#143",children:"currently supported on Digital Ocean"}),"."]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Pending state nodes stays constant"}),(0,t.jsx)(n.p,{children:"When fast syncing, the pending state nodes count is the number of nodes yet to be downloaded, and it\nshould change constantly. Pending state nodes trend to 0 during fast sync and then goes to 0."}),(0,t.jsx)(n.p,{children:"If the number stays constant, this could mean your node isn't syncing against any peers."}),(0,t.jsx)(n.p,{children:"In the following example, the pivot block is 0 and the pending state nodes value is constant. This\nmeans the node isn't syncing against any peers. The fact that state nodes have been downloaded means\nat some stage it was syncing."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Fast synchronization",src:s(55428).A+"",width:"2081",height:"260"})}),(0,t.jsx)(n.p,{children:"The easiest solution in this scenario is to restart fast sync to obtain a new pivot block."})]}),"\n",(0,t.jsx)(n.h3,{id:"full-synchronization",children:"Full synchronization"}),"\n",(0,t.jsxs)(n.p,{children:["Full sync is the default sync mode for the ",(0,t.jsxs)(n.a,{href:"/public-networks/reference/cli/options#network",children:[(0,t.jsx)(n.code,{children:"dev"})," network"]}),".\nYou can enable full sync using ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=FULL"})}),".\nUse full sync to run an ",(0,t.jsx)(n.a,{href:"#archive-nodes",children:"archive node"}),".\nFull sync starts from the genesis block and reprocesses all transactions."]}),"\n",(0,t.jsx)(n.admonition,{title:"important",type:"caution",children:(0,t.jsxs)(n.p,{children:["Do not run an archive node with the ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"}),"\ndata storage format.\nBonsai is designed for retrieving recent data only."]})}),"\n",(0,t.jsx)(n.h2,{id:"sync-times",children:"Sync times"}),"\n",(0,t.jsx)(n.p,{children:"To sync with a public network, Besu runs two processes in parallel: the world state sync and the\nblockchain download."}),"\n",(0,t.jsx)(n.p,{children:"While the world state syncs, Besu downloads and imports the blockchain in the background.\nThe blockchain download time depends on CPU, the network, Besu's peers, and disk speed.\nThe blockchain download generally takes longer than the world state sync. Besu must catch up to the\ncurrent chain head and sync the world state to participate on Mainnet."}),"\n",(0,t.jsx)(n.p,{children:"The following table shows the average world state sync time, and blockchain download time, for each\nsync mode on Mainnet."}),"\n",(0,t.jsx)(n.p,{children:"All times are hardware dependent; this table is based on running AWS instances m6gd.2xlarge.\nEach sync mode also has its own world state database size."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sync mode"}),(0,t.jsx)(n.th,{children:"Time to sync world state"}),(0,t.jsx)(n.th,{children:"Time to download blockchain"}),(0,t.jsx)(n.th,{children:"Disk usage"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Snap"}),(0,t.jsx)(n.td,{children:"~6 hours"}),(0,t.jsx)(n.td,{children:"~1.5 days"}),(0,t.jsx)(n.td,{children:"Average disk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Checkpoint"}),(0,t.jsx)(n.td,{children:"~5 hours"}),(0,t.jsx)(n.td,{children:"~13 hours"}),(0,t.jsx)(n.td,{children:"Smallest disk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Fast"}),(0,t.jsx)(n.td,{children:"~1.5 days"}),(0,t.jsx)(n.td,{children:"~1.5 days"}),(0,t.jsx)(n.td,{children:"Average disk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Full"}),(0,t.jsx)(n.td,{children:"~weeks"}),(0,t.jsx)(n.td,{children:"~weeks"}),(0,t.jsx)(n.td,{children:"Largest disk"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Snap and checkpoint syncs handle blockchain data similarly to fast sync, but differ in how they\nprocess world state data."}),"\n",(0,t.jsxs)(n.li,{children:["As of late 2023, an average Mainnet snap sync consumes around 1000 GB using Bonsai Tries.\nRead more about ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#storage-requirements",children:"storage requirements"}),"\nacross data storage formats and sync modes."]}),"\n",(0,t.jsx)(n.li,{children:"Testnets take significantly less time and space to sync."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(n.p,{children:["You can store the world state using ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#forest-of-tries",children:"Forest of Tries"}),"\nor ",(0,t.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"}),".\nBesu uses Bonsai by default."]}),"\n",(0,t.jsxs)(n.p,{children:["If you're running a ",(0,t.jsx)(n.a,{href:"#full-nodes",children:"full node"}),", we recommend using Bonsai for the lowest storage requirements."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},55428:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/fastsync-8fadeea99996664121739a3d76a88124.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);