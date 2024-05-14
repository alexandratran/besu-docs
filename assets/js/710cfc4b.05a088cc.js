"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[64650],{7447:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=o(85893),a=o(11151);o(74866),o(85162);const r={title:"Reduce storage for Bonsai Tries",sidebar_position:12,description:"Enable this feature to reduce the size of your database when using Bonsai Tries",tags:["public networks"]},i=void 0,s={id:"public-networks/how-to/bonsai-limit-trie-logs",title:"Reduce storage for Bonsai Tries",description:"Enable this feature to reduce the size of your database when using Bonsai Tries",source:"@site/versioned_docs/version-24.5.0/public-networks/how-to/bonsai-limit-trie-logs.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/bonsai-limit-trie-logs",permalink:"/public-networks/how-to/bonsai-limit-trie-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.0/public-networks/how-to/bonsai-limit-trie-logs.md",tags:[{label:"public networks",permalink:"/tags/public-networks"}],version:"24.5.0",lastUpdatedAt:1715720690,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:12,frontMatter:{title:"Reduce storage for Bonsai Tries",sidebar_position:12,description:"Enable this feature to reduce the size of your database when using Bonsai Tries",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Upgrade Besu",permalink:"/public-networks/how-to/upgrade-node"},next:{title:"Use EVM tool",permalink:"/public-networks/how-to/troubleshoot/evm-tool"}},l={},d=[{value:"Limit and prune trie logs",id:"limit-and-prune-trie-logs",level:2},{value:"Prune outdated trie logs",id:"prune-outdated-trie-logs",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Prune command for Mainnet",id:"prune-command-for-mainnet",level:3},{value:"Subcommand not working",id:"subcommand-not-working",level:3},{value:"Column handle not found for segment <code>TRIE_BRANCH_STORAGE</code>",id:"column-handle-not-found-for-segment-trie_branch_storage",level:3},{value:"Database not detected",id:"database-not-detected",level:3},{value:"Cannot store generated private key",id:"cannot-store-generated-private-key",level:3},{value:"Valid keypair not provided",id:"valid-keypair-not-provided",level:3},{value:"Column handle not found for segment <code>WORLD_STATE</code>",id:"column-handle-not-found-for-segment-world_state",level:3},{value:"Resource temporarily unavailable",id:"resource-temporarily-unavailable",level:3},{value:"Unable to change the sync mode",id:"unable-to-change-the-sync-mode",level:3},{value:"Cannot run trie log prune",id:"cannot-run-trie-log-prune",level:3},{value:"Block does not match stored chain data",id:"block-does-not-match-stored-chain-data",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To decrease the database size when using the ",(0,t.jsx)(n.a,{href:"../concepts/data-storage-formats#bonsai-tries",children:"Bonsai Trie"})," data storage format, enable the early access feature ",(0,t.jsx)(n.code,{children:"--Xbonsai-limit-trie-logs-enabled"}),".\nWhen enabled, this feature can reduce database growth by more than 3 GB each week on Mainnet."]}),"\n",(0,t.jsx)(n.h2,{id:"limit-and-prune-trie-logs",children:"Limit and prune trie logs"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"The following commands are examples. Before executing these example commands on your node, modify them to apply to your node's configuration."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.code,{children:"--Xbonsai-limit-trie-logs-enabled"})," option to the ",(0,t.jsx)(n.a,{href:"use-configuration-file",children:"Besu configuration file"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you are using a ",(0,t.jsx)(n.code,{children:"systemd"})," service file, as recommended by ",(0,t.jsx)(n.a,{href:"https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-i-installation/step-3-installing-execution-client/besu",children:"CoinCashew"}),"\nand ",(0,t.jsx)(n.a,{href:"https://someresat.medium.com/guide-to-staking-on-ethereum-ubuntu-teku-f09ecd9ef2ee",children:"Somer Esat"}),", ensure you execute ",(0,t.jsx)(n.code,{children:"sudo systemctl daemon-reload"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop Besu."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Run the Besu trie log prune command. Specify the Bonsai Trie data storage format and the data directory for your Besu database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --data-storage-format=BONSAI --data-path=/var/lib/besu --sync-mode=X_SNAP storage x-trie-log prune\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start Besu."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Look for ",(0,t.jsx)(n.code,{children:"Limit trie logs enabled: retention: 512; prune window: 30000"})," in your Besu configuration printout at startup."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"prune-outdated-trie-logs",children:"Prune outdated trie logs"}),"\n",(0,t.jsxs)(n.p,{children:["When you start Besu with ",(0,t.jsx)(n.code,{children:"--Xbonsai-limit-trie-logs-enabled"}),", it continuously prunes the unnecessary trie log data, removing it one block at a time.\nThis process begins after an initial reduction in the database size during startup."]}),"\n",(0,t.jsxs)(n.p,{children:["Enabling ",(0,t.jsx)(n.code,{children:"--Xbonsai-limit-trie-logs-enabled"})," on a long-running node does not immediately clear your backlog of trie logs in the same way resyncing does.\nInstead of resyncing, you can run an offline command to immediately prune old trie logs.\nTo run the offline command, you must shut down Besu for a minimal period.\nIf the ",(0,t.jsx)(n.code,{children:"--Xbonsai-limit-trie-logs-enabled"})," option is enabled, you do not need to run the offline command again after initially running it."]}),"\n",(0,t.jsxs)(n.p,{children:["For minimal downtime, we recommend running the offline command before restarting Besu with ",(0,t.jsx)(n.code,{children:"--Xbonsai-limit-trie-logs-enabled"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are following the guides by ",(0,t.jsx)(n.a,{href:"https://someresat.medium.com/guide-to-staking-on-ethereum-ubuntu-teku-f09ecd9ef2ee",children:"Somer Esat"})," or ",(0,t.jsx)(n.a,{href:"https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-i-installation/step-3-installing-execution-client/besu",children:"CoinCashew"}),", you have set the following options in your ",(0,t.jsx)(n.code,{children:"besu.service"})," or ",(0,t.jsx)(n.code,{children:"execution.service"})," systemd file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'...\nExecStart=/usr/local/bin/besu/bin/besu \\\n...\n  --sync-mode=SNAP \\\n  --data-path="/var/lib/besu" \\\n  --data-storage-format=BONSAI \\\n...\n'})}),"\n",(0,t.jsx)(n.p,{children:"To prune trie logs, the command should look similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo /usr/local/bin/besu/bin/besu --data-storage-format=BONSAI --data-path=/var/lib/besu --sync-mode=SNAP storage x-trie-log prune\n"})}),"\n",(0,t.jsx)(n.p,{children:"The logs should look similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2024-02-02 05:45:41.162+00:00 | main | INFO  | KeyPairUtil | Attempting to load public key from /data/besu/key\n ...\n2024-02-02 05:45:43.433+00:00 | main | INFO  | TrieLogSubCommand | Estimating trie logs size before pruning...\n2024-02-02 05:45:43.837+00:00 | main | INFO  | TrieLogSubCommand | Estimated trie logs size before pruning: 9 GiB\n2024-02-02 05:46:09.863+00:00 | main | INFO  | TrieLogHelper | Starting pruning: retain 512 trie logs, processing in 1 batches...\n2024-02-02 05:46:09.918+00:00 | main | INFO  | TrieLogHelper | Saving trie logs to retain in file /data/besu/database/trieLogsToRetain-1 (batch 1)...\n2024-02-02 05:46:09.926+00:00 | main | INFO  | TrieLogHelper | Obtaining trielogs from db, this may take a few minutes...\n2024-02-02 05:46:10.100+00:00 | main | INFO  | TrieLogHelper | Clear trie logs...\n2024-02-02 05:46:10.155+00:00 | main | INFO  | TrieLogHelper | Restoring trie logs retained from batch 1...\n2024-02-02 05:46:10.222+00:00 | main | INFO  | TrieLogHelper | Key(0): 0xcd50706da7f6f2db7f9d54f3589122760900d9ab2508c20a4ca40b496d930368\n... \n2024-02-02 05:46:10.336+00:00 | main | INFO  | TrieLogHelper | Key(511): 0x238f9649b59616430ad7e43b8f3cf65bc97cac4aa54a3eddf3ad6ee666ce733e\n2024-02-02 05:46:10.441+00:00 | main | INFO  | TrieLogHelper | Deleting files...\n2024-02-02 05:46:10.446+00:00 | main | INFO  | TrieLogSubCommand | Finished pruning. Re-estimating trie logs size...\n2024-02-02 05:46:11.023+00:00 | main | INFO  | TrieLogSubCommand | Estimated trie logs size after pruning: 0 B (0 B estimate is normal when using default settings)\n2024-02-02 05:46:11.023+00:00 | main | INFO  | TrieLogSubCommand | Prune ran successfully. We estimate you freed up 9 GiB!\nPrune ran successfully. We estimate you freed up 9 GiB!\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you are using a TOML configuration file, you can run a command similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --config-file=besu-config.toml storage x-trie-log prune\n"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,t.jsx)(n.p,{children:"Troubleshoot common errors that can occur when using the trie log prune command to reduce your database size for Bonsai Tries.\nTo minimize errors, ensure your command specifies the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-storage-format",children:(0,t.jsx)(n.code,{children:"--data-storage-format"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,t.jsx)(n.code,{children:"--data-path"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode"})})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"prune-command-for-mainnet",children:"Prune command for Mainnet"}),"\n",(0,t.jsx)(n.p,{children:"The prune command should look similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --data-path=/var/lib/besu --data-storage-format=BONSAI --sync-mode=SNAP storage x-trie-log prune\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ensure you stop Besu before running the command."}),"\n",(0,t.jsx)(n.h3,{id:"subcommand-not-working",children:"Subcommand not working"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.IllegalArgumentException: Subcommand only works with data-storage-format=BONSAI"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"--data-storage-format=BONSAI"})," may be missing.\nTo resolve, add the storage format.\nThe command should look similar to the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --data-storage-format=BONSAI --data-path=/var/lib/besu --sync-mode=SNAP storage x-trie-log prune\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"column-handle-not-found-for-segment-trie_branch_storage",children:["Column handle not found for segment ",(0,t.jsx)(n.code,{children:"TRIE_BRANCH_STORAGE"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.RuntimeException: Column handle not found for segment TRIE_BRANCH_STORAGE"})}),"\n",(0,t.jsxs)(n.p,{children:["Ensure you specify ",(0,t.jsx)(n.code,{children:"--data-path"}),".\nYour command should look similar to the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --data-path=/var/lib/besu --data-storage-format=BONSAI --sync-mode=SNAP storage x-trie-log prune\n"})}),"\n",(0,t.jsx)(n.h3,{id:"database-not-detected",children:"Database not detected"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.IllegalArgumentException: Trying to retain more trie logs than chain length (0), skipping pruning"})}),"\n",(0,t.jsxs)(n.p,{children:["Ensure you specify the correct ",(0,t.jsx)(n.code,{children:"--data-path"})," for your node.\nYour command should look similar to the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --data-path=/var/lib/besu --data-storage-format=BONSAI --sync-mode=SNAP storage x-trie-log prune\n"})}),"\n",(0,t.jsx)(n.h3,{id:"cannot-store-generated-private-key",children:"Cannot store generated private key"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.IllegalArgumentException: Cannot store generated private key"})}),"\n",(0,t.jsxs)(n.p,{children:["Ensure you specify the correct ",(0,t.jsx)(n.code,{children:"--data-path"})," for your node.\nYour command should look similar to the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --data-path=/var/lib/besu --data-storage-format=BONSAI --sync-mode=SNAP storage x-trie-log prune\n"})}),"\n",(0,t.jsx)(n.h3,{id:"valid-keypair-not-provided",children:"Valid keypair not provided"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.IllegalArgumentException: Supplied file does not contain valid keyPair pair."})}),"\n",(0,t.jsxs)(n.p,{children:["Check your file permissions and try running a ",(0,t.jsx)(n.code,{children:"sudo"})," command to resolve the issue:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/bin/besu/bin/besu --data-storage-format=BONSAI --data-path=/var/lib/besu storage --sync-mode=SNAP x-trie-log prune\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"column-handle-not-found-for-segment-world_state",children:["Column handle not found for segment ",(0,t.jsx)(n.code,{children:"WORLD_STATE"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.RuntimeException: Column handle not found for segment WORLD_STATE"})}),"\n",(0,t.jsxs)(n.p,{children:["Ensure you are using ",(0,t.jsx)(n.code,{children:"--data-storage-format=BONSAI"})," instead of ",(0,t.jsx)(n.code,{children:"--data-storage-format=FOREST"})," on an existing Bonsai database."]}),"\n",(0,t.jsx)(n.h3,{id:"resource-temporarily-unavailable",children:"Resource temporarily unavailable"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"org.hyperledger.besu.plugin.services.exception.StorageException: org.rocksdb.RocksDBException: While lock file: /data/besu/database/LOCK: Resource temporarily unavailable"})}),"\n",(0,t.jsx)(n.p,{children:"Check if Besu is already running.\nYou must shut down the Besu client before running the subcommand."}),"\n",(0,t.jsx)(n.h3,{id:"unable-to-change-the-sync-mode",children:"Unable to change the sync mode"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.IllegalStateException: Unable to change the sync mode when snap sync is incomplete, please restart with snap sync mode"})}),"\n",(0,t.jsxs)(n.p,{children:["Check that you have specified ",(0,t.jsx)(n.code,{children:"--sync-mode"}),".\nThe default is ",(0,t.jsx)(n.code,{children:"--sync-mode=FAST"}),".\nMost Mainnet users use ",(0,t.jsx)(n.code,{children:"X_SNAP"})," or ",(0,t.jsx)(n.code,{children:"X_CHECKPOINT"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"cannot-run-trie-log-prune",children:"Cannot run trie log prune"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java.lang.RuntimeException: No finalized block present, can't safely run trie log prune"})}),"\n",(0,t.jsx)(n.p,{children:"This message may appear if your node is relatively new or recently resynced.\nTo resolve this error, ensure that your node is fully synced and correctly configured to recognize finalized blocks."}),"\n",(0,t.jsx)(n.h3,{id:"block-does-not-match-stored-chain-data",children:"Block does not match stored chain data"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"org.hyperledger.besu.util.InvalidConfigurationException: Supplied genesis block does not match chain data stored in /data/besu."})}),"\n",(0,t.jsx)(n.p,{children:"Check if you are running the command for a network other than Mainnet.\nTo specify a network, run a command that looks similar to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"`sudo /usr/local/bin/besu/bin/besu --network=holesky --sync-mode=SNAP --data-storage-format=BONSAI --data-path=/var/lib/besu storage x-trie-log prune`\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},85162:(e,n,o)=>{o.d(n,{Z:()=>i});o(67294);var t=o(36905);const a={tabItem:"tabItem_Ymn6"};var r=o(85893);function i(e){let{children:n,hidden:o,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:o,children:n})}},74866:(e,n,o)=>{o.d(n,{Z:()=>w});var t=o(67294),a=o(36905),r=o(12466),i=o(16550),s=o(20469),l=o(91980),d=o(67392),c=o(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:a}}=e;return{value:n,label:o,attributes:t,default:a}}))}(o);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function m(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:o=!1,groupId:a}=e,r=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,u]=p({queryString:o,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(o);return[a,(0,t.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:a}),f=(()=>{const e=d??g;return m({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=o(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=o(85893);function j(e){let{className:n,block:o,selectedValue:t,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,o=l.indexOf(n),a=s[o].value;a!==t&&(d(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},n),children:s.map((e=>{let{value:n,label:o,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,a.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function y(e){let{lazy:n,children:o,selectedValue:a}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>i});var t=o(67294);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);