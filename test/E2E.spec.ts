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
    await PTinstance.approve(HCInstance.address, web3.utils.toWei("100"));
    var block = await web3.eth.getBlock("latest");

    // 1 hour timestream
    var timestamp: string = (block.timestamp + 3600).toString();

    var balancePrev = await (
      await PTinstance.balanceOf(wallets[0].getAddressString())
    ).toString();
    var numberOfTokens: string = web3.utils.toWei("80").toString();

    await HCInstance.createReverseStream(
      numberOfTokens,
      PTinstance.address,
      timestamp
    );
    var nextStreamId = await HCInstance.nextStreamId();

    var balancePost = await (
      await PTinstance.balanceOf(wallets[0].getAddressString())
    ).toString();
    console.log(balancePrev, balancePost);
    balancePrev = web3.utils.fromWei(balancePrev);
    balancePost = web3.utils.fromWei(balancePost);
    console.log(balancePrev, balancePost);
    // assert.equal(balancePost, balancePrev - 1);

    // for (let i = 0; i < 50; i++) {
    //   await sleep(20000);
    //   var balanceOfStream = await HCInstance.balanceOfReverseStream(
    //     nextStreamId.toNumber() - 1
    //   );
    //   console.log("balance after sleep", balanceOfStream.toString());
    // }
  });
});

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
