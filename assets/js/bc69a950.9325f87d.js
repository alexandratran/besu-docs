"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[7044],{74198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),o=t(19365);const a={title:"Use metrics",sidebar_position:1,description:"Monitoring and metrics",tags:["public networks","private networks"]},l="Use metrics to monitor node performance",c={id:"public-networks/how-to/monitor/metrics",title:"Use metrics",description:"Monitoring and metrics",source:"@site/docs/public-networks/how-to/monitor/metrics.md",sourceDirName:"public-networks/how-to/monitor",slug:"/public-networks/how-to/monitor/metrics",permalink:"/public-networks/how-to/monitor/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/monitor/metrics.md",tags:[{inline:!0,label:"public networks",permalink:"/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1728060359e3,sidebarPosition:1,frontMatter:{title:"Use metrics",sidebar_position:1,description:"Monitoring and metrics",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Monitor Besu",permalink:"/public-networks/how-to/monitor/"},next:{title:"Understand metrics",permalink:"/public-networks/how-to/monitor/understand-metrics"}},h={},u=[{value:"Install Prometheus",id:"install-prometheus",level:2},{value:"Set up and run Prometheus with Besu",id:"set-up-and-run-prometheus-with-besu",level:2},{value:"Run Prometheus with Besu in push mode",id:"run-prometheus-with-besu-in-push-mode",level:2},{value:"View Prometheus graphical interface",id:"view-prometheus-graphical-interface",level:2},{value:"View the metrics list",id:"view-the-metrics-list",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"use-metrics-to-monitor-node-performance",children:"Use metrics to monitor node performance"})}),"\n",(0,r.jsxs)(n.p,{children:["To enable the ",(0,r.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," monitoring and alerting service to access Besu metrics, use the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-enabled",children:(0,r.jsx)(n.code,{children:"--metrics-enabled"})})," option. Use ",(0,r.jsx)(n.a,{href:"https://grafana.com/",children:"Grafana"})," to visualize the collected data. See the sample ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/16455-besu-full/",children:"Besu Full Grafana dashboard"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The Besu example networks have ",(0,r.jsx)(n.a,{href:"/private-networks/tutorials/quickstart#monitor-nodes-with-prometheus-and-grafana",children:"monitoring with Prometheus and Grafana configured"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Use Prometheus to monitor the number of blocks your Besu node is behind the chain head, and to alert you that your node is not keeping up with the chain head."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=7BuutRe0I28&feature=youtu.be",children:"This recording"})," shows examples of monitoring Besu."]}),"\n",(0,r.jsx)(n.h2,{id:"install-prometheus",children:"Install Prometheus"}),"\n",(0,r.jsxs)(n.p,{children:["To use Prometheus with Besu, install the ",(0,r.jsx)(n.a,{href:"https://prometheus.io/download/",children:"Prometheus main component"}),". On MacOS, install with ",(0,r.jsx)(n.a,{href:"https://formulae.brew.sh/formula/prometheus",children:"Homebrew"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew install prometheus\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"You can also install:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exporters that send system metrics to Prometheus to monitor non-Besu-specific items such as disk and CPU usage."}),"\n",(0,r.jsx)(n.li,{children:"Other Prometheus components, such as the Alert Manager. Additional configuration is not required for these components because Prometheus handles and analyzes data directly from the feed."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"set-up-and-run-prometheus-with-besu",children:"Set up and run Prometheus with Besu"}),"\n",(0,r.jsx)(n.p,{children:"To configure Prometheus and run with Besu:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configure Prometheus to poll Besu.\nFor example, add the following YAML fragment to the ",(0,r.jsx)(n.code,{children:"scrape_configs"})," block of the ",(0,r.jsx)(n.code,{children:"prometheus.yml"})," file:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"Fragment to insert in prometheus.yml",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"- job_name: besu\n  scrape_interval: 15s\n  scrape_timeout: 10s\n  metrics_path: /metrics\n  scheme: http\n  static_configs:\n    - targets:\n        - localhost:9545\n"})})}),(0,r.jsx)(o.A,{value:"Full prometheus.yml example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: "prometheus"\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: besu\n    scrape_interval: 15s\n    scrape_timeout: 10s\n    metrics_path: /metrics\n    scheme: http\n    static_configs:\n      - targets:\n          - localhost:9545\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Prometheus requires 3 MB of space per node per hour for metrics, with a ",(0,r.jsx)(n.code,{children:"scrape_interval"})," of 15 seconds."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start Besu with the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-enabled",children:(0,r.jsx)(n.code,{children:"--metrics-enabled"})})," option.\nTo start a single node for testing with metrics enabled, run the following command:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"Syntax",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --network=dev --miner-enabled --miner-coinbase <COINBASE ADDRESS> --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled\n'})})}),(0,r.jsx)(o.A,{value:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --network=dev --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["To specify the host and port on which Prometheus accesses Besu, use the\n",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-host",children:(0,r.jsx)(n.code,{children:"--metrics-host"})})," and\n",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-port",children:(0,r.jsx)(n.code,{children:"--metrics-port"})})," options.\nThe default host and port are ",(0,r.jsx)(n.code,{children:"127.0.0.1"})," (",(0,r.jsx)(n.code,{children:"localhost"}),") and ",(0,r.jsx)(n.code,{children:"9545"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["To avoid DNS rebinding attacks, if running Prometheus on a different host than your Besu node\n(any host other than ",(0,r.jsx)(n.code,{children:"localhost"}),"), add the hostname that Prometheus uses to\n",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})}),".\nFor example, if Prometheus is configured to get metrics from ",(0,r.jsx)(n.code,{children:"http://besu.local:8008/metrics"}),",\nthen ",(0,r.jsx)(n.code,{children:"besu.local"})," must be in ",(0,r.jsx)(n.code,{children:"--host-allowlist"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In another terminal, run Prometheus specifying the ",(0,r.jsx)(n.code,{children:"prometheus.yml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"prometheus --config.file=prometheus.yml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["View the ",(0,r.jsx)(n.a,{href:"#view-prometheus-graphical-interface",children:"Prometheus graphical interface"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Use a log ingestion tool, such as Logstash, to parse the logs and alert you to configured anomalies."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"run-prometheus-with-besu-in-push-mode",children:"Run Prometheus with Besu in push mode"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-enabled",children:(0,r.jsx)(n.code,{children:"--metrics-enabled"})})," option enables Prometheus\npolling of Besu, but sometimes metrics are hard to poll (for example, when running inside Docker\ncontainers with varying IP addresses).\nTo enable Besu to push metrics to a ",(0,r.jsx)(n.a,{href:"https://github.com/prometheus/pushgateway",children:"Prometheus push gateway"}),",\nuse the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-push-enabled",children:(0,r.jsx)(n.code,{children:"--metrics-push-enabled"})})," option."]}),"\n",(0,r.jsx)(n.p,{children:"To configure Prometheus and run with Besu pushing to a push gateway:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configure Prometheus to read from a push gateway.\nFor example, add the following YAML fragment to the ",(0,r.jsx)(n.code,{children:"scrape_configs"})," block of the ",(0,r.jsx)(n.code,{children:"prometheus.yml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"- job_name: push-gateway\n  metrics_path: /metrics\n  scheme: http\n  static_configs:\n    - targets:\n        - localhost:9091\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the push gateway.\nYou can deploy the push gateway using the Docker image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull prom/pushgateway\ndocker run -d -p 9091:9091 prom/pushgateway\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Start Besu specifying the ",(0,r.jsx)(n.code,{children:"--metrics-push-enabled"})," option and port of the push gateway:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"Syntax",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --network=dev --miner-enabled --miner-coinbase <COINBASE ADDRESS> --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-push-enabled --metrics-push-port=9091 --metrics-push-host=127.0.0.1\n'})})}),(0,r.jsx)(o.A,{value:"Example",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --network=dev --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-push-enabled --metrics-push-port=9091 --metrics-push-host=127.0.0.1\n'})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In another terminal, run Prometheus specifying the ",(0,r.jsx)(n.code,{children:"prometheus.yml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"prometheus --config.file=prometheus.yml\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["View the ",(0,r.jsx)(n.a,{href:"#view-prometheus-graphical-interface",children:"Prometheus graphical interface"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"view-prometheus-graphical-interface",children:"View Prometheus graphical interface"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open a Web browser to ",(0,r.jsx)(n.a,{href:"http://localhost:9090",children:(0,r.jsx)(n.code,{children:"http://localhost:9090"})})," to view the Prometheus graphical interface."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Choose ",(0,r.jsx)(n.strong,{children:"Graph"})," from the menu bar and click the ",(0,r.jsx)(n.strong,{children:"Console"})," tab below."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["From the ",(0,r.jsx)(n.strong,{children:"Insert metric at cursor"})," drop-down, select a ",(0,r.jsx)(n.a,{href:"#metrics-list",children:"metric"})," such as ",(0,r.jsx)(n.code,{children:"besu_blockchain_difficulty_total"})," or ",(0,r.jsx)(n.code,{children:"ethereum_blockchain_height"})," and click ",(0,r.jsx)(n.strong,{children:"Execute"}),". The values display."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Graph"})," tab to view the data as a time-based graph. The query string displays below the graph. For example, ",(0,r.jsx)(n.code,{children:'{ethereum_blockchain_height{instance="localhost:9545",job="prometheus"}'}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"view-the-metrics-list",children:"View the metrics list"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to view the full list of available metrics:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:9545/metrics\n"})}),"\n",(0,r.jsx)(n.p,{children:"Update the host and port if you are not using the default values."}),"\n",(0,r.jsxs)(n.p,{children:["Each metric, such as ",(0,r.jsx)(n.code,{children:"besu_blockchain_chain_head_gas_limit"}),", starts with a metric category prefix.\nMetrics specific to Besu use the ",(0,r.jsx)(n.code,{children:"besu_"})," prefix, followed by another metric category.\nYou can enable metric categories using the\n",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-category",children:(0,r.jsx)(n.code,{children:"--metrics-category"})})," command line option."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(18215),i=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),h=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,h.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),h=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==r&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:h,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(w,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);