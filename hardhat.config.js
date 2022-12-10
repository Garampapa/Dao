require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts:[process.env.PRIVATE_KEY]
     },
  },
  etherscan: {
    apiKey:process.env.API_KEY,
  }
};
