# Muscadine Finance LLC

A professional DeFi platform built on Base network, featuring a marketing site and DeFi dashboard with ERC-4626 vault management.

## Project Structure

This project consists of two main components:

1. **Marketing Site** (`muscadine.box`) - Clean, classy Roman aesthetic with company information
2. **DeFi Dashboard** (`app.muscadine.box`) - Interactive DeFi platform with wallet connection and vault management

## Features

### Marketing Site
- Professional Roman aesthetic design
- Company information and contact details
- Call-to-action buttons linking to the DeFi dashboard
- Responsive design with Tailwind CSS

### DeFi Dashboard
- Wallet connection (Coinbase Wallet, MetaMask, Rabby)
- Portfolio value tracking with historical charts
- ERC-4626 vault management for:
  - USDC Vault (`0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F`)
  - wETH Vault (`0x21e0d366272798da3A977FEBA699FCB91959d120`)
  - cbBTC Vault (`0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9`)
- Approve, Supply, and Withdraw functionality
- Real-time transaction status tracking

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Web3**: Wagmi + Viem
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Wallet Support**: Coinbase Wallet, MetaMask, Rabby

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Web3 wallet (Coinbase Wallet, MetaMask, etc.)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd muscadine.box
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
   - `http://localhost:3000` for the DeFi dashboard
   - The marketing site will be available at the root domain

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── MarketingSite.tsx    # Marketing site component
│   ├── DeFiDashboard.tsx    # Main DeFi dashboard
│   └── VaultCard.tsx        # Individual vault management
├── App.tsx                  # Main app with routing
├── main.tsx                 # Entry point
└── index.css               # Global styles
```

## Deployment

### Domain Configuration

The application automatically detects the subdomain and serves the appropriate content:

- **Root domain** (`muscadine.box`) → Marketing site
- **App subdomain** (`app.muscadine.box`) → DeFi dashboard

### Build and Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

3. Configure your domain and subdomain routing to point to the deployed application

### Environment Variables

No environment variables are required for basic functionality. The application uses public RPC endpoints for Base network.

## Vault Addresses

The following ERC-4626 vaults are supported:

| Asset | Address | APY |
|-------|---------|-----|
| USDC | `0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F` | 8.5% |
| wETH | `0x21e0d366272798da3A977FEBA699FCB91959d120` | 12.3% |
| cbBTC | `0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9` | 15.7% |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is proprietary software owned by Muscadine Finance LLC.

## Support

For support or questions, contact:
- Email: info@muscadine.box
- Website: muscadine.box 