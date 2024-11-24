"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[86217],{2034:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=s(85893),i=s(11151),t=s(74866),o=s(85162);const a={title:"Create a permissioned network",sidebar_position:1,description:"Hyperledger Besu create a permissioned network",tags:["private networks"]},d="Create a permissioned network",l={id:"private-networks/tutorials/permissioning/index",title:"Create a permissioned network",description:"Hyperledger Besu create a permissioned network",source:"@site/versioned_docs/version-24.5.0/private-networks/tutorials/permissioning/index.md",sourceDirName:"private-networks/tutorials/permissioning",slug:"/private-networks/tutorials/permissioning/",permalink:"/24.5.0/private-networks/tutorials/permissioning/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.0/private-networks/tutorials/permissioning/index.md",tags:[{label:"private networks",permalink:"/24.5.0/tags/private-networks"}],version:"24.5.0",lastUpdatedAt:1717518223,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:1,frontMatter:{title:"Create a permissioned network",sidebar_position:1,description:"Hyperledger Besu create a permissioned network",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a privacy-enabled network using the Quorum Developer Quickstart",permalink:"/24.5.0/private-networks/tutorials/privacy/quickstart"},next:{title:"Deploy a smart contract",permalink:"/24.5.0/private-networks/tutorials/contracts/"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create folders",id:"1-create-folders",level:3},{value:"2. Create the configuration file",id:"2-create-the-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the Permissioned-Network directory",id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",level:3},{value:"5. Copy the node private keys to the node directories",id:"5-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"6. Create the permissions configuration file",id:"6-create-the-permissions-configuration-file",level:3},{value:"7. Start Node-1",id:"7-start-node-1",level:3},{value:"8. Start Node-2",id:"8-start-node-2",level:3},{value:"9. Start Node-3",id:"9-start-node-3",level:3},{value:"10. Start Node-4",id:"10-start-node-4",level:3},{value:"11. Add enode URLs for nodes to permissions configuration file",id:"11-add-enode-urls-for-nodes-to-permissions-configuration-file",level:3},{value:"12. Add nodes as peers",id:"12-add-nodes-as-peers",level:3},{value:"13. Confirm permissioned network is working",id:"13-confirm-permissioned-network-is-working",level:3},{value:"Check peer count",id:"check-peer-count",level:4},{value:"Send a transaction from an account in the allowlist",id:"send-a-transaction-from-an-account-in-the-allowlist",level:4},{value:"Try sending a transaction from an account not in the accounts allowlist",id:"try-sending-a-transaction-from-an-account-not-in-the-accounts-allowlist",level:3},{value:"Start a node not on the nodes allowlist",id:"start-a-node-not-on-the-nodes-allowlist",level:3},{value:"Stop nodes",id:"stop-nodes",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-permissioned-network",children:"Create a permissioned network"}),"\n",(0,r.jsxs)(n.p,{children:["The following steps set up a permissioned network with local node and account permissions. The network uses the ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0 proof of authority consensus protocol"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"A permissioned Ethereum network as described here is not protected against all attack vectors. We recommend applying defense in depth to protect your infrastructure."})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"curl (or similar Web service client)"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.h3,{id:"1-create-folders",children:"1. Create folders"}),"\n",(0,r.jsx)(n.p,{children:"Each node requires a data directory for the blockchain data."}),"\n",(0,r.jsx)(n.p,{children:"Create directories for your permissioned network and each of the three nodes, and a data directory for each node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Permissioned-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-create-the-configuration-file",children:"2. Create the configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file defines the ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0 genesis file"})," and the number of node key pairs to generate."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,r.jsx)(n.code,{children:"genesis"})," property defining the IBFT 2.0 genesis file, except for the ",(0,r.jsx)(n.code,{children:"extraData"})," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,r.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following configuration file definition to a file called ",(0,r.jsx)(n.code,{children:"ibftConfigFile.json"})," and save it in the ",(0,r.jsx)(n.code,{children:"Permissioned-Network"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "ibft2": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Security warning",type:"danger",children:(0,r.jsx)(n.p,{children:"Don't use the accounts in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."})}),"\n",(0,r.jsx)(n.h3,{id:"3-generate-node-keys-and-a-genesis-file",children:"3. Generate node keys and a genesis file"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Permissioned-Network"})," directory, generate the node key and genesis file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=ibftConfigFile.json --to=networkFiles --private-key-file-name=key\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Besu creates the following in the ",(0,r.jsx)(n.code,{children:"networkFiles"})," directory:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"genesis.json"})," - The genesis file including the ",(0,r.jsx)(n.code,{children:"extraData"})," property specifying the four nodes are validators."]}),"\n",(0,r.jsx)(n.li,{children:"A directory for each node named using the node address and containing the public and private key for each node."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",children:"4. Copy the genesis file to the Permissioned-Network directory"}),"\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"genesis.json"})," file to the ",(0,r.jsx)(n.code,{children:"Permisssioned-Network"})," directory."]}),"\n",(0,r.jsx)(n.h3,{id:"5-copy-the-node-private-keys-to-the-node-directories",children:"5. Copy the node private keys to the node directories"}),"\n",(0,r.jsxs)(n.p,{children:["For each node, copy the key files to the ",(0,r.jsx)(n.code,{children:"data"})," directory for that node"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Permissioned-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n"})}),"\n",(0,r.jsx)(n.h3,{id:"6-create-the-permissions-configuration-file",children:"6. Create the permissions configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/use-permissioning/local#permissions-configuration-file",children:"permissions configuration file"})," defines the nodes and accounts allowlists."]}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following permissions configuration to a file called ",(0,r.jsx)(n.code,{children:"permissions_config.toml"})," and save a copy in the ",(0,r.jsx)(n.code,{children:"Node-1/data"}),", ",(0,r.jsx)(n.code,{children:"Node-2/data"}),", ",(0,r.jsx)(n.code,{children:"Node-3/data"}),", and ",(0,r.jsx)(n.code,{children:"Node-4/data"})," directories:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:'title="permissions_config.toml"',children:'accounts-allowlist=["0xfe3b557e8fb62b89f4916b721be55ceb828dbd73", "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"]\n\nnodes-allowlist=[]\n'})}),"\n",(0,r.jsx)(n.p,{children:"The permissions configuration file includes the first two accounts from the genesis file."}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/reference/api/#perm_addnodestoallowlist",children:(0,r.jsx)(n.code,{children:"perm_addNodesToAllowlist"})})," JSON-RPC API method to add permissioned nodes after starting the nodes."]}),"\n",(0,r.jsx)(n.h3,{id:"7-start-node-1",children:"7. Start Node-1"}),"\n",(0,r.jsx)(n.p,{children:"Use the following command:"}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*"\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*"\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line allows you to enable:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Nodes and accounts permissions using ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/reference/cli/options#permissions-nodes-config-file-enabled",children:(0,r.jsx)(n.code,{children:"--permissions-nodes-config-file-enabled"})})," and ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/reference/cli/options#permissions-accounts-config-file-enabled",children:(0,r.jsx)(n.code,{children:"--permissions-accounts-config-file-enabled"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The JSON-RPC API using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-http-enabled"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"ADMIN"}),", ",(0,r.jsx)(n.code,{children:"ETH"}),", ",(0,r.jsx)(n.code,{children:"NET"}),", ",(0,r.jsx)(n.code,{children:"PERM"}),", and ",(0,r.jsx)(n.code,{children:"IBFT"})," APIs using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(n.code,{children:"--rpc-http-api"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["All-host access to the HTTP JSON-RPC API using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["All-domain access to the node through the HTTP JSON-RPC API using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,r.jsx)(n.code,{children:"--rpc-http-cors-origins"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to specify Node-1 as a peer and update the permissions configuration file in the following steps."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Node 1 Enode URL",src:s(54488).Z+"",width:"988",height:"126"})}),"\n",(0,r.jsx)(n.h3,{id:"8-start-node-2",children:"8. Start Node-2"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-2"})," directory, and start Node-2:"]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30304 --rpc-http-port=8546\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30304 --rpc-http-port=8546\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 for HTTP JSON-RPC using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A data directory for Node-2 using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to update the permissions configuration file in the following steps."]}),"\n",(0,r.jsx)(n.h3,{id:"9-start-node-3",children:"9. Start Node-3"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-3"})," directory, and start Node-3:"]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30305 --rpc-http-port=8547\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30305 --rpc-http-port=8547\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for P2P discovery using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for HTTP JSON-RPC using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A data directory for Node-3 using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to update the permissions configuration file in the following steps."]}),"\n",(0,r.jsx)(n.h3,{id:"10-start-node-4",children:"10. Start Node-4"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-4"})," directory, and start Node-4:"]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30306 --rpc-http-port=8548\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30306 --rpc-http-port=8548\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for P2P discovery using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A data directory for Node-4 using ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to update the permissions configuration file in the following steps."]}),"\n",(0,r.jsx)(n.h3,{id:"11-add-enode-urls-for-nodes-to-permissions-configuration-file",children:"11. Add enode URLs for nodes to permissions configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal and use the ",(0,r.jsx)(n.a,{href:"/24.5.0/private-networks/reference/api/#perm_addnodestoallowlist",children:(0,r.jsx)(n.code,{children:"perm_addNodesToAllowlist"})})," JSON-RPC API method to add the nodes to the permissions configuration file for each node."]}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<EnodeNode1>"}),", ",(0,r.jsx)(n.code,{children:"<EnodeNode2>"}),", ",(0,r.jsx)(n.code,{children:"<EnodeNode3>"}),", and ",(0,r.jsx)(n.code,{children:"<EnodeNode4>"})," with the enode URL displayed when starting each node."]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"Node-1",label:"Node-1",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8545\n'})})}),(0,r.jsx)(o.Z,{value:"Node-2",label:"Node-2",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8546\n'})})}),(0,r.jsx)(o.Z,{value:"Node-3",label:"Node-3",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8547\n'})})}),(0,r.jsx)(o.Z,{value:"Node-4",label:"Node-4",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8548\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The curl call is the same for each node except for the JSON-RPC endpoint."})}),"\n",(0,r.jsx)(n.h3,{id:"12-add-nodes-as-peers",children:"12. Add nodes as peers"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/api/#admin_addpeer",children:(0,r.jsx)(n.code,{children:"admin_addPeer"})})," JSON-RPC API method to add Node-1 as a peer for Node-2, Node-3, and Node-4."]}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<EnodeNode1>"})," with the enode URL displayed when starting Node-1."]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"Node-2",label:"Node-2",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8546\n'})})}),(0,r.jsx)(o.Z,{value:"Node-3",label:"Node-3",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8547\n'})})}),(0,r.jsx)(o.Z,{value:"Node-4",label:"Node-4",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8548\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The curl call is the same for each node except for the JSON-RPC endpoint."})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<EnodeNode2>"})," with the enode URL displayed when starting Node-2."]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"Node-3",label:"Node-3",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode2>"],"id":1}\' http://127.0.0.1:8547\n'})})}),(0,r.jsx)(o.Z,{value:"Node-4",label:"Node-4",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode2>"],"id":1}\' http://127.0.0.1:8548\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<EnodeNode3>"})," with the enode URL displayed when starting Node-3."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode3>"],"id":1}\' http://127.0.0.1:8548\n'})}),"\n",(0,r.jsx)(n.h3,{id:"13-confirm-permissioned-network-is-working",children:"13. Confirm permissioned network is working"}),"\n",(0,r.jsx)(n.h4,{id:"check-peer-count",children:"Check peer count"}),"\n",(0,r.jsxs)(n.p,{children:["Use curl to call the JSON-RPC API ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/api/#net_peercount",children:(0,r.jsx)(n.code,{children:"net_peerCount"})})," method and confirm the nodes are functioning as peers:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result confirms Node-1 (the node running the JSON-RPC service) has three peers (Node-2, Node-3 and Node-4):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x3"\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"send-a-transaction-from-an-account-in-the-allowlist",children:"Send a transaction from an account in the allowlist"}),"\n",(0,r.jsx)(n.p,{children:"Import the first account from the genesis file into MetaMask and send transactions, as described in [Quickstart tutorial]:"}),"\n",(0,r.jsx)(n.admonition,{title:"Account 1",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Address: ",(0,r.jsx)(n.code,{children:"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"})]}),"\n",(0,r.jsxs)(n.li,{children:["Private key : ",(0,r.jsx)(n.code,{children:"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"})]}),"\n",(0,r.jsxs)(n.li,{children:["Initial balance : ",(0,r.jsx)(n.code,{children:"0xad78ebc5ac6200000"})," (200000000000000000000 in decimal)"]}),"\n"]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Besu doesn't support ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/how-to/send-transactions",children:"private key management"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"try-sending-a-transaction-from-an-account-not-in-the-accounts-allowlist",children:"Try sending a transaction from an account not in the accounts allowlist"}),"\n",(0,r.jsx)(n.p,{children:"Import the third account from the genesis file into MetaMask and try to send a transaction, as described in [Quickstart tutorial]:"}),"\n",(0,r.jsx)(n.admonition,{title:"Account 3",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Address: ",(0,r.jsx)(n.code,{children:"0xf17f52151EbEF6C7334FAD080c5704D77216b732"})]}),"\n",(0,r.jsxs)(n.li,{children:["Private key: ",(0,r.jsx)(n.code,{children:"0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f"})]}),"\n",(0,r.jsxs)(n.li,{children:["Initial balance: ",(0,r.jsx)(n.code,{children:"0x90000000000000000000000"})," (2785365088392105618523029504 in decimal)"]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"start-a-node-not-on-the-nodes-allowlist",children:"Start a node not on the nodes allowlist"}),"\n",(0,r.jsxs)(n.p,{children:["In your ",(0,r.jsx)(n.code,{children:"Permissioned-Network"})," directory, create a ",(0,r.jsx)(n.code,{children:"Node-5"})," directory and ",(0,r.jsx)(n.code,{children:"data"})," directory inside it."]}),"\n",(0,r.jsxs)(n.p,{children:["Change to the ",(0,r.jsx)(n.code,{children:"Node-5"})," directory and start Node-5 specifying the Node-1 enode URL as the bootnode:"]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --bootnodes="<EnodeNode1>" --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30307 --rpc-http-port=8549\n'})})}),(0,r.jsx)(o.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --bootnodes="<EnodeNode1>" --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30307 --rpc-http-port=8549\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal and use curl to call the JSON-RPC API ",(0,r.jsx)(n.a,{href:"/24.5.0/public-networks/reference/api/#net_peercount",children:(0,r.jsx)(n.code,{children:"net_peerCount"})})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8549\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result confirms Node-5 has no peers even though it specifies Node-1 as a bootnode:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x0"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"stop-nodes",children:"Stop nodes"}),"\n",(0,r.jsx)(n.p,{children:"When finished using the permissioned network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To restart the permissioned network in the future, start from ",(0,r.jsx)(n.a,{href:"#7-start-node-1",children:"step 7"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>o});s(67294);var r=s(36905);const i={tabItem:"tabItem_Ymn6"};var t=s(85893);function o(e){let{children:n,hidden:s,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>k});var r=s(67294),i=s(36905),t=s(12466),o=s(16550),a=s(20469),d=s(91980),l=s(67392),c=s(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const i=(0,o.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d._X)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=p(e),[o,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[l,h]=f({queryString:s,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,c.Nk)(s);return[i,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:i}),m=(()=>{const e=l??x;return u({value:e,tabValues:t})?e:null})();(0,a.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,t]),tabValues:t}}var j=s(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(85893);function b(e){let{className:n,block:s,selectedValue:r,selectValue:o,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,t.o5)(),c=e=>{const n=e.currentTarget,s=d.indexOf(n),i=a[s].value;i!==r&&(l(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...t,className:(0,i.Z)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function N(e){let{lazy:n,children:s,selectedValue:i}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(N,{...e,...n})]})}function k(e){const n=(0,j.Z)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},54488:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(67294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);