"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[7671],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),h=s(a),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:e},d),{},{components:a})):n.createElement(m,o({ref:e},d))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16424:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={sidebar_label:"Using ChainIDE",hide_table_of_contents:!1,sidebar_position:2},c="Using ChainIDE",s={unversionedId:"chainide",id:"chainide",isDocsHomePage:!1,title:"Using ChainIDE",description:"Introduction",source:"@site/docs/chainide.md",sourceDirName:".",slug:"/chainide",permalink:"/docs/chainide",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/chainide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using ChainIDE",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Upgrading Geth",permalink:"/docs/validator/upgrade-fullnode"},next:{title:"Using Remix IDE",permalink:"/docs/remix"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"What You&#39;ll Do",id:"what-youll-do",children:[],level:2},{value:"Setting up a Wallet",id:"setting-up-a-wallet",children:[{value:"Install Binance Wallet/MetaMask",id:"install-binance-walletmetamask",children:[],level:3},{value:"Adding BNB Smart Chain Test Network to MetaMask Wallet",id:"adding-bnb-smart-chain-test-network-to-metamask-wallet",children:[],level:3},{value:"Enabling the BNB Smart Chain Test Network to Binance Wallet",id:"enabling-the-bnb-smart-chain-test-network-to-binance-wallet",children:[],level:3},{value:"Obtaining Test BNB tokens",id:"obtaining-test-bnb-tokens",children:[],level:3}],level:2},{value:"Write down a Storage Smart Contract",id:"write-down-a-storage-smart-contract",children:[],level:2},{value:"Compile a Storage Smart Contract",id:"compile-a-storage-smart-contract",children:[],level:2},{value:"Deploy a Storage Smart Contract",id:"deploy-a-storage-smart-contract",children:[],level:2},{value:"Create a Flattened File using Flattener Library",id:"create-a-flattened-file-using-flattener-library",children:[],level:2},{value:"Verify a Smart Contract",id:"verify-a-smart-contract",children:[],level:2},{value:"Contract Interaction",id:"contract-interaction",children:[],level:2}],p={toc:d};function h(t){var e=t.components,a=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-chainide"},"Using ChainIDE"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chainide.com/"},"ChainIDE"),"  is a chain agnostic, cloud-based IDE for creating decentralized applications. It enhances the development cycle through pre-configured plugins that save users' time and effort. This is a beginner guide on creating a simple smart contract and deploying it to the BNB Smart Chain. If you have any questions, feel free to ask them in the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/QpGq4hjWrh"},"ChainIDE Discord"),"."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ChainIDE"),(0,r.kt)("li",{parentName:"ol"},"Web3 Wallet "),(0,r.kt)("li",{parentName:"ol"},"Solidity")),(0,r.kt)("h2",{id:"what-youll-do"},"What You'll Do"),(0,r.kt)("p",null,"The following are general steps for deploying a storage smart contract"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setting up a Wallet"),(0,r.kt)("li",{parentName:"ol"},"Write down a Storage Smart Contract"),(0,r.kt)("li",{parentName:"ol"},"Compile a Storage Smart Contract"),(0,r.kt)("li",{parentName:"ol"},"Deploy a Storage Smart Contract"),(0,r.kt)("li",{parentName:"ol"},"Create a Flattened File using Flattener Library"),(0,r.kt)("li",{parentName:"ol"},"Verify a Storage Smart Contract"),(0,r.kt)("li",{parentName:"ol"},"Contract Interaction")),(0,r.kt)("h2",{id:"setting-up-a-wallet"},"Setting up a Wallet"),(0,r.kt)("h3",{id:"install-binance-walletmetamask"},"Install Binance Wallet/MetaMask"),(0,r.kt)("p",null,"When deploying a smart contract to a blockchain or when making a transaction to a deployed smart contract, a gas fee must be paid, and for that, we need to use a crypto wallet which can be Binance Wallet or MetaMask. If you want to use Binance Wallet, click ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp"},"here")," to get Binance Wallet and if you want to continue with MetaMask Wallet, click ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"here"),"  to install MetaMask."),(0,r.kt)("h3",{id:"adding-bnb-smart-chain-test-network-to-metamask-wallet"},"Adding BNB Smart Chain Test Network to MetaMask Wallet"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"(https://chainide.com/)"},"ChainIDE"),', create a project, and click on the "unconnected button" in the upper right corner, select the "Injected Web3 Provider" button, and then click the "MetaMask" to connect to the MetaMask wallet ("BNB Chain Mainnet" is the main network, and "BNB Chain Testnet" is the test network, click on the "BNB Chain Testnet" and it will be added to your MetaMask wallet.\n',(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/Untitled+design+(19).png",alt:null})),(0,r.kt)("h3",{id:"enabling-the-bnb-smart-chain-test-network-to-binance-wallet"},"Enabling the BNB Smart Chain Test Network to Binance Wallet"),(0,r.kt)("p",null,'If you want to continue with Binance Wallet, install Binance Wallet, and After installing Binance Wallet, you need to enable "Show Test Networks" and switch to the "BNB Smart Chain Test Network". '),(0,r.kt)("img",{src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/16.png",alt:"img",style:{zoom:"30%"}}),(0,r.kt)("img",{src:"https://lh6.googleusercontent.com/AbMd49RFlERw1E_OpmURgZxqYHqHOXpPJLtT-ysIB2oAwmVf054jzQndDxJOfqj-FFCR_Beb1LTXvw6T7TvO03aVlHGmEaE1N2J5mg5kUm-dbcaXnlLH-0RLM-SGV0brrlweEyrQ",alt:"img",style:{zoom:"30%"}}),(0,r.kt)("h3",{id:"obtaining-test-bnb-tokens"},"Obtaining Test BNB tokens"),(0,r.kt)("p",null,"Once BNB Smart Chain Test Network has been added to MetaMask, navigate to the  ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.binance.org/faucet-smart"},"BNB Smart Chain Faucet"),"  to receive test tokens. Tokens are needed to pay for gas fees to deploy and interact with the smart contract. On the faucet page, paste your MetaMask wallet address. Then, click submit and the faucet will send you some test BNBs.\n",(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/BNB_Smart_Chain_Faucet.png",alt:null})),(0,r.kt)("h2",{id:"write-down-a-storage-smart-contract"},"Write down a Storage Smart Contract"),(0,r.kt)("p",null,"You need to write down all the required functions that you want to implement in your storage smart contract. A general storage smart contract has the following functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Store()"),": store value in variables"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retrieve()"),": returns the stored value")),(0,r.kt)("p",null,"The ChainIDE team has prepared a simple storage smart contract that includes all the required functions; you may use this built-in template and add/delete functions according to your requirements."),(0,r.kt)("p",null,"Visit the  ",(0,r.kt)("a",{parentName:"p",href:"https://chainide.com/"},"ChainIDE site"),'  and click on "Try Now".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://3869740696-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MYy-lqJKjq1m0yBAX4r%2Fuploads%2Fnpdf7fg51675wYmFcL6b%2Fimage.png?alt=media&token=353fc876-a319-49cb-92d5-1ed23c39aa90",alt:null})),(0,r.kt)("p",null,'Then, click on "New Project" and select "BNB Chain", and "Storage".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/3_.png",alt:null})),(0,r.kt)("p",null,"Now, you can see the template contract,  ",(0,r.kt)("strong",{parentName:"p"},"Storage.sol"),", that includes all the required functions."),(0,r.kt)("h2",{id:"compile-a-storage-smart-contract"},"Compile a Storage Smart Contract"),(0,r.kt)("p",null,'After you have completed your smart contract, it is time to compile it. To compile, navigate to the "Compile", module, choose an appropriate compiler version according to your source code, and press the "Compile" button. An ABI and bytecode for the source code generate upon successful compilation. If there are some errors in your source code, they will be displayed under the output panel in the "Logger module". You may need to carefully read the error, resolve it accordingly and compile the contract again.'),(0,r.kt)("p",null,"Note down the compiler version and the license for your source code as it would be needed when you verify your smart contract on the BNB Smart Chain Test Network."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/4.png",alt:null})),(0,r.kt)("h2",{id:"deploy-a-storage-smart-contract"},"Deploy a Storage Smart Contract"),(0,r.kt)("p",null,"After successful compilation, it's time to deploy your compiled storage smart contract to the BNB Smart Chain Test Network. For that, you need to have a MetaMask installed, the BNB Smart Chain Test Network added to your wallet, and some testnet tokens to pay for the transaction fee."),(0,r.kt)("p",null,'Navigate to the "Deploy & Interaction" module and choose the smart contract that you want to deploy among the compiled smart contracts and click the "deploy" button. For this tutorial, the  ',(0,r.kt)("inlineCode",{parentName:"p"},"Storage"),"  smart contract will be deployed."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/5.png",alt:null})),(0,r.kt)("h2",{id:"create-a-flattened-file-using-flattener-library"},"Create a Flattened File using Flattener Library"),(0,r.kt)("p",null,'To verify a smart contract that imports other smart contracts, we need to create a flattened file, a flattened file including all the source code of imported contracts in a single file. To create a flattened file, you need to add a "Flattener" plug-in.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/7.png",alt:null})),(0,r.kt)("p",null,"Once the Flatterner plug-in is activated, you'll be able to access it as a separate module as shown in the figure below. Choose the compiled file, and click on the flatten button to create a flattened file, once the flattened file is created, it will be automatically copied to the clipboard, you may paste it to a file and save it for later usage."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/8.png",alt:null})),(0,r.kt)("p",null,"If you want to save the flattened file, click the save button, and a flattened file will be saved in the current repository."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/9.png",alt:null})),(0,r.kt)("p",null,"The saved flattened file can be accessed under the explorer module."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/10.png",alt:null})),(0,r.kt)("h2",{id:"verify-a-smart-contract"},"Verify a Smart Contract"),(0,r.kt)("p",null,"To verify a smart contract, you need to visit  ",(0,r.kt)("a",{parentName:"p",href:"https://bscscan.com/"},"BNB Smart Chain Explorer")," and search for the deployed smart contract using the contract address."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/10.png",alt:null})),(0,r.kt)("p",null,'Click on the "verify and publish" link shown under the contract section.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/11.png",alt:null})),(0,r.kt)("p",null,"Once you click on the verify and publish link, you will be asked for the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contract Address: The address of a deployed smart contract that you want to verify"),(0,r.kt)("li",{parentName:"ul"},"Compiler Type: Either you want to verify a single file or multiple files"),(0,r.kt)("li",{parentName:"ul"},"Compiler Version: The compiler version that you used to compile the smart contract"),(0,r.kt)("li",{parentName:"ul"},"License: Open-source license type that you used for your source code")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/12.png",alt:null})),(0,r.kt)("p",null,"After that, you need to paste the flattened file that you created in step 5, and your smart contract will be verified."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/13.png",alt:null})),(0,r.kt)("p",null,"If there are no issues with your smart contract, it would be verified, and you'll be able to see an image similar to the one that is shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/14.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/15.png",alt:null}),"\nCongratulations, you have successfully deployed your smart contract to the blockchain and verified it, now it's time to interact with your deployed smart contract."),(0,r.kt)("h2",{id:"contract-interaction"},"Contract Interaction"),(0,r.kt)("p",null,'After successful deployment and verification. All the functions in the deployed smart contract can be seen in the "INTERACT" panel. In our scenario, we have two functions, ',(0,r.kt)("inlineCode",{parentName:"p"},"Store()")," that is used to store the value to the blockchain, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Retrieve()")," to retrieve stored data from the blockchain.  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://chainide-doc.s3.amazonaws.com/Using+ChainIDE+BNB+Smart+Chain/6.png",alt:null})))}h.isMDXComponent=!0}}]);