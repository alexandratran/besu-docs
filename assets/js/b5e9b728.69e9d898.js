"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78517],{64396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(85893),c=n(11151);const o={title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},s="Trace transactions",i={id:"public-networks/how-to/troubleshoot/trace-transactions",title:"Trace transactions",description:"How to trace transactions",source:"@site/docs/public-networks/how-to/troubleshoot/trace-transactions.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/trace-transactions",permalink:"/development/public-networks/how-to/troubleshoot/trace-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/troubleshoot/trace-transactions.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1715646519,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:2,frontMatter:{title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use EVM tool",permalink:"/development/public-networks/how-to/troubleshoot/evm-tool"},next:{title:"Troubleshoot performance",permalink:"/development/public-networks/how-to/troubleshoot/performance"}},a={},l=[{value:"Ad-hoc tracing APIs",id:"ad-hoc-tracing-apis",level:2},{value:"Transaction-trace filtering APIs",id:"transaction-trace-filtering-apis",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"trace-transactions",children:"Trace transactions"}),"\n",(0,r.jsxs)(t.p,{children:["To get detailed information about transaction processing, use the ",(0,r.jsxs)(t.a,{href:"/development/public-networks/reference/api/#trace-methods",children:[(0,r.jsx)(t.code,{children:"TRACE"})," API"]}),". Enable the ",(0,r.jsx)(t.code,{children:"TRACE"})," API using the ",(0,r.jsx)(t.a,{href:"/development/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(t.code,{children:"--rpc-http-api"})})," or ",(0,r.jsx)(t.a,{href:"/development/public-networks/reference/cli/options#rpc-ws-api",children:(0,r.jsx)(t.code,{children:"--rpc-ws-api"})})," command line options."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"TRACE"})," API has two sets of trace calls, ",(0,r.jsx)(t.a,{href:"#ad-hoc-tracing-apis",children:"ad-hoc tracing APIs"})," and ",(0,r.jsx)(t.a,{href:"#transaction-trace-filtering-apis",children:"transaction-trace filtering APIs"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"ad-hoc-tracing-apis",children:"Ad-hoc tracing APIs"}),"\n",(0,r.jsxs)(t.p,{children:["These APIs allow you to use the ",(0,r.jsxs)(t.a,{href:"/development/public-networks/reference/trace-types",children:[(0,r.jsx)(t.code,{children:"trace"}),", ",(0,r.jsx)(t.code,{children:"vmTrace"}),", or ",(0,r.jsx)(t.code,{children:"stateDiff"})]})," diagnostic options when tracing calls or transactions."]}),"\n",(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.a,{href:"/development/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"})," with the ad-hoc\ntracing APIs, the requested block or transaction must be within the number of\n",(0,r.jsx)(t.a,{href:"/development/public-networks/reference/cli/options#bonsai-historical-block-limit",children:"blocks retained"})," (by default, 512\nfrom the head of the chain)."]}),"\n",(0,r.jsx)(t.p,{children:"The ad-hoc tracing APIs are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_call",children:(0,r.jsx)(t.code,{children:"trace_call"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_callmany",children:(0,r.jsx)(t.code,{children:"trace_callMany"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_rawtransaction",children:(0,r.jsx)(t.code,{children:"trace_rawTransaction"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_replayblocktransactions",children:(0,r.jsx)(t.code,{children:"trace_replayBlockTransactions"})})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"transaction-trace-filtering-apis",children:"Transaction-trace filtering APIs"}),"\n",(0,r.jsxs)(t.p,{children:["These APIs allow you to filter and search by specific information such as the block, address, or transaction. These APIs only use the ",(0,r.jsxs)(t.a,{href:"/development/public-networks/reference/trace-types#trace",children:[(0,r.jsx)(t.code,{children:"trace"})," type"]}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["To use the transaction-trace filtering APIs, your node must be an\n",(0,r.jsx)(t.a,{href:"/development/public-networks/get-started/connect/sync-node#run-an-archive-node",children:"archive node"}),", or the requested block\nor transaction must be within the number of\n",(0,r.jsx)(t.a,{href:"/development/public-networks/reference/cli/options#bonsai-historical-block-limit",children:"blocks retained"})," when using\n",(0,r.jsx)(t.a,{href:"/development/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"})," (by default, 512 from the head\nof the chain)."]}),"\n",(0,r.jsx)(t.p,{children:"The transaction-trace filtering APIs are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_block",children:(0,r.jsx)(t.code,{children:"trace_block"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_filter",children:(0,r.jsx)(t.code,{children:"trace_filter"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_get",children:(0,r.jsx)(t.code,{children:"trace_get"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/development/public-networks/reference/api/#trace_transaction",children:(0,r.jsx)(t.code,{children:"trace_transaction"})})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const c={},o=r.createContext(c);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);