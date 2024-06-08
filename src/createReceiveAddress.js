const bip39 = require('bip39');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');

async function createReceiveAddress() {
  const mnemonic = bip39.generateMnemonic();
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'nillion',
  });
  const [firstAccount] = await wallet.getAccounts();
  return firstAccount.address;
}

module.exports = { createReceiveAddress };
