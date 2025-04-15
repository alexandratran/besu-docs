"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2460],{28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var o=s(96540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}},90004:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"public-networks/how-to/connect/manage-peers","title":"Manage peers","description":"Managing Besu peers","source":"@site/docs/public-networks/how-to/connect/manage-peers.md","sourceDirName":"public-networks/how-to/connect","slug":"/public-networks/how-to/connect/manage-peers","permalink":"/public-networks/how-to/connect/manage-peers","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/connect/manage-peers.md","tags":[{"inline":true,"label":"public networks","permalink":"/tags/public-networks"},{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744743967000,"sidebarPosition":3,"frontMatter":{"title":"Manage peers","sidebar_position":3,"description":"Managing Besu peers","tags":["public networks","private networks"]},"sidebar":"publicDocSidebar","previous":{"title":"Configure ports","permalink":"/public-networks/how-to/connect/configure-ports"},"next":{"title":"Specify NAT method","permalink":"/public-networks/how-to/connect/specify-nat"}}');var i=s(74848),t=s(28453);const r={title:"Manage peers",sidebar_position:3,description:"Managing Besu peers",tags:["public networks","private networks"]},c="Manage peers",l={},d=[{value:"P2P discovery process",id:"p2p-discovery-process",level:2},{value:"Limit peers",id:"limit-peers",level:2},{value:"Allowlist peers",id:"allowlist-peers",level:2},{value:"Limit remote connections",id:"limit-remote-connections",level:2},{value:"Monitor peer connections",id:"monitor-peer-connections",level:2},{value:"List node connections",id:"list-node-connections",level:2},{value:"Disable discovery",id:"disable-discovery",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"manage-peers",children:"Manage peers"})}),"\n",(0,i.jsxs)(n.p,{children:["Besu peer-to-peer (P2P) discovery happens periodically based on the number of peers in a\nnetwork and the node's ",(0,i.jsx)(n.a,{href:"#limit-peers",children:"peer limit"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The frequency of discovery isn't configurable, but you can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#limit-remote-connections",children:"Limit remote connections"})," in public networks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#allowlist-peers",children:"Allowlist peers by IP subnet"})," to create a private network of peers across public\nnetworks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#random-peer-priority-enabled",children:"Randomly prioritize connections"})," in\nsmall, stable networks."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#admin_addpeer",children:(0,i.jsx)(n.code,{children:"admin_addPeer"})})," to attempt a specific\nconnection, but this isn't P2P discovery."]})}),"\n",(0,i.jsxs)(n.p,{children:["In private networks, we recommend\n",(0,i.jsx)(n.a,{href:"/private-networks/how-to/configure/bootnodes",children:"using bootnodes"})," to initially discover peers."]}),"\n",(0,i.jsx)(n.h2,{id:"p2p-discovery-process",children:"P2P discovery process"}),"\n",(0,i.jsxs)(n.p,{children:["The P2P discovery process requires ",(0,i.jsx)(n.a,{href:"/public-networks/how-to/connect/configure-ports#p2p-networking",children:"ports to be open to UDP and TCP traffic"}),".\nIf you have a firewall in place, keep those ports open to allow traffic in and out.\nIf you are running a node at home on your network, ensure that your router has those ports open."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"discovery"})," stack uses UDP to keep peer discovery lightweight and quick.\nIt only allows a node to find peers and connect to them, without any additional overhead.\nOnce peers have bonded, the data exchange between them is complex and needs a fully featured\nprotocol to support error checking and retries, so the ",(0,i.jsx)(n.code,{children:"devP2P"})," stack uses TCP."]}),"\n",(0,i.jsxs)(n.p,{children:["Both stacks work in parallel: the ",(0,i.jsx)(n.code,{children:"discovery"})," stack adds new peers to the network, and the ",(0,i.jsx)(n.code,{children:"devP2P"}),"\nstack enables interactions and data flow between them.\nIn detail, the P2P discovery process is as follows:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When Besu starts up it advertises its presence and details (including the enode) using UDP before\nestablishing a formal connection with any peer (log messages look like ",(0,i.jsx)(n.code,{children:"Enode URL enode://...."}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Besu attempts to connect to the network's bootnodes (a set of predefined nodes used to help\nbootstrap discovery)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once a connection with a bootnode is established using UDP (",(0,i.jsx)(n.code,{children:"ping/pong"})," handshake messages in the\ndebug and trace logs), Besu requests a list of neighbors (potential peers) from the bootnode\n(",(0,i.jsx)(n.code,{children:"find node"})," messages in the debug and trace logs)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Besu attempts to connect to each peer using TCP, and get status information from them \u2013 such\nas network details, what the peer believes to be the current chain head, and its list of neighbors.\nFrom this point on any traffic to that peer is only done using TCP."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Depending on the ",(0,i.jsx)(n.a,{href:"/public-networks/concepts/node-sync",children:"synchronization method"}),", a common block\n(the pivot block) is selected that all connected peers (default of 5) have, and Besu syncs from\nthat block till it gets to chain head.\nLog messages look like ",(0,i.jsx)(n.code,{children:"Downloading world state from peers for pivot block ......."}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Besu repeats the same process for each peer in step 4, and any new peers that come along\n(regardless of client)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The more peers Besu is connected to, the more confident it is of having an accurate view of the network."}),"\n",(0,i.jsx)(n.h2,{id:"limit-peers",children:"Limit peers"}),"\n",(0,i.jsx)(n.p,{children:"You can limit peers to reduce the bandwidth, CPU time, and disk access Besu uses to manage and respond to peers."}),"\n",(0,i.jsxs)(n.p,{children:["To reduce the maximum number of peers, use the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#max-peers",children:(0,i.jsx)(n.code,{children:"--max-peers"})})," option. The default is 25."]}),"\n",(0,i.jsx)(n.h2,{id:"allowlist-peers",children:"Allowlist peers"}),"\n",(0,i.jsxs)(n.p,{children:["You can can define specific IP subnets permitted to interact with the node using the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#net-restrict",children:(0,i.jsx)(n.code,{children:"--net-restrict"})})," configuration. This restricts access to only those peers whose IP addresses fall within the allowed subnets. This is useful if you maintain a set of nodes and want to restrict which of those can connect to external nodes."]}),"\n",(0,i.jsx)(n.h2,{id:"limit-remote-connections",children:"Limit remote connections"}),"\n",(0,i.jsxs)(n.p,{children:["Prevent eclipse attacks when using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,i.jsx)(n.code,{children:"--sync-mode"})})," and ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-min-peers-fast-sync-min-peers",children:(0,i.jsx)(n.code,{children:"--fast-sync-min-peers"})})," on public networks by enabling the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#remote-connections-limit-enabled",children:"remote connection limits"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In private and permissioned networks with only trusted peers, enabling the remote connection limits is unnecessary and might adversely affect the speed at which nodes can join the network. Limiting remote connections can cause a closed group of peers to form when the number of nodes in the network is slightly higher than ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#max-peers",children:(0,i.jsx)(n.code,{children:"--max-peers"})}),". The nodes in this closed group are all connected to each other and can't accept more connections."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#random-peer-priority-enabled",children:(0,i.jsx)(n.code,{children:"--random-peer-priority-enabled"})})," to help prevent closed groups of peers in small, stable networks."]})}),"\n",(0,i.jsx)(n.h2,{id:"monitor-peer-connections",children:"Monitor peer connections"}),"\n",(0,i.jsx)(n.p,{children:"JSON-RPC API methods to monitor peer connections include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#net_peercount",children:(0,i.jsx)(n.code,{children:"net_peerCount"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#admin_peers",children:(0,i.jsx)(n.code,{children:"admin_peers"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#debug_metrics",children:(0,i.jsx)(n.code,{children:"debug_metrics"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Each peer entry returned by ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#admin_peers",children:(0,i.jsx)(n.code,{children:"admin_peers"})})," includes a ",(0,i.jsx)(n.code,{children:"protocols"})," section. Use the information in the ",(0,i.jsx)(n.code,{children:"protocols"})," section to:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Determine the health of peers. For example, an external process can use ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#admin_peers",children:(0,i.jsx)(n.code,{children:"admin_peers"})})," and ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#admin_removepeer",children:(0,i.jsx)(n.code,{children:"admin_removePeer"})})," to disconnect from peers that are stalled at a single difficulty for an extended period of time."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Monitor node health. For example, if peers report increasing difficulties but the node is stuck at the same block number, the node may be on a different fork to most peers."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Determine which protocol level peers are communicating with. For example, you can see if ",(0,i.jsx)(n.code,{children:'"version": 65'})," is being used to reduce transaction sharing traffic."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"list-node-connections",children:"List node connections"}),"\n",(0,i.jsxs)(n.p,{children:["The default logging configuration doesn't list node connection and disconnection messages. To enable listing them, set the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#logging",children:(0,i.jsx)(n.code,{children:"--logging"})})," option to ",(0,i.jsx)(n.code,{children:"DEBUG"}),". For more verbosity, set the option to ",(0,i.jsx)(n.code,{children:"TRACE"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The console logs connection and disconnection events when the log level is ",(0,i.jsx)(n.code,{children:"DEBUG"})," or higher. If the message ",(0,i.jsx)(n.code,{children:"Successfully accepted connection from ..."})," displays, connections are getting through the firewalls."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Sample log output"',children:"2018-10-16 12:37:35.479-04:00 | nioEventLoopGroup-3-1 | INFO | NettyP2PNetwork | Successfully accepted connection from 0xa979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c\n"})}),"\n",(0,i.jsx)(n.h2,{id:"disable-discovery",children:"Disable discovery"}),"\n",(0,i.jsxs)(n.p,{children:["To disable P2P discovery, set the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#discovery-enabled",children:(0,i.jsx)(n.code,{children:"--discovery-enabled"})})," option to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["With discovery disabled, peers can't open connections with the node unless they were previously discovered or manually peered (for example, using ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#admin_addpeer",children:(0,i.jsx)(n.code,{children:"admin_addPeer"})}),"). ",(0,i.jsx)(n.a,{href:"/public-networks/how-to/connect/static-nodes",children:"Static nodes"})," can also open connections."]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter issues with peering, see the ",(0,i.jsx)(n.a,{href:"/public-networks/how-to/troubleshoot/peering",children:"troubleshoot peering documentation"}),", which helps you identify and resolve common problems that can occur during the peering process."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);