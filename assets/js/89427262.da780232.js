"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[88691],{74316:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=r(85893),i=r(11151);const s={title:"Sample load balancer configurations",sidebar_position:1,description:"Sample load balancers",tags:["public networks","private networks"]},a="Sample load balancer configurations",o={id:"public-networks/how-to/configure-ha/sample-configuration",title:"Sample load balancer configurations",description:"Sample load balancers",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/configure-ha/sample-configuration.md",sourceDirName:"public-networks/how-to/configure-ha",slug:"/public-networks/how-to/configure-ha/sample-configuration",permalink:"/23.4.1/public-networks/how-to/configure-ha/sample-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/configure-ha/sample-configuration.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1712348844,formattedLastUpdatedAt:"Apr 5, 2024",sidebarPosition:1,frontMatter:{title:"Sample load balancer configurations",sidebar_position:1,description:"Sample load balancers",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"High availability of JSON-RPC and RPC Pub/Sub APIs",permalink:"/23.4.1/public-networks/how-to/configure-ha/"},next:{title:"Configure Java and Besu",permalink:"/23.4.1/public-networks/how-to/configure-jvm/"}},c={},l=[{value:"AWS",id:"aws",level:2},{value:"HTTPS redirection",id:"https-redirection",level:3},{value:"Elastic Kubernetes Service",id:"elastic-kubernetes-service",level:2},{value:"Manual configurations",id:"manual-configurations",level:2},{value:"HTTPS redirection",id:"https-redirection-1",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sample-load-balancer-configurations",children:"Sample load balancer configurations"}),"\n",(0,t.jsx)(n.h2,{id:"aws",children:"AWS"}),"\n",(0,t.jsxs)(n.p,{children:["For AWS, we recommend the Classic Load Balancer. The Classic Load Balancer is the easiest to configure and work with. Register the Hyperledger Besu instances to the load balancer and use the ",(0,t.jsx)(n.a,{href:"/23.4.1/public-networks/how-to/use-besu-api/json-rpc#readiness-and-liveness-endpoints",children:"liveness endpoint"})," for health checks."]}),"\n",(0,t.jsx)(n.p,{children:"For finer grain control, use the Application Load Balancer:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configure one target group with n nodes."}),"\n",(0,t.jsxs)(n.li,{children:["Configure multiple listeners with one per port (for example, ",(0,t.jsx)(n.code,{children:"30303"}),", ",(0,t.jsx)(n.code,{children:"8545"}),") you are using and route to the target group."]}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.a,{href:"/23.4.1/public-networks/how-to/use-besu-api/json-rpc#readiness-and-liveness-endpoints",children:"liveness endpoint"})," for health checks."]}),"\n",(0,t.jsx)(n.li,{children:"Register the Besu instances multiple times with different ports. This is like configuring microservices on Elastic Container Service (ECS) or Elastic Kubernetes Service (EKS)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"https-redirection",children:"HTTPS redirection"}),"\n",(0,t.jsx)(n.p,{children:"With either AWS load balancer, you can add certificates using ACM (Amazon Certificate Manager), add them to the load balancers, and redirect all HTTP calls to HTTPS."}),"\n",(0,t.jsx)(n.h2,{id:"elastic-kubernetes-service",children:"Elastic Kubernetes Service"}),"\n",(0,t.jsx)(n.p,{children:"For Elastic Kubernetes Service (AWS Kubernetes service) use the same load balancer configuration as when running nodes in Kubernetes. Use labels to specify nodes for the load balanced group."}),"\n",(0,t.jsx)(n.h2,{id:"manual-configurations",children:"Manual configurations"}),"\n",(0,t.jsx)(n.p,{children:"Where applicable, we strongly recommend using service discovery. That is, pair your load balancer configuration with something that dynamically detects new nodes and removed failed nodes."}),"\n",(0,t.jsx)(n.p,{children:"For Nginx, use multiple upstreams (one for each port). Pair each upstream with a separate server block."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",metastring:'title="Upstreams paired with server blocks"',children:"upstream discovery_tcp_30303 {\n    server 10.0.1.1:30303;\n    server 10.0.1.2:30303;\n}\n\nupstream rpc_tcp_8545 {\n    server 10.0.1.1:8545;\n    server 10.0.1.2:8545;\n}\n\nserver {\n    listen 30303;\n    server_name some.host;\n    location / {\n        proxy_pass http://discovery_tcp_30303;\n    }\n}\n\nserver {\n    listen 8545;\n    server_name some.host;\n    location / {\n        proxy_pass http://rpc_tcp_8545;\n    }\n}\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"For HAProxy, create multiple backend and frontend sets."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="Multiple backend and frontend sets"',children:"frontend discovery-tcp-30303\n    bind *:30303\n    acl ...\n    ...\n    default_backend back-discovery-tcp-30303\n\nfrontend rpc-tcp-8545\n    bind *:8545\n    acl ...\n    ...\n    default_backend back-rpc-tcp-8545\n\nbackend back-discovery-tcp-30303\n    balance leastconn\n    server node-01 10.0.1.1:30303 weight 1 check\n    server node-02 10.0.1.2:30303 weight 1 check\n    option ...\n    timeout server 600s\n\nbackend back-rpc-tcp-8545\n    balance leastconn\n    server node-01 10.0.1.1:8545 weight 1 check\n    server node-02 10.0.1.2:8545 weight 1 check\n    option ....\n    timeout server 600s\n...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"https-redirection-1",children:"HTTPS redirection"}),"\n",(0,t.jsx)(n.p,{children:"To add HTTPS capability, update the above server blocks to include the certificates and specific ciphers. If you require an HTTP to HTTPS redirection, add separate blocks to return a 301 code with the new URI."})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(67294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);