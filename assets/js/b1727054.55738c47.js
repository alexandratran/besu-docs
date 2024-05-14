"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[92223],{36396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const i={title:"Start Besu",sidebar_position:3,description:"Start Besu on a public Ethereum network.",tags:["public networks"]},o="Start Besu",a={id:"public-networks/get-started/start-node",title:"Start Besu",description:"Start Besu on a public Ethereum network.",source:"@site/versioned_docs/version-24.5.0/public-networks/get-started/start-node.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/start-node",permalink:"/public-networks/get-started/start-node",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.0/public-networks/get-started/start-node.md",tags:[{label:"public networks",permalink:"/tags/public-networks"}],version:"24.5.0",lastUpdatedAt:1715646519,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:3,frontMatter:{title:"Start Besu",sidebar_position:3,description:"Start Besu on a public Ethereum network.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Install binary distribution",permalink:"/public-networks/get-started/install/binary-distribution"},next:{title:"Connect to a network overview",permalink:"/public-networks/get-started/connect/"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local block data",id:"local-block-data",level:2},{value:"Genesis configuration",id:"genesis-configuration",level:2},{value:"Syncing and storage",id:"syncing-and-storage",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:2},{value:"Run a node on Goerli testnet",id:"run-a-node-on-goerli-testnet",level:2},{value:"Run a node on Holesky testnet",id:"run-a-node-on-holesky-testnet",level:2},{value:"Run a node on Sepolia testnet",id:"run-a-node-on-sepolia-testnet",level:2},{value:"Run a node on Ethereum Mainnet",id:"run-a-node-on-ethereum-mainnet",level:2},{value:"Confirm node is running",id:"confirm-node-is-running",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"start-besu",children:"Start Besu"}),"\n",(0,s.jsx)(n.p,{children:"Nodes can connect to Ethereum Mainnet and public testnets."}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options",children:(0,s.jsx)(n.code,{children:"besu"})})," command with the required command line options to start a node."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/public-networks/get-started/install/binary-distribution",children:"Besu installed"})}),"\n",(0,s.jsx)(n.h2,{id:"local-block-data",children:"Local block data"}),"\n",(0,s.jsxs)(n.p,{children:["When connecting to a network other than the network previously connected to, you must either delete the local block data or use the ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})," option to specify a different data directory."]}),"\n",(0,s.jsxs)(n.p,{children:["To delete the local block data, delete the ",(0,s.jsx)(n.code,{children:"database"})," directory in the ",(0,s.jsx)(n.code,{children:"besu/build/distribution/besu-<version>"})," directory."]}),"\n",(0,s.jsx)(n.h2,{id:"genesis-configuration",children:"Genesis configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Besu specifies the genesis configuration, and sets the network ID and bootnodes when connecting to ",(0,s.jsx)(n.a,{href:"#run-a-node-on-goerli-testnet",children:"Goerli"}),", ",(0,s.jsx)(n.a,{href:"#run-a-node-on-sepolia-testnet",children:"Sepolia"}),", and ",(0,s.jsx)(n.a,{href:"#run-a-node-on-ethereum-mainnet",children:"Mainnet"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The Ropsten, Rinkeby, and Kiln testnets are deprecated."})}),"\n",(0,s.jsxs)(n.p,{children:["When you specify ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#network",children:(0,s.jsx)(n.code,{children:"--network=dev"})}),", Besu uses the development mode genesis configuration with a fixed low difficulty. A node started with ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#network",children:(0,s.jsx)(n.code,{children:"--network=dev"})})," has an empty bootnodes list by default."]}),"\n",(0,s.jsxs)(n.p,{children:["The genesis files defining the genesis configurations are in the ",(0,s.jsx)(n.a,{href:"https://github.com/hyperledger/besu/tree/master/config/src/main/resources",children:"Besu source files"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To define a genesis configuration, create a genesis file (for example, ",(0,s.jsx)(n.code,{children:"genesis.json"}),") and specify the file using the ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#genesis-file",children:(0,s.jsx)(n.code,{children:"--genesis-file"})})," option."]}),"\n",(0,s.jsx)(n.h2,{id:"syncing-and-storage",children:"Syncing and storage"}),"\n",(0,s.jsxs)(n.p,{children:["By default, Besu syncs to the current state of the blockchain using ",(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/sync-node#fast-synchronization",children:"fast sync"})," in:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Networks specified using ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#network",children:(0,s.jsx)(n.code,{children:"--network"})})," except for the ",(0,s.jsx)(n.code,{children:"dev"})," development network."]}),"\n",(0,s.jsx)(n.li,{children:"Ethereum Mainnet."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using ",(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/sync-node#snap-synchronization",children:"snap sync"})," for a faster sync, by starting Besu with ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,s.jsx)(n.code,{children:"--sync-mode=SNAP"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, Besu stores data in the ",(0,s.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#forest-of-tries",children:"Forest of Tries"})," format. We recommend using ",(0,s.jsx)(n.a,{href:"/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"})," for lower storage requirements, by starting Besu with ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-storage-format",children:(0,s.jsx)(n.code,{children:"--data-storage-format=BONSAI"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"run-a-node-for-testing",children:"Run a node for testing"}),"\n",(0,s.jsx)(n.p,{children:"To run a node that mines blocks at a rate suitable for testing purposes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-allowlist="*" --rpc-ws-enabled --rpc-http-enabled --data-path=/tmp/tmpDatdir\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the following ",(0,s.jsx)(n.a,{href:"/public-networks/how-to/use-configuration-file/",children:"configuration file"})," on the command line to start a node with the same options as above:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'network="dev"\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\nrpc-http-cors-origins=["all"]\nhost-allowlist=["*"]\nrpc-ws-enabled=true\nrpc-http-enabled=true\ndata-path="/tmp/tmpdata-path"\n'})}),"\n",(0,s.jsxs)(n.admonition,{title:"Warning",type:"danger",children:[(0,s.jsx)(n.p,{children:"The following settings are a security risk in production environments:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Enabling the HTTP JSON-RPC service (",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})}),") and setting ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-host",children:(0,s.jsx)(n.code,{children:"--rpc-http-host"})})," to 0.0.0.0 exposes the RPC connection on your node to any remote connection."]}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#host-allowlist",children:(0,s.jsx)(n.code,{children:"--host-allowlist"})})," to ",(0,s.jsx)(n.code,{children:'"*"'})," allows JSON-RPC API access from any host."]}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,s.jsx)(n.code,{children:"--rpc-http-cors-origins"})})," to ",(0,s.jsx)(n.code,{children:'"all"'})," or ",(0,s.jsx)(n.code,{children:'"*"'})," allows cross-origin resource sharing (CORS) access from any domain."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"run-a-node-on-goerli-testnet",children:"Run a node on Goerli testnet"}),"\n",(0,s.jsxs)(n.p,{children:["To run a node on ",(0,s.jsx)(n.a,{href:"https://github.com/goerli/testnet",children:"Goerli"})," specifying a data directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --network=goerli --data-path=<path>/<goerlidata-path>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"<path>"})," and ",(0,s.jsx)(n.code,{children:"<goerlidata-path>"})," are the path and directory to save the Goerli chain data to."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/testnet",children:"guide on connecting to a testnet"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"run-a-node-on-holesky-testnet",children:"Run a node on Holesky testnet"}),"\n",(0,s.jsxs)(n.p,{children:["To run a node on ",(0,s.jsx)(n.a,{href:"https://github.com/eth-clients/holesky",children:"Holesky"})," specifying a data directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --network=holesky --data-path=<path>/<holeskydata-path>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"<path>"})," and ",(0,s.jsx)(n.code,{children:"<holeskydata-path>"})," are the path and directory to save the Holesky chain data to."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/testnet",children:"guide on connecting to a testnet"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"run-a-node-on-sepolia-testnet",children:"Run a node on Sepolia testnet"}),"\n",(0,s.jsxs)(n.p,{children:["To run a node on ",(0,s.jsx)(n.a,{href:"https://github.com/goerli/sepolia",children:"Sepolia"})," specifying a data directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --network=sepolia --data-path=<path>/<sepoliadata-path>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"<path>"})," and ",(0,s.jsx)(n.code,{children:"<sepoliadata-path>"})," are the path and directory to save the Sepolia chain data to."]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/testnet",children:"guide on connecting to a testnet"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"run-a-node-on-ethereum-mainnet",children:"Run a node on Ethereum Mainnet"}),"\n",(0,s.jsx)(n.p,{children:"To run a node on the Ethereum Mainnet:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu\n"})}),"\n",(0,s.jsx)(n.p,{children:"To run a node on Mainnet with the HTTP JSON-RPC service enabled and available for localhost only:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --rpc-http-enabled\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/public-networks/get-started/connect/mainnet",children:"guide on connecting to Mainnet"})," for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"confirm-node-is-running",children:"Confirm node is running"}),"\n",(0,s.jsxs)(n.p,{children:["If you started Besu with the ",(0,s.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})})," option, use ",(0,s.jsx)(n.a,{href:"https://curl.haxx.se/",children:"cURL"})," to call ",(0,s.jsx)(n.a,{href:"/public-networks/reference/api/",children:"JSON-RPC API methods"})," to confirm the node is running."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"eth_chainId"})," returns the chain ID of the network."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}\' localhost:8545\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"eth_syncing"})," returns the starting, current, and highest block."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For example, after connecting to Mainnet, ",(0,s.jsx)(n.code,{children:"eth_syncing"})," will return something similar to:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "startingBlock": "0x0",\n    "currentBlock": "0x2d0",\n    "highestBlock": "0x66c0"\n  }\n}\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);