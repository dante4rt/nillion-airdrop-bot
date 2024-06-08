require('colors').config;
const readlineSync = require('readline-sync');
const {
  initWalletsFromMnemonic,
  initWalletsFromPrivateKey,
} = require('./src/initWallets');
const { sleep } = require('./src/sleep');
const { sendTransaction } = require('./src/sendTransaction');

(async () => {
  process.stdout.write('\x1Bc');
  console.log(
    `
###  ##    ####   ####     ####       ####    ## ##   ###  ##           ### ##    ## ##   #### ##  
  ## ##     ##     ##       ##         ##    ##   ##    ## ##            ##  ##  ##   ##  # ## ##  
 # ## #     ##     ##       ##         ##    ##   ##   # ## #            ##  ##  ##   ##    ##     
 ## ##      ##     ##       ##         ##    ##   ##   ## ##             ## ##   ##   ##    ##     
 ##  ##     ##     ##       ##         ##    ##   ##   ##  ##            ##  ##  ##   ##    ##     
 ##  ##     ##     ##  ##   ##  ##     ##    ##   ##   ##  ##            ##  ##  ##   ##    ##     
###  ##    ####   ### ###  ### ###    ####    ## ##   ###  ##           ### ##    ## ##    ####    
  `.cyan
  );
  console.log('     Created by HappyCuanAirdrop'.magenta);
  console.log('    https://t.me/HappyCuanAirdrop'.magenta);
  console.log();

  const walletChoice = parseInt(
    readlineSync.question(
      'Choose wallet initialization method (0 for mnemonic, 1 for private key): '
        .yellow
    ),
    10
  );

  let wallets;
  if (walletChoice === 0) {
    wallets = await initWalletsFromMnemonic();
  } else if (walletChoice === 1) {
    wallets = await initWalletsFromPrivateKey();
  } else {
    console.error('Invalid choice. Exiting...');
    return;
  }

  const txCount = parseInt(
    readlineSync.question('How many transactions do you want to send? '.yellow),
    10
  );

  for (let i = 0; i < txCount; i++) {
    for (const wallet of wallets) {
      await sendTransaction(wallet);
    }
    if (txCount > 1 && i < txCount - 1) {
      const sleepDuration =
        Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000;
      console.log(
        `Sleeping for ${sleepDuration / 1000} seconds... (${i + 1}/${txCount})`
          .green
      );
      await sleep(sleepDuration);
    }
  }

  console.log('All transactions are done!'.green);
})();
