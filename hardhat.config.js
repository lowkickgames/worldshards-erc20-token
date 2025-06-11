require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");
require('dotenv').config();

const privateKey = process.env.DEPLOYER_PRIVATE_KEY;
const alchemyKey = process.env.ALCHEMY_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.28',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`,
      accounts: [privateKey],
      gasPrice: 100000000000
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}`,
      accounts: [privateKey],
      gasPrice: 100000000000
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-2-s1.bnbchain.org:8545",
      accounts: [privateKey],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: etherscanApiKey,
      sepolia: etherscanApiKey,
      bscTestnet: etherscanApiKey,
      bsc: etherscanApiKey,
    },
  },
  sourcify: {
    enabled: false,
    apiUrl: "https://sourcify.dev/server",
    browserUrl: "https://repo.sourcify.dev",
  }
};
