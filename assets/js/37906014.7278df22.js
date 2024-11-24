"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5407],{92586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),o=t(11470),a=t(19365);const i={title:"Run Besu from Docker image",description:"Run Besu using the official docker image",sidebar_position:2,tags:["private networks"]},l="Run Besu from a Docker image",c={id:"private-networks/get-started/install/run-docker-image",title:"Run Besu from Docker image",description:"Run Besu using the official docker image",source:"@site/docs/private-networks/get-started/install/run-docker-image.md",sourceDirName:"private-networks/get-started/install",slug:"/private-networks/get-started/install/run-docker-image",permalink:"/private-networks/get-started/install/run-docker-image",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/get-started/install/run-docker-image.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1732480796e3,sidebarPosition:2,frontMatter:{title:"Run Besu from Docker image",description:"Run Besu using the official docker image",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Installation options",permalink:"/private-networks/get-started/install/"},next:{title:"Install binary distribution",permalink:"/private-networks/get-started/install/binary-distribution"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Expose ports",id:"expose-ports",level:2},{value:"Start Besu",id:"start-besu",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:3},{value:"Stop Besu and clean up resources",id:"stop-besu-and-clean-up-resources",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"run-besu-from-a-docker-image",children:"Run Besu from a Docker image"})}),"\n",(0,r.jsx)(n.p,{children:"Besu provides a Docker image to run a Besu node in a Docker container."}),"\n",(0,r.jsx)(n.p,{children:"Use this Docker image to run a single Besu node without installing Besu."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"Docker"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"MacOS or Linux"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"The Docker image does not run on Windows."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"expose-ports",children:"Expose ports"}),"\n",(0,r.jsxs)(n.p,{children:["Expose ports for P2P discovery, GraphQL, metrics, and HTTP and WebSocket JSON-RPC. You need to expose the ports to use the default ports or the ports specified using ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})}),", ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})}),", ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-ws-port",children:(0,r.jsx)(n.code,{children:"--rpc-ws-port"})}),", ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-port",children:(0,r.jsx)(n.code,{children:"--metrics-port"})}),", ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#graphql-http-port",children:(0,r.jsx)(n.code,{children:"--graphql-http-port"})}),", and ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-push-port",children:(0,r.jsx)(n.code,{children:"--metrics-push-port"})})," options."]}),"\n",(0,r.jsx)(n.p,{children:"To run Besu exposing local ports for access:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -p <localportJSON-RPC>:8545 -p <localportWS>:8546 -p <localportP2P>:30303 hyperledger/besu:latest --rpc-http-enabled --rpc-ws-enabled\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["The examples on this page expose TCP ports only. To expose UDP ports, specify ",(0,r.jsx)(n.code,{children:"/udp"})," at the end of the argument for the ",(0,r.jsx)(n.code,{children:"-p"})," Docker subcommand option:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -p <port>:<port>/udp\n"})}),(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsxs)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose",children:[(0,r.jsx)(n.code,{children:"docker run -p"})," documentation"]}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["To enable JSON-RPC HTTP calls to ",(0,r.jsx)(n.code,{children:"127.0.0.1:8545"})," and P2P discovery on ",(0,r.jsx)(n.code,{children:"127.0.0.1:13001"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -p 8545:8545 -p 13001:30303 hyperledger/besu:latest --rpc-http-enabled\n"})}),"\n",(0,r.jsx)(n.h2,{id:"start-besu",children:"Start Besu"}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsxs)(n.p,{children:["Don't mount a volume at the default data path (",(0,r.jsx)(n.code,{children:"/opt/besu"}),"). Mounting a volume at the default data path interferes with the operation of Besu and prevents Besu from safely launching."]}),(0,r.jsxs)(n.p,{children:["To run a node that maintains the node state (key and database), ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," must be set to a location other than ",(0,r.jsx)(n.code,{children:"/opt/besu"})," and a storage volume mounted at that location."]}),(0,r.jsxs)(n.p,{children:["When running in a Docker container, ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/connect/specify-nat",children:(0,r.jsx)(n.code,{children:"--nat-method"})})," must be set to ",(0,r.jsx)(n.code,{children:"DOCKER"})," or ",(0,r.jsx)(n.code,{children:"AUTO"})," (default). Don't set ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/connect/specify-nat",children:(0,r.jsx)(n.code,{children:"--nat-method"})})," to ",(0,r.jsx)(n.code,{children:"NONE"})," or ",(0,r.jsx)(n.code,{children:"UPNP"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can specify ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#specify-options",children:"Besu environment variables"})," with the Docker image instead of the command line options."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"Holesky",label:"Holesky",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -p 30303:30303 -p 8545:8545 -e BESU_RPC_HTTP_ENABLED=true -e BESU_NETWORK=holesky hyperledger/besu:latest\n"})})}),(0,r.jsx)(a.A,{value:"Ephemery",label:"Ephemery",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -p 30303:30303 -p 8545:8545 -e BESU_RPC_HTTP_ENABLED=true -e BESU_NETWORK=ephemery hyperledger/besu:latest\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{title:'"Unsupported address type exception"',type:"caution",children:[(0,r.jsx)(n.p,{children:"When running Besu from a Docker image, you might get the following exception:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Unsupported address type exception when connecting to peer {}, this is likely due to ipv6 not being enabled at runtime.\n"})}),(0,r.jsx)(n.p,{children:"This happens when the IPv6 support in Docker is disabled while connecting to an IPv6 peer, preventing outbound communication. IPv6 is disabled by default in Docker."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.docker.com/config/daemon/ipv6/",children:"Enable IPv6 support in Docker"})," to allow outbound IPv6 traffic and allow connection with IPv6 peers."]})]}),"\n",(0,r.jsx)(n.h3,{id:"run-a-node-for-testing",children:"Run a node for testing"}),"\n",(0,r.jsx)(n.p,{children:"To run a node that mines blocks at a rate suitable for testing purposes with WebSocket enabled:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -p 8546:8546 --mount type=bind,source=/<myvolume/besu/testnode>,target=/var/lib/besu hyperledger/besu:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-ws-enabled --network=dev --data-path=/var/lib/besu\n"})}),"\n",(0,r.jsx)(n.h2,{id:"stop-besu-and-clean-up-resources",children:"Stop Besu and clean up resources"}),"\n",(0,r.jsxs)(n.p,{children:["When done running nodes, you can shut down the node container without deleting resources or you can delete the container after stopping it. Run ",(0,r.jsx)(n.code,{children:"docker container ls"})," and ",(0,r.jsx)(n.code,{children:"docker volume ls"})," to get the container and volume names."]}),"\n",(0,r.jsx)(n.p,{children:"To stop a container:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker stop <container-name>\n"})}),"\n",(0,r.jsx)(n.p,{children:"To delete a container:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker rm <container-name>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),o=t(23104),a=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),x=(()=>{const e=c??b;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);