"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[1055],{44303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(74848),o=t(28453);t(11470),t(19365);const i={sidebar_position:4,description:"Configure Ethereum nodes using AWS Blockchain Node Runners.",toc_max_heading_level:3,tags:["Public networks"]},r="Deploy AWS Node Runners",a={id:"public-networks/tutorials/aws-node-runners",title:"Deploy AWS Node Runners",description:"Configure Ethereum nodes using AWS Blockchain Node Runners.",source:"@site/docs/public-networks/tutorials/aws-node-runners.md",sourceDirName:"public-networks/tutorials",slug:"/public-networks/tutorials/aws-node-runners",permalink:"/public-networks/tutorials/aws-node-runners",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/tutorials/aws-node-runners.md",tags:[{inline:!0,label:"Public networks",permalink:"/tags/public-networks"}],version:"current",lastUpdatedAt:1739991247e3,sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Configure Ethereum nodes using AWS Blockchain Node Runners.",toc_max_heading_level:3,tags:["Public networks"]},sidebar:"publicDocSidebar",previous:{title:"Deploy Besu using Kubernetes",permalink:"/public-networks/tutorials/kubernetes"},next:{title:"Reference",permalink:"/public-networks/reference"}},l={},c=[{value:"Architecture",id:"architecture",level:2},{value:"Single RPC node setup",id:"single-rpc-node-setup",level:3},{value:"Highly available setup",id:"highly-available-setup",level:3},{value:"Architecture checklist",id:"architecture-checklist",level:3},{value:"Deploy Besu and Teku on AWS",id:"deploy-besu-and-teku-on-aws",level:2},{value:"1. Configure the AWS CloudShell",id:"1-configure-the-aws-cloudshell",level:3},{value:"1.1. Log into AWS",id:"11-log-into-aws",level:4},{value:"1.2. Install dependencies",id:"12-install-dependencies",level:4},{value:"2. Prepare to deploy nodes",id:"2-prepare-to-deploy-nodes",level:3},{value:"3. Deploy  nodes",id:"3-deploy--nodes",level:3},{value:"3.1. (Option 1) Single RPC node",id:"31-option-1-single-rpc-node",level:4},{value:"3.2. (Option 2) Highly available RPC nodes",id:"32-option-2-highly-available-rpc-nodes",level:4},{value:"4. Clear and undeploy nodes",id:"4-clear-and-undeploy-nodes",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploy-aws-node-runners",children:"Deploy AWS Node Runners"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://aws-samples.github.io/aws-blockchain-node-runners/docs/intro",children:"AWS Blockchain Node Runners"}),"\nis an open-source initiative aimed at simplifying the deployment of self-managed blockchain nodes\non AWS using vetted deployment blueprints and infrastructure configurations.\nAWS Node Runners solves common challenges in architecting and deploying blockchain nodes on AWS,\nhelping users identify optimal configurations for specific protocol clients."]}),"\n",(0,s.jsxs)(n.p,{children:["This page walks you through the AWS Node Runners ",(0,s.jsx)(n.a,{href:"#architecture",children:"architecture"}),", and how to\n",(0,s.jsx)(n.a,{href:"#deploy-aws-node-runners",children:"deploy Besu and Teku on AWS"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.p,{children:"AWS Blockchain Node Runners supports several Ethereum client combinations and offers two\nconfiguration options: a single node setup for development environments, and a highly available\nmulti-node setup for production environments.\nThe following diagrams illustrate the high level architecture of these setups."}),"\n",(0,s.jsx)(n.h3,{id:"single-rpc-node-setup",children:"Single RPC node setup"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Architecture-PoC",src:t(76107).A+"",width:"1131",height:"631"})})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"This single node setup is for small-scale development environments.\nIt deploys a single EC2 instance with both consensus and execution clients.\nThe RPC port is exposed only to the internal IP range of the VPC, while P2P ports allow external access to keep the clients synced."}),"\n",(0,s.jsx)(n.h3,{id:"highly-available-setup",children:"Highly available setup"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Architecture",src:t(94352).A+"",width:"591",height:"411"})})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"In this highly available, multiple node setup:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The sync node synchronizes data continuously with the Ethereum network."}),"\n",(0,s.jsx)(n.li,{children:"The sync node copies node state data to an Amazon S3 bucket."}),"\n",(0,s.jsx)(n.li,{children:"New RPC nodes copy state data from the Amazon S3 bucket to accelerate their initial sync."}),"\n",(0,s.jsx)(n.li,{children:"The Application Load Balancer routes application and smart contract development tool requests to available RPC nodes."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"architecture-checklist",children:"Architecture checklist"}),"\n",(0,s.jsxs)(n.p,{children:["The following is a checklist for an implementation of the AWS Blockchain Node Runners.\nThis checklist takes into account questions from the ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/architecture/well-architected/",children:"AWS Well-Architected framework"}),"\nthat are relevant to this workload.\nYou can add more checks from the framework if required for your workload."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Pillar"}),(0,s.jsx)("th",{children:"Control"}),(0,s.jsx)("th",{children:"Question/Check"}),(0,s.jsx)("th",{children:"Notes"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"10",align:"center",children:(0,s.jsx)("b",{children:"Security"})}),(0,s.jsx)("td",{rowspan:"2",align:"center",children:"Network protection"}),(0,s.jsx)("td",{children:"Are there unnecessary open ports in security groups?"}),(0,s.jsxs)("td",{children:["The Erigon snap sync port (",(0,s.jsx)(n.code,{children:"42069"}),") remains open for non-Erigon clients."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Traffic inspection"}),(0,s.jsx)("td",{children:"AWS WAF can be implemented for traffic inspection. Additional charges will apply."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",align:"center",children:"Compute protection"}),(0,s.jsx)("td",{children:"Reduce attack surface"}),(0,s.jsx)("td",{children:"This solution uses Amazon Linux 2 AMI. You can run hardening scripts on it."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Enable users to perform actions at a distance"}),(0,s.jsx)("td",{children:"This solution uses AWS Systems Manager for terminal sessions, not SSH ports."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",align:"center",children:"Data protection at rest"}),(0,s.jsx)("td",{children:"Use encrypted Amazon Elastic Block Store (Amazon EBS) volumes"}),(0,s.jsx)("td",{children:"This solution uses encrypted Amazon EBS volumes."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Use encrypted Amazon Simple Storage Service (Amazon S3) buckets"}),(0,s.jsx)("td",{children:"This solution uses Amazon S3 managed keys (SSE-S3) encryption."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{align:"center",children:"Data protection in transit"}),(0,s.jsx)("td",{children:"Use TLS"}),(0,s.jsx)("td",{children:"The AWS Application Load Balancer currently uses an HTTP listener. To use TLS, create an HTTPS listener with a self-signed certificate."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",align:"center",children:"Authorization and access control"}),(0,s.jsx)("td",{children:"Use instance profile with Amazon Elastic Compute Cloud (Amazon EC2) instances"}),(0,s.jsx)("td",{children:"This solution uses AWS Identity and Access Management (AWS IAM) role instead of IAM user."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Follow the principle of least privilege access"}),(0,s.jsxs)("td",{children:["In the sync node, the root user is not used (it uses the special user ",(0,s.jsx)(n.code,{children:"ethereum"})," instead)."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{align:"center",children:"Application security"}),(0,s.jsx)("td",{children:"Security-focused development practices"}),(0,s.jsx)("td",{children:"cdk-nag is used with appropriate suppressions."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"2",align:"center",children:(0,s.jsx)("b",{children:"Cost optimization"})}),(0,s.jsx)("td",{colspan:"2",align:"center",children:"Use cost-effective resources"}),(0,s.jsx)("td",{children:"AWS Graviton-based Amazon EC2 instances are used, which are cost-effective compared to Intel/AMD instances."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",align:"center",children:"Estimate costs"}),(0,s.jsx)("td",{children:"One sync node with m7g.2xlarge for geth-Lighthouse configuration (2048 GB SSD) will cost around $430 per month in the US East region. Additional charges apply if you deploy RPC nodes with a load balancer."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"3",align:"center",children:(0,s.jsx)("b",{children:"Reliability"})}),(0,s.jsx)("td",{colspan:"2",align:"center",children:"Withstand component failures"}),(0,s.jsx)("td",{children:"This solution uses AWS Application Load Balancer with RPC nodes for high availability. If the sync node fails, Amazon S3 backup can be used to reinstate the nodes."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",align:"center",children:"How is data backed up?"}),(0,s.jsxs)("td",{children:["Data is backed up to Amazon S3 using the ",(0,s.jsx)("a",{href:"https://github.com/peak/s5cmd",children:"s5cmd"})," tool."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",align:"center",children:"How are workload resources monitored?"}),(0,s.jsx)("td",{children:"Resources are monitored using Amazon CloudWatch dashboards. Amazon CloudWatch custom metrics are pushed through CloudWatch Agent."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"3",align:"center",children:(0,s.jsx)("b",{children:"Performance efficiency"})}),(0,s.jsx)("td",{colspan:"2",align:"center",children:"How is the compute solution selected?"}),(0,s.jsx)("td",{children:"The solution is selected based on best price-performance, that is, AWS Graviton-based Amazon EC2 instances."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",align:"center",children:"How is the storage solution selected?"}),(0,s.jsx)("td",{children:"The solution is selected based on best price-performance, that is, gp3 Amazon EBS volumes with optimal IOPS and throughput."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",align:"center",children:"How is the architecture selected?"}),(0,s.jsx)("td",{children:"The s5cmd tool is used for Amazon S3 uploads/downloads because it gives better price-performance compared to Amazon EBS snapshots."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{align:"center",children:(0,s.jsx)("b",{children:"Operational excellence"})}),(0,s.jsx)("td",{colspan:"2",align:"center",children:"How is health of the workload determined?"}),(0,s.jsxs)("td",{children:["Workload health is determined via AWS Application Load Balancer Target Group Health Checks, on port ",(0,s.jsx)(n.code,{children:"8545"}),"."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{align:"center",children:(0,s.jsx)("b",{children:"Sustainability"})}),(0,s.jsx)("td",{colspan:"2",align:"center",children:"Select the most efficient hardware for your workload"}),(0,s.jsx)("td",{children:"This solution uses AWS Graviton-based Amazon EC2 instances, which offer the best performance per watt of energy use in Amazon EC2."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-besu-and-teku-on-aws",children:"Deploy Besu and Teku on AWS"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In this guide, you'll set all major configuration through environment variables, but you can also\nmodify parameters in the ",(0,s.jsx)(n.code,{children:"config/config.ts"})," file."]})}),"\n",(0,s.jsx)(n.h3,{id:"1-configure-the-aws-cloudshell",children:"1. Configure the AWS CloudShell"}),"\n",(0,s.jsx)(n.h4,{id:"11-log-into-aws",children:"1.1. Log into AWS"}),"\n",(0,s.jsxs)(n.p,{children:["Log in to your ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS account"})," with permissions to create and modify\nresources in IAM, EC2, EBS, VPC, S3, KMS, and Secrets Manager.\nFrom the AWS Management Console, open the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/welcome.html",children:"AWS CloudShell"}),",\na web-based shell environment.\nFor more information, see ",(0,s.jsx)(n.a,{href:"https://youtu.be/fz4rbjRaiQM",children:"this demo"})," on\n",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell with VPC environment"}),",\nwhich you'll use to test APIs from an internal IP address space."]}),"\n",(0,s.jsx)(n.h4,{id:"12-install-dependencies",children:"1.2. Install dependencies"}),"\n",(0,s.jsx)(n.p,{children:"To deploy and test blueprints in the CloudShell, clone the following repository and install dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/aws-samples/aws-blockchain-node-runners.git\ncd aws-blockchain-node-runners\nnpm install\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-prepare-to-deploy-nodes",children:"2. Prepare to deploy nodes"}),"\n",(0,s.jsx)(n.p,{children:"In the root directory of your project:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If you have deleted or don't have the default VPC, create a default VPC:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aws ec2 create-default-vpc\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"You might see the following error if the default VPC already exists:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"An error occurred (DefaultVpcAlreadyExists) when calling the CreateDefaultVpc operation: A Default VPC already exists for this account in this region.\n"})}),(0,s.jsxs)(n.p,{children:["This means that the default VPC must have at least two public subnets in different availability\nzones, and public subnet must set ",(0,s.jsx)(n.code,{children:"Auto-assign public IPv4 address"})," to ",(0,s.jsx)(n.code,{children:"YES"}),"."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure your Node Runners Ethereum blueprint deployment.\nTo specify the Ethereum client combination you want to deploy, create your own copy of the ",(0,s.jsx)(n.code,{children:".env"}),"\nfile and edit it using your preferred text editor.\nThe following example uses a sample configuration from the repository for a Besu and Teku node deployment:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Ensure you're in aws-blockchain-node-runners/lib/ethereum\ncd lib/ethereum\npwd\ncp ./sample-configs/.env-besu-teku .env\nnano .env\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can find more examples for other Ethereum client combinations in the ",(0,s.jsx)(n.code,{children:"sample-configs"})," directory."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy common components, such as IAM role and Amazon S3 bucket to store data snapshots:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pwd\n# Ensure you're in aws-blockchain-node-runners/lib/ethereum\nnpx cdk deploy eth-common\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-deploy--nodes",children:"3. Deploy  nodes"}),"\n",(0,s.jsx)(n.p,{children:"Deploy your node or nodes, depending on your setup:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#31-option-1-single-rpc-node",children:"Single RPC node"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#32-option-2-highly-available-rpc-nodes",children:"Highly available RPC nodes"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"31-option-1-single-rpc-node",children:"3.1. (Option 1) Single RPC node"}),"\n",(0,s.jsx)(n.p,{children:"In a single RPC node setup:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy the node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pwd\n# Ensure you're in aws-blockchain-node-runners/lib/ethereum\nnpx cdk deploy eth-single-node --json --outputs-file single-node-deploy.json\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The default VPC must have at least two public subnets in different Availability Zones, and the\npublic subnets must set ",(0,s.jsx)(n.code,{children:"Auto-assign public IPv4 address"})," to ",(0,s.jsx)(n.code,{children:"YES"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After starting the node, wait for the initial synchronization process to finish.\nIt can take half a day to approximately 6-10 days, depending on the client combination and\nthe network state.\nYou can use Amazon CloudWatch to track the progress, which publishes metrics every five minutes.\nWatch ",(0,s.jsx)(n.code,{children:"sync distance"})," for the consensus client, and ",(0,s.jsx)(n.code,{children:"blocks behind"})," for the execution client.\nWhen the node is fully synced, those two metrics should be ",(0,s.jsx)(n.code,{children:"0"}),".\nTo see them:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudwatch/",children:"CloudWatch service"})," (ensure you're\nin the region you specified for ",(0,s.jsx)(n.code,{children:"AWS_REGION"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsx)(n.code,{children:"Dashboards"})," and select ",(0,s.jsx)(n.code,{children:"eth-sync-node-<your-eth-client-combination>"})," from the list of dashboards."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once the initial synchronization is done, you can access the RPC API of that node from within the\nsame VPC.\nThe RPC port is not exposed to the Internet.\nRun the following query against the private IP of the single RPC node you deployed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"INSTANCE_ID=$(cat single-node-deploy.json | jq -r '..|.node-instance-id? | select(. != null)')\nNODE_INTERNAL_IP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --query 'Reservations[*].Instances[*].PrivateIpAddress' --output text)\necho \"NODE_INTERNAL_IP=$NODE_INTERNAL_IP\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the output from the last ",(0,s.jsx)(n.code,{children:"echo"})," command with ",(0,s.jsx)(n.code,{children:"NODE_INTERNAL_IP=<internal_IP>"})," and open\n",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cloudshell/latest/userguide/creating-vpc-environment.html",children:"CloudShell tab with VPC environment"}),"\nto access the internal IP address space.\nPaste ",(0,s.jsx)(n.code,{children:"NODE_INTERNAL_IP=<internal_IP>"})," into the new CloudShell tab.\nThen, query the API:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# IMPORTANT: Run from CloudShell VPC environment tab\n# This queries the token balance of a Beacon deposit contract: https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa\ncurl http://$NODE_INTERNAL_IP:8545 -X POST -H "Content-Type: application/json" \\\n--data \'{"method":"eth_getBalance","params":["0x00000000219ab540356cBB839Cbe05303d7705Fa", "latest"],"id":1,"jsonrpc":"2.0"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"The result should look like the following (the actual balance might change):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{"jsonrpc":"2.0","id":1,"result":"0xe791d050f91d9949d344d"}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"32-option-2-highly-available-rpc-nodes",children:"3.2. (Option 2) Highly available RPC nodes"}),"\n",(0,s.jsx)(n.p,{children:"In a highly available multi-node setup:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Deploy the sync node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pwd\n# Ensure you're in aws-blockchain-node-runners/lib/ethereum\nnpx cdk deploy eth-sync-node --json --outputs-file sync-node-deploy.json\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The default VPC must have at least two public subnets in different Availability Zones, and the\npublic subnets must set ",(0,s.jsx)(n.code,{children:"Auto-assign public IPv4 address"})," to ",(0,s.jsx)(n.code,{children:"YES"}),"."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After starting the node, wait for the initial synchronization process to finish.\nIt can take from half a day to approximately 6-10 days, depending on the client combination and\nthe network state.\nYou can use Amazon CloudWatch to track the progress, which publishes metrics every five minutes.\nWatch ",(0,s.jsx)(n.code,{children:"sync distance"})," for the consensus client, and ",(0,s.jsx)(n.code,{children:"blocks behind"})," for the execution client.\nWhen the node is fully synced, those two metrics should be ",(0,s.jsx)(n.code,{children:"0"}),".\nTo see them:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudwatch/",children:"CloudWatch service"})," (make sure you are\nin the region you have specified for ",(0,s.jsx)(n.code,{children:"AWS_REGION"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsx)(n.code,{children:"Dashboards"})," and select ",(0,s.jsx)(n.code,{children:"eth-sync-node-<your-eth-client-combination>"})," from the list of dashboards."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once the synchronization process is over, the script automatically stops both clients and copies\nall the contents of the ",(0,s.jsx)(n.code,{children:"/data"})," directory to your snapshot S3 bucket.\nThat can take from 30 minutes to approximately 2 hours.\nDuring the process, you will see lower CPU and RAM usage, but high data disc throughput and\noutbound network traffic.\nThe script automatically starts the clients after the process is done."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The snapshot backup process automatically runs every day at midnight of the time zone were the\nsync node runs.\nTo change the schedule, modify ",(0,s.jsx)(n.code,{children:"crontab"})," of the root user on the node's EC2 instance."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure and deploy two RPC nodes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pwd\n# Ensure you're in aws-blockchain-node-runners/lib/ethereum\nnpx cdk deploy eth-rpc-nodes --json --outputs-file rpc-node-deploy.json\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Give the new RPC nodes approximately 30 minutes to initialize, then run the following query\nagainst the load balancer behind the RPC node created:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export ETH_RPC_ABL_URL=$(cat rpc-node-deploy.json | jq -r '..|.alburl? | select(. != null)')\necho ETH_RPC_ABL_URL=$ETH_RPC_ABL_URL\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# IMPORTANT: Run from CloudShell VPC environment tab\n# We query token balance of Beacon deposit contract: https://etherscan.io/address/0x00000000219ab540356cbb839cbe05303d7705fa\ncurl http://$ETH_RPC_ABL_URL:8545 -X POST -H "Content-Type: application/json" \\\n --data \'{"method":"eth_getBalance","params":["0x00000000219ab540356cBB839Cbe05303d7705Fa", "latest"],"id":1,"jsonrpc":"2.0"}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"The result should look like the following (the actual balance might change):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{"jsonrpc":"2.0","id":1,"result":"0xe791d050f91d9949d344d"}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If the nodes are still starting and catching up with the chain, you will see the following response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-HTML",children:"<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n</body>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"By default and for security reasons, the load balancer is available only from within the default\nVPC in the region where it is deployed.\nIt is not available from the Internet and is not open for external connections.\nBefore opening it up, protect your RPC APIs."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-clear-and-undeploy-nodes",children:"4. Clear and undeploy nodes"}),"\n",(0,s.jsx)(n.p,{children:"To clear and undeploy the RPC nodes, sync nodes, and common components, use the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Set the AWS account ID and region in case the local .env file is lost.\nexport AWS_ACCOUNT_ID=<your_target_AWS_account_id>\nexport AWS_REGION=<your_target_AWS_region>\n\npwd\n# Ensure you're in aws-blockchain-node-runners/lib/ethereum.\n\n# Destroy the single RPC node.\ncdk destroy eth-single-node\n\n# Destroy multiple RPC nodes.\ncdk destroy eth-rpc-nodes\n\n# Destroy the sync node.\ncdk destroy eth-sync-node\n\n# You need to manually delete an s3 bucket with a name similar to 'eth-snapshots-$accountid-eth-nodes-common'\n# on the console:\n#  1. Empty the bucket\n#  2. Delete the bucket\n#  3. Execute and delete all common components like IAM role and Security Group\ncdk destroy eth-common\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(18215);const o={tabItem:"tabItem_Ymn6"};var i=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var s=t(96540),o=t(18215),i=t(23104),r=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=u(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,h]=m({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,d.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==s&&(c(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},76107:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/aws-node-runners-1-cf2061ac2c66dd1dcfe70d817a2aa2d3.png"},94352:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/aws-node-runners-2-6512ceeed8e55d6ca4ba59db41443b5a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);