"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[49890,96134],{15630:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=s(85893),r=s(11151);const a={},l=void 0,c={id:"global/postman",title:"postman",description:"View the Besu JSON-RPC APIs documentation in the Postman format and obtain example requests in multiple coding languages.",source:"@site/versioned_docs/version-24.1.0/global/postman.md",sourceDirName:"global",slug:"/global/postman",permalink:"/global/postman",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/global/postman.md",tags:[],version:"24.1.0",lastUpdatedAt:1707932618,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{}},o={},i=[{value:"Run in Postman",id:"run-in-postman",level:4},{value:"Download collection",id:"download-collection",level:4}];function d(e){const n={a:"a",admonition:"admonition",h4:"h4",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(n.admonition,{title:"Besu JSON-RPC APIs documentation in Postman format",type:"info",children:[(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://www.postman.com/hyperledger/workspace/hyperledger-besu/collection/11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8",children:"Besu JSON-RPC APIs documentation"})," in the Postman format and obtain example requests in multiple coding languages."]}),(0,t.jsx)(n.h4,{id:"run-in-postman",children:"Run in Postman"}),(0,t.jsx)(n.p,{children:"Click the following button to fork the collection and run requests directly on your local network."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://god.gw.postman.com/run-collection/11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8?action=collection%2Ffork&collection-url=entityId%3D11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8%26entityType%3Dcollection%26workspaceId%3Dc4b60b6f-9f15-42d0-8327-7ebabca6f0fd#?env%5BBesu%20node%20on%20local%20host%5D=W3sia2V5IjoicnBjLWh0dHAtaG9zdCIsInZhbHVlIjoibG9jYWxob3N0IiwiZW5hYmxlZCI6ZmFsc2V9LHsia2V5IjoicnBjLWh0dHAtcG9ydCIsInZhbHVlIjoiODU0NSIsImVuYWJsZWQiOmZhbHNlfV0=",children:(0,t.jsx)(n.img,{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})}),"."]}),(0,t.jsx)(n.h4,{id:"download-collection",children:"Download collection"}),(0,t.jsxs)(n.p,{children:["Alternatively you can ",(0,t.jsx)(n.a,{target:"_blank",href:s(72205).Z+"",children:"download the JSON collection file"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},87235:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=s(85893),r=s(11151),a=s(15630),l=s(74866),c=s(85162);const o={title:"Use JSON-RPC over HTTP, WS, and IPC",sidebar_position:1,description:"How to access the Hyperledger Besu API using JSON-RPC",tags:["public networks","private networks"]},i="Use JSON-RPC over HTTP, WebSocket, and IPC",d={id:"public-networks/how-to/use-besu-api/json-rpc",title:"Use JSON-RPC over HTTP, WS, and IPC",description:"How to access the Hyperledger Besu API using JSON-RPC",source:"@site/versioned_docs/version-24.1.0/public-networks/how-to/use-besu-api/json-rpc.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/json-rpc",permalink:"/public-networks/how-to/use-besu-api/json-rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/how-to/use-besu-api/json-rpc.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1707932618,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:1,frontMatter:{title:"Use JSON-RPC over HTTP, WS, and IPC",sidebar_position:1,description:"How to access the Hyperledger Besu API using JSON-RPC",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Access the Hyperledger Besu API",permalink:"/public-networks/how-to/use-besu-api/"},next:{title:"Use RPC Pub/Sub over WS",permalink:"/public-networks/how-to/use-besu-api/rpc-pubsub"}},h={},u=[{value:"Geth console",id:"geth-console",level:2},{value:"JSON-RPC authentication",id:"json-rpc-authentication",level:2},{value:"HTTP and WebSocket requests",id:"http-and-websocket-requests",level:2},{value:"HTTP",id:"http",level:3},{value:"WebSocket",id:"websocket",level:3},{value:"Readiness and liveness endpoints",id:"readiness-and-liveness-endpoints",level:2},{value:"Readiness",id:"readiness",level:3},{value:"Liveness",id:"liveness",level:3},{value:"API methods enabled by default",id:"api-methods-enabled-by-default",level:2},{value:"Block parameter",id:"block-parameter",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-json-rpc-over-http-websocket-and-ipc",children:"Use JSON-RPC over HTTP, WebSocket, and IPC"}),"\n",(0,t.jsx)(n.p,{children:"JSON-RPC APIs allow you to interact with your node. JSON-RPC endpoints are not enabled by default."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"You should secure access to your node's JSON-RPC endpoints. Users with access to your node via JSON-RPC can make calls directly to your node, causing your node to consume resources."})}),"\n",(0,t.jsxs)(n.p,{children:["To enable JSON-RPC over HTTP or WebSocket, use the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-enabled"})})," and ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-ws-enabled"})})," options."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable JSON-RPC over an ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/#socket-path",children:"IPC socket"}),", use the ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-enabled"})," option."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--Xrpc-ipc-enabled"})," is an early access option."]})}),"\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsx)(n.h2,{id:"geth-console",children:"Geth console"}),"\n",(0,t.jsx)(n.p,{children:"The geth console is a REPL (Read, Evaluate, & Print Loop) JavaScript console. Use JSON-RPC APIs supported by geth and Hyperledger Besu directly in the console."}),"\n",(0,t.jsx)(n.p,{children:"To use the geth console with Besu:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Start Besu with the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-enabled"})})," or ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-enabled"})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Specify which APIs to enable using the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,t.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-api"})," option."]}),"\n",(0,t.jsx)(n.li,{children:"Start the geth console specifying the JSON-RPC endpoint:"}),"\n"]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"HTTP endpoint",label:"HTTP endpoint",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"geth attach http://localhost:8545\n"})})}),(0,t.jsx)(c.Z,{value:"IPC endpoint",label:"IPC endpoint",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"geth attach /path/to/besu.ipc\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Use the geth console to call ",(0,t.jsx)(n.a,{href:"/public-networks/reference/api/",children:"JSON-RPC API methods"})," that geth and Besu share."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"eth.syncing\n"})}),"\n",(0,t.jsx)(n.h2,{id:"json-rpc-authentication",children:"JSON-RPC authentication"}),"\n",(0,t.jsxs)(n.p,{children:["Besu disables ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/authenticate",children:"Authentication"})," by default."]}),"\n",(0,t.jsx)(n.h2,{id:"http-and-websocket-requests",children:"HTTP and WebSocket requests"}),"\n",(0,t.jsx)(n.h3,{id:"http",children:"HTTP"}),"\n",(0,t.jsxs)(n.p,{children:["To make RPC requests over HTTP, you can use ",(0,t.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:(0,t.jsx)(n.code,{children:"curl"})}),"."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","id":<request-ID>,"method":"<method-name>","params":[<method-parameters>]}\' <JSON-RPC-http-endpoint:port>\n'})})}),(0,t.jsx)(c.Z,{value:"curl HTTP request",label:"curl HTTP request",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}\' http://127.0.0.1:8555\n'})})}),(0,t.jsx)(c.Z,{value:"JSON result",label:"JSON result",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": "0x60e"\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"curl"})," to make multiple RPC requests (batch requests) over HTTP at the same time. Send the requests as an array, and receive an array of responses. The default number of allowed requests in a RPC batch request is ",(0,t.jsx)(n.code,{children:"1024"}),". Use the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-max-batch-size",children:(0,t.jsx)(n.code,{children:"--rpc-http-max-batch-size"})})," command line option to update the default value."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"curl HTTP request",label:"curl HTTP request",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'[{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}, {"jsonrpc":"2.0","id":"2","method":"admin_peers","params":[]}]\' http://127.0.0.1:8555\n'})})}),(0,t.jsx)(c.Z,{value:"JSON result",label:"JSON result",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "jsonrpc": "2.0",\n    "id": "1",\n    "result": "0x60e"\n  },\n  {\n    "jsonrpc": "2.0",\n    "id": "2",\n    "result": []\n  }\n]\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"websocket",children:"WebSocket"}),"\n",(0,t.jsxs)(n.p,{children:["To make RPC requests over WebSocket, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/websockets/wscat",children:(0,t.jsx)(n.code,{children:"wscat"})}),", a Node.js based command-line tool."]}),"\n",(0,t.jsxs)(n.p,{children:["First connect to the WebSocket server using ",(0,t.jsx)(n.code,{children:"wscat"})," (you only need to connect once per session):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wscat -c ws://<JSON-RPC-ws-endpoint:port>\n"})}),"\n",(0,t.jsx)(n.p,{children:"After you establish a connection, the terminal displays a '>' prompt. Send individual requests as a JSON data package at each prompt."}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","id":<request-ID>,"method":"<method-name>","params":[<method-parameters>]}\n'})})}),(0,t.jsx)(c.Z,{value:"wscat WS request",label:"wscat WS request",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}\n'})})}),(0,t.jsx)(c.Z,{value:"JSON result",label:"JSON result",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": "0x23"\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"wscat"})," to make multiple RPC requests over WebSocket at the same time. Send the requests as an array, and receive an array of responses."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"wscat WS request",label:"wscat WS request",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}, {"jsonrpc":"2.0","id":"2","method":"admin_peers","params":[]}]\n'})})}),(0,t.jsx)(c.Z,{value:"JSON result",label:"JSON result",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "jsonrpc": "2.0",\n    "id": "1",\n    "result": "0x23"\n  },\n  {\n    "jsonrpc": "2.0",\n    "id": "2",\n    "result": []\n  }\n]\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"wscat"})," does not support headers. ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/authenticate",children:"Authentication"})," requires you to pass an authentication token in the request header. To use authentication with WebSocket, you need an app that supports headers."]})}),"\n",(0,t.jsx)(n.h2,{id:"readiness-and-liveness-endpoints",children:"Readiness and liveness endpoints"}),"\n",(0,t.jsxs)(n.p,{children:["Besu provides readiness and liveness endpoints to confirm the Besu node status. Both return a ",(0,t.jsx)(n.code,{children:"200 OK"})," status when ready or live and a ",(0,t.jsx)(n.code,{children:"503 Service Unavailable"})," status if not ready or live."]}),"\n",(0,t.jsx)(n.h3,{id:"readiness",children:"Readiness"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the readiness check requires a connected peer and the node to be within two blocks of the best known block. If you have ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-enabled",children:"disabled P2P communication"}),", you do not need peers. A live node with P2P disabled is always ready."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the query parameters ",(0,t.jsx)(n.code,{children:"minPeers"})," and ",(0,t.jsx)(n.code,{children:"maxBlocksBehind"})," to adjust the number of peers required and the number of blocks tolerance."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"Readiness endpoint",label:"Readiness endpoint",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://<JSON-RPC-HTTP-endpoint:port>/readiness\n"})})}),(0,t.jsx)(c.Z,{value:"curl request example",label:"curl request example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -v 'http://localhost:8545/readiness'\n"})})}),(0,t.jsx)(c.Z,{value:"Query parameters example",label:"Query parameters example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -v 'http://localhost:8545/readiness?minPeers=0&maxBlocksBehind=10'\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"liveness",children:"Liveness"}),"\n",(0,t.jsxs)(n.p,{children:["The liveness check requires the JSON-RPC server to be up. You can use the endpoint to verify that the node can respond to RPC calls. The status in the response will always be ",(0,t.jsx)(n.code,{children:"UP"}),"."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"Liveness endpoint",label:"Liveness endpoint",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://<JSON-RPC-HTTP-endpoint:port>/liveness\n"})})}),(0,t.jsx)(c.Z,{value:"curl request example",label:"curl request example",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -v 'http://localhost:8545/liveness'\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"api-methods-enabled-by-default",children:"API methods enabled by default"}),"\n",(0,t.jsxs)(n.p,{children:["Besu enables the ",(0,t.jsx)(n.code,{children:"ETH"}),", ",(0,t.jsx)(n.code,{children:"NET"}),", and ",(0,t.jsx)(n.code,{children:"WEB3"})," API methods by default."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable the ",(0,t.jsx)(n.code,{children:"ADMIN"}),", ",(0,t.jsx)(n.code,{children:"CLIQUE"}),", ",(0,t.jsx)(n.code,{children:"DEBUG"}),", ",(0,t.jsx)(n.code,{children:"EEA"}),", ",(0,t.jsx)(n.code,{children:"IBFT"}),", ",(0,t.jsx)(n.code,{children:"MINER"}),", ",(0,t.jsx)(n.code,{children:"PERM"}),", ",(0,t.jsx)(n.code,{children:"PLUGINS"}),", ",(0,t.jsx)(n.code,{children:"PRIV"}),", ",(0,t.jsx)(n.code,{children:"TRACE"}),", and ",(0,t.jsx)(n.code,{children:"TXPOOL"})," API methods, use the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,t.jsx)(n.code,{children:"--rpc-http-api"})}),", ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-ws-api",children:(0,t.jsx)(n.code,{children:"--rpc-ws-api"})}),", or ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-api"})," options."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--Xrpc-ipc-api"})," is an early access option."]})}),"\n",(0,t.jsx)(n.h2,{id:"block-parameter",children:"Block parameter"}),"\n",(0,t.jsxs)(n.p,{children:["When you make requests that might have different results depending on the block accessed, the block parameter specifies the block. Methods such as ",(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_gettransactionbyblocknumberandindex",children:(0,t.jsx)(n.code,{children:"eth_getTransactionByBlockNumberAndIndex"})})," have a block parameter."]}),"\n",(0,t.jsx)(n.p,{children:"The block parameter can have one of the following values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"blockNumber"})," : ",(0,t.jsx)(n.em,{children:"quantity"})," - The block number, specified in hexadecimal or decimal. 0 represents the genesis block."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"blockHash"})," : ",(0,t.jsx)(n.em,{children:"string"})," or ",(0,t.jsx)(n.em,{children:"object"})," - 32-byte block hash or JSON object specifying the block hash. If using a JSON object, you can specify ",(0,t.jsx)(n.code,{children:"requireCanonical"})," to indicate whether the block must be a canonical block. See ",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/a2dedb0b2c7980cdc35db8eb4c094f2eb0dc7deb/ethereum/api/src/test/resources/org/hyperledger/besu/ethereum/api/jsonrpc/eth/eth_getBalance_blockHashObjectCanonical.json",children:"this example"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Only the following methods support the ",(0,t.jsx)(n.code,{children:"blockHash"})," parameter:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_call",children:(0,t.jsx)(n.code,{children:"eth_call"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_getbalance",children:(0,t.jsx)(n.code,{children:"eth_getBalance"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_getcode",children:(0,t.jsx)(n.code,{children:"eth_getCode"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_getproof",children:(0,t.jsx)(n.code,{children:"eth_getProof"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_getstorageat",children:(0,t.jsx)(n.code,{children:"eth_getStorageAt"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_gettransactioncount",children:(0,t.jsx)(n.code,{children:"eth_getTransactionCount"})})}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"earliest"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The earliest (genesis) block."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"latest"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The last block mined."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pending"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The last block mined plus pending transactions. Use only with ",(0,t.jsx)(n.a,{href:"/public-networks/reference/api/#eth_gettransactioncount",children:(0,t.jsx)(n.code,{children:"eth_getTransactionCount"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"finalized"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The most recent crypto-economically secure block. It cannot be reorganized outside manual intervention driven by community coordination."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"safe"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The most recent block that is safe from reorganization under honest majority and certain synchronicity assumptions."]}),"\n"]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>l});s(67294);var t=s(36905);const r={tabItem:"tabItem_Ymn6"};var a=s(85893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>k});var t=s(67294),r=s(36905),a=s(12466),l=s(16550),c=s(20469),o=s(91980),i=s(67392),d=s(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=u(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[i,h]=b({queryString:s,groupId:r}),[j,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),m=(()=>{const e=i??j;return p({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var x=s(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(85893);function g(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),r=c[s].value;r!==t&&(i(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function k(e){const n=(0,x.Z)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(n))}},72205:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/files/postman_collection-1e02b4afc65d8f7a1317c02a23f0a4ac.json"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var t=s(67294);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);