"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[30507],{29243:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(85893),o=s(11151);const i={title:"Sync Besu",sidebar_position:1,description:"Full and archive node types",tags:["public networks"]},r="Sync Besu",c={id:"public-networks/get-started/connect/sync-node",title:"Sync Besu",description:"Full and archive node types",source:"@site/versioned_docs/version-23.10.2/public-networks/get-started/connect/sync-node.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/sync-node",permalink:"/23.10.2/public-networks/get-started/connect/sync-node",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/get-started/connect/sync-node.md",tags:[{label:"public networks",permalink:"/23.10.2/tags/public-networks"}],version:"23.10.2",lastUpdatedAt:1711474639,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:1,frontMatter:{title:"Sync Besu",sidebar_position:1,description:"Full and archive node types",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Connect to a network overview",permalink:"/23.10.2/public-networks/get-started/connect/"},next:{title:"Connect to Mainnet",permalink:"/23.10.2/public-networks/get-started/connect/mainnet"}},a={},d=[{value:"Sync times",id:"sync-times",level:2},{value:"Storage",id:"storage",level:2},{value:"Run a full node",id:"run-a-full-node",level:2},{value:"Snap synchronization",id:"snap-synchronization",level:3},{value:"Checkpoint synchronization",id:"checkpoint-synchronization",level:3},{value:"Fast synchronization",id:"fast-synchronization",level:3},{value:"Run an archive node",id:"run-an-archive-node",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sync-besu",children:"Sync Besu"}),"\n",(0,t.jsxs)(n.p,{children:["Besu supports two node types, commonly referred to as ",(0,t.jsx)(n.a,{href:"#run-a-full-node",children:"full nodes"})," and ",(0,t.jsx)(n.a,{href:"#run-an-archive-node",children:"archive nodes"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Full nodes have the current state of the blockchain. They can't serve the network with all data requests (for example, the balance of an account at an old block). Full nodes can guarantee the latest state for the blockchain (and some older states, but not all). You can check current balances, sign and send transactions, and look at current dapp data."}),"\n",(0,t.jsx)(n.p,{children:"Archive nodes also store the intermediary state of every account and contract for every block since the genesis block. Archive nodes can do everything full nodes do, and they can access historical state data. Archive nodes require more disk space than full nodes."}),"\n",(0,t.jsxs)(n.p,{children:["Besu must connect with other peers to sync with the network. If your node is having trouble peering, try ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/troubleshoot/peering",children:"troubleshooting peering"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"sync-times",children:"Sync times"}),"\n",(0,t.jsx)(n.p,{children:"To sync with a public network, Besu runs two processes in parallel: the world state sync and the blockchain download."}),"\n",(0,t.jsx)(n.p,{children:"The following table shows the average world state sync time for each sync mode on Mainnet. All times are hardware dependent; this table is based on running AWS instances m6gd.2xlarge. Each sync mode also has its own world state database size."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Sync mode"}),(0,t.jsx)(n.th,{children:"Time to sync world state"}),(0,t.jsx)(n.th,{children:"Disk usage"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Snap"}),(0,t.jsx)(n.td,{children:"~6 hours"}),(0,t.jsx)(n.td,{children:"Average disk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Checkpoint"}),(0,t.jsx)(n.td,{children:"~5 hours"}),(0,t.jsx)(n.td,{children:"Smallest disk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Fast"}),(0,t.jsx)(n.td,{children:"~1.5 days"}),(0,t.jsx)(n.td,{children:"Average disk"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Full"}),(0,t.jsx)(n.td,{children:"~weeks"}),(0,t.jsx)(n.td,{children:"Largest disk"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["As of late 2022, an average Mainnet snap sync consumes around 750 GB using Bonsai Tries. Read more about ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/data-storage-formats#storage-requirements",children:"storage requirements"})," across data storage formats and sync modes."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Testnets take significantly less time and space to sync."}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"While the world state syncs, Besu downloads and imports the blockchain in the background. The blockchain download time depends on CPU, the network, Besu's peers, and disk speed. It generally takes longer than the world state sync."}),"\n",(0,t.jsx)(n.p,{children:"Besu must catch up to the current chain head and sync the world state to participate on Mainnet."}),"\n",(0,t.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,t.jsxs)(n.p,{children:["You can store the world state using ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/data-storage-formats#forest-of-tries",children:"Forest of Tries"})," or ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"}),". We recommend using Bonsai Tries for the lowest storage requirements."]}),"\n",(0,t.jsx)(n.h2,{id:"run-a-full-node",children:"Run a full node"}),"\n",(0,t.jsxs)(n.p,{children:["You can run a full node using ",(0,t.jsx)(n.a,{href:"#snap-synchronization",children:"snap synchronization (snap sync)"}),", ",(0,t.jsx)(n.a,{href:"#checkpoint-synchronization",children:"checkpoint synchronization (checkpoint sync)"}),", or ",(0,t.jsx)(n.a,{href:"#fast-synchronization",children:"fast synchronization (fast sync)"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"snap-synchronization",children:"Snap synchronization"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"We recommend using snap sync over fast sync because snap sync can be faster by several days."}),(0,t.jsxs)(n.p,{children:["We recommend using snap sync with the ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai"})," data storage format for the fastest sync and lowest storage requirements."]})]}),"\n",(0,t.jsxs)(n.p,{children:["Enable snap sync using ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=X_SNAP"})}),". You need Besu version 22.4.0 or later to use snap sync."]}),"\n",(0,t.jsxs)(n.p,{children:["Instead of downloading the ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/data-storage-formats",children:"state trie"})," node by node, snap sync downloads as many leaves of the trie as possible, and reconstructs the trie locally."]}),"\n",(0,t.jsxs)(n.p,{children:["You can't switch from fast sync to snap sync. If your node is blocked in the middle of a fast sync, you can start over using snap sync instead by stopping the node, deleting the data directory, and starting over using ",(0,t.jsx)(n.code,{children:"--sync-mode=X_SNAP"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can restart Besu during a snap sync in case of hardware or software problems. The sync resumes from the last valid world state and continues to download blocks starting from the last downloaded block."}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/monitor/understand-metrics",children:"how to read the Besu metrics charts"})," when using snap sync."]}),"\n",(0,t.jsx)(n.h3,{id:"checkpoint-synchronization",children:"Checkpoint synchronization"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Checkpoint sync is an early access feature."})}),"\n",(0,t.jsxs)(n.p,{children:["Enable checkpoint sync using ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=X_CHECKPOINT"})}),". You need Besu version 22.4.3 or later to use checkpoint sync."]}),"\n",(0,t.jsxs)(n.p,{children:["Checkpoint sync behaves like ",(0,t.jsx)(n.a,{href:"#snap-synchronization",children:"snap sync"}),", but instead of syncing from the genesis block, it syncs from a specific checkpoint block configured in the ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/genesis-file",children:"Besu genesis file"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Ethereum Mainnet and the Goerli testnet configurations already define default checkpoints, so you don't have to add this yourself."}),"\n",(0,t.jsx)(n.p,{children:"For other networks, you can configure a checkpoint in the genesis file by specifying the block hash, number, and total difficulty as in the following example."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Checkpoint configuration example"',children:'"checkpoint": {\n  "hash": "0x844d581cb00058d19f0584fb582fa2de208876ee56bbae27446a679baf4633f4",\n  "number": 14700000,\n  "totalDifficulty": "0xA2539264C62BF98CFC6"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If using ",(0,t.jsx)(n.a,{href:"/23.10.2/private-networks/how-to/configure/consensus/clique",children:"Clique"})," consensus, the checkpoint must be the beginning of an epoch."]})}),"\n",(0,t.jsx)(n.p,{children:"If you enable checkpoint sync without a checkpoint configuration in the genesis file, Besu snap syncs from the genesis block."}),"\n",(0,t.jsx)(n.p,{children:"You can restart Besu during a checkpoint sync in case of hardware or software problems. The sync resumes from the last valid world state and continues to download blocks starting from the last downloaded block."}),"\n",(0,t.jsx)(n.h3,{id:"fast-synchronization",children:"Fast synchronization"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"It might become impossible to sync Ethereum Mainnet using fast sync in the future. If you sync for the first time or ever need to re-sync, update Besu to a version that supports newer sync methods."})}),"\n",(0,t.jsxs)(n.p,{children:["Enable fast sync using ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=FAST"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Fast sync downloads the block headers and transaction receipts, and verifies the chain of block headers from the genesis block."}),"\n",(0,t.jsx)(n.p,{children:"When starting fast sync, Besu first downloads the world state for a recent block verified by its peers (referred to as a pivot block), and then begins fast sync from the genesis block."}),"\n",(0,t.jsxs)(n.p,{children:["Fast sync is the default for named networks specified using the ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#network",children:(0,t.jsx)(n.code,{children:"--network"})})," option, except for the ",(0,t.jsx)(n.code,{children:"dev"})," development network. It's also the default if connecting to Ethereum Mainnet by not specifying the ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#network",children:(0,t.jsx)(n.code,{children:"--network"})})," or ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#genesis-file",children:(0,t.jsx)(n.code,{children:"--genesis-file"})})," options."]}),"\n",(0,t.jsxs)(n.p,{children:["Using fast sync with ",(0,t.jsx)(n.a,{href:"/23.10.2/private-networks/concepts/privacy/",children:"private transactions"})," isn't supported."]}),"\n",(0,t.jsxs)(n.p,{children:["You can observe the ",(0,t.jsx)(n.code,{children:"besu_synchronizer_fast_sync_*"})," and ",(0,t.jsx)(n.code,{children:"besu_synchronizer_world_state_*"})," ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/monitor/metrics#metrics-list",children:"metrics"})," to monitor fast sync."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"When fast syncing, block numbers increase until close to the head block, then the process pauses while the world state download completes. This may take a significant amount of time depending on world state size, during which the current head block doesn't increase. For example, Mainnet may take several days or more to fast sync. Fast sync time may increase because Besu picks new pivot blocks, or because peers prune the world state before it completes downloading."})}),"\n",(0,t.jsxs)(n.admonition,{title:"RocksDB error on AWS",type:"caution",children:[(0,t.jsxs)(n.p,{children:["When running Besu on some cloud providers, a known ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/rocksdb/issues/6435",children:"RocksDB"})," issue causes fast sync to fail occasionally. The following error is displayed repeatedly:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"EthScheduler-Services-1 (importBlock) | ERROR | PipelineChainDownloader | Chain download failed. Restarting after short delay.\njava.util.concurrent.CompletionException: org.hyperledger.besu.plugin.services.exception.StorageException: org.rocksdb.RocksDBException: block checksum mismatch:\n"})}),(0,t.jsxs)(n.p,{children:["The failure has been seen on AWS and Digital Ocean. On AWS, A full restart of the VM is required to restart the fast sync. Fast sync isn't ",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/CHANGELOG.md#143",children:"currently supported on Digital Ocean"}),"."]})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Pending state nodes stays constant",type:"caution",children:[(0,t.jsx)(n.p,{children:"When fast syncing, the pending state nodes count is the number of nodes yet to be downloaded, and it should change constantly. Pending state nodes trend to 0 during fast sync and then goes to 0."}),(0,t.jsx)(n.p,{children:"If the number stays constant, this could mean your node isn't syncing against any peers."}),(0,t.jsx)(n.p,{children:"In the following example, the pivot block is 0 and the pending state nodes value is constant. This means the node isn't syncing against any peers. The fact that state nodes have been downloaded means at some stage it was syncing."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Fast synchronization",src:s(55360).Z+"",width:"2081",height:"260"})}),(0,t.jsx)(n.p,{children:"The easiest solution in this scenario is to restart fast sync to obtain a new pivot block."})]}),"\n",(0,t.jsx)(n.h2,{id:"run-an-archive-node",children:"Run an archive node"}),"\n",(0,t.jsxs)(n.p,{children:["To run an archive node, enable full synchronization (full sync) using ",(0,t.jsx)(n.a,{href:"/23.10.2/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=FULL"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Full sync starts from the genesis block and reprocesses all transactions."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},55360:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/fastsync-8fadeea99996664121739a3d76a88124.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(67294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);