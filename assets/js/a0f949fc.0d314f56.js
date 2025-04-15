"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8587],{17321:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"public-networks/reference/cli/subcommands","title":"Subcommands","description":"Besu command line interface subcommands","source":"@site/docs/public-networks/reference/cli/subcommands.md","sourceDirName":"public-networks/reference/cli","slug":"/public-networks/reference/cli/subcommands","permalink":"/public-networks/reference/cli/subcommands","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/reference/cli/subcommands.md","tags":[{"inline":true,"label":"public networks","permalink":"/tags/public-networks"},{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744743967000,"sidebarPosition":2,"frontMatter":{"title":"Subcommands","description":"Besu command line interface subcommands","sidebar_position":2,"tags":["public networks","private networks"]},"sidebar":"publicDocSidebar","previous":{"title":"Options","permalink":"/public-networks/reference/cli/options"},"next":{"title":"Besu API","permalink":"/public-networks/reference/api/"}}');var r=l(74848),a=l(28453),i=l(65537),t=l(79329);const o={title:"Subcommands",description:"Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},c="Subcommands",d={},h=[{value:"<code>blocks</code>",id:"blocks",level:2},{value:"<code>import</code>",id:"import",level:3},{value:"<code>export</code>",id:"export",level:3},{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-log-bloom-cache</code>",id:"generate-log-bloom-cache",level:3},{value:"<code>password</code>",id:"password",level:2},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>public-key</code>",id:"public-key",level:2},{value:"<code>export</code>",id:"export-1",level:3},{value:"<code>export-address</code>",id:"export-address",level:3},{value:"<code>retesteth</code>",id:"retesteth",level:2},{value:"<code>storage</code>",id:"storage",level:2},{value:"<code>revert-metadata</code>",id:"revert-metadata",level:3},{value:"<code>revert-variables</code>",id:"revert-variables",level:3},{value:"<code>rocksdb usage</code>",id:"rocksdb-usage",level:3},{value:"<code>trie-log</code>",id:"trie-log",level:3},{value:"<code>count</code>",id:"count",level:4},{value:"<code>prune</code>",id:"prune",level:4},{value:"<code>export</code>",id:"export-2",level:4},{value:"<code>import</code>",id:"import-1",level:4},{value:"<code>validate-config</code>",id:"validate-config",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"subcommands",children:"Subcommands"})}),"\n",(0,r.jsx)(n.p,{children:"This reference describes the syntax of the Besu command line interface (CLI) subcommands."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This reference contains subcommands that apply to both public and private networks. For private-network-specific subcommands, see the ",(0,r.jsx)(n.a,{href:"/private-networks/reference/cli/subcommands",children:"private network subcommands reference"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"To start a Besu node using subcommands, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,r.jsx)(n.p,{children:"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu Tab+Tab\n"})}),"\n",(0,r.jsx)(n.h2,{id:"blocks",children:(0,r.jsx)(n.code,{children:"blocks"})}),"\n",(0,r.jsx)(n.p,{children:"Provides blocks related actions."}),"\n",(0,r.jsx)(n.h3,{id:"import",children:(0,r.jsx)(n.code,{children:"import"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu blocks import [--skip-pow-validation-enabled] [--start-block=<LONG>] [--end-block=<LONG>] --from=<block-file>\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu blocks import --skip-pow-validation-enabled --start-block=100 --end-block=300 --from=/home/me/me_project/mainnet-export1.blocks --from=/home/me/me_project/mainnet-export2.blocks\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Imports a block or range of blocks from the specified file into the blockchain database."}),"\n",(0,r.jsxs)(n.p,{children:["You can specify the starting index of the block range to import with ",(0,r.jsx)(n.code,{children:"--start-block"}),". If omitted, the default start block is 0 (the beginning of the chain)."]}),"\n",(0,r.jsxs)(n.p,{children:["You can specify the ending index (exclusive) of the block range to import with ",(0,r.jsx)(n.code,{children:"--end-block"}),". If omitted, all blocks after the start block are imported."]}),"\n",(0,r.jsxs)(n.p,{children:["You can specify multiple ",(0,r.jsx)(n.code,{children:"--from"})," arguments. This can be useful when blocks have been exported over time to multiple files. If multiple files are provided they are read in the order specified in the command."]}),"\n",(0,r.jsxs)(n.p,{children:["Including ",(0,r.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," skips validation of the ",(0,r.jsx)(n.code,{children:"mixHash"})," when importing blocks."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," when performing ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/hive",children:"Ethereum Foundation hive testing"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"export",children:(0,r.jsx)(n.code,{children:"export"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu blocks export [--start-block=<LONG>] [--end-block=<LONG>] --to=<block-file>\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --network=holesky --data-path=/home/data/ blocks export --start-block=100 --end-block=300 --to=/home/exportblock.bin\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Exports a block or range of blocks from storage to a file in RLP format."}),"\n",(0,r.jsxs)(n.p,{children:["If you omit ",(0,r.jsx)(n.code,{children:"--start-block"}),", the default start block is 0 (the beginning of the chain), and if you omit ",(0,r.jsx)(n.code,{children:"--end-block"}),", the default end block is the current chain head."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are not running the command against the default network (Mainnet), specify the ",(0,r.jsx)(n.code,{children:"--network"})," or ",(0,r.jsx)(n.code,{children:"--genesis-file"})," parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"operator",children:(0,r.jsx)(n.code,{children:"operator"})}),"\n",(0,r.jsx)(n.p,{children:"Provides operator actions."}),"\n",(0,r.jsx)(n.h3,{id:"generate-log-bloom-cache",children:(0,r.jsx)(n.code,{children:"generate-log-bloom-cache"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-log-bloom-cache [--start-block=<BLOCK_NUMBER>] [--end-block=<BLOCK_NUMBER>]\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --network=holesky --data-path=/project/holesky operator generate-log-bloom-cache --start-block=0 --end-block=100000\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Manually executing ",(0,r.jsx)(n.code,{children:"generate-log-bloom-cache"})," is not required unless you set the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#auto-log-bloom-caching-enabled",children:(0,r.jsx)(n.code,{children:"--auto-log-bloom-caching-enabled"})})," command line option to false."]})}),"\n",(0,r.jsx)(n.p,{children:"Generates cached log bloom indexes for blocks. APIs use the cached indexes for improved log query performance."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Each index file contains 100000 blocks. The last fragment of blocks less that 100000 are not indexed."})}),"\n",(0,r.jsxs)(n.p,{children:["To generate cached log bloom indexes while the node is running, use the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/api/#admin_generatelogbloomcache",children:(0,r.jsx)(n.code,{children:"admin_generateLogBloomCache"})})," API."]}),"\n",(0,r.jsx)(n.h2,{id:"password",children:(0,r.jsx)(n.code,{children:"password"})}),"\n",(0,r.jsx)(n.p,{children:"Provides password related actions."}),"\n",(0,r.jsx)(n.h3,{id:"hash",children:(0,r.jsx)(n.code,{children:"hash"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=<my-password>\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=myPassword123\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Generates the hash of a given password. Include the hash in the ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/authenticate#1-create-the-credentials-file",children:"credentials file"})," for JSON-RPC API ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/authenticate",children:"authentication"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"public-key",children:(0,r.jsx)(n.code,{children:"public-key"})}),"\n",(0,r.jsx)(n.p,{children:"Provides node public key related actions."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["To get the public key or address of a node, ensure you use the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," or ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#node-private-key-file",children:(0,r.jsx)(n.code,{children:"--node-private-key-file"})})," option with the ",(0,r.jsx)(n.code,{children:"public-key"})," command. Otherwise, a new ",(0,r.jsx)(n.a,{href:"/public-networks/concepts/node-keys",children:"node key"})," is silently generated when starting Besu."]})}),"\n",(0,r.jsx)(n.h3,{id:"export-1",children:(0,r.jsx)(n.code,{children:"export"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu public-key export [--node-private-key-file=<file>] [--to=<key-file>] [--ec-curve=<ec-curve-name>]\n"})})}),(0,r.jsx)(t.A,{value:"Example to standard output",label:"Example (to standard output)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})})}),(0,r.jsx)(t.A,{value:"Example to file",label:"Example (to file)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/not_precious_pub_key --ec-curve=secp256k1\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Outputs the node public key to standard output or to the file specified by ",(0,r.jsx)(n.code,{children:"--to=<key-file>"}),". You can output the public key associated with a specific private key file using the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#node-private-key-file",children:(0,r.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,r.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,r.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,r.jsx)(n.code,{children:"secp256k1"})," or ",(0,r.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"export-address",children:(0,r.jsx)(n.code,{children:"export-address"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu public-key export-address [--node-private-key-file=<file>] [--to=<address-file>] [--ec-curve=<ec-curve-name>]\n"})})}),(0,r.jsx)(t.A,{value:"Example to standard output",label:"Example (to standard output)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})})}),(0,r.jsx)(t.A,{value:"Example to file",label:"Example (to file)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/me_node_address --ec-curve=secp256k1\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Outputs the node address to standard output or to the file specified by ",(0,r.jsx)(n.code,{children:"--to=<address-file>"}),". You can output the address associated with a specific private key file using the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#node-private-key-file",children:(0,r.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,r.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,r.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,r.jsx)(n.code,{children:"secp256k1"})," or ",(0,r.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"retesteth",children:(0,r.jsx)(n.code,{children:"retesteth"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu retesteth [--data-path=<PATH>] [--rpc-http-host=<HOST>] [--rpc-http-port=<PORT>] [-l=<LOG VERBOSITY LEVEL>] [--host-allowlist=<hostname>[,<hostname>\u2026]\u2026 or * or all]\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu retesteth --data-path=/home/me/me_node --rpc-http-port=8590 --host-allowlist=*\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Runs a Retesteth-compatible server. ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/retesteth/wiki",children:"Retesteth"})," is a developer tool that can generate and run consensus tests against any Ethereum client running such a server."]}),"\n",(0,r.jsx)(n.p,{children:"The command accepts the following command line options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-host",children:(0,r.jsx)(n.code,{children:"--rpc-http-host"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#logging",children:(0,r.jsx)(n.code,{children:"--logging"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"storage",children:(0,r.jsx)(n.code,{children:"storage"})}),"\n",(0,r.jsx)(n.p,{children:"Provides storage related actions."}),"\n",(0,r.jsx)(n.h3,{id:"revert-metadata",children:(0,r.jsx)(n.code,{children:"revert-metadata"})}),"\n",(0,r.jsx)(i.A,{children:(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu storage revert-metadata v2-to-v1\n"})})})}),"\n",(0,r.jsxs)(n.p,{children:["Reverts the modifications made by the ",(0,r.jsx)(n.a,{href:"https://github.com/hyperledger/besu/pull/6555",children:"database metadata refactor"}),".\nIf you need to downgrade Besu, run this subcommand before installing the previous binaries."]}),"\n",(0,r.jsx)(n.h3,{id:"revert-variables",children:(0,r.jsx)(n.code,{children:"revert-variables"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file <PATH-TO-CONFIG-FILE> storage revert-variables\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml storage revert-variables\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Reverts the modifications made by the ",(0,r.jsx)(n.a,{href:"https://github.com/hyperledger/besu/pull/5471",children:"variables storage feature"}),".\nIf you need to downgrade Besu, first run this subcommand specifying the path to\nthe ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/configure-besu/",children:"configuration file"})," normally used to\nstart Besu."]}),"\n",(0,r.jsx)(n.h3,{id:"rocksdb-usage",children:(0,r.jsx)(n.code,{children:"rocksdb usage"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file <PATH-TO-CONFIG-FILE> storage rocksdb usage\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml storage rocksdb usage\n"})})}),(0,r.jsx)(t.A,{value:"Example output",label:"Example output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"|--------------------------------|-----------------|-------------|-----------------|------------------|\n| Column Family                  | Keys            | Total Size  | SST Files Size  | Blob Files Size  |\n|--------------------------------|-----------------|-------------|-----------------|------------------|\n| BLOCKCHAIN                     | 2355141414      | 933 GiB     | 166 GiB         | 767 GiB          |\n| VARIABLES                      | 26              | 240 KiB     | 240 KiB         | 0 B              |\n| ACCOUNT_INFO_STATE             | 9634454         | 496 MiB     | 496 MiB         | 0 B              |\n| ACCOUNT_STORAGE_STORAGE        | 24041432        | 1 GiB       | 1 GiB           | 0 B              |\n| CODE_STORAGE                   | 37703864        | 12 GiB      | 12 GiB          | 0 B              |\n| TRIE_BRANCH_STORAGE            | 1885032116      | 138 GiB     | 138 GiB         | 0 B              |\n| TRIE_LOG_STORAGE               | 267301          | 17 GiB      | 17 GiB          | 0 B              |\n|--------------------------------|-----------------|-------------|-----------------|------------------|\n| ESTIMATED TOTAL                | 4311820607      | 1104 GiB    | 337 GiB         | 767 GiB          |\n|--------------------------------|-----------------|-------------|-----------------|------------------|\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Displays the disk space used by the RocksDB key-value database, categorized into column families."}),"\n",(0,r.jsx)(n.h3,{id:"trie-log",children:(0,r.jsx)(n.code,{children:"trie-log"})}),"\n",(0,r.jsx)(n.p,{children:"Provides actions related to managing, recording, and logging changes for the Bonsai Trie data."}),"\n",(0,r.jsx)(n.h4,{id:"count",children:(0,r.jsx)(n.code,{children:"count"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file <PATH-TO-CONFIG-FILE> storage trie-log count\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml storage trie-log count\n"})})}),(0,r.jsx)(t.A,{value:"Example output",label:"Example output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"trieLog count: 742311\n - canonical count: 681039\n - fork count: 217\n - orphaned count: 61055\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Displays the number of trie logs in the database.\nThis is the number of keys for the ",(0,r.jsx)(n.code,{children:"TRIE_LOG_STORAGE"})," ",(0,r.jsx)(n.a,{href:"#rocksdb-usage",children:"column family in RocksDB"}),".\nThe following are specified in the ",(0,r.jsx)(n.code,{children:"trieLog count"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"canonical count"})," represents the finalized blockchain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fork count"})," represents non-finalized branches of the blockchain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"orphaned count"})," represents trie logs not in the blockchain, which can occur  during block creation."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"prune",children:(0,r.jsx)(n.code,{children:"prune"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file <PATH-TO-CONFIG-FILE> storage trie-log prune\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml storage trie-log prune\n"})})}),(0,r.jsx)(t.A,{value:"Example setting retention limit",label:"Example setting retention limit",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml --bonsai-historical-block-limit=1024 storage trie-log prune\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Removes all trie log layers below the specified retention limit, including orphaned trie logs.\nYou can configure the retention limit using ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#bonsai-historical-block-limit",children:(0,r.jsx)(n.code,{children:"--bonsai-historical-block-limit"})}),".\nThe retention limit should match the configuration used with ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#bonsai-limit-trie-logs-enabled",children:(0,r.jsx)(n.code,{children:"--bonsai-limit-trie-logs-enabled"})}),".\nThe default limit is ",(0,r.jsx)(n.code,{children:"512"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"export-2",children:(0,r.jsx)(n.code,{children:"export"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file <PATH-TO-CONFIG-FILE> storage trie-log export [--trie-log-block-hash=<list>] [--trie-log-file-path=<file>]\n"})})}),(0,r.jsxs)(t.A,{value:"Example exporting single trie log",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml storage trie-log export --trie-log-block-hash=0x0dcfa528de7d12df63673d0ebbd103dbf3a9464fae7eeb89e0934678cd05d64b\n"})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This example exports the trie log corresponding to a particular block hash into a file in the default location, ",(0,r.jsx)(n.code,{children:"<data-dir>/trie-logs.bin"}),"."]})})]}),(0,r.jsxs)(t.A,{value:"Example exporting list",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml storage trie-log export --trie-log-file-path=/tmp/list_of_trielogs.bin --trie-log-block-hash=0x0dcfa528de7d12df63673d0ebbd103dbf3a9464fae7eeb89e0934678cd05d64b,0xe8c3e77a6eaf6c87552aee07b86ecf4aacba43650b1d6aac32a44fa3ca97780d,0x86df7008b32fee67baac103846931c58454fc1b391e7d826c4886ba8580ba169\n"})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This example exports trie logs corresponding to a list of block hashes into a specific file location."})})]})]}),"\n",(0,r.jsx)(n.p,{children:"Exports the trie logs of blocks specified by hash to a binary file."}),"\n",(0,r.jsxs)(n.p,{children:["By default, Bonsai trie logs are regularly pruned, so the trie log for a given block might not be present if it has been pruned.\nIf you need to manually import or export trie logs, we recommend temporarily disabling trie log pruning by setting\n",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#bonsai-limit-trie-logs-enabled",children:(0,r.jsx)(n.code,{children:"--bonsai-limit-trie-logs-enabled"})})," to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"import-1",children:(0,r.jsx)(n.code,{children:"import"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file <PATH-TO-CONFIG-FILE> storage trie-log import [--trie-log-file-path=<file>]\n"})})}),(0,r.jsx)(t.A,{value:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --config-file config.toml storage trie-log import --trie-log-file-path=/tmp/list_of_trielogs.bin \n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Imports trie logs from a binary trie log export file."}),"\n",(0,r.jsxs)(n.p,{children:["By default, Bonsai trie logs are regularly pruned.\nIf pruning is enabled, Besu might subsequently prune the imported trie logs.\nIf you need to manually import or export trie logs, we recommend temporarily disabling trie log pruning by setting\n",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#bonsai-limit-trie-logs-enabled",children:(0,r.jsx)(n.code,{children:"--bonsai-limit-trie-logs-enabled"})})," to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"validate-config",children:(0,r.jsx)(n.code,{children:"validate-config"})}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(t.A,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file <PATH-TO-CONFIG-FILE>\n"})})}),(0,r.jsx)(t.A,{value:"Example",label:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file config.toml\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Performs basic syntax validation of the specified ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/configure-besu/",children:"configuration file"}),". Checks TOML syntax (for example, valid format and unmatched quotes) and flags unknown options. Doesn't check data types, and doesn't check dependencies between options (this is done at Besu startup)."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>t});var s=l(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}},65537:(e,n,l)=>{l.d(n,{A:()=>y});var s=l(96540),r=l(18215),a=l(65627),i=l(56347),t=l(50372),o=l(30604),c=l(11861),d=l(78749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:s,default:r}}=e;return{value:n,label:l,attributes:s,default:r}}))}(l);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:l}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,a=u(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=l.find((e=>e.default))??l[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,h]=x({queryString:l,groupId:r}),[b,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(l);return[r,(0,s.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:r}),f=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,t.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=l(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(74848);function j(e){let{className:n,block:l,selectedValue:s,selectValue:i,tabValues:t}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,l=o.indexOf(n),r=t[l].value;r!==s&&(c(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;n=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;n=o[l]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:t.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:a}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,g.jsx)(k,{...e,children:h(e.children)},String(n))}},79329:(e,n,l)=>{l.d(n,{A:()=>i});l(96540);var s=l(18215);const r={tabItem:"tabItem_Ymn6"};var a=l(74848);function i(e){let{children:n,hidden:l,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:l,children:n})}}}]);