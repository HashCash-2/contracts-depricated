import * as walletHelper from "./wallet";

// Test all stateless operations
contract("MerkleTreeUtils", async function(accounts) {
  var wallets: any;

  before(async function() {
    wallets = walletHelper.generateFirstWallets(walletHelper.mnemonics, 10);
  });

  it("utils hash should be the same as keccak hash", async function() {});
});
