"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[85217],{75930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var a=t(85893),s=t(11151);const c={title:"Transfer account funds",sidebar_position:1,description:"funds transfer transactions",tags:["private networks"]},o="Transfer funds between accounts in a transaction",r={id:"private-networks/tutorials/contracts/transfer-funds",title:"Transfer account funds",description:"funds transfer transactions",source:"@site/docs/private-networks/tutorials/contracts/transfer-funds.md",sourceDirName:"private-networks/tutorials/contracts",slug:"/private-networks/tutorials/contracts/transfer-funds",permalink:"/development/private-networks/tutorials/contracts/transfer-funds",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/contracts/transfer-funds.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1719215046,formattedLastUpdatedAt:"Jun 24, 2024",sidebarPosition:1,frontMatter:{title:"Transfer account funds",sidebar_position:1,description:"funds transfer transactions",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Deploy a smart contract",permalink:"/development/private-networks/tutorials/contracts/"},next:{title:"Interact with a deployed contract",permalink:"/development/private-networks/tutorials/contracts/interact"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use <code>eth_sendSignedTransaction</code>",id:"use-eth_sendsignedtransaction",level:2},{value:"Use <code>eth_sendTransaction</code>",id:"use-eth_sendtransaction",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"transfer-funds-between-accounts-in-a-transaction",children:"Transfer funds between accounts in a transaction"}),"\n",(0,a.jsxs)(n.p,{children:["You can get started with the ",(0,a.jsx)(n.a,{href:"/development/private-networks/tutorials/quickstart",children:"Developer Quickstart"})," to rapidly generate local blockchain networks."]}),"\n",(0,a.jsx)(n.p,{children:"This tutorial shows you how to transfer funds (ETH) between accounts in a transaction."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.a,{href:"/development/private-networks/tutorials/quickstart",children:"private network"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"use-eth_sendsignedtransaction",children:["Use ",(0,a.jsx)(n.code,{children:"eth_sendSignedTransaction"})]}),"\n",(0,a.jsxs)(n.p,{children:["The simplest way to transfer funds between externally-owned accounts is using ",(0,a.jsx)(n.a,{href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html#sendsignedtransaction",children:(0,a.jsx)(n.code,{children:"eth_sendSignedTransaction"})}),". This example uses ",(0,a.jsx)(n.code,{children:"eth_sendSignedTransaction"})," and one of the ",(0,a.jsx)(n.a,{href:"/development/private-networks/reference/accounts-for-testing",children:"test accounts"})," to transfer funds to a newly created account."]}),"\n",(0,a.jsx)(n.admonition,{title:"Do not use the test accounts on Ethereum Mainnet or any production network",type:"danger",children:(0,a.jsx)(n.p,{children:"The private key is publicly displayed, which means the account is not secure."})}),"\n",(0,a.jsx)(n.p,{children:"Before making the transaction, check the balances of both accounts to verify the funds transfer after the transaction."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const web3 = new Web3(host);\n// Pre-seeded account with 90000 ETH\nconst privateKeyA =\n  "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";\nconst accountA = web3.eth.accounts.privateKeyToAccount(privateKeyA);\nvar accountABalance = web3.utils.fromWei(\n  await web3.eth.getBalance(accountA.address),\n);\nconsole.log("Account A has balance of: " + accountABalance);\n\n// Create a new account to transfer ETH to\nvar accountB = web3.eth.accounts.create();\nvar accountBBalance = web3.utils.fromWei(\n  await web3.eth.getBalance(accountB.address),\n);\nconsole.log("Account B has balance of: " + accountBBalance);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Use the test account address (Account A) for the ",(0,a.jsx)(n.code,{children:"from"})," parameter, the recipient account address (Account B) for the ",(0,a.jsx)(n.code,{children:"to"})," parameter, and the amount of ETH to transfer between accounts for the ",(0,a.jsx)(n.code,{children:"value"})," parameter. Sign the transaction with Account A's private key and send it using ",(0,a.jsx)(n.code,{children:"eth_sendSignedTransaction"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// Send some ETH from A to B\nconst rawTxOptions = {\n  nonce: web3.utils.numberToHex(\n    await web3.eth.getTransactionCount(accountA.address),\n  ),\n  from: accountA.address,\n  to: accountB.address,\n  value: "0x100", // Amount of ETH to transfer\n  gasPrice: "0x0", // ETH per unit of gas\n  gasLimit: "0x24A22", // Max number of gas units the tx is allowed to use\n};\nconsole.log("Creating transaction...");\nconst tx = new Tx(rawTxOptions);\nconsole.log("Signing transaction...");\ntx.sign(Buffer.from(accountA.privateKey.substring(2), "hex"));\nconsole.log("Sending transaction...");\nvar serializedTx = tx.serialize();\nconst pTx = await web3.eth.sendSignedTransaction(\n  "0x" + serializedTx.toString("hex").toString("hex"),\n);\nconsole.log("tx transactionHash: " + pTx.transactionHash);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Once it completes, you can see the updated balances."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// After the transaction, there should be some ETH transferred\nvar accountABalance = await getAccountBalance(host, accountA);\nconsole.log("Account A has an updated balance of: " + accountABalance);\nvar accountBBalance = await getAccountBalance(host, accountB);\nconsole.log("Account B has an updatedbalance of: " + accountBBalance);\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.a,{href:"https://github.com/ConsenSys/quorum-dev-quickstart/blob/1e8cc281098923802845cd829ec20c88513c2e1c/files/besu/smart_contracts/privacy/scripts/eth_tx.js",children:"full example"})," can be found in the Developer Quickstart."]}),"\n",(0,a.jsxs)(n.h2,{id:"use-eth_sendtransaction",children:["Use ",(0,a.jsx)(n.code,{children:"eth_sendTransaction"})]}),"\n",(0,a.jsxs)(n.p,{children:["An alternative to using ",(0,a.jsx)(n.code,{children:"eth_sendSignedTransaction"})," is ",(0,a.jsx)(n.a,{href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html#sendtransaction",children:(0,a.jsx)(n.code,{children:"eth_sendTransaction"})}),". However, Hyperledger Besu does not support the ",(0,a.jsx)(n.code,{children:"eth_sendTransaction"})," API call and keeps account management separate for stronger security. Instead, Besu uses ",(0,a.jsx)(n.a,{href:"https://docs.web3signer.consensys.net/",children:"Web3Signer"})," to make the ",(0,a.jsx)(n.code,{children:"eth_sendTransaction"})," API call."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"eth_sendTransaction"})," similarly to ",(0,a.jsxs)(n.a,{href:"#use-eth_sendsignedtransaction",children:["using ",(0,a.jsx)(n.code,{children:"eth_sendSignedTransaction"})]})," (without the signing step which is done by Web3Signer):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const web3 = new Web3(host);\n// Pre-seeded account with 90000 ETH\nconst privateKeyA = "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3";\nconst accountA = web3.eth.accounts.privateKeyToAccount(privateKeyA);\nvar accountABalance = web3.utils.fromWei(await web3.eth.getBalance(accountA.address));\nconsole.log("Account A has balance of: " + accountABalance);\n\n// Create a new account to transfer ETH to\nvar accountB = web3.eth.accounts.create();\nvar accountBBalance = web3.utils.fromWei(await web3.eth.getBalance(accountB.address));\nconsole.log("Account B has balance of: " + accountBBalance);\n\n// Send some ETH from A to B\nconst txOptions = {\n  from: accountA.address,\n  to: accountB.address,\n  value: "0x100",  // Amount of ETH to transfer\n  gasPrice: "0x0", // ETH per unit of gas\n  gasLimit: "0x24A22" // Max number of gas units the tx is allowed to use\n};\nconsole.log("Creating transaction...");\nconst pTx = await web3.eth.sendTransaction(txOptions);\nconsole.log("tx transactionHash: " + pTx.transactionHash);\n\n// After the transaction, there should be some ETH transferred\nvar accountABalance = await getAccountBalance(host, accountA);\nconsole.log("Account A has an updated balance of: " + accountABalance);\nvar accountBBalance = await getAccountBalance(host, accountB);\nconsole.log("Account B has an updatedbalance of: " + accountBBalance);\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(67294);const s={},c=a.createContext(s);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);