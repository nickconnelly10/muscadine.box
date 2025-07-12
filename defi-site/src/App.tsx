import { useState } from 'react';

const MuscadineBanner = () => (
  <div className="w-full bg-gradient-to-r from-grape-700 via-gold-200 to-green-200 py-6 px-6 flex flex-col md:flex-row items-center justify-between text-stone-900 text-base font-medium shadow-md">
    <a href="https://muscadine.box" className="font-serif text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">Muscadine</a>
    <div className="flex flex-wrap gap-6 mt-3 md:mt-0">
      <a href="https://muscadine.box" className="hover:underline" target="_blank" rel="noopener noreferrer">Home</a>
    </div>
  </div>
);

const MuscadineFooter = () => (
  <footer className="bg-stone-800 text-stone-300 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Muscadine</h4>
          <p className="text-sm text-stone-400">
            Bitcoin and DeFi self-sovereignty.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://defi.muscadine.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Launch App</a></li>
            <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Articles</a></li>
            <li><a href="mailto:nickconnelly10@gmail.com?subject=Muscadine%20Inquiry" className="text-stone-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="text-stone-400 hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="https://github.com/your-repo" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Open Source</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://twitter.com/nicklutk" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Substack</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-700 pt-8 text-center">
        <p className="text-sm mb-4">&copy; 2025 Muscadine. All rights reserved.</p>
        <p className="text-xs text-stone-400">
          Built on BITCOIN • Secure • Transparent • Professional
        </p>
      </div>
    </div>
  </footer>
);

const AboutBitcoin = () => (
  <div className="p-6">
    <h2 className="section-title">What is Bitcoin?</h2>
    <p className="text-body mb-8">
      Bitcoin is a decentralized digital currency that enables peer-to-peer transactions without intermediaries, secured by cryptography and maintained on a distributed ledger (the blockchain).
    </p>
    <h3 className="text-display mb-4">Getting Started with Bitcoin</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">1. Buy Bitcoin on an Exchange</h4>
        <p className="text-body">
          Choose a reputable exchange—Coinbase is user-friendly—and purchase Bitcoin there, then transfer it to your self-hosted wallet. Peer-to-peer platforms are another great way to stack sats.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">2. Set Up Your Wallet</h4>
        <ul className="text-body space-y-2 ml-4">
          <li><strong>Cold Wallet:</strong> Use a SeedSigner (for paper-wallet setups; record every seed word carefully) or a Coldcard hardware wallet.</li>
          <li><strong>Hot Wallet:</strong> Sparrow Wallet works well for both watch-only (cold) setups and live transactions. Mobile options like BlueWallet are convenient too.</li>
        </ul>
        <p className="text-body mt-2">
          Always write down your seed phrase on paper and store it securely.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">3. Connect to a Node</h4>
        <p className="text-body">
          Point Sparrow Wallet (or your chosen wallet) to our self-hosted Electrum Server (details on the next page).
        </p>
      </div>
    </div>
    <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
      <p className="text-amber-800 font-medium text-body">Not your keys, not your coins.</p>
    </div>
  </div>
);

const AboutDefi = () => (
  <div className="p-6">
    <h2 className="section-title">What is DeFi?</h2>
    <p className="text-body mb-8">
      Decentralized finance (DeFi) is an open, permissionless ecosystem of financial applications built on blockchains, allowing anyone to lend, borrow, trade, and earn interest without traditional banks.
    </p>
    <h3 className="text-display mb-4">Getting Started with DeFi</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">1. Acquire Crypto</h4>
        <p className="text-body">
          Use a centralized exchange like Coinbase or a decentralized exchange such as Uniswap (low fees) to obtain cryptocurrency.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">2. Set Up Your Wallet</h4>
        <ul className="text-body space-y-2 ml-4">
          <li><strong>Cold Wallet:</strong> Use a Trezor or Ledger hardware device; record your 24-word seed on paper and store it securely. Connect via Rabby, MetaMask, or Phantom for DeFi interactions.</li>
          <li><strong>Hot Wallet:</strong> MetaMask, Rabby, or Phantom work well—always back up your seed phrase in a safe place.</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-stone-800 mb-2 font-serif">3. Choose Your Network</h4>
        <p className="text-body">
          Decide which blockchain to use (Ethereum, Base, Solana, etc.) based on the protocols you plan to use.
        </p>
      </div>
    </div>
    <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
      <p className="text-amber-800 font-medium text-body">Proceed carefully—only interact with projects you've vetted.</p>
    </div>
  </div>
);

function App() {
  const [mainTab, setMainTab] = useState<'bitcoin' | 'defi'>('bitcoin');
  const [bitcoinTab, setBitcoinTab] = useState<'about' | 'node' | 'mempool'>('about');
  const [defiTab, setDefiTab] = useState<'about' | 'lending' | 'swap' | 'portfolio'>('about');

  // Explanations (from MarketingSite)
  const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";
  const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";
  const portfolioExplanation = "Portfolio tracking lets you monitor your crypto assets and DeFi positions across multiple protocols in one place. It helps you stay informed about your balances, yields, and overall performance.";
  const lendingExplanation = "Earn & Borrow lets you lend your crypto to earn interest or borrow assets by providing collateral. These protocols are non-custodial and operate transparently on-chain.";
  const swapExplanation = "Token Swap allows you to exchange one cryptocurrency for another instantly using decentralized exchanges, without relying on a central authority.";

  // External link handlers
  const openMempool = () => window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  const openZerion = () => window.open('https://app.zerion.io/portfolio/overview', '_blank', 'noopener,noreferrer');
  const openAave = () => window.open('https://app.aave.com/', '_blank', 'noopener,noreferrer');
  const openMoonwell = () => window.open('https://moonwell.fi/portfolio', '_blank', 'noopener,noreferrer');
  const openMorpho = () => window.open('https://app.morpho.org/base/earn', '_blank', 'noopener,noreferrer');
  const openAerodrome = () => window.open('https://aerodrome.finance/', '_blank', 'noopener,noreferrer');
  const openUniswap = () => window.open('https://app.uniswap.org/', '_blank', 'noopener,noreferrer');

  // DeFi Card Component
  const DeFiCard = ({ title, subtitle, className = "", onClick, aboutLink }: { 
    title: string; 
    subtitle?: string; 
    className?: string; 
    onClick: () => void;
    aboutLink?: string;
  }) => (
    <div className={`bg-white border-2 border-stone-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`} onClick={onClick}>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-stone-800 mb-2 font-serif">{title}</h3>
        {subtitle && <p className="text-sm text-stone-600 mb-4 font-sans">{subtitle}</p>}
        {aboutLink && (
          <a
            href={aboutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 underline font-sans"
            onClick={e => e.stopPropagation()}
          >
            About
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 flex flex-col">
      <MuscadineBanner />
      <main className="flex-1 max-w-6xl mx-auto px-4 pb-20">
        {/* Main Tabs */}
        <div className="flex border-b border-gold-300 mb-12 mt-12">
          <button
            onClick={() => setMainTab('bitcoin')}
            className={`px-12 py-6 font-serif text-3xl font-bold transition-all duration-200 whitespace-nowrap rounded-t-lg ${mainTab === 'bitcoin' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}
          >
            Bitcoin
          </button>
          <button
            onClick={() => setMainTab('defi')}
            className={`px-12 py-6 font-serif text-3xl font-bold transition-all duration-200 whitespace-nowrap rounded-t-lg ${mainTab === 'defi' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}
          >
            DeFi
          </button>
        </div>
        {/* Tab Content */}
        {mainTab === 'bitcoin' && (
          <section className="mb-16">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-stone-800 font-serif">Bitcoin</h2>
            </div>
            <div className="bg-gradient-to-br from-gold-50 via-stone-50 to-green-50 rounded-2xl shadow-xl p-8 border-l-8 border-gold-400">
              <div className="flex border-b border-gold-200 mb-8 overflow-x-auto">
                <button onClick={() => setBitcoinTab('about')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'about' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>About</button>
                <button onClick={() => setBitcoinTab('node')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'node' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>Node</button>
                <button onClick={() => setBitcoinTab('mempool')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${bitcoinTab === 'mempool' ? 'text-gold-700 border-b-4 border-gold-500 bg-gold-50 shadow-sm' : 'text-stone-500 hover:text-gold-700'}`}>Mempool</button>
              </div>
              <div>
                {bitcoinTab === 'about' && <AboutBitcoin />}
                {bitcoinTab === 'node' && (
                  <div>
                    <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                      <p className="text-stone-700 font-sans">{nodeExplanation}</p>
                    </div>
                    <div className="bg-white border border-stone-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-stone-800 mb-4 font-serif">Node Connection Details</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-stone-600 mb-2 font-sans">Electrum Server Hostname:</p>
                          <div className="flex items-center gap-2">
                            <code className="bg-stone-100 px-3 py-2 rounded text-sm flex-1 break-all">lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion</code>
                            <button className="bg-stone-600 text-white px-3 py-2 rounded text-sm hover:bg-stone-700">Copy</button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 mb-2 font-sans">Port:</p>
                          <div className="flex items-center gap-2">
                            <span className="bg-stone-100 px-3 py-2 rounded text-sm">50001</span>
                            <button className="bg-stone-600 text-white px-3 py-2 rounded text-sm hover:bg-stone-700">Copy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {bitcoinTab === 'mempool' && (
                  <div>
                    <div className="mb-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
                      <p className="text-stone-900 font-sans">{mempoolExplanation}</p>
                    </div>
                    <div className="text-center">
                      <button 
                        className="bg-gold-600 text-white px-8 py-3 rounded-lg hover:bg-gold-700 transition-colors font-sans" 
                        onClick={openMempool}
                      >
                        Open Mempool Viewer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        {mainTab === 'defi' && (
          <section className="mb-16">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-stone-800 font-serif">DeFi</h2>
            </div>
            <div className="bg-gradient-to-br from-gold-50 via-stone-50 to-green-50 rounded-2xl shadow-xl p-8 border-l-8 border-gold-400">
              <div className="flex border-b border-gold-200 mb-8 overflow-x-auto">
                <button onClick={() => setDefiTab('about')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'about' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>About</button>
                <button onClick={() => setDefiTab('lending')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'lending' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>Earn & Borrow</button>
                <button onClick={() => setDefiTab('swap')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'swap' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>Token Swap</button>
                <button onClick={() => setDefiTab('portfolio')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'portfolio' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>Portfolio Tracking</button>
              </div>
              <div>
                {defiTab === 'about' && <AboutDefi />}
                {defiTab === 'lending' && (
                  <div>
                    <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                      <p className="text-stone-700 font-sans">{lendingExplanation}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <DeFiCard title="Aave" className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300" onClick={openAave} aboutLink="https://aave.com/docs" />
                      <DeFiCard title="Moonwell" className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300" onClick={openMoonwell} aboutLink="https://docs.moonwell.fi/moonwell/" />
                      <DeFiCard title="Morpho" className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300" onClick={openMorpho} aboutLink="https://docs.morpho.org/overview/" />
                    </div>
                  </div>
                )}
                {defiTab === 'swap' && (
                  <div>
                    <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                      <p className="text-stone-700 font-sans">{swapExplanation}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <DeFiCard title="Aerodrome" className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-300" onClick={openAerodrome} aboutLink="https://aerodrome.finance/docs" />
                      <DeFiCard title="Uniswap" className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-300" onClick={openUniswap} aboutLink="https://docs.uniswap.org/" />
                    </div>
                  </div>
                )}
                {defiTab === 'portfolio' && (
                  <div>
                    <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                      <p className="text-stone-700 font-sans">{portfolioExplanation}</p>
                    </div>
                    <DeFiCard title="Zerion" subtitle="Track any wallet" className="bg-gradient-to-br from-green-50 to-green-100 border-green-300" onClick={openZerion} />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      <MuscadineFooter />
    </div>
  );
}

export default App; 