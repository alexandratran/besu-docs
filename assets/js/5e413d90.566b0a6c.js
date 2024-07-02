"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[29602],{57315:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>h});var a=s(85893),i=s(11151),l=s(74866),r=s(85162);const c={title:"Private network options",sidebar_position:1,description:"Hyperledger Besu private networks CLI reference",tags:["private networks"]},o="Private network command line options",t={id:"private-networks/reference/cli/options",title:"Private network options",description:"Hyperledger Besu private networks CLI reference",source:"@site/versioned_docs/version-24.5.0/private-networks/reference/cli/options.md",sourceDirName:"private-networks/reference/cli",slug:"/private-networks/reference/cli/options",permalink:"/24.5.0/private-networks/reference/cli/options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.0/private-networks/reference/cli/options.md",tags:[{label:"private networks",permalink:"/24.5.0/tags/private-networks"}],version:"24.5.0",lastUpdatedAt:1719856645,formattedLastUpdatedAt:"Jul 1, 2024",sidebarPosition:1,frontMatter:{title:"Private network options",sidebar_position:1,description:"Hyperledger Besu private networks CLI reference",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Reference",permalink:"/24.5.0/private-networks/reference/"},next:{title:"Private network subcommands",permalink:"/24.5.0/private-networks/reference/cli/subcommands"}},d={},h=[{value:"Specify options",id:"specify-options",level:2},{value:"Options",id:"options",level:2},{value:"<code>permissions-accounts-config-file</code>",id:"permissions-accounts-config-file",level:3},{value:"<code>permissions-accounts-config-file-enabled</code>",id:"permissions-accounts-config-file-enabled",level:3},{value:"<code>permissions-accounts-contract-address</code>",id:"permissions-accounts-contract-address",level:3},{value:"<code>permissions-accounts-contract-enabled</code>",id:"permissions-accounts-contract-enabled",level:3},{value:"<code>permissions-nodes-config-file</code>",id:"permissions-nodes-config-file",level:3},{value:"<code>permissions-nodes-config-file-enabled</code>",id:"permissions-nodes-config-file-enabled",level:3},{value:"<code>permissions-nodes-contract-address</code>",id:"permissions-nodes-contract-address",level:3},{value:"<code>permissions-nodes-contract-enabled</code>",id:"permissions-nodes-contract-enabled",level:3},{value:"<code>permissions-nodes-contract-version</code>",id:"permissions-nodes-contract-version",level:3},{value:"<code>poa-block-txs-selection-max-time</code>",id:"poa-block-txs-selection-max-time",level:3},{value:"<code>privacy-enabled</code>",id:"privacy-enabled",level:3},{value:"<code>privacy-marker-transaction-signing-key-file</code>",id:"privacy-marker-transaction-signing-key-file",level:3},{value:"<code>privacy-multi-tenancy-enabled</code>",id:"privacy-multi-tenancy-enabled",level:3},{value:"<code>privacy-flexible-groups-enabled</code>",id:"privacy-flexible-groups-enabled",level:3},{value:"<code>privacy-public-key-file</code>",id:"privacy-public-key-file",level:3},{value:"<code>privacy-tls-enabled</code>",id:"privacy-tls-enabled",level:3},{value:"<code>privacy-tls-keystore-file</code>",id:"privacy-tls-keystore-file",level:3},{value:"<code>privacy-tls-keystore-password-file</code>",id:"privacy-tls-keystore-password-file",level:3},{value:"<code>privacy-tls-known-enclave-file</code>",id:"privacy-tls-known-enclave-file",level:3},{value:"<code>privacy-url</code>",id:"privacy-url",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"private-network-command-line-options",children:"Private network command line options"}),"\n",(0,a.jsx)(n.p,{children:"This reference describes the syntax of the Hyperledger Besu private network command line interface (CLI) options."}),"\n",(0,a.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,a.jsxs)(n.p,{children:["This reference contains options that apply to only private networks. For options that apply to both private and public networks, see the ",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options",children:"public network options reference"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"specify-options",children:"Specify options"}),"\n",(0,a.jsx)(n.p,{children:"You can specify Besu options:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"On the command line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND]\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"As an environment variable. For each command line option, the equivalent environment variable is:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Uppercase."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"_"})," replaces ",(0,a.jsx)(n.code,{children:"-"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Has a ",(0,a.jsx)(n.code,{children:"BESU_"})," prefix."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, set ",(0,a.jsx)(n.code,{children:"--miner-coinbase"})," using the ",(0,a.jsx)(n.code,{children:"BESU_MINER_COINBASE"})," environment variable."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In a ",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/how-to/use-configuration-file/",children:"configuration file"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If you specify an option in more than one place, the order of priority is command line, environment variable, configuration file."}),"\n",(0,a.jsxs)(n.p,{children:["If using Bash or Z shell, you can view option suggestions by entering ",(0,a.jsx)(n.code,{children:"--"})," and pressing the Tab key twice."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"besu --Tab+Tab\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Characters such as smart quotes and long (em) hyphens don't work in Besu command line options. Ensure quotes aren't automatically converted to smart quotes, or double hyphens combined into em hyphens."})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.h3,{id:"permissions-accounts-config-file",children:(0,a.jsx)(n.code,{children:"permissions-accounts-config-file"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file=<FILE>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file=/home/me/me_configFiles/myPermissionsFile\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONFIG_FILE=/home/me/me_configFiles/myPermissionsFile\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'permissions-accounts-config-file="/home/me/me_configFiles/myPermissionsFile"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/use-permissioning/local#permissions-configuration-file",children:"accounts permissions configuration file"}),". The default is the ",(0,a.jsx)(n.code,{children:"permissions_config.toml"})," file in the ",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#data-path",children:"data directory"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--permissions-accounts-config-file"})," and ",(0,a.jsx)(n.a,{href:"#permissions-nodes-config-file",children:(0,a.jsx)(n.code,{children:"--permissions-nodes-config-file"})})," can use the same file."]})}),"\n",(0,a.jsx)(n.h3,{id:"permissions-accounts-config-file-enabled",children:(0,a.jsx)(n.code,{children:"permissions-accounts-config-file-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file-enabled=true\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONFIG_FILE_ENABLED=true\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"permissions-accounts-config-file-enabled=true\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables file-based account level permissions. The default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"permissions-accounts-contract-address",children:(0,a.jsx)(n.code,{children:"permissions-accounts-contract-address"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-address=<ContractAddress>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-address=xyz\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONTRACT_ADDRESS=xyz\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'permissions-accounts-contract-address="xyz"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The contract address for ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/permissioning/onchain",children:"onchain account permissioning"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"permissions-accounts-contract-enabled",children:(0,a.jsx)(n.code,{children:"permissions-accounts-contract-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-enabled=true\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONTRACT_ENABLED=true\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"permissions-accounts-contract-enabled=true\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables contract-based ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/permissioning/onchain",children:"onchain account permissioning"}),". The default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"permissions-nodes-config-file",children:(0,a.jsx)(n.code,{children:"permissions-nodes-config-file"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file=<FILE>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file=/home/me/me_configFiles/myPermissionsFile\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONFIG_FILE=/home/me/me_configFiles/myPermissionsFile\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'permissions-nodes-config-file="/home/me/me_configFiles/myPermissionsFile"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/use-permissioning/local#permissions-configuration-file",children:"nodes permissions configuration file"}),". The default is the ",(0,a.jsx)(n.code,{children:"permissions_config.toml"})," file in the ",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#data-path",children:"data directory"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--permissions-nodes-config-file"})," and ",(0,a.jsx)(n.a,{href:"#permissions-accounts-config-file",children:(0,a.jsx)(n.code,{children:"--permissions-accounts-config-file"})})," can use the same file."]})}),"\n",(0,a.jsx)(n.h3,{id:"permissions-nodes-config-file-enabled",children:(0,a.jsx)(n.code,{children:"permissions-nodes-config-file-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file-enabled=true\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONFIG_FILE_ENABLED=true\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"permissions-nodes-config-file-enabled=true\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables file-based node level permissions. The default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"permissions-nodes-contract-address",children:(0,a.jsx)(n.code,{children:"permissions-nodes-contract-address"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-address=<ContractAddress>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-address=xyz\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONTRACT_ADDRESS=xyz\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'permissions-nodes-contract-address="xyz"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The contract address for ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/permissioning/onchain",children:"onchain node permissioning"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"permissions-nodes-contract-enabled",children:(0,a.jsx)(n.code,{children:"permissions-nodes-contract-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-enabled=true\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONTRACT_ENABLED=true\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"permissions-nodes-contract-enabled=true\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables contract-based ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/permissioning/onchain",children:"onchain node permissioning"}),". The default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"permissions-nodes-contract-version",children:(0,a.jsx)(n.code,{children:"permissions-nodes-contract-version"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-version=<ContractVersion>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-version=2\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONTRACT_VERSION=2\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"permissions-nodes-contract-version=2\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Version of the EEA ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version",children:"node permissioning interface"}),". The default is 1."]}),"\n",(0,a.jsx)(n.h3,{id:"poa-block-txs-selection-max-time",children:(0,a.jsx)(n.code,{children:"poa-block-txs-selection-max-time"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--poa-block-txs-selection-max-time=<INTEGER>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--poa-block-txs-selection-max-time=80\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_POA_BLOCK_TXS_SELECTION_MAX_TIME=80\n"})})}),(0,a.jsx)(r.Z,{value:"Example configuration file",label:"Example configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"poa-block-txs-selection-max-time=80\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The maximum time that can be spent selecting transactions to be included in a block,\nas a percentage of the fixed block time of the network.\nThe default is ",(0,a.jsx)(n.code,{children:"75"}),", or 75%."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This option only applies to proof-of-authority networks.\nFor proof-of-stake and proof-of-work networks, see\n",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#block-txs-selection-max-time",children:(0,a.jsx)(n.code,{children:"--block-txs-selection-max-time"})}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"privacy-enabled",children:(0,a.jsx)(n.code,{children:"privacy-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-enabled=false\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_ENABLED=false\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"privacy-enabled=false\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/privacy/",children:"private transactions"}),". The default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsxs)(n.p,{children:["Using private transactions with ",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/concepts/data-storage-formats",children:"pruning"})," or ",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#sync-mode",children:"fast sync"})," is not supported."]})}),"\n",(0,a.jsx)(n.h3,{id:"privacy-marker-transaction-signing-key-file",children:(0,a.jsx)(n.code,{children:"privacy-marker-transaction-signing-key-file"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-marker-transaction-signing-key-file=<FILE>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-marker-transaction-signing-key-file=/home/me/me_node/myPrivateKey\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_MARKER_TRANSACTION_SIGNING_KEY_FILE=/home/me/me_node/myPrivateKey\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'privacy-marker-transaction-signing-key-file="/home/me/me_node/myPrivateKey"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"<FILE>"})," is the name of the private key file used to ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/use-privacy/sign-pmts",children:"sign privacy marker transactions"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This can be the same file used by ",(0,a.jsx)(n.a,{href:"/24.5.0/public-networks/reference/cli/options#node-private-key-file",children:(0,a.jsx)(n.code,{children:"--node-private-key-file"})}),", or a different key file to identify who signed the privacy marker transaction."]})}),"\n",(0,a.jsx)(n.p,{children:"You must specify this option if you're using:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"a privacy network where you pay gas. Also, the associated account must contain adequate funds."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/permissioning/#account-permissioning",children:"account permissioning"})," and privacy. You must include the corresponding public key in the accounts allowlist."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If you do not specify this option (for example, in a free gas network), Besu signs each transaction with a different randomly generated key."}),"\n",(0,a.jsx)(n.h3,{id:"privacy-multi-tenancy-enabled",children:(0,a.jsx)(n.code,{children:"privacy-multi-tenancy-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-multi-tenancy-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-multi-tenancy-enabled=false\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_MULTI_TENANCY_ENABLED=false\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"privacy-multi-tenancy-enabled=false\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"})," for private transactions. The default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"privacy-flexible-groups-enabled",children:(0,a.jsx)(n.code,{children:"privacy-flexible-groups-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-flexible-groups-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-flexible-groups-enabled=true\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_FLEXIBLE_GROUPS_ENABLED=true\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"privacy-flexible-groups-enabled=true\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/privacy/flexible-privacy",children:"flexible privacy groups"}),". The default is ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Deprecated syntax for this option is ",(0,a.jsx)(n.code,{children:"--privacy-onchain-groups-enabled"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"privacy-public-key-file",children:(0,a.jsx)(n.code,{children:"privacy-public-key-file"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-public-key-file=<privacyPublicKeyFile>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-public-key-file=Tessera/nodeKey.pub\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_PUBLIC_KEY_FILE=Tessera/nodeKey.pub\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'privacy-public-key-file="Tessera/nodeKey.pub"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://docs.tessera.consensys.net/",children:"public key of the Tessera node"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsxs)(n.p,{children:["You cannot specify ",(0,a.jsx)(n.code,{children:"privacy-public-key-file"})," when ",(0,a.jsx)(n.a,{href:"#privacy-multi-tenancy-enabled",children:(0,a.jsx)(n.code,{children:"--privacy-multi-tenancy-enabled"})})," is ",(0,a.jsx)(n.code,{children:"true"})]})}),"\n",(0,a.jsx)(n.h3,{id:"privacy-tls-enabled",children:(0,a.jsx)(n.code,{children:"privacy-tls-enabled"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-enabled[=<true|false>]\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-enabled=false\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_ENABLED=false\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"privacy-tls-enabled=false\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Enables or disables ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/concepts/privacy/#private-transaction-manager",children:"TLS on communication with the private transaction manager"}),". The default is false."]}),"\n",(0,a.jsx)(n.h3,{id:"privacy-tls-keystore-file",children:(0,a.jsx)(n.code,{children:"privacy-tls-keystore-file"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-keystore-file=<FILE>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy--keystore-file=/home/me/me_node/key\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_KEYSTORE_FILE=/home/me/me_node/key\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'privacy-tls-keystore-file="/home/me/me_node/key"\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The keystore file (in PKCS #12 format) containing the private key and the certificate presented during authentication."}),"\n",(0,a.jsxs)(n.p,{children:["You must specify ",(0,a.jsx)(n.code,{children:"privacy-tls-keystore-file"})," if ",(0,a.jsx)(n.a,{href:"#privacy-tls-enabled",children:(0,a.jsx)(n.code,{children:"--privacy-tls-enabled"})})," is ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"privacy-tls-keystore-password-file",children:(0,a.jsx)(n.code,{children:"privacy-tls-keystore-password-file"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-keystore-password-file=<FILE>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-keystore-password-file=/home/me/me_node/password\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_KEYSTORE_PASSWORD_FILE=/home/me/me_node/password\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'privacy-tls-keystore-password-file="/home/me/me_node/password"\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The path to the file containing the password to decrypt the keystore."}),"\n",(0,a.jsx)(n.h3,{id:"privacy-tls-known-enclave-file",children:(0,a.jsx)(n.code,{children:"privacy-tls-known-enclave-file"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-known-enclave-file=<FILE>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-known-enclave-file=/home/me/me_node/knownEnclave\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_KNOWN_ENCLAVE_FILE=/home/me/me_node/knownEnclave\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'privacy-tls-known-enclave-file="/home/me/me_node/knownEnclave"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The path to the file containing the hostnames, ports, and SHA256 certificate fingerprints of the ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/how-to/configure/tls/client-and-server#create-the-known-servers-file",children:"authorized privacy enclave"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"privacy-url",children:(0,a.jsx)(n.code,{children:"privacy-url"})}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(r.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-url=<privacyUrl>\n"})})}),(0,a.jsx)(r.Z,{value:"Example",label:"Example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--privacy-url=http://127.0.0.1:8888\n"})})}),(0,a.jsx)(r.Z,{value:"Environment variable",label:"Environment variable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_URL=http://127.0.0.1:8888\n"})})}),(0,a.jsx)(r.Z,{value:"Configuration file",label:"Configuration file",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'privacy-url="http://127.0.0.1:8888"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The URL on which the ",(0,a.jsx)(n.a,{href:"/24.5.0/private-networks/tutorials/privacy/#3-create-tessera-configuration-files",children:"Tessera node"})," is running."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>r});s(67294);var a=s(36905);const i={tabItem:"tabItem_Ymn6"};var l=s(85893);function r(e){let{children:n,hidden:s,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>E});var a=s(67294),i=s(36905),l=s(12466),r=s(16550),c=s(20469),o=s(91980),t=s(67392),d=s(50012);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:i}}=e;return{value:n,label:s,attributes:a,default:i}}))}(s);return function(e){const n=(0,t.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const i=(0,r.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,l=u(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[t,h]=x({queryString:s,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Nk)(s);return[i,(0,a.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:i}),j=(()=>{const e=t??m;return p({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=s(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(85893);function b(e){let{className:n,block:s,selectedValue:a,selectValue:r,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:t}=(0,l.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),i=c[s].value;i!==a&&(t(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,i.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function E(e){const n=(0,f.Z)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var a=s(67294);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);