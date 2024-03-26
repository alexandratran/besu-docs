"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[60470],{78695:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var s=r(85893),t=r(11151),a=r(74866),i=r(85162);const l={title:"System requirements",sidebar_position:1,description:"Ensure you meet the system requirements to sync and run Besu.",tags:["public networks"]},o="System requirements",u={id:"public-networks/get-started/system-requirements",title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",source:"@site/versioned_docs/version-24.1.0/public-networks/get-started/system-requirements.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/system-requirements",permalink:"/24.1.0/public-networks/get-started/system-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/get-started/system-requirements.md",tags:[{label:"public networks",permalink:"/24.1.0/tags/public-networks"}],version:"24.1.0",lastUpdatedAt:1711474639,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:1,frontMatter:{title:"System requirements",sidebar_position:1,description:"Ensure you meet the system requirements to sync and run Besu.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Get started",permalink:"/24.1.0/public-networks/get-started"},next:{title:"Installation options",permalink:"/24.1.0/public-networks/get-started/install/"}},c={},d=[{value:"Java distribution and installation",id:"java-distribution-and-installation",level:2},{value:"Java Virtual Machine size",id:"java-virtual-machine-size",level:2},{value:"Disk space",id:"disk-space",level:2},{value:"Disk type",id:"disk-type",level:2},{value:"AWS requirements",id:"aws-requirements",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"system-requirements",children:"System requirements"}),"\n",(0,s.jsxs)(n.p,{children:["Determine public network system requirements by checking CPU and disk space requirements using ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/how-to/monitor/metrics",children:"Prometheus"}),". Grafana provides a ",(0,s.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/10273",children:"sample dashboard"})," for Besu."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"CPU requirements are highest when syncing to the network and typically reduce after the node is synchronized to the chain head."})}),"\n",(0,s.jsx)(n.h2,{id:"java-distribution-and-installation",children:"Java distribution and installation"}),"\n",(0,s.jsxs)(n.p,{children:["Besu requires an installation of Java 17+ to run.\nWe currently recommend two Java distributions, ",(0,s.jsx)(n.a,{href:"https://jdk.java.net/17/",children:"OpenJDK 17"})," and\n",(0,s.jsx)(n.a,{href:"https://www.eclipse.org/openj9/",children:"OpenJ9"}),", though you can experiment based on your needs."]}),"\n",(0,s.jsx)(n.p,{children:"OpenJDK is the default for many Java users and is balanced in performance and garbage collection.\nOpenJ9 consumes less memory and system resources, but can have worse performance on some setups."}),"\n",(0,s.jsxs)(n.p,{children:["If you have more than 32GB RAM (for Besu and your ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/the-merge",children:"consensus client"}),"), use OpenJDK.\nIf you have less RAM:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you're on Linux (or Unix-based) and your CPU is x86-64 bit architecture (like Intel), use OpenJ9."}),"\n",(0,s.jsx)(n.li,{children:"If you're on ARM-64 CPU architecture (Mac M-series, Raspberry Pi), use OpenJDK."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you have OpenJDK installed or need a fresh installation of OpenJ9, you can pick up the OpenJ9\ndocker image, or install the OpenJ9 JDK using the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Get the ",(0,s.jsx)(n.a,{href:"https://github.com/ibmruntimes/semeru17-binaries/releases",children:"binaries"})," corresponding to\nyour OS architecture.\nFor example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/ibmruntimes/semeru17-binaries/releases/download/jdk-17.0.5%2B8_openj9-0.35.0/ibm-semeru-open-jdk_x64_linux_17.0.5_8_openj9-0.35.0.tar.gz\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Uncompress the binaries:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(i.Z,{value:"Command",label:"Command",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tar -xvf YOUR_J9_IMAGE.tar.gz\n"})})}),(0,s.jsx)(i.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tar -xvf ibm-semeru-open-jdk_x64_linux_17.0.5_8_openj9-0.35.0.tar.gz\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Move the binaries to ",(0,s.jsx)(n.code,{children:"bin"})," directory:"]}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(i.Z,{value:"Command",label:"Command",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo cp -r YOUR_IMAGE/ /usr/bin/\n"})})}),(0,s.jsx)(i.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo cp -r jdk-17.0.5+8/ /usr/bin/\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Specify OpenJ9 for Java on your machine:"}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(i.Z,{value:"Command",label:"Command",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo update-alternatives --install "/usr/bin/java" "java" "/usr/bin/YOUR_IMAGE" 1\nsudo update-alternatives --config java (and choose OpenJ9)\n'})})}),(0,s.jsx)(i.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo update-alternatives --install "/usr/bin/java" "java" "/usr/bin/jdk-17.0.5+8/bin/java"\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Change your ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," to OpenJ9 (if using the JDK implementation), where ",(0,s.jsx)(n.code,{children:"jdk-install-dir"})," is\nthe installation location you specified:"]}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(i.Z,{value:"Command",label:"Command",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export JAVA_HOME=jdk-install-dir`\n"})})}),(0,s.jsx)(i.Z,{value:"Example",label:"Example",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export JAVA_HOME=/usr/bin/jdk-17.0.5+8\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"java-virtual-machine-size",children:"Java Virtual Machine size"}),"\n",(0,s.jsxs)(n.p,{children:["For Mainnet and testnets, the minimum ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/how-to/configure-jvm/manage-memory",children:"Java Virtual Machine (JVM) memory requirement is 8 GB"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"JVM memory requirements are highest when syncing, but will reduce after the node is synchronized to the chain head. Monitor your system to determine your actual JVM memory needs."}),"\n",(0,s.jsx)(n.h2,{id:"disk-space",children:"Disk space"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#sync-mode",children:"Fast synchronization"})," with ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/concepts/data-storage-formats",children:"pruning"})," enabled requires approximately 750 GB of disk space. ",(0,s.jsx)(n.a,{href:"/24.1.0/public-networks/reference/cli/options#sync-mode",children:"Full synchronization"})," requires approximately 3 TB."]}),"\n",(0,s.jsx)(n.h2,{id:"disk-type",children:"Disk type"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/disks",children:"local SSD storage"})," for high throughput nodes (validators and RPC nodes). Read-only nodes can use a lower performance setup."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use local SSDs through ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/SCSI",children:"SCSI interfaces"}),". For higher performance in production settings, we recommend upgrading to ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance",children:"NVMe interfaces"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"aws-requirements",children:"AWS requirements"}),"\n",(0,s.jsxs)(n.p,{children:["We are running 22.4.2 Mainnet nodes using ",(0,s.jsx)(n.code,{children:"m6gd.2xlarge"})," boxes."]}),"\n",(0,s.jsxs)(n.p,{children:["We synchronized the 22.4.2 Mainnet nodes using ",(0,s.jsx)(n.code,{children:"m6gd.2xlarge"})," boxes."]}),"\n",(0,s.jsx)(n.p,{children:"Using a larger box while synchronizing speeds up the sync process by giving it more resources. When the sync is completed, the box size can be reduced."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"If you are using a more recent release than 22.4.2, resource requirements may have increased."})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var s=r(36905);const t={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var s=r(67294),t=r(36905),a=r(12466),i=r(16550),l=r(20469),o=r(91980),u=r(67392),c=r(50012);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:r,groupId:t}),[b,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,c.Nk)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),f=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function g(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),t=l[r].value;t!==s&&(u(n),i(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,t.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(e){const n=(0,x.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var s=r(67294);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);