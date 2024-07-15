"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[63071],{49504:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=r(85893),t=r(11151),a=r(74866),l=r(85162);const o={title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},i="Subcommands",c={id:"public-networks/reference/cli/subcommands",title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",source:"@site/versioned_docs/version-24.3.0/public-networks/reference/cli/subcommands.md",sourceDirName:"public-networks/reference/cli",slug:"/public-networks/reference/cli/subcommands",permalink:"/24.3.0/public-networks/reference/cli/subcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/public-networks/reference/cli/subcommands.md",tags:[{label:"public networks",permalink:"/24.3.0/tags/public-networks"},{label:"private networks",permalink:"/24.3.0/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1721053198,formattedLastUpdatedAt:"Jul 15, 2024",sidebarPosition:2,frontMatter:{title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Options",permalink:"/24.3.0/public-networks/reference/cli/options"},next:{title:"Besu API",permalink:"/24.3.0/public-networks/reference/api/"}},d={},h=[{value:"<code>blocks</code>",id:"blocks",level:2},{value:"<code>import</code>",id:"import",level:3},{value:"<code>export</code>",id:"export",level:3},{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-log-bloom-cache</code>",id:"generate-log-bloom-cache",level:3},{value:"<code>password</code>",id:"password",level:2},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>public-key</code>",id:"public-key",level:2},{value:"<code>export</code>",id:"export-1",level:3},{value:"<code>export-address</code>",id:"export-address",level:3},{value:"<code>retesteth</code>",id:"retesteth",level:2},{value:"<code>storage</code>",id:"storage",level:2},{value:"<code>revert-variables</code>",id:"revert-variables",level:3},{value:"<code>validate-config</code>",id:"validate-config",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"subcommands",children:"Subcommands"}),"\n",(0,s.jsx)(n.p,{children:"This reference describes the syntax of the Hyperledger Besu command line interface (CLI) subcommands."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This reference contains subcommands that apply to both public and private networks. For private-network-specific subcommands, see the ",(0,s.jsx)(n.a,{href:"/24.3.0/private-networks/reference/cli/subcommands",children:"private network subcommands reference"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"To start a Besu node using subcommands, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,s.jsx)(n.p,{children:"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu Tab+Tab\n"})}),"\n",(0,s.jsx)(n.h2,{id:"blocks",children:(0,s.jsx)(n.code,{children:"blocks"})}),"\n",(0,s.jsx)(n.p,{children:"Provides blocks related actions."}),"\n",(0,s.jsx)(n.h3,{id:"import",children:(0,s.jsx)(n.code,{children:"import"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu blocks import [--skip-pow-validation-enabled] [--start-block=<LONG>] [--end-block=<LONG>] --from=<block-file>\n"})})}),(0,s.jsx)(l.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu blocks import --skip-pow-validation-enabled --start-block=100 --end-block=300 --from=/home/me/me_project/mainnet-export1.blocks --from=/home/me/me_project/mainnet-export2.blocks\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Imports a block or range of blocks from the specified file into the blockchain database."}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the starting index of the block range to import with ",(0,s.jsx)(n.code,{children:"--start-block"}),". If omitted, the default start block is 0 (the beginning of the chain)."]}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the ending index (exclusive) of the block range to import with ",(0,s.jsx)(n.code,{children:"--end-block"}),". If omitted, all blocks after the start block are imported."]}),"\n",(0,s.jsxs)(n.p,{children:["You can specify multiple ",(0,s.jsx)(n.code,{children:"--from"})," arguments. This can be useful when blocks have been exported over time to multiple files. If multiple files are provided they are read in the order specified in the command."]}),"\n",(0,s.jsxs)(n.p,{children:["Including ",(0,s.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," skips validation of the ",(0,s.jsx)(n.code,{children:"mixHash"})," when importing blocks."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," when performing ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum/hive",children:"Ethereum Foundation hive testing"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"export",children:(0,s.jsx)(n.code,{children:"export"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu blocks export [--start-block=<LONG>] [--end-block=<LONG>] --to=<block-file>\n"})})}),(0,s.jsx)(l.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --network=goerli --data-path=/home/data/ blocks export --start-block=100 --end-block=300 --to=/home/exportblock.bin\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Exports a block or range of blocks from storage to a file in RLP format."}),"\n",(0,s.jsxs)(n.p,{children:["If you omit ",(0,s.jsx)(n.code,{children:"--start-block"}),", the default start block is 0 (the beginning of the chain), and if you omit ",(0,s.jsx)(n.code,{children:"--end-block"}),", the default end block is the current chain head."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are not running the command against the default network (Mainnet), specify the ",(0,s.jsx)(n.code,{children:"--network"})," or ",(0,s.jsx)(n.code,{children:"--genesis-file"})," parameter."]}),"\n",(0,s.jsx)(n.h2,{id:"operator",children:(0,s.jsx)(n.code,{children:"operator"})}),"\n",(0,s.jsx)(n.p,{children:"Provides operator actions."}),"\n",(0,s.jsx)(n.h3,{id:"generate-log-bloom-cache",children:(0,s.jsx)(n.code,{children:"generate-log-bloom-cache"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu operator generate-log-bloom-cache [--start-block=<BLOCK_NUMBER>] [--end-block=<BLOCK_NUMBER>]\n"})})}),(0,s.jsx)(l.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --network=goerli --data-path=/project/goerli operator generate-log-bloom-cache --start-block=0 --end-block=100000\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Manually executing ",(0,s.jsx)(n.code,{children:"generate-log-bloom-cache"})," is not required unless you set the ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#auto-log-bloom-caching-enabled",children:(0,s.jsx)(n.code,{children:"--auto-log-bloom-caching-enabled"})})," command line option to false."]})}),"\n",(0,s.jsx)(n.p,{children:"Generates cached log bloom indexes for blocks. APIs use the cached indexes for improved log query performance."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Each index file contains 100000 blocks. The last fragment of blocks less that 100000 are not indexed."})}),"\n",(0,s.jsxs)(n.p,{children:["To generate cached log bloom indexes while the node is running, use the ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/api/#admin_generatelogbloomcache",children:(0,s.jsx)(n.code,{children:"admin_generateLogBloomCache"})})," API."]}),"\n",(0,s.jsx)(n.h2,{id:"password",children:(0,s.jsx)(n.code,{children:"password"})}),"\n",(0,s.jsx)(n.p,{children:"Provides password related actions."}),"\n",(0,s.jsx)(n.h3,{id:"hash",children:(0,s.jsx)(n.code,{children:"hash"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=<my-password>\n"})})}),(0,s.jsx)(l.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=myPassword123\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Generates the hash of a given password. Include the hash in the ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/how-to/use-besu-api/authenticate#credentials-file",children:"credentials file"})," for JSON-RPC API ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/how-to/use-besu-api/authenticate",children:"authentication"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"public-key",children:(0,s.jsx)(n.code,{children:"public-key"})}),"\n",(0,s.jsx)(n.p,{children:"Provides node public key related actions."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["To get the public key or address of a node, ensure you use the ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})," or ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#node-private-key-file",children:(0,s.jsx)(n.code,{children:"--node-private-key-file"})})," option with the ",(0,s.jsx)(n.code,{children:"public-key"})," command. Otherwise, a new ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/concepts/node-keys",children:"node key"})," is silently generated when starting Besu."]})}),"\n",(0,s.jsx)(n.h3,{id:"export-1",children:(0,s.jsx)(n.code,{children:"export"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu public-key export [--node-private-key-file=<file>] [--to=<key-file>] [--ec-curve=<ec-curve-name>]\n"})})}),(0,s.jsx)(l.Z,{value:"Example to standard output",label:"Example (to standard output)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})})}),(0,s.jsx)(l.Z,{value:"Example to file",label:"Example (to file)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/not_precious_pub_key --ec-curve=secp256k1\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Outputs the node public key to standard output or to the file specified by ",(0,s.jsx)(n.code,{children:"--to=<key-file>"}),". You can output the public key associated with a specific private key file using the ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#node-private-key-file",children:(0,s.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,s.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,s.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,s.jsx)(n.code,{children:"secp256k1"})," or ",(0,s.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"export-address",children:(0,s.jsx)(n.code,{children:"export-address"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu public-key export-address [--node-private-key-file=<file>] [--to=<address-file>] [--ec-curve=<ec-curve-name>]\n"})})}),(0,s.jsx)(l.Z,{value:"Example to standard output",label:"Example (to standard output)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})})}),(0,s.jsx)(l.Z,{value:"Example to file",label:"Example (to file)",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/me_node_address --ec-curve=secp256k1\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Outputs the node address to standard output or to the file specified by ",(0,s.jsx)(n.code,{children:"--to=<address-file>"}),". You can output the address associated with a specific private key file using the ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#node-private-key-file",children:(0,s.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,s.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,s.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,s.jsx)(n.code,{children:"secp256k1"})," or ",(0,s.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"retesteth",children:(0,s.jsx)(n.code,{children:"retesteth"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu retesteth [--data-path=<PATH>] [--rpc-http-host=<HOST>] [--rpc-http-port=<PORT>] [-l=<LOG VERBOSITY LEVEL>] [--host-allowlist=<hostname>[,<hostname>\u2026]\u2026 or * or all]\n"})})}),(0,s.jsx)(l.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu retesteth --data-path=/home/me/me_node --rpc-http-port=8590 --host-allowlist=*\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Runs a Retesteth-compatible server. ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum/retesteth/wiki",children:"Retesteth"})," is a developer tool that can generate and run consensus tests against any Ethereum client running such a server."]}),"\n",(0,s.jsx)(n.p,{children:"The command accepts the following command line options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#host-allowlist",children:(0,s.jsx)(n.code,{children:"--host-allowlist"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-http-host",children:(0,s.jsx)(n.code,{children:"--rpc-http-host"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#rpc-http-port",children:(0,s.jsx)(n.code,{children:"--rpc-http-port"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/reference/cli/options#logging",children:(0,s.jsx)(n.code,{children:"--logging"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"storage",children:(0,s.jsx)(n.code,{children:"storage"})}),"\n",(0,s.jsx)(n.p,{children:"Provides storage related actions."}),"\n",(0,s.jsx)(n.h3,{id:"revert-variables",children:(0,s.jsx)(n.code,{children:"revert-variables"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu storage revert-variables --config-file <PATH-TO-CONFIG-FILE>\n"})})}),(0,s.jsx)(l.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu storage revert-variables --config-file ../besu-local-nodes/config/besu/besu1.conf\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Reverts the modifications made by the ",(0,s.jsx)(n.a,{href:"https://github.com/hyperledger/besu/pull/5471",children:"variables storage feature"}),".\nIf you need to downgrade Besu, first run this subcommand specifying the path to\nthe ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/how-to/use-configuration-file/",children:"configuration file"})," normally used to\nstart Besu."]}),"\n",(0,s.jsx)(n.h2,{id:"validate-config",children:(0,s.jsx)(n.code,{children:"validate-config"})}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file <PATH-TO-CONFIG-FILE>\n"})})}),(0,s.jsx)(l.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file ../besu-local-nodes/config/besu/besu1.conf\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Performs basic syntax validation of the specified ",(0,s.jsx)(n.a,{href:"/24.3.0/public-networks/how-to/use-configuration-file/",children:"configuration file"}),". Checks TOML syntax (for example, valid format and unmatched quotes) and flags unknown options. Doesn't check data types, and doesn't check dependencies between options (this is done at Besu startup)."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var s=r(36905);const t={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var s=r(67294),t=r(36905),a=r(12466),l=r(16550),o=r(20469),i=r(91980),c=r(67392),d=r(50012);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=u(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,h]=b({queryString:r,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Nk)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),f=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function g(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==s&&(c(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:h,onClick:d,...a,className:(0,t.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function k(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var s=r(67294);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);