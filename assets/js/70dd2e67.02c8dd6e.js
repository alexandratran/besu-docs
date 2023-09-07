"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[32233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},52412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Sample load balancer configurations",sidebar_position:1,description:"Sample load balancers",tags:["public networks","private networks"]},i="Sample load balancer configurations",s={unversionedId:"public-networks/how-to/configure-ha/sample-configuration",id:"version-23.7.1/public-networks/how-to/configure-ha/sample-configuration",title:"Sample load balancer configurations",description:"Sample load balancers",source:"@site/versioned_docs/version-23.7.1/public-networks/how-to/configure-ha/sample-configuration.md",sourceDirName:"public-networks/how-to/configure-ha",slug:"/public-networks/how-to/configure-ha/sample-configuration",permalink:"/public-networks/how-to/configure-ha/sample-configuration",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/how-to/configure-ha/sample-configuration.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1694117469,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:1,frontMatter:{title:"Sample load balancer configurations",sidebar_position:1,description:"Sample load balancers",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"High availability of JSON-RPC and RPC Pub/Sub APIs",permalink:"/public-networks/how-to/configure-ha/"},next:{title:"Configure Java and Besu",permalink:"/public-networks/how-to/configure-jvm/"}},l={},c=[{value:"AWS",id:"aws",level:2},{value:"HTTPS redirection",id:"https-redirection",level:3},{value:"Elastic Kubernetes Service",id:"elastic-kubernetes-service",level:2},{value:"Manual configurations",id:"manual-configurations",level:2},{value:"HTTPS redirection",id:"https-redirection-1",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sample-load-balancer-configurations"},"Sample load balancer configurations"),(0,a.kt)("h2",{id:"aws"},"AWS"),(0,a.kt)("p",null,"For AWS, we recommend the Classic Load Balancer. The Classic Load Balancer is the easiest to configure and work with. Register the Hyperledger Besu instances to the load balancer and use the ",(0,a.kt)("a",{parentName:"p",href:"/public-networks/how-to/use-besu-api/json-rpc#readiness-and-liveness-endpoints"},"liveness endpoint")," for health checks."),(0,a.kt)("p",null,"For finer grain control, use the Application Load Balancer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure one target group with n nodes."),(0,a.kt)("li",{parentName:"ul"},"Configure multiple listeners with one per port (for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"30303"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"8545"),") you are using and route to the target group."),(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("a",{parentName:"li",href:"/public-networks/how-to/use-besu-api/json-rpc#readiness-and-liveness-endpoints"},"liveness endpoint")," for health checks."),(0,a.kt)("li",{parentName:"ul"},"Register the Besu instances multiple times with different ports. This is like configuring microservices on Elastic Container Service (ECS) or Elastic Kubernetes Service (EKS).")),(0,a.kt)("h3",{id:"https-redirection"},"HTTPS redirection"),(0,a.kt)("p",null,"With either AWS load balancer, you can add certificates using ACM (Amazon Certificate Manager), add them to the load balancers, and redirect all HTTP calls to HTTPS."),(0,a.kt)("h2",{id:"elastic-kubernetes-service"},"Elastic Kubernetes Service"),(0,a.kt)("p",null,"For Elastic Kubernetes Service (AWS Kubernetes service) use the same load balancer configuration as when running nodes in Kubernetes. Use labels to specify nodes for the load balanced group."),(0,a.kt)("h2",{id:"manual-configurations"},"Manual configurations"),(0,a.kt)("p",null,"Where applicable, we strongly recommend using service discovery. That is, pair your load balancer configuration with something that dynamically detects new nodes and removed failed nodes."),(0,a.kt)("p",null,"For Nginx, use multiple upstreams (one for each port). Pair each upstream with a separate server block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf",metastring:'title="Upstreams paired with server blocks"',title:'"Upstreams',paired:!0,with:!0,server:!0,'blocks"':!0},"upstream discovery_tcp_30303 {\n    server 10.0.1.1:30303;\n    server 10.0.1.2:30303;\n}\n\nupstream rpc_tcp_8545 {\n    server 10.0.1.1:8545;\n    server 10.0.1.2:8545;\n}\n\nserver {\n    listen 30303;\n    server_name some.host;\n    location / {\n        proxy_pass http://discovery_tcp_30303;\n    }\n}\n\nserver {\n    listen 8545;\n    server_name some.host;\n    location / {\n        proxy_pass http://rpc_tcp_8545;\n    }\n}\n...\n")),(0,a.kt)("p",null,"For HAProxy, create multiple backend and frontend sets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Multiple backend and frontend sets"',title:'"Multiple',backend:!0,and:!0,frontend:!0,'sets"':!0},"frontend discovery-tcp-30303\n    bind *:30303\n    acl ...\n    ...\n    default_backend back-discovery-tcp-30303\n\nfrontend rpc-tcp-8545\n    bind *:8545\n    acl ...\n    ...\n    default_backend back-rpc-tcp-8545\n\nbackend back-discovery-tcp-30303\n    balance leastconn\n    server node-01 10.0.1.1:30303 weight 1 check\n    server node-02 10.0.1.2:30303 weight 1 check\n    option ...\n    timeout server 600s\n\nbackend back-rpc-tcp-8545\n    balance leastconn\n    server node-01 10.0.1.1:8545 weight 1 check\n    server node-02 10.0.1.2:8545 weight 1 check\n    option ....\n    timeout server 600s\n...\n")),(0,a.kt)("h3",{id:"https-redirection-1"},"HTTPS redirection"),(0,a.kt)("p",null,"To add HTTPS capability, update the above server blocks to include the certificates and specific ciphers. If you require an HTTP to HTTPS redirection, add separate blocks to return a 301 code with the new URI."))}u.isMDXComponent=!0}}]);