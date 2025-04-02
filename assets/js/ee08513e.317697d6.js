"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[1639],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}},42358:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"public-networks/how-to/connect/specify-nat","title":"Specify NAT method","description":"Configuring NAT with Besu","source":"@site/docs/public-networks/how-to/connect/specify-nat.md","sourceDirName":"public-networks/how-to/connect","slug":"/public-networks/how-to/connect/specify-nat","permalink":"/public-networks/how-to/connect/specify-nat","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/connect/specify-nat.md","tags":[{"inline":true,"label":"public networks","permalink":"/tags/public-networks"},{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1743632019000,"sidebarPosition":4,"frontMatter":{"title":"Specify NAT method","sidebar_position":4,"description":"Configuring NAT with Besu","tags":["public networks","private networks"]},"sidebar":"publicDocSidebar","previous":{"title":"Manage peers","permalink":"/public-networks/how-to/connect/manage-peers"},"next":{"title":"Monitor Besu","permalink":"/public-networks/how-to/monitor/"}}');var o=i(74848),r=i(28453);const s={title:"Specify NAT method",sidebar_position:4,description:"Configuring NAT with Besu",tags:["public networks","private networks"]},c="Specify the NAT method",d={},h=[{value:"Auto",id:"auto",level:2},{value:"UPnP",id:"upnp",level:2},{value:"Docker",id:"docker",level:2},{value:"None",id:"none",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"specify-the-nat-method",children:"Specify the NAT method"})}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#nat-method",children:(0,o.jsx)(n.code,{children:"--nat-method"})})," option to specify the NAT method. Options are: ",(0,o.jsx)(n.a,{href:"#upnp",children:(0,o.jsx)(n.code,{children:"UPNP"})}),", ",(0,o.jsx)(n.a,{href:"#docker",children:(0,o.jsx)(n.code,{children:"DOCKER"})}),", ",(0,o.jsx)(n.a,{href:"#auto",children:(0,o.jsx)(n.code,{children:"AUTO"})}),", and ",(0,o.jsx)(n.a,{href:"#none",children:(0,o.jsx)(n.code,{children:"NONE"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/public-networks/concepts/node-keys#enode-url",children:"enode"})," advertised to other nodes during discovery is the external IP address and port. The ",(0,o.jsx)(n.a,{href:"/public-networks/reference/api/#admin_nodeinfo",children:(0,o.jsx)(n.code,{children:"admin_nodeInfo"})})," JSON-RPC API method returns the external address and port for the ",(0,o.jsx)(n.code,{children:"enode"})," and ",(0,o.jsx)(n.code,{children:"listenAddr"})," properties."]}),"\n",(0,o.jsx)(n.p,{children:"While Besu is running, the following are not supported:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"IP address changes"}),"\n",(0,o.jsxs)(n.li,{children:["Changing NAT methods. To change the NAT method, restart the node with the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#nat-method",children:(0,o.jsx)(n.code,{children:"--nat-method"})})," option set."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"auto",children:"Auto"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AUTO"})," detects if Besu is running inside a Docker container.\nIf Besu is running in a Docker container, ",(0,o.jsx)(n.code,{children:"AUTO"})," sets to ",(0,o.jsx)(n.a,{href:"#docker",children:(0,o.jsx)(n.code,{children:"DOCKER"})}),".\nIf Besu is not running in a Docker container, ",(0,o.jsx)(n.code,{children:"AUTO"})," sets to ",(0,o.jsx)(n.a,{href:"#none",children:(0,o.jsx)(n.code,{children:"NONE"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AUTO"})," is the default NAT method."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If automatic detection fails, set the IP and ports in ",(0,o.jsx)(n.a,{href:"#none",children:(0,o.jsx)(n.code,{children:"NONE"})})," mode."]})}),"\n",(0,o.jsx)(n.h2,{id:"upnp",children:"UPnP"}),"\n",(0,o.jsxs)(n.p,{children:["Specify ",(0,o.jsx)(n.code,{children:"UPNP"})," to quickly allow inbound peer connections without manual router configuration. Use UPnP in home or small office environments where a wireless router or modem provides NAT isolation."]}),"\n",(0,o.jsx)(n.p,{children:"UPnP automatically detects if a node is running in a UPnP environment and provides port forwarding. UPnP might introduce delays during node startup, especially on networks without a UPnP gateway device."}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"UPNPP2PONLY"})," if you wish to enable UPnP only for p2p traffic."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"UPnP support is often disabled by default in networking firmware. If disabled by default, you must explicitly enable UPnP support."})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["When the NAT method is set to ",(0,o.jsx)(n.code,{children:"UPNP"}),", the advertised port is the same as the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:"listening port"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,o.jsxs)(n.p,{children:["Specify ",(0,o.jsx)(n.code,{children:"DOCKER"})," to explicitly specify Besu is running inside a Docker container. If you specify ",(0,o.jsx)(n.code,{children:"DOCKER"}),", you advertise the host IP address not the container IP address."]}),"\n",(0,o.jsxs)(n.p,{children:["The host IP address is the advertised host specified in the ",(0,o.jsxs)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/run/#add-entries-to-container-hosts-file---add-host",children:[(0,o.jsx)(n.code,{children:"docker run"})," command"]}),". If not specified in the ",(0,o.jsx)(n.code,{children:"docker run"})," command, the advertised host defaults to the values for ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-host",children:(0,o.jsx)(n.code,{children:"--p2p-host"})})," and ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,o.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"none",children:"None"}),"\n",(0,o.jsxs)(n.p,{children:["Specify ",(0,o.jsx)(n.code,{children:"NONE"})," to explicitly configure the external IP address and ports advertised using:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-host",children:(0,o.jsx)(n.code,{children:"--p2p-host"})})," and ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,o.jsx)(n.code,{children:"--p2p-port"})})," for the P2P service."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-host",children:(0,o.jsx)(n.code,{children:"--rpc-http-host"})})," and ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,o.jsx)(n.code,{children:"--rpc-http-port"})})," for the JSON-RPC HTTP service."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The P2P and JSON-RPC HTTP hosts and ports are advertised in the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/api/#net_services",children:(0,o.jsx)(n.code,{children:"net_services"})})," method."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["When the NAT method is set to ",(0,o.jsx)(n.code,{children:"NONE"}),", the advertised port is the same as the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:"listening port"}),"."]})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);