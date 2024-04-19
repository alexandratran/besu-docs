"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[69897],{35267:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(85893),i=n(11151);const s={title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},c="Trace transactions",o={id:"public-networks/how-to/troubleshoot/trace-transactions",title:"Trace transactions",description:"How to trace transactions",source:"@site/versioned_docs/version-24.3.0/public-networks/how-to/troubleshoot/trace-transactions.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/trace-transactions",permalink:"/public-networks/how-to/troubleshoot/trace-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/public-networks/how-to/troubleshoot/trace-transactions.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1710883341,formattedLastUpdatedAt:"Mar 19, 2024",sidebarPosition:2,frontMatter:{title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use EVM tool",permalink:"/public-networks/how-to/troubleshoot/evm-tool"},next:{title:"Troubleshoot performance",permalink:"/public-networks/how-to/troubleshoot/performance"}},a={},l=[{value:"Ad-hoc tracing APIs",id:"ad-hoc-tracing-apis",level:2},{value:"Transaction-trace filtering APIs",id:"transaction-trace-filtering-apis",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"trace-transactions",children:"Trace transactions"}),"\n",(0,t.jsx)(r.admonition,{title:"Forest pruning deprecation notice",type:"caution",children:(0,t.jsxs)(r.p,{children:["Forest pruning (using the ",(0,t.jsx)(r.a,{href:"/public-networks/reference/cli/options#pruning-enabled",children:(0,t.jsx)(r.code,{children:"--pruning-enabled"})})," option) is deprecated and will be removed in a future release. We recommend using ",(0,t.jsx)(r.a,{href:"/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"})," as an alternative for saving disk space."]})}),"\n",(0,t.jsxs)(r.p,{children:["To get detailed information about transaction processing, use the ",(0,t.jsxs)(r.a,{href:"/public-networks/reference/api/#trace-methods",children:[(0,t.jsx)(r.code,{children:"TRACE"})," API"]}),". Enable the ",(0,t.jsx)(r.code,{children:"TRACE"})," API using the ",(0,t.jsx)(r.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,t.jsx)(r.code,{children:"--rpc-http-api"})})," or ",(0,t.jsx)(r.a,{href:"/public-networks/reference/cli/options#rpc-ws-api",children:(0,t.jsx)(r.code,{children:"--rpc-ws-api"})})," command line options."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"TRACE"})," API has two sets of trace calls, ",(0,t.jsx)(r.a,{href:"#ad-hoc-tracing-apis",children:"ad-hoc tracing APIs"})," and ",(0,t.jsx)(r.a,{href:"#transaction-trace-filtering-apis",children:"transaction-trace filtering APIs"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"ad-hoc-tracing-apis",children:"Ad-hoc tracing APIs"}),"\n",(0,t.jsxs)(r.p,{children:["These APIs allow you to use the ",(0,t.jsxs)(r.a,{href:"/public-networks/reference/trace-types",children:[(0,t.jsx)(r.code,{children:"trace"}),", ",(0,t.jsx)(r.code,{children:"vmTrace"}),", or ",(0,t.jsx)(r.code,{children:"stateDiff"})]})," diagnostic options when tracing calls or transactions."]}),"\n",(0,t.jsxs)(r.p,{children:["To use the ad-hoc tracing APIs, the requested block or transaction must be within the number of ",(0,t.jsx)(r.a,{href:"/public-networks/reference/cli/options#pruning-blocks-retained",children:"blocks retained"})," with ",(0,t.jsx)(r.a,{href:"/public-networks/reference/cli/options#pruning-enabled",children:"pruning enabled"})," (by default, 1024)."]}),"\n",(0,t.jsx)(r.p,{children:"The ad-hoc tracing APIs are:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_call",children:(0,t.jsx)(r.code,{children:"trace_call"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_callmany",children:(0,t.jsx)(r.code,{children:"trace_callMany"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_rawtransaction",children:(0,t.jsx)(r.code,{children:"trace_rawTransaction"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_replayblocktransactions",children:(0,t.jsx)(r.code,{children:"trace_replayBlockTransactions"})})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"transaction-trace-filtering-apis",children:"Transaction-trace filtering APIs"}),"\n",(0,t.jsxs)(r.p,{children:["These APIs allow you to filter and search by specific information such as the block, address, or transaction. These APIs only use the ",(0,t.jsxs)(r.a,{href:"/public-networks/reference/trace-types#trace",children:[(0,t.jsx)(r.code,{children:"trace"})," type"]}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["To use the transaction-trace filtering APIs, your node must be an archive node (that is, synchronized without pruning or fast sync) or the requested block or transaction must be within the number of ",(0,t.jsx)(r.a,{href:"/public-networks/reference/cli/options#pruning-blocks-retained",children:"blocks retained"})," with ",(0,t.jsx)(r.a,{href:"/public-networks/reference/cli/options#pruning-enabled",children:"pruning enabled"})," (by default, 1024)."]}),"\n",(0,t.jsx)(r.p,{children:"The transaction-trace filtering APIs are:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_block",children:(0,t.jsx)(r.code,{children:"trace_block"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_filter",children:(0,t.jsx)(r.code,{children:"trace_filter"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_get",children:(0,t.jsx)(r.code,{children:"trace_get"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/public-networks/reference/api/#trace_transaction",children:(0,t.jsx)(r.code,{children:"trace_transaction"})})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>c});var t=n(67294);const i={},s=t.createContext(i);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);