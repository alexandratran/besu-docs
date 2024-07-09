"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[13636],{71595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=n(85893),a=n(11151),s=n(74866),i=n(85162);const o={title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["private networks"]},l="Use GraphQL over HTTP",c={id:"public-networks/how-to/use-besu-api/graphql",title:"Use GraphQL over HTTP",description:"How to access the Hyperledger Besu API using GraphQL",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/use-besu-api/graphql.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/graphql",permalink:"/23.4.1/public-networks/how-to/use-besu-api/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/use-besu-api/graphql.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1720198197,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:3,frontMatter:{title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use RPC Pub/Sub over WS",permalink:"/23.4.1/public-networks/how-to/use-besu-api/rpc-pubsub"},next:{title:"Authenticate over JSON-RPC requests",permalink:"/23.4.1/public-networks/how-to/use-besu-api/authenticate"}},u={},h=[{value:"GraphQL requests with cURL",id:"graphql-requests-with-curl",level:2},{value:"GraphQL requests with GraphiQL app",id:"graphql-requests-with-graphiql-app",level:2},{value:"Pending",id:"pending",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-graphql-over-http",children:"Use GraphQL over HTTP"}),"\n",(0,r.jsx)(t.p,{children:"GraphQL can reduce the overhead needed for common queries. For example, instead of querying each receipt in a block, GraphQL can get the same result with a single query for the entire block."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," describes the GraphQL implementation for Ethereum. Enable the GraphQL service using ",(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/how-to/use-besu-api/#enable-api-access",children:"command line options"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"GraphQL is not supported over WebSocket."})}),"\n",(0,r.jsxs)(t.p,{children:["Access the GraphQL endpoint at ",(0,r.jsx)(t.code,{children:"http://<HOST>:<PORT>/graphql"}),". Configure ",(0,r.jsx)(t.code,{children:"<HOST>"})," and ",(0,r.jsx)(t.code,{children:"<PORT>"})," using ",(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options#graphql-http-host",children:(0,r.jsx)(t.code,{children:"graphql-http-host"})})," and ",(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options#graphql-http-port",children:(0,r.jsx)(t.code,{children:"graphql-http-port"})}),". The default endpoint is ",(0,r.jsx)(t.code,{children:"http://127.0.0.1:8547/graphql"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"graphql-requests-with-curl",children:"GraphQL requests with cURL"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/reference/api/",children:"Hyperledger Besu JSON-RPC API methods"})," with an equivalent ",(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/how-to/use-besu-api/graphql",children:"GraphQL"})," query include a GraphQL request and result in the method example."]}),"\n",(0,r.jsxs)(t.p,{children:["The following ",(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/reference/api/#eth_syncing",children:(0,r.jsx)(t.code,{children:"syncing"})})," request returns data about the synchronization status."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{syncing{startingBlock currentBlock highestBlock}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,r.jsx)(t.h2,{id:"graphql-requests-with-graphiql-app",children:"GraphQL requests with GraphiQL app"}),"\n",(0,r.jsxs)(t.p,{children:["The third-party tool, ",(0,r.jsx)(t.a,{href:"https://github.com/skevy/graphiql-app",children:"GraphiQL"}),", provides a tabbed interface for editing and testing GraphQL queries and mutations. GraphiQL also provides access to the ",(0,r.jsx)(t.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," from within the app."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"GraphiQL",src:n(76333).Z+"",width:"2002",height:"786"})}),"\n",(0,r.jsx)(t.h2,{id:"pending",children:"Pending"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"transactionCount"})," and ",(0,r.jsx)(t.code,{children:"transactions"})," supports the Pending query."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Besu does not execute pending transactions so results from ",(0,r.jsx)(t.code,{children:"account"}),", ",(0,r.jsx)(t.code,{children:"call"}),", and ",(0,r.jsx)(t.code,{children:"estimateGas"})," for Pending do not reflect pending transactions."]})}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"Pending transaction count",label:"Pending transaction count",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactionCount}}"}\' http://localhost:8547/graphql\n'})})}),(0,r.jsx)(i.Z,{value:"Result",label:"Result",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactionCount": 2\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"Pending transactions",label:"Pending transactions",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactions{hash}}}"}\' http://localhost:8547/graphql\n'})})}),(0,r.jsx)(i.Z,{value:"Result",label:"Result",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactions": [\n        {\n          "hash": "0xbb3ab8e2113a4afdde9753782cb0680408c0d5b982572dda117a4c72fafbf3fa"\n        },\n        {\n          "hash": "0xf6bd6b1bccf765024bd482a71c6855428e2903895982090ab5dbb0feda717af6"\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>q});var r=n(67294),a=n(36905),s=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,h]=b({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...s,className:(0,a.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function q(e){const t=(0,f.Z)();return(0,x.jsx)(w,{...e,children:h(e.children)},String(t))}},76333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GraphiQL-a6360ff9467a3f33ade0bf00e6eec49e.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);