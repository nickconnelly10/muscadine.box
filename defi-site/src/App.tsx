import { useState } from 'react';

const AboutBitcoin = () => (
  <div className="p-6">
    <h2 className="section-title">About Bitcoin</h2>
    <p>Content coming soon—an overview of Bitcoin’s history, technology, and use cases.</p>
  </div>
);

const AboutDefi = () => (
  <div className="p-6">
    <h2 className="section-title">About DeFi</h2>
    <p>Content coming soon—an introduction to decentralized finance, smart contracts, and ecosystem.</p>
  </div>
);

function App() {
  const [bitcoinTab, setBitcoinTab] = useState<'about' | 'node' | 'mempool'>('about');
  const [defiTab, setDefiTab] = useState<'about' | 'portfolio' | 'lending' | 'swap' | 'explorer'>('about');

  // Explanations (from MarketingSite)
  const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";
  const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";
  const portfolioExplanation = "Portfolio tracking lets you monitor your crypto assets and DeFi positions across multiple protocols in one place. It helps you stay informed about your balances, yields, and overall performance.";
  const lendingExplanation = "Earn & Borrow lets you lend your crypto to earn interest or borrow assets by providing collateral. These protocols are non-custodial and operate transparently on-chain.";
  const swapExplanation = "Token Swap allows you to exchange one cryptocurrency for another instantly using decentralized exchanges, without relying on a central authority.";
  const blockExplorerExplanation = "A block explorer is a tool that lets you view and search all transactions, addresses, and blocks on a blockchain. It provides transparency and insight into network activity.";

  // External link handlers
  const openMempool = () => window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  const openZerion = () => window.open('https://app.zerion.io/portfolio/overview', '_blank', 'noopener,noreferrer');
  const openAave = () => window.open('https://app.aave.com/', '_blank', 'noopener,noreferrer');
  const openMoonwell = () => window.open('https://moonwell.fi/portfolio', '_blank', 'noopener,noreferrer');
  const openMorpho = () => window.open('https://app.morpho.org/base/earn', '_blank', 'noopener,noreferrer');
  const openAerodrome = () => window.open('https://aerodrome.finance/', '_blank', 'noopener,noreferrer');
  const openUniswap = () => window.open('https://app.uniswap.org/', '_blank', 'noopener,noreferrer');
  const openBlockExplorer = () => window.open('https://basescan.org/', '_blank', 'noopener,noreferrer');

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
        <h3 className="text-xl font-semibold text-stone-800 mb-2">{title}</h3>
        {subtitle && <p className="text-sm text-stone-600 mb-4">{subtitle}</p>}
        {aboutLink && (
          <a
            href={aboutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 underline"
            onClick={e => e.stopPropagation()}
          >
            About
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* Bitcoin Section */}
        <section className="mt-20 mb-16">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">🍇</span>
            <h2 className="text-2xl font-bold text-stone-800">Bitcoin</h2>
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
                    <p className="text-stone-700">{nodeExplanation}</p>
                  </div>
                  <div className="bg-white border border-stone-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Node Connection Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-stone-600 mb-2">Electrum Server Hostname:</p>
                        <div className="flex items-center gap-2">
                          <code className="bg-stone-100 px-3 py-2 rounded text-sm flex-1 break-all">lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion</code>
                          <button className="bg-stone-600 text-white px-3 py-2 rounded text-sm hover:bg-stone-700">Copy</button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-stone-600 mb-2">Port:</p>
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
                  <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                    <p className="text-stone-700">{mempoolExplanation}</p>
                  </div>
                  <div className="text-center">
                    <button className="bg-gold-600 text-white px-8 py-3 rounded-lg hover:bg-gold-700 transition-colors" onClick={openMempool}>Open Mempool Viewer</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* DeFi Section */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">🍇</span>
            <h2 className="text-2xl font-bold text-stone-800">DeFi</h2>
          </div>
          <div className="bg-gradient-to-br from-gold-50 via-stone-50 to-green-50 rounded-2xl shadow-xl p-8 border-l-8 border-gold-400">
            <div className="flex border-b border-gold-200 mb-8 overflow-x-auto">
              <button onClick={() => setDefiTab('about')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'about' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>About</button>
              <button onClick={() => setDefiTab('portfolio')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'portfolio' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>Portfolio Tracking</button>
              <button onClick={() => setDefiTab('lending')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'lending' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>Earn & Borrow</button>
              <button onClick={() => setDefiTab('swap')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'swap' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>Token Swap</button>
              <button onClick={() => setDefiTab('explorer')} className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap rounded-t-lg ${defiTab === 'explorer' ? 'text-grape-700 border-b-4 border-grape-500 bg-grape-50 shadow-sm' : 'text-stone-500 hover:text-grape-700'}`}>Block Explorer</button>
            </div>
            <div>
              {defiTab === 'about' && <AboutDefi />}
              {defiTab === 'portfolio' && (
                <div>
                  <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                    <p className="text-stone-700">{portfolioExplanation}</p>
                  </div>
                  <DeFiCard title="Zerion" subtitle="Track any wallet" className="bg-gradient-to-br from-green-50 to-green-100 border-green-300" onClick={openZerion} />
                </div>
              )}
              {defiTab === 'lending' && (
                <div>
                  <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                    <p className="text-stone-700">{lendingExplanation}</p>
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
                    <p className="text-stone-700">{swapExplanation}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <DeFiCard title="Aerodrome" className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-300" onClick={openAerodrome} aboutLink="https://aerodrome.finance/docs" />
                    <DeFiCard title="Uniswap" className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-300" onClick={openUniswap} aboutLink="https://docs.uniswap.org/" />
                  </div>
                </div>
              )}
              {defiTab === 'explorer' && (
                <div>
                  <div className="mb-4 p-4 bg-stone-50 rounded-lg">
                    <p className="text-stone-700">{blockExplorerExplanation}</p>
                  </div>
                  <div className="text-center">
                    <button className="bg-grape-600 text-white px-8 py-3 rounded-lg hover:bg-grape-700 transition-colors" onClick={openBlockExplorer}>Open Block Explorer</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 