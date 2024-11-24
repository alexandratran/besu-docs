"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[9291],{26036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var c=n(74848),r=n(28453);const o={title:"Pre-deploy a contract",description:"Pre-deploying contracts in the genesis file",sidebar_position:5,tags:["private networks"]},i="Pre-deploy contracts in the genesis file",s={id:"private-networks/how-to/configure/contracts",title:"Pre-deploy a contract",description:"Pre-deploying contracts in the genesis file",source:"@site/docs/private-networks/how-to/configure/contracts.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/contracts",permalink:"/private-networks/how-to/configure/contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/contracts.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1732230922e3,sidebarPosition:5,frontMatter:{title:"Pre-deploy a contract",description:"Pre-deploying contracts in the genesis file",sidebar_position:5,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Validators",permalink:"/private-networks/how-to/configure/validators"},next:{title:"Client and server TLS",permalink:"/private-networks/how-to/configure/tls/client-and-server"}},a={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"pre-deploy-contracts-in-the-genesis-file",children:"Pre-deploy contracts in the genesis file"})}),"\n",(0,c.jsxs)(t.p,{children:["To pre-deploy contracts when starting Besu, specify the contract code in the ",(0,c.jsx)(t.a,{href:"/public-networks/concepts/genesis-file",children:"genesis file"}),"."]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-json",metastring:'title="Contract code in the genesis file"',children:'{\n  ...\n  "alloc": {\n      "0x0ffd23af8eebc60b3cfdeed6f814988757237314": {\n      "balance": "0x100000000000000000000000000000000000000000000000000",\n      "code": "0x6080604052600436106043576000357c010000000000000000000000000000000000000000000000000000000090048063010fc84214604857806355241077146070575b600080fd5b348015605357600080fd5b50605a60a7565b6040518082815260200191505060405180910390f35b348015607b57600080fd5b5060a560048036036020811015609057600080fd5b810190808035906020019092919050505060ad565b005b60005481565b80600081905550807f04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce360405160405180910390a25056fea165627a7a7230582038cb7ea327af8f73feabcfbff64498f1e74831e67f7c75286760d3845c6747c70029",\n      "storage": {\n        "7aa07e0c924147697605046b7c2c32645b7bbfb41e0ac5d0a84ac93cbb759798": "0000000000000000000000000000000000000000000000000000000000000001",\n        "cea2b0602db61f92b76ec4402875cc38eedc9fc425cb1b697fc2265d50fc20fb": "0000000000000000000000000000000000000000000000000000000000000001",\n      }\n    }\n  },\n  ...\n}\n'})}),"\n",(0,c.jsx)(t.p,{children:"The contract code in the genesis file defines the:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"Address."}),"\n",(0,c.jsx)(t.li,{children:"Balance."}),"\n",(0,c.jsx)(t.li,{children:"Bytecode."}),"\n",(0,c.jsx)(t.li,{children:"Key value pairs for contract storage."}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var c=n(96540);const r={},o=c.createContext(r);function i(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);