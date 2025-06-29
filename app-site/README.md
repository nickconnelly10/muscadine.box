# Muscadine Finance - DeFi Dashboard

The DeFi dashboard application for Muscadine Finance, providing wallet connection, portfolio tracking, and vault management on Base network.

## Features

- Wallet connection via wagmi
- Live portfolio tracking with charts
- Real-time token and vault balances
- Dynamic APY from Morpho API
- ERC-4626 vault interactions (deposit, withdraw, claim rewards)
- Base network integration

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Web3**: wagmi + viem
- **Charts**: Recharts
- **State Management**: React Query
- **Network**: Base (Coinbase L2)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for Vercel deployment. The app should be deployed to:
- `app.muscadine.box`

## Structure

```
src/
├── components/
│   ├── DeFiDashboard.tsx    # Main dashboard component
│   └── VaultCard.tsx        # Individual vault card
├── config/
│   └── base.ts             # Base network configuration
├── hooks/
│   └── usePortfolioData.ts # Portfolio data hook
├── services/
│   └── morphoApi.ts        # Morpho API service
├── App.tsx                 # App with wagmi config
├── main.tsx                # Entry point
└── index.css              # Global styles
```

## Vaults

The dashboard supports three ERC-4626 vaults on Base:
- **USDC Vault**: `0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F`
- **wETH Vault**: `0x21e0d366272798da3A977FEBA699FCB91959d120`
- **cbBTC Vault**: `0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9`

## Links

- **Marketing Site**: https://muscadine.box
- **Base Network**: https://base.org
- **Morpho Protocol**: https://morpho.org 