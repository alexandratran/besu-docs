"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50309],{99098:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=i(85893),t=i(11151);const s={title:"Sign privacy marker transactions",description:"How to sign a privacy marker transaction with Hyperledger Besu",sidebar_position:7,tags:["private networks"]},a="Sign privacy marker transactions",o={id:"private-networks/how-to/use-privacy/sign-pmts",title:"Sign privacy marker transactions",description:"How to sign a privacy marker transaction with Hyperledger Besu",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/sign-pmts.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/sign-pmts",permalink:"/23.4.1/private-networks/how-to/use-privacy/sign-pmts",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/sign-pmts.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1711646735,formattedLastUpdatedAt:"Mar 28, 2024",sidebarPosition:7,frontMatter:{title:"Sign privacy marker transactions",description:"How to sign a privacy marker transaction with Hyperledger Besu",sidebar_position:7,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Access private and privacy marker transactions",permalink:"/23.4.1/private-networks/how-to/use-privacy/access-private-transactions"},next:{title:"Use the web3js-quorum library",permalink:"/23.4.1/private-networks/how-to/use-privacy/web3js-quorum"}},c={},p=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sign-privacy-marker-transactions",children:"Sign privacy marker transactions"}),"\n",(0,r.jsxs)(n.p,{children:["You can sign privacy marker transactions (PMTs) with either a random key or a specified key. To sign privacy marker transactions with a specified private key, use ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file",children:(0,r.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})})," when starting Hyperledger Besu."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The private key file can be the same file used by ",(0,r.jsx)(n.a,{href:"#node-private-key-file",children:(0,r.jsx)(n.code,{children:"--node-private-key-file"})}),", or a different key file to identify who signed the privacy marker transaction."]})}),"\n",(0,r.jsx)(n.p,{children:"In networks where you pay gas, you must specify a key and the associated account must contain adequate funds."}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/free-gas",children:"free gas networks"}),", to provide further anonymity by signing each privacy marker transaction with a different random key, exclude the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file",children:(0,r.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})})," command line option when starting Besu."]}),"\n",(0,r.jsxs)(n.admonition,{title:'"Using account permissioning and privacy"',type:"caution",children:[(0,r.jsxs)(n.p,{children:["You can't use ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/permissioning/#account-permissioning",children:"account permissioning"})," with random key signing."]}),(0,r.jsxs)(n.p,{children:["If using account permissioning and privacy, a signing key must be specified using the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file",children:(0,r.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})})," command line option and the corresponding public key included in the accounts allowlist."]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Besu signs privacy marker transactions during the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/privacy/private-transactions/processing",children:"private transaction process"}),"."]})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var r=i(67294);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);