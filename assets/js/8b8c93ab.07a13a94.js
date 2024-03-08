"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[81221],{61811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(85893),r=n(11151);const s={title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},o="Configure alternative elliptic curves",c={id:"private-networks/how-to/configure/curves",title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",source:"@site/docs/private-networks/how-to/configure/curves.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/curves",permalink:"/development/private-networks/how-to/configure/curves",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/curves.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1709905432,formattedLastUpdatedAt:"Mar 8, 2024",sidebarPosition:8,frontMatter:{title:"Alternative elliptic curves",description:"Using alternative elliptic curves in Besu",sidebar_position:8,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Block proposal permissioning",permalink:"/development/private-networks/how-to/configure/block-proposal-permissioning"},next:{title:"Create and send transactions",permalink:"/development/private-networks/how-to/send-transactions/"}},a={},l=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configure-alternative-elliptic-curves",children:"Configure alternative elliptic curves"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Configuring alternative elliptic curves is an early access feature."})}),"\n",(0,i.jsxs)(t.p,{children:["By default, Besu uses the Ethereum standard ",(0,i.jsx)(t.code,{children:"secp256k1"})," elliptic curve (EC). However, when running nodes in a private network, it is possible to configure an alternative elliptic curve."]}),"\n",(0,i.jsxs)(t.p,{children:["The configuration for what elliptic curve Besu will use is done in the network configuration section of genesis file, using the ",(0,i.jsx)(t.a,{href:"/development/public-networks/reference/genesis-items#Configuration_Items",children:(0,i.jsx)(t.code,{children:"ecCurve"})})," key:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'{\n  "genesis": {\n    "config": {\n      "ecCurve": "secp256k1",\n    [...]\n  },\n  [...]\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{title:"Important",type:"danger",children:(0,i.jsxs)(t.p,{children:["All nodes in the network ",(0,i.jsx)(t.strong,{children:"MUST"})," use the same elliptic curve. Nodes with different EC configuration from the network won't be able to send messages to other nodes or verify transactions and blocks."]})}),"\n",(0,i.jsx)(t.p,{children:"Besu supports the following elliptic curves:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"secp256k1"})," (Ethereum default)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"secp256r1"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);