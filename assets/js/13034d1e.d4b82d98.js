"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[97220],{84575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(85893),r=n(11151),o=n(74866),s=n(85162);const i={title:"Manage JVM memory",sidebar_position:3,description:"Besu memory management",tags:["public networks","private networks"]},l="Manage JVM memory",u={id:"public-networks/how-to/configure-java/manage-memory",title:"Manage JVM memory",description:"Besu memory management",source:"@site/docs/public-networks/how-to/configure-java/manage-memory.md",sourceDirName:"public-networks/how-to/configure-java",slug:"/public-networks/how-to/configure-java/manage-memory",permalink:"/development/public-networks/how-to/configure-java/manage-memory",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/configure-java/manage-memory.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1715720690,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:3,frontMatter:{title:"Manage JVM memory",sidebar_position:3,description:"Besu memory management",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Pass JVM options",permalink:"/development/public-networks/how-to/configure-java/pass-jvm-options"},next:{title:"Use Java Flight Recorder",permalink:"/development/public-networks/how-to/configure-java/java-flight-recorder"}},c={},d=[{value:"Manage the heap dump",id:"manage-the-heap-dump",level:2},{value:"Default options",id:"default-options",level:2}];function m(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"manage-jvm-memory",children:"Manage JVM memory"}),"\n",(0,a.jsx)(t.p,{children:"You can manage Java Virtual Machine (JVM) memory usage for Besu by modifying the maximum heap size."}),"\n",(0,a.jsx)(t.p,{children:"By default, the JVM uses 25% of system RAM. For example, if you have 16 GB RAM installed, the JVM uses 4 GB by default."}),"\n",(0,a.jsx)(t.p,{children:"On public networks, we recommend setting the maximum heap size to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"3 GB on an 8 GB RAM system."}),"\n",(0,a.jsx)(t.li,{children:"5 GB on a 16 GB RAM system."}),"\n",(0,a.jsx)(t.li,{children:"8 GB on a system with at least 24 GB RAM."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Setting a higher maximum heap size speeds up the sync period but doesn't have much impact after sync. Thus, we recommend setting it to 8 GB only when you have available RAM."})}),"\n",(0,a.jsxs)(t.p,{children:["You can set the maximum heap size using the ",(0,a.jsx)(t.code,{children:"BESU_OPTS"})," environment variable and the ",(0,a.jsx)(t.code,{children:"-Xmx"})," option. The following examples set the maximum heap size to 8 GB:"]}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(s.Z,{value:"Exported environment variable",default:!0,children:[(0,a.jsx)(t.p,{children:"Set the variable for the whole shell before running Besu."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"export BESU_OPTS=-Xmx8g\n"})})]}),(0,a.jsxs)(s.Z,{value:"Inline environment variable",children:[(0,a.jsx)(t.p,{children:"Set the variable only for the specific Besu command."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"BESU_OPTS=-Xmx8g besu [Besu options]\n"})})]}),(0,a.jsx)(s.Z,{value:".service file",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'[Service]\n...\nEnvironment="BESU_OPTS=-Xmx8g"\nExecStart=besu [Besu options]\n...\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"manage-the-heap-dump",children:"Manage the heap dump"}),"\n",(0,a.jsxs)(t.p,{children:["Heap dump file generation is disabled by default. To enable it, set the ",(0,a.jsx)(t.code,{children:"-XX:+HeapDumpOnOutOfMemoryError"})," Java option."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'BESU_OPTS="-XX:+HeapDumpOnOutOfMemoryError"\n'})}),"\n",(0,a.jsx)(t.p,{children:"When heap dump file generation is enabled, and an out-of-memory error occurs, the heap dump file is saved in the Besu runtime directory by default."}),"\n",(0,a.jsxs)(t.p,{children:["The heap dump file might be large and can saturate your drive. It can be up to the size of the allocated memory. For example, for 8 GB heap memory, the file can be up to 8 GB. Specify the directory where you want the dump to be saved using the ",(0,a.jsx)(t.code,{children:"-XX:HeapDumpPath"})," Java option."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'BESU_OPTS="-XX:HeapDumpPath=/<path>/<to>/<directory>"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"default-options",children:"Default options"}),"\n",(0,a.jsx)(t.p,{children:"To reduce Besu memory footprint, the following G1GC Java options are enabled by default:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"-XX:G1ConcRefinementThreads=2\n-XX:G1HeapWastePercent=15\n-XX:MaxGCPauseMillis=100\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To run Besu without the default G1GC options, use the ",(0,a.jsx)(t.code,{children:"besu-untuned"})," start script."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),o=n(12466),s=n(16550),i=n(20469),l=n(91980),u=n(67392),c=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=u??b;return h({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(67294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);