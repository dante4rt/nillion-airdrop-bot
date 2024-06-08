const fs = require('fs');
const {
  DirectSecp256k1HdWallet,
  DirectSecp256k1Wallet,
} = require('@cosmjs/proto-signing');

async function initWalletsFromMnemonic() {
  const mnemonics = JSON.parse(fs.readFileSync('accounts.json', 'utf8'));
  const wallets = [];
  for (const mnemonic of mnemonics) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: 'nillion',
    });
    wallets.push(wallet);
  }
  return wallets;
}

async function initWalletsFromPrivateKey() {
  const privateKeys = JSON.parse(fs.readFileSync('privateKeys.json', 'utf8'));
  const wallets = [];
  for (const privateKey of privateKeys) {
    const wallet = await DirectSecp256k1Wallet.fromKey(
      Buffer.from(privateKey, 'hex'),
      'nillion'
    );
    wallets.push(wallet);
  }
  return wallets;
}

module.exports = { initWalletsFromMnemonic, initWalletsFromPrivateKey };
