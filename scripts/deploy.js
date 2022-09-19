const { ethers } = require("hardhat");

async function main() {
  const NUM_WHITELIST_ADDRESSES = 10;
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(
    NUM_WHITELIST_ADDRESSES
  );
  deployedWhitelistContract.deployed();

  console.log(
    `Whitelist Contract Address: ${deployedWhitelistContract.address}`
  );
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
