"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[95131],{52217:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var o=r(85893),s=r(11151);const t={title:"Configure Kubernetes mode in NAT manager",sidebar_position:9,description:"Tutorial to configure Kubernetes mode for Hyperledger Besu Nat Manager",tags:["private networks"]},a="Configure Kubernetes mode in NAT Manager",i={id:"private-networks/tutorials/kubernetes/nat-manager",title:"Configure Kubernetes mode in NAT manager",description:"Tutorial to configure Kubernetes mode for Hyperledger Besu Nat Manager",source:"@site/versioned_docs/version-23.7.3/private-networks/tutorials/kubernetes/nat-manager.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/nat-manager",permalink:"/23.7.3/private-networks/tutorials/kubernetes/nat-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/tutorials/kubernetes/nat-manager.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1713464890,formattedLastUpdatedAt:"Apr 18, 2024",sidebarPosition:9,frontMatter:{title:"Configure Kubernetes mode in NAT manager",sidebar_position:9,description:"Tutorial to configure Kubernetes mode for Hyperledger Besu Nat Manager",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Production",permalink:"/23.7.3/private-networks/tutorials/kubernetes/production"},next:{title:"Deploy using Microsoft Azure",permalink:"/23.7.3/private-networks/tutorials/azure"}},l={},d=[{value:"Automatic configuration",id:"automatic-configuration",level:2},{value:"1. Create a load balancer",id:"1-create-a-load-balancer",level:3},{value:"2. Check if the load balancer is properly deployed",id:"2-check-if-the-load-balancer-is-properly-deployed",level:3},{value:"3. Deploy Besu",id:"3-deploy-besu",level:3},{value:"Automatic detection errors",id:"automatic-detection-errors",level:2},{value:"<code>Service not found</code> error message",id:"service-not-found-error-message",level:3},{value:"<code>Forbidden</code> error message",id:"forbidden-error-message",level:3},{value:"<code>Ingress not found</code> error message",id:"ingress-not-found-error-message",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure-kubernetes-mode-in-nat-manager",children:"Configure Kubernetes mode in NAT Manager"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#auto",children:(0,o.jsx)(n.code,{children:"--nat-method=AUTO"})})," or ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#kubernetes",children:(0,o.jsx)(n.code,{children:"--nat-method=KUBERNETES"})})," CLI options to let the Besu node automatically configure its IP address and ports."]}),"\n",(0,o.jsxs)(n.p,{children:["Use mode ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#none",children:(0,o.jsx)(n.code,{children:"--nat-method=NONE"})})," to be able to set your Besu ports and IP address manually."]}),"\n",(0,o.jsxs)(n.p,{children:["Default mode is ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#auto",children:(0,o.jsx)(n.code,{children:"AUTO"})})," but Besu will fallback to ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#none",children:(0,o.jsx)(n.code,{children:"NONE"})})," mode if automatic configuration fails."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.mdxAdmonitionTitle,{children:["The following log shows fallback to ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#none",children:(0,o.jsx)(n.code,{children:"NONE"})})," mode after an automatic detection failure."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"INFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"automatic-configuration",children:"Automatic configuration"}),"\n",(0,o.jsx)(n.p,{children:"Follow 3 steps to configure Besu for automatic IP address and ports detection on Kubernetes:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#1-create-a-load-balancer",children:"Create a load balancer"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#2-check-if-the-load-balancer-is-properly-deployed",children:"Check if the load balancer is properly deployed"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#3-deploy-besu",children:"Deploy Besu"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-create-a-load-balancer",children:"1. Create a load balancer"}),"\n",(0,o.jsxs)(n.p,{children:["Deploy a ",(0,o.jsx)(n.code,{children:"LoadBalancer"})," service for Besu to recover IP address and ports."]}),"\n",(0,o.jsx)(n.p,{children:"Here is an example that you can customize with your own ports and routing rules."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: "1.0.0"\n  name: besu\nspec:\n  ports:\n    - name: "json-rpc"\n      port: 8545\n      targetPort: 8545\n    - name: "rlpx"\n      port: 30303\n      targetPort: 30303\n  selector:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: "1.0.0"\n  type: LoadBalancer\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This service example lists the rules for the different ports used by Besu (",(0,o.jsx)(n.code,{children:"json-rpc"})," and",(0,o.jsx)(n.code,{children:" rlpx"}),"). The default value is used for ",(0,o.jsx)(n.code,{children:"discovery"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"2-check-if-the-load-balancer-is-properly-deployed",children:"2. Check if the load balancer is properly deployed"}),"\n",(0,o.jsx)(n.p,{children:"Verify the load balancer readiness before launching Besu."}),"\n",(0,o.jsxs)(n.p,{children:["Run ",(0,o.jsx)(n.code,{children:"kubectl describe services besu"})," to check the service status."]}),"\n",(0,o.jsx)(n.p,{children:"The command should display the following information:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'Name:                     besu\nNamespace:                default\nLabels:                   app.kubernetes.io/name=besu\n                          app.kubernetes.io/release=1.0.0\nAnnotations:              kubectl.kubernetes.io/last-applied-configuration:\n                            {"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"app.kubernetes.io/name":"besu","app.kubernetes.io/release":"1....\nSelector:                 app.kubernetes.io/name=besu,app.kubernetes.io/release=1.0.0\nType:                     LoadBalancer\nIP:                       --------\nLoadBalancer Ingress:     ***<IP>***\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The load balancer must have an IP address displayed in place of ",(0,o.jsx)(n.code,{children:"***<IP>***"})," on the ",(0,o.jsx)(n.code,{children:"LoadBalancer Ingress"})," line to be ready."]}),"\n",(0,o.jsxs)(n.p,{children:["Run the ",(0,o.jsx)(n.code,{children:"kubectl describe services besu"})," command again until the load balancer IP address appears in the output."]}),"\n",(0,o.jsx)(n.h3,{id:"3-deploy-besu",children:"3. Deploy Besu"}),"\n",(0,o.jsx)(n.p,{children:"When steps 1 and 2 are completed, deploy Besu using the following YAML example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: besu-config\n  labels:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: 1.0.0\ndata:\n  BESU_LOGGING: "INFO"\n  BESU_NETWORK: "dev"\n  BESU_P2P_ENABLED: "true"\n  BESU_RPC_HTTP_ENABLED: "true"\n  BESU_RPC_HTTP_APIS: "eth,net,web3,debug,admin"\n  KUBE_CONFIG_PATH: "/opt/besu/shared/kube-config"\n---\napiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: besu\n  labels:\n    app.kubernetes.io/name: besu\n    app.kubernetes.io/release: "1.0.0"\nspec:\n  replicas: 1\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app.kubernetes.io/name: besu\n        app.kubernetes.io/release: "1.0.0"\n    spec:\n      containers:\n        - name: besu\n          image: "hyperledger/besu:latest"\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8545\n            - containerPort: 30303\n          envFrom:\n            - configMapRef:\n                name: besu-config\n      restartPolicy: Always\nstatus: {}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"automatic-detection-errors",children:"Automatic detection errors"}),"\n",(0,o.jsxs)(n.admonition,{type:"danger",children:[(0,o.jsx)(n.p,{children:"Automatic detection error messages do not prevent you to use Besu."}),(0,o.jsxs)(n.p,{children:["Try the fix indicated for each error or use ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#kubernetes",children:(0,o.jsx)(n.code,{children:"--nat-method=KUBERNETES"})})," CLI option and ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/configure-ports",children:"set IP address and port manually"}),"."]})]}),"\n",(0,o.jsx)(n.p,{children:"Possible errors messages for Kubernetes automatic detection failure:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#service-not-found-error-message",children:(0,o.jsx)(n.code,{children:"Service not found"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#forbidden-error-message",children:(0,o.jsx)(n.code,{children:"Forbidden"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#ingress-not-found-error-message",children:(0,o.jsx)(n.code,{children:"Ingress not found"})})}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"service-not-found-error-message",children:[(0,o.jsx)(n.code,{children:"Service not found"})," error message"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error message:"})," ",(0,o.jsx)(n.code,{children:"Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cause:"})," load balancer did start correctly or has the incorrect name."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Fix:"})," check and modify load balancer YAML configuration and restart service."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Example error log",type:"info",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"INFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n"})})}),"\n",(0,o.jsxs)(n.h3,{id:"forbidden-error-message",children:[(0,o.jsx)(n.code,{children:"Forbidden"})," error message"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Error message:"})," ",(0,o.jsx)(n.code,{children:"Nat manager failed to configure itself automatically due to the following reason Forbidden. NONE mode will be used"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Cause:"})," Besu don't have permission to list the services via the Kubernetes API to retrieve IP address and ports from the load balancer."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Fix:"})," Give it the required permissions using ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"Role-based access control"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you can't manage permissions, define the IP address and ports manually with ",(0,o.jsx)(n.a,{href:"/23.7.3/public-networks/how-to/connect/specify-nat#none",children:(0,o.jsx)(n.code,{children:"NONE"})})," mode"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Example error log",type:"info",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"INFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Forbidden. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n"})})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["For development environment, the permission issue can be fixed by running ",(0,o.jsx)(n.code,{children:"kubectl create clusterrolebinding myapp-view-binding --clusterrole=admin --serviceaccount=default:default"})]}),(0,o.jsx)(n.p,{children:"This command should only be used on development environment and not in production environment."}),(0,o.jsxs)(n.p,{children:["In production environment, require a finer management of permissions using Kubernetes ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"Role-based access control"}),"."]})]}),"\n",(0,o.jsxs)(n.h3,{id:"ingress-not-found-error-message",children:[(0,o.jsx)(n.code,{children:"Ingress not found"})," error message"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Error message:"})," ",(0,o.jsx)(n.code,{children:"Nat manager failed to configure itself automatically due to the following reason Ingress not found. NONE mode will be used"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Cause:"})," Load balancer did not finish to recover an IP address."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Fix:"})," ",(0,o.jsx)(n.a,{href:"#2-check-if-the-load-balancer-is-properly-deployed",children:"Check that the load balancer is properly deployed"})," before launching Besu."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Example error log",type:"info",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"INFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Ingress not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n"})})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var o=r(67294);const s={},t=o.createContext(s);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);