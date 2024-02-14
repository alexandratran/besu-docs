"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[10427],{88374:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(85893),a=t(11151);const r={title:"Performance best practices",description:"Performance best practices",sidebar_position:10,tags:["private networks"]},i="Performance best practices",o={id:"private-networks/how-to/use-privacy/performance-best-practices",title:"Performance best practices",description:"Performance best practices",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/performance-best-practices.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/performance-best-practices",permalink:"/23.4.1/private-networks/how-to/use-privacy/performance-best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/performance-best-practices.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1707849483,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:10,frontMatter:{title:"Performance best practices",description:"Performance best practices",sidebar_position:10,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use the web3js-quorum library",permalink:"/23.4.1/private-networks/how-to/use-privacy/web3js-quorum"},next:{title:"Use local permissioning",permalink:"/23.4.1/private-networks/how-to/use-permissioning/local"}},c={},l=[{value:"General performance",id:"general-performance",level:2},{value:"Use fast, local, solid state storage",id:"use-fast-local-solid-state-storage",level:3},{value:"Private transaction performance",id:"private-transaction-performance",level:2},{value:"Use concurrent submission",id:"use-concurrent-submission",level:3},{value:"Co-locate Besu and Tessera",id:"co-locate-besu-and-tessera",level:3},{value:"Optimize worst-case latency between Tessera nodes",id:"optimize-worst-case-latency-between-tessera-nodes",level:3},{value:"Use stateful nonce management",id:"use-stateful-nonce-management",level:3},{value:"Use random senders for privacy marker transactions",id:"use-random-senders-for-privacy-marker-transactions",level:3},{value:"Avoid queuing transactions in Tessera",id:"avoid-queuing-transactions-in-tessera",level:3},{value:"Limit the group size to reduce communication overhead",id:"limit-the-group-size-to-reduce-communication-overhead",level:3},{value:"Limit group membership changes and make them quick",id:"limit-group-membership-changes-and-make-them-quick",level:3}];function d(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"performance-best-practices",children:"Performance best practices"}),"\n",(0,n.jsx)(s.p,{children:"This document collects deployment and usage tips to help you achieve high performance for private transactions. If transaction throughput or latency is not meeting your expectations, please consider the following before raising an issue."}),"\n",(0,n.jsx)(s.h2,{id:"general-performance",children:"General performance"}),"\n",(0,n.jsx)(s.p,{children:"Private transactions use the same facilities as public ones. General Besu performance tunings apply. Specific approaches are out of scope of this document, except for the following, which strongly impacts performance:"}),"\n",(0,n.jsx)(s.h3,{id:"use-fast-local-solid-state-storage",children:"Use fast, local, solid state storage"}),"\n",(0,n.jsx)(s.p,{children:"Running EVM transactions creates a lot of random reads that are executed sequentially. The Besu data folder for high throughput nodes should be located on the fastest possible storage media."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Prefer ",(0,n.jsx)(s.a,{href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance",children:"NVMe"})," attached SLC flash or Intel Optane."]}),"\n",(0,n.jsx)(s.li,{children:"Avoid network attached SSDs or cloud storage with limited input/output operations per second."}),"\n",(0,n.jsx)(s.li,{children:"Do not use spinning disks under any circumstances."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"private-transaction-performance",children:"Private transaction performance"}),"\n",(0,n.jsx)(s.h3,{id:"use-concurrent-submission",children:"Use concurrent submission"}),"\n",(0,n.jsxs)(s.p,{children:["When submitting a private transaction using ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:"web3js-quorum"}),", the submit call will only return once the privacy marker transaction has been included in a block. This limits the throughput to at most one private transaction per block when submitting from a single thread. To increase throughput, use web3js-quorum from multiple concurrent threads or processes."]}),"\n",(0,n.jsx)(s.h3,{id:"co-locate-besu-and-tessera",children:"Co-locate Besu and Tessera"}),"\n",(0,n.jsx)(s.p,{children:"Besu has to talk to its local Tessera node frequently while handling a block. While we do not recommend running them on the same node, minimizing the latency between Besu and Tessera will improve block processing times. Besu and Tessera should not be hosted in geographically distributed locations."}),"\n",(0,n.jsx)(s.h3,{id:"optimize-worst-case-latency-between-tessera-nodes",children:"Optimize worst-case latency between Tessera nodes"}),"\n",(0,n.jsx)(s.p,{children:"When distributing a new private transaction between Tessera nodes, the overall throughput is determined by the slowest Tessera nodes. Try to minimize network latency between Tessera nodes and do not mix different machine types when hosting Tessera."}),"\n",(0,n.jsx)(s.h3,{id:"use-stateful-nonce-management",children:"Use stateful nonce management"}),"\n",(0,n.jsx)(s.p,{children:"Management of public and private nonces in web3js-quorum is stateless: before a transaction is sent, web3js-quorum has to query for those nonces. This is increasing latency, the node's load, and is a source of fragility due to nonce collision when multiple senders try to use the same account concurrently."}),"\n",(0,n.jsxs)(s.p,{children:["For performance and reliability it is advantageous to manage nonces in a stateful manner on the client side instead of querying them for every transaction. If custom code for this is not an option, ",(0,n.jsx)(s.a,{href:"https://consensys.net/codefi/orchestrate/",children:"Orchestrate"})," can be used."]}),"\n",(0,n.jsx)(s.h3,{id:"use-random-senders-for-privacy-marker-transactions",children:"Use random senders for privacy marker transactions"}),"\n",(0,n.jsxs)(s.p,{children:["To avoid public nonce management, privacy marker transactions can be sent using a ",(0,n.jsx)(s.a,{href:"https://besu.hyperledger.org/en/stable/Reference/CLI/CLI-Syntax/#privacy-marker-transaction-signing-key-file",children:"random account per transaction"}),". This option is only available for zero gas networks."]}),"\n",(0,n.jsx)(s.h3,{id:"avoid-queuing-transactions-in-tessera",children:"Avoid queuing transactions in Tessera"}),"\n",(0,n.jsx)(s.p,{children:"When Tessera is overloaded with transactions, the performance breaks down catastrophically due to unbounded growth of the request queue. Avoid sending more transactions to Tessera than it can handle. Sudden jumps in submission latency and submission failure rate should be answered with a load reduction on the client side, for example using a back-off scheme."}),"\n",(0,n.jsx)(s.p,{children:"Please note that this is not Tessera specific but a general issue in distributed systems. It just happens that if queueing discipline is not maintained, Tessera tends to be the first component to fail."}),"\n",(0,n.jsx)(s.h3,{id:"limit-the-group-size-to-reduce-communication-overhead",children:"Limit the group size to reduce communication overhead"}),"\n",(0,n.jsx)(s.p,{children:"Smaller groups need fewer communication for transaction propagation. If reducing the number of Tessera nodes involved in a transaction is an option, it will lead to slightly better tail latencies. Multi-tenancy Tessera can be used to have large groups with a small number of Tessera nodes (possibly only one)."}),"\n",(0,n.jsx)(s.h3,{id:"limit-group-membership-changes-and-make-them-quick",children:"Limit group membership changes and make them quick"}),"\n",(0,n.jsx)(s.p,{children:"Groups are locked (prevented from executing transactions) during membership changes. Try to minimize the number of times the membership changes. When possible, spread load across multiple groups to always have some groups available while others are locked. Consider batching group membership changes if possible. Note however that this does not work with the default management contract, yet."})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>i});var n=t(67294);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);