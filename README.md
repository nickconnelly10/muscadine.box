# Muscadine Finance

**Bitcoin-aligned DeFi vault interface on Base, combining Bitcoin custody practices with Ethereum-native infrastructure via Morpho Blue.**

## 🌐 Live Sites

- **Marketing Site**: [https://muscadine.box](https://muscadine.box)
- **DeFi Dashboard**: [https://app.muscadine.box](https://app.muscadine.box)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd muscadine.box
   ```

2. **Marketing Site** (muscadine.box)
   ```bash
   cd marketing-site
   npm install
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **DeFi App Site** (app.muscadine.box)
   ```bash
   cd app-site
   npm install
   npm run dev
   ```
   Open [http://localhost:3002](http://localhost:3002)

## 🛠 Tech Stack

### Marketing Site
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

### DeFi Dashboard
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Web3**: wagmi + viem
- **Charts**: Recharts
- **Networks**: Base (Coinbase L2)
- **Protocol**: Morpho Blue vaults
- **Deployment**: Vercel

## 🏗 Project Structure

```
muscadine.box/
├── marketing-site/          # Marketing website (muscadine.box)
│   ├── src/
│   │   ├── components/
│   │   │   └── MarketingSite.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── app-site/               # DeFi dashboard (app.muscadine.box)
│   ├── src/
│   │   ├── components/
│   │   │   ├── DeFiDashboard.tsx
│   │   │   └── VaultCard.tsx
│   │   ├── hooks/
│   │   │   └── usePortfolioData.ts
│   │   ├── services/
│   │   │   └── morphoApi.ts
│   │   ├── config/
│   │   │   └── base.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
└── README.md
```

## 🔗 Supported Vaults

- **USDC Vault**: `0xf7e26Fa48A568b8b0038e104DfD8ABdf0f99074F`
- **wETH Vault**: `0x21e0d366272798da3A977FEBA699FCB91959d120`
- **cbBTC Vault**: `0xAeCc8113a7bD0CFAF7000EA7A31afFD4691ff3E9`

## 🎨 Design Philosophy

- **Roman-inspired aesthetic** with stone/granite color palettes
- **Timeless, minimal design** emphasizing security and professionalism
- **Bitcoin-aligned** with focus on self-sovereignty and decentralization
- **Responsive design** optimized for all devices

## 🔒 Security Features

- **Self-custodial vaults** - users maintain control of their assets
- **Base network security** - leveraging Coinbase's L2 infrastructure
- **Morpho Blue protocol** - battle-tested lending infrastructure
- **No protocol fees** - maximizing user returns

## 🚧 Beta Status

This application is currently in **beta**. Features include:
- ✅ Wallet connection (MetaMask, Coinbase Wallet, Rabby)
- ✅ Live portfolio tracking
- ✅ Real-time APY data from Morpho
- ✅ Vault deposit/withdrawal functionality
- ✅ Base network integration

## 📝 Environment Variables

No environment variables required for basic functionality. The app connects directly to Base network and Morpho API endpoints.

## 🚀 Deployment

Both sites are deployed on Vercel with automatic deployments from the main branch:

- Marketing site: `muscadine.box`
- App site: `app.muscadine.box`

## 📞 Contact

- **Email**: nickconnelly10@icloud.com
- **Twitter**: [@nicklutk](https://twitter.com/nicklutk)
- **Articles**: [Substack](https://nicholasconnelly.substack.com/)

## 📄 License

This project is owned by Muscadine Finance. All rights reserved.

---

*Built on BITCOIN • Secure • Transparent • Professional* 