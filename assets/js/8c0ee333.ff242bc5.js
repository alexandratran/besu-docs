"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[77781],{52545:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(85893),t=a(11151);const i={sidebar_position:1,description:"Install or update Java for use with Hyperledger Besu",tags:["public networks","private networks"]},l="Install and update Java",o={id:"public-networks/how-to/configure-java/install-update-java",title:"Install and update Java",description:"Install or update Java for use with Hyperledger Besu",source:"@site/docs/public-networks/how-to/configure-java/install-update-java.md",sourceDirName:"public-networks/how-to/configure-java",slug:"/public-networks/how-to/configure-java/install-update-java",permalink:"/development/public-networks/how-to/configure-java/install-update-java",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/configure-java/install-update-java.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1719215046,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Install or update Java for use with Hyperledger Besu",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Sample load balancer configurations",permalink:"/development/public-networks/how-to/configure-ha/sample-configuration"},next:{title:"Pass JVM options",permalink:"/development/public-networks/how-to/configure-java/pass-jvm-options"}},r={},d=[{value:"Install Java",id:"install-java",level:2},{value:"Install Java on Ubuntu",id:"install-java-on-ubuntu",level:3},{value:"Install Java on MacOS",id:"install-java-on-macos",level:3},{value:"Update Java",id:"update-java",level:2},{value:"Update Java on Ubuntu",id:"update-java-on-ubuntu",level:3},{value:"Update Java on MacOS",id:"update-java-on-macos",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"install-and-update-java",children:"Install and update Java"}),"\n",(0,s.jsxs)(n.p,{children:["There are many flavors of Java and the Java Virtual Machine (JVM) that work with Besu.\nThey might impact performance, start time, and more.\nConsider the options carefully when installing Java on your host machine.\nCurrently, ",(0,s.jsx)(n.a,{href:"/development/public-networks/get-started/system-requirements#java-distribution-and-installation",children:"we recommend Java 21"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"install-java",children:"Install Java"}),"\n",(0,s.jsx)(n.p,{children:"Download the version of Java you would like to install.\nIf you are running Besu outside a virtual environment, like Docker, you must have Java installed on\nthe host machine."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Download ",(0,s.jsx)(n.a,{href:"https://jdk.java.net/21/",children:"OpenJDK 21"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"You can find platform-specific installation instructions with the download.\nThe following installation examples use OpenJDK."}),"\n",(0,s.jsx)(n.h3,{id:"install-java-on-ubuntu",children:"Install Java on Ubuntu"}),"\n",(0,s.jsxs)(n.p,{children:["You can install OpenJDK on Ubuntu using the ",(0,s.jsx)(n.code,{children:"apt-get"})," command."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure ",(0,s.jsx)(n.code,{children:"apt"})," libraries are installed and up-to-date:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt update && sudo apt upgrade -y\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm whether Java is already installed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"java -version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If a version is returned, and you would like to update, see how to ",(0,s.jsx)(n.a,{href:"#update-java-on-ubuntu",children:"update Java on Ubuntu"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If no version is returned, use ",(0,s.jsx)(n.code,{children:"apt"})," to install the preferred version."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install openjdk-21-jdk\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm the installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"java -version\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You might need to update your environment to make Java visible to Besu.\nEdit the ",(0,s.jsx)(n.code,{children:".bashrc"})," file in your home directory (or create it if needed) and add the following\nlines to the end of the file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title=".bashrc"',children:"export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))\nexport PATH=$PATH:$JAVA_HOME/bin\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save your changes and source the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify that you updated your environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo $JAVA_HOME\necho $PATH\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see the JDK versions output."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"install-java-on-macos",children:"Install Java on MacOS"}),"\n",(0,s.jsx)(n.p,{children:"You can install OpenJDK on MacOS using Homebrew."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"brew"})," installed, run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install openjdk@21\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can target another version if you prefer."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Confirm the installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"java -version\n"})}),"\n",(0,s.jsx)(n.p,{children:"The OpenJDK version you install should display."}),"\n",(0,s.jsxs)(n.p,{children:["If this command returns ",(0,s.jsx)(n.code,{children:"command not found: java"}),", check your terminal logs.\nBrew might prompt you to create a symlink or update your path variables within the logs in the\nterminal output.\nIf so, run the prompts provided."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"update-java",children:"Update Java"}),"\n",(0,s.jsx)(n.h3,{id:"update-java-on-ubuntu",children:"Update Java on Ubuntu"}),"\n",(0,s.jsxs)(n.p,{children:["To update Java on Ubuntu, uninstall the current versions and follow the instructions to\n",(0,s.jsx)(n.a,{href:"#install-java-on-ubuntu",children:"install Java on Ubuntu"})," with your target version."]}),"\n",(0,s.jsx)(n.p,{children:"If you started with this guide, you can uninstall Java using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get purge openjdk-\\*\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-java-on-macos",children:"Update Java on MacOS"}),"\n",(0,s.jsx)(n.p,{children:"You can update Java on MacOS using Homebrew."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"List your Homebrew packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew ls\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To update the JDK version (for example, from 17 to 21), uninstall the old version and reinstall\nthe target version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew uninstall openjdk@17\nbrew install openjdk@21\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you installed a version of Java not using Homebrew, it is located at\n",(0,s.jsx)(n.code,{children:"/Library/Java/JavaVirtualMachines"})," and can be safely deleted from that directory."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To update point versions of Java, run the ",(0,s.jsx)(n.code,{children:"upgrade"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew upgrade openjdk\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>l});var s=a(67294);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);