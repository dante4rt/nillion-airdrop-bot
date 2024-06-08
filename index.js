require('colors').config;
const readlineSync = require('readline-sync');
const { initWallets } = require('./src/initWallets');
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

  const wallets = await initWallets();

  const txCount = parseInt(
    readlineSync.question('How many transactions do you want to send? '.yellow),
    10
  );

  for (let i = 0; i < txCount; i++) {
    for (const wallet of wallets) {
      await sendTransaction(wallet);
    }
    if (txCount > 1 && i < txCount - 1) {
      console.log(`Sleeping for 30 seconds... (${i + 1}/${txCount})`.green);
      await sleep(30000);
    }
  }

  console.log('All transactions are done!'.green);
})();
