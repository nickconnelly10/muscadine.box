import React, { useState, useCallback } from 'react'

const MarketingSite: React.FC = () => {
  const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  const appUrl = isLocalhost ? 'http://localhost:3002' : 'https://defi.muscadine.box'
  const [activeTab, setActiveTab] = useState<'about' | 'app' | 'roadmap'>('about')
  
  // Bitcoin and DeFi state
  const [bitcoinTab, setBitcoinTab] = useState<'node' | 'mempool'>('node')
  const [defiTab, setDefiTab] = useState<'portfolio' | 'lending' | 'swap' | 'explorer'>('portfolio')
  
  // Explanations
  const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";
  const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";
  const portfolioExplanation = "Portfolio tracking lets you monitor your crypto assets and DeFi positions across multiple protocols in one place. It helps you stay informed about your balances, yields, and overall performance.";
  const lendingExplanation = "Earn & Borrow lets you lend your crypto to earn interest or borrow assets by providing collateral. These protocols are non-custodial and operate transparently on-chain.";
  const swapExplanation = "Token Swap allows you to exchange one cryptocurrency for another instantly using decentralized exchanges, without relying on a central authority.";
  const blockExplorerExplanation = "A block explorer is a tool that lets you view and search all transactions, addresses, and blocks on a blockchain. It provides transparency and insight into network activity.";

  // External link handlers
  const openMempool = useCallback(() => {
    window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  }, []);

  const openZerion = useCallback(() => {
    window.open('https://app.zerion.io/portfolio/overview', '_blank', 'noopener,noreferrer');
  }, []);

  const openAave = useCallback(() => {
    window.open('https://app.aave.com/', '_blank', 'noopener,noreferrer');
  }, []);

  const openMoonwell = useCallback(() => {
    window.open('https://moonwell.fi/portfolio', '_blank', 'noopener,noreferrer');
  }, []);

  const openMorpho = useCallback(() => {
    window.open('https://app.morpho.org/base/earn', '_blank', 'noopener,noreferrer');
  }, []);

  const openAerodrome = useCallback(() => {
    window.open('https://aerodrome.finance/', '_blank', 'noopener,noreferrer');
  }, []);

  const openUniswap = useCallback(() => {
    window.open('https://app.uniswap.org/', '_blank', 'noopener,noreferrer');
  }, []);

  const openBlockExplorer = useCallback(() => {
    window.open('https://basescan.org/', '_blank', 'noopener,noreferrer');
  }, []);

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
            onClick={(e) => e.stopPropagation()}
          >
            About
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50/50"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 className="text-hero gradient-text mb-8 animate-fade-in">
            Muscadine
          </h1>
          <p className="text-display text-stone-700 max-w-4xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Bitcoin and DeFi self-sovereignty
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a 
              href={appUrl}
              className="btn-primary text-lg px-12 py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </a>
            <a 
              href="https://nicholasconnelly.substack.com/"
              className="btn-secondary text-lg px-12 py-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our Articles
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* Tabbed Section */}
        <section className="mb-16">
          <div className="card-elevated animate-slide-in-right">
            {/* Tab Navigation */}
            <div className="flex border-b border-stone-200 mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'text-gold-600 border-b-2 border-gold-600'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
                aria-selected={activeTab === 'about'}
                role="tab"
              >
                About Muscadine
              </button>
              <button
                onClick={() => setActiveTab('app')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'app'
                    ? 'text-gold-600 border-b-2 border-gold-600'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
                aria-selected={activeTab === 'app'}
                role="tab"
              >
                What Is Our App
              </button>
              <button
                onClick={() => setActiveTab('roadmap')}
                className={`px-6 py-3 font-semibold text-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'roadmap'
                    ? 'text-gold-600 border-b-2 border-gold-600'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
                aria-selected={activeTab === 'roadmap'}
                role="tab"
              >
                Roadmap
              </button>
            </div>

            {/* Tab Content */}
            <div role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
              {activeTab === 'about' && (
                <div className="space-y-8 text-body">
                  <p>
                    At Muscadine, we believe Bitcoin and crypto are transforming the world—returning power to individuals through decentralization, financial sovereignty, and censorship-resistant technology. We began as a Bitcoin security consultancy, helping family and friends deploy nodes, establish non-custodial key management, and secure their assets with best-in-class privacy and resilience.
                  </p>
                  <p>
                    We see DeFi as an extension of this mission—a system that can democratize finance at a global scale. While our roots are in Bitcoin, we embrace the innovation of Ethereum's infrastructure, using it to build Bitcoin-aligned tools and vaults on scalable, composable protocols like Base.
                  </p>
                  <p>
                    Our mission is to empower individuals and institutions with secure, self-sovereign crypto infrastructure—built for a decentralized future.
                  </p>
                </div>
              )}
              
              {activeTab === 'app' && (
                <div className="space-y-8 text-body">
                  <p>
                    Our app is a digital home base designed to help users access trustworthy Bitcoin and DeFi tools—securely, simply, and sovereignly. Like a muscadine vine, it grows outward, linking you to the strongest parts of the decentralized ecosystem: from running a Bitcoin node, to viewing mempools, to learning about the financial revolution through DeFi. The goal is accessibility with resilience—technology that roots you in freedom.
                  </p>
                </div>
              )}
              
              {activeTab === 'roadmap' && (
                <div className="space-y-8 text-body">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-stone-800 mb-3">Short-Term Goals</h4>
                      <p className="text-stone-700">
                        Roll out intuitive UI enhancements and introduce new features that reinforce Muscadine's mission of secure, accessible on-chain tools.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-stone-800 mb-3">Long-Term Vision (by end of 2025)</h4>
                      <p className="text-stone-700">
                        Launch fully automated vault integrations to securely optimize yield on Bitcoin and USDC—giving users a hands-off, trustless way to earn.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Contact & Connect Section */}
        <section className="mb-16">
          <div className="card-elevated">
            <h2 className="section-title">Contact & Connect</h2>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-display font-semibold text-stone-800">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-caption text-stone-500">Contact</p>
                      <p className="text-body font-medium text-stone-800">Nicholas Connelly</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-caption text-stone-500">Email</p>
                      <p className="text-body font-medium text-stone-800">nickconnelly10@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect Section */}
              <div className="space-y-8">
                <h3 className="text-display font-semibold text-stone-800">Articles & Research</h3>
                <div className="space-y-6">
                  <p className="text-body">
                    Dive deeper into Bitcoin and DeFi with our curated Articles & Research. Subscribe to our Substack for weekly insights and exclusive content.
                  </p>
                  <a 
                    href="https://nicholasconnelly.substack.com/"
                    className="btn-primary inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read and Subscribe to our substack
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bitcoin & Crypto Services Section */}
            <div className="mt-16 pt-16 border-t border-stone-200">
              <div className="bg-gradient-to-r from-stone-50 to-gold-50 p-8 border border-stone-200">
                <h3 className="text-display font-semibold text-stone-800 mb-6">
                  Bitcoin & Crypto Services
                </h3>
                <p className="text-body mb-6">
                  Get in touch with us for professional Bitcoin and crypto handling in privacy, security, and proper setups. 
                  Our expertise spans from secure node deployment to institutional-grade custody solutions, 
                  ensuring your digital assets are protected with best-in-class security practices.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Node Deployment</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Key Management</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Security Audits</span>
                  <span className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm font-medium">Privacy Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
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
                <li><a href={appUrl} className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Launch App</a></li>
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
    </div>
  )
}

export default MarketingSite 