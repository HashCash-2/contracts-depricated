/* global artifacts */
const HashCash = artifacts.require("./HashCash.sol");

module.exports = async deployer => {
  await deployer.deploy(HashCash);
  const hashcash = await HashCash.deployed();
  console.log("hashcash.address", hashcash.address);
};
