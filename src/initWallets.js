const fs = require('fs');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');

async function initWallets() {
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

module.exports = { initWallets };
