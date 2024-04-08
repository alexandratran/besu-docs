"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[13917],{95186:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(85893),o=s(11151);const i={title:"Attestations",sidebar_position:1,description:"Proof of stake attestations",tags:["public networks"]},r="Attestations",a={id:"public-networks/concepts/proof-of-stake/attestations",title:"Attestations",description:"Proof of stake attestations",source:"@site/versioned_docs/version-23.7.3/public-networks/concepts/proof-of-stake/attestations.md",sourceDirName:"public-networks/concepts/proof-of-stake",slug:"/public-networks/concepts/proof-of-stake/attestations",permalink:"/23.7.3/public-networks/concepts/proof-of-stake/attestations",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/concepts/proof-of-stake/attestations.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"}],version:"23.7.3",lastUpdatedAt:1712348844,formattedLastUpdatedAt:"Apr 5, 2024",sidebarPosition:1,frontMatter:{title:"Attestations",sidebar_position:1,description:"Proof of stake attestations",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Proof of stake consensus",permalink:"/23.7.3/public-networks/concepts/proof-of-stake/"},next:{title:"Data storage formats",permalink:"/23.7.3/public-networks/concepts/data-storage-formats"}},c={},l=[{value:"What are attestations?",id:"what-are-attestations",level:2},{value:"Attestation rewards",id:"attestation-rewards",level:2},{value:"Incorrect attestations",id:"incorrect-attestations",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"attestations",children:"Attestations"}),"\n",(0,n.jsxs)(t.p,{children:["Ethereum's move to ",(0,n.jsx)(t.a,{href:"/23.7.3/public-networks/concepts/proof-of-stake/",children:"proof of stake consensus"})," has brought many changes to the way the network operates. An important aspect of proof of stake is the need for validators to provide attestations in a timely and accurate manner. However, missed attestations have become a common occurrence among validators, leading to a loss of rewards and earnings. This page explores the context behind missing attestations."]}),"\n",(0,n.jsx)(t.h2,{id:"what-are-attestations",children:"What are attestations?"}),"\n",(0,n.jsxs)(t.p,{children:["Every epoch (6.4 minutes), a validator proposes an attestation to the network. The attestation is for a specific slot (every 12 seconds) in the epoch. The attestation votes in favor of the validator's view of the chain, in particular, the most recent justified block and the first block in the current epoch (known as ",(0,n.jsx)(t.em,{children:"source"})," and ",(0,n.jsx)(t.em,{children:"target"})," checkpoints). This information is collected for all participating validators, enabling the network to reach consensus about the state of the blockchain."]}),"\n",(0,n.jsxs)(t.p,{children:["Honest nodes have 1/3 * ",(0,n.jsx)(t.code,{children:"SECONDS_PER_SLOT"})," (4 seconds) from the start of the slot to either receive the block or decide there was no block produced and attest to an \u201cempty\u201d or \u201cskip\u201d slot. Once this time has elapsed, attesters should broadcast their attestation reflecting their local view of the chain."]}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md#attesting",children:"official specification"})," for more information about attestations."]}),"\n",(0,n.jsx)(t.h2,{id:"attestation-rewards",children:"Attestation rewards"}),"\n",(0,n.jsx)(t.p,{children:"Around 85% of validators' rewards come from making attestations. Although committee and slot assignments for attesting are randomized, every active validator will be selected to make exactly one attestation each epoch."}),"\n",(0,n.jsx)(t.p,{children:"Attestations receive rewards only if they're included in Beacon Chain blocks. An attestation contains three votes. Each vote is eligible for a reward, subject to the following conditions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Getting attestations included with the correct source checkpoint within 5 slots"}),"\n",(0,n.jsx)(t.li,{children:"Getting attestations included with the correct target checkpoint within 32 slots"}),"\n",(0,n.jsx)(t.li,{children:"Getting attestations included with the correct head within 1 slot immediately"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:['Each of these duties carries a reward rate, a portion of the entire "weight denominator," or the sum of weighted rewards for each attestation. The remaining weights relate to participating in sync committees and proposing blocks (excluding any tips/MEV, the bulk of block rewards). The following table (from ',(0,n.jsx)(t.a,{href:"https://eth2book.info/bellatrix/part2/incentives/rewards/",children:"Upgrading Ethereum"}),") breaks down these weights for cumulative rewards:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Percentage"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TIMELY_SOURCE_WEIGHT"})}),(0,n.jsx)(t.td,{children:"21.9%"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uint64(14)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TIMELY_TARGET_WEIGHT"})}),(0,n.jsx)(t.td,{children:"40.6%"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uint64(26)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TIMELY_HEAD_WEIGHT"})}),(0,n.jsx)(t.td,{children:"21.9%"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uint64(14)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"SYNC_REWARD_WEIGHT"})}),(0,n.jsx)(t.td,{children:"3.1%"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uint64(2)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"PROPOSER_WEIGHT"})}),(0,n.jsx)(t.td,{children:"12.5%"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uint64(8)"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"WEIGHT_DENOMINATOR"})}),(0,n.jsx)(t.td,{children:"100%"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uint64(64)"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"incorrect-attestations",children:"Incorrect attestations"}),"\n",(0,n.jsx)(t.p,{children:"If you have attestations with incorrect head votes, your node might be experiencing slow block imports. However, block producers can also be slow to publish blocks, resulting in a majority of validators getting the head vote wrong. A <100% head vote doesn't necessarily imply a problem with your node."}),"\n",(0,n.jsx)(t.p,{children:"In case of a slowdown, identify whether the issue is with the beacon node or the execution client. Block timing logs can be helpful in determining this."}),"\n",(0,n.jsxs)(t.p,{children:["If you're using ",(0,n.jsx)(t.a,{href:"https://docs.teku.consensys.net/",children:"Teku"})," as a consensus layer client, identify late blocks (the block didn't get to Teku in time) with the following kind of log:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Late Block Import *** Block: c2b911533a8f8d5e699d1a334e0576d2b9aa4caa726bde8b827548b579b47c68 (4765916) proposer 6230 arrival 3475ms, pre-state_retrieved +5ms, processed +185ms, execution_payload_result_received +1436ms, begin_importing +0ms, transaction_prepared +0ms, transaction_committed +0ms, completed +21ms\n"})}),"\n",(0,n.jsx)(t.p,{children:"The time of arrival indicates how much time elapsed after the start of the slot before your node received the block. In this example, the block arrived after 3475ms, which is slower than optimal, but still enough time for Teku to create an attestation 4 seconds into the slot."}),"\n",(0,n.jsx)(t.p,{children:"Typically, delayed arrivals occur when the block producer is slow in generating the block. It's also possible that the block was published on time but took longer to propagate to your node through peer-to-peer gossip. If delayed arrivals are a recurring issue, it might be a problem with your node, such as an incorrect system clock, network issues, or a reduction in the number of peers."}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Attestations are complicated. Rewards can be impacted by:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The contents of a block (how long it takes to compute)."}),"\n",(0,n.jsx)(t.li,{children:"The hardware processing that block (execution speed)."}),"\n",(0,n.jsx)(t.li,{children:"How long it takes for the block to arrive to Besu from the consensus layer."}),"\n",(0,n.jsx)(t.li,{children:"The arrival time of the block from other consensus layer peers. Besu and your consensus layer client have no control over how late into a slot they receive blocks."}),"\n",(0,n.jsx)(t.li,{children:"General network latency."}),"\n",(0,n.jsx)(t.li,{children:"The status of either Besu or the consensus layer client."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/23.7.3/public-networks/how-to/monitor/",children:"Monitoring"})," your validator carefully for uptime, execution speed, and a valid consensus layer connection will help you explore attestation performance for your node."]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://eth2book.info/bellatrix/part2/incentives/rewards/",children:"Upgrading Ethereum"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.symphonious.net/2022/09/25/understanding-attestation-misses/",children:"Understanding Attestation Misses"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://notes.ethereum.org/DaWh-02HQ4qftum1xdphkg?view#Broadcast-attestation",children:"Block production in Ethereum after the Merge"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.md#attesting",children:"Ethereum Consensus Specs"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);