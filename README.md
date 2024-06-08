# Nillion Airdrop Bot

Nillion Airdrop Bot is a tool for sending Nillion ($NIL) tokens to multiple recipients on the Nillion testnet. This bot is useful for distributing tokens in an airdrop scenario or for testing purposes.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/dante4rt/nillion-airdrop-bot.git
   ```

2. Install dependencies:

   ```bash
   cd nillion-airdrop-bot
   npm install
   ```

3. Prepare `accounts.json` and/or `privateKeys.json` and `recipients.json` files. 
    - The `accounts.json` file should contain an array of mnemonics for your wallet accounts.
    - The `privateKeys.json` file should contain an array of private keys for your wallet accounts.
    - The `recipients.json` file (optional) can contain an array of recipient addresses to send tokens to. If not provided, the bot will generate new addresses for each transaction.

4. Run the bot:

   ```bash
   npm start
   ```

5. Follow the prompts to:
   - Choose the wallet initialization method (0 for mnemonic, 1 for private key).
   - Specify the number of transactions.
   - The bot will dynamically sleep between 30 to 60 seconds between transactions if more than one transaction is specified.

## Configuration

### accounts.json

Example:

```json
[
  "abc def ghi jkl mno pqr stu vwx yz",
  "abc def ghi jkl mno pqr stu vwx yz",
  "abc def ghi jkl mno pqr stu vwx yz"
]
```

### privateKeys.json

Example:

```json
[
  "yourfirstprivatekeyinhexformat",
  "yoursecondprivatekeyinhexformat",
  "yourthirdprivatekeyinhexformat"
]
```

### recipients.json (optional)

Example:

```json
[
  "address1",
  "address2",
  "address3"
]
```

## Key Features

- Multi-account support: Manage multiple accounts effortlessly.
- Flexible transaction volume: Specify the desired number of transactions to execute.
- Customizable recipient options: Tailor transactions to specific recipients as needed.
- Dynamic sleep duration: The bot will dynamically sleep between 30 to 60 seconds between transactions if more than one transaction is specified.