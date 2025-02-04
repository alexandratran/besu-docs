"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5954],{27660:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=i(74848),n=i(28453);const t={title:"Use a profile",sidebar_position:1,tags:["public networks","private networks"]},s="Use a profile",l={id:"public-networks/how-to/configure-besu/profile",title:"Use a profile",description:"You can load a profile to extend Besu's default configuration, using the --profile option.",source:"@site/docs/public-networks/how-to/configure-besu/profile.md",sourceDirName:"public-networks/how-to/configure-besu",slug:"/public-networks/how-to/configure-besu/profile",permalink:"/public-networks/how-to/configure-besu/profile",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/configure-besu/profile.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1738703275e3,sidebarPosition:1,frontMatter:{title:"Use a profile",sidebar_position:1,tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure Besu",permalink:"/public-networks/how-to/configure-besu/"},next:{title:"Access the Besu API",permalink:"/public-networks/how-to/use-besu-api/"}},a={},c=[{value:"Minimalist staker profile",id:"minimalist-staker-profile",level:2},{value:"Staker profile",id:"staker-profile",level:2},{value:"Enterprise/Private profile",id:"enterpriseprivate-profile",level:2},{value:"Load external profiles",id:"load-external-profiles",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"use-a-profile",children:"Use a profile"})}),"\n",(0,o.jsxs)(r.p,{children:["You can load a profile to extend Besu's ",(0,o.jsx)(r.a,{href:"/public-networks/how-to/configure-besu/#default-configuration",children:"default configuration"}),", using the ",(0,o.jsx)(r.a,{href:"/public-networks/reference/cli/options#profile",children:(0,o.jsx)(r.code,{children:"--profile"})})," option."]}),"\n",(0,o.jsx)(r.p,{children:"Profiles simplify the process of configuring Besu for common use cases. Besu provides the following pre-configured profiles:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"#minimalist-staker-profile",children:"Minimalist staker profile"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"#staker-profile",children:"Staker profile"})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"#enterpriseprivate-profile",children:"Enterprise/Private profile"})}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Alternatively, you can customize and ",(0,o.jsx)(r.a,{href:"#load-external-profiles",children:"load external profiles"}),"."]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["Run ",(0,o.jsx)(r.code,{children:"./besu --help"})," to view all available profiles."]})}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["A configuration option specified in the configuration file or on the command line\n",(0,o.jsx)(r.a,{href:"/public-networks/how-to/configure-besu/#configuration-order-of-precedence",children:"overrides the same option"})," set in the profile."]})}),"\n",(0,o.jsx)(r.h2,{id:"minimalist-staker-profile",children:"Minimalist staker profile"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/public-networks/reference/cli/options#profile",children:(0,o.jsx)(r.code,{children:"--profile=MINIMALIST_STAKER"})})," is optimized for stakers who\nwant to maximize their hardware value but don't want to serve full sets of data to their peers, See the\n",(0,o.jsx)(r.a,{href:"https://github.com/hyperledger/besu/blob/main/config/src/main/resources/profiles/minimalist-staker.toml",children:"minimalist staker profile on GitHub"}),"\nfor the custom settings."]}),"\n",(0,o.jsx)(r.h2,{id:"staker-profile",children:"Staker profile"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/public-networks/reference/cli/options#profile",children:(0,o.jsx)(r.code,{children:"--profile=STAKER"})})," is optimized for stakers who want to\nmaximize their hardware value while also serving full sets of data to their peers. See the\n",(0,o.jsx)(r.a,{href:"https://github.com/hyperledger/besu/blob/main/config/src/main/resources/profiles/staker.toml",children:"staker profile on GitHub"}),"\nfor the custom settings."]}),"\n",(0,o.jsx)(r.h2,{id:"enterpriseprivate-profile",children:"Enterprise/Private profile"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"ENTERPRISE"})," and ",(0,o.jsx)(r.code,{children:"PRIVATE"})," are aliases for the same profile. ",(0,o.jsxs)(r.a,{href:"/public-networks/reference/cli/options#profile",children:[(0,o.jsx)(r.code,{children:"--profile=PRIVATE"})," / ",(0,o.jsx)(r.code,{children:"--profile=ENTERPRISE"})]}),"\nsupports private network operators and enterprises by handling specific use cases that apply to\nprivate network operators. See the ",(0,o.jsx)(r.a,{href:"https://github.com/hyperledger/besu/blob/main/config/src/main/resources/profiles/enterprise-private.toml",children:"enterprise/private profile on\nGitHub"}),"\nfor the custom settings."]}),"\n",(0,o.jsxs)(r.p,{children:["When using this profile, set ",(0,o.jsx)(r.a,{href:"/public-networks/reference/cli/options#sync-mode",children:(0,o.jsx)(r.code,{children:"--sync-mode=FULL"})}),"\nand ",(0,o.jsx)(r.a,{href:"/public-networks/reference/cli/options#data-storage-format",children:(0,o.jsx)(r.code,{children:"--data-storage-format=FOREST"})}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"load-external-profiles",children:"Load external profiles"}),"\n",(0,o.jsx)(r.p,{children:"You can use external profiles to create custom Besu bundles with various plugins and their default options."}),"\n",(0,o.jsxs)(r.p,{children:["Add external profiles to a ",(0,o.jsx)(r.code,{children:"profiles"})," directory under the root Besu directory.\nRun Besu with ",(0,o.jsx)(r.a,{href:"/public-networks/reference/cli/options#profile",children:(0,o.jsx)(r.code,{children:"--profile"})})," set to the external profile\nfile name, without the ",(0,o.jsx)(r.code,{children:".toml"})," extension.\nFor example, to load the ",(0,o.jsx)(r.code,{children:"profiles/custom_profile.toml"})," profile, run:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"besu --profile=custom_profile\n"})}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:["You can overwrite the directory in which to place external profiles using the ",(0,o.jsx)(r.code,{children:"besu.profiles.dir"}),"\nsystem property."]})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>l});var o=i(96540);const n={},t=o.createContext(n);function s(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);