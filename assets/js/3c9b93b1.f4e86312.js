"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[81376],{39611:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var t=n(85893),o=n(11151);const r={description:"Hyperledger Besu API",tags:["public networks","private networks"]},i="Access the Hyperledger Besu API",c={id:"public-networks/how-to/use-besu-api/index",title:"Access the Hyperledger Besu API",description:"Hyperledger Besu API",source:"@site/versioned_docs/version-24.3.0/public-networks/how-to/use-besu-api/index.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/",permalink:"/24.3.0/public-networks/how-to/use-besu-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/public-networks/how-to/use-besu-api/index.md",tags:[{label:"public networks",permalink:"/24.3.0/tags/public-networks"},{label:"private networks",permalink:"/24.3.0/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1715646519,formattedLastUpdatedAt:"May 14, 2024",frontMatter:{description:"Hyperledger Besu API",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"How to",permalink:"/24.3.0/public-networks/how-to"},next:{title:"Use JSON-RPC over HTTP, WS, and IPC",permalink:"/24.3.0/public-networks/how-to/use-besu-api/json-rpc"}},l={},h=[{value:"Enable API access",id:"enable-api-access",level:2},{value:"Service hosts",id:"service-hosts",level:2},{value:"Service ports",id:"service-ports",level:2},{value:"Socket path",id:"socket-path",level:2},{value:"Host allowlist",id:"host-allowlist",level:2},{value:"Not supported by Besu",id:"not-supported-by-besu",level:2},{value:"Account management",id:"account-management",level:3},{value:"Protocols",id:"protocols",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"access-the-hyperledger-besu-api",children:"Access the Hyperledger Besu API"}),"\n",(0,t.jsxs)(s.p,{children:["Access the ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/api/",children:"Hyperledger Besu API"})," using:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/how-to/use-besu-api/json-rpc",children:"JSON-RPC over HTTP, WebSocket, or IPC"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/how-to/use-besu-api/rpc-pubsub",children:"RPC Pub/Sub over WebSockets"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/how-to/use-besu-api/graphql",children:"GraphQL over HTTP"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["HTTP and WebSocket responses are compact JSON by default. You can use ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#json-pretty-print-enabled",children:(0,t.jsx)(s.code,{children:"--json-pretty-print-enabled"})})," to pretty-print the output."]})}),"\n",(0,t.jsx)(s.p,{children:"The following sections provide information about JSON-RPC, RPC Pub/Sub, and GraphQL."}),"\n",(0,t.jsx)(s.h2,{id:"enable-api-access",children:"Enable API access"}),"\n",(0,t.jsxs)(s.p,{children:["To enable API access, use the ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-http-enabled",children:(0,t.jsx)(s.code,{children:"--rpc-http-enabled"})}),", ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,t.jsx)(s.code,{children:"--ws-http-enabled"})}),", ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#graphql-http-enabled",children:(0,t.jsx)(s.code,{children:"--graphql-http-enabled"})}),", and ",(0,t.jsx)(s.code,{children:"--Xrpc-ipc-enabled"})," options."]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"--Xrpc-ipc-enabled"})," is an early access option."]})}),"\n",(0,t.jsx)(s.h2,{id:"service-hosts",children:"Service hosts"}),"\n",(0,t.jsxs)(s.p,{children:["To specify the host the API service listens on, use the ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-http-host",children:(0,t.jsx)(s.code,{children:"--rpc-http-host"})}),", ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-ws-host",children:(0,t.jsx)(s.code,{children:"--rpc-ws-host"})}),", and ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#graphql-http-host",children:(0,t.jsx)(s.code,{children:"--graphql-http-host"})})," options. The default host is ",(0,t.jsx)(s.code,{children:"127.0.0.1"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["To allow remote connections, set the host to ",(0,t.jsx)(s.code,{children:"0.0.0.0"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:["Setting the host to ",(0,t.jsx)(s.code,{children:"0.0.0.0"})," exposes the API service connection on your node to any remote connection. In a production environment, ensure you use a firewall to avoid exposing your node to the internet."]})}),"\n",(0,t.jsx)(s.h2,{id:"service-ports",children:"Service ports"}),"\n",(0,t.jsxs)(s.p,{children:["To specify the port the API service listens on, use the ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-http-port",children:(0,t.jsx)(s.code,{children:"--rpc-http-port"})}),", ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-ws-port",children:(0,t.jsx)(s.code,{children:"--rpc-ws-port"})}),", and ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#graphql-http-port",children:(0,t.jsx)(s.code,{children:"--graphql-http-port"})})," options."]}),"\n",(0,t.jsx)(s.p,{children:"The default ports are:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"8545 for JSON-RPC over HTTP."}),"\n",(0,t.jsx)(s.li,{children:"8546 for JSON-RPC over WebSocket."}),"\n",(0,t.jsx)(s.li,{children:"8547 for GraphQL over HTTP."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Ports must be ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/how-to/connect/configure-ports",children:"exposed appropriately"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"socket-path",children:"Socket path"}),"\n",(0,t.jsxs)(s.p,{children:["To specify the socket path for the IPC socket, use the ",(0,t.jsx)(s.code,{children:"--Xrpc-ipc-path"})," option. The default path is ",(0,t.jsx)(s.code,{children:"besu.ipc"})," in the Besu data directory."]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"--Xrpc-ipc-path"})," is an early access option."]})}),"\n",(0,t.jsx)(s.h2,{id:"host-allowlist",children:"Host allowlist"}),"\n",(0,t.jsxs)(s.p,{children:["To prevent DNS rebinding attacks, Besu checks incoming HTTP request host headers, WebSocket connections, and GraphQL requests. Besu accepts requests only when hostnames specified using the ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/cli/options#host-allowlist",children:(0,t.jsx)(s.code,{children:"--host-allowlist"})})," option matches the request host headers. By default, Besu accepts requests and connections from ",(0,t.jsx)(s.code,{children:"localhost"})," and ",(0,t.jsx)(s.code,{children:"127.0.0.1"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["This isn't a permissioning feature. To restrict access to the API, we recommend using the ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/how-to/use-besu-api/authenticate",children:"Besu authentication mechanism"})," with username and password authentication or JWT public key authentication."]})}),"\n",(0,t.jsx)(s.p,{children:"If your application publishes RPC ports, specify the hostnames when starting Besu."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"besu --host-allowlist=example.com\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Specify ",(0,t.jsx)(s.code,{children:"*"})," for ",(0,t.jsx)(s.code,{children:"--host-allowlist"})," to effectively disable host protection."]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:["Specifying ",(0,t.jsx)(s.code,{children:"*"})," for ",(0,t.jsx)(s.code,{children:"--host-allowlist"})," is not recommended for production code."]})}),"\n",(0,t.jsx)(s.h2,{id:"not-supported-by-besu",children:"Not supported by Besu"}),"\n",(0,t.jsx)(s.h3,{id:"account-management",children:"Account management"}),"\n",(0,t.jsx)(s.p,{children:"Account management relies on private key management in the client, which is not supported by Besu."}),"\n",(0,t.jsxs)(s.p,{children:["To send signed transactions, use ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/reference/api/#eth_sendrawtransaction",children:(0,t.jsx)(s.code,{children:"eth_sendRawTransaction"})}),". ",(0,t.jsx)(s.code,{children:"eth_sendTransaction"})," is not implemented."]}),"\n",(0,t.jsxs)(s.p,{children:["For ",(0,t.jsx)(s.a,{href:"/24.3.0/public-networks/how-to/send-transactions#use-wallets-for-key-management",children:"account management"}),", use third-party wallets."]}),"\n",(0,t.jsx)(s.h3,{id:"protocols",children:"Protocols"}),"\n",(0,t.jsx)(s.p,{children:"Besu does not support the Whisper and Swarm protocols."})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var t=n(67294);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);