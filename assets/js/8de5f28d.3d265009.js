"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50823],{26886:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),o=s(11151);const r={description:"Ethereum proof of stake consensus",tags:["public networks"]},i="Proof of stake consensus",c={id:"public-networks/concepts/proof-of-stake/index",title:"Proof of stake consensus",description:"Ethereum proof of stake consensus",source:"@site/versioned_docs/version-23.10.3/public-networks/concepts/proof-of-stake/index.md",sourceDirName:"public-networks/concepts/proof-of-stake",slug:"/public-networks/concepts/proof-of-stake/",permalink:"/23.10.3/public-networks/concepts/proof-of-stake/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/public-networks/concepts/proof-of-stake/index.md",tags:[{label:"public networks",permalink:"/23.10.3/tags/public-networks"}],version:"23.10.3",lastUpdatedAt:1713464890,formattedLastUpdatedAt:"Apr 18, 2024",frontMatter:{description:"Ethereum proof of stake consensus",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"The Merge",permalink:"/23.10.3/public-networks/concepts/the-merge"},next:{title:"Attestations",permalink:"/23.10.3/public-networks/concepts/proof-of-stake/attestations"}},a={},l=[];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"proof-of-stake-consensus",children:"Proof of stake consensus"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/the-merge",children:"The Merge"})," transitioned Ethereum Mainnet to ",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/",children:"proof of stake\n(PoS)"})," consensus."]}),"\n",(0,t.jsxs)(n.p,{children:["In Ethereum's PoS, you must run a ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/the-merge#execution-and-consensus-clients",children:"full node"})," and\n",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/staking/",children:"stake 32 ETH"})," to become a validator."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You must run a beacon node and an execution client to operate a full node on Mainnet.\nTo become a validator, you must also run a validator client (either ",(0,t.jsx)(n.a,{href:"https://docs.teku.consensys.net/get-started/start-teku#start-the-clients-in-a-single-process",children:"in the same process as the\nbeacon node"}),"\nor ",(0,t.jsx)(n.a,{href:"https://docs.teku.consensys.net/get-started/start-teku#run-the-clients-separately",children:"separately"}),")."]})}),"\n",(0,t.jsx)(n.p,{children:"PoS is preferred over proof of work and proof of authority as a consensus mechanism because it is\nmore secure, requires less energy, and lowers the barrier to entry."}),"\n",(0,t.jsxs)(n.p,{children:["The PoS mechanism randomly chooses validators to propose or validate blocks on the ",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/beacon-chain/",children:"Beacon\nChain"})," in defined time frames."]}),"\n",(0,t.jsxs)(n.p,{children:["Proposers are responsible for proposing new consensus blocks, and non-proposing validators are\nresponsible for validating (attesting to) proposed blocks.\nValidators earn ",(0,t.jsx)(n.a,{href:"https://www.blocknative.com/ethereum-staking-calculator",children:"rewards"})," for proposing and\nattesting to consensus blocks eventually included in the Beacon Chain, and penalized for malicious behavior.\n",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/proof-of-stake/attestations",children:"Attestations"})," make up the bulk of validator rewards (~85%).\nValidators also receive transaction fees for included blocks."]}),"\n",(0,t.jsx)(n.p,{children:"Each consensus block contains an execution payload, which contains a list of transactions and other data required to execute and validate the payload."}),"\n",(0,t.jsxs)(n.p,{children:["When a node validates a consensus block, its ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/the-merge#consensus-clients",children:"consensus client"})," processes the block and sends the execution payload to the ",(0,t.jsx)(n.a,{href:"/23.10.3/public-networks/concepts/the-merge#execution-clients",children:"execution client"}),", which:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Assembles a block on the execution layer."}),"\n",(0,t.jsx)(n.li,{children:"Verifies pre-conditions."}),"\n",(0,t.jsx)(n.li,{children:"Executes transactions."}),"\n",(0,t.jsx)(n.li,{children:"Verifies post-conditions."}),"\n",(0,t.jsx)(n.li,{children:"Sends the validity result back to the consensus client."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the block is valid, the execution client includes it in the execution chain and stores the new state in execution state storage."}),"\n",(0,t.jsx)(n.p,{children:"If a consensus block receives attestations backed by enough staked ETH, the block is included in the Beacon Chain."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(67294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);