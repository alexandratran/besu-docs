"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[81164],{46298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(85893),s=r(11151);const a={title:"Backup and restore",description:"Backing up and restoring Besu",sidebar_position:7,tags:["private networks"]},o="Backup and restore Besu",i={id:"private-networks/how-to/backup",title:"Backup and restore",description:"Backing up and restoring Besu",source:"@site/versioned_docs/version-23.10.3/private-networks/how-to/backup.md",sourceDirName:"private-networks/how-to",slug:"/private-networks/how-to/backup",permalink:"/23.10.3/private-networks/how-to/backup",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.3/private-networks/how-to/backup.md",tags:[{label:"private networks",permalink:"/23.10.3/tags/private-networks"}],version:"23.10.3",lastUpdatedAt:1712175918,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:7,frontMatter:{title:"Backup and restore",description:"Backing up and restoring Besu",sidebar_position:7,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Ethstats network monitor",permalink:"/23.10.3/private-networks/how-to/deploy/ethstats"},next:{title:"Upgrade",permalink:"/23.10.3/private-networks/how-to/upgrade"}},d={},c=[{value:"Genesis file",id:"genesis-file",level:2},{value:"Data backups",id:"data-backups",level:2},{value:"Data restores",id:"data-restores",level:2},{value:"Corrupted data",id:"corrupted-data",level:2},{value:"Find peers after restarting",id:"find-peers-after-restarting",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"backup-and-restore-besu",children:"Backup and restore Besu"}),"\n",(0,n.jsx)(t.p,{children:"In a decentralized blockchain, data replicates between nodes so it's not lost. But backing up configuration and data ensures a smoother recovery from corrupted data or other failures."}),"\n",(0,n.jsx)(t.h2,{id:"genesis-file",children:"Genesis file"}),"\n",(0,n.jsx)(t.p,{children:"The genesis file for a network must be accessible on every node. We recommend storing the genesis file under source control."}),"\n",(0,n.jsx)(t.h2,{id:"data-backups",children:"Data backups"}),"\n",(0,n.jsx)(t.p,{children:"If installed locally, the default data location is the Besu installation directory."}),"\n",(0,n.jsxs)(t.p,{children:["We recommend mounting a ",(0,n.jsx)(t.a,{href:"/23.10.3/private-networks/get-started/install/run-docker-image",children:"separate volume to store data"}),". Use the ",(0,n.jsx)(t.a,{href:"/23.10.3/public-networks/reference/cli/options#data-path",children:(0,n.jsx)(t.code,{children:"--data-path"})})," command line option to pass the path to Besu."]}),"\n",(0,n.jsxs)(t.p,{children:["The default data location is the Besu installation directory, or ",(0,n.jsx)(t.code,{children:"/opt/besu/database"})," if using the ",(0,n.jsx)(t.a,{href:"/23.10.3/private-networks/get-started/install/run-docker-image",children:"Besu Docker image"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Having some data reduces the time to synchronize a new node. You can perform periodic backups of the data directory and send the data to your preferred backup mechanism. For example, ",(0,n.jsx)(t.code,{children:"cron"})," job and ",(0,n.jsx)(t.code,{children:"rsync"}),", archives to the cloud such as s3, or ",(0,n.jsx)(t.code,{children:"tar.gz"})," archives."]}),"\n",(0,n.jsx)(t.h2,{id:"data-restores",children:"Data restores"}),"\n",(0,n.jsx)(t.p,{children:"To restore data:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"If the node is running, stop the node."}),"\n",(0,n.jsx)(t.li,{children:"If required, move the data directory to another location for analysis."}),"\n",(0,n.jsx)(t.li,{children:"Restore the data from your last known good backup to the same directory."}),"\n",(0,n.jsx)(t.li,{children:"Ensure user permissions are valid so you can read from and write to the data directory."}),"\n",(0,n.jsx)(t.li,{children:"Restart the node."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"corrupted-data",children:"Corrupted data"}),"\n",(0,n.jsx)(t.p,{children:"If log messages signify a corrupt database, the cleanest way to recover is:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Stop the node."}),"\n",(0,n.jsxs)(t.li,{children:["Restore the data from a ",(0,n.jsx)(t.a,{href:"#data-backups",children:"previous backup"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Restart the node."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"find-peers-after-restarting",children:"Find peers after restarting"}),"\n",(0,n.jsxs)(t.p,{children:["The process for finding peers after restarting is the same as for ",(0,n.jsx)(t.a,{href:"/23.10.3/public-networks/how-to/upgrade-node#find-peers-on-restarting",children:"finding peers after upgrading and restarting"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(67294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);