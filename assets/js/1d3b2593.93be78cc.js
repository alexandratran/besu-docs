"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[58994],{42036:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=r(85893),t=r(11151);const i={title:"Access logs using JSON-RPC",sidebar_position:5,description:"Accessing logs using the Hyperledger Besu API",tags:["public networks","private networks"]},c="Access logs using the Hyperledger Besu API",l={id:"public-networks/how-to/use-besu-api/access-logs",title:"Access logs using JSON-RPC",description:"Accessing logs using the Hyperledger Besu API",source:"@site/versioned_docs/version-24.1.0/public-networks/how-to/use-besu-api/access-logs.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/access-logs",permalink:"/24.1.0/public-networks/how-to/use-besu-api/access-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/how-to/use-besu-api/access-logs.md",tags:[{label:"public networks",permalink:"/24.1.0/tags/public-networks"},{label:"private networks",permalink:"/24.1.0/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1712334265,formattedLastUpdatedAt:"Apr 5, 2024",sidebarPosition:5,frontMatter:{title:"Access logs using JSON-RPC",sidebar_position:5,description:"Accessing logs using the Hyperledger Besu API",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Authenticate over JSON-RPC requests",permalink:"/24.1.0/public-networks/how-to/use-besu-api/authenticate"},next:{title:"Use the Engine API",permalink:"/24.1.0/public-networks/how-to/use-engine-api"}},a={},o=[{value:"Create a filter",id:"create-a-filter",level:2},{value:"Poll a filter for changes",id:"poll-a-filter-for-changes",level:3},{value:"Get all logs for a filter",id:"get-all-logs-for-a-filter",level:3},{value:"Uninstall a filter",id:"uninstall-a-filter",level:2},{value:"Filters for private contracts",id:"filters-for-private-contracts",level:2},{value:"Get logs using a filter options object",id:"get-logs-using-a-filter-options-object",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"access-logs-using-the-hyperledger-besu-api",children:"Access logs using the Hyperledger Besu API"}),"\n",(0,s.jsxs)(n.p,{children:["Subscribe to events, such as logs, using either ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/how-to/use-besu-api/rpc-pubsub",children:"RPC Pub/Sub over WebSockets"})," or filters over HTTP."]}),"\n",(0,s.jsx)(n.p,{children:"Access logs using the following Hyperledger Besu API methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterchanges",children:(0,s.jsx)(n.code,{children:"eth_getFilterChanges"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterlogs",children:(0,s.jsx)(n.code,{children:"eth_getFilterLogs"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getlogs",children:(0,s.jsx)(n.code,{children:"eth_getLogs"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_newfilter",children:(0,s.jsx)(n.code,{children:"eth_newFilter"})})," to create the filter before using ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterchanges",children:(0,s.jsx)(n.code,{children:"eth_getFilterChanges"})})," and ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterlogs",children:(0,s.jsx)(n.code,{children:"eth_getFilterLogs"})}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Access logs for ",(0,s.jsx)(n.a,{href:"/24.1.0/private-networks/concepts/privacy/",children:"private contracts"})," using the equivalent ",(0,s.jsxs)(n.a,{href:"#filters-for-private-contracts",children:[(0,s.jsx)(n.code,{children:"priv_*"})," methods and specifying the privacy group ID"]}),". For example, ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#priv_getlogs",children:(0,s.jsx)(n.code,{children:"priv_getLogs"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The following examples use the sample contract included in ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/events-and-logs",children:"events and logs"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-filter",children:"Create a filter"}),"\n",(0,s.jsxs)(n.p,{children:["Create a filter using ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_newfilter",children:(0,s.jsx)(n.code,{children:"eth_newFilter"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/events-and-logs",children:"example contract"})," was deployed to 0x42699a7612a82f1d9c36148af9c77354759b210b, the following request for ",(0,s.jsx)(n.code,{children:"eth_newFilter"})," creates a filter to log when ",(0,s.jsx)(n.code,{children:"valueIndexed"})," is set to 5:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "eth_newFilter",\n  "params": [\n    {\n      "fromBlock": "earliest",\n      "toBlock": "latest",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "topics": [\n        ["0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8"],\n        ["0x0000000000000000000000000000000000000000000000000000000000000005"]\n      ]\n    }\n  ],\n  "id": 1\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_newfilter",children:(0,s.jsx)(n.code,{children:"eth_newFilter"})})," returns a filter ID hash (for example, ",(0,s.jsx)(n.code,{children:"0x1ddf0c00989044e9b41cc0ae40272df3"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"poll-a-filter-for-changes",children:"Poll a filter for changes"}),"\n",(0,s.jsxs)(n.p,{children:["To poll the filter for changes since the last poll, use ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterchanges",children:(0,s.jsx)(n.code,{children:"eth_getFilterChanges"})})," with the filter ID hash returned by ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_newfilter",children:(0,s.jsx)(n.code,{children:"eth_newFilter"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the contract had been executed twice since the last poll, with ",(0,s.jsx)(n.code,{children:"valueIndexed"})," set to 1 and 5, ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterchanges",children:(0,s.jsx)(n.code,{children:"eth_getFilterChanges"})})," returns only the log where the ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/events-and-logs#event-parameters",children:"topic"})," for ",(0,s.jsx)(n.code,{children:"valueIndexed"})," is 5:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "logIndex": "0x0",\n      "removed": false,\n      "blockNumber": "0x21c",\n      "blockHash": "0xc7e6c9d5b9f522b2c9d2991546be0a8737e587beb6628c056f3c327a44b45132",\n      "transactionHash": "0xfd1a40f9fbf89c97b4545ec9db774c85e51dd8a3545f969418a22f9cb79417c5",\n      "transactionIndex": "0x0",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "data": "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "topics": [\n        "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n        "0x0000000000000000000000000000000000000000000000000000000000000005"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"get-all-logs-for-a-filter",children:"Get all logs for a filter"}),"\n",(0,s.jsxs)(n.p,{children:["To get all logs for a filter, use ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterlogs",children:(0,s.jsx)(n.code,{children:"eth_getFilterLogs"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the contract had been executed twice with ",(0,s.jsx)(n.code,{children:"valueIndexed"})," set to 5 since the filter was created using ",(0,s.jsx)(n.code,{children:"eth_newFilter"}),", ",(0,s.jsx)(n.code,{children:"eth_getFilterLogs"})," returns:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "logIndex": "0x0",\n      "removed": false,\n      "blockNumber": "0x1a7",\n      "blockHash": "0x4edda22a242ddc7bc51e2b6b11e63cd67be1af7389470cdea9c869768ff75d42",\n      "transactionHash": "0x9535bf8830a72ca7d0020df0b547adc4d0ecc4321b7d5b5d6beb1eccee5c0afa",\n      "transactionIndex": "0x0",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "data": "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "topics": [\n        "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n        "0x0000000000000000000000000000000000000000000000000000000000000005"\n      ]\n    },\n    {\n      "logIndex": "0x0",\n      "removed": false,\n      "blockNumber": "0x21c",\n      "blockHash": "0xc7e6c9d5b9f522b2c9d2991546be0a8737e587beb6628c056f3c327a44b45132",\n      "transactionHash": "0xfd1a40f9fbf89c97b4545ec9db774c85e51dd8a3545f969418a22f9cb79417c5",\n      "transactionIndex": "0x0",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "data": "0x0000000000000000000000000000000000000000000000000000000000000005",\n      "topics": [\n        "0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8",\n        "0x0000000000000000000000000000000000000000000000000000000000000005"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"#get-logs-using-a-filter-options-object",children:(0,s.jsx)(n.code,{children:"eth_getLogs"})})," with a filter options object to get all logs matching the filter options instead of using ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_newfilter",children:(0,s.jsx)(n.code,{children:"eth_newFilter"})})," followed by ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getfilterlogs",children:(0,s.jsx)(n.code,{children:"eth_getFilterLogs"})}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"uninstall-a-filter",children:"Uninstall a filter"}),"\n",(0,s.jsxs)(n.p,{children:["When a filter is no longer required, use ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_uninstallfilter",children:(0,s.jsx)(n.code,{children:"eth_uninstallFilter"})})," to remove the filter."]}),"\n",(0,s.jsx)(n.h2,{id:"filters-for-private-contracts",children:"Filters for private contracts"}),"\n",(0,s.jsx)(n.p,{children:"Filters for private contracts are created, accessed, and uninstalled using:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#priv_getfilterchanges",children:(0,s.jsx)(n.code,{children:"priv_getFilterChanges"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#priv_getfilterlogs",children:(0,s.jsx)(n.code,{children:"priv_getFilterLogs"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#priv_getlogs",children:(0,s.jsx)(n.code,{children:"priv_getLogs"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#priv_newfilter",children:(0,s.jsx)(n.code,{children:"priv_newFilter"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#priv_uninstallfilter",children:(0,s.jsx)(n.code,{children:"priv_uninstallFilter"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/24.1.0/private-networks/concepts/privacy/",children:"privacy group ID"})," must be specified as parameter 0 for the ",(0,s.jsx)(n.code,{children:"priv"})," methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "priv_newFilter",\n  "params": [\n    "4rFldHM792LeP/e2WPkTXZedjwKuTr/KwCFTt6mBbkI=",\n    {\n      "fromBlock": "earliest",\n      "toBlock": "latest",\n      "addresses": ["0x991cc548c154b2953cc48c02f782e1314097dfbb"],\n      "topics": [\n        "0x85bea11d86cefb165374e0f727bacf21dc2f4ea816493981ecf72dcfb212a410"\n      ]\n    }\n  ],\n  "id": 1\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"get-logs-using-a-filter-options-object",children:"Get logs using a filter options object"}),"\n",(0,s.jsxs)(n.p,{children:["To get all logs for a filter options object, use ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#eth_getlogs",children:(0,s.jsx)(n.code,{children:"eth_getLogs"})})," or ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/api/#priv_getlogs",children:(0,s.jsx)(n.code,{children:"priv_getLogs"})})," for a private contract."]}),"\n",(0,s.jsxs)(n.p,{children:["The following request for ",(0,s.jsx)(n.code,{children:"eth_getLogs"})," returns all the logs where the example contract has been deployed to ",(0,s.jsx)(n.code,{children:"0x42699a7612a82f1d9c36148af9c77354759b210b"})," and executed with ",(0,s.jsx)(n.code,{children:"valueIndexed"})," set to 5."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "eth_getLogs",\n  "params": [\n    {\n      "fromBlock": "earliest",\n      "toBlock": "latest",\n      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",\n      "topics": [\n        ["0xd3610b1c54575b7f4f0dc03d210b8ac55624ae007679b7a928a4f25a709331a8"],\n        ["0x0000000000000000000000000000000000000000000000000000000000000005"]\n      ]\n    }\n  ],\n  "id": 1\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The above example returns the same result as calling ",(0,s.jsx)(n.a,{href:"#creating-a-filter",children:"eth_newFilter"})," followed by ",(0,s.jsx)(n.a,{href:"#getting-all-logs-for-a-filter",children:"eth_getFilterLogs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var s=r(67294);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);