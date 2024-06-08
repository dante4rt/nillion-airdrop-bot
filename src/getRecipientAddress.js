const fs = require('fs');
const { createReceiveAddress } = require('./createReceiveAddress');

async function getRecipientAddress() {
  try {
    const recipients = JSON.parse(fs.readFileSync('recipients.json', 'utf8'));
    if (recipients.length > 0) {
      const recipient =
        recipients[Math.floor(Math.random() * recipients.length)];
      return recipient;
    }
  } catch (error) {
    console.log(
      'No recipients.json file or file is empty, generating a new address...'
        .red
    );
  }
  return await createReceiveAddress();
}

module.exports = { getRecipientAddress };
