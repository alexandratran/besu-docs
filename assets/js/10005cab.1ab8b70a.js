"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[1063],{50340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(85893),o=n(11151);const i={title:"Use Hardhat",sidebar_position:1,description:"Using Hyperledger Besu with Hardhat",tags:["public networks","private networks"]},a="Use Hardhat",s={id:"public-networks/how-to/develop/hardhat",title:"Use Hardhat",description:"Using Hyperledger Besu with Hardhat",source:"@site/versioned_docs/version-24.1.0/public-networks/how-to/develop/hardhat.md",sourceDirName:"public-networks/how-to/develop",slug:"/public-networks/how-to/develop/hardhat",permalink:"/24.1.0/public-networks/how-to/develop/hardhat",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.1.0/public-networks/how-to/develop/hardhat.md",tags:[{label:"public networks",permalink:"/24.1.0/tags/public-networks"},{label:"private networks",permalink:"/24.1.0/tags/private-networks"}],version:"24.1.0",lastUpdatedAt:1715646519,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:1,frontMatter:{title:"Use Hardhat",sidebar_position:1,description:"Using Hyperledger Besu with Hardhat",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use Java Flight Recorder",permalink:"/24.1.0/public-networks/how-to/configure-jvm/java-flight-recorder"},next:{title:"Use client libraries",permalink:"/24.1.0/public-networks/how-to/develop/client-libraries"}},d={},l=[{value:"Private key management",id:"private-key-management",level:2},{value:"Use an HD wallet",id:"use-an-hd-wallet",level:3},{value:"Specify your private key in code",id:"specify-your-private-key-in-code",level:3},{value:"Start a Besu node",id:"start-a-besu-node",level:2},{value:"Deploy a contract",id:"deploy-a-contract",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-hardhat",children:"Use Hardhat"}),"\n",(0,r.jsx)(t.p,{children:"Developing for Hyperledger Besu using Hardhat is the same as developing for public Ethereum networks using Hardhat. Hardhat\nsupports Besu with the only difference being Besu does not support private key management."}),"\n",(0,r.jsx)(t.p,{children:"You can therefore use a wallet provider, or specify your private  key in the code."}),"\n",(0,r.jsx)(t.h2,{id:"private-key-management",children:"Private key management"}),"\n",(0,r.jsx)(t.h3,{id:"use-an-hd-wallet",children:"Use an HD wallet"}),"\n",(0,r.jsxs)(t.p,{children:["To add the wallet provider, update the ",(0,r.jsx)(t.code,{children:"hardhat.config.ts"})," file in the project directory. Replace:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<JSON-RPC-http-endpoint>"})," with the JSON-RPC endpoint (IP address and port) of a Besu node."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<MY-ACCOUNT-MNEMONIC>"})," with the list of words that make up your account's mnemonic."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<MY-PASSWORD"}),"> your password if used"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<MY-ACCOUNT-PRIVATE-KEY>"})," your account's private key"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'module.exports = {\n  // See <https://hardhat.org/hardhat-runner/docs/config#hd-wallet-config>\n  // for more about customizing your Hardhat configuration!\n  networks: {\n    besuWallet: {\n      url: "<JSON-RPC-http-endpoint>",\n      accounts: {\n        mnemonic: "<ACCOUNT-MNEMONIC>",\n        path: "m/44\'/60\'/0\'/0",\n        initialIndex: 0,\n        count: 1,\n        passphrase: "",\n      },\n    },\n  },\n};\n'})}),"\n",(0,r.jsx)(t.h3,{id:"specify-your-private-key-in-code",children:"Specify your private key in code"}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"Ensure you do not commit private keys to source control like Github, always inject your keys at runtime as environment variables, or\nuse a vault or similar."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const provider = new ethers.JsonRpcApiProvider(<JSON-RPC-http-endpoint>);\nconst wallet = new ethers.Wallet(<MY-ACCOUNT-PRIVATE-KEY>);\n// connect the wallet to the provider\nconst signer = wallet.connect(provider);\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"start-a-besu-node",children:"Start a Besu node"}),"\n",(0,r.jsx)(t.p,{children:"Start a Besu node with JSON-RPC enabled on the endpoint specified in the Hardhat configuration file."}),"\n",(0,r.jsx)(t.h2,{id:"deploy-a-contract",children:"Deploy a contract"}),"\n",(0,r.jsx)(t.p,{children:"To deploy a contract onto the Besu network:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx hardhat scripts run ./scripts/deploy_my_contract.ts --network besuWallet\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(67294);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);