"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[8077],{54662:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(74848),t=r(28453);const i={title:"Create a cluster",sidebar_position:2,description:"Create a cluster for deployment",tags:["private networks"]},a="Create a cluster",o={id:"private-networks/tutorials/kubernetes/cluster",title:"Create a cluster",description:"Create a cluster for deployment",source:"@site/docs/private-networks/tutorials/kubernetes/cluster.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/cluster",permalink:"/private-networks/tutorials/kubernetes/cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/kubernetes/cluster.md",tags:[{inline:!0,label:"private networks",permalink:"/tags/private-networks"}],version:"current",lastUpdatedAt:1733338125e3,sidebarPosition:2,frontMatter:{title:"Create a cluster",sidebar_position:2,description:"Create a cluster for deployment",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Local playground",permalink:"/private-networks/tutorials/kubernetes/playground"},next:{title:"Deploy charts",permalink:"/private-networks/tutorials/kubernetes/charts"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local Clusters",id:"local-clusters",level:2},{value:"Minikube",id:"minikube",level:3},{value:"kind",id:"kind",level:3},{value:"Rancher",id:"rancher",level:3},{value:"Cloud clusters",id:"cloud-clusters",level:2},{value:"AWS EKS",id:"aws-eks",level:3},{value:"Azure Kubernetes Service",id:"azure-kubernetes-service",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"create-a-cluster",children:"Create a cluster"})}),"\n",(0,n.jsxs)(s.p,{children:["You can create a ",(0,n.jsx)(s.a,{href:"#local-clusters",children:"local"})," or ",(0,n.jsx)(s.a,{href:"#cloud-clusters",children:"cloud"})," cluster to deploy a Besu network using Kubernetes."]}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Clone the ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes",children:"Quorum-Kubernetes"})," repository"]}),"\n",(0,n.jsxs)(s.li,{children:["Install ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"Kubectl"})]}),"\n",(0,n.jsxs)(s.li,{children:["Install ",(0,n.jsx)(s.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm3"})]}),"\n",(0,n.jsxs)(s.li,{children:["Install ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})," and ",(0,n.jsx)(s.a,{href:"https://eksctl.io/",children:(0,n.jsx)(s.code,{children:"eksctl"})})," for AWS EKS clusters"]}),"\n",(0,n.jsxs)(s.li,{children:["Install ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli",children:"Azure CLI"})," for Azure AKS clusters"]}),"\n",(0,n.jsx)(s.li,{children:"Install the cloud-specific CLI"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"local-clusters",children:"Local Clusters"}),"\n",(0,n.jsx)(s.p,{children:"Use one of several options to create a local cluster. Select one listed below, or another that you're comfortable with."}),"\n",(0,n.jsx)(s.h3,{id:"minikube",children:"Minikube"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"})," is one of the most popular options to spin up a local Kubernetes cluster for development. You can ",(0,n.jsx)(s.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"install a version"})," based on your architecture."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"We recommend at least 2 CPUs and 16GB of RAM."})}),"\n",(0,n.jsx)(s.p,{children:"To start the cluster, run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"minikube start --cpus 2 --memory 16384 --cni auto\n"})}),"\n",(0,n.jsx)(s.h3,{id:"kind",children:"kind"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://kind.sigs.k8s.io",children:"kind (Kubernetes in Docker)"})," is a lightweight tool for running local Kubernetes clusters. The ",(0,n.jsx)(s.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start#installation",children:"installation"})," is similar to ",(0,n.jsx)(s.a,{href:"#minikube",children:"Minikube"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"To start the cluster, run the following command:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kind create cluster\n"})}),"\n",(0,n.jsx)(s.h3,{id:"rancher",children:"Rancher"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/rancher-sandbox/rancher-desktop/",children:"Rancher"})," is a lightweight open source desktop application for Mac, Windows, and Linux. It provides Kubernetes and container management, and allows you to choose the version of Kubernetes to run."]}),"\n",(0,n.jsx)(s.p,{children:"It can build, push, pull, and run container images. Built container images can be run without needing a registry."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The official Docker-CLI is not supported but rather uses ",(0,n.jsx)(s.a,{href:"https://github.com/containerd/nerdctl",children:"nerdctl"})," which is a Docker-CLI compatible tool for containerd, and is automatically installed with Rancher Desktop."]})}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:["For Windows, you must ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install",children:"install Windows Subsystem for Linux (WSL)"})," to install Rancher Desktop."]}),(0,n.jsxs)(s.p,{children:["Refer to the ",(0,n.jsx)(s.a,{href:"https://docs.rancherdesktop.io/",children:"official Rancher Desktop documentation"})," for system requirements and installation instructions."]})]}),"\n",(0,n.jsx)(s.h2,{id:"cloud-clusters",children:"Cloud clusters"}),"\n",(0,n.jsx)(s.h3,{id:"aws-eks",children:"AWS EKS"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://aws.amazon.com/eks/",children:"AWS Elastic Kubernetes Service (AWS EKS)"})," is one of the most popular platforms to deploy Besu."]}),"\n",(0,n.jsxs)(s.p,{children:["To create a cluster in AWS, you must install the ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})," and ",(0,n.jsx)(s.a,{href:"https://eksctl.io/",children:(0,n.jsx)(s.code,{children:"eksctl"})}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/aws",children:"template"})," comprises the base infrastructure used to build the cluster and other resources in AWS. We also use some native services with the cluster for performance and best practices, these include:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/aws/amazon-eks-pod-identity-webhook",children:"Pod identities"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html",children:"Secrets Store CSI drivers"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Dynamic storage classes backed by AWS EBS. The ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims",children:"volume claims"})," are fixed sizes and can be updated as you grow via helm updates, and won't need to re-provision the underlying storage class."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/pod-networking.html",children:"CNI"})," networking mode for EKS. By default, EKS clusters use ",(0,n.jsx)(s.code,{children:"kubenet"}),' to create a virtual network and subnet. Nodes get an IP address from a virtual network subnet. Network address translation (NAT) is then configured on the nodes, and pods receive an IP address "hidden" behind the node IP.']}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"This approach reduces the number of IP addresses that you must reserve in your network space for pods, but constrains what can connect to the nodes from outside the cluster (for example, on-premise nodes or those on another cloud provider)."})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"AWS Container Networking Interface (CNI) provides each pod with an IP address from the subnet, and can be accessed directly. The IP addresses must be unique across your network space, and must be planned in advance. Each node has a configuration parameter for the maximum number of pods that it supports. The equivalent number of IP addresses per node are then reserved up front for that node. This approach requires more planning, and can lead to IP address exhaustion as your application demands grow, however makes it easier for external nodes to connect to your cluster."}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"EKS clusters must not use 169.254.0.0/16, 172.30.0.0/16, 172.31.0.0/16, or 192.0.2.0/24 for the Kubernetes service address range."})}),"\n",(0,n.jsx)(s.p,{children:"To provision the cluster:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Update ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/aws/templates/cluster.yml",children:"cluster.yml"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Deploy the template:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"eksctl create cluster -f ./templates/cluster.yml\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Your ",(0,n.jsx)(s.code,{children:".kube/config"})," should be connected to the cluster automatically, but if not, run the commands below and replace ",(0,n.jsx)(s.code,{children:"AWS_REGION"})," and ",(0,n.jsx)(s.code,{children:"CLUSTER_NAME"})," with details that are specific to your deployment."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"aws sts get-caller-identity\naws eks --region AWS_REGION update-kubeconfig --name CLUSTER_NAME\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["After the deployment completes, provision the EBS drivers for the volumes. While it is possible to use the in-tree ",(0,n.jsx)(s.code,{children:"aws-ebs"})," driver that's natively supported by Kubernetes, it is no longer being updated and does not support newer EBS features such as the ",(0,n.jsx)(s.a,{href:"https://stackoverflow.com/questions/68359043/whats-the-difference-between-ebs-csi-aws-com-vs-kubernetes-io-aws-ebs-for-provi",children:"cheaper and better gp3 volumes"}),". The ",(0,n.jsx)(s.code,{children:"cluster.yml"})," file (from the steps above) that is included in this folder automatically deploys the cluster with the EBS IAM policies, but you need to install the EBS CSI drivers. This can be done through the AWS Management Console for simplicity, or via a CLI command as below. Replace ",(0,n.jsx)(s.code,{children:"CLUSTER_NAME"}),", ",(0,n.jsx)(s.code,{children:"AWS_REGION"})," and ",(0,n.jsx)(s.code,{children:"AWS_ACCOUNT"})," with details that are specific to your deployment."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"eksctl create iamserviceaccount --name ebs-csi-controller-sa --namespace kube-system --cluster CLUSTER_NAME --region AWS_REGION --attach-policy-arn arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy --approve --role-only --role-name AmazonEKS_EBS_CSI_DriverRole\n\neksctl create addon --name aws-ebs-csi-driver --cluster CLUSTER_NAME --region AWS_REGION --service-account-role-arn arn:aws:iam::AWS_ACCOUNT:role/AmazonEKS_EBS_CSI_DriverRole --force\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Once the deployment is completed, provision the Secrets Manager IAM and CSI driver. Use ",(0,n.jsx)(s.code,{children:"besu"})," (or equivalent) for ",(0,n.jsx)(s.code,{children:"NAMESPACE"})," and replace ",(0,n.jsx)(s.code,{children:"CLUSTER_NAME"}),", ",(0,n.jsx)(s.code,{children:"AWS_REGION"})," and ",(0,n.jsx)(s.code,{children:"AWS_ACCOUNT"})," with details that are specific to your deployment."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts\nhelm install --namespace kube-system --create-namespace csi-secrets-store secrets-store-csi-driver/secrets-store-csi-driver\nkubectl apply -f https://raw.githubusercontent.com/aws/secrets-store-csi-driver-provider-aws/main/deployment/aws-provider-installer.yaml\n\nPOLICY_ARN=$(aws --region AWS_REGION --query Policy.Arn --output text iam create-policy --policy-name quorum-node-secrets-mgr-policy --policy-document \'{\n    "Version": "2012-10-17",\n    "Statement": [ {\n        "Effect": "Allow",\n        "Action": ["secretsmanager:CreateSecret","secretsmanager:UpdateSecret","secretsmanager:DescribeSecret","secretsmanager:GetSecretValue","secretsmanager:PutSecretValue","secretsmanager:ReplicateSecretToRegions","secretsmanager:TagResource"],\n        "Resource": ["arn:aws:secretsmanager:AWS_REGION:AWS_ACCOUNT:secret:besu-node-*"]\n    } ]\n}\')\n\n# If you have deployed the above policy before, you can acquire its ARN:\nPOLICY_ARN=$(aws iam list-policies --scope Local \\\n--query \'Policies[?PolicyName==`quorum-node-secrets-mgr-policy`].Arn\' \\\n--output text)\n\neksctl create iamserviceaccount --name quorum-node-secrets-sa --namespace NAMESPACE --region=AWS_REGION --cluster CLUSTER_NAME --attach-policy-arn "$POLICY_ARN" --approve --override-existing-serviceaccounts\n'})}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["The above command creates a service account called ",(0,n.jsx)(s.code,{children:"quorum-node-secrets-sa"})," and is preconfigured in the helm charts override ",(0,n.jsx)(s.code,{children:"values.yml"})," files, for ease of use."]})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Optionally, deploy the ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/aws/templates/k8s-dashboard",children:"kubernetes dashboard"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["You can now use your cluster and you can deploy ",(0,n.jsx)(s.a,{href:"/private-networks/tutorials/kubernetes/charts",children:"Helm charts"})," to it."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"azure-kubernetes-service",children:"Azure Kubernetes Service"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://azure.microsoft.com/en-us/services/kubernetes-service/",children:"Azure Kubernetes Service (AKS)"})," is another popular cloud platform that you can use to deploy Besu. To create a cluster in Azure, you must install the ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli",children:"Azure CLI"})," and have admin rights on your Azure subscription to enable some preview features on AKS."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/tree/master/azure",children:"template"})," comprises the base infrastructure used to build the cluster and other resources in Azure. We also make use Azure native services and features after the cluster is created. These include:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity",children:"AAD pod identities"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/key-vault/general/key-vault-integrate-kubernetes",children:"Secrets Store CSI drivers"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Dynamic storage classes backed by Azure Files. The ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/aks/azure-disks-dynamic-pv",children:"volume claims"})," are fixed sizes and can be updated as you grow via helm updates, and won't need to re-provision the underlying storage class."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/aks/configure-azure-cni",children:"CNI"})," networking mode for AKS. By default, AKS clusters use ",(0,n.jsx)(s.code,{children:"kubenet"}),', to create a virtual network and subnet. Nodes get an IP address from a virtual network subnet. Network address translation (NAT) is then configured on the nodes, and pods receive an IP address "hidden" behind the node IP.']}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"This approach reduces the number of IP addresses you must reserve in your network space for pods to use, but constrains what can connect to the nodes from outside the cluster (for example, on-premise nodes or other cloud providers)."})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"AKS Container Networking Interface (CNI) provides each pod with an IP address from the subnet, and can be accessed directly. These IP addresses must be unique across your network space, and must be planned in advance. Each node has a configuration parameter for the maximum number of pods that it supports. The equivalent number of IP addresses per node are then reserved up front for that node. This approach requires more planning, and can leads to IP address exhaustion as your application demands grow, however makes it easier for external nodes to connect to your cluster."}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:["Please do not create more than one AKS cluster in the same subnet. AKS clusters may not use ",(0,n.jsx)(s.code,{children:"169.254.0.0/16"}),", ",(0,n.jsx)(s.code,{children:"172.30.0.0/16"}),", ",(0,n.jsx)(s.code,{children:"172.31.0.0/16"}),", or ",(0,n.jsx)(s.code,{children:"192.0.2.0/24"})," for the Kubernetes service address range."]})}),"\n",(0,n.jsx)(s.p,{children:"To provision the cluster:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Enable the preview features that allow you to use AKS with CNI, and a managed identity to authenticate and run cluster operations with other services. We also enable ",(0,n.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/azure/aks/use-azure-ad-pod-identity",children:"AAD pod identities"})," which use the managed identity. This is in preview, so you must enable this feature by registering the ",(0,n.jsx)(s.code,{children:"EnablePodIdentityPreview"})," feature:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"az feature register --name EnablePodIdentityPreview --namespace Microsoft.ContainerService\n"})}),"\n",(0,n.jsx)(s.p,{children:"This takes a little while and you can check on progress by running:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"az feature list --namespace Microsoft.ContainerService -o table\n"})}),"\n",(0,n.jsx)(s.p,{children:"Install or update your local Azure CLI with preview features:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"az extension add --name aks-preview\naz extension update --name aks-preview\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create a resource group if you don't already have one:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'az group create --name BesuGroup --location "East US"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Deploy the template:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to the ",(0,n.jsx)(s.a,{href:"https://portal.azure.com",children:"Azure portal"}),", select ",(0,n.jsx)(s.strong,{children:"+ Create a resource"})," in the upper left corner."]}),"\n",(0,n.jsxs)(s.li,{children:["Search for ",(0,n.jsx)(s.code,{children:"Template deployment (deploy using custom templates)"})," and select ",(0,n.jsx)(s.strong,{children:"Create"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.strong,{children:"Build your own template in the editor"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Remove the contents (JSON) in the editor and paste in the contents of ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/azure/arm/azuredeploy.json",children:(0,n.jsx)(s.code,{children:"azuredeploy.json"})})]}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.strong,{children:"Save"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Input provisioning parameters in the displayed user interface."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Provision the drivers:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Run the ",(0,n.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/azure/scripts/bootstrap.sh",children:"bootstrap"})," script."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"besu"})," for ",(0,n.jsx)(s.code,{children:"AKS_NAMESPACE"}),", and update ",(0,n.jsx)(s.code,{children:"AKS_RESOURCE_GROUP"}),", ",(0,n.jsx)(s.code,{children:"AKS_CLUSTER_NAME"}),", and ",(0,n.jsx)(s.code,{children:"AKS_MANAGED_IDENTITY"})," in the commands below to match your settings and deployed resources from step 3."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'./scripts/bootstrap.sh "AKS_RESOURCE_GROUP" "AKS_CLUSTER_NAME" "AKS_MANAGED_IDENTITY" "AKS_NAMESPACE"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["You can now use your cluster and you can deploy ",(0,n.jsx)(s.a,{href:"/private-networks/tutorials/kubernetes/charts",children:"Helm charts"})," to it."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var n=r(96540);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);