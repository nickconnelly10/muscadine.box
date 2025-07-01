# Muscadine

**Bitcoin and DeFi self-sovereignty.**

## 🌐 Live Sites

- **Marketing Site**: [https://muscadine.box](https://muscadine.box)
- **DeFi Dashboard**: [https://app.muscadine.box](https://app.muscadine.box)

## 🎯 Our Mission

At Muscadine, we believe Bitcoin and crypto are transforming the world—returning power to individuals through decentralization, financial sovereignty, and censorship-resistant technology. We began as a Bitcoin security consultancy, helping family and friends deploy nodes, establish non-custodial key management, and secure their assets with best-in-class privacy and resilience.

We see DeFi as an extension of this mission—a system that can democratize finance at a global scale. While our roots are in Bitcoin, we embrace the innovation of Ethereum's infrastructure, using it to build Bitcoin-aligned tools and vaults on scalable, composable protocols like Base.

Our mission is to empower individuals and institutions with secure, self-sovereign crypto infrastructure—built for a decentralized future.

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
   Open [http://localhost:3001](http://localhost:3001)

3. **DeFi App Site** (app.muscadine.box)
   ```bash
   cd app-site
   npm install
   npm run dev
   ```
   Open [http://localhost:3002](http://localhost:3002)

## 🛠 Tech Stack

### Marketing Site
- **Framework**: Vite 7.0.0 + React 18.2.0 + TypeScript 5.0.2
- **Styling**: Tailwind CSS 3.3.3
- **Fonts**: Playfair Display & Inter
- **Deployment**: Vercel
- **Security**: ESLint with TypeScript rules

### DeFi Dashboard
- **Framework**: Vite 7.0.0 + React 18.2.0 + TypeScript 5.0.2
- **Styling**: Tailwind CSS 3.3.3
- **Web3**: wagmi + viem
- **Charts**: Recharts 2.8.0
- **Animations**: Framer Motion 12.20.1
- **State Management**: TanStack Query 5.17.9
- **Networks**: Base (Coinbase L2)
- **Protocol**: Morpho Blue vaults
- **Deployment**: Vercel
- **Security**: ESLint with TypeScript rules

## 🔒 Security & Performance

- ✅ **No Vulnerabilities**: All dependencies updated to latest secure versions
- ✅ **Vite 7.0.0**: Latest build tool with security fixes
- ✅ **TypeScript**: Strict type checking for code quality
- ✅ **ESLint**: Code quality and security linting
- ✅ **Optimized Build**: Minified and compressed assets
- ✅ **Security Headers**: XSS protection and content type options
- ✅ **Web3 Security**: Proper wallet connection validation

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

## 🔧 Our Services

### Bitcoin & Crypto Services
- **Node Deployment**: Professional Bitcoin node setup and maintenance
- **Key Management**: Non-custodial key management solutions
- **Security Audits**: Comprehensive security assessments
- **Privacy Solutions**: Advanced privacy and anonymity tools

### DeFi Infrastructure
- **Vault Management**: Self-custodial DeFi vaults on Base network
- **Portfolio Tracking**: Real-time portfolio monitoring and analytics
- **Yield Optimization**: Competitive yields through Morpho Blue protocol

## 🔒 Security Features

- **Self-custodial vaults** - users maintain control of their assets
- **Base network security** - leveraging Coinbase's L2 infrastructure
- **Morpho Blue protocol** - battle-tested lending infrastructure
- **No protocol fees** - maximizing user returns
- **Latest dependencies** - all packages updated to secure versions

## 🚧 Beta Status

Our DeFi application is currently in **beta**. Features include:
- ✅ Wallet connection (MetaMask, Coinbase Wallet, Rabby)
- ✅ Live portfolio tracking
- ✅ Real-time APY data from Morpho
- ✅ Vault deposit/withdrawal functionality
- ✅ Base network integration
- ✅ Security optimized with no vulnerabilities

## 📚 Educational Content

Access our research and articles on Bitcoin, finance, life, and more:
- **Substack**: [nicholasconnelly.substack.com](https://nicholasconnelly.substack.com/)
- **Latest thoughts, deep dives, and educational content**
- **Designed to empower your journey in crypto and beyond**

## 📝 Environment Variables

No environment variables required for basic functionality. The app connects directly to Base network and Morpho API endpoints.

## 🚀 Deployment

Both sites are deployed on Vercel with automatic deployments from the main branch:

- Marketing site: `muscadine.box`
- App site: `app.muscadine.box`

## 📞 Contact & Connect

- **Email**: nickconnelly10@gmail.com
- **Twitter**: [@nicklutk](https://twitter.com/nicklutk)
- **Articles**: [Substack](https://nicholasconnelly.substack.com/)

### Professional Services
Get in touch with us for professional Bitcoin and crypto handling in privacy, security, and proper setups. Our expertise spans from secure node deployment to institutional-grade custody solutions, ensuring your digital assets are protected with best-in-class security practices.

## 📄 License

This project is owned by Muscadine. All rights reserved.

## 🔧 Maintenance

- **Dependencies**: Updated to latest secure versions
- **Security**: Regular npm audit checks
- **Performance**: Optimized build process with Vite 7
- **Code Quality**: TypeScript strict mode and ESLint enforcement
- **Web3 Security**: Proper wallet connection validation and error handling

---

*Built on BITCOIN • Secure • Transparent • Professional* 