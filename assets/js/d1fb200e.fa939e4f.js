"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[57717],{41568:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(85893),c=t(11151);const s={title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},i="Trace transactions",o={id:"public-networks/how-to/troubleshoot/trace-transactions",title:"Trace transactions",description:"How to trace transactions",source:"@site/versioned_docs/version-24.1.0/public-networks/how-to/troubleshoot/trace-transactions.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/trace-transactions",permalink:"/24.1.0/public-networks/how-to/troubleshoot/trace-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/how-to/troubleshoot/trace-transactions.md",tags:[{label:"public networks",permalink:"/24.1.0/tags/public-networks"},{label:"private networks",permalink:"/24.1.0/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1715646519,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:2,frontMatter:{title:"Trace transactions",sidebar_position:2,description:"How to trace transactions",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use EVM tool",permalink:"/24.1.0/public-networks/how-to/troubleshoot/evm-tool"},next:{title:"Troubleshoot performance",permalink:"/24.1.0/public-networks/how-to/troubleshoot/performance"}},a={},l=[{value:"Ad-hoc tracing APIs",id:"ad-hoc-tracing-apis",level:2},{value:"Transaction-trace filtering APIs",id:"transaction-trace-filtering-apis",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"trace-transactions",children:"Trace transactions"}),"\n",(0,n.jsxs)(r.p,{children:["To get detailed information about transaction processing, use the ",(0,n.jsxs)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace-methods",children:[(0,n.jsx)(r.code,{children:"TRACE"})," API"]}),". Enable the ",(0,n.jsx)(r.code,{children:"TRACE"})," API using the ",(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/cli/options#rpc-http-api",children:(0,n.jsx)(r.code,{children:"--rpc-http-api"})})," or ",(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/cli/options#rpc-ws-api",children:(0,n.jsx)(r.code,{children:"--rpc-ws-api"})})," command line options."]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"TRACE"})," API has two sets of trace calls, ",(0,n.jsx)(r.a,{href:"#ad-hoc-tracing-apis",children:"ad-hoc tracing APIs"})," and ",(0,n.jsx)(r.a,{href:"#transaction-trace-filtering-apis",children:"transaction-trace filtering APIs"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"ad-hoc-tracing-apis",children:"Ad-hoc tracing APIs"}),"\n",(0,n.jsxs)(r.p,{children:["These APIs allow you to use the ",(0,n.jsxs)(r.a,{href:"/24.1.0/public-networks/reference/trace-types",children:[(0,n.jsx)(r.code,{children:"trace"}),", ",(0,n.jsx)(r.code,{children:"vmTrace"}),", or ",(0,n.jsx)(r.code,{children:"stateDiff"})]})," diagnostic options when tracing calls or transactions."]}),"\n",(0,n.jsxs)(r.p,{children:["To use the ad-hoc tracing APIs, the requested block or transaction must be within the number of ",(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/cli/options#pruning-blocks-retained",children:"blocks retained"})," with ",(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/cli/options#pruning-enabled",children:"pruning enabled"})," (by default, 1024)."]}),"\n",(0,n.jsx)(r.p,{children:"The ad-hoc tracing APIs are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_call",children:(0,n.jsx)(r.code,{children:"trace_call"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_callmany",children:(0,n.jsx)(r.code,{children:"trace_callMany"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_rawtransaction",children:(0,n.jsx)(r.code,{children:"trace_rawTransaction"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_replayblocktransactions",children:(0,n.jsx)(r.code,{children:"trace_replayBlockTransactions"})})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"transaction-trace-filtering-apis",children:"Transaction-trace filtering APIs"}),"\n",(0,n.jsxs)(r.p,{children:["These APIs allow you to filter and search by specific information such as the block, address, or transaction. These APIs only use the ",(0,n.jsxs)(r.a,{href:"/24.1.0/public-networks/reference/trace-types#trace",children:[(0,n.jsx)(r.code,{children:"trace"})," type"]}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["To use the transaction-trace filtering APIs, your node must be an archive node (that is, synchronized without pruning or fast sync) or the requested block or transaction must be within the number of ",(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/cli/options#pruning-blocks-retained",children:"blocks retained"})," with ",(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/cli/options#pruning-enabled",children:"pruning enabled"})," (by default, 1024)."]}),"\n",(0,n.jsx)(r.p,{children:"The transaction-trace filtering APIs are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_block",children:(0,n.jsx)(r.code,{children:"trace_block"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_filter",children:(0,n.jsx)(r.code,{children:"trace_filter"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_get",children:(0,n.jsx)(r.code,{children:"trace_get"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/24.1.0/public-networks/reference/api/#trace_transaction",children:(0,n.jsx)(r.code,{children:"trace_transaction"})})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>i});var n=t(67294);const c={},s=n.createContext(c);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);