/* global artifacts */
const HashCash = artifacts.require("./HashCash.sol");
const PersonalToken = artifacts.require("./PersonalToken.sol");

module.exports = async deployer => {
  await deployer.deploy(HashCash);
  const hashcash = await HashCash.deployed();
  console.log("hashcash.address", hashcash.address);
  await deployer.deploy(PersonalToken, 1000000000);
  const PT = await PersonalToken.deployed();
  console.log("personalToken.address", PT.address);
};
