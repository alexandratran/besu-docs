"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[3005],{25319:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=s(74848),o=s(28453);const t={title:"Upgrade Besu",sidebar_position:11,description:"Upgrade your Besu node to a new version.",toc_max_heading_level:2,tags:["public networks","private networks"]},i="Upgrade your Besu node",a={id:"public-networks/how-to/upgrade-node",title:"Upgrade Besu",description:"Upgrade your Besu node to a new version.",source:"@site/docs/public-networks/how-to/upgrade-node.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/upgrade-node",permalink:"/public-networks/how-to/upgrade-node",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/upgrade-node.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1740173242e3,sidebarPosition:11,frontMatter:{title:"Upgrade Besu",sidebar_position:11,description:"Upgrade your Besu node to a new version.",toc_max_heading_level:2,tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure mining",permalink:"/public-networks/how-to/use-pow/mining"},next:{title:"Use EVM tool",permalink:"/public-networks/how-to/troubleshoot/evm-tool"}},l={},d=[{value:"Upgrade on Linux",id:"upgrade-on-linux",level:2},{value:"Upgrade on Docker",id:"upgrade-on-docker",level:2},{value:"Upgrade on Kubernetes",id:"upgrade-on-kubernetes",level:2},{value:"Upgrade on Ansible",id:"upgrade-on-ansible",level:2},{value:"Verify post-upgrade",id:"verify-post-upgrade",level:2},{value:"RPC methods",id:"rpc-methods",level:3},{value:"Logs",id:"logs",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Find peers on restarting",id:"find-peers-on-restarting",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Sync not progressing",id:"sync-not-progressing",level:4},{value:"Low peer count",id:"low-peer-count",level:4},{value:"API unavailable",id:"api-unavailable",level:4},{value:"Data corruption",id:"data-corruption",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"upgrade-your-besu-node",children:"Upgrade your Besu node"})}),"\n",(0,r.jsx)(n.p,{children:"This page provides instructions for upgrading your Besu node on:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#upgrade-on-linux",children:"Linux"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#upgrade-on-docker",children:"Docker"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#upgrade-on-kubernetes",children:"Kubernetes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#upgrade-on-ansible",children:"Ansible"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When upgrading your node, we recommend:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Checking the ",(0,r.jsx)(n.a,{href:"https://github.com/hyperledger/besu/releases",children:"Besu release notes"})," for breaking changes."]}),"\n",(0,r.jsx)(n.li,{children:"Preserving your node's data and configuration."}),"\n",(0,r.jsx)(n.li,{children:"Storing your configuration under version control."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-on-linux",children:"Upgrade on Linux"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following script to automatically download the latest Linux release, extract it, and clean up:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'RELEASE_URL="https://api.github.com/repos/hyperledger/besu/releases/latest"\nTAG=$(curl -s $RELEASE_URL | jq -r .tag_name)\nBINARIES_URL="https://github.com/hyperledger/besu/releases/download/$TAG/besu-$TAG.tar.gz"\n\necho Downloading URL: $BINARIES_URL\n\ncd $HOME\nwget -O besu.tar.gz $BINARIES_URL\ntar -xzvf besu.tar.gz -C $HOME\nrm besu.tar.gz\nsudo mv $HOME/besu-${TAG} besu\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop your Besu node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop execution\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Remove old binaries, install new binaries, and restart Besu:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo rm -rf /usr/local/bin/besu\nsudo mv $HOME/besu /usr/local/bin/besu\nsudo systemctl start execution\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"note",type:"tip",children:(0,r.jsxs)(n.p,{children:["Thank you to\n",(0,r.jsx)(n.a,{href:"https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-ii-maintenance/updating-execution-client#besu",children:"CoinCashew"}),"\nfor this upgrade script.\nYou can also see CoinCashew for instructions on upgrading Besu by building from source."]})}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-on-docker",children:"Upgrade on Docker"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update your Docker image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull hyperledger/besu:latest\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Stop the current container:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker stop besu-node\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start a new container with the updated image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\n  --name besu-node            \\\n  -v besu-data:/opt/besu/data \\\n  -v besu-config:/etc/besu    \\\n  hyperledger/besu:latest\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: \'3.8\'\nservices:\n  besu:\n    image: hyperledger/besu:latest\n    volumes:\n      - besu-data:/opt/besu/data\n      - besu-config:/etc/besu\n    ports:\n      - "8545:8545"\n      - "30303:30303"\nvolumes:\n  besu-data:\n  besu-config:\n'})}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-on-kubernetes",children:"Upgrade on Kubernetes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update your deployment manifest with a new image version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"spec:\n  containers:\n  - name: besu\n    image: hyperledger/besu:new-version\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Apply the update:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f besu-deployment.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example PVC configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: besu-data\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Ti\n"})}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-on-ansible",children:"Upgrade on Ansible"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.a,{href:"https://galaxy.ansible.com/ui/standalone/roles/consensys/hyperledger_besu/",children:"Ansible role on Galaxy"}),"\ndirectly or customize it to suit your needs."]}),"\n",(0,r.jsxs)(n.p,{children:["Upgrade your Besu node by running the play with the new version.\nFor more information, select ",(0,r.jsx)(n.strong,{children:"Documentation"})," on the ",(0,r.jsx)(n.a,{href:"https://galaxy.ansible.com/ui/standalone/roles/consensys/hyperledger_besu/",children:"Ansible Galaxy Besu page"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The playbook:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Stops Besu."}),"\n",(0,r.jsx)(n.li,{children:"Downloads the updated version."}),"\n",(0,r.jsx)(n.li,{children:"Applies any new configuration."}),"\n",(0,r.jsx)(n.li,{children:"Starts Besu."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verify-post-upgrade",children:"Verify post-upgrade"}),"\n",(0,r.jsx)(n.h3,{id:"rpc-methods",children:"RPC methods"}),"\n",(0,r.jsxs)(n.p,{children:["If you have ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:"JSON-RPC HTTP enabled"}),",\nyou can use the following commands to verify that you've successfully upgraded your Besu node."]}),"\n",(0,r.jsxs)(n.p,{children:["Call ",(0,r.jsx)(n.a,{href:"/public-networks/reference/api/#eth_syncing",children:(0,r.jsx)(n.code,{children:"eth_syncing"})})," to check the node synchronization status:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' http://127.0.0.1:8545 -H "Content-Type: application/json"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Call ",(0,r.jsx)(n.a,{href:"/public-networks/reference/api/#web3_clientversion",children:(0,r.jsx)(n.code,{children:"web3_clientVersion"})})," to check the current client version:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}\' http://127.0.0.1:8545 -H "Content-Type: application/json"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Call ",(0,r.jsx)(n.a,{href:"/public-networks/reference/api/#net_peercount",children:(0,r.jsx)(n.code,{children:"net_peerCount"})})," to verify peer connections:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' http://127.0.0.1:8545 -H "Content-Type: application/json"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"logs",children:"Logs"}),"\n",(0,r.jsx)(n.p,{children:"You can also check Besu's logs to verify the version and whether Besu is in sync.\nFor example, the startup logs look like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{"@timestamp":"2025-01-17T07:23:03,791","level":"INFO","thread":"main","class":"Besu","message":"Starting Besu","throwable":""}\n{"@timestamp":"2025-01-17T07:23:04,558","level":"INFO","thread":"main","class":"Besu","message":"Connecting to 0 static nodes.","throwable":""}\n{"@timestamp":"2025-01-17T07:23:04,643","level":"INFO","thread":"main","class":"Besu","message":"\n####################################################################################################\n#                                                                                                  #\n# Besu version 25.1.0                                                                #\n#   \n...                                                                                               #\n'})}),"\n",(0,r.jsx)(n.h3,{id:"metrics",children:"Metrics"}),"\n",(0,r.jsxs)(n.p,{children:["If you have ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-enabled",children:"metrics enabled"}),", you can verify the version by checking the\n",(0,r.jsx)(n.code,{children:"process_release"})," metric in ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/monitor/metrics",children:"Prometheus"}),", or on the command line:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -s localhost:9545/metrics | grep process_release\n"})}),"\n",(0,r.jsx)(n.p,{children:"For example, the response looks like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'process_release{version="besu/v25.10/linux-x86_64/openjdk-java-21"} 1.0\n'})}),"\n",(0,r.jsx)(n.h2,{id:"find-peers-on-restarting",children:"Find peers on restarting"}),"\n",(0,r.jsx)(n.p,{children:"Nodes store known peers in the peer table.\nThe peer table is not persisted to disk.\nWhen a node restarts, the node connects to the specified bootnodes and discovers other nodes through the peer discovery process.\nThe node continues collecting data from where it left off before the restart (assuming there was no data corruption in a failure scenario)."}),"\n",(0,r.jsx)(n.p,{children:"Before the node restarted, connected peers saved the node details in their peer tables.\nThese peers can reconnect to the restarted node.\nThe restarted node uses these peers and the bootnodes, to discover more peers.\nTo ensure that the restarted node successfully rejoins the network, ensure you specify at least one operational bootnode."}),"\n",(0,r.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,r.jsx)(n.h4,{id:"sync-not-progressing",children:"Sync not progressing"}),"\n",(0,r.jsx)(n.p,{children:"Verify that the node is properly connected to the bootnodes.\nCheck the node logs to ensure that the connections are being established correctly."}),"\n",(0,r.jsx)(n.h4,{id:"low-peer-count",children:"Low peer count"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that your network connection is stable and that the required ports for peer discovery and communication are open and correctly forwarded."}),"\n",(0,r.jsx)(n.h4,{id:"api-unavailable",children:"API unavailable"}),"\n",(0,r.jsx)(n.p,{children:"Check the configuration of your RPC endpoint to ensure it is set up correctly and is accessible.\nVerify that the API service is running and the correct ports are being used."}),"\n",(0,r.jsx)(n.h4,{id:"data-corruption",children:"Data corruption"}),"\n",(0,r.jsx)(n.p,{children:"If you encounter data corruption, restore the node data from a known good backup.\nEnsure regular backups are in place to avoid data loss."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"As a last resort, you can delete the database to resync the node.\nThis can solve corruption issues, but it might suffer significant downtime depending on the size of the network."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(96540);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);