"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[11668],{34203:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(85893),i=t(11151);const o={title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",sidebar_position:1,tags:["private networks"]},a="Use EEA-compliant privacy",s={id:"private-networks/how-to/use-privacy/eea-compliant",title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/eea-compliant.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/eea-compliant",permalink:"/23.4.1/private-networks/how-to/use-privacy/eea-compliant",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/use-privacy/eea-compliant.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1712348844,formattedLastUpdatedAt:"Apr 5, 2024",sidebarPosition:1,frontMatter:{title:"Use EEA-compliant privacy",description:"Hyperledger Besu JSON-RPC methods to use for EEA-compliant privacy",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Sirato Explorer",permalink:"/23.4.1/private-networks/how-to/monitor/sirato-explorer"},next:{title:"Use Besu-extended privacy",permalink:"/23.4.1/private-networks/how-to/use-privacy/besu-extended"}},p={},c=[{value:"Privacy group type",id:"privacy-group-type",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"use-eea-compliant-privacy",children:"Use EEA-compliant privacy"}),"\n",(0,n.jsxs)(r.p,{children:["When using Hyperledger Besu ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/concepts/privacy/privacy-groups",children:"EEA-compliant privacy"}),", the group of nodes specified by ",(0,n.jsx)(r.code,{children:"privateFrom"})," and ",(0,n.jsx)(r.code,{children:"privateFor"})," form a privacy group, to which Tessera assigns a unique privacy group ID."]}),"\n",(0,n.jsxs)(r.p,{children:["To enable the ",(0,n.jsxs)(r.a,{href:"/23.4.1/private-networks/reference/api/#eea-methods",children:[(0,n.jsx)(r.code,{children:"EEA"})," API methods"]}),", use the ",(0,n.jsx)(r.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-http-api",children:(0,n.jsx)(r.code,{children:"--rpc-http-api"})})," or ",(0,n.jsx)(r.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-ws-api",children:(0,n.jsx)(r.code,{children:"--rpc-ws-api"})})," command line options."]}),"\n",(0,n.jsxs)(r.p,{children:["To create an EEA-compliant private transaction, specify ",(0,n.jsx)(r.code,{children:"privateFor"})," when creating the signed transaction passed as an input parameter to ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/reference/api/#eea_sendrawtransaction",children:(0,n.jsx)(r.code,{children:"eea_sendRawTransaction"})}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"privacy-group-type",children:"Privacy group type"}),"\n",(0,n.jsxs)(r.p,{children:["Privacy groups created when specifying ",(0,n.jsx)(r.code,{children:"privateFrom"})," and ",(0,n.jsx)(r.code,{children:"privateFor"})," have a ",(0,n.jsx)(r.code,{children:"LEGACY"})," privacy group type when returned by ",(0,n.jsx)(r.a,{href:"/23.4.1/private-networks/reference/api/#priv_findprivacygroup",children:(0,n.jsx)(r.code,{children:"priv_findPrivacyGroup"})}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    {\n      "privacyGroupId": "68/Cq0mVjB8FbXDLE1tbDRAvD/srluIok137uFOaClM=",\n      "name": "legacy",\n      "description": "Privacy groups to support the creation of groups by privateFor and privateFrom",\n      "type": "LEGACY",\n      "members": [\n        "g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw=",\n        "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk="\n      ]\n    }\n  ]\n}\n'})})]})}function l(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var n=t(67294);const i={},o=n.createContext(i);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);