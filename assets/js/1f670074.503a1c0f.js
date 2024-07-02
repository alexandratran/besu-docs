"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[39380],{61603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(85893),i=n(11151);const o={title:"Understand metrics",sidebar_position:2,description:"Understand Besu performance metrics",tags:["public networks"]},r="Understand metrics",a={id:"public-networks/how-to/monitor/understand-metrics",title:"Understand metrics",description:"Understand Besu performance metrics",source:"@site/versioned_docs/version-24.5.2/public-networks/how-to/monitor/understand-metrics.md",sourceDirName:"public-networks/how-to/monitor",slug:"/public-networks/how-to/monitor/understand-metrics",permalink:"/24.5.2/public-networks/how-to/monitor/understand-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/public-networks/how-to/monitor/understand-metrics.md",tags:[{label:"public networks",permalink:"/24.5.2/tags/public-networks"}],version:"24.5.2",lastUpdatedAt:1719856645,formattedLastUpdatedAt:"Jul 1, 2024",sidebarPosition:2,frontMatter:{title:"Understand metrics",sidebar_position:2,description:"Understand Besu performance metrics",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Use metrics",permalink:"/24.5.2/public-networks/how-to/monitor/metrics"},next:{title:"Configure logging",permalink:"/24.5.2/public-networks/how-to/monitor/logging"}},l={},d=[{value:"CPU usage",id:"cpu-usage",level:2},{value:"1. Blocks import and world state download",id:"1-blocks-import-and-world-state-download",level:3},{value:"2. World state healing",id:"2-world-state-healing",level:3},{value:"3. Blocks import",id:"3-blocks-import",level:3},{value:"4. Blocks full import",id:"4-blocks-full-import",level:3},{value:"5. Blocks production and propagation",id:"5-blocks-production-and-propagation",level:3},{value:"Block time",id:"block-time",level:2},{value:"1. Block import time",id:"1-block-import-time",level:3},{value:"2. Block full import time",id:"2-block-full-import-time",level:3},{value:"3. Block network time",id:"3-block-network-time",level:3}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"understand-metrics",children:"Understand metrics"}),"\n",(0,s.jsxs)(t.p,{children:["When running Besu on Ethereum Mainnet using ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/get-started/connect/sync-node#snap-synchronization",children:"snap sync"}),", you might notice graphical patterns that stand out in different metrics charts. These patterns are related to the ",(0,s.jsx)(t.a,{href:"#cpu-usage",children:"CPU usage"})," and ",(0,s.jsx)(t.a,{href:"#block-time",children:"block time"})," of the Besu sync process."]}),"\n",(0,s.jsx)(t.h2,{id:"cpu-usage",children:"CPU usage"}),"\n",(0,s.jsxs)(t.p,{children:["The following screenshot from ",(0,s.jsx)(t.a,{href:"/24.5.2/private-networks/tutorials/quickstart#monitor-nodes-with-prometheus-and-grafana",children:"monitoring Besu with Prometheus and Grafana"})," shows patterns related to CPU usage."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"CPU Grafana Besu dashboard patterns screenshot",src:n(78373).Z+"",width:"3278",height:"1542"})}),"\n",(0,s.jsx)(t.p,{children:'The CPU pattern is a "staircase" pattern, where each step represents one of the Besu running stages.'}),"\n",(0,s.jsx)(t.h3,{id:"1-blocks-import-and-world-state-download",children:"1. Blocks import and world state download"}),"\n",(0,s.jsx)(t.p,{children:"Step 1 highlights blocks import and world state download, two tasks executed in parallel in Besu. Besu manages these two tasks with two different pipelines."}),"\n",(0,s.jsxs)(t.p,{children:["This step is CPU-bound.",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," The two pipeline stages run on multiple threads."]}),"\n",(0,s.jsx)(t.p,{children:"As displayed in the following screenshot (for a VM with 8 CPUs) the CPU load average is about 7.5 and sometimes exceeds 10 (a 100% load for the 8 CPUs is 8). This means there's more work to be done than what the CPUs can handle."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"System load metrics screenshot",src:n(28166).Z+"",width:"3278",height:"1542"})}),"\n",(0,s.jsx)(t.h3,{id:"2-world-state-healing",children:"2. World state healing"}),"\n",(0,s.jsx)(t.p,{children:"Step 2, world state healing, starts just after the world state download in step 1 is complete. The peak in system CPU is related to the high rate of input and output (IO) required during this step. IO usage is around 61% during healing, and it's only 39% during the remaining sync."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IO utilization metrics screenshot",src:n(46721).Z+"",width:"3278",height:"1542"})}),"\n",(0,s.jsx)(t.h3,{id:"3-blocks-import",children:"3. Blocks import"}),"\n",(0,s.jsx)(t.p,{children:"After steps 1 and 2, world state is downloaded and healed, and block import continues."}),"\n",(0,s.jsx)(t.p,{children:"The visible drop in CPU shows that Besu finished the world state nodes download."}),"\n",(0,s.jsx)(t.p,{children:"The block import step is long because Besu can't parallelize block import -- it must validate each parent block before importing a child."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The Besu team is currently working on other algorithm and implementations to make this block import faster."})}),"\n",(0,s.jsx)(t.h3,{id:"4-blocks-full-import",children:"4. Blocks full import"}),"\n",(0,s.jsx)(t.p,{children:"In step 4, Besu executes all transactions of each block. This is when Besu updates the world state after the healing step."}),"\n",(0,s.jsx)(t.p,{children:"The quantity of imported blocks in this step depends on the speed of the sync. This number indicates the cumulated blocks quantity behind head since the last healing step."}),"\n",(0,s.jsx)(t.p,{children:"This step consumes less CPU than the previous steps because the sequential part -- executing transactions on the EVM -- must be single-threaded, reducing the concurrent work at the CPU level."}),"\n",(0,s.jsx)(t.h3,{id:"5-blocks-production-and-propagation",children:"5. Blocks production and propagation"}),"\n",(0,s.jsx)(t.p,{children:"Once Besu is completely synced, it propagates blocks and executes the transactions inside each block. Step 5, block production and propagation, shows a reduction in CPU consumption due to the idle time while waiting for the new block and the sequential nature of executing transactions on the EVM."}),"\n",(0,s.jsx)(t.h2,{id:"block-time",children:"Block time"}),"\n",(0,s.jsxs)(t.p,{children:["Block time measures the duration of getting new blocks in Besu. Block time is closely related to ",(0,s.jsx)(t.a,{href:"#cpu-usage",children:"CPU usage"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The following screenshot shows patterns related to block time as available in the ",(0,s.jsx)(t.a,{href:"https://grafana.com/grafana/dashboards/16455-besu-full/",children:"Besu Grafana full dashboard"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Block time Grafana Besu dashboard patterns screenshot",src:n(10732).Z+"",width:"3278",height:"1542"})}),"\n",(0,s.jsx)(t.p,{children:'The block time pattern is also a "staircase" pattern.'}),"\n",(0,s.jsx)(t.h3,{id:"1-block-import-time",children:"1. Block import time"}),"\n",(0,s.jsx)(t.p,{children:"Step 1, block import time, is the duration of importing a block."}),"\n",(0,s.jsx)(t.p,{children:"Import includes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Data retrieval over the network."}),"\n",(0,s.jsx)(t.li,{children:"Headers, body, and receipt validation."}),"\n",(0,s.jsx)(t.li,{children:"Persisting the block in the database."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Block import takes between a few and tens of milliseconds."}),"\n",(0,s.jsx)(t.h3,{id:"2-block-full-import-time",children:"2. Block full import time"}),"\n",(0,s.jsx)(t.p,{children:"Step 2, block full import time, is the duration of importing a block (step 1) and executing all its transactions."}),"\n",(0,s.jsx)(t.p,{children:"Block full import takes between 1 and 2 seconds per block, depending on the number and complexity of the transactions."}),"\n",(0,s.jsx)(t.h3,{id:"3-block-network-time",children:"3. Block network time"}),"\n",(0,s.jsx)(t.p,{children:"Step 3, block network time, is the duration of propagating a block over the network and executing all its transactions."}),"\n",(0,s.jsx)(t.p,{children:"Block network takes between 13 and 16 seconds."}),"\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:["A CPU-bound task means that the time required to execute the task is determined only by the CPU speed. ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},78373:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/besu-cpu-pattern-during-sync-9dc0a3001d32b5c874786314294831a1.png"},10732:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/block-time-36affada807e42dd327dd24806dbdc08.png"},46721:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/io-utilization-dfd3d125732a0f304100b4f3c9e4ae76.png"},28166:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/system-load-f37361d1a1cd21c6384bfde9cf10ce2f.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);