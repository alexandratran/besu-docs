"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7936],{11210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(74848),i=n(28453);const a={title:"Multi-tenancy",sidebar_position:4,description:"Multi-tenancy"},r="Multi-tenancy (Deprecated)",c={id:"private-networks/concepts/privacy/multi-tenancy",title:"Multi-tenancy",description:"Multi-tenancy",source:"@site/docs/private-networks/concepts/privacy/multi-tenancy.md",sourceDirName:"private-networks/concepts/privacy",slug:"/private-networks/concepts/privacy/multi-tenancy",permalink:"/private-networks/concepts/privacy/multi-tenancy",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/concepts/privacy/multi-tenancy.md",tags:[],version:"current",lastUpdatedAt:1738652811e3,sidebarPosition:4,frontMatter:{title:"Multi-tenancy",sidebar_position:4,description:"Multi-tenancy"},sidebar:"privateDocSidebar",previous:{title:"Flexible privacy groups",permalink:"/private-networks/concepts/privacy/flexible-privacy"},next:{title:"Privacy plugin",permalink:"/private-networks/concepts/privacy/plugin"}},o={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"multi-tenancy-deprecated",children:"Multi-tenancy (Deprecated)"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Tessera-based privacy is deprecated in Besu version 24.12.0 and later. Please read this ",(0,s.jsx)(t.a,{href:"https://www.lfdecentralizedtrust.org/blog/sunsetting-tessera-and-simplifying-hyperledger-besu",children:"blog post"})," for more context on the rationale behind this decision as well as alternative options."]})}),"\n",(0,s.jsx)(t.p,{children:"By default, each participant in a privacy network uses its own Besu and Tessera node."}),"\n",(0,s.jsxs)(t.p,{children:["Multi-tenancy allows multiple participants to use the same Besu and Tessera node. Each participant is a ",(0,s.jsx)(t.em,{children:"tenant"}),", and the operator is the ",(0,s.jsx)(t.em,{children:"owner"})," of the Besu and Tessera node."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The operator is responsible for ",(0,s.jsx)(t.a,{href:"/private-networks/tutorials/privacy/multi-tenancy",children:"configuring multi-tenancy"}),", and has access to all tenant data."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Multi-tenancy",src:n(77719).A+"",width:"1512",height:"648"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"Ensure the multi-tenant Tessera node client API is configured to allow access only by the multi-tenant Besu node. Access to your data is secured through Besu using multi-tenancy mode."}),(0,s.jsx)(t.p,{children:"If not configured to allow access only by the multi-tenant Besu node, other Tessera clients, including other Besu nodes, might be able to access tenant data."}),(0,s.jsxs)(t.p,{children:["To secure access, you can ",(0,s.jsx)(t.a,{href:"/private-networks/how-to/configure/tls/client-and-server",children:"configure TLS between Besu and Tessera"})," with the ",(0,s.jsx)(t.a,{href:"https://docs.tessera.consensys.net/en/stable/HowTo/Configure/TLS/#whitelist",children:(0,s.jsx)(t.code,{children:"WHITELIST"})})," trust mode."]})]}),"\n",(0,s.jsx)(t.p,{children:"Multi-tenancy validates that tenants have permission to use the specified HTTP or WebSocket JSON-RPC requests, and the tenant has access to the requested privacy data. Private data is isolated and each tenant uses a JSON Web Token (JWT) for authentication."}),"\n",(0,s.jsxs)(t.p,{children:["You can ",(0,s.jsx)(t.a,{href:"/public-networks/how-to/use-besu-api/authenticate",children:"create the JWT either externally or internally"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},77719:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Multi-tenancy-509dd20a1055029dd83055ddfc99139a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);