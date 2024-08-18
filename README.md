# asanjo_io
comprehensive tool designed for defi traders. schedule gasless task limit take order sloploss dca bot trade.

---

# DeFi Trade Tool

This project is a decentralized finance (DeFi) trade tool built with Next.js, leveraging ERC-4337 and ERC-7579 to enable advanced trading features such as gasless transactions, scheduled transactions, swaps, limit orders, stop loss, and take profit orders. The project integrates smart accounts to offer a seamless and efficient trading experience.

## Features

- **Gasless Transactions**: Powered by [Pimlico](https://pimlico.io), allowing users to execute transactions without worrying about gas fees.
- **Scheduled Transactions**: Implemented using the [Rhinestone](https://rhinestone.wtf) ERC-7579 module, enabling users to schedule transactions at a future time.
- **Swaps**: Support for token swaps using smart accounts.
- **Limit Orders**: Place orders that only execute when the asset reaches a specific price.
- **Stop Loss Orders**: Automatically sell assets if the price falls to a certain level to minimize losses.
- **Take Profit Orders**: Automatically sell assets once they reach a target profit level.

## Technologies Used

- **Next.js**: The React framework for building server-side rendered and static web applications.
- **ERC-4337**: A standard for smart contract accounts, enabling advanced features like batched transactions and account abstraction.
- **ERC-7579**: A standard for creating and managing scheduled transactions.
- **Smart Accounts**: Used to create and manage decentralized identities and transactions.
- **Pimlico**: A gasless transaction service, allowing users to execute transactions without paying gas fees directly.
- **Rhinestone**: A module for handling ERC-7579-based scheduled transactions.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MetaMask or any other Web3 wallet
- A connected smart account with Pimlico for gasless transactions
- API keys or environment variables for Rhinestone and other required services

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/defi-trade-tool.git
   cd defi-trade-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the required environment variables:
   ```
   NEXT_PUBLIC_API_KEY_PIMLICO=your_pimlico_api_key
   NEXT_PUBLIC_API_KEY_RHINESTONE=your_rhinestone_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Usage

- Connect your Web3 wallet ( WalletConnect with social login google, twitter, github etc.).
- Create or import a smart account.
- Explore the available trading tools (swaps, limit orders, stop loss, take profit, and scheduled transactions).
- Execute transactions and manage your DeFi trades directly from the interface.


## Acknowledgments

- Thanks to [Pimlico](https://pimlico.io) for providing the gasless transaction infrastructure.
- Thanks to [Rhinestone](https://rhinestone.wtf) for the ERC-7579 module.
- Shoutout to the WalletConnect, 1inch, Coinbase, Safe, and Magic teams for their support and sponsorship during the hackathon.

---
