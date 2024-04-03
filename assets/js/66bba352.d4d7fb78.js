"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[59149],{54360:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(85893),s=o(11151);const a={title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},r="Pass JVM options",i={id:"public-networks/how-to/configure-java/pass-jvm-options",title:"Pass JVM options",description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",source:"@site/docs/public-networks/how-to/configure-java/pass-jvm-options.md",sourceDirName:"public-networks/how-to/configure-java",slug:"/public-networks/how-to/configure-java/pass-jvm-options",permalink:"/development/public-networks/how-to/configure-java/pass-jvm-options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/configure-java/pass-jvm-options.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1712175918,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:2,frontMatter:{title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Install and update Java",permalink:"/development/public-networks/how-to/configure-java/install-update-java"},next:{title:"Manage JVM memory",permalink:"/development/public-networks/how-to/configure-java/manage-memory"}},p={},c=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pass-jvm-options",children:"Pass JVM options"}),"\n",(0,n.jsx)(t.p,{children:"To perform tasks such as attaching a debugger or configuring the garbage collector, pass Java Virtual Machine (JVM) options to Hyperledger Besu."}),"\n",(0,n.jsxs)(t.p,{children:["Besu passes the contents of the ",(0,n.jsx)(t.code,{children:"BESU_OPTS"})," environment variable to the JVM. Set standard JVM options in the ",(0,n.jsx)(t.code,{children:"BESU_OPTS"})," variable."]}),"\n",(0,n.jsx)(t.p,{children:"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"BESU_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 \\\nbesu --network=goerli\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>r});var n=o(67294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);