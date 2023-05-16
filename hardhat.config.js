require("@openzeppelin/hardhat-upgrades");
require("@nomicfoundation/hardhat-toolbox");

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  solidity: "0.8.10",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};


