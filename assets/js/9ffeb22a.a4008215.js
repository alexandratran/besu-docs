"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[9334],{7978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"private-networks/how-to/configure/consensus/index","title":"Consensus protocols","description":"Besu consensus protocols","source":"@site/docs/private-networks/how-to/configure/consensus/index.md","sourceDirName":"private-networks/how-to/configure/consensus","slug":"/private-networks/how-to/configure/consensus/","permalink":"/private-networks/how-to/configure/consensus/","draft":false,"unlisted":false,"editUrl":"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/how-to/configure/consensus/index.md","tags":[{"inline":true,"label":"private networks","permalink":"/tags/private-networks"}],"version":"current","lastUpdatedAt":1744743967000,"sidebarPosition":1,"frontMatter":{"title":"Consensus protocols","description":"Besu consensus protocols","sidebar_position":1,"tags":["private networks"]},"sidebar":"privateDocSidebar","previous":{"title":"How to","permalink":"/private-networks/how-to/"},"next":{"title":"QBFT","permalink":"/private-networks/how-to/configure/consensus/qbft"}}');var s=t(74848),o=t(28453),a=t(65537),l=t(79329);const i={title:"Consensus protocols",description:"Besu consensus protocols",sidebar_position:1,tags:["private networks"]},u="Consensus protocols",c={},d=[];function p(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"consensus-protocols",children:"Consensus protocols"})}),"\n",(0,s.jsx)(n.p,{children:"Besu supports the following consensus protocols:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/qbft",children:"QBFT"})," (proof of authority) - The recommended enterprise-grade consensus protocol for private networks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," (proof of authority) - Supported for existing private networks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/private-networks/how-to/configure/consensus/clique",children:"Clique"})," (proof of authority) - Not recommended for production use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/public-networks/concepts/proof-of-stake/",children:"Proof of stake"})," - Used on Ethereum Mainnet and public testnets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/",children:"Ethash"})," (proof of work) - Can be used in ",(0,s.jsx)(n.a,{href:"/private-networks/tutorials/ethash",children:"small development networks"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See a ",(0,s.jsx)(n.a,{href:"/private-networks/concepts/poa",children:"comparison of the proof of authority consensus protocols"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"config"})," property in the genesis file specifies the consensus protocol for a chain."]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"Ethash",label:"Ethash",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n  ...\n    "ethash": {\n    ...\n    }\n  },\n  ...\n}\n'})})}),(0,s.jsx)(l.A,{value:"Clique",label:"Clique",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "clique": {\n    ...\n    }\n  },\n  ...\n}\n'})})}),(0,s.jsx)(l.A,{value:"IBFT 2.0",label:"IBFT 2.0",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      ...\n    }\n  },\n  ...\n}\n'})})}),(0,s.jsx)(l.A,{value:"QBFT",label:"QBFT",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "qbft": {\n      ...\n    }\n  },\n  ...\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}},65537:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(18215),o=t(65627),a=t(56347),l=t(50372),i=t(30604),u=t(11861),c=t(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:t,groupId:s}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),v=(()=>{const e=u??b;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==r&&(u(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},79329:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}}}]);