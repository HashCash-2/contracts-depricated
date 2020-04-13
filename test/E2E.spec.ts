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
    // approve HashCash to transferFrom
    await PTinstance.approve(HCInstance.address, web3.utils.toWei("1000"));
    var block = await web3.eth.getBlock("latest");
    var timestamp: string = (block.timestamp + 3600).toString();

    console.log(block);
    console.log("timestamp", timestamp);

    var numberOfTokens: string = web3.utils.toWei("100").toString();

    await HCInstance.createReverseStream(
      numberOfTokens,
      PTinstance.address,
      timestamp
    );
  });
});
