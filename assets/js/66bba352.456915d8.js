"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4546],{41830:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var n=s(74848),o=s(28453);const a={title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Besu at runtime",tags:["public networks","private networks"]},i="Pass JVM options",r={id:"public-networks/how-to/configure-java/pass-jvm-options",title:"Pass JVM options",description:"Passing Java virtual machine JVM options to Besu at runtime",source:"@site/docs/public-networks/how-to/configure-java/pass-jvm-options.md",sourceDirName:"public-networks/how-to/configure-java",slug:"/public-networks/how-to/configure-java/pass-jvm-options",permalink:"/public-networks/how-to/configure-java/pass-jvm-options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/configure-java/pass-jvm-options.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1737171615e3,sidebarPosition:2,frontMatter:{title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Besu at runtime",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Install and update Java",permalink:"/public-networks/how-to/configure-java/install-update-java"},next:{title:"Manage JVM memory",permalink:"/public-networks/how-to/configure-java/manage-memory"}},c={},p=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"pass-jvm-options",children:"Pass JVM options"})}),"\n",(0,n.jsx)(t.p,{children:"To perform tasks such as attaching a debugger or configuring the garbage collector, pass Java Virtual Machine (JVM) options to Besu."}),"\n",(0,n.jsxs)(t.p,{children:["Besu passes the contents of the ",(0,n.jsx)(t.code,{children:"BESU_OPTS"})," environment variable to the JVM. Set standard JVM options in the ",(0,n.jsx)(t.code,{children:"BESU_OPTS"})," variable."]}),"\n",(0,n.jsx)(t.p,{children:"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"BESU_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 \\\nbesu --network=holesky\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(96540);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);