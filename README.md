// install hardhat
npm install --save-dev hardhat
npx hardhat
<Create an empty hardhat.config.js>

// install packages
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts
npm install @openzeppelin/contracts-upgradeable
npm install @openzeppelin/hardhat-upgrades
npm install dotenv
<Create and set up .env file>

// compile and deploy
npx hardhat compile

// deploy the Box contract
npx hardhat run --network sepolia .\scripts\deploy_box_v1.js
// verify the Box code to etherscan
npx hardhat verify --network sepolia 0x8E6F7b6efffb21aA320909E90d5613ac7fe796F4  

// deploy the BoxV2 contract
npx hardhat run --network sepolia .\scripts\upgrade_box_v2.js
// verify the BoxV2 code to etherscan
npx hardhat verify --network sepolia 0x296eDded27E9c081762a1627DDDEb999F09cD18e


