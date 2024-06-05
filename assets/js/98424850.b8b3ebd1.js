"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[68103],{97233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=t(85893),s=t(11151),i=t(74866),a=t(85162);const o={title:"Create an Ethash network",sidebar_position:5,description:"Create a private network using the Ethash consensus protocol.",tags:["private networks"]},l="Create a private network using Ethash",c={id:"private-networks/tutorials/ethash",title:"Create an Ethash network",description:"Create a private network using the Ethash consensus protocol.",source:"@site/versioned_docs/version-24.5.0/private-networks/tutorials/ethash.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/ethash",permalink:"/24.5.0/private-networks/tutorials/ethash",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.0/private-networks/tutorials/ethash.md",tags:[{label:"private networks",permalink:"/24.5.0/tags/private-networks"}],version:"24.5.0",lastUpdatedAt:1717518223,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:5,frontMatter:{title:"Create an Ethash network",sidebar_position:5,description:"Create a private network using the Ethash consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a Clique network",permalink:"/24.5.0/private-networks/tutorials/clique"},next:{title:"Create a privacy enabled network using the Quickstart",permalink:"/24.5.0/private-networks/tutorials/privacy/"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Create a genesis file",id:"2-create-a-genesis-file",level:3},{value:"3. Start the first node as a bootnode",id:"3-start-the-first-node-as-a-bootnode",level:3},{value:"4. Start Node-2",id:"4-start-node-2",level:3},{value:"5. Start Node-3",id:"5-start-node-3",level:3},{value:"6. Confirm the private network is working",id:"6-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-private-network-using-ethash",children:"Create a private network using Ethash"}),"\n",(0,r.jsx)(n.p,{children:"A private network provides a configurable network for testing. By configuring a low difficulty and enabling mining, this allows for fast block creation."}),"\n",(0,r.jsx)(n.p,{children:"You can test multi-block and multi-user scenarios on a private network before moving to one of the public testnets."}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall."})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"Curl (or similar webservice client)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.p,{children:"Listed on the right-hand side of the page are the steps to create a private network using Ethash."}),"\n",(0,r.jsx)(n.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,r.jsxs)(n.p,{children:["Each node requires a data directory for the blockchain data. When the node starts, Besu saves the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/node-keys",children:"node key"})," in this directory."]}),"\n",(0,r.jsx)(n.p,{children:"Create directories for your private network, each of the three nodes, and a data directory for each node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Private-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-create-a-genesis-file",children:"2. Create a genesis file"}),"\n",(0,r.jsx)(n.p,{children:"The genesis file defines the genesis block of the blockchain (that is, the start of the blockchain). The genesis file includes entries for configuring the blockchain, such as the mining difficulty and initial accounts and balances."}),"\n",(0,r.jsxs)(n.p,{children:["All nodes in a network must use the same genesis file. The ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/network-and-chain-id",children:"network ID"})," defaults to the ",(0,r.jsx)(n.code,{children:"chainID"})," in the genesis file. The ",(0,r.jsx)(n.code,{children:"fixeddifficulty"})," enables fast block mining."]}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following genesis definition to a file called ",(0,r.jsx)(n.code,{children:"privateNetworkGenesis.json"})," and save it in the ",(0,r.jsx)(n.code,{children:"Private-Network"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "berlinBlock": 0,\n    "ethash": {\n      "fixeddifficulty": 1000\n    },\n    "chainID": 1337\n  },\n  "nonce": "0x42",\n  "gasLimit": "0x1000000",\n  "difficulty": "0x10000",\n  "alloc": {\n    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "0xad78ebc5ac6200000"\n    },\n    "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["We recommend specifying the latest ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/genesis-items#milestone-blocks",children:"milestone"})," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes."]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Don't use the accounts in ",(0,r.jsx)(n.code,{children:"alloc"})," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."]})}),"\n",(0,r.jsx)(n.h3,{id:"3-start-the-first-node-as-a-bootnode",children:"3. Start the first node as a bootnode"}),"\n",(0,r.jsx)(n.p,{children:"Start Node-1:"}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../privateNetworkGenesis.json --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-enabled --host-allowlist="*" --rpc-http-cors-origins="all"\n'})})}),(0,r.jsx)(a.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-enabled --host-allowlist="*" --rpc-http-cors-origins="all"\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line enables:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Mining and specifies the account to pay mining rewards to using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#miner-enabled",children:(0,r.jsx)(n.code,{children:"--miner-enabled"})})," and ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#miner-coinbase",children:(0,r.jsx)(n.code,{children:"--miner-coinbase"})})," options."]}),"\n",(0,r.jsxs)(n.li,{children:["JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-http-enabled"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["All-host access to the HTTP JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["All-domain access to the node through the HTTP JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,r.jsx)(n.code,{children:"--rpc-http-cors-origins"})})," option."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The miner coinbase account is one of the accounts defined in the genesis file."})}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Node 1 Enode URL",src:t(54488).Z+"",width:"988",height:"126"})}),"\n",(0,r.jsx)(n.h3,{id:"4-start-node-2",children:"4. Start Node-2"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-2"})," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=../privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304\n"})})}),(0,r.jsx)(a.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["The enode URL of Node-1 using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#bootnodes",children:(0,r.jsx)(n.code,{children:"--bootnodes"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A data directory for Node-2 using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsx)(n.li,{children:"A genesis file as for Node-1."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"5-start-node-3",children:"5. Start Node-3"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-3"})," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=../privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305\n"})})}),(0,r.jsx)(a.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A different port to Node-1 and Node-2 for P2P discovery."}),"\n",(0,r.jsxs)(n.li,{children:["A data directory for Node-3 using the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsx)(n.li,{children:"A bootnode and genesis file as for Node-2."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"6-confirm-the-private-network-is-working",children:"6. Confirm the private network is working"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, use curl to call the JSON-RPC API ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/api/#net_peercount",children:(0,r.jsx)(n.code,{children:"net_peerCount"})})," method and confirm the nodes are functioning as peers:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result confirms Node-1 (the node running the JSON-RPC service) has two peers (Node-2 and Node-3):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x2"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["Import accounts to MetaMask and send transactions as described in the ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/tutorials/quickstart#create-a-transaction-using-metamask",children:"Quickstart tutorial"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Besu doesn't support ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/how-to/send-transactions",children:"private key management"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Send transactions using ",(0,r.jsx)(n.code,{children:"eth_sendRawTransaction"})," to ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/send-transactions/",children:"send ether or, deploy or invoke contracts"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/how-to/use-besu-api/json-rpc",children:"JSON-RPC API"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Start a node with the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-ws-enabled"})})," option and use the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/how-to/use-besu-api/rpc-pubsub",children:"RPC Pub/Sub API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"stop-the-nodes",children:"Stop the nodes"}),"\n",(0,r.jsx)(n.p,{children:"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To restart the private network in the future, start from ",(0,r.jsx)(n.a,{href:"#3-start-the-first-node-as-a-bootnode",children:"3. Start the first node as a bootnode"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),s=t(36905),i=t(12466),a=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=f({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),j=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=b(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function k(e){const n=(0,x.Z)();return(0,m.jsx)(w,{...e,children:h(e.children)},String(n))}},54488:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);