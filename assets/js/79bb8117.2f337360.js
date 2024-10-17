"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8230],{78747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=n(74848),r=n(28453);const s={title:"Local playground",sidebar_position:1,description:"Deploying a Besu private network locally with Kubernetes",tags:["private networks"]},i="Deploy in a local environment",l={id:"private-networks/tutorials/kubernetes/playground",title:"Local playground",description:"Deploying a Besu private network locally with Kubernetes",source:"@site/docs/private-networks/tutorials/kubernetes/playground.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/playground",permalink:"/private-networks/tutorials/kubernetes/playground",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/kubernetes/playground.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1729153532e3,sidebarPosition:1,frontMatter:{title:"Local playground",sidebar_position:1,description:"Deploying a Besu private network locally with Kubernetes",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploy a Besu private network with Kubernetes",permalink:"/private-networks/tutorials/kubernetes/"},next:{title:"Create a cluster",permalink:"/private-networks/tutorials/kubernetes/cluster"}},a={},u=[{value:"Steps",id:"steps",level:2},{value:"Important notes",id:"important-notes",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"deploy-in-a-local-environment",children:"Deploy in a local environment"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/playground",children:"playground"})," was created to provide an opportunity to deploy ",(0,o.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/",children:"quorum-kubernetes"})," in a local environment before attempting in a live environment (such as in the cloud or on-premise). Local deployment can be done with any local Kubernetes tool. Minikube and Rancher Desktop have been tested to work, but any complete Kubernetes solution with support for ",(0,o.jsx)(t.code,{children:"kubectl"})," should suffice."]}),"\n",(0,o.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to the playground ",(0,o.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/playground",children:(0,o.jsx)(t.code,{children:"README"})}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Ensure that your system meets the requirements specified."}),"\n",(0,o.jsxs)(t.li,{children:["Choose your Ethereum client (Besu or GoQuorum): ",(0,o.jsx)(t.code,{children:"quorum-besu"})," or ",(0,o.jsx)(t.code,{children:"quorum-go"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Choose your consensus algorithm. The playground supports Clique, Ethash (PoW), and IBFT2 for Besu, and IBFT for GoQuorum."}),"\n",(0,o.jsxs)(t.li,{children:["Follow the instructions from the ",(0,o.jsx)(t.code,{children:"README"})," for the chosen client and consensus algorithm folder."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"important-notes",children:"Important notes"}),"\n",(0,o.jsx)(t.p,{children:"Consider the following when deploying and developing with the playground:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The playground is created specifically for developers and operators to become familiar with the deployment of Besu in a Kubernetes environment in preparation for going into a cloud or on-premise environment. Thus, it should ",(0,o.jsx)(t.strong,{children:"not"})," be deployed into a production environment."]}),"\n",(0,o.jsxs)(t.li,{children:["The playground is not a complete reflection of the ",(0,o.jsx)(t.code,{children:"helm"})," charts as it does not use ",(0,o.jsx)(t.code,{children:"Helm"}),", but rather static or non-templated code that is deployed through ",(0,o.jsx)(t.code,{children:"kubectl apply -f"}),". This means that without ",(0,o.jsx)(t.code,{children:"Helm"})," there's a significant amount of repeated code. This is fine for development but not ideal for a production environment."]}),"\n",(0,o.jsxs)(t.li,{children:["The playground uses static/hard-coded keys. Automatic key generation is only supported in ",(0,o.jsx)(t.code,{children:"helm"})," charts."]}),"\n",(0,o.jsx)(t.li,{children:"As the playground is for local development, no cloud integration or lifecycle support is offered."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);