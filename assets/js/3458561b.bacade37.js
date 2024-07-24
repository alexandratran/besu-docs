"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[61622],{99591:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=s(85893),n=s(11151);const a={title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},r="Pass JVM options",i={id:"public-networks/how-to/configure-java/pass-jvm-options",title:"Pass JVM options",description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",source:"@site/versioned_docs/version-24.6.0/public-networks/how-to/configure-java/pass-jvm-options.md",sourceDirName:"public-networks/how-to/configure-java",slug:"/public-networks/how-to/configure-java/pass-jvm-options",permalink:"/24.6.0/public-networks/how-to/configure-java/pass-jvm-options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.6.0/public-networks/how-to/configure-java/pass-jvm-options.md",tags:[{label:"public networks",permalink:"/24.6.0/tags/public-networks"},{label:"private networks",permalink:"/24.6.0/tags/private-networks"}],version:"24.6.0",lastUpdatedAt:1721732264,formattedLastUpdatedAt:"Jul 23, 2024",sidebarPosition:2,frontMatter:{title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Install and update Java",permalink:"/24.6.0/public-networks/how-to/configure-java/install-update-java"},next:{title:"Manage JVM memory",permalink:"/24.6.0/public-networks/how-to/configure-java/manage-memory"}},c={},p=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"pass-jvm-options",children:"Pass JVM options"}),"\n",(0,o.jsx)(t.p,{children:"To perform tasks such as attaching a debugger or configuring the garbage collector, pass Java Virtual Machine (JVM) options to Hyperledger Besu."}),"\n",(0,o.jsxs)(t.p,{children:["Besu passes the contents of the ",(0,o.jsx)(t.code,{children:"BESU_OPTS"})," environment variable to the JVM. Set standard JVM options in the ",(0,o.jsx)(t.code,{children:"BESU_OPTS"})," variable."]}),"\n",(0,o.jsx)(t.p,{children:"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"BESU_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 \\\nbesu --network=holesky\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var o=s(67294);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);