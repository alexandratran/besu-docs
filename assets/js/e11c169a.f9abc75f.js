"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4589],{22700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(85893),a=n(11151),r=n(74866),o=n(85162);const i={title:"Run Besu and Teku on a testnet",sidebar_position:2,description:"Run Besu and Teku on Goerli or Sepolia testnet.",tags:["public networks"]},l="Run Besu and Teku on a testnet",c={id:"public-networks/tutorials/besu-teku-testnet",title:"Run Besu and Teku on a testnet",description:"Run Besu and Teku on Goerli or Sepolia testnet.",source:"@site/versioned_docs/version-23.4.1/public-networks/tutorials/besu-teku-testnet.md",sourceDirName:"public-networks/tutorials",slug:"/public-networks/tutorials/besu-teku-testnet",permalink:"/23.4.1/public-networks/tutorials/besu-teku-testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/tutorials/besu-teku-testnet.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"}],version:"23.4.1",lastUpdatedAt:1707849483,formattedLastUpdatedAt:"Feb 13, 2024",sidebarPosition:2,frontMatter:{title:"Run Besu and Teku on a testnet",sidebar_position:2,description:"Run Besu and Teku on Goerli or Sepolia testnet.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Run Besu and Teku on Mainnet",permalink:"/23.4.1/public-networks/tutorials/besu-teku-mainnet"},next:{title:"Reference",permalink:"/23.4.1/public-networks/reference"}},d={},u=[{value:"1. Install Besu and Teku",id:"1-install-besu-and-teku",level:2},{value:"2. Generate the shared secret",id:"2-generate-the-shared-secret",level:2},{value:"3. Generate validator keys",id:"3-generate-validator-keys",level:2},{value:"4. Start Besu",id:"4-start-besu",level:2},{value:"5. Start Teku",id:"5-start-teku",level:2},{value:"Beacon node only",id:"beacon-node-only",level:3},{value:"Beacon node and validator client",id:"beacon-node-and-validator-client",level:3},{value:"6. Wait for Besu and Teku to sync",id:"6-wait-for-besu-and-teku-to-sync",level:2},{value:"7. Stake ETH",id:"7-stake-eth",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"run-besu-and-teku-on-a-testnet",children:"Run Besu and Teku on a testnet"}),"\n",(0,s.jsxs)(t.p,{children:["Run Besu as an ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/concepts/the-merge#execution-clients",children:"execution client"})," and ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/",children:"Teku"})," as a ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/concepts/the-merge#consensus-clients",children:"consensus client"})," on the ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/goerli",children:"Goerli"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/sepolia",children:"Sepolia"})," Ethereum testnets."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Sepolia is a permissioned network and you can't run a validator client on it without ",(0,s.jsx)(t.a,{href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg",children:"requesting to become a validator"})," first. You can connect your consensus client using the beacon node only, without any validator duties."]})}),"\n",(0,s.jsx)(t.h2,{id:"1-install-besu-and-teku",children:"1. Install Besu and Teku"}),"\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/get-started/install/binary-distribution",children:"Besu"})," and ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/HowTo/Get-Started/Installation-Options/Install-Binaries/",children:"Teku"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Ensure you meet the prerequisites for the installation option you use. For example, you must have Java 17+ if using the Besu and Teku binary distributions."}),"\n",(0,s.jsxs)(t.p,{children:["Ensure you meet the ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/get-started/system-requirements",children:"system requirements for Besu on public networks"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"2-generate-the-shared-secret",children:"2. Generate the shared secret"}),"\n",(0,s.jsx)(t.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You will specify ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," when starting Besu and Teku. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"3-generate-validator-keys",children:"3. Generate validator keys"}),"\n",(0,s.jsxs)(t.p,{children:["If you're running Teku as a beacon node only, skip to the ",(0,s.jsx)(t.a,{href:"#4-start-besu",children:"next step"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you're also running Teku as a validator client, create a test Ethereum address (you can do this in ",(0,s.jsx)(t.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet",children:"MetaMask"}),"). Fund this address with testnet ETH (32 ETH and gas fees for each validator) using a faucet. See the list of ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/goerli#meta-data-g%C3%B6rli",children:"Goerli faucets"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/sepolia#meta-data-sepolia",children:"Sepolia faucets"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you can't get ETH using the faucet, you can ask for help on the ",(0,s.jsx)(t.a,{href:"https://discord.io/ethstaker",children:"EthStaker Discord"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Generate validator keys for one or more validators using the ",(0,s.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/",children:"Goerli Staking Launchpad"})," (or ",(0,s.jsx)(t.a,{href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg",children:"request to become validator on Sepolia"}),")."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Save the password you use to generate each key pair in a ",(0,s.jsx)(t.code,{children:".txt"})," file. You should also have a ",(0,s.jsx)(t.code,{children:".json"})," file for each validator key pair."]})}),"\n",(0,s.jsx)(t.h2,{id:"4-start-besu",children:"4. Start Besu"}),"\n",(0,s.jsxs)(t.p,{children:["Run the following command or specify the options in a ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/how-to/configuration-file",children:"configuration file"}),":"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(o.Z,{value:"Goerli",label:"Goerli",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'besu \\\n  --network=goerli            \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})})}),(0,s.jsx)(o.Z,{value:"Sepolia",label:"Sepolia",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'besu \\\n  --network=sepolia           \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Specify the path to the ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(t.a,{href:"#2-generate-the-shared-secret",children:"step 2"})," using the ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options#engine-jwt-secret",children:(0,s.jsx)(t.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,s.jsxs)(t.p,{children:["You can modify the option values and add other ",(0,s.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options",children:"command line options"})," as needed."]}),"\n",(0,s.jsx)(t.h2,{id:"5-start-teku",children:"5. Start Teku"}),"\n",(0,s.jsx)(t.p,{children:"Open a new terminal window."}),"\n",(0,s.jsx)(t.h3,{id:"beacon-node-only",children:"Beacon node only"}),"\n",(0,s.jsxs)(t.p,{children:["To run Teku as a beacon node only (without validator duties), run the following command or specify the options in the ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/",children:"Teku configuration file"}),":"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(o.Z,{value:"Goerli",label:"Goerli",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"teku \\\n  --network=goerli                             \\\n  --ee-endpoint=http://localhost:8551          \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex> \\\n  --metrics-enabled=true                       \\\n  --rest-api-enabled=true\n"})})}),(0,s.jsx)(o.Z,{value:"Sepolia",label:"Sepolia",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"teku \\\n  --network=sepolia                            \\\n  --ee-endpoint=http://localhost:8551          \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex> \\\n  --metrics-enabled=true                       \\\n  --rest-api-enabled=true\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Specify the path to the ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(t.a,{href:"#2-generate-the-shared-secret",children:"step 2"})," using the ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file",children:(0,s.jsx)(t.code,{children:"--ee-jwt-secret-file"})})," option."]}),"\n",(0,s.jsxs)(t.p,{children:["You can modify the option values and add other ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/",children:"Teku command line options"})," as needed."]}),"\n",(0,s.jsx)(t.h3,{id:"beacon-node-and-validator-client",children:"Beacon node and validator client"}),"\n",(0,s.jsxs)(t.p,{children:["To run Teku as a beacon node and validator in a single process, run the following command or specify the options in the ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/",children:"Teku configuration file"}),":"]}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(o.Z,{value:"Goerli",label:"Goerli",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"teku \\\n  --network=goerli                                          \\\n  --ee-endpoint=http://localhost:8551                       \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex>              \\\n  --metrics-enabled=true                                    \\\n  --rest-api-enabled=true                                   \\\n  --validators-proposer-default-fee-recipient=<ETH address> \\\n  --validator-keys=<path to key file>:<path to password file>[,<path to key file>:<path to password file>,...]\n"})})}),(0,s.jsx)(o.Z,{value:"Sepolia",label:"Sepolia",children:(0,s.jsxs)(t.p,{children:["Sepolia is a permissioned network and you can't run a validator client on it without ",(0,s.jsx)(t.a,{href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg",children:"requesting to become a validator"})," first."]})})]}),"\n",(0,s.jsx)(t.p,{children:"Specify:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The path to the ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(t.a,{href:"#2-generate-the-shared-secret",children:"step 2"})," using the ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file",children:(0,s.jsx)(t.code,{children:"--ee-jwt-secret-file"})})," option."]}),"\n",(0,s.jsxs)(t.li,{children:["The test Ethereum address created in ",(0,s.jsx)(t.a,{href:"#3-generate-validator-keys",children:"step 3"})," as the default fee recipient using the ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validators-proposer-default-fee-recipient",children:(0,s.jsx)(t.code,{children:"--validators-proposer-default-fee-recipient"})})," option."]}),"\n",(0,s.jsxs)(t.li,{children:["The paths to the keystore ",(0,s.jsx)(t.code,{children:".json"})," file and password ",(0,s.jsx)(t.code,{children:".txt"})," file created in ",(0,s.jsx)(t.a,{href:"#3-generate-validator-keys",children:"step 3"})," for each validator using the ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validator-keys",children:(0,s.jsx)(t.code,{children:"--validator-keys"})})," option. Separate the ",(0,s.jsx)(t.code,{children:".json"})," and ",(0,s.jsx)(t.code,{children:".txt"})," files with a colon, and separate entries for multiple validators with commas."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can modify the option values and add other ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/",children:"Teku command line options"})," as needed."]}),"\n",(0,s.jsx)(t.h2,{id:"6-wait-for-besu-and-teku-to-sync",children:"6. Wait for Besu and Teku to sync"}),"\n",(0,s.jsx)(t.p,{children:"After starting Besu and Teku, your node starts syncing and connecting to peers."}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(o.Z,{value:"Besu logs",label:"Besu logs",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'})})}),(0,s.jsx)(o.Z,{value:"Teku logs",label:"Teku logs",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"If you're running Teku as a beacon node only, you're all set. If you're also running Teku as a validator client, ensure Besu and Teku are fully synced before submitting your staking deposit in the next step. Syncing Besu can take several days."}),"\n",(0,s.jsx)(t.h2,{id:"7-stake-eth",children:"7. Stake ETH"}),"\n",(0,s.jsxs)(t.p,{children:["Stake your testnet ETH for one or more validators using the ",(0,s.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/",children:"Goerli Staking Launchpad"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can check your validator status by searching your Ethereum address on the ",(0,s.jsx)(t.a,{href:"https://goerli.beaconcha.in/",children:"Goerli Beacon Chain explorer"}),". It may take up to multiple days for your validator to be activated and start proposing blocks."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var s=n(36905);const a={tabItem:"tabItem_Ymn6"};var r=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(67294),a=n(36905),r=n(12466),o=n(16550),i=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=f({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function j(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==s&&(c(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(k,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);