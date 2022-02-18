require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const MORALIS_API_KEY = "";
const PRIVATE_KEY = "";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.1"
      }
    ]
  },
  networks: {
    kovan: {
      url: `https://speedy-nodes-nyc.moralis.io/${MORALIS_API_KEY}/eth/kovan`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ''
  }
};
