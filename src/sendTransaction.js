const {
  SigningStargateClient,
  GasPrice,
  coins,
  assertIsDeliverTxSuccess,
} = require('@cosmjs/stargate');
const { getRecipientAddress } = require('./getRecipientAddress');

async function sendTransaction(wallet) {
  const rpcEndpoint = 'https://nillion-testnet-rpc.polkachu.com/';
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    {
      gasPrice: GasPrice.fromString('0.002unil'),
    }
  );

  const recipient = await getRecipientAddress();
  const amount = coins(Math.floor(Math.random() * 10) + 1, 'unil');

  console.log(`Send 0.00000${amount[0].amount} $NIL to`.yellow, recipient);

  const [firstAccount] = await wallet.getAccounts();

  const transaction = await client.sendTokens(
    firstAccount.address,
    recipient,
    amount,
    'auto'
  );
  assertIsDeliverTxSuccess(transaction);

  console.log('Successfully broadcasted:'.green, transaction.transactionHash);
}

module.exports = { sendTransaction };
