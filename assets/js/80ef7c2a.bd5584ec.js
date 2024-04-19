"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[28435],{91153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(85893),s=t(11151);const o={title:"Use onchain permissioning",sidebar_position:2,description:"Use onchain permissioning allowlists",tags:["private networks"]},r="Use onchain permissioning",a={id:"private-networks/how-to/use-permissioning/onchain",title:"Use onchain permissioning",description:"Use onchain permissioning allowlists",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/use-permissioning/onchain.md",sourceDirName:"private-networks/how-to/use-permissioning",slug:"/private-networks/how-to/use-permissioning/onchain",permalink:"/23.7.3/private-networks/how-to/use-permissioning/onchain",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/use-permissioning/onchain.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1713464890,formattedLastUpdatedAt:"Apr 18, 2024",sidebarPosition:2,frontMatter:{title:"Use onchain permissioning",sidebar_position:2,description:"Use onchain permissioning allowlists",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use local permissioning",permalink:"/23.7.3/private-networks/how-to/use-permissioning/local"},next:{title:"Deploy to the cloud",permalink:"/23.7.3/private-networks/how-to/deploy/cloud"}},c={},d=[{value:"Specify the permissioning contract interface version",id:"specify-the-permissioning-contract-interface-version",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"use-onchain-permissioning",children:"Use onchain permissioning"}),"\n",(0,i.jsxs)(n.p,{children:["This page contains some extra info if you're using ",(0,i.jsx)(n.a,{href:"/23.7.3/private-networks/concepts/permissioning/onchain",children:"onchain permissioning"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"If your node has two different IP addresses for ingress and egress (for example, if you use Kubernetes implementing a load balancer for ingress and a NAT gateway IP address for egress), add both addresses to the allowlist, using the same public key for each IP address. This will allow the node to connect."})}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:["Node allowlists ",(0,i.jsx)(n.a,{href:"/23.7.3/public-networks/concepts/node-keys#domain-name-support",children:"support domain names"})," in enode URLs as an early access feature. Use the ",(0,i.jsx)(n.code,{children:"--Xdns-enabled"})," option to enable domain name support."]}),(0,i.jsxs)(n.p,{children:["If using Kubernetes, enable domain name support and use the ",(0,i.jsx)(n.code,{children:"--Xdns-update-enabled"})," option to ensure that Besu can connect to a container after being restarted, even if the IP address of the container changes."]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you add a running node, the node does not attempt to reconnect to the bootnode and synchronize until peer discovery restarts. To add an allowlisted node as a peer without waiting for peer discovery to restart, use ",(0,i.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#admin_addpeer",children:(0,i.jsx)(n.code,{children:"admin_addPeer"})}),"."]}),(0,i.jsxs)(n.p,{children:["If you add the node to the allowlist before starting the node, using ",(0,i.jsx)(n.code,{children:"admin_addPeer"})," is not required because peer discovery is run on node startup."]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If nodes are not connecting as expected, set the ",(0,i.jsxs)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#logging",children:["log level to ",(0,i.jsx)(n.code,{children:"TRACE"})]})," and search for messages containing ",(0,i.jsx)(n.code,{children:"Node permissioning"})," to identify the issue."]}),(0,i.jsxs)(n.p,{children:["Ensure the ",(0,i.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-host",children:(0,i.jsx)(n.code,{children:"--p2p-host"})})," command line option has been correctly configured for all nodes with the externally accessible address."]}),(0,i.jsx)(n.p,{children:"If you change your network configuration, you may need to update the node allowlist."})]}),"\n",(0,i.jsx)(n.h2,{id:"specify-the-permissioning-contract-interface-version",children:"Specify the permissioning contract interface version"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/23.7.3/private-networks/reference/cli/options#permissions-nodes-contract-version",children:(0,i.jsx)(n.code,{children:"--permissions-nodes-contract-version"})})," command line option to specify the version of the ",(0,i.jsx)(n.a,{href:"/23.7.3/private-networks/concepts/permissioning/onchain#permissioning-contracts",children:"permissioning contract interface"}),". The default is 1."]}),"\n",(0,i.jsxs)(n.p,{children:["Specify the contract interface version that maps to the version of the ",(0,i.jsx)(n.a,{href:"https://entethalliance.org/technical-specifications/",children:"Enterprise Ethereum Alliance Client Specification"})," the contract interface implements."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"}}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"EEA Client Specification"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Contract interface"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Version"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"5"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Version"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"6"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"2"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The permissioning contracts in the ",(0,i.jsx)(n.a,{href:"https://github.com/ConsenSys/permissioning-smart-contracts",children:(0,i.jsx)(n.code,{children:"ConsenSys/permissioning-smart-contracts"})})," repository implement the version 2 contract interface."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);