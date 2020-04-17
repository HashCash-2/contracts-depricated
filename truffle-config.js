require("ts-node/register");

const HDWalletProvider = require("truffle-hdwallet-provider");

const MNEMONIC =
  process.env.MNEMONIC ||
  "clock radar mass judge dismiss just intact mind resemble fringe diary casino";
const API_KEY = process.env.API_KEY;

module.exports = {
  test_file_extension_regexp: /.*\.ts$/,
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    matic: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://testnet2.matic.network`
        );
      },
      network_id: "*",
      // gas: 8000000000
    },

    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://ropsten.infura.io/v3/${API_KEY}`
        );
      },
      network_id: "*",
      // gas: 8000000000
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          `https://goerli.infura.io/v3/${API_KEY}`
        );
      },
      network_id: "*",
      skipDryRun: true,
      // gas: 8000000000
    },
  },

  mocha: {
    reporter: "eth-gas-reporter",
    useColors: true,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.11", // Fetch exact version from solc-bin (default: truffle's version)
      docker: false, // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
};
