"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[87911],{35624:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=o(85893),n=o(11151),s=o(74866),a=o(85162);const l={title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},i="Use the EVM tool",u={id:"public-networks/how-to/troubleshoot/evm-tool",title:"Use EVM tool",description:"Hyperledger Besu EVM tool",source:"@site/versioned_docs/version-23.4.1/public-networks/how-to/troubleshoot/evm-tool.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/evm-tool",permalink:"/23.4.1/public-networks/how-to/troubleshoot/evm-tool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/how-to/troubleshoot/evm-tool.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1709127984,formattedLastUpdatedAt:"Feb 28, 2024",sidebarPosition:1,frontMatter:{title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Upgrade Besu",permalink:"/23.4.1/public-networks/how-to/upgrade-node"},next:{title:"Trace transactions",permalink:"/23.4.1/public-networks/how-to/troubleshoot/trace-transactions"}},c={},d=[{value:"Get the EVM tool",id:"get-the-evm-tool",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Execute with Docker",id:"execute-with-docker",level:3},{value:"EVM tool run options",id:"evm-tool-run-options",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-the-evm-tool",children:"Use the EVM tool"}),"\n",(0,r.jsx)(t.p,{children:"The Besu EVM tool is a CLI program that executes arbitrary EVM programs and Ethereum State Tests outside the context of an operating node. Use the EVM tool for benchmarking and fuzz testing."}),"\n",(0,r.jsx)(t.h2,{id:"get-the-evm-tool",children:"Get the EVM tool"}),"\n",(0,r.jsx)(t.p,{children:"The Besu EVM tool does not have a standard zip file distribution. To use, you need to either build from the source repository or use a pre-published docker image."}),"\n",(0,r.jsx)(t.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,r.jsx)(t.p,{children:"To build from source, run the following from the root of the Besu repository:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"./gradlew :ethereum:evmTool:installDist\n"})}),"\n",(0,r.jsxs)(t.p,{children:["An extractable archive files is created in ",(0,r.jsx)(t.code,{children:"ethereum/evmtool/build/distributions"})," and an executable installation in ",(0,r.jsx)(t.code,{children:"ethereum/evmtool/build/install/evmtool"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Execute the EVM tool:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ethereum/evmtool/build/install/evmtool/bin/evm <evmtool options>\n"})}),"\n",(0,r.jsx)(t.h3,{id:"execute-with-docker",children:"Execute with Docker"}),"\n",(0,r.jsx)(t.p,{children:"To run the Besu EVM tool in a container:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker run -rm <docker options> hyperledger/besu-evmtool:develop <evmtool options>\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Because no data is stored in local directories we recommended using the ",(0,r.jsx)(t.code,{children:"-rm"})," docker option. The ",(0,r.jsx)(t.code,{children:"-rm"})," option deletes the container at the end of execution."]}),"\n",(0,r.jsxs)(t.li,{children:["If you use an option that requires input from standard in, use the ",(0,r.jsx)(t.code,{children:"-i"})," docker option. The ",(0,r.jsx)(t.code,{children:"-i"})," option pipes standard input to the EVM tool."]}),"\n",(0,r.jsxs)(t.li,{children:["If you need to reference files we recommend using a docker file binding, such as ",(0,r.jsx)(t.code,{children:"-v ${PWD}:/opt/data"}),", which maps the current directory to the ",(0,r.jsx)(t.code,{children:"/opt/data"})," directory in the container."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"latest"})," tag is the latest released version of Besu, starting with 1.5.3. The ",(0,r.jsx)(t.code,{children:"develop"})," tag is the current main branch code that will go into a future release version of Besu."]})}),"\n",(0,r.jsx)(t.h2,{id:"evm-tool-run-options",children:"EVM tool run options"}),"\n",(0,r.jsxs)(t.p,{children:["The first mode of the EVM tool runs an arbitrary EVM and is invoked without an extra command. ",(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/reference/evm-tool",children:"Command line options"})," specify the code and other contextual information."]}),"\n",(0,r.jsxs)(t.p,{children:["The EVM tool also has a ",(0,r.jsxs)(t.a,{href:"/23.4.1/public-networks/reference/evm-tool#state-test-options",children:[(0,r.jsx)(t.code,{children:"state-test"})," subcommand"]})," that allows ",(0,r.jsx)(t.a,{href:"https://github.com/ethereum/tests/tree/develop/GeneralStateTests",children:"Ethereum state tests"})," to be evaluated, and a ",(0,r.jsxs)(t.a,{href:"/23.4.1/public-networks/reference/evm-tool#eof-code-validation",children:[(0,r.jsx)(t.code,{children:"code-validate"})," subcommand"]})," that allows ",(0,r.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-3540",children:"Ethereum object formatted (EOF)"})," code to be validated. Most of the options from EVM execution don't apply."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"state-test",label:"state-test",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"evm state-test <state-test> --nomemory\n"})})}),(0,r.jsx)(a.Z,{value:"code-validate",label:"code-validate",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"evm code-validate --file <file>\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/23.4.1/public-networks/reference/evm-tool",children:"EVM tool reference"})," provides more information on these modes."]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,o)=>{o.d(t,{Z:()=>a});o(67294);var r=o(36905);const n={tabItem:"tabItem_Ymn6"};var s=o(85893);function a(e){let{children:t,hidden:o,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,a),hidden:o,children:t})}},74866:(e,t,o)=>{o.d(t,{Z:()=>k});var r=o(67294),n=o(36905),s=o(12466),a=o(16550),l=o(20469),i=o(91980),u=o(67392),c=o(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:o,attributes:r,default:n}}=e;return{value:t,label:o,attributes:r,default:n}}))}(o);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const n=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,s=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:o,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(o);return[n,(0,r.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:n}),v=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=o(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=o(85893);function g(e){let{className:t,block:o,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,o=i.indexOf(t),n=l[o].value;n!==r&&(u(t),a(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;t=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;t=i[o]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},t),children:l.map((e=>{let{value:t,label:o,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:o??t},t)}))})}function j(e){let{lazy:t,children:o,selectedValue:n}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function k(e){const t=(0,f.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>a});var r=o(67294);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);