"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[33720],{11407:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=o(85893),s=o(11151);const t={description:"Troubleshoot poor performance and resource constraints.",sidebar_label:"Troubleshoot performance",sidebar_position:3,tags:["public networks"]},i="Troubleshoot poor performance and resource constraints",a={id:"public-networks/how-to/troubleshoot/performance",title:"Troubleshoot poor performance and resource constraints",description:"Troubleshoot poor performance and resource constraints.",source:"@site/versioned_docs/version-23.10.2/public-networks/how-to/troubleshoot/performance.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/performance",permalink:"/23.10.2/public-networks/how-to/troubleshoot/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/how-to/troubleshoot/performance.md",tags:[{label:"public networks",permalink:"/23.10.2/tags/public-networks"}],version:"23.10.2",lastUpdatedAt:1709314457,formattedLastUpdatedAt:"Mar 1, 2024",sidebarPosition:3,frontMatter:{description:"Troubleshoot poor performance and resource constraints.",sidebar_label:"Troubleshoot performance",sidebar_position:3,tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Trace transactions",permalink:"/23.10.2/public-networks/how-to/troubleshoot/trace-transactions"},next:{title:"Troubleshoot peering",permalink:"/23.10.2/public-networks/how-to/troubleshoot/peering"}},c={},l=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"troubleshoot-poor-performance-and-resource-constraints",children:"Troubleshoot poor performance and resource constraints"}),"\n",(0,r.jsxs)(n.p,{children:["Your hardware, machine environment, and node configuration can affect your node's ability to serve\nrequests and perform ",(0,r.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/proof-of-stake/",children:"validator duties"}),", including\n",(0,r.jsx)(n.a,{href:"/23.10.2/public-networks/concepts/proof-of-stake/attestations",children:"attestation performance"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you notice high resource usage when ",(0,r.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/monitor/",children:"monitoring your node"}),", you can\ntry the following suggestions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Disable swapping.\nBesu is an I/O intensive application, especially during sync, enabling swapping hurts Besu's performance.\nYou can disable swap at the OS level.\n",(0,r.jsx)(n.a,{href:"https://www.tecmint.com/disable-swap-partition/",children:"This article"})," provides information on how to\ndisable swap (and caveats)."]}),"\n",(0,r.jsx)(n.li,{children:"Use a high performance SSD disk with NVMe, since Besu's performance bottleneck is often slow disk I/O."}),"\n",(0,r.jsxs)(n.li,{children:["Configure memory and RAM:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you have RAM constraints, use ",(0,r.jsx)(n.a,{href:"/23.10.2/public-networks/get-started/system-requirements",children:"OpenJ9"})," if you're\nrunning on ",(0,r.jsx)(n.code,{children:"x86_64"})," Linux architecture to reduce memory usage."]}),"\n",(0,r.jsxs)(n.li,{children:["Review and change your ",(0,r.jsx)(n.a,{href:"/23.10.2/public-networks/how-to/configure-jvm/manage-memory",children:"Java heap size"})," if necessary.\n5GB is an appropriate limit.\nHigher values may improve sync time, but can be reduced after completing sync."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure Besu is using ",(0,r.jsx)(n.a,{href:"/23.10.2/public-networks/get-started/install/binary-distribution",children:"jemalloc"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you have 32GB RAM or more, set the ",(0,r.jsx)(n.code,{children:"Xplugin-rocksdb-high-spec-enabled"})," configuration option\nto ",(0,r.jsx)(n.code,{children:"true"}),".\nDon't use this on RAM machines with 16GB RAM or less if you're running a consensus client on the\nsame hardware."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["If you're running on ARM64, make sure the glibc version is greater than 2.29.\nIf not, Besu uses a Java implementation instead of the native one for some precompiled contracts,\nwhich results in lower performance.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On Ubuntu, run ",(0,r.jsx)(n.code,{children:"ldd --version"}),".\nSee ",(0,r.jsx)(n.a,{href:"https://dev.to/0xbf/how-to-get-glibc-version-c-lang-26he",children:"the methods for other environments"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Pay attention to what processes are running on the same machine/VM as Besu.\nJava applications, with default settings, are designed to run alone on the machine.\nYou can run your consensus client on the same machine, but this adds overhead on Besu, and vice\nversa (on CPU cache misses, CPU scheduler latency, IO, etc.)."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You should continue to monitor your node after following these suggestions."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var r=o(67294);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);