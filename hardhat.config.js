require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

//define hardhat task here, which can be accessed in our test by using hre.run('taskName')
task("show-balance", async () => {
  const showBalance = require("./scripts/showBalance");
  return showBalance();
});

task("transfer-hbars", async () => {
  const transferHbar = require("./scripts/transferHbar");
  return transferHbar();
});

task("deploy-contract", async () => {
  const deployContract = require("./scripts/deployContract");
  return deployContract();
});

task("deploy-contract-inheritance", async () => {
  const deployContract = require("./scripts/deployContractInheritance");
  return deployContract();
});

task("contract-view-call", async (taskArgs) => {
  const contractViewCall = require("./scripts/contractViewCall");
  return contractViewCall(taskArgs.contractAddress);
});

task("contract-call", async (taskArgs) => {
  const contractCall = require("./scripts/contractCall");
  return contractCall(taskArgs.contractAddress, taskArgs.msg);
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  mocha: {
    timeout: 3600000,
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  defaultNetwork: "local",
  networks: {
    local: {
      url: "http://localhost:7546",
      accounts: [
        "0x2e1d968b041d84dd120a5860cee60cd83f9374ef527ca86996317ada3d0d03e7",
        "0x45a5a7108a18dd5013cf2d5857a28144beadc9c70b3bdbd914e38df4e804b8d8",
      ],
      chainId: 296,
    },
    testnet: {
      url: "https://testnet.hashio.io/api",
      accounts: [
        "484961ec6c67c270dc5659ea8bb61489967c6acc574d81b1e046e072d5d2436d",
        "b46751179bc8aa9e129d34463e46cd924055112eb30b31637b5081b56ad96129",
      ],
      chainId: 296,
    },
  },
};
