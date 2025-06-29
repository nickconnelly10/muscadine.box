# Muscadine Finance

A professional DeFi platform built on Base network, featuring a marketing site and DeFi dashboard with ERC-4626 vault management.

## Project Structure

This project consists of two main components:

1. **Marketing Site** (`muscadine.box`) - Clean, classy Roman aesthetic with company information
2. **DeFi Dashboard** (`app.muscadine.box`) - Interactive DeFi platform with wallet connection and vault management

## Features

### Marketing Site
- Professional Roman aesthetic design with stone/gold color scheme
- Company information and mission statement
- "What is Our App" section explaining DeFi vault operations
- Contact information and Bitcoin services
- Substack link for articles and research
- Call-to-action buttons linking to the DeFi dashboard
- Responsive design with Tailwind CSS

### DeFi Dashboard
- Wallet connection (Coinbase Wallet, MetaMask, Rabby)
- Real-time portfolio tracking with live wallet data
- ERC-4626 vault management for:
  - USDC Vault (`0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F`)
  - wETH Vault (`0x21e0d366272798da3A977FEBA699FCB91959d120`)
  - cbBTC Vault (`0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9`)
- Live APY data from on-chain sources
- Approve, Supply, and Withdraw functionality
- Real-time transaction status tracking
- No fake or hardcoded data - all values from actual wallet connections

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Web3**: Wagmi + Viem
- **Charts**: Recharts
- **Network**: Base (Coinbase L2)
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

2. Install dependencies for both sites:
```bash
# Marketing site
cd marketing-site
npm install

# DeFi dashboard
cd ../app-site
npm install
```

3. Start the development servers:
```bash
# Marketing site (port 3001)
cd marketing-site
npm run dev

# DeFi dashboard (port 3002)
cd ../app-site
npm run dev
```

4. Open your browser and navigate to:
   - `http://localhost:3001` for the marketing site
   - `http://localhost:3002` for the DeFi dashboard

## Development

### Available Scripts

For each site directory:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
muscadine.box/
├── marketing-site/          # Marketing site (muscadine.box)
│   ├── src/
│   │   ├── components/
│   │   │   └── MarketingSite.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── README.md
├── app-site/               # DeFi dashboard (app.muscadine.box)
│   ├── src/
│   │   ├── components/
│   │   │   ├── DeFiDashboard.tsx
│   │   │   └── VaultCard.tsx
│   │   ├── config/
│   │   │   └── base.ts
│   │   ├── hooks/
│   │   │   └── usePortfolioData.ts
│   │   ├── services/
│   │   │   └── morphoApi.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── README.md
├── README.md
├── DEPLOYMENT.md
└── SEPARATE_DEPLOYMENT.md
```

## Deployment

### Domain Configuration

The application uses separate deployments for each site:

- **Marketing Site** (`muscadine.box`) → Deployed from `marketing-site/`
- **DeFi Dashboard** (`app.muscadine.box`) → Deployed from `app-site/`

### Build and Deploy

Each site has its own deployment process:

1. **Marketing Site**:
```bash
cd marketing-site
npm run build
# Deploy dist/ folder to muscadine.box
```

2. **DeFi Dashboard**:
```bash
cd app-site
npm run build
# Deploy dist/ folder to app.muscadine.box
```

### Environment Variables

No environment variables are required for basic functionality. The application uses public RPC endpoints for Base network.

## Vault Addresses

The following ERC-4626 vaults are supported on Base network:

| Asset | Address | Current APY |
|-------|---------|-------------|
| USDC | `0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F` | Live from on-chain |
| wETH | `0x21e0d366272798da3A977FEBA699FCB91959d120` | Live from on-chain |
| cbBTC | `0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9` | Live from on-chain |

## Data Sources

- **Token Prices**: Real-time from on-chain sources
- **Vault APYs**: Live from Morpho protocol
- **Wallet Balances**: Direct from Base network
- **Portfolio Values**: Calculated from real token prices and balances

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
- Email: nickconnelly10@icloud.com
- Twitter: @nicklutk
- Website: https://muscadine.box
- Articles: https://nicholasconnelly.substack.com/ 