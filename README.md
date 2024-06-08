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

3. Prepare `accounts.json` and `recipients.json` files. The `accounts.json` file should contain an array of mnemonics for your wallet accounts. The `recipients.json` file (optional) can contain an array of recipient addresses to send tokens to. If not provided, the bot will generate new addresses for each transaction.

4. Run the bot:

   ```bash
   npm start
   ```

5. Follow the prompts to specify the number of transactions and, optionally, the amount of $NIL to send in each transaction.

## Configuration

### accounts.json

Example:

```json
[
  "mnemonic1 abc def ghe ijk",
  "mnemonic2 lmn opq rst uvw",
  "mnemonic3 xyz abc def ghi"
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