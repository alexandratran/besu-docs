"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[63134],{80583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(85893),o=n(11151),s=n(74866),l=n(85162);const a={title:"Use OpenTelemetry",sidebar_position:6,description:"Collect Besu information with the OpenTelemetry Collector",tags:["private networks"]},i="Use OpenTelemetry",c={id:"private-networks/how-to/monitor/opentelemetry",title:"Use OpenTelemetry",description:"Collect Besu information with the OpenTelemetry Collector",source:"@site/versioned_docs/version-23.10.2/private-networks/how-to/monitor/opentelemetry.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/opentelemetry",permalink:"/23.10.2/private-networks/how-to/monitor/opentelemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/how-to/monitor/opentelemetry.md",tags:[{label:"private networks",permalink:"/23.10.2/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1712348844,formattedLastUpdatedAt:"Apr 5, 2024",sidebarPosition:6,frontMatter:{title:"Use OpenTelemetry",sidebar_position:6,description:"Collect Besu information with the OpenTelemetry Collector",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Splunk",permalink:"/23.10.2/private-networks/how-to/monitor/splunk"},next:{title:"Use Chainlens Explorer",permalink:"/23.10.2/private-networks/how-to/monitor/chainlens"}},u={},d=[{value:"Install OpenTelemetry Collector",id:"install-opentelemetry-collector",level:2},{value:"Setting up and running OpenTelemetry with Besu",id:"setting-up-and-running-opentelemetry-with-besu",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-opentelemetry",children:"Use OpenTelemetry"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the OpenTelemetry monitoring and tracing service to gather node metrics and traces. To enable OpenTelemetry to access Hyperledger Besu, use the ",(0,r.jsx)(t.a,{href:"/23.10.2/public-networks/reference/cli/options#metrics-enabled",children:(0,r.jsx)(t.code,{children:"--metrics-enabled"})})," and ",(0,r.jsx)(t.a,{href:"/23.10.2/public-networks/reference/cli/options#metrics-protocol",children:(0,r.jsx)(t.code,{children:"--metrics-protocol=opentelemetry"})})," options. Use ",(0,r.jsx)(t.a,{href:"https://splunk.com",children:"Splunk"})," to visualize the collected data. A ",(0,r.jsx)(t.a,{href:"https://github.com/splunk/splunk-connect-for-ethereum/tree/master/examples/besu-sync",children:"Besu Sync example"})," is available."]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"Use OpenTelemetry to monitor the sync time of your Besu node and show where time is spent internally and over the JSON-RPC interface."}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://wiki.hyperledger.org/display/BESU/2021-01-19+Office+Hours+Notes",children:"This office hours recording"})," shows examples of monitoring Hyperledger Besu."]})]}),"\n",(0,r.jsx)(t.h2,{id:"install-opentelemetry-collector",children:"Install OpenTelemetry Collector"}),"\n",(0,r.jsxs)(t.p,{children:["Download and install the ",(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/releases",children:"OpenTelemetry Collector"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"You can also install exporters that send system metrics to OpenTelemetry to monitor non-Besu-specific items such as disk and CPU usage. The OpenTelemetry Collector can connect to additional applications, and may be deployed in Kubernetes environments as a daemonset."})}),"\n",(0,r.jsx)(t.h2,{id:"setting-up-and-running-opentelemetry-with-besu",children:"Setting up and running OpenTelemetry with Besu"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Configure OpenTelemetry to accept data from Besu. For example, use the following configuration for your ",(0,r.jsx)(t.code,{children:"otel-collector-config.yml"})," file, and send data to Splunk and Splunk APM:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",metastring:'title="otel-collector-config.yml"',children:'receivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nexporters:\n  splunk_hec/traces:\n    # Splunk HTTP Event Collector token.\n    token: "11111111-1111-1111-1111-1111111111113"\n    # URL to a Splunk instance to send data to.\n    endpoint: "https://<SPLUNK INSTANCE>:8088/services/collector"\n    # Optional Splunk source: https://docs.splunk.com/Splexicon:Source\n    source: "besu:traces"\n    # Optional Splunk source type: https://docs.splunk.com/Splexicon:Sourcetype\n    sourcetype: "otlp"\n    # Splunk index, optional name of the Splunk index targeted.\n    index: "traces"\n    # Maximum HTTP connections to use simultaneously when sending data. Defaults to 100.\n    max_connections: 20\n    # Whether to disable gzip compression over HTTP. Defaults to false.\n    disable_compression: false\n    # HTTP timeout when sending data. Defaults to 10s.\n    timeout: 10s\n    # Whether to skip checking the certificate of the HEC endpoint when sending data over HTTPS. Defaults to false.\n    # For this demo, we use a self-signed certificate on the Splunk docker instance, so this flag is set to true.\n    insecure_skip_verify: true\n  splunk_hec/metrics:\n    # Splunk HTTP Event Collector token.\n    token: "11111111-1111-1111-1111-1111111111113"\n    # URL to a Splunk instance to send data to.\n    endpoint: "https://<SPLUNK INSTANCE>:8088/services/collector"\n    # Optional Splunk source: https://docs.splunk.com/Splexicon:Source\n    source: "besu:metrics"\n    # Optional Splunk source type: https://docs.splunk.com/Splexicon:Sourcetype\n    sourcetype: "prometheus"\n    # Splunk index, optional name of the Splunk index targeted.\n    index: "metrics"\n    # Maximum HTTP connections to use simultaneously when sending data. Defaults to 100.\n    max_connections: 20\n    # Whether to disable gzip compression over HTTP. Defaults to false.\n    disable_compression: false\n    # HTTP timeout when sending data. Defaults to 10s.\n    timeout: 10s\n    # Whether to skip checking the certificate of the HEC endpoint when sending data over HTTPS. Defaults to false.\n    # For this demo, we use a self-signed certificate on the Splunk docker instance, so this flag is set to true.\n    insecure_skip_verify: true\n  # Traces\n  sapm:\n    access_token: "${SPLUNK_ACCESS_TOKEN}"\n    endpoint: "https://ingest.${SPLUNK_REALM}.signalfx.com/v2/trace"\n  # Metrics + Events\n  signalfx:\n    access_token: "${SPLUNK_ACCESS_TOKEN}"\n    realm: "${SPLUNK_REALM}"\n\nprocessors:\n  batch:\n\nextensions:\n  health_check:\n  pprof:\n  zpages:\n\nservice:\n  extensions: [pprof, zpages, health_check]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      exporters: [splunk_hec/traces, sapm]\n      processors: [batch]\n    metrics:\n      receivers: [otlp]\n      exporters: [splunk_hec/metrics, signalfx]\n      processors: [batch]\n'})}),"\n",(0,r.jsx)(t.p,{children:"It is easiest to run the OpenTelemetry collector with Docker with the following command:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker run -d \\\n  -v ./otel-collector-config.yml:/etc/otel/config.yaml \\\n  -e SPLUNK_ACCESS_TOKEN=<access token> \\\n  -e SPLUNK_REALM=<realm> \\\n  -p 4317:4317 \\\n  otel/opentelemetry-collector-contrib:latest\n"})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker run -d \\\n  -v ./otel-collector-config.yml:/etc/otel/config.yaml \\\n  -e SPLUNK_ACCESS_TOKEN=abcdefg654 \\\n  -e SPLUNK_REALM=us1 \\\n  -p 4317:4317 \\\n  otel/opentelemetry-collector-contrib:latest\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["You can also refer to this ",(0,r.jsx)(t.a,{href:"https://github.com/splunk/splunk-connect-for-ethereum/blob/989dc2ccae7d8235bf3ce2a83a18cf0cd1713294/examples/besu-sync/full-sync/docker-compose.yaml",children:"Docker-compose example"}),"."]}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Start Besu with the ",(0,r.jsx)(t.a,{href:"/23.10.2/public-networks/reference/cli/options#metrics-enabled",children:(0,r.jsx)(t.code,{children:"--metrics-enabled"})})," and ",(0,r.jsx)(t.a,{href:"/23.10.2/public-networks/reference/cli/options#metrics-protocol",children:(0,r.jsx)(t.code,{children:"--metrics-protocol=opentelemetry"})})," options. For example, run the following command to start a single node:"]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"Syntax",label:"Syntax",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'OTEL_EXPORTER_OTLP_ENDPOINT=https://<host>:<port> besu --network=dev --miner-enabled --miner-coinbase <COINBASE ADDRESS> --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled --metrics-protocol=opentelemetry\n'})})}),(0,r.jsx)(l.Z,{value:"Example",label:"Example",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'OTEL_EXPORTER_OTLP_ENDPOINT=https://localhost:4317 besu --network=dev --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled --metrics-protocol=opentelemetry\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/8f7cdb73618a0b3afa9532b8f8103d719e352781/specification/sdk-environment-variables.md",children:"OpenTelemetry SDK"})," mandates how to configure the OpenTelemetry gRPC client, so data flows to the collector from Besu."]}),"\n",(0,r.jsx)(t.p,{children:"You can use the following environment variables:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OTEL_EXPORTER_OTLP_ENDPOINT"}),(0,r.jsxs)(t.td,{children:["OpenTelemetry Collector endpoint, of the form ",(0,r.jsx)(t.code,{children:"https://host:port"}),". The default value is ",(0,r.jsx)(t.code,{children:"https://localhost:4317"})]}),(0,r.jsx)(t.td,{children:"Yes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OTEL_EXPORTER_OTLP_INSECURE"}),(0,r.jsx)(t.td,{children:"Whether to allow insecure connections for OpenTelemetry data. False by default."}),(0,r.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"*[APM]: Application Performance Monitoring"})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const o={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),o=n(36905),s=n(12466),l=n(16550),a=n(20469),i=n(91980),c=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),x=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),o=a[n].value;o!==r&&(c(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function T(e){const t=(0,b.Z)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var r=n(67294);const o={},s=r.createContext(o);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);