import * as walletHelper from "./wallet";
const PersonalToken = artifacts.require("PersonalToken");
const HashCash = artifacts.require("HashCash");
// Test E2E flow
contract("HashCash", async function(accounts) {
  var wallets: any;

  before(async function() {
    wallets = walletHelper.generateFirstWallets(walletHelper.mnemonics, 10);
  });

  it("creating reverse stream", async function() {
    var PTinstance = await PersonalToken.deployed();
    var HCInstance = await HashCash.deployed();
    await HCInstance.createReverseStream(10, PTinstance.address, 1, 1);
  });
});
