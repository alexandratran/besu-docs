"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[6548],{5604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=t(85893),r=t(11151),a=t(74866),s=t(85162);const i={title:"Add and remove validators without voting",description:"How to add or remove validators without voting",sidebar_position:5,tags:["private networks"]},l="Add and remove validators without voting",c={id:"private-networks/how-to/configure/consensus/add-validators-without-voting",title:"Add and remove validators without voting",description:"How to add or remove validators without voting",source:"@site/docs/private-networks/how-to/configure/consensus/add-validators-without-voting.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/add-validators-without-voting",permalink:"/development/private-networks/how-to/configure/consensus/add-validators-without-voting",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/consensus/add-validators-without-voting.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1713464890,formattedLastUpdatedAt:"Apr 18, 2024",sidebarPosition:5,frontMatter:{title:"Add and remove validators without voting",description:"How to add or remove validators without voting",sidebar_position:5,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Clique",permalink:"/development/private-networks/how-to/configure/consensus/clique"},next:{title:"Free gas network",permalink:"/development/private-networks/how-to/configure/free-gas"}},d={},u=[{value:"Override smart contract validators",id:"override-smart-contract-validators",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"add-and-remove-validators-without-voting",children:"Add and remove validators without voting"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft",children:"QBFT"})," or ",(0,o.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," network conditions might not allow voting to change validators. For example, if a majority of the current validators are no longer participating in the network, a vote to add or remove validators won't be successful. You can bypass voting and specify new validators using a transition in the genesis file."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In most cases, add or remove validators ",(0,o.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators",children:"by voting or smart contract for QBFT"}),"; or ",(0,o.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators",children:"by voting for IBFT 2.0"}),". Use transitions only when voting isn't possible. Using transitions requires coordinating a rolling update of all the nodes in order to pick up the configuration at the correct block height. Using transitions also leaves the validator overrides permanently in your genesis configuration."]}),"\n",(0,o.jsx)(n.li,{children:"Transitions are a Besu-specific feature. If you run a mixed-client QBFT network, you can't use transitions to change the validators."}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:"To add or remove validators without voting:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the genesis file, add the ",(0,o.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<BlockNumber>"})," is the upcoming block at which to change validators."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<ValidatorAddressX> ... <ValidatorAddressZ>"})," are strings representing the account addresses of the validators after ",(0,o.jsx)(n.code,{children:"<BlockNumber>"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(s.Z,{value:"QBFT syntax",label:"QBFT syntax",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": <BlockNumber>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})})}),(0,o.jsxs)(s.Z,{value:"QBFT example",label:"QBFT example",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "qbft": [\n        {\n        "block": 25,\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        }\n      ]\n    }\n  },\n  ...\n}\n'})}),(0,o.jsx)(n.h1,{id:"ibft-20-syntax",children:"IBFT 2.0 syntax"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n      {\n        "block": <BlockNumber>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),(0,o.jsx)(n.h1,{id:"ibft-20-example",children:"IBFT 2.0 example"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n      {\n      "block": 25,\n      "validators": [\n        "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n        "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})})]})]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed."}),"\n",(0,o.jsxs)(n.li,{children:["To verify the changes after the transition block, call ",(0,o.jsx)(n.a,{href:"/development/private-networks/reference/api/#qbft_getvalidatorsbyblocknumber",children:(0,o.jsx)(n.code,{children:"qbft_getValidatorsByBlockNumber"})})," or ",(0,o.jsx)(n.a,{href:"/development/private-networks/reference/api/#ibft_getvalidatorsbyblocknumber",children:(0,o.jsx)(n.code,{children:"ibft_getValidatorsByBlockNumber"})}),", specifying ",(0,o.jsx)(n.code,{children:"latest"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsx)(n.p,{children:"Don't specify a transition block in the past."}),(0,o.jsx)(n.p,{children:"Specifying a transition block in the past can result in unexpected behavior, such as causing the network to fork."})]}),"\n",(0,o.jsx)(n.h2,{id:"override-smart-contract-validators",children:"Override smart contract validators"}),"\n",(0,o.jsxs)(n.p,{children:["When using ",(0,o.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-a-smart-contract",children:"QBFT contract validator selection"}),", if network conditions require it, you can bypass the smart contract and specify new validators in the genesis file. For example, you lose quorum for your current list of contract validators, and you can't perform a transaction to vote more in."]}),"\n",(0,o.jsxs)(n.p,{children:["This requires temporarily ",(0,o.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft#swap-validator-management-methods",children:"switching to block header validator selection mode"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To bypass the smart contract and specify new validators:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the genesis file, add a ",(0,o.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<BlockNumber>"})," is the upcoming block at which to change validators."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<SelectionMode>"})," is the validator selection mode to switch to. In this case we'll switch to the ",(0,o.jsx)(n.code,{children:"blockheader"})," mode temporarily."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<ValidatorAddressX> ... <ValidatorAddressZ>"})," are strings representing the account addresses of the validators after ",(0,o.jsx)(n.code,{children:"<BlockNumber>"}),". These validators only need to be sufficient to progress the chain and allow a new contract to be deployed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(s.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": <BlockNumber>,\n        "validatorselectionmode": <SelectionMode>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})})}),(0,o.jsx)(s.Z,{value:"Example",label:"Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})})})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy a new contract to the blockchain containing the desired list of validators."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the genesis file, add another ",(0,o.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<BlockNumber>"})," is the upcoming block at which to change validators."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<SelectionMode>"})," is the validator selection mode to switch to. In this case we'll switch to ",(0,o.jsx)(n.code,{children:"contract"})," mode."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<NewValidatorContractAddress>"})," is the address of the new smart contract."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(s.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      \u201cvalidatorcontractaddress\u201d: \u201c0x0000000000000000000000000000000000007777\u201d\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        },\n      {\n        "block": <BlockNumber>,\n        "validatorselectionmode": <SelectionMode>,\n        "validatorcontractaddress": <NewValidatorContractAddress>\n      }\n      ]\n    }\n  },\n  ...\n}\n'})})}),(0,o.jsx)(s.Z,{value:"Example",label:"Example",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        },\n      {\n        "block": 2755,\n        "validatorselectionmode": "contract",\n        "validatorcontractaddress": "0x0000000000000000000000000000000000009999"\n      }\n      ]\n    }\n  },\n  ...\n}\n'})})})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed."}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var o=t(36905);const r={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var o=t(67294),r=t(36905),a=t(12466),s=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:r}),[b,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),m=(()=>{const e=c??b;return f({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,a]),tabValues:a}}var v=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==o&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,v.Z)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(67294);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);