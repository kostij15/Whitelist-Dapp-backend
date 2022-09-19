require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY_URL = process.env.RINKEBY_RPC_URL;
const GOERLI_API_KEY_URL = process.env.GOERLI_RPC_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
    goerli: {
      url: GOERLI_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
