import { useState, useCallback, memo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Theme toggle component
const ThemeToggle = memo(({ 
  isDark, 
  onToggle 
}: { 
  isDark: boolean; 
  onToggle: () => void; 
}) => (
  <motion.button
    className="theme-toggle"
    onClick={onToggle}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    {isDark ? "☀️" : "🌙"}
  </motion.button>
));

// Glossary button component
const GlossaryButton = memo(({ 
  onClick 
}: { 
  onClick: () => void; 
}) => (
  <motion.button
    className="glossary-button"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    title="Glossary of terms"
  >
    ? Glossary
  </motion.button>
));

// Glossary modal component
const GlossaryModal = memo(({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  const glossaryTerms = [
    {
      term: "Bitcoin",
      definition: "A decentralized digital currency that operates on a peer-to-peer network, enabling secure transactions without intermediaries."
    },
    {
      term: "Node (Electrum)",
      definition: "A Bitcoin node that provides a lightweight interface for connecting wallets and applications to the Bitcoin network."
    },
    {
      term: "DeFi",
      definition: "Decentralized Finance - financial services built on blockchain technology that operate without traditional intermediaries."
    },
    {
      term: "Token Swap",
      definition: "The process of exchanging one cryptocurrency token for another through decentralized exchanges or protocols."
    },
    {
      term: "Earn & Borrow",
      definition: "DeFi services that allow users to earn interest on deposited assets or borrow against their collateral."
    },
    {
      term: "Aave",
      definition: "A decentralized lending protocol that allows users to lend and borrow various cryptocurrencies with variable and stable interest rates."
    },
    {
      term: "Moonwell",
      definition: "A lending and borrowing protocol built on Moonbeam that provides yield opportunities for various assets."
    },
    {
      term: "Morpho",
      definition: "A lending protocol that optimizes capital efficiency by matching borrowers and lenders peer-to-peer while maintaining the security of traditional lending pools."
    },
    {
      term: "Aerodrome",
      definition: "A decentralized exchange and liquidity protocol on Base network for efficient token trading and yield farming."
    },
    {
      term: "Uniswap",
      definition: "A decentralized exchange protocol that enables automated token trading through liquidity pools."
    },
    {
      term: "Zerion",
      definition: "A DeFi portfolio tracker and wallet interface that allows users to monitor and manage their crypto assets across multiple protocols."
    },
    {
      term: "Ethereum",
      definition: "A decentralized blockchain platform that enables smart contracts and decentralized applications (dApps)."
    },
    {
      term: "Block Explorer",
      definition: "A web tool that allows users to view and track transactions, addresses, and blocks on a blockchain network."
    },
    {
      term: "Mempool",
      definition: "A collection of unconfirmed transactions waiting to be included in the next block of a blockchain."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glossary-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Glossary</h2>
              <motion.button
                className="modal-close"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>
            <div className="glossary-content">
              {glossaryTerms.map((item, index) => (
                <motion.div
                  key={item.term}
                  className="glossary-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>{item.term}</h3>
                  <p>{item.definition}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

// Footer component
const Footer = memo(() => (
  <motion.footer
    className="vine-footer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <a
      href="mailto:nickconnelly10@gmail.com?subject=Muscadine%20App%20Feedback"
      className="feedback-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Report a bug / Feedback
    </a>
  </motion.footer>
));

// Memoized Copy Button Component
const CopyButton = memo(({ 
  text, 
  type, 
  onClick 
}: { 
  text: string; 
  type: 'hostname' | 'port'; 
  onClick: (text: string, type: 'hostname' | 'port') => void; 
}) => (
  <motion.button 
    className="copy-button"
    onClick={() => onClick(text, type)}
    title={`Copy ${type}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.1 }}
  >
    📋
  </motion.button>
));

// Memoized DeFi Card Component with About Link
const DeFiCard = memo(({ 
  title, 
  subtitle, 
  className = "", 
  onClick,
  aboutLink
}: { 
  title: string; 
  subtitle?: string; 
  className?: string; 
  onClick: () => void;
  aboutLink?: string;
}) => (
  <motion.div 
    className={`defi-card ${className}`}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    layout
  >
    <motion.button
      onClick={onClick}
      className="defi-card-button"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="defi-title">{title}</span>
      {subtitle && <span className="defi-subtitle">{subtitle}</span>}
    </motion.button>
    {aboutLink && (
      <motion.a
        href={aboutLink}
        target="_blank"
        rel="noopener noreferrer"
        className="about-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
      >
        About
      </motion.a>
    )}
  </motion.div>
));

// 1. Add explanation content at the top of the main content
const bitcoinExplanation = "Bitcoin is a decentralized digital currency that operates on a peer-to-peer network, enabling secure transactions without intermediaries.";
const defiExplanation = "DeFi (Decentralized Finance) refers to financial services built on blockchain technology that operate without traditional intermediaries.";

// Add node explanation
const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";

// Add explanations for Earn & Borrow and Token Swap
const lendingExplanation = "Earn & Borrow lets you lend your crypto to earn interest or borrow assets by providing collateral. These protocols are non-custodial and operate transparently on-chain.";
const swapExplanation = "Token Swap allows you to exchange one cryptocurrency for another instantly using decentralized exchanges, without relying on a central authority.";

// Add mempool and block explorer explanations
const mempoolExplanation = "The mempool (memory pool) is where unconfirmed Bitcoin transactions wait before being added to a block. It helps the network manage and prioritize pending transactions.";
const blockExplorerExplanation = "A block explorer is a tool that lets you view and search all transactions, addresses, and blocks on a blockchain. It provides transparency and insight into network activity.";

// Add portfolio tracking explanation
const portfolioExplanation = "Portfolio tracking lets you monitor your crypto assets and DeFi positions across multiple protocols in one place. It helps you stay informed about your balances, yields, and overall performance.";

function App() {
  const [topTab, setTopTab] = useState<'bitcoin' | 'defi'>('bitcoin');
  const [bitcoinTab, setBitcoinTab] = useState<'node' | 'mempool'>('node');
  const [defiTab, setDefiTab] = useState<'portfolio' | 'lending' | 'swap' | 'explorer'>('portfolio');
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem('muscadine-theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('muscadine-theme', isDarkTheme ? 'dark' : 'light');
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prev => !prev);
  }, []);

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 2000);
  }, []);

  const copyToClipboard = useCallback(async (text: string, type: 'hostname' | 'port') => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${type === 'hostname' ? 'Hostname' : 'Port'} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      showToast('Failed to copy to clipboard');
    }
  }, [showToast]);

  const openMempool = useCallback(() => {
    window.open('https://mempool.space', '_blank', 'noopener,noreferrer');
  }, []);

  const navigateToMainSite = useCallback(() => {
    window.location.href = 'https://muscadine.box';
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

  return (
    <div className="vine-app">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div 
            className="toast-notification"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Header */}
      <motion.header 
        className="vine-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="header-content">
          <h1 
            className="dashboard-title"
            onClick={navigateToMainSite}
          >
            Muscadine Dashboard
          </h1>
          
          <div className="header-controls">
            <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
            <GlossaryButton onClick={() => setIsGlossaryOpen(true)} />
          </div>
        </div>
        
        {/* Intro Question */}
        <a 
          href="https://nicholasconnelly.substack.com/p/what-is-defi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="intro-question"
        >
          What is Bitcoin and DeFi?
        </a>
      </motion.header>

      {/* Main Content */}
      <main className="vine-main">
        {/* Top-level Tabs - reduce top margin even more */}
        <div className="tab-navigation big-tab-nav" style={{margin: '0.25rem 0 2rem 0'}}>
          <button
            className={`tab-button big-tab largest-tab ${topTab === 'bitcoin' ? 'active' : ''}`}
            onClick={() => setTopTab('bitcoin')}
            aria-selected={topTab === 'bitcoin'}
            role="tab"
          >
            Bitcoin
          </button>
          <button
            className={`tab-button big-tab largest-tab ${topTab === 'defi' ? 'active' : ''}`}
            onClick={() => setTopTab('defi')}
            aria-selected={topTab === 'defi'}
            role="tab"
          >
            DeFi
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content" role="tabpanel">
          {/* Bitcoin Tab Content */}
          {topTab === 'bitcoin' && (
            <div>
              {/* Explanation under Bitcoin tab */}
              <div className="content-section" style={{marginBottom: '1.5rem'}}>
                <h2 className="tab-title">Bitcoin</h2>
                <p className="tab-text">{bitcoinExplanation}</p>
              </div>
              {/* Nested Tabs for Bitcoin */}
              <div className="tab-navigation" style={{marginBottom: '1.5rem'}}>
                <button
                  className={`tab-button ${bitcoinTab === 'node' ? 'active' : ''}`}
                  onClick={() => setBitcoinTab('node')}
                  aria-selected={bitcoinTab === 'node'}
                  role="tab"
                >
                  Connect to a Node
                </button>
                <button
                  className={`tab-button ${bitcoinTab === 'mempool' ? 'active' : ''}`}
                  onClick={() => setBitcoinTab('mempool')}
                  aria-selected={bitcoinTab === 'mempool'}
                  role="tab"
                >
                  Mempool
                </button>
              </div>
              {/* Nested Tab Content */}
              {bitcoinTab === 'node' && (
                <motion.div
                  className="tab-panel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="tab-title">Connect to a Node</h3>
                  {/* Node explanation */}
                  <div className="content-section" style={{marginBottom: '1rem'}}>
                    <p className="tab-text">{nodeExplanation}</p>
                  </div>
                  <div className="node-info">
                    <div className="info-row">
                      <p>Electrum Server Hostname:</p>
                      <div className="copy-container">
                        <code className="hostname">
                          lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion
                        </code>
                        <CopyButton 
                          text="lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion"
                          type="hostname"
                          onClick={copyToClipboard}
                        />
                      </div>
                    </div>
                    <div className="info-row">
                      <p>Port:</p>
                      <div className="copy-container">
                        <span className="port">50001</span>
                        <CopyButton 
                          text="50001"
                          type="port"
                          onClick={copyToClipboard}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {bitcoinTab === 'mempool' && (
                <motion.div
                  className="tab-panel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="tab-title">View Mempool</h3>
                  {/* Mempool explanation */}
                  <div className="content-section" style={{marginBottom: '1rem'}}>
                    <p className="tab-text">{mempoolExplanation}</p>
                  </div>
                  <div className="content-section">
                    <button 
                      className="mempool-button"
                      onClick={openMempool}
                    >
                      Open Mempool Viewer
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* DeFi Tab Content */}
          {topTab === 'defi' && (
            <div>
              {/* Explanation under DeFi tab */}
              <div className="content-section" style={{marginBottom: '1.5rem'}}>
                <h2 className="tab-title">DeFi</h2>
                <p className="tab-text">{defiExplanation}</p>
              </div>
              {/* Nested Tabs for DeFi */}
              <div className="tab-navigation" style={{marginBottom: '1.5rem'}}>
                <button
                  className={`tab-button ${defiTab === 'portfolio' ? 'active' : ''}`}
                  onClick={() => setDefiTab('portfolio')}
                  aria-selected={defiTab === 'portfolio'}
                  role="tab"
                >
                  Portfolio Tracking
                </button>
                <button
                  className={`tab-button ${defiTab === 'lending' ? 'active' : ''}`}
                  onClick={() => setDefiTab('lending')}
                  aria-selected={defiTab === 'lending'}
                  role="tab"
                >
                  Earn & Borrow
                </button>
                <button
                  className={`tab-button ${defiTab === 'swap' ? 'active' : ''}`}
                  onClick={() => setDefiTab('swap')}
                  aria-selected={defiTab === 'swap'}
                  role="tab"
                >
                  Token Swap
                </button>
                <button
                  className={`tab-button ${defiTab === 'explorer' ? 'active' : ''}`}
                  onClick={() => setDefiTab('explorer')}
                  aria-selected={defiTab === 'explorer'}
                  role="tab"
                >
                  Block Explorer
                </button>
              </div>
              {/* Nested Tab Content */}
              {defiTab === 'portfolio' && (
                <div>
                  {/* Portfolio tracking explanation */}
                  <div className="content-section" style={{marginBottom: '1rem'}}>
                    <p className="tab-text">{portfolioExplanation}</p>
                  </div>
                  <DeFiCard 
                    title="Zerion"
                    subtitle="Track any wallet"
                    className="zerion-card"
                    onClick={openZerion}
                  />
                </div>
              )}
              {defiTab === 'lending' && (
                <div>
                  {/* Lending explanation */}
                  <div className="content-section" style={{marginBottom: '1rem'}}>
                    <p className="tab-text">{lendingExplanation}</p>
                  </div>
                  {/* Protocol cards in a row, spaced evenly */}
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', gap: '1.5rem', maxWidth: 900, margin: '0 auto'}}>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'flex-start'}}>
                      <DeFiCard 
                        title="Aave"
                        className="aave-card"
                        onClick={openAave}
                        aboutLink="https://aave.com/docs"
                      />
                    </div>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                      <DeFiCard 
                        title="Moonwell"
                        className="moonwell-card"
                        onClick={openMoonwell}
                        aboutLink="https://docs.moonwell.fi/moonwell/"
                      />
                    </div>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                      <DeFiCard 
                        title="Morpho"
                        className="morpho-card"
                        onClick={openMorpho}
                        aboutLink="https://docs.morpho.org/overview/"
                      />
                    </div>
                  </div>
                </div>
              )}
              {defiTab === 'swap' && (
                <div>
                  {/* Swap explanation */}
                  <div className="content-section" style={{marginBottom: '1rem'}}>
                    <p className="tab-text">{swapExplanation}</p>
                  </div>
                  {/* Protocol cards in a row, spaced evenly */}
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', gap: '1.5rem', maxWidth: 600, margin: '0 auto'}}>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'flex-start'}}>
                      <DeFiCard 
                        title="Aerodrome"
                        className="aerodrome-card"
                        onClick={openAerodrome}
                        aboutLink="https://aerodrome.finance/docs"
                      />
                    </div>
                    <div style={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                      <DeFiCard 
                        title="Uniswap"
                        className="uniswap-card"
                        onClick={openUniswap}
                        aboutLink="https://docs.uniswap.org/"
                      />
                    </div>
                  </div>
                </div>
              )}
              {defiTab === 'explorer' && (
                <div>
                  {/* Block Explorer explanation */}
                  <div className="content-section" style={{marginBottom: '1rem'}}>
                    <p className="tab-text">{blockExplorerExplanation}</p>
                  </div>
                  <DeFiCard 
                    title="Block Explorer"
                    subtitle="Browse Base-chain blocks & transactions"
                    className="explorer-card"
                    onClick={openBlockExplorer}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Glossary Modal */}
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 