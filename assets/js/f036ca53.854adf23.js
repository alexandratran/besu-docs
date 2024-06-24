"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[53004],{62107:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(85893),r=s(11151);const i={title:"Use Splunk",sidebar_position:5,toc_max_heading_level:2,description:"Send Hyperledger Besu logs to Splunk",tags:["private networks"]},l="Use Splunk",o={id:"private-networks/how-to/monitor/splunk",title:"Use Splunk",description:"Send Hyperledger Besu logs to Splunk",source:"@site/versioned_docs/version-24.5.2/private-networks/how-to/monitor/splunk.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/splunk",permalink:"/24.5.2/private-networks/how-to/monitor/splunk",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/private-networks/how-to/monitor/splunk.md",tags:[{label:"private networks",permalink:"/24.5.2/tags/private-networks"}],version:"24.5.2",lastUpdatedAt:1719215046,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:5,frontMatter:{title:"Use Splunk",sidebar_position:5,toc_max_heading_level:2,description:"Send Hyperledger Besu logs to Splunk",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Quorum Hibernate",permalink:"/24.5.2/private-networks/how-to/monitor/quorum-hibernate"},next:{title:"Use OpenTelemetry",permalink:"/24.5.2/private-networks/how-to/monitor/opentelemetry"}},c={},d=[{value:"Developer Quickstart with Splunk",id:"developer-quickstart-with-splunk",level:2},{value:"Splunk Connect for Ethereum Docker Compose",id:"splunk-connect-for-ethereum-docker-compose",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Steps",id:"steps",level:3},{value:"Use Splunk Enterprise as a Docker container",id:"use-splunk-enterprise-as-a-docker-container",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps-1",level:3},{value:"Run a Splunk Enterprise instance",id:"run-a-splunk-enterprise-instance",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Steps",id:"steps-2",level:3},{value:"Splunk options reference",id:"splunk-options-reference",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-splunk",children:"Use Splunk"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://splunkbase.splunk.com/app/4866/",children:"Splunk"})," is a third-party monitoring solution compatible with Besu. A Splunk server can receive Besu logs and enable complex search, visualization, and analysis."]}),"\n",(0,t.jsx)(n.p,{children:"Splunk can aggregate multiple logs in one place and run complex queries without being connected to the machine running Besu to read the standard output."}),"\n",(0,t.jsx)(n.p,{children:"Options for running Splunk and Besu are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#developer-quickstart-with-splunk",children:"Developer Quickstart with Splunk"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#splunk-connect-for-ethereum-docker-compose",children:"Splunk Connect for Ethereum Docker Compose"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#use-splunk-enterprise-as-a-docker-container",children:"Use Splunk Enterprise as a Docker container"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#run-a-splunk-enterprise-instance",children:"Run a Splunk Enterprise instance"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"developer-quickstart-with-splunk",children:"Developer Quickstart with Splunk"}),"\n",(0,t.jsx)(n.p,{children:"To view the Quickstart network logs in Splunk:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/24.5.2/private-networks/tutorials/quickstart",children:"Start the Developer Quickstart with Besu"}),", selecting Splunk monitoring."]}),"\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.a,{href:"http://localhost:8000",children:"Splunk UI"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"splunk-connect-for-ethereum-docker-compose",children:"Splunk Connect for Ethereum Docker Compose"}),"\n",(0,t.jsx)(n.p,{children:"To run a development Besu node and connect it to Splunk Enterprise, use the Splunk Connect for Ethereum demonstration Docker Compose environment provided by Splunk."}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker and Docker-compose"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"A Splunk license is not required to use the Splunk Connect for Ethereum demonstration."})}),"\n",(0,t.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the Splunk Connect for Ethereum repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/splunk/splunk-connect-for-ethereum.git\ncd splunk-connect-for-ethereum\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the demonstration environment by following the Splunk Connect for Ethereum repository ",(0,t.jsx)(n.a,{href:"https://github.com/splunk/splunk-connect-for-ethereum/tree/master/examples/besu",children:"README"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"Splunk enterprise takes some time to start."}),(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"docker ps"})," and wait for the ",(0,t.jsx)(n.code,{children:"STATUS"})," of the 3 containers to be ",(0,t.jsx)(n.code,{children:"Up [number] seconds (healthy)"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS                    PORTS                                                                            NAMES\n127600dd1173        splunkdlt/ethlogger:latest   "ethlogger"              53 seconds ago      Up 51 seconds (healthy)                                                                                    ethlogger\n88dfcee683c4        splunk/splunk:latest         "/sbin/entrypoint.sh\u2026"   53 seconds ago      Up 52 seconds (healthy)   8065/tcp, 8088-8089/tcp, 8191/tcp, 9887/tcp, 9997/tcp, 0.0.0.0:18000->8000/tcp   splunk\n111b0c6d6072        hyperledger/besu:1.4.4       "besu"                   53 seconds ago      Up 52 seconds (healthy)   8545-8547/tcp, 30303/tcp                                                         besu\n'})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"use-splunk-enterprise-as-a-docker-container",children:"Use Splunk Enterprise as a Docker container"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/CHANGELOG.md#144",children:"Besu 1.4.4"})," or later ",(0,t.jsx)(n.a,{href:"/24.5.2/private-networks/get-started/install/binary-distribution",children:"installed"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["A Splunk license is not required to use the trial version of the Splunk Docker image. The image is not suitable for production use and has ",(0,t.jsx)(n.a,{href:"https://www.splunk.com/",children:"restrictions on daily log volume"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If running ",(0,t.jsx)(n.a,{href:"/24.5.2/private-networks/get-started/install/run-docker-image",children:"Besu as a Docker container"}),", consider using ",(0,t.jsx)(n.a,{href:"#splunk-connect-for-ethereum-docker-compose",children:"Splunk Connect for Ethereum Docker Compose"})," or ",(0,t.jsx)(n.a,{href:"/24.5.2/private-networks/how-to/deploy/kubernetes",children:"Kubernetes"})," instead of the Splunk Enterprise trial container."]})}),"\n",(0,t.jsx)(n.h3,{id:"steps-1",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the Splunk Enterprise container:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run \\\n-e SPLUNK_START_ARGS=--accept-license \\\n-e SPLUNK_HEC_TOKEN=11111111-1111-1111-1111-1111111111113 \\\n-e SPLUNK_PASSWORD=changeme \\\n--rm \\\n-p8080:8000 -p8088:8088 \\\n-d \\\n--name splunk-demo \\\nsplunk/splunk:latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the service is started, connect on ",(0,t.jsx)(n.a,{href:"http://localhost:8080/",children:(0,t.jsx)(n.code,{children:"http://localhost:8080/"})})," and login as the ",(0,t.jsx)(n.code,{children:"admin"})," user with a password of ",(0,t.jsx)(n.code,{children:"changeme"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"To follow the logs of the Splunk container:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker logs -f splunk-demo\n"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the Besu index:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Splunk Web interface, navigate to the ",(0,t.jsx)(n.a,{href:"http://localhost:8080/en-US/manager/search/data/indexes",children:"index list in the settings"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Indexer/Setupmultipleindexes#Create_events_indexes",children:"Create an event index"})," with an Index Name of ",(0,t.jsx)(n.code,{children:"besu"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Leave other fields with the default values."}),"\n",(0,t.jsxs)(n.li,{children:["Save the ",(0,t.jsx)(n.code,{children:"besu"})," index."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run Besu. To start a Besu node running in development mode, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"LOGGER=Splunk \\\nSPLUNK_URL=https://localhost:8088 \\\nSPLUNK_TOKEN=11111111-1111-1111-1111-1111111111113 \\\nSPLUNK_SKIPTLSVERIFY=true \\\nbesu \\\n--network=dev \\\n--miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 \\\n--miner-enabled \\\n--logging=trace\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The environment variables specified send the Besu logs to Splunk. Only ",(0,t.jsx)(n.code,{children:"LOGGER"}),", ",(0,t.jsx)(n.code,{children:"SPLUNK_URL"}),", ",(0,t.jsx)(n.code,{children:"SPLUNK_TOKEN"})," and ",(0,t.jsx)(n.code,{children:"SPLUNK_SKIPTLSVERIFY"})," are required in this example. The complete list of options is in the ",(0,t.jsx)(n.a,{href:"#splunk-options-reference",children:"Splunk options reference table"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Splunk Web interface, navigate to the ",(0,t.jsx)(n.a,{href:"http://localhost:8080/en-US/app/search/search",children:"search page"}),". Type ",(0,t.jsx)(n.code,{children:'index="besu"'})," in the search field. Log events sent by Besu are displayed."]}),"\n",(0,t.jsx)(n.p,{children:"Congratulations! You can now play with the search and other Splunk features to explore your Besu logs."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Splunk search page",src:s(10405).Z+"",width:"2072",height:"1436"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Stop Besu with ++ctrl+c++. Stop the Splunk container with ",(0,t.jsx)(n.code,{children:"docker stop splunk-demo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-a-splunk-enterprise-instance",children:"Run a Splunk Enterprise instance"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.splunk.com/",children:"Splunk Enterprise license"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/master/CHANGELOG.md#144",children:"Besu 1.4.4"})," or later ",(0,t.jsx)(n.a,{href:"/24.5.2/private-networks/get-started/install/binary-distribution",children:"installed"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"steps-2",children:"Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Follow the steps in the ",(0,t.jsx)(n.a,{href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Installation",children:"Splunk Enterprise documentation"})," to download, install, and run Splunk Enterprise."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After logging into the Splunk Enterprise Web interface, navigate to the settings to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Data/UsetheHTTPEventCollector",children:"Create an HTTP Event Collector"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.splunk.com/Documentation/Splunk/8.0.4/Indexer/Setupmultipleindexes#Create_events_indexes",children:"Create an event index"})," named ",(0,t.jsx)(n.code,{children:"besu"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run Besu as in step 3 in ",(0,t.jsx)(n.a,{href:"#use-splunk-enterprise-as-a-docker-container",children:"using Splunk on Docker"}),". Set the ",(0,t.jsx)(n.code,{children:"SPLUNK_URL"})," value to match the HTTP Event Collector address and port."]}),"\n",(0,t.jsxs)(n.p,{children:["You can display logs and use the search engine as in step 4 in ",(0,t.jsx)(n.a,{href:"#use-splunk-enterprise-as-a-docker-container",children:"using Splunk on Docker"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"splunk-options-reference",children:"Splunk options reference"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Required"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"LOGGER"})}),(0,t.jsxs)(n.td,{children:["Set to ",(0,t.jsx)(n.code,{children:"Splunk"})," to activate sending logs to Splunk."]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HOST"})}),(0,t.jsxs)(n.td,{children:["Current host. If in a Docker environment, the default value is the docker container ID. Otherwise, the default value is ",(0,t.jsx)(n.code,{children:"localhost"}),"."]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_URL"})}),(0,t.jsxs)(n.td,{children:["URL of the Splunk HTTP Event Collector. For example, use ",(0,t.jsx)(n.code,{children:"https://localhost:8088"})]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_TOKEN"})}),(0,t.jsxs)(n.td,{children:["Authentication token, usually of the form ",(0,t.jsx)(n.code,{children:"11111111-1111-1111-1111-111111111111"})]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_INDEX"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://docs.splunk.com/Splexicon:Index",children:"Index"})," to store logs. Defaults to ",(0,t.jsx)(n.code,{children:"besu"})]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_SOURCE"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://docs.splunk.com/Splexicon:Source",children:"Source of the logs"}),". Defaults to ",(0,t.jsx)(n.code,{children:"besu"})]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_SOURCETYPE"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://docs.splunk.com/Splexicon:Sourcetype",children:"Source type of the logs"}),". Defaults to ",(0,t.jsx)(n.code,{children:"besu"})]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_BATCH_SIZE_BYTES"})}),(0,t.jsxs)(n.td,{children:["Size of a log batch in bytes. Defaults to ",(0,t.jsx)(n.code,{children:"65536"})]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_BATCH_SIZE_COUNT"})}),(0,t.jsxs)(n.td,{children:["Size of a log batch in number of events. Defaults to ",(0,t.jsx)(n.code,{children:"1000"})]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_BATCH_INTERVAL"})}),(0,t.jsxs)(n.td,{children:["Interval at which to send log batches. Defaults to ",(0,t.jsx)(n.code,{children:"500"})]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SPLUNK_SKIPTLSVERIFY"})}),(0,t.jsxs)(n.td,{children:["Whether to check the Splunk instance TLS certificate when sending data. Defaults to ",(0,t.jsx)(n.code,{children:"false"})]}),(0,t.jsx)(n.td,{children:"No"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},10405:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/splunk-ui-c43ce48c74291a12501d3c9a86614bd9.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var t=s(67294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);