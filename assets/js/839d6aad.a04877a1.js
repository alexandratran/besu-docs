"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8987],{95958:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(74848),r=s(28453);const i={title:"Deploy Besu across multiple Kubernetes clusters across multiple cloud providers",description:"Deploy Besu across multiple Kubernetes clusters across multiple cloud providers",sidebar_position:7,tags:["private networks"]},d="Deploy Besu across multiple Kubernetes clusters across multiple cloud providers",l={id:"private-networks/tutorials/kubernetes/multi-cluster",title:"Deploy Besu across multiple Kubernetes clusters across multiple cloud providers",description:"Deploy Besu across multiple Kubernetes clusters across multiple cloud providers",source:"@site/docs/private-networks/tutorials/kubernetes/multi-cluster.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/multi-cluster",permalink:"/private-networks/tutorials/kubernetes/multi-cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/kubernetes/multi-cluster.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1738206555e3,sidebarPosition:7,frontMatter:{title:"Deploy Besu across multiple Kubernetes clusters across multiple cloud providers",description:"Deploy Besu across multiple Kubernetes clusters across multiple cloud providers",sidebar_position:7,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Production",permalink:"/private-networks/tutorials/kubernetes/production"},next:{title:"Configure Kubernetes mode in NAT manager",permalink:"/private-networks/tutorials/kubernetes/nat-manager"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:3},{value:"1. Create an AWC VPC",id:"1-create-an-awc-vpc",level:4},{value:"2. Create an Azure Virtual Network",id:"2-create-an-azure-virtual-network",level:4},{value:"3. Connect the AWS VPC and Azure VNet with a site to site VPN",id:"3-connect-the-aws-vpc-and-azure-vnet-with-a-site-to-site-vpn",level:4},{value:"3.1 On the Azure side create a Virtual Network Gateway",id:"31-on-the-azure-side-create-a-virtual-network-gateway",level:5},{value:"3.2 On the AWS side create a Customer Gateway",id:"32-on-the-aws-side-create-a-customer-gateway",level:5},{value:"3.3 On the AWS side create a Virtual Private Gateway",id:"33-on-the-aws-side-create-a-virtual-private-gateway",level:5},{value:"3.4 On the AWS side attach the Virtual Private Gateway to the VPC",id:"34-on-the-aws-side-attach-the-virtual-private-gateway-to-the-vpc",level:5},{value:"3.5 On the AWS side create the Site to Site VPN Connection",id:"35-on-the-aws-side-create-the-site-to-site-vpn-connection",level:5},{value:"3.6 Download the VPN connection config file",id:"36-download-the-vpn-connection-config-file",level:5},{value:"3.7 On the Azure side create a Local Network Gateway",id:"37-on-the-azure-side-create-a-local-network-gateway",level:5},{value:"3.8 On the Azure side create a Connection on the existing Virtual Network Gateway",id:"38-on-the-azure-side-create-a-connection-on-the-existing-virtual-network-gateway",level:5},{value:"3.9 High Availability on the Azure side",id:"39-high-availability-on-the-azure-side",level:5},{value:"3.10 On AWS update the subnet route table",id:"310-on-aws-update-the-subnet-route-table",level:5},{value:"4. Update security groups to allow traffic",id:"4-update-security-groups-to-allow-traffic",level:4},{value:"4.1 On AWS side",id:"41-on-aws-side",level:5},{value:"4.2 On Azure side",id:"42-on-azure-side",level:5}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"deploy-besu-across-multiple-kubernetes-clusters-across-multiple-cloud-providers",children:"Deploy Besu across multiple Kubernetes clusters across multiple cloud providers"})}),"\n",(0,n.jsxs)(t.p,{children:["The following tutorial is just one of many ways to connect nodes in one K8S cluster to nodes in another K8S\ncluster across multiple cloud provider - in this case ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/eks/",children:"Amazon Elastic Kubernetes Service (EKS)"}),"\nand ",(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/en-au/products/kubernetes-service",children:"Azure Kubernetes Service (AKS)"})]}),"\n",(0,n.jsx)(t.p,{children:"This tutorial walks you through using AWS as the main cluster and adding an extra node in Azure to the existing pool"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h4,{id:"1-create-an-awc-vpc",children:"1. Create an AWC VPC"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Use a CIDR block that doesn't overlap with that of Azure eg ",(0,n.jsx)(t.code,{children:"10.0.0.0/16"})]}),"\n",(0,n.jsxs)(t.li,{children:["Create the EKS cluster as normal and use the default Kubernetes service range ",(0,n.jsx)(t.code,{children:"172.20.0.0/16"})]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"2-create-an-azure-virtual-network",children:"2. Create an Azure Virtual Network"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Use a CIDR block that doesn't overlap with that of AWS eg ",(0,n.jsx)(t.code,{children:"10.1.0.0/16"})]}),"\n",(0,n.jsxs)(t.li,{children:["It is also recommended to create a subnet for the Gateway and use a CIDR of ",(0,n.jsx)(t.code,{children:"/24"})," eg ",(0,n.jsx)(t.code,{children:"10.1.1.0/24"})]}),"\n",(0,n.jsxs)(t.li,{children:["Create the AKS cluster as normal and use the different Kubernetes service range\n",(0,n.jsx)(t.code,{children:"10.2.0.0/16"})," (the default ",(0,n.jsx)(t.code,{children:"10.0.0.0/16"})," overlaps with the AWS VPC CIDR block)"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"3-connect-the-aws-vpc-and-azure-vnet-with-a-site-to-site-vpn",children:"3. Connect the AWS VPC and Azure VNet with a site to site VPN"}),"\n",(0,n.jsx)(t.h5,{id:"31-on-the-azure-side-create-a-virtual-network-gateway",children:"3.1 On the Azure side create a Virtual Network Gateway"}),"\n",(0,n.jsx)(t.p,{children:"In the AZure VNet, create a Virtual Network Gateway with the following settings"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SKU"}),(0,n.jsx)(t.td,{children:"VpnGw2AZ (default)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Gateway Type"}),(0,n.jsx)(t.td,{children:"VPN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VPN Type"}),(0,n.jsx)(t.td,{children:"Route-based"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Virtual Network"}),(0,n.jsx)(t.td,{children:"Use the network in step 2.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Gateway subnet"}),(0,n.jsx)(t.td,{children:"Use the subnet from step 2.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Public IP Address"}),(0,n.jsx)(t.td,{children:"Create new"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Enable active-active mode"}),(0,n.jsx)(t.td,{children:"Disabled"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Configure BGP"}),(0,n.jsx)(t.td,{children:"Disabled"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The other settings can remain as defaults or set to suit your requirements. Once this is complete\nplease note down the IP address that was created for the Virtual Network Gateway"}),"\n",(0,n.jsx)(t.h5,{id:"32-on-the-aws-side-create-a-customer-gateway",children:"3.2 On the AWS side create a Customer Gateway"}),"\n",(0,n.jsx)(t.p,{children:"This Customer Gateway points to the Azure Virtual Network Gateay from step 3.1"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Routing"}),(0,n.jsx)(t.td,{children:"Static"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IP Address"}),(0,n.jsx)(t.td,{children:"Use the IP of the Virtual Network Gateway in step 3.1"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The other settings can remain as defaults or set to suit your requirements"}),"\n",(0,n.jsx)(t.h5,{id:"33-on-the-aws-side-create-a-virtual-private-gateway",children:"3.3 On the AWS side create a Virtual Private Gateway"}),"\n",(0,n.jsx)(t.p,{children:"Create an AWS Virtual Private Gateway and specify the name."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ASN"}),(0,n.jsx)(t.td,{children:"Amazon Default ASN"})]})})]}),"\n",(0,n.jsx)(t.h5,{id:"34-on-the-aws-side-attach-the-virtual-private-gateway-to-the-vpc",children:"3.4 On the AWS side attach the Virtual Private Gateway to the VPC"}),"\n",(0,n.jsxs)(t.p,{children:["Select the Virtual Private Gateway and then select Actions and ",(0,n.jsx)(t.code,{children:"Attach to VPC"})," and select\nthe VPC in step 1"]}),"\n",(0,n.jsx)(t.h5,{id:"35-on-the-aws-side-create-the-site-to-site-vpn-connection",children:"3.5 On the AWS side create the Site to Site VPN Connection"}),"\n",(0,n.jsx)(t.p,{children:"Create an AWS Site-to-Site VPN Connection with the following settings"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Target Gateway Type"}),(0,n.jsx)(t.td,{children:"Virtual Private Gateway"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Virtual Private Gateway"}),(0,n.jsx)(t.td,{children:"Select the Virtual Private Gateway from step 3.3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Customer Gateway"}),(0,n.jsx)(t.td,{children:"Existing"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Customer Gateway ID"}),(0,n.jsx)(t.td,{children:"Select the Customer Gateway from step 3.2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Routing Options"}),(0,n.jsx)(t.td,{children:"Static"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Static IP Prefixes"}),(0,n.jsx)(t.td,{children:"Use the Azure VNet CIDR from step 2.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tunnel inside IP version"}),(0,n.jsx)(t.td,{children:"IPV4"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The other settings can remain as defaults or set to suit your requirements"}),"\n",(0,n.jsx)(t.h5,{id:"36-download-the-vpn-connection-config-file",children:"3.6 Download the VPN connection config file"}),"\n",(0,n.jsx)(t.p,{children:"Select the VPN connection once it has been created and use the following options and then save the file locally"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Vendor"}),(0,n.jsx)(t.td,{children:"Generic"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Platform"}),(0,n.jsx)(t.td,{children:"Generic"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Software"}),(0,n.jsx)(t.td,{children:"Vendor Agnostic"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Save the file and open it. In there you will find the shared keys and putlic address for each tunnel created above"}),"\n",(0,n.jsxs)(t.p,{children:["You need to use the ",(0,n.jsx)(t.code,{children:"Pre-Shared Key"})," in the next step in Azure as well as the ",(0,n.jsx)(t.code,{children:"public IP"})," of Tunnel 1 of the VPN\nconnection (There are two created, and we just use #1 for this example)"]}),"\n",(0,n.jsx)(t.h5,{id:"37-on-the-azure-side-create-a-local-network-gateway",children:"3.7 On the Azure side create a Local Network Gateway"}),"\n",(0,n.jsx)(t.p,{children:"Create an Azure Local Network Gateway using the pubic IP address from step 3.6 of the tunnel and the CIDR block of\nthe AWS VPC"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Endpoint"}),(0,n.jsx)(t.td,{children:"IP Address"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IP Address"}),(0,n.jsx)(t.td,{children:"Use the IP address from step 3.6 of the VPN Connection"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Address space"}),(0,n.jsx)(t.td,{children:"Use the AWS CIDR block from step 1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Configure BGP"}),(0,n.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(t.h5,{id:"38-on-the-azure-side-create-a-connection-on-the-existing-virtual-network-gateway",children:"3.8 On the Azure side create a Connection on the existing Virtual Network Gateway"}),"\n",(0,n.jsxs)(t.p,{children:["Open the settings of the Virtual Network Gateway created in step 3.1. Then select ",(0,n.jsx)(t.code,{children:"Connections"})," and ",(0,n.jsx)(t.code,{children:"Add"}),".\nUse the settings below"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Setting"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Connection Type"}),(0,n.jsx)(t.td,{children:"Site-to-Site IPSec"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Virtual Network Gateway"}),(0,n.jsx)(t.td,{children:"Use the Virtual Network Gateway created in step 3.1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Local Network Gateway"}),(0,n.jsx)(t.td,{children:"Use the Local Network Gateway created in step 3.7"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Authentication method"}),(0,n.jsx)(t.td,{children:"Shared Key (PSK)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Shared Key(PSK)"}),(0,n.jsx)(t.td,{children:"Use the key from the config file downloaded in step 3.6"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IKE Protocol"}),(0,n.jsx)(t.td,{children:"IKEv2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"BGP"}),(0,n.jsx)(t.td,{children:"Disabled"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Use policy based traffic selector"}),(0,n.jsx)(t.td,{children:"Disabled"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The other settings can remain as defaults or set to suit your requirements"}),"\n",(0,n.jsxs)(t.p,{children:["This may take a few minutes to setup. Once complete you should see the Tunnel from step 3.5 status show as ",(0,n.jsx)(t.code,{children:"UP"})]}),"\n",(0,n.jsx)(t.h5,{id:"39-high-availability-on-the-azure-side",children:"3.9 High Availability on the Azure side"}),"\n",(0,n.jsx)(t.p,{children:"If you need high availability or this is a production setup, please use Tunnel #2 to create a second\nLocal Network Gateway (step 3.7) and then a second connection on the Virtual Network Gateway (step 3.8)"}),"\n",(0,n.jsx)(t.h5,{id:"310-on-aws-update-the-subnet-route-table",children:"3.10 On AWS update the subnet route table"}),"\n",(0,n.jsx)(t.p,{children:"On the AWS side please update the route tables of your subnets to use the Virtual gateway and set the destination\nas the Azure VNet CIDR block"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Destination"}),(0,n.jsx)(t.th,{children:"Target"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10.1.0.0/16"}),(0,n.jsx)(t.td,{children:"vgw -....."})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Please replace the Azure CIDR block with that of your own and select the id of the Virtual Gateway from step 3.3"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Also note that if each subnet has a different route table, then this change needs to be added to each subnet that you\nEKS nodes with Besu running on them"})}),"\n",(0,n.jsx)(t.h4,{id:"4-update-security-groups-to-allow-traffic",children:"4. Update security groups to allow traffic"}),"\n",(0,n.jsx)(t.h5,{id:"41-on-aws-side",children:"4.1 On AWS side"}),"\n",(0,n.jsxs)(t.p,{children:["Find the security group of the node pool that contains your Besu nodes and add this in to the ",(0,n.jsx)(t.code,{children:"Inbound"})," rules to allow\ntraffic from the Azure VNet"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Protocol"}),(0,n.jsx)(t.th,{children:"Port range"}),(0,n.jsx)(t.th,{children:"Destination"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Custom UDP"}),(0,n.jsx)(t.td,{children:"UDP"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"30303"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"10.1.0.0/16"})}),(0,n.jsx)(t.td,{children:"Azure"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Custom TCP"}),(0,n.jsx)(t.td,{children:"TCP"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"30303"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"10.1.0.0/16"})}),(0,n.jsx)(t.td,{children:"Azure"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Custom TCP"}),(0,n.jsx)(t.td,{children:"TCP"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"8545 "})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"10.1.0.0/16"})}),(0,n.jsx)(t.td,{children:"Azure"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Please update the CIDR to only be a subnet CIDR if you have your nodes in select subnets."}),"\n",(0,n.jsx)(t.h5,{id:"42-on-azure-side",children:"4.2 On Azure side"}),"\n",(0,n.jsxs)(t.p,{children:["Find the network security group of the node pool that contains your Besu nodes and add this in to the ",(0,n.jsx)(t.code,{children:"Inbound"})," rules to allow\ntraffic from the Azure VNet"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Protocol"}),(0,n.jsx)(t.th,{children:"Port range"}),(0,n.jsx)(t.th,{children:"Destination"}),(0,n.jsx)(t.th,{children:"Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"UDP"}),(0,n.jsx)(t.td,{children:"UDP"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"30303"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"10.0.0.0/16"})}),(0,n.jsx)(t.td,{children:"AWS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TCP"}),(0,n.jsx)(t.td,{children:"TCP"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"30303"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"10.0.0.0/16"})}),(0,n.jsx)(t.td,{children:"AWS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TCP"}),(0,n.jsx)(t.td,{children:"TCP"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"8545 "})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"10.0.0.0/16"})}),(0,n.jsx)(t.td,{children:"AWS"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Please update the CIDR to only be a subnet CIDR if you have your nodes in select subnets."})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var n=s(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);