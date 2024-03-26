"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5323],{14270:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=i(85893),t=i(11151);const s={title:"Use a configuration file",sidebar_position:3,description:"Specify options in the Besu configuration file.",tags:["public networks","private networks"]},r="Use a configuration file",c={id:"public-networks/how-to/use-configuration-file/index",title:"Use a configuration file",description:"Specify options in the Besu configuration file.",source:"@site/versioned_docs/version-24.3.0/public-networks/how-to/use-configuration-file/index.md",sourceDirName:"public-networks/how-to/use-configuration-file",slug:"/public-networks/how-to/use-configuration-file/",permalink:"/public-networks/how-to/use-configuration-file/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/public-networks/how-to/use-configuration-file/index.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1711474639,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:3,frontMatter:{title:"Use a configuration file",sidebar_position:3,description:"Specify options in the Besu configuration file.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use the Engine API",permalink:"/public-networks/how-to/use-engine-api"},next:{title:"Use a profile",permalink:"/public-networks/how-to/use-configuration-file/profile"}},a={},l=[{value:"Configuration order of precedence",id:"configuration-order-of-precedence",level:2},{value:"TOML specification",id:"toml-specification",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"use-a-configuration-file",children:"Use a configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["You can specify command line options in a TOML configuration file.\nSave the configuration file and reuse it across node startups.\nSpecify the configuration file using the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#config-file",children:(0,o.jsx)(n.code,{children:"--config-file"})})," CLI option."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also ",(0,o.jsx)(n.a,{href:"/public-networks/how-to/use-configuration-file/profile",children:"use a pre-configured profile"})," for some common use cases."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The configuration file is used for node-level settings. You can specify network-wide settings in the ",(0,o.jsx)(n.a,{href:"/public-networks/concepts/genesis-file",children:"genesis file"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"configuration-order-of-precedence",children:"Configuration order of precedence"}),"\n",(0,o.jsx)(n.p,{children:"For options specified in multiple places, the order of precedence is as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Command line"}),"\n",(0,o.jsx)(n.li,{children:"Environment variable"}),"\n",(0,o.jsxs)(n.li,{children:["Configuration file specified by ",(0,o.jsx)(n.code,{children:"--config-file"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/how-to/use-configuration-file/profile",children:"Pre-configured profile"})," specified by ",(0,o.jsx)(n.code,{children:"--profile"})]}),"\n",(0,o.jsx)(n.li,{children:"Default values (used if no other configuration source is available)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if you specify a ",(0,o.jsx)(n.code,{children:"config.toml"})," configuration file and ",(0,o.jsx)(n.code,{children:"staker"})," profile, and an option\nis not found in the environment variables, Besu looks for it in ",(0,o.jsx)(n.code,{children:"config.toml"}),".\nIf the option is not found in ",(0,o.jsx)(n.code,{children:"config.toml"}),", Besu looks for it in ",(0,o.jsx)(n.code,{children:"staker.toml"}),".\nIf the option is not found in ",(0,o.jsx)(n.code,{children:"staker.toml"}),", Besu uses the default value for that option."]}),"\n",(0,o.jsx)(n.h2,{id:"toml-specification",children:"TOML specification"}),"\n",(0,o.jsxs)(n.p,{children:["The configuration file must be a valid TOML file composed of key/value pairs. Each key is the same as the corresponding command line option name without the leading dashes (",(0,o.jsx)(n.code,{children:"--"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"Values must conform to TOML specifications for string, numbers, arrays, and booleans. Specific differences between the command line and the TOML file format are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Comma-separated lists on the command line are string arrays in the TOML file."}),"\n",(0,o.jsxs)(n.li,{children:["Enclose file paths, hexadecimal numbers, URLs, and <host",":port","> values in quotes."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Table headings are ignored in TOML files. If you specify a valid Besu option under a table heading in the configuration file, Besu ignores the table heading and reads the option in the same way it does for options not under table headings."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options",children:"command line reference"})," includes configuration file examples for each option."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",metastring:'title="Sample TOML configuration file"',children:'# Valid TOML config file\ndata-path="~/besudata" # Path\n\n# Network\nbootnodes=["enode://001@123:4567", "enode://002@123:4567", "enode://003@123:4567"]\n\np2p-host="1.2.3.4"\np2p-port=1234\nmax-peers=42\n\nrpc-http-host="5.6.7.8"\nrpc-http-port=5678\n\nrpc-ws-host="9.10.11.12"\nrpc-ws-port=9101\n\n# Chain\ngenesis-file="~/genesis.json" # Path to the custom genesis file\n\n# Mining\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Starting Besu with a configuration file"',children:"besu --config-file=/home/me/me_node/config.toml\n"})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var o=i(67294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);