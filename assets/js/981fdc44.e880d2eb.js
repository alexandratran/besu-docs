"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[23911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),s=a(86010),o=a(12466),i=a(16550),l=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=b({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),k=(()=>{const e=l??c;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var k=a(72389);const f="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(c(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,s.Z)("tabs__item",y,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},97899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(74866),o=a(85162);const i={title:"System requirements",sidebar_position:1,description:"Ensure you meet the system requirements to sync and run Besu.",tags:["public networks"]},l="System requirements",u={unversionedId:"public-networks/get-started/system-requirements",id:"public-networks/get-started/system-requirements",title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",source:"@site/docs/public-networks/get-started/system-requirements.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/system-requirements",permalink:"/development/public-networks/get-started/system-requirements",draft:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/get-started/system-requirements.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1696026935,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:1,frontMatter:{title:"System requirements",sidebar_position:1,description:"Ensure you meet the system requirements to sync and run Besu.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Get started",permalink:"/development/public-networks/get-started"},next:{title:"Installation options",permalink:"/development/public-networks/get-started/install/"}},p={},c=[{value:"Java distribution and installation",id:"java-distribution-and-installation",level:2},{value:"Java Virtual Machine size",id:"java-virtual-machine-size",level:2},{value:"Disk space",id:"disk-space",level:2},{value:"Disk type",id:"disk-type",level:2},{value:"AWS requirements",id:"aws-requirements",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-requirements"},"System requirements"),(0,r.kt)("p",null,"Determine public network system requirements by checking CPU and disk space requirements using ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/monitor/metrics"},"Prometheus"),". Grafana provides a ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/10273"},"sample dashboard")," for Besu."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"CPU requirements are highest when syncing to the network and typically reduce after the node is synchronized to the chain head.")),(0,r.kt)("h2",{id:"java-distribution-and-installation"},"Java distribution and installation"),(0,r.kt)("p",null,"Besu requires an installation of Java 17+ to run.\nWe currently recommend two Java distributions, ",(0,r.kt)("a",{parentName:"p",href:"https://jdk.java.net/17/"},"OpenJDK 17")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://www.eclipse.org/openj9/"},"OpenJ9"),", though you can experiment based on your needs."),(0,r.kt)("p",null,"OpenJDK is the default for many Java users and is balanced in performance and garbage collection.\nOpenJ9 consumes less memory and system resources, but can have worse performance on some setups."),(0,r.kt)("p",null,"If you have more than 32GB RAM (for Besu and your ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/the-merge"},"consensus client"),"), use OpenJDK.\nIf you have less RAM:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're on Linux (or Unix-based) and your CPU is x86-64 bit architecture (like Intel), use OpenJ9."),(0,r.kt)("li",{parentName:"ul"},"If you're on ARM-64 CPU architecture (Mac M-series, Raspberry Pi), use OpenJDK.")),(0,r.kt)("p",null,"If you have OpenJDK installed or need a fresh installation of OpenJ9, you can pick up the OpenJ9\ndocker image, or install the OpenJ9 JDK using the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ibmruntimes/semeru17-binaries/releases"},"binaries")," corresponding to\nyour OS architecture.\nFor example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ibmruntimes/semeru17-binaries/releases/download/jdk-17.0.5%2B8_openj9-0.35.0/ibm-semeru-open-jdk_x64_linux_17.0.5_8_openj9-0.35.0.tar.gz\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uncompress the binaries:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Command",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xvf YOUR_J9_IMAGE.tar.gz\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xvf ibm-semeru-open-jdk_x64_linux_17.0.5_8_openj9-0.35.0.tar.gz\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move the binaries to ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Command",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -r YOUR_IMAGE/ /usr/bin/\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -r jdk-17.0.5+8/ /usr/bin/\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify OpenJ9 for Java on your machine:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Command",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo update-alternatives --install "/usr/bin/java" "java" "/usr/bin/YOUR_IMAGE" 1\nsudo update-alternatives --config java (and choose OpenJ9)\n'))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo update-alternatives --install "/usr/bin/java" "java" "/usr/bin/jdk-17.0.5+8/bin/java"\n')))),(0,r.kt)("p",{parentName:"li"},"Change your ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," to OpenJ9 (if using the JDK implementation), where ",(0,r.kt)("inlineCode",{parentName:"p"},"jdk-install-dir")," is\nthe installation location you specified:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Command",value:"tab1",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=jdk-install-dir`\n"))),(0,r.kt)(o.Z,{label:"Example",value:"tab2",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export JAVA_HOME=/usr/bin/jdk-17.0.5+8\n")))))),(0,r.kt)("h2",{id:"java-virtual-machine-size"},"Java Virtual Machine size"),(0,r.kt)("p",null,"For Mainnet and testnets, the minimum ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/how-to/configure-jvm/manage-memory"},"Java Virtual Machine (JVM) memory requirement is 8 GB"),"."),(0,r.kt)("p",null,"JVM memory requirements are highest when syncing, but will reduce after the node is synchronized to the chain head. Monitor your system to determine your actual JVM memory needs."),(0,r.kt)("h2",{id:"disk-space"},"Disk space"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#sync-mode"},"Fast synchronization")," with ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/concepts/data-storage-formats"},"pruning")," enabled requires approximately 750 GB of disk space. ",(0,r.kt)("a",{parentName:"p",href:"/development/public-networks/reference/cli/options#sync-mode"},"Full synchronization")," requires approximately 3 TB."),(0,r.kt)("h2",{id:"disk-type"},"Disk type"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks"},"local SSD storage")," for high throughput nodes (validators and RPC nodes). Read-only nodes can use a lower performance setup."),(0,r.kt)("p",null,"You can use local SSDs through ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SCSI"},"SCSI interfaces"),". For higher performance in production settings, we recommend upgrading to ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance"},"NVMe interfaces"),"."),(0,r.kt)("h2",{id:"aws-requirements"},"AWS requirements"),(0,r.kt)("p",null,"We are running 22.4.2 Mainnet nodes using ",(0,r.kt)("inlineCode",{parentName:"p"},"m6gd.2xlarge")," boxes."),(0,r.kt)("p",null,"We synchronized the 22.4.2 Mainnet nodes using ",(0,r.kt)("inlineCode",{parentName:"p"},"m6gd.2xlarge")," boxes."),(0,r.kt)("p",null,"Using a larger box while synchronizing speeds up the sync process by giving it more resources. When the sync is completed, the box size can be reduced."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using a more recent release than 22.4.2, resource requirements may have increased.")))}d.isMDXComponent=!0}}]);